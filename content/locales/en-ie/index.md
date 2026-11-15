# International Patient Summary (IPS)

The **International Patient Summary (IPS)** is a worldwide standard for a short electronic health record extract. It holds the basic clinical facts a clinician needs to treat a patient safely. It is designed to be:

- **Minimal and non-exhaustive.** It is a small, curated subset of a health record, not the full record.
- **Specialty-agnostic.** Any clinician can use it, in any discipline.
- **Condition-independent.** It is not tied to a particular disease or care pathway.
- **Implementable and international.** It is built on global standards and terminologies, so it can be used across countries, languages, and IT systems.

In short, the IPS answers one question for a clinician who has never met the patient: *"What do I need to know right now to care for this person safely?"*


## Why the IPS exists

Health information is usually locked inside a local electronic health record (EHR), a national system, or a vendor's product. When a patient seeks care somewhere else, such as another hospital, region, or country, the treating clinician often has no access to that history. The IPS gives everyone one shared, portable summary format.

### Core use cases

| Use case | Description |
|---|---|
| **Unscheduled and emergency care** | A patient falls ill or is injured away from home, and local clinicians cannot reach the patient's home EHR. This is the original, primary use case. |
| **Cross-border care** | Travellers, migrants, cross-border workers, and refugees carry a summary that clinicians abroad can read. |
| **Planned care and transitions** | Referrals, specialist consultations, admissions, discharges, and handovers between providers. |
| **Medical tourism and mobility** | Patients who choose to receive care in another jurisdiction. |
| **Patient empowerment** | Patients hold, view, and share their own summary from a phone app, a portal, or a printed copy. |


## When to use the IPS

Use the IPS when someone who does not know the patient needs a trustworthy snapshot quickly, and when the sender and receiver do not share an IT system.

### Good fits

