# International Patient Summary (IPS)

**国际病人摘要（International Patient Summary，IPS）**是一个全世界通用个标准，用来做一份简短个电子健康记录摘录。里向有临床医务人员为仔安全地医治病人所要个基本临床资料。伊个设计目标是：

- **精简，覅求样样齐全。**伊只是健康记录里向经过挑选个一小部分，覅是整份记录。
- **覅限专科。**随便啥个临床医务人员，随便啥个专科，侪好用。
- **覅限病情。**伊覅搭某一种毛病或者某一条治疗路径绑勒一道。
- **好实施，又是国际通用。**伊建立勒全球标准搭术语个基础浪，所以好勒各种国家、语言搭信息系统之间用。

简单讲，IPS 帮一位从来朆碰着过病人个临床医务人员回答一个问题：*"我现在要晓得点啥，才好安全地照顾搿位病人？"*


## 为啥要有 IPS

健康信息通常锁勒本地个电子健康记录（EHR）、国家级系统，或者厂商个产品里向。病人到别处去看病，比方讲另外一家医院、另外一个地区或者另外一个国家，医治伊个临床医务人员往往看勿到伊个病史。IPS 拨大家一个共用、好带来带去个摘要格式。

### 核心使用场景

| 使用场景 | 说明 |
|---|---|
| **勿预约搭紧急护理** | 病人勒外头忽然生毛病或者受伤，当地临床医务人员查勿到病人勒屋里厢个 EHR。搿个是最早个、也是最主要个使用场景。 |
| **跨境护理** | 旅客、移民、跨境上班个人搭难民，带一份国外个临床医务人员看得懂个摘要。 |
| **有计划个护理搭转接** | 转诊、专科会诊、住院、出院，还有医疗服务提供者之间个交接。 |
| **医疗旅游搭流动** | 选择勒另外一个司法管辖区接受护理个病人。 |
| **病人赋权** | 病人好用手机应用、门户网站或者打印出来个纸头来保管、查看搭分享自家个摘要。 |


## 啥辰光用 IPS

当一个勿认得病人个人要马上拿到一份靠得牢个概览，而且发送方搭接收方勿共用一套信息系统个辰光，就好用 IPS。

### 适合个情况

