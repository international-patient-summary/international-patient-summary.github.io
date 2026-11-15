# International Patient Summary (IPS)

**International Patient Summary (IPS)** je svetovni standard za kratek elektronski izvleček iz zdravstvenega zapisa. Vsebuje osnovna klinična dejstva, ki jih zdravnik potrebuje za varno zdravljenje bolnika. Zasnovan je tako, da je:

- **Minimalen in namenoma nepopoln.** Je majhen, izbran podnabor zdravstvenega zapisa, ne celoten zapis.
- **Neodvisen od stroke.** Uporablja ga lahko vsak zdravnik, na katerem koli področju.
- **Neodvisen od bolezni.** Ni vezan na določeno bolezen ali pot zdravljenja.
- **Izvedljiv in mednaroden.** Zgrajen je na globalnih standardih in terminologijah, zato ga je mogoče uporabljati v različnih državah, jezikih in informacijskih sistemih.

Na kratko, IPS odgovarja na eno vprašanje zdravnika, ki bolnika še nikoli ni srečal: *„Kaj moram vedeti zdaj, da bom to osebo varno oskrbel?“*


## Zakaj IPS obstaja

Zdravstvene informacije so običajno zaklenjene v lokalnem elektronskem zdravstvenem zapisu (EZZ), nacionalnem sistemu ali izdelku posameznega ponudnika. Kadar bolnik poišče oskrbo drugje, na primer v drugi bolnišnici, regiji ali državi, ima zdravnik, ki ga zdravi, pogosto brez dostopa do te zgodovine. IPS vsem ponuja en skupen, prenosljiv format povzetka.

### Glavni primeri uporabe

| Primer uporabe | Opis |
|---|---|
| **Nenačrtovana in nujna oskrba** | Bolnik zboli ali se poškoduje daleč od doma, lokalni zdravniki pa ne morejo do njegovega domačega EZZ. To je prvotni, glavni primer uporabe. |
| **Čezmejna oskrba** | Popotniki, migranti, čezmejni delavci in begunci s seboj nosijo povzetek, ki ga lahko preberejo zdravniki v tujini. |
| **Načrtovana oskrba in prehodi** | Napotitve, specialistični pregledi, sprejemi, odpusti in predaje med izvajalci. |
| **Zdravstveni turizem in mobilnost** | Bolniki, ki se odločijo za oskrbo v drugi jurisdikciji. |
| **Opolnomočenje bolnika** | Bolniki imajo svoj povzetek, ga pregledujejo in delijo iz aplikacije v telefonu, portala ali natisnjene kopije. |


## Kdaj uporabiti IPS

IPS uporabite, kadar nekdo, ki bolnika ne pozna, hitro potrebuje zanesljiv trenuten posnetek in kadar pošiljatelj in prejemnik ne delita informacijskega sistema.

### Dobri primeri

