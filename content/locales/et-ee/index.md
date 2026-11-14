# International Patient Summary (IPS)

**International Patient Summary (IPS)** ehk rahvusvaheline patsiendikokkuvõte on ülemaailmne standard lühikese elektroonilise terviseandmete väljavõtte jaoks. See sisaldab põhilisi kliinilisi fakte, mida arst vajab patsiendi ohutuks raviks. See on kavandatud olema:

- **Minimaalne ja mittetäielik.** See on terviseandmete väike, hoolikalt valitud alamhulk, mitte täielik patsiendikaart.
- **Erialaneutraalne.** Iga arst saab seda kasutada, mis tahes erialal.
- **Haigusest sõltumatu.** See ei ole seotud kindla haiguse ega ravirajaga.
- **Rakendatav ja rahvusvaheline.** See põhineb ülemaailmsetel standarditel ja terminoloogiatel, nii et seda saab kasutada riikide, keelte ja IT-süsteemide vahel.

Lühidalt vastab IPS ühele küsimusele arstile, kes pole patsienti kunagi kohanud: *„Mida pean praegu teadma, et sellest inimesest ohutult hoolitseda?“*


## Miks IPS olemas on

Terviseteave on tavaliselt lukustatud kohalikku elektroonilisse haiguslukku (EHR), riiklikku süsteemi või tarnija toodet. Kui patsient otsib abi mujal, näiteks teises haiglas, piirkonnas või riigis, ei ole ravil oleval arstil sageli sellele ajaloole juurdepääsu. IPS annab kõigile ühe jagatud, teisaldatava kokkuvõtte vormingu.

### Peamised kasutusjuhud

| Kasutusjuht | Kirjeldus |
|---|---|
| **Plaaniväline ja kiirabi** | Patsient haigestub või saab vigastada kodust eemal ja kohalikud arstid ei pääse tema koduse EHR-i juurde. See on algne, peamine kasutusjuht. |
| **Piiriülene ravi** | Reisijad, migrandid, piiriülesed töötajad ja pagulased kannavad kaasas kokkuvõtet, mida välismaa arstid saavad lugeda. |
| **Plaaniline ravi ja üleminekud** | Saatekirjad, eriarstikonsultatsioonid, haiglasse vastuvõtud, väljakirjutamised ja üleandmised teenuseosutajate vahel. |
| **Meditsiiniturism ja liikuvus** | Patsiendid, kes valivad ravi saamise teises jurisdiktsioonis. |
| **Patsiendi võimestamine** | Patsiendid hoiavad, vaatavad ja jagavad oma kokkuvõtet telefonirakendusest, portaalist või prinditud koopiast. |


## Millal IPS-i kasutada

Kasutage IPS-i, kui keegi, kes patsienti ei tunne, vajab kiiresti usaldusväärset hetkepilti ja kui saatja ning vastuvõtja ei jaga IT-süsteemi.

### Head kasutusalad

