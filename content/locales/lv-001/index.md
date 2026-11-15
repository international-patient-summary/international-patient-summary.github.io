# International Patient Summary (IPS)

**International Patient Summary (IPS)** ir pasaules standarts īsam elektroniskam izrakstam no veselības ieraksta. Tajā ir pamata klīniskie fakti, kas ārstam nepieciešami, lai droši ārstētu pacientu. Tas ir veidots tā, lai būtu:

- **Minimāls un apzināti nepilnīgs.** Tā ir neliela, atlasīta veselības ieraksta apakškopa, nevis viss ieraksts.
- **Neatkarīgs no specialitātes.** To var izmantot jebkurš ārsts jebkurā jomā.
- **Neatkarīgs no slimības.** Tas nav piesaistīts konkrētai slimībai vai ārstēšanas ceļam.
- **Ieviešams un starptautisks.** Tas balstīts uz globāliem standartiem un terminoloģijām, tāpēc to var izmantot dažādās valstīs, valodās un IT sistēmās.

Īsi sakot, IPS atbild uz vienu jautājumu ārstam, kurš pacientu nekad nav saticis: *„Kas man jāzina tieši tagad, lai droši rūpētos par šo cilvēku?”*


## Kāpēc IPS pastāv

Veselības informācija parasti ir ieslēgta vietējā elektroniskajā veselības ierakstā (EVI), valsts sistēmā vai kāda piegādātāja produktā. Kad pacients meklē palīdzību citur, piemēram, citā slimnīcā, reģionā vai valstī, ārstējošajam ārstam bieži nav piekļuves šai vēsturei. IPS visiem piedāvā vienu kopīgu, pārnēsājamu kopsavilkuma formātu.

### Galvenie lietošanas gadījumi

| Lietošanas gadījums | Apraksts |
|---|---|
| **Neplānota un neatliekamā palīdzība** | Pacients saslimst vai gūst traumu tālu no mājām, un vietējie ārsti nevar piekļūt pacienta mājas EVI. Tas ir sākotnējais, galvenais lietošanas gadījums. |
| **Pārrobežu aprūpe** | Ceļotāji, migranti, pārrobežu darbinieki un bēgļi līdzi nes kopsavilkumu, ko var izlasīt ārsti ārzemēs. |
| **Plānota aprūpe un pārejas** | Nosūtījumi, speciālistu konsultācijas, uzņemšana, izrakstīšana un nodošana starp pakalpojumu sniedzējiem. |
| **Medicīniskais tūrisms un mobilitāte** | Pacienti, kuri izvēlas saņemt aprūpi citā jurisdikcijā. |
| **Pacienta iespējošana** | Pacienti glabā, apskata un kopīgo savu kopsavilkumu no tālruņa lietotnes, portāla vai izdrukas. |


## Kad lietot IPS

Lietojiet IPS, kad kādam, kas nepazīst pacientu, ātri vajadzīgs uzticams pašreizējā stāvokļa attēls un kad sūtītājs un saņēmējs neizmanto kopīgu IT sistēmu.

### Labi piemēroti gadījumi

