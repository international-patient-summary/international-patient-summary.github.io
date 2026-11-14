# 국제 환자 요약(IPS)

**국제 환자 요약(International Patient Summary, IPS)**은 전자 건강 기록의 짧은 발췌본에 대한 세계 표준입니다. 임상의가 환자를 안전하게 치료하는 데 필요한 기본 임상 정보를 담고 있습니다. 다음과 같도록 설계되었습니다.

- **최소한이며 전부를 담지 않음.** 건강 기록 전체가 아니라, 엄선한 작은 부분 집합입니다.
- **전문 분야에 구애받지 않음.** 어떤 임상의든, 어떤 진료과에서든 사용할 수 있습니다.
- **질환과 무관함.** 특정 질병이나 진료 경로에 묶여 있지 않습니다.
- **구현 가능하며 국제적임.** 세계 표준과 용어 체계 위에 구축되어 있으므로 국가, 언어, IT 시스템을 가로질러 사용할 수 있습니다.

간단히 말해, IPS는 환자를 한 번도 만난 적 없는 임상의에게 한 가지 질문에 답합니다. *"이 사람을 안전하게 돌보기 위해 지금 내가 알아야 할 것은 무엇인가?"*


## IPS가 존재하는 이유

건강 정보는 대개 지역 전자 건강 기록(EHR), 국가 시스템, 또는 공급업체의 제품 안에 갇혀 있습니다. 환자가 다른 병원, 지역, 국가 등 다른 곳에서 진료를 받으면, 진료하는 임상의는 그 이력에 접근하지 못하는 경우가 많습니다. IPS는 모두에게 공유되고 휴대할 수 있는 하나의 요약 형식을 제공합니다.

### 핵심 사용 사례

| 사용 사례 | 설명 |
|---|---|
| **예정되지 않은 진료와 응급 진료** | 환자가 집에서 멀리 떨어진 곳에서 병이 나거나 다치고, 현지 임상의가 환자의 본국 EHR에 접근할 수 없는 경우입니다. 이것이 원래의 주된 사용 사례입니다. |
| **국경을 넘는 진료** | 여행자, 이주민, 국경 간 근로자, 난민이 해외의 임상의가 읽을 수 있는 요약을 지니고 다닙니다. |
| **계획된 진료와 전원** | 의뢰, 전문의 상담, 입원, 퇴원, 의료 제공자 간 인수인계입니다. |
| **의료 관광과 이동성** | 다른 관할권에서 진료받기를 선택한 환자입니다. |
| **환자 역량 강화** | 환자가 휴대전화 앱, 포털, 또는 인쇄본으로 자신의 요약을 보관하고, 열람하고, 공유합니다. |


## IPS를 사용해야 할 때

환자를 모르는 사람이 신뢰할 수 있는 스냅숏을 빠르게 필요로 하고, 보내는 쪽과 받는 쪽이 IT 시스템을 공유하지 않을 때 IPS를 사용하십시오.

### 적합한 경우