- **Kiirabi ja plaaniväline ravi**, eriti kodust eemal või üle piiri. Selleks kasutuseks IPS loodi.
- **Piiriülene vahetus riiklike süsteemide vahel**, näiteks ELi teenus MyHealth@EU [[1]](#ref-1) [[2]](#ref-2).
- **Patsiendi enda hoitavad kokkuvõtted**, mida reisijad, migrandid, pagulased, palverändurid või keeruliste haigustega inimesed kannavad telefonis või paberil [[3]](#ref-3).
- **Riiklik või piirkondlik patsiendikokkuvõte.** Paljud riigid ehitavad oma kokkuvõtte IPS-i profiilina, et seda saaks ka rahvusvaheliselt vahetada [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
- **Ühine alus ravi üleminekutele,** näiteks saatekirjadele, haiglasse vastuvõtule ja väljakirjutamisele, kui rikkalikum erialane dokument ei ole saadaval.
- **Lähtepunkt teistele andmekogumitele,** näiteks vaktsineerimistõenditele, uuringuandmetele või registritele, mis vajavad samu põhifakte [[7]](#ref-7) [[8]](#ref-8).

### Halvad kasutusalad

- **Täielik haiguslugu.** IPS on tahtlikult minimaalne. Kasutage täielikku haigusloo eksporti või erialast dokumenti, kui üksikasjad on olulised.
- **Erialaspetsiifilised dokumendid,** näiteks onkoloogilise ravi kokkuvõte, rasedus- ja sünnitusdokument või üksikasjalik epikriis. Neil on oma standardid, mis võivad sisaldada IPS-i sisu või sellele viidata.
- **Reaalajas kliinilised töövood ühe organisatsiooni sees.** Ühe EHR-i sees päringutage elavaid andmeid, mitte kokkuvõtte hetkepilti.
- **Juriidilised, arveldus- või kindlustusdokumendid.** IPS on kliiniline kokkuvõte, mitte haldus- ega nõudedokument.
- **Otsused, mis nõuavad garanteeritud täielikkust.** IPS on nii täielik ja ajakohane kui selle allikas ja autor. Kinnitage kriitilisi fakte alati patsiendiga, kui see on võimalik.


## Mida IPS sisaldab

IPS-dokumendil on kaks kihti:

1. **Päis, mis kirjutab üles, kes, mis ja millal:**
   - **Patsient (Patient):** identiteet, demograafilised andmed ja kontaktid.
   - **Autor (Author):** isik, organisatsioon või süsteem, kes kokkuvõtte koostas.
   - **Hoidja (Custodian):** organisatsioon, kes vastutab selle hooldamise eest.
   - **Kinnitaja (Attester):** kes selle on kontrollinud, kui keegi.
   - **Kuupäev ja kellaaeg:** millal see loodi.

2. **Kliiniline põhiosa, mis on jaotatud sektsioonideks.** Sektsioonid on kohustuslikud, soovitatavad või valikulised.

| Sektsioon | Staatus | Tüüpiline sisu |
|---|---|---|
| **Medication Summary** (Ravimite kokkuvõte) | Kohustuslik | Praegused ja asjakohased varasemad ravimid, retseptid, annustamine |
| **Allergies and Intolerances** (Allergiad ja talumatused) | Kohustuslik | Ravimite, toidu ja keskkonna allergiad; reaktsioonid ja raskusaste |
| **Problem List** (Probleemide loend) | Kohustuslik | Aktiivsed diagnoosid, seisundid ja kliinilised probleemid |
| Immunizations (Immuniseerimised) | Soovitatav | Tehtud vaktsiinid, näiteks teetanus, B-hepatiit, gripp, COVID-19 |
| History of Procedures (Protseduuride ajalugu) | Soovitatav | Suuremad operatsioonid ja invasiivsed sekkumised |
| Medical Devices (Meditsiiniseadmed) | Soovitatav | Implantaadid ja seadmed, näiteks südamestimulaatorid, stendid, proteesid |
| Diagnostic Results (Diagnostilised tulemused) | Soovitatav | Peamised laboritulemused, pildidiagnostika aruanded, patoloogia |
| Vital Signs (Elulised näitajad) | Valikuline | Vererõhk, südame löögisagedus, kaal, pikkus, KMI |
| History of Past Illness (Varasemate haiguste ajalugu) | Valikuline | Paranenud seisundid ja olulised varasemad probleemid |
| Functional Status (Funktsionaalne seisund) | Valikuline | Puuded ja võime sooritada igapäevatoiminguid |
| Plan of Care (Hooldusplaan) | Valikuline | Hooldusplaanid ja ravisoovitused |
| Social History (Sotsiaalanamnees) | Valikuline | Tubakas, alkohol ja muud asjakohased elustiilitegurid |
| History of Pregnancy (Raseduste ajalugu) | Valikuline | Praegune raseduse seisund ja raseduste ajalugu |
| Advance Directives (Ettenägelikud tahteavaldused) | Valikuline | Elutestamendid, elustamiseelistused, nõusolekuavaldused |
| Alerts (Hoiatused) | Valikuline | Ohutuskriitilised hoiatused, mis ei sobi mujale (lisatud FHIR IPS STU 2-s) |
| Patient Story (Patsiendi lugu) | Valikuline | Mis on patsiendile oluline: vajadused, tugevused, väärtused, mured ja eelistused patsiendi enda sõnadega (lisatud FHIR IPS STU 2-s) |

**„Mitte midagi“ otse väljendamine on oluline.** Tühi sektsioon ei ütle arstile, kas patsiendil ei ole allergiaid või ei ole neid keegi registreerinud. IPS eeldab seetõttu selgeid väiteid, näiteks *„teadaolevaid allergiaid ei ole“*, *„praegused ravimid puuduvad“* või *„teave ei ole kättesaadav“*.


## IPS-i taga olevad standardid

IPS on kooskõlastatud standardite perekond. ISO ja CEN standardid määravad, *mida* patsiendikokkuvõte peab sisaldama. HL7 rakendusjuhendid määravad, *kuidas* seda kodeerida.

| Standard | Organ | Roll |
|---|---|---|
| **EN 17269** | CEN (Euroopa Standardikomitee) | Abstraktne IPS-i andmestik, avaldatud 2019. aastal |
| **ISO 27269** | ISO (Rahvusvaheline Standardiorganisatsioon) | Abstraktse IPS-i andmestiku rahvusvaheline versioon, avaldatud 2021. aastal |
| **CEN/TS 17288** | CEN | Juhised IPS-i rakendamiseks piiriüleseks kasutuseks |
| **HL7 FHIR IPS Implementation Guide** | HL7 International | Kaasaegne, API-sõbralik kodeering ja peamine rakendusvorming. STU 2 (2.0.x) lisas sektsioonid Alerts ja Patient Story, lubas tühje sektsioone, täpsustas `$summary` ja läks üle SNOMED CT IPS-i terminoloogiale [[9]](#ref-9). |
| **HL7 CDA IPS Implementation Guide** | HL7 International | XML-dokumendipõhine kodeering, levinud olemasolevates riiklikes ja Euroopa taristutes |

Tööd koordineeritakse **Joint Initiative Council for Global Health Informatics Standardization (JIC)** kaudu. JIC koondab ISO, CEN-i, HL7, SNOMED Internationali, IHE ja teisi. IPS kasvas välja 2016. aasta ELi ja USA koostööst piiriüleste terviseandmete alal ning seda toetavad nüüd valitsused ja digitervise programmid üle maailma.


## Kuidas IPS HL7 FHIR-iga kodeeritakse

FHIR-is on IPS üks **`Bundle`**, mille tüüp on `document`:

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

Olulised tehnilised punktid:

- **Igal sektsioonil on inimloetav narratiiv.** Arst saab IPS-i lugeda tavalises brauseris, ka ilma FHIR-i tarkvarata.
- **Igal sektsioonil on ka kodeeritud kirjed**, mis on struktureeritud FHIR-i ressursid, mida tarkvara saab töödelda, tõlkida ja sobitada.
- **Profiilid piiravad FHIR-i baasressursse.** Näiteks *Patient (IPS)* ja *AllergyIntolerance (IPS)* määravad minimaalsed andmed ja „must support“ elemendid.
- **Operatsioon `$summary`** (`GET [base]/Patient/[id]/$summary`) palub FHIR-serveril genereerida patsiendi jaoks IPS nõudmisel.
- **IPS-i saab allkirjastada ja see on iseseisev.** Täielikku dokumenti saab salvestada, saata, allkirjastada ja kontrollida ühe tervikuna.


## Terminoloogiad

Ühised koodisüsteemid muudavad IPS-i loetavaks keelte ja riikide vahel:

| Terminoloogia | Kasutatakse |
|---|---|
| **SNOMED CT** | Probleemid, allergiad, protseduurid, seadmed, kliinilised leiud. IPS-i kasutuseks on saadaval tasuta alamhulk **SNOMED CT IPS Terminology**, ka mitteliikmesriikides. |
| **LOINC** | Dokumendi- ja sektsioonitüübid, laboriuuringud, elulised näitajad |
| **ATC** ja muud ravimite koodisüsteemid | Ravimid ja toimeained |
| **UCUM** | Mõõtühikud |
| **ISO ja HL7 väärtuskogumid** | Riigid, keeled, haldussood, puudumise ja teadmatuse põhjused |

Kuna kirjed on kodeeritud, saab vastuvõttev süsteem näidata portugali keeles kirjutatud IPS-i inglisekeelsete siltidega. Kodeeritud tähendus jääb samaks.


## Kuidas patsiendid ja arstid IPS-i kasutavad

IPS-i võib koostada EHR, riiklik terviseandmete teenus, patsiendiportaal või isiklik terviserakendus. Seejärel saab selle kohale toimetada mitmel viisil:

- **Süsteemilt süsteemile:** FHIR REST API-de, riiklike taristute või piiriüleste lüüside kaudu, näiteks ELi võrgu MyHealth@EU kaudu.
- **Patsiendi vahendatud jagamine:** patsient hoiab kokkuvõtet rahakotis või terviserakenduses ja jagab seda nõudmisel.
- **SMART Health Links:** QR-kood või URL, mis annab arstile ajaliselt piiratud, soovi korral pääsukoodiga kaitstud juurdepääsu krüptitud IPS-ile. Arst saab selle avada tavalises veebibrauseris.
- **Paber või PDF:** prinditud narratiivne esitus varuvariandina, kui miski muu ei tööta.

Rakendused nagu **CommonHealth** võimaldavad patsientidel koguda oma andmeid ja jagada IPS-i SMART Health Linksi kaudu.

Tüüpiline hädaolukorra stsenaarium:

1. Reisija kukub välismaal kokku.
2. Reisija või kaaslane näitab telefonis QR-koodi.
3. Kiirabiarst skannib selle ja näeb sekunditega reisija ravimeid, allergiaid ja aktiivseid probleeme.
4. Arst väldib ohtlikku ravimite koostoimet ja ravib patsienti ohutult.


## Põhimõtted ja kavandusvalikud

- **Ohutus ennekõike.** Sisu valitakse kliinilise asjakohasuse, mitte täielikkuse põhjal.
- **Vaikimisi globaalne, laienduse kaudu kohalik.** Riigid loovad riiklikke profiile, näiteks ELi, Austraalia või Kanada variante, mis lisavad nõudeid ilma rahvusvahelist tuuma rikkumata.
- **Inimloetav ja masintöödeldav.** Narratiiv ja kodeeritud andmed eksisteerivad koos.
- **Vaba ja avatud.** HL7 IPS-i spetsifikatsioonid ja IPS-i SNOMED CT alamhulk on vabalt kättesaadavad, et vähendada kasutuselevõtu tõkkeid.
- **Privaatsus ja nõusolek.** Juurdepääsu reguleerivad kohalik õigus ja patsiendi nõusolek. Mehhanismid nagu SMART Health Links hoiavad kontrolli patsiendi käes.


## Kuidas IPS-i kasutada

### Patsientidele

1. **Küsige seda.** Küsige oma kliinikult, haiglalt, riiklikult terviseportaalilt või terviserakenduselt, kas see suudab koostada IPS-i või sellel põhineva riikliku patsiendikokkuvõtte.
2. **Kontrollige seda.** Lugege see läbi, kui olete terve. Teatage kõigest, mis on vale või puudub, eriti allergiatest ja ravimitest.
3. **Hoidke see kaasas.** Salvestage see terviserakendusse või rahakotti, SMART Health Linki QR-koodina või väljaprindina oma reisidokumentide hulgas.
4. **Hoidke see ajakohasena.** Hankige uus pärast uut diagnoosi, uut pikaajalist ravimit, operatsiooni või implantaati.
5. **Jagage seda tahtlikult.** Näidake seda teid ravivale arstile. SMART Health Link võib aeguda ja nõuda pääsukoodi, nii et teie otsustate, kes seda näeb ja kui kauaks [[10]](#ref-10).

### Arstidele

1. **Kontrollige kõigepealt päist.** Kes selle kirjutas, millal ja kas keegi on selle kinnitanud. Vana või kinnitamata kokkuvõte nõuab rohkem ettevaatust.
2. **Lugege kõigepealt kohustuslikud sektsioonid:** allergiad, ravimid ja probleemid.
3. **Kohelge „teadaolevalt ei ole“ teisiti kui „ei ole registreeritud“.** „Teadaolevaid allergiaid ei ole“ on kliiniline väide. Tühi või „teadmata“ sektsioon ei ole.
4. **Kinnitage kriitilisi fakte** patsiendi või tema kaaslasega, kui vähegi saate.
5. **Kasutage kodeeritud andmeid.** Kui teie süsteem seda toetab, võimaldavad kodeeritud kirjed kokkuvõtet näidata teie keeles ja kontrollida ravimite koostoimete ning allergiate reeglite vastu.
6. **Ärge eeldage täielikkust.** IPS on turvavõrk, mitte täielik anamnees.

### Rakendajatele

1. **Valige spetsifikatsioon.** Kasutage kehtivat HL7 FHIR IPS Implementation Guide'i (STU 2) või oma riigi sellel põhinevat riiklikku profiili. CDA-põhiste taristute jaoks kasutage CDA IPS-i juhendit [[9]](#ref-9) [[11]](#ref-11).
2. **Vastendage oma andmed.** Vastendage kohalikud andmed IPS-i profiilidega: `Patient`, `AllergyIntolerance`, `MedicationStatement`, `Condition` ja nii edasi. Suurem osa tööd on selles vastendamises.
3. **Vastendage oma terminoloogia.** Vastendage kohalikud koodid SNOMED CT-ga, LOINC-iga ja ravimite koodisüsteemidega. SNOMED CT IPS Terminology on selleks otstarbeks tasuta kasutatav [[12]](#ref-12).
4. **Genereerige dokument.** Toetage operatsiooni `$summary` või koostage `Bundle` ja `Composition` ise. Lisage iga sektsiooni jaoks loetav narratiiv ning selged väited „teadaolevalt ei ole“ või „ei ole saadaval“.
5. **Valideerige see.** Kontrollige iga genereeritud dokumenti FHIR Validatoriga ja vastavustestikomplektiga, näiteks Inferno IPS Test Kitiga [[13]](#ref-13).
6. **Allkirjastage ja jagage see.** Otsustage, kuidas dokumente allkirjastatakse, salvestatakse ja saadetakse: API, dokumendiregister, piiriülene lüüs või SMART Health Link.
7. **Tarbige seda ohutult.** Vastuvõtjana näidake narratiivi ka siis, kui te ei suuda töödelda kõiki kodeeritud kirjeid, hoidke allikas ja autor nähtavad ning ärge kunagi liitke saadud andmeid vaikides kohaliku haiguslooga.
8. **Testige teistega.** Tagage koostalitlusvõime teiste tarnijate ja riikidega IHE ja HL7 Connectathonidel enne tootmisse minekut.

### Valitsustele ja terviseorganisatsioonidele

1. **Võtke kasutusele riiklik profiil,** mis tugineb IPS-ile, mitte eraldi vormingule, et riiklik kokkuvõte oleks vaikimisi rahvusvaheline [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
2. **Lahendage haldus:** kes tohib kokkuvõtet luua, uuendada ja kinnitada ning kes vastutab selle täpsuse eest.
3. **Lahendage terminoloogia litsentsimine:** SNOMED CT liikmelisus või tasuta IPS-i alamhulga kasutamine.
4. **Lahendage identiteet, nõusolek ja usaldus:** kuidas patsiente tuvastatakse, kuidas nõusolek registreeritakse ja millist usaldusraamistikku, näiteks MyHealth@EU-d või WHO Global Digital Health Certification Networki, dokumentide kontrollimiseks kasutatakse [[1]](#ref-1) [[14]](#ref-14).
5. **Avaldage oma ehitatu** IPS Implementation Registrys, et teised saaksid sellest õppida [[15]](#ref-15).


## IPS-i lõimimine tervishoiusüsteemidega

IPS on harva eraldi süsteem. See on vaade andmetele, mis juba asuvad EHR-ides, terviseteabe vahetustes, riiklikes andmekogudes ja isiklikes terviserakendustes.

| Lõimimismuster | Kuidas see töötab | Näited |
|---|---|---|
| **EHR-i genereeritud** | EHR koostab IPS-i oma andmetest nõudmisel, sageli FHIR-i operatsiooni `$summary` kaudu. | EHR-i tarnijad ja FHIR-serverid, näiteks HAPI FHIR, millel on IPS-i generaatori moodul |
| **Riiklik või piirkondlik andmekogu** | Riiklik patsiendikokkuvõtte teenus salvestab IPS-i profiili ja teeb selle kättesaadavaks volitatud teenuseosutajatele. | Kanada PS-CA, Austraalia AU Patient Summary, Šveitsi elektrooniline patsiendikaart koos CH IPS-iga [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6) |
| **Piiriülene lüüs** | Iga riik haldab riiklikku kontaktpunkti. See muudab päritoluriigi kokkuvõtte kokkulepitud vahetusvormingusse, saadab selle üle piiri ja vastuvõttev riik näitab seda kohalikus keeles. | MyHealth@EU e-tervise riiklikud kontaktpunktid [[1]](#ref-1) [[2]](#ref-2) |
| **Piirkondlik vahetusvõrk** | Tervishoiuministeeriumid vahetavad IPS-dokumente riiklike FHIR-serverite kaudu ühise piirkondliku juhendi alusel. | RACSEL-i IPS-LAC ja Pan American Highway for Digital Health (PH4H) Ladina-Ameerikas ja Kariibi mere piirkonnas [[16]](#ref-16) |
| **Patsiendi vahendatud** | Patsient hoiab IPS-i rakenduses või rahakotis ja jagab seda QR-koodi või SMART Health Linkiga. | CommonHealth; WHO usaldusvõrgu IPS-i töö palverännakute jaoks [[10]](#ref-10) [[14]](#ref-14) |
| **API-põhine juurdepääs** | Rakendused toovad volitatud patsiendi IPS-i FHIR API kaudu. | International Patient Access (IPA); USA võrgud nagu Flexpa, mis lisas IPS-i toe CMS Interoperability Frameworki raames [[17]](#ref-17) [[18]](#ref-18) |

Lõimimispunktid, mida planeerida:

- **Dokumentide jagamine:** IHE profiilid nagu MHD (FHIR) ja XDS (dokumendiregistrid) salvestavad ja leiavad IPS-dokumente. IHE IPS-i sisuprofiilid lisavad vastavuse ja testimise reegleid [[11]](#ref-11).
- **Patsiendi identiteet:** IHE PIXm ja PDQm või riiklik identifikaator sobitavad patsiendi süsteemide vahel.
- **Olemasolevad dokumendid:** paljud süsteemid toodavad juba CDA-d, C-CDA-d või riiklikke kokkuvõtteid. Nende vastendamine IPS-iga on tavaliselt lihtsam kui otsast alustamine, kuid kontrollige erinevusi kardinaalsuses, väärtuskogumites ja koodisüsteemides.
- **Riiklikud profiilid:** riiklik tuum, näiteks US Core, AU Core, CH Core või JP Core, võib IPS-ist erineda. Riiklikud patsiendikokkuvõtte profiilid ühtlustavad need kaks [[5]](#ref-5) [[6]](#ref-6) [[19]](#ref-19).
- **Tõlkimine ja kuvamine:** vastuvõtjad peaksid esitama narratiivi ja tõlkima kodeeritud kirjeid, kasutades koodide kuvanimesid vastuvõtja keeles.
- **Turvalisus:** kasutage TLS-i, vajadusel allkirjastatud dokumente, auditilogimist (näiteks IHE ATNA või BALP) ja nõusolekuga seotud juurdepääsukontrolli.


## Praegune kasutuselevõtt

IPS on liikunud pilootprojektidest riiklikesse ja piirkondlikesse programmidesse. Olukord muutub kiiresti, seega kontrollige värskeima seisu jaoks lingitud allikaid.

- **IPS Implementation Registry.** IPS-i kogukond haldab avalikku rakenduste registrit. 2026. aasta keskel loetles see 34 kirjet, alates Argentina teenuseosutaja vahendatud IPS-LAC projektist kuni Vietnami Better Health Programini [[15]](#ref-15).
- **FHIR-i ökosüsteem.** HL7 Internationali ja Firely 2025. aasta State of FHIR uuringus ütles 42 vastajat, et IPS on nende riiklike FHIR-i spetsifikatsioonide aluseks, rohkem kui ükski teine rahvusvaheline juhend [[20]](#ref-20).
- **Uuringud.** 2025. aasta uuring IPS-i kasutuselevõtu kohta küsitles sidusrühmi, kes nimetasid peamiste hüvedena paremat ravikvaliteeti ja patsiendiohutust [[21]](#ref-21).

| Riik või piirkond | Staatus |
|---|---|
| **Euroopa Liit ja EMP** | MyHealth@EU vahetab riikide vahel patsiendikokkuvõtteid ja e-retsepte. Euroopa Komisjoni 2026. aasta esitlus teatas, et 17 liikmesriiki pluss Norra on töös ja enamik ülejäänuid plaanib liituda [[2]](#ref-2) [[22]](#ref-22). EHDS-i määrus muudab patsiendikokkuvõtete vahetamise 2029. aastaks kohustuslikuks [[23]](#ref-23). |
| **Kanada** | Üle-Kanada patsiendikokkuvõte (PS-CA), mille Canada Health Infoway kiitis heaks 2022. aasta oktoobris, põhineb IPS-il Kanada kohandustega [[4]](#ref-4). |
| **Austraalia** | IPS-ile ja AU Core'ile tuginevat AU Patient Summaryt arendab HL7 Australia Sparkedi programmi kaudu [[5]](#ref-5) [[24]](#ref-24). |
| **Šveits** | HL7 Switzerlandi CH IPS 2.0.0 (katsekasutus) põhineb IPS-il ja CH Core'il. Eraldi profiil lisab selle, mida Šveitsi elektrooniline patsiendikaart vajab [[6]](#ref-6). |
| **Ameerika Ühendriigid** | IPS-i jaoks puudub föderaalne kohustus. USA kasutab US Core'i ja USCDI-d. Föderaalasutused osalevad IPS-i töös rahvusvaheliselt ja mõned võrgud toetavad IPS-i vabatahtlikult [[18]](#ref-18). |
| **Ladina-Ameerika ja Kariibi mere piirkond** | RACSEL-i tervishoiuministeeriumid kasutavad piirkondlikku IPS-LAC juhendit. 2023. aastal vahetas 16 riiki IPS-LAC dokumente São Paulo connectathonil [[16]](#ref-16). |
| **Jaapan** | Teadlased on ehitanud ja valideerinud IPS-il põhineva patsiendikokkuvõtte rakenduse tavaliste Jaapani kasutusjuhtude jaoks, kasutades JP Core'i [[19]](#ref-19). |
| **Taiwan ja Filipiinid** | 2025. aasta rakendusaruanne kirjeldab piiriülest isiklikku tervisekaarti, mis kasutab FHIR-i ja on IPS-iga kooskõlastatud [[25]](#ref-25). |
| **G7** | 2021. aastal kohustusid G7 tervishoiuministrid töötama IPS-i suunas ja avaldasid IPS-i teekaardi [[26]](#ref-26). |
| **WHO** | WHO Global Digital Health Certification Network sisaldab IPS-põhiseid usaldusdomeene, näiteks kontrollitavat IPS-i palverännakute jaoks [[14]](#ref-14). |


## Seadused, määrused ja poliitika riikide ja piirkondade kaupa

IPS on standard, mitte seadus. Seadused otsustavad, kas riik peab patsiendikokkuvõtteid vahetama, millises vormingus ja milliste privaatsusreeglite alusel. See on kokkuvõte, mitte õigusnõu. Kontrollige alati seaduse kehtivat teksti.

| Jurisdiktsioon | Seadus või poliitika | Mida see IPS-i jaoks tähendab |
|---|---|---|
| **Euroopa Liit** | **Euroopa terviseandmeruumi (EHDS) määrus, (EL) 2025/327.** Avaldatud 5. märtsil 2025; jõustunud 26. märtsil 2025 [[23]](#ref-23) [[27]](#ref-27). | Patsiendikokkuvõtted on „prioriteetne kategooria“. Vahetus Euroopa elektrooniliste terviseandmete vahetusvormingus peab 2029. aastaks toimima igas liikmesriigis. Meditsiinilised pildid, uuringutulemused ja epikriisid järgnevad 2031. aastaks [[28]](#ref-28). Patsiendikokkuvõtete vorming põhineb HL7 IPS-il. |
| **Euroopa Liit** | **Direktiiv 2011/24/EL** patsientide õiguste kohta piiriüleses tervishoius [[29]](#ref-29). | Lõi e-tervise võrgustiku, mis leppis kokku MyHealth@EU taga olevad patsiendikokkuvõtte suunised. |
| **Euroopa Liit** | **Isikuandmete kaitse üldmäärus (GDPR), (EL) 2016/679** [[30]](#ref-30). | Terviseandmed on eriliik. Iga IPS-i vahetus vajab seaduslikku alust ja asjakohaseid kaitsemeetmeid. |
| **Ameerika Ühendriigid** | **21st Century Cures Act ja teabe blokeerimise reeglid** [[31]](#ref-31); vabatahtlik **CMS Interoperability Framework** (2025) [[17]](#ref-17). | Ükski seadus ei nõua IPS-i. Seadused nõuavad juurdepääsu elektroonilisele terviseteabele ja selle vahetust, kasutades US Core'i ja USCDI-d. IPS-i toetamine on vabatahtlik. |
| **Kanada** | Provintside ja territooriumide terviseteabe seadused. Föderaalne **Connected Care for Canadians Act** (Bill C-72) esitati 2024. aastal, kuid seda ei võetud vastu enne, kui parlament 2025. aastal prorogeeriti. | PS-CA on üle-Kanada spetsifikatsioon, mitte õiguslik nõue. Kasutuselevõttu juhivad provintsid ja territooriumid koos Canada Health Infowayga [[4]](#ref-4). |
| **Ühendkuningriik** | **Data (Use and Access) Act 2025** [[32]](#ref-32). | Sisaldab volitusi kehtestada teabestandardeid tervishoiu ja täiskasvanute sotsiaalhoolduse IT jaoks. Ühendkuningriik võõrustas G7 2021. aasta IPS-i kohustust [[26]](#ref-26). |
| **Austraalia** | **My Health Records Act 2012** ja 2025. aasta „vaikimisi jagamise“ muudatused. | AU Patient Summary on riiklik spetsifikatsioon, mida arendatakse Sparkedi kaudu [[5]](#ref-5) [[24]](#ref-24). |
| **Šveits** | **19. juuni 2015. aasta föderaalseadus elektroonilise patsiendikaardi kohta (EPRA, SR 816.1)**, jõus alates 15. aprillist 2017 [[33]](#ref-33). | CH IPS sisaldab profiili Šveitsi elektroonilises patsiendikaardis olevate dokumentide jaoks [[6]](#ref-6). |
| **Ladina-Ameerika ja Kariibi mere piirkond** | Piirkondlikud kokkulepped RACSEL-i ja PH4H kaudu, Ameerika Arengupanga toetusel piirkondlikule õigusraamistikule [[16]](#ref-16). | IPS-LAC on kokkulepitud piirkondlik vorming piiriüleseks vahetuseks. |
| **G7** | **Tervishoiuministrite kommünikee**, Oxford, juuni 2021, ja **G7 IPS Roadmap**, detsember 2021 [[26]](#ref-26) [[34]](#ref-34). | Poliitiline kohustus töötada IPS-i ja patsiendi juurdepääsu suunas, mitte siduv õigus. |


## Plussid ja miinused

| Plussid | Miinused |
|---|---|
| **Ohutum plaaniväline ravi.** Arstid näevad allergiaid, ravimeid ja probleeme sekunditega. | **Nii hea kui selle allikas.** Aegunud või vale lähteandmestik annab aegunud või vale kokkuvõtte. |
| **Üks vorming kogu maailmas.** Üks rakendus teenindab riiklikke ja piiriüleseid vajadusi. | **Riiklikud erinevused.** Riiklikud profiilid lisavad reegleid, nii et ühes riigis „kehtiv IPS“ võib vajada tööd, et teises vastu võetaks. |
| **Ehitatud avatud, küpsetele standarditele:** ISO, CEN, HL7 FHIR ja CDA, SNOMED CT ning LOINC. | **Terminoloogia koormus.** Kohalike koodide vastendamine SNOMED CT-ga ja LOINC-iga on raske töö ning täielik SNOMED CT vajab litsentsi väljaspool tasuta IPS-i alamhulka. |
| **Loetav ja arvutatav.** Narratiiv inimestele, kodeeritud andmed tarkvarale ja tõlkimiseks. | **Narratiiv ja kodeeritud andmed võivad olla vastuolus,** kui generaator on hooletu, ja vastuvõtjad võivad usaldada valet. |
| **Patsiendi võimestamine.** Patsiendid saavad oma kokkuvõtet hoida ja jagada. | **Privaatsuse ja nõusoleku risk.** Teisaldatav kokkuvõte on tundlik ning seadused ja nõusolekumudelid erinevad riigiti. |
| **Tasuta spetsifikatsioonid** ja tasuta IPS-i terminoloogia vähendavad kulusid [[12]](#ref-12). | **Versioonide kuhjumine.** STU 1, STU 1.1 ja STU 2 eksisteerivad koos ning EHDS-i vorming viitab varasemale versioonile [[28]](#ref-28). |
| **Taaskasutatav** vaktsineerimistõendite, uuringute ja registrite jaoks [[7]](#ref-7) [[8]](#ref-8). | **Tahtlikult minimaalne.** Ei asenda täielikke haiguslugusid ega erialadokumente ning teisese kasutuse lüngad vajavad laiendusi [[7]](#ref-7). |
| **Tugev toetus** valitsustelt, EL-ilt, G7-lt, WHO-lt ja standardiorganitelt. | **Ebaühtlane kasutuselevõtt.** Paljud riigid ja tarnijad on veel pilootfaasis ning patsientide teadlikkus on madal. |


## Plaanid ja tulevikusuunad

- **EL, 2029:** patsiendikokkuvõtete ja e-retseptide vahetus on EHDS-i alusel töös kõigis ELi liikmesriikides [[23]](#ref-23) [[28]](#ref-28).
- **EL, 2031:** meditsiinilised pildid, laboritulemused ja epikriisid lisanduvad Euroopa elektrooniliste terviseandmete vahetusvormingule [[28]](#ref-28).
- **MyHealth@EU laienemine:** rohkem liituvaid riike ning uued teenused laboritulemuste, epikriiside ja meditsiiniliste piltide jaoks [[2]](#ref-2) [[22]](#ref-22).
- **FHIR IPS STU 2 kasutuselevõtt:** rakendajad liiguvad sektsioonide Alerts ja Patient Story, selgesõnaliselt tühjade sektsioonide ning SNOMED CT IPS-i terminoloogia juurde [[9]](#ref-9).
- **Austraalia:** AU Patient Summary Release 1 avaldamine, kavandatud 2026. aastaks [[24]](#ref-24).
- **IPS Best Practices Project:** kogukonna jõupingutus õpitud õppetundide dokumenteerimiseks, töö algab 2026. aastal.
- **WHO usaldusvõrk:** rohkem IPS-põhiseid usaldusdomeene kontrollitavate, teisaldatavate terviseandmete dokumentide jaoks [[14]](#ref-14).
- **SMART Health Links:** standardiseeritud HL7 kaudu, patsiendi kontrollitud jagamiseks [[10]](#ref-10).
- **Ladina-Ameerika ja Kariibi mere piirkond:** laiem IPS-LAC vahetus PH4H kaudu [[16]](#ref-16).
- **Uuringud ja teisene kasutus:** töö patsiendikokkuvõtete laiendamiseks kliinilistele uuringutele ja tehisintellektile, hoides tuuma minimaalsena [[7]](#ref-7).


## Sõnastik

| Termin | Tähendus |
|---|---|
| **IPS** | International Patient Summary |
| **FHIR** | Fast Healthcare Interoperability Resources, HL7 kaasaegne API-põhine standard |
| **CDA** | Clinical Document Architecture, HL7 XML-dokumendistandard |
| **IG** | Implementation Guide (rakendusjuhend), profiilide ja reeglite kogum standardi rakendamiseks |
| **Profile** | FHIR-i ressursi piiratud versioon kindlaks kasutuseks |
| **SNOMED CT** | Systematized Nomenclature of Medicine – Clinical Terms |
| **LOINC** | Logical Observation Identifiers Names and Codes |
| **SMART Health Links** | Standard terviseandmete jagamiseks lingi või QR-koodi kaudu |
| **JIC** | Joint Initiative Council for Global Health Informatics Standardization |


## Loe lähemalt

- HL7 FHIR IPS Implementation Guide: <https://hl7.org/fhir/uv/ips/>
- IPS continuous build: <https://build.fhir.org/ig/HL7/fhir-ips/>
- International Patient Summary project site: <https://international-patient-summary.net/>
- ISO 27269 (Health informatics — International patient summary): <https://www.iso.org/standard/79491.html>
- SNOMED CT IPS Terminology: <https://www.snomed.org/international-patient-summary-terminology>
- SMART Health Links: <https://docs.smarthealthit.org/smart-health-links/>


## Ressursid

Need lingid hõlmavad IPS-i allikaid, spetsifikatsioone, tarkvara, projekte, videoid, raamatuid ja uuringuid. Enamik neist kontrolliti selle lehe kirjutamise ajal. Mõned kirjastajate saidid blokeerivad automaatsed kontrollid ja need on märgitud *(kontrollimata)*.

### Ametlikud spetsifikatsioonid ja standardid

- [HL7 FHIR IPS Implementation Guide, current published version](https://hl7.org/fhir/uv/ips/) on autoriteetne FHIR-i spetsifikatsioon.
- [HL7 FHIR IPS Implementation Guide, STU 2](https://hl7.org/fhir/uv/ips/STU2/)
- [HL7 FHIR IPS Implementation Guide, STU 1.1](https://hl7.org/fhir/uv/ips/STU1.1/)
- [HL7 FHIR IPS publication history](https://www.hl7.org/fhir/uv/ips/history.html) loetleb kõik avaldatud versioonid.
- [HL7 FHIR IPS continuous build](https://build.fhir.org/ig/HL7/fhir-ips/) on viimane hääletamata pooleli töö.
- [Structure of the International Patient Summary](https://hl7.org/fhir/uv/ips/en/Structure-of-the-International-Patient-Summary.html) selgitab sektsioone ja profiile.
- [IPS design conventions](https://build.fhir.org/ig/HL7/fhir-ips/en/Design-Conventions.html) käsitleb must-supporti, puuduvaid andmeid ja narratiivi.
- [IPS generation and data inclusion](https://build.fhir.org/ig/HL7/fhir-ips/en/Generation-and-Data-Inclusion.html) käsitleb `$summary` ja sisu valimist.
- [HL7 CDA IPS Implementation Guide, continuous build](https://build.fhir.org/ig/HL7/CDA-IPS/)
- [HL7 CDA IPS product brief](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=483)
- [ISO 27269, Health informatics — International patient summary](https://www.iso.org/standard/79491.html) *(kontrollimata)*
- [ISO/TC 215 Health informatics committee](https://www.iso.org/committee/54960.html) *(kontrollimata)*
- [IHE FHIR International Patient Summary profile (FIIO)](https://profiles.ihe.net/PCC/FIIO/volume-1.html)
- [IHE PCC International Patient Summary supplement, 2020 (PDF)](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS_Rev1-0_PC_2020-03-17.pdf)
- [HL7 SMART Health Cards and Links Implementation Guide](https://hl7.org/fhir/uv/smart-health-cards-and-links/)
- [SMART Health Links documentation](https://docs.smarthealthit.org/smart-health-links/)
- [HL7 FHIR International Patient Access (IPA)](https://hl7.org/fhir/uv/ipa/) on õdespetsifikatsioon patsiendi API-juurdepääsuks.
- [HL7 FHIR R4 base specification](https://hl7.org/fhir/R4/), millele IPS tugineb.

### Lähtekoodi hoidlad

- [HL7/fhir-ips](https://github.com/HL7/fhir-ips) sisaldab FHIR IPS IG lähtekoodi FHIR Shorthandis.
- [HL7/cda-ips](https://github.com/HL7/cda-ips) sisaldab CDA IPS IG lähtekoodi.
- [hl7-eu/eps](https://github.com/hl7-eu/eps) sisaldab HL7 Europe Patient Summary lähtekoodi.
- [hl7ch/ch-ips](https://github.com/hl7ch/ch-ips) sisaldab Šveitsi IPS-i, mille vaatur ja generaator on arenduses.
- [GitHub topic: international-patient-summary](https://github.com/topics/international-patient-summary) loetleb kogukonna hoidlaid.

### Riiklikud ja piirkondlikud kohandused

- [HL7 Europe Patient Summary (EPS), continuous build](https://build.fhir.org/ig/hl7-eu/eps/)
- [AU Patient Summary (Australia), continuous build](https://build.fhir.org/ig/hl7au/au-fhir-ps/)
- [Trillium II IPS structure (HL7 Europe)](https://hl7.eu/fhir/build/trillium2/site/ipsStructure.html) pärineb ELi ja USA projektist, mis aitas IPS-i käivitada.
- [eHealth Suisse](https://www.ehealthsuisse.ch/) on Šveitsi digitervise pädevuskeskus ja selle IPS-i kasutuselevõtu eestvedaja.
- [MyHealth@EU, cross-border digital health services](https://health.ec.europa.eu/ehealth-digital-health-and-care/electronic-cross-border-health-services_en)
- [Xt-EHR Joint Action](https://www.xt-ehr.eu/) valmistab ette Euroopa terviseandmeruumi vorminguid, sealhulgas patsiendikokkuvõtet.

### Tarkvara ja tööriistad

- [IPS Viewer](https://www.ipsviewer.com) ([source: jddamore/IPSviewer](https://github.com/jddamore/IPSviewer)) on avatud lähtekoodiga brauseripõhine IPS-i vaatur.
- [uwcirg/shl-ips-viewer](https://github.com/uwcirg/shl-ips-viewer) vaatab SMART Health Linki kaudu jagatud IPS-i.
- [smart-on-fhir/smart-health-links](https://github.com/smart-on-fhir/smart-health-links) on SMART Health Linksi viiterakendus.
- [HAPI FHIR IPS generator](https://hapifhir.io/hapi-fhir/docs/server_ips/introduction.html) ([source: hapifhir/hapi-fhir](https://github.com/hapifhir/hapi-fhir)) on avatud lähtekoodiga Java serverimoodul, mis rakendab `$summary`.
- [HAPI FHIR JPA server IPS documentation](https://hapifhir.io/hapi-fhir/docs/server_jpa/ips.html)
- [Inferno IPS Test Kit](https://inferno.healthit.gov/test-kits/ips) ([source: inferno-framework/ips-test-kit](https://github.com/inferno-framework/ips-test-kit)) on avatud lähtekoodiga vastavustestikomplekt.
- [FHIR Validator](https://validator.fhir.org/) valideerib IPS-i bundle'id IG profiilide vastu.
- [Simplifier: hl7.fhir.uv.ips package](https://simplifier.net/packages/hl7.fhir.uv.ips) sisaldab paketti, profiile ja näiteid.
- [FHIR package registry](https://registry.fhir.org/)
- [FHIR Shorthand (FSH) School](https://fshschool.org/) õpetab keelt, milles IPS IG on kirjutatud.
- [CommonHealth](https://www.commonhealth.org/) on patsiendirakendus, mis genereerib IPS-i ja jagab seda SMART Health Linksi kaudu.
- [WHO SMART Trust](https://github.com/WorldHealthOrganization/smart-trust) on WHO Global Digital Health Certification Networki usaldusraamistik.

### Organisatsioonid ja projektid

- [International Patient Summary project site](https://international-patient-summary.net/) pakub uudiseid, kasutuselevõtu aruandeid ja koolitust.
- [IPS for health IT developers](https://international-patient-summary.net/health-it-developer/)
- [HL7 International](https://www.hl7.org/)
- [IHE International](https://www.ihe.net/)
- [SNOMED International](https://www.snomed.org/)
- [SNOMED CT IPS Terminology](https://www.snomed.org/international-patient-summary-terminology) on tasuta alamhulk IPS-i kasutuseks.
- [LOINC](https://loinc.org/) *(kontrollimata)*
- [Joint Initiative Council for Global Health Informatics Standardization (JIC)](http://www.jointinitiativecouncil.org/)
- [Global Digital Health Partnership (GDHP)](https://gdhp.health/)
- [WHO SMART Guidelines](https://smart.who.int/)
- [WHO Global Digital Health Certification Network](https://www.who.int/initiatives/global-digital-health-certification-network)

### Kogukond ja sündmused

- [chat.fhir.org](https://chat.fhir.org/) on FHIR-i kogukonna vestlus, kus on aktiivne IPS-i voog.
- [HL7 FHIR Connectathons](https://www.hl7.org/events/fhir-connectathon/)
- [IHE Connectathons](https://www.ihe.net/participate/connectathon/)

### Videod

- [HIMSS20: IPS for computable care guidelines in 200 seconds or less (IHE International, YouTube)](https://www.youtube.com/watch?v=xjEzGM8kBPw)
- [IHE International YouTube channel](https://www.youtube.com/@IHEIntl) sisaldab Connectathoni paneele ja IPS-i sessioone.
- [IPS project site news](https://international-patient-summary.net/) viitab paljudele salvestatud veebiseminaridele, sealhulgas:
  - IPS-i paneel IHE North America Connectathonil, 2024
  - IPS-i sessioon FHIR DevDays 2023-l
  - Grahame Grieve IPS-ist ja IPA-st, IHE Connectathon Montreux 2022
  - SNOMED CT Expo 2022 põhikõne
  - Matthew Rahn IPS-ist GDHP-s
  - HL7 piiriülene veebiseminar „Global Passport“
- [YouTube search: International Patient Summary](https://www.youtube.com/results?search_query=international+patient+summary)

### Raamatud

- Tim Benson ja Grahame Grieve, [*Principles of Health Interoperability: FHIR, HL7 and SNOMED CT*](https://link.springer.com/book/10.1007/978-3-030-56883-2), 4. väljaanne, Springer, 2020. See käsitleb FHIR-i, kliinilisi kokkuvõtteressursse ja terminoloogiat.

### Uurimistööd ja artiklid

- Laleci Erturkmen G. B., Sinaci A. A., Namli T., Boonstra M., et al., "[An assessment of the European Patient Summary for clinical research: a case study in cardiology](https://doi.org/10.3389/fmed.2024.1481551)", *Frontiers in Medicine*, 2024.
- Lee H., Huang J., Huang S., Chen W., et al., "[Implementing a Cross-Border Next-Generation Personal Health Record in the Philippines and Taiwan: An Implementation Case Report Using Health Level 7 International Fast Healthcare Interoperability Resources](https://doi.org/10.2196/56272)", *JMIR Formative Research*, 2025.
- Song C., Nakayama M., "[Implementation of a Patient Summary Web Application According to the International Patient Summary and Validation in Common Use Cases in Japan](https://doi.org/10.1007/s10916-023-01993-6)", *Journal of Medical Systems*, 2023.
- Schippers D., Spil T., Stegwee R., Folmer E., Donnelly S., "[The adoption and diffusion of the International Patient Summary](https://doi.org/10.24251/hicss.2025.425)", *Proceedings of the 58th Hawaii International Conference on System Sciences (HICSS)*, 2025.
- da Silva Carvalho N., Papadimitriou A., Stegwee R., Gille H., et al., "[Accelerating European electronic health record exchange format (EEHRxF) implementation across Europe: a policy perspective](https://doi.org/10.3389/fmed.2025.1648170)", *Frontiers in Medicine*, 2025.
- Kay S., Cangioli G., Nusbaum M., "[The International Patient Summary and the extensibility requirement](https://international-patient-summary.net/the-international-patient-summary-and-the-extensibility-requirement/)", *Studies in Health Technology and Informatics* (pHealth), 2020.
- D'Amore J., Cangioli G., Hausam R., "[Advancing the International Patient Summary](https://international-patient-summary.net/advancing-the-international-patient-summary/)"
- "[Towards the Austrian Patient Summary](https://international-patient-summary.net/towards-the-austrian-patient-summary/)", *Studies in Health Technology and Informatics* (dHealth).
- "[Revival of the International Patient Summary (IPS)](https://smiledigitalhealth.com/our-blog/revival-of-the-international-patient-summary-ips)", Smile Digital Health blog.
- [PubMed search: "international patient summary"](https://pubmed.ncbi.nlm.nih.gov/?term=%22international+patient+summary%22) eelretsenseeritud kirjanduse jaoks.


## References

Tekstis olevad nummerdatud viited, näiteks [1], viivad allpool vastava kirjeni. Lingid kontrolliti 2026. aasta novembris. Seadused, kasutuselevõtu arvud ja versioonid muutuvad, seega kontrollige kehtiva seisu jaoks allikat.

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

Neid allikaid ei ole eespool viidatud, kuid need on standardi enda esmased viited.

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
