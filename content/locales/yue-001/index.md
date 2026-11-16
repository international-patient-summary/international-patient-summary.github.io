# International Patient Summary (IPS)

**國際病人摘要（International Patient Summary，IPS）**係一個全球通用嘅標準，用嚟制訂一份簡短嘅電子健康紀錄摘錄。入面載有臨床人員安全咁治療病人所需要嘅基本臨床資料。佢嘅設計目標係：

- **精簡，唔求面面俱到。**佢只係健康紀錄入面一小部分經過篩選嘅資料，而唔係成份紀錄。
- **唔限專科。**任何專科嘅臨床人員都用得。
- **唔限病況。**佢唔係綁定某一種疾病或者某一條治療路徑。
- **可以實施，又國際通用。**佢建基於全球標準同術語，所以可以喺唔同國家、語言同資訊科技系統之間使用。

簡單啲講，IPS 為一位從未見過病人嘅臨床人員回答一條問題：*「我而家要知啲乜，先可以安全咁照顧呢位病人？」*


## 點解會有 IPS

健康資訊通常鎖喺本地嘅電子健康紀錄（EHR）、國家級系統或者供應商嘅產品入面。當病人去第度求醫，例如另一間醫院、另一個地區或者另一個國家，治療佢嘅臨床人員往往睇唔到佢嘅病歷。IPS 俾大家一個共通、可攜帶嘅摘要格式。

### 核心使用情境

| 使用情境 | 說明 |
|---|---|
| **非預約同緊急護理** | 病人喺外地突然病倒或者受傷，當地臨床人員無法查閱病人喺家鄉嘅 EHR。呢個係最初、亦係最主要嘅使用情境。 |
| **跨境護理** | 旅客、移民、跨境工作者同難民可以帶住一份海外臨床人員睇得明嘅摘要。 |
| **有計劃嘅護理同轉介** | 轉介、專科會診、入院、出院，以及服務提供者之間嘅交接。 |
| **醫療旅遊同流動性** | 選擇喺另一個司法管轄區接受護理嘅病人。 |
| **病人賦權** | 病人可以用手機應用程式、入口網站或者列印本保管、查看同分享自己嘅摘要。 |


## 幾時用 IPS

當一個唔認識病人嘅人需要即刻攞到一份可靠嘅概覽，而且發送方同接收方冇共用同一個資訊科技系統嗰陣，就可以用 IPS。

### 適合嘅情況

