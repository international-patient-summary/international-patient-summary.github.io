# International Patient Summary (IPS)

Di **International Patient Summary (IPS)** na standard wey dem dey use for di whole world for short electronic health record extract. E get di basic clinical facts wey clinician need make e fit treat patient well well. Dem design am make e be:

- **Small and no be everything.** Na small, well-selected part of health record, no be di full record.
- **Any specialty fit use am.** Any clinician fit use am, for any discipline.
- **E no dey tie to one sickness.** E no dey tie to any particular disease or care pathway.
- **Dem fit implement am and e be international.** Dem build am on global standards and terminologies, so dem fit use am for different countries, languages, and IT systems.

For short, di IPS dey answer one question for clinician wey never meet di patient before: *"Wetin I need to know now now to take care of dis person well?"*


## Why di IPS dey

Health information dey usually locked inside local electronic health record (EHR), national system, or vendor product. When patient go find care for another place, like another hospital, region, or country, di clinician wey dey treat am no fit see dat history many times. Di IPS give everybody one shared summary format wey dem fit carry anywhere.

### Main use cases

| Use case | Description |
|---|---|
| **Unscheduled and emergency care** | Patient fall sick or get injury for outside home, and local clinicians no fit reach di patient home EHR. Na di original and main use case be dis. |
| **Cross-border care** | Travellers, migrants, cross-border workers, and refugees fit carry summary wey clinicians for abroad fit read. |
| **Planned care and transitions** | Referrals, specialist consultations, admissions, discharges, and handovers between providers. |
| **Medical tourism and mobility** | Patients wey choose to receive care for another jurisdiction. |
| **Patient empowerment** | Patients fit hold, view, and share dia own summary from phone app, portal, or printed copy. |


## When to use di IPS

Use di IPS when person wey no know di patient need correct snapshot quick quick, and when di sender and di receiver no dey share one IT system.

### Where e fit well

