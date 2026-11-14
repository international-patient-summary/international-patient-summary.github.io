# 国际患者摘要（IPS）

**国际患者摘要（International Patient Summary，IPS）**是一项关于简短电子健康档案摘录的全球标准。它包含临床医生安全地治疗患者所需的基本临床事实。其设计目标是：

- **精简且非穷尽。** 它是健康档案中经过精心挑选的一小部分，而不是完整档案。
- **不限专科。** 任何临床医生、任何学科都可以使用。
- **不限病种。** 它不与某种特定疾病或诊疗路径绑定。
- **可实施且国际通用。** 它建立在全球标准和术语体系之上，因此可跨国家、语言和信息系统使用。

简而言之，对于从未见过患者的临床医生，IPS 回答一个问题：*“为了安全地照护这位患者，我现在需要知道什么？”*


## IPS 为何存在

健康信息通常被锁在本地电子健康档案（EHR）、国家系统或供应商的产品中。当患者到别处就医时，例如另一家医院、另一个地区或另一个国家，接诊的临床医生往往无法获取其病史。IPS 为所有人提供了一种共享、可携带的摘要格式。

### 核心使用场景

| 使用场景 | 说明 |
|---|---|
| **非计划就医与急诊** | 患者在远离家乡时生病或受伤，当地临床医生无法访问其家乡的 EHR。这是最初的、首要的使用场景。 |
| **跨境医疗** | 旅行者、移民、跨境工作者和难民携带一份国外临床医生能够阅读的摘要。 |
| **计划性医疗与转诊衔接** | 转诊、专科会诊、入院、出院以及医疗机构之间的交接。 |
| **医疗旅游与人员流动** | 选择在其他司法管辖区接受医疗服务的患者。 |
| **患者赋权** | 患者通过手机应用、门户网站或纸质副本持有、查看并分享自己的摘要。 |


## 何时使用 IPS

当不认识患者的人需要快速获得一份可信的快照，且发送方和接收方不共用同一信息系统时，请使用 IPS。

### 适合的场景

