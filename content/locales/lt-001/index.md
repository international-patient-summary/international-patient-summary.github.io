# International Patient Summary (IPS)

**International Patient Summary (IPS)** yra pasaulinis trumpo elektroninio sveikatos įrašo ištraukos standartas. Jame pateikiami pagrindiniai klinikiniai faktai, kurių gydytojui reikia, kad saugiai gydytų pacientą. Jis sukurtas taip, kad būtų:

- **Minimalus ir neišsamus.** Tai nedidelis, atrinktas sveikatos įrašo pogrupis, o ne visas įrašas.
- **Nepriklausomas nuo specialybės.** Juo gali naudotis bet kuris gydytojas, bet kurioje srityje.
- **Nepriklausomas nuo ligos.** Jis nesusietas su konkrečia liga ar gydymo keliu.
- **Įgyvendinamas ir tarptautinis.** Jis grindžiamas pasauliniais standartais ir terminijomis, todėl gali būti naudojamas skirtingose šalyse, kalbomis ir IT sistemomis.

Trumpai tariant, IPS atsako į vieną klausimą gydytojui, kuris paciento dar niekada nėra sutikęs: *„Ką turiu žinoti dabar, kad saugiai pasirūpinčiau šiuo žmogumi?“*


## Kodėl IPS egzistuoja

Sveikatos informacija paprastai užrakinta vietinėje elektroninėje sveikatos istorijoje (ESI), nacionalinėje sistemoje ar tiekėjo produkte. Kai pacientas kreipiasi pagalbos kitur, pavyzdžiui, į kitą ligoninę, regioną ar šalį, gydantis gydytojas dažnai negali pasiekti šios istorijos. IPS visiems suteikia vieną bendrą, perkeliamą santraukos formatą.

### Pagrindiniai naudojimo atvejai

| Naudojimo atvejis | Aprašymas |
|---|---|
| **Neplanuota ir skubi pagalba** | Pacientas suserga ar susižeidžia toli nuo namų, o vietiniai gydytojai negali pasiekti paciento namų ESI. Tai pirminis, pagrindinis naudojimo atvejis. |
| **Tarpvalstybinė priežiūra** | Keliautojai, migrantai, tarpvalstybiniai darbuotojai ir pabėgėliai su savimi turi santrauką, kurią gali perskaityti užsienio gydytojai. |
| **Planinė priežiūra ir perėjimai** | Siuntimai, specialistų konsultacijos, paguldymai, išrašymai ir perdavimai tarp paslaugų teikėjų. |
| **Medicininis turizmas ir mobilumas** | Pacientai, kurie renkasi gydytis kitoje jurisdikcijoje. |
| **Paciento įgalinimas** | Pacientai turi, peržiūri ir dalijasi savo santrauka iš telefono programėlės, portalo ar atspausdintos kopijos. |


## Kada naudoti IPS

IPS naudokite, kai kam nors, kas nepažįsta paciento, greitai reikia patikimo esamos būklės vaizdo ir kai siuntėjas ir gavėjas nenaudoja bendros IT sistemos.

### Tinkami atvejai