- **Emergency and unplanned care**, especially for outside home or for di other side of border. Na for dis use dem design di IPS.
- **Cross-border exchange between national systems**, like di EU MyHealth@EU service [[1]](#ref-1) [[2]](#ref-2).
- **Summaries wey patient dey hold** wey travellers, migrants, refugees, pilgrims, or people wey get complex conditions dey carry for phone or for paper [[3]](#ref-3).
- **National or regional patient summary.** Plenty countries dey build dia own summary as profile of di IPS, so dem fit exchange am for international level too [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
- **Common baseline for care transitions,** like referrals, admissions, and discharges, when better specialised document no dey.
- **Starting point for other datasets,** like vaccination certificates, research data, or registries wey need di same core facts [[7]](#ref-7) [[8]](#ref-8).

### Where e no fit well

- **Di full medical record.** Dem make di IPS small on purpose. Use full record export or specialised document when detail matter.
- **Documents wey be for one specialty,** like oncology treatment summary, maternity record, or detailed discharge summary. Dem get dia own standards, wey fit include or refer to IPS content.
- **Real-time clinical workflows inside one organisation.** Inside one EHR, query di live data instead of summary snapshot.
- **Legal, billing, or insurance records.** Di IPS na clinical summary, e no be administrative or claims record.
- **Decisions wey need guarantee say everything dey complete.** IPS only dey complete and current as e source and as e author be. Always confirm important facts with di patient if e possible.


## Wetin dey inside IPS

IPS document get two layers:

1. **Header wey dey record who, wetin, and when:**
   - **Patient:** identity, demographics, and contacts.
   - **Author:** di person, organisation, or system wey make di summary.
   - **Custodian:** di organisation wey responsible to keep am.
   - **Attester:** who don verify am, if anybody verify am.
   - **Date and time:** when dem create am.

2. **Clinical body wey dem arrange into sections.** Sections fit be required, recommended, or optional.

| Section | Status | Typical content |
|---|---|---|
| **Medication Summary** | Required | Current and relevant past medications, prescriptions, dosage |
| **Allergies and Intolerances** | Required | Drug, food, and environmental allergies; reactions and how serious dem be |
| **Problem List** | Required | Active diagnoses, conditions, and clinical problems |
| Immunizations | Recommended | Vaccines wey dem don give, like tetanus, hepatitis B, influenza, COVID-19 |
| History of Procedures | Recommended | Major surgeries and invasive interventions |
| Medical Devices | Recommended | Implants and devices, like pacemakers, stents, prostheses |
| Diagnostic Results | Recommended | Key laboratory results, imaging reports, pathology |
| Vital Signs | Optional | Blood pressure, heart rate, weight, height, BMI |
| History of Past Illness | Optional | Conditions wey don finish and important past problems |
| Functional Status | Optional | Disabilities and di ability to do daily activities |
| Plan of Care | Optional | Care plans and treatment recommendations |
| Social History | Optional | Tobacco, alcohol, and other lifestyle factors wey matter |
| History of Pregnancy | Optional | Current pregnancy status and pregnancy history |
| Advance Directives | Optional | Living wills, resuscitation preferences, consent statements |
| Alerts | Optional | Safety-critical warnings wey no fit for anywhere else (dem add am for FHIR IPS STU 2) |
| Patient Story | Optional | Wetin matter to di patient: needs, strengths, values, concerns, and preferences, for di patient own words (dem add am for FHIR IPS STU 2) |

**To talk "nothing" clear clear matter.** Empty section no tell clinician whether di patient no get allergies or whether nobody write dem down. So di IPS expect clear statements like *"no known allergies"*, *"no current medications"*, or *"information no dey available"*.


## Di standards wey dey behind di IPS

Di IPS na family of standards wey dem coordinate. Di ISO and CEN standards define *wetin* patient summary must get. Di HL7 implementation guides define *how* to encode am.

| Standard | Body | Role |
|---|---|---|
| **EN 17269** | CEN (European Committee for Standardization) | Di abstract IPS dataset, dem publish am for 2019 |
| **ISO 27269** | ISO (International Organization for Standardization) | Di international version of di abstract IPS dataset, dem publish am for 2021 |
| **CEN/TS 17288** | CEN | Guidance on how to implement di IPS for cross-border use |
| **HL7 FHIR IPS Implementation Guide** | HL7 International | Di modern encoding wey API dey like and di main implementation format. STU 2 (2.0.x) add di Alerts and Patient Story sections, allow empty sections, clarify `$summary`, and move go di SNOMED CT IPS terminology [[9]](#ref-9). |
| **HL7 CDA IPS Implementation Guide** | HL7 International | Di XML document-based encoding wey common for national and European infrastructures wey dey already |

Di Joint Initiative Council for Global Health Informatics Standardization (**JIC**) dey coordinate di work. Di JIC bring ISO, CEN, HL7, SNOMED International, IHE, and others together. Di IPS start from 2016 EU–US collaboration on cross-border health data and governments and digital-health programmes for di whole world dey support am now.


## How dem dey encode di IPS with HL7 FHIR

For FHIR, IPS na one **`Bundle`** of type `document`:

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

- **Each section get narrative wey human fit read.** Clinician fit read di IPS for ordinary browser, even if no FHIR software dey.
- **Each section get coded entries too**, wey be structured FHIR resources wey software fit process, translate, and reconcile.
- **Profiles dey put limit for di base FHIR resources.** For example, *Patient (IPS)* and *AllergyIntolerance (IPS)* define di minimum data and di "must support" elements.
- **Di `$summary` operation** (`GET [base]/Patient/[id]/$summary`) dey ask FHIR server make e generate IPS for patient when dem need am.
- **Dem fit sign di IPS and e dey complete by itself.** Dem fit store, send, sign, and verify one complete document as one unit.


## Terminologies

Shared code systems dey make IPS readable across languages and countries:

| Terminology | Used for |
|---|---|
| **SNOMED CT** | Problems, allergies, procedures, devices, clinical findings. Free **SNOMED CT IPS Terminology** subset dey available for IPS use, even for countries wey no be member. |
| **LOINC** | Document and section types, laboratory tests, vital signs |
| **ATC** and other medication code systems | Medicinal products and active substances |
| **UCUM** | Units of measure |
| **ISO and HL7 value sets** | Countries, languages, administrative genders, reasons for absent and unknown |

Because dem code di entries, receiving system fit show IPS wey dem write for Portuguese with English labels. Di coded meaning go remain di same.


## How patients and clinicians dey use IPS

EHR, national health record service, patient portal, or personal health app fit produce IPS. Dem fit deliver am for different ways:

- **System to system:** through FHIR REST APIs, national infrastructures, or cross-border gateways like di EU MyHealth@EU network.
- **Patient-mediated sharing:** di patient dey hold di summary for wallet or health app and share am when dem need am.
- **SMART Health Links:** QR code or URL wey give clinician time-limited access, wey fit get passcode protection, to encrypted IPS. Di clinician fit open am for ordinary web browser.
- **Paper or PDF:** printed narrative rendering as fallback when nothing else work.

Apps like **CommonHealth** dey let patients gather dia records and share IPS through SMART Health Links.

Example of typical emergency:

1. Traveller collapse for abroad.
2. Di traveller, or person wey dey with am, show QR code from phone.
3. Di emergency doctor scan am and see di traveller medications, allergies, and active problems for seconds.
4. Di doctor avoid dangerous drug interaction and treat di patient well.


## Principles and design choices

- **Safety first.** Dem choose content because e clinical relevance, no be because of completeness.
- **Global by default, local by extension.** Countries dey create national profiles, like EU, Australian, or Canadian variants, wey add requirements without breaking di international core.
- **Human fit read am and machine fit process am.** Narrative and coded data dey together.
- **Free and open.** Di HL7 IPS specifications and di IPS SNOMED CT subset dey free to reduce barriers to adoption.
- **Privacy and consent.** Local law and patient consent dey control access. Mechanisms like SMART Health Links dey keep di patient for control.


## How to use di IPS

### For patients

1. **Ask for one.** Ask your clinic, hospital, national health portal, or health app whether dem fit produce IPS or national patient summary wey dem base on am.
2. **Check am.** Read am when you dey well. Report anything wey wrong or wey miss, especially allergies and medications.
3. **Keep am with you.** Store am for health app or wallet, as SMART Health Link QR code, or as printout inside your travel documents.
4. **Keep am current.** Get new one after new diagnosis, new long-term medication, surgery, or implant.
5. **Share am on purpose.** Show am to di clinician wey dey treat you. SMART Health Link fit expire and fit require passcode, so you go control who go see am and for how long [[10]](#ref-10).

### For clinicians

1. **Check di header first.** Who write am, when, and whether anybody don verify am. Old summary or one wey nobody verify need more care.
2. **Read di required sections first:** allergies, medications, and problems.
3. **Treat "no known" different from "no dey recorded".** "No known allergies" na clinical statement. Empty or "unknown" section no be so.
4. **Confirm important facts** with di patient or di person wey dey with am anytime you fit.
5. **Use di coded data.** If your system support am, coded entries go let dem show di summary for your language and check am against drug-interaction and allergy rules.
6. **No assume say e complete.** Di IPS na safety net, e no be full history.

### For implementers

1. **Pick di specification.** Use di current HL7 FHIR IPS Implementation Guide (STU 2), or your country national profile of am. For CDA-based infrastructures, use di CDA IPS guide [[9]](#ref-9) [[11]](#ref-11).
2. **Map your data.** Map local data to di IPS profiles: `Patient`, `AllergyIntolerance`, `MedicationStatement`, `Condition`, and so on. Most of di work dey for dis mapping.
3. **Map your terminology.** Map local codes to SNOMED CT, LOINC, and medication code systems. Di SNOMED CT IPS Terminology free to use for dis purpose [[12]](#ref-12).
4. **Generate di document.** Support di `$summary` operation, or build di `Bundle` and `Composition` yourself. Include readable narrative for every section, and clear "no known" or "not available" statements.
5. **Validate am.** Check every document wey you generate with di FHIR Validator and conformance test kit, like di Inferno IPS Test Kit [[13]](#ref-13).
6. **Sign and share am.** Decide how dem go sign, store, and send documents: API, document registry, cross-border gateway, or SMART Health Link.
7. **Consume am safely.** As receiver, show di narrative even when you no fit process every coded entry, make di source and author dey visible, and never quietly merge di data wey you receive into di local record.
8. **Test with others.** Interoperate with other vendors and countries for IHE and HL7 Connectathons before you go live.

### For governments and health organisations

1. **Adopt national profile** wey build on di IPS instead of separate format, so di national summary go dey international by default [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
2. **Settle governance:** who fit create, update, and attest summary, and who go answer for e accuracy.
3. **Settle terminology licensing:** SNOMED CT membership, or use of di free IPS subset.
4. **Settle identity, consent, and trust:** how dem go identify patients, how dem go record consent, and which trust framework, like MyHealth@EU or di WHO Global Digital Health Certification Network, dem go use verify documents [[1]](#ref-1) [[14]](#ref-14).
5. **Publish wetin you don build** for di IPS Implementation Registry, so others fit learn from am [[15]](#ref-15).


## How to join di IPS with healthcare systems

IPS hardly be separate system. Na view of data wey don already dey inside EHRs, health information exchanges, national records, and personal health apps.

| Integration pattern | How it works | Examples |
|---|---|---|
| **Generated by the EHR** | Di EHR dey build IPS from e own data when dem ask, many times through di FHIR `$summary` operation. | EHR vendors and FHIR servers like HAPI FHIR, wey get IPS generator module |
| **National or regional record** | National patient summary service dey store profile of di IPS and make am available to providers wey get permission. | Canada PS-CA, Australia AU Patient Summary, Switzerland electronic patient record with CH IPS [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6) |
| **Cross-border gateway** | Each country dey run national contact point. E dey turn di home country summary to di exchange format wey dem agree, send am cross di border, and di receiving country go show am for di local language. | MyHealth@EU National Contact Points for eHealth [[1]](#ref-1) [[2]](#ref-2) |
| **Regional exchange network** | Ministries of health dey exchange IPS documents through national FHIR servers under shared regional guide. | RACSEL IPS-LAC and di Pan American Highway for Digital Health (PH4H) for Latin America and di Caribbean [[16]](#ref-16) |
| **Patient-mediated** | Di patient dey hold di IPS for app or wallet and share am with QR code or SMART Health Link. | CommonHealth; di WHO trust network IPS work for pilgrimage [[10]](#ref-10) [[14]](#ref-14) |
| **API-based access** | Apps dey fetch IPS for patient wey get permission over FHIR API. | International Patient Access (IPA); US networks like Flexpa, wey add IPS support under di CMS Interoperability Framework [[17]](#ref-17) [[18]](#ref-18) |

Integration points wey you suppose plan for:

- **Document sharing:** IHE profiles like MHD (FHIR) and XDS (document registries) dey store and find IPS documents. Di IHE IPS content profiles add conformance and testing rules [[11]](#ref-11).
- **Patient identity:** IHE PIXm and PDQm, or national identifier, dey match di patient across systems.
- **Existing documents:** many systems dey already produce CDA, C-CDA, or national summaries. To map dem to di IPS usually easier than to start again, but check for differences for cardinality, value sets, and code systems.
- **National profiles:** national core, like US Core, AU Core, CH Core, or JP Core, fit different from di IPS. National patient summary profiles dey reconcile di two [[5]](#ref-5) [[6]](#ref-6) [[19]](#ref-19).
- **Translation and display:** receivers suppose render di narrative and translate coded entries by using di codes display names for di receiver language.
- **Security:** use TLS, signed documents where dem require am, audit logging (for example IHE ATNA or BALP), and access control wey tie to consent.


## Wetin dey happen with adoption now

Di IPS don move from pilots go national and regional programmes. Status dey change quick, so check di linked sources for di latest position.

- **IPS Implementation Registry.** Di IPS community dey keep public registry of implementations. For mid-2026 e list 34 entries, from Argentina provider-mediated IPS-LAC project to Vietnam Better Health Program [[15]](#ref-15).
- **FHIR ecosystem.** For di 2025 State of FHIR survey by HL7 International and Firely, 42 respondents talk say di IPS dey hold up dia national FHIR specifications, more than any other international guide [[20]](#ref-20).
- **Research.** One 2025 study of IPS adoption interview stakeholders, wey point better quality of care and patient safety as di main benefits [[21]](#ref-21).

| Country or region | Status |
|---|---|
| **European Union and EEA** | MyHealth@EU dey exchange patient summaries and ePrescriptions between countries. One 2026 European Commission presentation report say 17 Member States plus Norway don go live, and most of di rest dey plan to join [[2]](#ref-2) [[22]](#ref-22). Di EHDS Regulation make patient summary exchange compulsory by 2029 [[23]](#ref-23). |
| **Canada** | Di pan-Canadian Patient Summary (PS-CA), wey Canada Health Infoway approve for October 2022, build on di IPS with Canadian adaptations [[4]](#ref-4). |
| **Australia** | Di AU Patient Summary, wey dem build on di IPS and AU Core, na HL7 Australia dey develop am through di Sparked programme [[5]](#ref-5) [[24]](#ref-24). |
| **Switzerland** | CH IPS 2.0.0 (trial use) from HL7 Switzerland build on di IPS and CH Core. One separate profile add wetin di Swiss electronic patient record need [[6]](#ref-6). |
| **United States** | No federal mandate for di IPS. Di US dey use US Core and USCDI. Federal agencies dey join IPS work for international level, and some networks dey support di IPS by choice [[18]](#ref-18). |
| **Latin America and the Caribbean** | RACSEL ministries of health dey use di regional IPS-LAC guide. For 2023, 16 countries exchange IPS-LAC documents for one connectathon for São Paulo [[16]](#ref-16). |
| **Japan** | Researchers don build and validate IPS-based patient summary application for common Japanese use cases, wey use JP Core [[19]](#ref-19). |
| **Taiwan and the Philippines** | One 2025 implementation report describe cross-border personal health record wey use FHIR and align with di IPS [[25]](#ref-25). |
| **G7** | For 2021 di G7 health ministers commit to work towards di IPS and publish IPS roadmap [[26]](#ref-26). |
| **WHO** | Di WHO Global Digital Health Certification Network include IPS-based trust domains, like verifiable IPS for pilgrimage [[14]](#ref-14). |


## Laws, regulations, and policy by country and region

Di IPS na standard, e no be law. Laws dey decide whether country must exchange patient summaries, for which format, and under which privacy rules. Dis na summary, e no be legal advice. Always check di current text of di law.

| Jurisdiction | Law or policy | What it means for the IPS |
|---|---|---|
| **European Union** | **European Health Data Space (EHDS) Regulation, (EU) 2025/327.** Published 5 March 2025; in force 26 March 2025 [[23]](#ref-23) [[27]](#ref-27). | Patient summaries na "priority category". Exchange for di European EHR exchange format must work for every Member State by 2029. Medical images, test results, and discharge reports go follow by 2031 [[28]](#ref-28). Di format for patient summaries base on di HL7 IPS. |
| **European Union** | **Directive 2011/24/EU** on patients' rights in cross-border healthcare [[29]](#ref-29). | E create di eHealth Network, wey agree di patient summary guidelines wey dey behind MyHealth@EU. |
| **European Union** | **General Data Protection Regulation (GDPR), (EU) 2016/679** [[30]](#ref-30). | Health data na special category. Every IPS exchange need lawful basis and correct safeguards. |
| **United States** | **21st Century Cures Act and the information blocking rules** [[31]](#ref-31); the voluntary **CMS Interoperability Framework** (2025) [[17]](#ref-17). | No law require di IPS. Laws require access to and exchange of electronic health information, with US Core and USCDI. IPS support na by choice. |
| **Canada** | Provincial and territorial health information laws. Di federal **Connected Care for Canadians Act** (Bill C-72) dem introduce am for 2024 but e no pass before dem prorogue Parliament for 2025. | PS-CA na pan-Canadian specification, e no be legal requirement. Provinces and territories with Canada Health Infoway dey lead adoption [[4]](#ref-4). |
| **United Kingdom** | **Data (Use and Access) Act 2025** [[32]](#ref-32). | E include powers to set information standards for health and adult social care IT. Di UK host di 2021 G7 IPS commitment [[26]](#ref-26). |
| **Australia** | **My Health Records Act 2012** and the 2025 "sharing by default" amendments. | Di AU Patient Summary na national specification wey dem develop through Sparked [[5]](#ref-5) [[24]](#ref-24). |
| **Switzerland** | **Federal Act of 19 June 2015 on the Electronic Patient Record (EPRA, SR 816.1)**, in force since 15 April 2017 [[33]](#ref-33). | CH IPS include profile for documents inside di Swiss electronic patient record [[6]](#ref-6). |
| **Latin America and the Caribbean** | Regional agreements through RACSEL and PH4H, with Inter-American Development Bank support for a regional legal framework [[16]](#ref-16). | IPS-LAC na di regional format wey dem agree for cross-border exchange. |
| **G7** | **Health Ministers' communiqué**, Oxford, June 2021, and the **G7 IPS Roadmap**, December 2021 [[26]](#ref-26) [[34]](#ref-34). | Na political commitment to work towards di IPS and patient access, e no be binding law. |


## Pros and cons

| Pros | Cons |
|---|---|
| **Safer unplanned care.** Clinicians go see allergies, medications, and problems for seconds. | **E only good as e source.** Old or wrong source data go give old or wrong summary. |
| **One format, for di whole world.** One implementation fit serve national and cross-border needs. | **National variation.** National profiles dey add rules, so "valid IPS" for one country fit need work before another country go accept am. |
| **Dem build am on open, mature standards:** ISO, CEN, HL7 FHIR and CDA, SNOMED CT, and LOINC. | **Terminology burden.** To map local codes to SNOMED CT and LOINC na hard work, and full SNOMED CT need licence beyond di free IPS subset. |
| **E readable and computable.** Narrative for people, coded data for software and translation. | **Narrative and coded data fit disagree** if di generator no careful, and receivers fit trust di wrong one. |
| **Patient empowerment.** Patients fit hold and share dia own summary. | **Privacy and consent risk.** Portable summary sensitive, and laws and consent models different for each country. |
| **Free specifications** and free IPS terminology dey reduce cost [[12]](#ref-12). | **Version churn.** STU 1, STU 1.1, and STU 2 dey together, and di EHDS format refer to earlier version [[28]](#ref-28). |
| **Dem fit reuse am** for vaccination certificates, research, and registries [[7]](#ref-7) [[8]](#ref-8). | **E small on purpose.** E no fit replace full records or specialty documents, and gaps for secondary use need extensions [[7]](#ref-7). |
| **Strong backing** from governments, di EU, di G7, WHO, and standards bodies. | **Adoption no balance.** Plenty countries and vendors still dey pilot, and patient awareness low. |


## Plans and future directions

- **EU, 2029:** patient summary and ePrescription exchange go dey work for all EU Member States under di EHDS [[23]](#ref-23) [[28]](#ref-28).
- **EU, 2031:** medical images, laboratory results, and discharge reports go join di European EHR exchange format [[28]](#ref-28).
- **MyHealth@EU expansion:** more countries dey join, and new services for laboratory results, discharge reports, and medical images [[2]](#ref-2) [[22]](#ref-22).
- **FHIR IPS STU 2 adoption:** implementers dey move go di Alerts and Patient Story sections, clear empty sections, and SNOMED CT IPS terminology [[9]](#ref-9).
- **Australia:** publication of AU Patient Summary Release 1, wey dem plan for 2026 [[24]](#ref-24).
- **IPS Best Practices Project:** community effort to document lessons wey dem learn, wey work go start for 2026.
- **WHO trust network:** more IPS-based trust domains for verifiable, portable health documents [[14]](#ref-14).
- **SMART Health Links:** dem dey standardise am through HL7, for sharing wey patient dey control [[10]](#ref-10).
- **Latin America and the Caribbean:** wider IPS-LAC exchange through PH4H [[16]](#ref-16).
- **Research and secondary use:** work to extend patient summaries for clinical research and AI, while dem keep di core small [[7]](#ref-7).


## Glossary

| Term | Meaning |
|---|---|
| **IPS** | International Patient Summary |
| **FHIR** | Fast Healthcare Interoperability Resources, HL7 modern API-based standard |
| **CDA** | Clinical Document Architecture, HL7 XML document standard |
| **IG** | Implementation Guide, set of profiles and rules for how to apply standard |
| **Profile** | Constrained version of FHIR resource for one specific use |
| **SNOMED CT** | Systematized Nomenclature of Medicine – Clinical Terms |
| **LOINC** | Logical Observation Identifiers Names and Codes |
| **SMART Health Links** | Standard for sharing health data through link or QR code |
| **JIC** | Joint Initiative Council for Global Health Informatics Standardization |


## Learn more

- HL7 FHIR IPS Implementation Guide: <https://hl7.org/fhir/uv/ips/>
- IPS continuous build: <https://build.fhir.org/ig/HL7/fhir-ips/>
- International Patient Summary project site: <https://international-patient-summary.net/>
- ISO 27269 (Health informatics — International patient summary): <https://www.iso.org/standard/79491.html>
- SNOMED CT IPS Terminology: <https://www.snomed.org/international-patient-summary-terminology>
- SMART Health Links: <https://docs.smarthealthit.org/smart-health-links/>


## Resources

Dis links cover sources, specifications, software, projects, videos, books, and research about di IPS. Dem check most of dem when dem write dis page. Some publisher sites dey block automated checks, and dem mark dem *(not checked)*.

### Official specifications and standards

- [HL7 FHIR IPS Implementation Guide, current published version](https://hl7.org/fhir/uv/ips/) na di authoritative FHIR specification.
- [HL7 FHIR IPS Implementation Guide, STU 2](https://hl7.org/fhir/uv/ips/STU2/)
- [HL7 FHIR IPS Implementation Guide, STU 1.1](https://hl7.org/fhir/uv/ips/STU1.1/)
- [HL7 FHIR IPS publication history](https://www.hl7.org/fhir/uv/ips/history.html) list every version wey dem publish.
- [HL7 FHIR IPS continuous build](https://build.fhir.org/ig/HL7/fhir-ips/) na di latest work wey dey go on wey dem never ballot.
- [Structure of the International Patient Summary](https://hl7.org/fhir/uv/ips/en/Structure-of-the-International-Patient-Summary.html) explain di sections and profiles.
- [IPS design conventions](https://build.fhir.org/ig/HL7/fhir-ips/en/Design-Conventions.html) cover must-support, absent data, and narrative.
- [IPS generation and data inclusion](https://build.fhir.org/ig/HL7/fhir-ips/en/Generation-and-Data-Inclusion.html) cover `$summary` and how to select content.
- [HL7 CDA IPS Implementation Guide, continuous build](https://build.fhir.org/ig/HL7/CDA-IPS/)
- [HL7 CDA IPS product brief](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=483)
- [ISO 27269, Health informatics — International patient summary](https://www.iso.org/standard/79491.html) *(not checked)*
- [ISO/TC 215 Health informatics committee](https://www.iso.org/committee/54960.html) *(not checked)*
- [IHE FHIR International Patient Summary profile (FIIO)](https://profiles.ihe.net/PCC/FIIO/volume-1.html)
- [IHE PCC International Patient Summary supplement, 2020 (PDF)](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS_Rev1-0_PC_2020-03-17.pdf)
- [HL7 SMART Health Cards and Links Implementation Guide](https://hl7.org/fhir/uv/smart-health-cards-and-links/)
- [SMART Health Links documentation](https://docs.smarthealthit.org/smart-health-links/)
- [HL7 FHIR International Patient Access (IPA)](https://hl7.org/fhir/uv/ipa/) na sister specification for patient API access.
- [HL7 FHIR R4 base specification](https://hl7.org/fhir/R4/), wey di IPS build on.

### Source repositories

- [HL7/fhir-ips](https://github.com/HL7/fhir-ips) get di FHIR IPS IG source for FHIR Shorthand.
- [HL7/cda-ips](https://github.com/HL7/cda-ips) get di CDA IPS IG source.
- [hl7-eu/eps](https://github.com/hl7-eu/eps) get di HL7 Europe Patient Summary source.
- [hl7ch/ch-ips](https://github.com/hl7ch/ch-ips) get di Swiss IPS, with viewer and generator wey dem still dey develop.
- [GitHub topic: international-patient-summary](https://github.com/topics/international-patient-summary) list community repositories.

### National and regional adaptations

- [HL7 Europe Patient Summary (EPS), continuous build](https://build.fhir.org/ig/hl7-eu/eps/)
- [AU Patient Summary (Australia), continuous build](https://build.fhir.org/ig/hl7au/au-fhir-ps/)
- [Trillium II IPS structure (HL7 Europe)](https://hl7.eu/fhir/build/trillium2/site/ipsStructure.html) come from di EU–US project wey help start di IPS.
- [eHealth Suisse](https://www.ehealthsuisse.ch/) na Switzerland competence centre for digital health and e IPS adoption.
- [MyHealth@EU, cross-border digital health services](https://health.ec.europa.eu/ehealth-digital-health-and-care/electronic-cross-border-health-services_en)
- [Xt-EHR Joint Action](https://www.xt-ehr.eu/) dey prepare di European Health Data Space formats, including di patient summary.

### Software and tools

- [IPS Viewer](https://www.ipsviewer.com) ([source: jddamore/IPSviewer](https://github.com/jddamore/IPSviewer)) na open-source, browser-based IPS viewer.
- [uwcirg/shl-ips-viewer](https://github.com/uwcirg/shl-ips-viewer) dey view IPS wey dem share through SMART Health Link.
- [smart-on-fhir/smart-health-links](https://github.com/smart-on-fhir/smart-health-links) na di reference implementation of SMART Health Links.
- [HAPI FHIR IPS generator](https://hapifhir.io/hapi-fhir/docs/server_ips/introduction.html) ([source: hapifhir/hapi-fhir](https://github.com/hapifhir/hapi-fhir)) na open-source Java server module wey implement `$summary`.
- [HAPI FHIR JPA server IPS documentation](https://hapifhir.io/hapi-fhir/docs/server_jpa/ips.html)
- [Inferno IPS Test Kit](https://inferno.healthit.gov/test-kits/ips) ([source: inferno-framework/ips-test-kit](https://github.com/inferno-framework/ips-test-kit)) na open-source conformance test kit.
- [FHIR Validator](https://validator.fhir.org/) dey validate IPS bundles against di IG profiles.
- [Simplifier: hl7.fhir.uv.ips package](https://simplifier.net/packages/hl7.fhir.uv.ips) get di package, profiles, and examples.
- [FHIR package registry](https://registry.fhir.org/)
- [FHIR Shorthand (FSH) School](https://fshschool.org/) dey teach di language wey dem write di IPS IG with.
- [CommonHealth](https://www.commonhealth.org/) na patient app wey dey generate IPS and share am through SMART Health Links.
- [WHO SMART Trust](https://github.com/WorldHealthOrganization/smart-trust) na di trust framework for di WHO Global Digital Health Certification Network.

### Organisations and projects

- [International Patient Summary project site](https://international-patient-summary.net/) get news, adoption reports, and education.
- [IPS for health IT developers](https://international-patient-summary.net/health-it-developer/)
- [HL7 International](https://www.hl7.org/)
- [IHE International](https://www.ihe.net/)
- [SNOMED International](https://www.snomed.org/)
- [SNOMED CT IPS Terminology](https://www.snomed.org/international-patient-summary-terminology) na free subset for IPS use.
- [LOINC](https://loinc.org/) *(not checked)*
- [Joint Initiative Council for Global Health Informatics Standardization (JIC)](http://www.jointinitiativecouncil.org/)
- [Global Digital Health Partnership (GDHP)](https://gdhp.health/)
- [WHO SMART Guidelines](https://smart.who.int/)
- [WHO Global Digital Health Certification Network](https://www.who.int/initiatives/global-digital-health-certification-network)

### Community and events

- [chat.fhir.org](https://chat.fhir.org/) na di FHIR community chat, wey get active IPS stream.
- [HL7 FHIR Connectathons](https://www.hl7.org/events/fhir-connectathon/)
- [IHE Connectathons](https://www.ihe.net/participate/connectathon/)

### Videos

- [HIMSS20: IPS for computable care guidelines in 200 seconds or less (IHE International, YouTube)](https://www.youtube.com/watch?v=xjEzGM8kBPw)
- [IHE International YouTube channel](https://www.youtube.com/@IHEIntl) get Connectathon panels and IPS sessions.
- [IPS project site news](https://international-patient-summary.net/) link go plenty recorded webinars, including:
  - the IPS panel at the IHE North America Connectathon, 2024
  - the IPS session at FHIR DevDays 2023
  - Grahame Grieve on IPS and IPA, IHE Connectathon Montreux 2022
  - the SNOMED CT Expo 2022 keynote
  - Matthew Rahn on IPS in the GDHP
  - the HL7 "Global Passport" cross-border webinar
- [YouTube search: International Patient Summary](https://www.youtube.com/results?search_query=international+patient+summary)

### Books

- Tim Benson and Grahame Grieve, [*Principles of Health Interoperability: FHIR, HL7 and SNOMED CT*](https://link.springer.com/book/10.1007/978-3-030-56883-2), 4th edition, Springer, 2020. E cover FHIR, clinical summary resources, and terminology.

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

Numbers wey dey inside di text, like [1], dey link go di matching entry for under. Dem check di links for November 2026. Laws, adoption figures, and versions dey change, so check di source for di current position.

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

Dem no cite dis sources for up, but na dem be di main references for di standard itself.

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