- **紧急搭突发护理**，特别是勒外头或者跨境个辰光。搿个正好是 IPS 当初设计个用途。
- **各国系统之间个跨境交换**，比方讲欧盟个 MyHealth@EU 服务 [[1]](#ref-1) [[2]](#ref-2)。
- **病人自家保管个摘要**，比方讲旅客、移民、难民、朝圣者或者生复杂毛病个人，勒手机浪或者纸头浪带个摘要 [[3]](#ref-3)。
- **国家或者地区层面个病人摘要。**交关国家拿自家个摘要做成 IPS 个一个配置档（profile），搿样就好做国际交换 [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6)。
- **护理转接个共同基线**，比方讲转诊、住院搭出院，勒还朆有更详细个专科文件个辰光用。
- **其他数据集个起点**，比方讲疫苗接种证明、研究数据或者需要同样一批核心资料个登记册 [[7]](#ref-7) [[8]](#ref-8)。

### 勿适合个情况

- **完整个病历。**IPS 是特为做得精简个。要详细资料个辰光，应该用完整记录导出或者专科文件。
- **专科专用文件**，比方讲肿瘤科治疗摘要、产科记录或者详细个出院摘要。搿些有伊拉自家个标准，好包含或者引用 IPS 个内容。
- **单个机构内部个实时临床工作流程。**勒同一个 EHR 里向，应该直接查实时数据，覅用摘要快照。
- **法律、收费或者保险记录。**IPS 是临床摘要，覅是行政或者理赔记录。
- **要保证完整个决定。**IPS 个完整程度搭新旧程度，全靠伊个来源搭作者。可以个话，重要资料一定要搭病人确认。


## IPS 里向有点啥

一份 IPS 文件有两层：

1. **一个记录"啥人、啥事体、啥辰光"个标头：**
   - **病人：**身份、人口统计资料搭联系方式。
   - **作者：**做摘要个人、机构或者系统。
   - **保管人：**负责维护摘要个机构。
   - **认证人：**如果有个话，是啥人核实过。
   - **日期搭辰光：**做出来个辰光。

2. **一个分成多个章节个临床主体。**章节分成必需、建议或者可选。

| 章节 | 状态 | 典型内容 |
|---|---|---|
| **Medication Summary** | 必需 | 目前搭相关个过去用药、处方、剂量 |
| **Allergies and Intolerances** | 必需 | 药物、吃个物事搭环境过敏；反应搭严重程度 |
| **Problem List** | 必需 | 活跃个诊断、病情搭临床问题 |
| Immunizations | 建议 | 已经打过个疫苗，比方讲破伤风、乙肝、流感、COVID-19 |
| History of Procedures | 建议 | 主要手术搭侵入性干预 |
| Medical Devices | 建议 | 植入物搭装置，比方讲心脏起搏器、支架、假肢 |
| Diagnostic Results | 建议 | 重要个化验结果、影像报告、病理 |
| Vital Signs | 可选 | 血压、心跳、体重、身高、BMI |
| History of Past Illness | 可选 | 已经好脱个病情搭重大个过去问题 |
| Functional Status | 可选 | 残疾搭做日常活动个能力 |
| Plan of Care | 可选 | 护理计划搭治疗建议 |
| Social History | 可选 | 香烟、酒精搭其他相关个生活方式因素 |
| History of Pregnancy | 可选 | 目前个怀孕状况搭怀孕史 |
| Advance Directives | 可选 | 预先医疗指示、抢救意愿、同意声明 |
| Alerts | 可选 | 其他地方放勿进去个安全攸关警示（FHIR IPS STU 2 新增） |
| Patient Story | 可选 | 病人顶看重个事体：需要、长处、价值观、担心搭偏好，用病人自家个讲法（FHIR IPS STU 2 新增） |

**明明白白写"呒没"是交关重要个。**一个空白个章节，告诉勿了临床医务人员病人是呒没过敏，还是呒没人记录过。所以 IPS 要求有明确个声明，比方讲*"呒没已知过敏"*、*"呒没目前用个药"*或者*"资料勿详"*。


## IPS 背后个标准

IPS 是一套互相协调个标准。ISO 搭 CEN 标准规定病人摘要*一定要包含点啥*。HL7 实施指南规定*哪能编码*。

| 标准 | 机构 | 角色 |
|---|---|---|
| **EN 17269** | CEN (European Committee for Standardization) | 抽象 IPS 数据集，2019 年发布 |
| **ISO 27269** | ISO (International Organization for Standardization) | 抽象 IPS 数据集个国际版本，2021 年发布 |
| **CEN/TS 17288** | CEN | 为跨境使用而实施 IPS 个指南 |
| **HL7 FHIR IPS Implementation Guide** | HL7 International | 现代化、对 API 友好个编码，也是主要个实施格式。STU 2（2.0.x）新增了 Alerts 搭 Patient Story 章节，允许空白章节，厘清了 `$summary`，还转到 SNOMED CT IPS 术语 [[9]](#ref-9)。 |
| **HL7 CDA IPS Implementation Guide** | HL7 International | 以 XML 文件为基础个编码，勒现有个国家搭欧洲基础设施里向蛮普遍 |

搿项工作由 **Joint Initiative Council for Global Health Informatics Standardization (JIC)** 协调。JIC 拿 ISO、CEN、HL7、SNOMED International、IHE 等组织聚拢来。IPS 来自 2016 年欧盟搭美国勒跨境健康数据方面个合作，现在得到全世界各国政府搭数字健康项目个支持。


## IPS 哪能用 HL7 FHIR 编码

勒 FHIR 里向，一份 IPS 是一个 `document` 类型个 **`Bundle`**：

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

重点技术特点：

- **每个章节侪有人看得懂个叙述文字。**临床医务人员用普通浏览器就好看 IPS，覅 FHIR 软件。
- **每个章节还有编码条目**，就是软件好处理、翻译搭核对个结构化 FHIR 资源。
- **配置档（Profile）限制基础 FHIR 资源。**比方讲 *Patient (IPS)* 搭 *AllergyIntolerance (IPS)* 规定了最少数据搭"must support"元素。
- **`$summary` 操作**（`GET [base]/Patient/[id]/$summary`）要求 FHIR 服务器根据需要为某位病人生成 IPS。
- **IPS 好签名，而且自成一体。**一份完整个文件好作为一个单位来存储、传送、签名搭验证。


## 术语

共用个代码系统让 IPS 好跨语言、跨国家阅读：

| 术语 | 用途 |
|---|---|
| **SNOMED CT** | 问题、过敏、操作、装置、临床发现。有免费个 **SNOMED CT IPS Terminology** 子集供 IPS 使用，连非成员国也好用。 |
| **LOINC** | 文件搭章节类型、化验项目、生命体征 |
| **ATC** 搭其他药物代码系统 | 药品搭活性成分 |
| **UCUM** | 计量单位 |
| **ISO 搭 HL7 值集** | 国家、语言、行政性别、缺失搭未知个原因 |

因为条目是编码过个，接收系统好用英文标签来显示一份用葡萄牙文写个 IPS。编码个含义勿会变。


## 病人搭临床医务人员哪能用 IPS

IPS 好由 EHR、国家健康记录服务、病人门户或者个人健康应用生成。然后好用几种方式送出去：

- **系统对系统：**通过 FHIR REST API、国家基础设施或者跨境网关，比方讲欧盟个 MyHealth@EU 网络。
- **由病人传递分享：**病人拿摘要存勒钱包或者健康应用里向，要个辰光就分享。
- **SMART Health Links：**一个二维码或者网址，拨临床医务人员有时限（也好设密码保护）个权限去看一份加密个 IPS。临床医务人员好用普通网页浏览器打开伊。
- **纸头或者 PDF：**打印出来个叙述版本，其他办法侪勿灵个辰光做后备。

**CommonHealth** 搿类应用让病人好收集自家个记录，并且通过 SMART Health Links 分享 IPS。

一个典型个紧急情况：

1. 一位旅客勒外国晕倒。
2. 旅客或者陪伴个人勒手机浪出示一个二维码。
3. 急诊医生扫描之后，几秒钟里向就看到旅客个药、过敏搭活跃个问题。
4. 医生避开了一个危险个药物相互作用，安全地医治病人。


## 原则搭设计选择

- **安全第一。**内容是根据临床相关性来挑个，覅追求完整。
- **默认全球通用，扩展再本地化。**各国建立国家配置档，比方讲欧盟、澳大利亚或者加拿大个版本，勒覅破坏国际核心个前提下加额外要求。
- **人看得懂，机器处理得来。**叙述文字搭编码数据并存。
- **免费搭开放。**HL7 IPS 规范搭 IPS SNOMED CT 子集侪是免费提供，来降低采用个门槛。
- **隐私搭同意。**访问权限受本地法律搭病人个同意管理。SMART Health Links 搿类机制让病人一直掌握控制权。


## 哪能用 IPS

### 拨病人

1. **要一份。**问侬个诊所、医院、国家健康门户或者健康应用，好覅好做 IPS，或者以 IPS 为基础个国家病人摘要。
2. **检查伊。**勒侬身体好个辰光看一看。有啥错误或者漏脱个，特别是过敏搭药，要报告。
3. **随身带牢。**存勒健康应用或者钱包里向，做成 SMART Health Link 二维码，或者打印出来放勒旅行文件里向。
4. **保持最新。**有新个诊断、新个长期用药、做过手术或者有植入物之后，就拿一份新个。
5. **有意识地分享。**拨医治侬个临床医务人员看。SMART Health Link 好过期，也好要求密码，所以侬好控制啥人看得到、看多长辰光 [[10]](#ref-10)。

### 拨临床医务人员

1. **先看标头。**啥人写个、啥辰光写个，还有有人核实过伐。旧脱或者朆核实过个摘要要更加小心。
2. **先看必需个章节：**过敏、药物搭问题。
3. **"已知呒没"搭"呒没记录"要分开处理。**"呒没已知过敏"是一项临床声明。空白或者"勿详"个章节就勿是。
4. **确认重要资料**，只要办得到，就搭病人或者伊个陪伴个人确认。
5. **善用编码数据。**如果侬个系统支持，编码条目好让摘要用侬个语言显示，并且对照药物相互作用搭过敏规则来检查。
6. **覅假设资料齐全。**IPS 是安全网，覅是完整病史。

### 拨实施人员

1. **选规范。**用最新个 HL7 FHIR IPS Implementation Guide（STU 2），或者侬国家以伊为基础个国家配置档。要是以 CDA 为基础个基础设施，就用 CDA IPS 指南 [[9]](#ref-9) [[11]](#ref-11)。
2. **映射侬个数据。**拿本地数据映射到 IPS 配置档：`Patient`、`AllergyIntolerance`、`MedicationStatement`、`Condition` 等等。大部分工作侪勒搿个映射过程里向。
3. **映射侬个术语。**拿本地代码映射到 SNOMED CT、LOINC 搭药物代码系统。SNOMED CT IPS Terminology 为仔搿个目个是免费个 [[12]](#ref-12)。
4. **生成文件。**支持 `$summary` 操作，或者自家建 `Bundle` 搭 `Composition`。每个章节侪要包含好阅读个叙述文字，并且有明确个"呒没已知"或者"呒没资料"声明。
5. **验证。**用 FHIR Validator 搭一套符合性测试工具（比方讲 Inferno IPS Test Kit）检查每一份生成个文件 [[13]](#ref-13)。
6. **签名搭分享。**决定文件哪能签名、存储搭传送：API、文件登记册、跨境网关，还是 SMART Health Link。
7. **安全地使用。**作为接收方，就算勿是所有编码条目侪处理得来，也要显示叙述文字，要让来源搭作者看得清爽，决勿好悄悄地拿收到个数据合并到本地记录里向。
8. **搭其他人测试。**勒正式上线之前，勒 IHE 搭 HL7 Connectathon 搭其他厂商搭国家互通测试。

### 拨政府搭健康机构

1. **采用国家配置档**，建立勒 IPS 个基础浪，覅另外搞一个独立格式，搿样国家摘要默认就是国际通用个 [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6)。
2. **厘清管理：**啥人好建立、更新搭认证摘要，啥人要对伊个准确性负责。
3. **厘清术语授权：**SNOMED CT 会员资格，或者使用免费个 IPS 子集。
4. **厘清身份、同意搭信任：**哪能识别病人、哪能记录同意，还有用啥个信任框架（比方讲 MyHealth@EU 或者 WHO Global Digital Health Certification Network）来验证文件 [[1]](#ref-1) [[14]](#ref-14)。
5. **公开侬已经建好个物事**，放进 IPS Implementation Registry，让其他人好参考 [[15]](#ref-15)。


## 拿 IPS 整合到医疗系统里向

IPS 顶少是一个独立系统。伊是对已经存在勒 EHR、健康信息交换平台、国家记录搭个人健康应用里向个数据个一个视图。

| 整合模式 | 运作方式 | 例子 |
|---|---|---|
| **由 EHR 生成** | EHR 根据请求用自家个数据建立 IPS，通常通过 FHIR `$summary` 操作。 | EHR 厂商搭 FHIR 服务器，比方讲有 IPS 生成器模块个 HAPI FHIR |
| **国家或者地区记录** | 国家病人摘要服务存储 IPS 个配置档，并且提供拨获授权个服务提供者。 | 加拿大个 PS-CA、澳大利亚个 AU Patient Summary、瑞士电子病人记录搭配 CH IPS [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6) |
| **跨境网关** | 每个国家侪设有国家联络点。伊拿本国个摘要转换成约定好个交换格式，传过边境，接收国就用当地语言显示。 | MyHealth@EU National Contact Points for eHealth [[1]](#ref-1) [[2]](#ref-2) |
| **区域交换网络** | 各国卫生部通过国家 FHIR 服务器，按共同个区域指南交换 IPS 文件。 | RACSEL 个 IPS-LAC，还有拉丁美洲搭加勒比海地区个 Pan American Highway for Digital Health (PH4H) [[16]](#ref-16) |
| **由病人传递** | 病人拿 IPS 存勒应用或者钱包里向，用二维码或者 SMART Health Link 分享。 | CommonHealth；WHO 信任网络为朝圣而做个 IPS 工作 [[10]](#ref-10) [[14]](#ref-14) |
| **基于 API 个访问** | 应用通过 FHIR API 为获授权个病人获取 IPS。 | International Patient Access (IPA)；美国个网络，比方讲 Flexpa，伊勒 CMS Interoperability Framework 下加了 IPS 支持 [[17]](#ref-17) [[18]](#ref-18) |

要规划个整合点：

- **文件分享：**IHE 配置档，比方讲 MHD（FHIR）搭 XDS（文件登记册），用来存储搭查找 IPS 文件。IHE IPS 内容配置档加了符合性搭测试规则 [[11]](#ref-11)。
- **病人身份：**IHE PIXm 搭 PDQm，或者国家标识符，用来勒各个系统之间匹配病人。
- **现有文件：**交关系统已经勒生成 CDA、C-CDA 或者国家摘要。拿搿些映射到 IPS 通常比重新开始要容易，但是要当心基数、值集搭代码系统个差异。
- **国家配置档：**国家核心规范，比方讲 US Core、AU Core、CH Core 或者 JP Core，搭 IPS 好有差别。国家病人摘要配置档来协调两家 [[5]](#ref-5) [[6]](#ref-6) [[19]](#ref-19)。
- **翻译搭显示：**接收方应该显示叙述文字，并且用代码勒接收方语言里个显示名称来翻译编码条目。
- **安全：**用 TLS、需要个辰光用签名文件、审计日志（比方讲 IHE ATNA 或者 BALP），还有搭同意挂钩个访问控制。


## 目前个采用情况

IPS 已经从试点走进国家搭地区项目。情况变得快，所以最新个状况请看链接个来源。

- **IPS Implementation Registry。**IPS 社区维护一个公开个实施登记册。2026 年中，登记册列出 34 个项目，从阿根廷由服务提供者主导个 IPS-LAC 项目，到越南个 Better Health Program [[15]](#ref-15)。
- **FHIR 生态。**勒 HL7 International 搭 Firely 2025 年个 State of FHIR 调查里向，有 42 位受访者讲 IPS 是伊拉国家 FHIR 规范个基础，比任何其他国际指南侪多 [[20]](#ref-20)。
- **研究。**一项 2025 年个 IPS 采用研究访问了利益相关方，伊拉指出更好个护理质量搭病人安全是主要好处 [[21]](#ref-21)。

| 国家或者地区 | 状况 |
|---|---|
| **欧盟搭欧洲经济区** | MyHealth@EU 勒各国之间交换病人摘要搭电子处方。2026 年欧盟委员会一份简报指出，17 个成员国加挪威已经上线，大部分其余国家侪计划加入 [[2]](#ref-2) [[22]](#ref-22)。EHDS 条例规定病人摘要交换勒 2029 年之前必须实行 [[23]](#ref-23)。 |
| **加拿大** | 泛加拿大病人摘要（PS-CA）由 Canada Health Infoway 勒 2022 年 10 月批准，建立勒 IPS 个基础浪，并加入加拿大个调整 [[4]](#ref-4)。 |
| **澳大利亚** | AU Patient Summary 建立勒 IPS 搭 AU Core 个基础浪，由 HL7 Australia 通过 Sparked 项目开发 [[5]](#ref-5) [[24]](#ref-24)。 |
| **瑞士** | HL7 Switzerland 个 CH IPS 2.0.0（试用）建立勒 IPS 搭 CH Core 个基础浪。另外一个配置档加了瑞士电子病人记录所需要个内容 [[6]](#ref-6)。 |
| **美国** | IPS 呒没联邦强制要求。美国用 US Core 搭 USCDI。联邦机构参与国际 IPS 工作，也有部分网络自愿支持 IPS [[18]](#ref-18)。 |
| **拉丁美洲搭加勒比海地区** | RACSEL 各国卫生部使用区域性个 IPS-LAC 指南。2023 年，16 个国家勒圣保罗个一次 connectathon 里交换 IPS-LAC 文件 [[16]](#ref-16)。 |
| **日本** | 研究人员用 JP Core 建立并验证了一个以 IPS 为基础、针对日本常见使用场景个病人摘要应用 [[19]](#ref-19)。 |
| **台湾搭菲律宾** | 一份 2025 年个实施报告描述一个用 FHIR、并搭 IPS 对齐个跨境个人健康记录 [[25]](#ref-25)。 |
| **G7** | 2021 年 G7 卫生部长承诺朝 IPS 方向努力，并发表了一份 IPS 路线图 [[26]](#ref-26)。 |
| **WHO** | WHO Global Digital Health Certification Network 包括以 IPS 为基础个信任领域，比方讲为朝圣而设个可验证 IPS [[14]](#ref-14)。 |


## 各国搭地区个法律、法规搭政策

IPS 是标准，覅是法律。法律决定一个国家是否必须交换病人摘要、用啥格式，还有勒啥隐私规则下进行。搿搭只是摘要，覅是法律意见。请一定查阅法律个最新文本。

| 司法管辖区 | 法律或者政策 | 对 IPS 个意义 |
|---|---|---|
| **欧盟** | **European Health Data Space (EHDS) Regulation, (EU) 2025/327。**2025 年 3 月 5 日公布；2025 年 3 月 26 日生效 [[23]](#ref-23) [[27]](#ref-27)。 | 病人摘要是"优先类别"。以欧洲 EHR 交换格式进行个交换，必须勒 2029 年之前勒每个成员国行得通。医学影像、检验结果搭出院报告勒 2031 年之前跟上 [[28]](#ref-28)。病人摘要个格式以 HL7 IPS 为基础。 |
| **欧盟** | **Directive 2011/24/EU**，关于病人勒跨境医疗保健方面个权利 [[29]](#ref-29)。 | 成立了 eHealth Network，伊约定了 MyHealth@EU 背后个病人摘要指南。 |
| **欧盟** | **General Data Protection Regulation (GDPR), (EU) 2016/679** [[30]](#ref-30)。 | 健康数据属于特殊类别。每次 IPS 交换侪要有合法依据搭适当个保障措施。 |
| **美国** | **21st Century Cures Act 搭信息阻挡规则** [[31]](#ref-31)；自愿参加个 **CMS Interoperability Framework**（2025）[[17]](#ref-17)。 | 呒没法律规定要用 IPS。法律要求勒使用 US Core 搭 USCDI 个前提下，提供电子健康信息个访问搭交换。IPS 支持是自愿个。 |
| **加拿大** | 各省搭地区个健康信息法律。联邦个 **Connected Care for Canadians Act**（Bill C-72）勒 2024 年提出，但是勒 2025 年国会休会之前呒没通过。 | PS-CA 是泛加拿大规范，覅是法律要求。采用工作由各省搭地区连同 Canada Health Infoway 带领 [[4]](#ref-4)。 |
| **英国** | **Data (Use and Access) Act 2025** [[32]](#ref-32)。 | 包括为医疗搭成人社会护理信息技术制订信息标准个权力。英国是 2021 年 G7 IPS 承诺个主办国 [[26]](#ref-26)。 |
| **澳大利亚** | **My Health Records Act 2012** 搭 2025 年个"默认分享"修订。 | AU Patient Summary 是通过 Sparked 开发个国家规范 [[5]](#ref-5) [[24]](#ref-24)。 |
| **瑞士** | **2015 年 6 月 19 日个电子病人记录联邦法（EPRA, SR 816.1）**，自 2017 年 4 月 15 日起生效 [[33]](#ref-33)。 | CH IPS 包括一个适用于瑞士电子病人记录文件个配置档 [[6]](#ref-6)。 |
| **拉丁美洲搭加勒比海地区** | 通过 RACSEL 搭 PH4H 达成个区域协议，美洲开发银行支持建立区域法律框架 [[16]](#ref-16)。 | IPS-LAC 是约定好用于跨境交换个区域格式。 |
| **G7** | **卫生部长公报**，牛津，2021 年 6 月，搭 **G7 IPS 路线图**，2021 年 12 月 [[26]](#ref-26) [[34]](#ref-34)。 | 是朝 IPS 搭病人访问方向努力个政治承诺，覅是有约束力个法律。 |


## 好处搭坏处

| 好处 | 坏处 |
|---|---|
| **更安全个勿预约护理。**临床医务人员几秒钟里向就看到过敏、药物搭问题。 | **质量全靠来源。**过时或者错误个来源数据会生成过时或者错误个摘要。 |
| **一个格式，全世界通用。**一次实施就好满足国家搭跨境个需要。 | **各国有差异。**国家配置档会加规则，所以勒一个国家"有效"个 IPS，可能要再做点事体才会被另外一个国家接受。 |
| **建立勒开放、成熟个标准个基础浪：**ISO、CEN、HL7 FHIR 搭 CDA、SNOMED CT 搭 LOINC。 | **术语负担。**拿本地代码映射到 SNOMED CT 搭 LOINC 是吃力个工作，而且完整个 SNOMED CT 超出免费 IPS 子集之外要领牌照。 |
| **好读又好计算。**叙述文字拨人看，编码数据拨软件搭翻译用。 | **如果生成器勿当心，叙述文字搭编码数据可能会搭界勿拢**，接收方可能相信错个一个。 |
| **病人赋权。**病人好保管搭分享自家个摘要。 | **隐私搭同意风险。**好带来带去个摘要蛮敏感，各国个法律搭同意模式也勿一样。 |
| **免费规范**搭免费 IPS 术语降低成本 [[12]](#ref-12)。 | **版本混乱。**STU 1、STU 1.1 搭 STU 2 并存，而 EHDS 格式引用较早个版本 [[28]](#ref-28)。 |
| **好重复使用**勒疫苗接种证明、研究搭登记册 [[7]](#ref-7) [[8]](#ref-8)。 | **特为做得精简。**取代勿了完整记录或者专科文件，而二次使用个缺口需要扩展 [[7]](#ref-7)。 |
| **有力个支持**，来自各国政府、欧盟、G7、WHO 搭标准组织。 | **采用情况参差勿齐。**交关国家搭厂商还勒试点阶段，病人个知晓度也低。 |


## 计划搭未来方向

- **欧盟，2029：**勒 EHDS 下，所有欧盟成员国侪实行病人摘要搭电子处方交换 [[23]](#ref-23) [[28]](#ref-28)。
- **欧盟，2031：**医学影像、化验结果搭出院报告加入欧洲 EHR 交换格式 [[28]](#ref-28)。
- **MyHealth@EU 扩展：**更多国家加入，还有为化验结果、出院报告搭医学影像推出个新服务 [[2]](#ref-2) [[22]](#ref-22)。
- **FHIR IPS STU 2 采用：**实施人员转到 Alerts 搭 Patient Story 章节、明确个空白章节，还有 SNOMED CT IPS 术语 [[9]](#ref-9)。
- **澳大利亚：**计划勒 2026 年发布 AU Patient Summary Release 1 [[24]](#ref-24)。
- **IPS Best Practices Project：**一项社区工作，记录经验教训，2026 年开始。
- **WHO 信任网络：**更多以 IPS 为基础个信任领域，用于可验证、好随身带个健康文件 [[14]](#ref-14)。
- **SMART Health Links：**通过 HL7 标准化，用于由病人控制个分享 [[10]](#ref-10)。
- **拉丁美洲搭加勒比海地区：**通过 PH4H 扩大 IPS-LAC 交换 [[16]](#ref-16)。
- **研究搭二次使用：**拿病人摘要扩展用于临床研究搭人工智能，同时保持核心精简 [[7]](#ref-7)。


## 词汇表

| 词语 | 意思 |
|---|---|
| **IPS** | International Patient Summary |
| **FHIR** | Fast Healthcare Interoperability Resources，HL7 个现代化 API 标准 |
| **CDA** | Clinical Document Architecture，HL7 个 XML 文件标准 |
| **IG** | Implementation Guide，一套用来应用标准个配置档搭规则 |
| **Profile** | 针对特定用途而受到限制个 FHIR 资源版本 |
| **SNOMED CT** | Systematized Nomenclature of Medicine – Clinical Terms |
| **LOINC** | Logical Observation Identifiers Names and Codes |
| **SMART Health Links** | 通过链接或者二维码分享健康数据个标准 |
| **JIC** | Joint Initiative Council for Global Health Informatics Standardization |


## 了解更多

- HL7 FHIR IPS Implementation Guide: <https://hl7.org/fhir/uv/ips/>
- IPS continuous build: <https://build.fhir.org/ig/HL7/fhir-ips/>
- International Patient Summary project site: <https://international-patient-summary.net/>
- ISO 27269 (Health informatics — International patient summary): <https://www.iso.org/standard/79491.html>
- SNOMED CT IPS Terminology: <https://www.snomed.org/international-patient-summary-terminology>
- SMART Health Links: <https://docs.smarthealthit.org/smart-health-links/>


## 资源

搿些链接涵盖有关 IPS 个来源、规范、软件、项目、视频、书籍搭研究。大部分勒写搿一页个辰光已经检查过。有几个出版商个网站会封锁自动检查，搿些就标明了 *（朆检查）*。

### 官方规范搭标准

- [HL7 FHIR IPS Implementation Guide, current published version](https://hl7.org/fhir/uv/ips/) 是有权威个 FHIR 规范。
- [HL7 FHIR IPS Implementation Guide, STU 2](https://hl7.org/fhir/uv/ips/STU2/)
- [HL7 FHIR IPS Implementation Guide, STU 1.1](https://hl7.org/fhir/uv/ips/STU1.1/)
- [HL7 FHIR IPS publication history](https://www.hl7.org/fhir/uv/ips/history.html) 列出每一个已经发布个版本。
- [HL7 FHIR IPS continuous build](https://build.fhir.org/ig/HL7/fhir-ips/) 是最新、朆经过投票个进行中工作。
- [Structure of the International Patient Summary](https://hl7.org/fhir/uv/ips/en/Structure-of-the-International-Patient-Summary.html) 解释章节搭配置档。
- [IPS design conventions](https://build.fhir.org/ig/HL7/fhir-ips/en/Design-Conventions.html) 涵盖 must-support、缺失数据搭叙述文字。
- [IPS generation and data inclusion](https://build.fhir.org/ig/HL7/fhir-ips/en/Generation-and-Data-Inclusion.html) 涵盖 `$summary` 搭哪能挑选内容。
- [HL7 CDA IPS Implementation Guide, continuous build](https://build.fhir.org/ig/HL7/CDA-IPS/)
- [HL7 CDA IPS product brief](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=483)
- [ISO 27269, Health informatics — International patient summary](https://www.iso.org/standard/79491.html) *（朆检查）*
- [ISO/TC 215 Health informatics committee](https://www.iso.org/committee/54960.html) *（朆检查）*
- [IHE FHIR International Patient Summary profile (FIIO)](https://profiles.ihe.net/PCC/FIIO/volume-1.html)
- [IHE PCC International Patient Summary supplement, 2020 (PDF)](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS_Rev1-0_PC_2020-03-17.pdf)
- [HL7 SMART Health Cards and Links Implementation Guide](https://hl7.org/fhir/uv/smart-health-cards-and-links/)
- [SMART Health Links documentation](https://docs.smarthealthit.org/smart-health-links/)
- [HL7 FHIR International Patient Access (IPA)](https://hl7.org/fhir/uv/ipa/) 是供病人 API 访问用个姊妹规范。
- [HL7 FHIR R4 base specification](https://hl7.org/fhir/R4/)，IPS 是建立勒搿份规范个基础浪。

### 源代码仓库

- [HL7/fhir-ips](https://github.com/HL7/fhir-ips) 存放用 FHIR Shorthand 写个 FHIR IPS IG 源代码。
- [HL7/cda-ips](https://github.com/HL7/cda-ips) 存放 CDA IPS IG 源代码。
- [hl7-eu/eps](https://github.com/hl7-eu/eps) 存放 HL7 Europe Patient Summary 源代码。
- [hl7ch/ch-ips](https://github.com/hl7ch/ch-ips) 存放瑞士 IPS，附带开发中个查看器搭生成器。
- [GitHub topic: international-patient-summary](https://github.com/topics/international-patient-summary) 列出社区个仓库。

### 国家搭地区个调整版本

- [HL7 Europe Patient Summary (EPS), continuous build](https://build.fhir.org/ig/hl7-eu/eps/)
- [AU Patient Summary (Australia), continuous build](https://build.fhir.org/ig/hl7au/au-fhir-ps/)
- [Trillium II IPS structure (HL7 Europe)](https://hl7.eu/fhir/build/trillium2/site/ipsStructure.html) 来自帮忙启动 IPS 个欧盟–美国项目。
- [eHealth Suisse](https://www.ehealthsuisse.ch/) 是瑞士个数字健康专业中心，也负责推动 IPS 采用。
- [MyHealth@EU, cross-border digital health services](https://health.ec.europa.eu/ehealth-digital-health-and-care/electronic-cross-border-health-services_en)
- [Xt-EHR Joint Action](https://www.xt-ehr.eu/) 筹备欧洲健康数据空间个格式，包括病人摘要。

### 软件搭工具

- [IPS Viewer](https://www.ipsviewer.com)（[source: jddamore/IPSviewer](https://github.com/jddamore/IPSviewer)）是开源、用浏览器运行个 IPS 查看器。
- [uwcirg/shl-ips-viewer](https://github.com/uwcirg/shl-ips-viewer) 用来查看通过 SMART Health Link 分享个 IPS。
- [smart-on-fhir/smart-health-links](https://github.com/smart-on-fhir/smart-health-links) 是 SMART Health Links 个参考实现。
- [HAPI FHIR IPS generator](https://hapifhir.io/hapi-fhir/docs/server_ips/introduction.html)（[source: hapifhir/hapi-fhir](https://github.com/hapifhir/hapi-fhir)）是实现 `$summary` 个开源 Java 服务器模块。
- [HAPI FHIR JPA server IPS documentation](https://hapifhir.io/hapi-fhir/docs/server_jpa/ips.html)
- [Inferno IPS Test Kit](https://inferno.healthit.gov/test-kits/ips)（[source: inferno-framework/ips-test-kit](https://github.com/inferno-framework/ips-test-kit)）是开源个符合性测试工具。
- [FHIR Validator](https://validator.fhir.org/) 用来对照 IG 配置档验证 IPS bundle。
- [Simplifier: hl7.fhir.uv.ips package](https://simplifier.net/packages/hl7.fhir.uv.ips) 有软件包、配置档搭例子。
- [FHIR package registry](https://registry.fhir.org/)
- [FHIR Shorthand (FSH) School](https://fshschool.org/) 教写 IPS IG 所用个语言。
- [CommonHealth](https://www.commonhealth.org/) 是一个病人应用，好生成 IPS，并通过 SMART Health Links 分享。
- [WHO SMART Trust](https://github.com/WorldHealthOrganization/smart-trust) 是 WHO Global Digital Health Certification Network 个信任框架。

### 组织搭项目

- [International Patient Summary project site](https://international-patient-summary.net/) 有新闻、采用报告搭教育资源。
- [IPS for health IT developers](https://international-patient-summary.net/health-it-developer/)
- [HL7 International](https://www.hl7.org/)
- [IHE International](https://www.ihe.net/)
- [SNOMED International](https://www.snomed.org/)
- [SNOMED CT IPS Terminology](https://www.snomed.org/international-patient-summary-terminology) 是供 IPS 使用个免费子集。
- [LOINC](https://loinc.org/) *（朆检查）*
- [Joint Initiative Council for Global Health Informatics Standardization (JIC)](http://www.jointinitiativecouncil.org/)
- [Global Digital Health Partnership (GDHP)](https://gdhp.health/)
- [WHO SMART Guidelines](https://smart.who.int/)
- [WHO Global Digital Health Certification Network](https://www.who.int/initiatives/global-digital-health-certification-network)

### 社区搭活动

- [chat.fhir.org](https://chat.fhir.org/) 是 FHIR 社区个聊天室，有活跃个 IPS 频道。
- [HL7 FHIR Connectathons](https://www.hl7.org/events/fhir-connectathon/)
- [IHE Connectathons](https://www.ihe.net/participate/connectathon/)

### 视频

- [HIMSS20: IPS for computable care guidelines in 200 seconds or less (IHE International, YouTube)](https://www.youtube.com/watch?v=xjEzGM8kBPw)
- [IHE International YouTube channel](https://www.youtube.com/@IHEIntl) 有 Connectathon 专题讨论搭 IPS 环节。
- [IPS project site news](https://international-patient-summary.net/) 链接到交关录好个网络研讨会，包括：
  - the IPS panel at the IHE North America Connectathon, 2024
  - the IPS session at FHIR DevDays 2023
  - Grahame Grieve on IPS and IPA, IHE Connectathon Montreux 2022
  - the SNOMED CT Expo 2022 keynote
  - Matthew Rahn on IPS in the GDHP
  - the HL7 "Global Passport" cross-border webinar
- [YouTube search: International Patient Summary](https://www.youtube.com/results?search_query=international+patient+summary)

### 书籍

- Tim Benson and Grahame Grieve, [*Principles of Health Interoperability: FHIR, HL7 and SNOMED CT*](https://link.springer.com/book/10.1007/978-3-030-56883-2), 4th edition, Springer, 2020。内容涵盖 FHIR、临床摘要资源搭术语。

### 研究论文搭文章

- Laleci Erturkmen G. B., Sinaci A. A., Namli T., Boonstra M., et al., "[An assessment of the European Patient Summary for clinical research: a case study in cardiology](https://doi.org/10.3389/fmed.2024.1481551)", *Frontiers in Medicine*, 2024.
- Lee H., Huang J., Huang S., Chen W., et al., "[Implementing a Cross-Border Next-Generation Personal Health Record in the Philippines and Taiwan: An Implementation Case Report Using Health Level 7 International Fast Healthcare Interoperability Resources](https://doi.org/10.2196/56272)", *JMIR Formative Research*, 2025.
- Song C., Nakayama M., "[Implementation of a Patient Summary Web Application According to the International Patient Summary and Validation in Common Use Cases in Japan](https://doi.org/10.1007/s10916-023-01993-6)", *Journal of Medical Systems*, 2023.
- Schippers D., Spil T., Stegwee R., Folmer E., Donnelly S., "[The adoption and diffusion of the International Patient Summary](https://doi.org/10.24251/hicss.2025.425)", *Proceedings of the 58th Hawaii International Conference on System Sciences (HICSS)*, 2025.
- da Silva Carvalho N., Papadimitriou A., Stegwee R., Gille H., et al., "[Accelerating European electronic health record exchange format (EEHRxF) implementation across Europe: a policy perspective](https://doi.org/10.3389/fmed.2025.1648170)", *Frontiers in Medicine*, 2025.
- Kay S., Cangioli G., Nusbaum M., "[The International Patient Summary and the extensibility requirement](https://international-patient-summary.net/the-international-patient-summary-and-the-extensibility-requirement/)", *Studies in Health Technology and Informatics* (pHealth), 2020.
- D'Amore J., Cangioli G., Hausam R., "[Advancing the International Patient Summary](https://international-patient-summary.net/advancing-the-international-patient-summary/)"
- "[Towards the Austrian Patient Summary](https://international-patient-summary.net/towards-the-austrian-patient-summary/)", *Studies in Health Technology and Informatics* (dHealth).
- "[Revival of the International Patient Summary (IPS)](https://smiledigitalhealth.com/our-blog/revival-of-the-international-patient-summary-ips)", Smile Digital Health blog.
- [PubMed search: "international patient summary"](https://pubmed.ncbi.nlm.nih.gov/?term=%22international+patient+summary%22) 搜索经过同行评审个文献。


## References

正文里向个编号引用，比方讲 [1]，会链接到下面对应个条目。链接勒 2026 年 11 月检查过。法律、采用数字搭版本侪会变，所以请查阅来源了解最新情况。

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

以上来源勒正文里向朆被引用，但是是标准本身个主要参考资料。

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