- **Skubi ir neplanuota pagalba**, ypač toli nuo namų ar kitoje šalyje. Šiam tikslui IPS ir buvo sukurtas.
- **Tarpvalstybinis keitimasis tarp nacionalinių sistemų**, pavyzdžiui, ES paslauga MyHealth@EU [[1]](#ref-1) [[2]](#ref-2).
- **Paciento laikomos santraukos**, kurias keliautojai, migrantai, pabėgėliai, piligrimai ar žmonės su sudėtingomis ligomis nešiojasi telefone ar popieriuje [[3]](#ref-3).
- **Nacionalinė ar regioninė paciento santrauka.** Daugelis šalių kuria savo santrauką kaip IPS profilį, kad ja būtų galima keistis ir tarptautiniu mastu [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
- **Bendras pagrindas priežiūros perėjimams,** pavyzdžiui, siuntimams, paguldymams ir išrašymams, kai nėra turtingesnio specializuoto dokumento.
- **Atspirties taškas kitiems duomenų rinkiniams,** pavyzdžiui, skiepijimo pažymėjimams, tyrimų duomenims ar registrams, kuriems reikia tų pačių pagrindinių faktų [[7]](#ref-7) [[8]](#ref-8).

### Netinkami atvejai

- **Visas medicininis įrašas.** IPS sąmoningai minimalus. Kai svarbios detalės, naudokite pilną įrašo eksportą ar specializuotą dokumentą.
- **Specialybei skirti dokumentai,** pavyzdžiui, onkologinio gydymo santrauka, nėštumo kortelė ar išsami epikrizė. Jie turi savo standartus, kurie gali apimti IPS turinį arba į jį remtis.
- **Realaus laiko klinikinės darbo eigos vienoje organizacijoje.** Vienoje ESI sistemoje užklauskite gyvų duomenų, o ne santraukos momentinės kopijos.
- **Teisiniai, atsiskaitymo ar draudimo įrašai.** IPS yra klinikinė santrauka, o ne administracinis ar išlaidų atlyginimo įrašas.
- **Sprendimai, kuriems reikalingas garantuotas išsamumas.** IPS yra toks išsamus ir aktualus, kokie yra jo šaltinis ir autorius. Kritinius faktus visada, kai įmanoma, patvirtinkite su pacientu.


## Ką IPS apima

IPS dokumentas turi du sluoksnius:

1. **Antraštę, kurioje užrašoma, kas, ką ir kada:**
   - **Pacientas:** tapatybė, demografiniai duomenys ir kontaktai.
   - **Autorius:** asmuo, organizacija ar sistema, parengusi santrauką.
   - **Saugotojas (custodian):** organizacija, atsakinga už jos priežiūrą.
   - **Patvirtintojas (attester):** kas ją patikrino, jei kas nors.
   - **Data ir laikas:** kada ji sukurta.

2. **Klinikinę dalį, suskirstytą į skyrius.** Skyriai yra privalomi, rekomenduojami arba pasirenkami.

| Skyrius | Būsena | Tipinis turinys |
|---|---|---|
| **Medication Summary** (vaistų santrauka) | Privalomas | Dabartiniai ir svarbūs ankstesni vaistai, receptai, dozės |
| **Allergies and Intolerances** (alergijos ir netoleravimas) | Privalomas | Alergijos vaistams, maistui ir aplinkai; reakcijos ir sunkumas |
| **Problem List** (problemų sąrašas) | Privalomas | Aktyvios diagnozės, būklės ir klinikinės problemos |
| Immunizations (skiepai) | Rekomenduojamas | Gauti skiepai, pavyzdžiui, nuo stabligės, hepatito B, gripo, COVID-19 |
| History of Procedures (procedūrų istorija) | Rekomenduojamas | Didelės operacijos ir invazinės intervencijos |
| Medical Devices (medicinos priemonės) | Rekomenduojamas | Implantai ir prietaisai, pavyzdžiui, širdies stimuliatoriai, stentai, protezai |
| Diagnostic Results (diagnostiniai rezultatai) | Rekomenduojamas | Svarbiausi laboratoriniai rezultatai, vaizdiniai tyrimai, patologija |
| Vital Signs (gyvybiniai rodikliai) | Pasirenkamas | Kraujospūdis, širdies susitraukimų dažnis, svoris, ūgis, KMI |
| History of Past Illness (ankstesnių ligų istorija) | Pasirenkamas | Išgydytos būklės ir reikšmingos ankstesnės problemos |
| Functional Status (funkcinė būklė) | Pasirenkamas | Negalios ir gebėjimas atlikti kasdienę veiklą |
| Plan of Care (priežiūros planas) | Pasirenkamas | Priežiūros planai ir gydymo rekomendacijos |
| Social History (socialinė anamnezė) | Pasirenkamas | Tabakas, alkoholis ir kiti svarbūs gyvenimo būdo veiksniai |
| History of Pregnancy (nėštumų istorija) | Pasirenkamas | Dabartinė nėštumo būklė ir ankstesni nėštumai |
| Advance Directives (išankstiniai nurodymai) | Pasirenkamas | Išankstinė valia dėl gydymo, pageidavimai dėl gaivinimo, sutikimo pareiškimai |
| Alerts (įspėjimai) | Pasirenkamas | Saugai kritiški įspėjimai, kurie netinka niekur kitur (pridėta FHIR IPS STU 2) |
| Patient Story (paciento istorija) | Pasirenkamas | Kas svarbu pacientui: poreikiai, stiprybės, vertybės, rūpesčiai ir pageidavimai paciento pačio žodžiais (pridėta FHIR IPS STU 2) |

**Svarbu aiškiai pasakyti „nieko“.** Tuščias skyrius gydytojui nepasako, ar pacientas neturi alergijų, ar jų tiesiog niekas neįrašė. Todėl IPS tikisi aiškių teiginių, pavyzdžiui, *„alergijų nežinoma“*, *„šiuo metu vaistų nevartoja“* arba *„informacijos nėra“*.


## Standartai, slypintys už IPS

IPS yra suderintų standartų šeima. ISO ir CEN standartai apibrėžia, *ką* paciento santrauka turi apimti. HL7 įgyvendinimo vadovai apibrėžia, *kaip* ją koduoti.

| Standartas | Organizacija | Vaidmuo |
|---|---|---|
| **EN 17269** | CEN (Europos standartizacijos komitetas) | Abstraktus IPS duomenų rinkinys, paskelbtas 2019 m. |
| **ISO 27269** | ISO (Tarptautinė standartizacijos organizacija) | Tarptautinė abstraktaus IPS duomenų rinkinio versija, paskelbta 2021 m. |
| **CEN/TS 17288** | CEN | Gairės, kaip įgyvendinti IPS tarpvalstybiniam naudojimui |
| **HL7 FHIR IPS Implementation Guide** | HL7 International | Šiuolaikinis, API palankus kodavimas ir pagrindinis įgyvendinimo formatas. STU 2 (2.0.x) pridėjo skyrius Alerts ir Patient Story, leido tuščius skyrius, patikslino `$summary` ir perėjo prie SNOMED CT IPS terminijos [[9]](#ref-9). |
| **HL7 CDA IPS Implementation Guide** | HL7 International | XML pagrįstas dokumentų kodavimas, įprastas esamose nacionalinėse ir Europos infrastruktūrose |

Darbą koordinuoja **Joint Initiative Council for Global Health Informatics Standardization (JIC)**. JIC vienija ISO, CEN, HL7, SNOMED International, IHE ir kitus. IPS išaugo iš 2016 m. ES ir JAV bendradarbiavimo dėl tarpvalstybinių sveikatos duomenų, o dabar jį palaiko vyriausybės ir skaitmeninės sveikatos programos visame pasaulyje.


## Kaip IPS koduojamas su HL7 FHIR

FHIR sistemoje IPS yra vienas **`Bundle`** tipo `document`:

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

Pagrindiniai techniniai punktai:

- **Kiekvienas skyrius turi žmogui skaitomą pasakojimą.** Gydytojas gali perskaityti IPS įprastoje naršyklėje, net be FHIR programinės įrangos.
- **Kiekvienas skyrius turi ir koduotų įrašų**, tai yra struktūrizuotų FHIR išteklių, kuriuos programinė įranga gali apdoroti, išversti ir suderinti.
- **Profiliai riboja bazinius FHIR išteklius.** Pavyzdžiui, *Patient (IPS)* ir *AllergyIntolerance (IPS)* apibrėžia minimalius duomenis ir „must support“ elementus.
- **Operacija `$summary`** (`GET [base]/Patient/[id]/$summary`) paprašo FHIR serverio pagal poreikį sugeneruoti paciento IPS.
- **IPS galima pasirašyti ir jis yra savarankiškas.** Visą dokumentą galima saugoti, siųsti, pasirašyti ir tikrinti kaip vieną vienetą.


## Terminijos

Bendros kodų sistemos padaro IPS skaitomą skirtingomis kalbomis ir šalyse:

| Terminija | Kam naudojama |
|---|---|
| **SNOMED CT** | Problemos, alergijos, procedūros, priemonės, klinikiniai radiniai. Nemokamas pogrupis **SNOMED CT IPS Terminology** prieinamas naudoti su IPS, net ir ne narėse šalyse. |
| **LOINC** | Dokumentų ir skyrių tipai, laboratoriniai tyrimai, gyvybiniai rodikliai |
| **ATC** ir kitos vaistų kodų sistemos | Vaistiniai preparatai ir veikliosios medžiagos |
| **UCUM** | Matavimo vienetai |
| **ISO ir HL7 reikšmių rinkiniai** | Šalys, kalbos, administracinė lytis, trūkstamų ir nežinomų duomenų priežastys |

Kadangi įrašai koduoti, priimanti sistema gali parodyti portugališkai parašytą IPS su angliškomis žymėmis. Koduota prasmė išlieka ta pati.


## Kaip IPS naudoja pacientai ir gydytojai

IPS gali sukurti ESI, nacionalinė sveikatos įrašų paslauga, pacientų portalas ar asmeninė sveikatos programėlė. Tada jį galima pristatyti keliais būdais:

- **Iš sistemos į sistemą:** per FHIR REST API, nacionalines infrastruktūras ar tarpvalstybinius šliuzus, tokius kaip ES tinklas MyHealth@EU.
- **Dalijimasis per pacientą:** pacientas laiko santrauką piniginėje ar sveikatos programėlėje ir dalijasi ja pagal poreikį.
- **SMART Health Links:** QR kodas ar URL, suteikiantis gydytojui laiko atžvilgiu ribotą, pasirinktinai slaptažodžiu apsaugotą prieigą prie užšifruoto IPS. Gydytojas gali jį atidaryti įprastoje žiniatinklio naršyklėje.
- **Popierius ar PDF:** atspausdintas pasakojamasis vaizdas kaip atsarginis variantas, kai nieko kito nepavyksta.

Programėlės, tokios kaip **CommonHealth**, leidžia pacientams surinkti savo įrašus ir dalytis IPS per SMART Health Links.

Tipinis skubios pagalbos scenarijus:

1. Keliautojas užsienyje sukniumba.
2. Keliautojas ar jo bendrakeleivis parodo QR kodą iš telefono.
3. Skubiosios pagalbos gydytojas jį nuskaito ir per kelias sekundes mato keliautojo vaistus, alergijas ir aktyvias problemas.
4. Gydytojas išvengia pavojingos vaistų sąveikos ir saugiai gydo pacientą.


## Principai ir projektavimo sprendimai

- **Pirmiausia saugumas.** Turinys renkamas pagal klinikinę reikšmę, o ne išsamumą.
- **Pasaulinis pagal numatytuosius nustatymus, vietinis per plėtinius.** Šalys kuria nacionalinius profilius, pavyzdžiui, ES, Australijos ar Kanados variantus, kurie prideda reikalavimų nepažeisdami tarptautinės šerdies.
- **Žmogui skaitomas ir mašinomis apdorojamas.** Pasakojimas ir koduoti duomenys sugyvena.
- **Nemokamas ir atviras.** HL7 IPS specifikacijos ir SNOMED CT pogrupis IPS yra laisvai prieinami, kad sumažintų kliūtis diegti.
- **Privatumas ir sutikimas.** Prieigą reglamentuoja vietos teisė ir paciento sutikimas. Mechanizmai, tokie kaip SMART Health Links, palieka pacientui kontrolę.


## Kaip naudoti IPS

### Pacientams

1. **Paprašykite jo.** Paklauskite savo klinikos, ligoninės, nacionalinio sveikatos portalo ar sveikatos programėlės, ar jie gali sukurti IPS arba jo pagrindu parengtą nacionalinę paciento santrauką.
2. **Patikrinkite jį.** Perskaitykite jį, kol esate sveikas. Pranešykite apie viską, kas neteisinga ar trūksta, ypač alergijas ir vaistus.
3. **Turėkite jį su savimi.** Saugokite jį sveikatos programėlėje ar piniginėje, kaip SMART Health Link QR kodą arba kaip atspaudą kartu su kelionės dokumentais.
4. **Palaikykite jį aktualų.** Gaukite naują po naujos diagnozės, naujo ilgalaikio vaisto, operacijos ar implanto.
5. **Dalykitės juo sąmoningai.** Parodykite jį jus gydančiam gydytojui. SMART Health Link gali nustoti galioti ir gali reikalauti slaptažodžio, todėl jūs kontroliuojate, kas jį mato ir kiek laiko [[10]](#ref-10).

### Gydytojams

1. **Pirmiausia patikrinkite antraštę.** Kas ją parašė, kada ir ar kas nors ją patikrino. Senai ar nepatikrintai santraukai reikia daugiau atsargumo.
2. **Pirmiausia perskaitykite privalomus skyrius:** alergijas, vaistus ir problemas.
3. **Skirkite „nežinoma“ nuo „neįrašyta“.** „Alergijų nežinoma“ yra klinikinis teiginys. Tuščias ar „nežinoma“ skyrius toks nėra.
4. **Patvirtinkite kritinius faktus** su pacientu ar jo bendrakeleiviu, kai tik galite.
5. **Naudokite koduotus duomenis.** Kur jūsų sistema tai palaiko, koduoti įrašai leidžia santrauką rodyti jūsų kalba ir tikrinti pagal vaistų sąveikos bei alergijų taisykles.
6. **Nemanykite, kad jis išsamus.** IPS yra saugos tinklas, o ne visa anamnezė.

### Įgyvendintojams

1. **Pasirinkite specifikaciją.** Naudokite dabartinį HL7 FHIR IPS Implementation Guide (STU 2) arba savo šalies nacionalinį profilį. CDA pagrįstoms infrastruktūroms naudokite CDA IPS vadovą [[9]](#ref-9) [[11]](#ref-11).
2. **Susiekite savo duomenis.** Susiekite vietinius duomenis su IPS profiliais: `Patient`, `AllergyIntolerance`, `MedicationStatement`, `Condition` ir t. t. Didžioji darbo dalis yra šis susiejimas.
3. **Susiekite savo terminiją.** Susiekite vietinius kodus su SNOMED CT, LOINC ir vaistų kodų sistemomis. SNOMED CT IPS Terminology šiam tikslui naudoti nemokama [[12]](#ref-12).
4. **Sugeneruokite dokumentą.** Palaikykite operaciją `$summary` arba patys sudarykite `Bundle` ir `Composition`. Kiekvienam skyriui pateikite skaitomą pasakojimą ir aiškius teiginius „nežinoma“ arba „nėra informacijos“.
5. **Patvirtinkite jį.** Kiekvieną sugeneruotą dokumentą patikrinkite su FHIR Validator ir atitikties testų rinkiniu, tokiu kaip Inferno IPS Test Kit [[13]](#ref-13).
6. **Pasirašykite ir dalykitės juo.** Nuspręskite, kaip dokumentai pasirašomi, saugomi ir siunčiami: per API, dokumentų registrą, tarpvalstybinį šliuzą ar SMART Health Link.
7. **Gaukite jį saugiai.** Kaip gavėjas rodykite pasakojimą, net jei negalite apdoroti visų koduotų įrašų, palikite matomus šaltinį ir autorių ir niekada tyliai nesujunkite gautų duomenų su vietiniu įrašu.
8. **Išbandykite su kitais.** Prieš pradėdami veikti patikrinkite sąveiką su kitais tiekėjais ir šalimis IHE ir HL7 Connectathon renginiuose.

### Vyriausybėms ir sveikatos organizacijoms

1. **Priimkite nacionalinį profilį,** kuris kuriamas ant IPS, o ne atskirą formatą, kad nacionalinė santrauka pagal numatytuosius nustatymus būtų tarptautinė [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
2. **Sutvarkykite valdymą:** kas gali kurti, atnaujinti ir patvirtinti santrauką ir kas atsako už jos tikslumą.
3. **Sutvarkykite terminijos licencijavimą:** SNOMED CT narystę arba nemokamo IPS pogrupio naudojimą.
4. **Sutvarkykite tapatybę, sutikimą ir pasitikėjimą:** kaip identifikuojami pacientai, kaip registruojamas sutikimas ir kokia pasitikėjimo sistema, pavyzdžiui, MyHealth@EU ar PSO Global Digital Health Certification Network, naudojama dokumentams tikrinti [[1]](#ref-1) [[14]](#ref-14).
5. **Paskelbkite tai, ką sukūrėte,** IPS Implementation Registry, kad kiti galėtų iš to pasimokyti [[15]](#ref-15).


## IPS integravimas su sveikatos sistemomis

IPS retai yra atskira sistema. Tai duomenų, kurie jau yra ESI, sveikatos informacijos mainuose, nacionaliniuose įrašuose ir asmeninėse sveikatos programėlėse, vaizdas.

| Integravimo modelis | Kaip veikia | Pavyzdžiai |
|---|---|---|
| **Generuoja ESI** | ESI pagal poreikį sudaro IPS iš savo duomenų, dažnai per FHIR operaciją `$summary`. | ESI tiekėjai ir FHIR serveriai, tokie kaip HAPI FHIR, turintis IPS generatoriaus modulį |
| **Nacionalinis ar regioninis įrašas** | Nacionalinė paciento santraukų paslauga saugo IPS profilį ir padaro jį prieinamą įgaliotiems paslaugų teikėjams. | Kanados PS-CA, Australijos AU Patient Summary, Šveicarijos elektroninė paciento byla su CH IPS [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6) |
| **Tarpvalstybinis šliuzas** | Kiekviena šalis valdo nacionalinį kontaktinį punktą. Jis paverčia kilmės šalies santrauką sutartu mainų formatu, išsiunčia ją per sieną, o priimanti šalis parodo ją vietos kalba. | MyHealth@EU National Contact Points for eHealth [[1]](#ref-1) [[2]](#ref-2) |
| **Regioninis mainų tinklas** | Sveikatos ministerijos keičiasi IPS dokumentais per nacionalinius FHIR serverius pagal bendrą regioninį vadovą. | RACSEL IPS-LAC ir Pan American Highway for Digital Health (PH4H) Lotynų Amerikoje ir Karibuose [[16]](#ref-16) |
| **Per pacientą** | Pacientas laiko IPS programėlėje ar piniginėje ir dalijasi juo QR kodu ar SMART Health Link. | CommonHealth; PSO pasitikėjimo tinklo IPS darbas piligrimystėms [[10]](#ref-10) [[14]](#ref-14) |
| **Prieiga per API** | Programėlės gauna įgalioto paciento IPS per FHIR API. | International Patient Access (IPA); JAV tinklai, tokie kaip Flexpa, kuri pridėjo IPS palaikymą pagal CMS Interoperability Framework [[17]](#ref-17) [[18]](#ref-18) |

Integravimo taškai, kuriuos reikia suplanuoti:

- **Dokumentų dalijimasis:** IHE profiliai, tokie kaip MHD (FHIR) ir XDS (dokumentų registrai), saugo ir randa IPS dokumentus. IHE IPS turinio profiliai prideda atitikties ir testavimo taisykles [[11]](#ref-11).
- **Paciento tapatybė:** IHE PIXm ir PDQm arba nacionalinis identifikatorius suderina pacientą tarp sistemų.
- **Esami dokumentai:** daugelis sistemų jau kuria CDA, C-CDA ar nacionalines santraukas. Jų susiejimas su IPS paprastai lengvesnis nei pradėti iš naujo, bet patikrinkite kardinalumo, reikšmių rinkinių ir kodų sistemų skirtumus.
- **Nacionaliniai profiliai:** nacionalinė šerdis, tokia kaip US Core, AU Core, CH Core ar JP Core, gali skirtis nuo IPS. Nacionaliniai paciento santraukos profiliai suderina abu [[5]](#ref-5) [[6]](#ref-6) [[19]](#ref-19).
- **Vertimas ir rodymas:** gavėjai turėtų pateikti pasakojimą ir išversti koduotus įrašus naudodami kodų rodomus pavadinimus gavėjo kalba.
- **Sauga:** naudokite TLS, kur reikia, pasirašytus dokumentus, audito žurnalus (pavyzdžiui, IHE ATNA ar BALP) ir su sutikimu susietą prieigos kontrolę.


## Dabartinis diegimas

IPS iš bandomųjų projektų perėjo į nacionalines ir regionines programas. Padėtis greitai keičiasi, todėl naujausios būklės ieškokite susietuose šaltiniuose.

- **IPS Implementation Registry.** IPS bendruomenė tvarko viešą diegimų registrą. 2026 m. viduryje jame buvo 34 įrašai, nuo Argentinos paslaugų teikėjų tarpininkaujamo IPS-LAC projekto iki Vietnamo Better Health Program [[15]](#ref-15).
- **FHIR ekosistema.** 2025 m. HL7 International ir Firely atliktoje State of FHIR apklausoje 42 respondentai teigė, kad IPS yra jų nacionalinių FHIR specifikacijų pagrindas, dažniau nei bet koks kitas tarptautinis vadovas [[20]](#ref-20).
- **Tyrimai.** 2025 m. IPS diegimo tyrime apklausti suinteresuotieji asmenys, kurie kaip pagrindinę naudą nurodė geresnę priežiūros kokybę ir pacientų saugą [[21]](#ref-21).

| Šalis ar regionas | Būklė |
|---|---|
| **Europos Sąjunga ir EEE** | MyHealth@EU keičiasi pacientų santraukomis ir e. receptais tarp šalių. 2026 m. Europos Komisijos pristatyme pranešta, kad veikia 17 valstybių narių ir Norvegija, o dauguma likusių planuoja prisijungti [[2]](#ref-2) [[22]](#ref-22). EHDS reglamentas paciento santraukų mainus iki 2029 m. padaro privalomus [[23]](#ref-23). |
| **Kanada** | Visos Kanados paciento santrauka (PS-CA), Canada Health Infoway patvirtinta 2022 m. spalį, sukurta ant IPS su Kanados pritaikymais [[4]](#ref-4). |
| **Australija** | AU Patient Summary, sukurtą ant IPS ir AU Core, kuria HL7 Australia per programą Sparked [[5]](#ref-5) [[24]](#ref-24). |
| **Šveicarija** | HL7 Switzerland CH IPS 2.0.0 (bandomasis naudojimas) kuriamas ant IPS ir CH Core. Atskiras profilis prideda tai, ko reikia Šveicarijos elektroninei paciento bylai [[6]](#ref-6). |
| **Jungtinės Valstijos** | Federalinio įpareigojimo dėl IPS nėra. JAV naudoja US Core ir USCDI. Federalinės agentūros dalyvauja tarptautiniame IPS darbe, o kai kurie tinklai IPS palaiko savanoriškai [[18]](#ref-18). |
| **Lotynų Amerika ir Karibai** | RACSEL sveikatos ministerijos naudoja regioninį vadovą IPS-LAC. 2023 m. 16 šalių pasikeitė IPS-LAC dokumentais connectathon renginyje San Paule [[16]](#ref-16). |
| **Japonija** | Tyrėjai sukūrė ir patvirtino IPS pagrįstą paciento santraukos programą įprastiems Japonijos naudojimo atvejams, naudodami JP Core [[19]](#ref-19). |
| **Taivanas ir Filipinai** | 2025 m. įgyvendinimo ataskaita aprašo tarpvalstybinį asmeninį sveikatos įrašą, naudojantį FHIR ir suderintą su IPS [[25]](#ref-25). |
| **G7** | 2021 m. G7 sveikatos ministrai įsipareigojo dirbti siekdami IPS ir paskelbė IPS veiksmų planą [[26]](#ref-26). |
| **PSO** | PSO Global Digital Health Certification Network apima IPS pagrįstus pasitikėjimo domenus, tokius kaip patikrinamas IPS piligrimystėms [[14]](#ref-14). |


## Įstatymai, reglamentai ir politika pagal šalis ir regionus

IPS yra standartas, o ne įstatymas. Įstatymai nusprendžia, ar šalis privalo keistis paciento santraukomis, kokiu formatu ir pagal kokias privatumo taisykles. Tai santrauka, o ne teisinė konsultacija. Visada patikrinkite dabartinį įstatymo tekstą.

| Jurisdikcija | Įstatymas ar politika | Ką tai reiškia IPS |
|---|---|---|
| **Europos Sąjunga** | **Europos sveikatos duomenų erdvės reglamentas (EHDS), (ES) 2025/327.** Paskelbtas 2025 m. kovo 5 d.; įsigaliojo 2025 m. kovo 26 d. [[23]](#ref-23) [[27]](#ref-27). | Paciento santraukos yra „prioritetinė kategorija“. Mainai Europos elektroninių sveikatos įrašų mainų formatu iki 2029 m. turi veikti kiekvienoje valstybėje narėje. Medicininiai vaizdai, tyrimų rezultatai ir išrašai seka iki 2031 m. [[28]](#ref-28). Paciento santraukų formatas grindžiamas HL7 IPS. |
| **Europos Sąjunga** | **Direktyva 2011/24/ES** dėl pacientų teisių į tarpvalstybines sveikatos priežiūros paslaugas [[29]](#ref-29). | Įsteigė e. sveikatos tinklą (eHealth Network), kuris susitarė dėl paciento santraukos gairių, esančių už MyHealth@EU. |
| **Europos Sąjunga** | **Bendrasis duomenų apsaugos reglamentas (BDAR), (ES) 2016/679** [[30]](#ref-30). | Sveikatos duomenys yra ypatinga kategorija. Kiekvieniems IPS mainams reikia teisinio pagrindo ir tinkamų apsaugos priemonių. |
| **Jungtinės Valstijos** | **21st Century Cures Act ir informacijos blokavimo taisyklės** [[31]](#ref-31); savanoriškas **CMS Interoperability Framework** (2025) [[17]](#ref-17). | Joks įstatymas nereikalauja IPS. Įstatymai reikalauja prieigos prie elektroninės sveikatos informacijos ir jos mainų naudojant US Core ir USCDI. IPS palaikymas yra savanoriškas. |
| **Kanada** | Provincijų ir teritorijų sveikatos informacijos įstatymai. Federalinis **Connected Care for Canadians Act** (įstatymo projektas C-72) pateiktas 2024 m., bet nebuvo priimtas iki parlamento prorogavimo 2025 m. | PS-CA yra visos Kanados specifikacija, o ne teisinis reikalavimas. Diegimą veda provincijos ir teritorijos kartu su Canada Health Infoway [[4]](#ref-4). |
| **Jungtinė Karalystė** | **Data (Use and Access) Act 2025** [[32]](#ref-32). | Apima įgaliojimus nustatyti informacijos standartus sveikatos ir suaugusiųjų socialinės priežiūros IT srityje. Jungtinė Karalystė 2021 m. buvo G7 įsipareigojimo dėl IPS šeimininkė [[26]](#ref-26). |
| **Australija** | **My Health Records Act 2012** ir 2025 m. pakeitimai dėl „numatytojo dalijimosi“. | AU Patient Summary yra nacionalinė specifikacija, sukurta per Sparked [[5]](#ref-5) [[24]](#ref-24). |
| **Šveicarija** | **2015 m. birželio 19 d. federalinis įstatymas dėl elektroninės paciento bylos (EPRA, SR 816.1)**, galiojantis nuo 2017 m. balandžio 15 d. [[33]](#ref-33). | CH IPS apima profilį dokumentams Šveicarijos elektroninėje paciento byloje [[6]](#ref-6). |
| **Lotynų Amerika ir Karibai** | Regioniniai susitarimai per RACSEL ir PH4H, remiami Inter-American Development Bank, regioninei teisinei sistemai [[16]](#ref-16). | IPS-LAC yra sutartas regioninis formatas tarpvalstybiniams mainams. |
| **G7** | **Sveikatos ministrų komunikatas**, Oksfordas, 2021 m. birželis, ir **G7 IPS Roadmap**, 2021 m. gruodis [[26]](#ref-26) [[34]](#ref-34). | Politinis įsipareigojimas dirbti siekiant IPS ir pacientų prieigos, o ne privalomas įstatymas. |


## Privalumai ir trūkumai

| Privalumai | Trūkumai |
|---|---|
| **Saugesnė neplanuota priežiūra.** Gydytojai per kelias sekundes mato alergijas, vaistus ir problemas. | **Toks geras, koks jo šaltinis.** Pasenę ar klaidingi šaltinio duomenys duoda pasenusią ar klaidingą santrauką. |
| **Vienas formatas visame pasaulyje.** Vienas įgyvendinimas tenkina nacionalinius ir tarpvalstybinius poreikius. | **Nacionaliniai skirtumai.** Nacionaliniai profiliai prideda taisyklių, todėl „galiojantį IPS“ vienoje šalyje gali reikėti pritaikyti, kad būtų priimtas kitoje. |
| **Sukurtas ant atvirų, brandžių standartų:** ISO, CEN, HL7 FHIR ir CDA, SNOMED CT ir LOINC. | **Terminijos našta.** Vietinių kodų susiejimas su SNOMED CT ir LOINC yra sunkus darbas, o pilnam SNOMED CT reikia licencijos, viršijančios nemokamą IPS pogrupį. |
| **Skaitomas ir apskaičiuojamas.** Pasakojimas žmonėms, koduoti duomenys programinei įrangai ir vertimui. | **Pasakojimas ir koduoti duomenys gali nesutapti,** jei generatorius aplaidus, o gavėjai gali patikėti netinkamu. |
| **Paciento įgalinimas.** Pacientai gali laikyti ir dalytis savo santrauka. | **Privatumo ir sutikimo rizika.** Perkeliama santrauka yra jautri, o įstatymai ir sutikimo modeliai šalyse skiriasi. |
| **Nemokamos specifikacijos** ir nemokama IPS terminija mažina išlaidas [[12]](#ref-12). | **Dažni versijų keitimai.** STU 1, STU 1.1 ir STU 2 sugyvena, o EHDS formatas remiasi ankstesne versija [[28]](#ref-28). |
| **Pakartotinai naudojamas** skiepijimo pažymėjimams, tyrimams ir registrams [[7]](#ref-7) [[8]](#ref-8). | **Sąmoningai minimalus.** Nepakeičia pilnų įrašų ar specialybės dokumentų, o antrinio naudojimo spragoms reikia plėtinių [[7]](#ref-7). |
| **Stipri parama** iš vyriausybių, ES, G7, PSO ir standartizacijos organizacijų. | **Netolygus diegimas.** Daug šalių ir tiekėjų vis dar bando, o pacientų žinios menkos. |


## Planai ir ateities kryptys

- **ES, 2029 m.:** paciento santraukų ir e. receptų mainai veikia visose ES valstybėse narėse pagal EHDS [[23]](#ref-23) [[28]](#ref-28).
- **ES, 2031 m.:** medicininiai vaizdai, laboratorijos rezultatai ir išrašai prisijungia prie Europos elektroninių sveikatos įrašų mainų formato [[28]](#ref-28).
- **MyHealth@EU plėtra:** prisijungia daugiau šalių ir atsiranda naujų paslaugų laboratorijos rezultatams, išrašams ir medicininiams vaizdams [[2]](#ref-2) [[22]](#ref-22).
- **FHIR IPS STU 2 diegimas:** įgyvendintojai pereina prie skyrių Alerts ir Patient Story, aiškių tuščių skyrių ir SNOMED CT IPS terminijos [[9]](#ref-9).
- **Australija:** AU Patient Summary Release 1 paskelbimas, planuojamas 2026 m. [[24]](#ref-24).
- **IPS Best Practices Project:** bendruomenės pastangos dokumentuoti išmoktas pamokas, darbas prasideda 2026 m.
- **PSO pasitikėjimo tinklas:** daugiau IPS pagrįstų pasitikėjimo domenų patikrinamiems, perkeliamiems sveikatos dokumentams [[14]](#ref-14).
- **SMART Health Links:** standartizuojami per HL7, kad pacientas valdytų dalijimąsi [[10]](#ref-10).
- **Lotynų Amerika ir Karibai:** platesni IPS-LAC mainai per PH4H [[16]](#ref-16).
- **Moksliniai tyrimai ir antrinis naudojimas:** darbas siekiant išplėsti paciento santraukas klinikiniams tyrimams ir dirbtiniam intelektui, išlaikant minimalią šerdį [[7]](#ref-7).


## Žodynėlis

| Terminas | Reikšmė |
|---|---|
| **IPS** | International Patient Summary |
| **FHIR** | Fast Healthcare Interoperability Resources, HL7 šiuolaikinis API pagrįstas standartas |
| **CDA** | Clinical Document Architecture, HL7 XML dokumentų standartas |
| **IG** | Implementation Guide, profilių ir taisyklių rinkinys standartui taikyti |
| **Profilis** | Apribota FHIR ištekliaus versija konkrečiam naudojimui |
| **SNOMED CT** | Systematized Nomenclature of Medicine – Clinical Terms |
| **LOINC** | Logical Observation Identifiers Names and Codes |
| **SMART Health Links** | Standartas dalytis sveikatos duomenimis per nuorodą ar QR kodą |
| **JIC** | Joint Initiative Council for Global Health Informatics Standardization |


## Sužinokite daugiau

- HL7 FHIR IPS Implementation Guide: <https://hl7.org/fhir/uv/ips/>
- IPS continuous build: <https://build.fhir.org/ig/HL7/fhir-ips/>
- International Patient Summary project site: <https://international-patient-summary.net/>
- ISO 27269 (Health informatics — International patient summary): <https://www.iso.org/standard/79491.html>
- SNOMED CT IPS Terminology: <https://www.snomed.org/international-patient-summary-terminology>
- SMART Health Links: <https://docs.smarthealthit.org/smart-health-links/>


## Ištekliai

Šios nuorodos apima šaltinius, specifikacijas, programinę įrangą, projektus, vaizdo įrašus, knygas ir tyrimus apie IPS. Dauguma jų buvo patikrintos rašant šį puslapį. Kai kurios leidėjų svetainės blokuoja automatinį tikrinimą, jos pažymėtos *(nepatikrinta)*.

### Oficialios specifikacijos ir standartai

- [HL7 FHIR IPS Implementation Guide, current published version](https://hl7.org/fhir/uv/ips/) yra autoritetinga FHIR specifikacija.
- [HL7 FHIR IPS Implementation Guide, STU 2](https://hl7.org/fhir/uv/ips/STU2/)
- [HL7 FHIR IPS Implementation Guide, STU 1.1](https://hl7.org/fhir/uv/ips/STU1.1/)
- [HL7 FHIR IPS publication history](https://www.hl7.org/fhir/uv/ips/history.html) išvardija visas paskelbtas versijas.
- [HL7 FHIR IPS continuous build](https://build.fhir.org/ig/HL7/fhir-ips/) yra naujausias vykdomas darbas, dėl kurio dar nebalsuota.
- [Structure of the International Patient Summary](https://hl7.org/fhir/uv/ips/en/Structure-of-the-International-Patient-Summary.html) paaiškina skyrius ir profilius.
- [IPS design conventions](https://build.fhir.org/ig/HL7/fhir-ips/en/Design-Conventions.html) apima must-support, trūkstamus duomenis ir pasakojimą.
- [IPS generation and data inclusion](https://build.fhir.org/ig/HL7/fhir-ips/en/Generation-and-Data-Inclusion.html) apima `$summary` ir turinio atranką.
- [HL7 CDA IPS Implementation Guide, continuous build](https://build.fhir.org/ig/HL7/CDA-IPS/)
- [HL7 CDA IPS product brief](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=483)
- [ISO 27269, Health informatics — International patient summary](https://www.iso.org/standard/79491.html) *(nepatikrinta)*
- [ISO/TC 215 Health informatics committee](https://www.iso.org/committee/54960.html) *(nepatikrinta)*
- [IHE FHIR International Patient Summary profile (FIIO)](https://profiles.ihe.net/PCC/FIIO/volume-1.html)
- [IHE PCC International Patient Summary supplement, 2020 (PDF)](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS_Rev1-0_PC_2020-03-17.pdf)
- [HL7 SMART Health Cards and Links Implementation Guide](https://hl7.org/fhir/uv/smart-health-cards-and-links/)
- [SMART Health Links documentation](https://docs.smarthealthit.org/smart-health-links/)
- [HL7 FHIR International Patient Access (IPA)](https://hl7.org/fhir/uv/ipa/) yra sesutė specifikacija pacientų prieigai per API.
- [HL7 FHIR R4 base specification](https://hl7.org/fhir/R4/), ant kurios sukurtas IPS.

### Šaltinio kodo saugyklos

- [HL7/fhir-ips](https://github.com/HL7/fhir-ips) turi FHIR IPS IG šaltinį FHIR Shorthand kalba.
- [HL7/cda-ips](https://github.com/HL7/cda-ips) turi CDA IPS IG šaltinį.
- [hl7-eu/eps](https://github.com/hl7-eu/eps) turi HL7 Europe Patient Summary šaltinį.
- [hl7ch/ch-ips](https://github.com/hl7ch/ch-ips) turi Šveicarijos IPS su kuriama peržiūros priemone ir generatoriumi.
- [GitHub topic: international-patient-summary](https://github.com/topics/international-patient-summary) išvardija bendruomenės saugyklas.

### Nacionaliniai ir regioniniai pritaikymai

- [HL7 Europe Patient Summary (EPS), continuous build](https://build.fhir.org/ig/hl7-eu/eps/)
- [AU Patient Summary (Australia), continuous build](https://build.fhir.org/ig/hl7au/au-fhir-ps/)
- [Trillium II IPS structure (HL7 Europe)](https://hl7.eu/fhir/build/trillium2/site/ipsStructure.html) kilęs iš ES ir JAV projekto, padėjusio pradėti IPS.
- [eHealth Suisse](https://www.ehealthsuisse.ch/) yra Šveicarijos skaitmeninės sveikatos ir IPS diegimo kompetencijos centras.
- [MyHealth@EU, cross-border digital health services](https://health.ec.europa.eu/ehealth-digital-health-and-care/electronic-cross-border-health-services_en)
- [Xt-EHR Joint Action](https://www.xt-ehr.eu/) rengia Europos sveikatos duomenų erdvės formatus, įskaitant paciento santrauką.

### Programinė įranga ir įrankiai

- [IPS Viewer](https://www.ipsviewer.com) ([source: jddamore/IPSviewer](https://github.com/jddamore/IPSviewer)) yra atvirojo kodo, naršyklėje veikianti IPS peržiūros priemonė.
- [uwcirg/shl-ips-viewer](https://github.com/uwcirg/shl-ips-viewer) rodo IPS, kuriuo dalijamasi per SMART Health Link.
- [smart-on-fhir/smart-health-links](https://github.com/smart-on-fhir/smart-health-links) yra SMART Health Links etaloninis įgyvendinimas.
- [HAPI FHIR IPS generator](https://hapifhir.io/hapi-fhir/docs/server_ips/introduction.html) ([source: hapifhir/hapi-fhir](https://github.com/hapifhir/hapi-fhir)) yra atvirojo kodo „Java“ serverio modulis, įgyvendinantis `$summary`.
- [HAPI FHIR JPA server IPS documentation](https://hapifhir.io/hapi-fhir/docs/server_jpa/ips.html)
- [Inferno IPS Test Kit](https://inferno.healthit.gov/test-kits/ips) ([source: inferno-framework/ips-test-kit](https://github.com/inferno-framework/ips-test-kit)) yra atvirojo kodo atitikties testų rinkinys.
- [FHIR Validator](https://validator.fhir.org/) tikrina IPS paketus pagal IG profilius.
- [Simplifier: hl7.fhir.uv.ips package](https://simplifier.net/packages/hl7.fhir.uv.ips) turi paketą, profilius ir pavyzdžius.
- [FHIR package registry](https://registry.fhir.org/)
- [FHIR Shorthand (FSH) School](https://fshschool.org/) moko kalbos, kuria parašytas IPS IG.
- [CommonHealth](https://www.commonhealth.org/) yra pacientų programėlė, kuri generuoja IPS ir dalijasi juo per SMART Health Links.
- [WHO SMART Trust](https://github.com/WorldHealthOrganization/smart-trust) yra PSO Global Digital Health Certification Network pasitikėjimo sistema.

### Organizacijos ir projektai

- [International Patient Summary project site](https://international-patient-summary.net/) turi naujienų, diegimo ataskaitų ir mokymo medžiagos.
- [IPS for health IT developers](https://international-patient-summary.net/health-it-developer/)
- [HL7 International](https://www.hl7.org/)
- [IHE International](https://www.ihe.net/)
- [SNOMED International](https://www.snomed.org/)
- [SNOMED CT IPS Terminology](https://www.snomed.org/international-patient-summary-terminology) yra nemokamas pogrupis naudoti su IPS.
- [LOINC](https://loinc.org/) *(nepatikrinta)*
- [Joint Initiative Council for Global Health Informatics Standardization (JIC)](http://www.jointinitiativecouncil.org/)
- [Global Digital Health Partnership (GDHP)](https://gdhp.health/)
- [WHO SMART Guidelines](https://smart.who.int/)
- [WHO Global Digital Health Certification Network](https://www.who.int/initiatives/global-digital-health-certification-network)

### Bendruomenė ir renginiai

- [chat.fhir.org](https://chat.fhir.org/) yra FHIR bendruomenės pokalbių svetainė, turinti aktyvią IPS gijų dalį.
- [HL7 FHIR Connectathons](https://www.hl7.org/events/fhir-connectathon/)
- [IHE Connectathons](https://www.ihe.net/participate/connectathon/)

### Vaizdo įrašai

- [HIMSS20: IPS for computable care guidelines in 200 seconds or less (IHE International, YouTube)](https://www.youtube.com/watch?v=xjEzGM8kBPw)
- [IHE International YouTube channel](https://www.youtube.com/@IHEIntl) turi Connectathon diskusijas ir IPS sesijas.
- [IPS project site news](https://international-patient-summary.net/) nukreipia į daug įrašytų internetinių seminarų, įskaitant:
  - IPS diskusiją IHE North America Connectathon, 2024 m.
  - IPS sesiją FHIR DevDays 2023
  - Grahame Grieve apie IPS ir IPA, IHE Connectathon Montreux 2022
  - pagrindinį pranešimą SNOMED CT Expo 2022
  - Matthew Rahn apie IPS GDHP
  - HL7 internetinį seminarą „Global Passport“ apie tarpvalstybinį naudojimą
- [YouTube search: International Patient Summary](https://www.youtube.com/results?search_query=international+patient+summary)

### Knygos

- Tim Benson ir Grahame Grieve, [*Principles of Health Interoperability: FHIR, HL7 and SNOMED CT*](https://link.springer.com/book/10.1007/978-3-030-56883-2), 4-asis leidimas, Springer, 2020. Apima FHIR, klinikinių santraukų išteklius ir terminiją.

### Tyrimų darbai ir straipsniai

- Laleci Erturkmen G. B., Sinaci A. A., Namli T., Boonstra M., et al., "[An assessment of the European Patient Summary for clinical research: a case study in cardiology](https://doi.org/10.3389/fmed.2024.1481551)", *Frontiers in Medicine*, 2024.
- Lee H., Huang J., Huang S., Chen W., et al., "[Implementing a Cross-Border Next-Generation Personal Health Record in the Philippines and Taiwan: An Implementation Case Report Using Health Level 7 International Fast Healthcare Interoperability Resources](https://doi.org/10.2196/56272)", *JMIR Formative Research*, 2025.
- Song C., Nakayama M., "[Implementation of a Patient Summary Web Application According to the International Patient Summary and Validation in Common Use Cases in Japan](https://doi.org/10.1007/s10916-023-01993-6)", *Journal of Medical Systems*, 2023.
- Schippers D., Spil T., Stegwee R., Folmer E., Donnelly S., "[The adoption and diffusion of the International Patient Summary](https://doi.org/10.24251/hicss.2025.425)", *Proceedings of the 58th Hawaii International Conference on System Sciences (HICSS)*, 2025.
- da Silva Carvalho N., Papadimitriou A., Stegwee R., Gille H., et al., "[Accelerating European electronic health record exchange format (EEHRxF) implementation across Europe: a policy perspective](https://doi.org/10.3389/fmed.2025.1648170)", *Frontiers in Medicine*, 2025.
- Kay S., Cangioli G., Nusbaum M., "[The International Patient Summary and the extensibility requirement](https://international-patient-summary.net/the-international-patient-summary-and-the-extensibility-requirement/)", *Studies in Health Technology and Informatics* (pHealth), 2020.
- D'Amore J., Cangioli G., Hausam R., "[Advancing the International Patient Summary](https://international-patient-summary.net/advancing-the-international-patient-summary/)"
- "[Towards the Austrian Patient Summary](https://international-patient-summary.net/towards-the-austrian-patient-summary/)", *Studies in Health Technology and Informatics* (dHealth).
- "[Revival of the International Patient Summary (IPS)](https://smiledigitalhealth.com/our-blog/revival-of-the-international-patient-summary-ips)", Smile Digital Health blog.
- [PubMed search: "international patient summary"](https://pubmed.ncbi.nlm.nih.gov/?term=%22international+patient+summary%22) recenzuojamai literatūrai.


## References

Sunumeruotos nuorodos tekste, pavyzdžiui, [1], veda į atitinkamą įrašą žemiau. Nuorodos patikrintos 2026 m. lapkritį. Įstatymai, diegimo duomenys ir versijos keičiasi, todėl dabartinę padėtį tikrinkite šaltinyje.

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

Šie šaltiniai aukščiau necituojami, bet yra pagrindinės pačio standarto nuorodos.

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
