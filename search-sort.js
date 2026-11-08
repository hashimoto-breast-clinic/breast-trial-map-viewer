'use strict';
const searchState={query:'',sort:'newest'};
// Cache by object identity: result and registry records may share an id.
const searchTextCache=new WeakMap(), searchIndexCache=new WeakMap();
const searchDictionary=window.TRIAL_SEARCH_DICTIONARY||{drugs:[],regimens:[]};
function normalizeSearch(value){return String(value??'').normalize('NFKC').toLocaleLowerCase('ja-JP').replace(/[‐‑‒–—―−]/g,'-').replace(/\b(her2|hr|er|pr)\s*-(?![a-z])/g,'$1negative').replace(/[-_／/()（）]/g,'');}
function aliasKey(value){return String(value??'').normalize('NFKC').toLocaleLowerCase('ja-JP').replace(/[‐‑‒–—―−]/g,'-').replace(/[-_\s()（）]/g,'');}
const searchEntities=[...searchDictionary.drugs.map(d=>({...d,kind:'drug'})),...searchDictionary.regimens.map(r=>({...r,kind:'regimen'}))];
const searchAliases=searchEntities.flatMap(entity=>entity.aliases.map(alias=>({entity,alias,key:aliasKey(alias)}))).sort((a,b)=>b.key.length-a.key.length);
function findSearchEntities(value,kind){
 const text=String(value??'').normalize('NFKC').toLocaleLowerCase('ja-JP').replace(/[‐‑‒–—―−]/g,'-'),found=[];
 for(const a of searchAliases){if(kind&&a.entity.kind!==kind)continue;
  const pattern=[...a.key].map(c=>c.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('[\\s_-]*');
  const regex=a.regex||(a.regex=new RegExp(pattern,'g'));regex.lastIndex=0;let match;
  while((match=regex.exec(text))){const at=match.index,end=at+match[0].length;
   // Latin abbreviations/names are whole tokens. PTX cannot match nab-PTX,
   // AC cannot match PACE/ATAC, and TC cannot match an NCT identifier.
   if(/[a-z0-9]/.test(a.key[0])&&/[a-z0-9]/.test(text[at-1]||''))continue;
   if(/[a-z0-9]/.test(a.key.at(-1))&&/[a-z0-9]/.test(text[end]||''))continue;
   if(found.some(f=>at<f.end&&end>f.start))continue;
   found.push({entity:a.entity,start:at,end,alias:a.alias});
  }
 }
 return found.sort((a,b)=>a.start-b.start);
}
function searchableFields(t){return [
 ['試験名',t.id],['試験名',t.name],['登録番号',t.registryId],['登録番号',t.trial_registration],['登録番号',t.jrctId],
 ['対象・前治療条件',t.population],['対象・前治療条件',t.cardPopulation],['試験治療',t.experimental],['対照',t.control],
 ['主要評価項目',t.primaryEndpoint],['治療文脈',t.lineLabel],['HER2条件',t.her2Expression],['ESR1条件',t.esr1Context],
 ...arr(t.agents).map(v=>['収載薬剤（主介入・比較群等）',v]),...arr(t.regimenAgents).map(v=>['収載薬剤（併用基盤・比較群等）',v]),
 ...arr(t.reports).filter(r=>t.reportsOnly||String(r.id||'').startsWith('owner-')).flatMap(r=>(()=>{const pub=typeof window!=='undefined'&&Array.isArray(window.APPROVED_EXPLANATIONS),tag=t.reportsOnly?(pub?'関連報告':'保持中の関連報告'):(pub?'更新報告':'所有者承認済み更新報告');return [[tag,r.label],[tag,r.result],[tag,r.analysisPopulation]];})()),
 ...arr(t.subtypes).map(v=>['サブタイプ',v]),...arr(t.drugClasses).map(v=>['薬剤クラス',v]),
 ...arr(t.sources).flatMap(s=>[['出典タイトル',s.title],['出典URL',s.url]])
].filter(([,v])=>v);}
function searchText(t){if(!searchTextCache.has(t))searchTextCache.set(t,normalizeSearch(searchableFields(t).map(([,v])=>v).join(' ')));return searchTextCache.get(t);}
function searchIndex(t){
 if(searchIndexCache.has(t))return searchIndexCache.get(t);
 const drugs=new Map(),regimens=new Map();
 const add=(id,reason)=>{if(!drugs.has(id))drugs.set(id,[]);if(!drugs.get(id).includes(reason))drugs.get(id).push(reason);};
 for(const [field,value] of searchableFields(t)){
  // Source titles/URLs remain keyword-searchable, but do not establish a drug identity.
  if(field.startsWith('出典'))continue;
  for(const f of findSearchEntities(value,'drug'))add(f.entity.id,field);
 }
 // Only the reviewed exact treatment-arm quote authorizes a regimen label or its components.
 for(const r of searchDictionary.regimens){const matches=r.matches.filter(m=>m.trialId===t.id&&String(t[m.field]||'').includes(m.quote));
  if(matches.length){regimens.set(r.id,matches.map(m=>m.field==='experimental'?'試験治療':'対照'));for(const id of r.components)for(const m of matches)add(id,(m.field==='experimental'?'試験治療':'対照')+'・'+r.label+'の構成薬');}
 }
 // Phesgo is a fixed combination identity; it is not an alias for either antibody alone.
 if(drugs.has('phesgo'))for(const id of ['trastuzumab','pertuzumab'])for(const reason of drugs.get('phesgo'))add(id,reason+'・フェスゴの構成薬');
 const index={drugs,regimens};searchIndexCache.set(t,index);return index;
}
let parsedSearchQuery='',parsedSearchTerms=[];
function searchTerms(){
 if(parsedSearchQuery===searchState.query)return parsedSearchTerms;
 parsedSearchQuery=searchState.query;
 const raw=searchState.query.normalize('NFKC').trim();
 // Recognize full multiword general names first, then apply AND to the remaining words.
 const exact=searchEntities.find(e=>e.aliases.some(a=>aliasKey(a)===aliasKey(raw)));
 if(exact){parsedSearchTerms=[{entity:exact,query:raw}];return parsedSearchTerms;}
 const found=findSearchEntities(raw),remaining=[...raw];
 for(const f of found)remaining.fill(' ',f.start,f.end);
 const residual=remaining.join('');
 const keywords=residual.split(/\s+/).filter(v=>v&&!/^[+／/,、]+$/.test(v)).map(v=>({keyword:normalizeSearch(v),query:v}));
 parsedSearchTerms=[...found.map(f=>({entity:f.entity,query:f.alias})),...keywords];
 if(!parsedSearchTerms.length&&raw)parsedSearchTerms=[{keyword:normalizeSearch(raw),query:raw}];
 return parsedSearchTerms;
}
function searchMatchReasons(t){const index=searchIndex(t);return searchTerms().map(term=>{
 if(term.entity){const e=term.entity,fields=(e.kind==='drug'?index.drugs:index.regimens).get(e.id);return fields?{label:e.kind==='regimen'?e.label+'（'+e.composition+'）':e.label,fields,kind:e.kind}:null;}
 return searchText(t).includes(term.keyword)?{label:term.query,fields:searchableFields(t).filter(([,v])=>normalizeSearch(v).includes(term.keyword)).map(([f])=>f),kind:'keyword'}:null;
 });}
function matchesSearch(t){return !searchState.query.trim()||searchMatchReasons(t).every(Boolean);}
function searchMatchBadge(t){if(!searchState.query.trim())return '';const reasons=searchMatchReasons(t).filter(Boolean);return `<div class="search-match-reasons">${reasons.map(r=>`<span><b>${r.kind==='regimen'?'レジメン':r.kind==='drug'?'薬剤名一致':'キーワード'}：${esc(r.label)}</b><small>${esc([...new Set(r.fields)].join('・'))}</small></span>`).join('')}</div>`;}
function renderSearchExplanation(){
 const target=$('search-expansion');if(!target)return;
 const terms=searchTerms().filter(t=>t.entity);target.hidden=!terms.length;
 target.textContent=terms.map(({entity:e})=>e.kind==='regimen'?e.label+'＝'+e.composition:e.label+'（一般名・商品名・略称を照合）').join(' / ');
 const sources=$('search-name-sources');if(sources){sources.hidden=!terms.length;sources.innerHTML=terms.map(({entity:e})=>`<span><b>${esc(e.label)}</b> ${[...new Set(e.sources)].map((u,i)=>link(u,'名称の出典'+(i+1))).join(' ')}</span>`).join('');}
}
function usableDate(value){const raw=String(value||'');const parsed=period.interval(raw);return parsed&&parsed.lo<=timeWindow.today?{raw,key:parsed.lo}:null;}
function latestReportDate(t){const dates=[t.publicationDate,...arr(t.reports).map(r=>r.publicationDate)].map(usableDate).filter(Boolean);if(!dates.length&&t.publicationYear)dates.push(usableDate(t.publicationYear));return dates.filter(Boolean).sort((a,b)=>b.key.localeCompare(a.key))[0]||null;}
function sortWithDate(list,dateFor,sort=searchState.sort){return list.map((t,i)=>({t,i,d:dateFor(t)})).sort((a,b)=>{if(sort==='name')return a.t.name.localeCompare(b.t.name,'ja')||a.i-b.i;if(!a.d&&!b.d)return a.i-b.i;if(!a.d)return 1;if(!b.d)return -1;return (sort==='oldest'?a.d.key.localeCompare(b.d.key):b.d.key.localeCompare(a.d.key))||a.i-b.i;}).map(x=>x.t);}
function sortPublished(list){return sortWithDate(list,latestReportDate);}
function sortRegistry(list){return sortWithDate(list,t=>usableDate(t.registryLastUpdated||t.registryLastUpdate));}
function publicationSortBadge(t){const d=latestReportDate(t);return `<p class="latest-report-date">掲載結果の最新公表：${d?esc(d.raw)+(d.raw.length===4?'（年まで確認）':d.raw.length===7?'（月まで確認）':''):'日付未確認'}</p>`;}
function renderSearchSort(){renderSearchExplanation();const ongoing=state.view==='ongoing',registry=state.view==='pipeline'||state.view==='ongoing';$('clear-search').hidden=!searchState.query;$('broaden-search').hidden=!searchState.query.trim();$('result-sort-wrap').hidden=ongoing;const options=$('result-sort').options;options[0].textContent=registry?'登録更新日の新しい順':'公表日の新しい順';options[1].textContent=registry?'登録更新日の古い順':'公表日の古い順';$('result-sort').value=searchState.sort;$('sort-note').textContent=ongoing?'初期表示は登録情報の更新日が新しい順です。主要評価完了予定日は発表予定日ではありません。':registry?'登録情報の更新日で並べます。論文の公表日とは別の情報です。':state.view==='local-therapy'?'本人承認の結果・関連報告を含む掲載公表日で並べます。親試験の初回公表時期は絞り込みに使いません。日付未確認は最後に表示します。':'掲載している主報告・更新報告の公表日で並べます。試験の「最近7年／それ以前」は初回主要結果の日付で分類したままです。日付未確認は最後に表示します。';}
function resetSearchSort(){searchState.query='';searchState.sort='newest';$('trial-query').value='';$('result-sort').value='newest';}
function setupSearchSort(){$('trial-query').addEventListener('input',()=>{searchState.query=$('trial-query').value;render();});$('clear-search').addEventListener('click',()=>{searchState.query='';$('trial-query').value='';render();$('trial-query').focus();});$('broaden-search').addEventListener('click',()=>{const q=searchState.query;reset();state.setting='all';state.period='all';searchState.query=q;$('trial-query').value=q;render();});$('result-sort').addEventListener('change',()=>{searchState.sort=$('result-sort').value;render();});}
