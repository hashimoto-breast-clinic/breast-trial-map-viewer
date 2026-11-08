'use strict';
// Dates describe result publications. They never use a data-edit/check timestamp as the publication date.
window.TrialPeriod = (() => {
  function jstDate(now = new Date()) {
    const parts = new Intl.DateTimeFormat('en-CA', {timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(now);
    return ['year','month','day'].map(k=>parts.find(p=>p.type===k).value).join('-');
  }
  function windowFor(today) {
    const [y,m,d]=today.split('-').map(Number), last=new Date(Date.UTC(y-7,m,0)).getUTCDate();
    return {today,cutoff:`${y-7}-${String(m).padStart(2,'0')}-${String(Math.min(d,last)).padStart(2,'0')}`};
  }
  function interval(raw, observedDate) {
    const m=String(raw||'').match(/^(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?$/);
    if(!m)return null;
    const y=+m[1], month=m[2]?+m[2]:null, day=m[3]?+m[3]:null;
    if(month!==null&&(month<1||month>12))return null;
    const last=month?new Date(Date.UTC(y,month,0)).getUTCDate():31;
    if(day!==null&&(day<1||day>last))return null;
    const lo=m[3]?raw:m[2]?`${raw}-01`:`${raw}-01-01`;
    let hi=m[3]?raw:m[2]?`${raw}-${last}`:`${raw}-12-31`;
    if(/^\d{4}-\d{2}-\d{2}$/.test(observedDate||'')&&observedDate>=lo&&observedDate<hi)hi=observedDate;
    return {lo,hi};
  }
  function classify(t,w) {
    const p=t.primaryPublication;
    if(!p?.date||p.status==='unverified')return 'unknown';
    const i=interval(p.date,t.checkedDate);
    if(!i)return 'unknown';
    if(i.hi<w.cutoff)return 'older';
    if(i.lo>=w.cutoff&&i.lo<=w.today)return 'recent';
    return 'unknown';
  }
  function recentUpdate(t,w) {
    if(classify(t,w)!=='older')return false;
    return [t.publicationDate,...(t.reports||[]).map(r=>r.publicationDate)].some(d=>{
      const i=interval(d,t.checkedDate);return i&&i.lo>=w.cutoff&&i.lo<=w.today;
    });
  }
  function label(t) {
    const p=t.primaryPublication;if(!p?.date||p.status==='unverified'||!interval(p.date,t.checkedDate))return '初回公表日未確認';
    return p.date.length===4?`${p.date}年（年まで確認）`:p.date.length===7?`${p.date}（月まで確認）`:p.date;
  }
  return {jstDate,windowFor,interval,classify,recentUpdate,label};
})();
