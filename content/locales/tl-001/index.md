# International Patient Summary (IPS)

Ang **International Patient Summary (IPS)** ay isang pandaigdigang pamantayan para sa maikling elektronikong sipi mula sa talaan ng kalusugan. Naglalaman ito ng mga batayang klinikal na katotohanang kailangan ng isang klinisyan upang magamot nang ligtas ang isang pasyente. Idinisenyo itong maging:

- **Minimal at hindi kumpleto nang sadya.** Isa itong maliit at piniling bahagi ng talaan ng kalusugan, hindi ang buong talaan.
- **Hindi nakatali sa espesyalidad.** Magagamit ito ng sinumang klinisyan, sa anumang larangan.
- **Hindi nakatali sa kondisyon.** Hindi ito nakatali sa partikular na sakit o daan ng pangangalaga.
- **Maipapatupad at pandaigdig.** Nakabatay ito sa mga pandaigdigang pamantayan at terminolohiya, kaya magagamit ito sa iba't ibang bansa, wika, at sistemang IT.

Sa madaling salita, sinasagot ng IPS ang isang tanong ng klinisyang hindi pa nakikilala ang pasyente: *"Ano ang kailangan kong malaman ngayon upang maalagaan nang ligtas ang taong ito?"*


## Bakit umiiral ang IPS

Karaniwang nakakulong ang impormasyon sa kalusugan sa loob ng lokal na electronic health record (EHR), pambansang sistema, o produkto ng isang vendor. Kapag naghanap ng pangangalaga ang pasyente sa ibang lugar, tulad ng ibang ospital, rehiyon, o bansa, madalas na walang access ang gumagamot na klinisyan sa kasaysayang iyon. Binibigyan ng IPS ang lahat ng iisang karaniwan at madadalang format ng buod.

### Mga pangunahing gamit

| Gamit | Paglalarawan |
|---|---|
| **Hindi nakaplano at emerhensiyang pangangalaga** | Nagkakasakit o nasusugatan ang isang pasyente malayo sa tahanan, at hindi maabot ng mga lokal na klinisyan ang EHR niya sa sariling bansa. Ito ang orihinal at pangunahing gamit. |
| **Pangangalagang tumatawid ng hangganan** | Ang mga manlalakbay, migrante, manggagawang tumatawid ng hangganan, at mga refugee ay may dalang buod na mababasa ng mga klinisyan sa ibang bansa. |
| **Nakaplanong pangangalaga at paglipat** | Mga referral, konsultasyon sa espesyalista, pagpasok sa ospital, paglabas, at paglilipat sa pagitan ng mga tagapagbigay ng serbisyo. |
| **Medical tourism at paglipat-lipat** | Mga pasyenteng pumipiling magpagamot sa ibang hurisdiksyon. |
| **Pagpapalakas sa pasyente** | Hawak, tinitingnan, at ibinabahagi ng mga pasyente ang sarili nilang buod mula sa app sa telepono, portal, o naka-print na kopya. |


## Kailan gagamitin ang IPS

Gamitin ang IPS kapag may taong hindi nakakakilala sa pasyente na mabilis na nangangailangan ng mapagkakatiwalaang kuha ng kasalukuyang kalagayan, at kapag hindi magkabahagi ang nagpapadala at tumatanggap sa isang sistemang IT.

### Mga angkop na gamit

