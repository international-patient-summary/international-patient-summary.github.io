# International Patient Summary (IPS)

The **International Patient Summary (IPS)** is a warldwide staundart for a short electronic health record extract. It haulds the basic clinical facts a clinician needs tae treat a patient safely. It is designed tae be:

- **Minimal an no exhaustive.** It is a sma, curated subset o a health record, no the hail record.
- **Specialty-agnostic.** Onie clinician can uise it, in onie discipline.
- **Condition-independent.** It is no tied tae a parteecular disease or care pathwey.
- **Implementable an international.** It is biggit on global staundarts an terminologies, sae it can be uised athort kintras, leids, an IT seistems.

In short, the IPS answers ae question for a clinician wha haesnae iver met the patient: *"Whit dae A need tae ken the nou tae tak tent o this body safely?"*


## Whit the IPS is for

Health information is uisually lockit inside a local electronic health record (EHR), a national seistem, or a vendor's product. Whan a patient seeks care somewhaur else, sic as anither hospital, region, or kintra, the treatin clinician aften haes nae access tae that history. The IPS gies iverybodie ae shared, portable summary format.

### Core uise cases

| Uise case | Description |
|---|---|
| **Unscheduled an emergency care** | A patient taks ill or is hurt awa frae hame, an local clinicians canna reach the patient's hame EHR. This is the original, main uise case. |
| **Cross-border care** | Traivellers, migrants, cross-border warkers, an refugees cairry a summary that clinicians abroad can read. |
| **Planned care an transitions** | Referrals, specialist consultations, admissions, discharges, an haundovers atween providers. |
| **Medical tourism an mobility** | Patients that chuise tae get care in anither jurisdiction. |
| **Patient empowerment** | Patients haud, view, an share thair ain summary frae a phone app, a portal, or a printit copy. |


## Whan tae uise the IPS

Uise the IPS whan somebodie wha disnae ken the patient needs a trustworthy snapshot quick, an whan the sender an receiver dinnae share an IT seistem.

### Guid fits