- **Neatliekamā un neplānotā palīdzība**, īpaši tālu no mājām vai pāri robežai. Tieši šim nolūkam IPS tika radīts.
- **Pārrobežu apmaiņa starp valstu sistēmām**, piemēram, ES pakalpojums MyHealth@EU [[1]](#ref-1) [[2]](#ref-2).
- **Pacienta glabāti kopsavilkumi**, ko ceļotāji, migranti, bēgļi, svētceļnieki vai cilvēki ar sarežģītiem stāvokļiem nēsā tālrunī vai uz papīra [[3]](#ref-3).
- **Valsts vai reģionāls pacienta kopsavilkums.** Daudzas valstis veido savu kopsavilkumu kā IPS profilu, lai to varētu apmainīt arī starptautiski [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
- **Kopīgs pamats aprūpes pārejām,** piemēram, nosūtījumiem, uzņemšanai un izrakstīšanai, ja nav pieejams bagātāks specializēts dokuments.
- **Izejas punkts citām datu kopām,** piemēram, vakcinācijas apliecībām, pētījumu datiem vai reģistriem, kam vajadzīgi tie paši pamata fakti [[7]](#ref-7) [[8]](#ref-8).

### Slikti piemēroti gadījumi

- **Pilns medicīniskais ieraksts.** IPS ir apzināti minimāls. Kad svarīgas detaļas, izmantojiet pilnu ieraksta eksportu vai specializētu dokumentu.
- **Specialitātei specifiski dokumenti,** piemēram, onkoloģiskās ārstēšanas kopsavilkums, grūtnieces karte vai detalizēta izraksta epikrīze. Tiem ir savi standarti, kas var ietvert IPS saturu vai uz to atsaukties.
- **Reāllaika klīniskās darbplūsmas vienas organizācijas iekšienē.** Vienas EVI iekšienē vaicājiet pēc dzīvajiem datiem, nevis pēc kopsavilkuma momentuzņēmuma.
- **Juridiski, norēķinu vai apdrošināšanas ieraksti.** IPS ir klīnisks kopsavilkums, nevis administratīvs vai atlīdzības ieraksts.
- **Lēmumi, kuriem nepieciešama garantēta pilnība.** IPS ir tikpat pilnīgs un aktuāls, cik tā avots un autors. Kritiskos faktus vienmēr, kad iespējams, apstipriniet ar pacientu.


## Ko IPS satur

IPS dokumentam ir divi slāņi:

1. **Galvene, kas fiksē, kas, ko un kad:**
   - **Pacients:** identitāte, demogrāfiskie dati un kontaktinformācija.
   - **Autors:** persona, organizācija vai sistēma, kas sagatavoja kopsavilkumu.
   - **Glabātājs (custodian):** organizācija, kas atbild par tā uzturēšanu.
   - **Apliecinātājs (attester):** kas to pārbaudījis, ja kāds.
   - **Datums un laiks:** kad tas izveidots.

2. **Klīniskā daļa, kas sakārtota sadaļās.** Sadaļas ir obligātas, ieteicamas vai neobligātas.

| Sadaļa | Statuss | Tipisks saturs |
|---|---|---|
| **Medication Summary** (zāļu kopsavilkums) | Obligāta | Pašreizējās un nozīmīgās iepriekšējās zāles, receptes, devas |
| **Allergies and Intolerances** (alerģijas un nepanesība) | Obligāta | Alerģijas pret zālēm, pārtiku un vidi; reakcijas un smaguma pakāpe |
| **Problem List** (problēmu saraksts) | Obligāta | Aktīvās diagnozes, stāvokļi un klīniskās problēmas |
| Immunizations (vakcinācijas) | Ieteicama | Saņemtās vakcīnas, piemēram, pret stingumkrampjiem, B hepatītu, gripu, COVID-19 |
| History of Procedures (procedūru vēsture) | Ieteicama | Lielas operācijas un invazīvas iejaukšanās |
| Medical Devices (medicīniskās ierīces) | Ieteicama | Implanti un ierīces, piemēram, elektrokardiostimulatori, stenti, protēzes |
| Diagnostic Results (diagnostikas rezultāti) | Ieteicama | Galvenie laboratorijas rezultāti, attēldiagnostikas atzinumi, patoloģija |
| Vital Signs (dzīvībai svarīgās pazīmes) | Neobligāta | Asinsspiediens, sirdsdarbības ātrums, svars, augums, ĶMI |
| History of Past Illness (iepriekšējo slimību vēsture) | Neobligāta | Izārstēti stāvokļi un nozīmīgas iepriekšējās problēmas |
| Functional Status (funkcionālais stāvoklis) | Neobligāta | Invaliditāte un spēja veikt ikdienas darbības |
| Plan of Care (aprūpes plāns) | Neobligāta | Aprūpes plāni un ārstēšanas ieteikumi |
| Social History (sociālā anamnēze) | Neobligāta | Tabaka, alkohols un citi nozīmīgi dzīvesveida faktori |
| History of Pregnancy (grūtniecību vēsture) | Neobligāta | Pašreizējais grūtniecības stāvoklis un iepriekšējās grūtniecības |
| Advance Directives (iepriekšējie rīkojumi) | Neobligāta | Iepriekš izteikta griba par ārstēšanu, vēlmes attiecībā uz reanimāciju, piekrišanas paziņojumi |
| Alerts (brīdinājumi) | Neobligāta | Drošībai kritiski brīdinājumi, kas nederēs citur (pievienots FHIR IPS STU 2) |
| Patient Story (pacienta stāsts) | Neobligāta | Kas pacientam ir svarīgi: vajadzības, stiprās puses, vērtības, bažas un vēlmes pacienta paša vārdiem (pievienots FHIR IPS STU 2) |

**Svarīgi skaidri pateikt „nekas”.** Tukša sadaļa ārstam nepasaka, vai pacientam nav alerģiju, vai arī tās neviens nav ierakstījis. Tāpēc IPS sagaida skaidrus apgalvojumus, piemēram, *„zināmu alerģiju nav”*, *„pašlaik zāļu nav”* vai *„informācija nav pieejama”*.


## Standarti, kas ir IPS pamatā

IPS ir saskaņotu standartu saime. ISO un CEN standarti nosaka, *kas* pacienta kopsavilkumam jāsatur. HL7 ieviešanas ceļveži nosaka, *kā* to kodēt.

| Standarts | Institūcija | Loma |
|---|---|---|
| **EN 17269** | CEN (Eiropas Standartizācijas komiteja) | Abstraktā IPS datu kopa, publicēta 2019. gadā |
| **ISO 27269** | ISO (Starptautiskā Standartizācijas organizācija) | Abstraktās IPS datu kopas starptautiskā versija, publicēta 2021. gadā |
| **CEN/TS 17288** | CEN | Norādījumi IPS ieviešanai pārrobežu lietošanai |
| **HL7 FHIR IPS Implementation Guide** | HL7 International | Mūsdienīgs, API draudzīgs kodējums un galvenais ieviešanas formāts. STU 2 (2.0.x) pievienoja sadaļas Alerts un Patient Story, atļāva tukšas sadaļas, precizēja `$summary` un pārgāja uz SNOMED CT IPS terminoloģiju [[9]](#ref-9). |
| **HL7 CDA IPS Implementation Guide** | HL7 International | Uz XML balstīts dokumentu kodējums, kas ierasts esošajās valstu un Eiropas infrastruktūrās |

Darbu koordinē **Joint Initiative Council for Global Health Informatics Standardization (JIC)**. JIC apvieno ISO, CEN, HL7, SNOMED International, IHE un citus. IPS izauga no 2016. gada ES un ASV sadarbības pārrobežu veselības datu jomā, un tagad to atbalsta valdības un digitālās veselības programmas visā pasaulē.


## Kā IPS tiek kodēts ar HL7 FHIR

FHIR sistēmā IPS ir viens **`Bundle`** ar tipu `document`:

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

Galvenie tehniskie punkti:

- **Katrai sadaļai ir cilvēkam lasāms stāstījums.** Ārsts var izlasīt IPS parastā pārlūkprogrammā, pat bez FHIR programmatūras.
- **Katrai sadaļai ir arī kodēti ieraksti**, proti, strukturēti FHIR resursi, ko programmatūra var apstrādāt, tulkot un saskaņot.
- **Profili ierobežo pamata FHIR resursus.** Piemēram, *Patient (IPS)* un *AllergyIntolerance (IPS)* nosaka minimālos datus un elementus „must support”.
- **Darbība `$summary`** (`GET [base]/Patient/[id]/$summary`) lūdz FHIR serverim pēc pieprasījuma ģenerēt pacienta IPS.
- **IPS var parakstīt, un tas ir pašpietiekams.** Pilnu dokumentu var glabāt, sūtīt, parakstīt un pārbaudīt kā vienu veselu.


## Terminoloģijas

Kopīgas kodu sistēmas padara IPS lasāmu dažādās valodās un valstīs:

| Terminoloģija | Kam izmanto |
|---|---|
| **SNOMED CT** | Problēmas, alerģijas, procedūras, ierīces, klīniskie atradumi. Bezmaksas apakškopa **SNOMED CT IPS Terminology** ir pieejama lietošanai ar IPS, arī valstīs, kas nav dalībnieces. |
| **LOINC** | Dokumentu un sadaļu veidi, laboratorijas testi, dzīvībai svarīgās pazīmes |
| **ATC** un citas zāļu kodu sistēmas | Zāļu produkti un aktīvās vielas |
| **UCUM** | Mērvienības |
| **ISO un HL7 vērtību kopas** | Valstis, valodas, administratīvais dzimums, trūkstošu un nezināmu datu iemesli |

Tā kā ieraksti ir kodēti, saņēmēja sistēma var parādīt portugāļu valodā rakstītu IPS ar angļu valodas etiķetēm. Kodētā nozīme paliek tā pati.


## Kā IPS izmanto pacienti un ārsti

IPS var radīt EVI, valsts veselības ierakstu pakalpojums, pacientu portāls vai personīga veselības lietotne. Pēc tam to var piegādāt vairākos veidos:

- **No sistēmas uz sistēmu:** izmantojot FHIR REST API, valstu infrastruktūras vai pārrobežu vārtejas, piemēram, ES tīklu MyHealth@EU.
- **Kopīgošana ar pacienta starpniecību:** pacients glabā kopsavilkumu makā vai veselības lietotnē un kopīgo to pēc nepieciešamības.
- **SMART Health Links:** QR kods vai URL, kas ārstam dod laikā ierobežotu, pēc izvēles ar piekļuves kodu aizsargātu piekļuvi šifrētam IPS. Ārsts to var atvērt parastā tīmekļa pārlūkprogrammā.
- **Papīrs vai PDF:** izdrukāts stāstījuma attēlojums kā rezerves variants, kad nekas cits nedarbojas.

Lietotnes, piemēram, **CommonHealth**, ļauj pacientiem apkopot ierakstus un kopīgot IPS ar SMART Health Links palīdzību.

Tipisks neatliekamās palīdzības scenārijs:

1. Ceļotājs ārzemēs sabrūk.
2. Ceļotājs vai viņa pavadonis parāda QR kodu no tālruņa.
3. Neatliekamās palīdzības ārsts to noskenē un dažās sekundēs redz ceļotāja zāles, alerģijas un aktīvās problēmas.
4. Ārsts izvairās no bīstamas zāļu mijiedarbības un droši ārstē pacientu.


## Principi un dizaina izvēles

- **Drošība pirmajā vietā.** Saturu izvēlas pēc klīniskās nozīmības, nevis pilnības.
- **Globāls pēc noklusējuma, lokāls ar paplašinājumiem.** Valstis veido nacionālos profilus, piemēram, ES, Austrālijas vai Kanādas variantus, kas pievieno prasības, nesalaužot starptautisko kodolu.
- **Cilvēkam lasāms un mašīnai apstrādājams.** Stāstījums un kodēti dati pastāv līdzās.
- **Bezmaksas un atvērts.** HL7 IPS specifikācijas un SNOMED CT apakškopa IPS ir brīvi pieejamas, lai mazinātu šķēršļus pieņemšanai.
- **Privātums un piekrišana.** Piekļuvi regulē vietējie tiesību akti un pacienta piekrišana. Mehānismi, piemēram, SMART Health Links, atstāj kontroli pacienta rokās.


## Kā lietot IPS

### Pacientiem

1. **Palūdziet to.** Pajautājiet savai klīnikai, slimnīcai, valsts veselības portālam vai veselības lietotnei, vai tie var izveidot IPS vai uz tā balstītu valsts pacienta kopsavilkumu.
2. **Pārbaudiet to.** Izlasiet to, kamēr esat vesels. Ziņojiet par visu nepareizo vai trūkstošo, īpaši par alerģijām un zālēm.
3. **Turiet to līdzi.** Glabājiet to veselības lietotnē vai makā, kā SMART Health Link QR kodu vai kā izdruku kopā ar ceļošanas dokumentiem.
4. **Uzturiet to aktuālu.** Iegūstiet jaunu pēc jaunas diagnozes, jaunām ilgtermiņa zālēm, operācijas vai implanta.
5. **Kopīgojiet to apzināti.** Parādiet to ārstam, kas jūs ārstē. SMART Health Link var beigties un var pieprasīt piekļuves kodu, tāpēc jūs kontrolējat, kas to redz un cik ilgi [[10]](#ref-10).

### Ārstiem

1. **Vispirms pārbaudiet galveni.** Kas to uzrakstīja, kad un vai kāds to pārbaudījis. Vecs vai nepārbaudīts kopsavilkums prasa lielāku piesardzību.
2. **Vispirms izlasiet obligātās sadaļas:** alerģijas, zāles un problēmas.
3. **Atšķiriet „nekas nav zināms” no „nav ierakstīts”.** „Zināmu alerģiju nav” ir klīnisks apgalvojums. Tukša vai „nezināma” sadaļa tāda nav.
4. **Apstipriniet kritiskos faktus** ar pacientu vai viņa pavadoni, kad vien varat.
5. **Izmantojiet kodētos datus.** Ja jūsu sistēma to atbalsta, kodēti ieraksti ļauj kopsavilkumu parādīt jūsu valodā un pārbaudīt pēc zāļu mijiedarbības un alerģiju noteikumiem.
6. **Nepieņemiet, ka tas ir pilnīgs.** IPS ir drošības tīkls, nevis pilna vēsture.

### Ieviesējiem

1. **Izvēlieties specifikāciju.** Izmantojiet pašreizējo HL7 FHIR IPS Implementation Guide (STU 2) vai savas valsts nacionālo profilu. CDA balstītām infrastruktūrām izmantojiet CDA IPS ceļvedi [[9]](#ref-9) [[11]](#ref-11).
2. **Saistiet savus datus.** Saistiet vietējos datus ar IPS profiliem: `Patient`, `AllergyIntolerance`, `MedicationStatement`, `Condition` un tā tālāk. Lielākā darba daļa ir šajā saistīšanā.
3. **Saistiet savu terminoloģiju.** Saistiet vietējos kodus ar SNOMED CT, LOINC un zāļu kodu sistēmām. SNOMED CT IPS Terminology šim mērķim ir bezmaksas [[12]](#ref-12).
4. **Ģenerējiet dokumentu.** Atbalstiet darbību `$summary` vai paši izveidojiet `Bundle` un `Composition`. Katrai sadaļai iekļaujiet lasāmu stāstījumu un skaidrus apgalvojumus „nekas nav zināms” vai „nav pieejams”.
5. **Validējiet to.** Pārbaudiet katru ģenerēto dokumentu ar FHIR Validator un atbilstības testu komplektu, piemēram, Inferno IPS Test Kit [[13]](#ref-13).
6. **Parakstiet un kopīgojiet to.** Izlemiet, kā dokumentus paraksta, glabā un sūta: ar API, dokumentu reģistru, pārrobežu vārteju vai SMART Health Link.
7. **Saņemiet to droši.** Kā saņēmējs parādiet stāstījumu pat tad, ja nevarat apstrādāt visus kodētos ierakstus, saglabājiet redzamu avotu un autoru un nekad klusi nesapludiniet saņemtos datus ar vietējo ierakstu.
8. **Testējiet kopā ar citiem.** Pirms palaišanas pārbaudiet sadarbspēju ar citiem piegādātājiem un valstīm IHE un HL7 Connectathon pasākumos.

### Valdībām un veselības organizācijām

1. **Pieņemiet nacionālo profilu,** kas balstās uz IPS, nevis atsevišķu formātu, lai valsts kopsavilkums pēc noklusējuma būtu starptautisks [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
2. **Nokārtojiet pārvaldību:** kas drīkst izveidot, atjaunināt un apliecināt kopsavilkumu un kas atbild par tā precizitāti.
3. **Nokārtojiet terminoloģijas licencēšanu:** SNOMED CT dalību vai bezmaksas IPS apakškopas izmantošanu.
4. **Nokārtojiet identitāti, piekrišanu un uzticēšanos:** kā pacientus identificē, kā reģistrē piekrišanu un kādu uzticēšanās ietvaru, piemēram, MyHealth@EU vai PVO Global Digital Health Certification Network, izmanto dokumentu pārbaudei [[1]](#ref-1) [[14]](#ref-14).
5. **Publicējiet to, ko esat izveidojuši,** IPS Implementation Registry, lai citi varētu no tā mācīties [[15]](#ref-15).


## IPS integrēšana ar veselības aprūpes sistēmām

IPS reti ir atsevišķa sistēma. Tas ir skats uz datiem, kas jau atrodas EVI, veselības informācijas apmaiņās, valsts ierakstos un personīgajās veselības lietotnēs.

| Integrācijas modelis | Kā tas darbojas | Piemēri |
|---|---|---|
| **Ģenerē EVI** | EVI pēc pieprasījuma izveido IPS no saviem datiem, bieži ar FHIR darbību `$summary`. | EVI piegādātāji un FHIR serveri, piemēram, HAPI FHIR, kam ir IPS ģeneratora modulis |
| **Valsts vai reģionāls ieraksts** | Valsts pacientu kopsavilkumu pakalpojums glabā IPS profilu un padara to pieejamu pilnvarotiem pakalpojumu sniedzējiem. | Kanādas PS-CA, Austrālijas AU Patient Summary, Šveices elektroniskais pacienta ieraksts ar CH IPS [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6) |
| **Pārrobežu vārteja** | Katra valsts darbina nacionālo kontaktpunktu. Tas pārveido izcelsmes valsts kopsavilkumu saskaņotā apmaiņas formātā, nosūta to pāri robežai, un saņēmēja valsts to parāda vietējā valodā. | MyHealth@EU National Contact Points for eHealth [[1]](#ref-1) [[2]](#ref-2) |
| **Reģionāls apmaiņas tīkls** | Veselības ministrijas apmainās ar IPS dokumentiem caur valstu FHIR serveriem pēc kopīga reģionāla ceļveža. | RACSEL IPS-LAC un Pan American Highway for Digital Health (PH4H) Latīņamerikā un Karību jūras reģionā [[16]](#ref-16) |
| **Ar pacienta starpniecību** | Pacients glabā IPS lietotnē vai makā un kopīgo to ar QR kodu vai SMART Health Link. | CommonHealth; PVO uzticēšanās tīkla IPS darbs svētceļojumiem [[10]](#ref-10) [[14]](#ref-14) |
| **Piekļuve ar API** | Lietotnes iegūst pilnvarota pacienta IPS, izmantojot FHIR API. | International Patient Access (IPA); ASV tīkli, piemēram, Flexpa, kas pievienoja IPS atbalstu CMS Interoperability Framework ietvaros [[17]](#ref-17) [[18]](#ref-18) |

Integrācijas punkti, kas jāplāno:

- **Dokumentu kopīgošana:** IHE profili, piemēram, MHD (FHIR) un XDS (dokumentu reģistri), glabā un atrod IPS dokumentus. IHE IPS satura profili pievieno atbilstības un testēšanas noteikumus [[11]](#ref-11).
- **Pacienta identitāte:** IHE PIXm un PDQm vai valsts identifikators savieno pacientu starp sistēmām.
- **Esošie dokumenti:** daudzas sistēmas jau veido CDA, C-CDA vai valsts kopsavilkumus. To saistīšana ar IPS parasti ir vieglāka nekā sākt no jauna, taču pārbaudiet atšķirības kardinalitātē, vērtību kopās un kodu sistēmās.
- **Valsts profili:** valsts kodols, piemēram, US Core, AU Core, CH Core vai JP Core, var atšķirties no IPS. Valsts pacienta kopsavilkuma profili tos saskaņo [[5]](#ref-5) [[6]](#ref-6) [[19]](#ref-19).
- **Tulkošana un attēlošana:** saņēmējiem jāattēlo stāstījums un jātulko kodētie ieraksti, izmantojot kodu attēlojamos nosaukumus saņēmēja valodā.
- **Drošība:** izmantojiet TLS, parakstītus dokumentus, kur tas nepieciešams, audita žurnālu (piemēram, IHE ATNA vai BALP) un ar piekrišanu saistītu piekļuves kontroli.


## Pašreizējā ieviešana

IPS no izmēģinājumiem ir pārgājis uz valstu un reģionu programmām. Situācija mainās ātri, tāpēc jaunāko stāvokli skatiet saistītajos avotos.

- **IPS Implementation Registry.** IPS kopiena uztur publisku ieviešanu reģistru. 2026. gada vidū tajā bija 34 ieraksti, sākot ar Argentīnas pakalpojumu sniedzēju starpniecības IPS-LAC projektu un beidzot ar Vjetnamas Better Health Program [[15]](#ref-15).
- **FHIR ekosistēma.** HL7 International un Firely 2025. gada aptaujā State of FHIR 42 respondenti teica, ka IPS ir viņu valsts FHIR specifikāciju pamatā, vairāk nekā jebkurš cits starptautisks ceļvedis [[20]](#ref-20).
- **Pētniecība.** 2025. gada pētījumā par IPS ieviešanu tika intervēti ieinteresētie, kuri kā galvenos ieguvumus minēja labāku aprūpes kvalitāti un pacientu drošību [[21]](#ref-21).

| Valsts vai reģions | Stāvoklis |
|---|---|
| **Eiropas Savienība un EEZ** | MyHealth@EU apmainās ar pacientu kopsavilkumiem un e-receptēm starp valstīm. Eiropas Komisijas 2026. gada prezentācijā ziņots, ka darbojas 17 dalībvalstis un Norvēģija, bet lielākā daļa pārējo plāno pievienoties [[2]](#ref-2) [[22]](#ref-22). EHDS regula padara pacientu kopsavilkumu apmaiņu obligātu līdz 2029. gadam [[23]](#ref-23). |
| **Kanāda** | Visas Kanādas pacienta kopsavilkums (PS-CA), ko Canada Health Infoway apstiprināja 2022. gada oktobrī, ir balstīts uz IPS ar Kanādas pielāgojumiem [[4]](#ref-4). |
| **Austrālija** | AU Patient Summary, kas balstīts uz IPS un AU Core, tiek izstrādāts HL7 Australia programmā Sparked [[5]](#ref-5) [[24]](#ref-24). |
| **Šveice** | HL7 Switzerland CH IPS 2.0.0 (izmēģinājuma lietošana) balstās uz IPS un CH Core. Atsevišķs profils pievieno to, kas vajadzīgs Šveices elektroniskajam pacienta ierakstam [[6]](#ref-6). |
| **Amerikas Savienotās Valstis** | Federāla pilnvarojuma IPS nav. ASV izmanto US Core un USCDI. Federālās aģentūras piedalās starptautiskajā IPS darbā, un daži tīkli IPS atbalsta brīvprātīgi [[18]](#ref-18). |
| **Latīņamerika un Karību jūras reģions** | RACSEL veselības ministrijas izmanto reģionālo ceļvedi IPS-LAC. 2023. gadā 16 valstis apmainījās ar IPS-LAC dokumentiem connectathon pasākumā Sanpaulu [[16]](#ref-16). |
| **Japāna** | Pētnieki izveidoja un validēja uz IPS balstītu pacienta kopsavilkuma lietojumprogrammu izplatītiem Japānas lietošanas gadījumiem, izmantojot JP Core [[19]](#ref-19). |
| **Taivāna un Filipīnas** | 2025. gada ieviešanas ziņojums apraksta pārrobežu personīgo veselības ierakstu, kas izmanto FHIR un ir saskaņots ar IPS [[25]](#ref-25). |
| **G7** | 2021. gadā G7 veselības ministri apņēmās strādāt IPS virzienā un publicēja IPS ceļvedi [[26]](#ref-26). |
| **PVO** | PVO Global Digital Health Certification Network ietver uz IPS balstītus uzticēšanās domēnus, piemēram, pārbaudāmu IPS svētceļojumiem [[14]](#ref-14). |


## Likumi, noteikumi un politika pa valstīm un reģioniem

IPS ir standarts, nevis likums. Likumi nosaka, vai valstij jāapmainās ar pacientu kopsavilkumiem, kādā formātā un pēc kādiem privātuma noteikumiem. Šis ir kopsavilkums, nevis juridisks padoms. Vienmēr pārbaudiet likuma spēkā esošo tekstu.

| Jurisdikcija | Likums vai politika | Ko tas nozīmē IPS |
|---|---|---|
| **Eiropas Savienība** | **Eiropas veselības datu telpas regula (EHDS), (ES) 2025/327.** Publicēta 2025. gada 5. martā; stājās spēkā 2025. gada 26. martā [[23]](#ref-23) [[27]](#ref-27). | Pacientu kopsavilkumi ir „prioritāra kategorija”. Apmaiņai Eiropas elektronisko veselības ierakstu apmaiņas formātā jādarbojas katrā dalībvalstī līdz 2029. gadam. Medicīniskie attēli, izmeklējumu rezultāti un izrakstu epikrīzes seko līdz 2031. gadam [[28]](#ref-28). Pacientu kopsavilkumu formāts balstās uz HL7 IPS. |
| **Eiropas Savienība** | **Direktīva 2011/24/ES** par pacientu tiesību piemērošanu pārrobežu veselības aprūpē [[29]](#ref-29). | Izveidoja e-veselības tīklu (eHealth Network), kas vienojās par pacienta kopsavilkuma vadlīnijām, kas ir MyHealth@EU pamatā. |
| **Eiropas Savienība** | **Vispārīgā datu aizsardzības regula (VDAR), (ES) 2016/679** [[30]](#ref-30). | Veselības dati ir īpaša kategorija. Katrai IPS apmaiņai nepieciešams tiesiskais pamats un atbilstoši aizsardzības pasākumi. |
| **Amerikas Savienotās Valstis** | **21st Century Cures Act un informācijas bloķēšanas noteikumi** [[31]](#ref-31); brīvprātīgais **CMS Interoperability Framework** (2025) [[17]](#ref-17). | Neviens likums neprasa IPS. Likumi prasa piekļuvi elektroniskajai veselības informācijai un tās apmaiņu, izmantojot US Core un USCDI. IPS atbalsts ir brīvprātīgs. |
| **Kanāda** | Provinču un teritoriju veselības informācijas likumi. Federālais **Connected Care for Canadians Act** (likumprojekts C-72) tika iesniegts 2024. gadā, bet netika pieņemts, pirms parlamenta sesija 2025. gadā tika pārtraukta. | PS-CA ir visas Kanādas specifikācija, nevis juridiska prasība. Ieviešanu vada provinces un teritorijas kopā ar Canada Health Infoway [[4]](#ref-4). |
| **Apvienotā Karaliste** | **Data (Use and Access) Act 2025** [[32]](#ref-32). | Ietver pilnvaras noteikt informācijas standartus veselības un pieaugušo sociālās aprūpes IT jomā. Apvienotā Karaliste uzņēma G7 saistības par IPS 2021. gadā [[26]](#ref-26). |
| **Austrālija** | **My Health Records Act 2012** un 2025. gada grozījumi par „kopīgošanu pēc noklusējuma”. | AU Patient Summary ir valsts specifikācija, kas izstrādāta ar Sparked starpniecību [[5]](#ref-5) [[24]](#ref-24). |
| **Šveice** | **2015. gada 19. jūnija federālais likums par elektronisko pacienta ierakstu (EPRA, SR 816.1)**, spēkā kopš 2017. gada 15. aprīļa [[33]](#ref-33). | CH IPS ietver profilu dokumentiem Šveices elektroniskajā pacienta ierakstā [[6]](#ref-6). |
| **Latīņamerika un Karību jūras reģions** | Reģionāli nolīgumi ar RACSEL un PH4H starpniecību, ar Inter-American Development Bank atbalstu reģionālam tiesiskajam ietvaram [[16]](#ref-16). | IPS-LAC ir saskaņotais reģionālais formāts pārrobežu apmaiņai. |
| **G7** | **Veselības ministru komunikē**, Oksforda, 2021. gada jūnijs, un **G7 IPS Roadmap**, 2021. gada decembris [[26]](#ref-26) [[34]](#ref-34). | Politiska apņemšanās strādāt IPS un pacientu piekļuves virzienā, nevis saistošs likums. |


## Plusi un mīnusi

| Plusi | Mīnusi |
|---|---|
| **Drošāka neplānota aprūpe.** Ārsti dažās sekundēs redz alerģijas, zāles un problēmas. | **Tikai tik labs, cik tā avots.** Novecojuši vai nepareizi avota dati dod novecojušu vai nepareizu kopsavilkumu. |
| **Viens formāts visā pasaulē.** Viena ieviešana apkalpo gan valsts, gan pārrobežu vajadzības. | **Valstu atšķirības.** Nacionālie profili pievieno noteikumus, tāpēc „derīgam IPS” vienā valstī var būt nepieciešams darbs, lai to pieņemtu citā. |
| **Balstīts uz atvērtiem, nobriedušiem standartiem:** ISO, CEN, HL7 FHIR un CDA, SNOMED CT un LOINC. | **Terminoloģijas slogs.** Vietējo kodu saistīšana ar SNOMED CT un LOINC ir smags darbs, un pilns SNOMED CT prasa licenci ārpus bezmaksas IPS apakškopas. |
| **Lasāms un aprēķināms.** Stāstījums cilvēkiem, kodēti dati programmatūrai un tulkošanai. | **Stāstījums un kodētie dati var neatbilst viens otram,** ja ģenerators ir nolaidīgs, un saņēmēji var uzticēties nepareizajam. |
| **Pacienta iespējošana.** Pacienti var glabāt un kopīgot savu kopsavilkumu. | **Privātuma un piekrišanas risks.** Pārnēsājams kopsavilkums ir jutīgs, un likumi un piekrišanas modeļi valstīs atšķiras. |
| **Bezmaksas specifikācijas** un bezmaksas IPS terminoloģija samazina izmaksas [[12]](#ref-12). | **Biežas versiju maiņas.** STU 1, STU 1.1 un STU 2 pastāv vienlaikus, un EHDS formāts atsaucas uz agrāku versiju [[28]](#ref-28). |
| **Atkārtoti izmantojams** vakcinācijas apliecībām, pētniecībai un reģistriem [[7]](#ref-7) [[8]](#ref-8). | **Apzināti minimāls.** Neaizstāj pilnus ierakstus vai specialitāšu dokumentus, un nepilnībām sekundārai izmantošanai nepieciešami paplašinājumi [[7]](#ref-7). |
| **Spēcīgs atbalsts** no valdībām, ES, G7, PVO un standartizācijas institūcijām. | **Nevienmērīga ieviešana.** Daudzas valstis un piegādātāji vēl izmēģina, un pacientu informētība ir zema. |


## Plāni un nākotnes virzieni

- **ES, 2029:** pacientu kopsavilkumu un e-recepšu apmaiņa darbojas visās ES dalībvalstīs saskaņā ar EHDS [[23]](#ref-23) [[28]](#ref-28).
- **ES, 2031:** medicīniskie attēli, laboratorijas rezultāti un izrakstu epikrīzes pievienojas Eiropas elektronisko veselības ierakstu apmaiņas formātam [[28]](#ref-28).
- **MyHealth@EU paplašināšana:** vairāk valstu pievienojas un rodas jauni pakalpojumi laboratorijas rezultātiem, izrakstu epikrīzēm un medicīniskajiem attēliem [[2]](#ref-2) [[22]](#ref-22).
- **FHIR IPS STU 2 ieviešana:** ieviesēji pāriet uz sadaļām Alerts un Patient Story, skaidrām tukšām sadaļām un SNOMED CT IPS terminoloģiju [[9]](#ref-9).
- **Austrālija:** AU Patient Summary Release 1 publicēšana, plānota 2026. gadam [[24]](#ref-24).
- **IPS Best Practices Project:** kopienas centieni dokumentēt gūtās atziņas, darbs sākas 2026. gadā.
- **PVO uzticēšanās tīkls:** vairāk uz IPS balstītu uzticēšanās domēnu pārbaudāmiem, pārnēsājamiem veselības dokumentiem [[14]](#ref-14).
- **SMART Health Links:** standartizēti ar HL7 starpniecību, pacienta kontrolētai kopīgošanai [[10]](#ref-10).
- **Latīņamerika un Karību jūras reģions:** plašāka IPS-LAC apmaiņa ar PH4H starpniecību [[16]](#ref-16).
- **Pētniecība un sekundārā izmantošana:** darbs, lai paplašinātu pacientu kopsavilkumus klīniskajiem pētījumiem un mākslīgajam intelektam, saglabājot minimālu kodolu [[7]](#ref-7).


## Glosārijs

| Termins | Nozīme |
|---|---|
| **IPS** | International Patient Summary |
| **FHIR** | Fast Healthcare Interoperability Resources, HL7 mūsdienīgais uz API balstītais standarts |
| **CDA** | Clinical Document Architecture, HL7 XML dokumentu standarts |
| **IG** | Implementation Guide, profilu un noteikumu kopums standarta piemērošanai |
| **Profils** | FHIR resursa ierobežota versija konkrētam lietojumam |
| **SNOMED CT** | Systematized Nomenclature of Medicine – Clinical Terms |
| **LOINC** | Logical Observation Identifiers Names and Codes |
| **SMART Health Links** | Standarts veselības datu kopīgošanai ar saiti vai QR kodu |
| **JIC** | Joint Initiative Council for Global Health Informatics Standardization |


## Uzziniet vairāk

- HL7 FHIR IPS Implementation Guide: <https://hl7.org/fhir/uv/ips/>
- IPS continuous build: <https://build.fhir.org/ig/HL7/fhir-ips/>
- International Patient Summary project site: <https://international-patient-summary.net/>
- ISO 27269 (Health informatics — International patient summary): <https://www.iso.org/standard/79491.html>
- SNOMED CT IPS Terminology: <https://www.snomed.org/international-patient-summary-terminology>
- SMART Health Links: <https://docs.smarthealthit.org/smart-health-links/>


## Resursi

Šīs saites aptver avotus, specifikācijas, programmatūru, projektus, videoklipus, grāmatas un pētījumus par IPS. Lielākā daļa tika pārbaudīta, kad šī lapa tika rakstīta. Dažas izdevēju vietnes bloķē automātisku pārbaudi, un tās ir atzīmētas ar *(nav pārbaudīts)*.

### Oficiālās specifikācijas un standarti

- [HL7 FHIR IPS Implementation Guide, current published version](https://hl7.org/fhir/uv/ips/) ir autoritatīvā FHIR specifikācija.
- [HL7 FHIR IPS Implementation Guide, STU 2](https://hl7.org/fhir/uv/ips/STU2/)
- [HL7 FHIR IPS Implementation Guide, STU 1.1](https://hl7.org/fhir/uv/ips/STU1.1/)
- [HL7 FHIR IPS publication history](https://www.hl7.org/fhir/uv/ips/history.html) uzskaita katru publicēto versiju.
- [HL7 FHIR IPS continuous build](https://build.fhir.org/ig/HL7/fhir-ips/) ir jaunākais darbs procesā, par kuru vēl nav balsots.
- [Structure of the International Patient Summary](https://hl7.org/fhir/uv/ips/en/Structure-of-the-International-Patient-Summary.html) izskaidro sadaļas un profilus.
- [IPS design conventions](https://build.fhir.org/ig/HL7/fhir-ips/en/Design-Conventions.html) aptver must-support, trūkstošus datus un stāstījumu.
- [IPS generation and data inclusion](https://build.fhir.org/ig/HL7/fhir-ips/en/Generation-and-Data-Inclusion.html) aptver `$summary` un satura atlasi.
- [HL7 CDA IPS Implementation Guide, continuous build](https://build.fhir.org/ig/HL7/CDA-IPS/)
- [HL7 CDA IPS product brief](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=483)
- [ISO 27269, Health informatics — International patient summary](https://www.iso.org/standard/79491.html) *(nav pārbaudīts)*
- [ISO/TC 215 Health informatics committee](https://www.iso.org/committee/54960.html) *(nav pārbaudīts)*
- [IHE FHIR International Patient Summary profile (FIIO)](https://profiles.ihe.net/PCC/FIIO/volume-1.html)
- [IHE PCC International Patient Summary supplement, 2020 (PDF)](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS_Rev1-0_PC_2020-03-17.pdf)
- [HL7 SMART Health Cards and Links Implementation Guide](https://hl7.org/fhir/uv/smart-health-cards-and-links/)
- [SMART Health Links documentation](https://docs.smarthealthit.org/smart-health-links/)
- [HL7 FHIR International Patient Access (IPA)](https://hl7.org/fhir/uv/ipa/) ir radniecīga specifikācija pacientu piekļuvei ar API.
- [HL7 FHIR R4 base specification](https://hl7.org/fhir/R4/), uz kuras balstās IPS.

### Pirmkoda krātuves

- [HL7/fhir-ips](https://github.com/HL7/fhir-ips) satur FHIR IPS IG avotu FHIR Shorthand valodā.
- [HL7/cda-ips](https://github.com/HL7/cda-ips) satur CDA IPS IG avotu.
- [hl7-eu/eps](https://github.com/hl7-eu/eps) satur HL7 Europe Patient Summary avotu.
- [hl7ch/ch-ips](https://github.com/hl7ch/ch-ips) satur Šveices IPS ar izstrādē esošu skatītāju un ģeneratoru.
- [GitHub topic: international-patient-summary](https://github.com/topics/international-patient-summary) uzskaita kopienas krātuves.

### Valstu un reģionu pielāgojumi

- [HL7 Europe Patient Summary (EPS), continuous build](https://build.fhir.org/ig/hl7-eu/eps/)
- [AU Patient Summary (Australia), continuous build](https://build.fhir.org/ig/hl7au/au-fhir-ps/)
- [Trillium II IPS structure (HL7 Europe)](https://hl7.eu/fhir/build/trillium2/site/ipsStructure.html) nāk no ES un ASV projekta, kas palīdzēja uzsākt IPS.
- [eHealth Suisse](https://www.ehealthsuisse.ch/) ir Šveices digitālās veselības un IPS ieviešanas kompetences centrs.
- [MyHealth@EU, cross-border digital health services](https://health.ec.europa.eu/ehealth-digital-health-and-care/electronic-cross-border-health-services_en)
- [Xt-EHR Joint Action](https://www.xt-ehr.eu/) sagatavo Eiropas veselības datu telpas formātus, tostarp pacienta kopsavilkumu.

### Programmatūra un rīki

- [IPS Viewer](https://www.ipsviewer.com) ([source: jddamore/IPSviewer](https://github.com/jddamore/IPSviewer)) ir atvērtā pirmkoda, pārlūkprogrammā strādājošs IPS skatītājs.
- [uwcirg/shl-ips-viewer](https://github.com/uwcirg/shl-ips-viewer) attēlo IPS, kas kopīgots ar SMART Health Link.
- [smart-on-fhir/smart-health-links](https://github.com/smart-on-fhir/smart-health-links) ir SMART Health Links references ieviešana.
- [HAPI FHIR IPS generator](https://hapifhir.io/hapi-fhir/docs/server_ips/introduction.html) ([source: hapifhir/hapi-fhir](https://github.com/hapifhir/hapi-fhir)) ir atvērtā pirmkoda Java servera modulis, kas ievieš `$summary`.
- [HAPI FHIR JPA server IPS documentation](https://hapifhir.io/hapi-fhir/docs/server_jpa/ips.html)
- [Inferno IPS Test Kit](https://inferno.healthit.gov/test-kits/ips) ([source: inferno-framework/ips-test-kit](https://github.com/inferno-framework/ips-test-kit)) ir atvērtā pirmkoda atbilstības testu komplekts.
- [FHIR Validator](https://validator.fhir.org/) validē IPS paketes pret IG profiliem.
- [Simplifier: hl7.fhir.uv.ips package](https://simplifier.net/packages/hl7.fhir.uv.ips) satur paketi, profilus un piemērus.
- [FHIR package registry](https://registry.fhir.org/)
- [FHIR Shorthand (FSH) School](https://fshschool.org/) māca valodu, kurā uzrakstīts IPS IG.
- [CommonHealth](https://www.commonhealth.org/) ir pacientu lietotne, kas ģenerē IPS un kopīgo to ar SMART Health Links.
- [WHO SMART Trust](https://github.com/WorldHealthOrganization/smart-trust) ir uzticēšanās ietvars PVO Global Digital Health Certification Network.

### Organizācijas un projekti

- [International Patient Summary project site](https://international-patient-summary.net/) ir ziņas, ieviešanas ziņojumi un izglītojoši materiāli.
- [IPS for health IT developers](https://international-patient-summary.net/health-it-developer/)
- [HL7 International](https://www.hl7.org/)
- [IHE International](https://www.ihe.net/)
- [SNOMED International](https://www.snomed.org/)
- [SNOMED CT IPS Terminology](https://www.snomed.org/international-patient-summary-terminology) ir bezmaksas apakškopa lietošanai ar IPS.
- [LOINC](https://loinc.org/) *(nav pārbaudīts)*
- [Joint Initiative Council for Global Health Informatics Standardization (JIC)](http://www.jointinitiativecouncil.org/)
- [Global Digital Health Partnership (GDHP)](https://gdhp.health/)
- [WHO SMART Guidelines](https://smart.who.int/)
- [WHO Global Digital Health Certification Network](https://www.who.int/initiatives/global-digital-health-certification-network)

### Kopiena un pasākumi

- [chat.fhir.org](https://chat.fhir.org/) ir FHIR kopienas tērzētava, kurā ir aktīva IPS plūsma.
- [HL7 FHIR Connectathons](https://www.hl7.org/events/fhir-connectathon/)
- [IHE Connectathons](https://www.ihe.net/participate/connectathon/)

### Videoklipi

- [HIMSS20: IPS for computable care guidelines in 200 seconds or less (IHE International, YouTube)](https://www.youtube.com/watch?v=xjEzGM8kBPw)
- [IHE International YouTube channel](https://www.youtube.com/@IHEIntl) ir Connectathon diskusijas un IPS sesijas.
- [IPS project site news](https://international-patient-summary.net/) ved uz daudziem ierakstītiem tīmekļseminārām, tostarp:
  - IPS diskusiju IHE North America Connectathon, 2024
  - IPS sesiju FHIR DevDays 2023
  - Grahame Grieve par IPS un IPA, IHE Connectathon Montreux 2022
  - galveno uzstāšanos SNOMED CT Expo 2022
  - Matthew Rahn par IPS GDHP
  - HL7 tīmekļsemināru „Global Passport” par pārrobežu lietošanu
- [YouTube search: International Patient Summary](https://www.youtube.com/results?search_query=international+patient+summary)

### Grāmatas

- Tim Benson un Grahame Grieve, [*Principles of Health Interoperability: FHIR, HL7 and SNOMED CT*](https://link.springer.com/book/10.1007/978-3-030-56883-2), 4. izdevums, Springer, 2020. Aptver FHIR, klīnisko kopsavilkumu resursus un terminoloģiju.

### Pētniecības darbi un raksti

- Laleci Erturkmen G. B., Sinaci A. A., Namli T., Boonstra M., et al., "[An assessment of the European Patient Summary for clinical research: a case study in cardiology](https://doi.org/10.3389/fmed.2024.1481551)", *Frontiers in Medicine*, 2024.
- Lee H., Huang J., Huang S., Chen W., et al., "[Implementing a Cross-Border Next-Generation Personal Health Record in the Philippines and Taiwan: An Implementation Case Report Using Health Level 7 International Fast Healthcare Interoperability Resources](https://doi.org/10.2196/56272)", *JMIR Formative Research*, 2025.
- Song C., Nakayama M., "[Implementation of a Patient Summary Web Application According to the International Patient Summary and Validation in Common Use Cases in Japan](https://doi.org/10.1007/s10916-023-01993-6)", *Journal of Medical Systems*, 2023.
- Schippers D., Spil T., Stegwee R., Folmer E., Donnelly S., "[The adoption and diffusion of the International Patient Summary](https://doi.org/10.24251/hicss.2025.425)", *Proceedings of the 58th Hawaii International Conference on System Sciences (HICSS)*, 2025.
- da Silva Carvalho N., Papadimitriou A., Stegwee R., Gille H., et al., "[Accelerating European electronic health record exchange format (EEHRxF) implementation across Europe: a policy perspective](https://doi.org/10.3389/fmed.2025.1648170)", *Frontiers in Medicine*, 2025.
- Kay S., Cangioli G., Nusbaum M., "[The International Patient Summary and the extensibility requirement](https://international-patient-summary.net/the-international-patient-summary-and-the-extensibility-requirement/)", *Studies in Health Technology and Informatics* (pHealth), 2020.
- D'Amore J., Cangioli G., Hausam R., "[Advancing the International Patient Summary](https://international-patient-summary.net/advancing-the-international-patient-summary/)"
- "[Towards the Austrian Patient Summary](https://international-patient-summary.net/towards-the-austrian-patient-summary/)", *Studies in Health Technology and Informatics* (dHealth).
- "[Revival of the International Patient Summary (IPS)](https://smiledigitalhealth.com/our-blog/revival-of-the-international-patient-summary-ips)", Smile Digital Health blog.
- [PubMed search: "international patient summary"](https://pubmed.ncbi.nlm.nih.gov/?term=%22international+patient+summary%22) recenzētai literatūrai.


## References

Numurētās atsauces tekstā, piemēram, [1], ved uz atbilstošo ierakstu zemāk. Saites tika pārbaudītas 2026. gada novembrī. Likumi, ieviešanas rādītāji un versijas mainās, tāpēc pašreizējo stāvokli pārbaudiet avotā.

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

Šie avoti iepriekš netiek citēti, bet ir galvenās atsauces uz pašu standartu.

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
