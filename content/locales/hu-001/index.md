# International Patient Summary (IPS)

Az **International Patient Summary (IPS)** az egészségügyi dokumentáció rövid elektronikus kivonatának világszerte használható szabványa. Azokat az alapvető klinikai tényeket tartalmazza, amelyekre az orvosnak szüksége van a beteg biztonságos ellátásához. Úgy tervezték, hogy legyen:

- **Minimális és nem kimerítő.** Az egészségügyi dokumentáció kis, gondosan válogatott részhalmaza, nem a teljes dokumentáció.
- **Szakterülettől független.** Bármely orvos használhatja, bármely szakterületen.
- **Betegségtől független.** Nem kötődik egy adott betegséghez vagy ellátási útvonalhoz.
- **Megvalósítható és nemzetközi.** Globális szabványokra és terminológiákra épül, így országok, nyelvek és informatikai rendszerek között is használható.

Röviden: az IPS egyetlen kérdésre válaszol annak az orvosnak, aki még soha nem találkozott a beteggel: *„Mit kell most tudnom ahhoz, hogy biztonságosan elláthassam ezt a személyt?”*


## Miért létezik az IPS

Az egészségügyi információk általában egy helyi elektronikus egészségügyi dokumentációban (EHR), egy nemzeti rendszerben vagy egy szállító termékében rekednek. Amikor a beteg máshol keres ellátást, például egy másik kórházban, régióban vagy országban, a kezelőorvosnak gyakran nincs hozzáférése ehhez az előzményhez. Az IPS mindenkinek egy közös, hordozható összefoglaló formátumot ad.

### Fő felhasználási esetek

| Felhasználási eset | Leírás |
|---|---|
| **Nem tervezett és sürgősségi ellátás** | A beteg otthonától távol megbetegszik vagy megsérül, és a helyi orvosok nem érik el a beteg otthoni EHR-jét. Ez az eredeti, elsődleges felhasználási eset. |
| **Határokon átnyúló ellátás** | Az utazók, migránsok, határ menti ingázók és menekültek olyan összefoglalót hordanak magukkal, amelyet a külföldi orvosok el tudnak olvasni. |
| **Tervezett ellátás és átadások** | Beutalók, szakorvosi konzultációk, felvételek, elbocsátások és az ellátók közötti átadások. |
| **Egészségturizmus és mobilitás** | Betegek, akik egy másik joghatóságban választanak ellátást. |
| **A beteg felhatalmazása** | A betegek saját összefoglalójukat tartják, megtekintik és megosztják telefonos alkalmazásból, portálról vagy kinyomtatott példányból. |


## Mikor használjuk az IPS-t

Az IPS-t akkor érdemes használni, ha valakinek, aki nem ismeri a beteget, gyorsan megbízható pillanatképre van szüksége, és a küldő és a fogadó nem használ közös informatikai rendszert.

### Jó felhasználási területek

