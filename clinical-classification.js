'use strict';
(function(root){
 const phaseLabel=t=>{const p=t.classification?.phase;if(p?.status==='not_applicable')return '相：該当なし';if(p?.status==='not_reported')return '相：確認資料に記載なし';if(p?.status==='insufficient_evidence')return '相：根拠確認未完';return t.phase?'Phase '+t.phase:'相：未確認';};
 const designLabel=t=>({randomized:'RCT（無作為化比較）',nonrandomized_interventional:'非無作為化介入',observational:'観察研究'})[t.classification?.studyDesignType]||t.classification?.studyDesign||t.design||'研究デザイン未確認';
 const isOwnerLocalTherapy=t=>t.classification?.variant==='owner-approved-local-therapy';
 const approvalLabel=t=>isOwnerLocalTherapy(t)?'本人の対象限定指示に基づく登録':'';
 // A related report retains its own classification; it never reclassifies its parent trial.
 const localResults=t=>[...(isOwnerLocalTherapy(t)?[{record:t,related:false}]:[]),...(Array.isArray(t.reports)?t.reports:[]).filter(isOwnerLocalTherapy).map(record=>({record,related:true}))];
 root.ClinicalClassification={phaseLabel,designLabel,approvalLabel,isOwnerLocalTherapy,localResults};
})(window);