- **Nujna in nenačrtovana oskrba**, zlasti stran od doma ali čez mejo. Za to je bil IPS zasnovan.
- **Čezmejna izmenjava med nacionalnimi sistemi**, kot je storitev EU MyHealth@EU [[1]](#ref-1) [[2]](#ref-2).
- **Povzetki, ki jih hrani bolnik**, ki jih popotniki, migranti, begunci, romarji ali ljudje s kompleksnimi stanji nosijo v telefonu ali na papirju [[3]](#ref-3).
- **Nacionalni ali regionalni povzetek bolnika.** Mnoge države gradijo lasten povzetek kot profil IPS, tako da ga je mogoče izmenjevati tudi mednarodno [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
- **Skupna osnova za prehode v oskrbi,** kot so napotitve, sprejemi in odpusti, kadar bogatejši specializiran dokument ni na voljo.
- **Izhodišče za druge nabore podatkov,** kot so potrdila o cepljenju, raziskovalni podatki ali registri, ki potrebujejo ista osnovna dejstva [[7]](#ref-7) [[8]](#ref-8).

### Slabi primeri

- **Celoten zdravstveni zapis.** IPS je namenoma minimalen. Kadar so pomembne podrobnosti, uporabite celoten izvoz zapisa ali specializiran dokument.
- **Dokumenti, specifični za stroko,** kot so povzetek onkološkega zdravljenja, nosečniški karton ali podroben odpustni zapis. Ti imajo lastne standarde, ki lahko vključujejo vsebino IPS ali se nanjo sklicujejo.
- **Klinični delovni procesi v realnem času znotraj ene organizacije.** Znotraj enega EZZ povprašujte po živih podatkih, ne po povzetku kot posnetku.
- **Pravni, obračunski ali zavarovalniški zapisi.** IPS je klinični povzetek, ne upravni zapis ali zapis za obračun.
- **Odločitve, ki zahtevajo zajamčeno popolnost.** IPS je tako popoln in aktualen, kot sta njegov vir in avtor. Kritična dejstva vedno, kadar je mogoče, potrdite z bolnikom.


## Kaj IPS vsebuje

Dokument IPS ima dve plasti:

1. **Glavo, ki beleži, kdo, kaj in kdaj:**
   - **Bolnik:** identiteta, demografski podatki in stiki.
   - **Avtor:** oseba, organizacija ali sistem, ki je povzetek pripravil.
   - **Skrbnik (custodian):** organizacija, odgovorna za njegovo vzdrževanje.
   - **Potrjevalec (attester):** kdo ga je preveril, če ga je kdo.
   - **Datum in čas:** kdaj je bil ustvarjen.

2. **Klinični del, razdeljen na razdelke.** Razdelki so obvezni, priporočeni ali neobvezni.

| Razdelek | Status | Značilna vsebina |
|---|---|---|
| **Medication Summary** (povzetek zdravil) | Obvezen | Trenutna in pomembna pretekla zdravila, recepti, odmerjanje |
| **Allergies and Intolerances** (alergije in intolerance) | Obvezen | Alergije na zdravila, hrano in okolje; reakcije in resnost |
| **Problem List** (seznam težav) | Obvezen | Aktivne diagnoze, stanja in klinične težave |
| Immunizations (cepljenja) | Priporočen | Prejeta cepiva, kot so proti tetanusu, hepatitisu B, gripi, covidu-19 |
| History of Procedures (zgodovina posegov) | Priporočen | Večje operacije in invazivni posegi |
| Medical Devices (medicinski pripomočki) | Priporočen | Vsadki in naprave, kot so srčni spodbujevalniki, stenti, proteze |
| Diagnostic Results (diagnostični izvidi) | Priporočen | Ključni laboratorijski rezultati, slikovne preiskave, patologija |
| Vital Signs (vitalni znaki) | Neobvezen | Krvni tlak, srčni utrip, teža, višina, ITM |
| History of Past Illness (zgodovina preteklih bolezni) | Neobvezen | Preboleli stanja in pomembne pretekle težave |
| Functional Status (funkcionalno stanje) | Neobvezen | Invalidnosti in zmožnost opravljanja vsakdanjih dejavnosti |
| Plan of Care (načrt oskrbe) | Neobvezen | Načrti oskrbe in priporočila za zdravljenje |
| Social History (socialna anamneza) | Neobvezen | Tobak, alkohol in drugi pomembni dejavniki življenjskega sloga |
| History of Pregnancy (zgodovina nosečnosti) | Neobvezen | Trenutno stanje nosečnosti in zgodovina nosečnosti |
| Advance Directives (vnaprejšnje izjave) | Neobvezen | Pisne izjave o zdravljenju, želje glede oživljanja, izjave o soglasju |
| Alerts (opozorila) | Neobvezen | Za varnost ključna opozorila, ki ne sodijo drugam (dodano v FHIR IPS STU 2) |
| Patient Story (zgodba bolnika) | Neobvezen | Kaj je pomembno za bolnika: potrebe, prednosti, vrednote, skrbi in želje, v bolnikovih lastnih besedah (dodano v FHIR IPS STU 2) |

**Pomembno je izrecno povedati „nič“.** Prazen razdelek zdravniku ne pove, ali bolnik nima alergij ali jih nihče ni zabeležil. IPS zato pričakuje izrecne izjave, kot so *„ni znanih alergij“*, *„ni trenutnih zdravil“* ali *„informacije niso na voljo“*.


## Standardi za IPS

IPS je družina usklajenih standardov. Standardi ISO in CEN določajo, *kaj* mora povzetek bolnika vsebovati. Izvedbeni vodniki HL7 določajo, *kako* ga kodirati.

| Standard | Organ | Vloga |
|---|---|---|
| **EN 17269** | CEN (Evropski odbor za standardizacijo) | Abstraktni nabor podatkov IPS, objavljen leta 2019 |
| **ISO 27269** | ISO (Mednarodna organizacija za standardizacijo) | Mednarodna različica abstraktnega nabora podatkov IPS, objavljena leta 2021 |
| **CEN/TS 17288** | CEN | Smernice za izvedbo IPS za čezmejno uporabo |
| **HL7 FHIR IPS Implementation Guide** | HL7 International | Sodobno kodiranje, prijazno do API-jev, in glavni izvedbeni format. STU 2 (2.0.x) je dodal razdelka Alerts in Patient Story, dovolil prazne razdelke, pojasnil `$summary` in prešel na terminologijo SNOMED CT IPS [[9]](#ref-9). |
| **HL7 CDA IPS Implementation Guide** | HL7 International | Kodiranje dokumentov v XML, običajno v obstoječih nacionalnih in evropskih infrastrukturah |

Delo usklajuje **Joint Initiative Council for Global Health Informatics Standardization (JIC)**. JIC združuje ISO, CEN, HL7, SNOMED International, IHE in druge. IPS je zrasel iz sodelovanja EU in ZDA leta 2016 na področju čezmejnih zdravstvenih podatkov, danes pa ga podpirajo vlade in programi digitalnega zdravstva po vsem svetu.


## Kako se IPS kodira s HL7 FHIR

V FHIR je IPS en sam **`Bundle`** tipa `document`:

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

Ključne tehnične točke:

- **Vsak razdelek ima besedilo, berljivo za ljudi.** Zdravnik lahko IPS prebere v navadnem brskalniku, tudi brez programske opreme FHIR.
- **Vsak razdelek ima tudi kodirane vnose**, torej strukturirane vire FHIR, ki jih programska oprema lahko obdela, prevede in uskladi.
- **Profili omejujejo osnovne vire FHIR.** Na primer, *Patient (IPS)* in *AllergyIntolerance (IPS)* določata minimalne podatke in elemente „must support“.
- **Operacija `$summary`** (`GET [base]/Patient/[id]/$summary`) strežnik FHIR prosi, naj na zahtevo ustvari IPS za bolnika.
- **IPS je mogoče podpisati in je samostojen.** Celoten dokument je mogoče shraniti, poslati, podpisati in preveriti kot eno enoto.


## Terminologije

Skupni kodni sistemi naredijo IPS berljiv med jeziki in državami:

| Terminologija | Za kaj se uporablja |
|---|---|
| **SNOMED CT** | Težave, alergije, posegi, pripomočki, klinične ugotovitve. Brezplačni podnabor **SNOMED CT IPS Terminology** je na voljo za uporabo z IPS, tudi v državah, ki niso članice. |
| **LOINC** | Vrste dokumentov in razdelkov, laboratorijski testi, vitalni znaki |
| **ATC** in drugi kodni sistemi zdravil | Zdravila in zdravilne učinkovine |
| **UCUM** | Merske enote |
| **Nabori vrednosti ISO in HL7** | Države, jeziki, upravni spol, razlogi za manjkajoče in neznane podatke |

Ker so vnosi kodirani, lahko sprejemni sistem prikaže IPS, napisan v portugalščini, z angleškimi oznakami. Kodirani pomen ostane enak.


## Kako IPS uporabljajo bolniki in zdravniki

IPS lahko ustvari EZZ, nacionalna storitev zdravstvenih zapisov, bolniški portal ali osebna zdravstvena aplikacija. Nato ga je mogoče dostaviti na več načinov:

- **Od sistema do sistema:** prek API-jev FHIR REST, nacionalnih infrastruktur ali čezmejnih prehodov, kot je omrežje EU MyHealth@EU.
- **Deljenje prek bolnika:** bolnik hrani povzetek v denarnici ali zdravstveni aplikaciji in ga deli na zahtevo.
- **SMART Health Links:** koda QR ali URL, ki zdravniku omogoča časovno omejen, po želji z geslom zaščiten dostop do šifriranega IPS. Zdravnik ga lahko odpre v navadnem spletnem brskalniku.
- **Papir ali PDF:** natisnjen pripovedni prikaz kot rezerva, kadar nič drugega ne deluje.

Aplikacije, kot je **CommonHealth**, bolnikom omogočajo zbiranje zapisov in deljenje IPS prek SMART Health Links.

Tipičen nujni scenarij:

1. Popotnik se v tujini zgrudi.
2. Popotnik ali njegov spremljevalec pokaže kodo QR s telefona.
3. Zdravnik urgence jo skenira in v nekaj sekundah vidi popotnikova zdravila, alergije in aktivne težave.
4. Zdravnik se izogne nevarnemu medsebojnemu delovanju zdravil in bolnika varno zdravi.


## Načela in oblikovne odločitve

- **Varnost na prvem mestu.** Vsebina je izbrana po klinični pomembnosti, ne po popolnosti.
- **Globalno privzeto, lokalno prek razširitev.** Države ustvarjajo nacionalne profile, kot so različice EU, Avstralije ali Kanade, ki dodajajo zahteve, ne da bi kršile mednarodno jedro.
- **Berljiv za ljudi in obdelovalen za stroje.** Besedilo in kodirani podatki soobstajajo.
- **Brezplačen in odprt.** Specifikacije HL7 IPS in podnabor SNOMED CT za IPS so prosto dostopni, da bi znižali ovire za sprejetje.
- **Zasebnost in soglasje.** Dostop urejata lokalna zakonodaja in bolnikovo soglasje. Mehanizmi, kot je SMART Health Links, puščajo nadzor bolniku.


## Kako uporabljati IPS

### Za bolnike

1. **Zaprosite zanj.** Vprašajte svojo ambulanto, bolnišnico, nacionalni zdravstveni portal ali zdravstveno aplikacijo, ali lahko ustvarijo IPS ali nanj oprt nacionalni povzetek bolnika.
2. **Preverite ga.** Preberite ga, dokler ste zdravi. Sporočite vse, kar je napačno ali manjka, zlasti alergije in zdravila.
3. **Imejte ga pri sebi.** Shranite ga v zdravstveno aplikacijo ali denarnico, kot kodo QR SMART Health Link ali kot izpis med potnimi dokumenti.
4. **Ohranjajte ga aktualnega.** Pridobite novega po novi diagnozi, novem dolgotrajnem zdravilu, operaciji ali vsadku.
5. **Delite ga namerno.** Pokažite ga zdravniku, ki vas zdravi. SMART Health Link lahko poteče in lahko zahteva geslo, tako da sami nadzirate, kdo ga vidi in kako dolgo [[10]](#ref-10).

### Za zdravnike

1. **Najprej preverite glavo.** Kdo ga je napisal, kdaj in ali ga je kdo preveril. Star ali nepreverjen povzetek zahteva več previdnosti.
2. **Najprej preberite obvezne razdelke:** alergije, zdravila in težave.
3. **Razlikujte „ni znanih“ od „ni zabeleženo“.** „Ni znanih alergij“ je klinična izjava. Prazen ali „neznan“ razdelek to ni.
4. **Kritična dejstva potrdite** z bolnikom ali njegovim spremljevalcem, kadar koli lahko.
5. **Uporabite kodirane podatke.** Kjer vaš sistem to podpira, kodirani vnosi omogočajo prikaz povzetka v vašem jeziku in preverjanje po pravilih za medsebojno delovanje zdravil in alergije.
6. **Ne predpostavljajte popolnosti.** IPS je varnostna mreža, ne popolna zgodovina.

### Za izvajalce

1. **Izberite specifikacijo.** Uporabite trenutni HL7 FHIR IPS Implementation Guide (STU 2) ali nacionalni profil svoje države. Za infrastrukture na osnovi CDA uporabite vodnik CDA IPS [[9]](#ref-9) [[11]](#ref-11).
2. **Preslikajte svoje podatke.** Preslikajte lokalne podatke v profile IPS: `Patient`, `AllergyIntolerance`, `MedicationStatement`, `Condition` in tako naprej. Večina dela je v tem preslikovanju.
3. **Preslikajte svojo terminologijo.** Preslikajte lokalne kode v SNOMED CT, LOINC in kodne sisteme zdravil. SNOMED CT IPS Terminology je za ta namen brezplačna [[12]](#ref-12).
4. **Ustvarite dokument.** Podprite operacijo `$summary` ali sami zgradite `Bundle` in `Composition`. Vključite berljivo besedilo za vsak razdelek in izrecne izjave „ni znanih“ ali „ni na voljo“.
5. **Preverite ga.** Vsak ustvarjeni dokument preverite s FHIR Validator in kompletom za preskušanje skladnosti, kot je Inferno IPS Test Kit [[13]](#ref-13).
6. **Podpišite ga in delite.** Odločite, kako se dokumenti podpisujejo, shranjujejo in pošiljajo: API, register dokumentov, čezmejni prehod ali SMART Health Link.
7. **Uporabljajte ga varno.** Kot prejemnik prikažite besedilo, tudi če ne morete obdelati vseh kodiranih vnosov, ohranite vidna vir in avtorja ter nikoli tiho ne združite prejetih podatkov z lokalnim zapisom.
8. **Preskušajte z drugimi.** Pred uvedbo v produkcijo preverite medsebojno delovanje z drugimi ponudniki in državami na Connectathonih IHE in HL7.

### Za vlade in zdravstvene organizacije

1. **Sprejmite nacionalni profil,** ki gradi na IPS, namesto ločenega formata, da je nacionalni povzetek privzeto mednaroden [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
2. **Uredite upravljanje:** kdo sme povzetek ustvarjati, posodabljati in potrjevati ter kdo odgovarja za njegovo točnost.
3. **Uredite licenciranje terminologije:** članstvo v SNOMED CT ali uporabo brezplačnega podnabora IPS.
4. **Uredite identiteto, soglasje in zaupanje:** kako se bolniki identificirajo, kako se beleži soglasje in kateri okvir zaupanja, kot sta MyHealth@EU ali Global Digital Health Certification Network SZO, se uporablja za preverjanje dokumentov [[1]](#ref-1) [[14]](#ref-14).
5. **Objavite, kar ste zgradili,** v IPS Implementation Registry, da se bodo drugi lahko učili iz tega [[15]](#ref-15).


## Povezovanje IPS z zdravstvenimi sistemi

IPS je redko ločen sistem. Je pogled na podatke, ki že obstajajo v EZZ, izmenjavah zdravstvenih informacij, nacionalnih zapisih in osebnih zdravstvenih aplikacijah.

| Vzorec povezovanja | Kako deluje | Primeri |
|---|---|---|
| **Ustvari ga EZZ** | EZZ na zahtevo zgradi IPS iz lastnih podatkov, pogosto prek operacije FHIR `$summary`. | Ponudniki EZZ in strežniki FHIR, kot je HAPI FHIR, ki ima modul generatorja IPS |
| **Nacionalni ali regionalni zapis** | Nacionalna storitev povzetkov bolnikov shranjuje profil IPS in ga daje na voljo pooblaščenim izvajalcem. | PS-CA v Kanadi, AU Patient Summary v Avstraliji, elektronski zapis bolnika v Švici s CH IPS [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6) |
| **Čezmejni prehod** | Vsaka država upravlja nacionalno kontaktno točko. Ta povzetek matične države pretvori v dogovorjeni izmenjevalni format, ga pošlje čez mejo, država prejemnica pa ga prikaže v lokalnem jeziku. | MyHealth@EU National Contact Points for eHealth [[1]](#ref-1) [[2]](#ref-2) |
| **Regionalno izmenjevalno omrežje** | Ministrstva za zdravje izmenjujejo dokumente IPS prek nacionalnih strežnikov FHIR po skupnem regionalnem vodniku. | IPS-LAC organizacije RACSEL in Pan American Highway for Digital Health (PH4H) v Latinski Ameriki in na Karibih [[16]](#ref-16) |
| **Prek bolnika** | Bolnik hrani IPS v aplikaciji ali denarnici in ga deli s kodo QR ali SMART Health Link. | CommonHealth; delo omrežja zaupanja SZO na IPS za romanja [[10]](#ref-10) [[14]](#ref-14) |
| **Dostop prek API-ja** | Aplikacije pridobijo IPS pooblaščenega bolnika prek API-ja FHIR. | International Patient Access (IPA); ameriška omrežja, kot je Flexpa, ki je dodala podporo za IPS v okviru CMS Interoperability Framework [[17]](#ref-17) [[18]](#ref-18) |

Točke povezovanja, ki jih je treba načrtovati:

- **Deljenje dokumentov:** profili IHE, kot sta MHD (FHIR) in XDS (registri dokumentov), shranjujejo in iščejo dokumente IPS. Vsebinski profili IHE IPS dodajajo pravila skladnosti in preskušanja [[11]](#ref-11).
- **Identiteta bolnika:** IHE PIXm in PDQm ali nacionalni identifikator povežeta bolnika med sistemi.
- **Obstoječi dokumenti:** mnogi sistemi že ustvarjajo CDA, C-CDA ali nacionalne povzetke. Njihova preslikava v IPS je običajno lažja kot začeti znova, vendar preverite razlike v kardinalnosti, naborih vrednosti in kodnih sistemih.
- **Nacionalni profili:** nacionalno jedro, kot so US Core, AU Core, CH Core ali JP Core, se lahko razlikuje od IPS. Nacionalni profili povzetka bolnika oboje uskladijo [[5]](#ref-5) [[6]](#ref-6) [[19]](#ref-19).
- **Prevajanje in prikaz:** prejemniki naj prikažejo besedilo in prevedejo kodirane vnose z uporabo prikaznih imen kod v jeziku prejemnika.
- **Varnost:** uporabljajte TLS, podpisane dokumente, kjer je to zahtevano, beleženje revizijskih sledi (na primer IHE ATNA ali BALP) in nadzor dostopa, vezan na soglasje.


## Trenutna uveljavljenost

IPS je prešel od pilotov k nacionalnim in regionalnim programom. Stanje se hitro spreminja, zato za najnovejši položaj preverite povezane vire.

- **IPS Implementation Registry.** Skupnost IPS vzdržuje javni register izvedb. Sredi leta 2026 je vseboval 34 vnosov, od argentinskega projekta IPS-LAC prek izvajalcev do vietnamskega Better Health Program [[15]](#ref-15).
- **Ekosistem FHIR.** V raziskavi State of FHIR 2025 organizacij HL7 International in Firely je 42 anketirancev navedlo, da IPS podpira njihove nacionalne specifikacije FHIR, več kot katerikoli drug mednarodni vodnik [[20]](#ref-20).
- **Raziskave.** Študija o sprejetju IPS iz leta 2025 je izvedla pogovore z deležniki, ki so kot glavni koristi navedli boljšo kakovost oskrbe in varnost bolnikov [[21]](#ref-21).

| Država ali regija | Stanje |
|---|---|
| **Evropska unija in EGP** | MyHealth@EU izmenjuje povzetke bolnikov in e-recepte med državami. Predstavitev Evropske komisije iz leta 2026 je poročala o 17 delujočih državah članicah in Norveški, večina preostalih pa se namerava pridružiti [[2]](#ref-2) [[22]](#ref-22). Uredba EHDS izmenjavo povzetkov bolnikov do leta 2029 naredi obvezno [[23]](#ref-23). |
| **Kanada** | Vsekanadski povzetek bolnika (PS-CA), ki ga je oktobra 2022 odobrila organizacija Canada Health Infoway, temelji na IPS s kanadskimi prilagoditvami [[4]](#ref-4). |
| **Avstralija** | AU Patient Summary, zgrajen na IPS in AU Core, razvija HL7 Australia prek programa Sparked [[5]](#ref-5) [[24]](#ref-24). |
| **Švica** | CH IPS 2.0.0 (poskusna uporaba) organizacije HL7 Switzerland temelji na IPS in CH Core. Ločen profil dodaja, kar potrebuje švicarski elektronski zapis bolnika [[6]](#ref-6). |
| **Združene države** | Ni zveznega mandata za IPS. ZDA uporabljajo US Core in USCDI. Zvezne agencije sodelujejo pri mednarodnem delu na IPS, nekatera omrežja pa IPS podpirajo prostovoljno [[18]](#ref-18). |
| **Latinska Amerika in Karibi** | Ministrstva za zdravje RACSEL uporabljajo regionalni vodnik IPS-LAC. Leta 2023 je 16 držav izmenjalo dokumente IPS-LAC na connectathonu v São Paulu [[16]](#ref-16). |
| **Japonska** | Raziskovalci so zgradili in validirali aplikacijo povzetka bolnika na osnovi IPS za običajne japonske primere uporabe z uporabo JP Core [[19]](#ref-19). |
| **Tajvan in Filipini** | Poročilo o izvedbi iz leta 2025 opisuje čezmejni osebni zdravstveni zapis, ki uporablja FHIR in je usklajen z IPS [[25]](#ref-25). |
| **G7** | Leta 2021 so se zdravstveni ministri G7 zavezali k delu za IPS in objavili načrt IPS [[26]](#ref-26). |
| **SZO** | Global Digital Health Certification Network SZO vključuje domene zaupanja na osnovi IPS, kot je preverljiv IPS za romanja [[14]](#ref-14). |


## Zakoni, predpisi in politike po državah in regijah

IPS je standard, ne zakon. Zakoni odločajo, ali mora država izmenjevati povzetke bolnikov, v kakšnem formatu in po katerih pravilih zasebnosti. To je povzetek, ne pravni nasvet. Vedno preverite veljavno besedilo zakona.

| Jurisdikcija | Zakon ali politika | Kaj to pomeni za IPS |
|---|---|---|
| **Evropska unija** | **Uredba o evropskem prostoru za zdravstvene podatke (EHDS), (EU) 2025/327.** Objavljena 5. marca 2025; veljavna od 26. marca 2025 [[23]](#ref-23) [[27]](#ref-27). | Povzetki bolnikov so „prednostna kategorija“. Izmenjava v evropskem formatu za izmenjavo elektronskih zdravstvenih zapisov mora do leta 2029 delovati v vsaki državi članici. Medicinske slike, rezultati preiskav in odpustna pisma sledijo do leta 2031 [[28]](#ref-28). Format povzetkov bolnikov temelji na HL7 IPS. |
| **Evropska unija** | **Direktiva 2011/24/EU** o uveljavljanju pravic pacientov pri čezmejnem zdravstvenem varstvu [[29]](#ref-29). | Ustanovila je omrežje e-zdravja (eHealth Network), ki je sprejelo smernice o povzetku bolnika za MyHealth@EU. |
| **Evropska unija** | **Splošna uredba o varstvu podatkov (GDPR), (EU) 2016/679** [[30]](#ref-30). | Zdravstveni podatki so posebna kategorija. Vsaka izmenjava IPS zahteva pravno podlago in ustrezne zaščitne ukrepe. |
| **Združene države** | **21st Century Cures Act in pravila proti blokiranju informacij** [[31]](#ref-31); prostovoljni **CMS Interoperability Framework** (2025) [[17]](#ref-17). | Noben zakon ne zahteva IPS. Zakoni zahtevajo dostop do elektronskih zdravstvenih informacij in njihovo izmenjavo z uporabo US Core in USCDI. Podpora za IPS je prostovoljna. |
| **Kanada** | Zakoni provinc in ozemelj o zdravstvenih informacijah. Zvezni **Connected Care for Canadians Act** (predlog zakona C-72) je bil vložen leta 2024, vendar ni bil sprejet, preden je bil parlament leta 2025 prorogiran. | PS-CA je vsekanadska specifikacija, ne pravna zahteva. Uvedbo vodijo province in ozemlja skupaj s Canada Health Infoway [[4]](#ref-4). |
| **Združeno kraljestvo** | **Data (Use and Access) Act 2025** [[32]](#ref-32). | Vključuje pooblastila za določanje informacijskih standardov za IT v zdravstvu in socialnem varstvu odraslih. Združeno kraljestvo je gostilo zavezo G7 za IPS leta 2021 [[26]](#ref-26). |
| **Avstralija** | **My Health Records Act 2012** in spremembe iz leta 2025 o „privzetem deljenju“. | AU Patient Summary je nacionalna specifikacija, razvita prek Sparked [[5]](#ref-5) [[24]](#ref-24). |
| **Švica** | **Zvezni zakon z dne 19. junija 2015 o elektronskem zapisu bolnika (EPRA, SR 816.1)**, v veljavi od 15. aprila 2017 [[33]](#ref-33). | CH IPS vključuje profil za dokumente v švicarskem elektronskem zapisu bolnika [[6]](#ref-6). |
| **Latinska Amerika in Karibi** | Regionalni sporazumi prek RACSEL in PH4H s podporo Inter-American Development Bank za regionalni pravni okvir [[16]](#ref-16). | IPS-LAC je dogovorjeni regionalni format za čezmejno izmenjavo. |
| **G7** | **Sporočilo zdravstvenih ministrov**, Oxford, junij 2021, in **G7 IPS Roadmap**, december 2021 [[26]](#ref-26) [[34]](#ref-34). | Politična zaveza k delu za IPS in dostop bolnikov, ne zavezujoč zakon. |


## Prednosti in slabosti

| Prednosti | Slabosti |
|---|---|
| **Varnejša nenačrtovana oskrba.** Zdravniki v nekaj sekundah vidijo alergije, zdravila in težave. | **Tako dober je kot njegov vir.** Zastareli ali napačni izvorni podatki dajo zastarel ali napačen povzetek. |
| **En format po vsem svetu.** Ena izvedba služi nacionalnim in čezmejnim potrebam. | **Nacionalne razlike.** Nacionalni profili dodajajo pravila, zato lahko „veljaven IPS“ v eni državi zahteva delo, da ga sprejmejo v drugi. |
| **Zgrajen na odprtih, zrelih standardih:** ISO, CEN, HL7 FHIR in CDA, SNOMED CT in LOINC. | **Breme terminologije.** Preslikava lokalnih kod v SNOMED CT in LOINC je težko delo, polni SNOMED CT pa zahteva licenco, ki presega brezplačni podnabor IPS. |
| **Berljiv in računalniško obdelovalen.** Besedilo za ljudi, kodirani podatki za programsko opremo in prevajanje. | **Besedilo in kodirani podatki se lahko razhajajo,** če je generator površen, prejemniki pa lahko zaupajo napačnemu. |
| **Opolnomočenje bolnika.** Bolniki lahko hranijo in delijo svoj povzetek. | **Tveganje za zasebnost in soglasje.** Prenosljiv povzetek je občutljiv, zakoni in modeli soglasja pa se po državah razlikujejo. |
| **Brezplačne specifikacije** in brezplačna terminologija IPS znižujejo stroške [[12]](#ref-12). | **Pogoste spremembe različic.** STU 1, STU 1.1 in STU 2 soobstajajo, format EHDS pa se sklicuje na zgodnejšo različico [[28]](#ref-28). |
| **Ponovno uporaben** za potrdila o cepljenju, raziskave in registre [[7]](#ref-7) [[8]](#ref-8). | **Namenoma minimalen.** Ni nadomestilo za celotne zapise ali specialistične dokumente, vrzeli za sekundarno uporabo pa zahtevajo razširitve [[7]](#ref-7). |
| **Močna podpora** vlad, EU, G7, SZO in organov za standardizacijo. | **Neenakomerno sprejemanje.** Mnoge države in ponudniki še pilotirajo, ozaveščenost bolnikov pa je nizka. |


## Načrti in prihodnje smeri

- **EU, 2029:** izmenjava povzetkov bolnikov in e-receptov deluje v vseh državah članicah EU po EHDS [[23]](#ref-23) [[28]](#ref-28).
- **EU, 2031:** medicinske slike, laboratorijski rezultati in odpustna pisma se pridružijo evropskemu formatu za izmenjavo elektronskih zdravstvenih zapisov [[28]](#ref-28).
- **Razširitev MyHealth@EU:** več držav se pridružuje in nastajajo nove storitve za laboratorijske rezultate, odpustna pisma in medicinske slike [[2]](#ref-2) [[22]](#ref-22).
- **Sprejemanje FHIR IPS STU 2:** izvajalci prehajajo na razdelka Alerts in Patient Story, izrecne prazne razdelke in terminologijo SNOMED CT IPS [[9]](#ref-9).
- **Avstralija:** objava AU Patient Summary Release 1, načrtovana za leto 2026 [[24]](#ref-24).
- **IPS Best Practices Project:** skupno prizadevanje za dokumentiranje pridobljenih izkušenj, delo se začne leta 2026.
- **Omrežje zaupanja SZO:** več domen zaupanja na osnovi IPS za preverljive, prenosljive zdravstvene dokumente [[14]](#ref-14).
- **SMART Health Links:** standardizirani prek HL7 za deljenje, ki ga nadzoruje bolnik [[10]](#ref-10).
- **Latinska Amerika in Karibi:** širša izmenjava IPS-LAC prek PH4H [[16]](#ref-16).
- **Raziskave in sekundarna uporaba:** delo za razširitev povzetkov bolnikov za klinične raziskave in umetno inteligenco ob ohranitvi minimalnega jedra [[7]](#ref-7).


## Slovar

| Izraz | Pomen |
|---|---|
| **IPS** | International Patient Summary |
| **FHIR** | Fast Healthcare Interoperability Resources, sodobni standard HL7 na osnovi API-jev |
| **CDA** | Clinical Document Architecture, standard dokumentov XML organizacije HL7 |
| **IG** | Implementation Guide, nabor profilov in pravil za uporabo standarda |
| **Profil** | Omejena različica vira FHIR za določeno uporabo |
| **SNOMED CT** | Systematized Nomenclature of Medicine – Clinical Terms |
| **LOINC** | Logical Observation Identifiers Names and Codes |
| **SMART Health Links** | Standard za deljenje zdravstvenih podatkov prek povezave ali kode QR |
| **JIC** | Joint Initiative Council for Global Health Informatics Standardization |


## Več informacij

- HL7 FHIR IPS Implementation Guide: <https://hl7.org/fhir/uv/ips/>
- IPS continuous build: <https://build.fhir.org/ig/HL7/fhir-ips/>
- International Patient Summary project site: <https://international-patient-summary.net/>
- ISO 27269 (Health informatics — International patient summary): <https://www.iso.org/standard/79491.html>
- SNOMED CT IPS Terminology: <https://www.snomed.org/international-patient-summary-terminology>
- SMART Health Links: <https://docs.smarthealthit.org/smart-health-links/>


## Viri

Te povezave pokrivajo vire, specifikacije, programsko opremo, projekte, videoposnetke, knjige in raziskave o IPS. Večina je bila preverjena ob pisanju te strani. Nekaj spletnih mest založnikov blokira samodejna preverjanja, ta so označena z *(ni preverjeno)*.

### Uradne specifikacije in standardi

- [HL7 FHIR IPS Implementation Guide, current published version](https://hl7.org/fhir/uv/ips/) je verodostojna specifikacija FHIR.
- [HL7 FHIR IPS Implementation Guide, STU 2](https://hl7.org/fhir/uv/ips/STU2/)
- [HL7 FHIR IPS Implementation Guide, STU 1.1](https://hl7.org/fhir/uv/ips/STU1.1/)
- [HL7 FHIR IPS publication history](https://www.hl7.org/fhir/uv/ips/history.html) našteva vse objavljene različice.
- [HL7 FHIR IPS continuous build](https://build.fhir.org/ig/HL7/fhir-ips/) je najnovejše delo v teku, o katerem še ni bilo glasovanja.
- [Structure of the International Patient Summary](https://hl7.org/fhir/uv/ips/en/Structure-of-the-International-Patient-Summary.html) pojasnjuje razdelke in profile.
- [IPS design conventions](https://build.fhir.org/ig/HL7/fhir-ips/en/Design-Conventions.html) pokriva must-support, manjkajoče podatke in besedilo.
- [IPS generation and data inclusion](https://build.fhir.org/ig/HL7/fhir-ips/en/Generation-and-Data-Inclusion.html) pokriva `$summary` in izbiro vsebine.
- [HL7 CDA IPS Implementation Guide, continuous build](https://build.fhir.org/ig/HL7/CDA-IPS/)
- [HL7 CDA IPS product brief](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=483)
- [ISO 27269, Health informatics — International patient summary](https://www.iso.org/standard/79491.html) *(ni preverjeno)*
- [ISO/TC 215 Health informatics committee](https://www.iso.org/committee/54960.html) *(ni preverjeno)*
- [IHE FHIR International Patient Summary profile (FIIO)](https://profiles.ihe.net/PCC/FIIO/volume-1.html)
- [IHE PCC International Patient Summary supplement, 2020 (PDF)](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS_Rev1-0_PC_2020-03-17.pdf)
- [HL7 SMART Health Cards and Links Implementation Guide](https://hl7.org/fhir/uv/smart-health-cards-and-links/)
- [SMART Health Links documentation](https://docs.smarthealthit.org/smart-health-links/)
- [HL7 FHIR International Patient Access (IPA)](https://hl7.org/fhir/uv/ipa/) je sestrska specifikacija za dostop bolnikov prek API-ja.
- [HL7 FHIR R4 base specification](https://hl7.org/fhir/R4/), na kateri gradi IPS.

### Repozitoriji izvorne kode

- [HL7/fhir-ips](https://github.com/HL7/fhir-ips) vsebuje izvor FHIR IPS IG v FHIR Shorthand.
- [HL7/cda-ips](https://github.com/HL7/cda-ips) vsebuje izvor CDA IPS IG.
- [hl7-eu/eps](https://github.com/hl7-eu/eps) vsebuje izvor HL7 Europe Patient Summary.
- [hl7ch/ch-ips](https://github.com/hl7ch/ch-ips) vsebuje švicarski IPS z pregledovalnikom in generatorjem v razvoju.
- [GitHub topic: international-patient-summary](https://github.com/topics/international-patient-summary) našteva repozitorije skupnosti.

### Nacionalne in regionalne prilagoditve

- [HL7 Europe Patient Summary (EPS), continuous build](https://build.fhir.org/ig/hl7-eu/eps/)
- [AU Patient Summary (Australia), continuous build](https://build.fhir.org/ig/hl7au/au-fhir-ps/)
- [Trillium II IPS structure (HL7 Europe)](https://hl7.eu/fhir/build/trillium2/site/ipsStructure.html) izhaja iz projekta EU in ZDA, ki je pomagal zagnati IPS.
- [eHealth Suisse](https://www.ehealthsuisse.ch/) je švicarski center kompetenc za digitalno zdravstvo in uvajanje IPS.
- [MyHealth@EU, cross-border digital health services](https://health.ec.europa.eu/ehealth-digital-health-and-care/electronic-cross-border-health-services_en)
- [Xt-EHR Joint Action](https://www.xt-ehr.eu/) pripravlja formate evropskega prostora za zdravstvene podatke, vključno s povzetkom bolnika.

### Programska oprema in orodja

- [IPS Viewer](https://www.ipsviewer.com) ([source: jddamore/IPSviewer](https://github.com/jddamore/IPSviewer)) je odprtokodni pregledovalnik IPS, ki deluje v brskalniku.
- [uwcirg/shl-ips-viewer](https://github.com/uwcirg/shl-ips-viewer) prikazuje IPS, deljen prek SMART Health Link.
- [smart-on-fhir/smart-health-links](https://github.com/smart-on-fhir/smart-health-links) je referenčna izvedba SMART Health Links.
- [HAPI FHIR IPS generator](https://hapifhir.io/hapi-fhir/docs/server_ips/introduction.html) ([source: hapifhir/hapi-fhir](https://github.com/hapifhir/hapi-fhir)) je odprtokodni strežniški modul v Javi, ki izvaja `$summary`.
- [HAPI FHIR JPA server IPS documentation](https://hapifhir.io/hapi-fhir/docs/server_jpa/ips.html)
- [Inferno IPS Test Kit](https://inferno.healthit.gov/test-kits/ips) ([source: inferno-framework/ips-test-kit](https://github.com/inferno-framework/ips-test-kit)) je odprtokodni komplet za preskušanje skladnosti.
- [FHIR Validator](https://validator.fhir.org/) preverja pakete IPS glede na profile IG.
- [Simplifier: hl7.fhir.uv.ips package](https://simplifier.net/packages/hl7.fhir.uv.ips) vsebuje paket, profile in primere.
- [FHIR package registry](https://registry.fhir.org/)
- [FHIR Shorthand (FSH) School](https://fshschool.org/) uči jezik, v katerem je napisan IPS IG.
- [CommonHealth](https://www.commonhealth.org/) je aplikacija za bolnike, ki ustvarja IPS in ga deli prek SMART Health Links.
- [WHO SMART Trust](https://github.com/WorldHealthOrganization/smart-trust) je okvir zaupanja za Global Digital Health Certification Network SZO.

### Organizacije in projekti

- [International Patient Summary project site](https://international-patient-summary.net/) ima novice, poročila o uvajanju in izobraževalna gradiva.
- [IPS for health IT developers](https://international-patient-summary.net/health-it-developer/)
- [HL7 International](https://www.hl7.org/)
- [IHE International](https://www.ihe.net/)
- [SNOMED International](https://www.snomed.org/)
- [SNOMED CT IPS Terminology](https://www.snomed.org/international-patient-summary-terminology) je brezplačen podnabor za uporabo z IPS.
- [LOINC](https://loinc.org/) *(ni preverjeno)*
- [Joint Initiative Council for Global Health Informatics Standardization (JIC)](http://www.jointinitiativecouncil.org/)
- [Global Digital Health Partnership (GDHP)](https://gdhp.health/)
- [WHO SMART Guidelines](https://smart.who.int/)
- [WHO Global Digital Health Certification Network](https://www.who.int/initiatives/global-digital-health-certification-network)

### Skupnost in dogodki

- [chat.fhir.org](https://chat.fhir.org/) je klepet skupnosti FHIR, ki ima dejaven tok o IPS.
- [HL7 FHIR Connectathons](https://www.hl7.org/events/fhir-connectathon/)
- [IHE Connectathons](https://www.ihe.net/participate/connectathon/)

### Videoposnetki

- [HIMSS20: IPS for computable care guidelines in 200 seconds or less (IHE International, YouTube)](https://www.youtube.com/watch?v=xjEzGM8kBPw)
- [IHE International YouTube channel](https://www.youtube.com/@IHEIntl) vsebuje panele s Connectathonov in seje o IPS.
- [IPS project site news](https://international-patient-summary.net/) povezuje na številne posnete spletne seminarje, med njimi:
  - panel o IPS na IHE North America Connectathon, 2024
  - sejo o IPS na FHIR DevDays 2023
  - Grahame Grieve o IPS in IPA, IHE Connectathon Montreux 2022
  - uvodni nagovor na SNOMED CT Expo 2022
  - Matthew Rahn o IPS v GDHP
  - spletni seminar HL7 „Global Passport“ o čezmejni uporabi
- [YouTube search: International Patient Summary](https://www.youtube.com/results?search_query=international+patient+summary)

### Knjige

- Tim Benson in Grahame Grieve, [*Principles of Health Interoperability: FHIR, HL7 and SNOMED CT*](https://link.springer.com/book/10.1007/978-3-030-56883-2), 4. izdaja, Springer, 2020. Pokriva FHIR, vire kliničnih povzetkov in terminologijo.

### Raziskovalni članki in prispevki

- Laleci Erturkmen G. B., Sinaci A. A., Namli T., Boonstra M., et al., "[An assessment of the European Patient Summary for clinical research: a case study in cardiology](https://doi.org/10.3389/fmed.2024.1481551)", *Frontiers in Medicine*, 2024.
- Lee H., Huang J., Huang S., Chen W., et al., "[Implementing a Cross-Border Next-Generation Personal Health Record in the Philippines and Taiwan: An Implementation Case Report Using Health Level 7 International Fast Healthcare Interoperability Resources](https://doi.org/10.2196/56272)", *JMIR Formative Research*, 2025.
- Song C., Nakayama M., "[Implementation of a Patient Summary Web Application According to the International Patient Summary and Validation in Common Use Cases in Japan](https://doi.org/10.1007/s10916-023-01993-6)", *Journal of Medical Systems*, 2023.
- Schippers D., Spil T., Stegwee R., Folmer E., Donnelly S., "[The adoption and diffusion of the International Patient Summary](https://doi.org/10.24251/hicss.2025.425)", *Proceedings of the 58th Hawaii International Conference on System Sciences (HICSS)*, 2025.
- da Silva Carvalho N., Papadimitriou A., Stegwee R., Gille H., et al., "[Accelerating European electronic health record exchange format (EEHRxF) implementation across Europe: a policy perspective](https://doi.org/10.3389/fmed.2025.1648170)", *Frontiers in Medicine*, 2025.
- Kay S., Cangioli G., Nusbaum M., "[The International Patient Summary and the extensibility requirement](https://international-patient-summary.net/the-international-patient-summary-and-the-extensibility-requirement/)", *Studies in Health Technology and Informatics* (pHealth), 2020.
- D'Amore J., Cangioli G., Hausam R., "[Advancing the International Patient Summary](https://international-patient-summary.net/advancing-the-international-patient-summary/)"
- "[Towards the Austrian Patient Summary](https://international-patient-summary.net/towards-the-austrian-patient-summary/)", *Studies in Health Technology and Informatics* (dHealth).
- "[Revival of the International Patient Summary (IPS)](https://smiledigitalhealth.com/our-blog/revival-of-the-international-patient-summary-ips)", Smile Digital Health blog.
- [PubMed search: "international patient summary"](https://pubmed.ncbi.nlm.nih.gov/?term=%22international+patient+summary%22) za strokovno pregledano literaturo.


## References

Oštevilčeni sklici v besedilu, kot je [1], vodijo do ustreznega vnosa spodaj. Povezave so bile preverjene novembra 2026. Zakoni, podatki o uvajanju in različice se spreminjajo, zato trenutno stanje preverite v viru.

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

Ti viri zgoraj niso navedeni, vendar so glavni sklici za sam standard.

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
