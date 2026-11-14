# 國際病人摘要（IPS）

**國際病人摘要（International Patient Summary，IPS）**是一項全球通用的標準，用於提供簡短的電子病歷摘錄。它包含臨床人員安全治療病人所需的基本臨床事實。其設計目標是：

- **精簡且不求詳盡。** 它是病歷中經過精心挑選的一小部分，而非完整病歷。
- **不限專科。** 任何臨床人員，在任何專科領域，都能使用。
- **不限疾病。** 它不綁定特定疾病或照護路徑。
- **可實作且具國際性。** 它建立在全球標準與術語之上，因此可跨國家、語言與資訊系統使用。

簡而言之，IPS 為從未見過病人的臨床人員回答一個問題：*「我現在需要知道什麼，才能安全地照護這個人？」*


## 為什麼需要 IPS

健康資訊通常被鎖在本地的電子病歷（EHR）、國家系統或某家廠商的產品之中。當病人到其他地方就醫，例如另一家醫院、另一個地區或另一個國家，治療的臨床人員往往無法取得這些病史。IPS 為所有人提供一種共通且可攜的摘要格式。

### 核心使用情境

| 使用情境 | 說明 |
|---|---|
| **非預期與急診照護** | 病人在離家的地方生病或受傷，當地臨床人員無法存取病人本國的 EHR。這是最初也是最主要的使用情境。 |
| **跨境照護** | 旅行者、移民、跨境工作者與難民隨身攜帶一份國外臨床人員讀得懂的摘要。 |
| **計畫性照護與轉銜** | 轉診、專科會診、入院、出院，以及醫療提供者之間的交接。 |
| **醫療旅遊與流動** | 選擇到其他司法管轄區接受照護的病人。 |
| **賦權病人** | 病人透過手機應用程式、入口網站或紙本，持有、檢視並分享自己的摘要。 |


## 何時使用 IPS

當不認識病人的人需要迅速取得可靠的即時概況，且傳送方與接收方沒有共用資訊系統時，就適合使用 IPS。

### 適合的情境

