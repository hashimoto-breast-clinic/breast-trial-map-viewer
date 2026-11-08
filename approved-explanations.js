'use strict';
// Shared with the static-source PubMed ingestion contract. Never replace the base dataset.
window.mergeOwnerPublications=function(publications){
 const list=window.TRIALS||[],lines=window.TREATMENT_LINES||{};
 const keys=t=>[...(t.paperKeys||[]),...([t.sourceUrl,t.url,...(t.sources||[]).map(s=>s.url)]).flatMap(u=>{const value=String(u||''),pmid=value.match(/pubmed\.ncbi\.nlm\.nih\.gov\/(\d+)/),doi=value.match(/doi\.org\/(10\.\d{4,9}\/[^?#\s]+)/i);return [...(pmid?['pmid:'+Number(pmid[1])]:[]),...(doi?['doi:'+doi[1].toLowerCase()]:[])];})];
 for(const p of publications){if(p.record&&!list.some(t=>t.id===p.trialId)){list.push({...p.record,primaryAnalysisKey:p.analysisKey});if(p.lineMetadata&&(Object.values(p.lineMetadata.axes||{}).some(a=>a&&a.lines&&a.lines.length)||!lines[p.trialId]))lines[p.trialId]=p.lineMetadata;}}
 for(const p of publications){const i=list.findIndex(t=>t.id===p.trialId);if(i<0)continue;const t=list[i];if(t.primaryAnalysisKey===p.analysisKey||keys(t).some(k=>p.paperKeys.includes(k))||(t.reports||[]).some(r=>r.id===p.report.id||r.analysisKey===p.analysisKey||keys(r).some(k=>p.paperKeys.includes(k))))continue;list[i]={...t,reports:[...(t.reports||[]),p.report]};}
 window.TREATMENT_LINES=lines;return list;
};
if(typeof document!=='undefined')(async()=>{
 if(document.readyState==='loading')await new Promise(resolve=>document.addEventListener('DOMContentLoaded',resolve,{once:true}));
 const status=document.getElementById('approved-status');
 const savedStatus=document.getElementById('clinical-save-status'),savedTime=document.getElementById('clinical-last-saved');
 function showSaveMetadata(metadata){
  savedTime.hidden=true;savedTime.textContent='';savedTime.removeAttribute('datetime');savedStatus.hidden=false;
  if(metadata?.state==='empty'){savedStatus.textContent='記録なし（追加解説なし）';return;}
  const date=typeof metadata?.lastSavedAt==='string'?new Date(metadata.lastSavedAt):null;
  if(metadata?.state!=='saved'||!date||!Number.isFinite(date.getTime())){savedStatus.textContent='未確認（保存日時の記録を確認できません）';return;}
  savedTime.dateTime=date.toISOString();savedTime.textContent=new Intl.DateTimeFormat('ja-JP',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hour12:false}).format(date)+' JST';savedTime.hidden=false;savedStatus.hidden=true;
 }
 if(Array.isArray(window.APPROVED_EXPLANATIONS)){
  // Public static bundle: data comes from approved-data.js; no network access.
  const list=window.APPROVED_EXPLANATIONS,meta=window.APPROVED_META||{};
  window.mergeOwnerPublications(list);renderCoverage();render();
  if(status){status.hidden=!list.length;status.textContent=list.length?'追加の試験・更新報告を既存マップに反映しています。各試験の詳細で出典と確認範囲をご確認ください。':'';}
  if(savedTime){const d=typeof meta.exportedAt==='string'?new Date(meta.exportedAt):null;savedTime.removeAttribute('datetime');if(d&&Number.isFinite(d.getTime()))savedTime.dateTime=d.toISOString();savedTime.textContent=`データ書き出し日：${meta.exportDateJa}`;savedTime.hidden=false;}
  if(savedStatus)savedStatus.hidden=true;
  return;
 }
 try{const r=await fetch('/api/approved',{credentials:'same-origin',cache:'no-store'});if(!r.ok)throw Error();const {explanations,saveMetadata}=await r.json();window.mergeOwnerPublications(explanations);renderCoverage();render();showSaveMetadata(saveMetadata);status.hidden=!explanations.length;status.textContent=explanations.length?'所有者承認済みの試験・更新報告を既存マップに反映しています。各試験の詳細で出典と確認範囲をご確認ください。':'';}catch{savedTime.hidden=true;savedStatus.hidden=false;savedStatus.textContent='取得失敗（再読み込みしてください）';status.hidden=false;status.textContent='追加・更新報告を読み込めませんでした。既存マップは表示できます。再読み込みしてください。';}
})();
