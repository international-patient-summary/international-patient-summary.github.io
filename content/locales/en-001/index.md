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
| Immunizations | Recommended | Vaccines given, such as tetanus, hepatitis B, influenza, COVID-19 |
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
| Alerts | Optional | Safety-critical warnings that do not fit elsewhere |

**Explicitly saying "nothing" matters.** An empty section does not tell a clinician whether the patient has no allergies or whether nobody recorded them. The IPS therefore expects explicit statements such as *"no known allergies"*, *"no current medications"*, or *"information not available"*.


## The standards behind the IPS

The IPS is a family of coordinated standards. The ISO and CEN standards define *what* a patient summary must contain. The HL7 implementation guides define *how* to encode it.

| Standard | Body | Role |
|---|---|---|
| **EN 17269** | CEN (European Committee for Standardization) | The abstract IPS dataset, published in 2019 |
| **ISO 27269** | ISO (International Organization for Standardization) | The international version of the abstract IPS dataset, published in 2021 |
| **CEN/TS 17288** | CEN | Guidance on implementing the IPS for cross-border use |
| **HL7 FHIR IPS Implementation Guide** | HL7 International | The modern, API-friendly encoding (the primary implementation format) |
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


## Adoption

The IPS is used, or is being adopted, by European Union member states for cross-border patient summaries, and by national programmes in Australia, Canada, Japan, Switzerland, the United Kingdom, the United States, and elsewhere. It is also used by international digital-health initiatives that need a common clinical summary. Vendors test conformance and interoperability at events such as **IHE Connectathons** and **HL7 FHIR Connectathons**.


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

- Laleci Erturkmen G. B., Sinaci A. A., Namli T., et al., "[Assessing the suitability of the European and International Patient Summary for secondary use in clinical research](https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2024.1481551/full)", *Frontiers in Medicine*, 2024. *(The title is paraphrased from search results. Check the exact title.)*
- "[Comparing Philippine and Taiwanese health insurance claim data with the International Patient Summary](https://formative.jmir.org/2025/1/e56272)", *JMIR Formative Research*, 2025. *(not checked; the title is paraphrased)*
- Kay S., Cangioli G., Nusbaum M., "[The International Patient Summary and the extensibility requirement](https://international-patient-summary.net/the-international-patient-summary-and-the-extensibility-requirement/)", *Studies in Health Technology and Informatics* (pHealth), 2020.
- D'Amore J., Cangioli G., Hausam R., "[Advancing the International Patient Summary](https://international-patient-summary.net/advancing-the-international-patient-summary/)"
- "[Towards the Austrian Patient Summary](https://international-patient-summary.net/towards-the-austrian-patient-summary/)", *Studies in Health Technology and Informatics* (dHealth).
- "[Revival of the International Patient Summary (IPS)](https://smiledigitalhealth.com/our-blog/revival-of-the-international-patient-summary-ips)", Smile Digital Health blog.
- [PubMed search: "international patient summary"](https://pubmed.ncbi.nlm.nih.gov/?term=%22international+patient+summary%22) for peer-reviewed literature.