- **急診與非預期照護**，尤其是在離家或跨越國界的情況下。這正是 IPS 設計的用途。
- **國家系統之間的跨境交換**，例如歐盟的 MyHealth@EU 服務 [[1]](#ref-1) [[2]](#ref-2)。
- **由病人持有的摘要**，旅行者、移民、難民、朝聖者或患有複雜疾病的人可將其存在手機中或印在紙上隨身攜帶 [[3]](#ref-3)。
- **國家或區域的病人摘要。** 許多國家將自己的摘要建構為 IPS 的設定檔，因此也能進行國際交換 [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6)。
- **照護轉銜的共同基準**，例如轉診、入院與出院，在沒有更豐富的專科文件時使用。
- **其他資料集的起點**，例如疫苗接種證明、研究資料，或需要相同核心事實的登錄系統 [[7]](#ref-7) [[8]](#ref-8)。

### 不適合的情境

- **完整病歷。** IPS 刻意保持精簡。當細節很重要時，請使用完整病歷匯出或專科文件。
- **專科專用文件**，例如腫瘤治療摘要、孕產紀錄或詳細的出院摘要。這些文件有各自的標準，其中可以包含或引用 IPS 內容。
- **單一機構內的即時臨床工作流程。** 在單一 EHR 內，請查詢即時資料，而非摘要快照。
- **法律、計費或保險紀錄。** IPS 是臨床摘要，不是行政或理賠紀錄。
- **需要保證完整性的決策。** IPS 的完整度與時效，取決於其來源與撰寫者。可能時，務必與病人確認關鍵事實。


## IPS 包含什麼

IPS 文件有兩個層次：

1. **記錄「誰、什麼、何時」的標頭：**
   - **病人（Patient）：** 身分、人口統計資料與聯絡方式。
   - **作者（Author）：** 製作摘要的人員、機構或系統。
   - **保管者（Custodian）：** 負責維護摘要的機構。
   - **證明者（Attester）：** 若有，則為核實該摘要的人。
   - **日期與時間：** 建立的時間。

2. **依章節組織的臨床內容。** 章節分為必要、建議或選用。

| 章節 | 狀態 | 典型內容 |
|---|---|---|
| **Medication Summary**（用藥摘要） | 必要 | 目前與相關的過去用藥、處方、劑量 |
| **Allergies and Intolerances**（過敏與不耐受） | 必要 | 藥物、食物與環境過敏；反應與嚴重程度 |
| **Problem List**（問題清單） | 必要 | 現行診斷、病況與臨床問題 |
| Immunizations（預防接種） | 建議 | 已接種的疫苗，如破傷風、B 型肝炎、流感、COVID-19 |
| History of Procedures（處置史） | 建議 | 重大手術與侵入性介入 |
| Medical Devices（醫療器材） | 建議 | 植入物與器材，如心律調節器、支架、義肢 |
| Diagnostic Results（診斷結果） | 建議 | 重要檢驗結果、影像報告、病理 |
| Vital Signs（生命徵象） | 選用 | 血壓、心率、體重、身高、BMI |
| History of Past Illness（既往病史） | 選用 | 已痊癒的病況與過去的重大問題 |
| Functional Status（功能狀態） | 選用 | 失能情形與執行日常活動的能力 |
| Plan of Care（照護計畫） | 選用 | 照護計畫與治療建議 |
| Social History（社會史） | 選用 | 菸草、酒精與其他相關生活型態因素 |
| History of Pregnancy（懷孕史） | 選用 | 目前的懷孕狀態與懷孕史 |
| Advance Directives（預立醫療決定） | 選用 | 生前遺囑、急救意願、同意聲明 |
| Alerts（警示） | 選用 | 不適合放在其他地方的安全關鍵警告（FHIR IPS STU 2 新增） |
| Patient Story（病人故事） | 選用 | 對病人而言重要的事：需求、優勢、價值觀、擔憂與偏好，以病人自己的話表達（FHIR IPS STU 2 新增） |

**明確寫出「無」很重要。** 空白的章節無法讓臨床人員得知病人是沒有過敏，還是根本沒有人記錄。因此 IPS 要求明確的聲明，例如*「無已知過敏」*、*「目前無用藥」*或*「資訊不可用」*。


## IPS 背後的標準

IPS 是一組相互協調的標準。ISO 與 CEN 標準定義病人摘要*必須包含什麼*。HL7 實作指引則定義*如何*編碼。

| 標準 | 機構 | 角色 |
|---|---|---|
| **EN 17269** | CEN（歐洲標準化委員會） | 抽象的 IPS 資料集，2019 年發布 |
| **ISO 27269** | ISO（國際標準化組織） | 抽象 IPS 資料集的國際版本，2021 年發布 |
| **CEN/TS 17288** | CEN | 針對跨境使用實作 IPS 的指引 |
| **HL7 FHIR IPS Implementation Guide** | HL7 International | 現代且對 API 友善的編碼方式，也是主要的實作格式。STU 2（2.0.x）新增了 Alerts 與 Patient Story 章節、允許空白章節、釐清 `$summary`，並改用 SNOMED CT IPS 術語 [[9]](#ref-9)。 |
| **HL7 CDA IPS Implementation Guide** | HL7 International | 以 XML 文件為基礎的編碼，常見於現有的國家與歐洲基礎設施 |

這項工作由**全球健康資訊標準化聯合倡議委員會（Joint Initiative Council for Global Health Informatics Standardization，JIC）**協調。JIC 匯集了 ISO、CEN、HL7、SNOMED International、IHE 等組織。IPS 源自 2016 年歐盟與美國在跨境健康資料方面的合作，目前獲得世界各地政府與數位健康計畫的支持。


## IPS 如何以 HL7 FHIR 編碼

在 FHIR 中，一份 IPS 是一個類型為 `document` 的 **`Bundle`**：

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

重要的技術要點：

- **每個章節都有人類可讀的敘述（narrative）。** 即使沒有 FHIR 軟體，臨床人員也能在一般瀏覽器中閱讀 IPS。
- **每個章節也有編碼條目**，這些是結構化的 FHIR 資源，軟體可以處理、翻譯與比對。
- **設定檔會約束基礎 FHIR 資源。** 例如 *Patient (IPS)* 與 *AllergyIntolerance (IPS)* 定義最低限度的資料與「must support」元素。
- **`$summary` 操作**（`GET [base]/Patient/[id]/$summary`）要求 FHIR 伺服器依需求為病人產生 IPS。
- **IPS 可簽章且自成一體。** 一份完整的文件可以作為單一單位被儲存、傳送、簽章與驗證。


## 術語

共用的編碼系統讓 IPS 能跨語言與國家閱讀：

| 術語 | 用途 |
|---|---|
| **SNOMED CT** | 問題、過敏、處置、器材、臨床發現。提供免費的 **SNOMED CT IPS Terminology** 子集供 IPS 使用，即使在非會員國也可使用。 |
| **LOINC** | 文件與章節類型、檢驗項目、生命徵象 |
| **ATC** 與其他藥品編碼系統 | 藥品與活性成分 |
| **UCUM** | 度量單位 |
| **ISO 與 HL7 值集** | 國家、語言、行政性別、缺漏與未知的原因 |

由於條目經過編碼，接收系統可以顯示以葡萄牙語撰寫、但標籤為英文的 IPS。編碼的意義保持不變。


## 病人與臨床人員如何使用 IPS

IPS 可由 EHR、國家健康紀錄服務、病人入口網站或個人健康應用程式產生。接著可透過多種方式遞送：

- **系統對系統：** 透過 FHIR REST API、國家基礎設施，或如歐盟 MyHealth@EU 網路之類的跨境閘道。
- **由病人居中分享：** 病人將摘要存放在錢包或健康應用程式中，並依需要分享。
- **SMART Health Links：** 一個 QR 碼或網址，讓臨床人員在限定時間內（可選擇以通行碼保護）存取加密的 IPS。臨床人員可用一般網頁瀏覽器開啟。
- **紙本或 PDF：** 當其他方式都行不通時，作為備援的列印敘述版本。

**CommonHealth** 等應用程式讓病人能彙整自己的紀錄，並透過 SMART Health Links 分享 IPS。

典型的緊急情境：

1. 一名旅行者在國外昏倒。
2. 旅行者或同行者從手機中出示 QR 碼。
3. 急診醫師掃描後，幾秒內就看到旅行者的用藥、過敏與現行問題。
4. 醫師避開危險的藥物交互作用，安全地治療病人。


## 原則與設計選擇

- **安全第一。** 內容依臨床相關性挑選，而非追求完整。
- **預設全球化，透過擴充在地化。** 各國建立國家設定檔，例如歐盟、澳洲或加拿大的版本，在不破壞國際核心的前提下增加要求。
- **人可閱讀，機器可處理。** 敘述與編碼資料並存。
- **免費且開放。** HL7 IPS 規格與 IPS SNOMED CT 子集可免費取得，以降低採用門檻。
- **隱私與同意。** 存取受當地法律與病人同意約束。SMART Health Links 等機制讓病人保有控制權。


## 如何使用 IPS

### 給病人

1. **主動索取。** 詢問您的診所、醫院、國家健康入口網站或健康應用程式，是否能產生 IPS 或以其為基礎的國家病人摘要。
2. **檢查內容。** 趁身體健康時閱讀。回報任何錯誤或遺漏，尤其是過敏與用藥。
3. **隨身攜帶。** 存放在健康應用程式或錢包中，作為 SMART Health Link 的 QR 碼，或列印後與旅行證件放在一起。
4. **保持更新。** 在有新診斷、新的長期用藥、手術或植入物之後，取得新版本。
5. **有意識地分享。** 出示給正在治療您的臨床人員。SMART Health Link 可以設定到期，也可以要求通行碼，因此由您決定誰能看到、能看多久 [[10]](#ref-10)。

### 給臨床人員

1. **先檢查標頭。** 誰撰寫、何時撰寫，以及是否有人核實過。陳舊或未經核實的摘要需要更加謹慎。
2. **先讀必要章節：** 過敏、用藥與問題。
3. **區分「無已知」與「未記錄」。**「無已知過敏」是臨床聲明。空白或「未知」的章節則不是。
4. **確認關鍵事實：** 盡可能與病人或其同行者確認。
5. **善用編碼資料。** 在系統支援的情況下，編碼條目可讓摘要以您的語言顯示，並對照藥物交互作用與過敏規則進行檢查。
6. **不要假設內容完整。** IPS 是安全網，不是完整病史。

### 給實作者

1. **選擇規格。** 使用最新的 HL7 FHIR IPS Implementation Guide（STU 2），或您所在國家以其為基礎的國家設定檔。對於以 CDA 為基礎的基礎設施，請使用 CDA IPS 指引 [[9]](#ref-9) [[11]](#ref-11)。
2. **對應您的資料。** 將本地資料對應到 IPS 設定檔：`Patient`、`AllergyIntolerance`、`MedicationStatement`、`Condition` 等。大部分工作都在這個對應上。
3. **對應您的術語。** 將本地代碼對應到 SNOMED CT、LOINC 與藥品編碼系統。SNOMED CT IPS Terminology 可免費用於此目的 [[12]](#ref-12)。
4. **產生文件。** 支援 `$summary` 操作，或自行建立 `Bundle` 與 `Composition`。為每個章節加入可讀的敘述，以及明確的「無已知」或「不可用」聲明。
5. **驗證它。** 以 FHIR Validator 與符合性測試套件（例如 Inferno IPS Test Kit）檢查每一份產生的文件 [[13]](#ref-13)。
6. **簽章並分享。** 決定文件如何簽章、儲存與傳送：API、文件登錄庫、跨境閘道，或 SMART Health Link。
7. **安全地使用。** 作為接收方，即使無法處理每一筆編碼條目，也要顯示敘述；讓來源與作者保持可見；絕不靜默地將接收的資料併入本地病歷。
8. **與他人測試。** 在上線前，於 IHE 與 HL7 Connectathon 與其他廠商及國家進行互通測試。

### 給政府與健康機構

1. **採用以 IPS 為基礎的國家設定檔，** 而非另立格式，使國家摘要預設即具國際性 [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6)。
2. **確立治理：** 誰可以建立、更新與證明摘要，以及誰對其正確性負責。
3. **確立術語授權：** 加入 SNOMED CT 會員，或使用免費的 IPS 子集。
4. **確立身分、同意與信任：** 如何識別病人、如何記錄同意，以及使用哪種信任框架（例如 MyHealth@EU 或世界衛生組織的 Global Digital Health Certification Network）來驗證文件 [[1]](#ref-1) [[14]](#ref-14)。
5. **公開您所建置的成果，** 刊登在 IPS Implementation Registry，讓他人能從中學習 [[15]](#ref-15)。


## 將 IPS 與醫療系統整合

IPS 很少是獨立的系統。它是對已存在於 EHR、健康資訊交換平台、國家紀錄與個人健康應用程式中的資料所呈現的一種檢視。

| 整合模式 | 運作方式 | 範例 |
|---|---|---|
| **由 EHR 產生** | EHR 依需求從自身資料建置 IPS，通常透過 FHIR 的 `$summary` 操作。 | EHR 廠商，以及如 HAPI FHIR 這類帶有 IPS 產生器模組的 FHIR 伺服器 |
| **國家或區域紀錄** | 國家病人摘要服務儲存 IPS 的設定檔，並提供給獲授權的醫療提供者。 | 加拿大的 PS-CA、澳洲的 AU Patient Summary、瑞士採用 CH IPS 的電子病歷 [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6) |
| **跨境閘道** | 每個國家營運一個國家聯絡點。它將本國的摘要轉換成約定的交換格式，跨越國界傳送，接收國再以當地語言顯示。 | MyHealth@EU 電子健康國家聯絡點 [[1]](#ref-1) [[2]](#ref-2) |
| **區域交換網路** | 各國衛生部依共同的區域指引，透過國家 FHIR 伺服器交換 IPS 文件。 | RACSEL 的 IPS-LAC，以及拉丁美洲與加勒比地區的泛美數位健康高速公路（Pan American Highway for Digital Health，PH4H） [[16]](#ref-16) |
| **由病人居中** | 病人將 IPS 存放在應用程式或錢包中，並以 QR 碼或 SMART Health Link 分享。 | CommonHealth；世界衛生組織信任網路針對朝聖的 IPS 工作 [[10]](#ref-10) [[14]](#ref-14) |
| **以 API 為基礎的存取** | 應用程式透過 FHIR API 為獲授權的病人擷取 IPS。 | International Patient Access（IPA）；美國網路如 Flexpa，其在 CMS Interoperability Framework 下加入了 IPS 支援 [[17]](#ref-17) [[18]](#ref-18) |

需要規劃的整合點：

- **文件分享：** IHE 設定檔如 MHD（FHIR）與 XDS（文件登錄庫）可儲存並尋找 IPS 文件。IHE IPS 內容設定檔增加了符合性與測試規則 [[11]](#ref-11)。
- **病人身分：** IHE PIXm 與 PDQm，或國家識別碼，用於在不同系統間比對病人。
- **既有文件：** 許多系統已產生 CDA、C-CDA 或國家摘要。將它們對應到 IPS 通常比重新開始容易，但要檢查基數、值集與編碼系統的差異。
- **國家設定檔：** 國家核心，例如 US Core、AU Core、CH Core 或 JP Core，可能與 IPS 不同。國家病人摘要設定檔負責調和兩者 [[5]](#ref-5) [[6]](#ref-6) [[19]](#ref-19)。
- **翻譯與顯示：** 接收方應呈現敘述，並使用代碼在接收方語言中的顯示名稱來翻譯編碼條目。
- **安全：** 使用 TLS、必要時使用簽章文件、稽核日誌（例如 IHE ATNA 或 BALP），以及與同意連動的存取控制。


## 目前的採用情形

IPS 已從試辦專案邁向國家與區域計畫。狀況變化迅速，請查閱連結的來源以了解最新進展。

- **IPS Implementation Registry。** IPS 社群維護一份公開的實作登錄。2026 年中，登錄庫列出 34 筆項目，從阿根廷由醫療提供者居中的 IPS-LAC 專案，到越南的 Better Health Program [[15]](#ref-15)。
- **FHIR 生態系。** 在 HL7 International 與 Firely 的 2025 年 State of FHIR 調查中，有 42 位受訪者表示 IPS 是其國家 FHIR 規格的基礎，多於任何其他國際指引 [[20]](#ref-20)。
- **研究。** 2025 年一項關於 IPS 採用的研究訪談了利害關係人，他們指出更佳的照護品質與病人安全是主要效益 [[21]](#ref-21)。

| 國家或區域 | 現況 |
|---|---|
| **歐盟與歐洲經濟區** | MyHealth@EU 在各國之間交換病人摘要與電子處方。2026 年歐盟執委會的簡報指出，17 個會員國加上挪威已上線，其餘大多數國家計畫加入 [[2]](#ref-2) [[22]](#ref-22)。EHDS 規則規定在 2029 年前必須交換病人摘要 [[23]](#ref-23)。 |
| **加拿大** | 泛加拿大病人摘要（PS-CA）於 2022 年 10 月由 Canada Health Infoway 核准，以 IPS 為基礎並加入加拿大的調整 [[4]](#ref-4)。 |
| **澳洲** | AU Patient Summary 以 IPS 與 AU Core 為基礎，由 HL7 Australia 透過 Sparked 計畫開發 [[5]](#ref-5) [[24]](#ref-24)。 |
| **瑞士** | HL7 Switzerland 的 CH IPS 2.0.0（試用）以 IPS 與 CH Core 為基礎。另有獨立的設定檔補充瑞士電子病歷所需的內容 [[6]](#ref-6)。 |
| **美國** | 聯邦層級並無強制採用 IPS 的規定。美國使用 US Core 與 USCDI。聯邦機構參與國際上的 IPS 工作，一些網路則自願支援 IPS [[18]](#ref-18)。 |
| **拉丁美洲與加勒比地區** | RACSEL 各國衛生部使用區域性的 IPS-LAC 指引。2023 年，有 16 個國家在聖保羅的 connectathon 上交換 IPS-LAC 文件 [[16]](#ref-16)。 |
| **日本** | 研究人員建置並驗證了一款基於 IPS 的病人摘要應用程式，針對日本常見的使用情境，並使用 JP Core [[19]](#ref-19)。 |
| **台灣與菲律賓** | 2025 年一份實作報告描述一種使用 FHIR 並與 IPS 對齊的跨境個人健康紀錄 [[25]](#ref-25)。 |
| **G7** | 2021 年，G7 衛生部長承諾朝 IPS 努力，並發布了 IPS 路線圖 [[26]](#ref-26)。 |
| **世界衛生組織** | 世界衛生組織的 Global Digital Health Certification Network 包含以 IPS 為基礎的信任網域，例如供朝聖使用的可驗證 IPS [[14]](#ref-14)。 |


## 各國與區域的法律、法規與政策

IPS 是標準，不是法律。法律決定一個國家是否必須交換病人摘要、使用何種格式，以及適用什麼隱私規則。本表為摘要，並非法律意見。請務必查閱法律的現行條文。

| 司法管轄區 | 法律或政策 | 對 IPS 的意義 |
|---|---|---|
| **歐盟** | **歐洲健康資料空間（EHDS）規則，(EU) 2025/327。** 2025 年 3 月 5 日公布；2025 年 3 月 26 日生效 [[23]](#ref-23) [[27]](#ref-27)。 | 病人摘要屬於「優先類別」。以歐洲電子病歷交換格式進行的交換，必須在 2029 年前於每個會員國運作。醫學影像、檢驗結果與出院報告於 2031 年前跟進 [[28]](#ref-28)。病人摘要的格式以 HL7 IPS 為基礎。 |
| **歐盟** | 關於病人在跨境醫療中權利的**第 2011/24/EU 號指令** [[29]](#ref-29)。 | 設立了電子健康網路，該網路同意了 MyHealth@EU 背後的病人摘要指引。 |
| **歐盟** | **一般資料保護規則（GDPR），(EU) 2016/679** [[30]](#ref-30)。 | 健康資料屬於特殊類別。每一次 IPS 交換都需要合法依據與適當的保護措施。 |
| **美國** | **21st Century Cures Act 與資訊封鎖規則** [[31]](#ref-31)；自願性的 **CMS Interoperability Framework**（2025） [[17]](#ref-17)。 | 沒有任何法律要求使用 IPS。法律要求使用 US Core 與 USCDI 存取並交換電子健康資訊。對 IPS 的支援是自願的。 |
| **加拿大** | 各省與地區的健康資訊法律。聯邦的 **Connected Care for Canadians Act**（Bill C-72）於 2024 年提出，但在 2025 年國會休會前未能通過。 | PS-CA 是泛加拿大規格，不是法律要求。採用由各省與地區與 Canada Health Infoway 共同推動 [[4]](#ref-4)。 |
| **英國** | **Data (Use and Access) Act 2025** [[32]](#ref-32)。 | 包含為健康與成人社會照護資訊科技制定資訊標準的權力。英國主辦了 2021 年 G7 的 IPS 承諾 [[26]](#ref-26)。 |
| **澳洲** | **My Health Records Act 2012** 與 2025 年的「預設分享」修正。 | AU Patient Summary 是透過 Sparked 開發的國家規格 [[5]](#ref-5) [[24]](#ref-24)。 |
| **瑞士** | **2015 年 6 月 19 日電子病歷聯邦法（EPRA，SR 816.1）**，自 2017 年 4 月 15 日起施行 [[33]](#ref-33)。 | CH IPS 包含針對瑞士電子病歷中文件的設定檔 [[6]](#ref-6)。 |
| **拉丁美洲與加勒比地區** | 透過 RACSEL 與 PH4H 達成的區域協議，並獲得美洲開發銀行對區域法律框架的支持 [[16]](#ref-16)。 | IPS-LAC 是跨境交換所約定的區域格式。 |
| **G7** | **衛生部長公報**，牛津，2021 年 6 月，以及 **G7 IPS Roadmap**，2021 年 12 月 [[26]](#ref-26) [[34]](#ref-34)。 | 朝 IPS 與病人存取努力的政治承諾，不是有拘束力的法律。 |


## 優點與缺點

| 優點 | 缺點 |
|---|---|
| **更安全的非預期照護。** 臨床人員幾秒內即可看到過敏、用藥與問題。 | **品質取決於來源。** 過時或錯誤的來源資料會產生過時或錯誤的摘要。 |
| **一種格式，通行全球。** 一次實作即可滿足國家與跨境需求。 | **國家間的差異。** 國家設定檔會增加規則，因此在一個國家「有效的 IPS」，可能需要調整才能被另一個國家接受。 |
| **建立在開放且成熟的標準上：** ISO、CEN、HL7 FHIR 與 CDA、SNOMED CT 與 LOINC。 | **術語負擔。** 將本地代碼對應到 SNOMED CT 與 LOINC 是繁重的工作，且完整的 SNOMED CT 在免費的 IPS 子集之外需要授權。 |
| **可讀且可運算。** 敘述給人看，編碼資料給軟體與翻譯使用。 | **若產生器不夠嚴謹，敘述與編碼資料可能不一致，** 接收方也可能相信錯誤的那一份。 |
| **賦權病人。** 病人可以持有並分享自己的摘要。 | **隱私與同意風險。** 可攜的摘要很敏感，各國的法律與同意模式也不同。 |
| **免費規格**與免費的 IPS 術語降低成本 [[12]](#ref-12)。 | **版本更迭。** STU 1、STU 1.1 與 STU 2 並存，且 EHDS 格式引用較早的版本 [[28]](#ref-28)。 |
| 可**重複使用**於疫苗接種證明、研究與登錄系統 [[7]](#ref-7) [[8]](#ref-8)。 | **刻意精簡。** 不能取代完整病歷或專科文件，二次使用上的缺口需要擴充 [[7]](#ref-7)。 |
| 獲得政府、歐盟、G7、世界衛生組織與標準機構的**強力支持**。 | **採用不均。** 許多國家與廠商仍在試辦階段，病人的認知也偏低。 |


## 計畫與未來方向

- **歐盟，2029：** 在 EHDS 下，病人摘要與電子處方交換於所有歐盟會員國運作 [[23]](#ref-23) [[28]](#ref-28)。
- **歐盟，2031：** 醫學影像、檢驗結果與出院報告加入歐洲電子病歷交換格式 [[28]](#ref-28)。
- **MyHealth@EU 擴展：** 更多國家加入，並為檢驗結果、出院報告與醫學影像推出新服務 [[2]](#ref-2) [[22]](#ref-22)。
- **FHIR IPS STU 2 的採用：** 實作者轉向 Alerts 與 Patient Story 章節、明確的空白章節，以及 SNOMED CT IPS 術語 [[9]](#ref-9)。
- **澳洲：** 預計於 2026 年發布 AU Patient Summary Release 1 [[24]](#ref-24)。
- **IPS Best Practices Project：** 一項記錄經驗教訓的社群工作，預計 2026 年開始。
- **世界衛生組織信任網路：** 為可驗證、可攜的健康文件提供更多以 IPS 為基礎的信任網域 [[14]](#ref-14)。
- **SMART Health Links：** 透過 HL7 標準化，用於由病人控制的分享 [[10]](#ref-10)。
- **拉丁美洲與加勒比地區：** 透過 PH4H 擴大 IPS-LAC 交換 [[16]](#ref-16)。
- **研究與二次使用：** 致力於擴充病人摘要以供臨床研究與人工智慧使用，同時保持核心精簡 [[7]](#ref-7)。


## 詞彙表

| 詞彙 | 意義 |
|---|---|
| **IPS** | International Patient Summary（國際病人摘要） |
| **FHIR** | Fast Healthcare Interoperability Resources，HL7 以 API 為基礎的現代標準 |
| **CDA** | Clinical Document Architecture，HL7 的 XML 文件標準 |
| **IG** | Implementation Guide（實作指引），一組用於套用標準的設定檔與規則 |
| **Profile** | 針對特定用途而受到約束的 FHIR 資源版本（設定檔） |
| **SNOMED CT** | Systematized Nomenclature of Medicine – Clinical Terms |
| **LOINC** | Logical Observation Identifiers Names and Codes |
| **SMART Health Links** | 透過連結或 QR 碼分享健康資料的標準 |
| **JIC** | Joint Initiative Council for Global Health Informatics Standardization |


## 深入了解

- HL7 FHIR IPS Implementation Guide: <https://hl7.org/fhir/uv/ips/>
- IPS continuous build: <https://build.fhir.org/ig/HL7/fhir-ips/>
- International Patient Summary project site: <https://international-patient-summary.net/>
- ISO 27269 (Health informatics — International patient summary): <https://www.iso.org/standard/79491.html>
- SNOMED CT IPS Terminology: <https://www.snomed.org/international-patient-summary-terminology>
- SMART Health Links: <https://docs.smarthealthit.org/smart-health-links/>


## 資源

這些連結涵蓋與 IPS 相關的來源、規格、軟體、專案、影片、書籍與研究。多數連結在撰寫本頁時已檢查。少數出版社網站會阻擋自動檢查，這些以 *（未檢查）* 標示。

### 官方規格與標準

- [HL7 FHIR IPS Implementation Guide, current published version](https://hl7.org/fhir/uv/ips/) 是具權威性的 FHIR 規格。
- [HL7 FHIR IPS Implementation Guide, STU 2](https://hl7.org/fhir/uv/ips/STU2/)
- [HL7 FHIR IPS Implementation Guide, STU 1.1](https://hl7.org/fhir/uv/ips/STU1.1/)
- [HL7 FHIR IPS publication history](https://www.hl7.org/fhir/uv/ips/history.html) 列出每一個已發布的版本。
- [HL7 FHIR IPS continuous build](https://build.fhir.org/ig/HL7/fhir-ips/) 是尚未經投票的最新進行中工作。
- [Structure of the International Patient Summary](https://hl7.org/fhir/uv/ips/en/Structure-of-the-International-Patient-Summary.html) 說明章節與設定檔。
- [IPS design conventions](https://build.fhir.org/ig/HL7/fhir-ips/en/Design-Conventions.html) 涵蓋 must-support、缺漏資料與敘述。
- [IPS generation and data inclusion](https://build.fhir.org/ig/HL7/fhir-ips/en/Generation-and-Data-Inclusion.html) 涵蓋 `$summary` 以及如何選擇內容。
- [HL7 CDA IPS Implementation Guide, continuous build](https://build.fhir.org/ig/HL7/CDA-IPS/)
- [HL7 CDA IPS product brief](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=483)
- [ISO 27269, Health informatics — International patient summary](https://www.iso.org/standard/79491.html) *（未檢查）*
- [ISO/TC 215 Health informatics committee](https://www.iso.org/committee/54960.html) *（未檢查）*
- [IHE FHIR International Patient Summary profile (FIIO)](https://profiles.ihe.net/PCC/FIIO/volume-1.html)
- [IHE PCC International Patient Summary supplement, 2020 (PDF)](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS_Rev1-0_PC_2020-03-17.pdf)
- [HL7 SMART Health Cards and Links Implementation Guide](https://hl7.org/fhir/uv/smart-health-cards-and-links/)
- [SMART Health Links documentation](https://docs.smarthealthit.org/smart-health-links/)
- [HL7 FHIR International Patient Access (IPA)](https://hl7.org/fhir/uv/ipa/) 是針對病人 API 存取的姊妹規格。
- [HL7 FHIR R4 base specification](https://hl7.org/fhir/R4/)，IPS 即建立於其上。

### 原始碼儲存庫

- [HL7/fhir-ips](https://github.com/HL7/fhir-ips) 存放以 FHIR Shorthand 撰寫的 FHIR IPS IG 原始碼。
- [HL7/cda-ips](https://github.com/HL7/cda-ips) 存放 CDA IPS IG 的原始碼。
- [hl7-eu/eps](https://github.com/hl7-eu/eps) 存放 HL7 Europe Patient Summary 的原始碼。
- [hl7ch/ch-ips](https://github.com/hl7ch/ch-ips) 存放瑞士的 IPS，其檢視器與產生器正在開發中。
- [GitHub topic: international-patient-summary](https://github.com/topics/international-patient-summary) 列出社群的儲存庫。

### 國家與區域的調整版本

- [HL7 Europe Patient Summary (EPS), continuous build](https://build.fhir.org/ig/hl7-eu/eps/)
- [AU Patient Summary (Australia), continuous build](https://build.fhir.org/ig/hl7au/au-fhir-ps/)
- [Trillium II IPS structure (HL7 Europe)](https://hl7.eu/fhir/build/trillium2/site/ipsStructure.html) 來自協助啟動 IPS 的歐盟與美國專案。
- [eHealth Suisse](https://www.ehealthsuisse.ch/) 是瑞士數位健康及其 IPS 採用的專業中心。
- [MyHealth@EU, cross-border digital health services](https://health.ec.europa.eu/ehealth-digital-health-and-care/electronic-cross-border-health-services_en)
- [Xt-EHR Joint Action](https://www.xt-ehr.eu/) 籌備歐洲健康資料空間的各種格式，包括病人摘要。

### 軟體與工具

- [IPS Viewer](https://www.ipsviewer.com) ([source: jddamore/IPSviewer](https://github.com/jddamore/IPSviewer)) 是開放原始碼、以瀏覽器運作的 IPS 檢視器。
- [uwcirg/shl-ips-viewer](https://github.com/uwcirg/shl-ips-viewer) 檢視透過 SMART Health Link 分享的 IPS。
- [smart-on-fhir/smart-health-links](https://github.com/smart-on-fhir/smart-health-links) 是 SMART Health Links 的參考實作。
- [HAPI FHIR IPS generator](https://hapifhir.io/hapi-fhir/docs/server_ips/introduction.html) ([source: hapifhir/hapi-fhir](https://github.com/hapifhir/hapi-fhir)) 是實作 `$summary` 的開放原始碼 Java 伺服器模組。
- [HAPI FHIR JPA server IPS documentation](https://hapifhir.io/hapi-fhir/docs/server_jpa/ips.html)
- [Inferno IPS Test Kit](https://inferno.healthit.gov/test-kits/ips) ([source: inferno-framework/ips-test-kit](https://github.com/inferno-framework/ips-test-kit)) 是開放原始碼的符合性測試套件。
- [FHIR Validator](https://validator.fhir.org/) 依據 IG 設定檔驗證 IPS bundle。
- [Simplifier: hl7.fhir.uv.ips package](https://simplifier.net/packages/hl7.fhir.uv.ips) 提供套件、設定檔與範例。
- [FHIR package registry](https://registry.fhir.org/)
- [FHIR Shorthand (FSH) School](https://fshschool.org/) 教授撰寫 IPS IG 所用的語言。
- [CommonHealth](https://www.commonhealth.org/) 是一款可產生 IPS 並透過 SMART Health Links 分享的病人應用程式。
- [WHO SMART Trust](https://github.com/WorldHealthOrganization/smart-trust) 是世界衛生組織 Global Digital Health Certification Network 的信任框架。

### 組織與專案

- [International Patient Summary project site](https://international-patient-summary.net/) 提供新聞、採用報告與教育資源。
- [IPS for health IT developers](https://international-patient-summary.net/health-it-developer/)
- [HL7 International](https://www.hl7.org/)
- [IHE International](https://www.ihe.net/)
- [SNOMED International](https://www.snomed.org/)
- [SNOMED CT IPS Terminology](https://www.snomed.org/international-patient-summary-terminology) 是供 IPS 使用的免費子集。
- [LOINC](https://loinc.org/) *（未檢查）*
- [Joint Initiative Council for Global Health Informatics Standardization (JIC)](http://www.jointinitiativecouncil.org/)
- [Global Digital Health Partnership (GDHP)](https://gdhp.health/)
- [WHO SMART Guidelines](https://smart.who.int/)
- [WHO Global Digital Health Certification Network](https://www.who.int/initiatives/global-digital-health-certification-network)

### 社群與活動

- [chat.fhir.org](https://chat.fhir.org/) 是 FHIR 社群的聊天平台，設有活躍的 IPS 頻道。
- [HL7 FHIR Connectathons](https://www.hl7.org/events/fhir-connectathon/)
- [IHE Connectathons](https://www.ihe.net/participate/connectathon/)

### 影片

- [HIMSS20: IPS for computable care guidelines in 200 seconds or less (IHE International, YouTube)](https://www.youtube.com/watch?v=xjEzGM8kBPw)
- [IHE International YouTube channel](https://www.youtube.com/@IHEIntl) 提供 Connectathon 座談與 IPS 場次。
- [IPS project site news](https://international-patient-summary.net/) 連結到許多錄製的網路研討會，包括：
  - 2024 年 IHE North America Connectathon 的 IPS 座談
  - FHIR DevDays 2023 的 IPS 場次
  - Grahame Grieve 談 IPS 與 IPA，IHE Connectathon Montreux 2022
  - SNOMED CT Expo 2022 主題演講
  - Matthew Rahn 談 GDHP 中的 IPS
  - HL7「Global Passport」跨境網路研討會
- [YouTube search: International Patient Summary](https://www.youtube.com/results?search_query=international+patient+summary)

### 書籍

- Tim Benson 與 Grahame Grieve，[*Principles of Health Interoperability: FHIR, HL7 and SNOMED CT*](https://link.springer.com/book/10.1007/978-3-030-56883-2)，第 4 版，Springer，2020。內容涵蓋 FHIR、臨床摘要資源與術語。

### 研究論文與文章

- Laleci Erturkmen G. B., Sinaci A. A., Namli T., Boonstra M., et al., "[An assessment of the European Patient Summary for clinical research: a case study in cardiology](https://doi.org/10.3389/fmed.2024.1481551)", *Frontiers in Medicine*, 2024.
- Lee H., Huang J., Huang S., Chen W., et al., "[Implementing a Cross-Border Next-Generation Personal Health Record in the Philippines and Taiwan: An Implementation Case Report Using Health Level 7 International Fast Healthcare Interoperability Resources](https://doi.org/10.2196/56272)", *JMIR Formative Research*, 2025.
- Song C., Nakayama M., "[Implementation of a Patient Summary Web Application According to the International Patient Summary and Validation in Common Use Cases in Japan](https://doi.org/10.1007/s10916-023-01993-6)", *Journal of Medical Systems*, 2023.
- Schippers D., Spil T., Stegwee R., Folmer E., Donnelly S., "[The adoption and diffusion of the International Patient Summary](https://doi.org/10.24251/hicss.2025.425)", *Proceedings of the 58th Hawaii International Conference on System Sciences (HICSS)*, 2025.
- da Silva Carvalho N., Papadimitriou A., Stegwee R., Gille H., et al., "[Accelerating European electronic health record exchange format (EEHRxF) implementation across Europe: a policy perspective](https://doi.org/10.3389/fmed.2025.1648170)", *Frontiers in Medicine*, 2025.
- Kay S., Cangioli G., Nusbaum M., "[The International Patient Summary and the extensibility requirement](https://international-patient-summary.net/the-international-patient-summary-and-the-extensibility-requirement/)", *Studies in Health Technology and Informatics* (pHealth), 2020.
- D'Amore J., Cangioli G., Hausam R., "[Advancing the International Patient Summary](https://international-patient-summary.net/advancing-the-international-patient-summary/)"
- "[Towards the Austrian Patient Summary](https://international-patient-summary.net/towards-the-austrian-patient-summary/)", *Studies in Health Technology and Informatics* (dHealth).
- "[Revival of the International Patient Summary (IPS)](https://smiledigitalhealth.com/our-blog/revival-of-the-international-patient-summary-ips)", Smile Digital Health blog.
- [PubMed search: "international patient summary"](https://pubmed.ncbi.nlm.nih.gov/?term=%22international+patient+summary%22) 可查詢經同儕審查的文獻。


## References

文中的編號引用（如 [1]）會連結到下方對應的條目。這些連結已於 2026 年 11 月檢查。法律、採用數字與版本都會變動，請查閱來源以了解最新情況。

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

以下來源未在上文中被引用，但它們是標準本身的主要參考資料。

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