- **Sürgősségi és nem tervezett ellátás**, különösen otthontól távol vagy határon túl. Az IPS-t erre tervezték.
- **Határokon átnyúló csere nemzeti rendszerek között**, például az EU MyHealth@EU szolgáltatásában [[1]](#ref-1) [[2]](#ref-2).
- **A beteg által őrzött összefoglalók**, amelyeket az utazók, migránsok, menekültek, zarándokok vagy összetett betegségekkel élők telefonon vagy papíron hordanak magukkal [[3]](#ref-3).
- **Nemzeti vagy regionális betegösszefoglaló.** Sok ország az IPS egy profiljaként építi fel saját összefoglalóját, így az nemzetközileg is cserélhető [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
- **Közös alap az ellátási átmenetekhez,** például beutalókhoz, felvételekhez és elbocsátásokhoz, amikor nem áll rendelkezésre gazdagabb, speciális dokumentum.
- **Kiindulópont más adathalmazokhoz,** például oltási igazolásokhoz, kutatási adatokhoz vagy olyan nyilvántartásokhoz, amelyeknek ugyanezekre az alapadatokra van szükségük [[7]](#ref-7) [[8]](#ref-8).

### Kevésbé alkalmas területek

- **A teljes orvosi dokumentáció.** Az IPS szándékosan minimális. Ha a részletek számítanak, teljes dokumentáció-exportot vagy speciális dokumentumot használjunk.
- **Szakterület-specifikus dokumentumok,** például onkológiai kezelési összefoglaló, terhesgondozási dokumentáció vagy részletes zárójelentés. Ezeknek saját szabványaik vannak, amelyek tartalmazhatnak IPS-tartalmat, vagy hivatkozhatnak rá.
- **Valós idejű klinikai munkafolyamatok egyetlen szervezeten belül.** Egyetlen EHR-en belül az élő adatokat kérdezzük le, nem egy pillanatkép-összefoglalót.
- **Jogi, számlázási vagy biztosítási nyilvántartások.** Az IPS klinikai összefoglaló, nem adminisztratív vagy elszámolási nyilvántartás.
- **Garantált teljességet igénylő döntések.** Az IPS csak annyira teljes és naprakész, mint a forrása és a szerzője. Ha lehetséges, mindig erősítsük meg a kritikus tényeket a beteggel.


## Mit tartalmaz az IPS

Az IPS-dokumentumnak két rétege van:

1. **Fejléc, amely rögzíti, hogy ki, mit és mikor:**
   - **Beteg:** személyazonosság, demográfiai adatok és elérhetőségek.
   - **Szerző:** az a személy, szervezet vagy rendszer, amely az összefoglalót elkészítette.
   - **Gondozó (custodian):** a fenntartásáért felelős szervezet.
   - **Hitelesítő (attester):** aki ellenőrizte, ha volt ilyen.
   - **Dátum és időpont:** mikor jött létre.

2. **Szakaszokba rendezett klinikai törzs.** A szakaszok kötelezők, ajánlottak vagy opcionálisak.

| Szakasz | Állapot | Jellemző tartalom |
|---|---|---|
| **Medication Summary** (gyógyszer-összefoglaló) | Kötelező | Jelenlegi és releváns korábbi gyógyszerek, receptek, adagolás |
| **Allergies and Intolerances** (allergiák és intoleranciák) | Kötelező | Gyógyszer-, étel- és környezeti allergiák; reakciók és súlyosság |
| **Problem List** (problémalista) | Kötelező | Aktív diagnózisok, állapotok és klinikai problémák |
| Immunizations (védőoltások) | Ajánlott | Beadott oltások, például tetanusz, hepatitis B, influenza, COVID-19 |
| History of Procedures (beavatkozások előzményei) | Ajánlott | Nagyobb műtétek és invazív beavatkozások |
| Medical Devices (orvostechnikai eszközök) | Ajánlott | Implantátumok és eszközök, például pacemakerek, stentek, protézisek |
| Diagnostic Results (diagnosztikai eredmények) | Ajánlott | Fontos laboreredmények, képalkotó leletek, patológia |
| Vital Signs (életjelek) | Opcionális | Vérnyomás, szívfrekvencia, testtömeg, magasság, BMI |
| History of Past Illness (korábbi betegségek) | Opcionális | Meggyógyult állapotok és jelentős korábbi problémák |
| Functional Status (funkcionális állapot) | Opcionális | Fogyatékosságok és a mindennapi tevékenységek elvégzésének képessége |
| Plan of Care (ellátási terv) | Opcionális | Ellátási tervek és kezelési javaslatok |
| Social History (szociális anamnézis) | Opcionális | Dohányzás, alkohol és más releváns életmódbeli tényezők |
| History of Pregnancy (terhességi előzmények) | Opcionális | Jelenlegi terhességi állapot és a korábbi terhességek |
| Advance Directives (előzetes rendelkezések) | Opcionális | Élő végrendelet, újraélesztési preferenciák, beleegyező nyilatkozatok |
| Alerts (figyelmeztetések) | Opcionális | Biztonsági szempontból kritikus figyelmeztetések, amelyek máshová nem illenek (a FHIR IPS STU 2-ben jelent meg) |
| Patient Story (a beteg története) | Opcionális | Ami a betegnek fontos: szükségletek, erősségek, értékek, aggodalmak és preferenciák, a beteg saját szavaival (a FHIR IPS STU 2-ben jelent meg) |

**Fontos, hogy kifejezetten kimondjuk: „semmi”.** Az üres szakasz nem mondja meg az orvosnak, hogy a betegnek nincs-e allergiája, vagy csak senki nem jegyezte fel. Ezért az IPS kifejezett kijelentéseket vár, például *„nincs ismert allergia”*, *„nincs jelenlegi gyógyszer”* vagy *„az információ nem áll rendelkezésre”*.


## Az IPS mögötti szabványok

Az IPS összehangolt szabványok családja. Az ISO- és CEN-szabványok azt határozzák meg, *mit* kell tartalmaznia egy betegösszefoglalónak. A HL7 megvalósítási útmutatói azt határozzák meg, *hogyan* kell kódolni.

| Szabvány | Szervezet | Szerep |
|---|---|---|
| **EN 17269** | CEN (Európai Szabványügyi Bizottság) | Az absztrakt IPS-adatkészlet, 2019-ben jelent meg |
| **ISO 27269** | ISO (Nemzetközi Szabványügyi Szervezet) | Az absztrakt IPS-adatkészlet nemzetközi változata, 2021-ben jelent meg |
| **CEN/TS 17288** | CEN | Útmutató az IPS határokon átnyúló használatra történő bevezetéséhez |
| **HL7 FHIR IPS Implementation Guide** | HL7 International | A korszerű, API-barát kódolás és az elsődleges megvalósítási formátum. A STU 2 (2.0.x) hozzáadta az Alerts és a Patient Story szakaszt, megengedte az üres szakaszokat, pontosította a `$summary` műveletet, és áttért a SNOMED CT IPS terminológiára [[9]](#ref-9). |
| **HL7 CDA IPS Implementation Guide** | HL7 International | Az XML-alapú dokumentumkódolás, amely a meglévő nemzeti és európai infrastruktúrákban gyakori |

A munkát a **Joint Initiative Council for Global Health Informatics Standardization (JIC)** hangolja össze. A JIC egyesíti az ISO-t, a CEN-t, a HL7-et, a SNOMED Internationalt, az IHE-t és másokat. Az IPS egy 2016-os EU–USA együttműködésből nőtt ki a határokon átnyúló egészségügyi adatokról, és ma kormányok és digitális egészségügyi programok támogatják világszerte.


## Hogyan kódolják az IPS-t a HL7 FHIR-ral

A FHIR-ban az IPS egyetlen `document` típusú **`Bundle`**:

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

Legfontosabb technikai pontok:

- **Minden szakasznak van ember által olvasható szöveges leírása.** Az orvos egy hétköznapi böngészőben is el tudja olvasni az IPS-t, FHIR-szoftver nélkül is.
- **Minden szakasznak vannak kódolt bejegyzései is**, vagyis strukturált FHIR-erőforrásai, amelyeket a szoftver fel tud dolgozni, le tud fordítani és össze tud egyeztetni.
- **A profilok korlátozzák az alap FHIR-erőforrásokat.** Például a *Patient (IPS)* és az *AllergyIntolerance (IPS)* meghatározza a minimális adatokat és a „must support” elemeket.
- **A `$summary` művelet** (`GET [base]/Patient/[id]/$summary`) arra kéri a FHIR-kiszolgálót, hogy igény szerint állítson elő egy IPS-t egy betegről.
- **Az IPS aláírható és önállóan értelmezhető.** Egy teljes dokumentum egy egységként tárolható, küldhető, aláírható és ellenőrizhető.


## Terminológiák

A közös kódrendszerek teszik az IPS-t olvashatóvá nyelveken és országokon át:

| Terminológia | Mire használják |
|---|---|
| **SNOMED CT** | Problémák, allergiák, beavatkozások, eszközök, klinikai leletek. Ingyenes részhalmaz, a **SNOMED CT IPS Terminology** áll rendelkezésre az IPS-hez, még nem tag országokban is. |
| **LOINC** | Dokumentum- és szakasztípusok, laborvizsgálatok, életjelek |
| **ATC** és más gyógyszerkódrendszerek | Gyógyszerkészítmények és hatóanyagok |
| **UCUM** | Mértékegységek |
| **ISO és HL7 értékkészletek** | Országok, nyelvek, adminisztratív nemek, a hiányzó és ismeretlen adatok okai |

Mivel a bejegyzések kódoltak, a fogadó rendszer egy portugálul írt IPS-t is meg tud jeleníteni angol címkékkel. A kódolt jelentés ugyanaz marad.


## Hogyan használják az IPS-t a betegek és az orvosok

Az IPS-t előállíthatja egy EHR, egy nemzeti egészségügyi nyilvántartó szolgáltatás, egy betegportál vagy egy személyes egészségügyi alkalmazás. Ezután többféleképpen eljuttatható:

- **Rendszerek között:** FHIR REST API-kon, nemzeti infrastruktúrákon vagy határokon átnyúló átjárókon keresztül, mint az EU MyHealth@EU hálózata.
- **A beteg által közvetített megosztás:** a beteg az összefoglalót tárcában vagy egészségügyi alkalmazásban tartja, és igény szerint megosztja.
- **SMART Health Links:** QR-kód vagy URL, amely az orvosnak időkorlátos, igény szerint jelszóval védett hozzáférést ad egy titkosított IPS-hez. Az orvos egy szokásos webböngészőben megnyithatja.
- **Papír vagy PDF:** kinyomtatott szöveges megjelenítés tartalékként, amikor semmi más nem működik.

Az olyan alkalmazások, mint a **CommonHealth**, lehetővé teszik a betegeknek, hogy összegyűjtsék a feljegyzéseiket, és IPS-t osszanak meg SMART Health Linkeken keresztül.

Egy tipikus sürgősségi forgatókönyv:

1. Egy utazó összeesik külföldön.
2. Az utazó vagy egy kísérője megmutat egy QR-kódot a telefonról.
3. A sürgősségi orvos beolvassa, és másodpercek alatt látja az utazó gyógyszereit, allergiáit és aktív problémáit.
4. Az orvos elkerül egy veszélyes gyógyszer-kölcsönhatást, és biztonságosan kezeli a beteget.


## Alapelvek és tervezési döntések

- **A biztonság az első.** A tartalmat klinikai relevancia alapján választják ki, nem a teljesség alapján.
- **Alapértelmezésben globális, bővítésekkel helyi.** Az országok nemzeti profilokat hoznak létre, például uniós, ausztrál vagy kanadai változatokat, amelyek követelményeket adnak hozzá anélkül, hogy megtörnék a nemzetközi magot.
- **Ember által olvasható és géppel feldolgozható.** A szöveges leírás és a kódolt adatok együtt vannak jelen.
- **Ingyenes és nyílt.** A HL7 IPS-specifikációk és az IPS-hez készült SNOMED CT-részhalmaz szabadon elérhető, hogy csökkentse a bevezetés akadályait.
- **Adatvédelem és beleegyezés.** A hozzáférést a helyi jog és a beteg beleegyezése szabályozza. Az olyan mechanizmusok, mint a SMART Health Links, a beteg kezében tartják az irányítást.


## Hogyan használjuk az IPS-t

### Betegeknek

1. **Kérjen egyet.** Kérdezze meg a rendelőjét, kórházát, a nemzeti egészségügyi portált vagy az egészségügyi alkalmazását, hogy tud-e IPS-t vagy arra épülő nemzeti betegösszefoglalót előállítani.
2. **Ellenőrizze.** Olvassa el, amíg egészséges. Jelezzen minden hibás vagy hiányzó dolgot, különösen az allergiákat és a gyógyszereket.
3. **Tartsa magánál.** Tárolja egészségügyi alkalmazásban vagy tárcában, SMART Health Link QR-kódként, vagy kinyomtatva az úti okmányai között.
4. **Tartsa naprakészen.** Szerezzen újat új diagnózis, új tartós gyógyszer, műtét vagy implantátum után.
5. **Szándékosan ossza meg.** Mutassa meg a kezelőorvosának. A SMART Health Link lejárhat és jelszót kérhet, így Ön szabályozza, hogy ki látja, és mennyi ideig [[10]](#ref-10).

### Orvosoknak

1. **Először a fejlécet ellenőrizze.** Ki írta, mikor, és hitelesítette-e valaki. Egy régi vagy hitelesítetlen összefoglalónál nagyobb óvatosság kell.
2. **Először a kötelező szakaszokat olvassa el:** allergiák, gyógyszerek és problémák.
3. **Különböztesse meg a „nincs ismert” és a „nincs rögzítve” eseteket.** A „nincs ismert allergia” klinikai kijelentés. Az üres vagy „ismeretlen” szakasz nem az.
4. **Erősítse meg a kritikus tényeket** a beteggel vagy kísérőjével, amikor csak lehet.
5. **Használja a kódolt adatokat.** Ahol a rendszere támogatja, a kódolt bejegyzések lehetővé teszik, hogy az összefoglalót az Ön nyelvén jelenítsék meg, és gyógyszer-kölcsönhatási és allergiaszabályok alapján ellenőrizzék.
6. **Ne tekintse teljesnek.** Az IPS biztonsági háló, nem teljes kórtörténet.

### Megvalósítóknak

1. **Válasszon specifikációt.** Használja az aktuális HL7 FHIR IPS Implementation Guide-ot (STU 2), vagy az országa nemzeti profilját. CDA-alapú infrastruktúrákhoz használja a CDA IPS útmutatót [[9]](#ref-9) [[11]](#ref-11).
2. **Képezze le az adatait.** Képezze le a helyi adatokat az IPS-profilokra: `Patient`, `AllergyIntolerance`, `MedicationStatement`, `Condition` és így tovább. A munka nagy része ebben a leképezésben van.
3. **Képezze le a terminológiát.** Képezze le a helyi kódokat SNOMED CT-re, LOINC-ra és gyógyszerkódrendszerekre. A SNOMED CT IPS Terminology erre a célra ingyenesen használható [[12]](#ref-12).
4. **Állítsa elő a dokumentumot.** Támogassa a `$summary` műveletet, vagy építse fel a `Bundle`-t és a `Composition`-t magának. Minden szakaszhoz adjon olvasható szöveges leírást, és kifejezett „nincs ismert” vagy „nem áll rendelkezésre” kijelentéseket.
5. **Érvényesítse.** Ellenőrizzen minden előállított dokumentumot a FHIR Validatorral és egy megfelelőségi tesztkészlettel, például az Inferno IPS Test Kittel [[13]](#ref-13).
6. **Írja alá és ossza meg.** Döntse el, hogyan íródnak alá, tárolódnak és küldődnek a dokumentumok: API-n, dokumentumregiszteren, határokon átnyúló átjárón vagy SMART Health Linken keresztül.
7. **Biztonságosan fogadja.** Fogadóként jelenítse meg a szöveges leírást akkor is, ha nem tud feldolgozni minden kódolt bejegyzést, tartsa láthatóan a forrást és a szerzőt, és soha ne olvassza be csendben a kapott adatokat a helyi nyilvántartásba.
8. **Tesztelje másokkal.** Éles indulás előtt ellenőrizze az együttműködést más szállítókkal és országokkal az IHE és a HL7 Connectathonjain.

### Kormányoknak és egészségügyi szervezeteknek

1. **Vezessen be egy nemzeti profilt,** amely az IPS-re épül, külön formátum helyett, hogy a nemzeti összefoglaló alapértelmezésben nemzetközi legyen [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
2. **Rendezze az irányítást:** ki hozhat létre, frissíthet és hitelesíthet összefoglalót, és ki felel a pontosságáért.
3. **Rendezze a terminológia licencelését:** SNOMED CT-tagság, vagy az ingyenes IPS-részhalmaz használata.
4. **Rendezze az azonosítást, a beleegyezést és a bizalmat:** hogyan azonosítják a betegeket, hogyan rögzítik a beleegyezést, és melyik bizalmi keretrendszert, például a MyHealth@EU-t vagy a WHO Global Digital Health Certification Networkjét használják a dokumentumok ellenőrzésére [[1]](#ref-1) [[14]](#ref-14).
5. **Tegye közzé, amit épített** az IPS Implementation Registryben, hogy mások tanulhassanak belőle [[15]](#ref-15).


## Az IPS integrálása az egészségügyi rendszerekkel

Az IPS ritkán különálló rendszer. Olyan adatok nézete, amelyek már léteznek EHR-ekben, egészségügyiinformáció-cserékben, nemzeti nyilvántartásokban és személyes egészségügyi alkalmazásokban.

| Integrációs minta | Hogyan működik | Példák |
|---|---|---|
| **Az EHR állítja elő** | Az EHR a saját adataiból igény szerint IPS-t épít, gyakran a FHIR `$summary` műveleten keresztül. | EHR-szállítók és FHIR-kiszolgálók, például a HAPI FHIR, amelynek van IPS-generátor modulja |
| **Nemzeti vagy regionális nyilvántartás** | Egy nemzeti betegösszefoglaló-szolgáltatás az IPS egy profilját tárolja, és hozzáférhetővé teszi a jogosult ellátók számára. | Kanada PS-CA-ja, Ausztrália AU Patient Summary-ja, Svájc elektronikus betegdossziéja a CH IPS-sel [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6) |
| **Határokon átnyúló átjáró** | Minden ország nemzeti kapcsolattartó pontot működtet. Ez a hazai összefoglalót a megállapodás szerinti cserélési formátumra alakítja, átküldi a határon, a fogadó ország pedig helyi nyelven jeleníti meg. | MyHealth@EU National Contact Points for eHealth [[1]](#ref-1) [[2]](#ref-2) |
| **Regionális cserehálózat** | Az egészségügyi minisztériumok nemzeti FHIR-kiszolgálókon keresztül, közös regionális útmutató alapján cserélnek IPS-dokumentumokat. | A RACSEL IPS-LAC-ja és a Pan American Highway for Digital Health (PH4H) Latin-Amerikában és a Karib-térségben [[16]](#ref-16) |
| **A beteg által közvetített** | A beteg az IPS-t alkalmazásban vagy tárcában tartja, és QR-kóddal vagy SMART Health Linkkel osztja meg. | CommonHealth; a WHO bizalmi hálózatának IPS-munkája zarándoklatokhoz [[10]](#ref-10) [[14]](#ref-14) |
| **API-alapú hozzáférés** | Az alkalmazások FHIR API-n keresztül kérnek le IPS-t egy jogosult beteghez. | International Patient Access (IPA); amerikai hálózatok, például a Flexpa, amely a CMS Interoperability Framework keretében IPS-támogatást adott hozzá [[17]](#ref-17) [[18]](#ref-18) |

Az integráció tervezendő pontjai:

- **Dokumentummegosztás:** az olyan IHE-profilok, mint az MHD (FHIR) és az XDS (dokumentumregiszterek), tárolják és megtalálják az IPS-dokumentumokat. Az IHE IPS tartalmi profiljai megfelelőségi és tesztelési szabályokat adnak hozzá [[11]](#ref-11).
- **Betegazonosítás:** az IHE PIXm és PDQm, vagy egy nemzeti azonosító egyezteti a beteget a rendszerek között.
- **Meglévő dokumentumok:** sok rendszer már állít elő CDA-t, C-CDA-t vagy nemzeti összefoglalókat. Ezek IPS-re való leképezése általában könnyebb, mint elölről kezdeni, de ellenőrizni kell a kardinalitás, az értékkészletek és a kódrendszerek eltéréseit.
- **Nemzeti profilok:** egy nemzeti mag, például a US Core, az AU Core, a CH Core vagy a JP Core eltérhet az IPS-től. A nemzeti betegösszefoglaló-profilok összeegyeztetik a kettőt [[5]](#ref-5) [[6]](#ref-6) [[19]](#ref-19).
- **Fordítás és megjelenítés:** a fogadóknak meg kell jeleníteniük a szöveges leírást, és a kódolt bejegyzéseket a fogadó nyelvén lefordítani a kódok megjelenített nevei alapján.
- **Biztonság:** használjon TLS-t, ahol szükséges, aláírt dokumentumokat, naplózást (például IHE ATNA vagy BALP) és a beleegyezéshez kötött hozzáférés-szabályozást.


## Jelenlegi elterjedtség

Az IPS a kísérletekből nemzeti és regionális programokba jutott. Az állapot gyorsan változik, ezért a legfrissebb helyzetért nézze meg a hivatkozott forrásokat.

- **IPS Implementation Registry.** Az IPS-közösség nyilvános nyilvántartást vezet a megvalósításokról. 2026 közepén 34 bejegyzést tartalmazott, az argentin, ellátók által közvetített IPS-LAC projekttől a vietnami Better Health Programig [[15]](#ref-15).
- **FHIR-ökoszisztéma.** A HL7 International és a Firely 2025-ös State of FHIR felmérésében 42 válaszadó mondta, hogy az IPS képezi nemzeti FHIR-specifikációik alapját, többen, mint bármely más nemzetközi útmutatónál [[20]](#ref-20).
- **Kutatás.** Egy 2025-ös, az IPS elterjedéséről szóló tanulmány érdekelt feleket kérdezett meg, akik az ellátás jobb minőségét és a betegbiztonságot nevezték a fő előnyöknek [[21]](#ref-21).

| Ország vagy régió | Állapot |
|---|---|
| **Európai Unió és EGT** | A MyHealth@EU betegösszefoglalókat és e-recepteket cserél az országok között. Az Európai Bizottság 2026-os bemutatója 17 működő tagállamról és Norvégiáról számolt be, a többiek többsége pedig csatlakozást tervez [[2]](#ref-2) [[22]](#ref-22). Az EHDS-rendelet 2029-ig kötelezővé teszi a betegösszefoglalók cseréjét [[23]](#ref-23). |
| **Kanada** | A Canada Health Infoway által 2022 októberében jóváhagyott össz-kanadai betegösszefoglaló (PS-CA) az IPS-re épül, kanadai adaptációkkal [[4]](#ref-4). |
| **Ausztrália** | Az IPS-re és az AU Core-ra épülő AU Patient Summary-t a HL7 Australia fejleszti a Sparked program keretében [[5]](#ref-5) [[24]](#ref-24). |
| **Svájc** | A HL7 Switzerland CH IPS 2.0.0 (próbahasználat) az IPS-re és a CH Core-ra épül. Egy külön profil azt adja hozzá, amire a svájci elektronikus betegdossziénak szüksége van [[6]](#ref-6). |
| **Egyesült Államok** | Nincs szövetségi előírás az IPS-re. Az Egyesült Államok a US Core-t és a USCDI-t használja. A szövetségi ügynökségek részt vesznek a nemzetközi IPS-munkában, és egyes hálózatok önként támogatják az IPS-t [[18]](#ref-18). |
| **Latin-Amerika és a Karib-térség** | A RACSEL egészségügyi minisztériumai a regionális IPS-LAC útmutatót használják. 2023-ban 16 ország cserélt IPS-LAC dokumentumokat egy São Paulo-i connectathonon [[16]](#ref-16). |
| **Japán** | Kutatók IPS-alapú betegösszefoglaló-alkalmazást építettek és validáltak gyakori japán felhasználási esetekre, a JP Core használatával [[19]](#ref-19). |
| **Tajvan és a Fülöp-szigetek** | Egy 2025-ös megvalósítási jelentés FHIR-t használó, az IPS-szel összehangolt, határokon átnyúló személyes egészségügyi dokumentációt ír le [[25]](#ref-25). |
| **G7** | 2021-ben a G7 egészségügyi miniszterei elkötelezték magukat az IPS felé vezető munka mellett, és közzétettek egy IPS-ütemtervet [[26]](#ref-26). |
| **WHO** | A WHO Global Digital Health Certification Networkje IPS-alapú bizalmi tartományokat is tartalmaz, például ellenőrizhető IPS-t zarándoklatokhoz [[14]](#ref-14). |


## Jogszabályok, rendeletek és szakpolitika országok és régiók szerint

Az IPS szabvány, nem jogszabály. A jogszabályok döntik el, hogy egy országnak kell-e betegösszefoglalókat cserélnie, milyen formátumban és milyen adatvédelmi szabályok szerint. Ez összefoglaló, nem jogi tanács. Mindig ellenőrizze a jogszabály hatályos szövegét.

| Joghatóság | Jogszabály vagy szakpolitika | Mit jelent az IPS számára |
|---|---|---|
| **Európai Unió** | **Az európai egészségügyi adattérről szóló rendelet (EHDS), (EU) 2025/327.** Megjelent 2025. március 5-én; hatályba lépett 2025. március 26-án [[23]](#ref-23) [[27]](#ref-27). | A betegösszefoglalók „kiemelt kategóriának” számítanak. Az európai elektronikus egészségügyi dokumentáció-cserélési formátumban történő cserének 2029-ig minden tagállamban működnie kell. Az orvosi képek, vizsgálati eredmények és zárójelentések 2031-ig követik [[28]](#ref-28). A betegösszefoglalók formátuma a HL7 IPS-en alapul. |
| **Európai Unió** | **2011/24/EU irányelv** a betegek határokon átnyúló egészségügyi ellátással kapcsolatos jogainak érvényesítéséről [[29]](#ref-29). | Létrehozta az e-egészségügyi hálózatot (eHealth Network), amely elfogadta a MyHealth@EU mögötti betegösszefoglaló-iránymutatásokat. |
| **Európai Unió** | **Általános adatvédelmi rendelet (GDPR), (EU) 2016/679** [[30]](#ref-30). | Az egészségügyi adatok különleges kategóriát alkotnak. Minden IPS-csere jogalapot és megfelelő garanciákat igényel. |
| **Egyesült Államok** | **21st Century Cures Act és az információblokkolási szabályok** [[31]](#ref-31); az önkéntes **CMS Interoperability Framework** (2025) [[17]](#ref-17). | Egyetlen törvény sem írja elő az IPS-t. A törvények az elektronikus egészségügyi információkhoz való hozzáférést és azok cseréjét írják elő a US Core és a USCDI használatával. Az IPS támogatása önkéntes. |
| **Kanada** | A tartományok és területek egészségügyi információs törvényei. A szövetségi **Connected Care for Canadians Act** (C-72. törvényjavaslat) 2024-ben került benyújtásra, de nem fogadták el, mielőtt a parlament ülésszakát 2025-ben berekesztették. | A PS-CA össz-kanadai specifikáció, nem jogi követelmény. Az elterjedést a tartományok és területek vezetik a Canada Health Infowayjel [[4]](#ref-4). |
| **Egyesült Királyság** | **Data (Use and Access) Act 2025** [[32]](#ref-32). | Felhatalmazást tartalmaz az egészségügyi és felnőtt szociális ellátási informatikára vonatkozó információs szabványok meghatározására. Az Egyesült Királyság adott otthont a G7 2021-es IPS-vállalásának [[26]](#ref-26). |
| **Ausztrália** | **My Health Records Act 2012** és a 2025-ös „alapértelmezett megosztásról” szóló módosítások. | Az AU Patient Summary a Sparked által kidolgozott nemzeti specifikáció [[5]](#ref-5) [[24]](#ref-24). |
| **Svájc** | **Az elektronikus betegdossziéról szóló, 2015. június 19-i szövetségi törvény (EPRA, SR 816.1)**, hatályos 2017. április 15. óta [[33]](#ref-33). | A CH IPS tartalmaz egy profilt a svájci elektronikus betegdossziéban lévő dokumentumokhoz [[6]](#ref-6). |
| **Latin-Amerika és a Karib-térség** | Regionális megállapodások a RACSEL-en és a PH4H-n keresztül, az Inter-American Development Bank támogatásával egy regionális jogi keret érdekében [[16]](#ref-16). | Az IPS-LAC a határokon átnyúló cserére megállapodott regionális formátum. |
| **G7** | Az **egészségügyi miniszterek közleménye**, Oxford, 2021. június, és a **G7 IPS Roadmap**, 2021. december [[26]](#ref-26) [[34]](#ref-34). | Politikai elköteleződés az IPS és a betegek hozzáférése felé, nem kötelező erejű jog. |


## Előnyök és hátrányok

| Előnyök | Hátrányok |
|---|---|
| **Biztonságosabb nem tervezett ellátás.** Az orvosok másodpercek alatt látják az allergiákat, gyógyszereket és problémákat. | **Csak annyira jó, mint a forrása.** Az elavult vagy hibás forrásadat elavult vagy hibás összefoglalót ad. |
| **Egy formátum az egész világon.** Egyetlen megvalósítás szolgálja a nemzeti és a határokon átnyúló igényeket. | **Nemzeti eltérések.** A nemzeti profilok szabályokat adnak hozzá, így egy országban „érvényes IPS” munkát igényelhet ahhoz, hogy egy másikban elfogadják. |
| **Nyílt, kiforrott szabványokra épül:** ISO, CEN, HL7 FHIR és CDA, SNOMED CT és LOINC. | **Terminológiai teher.** A helyi kódok SNOMED CT-re és LOINC-ra való leképezése nehéz munka, a teljes SNOMED CT pedig az ingyenes IPS-részhalmazon túli licencet igényel. |
| **Olvasható és számítógéppel feldolgozható.** Szöveges leírás az embereknek, kódolt adatok a szoftvernek és a fordításnak. | **A szöveges leírás és a kódolt adatok eltérhetnek,** ha a generátor hanyag, és a fogadók a rosszabban hihetnek. |
| **A beteg felhatalmazása.** A betegek tarthatják és megoszthatják saját összefoglalójukat. | **Adatvédelmi és beleegyezési kockázat.** A hordozható összefoglaló érzékeny, a jogszabályok és beleegyezési modellek pedig országonként eltérnek. |
| **Ingyenes specifikációk** és ingyenes IPS-terminológia csökkentik a költségeket [[12]](#ref-12). | **Gyakori verzióváltások.** A STU 1, a STU 1.1 és a STU 2 egymás mellett él, az EHDS-formátum pedig egy korábbi verzióra hivatkozik [[28]](#ref-28). |
| **Újrahasznosítható** oltási igazolásokhoz, kutatáshoz és nyilvántartásokhoz [[7]](#ref-7) [[8]](#ref-8). | **Szándékosan minimális.** Nem helyettesíti a teljes dokumentációt vagy a szakterületi dokumentumokat, és a másodlagos felhasználás hiányosságai bővítéseket igényelnek [[7]](#ref-7). |
| **Erős támogatás** kormányok, az EU, a G7, a WHO és szabványügyi szervezetek részéről. | **Egyenetlen elterjedés.** Sok ország és szállító még kísérletezik, és a betegek tudatossága alacsony. |


## Tervek és jövőbeli irányok

- **EU, 2029:** a betegösszefoglalók és e-receptek cseréje minden uniós tagállamban működik az EHDS keretében [[23]](#ref-23) [[28]](#ref-28).
- **EU, 2031:** az orvosi képek, laboreredmények és zárójelentések csatlakoznak az európai elektronikus egészségügyi dokumentáció-cserélési formátumhoz [[28]](#ref-28).
- **A MyHealth@EU bővítése:** újabb országok csatlakoznak, és új szolgáltatások jönnek a laboreredményekhez, zárójelentésekhez és orvosi képekhez [[2]](#ref-2) [[22]](#ref-22).
- **A FHIR IPS STU 2 bevezetése:** a megvalósítók áttérnek az Alerts és a Patient Story szakaszokra, a kifejezetten üres szakaszokra és a SNOMED CT IPS terminológiára [[9]](#ref-9).
- **Ausztrália:** az AU Patient Summary Release 1 közzététele 2026-ra tervezve [[24]](#ref-24).
- **IPS Best Practices Project:** közösségi erőfeszítés a tanulságok dokumentálására, a munka 2026-ban indul.
- **A WHO bizalmi hálózata:** további IPS-alapú bizalmi tartományok ellenőrizhető, hordozható egészségügyi dokumentumokhoz [[14]](#ref-14).
- **SMART Health Links:** a HL7-en keresztül szabványosítva, a beteg által irányított megosztáshoz [[10]](#ref-10).
- **Latin-Amerika és a Karib-térség:** szélesebb körű IPS-LAC-csere a PH4H-n keresztül [[16]](#ref-16).
- **Kutatás és másodlagos felhasználás:** munka a betegösszefoglalók klinikai kutatásra és mesterséges intelligenciára való bővítéséért, miközben a mag minimális marad [[7]](#ref-7).


## Szószedet

| Kifejezés | Jelentés |
|---|---|
| **IPS** | International Patient Summary |
| **FHIR** | Fast Healthcare Interoperability Resources, a HL7 korszerű, API-alapú szabványa |
| **CDA** | Clinical Document Architecture, a HL7 XML-dokumentumszabványa |
| **IG** | Implementation Guide, profilok és szabályok összessége egy szabvány alkalmazásához |
| **Profil** | Egy FHIR-erőforrás korlátozott változata egy adott felhasználáshoz |
| **SNOMED CT** | Systematized Nomenclature of Medicine – Clinical Terms |
| **LOINC** | Logical Observation Identifiers Names and Codes |
| **SMART Health Links** | Szabvány egészségügyi adatok megosztására hivatkozással vagy QR-kóddal |
| **JIC** | Joint Initiative Council for Global Health Informatics Standardization |


## További információ

- HL7 FHIR IPS Implementation Guide: <https://hl7.org/fhir/uv/ips/>
- IPS continuous build: <https://build.fhir.org/ig/HL7/fhir-ips/>
- International Patient Summary project site: <https://international-patient-summary.net/>
- ISO 27269 (Health informatics — International patient summary): <https://www.iso.org/standard/79491.html>
- SNOMED CT IPS Terminology: <https://www.snomed.org/international-patient-summary-terminology>
- SMART Health Links: <https://docs.smarthealthit.org/smart-health-links/>


## Források

Ezek a hivatkozások az IPS-sel kapcsolatos forrásokat, specifikációkat, szoftvereket, projekteket, videókat, könyveket és kutatásokat fedik le. A legtöbbet az oldal megírásakor ellenőriztük. Néhány kiadói webhely blokkolja az automatikus ellenőrzést, ezeket *(nem ellenőrizve)* jelöli.

### Hivatalos specifikációk és szabványok

- [HL7 FHIR IPS Implementation Guide, current published version](https://hl7.org/fhir/uv/ips/) a hiteles FHIR-specifikáció.
- [HL7 FHIR IPS Implementation Guide, STU 2](https://hl7.org/fhir/uv/ips/STU2/)
- [HL7 FHIR IPS Implementation Guide, STU 1.1](https://hl7.org/fhir/uv/ips/STU1.1/)
- [HL7 FHIR IPS publication history](https://www.hl7.org/fhir/uv/ips/history.html) felsorolja az összes közzétett verziót.
- [HL7 FHIR IPS continuous build](https://build.fhir.org/ig/HL7/fhir-ips/) a legfrissebb, még nem szavazott munkaváltozat.
- [Structure of the International Patient Summary](https://hl7.org/fhir/uv/ips/en/Structure-of-the-International-Patient-Summary.html) elmagyarázza a szakaszokat és profilokat.
- [IPS design conventions](https://build.fhir.org/ig/HL7/fhir-ips/en/Design-Conventions.html) a must-supportot, a hiányzó adatokat és a szöveges leírást tárgyalja.
- [IPS generation and data inclusion](https://build.fhir.org/ig/HL7/fhir-ips/en/Generation-and-Data-Inclusion.html) a `$summary` műveletet és a tartalom kiválasztását tárgyalja.
- [HL7 CDA IPS Implementation Guide, continuous build](https://build.fhir.org/ig/HL7/CDA-IPS/)
- [HL7 CDA IPS product brief](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=483)
- [ISO 27269, Health informatics — International patient summary](https://www.iso.org/standard/79491.html) *(nem ellenőrizve)*
- [ISO/TC 215 Health informatics committee](https://www.iso.org/committee/54960.html) *(nem ellenőrizve)*
- [IHE FHIR International Patient Summary profile (FIIO)](https://profiles.ihe.net/PCC/FIIO/volume-1.html)
- [IHE PCC International Patient Summary supplement, 2020 (PDF)](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS_Rev1-0_PC_2020-03-17.pdf)
- [HL7 SMART Health Cards and Links Implementation Guide](https://hl7.org/fhir/uv/smart-health-cards-and-links/)
- [SMART Health Links documentation](https://docs.smarthealthit.org/smart-health-links/)
- [HL7 FHIR International Patient Access (IPA)](https://hl7.org/fhir/uv/ipa/) a betegek API-hozzáféréséről szóló testvérspecifikáció.
- [HL7 FHIR R4 base specification](https://hl7.org/fhir/R4/), amelyre az IPS épül.

### Forráskód-tárolók

- [HL7/fhir-ips](https://github.com/HL7/fhir-ips) a FHIR IPS IG forrását tartalmazza FHIR Shorthandben.
- [HL7/cda-ips](https://github.com/HL7/cda-ips) a CDA IPS IG forrását tartalmazza.
- [hl7-eu/eps](https://github.com/hl7-eu/eps) a HL7 Europe Patient Summary forrását tartalmazza.
- [hl7ch/ch-ips](https://github.com/hl7ch/ch-ips) a svájci IPS-t tartalmazza, megjelenítővel és fejlesztés alatt álló generátorral.
- [GitHub topic: international-patient-summary](https://github.com/topics/international-patient-summary) a közösségi tárolókat sorolja fel.

### Nemzeti és regionális adaptációk

- [HL7 Europe Patient Summary (EPS), continuous build](https://build.fhir.org/ig/hl7-eu/eps/)
- [AU Patient Summary (Australia), continuous build](https://build.fhir.org/ig/hl7au/au-fhir-ps/)
- [Trillium II IPS structure (HL7 Europe)](https://hl7.eu/fhir/build/trillium2/site/ipsStructure.html) abból az EU–USA projektből származik, amely segített elindítani az IPS-t.
- [eHealth Suisse](https://www.ehealthsuisse.ch/) Svájc digitális egészségügyi és IPS-bevezetési kompetenciaközpontja.
- [MyHealth@EU, cross-border digital health services](https://health.ec.europa.eu/ehealth-digital-health-and-care/electronic-cross-border-health-services_en)
- [Xt-EHR Joint Action](https://www.xt-ehr.eu/) az európai egészségügyi adattér formátumait, köztük a betegösszefoglalót készíti elő.

### Szoftverek és eszközök

- [IPS Viewer](https://www.ipsviewer.com) ([source: jddamore/IPSviewer](https://github.com/jddamore/IPSviewer)) nyílt forráskódú, böngészőben futó IPS-megjelenítő.
- [uwcirg/shl-ips-viewer](https://github.com/uwcirg/shl-ips-viewer) SMART Health Linken keresztül megosztott IPS-t jelenít meg.
- [smart-on-fhir/smart-health-links](https://github.com/smart-on-fhir/smart-health-links) a SMART Health Links referencia-megvalósítása.
- [HAPI FHIR IPS generator](https://hapifhir.io/hapi-fhir/docs/server_ips/introduction.html) ([source: hapifhir/hapi-fhir](https://github.com/hapifhir/hapi-fhir)) nyílt forráskódú Java kiszolgálómodul, amely megvalósítja a `$summary` műveletet.
- [HAPI FHIR JPA server IPS documentation](https://hapifhir.io/hapi-fhir/docs/server_jpa/ips.html)
- [Inferno IPS Test Kit](https://inferno.healthit.gov/test-kits/ips) ([source: inferno-framework/ips-test-kit](https://github.com/inferno-framework/ips-test-kit)) nyílt forráskódú megfelelőségi tesztkészlet.
- [FHIR Validator](https://validator.fhir.org/) az IPS-csomagokat az IG profiljai alapján érvényesíti.
- [Simplifier: hl7.fhir.uv.ips package](https://simplifier.net/packages/hl7.fhir.uv.ips) a csomagot, a profilokat és a példákat tartalmazza.
- [FHIR package registry](https://registry.fhir.org/)
- [FHIR Shorthand (FSH) School](https://fshschool.org/) azt a nyelvet tanítja, amelyen az IPS IG íródott.
- [CommonHealth](https://www.commonhealth.org/) betegalkalmazás, amely IPS-t állít elő, és SMART Health Linkeken keresztül oszt meg.
- [WHO SMART Trust](https://github.com/WorldHealthOrganization/smart-trust) a WHO Global Digital Health Certification Networkjének bizalmi keretrendszere.

### Szervezetek és projektek

- [International Patient Summary project site](https://international-patient-summary.net/) híreket, elterjedési jelentéseket és oktatási anyagokat tartalmaz.
- [IPS for health IT developers](https://international-patient-summary.net/health-it-developer/)
- [HL7 International](https://www.hl7.org/)
- [IHE International](https://www.ihe.net/)
- [SNOMED International](https://www.snomed.org/)
- [SNOMED CT IPS Terminology](https://www.snomed.org/international-patient-summary-terminology) ingyenes részhalmaz az IPS-hez.
- [LOINC](https://loinc.org/) *(nem ellenőrizve)*
- [Joint Initiative Council for Global Health Informatics Standardization (JIC)](http://www.jointinitiativecouncil.org/)
- [Global Digital Health Partnership (GDHP)](https://gdhp.health/)
- [WHO SMART Guidelines](https://smart.who.int/)
- [WHO Global Digital Health Certification Network](https://www.who.int/initiatives/global-digital-health-certification-network)

### Közösség és rendezvények

- [chat.fhir.org](https://chat.fhir.org/) a FHIR-közösség csevegője, amelynek aktív IPS-csatornája van.
- [HL7 FHIR Connectathons](https://www.hl7.org/events/fhir-connectathon/)
- [IHE Connectathons](https://www.ihe.net/participate/connectathon/)

### Videók

- [HIMSS20: IPS for computable care guidelines in 200 seconds or less (IHE International, YouTube)](https://www.youtube.com/watch?v=xjEzGM8kBPw)
- [IHE International YouTube channel](https://www.youtube.com/@IHEIntl) Connectathon-paneleket és IPS-előadásokat tartalmaz.
- [IPS project site news](https://international-patient-summary.net/) sok rögzített webináriumra hivatkozik, többek között:
  - az IPS-panel az IHE North America Connectathonon, 2024
  - az IPS-előadás a FHIR DevDays 2023-on
  - Grahame Grieve az IPS-ről és az IPA-ról, IHE Connectathon Montreux 2022
  - a SNOMED CT Expo 2022 nyitóelőadása
  - Matthew Rahn az IPS-ről a GDHP-ben
  - a HL7 „Global Passport” webinárium a határokon átnyúló használatról
- [YouTube search: International Patient Summary](https://www.youtube.com/results?search_query=international+patient+summary)

### Könyvek

- Tim Benson és Grahame Grieve, [*Principles of Health Interoperability: FHIR, HL7 and SNOMED CT*](https://link.springer.com/book/10.1007/978-3-030-56883-2), 4. kiadás, Springer, 2020. A FHIR-t, a klinikai összefoglaló erőforrásokat és a terminológiát tárgyalja.

### Kutatási dolgozatok és cikkek

- Laleci Erturkmen G. B., Sinaci A. A., Namli T., Boonstra M., et al., "[An assessment of the European Patient Summary for clinical research: a case study in cardiology](https://doi.org/10.3389/fmed.2024.1481551)", *Frontiers in Medicine*, 2024.
- Lee H., Huang J., Huang S., Chen W., et al., "[Implementing a Cross-Border Next-Generation Personal Health Record in the Philippines and Taiwan: An Implementation Case Report Using Health Level 7 International Fast Healthcare Interoperability Resources](https://doi.org/10.2196/56272)", *JMIR Formative Research*, 2025.
- Song C., Nakayama M., "[Implementation of a Patient Summary Web Application According to the International Patient Summary and Validation in Common Use Cases in Japan](https://doi.org/10.1007/s10916-023-01993-6)", *Journal of Medical Systems*, 2023.
- Schippers D., Spil T., Stegwee R., Folmer E., Donnelly S., "[The adoption and diffusion of the International Patient Summary](https://doi.org/10.24251/hicss.2025.425)", *Proceedings of the 58th Hawaii International Conference on System Sciences (HICSS)*, 2025.
- da Silva Carvalho N., Papadimitriou A., Stegwee R., Gille H., et al., "[Accelerating European electronic health record exchange format (EEHRxF) implementation across Europe: a policy perspective](https://doi.org/10.3389/fmed.2025.1648170)", *Frontiers in Medicine*, 2025.
- Kay S., Cangioli G., Nusbaum M., "[The International Patient Summary and the extensibility requirement](https://international-patient-summary.net/the-international-patient-summary-and-the-extensibility-requirement/)", *Studies in Health Technology and Informatics* (pHealth), 2020.
- D'Amore J., Cangioli G., Hausam R., "[Advancing the International Patient Summary](https://international-patient-summary.net/advancing-the-international-patient-summary/)"
- "[Towards the Austrian Patient Summary](https://international-patient-summary.net/towards-the-austrian-patient-summary/)", *Studies in Health Technology and Informatics* (dHealth).
- "[Revival of the International Patient Summary (IPS)](https://smiledigitalhealth.com/our-blog/revival-of-the-international-patient-summary-ips)", Smile Digital Health blog.
- [PubMed search: "international patient summary"](https://pubmed.ncbi.nlm.nih.gov/?term=%22international+patient+summary%22) szakértők által lektorált szakirodalomhoz.


## References

A szövegben szereplő számozott hivatkozások, például az [1], a lenti megfelelő tételre mutatnak. A hivatkozásokat 2026 novemberében ellenőriztük. A jogszabályok, az elterjedtségi adatok és a verziók változnak, ezért a jelenlegi helyzetért nézze meg a forrást.

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

Ezekre a forrásokra fent nem hivatkozunk, de magának a szabványnak az elsődleges hivatkozásai.

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