- **Emerhensiya at hindi nakaplanong pangangalaga**, lalo na malayo sa tahanan o sa kabilang panig ng hangganan. Ito ang gamit na pinagdisenyuhan ng IPS.
- **Palitang tumatawid ng hangganan sa pagitan ng mga pambansang sistema**, gaya ng serbisyong MyHealth@EU ng EU [[1]](#ref-1) [[2]](#ref-2).
- **Mga buod na hawak ng pasyente** na dala ng mga manlalakbay, migrante, refugee, peregrino, o taong may masalimuot na kondisyon sa telepono o papel [[3]](#ref-3).
- **Pambansa o panrehiyong buod ng pasyente.** Maraming bansa ang gumagawa ng sarili nilang buod bilang profile ng IPS, upang mapagpalitan din ito sa antas na internasyonal [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
- **Karaniwang batayan para sa mga paglipat sa pangangalaga,** gaya ng mga referral, pagpasok sa ospital, at paglabas, kapag walang mas mayamang espesyalisadong dokumento.
- **Panimulang punto para sa iba pang dataset,** gaya ng mga sertipiko ng bakuna, datos ng pananaliksik, o rehistrong nangangailangan ng parehong batayang katotohanan [[7]](#ref-7) [[8]](#ref-8).

### Mga hindi angkop na gamit

- **Ang buong talaang medikal.** Sadyang minimal ang IPS. Gumamit ng buong export ng talaan o espesyalisadong dokumento kapag mahalaga ang detalye.
- **Mga dokumentong partikular sa espesyalidad,** gaya ng buod ng gamutan sa oncology, talaan ng pagbubuntis, o detalyadong buod ng paglabas sa ospital. May sarili silang pamantayan, na maaaring maglaman o tumukoy sa nilalaman ng IPS.
- **Mga klinikal na daloy ng trabaho sa real time sa loob ng iisang organisasyon.** Sa loob ng iisang EHR, i-query ang live na datos sa halip na buod na snapshot.
- **Mga talaang legal, pagsingil, o seguro.** Klinikal na buod ang IPS, hindi administratibong talaan o talaan ng claim.
- **Mga desisyong nangangailangan ng garantisadong pagkakumpleto.** Kasing-kumpleto at kasingbago lang ng pinagmulan at may-akda nito ang isang IPS. Laging kumpirmahin ang mga kritikal na katotohanan sa pasyente kapag posible.


## Ano ang laman ng isang IPS

May dalawang patong ang isang dokumentong IPS:

1. **Isang header na nagtatala kung sino, ano, at kailan:**
   - **Pasyente:** pagkakakilanlan, demograpiko, at mga contact.
   - **May-akda:** ang tao, organisasyon, o sistemang gumawa ng buod.
   - **Tagapag-ingat (custodian):** ang organisasyong responsable sa pagpapanatili nito.
   - **Tagapagpatunay (attester):** sino ang nagberipika nito, kung mayroon.
   - **Petsa at oras:** kung kailan ito nilikha.

2. **Isang klinikal na katawan na nakaayos sa mga seksyon.** Ang mga seksyon ay kinakailangan, inirerekomenda, o opsyonal.

| Seksyon | Katayuan | Karaniwang nilalaman |
|---|---|---|
| **Medication Summary** (buod ng gamot) | Kinakailangan | Kasalukuyan at may kaugnayang nakaraang gamot, reseta, dosis |
| **Allergies and Intolerances** (alerdyi at di-pagtanggap) | Kinakailangan | Alerdyi sa gamot, pagkain, at kapaligiran; mga reaksyon at tindi |
| **Problem List** (listahan ng problema) | Kinakailangan | Mga aktibong diyagnosis, kondisyon, at klinikal na problema |
| Immunizations (pagbabakuna) | Inirerekomenda | Mga bakunang naibigay, gaya ng tetano, hepatitis B, trangkaso, COVID-19 |
| History of Procedures (kasaysayan ng mga pamamaraan) | Inirerekomenda | Malalaking operasyon at invasive na interbensyon |
| Medical Devices (kagamitang medikal) | Inirerekomenda | Mga implant at kagamitan, gaya ng pacemaker, stent, prostesis |
| Diagnostic Results (resulta ng diyagnostiko) | Inirerekomenda | Mahahalagang resulta ng laboratoryo, ulat ng imaging, patolohiya |
| Vital Signs (mahahalagang senyales) | Opsyonal | Presyon ng dugo, tibok ng puso, timbang, taas, BMI |
| History of Past Illness (kasaysayan ng nakaraang sakit) | Opsyonal | Mga gumaling nang kondisyon at mahahalagang nakaraang problema |
| Functional Status (katayuang pangfunction) | Opsyonal | Mga kapansanan at kakayahang gawin ang pang-araw-araw na gawain |
| Plan of Care (plano ng pangangalaga) | Opsyonal | Mga plano ng pangangalaga at rekomendasyon sa gamutan |
| Social History (kasaysayang panlipunan) | Opsyonal | Tabako, alak, at iba pang kaugnay na salik sa pamumuhay |
| History of Pregnancy (kasaysayan ng pagbubuntis) | Opsyonal | Kasalukuyang kalagayan ng pagbubuntis at kasaysayan ng mga pagbubuntis |
| Advance Directives (paunang direktiba) | Opsyonal | Living will, kagustuhan sa resuscitation, pahayag ng pahintulot |
| Alerts (mga babala) | Opsyonal | Mga babalang kritikal sa kaligtasan na hindi bagay sa ibang seksyon (idinagdag sa FHIR IPS STU 2) |
| Patient Story (kuwento ng pasyente) | Opsyonal | Kung ano ang mahalaga sa pasyente: mga pangangailangan, lakas, pagpapahalaga, alalahanin, at kagustuhan, sa sariling salita ng pasyente (idinagdag sa FHIR IPS STU 2) |

**Mahalaga ang tahasang pagsasabi ng "wala".** Hindi sinasabi ng walang lamang seksyon sa klinisyan kung walang alerdyi ang pasyente o kung wala lang nagtala ng mga ito. Kaya inaasahan ng IPS ang mga tahasang pahayag gaya ng *"walang kilalang alerdyi"*, *"walang kasalukuyang gamot"*, o *"hindi available ang impormasyon"*.


## Ang mga pamantayan sa likod ng IPS

Ang IPS ay pamilya ng magkakaugnay na pamantayan. Tinutukoy ng mga pamantayang ISO at CEN *kung ano* ang dapat laman ng buod ng pasyente. Tinutukoy ng mga gabay sa implementasyon ng HL7 *kung paano* ito i-e-encode.

| Pamantayan | Katawan | Papel |
|---|---|---|
| **EN 17269** | CEN (European Committee for Standardization) | Ang abstraktong dataset ng IPS, inilathala noong 2019 |
| **ISO 27269** | ISO (International Organization for Standardization) | Ang internasyonal na bersyon ng abstraktong dataset ng IPS, inilathala noong 2021 |
| **CEN/TS 17288** | CEN | Gabay sa pagpapatupad ng IPS para sa paggamit na tumatawid ng hangganan |
| **HL7 FHIR IPS Implementation Guide** | HL7 International | Ang makabagong encoding na magaan sa API at pangunahing format ng implementasyon. Idinagdag ng STU 2 (2.0.x) ang mga seksyong Alerts at Patient Story, pinayagan ang walang lamang seksyon, nilinaw ang `$summary`, at lumipat sa terminolohiyang SNOMED CT IPS [[9]](#ref-9). |
| **HL7 CDA IPS Implementation Guide** | HL7 International | Ang encoding ng dokumento na nakabatay sa XML, karaniwan sa mga umiiral na pambansa at Europeong imprastraktura |

Pinag-uugnay ang gawain sa pamamagitan ng **Joint Initiative Council for Global Health Informatics Standardization (JIC)**. Pinagsasama-sama ng JIC ang ISO, CEN, HL7, SNOMED International, IHE, at iba pa. Nagmula ang IPS sa isang pakikipagtulungan ng EU at US noong 2016 tungkol sa datos ng kalusugan na tumatawid ng hangganan at ngayon ay sinusuportahan ng mga pamahalaan at programa ng digital health sa buong mundo.


## Paano ini-encode ang IPS gamit ang HL7 FHIR

Sa FHIR, ang isang IPS ay iisang **`Bundle`** na may uring `document`:

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

Mahahalagang teknikal na punto:

- **May salaysay na nababasa ng tao ang bawat seksyon.** Mababasa ng klinisyan ang IPS sa karaniwang browser, kahit walang software ng FHIR.
- **May mga naka-code ding entry ang bawat seksyon**, na mga nakaistrukturang resource ng FHIR na maaaring iproseso, isalin, at pagkasunduin ng software.
- **Nililimitahan ng mga profile ang mga batayang resource ng FHIR.** Halimbawa, tinutukoy ng *Patient (IPS)* at *AllergyIntolerance (IPS)* ang pinakamababang datos at ang mga elementong "must support".
- **Ang operasyong `$summary`** (`GET [base]/Patient/[id]/$summary`) ay humihiling sa isang FHIR server na lumikha ng IPS ng isang pasyente kapag hiniling.
- **Maaaring lagdaan ang IPS at buo na ito sa sarili.** Ang kumpletong dokumento ay maaaring itabi, ipadala, lagdaan, at i-verify bilang iisang yunit.


## Mga terminolohiya

Ginagawang nababasa ng mga karaniwang code system ang isang IPS sa iba't ibang wika at bansa:

| Terminolohiya | Gamit |
|---|---|
| **SNOMED CT** | Mga problema, alerdyi, pamamaraan, kagamitan, klinikal na natuklasan. May libreng subset, ang **SNOMED CT IPS Terminology**, na magagamit para sa IPS, kahit sa mga bansang hindi kasapi. |
| **LOINC** | Mga uri ng dokumento at seksyon, pagsusuri sa laboratoryo, mahahalagang senyales |
| **ATC** at iba pang code system ng gamot | Mga produktong panggamot at aktibong sangkap |
| **UCUM** | Mga yunit ng sukat |
| **Mga value set ng ISO at HL7** | Mga bansa, wika, administratibong kasarian, dahilan ng kawalan at di-alam na datos |

Dahil naka-code ang mga entry, maipapakita ng tumatanggap na sistema ang isang IPS na nakasulat sa Portuges na may mga label sa Ingles. Pareho pa rin ang naka-code na kahulugan.


## Paano ginagamit ng mga pasyente at klinisyan ang IPS

Maaaring likhain ang IPS ng isang EHR, pambansang serbisyo ng talaan ng kalusugan, portal ng pasyente, o personal na app pangkalusugan. Maaari itong ihatid sa maraming paraan:

- **Sistema sa sistema:** sa pamamagitan ng FHIR REST API, mga pambansang imprastraktura, o mga gateway na tumatawid ng hangganan, tulad ng network na MyHealth@EU ng EU.
- **Pagbabahaging pinagitnaan ng pasyente:** hawak ng pasyente ang buod sa wallet o app pangkalusugan at ibinabahagi ito kapag hiniling.
- **SMART Health Links:** isang QR code o URL na nagbibigay sa klinisyan ng may takdang oras, at opsyonal na may passcode, na access sa naka-encrypt na IPS. Mabubuksan ito ng klinisyan sa karaniwang web browser.
- **Papel o PDF:** isang naka-print na salaysay bilang pang-alalay kapag walang ibang gumagana.

Pinapayagan ng mga app tulad ng **CommonHealth** ang mga pasyente na tipunin ang kanilang mga talaan at magbahagi ng IPS sa pamamagitan ng SMART Health Links.

Isang karaniwang senaryo ng emerhensiya:

1. Natumba ang isang manlalakbay sa ibang bansa.
2. Ipinakita ng manlalakbay, o ng kasama, ang isang QR code mula sa telepono.
3. Ini-scan ito ng doktor ng emergency room at sa loob ng ilang segundo ay nakikita ang mga gamot, alerdyi, at aktibong problema ng manlalakbay.
4. Naiiwasan ng doktor ang mapanganib na interaksyon ng gamot at nagagamot nang ligtas ang pasyente.


## Mga prinsipyo at pagpili sa disenyo

- **Kaligtasan muna.** Pinipili ang nilalaman batay sa klinikal na kaugnayan, hindi sa pagkakumpleto.
- **Pandaigdig bilang default, lokal sa pamamagitan ng mga extension.** Lumilikha ang mga bansa ng mga pambansang profile, tulad ng mga bersyon ng EU, Australia, o Canada, na nagdaragdag ng mga kinakailangan nang hindi sinisira ang internasyonal na ubod.
- **Nababasa ng tao at napoproseso ng makina.** Magkasamang umiiral ang salaysay at naka-code na datos.
- **Libre at bukas.** Malayang makukuha ang mga espesipikasyon ng HL7 IPS at ang subset ng SNOMED CT para sa IPS upang bawasan ang mga hadlang sa pag-aampon.
- **Privacy at pahintulot.** Pinamamahalaan ng lokal na batas at pahintulot ng pasyente ang access. Pinananatili ng mga mekanismo tulad ng SMART Health Links ang kontrol sa pasyente.


## Paano gamitin ang IPS

### Para sa mga pasyente

1. **Humingi ng isa.** Itanong sa klinika, ospital, pambansang portal pangkalusugan, o app pangkalusugan mo kung makakalikha sila ng IPS o ng pambansang buod ng pasyente na nakabatay dito.
2. **Suriin ito.** Basahin ito habang malusog ka. Iulat ang anumang mali o kulang, lalo na ang mga alerdyi at gamot.
3. **Dalhin ito.** Itabi ito sa app pangkalusugan o wallet, bilang QR code ng SMART Health Link, o bilang printout kasama ng iyong mga dokumento sa paglalakbay.
4. **Panatilihin itong napapanahon.** Kumuha ng bago pagkatapos ng bagong diyagnosis, bagong pangmatagalang gamot, operasyon, o implant.
5. **Ibahagi ito nang sadya.** Ipakita ito sa klinisyang gumagamot sa iyo. Maaaring mag-expire ang SMART Health Link at maaaring humingi ng passcode, kaya ikaw ang kumokontrol kung sino ang makakakita at hanggang kailan [[10]](#ref-10).

### Para sa mga klinisyan

1. **Suriin muna ang header.** Sino ang sumulat, kailan, at kung may nagberipika. Ang luma o hindi naberipikang buod ay nangangailangan ng higit na pag-iingat.
2. **Basahin muna ang mga kinakailangang seksyon:** alerdyi, gamot, at problema.
3. **Ibahin ang "walang kilala" sa "hindi naitala".** Ang "walang kilalang alerdyi" ay isang klinikal na pahayag. Hindi ito ang walang lamang seksyon o ang "hindi alam".
4. **Kumpirmahin ang mga kritikal na katotohanan** sa pasyente o sa kasama niya hangga't kaya mo.
5. **Gamitin ang naka-code na datos.** Kung sinusuportahan ng sistema mo, pinapayagan ng mga naka-code na entry na maipakita ang buod sa wika mo at masuri ito laban sa mga patakaran ng interaksyon ng gamot at alerdyi.
6. **Huwag ipalagay na kumpleto ito.** Ang IPS ay lambat pangkaligtasan, hindi buong kasaysayan.

### Para sa mga nagpapatupad

1. **Piliin ang espesipikasyon.** Gamitin ang kasalukuyang HL7 FHIR IPS Implementation Guide (STU 2), o ang pambansang profile ng bansa mo. Para sa mga imprastrakturang nakabatay sa CDA, gamitin ang gabay ng CDA IPS [[9]](#ref-9) [[11]](#ref-11).
2. **I-map ang datos mo.** I-map ang lokal na datos sa mga profile ng IPS: `Patient`, `AllergyIntolerance`, `MedicationStatement`, `Condition`, at iba pa. Karamihan ng trabaho ay nasa pag-map na ito.
3. **I-map ang terminolohiya mo.** I-map ang mga lokal na code sa SNOMED CT, LOINC, at mga code system ng gamot. Libre gamitin ang SNOMED CT IPS Terminology para sa layuning ito [[12]](#ref-12).
4. **Likhain ang dokumento.** Suportahan ang operasyong `$summary`, o buuin mismo ang `Bundle` at `Composition`. Isama ang nababasang salaysay para sa bawat seksyon, at tahasang pahayag na "walang kilala" o "hindi available".
5. **I-validate ito.** Suriin ang bawat nalikhang dokumento gamit ang FHIR Validator at isang test kit ng conformance, gaya ng Inferno IPS Test Kit [[13]](#ref-13).
6. **Lagdaan at ibahagi ito.** Magpasya kung paano nilalagdaan, iniimbak, at ipinapadala ang mga dokumento: API, rehistro ng dokumento, gateway na tumatawid ng hangganan, o SMART Health Link.
7. **Gamitin ito nang ligtas.** Bilang tumatanggap, ipakita ang salaysay kahit hindi mo maproseso ang lahat ng naka-code na entry, panatilihing nakikita ang pinagmulan at may-akda, at huwag kailanman tahimik na pagsamahin ang natanggap na datos sa lokal na talaan.
8. **Subukan kasama ang iba.** Subukan ang interoperability sa iba pang vendor at bansa sa mga Connectathon ng IHE at HL7 bago mag-live.

### Para sa mga pamahalaan at organisasyong pangkalusugan

1. **Mag-ampon ng pambansang profile** na nakabatay sa IPS sa halip na hiwalay na format, upang ang pambansang buod ay internasyonal bilang default [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
2. **Ayusin ang pamamahala:** sino ang maaaring lumikha, mag-update, at magpatunay ng buod, at sino ang mananagot sa katumpakan nito.
3. **Ayusin ang paglilisensya ng terminolohiya:** pagiging kasapi sa SNOMED CT, o paggamit ng libreng subset ng IPS.
4. **Ayusin ang pagkakakilanlan, pahintulot, at tiwala:** kung paano kinikilala ang mga pasyente, paano itinatala ang pahintulot, at aling balangkas ng tiwala, gaya ng MyHealth@EU o ng Global Digital Health Certification Network ng WHO, ang gagamitin upang i-verify ang mga dokumento [[1]](#ref-1) [[14]](#ref-14).
5. **Ilathala ang nabuo ninyo** sa IPS Implementation Registry, upang matuto ang iba mula rito [[15]](#ref-15).


## Pagsasama ng IPS sa mga sistemang pangkalusugan

Bihirang hiwalay na sistema ang IPS. Isa itong tanaw sa datos na nasa mga EHR na, palitan ng impormasyong pangkalusugan, pambansang talaan, at personal na app pangkalusugan.

| Huwaran ng integrasyon | Paano gumagana | Mga halimbawa |
|---|---|---|
| **Nililikha ng EHR** | Binubuo ng EHR ang IPS mula sa sarili nitong datos kapag hiniling, madalas sa pamamagitan ng operasyong `$summary` ng FHIR. | Mga vendor ng EHR at FHIR server tulad ng HAPI FHIR, na may module na tagalikha ng IPS |
| **Pambansa o panrehiyong talaan** | Nag-iimbak ang isang pambansang serbisyo ng buod ng pasyente ng profile ng IPS at ginagawa itong available sa mga awtorisadong tagapagbigay. | PS-CA ng Canada, AU Patient Summary ng Australia, electronic patient record ng Switzerland na may CH IPS [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6) |
| **Gateway na tumatawid ng hangganan** | May pambansang contact point ang bawat bansa. Ginagawa nitong napagkasunduang format ng palitan ang buod ng bansang pinagmulan, ipinapadala ito sa kabila ng hangganan, at ipinapakita ito ng tumatanggap na bansa sa lokal na wika. | MyHealth@EU National Contact Points for eHealth [[1]](#ref-1) [[2]](#ref-2) |
| **Panrehiyong network ng palitan** | Nagpapalitan ng mga dokumentong IPS ang mga ministri ng kalusugan sa pamamagitan ng mga pambansang FHIR server sa ilalim ng karaniwang panrehiyong gabay. | IPS-LAC ng RACSEL at Pan American Highway for Digital Health (PH4H) sa Latin America at Caribbean [[16]](#ref-16) |
| **Pinagitnaan ng pasyente** | Hawak ng pasyente ang IPS sa app o wallet at ibinabahagi ito gamit ang QR code o SMART Health Link. | CommonHealth; ang gawaing IPS ng trust network ng WHO para sa pilgrimage [[10]](#ref-10) [[14]](#ref-14) |
| **Access na nakabatay sa API** | Kinukuha ng mga app ang IPS ng awtorisadong pasyente sa pamamagitan ng FHIR API. | International Patient Access (IPA); mga network sa US tulad ng Flexpa, na nagdagdag ng suporta sa IPS sa ilalim ng CMS Interoperability Framework [[17]](#ref-17) [[18]](#ref-18) |

Mga punto ng integrasyon na dapat planuhin:

- **Pagbabahagi ng dokumento:** iniimbak at hinahanap ng mga profile ng IHE tulad ng MHD (FHIR) at XDS (mga rehistro ng dokumento) ang mga dokumentong IPS. Nagdaragdag ang mga profile ng nilalaman ng IHE IPS ng mga patakaran sa conformance at pagsubok [[11]](#ref-11).
- **Pagkakakilanlan ng pasyente:** itinutugma ng IHE PIXm at PDQm, o ng pambansang identifier, ang pasyente sa iba't ibang sistema.
- **Umiiral na mga dokumento:** maraming sistema ang gumagawa na ng CDA, C-CDA, o pambansang buod. Karaniwang mas madali ang pag-map ng mga ito sa IPS kaysa magsimulang muli, ngunit suriin ang mga pagkakaiba sa cardinality, value set, at code system.
- **Mga pambansang profile:** ang pambansang ubod, gaya ng US Core, AU Core, CH Core, o JP Core, ay maaaring magkaiba sa IPS. Pinagkakasundo ng mga pambansang profile ng buod ng pasyente ang dalawa [[5]](#ref-5) [[6]](#ref-6) [[19]](#ref-19).
- **Pagsasalin at pagpapakita:** dapat ipakita ng mga tumatanggap ang salaysay at isalin ang mga naka-code na entry gamit ang mga display name ng mga code sa wika ng tumatanggap.
- **Seguridad:** gumamit ng TLS, mga nilagdaang dokumento kung kinakailangan, audit logging (halimbawa IHE ATNA o BALP), at access control na nakatali sa pahintulot.


## Kasalukuyang pag-aampon

Lumipat na ang IPS mula sa mga pilot patungo sa mga pambansa at panrehiyong programa. Mabilis magbago ang katayuan, kaya suriin ang mga naka-link na pinagmulan para sa pinakabagong kalagayan.

- **IPS Implementation Registry.** Nagpapanatili ang komunidad ng IPS ng pampublikong rehistro ng mga implementasyon. Noong kalagitnaan ng 2026, may 34 na entry ito, mula sa proyektong IPS-LAC ng Argentina na pinagitnaan ng mga tagapagbigay hanggang sa Better Health Program ng Vietnam [[15]](#ref-15).
- **Ecosystem ng FHIR.** Sa survey na State of FHIR 2025 ng HL7 International at Firely, 42 respondente ang nagsabing ang IPS ang batayan ng kanilang mga pambansang espesipikasyon ng FHIR, higit sa alinmang ibang internasyonal na gabay [[20]](#ref-20).
- **Pananaliksik.** Isang pag-aaral noong 2025 tungkol sa pag-aampon ng IPS ang nag-interbyu sa mga stakeholder, na tumukoy sa mas mahusay na kalidad ng pangangalaga at kaligtasan ng pasyente bilang pangunahing benepisyo [[21]](#ref-21).

| Bansa o rehiyon | Katayuan |
|---|---|
| **European Union at EEA** | Nagpapalitan ang MyHealth@EU ng mga buod ng pasyente at e-reseta sa pagitan ng mga bansa. Iniulat ng presentasyon ng European Commission noong 2026 ang 17 Miyembrong Estado at ang Norway na gumagana na, at karamihan sa iba ay nagpaplanong sumali [[2]](#ref-2) [[22]](#ref-22). Ginagawang sapilitan ng Regulasyong EHDS ang palitan ng mga buod ng pasyente pagsapit ng 2029 [[23]](#ref-23). |
| **Canada** | Ang pan-Canadian Patient Summary (PS-CA), na inaprubahan ng Canada Health Infoway noong Oktubre 2022, ay nakabatay sa IPS na may mga pag-aangkop ng Canada [[4]](#ref-4). |
| **Australia** | Ang AU Patient Summary, na nakabatay sa IPS at AU Core, ay binubuo ng HL7 Australia sa pamamagitan ng programang Sparked [[5]](#ref-5) [[24]](#ref-24). |
| **Switzerland** | Ang CH IPS 2.0.0 (pansubok na paggamit) mula sa HL7 Switzerland ay nakabatay sa IPS at CH Core. Isang hiwalay na profile ang nagdaragdag ng kailangan ng electronic patient record ng Switzerland [[6]](#ref-6). |
| **Estados Unidos** | Walang pederal na utos para sa IPS. Gumagamit ang US ng US Core at USCDI. Nakikilahok ang mga pederal na ahensya sa internasyonal na gawain sa IPS, at ilang network ang kusang sumusuporta sa IPS [[18]](#ref-18). |
| **Latin America at Caribbean** | Gumagamit ang mga ministri ng kalusugan ng RACSEL ng panrehiyong gabay na IPS-LAC. Noong 2023, 16 na bansa ang nagpalitan ng mga dokumentong IPS-LAC sa isang connectathon sa São Paulo [[16]](#ref-16). |
| **Japan** | Bumuo at nag-validate ang mga mananaliksik ng isang aplikasyon ng buod ng pasyente na nakabatay sa IPS para sa mga karaniwang gamit sa Japan, gamit ang JP Core [[19]](#ref-19). |
| **Taiwan at Pilipinas** | Inilalarawan ng ulat sa implementasyon noong 2025 ang isang personal na health record na tumatawid ng hangganan na gumagamit ng FHIR at nakahanay sa IPS [[25]](#ref-25). |
| **G7** | Noong 2021, nangako ang mga ministro ng kalusugan ng G7 na kumilos tungo sa IPS at naglathala ng roadmap ng IPS [[26]](#ref-26). |
| **WHO** | Kasama sa Global Digital Health Certification Network ng WHO ang mga trust domain na nakabatay sa IPS, tulad ng nabeberipikang IPS para sa pilgrimage [[14]](#ref-14). |


## Mga batas, regulasyon, at patakaran ayon sa bansa at rehiyon

Pamantayan ang IPS, hindi batas. Ang mga batas ang nagpapasya kung kailangang magpalitan ng buod ng pasyente ang isang bansa, sa anong format, at sa ilalim ng anong mga patakaran sa privacy. Buod ito, hindi legal na payo. Laging suriin ang kasalukuyang teksto ng batas.

| Hurisdiksyon | Batas o patakaran | Ano ang ibig sabihin para sa IPS |
|---|---|---|
| **European Union** | **Regulasyon sa European Health Data Space (EHDS), (EU) 2025/327.** Inilathala noong 5 Marso 2025; ipinatupad noong 26 Marso 2025 [[23]](#ref-23) [[27]](#ref-27). | Ang mga buod ng pasyente ay isang "prayoridad na kategorya". Dapat gumana ang palitan sa European electronic health record exchange format sa bawat Miyembrong Estado pagsapit ng 2029. Susunod ang mga medikal na larawan, resulta ng pagsusuri, at ulat ng paglabas pagsapit ng 2031 [[28]](#ref-28). Nakabatay sa HL7 IPS ang format para sa mga buod ng pasyente. |
| **European Union** | **Direktiba 2011/24/EU** tungkol sa paggamit ng mga karapatan ng pasyente sa pangangalagang pangkalusugang tumatawid ng hangganan [[29]](#ref-29). | Lumikha ng eHealth Network, na nagkasundo sa mga alituntunin ng buod ng pasyente sa likod ng MyHealth@EU. |
| **European Union** | **General Data Protection Regulation (GDPR), (EU) 2016/679** [[30]](#ref-30). | Espesyal na kategorya ang datos ng kalusugan. Nangangailangan ang bawat palitan ng IPS ng batayang legal at angkop na pananggalang. |
| **Estados Unidos** | **21st Century Cures Act at mga panuntunan laban sa information blocking** [[31]](#ref-31); ang kusang **CMS Interoperability Framework** (2025) [[17]](#ref-17). | Walang batas na nag-uutos ng IPS. Inuutos ng mga batas ang access sa at palitan ng elektronikong impormasyong pangkalusugan, gamit ang US Core at USCDI. Kusang-loob ang suporta sa IPS. |
| **Canada** | Mga batas ng probinsya at teritoryo tungkol sa impormasyong pangkalusugan. Ang pederal na **Connected Care for Canadians Act** (Bill C-72) ay ipinakilala noong 2024 ngunit hindi naipasa bago na-prorogue ang Parlamento noong 2025. | Ang PS-CA ay isang pan-Canadian na espesipikasyon, hindi legal na kinakailangan. Pinangungunahan ng mga probinsya at teritoryo kasama ang Canada Health Infoway ang pag-aampon [[4]](#ref-4). |
| **United Kingdom** | **Data (Use and Access) Act 2025** [[32]](#ref-32). | May kapangyarihang magtakda ng mga pamantayan ng impormasyon para sa IT sa kalusugan at pangangalagang panlipunan ng mga nasa hustong gulang. Nag-host ang UK ng pangako ng G7 sa IPS noong 2021 [[26]](#ref-26). |
| **Australia** | **My Health Records Act 2012** at ang mga susog noong 2025 tungkol sa "pagbabahagi bilang default". | Ang AU Patient Summary ay isang pambansang espesipikasyon na binuo sa pamamagitan ng Sparked [[5]](#ref-5) [[24]](#ref-24). |
| **Switzerland** | **Pederal na Batas ng 19 Hunyo 2015 tungkol sa Electronic Patient Record (EPRA, SR 816.1)**, may bisa mula 15 Abril 2017 [[33]](#ref-33). | Kasama sa CH IPS ang profile para sa mga dokumento sa electronic patient record ng Switzerland [[6]](#ref-6). |
| **Latin America at Caribbean** | Mga panrehiyong kasunduan sa pamamagitan ng RACSEL at PH4H, na may suporta ng Inter-American Development Bank para sa panrehiyong balangkas legal [[16]](#ref-16). | Ang IPS-LAC ang napagkasunduang panrehiyong format para sa palitang tumatawid ng hangganan. |
| **G7** | **Komunike ng mga Ministro ng Kalusugan**, Oxford, Hunyo 2021, at ang **G7 IPS Roadmap**, Disyembre 2021 [[26]](#ref-26) [[34]](#ref-34). | Isang pangakong pampulitika na kumilos tungo sa IPS at access ng pasyente, hindi nagbubuklod na batas. |


## Mga pakinabang at disbentaha

| Mga pakinabang | Mga disbentaha |
|---|---|
| **Mas ligtas na hindi nakaplanong pangangalaga.** Nakikita ng mga klinisyan ang mga alerdyi, gamot, at problema sa loob ng ilang segundo. | **Kasing-husay lang ng pinagmulan nito.** Ang luma o maling datos ng pinagmulan ay nagbibigay ng lumang o maling buod. |
| **Iisang format, buong mundo.** Isang implementasyon ang naglilingkod sa mga pambansa at tumatawid-hangganang pangangailangan. | **Pagkakaiba-iba sa bawat bansa.** Nagdaragdag ng mga patakaran ang mga pambansang profile, kaya ang "balidong IPS" sa isang bansa ay maaaring mangailangan ng trabaho upang tanggapin sa iba. |
| **Nakatayo sa bukas at hinog na mga pamantayan:** ISO, CEN, HL7 FHIR at CDA, SNOMED CT, at LOINC. | **Bigat ng terminolohiya.** Mabigat na trabaho ang pag-map ng mga lokal na code sa SNOMED CT at LOINC, at ang buong SNOMED CT ay nangangailangan ng lisensya bukod sa libreng subset ng IPS. |
| **Nababasa at nakukuwenta.** Salaysay para sa tao, naka-code na datos para sa software at pagsasalin. | **Maaaring hindi magkasundo ang salaysay at naka-code na datos** kung pabaya ang generator, at maaaring ang mali ang pagkatiwalaan ng mga tumatanggap. |
| **Pagpapalakas sa pasyente.** Maaaring hawakan at ibahagi ng mga pasyente ang sarili nilang buod. | **Panganib sa privacy at pahintulot.** Sensitibo ang madadalang buod, at magkakaiba ang mga batas at modelo ng pahintulot sa bawat bansa. |
| **Libreng mga espesipikasyon** at libreng terminolohiya ng IPS ang nagpapababa ng gastos [[12]](#ref-12). | **Madalas na pagbabago ng bersyon.** Magkakasabay na umiiral ang STU 1, STU 1.1, at STU 2, at tumutukoy ang format ng EHDS sa naunang bersyon [[28]](#ref-28). |
| **Magagamit muli** para sa mga sertipiko ng bakuna, pananaliksik, at mga rehistro [[7]](#ref-7) [[8]](#ref-8). | **Sadyang minimal.** Hindi kapalit ng buong talaan o ng mga dokumentong pang-espesyalidad, at nangangailangan ng mga extension ang mga puwang para sa pangalawang gamit [[7]](#ref-7). |
| **Matibay na suporta** mula sa mga pamahalaan, EU, G7, WHO, at mga katawan ng pamantayan. | **Hindi pantay na pag-aampon.** Marami pa ring bansa at vendor ang nagpi-pilot, at mababa ang kamalayan ng mga pasyente. |


## Mga plano at hinaharap na direksyon

- **EU, 2029:** gumagana ang palitan ng buod ng pasyente at e-reseta sa lahat ng Miyembrong Estado ng EU sa ilalim ng EHDS [[23]](#ref-23) [[28]](#ref-28).
- **EU, 2031:** sumasama ang mga medikal na larawan, resulta ng laboratoryo, at ulat ng paglabas sa European electronic health record exchange format [[28]](#ref-28).
- **Pagpapalawak ng MyHealth@EU:** mas maraming bansang sumasali, at mga bagong serbisyo para sa mga resulta ng laboratoryo, ulat ng paglabas, at medikal na larawan [[2]](#ref-2) [[22]](#ref-22).
- **Pag-aampon ng FHIR IPS STU 2:** lilipat ang mga nagpapatupad sa mga seksyong Alerts at Patient Story, tahasang walang lamang seksyon, at terminolohiyang SNOMED CT IPS [[9]](#ref-9).
- **Australia:** paglalathala ng AU Patient Summary Release 1, nakaplano para sa 2026 [[24]](#ref-24).
- **IPS Best Practices Project:** sama-samang pagsisikap ng komunidad na idokumento ang mga natutunan, na magsisimula ang gawain sa 2026.
- **Trust network ng WHO:** mas maraming trust domain na nakabatay sa IPS para sa mga nabeberipika at madadalang dokumentong pangkalusugan [[14]](#ref-14).
- **SMART Health Links:** istandardisa sa pamamagitan ng HL7, para sa pagbabahaging kontrolado ng pasyente [[10]](#ref-10).
- **Latin America at Caribbean:** mas malawak na palitan ng IPS-LAC sa pamamagitan ng PH4H [[16]](#ref-16).
- **Pananaliksik at pangalawang gamit:** gawain upang palawakin ang mga buod ng pasyente para sa klinikal na pananaliksik at AI, habang pinananatiling minimal ang ubod [[7]](#ref-7).


## Talasalitaan

| Termino | Kahulugan |
|---|---|
| **IPS** | International Patient Summary |
| **FHIR** | Fast Healthcare Interoperability Resources, ang makabagong pamantayang nakabatay sa API ng HL7 |
| **CDA** | Clinical Document Architecture, ang pamantayan ng HL7 para sa mga dokumentong XML |
| **IG** | Implementation Guide, isang hanay ng mga profile at patakaran sa paglalapat ng pamantayan |
| **Profile** | Isang pinaghigpitang bersyon ng resource ng FHIR para sa tiyak na gamit |
| **SNOMED CT** | Systematized Nomenclature of Medicine – Clinical Terms |
| **LOINC** | Logical Observation Identifiers Names and Codes |
| **SMART Health Links** | Isang pamantayan sa pagbabahagi ng datos pangkalusugan sa pamamagitan ng link o QR code |
| **JIC** | Joint Initiative Council for Global Health Informatics Standardization |


## Alamin pa

- HL7 FHIR IPS Implementation Guide: <https://hl7.org/fhir/uv/ips/>
- IPS continuous build: <https://build.fhir.org/ig/HL7/fhir-ips/>
- International Patient Summary project site: <https://international-patient-summary.net/>
- ISO 27269 (Health informatics — International patient summary): <https://www.iso.org/standard/79491.html>
- SNOMED CT IPS Terminology: <https://www.snomed.org/international-patient-summary-terminology>
- SMART Health Links: <https://docs.smarthealthit.org/smart-health-links/>


## Mga mapagkukunan

Sumasaklaw ang mga link na ito sa mga pinagmulan, espesipikasyon, software, proyekto, video, aklat, at pananaliksik tungkol sa IPS. Karamihan ay sinuri noong isinulat ang pahinang ito. Hinaharang ng ilang site ng mga publisher ang awtomatikong pagsusuri, at minarkahan ang mga ito ng *(hindi nasuri)*.

### Mga opisyal na espesipikasyon at pamantayan

- [HL7 FHIR IPS Implementation Guide, current published version](https://hl7.org/fhir/uv/ips/) ang may awtoridad na espesipikasyon ng FHIR.
- [HL7 FHIR IPS Implementation Guide, STU 2](https://hl7.org/fhir/uv/ips/STU2/)
- [HL7 FHIR IPS Implementation Guide, STU 1.1](https://hl7.org/fhir/uv/ips/STU1.1/)
- [HL7 FHIR IPS publication history](https://www.hl7.org/fhir/uv/ips/history.html) ay naglilista ng bawat nailathalang bersyon.
- [HL7 FHIR IPS continuous build](https://build.fhir.org/ig/HL7/fhir-ips/) ang pinakabagong gawaing kasalukuyang isinasagawa na hindi pa naibobotohan.
- [Structure of the International Patient Summary](https://hl7.org/fhir/uv/ips/en/Structure-of-the-International-Patient-Summary.html) ay nagpapaliwanag ng mga seksyon at profile.
- [IPS design conventions](https://build.fhir.org/ig/HL7/fhir-ips/en/Design-Conventions.html) ay sumasaklaw sa must-support, nawawalang datos, at salaysay.
- [IPS generation and data inclusion](https://build.fhir.org/ig/HL7/fhir-ips/en/Generation-and-Data-Inclusion.html) ay sumasaklaw sa `$summary` at kung paano pumili ng nilalaman.
- [HL7 CDA IPS Implementation Guide, continuous build](https://build.fhir.org/ig/HL7/CDA-IPS/)
- [HL7 CDA IPS product brief](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=483)
- [ISO 27269, Health informatics — International patient summary](https://www.iso.org/standard/79491.html) *(hindi nasuri)*
- [ISO/TC 215 Health informatics committee](https://www.iso.org/committee/54960.html) *(hindi nasuri)*
- [IHE FHIR International Patient Summary profile (FIIO)](https://profiles.ihe.net/PCC/FIIO/volume-1.html)
- [IHE PCC International Patient Summary supplement, 2020 (PDF)](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS_Rev1-0_PC_2020-03-17.pdf)
- [HL7 SMART Health Cards and Links Implementation Guide](https://hl7.org/fhir/uv/smart-health-cards-and-links/)
- [SMART Health Links documentation](https://docs.smarthealthit.org/smart-health-links/)
- [HL7 FHIR International Patient Access (IPA)](https://hl7.org/fhir/uv/ipa/) ay kapatid na espesipikasyon para sa access ng pasyente sa pamamagitan ng API.
- [HL7 FHIR R4 base specification](https://hl7.org/fhir/R4/), na pinagbabatayan ng IPS.

### Mga repositoryo ng source code

- [HL7/fhir-ips](https://github.com/HL7/fhir-ips) ay may source ng FHIR IPS IG sa FHIR Shorthand.
- [HL7/cda-ips](https://github.com/HL7/cda-ips) ay may source ng CDA IPS IG.
- [hl7-eu/eps](https://github.com/hl7-eu/eps) ay may source ng HL7 Europe Patient Summary.
- [hl7ch/ch-ips](https://github.com/hl7ch/ch-ips) ay may IPS ng Switzerland, na may viewer at generator na ginagawa pa.
- [GitHub topic: international-patient-summary](https://github.com/topics/international-patient-summary) ay naglilista ng mga repositoryo ng komunidad.

### Mga pambansa at panrehiyong pag-aangkop

- [HL7 Europe Patient Summary (EPS), continuous build](https://build.fhir.org/ig/hl7-eu/eps/)
- [AU Patient Summary (Australia), continuous build](https://build.fhir.org/ig/hl7au/au-fhir-ps/)
- [Trillium II IPS structure (HL7 Europe)](https://hl7.eu/fhir/build/trillium2/site/ipsStructure.html) ay mula sa proyekto ng EU at US na tumulong magsimula ng IPS.
- [eHealth Suisse](https://www.ehealthsuisse.ch/) ay sentro ng kadalubhasaan ng Switzerland para sa digital health at sa pag-aampon nito ng IPS.
- [MyHealth@EU, cross-border digital health services](https://health.ec.europa.eu/ehealth-digital-health-and-care/electronic-cross-border-health-services_en)
- [Xt-EHR Joint Action](https://www.xt-ehr.eu/) ay naghahanda ng mga format ng European Health Data Space, kasama ang buod ng pasyente.

### Software at mga kasangkapan

- [IPS Viewer](https://www.ipsviewer.com) ([source: jddamore/IPSviewer](https://github.com/jddamore/IPSviewer)) ay isang open-source na viewer ng IPS na tumatakbo sa browser.
- [uwcirg/shl-ips-viewer](https://github.com/uwcirg/shl-ips-viewer) ay nagpapakita ng IPS na ibinahagi sa pamamagitan ng SMART Health Link.
- [smart-on-fhir/smart-health-links](https://github.com/smart-on-fhir/smart-health-links) ang reference implementation ng SMART Health Links.
- [HAPI FHIR IPS generator](https://hapifhir.io/hapi-fhir/docs/server_ips/introduction.html) ([source: hapifhir/hapi-fhir](https://github.com/hapifhir/hapi-fhir)) ay isang open-source na Java server module na nagpapatupad ng `$summary`.
- [HAPI FHIR JPA server IPS documentation](https://hapifhir.io/hapi-fhir/docs/server_jpa/ips.html)
- [Inferno IPS Test Kit](https://inferno.healthit.gov/test-kits/ips) ([source: inferno-framework/ips-test-kit](https://github.com/inferno-framework/ips-test-kit)) ay isang open-source na test kit ng conformance.
- [FHIR Validator](https://validator.fhir.org/) ay nagva-validate ng mga bundle ng IPS laban sa mga profile ng IG.
- [Simplifier: hl7.fhir.uv.ips package](https://simplifier.net/packages/hl7.fhir.uv.ips) ay may package, mga profile, at mga halimbawa.
- [FHIR package registry](https://registry.fhir.org/)
- [FHIR Shorthand (FSH) School](https://fshschool.org/) ay nagtuturo ng wikang ginamit sa pagsulat ng IPS IG.
- [CommonHealth](https://www.commonhealth.org/) ay isang app ng pasyente na lumilikha ng IPS at ibinabahagi ito sa pamamagitan ng SMART Health Links.
- [WHO SMART Trust](https://github.com/WorldHealthOrganization/smart-trust) ang balangkas ng tiwala para sa Global Digital Health Certification Network ng WHO.

### Mga organisasyon at proyekto

- [International Patient Summary project site](https://international-patient-summary.net/) ay may mga balita, ulat sa pag-aampon, at edukasyon.
- [IPS for health IT developers](https://international-patient-summary.net/health-it-developer/)
- [HL7 International](https://www.hl7.org/)
- [IHE International](https://www.ihe.net/)
- [SNOMED International](https://www.snomed.org/)
- [SNOMED CT IPS Terminology](https://www.snomed.org/international-patient-summary-terminology) ay libreng subset para sa paggamit ng IPS.
- [LOINC](https://loinc.org/) *(hindi nasuri)*
- [Joint Initiative Council for Global Health Informatics Standardization (JIC)](http://www.jointinitiativecouncil.org/)
- [Global Digital Health Partnership (GDHP)](https://gdhp.health/)
- [WHO SMART Guidelines](https://smart.who.int/)
- [WHO Global Digital Health Certification Network](https://www.who.int/initiatives/global-digital-health-certification-network)

### Komunidad at mga kaganapan

- [chat.fhir.org](https://chat.fhir.org/) ay ang chat ng komunidad ng FHIR, na may aktibong stream para sa IPS.
- [HL7 FHIR Connectathons](https://www.hl7.org/events/fhir-connectathon/)
- [IHE Connectathons](https://www.ihe.net/participate/connectathon/)

### Mga video

- [HIMSS20: IPS for computable care guidelines in 200 seconds or less (IHE International, YouTube)](https://www.youtube.com/watch?v=xjEzGM8kBPw)
- [IHE International YouTube channel](https://www.youtube.com/@IHEIntl) ay may mga panel ng Connectathon at sesyon tungkol sa IPS.
- [IPS project site news](https://international-patient-summary.net/) ay nagli-link sa maraming naitalang webinar, kabilang ang:
  - ang panel tungkol sa IPS sa IHE North America Connectathon, 2024
  - ang sesyon tungkol sa IPS sa FHIR DevDays 2023
  - si Grahame Grieve tungkol sa IPS at IPA, IHE Connectathon Montreux 2022
  - ang keynote sa SNOMED CT Expo 2022
  - si Matthew Rahn tungkol sa IPS sa GDHP
  - ang webinar ng HL7 na "Global Passport" tungkol sa paggamit na tumatawid ng hangganan
- [YouTube search: International Patient Summary](https://www.youtube.com/results?search_query=international+patient+summary)

### Mga aklat

- Tim Benson at Grahame Grieve, [*Principles of Health Interoperability: FHIR, HL7 and SNOMED CT*](https://link.springer.com/book/10.1007/978-3-030-56883-2), ika-4 na edisyon, Springer, 2020. Sumasaklaw ito sa FHIR, mga resource ng klinikal na buod, at terminolohiya.

### Mga papel pananaliksik at artikulo

- Laleci Erturkmen G. B., Sinaci A. A., Namli T., Boonstra M., et al., "[An assessment of the European Patient Summary for clinical research: a case study in cardiology](https://doi.org/10.3389/fmed.2024.1481551)", *Frontiers in Medicine*, 2024.
- Lee H., Huang J., Huang S., Chen W., et al., "[Implementing a Cross-Border Next-Generation Personal Health Record in the Philippines and Taiwan: An Implementation Case Report Using Health Level 7 International Fast Healthcare Interoperability Resources](https://doi.org/10.2196/56272)", *JMIR Formative Research*, 2025.
- Song C., Nakayama M., "[Implementation of a Patient Summary Web Application According to the International Patient Summary and Validation in Common Use Cases in Japan](https://doi.org/10.1007/s10916-023-01993-6)", *Journal of Medical Systems*, 2023.
- Schippers D., Spil T., Stegwee R., Folmer E., Donnelly S., "[The adoption and diffusion of the International Patient Summary](https://doi.org/10.24251/hicss.2025.425)", *Proceedings of the 58th Hawaii International Conference on System Sciences (HICSS)*, 2025.
- da Silva Carvalho N., Papadimitriou A., Stegwee R., Gille H., et al., "[Accelerating European electronic health record exchange format (EEHRxF) implementation across Europe: a policy perspective](https://doi.org/10.3389/fmed.2025.1648170)", *Frontiers in Medicine*, 2025.
- Kay S., Cangioli G., Nusbaum M., "[The International Patient Summary and the extensibility requirement](https://international-patient-summary.net/the-international-patient-summary-and-the-extensibility-requirement/)", *Studies in Health Technology and Informatics* (pHealth), 2020.
- D'Amore J., Cangioli G., Hausam R., "[Advancing the International Patient Summary](https://international-patient-summary.net/advancing-the-international-patient-summary/)"
- "[Towards the Austrian Patient Summary](https://international-patient-summary.net/towards-the-austrian-patient-summary/)", *Studies in Health Technology and Informatics* (dHealth).
- "[Revival of the International Patient Summary (IPS)](https://smiledigitalhealth.com/our-blog/revival-of-the-international-patient-summary-ips)", Smile Digital Health blog.
- [PubMed search: "international patient summary"](https://pubmed.ncbi.nlm.nih.gov/?term=%22international+patient+summary%22) para sa peer-reviewed na literatura.


## References

Ang mga may-numerong sipi sa teksto, tulad ng [1], ay nagli-link sa katugmang entry sa ibaba. Sinuri ang mga link noong Nobyembre 2026. Nagbabago ang mga batas, bilang ng pag-aampon, at bersyon, kaya suriin ang pinagmulan para sa kasalukuyang kalagayan.

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

Hindi sinisipi sa itaas ang mga pinagmulang ito, ngunit ang mga ito ang pangunahing sanggunian para sa mismong pamantayan.

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