- **緊急同突發護理**，尤其係喺外地或者跨境嘅時候。呢個正正係 IPS 當初設計嘅用途。
- **各國系統之間嘅跨境交換**，例如歐盟嘅 MyHealth@EU 服務 [[1]](#ref-1) [[2]](#ref-2)。
- **由病人自己保管嘅摘要**，例如旅客、移民、難民、朝聖者或者患有複雜病況嘅人，喺手機或者紙本上攜帶嘅摘要 [[3]](#ref-3)。
- **國家或者地區層面嘅病人摘要。**好多國家將自己嘅摘要建成 IPS 嘅一個設定檔（profile），咁就可以做國際交換 [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6)。
- **護理轉介嘅共同基線**，例如轉介、入院同出院，喺未有更詳盡嘅專科文件嗰陣用。
- **其他數據集嘅起點**，例如疫苗接種證明、研究數據或者需要同一批核心資料嘅登記冊 [[7]](#ref-7) [[8]](#ref-8)。

### 唔適合嘅情況

- **完整嘅病歷。**IPS 係特登做到精簡。當需要詳細資料嗰陣，應該用完整紀錄匯出或者專科文件。
- **專科專用文件**，例如腫瘤科治療摘要、產科紀錄或者詳細嘅出院摘要。呢啲有自己嘅標準，可以包含或者引用 IPS 嘅內容。
- **單一機構內部嘅即時臨床工作流程。**喺同一個 EHR 入面，應該直接查詢實時數據，而唔係用摘要快照。
- **法律、收費或者保險紀錄。**IPS 係臨床摘要，唔係行政或者索償紀錄。
- **需要保證完整嘅決定。**IPS 嘅完整度同最新程度，只係取決於佢嘅來源同作者。可以嘅話，重要資料一定要同病人確認。


## IPS 包含啲乜

一份 IPS 文件有兩個層次：

1. **一個記錄「邊個、乜嘢、幾時」嘅標頭：**
   - **病人：**身份、人口統計資料同聯絡方法。
   - **作者：**製作摘要嘅人、機構或者系統。
   - **保管人：**負責維護摘要嘅機構。
   - **認證人：**如果有嘅話，係邊個核實過。
   - **日期同時間：**製作嘅時間。

2. **一個分成多個章節嘅臨床主體。**章節分為必需、建議或者可選。

| 章節 | 狀態 | 典型內容 |
|---|---|---|
| **Medication Summary** | 必需 | 目前同相關嘅過往藥物、處方、劑量 |
| **Allergies and Intolerances** | 必需 | 藥物、食物同環境過敏；反應同嚴重程度 |
| **Problem List** | 必需 | 活躍嘅診斷、病況同臨床問題 |
| Immunizations | 建議 | 已接種嘅疫苗，例如破傷風、乙型肝炎、流感、COVID-19 |
| History of Procedures | 建議 | 主要手術同侵入性介入 |
| Medical Devices | 建議 | 植入物同裝置，例如心臟起搏器、支架、義肢 |
| Diagnostic Results | 建議 | 重要嘅化驗結果、影像報告、病理 |
| Vital Signs | 可選 | 血壓、心率、體重、身高、BMI |
| History of Past Illness | 可選 | 已經痊癒嘅病況同重大嘅過往問題 |
| Functional Status | 可選 | 殘疾同進行日常活動嘅能力 |
| Plan of Care | 可選 | 護理計劃同治療建議 |
| Social History | 可選 | 煙草、酒精同其他相關嘅生活方式因素 |
| History of Pregnancy | 可選 | 目前嘅懷孕狀況同懷孕史 |
| Advance Directives | 可選 | 預設醫療指示、復甦意願、同意聲明 |
| Alerts | 可選 | 其他地方放唔落嘅安全攸關警示（FHIR IPS STU 2 新增） |
| Patient Story | 可選 | 病人最睇重嘅嘢：需要、強項、價值觀、關注同偏好，用病人自己嘅講法（FHIR IPS STU 2 新增） |

**明確寫出「冇」係好重要。**一個空白嘅章節，唔能夠話俾臨床人員知病人係冇過敏，定係冇人記錄過。所以 IPS 要求有明確嘅聲明，例如*「冇已知過敏」*、*「冇目前使用嘅藥物」*或者*「資料不詳」*。


## IPS 背後嘅標準

IPS 係一套互相協調嘅標準。ISO 同 CEN 標準定義病人摘要*必須包含啲乜*。HL7 實施指引就定義*點樣編碼*。

| 標準 | 機構 | 角色 |
|---|---|---|
| **EN 17269** | CEN (European Committee for Standardization) | 抽象 IPS 數據集，2019 年發布 |
| **ISO 27269** | ISO (International Organization for Standardization) | 抽象 IPS 數據集嘅國際版本，2021 年發布 |
| **CEN/TS 17288** | CEN | 為跨境使用而實施 IPS 嘅指引 |
| **HL7 FHIR IPS Implementation Guide** | HL7 International | 現代化、對 API 友善嘅編碼，亦係主要嘅實施格式。STU 2（2.0.x）新增咗 Alerts 同 Patient Story 章節，容許空白章節，釐清咗 `$summary`，並轉用 SNOMED CT IPS 術語 [[9]](#ref-9)。 |
| **HL7 CDA IPS Implementation Guide** | HL7 International | 以 XML 文件為本嘅編碼，喺現有嘅國家同歐洲基礎設施入面好普遍 |

呢項工作由 **Joint Initiative Council for Global Health Informatics Standardization (JIC)** 協調。JIC 集合咗 ISO、CEN、HL7、SNOMED International、IHE 等組織。IPS 源自 2016 年歐盟同美國喺跨境健康數據方面嘅合作，而家得到全球各國政府同數碼健康計劃支持。


## IPS 點樣用 HL7 FHIR 編碼

喺 FHIR 入面，一份 IPS 係一個 `document` 類型嘅 **`Bundle`**：

```
Bundle (type = document)
├── Composition   ← the "table of contents": header + sections
│     type = LOINC 60591-5 "Patient summary Document"
│     section: Medication Summary   (LOINC 10160-0)
│     section: Allergies            (LOINC 48765-2)
│     section: Problem List         (LOINC 11450-4)
│     section: ...
├── Patient
├── Practitioner / Organization     (author, custodian, attester)
├── MedicationStatement / MedicationRequest + Medication
├── AllergyIntolerance
├── Condition
├── Immunization, Procedure, DeviceUseStatement, Observation, ...
└── ...
```

重點技術特點：

- **每個章節都有人睇得明嘅敘述文字。**臨床人員用普通瀏覽器就可以睇到 IPS，唔使 FHIR 軟件。
- **每個章節亦有編碼條目**，即係軟件可以處理、翻譯同核對嘅結構化 FHIR 資源。
- **設定檔（Profile）限制基礎 FHIR 資源。**例如 *Patient (IPS)* 同 *AllergyIntolerance (IPS)* 定義咗最少數據同「must support」元素。
- **`$summary` 操作**（`GET [base]/Patient/[id]/$summary`）要求 FHIR 伺服器按需要為某位病人產生 IPS。
- **IPS 可以簽署，而且自成一體。**一份完整嘅文件可以作為一個單位去儲存、傳送、簽署同驗證。


## 術語

共用嘅代碼系統令 IPS 可以跨語言、跨國家閱讀：

| 術語 | 用途 |
|---|---|
| **SNOMED CT** | 問題、過敏、程序、裝置、臨床發現。有免費嘅 **SNOMED CT IPS Terminology** 子集供 IPS 使用，連非成員國都可以用。 |
| **LOINC** | 文件同章節類型、化驗項目、生命體徵 |
| **ATC** 同其他藥物代碼系統 | 藥品同活性成分 |
| **UCUM** | 計量單位 |
| **ISO 同 HL7 值集** | 國家、語言、行政性別、缺失同未知嘅原因 |

由於條目係編碼過嘅，接收系統可以用英文標籤顯示一份以葡萄牙文寫成嘅 IPS。編碼嘅含義保持不變。


## 病人同臨床人員點樣用 IPS

IPS 可以由 EHR、國家健康紀錄服務、病人入口網站或者個人健康應用程式產生。然後可以用幾種方式遞送：

- **系統對系統：**透過 FHIR REST API、國家基礎設施或者跨境閘道，例如歐盟嘅 MyHealth@EU 網絡。
- **由病人傳遞分享：**病人將摘要存喺錢包或者健康應用程式入面，需要嗰陣就分享。
- **SMART Health Links：**一個 QR 碼或者網址，俾臨床人員有時限（亦可以設密碼保護）嘅權限去睇一份加密嘅 IPS。臨床人員可以用普通網頁瀏覽器打開佢。
- **紙本或者 PDF：**列印出嚟嘅敘述版本，喺其他方法都用唔到嗰陣做後備。

**CommonHealth** 呢類應用程式令病人可以收集自己嘅紀錄，並且透過 SMART Health Links 分享 IPS。

一個典型嘅緊急情況：

1. 一位旅客喺外國暈倒。
2. 旅客或者同行者喺手機出示一個 QR 碼。
3. 急症室醫生掃描之後，幾秒鐘內就睇到旅客嘅藥物、過敏同活躍嘅問題。
4. 醫生避開咗一個危險嘅藥物相互作用，安全咁治療病人。


## 原則同設計選擇

- **安全第一。**內容係按臨床相關性揀選，而唔係追求完整。
- **預設全球通用，擴充先至本地化。**各國建立國家設定檔，例如歐盟、澳洲或者加拿大嘅版本，喺唔破壞國際核心嘅前提下加入額外要求。
- **人睇得，機器處理得。**敘述文字同編碼數據並存。
- **免費同開放。**HL7 IPS 規格同 IPS SNOMED CT 子集都係免費提供，以降低採用門檻。
- **私隱同同意。**存取權限受本地法律同病人嘅同意所規管。SMART Health Links 呢類機制令病人保持掌控。


## 點樣用 IPS

### 俾病人

1. **要求一份。**問你嘅診所、醫院、國家健康入口網站或者健康應用程式，可唔可以製作 IPS，或者以 IPS 為基礎嘅國家病人摘要。
2. **檢查佢。**喺你健康嗰陣睇一睇。有乜錯漏，尤其係過敏同藥物，要報告。
3. **隨身攜帶。**存喺健康應用程式或者錢包入面，做成 SMART Health Link QR 碼，或者列印出嚟放喺旅遊文件入面。
4. **保持最新。**有新診斷、新嘅長期藥物、做完手術或者有植入物之後，就攞一份新嘅。
5. **有意識地分享。**俾治療緊你嘅臨床人員睇。SMART Health Link 可以過期，亦可以要求密碼，所以你可以控制邊個睇到、睇幾耐 [[10]](#ref-10)。

### 俾臨床人員

1. **先睇標頭。**邊個寫、幾時寫，同埋有冇人核實過。舊咗或者未經核實嘅摘要要更加小心。
2. **先睇必需嘅章節：**過敏、藥物同問題。
3. **「已知冇」同「冇記錄」要分開處理。**「冇已知過敏」係一項臨床聲明。空白或者「不詳」嘅章節就唔係。
4. **確認重要資料**，只要得，就同病人或者佢嘅同行者確認。
5. **善用編碼數據。**如果你嘅系統支援，編碼條目可以令摘要用你嘅語言顯示，並且對照藥物相互作用同過敏規則去檢查。
6. **唔好假設資料齊全。**IPS 係安全網，唔係完整病史。

### 俾實施人員

1. **揀規格。**用最新嘅 HL7 FHIR IPS Implementation Guide（STU 2），或者你國家以佢為基礎嘅國家設定檔。如果係以 CDA 為本嘅基礎設施，就用 CDA IPS 指引 [[9]](#ref-9) [[11]](#ref-11)。
2. **對應你嘅數據。**將本地數據對應到 IPS 設定檔：`Patient`、`AllergyIntolerance`、`MedicationStatement`、`Condition` 等等。大部分工作都喺呢個對應過程入面。
3. **對應你嘅術語。**將本地代碼對應到 SNOMED CT、LOINC 同藥物代碼系統。SNOMED CT IPS Terminology 可以免費用於呢個目的 [[12]](#ref-12)。
4. **產生文件。**支援 `$summary` 操作，或者自己建立 `Bundle` 同 `Composition`。每個章節都要包含可閱讀嘅敘述文字，並且有明確嘅「冇已知」或者「冇資料」聲明。
5. **驗證。**用 FHIR Validator 同一套符合性測試工具（例如 Inferno IPS Test Kit）檢查每一份產生嘅文件 [[13]](#ref-13)。
6. **簽署同分享。**決定文件點樣簽署、儲存同傳送：API、文件登記冊、跨境閘道，定係 SMART Health Link。
7. **安全咁使用。**作為接收方，就算處理唔晒所有編碼條目，都要顯示敘述文字，要令來源同作者清楚可見，絕對唔好靜靜雞將收到嘅數據合併入本地紀錄。
8. **同其他人測試。**喺正式上線之前，喺 IHE 同 HL7 Connectathon 同其他供應商同國家互通測試。

### 俾政府同健康機構

1. **採用國家設定檔**，建基於 IPS，而唔係另起爐灶搞一個獨立格式，咁國家摘要預設就係國際通用 [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6)。
2. **釐清管治：**邊個可以建立、更新同認證摘要，邊個要對佢嘅準確性負責。
3. **釐清術語授權：**SNOMED CT 會員資格，或者使用免費嘅 IPS 子集。
4. **釐清身份、同意同信任：**點樣識別病人、點樣記錄同意，以及用邊個信任框架（例如 MyHealth@EU 或者 WHO Global Digital Health Certification Network）去驗證文件 [[1]](#ref-1) [[14]](#ref-14)。
5. **公開你已建成嘅嘢**，放入 IPS Implementation Registry，等其他人可以參考 [[15]](#ref-15)。


## 將 IPS 整合到醫療系統

IPS 好少係一個獨立系統。佢係對已經存在於 EHR、健康資訊交換平台、國家紀錄同個人健康應用程式入面嘅數據嘅一個視圖。

| 整合模式 | 運作方式 | 例子 |
|---|---|---|
| **由 EHR 產生** | EHR 按要求用自己嘅數據建立 IPS，通常透過 FHIR `$summary` 操作。 | EHR 供應商同 FHIR 伺服器，例如有 IPS 產生器模組嘅 HAPI FHIR |
| **國家或者地區紀錄** | 國家病人摘要服務儲存 IPS 嘅設定檔，並且提供俾獲授權嘅服務提供者。 | 加拿大嘅 PS-CA、澳洲嘅 AU Patient Summary、瑞士電子病人紀錄配合 CH IPS [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6) |
| **跨境閘道** | 每個國家都設有國家聯絡點。佢將本國嘅摘要轉換成協定好嘅交換格式，傳過邊境，而接收國就用當地語言顯示。 | MyHealth@EU National Contact Points for eHealth [[1]](#ref-1) [[2]](#ref-2) |
| **區域交換網絡** | 各國衛生部透過國家 FHIR 伺服器，按共同嘅區域指引交換 IPS 文件。 | RACSEL 嘅 IPS-LAC，以及拉丁美洲同加勒比海地區嘅 Pan American Highway for Digital Health (PH4H) [[16]](#ref-16) |
| **由病人傳遞** | 病人將 IPS 存喺應用程式或者錢包入面，用 QR 碼或者 SMART Health Link 分享。 | CommonHealth；WHO 信任網絡為朝聖而做嘅 IPS 工作 [[10]](#ref-10) [[14]](#ref-14) |
| **基於 API 嘅存取** | 應用程式透過 FHIR API 為獲授權嘅病人攞取 IPS。 | International Patient Access (IPA)；美國嘅網絡，例如 Flexpa，佢喺 CMS Interoperability Framework 下加入咗 IPS 支援 [[17]](#ref-17) [[18]](#ref-18) |

需要規劃嘅整合點：

- **文件分享：**IHE 設定檔，例如 MHD（FHIR）同 XDS（文件登記冊），用嚟儲存同搜尋 IPS 文件。IHE IPS 內容設定檔加入咗符合性同測試規則 [[11]](#ref-11)。
- **病人身份：**IHE PIXm 同 PDQm，或者國家識別碼，用嚟喺唔同系統之間配對病人。
- **現有文件：**好多系統已經產生 CDA、C-CDA 或者國家摘要。將呢啲對應到 IPS 通常比由頭開始容易，但要留意基數、值集同代碼系統嘅差異。
- **國家設定檔：**國家核心規格，例如 US Core、AU Core、CH Core 或者 JP Core，可能同 IPS 有分別。國家病人摘要設定檔會調和兩者 [[5]](#ref-5) [[6]](#ref-6) [[19]](#ref-19)。
- **翻譯同顯示：**接收方應該顯示敘述文字，並且用代碼喺接收方語言嘅顯示名稱去翻譯編碼條目。
- **安全：**使用 TLS、需要時用簽署文件、審計日誌（例如 IHE ATNA 或者 BALP），以及同意相關嘅存取控制。


## 目前嘅採用情況

IPS 已經由試點行入國家同地區計劃。狀況變化好快，所以最新情況請睇連結嘅來源。

- **IPS Implementation Registry。**IPS 社群維護一個公開嘅實施登記冊。2026 年中，登記冊列出 34 個項目，由阿根廷由服務提供者主導嘅 IPS-LAC 項目，到越南嘅 Better Health Program [[15]](#ref-15)。
- **FHIR 生態。**喺 HL7 International 同 Firely 2025 年嘅 State of FHIR 調查入面，有 42 位受訪者話 IPS 係佢哋國家 FHIR 規格嘅基礎，多過任何其他國際指引 [[20]](#ref-20)。
- **研究。**一項 2025 年嘅 IPS 採用研究訪問咗持份者，佢哋指出更好嘅護理質素同病人安全係主要好處 [[21]](#ref-21)。

| 國家或者地區 | 狀況 |
|---|---|
| **歐盟同歐洲經濟區** | MyHealth@EU 喺各國之間交換病人摘要同電子處方。2026 年歐盟委員會一份簡報指出，17 個成員國加挪威已經上線，大部分其餘國家都計劃加入 [[2]](#ref-2) [[22]](#ref-22)。EHDS 規例規定病人摘要交換喺 2029 年前必須實行 [[23]](#ref-23)。 |
| **加拿大** | 泛加拿大病人摘要（PS-CA）由 Canada Health Infoway 喺 2022 年 10 月批准，建基於 IPS，並加入加拿大嘅調整 [[4]](#ref-4)。 |
| **澳洲** | AU Patient Summary 建基於 IPS 同 AU Core，由 HL7 Australia 透過 Sparked 計劃開發 [[5]](#ref-5) [[24]](#ref-24)。 |
| **瑞士** | HL7 Switzerland 嘅 CH IPS 2.0.0（試用）建基於 IPS 同 CH Core。另一個設定檔加入瑞士電子病人紀錄所需嘅內容 [[6]](#ref-6)。 |
| **美國** | IPS 冇聯邦強制要求。美國用 US Core 同 USCDI。聯邦機構有參與國際 IPS 工作，亦有部分網絡自願支援 IPS [[18]](#ref-18)。 |
| **拉丁美洲同加勒比海地區** | RACSEL 各國衛生部使用區域性嘅 IPS-LAC 指引。2023 年，16 個國家喺聖保羅嘅一次 connectathon 交換 IPS-LAC 文件 [[16]](#ref-16)。 |
| **日本** | 研究人員用 JP Core 建立並驗證咗一個以 IPS 為基礎、針對日本常見使用情境嘅病人摘要應用程式 [[19]](#ref-19)。 |
| **台灣同菲律賓** | 一份 2025 年嘅實施報告描述一個用 FHIR、並同 IPS 對齊嘅跨境個人健康紀錄 [[25]](#ref-25)。 |
| **G7** | 2021 年 G7 衛生部長承諾朝 IPS 方向努力，並發表咗一份 IPS 路線圖 [[26]](#ref-26)。 |
| **WHO** | WHO Global Digital Health Certification Network 包括以 IPS 為基礎嘅信任領域，例如為朝聖而設嘅可驗證 IPS [[14]](#ref-14)。 |


## 各國同地區嘅法律、規例同政策

IPS 係標準，唔係法律。法律決定一個國家係咪必須交換病人摘要、用乜格式，以及喺乜私隱規則下進行。呢度只係摘要，唔係法律意見。請務必查閱法律嘅最新文本。

| 司法管轄區 | 法律或政策 | 對 IPS 嘅意義 |
|---|---|---|
| **歐盟** | **European Health Data Space (EHDS) Regulation, (EU) 2025/327。**2025 年 3 月 5 日公布；2025 年 3 月 26 日生效 [[23]](#ref-23) [[27]](#ref-27)。 | 病人摘要係「優先類別」。以歐洲 EHR 交換格式進行嘅交換，必須喺 2029 年前喺每個成員國都行得通。醫學影像、檢驗結果同出院報告喺 2031 年前跟進 [[28]](#ref-28)。病人摘要嘅格式以 HL7 IPS 為基礎。 |
| **歐盟** | **Directive 2011/24/EU**，關於病人喺跨境醫療保健方面嘅權利 [[29]](#ref-29)。 | 成立咗 eHealth Network，佢協定咗 MyHealth@EU 背後嘅病人摘要指引。 |
| **歐盟** | **General Data Protection Regulation (GDPR), (EU) 2016/679** [[30]](#ref-30)。 | 健康數據屬特殊類別。每次 IPS 交換都需要合法依據同適當嘅保障措施。 |
| **美國** | **21st Century Cures Act 同資訊阻擋規則** [[31]](#ref-31)；自願參加嘅 **CMS Interoperability Framework**（2025）[[17]](#ref-17)。 | 冇法律規定要用 IPS。法律要求喺使用 US Core 同 USCDI 嘅前提下，提供電子健康資訊嘅存取同交換。IPS 支援係自願嘅。 |
| **加拿大** | 各省同地區嘅健康資訊法律。聯邦嘅 **Connected Care for Canadians Act**（Bill C-72）喺 2024 年提出，但喺 2025 年國會休會之前未能通過。 | PS-CA 係泛加拿大規格，唔係法律要求。採用工作由各省同地區連同 Canada Health Infoway 帶領 [[4]](#ref-4)。 |
| **英國** | **Data (Use and Access) Act 2025** [[32]](#ref-32)。 | 包括為醫療同成人社會護理資訊科技制訂資訊標準嘅權力。英國係 2021 年 G7 IPS 承諾嘅主辦國 [[26]](#ref-26)。 |
| **澳洲** | **My Health Records Act 2012** 同 2025 年嘅「預設分享」修訂。 | AU Patient Summary 係透過 Sparked 開發嘅國家規格 [[5]](#ref-5) [[24]](#ref-24)。 |
| **瑞士** | **2015 年 6 月 19 日嘅電子病人紀錄聯邦法（EPRA, SR 816.1）**，自 2017 年 4 月 15 日起生效 [[33]](#ref-33)。 | CH IPS 包括一個適用於瑞士電子病人紀錄文件嘅設定檔 [[6]](#ref-6)。 |
| **拉丁美洲同加勒比海地區** | 透過 RACSEL 同 PH4H 達成嘅區域協議，美洲開發銀行支持建立區域法律框架 [[16]](#ref-16)。 | IPS-LAC 係協定咗用於跨境交換嘅區域格式。 |
| **G7** | **衛生部長公報**，牛津，2021 年 6 月，同 **G7 IPS 路線圖**，2021 年 12 月 [[26]](#ref-26) [[34]](#ref-34)。 | 係朝 IPS 同病人存取方向努力嘅政治承諾，唔係具約束力嘅法律。 |


## 優點同缺點

| 優點 | 缺點 |
|---|---|
| **更安全嘅非預約護理。**臨床人員幾秒鐘內就睇到過敏、藥物同問題。 | **質素取決於來源。**過時或者錯誤嘅來源數據會產生過時或者錯誤嘅摘要。 |
| **一個格式，通行全球。**一次實施就可以滿足國家同跨境需要。 | **各國有差異。**國家設定檔會加入規則，所以喺一個國家「有效」嘅 IPS，可能要再做嘢先會喺另一個國家被接受。 |
| **建基於開放、成熟嘅標準：**ISO、CEN、HL7 FHIR 同 CDA、SNOMED CT 同 LOINC。 | **術語負擔。**將本地代碼對應到 SNOMED CT 同 LOINC 係艱巨嘅工作，而且完整嘅 SNOMED CT 超出免費 IPS 子集之外要領取牌照。 |
| **可讀又可計算。**敘述文字俾人睇，編碼數據俾軟件同翻譯用。 | **如果產生器唔小心，敘述文字同編碼數據可能會有出入**，接收方可能信錯嗰一個。 |
| **病人賦權。**病人可以保管同分享自己嘅摘要。 | **私隱同同意風險。**可攜帶嘅摘要好敏感，各國嘅法律同同意模式都唔同。 |
| **免費規格**同免費 IPS 術語降低成本 [[12]](#ref-12)。 | **版本混亂。**STU 1、STU 1.1 同 STU 2 並存，而 EHDS 格式引用較早嘅版本 [[28]](#ref-28)。 |
| **可以重用**於疫苗接種證明、研究同登記冊 [[7]](#ref-7) [[8]](#ref-8)。 | **特登做到精簡。**唔能夠取代完整紀錄或者專科文件，而二次使用嘅缺口需要擴充 [[7]](#ref-7)。 |
| **有力嘅支持**，來自各國政府、歐盟、G7、WHO 同標準組織。 | **採用情況參差。**好多國家同供應商仲喺試行階段，病人嘅認知度亦低。 |


## 計劃同未來方向

- **歐盟，2029：**喺 EHDS 下，所有歐盟成員國都實行病人摘要同電子處方交換 [[23]](#ref-23) [[28]](#ref-28)。
- **歐盟，2031：**醫學影像、化驗結果同出院報告加入歐洲 EHR 交換格式 [[28]](#ref-28)。
- **MyHealth@EU 擴展：**更多國家加入，同埋為化驗結果、出院報告同醫學影像推出新服務 [[2]](#ref-2) [[22]](#ref-22)。
- **FHIR IPS STU 2 採用：**實施人員轉用 Alerts 同 Patient Story 章節、明確嘅空白章節，以及 SNOMED CT IPS 術語 [[9]](#ref-9)。
- **澳洲：**計劃喺 2026 年發布 AU Patient Summary Release 1 [[24]](#ref-24)。
- **IPS Best Practices Project：**一項社群工作，記錄經驗教訓，2026 年開始。
- **WHO 信任網絡：**更多以 IPS 為基礎嘅信任領域，用於可驗證、可攜帶嘅健康文件 [[14]](#ref-14)。
- **SMART Health Links：**透過 HL7 標準化，用於由病人控制嘅分享 [[10]](#ref-10)。
- **拉丁美洲同加勒比海地區：**透過 PH4H 擴大 IPS-LAC 交換 [[16]](#ref-16)。
- **研究同二次使用：**將病人摘要擴展用於臨床研究同人工智能，同時保持核心精簡 [[7]](#ref-7)。


## 詞彙表

| 詞語 | 意思 |
|---|---|
| **IPS** | International Patient Summary |
| **FHIR** | Fast Healthcare Interoperability Resources，HL7 嘅現代化 API 標準 |
| **CDA** | Clinical Document Architecture，HL7 嘅 XML 文件標準 |
| **IG** | Implementation Guide，一套用嚟應用標準嘅設定檔同規則 |
| **Profile** | 針對特定用途而受到限制嘅 FHIR 資源版本 |
| **SNOMED CT** | Systematized Nomenclature of Medicine – Clinical Terms |
| **LOINC** | Logical Observation Identifiers Names and Codes |
| **SMART Health Links** | 透過連結或者 QR 碼分享健康數據嘅標準 |
| **JIC** | Joint Initiative Council for Global Health Informatics Standardization |


## 了解更多

- HL7 FHIR IPS Implementation Guide: <https://hl7.org/fhir/uv/ips/>
- IPS continuous build: <https://build.fhir.org/ig/HL7/fhir-ips/>
- International Patient Summary project site: <https://international-patient-summary.net/>
- ISO 27269 (Health informatics — International patient summary): <https://www.iso.org/standard/79491.html>
- SNOMED CT IPS Terminology: <https://www.snomed.org/international-patient-summary-terminology>
- SMART Health Links: <https://docs.smarthealthit.org/smart-health-links/>


## 資源

呢啲連結涵蓋有關 IPS 嘅來源、規格、軟件、項目、影片、書籍同研究。大部分喺撰寫本頁時已經查核過。有幾個出版商嘅網站會封鎖自動查核，嗰啲就標示咗 *（未查核）*。

### 官方規格同標準

- [HL7 FHIR IPS Implementation Guide, current published version](https://hl7.org/fhir/uv/ips/) 係具權威性嘅 FHIR 規格。
- [HL7 FHIR IPS Implementation Guide, STU 2](https://hl7.org/fhir/uv/ips/STU2/)
- [HL7 FHIR IPS Implementation Guide, STU 1.1](https://hl7.org/fhir/uv/ips/STU1.1/)
- [HL7 FHIR IPS publication history](https://www.hl7.org/fhir/uv/ips/history.html) 列出每一個已發布嘅版本。
- [HL7 FHIR IPS continuous build](https://build.fhir.org/ig/HL7/fhir-ips/) 係最新、未經投票嘅進行中工作。
- [Structure of the International Patient Summary](https://hl7.org/fhir/uv/ips/en/Structure-of-the-International-Patient-Summary.html) 解釋章節同設定檔。
- [IPS design conventions](https://build.fhir.org/ig/HL7/fhir-ips/en/Design-Conventions.html) 涵蓋 must-support、缺失數據同敘述文字。
- [IPS generation and data inclusion](https://build.fhir.org/ig/HL7/fhir-ips/en/Generation-and-Data-Inclusion.html) 涵蓋 `$summary` 同點樣揀選內容。
- [HL7 CDA IPS Implementation Guide, continuous build](https://build.fhir.org/ig/HL7/CDA-IPS/)
- [HL7 CDA IPS product brief](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=483)
- [ISO 27269, Health informatics — International patient summary](https://www.iso.org/standard/79491.html) *（未查核）*
- [ISO/TC 215 Health informatics committee](https://www.iso.org/committee/54960.html) *（未查核）*
- [IHE FHIR International Patient Summary profile (FIIO)](https://profiles.ihe.net/PCC/FIIO/volume-1.html)
- [IHE PCC International Patient Summary supplement, 2020 (PDF)](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS_Rev1-0_PC_2020-03-17.pdf)
- [HL7 SMART Health Cards and Links Implementation Guide](https://hl7.org/fhir/uv/smart-health-cards-and-links/)
- [SMART Health Links documentation](https://docs.smarthealthit.org/smart-health-links/)
- [HL7 FHIR International Patient Access (IPA)](https://hl7.org/fhir/uv/ipa/) 係供病人 API 存取用嘅姊妹規格。
- [HL7 FHIR R4 base specification](https://hl7.org/fhir/R4/)，IPS 係建基於呢份規格。

### 原始碼儲存庫

- [HL7/fhir-ips](https://github.com/HL7/fhir-ips) 存放以 FHIR Shorthand 寫成嘅 FHIR IPS IG 原始碼。
- [HL7/cda-ips](https://github.com/HL7/cda-ips) 存放 CDA IPS IG 原始碼。
- [hl7-eu/eps](https://github.com/hl7-eu/eps) 存放 HL7 Europe Patient Summary 原始碼。
- [hl7ch/ch-ips](https://github.com/hl7ch/ch-ips) 存放瑞士 IPS，附帶開發中嘅檢視器同產生器。
- [GitHub topic: international-patient-summary](https://github.com/topics/international-patient-summary) 列出社群嘅儲存庫。

### 國家同地區嘅調整版本

- [HL7 Europe Patient Summary (EPS), continuous build](https://build.fhir.org/ig/hl7-eu/eps/)
- [AU Patient Summary (Australia), continuous build](https://build.fhir.org/ig/hl7au/au-fhir-ps/)
- [Trillium II IPS structure (HL7 Europe)](https://hl7.eu/fhir/build/trillium2/site/ipsStructure.html) 來自幫助啟動 IPS 嘅歐盟–美國項目。
- [eHealth Suisse](https://www.ehealthsuisse.ch/) 係瑞士嘅數碼健康專業中心，亦負責推動 IPS 採用。
- [MyHealth@EU, cross-border digital health services](https://health.ec.europa.eu/ehealth-digital-health-and-care/electronic-cross-border-health-services_en)
- [Xt-EHR Joint Action](https://www.xt-ehr.eu/) 籌備歐洲健康數據空間嘅格式，包括病人摘要。

### 軟件同工具

- [IPS Viewer](https://www.ipsviewer.com)（[source: jddamore/IPSviewer](https://github.com/jddamore/IPSviewer)）係開源、以瀏覽器運行嘅 IPS 檢視器。
- [uwcirg/shl-ips-viewer](https://github.com/uwcirg/shl-ips-viewer) 用嚟檢視透過 SMART Health Link 分享嘅 IPS。
- [smart-on-fhir/smart-health-links](https://github.com/smart-on-fhir/smart-health-links) 係 SMART Health Links 嘅參考實作。
- [HAPI FHIR IPS generator](https://hapifhir.io/hapi-fhir/docs/server_ips/introduction.html)（[source: hapifhir/hapi-fhir](https://github.com/hapifhir/hapi-fhir)）係實作 `$summary` 嘅開源 Java 伺服器模組。
- [HAPI FHIR JPA server IPS documentation](https://hapifhir.io/hapi-fhir/docs/server_jpa/ips.html)
- [Inferno IPS Test Kit](https://inferno.healthit.gov/test-kits/ips)（[source: inferno-framework/ips-test-kit](https://github.com/inferno-framework/ips-test-kit)）係開源嘅符合性測試工具。
- [FHIR Validator](https://validator.fhir.org/) 用嚟對照 IG 設定檔驗證 IPS bundle。
- [Simplifier: hl7.fhir.uv.ips package](https://simplifier.net/packages/hl7.fhir.uv.ips) 有套件、設定檔同例子。
- [FHIR package registry](https://registry.fhir.org/)
- [FHIR Shorthand (FSH) School](https://fshschool.org/) 教授編寫 IPS IG 所用嘅語言。
- [CommonHealth](https://www.commonhealth.org/) 係一個病人應用程式，可以產生 IPS，並透過 SMART Health Links 分享。
- [WHO SMART Trust](https://github.com/WorldHealthOrganization/smart-trust) 係 WHO Global Digital Health Certification Network 嘅信任框架。

### 組織同項目

- [International Patient Summary project site](https://international-patient-summary.net/) 有新聞、採用報告同教育資源。
- [IPS for health IT developers](https://international-patient-summary.net/health-it-developer/)
- [HL7 International](https://www.hl7.org/)
- [IHE International](https://www.ihe.net/)
- [SNOMED International](https://www.snomed.org/)
- [SNOMED CT IPS Terminology](https://www.snomed.org/international-patient-summary-terminology) 係供 IPS 使用嘅免費子集。
- [LOINC](https://loinc.org/) *（未查核）*
- [Joint Initiative Council for Global Health Informatics Standardization (JIC)](http://www.jointinitiativecouncil.org/)
- [Global Digital Health Partnership (GDHP)](https://gdhp.health/)
- [WHO SMART Guidelines](https://smart.who.int/)
- [WHO Global Digital Health Certification Network](https://www.who.int/initiatives/global-digital-health-certification-network)

### 社群同活動

- [chat.fhir.org](https://chat.fhir.org/) 係 FHIR 社群嘅聊天室，有活躍嘅 IPS 頻道。
- [HL7 FHIR Connectathons](https://www.hl7.org/events/fhir-connectathon/)
- [IHE Connectathons](https://www.ihe.net/participate/connectathon/)

### 影片

- [HIMSS20: IPS for computable care guidelines in 200 seconds or less (IHE International, YouTube)](https://www.youtube.com/watch?v=xjEzGM8kBPw)
- [IHE International YouTube channel](https://www.youtube.com/@IHEIntl) 有 Connectathon 專題討論同 IPS 環節。
- [IPS project site news](https://international-patient-summary.net/) 連結到好多錄影嘅網上研討會，包括：
  - the IPS panel at the IHE North America Connectathon, 2024
  - the IPS session at FHIR DevDays 2023
  - Grahame Grieve on IPS and IPA, IHE Connectathon Montreux 2022
  - the SNOMED CT Expo 2022 keynote
  - Matthew Rahn on IPS in the GDHP
  - the HL7 "Global Passport" cross-border webinar
- [YouTube search: International Patient Summary](https://www.youtube.com/results?search_query=international+patient+summary)

### 書籍

- Tim Benson and Grahame Grieve, [*Principles of Health Interoperability: FHIR, HL7 and SNOMED CT*](https://link.springer.com/book/10.1007/978-3-030-56883-2), 4th edition, Springer, 2020。內容涵蓋 FHIR、臨床摘要資源同術語。

### 研究論文同文章

- Laleci Erturkmen G. B., Sinaci A. A., Namli T., Boonstra M., et al., "[An assessment of the European Patient Summary for clinical research: a case study in cardiology](https://doi.org/10.3389/fmed.2024.1481551)", *Frontiers in Medicine*, 2024.
- Lee H., Huang J., Huang S., Chen W., et al., "[Implementing a Cross-Border Next-Generation Personal Health Record in the Philippines and Taiwan: An Implementation Case Report Using Health Level 7 International Fast Healthcare Interoperability Resources](https://doi.org/10.2196/56272)", *JMIR Formative Research*, 2025.
- Song C., Nakayama M., "[Implementation of a Patient Summary Web Application According to the International Patient Summary and Validation in Common Use Cases in Japan](https://doi.org/10.1007/s10916-023-01993-6)", *Journal of Medical Systems*, 2023.
- Schippers D., Spil T., Stegwee R., Folmer E., Donnelly S., "[The adoption and diffusion of the International Patient Summary](https://doi.org/10.24251/hicss.2025.425)", *Proceedings of the 58th Hawaii International Conference on System Sciences (HICSS)*, 2025.
- da Silva Carvalho N., Papadimitriou A., Stegwee R., Gille H., et al., "[Accelerating European electronic health record exchange format (EEHRxF) implementation across Europe: a policy perspective](https://doi.org/10.3389/fmed.2025.1648170)", *Frontiers in Medicine*, 2025.
- Kay S., Cangioli G., Nusbaum M., "[The International Patient Summary and the extensibility requirement](https://international-patient-summary.net/the-international-patient-summary-and-the-extensibility-requirement/)", *Studies in Health Technology and Informatics* (pHealth), 2020.
- D'Amore J., Cangioli G., Hausam R., "[Advancing the International Patient Summary](https://international-patient-summary.net/advancing-the-international-patient-summary/)"
- "[Towards the Austrian Patient Summary](https://international-patient-summary.net/towards-the-austrian-patient-summary/)", *Studies in Health Technology and Informatics* (dHealth).
- "[Revival of the International Patient Summary (IPS)](https://smiledigitalhealth.com/our-blog/revival-of-the-international-patient-summary-ips)", Smile Digital Health blog.
- [PubMed search: "international patient summary"](https://pubmed.ncbi.nlm.nih.gov/?term=%22international+patient+summary%22) 搜尋經同行評審嘅文獻。


## References

文中嘅編號引用，例如 [1]，會連結到下面對應嘅條目。連結喺 2026 年 11 月查核過。法律、採用數字同版本都會變，所以請查閱來源了解最新情況。

1. <a id="ref-1"></a>European Commission. "[Electronic cross-border health services (MyHealth@EU)](https://health.ec.europa.eu/ehealth-digital-health-and-care/electronic-cross-border-health-services_en)". Directorate-General for Health and Food Safety.
2. <a id="ref-2"></a>European Commission. "[My rights over my health data](https://health.ec.europa.eu/ehealth-digital-health-and-care/my-rights-over-my-health-data_en)". Directorate-General for Health and Food Safety.
3. <a id="ref-3"></a>World Health Organization. "[Global Digital Health Certification Network](https://www.who.int/initiatives/global-digital-health-certification-network)".
4. <a id="ref-4"></a>Canada Health Infoway. "[What is IPS and Patient Summary? Pan-Canadian Patient Summary (PS-CA)](https://infoscribe.infoway-inforoute.ca/x/XIElE)". InfoScribe.
5. <a id="ref-5"></a>HL7 Australia. "[AU Patient Summary Implementation Guide](https://hl7.org.au/fhir/ps)".
6. <a id="ref-6"></a>HL7 Switzerland. "[CH IPS (R4) Implementation Guide](https://fhir.ch/ig/ch-ips/index.html)".
7. <a id="ref-7"></a>Laleci Erturkmen G. B., Sinaci A. A., Namli T., Boonstra M., et al. "An assessment of the European Patient Summary for clinical research: a case study in cardiology". *Frontiers in Medicine*, 2024. [doi:10.3389/fmed.2024.1481551](https://doi.org/10.3389/fmed.2024.1481551).
8. <a id="ref-8"></a>World Health Organization. "[GDHCN Trust Network: Personal Health Wallet](https://build.fhir.org/ig/WorldHealthOrganization/smart-trust-phw/)". Continuous build.
9. <a id="ref-9"></a>HL7 International. "[International Patient Summary Implementation Guide: Changes](https://hl7.org/fhir/uv/ips/changes.html)".
10. <a id="ref-10"></a>HL7 International. "[SMART Health Cards and Links Implementation Guide](https://hl7.org/fhir/uv/smart-health-cards-and-links/)".
11. <a id="ref-11"></a>IHE International. "[FHIR International Patient Summary (FIIO)](https://profiles.ihe.net/PCC/FIIO/volume-1.html)". IHE Patient Care Coordination.
12. <a id="ref-12"></a>SNOMED International. "[SNOMED CT International Patient Summary Terminology](https://www.snomed.org/international-patient-summary-terminology)".
13. <a id="ref-13"></a>Inferno. "[International Patient Summary Test Kit](https://inferno.healthit.gov/test-kits/ips)".
14. <a id="ref-14"></a>World Health Organization. "[WHO SMART Trust Implementation Guide](https://smart.who.int/trust/index.html)".
15. <a id="ref-15"></a>International Patient Summary project. "[IPS Implementation Registry](https://international-patient-summary.net/ips-implementation-registry/)".
16. <a id="ref-16"></a>International Patient Summary project. "[IPS in the Latin America and Caribbean region](https://international-patient-summary.net/ips-in-the-latin-america-and-caribbean-region/)".
17. <a id="ref-17"></a>Centers for Medicare & Medicaid Services. "[Interoperability Framework](https://www.cms.gov/interoperability)".
18. <a id="ref-18"></a>Flexpa. "[CMS Aligned Network](https://www.flexpa.com/docs/network/cms)". Documentation.
19. <a id="ref-19"></a>Song C., Nakayama M. "Implementation of a Patient Summary Web Application According to the International Patient Summary and Validation in Common Use Cases in Japan". *Journal of Medical Systems*, 2023. [doi:10.1007/s10916-023-01993-6](https://doi.org/10.1007/s10916-023-01993-6).
20. <a id="ref-20"></a>D'Amore J. "[State of FHIR IPS](https://international-patient-summary.net/wp-content/uploads/2025/11/2025-Annual-Symposium-State-of-FHIR-IPS-DAMORE.pdf)". AMIA 2025 Annual Symposium (slides).
21. <a id="ref-21"></a>Schippers D., Spil T., Stegwee R., Folmer E., Donnelly S. "The adoption and diffusion of the International Patient Summary". *Proceedings of the 58th Hawaii International Conference on System Sciences (HICSS)*, 2025. [doi:10.24251/hicss.2025.425](https://doi.org/10.24251/hicss.2025.425).
22. <a id="ref-22"></a>Raffaelli F. "[European Health Data Space](https://connectathon.ihe-europe.net/sites/ihe-cat2014.org/files/IHE_EU_EXP_DAYS_2026_Fulvia_Raffaelli_European_Commission.pdf)". European Commission, IHE Europe Experience Days 2026 (slides).
23. <a id="ref-23"></a>European Commission. "[European Health Data Space Regulation (EHDS)](https://health.ec.europa.eu/ehealth-digital-health-and-care/european-health-data-space-regulation-ehds_en)".
24. <a id="ref-24"></a>CSIRO Sparked. "[Australian Patient Summary (AU PS)](https://sparked.csiro.au/?p=1881)".
25. <a id="ref-25"></a>Lee H., Huang J., Huang S., Chen W., et al. "Implementing a Cross-Border Next-Generation Personal Health Record in the Philippines and Taiwan: An Implementation Case Report Using Health Level 7 International Fast Healthcare Interoperability Resources". *JMIR Formative Research*, 2025. [doi:10.2196/56272](https://doi.org/10.2196/56272).
26. <a id="ref-26"></a>G7. "[G7 International Patient Summary Roadmap](https://assets.publishing.service.gov.uk/media/61d82fbd8fa8f505893f1c93/G7-international-patient-summary-roadmap.pdf)". UK Department of Health and Social Care, December 2021.
27. <a id="ref-27"></a>European Union. "[Regulation (EU) 2025/327 on the European Health Data Space](https://eur-lex.europa.eu/eli/reg/2025/327/oj)". *Official Journal of the European Union*, 5 March 2025.
28. <a id="ref-28"></a>da Silva Carvalho N., Papadimitriou A., Stegwee R., Gille H., et al. "Accelerating European electronic health record exchange format (EEHRxF) implementation across Europe: a policy perspective". *Frontiers in Medicine*, 2025. [doi:10.3389/fmed.2025.1648170](https://doi.org/10.3389/fmed.2025.1648170).
29. <a id="ref-29"></a>European Union. "[Directive 2011/24/EU on the application of patients' rights in cross-border healthcare](https://eur-lex.europa.eu/eli/dir/2011/24/oj)". *Official Journal of the European Union*, 2011.
30. <a id="ref-30"></a>European Union. "[Regulation (EU) 2016/679, the General Data Protection Regulation](https://eur-lex.europa.eu/eli/reg/2016/679/oj)". *Official Journal of the European Union*, 2016.
31. <a id="ref-31"></a>Assistant Secretary for Technology Policy (ASTP/ONC). "[Information Blocking](https://www.healthit.gov/topic/information-blocking)". HealthIT.gov.
32. <a id="ref-32"></a>UK Parliament. "[Data (Use and Access) Act 2025](https://www.legislation.gov.uk/ukpga/2025/18/contents)". legislation.gov.uk.
33. <a id="ref-33"></a>eHealth Suisse. "[eHealth Suisse: competence and coordination centre of the Confederation and the cantons](https://www.e-health-suisse.ch/en/about-us/ehealth-suisse)". For the Act itself, search for SR 816.1 on [Fedlex](https://www.fedlex.admin.ch/).
34. <a id="ref-34"></a>UK Department of Health and Social Care. "[G7 patient access to health records: final report](https://www.gov.uk/government/publications/g7-health-track-digital-health-final-reports/g7-patient-access-to-health-records-final-report)". GOV.UK, 2021.

### Further reading

以上來源喺正文冇被引用，但係係標準本身嘅主要參考資料。

- ISO. "[ISO 27269: Health informatics — International patient summary](https://www.iso.org/standard/79491.html)". 2021.
- CEN. "EN 17269: Health informatics — The International Patient Summary". 2019.
- CEN. "CEN/TS 17288: Health informatics — The International Patient Summary: Guideline for European implementation".
- HL7 International. "[International Patient Summary Implementation Guide (FHIR)](https://hl7.org/fhir/uv/ips/)".
- HL7 International. "[International Patient Summary Implementation Guide (CDA), continuous build](https://build.fhir.org/ig/HL7/CDA-IPS/)".
- HL7 International. "[Structure of the International Patient Summary](https://hl7.org/fhir/uv/ips/Structure-of-the-International-Patient-Summary.html)".
- IHE International. "[IHE PCC International Patient Summary supplement (PDF)](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS_Rev1-0_PC_2020-03-17.pdf)". 2020.
- HL7 International. "[International Patient Access (IPA)](https://hl7.org/fhir/uv/ipa/)".
- HL7 Europe. "[HL7 Europe Patient Summary (EPS), continuous build](https://build.fhir.org/ig/hl7-eu/eps/)".
- International Patient Summary project. "[international-patient-summary.net](https://international-patient-summary.net/)".
- Benson T., Grieve G. *[Principles of Health Interoperability: FHIR, HL7 and SNOMED CT](https://link.springer.com/book/10.1007/978-3-030-56883-2)*. 4th edition. Springer, 2020.