- **Emergency and unplanned care**, especially away from home or across a border. This is the use the IPS was designed for.
- **Cross-border exchange between national systems**, such as the EU's MyHealth@EU service [[1]](#ref-1) [[2]](#ref-2).
- **Patient-held summaries** that travellers, migrants, refugees, pilgrims, or people with complex conditions carry on a phone or on paper [[3]](#ref-3).
- **A national or regional patient summary.** Many countries build their own summary as a profile of the IPS, so it can also be exchanged internationally [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
- **A common baseline for care transitions,** such as referrals, admissions, and discharges, when a richer specialised document is not available.
- **A starting point for other datasets,** such as vaccination certificates, research data, or registries that need the same core facts [[7]](#ref-7) [[8]](#ref-8).

### Poor fits

- **The full medical record.** The IPS is deliberately minimal. Use a full record export or a specialised document when detail matters.
- **Specialty-specific documents,** such as an oncology treatment summary, a maternity record, or a detailed discharge summary. These have their own standards, which can include or reference IPS content.
- **Real-time clinical workflows inside one organisation.** Inside a single EHR, query the live data rather than a summary snapshot.
- **Legal, billing, or insurance records.** The IPS is a clinical summary, not an administrative or claims record.
- **Decisions that need guaranteed completeness.** An IPS is only as complete and current as its source and its author. Always confirm critical facts with the patient when possible.


## What an IPS contains

An IPS document has two layers:

1. **A header that records who, what, and when:**
   - **Patient:** identity, demographics, and contacts.
   - **Author:** the person, organisation, or system that produced the summary.
   - **Custodian:** the organisation responsible for maintaining it.
   - **Attester:** who has verified it, if anyone.
   - **Date and time:** when it was created.

2. **A clinical body organised into sections.** Sections are required, recommended, or optional.

| Section | Status | Typical content |
|---|---|---|
| **Medication Summary** | Required | Current and relevant past medications, prescriptions, dosage |
| **Allergies and Intolerances** | Required | Drug, food, and environmental allergies; reactions and severity |
| **Problem List** | Required | Active diagnoses, conditions, and clinical problems |
| Immunisations | Recommended | Vaccines given, such as tetanus, hepatitis B, influenza, COVID-19 |
| History of Procedures | Recommended | Major surgeries and invasive interventions |
| Medical Devices | Recommended | Implants and devices, such as pacemakers, stents, prostheses |
| Diagnostic Results | Recommended | Key laboratory results, imaging reports, pathology |
| Vital Signs | Optional | Blood pressure, heart rate, weight, height, BMI |
| History of Past Illness | Optional | Resolved conditions and significant past problems |
| Functional Status | Optional | Disabilities and the ability to perform daily activities |
| Plan of Care | Optional | Care plans and treatment recommendations |
| Social History | Optional | Tobacco, alcohol, and other relevant lifestyle factors |
| History of Pregnancy | Optional | Current pregnancy status and pregnancy history |
| Advance Directives | Optional | Living wills, resuscitation preferences, consent statements |
| Alerts | Optional | Safety-critical warnings that do not fit elsewhere (added in FHIR IPS STU 2) |
| Patient Story | Optional | What matters to the patient: needs, strengths, values, concerns, and preferences, in the patient's own terms (added in FHIR IPS STU 2) |

**Explicitly saying "nothing" matters.** An empty section does not tell a clinician whether the patient has no allergies or whether nobody recorded them. The IPS therefore expects explicit statements such as *"no known allergies"*, *"no current medications"*, or *"information not available"*.


## The standards behind the IPS

The IPS is a family of coordinated standards. The ISO and CEN standards define *what* a patient summary must contain. The HL7 implementation guides define *how* to encode it.

| Standard | Body | Role |
|---|---|---|
| **EN 17269** | CEN (European Committee for Standardization) | The abstract IPS dataset, published in 2019 |
| **ISO 27269** | ISO (International Organization for Standardization) | The international version of the abstract IPS dataset, published in 2021 |
| **CEN/TS 17288** | CEN | Guidance on implementing the IPS for cross-border use |
| **HL7 FHIR IPS Implementation Guide** | HL7 International | The modern, API-friendly encoding and the primary implementation format. STU 2 (2.0.x) added the Alerts and Patient Story sections, allowed empty sections, clarified `$summary`, and moved to the SNOMED CT IPS terminology [[9]](#ref-9). |
| **HL7 CDA IPS Implementation Guide** | HL7 International | The XML document-based encoding, common in existing national and European infrastructures |

The work is coordinated through the **Joint Initiative Council for Global Health Informatics Standardization (JIC)**. The JIC brings together ISO, CEN, HL7, SNOMED International, IHE, and others. The IPS grew out of a 2016 EU–US collaboration on cross-border health data and is now supported by governments and digital-health programmes worldwide.


## How the IPS is encoded with HL7 FHIR

In FHIR, an IPS is a single **`Bundle`** of type `document`:

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

Key technical points:

- **Each section has a human-readable narrative.** A clinician can read the IPS in a plain browser, even with no FHIR software.
- **Each section also has coded entries**, which are structured FHIR resources that software can process, translate, and reconcile.
- **Profiles constrain the base FHIR resources.** For example, *Patient (IPS)* and *AllergyIntolerance (IPS)* define the minimum data and the "must support" elements.
- **The `$summary` operation** (`GET [base]/Patient/[id]/$summary`) asks a FHIR server to generate an IPS for a patient on demand.
- **The IPS is signable and self-contained.** A complete document can be stored, sent, signed, and verified as one unit.


## Terminologies

Shared code systems make an IPS readable across languages and countries:

| Terminology | Used for |
|---|---|
| **SNOMED CT** | Problems, allergies, procedures, devices, clinical findings. A free **SNOMED CT IPS Terminology** subset is available for IPS use, even in non-member countries. |
| **LOINC** | Document and section types, laboratory tests, vital signs |
| **ATC** and other medication code systems | Medicinal products and active substances |
| **UCUM** | Units of measure |
| **ISO and HL7 value sets** | Countries, languages, administrative genders, absent and unknown reasons |

Because entries are coded, a receiving system can show an IPS written in Portuguese with English labels. The coded meaning stays the same.


## How patients and clinicians use an IPS

An IPS can be produced by an EHR, a national health record service, a patient portal, or a personal health app. It can then be delivered in several ways:

- **System to system:** through FHIR REST APIs, national infrastructures, or cross-border gateways such as the EU's MyHealth@EU network.
- **Patient-mediated sharing:** the patient holds the summary in a wallet or health app and shares it on demand.
- **SMART Health Links:** a QR code or URL that gives a clinician time-limited, optionally passcode-protected access to an encrypted IPS. The clinician can open it in an ordinary web browser.
- **Paper or PDF:** a printed narrative rendering as a fallback when nothing else works.

Apps such as **CommonHealth** let patients gather their records and share an IPS through SMART Health Links.

A typical emergency scenario:

1. A traveller collapses abroad.
2. The traveller, or a companion, shows a QR code from a phone.
3. The emergency doctor scans it and sees the traveller's medications, allergies, and active problems in seconds.
4. The doctor avoids a dangerous drug interaction and treats the patient safely.


## Principles and design choices

- **Safety first.** Content is chosen for clinical relevance, not completeness.
- **Global by default, local by extension.** Countries create national profiles, such as EU, Australian, or Canadian variants, that add requirements without breaking the international core.
- **Human-readable and machine-processable.** Narrative and coded data coexist.
- **Free and open.** The HL7 IPS specifications and the IPS SNOMED CT subset are freely available to lower barriers to adoption.
- **Privacy and consent.** Access is governed by local law and patient consent. Mechanisms such as SMART Health Links keep the patient in control.


## How to use the IPS

### For patients

1. **Ask for one.** Ask your clinic, hospital, national health portal, or health app whether it can produce an IPS or a national patient summary based on it.
2. **Check it.** Read it while you are well. Report anything wrong or missing, especially allergies and medications.
3. **Keep it with you.** Store it in a health app or wallet, as a SMART Health Link QR code, or as a printout in your travel documents.
4. **Keep it current.** Get a new one after a new diagnosis, a new long-term medication, surgery, or an implant.
5. **Share it on purpose.** Show it to the clinician treating you. A SMART Health Link can expire and can require a passcode, so you control who sees it and for how long [[10]](#ref-10).

### For clinicians

1. **Check the header first.** Who wrote it, when, and whether anyone has verified it. An old or unverified summary needs more caution.
2. **Read the required sections first:** allergies, medications, and problems.
3. **Treat "no known" differently from "not recorded".** "No known allergies" is a clinical statement. An empty or "unknown" section is not.
4. **Confirm critical facts** with the patient or their companion whenever you can.
5. **Use the coded data.** Where your system supports it, coded entries let the summary be shown in your language and checked against drug-interaction and allergy rules.
6. **Do not assume completeness.** The IPS is a safety net, not a full history.

### For implementers

1. **Pick the specification.** Use the current HL7 FHIR IPS Implementation Guide (STU 2), or your country's national profile of it. For CDA-based infrastructures, use the CDA IPS guide [[9]](#ref-9) [[11]](#ref-11).
2. **Map your data.** Map local data to the IPS profiles: `Patient`, `AllergyIntolerance`, `MedicationStatement`, `Condition`, and so on. Most of the work is in this mapping.
3. **Map your terminology.** Map local codes to SNOMED CT, LOINC, and medication code systems. The SNOMED CT IPS Terminology is free to use for this purpose [[12]](#ref-12).
4. **Generate the document.** Support the `$summary` operation, or build the `Bundle` and `Composition` yourself. Include a readable narrative for every section, and explicit "no known" or "not available" statements.
5. **Validate it.** Check every generated document with the FHIR Validator and a conformance test kit, such as the Inferno IPS Test Kit [[13]](#ref-13).
6. **Sign and share it.** Decide how documents are signed, stored, and sent: an API, a document registry, a cross-border gateway, or a SMART Health Link.
7. **Consume it safely.** As a receiver, show the narrative even when you cannot process every coded entry, keep the source and author visible, and never silently merge received data into the local record.
8. **Test with others.** Interoperate with other vendors and countries at IHE and HL7 Connectathons before going live.

### For governments and health organisations

1. **Adopt a national profile** that builds on the IPS rather than a separate format, so the national summary is international by default [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
2. **Settle governance:** who may create, update, and attest a summary, and who answers for its accuracy.
3. **Settle terminology licensing:** SNOMED CT membership, or use of the free IPS subset.
4. **Settle identity, consent, and trust:** how patients are identified, how consent is recorded, and which trust framework, such as MyHealth@EU or the WHO Global Digital Health Certification Network, is used to verify documents [[1]](#ref-1) [[14]](#ref-14).
5. **Publish what you have built** in the IPS Implementation Registry, so others can learn from it [[15]](#ref-15).


## Integrating the IPS with healthcare systems

An IPS is rarely a separate system. It is a view of data that already lives in EHRs, health information exchanges, national records, and personal health apps.

| Integration pattern | How it works | Examples |
|---|---|---|
| **Generated by the EHR** | The EHR builds an IPS from its own data on request, often through the FHIR `$summary` operation. | EHR vendors and FHIR servers such as HAPI FHIR, which has an IPS generator module |
| **National or regional record** | A national patient summary service stores a profile of the IPS and makes it available to authorised providers. | Canada's PS-CA, Australia's AU Patient Summary, Switzerland's electronic patient record with CH IPS [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6) |
| **Cross-border gateway** | Each country runs a national contact point. It turns the home country's summary into the agreed exchange format, sends it across the border, and the receiving country shows it in the local language. | MyHealth@EU National Contact Points for eHealth [[1]](#ref-1) [[2]](#ref-2) |
| **Regional exchange network** | Ministries of health exchange IPS documents through national FHIR servers under a shared regional guide. | RACSEL's IPS-LAC and the Pan American Highway for Digital Health (PH4H) in Latin America and the Caribbean [[16]](#ref-16) |
| **Patient-mediated** | The patient holds the IPS in an app or wallet and shares it with a QR code or a SMART Health Link. | CommonHealth; the WHO trust network's IPS work for pilgrimage [[10]](#ref-10) [[14]](#ref-14) |
| **API-based access** | Apps fetch an IPS for an authorised patient over a FHIR API. | International Patient Access (IPA); US networks such as Flexpa, which added IPS support under the CMS Interoperability Framework [[17]](#ref-17) [[18]](#ref-18) |

Integration points to plan for:

- **Document sharing:** IHE profiles such as MHD (FHIR) and XDS (document registries) store and find IPS documents. The IHE IPS content profiles add conformance and testing rules [[11]](#ref-11).
- **Patient identity:** IHE PIXm and PDQm, or a national identifier, match the patient across systems.
- **Existing documents:** many systems already produce CDA, C-CDA, or national summaries. Mapping these to the IPS is usually easier than starting again, but check for differences in cardinality, value sets, and code systems.
- **National profiles:** a national core, such as US Core, AU Core, CH Core, or JP Core, can differ from the IPS. National patient summary profiles reconcile the two [[5]](#ref-5) [[6]](#ref-6) [[19]](#ref-19).
- **Translation and display:** receivers should render the narrative and translate coded entries using the codes' display names in the receiver's language.
- **Security:** use TLS, signed documents where required, audit logging (for example IHE ATNA or BALP), and access control tied to consent.


## Current adoption

The IPS has moved from pilots to national and regional programmes. Status changes quickly, so check the linked sources for the latest position.

- **IPS Implementation Registry.** The IPS community maintains a public registry of implementations. In mid-2026 it listed 34 entries, from Argentina's provider-mediated IPS-LAC project to Vietnam's Better Health Program [[15]](#ref-15).
- **FHIR ecosystem.** In the 2025 State of FHIR survey by HL7 International and Firely, 42 respondents said the IPS underpins their national FHIR specifications, more than any other international guide [[20]](#ref-20).
- **Research.** A 2025 study of IPS adoption interviewed stakeholders, who pointed to better quality of care and patient safety as the main benefits [[21]](#ref-21).

| Country or region | Status |
|---|---|
| **European Union and EEA** | MyHealth@EU exchanges patient summaries and ePrescriptions between countries. A 2026 European Commission presentation reported 17 Member States plus Norway live, with most of the rest planning to join [[2]](#ref-2) [[22]](#ref-22). The EHDS Regulation makes patient summary exchange mandatory by 2029 [[23]](#ref-23). |
| **Canada** | The pan-Canadian Patient Summary (PS-CA), approved by Canada Health Infoway in October 2022, is built on the IPS with Canadian adaptations [[4]](#ref-4). |
| **Australia** | The AU Patient Summary, built on the IPS and AU Core, is developed by HL7 Australia through the Sparked programme [[5]](#ref-5) [[24]](#ref-24). |
| **Switzerland** | CH IPS 2.0.0 (trial use) from HL7 Switzerland builds on the IPS and CH Core. A separate profile adds what the Swiss electronic patient record needs [[6]](#ref-6). |
| **United States** | No federal mandate for the IPS. The US uses US Core and USCDI. Federal agencies take part in IPS work internationally, and some networks support the IPS voluntarily [[18]](#ref-18). |
| **Latin America and the Caribbean** | RACSEL ministries of health use the regional IPS-LAC guide. In 2023, 16 countries exchanged IPS-LAC documents at a connectathon in São Paulo [[16]](#ref-16). |
| **Japan** | Researchers have built and validated an IPS-based patient summary application for common Japanese use cases, using JP Core [[19]](#ref-19). |
| **Taiwan and the Philippines** | A 2025 implementation report describes a cross-border personal health record using FHIR and aligned with the IPS [[25]](#ref-25). |
| **G7** | In 2021 the G7 health ministers committed to work towards the IPS and published an IPS roadmap [[26]](#ref-26). |
| **WHO** | The WHO Global Digital Health Certification Network includes IPS-based trust domains, such as verifiable IPS for pilgrimage [[14]](#ref-14). |


## Laws, regulations, and policy by country and region

The IPS is a standard, not a law. Laws decide whether a country must exchange patient summaries, in what format, and under what privacy rules. This is a summary, not legal advice. Always check the current text of the law.

| Jurisdiction | Law or policy | What it means for the IPS |
|---|---|---|
| **European Union** | **European Health Data Space (EHDS) Regulation, (EU) 2025/327.** Published 5 March 2025; in force 26 March 2025 [[23]](#ref-23) [[27]](#ref-27). | Patient summaries are a "priority category". Exchange in the European EHR exchange format must work in every Member State by 2029. Medical images, test results, and discharge reports follow by 2031 [[28]](#ref-28). The format for patient summaries is based on the HL7 IPS. |
| **European Union** | **Directive 2011/24/EU** on patients' rights in cross-border healthcare [[29]](#ref-29). | Created the eHealth Network, which agreed the patient summary guidelines behind MyHealth@EU. |
| **European Union** | **General Data Protection Regulation (GDPR), (EU) 2016/679** [[30]](#ref-30). | Health data is a special category. Every IPS exchange needs a lawful basis and appropriate safeguards. |
| **United States** | **21st Century Cures Act and the information blocking rules** [[31]](#ref-31); the voluntary **CMS Interoperability Framework** (2025) [[17]](#ref-17). | No law requires the IPS. Laws require access to and exchange of electronic health information, using US Core and USCDI. IPS support is voluntary. |
| **Canada** | Provincial and territorial health information laws. The federal **Connected Care for Canadians Act** (Bill C-72) was introduced in 2024 but did not pass before Parliament was prorogued in 2025. | PS-CA is a pan-Canadian specification, not a legal requirement. Adoption is led by provinces and territories with Canada Health Infoway [[4]](#ref-4). |
| **United Kingdom** | **Data (Use and Access) Act 2025** [[32]](#ref-32). | Includes powers to set information standards for health and adult social care IT. The UK hosted the 2021 G7 IPS commitment [[26]](#ref-26). |
| **Australia** | **My Health Records Act 2012** and the 2025 "sharing by default" amendments. | The AU Patient Summary is a national specification developed through Sparked [[5]](#ref-5) [[24]](#ref-24). |
| **Switzerland** | **Federal Act of 19 June 2015 on the Electronic Patient Record (EPRA, SR 816.1)**, in force since 15 April 2017 [[33]](#ref-33). | CH IPS includes a profile for documents in the Swiss electronic patient record [[6]](#ref-6). |
| **Latin America and the Caribbean** | Regional agreements through RACSEL and PH4H, with Inter-American Development Bank support for a regional legal framework [[16]](#ref-16). | IPS-LAC is the agreed regional format for cross-border exchange. |
| **G7** | **Health Ministers' communiqué**, Oxford, June 2021, and the **G7 IPS Roadmap**, December 2021 [[26]](#ref-26) [[34]](#ref-34). | A political commitment to work towards the IPS and patient access, not binding law. |


## Pros and cons

| Pros | Cons |
|---|---|
| **Safer unplanned care.** Clinicians see allergies, medications, and problems in seconds. | **Only as good as its source.** Out-of-date or wrong source data gives an out-of-date or wrong summary. |
| **One format, worldwide.** One implementation serves national and cross-border needs. | **National variation.** National profiles add rules, so a "valid IPS" in one country may need work to be accepted in another. |
| **Built on open, mature standards:** ISO, CEN, HL7 FHIR and CDA, SNOMED CT, and LOINC. | **Terminology burden.** Mapping local codes to SNOMED CT and LOINC is hard work, and full SNOMED CT needs a licence beyond the free IPS subset. |
| **Readable and computable.** Narrative for people, coded data for software and translation. | **Narrative and coded data can disagree** if the generator is careless, and receivers may trust the wrong one. |
| **Patient empowerment.** Patients can hold and share their own summary. | **Privacy and consent risk.** A portable summary is sensitive, and laws and consent models differ by country. |
| **Free specifications** and free IPS terminology lower costs [[12]](#ref-12). | **Version churn.** STU 1, STU 1.1, and STU 2 coexist, and the EHDS format references an earlier version [[28]](#ref-28). |
| **Reusable** for vaccination certificates, research, and registries [[7]](#ref-7) [[8]](#ref-8). | **Deliberately minimal.** Not a replacement for full records or specialty documents, and gaps for secondary use need extensions [[7]](#ref-7). |
| **Strong backing** from governments, the EU, the G7, WHO, and standards bodies. | **Uneven adoption.** Many countries and vendors are still piloting, and patient awareness is low. |


## Plans and future directions

- **EU, 2029:** patient summary and ePrescription exchange operational in all EU Member States under the EHDS [[23]](#ref-23) [[28]](#ref-28).
- **EU, 2031:** medical images, laboratory results, and discharge reports join the European EHR exchange format [[28]](#ref-28).
- **MyHealth@EU expansion:** more countries joining, and new services for laboratory results, discharge reports, and medical images [[2]](#ref-2) [[22]](#ref-22).
- **FHIR IPS STU 2 adoption:** implementers move to the Alerts and Patient Story sections, explicit empty sections, and SNOMED CT IPS terminology [[9]](#ref-9).
- **Australia:** publication of AU Patient Summary Release 1, planned for 2026 [[24]](#ref-24).
- **IPS Best Practices Project:** a community effort to document lessons learned, with work starting in 2026.
- **WHO trust network:** more IPS-based trust domains for verifiable, portable health documents [[14]](#ref-14).
- **SMART Health Links:** standardised through HL7, for patient-controlled sharing [[10]](#ref-10).
- **Latin America and the Caribbean:** wider IPS-LAC exchange through PH4H [[16]](#ref-16).
- **Research and secondary use:** work to extend patient summaries for clinical research and AI, while keeping the core minimal [[7]](#ref-7).


## Glossary

| Term | Meaning |
|---|---|
| **IPS** | International Patient Summary |
| **FHIR** | Fast Healthcare Interoperability Resources, HL7's modern API-based standard |
| **CDA** | Clinical Document Architecture, HL7's XML document standard |
| **IG** | Implementation Guide, a set of profiles and rules for applying a standard |
| **Profile** | A constrained version of a FHIR resource for a specific use |
| **SNOMED CT** | Systematized Nomenclature of Medicine – Clinical Terms |
| **LOINC** | Logical Observation Identifiers Names and Codes |
| **SMART Health Links** | A standard for sharing health data through a link or QR code |
| **JIC** | Joint Initiative Council for Global Health Informatics Standardization |


## Learn more

- HL7 FHIR IPS Implementation Guide: <https://hl7.org/fhir/uv/ips/>
- IPS continuous build: <https://build.fhir.org/ig/HL7/fhir-ips/>
- International Patient Summary project site: <https://international-patient-summary.net/>
- ISO 27269 (Health informatics — International patient summary): <https://www.iso.org/standard/79491.html>
- SNOMED CT IPS Terminology: <https://www.snomed.org/international-patient-summary-terminology>
- SMART Health Links: <https://docs.smarthealthit.org/smart-health-links/>


## Resources

These links cover sources, specifications, software, projects, videos, books, and research about the IPS. Most were checked when this page was written. A few publisher sites block automated checks, and those are marked *(not checked)*.

### Official specifications and standards

- [HL7 FHIR IPS Implementation Guide, current published version](https://hl7.org/fhir/uv/ips/) is the authoritative FHIR specification.
- [HL7 FHIR IPS Implementation Guide, STU 2](https://hl7.org/fhir/uv/ips/STU2/)
- [HL7 FHIR IPS Implementation Guide, STU 1.1](https://hl7.org/fhir/uv/ips/STU1.1/)
- [HL7 FHIR IPS publication history](https://www.hl7.org/fhir/uv/ips/history.html) lists every published version.
- [HL7 FHIR IPS continuous build](https://build.fhir.org/ig/HL7/fhir-ips/) is the latest unballoted work in progress.
- [Structure of the International Patient Summary](https://hl7.org/fhir/uv/ips/en/Structure-of-the-International-Patient-Summary.html) explains the sections and profiles.
- [IPS design conventions](https://build.fhir.org/ig/HL7/fhir-ips/en/Design-Conventions.html) covers must-support, absent data, and narrative.
- [IPS generation and data inclusion](https://build.fhir.org/ig/HL7/fhir-ips/en/Generation-and-Data-Inclusion.html) covers `$summary` and how to select content.
- [HL7 CDA IPS Implementation Guide, continuous build](https://build.fhir.org/ig/HL7/CDA-IPS/)
- [HL7 CDA IPS product brief](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=483)
- [ISO 27269, Health informatics — International patient summary](https://www.iso.org/standard/79491.html) *(not checked)*
- [ISO/TC 215 Health informatics committee](https://www.iso.org/committee/54960.html) *(not checked)*
- [IHE FHIR International Patient Summary profile (FIIO)](https://profiles.ihe.net/PCC/FIIO/volume-1.html)
- [IHE PCC International Patient Summary supplement, 2020 (PDF)](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS_Rev1-0_PC_2020-03-17.pdf)
- [HL7 SMART Health Cards and Links Implementation Guide](https://hl7.org/fhir/uv/smart-health-cards-and-links/)
- [SMART Health Links documentation](https://docs.smarthealthit.org/smart-health-links/)
- [HL7 FHIR International Patient Access (IPA)](https://hl7.org/fhir/uv/ipa/) is a sister specification for patient API access.
- [HL7 FHIR R4 base specification](https://hl7.org/fhir/R4/), which the IPS builds on.

### Source repositories

- [HL7/fhir-ips](https://github.com/HL7/fhir-ips) holds the FHIR IPS IG source in FHIR Shorthand.
- [HL7/cda-ips](https://github.com/HL7/cda-ips) holds the CDA IPS IG source.
- [hl7-eu/eps](https://github.com/hl7-eu/eps) holds the HL7 Europe Patient Summary source.
- [hl7ch/ch-ips](https://github.com/hl7ch/ch-ips) holds the Swiss IPS, with a viewer and generator under development.
- [GitHub topic: international-patient-summary](https://github.com/topics/international-patient-summary) lists community repositories.

### National and regional adaptations

- [HL7 Europe Patient Summary (EPS), continuous build](https://build.fhir.org/ig/hl7-eu/eps/)
- [AU Patient Summary (Australia), continuous build](https://build.fhir.org/ig/hl7au/au-fhir-ps/)
- [Trillium II IPS structure (HL7 Europe)](https://hl7.eu/fhir/build/trillium2/site/ipsStructure.html) is from the EU–US project that helped start the IPS.
- [eHealth Suisse](https://www.ehealthsuisse.ch/) is Switzerland's competence centre for digital health and its IPS adoption.
- [MyHealth@EU, cross-border digital health services](https://health.ec.europa.eu/ehealth-digital-health-and-care/electronic-cross-border-health-services_en)
- [Xt-EHR Joint Action](https://www.xt-ehr.eu/) prepares the European Health Data Space formats, including the patient summary.

### Software and tools

- [IPS Viewer](https://www.ipsviewer.com) ([source: jddamore/IPSviewer](https://github.com/jddamore/IPSviewer)) is an open-source, browser-based IPS viewer.
- [uwcirg/shl-ips-viewer](https://github.com/uwcirg/shl-ips-viewer) views an IPS shared through a SMART Health Link.
- [smart-on-fhir/smart-health-links](https://github.com/smart-on-fhir/smart-health-links) is the reference implementation of SMART Health Links.
- [HAPI FHIR IPS generator](https://hapifhir.io/hapi-fhir/docs/server_ips/introduction.html) ([source: hapifhir/hapi-fhir](https://github.com/hapifhir/hapi-fhir)) is an open-source Java server module that implements `$summary`.
- [HAPI FHIR JPA server IPS documentation](https://hapifhir.io/hapi-fhir/docs/server_jpa/ips.html)
- [Inferno IPS Test Kit](https://inferno.healthit.gov/test-kits/ips) ([source: inferno-framework/ips-test-kit](https://github.com/inferno-framework/ips-test-kit)) is an open-source conformance test kit.
- [FHIR Validator](https://validator.fhir.org/) validates IPS bundles against the IG profiles.
- [Simplifier: hl7.fhir.uv.ips package](https://simplifier.net/packages/hl7.fhir.uv.ips) has the package, profiles, and examples.
- [FHIR package registry](https://registry.fhir.org/)
- [FHIR Shorthand (FSH) School](https://fshschool.org/) teaches the language the IPS IG is written in.
- [CommonHealth](https://www.commonhealth.org/) is a patient app that generates an IPS and shares it through SMART Health Links.
- [WHO SMART Trust](https://github.com/WorldHealthOrganization/smart-trust) is the trust framework for the WHO Global Digital Health Certification Network.

### Organisations and projects

- [International Patient Summary project site](https://international-patient-summary.net/) has news, adoption reports, and education.
- [IPS for health IT developers](https://international-patient-summary.net/health-it-developer/)
- [HL7 International](https://www.hl7.org/)
- [IHE International](https://www.ihe.net/)
- [SNOMED International](https://www.snomed.org/)
- [SNOMED CT IPS Terminology](https://www.snomed.org/international-patient-summary-terminology) is a free subset for IPS use.
- [LOINC](https://loinc.org/) *(not checked)*
- [Joint Initiative Council for Global Health Informatics Standardization (JIC)](http://www.jointinitiativecouncil.org/)
- [Global Digital Health Partnership (GDHP)](https://gdhp.health/)
- [WHO SMART Guidelines](https://smart.who.int/)
- [WHO Global Digital Health Certification Network](https://www.who.int/initiatives/global-digital-health-certification-network)

### Community and events

- [chat.fhir.org](https://chat.fhir.org/) is the FHIR community chat, which has an active IPS stream.
- [HL7 FHIR Connectathons](https://www.hl7.org/events/fhir-connectathon/)
- [IHE Connectathons](https://www.ihe.net/participate/connectathon/)

### Videos

- [HIMSS20: IPS for computable care guidelines in 200 seconds or less (IHE International, YouTube)](https://www.youtube.com/watch?v=xjEzGM8kBPw)
- [IHE International YouTube channel](https://www.youtube.com/@IHEIntl) has Connectathon panels and IPS sessions.
- [IPS project site news](https://international-patient-summary.net/) links to many recorded webinars, including:
  - the IPS panel at the IHE North America Connectathon, 2024
  - the IPS session at FHIR DevDays 2023
  - Grahame Grieve on IPS and IPA, IHE Connectathon Montreux 2022
  - the SNOMED CT Expo 2022 keynote
  - Matthew Rahn on IPS in the GDHP
  - the HL7 "Global Passport" cross-border webinar
- [YouTube search: International Patient Summary](https://www.youtube.com/results?search_query=international+patient+summary)

### Books

- Tim Benson and Grahame Grieve, [*Principles of Health Interoperability: FHIR, HL7 and SNOMED CT*](https://link.springer.com/book/10.1007/978-3-030-56883-2), 4th edition, Springer, 2020. It covers FHIR, clinical summary resources, and terminology.

### Research papers and articles

- Laleci Erturkmen G. B., Sinaci A. A., Namli T., Boonstra M., et al., "[An assessment of the European Patient Summary for clinical research: a case study in cardiology](https://doi.org/10.3389/fmed.2024.1481551)", *Frontiers in Medicine*, 2024.
- Lee H., Huang J., Huang S., Chen W., et al., "[Implementing a Cross-Border Next-Generation Personal Health Record in the Philippines and Taiwan: An Implementation Case Report Using Health Level 7 International Fast Healthcare Interoperability Resources](https://doi.org/10.2196/56272)", *JMIR Formative Research*, 2025.
- Song C., Nakayama M., "[Implementation of a Patient Summary Web Application According to the International Patient Summary and Validation in Common Use Cases in Japan](https://doi.org/10.1007/s10916-023-01993-6)", *Journal of Medical Systems*, 2023.
- Schippers D., Spil T., Stegwee R., Folmer E., Donnelly S., "[The adoption and diffusion of the International Patient Summary](https://doi.org/10.24251/hicss.2025.425)", *Proceedings of the 58th Hawaii International Conference on System Sciences (HICSS)*, 2025.
- da Silva Carvalho N., Papadimitriou A., Stegwee R., Gille H., et al., "[Accelerating European electronic health record exchange format (EEHRxF) implementation across Europe: a policy perspective](https://doi.org/10.3389/fmed.2025.1648170)", *Frontiers in Medicine*, 2025.
- Kay S., Cangioli G., Nusbaum M., "[The International Patient Summary and the extensibility requirement](https://international-patient-summary.net/the-international-patient-summary-and-the-extensibility-requirement/)", *Studies in Health Technology and Informatics* (pHealth), 2020.
- D'Amore J., Cangioli G., Hausam R., "[Advancing the International Patient Summary](https://international-patient-summary.net/advancing-the-international-patient-summary/)"
- "[Towards the Austrian Patient Summary](https://international-patient-summary.net/towards-the-austrian-patient-summary/)", *Studies in Health Technology and Informatics* (dHealth).
- "[Revival of the International Patient Summary (IPS)](https://smiledigitalhealth.com/our-blog/revival-of-the-international-patient-summary-ips)", Smile Digital Health blog.
- [PubMed search: "international patient summary"](https://pubmed.ncbi.nlm.nih.gov/?term=%22international+patient+summary%22) for peer-reviewed literature.


## References

Numbered citations in the text, such as [1], link to the matching entry below. The links were checked in November 2026. Laws, adoption figures, and versions change, so check the source for the current position.

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

These sources are not cited above, but are the primary references for the standard itself.

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
