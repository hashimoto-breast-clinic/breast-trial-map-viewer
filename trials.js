window.TRIALS = [
  {
    "id": "keynote-522",
    "name": "KEYNOTE-522",
    "phase": "III",
    "design": "無作為化・二重盲検・プラセボ対照（2:1）",
    "setting": "early",
    "subtypes": [
      "TNBC"
    ],
    "stages": [
      "II",
      "III"
    ],
    "timing": [
      "neoadjuvant",
      "adjuvant"
    ],
    "population": "未治療の高リスク早期TNBC、臨床病期II–III。術前に登録し、手術後も割付薬を継続。PD-L1陽性を登録条件としない。",
    "experimental": "術前ペムブロリズマブ＋カルボプラチン／パクリタキセル→アントラサイクリン／シクロホスファミド、術後ペムブロリズマブ",
    "control": "同じ術前化学療法＋プラセボ、術後プラセボ",
    "trial_registration": "NCT03036488",
    "sources": [
      {
        "title": "Overall Survival with Pembrolizumab in Early-Stage Triple-Negative Breast Cancer",
        "url": "https://www.nejm.org/doi/10.1056/NEJMoa2409932",
        "kind": "原著・OS更新"
      },
      {
        "title": "Event-free Survival with Pembrolizumab in Early Triple-Negative Breast Cancer",
        "url": "https://www.nejm.org/doi/abs/10.1056/NEJMoa2112651",
        "kind": "原著・EFS解析"
      }
    ],
    "caveat": "周術期レジメン全体の比較。術前・術後ペムブロリズマブ各々の独立した寄与や、pCR後の術後投与省略は検証していない。",
    "primaryEndpoint": "pCR（ypT0/Tis ypN0）およびEFS",
    "result": "2024年OS解析：5年OS 86.6% vs 81.7%（P=0.002）。OSは副次評価項目。",
    "publicationYear": 2024,
    "publicationDate": "2024-09-15",
    "resultDate": "2024年OS報告（データカットオフ2024-03-22）",
    "checkedDate": "2026-10-06",
    "stageLabel": "術前の臨床病期。術後残存病変のみを対象に登録した試験ではない。",
    "cardPopulation": "未治療の高リスク早期TNBC、臨床病期II–III。術前に登録し、手術後も割付薬を継続。PD-L1陽性を登録条件としない。",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "表示結果の原著全文は未確認です。一次論文の抄録・公開された要約に基づき、対象条件の補足には試験計画なども参照しています。",
      "sourceUrl": "https://www.nejm.org/doi/10.1056/NEJMoa2409932"
    },
    "guidelineReferences": [
      {
        "trialId": "keynote-522",
        "guidelineId": "jbcs-2022-web-2024",
        "section": "薬物療法 CQ16",
        "title": "周術期トリプルネガティブ乳癌に対して，免疫チェックポイント阻害薬は勧められるか？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq16/",
        "citationEvidence": "参考文献2: Schmid et al., NEJM 2022（EFS）；参考文献3: Schmid et al., NEJM 2020（pCR）。 2024年OS報告そのものの引用を確認したものではない。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/35139274/",
          "https://pubmed.ncbi.nlm.nih.gov/32101663/"
        ],
        "interpretationNote": "2024年OS報告そのものの引用を確認したものではない。",
        "organization": "JBCS",
        "accessMethod": "学会公式WEB版の該当章・参考文献"
      },
      {
        "trialId": "keynote-522",
        "guidelineId": "asco-pembrolizumab-early-2022",
        "organization": "ASCO",
        "title": "Use of Immune Checkpoint Inhibitor Pembrolizumab in the Treatment of High-Risk, Early-Stage Triple-Negative Breast Cancer: ASCO Guideline Rapid Recommendation Update",
        "publicationDate": "2022-04-13",
        "section": "Background; Evidence Review; 2022 Updated Recommendation",
        "url": "https://ascopubs.org/doi/10.1200/JCO.22.00503",
        "citationEvidence": "KEYNOTE-522のEFS第4中間解析を更新根拠として明示。",
        "relationship": "explicit_citation",
        "verificationMethod": "indexed_official_guideline_body",
        "checkedDate": "2026-10-06",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）"
      }
    ],
    "lineBuckets": [],
    "regimenAgents": [],
    "agents": [],
    "drugClasses": [],
    "primaryPublication": {
      "date": "2020",
      "precision": "year",
      "sourceUrl": "https://www.nejm.org/doi/10.1056/NEJMoa1910549",
      "note": "初回pCR主要評価項目報告。2022年EFS、2024年OS更新とは区別。"
    },
    "reports": []
  },
  {
    "id": "katherine",
    "name": "KATHERINE",
    "phase": "III",
    "design": "無作為化・非盲検（1:1）",
    "setting": "early",
    "subtypes": [
      "HER2+"
    ],
    "stages": [
      "I",
      "II",
      "III"
    ],
    "timing": [
      "adjuvant"
    ],
    "population": "治療前HER2陽性で、タキサン＋トラスツズマブを含む術前療法後、乳房または腋窩に浸潤癌が残存。初診時T1–4 N0–3 M0（T1a/b N0は除外）。",
    "experimental": "術後T-DM1、14サイクル",
    "control": "術後トラスツズマブ、14サイクル",
    "trial_registration": "NCT01772472",
    "sources": [
      {
        "title": "Survival with Trastuzumab Emtansine in Residual HER2-Positive Breast Cancer",
        "url": "https://www.nejm.org/doi/10.1056/NEJMoa2406070",
        "kind": "原著・長期解析"
      },
      {
        "title": "Adjuvant T-DM1 versus trastuzumab in patients with residual invasive disease after neoadjuvant therapy for HER2-positive breast cancer: subgroup analyses from KATHERINE",
        "url": "https://www.annalsofoncology.org/article/S0923-7534%2821%2901168-6/fulltext",
        "kind": "原著・適格条件確認"
      }
    ],
    "caveat": "pCR症例や、術前療法を受けていないHER2陽性乳癌全般への比較ではない。T-DM1では有害事象による中止なども評価する必要がある。",
    "primaryEndpoint": "iDFS",
    "result": "2025年報告：7年iDFS 80.8% vs 67.1%（HR 0.54、95% CI 0.44–0.66）。7年OS 89.1% vs 84.4%。",
    "publicationYear": 2025,
    "publicationDate": "2025-01-15",
    "resultDate": "2025年iDFS最終・OS第2中間解析（追跡中央値8.4年）",
    "checkedDate": "2026-10-06",
    "stageLabel": "I–IIIは治療前の病期範囲。登録の決め手は術前療法後の浸潤癌残存であり、病期だけでは適格性を判定できない。",
    "cardPopulation": "治療前HER2陽性で、タキサン＋トラスツズマブを含む術前療法後、乳房または腋窩に浸潤癌が残存。初診時T1–4 N0–3 M0（T1a/b N0は除外）。",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "表示結果の原著全文は未確認です。一次論文の抄録・公開された要約に基づき、対象条件の補足には試験計画なども参照しています。",
      "sourceUrl": "https://www.nejm.org/doi/10.1056/NEJMoa2406070"
    },
    "guidelineReferences": [
      {
        "trialId": "katherine",
        "guidelineId": "jbcs-2022-web-2024",
        "section": "薬物療法 CQ13",
        "title": "術前薬物療法で病理学的完全奏効（pCR）が得られなかったHER2陽性早期乳癌に対する術後薬物療法として，トラスツズマブ エムタンシンは勧められるか？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq13/",
        "citationEvidence": "参考文献1: von Minckwitz et al., NEJM 2019；本文でKATHERINEを明示。 2025年長期OS報告そのものの引用を確認したものではない。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/30516102/"
        ],
        "interpretationNote": "2025年長期OS報告そのものの引用を確認したものではない。",
        "organization": "JBCS",
        "accessMethod": "学会公式WEB版の該当章・参考文献"
      },
      {
        "trialId": "katherine",
        "guidelineId": "asco-neoadjuvant-2021",
        "organization": "ASCO",
        "title": "Neoadjuvant Chemotherapy, Endocrine Therapy, and Targeted Therapy for Breast Cancer: ASCO Guideline",
        "publicationDate": "2021-01-28",
        "section": "Clinical Question 1 / Recommendation 1.3; Clinical interpretation",
        "url": "https://ascopubs.org/doi/10.1200/JCO.20.03399",
        "citationEvidence": "残存病変による術後治療変更を支える試験として明示。",
        "relationship": "explicit_citation",
        "verificationMethod": "indexed_official_guideline_body",
        "checkedDate": "2026-10-06",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）"
      }
    ],
    "lineBuckets": [],
    "agents": [
      "T-DM1"
    ],
    "drugClasses": [
      "ADC"
    ],
    "her2Expression": "HER2陽性",
    "priorAdcContext": "術前タキサン・トラスツズマブ後の残存浸潤癌。T-DXd既治療後を対象とする試験ではない。",
    "safety": "2025年長期報告：Grade ≥3 AE 26.1%対15.7%。",
    "safetySourceUrl": "https://www.nejm.org/doi/10.1056/NEJMoa2406070",
    "japanApproval": "未評価",
    "updateNote": "既存の2025年長期解析・ガイドライン引用を保持。安全性は同じ長期解析抄録。",
    "regimenAgents": [
      "T-DM1",
      "trastuzumab"
    ],
    "primaryPublication": {
      "date": "2018-12-05",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/30516102/",
      "note": "初回iDFS原著のオンライン先行公開。冊子は2019年だが初回公開は2018年。"
    },
    "reports": []
  },
  {
    "id": "aphinity",
    "name": "APHINITY",
    "phase": "III",
    "design": "無作為化・二重盲検・プラセボ対照",
    "setting": "early",
    "subtypes": [
      "HER2+"
    ],
    "stages": [
      "I",
      "II",
      "III"
    ],
    "timing": [
      "adjuvant"
    ],
    "population": "手術後のHER2陽性・リンパ節陽性、または高リスクのリンパ節陰性乳癌。術前全身療法後の残存癌を選択した試験ではない。",
    "experimental": "ペルツズマブ＋トラスツズマブ＋標準術後化学療法（抗HER2療法1年）",
    "control": "プラセボ＋トラスツズマブ＋同じ化学療法",
    "trial_registration": "NCT01358877",
    "sources": [
      {
        "title": "Adjuvant Pertuzumab and Trastuzumab in Early HER2-Positive Breast Cancer",
        "url": "https://www.nejm.org/doi/full/10.1056/NEJMoa1703643",
        "kind": "原著・主解析"
      },
      {
        "title": "APHINITY: Final analysis at 11.3 years' median follow-up, ESMO Breast Cancer 2025 LBA1",
        "url": "https://bigagainstbreastcancer.org/wp-content/uploads/2025/06/FINAL_Loibl_Piccart_ESMO-BC-2025_APHINITY_FA_oral_250512.pdf",
        "kind": "研究グループ公開・発表者スライド"
      }
    ],
    "caveat": "掲載した最終OS値は原著論文とは区別した学会一次発表。N0集団では明確な上乗せ利益を示さず、全HER2陽性早期乳癌への一律推奨を意味しない。",
    "primaryEndpoint": "iDFS",
    "result": "2025年最終OS学会報告：10年OS 91.6% vs 89.8%（HR 0.83、95% CI 0.69–1.00、P=0.0441）。",
    "publicationYear": 2025,
    "publicationDate": "2025-05-15",
    "resultDate": "ESMO Breast Cancer 2025、追跡中央値11.3年の最終OS解析",
    "checkedDate": "2026-10-06",
    "stageLabel": "手術可能な非転移乳癌を大分類。N0例にも腫瘍径などの追加条件があり、全I期を対象としない。",
    "cardPopulation": "手術後のHER2陽性・リンパ節陽性、または高リスクのリンパ節陰性乳癌。術前全身療法後の残存癌を選択した試験ではない。",
    "articleEvidence": {
      "status": "conference_only",
      "label": "原著論文未確認（学会発表ベース）",
      "note": "表示した2025年最終OS結果は研究グループ公開の学会一次発表に基づきます。最終OS結果の原著全文は未確認です。",
      "sourceUrl": "https://bigagainstbreastcancer.org/wp-content/uploads/2025/06/FINAL_Loibl_Piccart_ESMO-BC-2025_APHINITY_FA_oral_250512.pdf"
    },
    "guidelineReferences": [
      {
        "trialId": "aphinity",
        "guidelineId": "jbcs-2022-web-2024",
        "section": "薬物療法 CQ14",
        "title": "術後薬物療法を行うHER2陽性早期乳癌に対して，トラスツズマブにペルツズマブを加えることは勧められるか？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq14/",
        "citationEvidence": "参考文献1: von Minckwitz et al., NEJM 2017；参考文献2: Piccart et al., JCO 2021（6年追跡）。 2025年最終OS学会報告の引用ではない。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/28581356/",
          "https://pubmed.ncbi.nlm.nih.gov/33539215/"
        ],
        "interpretationNote": "2025年最終OS学会報告の引用ではない。",
        "organization": "JBCS",
        "accessMethod": "学会公式WEB版の該当章・参考文献"
      }
    ],
    "lineBuckets": [],
    "regimenAgents": [],
    "agents": [],
    "drugClasses": [],
    "primaryPublication": {
      "date": "2017-06-05",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/28581356/",
      "note": "初回iDFS原著。2025年最終OS発表ではない。"
    },
    "reports": []
  },
  {
    "id": "apt",
    "name": "APT",
    "phase": "II",
    "design": "単群・非盲検・多施設（無作為化比較なし）",
    "setting": "early",
    "subtypes": [
      "HER2+"
    ],
    "stages": [
      "I",
      "II"
    ],
    "timing": [
      "adjuvant"
    ],
    "population": "HER2陽性、浸潤腫瘍径3 cm以下、原則リンパ節陰性。改訂後は郭清で追加転移のない単一リンパ節微小転移を許容。",
    "experimental": "パクリタキセル＋トラスツズマブを12週、その後トラスツズマブ単独で合計1年",
    "control": "なし（単群試験）",
    "trial_registration": "NCT00542451",
    "sources": [
      {
        "title": "Adjuvant paclitaxel and trastuzumab for node-negative, HER2-positive breast cancer: final 10-year analysis of the open-label, single-arm, phase 2 APT trial",
        "url": "https://pubmed.ncbi.nlm.nih.gov/36858723/",
        "kind": "原著・最終解析"
      },
      {
        "title": "Adjuvant Paclitaxel and Trastuzumab for Node-Negative, HER2-Positive Breast Cancer",
        "url": "https://www.nejm.org/doi/full/10.1056/NEJMoa1406281",
        "kind": "原著・適格条件確認"
      }
    ],
    "caveat": "比較対照がないため、より強い化学療法に対する非劣性や治療省略の安全性を証明した試験ではない。iDFSと乳癌再発のみの指標を区別する。",
    "primaryEndpoint": "iDFS",
    "result": "2023年10年解析：iDFS 91.3%（95% CI 88.3–94.4）、RFI 96.3%、乳癌特異的生存率98.8%。",
    "publicationYear": 2023,
    "publicationDate": "2023-03",
    "resultDate": "2023年最終10年解析",
    "checkedDate": "2026-10-06",
    "stageLabel": "主にI期だが2–3 cmのT2例を含むためII期も検索対象。II期全般を意味しない。",
    "cardPopulation": "HER2陽性、浸潤腫瘍径3 cm以下、原則リンパ節陰性。改訂後は郭清で追加転移のない単一リンパ節微小転移を許容。",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "表示結果の原著全文は未確認です。一次論文の抄録・公開された要約に基づき、対象条件の補足には試験計画なども参照しています。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/36858723/"
    },
    "guidelineReferences": [
      {
        "trialId": "apt",
        "guidelineId": "jbcs-2022-web-2024",
        "section": "薬物療法 FRQ3",
        "title": "HER2陽性早期乳癌に対する術後薬物療法として，アンスラサイクリンを省略したタキサンとトラスツズマブによる併用療法は勧められるか？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/frq3/",
        "citationEvidence": "参考文献8: Tolaney et al., NEJM 2015；参考文献9: Tolaney et al., JCO 2019（7年追跡）。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/25564897/",
          "https://pubmed.ncbi.nlm.nih.gov/30939096/"
        ],
        "organization": "JBCS",
        "accessMethod": "学会公式WEB版の該当章・参考文献"
      },
      {
        "trialId": "apt",
        "guidelineId": "asco-neoadjuvant-2021",
        "organization": "ASCO",
        "title": "Neoadjuvant Chemotherapy, Endocrine Therapy, and Targeted Therapy for Breast Cancer: ASCO Guideline",
        "publicationDate": "2021-01-28",
        "section": "Clinical Question 5; discussion of small node-negative HER2-positive disease",
        "url": "https://ascopubs.org/doi/10.1200/JCO.20.03399",
        "citationEvidence": "APTを小型・N0乳癌の過剰治療回避の議論で明示。",
        "relationship": "explicit_citation",
        "verificationMethod": "indexed_official_guideline_body",
        "checkedDate": "2026-10-06",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）"
      }
    ],
    "lineBuckets": [],
    "regimenAgents": [],
    "agents": [],
    "drugClasses": [],
    "primaryPublication": {
      "date": "2015",
      "precision": "year",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/25564897/",
      "note": "初回主要結果原著。2023年10年追跡ではない。"
    },
    "reports": []
  },
  {
    "id": "monarche",
    "name": "monarchE",
    "phase": "III",
    "design": "無作為化・非盲検（1:1）",
    "setting": "early",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [
      "I",
      "II",
      "III"
    ],
    "timing": [
      "adjuvant"
    ],
    "population": "HR陽性/HER2陰性、リンパ節陽性の高リスク早期乳癌。主要コホートは陽性節4個以上、または1–3個かつ腫瘍径5 cm以上／grade 3。別コホートは1–3個、径5 cm未満、grade 1–2、中央測定Ki-67 20%以上。",
    "experimental": "アベマシクリブ2年＋標準内分泌療法",
    "control": "標準内分泌療法単独",
    "trial_registration": "NCT03155997",
    "sources": [
      {
        "title": "Overall survival with abemaciclib in early breast cancer",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41110697/",
        "kind": "原著・OS主解析"
      },
      {
        "title": "Abemaciclib plus endocrine therapy for hormone receptor-positive, HER2-negative, node-positive, high-risk early breast cancer (monarchE): results from a preplanned interim analysis of a randomised, open-label, phase 3 trial",
        "url": "https://pubmed.ncbi.nlm.nih.gov/36493792/",
        "kind": "原著・試験デザイン／集団"
      }
    ],
    "caveat": "リンパ節陰性は対象外。病期だけで適格性を判定せず、コホート条件を確認する。試験適格条件と地域ごとの承認・保険適用条件は別。",
    "primaryEndpoint": "iDFS",
    "result": "2025年オンラインOS報告：7年iDFS 77.4% vs 70.9%。7年OS 86.8% vs 85.0%（死亡HR 0.842、95% CI 0.722–0.981）。",
    "publicationYear": 2025,
    "publicationDate": "2025-10-17",
    "resultDate": "2025年オンライン／2026年2月冊子、追跡中央値76.2か月",
    "checkedDate": "2026-10-06",
    "stageLabel": "主にII–III期。微小転移のみでも高リスク条件を満たす解剖学的IB期を含み得る。原試験では陽性節1–3個をN1として病期集計。",
    "cardPopulation": "HR陽性/HER2陰性、リンパ節陽性の高リスク早期乳癌。主要コホートは陽性節4個以上、または1–3個かつ腫瘍径5 cm以上／grade 3。別コホートは1–3個、径5 cm未満、grade 1–2、中央測定Ki-67 20%以上。",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "表示結果の原著全文は未確認です。一次論文の抄録・公開された要約に基づき、対象条件の補足には試験計画なども参照しています。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/41110697/"
    },
    "guidelineReferences": [
      {
        "trialId": "monarche",
        "guidelineId": "jbcs-2022-web-2024",
        "section": "薬物療法 CQ6",
        "title": "ホルモン受容体陽性HER2陰性乳癌に対する術後療法として，内分泌療法にアベマシクリブを併用することは勧められるか？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq6/",
        "citationEvidence": "参考文献1: Johnston et al., JCO 2020；参考文献4: Harbeck et al., Ann Oncol 2021；参考文献5: Johnston et al., Lancet Oncol 2023。 2025年OS主解析自体の引用ではない。本文の推奨範囲はコホート1に限定した議論。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/32954927/",
          "https://pubmed.ncbi.nlm.nih.gov/34656740/",
          "https://pubmed.ncbi.nlm.nih.gov/36493792/"
        ],
        "interpretationNote": "2025年OS主解析自体の引用ではない。本文の推奨範囲はコホート1に限定した議論。",
        "organization": "JBCS",
        "accessMethod": "学会公式WEB版の該当章・参考文献"
      },
      {
        "trialId": "monarche",
        "guidelineId": "asco-adjuvant-cdk46-2024",
        "organization": "ASCO",
        "title": "Optimal Adjuvant Chemotherapy and Targeted Therapy for Early Breast Cancer—Cyclin-Dependent Kinase 4 and 6 Inhibitors: ASCO Guideline Rapid Recommendation Update",
        "publicationDate": "2024-05-20",
        "section": "Updated Recommendations / Recommendation 1",
        "url": "https://ascopubs.org/doi/10.1200/JCO.24.00886",
        "citationEvidence": "monarchEのITT適格集団を明示。",
        "relationship": "explicit_citation",
        "verificationMethod": "indexed_official_guideline_body",
        "checkedDate": "2026-10-06",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）"
      },
      {
        "trialId": "monarche",
        "guidelineId": "asco-hr-positive-early-living-2026-1-0",
        "organization": "ASCO",
        "title": "Medical Therapy for Hormone Receptor-Positive, HER2-Negative Stage I-III Breast Cancer: ASCO Living Guideline, Version 2026.1.0",
        "publicationDate": "2026-08-26",
        "version": "2026.1.0",
        "section": "Trial-characteristics table, monarchE rows; references 61, 63, 67, 71, 75",
        "url": "https://ascopubs.org/doi/pdfdirect/10.1200/JCO-26-02034",
        "citationEvidence": "根拠表にmonarchEを明示。Johnston 2026（63）、Harbeck 2021（61）、Martin 2022（67）、Rugo 2022（71）、Zhang 2024（75）。",
        "referenceNumbers": [
          61,
          63,
          67,
          71,
          75
        ],
        "relationship": "explicit_citation",
        "verificationMethod": "indexed_official_guideline_body",
        "accessMethod": "ASCO公式accepted-manuscript PDFの公開検索抜粋（表・参考文献の該当箇所のみ）",
        "checkedDate": "2026-10-06",
        "interpretationNote": "試験の直接引用を確認したもの。カードの掲載結果論文の全文確認状況や、全患者への推奨とは独立。"
      }
    ],
    "lineBuckets": [],
    "regimenAgents": [],
    "agents": [],
    "drugClasses": [],
    "primaryPublication": {
      "date": "2020-09-20",
      "precision": "day",
      "sourceUrl": "https://ascopubs.org/doi/10.1200/JCO.20.02514",
      "note": "初回iDFS中間解析原著。後年OS更新ではない。"
    },
    "reports": []
  },
  {
    "id": "natalee",
    "name": "NATALEE",
    "phase": "III",
    "design": "無作為化・非盲検（1:1）",
    "setting": "early",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [
      "II",
      "III"
    ],
    "timing": [
      "adjuvant"
    ],
    "population": "HR陽性/HER2陰性、解剖学的病期IIA–III。IIA N0はgrade 3、またはgrade 2かつKi-67 20%以上／高ゲノムリスクなど追加条件。閉経前女性・男性も登録。",
    "experimental": "リボシクリブ3年＋非ステロイド性AI（閉経前女性・男性はゴセレリン併用）",
    "control": "同じ内分泌療法単独",
    "trial_registration": "NCT03701334",
    "sources": [
      {
        "title": "Adjuvant ribociclib plus nonsteroidal aromatase inhibitor therapy in patients with HR-positive/HER2-negative early breast cancer: 5-year follow-up of NATALEE efficacy outcomes and updated overall survival",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12684762/",
        "kind": "原著・5年解析"
      },
      {
        "title": "Rationale and trial design of NATALEE: a Phase III trial of adjuvant ribociclib + endocrine therapy versus endocrine therapy alone in patients with HR+/HER2− early breast cancer",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/10233570/",
        "kind": "原著・試験計画"
      }
    ],
    "caveat": "monarchEとは患者リスク、薬剤・投与期間・内分泌療法が異なり、試験間の数値で優劣を直接比較できない。国内の承認・保険適用は別途確認。",
    "primaryEndpoint": "iDFS",
    "result": "2025年5年解析：iDFS HR 0.716（95% CI 0.618–0.829）、5年iDFSの絶対改善4.5ポイント。OSはなお成熟途上。",
    "publicationYear": 2025,
    "publicationDate": "2025-10-17",
    "resultDate": "2025年5年解析（データカットオフ2025-05-28）",
    "checkedDate": "2026-10-25",
    "stageLabel": "AJCC第8版の解剖学的病期。II期全例ではない。術前治療後の病期低下だけで元のリスクを読み替えない。",
    "cardPopulation": "HR陽性/HER2陰性、解剖学的病期IIA–III。IIA N0はgrade 3、またはgrade 2かつKi-67 20%以上／高ゲノムリスクなど追加条件。閉経前女性・男性も登録。",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "表示結果の原著全文は未確認です。一次論文の抄録・公開された要約に基づき、対象条件の補足には試験計画なども参照しています。",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12684762/"
    },
    "guidelineReferences": [
      {
        "trialId": "natalee",
        "guidelineId": "asco-adjuvant-cdk46-2024",
        "organization": "ASCO",
        "title": "Optimal Adjuvant Chemotherapy and Targeted Therapy for Early Breast Cancer—Cyclin-Dependent Kinase 4 and 6 Inhibitors: ASCO Guideline Rapid Recommendation Update",
        "publicationDate": "2024-05-20",
        "section": "Updated Recommendations / Recommendation 2",
        "url": "https://ascopubs.org/doi/10.1200/JCO.24.00886",
        "citationEvidence": "NATALEEを術後ribociclibの根拠として明示。",
        "relationship": "explicit_citation",
        "verificationMethod": "indexed_official_guideline_body",
        "checkedDate": "2026-10-06",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）"
      },
      {
        "trialId": "natalee",
        "guidelineId": "asco-hr-positive-early-living-2026-1-0",
        "organization": "ASCO",
        "title": "Medical Therapy for Hormone Receptor-Positive, HER2-Negative Stage I-III Breast Cancer: ASCO Living Guideline, Version 2026.1.0",
        "publicationDate": "2026-08-26",
        "version": "2026.1.0",
        "section": "Trial-characteristics table, NATALEE rows; references 54, 55",
        "url": "https://ascopubs.org/doi/pdfdirect/10.1200/JCO-26-02034",
        "citationEvidence": "根拠表にNATALEEとFasching 2025の2報（54・55）を明示。",
        "referenceNumbers": [
          54,
          55
        ],
        "relationship": "explicit_citation",
        "verificationMethod": "indexed_official_guideline_body",
        "accessMethod": "ASCO公式accepted-manuscript PDFの公開検索抜粋（表・参考文献の該当箇所のみ）",
        "checkedDate": "2026-10-06",
        "interpretationNote": "試験の直接引用を確認したもの。カードの掲載結果論文の全文確認状況や、全患者への推奨とは独立。"
      }
    ],
    "lineBuckets": [],
    "regimenAgents": [],
    "agents": [],
    "drugClasses": [],
    "primaryPublication": {
      "date": "2024-03-20",
      "precision": "day",
      "sourceUrl": "https://www.nejm.org/doi/10.1056/NEJMoa2305488",
      "note": "初回iDFS主要評価項目原著。2023年学会発表・試験計画や2025年追跡とは区別。"
    },
    "scopeEvidence": {
      "verifiedPhase": "III",
      "resultType": "interventional-results",
      "phaseSourceUrls": [
        "https://clinicaltrials.gov/study/NCT03701334",
        "https://clinicaltrials.gov/api/v2/studies/NCT03701334",
        "https://pubmed.ncbi.nlm.nih.gov/42918423/"
      ],
      "resultSourceUrls": [
        "https://pubmed.ncbi.nlm.nih.gov/42918423/",
        "https://doi.org/10.1016/j.annonc.2026.10.1288"
      ],
      "checkedAt": "2026-10-24T12:20:58Z"
    },
    "reports": [
      {
        "id": "natalee-six-year-os-2026",
        "label": "NATALEE：記述的6年OS解析（2026年）",
        "analysisKey": "NCT03701334-six-year-os-2026-10-23",
        "paperKeys": [
          "pmid:42918423",
          "doi:10.1016/j.annonc.2026.10.1288"
        ],
        "doi": "10.1016/j.annonc.2026.10.1288",
        "publicationDate": "2026-10-23",
        "pubmedHistoryDate": "2026-10-23",
        "conferencePresentationDate": null,
        "resultDate": "データカットオフ未確認",
        "dataCutoff": null,
        "design": "無作為化非盲検第III相、1:1、術後補助療法。",
        "experimental": "ribociclib400mg/日、3週投与1週休薬、3年間＋letrozole2.5mg/日またはanastrozole1mg/日を5年間。閉経前女性と男性はgoserelin併用。",
        "control": "同じNSAI単独（適応に応じgoserelin）。",
        "primaryEndpoint": "iDFS",
        "analysisPopulation": "高リスクHR陽性/HER2陰性早期乳癌、解剖学的stageIIA（N1または高リスクN0）、IIB、III。登録の実登録数5101例。6年論文抄録には群別分母/死亡数なし。 ",
        "result": "原著論文未確認（抄録ベース）。NATALEEは高リスクHR陽性/HER2陰性早期乳癌の術後補助療法を検証する第III相試験で、NSAIへの3年間のribociclib追加を比較した。主要評価項目はiDFS。本報告は事前規定された記述的6年OS解析で、OS追跡中央値66.5か月、OS HR0.809（95%CI0.661–0.989）、6年絶対差2.1ポイント、名目片側P=0.019。iDFS HR0.741（0.646–0.849）、6年差5.3ポイント。再発抑制に加えて生存改善を示唆する追跡結果だが、名目P値を多重性調整済みの確証的OS検定と扱わない。新たな安全性シグナルなし。死亡イベント数、OS成熟度、個別安全性頻度とデータカットオフは今回読めた原著抄録では未確認。 DDFS HR0.744（95%CI0.646–0.858）、DRFS HR0.738（0.634–0.858）。OSとDDFSは登録上副次。DRFSは論文抄録でsecondary/exploratoryと一括記載され個別階層は本文未確認。\n介入：ribociclib400mg/日、3週投与1週休薬、3年間＋letrozole2.5mg/日またはanastrozole1mg/日を5年間。閉経前女性と男性はgoserelin併用。 対照：同じNSAI単独（適応に応じgoserelin）。\n評価項目：iDFS",
        "safety": "抄録は新たな安全性シグナルなしと報告、個別有害事象の頻度は原著本文未確認。",
        "caveat": "原著本文未確認。 OS解析はprespecified descriptive、P値はnominal one-sided。 データカットオフ2026-05-15は二次報道にはあるが今回一次資料では未確認、保存時null/未確認。 スポンサー発表のDRFS CI0.631–0.846はPubMed原著抄録0.634–0.858と相違、原著抄録を優先。 日本承認/ガイドライン/治療ラインは本結果と別、未検証。 原著公開2026-10-23、PubMed登録2026-10-23。学会発表日未確認。確認日時2026-10-24T12:20:58Z。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42918423/",
        "sources": [
          {
            "title": "公式試験登録",
            "url": "https://clinicaltrials.gov/study/NCT03701334",
            "kind": "一次資料",
            "checkedDate": "2026-10-24"
          },
          {
            "title": "公式試験登録",
            "url": "https://clinicaltrials.gov/api/v2/studies/NCT03701334",
            "kind": "一次資料",
            "checkedDate": "2026-10-24"
          },
          {
            "title": "PubMed原著",
            "url": "https://pubmed.ncbi.nlm.nih.gov/42918423/",
            "kind": "一次資料",
            "checkedDate": "2026-10-24"
          },
          {
            "title": "原著一次資料",
            "url": "https://doi.org/10.1016/j.annonc.2026.10.1288",
            "kind": "一次資料",
            "checkedDate": "2026-10-24"
          }
        ],
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "一次論文抄録と公式登録のみ。出版社本文は取得できず、全文確認扱いにしない。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42918423/",
          "checkedDate": "2026-10-24"
        },
        "scopeEvidence": {
          "verifiedPhase": "III",
          "resultType": "interventional-results",
          "phaseSourceUrls": [
            "https://clinicaltrials.gov/study/NCT03701334",
            "https://clinicaltrials.gov/api/v2/studies/NCT03701334",
            "https://pubmed.ncbi.nlm.nih.gov/42918423/"
          ],
          "resultSourceUrls": [
            "https://pubmed.ncbi.nlm.nih.gov/42918423/",
            "https://doi.org/10.1016/j.annonc.2026.10.1288"
          ],
          "checkedAt": "2026-10-24T12:20:58Z"
        },
        "analysisEvidence": {
          "outcomes": [
            {
              "endpoint": "OS",
              "hr": 0.809,
              "ci95": [
                0.661,
                0.989
              ],
              "absoluteDifferencePercentagePoints": 2.1,
              "time": "6年",
              "nominalOneSidedP": 0.019
            },
            {
              "endpoint": "iDFS",
              "hr": 0.741,
              "ci95": [
                0.646,
                0.849
              ],
              "absoluteDifferencePercentagePoints": 5.3,
              "time": "6年",
              "nominalOneSidedP": "<0.0001"
            },
            {
              "endpoint": "DDFS",
              "hr": 0.744,
              "ci95": [
                0.646,
                0.858
              ]
            },
            {
              "endpoint": "DRFS",
              "hr": 0.738,
              "ci95": [
                0.634,
                0.858
              ]
            }
          ],
          "osMedianFollowUpMonths": 66.5,
          "totalRegistryEnrollment": 5101,
          "armDenominators": null,
          "deathEvents": null,
          "osMaturity": null,
          "analysisType": "prespecified descriptive",
          "pValueType": "nominal one-sided",
          "dataCutoff": null
        },
        "checkedAt": "2026-10-24T12:20:58Z"
      }
    ]
  },
  {
    "id": "olympia",
    "name": "OlympiA",
    "phase": "III",
    "design": "無作為化・二重盲検・プラセボ対照（1:1）",
    "setting": "early",
    "subtypes": [
      "HR+/HER2-",
      "TNBC"
    ],
    "stages": [
      "I",
      "II",
      "III"
    ],
    "timing": [
      "adjuvant"
    ],
    "population": "生殖細胞系列BRCA1/2病的／病的疑いバリアント、HER2陰性の高リスク乳癌で化学療法・局所治療後。手術先行TNBCはN+または浸潤径2 cm以上、HR+は陽性節4個以上。術前化学療法後は浸潤癌残存、HR+ではさらにCPS+EG 3以上。",
    "experimental": "オラパリブ1年（必要な内分泌療法は併用）",
    "control": "プラセボ1年（同じ標準術後治療）",
    "trial_registration": "NCT02032823",
    "sources": [
      {
        "title": "Sustained benefit of adjuvant olaparib in women with germline BRCA1- and BRCA2-associated high-risk HER2-negative early breast cancer: updated results from the OlympiA phase III trial",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42636977/",
        "kind": "原著・6.1年追跡、抄録確認",
        "publicationDate": "2026-08-24"
      },
      {
        "title": "Overall survival in the OlympiA phase III trial of adjuvant olaparib in patients with germline pathogenic variants in BRCA1/2 and high-risk, early breast cancer",
        "url": "https://pubmed.ncbi.nlm.nih.gov/36228963/",
        "kind": "原著・OS解析"
      },
      {
        "title": "Adjuvant Olaparib for Patients with BRCA1- or BRCA2-Mutated Breast Cancer",
        "url": "https://www.nejm.org/doi/full/10.1056/NEJMoa2105215",
        "kind": "原著・主解析／適格条件"
      }
    ],
    "caveat": "gBRCA陽性だけで全早期乳癌が対象になるわけではない。カペシタビンやペムブロリズマブとの直接比較・術後併用最適化の試験ではない。掲載値は明示した2022年解析。",
    "primaryEndpoint": "iDFS",
    "result": "2026年6.1年追跡・記述的更新：6年OS 87.5% vs 83.2%（HR 0.72、95% CI 0.56–0.93）。iDFS HR 0.65（95% CI 0.53–0.78）。",
    "publicationYear": 2026,
    "publicationDate": "2026-08-24",
    "resultDate": "事前規定の第3中間解析、追跡期間中央値6.1年。既に有意差を示した評価項目の記述的更新。",
    "checkedDate": "2026-10-06",
    "stageLabel": "I–IIIは病期の粗い範囲。gBRCA1/2と、サブタイプ・治療経過別の高リスク条件を必ず合わせて確認。",
    "cardPopulation": "生殖細胞系列BRCA1/2病的／病的疑いバリアント、HER2陰性の高リスク乳癌で化学療法・局所治療後。手術先行TNBCはN+または浸潤径2 cm以上、HR+は陽性節4個以上。術前化学療法後は浸潤癌残存、HR+ではさらにCPS+EG 3以上。",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "2026年更新報告の公開抄録を確認。原著全文は未確認。以前の有意差検定と今回の記述的更新は別に扱う。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42636977/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [
      {
        "trialId": "olympia",
        "guidelineId": "jbcs-2022-web-2024",
        "section": "薬物療法 CQ33",
        "title": "生殖細胞系列BRCA病的バリアントを有する早期乳癌患者の術後療法として，PARP阻害薬は勧められるか？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq33/",
        "citationEvidence": "参考文献2: Tutt et al., NEJM 2021；参考文献3: Geyer et al., Ann Oncol 2022（OS）。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/34081848/",
          "https://pubmed.ncbi.nlm.nih.gov/36228963/"
        ],
        "organization": "JBCS",
        "accessMethod": "学会公式WEB版の該当章・参考文献"
      },
      {
        "trialId": "olympia",
        "guidelineId": "asco-adjuvant-parp-2021",
        "organization": "ASCO",
        "title": "Adjuvant PARP Inhibitors in Patients With High-Risk Early-Stage HER2-Negative Breast Cancer and Germline BRCA Mutations: ASCO Hereditary Breast Cancer Guideline Rapid Recommendation Update",
        "publicationDate": "2021-08-03",
        "section": "Evidence Review; 2021 Updated Recommendation",
        "url": "https://ascopubs.org/doi/10.1200/JCO.21.01532",
        "citationEvidence": "OlympiAの2021年初回報告を更新根拠として明示。",
        "relationship": "explicit_citation",
        "verificationMethod": "indexed_official_guideline_body",
        "checkedDate": "2026-10-06",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）"
      },
      {
        "trialId": "olympia",
        "guidelineId": "asco-hr-positive-early-living-2026-1-0",
        "organization": "ASCO",
        "title": "Medical Therapy for Hormone Receptor-Positive, HER2-Negative Stage I-III Breast Cancer: ASCO Living Guideline, Version 2026.1.0",
        "publicationDate": "2026-08-26",
        "version": "2026.1.0",
        "section": "Trial-characteristics table, OlympiA row; reference 58",
        "url": "https://ascopubs.org/doi/pdfdirect/10.1200/JCO-26-02034",
        "citationEvidence": "根拠表にOlympiA、Geyer 2022（58）を明示。",
        "referenceNumbers": [
          58
        ],
        "relationship": "explicit_citation",
        "verificationMethod": "indexed_official_guideline_body",
        "accessMethod": "ASCO公式accepted-manuscript PDFの公開検索抜粋（表・参考文献の該当箇所のみ）",
        "checkedDate": "2026-10-06",
        "interpretationNote": "試験の直接引用を確認したもの。カードの掲載結果論文の全文確認状況や、全患者への推奨とは独立。"
      }
    ],
    "lineBuckets": [],
    "regimenAgents": [],
    "agents": [],
    "drugClasses": [],
    "safety": "2026年更新：特に注目すべき有害事象6.3% vs 9.3%。MDS/AMLは0.4% vs 0.7%。抄録で確認できた長期安全性の範囲。",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42636977/"
    },
    "primaryPublication": {
      "date": "2021-06-03",
      "precision": "day",
      "sourceUrl": "https://www.nejm.org/doi/10.1056/NEJMoa2105215",
      "note": "初回iDFS主要結果原著。後年OS・長期追跡ではない。"
    },
    "reports": [
      {
        "id": "olympia-previous-main-2022-10-10",
        "label": "以前の掲載解析",
        "publicationDate": "2022-10-10",
        "resultDate": "2022年OS第2中間解析（追跡中央値3.5年）",
        "result": "2022年OS第2中間解析：4年OS 89.8% vs 86.4%（HR 0.68、98.5% CI 0.47–0.97、P=0.009）。",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "表示結果の原著全文は未確認です。一次論文の抄録・公開された要約に基づき、対象条件の補足には試験計画なども参照しています。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/36228963/"
        },
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/36228963/"
      }
    ]
  },
  {
    "id": "rxponder",
    "name": "RxPONDER（SWOG S1007）",
    "phase": "III",
    "design": "無作為化・非盲検",
    "setting": "early",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [
      "I",
      "II",
      "III"
    ],
    "timing": [
      "adjuvant"
    ],
    "population": "HR陽性/HER2陰性、陽性腋窩リンパ節1–3個、RS 0–25、遠隔転移のない手術後乳癌。閉経状況別の治療効果を評価。",
    "experimental": "化学療法＋内分泌療法",
    "control": "内分泌療法単独",
    "trial_registration": "NCT01272037",
    "sources": [
      {
        "title": "21-Gene Assay to Inform Chemotherapy Benefit in Node-Positive Breast Cancer",
        "url": "https://www.nejm.org/doi/10.1056/NEJMoa2108873",
        "kind": "原著・主解析"
      },
      {
        "title": "S1007 trial eligibility and publications",
        "url": "https://www.swog.org/clinical-trials/s1007",
        "kind": "研究グループ公式・試験条件"
      }
    ],
    "caveat": "閉経前の化学療法利益を卵巣機能抑制の効果と分離できない。最適なOFS＋内分泌療法が化学療法を置換できるかを検証した試験ではない。",
    "primaryEndpoint": "iDFSおよび化学療法効果とRSの関係",
    "result": "2021年報告：閉経後5年iDFS 91.3% vs 91.9%（利益を示さず）。閉経前93.9% vs 89.0%（HR 0.60、95% CI 0.43–0.83）。",
    "publicationYear": 2021,
    "publicationDate": "2021-12-01",
    "resultDate": "2021年規定第3中間解析",
    "checkedDate": "2026-10-06",
    "stageLabel": "N1・M0を中心とする大分類。登録中のN1mi例もあるためI期を除外しないが、I期全般やN0へ一般化しない。",
    "cardPopulation": "HR陽性/HER2陰性、陽性腋窩リンパ節1–3個、RS 0–25、遠隔転移のない手術後乳癌。閉経状況別の治療効果を評価。",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "表示結果の原著全文は未確認です。一次論文の抄録・公開された要約に基づき、対象条件の補足には試験計画なども参照しています。",
      "sourceUrl": "https://www.nejm.org/doi/10.1056/NEJMoa2108873"
    },
    "guidelineReferences": [
      {
        "trialId": "rxponder",
        "guidelineId": "jbcs-2022-web-2024",
        "section": "薬物療法 CQ11",
        "title": "ホルモン受容体陽性HER2陰性乳癌に対して，多遺伝子アッセイの結果によって，術後化学療法を省略することは推奨されるか？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq11/",
        "citationEvidence": "参考文献6: Kalinsky et al., NEJM 2021；本文でRxPONDERと閉経状況別結果を解説。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/34914339/"
        ],
        "organization": "JBCS",
        "accessMethod": "学会公式WEB版の該当章・参考文献"
      },
      {
        "trialId": "rxponder",
        "guidelineId": "asco-adjuvant-biomarkers-2022",
        "organization": "ASCO",
        "title": "Biomarkers for Adjuvant Endocrine and Chemotherapy in Early-Stage Breast Cancer: ASCO Guideline Update",
        "publicationDate": "2022-04-19",
        "section": "Clinical Question 1; Oncotype DX / literature review",
        "url": "https://ascopubs.org/doi/10.1200/JCO.22.00069",
        "citationEvidence": "RxPONDERのER+/HER2−、N1、RS 0–25の比較を明示。",
        "relationship": "explicit_citation",
        "verificationMethod": "indexed_official_guideline_body",
        "checkedDate": "2026-10-06",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）"
      },
      {
        "trialId": "rxponder",
        "guidelineId": "asco-hr-positive-early-living-2026-1-0",
        "organization": "ASCO",
        "title": "Medical Therapy for Hormone Receptor-Positive, HER2-Negative Stage I-III Breast Cancer: ASCO Living Guideline, Version 2026.1.0",
        "publicationDate": "2026-08-26",
        "version": "2026.1.0",
        "section": "Trial-characteristics table, RxPONDER row; reference 28",
        "url": "https://ascopubs.org/doi/pdfdirect/10.1200/JCO-26-02034",
        "citationEvidence": "根拠表にRxPONDERとKalinsky 2021（28）を明示。",
        "referenceNumbers": [
          28
        ],
        "relationship": "explicit_citation",
        "verificationMethod": "indexed_official_guideline_body",
        "accessMethod": "ASCO公式accepted-manuscript PDFの公開検索抜粋（表・参考文献の該当箇所のみ）",
        "checkedDate": "2026-10-06",
        "interpretationNote": "試験の直接引用を確認したもの。カードの掲載結果論文の全文確認状況や、全患者への推奨とは独立。"
      }
    ],
    "lineBuckets": [],
    "regimenAgents": [],
    "agents": [],
    "drugClasses": [],
    "primaryPublication": {
      "date": "2021-12-01",
      "precision": "day",
      "sourceUrl": "https://www.nejm.org/doi/10.1056/NEJMoa2108873",
      "note": "初回主要結果原著。本文の2022年更新日ではない。"
    },
    "reports": []
  },
  {
    "id": "soft-text",
    "name": "SOFT / TEXT",
    "phase": "III",
    "design": "2つの無作為化・非盲検試験；エキセメスタン＋OFS vs タモキシフェン＋OFSは統合解析",
    "setting": "early",
    "subtypes": [
      "HR+/HER2-",
      "HER2+"
    ],
    "stages": [
      "I",
      "II",
      "III"
    ],
    "timing": [
      "adjuvant"
    ],
    "population": "閉経前・HR陽性の早期乳癌。HER2陰性に限定せずHR陽性/HER2陽性も含む。SOFTはタモキシフェン単独を含む3群、TEXTはOFS下の2群。",
    "experimental": "エキセメスタン＋卵巣機能抑制（OFS）、5年",
    "control": "タモキシフェン＋OFS、5年（SOFTにはタモキシフェン単独群も存在）",
    "trial_registration": "NCT00066690 / NCT00066703",
    "sources": [
      {
        "title": "Final outcomes of the SOFT and TEXT phase III trials in premenopausal hormone receptor-positive early breast cancer",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13484932/",
        "kind": "原著・最終解析"
      },
      {
        "title": "Adjuvant Exemestane With Ovarian Suppression in Premenopausal Breast Cancer: Long-Term Follow-Up of the Combined TEXT and SOFT Trials",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10419413/",
        "kind": "原著・前回長期解析"
      }
    ],
    "caveat": "ここに示した数値は2試験のOFS併用2群の統合比較。タモキシフェン単独との比較値ではない。HER2陽性サブセットと現代の抗HER2治療への外挿は慎重に。",
    "primaryEndpoint": "DFS",
    "result": "2026年最終統合解析：15年DFS 74.9% vs 71.3%（HR 0.82、95% CI 0.73–0.92）。OSの有意差はなし。",
    "publicationYear": 2026,
    "publicationDate": "2026-06-01",
    "resultDate": "2026年最終報告、統合集団の追跡中央値16年",
    "checkedDate": "2026-10-06",
    "stageLabel": "リンパ節陰性から陽性までの非転移乳癌。化学療法実施集団と非実施集団で絶対リスクが異なる。",
    "cardPopulation": "閉経前・HR陽性の早期乳癌。HER2陰性に限定せずHR陽性/HER2陽性も含む。SOFTはタモキシフェン単独を含む3群、TEXTはOFS下の2群。",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "表示結果の原著全文は未確認です。一次論文の抄録・公開された要約に基づき、対象条件の補足には試験計画なども参照しています。",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13484932/"
    },
    "guidelineReferences": [
      {
        "trialId": "soft-text",
        "guidelineId": "jbcs-2022-web-2024",
        "section": "薬物療法 CQ2",
        "title": "閉経前ホルモン受容体陽性乳癌に対する術後内分泌療法として何が推奨されるか？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq2/",
        "citationEvidence": "参考文献11: Pagani et al., JCO、2022年オンライン報告（combined TEXT/SOFT長期追跡）。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/36521078/"
        ],
        "organization": "JBCS",
        "accessMethod": "学会公式WEB版の該当章・参考文献"
      },
      {
        "trialId": "soft-text",
        "guidelineId": "nccn-insights-breast-1-2017",
        "section": "p.441, BINV-J, footnote 2",
        "title": "NCCN Guidelines Insights: Breast Cancer, Version 1.2017",
        "url": "https://jnccn.org/abstract/journals/jnccn/15/4/article-p433.pdf",
        "citationEvidence": "脚注2でSOFTとTEXTを明示。",
        "relationship": "explicit_citation",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）",
        "sourceVersion": "1.2017",
        "historical": true,
        "checkedDate": "2026-10-06",
        "organization": "NCCN"
      },
      {
        "trialId": "soft-text",
        "guidelineId": "asco-hr-positive-early-living-2026-1-0",
        "organization": "ASCO",
        "title": "Medical Therapy for Hormone Receptor-Positive, HER2-Negative Stage I-III Breast Cancer: ASCO Living Guideline, Version 2026.1.0",
        "publicationDate": "2026-08-26",
        "version": "2026.1.0",
        "section": "References 40, 41, 47",
        "url": "https://ascopubs.org/doi/pdfdirect/10.1200/JCO-26-02034",
        "citationEvidence": "SOFT 12年追跡（40）およびTEXT/SOFT併合長期追跡（47）を参考文献に明示。2018年報告（41）も収載。",
        "referenceNumbers": [
          40,
          41,
          47
        ],
        "relationship": "explicit_citation",
        "verificationMethod": "indexed_official_guideline_body",
        "accessMethod": "ASCO公式accepted-manuscript PDFの公開検索抜粋（表・参考文献の該当箇所のみ）",
        "checkedDate": "2026-10-06",
        "interpretationNote": "試験の直接引用を確認したもの。カードの掲載結果論文の全文確認状況や、全患者への推奨とは独立。"
      }
    ],
    "lineBuckets": [],
    "regimenAgents": [],
    "agents": [],
    "drugClasses": [],
    "primaryPublication": {
      "date": "2014-06-01",
      "precision": "day",
      "sourceUrl": "https://www.nejm.org/doi/10.1056/NEJMoa1404037",
      "note": "TEXT/SOFT統合exemestane+OFS対tamoxifen+OFSの初回主要DFS原著。SOFT単独主解析も2014年先行公開。"
    },
    "reports": []
  },
  {
    "setting": "metastatic",
    "stages": [],
    "timing": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "phase": "III",
    "id": "destiny-breast03",
    "name": "DESTINY-Breast03",
    "design": "第III相・無作為化・非盲検・実薬対照（1:1）",
    "subtypes": [
      "HER2+"
    ],
    "stageLabel": "切除不能または転移性乳癌",
    "lineBuckets": [
      "her2_pretreated",
      "chemo_pretreated"
    ],
    "lineLabel": "トラスツズマブ＋タキサン治療後",
    "population": "HER2陽性。進行・転移病変に対するトラスツズマブとタキサンの治療中・治療後に増悪、または関連する術前・術後治療後6か月以内に再発。治療済みで臨床的に安定した脳転移を許容。",
    "biomarkers": [
      "HER2陽性"
    ],
    "experimental": "トラスツズマブ デルクステカン（T-DXd）",
    "control": "トラスツズマブ エムタンシン（T-DM1）",
    "primaryEndpoint": "盲検独立中央判定（BICR）によるPFS",
    "result": "2024年更新：研究者判定PFS中央値29.0対7.2か月（HR 0.30、95% CI 0.24–0.38）。OS中央値52.6対42.7か月（HR 0.73、95% CI 0.56–0.94）。",
    "resultDate": "2023-11-20",
    "resultDateLabel": "初回PFS解析データカットオフ",
    "publicationDate": "2024-06-02",
    "publicationYear": 2024,
    "sources": [
      {
        "title": "Cortés et al. NEJM 2022（初回PFS）",
        "url": "https://www.nejm.org/doi/full/10.1056/NEJMoa2115022"
      },
      {
        "title": "Trastuzumab deruxtecan versus trastuzumab emtansine in HER2-positive metastatic breast cancer: long-term survival analysis of the DESTINY-Breast03 trial.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/38825627/",
        "kind": "原著",
        "publicationDate": "2024-06-02"
      },
      {
        "title": "SABCS 2025 PS5-01-30（5年最終解析）",
        "url": "https://aacrjournals.org/clincancerres/article/32/4_Supplement/PS5-01-30/773588/Abstract-PS5-01-30-Trastuzumab-deruxtecan-T-DXd",
        "kind": "学会一次抄録",
        "publicationDate": "2026-02-17"
      },
      {
        "title": "ClinicalTrials.gov：ADC前治療条件",
        "url": "https://clinicaltrials.gov/study/NCT03529110",
        "kind": "試験登録"
      }
    ],
    "caveat": "全員を一律に「二次治療」とは扱わない。掲載値は初回報告で、後年のPFS・OS更新と混在させない。ILD／肺臓炎に注意が必要な試験薬。",
    "publicationDateType": "issue_date",
    "cardPopulation": "HER2陽性。進行・転移病変に対するトラスツズマブとタキサンの治療中・治療後に増悪、または関連する術前・術後治療後6か月以内に再発。治療済みで臨床的に安定した脳転移を許容。",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "表示結果・安全性は一次論文抄録で確認。本文未確認の詳細を補完していない。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/38825627/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [
      {
        "trialId": "destiny-breast03",
        "guidelineId": "jbcs-2022-web-2024",
        "section": "薬物療法 CQ28",
        "title": "HER2陽性転移・再発乳癌に対する二次治療として，トラスツズマブ デルクステカンは推奨されるか？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq28/",
        "citationEvidence": "参考文献1: Cortés et al., NEJM 2022；参考文献2: Hurvitz et al., Lancet 2022年オンライン更新。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/35320644/",
          "https://pubmed.ncbi.nlm.nih.gov/36495879/"
        ],
        "organization": "JBCS",
        "accessMethod": "学会公式WEB版の該当章・参考文献"
      },
      {
        "trialId": "destiny-breast03",
        "guidelineId": "asco-her2-positive-advanced-2022",
        "organization": "ASCO",
        "title": "Systemic Therapy for Advanced Human Epidermal Growth Factor Receptor 2–Positive Breast Cancer: ASCO Guideline Update",
        "publicationDate": "2022-05-31",
        "section": "Recommendation 2.1; Literature review update and analysis",
        "url": "https://ascopubs.org/doi/10.1200/JCO.22.00519",
        "citationEvidence": "DESTINY-Breast03を二次T-DXdの根拠として明示。",
        "relationship": "explicit_citation",
        "verificationMethod": "indexed_official_guideline_body",
        "checkedDate": "2026-10-06",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）"
      }
    ],
    "agents": [
      "T-DXd",
      "T-DM1"
    ],
    "drugClasses": [
      "ADC"
    ],
    "her2Expression": "HER2陽性",
    "priorAdcContext": "転移期抗HER2 ADC既治療は除外。周術期ADCは終了後12か月以内に進行がない場合に許容（レジストリ）。",
    "japanApproval": "未評価",
    "safety": "全Grade ILD/肺臓炎16.7%対3.4%。この追跡延長で新規Grade ≥3 ILDなし。",
    "updateNote": "同一試験の更新。既存主要報告と既存ガイドライン引用を保持し、更新結果の引用確認とはみなさない。",
    "regimenAgents": [
      "T-DXd",
      "T-DM1"
    ],
    "primaryPublication": {
      "date": "2022-03-23",
      "precision": "day",
      "sourceUrl": "https://www.nejm.org/doi/10.1056/NEJMoa2115022",
      "note": "初回PFS主要結果原著。2021年学会発表や2024年更新とは区別。"
    },
    "reports": [
      {
        "id": "destiny-breast03-previous-2022-03-24",
        "label": "以前の掲載解析",
        "publicationDate": "2022-03-24",
        "resultDate": "2021-05-21",
        "result": "初回PFS中間解析：12か月PFS率75.8%対34.1%、ハザード比0.28（95% CI 0.22–0.37）。",
        "safety": null,
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "表示結果の原著全文は未確認です。一次論文の抄録・公開された要約に基づき、対象条件の補足には試験計画なども参照しています。",
          "sourceUrl": "https://www.nejm.org/doi/full/10.1056/NEJMoa2115022"
        },
        "sourceUrl": "https://www.nejm.org/doi/full/10.1056/NEJMoa2115022"
      },
      {
        "id": "destiny-breast03-final-5y",
        "label": "SABCS 2025・5年最終探索的解析",
        "publicationDate": "2026-02-17",
        "presentationDate": "2025-12",
        "resultDate": "2025-06-27",
        "result": "研究者判定PFS中央値29.0対7.8か月（HR 0.33、95% CI 0.26–0.41）。OS中央値56.4対42.7か月（HR 0.74、95% CI 0.59–0.94）。",
        "safety": "判定委員会薬剤関連ILD/肺臓炎17.5%対3.1%。Grade 3は1.2%対0.4%、Grade 4/5なし。",
        "sourceUrl": "https://aacrjournals.org/clincancerres/article/32/4_Supplement/PS5-01-30/773588/Abstract-PS5-01-30-Trastuzumab-deruxtecan-T-DXd",
        "articleEvidence": {
          "status": "conference_only",
          "label": "原著論文未確認（学会発表ベース）",
          "sourceUrl": "https://aacrjournals.org/clincancerres/article/32/4_Supplement/PS5-01-30/773588/Abstract-PS5-01-30-Trastuzumab-deruxtecan-T-DXd",
          "note": "SABCS 2025 PS5-01-30、2026年正式学会抄録。5年探索的解析であり原著長期報告とは区別。",
          "checkedDate": "2026-10-06"
        }
      }
    ]
  },
  {
    "setting": "metastatic",
    "stages": [],
    "timing": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "phase": "II",
    "id": "her2climb",
    "name": "HER2CLIMB",
    "design": "第II相・無作為化・二重盲検・プラセボ対照（2:1）",
    "subtypes": [
      "HER2+"
    ],
    "stageLabel": "切除不能局所進行または転移性乳癌",
    "lineBuckets": [
      "her2_pretreated",
      "chemo_pretreated"
    ],
    "lineLabel": "トラスツズマブ・ペルツズマブ・T-DM1既治療",
    "population": "HER2陽性でトラスツズマブ、ペルツズマブ、T-DM1治療歴あり。脳転移例を含む（活動性脳転移も所定の適格基準下で登録）。",
    "biomarkers": [
      "HER2陽性"
    ],
    "experimental": "ツカチニブ＋トラスツズマブ＋カペシタビン",
    "control": "プラセボ＋トラスツズマブ＋カペシタビン",
    "primaryEndpoint": "最初に無作為化された480例のBICRによるPFS",
    "result": "主要PFS集団：中央値7.8対5.6か月、ハザード比0.54（95% CI 0.42–0.71）。全612例のOS中央値21.9対17.4か月。",
    "resultDate": "2019-12-11",
    "resultDateLabel": "主要解析報告・オンライン公開日",
    "publicationDate": "2019-12-11",
    "publicationYear": 2020,
    "sources": [
      {
        "title": "Murthy et al. NEJM 2020（主要解析）",
        "url": "https://www.nejm.org/doi/full/10.1056/NEJMoa1914609"
      },
      {
        "title": "HER2CLIMB protocol（NCT02614794）",
        "url": "https://cdn.clinicaltrials.gov/large-docs/94/NCT02614794/Prot_001.pdf"
      },
      {
        "title": "最終OS解析（全612例）",
        "url": "https://pubmed.ncbi.nlm.nih.gov/34954044/",
        "kind": "更新・関連報告",
        "publicationDate": "2021-12-23"
      },
      {
        "title": "脳転移サブグループ更新探索解析",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9716438/",
        "kind": "更新・関連報告",
        "publicationDate": "2022-12-01"
      }
    ],
    "caveat": "第III相ではなく第II相。PFSの主要解析480例とOSの全612例を区別する。T-DXd後の成績を直接示す試験ではない。",
    "publicationDateType": "online_first",
    "cardPopulation": "HER2陽性でトラスツズマブ、ペルツズマブ、T-DM1治療歴あり。脳転移例を含む（活動性脳転移も所定の適格基準下で登録）。",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "表示結果の原著全文は未確認です。一次論文の抄録・公開された要約に基づき、対象条件の補足には試験計画なども参照しています。",
      "sourceUrl": "https://www.nejm.org/doi/full/10.1056/NEJMoa1914609"
    },
    "guidelineReferences": [
      {
        "trialId": "her2climb",
        "guidelineId": "jbcs-2022-web-2024",
        "section": "薬物療法 FRQ12",
        "title": "HER2陽性転移・再発乳癌に対する三次以降の治療で推奨される治療は何か？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/frq12/",
        "citationEvidence": "参考文献11: Curigliano et al., Ann Oncol 2022（最終OS）；参考文献12: Lin et al., JAMA Oncol 2022（脳転移の更新探索解析）。 公式章の文献11のPMID 36564285は訂正文へのリンク。論文名・著者・誌名から元論文PMID 34954044を別途照合し、正しい元論文リンクを付した。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/34954044/",
          "https://pubmed.ncbi.nlm.nih.gov/36454580/"
        ],
        "interpretationNote": "公式章の文献11のPMID 36564285は訂正文へのリンク。論文名・著者・誌名から元論文PMID 34954044を別途照合し、正しい元論文リンクを付した。",
        "organization": "JBCS",
        "accessMethod": "学会公式WEB版の該当章・参考文献"
      },
      {
        "trialId": "her2climb",
        "guidelineId": "asco-her2-positive-advanced-2022",
        "organization": "ASCO",
        "title": "Systemic Therapy for Advanced Human Epidermal Growth Factor Receptor 2–Positive Breast Cancer: ASCO Guideline Update",
        "publicationDate": "2022-05-31",
        "section": "Section 3.1.2; Literature review and clinical interpretation",
        "url": "https://ascopubs.org/doi/10.1200/JCO.22.00519",
        "citationEvidence": "HER2CLIMBの既治療条件とtucatinib併用を明示。",
        "relationship": "explicit_citation",
        "verificationMethod": "indexed_official_guideline_body",
        "checkedDate": "2026-10-06",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）"
      }
    ],
    "agents": [],
    "priorAdcContext": "T-DM1既治療は適格条件だが試験介入・比較群にADCは含まれない。",
    "adcFilterNote": "ADC試験として分類しない。T-DM1後治療を検索する文脈として保持。",
    "reports": [
      {
        "id": "her2climb-final-os-2021",
        "label": "最終OS解析（全612例）",
        "publicationDate": "2021-12-23",
        "publicationDateType": "online_first",
        "resultDate": "2021-12-23",
        "resultDateLabel": "原著公開日／月（データカットオフとは別）",
        "result": "追跡中央値29.6か月：OS 24.7対19.2か月、HR 0.73（95% CI 0.59–0.90、P=0.004）。初回解析OSと混同しない。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/34954044/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/34954044/",
          "checkedDate": "2026-10-06"
        },
        "checkedDate": "2026-10-06",
        "issuePublicationDate": "2022-03"
      },
      {
        "id": "her2climb-brain-update-2022",
        "label": "脳転移サブグループ更新探索解析",
        "publicationDate": "2022-12-01",
        "publicationDateType": "online_first",
        "resultDate": "2022-12-01",
        "resultDateLabel": "原著公開日／月（データカットオフとは別）",
        "result": "ベースライン脳転移291例：OS 21.6対12.5か月、HR 0.60（95% CI 0.44–0.81）。CNS-PFS 9.9対4.2か月、HR 0.39（95% CI 0.27–0.56）。",
        "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9716438/",
        "articleEvidence": {
          "status": "full_text_checked",
          "label": "表示結果の原著本文確認済み",
          "note": "原著本文の対象条件・表示結果の該当箇所を確認。",
          "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9716438/",
          "checkedDate": "2026-10-06"
        },
        "checkedDate": "2026-10-06",
        "caveat": "同一無作為化試験の探索的サブグループ解析。全集団の主要評価結果や別試験として計上しない。",
        "issuePublicationDate": "2023-02-01"
      }
    ],
    "regimenAgents": [
      "tucatinib",
      "trastuzumab",
      "capecitabine"
    ],
    "drugClasses": [],
    "primaryPublication": {
      "date": "2019-12-11",
      "precision": "day",
      "sourceUrl": "https://www.nejm.org/doi/10.1056/NEJMoa1914609",
      "note": "初回PFS主要結果原著。12月27日の訂正日は使用しない。"
    },
    "trial_registration": "NCT02614794",
    "reportsOnly": true
  },
  {
    "setting": "metastatic",
    "stages": [],
    "timing": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "phase": "III",
    "id": "destiny-breast04",
    "name": "DESTINY-Breast04",
    "design": "第III相・無作為化・非盲検・実薬対照（2:1）",
    "subtypes": [
      "HR+/HER2-",
      "TNBC"
    ],
    "stageLabel": "切除不能または転移性乳癌",
    "lineBuckets": [
      "chemo_pretreated",
      "endocrine_pretreated"
    ],
    "lineLabel": "HER2-low・化学療法既治療（HR陽性では内分泌療法既治療）",
    "population": "HER2-low：IHC 1+、またはIHC 2+／ISH陰性。HR陽性・陰性の両群。化学療法1～2ライン既治療、または術後化学療法中・終了後6か月以内に再発。HR陽性では内分泌療法1ライン以上が必要。",
    "biomarkers": [
      "HER2-low（IHC 1+またはIHC 2+/ISH−）"
    ],
    "experimental": "トラスツズマブ デルクステカン（T-DXd）",
    "control": "医師選択化学療法（カペシタビン、エリブリン、ゲムシタビン、パクリタキセル、nab-パクリタキセル）",
    "primaryEndpoint": "HR陽性コホートのBICRによるPFS",
    "result": "2025年長期更新：全体OS中央値22.9対16.8か月（HR 0.69、95% CI 0.55–0.86）。HR陽性群は23.9対17.6か月（HR 0.69、95% CI 0.55–0.87）。",
    "resultDate": "2023-03-01",
    "resultDateLabel": "主要解析データカットオフ",
    "publicationDate": "2025-10-08",
    "publicationYear": 2025,
    "sources": [
      {
        "title": "Modi et al. NEJM 2022（主要解析）",
        "url": "https://www.nejm.org/doi/full/10.1056/NEJMoa2203690"
      },
      {
        "title": "同論文・PMC全文",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10561652/"
      },
      {
        "title": "Trastuzumab deruxtecan in HER2-low metastatic breast cancer: long-term survival analysis of the randomized, phase 3 DESTINY-Breast04 trial.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41062831/",
        "kind": "原著",
        "publicationDate": "2025-10-08"
      },
      {
        "title": "ClinicalTrials.gov：ADC前治療条件",
        "url": "https://clinicaltrials.gov/study/NCT03734029",
        "kind": "試験登録"
      }
    ],
    "caveat": "HER2-lowはHER2陽性ではない。掲載効果量はHR陽性集団であり、HR陰性／TNBC集団にそのまま適用しない。HR陰性群は小規模。ILD／肺臓炎に注意。",
    "publicationDateType": "online_first",
    "lineBucketNote": "endocrine_pretreatedはHR陽性集団の条件。HER2-low要件は両サブタイプに共通。",
    "cardPopulation": "HER2-low：IHC 1+、またはIHC 2+／ISH陰性。HR陽性・陰性の両群。化学療法1～2ライン既治療、または術後化学療法中・終了後6か月以内に再発。HR陽性では内分泌療法1ライン以上が必要。",
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "表示結果・安全性を原著本文の該当箇所で確認。",
      "sourceUrl": "https://www.nature.com/articles/s41591-025-03981-4",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [
      {
        "trialId": "destiny-breast04",
        "guidelineId": "jbcs-2022-web-2024",
        "section": "薬物療法 CQ34",
        "title": "化学療法歴のあるHER2低発現の転移・再発乳癌に対して、トラスツズマブ デルクステカンは推奨されるか？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq34/",
        "citationEvidence": "参考文献3: Modi et al., NEJM 2022。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/35665782/"
        ],
        "organization": "JBCS",
        "accessMethod": "学会公式WEB版の該当章・参考文献"
      },
      {
        "trialId": "destiny-breast04",
        "guidelineId": "asco-her2-low-2022",
        "organization": "ASCO",
        "title": "Chemotherapy and Targeted Therapy for Human Epidermal Growth Factor Receptor 2–Negative Metastatic Breast Cancer That Is Either Endocrine-Pretreated or Hormone Receptor–Negative: ASCO Guideline Rapid Recommendation Update",
        "publicationDate": "2022-08-04",
        "section": "Background; Evidence Review; Updated Recommendation",
        "url": "https://ascopubs.org/doi/10.1200/JCO.22.01533",
        "citationEvidence": "DESTINY-Breast04を更新の契機として明示。",
        "relationship": "explicit_citation",
        "verificationMethod": "indexed_official_guideline_body",
        "checkedDate": "2026-10-06",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）"
      }
    ],
    "agents": [
      "T-DXd"
    ],
    "drugClasses": [
      "ADC"
    ],
    "her2Expression": "HER2-low（IHC 1+または2+/ISH−）",
    "priorAdcContext": "抗HER2治療（ADC含む）既治療を除外（レジストリ）。",
    "japanApproval": "未評価",
    "safety": "Grade ≥3 TEAE 54.4%対67.4%。薬剤関連ILD/肺臓炎12.1%；Grade 5は1.1%（4例）。",
    "updateNote": "同一試験の更新。既存主要報告と既存ガイドライン引用を保持し、更新結果の引用確認とはみなさない。",
    "regimenAgents": [
      "T-DXd",
      "capecitabine",
      "eribulin",
      "gemcitabine",
      "paclitaxel",
      "nab-paclitaxel"
    ],
    "primaryPublication": {
      "date": "2022-06-05",
      "precision": "day",
      "sourceUrl": "https://www.nejm.org/doi/10.1056/NEJMoa2203690",
      "note": "初回主要結果原著。2025年長期更新ではない。"
    },
    "reports": [
      {
        "id": "destiny-breast04-previous-2022-06-05",
        "label": "以前の掲載解析",
        "publicationDate": "2022-06-05",
        "resultDate": "2022-01-11",
        "result": "HR陽性コホート：PFS中央値10.1対5.4か月、ハザード比0.51（95% CI 0.40–0.64）。同コホートのOS中央値23.9対17.5か月。",
        "safety": null,
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "表示結果の原著全文は未確認です。一次論文の抄録・公開された要約に基づき、対象条件の補足には試験計画なども参照しています。",
          "sourceUrl": "https://www.nejm.org/doi/full/10.1056/NEJMoa2203690"
        },
        "sourceUrl": "https://www.nejm.org/doi/full/10.1056/NEJMoa2203690"
      }
    ]
  },
  {
    "setting": "metastatic",
    "stages": [],
    "timing": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "phase": "III",
    "id": "monaleesa-2",
    "name": "MONALEESA-2",
    "design": "第III相・無作為化・二重盲検・プラセボ対照（1:1）",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stageLabel": "再発または転移性の進行乳癌",
    "lineBuckets": [
      "firstline"
    ],
    "lineLabel": "閉経後・進行病変に対する全身療法未治療",
    "population": "閉経後女性、HR陽性／HER2陰性の再発・転移乳癌。進行病変に対する内分泌療法・化学療法は未治療、CDK4/6阻害薬歴なし。",
    "biomarkers": [
      "HR陽性",
      "HER2陰性"
    ],
    "experimental": "リボシクリブ＋レトロゾール",
    "control": "プラセボ＋レトロゾール",
    "primaryEndpoint": "治験責任医師評価によるPFS",
    "result": "初回中間解析：18か月PFS率63.0%対42.2%、ハザード比0.56（95% CI 0.43–0.72）。",
    "resultDate": "2016-01-29",
    "resultDateLabel": "初回PFS中間解析データカットオフ",
    "publicationDate": "2016-10-08",
    "publicationYear": 2016,
    "sources": [
      {
        "title": "Hortobagyi et al. NEJM 2016（初回PFS）",
        "url": "https://www.nejm.org/doi/abs/10.1056/NEJMoa1609709"
      },
      {
        "title": "最終OS解析",
        "url": "https://pubmed.ncbi.nlm.nih.gov/35263519/",
        "kind": "更新・関連報告",
        "publicationDate": "2022-03-10"
      }
    ],
    "caveat": "閉経後集団の試験。掲載の63.0%対42.2%は18か月PFS率で、24か月率ではない。後年のOS解析はここに混在させない。",
    "publicationDateType": "online_first",
    "cardPopulation": "閉経後女性、HR陽性／HER2陰性の再発・転移乳癌。進行病変に対する内分泌療法・化学療法は未治療、CDK4/6阻害薬歴なし。",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "表示結果の原著全文は未確認です。一次論文の抄録・公開された要約に基づき、対象条件の補足には試験計画なども参照しています。",
      "sourceUrl": "https://www.nejm.org/doi/abs/10.1056/NEJMoa1609709"
    },
    "guidelineReferences": [
      {
        "trialId": "monaleesa-2",
        "guidelineId": "jbcs-2022-web-2024",
        "section": "薬物療法 CQ20",
        "title": "閉経後ホルモン受容体陽性HER2陰性転移・再発乳癌に対する一次内分泌療法として，何が推奨されるか？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq20/",
        "citationEvidence": "参考文献10: Hortobagyi et al., NEJM 2016；参考文献11: Ann Oncol 2018；参考文献12: NEJM 2022（OS）。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/27717303/",
          "https://pubmed.ncbi.nlm.nih.gov/29718092/",
          "https://pubmed.ncbi.nlm.nih.gov/35263519/"
        ],
        "organization": "JBCS",
        "accessMethod": "学会公式WEB版の該当章・参考文献"
      },
      {
        "trialId": "monaleesa-2",
        "guidelineId": "asco-endocrine-targeted-2021",
        "organization": "ASCO",
        "title": "Endocrine Treatment and Targeted Therapy for Hormone Receptor–Positive, Human Epidermal Growth Factor Receptor 2–Negative Metastatic Breast Cancer: ASCO Guideline Update",
        "publicationDate": "2021-07-29",
        "section": "Recommendation 3.1; Literature review / MONALEESA-2",
        "url": "https://ascopubs.org/doi/10.1200/JCO.21.01392",
        "citationEvidence": "Recommendation 3.1の根拠試験として試験名を明示。",
        "relationship": "explicit_citation",
        "verificationMethod": "indexed_official_guideline_body",
        "checkedDate": "2026-10-06",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）"
      }
    ],
    "regimenAgents": [],
    "agents": [],
    "drugClasses": [],
    "reports": [
      {
        "id": "monaleesa2-final-os-2022",
        "label": "最終OS解析",
        "publicationDate": "2022-03-10",
        "publicationDateType": "issue_publication_date",
        "resultDate": "2022-03-10",
        "resultDateLabel": "原著公開日／月（データカットオフとは別）",
        "result": "OS 63.9対51.4か月、HR 0.76（95% CI 0.63–0.93、両側P=0.008）。追跡中央値6.6年。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/35263519/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/35263519/",
          "checkedDate": "2026-10-06"
        },
        "checkedDate": "2026-10-06",
        "safety": "新たな安全性シグナルなし。"
      }
    ],
    "primaryPublication": {
      "date": "2016",
      "precision": "year",
      "sourceUrl": "https://www.nejm.org/doi/10.1056/NEJMoa1609709",
      "note": "初回PFS原著。出版社の本文は2016-10-08、履歴は2016-10-07と1日差があるため年単位で保持。"
    },
    "reportsOnly": true
  },
  {
    "setting": "metastatic",
    "stages": [],
    "timing": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "phase": "III",
    "id": "capitello-291",
    "name": "CAPItello-291",
    "design": "第III相・無作為化・二重盲検・プラセボ対照（1:1）",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stageLabel": "手術不能局所進行または転移性乳癌",
    "lineBuckets": [
      "firstline",
      "endocrine_pretreated",
      "chemo_pretreated"
    ],
    "lineLabel": "アロマターゼ阻害薬治療後（CDK4/6阻害薬既治療／未治療を含む）",
    "population": "HR陽性／HER2陰性、閉経状態を問わない女性と男性。進行期AI中の増悪、または術前・術後AI中／終了後12か月以内の増悪。進行期内分泌療法2ライン・化学療法1ラインまで許容。AKT経路遺伝子異常の有無を問わず登録。",
    "biomarkers": [
      "PIK3CA/AKT1/PTEN異常（共同主要評価集団）"
    ],
    "experimental": "カピバセルチブ＋フルベストラント",
    "control": "プラセボ＋フルベストラント",
    "primaryEndpoint": "全集団とAKT経路異常集団の治験責任医師評価PFS（共同主要評価）",
    "result": "全集団：PFS中央値7.2対3.6か月、ハザード比0.60。PIK3CA/AKT1/PTEN異常群：7.3対3.1か月、ハザード比0.50。",
    "resultDate": "2022-08-15",
    "resultDateLabel": "主要解析データカットオフ",
    "publicationDate": "2023-05-31",
    "publicationYear": 2023,
    "sources": [
      {
        "title": "Turner et al. NEJM 2023（主要解析）",
        "url": "https://www.nejm.org/doi/full/10.1056/NEJMoa2214131"
      },
      {
        "title": "Capivasertib in Hormone Receptor-Positive Advanced Breast Cancer.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/37256976/",
        "kind": "原著・抄録確認"
      }
    ],
    "caveat": "試験は遺伝子異常の有無を問わず登録。全集団とバイオマーカー陽性群の結果を区別し、承認対象と同一視しない。下痢・皮疹などに注意。",
    "publicationDateType": "online_first",
    "lineBucketNote": "chemo_pretreatedは化学療法既治療が許容された部分集団を含むという意味で、全例の必須条件ではない。",
    "cardPopulation": "HR陽性／HER2陰性、閉経状態を問わない女性と男性。進行期AI中の増悪、または術前・術後AI中／終了後12か月以内の増悪。進行期内分泌療法2ライン・化学療法1ラインまで許容。AKT経路遺伝子異常の有無を問わず登録。",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "表示結果の原著全文は未確認です。一次論文の抄録・公開された要約に基づき、対象条件の補足には試験計画なども参照しています。",
      "sourceUrl": "https://www.nejm.org/doi/full/10.1056/NEJMoa2214131"
    },
    "guidelineReferences": [
      {
        "trialId": "capitello-291",
        "guidelineId": "jbcs-2022-web-2024",
        "section": "薬物療法 FRQ10",
        "title": "閉経後ホルモン受容体陽性HER2陰性転移・再発乳癌の二次内分泌療法として何が推奨されるか？（一次内分泌療法として，アロマターゼ阻害薬単剤を行った場合はCQ21参照）",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/frq10/",
        "citationEvidence": "参考文献10: Turner et al., NEJM 2023。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/37256976/"
        ],
        "organization": "JBCS",
        "accessMethod": "学会公式WEB版の該当章・参考文献"
      },
      {
        "trialId": "capitello-291",
        "guidelineId": "asco-capivasertib-2024",
        "organization": "ASCO",
        "title": "Endocrine and Targeted Therapy for Hormone Receptor–Positive, Human Epidermal Growth Factor Receptor 2–Negative Metastatic Breast Cancer—Capivasertib-Fulvestrant: ASCO Rapid Recommendation Update",
        "publicationDate": "2024-03-13",
        "section": "Background; Evidence Review",
        "url": "https://ascopubs.org/doi/10.1200/JCO.24.00248",
        "citationEvidence": "CAPItello-291を更新の契機となる試験として明示。",
        "relationship": "explicit_citation",
        "verificationMethod": "indexed_official_guideline_body",
        "checkedDate": "2026-10-06",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）"
      }
    ],
    "agents": [
      "fulvestrant"
    ],
    "drugClasses": [
      "SERD"
    ],
    "regimenType": "combination",
    "priorCdk46Context": "69.1%が進行期CDK4/6阻害薬既治療。",
    "esr1Context": "ESR1非限定。PIK3CA/AKT1/PTEN異常群と全集団が共同主要評価。",
    "japanApproval": "未評価",
    "safety": "Grade ≥3皮疹12.1%対0.3%、下痢9.3%対0.3%。カピバセルチブ／プラセボのAE中止13.0%対2.3%。",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/37256976/",
      "checkedDate": "2026-10-06"
    },
    "regimenAgents": [
      "capivasertib",
      "fulvestrant"
    ],
    "primaryPublication": {
      "date": "2023-05-31",
      "precision": "day",
      "sourceUrl": "https://www.nejm.org/doi/10.1056/NEJMoa2214131",
      "note": "初回PFS主要解析原著。"
    },
    "reports": []
  },
  {
    "setting": "metastatic",
    "stages": [],
    "timing": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "phase": "III",
    "id": "emerald",
    "name": "EMERALD",
    "design": "第III相・無作為化・非盲検・実薬対照（1:1）",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stageLabel": "局所進行または転移性乳癌",
    "lineBuckets": [
      "endocrine_pretreated",
      "chemo_pretreated"
    ],
    "lineLabel": "CDK4/6阻害薬＋内分泌療法後",
    "population": "ER陽性／HER2陰性の進行乳癌。進行期内分泌療法1～2ライン既治療で、CDK4/6阻害薬の前治療が必須。進行期化学療法は1ラインまで。ESR1変異の有無を問わず登録。",
    "biomarkers": [
      "ER陽性",
      "ESR1変異（共同主要評価集団）"
    ],
    "experimental": "エラセストラント",
    "control": "医師選択の内分泌単剤療法（フルベストラントまたはアロマターゼ阻害薬）",
    "primaryEndpoint": "全集団とESR1変異検出集団のBICRによるPFS（共同主要評価）",
    "result": "PFSハザード比：全集団0.70（95% CI 0.55–0.88）、ESR1変異群0.55（95% CI 0.39–0.77）。",
    "resultDate": "2021-09-06",
    "resultDateLabel": "主要解析データカットオフ",
    "publicationDate": "2022-05-18",
    "publicationYear": 2022,
    "sources": [
      {
        "title": "Bidard et al. JCO 2022（主要解析）",
        "url": "https://ascopubs.org/doi/10.1200/JCO.22.00338"
      },
      {
        "title": "同論文・PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/35584336/"
      },
      {
        "title": "Elacestrant in ER+, HER2- Metastatic Breast Cancer with ESR1-Mutated Tumors: Subgroup Analyses from the Phase III EMERALD Trial by Prior Duration of Endocrine Therapy plus CDK4/6 Inhibitor and in Clinical Subgroups.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/39087959/",
        "kind": "原著・抄録確認"
      }
    ],
    "caveat": "ESR1変異群の効果量を変異未検出群へそのまま適用しない。全例でCDK4/6阻害薬前治療が必要な試験で、内分泌療法未治療例の試験ではない。",
    "publicationDateType": "online_first",
    "lineBucketNote": "chemo_pretreatedは化学療法既治療が許容された部分集団を含むという意味で、全例の必須条件ではない。",
    "cardPopulation": "ER陽性／HER2陰性の進行乳癌。進行期内分泌療法1～2ライン既治療で、CDK4/6阻害薬の前治療が必須。進行期化学療法は1ラインまで。ESR1変異の有無を問わず登録。",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "表示結果の原著全文は未確認です。一次論文の抄録・公開された要約に基づき、対象条件の補足には試験計画なども参照しています。",
      "sourceUrl": "https://ascopubs.org/doi/10.1200/JCO.22.00338"
    },
    "guidelineReferences": [
      {
        "trialId": "emerald",
        "guidelineId": "jbcs-2022-web-2024",
        "section": "薬物療法 FRQ10",
        "title": "閉経後ホルモン受容体陽性HER2陰性転移・再発乳癌の二次内分泌療法として何が推奨されるか？（一次内分泌療法として，アロマターゼ阻害薬単剤を行った場合はCQ21参照）",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/frq10/",
        "citationEvidence": "参考文献11: Bidard et al., JCO 2022。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/35584336/"
        ],
        "organization": "JBCS",
        "accessMethod": "学会公式WEB版の該当章・参考文献"
      },
      {
        "trialId": "emerald",
        "guidelineId": "asco-esr1-elacestrant-2023",
        "organization": "ASCO",
        "title": "Testing for ESR1 Mutations to Guide Therapy for Hormone Receptor–Positive, Human Epidermal Growth Factor Receptor 2–Negative Metastatic Breast Cancer: ASCO Guideline Rapid Recommendation Update",
        "publicationDate": "2023-05-17",
        "section": "Background; Methods; Evidence Review",
        "url": "https://ascopubs.org/doi/10.1200/JCO.23.00638",
        "citationEvidence": "EMERALDを検査・治療推奨更新の根拠として明示。",
        "relationship": "explicit_citation",
        "verificationMethod": "indexed_official_guideline_body",
        "checkedDate": "2026-10-06",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）"
      }
    ],
    "agents": [
      "elacestrant",
      "fulvestrant"
    ],
    "drugClasses": [
      "SERD"
    ],
    "regimenType": "monotherapy",
    "priorCdk46Context": "全例CDK4/6阻害薬既治療が必須。",
    "esr1Context": "ESR1変異群と全集団が共同主要評価集団。",
    "japanApproval": "未評価",
    "safety": "治療関連grade 3/4 AE 7.2%対3.1%、治療関連AE中止3.4%対0.9%。悪心（全grade）35.0%対18.8%。",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/35584336/",
      "checkedDate": "2026-10-06"
    },
    "regimenAgents": [
      "elacestrant",
      "fulvestrant",
      "aromatase inhibitor"
    ],
    "primaryPublication": {
      "date": "2022-05-18",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/35584336/",
      "note": "初回PFS主要解析原著。"
    },
    "reports": [
      {
        "id": "emerald-esr1-prior-cdk-2024",
        "label": "ESR1変異・前治療期間別の事後探索的解析（2024年10月号）",
        "publicationDate": "2024-10-01",
        "resultDate": "2024-10-01",
        "result": "ESR1変異かつ前ET＋CDK4/6阻害薬12か月以上の集団：PFS 8.6対1.9か月、HR 0.41（95% CI 0.26–0.63）。事後解析・多重性調整なし。",
        "safety": "サブグループの安全性は全集団と一貫。",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/39087959/",
          "checkedDate": "2026-10-06"
        },
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/39087959/"
      }
    ]
  },
  {
    "setting": "metastatic",
    "stages": [],
    "timing": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "phase": "III",
    "id": "keynote-355",
    "name": "KEYNOTE-355",
    "design": "第III相・無作為化・二重盲検・プラセボ対照（2:1）",
    "subtypes": [
      "TNBC"
    ],
    "stageLabel": "切除不能局所再発または転移性乳癌",
    "lineBuckets": [
      "firstline"
    ],
    "lineLabel": "進行期の一次治療・PD-L1 CPS別評価",
    "population": "TNBC、切除不能局所再発・転移病変に対して未治療。PD-L1発現を問わず登録。早期乳癌の根治目的治療終了から再発までは6か月以上。PD-L1は22C3法のCPSで評価。",
    "biomarkers": [
      "PD-L1 CPS ≥10（掲載OS集団）",
      "PD-L1 22C3"
    ],
    "experimental": "ペムブロリズマブ＋化学療法（nab-パクリタキセル、パクリタキセル、またはゲムシタビン＋カルボプラチン）",
    "control": "プラセボ＋同じ化学療法",
    "primaryEndpoint": "PFSおよびOS（CPS ≥10、CPS ≥1、ITT集団を事前規定の多重性調整下で評価）",
    "result": "最終OS解析・CPS ≥10群：OS中央値23.0対16.1か月、ハザード比0.73（95% CI 0.55–0.95）。",
    "resultDate": "2021-06-15",
    "resultDateLabel": "最終OS解析データカットオフ",
    "publicationDate": "2022-07-20",
    "publicationYear": 2022,
    "sources": [
      {
        "title": "Cortés et al. NEJM 2022（最終OS）",
        "url": "https://www.nejm.org/doi/abs/10.1056/NEJMoa2202809"
      },
      {
        "title": "Cortés et al. Lancet 2020（先行PFS報告）",
        "url": "https://pubmed.ncbi.nlm.nih.gov/33278935/"
      }
    ],
    "caveat": "掲載OS効果量はCPS ≥10群。CPS ≥1群ではOS有意差を認めず、ITTのOS有意性は階層手順上検定されなかった。全TNBCへ一般化しない。",
    "publicationDateType": "online_first",
    "cardPopulation": "TNBC、切除不能局所再発・転移病変に対して未治療。PD-L1発現を問わず登録。早期乳癌の根治目的治療終了から再発までは6か月以上。PD-L1は22C3法のCPSで評価。",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "表示結果の原著全文は未確認です。一次論文の抄録・公開された要約に基づき、対象条件の補足には試験計画なども参照しています。",
      "sourceUrl": "https://www.nejm.org/doi/abs/10.1056/NEJMoa2202809"
    },
    "guidelineReferences": [
      {
        "trialId": "keynote-355",
        "guidelineId": "jbcs-2022-web-2024",
        "section": "薬物療法 CQ31",
        "title": "転移・再発乳癌に対してPD-1/PD-L1阻害薬は勧められるか？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq31/",
        "citationEvidence": "参考文献8: Cortés et al., Lancet 2020；参考文献9: Cortés et al., NEJM 2022。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/33278935/",
          "https://pubmed.ncbi.nlm.nih.gov/35857659/"
        ],
        "organization": "JBCS",
        "accessMethod": "学会公式WEB版の該当章・参考文献"
      },
      {
        "trialId": "keynote-355",
        "guidelineId": "asco-her2-negative-chemo-2021",
        "organization": "ASCO",
        "title": "Chemotherapy and Targeted Therapy for Patients With Human Epidermal Growth Factor Receptor 2–Negative Metastatic Breast Cancer That is Either Endocrine-Pretreated or Hormone Receptor–Negative: ASCO Guideline Update",
        "publicationDate": "2021-07-29",
        "section": "Recommendation 1.1; Literature update and analysis; reference 10",
        "url": "https://ascopubs.org/doi/10.1200/JCO.21.01374",
        "citationEvidence": "PD-L1陽性TNBCの根拠としてKEYNOTE-355を明示。",
        "relationship": "explicit_citation",
        "verificationMethod": "indexed_official_guideline_body",
        "checkedDate": "2026-10-06",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）"
      }
    ],
    "regimenAgents": [],
    "agents": [],
    "drugClasses": [],
    "primaryPublication": {
      "date": "2020",
      "precision": "year",
      "sourceUrl": "https://www.sciencedirect.com/science/article/pii/S0140673620325319",
      "note": "初回PFS主要原著（Lancet 2020年12月）。2022年OS原著とは区別。"
    },
    "reports": []
  },
  {
    "setting": "metastatic",
    "stages": [],
    "timing": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "phase": "III",
    "id": "ascent",
    "name": "ASCENT",
    "design": "第III相・無作為化・非盲検・実薬対照（1:1）",
    "subtypes": [
      "TNBC"
    ],
    "stageLabel": "転移性乳癌",
    "lineBuckets": [
      "chemo_pretreated"
    ],
    "lineLabel": "複数化学療法既治療（早期再発では進行期1ライン後も含む）",
    "population": "再発・難治性の転移性TNBCで、タキサンを含む化学療法既治療。原則として進行期2レジメン以上。術前・術後化学療法後12か月以内の再発では進行期1ライン既治療でも登録。安定脳転移を許容したが主要解析から除外。",
    "biomarkers": [
      "TNBC"
    ],
    "experimental": "サシツズマブ ゴビテカン",
    "control": "医師選択単剤化学療法（エリブリン、ビノレルビン、カペシタビン、ゲムシタビン）",
    "primaryEndpoint": "ベースライン脳転移なし集団のBICRによるPFS",
    "result": "2024年最終解析・全無作為化529例：PFS4.8対1.7か月、HR0.41（95% CI 0.33–0.52）；OS11.8対6.9か月、HR0.51（0.42–0.63）。",
    "resultDate": "2024-02-29",
    "resultDateLabel": "最終ITT解析のオンライン公開日",
    "publicationDate": "2024-02-29",
    "publicationYear": 2024,
    "sources": [
      {
        "title": "ASCENT第二次治療サブ解析（登録条件の補足）",
        "url": "https://www.nature.com/articles/s41523-022-00439-5"
      },
      {
        "title": "Bardia et al. ASCENT最終ITT解析",
        "url": "https://ascopubs.org/doi/10.1200/JCO.23.01409",
        "kind": "原著・最終解析",
        "publicationDate": "2024-02-29"
      },
      {
        "title": "Bardia et al. NEJM 2021（主要解析）",
        "url": "https://www.nejm.org/doi/full/10.1056/NEJMoa2028485"
      }
    ],
    "caveat": "掲載値は全無作為化529例の最終ITT解析。2021年主要解析の脳転移なし468例（PFS5.6対1.7か月）とは解析集団が異なる。HER2-low/IHC0解析は事後解析。既存2021年ガイドライン引用がこの2024年報告を引用した意味ではない。",
    "publicationDateType": "online_first",
    "cardPopulation": "再発・難治性の転移性TNBCで、タキサンを含む化学療法既治療。原則として進行期2レジメン以上。術前・術後化学療法後12か月以内の再発では進行期1ライン既治療でも登録。安定脳転移を許容したが主要解析から除外。",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "掲載結果は原著抄録で確認。全文・補足資料は未確認。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/38422473/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [
      {
        "trialId": "ascent",
        "guidelineId": "asco-her2-negative-chemo-2021",
        "organization": "ASCO",
        "title": "Chemotherapy and Targeted Therapy for Patients With Human Epidermal Growth Factor Receptor 2–Negative Metastatic Breast Cancer That is Either Endocrine-Pretreated or Hormone Receptor–Negative: ASCO Guideline Update",
        "publicationDate": "2021-07-29",
        "section": "Recommendation 1.3; Literature update and analysis; reference 5",
        "url": "https://ascopubs.org/doi/10.1200/JCO.21.01374",
        "citationEvidence": "ASCENTをsacituzumab govitecan推奨の根拠として明示。",
        "relationship": "explicit_citation",
        "verificationMethod": "indexed_official_guideline_body",
        "checkedDate": "2026-10-06",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）"
      }
    ],
    "agents": [
      "sacituzumab govitecan"
    ],
    "drugClasses": [
      "ADC"
    ],
    "adcTarget": "TROP2",
    "adcPayload": "SN-38（TOP1阻害）",
    "priorAdcContext": "既治療TOP1-ADC後の治療順序を評価した試験ではない。掲載最終報告の抄録でADC除外基準詳細は未確認。",
    "safety": "最終報告：治療関連AEによる中止は5%以下、治療関連死なし。好中球減少・下痢が重要な毒性。",
    "japanApproval": "未評価",
    "her2Expression": "HER2陰性。HER2-low限定選択ではない。",
    "regimenAgents": [
      "sacituzumab govitecan",
      "eribulin",
      "vinorelbine",
      "capecitabine",
      "gemcitabine"
    ],
    "primaryPublication": {
      "date": "2021-04-21",
      "precision": "day"
    },
    "reports": [
      {
        "id": "ascent-previous-2021-04-21",
        "label": "以前の掲載解析",
        "publicationDate": "2021-04-21",
        "resultDate": "2021-04-21",
        "result": "脳転移なし468例：PFS中央値5.6対1.7か月、ハザード比0.41（95% CI 0.32–0.52）。同集団のOS中央値12.1対6.7か月。",
        "safety": null,
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "表示結果の原著全文は未確認です。一次論文の抄録・公開された要約に基づき、対象条件の補足には試験計画なども参照しています。",
          "sourceUrl": "https://www.nejm.org/doi/full/10.1056/NEJMoa2028485"
        },
        "sourceUrl": "https://www.nejm.org/doi/full/10.1056/NEJMoa2028485"
      }
    ]
  },
  {
    "id": "paloma-2",
    "name": "PALOMA-2",
    "phase": "III",
    "design": "第III相・無作為化・二重盲検・プラセボ対照（2:1）",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行または転移性乳癌",
    "lineBuckets": [
      "firstline"
    ],
    "lineLabel": "進行期の一次治療・閉経後",
    "population": "閉経後女性、ER陽性／HER2陰性の進行乳癌。進行期に対する全身療法は未治療。666例を登録。",
    "cardPopulation": "閉経後女性、ER陽性／HER2陰性の進行乳癌。進行期に対する全身療法は未治療。666例を登録。",
    "experimental": "パルボシクリブ＋レトロゾール",
    "control": "プラセボ＋レトロゾール",
    "primaryEndpoint": "治験責任医師評価PFS",
    "result": "初回PFS：24.8対14.5か月（HR 0.58）。2024年OS報告：53.9対51.2か月（HR 0.96、95% CI 0.78–1.18、片側P=0.34）、有意差なし。",
    "publicationDate": "2024-01-22",
    "publicationYear": 2024,
    "publicationDateType": "online_first",
    "resultDate": "2024年OS報告・追跡中央値90.1か月",
    "resultDateLabel": "OS解析報告（PFS値は2016年初回報告）",
    "sources": [
      {
        "title": "Slamon et al. JCO 2024（最終OS）",
        "url": "https://pubmed.ncbi.nlm.nih.gov/38252901/",
        "kind": "原著"
      },
      {
        "title": "Finn et al. NEJM 2016（主要PFS）",
        "url": "https://pubmed.ncbi.nlm.nih.gov/27959613/",
        "kind": "原著"
      }
    ],
    "caveat": "PFSとOSを区別する。OSは追跡不明例の群間不均衡で解釈が制限され、回収データによる解析でも有意差は示されなかった。CDK4/6阻害薬既治療後の試験ではない。",
    "guidelineReferences": [
      {
        "guidelineId": "asco-endocrine-targeted-2021",
        "organization": "ASCO",
        "title": "Endocrine Treatment and Targeted Therapy for Hormone Receptor–Positive, Human Epidermal Growth Factor Receptor 2–Negative Metastatic Breast Cancer: ASCO Guideline Update",
        "publicationDate": "2021-07-29",
        "section": "Recommendation 3.1; PALOMA-2 subsection",
        "url": "https://ascopubs.org/doi/10.1200/JCO.21.01392",
        "citationEvidence": "一次AI併用の根拠としてPALOMA-2を明示。",
        "relationship": "explicit_citation",
        "verificationMethod": "indexed_official_guideline_body",
        "checkedDate": "2026-10-06",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）"
      },
      {
        "trialId": "paloma-2",
        "guidelineId": "nccn-insights-breast-1-2017",
        "section": "p.448, NCCN Recommendations for Endocrine Therapy for Metastatic Breast Cancer",
        "title": "NCCN Guidelines Insights: Breast Cancer, Version 1.2017",
        "url": "https://jnccn.org/abstract/journals/jnccn/15/4/article-p433.pdf",
        "citationEvidence": "本文でPALOMA-2を明示し、参照89を付す。",
        "relationship": "explicit_citation",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）",
        "sourceVersion": "1.2017",
        "historical": true,
        "checkedDate": "2026-10-06",
        "referenceNumber": 89,
        "organization": "NCCN"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "掲載結果は原著抄録で確認。本文は取得できず、抄録にない結果・解析詳細は補完していない。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/38252901/",
      "checkedDate": "2026-10-06"
    },
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "trial_registration": "NCT01740427",
    "biomarkers": [
      "ER陽性",
      "HER2陰性"
    ],
    "regimenAgents": [],
    "agents": [],
    "drugClasses": [],
    "primaryPublication": {
      "date": "2016",
      "precision": "year",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/27959613/",
      "note": "初回PFS主要原著。2024年OS更新ではない。"
    },
    "reports": []
  },
  {
    "id": "monarch-3",
    "name": "MONARCH-3",
    "phase": "III",
    "design": "第III相・無作為化・二重盲検・プラセボ対照（2:1）",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行または転移性乳癌",
    "lineBuckets": [
      "firstline"
    ],
    "lineLabel": "進行期の一次治療・閉経後",
    "population": "閉経後女性、HR陽性／HER2陰性の進行乳癌。進行期全身療法未治療。493例を登録。",
    "cardPopulation": "閉経後女性、HR陽性／HER2陰性の進行乳癌。進行期全身療法未治療。493例を登録。",
    "experimental": "アベマシクリブ＋非ステロイド性AI（アナストロゾールまたはレトロゾール）",
    "control": "プラセボ＋同じAI",
    "primaryEndpoint": "治験責任医師評価PFS（OSはゲート付き副次評価）",
    "result": "最終PFS：28.18対14.76か月（HR 0.540）。2024年最終OS：66.8対53.7か月（HR 0.804、95% CI 0.637–1.015、P=0.0664）、有意差なし。",
    "publicationDate": "2024-05-08",
    "publicationYear": 2024,
    "publicationDateType": "online_first",
    "resultDate": "2024年最終OS報告・追跡中央値8.1年",
    "resultDateLabel": "最終OS解析報告（PFS値は2019年報告）",
    "sources": [
      {
        "title": "Goetz et al. Annals of Oncology 2024（最終OS）",
        "url": "https://pubmed.ncbi.nlm.nih.gov/38729566/",
        "kind": "原著"
      },
      {
        "title": "Johnston et al. npj Breast Cancer 2019（最終PFS）",
        "url": "https://pubmed.ncbi.nlm.nih.gov/30675515/",
        "kind": "原著"
      }
    ],
    "caveat": "PFS改善は確認されたが、最終OSは統計学的有意差に達しなかった。OS中央値の数値差だけで生存利益が確立したと表現しない。",
    "guidelineReferences": [
      {
        "guidelineId": "asco-endocrine-targeted-2021",
        "organization": "ASCO",
        "title": "Endocrine Treatment and Targeted Therapy for Hormone Receptor–Positive, Human Epidermal Growth Factor Receptor 2–Negative Metastatic Breast Cancer: ASCO Guideline Update",
        "publicationDate": "2021-07-29",
        "section": "Recommendation 3.1; MONARCH-3 subsection",
        "url": "https://ascopubs.org/doi/10.1200/JCO.21.01392",
        "citationEvidence": "一次AI併用の根拠としてMONARCH-3を明示。",
        "relationship": "explicit_citation",
        "verificationMethod": "indexed_official_guideline_body",
        "checkedDate": "2026-10-06",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "掲載結果は原著抄録で確認。本文は取得できず、抄録にない結果・解析詳細は補完していない。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/38729566/",
      "checkedDate": "2026-10-06"
    },
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "trial_registration": "NCT02246621",
    "biomarkers": [
      "HR陽性",
      "HER2陰性"
    ],
    "regimenAgents": [],
    "agents": [],
    "drugClasses": [],
    "primaryPublication": {
      "date": "2017-10-02",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/28968163/",
      "note": "初回PFS中間解析原著。2019年最終PFSと2024年OSより前。"
    },
    "reports": []
  },
  {
    "id": "monaleesa-3",
    "name": "MONALEESA-3",
    "phase": "III",
    "design": "第III相・無作為化・二重盲検・プラセボ対照（2:1）",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行または転移性乳癌",
    "lineBuckets": [
      "firstline",
      "endocrine_pretreated"
    ],
    "lineLabel": "進行期一次・二次内分泌療法、進行期化学療法未治療",
    "population": "HR陽性／HER2陰性の進行乳癌。進行期ETは0–1ライン、化学療法歴なし。実際の登録726例は閉経後女性。一次集団はde novoまたは周術期ET終了後12か月超の再発、二次集団は早期再発または進行期一次ET後。",
    "cardPopulation": "HR陽性／HER2陰性の進行乳癌。進行期ETは0–1ライン、化学療法歴なし。実際の登録726例は閉経後女性。一次集団はde novoまたは周術期ET終了後12か月超の再発、二次集団は早期再発または進行期一次ET後。",
    "experimental": "リボシクリブ＋フルベストラント",
    "control": "プラセボ＋フルベストラント",
    "primaryEndpoint": "治験責任医師評価PFS（OSは副次評価）",
    "result": "2023年延長追跡・探索的OS解析：ITT全体のOS中央値52.2対41.5か月（HR 0.75、95% CI 0.62–0.92）。一次集団では67.6対51.8か月。",
    "publicationDate": "2023-08-31",
    "publicationYear": 2023,
    "publicationDateType": "online_first",
    "resultDate": "2022-01-12",
    "resultDateLabel": "延長追跡OSデータカットオフ（追跡中央値70.8か月）",
    "sources": [
      {
        "title": "Neven et al. Breast Cancer Research 2023（延長追跡OS）",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10469877/",
        "kind": "原著"
      },
      {
        "title": "Slamon et al. JCO 2018（主要PFS）",
        "url": "https://pubmed.ncbi.nlm.nih.gov/29860922/",
        "kind": "原著"
      }
    ],
    "caveat": "2023年報告は探索的延長追跡。一次集団とITT全体のOSを混同しない。早期再発は転移期治療未実施でも試験の二次集団に分類された。",
    "guidelineReferences": [
      {
        "guidelineId": "asco-endocrine-targeted-2021",
        "organization": "ASCO",
        "title": "Endocrine Treatment and Targeted Therapy for Hormone Receptor–Positive, Human Epidermal Growth Factor Receptor 2–Negative Metastatic Breast Cancer: ASCO Guideline Update",
        "publicationDate": "2021-07-29",
        "section": "Recommendation 3.2; MONALEESA-3 subsection",
        "url": "https://ascopubs.org/doi/10.1200/JCO.21.01392",
        "citationEvidence": "フルベストラント併用の根拠としてMONALEESA-3を明示。",
        "relationship": "explicit_citation",
        "verificationMethod": "indexed_official_guideline_body",
        "checkedDate": "2026-10-06",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "本文の対象定義・Methods・OS結果（ITTと一次集団）を確認。",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10469877/",
      "checkedDate": "2026-10-06"
    },
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "trial_registration": "NCT02422615",
    "biomarkers": [
      "HR陽性",
      "HER2陰性"
    ],
    "lineBucketNote": "firstlineは試験の一次集団。周術期ET中または終了後12か月以内の再発は試験では二次集団。",
    "agents": [
      "fulvestrant"
    ],
    "drugClasses": [
      "SERD"
    ],
    "regimenType": "combination",
    "priorCdk46Context": "CDK4/6阻害薬既治療後の継続／変更を評価する試験ではない。",
    "esr1Context": "ESR1変異を登録条件としない。",
    "japanApproval": "未評価",
    "safety": "主要PFS報告：grade 3好中球減少46.6%対0%、grade 4好中球減少6.8%対0%。",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/29860922/",
      "checkedDate": "2026-10-06"
    },
    "regimenAgents": [
      "ribociclib",
      "fulvestrant"
    ],
    "primaryPublication": {
      "date": "2018-06-03",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/29860922/",
      "note": "初回PFS主要原著。後年OS更新ではない。"
    },
    "reports": []
  },
  {
    "id": "tropics-02",
    "name": "TROPiCS-02",
    "phase": "III",
    "design": "第III相・無作為化・非盲検・実薬対照（1:1）",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "手術不能局所再発または転移性乳癌",
    "lineBuckets": [
      "endocrine_pretreated",
      "chemo_pretreated"
    ],
    "lineLabel": "内分泌抵抗性、進行期化学療法2–4レジメン後",
    "population": "HR陽性／HER2陰性、手術不能局所再発または転移性乳癌。内分泌療法・タキサン・CDK4/6阻害薬の前治療があり、転移性乳癌に対する化学療法2–4レジメン既治療。543例。",
    "cardPopulation": "HR陽性／HER2陰性、手術不能局所再発または転移性乳癌。内分泌療法・タキサン・CDK4/6阻害薬の前治療があり、転移性乳癌に対する化学療法2–4レジメン既治療。543例。",
    "experimental": "サシツズマブ ゴビテカン",
    "control": "医師選択単剤化学療法（エリブリン、ビノレルビン、カペシタビン、ゲムシタビン）",
    "primaryEndpoint": "BICRによるPFS（OSは副次評価）",
    "result": "主要PFS：5.5対4.0か月（HR 0.66）。2023年OS報告：14.4対11.2か月（HR 0.79、95% CI 0.65–0.96、P=0.020）。",
    "publicationDate": "2023-08-23",
    "publicationYear": 2023,
    "publicationDateType": "online_first",
    "resultDate": "2022-07-01",
    "resultDateLabel": "OS報告データカットオフ（追跡中央値12.5か月）",
    "sources": [
      {
        "title": "Rugo et al. Lancet 2023（OS）",
        "url": "https://pubmed.ncbi.nlm.nih.gov/37633306/",
        "kind": "原著"
      },
      {
        "title": "Rugo et al. JCO 2022（主要PFS）",
        "url": "https://pubmed.ncbi.nlm.nih.gov/36027558/",
        "kind": "原著"
      },
      {
        "title": "TROPiCS-02 JCO Safety節",
        "url": "https://ascopubs.org/doi/10.1200/JCO.22.01002",
        "kind": "原著・Safety節索引抜粋"
      },
      {
        "title": "ASCO 2023・OS延長追跡（探索的）",
        "url": "https://ascopubs.org/doi/10.1200/JCO.2023.41.16_suppl.1003",
        "kind": "更新・関連報告",
        "publicationDate": "2023-05-31"
      }
    ],
    "caveat": "HR+/HER2−の複数前治療集団。TNBCのASCENTとは別試験で、化学療法未治療の内分泌抵抗例への直接検証ではない。",
    "guidelineReferences": [
      {
        "guidelineId": "asco-sacituzumab-2023",
        "organization": "ASCO",
        "title": "Chemotherapy and Targeted Therapy for Endocrine-Pretreated or Hormone Receptor–Negative Metastatic Breast Cancer: ASCO Guideline Rapid Recommendation Update",
        "publicationDate": "2023-01-10",
        "section": "Evidence Review; Updated Recommendation",
        "url": "https://ascopubs.org/doi/10.1200/JCO.22.02807",
        "citationEvidence": "TROPiCS-02を更新の根拠となる唯一の新規RCTとして明示。",
        "relationship": "explicit_citation",
        "verificationMethod": "indexed_official_guideline_body",
        "checkedDate": "2026-10-06",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "掲載結果は原著抄録で確認。本文は取得できず、抄録にない結果・解析詳細は補完していない。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/37633306/",
      "checkedDate": "2026-10-06"
    },
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "trial_registration": "NCT03901339",
    "biomarkers": [
      "HR陽性",
      "HER2陰性"
    ],
    "agents": [
      "sacituzumab govitecan"
    ],
    "drugClasses": [
      "ADC"
    ],
    "adcTarget": "TROP2",
    "adcPayload": "SN-38（TOP1阻害）",
    "priorAdcContext": "内分泌療法・CDK4/6阻害薬・複数化学療法後。ADC逐次療法を評価した試験ではない。掲載抄録からADC既治療の詳細は未確認。",
    "her2Expression": "HER2陰性：IHC0またはHER2-low（IHC1+、IHC2+/ISH−）。",
    "safety": "2022年主要報告：Grade ≥3治療関連好中球減少51%対38%、下痢9%対1%。2023年OS抄録は好中球減少性腸炎に伴う敗血症性ショックの治療関連死1例を記載。",
    "safetyEvidence": {
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/36027558/",
      "status": "abstract_only",
      "note": "主要好中球減少・下痢頻度を2022年原著抄録で再確認。"
    },
    "japanApproval": "未評価",
    "regimenAgents": [
      "sacituzumab govitecan",
      "eribulin",
      "vinorelbine",
      "capecitabine",
      "gemcitabine"
    ],
    "primaryPublication": {
      "date": "2022-08-26",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/36027558/",
      "note": "初回PFS主要原著。2023年OS更新ではない。"
    },
    "reports": [
      {
        "name": "PFS primary",
        "publicationDate": "2022-08-26",
        "sourceUrl": "https://ascopubs.org/doi/10.1200/JCO.22.01002",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "掲載結果は原著抄録で確認。全文・補足資料は未確認。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/36027558/",
          "checkedDate": "2026-10-06"
        },
        "her2Expression": "HER2陰性：IHC0またはHER2-low（IHC1+、IHC2+/ISH−）。",
        "japanApproval": "未評価",
        "id": "tropics-02-report-1",
        "label": "PFS primary",
        "resultDate": "2022-08-26",
        "result": "PFS中央値5.5対4.0か月（HR 0.66、95% CI 0.53–0.83）。",
        "safety": "Grade ≥3治療関連好中球減少51%対38%、下痢9%対1%。"
      },
      {
        "name": "OS second interim",
        "publicationDate": "2023-08-23",
        "dataCutoff": "2022-07-01",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/37633306/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "掲載結果は原著抄録で確認。全文・補足資料は未確認。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/37633306/",
          "checkedDate": "2026-10-06"
        },
        "her2Expression": "HER2陰性：IHC0またはHER2-low（IHC1+、IHC2+/ISH−）。",
        "japanApproval": "未評価",
        "id": "tropics-02-report-2",
        "label": "OS second interim",
        "resultDate": "2022-07-01",
        "result": "OS中央値14.4対11.2か月（HR 0.79、95% CI 0.65–0.96、P=0.020）。",
        "safety": "好中球減少性腸炎に伴う敗血症性ショックの治療関連死1例。"
      },
      {
        "id": "tropics-02-extended-os-2023",
        "label": "ASCO 2023・OS延長追跡（探索的）",
        "publicationDate": "2023-05-31",
        "issuePublicationDate": "2023-06-01",
        "presentationDate": "2023-06-05",
        "resultDate": "2022-12-01",
        "result": "437死亡イベント時点：OS 14.5対11.2か月、HR 0.79（95% CI 0.65–0.95）、名目P=0.01。",
        "caveat": "第2中間OS解析で有意差に達し、プロトコル上は既に最終解析。本学会報告はさらに追跡した探索的解析。独立した第III相試験として数えない。",
        "sourceUrl": "https://ascopubs.org/doi/10.1200/JCO.2023.41.16_suppl.1003",
        "articleEvidence": {
          "status": "conference_only",
          "label": "原著論文未確認（学会発表ベース）",
          "sourceUrl": "https://ascopubs.org/doi/10.1200/JCO.2023.41.16_suppl.1003",
          "note": "ASCO公式学会抄録1003を確認。追加安全性は抄録に具体的数値がなく、本報告へ未転記。",
          "checkedDate": "2026-10-06"
        }
      }
    ]
  },
  {
    "id": "falcon",
    "name": "FALCON",
    "phase": "III",
    "design": "無作為化・二重盲検（1:1）",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行または転移性乳癌",
    "lineBuckets": [
      "firstline",
      "chemo_pretreated"
    ],
    "lineLabel": "内分泌療法未治療の一次内分泌療法",
    "lineBucketNote": "firstlineは内分泌療法を指す。進行期化学療法既治療例を含む。",
    "population": "閉経後のHR陽性/HER2陰性進行乳癌で、いずれの治療段階でも内分泌療法未治療。局所進行・転移期化学療法既治療例を含む。",
    "experimental": "フルベストラント500 mg",
    "control": "アナストロゾール1 mg/日",
    "trial_registration": "NCT01602380",
    "biomarkers": [
      "HR陽性",
      "HER2陰性"
    ],
    "primaryEndpoint": "PFS（OSは副次評価項目）",
    "result": "2025年最終OS：中央値44.8 vs 42.7か月（HR 0.97、95% CI 0.77–1.21、P=0.7579）。OSの有意差を認めなかった。",
    "publicationYear": 2025,
    "publicationDate": "2025-01-07",
    "publicationDateType": "online_first",
    "resultDate": "2022-07-11",
    "resultDateLabel": "最終OS解析データカットオフ",
    "sources": [
      {
        "title": "Robertson et al. JCO 2025: FALCON最終OS",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12054979/",
        "kind": "原著・本文確認"
      },
      {
        "title": "Robertson et al. Lancet 2016: FALCON主要PFS",
        "url": "https://pubmed.ncbi.nlm.nih.gov/27908454/",
        "kind": "原著・抄録確認"
      }
    ],
    "caveat": "内分泌療法未治療の比較であり、AIやCDK4/6阻害薬後の試験ではない。主要PFSの改善と最終OSの非有意を区別。OS差を検出する検出力を正式に設定した試験ではない。",
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "2025年最終OS報告をPMC本文で確認。主要PFS原著はPubMed抄録確認。2025年訂正は著者学位表記で、掲載OS値の訂正ではない。",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12054979/"
    },
    "guidelineReferences": [
      {
        "guidelineId": "nccn-insights-breast-1-2017",
        "section": "p.447, First-Line Endocrine Therapy for Metastatic Hormone Receptor–Positive Breast Cancer",
        "title": "NCCN Guidelines Insights: Breast Cancer, Version 1.2017",
        "url": "https://jnccn.org/abstract/journals/jnccn/15/4/article-p433.pdf",
        "citationEvidence": "本文でFALCONを明示し、参照85を付す。",
        "relationship": "explicit_citation",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）",
        "sourceVersion": "1.2017",
        "historical": true,
        "checkedDate": "2026-10-06",
        "referenceNumber": 85,
        "organization": "NCCN"
      }
    ],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "cardPopulation": "閉経後のHR陽性/HER2陰性進行乳癌で、いずれの治療段階でも内分泌療法未治療。局所進行・転移期化学療法既治療例を含む。",
    "agents": [
      "fulvestrant"
    ],
    "drugClasses": [
      "SERD"
    ],
    "regimenType": "monotherapy",
    "priorCdk46Context": "内分泌療法未治療。AI／CDK4/6阻害薬増悪後の比較ではない。",
    "esr1Context": "ESR1変異を登録条件としない。",
    "japanApproval": "未評価",
    "safety": "主要PFS報告：関節痛17%対10%、ほてり11%対10%、AE中止7%対5%。2025年最終OS報告とは別の解析時点。",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/27908454/",
      "checkedDate": "2026-10-06"
    },
    "regimenAgents": [
      "fulvestrant",
      "anastrozole"
    ],
    "primaryPublication": {
      "date": "2016-11-29",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/27908454/",
      "note": "初回PFS主要結果原著。2025年OS更新ではない。"
    },
    "reports": []
  },
  {
    "id": "destiny-breast01",
    "name": "DESTINY-Breast01",
    "phase": "II",
    "design": "第II相・非盲検・単群",
    "setting": "metastatic",
    "subtypes": [
      "HER2+"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "切除不能・転移性乳癌",
    "population": "HER2陽性転移性乳癌、T-DM1抵抗性・難治性。5.4 mg/kg群184例。",
    "cardPopulation": "HER2陽性転移性乳癌、T-DM1抵抗性・難治性。5.4 mg/kg群184例。",
    "experimental": "T-DXd",
    "control": "なし（単群）",
    "agents": [
      "T-DXd"
    ],
    "drugClasses": [
      "ADC"
    ],
    "trial_registration": "NCT03248492",
    "primaryEndpoint": "独立中央判定ORR",
    "result": "2023年更新：ORR 62.0%（95% CI 54.5–69.0）、PFS中央値19.4か月、OS中央値29.1か月。",
    "safety": "Grade ≥3 TEAE 53.8%。判定委員会による薬剤関連ILD/肺臓炎15.8%、Grade 5は2.7%（5例）。",
    "publicationDate": "2023-12-11",
    "publicationYear": 2023,
    "publicationDateType": "online_first",
    "resultDate": "2021-03-26",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "sources": [
      {
        "title": "Trastuzumab deruxtecan in previously treated patients with HER2-positive metastatic breast cancer: updated survival results from a phase II trial (DESTINY-Breast01).",
        "url": "https://pubmed.ncbi.nlm.nih.gov/38092229/",
        "kind": "原著",
        "publicationDate": "2023-12-11"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "表示結果・安全性は一次論文抄録で確認。本文未確認の詳細を補完していない。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/38092229/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "japanApproval": "未評価",
    "guidelineStatus": "この追加データでは引用未確認",
    "lineBuckets": [
      "her2_pretreated",
      "chemo_pretreated"
    ],
    "priorAdcContext": "T-DM1既治療が必須。T-DXd、Dato-DXd、SG後の順序比較ではない。",
    "her2Expression": "HER2陽性",
    "caveat": "単群であり、OS/PFSを他試験と直接比較して優劣を判定しない。",
    "evidenceLevel": "phase2_supportive",
    "regimenAgents": [
      "T-DXd"
    ],
    "primaryPublication": {
      "date": "2019-12-11",
      "precision": "day",
      "sourceUrl": "https://www.nejm.org/doi/full/10.1056/NEJMoa1914510",
      "sourceTitle": "Trastuzumab Deruxtecan in Previously Treated HER2-Positive Breast Cancer",
      "sourceType": "original_paper",
      "note": "NEJM初回主要結果原著のPublished online December 11, 2019を確認。2020年冊子日および2023年追跡更新日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "destiny-breast02",
    "name": "DESTINY-Breast02",
    "phase": "III",
    "design": "無作為化・非盲検・実薬対照",
    "setting": "metastatic",
    "subtypes": [
      "HER2+"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "切除不能・転移性乳癌",
    "population": "HER2陽性切除不能・転移性乳癌、T-DM1治療後増悪。608例。",
    "cardPopulation": "HER2陽性切除不能・転移性乳癌、T-DM1治療後増悪。608例。",
    "experimental": "T-DXd",
    "control": "カペシタビン＋トラスツズマブ、またはカペシタビン＋ラパチニブ",
    "agents": [
      "T-DXd"
    ],
    "drugClasses": [
      "ADC"
    ],
    "trial_registration": "NCT03523585",
    "primaryEndpoint": "BICRによるPFS",
    "result": "PFS中央値17.8対6.9か月（HR 0.36、95% CI 0.28–0.45、P<0.0001）。",
    "safety": "Grade ≥3 TEAE 53%対44%。薬剤関連ILD 10%対<1%；T-DXd群にGrade 5が2例。悪心・嘔吐なども多い。",
    "publicationDate": "2023-04-20",
    "publicationYear": 2023,
    "publicationDateType": "online_first",
    "resultDate": "2023年主要報告、追跡中央値21.5対18.6か月",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "sources": [
      {
        "title": "Trastuzumab deruxtecan versus treatment of physician's choice in patients with HER2-positive metastatic breast cancer (DESTINY-Breast02): a randomised, open-label, multicentre, phase 3 trial.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/37086745/",
        "kind": "原著",
        "publicationDate": "2023-04-20"
      },
      {
        "title": "ESMO Breast 2024・長期OS/PFS更新",
        "url": "https://datasourcebydaiichisankyo.com/documents/20833/21597/ESMO%20BC_Kim_DB02%20OS%20Update_MiniOral_Final.pdf",
        "kind": "更新・関連報告",
        "publicationDate": "2024-05"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "表示結果・安全性は一次論文抄録で確認。本文未確認の詳細を補完していない。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/37086745/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "japanApproval": "未評価",
    "guidelineStatus": "この追加データでは引用未確認",
    "lineBuckets": [
      "her2_pretreated",
      "chemo_pretreated"
    ],
    "priorAdcContext": "T-DM1既治療が必須。ADC後ADCの有効性を検証したが、逆順序との無作為比較ではない。",
    "her2Expression": "HER2陽性",
    "caveat": "T-DM1後の試験。トポイソメラーゼI阻害型ADC間の順序効果を証明していない。",
    "regimenAgents": [
      "T-DXd",
      "capecitabine",
      "trastuzumab",
      "lapatinib"
    ],
    "primaryPublication": {
      "date": "2023-04-20",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/37086745/",
      "sourceTitle": "Trastuzumab deruxtecan versus treatment of physician's choice in patients with HER2-positive metastatic breast cancer (DESTINY-Breast02): a randomised, open-label, multicentre, phase 3 trial.",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": [
      {
        "id": "destiny-breast02-os-update-2024",
        "label": "ESMO Breast 2024・長期OS/PFS更新",
        "publicationDate": "2024-05",
        "publicationDatePrecision": "month",
        "presentationDate": "2024-05-15/2024-05-17",
        "presentationDateNote": "会期を記載。個別発表日の一次資料確認未了。",
        "resultDate": "2023-09-29",
        "result": "OS中央値35.7対25.0か月、HR 0.69（95% CI 0.55–0.86）。研究者判定PFS 16.7対5.5か月、HR 0.30。PFS2 33.0対15.0か月、HR 0.42。",
        "safety": "Grade ≥3 TEAE 55.4%対44.6%。判定委員会による薬剤関連ILD/肺臓炎11.4%対0.5%；T-DXd群Grade 5は2例（0.5%）。",
        "safetySourceUrl": "https://datasourcebydaiichisankyo.com/documents/20833/21597/ESMO%20BC_Kim_DB02%20OS%20Update_MiniOral_Final.pdf",
        "caveat": "主要解析後の記述的更新。BICR終了後のためPFS/PFS2等は研究者判定。主カードの2023年BICR-PFSと入れ替えない。",
        "sourceUrl": "https://datasourcebydaiichisankyo.com/documents/20833/21597/ESMO%20BC_Kim_DB02%20OS%20Update_MiniOral_Final.pdf",
        "articleEvidence": {
          "status": "conference_only",
          "label": "原著論文未確認（学会発表ベース）",
          "sourceUrl": "https://datasourcebydaiichisankyo.com/documents/20833/21597/ESMO%20BC_Kim_DB02%20OS%20Update_MiniOral_Final.pdf",
          "note": "著者のESMO Breast 2024発表スライド（スポンサー公開）のデザイン・結果・安全性を確認。原著長期論文の確認ではない。",
          "checkedDate": "2026-10-06"
        },
        "sources": [
          {
            "title": "ESMO Open 182MO abstract identifier",
            "url": "https://doi.org/10.1016/j.esmoop.2024.103204",
            "kind": "学会抄録書誌"
          }
        ]
      }
    ]
  },
  {
    "id": "destiny-breast05",
    "name": "DESTINY-Breast05",
    "phase": "III",
    "design": "無作為化・非盲検・実薬対照",
    "setting": "early",
    "subtypes": [
      "HER2+"
    ],
    "stages": [
      "II",
      "III"
    ],
    "timing": [
      "adjuvant"
    ],
    "stageLabel": "早期乳癌（適格条件を確認）",
    "population": "HER2陽性で、術前療法後に浸潤癌が残存し、手術時リンパ節陽性または初診時切除不能であった高リスク集団。1635例。",
    "cardPopulation": "HER2陽性で、術前療法後に浸潤癌が残存し、手術時リンパ節陽性または初診時切除不能であった高リスク集団。1635例。",
    "experimental": "術後T-DXd",
    "control": "術後T-DM1",
    "agents": [
      "T-DXd",
      "T-DM1"
    ],
    "drugClasses": [
      "ADC"
    ],
    "trial_registration": "NCT04622319",
    "primaryEndpoint": "iDFS",
    "result": "3年iDFS 92.4%対83.7%（HR 0.47、95% CI 0.34–0.66、P<0.001）。追跡中央値約30か月。",
    "safety": "判定委員会による薬剤関連ILD 9.6%対1.6%；T-DXd群でILD死亡2例。T-DXdは悪心71.3%、T-DM1は肝酵素上昇・血小板減少が多い。",
    "publicationDate": "2025-12-10",
    "publicationYear": 2025,
    "publicationDateType": "online_first",
    "resultDate": "2025年iDFS解析（追跡中央値約30か月）",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "sources": [
      {
        "title": "Trastuzumab Deruxtecan in Residual HER2-Positive Early Breast Cancer.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41370739/",
        "kind": "原著",
        "publicationDate": "2025-12-10"
      },
      {
        "title": "ClinicalTrials.gov：前治療・適格条件",
        "url": "https://clinicaltrials.gov/study/NCT04622319",
        "kind": "試験登録",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "2026年訂正（Discussionの誤植修正）",
        "url": "https://www.nejm.org/doi/full/10.1056/NEJMx260006",
        "kind": "訂正",
        "publicationDate": "2026-04-01"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "表示結果・安全性は一次論文抄録で確認。本文未確認の詳細を補完していない。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/41370739/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "japanApproval": "未評価",
    "guidelineStatus": "この追加データでは引用未確認",
    "lineBuckets": [],
    "priorAdcContext": "レジストリでT-DXd、T-DM1、その他抗HER2 ADCの前治療を除外。",
    "her2Expression": "HER2陽性",
    "caveat": "KATHERINE全適格例より高リスクに絞った集団。pCR例・低リスク残存例へ一律に外挿しない。OS確立を意味しない。",
    "regimenAgents": [
      "T-DXd",
      "T-DM1"
    ],
    "primaryPublication": {
      "date": "2025-12-10",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/41370739/",
      "sourceTitle": "Trastuzumab Deruxtecan in Residual HER2-Positive Early Breast Cancer.",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "destiny-breast06",
    "name": "DESTINY-Breast06",
    "phase": "III",
    "design": "無作為化・非盲検・実薬対照",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "切除不能・転移性乳癌",
    "population": "HR陽性、HER2-lowまたはHER2-ultralow。内分泌療法既治療、転移期化学療法未治療。866例。",
    "cardPopulation": "HR陽性、HER2-lowまたはHER2-ultralow。内分泌療法既治療、転移期化学療法未治療。866例。",
    "experimental": "T-DXd",
    "control": "医師選択化学療法（カペシタビン、パクリタキセル、nab-パクリタキセル）",
    "agents": [
      "T-DXd"
    ],
    "drugClasses": [
      "ADC"
    ],
    "trial_registration": "NCT04494425",
    "primaryEndpoint": "HER2-low集団のBICRによるPFS",
    "result": "HER2-low集団：PFS中央値13.2対8.1か月（HR 0.62、P<0.001）。主解析時のOSは未成熟。HER2-ultralowは探索的解析。",
    "safety": "Grade ≥3 AE 52.8%対44.4%。判定委員会によるILD/肺臓炎11.3%（Grade 5が3例）対0.2%。",
    "publicationDate": "2024-09-15",
    "publicationYear": 2024,
    "publicationDateType": "online_first",
    "resultDate": "2024-03-18",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "sources": [
      {
        "title": "Trastuzumab Deruxtecan after Endocrine Therapy in Metastatic Breast Cancer.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/39282896/",
        "kind": "原著",
        "publicationDate": "2024-09-15"
      },
      {
        "title": "原著全文（確認先）",
        "url": "https://www.icm.unicancer.fr/sites/default/files/resources/Docs%20%C3%A0%20t%C3%A9l%C3%A9charger/Publication%202024%20Destiny%20Breast%2006.pdf",
        "kind": "原著全文"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "表示結果・安全性を原著本文の該当箇所で確認。",
      "sourceUrl": "https://www.icm.unicancer.fr/sites/default/files/resources/Docs%20%C3%A0%20t%C3%A9l%C3%A9charger/Publication%202024%20Destiny%20Breast%2006.pdf",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "japanApproval": "未評価",
    "guidelineStatus": "この追加データでは引用未確認",
    "lineBuckets": [
      "endocrine_pretreated",
      "firstline"
    ],
    "priorAdcContext": "転移期化学療法未治療。既治療ADC集団に対する試験ではない。",
    "her2Expression": "HER2-low：IHC 1+または2+/ISH−；ultralow：IHC 0で膜染色あり",
    "caveat": "内分泌療法適格条件あり。ultralowを完全無染色IHC 0と同一視しない。HER2-ultralow単独の優越性を検証した試験ではない。",
    "lineLabel": "内分泌療法後・転移期化学療法前",
    "regimenAgents": [
      "T-DXd",
      "capecitabine",
      "paclitaxel",
      "nab-paclitaxel"
    ],
    "lineBucketNote": "内分泌療法後・転移期化学療法前。転移期内分泌療法2ライン以上後の増悪、または転移期1ライン後かつ術後内分泌療法開始24か月以内の再発／一次内分泌療法＋CDK4/6阻害薬開始6か月以内の増悪が対象。",
    "primaryPublication": {
      "date": "2024-09-15",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/39282896/",
      "sourceTitle": "Trastuzumab Deruxtecan after Endocrine Therapy in Metastatic Breast Cancer.",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "destiny-breast09",
    "name": "DESTINY-Breast09",
    "phase": "III",
    "design": "無作為化・非盲検・実薬対照",
    "setting": "metastatic",
    "subtypes": [
      "HER2+"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "切除不能・転移性乳癌",
    "population": "HER2陽性進行・転移性乳癌。転移期化学療法・抗HER2治療未治療。掲載比較770例。",
    "cardPopulation": "HER2陽性進行・転移性乳癌。転移期化学療法・抗HER2治療未治療。掲載比較770例。",
    "experimental": "T-DXd＋ペルツズマブ（別にT-DXd＋プラセボ群あり）",
    "control": "タキサン＋トラスツズマブ＋ペルツズマブ（THP）",
    "agents": [
      "T-DXd"
    ],
    "drugClasses": [
      "ADC"
    ],
    "trial_registration": "NCT04784715",
    "primaryEndpoint": "BICRによるPFS",
    "result": "事前規定中間解析：T-DXd＋ペルツズマブ対THPのPFS中央値40.7対26.9か月（HR 0.56、95% CI 0.44–0.71、P<0.00001）。",
    "safety": "Grade ≥3 AE 63.5%対62.3%。薬剤関連ILD/肺臓炎12.1%（Grade 5が2例）対1.0%。",
    "publicationDate": "2025-10-29",
    "publicationYear": 2025,
    "publicationDateType": "online_first",
    "resultDate": "2025-02-26",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "sources": [
      {
        "title": "Trastuzumab Deruxtecan plus Pertuzumab for HER2-Positive Metastatic Breast Cancer.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41160818/",
        "kind": "原著",
        "publicationDate": "2025-10-29"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "表示結果・安全性は一次論文抄録で確認。本文未確認の詳細を補完していない。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/41160818/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "japanApproval": "未評価",
    "guidelineStatus": "この追加データでは引用未確認",
    "lineBuckets": [
      "firstline"
    ],
    "priorAdcContext": "転移期抗HER2治療未治療。ADC後の切替効果の試験ではない。",
    "her2Expression": "HER2陽性",
    "caveat": "本報告ではT-DXd単独群は盲検継続中。併用群の結果をT-DXd単独へ転用しない。OS確立を示した報告ではない。",
    "regimenAgents": [
      "T-DXd",
      "pertuzumab",
      "trastuzumab",
      "taxane"
    ],
    "primaryPublication": {
      "date": "2025-10-29",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/41160818/",
      "sourceTitle": "Trastuzumab Deruxtecan plus Pertuzumab for HER2-Positive Metastatic Breast Cancer.",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "destiny-breast11",
    "name": "DESTINY-Breast11",
    "phase": "III",
    "design": "無作為化・非盲検・実薬対照",
    "setting": "early",
    "subtypes": [
      "HER2+"
    ],
    "stages": [
      "II",
      "III"
    ],
    "timing": [
      "neoadjuvant"
    ],
    "stageLabel": "早期乳癌（適格条件を確認）",
    "population": "未治療高リスクHER2陽性（≥cT3cN0またはcT0–4cN1–3）。T-DXd単独286例、T-DXd→THP 321例、ddAC→THP 320例。",
    "cardPopulation": "未治療高リスクHER2陽性（≥cT3cN0またはcT0–4cN1–3）。T-DXd単独286例、T-DXd→THP 321例、ddAC→THP 320例。",
    "experimental": "T-DXd 4サイクル→THP 4サイクル、またはT-DXd単独8サイクル",
    "control": "dose-dense AC→THP",
    "agents": [
      "T-DXd"
    ],
    "drugClasses": [
      "ADC"
    ],
    "trial_registration": "NCT05113251",
    "primaryEndpoint": "pCR（ypT0/is ypN0）",
    "result": "T-DXd→THP対ddAC→THP：pCR 67.3%対56.3%（差11.2%、P=0.003）。T-DXd単独群pCR 43.0%、登録早期終了。EFS未成熟（HR 0.56、95% CI 0.26–1.17）。",
    "safety": "Grade ≥3 AE：T-DXd→THP 37.5%対ddAC→THP 55.8%。薬剤関連ILD/肺臓炎4.4%対5.1%。",
    "publicationDate": "2025-10-21",
    "publicationYear": 2025,
    "publicationDateType": "online_first",
    "resultDate": "2025-03-12",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "sources": [
      {
        "title": "Neoadjuvant trastuzumab deruxtecan alone or followed by paclitaxel, trastuzumab, and pertuzumab for high-risk HER2-positive early breast cancer (DESTINY-Breast11): a randomised, open-label, multicentre, phase III trial.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41130363/",
        "kind": "原著",
        "publicationDate": "2025-10-21"
      },
      {
        "title": "原著全文（確認先）",
        "url": "https://air.unimi.it/retrieve/2275ea6e-624d-46cc-83b2-d710c819490c/1-s2.0-S0923753425049683-main.pdf",
        "kind": "原著全文"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "表示結果・安全性を原著本文の該当箇所で確認。",
      "sourceUrl": "https://air.unimi.it/retrieve/2275ea6e-624d-46cc-83b2-d710c819490c/1-s2.0-S0923753425049683-main.pdf",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "japanApproval": "未評価",
    "guidelineStatus": "この追加データでは引用未確認",
    "lineBuckets": [],
    "priorAdcContext": "未治療早期乳癌。ADC既治療後の試験ではない。",
    "her2Expression": "HER2陽性",
    "caveat": "T-DXd→THPのpCR優越性をT-DXd単独に一般化しない。pCR改善はOS/EFS改善の確立と同義ではない。",
    "regimenAgents": [
      "T-DXd",
      "paclitaxel",
      "trastuzumab",
      "pertuzumab",
      "doxorubicin",
      "cyclophosphamide"
    ],
    "primaryPublication": {
      "date": "2025-10-21",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/41130363/",
      "sourceTitle": "Neoadjuvant trastuzumab deruxtecan alone or followed by paclitaxel, trastuzumab, and pertuzumab for high-risk HER2-positive early breast cancer (DESTINY-Breast11): a randomised, open-label, multicentre, phase III trial.",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "destiny-breast12",
    "name": "DESTINY-Breast12",
    "phase": "IIIb/IV",
    "design": "第IIIb/IV相・非盲検・非比較、2コホート",
    "setting": "metastatic",
    "subtypes": [
      "HER2+"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "切除不能・転移性乳癌",
    "population": "HER2陽性、抗HER2レジメン1つ以上既治療。安定・活動性脳転移263例、脳転移なし241例の別コホート。",
    "cardPopulation": "HER2陽性、抗HER2レジメン1つ以上既治療。安定・活動性脳転移263例、脳転移なし241例の別コホート。",
    "experimental": "T-DXd",
    "control": "なし（単群、2コホート）",
    "agents": [
      "T-DXd"
    ],
    "drugClasses": [
      "ADC"
    ],
    "trial_registration": "NCT04739761",
    "primaryEndpoint": "脳転移群：PFS；脳転移なし群：ORR",
    "result": "脳転移群：12か月PFS 61.6%、12か月CNS-PFS 58.9%。脳転移なし群：ORR 62.7%。",
    "safety": "Grade ≥3 AE：脳転移群51%、脳転移なし群49%。研究者報告ILD/肺臓炎は16%（Grade ≥3 3%）と13%（Grade ≥3 1%）。",
    "publicationDate": "2024-09-13",
    "publicationYear": 2024,
    "publicationDateType": "online_first",
    "resultDate": "2024-02-08",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "sources": [
      {
        "title": "Trastuzumab deruxtecan in HER2-positive advanced breast cancer with or without brain metastases: a phase 3b/4 trial.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/39271844/",
        "kind": "原著",
        "publicationDate": "2024-09-13"
      },
      {
        "title": "原著全文（確認先）",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11645283/",
        "kind": "原著全文"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "表示結果・安全性を原著本文の該当箇所で確認。",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11645283/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "japanApproval": "未評価",
    "guidelineStatus": "この追加データでは引用未確認",
    "lineBuckets": [
      "her2_pretreated"
    ],
    "priorAdcContext": "T-DM1既治療：脳転移群40.3%、脳転移なし群39.0%。比較なし。",
    "her2Expression": "HER2陽性",
    "caveat": "無作為化比較・正式な仮説検定なし。脳転移の有無で主要評価項目が異なる。活動性脳転移でも緊急局所治療が不要な症例など適格条件あり。",
    "regimenAgents": [
      "T-DXd"
    ],
    "primaryPublication": {
      "date": "2024-09-13",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/39271844/",
      "sourceTitle": "Trastuzumab deruxtecan in HER2-positive advanced breast cancer with or without brain metastases: a phase 3b/4 trial.",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "tropion-breast01",
    "name": "TROPION-Breast01",
    "phase": "III",
    "design": "無作為化・非盲検・実薬対照",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "切除不能・転移性乳癌",
    "population": "HR陽性/HER2陰性、内分泌療法後増悪かつ内分泌療法不適、進行期化学療法1–2ライン既治療。732例。",
    "cardPopulation": "HR陽性/HER2陰性、内分泌療法後増悪かつ内分泌療法不適、進行期化学療法1–2ライン既治療。732例。",
    "experimental": "Dato-DXd",
    "control": "医師選択化学療法（エリブリン、カペシタビン、ビノレルビン、ゲムシタビン）",
    "agents": [
      "Dato-DXd"
    ],
    "drugClasses": [
      "ADC"
    ],
    "trial_registration": "NCT05104866",
    "primaryEndpoint": "BICR-PFSおよびOS（二重主要評価項目）",
    "result": "主要PFS：6.9対4.9か月（HR 0.63、95% CI 0.52–0.76）。最終OSは有意差なし（HR 1.01、95% CI 0.83–1.22、P=0.9445）。",
    "safety": "初回解析Grade ≥3 TRAE 20.8%対44.7%。Dato-DXdの主なTRAEは悪心51.1%、口内炎50.0%（Grade ≥3 6.4%）。眼表面障害・ILDにも注意。",
    "publicationDate": "2024-09-12",
    "publicationYear": 2024,
    "publicationDateType": "online_first",
    "resultDate": "2023-07-17（主要PFS）／2024-07-24（最終OS）",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "sources": [
      {
        "title": "Datopotamab Deruxtecan Versus Chemotherapy in Previously Treated Inoperable/Metastatic Hormone Receptor-Positive Human Epidermal Growth Factor Receptor 2-Negative Breast Cancer: Primary Results From TROPION-Breast01.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/39265124/",
        "kind": "原著",
        "publicationDate": "2024-09-12"
      },
      {
        "title": "Datopotamab deruxtecan versus chemotherapy in previously treated inoperable/metastatic hormone receptor-positive, HER2-negative breast cancer: final overall survival analysis of the phase III TROPION-Breast01 study.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41448362/",
        "kind": "原著",
        "publicationDate": "2025-12-23"
      },
      {
        "title": "ClinicalTrials.gov：前治療・適格条件",
        "url": "https://clinicaltrials.gov/study/NCT05104866",
        "kind": "試験登録",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "2026年安全性・PRO報告（同一試験）",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42497483/",
        "kind": "原著・追加解析",
        "publicationDate": "2026-08"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "カードは主要PFS論文と最終OS論文を明示的に分けて要約。各報告の確認状況はreportsに記録。 複数報告を併記しており、各数値の出典・確認状況は個別報告に対応。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/39265124/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "japanApproval": "未評価",
    "guidelineStatus": "この追加データでは引用未確認",
    "lineBuckets": [
      "endocrine_pretreated",
      "chemo_pretreated"
    ],
    "priorAdcContext": "レジストリでトポイソメラーゼI標的化学療法（ADC含む）既治療を除外。T-DXd・Dato-DXd試験への既登録も除外。 原著本文ではTROP2標的療法歴も除外。",
    "her2Expression": "HR陽性/HER2陰性（HER2-low限定ではない）",
    "caveat": "PFS陽性、最終OS陰性を区別。後治療ADCの群間不均衡は解釈上の限界であり、OS延長が証明されたことにはならない。",
    "outcomeTag": "PFS陽性／OS陰性",
    "regimenAgents": [
      "Dato-DXd",
      "eribulin",
      "capecitabine",
      "vinorelbine",
      "gemcitabine"
    ],
    "primaryPublication": {
      "date": "2024-09-12",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/39265124/",
      "sourceTitle": "Datopotamab Deruxtecan Versus Chemotherapy in Previously Treated Inoperable/Metastatic Hormone Receptor-Positive Human Epidermal Growth Factor Receptor 2-Negative Breast Cancer: Primary Results From TROPION-Breast01.",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": [
      {
        "id": "tropion-breast01-pfs",
        "label": "主要PFS・初回安全性",
        "publicationDate": "2024-09-12",
        "resultDate": "2023-07-17",
        "result": "PFS中央値6.9対4.9か月（HR 0.63、95% CI 0.52–0.76、P<0.0001）。",
        "safety": "Grade ≥3 TRAE 20.8%対44.7%；Dato-DXd口内炎50%（Grade ≥3 6.4%）。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/39265124/",
        "articleEvidence": {
          "status": "full_text_checked",
          "label": "表示報告の原著本文確認済み",
          "note": "原著PFS報告の公開著者原稿本文で確認。別の最終OS報告の全文確認を意味しない。",
          "sourceUrl": "https://diposit.ub.edu/bitstreams/ca25bbf3-c503-4152-b58a-e77aee30d8b8/download",
          "checkedDate": "2026-10-06"
        }
      },
      {
        "id": "tropion-breast01-os",
        "label": "最終OS（陰性）",
        "publicationDate": "2025-12-23",
        "resultDate": "2024-07-24",
        "result": "OS有意差なし（HR 1.01、95% CI 0.83–1.22、P=0.9445）。",
        "safety": "追跡延長で新たな安全性シグナルなし（抄録）。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/41448362/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "表示結果・安全性は一次論文抄録で確認。本文未確認の詳細を補完していない。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/41448362/",
          "checkedDate": "2026-10-06"
        }
      },
      {
        "id": "tropion-breast01-safety-2026",
        "label": "最終OS時点の詳細安全性",
        "publicationDate": "2026-07-24",
        "resultDate": "2024-07-24",
        "result": "主要PFS/最終OSは他の同一試験報告を参照。",
        "safety": "判定委員会による薬剤関連ILD/肺臓炎3.9%（Grade ≥3 0.8%、Grade 5が1例）。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42497483/",
        "articleEvidence": {
          "status": "full_text_checked",
          "label": "表示報告の原著本文確認済み",
          "note": "2026年安全性詳細報告の公開本文で確認。公表日と2024-07-24データカットオフを区別。",
          "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13449377/",
          "checkedDate": "2026-10-06"
        },
        "issuePublicationDate": "2026-08"
      }
    ]
  },
  {
    "id": "tropion-breast02",
    "name": "TROPION-Breast02",
    "phase": "III",
    "design": "無作為化・非盲検・実薬対照",
    "setting": "metastatic",
    "subtypes": [
      "TNBC"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "切除不能・転移性乳癌",
    "population": "転移期・切除不能再発に対する未治療TNBC、免疫療法の候補とならない患者644例。早期再発例も含む。",
    "cardPopulation": "転移期・切除不能再発に対する未治療TNBC、免疫療法の候補とならない患者644例。早期再発例も含む。",
    "experimental": "Dato-DXd",
    "control": "医師選択化学療法（パクリタキセル、nab-パクリタキセル、カルボプラチン、カペシタビン、エリブリン）",
    "agents": [
      "Dato-DXd"
    ],
    "drugClasses": [
      "ADC"
    ],
    "trial_registration": "NCT05374512",
    "primaryEndpoint": "BICR-PFSおよびOS",
    "result": "PFS中央値10.8対5.6か月（HR 0.57、99% CI 0.44–0.73）。OS中央値23.7対18.7か月（HR 0.79、95.01% CI 0.64–0.98、P=0.029）。",
    "safety": "Grade ≥3 TRAE 33%対29%。Dato-DXd口内炎57%、悪心45%。判定委員会によるILD/肺臓炎3%にGrade 5が1例（研究者の死因判定とは異なる）。",
    "publicationDate": "2026-04-03",
    "publicationYear": 2026,
    "publicationDateType": "online_first",
    "resultDate": "2025-08-25",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "sources": [
      {
        "title": "Datopotamab deruxtecan in patients with untreated, advanced triple-negative breast cancer (TROPION-Breast02): a randomised, open-label, international, phase III trial.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41937088/",
        "kind": "原著",
        "publicationDate": "2026-04-03"
      },
      {
        "title": "原著全文（確認先）",
        "url": "https://repositorio.bc.ufg.br/riserver/api/core/bitstreams/3c2832d6-fb80-405e-a751-7962b7513903/content",
        "kind": "原著全文"
      },
      {
        "title": "ClinicalTrials.gov：前治療・適格条件",
        "url": "https://clinicaltrials.gov/study/NCT05374512",
        "kind": "試験登録",
        "checkedDate": "2026-10-06"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "公開リポジトリの原著本文（Journal Pre-proof版）で表示結果・安全性を確認。",
      "sourceUrl": "https://repositorio.bc.ufg.br/riserver/api/core/bitstreams/3c2832d6-fb80-405e-a751-7962b7513903/content",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "japanApproval": "未評価",
    "guidelineStatus": "この追加データでは引用未確認",
    "lineBuckets": [
      "firstline"
    ],
    "priorAdcContext": "レジストリでトポイソメラーゼI標的化学療法（ADC含む）既治療を除外。",
    "her2Expression": "TNBC：HR陰性・HER2陰性",
    "caveat": "免疫療法が選択肢とならない集団。PD-L1陽性で免疫療法適格の全例や、ADC既治療後へ外挿しない。",
    "regimenAgents": [
      "Dato-DXd",
      "paclitaxel",
      "nab-paclitaxel",
      "carboplatin",
      "capecitabine",
      "eribulin"
    ],
    "primaryPublication": {
      "date": "2026-04-03",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/41937088/",
      "sourceTitle": "Datopotamab deruxtecan in patients with untreated, advanced triple-negative breast cancer (TROPION-Breast02): a randomised, open-label, international, phase III trial.",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "destiny-breast07",
    "name": "DESTINY-Breast07",
    "phase": "Ib/II",
    "design": "非盲検・プラットフォーム試験、掲載結果は用量拡大コホート（探索的）",
    "setting": "metastatic",
    "subtypes": [
      "HER2+"
    ],
    "stages": [],
    "timing": [],
    "population": "HER2陽性転移性乳癌の一次治療。掲載結果はT-DXd＋durvalumabコホート64例（安全性63例）。単独/ペルツズマブの用量拡大コホートも別報告として記録。",
    "cardPopulation": "HER2陽性転移性乳癌一次治療。掲載はT-DXd＋durvalumabコホート64例。",
    "experimental": "T-DXd±ペルツズマブ、T-DXd＋durvalumab（モジュール別）",
    "control": "掲載コホートに標準治療対照なし",
    "agents": [
      "T-DXd"
    ],
    "drugClasses": [
      "ADC"
    ],
    "trial_registration": "NCT04538742",
    "primaryEndpoint": "安全性・忍容性。ORR/PFSは副次評価項目。",
    "result": "ASCO 2026探索的コホート：ORR 82.8%（80% CI 75.2–88.8）、PFS中央値37.7か月（80% CI 35.1–NE）。",
    "safety": "Grade ≥3 AE 58.7%。薬剤関連ILD/肺臓炎17.5%（Grade 3は2例、ILD死亡なし）。AEによる死亡2例。",
    "publicationDate": "2026-06-01",
    "publicationYear": 2026,
    "resultDate": "2025-01-31",
    "articleEvidence": {
      "status": "conference_only",
      "label": "原著論文未確認（学会発表ベース）",
      "note": "ASCO 2026 abstract 1012。DESTINY-Breast07のT-DXd＋durvalumab用量拡大コホートのみ。原著本文未確認。",
      "sourceUrl": "https://ascopubs.org/doi/pdfdirect/10.1200/JCO.2026.44.16_suppl.1012",
      "checkedDate": "2026-10-06"
    },
    "sources": [
      {
        "title": "ASCO 2026 abstract 1012, Loi et al.",
        "url": "https://ascopubs.org/doi/pdfdirect/10.1200/JCO.2026.44.16_suppl.1012",
        "kind": "学会一次抄録",
        "publicationDate": "2026-06-01"
      },
      {
        "title": "SABCS 2025 PS5-01-14（単独/＋P最終報告）",
        "url": "https://aacrjournals.org/clincancerres/article/32/4_Supplement/PS5-01-14/773803",
        "kind": "学会一次抄録",
        "publicationDate": "2026-02-17"
      }
    ],
    "lineBuckets": [
      "firstline"
    ],
    "her2Expression": "HER2陽性",
    "priorAdcContext": "掲載コホートは転移期一次治療。詳細な周術期ADC歴の適格条件は未確認。",
    "caveat": "第Ib/II相の探索的コホート。80% CIであり通常の95% CIと区別。DESTINY-Breast09の第III相比較と混同しない。",
    "evidenceLevel": "exploratory_early_phase",
    "guidelineReferences": [],
    "japanApproval": "未評価",
    "checkedDate": "2026-10-06",
    "regimenAgents": [
      "T-DXd",
      "durvalumab",
      "pertuzumab"
    ],
    "primaryPublication": {
      "date": "2022-06",
      "precision": "month",
      "sourceUrl": "https://ascopubs.org/doi/10.1200/JCO.2022.40.16_suppl.3025",
      "sourceTitle": "Dose-finding and -expansion studies of trastuzumab deruxtecan in combination with other anti-cancer agents in patients with advanced/metastatic HER2+ (DESTINY-Breast07) and HER2-low (DESTINY-Breast08) breast cancer",
      "sourceType": "conference_abstract",
      "note": "原著論文未確認。最初の一次結果としてASCO 2022 #3025のpart 1用量探索主要安全性・RP2D結果を採用（試験計画抄録ではない）。出版社は冊子6月1日、online6月2日と表記のため月精度。用量拡大の臨床効果主要初回はASCO 2024 #1009であり、2026年追跡結果が試験初回公表ではない。",
      "laterMajorEfficacyDate": "2024",
      "laterMajorEfficacySourceUrl": "https://ascopubs.org/doi/10.1200/JCO.2024.42.16_suppl.1009"
    },
    "reports": [
      {
        "id": "destiny-breast07-monotherapy-pertuzumab",
        "label": "SABCS 2025・単独/ペルツズマブ用量拡大コホート",
        "publicationDate": "2026-02-17",
        "presentationDate": "2025-12",
        "resultDate": "2025-01-31",
        "result": "T-DXd単独75例/＋P 50例：ORR 78.7%/84.0%。PFS・OS中央値はいずれも未到達。群間優越性比較ではない。",
        "safety": "Grade ≥3 AE 57.3%/62.0%。薬剤関連ILD/肺臓炎14.7%/14.0%。",
        "sourceUrl": "https://aacrjournals.org/clincancerres/article/32/4_Supplement/PS5-01-14/773803",
        "articleEvidence": {
          "status": "conference_only",
          "label": "原著論文未確認（学会発表ベース）",
          "sourceUrl": "https://aacrjournals.org/clincancerres/article/32/4_Supplement/PS5-01-14/773803",
          "note": "SABCS 2025 PS5-01-14。第Ib/II相用量拡大コホート、主要評価項目は安全性・忍容性。",
          "checkedDate": "2026-10-06"
        }
      }
    ]
  },
  {
    "id": "kaitlin",
    "name": "KAITLIN",
    "phase": "III",
    "design": "無作為化・非盲検・実薬対照",
    "setting": "early",
    "subtypes": [
      "HER2+"
    ],
    "stages": [
      "I",
      "II",
      "III"
    ],
    "timing": [
      "adjuvant"
    ],
    "stageLabel": "早期乳癌（適格条件を確認）",
    "population": "切除後HER2陽性。リンパ節陽性、またはN0かつHR陰性・腫瘍>2 cmの高リスク乳癌。1846例。",
    "cardPopulation": "切除後HER2陽性。リンパ節陽性、またはN0かつHR陰性・腫瘍>2 cmの高リスク乳癌。1846例。",
    "experimental": "アントラサイクリン→T-DM1＋ペルツズマブ",
    "control": "アントラサイクリン→タキサン＋トラスツズマブ＋ペルツズマブ",
    "agents": [
      "T-DM1"
    ],
    "drugClasses": [
      "ADC"
    ],
    "trial_registration": "NCT01966471",
    "primaryEndpoint": "N+集団および全体集団のiDFS（階層的検定）",
    "result": "主要評価項目未達。全体iDFS HR 0.98（95% CI 0.72–1.32）。3年iDFS 93.1%対94.2%。",
    "safety": "Grade ≥3 AE 51.8%対55.4%。18サイクル完遂65.0%対88.4%；T-DM1は検査値異常による中止が多い。",
    "publicationDate": "2021-12-10",
    "publicationYear": 2021,
    "publicationDateType": "online_first",
    "resultDate": "追跡中央値約57か月の主要報告",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "sources": [
      {
        "title": "Trastuzumab Emtansine Plus Pertuzumab Versus Taxane Plus Trastuzumab Plus Pertuzumab After Anthracycline for High-Risk Human Epidermal Growth Factor Receptor 2-Positive Early Breast Cancer: The Phase III KAITLIN Study.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/34890214/",
        "kind": "原著",
        "publicationDate": "2021-12-10"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "表示結果・安全性は一次論文抄録で確認。本文未確認の詳細を補完していない。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/34890214/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "japanApproval": "未評価",
    "guidelineStatus": "この追加データでは引用未確認",
    "lineBuckets": [],
    "priorAdcContext": "手術後の初回術後療法。術前ADC後の残存病変を対象にした試験ではない。",
    "her2Expression": "HER2陽性",
    "caveat": "術前治療後残存癌のKATHERINEとは別の問い。全I期乳癌を対象としない。",
    "outcomeTag": "主要評価項目陰性",
    "regimenAgents": [
      "T-DM1",
      "pertuzumab",
      "trastuzumab",
      "taxane",
      "anthracycline"
    ],
    "primaryPublication": {
      "date": "2021-12-10",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/34890214/",
      "sourceTitle": "Trastuzumab Emtansine Plus Pertuzumab Versus Taxane Plus Trastuzumab Plus Pertuzumab After Anthracycline for High-Risk Human Epidermal Growth Factor Receptor 2-Positive Early Breast Cancer: The Phase III KAITLIN Study.",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "atempt",
    "name": "ATEMPT",
    "phase": "II",
    "design": "無作為化・非盲検・実薬対照",
    "setting": "early",
    "subtypes": [
      "HER2+"
    ],
    "stages": [
      "I"
    ],
    "timing": [
      "adjuvant"
    ],
    "stageLabel": "早期乳癌（適格条件を確認）",
    "population": "中央確認HER2陽性I期乳癌。術後T-DM1またはTHへ3:1割付。",
    "cardPopulation": "中央確認HER2陽性I期乳癌。術後T-DM1またはTHへ3:1割付。",
    "experimental": "T-DM1 1年",
    "control": "パクリタキセル＋トラスツズマブ（TH）",
    "agents": [
      "T-DM1"
    ],
    "drugClasses": [
      "ADC"
    ],
    "trial_registration": "NCT01853748",
    "primaryEndpoint": "T-DM1群iDFS、および臨床的に重要な毒性（CRT）の群間比較",
    "result": "2024年更新：T-DM1群5年iDFS 97.0%（95% CI 95.2–98.7）、RFI 98.3%。",
    "safety": "2021年主要報告のCRT 46%対47%（P=0.83）。CRT減少を示さず。T-DM1で脱毛・神経障害は少ない（患者報告）。",
    "publicationDate": "2024-06-27",
    "publicationYear": 2024,
    "publicationDateType": "online_first",
    "resultDate": "追跡中央値5.8年の5年更新",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "sources": [
      {
        "title": "Adjuvant Trastuzumab Emtansine Versus Paclitaxel Plus Trastuzumab for Stage I Human Epidermal Growth Factor Receptor 2-Positive Breast Cancer: 5-Year Results and Correlative Analyses From ATEMPT.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/38935923/",
        "kind": "原著",
        "publicationDate": "2024-06-27"
      },
      {
        "title": "Adjuvant Trastuzumab Emtansine Versus Paclitaxel in Combination With Trastuzumab for Stage I HER2-Positive Breast Cancer (ATEMPT): A Randomized Clinical Trial.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/34077270/",
        "kind": "原著",
        "publicationDate": "2021-06-02"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "表示結果・安全性は一次論文抄録で確認。本文未確認の詳細を補完していない。 複数報告を併記しており、各数値の出典・確認状況は個別報告に対応。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/38935923/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "japanApproval": "未評価",
    "guidelineStatus": "この追加データでは引用未確認",
    "lineBuckets": [],
    "priorAdcContext": "術後I期乳癌。転移期ADC後の試験ではない。",
    "her2Expression": "HER2陽性",
    "caveat": "有効性の群間優越性/非劣性を検証できる規模ではない。iDFS良好でもTHより有効と結論しない。",
    "evidenceLevel": "phase2_supportive",
    "regimenAgents": [
      "T-DM1",
      "paclitaxel",
      "trastuzumab"
    ],
    "primaryPublication": {
      "date": "2021-06-02",
      "precision": "day"
    },
    "reports": [
      {
        "id": "atempt-5year",
        "label": "5年iDFS",
        "publicationDate": "2024-06-27",
        "resultDate": "追跡中央値5.8年",
        "result": "T-DM1群5年iDFS 97.0%、RFI 98.3%。",
        "safety": "安全性の主比較は2021年主要報告を参照。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/38935923/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "表示結果・安全性は一次論文抄録で確認。本文未確認の詳細を補完していない。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/38935923/",
          "checkedDate": "2026-10-06"
        }
      },
      {
        "id": "atempt-primary",
        "label": "初回主要解析・毒性",
        "publicationDate": "2021-06-02",
        "resultDate": "2021年主要報告",
        "result": "T-DM1群3年iDFS 97.8%。",
        "safety": "CRT 46%対47%（P=0.83）；CRT減少を示さず。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/34077270/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "表示結果・安全性は一次論文抄録で確認。本文未確認の詳細を補完していない。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/34077270/",
          "checkedDate": "2026-10-06"
        }
      }
    ]
  },
  {
    "id": "daisy",
    "name": "DAISY",
    "phase": "II",
    "design": "非盲検・単群・多コホート第II相",
    "setting": "metastatic",
    "subtypes": [
      "HER2+",
      "HR+/HER2-",
      "TNBC"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "切除不能・転移性乳癌",
    "population": "前治療のある転移性乳癌。HER2過剰発現、HER2-low、HER2非発現の3コホート。",
    "cardPopulation": "前治療のある転移性乳癌。HER2過剰発現、HER2-low、HER2非発現の3コホート。",
    "experimental": "T-DXd",
    "control": "なし（単群、コホート別解析）",
    "agents": [
      "T-DXd"
    ],
    "drugClasses": [
      "ADC"
    ],
    "trial_registration": "NCT04132960",
    "primaryEndpoint": "確認ORR",
    "result": "FAS 177例のORR：HER2過剰発現70.6%、HER2-low 37.5%、HER2非発現29.7%。主要評価項目達成は最初の2コホート。",
    "safety": "抄録では新たな安全性シグナルなし。頻度・重症度の定量詳細は本文未確認。",
    "publicationDate": "2023-07-24",
    "publicationYear": 2023,
    "publicationDateType": "online_first",
    "resultDate": "2023-07-24",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "sources": [
      {
        "title": "Trastuzumab deruxtecan in metastatic breast cancer with variable HER2 expression: the phase 2 DAISY trial.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/37488289/",
        "kind": "原著",
        "publicationDate": "2023-07-24"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "表示結果・安全性は一次論文抄録で確認。本文未確認の詳細を補完していない。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/37488289/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "japanApproval": "未評価",
    "guidelineStatus": "この追加データでは引用未確認",
    "lineBuckets": [
      "chemo_pretreated"
    ],
    "priorAdcContext": "前治療ADCの細かな適格・除外条件は未確認。ADC後の有効性へ一般化しない。",
    "her2Expression": "HER2過剰発現／HER2-low／HER2非発現を別コホート化",
    "caveat": "HER2非発現群の奏効は探索的。全IHC 0患者への有効性確立や承認を意味しない。",
    "evidenceLevel": "phase2_supportive",
    "regimenAgents": [
      "T-DXd"
    ],
    "primaryPublication": {
      "date": "2023-07-24",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/37488289/",
      "sourceTitle": "Trastuzumab deruxtecan in metastatic breast cancer with variable HER2 expression: the phase 2 DAISY trial.",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "tuxedo-1",
    "name": "TUXEDO-1",
    "phase": "II",
    "design": "単施設・非盲検・単群第II相",
    "setting": "metastatic",
    "subtypes": [
      "HER2+"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "切除不能・転移性乳癌",
    "population": "HER2陽性乳癌、未治療または局所治療後進行の活動性脳転移。緊急局所治療の適応なし。15例。",
    "cardPopulation": "HER2陽性乳癌、未治療または局所治療後進行の活動性脳転移。緊急局所治療の適応なし。15例。",
    "experimental": "T-DXd",
    "control": "なし（単群）",
    "agents": [
      "T-DXd"
    ],
    "drugClasses": [
      "ADC"
    ],
    "trial_registration": "NCT04752059",
    "primaryEndpoint": "頭蓋内ORR（PFS/OSは副次）",
    "result": "初回ITT頭蓋内ORR 73.3%（11/15）。最終PP解析PFS中央値21か月、OS中央値未到達。",
    "safety": "最終報告：Grade 3疲労20%。Grade 2 ILD、Grade 3症候性LVEF低下が各1例。",
    "publicationDate": "2024-07-04",
    "publicationYear": 2024,
    "publicationDateType": "online_first",
    "resultDate": "追跡中央値26.5か月の最終解析",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "sources": [
      {
        "title": "Final outcome analysis from the phase II TUXEDO-1 trial of trastuzumab-deruxtecan in HER2-positive breast cancer patients with active brain metastases.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/38963808/",
        "kind": "原著",
        "publicationDate": "2024-07-04"
      },
      {
        "title": "Trastuzumab deruxtecan in HER2-positive breast cancer with brain metastases: a single-arm, phase 2 trial.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/35941372/",
        "kind": "原著",
        "publicationDate": "2022-08-08"
      },
      {
        "title": "最終報告・オンライン日確認",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11630562/",
        "kind": "原著"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "表示結果・安全性は一次論文抄録で確認。本文未確認の詳細を補完していない。 複数報告を併記しており、各数値の出典・確認状況は個別報告に対応。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/38963808/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "japanApproval": "未評価",
    "guidelineStatus": "この追加データでは引用未確認",
    "lineBuckets": [
      "her2_pretreated"
    ],
    "priorAdcContext": "前治療ADCの細かな適格・除外条件は未確認。ADC後の有効性へ一般化しない。",
    "her2Expression": "HER2陽性",
    "caveat": "15例の探索的小規模試験。初回ORRはITT、更新生存解析はPP集団であり分母が異なる。",
    "evidenceLevel": "phase2_supportive",
    "regimenAgents": [
      "T-DXd"
    ],
    "primaryPublication": {
      "date": "2022-08-08",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/35941372/",
      "sourceTitle": "初回頭蓋内ORR",
      "sourceType": "original_paper",
      "note": "同一試験の初回主要結果原著（初回頭蓋内ORR）を基準に採用。主カードの追跡更新日・後続コホート報告日ではない。既存の検証済み書誌を再利用。"
    },
    "reports": [
      {
        "id": "tuxedo-1-primary",
        "label": "初回頭蓋内ORR",
        "publicationDate": "2022-08-08",
        "resultDate": "2022年主要報告",
        "result": "ITT頭蓋内ORR 73.3%（11/15、95% CI 48.1–89.1）。",
        "safety": "新たな安全性シグナルなし。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/35941372/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "表示結果・安全性は一次論文抄録で確認。本文未確認の詳細を補完していない。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/35941372/",
          "checkedDate": "2026-10-06"
        }
      },
      {
        "id": "tuxedo-1-final",
        "label": "最終PFS/OS",
        "publicationDate": "2024-07-04",
        "resultDate": "追跡中央値26.5か月",
        "result": "PP解析PFS中央値21か月、OS未到達。",
        "safety": "Grade 3疲労20%。Grade 2 ILDおよびGrade 3症候性LVEF低下各1例。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/38963808/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "表示結果・安全性は一次論文抄録で確認。本文未確認の詳細を補完していない。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/38963808/",
          "checkedDate": "2026-10-06"
        }
      }
    ]
  },
  {
    "id": "debbrah",
    "name": "DEBBRAH",
    "phase": "II",
    "design": "非盲検・単群・5コホート第II相",
    "setting": "metastatic",
    "subtypes": [
      "HER2+",
      "HR+/HER2-",
      "TNBC"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "切除不能・転移性乳癌",
    "population": "HER2陽性またはHER2-low進行乳癌で脳転移・髄膜播種を有する多コホート試験。カード主要値はHER2-low活動性脳転移12例。",
    "cardPopulation": "HER2陽性またはHER2-low進行乳癌で脳転移・髄膜播種を有する多コホート試験。カード主要値はHER2-low活動性脳転移12例。",
    "experimental": "T-DXd",
    "control": "なし（単群、多コホート）",
    "agents": [
      "T-DXd"
    ],
    "drugClasses": [
      "ADC"
    ],
    "trial_registration": "NCT04420598",
    "primaryEndpoint": "HER2-low活動性脳転移コホート：RANO-BM頭蓋内ORR",
    "result": "HER2-low：未治療無症候性脳転移50.0%（3/6）、局所治療後進行33.3%（2/6）。PFS中央値5.4か月。",
    "safety": "HER2-low 12例：Grade 3 TEAE 16.7%；Grade 1 ILD/肺臓炎25.0%（3例）。",
    "publicationDate": "2024-09-09",
    "publicationYear": 2024,
    "publicationDateType": "online_first",
    "resultDate": "2024-09-09",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "sources": [
      {
        "title": "Trastuzumab deruxtecan in patients with previously treated HER2-low advanced breast cancer and active brain metastases: the DEBBRAH trial.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/39255534/",
        "kind": "原著",
        "publicationDate": "2024-09-09"
      },
      {
        "title": "Trastuzumab deruxtecan in patients with central nervous system involvement from HER2-positive breast cancer: The DEBBRAH trial.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/35639825/",
        "kind": "原著",
        "publicationDate": "2022-05-26"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "表示結果・安全性は一次論文抄録で確認。本文未確認の詳細を補完していない。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/39255534/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "japanApproval": "未評価",
    "guidelineStatus": "この追加データでは引用未確認",
    "lineBuckets": [
      "chemo_pretreated"
    ],
    "priorAdcContext": "前治療ADCの細かな適格・除外条件は未確認。ADC後の有効性へ一般化しない。",
    "her2Expression": "HER2陽性とHER2-lowの別コホート",
    "caveat": "各コホート6例など非常に少数。HER2発現・脳転移状態の異なる報告の効果量を混同しない。",
    "evidenceLevel": "phase2_supportive",
    "regimenAgents": [
      "T-DXd"
    ],
    "primaryPublication": {
      "date": "2022-05-26",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/35639825/",
      "sourceTitle": "HER2陽性脳転移コホート",
      "sourceType": "original_paper",
      "note": "同一試験の初回主要結果原著（HER2陽性脳転移コホート）を基準に採用。主カードの追跡更新日・後続コホート報告日ではない。既存の検証済み書誌を再利用。"
    },
    "reports": [
      {
        "id": "debbrah-her2pos",
        "label": "HER2陽性脳転移コホート",
        "publicationDate": "2022-05-26",
        "resultDate": "2021-10-20",
        "result": "安定脳転移群16週PFS 87.5%（n=8）。活動性脳転移の頭蓋内ORR 46.2%（13例）。",
        "safety": "Grade ≥3好中球減少19%；Grade 1 ILD/肺臓炎9.5%（2/21）。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/35639825/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "表示結果・安全性は一次論文抄録で確認。本文未確認の詳細を補完していない。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/35639825/",
          "checkedDate": "2026-10-06"
        }
      }
    ]
  },
  {
    "id": "begonia",
    "name": "BEGONIA",
    "phase": "Ib/II",
    "design": "第Ib/II相・非盲検・プラットフォーム、探索的コホート",
    "setting": "metastatic",
    "subtypes": [
      "TNBC"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "切除不能・転移性乳癌",
    "population": "切除不能局所進行・転移性TNBCの一次治療。Dato-DXd＋durvalumab：arm 7（PD-L1不問62例）、arm 8（PD-L1高発現33例）。別arm 6はHR陰性/HER2-low。",
    "cardPopulation": "切除不能局所進行・転移性TNBCの一次治療。Dato-DXd＋durvalumab：arm 7（PD-L1不問62例）、arm 8（PD-L1高発現33例）。別arm 6はHR陰性/HER2-low。",
    "experimental": "Dato-DXd＋durvalumab（arm 7/8）、T-DXd＋durvalumab（arm 6）",
    "control": "掲載ADCコホートに標準治療対照なし",
    "agents": [
      "Dato-DXd",
      "T-DXd"
    ],
    "drugClasses": [
      "ADC"
    ],
    "trial_registration": "NCT03742102",
    "primaryEndpoint": "安全性・忍容性、確認ORR",
    "result": "Dato-DXd arm 7：ORR 79.0%、PFS中央値14.0か月。arm 8：ORR 81.8%、生存期間データ未成熟。",
    "safety": "Dato-DXdコホート抄録では新たな安全性シグナルなし（詳細頻度未確認）。T-DXd arm 6のILDは別報告に記載。",
    "publicationDate": "2026-05-20",
    "publicationYear": 2026,
    "publicationDateType": "online_first",
    "resultDate": "2024-11-29（Dato-DXd arm 7/8）",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "sources": [
      {
        "title": "Datopotamab deruxtecan (Dato-DXd) in combination with durvalumab as first-line treatment for unresectable locally advanced or metastatic triple-negative breast cancer: results from arms 7 and 8 of the phase Ib/II BEGONIA study.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42167437/",
        "kind": "原著",
        "publicationDate": "2026-05-20"
      },
      {
        "title": "First-line durvalumab in combination with trastuzumab deruxtecan in women with locally advanced unresectable or metastatic, hormone-receptor-negative, HER2-low breast cancer: multicenter, open-label, phase 1b/2 BEGONIA platform trial.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42259988/",
        "kind": "原著",
        "publicationDate": "2026-06-08"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "表示結果・安全性は一次論文抄録で確認。本文未確認の詳細を補完していない。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42167437/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "japanApproval": "未評価",
    "guidelineStatus": "この追加データでは引用未確認",
    "lineBuckets": [
      "firstline"
    ],
    "priorAdcContext": "前治療ADCの細かな適格・除外条件は未確認。ADC後の有効性へ一般化しない。",
    "her2Expression": "HER2陰性、T-DXd arm 6はHER2-low限定",
    "caveat": "単群早期相コホートであり第III相比較ではない。薬剤間の優劣や免疫療法上乗せを直接証明しない。",
    "evidenceLevel": "exploratory_early_phase",
    "outcomeTag": "探索的／arm 6主要ORR目標未達",
    "regimenAgents": [
      "Dato-DXd",
      "T-DXd",
      "durvalumab"
    ],
    "primaryPublication": {
      "date": "2026-05-20",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42167437/",
      "sourceTitle": "Datopotamab deruxtecan (Dato-DXd) in combination with durvalumab as first-line treatment for unresectable locally advanced or metastatic triple-negative breast cancer: results from arms 7 and 8 of the phase Ib/II BEGONIA study.",
      "sourceType": "original_paper",
      "note": "プラットフォーム試験のADCコホート主要結果について、最初の原著（Dato-DXd＋durvalumab arms 7/8、2026-05-20）を採用。先行学会抄録および2026-06-08 arm 6原著より、最初の原著を優先。"
    },
    "reports": [
      {
        "id": "begonia-arm6",
        "label": "T-DXd＋durvalumab arm 6",
        "publicationDate": "2026-06-08",
        "resultDate": "追跡中央値20.6か月",
        "result": "58例：ORR 62.1%で規定ORR目標未達。PFS中央値12.6か月、OS中央値30.3か月。",
        "safety": "薬剤関連ILD/肺臓炎20.7%（Grade 5 1.7%）。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42259988/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "表示結果・安全性は一次論文抄録で確認。本文未確認の詳細を補完していない。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42259988/",
          "checkedDate": "2026-10-06"
        }
      }
    ]
  },
  {
    "id": "ispy2-2-dato",
    "name": "I-SPY2.2（Dato-DXd）",
    "phase": "II",
    "design": "逐次多段階適応的無作為化プラットフォーム（SMART）",
    "setting": "early",
    "subtypes": [
      "HR+/HER2-",
      "TNBC"
    ],
    "stages": [
      "II",
      "III"
    ],
    "timing": [
      "neoadjuvant"
    ],
    "population": "高リスクII–III期HER2陰性乳癌。Block AのDato-DXd単独103例、Dato-DXd＋durvalumab106例を別報告。反応に応じBlock B/Cまたは早期手術へ移行。",
    "cardPopulation": "高リスクII–III期HER2陰性。反応適応型の術前逐次治療。",
    "experimental": "Block A：Dato-DXd単独または＋durvalumab。必要に応じタキサン治療、ACへ進む。",
    "control": "サブタイプ別動的対照/事前規定成功基準。単純な2群固定レジメン比較ではない。",
    "agents": [
      "Dato-DXd"
    ],
    "drugClasses": [
      "ADC"
    ],
    "trial_registration": "NCT01042379",
    "primaryEndpoint": "Block A後および全Block後のpCR（サブタイプ別）",
    "result": "Dato-DXd単独はBlock A後の成功基準を全サブタイプで未達。＋durvalumabは免疫陽性サブタイプでBlock A後の成功基準を達成。",
    "safety": "単独は主に低Gradeの口内炎・眼事象。＋durvalumabのBlock Aでは口内炎が最多、新たな毒性なし（抄録）。",
    "publicationDate": "2024-09-14",
    "publicationYear": 2024,
    "resultDate": "2024年2つの原著報告",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/39277671/",
      "note": "表示結果・安全性は一次論文抄録で確認。全文未確認。 複数報告を併記しており、各数値の出典・確認状況は個別報告に対応。",
      "checkedDate": "2026-10-06"
    },
    "sources": [
      {
        "title": "Dato-DXd単独・I-SPY2.2原著",
        "url": "https://pubmed.ncbi.nlm.nih.gov/39277671/",
        "kind": "原著",
        "publicationDate": "2024-09-14"
      },
      {
        "title": "Dato-DXd＋durvalumab・I-SPY2.2原著",
        "url": "https://pubmed.ncbi.nlm.nih.gov/39277672/",
        "kind": "原著",
        "publicationDate": "2024-09-14"
      }
    ],
    "lineBuckets": [],
    "her2Expression": "HER2陰性",
    "priorAdcContext": "未治療の術前高リスク早期乳癌。ADC後の試験ではない。",
    "caveat": "全Block後のpCRをDato-DXd単独効果としない。小規模適応的第II相、サブタイプ別の成功基準であり、第III相EFS/OS確立とは異なる。",
    "guidelineReferences": [],
    "japanApproval": "未評価",
    "checkedDate": "2026-10-06",
    "evidenceLevel": "phase2_supportive",
    "regimenAgents": [
      "Dato-DXd",
      "durvalumab",
      "taxane",
      "doxorubicin",
      "cyclophosphamide"
    ],
    "primaryPublication": {
      "date": "2024-09-14",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/39277671/",
      "sourceTitle": "Dato-DXd単独・I-SPY2.2原著",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "scopeEvidence": {
      "verifiedPhase": "II",
      "resultType": "interventional-results",
      "phaseSourceUrls": [
        "https://jamanetwork.com/journals/jamaoncology/fullarticle/2855652",
        "https://clinicaltrials.gov/api/v2/studies/NCT01042379"
      ],
      "resultSourceUrls": [
        "https://pubmed.ncbi.nlm.nih.gov/42911610/",
        "https://jamanetwork.com/journals/jamaoncology/fullarticle/2855652"
      ],
      "checkedAt": "2026-10-24T12:20:58Z"
    },
    "reports": [
      {
        "id": "ispy2-2-dato-alone",
        "label": "Dato-DXd単独Block A",
        "publicationDate": "2024-09-14",
        "resultDate": "2024年原著報告",
        "result": "103例。Block A後の成功基準を全サブタイプで未達。",
        "safety": "新たな毒性なし。口内炎・眼事象は主に低Grade。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/39277671/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/39277671/",
          "note": "表示結果・安全性は一次論文抄録で確認。全文未確認。",
          "checkedDate": "2026-10-06"
        }
      },
      {
        "id": "ispy2-2-dato-durva",
        "label": "Dato-DXd＋durvalumab Block A",
        "publicationDate": "2024-09-14",
        "resultDate": "2024年原著報告",
        "result": "106例。免疫陽性サブタイプでBlock A後の事前規定成功基準を達成。",
        "safety": "Block Aでは口内炎が最多。新たな毒性なし。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/39277672/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/39277672/",
          "note": "表示結果・安全性は一次論文抄録で確認。全文未確認。",
          "checkedDate": "2026-10-06"
        }
      },
      {
        "id": "ispy22-rt-dxd-2026",
        "label": "I-SPY2.2：rilvegostomig＋T-DXd（2026年）",
        "analysisKey": "NCT01042379-ispy22-rt-dxd-2026-10-22",
        "paperKeys": [
          "pmid:42911610",
          "doi:10.1001/jamaoncol.2026.4258"
        ],
        "doi": "10.1001/jamaoncol.2026.4258",
        "publicationDate": "2026-10-22",
        "pubmedHistoryDate": "2026-10-23",
        "conferencePresentationDate": null,
        "resultDate": "データカットオフ未確認",
        "dataCutoff": null,
        "design": "第II相多施設非盲検プラットフォーム試験。米国30施設、RT-DXd登録2024-05-22～2025-05-14。初期2:1で実験トラック/同時対照、実験トラック内のblockA割付はunweighted。反応に応じ手術または後続block。",
        "experimental": "BlockA:rilvegostomig750mg＋T-DXd5.4mg/kg、3週毎最大4サイクル。必要時blockBはpaclitaxel単独またはpaclitaxel/carboplatin/pembrolizumab、blockCはdoxorubicin/cyclophosphamide±pembrolizumab。",
        "control": "同時対照はblockB/Cのみ、サブタイプ別薬剤は実験群後続blockと同じ。",
        "primaryEndpoint": "pCR（blockA後と全block後、受容体/response-predictive subtypes別）。副次はRCBと5年生存アウトカム、今回は生存結果の報告なし。",
        "analysisPopulation": "高リスクstageII/III HER2陰性早期乳癌、成人、臨床径≥2.5cmまたは画像径≥2.0cm。HR陽性/HER2陰性MammaPrint低リスク除外。RT-DXd群HR陽性59/105、HR陰性46/105。 656例スクリーニング、377例プラットフォーム無作為化、88例対照、残る289例実験トラック中108例RT-DXd。未投与3例/11例を除外しmITT105例/77例、計182例。289例をRT-DXd比較対照の分母にしない。Methodsと図注はmodified ITT（1回以上投与）と明記。",
        "result": "原著本文（出版社公開HTML・表）確認、補遺未確認。第II相I-SPY2.2は、高リスクHER2陰性早期乳癌でrilvegostomig＋T-DXdを先行し、反応とサブタイプに応じ標準化学療法を追加する戦略を検討した。解析は1回以上投与されたmITT105例対77例。主要評価項目pCRのblockAモデル推定率はimmune-positiveのHR陽性57%、HR陰性52%で事前閾値を満たしたが、全block戦略の対照優越性基準は満たさなかった。pCR達成immune-positive34例中21例がblockAのみ、33例がanthracyclineを回避。ILDはblockA13/105、全block14/105、grade3は1例。全blockではgrade≥3AE40/105とgrade5敗血症1例があり、低毒性と断定しない。小規模サブグループでの早期指標による結果で、両剤それぞれの寄与や長期生存改善は未確立。\n介入：BlockA:rilvegostomig750mg＋T-DXd5.4mg/kg、3週毎最大4サイクル。必要時blockBはpaclitaxel単独またはpaclitaxel/carboplatin/pembrolizumab、blockCはdoxorubicin/cyclophosphamide±pembrolizumab。 対照：同時対照はblockB/Cのみ、サブタイプ別薬剤は実験群後続blockと同じ。\n評価項目：pCR（blockA後と全block後、受容体/response-predictive subtypes別）。副次はRCBと5年生存アウトカム、今回は生存結果の報告なし。",
        "safety": "BlockA ILD13/105(12.4%)、全block14/105(13.3%)、grade3は1例、全例改善。BlockA疲労89/105(85%)、悪心85/105(81%)。全block grade≥3AE40/105(38.1%)、grade5敗血症1例。BlockA単独はgrade5なし。重篤AEとして肺塞栓/ILDは各3/105(2.9%)で、全有害事象として肺塞栓4/105とは区別。",
        "caveat": "同一I-SPY2.2プラットフォーム内の別治療群の結果であり、既存Dato-DXd群の追跡報告ではない。rilvegostomig＋trastuzumab deruxtecanを評価し、datopotamab deruxtecanとは異なる。 モデル推定pCRと実測分数を区別、表の区間はBayesian credible interval。 本文/表に一部不一致あり、immune-negativeの比較数値とkeypoints79%は主解説に採用しない。 全戦略の対照優越性は未達、非劣性も証明していない。 rilvegostomig単剤/T-DXd単剤群なし、併用各剤の寄与を分離不能。 実測pCRの分母と化学療法回避の条件付き分母を混同しない。 データカットオフ記載を本文から確認できずnull、OS/EFSのHRは作らない。 学会発表日未確認、日本承認/推奨は別途未検証。 原著公開2026-10-22、PubMed登録2026-10-23。学会発表日未確認。確認日時2026-10-24T12:20:58Z。",
        "sourceUrl": "https://jamanetwork.com/journals/jamaoncology/fullarticle/2855652",
        "sources": [
          {
            "title": "原著一次資料",
            "url": "https://jamanetwork.com/journals/jamaoncology/fullarticle/2855652",
            "kind": "一次資料",
            "checkedDate": "2026-10-24"
          },
          {
            "title": "公式試験登録",
            "url": "https://clinicaltrials.gov/api/v2/studies/NCT01042379",
            "kind": "一次資料",
            "checkedDate": "2026-10-24"
          },
          {
            "title": "PubMed原著",
            "url": "https://pubmed.ncbi.nlm.nih.gov/42911610/",
            "kind": "一次資料",
            "checkedDate": "2026-10-24"
          }
        ],
        "articleEvidence": {
          "status": "full_text_checked",
          "label": "原著本文確認済み（補遺未確認）",
          "note": "出版社公開HTMLの原著本文・Methods・Results・表1–4・Limitations確認、補遺未読。",
          "sourceUrl": "https://jamanetwork.com/journals/jamaoncology/fullarticle/2855652",
          "checkedDate": "2026-10-24"
        },
        "scopeEvidence": {
          "verifiedPhase": "II",
          "resultType": "interventional-results",
          "phaseSourceUrls": [
            "https://jamanetwork.com/journals/jamaoncology/fullarticle/2855652",
            "https://clinicaltrials.gov/api/v2/studies/NCT01042379"
          ],
          "resultSourceUrls": [
            "https://pubmed.ncbi.nlm.nih.gov/42911610/",
            "https://jamanetwork.com/journals/jamaoncology/fullarticle/2855652"
          ],
          "checkedAt": "2026-10-24T12:20:58Z"
        },
        "analysisEvidence": {
          "blockA": {
            "allObserved": "21/105",
            "hrPositiveImmunePositive": {
              "n": 12,
              "observedPCR": 7,
              "modeledPCRPercent": 57,
              "credibleInterval95": [
                35,
                78
              ]
            },
            "hrNegativeImmunePositive": {
              "n": 35,
              "observedPCR": 14,
              "modeledPCRPercent": 52,
              "credibleInterval95": [
                32,
                71
              ]
            },
            "immunePositiveThreshold": "40%を超える事後確率0.93/0.88、規定の>0.85を満たす"
          },
          "allBlocks": {
            "hrPositiveImmunePositive": {
              "experimentalN": 12,
              "experimentalObservedPCR": 8,
              "experimentalModeledPCRPercent": 67,
              "experimentalCrI95": [
                41,
                87
              ],
              "controlN": 9,
              "controlModeledPCRPercent": 65,
              "controlCrI95": [
                36,
                89
              ],
              "posteriorProbabilitySuperior": 0.53
            },
            "hrNegativeImmunePositive": {
              "experimentalN": 35,
              "experimentalObservedPCR": 26,
              "experimentalModeledPCRPercent": 72,
              "experimentalCrI95": [
                57,
                85
              ],
              "controlN": 21,
              "controlModeledPCRPercent": 70,
              "controlCrI95": [
                50,
                86
              ],
              "posteriorProbabilitySuperior": 0.57
            },
            "chemotherapyAvoidance": "immune-positiveで全block中pCRとなった34例（8+26例）のうち21/34=62%はblockAのみ、33/34=97%はanthracycline回避。全105例やimmune-positive全47例の割合ではない。"
          }
        },
        "checkedAt": "2026-10-24T12:20:58Z"
      }
    ]
  },
  {
    "id": "ascent-03",
    "name": "ASCENT-03",
    "phase": "III",
    "design": "無作為化・非盲検",
    "setting": "metastatic",
    "subtypes": [
      "TNBC"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "手術不能局所進行／再発または転移性乳癌",
    "lineBuckets": [
      "firstline"
    ],
    "population": "進行期全身療法未治療のTNBC（HER2陰性）。PD-L1 CPS<10、またはCPS≥10でも既治療・併存疾患などによりPD-1/PD-L1阻害薬の対象とならない558例。",
    "cardPopulation": "進行期全身療法未治療のTNBC（HER2陰性）。PD-L1 CPS<10、またはCPS≥10でも既治療・併存疾患などによりPD-1/PD-L1阻害薬の対象とならない558例。",
    "experimental": "sacituzumab govitecan (SG)",
    "control": "パクリタキセル、nab-パクリタキセル、またはゲムシタビン＋カルボプラチン",
    "primaryEndpoint": "BICR-PFS",
    "result": "PFS中央値9.7対6.9か月、HR 0.62（95% CI 0.50–0.77）、P<0.001。ORR 48%対46%。",
    "safety": "Grade≥3 AE 66%対62%。SG群の主なGrade≥3事象は好中球減少43%、下痢9%。AEによる中止4%対12%。",
    "agents": [
      "sacituzumab govitecan"
    ],
    "drugClasses": [
      "ADC"
    ],
    "adcTarget": "TROP2",
    "adcPayload": "SN-38（トポイソメラーゼI阻害）",
    "priorAdcContext": "TOP1阻害薬およびTOP1ペイロードADC既治療を除外（EMA審査資料で確認）。",
    "trial_registration": "NCT05382299",
    "publicationDate": "2025-10-19",
    "publicationYear": 2025,
    "publicationDateType": "online_first",
    "resultDate": "2025-10-19",
    "resultDateLabel": "掲載報告の公表日（データカットオフとは区別）",
    "sources": [
      {
        "title": "ASCENT-03 掲載結果原著",
        "url": "https://www.nejm.org/doi/full/10.1056/NEJMoa2511734",
        "kind": "原著",
        "publicationDate": "2025-10-19"
      },
      {
        "title": "Cortés et al. ASCENT-03 書誌・原著抄録",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41124233/",
        "kind": "原著"
      },
      {
        "title": "EMA assessment report: ASCENT-03 登録条件",
        "url": "https://www.ema.europa.eu/en/documents/variation-report/trodelvy-vr-0000312649-epar-assessment-report-variation_en.pdf",
        "kind": "規制当局一次資料"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "掲載結果は原著抄録で確認。全文・補足資料は未確認。",
      "sourceUrl": "https://www.nejm.org/doi/full/10.1056/NEJMoa2511734",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "caveat": "PD-L1陰性だけの試験ではない。OS改善を示したと解釈しない。化学療法との比較で、他のADCとの直接比較ではない。",
    "checkedDate": "2026-10-06",
    "publicationDateNote": "PubMedのEpubおよびNEJM本文Notesは2025-10-19。NEJMページ見出しには10-18表記もある。",
    "her2Expression": "HER2陰性（TNBC）。HER2-low限定選択ではない。",
    "japanApproval": "未評価",
    "regimenAgents": [
      "sacituzumab govitecan",
      "paclitaxel",
      "nab-paclitaxel",
      "gemcitabine",
      "carboplatin"
    ],
    "primaryPublication": {
      "date": "2025-10-19",
      "precision": "day",
      "sourceUrl": "https://www.nejm.org/doi/full/10.1056/NEJMoa2511734",
      "sourceTitle": "ASCENT-03 掲載結果原著",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "ascent-04",
    "name": "ASCENT-04 / KEYNOTE-D19",
    "phase": "III",
    "design": "無作為化・非盲検",
    "setting": "metastatic",
    "subtypes": [
      "TNBC"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "手術不能局所進行／再発または転移性乳癌",
    "lineBuckets": [
      "firstline"
    ],
    "population": "進行期全身療法未治療、PD-L1 CPS≥10の手術不能局所進行／転移性TNBC（HER2陰性）443例。",
    "cardPopulation": "進行期全身療法未治療、PD-L1 CPS≥10の手術不能局所進行／転移性TNBC（HER2陰性）443例。",
    "experimental": "サシツズマブ ゴビテカン＋ペムブロリズマブ",
    "control": "医師選択化学療法（パクリタキセル、nab-パクリタキセル、またはゲムシタビン＋カルボプラチン）＋ペムブロリズマブ",
    "primaryEndpoint": "BICR-PFS",
    "result": "PFS中央値11.2対7.8か月、HR 0.65（95% CI 0.51–0.84）、P<0.001。ORR 60%対53%。OSは未成熟。",
    "safety": "Grade≥3 AE 71%対70%、AEによる中止12%対31%。死亡に至ったAEは両群3%（治療関連死とは区別）。",
    "agents": [
      "sacituzumab govitecan"
    ],
    "drugClasses": [
      "ADC"
    ],
    "adcTarget": "TROP2",
    "adcPayload": "SN-38（トポイソメラーゼI阻害）",
    "priorAdcContext": "TOP1阻害薬／TOP1含有ADC既治療は除外（試験計画一次発表・実施施設の登録条件）。",
    "trial_registration": "NCT05382286",
    "publicationDate": "2026-01-21",
    "publicationYear": 2026,
    "publicationDateType": "online_first",
    "resultDate": "2026-01-21",
    "resultDateLabel": "掲載報告の公表日（データカットオフとは区別）",
    "sources": [
      {
        "title": "ASCENT-04 / KEYNOTE-D19 掲載結果原著",
        "url": "https://www.nejm.org/doi/full/10.1056/NEJMoa2508959",
        "kind": "原著",
        "publicationDate": "2026-01-21"
      },
      {
        "title": "ASCENT-04 原著抄録",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41564397/",
        "kind": "原著"
      },
      {
        "title": "ASCENT-04 Trial in Progress 276TiP",
        "url": "https://www.annalsofoncology.org/article/S0923-7534%2822%2903711-5/fulltext",
        "kind": "試験計画一次発表"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "掲載結果は原著抄録で確認。全文・補足資料は未確認。",
      "sourceUrl": "https://www.nejm.org/doi/full/10.1056/NEJMoa2508959",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "caveat": "ペムブロリズマブを両群に併用する比較。SG単独の効果や、CPS<10への有効性を検証した試験ではない。",
    "checkedDate": "2026-10-06",
    "her2Expression": "HER2陰性（TNBC）。HER2-low限定選択ではない。",
    "japanApproval": "未評価",
    "regimenAgents": [
      "sacituzumab govitecan",
      "pembrolizumab",
      "paclitaxel",
      "nab-paclitaxel",
      "gemcitabine",
      "carboplatin"
    ],
    "primaryPublication": {
      "date": "2026-01-21",
      "precision": "day",
      "sourceUrl": "https://www.nejm.org/doi/full/10.1056/NEJMoa2508959",
      "sourceTitle": "ASCENT-04 / KEYNOTE-D19 掲載結果原著",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "ascent-07",
    "name": "ASCENT-07",
    "phase": "III",
    "design": "無作為化・非盲検（2:1）",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "手術不能局所進行／再発または転移性乳癌",
    "lineBuckets": [
      "endocrine_pretreated",
      "firstline"
    ],
    "population": "内分泌療法後、進行期の初回化学療法候補となるHR陽性／HER2陰性（IHC 0、1+、2+/ISH−）690例。進行期化学療法未治療。",
    "cardPopulation": "内分泌療法後、進行期の初回化学療法候補となるHR陽性／HER2陰性（IHC 0、1+、2+/ISH−）690例。進行期化学療法未治療。",
    "experimental": "sacituzumab govitecan (SG)",
    "control": "カペシタビン、nab-パクリタキセル、またはパクリタキセル",
    "primaryEndpoint": "BICR-PFS",
    "result": "主要評価項目は未達。PFS中央値8.3対8.3か月、HR 0.85（95% CI 0.69–1.05）、P=0.130。OSは未成熟。",
    "safety": "Grade≥3 TEAE 72%対48%。TEAEによる中止3%対7%。",
    "agents": [
      "sacituzumab govitecan"
    ],
    "drugClasses": [
      "ADC"
    ],
    "adcTarget": "TROP2",
    "adcPayload": "SN-38（トポイソメラーゼI阻害）",
    "priorAdcContext": "TOP1を標的とする化学療法／ADCおよびTROP2-ADC既治療を除外（スポンサー試験計画）。",
    "trial_registration": "NCT05840211",
    "publicationDate": "2026-02-17",
    "publicationYear": 2026,
    "publicationDateType": "conference_abstract",
    "resultDate": "2025-09-15",
    "resultDateLabel": "SABCS 2025主要PFS解析のデータカットオフ",
    "sources": [
      {
        "title": "ASCENT-07 学会一次抄録",
        "url": "https://aacrjournals.org/clincancerres/article/32/4_Supplement/GS1-09/772427/Abstract-GS1-09-Sacituzumab-govitecan-vs",
        "kind": "学会一次抄録",
        "publicationDate": "2026-02-17"
      },
      {
        "title": "Gilead ASCENT-07 結果公表・OS追跡継続",
        "url": "https://www.gilead.com/news/news-details/2025/gilead-provides-update-on-phase-3-ascent-07-study",
        "kind": "スポンサー一次発表",
        "publicationDate": "2025-11-07"
      },
      {
        "title": "ASCENT-07 試験計画・ADC除外基準",
        "url": "https://www.gileadkiteoncology.com/ash23/pdf/US/ASCENT-07.pdf",
        "kind": "スポンサー試験計画"
      }
    ],
    "articleEvidence": {
      "status": "conference_only",
      "label": "原著論文未確認（学会発表ベース）",
      "note": "学会一次抄録による。結果の査読原著本文は未確認。",
      "sourceUrl": "https://aacrjournals.org/clincancerres/article/32/4_Supplement/GS1-09/772427/Abstract-GS1-09-Sacituzumab-govitecan-vs",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "caveat": "SABCS 2025一次発表。探索的／名目的なOS・治験医PFSの所見を、陰性の主要BICR-PFSの代わりに採用しない。",
    "checkedDate": "2026-10-06",
    "status": "主要PFS結果報告済み・OS追跡継続",
    "her2Expression": "HER2陰性：IHC0、1+、2+/ISH−。",
    "japanApproval": "未評価",
    "regimenAgents": [
      "sacituzumab govitecan",
      "capecitabine",
      "nab-paclitaxel",
      "paclitaxel"
    ],
    "primaryPublication": {
      "date": "2026-02-17",
      "precision": "day",
      "sourceUrl": "https://aacrjournals.org/clincancerres/article/32/4_Supplement/GS1-09/772427/Abstract-GS1-09-Sacituzumab-govitecan-vs",
      "sourceType": "conference_abstract",
      "note": "主要結果の正式学会抄録／発表資料の公表日。企業の先行トップライン発表日と区別。"
    },
    "reports": []
  },
  {
    "id": "ever-132-002",
    "name": "EVER-132-002",
    "phase": "III",
    "design": "無作為化・非盲検",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "手術不能局所進行／再発または転移性乳癌",
    "lineBuckets": [
      "endocrine_pretreated",
      "chemo_pretreated"
    ],
    "population": "中国本土・韓国・台湾のHR陽性／HER2陰性（IHC0、1+、2+/ISH−）331例。進行期化学療法2–4レジメン既治療、タキサン・内分泌療法歴あり。CDK4/6阻害薬歴は必須でない。",
    "cardPopulation": "中国本土・韓国・台湾のHR陽性／HER2陰性（IHC0、1+、2+/ISH−）331例。進行期化学療法2–4レジメン既治療、タキサン・内分泌療法歴あり。CDK4/6阻害薬歴は必須でない。",
    "experimental": "sacituzumab govitecan (SG)",
    "control": "エリブリン、カペシタビン、ゲムシタビン、ビノレルビン",
    "primaryEndpoint": "BICR-PFS",
    "result": "PFS中央値4.3対4.2か月、HR 0.67（95% CI 0.52–0.87）、P=0.0028。OS中央値21.0対15.3か月、HR 0.64（0.47–0.88）、P=0.0061（副次評価）。",
    "safety": "主なGrade≥3 TEAE：好中球減少69%対62%、白血球減少42%対37%、貧血18%対6%。",
    "agents": [
      "sacituzumab govitecan"
    ],
    "drugClasses": [
      "ADC"
    ],
    "adcTarget": "TROP2",
    "adcPayload": "SN-38（トポイソメラーゼI阻害）",
    "priorAdcContext": "TOP1阻害薬既治療を除外。既治療ADC後の治療順序の試験ではない。",
    "trial_registration": "NCT04639986",
    "publicationDate": "2024-10-01",
    "publicationYear": 2024,
    "publicationDateType": "online_first",
    "resultDate": "2023-04-30",
    "resultDateLabel": "主要解析データカットオフ",
    "sources": [
      {
        "title": "EVER-132-002 掲載結果原著",
        "url": "https://www.nature.com/articles/s41591-024-03269-z",
        "kind": "原著",
        "publicationDate": "2024-10-01"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "掲載結果に対応する原著の本文・方法・安全性を確認。",
      "sourceUrl": "https://www.nature.com/articles/s41591-024-03269-z",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "caveat": "正式な仮説検定は主要PFSのみ。アジア集団の試験で、日本人試験とは別。中央値だけで効果を判断しない。",
    "checkedDate": "2026-10-06",
    "her2Expression": "HER2陰性：IHC0、1+、2+/ISH−。",
    "japanApproval": "未評価",
    "regimenAgents": [
      "sacituzumab govitecan",
      "eribulin",
      "capecitabine",
      "gemcitabine",
      "vinorelbine"
    ],
    "primaryPublication": {
      "date": "2024-10-01",
      "precision": "day",
      "sourceUrl": "https://www.nature.com/articles/s41591-024-03269-z",
      "sourceTitle": "EVER-132-002 掲載結果原著",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "ascent-j02",
    "name": "ASCENT-J02（日本人乳癌コホート）",
    "phase": "I/II",
    "design": "単群・非盲検",
    "setting": "metastatic",
    "subtypes": [
      "TNBC",
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "手術不能局所進行／再発または転移性乳癌",
    "lineBuckets": [
      "endocrine_pretreated",
      "chemo_pretreated"
    ],
    "population": "日本人の非盲検ブリッジング試験。掲載は別々の第II相TNBC 36例／HR陽性HER2陰性42例。各コホートに複数化学療法歴。HR陽性ではタキサン・内分泌療法・CDK4/6阻害薬歴が必要。",
    "cardPopulation": "日本人の非盲検ブリッジング試験。掲載は別々の第II相TNBC 36例／HR陽性HER2陰性42例。各コホートに複数化学療法歴。HR陽性ではタキサン・内分泌療法・CDK4/6阻害薬歴が必要。",
    "experimental": "sacituzumab govitecan (SG)",
    "control": "なし（単群・別コホート）",
    "primaryEndpoint": "各第II相コホートのIRC-ORR",
    "result": "TNBC：ORR25.0%、PFS5.6か月。HR+/HER2−：ORR16.7%（95% CI 7.0–31.4）、P=0.1214で主要ORR基準未達、PFS4.4か月、OS13.0か月。",
    "safety": "TNBC：Grade≥3 TEAE72%、好中球減少58%。HR+/HER2−：Grade≥3 TEAE83%、好中球減少による中止1例、TEAE関連死0例。",
    "agents": [
      "sacituzumab govitecan"
    ],
    "drugClasses": [
      "ADC"
    ],
    "adcTarget": "TROP2",
    "adcPayload": "SN-38（トポイソメラーゼI阻害）",
    "priorAdcContext": "今回確認した本文に基づくADC既治療別の効果は示さない。TOP1-ADC逐次投与の検証とみなさない。",
    "trial_registration": "NCT05101096 / jRCT2031210346",
    "publicationDate": "2026-03-27",
    "publicationYear": 2026,
    "publicationDateType": "online_first",
    "resultDate": "2026-03-27",
    "resultDateLabel": "掲載報告の公表日（データカットオフとは区別）",
    "sources": [
      {
        "title": "Shimomura et al. HR+/HER2−コホート",
        "url": "https://doi.org/10.1093/jjco/hyag043",
        "kind": "原著",
        "publicationDate": "2026-03-27"
      },
      {
        "title": "Naito et al. TNBCコホート",
        "url": "https://link.springer.com/article/10.1007/s10147-024-02589-x",
        "kind": "原著",
        "publicationDate": "2024-09-20"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "掲載結果に対応する原著の本文・方法・安全性を確認。 複数報告を併記しており、各数値の出典・確認状況は個別報告に対応。",
      "sourceUrl": "https://academic.oup.com/jjco/advance-article/doi/10.1093/jjco/hyag043/8540933",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "caveat": "単群の日本人小規模コホート。TNBCとHR+の結果・カットオフを混ぜない。HR+コホートの主要ORR評価は未達。国内承認の根拠表示とは独立。",
    "checkedDate": "2026-10-06",
    "her2Expression": "TNBCコホートはHER2陰性、HR陽性コホートはIHC0、1+、2+/ISH−。",
    "japanApproval": "未評価",
    "regimenAgents": [
      "sacituzumab govitecan"
    ],
    "primaryPublication": {
      "date": "2024-09-20",
      "precision": "day",
      "sourceUrl": "https://link.springer.com/article/10.1007/s10147-024-02589-x",
      "sourceTitle": "TNBC phase II primary",
      "sourceType": "original_paper",
      "note": "同一試験の初回主要結果原著（TNBC phase II primary）を基準に採用。主カードの追跡更新日・後続コホート報告日ではない。既存の検証済み書誌を再利用。"
    },
    "reports": [
      {
        "name": "TNBC phase II primary",
        "publicationDate": "2024-09-20",
        "dataCutoff": "2023-05-12",
        "population": "日本人・既治療TNBC 36例",
        "result": "IRC-ORR25.0%（95% CI 12.1–42.2）、PFS5.6か月。",
        "safety": "Grade≥3 TEAE72%。TEAEによる中止・死亡なし。",
        "articleEvidence": {
          "status": "full_text_checked",
          "label": "原著本文確認済み",
          "note": "掲載結果に対応する原著の本文・方法・安全性を確認。",
          "sourceUrl": "https://link.springer.com/article/10.1007/s10147-024-02589-x",
          "checkedDate": "2026-10-06"
        },
        "her2Expression": "TNBCコホートはHER2陰性、HR陽性コホートはIHC0、1+、2+/ISH−。",
        "japanApproval": "未評価",
        "id": "ascent-j02-report-1",
        "label": "TNBC phase II primary",
        "resultDate": "2023-05-12",
        "sourceUrl": "https://link.springer.com/article/10.1007/s10147-024-02589-x"
      },
      {
        "name": "HR+/HER2− phase II primary",
        "publicationDate": "2026-03-27",
        "dataCutoff": "2024-11-26",
        "population": "日本人・HR+/HER2−42例",
        "result": "IRC-ORR16.7%、主要評価未達（P=0.1214）。IRC-PFS4.4か月、OS13.0か月。",
        "safety": "Grade≥3 TEAE83%、TEAE中止1例（2%）、TEAEによる死亡なし。",
        "articleEvidence": {
          "status": "full_text_checked",
          "label": "原著本文確認済み",
          "note": "掲載結果に対応する原著の本文・方法・安全性を確認。",
          "sourceUrl": "https://academic.oup.com/jjco/advance-article/doi/10.1093/jjco/hyag043/8540933",
          "checkedDate": "2026-10-06"
        },
        "her2Expression": "TNBCコホートはHER2陰性、HR陽性コホートはIHC0、1+、2+/ISH−。",
        "japanApproval": "未評価",
        "id": "ascent-j02-report-2",
        "label": "HR+/HER2− phase II primary",
        "resultDate": "2024-11-26",
        "sourceUrl": "https://academic.oup.com/jjco/advance-article/doi/10.1093/jjco/hyag043/8540933"
      }
    ]
  },
  {
    "id": "saci-io-hr",
    "name": "SACI-IO HR+",
    "phase": "II",
    "design": "無作為化・非盲検",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "手術不能局所進行／再発または転移性乳癌",
    "lineBuckets": [
      "endocrine_pretreated",
      "firstline",
      "chemo_pretreated"
    ],
    "population": "内分泌療法既治療、進行期化学療法0–1レジメン後のHR陽性／HER2陰性104例。PD-L1による選択なし。",
    "cardPopulation": "内分泌療法既治療、進行期化学療法0–1レジメン後のHR陽性／HER2陰性104例。PD-L1による選択なし。",
    "experimental": "サシツズマブ ゴビテカン＋ペムブロリズマブ",
    "control": "sacituzumab govitecan (SG)",
    "primaryEndpoint": "PFS",
    "result": "PFS8.4対6.7か月、HR0.76（95% CI 0.48–1.19）、P=0.12で有意差なし。OS20.0対18.0か月（P=0.18）。",
    "safety": "主なGrade≥2 AEは好中球減少、脱毛、疲労、貧血、悪心、白血球減少、下痢。抄録にGrade≥3総率の記載なし。",
    "agents": [
      "sacituzumab govitecan"
    ],
    "drugClasses": [
      "ADC"
    ],
    "adcTarget": "TROP2",
    "adcPayload": "SN-38（トポイソメラーゼI阻害）",
    "priorAdcContext": "TOP1阻害薬既治療なし（原著抄録）。",
    "trial_registration": "NCT04448886",
    "publicationDate": "2026-06-20",
    "publicationYear": 2026,
    "publicationDateType": "online_first",
    "resultDate": "2026-06-20",
    "resultDateLabel": "掲載報告の公表日（データカットオフとは区別）",
    "sources": [
      {
        "title": "SACI-IO HR+ 掲載結果原著",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42323161/",
        "kind": "原著",
        "publicationDate": "2026-06-20"
      },
      {
        "title": "SACI-IO HR+ 原著DOI",
        "url": "https://doi.org/10.1016/j.annonc.2026.06.012",
        "kind": "原著"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "掲載結果は原著抄録で確認。全文・補足資料は未確認。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42323161/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "caveat": "PD-L1陽性サブグループの数値差は仮説生成。全体の陰性結果を置き換えない。",
    "checkedDate": "2026-10-06",
    "her2Expression": "HR陽性／HER2陰性。HER2-low限定選択ではない。",
    "japanApproval": "未評価",
    "regimenAgents": [
      "sacituzumab govitecan",
      "pembrolizumab"
    ],
    "primaryPublication": {
      "date": "2026-06-20",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42323161/",
      "sourceTitle": "SACI-IO HR+ 掲載結果原著",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "neostar",
    "name": "NeoSTAR（SG単剤A1）",
    "phase": "II",
    "design": "単群・非盲検",
    "setting": "early",
    "subtypes": [
      "TNBC"
    ],
    "stages": [
      "I",
      "II",
      "III"
    ],
    "timing": [
      "neoadjuvant"
    ],
    "stageLabel": "非転移・術前治療",
    "lineBuckets": [],
    "population": "未治療の局所TNBC（HER2陰性）50例。登録時臨床病期I期13例、II期26例、III期11例。",
    "cardPopulation": "未治療の局所TNBC（HER2陰性）50例。登録時臨床病期I期13例、II期26例、III期11例。",
    "experimental": "術前サシツズマブ ゴビテカン4サイクル、以後は反応に応じ追加治療／手術",
    "control": "なし（単群・反応適応型）",
    "primaryEndpoint": "SG単独後pCR（ypT0/isN0）",
    "result": "SG単独後pCR30%（15/50、95% CI 18–45%）。",
    "safety": "主な全Grade AE：悪心82%、疲労76%、脱毛76%、好中球減少44%。",
    "agents": [
      "sacituzumab govitecan"
    ],
    "drugClasses": [
      "ADC"
    ],
    "adcTarget": "TROP2",
    "adcPayload": "SN-38（トポイソメラーゼI阻害）",
    "priorAdcContext": "未治療早期乳癌。既治療ADC後の試験ではない。",
    "trial_registration": "NCT04230109",
    "publicationDate": "2023-12-12",
    "publicationYear": 2023,
    "publicationDateType": "online_first",
    "resultDate": "2023-12-12",
    "resultDateLabel": "掲載報告の公表日（データカットオフとは区別）",
    "sources": [
      {
        "title": "NeoSTAR（SG単剤A1） 掲載結果原著",
        "url": "https://pubmed.ncbi.nlm.nih.gov/38092228/",
        "kind": "原著",
        "publicationDate": "2023-12-12"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "掲載結果は原著抄録で確認。全文・補足資料は未確認。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/38092228/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "caveat": "探索的な単群試験。追加化学療法を含み得る長期EFSをSG単剤の効果と解釈しない。",
    "checkedDate": "2026-10-06",
    "relatedReports": [
      {
        "name": "NeoSTAR A2 SG＋pembrolizumab",
        "publicationDate": "2025-05-28",
        "sourceUrl": "https://ascopubs.org/doi/10.1200/JCO.2025.43.16_suppl.511",
        "articleEvidence": {
          "status": "conference_only",
          "label": "原著論文未確認（学会発表ベース）",
          "note": "学会一次抄録による。結果の査読原著本文は未確認。",
          "sourceUrl": "https://ascopubs.org/doi/10.1200/JCO.2025.43.16_suppl.511",
          "checkedDate": "2026-10-06"
        },
        "note": "ASCO 2025抄録のSG/P単独後pCRは16/50（34%）という内部不整合があり、主要カードの数値に採用しない。SG単剤A1とは別コホート。",
        "her2Expression": "HER2陰性（TNBC）。HER2-low限定選択ではない。",
        "japanApproval": "未評価"
      }
    ],
    "her2Expression": "HER2陰性（TNBC）。HER2-low限定選択ではない。",
    "japanApproval": "未評価",
    "regimenAgents": [
      "sacituzumab govitecan"
    ],
    "primaryPublication": {
      "date": "2023-12-12",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/38092228/",
      "sourceTitle": "NeoSTAR（SG単剤A1） 掲載結果原著",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "ever-132-001",
    "name": "EVER-132-001",
    "phase": "IIb",
    "design": "単群・非盲検",
    "setting": "metastatic",
    "subtypes": [
      "TNBC"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "手術不能局所進行／再発または転移性乳癌",
    "lineBuckets": [
      "chemo_pretreated"
    ],
    "population": "中国人転移性TNBC（HER2陰性）80例。2レジメン以上の化学療法後。",
    "cardPopulation": "中国人転移性TNBC（HER2陰性）80例。2レジメン以上の化学療法後。",
    "experimental": "sacituzumab govitecan (SG)",
    "control": "なし（単群）",
    "primaryEndpoint": "IRC-ORR",
    "result": "ORR38.8%（95% CI 28.06–50.30）、PFS中央値5.55か月。",
    "safety": "SG関連Grade≥3 TEAE71.3%、好中球数減少62.5%、白血球数減少48.8%、貧血21.3%。TEAEによる中止6.3%。",
    "agents": [
      "sacituzumab govitecan"
    ],
    "drugClasses": [
      "ADC"
    ],
    "adcTarget": "TROP2",
    "adcPayload": "SN-38（トポイソメラーゼI阻害）",
    "priorAdcContext": "抄録からADC前治療除外の詳細は未確認。既治療ADC後の効果を示す試験とみなさない。",
    "trial_registration": "NCT04454437",
    "publicationDate": "2023-01-30",
    "publicationYear": 2023,
    "publicationDateType": "online_first",
    "resultDate": "2021-08-06",
    "resultDateLabel": "初回報告データカットオフ",
    "sources": [
      {
        "title": "EVER-132-001 掲載結果原著",
        "url": "https://pubmed.ncbi.nlm.nih.gov/36621000/",
        "kind": "原著",
        "publicationDate": "2023-01-30"
      },
      {
        "title": "Xu et al. EVER-132-001 原著DOI",
        "url": "https://onlinelibrary.wiley.com/doi/full/10.1002/ijc.34424",
        "kind": "原著",
        "publicationDate": "2023-01-30"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "掲載結果は原著抄録で確認。全文・補足資料は未確認。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/36621000/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "caveat": "非比較の地域ブリッジング第IIb相。後年の学会OS更新と主解析を混在させない。",
    "checkedDate": "2026-10-06",
    "her2Expression": "HER2陰性（TNBC）。HER2-low限定選択ではない。",
    "japanApproval": "未評価",
    "regimenAgents": [
      "sacituzumab govitecan"
    ],
    "primaryPublication": {
      "date": "2023-01-30",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/36621000/",
      "sourceTitle": "EVER-132-001 掲載結果原著",
      "sourceType": "original_paper",
      "note": "初回主要ORR結果原著。PubMed Epub 2023 Jan 30および抄録のfirst reportを再確認。"
    },
    "reports": []
  },
  {
    "id": "tulip",
    "name": "TULIP",
    "agents": [
      "trastuzumab duocarmazine"
    ],
    "drugClasses": [
      "ADC"
    ],
    "phase": "III",
    "setting": "metastatic",
    "subtypes": [
      "HER2+"
    ],
    "stages": [],
    "timing": [],
    "lineBuckets": [
      "her2_pretreated",
      "chemo_pretreated"
    ],
    "japanApproval": "未評価",
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "aliases": [
      "T-Duo",
      "SYD985"
    ],
    "her2Expression": "HER2-positive",
    "design": "無作為化・非盲検（2:1）、437例",
    "population": "切除不能局所進行・転移性HER2陽性乳癌。進行病変への抗HER2療法2つ以上、またはT-DM1投与中／後に増悪。治療済み安定脳転移は許容。",
    "experimental": "trastuzumab duocarmazine 1.2 mg/kg、3週毎",
    "control": "医師選択：ラパチニブ＋カペシタビン、またはトラスツズマブ＋カペシタビン／ビノレルビン／エリブリン",
    "trial_registration": "NCT03262935",
    "primaryEndpoint": "BICRによるPFS",
    "secondaryEndpoints": "OS、ORR、奏効期間、安全性など",
    "priorAdcContext": "T-DM1歴あり約88%。T-DXd歴は各群6例／2例のみで、T-DXd後の有効性を確立しない。",
    "result": "PFS中央値7.0 vs 4.9か月（HR 0.64、95% CI 0.49–0.84、P=0.002）。初回OS解析20.4 vs 16.3か月（HR 0.83、P=0.153）で有意差なし。",
    "safety": "Grade ≥3 TEAE 52.8% vs 48.2%。T-DuoのGrade ≥3眼毒性21.2%、眼毒性による中止20.8%。ILD／肺臓炎にも注意。",
    "publicationYear": 2024,
    "publicationDate": "2024-10-23",
    "resultDate": "2021-03-31データロック、2024年オンライン原著（冊子2025年）",
    "sources": [
      {
        "title": "TULIP primary randomized phase III report",
        "url": "https://ascopubs.org/doi/10.1200/JCO.24.00529",
        "kind": "原著"
      },
      {
        "title": "TULIP published-paper PDF, University of Groningen repository",
        "url": "https://pure.rug.nl/ws/files/1286315803/turner-et-al-2024-trastuzumab-duocarmazine-in-pretreated-human-epidermal-growth-factor-receptor-2-positive-advanced-or.pdf",
        "kind": "原著本文PDF"
      },
      {
        "title": "TULIP registry",
        "url": "https://clinicaltrials.gov/study/NCT03262935",
        "kind": "試験登録"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "sourceUrl": "https://ascopubs.org/doi/10.1200/JCO.24.00529",
      "note": "掲載したPFS・初回OS・安全性を大学機関リポジトリの出版版原著PDFで確認。",
      "checkedDate": "2026-10-06"
    },
    "caveat": "PFS陽性でもOS有意差は未証明。眼毒性と中止率を併記し、T-DXd後の標準治療を示す試験と解釈しない。",
    "cardPopulation": "切除不能局所進行・転移性HER2陽性乳癌。進行病変への抗HER2療法2つ以上、またはT-DM1投与中／後に増悪。治療済み安定脳転移は許容。",
    "regimenAgents": [
      "trastuzumab duocarmazine",
      "trastuzumab",
      "lapatinib",
      "capecitabine",
      "vinorelbine",
      "eribulin"
    ],
    "primaryPublication": {
      "date": "2024-10-23",
      "precision": "day",
      "sourceUrl": "https://ascopubs.org/doi/10.1200/JCO.24.00529",
      "sourceTitle": "TULIP primary randomized phase III report",
      "sourceType": "original_paper",
      "note": "初回主要無作為化比較原著を採用。2023年最終OS学会抄録よりも、主要結果の2024年原著初回公表を優先。"
    },
    "reports": [
      {
        "id": "tulip-final-os-2023",
        "label": "最終OS（ESMO 2023、386MO）",
        "publicationDate": "2023-10",
        "resultDate": "2023年最終OS報告、追跡中央値35.6／32.0か月",
        "result": "OS中央値21.0 vs 19.5か月、HR 0.87（95% CI 0.68–1.12）、P=0.236。有意なOS改善は示されなかった。",
        "safety": "延長追跡で新規安全性シグナルなし（正式抄録）。",
        "articleEvidence": {
          "status": "conference_only",
          "label": "原著論文未確認（学会発表ベース）",
          "sourceUrl": "https://www.annalsofoncology.org/article/S0923-7534%2823%2901399-6/fulltext",
          "note": "ESMO 2023 386MO正式学会抄録。最終OS原著全文未確認。",
          "checkedDate": "2026-10-06"
        },
        "sourceUrl": "https://www.annalsofoncology.org/article/S0923-7534%2823%2901399-6/fulltext"
      }
    ]
  },
  {
    "id": "optitrop-breast01",
    "name": "OptiTROP-Breast01",
    "agents": [
      "sacituzumab tirumotecan"
    ],
    "drugClasses": [
      "ADC"
    ],
    "phase": "III",
    "setting": "metastatic",
    "subtypes": [
      "TNBC"
    ],
    "stages": [],
    "timing": [],
    "lineBuckets": [
      "chemo_pretreated"
    ],
    "japanApproval": "未評価",
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "aliases": [
      "sac-TMT",
      "SKB264",
      "MK-2870"
    ],
    "her2Expression": "HER2-low / HER2-zero",
    "design": "中国49施設、無作為化・非盲検（1:1）、263例",
    "population": "局所再発・転移性TNBC。2レジメン以上の既治療（少なくとも1つは進行病変への治療）、タキサン歴あり。術後／術前療法中または終了12か月以内の再発は既治療1つに算入可能。",
    "experimental": "sacituzumab tirumotecan 5 mg/kg、2週毎",
    "control": "医師選択の単剤化学療法：エリブリン、ビノレルビン、カペシタビン、ゲムシタビン",
    "trial_registration": "NCT05347134",
    "primaryEndpoint": "BICRによるPFS",
    "secondaryEndpoints": "OS、ORR、奏効期間、安全性など",
    "priorAdcContext": "登録基準でTROP2標的療法歴を除外。SG後や他ADC後の有効性を確立する試験ではない。",
    "result": "最終PFS中央値6.7 vs 2.5か月（HR 0.32、95% CI 0.24–0.44、P<0.00001）。同時点の中間OSは未到達 vs 9.4か月（HR 0.53、95% CI 0.36–0.78、P=0.0005）。",
    "safety": "Grade ≥3 TRAE 63.1% vs 56.8%。sac-TMTの主な重症毒性は好中球減少・貧血。Grade 2 ILD 1例、治療関連死亡1例が報告された。",
    "publicationYear": 2025,
    "publicationDate": "2025-04-11",
    "resultDate": "2023-11-30カットオフ（最終PFS・中間OS）",
    "sources": [
      {
        "title": "OptiTROP-Breast01 randomized phase III report",
        "url": "https://www.nature.com/articles/s41591-025-03630-w",
        "kind": "原著"
      },
      {
        "title": "Published original-paper PDF",
        "url": "https://makadu.live/packages/uploads/2025/04/Sacituzumab-tirumotecan.pdf",
        "kind": "原著本文PDF"
      },
      {
        "title": "OptiTROP-Breast01 registry",
        "url": "https://clinicaltrials.gov/study/NCT05347134",
        "kind": "試験登録"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "sourceUrl": "https://www.nature.com/articles/s41591-025-03630-w",
      "note": "出版版原著PDFで掲載結果・安全性を確認。適格条件の補足はClinicalTrials.gov API記録（2026-05-08更新）。",
      "checkedDate": "2026-10-06"
    },
    "caveat": "sacituzumab govitecan（SG）とは別薬剤。中国の比較試験であり、ADC同士の優劣・最適順序は不明。",
    "cardPopulation": "局所再発・転移性TNBC。2レジメン以上の既治療（少なくとも1つは進行病変への治療）、タキサン歴あり。術後／術前療法中または終了12か月以内の再発は既治療1つに算入可能。",
    "regimenAgents": [
      "sacituzumab tirumotecan",
      "eribulin",
      "vinorelbine",
      "capecitabine",
      "gemcitabine"
    ],
    "primaryPublication": {
      "date": "2025-04-11",
      "precision": "day",
      "sourceUrl": "https://www.nature.com/articles/s41591-025-03630-w",
      "sourceTitle": "OptiTROP-Breast01 randomized phase III report",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": [
      {
        "id": "optitrop-breast01-final-os-2026",
        "label": "最終OS解析（ESMO 2026・4639RO）",
        "publicationDate": "2026-10-26",
        "publicationDateType": "conference_presentation",
        "presentationDate": "2026-10-26",
        "resultDate": "2026-10-26",
        "resultDateLabel": "学会発表日（追跡期間中央値29.4か月時点の最終OS解析）",
        "population": "既治療の局所再発・転移性TNBC 263例（中国49施設、2レジメン以上の既治療）",
        "result": "最終OS中央値14.7 vs 9.9か月（HR 0.60、95% CI 0.45–0.80、P=0.0004）。30か月OS率26.8% vs 13.2%。中間解析で示されたOS利益（中間OS HR 0.53）が最終解析でも維持された。",
        "caveat": "最終OS解析は記述的解析であり、OSの統計学的有意性は事前規定の中間解析で確立済み。化学療法群の27.8%が後治療でADCを受けており、その調整後HRは0.55（95% CI 0.39–0.73）だが統計的調整に依存する参考値で、解釈の主軸は未調整のHR 0.60。中国単独の登録集団であり、日本人への外挿と国内承認状況はこの記録の範囲外。",
        "sourceUrl": "https://oncodaily.com/breast-oncology/optitrop-breast01-esmo26",
        "sources": [
          {
            "title": "ESMO Congress 2026 Abstract 4639RO: Final OS analysis of sacituzumab tirumotecan versus chemotherapy in previously treated locally recurrent or metastatic TNBC (Li M et al.)",
            "url": "https://oncodaily.com/breast-oncology/optitrop-breast01-esmo26",
            "kind": "学会発表（二次報道で数値を照合）"
          },
          {
            "title": "Pharmacy Times ESMO 2026 review (OptiTROP-Breast01 final OS, Abstract 4639RO)",
            "url": "https://www.pharmacytimes.com/view/ribociclib-survival-data-anchor-a-sobering-esmo-2026-for-breast-cancer",
            "kind": "学会発表（二次報道で数値を照合）"
          },
          {
            "title": "OptiTROP-Breast01 registry",
            "url": "https://clinicaltrials.gov/study/NCT05347134",
            "kind": "試験登録"
          }
        ],
        "articleEvidence": {
          "status": "conference_only",
          "label": "原著論文未確認（学会発表ベース）",
          "note": "ESMO 2026（Madrid、2026-10-26発表、Abstract 4639RO、発表者 Man Li）。主要数値はOncoDaily・Pharmacy Times・Clinical Trials Arenaの独立した報道で相互に一致を確認。Annals of Oncology同時掲載（Xu B、Yin Y、Fan Y et al.）があるが本文の直接確認はしていない。",
          "sourceUrl": "https://oncodaily.com/breast-oncology/optitrop-breast01-esmo26",
          "checkedDate": "2026-10-30"
        },
        "scopeEvidence": {
          "verifiedPhase": "III",
          "resultType": "interventional-results",
          "phaseSourceUrls": [
            "https://clinicaltrials.gov/study/NCT05347134",
            "https://www.nature.com/articles/s41591-025-03630-w"
          ],
          "resultSourceUrls": [
            "https://oncodaily.com/breast-oncology/optitrop-breast01-esmo26",
            "https://www.pharmacytimes.com/view/ribociclib-survival-data-anchor-a-sobering-esmo-2026-for-breast-cancer"
          ],
          "checkedAt": "2026-10-30"
        },
        "checkedDate": "2026-10-30"
      }
    ]
  },
  {
    "id": "icarus-breast01",
    "name": "ICARUS-BREAST01",
    "agents": [
      "patritumab deruxtecan"
    ],
    "drugClasses": [
      "ADC"
    ],
    "phase": "II",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "lineBuckets": [
      "endocrine_pretreated",
      "chemo_pretreated"
    ],
    "japanApproval": "未評価",
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "aliases": [
      "HER3-DXd",
      "U3-1402",
      "MK-1022"
    ],
    "her2Expression": "HER2-low / HER2-zero",
    "design": "フランス11施設、単群、99例",
    "population": "HR陽性／HER2陰性の切除不能局所進行・転移性乳癌。内分泌療法・CDK4/6阻害薬後に増悪し、転移病変への化学療法はちょうど1ライン。反復生検可能な病変を必要とした。",
    "experimental": "patritumab deruxtecan 5.6 mg/kg、3週毎",
    "control": "なし（単群）",
    "trial_registration": "NCT04965766",
    "primaryEndpoint": "治験担当医評価による確認ORR",
    "secondaryEndpoints": "PFS、奏効期間、OS、安全性・探索的バイオマーカー",
    "priorAdcContext": "ADC既治療を除外。ADC後の順序効果には外挿できない。",
    "result": "確認ORR 53.5%（90% CI 44.8–62.1）。PFS中央値9.2か月（95% CI 8.0–12.8）、OSは未成熟。",
    "safety": "主なTRAEは疲労、悪心、下痢、脱毛。独立判定で薬剤関連ILDは8/99例（8.1%、Grade 1–2のみ）。治療関連死亡なし。",
    "publicationYear": 2025,
    "publicationDate": "2025-09-04",
    "resultDate": "2024-04-16カットオフ、追跡中央値15.3か月",
    "sources": [
      {
        "title": "ICARUS-BREAST01 primary phase II report",
        "url": "https://www.nature.com/articles/s41591-025-03885-3",
        "kind": "原著本文"
      },
      {
        "title": "ICARUS-BREAST01 registry",
        "url": "https://clinicaltrials.gov/study/NCT04965766",
        "kind": "試験登録"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "sourceUrl": "https://www.nature.com/articles/s41591-025-03885-3",
      "note": "掲載結果・安全性に対応する原著本文を確認。",
      "checkedDate": "2026-10-06"
    },
    "caveat": "単群第II相で他ADCに対する優越性を示さない。HER3・ESR1などの探索的関連は治療選択バイオマーカーとして未検証。",
    "cardPopulation": "HR陽性／HER2陰性の切除不能局所進行・転移性乳癌。内分泌療法・CDK4/6阻害薬後に増悪し、転移病変への化学療法はちょうど1ライン。反復生検可能な病変を必要とした。",
    "regimenAgents": [
      "patritumab deruxtecan"
    ],
    "primaryPublication": {
      "date": "2025-09-04",
      "precision": "day",
      "sourceUrl": "https://www.nature.com/articles/s41591-025-03885-3",
      "sourceTitle": "ICARUS-BREAST01 primary phase II report",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "ace-breast-02",
    "name": "ACE-Breast-02",
    "agents": [
      "ARX788"
    ],
    "drugClasses": [
      "ADC"
    ],
    "phase": "III",
    "setting": "metastatic",
    "subtypes": [
      "HER2+"
    ],
    "stages": [],
    "timing": [],
    "lineBuckets": [
      "her2_pretreated",
      "chemo_pretreated"
    ],
    "japanApproval": "未評価",
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "her2Expression": "HER2-positive",
    "design": "中国83施設、無作為化・非盲検（1:1）、441例",
    "population": "HER2陽性の切除不能局所進行・再発／転移性乳癌。トラスツズマブ・タキサン既治療。進行病変へのトラスツズマブ治療後増悪、または術前／術後療法中・終了12か月以内の再発。",
    "experimental": "ARX788 1.5 mg/kg、3週毎",
    "control": "ラパチニブ＋カペシタビン",
    "trial_registration": "CTR20201708",
    "registryUrl": null,
    "registrationNote": "中国登録番号は正式ASCO 2024抄録1020で確認。NCT番号ではない。",
    "primaryEndpoint": "BICRによるPFS",
    "secondaryEndpoints": "OS、ORR、奏効期間、安全性など",
    "priorAdcContext": "T-DM1または他のHER2標的ADC既治療を除外。",
    "result": "第2中間解析：PFS中央値11.3 vs 8.2か月（HR 0.64、95% CI 0.49–0.82、P=0.0006）。OS中央値は両群未到達。",
    "safety": "Grade ≥3 TRAE 41.4% vs 40.0%。ARX788の眼毒性とILDに注意。全Grade ILD 32.7%、Grade ≥3 ILD 5.9%。治療関連死亡6例（2.7%）。",
    "publicationYear": 2025,
    "publicationDate": "2025-02-17",
    "resultDate": "2022-12-21カットオフ、追跡中央値11.1か月",
    "sources": [
      {
        "title": "ACE-Breast-02 primary phase III report",
        "url": "https://www.nature.com/articles/s41392-025-02149-3",
        "kind": "原著本文"
      },
      {
        "title": "ACE-Breast-02 formal ASCO abstract 1020",
        "url": "https://ascopubs.org/doi/10.1200/JCO.2024.42.16_suppl.1020",
        "kind": "正式学会抄録・登録番号"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "sourceUrl": "https://www.nature.com/articles/s41392-025-02149-3",
      "note": "掲載結果・安全性に対応する原著本文を確認。",
      "checkedDate": "2026-10-06"
    },
    "caveat": "T-DXdとの比較なし。前治療にHER2 ADCを含まないため、T-DXd後の治療成績とは扱わない。",
    "cardPopulation": "HER2陽性の切除不能局所進行・再発／転移性乳癌。トラスツズマブ・タキサン既治療。進行病変へのトラスツズマブ治療後増悪、または術前／術後療法中・終了12か月以内の再発。",
    "regimenAgents": [
      "ARX788",
      "lapatinib",
      "capecitabine"
    ],
    "primaryPublication": {
      "date": "2025-02-17",
      "precision": "day",
      "sourceUrl": "https://www.nature.com/articles/s41392-025-02149-3",
      "sourceTitle": "ACE-Breast-02 primary phase III report",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "rc48-c006",
    "name": "RC48-C006（第III相部分）",
    "agents": [
      "disitamab vedotin"
    ],
    "drugClasses": [
      "ADC"
    ],
    "phase": "II/III",
    "setting": "metastatic",
    "subtypes": [
      "HER2+"
    ],
    "stages": [],
    "timing": [],
    "lineBuckets": [
      "her2_pretreated",
      "chemo_pretreated"
    ],
    "japanApproval": "未評価",
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "aliases": [
      "RC48",
      "DV"
    ],
    "her2Expression": "HER2-positive",
    "design": "中国、無作為化・非盲検（1:1）、第III相104例",
    "population": "HER2陽性乳癌の肝転移を有する患者に限定。トラスツズマブ・タキサン既治療、再発／転移後化学療法2ライン以下。脳転移は第III相報告の除外条件。",
    "experimental": "disitamab vedotin 2.0 mg/kg、2週毎（中国で用いた用量算定）",
    "control": "ラパチニブ＋カペシタビン",
    "trial_registration": "NCT03500380",
    "primaryEndpoint": "BIRCによるPFS",
    "secondaryEndpoints": "OS、ORR、奏効期間、安全性など",
    "priorAdcContext": "登録基準でT-DM1および同系統薬の臨床試験参加歴を除外。ADC後の効果を示す試験ではない。",
    "result": "PFS中央値9.9 vs 4.9か月（HR 0.56、95.48% CI 0.35–0.91、P=0.01）。OS未成熟（HR 0.56、95% CI 0.25–1.29）。",
    "safety": "Grade ≥3 TRAE 37.7% vs 36.0%。肝酵素上昇、血球減少、末梢神経障害が中心。",
    "publicationYear": 2026,
    "publicationDate": "2026-08-27",
    "resultDate": "2023-12-31カットオフ、第III相最終PFS解析",
    "sources": [
      {
        "title": "RC48-C006 phase III primary report",
        "url": "https://www.nature.com/articles/s41467-026-75733-y",
        "kind": "原著本文"
      },
      {
        "title": "RC48-C006 registry",
        "url": "https://clinicaltrials.gov/study/NCT03500380",
        "kind": "試験登録"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "sourceUrl": "https://www.nature.com/articles/s41467-026-75733-y",
      "note": "掲載結果・安全性に対応する原著本文を確認。",
      "checkedDate": "2026-10-06"
    },
    "caveat": "肝転移患者だけの小規模試験。第II相全集団と混在させない。OSはクロスオーバーの影響もあり、PFS優越性からOS改善を推測しない。",
    "cardPopulation": "HER2陽性乳癌の肝転移を有する患者に限定。トラスツズマブ・タキサン既治療、再発／転移後化学療法2ライン以下。脳転移は第III相報告の除外条件。",
    "regimenAgents": [
      "disitamab vedotin",
      "lapatinib",
      "capecitabine"
    ],
    "primaryPublication": {
      "date": "2026-08-27",
      "precision": "day",
      "sourceUrl": "https://www.nature.com/articles/s41467-026-75733-y",
      "sourceTitle": "RC48-C006 phase III primary report",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "horizon-breast01",
    "name": "HORIZON-Breast01",
    "agents": [
      "trastuzumab rezetecan"
    ],
    "drugClasses": [
      "ADC"
    ],
    "phase": "III",
    "setting": "metastatic",
    "subtypes": [
      "HER2+"
    ],
    "stages": [],
    "timing": [],
    "lineBuckets": [
      "her2_pretreated",
      "chemo_pretreated"
    ],
    "japanApproval": "未評価",
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "aliases": [
      "SHR-A1811"
    ],
    "her2Expression": "HER2-positive",
    "design": "中国50施設、無作為化・非盲検（1:1）。掲載mITT1は287例",
    "population": "HER2陽性の切除不能・転移性乳癌。進行期にトラスツズマブ＋タキサン既治療、または同薬系の術前／術後療法後12か月以内に増悪。ECOG PS 0–1。",
    "experimental": "trastuzumab rezetecan 4.8 mg/kg、3週毎（掲載主要解析）",
    "control": "ピロチニブ＋カペシタビン",
    "trial_registration": "NCT05424835",
    "primaryEndpoint": "mITT1におけるBICRによるPFS",
    "secondaryEndpoints": "OS、ORR、安全性など（登録情報）",
    "priorAdcContext": "確認した原著抄録と公開登録基準ではADC既治療の明確な取扱いを確認できず。ADC後の有効性を主張しない。",
    "result": "PFS中央値30.6 vs 8.3か月（HR 0.22、95% CI 0.15–0.34、P<0.0001）。4.8 mg/kg群142例と対照145例の事前規定中間解析。",
    "safety": "Grade ≥3の好中球数減少54% vs 9%。重篤TRAE 13% vs 12%。rezetecan群のILD 4例（3%）。",
    "publicationYear": 2026,
    "publicationDate": "2026-07-01",
    "resultDate": "2025-06-30カットオフ、追跡中央値15.0／13.9か月",
    "sources": [
      {
        "title": "HORIZON-Breast01 primary interim report",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42385760/",
        "kind": "原著抄録"
      },
      {
        "title": "Lancet Oncology primary article",
        "url": "https://doi.org/10.1016/S1470-2045(26)00193-2",
        "kind": "原著"
      },
      {
        "title": "HORIZON-Breast01 registry",
        "url": "https://clinicaltrials.gov/study/NCT05424835",
        "kind": "試験登録"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42385760/",
      "note": "掲載結果と安全性は原著抄録または正式学会抄録の範囲で確認。全文は未確認。",
      "checkedDate": "2026-10-06"
    },
    "caveat": "一時的に6.4 mg/kgへ変更した期間あり。掲載結果は4.8 mg/kgのmITT1に限定し、全投与量集団の成績としない。T-DXdとの比較なし。",
    "cardPopulation": "HER2陽性の切除不能・転移性乳癌。進行期にトラスツズマブ＋タキサン既治療、または同薬系の術前／術後療法後12か月以内に増悪。ECOG PS 0–1。",
    "regimenAgents": [
      "trastuzumab rezetecan",
      "pyrotinib",
      "capecitabine"
    ],
    "primaryPublication": {
      "date": "2026-07-01",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42385760/",
      "sourceTitle": "HORIZON-Breast01 primary interim report",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "kl166-iii-06",
    "name": "KL166-III-06",
    "agents": [
      "trastuzumab botidotin",
      "T-DM1"
    ],
    "drugClasses": [
      "ADC"
    ],
    "phase": "III",
    "setting": "metastatic",
    "subtypes": [
      "HER2+"
    ],
    "stages": [],
    "timing": [],
    "lineBuckets": [
      "her2_pretreated",
      "chemo_pretreated"
    ],
    "japanApproval": "未評価",
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "aliases": [
      "A166",
      "T-DM1"
    ],
    "her2Expression": "HER2-positive",
    "design": "中国57施設、無作為化・非盲検（1:1）、365例",
    "population": "トラスツズマブ・タキサン既治療のHER2陽性切除不能／転移性乳癌。",
    "experimental": "trastuzumab botidotin（A166）4.8 mg/kg、3週毎",
    "control": "T-DM1 3.6 mg/kg、3週毎",
    "trial_registration": "NCT06968585",
    "primaryEndpoint": "ITT集団のBICRによるPFS",
    "secondaryEndpoints": "OS、ORR、安全性など",
    "priorAdcContext": "登録基準ではA166または微小管阻害薬ペイロードを有するHER2標的ADC既治療を除外。「すべてのADC歴を除外」とは記載しない。",
    "result": "最終PFS中央値11.1 vs 4.4か月（HR 0.39、95% CI 0.30–0.51、名目P<0.0001）。OS未成熟（HR 0.62、95% CI 0.38–1.03）。",
    "safety": "Grade ≥3 TEAE 69.8% vs 63.7%。botidotinの眼関連TRAEが高頻度。",
    "publicationYear": 2026,
    "publicationDate": "2026-09-11",
    "resultDate": "2026年最終PFS原著、追跡中央値14.9か月（カットオフ日を抄録では確認できず）",
    "sources": [
      {
        "title": "Trastuzumab botidotin vs T-DM1 primary phase III report",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42727044/",
        "kind": "原著抄録"
      },
      {
        "title": "JCO primary article",
        "url": "https://ascopubs.org/doi/10.1200/JCO-26-00602",
        "kind": "原著"
      },
      {
        "title": "KL166-III-06 registry",
        "url": "https://clinicaltrials.gov/study/NCT06968585",
        "kind": "試験登録"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42727044/",
      "note": "掲載結果と安全性は原著抄録または正式学会抄録の範囲で確認。全文は未確認。",
      "checkedDate": "2026-10-06"
    },
    "caveat": "OS改善は未確立。T-DM1が比較対象であり、T-DXdとの直接比較ではない。登録番号は原著でNCT06968585を明示。",
    "cardPopulation": "トラスツズマブ・タキサン既治療のHER2陽性切除不能／転移性乳癌。",
    "regimenAgents": [
      "trastuzumab botidotin",
      "T-DM1"
    ],
    "primaryPublication": {
      "date": "2026-09-11",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42727044/",
      "sourceTitle": "Trastuzumab botidotin vs T-DM1 primary phase III report",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "optitrop-breast02",
    "name": "OptiTROP-Breast02",
    "agents": [
      "sacituzumab tirumotecan"
    ],
    "drugClasses": [
      "ADC"
    ],
    "phase": "III",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "lineBuckets": [
      "endocrine_pretreated",
      "chemo_pretreated"
    ],
    "japanApproval": "未評価",
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "aliases": [
      "sac-TMT",
      "SKB264",
      "MK-2870"
    ],
    "her2Expression": "HER2-low / HER2-zero",
    "design": "無作為化（1:1）、399例",
    "population": "HR陽性／HER2陰性の局所進行・転移性乳癌。CDK4/6阻害薬で増悪、進行／転移性病変への化学療法1ライン以上。",
    "experimental": "sacituzumab tirumotecan 5 mg/kg、2週毎",
    "control": "医師選択単剤化学療法：エリブリン、ビノレルビン、カペシタビン、ゲムシタビン",
    "trial_registration": "NCT06081959",
    "primaryEndpoint": "BICRによるPFS",
    "secondaryEndpoints": "OS、ORR、安全性など",
    "priorAdcContext": "登録基準でTROP2標的療法およびトポイソメラーゼI阻害薬（ADC含む）の既治療を除外。",
    "result": "ESMO 2025 LBA23：PFS中央値8.3 vs 4.1か月（HR 0.35、95% CI 0.26–0.48、P<0.0001）。ORR 41.5% vs 24.1%。OS未成熟。",
    "safety": "Grade ≥3 TRAE 62.0% vs 64.8%。主に好中球・白血球数減少。肺臓炎1.5% vs 1.0%（すべてGrade 1–2）。",
    "publicationYear": 2025,
    "publicationDate": "2025-09",
    "resultDate": "2025-01-22カットオフ、OS追跡中央値7.4か月",
    "sources": [
      {
        "title": "OptiTROP-Breast02 formal ESMO LBA23 abstract",
        "url": "https://www.annalsofoncology.org/article/S0923-7534%2825%2904803-3/abstract",
        "kind": "正式学会抄録"
      },
      {
        "title": "ESMO LBA23 official abstract PDF",
        "url": "https://s3.eu-central-1.amazonaws.com/m-anage.com.storage.esmo/static/esmo2025_abstracts/LBA23.html.pdf",
        "kind": "正式学会抄録PDF"
      },
      {
        "title": "OptiTROP-Breast02 registry",
        "url": "https://clinicaltrials.gov/study/NCT06081959",
        "kind": "試験登録"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "sourceUrl": "https://www.annalsofoncology.org/article/S0923-7534%2825%2904803-3/abstract",
      "note": "掲載結果と安全性は原著抄録または正式学会抄録の範囲で確認。全文は未確認。",
      "checkedDate": "2026-10-06"
    },
    "caveat": "原著全文は未確認。OS未成熟の初期結果を生存延長の確証としない。SGのTROPiCS-02とは別試験・別薬剤。",
    "cardPopulation": "HR陽性／HER2陰性の局所進行・転移性乳癌。CDK4/6阻害薬で増悪、進行／転移性病変への化学療法1ライン以上。",
    "regimenAgents": [
      "sacituzumab tirumotecan",
      "eribulin",
      "vinorelbine",
      "capecitabine",
      "gemcitabine"
    ],
    "primaryPublication": {
      "date": "2025-09",
      "precision": "month",
      "sourceUrl": "https://www.annalsofoncology.org/article/S0923-7534%2825%2904803-3/abstract",
      "sourceTitle": "OptiTROP-Breast02 formal ESMO LBA23 abstract",
      "sourceType": "conference_abstract",
      "note": "原著の主要結果論文は未確認。既存監査で検証した初回主要結果の正式学会抄録公表日を採用。プロトコル日ではない。"
    },
    "reports": []
  },
  {
    "id": "fascinate-n-her2",
    "name": "FASCINATE-N（HER2陽性コホート）",
    "agents": [
      "trastuzumab rezetecan"
    ],
    "drugClasses": [
      "ADC"
    ],
    "phase": "II",
    "setting": "early",
    "subtypes": [
      "HER2+"
    ],
    "stages": [
      "II",
      "III"
    ],
    "timing": [
      "neoadjuvant"
    ],
    "lineBuckets": [],
    "japanApproval": "未評価",
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "aliases": [
      "SHR-A1811"
    ],
    "her2Expression": "HER2-positive",
    "design": "単施設・無作為化・非盲検（1:1:1）、265例",
    "population": "未治療の病期II–III HER2陽性乳癌。HR陽性・陰性を含む。登録基準上はcT1–4N1–3M0またはcT2–4N0M0。",
    "experimental": "SHR-A1811単剤、またはSHR-A1811＋ピロチニブを24週間",
    "control": "nab-パクリタキセル＋カルボプラチン＋トラスツズマブ＋ペルツズマブ（PCbHP）",
    "trial_registration": "NCT05582499",
    "primaryEndpoint": "pCR（主表示はypT0/Tis ypN0）",
    "secondaryEndpoints": "iDFS、ORR、安全性",
    "priorAdcContext": "術前未治療集団。登録基準で既往の細胞傷害性化学療法・内分泌療法・生物学的療法を除外。",
    "result": "pCRはSHR-A1811単剤63.2%、併用62.5%、PCbHP 64.4%。群間に有意差なし。pCR改善のシグナルがなく、Bayesianモニタリング後に登録終了。",
    "safety": "Grade ≥3 TRAEは単剤44.8%、併用71.6%、PCbHP 38.8%。単剤にGrade 2 ILD 1例。治療関連死亡なし。",
    "publicationYear": 2025,
    "publicationDate": "2025-03-04",
    "resultDate": "2025年原著。登録期間2022-12-27～2024-02-11",
    "sources": [
      {
        "title": "FASCINATE-N HER2-positive cohort original report",
        "url": "https://pubmed.ncbi.nlm.nih.gov/40049447/",
        "kind": "原著抄録"
      },
      {
        "title": "Annals of Oncology primary article",
        "url": "https://www.annalsofoncology.org/article/S0923-7534%2825%2900082-1/fulltext",
        "kind": "原著・公開検索索引の本文抜粋"
      },
      {
        "title": "FASCINATE-N umbrella registry",
        "url": "https://clinicaltrials.gov/study/NCT05582499",
        "kind": "試験登録"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/40049447/",
      "note": "主結果・安全性は原著抄録で確認。登録終了理由とpCR定義は公式原著の公開検索索引本文、TNMは登録基準で補足。全文未確認。",
      "checkedDate": "2026-10-06"
    },
    "stageLabel": "原著抄録は病期II–III。TNMの補足はFASCINATE-Nアンブレラ登録基準。",
    "caveat": "有意差なしは同等性・非劣性の証明ではない。pCR比較から長期生存や標準術前療法置換の妥当性は判断できない。",
    "cardPopulation": "未治療の病期II–III HER2陽性乳癌。HR陽性・陰性を含む。登録基準上はcT1–4N1–3M0またはcT2–4N0M0。",
    "regimenAgents": [
      "trastuzumab rezetecan",
      "pyrotinib",
      "nab-paclitaxel",
      "carboplatin",
      "trastuzumab",
      "pertuzumab"
    ],
    "primaryPublication": {
      "date": "2025-03-04",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/40049447/",
      "sourceTitle": "FASCINATE-N HER2-positive cohort original report",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "pada-1",
    "name": "PADA-1",
    "phase": "III",
    "design": "無作為化・非盲検",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行または転移性乳癌",
    "lineBuckets": [
      "firstline"
    ],
    "population": "一次AI＋パルボシクリブ中にctDNA ESR1変異が出現・増加し、同時の画像進行がない女性172例を無作為化（監視集団1017例）。",
    "cardPopulation": "一次AI＋パルボシクリブ中にctDNA ESR1変異が出現・増加し、同時の画像進行がない女性172例を無作為化（監視集団1017例）。",
    "experimental": "AIをフルベストラントへ変更＋同じパルボシクリブ継続",
    "control": "AI＋パルボシクリブを継続",
    "primaryEndpoint": "無作為化後PFS、全監視集団のgrade ≥3血液毒性",
    "result": "PFS 11.9対5.7か月、HR 0.61（95% CI 0.43–0.86）、P=0.0040。",
    "safety": "無作為化後grade ≥3好中球減少44.3%対41.7%。監視期間を含む全体に治療関連肺塞栓死亡1例。",
    "caveat": "画像進行前のESR1検出に基づく早期変更。CDK4/6阻害薬後の二次療法試験、あるいは経口SERD試験ではない。",
    "agents": [
      "fulvestrant"
    ],
    "drugClasses": [
      "SERD"
    ],
    "regimenType": "ctdna_guided_switch",
    "priorCdk46Context": "全例一次AI＋パルボシクリブ投与中。画像進行なく同薬を継続。",
    "esr1Context": "血中ESR1変異の新規出現・増加が無作為化条件。",
    "biomarkers": [
      "血中ESR1変異の新規出現・増加が無作為化条件。"
    ],
    "trial_registration": "NCT03079011",
    "publicationDate": "2022-09-29",
    "publicationYear": 2022,
    "resultDate": "2022-09-29",
    "resultDateLabel": "掲載解析の公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Switch to fulvestrant and palbociclib versus no switch in advanced breast cancer with rising ESR1 mutation during aromatase inhibitor and palbociclib therapy (PADA-1): a randomised, open-label, multicentre, phase 3 trial.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/36183733/",
        "kind": "原著・抄録確認"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/36183733/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "positive",
    "lineLabel": "進行期一次療法／一次治療中変更",
    "publicationDateType": "reported_publication_date",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/36183733/",
      "checkedDate": "2026-10-06"
    },
    "regimenAgents": [
      "fulvestrant",
      "palbociclib",
      "letrozole",
      "anastrozole",
      "exemestane"
    ],
    "primaryPublication": {
      "date": "2022-09-29",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/36183733/",
      "sourceTitle": "Switch to fulvestrant and palbociclib versus no switch in advanced breast cancer with rising ESR1 mutation during aromatase inhibitor and palbociclib therapy (PADA-1): a randomised, open-label, multicentre, phase 3 trial.",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "ember-3",
    "name": "EMBER-3",
    "phase": "III",
    "design": "無作為化・非盲検",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行または転移性乳癌",
    "lineBuckets": [
      "endocrine_pretreated"
    ],
    "population": "ER陽性/HER2陰性進行乳癌874例。AI単独またはAI＋CDK4/6阻害薬中・後の再発／増悪。",
    "cardPopulation": "ER陽性/HER2陰性進行乳癌874例。AI単独またはAI＋CDK4/6阻害薬中・後の再発／増悪。",
    "experimental": "イムルネストラント単剤、またはイムルネストラント＋アベマシクリブ",
    "control": "標準内分泌単剤（フルベストラントまたはエキセメスタン）；併用の比較対照はイムルネストラント単剤",
    "primaryEndpoint": "治験責任医師評価PFS：イムルネストラント対標準ETをESR1変異群および全集団で評価。併用対単剤は同時無作為化426例で評価。",
    "result": "ESR1変異群の単剤PFS 5.5対3.8か月（RMST差2.6か月、P<0.001）。全集団の単剤比較HR 0.87、P=0.12で非有意。併用対単剤9.4対5.5か月、HR 0.57（95% CI 0.44–0.73）。",
    "safety": "Grade ≥3有害事象：単剤17.1%、標準20.7%、併用48.6%。",
    "caveat": "単剤のESR1変異群の結果を全集団へ拡張しない。併用対フルベストラント＋アベマシクリブの直接比較ではない。 単剤比較のESR1変異解析は256例。RMST差2.6か月は19.4か月までの制限平均PFSの差であり、中央値差ではない。",
    "agents": [
      "imlunestrant",
      "fulvestrant"
    ],
    "drugClasses": [
      "SERD"
    ],
    "regimenType": "monotherapy_and_combination",
    "priorCdk46Context": "CDK4/6阻害薬既治療・未治療を含む。全例必須ではない。",
    "esr1Context": "ESR1変異群と全集団を別の主要仮説として評価。",
    "biomarkers": [
      "ESR1変異群と全集団を別の主要仮説として評価。"
    ],
    "trial_registration": "NCT04975308",
    "publicationDate": "2024-12-11",
    "publicationYear": 2024,
    "resultDate": "2024-12-11",
    "resultDateLabel": "掲載解析の公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Imlunestrant with or without Abemaciclib in Advanced Breast Cancer.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/39660834/",
        "kind": "原著・抄録確認"
      },
      {
        "title": "Imlunestrant with or without abemaciclib in advanced breast cancer: updated efficacy results from the phase III EMBER-3 trial.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41391667/",
        "kind": "原著・抄録確認"
      },
      {
        "title": "EMBER-3 安全性詳細解析 2026",
        "url": "https://www.nature.com/articles/s41523-026-00950-z",
        "kind": "原著・本文確認",
        "publicationDate": "2026-04-27"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/39660834/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "mixed",
    "lineLabel": "内分泌療法既治療（対象条件参照）",
    "publicationDateType": "reported_publication_date",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/39660834/",
      "checkedDate": "2026-10-06"
    },
    "regimenAgents": [
      "imlunestrant",
      "abemaciclib",
      "fulvestrant",
      "exemestane"
    ],
    "primaryPublication": {
      "date": "2024-12-11",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/39660834/",
      "sourceTitle": "Imlunestrant with or without Abemaciclib in Advanced Breast Cancer.",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": [
      {
        "id": "ember-3-updated-2025",
        "label": "OS中間・PFS更新（2025年オンライン／2026年冊子）",
        "publicationDate": "2025-12-12",
        "resultDate": "2025-08-18",
        "result": "ESR1変異群の単剤OS 34.5対23.1か月、HR 0.60、P=0.0043だが事前規定の有意境界未達。併用対単剤の更新PFS 10.9対5.5か月、HR 0.59。",
        "safety": "既報と一貫し新たな安全性シグナルなし。",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/41391667/",
          "checkedDate": "2026-10-06"
        },
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/41391667/"
      },
      {
        "id": "ember-3-safety-2026",
        "label": "安全性詳細解析（2026年原著、2024年主要PFSカットオフ）",
        "publicationDate": "2026-04-27",
        "analysisPopulation": "1回以上投与した859例：単剤327例、標準ET324例、併用208例。",
        "safety": "併用群の下痢86%（grade ≥3 8%）、grade ≥3好中球減少20%。両剤中止6.3%、加えてアベマシクリブのみ中止3%、イムルネストラントのみ中止0.5%。",
        "caveat": "2026年刊行だが元の主要PFS解析カットオフを使用した詳細解析。2025年8月カットオフの長期更新と混合しない。AEはTEAEであり、治療関連AEと同義ではない。",
        "sourceUrl": "https://www.nature.com/articles/s41523-026-00950-z",
        "articleEvidence": {
          "status": "full_text_checked",
          "label": "表示報告の原著本文確認済み",
          "note": "公式オープンアクセス本文のMethods、Results、Discussionを確認。補足資料の全表は未精査。",
          "sourceUrl": "https://www.nature.com/articles/s41523-026-00950-z",
          "checkedDate": "2026-10-06"
        },
        "resultDate": "2024-06-24"
      }
    ]
  },
  {
    "id": "serena-2",
    "name": "SERENA-2",
    "phase": "II",
    "design": "無作為化・非盲検",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行または転移性乳癌",
    "lineBuckets": [
      "endocrine_pretreated"
    ],
    "population": "内分泌療法後に再発・進行した閉経後ER陽性/HER2陰性乳癌。進行期ET歴は1ラインまで。240例。",
    "cardPopulation": "内分泌療法後に再発・進行した閉経後ER陽性/HER2陰性乳癌。進行期ET歴は1ラインまで。240例。",
    "experimental": "カミゼストラント75 mgまたは150 mg/日単剤（300 mg群は少数）",
    "control": "フルベストラント500 mg",
    "primaryEndpoint": "治験責任医師評価PFS",
    "result": "PFS 75 mg 7.2か月、150 mg 7.7か月、対照3.7か月。HR 0.59（90% CI 0.42–0.82）、0.64（90% CI 0.46–0.89）。",
    "safety": "治療関連AEは75 mg群53%、150 mg群67%、対照18%。各群で同一grade ≥3 AEが3%超に起きず、治療関連死なし。",
    "caveat": "第II相・90% CI。300 mg群は早期募集終了で20例のみ。OSや薬剤間の一般的優劣を確定しない。",
    "agents": [
      "camizestrant",
      "fulvestrant"
    ],
    "drugClasses": [
      "SERD"
    ],
    "regimenType": "monotherapy",
    "priorCdk46Context": "既治療・未治療を含みCDK4/6阻害薬歴で層別。",
    "esr1Context": "ESR1変異を必須としない。変異別結果はサブグループ。",
    "biomarkers": [
      "ESR1変異を必須としない。変異別結果はサブグループ。"
    ],
    "trial_registration": "NCT04214288",
    "publicationDate": "2024-11",
    "publicationYear": 2024,
    "resultDate": "2024-11",
    "resultDateLabel": "掲載解析の公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Camizestrant, a next-generation oral SERD, versus fulvestrant in post-menopausal women with oestrogen receptor-positive, HER2-negative advanced breast cancer (SERENA-2): a multi-dose, open-label, randomised, phase 2 trial.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/39481395/",
        "kind": "原著・抄録確認"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/39481395/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "positive",
    "lineLabel": "内分泌療法既治療（対象条件参照）",
    "publicationDateType": "online_or_issue_month",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/39481395/",
      "checkedDate": "2026-10-06"
    },
    "regimenAgents": [
      "camizestrant",
      "fulvestrant"
    ],
    "primaryPublication": {
      "date": "2024-11",
      "precision": "month",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/39481395/",
      "sourceTitle": "Camizestrant, a next-generation oral SERD, versus fulvestrant in post-menopausal women with oestrogen receptor-positive, HER2-negative advanced breast cancer (SERENA-2): a multi-dose, open-label, randomised, phase 2 trial.",
      "sourceType": "original_paper",
      "note": "初回主要結果原著。既存監査で確認された冊子月を採用。正確な先行オンライン日は今回確証なし。年は確定しており7年境界の判定に影響しない。",
      "dateBasis": "issue_month"
    },
    "reports": []
  },
  {
    "id": "serena-6",
    "name": "SERENA-6",
    "phase": "III",
    "design": "無作為化・二重盲検・プラセボ対照（1:1）",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行または転移性乳癌",
    "lineBuckets": [
      "firstline"
    ],
    "population": "一次AI＋CDK4/6阻害薬を6か月以上投与中、ctDNA ESR1変異を検出し画像進行なしの315例。",
    "cardPopulation": "一次AI＋CDK4/6阻害薬を6か月以上投与中、ctDNA ESR1変異を検出し画像進行なしの315例。",
    "experimental": "AIをカミゼストラント75 mg/日へ変更＋同じCDK4/6阻害薬継続",
    "control": "AI＋同じCDK4/6阻害薬継続",
    "primaryEndpoint": "治験責任医師評価PFS",
    "result": "中間解析PFS 16.0対9.2か月、HR 0.44（95% CI 0.31–0.60）、P<0.0001。",
    "safety": "有害事象による中止1.3%対1.9%。長期安全性は2026年更新を参照。",
    "caveat": "画像進行前の分子学的早期変更。初回からAIを置換するSERENA-4や画像進行後の治療とは別。",
    "agents": [
      "camizestrant"
    ],
    "drugClasses": [
      "SERD"
    ],
    "regimenType": "ctdna_guided_switch",
    "priorCdk46Context": "全例AI＋CDK4/6阻害薬治療中。パルボシクリブ／リボシクリブ／アベマシクリブを変更せず継続。",
    "esr1Context": "ctDNA ESR1変異検出かつ画像進行なしが無作為化条件。",
    "biomarkers": [
      "ctDNA ESR1変異検出かつ画像進行なしが無作為化条件。"
    ],
    "trial_registration": "NCT04964934",
    "publicationDate": "2025-06-01",
    "publicationYear": 2025,
    "resultDate": "2025-06-01",
    "resultDateLabel": "掲載解析の公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "First-Line Camizestrant for Emerging ESR1-Mutated Advanced Breast Cancer.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/40454637/",
        "kind": "原著・抄録確認"
      },
      {
        "title": "Switching to camizestrant at ESR1 mutation emergence before disease progression during first-line treatment of hormone receptor-positive advanced breast cancer (SERENA-6): extended analysis of a double-blind, placebo-controlled, randomised, phase 3 trial.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42442380/",
        "kind": "原著・抄録確認"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/40454637/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "positive",
    "lineLabel": "進行期一次療法／一次治療中変更",
    "publicationDateType": "reported_publication_date",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/40454637/",
      "checkedDate": "2026-10-06"
    },
    "regimenAgents": [
      "camizestrant",
      "anastrozole",
      "letrozole",
      "palbociclib",
      "ribociclib",
      "abemaciclib"
    ],
    "primaryPublication": {
      "date": "2025-06-01",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/40454637/",
      "sourceTitle": "First-Line Camizestrant for Emerging ESR1-Mutated Advanced Breast Cancer.",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": [
      {
        "id": "serena-6-extended-2026",
        "label": "PFS延長追跡・PFS2最終解析",
        "publicationDate": "2026-07-13",
        "resultDate": "2026-01-02",
        "result": "更新PFS 16.8対9.2か月、HR 0.45（記述的解析）。PFS2 25.7対19.1か月、HR 0.63（95% CI 0.46–0.86）、P=0.0037。",
        "safety": "Grade 3–4好中球減少27%対17%。治療関連の可能性ありと判断された死亡は計3例（カミゼストラント群突然死1例、対照群敗血症・イレウス各1例）。",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42442380/",
          "checkedDate": "2026-10-06"
        },
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42442380/"
      }
    ]
  },
  {
    "id": "acelera",
    "name": "acelERA",
    "phase": "II",
    "design": "無作為化・非盲検",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行または転移性乳癌",
    "lineBuckets": [
      "endocrine_pretreated"
    ],
    "population": "1–2ラインの全身療法後、ER陽性/HER2陰性進行乳癌303例。標的療法・化学療法各1ラインまで、フルベストラント歴可。",
    "cardPopulation": "1–2ラインの全身療法後、ER陽性/HER2陰性進行乳癌303例。標的療法・化学療法各1ラインまで、フルベストラント歴可。",
    "experimental": "ギレデストラント30 mg/日単剤",
    "control": "医師選択内分泌単剤（フルベストラント／AI）",
    "primaryEndpoint": "治験責任医師評価PFS",
    "result": "主要PFS HR 0.81（95% CI 0.60–1.10）、P=0.1757で未達。ESR1変異群HR 0.60（95% CI 0.35–1.03）も不確実。",
    "safety": "関連grade 3–4 AE、重篤AE、AE中止は群間で均衡。",
    "caveat": "陰性の主要結果を変異サブグループの傾向で上書きしない。",
    "agents": [
      "giredestrant",
      "fulvestrant"
    ],
    "drugClasses": [
      "SERD"
    ],
    "regimenType": "monotherapy",
    "priorCdk46Context": "CDK4/6阻害薬既治療・未治療を含み層別。",
    "esr1Context": "ESR1変異の有無で選別せず。変異別PFSは事前規定副次解析。",
    "biomarkers": [
      "ESR1変異の有無で選別せず。変異別PFSは事前規定副次解析。"
    ],
    "trial_registration": "NCT04576455",
    "publicationDate": "2024-03-27",
    "publicationYear": 2024,
    "resultDate": "2024-03-27",
    "resultDateLabel": "掲載解析の公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Giredestrant for Estrogen Receptor-Positive, HER2-Negative, Previously Treated Advanced Breast Cancer: Results From the Randomized, Phase II acelERA Breast Cancer Study.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/38537155/",
        "kind": "原著・抄録確認"
      },
      {
        "title": "探索的ctDNA・腫瘍RNAバイオマーカー解析（2026年原著）",
        "url": "https://www.nature.com/articles/s41467-026-70335-0",
        "kind": "更新・関連報告",
        "publicationDate": "2026-03-12"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/38537155/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "negative",
    "lineLabel": "内分泌療法既治療（対象条件参照）",
    "publicationDateType": "reported_publication_date",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/38537155/",
      "checkedDate": "2026-10-06"
    },
    "regimenAgents": [
      "giredestrant",
      "fulvestrant",
      "aromatase inhibitor"
    ],
    "primaryPublication": {
      "date": "2024-03-27",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/38537155/",
      "sourceTitle": "Giredestrant for Estrogen Receptor-Positive, HER2-Negative, Previously Treated Advanced Breast Cancer: Results From the Randomized, Phase II acelERA Breast Cancer Study.",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": [
      {
        "id": "acelera-biomarkers-2026",
        "label": "探索的ctDNA・腫瘍RNAバイオマーカー解析（2026年原著）",
        "publicationDate": "2026-03-12",
        "publicationYear": 2026,
        "analysisPopulation": "元試験303例のうちbaseline ctDNA 229例、C2D1 220例、腫瘍RNAseq 195例。評価項目ごとに分母が異なる。",
        "result": "C2D1のctDNA消失と内分泌反応性が関連。ギレデストラント群の高ER活性対低ER活性PFSは7.5対3.6か月。ER活性×治療群の交互作用は非有意（Cox P=0.946）。",
        "safety": "本探索的報告に新規の安全性集計なし。安全性は2024年の主要報告を参照。",
        "safetySourceUrl": "https://pubmed.ncbi.nlm.nih.gov/38537155/",
        "caveat": "治療群内の予後・反応相関であり、主要PFS陰性を変更しない。多くの探索比較は多重性調整なし。成熟OS更新ではない。",
        "sourceUrl": "https://www.nature.com/articles/s41467-026-70335-0",
        "articleEvidence": {
          "status": "full_text_checked",
          "label": "表示報告の原著本文確認済み",
          "note": "公式オープンアクセスのMethods、Results、Discussionを確認。探索的解析・非有意の交互作用・多重性の限界を確認。補足資料全表は未精査。",
          "sourceUrl": "https://www.nature.com/articles/s41467-026-70335-0",
          "checkedDate": "2026-10-06"
        }
      }
    ]
  },
  {
    "id": "ameera-3",
    "name": "AMEERA-3",
    "phase": "II",
    "design": "無作為化・非盲検",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行または転移性乳癌",
    "lineBuckets": [
      "endocrine_pretreated"
    ],
    "population": "周術期または進行期ET後に増悪、ET歴2ライン以下のER陽性/HER2陰性進行乳癌290例。",
    "cardPopulation": "周術期または進行期ET後に増悪、ET歴2ライン以下のER陽性/HER2陰性進行乳癌290例。",
    "experimental": "アムセネストラント単剤",
    "control": "医師選択内分泌単剤",
    "primaryEndpoint": "独立中央判定PFS",
    "result": "PFS 3.6対3.7か月、HR 1.051（95% CI 0.789–1.400）、片側P=0.643。ESR1変異群HR 0.90（95% CI 0.565–1.435）。",
    "safety": "Grade ≥3治療下有害事象21.7%対15.6%。",
    "caveat": "主要評価項目未達。ESR1変異群でも統計学的利益を証明せず。",
    "agents": [
      "amcenestrant",
      "fulvestrant"
    ],
    "drugClasses": [
      "SERD"
    ],
    "regimenType": "monotherapy",
    "priorCdk46Context": "既治療・未治療を含みCDK4/6阻害薬歴で層別。",
    "esr1Context": "ESR1変異必須ではなく、変異群はサブグループ。",
    "biomarkers": [
      "ESR1変異必須ではなく、変異群はサブグループ。"
    ],
    "trial_registration": "NCT04059484",
    "publicationDate": "2023-06-22",
    "publicationYear": 2023,
    "resultDate": "2023-06-22",
    "resultDateLabel": "掲載解析の公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "AMEERA-3: Randomized Phase II Study of Amcenestrant (Oral Selective Estrogen Receptor Degrader) Versus Standard Endocrine Monotherapy in Estrogen Receptor-Positive, Human Epidermal Growth Factor Receptor 2-Negative Advanced Breast Cancer.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/37348019/",
        "kind": "原著・抄録確認"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/37348019/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "negative",
    "lineLabel": "内分泌療法既治療（対象条件参照）",
    "publicationDateType": "reported_publication_date",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/37348019/",
      "checkedDate": "2026-10-06"
    },
    "regimenAgents": [
      "amcenestrant",
      "fulvestrant",
      "aromatase inhibitor",
      "tamoxifen"
    ],
    "primaryPublication": {
      "date": "2023-06-22",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/37348019/",
      "sourceTitle": "AMEERA-3: Randomized Phase II Study of Amcenestrant (Oral Selective Estrogen Receptor Degrader) Versus Standard Endocrine Monotherapy in Estrogen Receptor-Positive, Human Epidermal Growth Factor Receptor 2-Negative Advanced Breast Cancer.",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "ameera-5",
    "name": "AMEERA-5",
    "phase": "III",
    "design": "無作為化・二重盲検・ダブルダミー（1:1）",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行または転移性乳癌",
    "lineBuckets": [
      "firstline"
    ],
    "population": "進行期全身療法未治療のER陽性/HER2陰性乳癌1068例。女性の閉経状態を問わず男性も対象。",
    "cardPopulation": "進行期全身療法未治療のER陽性/HER2陰性乳癌1068例。女性の閉経状態を問わず男性も対象。",
    "experimental": "アムセネストラント200 mg＋パルボシクリブ",
    "control": "レトロゾール＋パルボシクリブ",
    "primaryEndpoint": "PFS",
    "result": "中間解析PFS HR 1.209（95% CI 0.939–1.557）、片側P=0.9304。無益性により中止。",
    "safety": "Grade ≥3治療下AE 46.3%対60.8%。新たな安全性シグナルなし。",
    "caveat": "陰性・無益性中止。アムセネストラント単剤のAMEERA-3と別試験。",
    "agents": [
      "amcenestrant"
    ],
    "drugClasses": [
      "SERD"
    ],
    "regimenType": "combination",
    "priorCdk46Context": "進行期のCDK4/6阻害薬未治療（一次療法）。",
    "esr1Context": "ESR1変異を登録条件としない。",
    "biomarkers": [
      "ESR1変異を登録条件としない。"
    ],
    "trial_registration": "NCT04478266",
    "publicationDate": "2024-06-18",
    "publicationYear": 2024,
    "resultDate": "2024-06-18",
    "resultDateLabel": "掲載解析の公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Randomized Phase III Study of Amcenestrant Plus Palbociclib Versus Letrozole Plus Palbociclib in Estrogen Receptor-Positive, Human Epidermal Growth Factor Receptor 2-Negative Advanced Breast Cancer: Primary Results From AMEERA-5.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/38889373/",
        "kind": "原著・抄録確認"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/38889373/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "futility_stopped",
    "lineLabel": "進行期一次療法／一次治療中変更",
    "publicationDateType": "reported_publication_date",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/38889373/",
      "checkedDate": "2026-10-06"
    },
    "regimenAgents": [
      "amcenestrant",
      "palbociclib",
      "letrozole"
    ],
    "primaryPublication": {
      "date": "2024-06-18",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/38889373/",
      "sourceTitle": "Randomized Phase III Study of Amcenestrant Plus Palbociclib Versus Letrozole Plus Palbociclib in Estrogen Receptor-Positive, Human Epidermal Growth Factor Receptor 2-Negative Advanced Breast Cancer: Primary Results From AMEERA-5.",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "veritac-2",
    "name": "VERITAC-2",
    "phase": "III",
    "design": "無作為化・非盲検",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行または転移性乳癌",
    "lineBuckets": [
      "endocrine_pretreated"
    ],
    "population": "CDK4/6阻害薬＋ET後のER陽性/HER2陰性進行乳癌624例。ESR1変異270例。",
    "cardPopulation": "CDK4/6阻害薬＋ET後のER陽性/HER2陰性進行乳癌624例。ESR1変異270例。",
    "experimental": "ベプデゲストラント（PROTAC型ER分解薬）単剤",
    "control": "フルベストラント単剤",
    "primaryEndpoint": "盲検独立中央判定PFS（ESR1変異群、全集団）",
    "result": "ESR1変異群PFS 5.0対2.1か月、HR 0.58（95% CI 0.43–0.78）、P<0.001。全集団3.8対3.6か月、HR 0.83、P=0.07。",
    "safety": "Grade ≥3 AE 23.4%対17.6%。AE中止2.9%対0.7%。",
    "caveat": "PROTAC型分解薬で通常のSERDと分類を分ける。変異群では陽性、全集団では未達。",
    "agents": [
      "vepdegestrant",
      "fulvestrant"
    ],
    "drugClasses": [
      "ER degrader (PROTAC)"
    ],
    "regimenType": "monotherapy",
    "priorCdk46Context": "全例CDK4/6阻害薬＋ET既治療。",
    "esr1Context": "ESR1変異群と全集団が別の主要評価集団。",
    "biomarkers": [
      "ESR1変異群と全集団が別の主要評価集団。"
    ],
    "trial_registration": "NCT05654623",
    "publicationDate": "2025-05-31",
    "publicationYear": 2025,
    "resultDate": "2025-05-31",
    "resultDateLabel": "掲載解析の公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Vepdegestrant, a PROTAC Estrogen Receptor Degrader, in Advanced Breast Cancer",
        "url": "https://www.nejm.org/doi/10.1056/NEJMoa2505725",
        "kind": "原著・抄録確認"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://www.nejm.org/doi/10.1056/NEJMoa2505725",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "mixed",
    "lineLabel": "内分泌療法既治療（対象条件参照）",
    "publicationDateType": "reported_publication_date",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://www.nejm.org/doi/10.1056/NEJMoa2505725",
      "checkedDate": "2026-10-06"
    },
    "regimenAgents": [
      "vepdegestrant",
      "fulvestrant"
    ],
    "primaryPublication": {
      "date": "2025-05-31",
      "precision": "day",
      "sourceUrl": "https://www.nejm.org/doi/10.1056/NEJMoa2505725",
      "sourceTitle": "Vepdegestrant, a PROTAC Estrogen Receptor Degrader, in Advanced Breast Cancer",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "evera",
    "name": "evERA Breast Cancer",
    "phase": "III",
    "design": "無作為化・非盲検",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行または転移性乳癌",
    "lineBuckets": [
      "endocrine_pretreated"
    ],
    "population": "CDK4/6阻害薬＋ET後に再発・進行したER陽性/HER2陰性局所進行・転移乳癌373例。",
    "cardPopulation": "CDK4/6阻害薬＋ET後に再発・進行したER陽性/HER2陰性局所進行・転移乳癌373例。",
    "experimental": "ギレデストラント＋エベロリムス",
    "control": "標準ET（エキセメスタン／フルベストラント／タモキシフェン）＋エベロリムス",
    "primaryEndpoint": "治験責任医師評価PFS：ESR1変異群→全集団の順に評価",
    "result": "ESR1変異群10.0対5.5か月、HR 0.38（95% CI 0.27–0.54）。全集団8.8対5.5か月、HR 0.56（95% CI 0.44–0.71）、ともにP<0.001。",
    "safety": "口内炎47.3%対48.9%、下痢26.9%対22.6%、貧血23.6%対21.0%。",
    "caveat": "両群でエベロリムス併用。経口SERD単剤の比較ではなく、OS利益を本結果から推定しない。",
    "agents": [
      "giredestrant",
      "fulvestrant"
    ],
    "drugClasses": [
      "SERD"
    ],
    "regimenType": "combination",
    "priorCdk46Context": "全例CDK4/6阻害薬＋ET既治療。",
    "esr1Context": "ESR1変異群207例、全集団を階層的に検定。",
    "biomarkers": [
      "ESR1変異群207例、全集団を階層的に検定。"
    ],
    "trial_registration": "NCT05306340",
    "publicationDate": "2026-09-30",
    "publicationYear": 2026,
    "resultDate": "2026-09-30",
    "resultDateLabel": "原著オンライン公開日（2026-09-30；冊子掲載2026-10-01。データカットオフとは別）",
    "sources": [
      {
        "title": "Giredestrant plus Everolimus in Advanced Breast Cancer.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42814929/",
        "kind": "原著・抄録確認"
      },
      {
        "title": "evERA NEJM原著（公式）",
        "url": "https://www.nejm.org/doi/full/10.1056/NEJMoa2602457",
        "kind": "原著・抄録確認"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42814929/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "positive",
    "lineLabel": "内分泌療法既治療（対象条件参照）",
    "publicationDateType": "first_online_publication_date",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42814929/",
      "checkedDate": "2026-10-06"
    },
    "regimenAgents": [
      "giredestrant",
      "everolimus",
      "fulvestrant",
      "exemestane",
      "tamoxifen"
    ],
    "issuePublicationDate": "2026-10-01",
    "primaryPublication": {
      "date": "2026-09-30",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42814929/",
      "sourceTitle": "Giredestrant plus Everolimus in Advanced Breast Cancer.",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "lidera",
    "name": "lidERA Breast Cancer",
    "phase": "III",
    "design": "無作為化・非盲検",
    "setting": "early",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [
      "I",
      "II",
      "III"
    ],
    "timing": [
      "adjuvant"
    ],
    "stageLabel": "早期乳癌（適格条件参照）",
    "lineBuckets": [],
    "population": "中間～高再発リスクの手術後ER陽性/HER2陰性早期乳癌4170例。病期I–IIIで追加リスク条件あり。",
    "cardPopulation": "中間～高再発リスクの手術後ER陽性/HER2陰性早期乳癌4170例。病期I–IIIで追加リスク条件あり。",
    "experimental": "ギレデストラント30 mg/日の術後内分泌療法、予定5年間（閉経前・周閉経期女性および男性にはLHRHアゴニスト併用）",
    "control": "医師選択の標準術後内分泌療法（タモキシフェンまたはAI）、予定5年間",
    "primaryEndpoint": "iDFS（第二原発非乳癌を除く）",
    "result": "追跡中央値32.3か月：3年iDFS 92.4%対89.6%、HR 0.70（95% CI 0.57–0.87）、P=0.0014。OSは未成熟・非有意。",
    "safety": "関節痛48.0%対47.1%、ほてり27.4%対28.8%。AE中止5.3%対8.2%。",
    "caveat": "SABCS 2025一次発表の学会抄録。原著全文は未確認。進行乳癌やCDK4/6阻害薬併用の有効性へ外挿しない。",
    "agents": [
      "giredestrant"
    ],
    "drugClasses": [
      "SERD"
    ],
    "regimenType": "monotherapy",
    "priorCdk46Context": "主試験はCDK4/6阻害薬併用を比較しない。現行登録では、無作為化前の術前・術後CDK4/6阻害薬投与は最大12週間の短期投与を許容するが、投与中または投与予定例は除外。主解析集団と後続サブ試験を区別。",
    "esr1Context": "ESR1変異を登録条件としない。",
    "biomarkers": [
      "ESR1変異を登録条件としない。"
    ],
    "trial_registration": "NCT04961996",
    "publicationDate": "2026-02-17",
    "publicationYear": 2026,
    "resultDate": "2025-08-08",
    "resultDateLabel": "iDFS中間解析データカットオフ",
    "sources": [
      {
        "title": "Bardia et al. SABCS 2025 GS1-10（学会一次抄録）",
        "url": "https://aacrjournals.org/clincancerres/article/32/4_Supplement/GS1-10/772276",
        "kind": "学会一次抄録"
      },
      {
        "title": "lidERA ClinicalTrials.gov（現行適格条件；主解析と区別）",
        "url": "https://clinicaltrials.gov/study/NCT04961996",
        "kind": "試験登録"
      }
    ],
    "articleEvidence": {
      "status": "conference_only",
      "label": "原著論文未確認（学会発表ベース）",
      "note": "原著全文は未確認。学会公式一次抄録で確認できた範囲のみを記載。",
      "sourceUrl": "https://aacrjournals.org/clincancerres/article/32/4_Supplement/GS1-10/772276",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "positive",
    "firstPresentationDate": "2025-12-10",
    "lineLabel": "術前／術後（対象条件参照）",
    "publicationDateType": "reported_publication_date",
    "safetyEvidence": {
      "status": "conference_only",
      "label": "原著論文未確認（学会発表ベース）",
      "note": "原著全文は未確認。学会公式一次抄録で確認できた範囲のみを記載。",
      "sourceUrl": "https://aacrjournals.org/clincancerres/article/32/4_Supplement/GS1-10/772276",
      "checkedDate": "2026-10-06"
    },
    "regimenAgents": [
      "giredestrant",
      "aromatase inhibitor",
      "tamoxifen"
    ],
    "primaryPublication": {
      "date": "2026-02-17",
      "precision": "day",
      "sourceUrl": "https://aacrjournals.org/clincancerres/article/32/4_Supplement/GS1-10/772276",
      "sourceType": "conference_abstract",
      "note": "主要結果の正式学会抄録／発表資料の公表日。企業の先行トップライン発表日と区別。"
    },
    "reports": []
  },
  {
    "id": "persevera",
    "name": "persevERA Breast Cancer",
    "phase": "III",
    "design": "無作為化・二重盲検（1:1）",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行または転移性乳癌",
    "lineBuckets": [
      "firstline"
    ],
    "population": "進行期未治療のER陽性/HER2陰性局所進行・転移乳癌992例。内分泌感受性の一次療法。",
    "cardPopulation": "進行期未治療のER陽性/HER2陰性局所進行・転移乳癌992例。内分泌感受性の一次療法。",
    "experimental": "ギレデストラント＋パルボシクリブ",
    "control": "レトロゾール＋パルボシクリブ",
    "primaryEndpoint": "治験責任医師評価PFS",
    "result": "PFS 33.1対28.2か月、HR 0.89（95% CI 0.76–1.05）、P=0.1553で主要評価項目未達。",
    "safety": "主なgrade 3–4 AEは血液毒性。ETのAE中止6.5%対5.5%。",
    "caveat": "ASCO 2026 LBA1006の一次学会抄録。数値改善は統計学的成功を意味しない。",
    "agents": [
      "giredestrant"
    ],
    "drugClasses": [
      "SERD"
    ],
    "regimenType": "combination",
    "priorCdk46Context": "進行期CDK4/6阻害薬未治療の一次併用。",
    "esr1Context": "ESR1変異を登録条件としない。",
    "biomarkers": [
      "ESR1変異を登録条件としない。"
    ],
    "trial_registration": "NCT04546009",
    "publicationDate": "2026-06-03",
    "publicationYear": 2026,
    "resultDate": "2026-01-30",
    "resultDateLabel": "主要解析データカットオフ",
    "sources": [
      {
        "title": "persevERA Breast Cancer 一次発表",
        "url": "https://ascopubs.org/doi/pdfdirect/10.1200/JCO.2026.44.17_suppl.LBA1006",
        "kind": "学会一次発表"
      }
    ],
    "articleEvidence": {
      "status": "conference_only",
      "label": "原著論文未確認（学会発表ベース）",
      "note": "原著全文は未確認。学会公式一次抄録で確認できた範囲のみを記載。",
      "sourceUrl": "https://ascopubs.org/doi/pdfdirect/10.1200/JCO.2026.44.17_suppl.LBA1006",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "negative",
    "lineLabel": "進行期全身療法未治療の一次併用療法",
    "publicationDateType": "reported_publication_date",
    "safetyEvidence": {
      "status": "conference_only",
      "label": "原著論文未確認（学会発表ベース）",
      "note": "原著全文は未確認。学会公式一次抄録で確認できた範囲のみを記載。",
      "sourceUrl": "https://ascopubs.org/doi/pdfdirect/10.1200/JCO.2026.44.17_suppl.LBA1006",
      "checkedDate": "2026-10-06"
    },
    "regimenAgents": [
      "giredestrant",
      "palbociclib",
      "letrozole"
    ],
    "primaryPublication": {
      "date": "2026-06-03",
      "precision": "day",
      "sourceUrl": "https://ascopubs.org/doi/pdfdirect/10.1200/JCO.2026.44.17_suppl.LBA1006",
      "sourceType": "conference_abstract",
      "note": "主要結果の正式学会抄録／発表資料の公表日。企業の先行トップライン発表日と区別。"
    },
    "reports": []
  },
  {
    "id": "serena-4",
    "name": "SERENA-4",
    "phase": "III",
    "design": "無作為化・二重盲検",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行または転移性乳癌",
    "lineBuckets": [
      "firstline"
    ],
    "population": "進行期全身療法未治療のER陽性/HER2陰性局所進行・転移乳癌1371例。初発IV期、または標準術後ETを少なくとも24か月受けた後の再発例。術後AI終了後は少なくとも12か月の間隔などの条件あり。",
    "cardPopulation": "進行期全身療法未治療のER陽性/HER2陰性局所進行・転移乳癌1371例。初発IV期、または標準術後ETを少なくとも24か月受けた後の再発例。術後AI終了後は少なくとも12か月の間隔などの条件あり。",
    "experimental": "カミゼストラント＋パルボシクリブ",
    "control": "アナストロゾール＋パルボシクリブ",
    "primaryEndpoint": "治験責任医師評価PFS",
    "result": "企業の2026-09-11公表：PFSの統計学的有意な改善という主要目的を達成せず。数値上の改善のみ。",
    "safety": "数値を伴う安全性結果はこの調査で未確認。",
    "caveat": "企業公表のみ。HR・中央値を補完しない。SERENA-6のESR1出現時変更の結果と混同しない。",
    "agents": [
      "camizestrant"
    ],
    "drugClasses": [
      "SERD"
    ],
    "regimenType": "combination",
    "priorCdk46Context": "進行期CDK4/6阻害薬未治療の一次併用。",
    "esr1Context": "ESR1変異を登録条件としない。",
    "biomarkers": [
      "ESR1変異を登録条件としない。"
    ],
    "trial_registration": "NCT04711252",
    "publicationDate": "2026-09-11",
    "publicationYear": 2026,
    "resultDate": "2026-09-11",
    "resultDateLabel": "掲載解析の公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "AstraZeneca: Update on SERENA-4 Phase III trial, 11 September 2026",
        "url": "https://www.astrazeneca.com/media-centre/press-releases/2026/update-serena-4-phase-iii-trial.html",
        "kind": "企業一次公表"
      }
    ],
    "articleEvidence": {
      "status": "sponsor_announcement",
      "label": "原著論文未確認（企業公表のみ）",
      "note": "企業によるtop-line公表のみを確認。一次学会結果・査読原著の数値詳細は未確認。",
      "sourceUrl": "https://www.astrazeneca.com/media-centre/press-releases/2026/update-serena-4-phase-iii-trial.html",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "negative_topline",
    "lineLabel": "進行期全身療法未治療の一次併用療法",
    "publicationDateType": "reported_publication_date",
    "safetyEvidence": {
      "status": "sponsor_announcement",
      "label": "原著論文未確認（企業公表のみ）",
      "note": "企業によるtop-line公表のみを確認。一次学会結果・査読原著の数値詳細は未確認。",
      "sourceUrl": "https://www.astrazeneca.com/media-centre/press-releases/2026/update-serena-4-phase-iii-trial.html",
      "checkedDate": "2026-10-06"
    },
    "regimenAgents": [
      "camizestrant",
      "palbociclib",
      "anastrozole"
    ],
    "primaryPublication": {
      "date": "2026-09-11",
      "precision": "day",
      "sourceUrl": "https://www.astrazeneca.com/media-centre/press-releases/2026/update-serena-4-phase-iii-trial.html",
      "sourceTitle": "AstraZeneca: Update on SERENA-4 Phase III trial, 11 September 2026",
      "sourceType": "sponsor_announcement",
      "note": "原著の主要結果論文および詳細学会結果は未確認。初回主要評価結果の企業公表日を採用。"
    },
    "reports": []
  },
  {
    "id": "coopera",
    "name": "coopERA Breast Cancer",
    "phase": "II",
    "design": "無作為化・非盲検",
    "setting": "early",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [
      "neoadjuvant"
    ],
    "stageLabel": "早期乳癌（適格条件参照）",
    "lineBuckets": [],
    "population": "未治療ER陽性/HER2陰性早期乳癌の閉経後女性221例。cT1c–T4a-c（T1cは1.5 cm以上）、Ki67≥5%。",
    "cardPopulation": "未治療ER陽性/HER2陰性早期乳癌の閉経後女性221例。cT1c–T4a-c（T1cは1.5 cm以上）、Ki67≥5%。",
    "experimental": "ギレデストラント2週単剤→パルボシクリブを加え16週",
    "control": "アナストロゾール2週→パルボシクリブを加え16週",
    "primaryEndpoint": "2週時Ki67のベースラインからの相対変化",
    "result": "主要解析Ki67低下率75%対67%、P=0.043。",
    "safety": "併用期grade 3–4好中球減少26%対27%。治療関連死なし。",
    "caveat": "Ki67という薬力学的・増殖マーカーの評価で、再発抑制やOSを証明する試験ではない。",
    "agents": [
      "giredestrant"
    ],
    "drugClasses": [
      "SERD"
    ],
    "regimenType": "window_then_combination",
    "priorCdk46Context": "未治療。2週後の両群にパルボシクリブを追加。",
    "esr1Context": "ESR1変異を登録条件としない。",
    "biomarkers": [
      "ESR1変異を登録条件としない。"
    ],
    "trial_registration": "NCT04436744",
    "publicationDate": "2023-09",
    "publicationYear": 2023,
    "resultDate": "2023-09",
    "resultDateLabel": "掲載解析の公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Neoadjuvant palbociclib plus either giredestrant or anastrozole in oestrogen receptor-positive, HER2-negative, early breast cancer (coopERA Breast Cancer): an open-label, randomised, controlled, phase 2 study.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/37657462/",
        "kind": "原著・抄録確認"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/37657462/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "positive_surrogate",
    "lineLabel": "術前／術後（対象条件参照）",
    "publicationDateType": "online_or_issue_month",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/37657462/",
      "checkedDate": "2026-10-06"
    },
    "regimenAgents": [
      "giredestrant",
      "palbociclib",
      "anastrozole"
    ],
    "primaryPublication": {
      "date": "2023-09",
      "precision": "month",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/37657462/",
      "sourceTitle": "Neoadjuvant palbociclib plus either giredestrant or anastrozole in oestrogen receptor-positive, HER2-negative, early breast cancer (coopERA Breast Cancer): an open-label, randomised, controlled, phase 2 study.",
      "sourceType": "original_paper",
      "note": "初回主要結果原著。既存監査で確認された冊子月を採用。正確な先行オンライン日は今回確証なし。年は確定しており7年境界の判定に影響しない。",
      "dateBasis": "issue_month"
    },
    "reports": []
  },
  {
    "id": "alternate",
    "name": "ALTERNATE（Alliance A011106）",
    "phase": "III",
    "design": "無作為化・非盲検",
    "setting": "early",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [
      "II",
      "III"
    ],
    "timing": [
      "neoadjuvant"
    ],
    "stageLabel": "早期乳癌（適格条件参照）",
    "lineBuckets": [],
    "population": "閉経後、ER高発現/HER2陰性、臨床病期II–III。登録1362例、評価可能1298例。",
    "cardPopulation": "閉経後、ER高発現/HER2陰性、臨床病期II–III。登録1362例、評価可能1298例。",
    "experimental": "術前フルベストラント単剤、またはアナストロゾール＋フルベストラント（6か月）",
    "control": "術前アナストロゾール単剤",
    "primaryEndpoint": "内分泌感受性病変率（ESDR：pCRまたは規定の低Ki67残存病変）",
    "result": "ESDRはアナストロゾール18.7%、フルベストラント22.8%、併用20.5%。いずれのフルベストラント群も有意改善なし。",
    "safety": "確認した原著抄録に詳細な安全性数値なし。",
    "caveat": "早期・術前の陰性試験。ESDRと再発・生存のアウトカムを区別。Ki67>10%時は化学療法／手術へ変更。",
    "agents": [
      "fulvestrant"
    ],
    "drugClasses": [
      "SERD"
    ],
    "regimenType": "monotherapy_and_combination",
    "priorCdk46Context": "CDK4/6阻害薬の上乗せを評価していない。",
    "esr1Context": "ESR1変異を登録条件としない。",
    "biomarkers": [
      "ESR1変異を登録条件としない。"
    ],
    "trial_registration": "NCT01953588",
    "publicationDate": "2024-01-18",
    "publicationYear": 2024,
    "resultDate": "2024-01-18",
    "resultDateLabel": "掲載解析の公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Endocrine-Sensitive Disease Rate in Postmenopausal Patients With Estrogen Receptor-Rich/ERBB2-Negative Breast Cancer Receiving Neoadjuvant Anastrozole, Fulvestrant, or Their Combination: A Phase 3 Randomized Clinical Trial.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/38236590/",
        "kind": "原著・抄録確認"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/38236590/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "negative",
    "lineLabel": "術前／術後（対象条件参照）",
    "publicationDateType": "reported_publication_date",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/38236590/",
      "checkedDate": "2026-10-06"
    },
    "regimenAgents": [
      "fulvestrant",
      "anastrozole"
    ],
    "primaryPublication": {
      "date": "2024-01-18",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/38236590/",
      "sourceTitle": "Endocrine-Sensitive Disease Rate in Postmenopausal Patients With Estrogen Receptor-Rich/ERBB2-Negative Breast Cancer Receiving Neoadjuvant Anastrozole, Fulvestrant, or Their Combination: A Phase 3 Randomized Clinical Trial.",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "postmonarch",
    "name": "postMONARCH",
    "phase": "III",
    "design": "無作為化・二重盲検・プラセボ対照（1:1）",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行または転移性乳癌",
    "lineBuckets": [
      "endocrine_pretreated"
    ],
    "population": "一次CDK4/6阻害薬＋AIで増悪、または術後CDK4/6阻害薬＋ET中・後の再発。HR陽性/HER2陰性368例。",
    "cardPopulation": "一次CDK4/6阻害薬＋AIで増悪、または術後CDK4/6阻害薬＋ET中・後の再発。HR陽性/HER2陰性368例。",
    "experimental": "アベマシクリブ＋フルベストラント",
    "control": "プラセボ＋フルベストラント",
    "primaryEndpoint": "治験責任医師評価PFS",
    "result": "PFS 6.0対5.3か月、HR 0.73（95% CI 0.57–0.95）、名目P=0.017。",
    "safety": "抄録では新たな安全性シグナルなし。アベマシクリブの既知の安全性と一貫。",
    "caveat": "PFS中央値の絶対差とHRを併記。CDK4/6阻害薬継続／変更の効果を薬剤や集団を越えて一般化しない。",
    "agents": [
      "fulvestrant"
    ],
    "drugClasses": [
      "SERD"
    ],
    "regimenType": "combination",
    "priorCdk46Context": "CDK4/6阻害薬既治療が条件。",
    "esr1Context": "ESR1変異非限定。探索的サブグループで変異の有無にかかわらず一貫した傾向。",
    "biomarkers": [
      "ESR1変異非限定。探索的サブグループで変異の有無にかかわらず一貫した傾向。"
    ],
    "trial_registration": "NCT05169567",
    "publicationDate": "2024-12-18",
    "publicationYear": 2024,
    "resultDate": "2024-12-18",
    "resultDateLabel": "掲載解析の公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Abemaciclib Plus Fulvestrant in Advanced Breast Cancer After Progression on CDK4/6 Inhibition: Results From the Phase III postMONARCH Trial.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/39693591/",
        "kind": "原著・抄録確認"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/39693591/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "positive",
    "lineLabel": "内分泌療法既治療（対象条件参照）",
    "publicationDateType": "reported_publication_date",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/39693591/",
      "checkedDate": "2026-10-06"
    },
    "regimenAgents": [
      "abemaciclib",
      "fulvestrant"
    ],
    "primaryPublication": {
      "date": "2024-12-18",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/39693591/",
      "sourceTitle": "Abemaciclib Plus Fulvestrant in Advanced Breast Cancer After Progression on CDK4/6 Inhibition: Results From the Phase III postMONARCH Trial.",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "palmira",
    "name": "PALMIRA",
    "phase": "II",
    "design": "無作為化・非盲検（2:1）",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行または転移性乳癌",
    "lineBuckets": [
      "endocrine_pretreated"
    ],
    "population": "一次パルボシクリブ＋ET後に増悪したHR陽性/HER2陰性198例。前治療に臨床的利益等の条件あり。",
    "cardPopulation": "一次パルボシクリブ＋ET後に増悪したHR陽性/HER2陰性198例。前治療に臨床的利益等の条件あり。",
    "experimental": "パルボシクリブ再投与＋変更ET（フルベストラントまたはレトロゾール）",
    "control": "変更ET単剤",
    "primaryEndpoint": "治験責任医師評価PFS",
    "result": "PFS 4.9対3.6か月、HR 0.84（95% CI 0.66–1.07）、P=0.149で有意改善なし。",
    "safety": "Grade ≥3治療下AE 47.4%対10.0%。",
    "caveat": "内分泌バックボーンは全例フルベストラントではない。CDK4/6阻害薬の種類を変更する戦略と同一ではない。",
    "agents": [
      "fulvestrant"
    ],
    "drugClasses": [
      "SERD"
    ],
    "regimenType": "combination",
    "priorCdk46Context": "全例パルボシクリブ既治療。再投与戦略。",
    "esr1Context": "ESR1変異を登録条件としない。",
    "biomarkers": [
      "ESR1変異を登録条件としない。"
    ],
    "trial_registration": "NCT03809988",
    "publicationDate": "2025-04-28",
    "publicationYear": 2025,
    "resultDate": "2025-04-28",
    "resultDateLabel": "掲載解析の公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Second-Line Endocrine Therapy With or Without Palbociclib Rechallenge in Patients With Hormone Receptor-Positive/Human Epidermal Growth Factor Receptor 2-Negative Advanced Breast Cancer: PALMIRA Trial.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/40294349/",
        "kind": "原著・抄録確認"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/40294349/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "negative",
    "lineLabel": "内分泌療法既治療（対象条件参照）",
    "publicationDateType": "reported_publication_date",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/40294349/",
      "checkedDate": "2026-10-06"
    },
    "regimenAgents": [
      "palbociclib",
      "fulvestrant",
      "letrozole"
    ],
    "primaryPublication": {
      "date": "2025-04-28",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/40294349/",
      "sourceTitle": "Second-Line Endocrine Therapy With or Without Palbociclib Rechallenge in Patients With Hormone Receptor-Positive/Human Epidermal Growth Factor Receptor 2-Negative Advanced Breast Cancer: PALMIRA Trial.",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "maintain",
    "name": "MAINTAIN",
    "phase": "II",
    "design": "無作為化・二重盲検・プラセボ対照（1:1）",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行または転移性乳癌",
    "lineBuckets": [
      "endocrine_pretreated"
    ],
    "population": "ET＋CDK4/6阻害薬中に増悪したHR陽性/HER2陰性転移乳癌119例。前治療は86.5%パルボシクリブ。",
    "cardPopulation": "ET＋CDK4/6阻害薬中に増悪したHR陽性/HER2陰性転移乳癌119例。前治療は86.5%パルボシクリブ。",
    "experimental": "変更ET（フルベストラントまたはエキセメスタン）＋リボシクリブ",
    "control": "変更ET＋プラセボ",
    "primaryEndpoint": "PFS",
    "result": "PFS 5.29対2.76か月、HR 0.57（95% CI 0.39–0.85）、P=0.006。",
    "safety": "確認した原著抄録に具体的安全性率の記載なし。",
    "caveat": "小規模第II相。全例フルベストラントではなく、多くはCDK4/6阻害薬の種類も変更。",
    "agents": [
      "fulvestrant"
    ],
    "drugClasses": [
      "SERD"
    ],
    "regimenType": "combination",
    "priorCdk46Context": "全例CDK4/6阻害薬既治療。86.5%パルボシクリブ、11.7%リボシクリブ。",
    "esr1Context": "ESR1変異を登録条件としない。",
    "biomarkers": [
      "ESR1変異を登録条件としない。"
    ],
    "trial_registration": "NCT02632045",
    "publicationDate": "2023-05-19",
    "publicationYear": 2023,
    "resultDate": "2023-05-19",
    "resultDateLabel": "掲載解析の公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Randomized Phase II Trial of Endocrine Therapy With or Without Ribociclib After Progression on Cyclin-Dependent Kinase 4/6 Inhibition in Hormone Receptor-Positive, Human Epidermal Growth Factor Receptor 2-Negative Metastatic Breast Cancer: MAINTAIN Trial.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/37207300/",
        "kind": "原著・抄録確認"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/37207300/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "positive",
    "lineLabel": "内分泌療法既治療（対象条件参照）",
    "publicationDateType": "reported_publication_date",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/37207300/",
      "checkedDate": "2026-10-06"
    },
    "regimenAgents": [
      "ribociclib",
      "fulvestrant",
      "exemestane"
    ],
    "primaryPublication": {
      "date": "2023-05-19",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/37207300/",
      "sourceTitle": "Randomized Phase II Trial of Endocrine Therapy With or Without Ribociclib After Progression on Cyclin-Dependent Kinase 4/6 Inhibition in Hormone Receptor-Positive, Human Epidermal Growth Factor Receptor 2-Negative Metastatic Breast Cancer: MAINTAIN Trial.",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "pace",
    "name": "PACE",
    "phase": "II",
    "design": "無作為化3群（1:2:1）",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行または転移性乳癌",
    "lineBuckets": [
      "endocrine_pretreated"
    ],
    "population": "AI＋CDK4/6阻害薬後に増悪したHR陽性/HER2陰性転移乳癌220例。",
    "cardPopulation": "AI＋CDK4/6阻害薬後に増悪したHR陽性/HER2陰性転移乳癌220例。",
    "experimental": "フルベストラント＋パルボシクリブ；別群でアベルマブも追加",
    "control": "フルベストラント単剤",
    "primaryEndpoint": "フルベストラント対フルベストラント＋パルボシクリブのPFS",
    "result": "パルボシクリブ併用4.6対単剤4.8か月、HR 1.11（90% CI 0.79–1.55）、P=0.62。3剤群8.1か月だが探索的、P=0.23。",
    "safety": "確認した原著抄録に詳細な安全性率の記載なし。",
    "caveat": "主要比較陰性。アベルマブの3剤併用を確立された選択肢と扱わない。",
    "agents": [
      "fulvestrant"
    ],
    "drugClasses": [
      "SERD"
    ],
    "regimenType": "combination",
    "priorCdk46Context": "全例CDK4/6阻害薬既治療、90.9%はパルボシクリブ。",
    "esr1Context": "ESR1変異を必須としない。バイオマーカー別結果は探索的。",
    "biomarkers": [
      "ESR1変異を必須としない。バイオマーカー別結果は探索的。"
    ],
    "trial_registration": "NCT03147287",
    "publicationDate": "2024-03-21",
    "publicationYear": 2024,
    "resultDate": "2024-03-21",
    "resultDateLabel": "掲載解析の公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "PACE: A Randomized Phase II Study of Fulvestrant, Palbociclib, and Avelumab After Progression on Cyclin-Dependent Kinase 4/6 Inhibitor and Aromatase Inhibitor for Hormone Receptor-Positive/Human Epidermal Growth Factor Receptor-Negative Metastatic Breast Cancer.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/38513188/",
        "kind": "原著・抄録確認"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/38513188/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "negative",
    "lineLabel": "内分泌療法既治療（対象条件参照）",
    "publicationDateType": "reported_publication_date",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/38513188/",
      "checkedDate": "2026-10-06"
    },
    "regimenAgents": [
      "fulvestrant",
      "palbociclib",
      "avelumab"
    ],
    "primaryPublication": {
      "date": "2024-03-21",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/38513188/",
      "sourceTitle": "PACE: A Randomized Phase II Study of Fulvestrant, Palbociclib, and Avelumab After Progression on Cyclin-Dependent Kinase 4/6 Inhibitor and Aromatase Inhibitor for Hormone Receptor-Positive/Human Epidermal Growth Factor Receptor-Negative Metastatic Breast Cancer.",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "inavo120",
    "name": "INAVO120",
    "phase": "III",
    "design": "無作為化・二重盲検・プラセボ対照（1:1）",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行または転移性乳癌",
    "lineBuckets": [
      "firstline"
    ],
    "population": "PIK3CA変異、HR陽性/HER2陰性、術後ET中または終了12か月以内に再発した進行乳癌325例。進行期一次療法。",
    "cardPopulation": "PIK3CA変異、HR陽性/HER2陰性、術後ET中または終了12か月以内に再発した進行乳癌325例。進行期一次療法。",
    "experimental": "イナボリシブ＋パルボシクリブ＋フルベストラント",
    "control": "プラセボ＋パルボシクリブ＋フルベストラント",
    "primaryEndpoint": "PFS（掲載結果は最終OS）",
    "result": "最終OS 34.0対27.0か月、HR 0.67（95% CI 0.48–0.94）、P=0.02（事前有意境界P<0.0469）。",
    "safety": "高血糖、口内炎／粘膜炎、消化器・眼毒性が増加。イナボリシブ／プラセボのAE中止6.8%対0.6%。",
    "caveat": "PIK3CA変異かつ術後ET抵抗性の進行期一次療法。進行期CDK4/6阻害薬増悪後の二次療法にそのまま外挿しない。",
    "agents": [
      "fulvestrant"
    ],
    "drugClasses": [
      "SERD",
      "PI3K inhibitor",
      "CDK4/6 inhibitor"
    ],
    "regimenType": "combination",
    "priorCdk46Context": "進行期全身療法未治療の一次療法。進行期CDK4/6阻害薬後の試験ではない。",
    "esr1Context": "ESR1変異を選択条件とせず。選択バイオマーカーはPIK3CA。",
    "biomarkers": [
      "PIK3CA変異"
    ],
    "trial_registration": "NCT04191499",
    "publicationDate": "2025-05-31",
    "publicationYear": 2025,
    "resultDate": "2025-05-31",
    "resultDateLabel": "掲載解析の公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Overall Survival with Inavolisib in PIK3CA-Mutated Advanced Breast Cancer.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/40454641/",
        "kind": "原著・抄録確認"
      },
      {
        "title": "Inavolisib-Based Therapy in PIK3CA-Mutated Advanced Breast Cancer.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/39476340/",
        "kind": "原著・抄録確認"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/40454641/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "positive",
    "lineLabel": "進行期一次療法／一次治療中変更",
    "publicationDateType": "reported_publication_date",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/40454641/",
      "checkedDate": "2026-10-06"
    },
    "regimenAgents": [
      "inavolisib",
      "palbociclib",
      "fulvestrant"
    ],
    "primaryPublication": {
      "date": "2024-10-30",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/39476340/",
      "sourceTitle": "主要PFS解析",
      "sourceType": "original_paper",
      "note": "同一試験の初回主要結果原著（主要PFS解析）を基準に採用。主カードの追跡更新日・後続コホート報告日ではない。既存の検証済み書誌を再利用。"
    },
    "reports": [
      {
        "id": "inavo120-primary-pfs-2024",
        "label": "主要PFS解析",
        "publicationDate": "2024-10-30",
        "resultDate": "2024-10-30",
        "result": "PFS 15.0対7.3か月、HR 0.43（95% CI 0.32–0.59）、P<0.001。",
        "safety": "Grade 3–4好中球減少80.2%対78.4%、高血糖5.6%対0%、口内炎／粘膜炎5.6%対0%。",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/39476340/",
          "checkedDate": "2026-10-06"
        },
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/39476340/",
        "publicationDateType": "first_online_publication_date",
        "issuePublicationDate": "2024-10-31",
        "resultDateLabel": "原著オンライン公開日（2024-10-30；冊子掲載2024-10-31。データカットオフとは別）"
      }
    ]
  },
  {
    "id": "pallas",
    "name": "PALLAS",
    "phase": "III",
    "design": "無作為化・非盲検（1:1）",
    "setting": "early",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [
      "II",
      "III"
    ],
    "timing": [
      "adjuvant"
    ],
    "lineBuckets": [],
    "population": "手術後のHR陽性/HER2陰性、病期II–III浸潤性乳癌。閉経前後の女性と男性。登録は初回診断12か月以内かつ術後内分泌療法6か月以内。",
    "cardPopulation": "手術後のHR陽性/HER2陰性、病期II–III浸潤性乳癌。閉経前後の女性と男性。登録は初回診断12か月以内かつ術後内分泌療法6か月以内。",
    "experimental": "パルボシクリブ2年＋標準内分泌療法（少なくとも5年）",
    "control": "標準内分泌療法単独",
    "primaryEndpoint": "iDFS",
    "result": "追跡中央値59.8か月・5年推定値：iDFS 84.2%対82.4%、HR 0.88（95% CI 0.77–1.01）、P=0.0614。OS 92.6%対93.2%、HR 1.09（0.89–1.33）、P=0.4051。",
    "caveat": "術後パルボシクリブの利益は示されず。薬剤・期間・集団が異なるmonarchE/NATALEEとの直接比較やCDK4/6阻害薬全体の否定には使わない。",
    "trial_registration": "NCT02513394",
    "publicationDate": "2025-10-17",
    "publicationYear": 2025,
    "publicationDateType": "first_online_publication_date",
    "resultDate": "2025-10-17",
    "resultDateLabel": "掲載解析の原著公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Palbociclib with adjuvant endocrine therapy in early breast cancer: 5-year follow-up analysis of the global multicenter, open-label, randomized phase III PALLAS trial (ABCSG-42/AFT-05/PrE0109/BIG-14-13).",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41110701/",
        "kind": "原著・抄録確認"
      },
      {
        "title": "PALLAS登録（対象・登録期間）",
        "url": "https://clinicaltrials.gov/study/NCT02513394",
        "kind": "試験登録"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。適格条件の補足は明示した試験登録を参照。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/41110701/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [
      {
        "trialId": "pallas",
        "guidelineId": "jbcs-2022-web-2024",
        "organization": "JBCS",
        "section": "薬物療法 CQ6",
        "title": "術後内分泌療法とCDK4/6阻害薬",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq6/",
        "citationEvidence": "参考文献2にPALLAS中間解析（Mayer et al., 2021）を掲載。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "accessMethod": "学会公式WEB版の該当章・参考文献",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/33460574/"
        ],
        "interpretationNote": "後年の更新報告まで引用したという意味ではありません。"
      },
      {
        "trialId": "pallas",
        "guidelineId": "asco-hr-positive-early-living-2026-1-0",
        "organization": "ASCO",
        "section": "Table 5・参考文献68/69",
        "title": "HR陽性/HER2陰性早期乳癌 ASCO Living Guideline 2026.1.0",
        "url": "https://ascopubs.org/doi/pdfdirect/10.1200/JCO-26-02034",
        "citationEvidence": "PALLASを収載試験表に明記。Mayer et al. 2026およびNaughton et al. 2025を引用。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "accessMethod": "公式受理原稿の公開検索抜粋（試験表・参照文献の該当部分のみ）",
        "interpretationNote": "本文全体や最新推奨の全面照合ではなく、記載箇所の引用確認。"
      }
    ],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "agents": [],
    "regimenAgents": [
      "palbociclib",
      "endocrine therapy"
    ],
    "drugClasses": [
      "CDK4/6 inhibitor",
      "endocrine therapy"
    ],
    "stageLabel": "早期浸潤性病期II–III（IIAの登録数制限あり）。",
    "outcomeStatus": "negative",
    "issuePublicationDate": "2026-02",
    "primaryPublication": {
      "date": "2021-01-15",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/33460574/",
      "note": "初回iDFS中間解析原著。2020年学会発表と後年更新とは区別。"
    },
    "reports": [
      {
        "id": "pallas-primary-2021",
        "label": "プロトコール規定の最終iDFS解析",
        "publicationDate": "2021-12-07",
        "resultDate": "2021-12-07",
        "result": "中央値31か月追跡、4年iDFS 84.2%対84.5%、HR 0.96（95% CI 0.81–1.14）、P=0.65。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/34874182/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。適格条件の補足は明示した試験登録を参照。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/34874182/",
          "checkedDate": "2026-10-06"
        },
        "publicationDateType": "first_online_publication_date"
      }
    ]
  },
  {
    "id": "penelope-b",
    "name": "PENELOPE-B",
    "phase": "III",
    "design": "無作為化・二重盲検・プラセボ対照（1:1）",
    "setting": "early",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [
      "adjuvant"
    ],
    "lineBuckets": [],
    "population": "タキサンを含む術前化学療法後に浸潤癌が残存するHR陽性/HER2陰性乳癌1,250例。高リスクはCPS-EG≥3、またはCPS-EG=2かつypN陽性。",
    "cardPopulation": "タキサンを含む術前化学療法後に浸潤癌が残存するHR陽性/HER2陰性乳癌1,250例。高リスクはCPS-EG≥3、またはCPS-EG=2かつypN陽性。",
    "experimental": "パルボシクリブ13サイクル（約1年）＋内分泌療法",
    "control": "プラセボ＋内分泌療法",
    "primaryEndpoint": "iDFS；掲載解析は最終OS・長期追跡",
    "result": "中央値77.8か月：6年OS 82.4%対80.3%、HR 0.87（95% CI 0.67–1.14）、P=0.31。iDFSなどにも有意な改善なし。",
    "caveat": "術前化学療法後残存かつCPS-EGで選択した集団。小葉癌などの後付けサブグループ所見は仮説生成的で適応選択を確立しない。",
    "trial_registration": "NCT01864746",
    "publicationDate": "2025-03-24",
    "publicationYear": 2025,
    "publicationDateType": "first_online_publication_date",
    "resultDate": "2025-03-24",
    "resultDateLabel": "掲載解析の原著公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Final survival results from the PENELOPE-B trial investigating palbociclib versus placebo for patients with high-risk HR+/HER2- breast cancer and residual disease after neoadjuvant chemotherapy.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/40139460/",
        "kind": "原著・抄録確認"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。適格条件の補足は明示した試験登録を参照。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/40139460/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [
      {
        "trialId": "penelope-b",
        "guidelineId": "jbcs-2022-web-2024",
        "organization": "JBCS",
        "section": "薬物療法 CQ6",
        "title": "術後内分泌療法とCDK4/6阻害薬",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq6/",
        "citationEvidence": "参考文献3にPENELOPE-B原著（Loibl et al., 2021）を掲載。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "accessMethod": "学会公式WEB版の該当章・参考文献",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/33793299/"
        ],
        "interpretationNote": "後年の更新報告まで引用したという意味ではありません。"
      }
    ],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "agents": [],
    "regimenAgents": [
      "palbociclib",
      "endocrine therapy"
    ],
    "drugClasses": [
      "CDK4/6 inhibitor",
      "endocrine therapy"
    ],
    "stageLabel": "術前化学療法後残存。初診時病期を一律II–IIIと推定せず、CPS-EG/ypN条件で表示。",
    "outcomeStatus": "negative",
    "primaryPublication": {
      "date": "2021-04-01",
      "precision": "day",
      "sourceUrl": "https://ascopubs.org/doi/10.1200/JCO.20.03639",
      "note": "初回iDFS主要原著の出版社オンライン公開日。2025年最終OSではない。"
    },
    "reports": []
  },
  {
    "id": "impassion031",
    "name": "IMpassion031",
    "phase": "III",
    "design": "術前は無作為化・二重盲検・プラセボ対照（1:1）；術後アテゾリズマブは非盲検",
    "setting": "early",
    "subtypes": [
      "TNBC"
    ],
    "stages": [
      "II",
      "III"
    ],
    "timing": [
      "neoadjuvant",
      "adjuvant"
    ],
    "lineBuckets": [],
    "population": "未治療TNBC、臨床病期II–III、原発腫瘍>2 cm（cT2–T4、cN0–N3、M0）、ECOG PS 0–1。PD-L1陽性は必須でない。333例。",
    "cardPopulation": "未治療TNBC、臨床病期II–III、原発腫瘍>2 cm（cT2–T4、cN0–N3、M0）、ECOG PS 0–1。PD-L1陽性は必須でない。333例。",
    "experimental": "術前アテゾリズマブ＋nab-パクリタキセル→dose-dense AC、術後アテゾリズマブ11サイクル",
    "control": "術前プラセボ＋同じ化学療法；術後の割付プラセボ投与なし",
    "primaryEndpoint": "pCR（ITTおよびPD-L1陽性集団）",
    "result": "ITTのpCRは58%対41%で規定閾値を達成。2025年最終追跡：EFS HR 0.76（95% CI 0.47–1.21）、OS HR 0.56（0.30–1.04）。生存評価は記述的副次解析。",
    "caveat": "共同主要評価のPD-L1陽性集団pCRは69%対49%、P=0.021で閾値0.0184未達。生存評価の検出力を持たずEFS/OSのCIは1を含む。術前・術後各々の寄与は分離できない。",
    "trial_registration": "NCT03197935",
    "publicationDate": "2025-06-04",
    "publicationYear": 2025,
    "publicationDateType": "first_online_publication_date",
    "resultDate": "2025-06-04",
    "resultDateLabel": "掲載解析の原著公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Peri-operative atezolizumab in early-stage triple-negative breast cancer: final results and ctDNA analyses from the randomized phase 3 IMpassion031 trial",
        "url": "https://www.nature.com/articles/s41591-025-03725-4",
        "kind": "原著・本文確認"
      },
      {
        "title": "Neoadjuvant atezolizumab in combination with sequential nab-paclitaxel and anthracycline-based chemotherapy versus placebo and chemotherapy in patients with early-stage triple-negative breast cancer (IMpassion031): a randomised, double-blind, phase 3 trial.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/32966830/",
        "kind": "原著・主要pCR抄録確認"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "2025年最終追跡原著のMethods・Resultsを本文確認。2020年共同主要pCRの統計的詳細は別報告欄の原著抄録に基づく。",
      "sourceUrl": "https://www.nature.com/articles/s41591-025-03725-4",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [
      {
        "trialId": "impassion031",
        "guidelineId": "jbcs-2022-web-2024",
        "organization": "JBCS",
        "section": "薬物療法 CQ16",
        "title": "周術期TNBCの免疫チェックポイント阻害薬",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq16/",
        "citationEvidence": "参考文献1にIMpassion031の主解析（2020）を掲載。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "accessMethod": "学会公式WEB版の該当章・参考文献",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/32966830/"
        ],
        "interpretationNote": "後年の更新報告まで引用したという意味ではありません。"
      }
    ],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "agents": [],
    "regimenAgents": [
      "atezolizumab",
      "nab-paclitaxel",
      "doxorubicin",
      "cyclophosphamide"
    ],
    "drugClasses": [
      "PD-L1 inhibitor",
      "chemotherapy"
    ],
    "stageLabel": "術前登録時の臨床病期。cT1N+は本試験の対象外。",
    "outcomeStatus": "positive_primary_survival_descriptive",
    "dataCutoff": "2022-09-28",
    "primaryPublication": {
      "date": "2020-09-20",
      "precision": "day"
    },
    "reports": [
      {
        "id": "impassion031-primary-pcr-2020",
        "label": "共同主要pCR解析",
        "publicationDate": "2020-09-20",
        "resultDate": "2020-09-20",
        "publicationDateType": "first_online_publication_date",
        "result": "ITT pCR 58%対41%、片側P=0.0044で有意境界0.0184を達成。PD-L1陽性pCR 69%対49%、片側P=0.021で同境界未達。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/32966830/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "主要pCR報告の本文未確認。PubMed一次論文抄録で数値と共同主要評価の有意境界を確認。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/32966830/",
          "checkedDate": "2026-10-06"
        }
      }
    ]
  },
  {
    "id": "alexandra-impassion030",
    "name": "ALEXANDRA / IMpassion030",
    "phase": "III",
    "design": "無作為化・非盲検（1:1）",
    "setting": "early",
    "subtypes": [
      "TNBC"
    ],
    "stages": [
      "II",
      "III"
    ],
    "timing": [
      "adjuvant"
    ],
    "lineBuckets": [],
    "population": "初回治療として手術を受けた病期II–IIIのTNBC2,199例。N0例は病理腫瘍径≥2 cm。T4および現在の乳癌に対する術前全身療法歴は除外。",
    "cardPopulation": "初回治療として手術を受けた病期II–IIIのTNBC2,199例。N0例は病理腫瘍径≥2 cm。T4および現在の乳癌に対する術前全身療法歴は除外。",
    "experimental": "術後アテゾリズマブ＋タキサン／アントラサイクリン化学療法、アテゾリズマブ計1年",
    "control": "同じ術後化学療法のみ",
    "primaryEndpoint": "iDFS",
    "result": "追跡中央値32か月：iDFS HR 1.11（95% CI 0.87–1.42）、P=0.38。3年iDFS 84.6%対86.4%。無益性判定後にアテゾリズマブを中止。",
    "caveat": "手術先行後の術後追加という試験。KEYNOTE-522の周術期ペムブロリズマブや術前療法後残存病変の試験と同一条件ではない。",
    "trial_registration": "NCT03498716",
    "publicationDate": "2025-01-30",
    "publicationYear": 2025,
    "publicationDateType": "first_online_publication_date",
    "resultDate": "2025-01-30",
    "resultDateLabel": "掲載解析の原著公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Adjuvant Atezolizumab for Early Triple-Negative Breast Cancer: The ALEXANDRA/IMpassion030 Randomized Clinical Trial.",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11783246/",
        "kind": "原著・本文確認"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "原著本文の対象・方法・掲載結果の該当箇所を確認。",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11783246/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "agents": [],
    "regimenAgents": [
      "atezolizumab",
      "paclitaxel",
      "doxorubicin",
      "epirubicin",
      "cyclophosphamide"
    ],
    "drugClasses": [
      "PD-L1 inhibitor",
      "chemotherapy"
    ],
    "stageLabel": "初回手術時の病期II–III。術前薬物療法を受けた集団ではない。",
    "safety": "治療関連Grade 3–4有害事象54%対44%、治療関連重篤有害事象19%対10%。",
    "outcomeStatus": "negative",
    "primaryPublication": {
      "date": "2025-01-30",
      "precision": "day",
      "sourceUrl": "https://jamanetwork.com/journals/jama/fullarticle/2829800",
      "note": "初回iDFS主要結果原著。"
    },
    "reports": []
  },
  {
    "id": "nsabp-b59-gepardouze",
    "name": "NSABP B-59 / GeparDouze",
    "phase": "III",
    "design": "無作為化・二重盲検・プラセボ対照（1:1）",
    "setting": "early",
    "subtypes": [
      "TNBC"
    ],
    "stages": [
      "II",
      "III"
    ],
    "timing": [
      "neoadjuvant",
      "adjuvant"
    ],
    "lineBuckets": [],
    "population": "中央判定TNBC、臨床病期II–III、1,550例。N+ではcT1c–T3、N0ではcT2–T3。ER/PgR<1%かつHER2陰性。",
    "cardPopulation": "中央判定TNBC、臨床病期II–III、1,550例。N+ではcT1c–T3、N0ではcT2–T3。ER/PgR<1%かつHER2陰性。",
    "experimental": "術前アテゾリズマブ＋タキサン／カルボプラチン→アントラサイクリン／シクロホスファミド、術後アテゾリズマブ（計1年）",
    "control": "同じ化学療法＋プラセボ、術後プラセボ",
    "primaryEndpoint": "EFS",
    "result": "4年EFS 85.2%対81.9%、HR 0.800（95% CI 0.621–1.030）、P=0.083で主要評価未達。pCRは63.3%対57.0%（副次評価）。",
    "caveat": "pCRの増加をEFS優越性の証明と扱わない。TIL高値・N+などの探索的所見は選択バイオマーカーを確立しない。抄録のEFS CI下限0.062は本文の0.621と不一致のため本文を採用。",
    "trial_registration": "NCT03281954",
    "publicationDate": "2026-09-01",
    "publicationYear": 2026,
    "publicationDateType": "first_online_publication_date",
    "resultDate": "2026-09-01",
    "resultDateLabel": "掲載解析の原著公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Atezolizumab in early triple-negative breast cancer: the randomized phase 3 NSABP B-59/GeparDouze trial",
        "url": "https://www.nature.com/articles/s41591-026-04565-6",
        "kind": "原著・本文該当箇所確認（公開検索索引）"
      },
      {
        "title": "同論文PubMedレコード",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42680950/",
        "kind": "原著・抄録"
      }
    ],
    "articleEvidence": {
      "status": "body_excerpt_only",
      "label": "原著論文未確認（抄録・本文抜粋ベース）",
      "note": "出版社公式ページの公開検索索引からMethods・Results・Discussionの掲載該当箇所を確認。ページ全体の直接取得は失敗。全文PDFを閲読済みとは扱わない。",
      "sourceUrl": "https://www.nature.com/articles/s41591-026-04565-6",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "agents": [],
    "regimenAgents": [
      "atezolizumab",
      "paclitaxel",
      "carboplatin",
      "doxorubicin",
      "epirubicin",
      "cyclophosphamide"
    ],
    "drugClasses": [
      "PD-L1 inhibitor",
      "chemotherapy"
    ],
    "stageLabel": "術前登録時cT1c–T3 N1–3、またはcT2–T3 N0。T4は含まない。",
    "safety": "Grade≥3治療中有害事象75.3%対73.4%、免疫関連有害事象27.6%対11.4%。",
    "outcomeStatus": "negative",
    "safetyEvidence": {
      "status": "body_excerpt_only",
      "label": "原著論文未確認（抄録・本文抜粋ベース）",
      "note": "出版社公式ページの公開検索索引からMethods・Results・Discussionの掲載該当箇所を確認。ページ全体の直接取得は失敗。全文PDFを閲読済みとは扱わない。",
      "sourceUrl": "https://www.nature.com/articles/s41591-026-04565-6",
      "checkedDate": "2026-10-06"
    },
    "primaryPublication": {
      "date": "2026-09-01",
      "precision": "day",
      "sourceUrl": "https://www.nature.com/articles/s41591-026-04565-6",
      "note": "初回EFS主要結果原著の出版社公開日。先行する学会発表とは区別。"
    },
    "reports": []
  },
  {
    "id": "nsabp-b42",
    "name": "NRG Oncology / NSABP B-42",
    "phase": "III",
    "design": "無作為化・二重盲検・プラセボ対照（1:1）",
    "setting": "early",
    "subtypes": [
      "HR+/HER2-",
      "HER2+"
    ],
    "stages": [
      "I",
      "II",
      "III"
    ],
    "timing": [
      "adjuvant"
    ],
    "lineBuckets": [],
    "population": "閉経後HR陽性、診断時病期I–IIIA。AIを含む術後内分泌療法5年終了後に無病（AI単独、またはタモキシフェン≤3年→AI）。HER2陰性を必須としない。",
    "cardPopulation": "閉経後HR陽性、診断時病期I–IIIA。AIを含む術後内分泌療法5年終了後に無病（AI単独、またはタモキシフェン≤3年→AI）。HER2陰性を必須としない。",
    "experimental": "レトロゾールをさらに5年",
    "control": "プラセボ5年",
    "primaryEndpoint": "DFS（乳癌再発・第二原発癌・全死亡を含む）",
    "result": "10年更新：DFS 75.9%対72.6%、HR 0.85（95% CI 0.74–0.96）、P=0.01。OS HR 0.97（0.82–1.15）、P=0.74。",
    "caveat": "10年更新はプロトコールで事前規定されていなかった。初回解析はP=0.048で調整後閾値0.0418未達。DFSには非乳癌イベントを含み、OS利益は認めない。",
    "trial_registration": "NCT00382070",
    "publicationDate": "2023-05-15",
    "publicationYear": 2023,
    "publicationDateType": "first_online_publication_date",
    "resultDate": "2023-05-15",
    "resultDateLabel": "掲載解析の原著公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Ten-year update: NRG Oncology/National Surgical Adjuvant Breast and Bowel Project B-42 randomized trial: extended letrozole therapy in early-stage breast cancer.",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10637036/",
        "kind": "原著・本文確認"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "原著本文の対象・方法・掲載結果の該当箇所を確認。",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10637036/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [
      {
        "trialId": "nsabp-b42",
        "guidelineId": "asco-hr-positive-early-living-2026-1-0",
        "organization": "ASCO",
        "section": "Table 4・参考文献44/45",
        "title": "HR陽性/HER2陰性早期乳癌 ASCO Living Guideline 2026.1.0",
        "url": "https://ascopubs.org/doi/pdfdirect/10.1200/JCO-26-02034",
        "citationEvidence": "B-42主解析（2019）と10年更新（2023）を引用。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "accessMethod": "公式受理原稿の公開検索抜粋（試験表・参照文献の該当部分のみ）",
        "interpretationNote": "本文全体や最新推奨の全面照合ではなく、記載箇所の引用確認。"
      },
      {
        "trialId": "nsabp-b42",
        "guidelineId": "jbcs-2022-web-2024",
        "organization": "JBCS",
        "section": "薬物療法 CQ4",
        "title": "術後内分泌療法の延長",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq4/",
        "citationEvidence": "参考文献11にNRG Oncology/NSABP B-42（2019）を掲載。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "accessMethod": "学会公式WEB版の該当章・参考文献",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/30509771/"
        ],
        "interpretationNote": "後年の更新報告まで引用したという意味ではありません。"
      }
    ],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "agents": [],
    "regimenAgents": [
      "letrozole"
    ],
    "drugClasses": [
      "aromatase inhibitor"
    ],
    "stageLabel": "診断時I–IIIAに限定。内分泌療法5年終了後の無病時に登録。",
    "safety": "10年更新では骨粗鬆症性骨折・動脈血栓イベントの群間有意差なし。",
    "outcomeStatus": "positive_long_term_update",
    "primaryPublication": {
      "date": "2018-11-30",
      "precision": "day"
    },
    "reports": [
      {
        "id": "nsabp-b42-primary-2018",
        "label": "初回主要DFS解析（7年）",
        "publicationDate": "2018-11-30",
        "resultDate": "2018-11-30",
        "result": "DFS HR 0.85、P=0.048。中間解析を考慮した有意水準0.0418を満たさず。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/30509771/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。適格条件の補足は明示した試験登録を参照。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/30509771/",
          "checkedDate": "2026-10-06"
        },
        "publicationDateType": "first_online_publication_date"
      }
    ]
  },
  {
    "id": "astrra",
    "name": "ASTRRA",
    "phase": "III",
    "design": "無作為化・非盲検（1:1）；化学療法後の卵巣機能を反復評価",
    "setting": "early",
    "subtypes": [
      "HR+/HER2-",
      "HER2+"
    ],
    "stages": [
      "I",
      "II",
      "III"
    ],
    "timing": [
      "adjuvant"
    ],
    "lineBuckets": [],
    "population": "診断時病期I–III、45歳以下、ER陽性の女性。手術と術前／術後化学療法後、閉経前状態が持続または2年以内に卵巣機能が回復。HER2陰性は必須でない。",
    "cardPopulation": "診断時病期I–III、45歳以下、ER陽性の女性。手術と術前／術後化学療法後、閉経前状態が持続または2年以内に卵巣機能が回復。HER2陰性は必須でない。",
    "experimental": "タモキシフェン5年＋卵巣機能抑制（ゴセレリン）2年",
    "control": "タモキシフェン5年",
    "primaryEndpoint": "DFS",
    "result": "追跡中央値106.4か月：8年DFS 85.4%対80.2%、HR 0.67（95% CI 0.51–0.87）。OS 96.5%対95.3%、HR 0.78（0.49–1.25）。",
    "caveat": "化学療法後に卵巣機能が確認された若年女性の試験。OFS期間は2年でSOFT/TEXTの5年と同一ではなく、AI＋OFSとの比較もしていない。",
    "trial_registration": "NCT00912548",
    "publicationDate": "2023-08-22",
    "publicationYear": 2023,
    "publicationDateType": "first_online_publication_date",
    "resultDate": "2023-08-22",
    "resultDateLabel": "掲載解析の原著公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Adding Ovarian Suppression to Tamoxifen for Premenopausal Women With Hormone Receptor-Positive Breast Cancer After Chemotherapy: An 8-Year Follow-Up of the ASTRRA Trial.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/37607321/",
        "kind": "原著・抄録確認"
      },
      {
        "title": "ASTRRA登録（45歳以下・病期・卵巣機能）",
        "url": "https://clinicaltrials.gov/study/NCT00912548",
        "kind": "試験登録"
      },
      {
        "title": "ASTRRA試験計画",
        "url": "https://pubmed.ncbi.nlm.nih.gov/27197523/",
        "kind": "原著・プロトコール抄録"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。適格条件の補足は明示した試験登録を参照。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/37607321/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [
      {
        "trialId": "astrra",
        "guidelineId": "asco-hr-positive-early-living-2026-1-0",
        "organization": "ASCO",
        "section": "Table 4・参考文献37",
        "title": "HR陽性/HER2陰性早期乳癌 ASCO Living Guideline 2026.1.0",
        "url": "https://ascopubs.org/doi/pdfdirect/10.1200/JCO-26-02034",
        "citationEvidence": "ASTRRAの8年追跡（Baek et al., 2023）を引用。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "accessMethod": "公式受理原稿の公開検索抜粋（試験表・参照文献の該当部分のみ）",
        "interpretationNote": "本文全体や最新推奨の全面照合ではなく、記載箇所の引用確認。"
      }
    ],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "agents": [],
    "regimenAgents": [
      "tamoxifen",
      "goserelin"
    ],
    "drugClasses": [
      "SERM",
      "ovarian function suppression"
    ],
    "stageLabel": "初回診断時I–III。無作為化の条件は化学療法後の卵巣機能確認。",
    "outcomeStatus": "positive",
    "eligibilityNote": "2023年抄録はyounger than 45と表現。試験登録の明記は≤45歳であり、このカードの年齢は登録条件に従う。",
    "primaryPublication": {
      "date": "2019-09-16",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/31518174/",
      "note": "初回DFS主要原著のオンライン先行公開。冊子2020年2月、2023年8年追跡とは区別。cutoffより前。"
    },
    "reports": []
  },
  {
    "id": "positive",
    "name": "POSITIVE（IBCSG 48-14）",
    "phase": "N/A",
    "design": "前向き単群介入試験；SOFT/TEXT外部対照とマッチング比較",
    "setting": "early",
    "subtypes": [
      "HR+/HER2-",
      "HER2+"
    ],
    "stages": [
      "I",
      "II",
      "III"
    ],
    "timing": [
      "adjuvant"
    ],
    "lineBuckets": [],
    "population": "登録時に無再発の女性。42歳以下、HR陽性、診断時病期I–IIIで術後内分泌療法を18–30か月受け、妊娠のため中断を希望。HER2陽性も含む。",
    "cardPopulation": "登録時に無再発の女性。42歳以下、HR陽性、診断時病期I–IIIで術後内分泌療法を18–30か月受け、妊娠のため中断を希望。HER2陽性も含む。",
    "experimental": "内分泌療法を最大2年一時中断（妊娠試行前に3か月washout）、その後再開して計5–10年を目指す",
    "control": "同時無作為化対照なし；適格条件を合わせたSOFT/TEXT外部対照",
    "primaryEndpoint": "BCFI（乳癌イベントまでの期間）",
    "result": "2026年更新：追跡中央値71か月。5年BCFIイベント12.3%対外部対照13.2%、差−0.9ポイント（95% CI −4.2〜2.6）。追跡497例の76%に妊娠、69%に生児出産。",
    "caveat": "単群・外部対照であり無作為化非劣性試験ではない。選択バイアスと長期再発の不確実性が残る。永続的な内分泌療法中止の安全性を検証していない。",
    "trial_registration": "NCT02308085",
    "publicationDate": "2026-05-28",
    "publicationYear": 2026,
    "publicationDateType": "first_online_publication_date",
    "resultDate": "2026-05-28",
    "resultDateLabel": "掲載解析の原著公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Updated Results of the POSITIVE (Pregnancy Outcome and Safety of Interrupting Therapy for Women with Endocrine Responsive Breast Cancer) Trial",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13501236/",
        "kind": "原著・本文確認"
      },
      {
        "title": "POSITIVE登録（phase N/A、単群）",
        "url": "https://clinicaltrials.gov/study/NCT02308085",
        "kind": "試験登録"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "原著本文の対象・方法・掲載結果の該当箇所を確認。",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13501236/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "agents": [],
    "regimenAgents": [
      "endocrine therapy interruption"
    ],
    "drugClasses": [
      "endocrine therapy"
    ],
    "stageLabel": "原発診断時I–III。内分泌療法18–30か月後の中断時に登録。",
    "outcomeStatus": "single_arm_external_comparator",
    "phaseNote": "ClinicalTrials.govのphaseはNot Applicable。重要な前向き臨床研究として収載し、第II相／第III相に誤分類しない。",
    "primaryPublication": {
      "date": "2023",
      "precision": "year",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/37133584/",
      "note": "初回主要結果原著。2026年更新ではない。"
    },
    "reports": []
  },
  {
    "id": "sysucc-001",
    "name": "SYSUCC-001",
    "phase": "III",
    "design": "無作為化・非盲検（1:1）",
    "setting": "early",
    "subtypes": [
      "TNBC"
    ],
    "stages": [],
    "timing": [
      "adjuvant"
    ],
    "lineBuckets": [],
    "population": "中国13施設、TNBC、T1b–T3 N0–N3c M0で標準治療を完了。443例を無作為化、割付介入を開始した434例を主要解析。術前治療後残存のみの選択ではない。",
    "cardPopulation": "中国13施設、TNBC、T1b–T3 N0–N3c M0で標準治療を完了。443例を無作為化、割付介入を開始した434例を主要解析。術前治療後残存のみの選択ではない。",
    "experimental": "低用量カペシタビン650 mg/m²、1日2回連日投与を1年",
    "control": "経過観察",
    "primaryEndpoint": "DFS",
    "result": "2025年10年更新（後付け解析）：DFS 78.1%対66.6%、HR 0.61（95% CI 0.43–0.88）、P=0.0074。OS 82.4%対73.7%、HR 0.67（0.45–1.01）、P=0.058。 OSに統計学的有意差なし。",
    "caveat": "10年更新とFOXC1解析は後付け。FOXC1は確立した選択バイオマーカーではない。CREATE-Xの術前療法後残存・間欠投与とは対象と用法が異なる。",
    "trial_registration": "NCT01112826",
    "publicationDate": "2025-12",
    "publicationYear": 2025,
    "publicationDateType": "issue_publication_month",
    "resultDate": "2025-12",
    "resultDateLabel": "原著冊子掲載月（2025年12月。初回オンライン公開日の正確な日付は本監査で未確定）",
    "sources": [
      {
        "title": "Metronomic capecitabine as extended adjuvant chemotherapy for early triple-negative breast cancer (SYSUCC-001): updated 10-year outcomes and post-hoc exploratory biomarker analysis from a randomised, phase 3 trial.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41308674/",
        "kind": "原著・抄録確認"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。適格条件の補足は明示した試験登録を参照。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/41308674/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "agents": [],
    "regimenAgents": [
      "capecitabine"
    ],
    "drugClasses": [
      "chemotherapy"
    ],
    "stageLabel": "登録のTNMはT1b–T3 N0–N3c M0。病期を一律に推定しない。",
    "outcomeStatus": "positive_long_term_update",
    "dataCutoff": "2025-03-31",
    "primaryPublication": {
      "date": "2020-12-10",
      "precision": "day",
      "sourceUrl": "https://jamanetwork.com/journals/jama/fullarticle/2774295",
      "note": "初回DFS主要原著のオンライン公開日。冊子2021年1月、2025年10年更新ではない。"
    },
    "reports": []
  },
  {
    "id": "geparnuevo",
    "name": "GeparNuevo",
    "phase": "II",
    "design": "無作為化・二重盲検・プラセボ対照",
    "setting": "early",
    "subtypes": [
      "TNBC"
    ],
    "stages": [],
    "timing": [
      "neoadjuvant"
    ],
    "lineBuckets": [],
    "population": "早期TNBC、cT1b–cT4a–d、174例。術前nab-パクリタキセル→dose-dense ECにdurvalumabまたはプラセボを併用。",
    "cardPopulation": "早期TNBC、cT1b–cT4a–d、174例。術前nab-パクリタキセル→dose-dense ECにdurvalumabまたはプラセボを併用。",
    "experimental": "術前デュルバルマブ＋化学療法（術後の免疫療法継続なし）",
    "control": "術前プラセボ＋同じ化学療法",
    "primaryEndpoint": "pCR；長期iDFS/DDFS/OSは副次評価",
    "result": "主要pCRは53.4%対44.2%、P=0.287で未達。2026年長期追跡（中央値86.4か月）：iDFS HR 0.56（95% CI 0.32–0.99）、OS HR 0.33（0.14–0.79）。",
    "caveat": "小規模第II相で主要pCR未達、生存結果は副次評価。術前のみの投与であり、KEYNOTE-522後の術後ペムブロリズマブ省略を直接検証していない。",
    "trial_registration": "NCT02685059",
    "publicationDate": "2026-04-20",
    "publicationYear": 2026,
    "publicationDateType": "first_online_publication_date",
    "resultDate": "2026-04-20",
    "resultDateLabel": "掲載解析の原著公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Durvalumab in Combination With Neoadjuvant Chemotherapy in Early Triple-Negative Breast Cancer: Long-Term Analysis From the GeparNuevo Trial.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42008768/",
        "kind": "原著・抄録確認"
      },
      {
        "title": "A randomised phase II study investigating durvalumab ... GeparNuevo study",
        "url": "https://pubmed.ncbi.nlm.nih.gov/31095287/",
        "kind": "原著・主要pCR抄録"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。適格条件の補足は明示した試験登録を参照。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42008768/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "agents": [],
    "regimenAgents": [
      "durvalumab",
      "nab-paclitaxel",
      "epirubicin",
      "cyclophosphamide"
    ],
    "drugClasses": [
      "PD-L1 inhibitor",
      "chemotherapy"
    ],
    "stageLabel": "cT1b–cT4a–dを含む。病期II–IIIだけの試験と表示しない。",
    "outcomeStatus": "negative_primary_positive_secondary",
    "primaryPublication": {
      "date": "2019-05-16",
      "precision": "day",
      "sourceUrl": "https://academic.oup.com/annonc/article-abstract/30/8/1279/5490226",
      "note": "初回pCR主要原著の出版社公開日。冊子2019-08-01、2026年長期追跡とは区別。"
    },
    "reports": []
  },
  {
    "id": "phergain",
    "name": "PHERGain",
    "phase": "II",
    "design": "無作為化・非盲検（A:B=1:4）；戦略群の主要評価",
    "setting": "early",
    "subtypes": [
      "HER2+"
    ],
    "stages": [
      "I",
      "II",
      "III"
    ],
    "timing": [
      "neoadjuvant",
      "adjuvant"
    ],
    "lineBuckets": [],
    "population": "中央判定HER2陽性、手術可能な病期I–IIIA、PET評価可能病変を持つ356例。",
    "cardPopulation": "中央判定HER2陽性、手術可能な病期I–IIIA、PET評価可能病変を持つ356例。",
    "experimental": "B群：HP±内分泌療法で開始。2サイクル後PET非奏効はTCHPへ変更。PET奏効でも非pCRなら術後TCHPを追加",
    "control": "A群：術前TCHP。両群でHPを計18サイクルまで",
    "primaryEndpoint": "B群PET奏効例のpCR；B群全体の3年iDFS",
    "result": "B群の3年iDFS 94.8%（95% CI 91.4–97.1）、中央値43.3か月追跡で規定の主要評価を達成。",
    "caveat": "PET/pCRで化学療法を救済追加する戦略。B群全員が化学療法を省略したわけではない。群間の化学療法省略の非劣性を確立した第III相試験ではない。",
    "trial_registration": "NCT03161353",
    "publicationDate": "2024-04-03",
    "publicationYear": 2024,
    "publicationDateType": "first_online_publication_date",
    "resultDate": "2024-04-03",
    "resultDateLabel": "掲載解析の原著公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "3-year invasive disease-free survival with chemotherapy de-escalation using an 18F-FDG-PET-based, pathological complete response-adapted strategy in HER2-positive early breast cancer (PHERGain): a randomised, open-label, phase 2 trial.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/38582092/",
        "kind": "原著・抄録確認"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。適格条件の補足は明示した試験登録を参照。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/38582092/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "agents": [],
    "regimenAgents": [
      "trastuzumab",
      "pertuzumab",
      "docetaxel",
      "carboplatin",
      "endocrine therapy"
    ],
    "drugClasses": [
      "HER2 antibody",
      "chemotherapy",
      "endocrine therapy"
    ],
    "stageLabel": "術前の病期I–IIIA、PET評価可能病変が必要。IIIB/IIICに外挿しない。",
    "safety": "治療関連Grade≥3有害事象A群62%、B群33%。",
    "outcomeStatus": "strategy_primary_met",
    "dataCutoff": "2022-11-04",
    "primaryPublication": {
      "date": "2021-05-18",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/34019819/",
      "note": "初回pCR主要評価の原著。2024年3年iDFS報告より前。"
    },
    "reports": []
  },
  {
    "id": "patina",
    "name": "PATINA",
    "phase": "III",
    "design": "無作為化・非盲検（1:1）",
    "setting": "metastatic",
    "subtypes": [
      "HER2+"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "治癒目的の切除・放射線治療が困難な進行乳癌／転移性乳癌。導入治療中の増悪例は対象外。",
    "lineBuckets": [
      "firstline"
    ],
    "lineLabel": "一次治療の導入後維持療法",
    "population": "18歳以上のHR陽性/HER2陽性進行乳癌518例。一次導入化学療法＋抗HER2療法4–8サイクル後にCR・PR・SDで、維持療法開始時に261対257例へ無作為化。転移性乳癌への全身治療歴は導入療法のみ。周術期抗HER2療法歴がある場合は、その終了から転移診断まで6か月以上。導入最終投与から試験治療開始まで12週以内。無症候性CNS転移は参加可能。",
    "cardPopulation": "HR陽性/HER2陽性。一次導入化学療法＋抗HER2療法4–8サイクル後に増悪のない518例を対象とした維持療法。",
    "experimental": "パルボシクリブ＋トラスツズマブ（±ペルツズマブ）＋内分泌療法（アロマターゼ阻害薬またはフルベストラント）。閉経前は卵巣機能抑制を併用。",
    "control": "トラスツズマブ（±ペルツズマブ）＋同じ内分泌療法選択肢。",
    "primaryEndpoint": "治験責任医師評価PFS（ITT 518例）。起点は導入療法後の無作為化で、病勢進行または全死因死亡まで。",
    "result": "2024-10-14カットオフ、追跡中央値53.5か月。PFSイベント127/261対135/257、PFS中央値44.3対29.1か月、HR 0.75（95% CI 0.59–0.96）、非層別・両側P=0.02。副次評価のOSは死亡60対63例、HR 0.86（95% CI 0.61–1.23）で未成熟。最終OS解析は247死亡を予定し、この時点で生存期間延長は確立していない。確認奏効率は32.9%（76/231）対24.8%（57/230）：導入後CR例を除いた解析で、無作為化全例を分母としない。",
    "caveat": "非盲検かつ治験責任医師評価。導入治療で病勢制御を得た集団であり、導入開始を起点とする他試験のPFS中央値とは直接比較できない。最終PFS解析は予定269イベントに対し262イベントで実施。94.0%が抗HER2二剤、90.7%がアロマターゼ阻害薬を受けており、少数のフルベストラント群・単剤抗HER2群などのサブグループに十分な検出力はない。副次評価の信頼区間は多重性未調整。人種の多様性は限定的。患者報告アウトカム・新規CNS転移の発症に関する結果はこの原著では未報告。",
    "trial_registration": "NCT02947685",
    "publicationDate": "2026-01-28",
    "publicationYear": 2026,
    "publicationDateType": "online_first",
    "resultDate": "2024-10-14",
    "resultDateLabel": "原著に記載されたデータカットオフ",
    "sources": [
      {
        "title": "Metzger et al. PATINA 原著（N Engl J Med 2026;394:451–462、2026-03-27更新版）",
        "url": "https://doi.org/10.1056/NEJMoa2511218",
        "publicationDate": "2026-01-28",
        "updatedDate": "2026-03-27",
        "kind": "原著・本文確認（提供PDF）",
        "evidenceStatus": "full_text_checked",
        "checkedDate": "2026-10-07"
      },
      {
        "title": "Palbociclib for Hormone-Receptor-Positive, HER2-Positive Advanced Breast Cancer",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41604639/",
        "publicationDate": "2026-01-28",
        "kind": "原著・抄録確認",
        "evidenceStatus": "abstract_only",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "Palbociclib for Hormone-Receptor–Positive, HER2-Positive Advanced Breast Cancer（出版社公開日）",
        "url": "https://www.nejm.org/doi/abs/10.1056/NEJMoa2511218",
        "publicationDate": "2026-01-28",
        "kind": "原著・抄録確認",
        "evidenceStatus": "abstract_only",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "PMDA イブランス錠 電子添文 2026年9月改訂 第5版",
        "url": "https://www.pmda.go.jp/PmdaSearch/iyakuDetail/ResultDataSetPDF/672212_4291051F1022_2_06",
        "kind": "国内承認の一次資料",
        "publicationDate": "2026-09",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "ファイザー公式 2026年9月16日 適応拡大承認発表",
        "url": "https://www.pfizer.co.jp/pfizer/company/press/2026/2026-09-16-02",
        "kind": "国内承認の一次資料",
        "publicationDate": "2026-09-16",
        "checkedDate": "2026-10-06"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "原著本文確認済み",
      "note": "提供されたNEJM原著全本文（pp.451–462、2026-03-27更新版）を2026-10-07に確認。本文・図表で対象、解析集団、結果、安全性、限界を照合。補足資料・プロトコル自体は未確認。更新日の記載を新しい追跡解析とみなさず、カットオフは2024-10-14。原著PDF・本文・図表は本アプリに転載せず、独自要約のみを掲載。",
      "sourceUrl": "https://doi.org/10.1056/NEJMoa2511218",
      "checkedDate": "2026-10-07"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-07",
    "checkedTimezone": "Asia/Tokyo",
    "japanApproval": "2026-09-16 適応追加確認（HR陽性/HER2陽性・化学療法後維持療法）",
    "outcomeStatus": "positive",
    "agents": [
      "fulvestrant"
    ],
    "regimenAgents": [
      "palbociclib",
      "trastuzumab",
      "pertuzumab",
      "fulvestrant",
      "aromatase inhibitor"
    ],
    "drugClasses": [
      "CDK4/6 inhibitor",
      "HER2 antibody",
      "SERD",
      "aromatase inhibitor"
    ],
    "safety": "安全性集団は1回以上投与された261対248例（対照群の未投与9例を除外）。Grade 3 AEは79.7%対30.6%、Grade 4 AEは10.0%対3.6%。Grade ≥3好中球減少は60.5%（158/261）対2.0%（5/248）；55.9%はパルボシクリブ群のGrade 3のみの値。発熱性好中球減少は同群2例。Grade ≥3下痢は9.6%対1.2%。パルボシクリブの減量57.7%、有害事象による同薬中止18.0%。重篤な有害事象は28.7%対21.8%。治験責任医師が治療関連と判定した死亡は両群0例。",
    "safetyEvidence": {
      "status": "full_text_checked",
      "label": "原著本文確認済み",
      "note": "原著本文pp.455、459およびTable 2（p.460）を確認。安全性の分母は261対248例。補足資料自体は未確認。",
      "sourceUrl": "https://doi.org/10.1056/NEJMoa2511218",
      "checkedDate": "2026-10-07"
    },
    "biomarkers": [
      "HR陽性",
      "HER2陽性"
    ],
    "issuePublicationDate": "2026-01-29",
    "primaryPublication": {
      "date": "2026-01-28",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/41604639/",
      "sourceTitle": "Palbociclib for Hormone-Receptor-Positive, HER2-Positive Advanced Breast Cancer",
      "sourceType": "original_paper",
      "note": "初回主要結果の原著は2026-01-28公開。2026-03-27更新版の全文確認は同一原著の再確認であり、新規試験や独立した追跡報告として数えない。"
    },
    "japanApprovalEvidence": {
      "status": "verified_indication_extension",
      "approvedDate": "2026-09-16",
      "checkedDate": "2026-10-06",
      "drug": "パルボシクリブ（イブランス錠）",
      "indication": "HR陽性かつHER2陽性の手術不能又は再発乳癌における、化学療法後の維持療法。",
      "condition": "化学療法で疾患進行が認められていない患者が対象。前治療歴等の詳細は電子添文17.1.4を参照。",
      "combination": "トラスツズマブ＋内分泌療法剤との併用（ペルツズマブの併用あり／なし）。",
      "scopeNote": "承認情報の確認はこの適応追加に限定。原著の試験結果とは別項目。保険適用・診療報酬上の取扱いは未確認。",
      "sources": [
        {
          "title": "PMDA イブランス錠 電子添文 2026年9月改訂 第5版",
          "url": "https://www.pmda.go.jp/PmdaSearch/iyakuDetail/ResultDataSetPDF/672212_4291051F1022_2_06",
          "edition": "2026年9月改訂 第5版",
          "sections": "4、5.2、5.3、6（前治療の詳細は17.1.4）",
          "checkedDate": "2026-10-06"
        },
        {
          "title": "ファイザー公式 2026年9月16日 適応拡大承認発表",
          "url": "https://www.pfizer.co.jp/pfizer/company/press/2026/2026-09-16-02",
          "publicationDate": "2026-09-16",
          "checkedDate": "2026-10-06"
        }
      ]
    },
    "dataCutoff": "2024-10-14",
    "fullTextVersion": {
      "doi": "10.1056/NEJMoa2511218",
      "pmid": "41604639",
      "journal": "N Engl J Med",
      "volume": 394,
      "issue": 5,
      "pages": "451–462",
      "updatedDate": "2026-03-27",
      "checkedDate": "2026-10-07",
      "accessRoute": "提供された原著PDFの一時閲覧",
      "originalPdfArchived": false,
      "supplementChecked": false,
      "protocolChecked": false
    },
    "analysisDetails": {
      "dataCutoff": "2024-10-14",
      "medianFollowUpMonths": 53.5,
      "comparisonOrder": [
        "palbociclib + anti-HER2 + endocrine therapy",
        "anti-HER2 + endocrine therapy"
      ],
      "efficacyPopulation": {
        "type": "ITT",
        "n": [
          261,
          257
        ]
      },
      "pfs": {
        "events": [
          127,
          135
        ],
        "medianMonths": [
          44.3,
          29.1
        ],
        "median95CI": [
          [
            32.4,
            56.8
          ],
          [
            23.3,
            38.6
          ]
        ],
        "hazardRatio": 0.75,
        "hazardRatio95CI": [
          0.59,
          0.96
        ],
        "twoSidedUnstratifiedP": 0.02,
        "twoSidedStratifiedP": 0.03,
        "plannedEvents": 269,
        "observedEvents": 262,
        "origin": "post-induction randomization"
      },
      "overallSurvival": {
        "secondary": true,
        "deaths": [
          60,
          63
        ],
        "hazardRatio": 0.86,
        "hazardRatio95CI": [
          0.61,
          1.23
        ],
        "maturity": "immature",
        "plannedFinalDeaths": 247
      },
      "confirmedResponse": {
        "secondary": true,
        "numerators": [
          76,
          57
        ],
        "denominators": [
          231,
          230
        ],
        "percentages": [
          32.9,
          24.8
        ],
        "population": "excluding complete response after induction before randomization",
        "confirmation": "at least two consecutive assessments"
      },
      "safetyPopulation": {
        "type": "at least one dose of a protocol-assigned therapy",
        "n": [
          261,
          248
        ]
      },
      "sourceLocators": {
        "methods": "pp.452–454",
        "efficacy": "pp.454–455; Figure 1, pp.458–459; Figure 2, p.459",
        "safety": "pp.455,459; Table 2, p.460",
        "limitations": "pp.459,461"
      }
    },
    "reports": []
  },
  {
    "id": "her2climb-05",
    "name": "HER2CLIMB-05",
    "phase": "III",
    "design": "無作為化・二重盲検・プラセボ対照（1:1）",
    "setting": "metastatic",
    "subtypes": [
      "HER2+"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行・再発または転移性乳癌（個別適格条件参照）",
    "lineBuckets": [
      "firstline"
    ],
    "lineLabel": "一次治療の導入後維持療法",
    "population": "HER2陽性進行乳癌654例。一次トラスツズマブ＋ペルツズマブ＋タキサン4–8サイクル後に増悪なし。脳転移なし、または所定条件を満たす無症候性脳転移を許容。 タキサン6サイクル未満での導入終了は、忍容できない毒性による中止時に許容。",
    "cardPopulation": "HER2陽性進行乳癌654例。一次トラスツズマブ＋ペルツズマブ＋タキサン4–8サイクル後に増悪なし。脳転移なし、または所定条件を満たす無症候性脳転移を許容。 タキサン6サイクル未満での導入終了は、忍容できない毒性による中止時に許容。",
    "experimental": "ツカチニブ＋トラスツズマブ＋ペルツズマブ",
    "control": "プラセボ＋トラスツズマブ＋ペルツズマブ",
    "primaryEndpoint": "治験責任医師評価PFS",
    "result": "2025-09-05カットオフ：PFS 24.9対16.3か月、HR 0.641（95% CI 0.514–0.799）、P<0.0001。OS未成熟。",
    "caveat": "HER2CLIMBとは別試験。一次導入後の維持療法であり、増悪後の二次療法ではない。PFSは維持療法への無作為化時から測定。HR陽性例のET併用は任意。",
    "trial_registration": "NCT05132582",
    "publicationDate": "2025-12-10",
    "publicationYear": 2025,
    "publicationDateType": "online_first",
    "resultDate": "2025-12-10",
    "resultDateLabel": "掲載解析の原著公開日／月（データカットオフとは別）",
    "sources": [
      {
        "title": "HER2CLIMB-05: A Phase III Study of Tucatinib Versus Placebo in Combination With Trastuzumab and Pertuzumab as First-Line Maintenance Therapy for HER2+ Metastatic Breast Cancer",
        "url": "https://air.unimi.it/retrieve/eb84d03d-179c-49bf-952a-5059e189da89/dieras-et-al-2025-her2climb-05-a-phase-iii-study-of-tucatinib-versus-placebo-in-combination-with-trastuzumab-and.pdf",
        "publicationDate": "2025-12-10",
        "kind": "原著・本文確認",
        "evidenceStatus": "full_text_checked",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "HER2CLIMB-05 bibliographic record",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41369677/",
        "publicationDate": "2025-12-10",
        "kind": "原著・抄録確認",
        "evidenceStatus": "abstract_only",
        "checkedDate": "2026-10-06"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "原著本文の対象条件・表示結果の該当箇所を確認。",
      "sourceUrl": "https://air.unimi.it/retrieve/eb84d03d-179c-49bf-952a-5059e189da89/dieras-et-al-2025-her2climb-05-a-phase-iii-study-of-tucatinib-versus-placebo-in-combination-with-trastuzumab-and.pdf",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "positive",
    "agents": [],
    "regimenAgents": [
      "tucatinib",
      "trastuzumab",
      "pertuzumab"
    ],
    "drugClasses": [
      "HER2 TKI",
      "HER2 antibody"
    ],
    "safety": "ツカチニブ群のGrade ≥3下痢6.1%、ALT上昇13.5%、AST上昇7.1%。AEによるツカチニブ中止13.5%。",
    "safetyEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "原著本文の対象条件・表示結果の該当箇所を確認。",
      "sourceUrl": "https://air.unimi.it/retrieve/eb84d03d-179c-49bf-952a-5059e189da89/dieras-et-al-2025-her2climb-05-a-phase-iii-study-of-tucatinib-versus-placebo-in-combination-with-trastuzumab-and.pdf",
      "checkedDate": "2026-10-06"
    },
    "issuePublicationDate": "2026-06-10",
    "primaryPublication": {
      "date": "2025-12-10",
      "precision": "day",
      "sourceUrl": "https://air.unimi.it/retrieve/eb84d03d-179c-49bf-952a-5059e189da89/dieras-et-al-2025-her2climb-05-a-phase-iii-study-of-tucatinib-versus-placebo-in-combination-with-trastuzumab-and.pdf",
      "sourceTitle": "HER2CLIMB-05: A Phase III Study of Tucatinib Versus Placebo in Combination With Trastuzumab and Pertuzumab as First-Line Maintenance Therapy for HER2+ Metastatic Breast Cancer",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": [
      {
        "id": "her2climb-05-cns-2025",
        "label": "初回報告内CNS-PFS（副次評価）",
        "publicationDate": "2025-12-10",
        "publicationDateType": "online_first",
        "resultDate": "2025-12-10",
        "resultDateLabel": "原著公開日／月（データカットオフとは別）",
        "result": "全集団CNS-PFS HR 0.846（95% CI 0.616–1.162）。ベースライン脳転移群は8.5対4.3か月、HR 0.719（95% CI 0.406–1.273）。いずれも95% CIは1を含み、確立したCNS利益と断定しない。",
        "sourceUrl": "https://air.unimi.it/retrieve/eb84d03d-179c-49bf-952a-5059e189da89/dieras-et-al-2025-her2climb-05-a-phase-iii-study-of-tucatinib-versus-placebo-in-combination-with-trastuzumab-and.pdf",
        "articleEvidence": {
          "status": "full_text_checked",
          "label": "表示結果の原著本文確認済み",
          "note": "原著本文の対象条件・表示結果の該当箇所を確認。",
          "sourceUrl": "https://air.unimi.it/retrieve/eb84d03d-179c-49bf-952a-5059e189da89/dieras-et-al-2025-her2climb-05-a-phase-iii-study-of-tucatinib-versus-placebo-in-combination-with-trastuzumab-and.pdf",
          "checkedDate": "2026-10-06"
        },
        "checkedDate": "2026-10-06"
      }
    ]
  },
  {
    "id": "phila",
    "name": "PHILA",
    "phase": "III",
    "design": "無作為化・二重盲検・プラセボ対照（1:1）",
    "setting": "metastatic",
    "subtypes": [
      "HER2+"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行・再発または転移性乳癌（個別適格条件参照）",
    "lineBuckets": [
      "firstline"
    ],
    "lineLabel": "進行期一次療法",
    "population": "中国40施設のHER2陽性再発・転移性乳癌590例。進行期未治療、周術期全身療法終了から12か月以上。CNS転移を除外。",
    "cardPopulation": "中国40施設のHER2陽性再発・転移性乳癌590例。進行期未治療、周術期全身療法終了から12か月以上。CNS転移を除外。",
    "experimental": "ピロチニブ＋トラスツズマブ＋ドセタキセル",
    "control": "プラセボ＋トラスツズマブ＋ドセタキセル",
    "primaryEndpoint": "治験責任医師評価PFS",
    "result": "長期解析（2025-05-30カットオフ）：OS HR 0.74（95% CI 0.56–0.98、名目片側P=0.02）、中央値は両群未到達。PFS HR 0.44（95% CI 0.36–0.54）。",
    "caveat": "対照はペルツズマブを含まない。地域・後治療の違いを踏まえ、CLEOPATRAとの優劣は示さない。原著抄録に強調されたOS HR 0.64は2024年カットオフで、最新長期解析の0.74とは別。 OSは事前規定の正式な仮説検定を設定しておらず、名目P値として解釈する。",
    "trial_registration": "NCT03863223",
    "publicationDate": "2026-03-16",
    "publicationYear": 2026,
    "publicationDateType": "online_first",
    "resultDate": "2026-03-16",
    "resultDateLabel": "掲載解析の原著公開日／月（データカットオフとは別）",
    "sources": [
      {
        "title": "Pyrotinib or placebo in combination with trastuzumab and docetaxel for HER2 positive metastatic breast cancer: long term survival results from randomised phase 3 PHILA trial",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12990035/",
        "publicationDate": "2026-03-16",
        "kind": "原著・本文確認",
        "evidenceStatus": "full_text_checked",
        "checkedDate": "2026-10-06"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "原著本文の対象条件・表示結果の該当箇所を確認。",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12990035/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "positive",
    "agents": [],
    "regimenAgents": [
      "pyrotinib",
      "trastuzumab",
      "docetaxel"
    ],
    "drugClasses": [
      "HER2 TKI",
      "HER2 antibody",
      "chemotherapy"
    ],
    "safety": "長期追跡でも新たな安全性シグナルなし。ピロチニブ群のGrade 3下痢48%。",
    "safetyEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "原著本文の対象条件・表示結果の該当箇所を確認。",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12990035/",
      "checkedDate": "2026-10-06"
    },
    "primaryPublication": {
      "date": "2023-10-31",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/37907210/",
      "sourceTitle": "主要PFS初回報告",
      "sourceType": "original_paper",
      "note": "同一試験の初回主要結果原著（主要PFS初回報告）を基準に採用。主カードの追跡更新日・後続コホート報告日ではない。既存の検証済み書誌を再利用。"
    },
    "reports": [
      {
        "id": "phila-final-pfs-2026",
        "label": "事前規定PFS最終解析（2024年カットオフ）",
        "publicationDate": "2026-03-16",
        "publicationDateType": "online_first",
        "resultDate": "2026-03-16",
        "resultDateLabel": "原著公開日／月（データカットオフとは別）",
        "result": "2024-04-30カットオフ：PFS 22.1対10.5か月、HR 0.44（95% CI 0.36–0.53、名目片側P<0.001）。同時点のOS HR 0.64（95% CI 0.46–0.89）。",
        "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12990035/",
        "articleEvidence": {
          "status": "full_text_checked",
          "label": "表示結果の原著本文確認済み",
          "note": "原著本文の対象条件・表示結果の該当箇所を確認。",
          "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12990035/",
          "checkedDate": "2026-10-06"
        },
        "checkedDate": "2026-10-06"
      },
      {
        "id": "phila-primary-pfs-2023",
        "label": "主要PFS初回報告",
        "publicationDate": "2023-10-31",
        "publicationDateType": "online_first",
        "resultDate": "2023-10-31",
        "resultDateLabel": "原著公開日／月（データカットオフとは別）",
        "result": "PFS 24.3対10.4か月、HR 0.41（95% CI 0.32–0.53）、片側P<0.001。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/37907210/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/37907210/",
          "checkedDate": "2026-10-06"
        },
        "checkedDate": "2026-10-06"
      }
    ]
  },
  {
    "id": "sophia",
    "name": "SOPHIA",
    "phase": "III",
    "design": "無作為化・非盲検（1:1）",
    "setting": "metastatic",
    "subtypes": [
      "HER2+"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行・再発または転移性乳癌（個別適格条件参照）",
    "lineBuckets": [
      "her2_pretreated"
    ],
    "lineLabel": "抗HER2療法2種類以上／転移期1–3ライン既治療",
    "population": "HER2陽性進行乳癌536例。抗HER2療法2種類以上で増悪し、転移期の前治療1–3ライン。約91%はT-DM1既治療。",
    "cardPopulation": "HER2陽性進行乳癌536例。抗HER2療法2種類以上で増悪し、転移期の前治療1–3ライン。約91%はT-DM1既治療。",
    "experimental": "マルゲツキシマブ＋医師選択化学療法",
    "control": "トラスツズマブ＋医師選択化学療法",
    "primaryEndpoint": "中央判定PFS、続いてOS（階層検定）",
    "result": "最終OS 21.6対21.9か月、HR 0.95（95% CI 0.77–1.17、P=0.620）。OS優越性なし。",
    "caveat": "PFS改善と最終OS非有意を区別。CD16A遺伝子型別のOS差は探索的解析で、確立した治療選択マーカーとしない。",
    "trial_registration": "NCT02492711",
    "publicationDate": "2022-11-04",
    "publicationYear": 2022,
    "publicationDateType": "online_first",
    "resultDate": "2022-11-04",
    "resultDateLabel": "掲載解析の原著公開日／月（データカットオフとは別）",
    "sources": [
      {
        "title": "Margetuximab Versus Trastuzumab in Patients With Previously Treated HER2-Positive Advanced Breast Cancer (SOPHIA): Final Overall Survival Results From a Randomized Phase 3 Trial",
        "url": "https://pubmed.ncbi.nlm.nih.gov/36332179/",
        "publicationDate": "2022-11-04",
        "kind": "原著・抄録確認",
        "evidenceStatus": "abstract_only",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "SOPHIA original publication date",
        "url": "https://jamanetwork.com/journals/jamaoncology/fullarticle/2775599",
        "publicationDate": "2021-01-22",
        "kind": "原著・公開日確認",
        "evidenceStatus": "abstract_only",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "Efficacy of Margetuximab vs Trastuzumab in Patients With Pretreated ERBB2-Positive Advanced Breast Cancer",
        "url": "https://pubmed.ncbi.nlm.nih.gov/33480963/",
        "publicationDate": "2021-01-22",
        "kind": "原著・抄録確認",
        "evidenceStatus": "abstract_only",
        "checkedDate": "2026-10-06"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/36332179/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [
      {
        "trialId": "sophia",
        "guidelineId": "jbcs-2022-web-2024",
        "organization": "JBCS",
        "section": "薬物療法 FRQ12",
        "title": "既治療HER2陽性転移・再発乳癌",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/frq12/",
        "citationEvidence": "参考文献14にSOPHIA最終OS解析（2023）を掲載。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "accessMethod": "学会公式WEB版の該当章・参考文献",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/36332179/"
        ],
        "interpretationNote": "後年の更新報告まで引用したという意味ではありません。"
      }
    ],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "mixed",
    "agents": [],
    "regimenAgents": [
      "margetuximab",
      "trastuzumab",
      "chemotherapy"
    ],
    "drugClasses": [
      "HER2 antibody",
      "chemotherapy"
    ],
    "issuePublicationDate": "2023-01-10",
    "primaryPublication": {
      "date": "2021-01-22",
      "precision": "day"
    },
    "reports": [
      {
        "id": "sophia-primary-pfs-2021",
        "label": "主要PFS解析",
        "publicationDate": "2021-01-22",
        "publicationDateType": "online_first",
        "resultDate": "2021-01-22",
        "resultDateLabel": "原著公開日／月（データカットオフとは別）",
        "result": "PFS 5.8対4.9か月、HR 0.76（95% CI 0.59–0.98、P=0.03）。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/33480963/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/33480963/",
          "checkedDate": "2026-10-06"
        },
        "checkedDate": "2026-10-06"
      }
    ],
    "safety": "初回報告：infusion-related reaction 13.3%対3.4%。最終報告でも安全性は概ね同様。",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/33480963/",
      "checkedDate": "2026-10-06"
    }
  },
  {
    "id": "tbcrc-048",
    "name": "TBCRC 048（Olaparib Expanded）",
    "phase": "II",
    "design": "非盲検・単群・遺伝子別拡大コホート",
    "setting": "metastatic",
    "subtypes": [
      "サブタイプ非限定"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行・再発または転移性乳癌（個別適格条件参照）",
    "lineBuckets": [],
    "lineLabel": "遺伝子選択の転移性集団（固定ライン番号なし）",
    "population": "2026年拡大コホート：gPALB2変異24例、体細胞BRCA1/2変異30例、計54例。乳癌サブタイプを問わず、測定可能な転移性病変を有する。",
    "cardPopulation": "2026年拡大コホート：gPALB2変異24例、体細胞BRCA1/2変異30例、計54例。乳癌サブタイプを問わず、測定可能な転移性病変を有する。",
    "experimental": "オラパリブ単剤",
    "control": "なし（単群・遺伝子別コホート）",
    "primaryEndpoint": "ORR",
    "result": "2026年拡大：gPALB2群ORR 75%（80% CI 60.2–86.3）、PFS 9.4か月。sBRCA1/2群ORR 36.7%（80% CI 24.7–50.0）、PFS 5.5か月。",
    "caveat": "単群第II相。sBRCA群ORRは事前規定目標未達。拡大集団の78%はER+/HER2−、13% TNBC、9% HER2+で、サブタイプ間比較はできない。承認対象拡大を意味しない。",
    "trial_registration": "NCT03344965",
    "publicationDate": "2026-01-28",
    "publicationYear": 2026,
    "publicationDateType": "online_first",
    "resultDate": "2026-01-28",
    "resultDateLabel": "掲載解析の原著公開日／月（データカットオフとは別）",
    "sources": [
      {
        "title": "TBCRC 048 (Olaparib Expanded) Expansion Cohorts: Phase II Study of Olaparib Monotherapy for Patients With Metastatic Breast Cancer With Germline Mutations in PALB2 or Somatic Mutations in BRCA1 or BRCA2",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41604601/",
        "publicationDate": "2026-01-28",
        "kind": "原著・抄録確認",
        "evidenceStatus": "abstract_only",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "TBCRC 048: Phase II Study of Olaparib for Metastatic Breast Cancer and Mutations in Homologous Recombination-Related Genes",
        "url": "https://pubmed.ncbi.nlm.nih.gov/33119476/",
        "publicationDate": "2020-10-29",
        "kind": "原著・抄録確認",
        "evidenceStatus": "abstract_only",
        "checkedDate": "2026-10-06"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/41604601/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "signal",
    "agents": [],
    "regimenAgents": [
      "olaparib"
    ],
    "drugClasses": [
      "PARP inhibitor"
    ],
    "biomarkers": [
      "gPALB2変異",
      "sBRCA1/2変異"
    ],
    "issuePublicationDate": "2026-03-10",
    "primaryPublication": {
      "date": "2020-10-29",
      "precision": "day"
    },
    "reports": [
      {
        "id": "tbcrc048-original-2020",
        "label": "初回proof-of-principleコホート",
        "publicationDate": "2020-10-29",
        "publicationDateType": "online_first",
        "resultDate": "2020-10-29",
        "resultDateLabel": "原著公開日／月（データカットオフとは別）",
        "result": "54例。奏効はgPALB2（ORR 82%）とsBRCA1/2（50%）で確認。ATMまたはCHEK2単独変異では奏効なし。2026年拡大コホートとは別解析。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/33119476/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/33119476/",
          "checkedDate": "2026-10-06"
        },
        "checkedDate": "2026-10-06"
      }
    ]
  },
  {
    "id": "bylieve",
    "name": "BYLieve（cohort A）",
    "phase": "II",
    "design": "多施設・非盲検・単群・非比較の第II相cohort A",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行・再発または転移性乳癌（個別適格条件参照）",
    "lineBuckets": [
      "endocrine_pretreated"
    ],
    "lineLabel": "直前CDK4/6阻害薬＋AIの増悪後",
    "population": "PIK3CA変異、HR陽性/HER2陰性進行乳癌。直前CDK4/6阻害薬＋AIで増悪。前治療2以下、化学療法1以下の条件。登録127例、訂正後の中央変異確認119例。",
    "cardPopulation": "2024年訂正再出版を採用。PIK3CA変異、HR陽性/HER2陰性進行乳癌。直前CDK4/6阻害薬＋AIで増悪。前治療2以下、化学療法1以下の条件。登録127例、訂正後の中央変異確認119例。",
    "experimental": "アルペリシブ＋フルベストラント",
    "control": "なし（単群）",
    "primaryEndpoint": "中央確認PIK3CA変異集団の6か月無増悪生存割合",
    "result": "訂正再出版：6か月無増悪生存64/119例、53.8%（95% CI 44.4–63.0）。データカットオフ2022-07-29。",
    "caveat": "2021年原著はデータ処理上の誤りを受け撤回・再解析後に2024年12月再出版。旧版50.4%を現行主要結果として使わない。無作為化比較ではなく、他治療への優越性は示さない。",
    "trial_registration": "NCT03056755",
    "publicationDate": "2024-12",
    "publicationYear": 2024,
    "publicationDateType": "issue_month",
    "resultDate": "2024-12",
    "resultDateLabel": "掲載解析の原著公開日／月（データカットオフとは別）",
    "sources": [
      {
        "title": "Alpelisib plus fulvestrant in PIK3CA-mutated, hormone receptor-positive advanced breast cancer after a CDK4/6 inhibitor (BYLieve): one cohort of a phase 2, multicentre, open-label, non-comparative study（corrected republication）",
        "url": "https://www.sciencedirect.com/science/article/pii/S1470204524006739",
        "publicationDate": "2024-12",
        "kind": "原著・抄録確認",
        "evidenceStatus": "abstract_only",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "Retraction and republication—BYLieve editorial notice",
        "url": "https://www.sciencedirect.com/science/article/pii/S1470204524006478",
        "publicationDate": "2024-12",
        "kind": "出版社公式・撤回再出版通知（本文確認）",
        "evidenceStatus": "full_text_checked",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "BYLieve cohort A corrected republication（PubMed）",
        "url": "https://pubmed.ncbi.nlm.nih.gov/39637900/",
        "kind": "原著・訂正再出版の抄録"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://www.sciencedirect.com/science/article/pii/S1470204524006739",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "signal",
    "agents": [
      "fulvestrant"
    ],
    "regimenAgents": [
      "alpelisib",
      "fulvestrant"
    ],
    "drugClasses": [
      "PI3K inhibitor",
      "SERD"
    ],
    "safety": "訂正再出版：Grade ≥3高血糖29%、rash 10%、maculopapular rash 9%。",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://www.sciencedirect.com/science/article/pii/S1470204524006739",
      "checkedDate": "2026-10-06"
    },
    "biomarkers": [
      "PIK3CA変異"
    ],
    "priorCdk46Context": "直前治療がCDK4/6阻害薬＋AI。",
    "correctionHistory": {
      "status": "retracted_and_republished",
      "supersededDoi": "10.1016/S1470-2045(21)00034-6",
      "currentDoi": "10.1016/S1470-2045(24)00673-9",
      "noticeUrl": "https://www.sciencedirect.com/science/article/pii/S1470204524006478",
      "note": "出版社は再解析・再査読後の訂正版を再出版。結論は変更なしと説明。"
    },
    "primaryPublication": {
      "date": "2021-04",
      "precision": "month",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/33794206/",
      "sourceTitle": "Alpelisib plus fulvestrant in PIK3CA-mutated, hormone receptor-positive advanced breast cancer after a CDK4/6 inhibitor (BYLieve): one cohort of a phase 2, multicentre, open-label, non-comparative study",
      "sourceType": "original_paper",
      "note": "初回原著の冊子月2021年4月をPubMedと出版社の撤回・再出版通知で確認。正確な先行オンライン日は本監査で一次確認できず。2024年12月は訂正再出版。日付起点だけ2021年とし、結果・注意書きは訂正再出版を維持。",
      "dateBasis": "issue_month",
      "correctionSourceUrl": "https://www.sciencedirect.com/science/article/pii/S1470204524006478"
    },
    "reports": []
  },
  {
    "id": "right-choice",
    "name": "RIGHT Choice",
    "phase": "II",
    "design": "無作為化・非盲検（1:1）",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行・再発または転移性乳癌（個別適格条件参照）",
    "lineBuckets": [
      "firstline"
    ],
    "lineLabel": "進行期一次療法",
    "population": "閉経前／周閉経期のHR陽性/HER2陰性進行乳癌222例。症候性臓器転移、急速進行など臨床的にaggressiveな進行期未治療例。",
    "cardPopulation": "閉経前／周閉経期のHR陽性/HER2陰性進行乳癌222例。症候性臓器転移、急速進行など臨床的にaggressiveな進行期未治療例。",
    "experimental": "リボシクリブ＋AI（レトロゾール／アナストロゾール）＋ゴセレリン",
    "control": "医師選択の2剤化学療法（docetaxel/capecitabine、paclitaxel/gemcitabine、capecitabine/vinorelbine）",
    "primaryEndpoint": "PFS",
    "result": "最終解析PFS 21.8対12.8か月、HR 0.61（95% CI 0.43–0.87、P=0.003）。ORR 66.1%対61.8%、奏効まで中央値4.9対3.2か月。",
    "caveat": "研究者判定visceral crisisは47.7%。肝転移かつbilirubin >1.5×ULNは除外され、重篤な肝機能不全を伴う臓器クリーゼ全般への外挿はできない。第II相、閉経前中心。",
    "trial_registration": "NCT03839823",
    "publicationDate": "2024-05-21",
    "publicationYear": 2024,
    "publicationDateType": "online_first",
    "resultDate": "2024-05-21",
    "resultDateLabel": "掲載解析の原著公開日／月（データカットオフとは別）",
    "sources": [
      {
        "title": "Final Results of RIGHT Choice: Ribociclib Plus Endocrine Therapy Versus Combination Chemotherapy in Premenopausal Women With Clinically Aggressive HR-Positive/HER2-Negative Advanced Breast Cancer",
        "url": "https://pubmed.ncbi.nlm.nih.gov/38771995/",
        "publicationDate": "2024-05-21",
        "kind": "原著・抄録確認",
        "evidenceStatus": "abstract_only",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "RIGHT Choice original discussion（肝機能除外・外挿限界）",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11315404/",
        "publicationDate": "2024-05-21",
        "kind": "原著本文の公開検索抜粋（全文アクセス未確認）",
        "evidenceStatus": "abstract_only",
        "checkedDate": "2026-10-06"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "抄録を確認。肝機能除外条件は同じ一次論文の公開検索抜粋を確認したが、全文アクセスは未確認。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/38771995/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "positive",
    "agents": [],
    "regimenAgents": [
      "ribociclib",
      "letrozole",
      "anastrozole",
      "goserelin",
      "docetaxel",
      "capecitabine",
      "paclitaxel",
      "gemcitabine",
      "vinorelbine"
    ],
    "drugClasses": [
      "CDK4/6 inhibitor",
      "aromatase inhibitor",
      "ovarian suppression",
      "chemotherapy"
    ],
    "safety": "症候性AEはリボシクリブ＋ET群で少なかった。",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/38771995/",
      "checkedDate": "2026-10-06"
    },
    "issuePublicationDate": "2024-08-10",
    "primaryPublication": {
      "date": "2024-05-21",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/38771995/",
      "sourceTitle": "Final Results of RIGHT Choice: Ribociclib Plus Endocrine Therapy Versus Combination Chemotherapy in Premenopausal Women With Clinically Aggressive HR-Positive/HER2-Negative Advanced Breast Cancer",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "capitello-290",
    "name": "CAPItello-290",
    "phase": "III",
    "design": "無作為化・二重盲検・プラセボ対照（1:1）",
    "setting": "metastatic",
    "subtypes": [
      "TNBC"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行・再発または転移性乳癌（個別適格条件参照）",
    "lineBuckets": [
      "firstline"
    ],
    "lineLabel": "進行期一次療法",
    "population": "進行期未治療の転移性TNBC812例。PIK3CA/AKT1/PTEN異常は登録必須でなく、中央後方視的検査で30.7%。",
    "cardPopulation": "進行期未治療の転移性TNBC812例。PIK3CA/AKT1/PTEN異常は登録必須でなく、中央後方視的検査で30.7%。",
    "experimental": "カピバセルチブ＋パクリタキセル",
    "control": "プラセボ＋パクリタキセル",
    "primaryEndpoint": "全集団とPIK3CA/AKT1/PTEN異常群のOS（共同主要）",
    "result": "最終OS：全集団17.7対18.0か月、HR 0.92（95% CI 0.78–1.08、P=0.3239）。異常群は両群20.4か月、HR 1.05（95% CI 0.77–1.43、P=0.7602）。",
    "caveat": "共同主要OSをいずれも未達。PFSの数値上の改善をOS成功と扱わない。HR陽性CAPItello-291と別試験で、PAKT第II相の期待は第III相で確認されなかった。",
    "trial_registration": "NCT03997123",
    "publicationDate": "2025-12-19",
    "publicationYear": 2025,
    "publicationDateType": "online_first",
    "resultDate": "2025-12-19",
    "resultDateLabel": "掲載解析の原著公開日／月（データカットオフとは別）",
    "sources": [
      {
        "title": "Capivasertib plus paclitaxel as first-line treatment for metastatic triple-negative breast cancer: results from the randomised, global phase III CAPItello-290 trial",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41422862/",
        "publicationDate": "2025-12-19",
        "kind": "原著・抄録確認",
        "evidenceStatus": "abstract_only",
        "checkedDate": "2026-10-06"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/41422862/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "negative",
    "agents": [],
    "regimenAgents": [
      "capivasertib",
      "paclitaxel"
    ],
    "drugClasses": [
      "AKT inhibitor",
      "chemotherapy"
    ],
    "safety": "Grade ≥3下痢12.7%対0.7%。AEによるカピバセルチブ／プラセボ中止8.5%対4.9%。",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/41422862/",
      "checkedDate": "2026-10-06"
    },
    "biomarkers": [
      "PIK3CA/AKT1/PTEN異常（共同主要評価集団）"
    ],
    "issuePublicationDate": "2026-05",
    "primaryPublication": {
      "date": "2025-12-19",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/41422862/",
      "sourceTitle": "Capivasertib plus paclitaxel as first-line treatment for metastatic triple-negative breast cancer: results from the randomised, global phase III CAPItello-290 trial",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "abc-trials",
    "name": "ABC trials（3試験の事前計画統合解析）",
    "phase": "III",
    "setting": "early",
    "stages": [],
    "timing": [
      "adjuvant"
    ],
    "lineBuckets": [],
    "trial_registration": "NCT00493870 / NCT00887536 / NCT01547741",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "guidelineReferences": [],
    "agents": [],
    "regimenAgents": [
      "docetaxel",
      "paclitaxel",
      "cyclophosphamide",
      "doxorubicin"
    ],
    "drugClasses": [],
    "japanApproval": "未評価",
    "design": "3つの無作為化第III相試験の事前計画統合・非劣性解析：USOR 06-090、NSABP B-46-I/USOR 07132、NSABP B-49",
    "subtypes": [
      "HR+/HER2-",
      "TNBC"
    ],
    "subtypeScope": "HER2陰性のHR陽性・陰性を含む。サブタイプ表示は登録範囲で、各群での同等の利益を意味しない。",
    "stageLabel": "病理T/N条件を使用。病期I–IIIの一括タグへは換算せず。T4・鎖骨上窩リンパ節病変・遠隔転移は除外。",
    "population": "HER2陰性のリンパ節陽性または高リスクN0の手術後浸潤性乳癌。N陽性はpT1–3（pN1miを含む）。N0はHR陰性、腫瘍径>2 cm、またはT1cかつHR陽性でgrade 3／規定の高再発スコア等。2024年解析4,181例（TC6 2,102、TaxAC 2,079）。",
    "experimental": "ドセタキセル＋シクロホスファミド6サイクル（TC6）",
    "control": "アントラサイクリン＋タキサンを含む療法（TaxAC）：前2試験はTAC6、B-49は規定のAC＋タキサンレジメン",
    "primaryEndpoint": "iDFSにおけるTC6のTaxACに対する非劣性（規定HR境界1.18）",
    "result": "2024年・追跡中央値6.9年：5年iDFS 85.1%対86.7%（TC6対TaxAC、HR 1.14、80% CI 1.04–1.25）。非劣性は示されず。OSの有意差なし（HR 1.05、95% CI 0.87–1.26）。",
    "resultDate": "2020-09-30",
    "resultDateLabel": "2024年長期報告のデータカットオフ",
    "publicationDate": "2024-02-09",
    "publicationDateType": "online_first",
    "publicationYear": 2024,
    "caveat": "3試験の共通比較群の統合であり単独の新規試験ではない。B-46-I/USOR 07132のTC6＋ベバシズマブ群は除外。長期の非劣性不成立と、優越性・OS利益とは区別する（同じiDFS HRの95% CIは0.99–1.32、P=0.08）。RFIはTaxAC優位。",
    "safety": "長期報告ではTaxACの再発減少と、遅発性白血病・乳癌以外の死亡増加の両方を記載。OS差は認めなかった。",
    "safetySourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11095853/",
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "2024年原著のMethods・Results・Figure 1を論文PDFで確認。2017年の適格条件は原著の公開索引本文も参照。付録全体の精査を意味しない。",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11095853/",
      "checkedDate": "2026-10-06",
      "verificationSourceUrl": "https://makadu.live/packages/uploads/2024/02/2024_ABC-Trials-update.pdf"
    },
    "sources": [
      {
        "title": "Geyer et al. JCO 2024：ABC trialsの長期追跡",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11095853/",
        "kind": "原著・長期追跡",
        "doi": "10.1200/JCO.23.01428"
      },
      {
        "title": "Blum et al. JCO 2017：ABC trials統合解析",
        "url": "https://pubmed.ncbi.nlm.nih.gov/28398846/",
        "kind": "原著・主解析",
        "doi": "10.1200/JCO.2016.71.4147"
      },
      {
        "title": "Blum et al. 2017：適格条件・3親試験のデザイン",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5549453/",
        "kind": "原著本文・適格条件"
      }
    ],
    "cardPopulation": "HER2陰性のリンパ節陽性または高リスクN0の手術後浸潤性乳癌。N陽性はpT1–3（pN1miを含む）。N0はHR陰性、腫瘍径>2 cm、またはT1cかつHR陽性でgrade 3／規定の高再発スコア等。2024年解析4,181例（TC6 2,102、TaxAC 2,079）。",
    "primaryPublication": {
      "date": "2017-04-11",
      "precision": "day"
    },
    "reports": [
      {
        "id": "abc-trials-primary-2017",
        "label": "2017年・初回統合解析",
        "publicationDate": "2017-04-11",
        "result": "追跡中央値3.3年。TC6の非劣性を示す見込みがないとして規定の無益性境界を超え、早期報告。4年iDFSはTC6 88.2%対TaxAC 90.7%（P=0.04）。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/28398846/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "一次論文の抄録で対象・比較・掲載結果を確認。原著本文と付録の全文は未確認。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/28398846/",
          "checkedDate": "2026-10-06"
        }
      }
    ]
  },
  {
    "id": "calgb-9741",
    "name": "CALGB 9741 / Intergroup C9741",
    "phase": "III",
    "setting": "early",
    "stages": [],
    "timing": [
      "adjuvant"
    ],
    "lineBuckets": [],
    "trial_registration": "",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "guidelineReferences": [
      {
        "trialId": "calgb-9741",
        "guidelineId": "jbcs-2022-web-2024",
        "organization": "JBCS",
        "section": "薬物療法 CQ9",
        "title": "早期乳癌のdose-dense化学療法",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq9/",
        "citationEvidence": "参考文献4にCALGB 9741初回報告（2003）を掲載。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "accessMethod": "学会公式WEB版の該当章・参考文献",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/12668651/"
        ],
        "interpretationNote": "後年の更新報告まで引用したという意味ではありません。"
      }
    ],
    "agents": [],
    "regimenAgents": [
      "doxorubicin",
      "paclitaxel",
      "cyclophosphamide",
      "filgrastim"
    ],
    "drugClasses": [],
    "japanApproval": "未評価",
    "design": "無作為化・2×2要因計画（4群）：投与間隔2週対3週、およびA→T→C逐次投与対AC→T",
    "subtypes": [
      "サブタイプ非限定"
    ],
    "subtypeScope": "ER陽性・陰性を含む。標準化HER2検査より前の試験で、現代の各サブタイプ別利益を確立したと解釈しない。",
    "stageLabel": "術後・腋窩リンパ節陽性の原発乳癌。今回確認した一次資料から病期I/II/IIIの範囲を推測して付与していない。",
    "population": "術後の腋窩リンパ節陽性原発乳癌の女性。2003年報告は2,005例を無作為化。2025年長期解析はプロトコル治療を一度も受けなかった32例を除く1,973例。",
    "experimental": "2週ごと＋フィルグラスチム：A×4→T×4→C×4、またはAC×4→T×4",
    "control": "3週ごと：A×4→T×4→C×4、またはAC×4→T×4。A=ドキソルビシン、T=パクリタキセル、C=シクロホスファミド",
    "primaryEndpoint": "DFS（投与密度と投与順序の2つの要因を評価）",
    "result": "2025年・追跡中央値12年：2週対3週のDFS HR 0.77（95% CI 0.66–0.90、P=0.0009）、OS HR 0.80（95% CI 0.67–0.95、P=0.0088）。投与順序によるDFS・OS差は認めず。",
    "resultDate": "2025年12年追跡報告",
    "publicationDate": "2025-01-02",
    "publicationDateType": "online_first",
    "publicationYear": 2025,
    "caveat": "投与間隔と投与順序を別々に比較する4群試験。2週群はG-CSF支持を伴う。2025年のSET2,3関連解析はER陽性検体サブセットの後方視的バイオマーカー研究を含み、化学療法選択への確立した適用を意味しない。",
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "2025年原著のResults、Figure 1、Discussionを論文PDFで確認。2003年の4群・投与法は初回原著抄録で確認。",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11954676/",
      "checkedDate": "2026-10-06",
      "verificationSourceUrl": "https://makadu.live/packages/uploads/2025/04/metzger-filho-et-al-2025-adjuvant-dose-dense-chemotherapy-in-hormone-receptor-positive-breast-cancer.pdf"
    },
    "sources": [
      {
        "title": "Metzger Filho et al. JCO 2025：CALGB 9741長期解析と内分泌感受性指標",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11954676/",
        "kind": "原著・長期追跡／バイオマーカー解析",
        "doi": "10.1200/JCO-24-01875"
      },
      {
        "title": "Citron et al. JCO 2003：CALGB 9741・初回要因計画解析",
        "url": "https://pubmed.ncbi.nlm.nih.gov/12668651/",
        "kind": "原著・主解析",
        "doi": "10.1200/JCO.2003.09.081"
      }
    ],
    "cardPopulation": "術後の腋窩リンパ節陽性原発乳癌の女性。2003年報告は2,005例を無作為化。2025年長期解析はプロトコル治療を一度も受けなかった32例を除く1,973例。",
    "primaryPublication": {
      "date": "2003-02-13",
      "precision": "day"
    },
    "reports": [
      {
        "id": "calgb-9741-primary-2003",
        "label": "2003年・初回解析",
        "publicationDate": "2003-02-13",
        "result": "追跡中央値36か月。2週ごとのdose-dense群で4年DFS 82%対75%。DFSの報告RR 0.74（P=0.010）、OS RR 0.69（P=0.013）。投与順序による有意差・投与間隔との交互作用はなし。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/12668651/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "一次論文の抄録で対象・比較・掲載結果を確認。原著本文と付録の全文は未確認。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/12668651/",
          "checkedDate": "2026-10-06"
        }
      }
    ],
    "safety": "2003年報告：2週ごとの群で重度好中球減少が少なかったが、同群はフィルグラスチムを併用。",
    "safetySourceUrl": "https://pubmed.ncbi.nlm.nih.gov/12668651/"
  },
  {
    "id": "brightness",
    "name": "BrighTNess",
    "phase": "III",
    "setting": "early",
    "stages": [
      "II",
      "III"
    ],
    "timing": [
      "neoadjuvant"
    ],
    "lineBuckets": [],
    "trial_registration": "NCT02032277",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "guidelineReferences": [
      {
        "trialId": "brightness",
        "guidelineId": "jbcs-2022-web-2024",
        "organization": "JBCS",
        "section": "薬物療法 CQ17",
        "title": "早期TNBCのプラチナ製剤",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq17/",
        "citationEvidence": "参考文献4にBrighTNess主解析（2018）を掲載。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "accessMethod": "学会公式WEB版の該当章・参考文献",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/29501363/"
        ],
        "interpretationNote": "後年の更新報告まで引用したという意味ではありません。"
      }
    ],
    "agents": [],
    "regimenAgents": [
      "paclitaxel",
      "carboplatin",
      "veliparib",
      "doxorubicin",
      "cyclophosphamide"
    ],
    "drugClasses": [],
    "japanApproval": "未評価",
    "design": "第III相・無作為化・二重盲検・プラセボ対照（2:1:1、3群）",
    "subtypes": [
      "TNBC"
    ],
    "stageLabel": "未治療の臨床病期II–III TNBC。術前療法の試験。",
    "population": "未治療の病期II–III TNBCの女性634例。カルボプラチン＋ベリパリブ群316例、カルボプラチン群160例、両薬プラセボ群158例。",
    "experimental": "A群：週1回パクリタキセル＋カルボプラチン＋ベリパリブ。B群：同じパクリタキセル＋カルボプラチン＋ベリパリブプラセボ",
    "control": "C群：週1回パクリタキセル＋カルボプラチンプラセボ＋ベリパリブプラセボ。全3群で続いてACを4サイクル",
    "primaryEndpoint": "乳房・リンパ節のpCR（A対CおよびA対Bの比較）",
    "result": "2022年・追跡中央値4.5年：EFS HRはA対C 0.63（95% CI 0.43–0.92）、A対B 1.12（0.72–1.72）。事後比較B対Cは0.57（0.36–0.91）。二次解析は記述的で、OSの有意差なし。",
    "resultDate": "2022年4.5年追跡報告",
    "publicationDate": "2022-01-31",
    "publicationDateType": "online_first",
    "publicationYear": 2022,
    "caveat": "ベリパリブ追加のpCR共同主要比較（A対B）は陰性。これによりEFS等は記述的解析で、カルボプラチンのみのB対C EFSは事後解析。プラチナ上乗せとPARP阻害薬上乗せの結果を混同しない。免疫療法併用の比較試験ではない。",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "一次論文の抄録で対象・比較・掲載結果を確認。原著本文と付録の全文は未確認。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/35093516/",
      "checkedDate": "2026-10-06"
    },
    "sources": [
      {
        "title": "Geyer et al. Annals of Oncology 2022：BrighTNess長期EFS・OS",
        "url": "https://pubmed.ncbi.nlm.nih.gov/35093516/",
        "kind": "原著・長期追跡",
        "doi": "10.1016/j.annonc.2022.01.009"
      },
      {
        "title": "Loibl et al. Lancet Oncology 2018：BrighTNess pCR主解析",
        "url": "https://pubmed.ncbi.nlm.nih.gov/29501363/",
        "kind": "原著・主解析",
        "doi": "10.1016/S1470-2045(18)30111-6"
      }
    ],
    "cardPopulation": "未治療の病期II–III TNBCの女性634例。カルボプラチン＋ベリパリブ群316例、カルボプラチン群160例、両薬プラセボ群158例。",
    "primaryPublication": {
      "date": "2018-02-28",
      "precision": "day"
    },
    "reports": [
      {
        "id": "brightness-primary-2018",
        "label": "2018年・pCR主解析",
        "publicationDate": "2018-02-28",
        "result": "pCR：A群53%（168/316）、B群58%（92/160）、C群31%（49/158）。A対Cは有意（P<0.0001）、A対Bは非有意（P=0.36）。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/29501363/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "一次論文の抄録で対象・比較・掲載結果を確認。原著本文と付録の全文は未確認。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/29501363/",
          "checkedDate": "2026-10-06"
        },
        "resultDate": "2016-12-08"
      }
    ]
  },
  {
    "id": "extenet",
    "name": "ExteNET",
    "phase": "III",
    "setting": "early",
    "stages": [
      "I",
      "II",
      "III"
    ],
    "timing": [
      "adjuvant"
    ],
    "lineBuckets": [],
    "trial_registration": "NCT00878709",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "guidelineReferences": [],
    "agents": [],
    "regimenAgents": [
      "neratinib"
    ],
    "drugClasses": [],
    "japanApproval": "未評価",
    "design": "第III相・無作為化・二重盲検・プラセボ対照（1:1）",
    "subtypes": [
      "HER2+"
    ],
    "stageLabel": "初期適格条件I–IIIC、2010年改訂後はII–IIIC。I期全般への一律適用を意味しない。",
    "population": "HER2陽性早期乳癌の女性2,840例。化学療法・手術・トラスツズマブを含む周術期治療後、再発を認めない集団。トラスツズマブ終了後2年以内から、2010年改訂で1年以内へ変更。HR陽性・陰性を含む。",
    "experimental": "ネラチニブ240 mg/日を1年間（トラスツズマブ後の延長術後療法）",
    "control": "プラセボを1年間",
    "primaryEndpoint": "無作為化から2年のiDFS。2023年報告は副次評価項目OSの最終解析",
    "result": "2023年・最終OS解析、追跡中央値8.1年：8年OS 90.1%対90.2%（ネラチニブ対プラセボ、HR 0.95、95% CI 0.75–1.21、P=0.6914）。ITT集団のOS改善は示されず。",
    "resultDate": "2023年・最終OS報告（追跡中央値8.1年）",
    "publicationDate": "2023-02-10",
    "publicationDateType": "online_first",
    "publicationYear": 2023,
    "caveat": "iDFS改善とOS結果を区別。HR陽性・トラスツズマブ終了後1年以内等のサブグループを、全ITT集団の結果と置き換えない。現代の別の抗HER2治療後への効果をこの比較だけで推測しない。",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "一次論文の抄録で対象・比較・掲載結果を確認。原著本文と付録の全文は未確認。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/36898233/",
      "checkedDate": "2026-10-06"
    },
    "sources": [
      {
        "title": "Holmes et al. European Journal of Cancer 2023：ExteNET最終OS",
        "url": "https://pubmed.ncbi.nlm.nih.gov/36898233/",
        "kind": "原著・最終OS解析",
        "doi": "10.1016/j.ejca.2023.02.002"
      },
      {
        "title": "Martin et al. Lancet Oncology 2017：ExteNET 5年iDFS",
        "url": "https://pubmed.ncbi.nlm.nih.gov/29146401/",
        "kind": "原著・5年追跡",
        "doi": "10.1016/S1470-2045(17)30717-9"
      },
      {
        "title": "Chan et al. Lancet Oncology 2016：ExteNET主解析",
        "url": "https://pubmed.ncbi.nlm.nih.gov/26874901/",
        "kind": "原著・主解析／適格条件変更",
        "doi": "10.1016/S1470-2045(15)00551-3"
      }
    ],
    "cardPopulation": "HER2陽性早期乳癌の女性2,840例。化学療法・手術・トラスツズマブを含む周術期治療後、再発を認めない集団。トラスツズマブ終了後2年以内から、2010年改訂で1年以内へ変更。HR陽性・陰性を含む。",
    "primaryPublication": {
      "date": "2016-02-10",
      "precision": "day"
    },
    "reports": [
      {
        "id": "extenet-primary-2016",
        "label": "2016年・2年iDFS主解析",
        "publicationDate": "2016-02-10",
        "result": "2年iDFS 93.9%対91.6%（ネラチニブ対プラセボ、HR 0.67、95% CI 0.50–0.91、P=0.0091）。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/26874901/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "一次論文の抄録で対象・比較・掲載結果を確認。原著本文と付録の全文は未確認。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/26874901/",
          "checkedDate": "2026-10-06"
        }
      },
      {
        "id": "extenet-idfs-2017",
        "label": "2017年・規定の5年iDFS感度解析",
        "publicationDate": "2017-11-13",
        "result": "追跡中央値5.2年。5年iDFS 90.2%対87.7%（HR 0.73、95% CI 0.57–0.92、P=0.0083）。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/29146401/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "一次論文の抄録で対象・比較・掲載結果を確認。原著本文と付録の全文は未確認。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/29146401/",
          "checkedDate": "2026-10-06"
        }
      }
    ],
    "safety": "2017年5年報告：系統的な下痢予防なし。Grade 3下痢40%対2%、ネラチニブ群にGrade 4下痢1例（<1%）。",
    "safetySourceUrl": "https://pubmed.ncbi.nlm.nih.gov/29146401/"
  },
  {
    "id": "her2climb-02",
    "name": "HER2CLIMB-02",
    "phase": "III",
    "design": "無作為化・二重盲検・プラセボ対照（1:1）",
    "setting": "metastatic",
    "subtypes": [
      "HER2+"
    ],
    "stages": [],
    "timing": [],
    "population": "トラスツズマブ・タキサン既治療の切除不能局所進行／転移HER2陽性乳癌463例。即時局所治療不要の活動性／安定脳転移を含む。",
    "cardPopulation": "トラスツズマブ・タキサン既治療の切除不能局所進行／転移HER2陽性乳癌463例。即時局所治療不要の活動性／安定脳転移を含む。",
    "experimental": "T-DM1＋tucatinib",
    "control": "T-DM1＋プラセボ",
    "trial_registration": "NCT03975647",
    "primaryEndpoint": "研究者判定PFS",
    "result": "主要解析PFS 9.5対7.4か月、HR 0.76（95% CI 0.61–0.95）、P=0.0163。2023年カットオフでOSは未成熟。",
    "publicationYear": 2025,
    "publicationDate": "2025-11-17",
    "resultDate": "2023-06-29",
    "checkedDate": "2026-10-06",
    "agents": [
      "T-DM1"
    ],
    "regimenAgents": [
      "T-DM1",
      "tucatinib"
    ],
    "drugClasses": [
      "ADC"
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/41260264/",
      "note": "一次論文抄録で確認。原著本文は未確認。",
      "checkedDate": "2026-10-06"
    },
    "sources": [
      {
        "title": "HER2CLIMB-02 一次報告",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41260264/",
        "kind": "原著"
      },
      {
        "title": "HER2CLIMB-02 試験登録・既治療と脳転移の適格条件",
        "url": "https://clinicaltrials.gov/study/NCT03975647",
        "kind": "試験登録"
      }
    ],
    "guidelineReferences": [],
    "lineBuckets": [],
    "japanApproval": "未評価",
    "issuePublicationDate": "2026-03",
    "publicationDateType": "first_online_publication_date",
    "her2Expression": "HER2陽性",
    "priorAdcContext": "試験登録ではT-DXd既治療を除外。この比較をT-DXd後の有効性の根拠にしない。",
    "safety": "Grade ≥3 TEAE 68.8%対41.2%。AEによるいずれかの治療中止22.1%対11.6%。Grade ≥3 ALT/AST上昇は各16.5%対各2.6%。",
    "safetySourceUrl": "https://pubmed.ncbi.nlm.nih.gov/41260264/",
    "caveat": "PFS改善からOS改善を推論しない。2026年最終OS学会抄録は存在を確認したが、今回その公式内容を取得できず数値を未採用。",
    "primaryPublication": {
      "date": "2025-11-17",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/41260264/",
      "sourceTitle": "HER2CLIMB-02 一次報告",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "kamilla",
    "name": "KAMILLA",
    "phase": "IIIb",
    "design": "非盲検・単群、安全性第IIIb相",
    "setting": "metastatic",
    "subtypes": [
      "HER2+"
    ],
    "stages": [],
    "timing": [],
    "population": "抗HER2療法・化学療法既治療のHER2陽性局所進行／転移乳癌。登録2,185例（global 2,003、Asia 182）；安全性2,183例。ECOG 0–2。",
    "cardPopulation": "抗HER2療法・化学療法既治療のHER2陽性局所進行／転移乳癌。登録2,185例（global 2,003、Asia 182）；安全性2,183例。ECOG 0–2。",
    "experimental": "T-DM1 3.6 mg/kg、3週ごと",
    "control": "なし（単群、地域別コホート）",
    "trial_registration": "NCT01702571",
    "primaryEndpoint": "安全性・忍容性（規定の注目有害事象）；PFS/OSは副次評価項目",
    "result": "global/AsiaのPFS中央値6.8/5.7か月、OS中央値27.2/29.5か月。地域間の有効性優劣を検定した試験ではない。",
    "publicationYear": 2022,
    "publicationDate": "2022-09-07",
    "resultDate": "global database lock 2017-01-31；Asia 2019-07-31",
    "checkedDate": "2026-10-06",
    "agents": [
      "T-DM1"
    ],
    "regimenAgents": [
      "T-DM1"
    ],
    "drugClasses": [
      "ADC"
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "sourceUrl": "https://epub.ub.uni-muenchen.de/106470/1/PIIS2059702922001892.pdf",
      "note": "公開原著本文のMethods・Results・安全性・Discussionを確認。補足資料全体は未精査。",
      "checkedDate": "2026-10-06"
    },
    "sources": [
      {
        "title": "KAMILLA 一次報告",
        "url": "https://epub.ub.uni-muenchen.de/106470/1/PIIS2059702922001892.pdf",
        "kind": "原著"
      },
      {
        "title": "KAMILLA 2022 publication metadata",
        "url": "https://pubmed.ncbi.nlm.nih.gov/36084395/",
        "kind": "原著書誌"
      }
    ],
    "guidelineReferences": [],
    "lineBuckets": [],
    "japanApproval": "未評価",
    "her2Expression": "HER2陽性",
    "priorAdcContext": "T-DM1既治療を除外。症候性またはCNS限局転移も除外。",
    "safety": "global/Asia：規定AEPI 23.1%/51.4%、Grade ≥3血小板減少3.7%/36.5%、全Grade肺臓炎1.0%/2.2%。",
    "safetySourceUrl": "https://epub.ub.uni-muenchen.de/106470/1/PIIS2059702922001892.pdf",
    "caveat": "非無作為化の安全性研究。Asiaコホートは中国・タイ・インドネシアであり、日本人集団と同一視しない。",
    "primaryPublication": {
      "date": "2019-01-29",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/30708264/",
      "sourceTitle": "Safety of trastuzumab emtansine (T-DM1) in patients with HER2-positive advanced breast cancer: Primary results from the KAMILLA study cohort 1",
      "sourceType": "original_paper",
      "note": "初回主要結果はcohort 1安全性原著。PubMed Epub 2019 Jan 29を直接確認。冊子2019年3月。2020年脳転移解析・2022年2コホート最終解析ではない。2019-10-06より前。"
    },
    "reports": [
      {
        "id": "kamilla-brain-metastases-2020",
        "label": "脳転移・事後探索的解析",
        "publicationDate": "2020-07-05",
        "issuePublicationDate": "2020-10",
        "resultDate": "2020年脳転移探索的報告",
        "analysisPopulation": "登録時脳転移398例、うち測定可能脳転移126例。",
        "result": "脳転移398例のPFS 5.5か月、OS 18.9か月。測定可能脳転移126例の全身ORR 21.4%；脳標的病変径和30%以上減少は42.9%。",
        "caveat": "21.4%は全臓器のORRであり、頭蓋内ORRではない。病変縮小率42.9%も正式な頭蓋内ORRと同義ではない。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/32634611/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/32634611/",
          "note": "一次論文抄録で確認。原著本文は未確認。",
          "checkedDate": "2026-10-06"
        }
      }
    ]
  },
  {
    "id": "wsg-adapt-tp",
    "name": "WSG-ADAPT-TP",
    "phase": "II",
    "design": "無作為化3群（1:1:1）",
    "setting": "early",
    "subtypes": [
      "HER2+"
    ],
    "stages": [
      "I",
      "II",
      "III"
    ],
    "timing": [
      "neoadjuvant"
    ],
    "population": "中央確認HR陽性/HER2陽性早期乳癌375例、臨床病期I–III。",
    "cardPopulation": "中央確認HR陽性/HER2陽性早期乳癌375例、臨床病期I–III。",
    "experimental": "術前12週のT-DM1単剤またはT-DM1＋内分泌療法",
    "control": "術前トラスツズマブ＋内分泌療法",
    "trial_registration": "NCT01779206",
    "primaryEndpoint": "主要pCR（ypT0/is ypN0）；本報告は副次iDFS/OS",
    "result": "5年iDFS：T-DM1 88.9%、T-DM1＋ET 85.3%、H＋ET 84.6%（P=0.608）。5年OS 97.2%、96.4%、96.3%（P=0.534）。",
    "publicationYear": 2023,
    "publicationDate": "2023-02-21",
    "resultDate": "5年生存追跡",
    "checkedDate": "2026-10-06",
    "agents": [
      "T-DM1"
    ],
    "regimenAgents": [
      "T-DM1",
      "trastuzumab",
      "endocrine therapy"
    ],
    "drugClasses": [
      "ADC"
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/36809046/",
      "note": "一次論文抄録で確認。原著本文は未確認。",
      "checkedDate": "2026-10-06"
    },
    "sources": [
      {
        "title": "WSG-ADAPT-TP 一次報告",
        "url": "https://pubmed.ncbi.nlm.nih.gov/36809046/",
        "kind": "原著"
      }
    ],
    "guidelineReferences": [],
    "lineBuckets": [],
    "japanApproval": "未評価",
    "issuePublicationDate": "2023-08-01",
    "her2Expression": "HR陽性かつHER2陽性",
    "caveat": "非pCR例には標準化学療法が必須、pCR例には術後化学療法省略を許容。術後化学療法省略の無作為化比較でも生存非劣性検証でもない。",
    "primaryPublication": {
      "date": "2017-07-06",
      "precision": "day"
    },
    "reports": [
      {
        "id": "wsg-adapt-tp-primary-2017",
        "label": "主要pCR解析",
        "publicationDate": "2017-07-06",
        "issuePublicationDate": "2017-09-10",
        "resultDate": "2017年主要報告",
        "result": "pCR：T-DM1 41.0%、T-DM1＋ET 41.5%、H＋ET 15.1%（P<0.001）。",
        "safety": "治療関連重篤AEはT-DM1群合計5.3%、H＋ET 3.1%。T-DM1では主にGrade 1–2の血小板減少、悪心、肝酵素上昇が多い。",
        "safetySourceUrl": "https://pubmed.ncbi.nlm.nih.gov/28682681/",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/28682681/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/28682681/",
          "note": "一次論文抄録で確認。原著本文は未確認。",
          "checkedDate": "2026-10-06"
        }
      }
    ]
  },
  {
    "id": "phergain-2",
    "name": "PHERGain-2",
    "phase": "II",
    "design": "多施設・単群、pCRに応じた周術期治療",
    "setting": "early",
    "subtypes": [
      "HER2+"
    ],
    "stages": [
      "I",
      "II"
    ],
    "timing": [
      "neoadjuvant",
      "adjuvant"
    ],
    "population": "未治療、中央IHC3+、臨床リンパ節陰性、MRI腫瘍径5–30 mmのHER2陽性早期乳癌396例。",
    "cardPopulation": "未治療、中央IHC3+、臨床リンパ節陰性、MRI腫瘍径5–30 mmのHER2陽性早期乳癌396例。",
    "experimental": "術前HP 8サイクル（HR陽性はET併用）→手術。pCR例はHP、残存例はT-DM1各10サイクル；ypN1–3には化学療法追加を許容。",
    "control": "なし（単群、病理学的奏効に基づく治療選択）",
    "trial_registration": "NCT04733118",
    "primaryEndpoint": "共同主要：1年HRQoL低下、3年RFI；pCRは副次",
    "result": "pCR 59.6%（236/396）。1年で全般的HRQoLが10%以上低下した割合42.8%（95% CI 36.9–48.8）。本報告抄録に3年RFI結果なし。",
    "publicationYear": 2026,
    "publicationDate": "2026-05-06",
    "resultDate": "2026-05-06",
    "checkedDate": "2026-10-06",
    "agents": [
      "T-DM1"
    ],
    "regimenAgents": [
      "T-DM1",
      "trastuzumab",
      "pertuzumab",
      "endocrine therapy"
    ],
    "drugClasses": [
      "ADC"
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42097893/",
      "note": "一次論文抄録で確認。原著本文は未確認。",
      "checkedDate": "2026-10-06"
    },
    "sources": [
      {
        "title": "PHERGain-2 一次報告",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42097893/",
        "kind": "原著"
      },
      {
        "title": "PHERGain-2 eligibility registry",
        "url": "https://clinicaltrials.gov/study/NCT04733118",
        "kind": "試験登録"
      }
    ],
    "guidelineReferences": [],
    "lineBuckets": [],
    "japanApproval": "未評価",
    "issuePublicationDate": "2026-06",
    "her2Expression": "HER2 IHC3+（IHC2+/ISH+は除外）",
    "safety": "治療関連AE 86.6%（Grade ≥3 5.6%）、重篤AE 6.1%。T-DM1関連肺臓炎による死亡1例（0.3%）。",
    "safetySourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42097893/",
    "caveat": "pCRは術前HP±ET後の結果であり、術後T-DM1のpCR効果ではない。単群研究のため標準化学療法併用との同等性や非劣性は証明しない。",
    "primaryPublication": {
      "date": "2026-05-06",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42097893/",
      "sourceTitle": "PHERGain-2 一次報告",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "u31402-a-j101",
    "name": "U31402-A-J101（HER3-DXd）",
    "phase": "I/II",
    "design": "多施設・非盲検、用量漸増／探索／拡大",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-",
      "TNBC",
      "HER2+"
    ],
    "stages": [],
    "timing": [],
    "population": "HER3発現の既治療進行／転移乳癌182例。進行乳癌の前治療中央値5レジメン。",
    "cardPopulation": "HER3発現の既治療進行／転移乳癌182例。進行乳癌の前治療中央値5レジメン。",
    "experimental": "patritumab deruxtecan（HER3-DXd）、用量漸増・用量探索・拡大",
    "control": "なし（単群、複数用量・サブタイプコホート）",
    "trial_registration": "NCT02980341",
    "primaryEndpoint": "用量漸増：MTD/RDE；拡大：安全性・有効性",
    "result": "HR+/HER2−113例：ORR 30.1%、PFS 7.4か月。TNBC53例：22.6%、5.5か月。HER2+14例：42.9%、11.0か月。",
    "publicationYear": 2023,
    "publicationDate": "2023-10-06",
    "resultDate": "2021-08-16",
    "checkedDate": "2026-10-06",
    "agents": [
      "patritumab deruxtecan"
    ],
    "regimenAgents": [
      "patritumab deruxtecan"
    ],
    "drugClasses": [
      "ADC"
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/37801674/",
      "note": "一次論文抄録で確認。原著本文は未確認。",
      "checkedDate": "2026-10-06"
    },
    "sources": [
      {
        "title": "U31402-A-J101（HER3-DXd） 一次報告",
        "url": "https://pubmed.ncbi.nlm.nih.gov/37801674/",
        "kind": "原著"
      }
    ],
    "guidelineReferences": [],
    "lineBuckets": [],
    "japanApproval": "未評価",
    "issuePublicationDate": "2023-12-20",
    "her2Expression": "HER2陽性／陰性。標的はHER3であり、HER2発現で選択するADCとは区別。",
    "safety": "Grade ≥3 TEAE 71.4%、TEAEによる中止9.9%。治療関連ILDはGrade 3が3例、Grade 5が1例。",
    "safetySourceUrl": "https://pubmed.ncbi.nlm.nih.gov/37801674/",
    "caveat": "異なる用量・病型・前治療を含む初期相単群結果。後続のICARUS-BREAST01と別試験であり、病型間・他ADCとの優劣は評価しない。",
    "primaryPublication": {
      "date": "2023-10-06",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/37801674/",
      "sourceTitle": "U31402-A-J101（HER3-DXd） 一次報告",
      "sourceType": "original_paper",
      "note": "JCO初回包括的phase I/II主要結果原著を採用。先行ASCO学会抄録より原著公表日を優先。"
    },
    "reports": []
  },
  {
    "id": "serena-3",
    "name": "SERENA-3",
    "phase": "II",
    "design": "段階的・無作為化・非盲検・並行群の術前window試験",
    "setting": "early",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [
      "neoadjuvant"
    ],
    "stageLabel": "根治手術予定の原発乳癌。適格条件に病期範囲の明記なし。",
    "lineBuckets": [],
    "population": "未治療・閉経後ER陽性/HER2陰性で根治手術予定。触知可能、または超音波径1 cm以上。本文・登録135例。",
    "cardPopulation": "未治療・閉経後ER陽性/HER2陰性で根治手術予定。触知可能、または超音波径1 cm以上。本文・登録135例。",
    "experimental": "カミゼストラント75／150／300 mgを5–7日、または75／150 mgを12–15日",
    "control": "用量・投与期間別コホート。標準ET／プラセボ対照なし。",
    "primaryEndpoint": "投与前後のER H-score変化（IHC）",
    "result": "ER H-scoreは用量・期間を通じ約63–67%低下。12–15日投与後のKi67低下は75 mg 73.0%、150 mg 77.5%（副次的薬力学指標）。",
    "safety": "重篤AEなし。150 mg群でGrade 3下痢1例。75 mg群のTEAEは非関連のGrade 2上気道感染1例を除きGrade 1。",
    "safetySourceUrl": "https://ascopubs.org/doi/10.1200/JCO-25-01548",
    "caveat": "再発抑制・PFS・OSを検証しない短期薬力学試験。主要ER解析は80% CI。抄録132例に対し本文・Table 1・登録は135例で記載差があり、無作為化人数の相違は未解消。",
    "agents": [
      "camizestrant"
    ],
    "drugClasses": [
      "SERD"
    ],
    "regimenType": "monotherapy",
    "regimenAgents": [
      "camizestrant"
    ],
    "priorCdk46Context": "未治療早期乳癌。CDK4/6阻害薬の併用・既治療後を検証しない。",
    "esr1Context": "ESR1変異選択ではない。",
    "trial_registration": "NCT04588298",
    "publicationDate": "2026-01-16",
    "publicationYear": 2026,
    "publicationDateType": "online_publication_date",
    "resultDate": "2026-01-16",
    "resultDateLabel": "掲載論文の公表日（データカットオフとは別）",
    "sources": [
      {
        "title": "Pharmacodynamics of Camizestrant Treatment in Postmenopausal Women With Estrogen Receptor–Positive, Human Epidermal Growth Factor Receptor 2–Negative Primary Breast Cancer: Results From the Randomized, Presurgical SERENA-3 Study",
        "url": "https://ascopubs.org/doi/10.1200/JCO-25-01548",
        "kind": "原著・本文確認",
        "publicationDate": "2026-01-16"
      },
      {
        "title": "SERENA-3 ClinicalTrials.gov（phase II・135例・完了をAPI照合）",
        "url": "https://clinicaltrials.gov/study/NCT04588298",
        "kind": "試験登録・API確認"
      },
      {
        "title": "JCO公開原著PDF再掲（本文閲覧先）",
        "url": "https://pdfs.semanticscholar.org/edd5/68a8f7d07cc96aabc1b6c958975ac70e077b.pdf",
        "kind": "原著PDF再掲"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "JCO原著の公開再掲PDFを読み、Methods、Results、Safety End Points、DiscussionとTable 1を確認。抄録と本文の人数差を明記。補足資料未精査。",
      "sourceUrl": "https://ascopubs.org/doi/10.1200/JCO-25-01548",
      "checkedDate": "2026-10-06",
      "fullTextReadUrl": "https://pdfs.semanticscholar.org/edd5/68a8f7d07cc96aabc1b6c958975ac70e077b.pdf"
    },
    "safetyEvidence": {
      "status": "full_text_checked",
      "label": "表示報告の原著本文確認済み",
      "note": "JCO原著の公開再掲PDFを読み、Methods、Results、Safety End Points、DiscussionとTable 1を確認。抄録と本文の人数差を明記。補足資料未精査。",
      "sourceUrl": "https://ascopubs.org/doi/10.1200/JCO-25-01548",
      "checkedDate": "2026-10-06",
      "fullTextReadUrl": "https://pdfs.semanticscholar.org/edd5/68a8f7d07cc96aabc1b6c958975ac70e077b.pdf"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "registryLastUpdated": "2025-01-24",
    "registryStatus": "COMPLETED",
    "stageEligibilityNote": "ClinicalTrials.govの適格条件は根治手術予定の原発乳癌（リンパ節状態を問わず）。I–IIIの明示的適格範囲は確認できないため、病期フィルターは付与しない。研究Stage 1–3は病期ではない。",
    "stageEligibilitySourceUrl": "https://clinicaltrials.gov/study/NCT04588298",
    "primaryPublication": {
      "date": "2026-01-16",
      "precision": "day",
      "sourceUrl": "https://ascopubs.org/doi/10.1200/JCO-25-01548",
      "sourceTitle": "Pharmacodynamics of Camizestrant Treatment in Postmenopausal Women With Estrogen Receptor–Positive, Human Epidermal Growth Factor Receptor 2–Negative Primary Breast Cancer: Results From the Randomized, Presurgical SERENA-3 Study",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "ameera-4",
    "name": "AMEERA-4",
    "phase": "II",
    "design": "無作為化・非盲検（1:1:1）、術前window試験",
    "setting": "early",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [
      "I",
      "II",
      "III"
    ],
    "timing": [
      "neoadjuvant"
    ],
    "stageLabel": "術前window試験：病期I、II、または手術可能なIII。",
    "lineBuckets": [],
    "population": "閉経後・未治療ER陽性/HER2陰性、手術可能I–III期、超音波径1 cm以上、局所Ki67≥15%。105例を無作為化。",
    "cardPopulation": "閉経後・未治療ER陽性/HER2陰性、手術可能I–III期、超音波径1 cm以上、局所Ki67≥15%。105例を無作為化。",
    "experimental": "アムセネストラント400 mgまたは200 mg、1日1回14日",
    "control": "レトロゾール2.5 mg、1日1回14日",
    "primaryEndpoint": "ベースラインからDay 15のKi67変化",
    "result": "評価可能95例。Ki67相対低下（幾何LS平均）は400 mg 75.9%、200 mg 68.2%、レトロゾール77.7%。",
    "safety": "安全性104例。Grade ≥3治療関連AEなし、AEによる中止なし。200 mg群の重篤な肺炎・創感染は治療非関連。",
    "safetySourceUrl": "https://link.springer.com/article/10.1186/s13058-023-01740-2",
    "caveat": "COVID-19下の遅い登録と計画に必要な情報獲得により早期終了。正式な群間統計推論は行わず、優越性も長期再発抑制も証明しない。",
    "agents": [
      "amcenestrant"
    ],
    "drugClasses": [
      "SERD"
    ],
    "regimenType": "monotherapy",
    "regimenAgents": [
      "amcenestrant",
      "letrozole"
    ],
    "priorCdk46Context": "未治療早期乳癌。CDK4/6阻害薬の併用・既治療後を検証しない。",
    "esr1Context": "ESR1変異選択ではない。",
    "trial_registration": "NCT04191382",
    "publicationDate": "2023-11-10",
    "publicationYear": 2023,
    "publicationDateType": "online_publication_date",
    "resultDate": "2023-11-10",
    "resultDateLabel": "掲載論文の公表日（データカットオフとは別）",
    "sources": [
      {
        "title": "AMEERA-4: a randomized, preoperative window-of-opportunity study of amcenestrant versus letrozole in early breast cancer",
        "url": "https://link.springer.com/article/10.1186/s13058-023-01740-2",
        "kind": "原著・本文確認",
        "publicationDate": "2023-11-10"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "原著のMethods、Results、安全性、Discussionを確認。補足資料の全表は未精査。",
      "sourceUrl": "https://link.springer.com/article/10.1186/s13058-023-01740-2",
      "checkedDate": "2026-10-06"
    },
    "safetyEvidence": {
      "status": "full_text_checked",
      "label": "表示報告の原著本文確認済み",
      "note": "原著のMethods、Results、安全性、Discussionを確認。補足資料の全表は未精査。",
      "sourceUrl": "https://link.springer.com/article/10.1186/s13058-023-01740-2",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "stageEligibilityNote": "原著Methods → Patientsでlocalized stage I, stage II, or operable stage IIIを明示。",
    "stageEligibilitySourceUrl": "https://link.springer.com/article/10.1186/s13058-023-01740-2",
    "primaryPublication": {
      "date": "2023-11-10",
      "precision": "day",
      "sourceUrl": "https://link.springer.com/article/10.1186/s13058-023-01740-2",
      "sourceTitle": "AMEERA-4: a randomized, preoperative window-of-opportunity study of amcenestrant versus letrozole in early breast cancer",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "ember-2",
    "name": "EMBER-2",
    "phase": "I",
    "design": "第I相・非盲検・400/800 mg無作為化、200 mg追加単群",
    "setting": "early",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [
      "I",
      "II",
      "III"
    ],
    "timing": [
      "neoadjuvant"
    ],
    "stageLabel": "術前window試験：病期I–III、超音波径1 cm以上。",
    "lineBuckets": [],
    "population": "閉経後・未治療・手術可能I–III期ER陽性（>50%／Allred>5）/HER2陰性、径1 cm以上。計87例、薬力学評価75例。",
    "cardPopulation": "閉経後・未治療・手術可能I–III期ER陽性（>50%／Allred>5）/HER2陰性、径1 cm以上。計87例、薬力学評価75例。",
    "experimental": "イムルネストラント400 mg対800 mgを約2週；後に非無作為化200 mg群追加",
    "control": "異なるイムルネストラント用量。標準ET対照なし。",
    "primaryEndpoint": "投与前後のER発現（IHC H-score）変化",
    "result": "400／800 mgでER低下82%／70%、Ki67低下71%／72%。両用量の標的作用と安全性から400 mgを支持。",
    "safety": "安全性86例。Grade ≥3 TEAEは3例（3.5%）で全て非関連。AE中止なし。下痢・悪心は800 mgで多い。",
    "safetySourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11609621/",
    "caveat": "原著Methodsの分類は第I相。用量選択の短期薬力学試験で再発・生存利益を示さない。200 mg群は非無作為化追加群。",
    "agents": [
      "imlunestrant"
    ],
    "drugClasses": [
      "SERD"
    ],
    "regimenType": "monotherapy",
    "regimenAgents": [
      "imlunestrant"
    ],
    "priorCdk46Context": "未治療早期乳癌。CDK4/6阻害薬の併用・既治療後を検証しない。",
    "esr1Context": "ESR1変異選択ではない。",
    "trial_registration": "NCT04647487",
    "publicationDate": "2024-10-08",
    "publicationYear": 2024,
    "publicationDateType": "online_publication_date",
    "resultDate": "2024-10-08",
    "resultDateLabel": "掲載論文の公表日（データカットオフとは別）",
    "sources": [
      {
        "title": "A Preoperative Window-of-Opportunity Study of Oral SERD, Imlunestrant, in Newly Diagnosed ER-Positive, HER2-Negative Early Breast Cancer: Results from the EMBER-2 Study",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11609621/",
        "kind": "原著・本文確認",
        "publicationDate": "2024-10-08"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "原著のMethods、Results、安全性、Discussionを確認。補足資料の全表は未精査。",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11609621/",
      "checkedDate": "2026-10-06"
    },
    "safetyEvidence": {
      "status": "full_text_checked",
      "label": "表示報告の原著本文確認済み",
      "note": "原著のMethods、Results、安全性、Discussionを確認。補足資料の全表は未精査。",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11609621/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "stageEligibilityNote": "原著Methods → Study populationでinvasive breast carcinoma: stage I to IIIを明示。",
    "stageEligibilitySourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11609621/",
    "primaryPublication": {
      "date": "2024-10-08",
      "precision": "day",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11609621/",
      "sourceTitle": "A Preoperative Window-of-Opportunity Study of Oral SERD, Imlunestrant, in Newly Diagnosed ER-Positive, HER2-Negative Early Breast Cancer: Results from the EMBER-2 Study",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "op-1250-001",
    "name": "OP-1250-001（palazestrant）",
    "phase": "I/II",
    "design": "First-in-human・非盲検・用量漸増／拡大・非無作為化",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "切除不能局所進行／転移性乳癌",
    "lineBuckets": [
      "endocrine_pretreated"
    ],
    "population": "ER陽性/HER2陰性進行乳癌、進行期ET既治療。第Ib/II相はET 1–4ライン・化学療法≤1ライン。計146例、120 mg投与86例。",
    "cardPopulation": "ER陽性/HER2陰性進行乳癌、進行期ET既治療。第Ib/II相はET 1–4ライン・化学療法≤1ライン。計146例、120 mg投与86例。",
    "experimental": "パラゼストラント単剤30–300 mg/日を用量漸増・拡大、推奨用量120 mg/日",
    "control": "なし（無作為化対照なし）",
    "primaryEndpoint": "登録上の主要評価項目：DLT、TEAE／SAE、薬物動態、RECIST抗腫瘍活性（奏効）。原著は推奨用量・CBR・PFSも報告。",
    "result": "120 mg群のPFS中央値4.8か月（95% CI 3.5–7.1）、ESR1変異群5.6か月。CBR 45.7%（32/70評価可能例）。",
    "safety": "120 mg群：悪心62.8%、嘔吐29.1%、疲労25.6%。Grade ≥3好中球減少10.5%。治療関連Grade 4好中球減少5例。",
    "safetySourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12210654/",
    "caveat": "単群・用量選択研究。CBR解析は24週前の非画像進行中止を除外し、投与86例と分母70例を区別。一次内分泌耐性を除外。OPERA-01とは別試験。",
    "agents": [
      "palazestrant"
    ],
    "drugClasses": [
      "SERD"
    ],
    "regimenType": "monotherapy",
    "regimenAgents": [
      "palazestrant"
    ],
    "priorCdk46Context": "60／120 mg集団116例の95.7%がCDK4/6阻害薬既治療。",
    "esr1Context": "ESR1変異選択ではない。",
    "trial_registration": "NCT04505826",
    "publicationDate": "2025-07-01",
    "publicationYear": 2025,
    "publicationDateType": "online_publication_date",
    "resultDate": "2023-07-07",
    "resultDateLabel": "データカットオフ（原著公表2025-07-01）",
    "sources": [
      {
        "title": "Palazestrant, a novel oral Complete Estrogen Receptor Antagonist (CERAN) and Selective Estrogen Receptor Degrader (SERD), in patients with ER+/HER2− advanced or metastatic breast cancer: phase 1/2 study results",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12210654/",
        "kind": "原著・本文確認",
        "publicationDate": "2025-07-01"
      },
      {
        "title": "OP-1250-001 ClinicalTrials.gov（主要評価項目をAPI確認）",
        "url": "https://clinicaltrials.gov/study/NCT04505826",
        "kind": "試験登録・API確認"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "原著のMethods、Results、安全性、Discussionを確認。補足資料の全表は未精査。",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12210654/",
      "checkedDate": "2026-10-06"
    },
    "safetyEvidence": {
      "status": "full_text_checked",
      "label": "表示報告の原著本文確認済み",
      "note": "原著のMethods、Results、安全性、Discussionを確認。補足資料の全表は未精査。",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12210654/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "mechanismNote": "完全ER拮抗薬（CERAN）かつSERD。PROTACではない。",
    "primaryPublication": {
      "date": "2025-07-01",
      "precision": "day",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12210654/",
      "sourceTitle": "Palazestrant, a novel oral Complete Estrogen Receptor Antagonist (CERAN) and Selective Estrogen Receptor Degrader (SERD), in patients with ER+/HER2− advanced or metastatic breast cancer: phase 1/2 study results",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    },
    "reports": []
  },
  {
    "id": "ipatunity130-a",
    "name": "IPATunity130（cohort A）",
    "phase": "III",
    "design": "無作為化・二重盲検・プラセボ対照（2:1）",
    "setting": "metastatic",
    "subtypes": [
      "TNBC"
    ],
    "stages": [],
    "timing": [],
    "lineBuckets": [
      "firstline"
    ],
    "population": "PIK3CA/AKT1/PTEN異常を有する測定可能な切除不能局所再発／転移性TNBC。進行期化学療法未治療、タキサン単剤に適する255例。周術期化学療法終了から1年未満の再発、CNS転移は除外。",
    "cardPopulation": "PIK3CA/AKT1/PTEN異常を有する測定可能な切除不能局所再発／転移性TNBC。進行期化学療法未治療、タキサン単剤に適する255例。周術期化学療法終了から1年未満の再発、CNS転移は除外。",
    "experimental": "イパタセルチブ＋パクリタキセル",
    "control": "プラセボ＋パクリタキセル",
    "primaryEndpoint": "治験責任医師評価PFS",
    "result": "PFS 7.4対6.1か月、HR 1.02（95% CI 0.71–1.45）、P=0.92。最終OS 24.4対24.9か月、HR 1.08（0.73–1.58）。遺伝子異常選択集団でも有効性改善なし。",
    "caveat": "本レコードは独立に検出力設計されたTNBC cohort A。HR+/HER2− cohort Bや、アテゾリズマブ併用単群cohort Cと混同しない。PFS未達のため副次評価の検定階層は開かない。",
    "trial_registration": "NCT03337724",
    "publicationDate": "2024-07-26",
    "publicationYear": 2024,
    "publicationDateType": "first_online_publication_date",
    "resultDate": "2024-07-26",
    "resultDateLabel": "掲載解析の原著／抄録公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Ipatasertib plus Paclitaxel… in the IPATunity130 Phase III Trial",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11443247/",
        "publicationDate": "2024-07-26",
        "kind": "原著・本文確認",
        "evidenceStatus": "full_text_checked",
        "checkedDate": "2026-10-06"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "原著本文の対象・方法・掲載結果の該当箇所を確認。",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11443247/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "agents": [],
    "regimenAgents": [
      "ipatasertib",
      "paclitaxel"
    ],
    "drugClasses": [
      "AKT inhibitor",
      "chemotherapy"
    ],
    "lineLabel": "進行期一次化学療法",
    "stageLabel": "切除不能局所再発または転移性乳癌。",
    "outcomeStatus": "negative",
    "biomarkers": [
      "PIK3CA/AKT1/PTEN異常"
    ],
    "issuePublicationDate": "2024-10-01",
    "dataCutoffs": {
      "primaryPFS": "2020-05-07",
      "finalOS": "2021-10-30"
    },
    "safety": "Grade≥3下痢9%対2%、有害事象による減量39%対14%。",
    "primaryPublication": {
      "date": "2024-07-26",
      "precision": "day",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11443247/",
      "note": "cohort A主要結果原著のオンライン公開日。2020年学会発表や2024年10月の号刊行日とは区別。",
      "checkedDate": "2026-10-06"
    },
    "reports": []
  },
  {
    "id": "ribbit",
    "name": "RIBBIT",
    "phase": "III",
    "design": "無作為化・非盲検（1:1）",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "lineBuckets": [
      "firstline"
    ],
    "population": "内臓転移を伴うHR陽性/HER2陰性転移性乳癌、進行期全身療法未治療、ECOG PS 0–1。閉経状況を問わない。計画158例に対し登録不振で38例のみ無作為化。",
    "cardPopulation": "内臓転移を伴うHR陽性/HER2陰性転移性乳癌、進行期全身療法未治療、ECOG PS 0–1。閉経状況を問わない。計画158例に対し登録不振で38例のみ無作為化。",
    "experimental": "リボシクリブ＋AI（レトロゾール／アナストロゾール／エキセメスタン）またはフルベストラント",
    "control": "カペシタビン＋ベバシズマブ、またはパクリタキセル±ベバシズマブ",
    "primaryEndpoint": "治験責任医師評価PFS",
    "result": "PFS中央値27.3対15.8か月だが、HR 0.86（95% CI 0.29–2.60）、P=0.793で有意差なし。登録不振による早期終了のため精度・検出力に大きな制約。",
    "caveat": "「第III相」の名称でも38例の比較で、優越性や同等性は確立しない。内臓転移の存在を必須とした試験であり、全例が内臓クリーゼではない。化学療法群の内分泌維持療法は禁止されていた。",
    "trial_registration": "EudraCT 2017-002930-22",
    "publicationDate": "2023-12-20",
    "publicationYear": 2023,
    "publicationDateType": "first_online_publication_date",
    "resultDate": "2023-12-20",
    "resultDateLabel": "掲載解析の原著／抄録公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Final Results from RIBBIT: A Randomized Phase III Study…",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10878705/",
        "publicationDate": "2023-12-20",
        "kind": "原著・本文確認",
        "evidenceStatus": "full_text_checked",
        "checkedDate": "2026-10-06"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "原著本文の対象・方法・掲載結果の該当箇所を確認。",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10878705/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "agents": [
      "fulvestrant"
    ],
    "regimenAgents": [
      "ribociclib",
      "letrozole",
      "anastrozole",
      "exemestane",
      "fulvestrant",
      "capecitabine",
      "paclitaxel",
      "bevacizumab"
    ],
    "drugClasses": [
      "CDK4/6 inhibitor",
      "aromatase inhibitor",
      "SERD",
      "chemotherapy",
      "VEGF antibody"
    ],
    "lineLabel": "進行期一次全身療法",
    "stageLabel": "内臓転移を伴う転移性乳癌。",
    "outcomeStatus": "inconclusive_early_closure",
    "issuePublicationDate": "2024-02",
    "primaryPublication": {
      "date": "2023-12-20",
      "precision": "day",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10878705/",
      "note": "早期終了後の初回結果原著のオンライン公開日。2024年2月の号刊行とは区別。",
      "checkedDate": "2026-10-06"
    },
    "reports": []
  },
  {
    "id": "neotrip",
    "name": "NeoTRIP Michelangelo / NeoTRIPaPDL1",
    "phase": "III",
    "design": "無作為化・非盲検（1:1）",
    "setting": "early",
    "subtypes": [
      "TNBC"
    ],
    "stages": [
      "II",
      "III"
    ],
    "timing": [
      "neoadjuvant",
      "adjuvant"
    ],
    "lineBuckets": [],
    "population": "未治療の高リスク早期／局所進行TNBC女性280例（炎症性乳癌も適格）。ER/PgR<1%、HER2陰性、ECOG PS 0–1。PD-L1陽性は登録必須ではない。",
    "cardPopulation": "未治療の高リスク早期／局所進行TNBC女性280例（炎症性乳癌も適格）。ER/PgR<1%、HER2陰性、ECOG PS 0–1。PD-L1陽性は登録必須ではない。",
    "experimental": "術前アテゾリズマブ＋カルボプラチン／nab-パクリタキセル8サイクル→手術→術後アントラサイクリン4サイクル",
    "control": "同じ術前化学療法→手術→術後アントラサイクリン4サイクル（アテゾリズマブなし）",
    "primaryEndpoint": "EFS",
    "result": "2023年ESMO公式抄録：追跡中央値54か月、5年EFS 70.6%対74.9%、層別P=0.66。アテゾリズマブによるEFS改善なし。",
    "caveat": "掲載EFSは学会抄録で、EFS主要比較の原著全文は未確認。アントラサイクリンは手術後で、術後アテゾリズマブは行わない。KEYNOTE-522など周術期ICIの結果と同一レジメンとして扱わない。",
    "trial_registration": "NCT02620280",
    "publicationDate": "2023-10",
    "publicationYear": 2023,
    "publicationDateType": "journal_abstract_issue_month",
    "resultDate": "2023-10",
    "resultDateLabel": "掲載解析の原著／抄録公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "LBA19 Event-free survival analysis… NeoTRIP Michelangelo randomized study",
        "url": "https://www.annalsofoncology.org/article/S0923-7534%2823%2904153-4/fulltext",
        "publicationDate": "2023-10",
        "kind": "ESMO 2023公式学会抄録",
        "evidenceStatus": "abstract_only",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "Pathologic complete response… NeoTRIP Michelangelo randomized study",
        "url": "https://pubmed.ncbi.nlm.nih.gov/35182721/",
        "publicationDate": "2022-02-17",
        "kind": "原著・抄録確認",
        "evidenceStatus": "abstract_only",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "NeoTRIPaPDL1試験登録（正しいNCT番号・適格条件）",
        "url": "https://clinicaltrials.gov/study/NCT02620280",
        "kind": "試験登録",
        "checkedDate": "2026-10-06"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "学会抄録確認（EFS原著本文未確認）",
      "note": "2023年ESMO LBA19の一次学会抄録を確認。2022年pCR原著とは別報告。2026年の派生トランスクリプトーム原著は主要EFSの原著化とは扱わない。",
      "sourceUrl": "https://www.annalsofoncology.org/article/S0923-7534%2823%2904153-4/fulltext",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "agents": [],
    "regimenAgents": [
      "atezolizumab",
      "carboplatin",
      "nab-paclitaxel",
      "anthracycline"
    ],
    "drugClasses": [
      "PD-L1 inhibitor",
      "chemotherapy"
    ],
    "stageLabel": "術前登録の高リスク早期／局所進行乳癌。M1は除外。術後アントラサイクリンを含むが術後ICI試験ではない。",
    "outcomeStatus": "negative",
    "primaryPublication": {
      "date": "2022-02-17",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/35182721/",
      "note": "初回結果原著（副次pCR）のオンライン公開日。主要EFSの2023年学会抄録とは区別。",
      "checkedDate": "2026-10-06"
    },
    "reports": [
      {
        "id": "neotrip-pcr-2022",
        "label": "副次pCR原著報告",
        "publicationDate": "2022-02-17",
        "publicationDateType": "first_online_publication_date",
        "resultDate": "2022-02-17",
        "resultDateLabel": "掲載解析の原著／抄録公開日（データカットオフとは別）",
        "result": "ITT pCR 48.6%対44.4%、OR 1.18（95% CI 0.74–1.89）、P=0.48。pCRは乳房・リンパ節の浸潤癌消失。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/35182721/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "原著本文は未確認。一次論文の抄録に基づく。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/35182721/",
          "checkedDate": "2026-10-06"
        },
        "checkedDate": "2026-10-06"
      },
      {
        "id": "neotrip-transcriptomic-2026",
        "label": "同一試験の探索的トランスクリプトーム解析",
        "publicationDate": "2026-05-19",
        "publicationDateType": "first_online_publication_date",
        "resultDate": "2026-05-19",
        "resultDateLabel": "掲載解析の原著／抄録公開日（データカットオフとは別）",
        "result": "治療前・治療早期の遺伝子発現とpCRとの関連を検討した派生解析。新規無作為化試験でも主要EFS比較の更新でもなく、臨床での患者選択基準を確立する結果とは扱わない。",
        "sourceUrl": "https://www.annalsofoncology.org/article/S0923-7534%2826%2900878-1/abstract",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "原著本文は未確認。一次論文の抄録に基づく。",
          "sourceUrl": "https://www.annalsofoncology.org/article/S0923-7534%2826%2900878-1/abstract",
          "checkedDate": "2026-10-06"
        },
        "checkedDate": "2026-10-06",
        "note": "出版社公開要約・Methodsの索引を確認。",
        "publicationType": "exploratory_original_article"
      }
    ]
  },
  {
    "id": "calgb-40603",
    "name": "CALGB 40603 / Alliance",
    "phase": "II",
    "design": "無作為化・非盲検・2×2要因計画（4群）",
    "setting": "early",
    "subtypes": [
      "TNBC"
    ],
    "stages": [
      "II",
      "III"
    ],
    "timing": [
      "neoadjuvant"
    ],
    "lineBuckets": [],
    "population": "未治療の非炎症性・臨床病期II–III TNBC443例。試験上ER/PgR≤10%を許容。週1パクリタキセル→dose-dense ACの術前療法。",
    "cardPopulation": "未治療の非炎症性・臨床病期II–III TNBC443例。試験上ER/PgR≤10%を許容。週1パクリタキセル→dose-dense ACの術前療法。",
    "experimental": "基本化学療法にカルボプラチン追加、ベバシズマブ追加、または両剤追加（2×2要因計画）",
    "control": "各要因の非追加群との比較。基本化学療法単独を含む4群。",
    "primaryEndpoint": "乳房pCR（ypT0/is）；掲載解析は長期EFS/OSの副次評価",
    "result": "追跡中央値7.9年：EFSはカルボプラチン追加HR 0.94（95% CI 0.67–1.32）、P=0.72；ベバシズマブ追加HR 0.92（0.66–1.29）、P=0.64。いずれも長期転帰の有意改善なし。",
    "caveat": "乳房pCRは両薬で増加したが、乳房＋腋窩pCRで有意増加したのはカルボプラチン。各要因の周辺比較であり「両剤追加対なし」の単純2群試験ではない。生存評価の検出力不足を踏まえ、無効の確証とはしない。",
    "trial_registration": "NCT00861705",
    "publicationDate": "2022-01-19",
    "publicationYear": 2022,
    "publicationDateType": "first_online_publication_date",
    "resultDate": "2022-01-19",
    "resultDateLabel": "掲載解析の原著／抄録公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "CALGB 40603 (Alliance): Long-Term Outcomes and Genomic Correlates…",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9015203/",
        "publicationDate": "2022-01-19",
        "kind": "原著・本文確認",
        "evidenceStatus": "full_text_checked",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "Impact of the Addition of Carboplatin and/or Bevacizumab… CALGB 40603 (Alliance)",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4268249/",
        "publicationDate": "2014-08-04",
        "kind": "原著・本文確認",
        "evidenceStatus": "full_text_checked",
        "checkedDate": "2026-10-06"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "原著本文の対象・方法・掲載結果の該当箇所を確認。",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9015203/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "agents": [],
    "regimenAgents": [
      "paclitaxel",
      "doxorubicin",
      "cyclophosphamide",
      "carboplatin",
      "bevacizumab"
    ],
    "drugClasses": [
      "chemotherapy",
      "VEGF antibody"
    ],
    "stageLabel": "術前登録時の臨床病期II–III。炎症性乳癌は除外。",
    "outcomeStatus": "positive_primary_survival_neutral",
    "issuePublicationDate": "2022-04-20",
    "dataCutoff": "2020-04-02",
    "primaryPublication": {
      "date": "2014-08-04",
      "precision": "day"
    },
    "reports": [
      {
        "id": "calgb-40603-pcr-2014",
        "label": "主要pCR解析（Table 2）",
        "publicationDate": "2014-08-04",
        "publicationDateType": "first_online_publication_date",
        "resultDate": "2014-08-04",
        "resultDateLabel": "掲載解析の原著／抄録公開日（データカットオフとは別）",
        "result": "乳房pCR：カルボプラチン60%対46%（片側P=0.0018）、ベバシズマブ59%対48%（P=0.0089）。乳房＋腋窩pCR：各54%対41%（P=0.0029）、52%対44%（P=0.057）。",
        "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4268249/",
        "articleEvidence": {
          "status": "full_text_checked",
          "label": "表示結果の原著本文確認済み",
          "note": "原著本文・Table 2を確認。抄録の乳房pCRカルボプラチン非追加44%はTable 2および後続原著の46%と不一致のため表の46%を採用。",
          "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4268249/",
          "checkedDate": "2026-10-06"
        },
        "checkedDate": "2026-10-06"
      }
    ]
  },
  {
    "id": "wsg-adapt-her2-hr-negative",
    "name": "WSG-ADAPT-HER2+/HR−",
    "phase": "II",
    "design": "多施設・無作為化・非盲検（HP:HP＋パクリタキセル＝5:2）",
    "setting": "early",
    "subtypes": [
      "HER2+"
    ],
    "stages": [],
    "timing": [
      "neoadjuvant",
      "adjuvant"
    ],
    "lineBuckets": [],
    "trial_registration": "NCT01817452",
    "population": "HR陰性/HER2陽性、非炎症性早期浸潤性乳癌134例（HP 92例、HP＋パクリタキセル42例）。",
    "cardPopulation": "HR陰性/HER2陽性、非炎症性早期浸潤性乳癌134例（HP 92例、HP＋パクリタキセル42例）。",
    "experimental": "術前12週のトラスツズマブ＋ペルツズマブ（HP）＋毎週パクリタキセル",
    "control": "術前12週のHP",
    "primaryEndpoint": "pCR；2022年報告は副次評価項目の5年iDFS等",
    "result": "追跡中央値59.9か月。5年iDFS 98%対87%（HP＋パクリタキセル対HP、HR 0.32、95% CI 0.07–1.49、P=0.15）；5年OS 98%対94%。",
    "publicationDate": "2022-04-08",
    "publicationYear": 2022,
    "resultDate": "2022-04-08公表の解析（追跡期間は結果欄）",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "agents": [],
    "regimenAgents": [
      "trastuzumab",
      "pertuzumab",
      "paclitaxel"
    ],
    "drugClasses": [],
    "guidelineReferences": [],
    "japanApproval": "未評価",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "一次論文の公開抄録で対象・比較・結果を確認。原著本文・付録は未確認。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/35405088/",
      "checkedDate": "2026-10-06"
    },
    "sources": [
      {
        "title": "Nitz et al. Lancet Oncology 2022：WSG-ADAPT-HER2+/HR− 5年生存",
        "url": "https://pubmed.ncbi.nlm.nih.gov/35405088/",
        "kind": "原著・生存追跡",
        "doi": "10.1016/S1470-2045(22)00159-0"
      },
      {
        "title": "Nitz et al. Annals of Oncology 2017：主要pCR報告",
        "url": "https://pubmed.ncbi.nlm.nih.gov/28945833/",
        "kind": "原著・主要pCR解析",
        "doi": "10.1093/annonc/mdx494"
      }
    ],
    "her2Expression": "HR陰性かつHER2陽性",
    "stageLabel": "非炎症性・非転移の早期乳癌。病期群の詳細は本確認範囲で未確定。",
    "caveat": "pCR後の追加化学療法省略は担当医判断。生存結果は小規模な副次解析であり、化学療法省略の生存非劣性・同等性を証明しない。",
    "registryIdentityNote": "ADAPT傘下のHR陰性試験。一次論文の登録番号はNCT01817452で、既存WSG-ADAPT-TP（HR陽性、NCT01779206）とは別試験。",
    "primaryPublication": {
      "date": "2017",
      "precision": "year"
    },
    "reports": [
      {
        "id": "wsg-adapt-her2-hr-negative-primary-2017",
        "label": "2017年・主要pCR解析",
        "publicationDate": "2017-11-01",
        "publicationDateType": "issue_date",
        "result": "抄録記載のpCR率はHP＋パクリタキセル90.5%、HP全体36.3%。当初仮説はHP早期反応例と化学療法群とのpCR比較。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/28945833/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "一次論文の公開抄録で対象・比較・結果を確認。原著本文・付録は未確認。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/28945833/",
          "checkedDate": "2026-10-06"
        }
      }
    ]
  },
  {
    "id": "wsg-tp-ii",
    "name": "WSG TP-II",
    "phase": "II",
    "design": "多施設・無作為化・非盲検（1:1）",
    "setting": "early",
    "subtypes": [
      "HER2+"
    ],
    "stages": [
      "I",
      "II",
      "III"
    ],
    "timing": [
      "neoadjuvant",
      "adjuvant"
    ],
    "lineBuckets": [],
    "trial_registration": "NCT03272477",
    "population": "HR陽性/HER2陽性早期乳癌207例。内分泌療法群100例、パクリタキセル群107例。臨床病期I–III。",
    "cardPopulation": "HR陽性/HER2陽性早期乳癌207例。内分泌療法群100例、パクリタキセル群107例。臨床病期I–III。",
    "experimental": "術前12週の内分泌療法（ET）＋トラスツズマブ＋ペルツズマブ（HP）",
    "control": "術前12週の毎週パクリタキセル＋HP",
    "primaryEndpoint": "pCR（ypT0/is ypN0）；2026年報告は最終5年生存解析",
    "result": "2026年更新：5年OS 100%対97.9%、5年EFS-DCIS 92.1%対94.8%（ET＋HP対パクリタキセル＋HP）。生存非劣性を検証した結果ではない。",
    "publicationDate": "2026-05-18",
    "publicationYear": 2026,
    "resultDate": "2026-05-18公表の解析（追跡期間は結果欄）",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "agents": [],
    "regimenAgents": [
      "trastuzumab",
      "pertuzumab",
      "paclitaxel",
      "endocrine therapy"
    ],
    "drugClasses": [],
    "guidelineReferences": [],
    "japanApproval": "未評価",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "一次論文の公開抄録で対象・比較・結果を確認。原著本文・付録は未確認。",
      "sourceUrl": "https://ascopubs.org/doi/10.1200/JCO-25-01047",
      "checkedDate": "2026-10-06"
    },
    "sources": [
      {
        "title": "Gluz et al. JCO 2026：WSG TP-II最終5年生存",
        "url": "https://ascopubs.org/doi/10.1200/JCO-25-01047",
        "kind": "原著・生存更新（抄録確認）",
        "doi": "10.1200/JCO-25-01047"
      },
      {
        "title": "Gluz et al. JAMA Oncology 2023：WSG TP-II主要pCR",
        "url": "https://jamanetwork.com/journals/jamaoncology/fullarticle/2804892",
        "kind": "原著・pCR／解析分母の本文抜粋確認",
        "doi": "10.1001/jamaoncol.2023.0646"
      },
      {
        "title": "Gluz et al. ESMO 2024 LBA17：病期・5年生存",
        "url": "https://s3.eu-central-1.amazonaws.com/m-anage.com.storage.esmo/static/esmo2024_abstracts/LBA17.html.pdf",
        "kind": "学会一次抄録",
        "doi": "10.1016/j.annonc.2024.08.2255"
      }
    ],
    "her2Expression": "HR陽性かつHER2陽性",
    "caveat": "全例に術後HP、非pCR例には追加標準化学療法が必須、pCR例では任意。周術期全体の化学療法省略を無作為化した試験ではない。2026年抄録のiDFS値は解析集団・分母を原著本文で照合できず、全体群間比較として表示しない。",
    "withheldMetrics": [
      {
        "endpoint": "2026年抄録の5年iDFS",
        "reportedValues": "97.7%（95% CI 94.5–100.0）対79.8%（95% CI 55.6–100.0）",
        "status": "解析集団・分母未検証のため結果表示に不採用",
        "reason": "一次抄録に値はあるが、本文・図表の該当解析を取得できず、群全体か部分集団かを確定できない。既知の分母を当てはめたり、誤植と断定したりしない。",
        "sourceUrl": "https://ascopubs.org/doi/10.1200/JCO-25-01047"
      }
    ],
    "primaryPublication": {
      "date": "2023-05-11",
      "precision": "day",
      "sourceUrl": "https://jamanetwork.com/journals/jamaoncology/fullarticle/2804892",
      "note": "JAMA Oncologyの主要pCR原著のオンライン公開日。2026年生存更新と区別。"
    },
    "reports": [
      {
        "id": "wsg-tp-ii-pcr-2023",
        "label": "2023年・主要pCR解析",
        "publicationDate": "2023-05-11",
        "result": "pCR 23.7%対56.4%（ET＋HP対パクリタキセル＋HP、OR 0.24、95% CI 0.12–0.46、P<0.001）。pCR評価可能198例（97例対101例）；無作為化207例と分母を区別。",
        "sourceUrl": "https://jamanetwork.com/journals/jamaoncology/fullarticle/2804892",
        "articleEvidence": {
          "status": "body_excerpt_only",
          "label": "原著本文の一部のみ確認",
          "note": "一次論文の公開本文抜粋で記載事項を照合。原著・付録の全体を通読したという意味ではない。",
          "sourceUrl": "https://jamanetwork.com/journals/jamaoncology/fullarticle/2804892",
          "checkedDate": "2026-10-06"
        }
      }
    ]
  },
  {
    "id": "shorther",
    "name": "ShortHER",
    "phase": "III",
    "design": "多施設・無作為化・非盲検・非劣性",
    "setting": "early",
    "subtypes": [
      "HER2+"
    ],
    "stages": [
      "I",
      "II",
      "III"
    ],
    "timing": [
      "adjuvant"
    ],
    "lineBuckets": [],
    "trial_registration": "NCT00629278",
    "population": "切除済みHER2陽性乳癌1,254例。リンパ節陽性、または陰性かつ追加リスク因子あり。病理病期I–III。",
    "cardPopulation": "切除済みHER2陽性乳癌1,254例。リンパ節陽性、または陰性かつ追加リスク因子あり。病理病期I–III。",
    "experimental": "ドセタキセル3コース＋トラスツズマブ9週→FEC 3コース",
    "control": "AC/EC 4コース→タキサン4コース＋トラスツズマブ計1年",
    "primaryEndpoint": "DFSとOS；DFS非劣性HR限界1.29",
    "result": "2023年最終更新（追跡中央値9年）：10年DFS 78%対77%（9週対1年、HR 1.06、90% CI 0.86–1.31）、10年OS 88%対89%。9週の非劣性は示されなかった。",
    "publicationDate": "2023-09-25",
    "publicationYear": 2023,
    "resultDate": "2023-09-25公表の解析（追跡期間は結果欄）",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "agents": [],
    "regimenAgents": [
      "trastuzumab",
      "docetaxel",
      "paclitaxel",
      "doxorubicin",
      "epirubicin",
      "cyclophosphamide",
      "fluorouracil"
    ],
    "drugClasses": [],
    "guidelineReferences": [],
    "japanApproval": "未評価",
    "articleEvidence": {
      "status": "body_excerpt_only",
      "label": "原著本文の一部のみ確認",
      "note": "一次論文の公開本文抜粋で記載事項を照合。原著・付録の全体を通読したという意味ではない。",
      "sourceUrl": "https://www.research.unipd.it/retrieve/275ea9f1-9c72-4675-a5c2-55ff9a22e1c7/conte-et-al-2023-nine-week-versus-one-year-trastuzumab-for-early-human-epidermal-growth-factor-receptor-2-positive.pdf",
      "checkedDate": "2026-10-06"
    },
    "sources": [
      {
        "title": "Conte et al. JCO 2023：ShortHER最終10年更新",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10642895/",
        "kind": "原著・10年DFS/OS",
        "doi": "10.1200/JCO.23.00790"
      },
      {
        "title": "ShortHER 2023：著者所属大学公開PDF",
        "url": "https://www.research.unipd.it/retrieve/275ea9f1-9c72-4675-a5c2-55ff9a22e1c7/conte-et-al-2023-nine-week-versus-one-year-trastuzumab-for-early-human-epidermal-growth-factor-receptor-2-positive.pdf",
        "kind": "原著・本文抜粋確認"
      },
      {
        "title": "Conte et al. Annals of Oncology 2018：主要DFS",
        "url": "https://iris.unimore.it/bitstream/11380/1166396/6/shorther.pdf",
        "kind": "原著・主要DFS",
        "doi": "10.1093/annonc/mdy414"
      },
      {
        "title": "Dieci et al. JAMA Oncology 2025：TIL部分集団",
        "url": "https://pubmed.ncbi.nlm.nih.gov/39946142/",
        "kind": "原著・探索的バイオマーカー解析",
        "doi": "10.1001/jamaoncol.2024.6872"
      }
    ],
    "caveat": "期間だけでなく化学療法内容・総投与量も異なる。登録不足で検出力56%。近い点推定、低リスク部分集団、TIL解析はいずれも全体の非劣性不成立を覆さない。",
    "primaryPublication": {
      "date": "2018",
      "precision": "year",
      "sourceUrl": "https://iris.unimore.it/bitstream/11380/1166396/6/shorther.pdf",
      "note": "最初の主要DFS原著の公表年。2023年最終生存更新と2025年TIL解析は初回主要結果ではない。"
    },
    "reports": [
      {
        "id": "shorther-til-2025",
        "label": "2025年・TIL探索的解析",
        "publicationDate": "2025-04-01",
        "publicationDateType": "issue_date",
        "result": "TIL評価可能866例の解析。TIL 5%増加ごとの調整HRはDDFS 0.87、OS 0.89。TILで治療期間を割り付けた前向き検証ではない。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/39946142/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "一次論文の公開抄録で対象・比較・結果を確認。原著本文・付録は未確認。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/39946142/",
          "checkedDate": "2026-10-06"
        }
      }
    ]
  },
  {
    "id": "altto",
    "name": "ALTTO",
    "phase": "III",
    "design": "多施設・無作為化・非盲検（当初4群1:1:1:1）",
    "setting": "early",
    "subtypes": [
      "HER2+"
    ],
    "stages": [
      "I",
      "II",
      "III"
    ],
    "timing": [
      "adjuvant"
    ],
    "lineBuckets": [],
    "trial_registration": "NCT00490139",
    "population": "HER2陽性早期乳癌8,381例を4群に登録。2024年最終有効性解析はラパチニブ単独群を除く3群6,281例。",
    "cardPopulation": "HER2陽性早期乳癌8,381例を4群に登録。2024年最終有効性解析はラパチニブ単独群を除く3群6,281例。",
    "experimental": "化学療法＋ラパチニブ（L）＋トラスツズマブ（T）、または化学療法＋T→L（抗HER2治療計1年）",
    "control": "化学療法＋T計1年（当初はL単独群も設定）",
    "primaryEndpoint": "DFS",
    "result": "追跡中央値9.8年：10年DFSはT 77%、L＋T 79%、T→L 79%；10年OSは87%、89%、89%。L＋T対TのDFS HR 0.89（95% CI 0.77–1.02）で有意な改善なし。",
    "publicationDate": "2024-10-17",
    "publicationYear": 2024,
    "resultDate": "2024-10-17公表の解析（追跡期間は結果欄）",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "agents": [],
    "regimenAgents": [
      "trastuzumab",
      "lapatinib",
      "chemotherapy"
    ],
    "drugClasses": [],
    "guidelineReferences": [],
    "japanApproval": "未評価",
    "articleEvidence": {
      "status": "body_excerpt_only",
      "label": "原著本文の一部のみ確認",
      "note": "一次論文の公開本文抜粋で記載事項を照合。原著・付録の全体を通読したという意味ではない。",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11532431/",
      "checkedDate": "2026-10-06"
    },
    "sources": [
      {
        "title": "de Azambuja et al. ESMO Open 2024：ALTTO最終10年解析",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11532431/",
        "kind": "原著・最終解析／本文抜粋確認",
        "doi": "10.1016/j.esmoop.2024.103938"
      },
      {
        "title": "Moreno-Aspitia et al. 2021：ALTTO更新・病期I–III",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8103014/",
        "kind": "原著・前回生存更新"
      },
      {
        "title": "ALTTO 初回主要結果の原著",
        "url": "https://pubmed.ncbi.nlm.nih.gov/26598744/",
        "kind": "原著・初回主要解析"
      }
    ],
    "caveat": "L単独群は2011年に早期終了し、最終有効性解析から除外。安全性解析は4群。陰性結果を他の二重HER2阻害薬へ一般化しない。",
    "stageLabel": "術後HER2陽性病期I–III。リンパ節陽性または陰性かつ腫瘍径1 cm以上。",
    "primaryPublication": {
      "date": "2015-11-23",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/26598744/",
      "note": "最初の主要DFS原著のオンライン公開日。冊子掲載は2016年、最終追跡は2024年。"
    },
    "reports": []
  },
  {
    "id": "data",
    "name": "DATA",
    "phase": "III",
    "design": "無作為化・非盲検・第III相（1:1）",
    "setting": "early",
    "subtypes": [
      "HR+（HER2非限定）"
    ],
    "stages": [],
    "timing": [
      "adjuvant"
    ],
    "population": "閉経後のHR陽性早期乳癌で、タモキシフェン2–3年後に無病。1,912例を割付し、適格かつ割付3年後も無病の1,660例をadapted解析に含めた。HER2陰性に限定しない。",
    "cardPopulation": "閉経後のHR陽性早期乳癌で、タモキシフェン2–3年後に無病。1,912例を割付し、適格かつ割付3年後も無病の1,660例をadapted解析に含めた。HER2陰性に限定しない。",
    "experimental": "タモキシフェン2–3年→アナストロゾール6年（計8–9年）",
    "control": "タモキシフェン2–3年→アナストロゾール3年（計5–6年）",
    "trial_registration": "NCT00301457",
    "primaryEndpoint": "adapted DFS：割付3年後の治療分岐時点からのDFS",
    "result": "10年adapted DFS 69.2%対66.0%（HR 0.86、95% CI 0.72–1.01、P=0.073）。10年adapted OS 80.9%対79.2%（HR 0.93、95% CI 0.75–1.16、P=0.53）。いずれも有意な改善なし。",
    "publicationDate": "2023-03-20",
    "publicationYear": 2023,
    "publicationDateType": "online_first",
    "resultDate": "2023年追跡解析。治療分岐から最低10年（割付から最低13年）を経た時点の解析。",
    "sources": [
      {
        "title": "Tjan-Heijnen et al. Extended adjuvant aromatase inhibition after sequential endocrine therapy: follow-up analysis of DATA",
        "url": "https://pubmed.ncbi.nlm.nih.gov/36992863/",
        "kind": "原著・抄録確認",
        "publicationDate": "2023-03-20",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "DATA registry",
        "url": "https://clinicaltrials.gov/study/NCT00301457",
        "kind": "試験登録",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "Tjan-Heijnen et al. Extended adjuvant aromatase inhibition after sequential endocrine therapy: DATA",
        "url": "https://pubmed.ncbi.nlm.nih.gov/29031778/",
        "kind": "原著・抄録確認",
        "publicationDate": "2017-10",
        "checkedDate": "2026-10-06"
      }
    ],
    "caveat": "10年は診断後または割付直後からではなく、割付3年後の治療分岐からの時間。分岐前のイベント・追跡不能例を除くadapted解析。探索的な高リスクサブグループの結果で全体の非有意結果を置き換えない。",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "一次論文の公開抄録・書誌を確認。原著全文は未確認。公開索引の本文抜粋や試験登録による適格条件の補足は全文確認と区別する。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/36992863/"
    },
    "guidelineReferences": [
      {
        "trialId": "data",
        "guidelineId": "jbcs-2022-web-2024",
        "organization": "JBCS",
        "section": "薬物療法 CQ4",
        "title": "浸潤性乳癌に対して，術後5年間の内分泌療法後に内分泌療法の追加投与は勧められるか？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq4/",
        "citationEvidence": "参考文献14: Tjan-Heijnen et al., Lancet Oncol 2017（DATA）。",
        "referenceNumber": 14,
        "relationship": "explicit_citation",
        "verificationMethod": "official_guideline_body_and_references",
        "accessMethod": "JBCS公式WEB版の本文・参考文献を直接確認",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/29031778/"
        ],
        "checkedDate": "2026-10-06",
        "interpretationNote": "2023年追跡解析そのものの引用ではない。"
      }
    ],
    "stageLabel": "早期・非転移乳癌。詳細な病期別適格条件を全文で確認していないため、I–IIIの病期タグは付けない。",
    "subtypeNote": "HER2陰性に限定した比較ではない。HR陽性の検索枠に配置し、原試験に受容体不明例を含む場合は対象欄に明示。",
    "lineBuckets": [],
    "regimenAgents": [
      "anastrozole",
      "tamoxifen"
    ],
    "agents": [],
    "drugClasses": [
      "内分泌療法"
    ],
    "resultInterpretation": "全体の主要解析・長期解析とも有意なDFS／OS改善を示さず。",
    "totalEndocrineDuration": "8–9年対5–6年",
    "primaryPublication": {
      "date": "2017",
      "precision": "year"
    },
    "publicationEra": "earlier",
    "reports": [
      {
        "id": "data-2017",
        "label": "当初の主解析",
        "publicationDate": "2017-10",
        "result": "5年adapted DFS 83.1%対79.4%（HR 0.79、95% CI 0.62–1.02、P=0.066）。延長群で関節痛／筋痛、骨減少／骨粗鬆症が多かった。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/29031778/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "一次論文の公開抄録・書誌を確認。原著全文は未確認。公開索引の本文抜粋や試験登録による適格条件の補足は全文確認と区別する。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/29031778/"
        },
        "caveat": "初回主解析も統計学的有意差なし。"
      }
    ]
  },
  {
    "id": "ideal",
    "name": "IDEAL（BOOG 2006-05）",
    "phase": "III",
    "design": "無作為化・非盲検・第III相",
    "setting": "early",
    "subtypes": [
      "HR+（HER2非限定）"
    ],
    "stages": [],
    "timing": [
      "adjuvant"
    ],
    "population": "閉経後のHR陽性早期乳癌1,824例。タモキシフェン、AI、または両者の逐次療法による最初の術後内分泌療法5年を完了。HER2陰性に限定しない。",
    "cardPopulation": "閉経後のHR陽性早期乳癌1,824例。タモキシフェン、AI、または両者の逐次療法による最初の術後内分泌療法5年を完了。HER2陰性に限定しない。",
    "experimental": "最初の内分泌療法5年後にレトロゾールを5年追加（計10年）",
    "control": "最初の内分泌療法5年後にレトロゾールを2.5年追加（計7.5年）",
    "trial_registration": "NTR3077 / EudraCT 2006-003958-16",
    "primaryEndpoint": "DFS",
    "result": "追跡中央値6.6年：DFSイベント152対163、HR 0.92（95% CI 0.74–1.16）。OS HR 1.04（0.78–1.38）。追加5年の優越性なし。二次原発乳癌は少なかった（HR 0.39、0.19–0.81）。",
    "publicationDate": "2017-08-23",
    "publicationYear": 2017,
    "publicationDateType": "online_first",
    "resultDate": "2017年オンライン／2018年冊子、追跡中央値6.6年。2024年の検体サブセット解析を関連報告に収載。",
    "sources": [
      {
        "title": "Blok et al. Optimal Duration of Extended Adjuvant Endocrine Therapy: Results of IDEAL",
        "url": "https://pubmed.ncbi.nlm.nih.gov/28922787/",
        "kind": "原著・抄録確認",
        "publicationDate": "2017-08-23",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "IDEAL original publisher page / design and registration",
        "url": "https://academic.oup.com/jnci/article/110/1/40/4093022",
        "kind": "原著抄録・公開索引の方法抜粋",
        "publicationDate": "2017-08-23",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "van 't Veer et al. Selection of Patients for Extended Endocrine Therapy: Secondary Analysis of IDEAL",
        "url": "https://pubmed.ncbi.nlm.nih.gov/39602119/",
        "kind": "原著・抄録確認",
        "publicationDate": "2024-11-04",
        "checkedDate": "2026-10-06"
      }
    ],
    "caveat": "5年で終了する群はない。10年対7.5年であり、5年対10年と表記しない。全体のDFS陰性と二次原発乳癌の減少を区別。2024年の検体サブセット結果は全ITTの長期陽性結果ではなく、遠隔再発の治療×検査交互作用も有意でなかった。",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "一次論文の公開抄録・書誌を確認。原著全文は未確認。公開索引の本文抜粋や試験登録による適格条件の補足は全文確認と区別する。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/28922787/"
    },
    "guidelineReferences": [
      {
        "trialId": "ideal",
        "guidelineId": "jbcs-2022-web-2024",
        "organization": "JBCS",
        "section": "薬物療法 CQ4",
        "title": "浸潤性乳癌に対して，術後5年間の内分泌療法後に内分泌療法の追加投与は勧められるか？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq4/",
        "citationEvidence": "参考文献17: Blok et al., JNCI 2018（IDEAL）。",
        "referenceNumber": 17,
        "relationship": "explicit_citation",
        "verificationMethod": "official_guideline_body_and_references",
        "accessMethod": "JBCS公式WEB版の本文・参考文献を直接確認",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/28922787/"
        ],
        "checkedDate": "2026-10-06",
        "interpretationNote": "2024年の70遺伝子二次解析の引用ではない。"
      }
    ],
    "stageLabel": "早期・非転移乳癌。詳細な病期別適格条件を全文で確認していないため、I–IIIの病期タグは付けない。",
    "subtypeNote": "HER2陰性に限定した比較ではない。HR陽性の検索枠に配置し、原試験に受容体不明例を含む場合は対象欄に明示。",
    "lineBuckets": [],
    "regimenAgents": [
      "letrozole"
    ],
    "agents": [],
    "drugClasses": [
      "内分泌療法"
    ],
    "reports": [
      {
        "id": "ideal-2024-mammaprint",
        "label": "70遺伝子検査を用いた二次解析（全ITTとは別）",
        "publicationDate": "2024-11-04",
        "result": "検体を解析した515例。70遺伝子low-riskの223例で追加5年対2.5年の遠隔再発HR 0.32（95% CI 0.12–0.87）、絶対差10.1ポイント。遠隔再発に関する治療×検査の交互作用は有意でなかった。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/39602119/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "一次論文の公開抄録・書誌を確認。原著全文は未確認。公開索引の本文抜粋や試験登録による適格条件の補足は全文確認と区別する。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/39602119/"
        },
        "caveat": "二次解析・検体のあるサブセット。検査による延長効果予測を確定したと記載しない。",
        "reportType": "biomarker_secondary_analysis",
        "population": "原試験の検体サブセット515例"
      }
    ],
    "resultInterpretation": "全体ITTは追加5年のDFS／OS優越性なし。",
    "totalEndocrineDuration": "10年対7.5年",
    "primaryPublication": {
      "date": "2017-08-23",
      "precision": "day",
      "sourceUrl": "https://academic.oup.com/jnci/article/110/1/40/4093022",
      "note": "初回主要結果の原著オンライン公開日。冊子年2018および2024年の検体二次解析と区別。"
    },
    "publicationEra": "earlier",
    "reportsOnly": true
  },
  {
    "id": "attom",
    "name": "aTTom",
    "phase": "III",
    "design": "無作為化比較（タモキシフェン継続対中止）",
    "setting": "early",
    "subtypes": [
      "HR+（HER2非限定）"
    ],
    "stages": [],
    "timing": [
      "adjuvant"
    ],
    "population": "タモキシフェン5年を受けた早期浸潤性乳癌6,953例。ER陽性2,755例、ER未検査4,198例。掲載する2013年イベント数はER陽性だけでなく未検査例を含む全割付集団。HER2による選択なし。",
    "cardPopulation": "タモキシフェン5年を受けた早期浸潤性乳癌6,953例。ER陽性2,755例、ER未検査4,198例。掲載する2013年イベント数はER陽性だけでなく未検査例を含む全割付集団。HER2による選択なし。",
    "experimental": "タモキシフェンをさらに5年継続（計10年）",
    "control": "タモキシフェンを5年で中止",
    "trial_registration": "ISRCTN17222211",
    "primaryEndpoint": "再発・乳癌死亡・全死亡（主結果抄録。評価項目の階層は抄録で未確認）",
    "result": "2013年ASCO主結果抄録：再発580/3,468対672/3,485（P=0.003）。再発後死亡392対443（P=0.05）。全死亡849対910（P=0.10）で、全体OSの有意差は示されず。",
    "publicationDate": "2013-06-20",
    "publicationYear": 2013,
    "publicationDateType": "online_first",
    "resultDate": "2013年ASCO学会抄録。2022年Trans-aTTom検体解析は関連報告として区別。",
    "sources": [
      {
        "title": "Gray et al. aTTom: Long-term effects of continuing adjuvant tamoxifen to 10 years versus stopping at 5 years in 6,953 women",
        "url": "https://ascopubs.org/doi/abs/10.1200/jco.2013.31.18_suppl.5",
        "kind": "ASCO公式学会抄録（主結果。全文論文ではない）",
        "publicationDate": "2013-06-20",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "Bartlett et al. Breast Cancer Index: Final Analysis of Trans-aTTom",
        "url": "https://pubmed.ncbi.nlm.nih.gov/35144966/",
        "kind": "関連原著・検体サブセット解析の抄録確認",
        "publicationDate": "2022-02-10",
        "checkedDate": "2026-10-06"
      }
    ],
    "caveat": "主結果はASCO公式学会抄録で、同ページは全文本文なしと明記。Trans-aTTomの原著は主試験全体の原著全文の代用ではない。ER未検査例を含む結果をER陽性限定としない。子宮内膜癌は102対45例、同癌死亡37対20例と延長群で増加。",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "articleEvidence": {
      "status": "conference_only",
      "label": "原著論文未確認（学会抄録ベース）",
      "note": "ASCO公式の主結果抄録を確認。同ページに「全文本文を含まない学会抄録」と明記されている。2022年Trans-aTTom原著は検体サブセット研究であり、主試験全体の原著全文とは区別。",
      "sourceUrl": "https://ascopubs.org/doi/abs/10.1200/jco.2013.31.18_suppl.5"
    },
    "guidelineReferences": [
      {
        "trialId": "attom",
        "guidelineId": "jbcs-2022-web-2024",
        "organization": "JBCS",
        "section": "薬物療法 CQ4",
        "title": "浸潤性乳癌に対して，術後5年間の内分泌療法後に内分泌療法の追加投与は勧められるか？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq4/",
        "citationEvidence": "参考文献5: Gray et al., JCO 2013;31(18_suppl):5（aTTom主結果抄録）。",
        "referenceNumber": 5,
        "relationship": "explicit_citation",
        "verificationMethod": "official_guideline_body_and_references",
        "accessMethod": "JBCS公式WEB版の本文・参考文献を直接確認",
        "citedPublicationUrls": [
          "https://ascopubs.org/doi/abs/10.1200/jco.2013.31.18_suppl.5"
        ],
        "checkedDate": "2026-10-06",
        "interpretationNote": "学会抄録としての直接引用。Trans-aTTomのBCI論文とは区別。"
      }
    ],
    "stageLabel": "早期・非転移乳癌。詳細な病期別適格条件を全文で確認していないため、I–IIIの病期タグは付けない。",
    "subtypeNote": "HER2陰性に限定した比較ではない。HR陽性の検索枠に配置し、原試験に受容体不明例を含む場合は対象欄に明示。",
    "lineBuckets": [],
    "regimenAgents": [
      "tamoxifen"
    ],
    "agents": [],
    "drugClasses": [
      "内分泌療法"
    ],
    "resultInterpretation": "主結果抄録で再発減少。全体OSは有意差なし。",
    "totalEndocrineDuration": "10年対5年",
    "primaryPublication": {
      "date": "2008-05-20",
      "precision": "day",
      "sourceUrl": "https://ascopubs.org/doi/10.1200/jco.2008.26.15_suppl.513",
      "note": "確認できた初回主要結果はASCO 2008の予備結果抄録。2013年は成熟した更新抄録であり、2022年Trans-aTTomは検体サブセット原著。主試験全体の原著全文が存在すると扱わない。"
    },
    "publicationEra": "earlier",
    "reports": [
      {
        "id": "attom-preliminary-2008",
        "label": "初回予備結果の学会抄録",
        "publicationDate": "2008-05-20",
        "result": "2008年の予備報告では、再発の有意な減少はまだ示されなかった。2013年の成熟した更新結果を主表示に採用。",
        "sourceUrl": "https://ascopubs.org/doi/10.1200/jco.2008.26.15_suppl.513",
        "articleEvidence": {
          "status": "conference_only",
          "label": "原著論文未確認（学会抄録ベース）",
          "note": "一次論文の公開抄録・書誌を確認。原著全文は未確認。公開索引の本文抜粋や試験登録による適格条件の補足は全文確認と区別する。",
          "sourceUrl": "https://ascopubs.org/doi/10.1200/jco.2008.26.15_suppl.513"
        },
        "caveat": "原著全文ではなくASCO公式学会抄録。"
      },
      {
        "id": "attom-trans-2022",
        "label": "Trans-aTTom：BCI検体解析の最終報告",
        "publicationDate": "2022-02-10",
        "result": "BCI測定可能2,445例中、事前規定のリンパ節陽性789例を重点解析。BCI（H/I）高値群はRFIで絶対差9.7ポイント、HR 0.33（95% CI 0.14–0.75）、低値群はHR 1.11（0.76–1.64）。治療×BCIのRFI交互作用P=0.037。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/35144966/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "一次論文の公開抄録・書誌を確認。原著全文は未確認。公開索引の本文抜粋や試験登録による適格条件の補足は全文確認と区別する。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/35144966/"
        },
        "caveat": "前向き計画・後ろ向き検体解析。aTTom全6,953例の最終有効性原著ではない。低イベント数のN0集団では検出力不足。",
        "reportType": "biomarker_secondary_analysis",
        "population": "HR陽性かつ検体のある2,445例、主要な予測評価はN+ 789例"
      }
    ]
  },
  {
    "id": "elipse",
    "name": "ELIPSE / SOLTI-1905",
    "phase": "0（登録分類 Early I）",
    "design": "前向き・単群の短期術前window試験",
    "setting": "early",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [
      "I",
      "II"
    ],
    "timing": [
      "neoadjuvant"
    ],
    "lineBuckets": [],
    "agents": [
      "elacestrant"
    ],
    "regimenAgents": [
      "elacestrant"
    ],
    "drugClasses": [
      "SERD"
    ],
    "population": "未治療・閉経後、ER陽性/HER2陰性、T1c（1.5 cm以上）–T3、N0、局所Ki67 10%以上。主要評価可能22例。",
    "cardPopulation": "未治療・閉経後、ER陽性/HER2陰性、T1c（1.5 cm以上）–T3、N0、局所Ki67 10%以上。主要評価可能22例。",
    "experimental": "エラセストラント345 mg/日を4週間",
    "control": "なし（単群）",
    "primaryEndpoint": "28日時点のcomplete cell-cycle arrest（Ki67≤2.7%）",
    "result": "CCCA 27.3%。Ki67幾何平均変化−52.9%（95% CI −67.4～−32.1、P=0.007）。",
    "publicationDate": "2025-01-16",
    "publicationYear": 2025,
    "resultDate": "掲載解析の公表：2025-01-16（カットオフとは別）",
    "trial_registration": "NCT04797728",
    "sources": [
      {
        "title": "ELIPSE / SOLTI-1905 原著",
        "url": "https://pubmed.ncbi.nlm.nih.gov/39820652/",
        "kind": "原著・抄録確認"
      },
      {
        "title": "ELIPSE 原稿公開日",
        "url": "https://aacrjournals.org/clincancerres/article/doi/10.1158/1078-0432.CCR-24-2460/751132/am/Elacestrant-in-women-with-estrogen-receptor",
        "kind": "出版社公式・2025-01-16公開受理原稿"
      },
      {
        "title": "ELIPSE登録・Phase分類と23例",
        "url": "https://clinicaltrials.gov/study/NCT04797728",
        "kind": "試験登録"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "公開一次抄録で確認できる範囲を記載。原著全文未確認。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/39820652/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "japanApproval": "未評価",
    "stageLabel": "cT1c–T3 N0に基づく解剖学的病期の検索目安。短期術前薬力学研究。",
    "caveat": "登録概要はphase 0、登録Phase欄はEarly Phase 1。第II相ではない。再発・生存利益や術後適応を示さない。登録23例と主要評価可能22例を区別。",
    "esr1Context": "ESR1変異選択ではない。",
    "priorCdk46Context": "未治療早期乳癌の短期術前投与。",
    "safety": "Grade 1貧血21.7%。Grade 3皮疹1例で中止。他の重篤有害事象なし。",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "公開一次抄録で確認できる範囲を記載。原著全文未確認。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/39820652/",
      "checkedDate": "2026-10-06"
    },
    "issuePublicationDate": "2025-04-01",
    "publicationDateType": "accepted_manuscript_online_date",
    "primaryPublication": {
      "date": "2025-01-16",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/39820652/",
      "note": "初回の主要結果原著。ELIPSEは2025-01-16の公開受理原稿。"
    },
    "reports": []
  },
  {
    "id": "ember-1",
    "name": "EMBER / EMBER-1（ER+/HER2−コホート）",
    "phase": "Ia/Ib",
    "design": "非盲検・用量漸増／複数拡大コホート（Part A内の割付あり）",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "lineBuckets": [
      "firstline",
      "endocrine_pretreated"
    ],
    "agents": [
      "imlunestrant"
    ],
    "regimenAgents": [
      "imlunestrant",
      "abemaciclib",
      "aromatase inhibitor",
      "everolimus",
      "alpelisib"
    ],
    "drugClasses": [
      "SERD"
    ],
    "population": "本報告はER陽性/HER2陰性進行乳癌262例。単剤・各併用コホートは前治療条件が異なる。",
    "cardPopulation": "本報告はER陽性/HER2陰性進行乳癌262例。単剤・各併用コホートは前治療条件が異なる。",
    "experimental": "イムルネストラント単剤、またはアベマシクリブ±AI／エベロリムス／アルペリシブ併用",
    "control": "標準治療対照なし。用量・併用別コホート。",
    "primaryEndpoint": "第II相推奨用量（RP2D）の決定。安全性・ORR・PFSは副次評価。",
    "result": "RP2Dは400 mg/日。単剤RP2D群51例のPFS中央値7.2か月（95% CI 3.7–8.3）。探索的で、標準治療との優越性比較ではない。",
    "publicationDate": "2024-09-06",
    "publicationYear": 2024,
    "resultDate": "掲載解析の公表：2024-09-06（カットオフとは別）",
    "trial_registration": "NCT04188548",
    "sources": [
      {
        "title": "EMBER / EMBER-1（ER+/HER2−コホート） 原著",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11637582/",
        "kind": "原著・本文確認"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "原著のMethods・対象別Results・Safety・Discussionを確認。付録全体の精査ではない。",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11637582/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "japanApproval": "未評価",
    "lineLabel": "未治療・既治療の別コホート",
    "caveat": "用量漸増・非比較コホートをまとめた初期相。異なる前治療集団間のPFS比較はできない。HER2陽性・子宮内膜癌部分は本結果カードに含めない。",
    "safety": "単剤RP2D：Grade≥3 TEAE 19.6%、Grade≥3治療関連AE 9.8%。毒性による中止なし。",
    "safetyEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "原著のMethods・対象別Results・Safety・Discussionを確認。付録全体の精査ではない。",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11637582/",
      "checkedDate": "2026-10-06"
    },
    "priorCdk46Context": "単剤RP2Dは92.2%既治療。アベマシクリブ±AI群はCDK4/6阻害薬未治療（進行乳癌の全身療法未治療は69.4%）。エベロリムス／アルペリシブ群は全例既治療。",
    "esr1Context": "ESR1変異必須ではない。変異別解析は探索的。",
    "issuePublicationDate": "2024-12-10",
    "primaryPublication": {
      "date": "2024-09-06",
      "precision": "day",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11637582/",
      "note": "初回の主要結果原著。"
    },
    "reports": []
  },
  {
    "id": "ameera-1",
    "name": "AMEERA-1（単剤Arm 1）",
    "phase": "I/II",
    "design": "非盲検・単群の用量漸増／拡大",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "lineBuckets": [
      "endocrine_pretreated"
    ],
    "agents": [
      "amcenestrant"
    ],
    "regimenAgents": [
      "amcenestrant"
    ],
    "drugClasses": [
      "SERD"
    ],
    "population": "閉経後ER陽性/HER2陰性進行乳癌。単剤用量漸増16例、拡大49例。多くは標的療法・フルベストラントを含む重治療歴。",
    "cardPopulation": "閉経後ER陽性/HER2陰性進行乳癌。単剤用量漸増16例、拡大49例。多くは標的療法・フルベストラントを含む重治療歴。",
    "experimental": "アムセネストラント単剤（漸増20–600 mg/日、拡大400 mg/日）",
    "control": "なし（単群）",
    "primaryEndpoint": "用量漸増：安全性・推奨用量。拡大：確認ORR。",
    "result": "400 mg/日をRP2Dに選定。拡大部は中間解析3/45で規定基準（5例以上）未達のため登録中止。最終ORR 5/46（10.9%）、CBR 13/46（28.3%）。",
    "publicationDate": "2022-07-15",
    "publicationYear": 2022,
    "resultDate": "掲載解析の公表：2022-07-15（カットオフとは別）",
    "trial_registration": "NCT03284957",
    "sources": [
      {
        "title": "AMEERA-1（単剤Arm 1） 原著",
        "url": "https://www.nature.com/articles/s41467-022-31668-8",
        "kind": "原著・抄録確認"
      }
    ],
    "articleEvidence": {
      "status": "body_excerpt_only",
      "label": "原著論文未確認（抄録・本文抜粋ベース）",
      "note": "原著抄録と公開本文の中間解析・登録中止箇所を照合。全文精査済みとは扱わない。",
      "sourceUrl": "https://www.nature.com/articles/s41467-022-31668-8",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "japanApproval": "未評価",
    "lineLabel": "内分泌療法等の既治療",
    "caveat": "ここで扱うのは単剤Arm 1のみ。初期相の活性所見で、後続AMEERA-3/5の比較試験結果を置き換えない。",
    "safety": "単剤報告でGrade≥3治療関連AEなし。用量制限毒性なし。",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "公開一次抄録で確認できる範囲を記載。原著全文未確認。",
      "sourceUrl": "https://www.nature.com/articles/s41467-022-31668-8",
      "checkedDate": "2026-10-06"
    },
    "esr1Context": "ESR1変異必須ではない。変異・野生型CBRは小集団の探索的評価。",
    "primaryPublication": {
      "date": "2022-07-15",
      "precision": "day",
      "sourceUrl": "https://www.nature.com/articles/s41467-022-31668-8",
      "note": "初回の主要結果原著。"
    },
    "reports": []
  },
  {
    "id": "sumit-bc",
    "name": "SUMIT-BC",
    "phase": "II",
    "design": "無作為化・非盲検・3群の第II相用量評価試験。正式な群間仮説検定を目的としない。",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行・転移乳癌（個別適格条件参照）",
    "lineBuckets": [
      "endocrine_pretreated"
    ],
    "lineLabel": "AI＋CDK4/6阻害薬による前治療後",
    "population": "AI＋CDK4/6阻害薬を直前の治療として受けたHR陽性/HER2陰性局所進行・転移乳癌の女性。投与・解析対象59例（360 mg併用20例、240 mg併用19例、単独20例）。登録60例のうち、240 mg群に誤って割り付けられたscreen failure 1例は未投与で除外。",
    "cardPopulation": "HR+/HER2−、AI＋CDK4/6阻害薬既治療。投与・解析59例の3群用量評価。",
    "experimental": "samuraciclib 360 mg 1日1回＋フルベストラント（20例）、または240 mg 1日1回＋フルベストラント（19例）",
    "control": "フルベストラント単独（20例）",
    "primaryEndpoint": "担当医評価による24週の臨床的ベネフィット率（CBR：CR/PRまたはSDが24週以上）",
    "result": "比較順は360 mg併用／240 mg併用／単独。CBRは12/20（60.0%）／12/19（63.2%）／8/20（40.0%）。対単独のオッズ比は2.250（90% CI 0.652–7.778）と2.571（90% CI 0.724–9.161）。副次PFS中央値は7.8（90% CI 3.7–9.4）／8.5（3.5–11.2）／5.6（2.1–9.1）か月。測定可能病変を有する18／14／14例でORRは33.3%／21.4%／14.3%。正式な仮説検定は目的外で、統計学的有意な改善を確認した試験とは扱わない。",
    "caveat": "CDK7阻害による耐性克服を探索する小規模・非盲検第II相。担当医RECIST評価でBICR・独立DMCなし。CBR/ORRは確定・未確定反応を含む。TP53wtはベースラインctDNAでTP53変異が未検出という定義で、組織の野生型を証明しない。事前規定の小集団解析は仮説生成で、予測バイオマーカーや用量の優劣は未確立。PFS HR、OS成熟度、データcutoffは確認できず補わない。SABCS 2025で既発表の結果の正式論文化であり、今回の数値は旧抄録ではなくaccepted原著本文に基づく。",
    "safety": "比較順は360 mg併用／240 mg併用／単独。Grade 3 TRAEは35.0%／31.6%／0%、Grade 4–5 TRAEは各群0例。全Grade下痢80.0%／52.6%／0%、悪心75.0%／42.1%／15.0%。samuraciclib減量は45.0%／42.1%、TRAEによる恒久中止は0／1／0例。併用2群で計4例の死亡があり、原著では疾患進行による死亡と判断。死亡なしとは記載しない。制吐・止瀉の予防／対処を伴う。",
    "safetyEvidence": {
      "status": "full_text_checked",
      "label": "Accepted原著本文確認済み",
      "note": "親タスクは出版社accepted PDF全文・Tables 2–5を確認。実装タスクは出版社書誌・抄録、公式登録と、同一DOI・題名の公開原著本文のTables 2–5／Methodsを照合。Article in Pressで最終版への編集があり得る。",
      "sourceUrl": "https://www.nature.com/articles/s41467-026-78309-y_reference.pdf",
      "checkedDate": "2026-10-11",
      "additionalSourceUrls": [
        "https://www.researchgate.net/publication/415255540_A_randomized_controlled_trial_of_CDK7_inhibitor_samuraciclib_plus_fulvestrant_in_advanced_HRHER2-_breast_cancer"
      ]
    },
    "trial_registration": "NCT05963984",
    "doi": "10.1038/s41467-026-78309-y",
    "paperKeys": [
      "doi:10.1038/s41467-026-78309-y"
    ],
    "primaryAnalysisKey": "sumitbcprimaryrandomizeddoseevaluationfas59",
    "dataCutoff": "未確認",
    "publicationDate": "2026-10-05",
    "publicationYear": 2026,
    "publicationDateType": "online_first",
    "resultDate": "2026-10-05",
    "resultDateLabel": "accepted原著初回オンライン公表日（cutoffではない）",
    "primaryPublication": {
      "date": "2026-10-05",
      "precision": "day",
      "sourceUrl": "https://www.nature.com/articles/s41467-026-78309-y",
      "sourceTitle": "A randomized controlled trial of CDK7 inhibitor samuraciclib plus fulvestrant in advanced HR+/HER2− breast cancer",
      "sourceType": "original_paper",
      "note": "出版社のPublished日。SABCS 2025抄録は2026-02-17公表だが、初回原著日は移さない。公開時刻は確認していない。"
    },
    "sources": [
      {
        "title": "Pernas et al. Nature Communications 2026 — accepted original article",
        "url": "https://www.nature.com/articles/s41467-026-78309-y",
        "publicationDate": "2026-10-05",
        "kind": "出版社書誌・抄録",
        "evidenceStatus": "abstract_only",
        "checkedDate": "2026-10-11"
      },
      {
        "title": "Accepted原著本文（Methods・Tables 2–5）",
        "url": "https://www.nature.com/articles/s41467-026-78309-y_reference.pdf",
        "publicationDate": "2026-10-05",
        "kind": "原著本文",
        "evidenceStatus": "full_text_checked",
        "checkedDate": "2026-10-11"
      },
      {
        "title": "同一DOIの公開原著本文（照合に用いたコピー）",
        "url": "https://www.researchgate.net/publication/415255540_A_randomized_controlled_trial_of_CDK7_inhibitor_samuraciclib_plus_fulvestrant_in_advanced_HRHER2-_breast_cancer",
        "kind": "公開原著コピー",
        "evidenceStatus": "full_text_checked",
        "checkedDate": "2026-10-11"
      },
      {
        "title": "NCT05963984 — official phase II registration",
        "url": "https://clinicaltrials.gov/study/NCT05963984",
        "kind": "公式登録",
        "checkedDate": "2026-10-11"
      },
      {
        "title": "先行SABCS 2025抄録（2026-02-17公表）",
        "url": "https://aacrjournals.org/clincancerres/article/32/4_Supplement/PS1-08-06/772885/Abstract-PS1-08-06-Results-of-the-phase-2-SUMIT-BC",
        "kind": "先行学会報告（今回の結果・安全性値には使わない）",
        "publicationDate": "2026-02-17"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "Accepted原著本文確認済み",
      "note": "親タスクは出版社accepted PDF全文・Tables 2–5を確認。実装タスクは出版社書誌・抄録、公式登録と、同一DOI・題名の公開原著本文のTables 2–5／Methodsを照合。Article in Pressで最終版への編集があり得る。",
      "sourceUrl": "https://www.nature.com/articles/s41467-026-78309-y_reference.pdf",
      "checkedDate": "2026-10-11",
      "additionalSourceUrls": [
        "https://www.researchgate.net/publication/415255540_A_randomized_controlled_trial_of_CDK7_inhibitor_samuraciclib_plus_fulvestrant_in_advanced_HRHER2-_breast_cancer"
      ]
    },
    "scopeEvidence": {
      "verifiedPhase": "II",
      "resultType": "interventional-results",
      "phaseSourceUrls": [
        "https://www.nature.com/articles/s41467-026-78309-y_reference.pdf",
        "https://clinicaltrials.gov/study/NCT05963984"
      ],
      "resultSourceUrls": [
        "https://www.nature.com/articles/s41467-026-78309-y_reference.pdf"
      ],
      "checkedAt": "2026-10-11"
    },
    "checkedDate": "2026-10-11",
    "checkedTimezone": "UTC",
    "agents": [
      "samuraciclib",
      "fulvestrant"
    ],
    "regimenAgents": [
      "samuraciclib",
      "fulvestrant"
    ],
    "drugClasses": [
      "CDK7 inhibitor",
      "ER"
    ],
    "priorCdk46Context": "直前にAI＋CDK4/6阻害薬を使用。用量評価の対象をCDK4/6阻害薬未治療患者へ一般化しない。",
    "guidelineReferences": [],
    "japanApproval": "未評価",
    "outcomeStatus": "exploratory",
    "reports": []
  },
  {
    "id": "nrg-br002",
    "name": "NRG-BR002",
    "phase": "II",
    "design": "第II/III相シームレス設計の無作為化・非盲検第II相部分。第III相には進まず。",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-",
      "HER2+",
      "TNBC"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "原発巣制御済みの少数転移乳癌（遠隔転移4個以下）",
    "lineBuckets": [
      "firstline"
    ],
    "lineLabel": "一次全身治療を予定または開始済みの文脈",
    "population": "原発巣制御済み、遠隔転移4個以下で全転移巣にSBRTまたは切除が可能。一次全身治療を予定または開始済み（開始済みなら12か月以内、進行なし）。129例登録、適格125例を解析（局所治療追加60例、非追加65例）。登録時に一次全身治療開始済み108例、未開始17例。HR+/HER2−が99/125例（79%）で、HER2陽性・TNBCも含む。脳転移は除外。",
    "cardPopulation": "原発巣制御済み・転移4個以下。一次全身治療を予定または開始済み。適格125例。",
    "experimental": "一次全身治療＋全転移巣へのSBRTまたは手術（60例）",
    "control": "一次全身治療のみ（65例）",
    "primaryEndpoint": "第II相go/no-go判定のPFS（進行または死亡）",
    "result": "2021-12-20 cutoffの第II相主要解析。適格125例、追跡中央値29.9か月、PFSイベント72件。局所治療追加／非追加のPFS中央値は19.5／23.0か月、HR 0.92（95% CI 0.57–1.47；70% CI 0.71–1.17）、片側log-rank P=0.36（層別P=0.42）。PFS改善のgo基準を満たさず、第III相へ進まなかった。延長追跡は下の関連報告で区別する。",
    "caveat": "第II/III相という登録上の設計と、今回実施・報告された第II相を区別する。今回の原著は学会で既発表の主要解析と延長追跡を正式論文化したもの。HR+/HER2−が79%で他サブタイプへの一般化に限界があり、2014–2019年の登録で現在の治療体系にも注意が必要。生存延長を目的とする一律の局所治療追加を支持する結果ではなく、症状緩和の目的とは区別する。CTCによる患者選択は少数例の探索解析で未確立。OS HRは抄録と延長追跡本文で不一致があり原因未確定のため採用・混用しない。",
    "safety": "非追加群はGrade 3有害事象7例・Grade 4 1例、局所治療追加群はGrade 3 3例・Grade 4 0例。試験関連Grade 5死亡は0例。小規模な評価であり晩期毒性がないことを証明しない。",
    "safetyEvidence": {
      "status": "full_text_checked",
      "label": "公開著者原稿の原著本文確認済み",
      "note": "PMC公開著者原稿の本文・Table 2を読み、PubMed公式XMLと登録情報を照合。出版社PDF自体は確認していない。本文と表の不一致は注記し該当値を採用しない。",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13647293/",
      "checkedDate": "2026-10-11"
    },
    "trial_registration": "NCT02364557",
    "doi": "10.1200/jco-26-00201",
    "paperKeys": [
      "doi:10.1200/jco-26-00201",
      "pmid:42842849"
    ],
    "primaryAnalysisKey": "nrgbr002phaseiiprimarygonogopfs125",
    "dataCutoff": "2021-12-20",
    "publicationDate": "2026-10-07",
    "publicationYear": 2026,
    "publicationDateType": "online_first",
    "resultDate": "2021-12-20",
    "resultDateLabel": "第II相主要解析のデータcutoff（原著公表日ではない）",
    "primaryPublication": {
      "date": "2026-10-07",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42842849/",
      "sourceTitle": "NRG-BR002: A Randomized Phase II/III Trial of Metastases-Directed Ablation with First-Line Systemic Therapy for Oligometastatic Breast Cancer",
      "sourceType": "original_paper",
      "note": "PubMed Electronic ArticleDateとPMCのPublished before final editing日で初回原著を確認。学会初報・登録結果掲載日・PMC公開日は代用しない。"
    },
    "sources": [
      {
        "title": "NRG-BR002 — JCO original publisher",
        "url": "https://ascopubs.org/doi/10.1200/JCO-26-00201",
        "publicationDate": "2026-10-07",
        "kind": "出版社原著リンク",
        "checkedDate": "2026-10-11"
      },
      {
        "title": "PubMed PMID 42842849 — electronic publication and abstract",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42842849/",
        "publicationDate": "2026-10-07",
        "kind": "原著書誌・抄録",
        "evidenceStatus": "abstract_only",
        "checkedDate": "2026-10-11"
      },
      {
        "title": "PMC公開著者原稿 — Methods、本文、Table 2",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13647293/",
        "publicationDate": "2026-10-07",
        "kind": "原著本文",
        "evidenceStatus": "full_text_checked",
        "checkedDate": "2026-10-11"
      },
      {
        "title": "NCT02364557 — official phase II/III design",
        "url": "https://clinicaltrials.gov/study/NCT02364557",
        "kind": "公式登録（報告された第II相は原著で確認）",
        "checkedDate": "2026-10-11"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "公開著者原稿の原著本文確認済み",
      "note": "PMC公開著者原稿の本文・Table 2を読み、PubMed公式XMLと登録情報を照合。出版社PDF自体は確認していない。本文と表の不一致は注記し該当値を採用しない。",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13647293/",
      "checkedDate": "2026-10-11"
    },
    "scopeEvidence": {
      "verifiedPhase": "II",
      "resultType": "interventional-results",
      "phaseSourceUrls": [
        "https://pmc.ncbi.nlm.nih.gov/articles/PMC13647293/",
        "https://clinicaltrials.gov/study/NCT02364557"
      ],
      "resultSourceUrls": [
        "https://pmc.ncbi.nlm.nih.gov/articles/PMC13647293/"
      ],
      "checkedAt": "2026-10-11"
    },
    "checkedDate": "2026-10-11",
    "checkedTimezone": "UTC",
    "agents": [],
    "regimenAgents": [],
    "drugClasses": [],
    "guidelineReferences": [],
    "japanApproval": "未評価",
    "outcomeStatus": "negative",
    "reports": [
      {
        "id": "nrg-br002-extended-followup-2026",
        "analysisKey": "nrgbr002nonprotocolspecifiedextendedfollowuppfs125",
        "label": "同じ2026年原著内の非プロトコール規定・延長追跡",
        "publicationDate": "2026-10-07",
        "publicationDateType": "online_first",
        "resultDate": "2025-09-04",
        "resultDateLabel": "延長追跡のデータcutoff（新たな試験・原著公表日ではない）",
        "analysisPopulation": "同じ適格125例：局所治療追加60例／非追加65例。追跡中央値57.5か月。",
        "result": "PFSイベント81件。局所治療追加／非追加のPFS中央値は29.5／23.0か月、HR 0.93（95% CI 0.60–1.44）、片側P=0.38（層別P=0.52）。延長追跡でもPFS改善の裏付けは得られなかった。",
        "caveat": "非プロトコール規定の延長追跡で、主要解析と同じ試験・患者集団。局所治療追加群のPFS中央値95% CIに本文／Table 2不一致があるため、そのCIは記載しない。OS HRにも抄録／本文の不一致があり原因未確定のため数値を採用しない。",
        "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13647293/",
        "paperKeys": [
          "doi:10.1200/jco-26-00201",
          "pmid:42842849"
        ],
        "articleEvidence": {
          "status": "full_text_checked",
          "label": "公開著者原稿の原著本文確認済み",
          "note": "PMC公開著者原稿の本文・Table 2を読み、PubMed公式XMLと登録情報を照合。出版社PDF自体は確認していない。本文と表の不一致は注記し該当値を採用しない。",
          "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13647293/",
          "checkedDate": "2026-10-11"
        },
        "checkedDate": "2026-10-11"
      }
    ]
  },
  {
    "id": "rt-charm",
    "name": "RT CHARM (Alliance A221505)",
    "phase": "III",
    "design": "非盲検・1:1無作為化・非劣性第III相。再建時期と自家組織／インプラント単独で層別。",
    "setting": "early",
    "subtypes": [
      "サブタイプ非限定"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "乳房切除後、再建とPMRTを予定（詳細病期・適格条件は公開プロトコル参照）",
    "lineBuckets": [],
    "population": "片側浸潤性乳癌で、即時または遅延再建と乳房切除後放射線療法（PMRT）を予定する女性。2018–2021年に898例登録、追跡中央値3.9年。24か月の主要評価可能集団は825例（寡分割422例、通常分割403例）。422／403は割付総数ではなく評価可能分母。割付群総数と主要評価不能の理由は未確認。",
    "cardPopulation": "再建を伴うPMRTを予定する女性。登録898例、主要評価可能825例。",
    "experimental": "寡分割PMRT：42.56 Gy／16回／約3週",
    "control": "通常分割PMRT：50 Gy／25回／約5週",
    "primaryEndpoint": "24か月の再建合併症（創傷治癒問題、再入院、被膜拘縮、予定外再手術、再建不成功の複合評価）",
    "result": "主要評価可能集団の24か月再建合併症は、寡分割52/422（12.3%）、通常41/403（10.2%）。抄録の推定差は通常−寡分割で−2.1ポイント（95% CI −6.5～2.2）。絶対差10ポイントの非劣性マージンに基づき、原著抄録は寡分割の非劣性と結論している。副次評価の36か月局所領域再発は寡分割1.5%（95% CI 0.7～3.2）、通常2.2%（1.1～4.3）で、統計学的有意差なし。",
    "caveat": "25回から16回へ照射回数を9回減らす選択肢を、再建合併症という主要評価から支える結果。生存非劣性や同等性を示した試験とは扱わない。設計時の通常群合併症率は25%を想定したが、実測10.2%に対して許容差10ポイントは大きく、解釈に注意が必要。インプラント単独対自家組織の合併症OR 1.65は再建方法の無作為比較ではなく、CI・調整方法は未確認。OSの結果・成熟度、HR、データcutoff、割付群総数、825例の評価可能性／欠測理由は不明で補わない。2024年の学会報告とは数値を混ぜず、今回の2026年原著抄録の値を使用。原著本文・日本の適応／承認・ガイドライン位置づけは未確認。公開プロトコル確認済み。",
    "safety": "原著抄録では急性・晩期毒性に統計学的有意差なしと記載。項目別・グレード別の頻度は未確認で、無毒性や同等性とは判断しない。",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著の結果数値はNCBI配信抄録およびPubMed公式XML抄録で確認。JCO原著本文は未読。公開プロトコル確認済み（相・割付・層別・非劣性設計）。プロトコルの読取を原著本文確認と扱わない。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42863096/",
      "checkedDate": "2026-10-13"
    },
    "trial_registration": "NCT03414970",
    "doi": "10.1200/jco-26-00474",
    "paperKeys": [
      "pmid:42863096",
      "doi:10.1200/jco-26-00474"
    ],
    "primaryAnalysisKey": "rtcharma221505primaryresultsjco2026pmid42863096",
    "dataCutoff": "未確認",
    "publicationDate": "2026-10-12",
    "publicationYear": 2026,
    "publicationDateType": "online_first",
    "resultDate": "2026-10-12",
    "resultDateLabel": "原著電子公表日（データcutoffではない）",
    "primaryPublication": {
      "date": "2026-10-12",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42863096/",
      "sourceTitle": "Randomized Trial of Hypofractionated Postmastectomy Radiation Therapy in Women With Breast Reconstruction (RT CHARM, Alliance A221505)",
      "sourceType": "original_paper",
      "note": "PubMed公式XMLのElectronic ArticleDateで確認。先行2024年学会発表・PubMed登録日・プロトコル版更新日は初回原著日として用いない。"
    },
    "sources": [
      {
        "title": "RT CHARM／Alliance A221505 — JCO原著抄録、PMID 42863096",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42863096/",
        "publicationDate": "2026-10-12",
        "kind": "原著論文未確認（抄録ベース）",
        "evidenceStatus": "abstract_only",
        "checkedDate": "2026-10-13"
      },
      {
        "title": "JCO original DOI 10.1200/JCO-26-00474（本文未確認）",
        "url": "https://doi.org/10.1200/JCO-26-00474",
        "publicationDate": "2026-10-12",
        "kind": "原著書誌リンク",
        "checkedDate": "2026-10-13"
      },
      {
        "title": "公開プロトコル確認済み — Alliance A221505、2021-10-22版、相・設計・層別・非劣性マージン",
        "url": "https://cdn.clinicaltrials.gov/large-docs/70/NCT03414970/Prot_SAP_000.pdf",
        "kind": "公開プロトコル（原著本文ではない）",
        "checkedDate": "2026-10-13"
      },
      {
        "title": "NCI CIRB A221505 — Phase III randomized trial",
        "url": "https://www.ncicirb.org/node/2846",
        "kind": "公式プロトコル情報",
        "checkedDate": "2026-10-13"
      },
      {
        "title": "NCT03414970 — trial registration",
        "url": "https://clinicaltrials.gov/study/NCT03414970",
        "kind": "公式登録リンク",
        "checkedDate": "2026-10-13"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著の結果数値はNCBI配信抄録およびPubMed公式XML抄録で確認。JCO原著本文は未読。公開プロトコル確認済み（相・割付・層別・非劣性設計）。プロトコルの読取を原著本文確認と扱わない。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42863096/",
      "checkedDate": "2026-10-13"
    },
    "scopeEvidence": {
      "verifiedPhase": "III",
      "resultType": "interventional-results",
      "phaseSourceUrls": [
        "https://cdn.clinicaltrials.gov/large-docs/70/NCT03414970/Prot_SAP_000.pdf",
        "https://www.ncicirb.org/node/2846"
      ],
      "resultSourceUrls": [
        "https://pubmed.ncbi.nlm.nih.gov/42863096/",
        "https://doi.org/10.1200/JCO-26-00474"
      ],
      "checkedAt": "2026-10-13"
    },
    "checkedDate": "2026-10-13",
    "checkedTimezone": "UTC",
    "agents": [],
    "regimenAgents": [],
    "drugClasses": [],
    "guidelineReferences": [],
    "japanApproval": "未評価",
    "outcomeStatus": "noninferiority",
    "analysisEvidence": {
      "primaryEvaluable": 825,
      "hypofractionated": {
        "events": 52,
        "denominator": 422,
        "percent": 12.3
      },
      "conventional": {
        "events": 41,
        "denominator": 403,
        "percent": 10.2
      },
      "estimatedDifference": {
        "order": "conventional-minus-hypofractionated",
        "percentagePoints": -2.1,
        "ci95": [
          -6.5,
          2.2
        ],
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42863096/"
      },
      "noninferiorityMarginPercentagePoints": 10,
      "assumedControlPercent": 25,
      "allocatedArmTotals": null,
      "dataCutoff": null,
      "overallSurvivalMaturity": null
    },
    "reports": []
  },
  {
    "id": "i-bct-1",
    "name": "I-BCT-1",
    "phase": "II",
    "design": "I-BCT-1（NCT02546232）は第II相・非盲検・並行群無作為化介入試験。術前コホートでは週1回パクリタキセル12週にカルボプラチンを追加する群と追加しない群を比較し、その後4サイクルのエピルビシン／シクロホスファミドを実施。登録上の主要評価項目は24週での治療反応（術前コホートはpCR）で、腫瘍分子変化と治療反応の関連が主要目的。本報告は治療群別の実測pCR・EFSとDNAバイオマーカー解析を含む。サブタイプ別比較・RCB・EFS・バイオマーカー検定の事前規定と多重性調整は原著本文未確認のため確定しない。",
    "setting": "early",
    "subtypes": [
      "TNBC",
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [
      "neoadjuvant"
    ],
    "stageLabel": "高リスクHER2陰性cT2–4早期乳癌",
    "lineBuckets": [],
    "population": "原著抄録の解析対象は早期・高リスクHER2陰性cT2–4乳癌187例：TNBC72例（追加35／対照37）、HR陽性115例（追加60／対照55）。登録上の実登録196例と187例を混同しない。研究者の公開データ説明では196例中187例が最終解析とされるが、9例の除外理由とITT解析かどうかは未確認。",
    "cardPopulation": "HER2陰性cT2–4乳癌187例（TNBC72／HR陽性115）。登録196例とは区別。",
    "experimental": "週1回パクリタキセル12週＋カルボプラチン、その後エピルビシン／シクロホスファミド4サイクル",
    "control": "週1回パクリタキセル12週（カルボプラチンなし）、その後エピルビシン／シクロホスファミド4サイクル",
    "primaryEndpoint": "登録上は24週の治療反応（術前コホートはpCR）。本報告のサブタイプ別pCR、RCB、EFSおよび分子解析の統計的階層・事前規定・多重性調整は本文未確認。",
    "result": "TNBCの術後pCRはカルボプラチン追加24/35（69%）対対照16/37（43%）、p=0.036。公表された丸め値の差は26パーセントポイント。pCR＋RCB1は26/35（74%）対24/37（65%）、p=0.45。登録上の反応評価は24週だが、本抄録に手術・評価日の詳細はない。\nHR陽性乳癌のpCRは9/60（15%）対6/55（11%）、p=0.59。pCR＋RCB1は21/60（35%）対9/55（16%）、p=0.033。後者の丸め値の絶対差は19パーセントポイント。サブタイプ・複数評価項目にわたる検定の確証性は未確認。\nTNBCのEFSはカルボプラチン追加群で良好（p=0.017）。2026年原著抄録にはHR・CI、EFS定義、追跡期間、データカットオフ、時点別生存率がないため数値を補わない。OS結果・成熟度も抄録からは確認できない。\n探索的解析では低LOH割合のTNBCで追加群のEFSが良好（p=0.007）。HR陽性の追加群ではHRD陽性5/8対HRD陰性4/47がpCR（p=0.002）。後者は追加群内のバイオマーカー別比較であり、カルボプラチン対対照の治療効果比較ではない。",
    "caveat": "介入成績としてTNBCのpCR改善が確認される。一方、HR陽性ではpCRそのものの有意差はなく、RCB0/1の改善を同じ意味で扱わない。\nDNAバイオマーカー別解析は仮説生成的に解釈する。反応率の相関や群内比較だけで、特定バイオマーカーによる治療選択の臨床的有用性が確立したとはいえない。\n日本の承認状況・ガイドライン推奨・現行の最適治療は今回確認しておらず、試験成績と分ける。\n原著論文未確認（抄録ベース）。出版社本文は取得できず、PubMed原著抄録・公式試験登録・先行学会抄録・研究者公開データ説明を照合した。\n登録196例と本報告187例の差、完全な患者フロー、解析集団、脱落、ITTの扱いは未確認。\nサブタイプ別解析は小規模。RCB・EFS・バイオマーカー解析の統計的階層、事前規定、多重性調整は本文で未確認。\n原著抄録には安全性数値、HR/CI、データカットオフ、追跡期間がなく、OSの報告・成熟度も不明。未成熟と断定しない。\n先行SABCS抄録と原著でLOH検証コホートの分母等が異なるため、両者を完全に同一データカットオフとして結合しない。\n原著の電子公開は2026年10月14日、PubMed掲載も同日。先行学会発表はSABCS2024（開催2024年12月10–13日、発表個別日未確認）、その抄録公開は2025年6月13日であり、原著公開日と区別する。",
    "safety": "安全性：2026年原著抄録には有害事象の頻度・重症度・分母・評価期間が記載されていない。原著の安全性を確認済みとはしない。先行SABCS発表の安全性数値は本原著と同一解析と断定せず、ここでは転記しない。",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著論文未確認（抄録ベース）。出版社本文は取得できず、PubMed原著抄録・公式試験登録・先行学会抄録・研究者公開データ説明を照合した。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42870529/",
      "checkedDate": "2026-10-14"
    },
    "trial_registration": "NCT02546232",
    "doi": "10.1158/1078-0432.ccr-26-2212",
    "paperKeys": [
      "pmid:42870529",
      "doi:10.1158/1078-0432.ccr-26-2212"
    ],
    "primaryAnalysisKey": "ibct1randomizedneoadjuvantclinicalgenomic187ccr2026pmid42870529",
    "dataCutoff": "原著抄録に記載なし",
    "publicationDate": "2026-10-14",
    "publicationYear": 2026,
    "publicationDateType": "online_first",
    "resultDate": "2026-10-14",
    "resultDateLabel": "今回原著電子公表日（データcutoffではない）",
    "primaryPublication": {
      "date": "2026-10-14",
      "status": "unverified",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42870529/",
      "sourceTitle": "DNA-Based Biomarkers as Predictors of Carboplatin Response in Neoadjuvant Treatment for Hormone Receptor Positive and Triple-Negative Breast Cancer.",
      "sourceType": "original_paper",
      "note": "今回の原著電子公表日は確認。試験の最初の原著結果報告かは未確認。SABCS2024の先行発表と区別する。"
    },
    "sources": [
      {
        "title": "Pladsen et al. Clin Cancer Res 2026：PubMed原著抄録（PMID 42870529）",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42870529/",
        "publicationDate": "2026-10-14",
        "kind": "publication",
        "checkedDate": "2026-10-14"
      },
      {
        "title": "ClinicalTrials.gov NCT02546232：I-BCT-1公式登録（第II相・無作為化・評価項目）",
        "url": "https://clinicaltrials.gov/study/NCT02546232",
        "kind": "registry",
        "checkedDate": "2026-10-14"
      },
      {
        "title": "SABCS2024 P2-01-26：I-BCT-1の先行介入成績・試験番号を確認するAACR抄録",
        "url": "https://aacrjournals.org/clincancerres/article/31/12_Supplement/P2-01-26/753736/Abstract-P2-01-26-Carboplatin-added-to-neoadjuvant",
        "publicationDate": "2025-06-13",
        "kind": "conference",
        "checkedDate": "2026-10-14"
      },
      {
        "title": "Oslo University HospitalのI-BCT研究データ公開説明：196例中187例の最終解析",
        "url": "https://www.ega-archive.org/dacs/EGAC50000001170",
        "kind": "primary-data-description",
        "checkedDate": "2026-10-14"
      },
      {
        "title": "原著DOI（本文未確認）",
        "url": "https://doi.org/10.1158/1078-0432.CCR-26-2212",
        "publicationDate": "2026-10-14",
        "kind": "原著書誌リンク",
        "checkedDate": "2026-10-14"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著論文未確認（抄録ベース）。出版社本文は取得できず、PubMed原著抄録・公式試験登録・先行学会抄録・研究者公開データ説明を照合した。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42870529/",
      "checkedDate": "2026-10-14"
    },
    "scopeEvidence": {
      "verifiedPhase": "II",
      "resultType": "interventional-results",
      "phaseSourceUrls": [
        "https://clinicaltrials.gov/study/NCT02546232",
        "https://aacrjournals.org/clincancerres/article/31/12_Supplement/P2-01-26/753736/Abstract-P2-01-26-Carboplatin-added-to-neoadjuvant"
      ],
      "resultSourceUrls": [
        "https://pubmed.ncbi.nlm.nih.gov/42870529/"
      ],
      "checkedAt": "2026-10-14T11:42:00Z"
    },
    "checkedDate": "2026-10-14",
    "checkedTimezone": "UTC",
    "agents": [
      "パクリタキセル",
      "カルボプラチン",
      "エピルビシン",
      "シクロホスファミド"
    ],
    "regimenAgents": [],
    "drugClasses": [],
    "guidelineReferences": [],
    "japanApproval": "未評価",
    "outcomeStatus": "mixed",
    "analysisEvidence": {
      "analyzed": 187,
      "registryEnrollment": 196,
      "tnbc": {
        "carboplatin": {
          "denominator": 35,
          "pcr": 24
        },
        "control": {
          "denominator": 37,
          "pcr": 16
        },
        "pcrP": 0.036,
        "efsP": 0.017
      },
      "hrPositive": {
        "carboplatin": {
          "denominator": 60,
          "pcr": 9
        },
        "control": {
          "denominator": 55,
          "pcr": 6
        },
        "pcrP": 0.59
      },
      "hazardRatio": null,
      "confidenceInterval": null,
      "dataCutoff": null,
      "overallSurvivalMaturity": null,
      "safetyNumericalData": null
    },
    "reports": []
  },
  {
    "id": "a-new",
    "name": "A-NEW（乳癌治療後の体重管理）",
    "phase": "II",
    "design": "NCT04499950。原著抄録と公式登録で第II相を確認。単群・適応型の非無作為化介入試験。全員に行動的減量支援（BWL）を開始し、2か月で5%以上減量したFAST-BWLはBWL継続、5%未満のSLOW-BWLは9週目からContraveを追加。FAST群は反応に基づく参照群で、無作為化対照ではない。",
    "setting": "early",
    "settingLabel": "病期0–III乳癌治療後の体重管理（抗腫瘍治療の比較ではない）",
    "subtypes": [],
    "stages": [],
    "timing": [],
    "stageLabel": "登録対象は病期0–IIIの乳癌既往女性。進行・再発乳癌の薬物治療ライン試験ではない。",
    "lineBuckets": [],
    "population": "病期0–IIIの乳癌既往女性、抄録のBMI基準は27 kg/m²以上。登録ではBMI30以上、または27–29.9で併存症あり。論文55人、2か月前に2人脱落しFAST15人、SLOW38人。登録の実登録数は53人。 乳癌再発・生存改善を検証した集団ではない。",
    "cardPopulation": "病期0–III乳癌既往、BMI≥27。論文55人、初期脱落2人後にFAST15人／SLOW38人。",
    "experimental": "全員に行動的減量支援（BWL）。2か月時点で5%未満の減量にとどまったSLOW-BWL群に、9週目からナルトレキソン／ブプロピオン配合剤（Contrave）を追加。",
    "control": "無作為化対照群なし。初期2か月で5%以上減量したFAST-BWL群はBWLを継続する参照群で、薬剤追加の有効性を比較する同条件対照ではない。",
    "primaryEndpoint": "SLOW-BWL群の6か月時点におけるベースライン比5%以上減量達成率。身体機能・疼痛は登録上の副次評価項目。代謝指標等の事前規定・多重性は本文未確認。",
    "result": "主要評価項目はSLOW-BWLにおける6か月時点のベースライン比5%以上減量。論文では16/38人（42%）。平均減量率5.1%（SD2.9）。\nFAST-BWLでは6か月5%以上減量13/15人（86.7%）、平均10.8%（SD3.5）。初期反応で分けた群なので、この差を薬剤の効果差と解釈しない。\n身体機能・疼痛は登録上の副次評価項目。5%以上減量達成との関連が抄録で報告（P=0.03、0.02）。SLOW群のHbA1c、トリグリセリド改善も報告されたが、抄録だけでは評価項目の事前規定や多重性を確定できない。\n登録済み主要結果は完遂者32人を分母として16人達成。一方、論文はSLOW38人を分母として42%を報告。異なる解析分母を混同しない。\n無作為化比較がないためFAST群との差を薬剤の効果差として計算しない。HR・CI、乳癌再発・OSの結果は確認した抄録に記載がないため補わない。",
    "caveat": "背景：乳癌治療後の体重管理で行動的支援への初期反応が不十分な人への追加介入を検討した。乳癌サバイバーの体重管理に関する第II相介入結果であり、抗腫瘍効果・再発抑制・OS改善を示すものではない。 薬剤を追加しない初期反応不十分例との無作為化比較がなく、薬剤固有の因果的利益は推定できない。日本承認・推奨は未確認。\n原著論文未確認（抄録ベース）。PubMed・出版社抄録と公式試験登録を照合したが、本文PDFは未読。 小規模・非無作為化、観察期間6か月。HR・CI、再発・OSの結果は本抄録にないため作成しない。 論文55人と登録53人、論文主要分母38人と登録完遂分母32人を明確に区別。抄録以上の欠測処理は未確認。 データカットオフと学会発表日は未確認。原著電子公開2026-08-04、今回通知は既存論文の再提示であり公開日ではない。確認日時：2026-10-15T11:42:08.609381Z PubMed登録日・学会発表日は未確認。日本承認・ガイドライン推奨は本試験結果と分け、未評価とする。",
    "safety": "SLOW群の消化器症状は74%。Contrave中の脱落6人中、有害事象によるものは1人。抄録では詳細な重症度・因果判定の全体像は不明。 消化器症状の詳細な分母・Grade別内訳は抄録から確定せず、74%から人数を逆算しない。",
    "trial_registration": "NCT04499950",
    "publicationDate": "2026-08-04",
    "publicationYear": 2026,
    "publicationDateType": "first_online_publication_date",
    "resultDate": "2026-08-04",
    "resultDateLabel": "掲載原著の電子公開日（解析カットオフとは別）",
    "dataCutoff": "未確認",
    "primaryAnalysisKey": "anewphaseii6monthweightlossprimaryslow38pmid42550849",
    "paperKeys": [
      "pmid:42550849",
      "doi:10.1158/1078-0432.ccr-26-0270"
    ],
    "primaryPublication": {
      "date": "2026-08-04",
      "precision": "day",
      "sourceUrl": "https://aacrjournals.org/clincancerres/article/doi/10.1158/1078-0432.CCR-26-0270/787260/Weight-Loss-Responses-to-Pharmacotherapy-in-Breast",
      "title": "Weight Loss Responses to Pharmacotherapy in Breast Cancer Survivors: Results from the Adaptive Nutrition and Exercise Weight Loss (A-NEW) Study",
      "sourceType": "original_paper",
      "note": "本原著の電子公開日。試験の最初の結果原著かは未確認。PubMed登録日・通知受信日とは区別する。"
    },
    "sources": [
      {
        "title": "PubMed PMID 42550849 原著抄録",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42550849/",
        "kind": "publication",
        "checkedDate": "2026-10-15"
      },
      {
        "title": "Clinical Cancer Research 原著抄録",
        "url": "https://aacrjournals.org/clincancerres/article/doi/10.1158/1078-0432.CCR-26-0270/787260/Weight-Loss-Responses-to-Pharmacotherapy-in-Breast",
        "kind": "publication",
        "checkedDate": "2026-10-15"
      },
      {
        "title": "ClinicalTrials.gov NCT04499950 登録・結果",
        "url": "https://clinicaltrials.gov/study/NCT04499950",
        "kind": "registry",
        "checkedDate": "2026-10-15"
      },
      {
        "title": "原著DOI",
        "url": "https://doi.org/10.1158/1078-0432.CCR-26-0270",
        "kind": "publication",
        "publicationDate": "2026-08-04",
        "checkedDate": "2026-10-15"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "PubMed・出版社の原著抄録とClinicalTrials.gov公式登録・結果を照合。原著本文PDFは未読。登録の完遂者解析と論文の解析分母を区別する。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42550849/",
      "checkedDate": "2026-10-15"
    },
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "PubMed・出版社の原著抄録とClinicalTrials.gov公式登録・結果を照合。原著本文PDFは未読。登録の完遂者解析と論文の解析分母を区別する。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42550849/",
      "checkedDate": "2026-10-15"
    },
    "scopeEvidence": {
      "verifiedPhase": "II",
      "resultType": "interventional-results",
      "phaseSourceUrls": [
        "https://pubmed.ncbi.nlm.nih.gov/42550849/",
        "https://clinicaltrials.gov/study/NCT04499950"
      ],
      "resultSourceUrls": [
        "https://pubmed.ncbi.nlm.nih.gov/42550849/",
        "https://aacrjournals.org/clincancerres/article/doi/10.1158/1078-0432.CCR-26-0270/787260/Weight-Loss-Responses-to-Pharmacotherapy-in-Breast"
      ],
      "checkedAt": "2026-10-15T11:42:08.609381Z"
    },
    "checkedDate": "2026-10-15",
    "checkedTimezone": "UTC",
    "agents": [
      "ナルトレキソン",
      "ブプロピオン"
    ],
    "regimenAgents": [],
    "drugClasses": [],
    "guidelineReferences": [],
    "japanApproval": "未評価",
    "outcomeStatus": "mixed",
    "analysisEvidence": {
      "paperEnrolled": 55,
      "withdrawnBeforeTwoMonths": 2,
      "registryEnrollment": 53,
      "slow": {
        "denominator": 38,
        "achievedAtLeast5PercentLoss": 16,
        "reportedPercent": 42,
        "meanLossPercent": 5.1,
        "standardDeviation": 2.9
      },
      "fast": {
        "denominator": 15,
        "achievedAtLeast5PercentLoss": 13,
        "reportedPercent": 86.7,
        "meanLossPercent": 10.8,
        "standardDeviation": 3.5
      },
      "registryCompleter": {
        "denominator": 32,
        "achievedAtLeast5PercentLoss": 16
      },
      "timepointMonths": 6,
      "randomizedComparator": false,
      "hazardRatio": null,
      "confidenceInterval": null,
      "dataCutoff": null,
      "overallSurvivalMaturity": null,
      "safety": {
        "giSymptomsReportedPercent": 74,
        "contraveWithdrawals": 6,
        "adverseEventWithdrawals": 1,
        "gradeBreakdown": null
      }
    },
    "reports": []
  },
  {
    "id": "insite-pfgs",
    "name": "INSITE（CLP0008併合PRO報告）",
    "phase": "III",
    "design": "原著本文・PubMed・公式登録を照合。INSITE（NCT03686215、第III相、14施設）は10:1、CLP0008（NCT04440982、第II相、6施設）は3:1で、標準切除後にpFGS追加と標準手術のみへ無作為化。全員にpegulicianine 1.0 mg/kgを術前投与し、pFGS群では蛍光陽性部の追加切除を実施。本報告は介入に関するPRO解析。第III相の登録主要評価項目は残存癌検出等で、PROを主要と扱わない。第II相ではPRO・患者選好が登録主要評価項目の一つ。第III相のPROの事前規定階層・検定多重性は確定せず探索的に解釈。第III相は原則135日超、第II相は6/12か月の最長回答を採用。解析カットオフ日は未確認。",
    "setting": "early",
    "settingLabel": "乳房温存手術：整容性・患者報告アウトカム",
    "subtypes": [],
    "stages": [],
    "timing": [],
    "stageLabel": "18歳以上、浸潤性乳癌またはDCISで乳房温存手術を受ける女性（原著抄録は病期0–III）。第III相406例から無作為化前離脱14例を除く392例、第II相は原著94例、計486例。術後満足度回答者は55/392（14%）と63/94（67%）、計118/486（24.3%）。第III相は術前療法例を除外、第II相は許容。回答者数は割付総数ではない。",
    "lineBuckets": [],
    "population": "18歳以上、浸潤性乳癌またはDCISで乳房温存手術を受ける女性（原著抄録は病期0–III）。第III相406例から無作為化前離脱14例を除く392例、第II相は原著94例、計486例。術後満足度回答者は55/392（14%）と63/94（67%）、計118/486（24.3%）。第III相は術前療法例を除外、第II相は許容。回答者数は割付総数ではない。",
    "cardPopulation": "18歳以上、浸潤性乳癌またはDCISで乳房温存手術を受ける女性（原著抄録は病期0–III）。第III相406例から無作為化前離脱14例を除く392例、第II相は原著94例、計486例。術後満足度回答者は55/392（14%）と63/94（67%）、計118/486（24.3%）。第III相は術前療法例を除外、第II相は許容。回答者数は割付総数ではない。",
    "experimental": "標準乳房温存切除後にpegulicianine蛍光ガイド下手術（pFGS）を追加",
    "control": "標準乳房温存手術のみ。両群に術前pegulicianineを投与。",
    "primaryEndpoint": "本報告：患者報告アウトカム（PRO）。INSITEの登録主要評価項目は残存癌検出等で、PROの事前規定階層・多重性は未確定のため探索的に解釈。併合CLP0008（第II相）ではPRO・患者選好が主要評価項目の一つ。",
    "result": "第III相：術後満足度（0–100）はpFGS群75.8（50例）対標準群81.2（5例）、p=0.60。平均回答時点5.7か月（4.5–7.9）。術前後両回答の36例対4例の平均変化は+10.4対+3.5、p=0.53。\n第II相：術後満足度75.8（49例）対78.2（14例）、p=0.74。平均回答時点10.7か月（5.1–14.0）。術前後両回答46例対12例の平均変化は+12.0対+14.4、p=0.82。\n統合回答者解析：術後満足度75.8（pFGS99例）対79.0（標準19例）、p=0.53。平均差−3.2点は同じ評価尺度の報告平均値から算出。術前後両回答82例対16例の変化+11.3対+11.7、p=0.94。HR・群間差CIは報告されておらず補完しない。\n実際の追加切除あり52例対なし66例の術後満足度73.6対78.5、p=0.17。この追加切除有無による比較は無作為割付ではない。第II相の患者選好回答51例中70.6%は整容性最大化より再手術回避を選好した。\n本報告は満足度・がんへの心配・選好が中心で、新たな重篤有害事象・薬剤有害事象の群別率を提示していない。満足度の非有意差を包括的安全性の証明としない。OSを報告する解析ではなく、成熟度や生存効果は評価できない。",
    "caveat": "背景：残存腫瘍の追加切除を促すpegulicianine蛍光ガイド下手術（pFGS）は、標準乳房温存手術に比べ乳房満足度を損なうか。\n本解析ではpFGSによる満足度低下の統計学的証拠は検出されなかったが、低回答率・小さい対照群を踏まえ同等性／非劣性の証明とはいえない。\n温存手術の残存癌処置と患者の整容性・再手術回避の価値観を話し合う材料になる。再手術低減の大きさは本PRO報告の比較結果として流用しない。日本承認・ガイドライン推奨は未検証。\n本文Methods/Results/Discussionを公開出版社サイトで確認。補足資料・表の独立全数照合は未実施。\n第III相では調査任意で回答14%、第II相67%。回答者選択・欠測バイアス、時点差、統合する異なる無作為化比を考慮する。\n第II相の登録実登録98例に対し原著解析94例。原著のPPI51例を61%とする記述も94例を分母と整合せず、分母の理由未確認。記載を独自修正しない。\n患者選好尺度は研究独自で外部検証なし。追加切除有無比較は観察的で因果効果としない。Lumicell研究支援と著者の雇用・株式等の利益相反開示あり。\n原著公開2026-10-17、PubMed登録2026-10-18。関連学会抄録は参考文献にあるが発表実日未検証。確認日2026-10-18（UTC）。\n原著公開日：2026-10-17。PubMed登録日：2026-10-18。学会発表実日・データカットオフは未確認。保存原記録照合：2026-10-19（日本時間）。日本承認・ガイドライン推奨は別途未評価。",
    "safety": "本報告は満足度・がんへの心配・選好が中心で、新たな重篤有害事象・薬剤有害事象の群別率を提示していない。満足度の非有意差を包括的安全性の証明としない。OSを報告する解析ではなく、成熟度や生存効果は評価できない。",
    "trial_registration": "NCT03686215",
    "publicationDate": "2026-10-17",
    "publicationYear": 2026,
    "publicationDateType": "original_report_online_publication_date",
    "resultDate": "2026-10-17",
    "resultDateLabel": "本報告の原著公開日（カットオフとは別）",
    "dataCutoff": "原著確認範囲では未確認",
    "primaryAnalysisKey": "insite-clp0008-pfgs-pro-pmid42892663",
    "paperKeys": [
      "pmid:42892663",
      "doi:10.1245/s10434-026-20450-5"
    ],
    "primaryPublication": {
      "date": "2026-10-17",
      "precision": "day",
      "sourceUrl": "https://link.springer.com/article/10.1245/s10434-026-20450-5",
      "title": "Does Additional Margin Excision During Pegulicianine Fluorescence-Guided Surgery (pFGS) Affect Patient Breast Satisfaction?",
      "sourceType": "original_paper",
      "note": "本報告の原著公開日。試験の初回結果公表日との一致は未検証。過去の主要報告が先行する可能性を含め、初回公表確認済みとは扱わない。"
    },
    "sources": [
      {
        "title": "Annals of Surgical Oncology 原著公開本文",
        "url": "https://link.springer.com/article/10.1245/s10434-026-20450-5",
        "kind": "publication",
        "checkedDate": "2026-10-18",
        "publicationDate": "2026-10-17"
      },
      {
        "title": "PubMed PMID42892663",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42892663/",
        "kind": "publication",
        "checkedDate": "2026-10-18",
        "publicationDate": "2026-10-18"
      },
      {
        "title": "ClinicalTrials.gov INSITE NCT03686215（第III相）",
        "url": "https://clinicaltrials.gov/study/NCT03686215",
        "kind": "registry",
        "checkedDate": "2026-10-18"
      },
      {
        "title": "ClinicalTrials.gov CLP0008 NCT04440982（第II相）",
        "url": "https://clinicaltrials.gov/study/NCT04440982",
        "kind": "registry",
        "checkedDate": "2026-10-18"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "原著公開本文確認（補足資料・表の全数独立照合は未実施）",
      "note": "本文Methods/Results/Discussionを公開出版社サイトで確認。補足資料・表の独立全数照合は未実施。\n第III相では調査任意で回答14%、第II相67%。回答者選択・欠測バイアス、時点差、統合する異なる無作為化比を考慮する。\n第II相の登録実登録98例に対し原著解析94例。原著のPPI51例を61%とする記述も94例を分母と整合せず、分母の理由未確認。記載を独自修正しない。\n患者選好尺度は研究独自で外部検証なし。追加切除有無比較は観察的で因果効果としない。Lumicell研究支援と著者の雇用・株式等の利益相反開示あり。\n原著公開2026-10-17、PubMed登録2026-10-18。関連学会抄録は参考文献にあるが発表実日未検証。確認日2026-10-18（UTC）。",
      "sourceUrl": "https://link.springer.com/article/10.1245/s10434-026-20450-5",
      "checkedDate": "2026-10-18"
    },
    "safetyEvidence": {
      "status": "full_text_checked",
      "label": "原著公開本文確認（補足資料・表の全数独立照合は未実施）",
      "note": "本文Methods/Results/Discussionを公開出版社サイトで確認。補足資料・表の独立全数照合は未実施。\n第III相では調査任意で回答14%、第II相67%。回答者選択・欠測バイアス、時点差、統合する異なる無作為化比を考慮する。\n第II相の登録実登録98例に対し原著解析94例。原著のPPI51例を61%とする記述も94例を分母と整合せず、分母の理由未確認。記載を独自修正しない。\n患者選好尺度は研究独自で外部検証なし。追加切除有無比較は観察的で因果効果としない。Lumicell研究支援と著者の雇用・株式等の利益相反開示あり。\n原著公開2026-10-17、PubMed登録2026-10-18。関連学会抄録は参考文献にあるが発表実日未検証。確認日2026-10-18（UTC）。",
      "sourceUrl": "https://link.springer.com/article/10.1245/s10434-026-20450-5",
      "checkedDate": "2026-10-18"
    },
    "scopeEvidence": {
      "verifiedPhase": "III",
      "resultType": "interventional-results",
      "phaseSourceUrls": [
        "https://clinicaltrials.gov/study/NCT03686215",
        "https://clinicaltrials.gov/study/NCT04440982"
      ],
      "resultSourceUrls": [
        "https://link.springer.com/article/10.1245/s10434-026-20450-5",
        "https://pubmed.ncbi.nlm.nih.gov/42892663/"
      ],
      "checkedAt": "2026-10-18T23:02:00Z"
    },
    "checkedDate": "2026-10-18",
    "checkedTimezone": "UTC",
    "agents": [],
    "regimenAgents": [],
    "drugClasses": [],
    "guidelineReferences": [],
    "japanApproval": "未評価",
    "outcomeStatus": "mixed",
    "relatedRegistrations": [
      "NCT04440982"
    ],
    "reports": []
  },
  {
    "id": "helen-trio-011",
    "name": "HELEN-Trio 011",
    "phase": "III",
    "design": "中国14施設の非盲検2:1無作為化試験。原著抄録とASCO抄録は第III相、ClinicalTrials.gov NCT05475678の現登録は第II相と記載し、不一致の理由は未確認。6サイクルのドセタキセル75 mg/m²＋カルボプラチンAUC6（day1）にカムレリズマブ200 mg静注（day3）を追加する群とTCb単独群を比較。主要評価項目pCR（ypT0/Tis ypN0）は1回以上治療を受けたmITT集団で評価。",
    "setting": "early",
    "settingLabel": "早期乳癌・術前治療",
    "subtypes": [
      "TNBC"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "18–70歳、未治療stage II–III TNBCの女性。2022年12月〜2025年6月に369例登録。無作為化245対124例はASCO抄録、mITTは233対119例（計352例）を原著抄録で確認。",
    "lineBuckets": [],
    "population": "18–70歳、未治療stage II–III TNBCの女性。2022年12月〜2025年6月に369例登録。無作為化245対124例はASCO抄録、mITTは233対119例（計352例）を原著抄録で確認。",
    "cardPopulation": "18–70歳、未治療stage II–III TNBCの女性。2022年12月〜2025年6月に369例登録。無作為化245対124例はASCO抄録、mITTは233対119例（計352例）を原著抄録で確認。",
    "experimental": "術前カムレリズマブ＋ドセタキセル＋カルボプラチン（6サイクル）",
    "control": "術前ドセタキセル＋カルボプラチン単独（6サイクル）",
    "primaryEndpoint": "主要：mITT集団でのpCR（ypT0/Tis ypN0）。PD-L1別は探索的。EFS・OS結果は今回未確認。",
    "result": "主要pCR：カムレリズマブ追加57.5%（134/233）対TCb単独45.4%（54/119）。原著報告の絶対差12.2パーセントポイント、95%CI 1.4–22.9、片側P=0.014。丸めた割合の単純差12.1とは区別し、原著の報告値を保持。\nGrade3–4治療関連有害事象：24.9%（58/233）対21.8%（26/119）。治療関連死亡は報告されなかった。原著抄録の値・grade範囲であり、ASCO抄録のGrade3以上24.8%を代用しない。\n原著電子公開・PubMed登録日は2026年10月16日。先行ASCO抄録は2026年5月27日公開であり、今回が初回結果発表とは扱わない。実際の学会口演日は未確認。",
    "caveat": "背景：アントラサイクリンを使用しないドセタキセル＋カルボプラチン（TCb）にカムレリズマブを追加すると、早期TNBCの術前治療後pCRが増えるか。\n解釈：TCb単独との比較では主要pCRの改善を支持する。ただし現行の標準的なアントラサイクリンを含む免疫化学療法と直接比較しておらず、標準治療の代替と断定できない。\n解釈：pCR改善からEFS・OS改善を推定しない。日本の承認・保険適用・ガイドライン上の推奨は検証対象外。\n原著論文未確認（抄録ベース）。2026年10月17日にPubMed公式XML、公式試験登録とASCO公開抄録を確認。出版社の原著ページは取得できず、本文・補遺は未確認。\n試験相に資料間不一致：原著抄録およびASCO抄録はIII、公式登録はII。いずれも掲載対象相だが、分類IIIは原著報告に基づくもので登録との一致や変更経緯を確認した意味ではない。\n非盲検、中国の女性18–70歳に限定。無作為化369例のうちmITTは352例で、17例の除外理由・ITT感度解析を抄録では確認できない。\nデータカットオフ、追跡期間、EFS・OS成績や成熟度、詳細な安全性・免疫関連有害事象は抄録では確認できない。HR/CIは報告されていないため作成しない。\nPD-L1別解析は先行ASCO抄録に探索的として存在するが、原著の詳細を未確認のため本解説で確証的効果差として扱わない。\n原著公開日：2026-10-16。PubMed登録日：2026-10-16。学会発表実日・データカットオフは未確認。保存原記録照合：2026-10-19（日本時間）。日本承認・ガイドライン推奨は別途未評価。",
    "safety": "Grade3–4治療関連有害事象：24.9%（58/233）対21.8%（26/119）。治療関連死亡は報告されなかった。原著抄録の値・grade範囲であり、ASCO抄録のGrade3以上24.8%を代用しない。",
    "trial_registration": "NCT05475678",
    "publicationDate": "2026-10-16",
    "publicationYear": 2026,
    "publicationDateType": "original_report_online_publication_date",
    "resultDate": "2026-10-16",
    "resultDateLabel": "本報告の原著公開日（カットオフとは別）",
    "dataCutoff": "原著確認範囲では未確認",
    "primaryAnalysisKey": "helen-trio011-primary-pcr-mitt352-pmid42887596",
    "paperKeys": [
      "pmid:42887596",
      "doi:10.1016/j.annonc.2026.10.102"
    ],
    "primaryPublication": {
      "date": "2026-10-16",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42887596/",
      "title": "Efficacy and safety of camrelizumab plus docetaxel and carboplatin as neoadjuvant therapy for stage II-III triple-negative breast cancer: the HELEN-Trio 011 randomized clinical trial.",
      "sourceType": "original_paper",
      "note": "本報告の原著公開日。試験の初回結果公表日との一致は未検証。過去の主要報告が先行する可能性を含め、初回公表確認済みとは扱わない。"
    },
    "sources": [
      {
        "title": "PubMed PMID 42887596（NLM EFetch公式XML：書誌・原著抄録）",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42887596/",
        "kind": "publication",
        "checkedDate": "2026-10-18",
        "publicationDate": "2026-10-16"
      },
      {
        "title": "ClinicalTrials.gov NCT05475678（公式API、現登録PHASE2）",
        "url": "https://clinicaltrials.gov/study/NCT05475678",
        "kind": "registry",
        "checkedDate": "2026-10-18"
      },
      {
        "title": "ASCO2026 abstract1009 HELEN-Trio011（第III相と記載）",
        "url": "https://ascopubs.org/doi/10.1200/JCO.2026.44.16_suppl.1009",
        "kind": "publication",
        "checkedDate": "2026-10-18",
        "publicationDate": "2026-05-27"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著論文未確認（抄録ベース）。2026年10月17日にPubMed公式XML、公式試験登録とASCO公開抄録を確認。出版社の原著ページは取得できず、本文・補遺は未確認。\n試験相に資料間不一致：原著抄録およびASCO抄録はIII、公式登録はII。いずれも掲載対象相だが、分類IIIは原著報告に基づくもので登録との一致や変更経緯を確認した意味ではない。\n非盲検、中国の女性18–70歳に限定。無作為化369例のうちmITTは352例で、17例の除外理由・ITT感度解析を抄録では確認できない。\nデータカットオフ、追跡期間、EFS・OS成績や成熟度、詳細な安全性・免疫関連有害事象は抄録では確認できない。HR/CIは報告されていないため作成しない。\nPD-L1別解析は先行ASCO抄録に探索的として存在するが、原著の詳細を未確認のため本解説で確証的効果差として扱わない。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42887596/",
      "checkedDate": "2026-10-18"
    },
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著論文未確認（抄録ベース）。2026年10月17日にPubMed公式XML、公式試験登録とASCO公開抄録を確認。出版社の原著ページは取得できず、本文・補遺は未確認。\n試験相に資料間不一致：原著抄録およびASCO抄録はIII、公式登録はII。いずれも掲載対象相だが、分類IIIは原著報告に基づくもので登録との一致や変更経緯を確認した意味ではない。\n非盲検、中国の女性18–70歳に限定。無作為化369例のうちmITTは352例で、17例の除外理由・ITT感度解析を抄録では確認できない。\nデータカットオフ、追跡期間、EFS・OS成績や成熟度、詳細な安全性・免疫関連有害事象は抄録では確認できない。HR/CIは報告されていないため作成しない。\nPD-L1別解析は先行ASCO抄録に探索的として存在するが、原著の詳細を未確認のため本解説で確証的効果差として扱わない。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42887596/",
      "checkedDate": "2026-10-18"
    },
    "scopeEvidence": {
      "verifiedPhase": "III",
      "resultType": "interventional-results",
      "phaseSourceUrls": [
        "https://pubmed.ncbi.nlm.nih.gov/42887596/",
        "https://ascopubs.org/doi/10.1200/JCO.2026.44.16_suppl.1009"
      ],
      "resultSourceUrls": [
        "https://pubmed.ncbi.nlm.nih.gov/42887596/"
      ],
      "checkedAt": "2026-10-18T23:02:00Z"
    },
    "checkedDate": "2026-10-18",
    "checkedTimezone": "UTC",
    "agents": [],
    "regimenAgents": [],
    "drugClasses": [],
    "guidelineReferences": [],
    "japanApproval": "未評価",
    "outcomeStatus": "mixed",
    "reports": []
  },
  {
    "id": "ea1181-compassher2-pcr",
    "name": "EA1181 / CompassHER2-pCR",
    "phase": "II",
    "design": "EA1181/CompassHER2-pCR（NCT04266249）は第II相単群介入試験。タキサン（毎週パクリタキセル12週または3週ごとのドセタキセル4コース）とトラスツズマブ＋ペルツズマブを併用し手術。本論文は副次評価項目のpCR（ypT0/Tis、ypN0）と関連因子の解析。比較対照群なし。",
    "setting": "early",
    "settingLabel": "早期乳癌・術前治療",
    "subtypes": [
      "HER2+"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "臨床病期II–IIIAのHER2陽性乳癌。登録2,175例（ER陰性781例、ER陽性1,394例）、THP開始2,141例。ER別pCRの分母の詳細は抄録から確認できない。",
    "lineBuckets": [],
    "population": "臨床病期II–IIIAのHER2陽性乳癌。登録2,175例（ER陰性781例、ER陽性1,394例）、THP開始2,141例。ER別pCRの分母の詳細は抄録から確認できない。",
    "cardPopulation": "臨床病期II–IIIAのHER2陽性乳癌。登録2,175例（ER陰性781例、ER陽性1,394例）、THP開始2,141例。ER別pCRの分母の詳細は抄録から確認できない。",
    "experimental": "術前タキサン＋トラスツズマブ＋ペルツズマブ（THP）",
    "control": "単群試験。無作為化比較対照なし。",
    "primaryEndpoint": "主要：pCR達成患者の3年RFS（本報告では後日報告予定）。本報告の手術時pCRは副次評価項目。",
    "result": "THP開始2,141例のpCR率は43.8%。ER陰性63.7%、ER陽性32.4%。評価時点は術前治療後の手術時。率のCIは抄録記載なし。\n主要評価項目はpCR達成患者の3年無再発生存であり、成熟後に報告予定。今回のpCR結果と混同しない。\n安全性：有害事象頻度・重症度別分母は確認した抄録に記載なく、評価未確認。OS結果・成熟度、データカットオフも抄録では未確認。",
    "caveat": "背景：HER2陽性早期乳癌に対する術前THPによるpCRはどの程度得られるか。\n術前化学療法縮小を検討する試験の実測反応を示すが、pCRのみで長期的な治療省略の安全性を確定できない。\nER別の率やタキサン選択との関連は無作為化比較ではなく、因果的な治療間優劣を意味しない。日本承認・ガイドライン推奨の確認とは別である。\n原著論文未確認（抄録ベース）。PubMed抄録とECOG-ACRIN公開試験情報を確認。本文・補足資料は未確認。\n単群試験であり比較群、HR、群間絶対効果差を作成しない。\n主要3年RFSは後日報告予定。pCR率CI、安全性詳細、データカットオフ、OS成熟度は未確認。\nHER2DXは部分集団の予測因子探索であり、今回の掲載対象はTHP介入後の副次pCR結果。\n公開日2026-08-20、冊子日2026-10-20、今回受信日2026-10-16を区別。PubMed登録日・学会発表日はこの確認範囲では未確認。\n原著公開日：2026-08-20。PubMed登録日：未確認。学会発表実日・データカットオフは未確認。保存原記録照合：2026-10-19（日本時間）。日本承認・ガイドライン推奨は別途未評価。",
    "safety": "安全性：有害事象頻度・重症度別分母は確認した抄録に記載なく、評価未確認。OS結果・成熟度、データカットオフも抄録では未確認。",
    "trial_registration": "NCT04266249",
    "publicationDate": "2026-08-20",
    "publicationYear": 2026,
    "publicationDateType": "original_report_online_publication_date",
    "resultDate": "2026-08-20",
    "resultDateLabel": "本報告の原著公開日（カットオフとは別）",
    "dataCutoff": "原著確認範囲では未確認",
    "primaryAnalysisKey": "ea1181-thp-secondary-pcr-pmid42623567",
    "paperKeys": [
      "pmid:42623567",
      "doi:10.1200/jco-25-02255"
    ],
    "primaryPublication": {
      "date": "2026-08-20",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42623567/",
      "title": "Pathologic Complete Response (pCR) Rate and Predictors of Response to Taxane, Trastuzumab, and Pertuzumab in HER2-Positive Breast Cancer: Secondary Analyses of EA1181/CompassHER2 pCR",
      "sourceType": "original_paper",
      "note": "本報告の原著公開日。試験の初回結果公表日との一致は未検証。過去の主要報告が先行する可能性を含め、初回公表確認済みとは扱わない。"
    },
    "sources": [
      {
        "title": "Tung et al. J Clin Oncol. EA1181 pCR secondary analysis",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42623567/",
        "kind": "publication",
        "checkedDate": "2026-10-18",
        "publicationDate": "2026-08-20"
      },
      {
        "title": "ECOG-ACRIN EA1181 CompassHER2-pCR：Phase II試験情報",
        "url": "https://ecog-acrin.org/clinical-trials/ea1181-compassher2-pcr-breast-cancer/",
        "kind": "publication",
        "checkedDate": "2026-10-18"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著論文未確認（抄録ベース）。PubMed抄録とECOG-ACRIN公開試験情報を確認。本文・補足資料は未確認。\n単群試験であり比較群、HR、群間絶対効果差を作成しない。\n主要3年RFSは後日報告予定。pCR率CI、安全性詳細、データカットオフ、OS成熟度は未確認。\nHER2DXは部分集団の予測因子探索であり、今回の掲載対象はTHP介入後の副次pCR結果。\n公開日2026-08-20、冊子日2026-10-20、今回受信日2026-10-16を区別。PubMed登録日・学会発表日はこの確認範囲では未確認。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42623567/",
      "checkedDate": "2026-10-18"
    },
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著論文未確認（抄録ベース）。PubMed抄録とECOG-ACRIN公開試験情報を確認。本文・補足資料は未確認。\n単群試験であり比較群、HR、群間絶対効果差を作成しない。\n主要3年RFSは後日報告予定。pCR率CI、安全性詳細、データカットオフ、OS成熟度は未確認。\nHER2DXは部分集団の予測因子探索であり、今回の掲載対象はTHP介入後の副次pCR結果。\n公開日2026-08-20、冊子日2026-10-20、今回受信日2026-10-16を区別。PubMed登録日・学会発表日はこの確認範囲では未確認。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42623567/",
      "checkedDate": "2026-10-18"
    },
    "scopeEvidence": {
      "verifiedPhase": "II",
      "resultType": "interventional-results",
      "phaseSourceUrls": [
        "https://ecog-acrin.org/clinical-trials/ea1181-compassher2-pcr-breast-cancer/"
      ],
      "resultSourceUrls": [
        "https://pubmed.ncbi.nlm.nih.gov/42623567/"
      ],
      "checkedAt": "2026-10-18T23:02:00Z"
    },
    "checkedDate": "2026-10-18",
    "checkedTimezone": "UTC",
    "agents": [],
    "regimenAgents": [],
    "drugClasses": [],
    "guidelineReferences": [],
    "japanApproval": "未評価",
    "outcomeStatus": "mixed",
    "reports": []
  },
  {
    "id": "hypomast-imni",
    "name": "HypoMast-IMNI",
    "phase": "III",
    "design": "中国3施設の無作為化第III相非劣性試験。乳房切除後、内胸リンパ節を含む領域リンパ節と胸壁への寡分割照射を通常分割照射と比較。無作為化1,494例、mITT解析1,429例。",
    "setting": "early",
    "settingLabel": "高リスク乳癌・乳房切除後放射線治療",
    "subtypes": [],
    "stages": [],
    "timing": [],
    "stageLabel": "乳房切除後の高リスク乳癌。病期・サブタイプ別の適用範囲を本抄録だけで補完しない。",
    "lineBuckets": [],
    "population": "乳房切除後、内胸リンパ節を含む領域照射を受ける高リスク乳癌。無作為化1,494例、mITT解析1,429例。群別解析分母は抄録に記載なし。",
    "cardPopulation": "乳房切除後の高リスク乳癌。無作為化1,494例、mITT解析1,429例。",
    "experimental": "胸壁＋内胸リンパ節を含む領域リンパ節：42.56 Gy／16回（寡分割）",
    "control": "同じ照射領域：50 Gy／25回（通常分割）",
    "primaryEndpoint": "主要：5年局所領域再発（LRR）。非劣性の検定。",
    "result": "追跡中央値58.1か月。mITT 1,429例の5年LRRは寡分割1.7%（95% CI 0.9–2.9）対通常分割2.2%（1.3–3.5）。HR 0.69（95% CI 0.32–1.51）、非劣性P=0.017。5年LRRの絶対差は−0.5パーセントポイント（抄録の率から算出）。HRのCIは1をまたぎ、優越性を示したという意味ではない。\n5年DMFS、BCRFS、DFS、OSに有意差は報告されていない。これらの正確な率・HR・CI、OS成熟度は抄録に記載なく補完しない。",
    "safety": "Grade 3急性皮膚毒性は1.7%対12.2%（P<0.001）。絶対差−10.5パーセントポイント（報告率から算出）。安全性解析の群別分母、長期心肺毒性など詳細は本確認範囲では未確認。",
    "caveat": "背景：内胸リンパ節を含む乳房切除後照射を、照射回数を短縮して実施できるかを検討した。\n臨床的意味：対象集団の5年局所領域制御について寡分割の非劣性が報告され、急性皮膚毒性も低率だった。非劣性は全転帰の同等性や生存優越性を意味しない。\n原著論文未確認（抄録ベース）。PubMed公式の原著抄録で相・デザイン・実測結果を確認。本文・補足資料は未確認。群別mITT分母、非劣性マージン、データカットオフ、詳細な長期毒性は抄録では確認できない。OSの成熟度は記載がなく推定しない。\n副次的な生存指標の詳細と探索的解析は抄録確認範囲を超えて記載しない。登録のPhase欄はNot Applicableだが登録題名と原著は第III相と記載し、分類は原著に基づく。原著の42.56 Gyと登録記載の42.5 Gyを同一の正確な値として混用しない。登録上の完了日をデータカットオフとしない。\n原著公開日2026-10-19。PubMed登録日・学会発表日は未確認。確認日時2026-10-20 11:23 UTC（20:23日本時間）。日本承認・ガイドライン推奨は別途未評価。",
    "trial_registration": "NCT03856372",
    "publicationDate": "2026-10-19",
    "publicationYear": 2026,
    "publicationDateType": "original_report_online_publication_date",
    "resultDate": "2026-10-19",
    "resultDateLabel": "本報告の原著公開日（データカットオフとは別）",
    "dataCutoff": "抄録では未確認",
    "primaryAnalysisKey": "hypomast-imni-primary-lrr-pmid42896129",
    "paperKeys": [
      "pmid:42896129",
      "doi:10.1200/jco-25-02843"
    ],
    "primaryPublication": {
      "date": "2026-10-19",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42896129/",
      "sourceTitle": "HypoMast-IMNI randomized phase III trial",
      "sourceType": "original_paper",
      "note": "本主要結果原著の公開日。試験の初回結果公表日との一致は未検証であり、先行学会報告を含む初回公表確認済みとは扱わない。"
    },
    "sources": [
      {
        "title": "HypoMast-IMNI randomized phase III trial, J Clin Oncol",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42896129/",
        "kind": "publication",
        "publicationDate": "2026-10-19",
        "checkedDate": "2026-10-20"
      },
      {
        "title": "NCT03856372（題名は第III相、Phase欄はNot Applicable）",
        "url": "https://clinicaltrials.gov/study/NCT03856372",
        "kind": "registry",
        "checkedDate": "2026-10-20"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著論文未確認（抄録ベース）。PubMed公式の原著抄録で相・デザイン・実測結果を確認。本文・補足資料は未確認。群別mITT分母、非劣性マージン、データカットオフ、詳細な長期毒性は抄録では確認できない。OSの成熟度は記載がなく推定しない。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42896129/",
      "checkedDate": "2026-10-20"
    },
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著論文未確認（抄録ベース）。PubMed公式の原著抄録で相・デザイン・実測結果を確認。本文・補足資料は未確認。群別mITT分母、非劣性マージン、データカットオフ、詳細な長期毒性は抄録では確認できない。OSの成熟度は記載がなく推定しない。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/42896129/",
      "checkedDate": "2026-10-20"
    },
    "scopeEvidence": {
      "verifiedPhase": "III",
      "resultType": "interventional-results",
      "phaseSourceUrls": [
        "https://pubmed.ncbi.nlm.nih.gov/42896129/"
      ],
      "resultSourceUrls": [
        "https://pubmed.ncbi.nlm.nih.gov/42896129/"
      ],
      "checkedAt": "2026-10-20T11:23:00Z"
    },
    "analysisEvidence": {
      "randomized": 1494,
      "analyzed": 1429,
      "population": "mITT",
      "armDenominators": null,
      "followUpMedianMonths": 58.1,
      "dataCutoff": null,
      "noninferiorityMargin": null,
      "lrrFiveYearPercent": {
        "experimental": 1.7,
        "control": 2.2,
        "experimentalCI": [
          0.9,
          2.9
        ],
        "controlCI": [
          1.3,
          3.5
        ],
        "hazardRatio": 0.69,
        "hazardRatioCI": [
          0.32,
          1.51
        ],
        "noninferiorityP": 0.017,
        "absoluteDifferencePercentagePoints": -0.5
      },
      "grade3AcuteSkinToxicityPercent": {
        "experimental": 1.7,
        "control": 12.2,
        "absoluteDifferencePercentagePoints": -10.5,
        "p": "<0.001"
      },
      "overallSurvivalMaturity": null
    },
    "checkedDate": "2026-10-20",
    "checkedTimezone": "UTC",
    "agents": [],
    "regimenAgents": [],
    "drugClasses": [],
    "guidelineReferences": [],
    "japanApproval": "未評価",
    "outcomeStatus": "positive",
    "reports": []
  },
  {
    "id": "imrad-br",
    "name": "IMRad-Br（安全性run-in）",
    "phase": "II",
    "design": "日本の多施設・非盲検・単群第II相介入試験。今回の報告はプロトコールと安全性run-inの実測結果で、正式な統計解析は行っていない。",
    "setting": "metastatic",
    "settingLabel": "手術不能・再発TNBCの局所照射併用",
    "subtypes": [
      "TNBC"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "手術不能または再発のPD-L1陽性TNBC。病期番号や全例の遠隔転移の有無は補完しない。",
    "lineBuckets": [],
    "lineLabel": "全身療法のライン番号は未分類",
    "lineBucketNote": "手術不能・再発乳癌での前治療に関するライン番号の適格条件は今回未確認。薬剤や症例の治療歴から全身療法1Lと推測しない。",
    "population": "手術不能または再発のPD-L1陽性トリプルネガティブ乳癌で、局所放射線治療が可能な病変を有する患者。PD-L1はSP142でIC≥1%（腫瘍領域に占める免疫細胞の割合）、ECOG PS 0–2。登録7例のうちPAEI評価可能6例。1例はPAEI評価前に病勢進行で離脱。",
    "cardPopulation": "PD-L1陽性（SP142 IC≥1%）の手術不能・再発TNBC。登録7例／PAEI評価可能6例の安全性run-in。",
    "experimental": "アテゾリズマブ840 mgを28日サイクルの1・15日目、nab-パクリタキセル100 mg/m²を1・8・15日目に投与し、局所放射線治療を併用。run-inの全7例に30 Gy／5回を実施。",
    "control": "なし（単群試験）",
    "primaryEndpoint": "主要：放射線治療終了後3か月以内の事前規定の注目有害事象（PAEI）発現割合。方法欄と公式登録の区分を採用。副次：安全性、OS、PFS、奏効割合、病勢コントロール割合、照射病変の局所制御割合など。今回、有効性の結果は報告されていない。",
    "result": "登録7例、PAEI評価可能6例のうち1例にgrade 4肝障害を認めた（観察窓：放射線治療終了後3か月以内）。治療中断などで改善し、著者は薬剤性かつ放射線治療と非関連と判断した。1例の病勢進行による評価前離脱を分母から除外し、PAEIを1/7としない。正式な統計解析は実施されておらず、比較群、HR、CI、有効性成績はない。この小規模な結果は試験継続が可能との判断を支えるに留まる。",
    "safety": "主要PAEIは1/6例のgrade 4肝障害。表2にはgrade 3発熱性好中球減少症やgrade 4心タンポナーデなども記載されており、重い毒性がなかったとは解釈しない。心タンポナーデは治療非関連の重篤有害事象（SAE）と判断された。PAEIと全有害事象・SAEは別の集計であり、他事象の分母や頻度を補完しない。",
    "caveat": "背景：PD-L1陽性TNBCに対する免疫療法・化学療法へ局所照射を組み合わせる際の安全性と実施可能性を検討した。\n臨床的意味：評価可能6例の安全性run-inで試験継続の可否を検討した段階。有効性の証明、比較治療への優越性、標準治療変更の根拠としては扱わない。単群・極小標本・短いPAEI観察窓のため、まれな毒性や長期安全性を除外できない。\n評価項目の記述に不整合がある。方法欄と登録ではPAEIが主要、OS/PFSなどが副次だが、考察には生存等を主要とする記述がある。ここでは方法欄と公式登録を採用する。本文の包括的な安全性表現を、表2の重い有害事象を否定する意味で用いない。\n暦日のデータカットオフ、学会発表日、OS成熟度は未確認。OSを未成熟とも断定しない。原著電子公開日は2026-10-21、PubMed historyの日付は2026-10-22で、データカットオフと区別する。確認日時2026-10-23 11:32 UTC。日本承認・ガイドライン引用は別途未評価。",
    "trial_registration": "jRCTs021210010",
    "doi": "10.1007/s12282-026-01925-5",
    "paperKeys": [
      "pmid:42905375",
      "doi:10.1007/s12282-026-01925-5"
    ],
    "primaryAnalysisKey": "imrad-br-safety-run-in-paei-evaluable6-pmid42905375",
    "dataCutoff": "暦日未確認",
    "publicationDate": "2026-10-21",
    "publicationYear": 2026,
    "publicationDateType": "original_report_online_publication_date",
    "resultDate": "2026-10-21",
    "resultDateLabel": "安全性run-in原著電子公開日（データカットオフとは別）",
    "pubmedHistoryDate": "2026-10-22",
    "conferencePresentationDate": null,
    "primaryPublication": {
      "date": "2026-10-21",
      "precision": "day",
      "sourceUrl": "https://link.springer.com/article/10.1007/s12282-026-01925-5",
      "sourceTitle": "IMRad-Br protocol and safety run-in report",
      "sourceType": "original_paper",
      "note": "出版社およびNCBI公式XMLの電子公開日。先行学会発表日は未確認であり、登録日2021-06-04やPubMed historyの日付2026-10-22とは区別する。"
    },
    "sources": [
      {
        "title": "IMRad-Br：出版社公開原著本文",
        "url": "https://link.springer.com/article/10.1007/s12282-026-01925-5",
        "kind": "原著本文",
        "publicationDate": "2026-10-21",
        "evidenceStatus": "full_text_checked",
        "checkedDate": "2026-10-23"
      },
      {
        "title": "IMRad-Br：原著PDF（8ページ、表1・2を含む）",
        "url": "https://link.springer.com/content/pdf/10.1007/s12282-026-01925-5.pdf",
        "kind": "原著本文",
        "publicationDate": "2026-10-21",
        "evidenceStatus": "full_text_checked",
        "checkedDate": "2026-10-23"
      },
      {
        "title": "jRCTs021210010：臨床研究情報ポータル（第II相・目標20例）",
        "url": "https://rctportal.mhlw.go.jp/detail/jr?trial_id=jRCTs021210010",
        "kind": "公式登録",
        "checkedDate": "2026-10-23"
      },
      {
        "title": "PubMed PMID 42905375：PMID・DOI・電子公開日をNCBI公式XMLと照合",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42905375/",
        "kind": "書誌",
        "checkedDate": "2026-10-23"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "原著本文確認済み（安全性run-in）",
      "note": "一次資料検証担当が出版社の公開HTML本文と8ページPDF全文を実読。方法・結果・表1/2と公式登録の公開情報を照合。実装担当は公開HTML本文・公式登録を照合。補足資料、ガイドライン引用、日本承認は未検証。",
      "sourceUrl": "https://link.springer.com/article/10.1007/s12282-026-01925-5",
      "additionalSourceUrls": [
        "https://link.springer.com/content/pdf/10.1007/s12282-026-01925-5.pdf"
      ],
      "checkedDate": "2026-10-23"
    },
    "safetyEvidence": {
      "status": "full_text_checked",
      "label": "原著本文確認済み（安全性run-in）",
      "note": "一次資料検証担当が出版社の公開HTML本文と8ページPDF全文を実読。方法・結果・表1/2と公式登録の公開情報を照合。実装担当は公開HTML本文・公式登録を照合。補足資料、ガイドライン引用、日本承認は未検証。",
      "sourceUrl": "https://link.springer.com/article/10.1007/s12282-026-01925-5",
      "additionalSourceUrls": [
        "https://link.springer.com/content/pdf/10.1007/s12282-026-01925-5.pdf"
      ],
      "checkedDate": "2026-10-23"
    },
    "scopeEvidence": {
      "verifiedPhase": "II",
      "resultType": "interventional-results",
      "phaseSourceUrls": [
        "https://link.springer.com/article/10.1007/s12282-026-01925-5",
        "https://rctportal.mhlw.go.jp/detail/jr?trial_id=jRCTs021210010"
      ],
      "resultSourceUrls": [
        "https://link.springer.com/article/10.1007/s12282-026-01925-5",
        "https://link.springer.com/content/pdf/10.1007/s12282-026-01925-5.pdf"
      ],
      "checkedAt": "2026-10-23T11:32:00Z"
    },
    "analysisEvidence": {
      "reportType": "protocol-plus-safety-run-in",
      "enrolled": 7,
      "paeiEvaluable": 6,
      "excludedBeforePaeiAssessment": 1,
      "exclusionReason": "病勢進行",
      "paei": {
        "events": 1,
        "denominator": 6,
        "observationWindow": "放射線治療終了後3か月以内",
        "event": "grade 4肝障害",
        "attribution": "著者判断：薬剤性・RT非関連"
      },
      "radiotherapy": {
        "treated": 7,
        "totalGy": 30,
        "fractions": 5
      },
      "formalStatisticalAnalysis": false,
      "comparator": null,
      "hazardRatio": null,
      "confidenceInterval": null,
      "efficacyResults": null,
      "dataCutoff": null,
      "overallSurvivalMaturity": null,
      "secondaryEndpoints": [
        "安全性",
        "OS",
        "PFS",
        "奏効割合",
        "病勢コントロール割合",
        "照射病変の局所制御割合"
      ],
      "endpointRoleInconsistency": true
    },
    "registryEvidence": {
      "registration": "jRCTs021210010",
      "verifiedPhase": "II",
      "targetEnrollment": 20,
      "registeredDate": "2021-06-04",
      "portalLastUpdated": "2025-07-11",
      "sourceUrl": "https://rctportal.mhlw.go.jp/detail/jr?trial_id=jRCTs021210010",
      "checkedAt": "2026-10-23T11:32:00Z",
      "note": "公開ポータルで確認。直接jRCTは403のため迂回せず、募集状況や完了状況は更新しない。"
    },
    "checkedDate": "2026-10-23",
    "checkedAt": "2026-10-23T11:32:00Z",
    "checkedTimezone": "UTC",
    "agents": [
      "atezolizumab",
      "nab-paclitaxel"
    ],
    "regimenAgents": [
      "atezolizumab",
      "nab-paclitaxel"
    ],
    "drugClasses": [
      "PD-L1 inhibitor",
      "taxane"
    ],
    "guidelineReferences": [],
    "japanApproval": "未評価",
    "outcomeStatus": "exploratory",
    "reports": []
  },
  {
    "id": "breast-cancer-locator",
    "name": "Breast Cancer Locator（BCL）",
    "phase": "III",
    "design": "原著が第III相と明記する23施設の1:1無作為化試験（NCT04397185）。病理評価者は盲検。登録ではphase NAであり、相の表記差を残す。主要評価は断端陽性率、非劣性後に優越性を検定。副次は標本体積、再切除率等は探索的。",
    "setting": "early",
    "subtypes": [],
    "stages": [],
    "timing": [
      "surgery"
    ],
    "agents": [],
    "regimenAgents": [],
    "drugClasses": [],
    "lineBuckets": [],
    "population": "MRIで描出される非触知の浸潤癌またはDCISで温存術を希望する成人女性。無作為化457例（BCL228、対照229）、手術施行mITT418例（209/209）。",
    "cardPopulation": "MRIで描出される非触知浸潤癌/DCIS、温存術対象。手術mITT418例。",
    "experimental": "仰臥位MRIから作成した患者別3D手術ガイド（Breast Cancer Locator）による局在化",
    "control": "ワイヤー局在化",
    "primaryEndpoint": "主要：断端陽性率（非劣性後に優越性を検定）。副次：標本体積。再切除率は探索的。",
    "result": "断端陽性はBCL30/209（14.4%）対44/209（21.1%）、単純絶対差−6.7ポイント。主要の生検組織型層別解析差−7.1ポイント（95.4%CI −14.3〜0.1）、非劣性P=.011。優越性片側P=.025は規定閾値.023を満たさない。\n事前規定の最終病理層別感度解析は差−7.5ポイント（95.4%CI −14.7〜−0.3）、P=.019であり、主要優越性検定の成功に置き換えない。探索的再切除率は27/209（12.9%）対41/209（19.6%）、差−6.7ポイント（95%CI −13.7〜0.3）。",
    "safety": "有害事象観察は術後6週。機器関連有害事象25.6%対28.3%で、断端陽性も事象に含む定義。薬剤毒性や長期安全性と同一視しない。",
    "caveat": "背景：非触知乳癌の温存術で、MRI由来のBCL手術ガイドはワイヤー局在化より断端陽性を減らせるか。\n臨床的意味：非劣性の結果と再切除減少の傾向を支持するが、主要優越性未達を明記して解釈する。日本承認・推奨は未確認。\n限界：原著の第III相表記とClinicalTrials.govのNA表記が異なることを明示し、理由は推測しない。 MRI描出可能例に限定し、術前化学療法例を除外。感度・探索解析を確証的優越性としない。OSや長期再発効果の報告ではない。 出版社公開本文Methods/Results/Discussionを確認、補足資料は未確認。確認2026-10-24、正確なデータカットオフと学会発表日は未確認。\n原著公開2026-10-22、PubMed登録2026-10-23。確認日時2026-10-24T12:20:58Z。",
    "trial_registration": "NCT04397185",
    "doi": "10.1245/s10434-026-20657-6",
    "paperKeys": [
      "pmid:42918953",
      "doi:10.1245/s10434-026-20657-6"
    ],
    "primaryAnalysisKey": "NCT04397185-primary-margin-mitt418-pmid42918953",
    "dataCutoff": null,
    "publicationDate": "2026-10-22",
    "publicationYear": 2026,
    "publicationDateType": "original_report_online_publication_date",
    "resultDate": "原著2026-10-22（データカットオフ未確認）",
    "pubmedHistoryDate": "2026-10-23",
    "conferencePresentationDate": null,
    "primaryPublication": {
      "date": "2026-10-22",
      "precision": "day",
      "sourceUrl": "https://link.springer.com/article/10.1245/s10434-026-20657-6",
      "sourceTitle": "An International Randomized Prospective Trial Comparing a Supine MRI-based Guidance System, The Breast Cancer LocatorTM, to Wire Localization for Breast-Conserving Surgery for Non-palpable Breast Cancer",
      "sourceType": "original_paper",
      "note": "今回の主要結果原著の電子公開日。登録日・学会発表日とは区別。"
    },
    "sources": [
      {
        "title": "BCL randomized trial — Annals of Surgical Oncology",
        "url": "https://link.springer.com/article/10.1245/s10434-026-20657-6",
        "kind": "一次資料",
        "checkedDate": "2026-10-24"
      },
      {
        "title": "ClinicalTrials.gov NCT04397185",
        "url": "https://clinicaltrials.gov/study/NCT04397185",
        "kind": "一次資料",
        "checkedDate": "2026-10-24"
      },
      {
        "title": "PubMed PMID42918953",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42918953/",
        "kind": "一次資料",
        "checkedDate": "2026-10-24"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "原著本文確認済み（補足資料未確認）",
      "note": "一次資料担当が出版社公開本文Methods/Results/Discussionを実読。補足資料未確認。原著phase IIIと登録NAの表記差を明示する。",
      "sourceUrl": "https://link.springer.com/article/10.1245/s10434-026-20657-6",
      "checkedDate": "2026-10-24"
    },
    "scopeEvidence": {
      "verifiedPhase": "III",
      "resultType": "interventional-results",
      "phaseSourceUrls": [
        "https://link.springer.com/article/10.1245/s10434-026-20657-6"
      ],
      "resultSourceUrls": [
        "https://link.springer.com/article/10.1245/s10434-026-20657-6"
      ],
      "checkedAt": "2026-10-24T12:20:58Z"
    },
    "analysisEvidence": {
      "randomized": [
        228,
        229
      ],
      "modifiedITT": [
        209,
        209
      ],
      "positiveMargins": [
        30,
        44
      ],
      "positiveMarginPercent": [
        14.4,
        21.1
      ],
      "rawDifferencePercentagePoints": -6.7,
      "primaryAdjustedDifference": -7.1,
      "primaryCILevel": 95.4,
      "primaryCI": [
        -14.3,
        0.1
      ],
      "noninferiorityP": 0.011,
      "primarySuperiorityP": 0.025,
      "superiorityThreshold": 0.023,
      "primarySuperiorityMet": false,
      "sensitivityAdjustedDifference": -7.5,
      "sensitivityCI": [
        -14.7,
        -0.3
      ],
      "sensitivityP": 0.019,
      "reexcision": [
        27,
        41
      ],
      "reexcisionCI": [
        -13.7,
        0.3
      ],
      "safetyWindow": "術後6週",
      "registryPhase": "NA",
      "originalPhase": "III",
      "hazardRatio": null,
      "dataCutoff": null
    },
    "checkedDate": "2026-10-24",
    "checkedAt": "2026-10-24T12:20:58Z",
    "guidelineReferences": [],
    "japanApproval": "未評価",
    "outcomeStatus": "noninferiority",
    "reports": []
  },
  {
    "id": "create-x",
    "name": "CREATE-X",
    "phase": "III",
    "design": "無作為化・非盲検",
    "setting": "early",
    "subtypes": [
      "HR+/HER2-",
      "TNBC"
    ],
    "stages": [
      "I",
      "II",
      "III"
    ],
    "timing": [
      "adjuvant"
    ],
    "population": "HER2陰性、治療前病期I–IIIBでアントラサイクリン／タキサンを含む術前化学療法後に浸潤癌が残存した日本・韓国の患者。",
    "experimental": "標準術後治療＋カペシタビン",
    "control": "標準術後治療のみ（カペシタビンなし）",
    "trial_registration": "UMIN000000843",
    "sources": [
      {
        "title": "Adjuvant Capecitabine for Breast Cancer after Preoperative Chemotherapy",
        "url": "https://www.nejm.org/doi/full/10.1056/NEJMoa1612645",
        "kind": "原著・主解析"
      }
    ],
    "caveat": "TNBC限定ではなくHR陽性例も登録。TNBC値は部分集団解析であり、HR陽性にも同じ効果量があると解釈しない。現在の免疫療法併用を検証した試験ではない。",
    "primaryEndpoint": "DFS",
    "result": "2017年報告：5年DFS 74.1% vs 67.6%（HR 0.70、95% CI 0.53–0.92）。TNBC部分集団では69.8% vs 56.1%。",
    "publicationYear": 2017,
    "publicationDate": "2017-06-01",
    "resultDate": "2017年原著（データカットオフ2015-09-30）",
    "checkedDate": "2026-10-06",
    "stageLabel": "I–III表示にはIIICを含めない。治療前病期と術後残存リスクを区別する。",
    "cardPopulation": "HER2陰性、治療前病期I–IIIBでアントラサイクリン／タキサンを含む術前化学療法後に浸潤癌が残存した日本・韓国の患者。",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "表示結果の原著全文は未確認です。一次論文の抄録・公開された要約に基づき、対象条件の補足には試験計画なども参照しています。",
      "sourceUrl": "https://www.nejm.org/doi/full/10.1056/NEJMoa1612645"
    },
    "guidelineReferences": [
      {
        "trialId": "create-x",
        "guidelineId": "jbcs-2022-web-2024",
        "section": "薬物療法 CQ10",
        "title": "術前化学療法で病理学的完全奏効（pCR）が得られなかったHER2陰性早期乳癌に対する術後化学療法として，カペシタビンは勧められるか？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq10/",
        "citationEvidence": "参考文献1: Masuda et al., NEJM 2017。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/28564564/"
        ],
        "organization": "JBCS",
        "accessMethod": "学会公式WEB版の該当章・参考文献"
      },
      {
        "trialId": "create-x",
        "guidelineId": "asco-neoadjuvant-2021",
        "organization": "ASCO",
        "title": "Neoadjuvant Chemotherapy, Endocrine Therapy, and Targeted Therapy for Breast Cancer: ASCO Guideline",
        "publicationDate": "2021-01-28",
        "section": "Clinical Question 1 / Recommendation 1.3; Literature review and clinical interpretation",
        "url": "https://ascopubs.org/doi/10.1200/JCO.20.03399",
        "citationEvidence": "CREATE-Xの残存浸潤癌・カペシタビン比較を明示。",
        "relationship": "explicit_citation",
        "verificationMethod": "indexed_official_guideline_body",
        "checkedDate": "2026-10-06",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）"
      }
    ],
    "lineBuckets": [],
    "regimenAgents": [],
    "agents": [],
    "drugClasses": [],
    "reports": [],
    "primaryPublication": {
      "date": "2017-06-01",
      "precision": "day",
      "sourceUrl": "https://www.nejm.org/doi/10.1056/NEJMoa1612645",
      "note": "初回DFS主要結果原著。"
    }
  },
  {
    "id": "tailorx",
    "name": "TAILORx",
    "phase": "III",
    "design": "前向き・RS別割付；RS 11–25で無作為化非劣性比較",
    "setting": "early",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [
      "I",
      "II"
    ],
    "timing": [
      "adjuvant"
    ],
    "population": "HR陽性/HER2陰性・腋窩リンパ節陰性乳癌。21遺伝子Recurrence Score（RS）11–25の集団を内分泌療法単独と化学療法併用に無作為化。",
    "experimental": "内分泌療法単独（化学療法省略）",
    "control": "化学療法＋内分泌療法",
    "trial_registration": "NCT00310180",
    "sources": [
      {
        "title": "Adjuvant Chemotherapy Guided by a 21-Gene Expression Assay in Breast Cancer",
        "url": "https://www.nejm.org/doi/full/10.1056/NEJMoa1804710",
        "kind": "原著・主解析"
      }
    ],
    "caveat": "RS 0–10、26以上はこの無作為化比較に含まれない。年齢別の結果を無視して、RS 25以下の全例で化学療法不要とは言えない。",
    "primaryEndpoint": "iDFS（内分泌療法単独の非劣性）",
    "result": "2018年RS 11–25全体：9年iDFS 83.3% vs 84.3%。内分泌療法単独は非劣性。50歳以下・RS 16–25では一部に化学療法の利益。",
    "publicationYear": 2018,
    "publicationDate": "2018-06-03",
    "resultDate": "2018年無作為化集団主解析",
    "checkedDate": "2026-10-06",
    "stageLabel": "N0早期乳癌。N+はRxPONDERとは別の対象集団。",
    "cardPopulation": "HR陽性/HER2陰性・腋窩リンパ節陰性乳癌。21遺伝子Recurrence Score（RS）11–25の集団を内分泌療法単独と化学療法併用に無作為化。",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "表示結果の原著全文は未確認です。一次論文の抄録・公開された要約に基づき、対象条件の補足には試験計画なども参照しています。",
      "sourceUrl": "https://www.nejm.org/doi/full/10.1056/NEJMoa1804710"
    },
    "guidelineReferences": [
      {
        "trialId": "tailorx",
        "guidelineId": "jbcs-2022-web-2024",
        "section": "薬物療法 CQ11",
        "title": "ホルモン受容体陽性HER2陰性乳癌に対して，多遺伝子アッセイの結果によって，術後化学療法を省略することは推奨されるか？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq11/",
        "citationEvidence": "参考文献1: Sparano et al., NEJM 2018；本文でTAILORxを明示。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/29860917/"
        ],
        "organization": "JBCS",
        "accessMethod": "学会公式WEB版の該当章・参考文献"
      },
      {
        "trialId": "tailorx",
        "guidelineId": "asco-adjuvant-biomarkers-2022",
        "organization": "ASCO",
        "title": "Biomarkers for Adjuvant Endocrine and Chemotherapy in Early-Stage Breast Cancer: ASCO Guideline Update",
        "publicationDate": "2022-04-19",
        "section": "Clinical Question 1; Oncotype DX / clinical interpretation",
        "url": "https://ascopubs.org/doi/10.1200/JCO.22.00069",
        "citationEvidence": "TAILORxを名指しし、閉経前女性のOFS代替検証ではないと説明。",
        "relationship": "explicit_citation",
        "verificationMethod": "indexed_official_guideline_body",
        "checkedDate": "2026-10-06",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）"
      }
    ],
    "lineBuckets": [],
    "regimenAgents": [],
    "agents": [],
    "drugClasses": [],
    "reports": [],
    "primaryPublication": {
      "date": "2018-06-03",
      "precision": "day",
      "sourceUrl": "https://www.nejm.org/doi/10.1056/NEJMoa1804710",
      "note": "このカードのRS11–25無作為化比較・iDFS非劣性主要解析の初回原著。2015年の低RS単群コホート報告とは区別。"
    }
  },
  {
    "id": "atac",
    "name": "ATAC",
    "phase": "III",
    "design": "無作為化・二重盲検・3群（ここでは単剤2群のHR陽性解析）",
    "setting": "early",
    "subtypes": [
      "HR+/HER2-",
      "HER2+"
    ],
    "stages": [
      "I",
      "II",
      "III"
    ],
    "timing": [
      "adjuvant"
    ],
    "population": "閉経後・手術可能な浸潤性乳癌、手術および必要な化学療法後。原試験はHR不明／陰性例も登録し、HER2で選択していない。本カードはHR陽性解析を掲載。",
    "experimental": "アナストロゾール、5年",
    "control": "タモキシフェン、5年（原試験の併用群は別）",
    "trial_registration": "ISRCTN18233230",
    "sources": [
      {
        "title": "Effect of anastrozole and tamoxifen as adjuvant treatment for early-stage breast cancer: 10-year analysis of the ATAC trial",
        "url": "https://pubmed.ncbi.nlm.nih.gov/21087898/",
        "kind": "原著・長期解析"
      },
      {
        "title": "ATAC trial registration: ISRCTN18233230",
        "url": "https://www.isrctn.com/ISRCTN18233230",
        "kind": "試験登録・適格条件"
      }
    ],
    "caveat": "HR陽性/HER2陰性に限定した試験と誤記しない。HER2陽性フィルターへの表示は登録対象の広さを反映し、現代の抗HER2療法を含む治療比較を意味しない。",
    "primaryEndpoint": "DFS",
    "result": "2010年10年解析のHR陽性集団：DFS HR 0.86（95% CI 0.78–0.95、P=0.003）。",
    "publicationYear": 2010,
    "publicationDate": "2010-11-17",
    "resultDate": "2010年10年解析（追跡中央値120か月）",
    "checkedDate": "2026-10-06",
    "stageLabel": "手術可能な非転移乳癌の病期大分類。病期別の包括的適格性や、HER2サブタイプ別の有効性を示すラベルではない。",
    "cardPopulation": "閉経後・手術可能な浸潤性乳癌、手術および必要な化学療法後。原試験はHR不明／陰性例も登録し、HER2で選択していない。本カードはHR陽性解析を掲載。",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "表示結果の原著全文は未確認です。一次論文の抄録・公開された要約に基づき、対象条件の補足には試験計画なども参照しています。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/21087898/"
    },
    "guidelineReferences": [
      {
        "trialId": "atac",
        "guidelineId": "jbcs-2022-web-2024",
        "section": "薬物療法 BQ11",
        "title": "アロマターゼ阻害薬使用患者における骨粗鬆症の予防・治療に骨吸収抑制薬（ビスホスホネート，デノスマブ）は推奨されるか？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/bq11/",
        "citationEvidence": "参考文献24: Baum et al., Lancet 2002（ATAC初回報告）。 骨粗鬆症対策の章で併用療法への注意として引用。術後内分泌療法CQ3の直接引用とは区別。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/12090977/"
        ],
        "interpretationNote": "骨粗鬆症対策の章で併用療法への注意として引用。術後内分泌療法CQ3の直接引用とは区別。",
        "organization": "JBCS",
        "accessMethod": "学会公式WEB版の該当章・参考文献"
      }
    ],
    "lineBuckets": [],
    "regimenAgents": [],
    "agents": [],
    "drugClasses": [],
    "reports": [],
    "primaryPublication": {
      "date": "2002",
      "precision": "year",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/12090977/",
      "note": "first resultsと明記された初回主要原著。2010年10年追跡ではない。"
    }
  },
  {
    "setting": "metastatic",
    "stages": [],
    "timing": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "phase": "III",
    "id": "cleopatra",
    "name": "CLEOPATRA",
    "design": "第III相・無作為化・二重盲検・プラセボ対照（1:1）",
    "subtypes": [
      "HER2+"
    ],
    "stageLabel": "切除不能局所再発または転移性乳癌",
    "lineBuckets": [
      "firstline"
    ],
    "lineLabel": "進行乳癌に対する抗HER2療法＋化学療法の一次治療",
    "population": "HER2陽性。転移病変に対する化学療法・生物学的療法は未治療。内分泌療法1ラインまで許容。術前・術後化学療法（トラスツズマブ併用を含む）終了から転移診断まで12か月以上。",
    "biomarkers": [
      "HER2陽性"
    ],
    "experimental": "ペルツズマブ＋トラスツズマブ＋ドセタキセル",
    "control": "プラセボ＋トラスツズマブ＋ドセタキセル",
    "primaryEndpoint": "独立評価による無増悪生存期間（PFS）",
    "result": "初回PFS解析：中央値18.5対12.4か月、ハザード比0.62（95% CI 0.51–0.75）。",
    "resultDate": "2011-12-07",
    "resultDateLabel": "初回PFS報告・オンライン公開日",
    "publicationDate": "2011-12-07",
    "publicationYear": 2012,
    "sources": [
      {
        "title": "Baselga et al. NEJM 2012（初回PFS）",
        "url": "https://www.nejm.org/doi/abs/10.1056/NEJMoa1113216"
      },
      {
        "title": "Swain et al. NEJM 2015（対象集団・OS更新）",
        "url": "https://www.nejm.org/doi/full/10.1056/NEJMoa1413513"
      },
      {
        "title": "試験終了時OS解析",
        "url": "https://pubmed.ncbi.nlm.nih.gov/32171426/",
        "kind": "更新・関連報告",
        "publicationDate": "2020-03-12"
      }
    ],
    "caveat": "一次治療は抗HER2療法・化学療法の文脈。数値は初回PFS解析で、後年のOS更新とは別。",
    "publicationDateType": "online_first",
    "cardPopulation": "HER2陽性。転移病変に対する化学療法・生物学的療法は未治療。内分泌療法1ラインまで許容。術前・術後化学療法（トラスツズマブ併用を含む）終了から転移診断まで12か月以上。",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "表示結果の原著全文は未確認です。一次論文の抄録・公開された要約に基づき、対象条件の補足には試験計画なども参照しています。",
      "sourceUrl": "https://www.nejm.org/doi/abs/10.1056/NEJMoa1113216"
    },
    "guidelineReferences": [
      {
        "trialId": "cleopatra",
        "guidelineId": "jbcs-2022-web-2024",
        "section": "薬物療法 CQ26",
        "title": "HER2陽性転移・再発乳癌に対する一次治療として，トラスツズマブ＋ペルツズマブ＋タキサン併用療法は推奨されるか？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq26/",
        "citationEvidence": "参考文献1: Swain et al., NEJM 2015；参考文献2: Swain et al., Lancet Oncol 2020（試験終了時報告）。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/25693012/",
          "https://pubmed.ncbi.nlm.nih.gov/32171426/"
        ],
        "organization": "JBCS",
        "accessMethod": "学会公式WEB版の該当章・参考文献"
      },
      {
        "trialId": "cleopatra",
        "guidelineId": "asco-her2-positive-advanced-2022",
        "organization": "ASCO",
        "title": "Systemic Therapy for Advanced Human Epidermal Growth Factor Receptor 2–Positive Breast Cancer: ASCO Guideline Update",
        "publicationDate": "2022-05-31",
        "section": "Recommendation 1.1; reference 7",
        "url": "https://ascopubs.org/doi/10.1200/JCO.22.00519",
        "citationEvidence": "CLEOPATRAの2020年最終報告を文献7として明示。",
        "relationship": "explicit_citation",
        "verificationMethod": "indexed_official_guideline_body",
        "checkedDate": "2026-10-06",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）"
      }
    ],
    "regimenAgents": [],
    "agents": [],
    "drugClasses": [],
    "reports": [
      {
        "id": "cleopatra-end-of-study-os-2020",
        "label": "試験終了時OS解析",
        "publicationDate": "2020-03-12",
        "publicationDateType": "online_first",
        "resultDate": "2020-03-12",
        "resultDateLabel": "原著公開日／月（データカットオフとは別）",
        "result": "OS 57.1対40.8か月、HR 0.69（95% CI 0.58–0.82）。8年OS 37%対23%。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/32171426/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/32171426/",
          "checkedDate": "2026-10-06"
        },
        "checkedDate": "2026-10-06",
        "issuePublicationDate": "2020-05"
      }
    ],
    "primaryPublication": {
      "date": "2011-12-07",
      "precision": "day",
      "sourceUrl": "https://www.nejm.org/doi/10.1056/NEJMoa1113216",
      "note": "初回PFS主要結果の先行公開。冊子2012年、OS更新とは区別。"
    }
  },
  {
    "setting": "metastatic",
    "stages": [],
    "timing": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "phase": "III",
    "id": "monaleesa-7",
    "name": "MONALEESA-7",
    "design": "第III相・無作為化・二重盲検・プラセボ対照（1:1）",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stageLabel": "局所進行または転移性の進行乳癌",
    "lineBuckets": [
      "firstline",
      "chemo_pretreated"
    ],
    "lineLabel": "閉経前・周閉経期の初回進行期内分泌療法（化学療法1ラインまで許容）",
    "population": "18～59歳の閉経前・周閉経期女性、HR陽性／HER2陰性。進行病変に対する内分泌療法は未治療、化学療法は1ラインまで許容。CDK4/6阻害薬歴なし。全例でゴセレリン併用。",
    "biomarkers": [
      "HR陽性",
      "HER2陰性"
    ],
    "experimental": "リボシクリブ＋内分泌療法（NSAIまたはタモキシフェン）＋ゴセレリン",
    "control": "プラセボ＋同じ内分泌療法＋ゴセレリン",
    "primaryEndpoint": "治験責任医師評価によるPFS",
    "result": "PFS中央値23.8対13.0か月、ハザード比0.55（95% CI 0.44–0.69）。",
    "resultDate": "2018-05-24",
    "resultDateLabel": "初回PFS報告・オンライン公開日",
    "publicationDate": "2018-05-24",
    "publicationYear": 2018,
    "sources": [
      {
        "title": "Tripathy et al. Lancet Oncology 2018（初回PFS）",
        "url": "https://pubmed.ncbi.nlm.nih.gov/29804902/"
      },
      {
        "title": "Im et al. NEJM 2019（対象集団・OS報告）",
        "url": "https://www.nejm.org/doi/abs/10.1056/NEJMoa1903765"
      }
    ],
    "caveat": "「一次治療」は内分泌療法の文脈。進行期化学療法既治療例も含む。試験の内分泌療法選択肢を記載しており、現行の併用推奨を示さない。",
    "publicationDateType": "online_first",
    "lineBucketNote": "firstlineは進行期内分泌療法の一次治療を指す。chemo_pretreatedは既治療が許容された部分集団。",
    "cardPopulation": "18～59歳の閉経前・周閉経期女性、HR陽性／HER2陰性。進行病変に対する内分泌療法は未治療、化学療法は1ラインまで許容。CDK4/6阻害薬歴なし。全例でゴセレリン併用。",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "表示結果の原著全文は未確認です。一次論文の抄録・公開された要約に基づき、対象条件の補足には試験計画なども参照しています。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/29804902/"
    },
    "guidelineReferences": [
      {
        "trialId": "monaleesa-7",
        "guidelineId": "jbcs-2022-web-2024",
        "section": "薬物療法 CQ18",
        "title": "閉経前ホルモン受容体陽性HER2陰性転移・再発乳癌に対する一次内分泌療法として，何が推奨されるか？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq18/",
        "citationEvidence": "参考文献1: Tripathy et al., Lancet Oncol 2018；参考文献2: Im et al., NEJM 2019；参考文献3: Lu et al., Clin Cancer Res 2022（OS更新）。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/29804902/",
          "https://pubmed.ncbi.nlm.nih.gov/31166679/",
          "https://pubmed.ncbi.nlm.nih.gov/34965945/"
        ],
        "organization": "JBCS",
        "accessMethod": "学会公式WEB版の該当章・参考文献"
      },
      {
        "trialId": "monaleesa-7",
        "guidelineId": "asco-endocrine-targeted-2021",
        "organization": "ASCO",
        "title": "Endocrine Treatment and Targeted Therapy for Hormone Receptor–Positive, Human Epidermal Growth Factor Receptor 2–Negative Metastatic Breast Cancer: ASCO Guideline Update",
        "publicationDate": "2021-07-29",
        "section": "Recommendation 3.1; Literature review",
        "url": "https://ascopubs.org/doi/10.1200/JCO.21.01392",
        "citationEvidence": "一次CDK4/6併用療法の根拠試験としてMONALEESA-7を明示。",
        "relationship": "explicit_citation",
        "verificationMethod": "indexed_official_guideline_body",
        "checkedDate": "2026-10-06",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）"
      }
    ],
    "regimenAgents": [],
    "agents": [],
    "drugClasses": [],
    "reports": [],
    "primaryPublication": {
      "date": "2018-05-24",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/29804902/",
      "note": "初回PFS原著のオンライン先行公開。2019年OS更新ではない。"
    }
  },
  {
    "setting": "metastatic",
    "stages": [],
    "timing": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "phase": "III",
    "id": "paloma-3",
    "name": "PALOMA-3",
    "design": "第III相・無作為化・二重盲検・プラセボ対照（2:1）",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stageLabel": "切除不能局所進行または転移性乳癌",
    "lineBuckets": [
      "endocrine_pretreated",
      "chemo_pretreated"
    ],
    "lineLabel": "内分泌療法中・後の増悪／再発（進行期化学療法1ラインまで許容）",
    "population": "HR陽性／HER2陰性で前治療内分泌療法中・後に増悪または再発。閉経状態を問わず、閉経前・周閉経期ではゴセレリン併用。進行期化学療法1ラインまで許容。",
    "biomarkers": [
      "HR陽性",
      "HER2陰性"
    ],
    "experimental": "パルボシクリブ＋フルベストラント（必要に応じゴセレリン）",
    "control": "プラセボ＋フルベストラント（必要に応じゴセレリン）",
    "primaryEndpoint": "治験責任医師評価によるPFS",
    "result": "初回中間解析：PFS中央値9.2対3.8か月、ハザード比0.42（95% CI 0.32–0.56）。",
    "resultDate": "2015-06-01",
    "resultDateLabel": "初回PFS報告・オンライン公開日",
    "publicationDate": "2015-06-01",
    "publicationYear": 2015,
    "sources": [
      {
        "title": "Turner et al. NEJM 2015（初回PFS）",
        "url": "https://pubmed.ncbi.nlm.nih.gov/26030518/"
      },
      {
        "title": "Rugo et al. The Oncologist 2021（前治療条件）",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8342589/"
      }
    ],
    "caveat": "内分泌療法ラインと化学療法ラインを分けて読む。初回PFS中間解析の値で、後続報告の中央値とは異なる。CDK4/6阻害薬継続・再投与の試験ではない。",
    "publicationDateType": "online_first",
    "lineBucketNote": "chemo_pretreatedは化学療法既治療が許容された部分集団を含むという意味で、全例の必須条件ではない。",
    "cardPopulation": "HR陽性／HER2陰性で前治療内分泌療法中・後に増悪または再発。閉経状態を問わず、閉経前・周閉経期ではゴセレリン併用。進行期化学療法1ラインまで許容。",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "表示結果の原著全文は未確認です。一次論文の抄録・公開された要約に基づき、対象条件の補足には試験計画なども参照しています。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/26030518/"
    },
    "guidelineReferences": [
      {
        "trialId": "paloma-3",
        "guidelineId": "jbcs-2022-web-2024",
        "section": "薬物療法 CQ21",
        "title": "閉経後ホルモン受容体陽性HER2陰性転移・再発乳癌の一次療法にアロマターゼ阻害薬単剤を使用したときの二次内分泌療法として，何が推奨されるか？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq21/",
        "citationEvidence": "参考文献3: Turner et al., NEJM 2015；参考文献4: Cristofanilli et al., Lancet Oncol 2016；参考文献5–6にOS報告。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/26030518/",
          "https://pubmed.ncbi.nlm.nih.gov/26947331/",
          "https://pubmed.ncbi.nlm.nih.gov/30345905/",
          "https://pubmed.ncbi.nlm.nih.gov/35552673/"
        ],
        "organization": "JBCS",
        "accessMethod": "学会公式WEB版の該当章・参考文献"
      },
      {
        "trialId": "paloma-3",
        "guidelineId": "asco-endocrine-targeted-2021",
        "organization": "ASCO",
        "title": "Endocrine Treatment and Targeted Therapy for Hormone Receptor–Positive, Human Epidermal Growth Factor Receptor 2–Negative Metastatic Breast Cancer: ASCO Guideline Update",
        "publicationDate": "2021-07-29",
        "section": "Recommendation 3.2; Literature review",
        "url": "https://ascopubs.org/doi/10.1200/JCO.21.01392",
        "citationEvidence": "フルベストラント併用の根拠3試験にPALOMA-3を明示。",
        "relationship": "explicit_citation",
        "verificationMethod": "indexed_official_guideline_body",
        "checkedDate": "2026-10-06",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）"
      },
      {
        "trialId": "paloma-3",
        "guidelineId": "nccn-insights-breast-1-2017",
        "section": "p.448, NCCN Recommendations for Endocrine Therapy for Metastatic Breast Cancer",
        "title": "NCCN Guidelines Insights: Breast Cancer, Version 1.2017",
        "url": "https://jnccn.org/abstract/journals/jnccn/15/4/article-p433.pdf",
        "citationEvidence": "本文でPALOMA-3を明示し、参照90を付す。",
        "relationship": "explicit_citation",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）",
        "sourceVersion": "1.2017",
        "historical": true,
        "checkedDate": "2026-10-06",
        "referenceNumber": 90,
        "organization": "NCCN"
      }
    ],
    "agents": [
      "fulvestrant"
    ],
    "drugClasses": [
      "SERD"
    ],
    "regimenType": "combination",
    "priorCdk46Context": "CDK4/6阻害薬の既治療後継続を検証する試験ではない。",
    "esr1Context": "ESR1変異を登録条件としない。",
    "japanApproval": "未評価",
    "safety": "初回PFS報告：grade 3/4好中球減少62.0%対0.6%、発熱性好中球減少0.6%対0.6%。",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/26030518/",
      "checkedDate": "2026-10-06"
    },
    "reports": [],
    "regimenAgents": [
      "palbociclib",
      "fulvestrant"
    ],
    "primaryPublication": {
      "date": "2015-06-01",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/26030518/",
      "note": "初回PFS原著。"
    }
  },
  {
    "setting": "metastatic",
    "stages": [],
    "timing": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "phase": "III",
    "id": "solar-1",
    "name": "SOLAR-1",
    "design": "第III相・無作為化・二重盲検・プラセボ対照（1:1、PIK3CA変異別コホート）",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stageLabel": "局所進行または転移性乳癌",
    "lineBuckets": [
      "firstline",
      "endocrine_pretreated"
    ],
    "lineLabel": "アロマターゼ阻害薬治療後／再発・進行期化学療法未治療",
    "population": "男性または閉経後女性、HR陽性／HER2陰性。術前・術後または進行期のアロマターゼ阻害薬治療歴と増悪・再発。PIK3CA変異あり／なしの2コホートを登録。主要評価は腫瘍組織PIK3CA変異陽性群。",
    "biomarkers": [
      "PIK3CA変異（主要評価集団）"
    ],
    "experimental": "アルペリシブ＋フルベストラント",
    "control": "プラセボ＋フルベストラント",
    "primaryEndpoint": "PIK3CA変異陽性コホートの治験責任医師評価PFS",
    "result": "PIK3CA変異陽性群：PFS中央値11.0対5.7か月、ハザード比0.65（95% CI 0.50–0.85）。",
    "resultDate": "2019-05-15",
    "resultDateLabel": "主要PFS報告・オンライン公開日",
    "publicationDate": "2019-05-15",
    "publicationYear": 2019,
    "sources": [
      {
        "title": "André et al. NEJM 2019（主要解析）",
        "url": "https://www.nejm.org/doi/abs/10.1056/NEJMoa1813904"
      },
      {
        "title": "同論文・PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/31091374/"
      },
      {
        "title": "PIK3CA変異群の最終OS解析",
        "url": "https://pubmed.ncbi.nlm.nih.gov/33246021/",
        "kind": "更新・関連報告",
        "publicationDate": "2020-11-25"
      }
    ],
    "caveat": "効果量はPIK3CA変異陽性群。CDK4/6阻害薬既治療例は少数で、その後の患者集団への外挿には注意。高血糖・皮疹などの安全性評価が必要。",
    "publicationDateType": "online_first",
    "cardPopulation": "男性または閉経後女性、HR陽性／HER2陰性。術前・術後または進行期のアロマターゼ阻害薬治療歴と増悪・再発。PIK3CA変異あり／なしの2コホートを登録。主要評価は腫瘍組織PIK3CA変異陽性群。",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "表示結果の原著全文は未確認です。一次論文の抄録・公開された要約に基づき、対象条件の補足には試験計画なども参照しています。",
      "sourceUrl": "https://www.nejm.org/doi/abs/10.1056/NEJMoa1813904"
    },
    "guidelineReferences": [
      {
        "trialId": "solar-1",
        "guidelineId": "jbcs-2022-web-2024",
        "section": "薬物療法 FRQ11",
        "title": "PIK3CA変異陽性ホルモン受容体陽性HER2陰性転移・再発乳癌に対して，PI3K阻害薬は有用か？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/frq11/",
        "citationEvidence": "参考文献6: André et al., NEJM 2019；参考文献7: André et al., Ann Oncol 2021（最終OS）。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/31091374/",
          "https://pubmed.ncbi.nlm.nih.gov/33246021/"
        ],
        "organization": "JBCS",
        "accessMethod": "学会公式WEB版の該当章・参考文献"
      },
      {
        "trialId": "solar-1",
        "guidelineId": "asco-endocrine-targeted-2021",
        "organization": "ASCO",
        "title": "Endocrine Treatment and Targeted Therapy for Hormone Receptor–Positive, Human Epidermal Growth Factor Receptor 2–Negative Metastatic Breast Cancer: ASCO Guideline Update",
        "publicationDate": "2021-07-29",
        "section": "Recommendation 1.1; Introduction / Literature review",
        "url": "https://ascopubs.org/doi/10.1200/JCO.21.01392",
        "citationEvidence": "SOLAR-1を更新の契機となった第III相試験として明示。",
        "relationship": "explicit_citation",
        "verificationMethod": "indexed_official_guideline_body",
        "checkedDate": "2026-10-06",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）"
      }
    ],
    "agents": [
      "fulvestrant"
    ],
    "drugClasses": [
      "SERD"
    ],
    "regimenType": "combination",
    "priorCdk46Context": "CDK4/6阻害薬既治療は少数。post-CDK4/6集団への外挿に注意。",
    "esr1Context": "ESR1ではなくPIK3CA変異コホートが主要評価対象。",
    "japanApproval": "未評価",
    "safety": "Grade 3/4高血糖36.6%対0.7%、皮疹9.9%対0.3%。アルペリシブ／プラセボのAE中止25.0%対4.2%。",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/31091374/",
      "checkedDate": "2026-10-06"
    },
    "reports": [
      {
        "id": "solar1-final-os-2020",
        "label": "PIK3CA変異群の最終OS解析",
        "publicationDate": "2020-11-25",
        "publicationDateType": "online_first",
        "resultDate": "2020-11-25",
        "resultDateLabel": "原著公開日／月（データカットオフとは別）",
        "result": "PIK3CA変異群341例：OS 39.3対31.4か月、HR 0.86（95% CI 0.64–1.15、片側P=0.15）。事前有意境界P≤0.0161を満たさず。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/33246021/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/33246021/",
          "checkedDate": "2026-10-06"
        },
        "checkedDate": "2026-10-06",
        "issuePublicationDate": "2021-02",
        "outcomeStatus": "negative",
        "caveat": "PFS利益とOS非有意を区別する。"
      }
    ],
    "regimenAgents": [
      "alpelisib",
      "fulvestrant"
    ],
    "primaryPublication": {
      "date": "2019-05-15",
      "precision": "day",
      "sourceUrl": "https://www.nejm.org/doi/10.1056/NEJMoa1813904",
      "note": "初回PFS主要結果原著の出版社オンライン公開日。冊子は2019-05-16、cutoffより前。"
    }
  },
  {
    "setting": "metastatic",
    "stages": [],
    "timing": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "phase": "III",
    "id": "olympiad",
    "name": "OlympiAD",
    "design": "第III相・無作為化・非盲検・実薬対照（2:1）",
    "subtypes": [
      "HR+/HER2-",
      "TNBC"
    ],
    "stageLabel": "転移性乳癌",
    "lineBuckets": [
      "firstline",
      "chemo_pretreated",
      "endocrine_pretreated"
    ],
    "lineLabel": "生殖細胞系列BRCA1/2変異・進行期化学療法0～2ライン後",
    "population": "HER2陰性で病的／病的疑い生殖細胞系列BRCA1/2変異。HR陽性・TNBCの両方。転移病変への化学療法は0～2レジメン、周術期を含めタキサンとアントラサイクリン（禁忌を除く）既治療。HR陽性は内分泌療法後増悪または不適と判断。",
    "biomarkers": [
      "生殖細胞系列BRCA1/2病的／病的疑い変異",
      "HER2陰性"
    ],
    "experimental": "オラパリブ",
    "control": "医師選択単剤化学療法（カペシタビン、エリブリン、ビノレルビン）",
    "primaryEndpoint": "BICRによるPFS",
    "result": "PFS中央値7.0対4.2か月、ハザード比0.58（95% CI 0.43–0.80）。",
    "resultDate": "2017-06-04",
    "resultDateLabel": "主要PFS報告・オンライン公開日",
    "publicationDate": "2017-06-04",
    "publicationYear": 2017,
    "sources": [
      {
        "title": "Robson et al. NEJM 2017（主要解析）",
        "url": "https://www.nejm.org/doi/full/10.1056/NEJMoa1706450"
      }
    ],
    "caveat": "生殖細胞系列BRCA変異が対象で、体細胞BRCA変異や他のHRR遺伝子へそのまま外挿しない。周術期OlympiAとは別試験。",
    "publicationDateType": "online_first",
    "lineBucketNote": "転移病変への化学療法0ラインも対象。endocrine_pretreatedはHR陽性集団に限る条件（不適例の例外あり）。",
    "cardPopulation": "HER2陰性で病的／病的疑い生殖細胞系列BRCA1/2変異。HR陽性・TNBCの両方。転移病変への化学療法は0～2レジメン、周術期を含めタキサンとアントラサイクリン（禁忌を除く）既治療。HR陽性は内分泌療法後増悪または不適と判断。",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "表示結果の原著全文は未確認です。一次論文の抄録・公開された要約に基づき、対象条件の補足には試験計画なども参照しています。",
      "sourceUrl": "https://www.nejm.org/doi/full/10.1056/NEJMoa1706450"
    },
    "guidelineReferences": [
      {
        "trialId": "olympiad",
        "guidelineId": "jbcs-2022-web-2024",
        "section": "薬物療法 CQ32",
        "title": "生殖細胞系列BRCA病的バリアントを有する進行・再発乳癌患者の薬物療法として，PARP阻害薬は推奨されるか？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq32/",
        "citationEvidence": "参考文献1: Robson et al., NEJM 2017；本文でOlympiADを明示。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/28578601/"
        ],
        "organization": "JBCS",
        "accessMethod": "学会公式WEB版の該当章・参考文献"
      },
      {
        "trialId": "olympiad",
        "guidelineId": "asco-her2-negative-chemo-2021",
        "organization": "ASCO",
        "title": "Chemotherapy and Targeted Therapy for Patients With Human Epidermal Growth Factor Receptor 2–Negative Metastatic Breast Cancer That is Either Endocrine-Pretreated or Hormone Receptor–Negative: ASCO Guideline Update",
        "publicationDate": "2021-07-29",
        "section": "Recommendation 1.4; Clinical interpretation",
        "url": "https://ascopubs.org/doi/10.1200/JCO.21.01374",
        "citationEvidence": "OlympiADとEMBRACAのPARP阻害薬比較を明示。",
        "relationship": "explicit_citation",
        "verificationMethod": "indexed_official_guideline_body",
        "checkedDate": "2026-10-06",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）"
      }
    ],
    "regimenAgents": [],
    "agents": [],
    "drugClasses": [],
    "reports": [],
    "primaryPublication": {
      "date": "2017-06-04",
      "precision": "day",
      "sourceUrl": "https://www.nejm.org/doi/10.1056/NEJMoa1706450",
      "note": "初回PFS主要結果原著。"
    }
  },
  {
    "id": "potent",
    "name": "POTENT",
    "phase": "III",
    "design": "無作為化・非盲検（1:1）",
    "setting": "early",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [
      "I",
      "II",
      "III"
    ],
    "timing": [
      "adjuvant"
    ],
    "population": "20–75歳の女性、ER陽性/HER2陰性、病期I–IIIBで再発リスクが中等度～高い原発乳癌。日本139施設。",
    "cardPopulation": "20–75歳の女性、ER陽性/HER2陰性、病期I–IIIBで再発リスクが中等度～高い原発乳癌。日本139施設。",
    "experimental": "標準術後内分泌療法5年＋S-1を1年",
    "control": "標準術後内分泌療法5年",
    "trial_registration": "UMIN000003969 / jRCTs051180057",
    "primaryEndpoint": "iDFS（full analysis set）",
    "result": "2021年主報告：iDFS HR 0.63（95% CI 0.49–0.81、P=0.0003）。追跡中央値52.2か月の中間解析で早期終了。",
    "publicationYear": 2021,
    "publicationDate": "2021-01",
    "resultDate": "2019-01-31",
    "resultDateLabel": "主報告の中間解析データカットオフ",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "caveat": "全てのHR陽性早期乳癌が適格ではない。掲載値は2021年主報告の抄録で確認した中間解析。2025年の追跡調査は別の解析集団であり、ここには混在させない。",
    "stageLabel": "I–IIIBという広い病期範囲に追加の再発リスク条件がある。抄録に列挙されない詳細条件は未確認。",
    "sources": [
      {
        "title": "Toi et al. Adjuvant S-1 plus endocrine therapy for oestrogen receptor-positive, HER2-negative, primary breast cancer. Lancet Oncology 2021",
        "url": "https://pubmed.ncbi.nlm.nih.gov/33387497/",
        "kind": "原著・主報告（抄録）"
      },
      {
        "title": "出版社公開抄録",
        "url": "https://www.sciencedirect.com/science/article/pii/S1470204520305349",
        "kind": "出版社抄録"
      }
    ],
    "guidelineReferences": [
      {
        "guidelineId": "jbcs-2022-web-2024",
        "section": "薬物療法 CQ5",
        "title": "ホルモン受容体陽性HER2陰性乳癌に対する術後療法として，内分泌療法にS-1を併用することは勧められるか？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq5/",
        "citationEvidence": "参考文献1: Toi et al., Lancet Oncol 2021;22:74–84。本文でPOTENTを明示。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/33387497/"
        ],
        "organization": "JBCS",
        "accessMethod": "学会公式WEB版の該当章・参考文献"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "出版社の公開Summaryで対象・割付・主要評価項目・DCO・HRを確認。原著全文は未確認。",
      "sourceUrl": "https://www.sciencedirect.com/science/article/pii/S1470204520305349"
    },
    "publicationDateType": "issue_month",
    "lineBuckets": [],
    "regimenAgents": [],
    "agents": [],
    "drugClasses": [],
    "reports": [],
    "primaryPublication": {
      "date": "2021-01",
      "precision": "month",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/33387497/",
      "note": "初回iDFS原著の確認できた書誌日付はLancet Oncology 2021年1月。正確な初回オンライン日までは未確定。2019年SABCS発表（抄録掲載2020年2月）と区別。"
    }
  },
  {
    "id": "respect",
    "name": "RESPECT",
    "phase": "III",
    "design": "無作為化・非盲検・事前規定の非劣性基準を含む治療選択デザイン",
    "setting": "early",
    "subtypes": [
      "HER2+"
    ],
    "stages": [
      "I",
      "II",
      "III"
    ],
    "timing": [
      "adjuvant"
    ],
    "population": "70–80歳、手術後のHER2陽性浸潤性乳癌。病期I（浸潤径>0.5 cm）、IIA、IIB、IIIAを含む。",
    "cardPopulation": "70–80歳、手術後のHER2陽性浸潤性乳癌。病期I（浸潤径>0.5 cm）、IIA、IIB、IIIAを含む。",
    "experimental": "トラスツズマブ単独",
    "control": "トラスツズマブ＋化学療法",
    "trial_registration": "NCT01104935",
    "primaryEndpoint": "DFS（非劣性の検証）",
    "result": "2020年報告：3年DFS 89.5% vs 93.8%、HR 1.36（95% CI 0.72–2.58）。トラスツズマブ単独の非劣性は証明されなかった。",
    "publicationYear": 2020,
    "publicationDate": "2020-09-16",
    "resultDate": "2020-09-16",
    "resultDateLabel": "主報告オンライン公開日（平均追跡4.1年）",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "caveat": "化学療法省略と同等性を証明した試験ではない。毒性・QOLとのトレードオフがある。年齢だけで全ての高齢者に単独療法を適用しない。",
    "stageLabel": "I–IIIA。III期全般ではなく、登録集団のIII期はIIIA。",
    "sources": [
      {
        "title": "Sawaki et al. Randomized Controlled Trial of Trastuzumab With or Without Chemotherapy for HER2-Positive Early Breast Cancer in Older Patients. JCO 2020",
        "url": "https://ascopubs.org/doi/10.1200/JCO.20.00184",
        "kind": "原著・主報告（抄録）"
      }
    ],
    "guidelineReferences": [
      {
        "guidelineId": "jbcs-2022-web-2024",
        "section": "薬物療法 CQ15",
        "title": "高齢者のHER2陽性早期乳癌に対する術後薬物療法として，トラスツズマブのみによる治療は勧められるか？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq15/",
        "citationEvidence": "参考文献1: Sawaki et al., JCO 2020;38:3743–52。本文でRESPECTと非劣性不成立を明示。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/32936713/"
        ],
        "organization": "JBCS",
        "accessMethod": "学会公式WEB版の該当章・参考文献"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "出版社抄録で年齢・病期構成・比較群・DFS・非劣性不成立を確認。原著全文は未確認。",
      "sourceUrl": "https://ascopubs.org/doi/abs/10.1200/JCO.20.00184"
    },
    "publicationDateType": "online_first",
    "lineBuckets": [],
    "regimenAgents": [],
    "agents": [],
    "drugClasses": [],
    "reports": [],
    "primaryPublication": {
      "date": "2020-09-16",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/32936713/",
      "note": "初回無作為化比較の主要DFS非劣性結果原著。"
    }
  },
  {
    "id": "mindact",
    "name": "MINDACT",
    "phase": "III",
    "design": "臨床リスク／70遺伝子リスク別割付；不一致群で無作為化",
    "setting": "early",
    "subtypes": [
      "HR+/HER2-",
      "HER2+",
      "TNBC"
    ],
    "stages": [
      "I",
      "II",
      "III"
    ],
    "timing": [
      "adjuvant"
    ],
    "population": "18–70歳、T1–T2または手術可能T3、リンパ節転移0–3個、遠隔転移なし。サブタイプ限定なし。主な掲載解析は臨床高リスク・70遺伝子低リスク群。",
    "cardPopulation": "18–70歳、T1–T2または手術可能T3、リンパ節転移0–3個、遠隔転移なし。サブタイプ限定なし。主な掲載解析は臨床高リスク・70遺伝子低リスク群。",
    "experimental": "化学療法省略（臨床高リスク・ゲノム低リスク群）",
    "control": "化学療法あり（同リスク群）；HR陽性は内分泌療法",
    "trial_registration": "NCT00433589",
    "primaryEndpoint": "臨床高リスク・ゲノム低リスクで化学療法なしの主要検証集団における5年DMFSと事前閾値92%の比較",
    "result": "2021年更新：主要検証集団の5年DMFS 95.1%（95% CI 93.1–96.6）。同リスク群の無作為化ITT解析で8年DMFSは化学療法なし89.4% vs あり92.0%。",
    "publicationYear": 2021,
    "publicationDate": "2021-03-12",
    "resultDate": "2020-02-26",
    "resultDateLabel": "更新解析データカットオフ（追跡中央値8.7年）",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "caveat": "主要検証は2群間の非劣性比較ではない。8年の2群比較は別解析。若年HR陽性/HER2陰性の探索解析では化学療法の利益が大きい可能性。JBCS CQ11への引用はMammaPrintに基づく省略の推奨と同義ではない。",
    "stageLabel": "T1–T3、N0–N1に相当する非転移乳癌。HR陽性/HER2陰性だけを登録した試験ではない。",
    "sources": [
      {
        "title": "Piccart et al. 70-gene signature as an aid for treatment decisions in early breast cancer: updated results of the phase 3 randomised MINDACT trial with an exploratory analysis by age. Lancet Oncology 2021",
        "url": "https://pubmed.ncbi.nlm.nih.gov/33721561/",
        "kind": "原著・長期更新（抄録）"
      },
      {
        "title": "Cardoso et al. 70-Gene Signature as an Aid to Treatment Decisions in Early-Stage Breast Cancer. NEJM 2016",
        "url": "https://pubmed.ncbi.nlm.nih.gov/27557300/",
        "kind": "原著・初回報告"
      }
    ],
    "guidelineReferences": [
      {
        "guidelineId": "jbcs-2022-web-2024",
        "section": "薬物療法 CQ11",
        "title": "ホルモン受容体陽性HER2陰性乳癌に対して，多遺伝子アッセイの結果によって，術後化学療法を省略することは推奨されるか？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq11/",
        "citationEvidence": "参考文献7: Cardoso et al., NEJM 2016；参考文献8: Piccart et al., Lancet Oncol 2021。 CQ11はMINDACTの患者・デザイン上の相違を挙げ、MammaPrintについて同CQの推奨を行うのは困難と説明。引用確認であり推奨認定ではない。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/27557300/",
          "https://pubmed.ncbi.nlm.nih.gov/33721561/"
        ],
        "interpretationNote": "CQ11はMINDACTの患者・デザイン上の相違を挙げ、MammaPrintについて同CQの推奨を行うのは困難と説明。引用確認であり推奨認定ではない。",
        "organization": "JBCS",
        "accessMethod": "学会公式WEB版の該当章・参考文献"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "PubMed掲載抄録で登録条件・主要検証集団・無作為化ITT群・DCO・長期結果を確認。原著全文は未確認。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/33721561/"
    },
    "publicationDateType": "online_first",
    "lineBuckets": [],
    "regimenAgents": [],
    "agents": [],
    "drugClasses": [],
    "reports": [],
    "primaryPublication": {
      "date": "2016",
      "precision": "year",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/27557300/",
      "note": "初回主要結果原著。2021年更新・年齢探索解析ではない。"
    }
  },
  {
    "id": "neosphere",
    "name": "NeoSphere",
    "phase": "II",
    "design": "無作為化・非盲検・4群（1:1:1:1）",
    "setting": "early",
    "subtypes": [
      "HER2+"
    ],
    "stages": [],
    "timing": [
      "neoadjuvant"
    ],
    "population": "未治療女性のHER2陽性乳癌。手術可能、局所進行、炎症性乳癌を含む。",
    "cardPopulation": "未治療女性のHER2陽性乳癌。手術可能、局所進行、炎症性乳癌を含む。",
    "experimental": "ペルツズマブ＋トラスツズマブ＋ドセタキセルを術前4サイクル（主要な2群比較）",
    "control": "トラスツズマブ＋ドセタキセルを術前4サイクル。別にペルツズマブ＋トラスツズマブ群とペルツズマブ＋ドセタキセル群。",
    "trial_registration": "NCT00545688",
    "primaryEndpoint": "乳房内pCR（ITT；乳房の浸潤癌消失）",
    "result": "2011年オンライン主報告：乳房内pCR 45.8% vs 29.0%（P=0.0141）。4群計417例、上記2群は各107例。",
    "publicationYear": 2011,
    "publicationDate": "2011-12-06",
    "resultDate": "2011-12-06",
    "resultDateLabel": "主要pCR解析のオンライン公開日（冊子2012年1月）",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "caveat": "乳房内pCRの定義はypT0/Tis ypN0と異なる。4群試験のうち2群を中心に表示。pCR差だけから長期生存利益や化学療法全省略の安全性は結論できない。",
    "stageLabel": "手術可能・局所進行・炎症性を含む。抄録には詳細TNM条件がないため、病期フィルター値は保留。JBCS CQ12は原発巣2 cm以上等と記載。",
    "sources": [
      {
        "title": "Gianni et al. Efficacy and safety of neoadjuvant pertuzumab and trastuzumab in women with locally advanced, inflammatory, or early HER2-positive breast cancer (NeoSphere). Lancet Oncology 2012",
        "url": "https://pubmed.ncbi.nlm.nih.gov/22153890/",
        "kind": "原著・主要pCR解析（抄録）"
      },
      {
        "title": "Gianni et al. 5-year analysis of NeoSphere. Lancet Oncology 2016",
        "url": "https://pubmed.ncbi.nlm.nih.gov/27179402/",
        "kind": "原著・長期解析（掲載pCR値の出典ではない）"
      }
    ],
    "guidelineReferences": [
      {
        "guidelineId": "jbcs-2022-web-2024",
        "section": "薬物療法 CQ12",
        "title": "術前薬物療法を行うHER2陽性早期乳癌に対して，トラスツズマブにペルツズマブを加えることは勧められるか？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq12/",
        "citationEvidence": "参考文献1: Gianni et al., Lancet Oncol 2012；参考文献2: Gianni et al., Lancet Oncol 2016（5年解析）。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/22153890/",
          "https://pubmed.ncbi.nlm.nih.gov/27179402/"
        ],
        "organization": "JBCS",
        "accessMethod": "学会公式WEB版の該当章・参考文献"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "主報告のPubMed抄録で4群、主要評価項目、pCR値を確認。詳細TNM基準を原著本文で確認していないため、数値的な病期分類は保留。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/22153890/"
    },
    "publicationDateType": "online_first",
    "lineBuckets": [],
    "regimenAgents": [],
    "agents": [],
    "drugClasses": [],
    "reports": [],
    "primaryPublication": {
      "date": "2011-12-06",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/22153890/",
      "note": "初回pCR主要結果原著のオンライン先行公開。冊子2012年。"
    }
  },
  {
    "id": "bcirg-006",
    "name": "BCIRG 006",
    "phase": "III",
    "design": "無作為化・3群",
    "setting": "early",
    "subtypes": [
      "HER2+"
    ],
    "stages": [],
    "timing": [
      "adjuvant"
    ],
    "population": "HER2陽性早期乳癌の女性3,222例。",
    "cardPopulation": "HER2陽性早期乳癌の女性3,222例。",
    "experimental": "AC→ドセタキセル＋トラスツズマブ1年、またはドセタキセル＋カルボプラチン＋トラスツズマブ1年（TCH）",
    "control": "AC→ドセタキセル（トラスツズマブなし）",
    "trial_registration": "NCT00021255",
    "primaryEndpoint": "DFS",
    "result": "2011年報告：5年DFSはAC→TH 84%、TCH 81%、AC→T 75%。追跡中央値65か月。",
    "publicationYear": 2011,
    "publicationDate": "2011-10-06",
    "resultDate": "2011-10-06",
    "resultDateLabel": "原著公開日（追跡中央値65か月の解析）",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "caveat": "AC→THとTCHの同等性を証明する設計ではない。掲載値は2011年原著。JBCSが別途引用する10年学会報告の数値を混在させない。",
    "stageLabel": "早期乳癌。原著全文未確認のため詳細TNMフィルターは保留。JBCS FRQ3はN+または高リスクN0と記載。",
    "sources": [
      {
        "title": "Slamon et al. Adjuvant Trastuzumab in HER2-Positive Breast Cancer. NEJM 2011",
        "url": "https://pubmed.ncbi.nlm.nih.gov/21991949/",
        "kind": "原著・主報告（抄録）"
      },
      {
        "title": "原著のPMC公開版",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3268553/",
        "kind": "公開版リンク（本文アクセス不安定）"
      }
    ],
    "guidelineReferences": [
      {
        "guidelineId": "jbcs-2022-web-2024",
        "section": "薬物療法 FRQ3",
        "title": "HER2陽性早期乳癌に対する術後薬物療法として，アンスラサイクリンを省略したタキサンとトラスツズマブによる併用療法は勧められるか？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/frq3/",
        "citationEvidence": "参考文献3: Slamon et al., NEJM 2011（doi:10.1056/NEJMoa0910383）；参考文献6に10年追跡学会抄録。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/21991949/"
        ],
        "organization": "JBCS",
        "accessMethod": "学会公式WEB版の該当章・参考文献"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "公開抄録で群・DFS・65か月追跡を確認。本文の一部は検索取得できたが全文オープンは確認画面となり、保守的に抄録ベースとする。",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3268553/"
    },
    "publicationDateType": "issue_date",
    "lineBuckets": [],
    "regimenAgents": [],
    "agents": [],
    "drugClasses": [],
    "reports": [],
    "primaryPublication": {
      "date": "2011",
      "precision": "year",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/21991949/",
      "note": "初回主要結果原著。PubMed掲載2011-10-06。"
    }
  },
  {
    "id": "bolero-2",
    "name": "BOLERO-2",
    "phase": "III",
    "design": "第III相・無作為化・二重盲検・プラセボ対照（2:1）",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行または転移性乳癌",
    "lineBuckets": [
      "firstline",
      "endocrine_pretreated",
      "chemo_pretreated"
    ],
    "lineLabel": "非ステロイド性AI抵抗性、進行期化学療法1ラインまで",
    "population": "閉経後女性、ER陽性／HER2非増幅の進行乳癌。レトロゾール／アナストロゾールによる術後療法中・終了後12か月以内、または進行期治療中・終了後1か月以内に再発／増悪。進行期化学療法は1レジメンまで。",
    "cardPopulation": "閉経後女性、ER陽性／HER2非増幅の進行乳癌。レトロゾール／アナストロゾールによる術後療法中・終了後12か月以内、または進行期治療中・終了後1か月以内に再発／増悪。進行期化学療法は1レジメンまで。",
    "experimental": "エベロリムス＋エキセメスタン",
    "control": "プラセボ＋エキセメスタン",
    "primaryEndpoint": "治験責任医師評価PFS（中央評価は支持解析）",
    "result": "初回中間PFS（施設評価）：6.9対2.8か月（HR 0.43）。2014年最終OS：31.0対26.6か月（HR 0.89、95% CI 0.73–1.10、P=0.14）、有意差なし。",
    "publicationDate": "2014-09-17",
    "publicationYear": 2014,
    "publicationDateType": "online_first",
    "resultDate": "2013-10-03",
    "resultDateLabel": "最終OSデータカットオフ（PFS値は2011年中間解析報告）",
    "sources": [
      {
        "title": "Piccart et al. Annals of Oncology 2014（最終OS）",
        "url": "https://pubmed.ncbi.nlm.nih.gov/25231953/",
        "kind": "原著"
      },
      {
        "title": "Baselga et al. NEJM 2011 online / 2012 print（主要PFS・適格条件）",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5705195/",
        "kind": "原著"
      },
      {
        "title": "Yardley et al. Everolimus Plus Exemestane in Postmenopausal Patients with HR+ Breast Cancer: BOLERO-2 Final Progression-Free Survival Analysis. Advances in Therapy 2013",
        "url": "https://link.springer.com/article/10.1007/s12325-013-0060-1",
        "kind": "原著・PFS最終解析／本文確認"
      },
      {
        "title": "Baselga et al. Everolimus in Postmenopausal Hormone-Receptor–Positive Advanced Breast Cancer. NEJM 2012",
        "url": "https://pubmed.ncbi.nlm.nih.gov/22149876/",
        "kind": "原著・初回報告"
      }
    ],
    "caveat": "PFSの施設評価と中央評価を混同しない。CDK4/6阻害薬普及前の試験で、その既治療後の効果を直接検証していない。口内炎・高血糖・非感染性肺炎に注意。",
    "guidelineReferences": [
      {
        "guidelineId": "jbcs-2022-web-2024",
        "section": "薬物療法 CQ21",
        "title": "閉経後ホルモン受容体陽性HER2陰性転移・再発乳癌の一次療法にアロマターゼ阻害薬単剤を使用したときの二次内分泌療法として，何が推奨されるか？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq21/",
        "citationEvidence": "参考文献23: Baselga et al., NEJM 2012；参考文献24: Yardley et al., Adv Ther 2013；参考文献25: Piccart et al., Ann Oncol 2014（OS）。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/22149876/",
          "https://pubmed.ncbi.nlm.nih.gov/24158787/",
          "https://pubmed.ncbi.nlm.nih.gov/25231953/"
        ],
        "organization": "JBCS",
        "accessMethod": "学会公式WEB版の該当章・参考文献"
      },
      {
        "guidelineId": "asco-endocrine-2016",
        "organization": "ASCO",
        "title": "Endocrine Therapy for Hormone Receptor–Positive Metastatic Breast Cancer: American Society of Clinical Oncology Guideline",
        "publicationDate": "2016-05-23",
        "section": "Recommendation 3.1; Literature review and analysis",
        "url": "https://ascopubs.org/doi/10.1200/JCO.2016.67.1487",
        "citationEvidence": "BOLERO-2をeverolimus＋exemestaneの根拠として明示。",
        "relationship": "explicit_citation",
        "verificationMethod": "indexed_official_guideline_body",
        "checkedDate": "2026-10-06",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）"
      },
      {
        "trialId": "bolero-2",
        "guidelineId": "nccn-insights-breast-1-2017",
        "section": "p.442, BINV-N, footnote 1",
        "title": "NCCN Guidelines Insights: Breast Cancer, Version 1.2017",
        "url": "https://jnccn.org/abstract/journals/jnccn/15/4/article-p433.pdf",
        "citationEvidence": "脚注1でBOLERO-2の適格条件を明示。",
        "relationship": "explicit_citation",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）",
        "sourceVersion": "1.2017",
        "historical": true,
        "checkedDate": "2026-10-06",
        "organization": "NCCN"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "最終OSは抄録で確認。2011年主要PFS原著はPMC本文で対象・評価方法・結果を確認したが、2014年OS本文は取得できなかった。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/25231953/",
      "checkedDate": "2026-10-06"
    },
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "trial_registration": "NCT00863655",
    "biomarkers": [
      "ER陽性",
      "HER2非増幅"
    ],
    "lineBucketNote": "周術期AI後早期再発に対する進行期初回治療を含む。chemo_pretreatedは許容集団で全例の必須条件ではない。",
    "regimenAgents": [],
    "agents": [],
    "drugClasses": [],
    "reports": [],
    "primaryPublication": {
      "date": "2011-12-07",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/22149876/",
      "note": "初回PFS主要結果原著。2014年OS更新ではない。"
    }
  },
  {
    "id": "emilia",
    "name": "EMILIA",
    "phase": "III",
    "design": "第III相・無作為化・非盲検・実薬対照（1:1）",
    "setting": "metastatic",
    "subtypes": [
      "HER2+"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "切除不能局所進行または転移性乳癌",
    "lineBuckets": [
      "firstline",
      "chemo_pretreated",
      "her2_pretreated"
    ],
    "lineLabel": "トラスツズマブ・タキサン既治療",
    "population": "HER2陽性の切除不能局所進行または転移性乳癌で、トラスツズマブとタキサンの前治療歴を有する。991例。",
    "cardPopulation": "HER2陽性の切除不能局所進行または転移性乳癌で、トラスツズマブとタキサンの前治療歴を有する。991例。",
    "experimental": "T-DM1（トラスツズマブ エムタンシン）",
    "control": "ラパチニブ＋カペシタビン",
    "primaryEndpoint": "独立評価PFSおよびOS（主要有効性評価）",
    "result": "初回PFS：9.6対6.4か月（HR 0.65）。2017年最終記述的OS：29.9対25.9か月（HR 0.75、95% CI 0.64–0.88）。",
    "publicationDate": "2017-05-16",
    "publicationYear": 2017,
    "publicationDateType": "online_first",
    "resultDate": "2017年最終OS報告",
    "resultDateLabel": "最終OS記述的解析の報告（PFS値は2012年主要報告）",
    "sources": [
      {
        "title": "Diéras et al. Lancet Oncology 2017（最終OS）",
        "url": "https://pubmed.ncbi.nlm.nih.gov/28526536/",
        "kind": "原著"
      },
      {
        "title": "Verma et al. NEJM 2012（主要解析）",
        "url": "https://pubmed.ncbi.nlm.nih.gov/23020162/",
        "kind": "原著"
      }
    ],
    "caveat": "最終OSはクロスオーバー許容後の記述的解析。現代のT-DXdやtucatinibとの直接比較ではなく、現在の治療順序をこの試験だけで決めない。",
    "guidelineReferences": [
      {
        "guidelineId": "jbcs-2022-web-2024",
        "section": "薬物療法 CQ28",
        "title": "HER2陽性転移・再発乳癌に対する二次治療として，トラスツズマブ デルクステカンは推奨されるか？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq28/",
        "citationEvidence": "参考文献3: Verma et al., NEJM 2012；参考文献4: Diéras et al., Lancet Oncol 2017。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/23020162/",
          "https://pubmed.ncbi.nlm.nih.gov/28526536/"
        ],
        "organization": "JBCS",
        "accessMethod": "学会公式WEB版の該当章・参考文献"
      },
      {
        "guidelineId": "jbcs-2022-web-2024",
        "section": "薬物療法 FRQ12",
        "title": "HER2陽性転移・再発乳癌に対する三次以降の治療で推奨される治療は何か？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/frq12/",
        "citationEvidence": "参考文献5: Verma et al., NEJM 2012；参考文献6: Diéras et al., Lancet Oncol 2017。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/23020162/",
          "https://pubmed.ncbi.nlm.nih.gov/28526536/"
        ],
        "organization": "JBCS",
        "accessMethod": "学会公式WEB版の該当章・参考文献"
      },
      {
        "guidelineId": "asco-her2-positive-advanced-2022",
        "organization": "ASCO",
        "title": "Systemic Therapy for Advanced Human Epidermal Growth Factor Receptor 2–Positive Breast Cancer: ASCO Guideline Update",
        "publicationDate": "2022-05-31",
        "section": "References, reference 12; T-DM1 evidence review",
        "url": "https://ascopubs.org/doi/10.1200/JCO.22.00519",
        "citationEvidence": "EMILIAの2017年最終OS原著を文献12として明示。",
        "relationship": "explicit_citation",
        "verificationMethod": "indexed_official_guideline_body",
        "checkedDate": "2026-10-06",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "掲載結果は原著抄録で確認。本文は取得できず、抄録にない結果・解析詳細は補完していない。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/28526536/",
      "checkedDate": "2026-10-06"
    },
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "trial_registration": "NCT00829166",
    "biomarkers": [
      "HER2陽性"
    ],
    "lineBucketNote": "前治療は周術期を含む。原著抄録の層別因子には進行期化学療法0–1レジメン群があり、進行期初回治療も含む。転移期二次治療だけとは断定しない。",
    "agents": [
      "T-DM1"
    ],
    "drugClasses": [
      "ADC"
    ],
    "her2Expression": "HER2陽性",
    "priorAdcContext": "トラスツズマブ・タキサン既治療。T-DXd後を検証した試験ではない。",
    "safety": "最終OS報告：T-DM1の主なGrade ≥3 AEは血小板減少14%、AST上昇5%、貧血4%。",
    "safetySourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5531181/",
    "japanApproval": "未評価",
    "updateNote": "同一最終OS報告本文の安全性記載を確認。既存の原著確認ラベルとガイドライン引用を保持。",
    "reports": [],
    "regimenAgents": [
      "T-DM1",
      "lapatinib",
      "capecitabine"
    ],
    "primaryPublication": {
      "date": "2012-10-01",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/23020162/",
      "note": "初回主要結果原著。2017年最終OS更新ではない。"
    }
  },
  {
    "id": "embraca",
    "name": "EMBRACA",
    "phase": "III",
    "design": "第III相・無作為化・非盲検・実薬対照（2:1）",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-",
      "TNBC"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行または転移性乳癌",
    "lineBuckets": [
      "firstline",
      "chemo_pretreated"
    ],
    "lineLabel": "gBRCA1/2変異、進行期化学療法0–3ライン後",
    "population": "HER2陰性、病的／病的疑い生殖細胞系列BRCA1/2変異を伴う根治不能局所進行／転移性乳癌。進行期細胞傷害性化学療法3レジメン以内。周術期を含めタキサンまたはアントラサイクリン（あるいは両者）の前治療が必要、禁忌は例外。",
    "cardPopulation": "HER2陰性、病的／病的疑い生殖細胞系列BRCA1/2変異を伴う根治不能局所進行／転移性乳癌。進行期細胞傷害性化学療法3レジメン以内。周術期を含めタキサンまたはアントラサイクリン（あるいは両者）の前治療が必要、禁忌は例外。",
    "experimental": "タラゾパリブ",
    "control": "医師選択単剤化学療法（カペシタビン、エリブリン、ゲムシタビン、ビノレルビン）",
    "primaryEndpoint": "BICRによるPFS（OSは副次評価）",
    "result": "主要PFS：8.6対5.6か月（HR 0.542）。2020年最終OS解析：死亡HR 0.848（95% CI 0.670–1.073、P=0.17）、有意差なし。",
    "publicationDate": "2020-08-20",
    "publicationYear": 2020,
    "publicationDateType": "online_first",
    "resultDate": "2019-09-30",
    "resultDateLabel": "最終OSデータカットオフ（PFS値は2018年主要報告）",
    "sources": [
      {
        "title": "Litton et al. Annals of Oncology 2020（最終OS）",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10649377/",
        "kind": "原著"
      },
      {
        "title": "Litton et al. NEJM 2018（主要PFS・適格条件）",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10600918/",
        "kind": "原著"
      },
      {
        "title": "Litton et al. Talazoparib in Patients with Advanced Breast Cancer and a Germline BRCA Mutation. NEJM 2018",
        "url": "https://www.nejm.org/doi/full/10.1056/NEJMoa1802905",
        "kind": "原著・主要PFS報告"
      }
    ],
    "caveat": "進行期化学療法未治療例も含む。プラチナを対照に含まず、PARP阻害薬とプラチナの優劣は検証していない。gBRCA以外の遺伝子異常へ外挿しない。",
    "guidelineReferences": [
      {
        "guidelineId": "jbcs-2022-web-2024",
        "section": "薬物療法 CQ32",
        "title": "生殖細胞系列BRCA病的バリアントを有する進行・再発乳癌患者の薬物療法として，PARP阻害薬は推奨されるか？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq32/",
        "citationEvidence": "参考文献2: Litton et al., NEJM 2018;379:753–63。本文でEMBRACAを明示。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/30110579/"
        ],
        "organization": "JBCS",
        "accessMethod": "学会公式WEB版の該当章・参考文献"
      },
      {
        "guidelineId": "asco-her2-negative-chemo-2021",
        "organization": "ASCO",
        "title": "Chemotherapy and Targeted Therapy for Patients With Human Epidermal Growth Factor Receptor 2–Negative Metastatic Breast Cancer That is Either Endocrine-Pretreated or Hormone Receptor–Negative: ASCO Guideline Update",
        "publicationDate": "2021-07-29",
        "section": "Recommendation 1.4; Clinical interpretation",
        "url": "https://ascopubs.org/doi/10.1200/JCO.21.01374",
        "citationEvidence": "OlympiADとEMBRACAのPARP阻害薬比較を明示。",
        "relationship": "explicit_citation",
        "verificationMethod": "indexed_official_guideline_body",
        "checkedDate": "2026-10-06",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "最終OS本文のMethods・Resultsと2018年主要原著本文の適格条件を確認。",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10649377/",
      "checkedDate": "2026-10-06"
    },
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "trial_registration": "NCT01945775",
    "biomarkers": [
      "生殖細胞系列BRCA1/2病的／病的疑い変異",
      "HER2陰性"
    ],
    "lineBucketNote": "chemo_pretreatedは進行期化学療法既治療例を含む意味。0ラインも登録。",
    "regimenAgents": [],
    "agents": [],
    "drugClasses": [],
    "reports": [],
    "primaryPublication": {
      "date": "2018-08-15",
      "precision": "day",
      "sourceUrl": "https://www.nejm.org/doi/10.1056/NEJMoa1802905",
      "note": "初回PFS主要結果原著。2020年OS更新ではない。"
    }
  },
  {
    "id": "monarch-2",
    "name": "MONARCH-2",
    "phase": "III",
    "design": "第III相・無作為化・二重盲検・プラセボ対照（2:1）",
    "setting": "metastatic",
    "subtypes": [
      "HR+/HER2-"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行または転移性乳癌",
    "lineBuckets": [
      "firstline",
      "endocrine_pretreated"
    ],
    "lineLabel": "内分泌療法中・後の増悪／早期再発、進行期化学療法未治療",
    "population": "HR陽性／HER2陰性、閉経状態を問わない女性。周術期内分泌療法中／終了後12か月以内、または進行期一次内分泌療法中に増悪。進行期ETは1ラインまで、進行期化学療法歴なし。閉経前・周閉経期は卵巣機能抑制を併用。",
    "cardPopulation": "HR陽性／HER2陰性、閉経状態を問わない女性。周術期内分泌療法中／終了後12か月以内、または進行期一次内分泌療法中に増悪。進行期ETは1ラインまで、進行期化学療法歴なし。閉経前・周閉経期は卵巣機能抑制を併用。",
    "experimental": "アベマシクリブ＋フルベストラント",
    "control": "プラセボ＋フルベストラント",
    "primaryEndpoint": "治験責任医師評価PFS（OSは主要副次評価）",
    "result": "2019年事前規定OS中間解析：OS中央値46.7対37.3か月（HR 0.757、95% CI 0.606–0.945、P=0.01）。",
    "publicationDate": "2019-09-29",
    "publicationYear": 2019,
    "publicationDateType": "online_first",
    "resultDate": "2019-06-20",
    "resultDateLabel": "事前規定OS中間解析データカットオフ（追跡中央値47.7か月）",
    "sources": [
      {
        "title": "Sledge et al. JAMA Oncology 2019（OS中間解析）",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6777264/",
        "kind": "原著"
      },
      {
        "title": "Sledge et al. JCO 2017（主要PFS）",
        "url": "https://pubmed.ncbi.nlm.nih.gov/28580882/",
        "kind": "原著"
      }
    ],
    "caveat": "内分泌療法中の増悪・早期再発が条件。CDK4/6阻害薬、フルベストラント、エベロリムス既治療を除外しており、CDK4/6阻害薬後の再投与試験ではない。",
    "guidelineReferences": [
      {
        "guidelineId": "asco-endocrine-targeted-2021",
        "organization": "ASCO",
        "title": "Endocrine Treatment and Targeted Therapy for Hormone Receptor–Positive, Human Epidermal Growth Factor Receptor 2–Negative Metastatic Breast Cancer: ASCO Guideline Update",
        "publicationDate": "2021-07-29",
        "section": "Recommendation 3.2; MONARCH-2 subsection",
        "url": "https://ascopubs.org/doi/10.1200/JCO.21.01392",
        "citationEvidence": "フルベストラント併用の根拠としてMONARCH-2を明示。",
        "relationship": "explicit_citation",
        "verificationMethod": "indexed_official_guideline_body",
        "checkedDate": "2026-10-06",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "Methods（適格条件）・統計計画・OS結果本文を確認。掲載OSは2019年中間解析。",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6777264/",
      "checkedDate": "2026-10-06"
    },
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "trial_registration": "NCT02107703",
    "biomarkers": [
      "HR陽性",
      "HER2陰性"
    ],
    "agents": [
      "fulvestrant"
    ],
    "drugClasses": [
      "SERD"
    ],
    "regimenType": "combination",
    "priorCdk46Context": "CDK4/6阻害薬既治療は除外。",
    "esr1Context": "ESR1変異を登録条件としない。",
    "japanApproval": "未評価",
    "safety": "主要PFS報告：下痢（全grade）86.4%対24.7%、好中球減少46.0%対4.0%。OS更新と解析時点を区別。",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/28580882/",
      "checkedDate": "2026-10-06"
    },
    "reports": [],
    "regimenAgents": [
      "abemaciclib",
      "fulvestrant"
    ],
    "primaryPublication": {
      "date": "2017-06-03",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/28580882/",
      "note": "初回PFS主要結果原著。2019年OS更新ではない。"
    }
  },
  {
    "id": "atlas",
    "name": "ATLAS",
    "phase": "III",
    "design": "無作為化・非盲検（1:1、治療継続対中止）",
    "setting": "early",
    "subtypes": [
      "HR+/HER2-",
      "HER2+"
    ],
    "stages": [
      "I",
      "II",
      "III"
    ],
    "timing": [
      "adjuvant"
    ],
    "population": "早期乳癌でタモキシフェンを中央値5年受け、登録時に臨床的病変なし。閉経状態・リンパ節を問わない。掲載効果量はER陽性6,846例で、HER2陰性を必須とした試験ではない。",
    "experimental": "タモキシフェンをさらに5年継続し、計10年",
    "control": "タモキシフェンを約5年で終了",
    "trial_registration": "ISRCTN19652633",
    "primaryEndpoint": "プロトコル規定の主解析は全死亡。本報告はER陽性群の再発・乳癌死亡を重点解析。",
    "result": "ER陽性群：診断後5–14年の再発累積リスク21.4% vs 25.1%、乳癌死亡12.2% vs 15.0%。",
    "publicationYear": 2013,
    "publicationDate": "2013-03-09",
    "publicationDateType": "issue_date",
    "resultDate": "2012-08-31",
    "resultDateLabel": "報告データセット日",
    "sources": [
      {
        "title": "Davies et al. Lancet 2013: ATLAS（主要報告）",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3596060/",
        "kind": "原著・本文確認"
      },
      {
        "title": "同論文 DOI",
        "url": "https://doi.org/10.1016/S0140-6736(12)61963-1",
        "kind": "原著"
      }
    ],
    "caveat": "HER2別効果を検証した試験ではない。ER陰性例への有効性を示さない。延長療法には子宮内膜癌・肺塞栓の増加もあり、利益だけで判断しない。",
    "stageLabel": "非転移早期乳癌の粗い病期区分。登録時の無病状態とタモキシフェン治療歴が重要。",
    "biomarkers": [
      "ER陽性（掲載効果量）",
      "HER2による選択なし"
    ],
    "subtypeNote": "検索用にHR陽性の関連枠へ配置。HER2陽性全般に有効性が示された意味ではない。",
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "PMCでMethods、Statistical analysis、Resultsを確認。ER陽性解析と当初の全死亡主解析を区別。",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3596060/"
    },
    "guidelineReferences": [
      {
        "guidelineId": "nccn-insights-breast-1-2017",
        "section": "p.446, Adjuvant Endocrine Therapy / extended tamoxifen",
        "title": "NCCN Guidelines Insights: Breast Cancer, Version 1.2017",
        "url": "https://jnccn.org/abstract/journals/jnccn/15/4/article-p433.pdf",
        "citationEvidence": "本文でATLASを明示し、参照71を付す。",
        "relationship": "explicit_citation",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）",
        "sourceVersion": "1.2017",
        "historical": true,
        "checkedDate": "2026-10-06",
        "referenceNumber": 71,
        "organization": "NCCN"
      }
    ],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "cardPopulation": "早期乳癌でタモキシフェンを中央値5年受け、登録時に臨床的病変なし。閉経状態・リンパ節を問わない。掲載効果量はER陽性6,846例で、HER2陰性を必須とした試験ではない。",
    "lineBuckets": [],
    "regimenAgents": [],
    "agents": [],
    "drugClasses": [],
    "reports": [],
    "primaryPublication": {
      "date": "2012-12-05",
      "precision": "day",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3596060/",
      "note": "初回主要原著のオンライン先行公開。冊子は2013年3月。出版社の訂正原稿PMC3898894も初回公開日2012-12-05を明示。"
    }
  },
  {
    "id": "ma-17r",
    "name": "MA.17R",
    "phase": "III",
    "design": "無作為化・二重盲検・プラセボ対照",
    "setting": "early",
    "subtypes": [
      "HR+/HER2-",
      "HER2+"
    ],
    "stages": [
      "I",
      "II",
      "III"
    ],
    "timing": [
      "adjuvant"
    ],
    "population": "閉経後のHR陽性早期乳癌で、AIによる術後内分泌療法を約5年から約10年へ延長する比較。詳細な適格条件は原著本文未確認のため掲載範囲を限定。",
    "experimental": "レトロゾールを追加5年",
    "control": "プラセボを追加5年",
    "trial_registration": "NCT00754845",
    "primaryEndpoint": "DFS（乳癌再発または対側乳癌発生）",
    "result": "2016年報告：5年DFS 95% vs 91%（HR 0.66、P=0.01）。5年OS 93% vs 94%（HR 0.97、P=0.83）。",
    "publicationYear": 2016,
    "publicationDate": "2016-06-05",
    "publicationDateType": "online_first",
    "resultDate": "2016-06-05",
    "resultDateLabel": "主要結果オンライン公開日（追跡中央値6.3年）",
    "sources": [
      {
        "title": "Goss et al. NEJM 2016: Extending Aromatase-Inhibitor Adjuvant Therapy to 10 Years",
        "url": "https://pubmed.ncbi.nlm.nih.gov/27264120/",
        "kind": "原著・抄録確認"
      },
      {
        "title": "同論文 DOI",
        "url": "https://doi.org/10.1056/NEJMoa1604700",
        "kind": "原著"
      }
    ],
    "caveat": "原著論文未確認（抄録ベース）。DFS改善とOS改善を区別する。骨痛・骨折・新規骨粗鬆症は延長群で多い。全患者へ一律に延長を勧める結果ではない。",
    "stageLabel": "非転移早期乳癌の粗い区分。抄録に詳細病期別適格条件はなく、I–III期の全例が適格という意味ではない。",
    "biomarkers": [
      "HR陽性"
    ],
    "subtypeNote": "HER2別の効果を示す比較ではない。検索用のHER2+枠でもHR陽性症例に限る背景資料。",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "NEJMの結果抄録とPubMed書誌で確認。公開PMCの索引に本文断片はあるが、本文ページ取得はできなかったため全文確認済みとはしない。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/27264120/"
    },
    "guidelineReferences": [
      {
        "guidelineId": "nccn-insights-breast-1-2017",
        "section": "p.446, NCCN Recommendations for Adjuvant Endocrine Therapy",
        "title": "NCCN Guidelines Insights: Breast Cancer, Version 1.2017",
        "url": "https://jnccn.org/abstract/journals/jnccn/15/4/article-p433.pdf",
        "citationEvidence": "本文でMA17.Rを明示し、参照73を付す。",
        "relationship": "explicit_citation",
        "accessMethod": "公式ページの公開検索抜粋（関連箇所のみ）",
        "sourceVersion": "1.2017",
        "historical": true,
        "checkedDate": "2026-10-06",
        "referenceNumber": 73,
        "organization": "NCCN"
      }
    ],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "cardPopulation": "閉経後のHR陽性早期乳癌で、AIによる術後内分泌療法を約5年から約10年へ延長する比較。詳細な適格条件は原著本文未確認のため掲載範囲を限定。",
    "lineBuckets": [],
    "regimenAgents": [],
    "agents": [],
    "drugClasses": [],
    "reports": [],
    "primaryPublication": {
      "date": "2016-06-05",
      "precision": "day",
      "sourceUrl": "https://www.nejm.org/doi/10.1056/NEJMoa1604700",
      "note": "初回DFS主要原著の先行公開。"
    }
  },
  {
    "id": "th3resa",
    "name": "TH3RESA",
    "phase": "III",
    "design": "無作為化・非盲検・実薬対照",
    "setting": "metastatic",
    "subtypes": [
      "HER2+"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "切除不能・転移性乳癌",
    "population": "HER2陽性。進行期トラスツズマブ・ラパチニブ、任意の病期でタキサン既治療、進行期抗HER2レジメン2つ以上後増悪。602例。",
    "cardPopulation": "HER2陽性。進行期トラスツズマブ・ラパチニブ、任意の病期でタキサン既治療、進行期抗HER2レジメン2つ以上後増悪。602例。",
    "experimental": "T-DM1",
    "control": "医師選択治療",
    "agents": [
      "T-DM1"
    ],
    "drugClasses": [
      "ADC"
    ],
    "trial_registration": "NCT01419197",
    "primaryEndpoint": "研究者判定PFSおよびOS",
    "result": "最終OS中央値22.7対15.8か月（HR 0.68、95% CI 0.54–0.85、P=0.0007）。",
    "safety": "Grade ≥3 AE 40%対47%。T-DM1では血小板減少6%対3%、出血4%対<1%（いずれもGrade ≥3）。",
    "publicationDate": "2017-05-16",
    "publicationYear": 2017,
    "publicationDateType": "online_first",
    "resultDate": "2015-02-13",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "sources": [
      {
        "title": "Trastuzumab emtansine versus treatment of physician's choice in patients with previously treated HER2-positive metastatic breast cancer (TH3RESA): final overall survival results from a randomised open-label phase 3 trial.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/28526538/",
        "kind": "原著",
        "publicationDate": "2017-05-16"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "表示結果・安全性は一次論文抄録で確認。本文未確認の詳細を補完していない。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/28526538/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "japanApproval": "未評価",
    "guidelineStatus": "この追加データでは引用未確認",
    "lineBuckets": [
      "her2_pretreated",
      "chemo_pretreated"
    ],
    "priorAdcContext": "抗HER2治療複数レジメン後。現代のT-DXd既治療集団を検証した試験ではない。",
    "her2Expression": "HER2陽性",
    "caveat": "対照群47%がT-DM1へクロスオーバー。T-DXdなどとの現代的治療順序比較ではない。",
    "reports": [],
    "regimenAgents": [
      "T-DM1"
    ],
    "primaryPublication": {
      "date": "2014-05-02",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/24793816/",
      "sourceTitle": "Trastuzumab emtansine versus treatment of physician's choice for pretreated HER2-positive advanced breast cancer (TH3RESA): a randomised, open-label, phase 3 trial",
      "sourceType": "original_paper",
      "note": "初回主要PFS結果原著。PubMed Epub 2014 May 2を確認。2017年最終OS報告ではない。"
    }
  },
  {
    "id": "marianne",
    "name": "MARIANNE",
    "phase": "III",
    "design": "無作為化・非盲検・実薬対照",
    "setting": "metastatic",
    "subtypes": [
      "HER2+"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "切除不能・転移性乳癌",
    "population": "HER2陽性進行乳癌、進行期治療未治療。1095例。",
    "cardPopulation": "HER2陽性進行乳癌、進行期治療未治療。1095例。",
    "experimental": "T-DM1単独、またはT-DM1＋ペルツズマブ",
    "control": "トラスツズマブ＋タキサン",
    "agents": [
      "T-DM1"
    ],
    "drugClasses": [
      "ADC"
    ],
    "trial_registration": "NCT01120184",
    "primaryEndpoint": "独立判定PFS（非劣性・優越性）",
    "result": "PFS中央値：対照13.7か月、T-DM1 14.1か月、T-DM1＋P 15.2か月。両実験群とも非劣性、優越性は未達。",
    "safety": "Grade ≥3 AE：対照54.1%、T-DM1 45.4%、T-DM1＋P 46.2%。",
    "publicationDate": "2016-11-07",
    "publicationYear": 2016,
    "publicationDateType": "online_first",
    "resultDate": "2016-11-07",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "sources": [
      {
        "title": "Trastuzumab Emtansine With or Without Pertuzumab Versus Trastuzumab Plus Taxane for Human Epidermal Growth Factor Receptor 2-Positive, Advanced Breast Cancer: Primary Results From the Phase III MARIANNE Study.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/28056202/",
        "kind": "原著",
        "publicationDate": "2016-11-07"
      },
      {
        "title": "Trastuzumab emtansine with or without pertuzumab versus trastuzumab with taxane for human epidermal growth factor receptor 2-positive advanced breast cancer: Final results from MARIANNE.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/31318460/",
        "kind": "原著",
        "publicationDate": "2019-07-18"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "表示結果・安全性は一次論文抄録で確認。本文未確認の詳細を補完していない。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/28056202/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "japanApproval": "未評価",
    "guidelineStatus": "この追加データでは引用未確認",
    "lineBuckets": [
      "firstline"
    ],
    "priorAdcContext": "進行期未治療。T-DXd後の有効性を検証していない。",
    "her2Expression": "HER2陽性",
    "caveat": "対照はトラスツズマブ＋タキサンでありTHPではない。非劣性を優越性と混同しない。",
    "reports": [
      {
        "id": "marianne-final-os",
        "label": "最終記述的OS",
        "publicationDate": "2019-07-18",
        "resultDate": "2019年最終記述的OS報告",
        "result": "OS中央値：対照50.9、T-DM1 53.7、T-DM1＋P 51.8か月。群間同等を証明する解析ではない。",
        "safety": "Grade ≥3 AE：対照55.8%、T-DM1 47.1%、T-DM1＋P 48.6%。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/31318460/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "表示結果・安全性は一次論文抄録で確認。本文未確認の詳細を補完していない。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/31318460/",
          "checkedDate": "2026-10-06"
        }
      }
    ],
    "outcomeTag": "非劣性達成／優越性未達",
    "regimenAgents": [
      "T-DM1",
      "pertuzumab",
      "trastuzumab",
      "taxane"
    ],
    "primaryPublication": {
      "date": "2016-11-07",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/28056202/",
      "sourceTitle": "Trastuzumab Emtansine With or Without Pertuzumab Versus Trastuzumab Plus Taxane for Human Epidermal Growth Factor Receptor 2-Positive, Advanced Breast Cancer: Primary Results From the Phase III MARIANNE Study.",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    }
  },
  {
    "id": "kristine",
    "name": "KRISTINE",
    "phase": "III",
    "design": "無作為化・非盲検・実薬対照",
    "setting": "early",
    "subtypes": [
      "HER2+"
    ],
    "stages": [
      "II",
      "III"
    ],
    "timing": [
      "neoadjuvant",
      "adjuvant"
    ],
    "stageLabel": "早期乳癌（適格条件を確認）",
    "population": "HER2陽性II–III期、444例。術前から術後まで割付治療を評価。",
    "cardPopulation": "HER2陽性II–III期、444例。術前から術後まで割付治療を評価。",
    "experimental": "術前T-DM1＋ペルツズマブ、術後も継続",
    "control": "術前ドセタキセル＋カルボプラチン＋トラスツズマブ＋ペルツズマブ、術後HP",
    "agents": [
      "T-DM1"
    ],
    "drugClasses": [
      "ADC"
    ],
    "trial_registration": "NCT02131064",
    "primaryEndpoint": "pCR（3年報告ではEFS/iDFSも更新）",
    "result": "pCR 44.4%対55.7%（P=0.016）。T-DM1＋PのEFS不良（HR 2.61、95% CI 1.36–4.98）；術前局所領域進行6.7%対0%。",
    "safety": "全治療期間Grade ≥3 AE 31.8%対67.7%。ただし術後AE中止18.4%対3.8%とT-DM1＋Pで高い。",
    "publicationDate": "2019-06-03",
    "publicationYear": 2019,
    "publicationDateType": "online_first",
    "resultDate": "2019年3年更新（追跡中央値37か月）",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "sources": [
      {
        "title": "Neoadjuvant Trastuzumab Emtansine and Pertuzumab in Human Epidermal Growth Factor Receptor 2-Positive Breast Cancer: Three-Year Outcomes From the Phase III KRISTINE Study.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/31157583/",
        "kind": "原著",
        "publicationDate": "2019-06-03"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "表示結果・安全性は一次論文抄録で確認。本文未確認の詳細を補完していない。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/31157583/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "japanApproval": "未評価",
    "guidelineStatus": "この追加データでは引用未確認",
    "lineBuckets": [],
    "priorAdcContext": "術前未治療の早期乳癌。ADC既治療後の試験ではない。",
    "her2Expression": "HER2陽性",
    "caveat": "pCRが低く術前進行が増加。毒性減少のみでT-DM1＋Pを標準化学療法の代替と解釈しない。術後iDFSは手術に到達した集団。",
    "reports": [],
    "outcomeTag": "pCR/EFS不利",
    "regimenAgents": [
      "T-DM1",
      "pertuzumab",
      "docetaxel",
      "carboplatin",
      "trastuzumab"
    ],
    "primaryPublication": {
      "date": "2017-11-23",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/29175149/",
      "sourceTitle": "Neoadjuvant trastuzumab, pertuzumab, and chemotherapy versus trastuzumab emtansine plus pertuzumab in patients with HER2-positive breast cancer (KRISTINE): a randomised, open-label, multicentre, phase 3 trial",
      "sourceType": "original_paper",
      "note": "初回主要pCR結果原著。電子公表2017-11-23、冊子2018年1月。2019年3年追跡結果ではない。"
    }
  },
  {
    "id": "confirm",
    "name": "CONFIRM",
    "phase": "III",
    "design": "無作為化・二重盲検（1:1）",
    "setting": "metastatic",
    "subtypes": [
      "HR+（HER2非限定）"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行または転移性乳癌",
    "lineBuckets": [
      "endocrine_pretreated"
    ],
    "population": "内分泌療法後に再発・進行した閉経後ER陽性進行乳癌736例。HER2陰性限定の近年の試験と対象を同一視しない。",
    "cardPopulation": "内分泌療法後に再発・進行した閉経後ER陽性進行乳癌736例。HER2陰性限定の近年の試験と対象を同一視しない。",
    "experimental": "フルベストラント500 mg単剤（負荷投与あり）",
    "control": "フルベストラント250 mg単剤",
    "primaryEndpoint": "PFS（掲載結果は最終OS）",
    "result": "最終OS中央値26.4対22.3か月、HR 0.81（95% CI 0.69–0.96）、名目P=0.02。",
    "safety": "重篤な有害事象のプロファイルに臨床的に重要な群間差、新たな懸念なし。",
    "caveat": "用量比較。最終OS解析は初回OS解析後に計画され、多重性調整なし。",
    "agents": [
      "fulvestrant"
    ],
    "drugClasses": [
      "SERD"
    ],
    "regimenType": "monotherapy",
    "priorCdk46Context": "CDK4/6阻害薬の標準導入前の試験。CDK4/6阻害薬後の有効性を示す比較ではない。",
    "esr1Context": "ESR1変異を登録条件としない。",
    "biomarkers": [
      "ESR1変異を登録条件としない。"
    ],
    "trial_registration": "NCT00099437",
    "publicationDate": "2013-12-07",
    "publicationYear": 2013,
    "resultDate": "2013-12-07",
    "resultDateLabel": "掲載解析の公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Final overall survival: fulvestrant 500 mg vs 250 mg in the randomized CONFIRM trial.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/24317176/",
        "kind": "原著・抄録確認"
      },
      {
        "title": "Results of the CONFIRM phase III trial comparing fulvestrant 250 mg with fulvestrant 500 mg in postmenopausal women with estrogen receptor-positive advanced breast cancer.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/20855825/",
        "kind": "原著・主要PFS抄録"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/24317176/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "positive",
    "reports": [
      {
        "id": "confirm-primary-pfs-2010",
        "label": "主要PFS解析",
        "publicationDate": "2010-09-20",
        "resultDate": "2010-09-20",
        "result": "500 mg対250 mg：PFS HR 0.80（95% CI 0.68–0.94）、P=0.006。",
        "safety": "用量増加によるAEの増加を認めず。",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "主要PFS原著抄録の確認。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/20855825/",
          "checkedDate": "2026-10-06"
        },
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/20855825/"
      }
    ],
    "lineLabel": "内分泌療法既治療（対象条件参照）",
    "publicationDateType": "reported_publication_date",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/24317176/",
      "checkedDate": "2026-10-06"
    },
    "regimenAgents": [
      "fulvestrant"
    ],
    "primaryPublication": {
      "date": "2010-09-20",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/20855825/",
      "sourceTitle": "主要PFS解析",
      "sourceType": "original_paper",
      "note": "同一試験の初回主要結果原著（主要PFS解析）を基準に採用。主カードの追跡更新日・後続コホート報告日ではない。既存の検証済み書誌を再利用。"
    }
  },
  {
    "id": "first",
    "name": "FIRST",
    "phase": "II",
    "design": "無作為化・非盲検",
    "setting": "metastatic",
    "subtypes": [
      "HR+（HER2非限定）"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行または転移性乳癌",
    "lineBuckets": [
      "firstline"
    ],
    "population": "進行期未治療の閉経後ER陽性局所進行・転移乳癌205例。",
    "cardPopulation": "進行期未治療の閉経後ER陽性局所進行・転移乳癌205例。",
    "experimental": "フルベストラント500 mg単剤",
    "control": "アナストロゾール1 mg/日",
    "primaryEndpoint": "臨床的有用率（CBR）。掲載結果は追加OS解析",
    "result": "CBR 72.5%対67.0%。追加OS解析：54.1対48.4か月、HR 0.70（95% CI 0.50–0.98）、P=0.04。",
    "safety": "OS追跡で新たな安全性上の問題なし。",
    "caveat": "OSは当初の計画になくTTP解析後に追加。一部は追加追跡に参加せず。FALCON最終OSの非有意結果と区別。",
    "agents": [
      "fulvestrant"
    ],
    "drugClasses": [
      "SERD"
    ],
    "regimenType": "monotherapy",
    "priorCdk46Context": "CDK4/6阻害薬の標準導入前の試験。CDK4/6阻害薬後の有効性を示す比較ではない。",
    "esr1Context": "ESR1変異を登録条件としない。",
    "biomarkers": [
      "ESR1変異を登録条件としない。"
    ],
    "trial_registration": null,
    "publicationDate": "2015-09-14",
    "publicationYear": 2015,
    "resultDate": "2015-09-14",
    "resultDateLabel": "掲載解析の公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Fulvestrant 500 mg Versus Anastrozole 1 mg for the First-Line Treatment of Advanced Breast Cancer: Overall Survival Analysis From the Phase II FIRST Study.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/26371134/",
        "kind": "原著・抄録確認"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/26371134/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "primary_not_superior_secondary_signal",
    "reports": [],
    "registrationNote": "この調査でFIRST自身の登録番号を確定できず。論文に挙がるNCT01602380はFALCONでありFIRSTとして流用しない。",
    "lineLabel": "進行期一次療法／一次治療中変更",
    "publicationDateType": "reported_publication_date",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/26371134/",
      "checkedDate": "2026-10-06"
    },
    "regimenAgents": [
      "fulvestrant",
      "anastrozole"
    ],
    "primaryPublication": {
      "date": "2009-08-24",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/19704066/",
      "sourceTitle": "Activity of fulvestrant 500 mg versus anastrozole 1 mg as first-line treatment for advanced breast cancer: results from the FIRST study",
      "sourceType": "original_paper",
      "note": "初回主要結果原著。PubMed Epub 2009 Aug 24を確認。2015年OS更新ではない。"
    }
  },
  {
    "id": "swog-s0226",
    "name": "SWOG S0226",
    "phase": "III",
    "design": "無作為化・非盲検",
    "setting": "metastatic",
    "subtypes": [
      "HR+（HER2非限定）"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行または転移性乳癌",
    "lineBuckets": [
      "firstline"
    ],
    "population": "閉経後HR陽性転移乳癌の一次療法。無作為化707例、解析可能694例。術後タモキシフェン歴で層別。",
    "cardPopulation": "閉経後HR陽性転移乳癌の一次療法。無作為化707例、解析可能694例。術後タモキシフェン歴で層別。",
    "experimental": "フルベストラント＋アナストロゾール",
    "control": "アナストロゾール単剤",
    "primaryEndpoint": "PFS（掲載結果は最終OS）",
    "result": "最終OS 49.8対42.0か月、HR 0.82（95% CI 0.69–0.98）、P=0.03。",
    "safety": "長期grade 3–5毒性の頻度は両群で同程度。",
    "caveat": "アナストロゾール群の約45%がフルベストラントへクロスオーバー。術後タモキシフェン歴別効果は探索的。現在のSERD＋CDK4/6阻害薬併用との直接比較ではない。",
    "agents": [
      "fulvestrant"
    ],
    "drugClasses": [
      "SERD"
    ],
    "regimenType": "combination",
    "priorCdk46Context": "CDK4/6阻害薬の標準導入前の試験。CDK4/6阻害薬後の有効性を示す比較ではない。",
    "esr1Context": "ESR1変異を登録条件としない。",
    "biomarkers": [
      "ESR1変異を登録条件としない。"
    ],
    "trial_registration": "NCT00075764",
    "publicationDate": "2019-03-28",
    "publicationYear": 2019,
    "resultDate": "2019-03-28",
    "resultDateLabel": "掲載解析の公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Overall Survival with Fulvestrant plus Anastrozole in Metastatic Breast Cancer.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/30917258/",
        "kind": "原著・抄録確認"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/30917258/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "positive",
    "reports": [],
    "lineLabel": "進行期一次療法／一次治療中変更",
    "publicationDateType": "reported_publication_date",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/30917258/",
      "checkedDate": "2026-10-06"
    },
    "regimenAgents": [
      "fulvestrant",
      "anastrozole"
    ],
    "primaryPublication": {
      "date": "2012-08-02",
      "precision": "day",
      "sourceUrl": "https://www.nejm.org/doi/full/10.1056/NEJMoa1201622",
      "sourceTitle": "Combination Anastrozole and Fulvestrant in Metastatic Breast Cancer",
      "sourceType": "original_paper",
      "note": "初回主要PFS結果原著。NEJM Published online August 2, 2012を確認。2019年OS追跡更新ではない。"
    }
  },
  {
    "id": "fact",
    "name": "FACT",
    "phase": "III",
    "design": "無作為化・非盲検",
    "setting": "metastatic",
    "subtypes": [
      "HR+（HER2非限定）"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行または転移性乳癌",
    "lineBuckets": [
      "firstline"
    ],
    "population": "局所乳癌の初回再発、HR陽性。閉経後またはGnRHアゴニスト使用の閉経前女性514例。約2/3に術後抗エストロゲン歴。",
    "cardPopulation": "局所乳癌の初回再発、HR陽性。閉経後またはGnRHアゴニスト使用の閉経前女性514例。約2/3に術後抗エストロゲン歴。",
    "experimental": "フルベストラント250 mg維持＋負荷投与＋アナストロゾール",
    "control": "アナストロゾール単剤",
    "primaryEndpoint": "TTP",
    "result": "TTP 10.8対10.2か月、HR 0.99（95% CI 0.81–1.20）、P=0.91。OSにも差なし。",
    "safety": "ほてり24.6%対13.8%。有害事象による死亡4.3%対2.0%（治療関連死と同義ではない）。",
    "caveat": "陰性試験。SWOG S0226と既治療背景が異なる。現在のフルベストラント500 mg維持投与の検証ではない。",
    "agents": [
      "fulvestrant"
    ],
    "drugClasses": [
      "SERD"
    ],
    "regimenType": "combination",
    "priorCdk46Context": "CDK4/6阻害薬の標準導入前の試験。CDK4/6阻害薬後の有効性を示す比較ではない。",
    "esr1Context": "ESR1変異を登録条件としない。",
    "biomarkers": [
      "ESR1変異を登録条件としない。"
    ],
    "trial_registration": "NCT00256698",
    "publicationDate": "2012-02-27",
    "publicationYear": 2012,
    "resultDate": "2012-02-27",
    "resultDateLabel": "掲載解析の公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "FACT: an open-label randomized phase III study of fulvestrant and anastrozole in combination compared with anastrozole alone as first-line therapy for patients with receptor-positive postmenopausal breast cancer.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/22370325/",
        "kind": "原著・抄録確認"
      },
      {
        "title": "FACT ClinicalTrials.gov（登録照合）",
        "url": "https://clinicaltrials.gov/study/NCT00256698",
        "kind": "試験登録"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/22370325/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "negative",
    "reports": [],
    "lineLabel": "進行期一次療法／一次治療中変更",
    "publicationDateType": "reported_publication_date",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/22370325/",
      "checkedDate": "2026-10-06"
    },
    "regimenAgents": [
      "fulvestrant",
      "anastrozole"
    ],
    "primaryPublication": {
      "date": "2012-02-27",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/22370325/",
      "sourceTitle": "FACT: an open-label randomized phase III study of fulvestrant and anastrozole in combination compared with anastrozole alone as first-line therapy for patients with receptor-positive postmenopausal breast cancer.",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    }
  },
  {
    "id": "sofea",
    "name": "SoFEA",
    "phase": "III",
    "design": "無作為化3群。アナストロゾール／プラセボは盲検",
    "setting": "metastatic",
    "subtypes": [
      "HR+（HER2非限定）"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行または転移性乳癌",
    "lineBuckets": [
      "endocrine_pretreated"
    ],
    "population": "非ステロイド性AIの術後12か月以上または進行期一次6か月以上の投与中に再発・増悪した閉経後HR陽性723例。",
    "cardPopulation": "非ステロイド性AIの術後12か月以上または進行期一次6か月以上の投与中に再発・増悪した閉経後HR陽性723例。",
    "experimental": "フルベストラント＋アナストロゾール、またはフルベストラント＋プラセボ",
    "control": "エキセメスタン単剤。フルベストラント2群間も比較",
    "primaryEndpoint": "PFS",
    "result": "PFS 4.4、4.8、3.4か月。フルベストラントへのAI追加HR 1.00、P=0.98。フルベストラント対エキセメスタンHR 0.95、P=0.56。",
    "safety": "Grade 3–4有害事象は稀。主なものは関節痛、倦怠感、悪心・嘔吐。",
    "caveat": "フルベストラントは初回500 mg後250 mg維持の歴史的投与。AI継続併用の利益を認めず。",
    "agents": [
      "fulvestrant"
    ],
    "drugClasses": [
      "SERD"
    ],
    "regimenType": "combination",
    "priorCdk46Context": "CDK4/6阻害薬の標準導入前の試験。CDK4/6阻害薬後の有効性を示す比較ではない。",
    "esr1Context": "ESR1変異を登録条件としない。",
    "biomarkers": [
      "ESR1変異を登録条件としない。"
    ],
    "trial_registration": "NCT00253422 / NCT00944918",
    "publicationDate": "2013-07-29",
    "publicationYear": 2013,
    "resultDate": "2013-07-29",
    "resultDateLabel": "掲載解析の公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Fulvestrant plus anastrozole or placebo versus exemestane alone after progression on non-steroidal aromatase inhibitors in postmenopausal patients with hormone-receptor-positive locally advanced or metastatic breast cancer (SoFEA): a composite, multicentre, phase 3 randomised trial.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/23902874/",
        "kind": "原著・抄録確認"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/23902874/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "negative",
    "reports": [],
    "lineLabel": "内分泌療法既治療（対象条件参照）",
    "publicationDateType": "reported_publication_date",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/23902874/",
      "checkedDate": "2026-10-06"
    },
    "regimenAgents": [
      "fulvestrant",
      "anastrozole",
      "exemestane"
    ],
    "primaryPublication": {
      "date": "2013-07-29",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/23902874/",
      "sourceTitle": "Fulvestrant plus anastrozole or placebo versus exemestane alone after progression on non-steroidal aromatase inhibitors in postmenopausal patients with hormone-receptor-positive locally advanced or metastatic breast cancer (SoFEA): a composite, multicentre, phase 3 randomised trial.",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    }
  },
  {
    "id": "hera",
    "name": "HERA",
    "phase": "III",
    "design": "無作為化・非盲検・3群（1:1:1）",
    "setting": "early",
    "subtypes": [
      "HER2+"
    ],
    "stages": [],
    "timing": [
      "adjuvant"
    ],
    "lineBuckets": [],
    "population": "HER2陽性早期乳癌。手術、化学療法、必要な放射線療法を終了しLVEF≥55%。リンパ節陰性例は病理腫瘍径>1 cm。",
    "cardPopulation": "HER2陽性早期乳癌。手術、化学療法、必要な放射線療法を終了しLVEF≥55%。リンパ節陰性例は病理腫瘍径>1 cm。",
    "experimental": "化学療法終了後のトラスツズマブ1年、または2年",
    "control": "経過観察（無トラスツズマブ）",
    "primaryEndpoint": "DFS",
    "result": "11年中央値追跡：1年投与対観察のDFS HR 0.76（95% CI 0.68–0.86）、OS HR 0.74（0.64–0.86）。2年対1年のDFS HR 1.02（0.89–1.17）。",
    "caveat": "観察群の52%がトラスツズマブへクロスオーバー。2年対1年は366日ランドマーク解析。1年投与の有効性と、2年への延長で追加利益を認めなかった点を区別。",
    "trial_registration": "NCT00045032",
    "publicationDate": "2017-02-17",
    "publicationYear": 2017,
    "publicationDateType": "pubmed_electronic_publication_date",
    "resultDate": "2017-02-17",
    "resultDateLabel": "掲載解析の原著公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "11 years' follow-up of trastuzumab after adjuvant chemotherapy in HER2-positive early breast cancer: final analysis of the HERceptin Adjuvant (HERA) trial.",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5465633/",
        "kind": "原著・本文確認"
      },
      {
        "title": "11 years' follow-up of trastuzumab after adjuvant chemotherapy in HER2-positive early breast cancer: final analysis of the HERceptin Adjuvant (HERA) trial.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/28215665/",
        "kind": "原著・抄録確認"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "原著本文の対象・方法・掲載結果の該当箇所を確認。",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5465633/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [
      {
        "trialId": "hera",
        "guidelineId": "jbcs-2022-web-2024",
        "organization": "JBCS",
        "section": "薬物療法 FRQ7c",
        "title": "高齢者を含むHER2陽性早期乳癌の術後薬物療法",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/frq7/",
        "citationEvidence": "参考文献2にHERAの11年追跡（2017）を掲載。高齢者部分集団を扱う章での引用。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "accessMethod": "学会公式WEB版の該当章・参考文献",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/28215665/"
        ],
        "interpretationNote": "後年の更新報告まで引用したという意味ではありません。"
      }
    ],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "agents": [],
    "regimenAgents": [
      "trastuzumab"
    ],
    "drugClasses": [
      "HER2 antibody"
    ],
    "reports": [],
    "stageLabel": "初期治療終了後の早期乳癌。病期番号は一律に推定せず、N0例の腫瘍径条件を表示。",
    "safety": "二次心イベント：2年投与7.3%、1年投与4.4%、観察0.9%。",
    "outcomeStatus": "positive",
    "publicationDateNote": "PubMed/PMC書誌の電子公開日2017-02-17。冊子2017-03-25。",
    "primaryPublication": {
      "date": "2005-10-20",
      "precision": "day",
      "sourceUrl": "https://www.nejm.org/doi/10.1056/NEJMoa052306",
      "note": "初回DFS主要原著。2017年11年追跡ではない。"
    }
  },
  {
    "id": "nsabp-b31-n9831",
    "name": "NSABP B-31 / NCCTG N9831（統合解析）",
    "phase": "III",
    "design": "独立した無作為化2試験の事前計画統合解析",
    "setting": "early",
    "subtypes": [
      "HER2+"
    ],
    "stages": [],
    "timing": [
      "adjuvant"
    ],
    "lineBuckets": [],
    "population": "手術可能HER2陽性浸潤性乳癌4,046例。B-31はリンパ節陽性。N9831はリンパ節陽性または高リスクN0（腫瘍径>2 cm、またはER/PgR陰性で>1 cm）。",
    "cardPopulation": "手術可能HER2陽性浸潤性乳癌4,046例。B-31はリンパ節陽性。N9831はリンパ節陽性または高リスクN0（腫瘍径>2 cm、またはER/PgR陰性で>1 cm）。",
    "experimental": "AC→パクリタキセル＋トラスツズマブ同時併用開始、抗HER2療法は計1年",
    "control": "AC→パクリタキセル",
    "primaryEndpoint": "DFS；掲載解析は事前計画の最終OS解析",
    "result": "中央値8.4年：10年OS 84.0%対75.2%、HR 0.63（95% CI 0.54–0.73）；10年DFS 73.7%対62.2%、HR 0.60（0.53–0.68）。ともにP<0.001。",
    "caveat": "2試験の共通する同時併用群対無トラスツズマブ群の統合。N9831の逐次投与群はこの比較に含まれない。全ての小型N0乳癌への外挿は不可。",
    "trial_registration": "NCT00004067 / NCT00005970",
    "publicationDate": "2014-10-20",
    "publicationYear": 2014,
    "publicationDateType": "first_online_publication_date",
    "resultDate": "2014-10-20",
    "resultDateLabel": "掲載解析の原著公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Trastuzumab plus adjuvant chemotherapy for human epidermal growth factor receptor 2-positive breast cancer: planned joint analysis of overall survival from NSABP B-31 and NCCTG N9831.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/25332249/",
        "kind": "原著・抄録確認"
      },
      {
        "title": "NSABP B-31登録（適格条件）",
        "url": "https://clinicaltrials.gov/study/NCT00004067",
        "kind": "試験登録"
      },
      {
        "title": "NCCTG N9831登録（適格条件）",
        "url": "https://clinicaltrials.gov/study/NCT00005970",
        "kind": "試験登録"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。適格条件の補足は明示した試験登録を参照。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/25332249/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [
      {
        "trialId": "nsabp-b31-n9831",
        "guidelineId": "jbcs-2022-web-2024",
        "organization": "JBCS",
        "section": "薬物療法 FRQ7c",
        "title": "高齢者を含むHER2陽性早期乳癌の術後薬物療法",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/frq7/",
        "citationEvidence": "参考文献4にNSABP B-31/NCCTG N9831の統合OS解析（2014）を掲載。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "accessMethod": "学会公式WEB版の該当章・参考文献",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/25332249/"
        ],
        "interpretationNote": "後年の更新報告まで引用したという意味ではありません。"
      }
    ],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "agents": [],
    "regimenAgents": [
      "doxorubicin",
      "cyclophosphamide",
      "paclitaxel",
      "trastuzumab"
    ],
    "drugClasses": [
      "chemotherapy",
      "HER2 antibody"
    ],
    "reports": [],
    "stageLabel": "手術後のHER2陽性、リンパ節陽性／高リスクN0。試験ごとの適格TNMに従う。",
    "outcomeStatus": "positive",
    "primaryPublication": {
      "date": "2005-10-20",
      "precision": "day",
      "sourceUrl": "https://www.nejm.org/doi/10.1056/NEJMoa052122",
      "note": "B-31/N9831統合DFS初回主要原著。2014年OS更新ではない。"
    }
  },
  {
    "id": "train-2",
    "name": "TRAIN-2",
    "phase": "III",
    "design": "無作為化・非盲検（1:1）",
    "setting": "early",
    "subtypes": [
      "HER2+"
    ],
    "stages": [
      "II",
      "III"
    ],
    "timing": [
      "neoadjuvant"
    ],
    "lineBuckets": [],
    "population": "HER2陽性、臨床病期II–IIIの乳癌438例。両群でトラスツズマブ＋ペルツズマブを併用。",
    "cardPopulation": "HER2陽性、臨床病期II–IIIの乳癌438例。両群でトラスツズマブ＋ペルツズマブを併用。",
    "experimental": "パクリタキセル＋カルボプラチン9サイクル＋HP（アントラサイクリンなし）",
    "control": "FEC 3サイクル→パクリタキセル＋カルボプラチン6サイクル＋HP",
    "primaryEndpoint": "pCR；掲載報告は副次評価項目EFS/OSの追跡解析",
    "result": "3年EFS 93.6%対92.7%、HR 0.90（95% CI 0.50–1.63、非アントラサイクリン対アントラサイクリン）。3年OS 98.2%対97.7%。",
    "caveat": "EFS/OSは副次解析であり、非有意差を非劣性の証明と扱わない。通常のTCHPと投与スケジュールが同一ではない。",
    "trial_registration": "NCT01996267",
    "publicationDate": "2021-05-20",
    "publicationYear": 2021,
    "publicationDateType": "first_online_publication_date",
    "resultDate": "2021-05-20",
    "resultDateLabel": "掲載解析の原著公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Three-Year Follow-up of Neoadjuvant Chemotherapy With or Without Anthracyclines in the Presence of Dual ERBB2 Blockade in Patients With ERBB2-Positive Breast Cancer: A Secondary Analysis of the TRAIN-2 Randomized, Phase 3 Trial.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/34014249/",
        "kind": "原著・抄録確認"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。適格条件の補足は明示した試験登録を参照。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/34014249/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "agents": [],
    "regimenAgents": [
      "fluorouracil",
      "epirubicin",
      "cyclophosphamide",
      "paclitaxel",
      "carboplatin",
      "trastuzumab",
      "pertuzumab"
    ],
    "drugClasses": [
      "chemotherapy",
      "HER2 antibody"
    ],
    "reports": [],
    "stageLabel": "術前登録時の臨床病期II–III。",
    "safety": "LVEFが≥10ポイント低下し<50%となる事象：非アントラサイクリン3.2%、アントラサイクリン7.7%。急性白血病2例はアントラサイクリン群。",
    "outcomeStatus": "neutral",
    "primaryPublication": {
      "date": "2018-11-06",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/30413379/",
      "note": "初回pCR主要原著。2016年安全性報告、2021年3年追跡とは区別。"
    }
  },
  {
    "id": "abcsg16-salsa",
    "name": "ABCSG-16 / SALSA",
    "phase": "III",
    "design": "無作為化・非盲検（1:1）",
    "setting": "early",
    "subtypes": [
      "HR+/HER2-",
      "HER2+"
    ],
    "stages": [],
    "timing": [
      "adjuvant"
    ],
    "lineBuckets": [],
    "population": "閉経後HR陽性、初回診断時T1–T3、N0またはN+、M0。術後内分泌療法を約5年受け、無再発で延長療法に登録。",
    "cardPopulation": "閉経後HR陽性、初回診断時T1–T3、N0またはN+、M0。術後内分泌療法を約5年受け、無再発で延長療法に登録。",
    "experimental": "アナストロゾール追加5年（内分泌療法計10年）",
    "control": "アナストロゾール追加2年（計7年）",
    "primaryEndpoint": "DFS（無作為化2年後からのランドマーク主要解析）",
    "result": "主要解析3,208例：再発／死亡イベントは両群335件、HR 0.99（95% CI 0.85–1.15）、P=0.90。延長5年で追加2年を超えるDFS利益なし。",
    "caveat": "5年対10年ではなく計7年対10年。無作為化2年時点で無病・追跡中の集団による主要解析で、全登録3,484例と区別。",
    "trial_registration": "NCT00295620",
    "publicationDate": "2021-07-29",
    "publicationYear": 2021,
    "publicationDateType": "reported_publication_date",
    "resultDate": "2021-07-29",
    "resultDateLabel": "掲載解析の原著公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Duration of Adjuvant Aromatase-Inhibitor Therapy in Postmenopausal Breast Cancer.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/34320285/",
        "kind": "原著・抄録確認"
      },
      {
        "title": "SALSA登録（TNMと治療期間）",
        "url": "https://clinicaltrials.gov/study/NCT00295620",
        "kind": "試験登録"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。適格条件の補足は明示した試験登録を参照。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/34320285/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [
      {
        "trialId": "abcsg16-salsa",
        "guidelineId": "jbcs-2022-web-2024",
        "organization": "JBCS",
        "section": "薬物療法 CQ4",
        "title": "術後内分泌療法の延長",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq4/",
        "citationEvidence": "参考文献16にABCSG-16/SALSA（Gnant et al., 2021）を掲載。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "accessMethod": "学会公式WEB版の該当章・参考文献",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/34320285/"
        ],
        "interpretationNote": "後年の更新報告まで引用したという意味ではありません。"
      },
      {
        "trialId": "abcsg16-salsa",
        "guidelineId": "asco-hr-positive-early-living-2026-1-0",
        "organization": "ASCO",
        "section": "参考文献42",
        "title": "HR陽性/HER2陰性早期乳癌 ASCO Living Guideline 2026.1.0",
        "url": "https://ascopubs.org/doi/pdfdirect/10.1200/JCO-26-02034",
        "citationEvidence": "ABCSG-16/SALSA原著（Gnant et al., 2021）を引用。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "accessMethod": "公式受理原稿の公開検索抜粋（試験表・参照文献の該当部分のみ）",
        "interpretationNote": "本文全体や最新推奨の全面照合ではなく、記載箇所の引用確認。"
      }
    ],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "agents": [],
    "regimenAgents": [
      "anastrozole"
    ],
    "drugClasses": [
      "aromatase inhibitor"
    ],
    "reports": [],
    "stageLabel": "初回診断時T1–T3 N0/N+ M0。病期番号を一律に推定しない。",
    "safety": "臨床的骨折は追加5年群で多い：HR 1.35（95% CI 1.00–1.84）。",
    "outcomeStatus": "negative",
    "primaryPublication": {
      "date": "2021-07-28",
      "precision": "day",
      "sourceUrl": "https://www.nejm.org/doi/10.1056/NEJMoa2104162",
      "note": "初回DFS主要原著の出版社オンライン公開日。冊子は2021-07-29。"
    }
  },
  {
    "id": "pattern",
    "name": "PATTERN",
    "phase": "III",
    "design": "無作為化・非盲検（1:1）",
    "setting": "early",
    "subtypes": [
      "TNBC"
    ],
    "stages": [],
    "timing": [
      "adjuvant"
    ],
    "lineBuckets": [],
    "population": "中国9施設、18–70歳、手術済みTNBC。リンパ節陽性またはN0かつ腫瘍径>10 mm、647例。術前抗癌治療、局所進行・転移例は除外。",
    "cardPopulation": "中国9施設、18–70歳、手術済みTNBC。リンパ節陽性またはN0かつ腫瘍径>10 mm、647例。術前抗癌治療、局所進行・転移例は除外。",
    "experimental": "パクリタキセル＋カルボプラチン6サイクル",
    "control": "CEF 3サイクル→ドセタキセル3サイクル",
    "primaryEndpoint": "DFS",
    "result": "中央値62か月：5年DFS 86.5%対80.3%、HR 0.65（95% CI 0.44–0.96）、P=0.03。OS HR 0.71（0.42–1.22）、P=0.22。",
    "caveat": "中国の手術先行集団でのレジメン比較。術前治療や免疫療法併用後のプラチナ追加を検証していない。BRCA/HRRサブグループは探索的。",
    "trial_registration": "NCT01216111",
    "publicationDate": "2020-08-13",
    "publicationYear": 2020,
    "publicationDateType": "first_online_publication_date",
    "resultDate": "2020-08-13",
    "resultDateLabel": "掲載解析の原著公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Effect of Adjuvant Paclitaxel and Carboplatin on Survival in Women With Triple-Negative Breast Cancer: A Phase 3 Randomized Clinical Trial.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/32789480/",
        "kind": "原著・抄録確認"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。適格条件の補足は明示した試験登録を参照。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/32789480/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "agents": [],
    "regimenAgents": [
      "paclitaxel",
      "carboplatin",
      "cyclophosphamide",
      "epirubicin",
      "fluorouracil",
      "docetaxel"
    ],
    "drugClasses": [
      "chemotherapy"
    ],
    "reports": [],
    "stageLabel": "手術可能・N+またはN0>10 mm。局所進行を除外しており、一律I–IIIと表示しない。",
    "outcomeStatus": "positive",
    "primaryPublication": {
      "date": "2020-08-13",
      "precision": "day",
      "sourceUrl": "https://jamanetwork.com/journals/jamaoncology/fullarticle/2769305",
      "note": "初回DFS主要原著のオンライン公開日。"
    }
  },
  {
    "id": "nala",
    "name": "NALA",
    "phase": "III",
    "design": "無作為化・非盲検（1:1）",
    "setting": "metastatic",
    "subtypes": [
      "HER2+"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行・再発または転移性乳癌（個別適格条件参照）",
    "lineBuckets": [
      "her2_pretreated"
    ],
    "lineLabel": "進行期抗HER2レジメン2種類以上の治療後",
    "population": "HER2陽性転移性乳癌621例。進行期で抗HER2レジメン2種類以上の治療歴。安定・無症候性CNS転移を許容。",
    "cardPopulation": "HER2陽性転移性乳癌621例。進行期で抗HER2レジメン2種類以上の治療歴。安定・無症候性CNS転移を許容。",
    "experimental": "ネラチニブ＋カペシタビン",
    "control": "ラパチニブ＋カペシタビン",
    "primaryEndpoint": "中央判定PFSとOS（α分割、いずれか達成で陽性）",
    "result": "PFS HR 0.76（95% CI 0.63–0.93、P=0.0059）。OS HR 0.88（95% CI 0.72–1.07、P=0.2098）で有意差なし。",
    "caveat": "前治療の数は進行期抗HER2レジメン数。T-DXd後の成績ではない。CNS介入までの時間は副次評価であり、活動性脳転移に対する奏効比較とは異なる。",
    "trial_registration": "NCT01808573",
    "publicationDate": "2020-07-17",
    "publicationYear": 2020,
    "publicationDateType": "online_first",
    "resultDate": "2020-07-17",
    "resultDateLabel": "掲載解析の原著公開日／月（データカットオフとは別）",
    "sources": [
      {
        "title": "Neratinib Plus Capecitabine Versus Lapatinib Plus Capecitabine in HER2-Positive Metastatic Breast Cancer Previously Treated With ≥2 HER2-Directed Regimens: Phase III NALA Trial",
        "url": "https://pubmed.ncbi.nlm.nih.gov/32678716/",
        "publicationDate": "2020-07-17",
        "kind": "原著・抄録確認",
        "evidenceStatus": "abstract_only",
        "checkedDate": "2026-10-06"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/32678716/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [
      {
        "trialId": "nala",
        "guidelineId": "jbcs-2022-web-2024",
        "organization": "JBCS",
        "section": "薬物療法 FRQ12",
        "title": "既治療HER2陽性転移・再発乳癌",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/frq12/",
        "citationEvidence": "参考文献13にNALA（Saura et al., 2020）を掲載。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "accessMethod": "学会公式WEB版の該当章・参考文献",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/32678716/"
        ],
        "interpretationNote": "後年の更新報告まで引用したという意味ではありません。"
      }
    ],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "mixed",
    "agents": [],
    "regimenAgents": [
      "neratinib",
      "lapatinib",
      "capecitabine"
    ],
    "drugClasses": [
      "HER2 TKI",
      "chemotherapy"
    ],
    "reports": [
      {
        "id": "nala-cns-intervention-2020",
        "label": "CNS介入（副次評価）",
        "publicationDate": "2020-07-17",
        "publicationDateType": "online_first",
        "resultDate": "2020-07-17",
        "resultDateLabel": "原著公開日／月（データカットオフとは別）",
        "result": "CNS疾患への介入累積発生率22.8%対29.2%、P=0.043。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/32678716/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/32678716/",
          "checkedDate": "2026-10-06"
        },
        "checkedDate": "2026-10-06"
      }
    ],
    "safety": "全Grade下痢83%対66%、悪心53%対42%。",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/32678716/",
      "checkedDate": "2026-10-06"
    },
    "primaryPublication": {
      "date": "2020-07-17",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/32678716/",
      "sourceTitle": "Neratinib Plus Capecitabine Versus Lapatinib Plus Capecitabine in HER2-Positive Metastatic Breast Cancer Previously Treated With ≥2 HER2-Directed Regimens: Phase III NALA Trial",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    }
  },
  {
    "id": "impassion130",
    "name": "IMpassion130",
    "phase": "III",
    "design": "無作為化・二重盲検・プラセボ対照（1:1）",
    "setting": "metastatic",
    "subtypes": [
      "TNBC"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行・再発または転移性乳癌（個別適格条件参照）",
    "lineBuckets": [
      "firstline"
    ],
    "lineLabel": "進行期一次療法",
    "population": "進行期未治療の切除不能局所進行／転移性TNBC902例。登録はPD-L1非限定。PD-L1陽性解析はSP142の免疫細胞IC ≥1%。",
    "cardPopulation": "進行期未治療の切除不能局所進行／転移性TNBC902例。登録はPD-L1非限定。PD-L1陽性解析はSP142の免疫細胞IC ≥1%。",
    "experimental": "アテゾリズマブ＋nab-パクリタキセル",
    "control": "プラセボ＋nab-パクリタキセル",
    "primaryEndpoint": "PFS（ITT・PD-L1陽性）とOS（ITT→陽性群の階層検定）",
    "result": "最終OS：ITT 21.0対18.7か月、HR 0.87（95% CI 0.75–1.02、P=0.077）。PD-L1陽性群は探索的に25.4対17.9か月、HR 0.67（95% CI 0.53–0.86）。",
    "caveat": "ITTのOS非有意によりPD-L1陽性群OSの正式検定は実施不可。SP142 ICはKEYNOTE-355のCPSと異なる。nab-パクリタキセルを通常パクリタキセルへ置換した有効性は示さない。",
    "trial_registration": "NCT02425891",
    "publicationDate": "2021-07-01",
    "publicationYear": 2021,
    "publicationDateType": "online_first",
    "resultDate": "2021-07-01",
    "resultDateLabel": "掲載解析の原著公開日／月（データカットオフとは別）",
    "sources": [
      {
        "title": "First-line atezolizumab plus nab-paclitaxel for unresectable, locally advanced, or metastatic triple-negative breast cancer: IMpassion130 final overall survival analysis",
        "url": "https://pubmed.ncbi.nlm.nih.gov/34272041/",
        "publicationDate": "2021-07-01",
        "kind": "原著・抄録確認",
        "evidenceStatus": "abstract_only",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "Atezolizumab and Nab-Paclitaxel in Advanced Triple-Negative Breast Cancer",
        "url": "https://pubmed.ncbi.nlm.nih.gov/30345906/",
        "publicationDate": "2018-10-20",
        "kind": "原著・抄録確認",
        "evidenceStatus": "abstract_only",
        "checkedDate": "2026-10-06"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/34272041/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [
      {
        "trialId": "impassion130",
        "guidelineId": "jbcs-2022-web-2024",
        "organization": "JBCS",
        "section": "薬物療法 CQ31",
        "title": "転移・再発乳癌のPD-1/PD-L1阻害薬",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq31/",
        "citationEvidence": "参考文献3に主解析、5にIMpassion130最終OS解析を掲載。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "accessMethod": "学会公式WEB版の該当章・参考文献",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/30345906/",
          "https://pubmed.ncbi.nlm.nih.gov/34272041/"
        ],
        "interpretationNote": "後年の更新報告まで引用したという意味ではありません。"
      }
    ],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "mixed",
    "agents": [],
    "regimenAgents": [
      "atezolizumab",
      "nab-paclitaxel"
    ],
    "drugClasses": [
      "immune checkpoint inhibitor",
      "chemotherapy"
    ],
    "reports": [
      {
        "id": "impassion130-primary-pfs-2018",
        "label": "主要PFS初回報告",
        "publicationDate": "2018-10-20",
        "publicationDateType": "online_first",
        "resultDate": "2018-10-20",
        "resultDateLabel": "原著公開日／月（データカットオフとは別）",
        "result": "PFS：ITT 7.2対5.5か月、HR 0.80（95% CI 0.69–0.92、P=0.002）。PD-L1陽性群7.5対5.0か月、HR 0.62（95% CI 0.49–0.78、P<0.001）。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/30345906/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/30345906/",
          "checkedDate": "2026-10-06"
        },
        "checkedDate": "2026-10-06"
      }
    ],
    "safety": "免疫関連の特定注目AE 58.7%対41.6%。",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/34272041/",
      "checkedDate": "2026-10-06"
    },
    "biomarkers": [
      "PD-L1 IC ≥1%（SP142）"
    ],
    "primaryPublication": {
      "date": "2018-10-20",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/30345906/",
      "sourceTitle": "主要PFS初回報告",
      "sourceType": "original_paper",
      "note": "同一試験の初回主要結果原著（主要PFS初回報告）を基準に採用。主カードの追跡更新日・後続コホート報告日ではない。既存の検証済み書誌を再利用。"
    }
  },
  {
    "id": "impassion131",
    "name": "IMpassion131",
    "phase": "III",
    "design": "無作為化・二重盲検・プラセボ対照（2:1）",
    "setting": "metastatic",
    "subtypes": [
      "TNBC"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行・再発または転移性乳癌（個別適格条件参照）",
    "lineBuckets": [
      "firstline"
    ],
    "lineLabel": "進行期一次療法",
    "population": "進行期一次療法のTNBC651例。周術期化学療法から12か月以上を許容。45%はSP142 IC ≥1%のPD-L1陽性。",
    "cardPopulation": "進行期一次療法のTNBC651例。周術期化学療法から12か月以上を許容。45%はSP142 IC ≥1%のPD-L1陽性。",
    "experimental": "アテゾリズマブ＋パクリタキセル",
    "control": "プラセボ＋パクリタキセル",
    "primaryEndpoint": "治験責任医師評価PFS（PD-L1陽性群→ITTの階層検定）",
    "result": "PD-L1陽性群PFS 6.0対5.7か月、HR 0.82（95% CI 0.60–1.12、P=0.20）。同群最終OS 22.1対28.3か月、HR 1.11（95% CI 0.76–1.64）。",
    "caveat": "主要PFS未達。IMpassion130と薬剤バックボーンが異なり、陰性試験として別カードで保持する。",
    "trial_registration": "NCT03125902",
    "publicationDate": "2021-07-01",
    "publicationYear": 2021,
    "publicationDateType": "online_first",
    "resultDate": "2021-07-01",
    "resultDateLabel": "掲載解析の原著公開日／月（データカットオフとは別）",
    "sources": [
      {
        "title": "Primary results from IMpassion131, a double-blind, placebo-controlled, randomised phase III trial of first-line paclitaxel with or without atezolizumab for unresectable locally advanced/metastatic triple-negative breast cancer",
        "url": "https://pubmed.ncbi.nlm.nih.gov/34219000/",
        "publicationDate": "2021-07-01",
        "kind": "原著・抄録確認",
        "evidenceStatus": "abstract_only",
        "checkedDate": "2026-10-06"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/34219000/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [
      {
        "trialId": "impassion131",
        "guidelineId": "jbcs-2022-web-2024",
        "organization": "JBCS",
        "section": "薬物療法 CQ31",
        "title": "転移・再発乳癌のPD-1/PD-L1阻害薬",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq31/",
        "citationEvidence": "参考文献7にIMpassion131主解析（2021）を掲載。陰性結果として本文に記載。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "accessMethod": "学会公式WEB版の該当章・参考文献",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/34219000/"
        ],
        "interpretationNote": "後年の更新報告まで引用したという意味ではありません。"
      }
    ],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "negative",
    "agents": [],
    "regimenAgents": [
      "atezolizumab",
      "paclitaxel"
    ],
    "drugClasses": [
      "immune checkpoint inhibitor",
      "chemotherapy"
    ],
    "reports": [],
    "safety": "原著抄録では各薬剤の既知の安全性と一貫。",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/34219000/",
      "checkedDate": "2026-10-06"
    },
    "biomarkers": [
      "PD-L1 IC ≥1%（SP142）"
    ],
    "primaryPublication": {
      "date": "2021-07-01",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/34219000/",
      "sourceTitle": "Primary results from IMpassion131, a double-blind, placebo-controlled, randomised phase III trial of first-line paclitaxel with or without atezolizumab for unresectable locally advanced/metastatic triple-negative breast cancer",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    }
  },
  {
    "id": "tnt",
    "name": "TNT",
    "phase": "III",
    "design": "無作為化・非盲検（1:1）",
    "setting": "metastatic",
    "subtypes": [
      "TNBC",
      "サブタイプ非限定"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行・再発または転移性乳癌（個別適格条件参照）",
    "lineBuckets": [],
    "lineLabel": "進行期の化学療法選択（固定ライン番号に変換しない）",
    "population": "進行TNBC主体の376例。既知の生殖細胞系列BRCA1/2変異例はER/PgR/HER2状態を問わず適格。両比較薬を投与可能な集団。",
    "cardPopulation": "進行TNBC主体の376例。既知の生殖細胞系列BRCA1/2変異例はER/PgR/HER2状態を問わず適格。両比較薬を投与可能な集団。",
    "experimental": "カルボプラチン",
    "control": "ドセタキセル",
    "primaryEndpoint": "ORR（事前規定バイオマーカー×治療交互作用解析あり）",
    "result": "全体ORR 31.4%対34.0%、P=0.66。gBRCA1/2変異群ORR 68%対33%、治療交互作用P=0.01。",
    "caveat": "全TNBCへのプラチナ優越性を示さない。BRCA1メチル化やMyriad HRD高値には同様の予測的効果を確認せず。BRCA変異群とHRD検査を同一視しない。",
    "trial_registration": "NCT00532727",
    "publicationDate": "2018-04-30",
    "publicationYear": 2018,
    "publicationDateType": "online_first",
    "resultDate": "2018-04-30",
    "resultDateLabel": "掲載解析の原著公開日／月（データカットオフとは別）",
    "sources": [
      {
        "title": "Carboplatin in BRCA1/2-mutated and triple-negative breast cancer BRCAness subgroups: the TNT Trial",
        "url": "https://unclineberger.org/peroulab/wp-content/uploads/sites/1008/2018/05/TNT-carbo-tax-TNBC-trial-Tutt-NATMED-2018.pdf",
        "publicationDate": "2018-04-30",
        "kind": "原著・本文確認",
        "evidenceStatus": "full_text_checked",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "TNT bibliographic record",
        "url": "https://pubmed.ncbi.nlm.nih.gov/29713086/",
        "publicationDate": "2018-04-30",
        "kind": "原著・抄録確認",
        "evidenceStatus": "abstract_only",
        "checkedDate": "2026-10-06"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "原著本文の対象条件・表示結果の該当箇所を確認。",
      "sourceUrl": "https://unclineberger.org/peroulab/wp-content/uploads/sites/1008/2018/05/TNT-carbo-tax-TNBC-trial-Tutt-NATMED-2018.pdf",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [
      {
        "trialId": "tnt",
        "guidelineId": "jbcs-2022-web-2024",
        "organization": "JBCS",
        "section": "薬物療法 FRQ13",
        "title": "BRCA病的バリアントと転移・再発乳癌のプラチナ製剤",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/frq13/",
        "citationEvidence": "参考文献5にTNT原著（2018）を掲載。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "accessMethod": "学会公式WEB版の該当章・参考文献",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/29713086/"
        ],
        "interpretationNote": "後年の更新報告まで引用したという意味ではありません。"
      }
    ],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "mixed",
    "agents": [],
    "regimenAgents": [
      "carboplatin",
      "docetaxel"
    ],
    "drugClasses": [
      "chemotherapy"
    ],
    "reports": [],
    "biomarkers": [
      "gBRCA1/2変異（事前規定サブグループ）"
    ],
    "primaryPublication": {
      "date": "2018-04-30",
      "precision": "day",
      "sourceUrl": "https://unclineberger.org/peroulab/wp-content/uploads/sites/1008/2018/05/TNT-carbo-tax-TNBC-trial-Tutt-NATMED-2018.pdf",
      "sourceTitle": "Carboplatin in BRCA1/2-mutated and triple-negative breast cancer BRCAness subgroups: the TNT Trial",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    }
  },
  {
    "id": "embrace",
    "name": "EMBRACE",
    "phase": "III",
    "design": "無作為化・非盲検（2:1）",
    "setting": "metastatic",
    "subtypes": [
      "サブタイプ非限定"
    ],
    "stages": [],
    "timing": [],
    "stageLabel": "局所進行・再発または転移性乳癌（個別適格条件参照）",
    "lineBuckets": [
      "chemo_pretreated"
    ],
    "lineLabel": "進行期化学療法2レジメン以上を含む既治療",
    "population": "局所再発／転移性乳癌女性762例。化学療法2–5レジメン歴（進行期で2以上）、禁忌でない限りアントラサイクリン・タキサン既治療。サブタイプ非限定。",
    "cardPopulation": "局所再発／転移性乳癌女性762例。化学療法2–5レジメン歴（進行期で2以上）、禁忌でない限りアントラサイクリン・タキサン既治療。サブタイプ非限定。",
    "experimental": "エリブリン",
    "control": "医師選択治療",
    "primaryEndpoint": "OS（ITT）",
    "result": "OS 13.1対10.6か月、HR 0.81（95% CI 0.66–0.99、P=0.041）。",
    "caveat": "HR/HER2非選択の歴史的既治療集団。TNBC限定・HER2陰性限定の試験と誤分類しない。現在のADC／CDK4/6阻害薬後を直接検証していない。",
    "trial_registration": "NCT00388726",
    "publicationDate": "2011-03-02",
    "publicationYear": 2011,
    "publicationDateType": "online_first",
    "resultDate": "2011-03-02",
    "resultDateLabel": "掲載解析の原著公開日／月（データカットオフとは別）",
    "sources": [
      {
        "title": "Eribulin monotherapy versus treatment of physician’s choice in patients with metastatic breast cancer (EMBRACE): a phase 3 open-label randomised study",
        "url": "https://pubmed.ncbi.nlm.nih.gov/21376385/",
        "publicationDate": "2011-03-02",
        "kind": "原著・抄録確認",
        "evidenceStatus": "abstract_only",
        "checkedDate": "2026-10-06"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/21376385/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [
      {
        "trialId": "embrace",
        "guidelineId": "jbcs-2022-web-2024",
        "organization": "JBCS",
        "section": "薬物療法 CQ25",
        "title": "転移・再発乳癌のエリブリン",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq25/",
        "citationEvidence": "参考文献2にEMBRACE（2011）を掲載。本文は後治療の参考試験として区別。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "accessMethod": "学会公式WEB版の該当章・参考文献",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/21376385/"
        ],
        "interpretationNote": "後年の更新報告まで引用したという意味ではありません。"
      }
    ],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "outcomeStatus": "positive",
    "agents": [],
    "regimenAgents": [
      "eribulin",
      "treatment of physician choice"
    ],
    "drugClasses": [
      "chemotherapy"
    ],
    "reports": [],
    "safety": "全Grade疲労／無力症54%対40%、好中球減少52%対30%。エリブリン群の末梢神経障害による中止5%。",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著全文は未確認。一次論文の抄録で確認できる範囲を記載。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/21376385/",
      "checkedDate": "2026-10-06"
    },
    "primaryPublication": {
      "date": "2011-03-02",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/21376385/",
      "sourceTitle": "Eribulin monotherapy versus treatment of physician’s choice in patients with metastatic breast cancer (EMBRACE): a phase 3 open-label randomised study",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    }
  },
  {
    "id": "us-oncology-9735",
    "name": "US Oncology 9735",
    "phase": "III",
    "setting": "early",
    "stages": [
      "I",
      "II",
      "III"
    ],
    "timing": [
      "adjuvant"
    ],
    "lineBuckets": [],
    "trial_registration": "",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "guidelineReferences": [
      {
        "trialId": "us-oncology-9735",
        "guidelineId": "jbcs-2022-web-2024",
        "organization": "JBCS",
        "section": "薬物療法 CQ8",
        "title": "早期乳癌のTC療法",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq8/",
        "citationEvidence": "参考文献2に主解析、3にUS Oncology 9735の7年追跡を掲載。",
        "relationship": "explicit_citation",
        "checkedDate": "2026-10-06",
        "accessMethod": "学会公式WEB版の該当章・参考文献",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/17135639/",
          "https://pubmed.ncbi.nlm.nih.gov/19204201/"
        ],
        "interpretationNote": "後年の更新報告まで引用したという意味ではありません。"
      }
    ],
    "agents": [],
    "regimenAgents": [
      "docetaxel",
      "cyclophosphamide",
      "doxorubicin"
    ],
    "drugClasses": [],
    "reports": [
      {
        "id": "us-oncology-9735-primary-2006",
        "label": "2006年・初回DFS解析",
        "publicationDate": "2006-12-01",
        "result": "追跡中央値5.5年。5年DFS 86%対80%（TC対AC、HR 0.67、95% CI 0.50–0.94、P=0.015）。OS 90%対87%で、この時点のOS差は有意でない（P=0.13）。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/17135639/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "一次論文の抄録で対象・比較・掲載結果を確認。原著本文と付録の全文は未確認。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/17135639/",
          "checkedDate": "2026-10-06"
        }
      }
    ],
    "japanApproval": "未評価",
    "design": "第III相・無作為化・2群比較（TC4対AC4、各3週ごと）",
    "subtypes": [
      "サブタイプ非限定"
    ],
    "subtypeScope": "HR・HER2による現代のサブタイプに登録を限定していない。各サブタイプ別の利益を確立したという意味ではない。",
    "stageLabel": "2006年抄録および2009年原著本文で手術可能な病期I–IIIと明記。原発巣完全切除後。",
    "population": "原発巣を完全切除した病期I–IIIの手術可能浸潤性乳癌の女性1,016例。術前化学療法は不可。HR陽性例では化学療法後にタモキシフェン。HER2陰性に限定した試験ではない。",
    "experimental": "ドセタキセル＋シクロホスファミド（TC）4サイクル、3週ごと",
    "control": "ドキソルビシン＋シクロホスファミド（AC）4サイクル、3週ごと",
    "primaryEndpoint": "DFS（初回試験の主要評価項目）",
    "result": "2009年・追跡中央値7年：DFS 81%対75%（TC対AC、HR 0.74、95% CI 0.56–0.98、P=0.033）、OS 87%対82%（HR 0.69、95% CI 0.50–0.97、P=0.032）。",
    "resultDate": "2009年7年追跡報告",
    "publicationDate": "2009-02-09",
    "publicationDateType": "online_first",
    "publicationYear": 2009,
    "caveat": "TC4対AC4の比較であり、TC6対アントラサイクリン＋タキサン療法の比較ではない。HR/HER2との交互作用が有意でないことは、現代の各サブタイプで同等の利益が証明されたことを意味しない。",
    "safety": "7年報告：高齢女性ではTCで発熱性好中球減少症、ACで貧血がより多かった。",
    "safetySourceUrl": "https://pubmed.ncbi.nlm.nih.gov/19204201/",
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "2009年原著のEligibility、Study design、DFS/OS結果、Toxicityを論文PDFで確認。2006年は原著抄録を確認。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/19204201/",
      "checkedDate": "2026-10-06",
      "verificationSourceUrl": "https://www.researchgate.net/profile/Michael-Savin-2/publication/23994622_Docetaxel_With_Cyclophosphamide_Is_Associated_With_an_Overall_Survival_Benefit_Compared_With_Doxorubicin_and_Cyclophosphamide_7-Year_Follow-Up_of_US_Oncology_Research_Trial_9735/links/595cfe27a6fdcc8623299e9f/Docetaxel-With-Cyclophosphamide-Is-Associated-With-an-Overall-Survival-Benefit-Compared-With-Doxorubicin-and-Cyclophosphamide-7-Year-Follow-Up-of-US-Oncology-Research-Trial-9735.pdf"
    },
    "sources": [
      {
        "title": "Jones et al. JCO 2009：US Oncology 9735、7年DFS・OS",
        "url": "https://pubmed.ncbi.nlm.nih.gov/19204201/",
        "kind": "原著・長期追跡",
        "doi": "10.1200/JCO.2008.18.4028"
      },
      {
        "title": "Jones et al. JCO 2006：TC4対AC4・初回報告",
        "url": "https://pubmed.ncbi.nlm.nih.gov/17135639/",
        "kind": "原著・主解析／適格条件",
        "doi": "10.1200/JCO.2006.06.5391"
      }
    ],
    "cardPopulation": "原発巣を完全切除した病期I–IIIの手術可能浸潤性乳癌の女性1,016例。術前化学療法は不可。HR陽性例では化学療法後にタモキシフェン。HER2陰性に限定した試験ではない。",
    "primaryPublication": {
      "date": "2006-12-01",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/17135639/",
      "sourceTitle": "2006年・初回DFS解析",
      "sourceType": "original_paper",
      "note": "同一試験の初回主要結果原著（2006年・初回DFS解析）を基準に採用。主カードの追跡更新日・後続コホート報告日ではない。既存の検証済み書誌を再利用。"
    }
  },
  {
    "id": "kate2",
    "name": "KATE2",
    "phase": "II",
    "design": "無作為化・二重盲検・プラセボ対照（2:1）",
    "setting": "metastatic",
    "subtypes": [
      "HER2+"
    ],
    "stages": [],
    "timing": [],
    "population": "トラスツズマブ・タキサン既治療、ECOG 0–1のHER2陽性進行乳癌202例。PD-L1陽性に限定しない。",
    "cardPopulation": "トラスツズマブ・タキサン既治療、ECOG 0–1のHER2陽性進行乳癌202例。PD-L1陽性に限定しない。",
    "experimental": "T-DM1＋atezolizumab",
    "control": "T-DM1＋プラセボ",
    "trial_registration": "NCT02924883",
    "primaryEndpoint": "研究者判定PFS",
    "result": "PFS 8.2対6.8か月、HR 0.82（95% CI 0.55–1.23）、P=0.33。主要評価項目未達。無益性とAE増加傾向により早期開盲。",
    "publicationYear": 2020,
    "publicationDate": "2020-10",
    "resultDate": "2017-12-11",
    "checkedDate": "2026-10-06",
    "agents": [
      "T-DM1"
    ],
    "regimenAgents": [
      "T-DM1",
      "atezolizumab"
    ],
    "drugClasses": [
      "ADC"
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/33002436/",
      "note": "一次論文抄録で確認。原著本文は未確認。",
      "checkedDate": "2026-10-06"
    },
    "sources": [
      {
        "title": "KATE2 一次報告",
        "url": "https://pubmed.ncbi.nlm.nih.gov/33002436/",
        "kind": "原著"
      },
      {
        "title": "KATE2 publisher abstract",
        "url": "https://www.sciencedirect.com/science/article/pii/S1470204520304654",
        "kind": "原著抄録"
      }
    ],
    "reports": [],
    "guidelineReferences": [],
    "lineBuckets": [],
    "japanApproval": "未評価",
    "publicationDatePrecision": "month",
    "publicationDateNote": "確認できた一次書誌は2020年10月号。初回オンライン公開の正確な日は未確認。",
    "her2Expression": "HER2陽性",
    "safety": "重篤AE 33%対19%。Grade ≥3血小板減少13%対4%。atezolizumab群で治療関連血球貪食症候群による死亡1例。",
    "safetySourceUrl": "https://www.sciencedirect.com/science/article/pii/S1470204520304654",
    "caveat": "PD-L1陽性群の探索的シグナルで全体陰性の結果を置き換えない。KATE3の低登録による終了も有効性陰性の証明とは異なる。",
    "primaryPublication": {
      "date": "2020-10",
      "precision": "month",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/33002436/",
      "sourceTitle": "KATE2 一次報告",
      "sourceType": "original_paper",
      "note": "初回主要結果原著。既存監査で確認された冊子月を採用。正確な先行オンライン日は今回確証なし。年は確定しており7年境界の判定に影響しない。",
      "dateBasis": "issue_month"
    }
  },
  {
    "id": "metric",
    "name": "METRIC",
    "phase": "IIb",
    "design": "無作為化・非盲検（2:1）",
    "setting": "metastatic",
    "subtypes": [
      "TNBC"
    ],
    "stages": [],
    "timing": [],
    "population": "gpNMB陽性腫瘍細胞25%以上の転移TNBC327例。タキサン既治療、原則アントラサイクリン既治療、進行病変への化学療法2ライン以下。",
    "cardPopulation": "gpNMB陽性腫瘍細胞25%以上の転移TNBC327例。タキサン既治療、原則アントラサイクリン既治療、進行病変への化学療法2ライン以下。",
    "experimental": "glembatumumab vedotin（抗gpNMB ADC）",
    "control": "capecitabine",
    "trial_registration": "NCT01997333",
    "primaryEndpoint": "盲検独立中央判定PFS",
    "result": "PFS 2.9対2.8か月、HR 0.95（95% CI 0.71–1.29）、P=0.7607。OS 8.9対8.7か月、HR 1.06。主要評価項目未達。",
    "publicationYear": 2021,
    "publicationDate": "2021-05-20",
    "resultDate": "2017-11-30",
    "checkedDate": "2026-10-06",
    "agents": [
      "glembatumumab vedotin"
    ],
    "regimenAgents": [
      "glembatumumab vedotin",
      "capecitabine"
    ],
    "drugClasses": [
      "ADC"
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "sourceUrl": "https://www.nature.com/articles/s41523-021-00244-6",
      "note": "公開原著本文のMethods・Results・安全性・Discussionを確認。補足資料全体は未精査。",
      "checkedDate": "2026-10-06"
    },
    "sources": [
      {
        "title": "METRIC 一次報告",
        "url": "https://www.nature.com/articles/s41523-021-00244-6",
        "kind": "原著"
      }
    ],
    "reports": [],
    "guidelineReferences": [],
    "lineBuckets": [],
    "japanApproval": "未評価",
    "her2Expression": "HER2陰性。試験TNBC定義はER/PgR<10%で、現在のER低陽性も含む。",
    "safety": "GV群Grade 3–4好中球減少28%、皮疹12%、白血球減少9%。capecitabine群では疲労24%、下痢14%、手足症候群8%。",
    "safetySourceUrl": "https://www.nature.com/articles/s41523-021-00244-6",
    "caveat": "陽性探索的EMERGEサブグループ所見を確認できなかった重要陰性研究。論文AbstractのNCT番号には桁欠けがあるが、MethodsのNCT01997333で同定。",
    "primaryPublication": {
      "date": "2021-05-20",
      "precision": "day",
      "sourceUrl": "https://www.nature.com/articles/s41523-021-00244-6",
      "sourceTitle": "METRIC 一次報告",
      "sourceType": "original_paper",
      "note": "既存監査済みの初回主要結果原著の公表日を再利用。主要結果の初回原著を基準とし、先行学会発表・プロトコル日を採用しない。"
    }
  },
  {
    "id": "egf104900",
    "name": "EGF104900",
    "phase": "III",
    "design": "無作為化・非盲検（1:1）",
    "setting": "metastatic",
    "subtypes": [
      "HER2+"
    ],
    "stages": [],
    "timing": [],
    "lineBuckets": [
      "her2_pretreated",
      "chemo_pretreated"
    ],
    "population": "トラスツズマブ治療中に増悪したHER2陽性転移性乳癌。アントラサイクリン・タキサン既治療。296例、トラスツズマブを含む前治療中央値3レジメン。",
    "cardPopulation": "トラスツズマブ治療中に増悪したHER2陽性転移性乳癌。アントラサイクリン・タキサン既治療。296例、トラスツズマブを含む前治療中央値3レジメン。",
    "experimental": "ラパチニブ＋トラスツズマブ",
    "control": "ラパチニブ単剤",
    "primaryEndpoint": "PFS；掲載解析は計画された最終OS解析",
    "result": "最終解析（層別因子あり291例）：OS HR 0.74（95% CI 0.57–0.97）、P=0.026、中央値差4.5か月。更新PFS HR 0.74（0.58–0.94）、P=0.011。",
    "caveat": "重治療歴集団の化学療法を含まない二重HER2遮断。現行ADC・他の抗HER2併用との比較ではなく、現在の推奨ラインを示すものではない。登録は進行期トラスツズマブ含有療法1レジメン以上で、全例3レジメン必須ではない。",
    "trial_registration": "NCT00320385",
    "publicationDate": "2012-06-11",
    "publicationYear": 2012,
    "publicationDateType": "first_online_publication_date",
    "resultDate": "2012-06-11",
    "resultDateLabel": "掲載解析の原著／抄録公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Overall survival benefit with lapatinib in combination with trastuzumab… final results from the EGF104900 Study",
        "url": "https://pubmed.ncbi.nlm.nih.gov/22689807/",
        "publicationDate": "2012-06-11",
        "kind": "原著・抄録確認",
        "evidenceStatus": "abstract_only",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "Randomized study of lapatinib alone or in combination with trastuzumab…",
        "url": "https://pubmed.ncbi.nlm.nih.gov/20124187/",
        "publicationDate": "2010-02-01",
        "kind": "原著・抄録確認",
        "evidenceStatus": "abstract_only",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "EGF104900試験登録（前治療・適格条件）",
        "url": "https://clinicaltrials.gov/study/NCT00320385",
        "kind": "試験登録",
        "checkedDate": "2026-10-06"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著本文は未確認。一次論文の抄録に基づく。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/22689807/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "agents": [],
    "regimenAgents": [
      "lapatinib",
      "trastuzumab"
    ],
    "drugClasses": [
      "HER2 TKI",
      "HER2 antibody"
    ],
    "reports": [
      {
        "id": "egf104900-primary-2010",
        "label": "初回主要PFS解析",
        "publicationDate": "2010-02-01",
        "publicationDateType": "first_online_publication_date",
        "resultDate": "2010-02-01",
        "resultDateLabel": "掲載解析の原著／抄録公開日（データカットオフとは別）",
        "result": "ITT 296例：PFS HR 0.73（95% CI 0.57–0.93）、P=0.008。CBR 24.7%対12.4%。この時点のOS HR 0.75（0.53–1.07）で未確定。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/20124187/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "原著本文は未確認。一次論文の抄録に基づく。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/20124187/",
          "checkedDate": "2026-10-06"
        },
        "checkedDate": "2026-10-06"
      }
    ],
    "lineLabel": "トラスツズマブ増悪後・重治療歴",
    "stageLabel": "転移性乳癌。初診時の早期病期を問う試験ではない。",
    "outcomeStatus": "positive",
    "issuePublicationDate": "2012-07-20",
    "primaryPublication": {
      "date": "2010-02-01",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/20124187/",
      "note": "初回主要PFS原著のオンライン公開日。2012年最終OS更新とは区別。",
      "checkedDate": "2026-10-06"
    }
  },
  {
    "id": "keynote-119",
    "name": "KEYNOTE-119",
    "phase": "III",
    "design": "無作為化・非盲検（1:1）",
    "setting": "metastatic",
    "subtypes": [
      "TNBC"
    ],
    "stages": [],
    "timing": [],
    "lineBuckets": [
      "chemo_pretreated"
    ],
    "population": "中央確認TNBC、転移性疾患への全身療法1–2レジメン後に増悪、アントラサイクリンまたはタキサン既治療、ECOG PS 0–1。622例。PD-L1陽性は必須でない。",
    "cardPopulation": "中央確認TNBC、転移性疾患への全身療法1–2レジメン後に増悪、アントラサイクリンまたはタキサン既治療、ECOG PS 0–1。622例。PD-L1陽性は必須でない。",
    "experimental": "ペムブロリズマブ単剤",
    "control": "医師選択の単剤化学療法（カペシタビン、エリブリン、ゲムシタビン、ビノレルビン）",
    "primaryEndpoint": "OS（PD-L1 CPS≥10、CPS≥1、全体集団；階層的検定）",
    "result": "CPS≥10：OS 12.7対11.6か月、HR 0.78（95% CI 0.57–1.06）、P=0.057。CPS≥1：HR 0.86（0.69–1.06）、P=0.073。全体HR 0.97（0.82–1.15）。OS優越性を示さず。",
    "caveat": "二次・三次の単剤比較。CPS≥1で優越性が示されず全体集団の正式な優越性検定には進まない。一次ペムブロリズマブ＋化学療法のKEYNOTE-355と対象・介入が異なる。",
    "trial_registration": "NCT02555657",
    "publicationDate": "2021-03-04",
    "publicationYear": 2021,
    "publicationDateType": "first_online_publication_date",
    "resultDate": "2021-03-04",
    "resultDateLabel": "掲載解析の原著／抄録公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Pembrolizumab versus investigator-choice chemotherapy for metastatic triple-negative breast cancer (KEYNOTE-119)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/33676601/",
        "publicationDate": "2021-03-04",
        "kind": "原著・抄録確認",
        "evidenceStatus": "abstract_only",
        "checkedDate": "2026-10-06"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著本文は未確認。一次論文の抄録に基づく。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/33676601/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "agents": [],
    "regimenAgents": [
      "pembrolizumab",
      "capecitabine",
      "eribulin",
      "gemcitabine",
      "vinorelbine"
    ],
    "drugClasses": [
      "PD-1 inhibitor",
      "chemotherapy"
    ],
    "reports": [],
    "lineLabel": "転移性疾患の二次・三次治療",
    "stageLabel": "転移性乳癌。",
    "outcomeStatus": "negative",
    "issuePublicationDate": "2021-04",
    "primaryPublication": {
      "date": "2021-03-04",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/33676601/",
      "note": "主要OS結果原著のオンライン公開日。",
      "checkedDate": "2026-10-06"
    }
  },
  {
    "id": "pakt",
    "name": "PAKT",
    "phase": "II",
    "design": "無作為化・二重盲検・プラセボ対照（1:1）",
    "setting": "metastatic",
    "subtypes": [
      "TNBC"
    ],
    "stages": [],
    "timing": [],
    "lineBuckets": [
      "firstline"
    ],
    "population": "進行期未治療のTNBC女性140例。PIK3CA/AKT1/PTEN異常は登録必須ではなく、異常例28例の評価は副次的部分集団解析。",
    "cardPopulation": "進行期未治療のTNBC女性140例。PIK3CA/AKT1/PTEN異常は登録必須ではなく、異常例28例の評価は副次的部分集団解析。",
    "experimental": "カピバセルチブ＋パクリタキセル",
    "control": "プラセボ＋パクリタキセル",
    "primaryEndpoint": "PFS（第II相の有意水準：片側α=0.10）",
    "result": "PFS 5.9対4.2か月、HR 0.74（95% CI 0.50–1.08）、片側P=0.06で規定α=0.10を達成。副次OS 19.1対12.6か月、HR 0.61（0.37–0.99）、両側P=0.04。",
    "caveat": "スクリーニング目的の第II相であり、PFSの95% CIは1を含む。異常例の強いPFS所見（28例）を検証的バイオマーカー利益と扱わない。後続CAPItello-290はOS主要評価未達で、この先行結果だけで現行TNBC標準治療とはしない。",
    "trial_registration": "NCT02423603",
    "publicationDate": "2019-12-16",
    "publicationYear": 2019,
    "publicationDateType": "first_online_publication_date",
    "resultDate": "2019-12-16",
    "resultDateLabel": "掲載解析の原著／抄録公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Capivasertib Plus Paclitaxel Versus Placebo Plus Paclitaxel… The PAKT Trial",
        "url": "https://pubmed.ncbi.nlm.nih.gov/31841354/",
        "publicationDate": "2019-12-16",
        "kind": "原著・抄録確認",
        "evidenceStatus": "abstract_only",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "PAKT試験登録",
        "url": "https://www.isrctn.com/ISRCTN64193273",
        "kind": "試験登録",
        "checkedDate": "2026-10-06"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著本文は未確認。一次論文の抄録に基づく。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/31841354/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "agents": [],
    "regimenAgents": [
      "capivasertib",
      "paclitaxel"
    ],
    "drugClasses": [
      "AKT inhibitor",
      "chemotherapy"
    ],
    "reports": [],
    "lineLabel": "進行期一次療法",
    "stageLabel": "進行・転移性TNBC。",
    "outcomeStatus": "positive_phase2",
    "issuePublicationDate": "2020-02",
    "safety": "Grade≥3下痢13%対1%、皮疹4%対0%。",
    "relatedTrialIds": [
      "capitello-290"
    ],
    "primaryPublication": {
      "date": "2019-12-16",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/31841354/",
      "note": "主要PFS原著のオンライン公開日。2020年2月の号刊行とは区別。",
      "checkedDate": "2026-10-06"
    }
  },
  {
    "id": "geicam-ciboma",
    "name": "GEICAM/2003-11–CIBOMA/2004-01",
    "phase": "III",
    "design": "無作為化・非盲検（1:1）",
    "setting": "early",
    "subtypes": [
      "TNBC"
    ],
    "stages": [
      "I",
      "II",
      "III"
    ],
    "timing": [
      "adjuvant"
    ],
    "lineBuckets": [],
    "population": "手術可能なTNBC876例。腋窩N+またはN0で原発腫瘍径≥1 cm。アントラサイクリン／タキサンを含む術前または術後標準化学療法を完了。術前療法後残存病変に限定しない。",
    "cardPopulation": "手術可能なTNBC876例。腋窩N+またはN0で原発腫瘍径≥1 cm。アントラサイクリン／タキサンを含む術前または術後標準化学療法を完了。術前療法後残存病変に限定しない。",
    "experimental": "追加術後カペシタビン1,000 mg/m² 1日2回、day 1–14、3週毎8サイクル",
    "control": "経過観察",
    "primaryEndpoint": "DFS",
    "result": "追跡中央値7.3年：DFS HR 0.82（95% CI 0.63–1.06）、P=0.136。5年DFS 79.6%対76.8%、5年OS 86.2%対85.9%。主要評価未達。",
    "caveat": "CREATE-Xの術前療法後残存選択集団や、SYSUCC-001の低用量1年療法と異なる。非basal集団の利益は追加検証が必要で、全体陰性の結論を置き換えない。",
    "trial_registration": "NCT00130533",
    "publicationDate": "2019-12-05",
    "publicationYear": 2019,
    "publicationDateType": "first_online_publication_date",
    "resultDate": "2019-12-05",
    "resultDateLabel": "掲載解析の原著／抄録公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Phase III Trial of Adjuvant Capecitabine… (GEICAM/2003-11_CIBOMA/2004-01)",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6968797/",
        "publicationDate": "2019-12-05",
        "kind": "原著・本文確認",
        "evidenceStatus": "full_text_checked",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "同原著の機関リポジトリ版（Table 1の初診時病期I–IIIを照合）",
        "url": "https://idus.us.es/server/api/core/bitstreams/9528c81d-3a47-43b2-bbf7-30f736276b50/content",
        "publicationDate": "2019-12-05",
        "kind": "原著・本文確認",
        "evidenceStatus": "full_text_checked",
        "checkedDate": "2026-10-06"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "原著本文の対象・方法・掲載結果の該当箇所を確認。",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6968797/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "agents": [],
    "regimenAgents": [
      "capecitabine"
    ],
    "drugClasses": [
      "chemotherapy"
    ],
    "reports": [],
    "stageLabel": "初診時病期I–III。手術可能なN+、またはN0・腫瘍径≥1 cm。周術期標準化学療法後に登録。",
    "outcomeStatus": "negative",
    "issuePublicationDate": "2020-01-20",
    "safety": "予定8サイクル完遂75.2%。",
    "biomarkerCaveat": "basal分類はEGFR/CK5/6免疫染色であり、EA1131のPAM50と同じ分類法ではない。",
    "primaryPublication": {
      "date": "2019-12-05",
      "precision": "day",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6968797/",
      "note": "主要DFS原著のオンライン公開日。2020年1月20日の号刊行とは区別。",
      "checkedDate": "2026-10-06"
    }
  },
  {
    "id": "ecog-acrin-ea1131",
    "name": "ECOG-ACRIN EA1131",
    "phase": "III",
    "design": "無作為化・非盲検（1:1）、非劣性／優越性hybrid design",
    "setting": "early",
    "subtypes": [
      "TNBC"
    ],
    "stages": [
      "II",
      "III"
    ],
    "timing": [
      "adjuvant"
    ],
    "lineBuckets": [],
    "population": "初診時臨床病期II–IIIのTNBCで術前療法後に乳房内≥1 cmの浸潤癌が残存。410例、主解析はPAM50 basal型308例。術前プラチナ／カペシタビン投与は不適格。",
    "cardPopulation": "初診時臨床病期II–IIIのTNBCで術前療法後に乳房内≥1 cmの浸潤癌が残存。410例、主解析はPAM50 basal型308例。術前プラチナ／カペシタビン投与は不適格。",
    "experimental": "術後カルボプラチンまたはシスプラチン3週毎4サイクル",
    "control": "術後カペシタビン1,000 mg/m² 1日2回、day 1–14、3週毎6サイクル",
    "primaryEndpoint": "basal型のiDFS；非劣性を先に検定し、達成時に優越性を検定（HR非劣性マージン1.154）",
    "result": "主解析：3年iDFS 42%対49%、HR 1.06（95% repeated CI 0.62–1.81）。非劣性・優越性は示せず、条件付き検出力6%の中間評価で無益性中止。",
    "caveat": "非劣性未達は統計学的な劣性の証明とは異なる。主解析HR 1.06と、中止決定時の中間HR 1.09を区別。試験上ER/PgRは≤10%まで許容しており現在の狭義TNBCと完全には一致しない。",
    "trial_registration": "NCT02445391",
    "publicationDate": "2021-06-06",
    "publicationYear": 2021,
    "publicationDateType": "first_online_publication_date",
    "resultDate": "2021-06-06",
    "resultDateLabel": "掲載解析の原著／抄録公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Randomized Phase III Postoperative Trial of Platinum-Based Chemotherapy Versus Capecitabine… ECOG-ACRIN EA1131",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8577688/",
        "publicationDate": "2021-06-06",
        "kind": "原著・本文確認",
        "evidenceStatus": "full_text_checked",
        "checkedDate": "2026-10-06"
      }
    ],
    "articleEvidence": {
      "status": "full_text_checked",
      "label": "表示結果の原著本文確認済み",
      "note": "原著本文の対象・方法・掲載結果の該当箇所を確認。",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8577688/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "agents": [],
    "regimenAgents": [
      "carboplatin",
      "cisplatin",
      "capecitabine"
    ],
    "drugClasses": [
      "chemotherapy"
    ],
    "reports": [],
    "stageLabel": "II–IIIは初診時臨床病期。術後残存≥1 cmとPAM50評価を要する。",
    "outcomeStatus": "negative_noninferiority",
    "dataCutoff": "2021-04-07",
    "issuePublicationDate": "2021-08",
    "safety": "Grade 3–4毒性26%対15%でプラチナ群に多い。",
    "primaryPublication": {
      "date": "2021-06-06",
      "precision": "day",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8577688/",
      "note": "主要iDFS結果原著のオンライン公開日。",
      "checkedDate": "2026-10-06"
    }
  },
  {
    "id": "geparsixto",
    "name": "GeparSixto / GBG 66",
    "phase": "II",
    "design": "無作為化・非盲検（1:1）、生物学的サブタイプ別層別",
    "setting": "early",
    "subtypes": [
      "TNBC",
      "HER2+"
    ],
    "stages": [
      "II",
      "III"
    ],
    "timing": [
      "neoadjuvant"
    ],
    "lineBuckets": [],
    "population": "未治療・非転移性の病期II–III乳癌。TNBC315例とHER2陽性273例が治療開始。TNBCでは両群ベバシズマブ、HER2陽性では両群トラスツズマブ＋ラパチニブを併用。",
    "cardPopulation": "未治療・非転移性の病期II–III乳癌。TNBC315例とHER2陽性273例が治療開始。TNBCでは両群ベバシズマブ、HER2陽性では両群トラスツズマブ＋ラパチニブを併用。",
    "experimental": "パクリタキセル＋非ペグ化リポソームドキソルビシン＋サブタイプ別標的療法にカルボプラチンを追加（18週）",
    "control": "同じ基本レジメン、カルボプラチンなし",
    "primaryEndpoint": "pCR（ypT0 ypN0）；掲載解析はDFS/OSの副次評価",
    "result": "追跡中央値47.3か月：TNBCのDFS HR 0.56（95% CI 0.34–0.93）、P=0.022。TNBCのOS改善は非有意。HER2陽性ではDFS/OS改善なし。",
    "caveat": "TNBCとHER2陽性の結果を混同しない。シクロホスファミドを含まない特殊な基本療法で、現行の周術期免疫療法を直接検証していない。HRDスコアはカルボプラチン追加利益の選択基準として確立されなかった。",
    "trial_registration": "NCT01426880",
    "publicationDate": "2018-10-18",
    "publicationYear": 2018,
    "publicationDateType": "first_online_publication_date",
    "resultDate": "2018-10-18",
    "resultDateLabel": "掲載解析の原著／抄録公開日（データカットオフとは別）",
    "sources": [
      {
        "title": "Survival analysis… final results from GeparSixto",
        "url": "https://pubmed.ncbi.nlm.nih.gov/30335131/",
        "publicationDate": "2018-10-18",
        "kind": "原著・抄録確認",
        "evidenceStatus": "abstract_only",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "同原著・出版社オンライン公開日",
        "url": "https://academic.oup.com/annonc/article-abstract/29/12/2341/5134289",
        "publicationDate": "2018-10-18",
        "kind": "原著・抄録確認",
        "evidenceStatus": "abstract_only",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "Neoadjuvant carboplatin… (GeparSixto; GBG 66): a randomised phase 2 trial",
        "url": "https://pubmed.ncbi.nlm.nih.gov/24794243/",
        "publicationDate": "2014-04-30",
        "kind": "原著・抄録確認",
        "evidenceStatus": "abstract_only",
        "checkedDate": "2026-10-06"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "原著本文は未確認。一次論文の抄録に基づく。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/30335131/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "japanApproval": "未評価",
    "agents": [],
    "regimenAgents": [
      "carboplatin",
      "paclitaxel",
      "nonpegylated liposomal doxorubicin",
      "bevacizumab",
      "trastuzumab",
      "lapatinib"
    ],
    "drugClasses": [
      "chemotherapy",
      "VEGF antibody",
      "HER2 antibody",
      "HER2 TKI"
    ],
    "reports": [
      {
        "id": "geparsixto-pcr-2014",
        "label": "主要pCR解析とサブタイプ別結果",
        "publicationDate": "2014-04-30",
        "publicationDateType": "first_online_publication_date",
        "resultDate": "2014-04-30",
        "resultDateLabel": "掲載解析の原著／抄録公開日（データカットオフとは別）",
        "result": "全体pCR 43.7%対36.9%、P=0.107（第II相の規定閾値P<0.20）。TNBC 53.2%対36.9%、P=0.005；HER2陽性32.8%対36.8%、P=0.581（交互作用P=0.015）。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/24794243/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "原著本文は未確認。一次論文の抄録に基づく。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/24794243/",
          "checkedDate": "2026-10-06"
        },
        "checkedDate": "2026-10-06"
      }
    ],
    "stageLabel": "術前登録時の病期II–III、非転移性。",
    "outcomeStatus": "subtype_dependent",
    "issuePublicationDate": "2018-12-01",
    "primaryPublication": {
      "date": "2014-04-30",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/24794243/",
      "note": "初回主要pCR原著のオンライン公開日。2018年生存更新とは区別。",
      "checkedDate": "2026-10-06"
    }
  },
  {
    "id": "persephone",
    "name": "PERSEPHONE",
    "phase": "III",
    "design": "多施設・無作為化・非盲検・非劣性（1:1）",
    "setting": "early",
    "subtypes": [
      "HER2+"
    ],
    "stages": [],
    "timing": [
      "adjuvant"
    ],
    "lineBuckets": [],
    "trial_registration": "NCT00712140",
    "population": "HER2陽性早期乳癌で化学療法とトラスツズマブを予定した4,088例（6か月2,043例、12か月2,045例）。",
    "cardPopulation": "HER2陽性早期乳癌で化学療法とトラスツズマブを予定した4,088例（6か月2,043例、12か月2,045例）。",
    "experimental": "化学療法と併用または逐次のトラスツズマブ計6か月",
    "control": "トラスツズマブ計12か月",
    "primaryEndpoint": "DFS；非劣性限界は4年DFSの絶対差3パーセントポイント",
    "result": "2020年追跡延長報告（中央値6.1年）：4年DFS 89.5%対90.3%（6対12か月、HR 1.10、90% CI 0.96–1.26、非劣性P=0.01）。規定した限界内の非劣性を達成。",
    "publicationDate": "2020-09-02",
    "publicationYear": 2020,
    "resultDate": "2020-09-02公表の解析（追跡期間は結果欄）",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "agents": [],
    "regimenAgents": [
      "trastuzumab",
      "chemotherapy"
    ],
    "drugClasses": [],
    "guidelineReferences": [],
    "reports": [
      {
        "id": "persephone-primary-2019",
        "label": "2019年・4年DFS主解析",
        "publicationDate": "2019-06-06",
        "result": "追跡中央値5.4年。4年DFS 89.4%対89.8%（6対12か月、HR 1.07、90% CI 0.93–1.24、非劣性P=0.011）。",
        "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6615016/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "一次論文の公開抄録で対象・比較・結果を確認。原著本文・付録は未確認。",
          "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6615016/",
          "checkedDate": "2026-10-06"
        }
      }
    ],
    "japanApproval": "未評価",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "一次論文の公開抄録で対象・比較・結果を確認。原著本文・付録は未確認。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/32880572/",
      "checkedDate": "2026-10-06"
    },
    "sources": [
      {
        "title": "Earl et al. Health Technology Assessment 2020：PERSEPHONE追跡延長",
        "url": "https://pubmed.ncbi.nlm.nih.gov/32880572/",
        "kind": "原著・追跡延長",
        "doi": "10.3310/hta24400"
      },
      {
        "title": "Earl et al. Lancet 2019：PERSEPHONE主解析",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6615016/",
        "kind": "原著・主解析",
        "doi": "10.1016/S0140-6736(19)30650-6"
      }
    ],
    "stageLabel": "治癒を目指す早期乳癌。確認資料から病期群を一律には割り当てない。",
    "caveat": "非劣性は完全な同等性を意味しない。化学療法・投与順序が多様で、PHAREと非劣性限界も異なる。2025年統合解析を単一試験の新たな追跡結果として扱わない。",
    "safety": "2020年報告：重度AE 19%対24%、心毒性による早期中止3%対8%（6対12か月）。",
    "safetySourceUrl": "https://pubmed.ncbi.nlm.nih.gov/32880572/",
    "primaryPublication": {
      "date": "2019-06-06",
      "precision": "day",
      "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6615016/",
      "note": "Lancet主解析のオンライン公開日。7年境界2019-10-06より前。2020年追跡延長とは区別。"
    }
  },
  {
    "id": "phare",
    "name": "PHARE",
    "phase": "III",
    "design": "多施設・無作為化・非盲検・非劣性（1:1）",
    "setting": "early",
    "subtypes": [
      "HER2+"
    ],
    "stages": [],
    "timing": [
      "adjuvant"
    ],
    "lineBuckets": [],
    "trial_registration": "NCT00381901",
    "population": "HER2陽性の手術可能・非転移乳癌。リンパ節陽性または陰性かつ腫瘍径10 mm以上。ITT 3,380例。",
    "cardPopulation": "HER2陽性の手術可能・非転移乳癌。リンパ節陽性または陰性かつ腫瘍径10 mm以上。ITT 3,380例。",
    "experimental": "術後トラスツズマブ計6か月",
    "control": "術後トラスツズマブ計12か月",
    "primaryEndpoint": "DFS；非劣性HR限界1.15",
    "result": "2019年最終解析、追跡中央値7.5年：DFSイベント359/1,690対345/1,690（6対12か月）。調整HR 1.08（95% CI 0.93–1.25）が限界1.15をまたぎ、6か月の非劣性は示されなかった。",
    "publicationDate": "2019-06-06",
    "publicationYear": 2019,
    "resultDate": "2019-06-06公表の解析（追跡期間は結果欄）",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "agents": [],
    "regimenAgents": [
      "trastuzumab",
      "chemotherapy"
    ],
    "drugClasses": [],
    "guidelineReferences": [],
    "reports": [],
    "japanApproval": "未評価",
    "articleEvidence": {
      "status": "body_excerpt_only",
      "label": "原著本文の一部のみ確認",
      "note": "一次論文の公開本文抜粋で記載事項を照合。原著・付録の全体を通読したという意味ではない。",
      "sourceUrl": "https://www.icm.unicancer.fr/sites/default/files/resources/Publication%202019%20PHARE.pdf",
      "checkedDate": "2026-10-06"
    },
    "sources": [
      {
        "title": "Pivot et al. Lancet 2019：PHARE最終解析",
        "url": "https://www.icm.unicancer.fr/sites/default/files/resources/Publication%202019%20PHARE.pdf",
        "kind": "原著・最終解析／本文抜粋確認",
        "doi": "10.1016/S0140-6736(19)30653-1"
      },
      {
        "title": "PHARE最終解析：PubMed一次抄録",
        "url": "https://pubmed.ncbi.nlm.nih.gov/31178155/",
        "kind": "原著抄録"
      },
      {
        "title": "PHARE 初回主要結果の原著",
        "url": "https://pubmed.ncbi.nlm.nih.gov/23764181/",
        "kind": "原著・初回主要解析"
      }
    ],
    "stageLabel": "手術可能な非転移乳癌。確認資料に基づく詳細適格条件は対象欄。病期群の一律分類は未実施。",
    "caveat": "非劣性不成立を同等性と読み替えない。全例が化学療法を4コース以上受け、トラスツズマブ開始3–6か月で無作為化された集団。",
    "analysisNote": "HRの群順序に関する抄録の表現を独自修正せず、イベント数と規定マージンに基づく非劣性不成立を表示。",
    "primaryPublication": {
      "date": "2013-06-11",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/23764181/",
      "note": "最初の主要DFS原著のオンライン公開日。2019年最終解析と区別。"
    }
  },
  {
    "id": "noah",
    "name": "NOAH",
    "phase": "III",
    "design": "多施設・無作為化・非盲検・優越性（1:1）、HER2陰性並行コホートあり",
    "setting": "early",
    "subtypes": [
      "HER2+"
    ],
    "stages": [],
    "timing": [
      "neoadjuvant",
      "adjuvant"
    ],
    "lineBuckets": [],
    "trial_registration": "ISRCTN86043495",
    "population": "HER2陽性の局所進行または炎症性乳癌235例（トラスツズマブ群117例、対照118例）。別にHER2陰性99例の非無作為化並行コホート。",
    "cardPopulation": "HER2陽性の局所進行または炎症性乳癌235例（トラスツズマブ群117例、対照118例）。別にHER2陰性99例の非無作為化並行コホート。",
    "experimental": "術前化学療法＋トラスツズマブ、手術後も継続し計1年",
    "control": "同じ術前化学療法のみ",
    "primaryEndpoint": "EFS（ITT）",
    "result": "2014年更新、追跡中央値5.4年：5年EFS 58%対43%（トラスツズマブ併用対化学療法のみ、HR 0.64、95% CI 0.44–0.93、P=0.016）。",
    "publicationDate": "2014-03-20",
    "publicationYear": 2014,
    "resultDate": "2014-03-20公表の解析（追跡期間は結果欄）",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "agents": [],
    "regimenAgents": [
      "trastuzumab",
      "chemotherapy"
    ],
    "drugClasses": [],
    "guidelineReferences": [],
    "reports": [],
    "japanApproval": "未評価",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "一次論文の公開抄録で対象・比較・結果を確認。原著本文・付録は未確認。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/24657003/",
      "checkedDate": "2026-10-06"
    },
    "sources": [
      {
        "title": "Gianni et al. Lancet Oncology 2014：NOAH長期追跡",
        "url": "https://pubmed.ncbi.nlm.nih.gov/24657003/",
        "kind": "原著・5年生存追跡",
        "doi": "10.1016/S1470-2045(14)70080-4"
      },
      {
        "title": "NOAH 初回主要結果の原著",
        "url": "https://pubmed.ncbi.nlm.nih.gov/20113825/",
        "kind": "原著・初回主要解析"
      }
    ],
    "stageLabel": "局所進行・炎症性乳癌。今回の原著抄録照合では厳密な病期群の割当を保留。",
    "caveat": "HER2陰性の並行コホートを無作為化対照に含めない。術前・術後トラスツズマブの独立した寄与や、現代の二重阻害との比較は検証していない。",
    "primaryPublication": {
      "date": "2010",
      "precision": "year",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/20113825/",
      "note": "最初の主要EFS原著の公表年。2014年長期追跡と区別。"
    }
  },
  {
    "id": "big-1-98",
    "name": "BIG 1-98",
    "phase": "III",
    "design": "無作為化・二重盲検・第III相（単剤2群と逐次投与2群）。12.6年報告は観察的追跡延長。",
    "setting": "early",
    "subtypes": [
      "HR+（HER2非限定）"
    ],
    "stages": [],
    "timing": [
      "adjuvant"
    ],
    "population": "閉経後のERまたはPgR陽性の早期乳癌8,010例。HER2陰性に限定しない。12.6年追跡では参加施設で生存・追跡継続中の4,433例のうち3,833例に追加追跡情報が得られた。",
    "cardPopulation": "閉経後のERまたはPgR陽性の早期乳癌8,010例。HER2陰性に限定しない。12.6年追跡では参加施設で生存・追跡継続中の4,433例のうち3,833例に追加追跡情報が得られた。",
    "experimental": "レトロゾール5年。別群：レトロゾール2年→タモキシフェン3年、またはタモキシフェン2年→レトロゾール3年（いずれも計5年）",
    "control": "タモキシフェン5年（逐次投与群はレトロゾール5年とも比較）",
    "trial_registration": "NCT00004205",
    "primaryEndpoint": "DFS",
    "result": "12.6年追跡の単剤比較：レトロゾール対タモキシフェンのDFS HR 0.91（95% CI 0.81–1.01）。レトロゾールを支持する傾向だが、この長期解析では有意差に至らない。",
    "publicationDate": "2018-11-26",
    "publicationYear": 2018,
    "publicationDateType": "online_first",
    "resultDate": "2018年オンライン／2019年冊子、追跡中央値12.6年",
    "sources": [
      {
        "title": "Ruhstaller et al. Adjuvant Letrozole and Tamoxifen Alone or Sequentially: Long-Term Follow-Up of BIG 1-98",
        "url": "https://pubmed.ncbi.nlm.nih.gov/30475668/",
        "kind": "原著・抄録確認",
        "publicationDate": "2018-11-26",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "Regan et al. BIG 1-98 at 8.1 years median follow-up",
        "url": "https://pubmed.ncbi.nlm.nih.gov/22018631/",
        "kind": "原著・抄録確認",
        "publicationDate": "2011-10-20",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "Mouridsen et al. Letrozole therapy alone or in sequence with tamoxifen",
        "url": "https://pubmed.ncbi.nlm.nih.gov/19692688/",
        "kind": "原著・抄録確認",
        "publicationDate": "2009-08-20",
        "checkedDate": "2026-10-06"
      }
    ],
    "caveat": "治療延長期間の比較ではなく、合計5年の薬剤・順序の比較。長期追跡は全登録施設で継続できず、タモキシフェン群からの選択的クロスオーバーもある。先行解析の有意な効果と12.6年解析の非有意な推定を混同しない。",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "一次論文の公開抄録・書誌を確認。原著全文は未確認。公開索引の本文抜粋や試験登録による適格条件の補足は全文確認と区別する。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/30475668/"
    },
    "guidelineReferences": [
      {
        "trialId": "big-1-98",
        "guidelineId": "jbcs-2022-web-2024",
        "organization": "JBCS",
        "section": "薬物療法 CQ3",
        "title": "閉経後ホルモン受容体陽性乳癌に対する術後内分泌療法として何が推奨されるか？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq3/",
        "citationEvidence": "参考文献3: Mouridsen et al., NEJM 2009。本文でBIG 1-98を明示。",
        "referenceNumber": 3,
        "relationship": "explicit_citation",
        "verificationMethod": "official_guideline_body_and_references",
        "accessMethod": "JBCS公式WEB版の本文・参考文献を直接確認",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/19692688/"
        ],
        "checkedDate": "2026-10-06",
        "interpretationNote": "引用は2009年報告。2018年オンラインの12.6年解析そのものの引用ではない。"
      }
    ],
    "stageLabel": "早期・非転移乳癌。詳細な病期別適格条件を全文で確認していないため、I–IIIの病期タグは付けない。",
    "subtypeNote": "HER2陰性に限定した比較ではない。HR陽性の検索枠に配置し、原試験に受容体不明例を含む場合は対象欄に明示。",
    "lineBuckets": [],
    "regimenAgents": [
      "letrozole",
      "tamoxifen"
    ],
    "agents": [],
    "drugClasses": [
      "内分泌療法"
    ],
    "reports": [
      {
        "id": "big-1-98-primary-2005",
        "label": "初回主要結果",
        "publicationDate": "2005-12-29",
        "result": "追跡中央値25.8か月の初回比較：DFS HR 0.81（95% CI 0.70–0.93、P=0.003）。",
        "sourceUrl": "https://www.nejm.org/doi/full/10.1056/NEJMoa052258",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "一次論文の公開抄録・書誌を確認。原著全文は未確認。公開索引の本文抜粋や試験登録による適格条件の補足は全文確認と区別する。",
          "sourceUrl": "https://www.nejm.org/doi/full/10.1056/NEJMoa052258"
        },
        "caveat": "レトロゾール開始群対タモキシフェン開始群。逐次群は切替までのイベントと追跡を使用。"
      },
      {
        "id": "big-1-98-2011",
        "label": "8.1年追跡（単剤比較の追跡中央値8.7年）",
        "publicationDate": "2011-10-20",
        "result": "単剤比較のITT：DFS HR 0.86（95% CI 0.78–0.96）、OS HR 0.87（0.77–0.999）。逐次投与はいずれもレトロゾール5年に対し有意な改善を示さなかった。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/22018631/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "一次論文の公開抄録・書誌を確認。原著全文は未確認。公開索引の本文抜粋や試験登録による適格条件の補足は全文確認と区別する。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/22018631/"
        },
        "caveat": "クロスオーバー補正IPCWの推定とは分けてITTを掲載。"
      }
    ],
    "resultInterpretation": "先行無作為化比較はレトロゾールを支持。最新の全体長期追跡ではDFSの統計学的有意差なし。",
    "totalEndocrineDuration": "両群および逐次投与群とも計5年",
    "primaryPublication": {
      "date": "2005-12-29",
      "precision": "day",
      "sourceUrl": "https://www.nejm.org/doi/full/10.1056/NEJMoa052258",
      "note": "初回主要結果の原著（NEJM 2005）。2018年の長期追跡公開日で年代分類を更新しない。"
    },
    "publicationEra": "earlier"
  },
  {
    "id": "ma-17",
    "name": "MA.17",
    "phase": "III",
    "design": "無作為化・二重盲検・プラセボ対照。早期開盲後のクロスオーバー補正解析を含む。",
    "setting": "early",
    "subtypes": [
      "HR+（HER2非限定）"
    ],
    "stages": [],
    "timing": [
      "adjuvant"
    ],
    "population": "閉経後の早期乳癌5,187例。タモキシフェン約5年（4.5–6年）完了後、無病で登録。HR陽性を主とし受容体不明例も許容。HER2陰性に限定しない。MA.17Rとは別試験。",
    "cardPopulation": "閉経後の早期乳癌5,187例。タモキシフェン約5年（4.5–6年）完了後、無病で登録。HR陽性を主とし受容体不明例も許容。HER2陰性に限定しない。MA.17Rとは別試験。",
    "experimental": "タモキシフェン約5年後にレトロゾールを予定5年追加（内分泌療法は計約10年）",
    "control": "タモキシフェン約5年後にプラセボを予定5年。開盲後はレトロゾールへの変更を許容",
    "trial_registration": "NCT00003140",
    "primaryEndpoint": "DFS（乳癌再発または対側乳癌）",
    "result": "64か月追跡のクロスオーバー補正・探索的IPCW解析：DFS HR 0.52（95% CI 0.45–0.61）、OS HR 0.61（0.52–0.71）。同じ追跡データのITTではDFS改善を認めたが、OS改善は有意でなかった。",
    "publicationDate": "2011-10-31",
    "publicationYear": 2011,
    "publicationDateType": "online_first",
    "resultDate": "2011年オンライン／2012年冊子、追跡中央値64か月、クロスオーバー補正探索解析",
    "sources": [
      {
        "title": "Jin et al. Longer-Term Outcomes of Letrozole Versus Placebo After 5 Years of Tamoxifen in MA.17: Analyses Adjusting for Treatment Crossover",
        "url": "https://pubmed.ncbi.nlm.nih.gov/22042967/",
        "kind": "原著・抄録確認",
        "publicationDate": "2011-10-31",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "Ingle et al. Intent-to-treat analysis of NCIC CTG MA.17",
        "url": "https://pubmed.ncbi.nlm.nih.gov/18332043/",
        "kind": "原著・抄録確認",
        "publicationDate": "2008-03-10",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "Goss et al. Updated findings from NCIC CTG MA.17",
        "url": "https://pubmed.ncbi.nlm.nih.gov/16145047/",
        "kind": "原著・抄録確認",
        "publicationDate": "2005-09-07",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "MA.17 registry",
        "url": "https://clinicaltrials.gov/study/NCT00003140",
        "kind": "試験登録",
        "checkedDate": "2026-10-06"
      }
    ],
    "caveat": "早期開盲後、プラセボ患者の約66%がレトロゾールへ変更。補正後のOS推定はモデルの仮定に依存する探索解析で、無作為化ITTのOS陽性と記載しない。AI既治療後の追加延長を調べるMA.17Rと区別する。",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "一次論文の公開抄録・書誌を確認。原著全文は未確認。公開索引の本文抜粋や試験登録による適格条件の補足は全文確認と区別する。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/22042967/"
    },
    "guidelineReferences": [
      {
        "trialId": "ma-17",
        "guidelineId": "jbcs-2022-web-2024",
        "organization": "JBCS",
        "section": "薬物療法 CQ4",
        "title": "浸潤性乳癌に対して，術後5年間の内分泌療法後に内分泌療法の追加投与は勧められるか？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq4/",
        "citationEvidence": "参考文献7: Goss et al., JNCI 2005（MA.17更新解析）。",
        "referenceNumber": 7,
        "relationship": "explicit_citation",
        "verificationMethod": "official_guideline_body_and_references",
        "accessMethod": "JBCS公式WEB版の本文・参考文献を直接確認",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/16145047/"
        ],
        "checkedDate": "2026-10-06",
        "interpretationNote": "2011年クロスオーバー補正論文の直接引用ではない。"
      }
    ],
    "stageLabel": "早期・非転移乳癌。詳細な病期別適格条件を全文で確認していないため、I–IIIの病期タグは付けない。",
    "subtypeNote": "HER2陰性に限定した比較ではない。HR陽性の検索枠に配置し、原試験に受容体不明例を含む場合は対象欄に明示。",
    "lineBuckets": [],
    "regimenAgents": [
      "letrozole",
      "tamoxifen"
    ],
    "agents": [],
    "drugClasses": [
      "内分泌療法"
    ],
    "reports": [
      {
        "id": "ma-17-primary-2003",
        "label": "初回主要結果",
        "publicationDate": "2003-10-09",
        "result": "初回中間解析：4年DFS推定93%対87%（P≤0.001）。OSは有意差なし（P=0.25）。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/14551341/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "一次論文の公開抄録・書誌を確認。原著全文は未確認。公開索引の本文抜粋や試験登録による適格条件の補足は全文確認と区別する。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/14551341/"
        },
        "caveat": "試験はDFSの有効性に基づき早期開盲。"
      },
      {
        "id": "ma-17-2005",
        "label": "開盲時点の更新解析",
        "publicationDate": "2005-09-07",
        "result": "追跡中央値30か月：DFS HR 0.58（95% CI 0.45–0.76、P<0.001）。全体OS HR 0.82（0.57–1.19、P=0.30）は有意差なし。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/16145047/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "一次論文の公開抄録・書誌を確認。原著全文は未確認。公開索引の本文抜粋や試験登録による適格条件の補足は全文確認と区別する。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/16145047/"
        },
        "caveat": "リンパ節陽性サブグループのOS効果を全体OSと取り違えない。"
      },
      {
        "id": "ma-17-2008-itt",
        "label": "開盲後を含む無作為化ITT解析",
        "publicationDate": "2008-03-10",
        "result": "追跡中央値64か月：4年DFS 94.3%対91.4%（HR 0.68、95% CI 0.55–0.83、P=0.0001）。4年OSは両群95.1%。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/18332043/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "一次論文の公開抄録・書誌を確認。原著全文は未確認。公開索引の本文抜粋や試験登録による適格条件の補足は全文確認と区別する。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/18332043/"
        },
        "caveat": "元の割付で比較。開盲後クロスオーバーを含む。"
      }
    ],
    "resultInterpretation": "DFS陽性。全体OSのITTは有意差なし。クロスオーバー補正OSは探索解析で陽性。",
    "totalEndocrineDuration": "予定：約10年対約5年（開盲後クロスオーバーあり）",
    "primaryPublication": {
      "date": "2003-10-09",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/14551341/",
      "note": "初回中間解析の原著オンライン公開日。冊子日は2003-11-06。"
    },
    "publicationEra": "earlier"
  },
  {
    "id": "ies",
    "name": "IES（Intergroup Exemestane Study）",
    "phase": "III",
    "design": "無作為化比較（切替対継続）",
    "setting": "early",
    "subtypes": [
      "HR+（HER2非限定）"
    ],
    "stages": [],
    "timing": [
      "adjuvant"
    ],
    "population": "閉経後の早期浸潤性乳癌で、タモキシフェン2–3年後に無病。4,724例を登録し、2017年主要解析はER陽性またはER不明4,599例。HER2陰性に限定しない。",
    "cardPopulation": "閉経後の早期浸潤性乳癌で、タモキシフェン2–3年後に無病。4,724例を登録し、2017年主要解析はER陽性またはER不明4,599例。HER2陰性に限定しない。",
    "experimental": "タモキシフェン2–3年からエキセメスタンへ切り替え、術後内分泌療法を計5年まで継続",
    "control": "タモキシフェンを継続し、術後内分泌療法を計5年まで実施",
    "trial_registration": "ISRCTN11883920",
    "primaryEndpoint": "原試験の主評価項目はDFS。2017年最終解析はBCFS（他原因死を打切り）を重視。",
    "result": "追跡中央値120か月、ER陽性／不明集団：10年BCFS絶対差4.0ポイント（95% CI 1.2–6.7）、HR 0.81（0.72–0.92）。OS HR 0.89（0.78–1.01、P=0.08）は有意差なし。",
    "publicationDate": "2017-05-03",
    "publicationYear": 2017,
    "publicationDateType": "online_first",
    "resultDate": "2017年最終有効性解析、追跡中央値10年",
    "sources": [
      {
        "title": "Morden et al. Long-Term Follow-Up of the Intergroup Exemestane Study",
        "url": "https://pubmed.ncbi.nlm.nih.gov/28467729/",
        "kind": "原著・抄録確認",
        "publicationDate": "2017-05-03",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "Coombes et al. Survival and safety of exemestane versus tamoxifen after 2–3 years tamoxifen: IES",
        "url": "https://pubmed.ncbi.nlm.nih.gov/17307102/",
        "kind": "原著・抄録確認",
        "publicationDate": "2007-02",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "Bliss et al. Disease-related outcomes with long-term follow-up: updated IES analysis",
        "url": "https://pubmed.ncbi.nlm.nih.gov/22042946/",
        "kind": "原著・抄録確認",
        "publicationDate": "2011-10-31",
        "checkedDate": "2026-10-06"
      }
    ],
    "caveat": "合計5年の内分泌療法内で薬剤を切り替える比較で、5年を超える延長療法ではない。BCFSとDFS、ER陽性／不明集団と全ITT集団、OSの有意性を区別する。",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "一次論文の公開抄録・書誌を確認。原著全文は未確認。公開索引の本文抜粋や試験登録による適格条件の補足は全文確認と区別する。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/28467729/"
    },
    "guidelineReferences": [
      {
        "trialId": "ies",
        "guidelineId": "jbcs-2022-web-2024",
        "organization": "JBCS",
        "section": "薬物療法 CQ3",
        "title": "閉経後ホルモン受容体陽性乳癌に対する術後内分泌療法として何が推奨されるか？",
        "url": "https://jbcs.xsrv.jp/guideline/2022/y_index/cq3/",
        "citationEvidence": "参考文献4: Bliss et al., JCO 2012（IES更新解析）。本文でIESを明示。",
        "referenceNumber": 4,
        "relationship": "explicit_citation",
        "verificationMethod": "official_guideline_body_and_references",
        "accessMethod": "JBCS公式WEB版の本文・参考文献を直接確認",
        "citedPublicationUrls": [
          "https://pubmed.ncbi.nlm.nih.gov/22042946/"
        ],
        "checkedDate": "2026-10-06",
        "interpretationNote": "引用は2012年冊子報告。2017年最終解析そのものの引用ではない。"
      }
    ],
    "stageLabel": "早期・非転移乳癌。詳細な病期別適格条件を全文で確認していないため、I–IIIの病期タグは付けない。",
    "subtypeNote": "HER2陰性に限定した比較ではない。HR陽性の検索枠に配置し、原試験に受容体不明例を含む場合は対象欄に明示。",
    "lineBuckets": [],
    "regimenAgents": [
      "exemestane",
      "tamoxifen"
    ],
    "agents": [],
    "drugClasses": [
      "内分泌療法"
    ],
    "reports": [
      {
        "id": "ies-primary-2004",
        "label": "初回主要結果",
        "publicationDate": "2004-03-11",
        "result": "DFS HR 0.68（95% CI 0.56–0.82、P<0.001）。OSは有意差なし。",
        "sourceUrl": "https://www.nejm.org/doi/full/10.1056/NEJMoa040331",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "一次論文の公開抄録・書誌を確認。原著全文は未確認。公開索引の本文抜粋や試験登録による適格条件の補足は全文確認と区別する。",
          "sourceUrl": "https://www.nejm.org/doi/full/10.1056/NEJMoa040331"
        },
        "caveat": "2017年のBCFS最終解析とは区別。"
      },
      {
        "id": "ies-2007",
        "label": "55.7か月追跡解析",
        "publicationDate": "2007-02",
        "result": "ITTのDFS HR 0.76（95% CI 0.66–0.88、P=0.0001）。OS HR 0.85（0.71–1.02、P=0.08）。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/17307102/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "一次論文の公開抄録・書誌を確認。原著全文は未確認。公開索引の本文抜粋や試験登録による適格条件の補足は全文確認と区別する。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/17307102/"
        },
        "caveat": "2007年のDFS解析。2017年BCFS結果と異なる評価項目。"
      }
    ],
    "resultInterpretation": "切替によるBCFS／DFS改善。2017年全体OSは有意差なし。",
    "totalEndocrineDuration": "両群とも計5年",
    "primaryPublication": {
      "date": "2004-03-11",
      "precision": "day",
      "sourceUrl": "https://www.nejm.org/doi/full/10.1056/NEJMoa040331",
      "note": "初回主要結果の原著。2017年最終追跡報告とは区別。"
    },
    "publicationEra": "earlier"
  },
  {
    "id": "team",
    "name": "TEAM",
    "phase": "III",
    "design": "無作為化・非盲検・第III相（1:1）",
    "setting": "early",
    "subtypes": [
      "HR+（HER2非限定）"
    ],
    "stages": [],
    "timing": [
      "adjuvant"
    ],
    "population": "閉経後のHR陽性早期乳癌。2017年10年解析は原試験9,776例のうち、長期追跡を実施した6か国の6,120例。HER2陰性に限定しない。",
    "cardPopulation": "閉経後のHR陽性早期乳癌。2017年10年解析は原試験9,776例のうち、長期追跡を実施した6か国の6,120例。HER2陰性に限定しない。",
    "experimental": "エキセメスタン単剤を5年",
    "control": "タモキシフェン2.5–3年→エキセメスタンへ切り替え、計5年（2004年プロトコル改訂後の比較）",
    "trial_registration": "NCT00279448 / NCT00032136",
    "primaryEndpoint": "10年DFS（長期解析）",
    "result": "追跡中央値9.8年：10年DFSはエキセメスタン単剤群67%、逐次群67%（HR 0.96、95% CI 0.88–1.05、P=0.39）。単剤5年の優越性は示されなかった。",
    "publicationDate": "2017-07-18",
    "publicationYear": 2017,
    "publicationDateType": "online_first",
    "resultDate": "2017年10年解析、追跡中央値9.8年",
    "sources": [
      {
        "title": "Derks et al. Adjuvant tamoxifen and exemestane in postmenopausal early breast cancer: TEAM 10-year follow-up",
        "url": "https://pubmed.ncbi.nlm.nih.gov/28732650/",
        "kind": "原著・抄録確認",
        "publicationDate": "2017-07-18",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "van de Velde et al. Adjuvant tamoxifen and exemestane in early breast cancer: TEAM",
        "url": "https://pubmed.ncbi.nlm.nih.gov/21247627/",
        "kind": "原著・抄録確認",
        "publicationDate": "2011-01-22",
        "checkedDate": "2026-10-06"
      }
    ],
    "caveat": "原計画のタモキシフェン5年対エキセメスタン5年のままではない。対照群はIES結果後に逐次療法へ改訂。長期データは全参加国を含まず、差がないことを正式な非劣性証明とは記載しない。",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "一次論文の公開抄録・書誌を確認。原著全文は未確認。公開索引の本文抜粋や試験登録による適格条件の補足は全文確認と区別する。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/28732650/"
    },
    "guidelineReferences": [],
    "stageLabel": "早期・非転移乳癌。詳細な病期別適格条件を全文で確認していないため、I–IIIの病期タグは付けない。",
    "subtypeNote": "HER2陰性に限定した比較ではない。HR陽性の検索枠に配置し、原試験に受容体不明例を含む場合は対象欄に明示。",
    "lineBuckets": [],
    "regimenAgents": [
      "exemestane",
      "tamoxifen"
    ],
    "agents": [],
    "drugClasses": [
      "内分泌療法"
    ],
    "reports": [
      {
        "id": "team-2011",
        "label": "5年解析",
        "publicationDate": "2011-01-22",
        "result": "5年時点で無病の割合はエキセメスタン単剤86%、逐次群85%（DFS HR 0.97、95% CI 0.88–1.08、P=0.60）。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/21247627/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "一次論文の公開抄録・書誌を確認。原著全文は未確認。公開索引の本文抜粋や試験登録による適格条件の補足は全文確認と区別する。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/21247627/"
        },
        "caveat": "2011年原著の冊子日。10年結果は別の追跡解析。"
      }
    ],
    "resultInterpretation": "主要比較で優越性なし。両群ともAIを含む計5年の治療。",
    "totalEndocrineDuration": "両群とも計5年",
    "primaryPublication": {
      "date": "2011",
      "precision": "year",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/21247627/",
      "note": "初回の主要結果原著（Lancet 2011）の公表年。2009年の先行学会抄録は期間分類に使用しない。"
    },
    "publicationEra": "earlier"
  },
  {
    "id": "sole",
    "name": "SOLE（IBCSG 35-07／BIG 1-07）",
    "phase": "III",
    "design": "無作為化・非盲検・第III相（優越性試験）",
    "setting": "early",
    "subtypes": [
      "HR+（HER2非限定）"
    ],
    "stages": [],
    "timing": [
      "adjuvant"
    ],
    "population": "閉経後・HR陽性・リンパ節陽性の手術可能乳癌。局所治療と術後内分泌療法4–6年を終え、無再発で登録。登録4,884例、ITT 4,851例。HER2陰性に限定しない。",
    "cardPopulation": "閉経後・HR陽性・リンパ節陽性の手術可能乳癌。局所治療と術後内分泌療法4–6年を終え、無再発で登録。登録4,884例、ITT 4,851例。HER2陰性に限定しない。",
    "experimental": "レトロゾールを5暦年延長：1–4年目は各9か月投与＋3か月休薬、5年目は12か月投与（予定実投与は計4年）",
    "control": "レトロゾールを5年間連続追加",
    "trial_registration": "NCT00553410",
    "primaryEndpoint": "DFS",
    "result": "追跡中央値84か月：7年DFS 81.4%対81.5%（間欠対連続、HR 1.03、95% CI 0.91–1.17）。間欠投与の優越性なし。有害事象は両群で同程度。",
    "publicationDate": "2021-08-10",
    "publicationYear": 2021,
    "publicationDateType": "online_first",
    "resultDate": "2021年最終解析、追跡中央値7年",
    "sources": [
      {
        "title": "Jerusalem et al. Continuous versus intermittent extended adjuvant letrozole: final SOLE and SOLE-EST results",
        "url": "https://pubmed.ncbi.nlm.nih.gov/34384882/",
        "kind": "原著・抄録確認",
        "publicationDate": "2021-08-10",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "Colleoni et al. Extended adjuvant intermittent versus continuous letrozole: SOLE",
        "url": "https://pubmed.ncbi.nlm.nih.gov/29158011/",
        "kind": "原著・抄録確認",
        "publicationDate": "2017-11-17",
        "checkedDate": "2026-10-06"
      },
      {
        "title": "SOLE prospectively defined QoL substudy / prior therapy and eligibility",
        "url": "https://pubmed.ncbi.nlm.nih.gov/30967649/",
        "kind": "関連原著・抄録／公開索引の方法抜粋",
        "publicationDate": "2019-04",
        "checkedDate": "2026-10-06"
      }
    ],
    "caveat": "延長の有無や10年対5年の比較ではなく、延長期の投与スケジュール比較。正式な非劣性試験ではないため同等性証明と表現しない。予定休薬は1–4年目の各3か月で、任意の中断期間・頻度への一般化はできない。",
    "checkedDate": "2026-10-06",
    "checkedTimezone": "UTC",
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "一次論文の公開抄録・書誌を確認。原著全文は未確認。公開索引の本文抜粋や試験登録による適格条件の補足は全文確認と区別する。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/34384882/"
    },
    "guidelineReferences": [],
    "stageLabel": "早期・非転移乳癌。詳細な病期別適格条件を全文で確認していないため、I–IIIの病期タグは付けない。",
    "subtypeNote": "HER2陰性に限定した比較ではない。HR陽性の検索枠に配置し、原試験に受容体不明例を含む場合は対象欄に明示。",
    "lineBuckets": [],
    "regimenAgents": [
      "letrozole"
    ],
    "agents": [],
    "drugClasses": [
      "内分泌療法"
    ],
    "reports": [
      {
        "id": "sole-2017",
        "label": "主解析",
        "publicationDate": "2017-11-17",
        "result": "追跡中央値60か月：5年DFS 85.8%対87.5%（間欠対連続、HR 1.08、95% CI 0.93–1.26、P=0.31）。",
        "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/29158011/",
        "articleEvidence": {
          "status": "abstract_only",
          "label": "原著論文未確認（抄録ベース）",
          "note": "一次論文の公開抄録・書誌を確認。原著全文は未確認。公開索引の本文抜粋や試験登録による適格条件の補足は全文確認と区別する。",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/29158011/"
        },
        "caveat": "間欠投与のDFS優越性は示されず。"
      }
    ],
    "resultInterpretation": "間欠投与の優越性なし。非劣性・同等性を正式に証明した試験ではない。",
    "totalEndocrineDuration": "先行4–6年＋延長5暦年。間欠群は延長期間内に予定休薬合計1年。",
    "primaryPublication": {
      "date": "2017",
      "precision": "year",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/29158011/",
      "note": "初回主要結果は2017年ASCO抄録および同年オンライン原著（2017-11-17、冊子年2018）。2021年最終追跡では分類を更新しない。"
    },
    "publicationEra": "earlier"
  },
  {
    "id": "emerge",
    "name": "EMERGE",
    "phase": "II",
    "design": "無作為化（2:1）",
    "setting": "metastatic",
    "subtypes": [
      "サブタイプ非限定"
    ],
    "stages": [],
    "timing": [],
    "lineBuckets": [],
    "agents": [
      "glembatumumab vedotin"
    ],
    "regimenAgents": [
      "glembatumumab vedotin"
    ],
    "drugClasses": [
      "ADC"
    ],
    "population": "治療抵抗性進行乳癌124例。中央IHCで腫瘍上皮または間質細胞のgpNMB発現5%以上。",
    "cardPopulation": "治療抵抗性進行乳癌124例。中央IHCで腫瘍上皮または間質細胞のgpNMB発現5%以上。",
    "experimental": "glembatumumab vedotin",
    "control": "医師選択化学療法",
    "primaryEndpoint": "ORR（試験治療群での活性評価と事前規定発現層別解析）",
    "result": "主要解析ORR 6%（5/83）対7%（3/41）、主要評価未達。TNBCかつgpNMB高発現の非計画解析は40%（4/10）対0%（0/6）。",
    "publicationDate": "2015-04-06",
    "publicationYear": 2015,
    "resultDate": "掲載解析の公表：2015-04-06（カットオフとは別）",
    "trial_registration": "NCT01156753",
    "sources": [
      {
        "title": "EMERGE 原著",
        "url": "https://pubmed.ncbi.nlm.nih.gov/25847941/",
        "kind": "原著・抄録確認"
      }
    ],
    "articleEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "公開一次抄録で確認できる範囲を記載。原著全文未確認。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/25847941/",
      "checkedDate": "2026-10-06"
    },
    "guidelineReferences": [],
    "reports": [],
    "checkedDate": "2026-10-06",
    "japanApproval": "未評価",
    "caveat": "小規模・非計画部分集団の反応を全体の陽性結果としない。後続METRICの陰性結果と併せて読む。",
    "lineLabel": "治療抵抗性・重治療歴（詳細参照）",
    "safety": "抄録では対照より血液毒性が少なく、皮疹・掻痒・神経障害・脱毛が多い。数値は抄録未記載。",
    "safetyEvidence": {
      "status": "abstract_only",
      "label": "原著論文未確認（抄録ベース）",
      "note": "公開一次抄録で確認できる範囲を記載。原著全文未確認。",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/25847941/",
      "checkedDate": "2026-10-06"
    },
    "primaryPublication": {
      "date": "2015-04-06",
      "precision": "day",
      "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/25847941/",
      "note": "初回の主要結果原著。"
    }
  }
];