- **Emergency an unplanned care**, especially awa frae hame or athort a border. This is the uise the IPS wis designed for.
- **Cross-border exchange atween national seistems**, sic as the EU's MyHealth@EU service [[1]](#ref-1) [[2]](#ref-2).
- **Patient-haudit summaries** that traivellers, migrants, refugees, pilgrims, or fowk wi complex conditions cairry on a phone or on paper [[3]](#ref-3).
- **A national or regional patient summary.** Mony kintras big thair ain summary as a profile o the IPS, sae it can an aw be exchanged internationally [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
- **A common baseline for care transitions,** sic as referrals, admissions, an discharges, whan a richer specialised document isnae available.
- **A stairtin pynt for ither datasets,** sic as vaccination certificates, research data, or registries that need the same core facts [[7]](#ref-7) [[8]](#ref-8).

### Puir fits

- **The hail medical record.** The IPS is deliberately minimal. Uise a fou record export or a specialised document whan detail maitters.
- **Specialty-specific documents,** sic as an oncology treatment summary, a maternity record, or a detailed discharge summary. These hae thair ain staundarts, that can include or reference IPS content.
- **Real-time clinical workflaws inside ae organisation.** Inside a single EHR, query the live data raither than a summary snapshot.
- **Legal, billin, or insurance records.** The IPS is a clinical summary, no an administrative or claims record.
- **Decisions that need guaranteed completeness.** An IPS is anerly as complete an current as its source an its author. Aye confirm critical facts wi the patient whan possible.


## Whit an IPS contains

An IPS document haes twa layers:

1. **A header that records wha, whit, an whan:**
   - **Patient:** identity, demographics, an contacts.
   - **Author:** the body, organisation, or seistem that made the summary.
   - **Custodian:** the organisation responsible for keepin it.
   - **Attester:** wha haes verified it, if onybodie.
   - **Date an time:** whan it wis creatit.

2. **A clinical body organised intae sections.** Sections are required, recommended, or optional.

| Section | Status | Typical content |
|---|---|---|
| **Medication Summary** | Required | Current an relevant past medications, prescriptions, dosage |
| **Allergies and Intolerances** | Required | Drug, food, an environmental allergies; reactions an severity |
| **Problem List** | Required | Active diagnoses, conditions, an clinical problems |
| Immunizations | Recommended | Vaccines gien, sic as tetanus, hepatitis B, influenza, COVID-19 |
| History of Procedures | Recommended | Major surgeries an invasive interventions |
| Medical Devices | Recommended | Implants an devices, sic as pacemakers, stents, prostheses |
| Diagnostic Results | Recommended | Key laboratory results, imaging reports, pathology |
| Vital Signs | Optional | Bluid pressure, hert rate, wecht, hicht, BMI |
| History of Past Illness | Optional | Resolved conditions an significant past problems |
| Functional Status | Optional | Disabilities an the abeility tae dae daily activities |
| Plan of Care | Optional | Care plans an treatment recommendations |
| Social History | Optional | Tobacco, alcohol, an ither relevant lifestyle factors |
| History of Pregnancy | Optional | Current pregnancy status an pregnancy history |
| Advance Directives | Optional | Living wills, resuscitation preferences, consent statements |
| Alerts | Optional | Safety-critical warnins that dinnae fit elsewhaur (addit in FHIR IPS STU 2) |
| Patient Story | Optional | Whit maitters tae the patient: needs, strenths, values, concerns, an preferences, in the patient's ain terms (addit in FHIR IPS STU 2) |

**Sayin "naething" explicitly maitters.** An teem section disnae tell a clinician whether the patient haes nae allergies or whether naebodie recordit them. The IPS therefore expects explicit statements sic as *"no kent allergies"*, *"nae current medications"*, or *"information no available"*.


## The staundarts ahint the IPS

The IPS is a faimily o coordinatit staundarts. The ISO an CEN staundarts define *whit* a patient summary maun contain. The HL7 implementation guides define *hou* tae encode it.

| Standard | Body | Role |
|---|---|---|
| **EN 17269** | CEN (European Committee for Standardization) | The abstract IPS dataset, published in 2019 |
| **ISO 27269** | ISO (International Organization for Standardization) | The international version o the abstract IPS dataset, published in 2021 |
| **CEN/TS 17288** | CEN | Guidance on implementin the IPS for cross-border uise |
| **HL7 FHIR IPS Implementation Guide** | HL7 International | The modern, API-friendly encodin an the main implementation format. STU 2 (2.0.x) addit the Alerts an Patient Story sections, allowed teem sections, clarified `$summary`, an muived tae the SNOMED CT IPS terminology [[9]](#ref-9). |
| **HL7 CDA IPS Implementation Guide** | HL7 International | The XML document-based encodin, common in existin national an European infrastructures |

The wark is coordinatit throu the **Joint Initiative Council for Global Health Informatics Standardization (JIC)**. The JIC brings thegither ISO, CEN, HL7, SNOMED International, IHE, an ithers. The IPS grew oot o a 2016 EU–US collaboration on cross-border health data an is nou supportit by govrenments an digital-health programmes warldwide.


## Hou the IPS is encodit wi HL7 FHIR

In FHIR, an IPS is a single **`Bundle`** o type `document`:

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

Key technical pynts:

- **Ilka section haes a human-readable narrative.** A clinician can read the IPS in a plain broser, even wi nae FHIR software.
- **Ilka section an aw haes coded entries**, that are structurit FHIR resources that software can process, translate, an reconcile.
- **Profiles constrain the base FHIR resources.** For example, *Patient (IPS)* an *AllergyIntolerance (IPS)* define the minimum data an the "must support" elements.
- **The `$summary` operation** (`GET [base]/Patient/[id]/$summary`) speirs a FHIR server tae generate an IPS for a patient on demand.
- **The IPS is signable an self-contained.** A complete document can be stored, sent, signed, an verified as ae unit.


## Terminologies

Shared code seistems mak an IPS readable athort leids an kintras:

| Terminology | Used for |
|---|---|
| **SNOMED CT** | Problems, allergies, procedures, devices, clinical findins. A free **SNOMED CT IPS Terminology** subset is available for IPS uise, even in non-member kintras. |
| **LOINC** | Document an section types, laboratory tests, vital signs |
| **ATC** an ither medication code seistems | Medicinal products an active substances |
| **UCUM** | Units o measure |
| **ISO and HL7 value sets** | Kintras, leids, administrative genders, absent an unkent reasons |

Acause entries are coded, a receivin seistem can shaw an IPS written in Portuguese wi English labels. The coded meanin bides the same.


## Hou patients an clinicians uise an IPS

An IPS can be made by an EHR, a national health record service, a patient portal, or a personal health app. It can than be delivered in a wheen o weys:

- **System tae seistem:** throu FHIR REST APIs, national infrastructures, or cross-border gateweys sic as the EU's MyHealth@EU network.
- **Patient-mediated sharin:** the patient haulds the summary in a wallet or health app an shares it on demand.
- **SMART Health Links:** a QR code or URL that gies a clinician time-limitit, optionally passcode-protectit access tae an encryptit IPS. The clinician can apen it in an ordinary wab broser.
- **Paper or PDF:** a printit narrative rendering as a fallback whan naething else warks.

Apps sic as **CommonHealth** let patients gaither thair records an share an IPS throu SMART Health Links.

A typical emergency scenario:

1. A traiveller collapses abroad.
2. The traiveller, or a companion, shaws a QR code frae a phone.
3. The emergency doctor scans it an sees the traiveller's medications, allergies, an active problems in seconds.
4. The doctor avoids a dangerous drug interaction an treats the patient safely.


## Principles an design chyces

- **Safety first.** Content is chosen for clinical relevance, no completeness.
- **Global by default, local by extension.** Kintras mak national profiles, sic as EU, Australian, or Canadian variants, that add requirements wioot braekin the international core.
- **Human-readable an machine-processable.** Narrative an coded data coexist.
- **Free an apen.** The HL7 IPS specifications an the IPS SNOMED CT subset are freely available tae lower barriers tae adoption.
- **Privacy an consent.** Access is governed by local law an patient consent. Mechanisms sic as SMART Health Links keep the patient in control.


## Hou tae uise the IPS

### For patients

1. **Spier for ane.** Spier yer clinic, hospital, national health portal, or health app whether it can mak an IPS or a national patient summary based on it.
2. **Check it.** Read it while ye are weel. Report onything wrang or missin, especially allergies an medications.
3. **Keep it wi ye.** Store it in a health app or wallet, as a SMART Health Link QR code, or as a printoot in yer traivel documents.
4. **Keep it current.** Get a new ane efter a new diagnosis, a new lang-term medication, surgery, or an implant.
5. **Share it on purpose.** Shaw it tae the clinician treatin ye. A SMART Health Link can expire an can require a passcode, sae ye control wha sees it an for hou lang [[10]](#ref-10).

### For clinicians

1. **Check the header first.** Wha wrate it, whan, an whether onybodie haes verified it. An auld or unverified summary needs mair caution.
2. **Read the required sections first:** allergies, medications, an problems.
3. **Treat "no kent" differently frae "no recordit".** "No kent allergies" is a clinical statement. A teem or "unkent" section isnae.
4. **Confirm critical facts** wi the patient or thair companion whaniver ye can.
5. **Uise the coded data.** Whaur yer seistem supports it, coded entries let the summary be shawn in yer leid an checked against drug-interaction an allergy rules.
6. **Dinnae assume completeness.** The IPS is a safety nit, no a fou history.

### For implementers

1. **Pick the specification.** Uise the current HL7 FHIR IPS Implementation Guide (STU 2), or yer kintra's national profile o it. For CDA-based infrastructures, uise the CDA IPS guide [[9]](#ref-9) [[11]](#ref-11).
2. **Map yer data.** Map local data tae the IPS profiles: `Patient`, `AllergyIntolerance`, `MedicationStatement`, `Condition`, an sae on. Maist o the wark is in this mappin.
3. **Map yer terminology.** Map local codes tae SNOMED CT, LOINC, an medication code seistems. The SNOMED CT IPS Terminology is free tae uise for this purpose [[12]](#ref-12).
4. **Generate the document.** Support the `$summary` operation, or big the `Bundle` an `Composition` yersel. Include a readable narrative for ilka section, an explicit "no kent" or "no available" statements.
5. **Validate it.** Check ilka generatit document wi the FHIR Validator an a conformance test kit, sic as the Inferno IPS Test Kit [[13]](#ref-13).
6. **Sign an share it.** Decide hou documents are signed, stored, an sent: an API, a document registry, a cross-border gateweay, or a SMART Health Link.
7. **Consume it safely.** As a receiver, shaw the narrative even whan ye canna process ilka coded entry, keep the source an author veesible, an niver quietly merge receivit data intae the local record.
8. **Test wi ithers.** Interoperate wi ither vendors an kintras at IHE an HL7 Connectathons afore gaun live.

### For govrenments an health organisations

1. **Adopt a national profile** that biggs on the IPS raither than a separate format, sae the national summary is international by default [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
2. **Settle governance:** wha can mak, update, an attest a summary, an wha answers for its accuracy.
3. **Settle terminology licensin:** SNOMED CT membership, or uise o the free IPS subset.
4. **Settle identity, consent, an trust:** hou patients are identified, hou consent is recordit, an whilk trust framewark, sic as MyHealth@EU or the WHO Global Digital Health Certification Network, is uised tae verify documents [[1]](#ref-1) [[14]](#ref-14).
5. **Publish whit ye hae biggit** in the IPS Implementation Registry, sae ithers can lairn frae it [[15]](#ref-15).


## Integratin the IPS wi healthcare seistems

An IPS is seldom a separate seistem. It is a view o data that aareadies lives in EHRs, health information exchanges, national records, an personal health apps.

| Integration pattern | How it works | Examples |
|---|---|---|
| **Generated by the EHR** | The EHR biggs an IPS frae its ain data on request, aften throu the FHIR `$summary` operation. | EHR vendors an FHIR servers sic as HAPI FHIR, that haes an IPS generator module |
| **National or regional record** | A national patient summary service stores a profile o the IPS an maks it available tae authorised providers. | Canada's PS-CA, Australia's AU Patient Summary, Switzerland's electronic patient record wi CH IPS [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6) |
| **Cross-border gateway** | Ilka kintra rins a national contact pynt. It turns the hame kintra's summary intae the agreed exchange format, sends it athort the border, an the receivin kintra shaws it in the local leid. | MyHealth@EU National Contact Points for eHealth [[1]](#ref-1) [[2]](#ref-2) |
| **Regional exchange network** | Ministries o health exchange IPS documents throu national FHIR servers unner a shared regional guide. | RACSEL's IPS-LAC an the Pan American Highway for Digital Health (PH4H) in Latin America an the Caribbean [[16]](#ref-16) |
| **Patient-mediated** | The patient haulds the IPS in an app or wallet an shares it wi a QR code or a SMART Health Link. | CommonHealth; the WHO trust network's IPS wark for pilgrimage [[10]](#ref-10) [[14]](#ref-14) |
| **API-based access** | Apps fetch an IPS for an authorised patient ower a FHIR API. | International Patient Access (IPA); US networks sic as Flexpa, that addit IPS support unner the CMS Interoperability Framework [[17]](#ref-17) [[18]](#ref-18) |

Integration pynts tae plan for:

- **Document sharin:** IHE profiles sic as MHD (FHIR) an XDS (document registries) store an finnd IPS documents. The IHE IPS content profiles add conformance an testin rules [[11]](#ref-11).
- **Patient identity:** IHE PIXm an PDQm, or a national identifier, match the patient athort seistems.
- **Existin documents:** mony seistems aareadies mak CDA, C-CDA, or national summaries. Mappin thir tae the IPS is uisually easier nor stairtin again, but check for differences in cardinality, value sets, an code seistems.
- **National profiles:** a national core, sic as US Core, AU Core, CH Core, or JP Core, can differ frae the IPS. National patient summary profiles reconcile the twa [[5]](#ref-5) [[6]](#ref-6) [[19]](#ref-19).
- **Translation an display:** receivers shoud render the narrative an translate coded entries uisin the codes' display names in the receiver's leid.
- **Security:** uise TLS, signed documents whaur required, audit loggin (for example IHE ATNA or BALP), an access control tied tae consent.


## Current adoption

The IPS haes muived frae pilots tae national an regional programmes. Status chynges quick, sae check the linked sources for the latest position.

- **IPS Implementation Registry.** The IPS community keeps a public registry o implementations. In mid-2026 it listit 34 entries, frae Argentina's provider-mediated IPS-LAC project tae Vietnam's Better Health Program [[15]](#ref-15).
- **FHIR ecosystem.** In the 2025 State of FHIR survey by HL7 International an Firely, 42 respondents said the IPS underpins thair national FHIR specifications, mair nor onie ither international guide [[20]](#ref-20).
- **Research.** A 2025 study o IPS adoption interviewed stakeholders, wha pyntit tae better quality o care an patient safety as the main benefits [[21]](#ref-21).

| Country or region | Status |
|---|---|
| **European Union and EEA** | MyHealth@EU exchanges patient summaries an ePrescriptions atween kintras. A 2026 European Commission presentation reportit 17 Member States plus Norway live, wi maist o the rest plannin tae jyne [[2]](#ref-2) [[22]](#ref-22). The EHDS Regulation maks patient summary exchange mandatory by 2029 [[23]](#ref-23). |
| **Canada** | The pan-Canadian Patient Summary (PS-CA), approvit by Canada Health Infoway in October 2022, is biggit on the IPS wi Canadian adaptations [[4]](#ref-4). |
| **Australia** | The AU Patient Summary, biggit on the IPS an AU Core, is developit by HL7 Australia throu the Sparked programme [[5]](#ref-5) [[24]](#ref-24). |
| **Switzerland** | CH IPS 2.0.0 (trial use) frae HL7 Switzerland biggs on the IPS an CH Core. A separate profile adds whit the Swiss electronic patient record needs [[6]](#ref-6). |
| **United States** | Nae federal mandate for the IPS. The US uises US Core an USCDI. Federal agencies tak pairt in IPS wark internationally, an some networks support the IPS voluntarily [[18]](#ref-18). |
| **Latin America and the Caribbean** | RACSEL ministries o health uise the regional IPS-LAC guide. In 2023, 16 kintras exchanged IPS-LAC documents at a connectathon in São Paulo [[16]](#ref-16). |
| **Japan** | Researchers hae biggit an validatit an IPS-based patient summary application for common Japanese uise cases, uisin JP Core [[19]](#ref-19). |
| **Taiwan and the Philippines** | A 2025 implementation report describes a cross-border personal health record uisin FHIR an alignit wi the IPS [[25]](#ref-25). |
| **G7** | In 2021 the G7 health ministers committit tae wark towards the IPS an publishit an IPS roadmap [[26]](#ref-26). |
| **WHO** | The WHO Global Digital Health Certification Network includes IPS-based trust domains, sic as verifiable IPS for pilgrimage [[14]](#ref-14). |


## Laws, regulations, an policy by kintra an region

The IPS is a staundart, no a law. Laws decide whether a kintra maun exchange patient summaries, in whit format, an unner whit privacy rules. This is a summary, no legal advice. Aye check the current text o the law.

| Jurisdiction | Law or policy | What it means for the IPS |
|---|---|---|
| **European Union** | **European Health Data Space (EHDS) Regulation, (EU) 2025/327.** Published 5 March 2025; in force 26 March 2025 [[23]](#ref-23) [[27]](#ref-27). | Patient summaries are a "priority category". Exchange in the European EHR exchange format maun wark in ilka Member State by 2029. Medical images, test results, an discharge reports follae by 2031 [[28]](#ref-28). The format for patient summaries is based on the HL7 IPS. |
| **European Union** | **Directive 2011/24/EU** on patients' rights in cross-border healthcare [[29]](#ref-29). | Creatit the eHealth Network, that agreed the patient summary guidelines ahint MyHealth@EU. |
| **European Union** | **General Data Protection Regulation (GDPR), (EU) 2016/679** [[30]](#ref-30). | Health data is a special category. Ilka IPS exchange needs a lawfu basis an appropriate safeguards. |
| **United States** | **21st Century Cures Act and the information blocking rules** [[31]](#ref-31); the voluntary **CMS Interoperability Framework** (2025) [[17]](#ref-17). | Nae law requires the IPS. Laws require access tae an exchange o electronic health information, uisin US Core an USCDI. IPS support is voluntary. |
| **Canada** | Provincial an territorial health information laws. The federal **Connected Care for Canadians Act** (Bill C-72) wis introduced in 2024 but didnae pass afore Parliament wis prorogued in 2025. | PS-CA is a pan-Canadian specification, no a legal requirement. Adoption is led by provinces an territories wi Canada Health Infoway [[4]](#ref-4). |
| **United Kingdom** | **Data (Use and Access) Act 2025** [[32]](#ref-32). | Includes pouers tae set information staundarts for health an adult social care IT. The UK hostit the 2021 G7 IPS commitment [[26]](#ref-26). |
| **Australia** | **My Health Records Act 2012** an the 2025 "sharing by default" amendments. | The AU Patient Summary is a national specification developit throu Sparked [[5]](#ref-5) [[24]](#ref-24). |
| **Switzerland** | **Federal Act of 19 June 2015 on the Electronic Patient Record (EPRA, SR 816.1)**, in force since 15 April 2017 [[33]](#ref-33). | CH IPS includes a profile for documents in the Swiss electronic patient record [[6]](#ref-6). |
| **Latin America and the Caribbean** | Regional agreements throu RACSEL an PH4H, wi Inter-American Development Bank support for a regional legal framewark [[16]](#ref-16). | IPS-LAC is the agreed regional format for cross-border exchange. |
| **G7** | **Health Ministers' communiqué**, Oxford, June 2021, an the **G7 IPS Roadmap**, December 2021 [[26]](#ref-26) [[34]](#ref-34). | A political commitment tae wark towards the IPS an patient access, no bindin law. |


## Pros an cons

| Pros | Cons |
|---|---|
| **Safer unplanned care.** Clinicians see allergies, medications, an problems in seconds. | **Anerly as guid as its source.** Oot-o-date or wrang source data gies an oot-o-date or wrang summary. |
| **Ae format, warldwide.** Ae implementation serves national an cross-border needs. | **National variation.** National profiles add rules, sae a "valid IPS" in ae kintra micht need wark tae be acceptit in anither. |
| **Biggit on apen, mature staundarts:** ISO, CEN, HL7 FHIR an CDA, SNOMED CT, an LOINC. | **Terminology burden.** Mappin local codes tae SNOMED CT an LOINC is hard wark, an fou SNOMED CT needs a licence ayont the free IPS subset. |
| **Readable an computable.** Narrative for fowk, coded data for software an translation. | **Narrative an coded data can disagree** if the generator is careless, an receivers micht trust the wrang ane. |
| **Patient empowerment.** Patients can haud an share thair ain summary. | **Privacy an consent risk.** A portable summary is sensitive, an laws an consent models differ by kintra. |
| **Free specifications** an free IPS terminology lower costs [[12]](#ref-12). | **Version churn.** STU 1, STU 1.1, an STU 2 coexist, an the EHDS format references an earlier version [[28]](#ref-28). |
| **Reusable** for vaccination certificates, research, an registries [[7]](#ref-7) [[8]](#ref-8). | **Deliberately minimal.** No a replacement for fou records or specialty documents, an gaps for seicondary uise need extensions [[7]](#ref-7). |
| **Strang backin** frae govrenments, the EU, the G7, WHO, an staundarts bodies. | **Uneven adoption.** Mony kintras an vendors are still pilotin, an patient awaurness is law. |


## Plans an future directions

- **EU, 2029:** patient summary an ePrescription exchange operational in aw EU Member States unner the EHDS [[23]](#ref-23) [[28]](#ref-28).
- **EU, 2031:** medical images, laboratory results, an discharge reports jyne the European EHR exchange format [[28]](#ref-28).
- **MyHealth@EU expansion:** mair kintras jynin, an new services for laboratory results, discharge reports, an medical images [[2]](#ref-2) [[22]](#ref-22).
- **FHIR IPS STU 2 adoption:** implementers muive tae the Alerts an Patient Story sections, explicit teem sections, an SNOMED CT IPS terminology [[9]](#ref-9).
- **Australia:** publication o AU Patient Summary Release 1, plannit for 2026 [[24]](#ref-24).
- **IPS Best Practices Project:** a community effort tae document lessons lairnt, wi wark stairtin in 2026.
- **WHO trust network:** mair IPS-based trust domains for verifiable, portable health documents [[14]](#ref-14).
- **SMART Health Links:** staundardised throu HL7, for patient-controlled sharin [[10]](#ref-10).
- **Latin America and the Caribbean:** wider IPS-LAC exchange throu PH4H [[16]](#ref-16).
- **Research an seicondary uise:** wark tae extend patient summaries for clinical research an AI, while keepin the core minimal [[7]](#ref-7).


## Glossary

| Term | Meaning |
|---|---|
| **IPS** | International Patient Summary |
| **FHIR** | Fast Healthcare Interoperability Resources, HL7's modern API-based staundart |
| **CDA** | Clinical Document Architecture, HL7's XML document staundart |
| **IG** | Implementation Guide, a set o profiles an rules for applyin a staundart |
| **Profile** | A constrained version o a FHIR resource for a specific uise |
| **SNOMED CT** | Systematized Nomenclature of Medicine – Clinical Terms |
| **LOINC** | Logical Observation Identifiers Names and Codes |
| **SMART Health Links** | A staundart for sharin health data throu a link or QR code |
| **JIC** | Joint Initiative Council for Global Health Informatics Standardization |


## Learn mair

- HL7 FHIR IPS Implementation Guide: <https://hl7.org/fhir/uv/ips/>
- IPS continuous build: <https://build.fhir.org/ig/HL7/fhir-ips/>
- International Patient Summary project site: <https://international-patient-summary.net/>
- ISO 27269 (Health informatics — International patient summary): <https://www.iso.org/standard/79491.html>
- SNOMED CT IPS Terminology: <https://www.snomed.org/international-patient-summary-terminology>
- SMART Health Links: <https://docs.smarthealthit.org/smart-health-links/>


## Resources

Thir links cover sources, specifications, software, projects, videos, beuks, an research aboot the IPS. Maist wur checked whan this page wis written. A few publisher sites block automatit checks, an thae are markit *(no checked)*.

### Official specifications an staundarts

- [HL7 FHIR IPS Implementation Guide, current published version](https://hl7.org/fhir/uv/ips/) is the authoritative FHIR specification.
- [HL7 FHIR IPS Implementation Guide, STU 2](https://hl7.org/fhir/uv/ips/STU2/)
- [HL7 FHIR IPS Implementation Guide, STU 1.1](https://hl7.org/fhir/uv/ips/STU1.1/)
- [HL7 FHIR IPS publication history](https://www.hl7.org/fhir/uv/ips/history.html) lists ilka publishit version.
- [HL7 FHIR IPS continuous build](https://build.fhir.org/ig/HL7/fhir-ips/) is the latest unballotit wark in progress.
- [Structure of the International Patient Summary](https://hl7.org/fhir/uv/ips/en/Structure-of-the-International-Patient-Summary.html) explains the sections an profiles.
- [IPS design conventions](https://build.fhir.org/ig/HL7/fhir-ips/en/Design-Conventions.html) covers must-support, absent data, an narrative.
- [IPS generation and data inclusion](https://build.fhir.org/ig/HL7/fhir-ips/en/Generation-and-Data-Inclusion.html) covers `$summary` an hou tae select content.
- [HL7 CDA IPS Implementation Guide, continuous build](https://build.fhir.org/ig/HL7/CDA-IPS/)
- [HL7 CDA IPS product brief](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=483)
- [ISO 27269, Health informatics — International patient summary](https://www.iso.org/standard/79491.html) *(no checked)*
- [ISO/TC 215 Health informatics committee](https://www.iso.org/committee/54960.html) *(no checked)*
- [IHE FHIR International Patient Summary profile (FIIO)](https://profiles.ihe.net/PCC/FIIO/volume-1.html)
- [IHE PCC International Patient Summary supplement, 2020 (PDF)](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS_Rev1-0_PC_2020-03-17.pdf)
- [HL7 SMART Health Cards and Links Implementation Guide](https://hl7.org/fhir/uv/smart-health-cards-and-links/)
- [SMART Health Links documentation](https://docs.smarthealthit.org/smart-health-links/)
- [HL7 FHIR International Patient Access (IPA)](https://hl7.org/fhir/uv/ipa/) is a sister specification for patient API access.
- [HL7 FHIR R4 base specification](https://hl7.org/fhir/R4/), that the IPS biggs on.

### Source repositories

- [HL7/fhir-ips](https://github.com/HL7/fhir-ips) haulds the FHIR IPS IG source in FHIR Shorthand.
- [HL7/cda-ips](https://github.com/HL7/cda-ips) haulds the CDA IPS IG source.
- [hl7-eu/eps](https://github.com/hl7-eu/eps) haulds the HL7 Europe Patient Summary source.
- [hl7ch/ch-ips](https://github.com/hl7ch/ch-ips) haulds the Swiss IPS, wi a viewer an generator unner development.
- [GitHub topic: international-patient-summary](https://github.com/topics/international-patient-summary) lists community repositories.

### National an regional adaptations

- [HL7 Europe Patient Summary (EPS), continuous build](https://build.fhir.org/ig/hl7-eu/eps/)
- [AU Patient Summary (Australia), continuous build](https://build.fhir.org/ig/hl7au/au-fhir-ps/)
- [Trillium II IPS structure (HL7 Europe)](https://hl7.eu/fhir/build/trillium2/site/ipsStructure.html) is frae the EU–US project that helpit stairt the IPS.
- [eHealth Suisse](https://www.ehealthsuisse.ch/) is Switzerland's competence centre for digital health an its IPS adoption.
- [MyHealth@EU, cross-border digital health services](https://health.ec.europa.eu/ehealth-digital-health-and-care/electronic-cross-border-health-services_en)
- [Xt-EHR Joint Action](https://www.xt-ehr.eu/) prepares the European Health Data Space formats, includin the patient summary.

### Software an tools

- [IPS Viewer](https://www.ipsviewer.com) ([source: jddamore/IPSviewer](https://github.com/jddamore/IPSviewer)) is an apen-source, broser-based IPS viewer.
- [uwcirg/shl-ips-viewer](https://github.com/uwcirg/shl-ips-viewer) views an IPS shared throu a SMART Health Link.
- [smart-on-fhir/smart-health-links](https://github.com/smart-on-fhir/smart-health-links) is the reference implementation o SMART Health Links.
- [HAPI FHIR IPS generator](https://hapifhir.io/hapi-fhir/docs/server_ips/introduction.html) ([source: hapifhir/hapi-fhir](https://github.com/hapifhir/hapi-fhir)) is an apen-source Java server module that implements `$summary`.
- [HAPI FHIR JPA server IPS documentation](https://hapifhir.io/hapi-fhir/docs/server_jpa/ips.html)
- [Inferno IPS Test Kit](https://inferno.healthit.gov/test-kits/ips) ([source: inferno-framework/ips-test-kit](https://github.com/inferno-framework/ips-test-kit)) is an apen-source conformance test kit.
- [FHIR Validator](https://validator.fhir.org/) validates IPS bundles against the IG profiles.
- [Simplifier: hl7.fhir.uv.ips package](https://simplifier.net/packages/hl7.fhir.uv.ips) haes the package, profiles, an examples.
- [FHIR package registry](https://registry.fhir.org/)
- [FHIR Shorthand (FSH) School](https://fshschool.org/) teaches the leid the IPS IG is written in.
- [CommonHealth](https://www.commonhealth.org/) is a patient app that maks an IPS an shares it throu SMART Health Links.
- [WHO SMART Trust](https://github.com/WorldHealthOrganization/smart-trust) is the trust framewark for the WHO Global Digital Health Certification Network.

### Organisations an projects

- [International Patient Summary project site](https://international-patient-summary.net/) haes news, adoption reports, an education.
- [IPS for health IT developers](https://international-patient-summary.net/health-it-developer/)
- [HL7 International](https://www.hl7.org/)
- [IHE International](https://www.ihe.net/)
- [SNOMED International](https://www.snomed.org/)
- [SNOMED CT IPS Terminology](https://www.snomed.org/international-patient-summary-terminology) is a free subset for IPS uise.
- [LOINC](https://loinc.org/) *(no checked)*
- [Joint Initiative Council for Global Health Informatics Standardization (JIC)](http://www.jointinitiativecouncil.org/)
- [Global Digital Health Partnership (GDHP)](https://gdhp.health/)
- [WHO SMART Guidelines](https://smart.who.int/)
- [WHO Global Digital Health Certification Network](https://www.who.int/initiatives/global-digital-health-certification-network)

### Community an events

- [chat.fhir.org](https://chat.fhir.org/) is the FHIR community chat, that haes an active IPS stream.
- [HL7 FHIR Connectathons](https://www.hl7.org/events/fhir-connectathon/)
- [IHE Connectathons](https://www.ihe.net/participate/connectathon/)

### Videos

- [HIMSS20: IPS for computable care guidelines in 200 seconds or less (IHE International, YouTube)](https://www.youtube.com/watch?v=xjEzGM8kBPw)
- [IHE International YouTube channel](https://www.youtube.com/@IHEIntl) haes Connectathon panels an IPS sessions.
- [IPS project site news](https://international-patient-summary.net/) links tae mony recordit webinars, includin:
  - the IPS panel at the IHE North America Connectathon, 2024
  - the IPS session at FHIR DevDays 2023
  - Grahame Grieve on IPS and IPA, IHE Connectathon Montreux 2022
  - the SNOMED CT Expo 2022 keynote
  - Matthew Rahn on IPS in the GDHP
  - the HL7 "Global Passport" cross-border webinar
- [YouTube search: International Patient Summary](https://www.youtube.com/results?search_query=international+patient+summary)

### Beuks

- Tim Benson and Grahame Grieve, [*Principles of Health Interoperability: FHIR, HL7 and SNOMED CT*](https://link.springer.com/book/10.1007/978-3-030-56883-2), 4th edition, Springer, 2020. It covers FHIR, clinical summary resources, an terminology.

### Research papers an articles

- Laleci Erturkmen G. B., Sinaci A. A., Namli T., Boonstra M., et al., "[An assessment of the European Patient Summary for clinical research: a case study in cardiology](https://doi.org/10.3389/fmed.2024.1481551)", *Frontiers in Medicine*, 2024.
- Lee H., Huang J., Huang S., Chen W., et al., "[Implementing a Cross-Border Next-Generation Personal Health Record in the Philippines and Taiwan: An Implementation Case Report Using Health Level 7 International Fast Healthcare Interoperability Resources](https://doi.org/10.2196/56272)", *JMIR Formative Research*, 2025.
- Song C., Nakayama M., "[Implementation of a Patient Summary Web Application According to the International Patient Summary and Validation in Common Use Cases in Japan](https://doi.org/10.1007/s10916-023-01993-6)", *Journal of Medical Systems*, 2023.
- Schippers D., Spil T., Stegwee R., Folmer E., Donnelly S., "[The adoption and diffusion of the International Patient Summary](https://doi.org/10.24251/hicss.2025.425)", *Proceedings of the 58th Hawaii International Conference on System Sciences (HICSS)*, 2025.
- da Silva Carvalho N., Papadimitriou A., Stegwee R., Gille H., et al., "[Accelerating European electronic health record exchange format (EEHRxF) implementation across Europe: a policy perspective](https://doi.org/10.3389/fmed.2025.1648170)", *Frontiers in Medicine*, 2025.
- Kay S., Cangioli G., Nusbaum M., "[The International Patient Summary and the extensibility requirement](https://international-patient-summary.net/the-international-patient-summary-and-the-extensibility-requirement/)", *Studies in Health Technology and Informatics* (pHealth), 2020.
- D'Amore J., Cangioli G., Hausam R., "[Advancing the International Patient Summary](https://international-patient-summary.net/advancing-the-international-patient-summary/)"
- "[Towards the Austrian Patient Summary](https://international-patient-summary.net/towards-the-austrian-patient-summary/)", *Studies in Health Technology and Informatics* (dHealth).
- "[Revival of the International Patient Summary (IPS)](https://smiledigitalhealth.com/our-blog/revival-of-the-international-patient-summary-ips)", Smile Digital Health blog.
- [PubMed search: "international patient summary"](https://pubmed.ncbi.nlm.nih.gov/?term=%22international+patient+summary%22) for peer-reviewed leeterature.


## References

Numbered citations in the text, sic as [1], link tae the matchin entry ablow. The links wur checked in November 2026. Laws, adoption figures, an versions chynge, sae check the source for the current position.

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

Thir sources arenae citit abune, but are the main references for the staundart itsel.

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