- **응급 및 계획되지 않은 진료**, 특히 집에서 멀리 떨어져 있거나 국경을 넘은 경우. IPS는 이 용도를 위해 설계되었습니다.
- **국가 시스템 간의 국경 간 교환**, 예를 들어 EU의 MyHealth@EU 서비스 [[1]](#ref-1) [[2]](#ref-2).
- **환자가 보유한 요약**, 여행자, 이주민, 난민, 순례자, 복잡한 질환이 있는 사람들이 휴대전화나 종이로 지니고 다니는 것 [[3]](#ref-3).
- **국가 또는 지역 환자 요약.** 많은 나라가 자국의 요약을 IPS의 프로파일로 구축하여, 국제적으로도 교환할 수 있도록 합니다 [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
- **진료 전환을 위한 공통 기준선**, 예를 들어 더 풍부한 전문 문서가 없을 때의 의뢰, 입원, 퇴원.
- **다른 데이터 세트의 출발점**, 예를 들어 같은 핵심 정보가 필요한 예방접종 증명서, 연구 데이터, 등록부 [[7]](#ref-7) [[8]](#ref-8).

### 적합하지 않은 경우

- **전체 의무 기록.** IPS는 의도적으로 최소한입니다. 세부 사항이 중요하다면 전체 기록 내보내기나 전문 문서를 사용하십시오.
- **전문 분야별 문서**, 예를 들어 종양학 치료 요약, 산모 기록, 상세한 퇴원 요약. 이러한 문서에는 자체 표준이 있으며, IPS 내용을 포함하거나 참조할 수 있습니다.
- **한 조직 내의 실시간 임상 워크플로.** 하나의 EHR 안에서는 요약 스냅숏 대신 실시간 데이터를 조회하십시오.
- **법률, 청구 또는 보험 기록.** IPS는 임상 요약이며 행정 기록이나 청구 기록이 아닙니다.
- **완전성이 보장되어야 하는 결정.** IPS는 출처와 작성자만큼만 완전하고 최신입니다. 가능하면 중요한 사실은 항상 환자에게 확인하십시오.


## IPS에 담기는 내용

IPS 문서에는 두 개의 층이 있습니다.

1. **누가, 무엇을, 언제 했는지를 기록하는 헤더:**
   - **환자:** 신원, 인구통계, 연락처.
   - **작성자:** 요약을 작성한 사람, 조직, 또는 시스템.
   - **보관자(custodian):** 이를 유지 관리할 책임이 있는 조직.
   - **인증자(attester):** 이를 검증한 사람(있는 경우).
   - **날짜와 시간:** 작성된 시점.

2. **섹션으로 구성된 임상 본문.** 섹션은 필수, 권장, 또는 선택입니다.

| 섹션 | 구분 | 일반적인 내용 |
|---|---|---|
| **약물 요약** | 필수 | 현재 및 관련된 과거 약물, 처방, 용량 |
| **알레르기 및 불내성** | 필수 | 약물, 음식, 환경 알레르기, 반응과 중증도 |
| **문제 목록** | 필수 | 활동성 진단, 상태, 임상 문제 |
| 예방접종 | 권장 | 접종한 백신, 예를 들어 파상풍, B형 간염, 인플루엔자, COVID-19 |
| 시술 이력 | 권장 | 주요 수술과 침습적 중재 |
| 의료 기기 | 권장 | 임플란트와 기기, 예를 들어 심박동기, 스텐트, 보철물 |
| 진단 결과 | 권장 | 주요 검사실 결과, 영상 보고서, 병리 |
| 활력 징후 | 선택 | 혈압, 심박수, 체중, 키, BMI |
| 과거 병력 | 선택 | 해결된 상태와 과거의 중요한 문제 |
| 기능 상태 | 선택 | 장애와 일상 활동 수행 능력 |
| 진료 계획 | 선택 | 진료 계획과 치료 권고 |
| 사회력 | 선택 | 담배, 술, 그 밖의 관련 생활 방식 요인 |
| 임신력 | 선택 | 현재 임신 상태와 임신 이력 |
| 사전 지시 | 선택 | 사전 연명의료 의향서, 소생술 선호, 동의 진술 |
| 경고 | 선택 | 다른 곳에 맞지 않는 안전상 중요한 경고(FHIR IPS STU 2에서 추가) |
| 환자 이야기 | 선택 | 환자에게 중요한 것: 요구, 강점, 가치, 우려, 선호를 환자 본인의 표현으로(FHIR IPS STU 2에서 추가) |

**"없음"을 분명히 밝히는 것이 중요합니다.** 비어 있는 섹션은 환자에게 알레르기가 없는 것인지, 아니면 아무도 기록하지 않은 것인지를 임상의에게 알려 주지 못합니다. 그래서 IPS는 *"알려진 알레르기 없음"*, *"현재 복용 약물 없음"*, *"정보 없음"*과 같은 명시적인 진술을 요구합니다.


## IPS의 배경이 되는 표준

IPS는 서로 조율된 표준들의 집합입니다. ISO와 CEN 표준은 환자 요약이 *무엇을* 담아야 하는지를 정의합니다. HL7 구현 가이드는 그것을 *어떻게* 인코딩할지를 정의합니다.

| 표준 | 기관 | 역할 |
|---|---|---|
| **EN 17269** | CEN(유럽표준화위원회) | 추상적 IPS 데이터 세트, 2019년 발행 |
| **ISO 27269** | ISO(국제표준화기구) | 추상적 IPS 데이터 세트의 국제 버전, 2021년 발행 |
| **CEN/TS 17288** | CEN | 국경 간 사용을 위한 IPS 구현 지침 |
| **HL7 FHIR IPS 구현 가이드** | HL7 International | 현대적이고 API 친화적인 인코딩이며 주된 구현 형식. STU 2(2.0.x)는 경고 및 환자 이야기 섹션을 추가하고, 빈 섹션을 허용하며, `$summary`를 명확히 하고, SNOMED CT IPS 용어 체계로 이동했습니다 [[9]](#ref-9). |
| **HL7 CDA IPS 구현 가이드** | HL7 International | XML 문서 기반 인코딩으로, 기존 국가 및 유럽 인프라에서 흔히 쓰입니다 |

이 작업은 **세계 보건 정보학 표준화 공동 이니셔티브 협의회(Joint Initiative Council for Global Health Informatics Standardization, JIC)**를 통해 조율됩니다. JIC에는 ISO, CEN, HL7, SNOMED International, IHE 등이 모여 있습니다. IPS는 국경 간 건강 데이터에 관한 2016년 EU–미국 협력에서 시작되었으며, 현재 전 세계 정부와 디지털 헬스 프로그램의 지원을 받고 있습니다.


## HL7 FHIR로 IPS를 인코딩하는 방법

FHIR에서 IPS는 `document` 유형의 단일 **`Bundle`**입니다.

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

핵심 기술 사항:

- **각 섹션에는 사람이 읽을 수 있는 서술이 있습니다.** 임상의는 FHIR 소프트웨어가 없어도 일반 브라우저에서 IPS를 읽을 수 있습니다.
- **각 섹션에는 코드화된 항목도 있습니다.** 이는 소프트웨어가 처리, 번역, 대조할 수 있는 구조화된 FHIR 리소스입니다.
- **프로파일이 기본 FHIR 리소스를 제약합니다.** 예를 들어 *Patient (IPS)*와 *AllergyIntolerance (IPS)*는 최소 데이터와 "must support" 요소를 정의합니다.
- **`$summary` 작업**(`GET [base]/Patient/[id]/$summary`)은 FHIR 서버에 환자의 IPS를 요청 시 생성하도록 요청합니다.
- **IPS는 서명 가능하고 자체 완결적입니다.** 완전한 문서를 하나의 단위로 저장, 전송, 서명, 검증할 수 있습니다.


## 용어 체계

공유된 코드 체계는 IPS를 언어와 국가를 넘어 읽을 수 있게 합니다.

| 용어 체계 | 사용 용도 |
|---|---|
| **SNOMED CT** | 문제, 알레르기, 시술, 기기, 임상 소견. IPS 용도로 무료 부분 집합인 **SNOMED CT IPS 용어 체계**를 사용할 수 있으며, 비회원국에서도 가능합니다. |
| **LOINC** | 문서 및 섹션 유형, 검사실 검사, 활력 징후 |
| **ATC** 및 기타 약물 코드 체계 | 의약품과 유효 성분 |
| **UCUM** | 측정 단위 |
| **ISO 및 HL7 값 집합** | 국가, 언어, 행정상 성별, 부재와 미상의 사유 |

항목이 코드화되어 있으므로, 수신 시스템은 포르투갈어로 작성된 IPS를 영어 레이블과 함께 표시할 수 있습니다. 코드화된 의미는 그대로 유지됩니다.


## 환자와 임상의가 IPS를 사용하는 방법

IPS는 EHR, 국가 건강 기록 서비스, 환자 포털, 또는 개인 건강 앱에서 만들 수 있습니다. 이후 여러 방식으로 전달할 수 있습니다.

- **시스템 간:** FHIR REST API, 국가 인프라, 또는 EU의 MyHealth@EU 네트워크 같은 국경 간 게이트웨이를 통해.
- **환자 중개 공유:** 환자가 요약을 지갑이나 건강 앱에 보관하고 요청 시 공유합니다.
- **SMART Health Links:** 임상의에게 암호화된 IPS에 대한, 시간 제한이 있고 선택적으로 암호로 보호되는 접근을 제공하는 QR 코드 또는 URL. 임상의는 일반 웹 브라우저에서 열 수 있습니다.
- **종이 또는 PDF:** 다른 방법이 모두 통하지 않을 때를 위한 대체 수단으로, 인쇄된 서술 형태입니다.

**CommonHealth** 같은 앱은 환자가 자신의 기록을 모으고 SMART Health Links를 통해 IPS를 공유할 수 있게 합니다.

전형적인 응급 시나리오:

1. 여행자가 해외에서 쓰러집니다.
2. 여행자나 동행자가 휴대전화의 QR 코드를 보여 줍니다.
3. 응급의가 이를 스캔하면 몇 초 만에 여행자의 약물, 알레르기, 활동성 문제를 확인합니다.
4. 의사는 위험한 약물 상호작용을 피하고 환자를 안전하게 치료합니다.


## 원칙과 설계 선택

- **안전이 우선.** 내용은 완전성이 아니라 임상적 관련성을 기준으로 선택합니다.
- **기본은 전 세계, 확장으로 현지화.** 각국은 EU, 호주, 캐나다 변형처럼 국가 프로파일을 만들어, 국제 핵심을 깨뜨리지 않으면서 요구 사항을 추가합니다.
- **사람이 읽을 수 있고 기계가 처리할 수 있음.** 서술과 코드화된 데이터가 공존합니다.
- **무료이며 개방적.** HL7 IPS 명세와 IPS SNOMED CT 부분 집합은 도입 장벽을 낮추기 위해 무료로 제공됩니다.
- **개인정보 보호와 동의.** 접근은 현지 법률과 환자의 동의에 의해 규율됩니다. SMART Health Links 같은 메커니즘은 환자가 통제권을 유지하게 합니다.


## IPS 사용 방법

### 환자를 위해

1. **요청하십시오.** 이용하는 의원, 병원, 국가 건강 포털, 또는 건강 앱에 IPS 또는 이를 기반으로 한 국가 환자 요약을 만들 수 있는지 문의하십시오.
2. **확인하십시오.** 건강할 때 읽어 보십시오. 잘못되었거나 빠진 것, 특히 알레르기와 약물을 알려 주십시오.
3. **지니고 다니십시오.** 건강 앱이나 지갑에, SMART Health Link QR 코드로, 또는 여행 서류와 함께 출력본으로 보관하십시오.
4. **최신 상태로 유지하십시오.** 새로운 진단, 새로운 장기 약물, 수술, 또는 임플란트 후에는 새로 받으십시오.
5. **의도를 갖고 공유하십시오.** 치료하는 임상의에게 보여 주십시오. SMART Health Link는 만료될 수 있고 암호를 요구할 수 있으므로, 누가 얼마나 오래 볼 수 있는지를 직접 통제할 수 있습니다 [[10]](#ref-10).

### 임상의를 위해

1. **헤더를 먼저 확인하십시오.** 누가 작성했는지, 언제인지, 그리고 누군가 검증했는지. 오래되었거나 검증되지 않은 요약은 더 주의가 필요합니다.
2. **필수 섹션을 먼저 읽으십시오.** 알레르기, 약물, 문제.
3. **"알려진 바 없음"과 "기록되지 않음"을 구분하십시오.** "알려진 알레르기 없음"은 임상적 진술입니다. 비어 있거나 "알 수 없음"인 섹션은 그렇지 않습니다.
4. **중요한 사실을 확인하십시오.** 가능할 때마다 환자 또는 동행자와 함께.
5. **코드화된 데이터를 사용하십시오.** 시스템이 지원한다면, 코드화된 항목 덕분에 요약을 본인의 언어로 표시하고 약물 상호작용 및 알레르기 규칙과 대조할 수 있습니다.
6. **완전하다고 가정하지 마십시오.** IPS는 안전망이며 전체 병력이 아닙니다.

### 구현 담당자를 위해

1. **명세를 고르십시오.** 최신 HL7 FHIR IPS 구현 가이드(STU 2), 또는 이를 기반으로 한 자국의 국가 프로파일을 사용하십시오. CDA 기반 인프라에는 CDA IPS 가이드를 사용하십시오 [[9]](#ref-9) [[11]](#ref-11).
2. **데이터를 매핑하십시오.** 로컬 데이터를 IPS 프로파일(`Patient`, `AllergyIntolerance`, `MedicationStatement`, `Condition` 등)에 매핑하십시오. 작업의 대부분이 이 매핑에 있습니다.
3. **용어를 매핑하십시오.** 로컬 코드를 SNOMED CT, LOINC, 약물 코드 체계에 매핑하십시오. SNOMED CT IPS 용어 체계는 이 목적으로 무료로 사용할 수 있습니다 [[12]](#ref-12).
4. **문서를 생성하십시오.** `$summary` 작업을 지원하거나, `Bundle`과 `Composition`을 직접 구성하십시오. 모든 섹션에 읽을 수 있는 서술과 명시적인 "알려진 바 없음" 또는 "정보 없음" 진술을 포함하십시오.
5. **검증하십시오.** 생성된 모든 문서를 FHIR Validator와 Inferno IPS Test Kit 같은 적합성 테스트 키트로 확인하십시오 [[13]](#ref-13).
6. **서명하고 공유하십시오.** 문서를 어떻게 서명, 저장, 전송할지 결정하십시오. API, 문서 레지스트리, 국경 간 게이트웨이, 또는 SMART Health Link입니다.
7. **안전하게 수신하십시오.** 수신자로서 모든 코드화된 항목을 처리하지 못하더라도 서술을 표시하고, 출처와 작성자가 보이도록 유지하며, 받은 데이터를 조용히 로컬 기록에 병합하지 마십시오.
8. **다른 이들과 함께 테스트하십시오.** 본격 가동 전에 IHE 및 HL7 Connectathon에서 다른 공급업체와 국가와 상호 운용성을 확인하십시오.

### 정부와 보건 기관을 위해

1. **별도의 형식 대신 IPS를 기반으로 한 국가 프로파일을 채택하십시오.** 그러면 국가 요약이 기본적으로 국제적이 됩니다 [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
2. **거버넌스를 정하십시오.** 누가 요약을 만들고, 갱신하고, 인증할 수 있는지, 그리고 누가 그 정확성에 책임을 지는지.
3. **용어 라이선스를 정하십시오.** SNOMED CT 회원 자격, 또는 무료 IPS 부분 집합의 사용.
4. **신원, 동의, 신뢰를 정하십시오.** 환자를 어떻게 식별하고, 동의를 어떻게 기록하며, 문서를 검증하는 데 MyHealth@EU나 WHO 글로벌 디지털 헬스 인증 네트워크 같은 어떤 신뢰 프레임워크를 사용할지 [[1]](#ref-1) [[14]](#ref-14).
5. **구축한 것을 공개하십시오.** IPS 구현 레지스트리에 게시하여 다른 이들이 배울 수 있도록 하십시오 [[15]](#ref-15).


## IPS와 의료 시스템의 통합

IPS는 별도의 시스템인 경우가 드뭅니다. 이미 EHR, 건강 정보 교환, 국가 기록, 개인 건강 앱에 있는 데이터의 한 가지 뷰입니다.

| 통합 패턴 | 작동 방식 | 예시 |
|---|---|---|
| **EHR이 생성** | EHR이 요청 시 자체 데이터로 IPS를 구성하며, 대개 FHIR `$summary` 작업을 통합니다. | EHR 공급업체와 IPS 생성기 모듈이 있는 HAPI FHIR 같은 FHIR 서버 |
| **국가 또는 지역 기록** | 국가 환자 요약 서비스가 IPS의 프로파일을 저장하고 승인된 제공자에게 제공합니다. | 캐나다의 PS-CA, 호주의 AU Patient Summary, CH IPS를 사용하는 스위스의 전자 환자 기록 [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6) |
| **국경 간 게이트웨이** | 각국이 국가 연락 창구를 운영합니다. 자국의 요약을 합의된 교환 형식으로 변환해 국경 너머로 보내고, 수신국이 현지 언어로 표시합니다. | MyHealth@EU 전자 보건 국가 연락 창구 [[1]](#ref-1) [[2]](#ref-2) |
| **지역 교환 네트워크** | 보건부가 공유된 지역 가이드에 따라 국가 FHIR 서버를 통해 IPS 문서를 교환합니다. | 라틴 아메리카와 카리브해 지역의 RACSEL의 IPS-LAC와 디지털 헬스를 위한 범미 고속도로(PH4H) [[16]](#ref-16) |
| **환자 중개** | 환자가 앱이나 지갑에 IPS를 보유하고 QR 코드나 SMART Health Link로 공유합니다. | CommonHealth, 순례를 위한 WHO 신뢰 네트워크의 IPS 작업 [[10]](#ref-10) [[14]](#ref-14) |
| **API 기반 접근** | 앱이 FHIR API를 통해 승인된 환자의 IPS를 가져옵니다. | International Patient Access(IPA), CMS 상호 운용성 프레임워크에 따라 IPS 지원을 추가한 Flexpa 같은 미국 네트워크 [[17]](#ref-17) [[18]](#ref-18) |

계획해야 할 통합 지점:

- **문서 공유:** MHD(FHIR)와 XDS(문서 레지스트리) 같은 IHE 프로파일이 IPS 문서를 저장하고 찾습니다. IHE IPS 콘텐츠 프로파일은 적합성 및 테스트 규칙을 추가합니다 [[11]](#ref-11).
- **환자 신원:** IHE PIXm과 PDQm, 또는 국가 식별자가 시스템 간 환자를 대조합니다.
- **기존 문서:** 많은 시스템이 이미 CDA, C-CDA, 또는 국가 요약을 생성합니다. 이를 IPS에 매핑하는 것이 보통 처음부터 다시 시작하는 것보다 쉽지만, 카디널리티, 값 집합, 코드 체계의 차이를 확인하십시오.
- **국가 프로파일:** US Core, AU Core, CH Core, JP Core 같은 국가 핵심 규격은 IPS와 다를 수 있습니다. 국가 환자 요약 프로파일이 둘을 조정합니다 [[5]](#ref-5) [[6]](#ref-6) [[19]](#ref-19).
- **번역과 표시:** 수신자는 서술을 표시하고, 수신자 언어로 된 코드의 표시 이름을 사용해 코드화된 항목을 번역해야 합니다.
- **보안:** TLS, 필요한 경우 서명된 문서, 감사 로깅(예: IHE ATNA 또는 BALP), 동의에 연결된 접근 제어를 사용하십시오.


## 현재의 도입 현황

IPS는 시범 사업에서 국가 및 지역 프로그램으로 옮겨 갔습니다. 상황이 빠르게 바뀌므로, 최신 상황은 링크된 출처를 확인하십시오.

- **IPS 구현 레지스트리.** IPS 커뮤니티는 구현의 공개 레지스트리를 유지합니다. 2026년 중반에는 아르헨티나의 제공자 중개형 IPS-LAC 프로젝트부터 베트남의 Better Health Program까지 34건이 등재되어 있었습니다 [[15]](#ref-15).
- **FHIR 생태계.** HL7 International과 Firely의 2025년 State of FHIR 조사에서 응답자 42명이 IPS가 자국의 국가 FHIR 명세의 토대라고 답했으며, 이는 어떤 다른 국제 가이드보다도 많은 수입니다 [[20]](#ref-20).
- **연구.** IPS 도입에 관한 2025년 연구는 이해관계자를 인터뷰했고, 이들은 진료 품질 향상과 환자 안전을 주된 이점으로 꼽았습니다 [[21]](#ref-21).

| 국가 또는 지역 | 현황 |
|---|---|
| **유럽 연합과 EEA** | MyHealth@EU는 국가 간에 환자 요약과 전자 처방전을 교환합니다. 2026년 유럽 위원회 발표 자료는 17개 회원국과 노르웨이가 가동 중이며, 나머지 대부분도 참여를 계획하고 있다고 보고했습니다 [[2]](#ref-2) [[22]](#ref-22). EHDS 규정은 2029년까지 환자 요약 교환을 의무화합니다 [[23]](#ref-23). |
| **캐나다** | Canada Health Infoway가 2022년 10월에 승인한 범캐나다 환자 요약(PS-CA)은 캐나다식 조정을 거쳐 IPS 위에 구축되었습니다 [[4]](#ref-4). |
| **호주** | IPS와 AU Core 위에 구축된 AU Patient Summary는 HL7 Australia가 Sparked 프로그램을 통해 개발하고 있습니다 [[5]](#ref-5) [[24]](#ref-24). |
| **스위스** | HL7 Switzerland의 CH IPS 2.0.0(시범 사용)은 IPS와 CH Core 위에 구축됩니다. 별도의 프로파일이 스위스 전자 환자 기록에 필요한 것을 추가합니다 [[6]](#ref-6). |
| **미국** | IPS에 대한 연방 의무는 없습니다. 미국은 US Core와 USCDI를 사용합니다. 연방 기관은 국제적인 IPS 작업에 참여하며, 일부 네트워크는 IPS를 자발적으로 지원합니다 [[18]](#ref-18). |
| **라틴 아메리카와 카리브해** | RACSEL 보건부는 지역 IPS-LAC 가이드를 사용합니다. 2023년에는 16개국이 상파울루의 커넥타톤에서 IPS-LAC 문서를 교환했습니다 [[16]](#ref-16). |
| **일본** | 연구자들이 JP Core를 사용해 일본의 일반적인 사용 사례를 위한 IPS 기반 환자 요약 애플리케이션을 구축하고 검증했습니다 [[19]](#ref-19). |
| **대만과 필리핀** | 2025년 구현 보고서는 FHIR을 사용하고 IPS와 정렬된 국경 간 개인 건강 기록을 기술합니다 [[25]](#ref-25). |
| **G7** | 2021년 G7 보건부 장관들은 IPS를 향해 노력하겠다고 약속하고 IPS 로드맵을 발표했습니다 [[26]](#ref-26). |
| **WHO** | WHO 글로벌 디지털 헬스 인증 네트워크에는 순례를 위한 검증 가능한 IPS 같은 IPS 기반 신뢰 도메인이 포함되어 있습니다 [[14]](#ref-14). |


## 국가 및 지역별 법률, 규정, 정책

IPS는 표준이지 법률이 아닙니다. 국가가 환자 요약을 교환해야 하는지, 어떤 형식으로, 어떤 개인정보 보호 규칙에 따라 교환하는지는 법률이 결정합니다. 이것은 요약이며 법률 자문이 아닙니다. 항상 법의 최신 문언을 확인하십시오.

| 관할권 | 법률 또는 정책 | IPS에 주는 의미 |
|---|---|---|
| **유럽 연합** | **유럽 보건 데이터 공간(EHDS) 규정, (EU) 2025/327.** 2025년 3월 5일 공표, 2025년 3월 26일 발효 [[23]](#ref-23) [[27]](#ref-27). | 환자 요약은 "우선 범주"입니다. 유럽 EHR 교환 형식의 교환은 2029년까지 모든 회원국에서 작동해야 합니다. 의료 영상, 검사 결과, 퇴원 보고서는 2031년까지 이어집니다 [[28]](#ref-28). 환자 요약의 형식은 HL7 IPS에 기반합니다. |
| **유럽 연합** | 국경 간 의료에서의 환자 권리에 관한 **지침 2011/24/EU** [[29]](#ref-29). | MyHealth@EU의 배경이 되는 환자 요약 지침에 합의한 eHealth Network를 만들었습니다. |
| **유럽 연합** | **일반 개인정보 보호 규정(GDPR), (EU) 2016/679** [[30]](#ref-30). | 건강 데이터는 특별 범주입니다. 모든 IPS 교환에는 적법한 근거와 적절한 보호 조치가 필요합니다. |
| **미국** | **21세기 치료법(21st Century Cures Act)과 정보 차단 규칙** [[31]](#ref-31), 자발적인 **CMS 상호 운용성 프레임워크**(2025) [[17]](#ref-17). | IPS를 요구하는 법은 없습니다. 법률은 US Core와 USCDI를 사용해 전자 건강 정보에 대한 접근과 교환을 요구합니다. IPS 지원은 자발적입니다. |
| **캐나다** | 주 및 준주의 보건 정보법. 연방 **Connected Care for Canadians Act**(법안 C-72)는 2024년에 발의되었으나 2025년 의회 정회 전에 통과되지 못했습니다. | PS-CA는 범캐나다 명세이며 법적 요건이 아닙니다. 도입은 주와 준주가 Canada Health Infoway와 함께 이끕니다 [[4]](#ref-4). |
| **영국** | **Data (Use and Access) Act 2025** [[32]](#ref-32). | 보건 및 성인 사회 돌봄 IT에 대한 정보 표준을 정할 권한을 포함합니다. 영국은 2021년 G7 IPS 약속을 주최했습니다 [[26]](#ref-26). |
| **호주** | **My Health Records Act 2012**와 2025년 "기본 공유" 개정. | AU Patient Summary는 Sparked를 통해 개발되는 국가 명세입니다 [[5]](#ref-5) [[24]](#ref-24). |
| **스위스** | **전자 환자 기록에 관한 2015년 6월 19일 연방법(EPRA, SR 816.1)**, 2017년 4월 15일부터 시행 [[33]](#ref-33). | CH IPS는 스위스 전자 환자 기록 내 문서를 위한 프로파일을 포함합니다 [[6]](#ref-6). |
| **라틴 아메리카와 카리브해** | RACSEL과 PH4H를 통한 지역 협정, 지역 법적 틀을 위한 미주개발은행의 지원 [[16]](#ref-16). | IPS-LAC는 국경 간 교환을 위해 합의된 지역 형식입니다. |
| **G7** | 2021년 6월 옥스퍼드의 **보건부 장관 공동성명**과 2021년 12월의 **G7 IPS 로드맵** [[26]](#ref-26) [[34]](#ref-34). | IPS와 환자 접근을 향한 정치적 약속이며, 구속력 있는 법이 아닙니다. |


## 장점과 단점

| 장점 | 단점 |
|---|---|
| **더 안전한 예정 외 진료.** 임상의가 알레르기, 약물, 문제를 몇 초 만에 확인합니다. | **출처만큼만 좋음.** 오래되었거나 잘못된 원본 데이터는 오래되었거나 잘못된 요약을 낳습니다. |
| **전 세계에 하나의 형식.** 하나의 구현으로 국가 및 국경 간 요구를 충족합니다. | **국가별 차이.** 국가 프로파일이 규칙을 추가하므로, 한 나라에서 "유효한 IPS"가 다른 나라에서 받아들여지려면 작업이 필요할 수 있습니다. |
| **개방적이고 성숙한 표준 위에 구축:** ISO, CEN, HL7 FHIR와 CDA, SNOMED CT, LOINC. | **용어 부담.** 로컬 코드를 SNOMED CT와 LOINC에 매핑하는 것은 어려운 작업이며, 전체 SNOMED CT는 무료 IPS 부분 집합 이상의 라이선스가 필요합니다. |
| **읽을 수 있고 계산할 수 있음.** 사람을 위한 서술, 소프트웨어와 번역을 위한 코드화된 데이터. | 생성기가 부주의하면 **서술과 코드화된 데이터가 어긋날 수 있고**, 수신자가 잘못된 쪽을 신뢰할 수 있습니다. |
| **환자 역량 강화.** 환자가 자신의 요약을 보유하고 공유할 수 있습니다. | **개인정보 보호와 동의 위험.** 휴대 가능한 요약은 민감하며, 법률과 동의 모델은 국가마다 다릅니다. |
| **무료 명세**와 무료 IPS 용어 체계가 비용을 낮춥니다 [[12]](#ref-12). | **버전 변동.** STU 1, STU 1.1, STU 2가 공존하며 EHDS 형식은 이전 버전을 참조합니다 [[28]](#ref-28). |
| 예방접종 증명서, 연구, 등록부에 **재사용 가능** [[7]](#ref-7) [[8]](#ref-8). | **의도적으로 최소한.** 전체 기록이나 전문 분야 문서의 대체물이 아니며, 2차 사용의 공백은 확장이 필요합니다 [[7]](#ref-7). |
| 정부, EU, G7, WHO, 표준 기관의 **강력한 지지**. | **고르지 않은 도입.** 많은 국가와 공급업체가 여전히 시범 단계이며, 환자의 인식은 낮습니다. |


## 계획과 향후 방향

- **EU, 2029년:** EHDS에 따라 모든 EU 회원국에서 환자 요약 및 전자 처방전 교환이 가동됨 [[23]](#ref-23) [[28]](#ref-28).
- **EU, 2031년:** 의료 영상, 검사실 결과, 퇴원 보고서가 유럽 EHR 교환 형식에 추가됨 [[28]](#ref-28).
- **MyHealth@EU 확대:** 더 많은 국가가 참여하고, 검사실 결과, 퇴원 보고서, 의료 영상을 위한 새로운 서비스가 추가됨 [[2]](#ref-2) [[22]](#ref-22).
- **FHIR IPS STU 2 도입:** 구현 담당자들이 경고 및 환자 이야기 섹션, 명시적인 빈 섹션, SNOMED CT IPS 용어 체계로 이동함 [[9]](#ref-9).
- **호주:** AU Patient Summary Release 1 발행이 2026년으로 계획됨 [[24]](#ref-24).
- **IPS 모범 사례 프로젝트:** 얻은 교훈을 문서화하는 커뮤니티 노력으로, 작업은 2026년에 시작.
- **WHO 신뢰 네트워크:** 검증 가능하고 휴대 가능한 건강 문서를 위한 더 많은 IPS 기반 신뢰 도메인 [[14]](#ref-14).
- **SMART Health Links:** 환자가 통제하는 공유를 위해 HL7을 통해 표준화 [[10]](#ref-10).
- **라틴 아메리카와 카리브해:** PH4H를 통한 IPS-LAC 교환 확대 [[16]](#ref-16).
- **연구와 2차 사용:** 핵심을 최소한으로 유지하면서 임상 연구와 AI를 위해 환자 요약을 확장하려는 작업 [[7]](#ref-7).


## 용어집

| 용어 | 의미 |
|---|---|
| **IPS** | 국제 환자 요약(International Patient Summary) |
| **FHIR** | Fast Healthcare Interoperability Resources. HL7의 현대적인 API 기반 표준 |
| **CDA** | Clinical Document Architecture. HL7의 XML 문서 표준 |
| **IG** | 구현 가이드(Implementation Guide). 표준을 적용하기 위한 프로파일과 규칙의 집합 |
| **프로파일** | 특정 용도를 위해 제약된 FHIR 리소스의 버전 |
| **SNOMED CT** | Systematized Nomenclature of Medicine – Clinical Terms |
| **LOINC** | Logical Observation Identifiers Names and Codes |
| **SMART Health Links** | 링크나 QR 코드로 건강 데이터를 공유하는 표준 |
| **JIC** | Joint Initiative Council for Global Health Informatics Standardization(세계 보건 정보학 표준화 공동 이니셔티브 협의회) |


## 더 알아보기

- HL7 FHIR IPS 구현 가이드: <https://hl7.org/fhir/uv/ips/>
- IPS 지속 빌드: <https://build.fhir.org/ig/HL7/fhir-ips/>
- 국제 환자 요약 프로젝트 사이트: <https://international-patient-summary.net/>
- ISO 27269(보건 정보학 — 국제 환자 요약): <https://www.iso.org/standard/79491.html>
- SNOMED CT IPS 용어 체계: <https://www.snomed.org/international-patient-summary-terminology>
- SMART Health Links: <https://docs.smarthealthit.org/smart-health-links/>


## 자료

이 링크들은 IPS에 관한 출처, 명세, 소프트웨어, 프로젝트, 동영상, 도서, 연구를 다룹니다. 대부분은 이 페이지를 작성할 때 확인되었습니다. 일부 출판사 사이트는 자동 확인을 막으므로, 그러한 링크에는 *(확인되지 않음)*으로 표시했습니다.

### 공식 명세와 표준

- [HL7 FHIR IPS 구현 가이드, 현재 발행 버전](https://hl7.org/fhir/uv/ips/)은 권위 있는 FHIR 명세입니다.
- [HL7 FHIR IPS 구현 가이드, STU 2](https://hl7.org/fhir/uv/ips/STU2/)
- [HL7 FHIR IPS 구현 가이드, STU 1.1](https://hl7.org/fhir/uv/ips/STU1.1/)
- [HL7 FHIR IPS 발행 이력](https://www.hl7.org/fhir/uv/ips/history.html)은 발행된 모든 버전을 나열합니다.
- [HL7 FHIR IPS 지속 빌드](https://build.fhir.org/ig/HL7/fhir-ips/)는 투표를 거치지 않은 최신 작업 중 내용입니다.
- [국제 환자 요약의 구조](https://hl7.org/fhir/uv/ips/en/Structure-of-the-International-Patient-Summary.html)는 섹션과 프로파일을 설명합니다.
- [IPS 설계 규약](https://build.fhir.org/ig/HL7/fhir-ips/en/Design-Conventions.html)은 must-support, 부재 데이터, 서술을 다룹니다.
- [IPS 생성과 데이터 포함](https://build.fhir.org/ig/HL7/fhir-ips/en/Generation-and-Data-Inclusion.html)은 `$summary`와 내용 선택 방법을 다룹니다.
- [HL7 CDA IPS 구현 가이드, 지속 빌드](https://build.fhir.org/ig/HL7/CDA-IPS/)
- [HL7 CDA IPS 제품 개요](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=483)
- [ISO 27269, 보건 정보학 — 국제 환자 요약](https://www.iso.org/standard/79491.html) *(확인되지 않음)*
- [ISO/TC 215 보건 정보학 위원회](https://www.iso.org/committee/54960.html) *(확인되지 않음)*
- [IHE FHIR 국제 환자 요약 프로파일(FIIO)](https://profiles.ihe.net/PCC/FIIO/volume-1.html)
- [IHE PCC 국제 환자 요약 보충 문서, 2020(PDF)](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS_Rev1-0_PC_2020-03-17.pdf)
- [HL7 SMART Health Cards and Links 구현 가이드](https://hl7.org/fhir/uv/smart-health-cards-and-links/)
- [SMART Health Links 문서](https://docs.smarthealthit.org/smart-health-links/)
- [HL7 FHIR International Patient Access(IPA)](https://hl7.org/fhir/uv/ipa/)는 환자 API 접근을 위한 자매 명세입니다.
- [HL7 FHIR R4 기본 명세](https://hl7.org/fhir/R4/). IPS가 이를 기반으로 합니다.

### 소스 저장소

- [HL7/fhir-ips](https://github.com/HL7/fhir-ips)에는 FHIR Shorthand로 작성된 FHIR IPS IG 소스가 있습니다.
- [HL7/cda-ips](https://github.com/HL7/cda-ips)에는 CDA IPS IG 소스가 있습니다.
- [hl7-eu/eps](https://github.com/hl7-eu/eps)에는 HL7 Europe 환자 요약 소스가 있습니다.
- [hl7ch/ch-ips](https://github.com/hl7ch/ch-ips)에는 스위스 IPS가 있으며, 뷰어와 생성기가 개발 중입니다.
- [GitHub 토픽: international-patient-summary](https://github.com/topics/international-patient-summary)는 커뮤니티 저장소를 나열합니다.

### 국가 및 지역별 적응

- [HL7 Europe 환자 요약(EPS), 지속 빌드](https://build.fhir.org/ig/hl7-eu/eps/)
- [AU Patient Summary(호주), 지속 빌드](https://build.fhir.org/ig/hl7au/au-fhir-ps/)
- [Trillium II IPS 구조(HL7 Europe)](https://hl7.eu/fhir/build/trillium2/site/ipsStructure.html)는 IPS를 시작하는 데 도움이 된 EU–미국 프로젝트에서 나온 것입니다.
- [eHealth Suisse](https://www.ehealthsuisse.ch/)는 스위스의 디지털 헬스와 IPS 도입을 위한 역량 센터입니다.
- [MyHealth@EU, 국경 간 디지털 헬스 서비스](https://health.ec.europa.eu/ehealth-digital-health-and-care/electronic-cross-border-health-services_en)
- [Xt-EHR 공동 조치](https://www.xt-ehr.eu/)는 환자 요약을 포함한 유럽 보건 데이터 공간 형식을 준비합니다.

### 소프트웨어와 도구

- [IPS Viewer](https://www.ipsviewer.com)([소스: jddamore/IPSviewer](https://github.com/jddamore/IPSviewer))는 오픈 소스 브라우저 기반 IPS 뷰어입니다.
- [uwcirg/shl-ips-viewer](https://github.com/uwcirg/shl-ips-viewer)는 SMART Health Link로 공유된 IPS를 봅니다.
- [smart-on-fhir/smart-health-links](https://github.com/smart-on-fhir/smart-health-links)는 SMART Health Links의 참조 구현입니다.
- [HAPI FHIR IPS 생성기](https://hapifhir.io/hapi-fhir/docs/server_ips/introduction.html)([소스: hapifhir/hapi-fhir](https://github.com/hapifhir/hapi-fhir))는 `$summary`를 구현하는 오픈 소스 Java 서버 모듈입니다.
- [HAPI FHIR JPA 서버 IPS 문서](https://hapifhir.io/hapi-fhir/docs/server_jpa/ips.html)
- [Inferno IPS Test Kit](https://inferno.healthit.gov/test-kits/ips)([소스: inferno-framework/ips-test-kit](https://github.com/inferno-framework/ips-test-kit))는 오픈 소스 적합성 테스트 키트입니다.
- [FHIR Validator](https://validator.fhir.org/)는 IG 프로파일에 대해 IPS 번들을 검증합니다.
- [Simplifier: hl7.fhir.uv.ips 패키지](https://simplifier.net/packages/hl7.fhir.uv.ips)에는 패키지, 프로파일, 예제가 있습니다.
- [FHIR 패키지 레지스트리](https://registry.fhir.org/)
- [FHIR Shorthand(FSH) School](https://fshschool.org/)은 IPS IG가 작성된 언어를 가르칩니다.
- [CommonHealth](https://www.commonhealth.org/)는 IPS를 생성하고 SMART Health Links로 공유하는 환자용 앱입니다.
- [WHO SMART Trust](https://github.com/WorldHealthOrganization/smart-trust)는 WHO 글로벌 디지털 헬스 인증 네트워크의 신뢰 프레임워크입니다.

### 기관과 프로젝트

- [국제 환자 요약 프로젝트 사이트](https://international-patient-summary.net/)에는 뉴스, 도입 보고서, 교육 자료가 있습니다.
- [헬스 IT 개발자를 위한 IPS](https://international-patient-summary.net/health-it-developer/)
- [HL7 International](https://www.hl7.org/)
- [IHE International](https://www.ihe.net/)
- [SNOMED International](https://www.snomed.org/)
- [SNOMED CT IPS 용어 체계](https://www.snomed.org/international-patient-summary-terminology)는 IPS 사용을 위한 무료 부분 집합입니다.
- [LOINC](https://loinc.org/) *(확인되지 않음)*
- [세계 보건 정보학 표준화 공동 이니셔티브 협의회(JIC)](http://www.jointinitiativecouncil.org/)
- [글로벌 디지털 헬스 파트너십(GDHP)](https://gdhp.health/)
- [WHO SMART 지침](https://smart.who.int/)
- [WHO 글로벌 디지털 헬스 인증 네트워크](https://www.who.int/initiatives/global-digital-health-certification-network)

### 커뮤니티와 행사

- [chat.fhir.org](https://chat.fhir.org/)는 FHIR 커뮤니티 채팅이며, 활발한 IPS 스트림이 있습니다.
- [HL7 FHIR 커넥타톤](https://www.hl7.org/events/fhir-connectathon/)
- [IHE 커넥타톤](https://www.ihe.net/participate/connectathon/)

### 동영상

- [HIMSS20: 계산 가능한 진료 지침을 위한 IPS를 200초 이내에(IHE International, YouTube)](https://www.youtube.com/watch?v=xjEzGM8kBPw)
- [IHE International YouTube 채널](https://www.youtube.com/@IHEIntl)에는 커넥타톤 패널과 IPS 세션이 있습니다.
- [IPS 프로젝트 사이트 뉴스](https://international-patient-summary.net/)는 다음을 포함한 많은 녹화 웨비나로 연결됩니다.
  - IHE North America Connectathon 2024의 IPS 패널
  - FHIR DevDays 2023의 IPS 세션
  - IPS와 IPA에 관한 Grahame Grieve, IHE Connectathon Montreux 2022
  - SNOMED CT Expo 2022 기조연설
  - GDHP의 IPS에 관한 Matthew Rahn
  - HL7 국경 간 웨비나 "Global Passport"
- [YouTube 검색: International Patient Summary](https://www.youtube.com/results?search_query=international+patient+summary)

### 도서

- Tim Benson과 Grahame Grieve, [*Principles of Health Interoperability: FHIR, HL7 and SNOMED CT*](https://link.springer.com/book/10.1007/978-3-030-56883-2), 제4판, Springer, 2020. FHIR, 임상 요약 리소스, 용어 체계를 다룹니다.

### 연구 논문과 기사

- Laleci Erturkmen G. B., Sinaci A. A., Namli T., Boonstra M., et al., "[An assessment of the European Patient Summary for clinical research: a case study in cardiology](https://doi.org/10.3389/fmed.2024.1481551)", *Frontiers in Medicine*, 2024.
- Lee H., Huang J., Huang S., Chen W., et al., "[Implementing a Cross-Border Next-Generation Personal Health Record in the Philippines and Taiwan: An Implementation Case Report Using Health Level 7 International Fast Healthcare Interoperability Resources](https://doi.org/10.2196/56272)", *JMIR Formative Research*, 2025.
- Song C., Nakayama M., "[Implementation of a Patient Summary Web Application According to the International Patient Summary and Validation in Common Use Cases in Japan](https://doi.org/10.1007/s10916-023-01993-6)", *Journal of Medical Systems*, 2023.
- Schippers D., Spil T., Stegwee R., Folmer E., Donnelly S., "[The adoption and diffusion of the International Patient Summary](https://doi.org/10.24251/hicss.2025.425)", *Proceedings of the 58th Hawaii International Conference on System Sciences (HICSS)*, 2025.
- da Silva Carvalho N., Papadimitriou A., Stegwee R., Gille H., et al., "[Accelerating European electronic health record exchange format (EEHRxF) implementation across Europe: a policy perspective](https://doi.org/10.3389/fmed.2025.1648170)", *Frontiers in Medicine*, 2025.
- Kay S., Cangioli G., Nusbaum M., "[The International Patient Summary and the extensibility requirement](https://international-patient-summary.net/the-international-patient-summary-and-the-extensibility-requirement/)", *Studies in Health Technology and Informatics* (pHealth), 2020.
- D'Amore J., Cangioli G., Hausam R., "[Advancing the International Patient Summary](https://international-patient-summary.net/advancing-the-international-patient-summary/)"
- "[Towards the Austrian Patient Summary](https://international-patient-summary.net/towards-the-austrian-patient-summary/)", *Studies in Health Technology and Informatics* (dHealth).
- "[Revival of the International Patient Summary (IPS)](https://smiledigitalhealth.com/our-blog/revival-of-the-international-patient-summary-ips)", Smile Digital Health 블로그.
- [PubMed 검색: "international patient summary"](https://pubmed.ncbi.nlm.nih.gov/?term=%22international+patient+summary%22), 동료 심사 문헌용.


## 참고 문헌

본문의 [1]과 같은 번호 인용은 아래의 해당 항목으로 연결됩니다. 링크는 2026년 11월에 확인되었습니다. 법률, 도입 수치, 버전은 바뀌므로 현재 상황은 출처를 확인하십시오.

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

### 추가 읽을거리

이 출처들은 위에서 인용되지 않았지만, 표준 자체에 대한 주요 참고 자료입니다.

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