- **急诊与非计划医疗**，尤其是在远离家乡或跨越国境时。这正是 IPS 的设计初衷。
- **国家系统之间的跨境交换**，例如欧盟的 MyHealth@EU 服务 [[1]](#ref-1) [[2]](#ref-2)。
- **由患者持有的摘要**，旅行者、移民、难民、朝觐者或患有复杂疾病的人可将其存放在手机上或打印携带 [[3]](#ref-3)。
- **国家或区域患者摘要。** 许多国家将自己的摘要构建为 IPS 的一个配置文件（profile），因此它也可以在国际上交换 [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6)。
- **医疗衔接的通用基线**，例如转诊、入院和出院，在没有更丰富的专科文档时使用。
- **其他数据集的起点**，例如疫苗接种证书、研究数据或需要相同核心事实的登记系统 [[7]](#ref-7) [[8]](#ref-8)。

### 不适合的场景

- **完整的病历。** IPS 刻意保持精简。当细节很重要时，请使用完整的病历导出或专门的文档。
- **特定专科的文档**，例如肿瘤治疗摘要、孕产记录或详细的出院小结。这些文档有各自的标准，可以包含或引用 IPS 的内容。
- **单一机构内部的实时临床工作流。** 在单一 EHR 内部，应查询实时数据，而不是摘要快照。
- **法律、计费或保险记录。** IPS 是临床摘要，不是行政或理赔记录。
- **需要保证完整性的决策。** IPS 的完整性和时效性仅取决于其数据来源和作者。如有可能，请始终与患者确认关键事实。


## IPS 包含什么

IPS 文档分为两层：

1. **记录“谁、什么、何时”的文档头：**
   - **患者：** 身份、人口统计信息和联系方式。
   - **作者：** 生成该摘要的人员、机构或系统。
   - **保管者：** 负责维护该摘要的机构。
   - **认证者：** 核实该摘要的人（如有）。
   - **日期和时间：** 创建时间。

2. **按章节组织的临床正文。** 章节分为必需、推荐或可选。

| 章节 | 状态 | 典型内容 |
|---|---|---|
| **用药摘要** | 必需 | 当前及相关的既往用药、处方、剂量 |
| **过敏与不耐受** | 必需 | 药物、食物和环境过敏；反应及严重程度 |
| **问题列表** | 必需 | 活动性诊断、病情和临床问题 |
| 免疫接种 | 推荐 | 已接种的疫苗，如破伤风、乙型肝炎、流感、COVID-19 |
| 操作史 | 推荐 | 重大手术和侵入性干预 |
| 医疗器械 | 推荐 | 植入物和器械，如心脏起搏器、支架、假体 |
| 诊断结果 | 推荐 | 关键实验室结果、影像报告、病理 |
| 生命体征 | 可选 | 血压、心率、体重、身高、BMI |
| 既往病史 | 可选 | 已痊愈的病情和重要的既往问题 |
| 功能状态 | 可选 | 残疾以及完成日常活动的能力 |
| 照护计划 | 可选 | 照护计划和治疗建议 |
| 社会史 | 可选 | 烟草、酒精及其他相关生活方式因素 |
| 妊娠史 | 可选 | 当前妊娠状态和妊娠史 |
| 预先指示 | 可选 | 生前预嘱、复苏意愿、同意声明 |
| 警示 | 可选 | 不属于其他章节的安全关键警告（FHIR IPS STU 2 新增） |
| 患者自述 | 可选 | 患者所重视的内容：需求、优势、价值观、顾虑和偏好，以患者自己的话表述（FHIR IPS STU 2 新增） |

**明确表示“无”很重要。** 空白的章节无法告诉临床医生，患者是没有过敏，还是根本没人记录过。因此 IPS 要求给出明确的陈述，例如*“无已知过敏”*、*“当前无用药”*或*“信息不可用”*。


## IPS 背后的标准

IPS 是一组相互协调的标准。ISO 和 CEN 标准规定患者摘要*必须包含什么*。HL7 实施指南规定*如何编码*。

| 标准 | 机构 | 作用 |
|---|---|---|
| **EN 17269** | CEN（欧洲标准化委员会） | 抽象的 IPS 数据集，2019 年发布 |
| **ISO 27269** | ISO（国际标准化组织） | 抽象 IPS 数据集的国际版本，2021 年发布 |
| **CEN/TS 17288** | CEN | 面向跨境使用的 IPS 实施指南 |
| **HL7 FHIR IPS 实施指南** | HL7 International | 现代的、对 API 友好的编码方式，也是主要的实施格式。STU 2（2.0.x）新增了“警示”和“患者自述”章节，允许空章节，澄清了 `$summary`，并改用 SNOMED CT IPS 术语集 [[9]](#ref-9)。 |
| **HL7 CDA IPS 实施指南** | HL7 International | 基于 XML 文档的编码方式，常见于现有的国家和欧洲基础设施 |

这项工作由**全球健康信息标准化联合倡议委员会（Joint Initiative Council for Global Health Informatics Standardization，JIC）**协调。JIC 汇集了 ISO、CEN、HL7、SNOMED International、IHE 等组织。IPS 源于 2016 年欧美在跨境健康数据方面的合作，目前得到世界各国政府和数字健康项目的支持。


## 如何用 HL7 FHIR 编码 IPS

在 FHIR 中，IPS 是一个类型为 `document` 的 **`Bundle`**：

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

关键技术要点：

- **每个章节都有人类可读的叙述文本。** 即使没有任何 FHIR 软件，临床医生也可以在普通浏览器中阅读 IPS。
- **每个章节还有编码条目**，即软件可以处理、翻译和核对的结构化 FHIR 资源。
- **配置文件（Profile）对基础 FHIR 资源加以约束。** 例如，*Patient (IPS)* 和 *AllergyIntolerance (IPS)* 定义了最低限度的数据和“必须支持”的元素。
- **`$summary` 操作**（`GET [base]/Patient/[id]/$summary`）请求 FHIR 服务器按需为某位患者生成 IPS。
- **IPS 可签名且自包含。** 一份完整的文档可以作为一个整体被存储、发送、签名和验证。


## 术语体系

共享的代码系统使 IPS 能够跨语言、跨国家阅读：

| 术语体系 | 用途 |
|---|---|
| **SNOMED CT** | 问题、过敏、操作、器械、临床发现。有一个免费的 **SNOMED CT IPS 术语集**子集可用于 IPS，非会员国家也可使用。 |
| **LOINC** | 文档和章节类型、实验室检查、生命体征 |
| **ATC** 及其他药品代码系统 | 药品和活性物质 |
| **UCUM** | 计量单位 |
| **ISO 和 HL7 值集** | 国家、语言、行政性别、缺失和未知的原因 |

由于条目是经过编码的，接收系统可以用英文标签显示一份用葡萄牙语写成的 IPS。编码所表达的含义保持不变。


## 患者和临床医生如何使用 IPS

IPS 可以由 EHR、国家健康档案服务、患者门户或个人健康应用生成。随后可以通过多种方式传递：

- **系统到系统：** 通过 FHIR REST API、国家基础设施或跨境网关，例如欧盟的 MyHealth@EU 网络。
- **由患者中介的分享：** 患者将摘要保存在钱包或健康应用中，并按需分享。
- **SMART Health Links：** 一个二维码或网址，为临床医生提供限时的、可选择口令保护的加密 IPS 访问权限。临床医生可以在普通网页浏览器中打开。
- **纸质或 PDF：** 在其他方式都不可用时，作为后备的打印版叙述文本。

**CommonHealth** 等应用让患者可以汇集自己的记录，并通过 SMART Health Links 分享 IPS。

一个典型的急诊场景：

1. 一位旅行者在国外突然倒下。
2. 旅行者或其同伴出示手机上的二维码。
3. 急诊医生扫描后，几秒钟内即可看到旅行者的用药、过敏和活动性问题。
4. 医生避免了危险的药物相互作用，并安全地治疗了患者。


## 原则与设计选择

- **安全第一。** 内容的选择依据临床相关性，而非完整性。
- **全球为本，本地扩展。** 各国创建国家配置文件，例如欧盟、澳大利亚或加拿大的版本，在不破坏国际核心的前提下增加要求。
- **人类可读，机器可处理。** 叙述文本与编码数据并存。
- **免费且开放。** HL7 IPS 规范和 IPS SNOMED CT 子集可免费获取，以降低采用门槛。
- **隐私与同意。** 访问受当地法律和患者同意的约束。SMART Health Links 等机制让患者保持控制权。


## 如何使用 IPS

### 面向患者

1. **索取一份。** 询问您的诊所、医院、国家健康门户或健康应用，能否生成 IPS 或基于 IPS 的国家患者摘要。
2. **检查它。** 在身体健康时阅读。报告任何错误或遗漏，尤其是过敏和用药。
3. **随身携带。** 将其存放在健康应用或钱包中，保存为 SMART Health Link 二维码，或打印后放入您的旅行证件中。
4. **保持最新。** 在有新的诊断、新的长期用药、手术或植入物之后，重新获取一份。
5. **有意识地分享。** 将其出示给为您治疗的临床医生。SMART Health Link 可以过期，也可以要求口令，因此您可以控制谁能查看以及可查看多久 [[10]](#ref-10)。

### 面向临床医生

1. **先查看文档头。** 谁写的、何时写的，以及是否有人核实过。过旧或未经核实的摘要需要更加谨慎。
2. **先阅读必需章节：** 过敏、用药和问题。
3. **区分“无已知”与“未记录”。** “无已知过敏”是一项临床陈述。空白或“未知”的章节则不是。
4. **确认关键事实**，只要可能，就与患者或其同伴核对。
5. **利用编码数据。** 如果您的系统支持，编码条目可使摘要以您的语言显示，并可对照药物相互作用和过敏规则进行检查。
6. **不要假定其完整。** IPS 是安全网，不是完整病史。

### 面向实施者

1. **选定规范。** 使用当前的 HL7 FHIR IPS 实施指南（STU 2），或您所在国家基于它的国家配置文件。对于基于 CDA 的基础设施，请使用 CDA IPS 指南 [[9]](#ref-9) [[11]](#ref-11)。
2. **映射您的数据。** 将本地数据映射到 IPS 配置文件：`Patient`、`AllergyIntolerance`、`MedicationStatement`、`Condition` 等。大部分工作都在这一映射上。
3. **映射您的术语。** 将本地代码映射到 SNOMED CT、LOINC 和药品代码系统。SNOMED CT IPS 术语集可为此目的免费使用 [[12]](#ref-12)。
4. **生成文档。** 支持 `$summary` 操作，或自行构建 `Bundle` 和 `Composition`。为每个章节提供可读的叙述文本，以及明确的“无已知”或“不可用”陈述。
5. **验证它。** 使用 FHIR Validator 和一致性测试工具包（例如 Inferno IPS Test Kit）检查每一份生成的文档 [[13]](#ref-13)。
6. **签名并分享。** 决定文档如何签名、存储和发送：API、文档注册库、跨境网关，或 SMART Health Link。
7. **安全地使用它。** 作为接收方，即使无法处理每一个编码条目，也应显示叙述文本，保持来源和作者可见，并且绝不要不加提示地把收到的数据合并进本地记录。
8. **与他人测试。** 在上线前，在 IHE 和 HL7 Connectathon 上与其他供应商和国家进行互操作测试。

### 面向政府和卫生机构

1. **采用基于 IPS 的国家配置文件**，而不是另立格式，使国家摘要默认就具有国际通用性 [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6)。
2. **确定治理方式：** 谁可以创建、更新和认证摘要，以及谁对其准确性负责。
3. **确定术语许可：** SNOMED CT 会员资格，或使用免费的 IPS 子集。
4. **确定身份、同意与信任：** 如何识别患者、如何记录同意，以及使用哪种信任框架（例如 MyHealth@EU 或 WHO 全球数字健康认证网络）来验证文档 [[1]](#ref-1) [[14]](#ref-14)。
5. **公布您已建成的成果**，发布到 IPS 实施注册库，让他人从中学习 [[15]](#ref-15)。


## 将 IPS 与医疗系统集成

IPS 很少是一个独立的系统。它是对已存在于 EHR、健康信息交换平台、国家档案和个人健康应用中的数据的一种视图。

| 集成模式 | 工作方式 | 示例 |
|---|---|---|
| **由 EHR 生成** | EHR 根据请求，利用自身数据构建 IPS，通常通过 FHIR `$summary` 操作。 | EHR 供应商和 FHIR 服务器，如带有 IPS 生成器模块的 HAPI FHIR |
| **国家或区域档案** | 国家患者摘要服务存储 IPS 的一个配置文件，并向获授权的医疗提供者开放。 | 加拿大的 PS-CA、澳大利亚的 AU Patient Summary、瑞士采用 CH IPS 的电子患者档案 [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6) |
| **跨境网关** | 每个国家运营一个国家联络点。它将本国的摘要转换为约定的交换格式，发送到境外，接收国再以本地语言显示。 | MyHealth@EU 电子健康国家联络点 [[1]](#ref-1) [[2]](#ref-2) |
| **区域交换网络** | 各国卫生部通过国家 FHIR 服务器，依据共同的区域指南交换 IPS 文档。 | 拉丁美洲和加勒比地区 RACSEL 的 IPS-LAC 和泛美数字健康高速公路（PH4H） [[16]](#ref-16) |
| **由患者中介** | 患者在应用或钱包中持有 IPS，并通过二维码或 SMART Health Link 分享。 | CommonHealth；WHO 信任网络面向朝觐的 IPS 工作 [[10]](#ref-10) [[14]](#ref-14) |
| **基于 API 的访问** | 应用通过 FHIR API 为获授权的患者获取 IPS。 | 国际患者访问（IPA）；美国的 Flexpa 等网络，在 CMS 互操作性框架下增加了对 IPS 的支持 [[17]](#ref-17) [[18]](#ref-18) |

需要规划的集成要点：

- **文档共享：** MHD（FHIR）和 XDS（文档注册库）等 IHE 配置文件用于存储和查找 IPS 文档。IHE IPS 内容配置文件增加了一致性和测试规则 [[11]](#ref-11)。
- **患者身份：** IHE PIXm 和 PDQm，或国家标识符，用于在各系统间匹配患者。
- **现有文档：** 许多系统已经生成 CDA、C-CDA 或国家摘要。将这些映射到 IPS 通常比从头开始更容易，但要检查基数、值集和代码系统的差异。
- **国家配置文件：** US Core、AU Core、CH Core 或 JP Core 等国家核心规范可能与 IPS 不同。国家患者摘要配置文件负责协调两者 [[5]](#ref-5) [[6]](#ref-6) [[19]](#ref-19)。
- **翻译与显示：** 接收方应呈现叙述文本，并使用代码在接收方语言中的显示名称来翻译编码条目。
- **安全：** 使用 TLS、在要求时使用签名文档、审计日志（例如 IHE ATNA 或 BALP），以及与同意挂钩的访问控制。


## 当前的采用情况

IPS 已经从试点走向国家和区域项目。情况变化很快，请查阅所链接的来源以了解最新进展。

- **IPS 实施注册库。** IPS 社区维护着一个公开的实施注册库。2026 年年中，它列出了 34 个条目，从阿根廷由医疗提供者中介的 IPS-LAC 项目，到越南的“更好健康计划”（Better Health Program） [[15]](#ref-15)。
- **FHIR 生态系统。** 在 HL7 International 和 Firely 2025 年的 State of FHIR 调查中，有 42 位受访者表示 IPS 是其国家 FHIR 规范的基础，超过任何其他国际指南 [[20]](#ref-20)。
- **研究。** 2025 年一项关于 IPS 采用的研究访谈了利益相关者，他们指出，更好的照护质量和患者安全是主要益处 [[21]](#ref-21)。

| 国家或地区 | 状态 |
|---|---|
| **欧盟和欧洲经济区** | MyHealth@EU 在各国之间交换患者摘要和电子处方。欧盟委员会 2026 年的一次演示报告称，17 个成员国加挪威已上线，其余大多数正计划加入 [[2]](#ref-2) [[22]](#ref-22)。EHDS 条例规定，到 2029 年患者摘要交换成为强制要求 [[23]](#ref-23)。 |
| **加拿大** | 泛加拿大患者摘要（PS-CA）由加拿大健康信息高速公路（Canada Health Infoway）于 2022 年 10 月批准，建立在 IPS 之上，并含加拿大本地化调整 [[4]](#ref-4)。 |
| **澳大利亚** | AU Patient Summary 建立在 IPS 和 AU Core 之上，由 HL7 Australia 通过 Sparked 计划开发 [[5]](#ref-5) [[24]](#ref-24)。 |
| **瑞士** | HL7 Switzerland 的 CH IPS 2.0.0（试用）建立在 IPS 和 CH Core 之上。另有一个配置文件补充了瑞士电子患者档案所需的内容 [[6]](#ref-6)。 |
| **美国** | 联邦层面没有对 IPS 的强制要求。美国使用 US Core 和 USCDI。联邦机构参与国际上的 IPS 工作，一些网络自愿支持 IPS [[18]](#ref-18)。 |
| **拉丁美洲和加勒比地区** | RACSEL 各国卫生部使用区域性的 IPS-LAC 指南。2023 年，16 个国家在圣保罗的一次 Connectathon 上交换了 IPS-LAC 文档 [[16]](#ref-16)。 |
| **日本** | 研究人员基于 JP Core，构建并验证了一款面向日本常见使用场景的、基于 IPS 的患者摘要应用 [[19]](#ref-19)。 |
| **台湾和菲律宾** | 2025 年的一份实施报告介绍了一种使用 FHIR 并与 IPS 对齐的跨境个人健康档案 [[25]](#ref-25)。 |
| **G7** | 2021 年，G7 卫生部长承诺致力于推进 IPS，并发布了 IPS 路线图 [[26]](#ref-26)。 |
| **WHO** | WHO 全球数字健康认证网络包含基于 IPS 的信任域，例如面向朝觐的可验证 IPS [[14]](#ref-14)。 |


## 各国家和地区的法律、法规与政策

IPS 是一项标准，而非法律。法律决定一个国家是否必须交换患者摘要、采用何种格式，以及适用何种隐私规则。本节仅为概述，不构成法律意见。请务必查阅法律的现行文本。

| 司法管辖区 | 法律或政策 | 对 IPS 的意义 |
|---|---|---|
| **欧盟** | **欧洲健康数据空间（EHDS）条例，(EU) 2025/327。** 2025 年 3 月 5 日发布；2025 年 3 月 26 日生效 [[23]](#ref-23) [[27]](#ref-27)。 | 患者摘要属于“优先类别”。以欧洲 EHR 交换格式进行的交换，到 2029 年必须在每个成员国可用。医学影像、检查结果和出院报告于 2031 年跟进 [[28]](#ref-28)。患者摘要的格式以 HL7 IPS 为基础。 |
| **欧盟** | 关于患者跨境医疗权利的**第 2011/24/EU 号指令** [[29]](#ref-29)。 | 设立了电子健康网络（eHealth Network），该网络商定了 MyHealth@EU 背后的患者摘要指南。 |
| **欧盟** | **通用数据保护条例（GDPR），(EU) 2016/679** [[30]](#ref-30)。 | 健康数据属于特殊类别。每一次 IPS 交换都需要合法依据和适当的保障措施。 |
| **美国** | **《21 世纪治愈法案》及信息阻断规则** [[31]](#ref-31)；自愿性的 **CMS 互操作性框架**（2025） [[17]](#ref-17)。 | 没有法律要求使用 IPS。法律要求获取和交换电子健康信息，使用 US Core 和 USCDI。对 IPS 的支持是自愿的。 |
| **加拿大** | 各省和地区的健康信息法律。联邦《加拿大人互联照护法》（**Connected Care for Canadians Act**，C-72 号法案）于 2024 年提出，但在 2025 年议会休会前未获通过。 | PS-CA 是泛加拿大的规范，而非法律要求。采用工作由各省和地区与加拿大健康信息高速公路共同牵头 [[4]](#ref-4)。 |
| **英国** | **《2025 年数据（使用与访问）法》（Data (Use and Access) Act 2025）** [[32]](#ref-32)。 | 包含为健康和成人社会照护 IT 制定信息标准的权力。英国主办了 2021 年 G7 的 IPS 承诺 [[26]](#ref-26)。 |
| **澳大利亚** | **《2012 年我的健康档案法》（My Health Records Act 2012）**及 2025 年的“默认共享”修正案。 | AU Patient Summary 是通过 Sparked 开发的国家规范 [[5]](#ref-5) [[24]](#ref-24)。 |
| **瑞士** | **2015 年 6 月 19 日《电子患者档案联邦法》（EPRA，SR 816.1）**，自 2017 年 4 月 15 日起施行 [[33]](#ref-33)。 | CH IPS 包含一个适用于瑞士电子患者档案中文档的配置文件 [[6]](#ref-6)。 |
| **拉丁美洲和加勒比地区** | 通过 RACSEL 和 PH4H 达成的区域协议，美洲开发银行支持建立区域法律框架 [[16]](#ref-16)。 | IPS-LAC 是商定的跨境交换区域格式。 |
| **G7** | 2021 年 6 月牛津**卫生部长公报**，以及 2021 年 12 月的 **G7 IPS 路线图** [[26]](#ref-26) [[34]](#ref-34)。 | 这是致力于推进 IPS 和患者访问的政治承诺，而非具有约束力的法律。 |


## 优点与缺点

| 优点 | 缺点 |
|---|---|
| **更安全的非计划医疗。** 临床医生几秒钟内即可看到过敏、用药和问题。 | **质量取决于来源。** 过时或错误的来源数据会生成过时或错误的摘要。 |
| **全球统一格式。** 一套实现同时满足国家和跨境需求。 | **国家差异。** 国家配置文件会增加规则，因此在一国“有效的 IPS”可能需要调整才能被另一国接受。 |
| **建立在开放、成熟的标准之上：** ISO、CEN、HL7 FHIR 和 CDA、SNOMED CT 以及 LOINC。 | **术语负担。** 将本地代码映射到 SNOMED CT 和 LOINC 工作量很大，而且超出免费 IPS 子集的完整 SNOMED CT 需要许可。 |
| **可读且可计算。** 叙述文本供人阅读，编码数据供软件处理和翻译。 | 如果生成器不够严谨，**叙述文本与编码数据可能不一致**，接收方可能相信了错误的一方。 |
| **患者赋权。** 患者可以持有并分享自己的摘要。 | **隐私与同意风险。** 可携带的摘要十分敏感，且各国的法律和同意模式不同。 |
| **免费的规范**和免费的 IPS 术语集降低了成本 [[12]](#ref-12)。 | **版本变动。** STU 1、STU 1.1 和 STU 2 并存，而 EHDS 格式引用的是较早版本 [[28]](#ref-28)。 |
| **可复用**于疫苗接种证书、研究和登记系统 [[7]](#ref-7) [[8]](#ref-8)。 | **刻意精简。** 不能取代完整病历或专科文档，二次使用方面的缺口需要扩展来弥补 [[7]](#ref-7)。 |
| **有力的支持**，来自各国政府、欧盟、G7、WHO 和标准组织。 | **采用不均衡。** 许多国家和供应商仍在试点，患者认知度较低。 |


## 计划与未来方向

- **欧盟，2029 年：** 根据 EHDS，患者摘要和电子处方交换在所有欧盟成员国投入运行 [[23]](#ref-23) [[28]](#ref-28)。
- **欧盟，2031 年：** 医学影像、实验室结果和出院报告纳入欧洲 EHR 交换格式 [[28]](#ref-28)。
- **MyHealth@EU 扩展：** 更多国家加入，并为实验室结果、出院报告和医学影像提供新服务 [[2]](#ref-2) [[22]](#ref-22)。
- **FHIR IPS STU 2 的采用：** 实施者转向“警示”和“患者自述”章节、明确的空章节，以及 SNOMED CT IPS 术语集 [[9]](#ref-9)。
- **澳大利亚：** 计划于 2026 年发布 AU Patient Summary 第 1 版 [[24]](#ref-24)。
- **IPS 最佳实践项目：** 一项记录经验教训的社区工作，将于 2026 年启动。
- **WHO 信任网络：** 更多基于 IPS 的信任域，用于可验证、可携带的健康文档 [[14]](#ref-14)。
- **SMART Health Links：** 通过 HL7 实现标准化，用于由患者控制的分享 [[10]](#ref-10)。
- **拉丁美洲和加勒比地区：** 通过 PH4H 扩大 IPS-LAC 交换 [[16]](#ref-16)。
- **研究与二次使用：** 在保持核心精简的同时，努力扩展患者摘要，以服务临床研究和人工智能 [[7]](#ref-7)。


## 术语表

| 术语 | 含义 |
|---|---|
| **IPS** | 国际患者摘要（International Patient Summary） |
| **FHIR** | 快速医疗互操作性资源（Fast Healthcare Interoperability Resources），HL7 基于 API 的现代标准 |
| **CDA** | 临床文档架构（Clinical Document Architecture），HL7 基于 XML 的文档标准 |
| **IG** | 实施指南（Implementation Guide），应用某项标准的一套配置文件和规则 |
| **Profile（配置文件）** | 针对特定用途对 FHIR 资源施加约束后的版本 |
| **SNOMED CT** | 医学系统命名法——临床术语（Systematized Nomenclature of Medicine – Clinical Terms） |
| **LOINC** | 观察指标标识符命名与编码（Logical Observation Identifiers Names and Codes） |
| **SMART Health Links** | 通过链接或二维码分享健康数据的标准 |
| **JIC** | 全球健康信息标准化联合倡议委员会（Joint Initiative Council for Global Health Informatics Standardization） |


## 了解更多

- HL7 FHIR IPS 实施指南：<https://hl7.org/fhir/uv/ips/>
- IPS 持续构建版：<https://build.fhir.org/ig/HL7/fhir-ips/>
- 国际患者摘要项目网站：<https://international-patient-summary.net/>
- ISO 27269（健康信息学——国际患者摘要）：<https://www.iso.org/standard/79491.html>
- SNOMED CT IPS 术语集：<https://www.snomed.org/international-patient-summary-terminology>
- SMART Health Links：<https://docs.smarthealthit.org/smart-health-links/>


## 资源

这些链接涵盖有关 IPS 的来源、规范、软件、项目、视频、图书和研究。大多数链接在撰写本页时已核查。少数出版商网站会阻止自动检查，这些链接标有*（未核查）*。

### 官方规范与标准

- [HL7 FHIR IPS 实施指南，当前发布版本](https://hl7.org/fhir/uv/ips/)是权威的 FHIR 规范。
- [HL7 FHIR IPS 实施指南，STU 2](https://hl7.org/fhir/uv/ips/STU2/)
- [HL7 FHIR IPS 实施指南，STU 1.1](https://hl7.org/fhir/uv/ips/STU1.1/)
- [HL7 FHIR IPS 发布历史](https://www.hl7.org/fhir/uv/ips/history.html)列出了每个已发布的版本。
- [HL7 FHIR IPS 持续构建版](https://build.fhir.org/ig/HL7/fhir-ips/)是尚未经过投票的最新在研工作。
- [国际患者摘要的结构](https://hl7.org/fhir/uv/ips/en/Structure-of-the-International-Patient-Summary.html)解释了章节和配置文件。
- [IPS 设计约定](https://build.fhir.org/ig/HL7/fhir-ips/en/Design-Conventions.html)涵盖必须支持、缺失数据和叙述文本。
- [IPS 生成与数据纳入](https://build.fhir.org/ig/HL7/fhir-ips/en/Generation-and-Data-Inclusion.html)涵盖 `$summary` 以及如何选择内容。
- [HL7 CDA IPS 实施指南，持续构建版](https://build.fhir.org/ig/HL7/CDA-IPS/)
- [HL7 CDA IPS 产品简介](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=483)
- [ISO 27269，健康信息学——国际患者摘要](https://www.iso.org/standard/79491.html) *（未核查）*
- [ISO/TC 215 健康信息学委员会](https://www.iso.org/committee/54960.html) *（未核查）*
- [IHE FHIR 国际患者摘要配置文件（FIIO）](https://profiles.ihe.net/PCC/FIIO/volume-1.html)
- [IHE PCC 国际患者摘要补充文件，2020（PDF）](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS_Rev1-0_PC_2020-03-17.pdf)
- [HL7 SMART Health Cards 和 Links 实施指南](https://hl7.org/fhir/uv/smart-health-cards-and-links/)
- [SMART Health Links 文档](https://docs.smarthealthit.org/smart-health-links/)
- [HL7 FHIR 国际患者访问（IPA）](https://hl7.org/fhir/uv/ipa/)是面向患者 API 访问的姊妹规范。
- [HL7 FHIR R4 基础规范](https://hl7.org/fhir/R4/)，IPS 以它为基础。

### 源代码仓库

- [HL7/fhir-ips](https://github.com/HL7/fhir-ips) 以 FHIR Shorthand 保存 FHIR IPS IG 的源文件。
- [HL7/cda-ips](https://github.com/HL7/cda-ips) 保存 CDA IPS IG 的源文件。
- [hl7-eu/eps](https://github.com/hl7-eu/eps) 保存 HL7 欧洲患者摘要的源文件。
- [hl7ch/ch-ips](https://github.com/hl7ch/ch-ips) 保存瑞士 IPS，查看器和生成器正在开发中。
- [GitHub 主题：international-patient-summary](https://github.com/topics/international-patient-summary) 列出了社区仓库。

### 国家和区域适配

- [HL7 欧洲患者摘要（EPS），持续构建版](https://build.fhir.org/ig/hl7-eu/eps/)
- [AU Patient Summary（澳大利亚），持续构建版](https://build.fhir.org/ig/hl7au/au-fhir-ps/)
- [Trillium II IPS 结构（HL7 欧洲）](https://hl7.eu/fhir/build/trillium2/site/ipsStructure.html)来自促成 IPS 诞生的欧美项目。
- [eHealth Suisse](https://www.ehealthsuisse.ch/) 是瑞士的数字健康能力中心，也负责推动其 IPS 的采用。
- [MyHealth@EU，跨境数字健康服务](https://health.ec.europa.eu/ehealth-digital-health-and-care/electronic-cross-border-health-services_en)
- [Xt-EHR 联合行动](https://www.xt-ehr.eu/)负责准备欧洲健康数据空间的格式，包括患者摘要。

### 软件与工具

- [IPS Viewer](https://www.ipsviewer.com)（[源代码：jddamore/IPSviewer](https://github.com/jddamore/IPSviewer)）是一款开源的、基于浏览器的 IPS 查看器。
- [uwcirg/shl-ips-viewer](https://github.com/uwcirg/shl-ips-viewer) 用于查看通过 SMART Health Link 分享的 IPS。
- [smart-on-fhir/smart-health-links](https://github.com/smart-on-fhir/smart-health-links) 是 SMART Health Links 的参考实现。
- [HAPI FHIR IPS 生成器](https://hapifhir.io/hapi-fhir/docs/server_ips/introduction.html)（[源代码：hapifhir/hapi-fhir](https://github.com/hapifhir/hapi-fhir)）是实现 `$summary` 的开源 Java 服务器模块。
- [HAPI FHIR JPA 服务器 IPS 文档](https://hapifhir.io/hapi-fhir/docs/server_jpa/ips.html)
- [Inferno IPS Test Kit](https://inferno.healthit.gov/test-kits/ips)（[源代码：inferno-framework/ips-test-kit](https://github.com/inferno-framework/ips-test-kit)）是一个开源的一致性测试工具包。
- [FHIR Validator](https://validator.fhir.org/) 依据 IG 配置文件验证 IPS Bundle。
- [Simplifier：hl7.fhir.uv.ips 包](https://simplifier.net/packages/hl7.fhir.uv.ips)包含软件包、配置文件和示例。
- [FHIR 软件包注册库](https://registry.fhir.org/)
- [FHIR Shorthand（FSH）学校](https://fshschool.org/)教授编写 IPS IG 所用的语言。
- [CommonHealth](https://www.commonhealth.org/) 是一款生成 IPS 并通过 SMART Health Links 分享的患者应用。
- [WHO SMART Trust](https://github.com/WorldHealthOrganization/smart-trust) 是 WHO 全球数字健康认证网络的信任框架。

### 组织与项目

- [国际患者摘要项目网站](https://international-patient-summary.net/)提供新闻、采用情况报告和教育资源。
- [面向健康 IT 开发者的 IPS](https://international-patient-summary.net/health-it-developer/)
- [HL7 International](https://www.hl7.org/)
- [IHE International](https://www.ihe.net/)
- [SNOMED International](https://www.snomed.org/)
- [SNOMED CT IPS 术语集](https://www.snomed.org/international-patient-summary-terminology)是供 IPS 使用的免费子集。
- [LOINC](https://loinc.org/) *（未核查）*
- [全球健康信息标准化联合倡议委员会（JIC）](http://www.jointinitiativecouncil.org/)
- [全球数字健康伙伴关系（GDHP）](https://gdhp.health/)
- [WHO SMART 指南](https://smart.who.int/)
- [WHO 全球数字健康认证网络](https://www.who.int/initiatives/global-digital-health-certification-network)

### 社区与活动

- [chat.fhir.org](https://chat.fhir.org/) 是 FHIR 社区聊天平台，设有活跃的 IPS 频道。
- [HL7 FHIR Connectathon](https://www.hl7.org/events/fhir-connectathon/)
- [IHE Connectathon](https://www.ihe.net/participate/connectathon/)

### 视频

- [HIMSS20：200 秒或更短时间讲解面向可计算照护指南的 IPS（IHE International，YouTube）](https://www.youtube.com/watch?v=xjEzGM8kBPw)
- [IHE International YouTube 频道](https://www.youtube.com/@IHEIntl)有 Connectathon 讨论会和 IPS 专场。
- [IPS 项目网站新闻](https://international-patient-summary.net/)链接了许多网络研讨会录像，包括：
  - 2024 年 IHE 北美 Connectathon 上的 IPS 专题讨论
  - FHIR DevDays 2023 上的 IPS 专场
  - Grahame Grieve 谈 IPS 与 IPA，IHE Connectathon Montreux 2022
  - SNOMED CT Expo 2022 主题演讲
  - Matthew Rahn 谈 GDHP 中的 IPS
  - HL7“全球护照”（Global Passport）跨境网络研讨会
- [YouTube 搜索：International Patient Summary](https://www.youtube.com/results?search_query=international+patient+summary)

### 图书

- Tim Benson 和 Grahame Grieve，[*Principles of Health Interoperability: FHIR, HL7 and SNOMED CT*](https://link.springer.com/book/10.1007/978-3-030-56883-2)，第 4 版，Springer，2020。涵盖 FHIR、临床摘要资源和术语。

### 研究论文与文章

- Laleci Erturkmen G. B., Sinaci A. A., Namli T., Boonstra M., et al., "[An assessment of the European Patient Summary for clinical research: a case study in cardiology](https://doi.org/10.3389/fmed.2024.1481551)", *Frontiers in Medicine*, 2024.
- Lee H., Huang J., Huang S., Chen W., et al., "[Implementing a Cross-Border Next-Generation Personal Health Record in the Philippines and Taiwan: An Implementation Case Report Using Health Level 7 International Fast Healthcare Interoperability Resources](https://doi.org/10.2196/56272)", *JMIR Formative Research*, 2025.
- Song C., Nakayama M., "[Implementation of a Patient Summary Web Application According to the International Patient Summary and Validation in Common Use Cases in Japan](https://doi.org/10.1007/s10916-023-01993-6)", *Journal of Medical Systems*, 2023.
- Schippers D., Spil T., Stegwee R., Folmer E., Donnelly S., "[The adoption and diffusion of the International Patient Summary](https://doi.org/10.24251/hicss.2025.425)", *Proceedings of the 58th Hawaii International Conference on System Sciences (HICSS)*, 2025.
- da Silva Carvalho N., Papadimitriou A., Stegwee R., Gille H., et al., "[Accelerating European electronic health record exchange format (EEHRxF) implementation across Europe: a policy perspective](https://doi.org/10.3389/fmed.2025.1648170)", *Frontiers in Medicine*, 2025.
- Kay S., Cangioli G., Nusbaum M., "[The International Patient Summary and the extensibility requirement](https://international-patient-summary.net/the-international-patient-summary-and-the-extensibility-requirement/)", *Studies in Health Technology and Informatics* (pHealth), 2020.
- D'Amore J., Cangioli G., Hausam R., "[Advancing the International Patient Summary](https://international-patient-summary.net/advancing-the-international-patient-summary/)"
- "[Towards the Austrian Patient Summary](https://international-patient-summary.net/towards-the-austrian-patient-summary/)", *Studies in Health Technology and Informatics* (dHealth).
- "[Revival of the International Patient Summary (IPS)](https://smiledigitalhealth.com/our-blog/revival-of-the-international-patient-summary-ips)", Smile Digital Health 博客。
- [PubMed 搜索："international patient summary"](https://pubmed.ncbi.nlm.nih.gov/?term=%22international+patient+summary%22)，获取同行评审文献。


## 参考文献

正文中的编号引用（如 [1]）链接到下方对应条目。链接已于 2026 年 11 月核查。法律、采用数据和版本都会变化，请查阅来源以了解最新情况。

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

### 延伸阅读

以下来源未在上文引用，但它们是该标准本身的主要参考资料。

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
