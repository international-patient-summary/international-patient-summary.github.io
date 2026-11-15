# International Patient Summary (IPS)

**International Patient Summary (IPS)** je celosvětový standard pro krátký elektronický výpis ze zdravotnické dokumentace. Obsahuje základní klinické údaje, které lékař potřebuje k bezpečné léčbě pacienta. Je navržen tak, aby byl:

- **Minimální a záměrně neúplný.** Je to malá, vybraná podmnožina zdravotnické dokumentace, nikoli celá dokumentace.
- **Nezávislý na oboru.** Může jej používat jakýkoli lékař v jakémkoli oboru.
- **Nezávislý na onemocnění.** Není vázán na konkrétní nemoc ani léčebný postup.
- **Realizovatelný a mezinárodní.** Je postaven na globálních standardech a terminologiích, takže jej lze používat napříč zeměmi, jazyky a IT systémy.

Stručně řečeno, IPS odpovídá na jedinou otázku lékaře, který pacienta nikdy nepotkal: *„Co musím vědět právě teď, abych se o tohoto člověka bezpečně postaral?“*


## Proč IPS existuje

Zdravotní informace jsou obvykle uzamčeny uvnitř místní elektronické zdravotní dokumentace (EZD), národního systému nebo produktu jednoho dodavatele. Když pacient vyhledá péči jinde, například v jiné nemocnici, regionu nebo zemi, ošetřující lékař k této historii často nemá přístup. IPS dává všem jeden společný, přenosný formát souhrnu.

### Hlavní případy použití

| Případ použití | Popis |
|---|---|
| **Neplánovaná a pohotovostní péče** | Pacient onemocní nebo se zraní daleko od domova a místní lékaři se nemohou dostat k jeho domácí EZD. Toto je původní, hlavní případ použití. |
| **Přeshraniční péče** | Cestovatelé, migranti, přeshraniční pracovníci a uprchlíci s sebou nosí souhrn, který mohou číst lékaři v zahraničí. |
| **Plánovaná péče a přechody** | Doporučení, konzultace u specialistů, přijetí, propuštění a předávání mezi poskytovateli. |
| **Zdravotní turismus a mobilita** | Pacienti, kteří se rozhodnou pro péči v jiné jurisdikci. |
| **Posílení postavení pacienta** | Pacienti mají vlastní souhrn, prohlížejí si jej a sdílejí jej z aplikace v telefonu, z portálu nebo z tištěné kopie. |


## Kdy IPS použít

Použijte IPS, když někdo, kdo pacienta nezná, potřebuje rychle spolehlivý okamžitý snímek, a když odesílatel a příjemce nesdílejí IT systém.

### Vhodné případy

- **Pohotovostní a neplánovaná péče**, zejména mimo domov nebo přes hranice. K tomu byl IPS navržen.
- **Přeshraniční výměna mezi národními systémy**, například služba EU MyHealth@EU [[1]](#ref-1) [[2]](#ref-2).
- **Souhrny držené pacientem**, které cestovatelé, migranti, uprchlíci, poutníci nebo lidé se složitými onemocněními nosí v telefonu nebo na papíře [[3]](#ref-3).
- **Národní nebo regionální souhrn pacienta.** Mnoho zemí vytváří vlastní souhrn jako profil IPS, takže jej lze vyměňovat i mezinárodně [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
- **Společný základ pro přechody v péči,** například doporučení, přijetí a propuštění, když není k dispozici bohatší specializovaný dokument.
- **Výchozí bod pro další datové sady,** například potvrzení o očkování, výzkumná data nebo registry, které potřebují stejné základní údaje [[7]](#ref-7) [[8]](#ref-8).

### Nevhodné případy

- **Úplná zdravotnická dokumentace.** IPS je záměrně minimální. Když záleží na podrobnostech, použijte úplný export dokumentace nebo specializovaný dokument.
- **Dokumenty specifické pro obor,** například souhrn onkologické léčby, těhotenská průkazka nebo podrobná propouštěcí zpráva. Ty mají vlastní standardy, které mohou obsah IPS zahrnovat nebo na něj odkazovat.
- **Klinické pracovní postupy v reálném čase uvnitř jedné organizace.** Uvnitř jedné EZD se dotazujte na živá data, ne na souhrn ve formě snímku.
- **Právní, účetní nebo pojišťovací záznamy.** IPS je klinický souhrn, nikoli administrativní záznam ani záznam pro vyúčtování.
- **Rozhodnutí vyžadující zaručenou úplnost.** IPS je tak úplný a aktuální, jak je úplný a aktuální jeho zdroj a autor. Kritické údaje vždy, když je to možné, ověřte u pacienta.


## Co IPS obsahuje

Dokument IPS má dvě vrstvy:

1. **Hlavička, která zaznamenává kdo, co a kdy:**
   - **Pacient:** totožnost, demografické údaje a kontakty.
   - **Autor:** osoba, organizace nebo systém, který souhrn vytvořil.
   - **Správce (custodian):** organizace odpovědná za jeho udržování.
   - **Ověřovatel (attester):** kdo jej ověřil, pokud někdo.
   - **Datum a čas:** kdy byl vytvořen.

2. **Klinická část uspořádaná do sekcí.** Sekce jsou povinné, doporučené nebo volitelné.

| Sekce | Stav | Typický obsah |
|---|---|---|
| **Medication Summary** (souhrn léků) | Povinná | Současné a relevantní dřívější léky, recepty, dávkování |
| **Allergies and Intolerances** (alergie a intolerance) | Povinná | Alergie na léky, potraviny a prostředí; reakce a závažnost |
| **Problem List** (seznam problémů) | Povinná | Aktivní diagnózy, stavy a klinické problémy |
| Immunizations (očkování) | Doporučená | Podané vakcíny, například proti tetanu, hepatitidě B, chřipce, covidu-19 |
| History of Procedures (historie výkonů) | Doporučená | Větší operace a invazivní zákroky |
| Medical Devices (zdravotnické prostředky) | Doporučená | Implantáty a přístroje, například kardiostimulátory, stenty, protézy |
| Diagnostic Results (diagnostické výsledky) | Doporučená | Klíčové laboratorní výsledky, zobrazovací nálezy, patologie |
| Vital Signs (vitální funkce) | Volitelná | Krevní tlak, srdeční frekvence, hmotnost, výška, BMI |
| History of Past Illness (dřívější nemoci) | Volitelná | Vyléčené stavy a významné dřívější problémy |
| Functional Status (funkční stav) | Volitelná | Postižení a schopnost vykonávat každodenní činnosti |
| Plan of Care (plán péče) | Volitelná | Plány péče a doporučení k léčbě |
| Social History (sociální anamnéza) | Volitelná | Tabák, alkohol a další relevantní faktory životního stylu |
| History of Pregnancy (historie těhotenství) | Volitelná | Současný stav těhotenství a historie těhotenství |
| Advance Directives (předem vyslovená přání) | Volitelná | Dříve vyslovená přání, preference ohledně resuscitace, prohlášení o souhlasu |
| Alerts (upozornění) | Volitelná | Bezpečnostně kritická varování, která nepatří jinam (přidáno ve FHIR IPS STU 2) |
| Patient Story (příběh pacienta) | Volitelná | Co je pro pacienta důležité: potřeby, silné stránky, hodnoty, obavy a preference, vlastními slovy pacienta (přidáno ve FHIR IPS STU 2) |

**Výslovně říct „nic“ je důležité.** Prázdná sekce lékaři neřekne, zda pacient nemá žádné alergie, nebo zda je nikdo nezaznamenal. IPS proto očekává výslovná prohlášení jako *„žádné známé alergie“*, *„žádné současné léky“* nebo *„informace nejsou k dispozici“*.


## Standardy za IPS

IPS je rodina koordinovaných standardů. Normy ISO a CEN určují, *co* musí souhrn pacienta obsahovat. Implementační příručky HL7 určují, *jak* jej zakódovat.

| Standard | Orgán | Role |
|---|---|---|
| **EN 17269** | CEN (Evropský výbor pro normalizaci) | Abstraktní datová sada IPS, vydaná v roce 2019 |
| **ISO 27269** | ISO (Mezinárodní organizace pro normalizaci) | Mezinárodní verze abstraktní datové sady IPS, vydaná v roce 2021 |
| **CEN/TS 17288** | CEN | Pokyny k implementaci IPS pro přeshraniční použití |
| **HL7 FHIR IPS Implementation Guide** | HL7 International | Moderní kódování přívětivé pro API a hlavní implementační formát. STU 2 (2.0.x) přidalo sekce Alerts a Patient Story, povolilo prázdné sekce, upřesnilo `$summary` a přešlo na terminologii SNOMED CT IPS [[9]](#ref-9). |
| **HL7 CDA IPS Implementation Guide** | HL7 International | Kódování dokumentů v XML, běžné ve stávajících národních a evropských infrastrukturách |

Práci koordinuje **Joint Initiative Council for Global Health Informatics Standardization (JIC)**. JIC sdružuje ISO, CEN, HL7, SNOMED International, IHE a další. IPS vyrostl ze spolupráce EU a USA z roku 2016 na přeshraničních zdravotních datech a dnes jej podporují vlády a programy digitálního zdravotnictví po celém světě.


## Jak se IPS kóduje pomocí HL7 FHIR

Ve FHIR je IPS jediný **`Bundle`** typu `document`:

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

Klíčové technické body:

- **Každá sekce má čitelný vyprávěcí text.** Lékař může IPS přečíst v běžném prohlížeči, i bez softwaru FHIR.
- **Každá sekce má také zakódované položky**, tedy strukturované zdroje FHIR, které software dokáže zpracovat, přeložit a sladit.
- **Profily omezují základní zdroje FHIR.** Například *Patient (IPS)* a *AllergyIntolerance (IPS)* definují minimální data a prvky „must support“.
- **Operace `$summary`** (`GET [base]/Patient/[id]/$summary`) požádá server FHIR, aby na požádání vygeneroval IPS pro pacienta.
- **IPS lze podepsat a je samostatný.** Úplný dokument lze uložit, odeslat, podepsat a ověřit jako jeden celek.


## Terminologie

Sdílené kódové systémy činí IPS čitelným napříč jazyky a zeměmi:

| Terminologie | K čemu se používá |
|---|---|
| **SNOMED CT** | Problémy, alergie, výkony, prostředky, klinické nálezy. Bezplatná podmnožina **SNOMED CT IPS Terminology** je k dispozici pro použití s IPS, i v zemích, které nejsou členy. |
| **LOINC** | Typy dokumentů a sekcí, laboratorní testy, vitální funkce |
| **ATC** a další kódové systémy léčiv | Léčivé přípravky a léčivé látky |
| **UCUM** | Měrné jednotky |
| **Hodnotové sady ISO a HL7** | Země, jazyky, administrativní pohlaví, důvody chybějících a neznámých údajů |

Protože jsou položky zakódovány, může přijímající systém zobrazit IPS napsaný portugalsky s anglickými popisky. Zakódovaný význam zůstává stejný.


## Jak IPS používají pacienti a lékaři

IPS může vytvořit EZD, národní služba zdravotních záznamů, pacientský portál nebo osobní zdravotní aplikace. Poté jej lze doručit několika způsoby:

- **Systém se systémem:** prostřednictvím rozhraní FHIR REST, národních infrastruktur nebo přeshraničních bran, jako je síť EU MyHealth@EU.
- **Sdílení zprostředkované pacientem:** pacient má souhrn v peněžence nebo zdravotní aplikaci a sdílí jej na požádání.
- **SMART Health Links:** QR kód nebo URL, které lékaři poskytují časově omezený, volitelně heslem chráněný přístup k zašifrovanému IPS. Lékař jej může otevřít v běžném webovém prohlížeči.
- **Papír nebo PDF:** vytištěná textová podoba jako záloha, když nic jiného nefunguje.

Aplikace jako **CommonHealth** umožňují pacientům shromažďovat své záznamy a sdílet IPS prostřednictvím SMART Health Links.

Typický pohotovostní scénář:

1. Cestovatel se v zahraničí zhroutí.
2. Cestovatel nebo jeho společník ukáže QR kód z telefonu.
3. Lékař pohotovosti jej naskenuje a během několika sekund vidí cestovatelovy léky, alergie a aktivní problémy.
4. Lékař se vyhne nebezpečné lékové interakci a pacienta bezpečně léčí.


## Zásady a návrhová rozhodnutí

- **Bezpečnost na prvním místě.** Obsah se vybírá podle klinické relevance, nikoli úplnosti.
- **Globální ve výchozím stavu, místní prostřednictvím rozšíření.** Země vytvářejí národní profily, například varianty EU, Austrálie nebo Kanady, které přidávají požadavky, aniž by narušily mezinárodní jádro.
- **Čitelný pro lidi a zpracovatelný stroji.** Vyprávěcí text a zakódovaná data existují vedle sebe.
- **Bezplatný a otevřený.** Specifikace HL7 IPS a podmnožina SNOMED CT pro IPS jsou volně dostupné, aby snížily překážky přijetí.
- **Soukromí a souhlas.** Přístup se řídí místním právem a souhlasem pacienta. Mechanismy jako SMART Health Links ponechávají kontrolu pacientovi.


## Jak IPS používat

### Pro pacienty

1. **Požádejte o něj.** Zeptejte se své kliniky, nemocnice, národního zdravotnického portálu nebo zdravotní aplikace, zda umí vytvořit IPS nebo na něm založený národní souhrn pacienta.
2. **Zkontrolujte jej.** Přečtěte si jej, dokud jste zdraví. Nahlaste vše, co je chybné nebo chybí, zejména alergie a léky.
3. **Mějte jej u sebe.** Uložte jej do zdravotní aplikace nebo peněženky, jako QR kód SMART Health Link nebo jako výtisk mezi cestovními doklady.
4. **Udržujte jej aktuální.** Pořiďte si nový po nové diagnóze, novém dlouhodobém léku, operaci nebo implantátu.
5. **Sdílejte jej záměrně.** Ukažte jej lékaři, který vás léčí. SMART Health Link může vypršet a může vyžadovat heslo, takže sami řídíte, kdo jej uvidí a jak dlouho [[10]](#ref-10).

### Pro lékaře

1. **Nejprve zkontrolujte hlavičku.** Kdo jej napsal, kdy a zda jej někdo ověřil. U starého nebo neověřeného souhrnu je třeba větší opatrnosti.
2. **Nejprve si přečtěte povinné sekce:** alergie, léky a problémy.
3. **Rozlišujte „nic známého“ od „nezaznamenáno“.** „Žádné známé alergie“ je klinické prohlášení. Prázdná nebo „neznámá“ sekce jím není.
4. **Kritické údaje ověřte** u pacienta nebo jeho společníka, kdykoli můžete.
5. **Využijte zakódovaná data.** Pokud to váš systém podporuje, zakódované položky umožňují zobrazit souhrn ve vašem jazyce a zkontrolovat jej podle pravidel pro lékové interakce a alergie.
6. **Nepředpokládejte úplnost.** IPS je záchranná síť, nikoli úplná anamnéza.

### Pro implementátory

1. **Vyberte specifikaci.** Použijte aktuální HL7 FHIR IPS Implementation Guide (STU 2) nebo národní profil své země. Pro infrastruktury založené na CDA použijte příručku CDA IPS [[9]](#ref-9) [[11]](#ref-11).
2. **Namapujte svá data.** Namapujte místní data na profily IPS: `Patient`, `AllergyIntolerance`, `MedicationStatement`, `Condition` a tak dále. Většina práce spočívá v tomto mapování.
3. **Namapujte svou terminologii.** Namapujte místní kódy na SNOMED CT, LOINC a kódové systémy léčiv. SNOMED CT IPS Terminology je k tomuto účelu zdarma [[12]](#ref-12).
4. **Vygenerujte dokument.** Podporujte operaci `$summary` nebo si `Bundle` a `Composition` sestavte sami. Zahrňte čitelný vyprávěcí text pro každou sekci a výslovná prohlášení „nic známého“ nebo „není k dispozici“.
5. **Ověřte jej.** Zkontrolujte každý vygenerovaný dokument pomocí FHIR Validator a sady pro testování shody, například Inferno IPS Test Kit [[13]](#ref-13).
6. **Podepište a sdílejte jej.** Rozhodněte, jak se dokumenty podepisují, ukládají a odesílají: API, registr dokumentů, přeshraniční brána nebo SMART Health Link.
7. **Přijímejte jej bezpečně.** Jako příjemce zobrazujte vyprávěcí text, i když nemůžete zpracovat všechny zakódované položky, ponechte viditelný zdroj a autora a nikdy tiše neslučujte přijatá data s místním záznamem.
8. **Testujte s dalšími.** Před spuštěním do ostrého provozu ověřte součinnost s dalšími dodavateli a zeměmi na Connectathonech IHE a HL7.

### Pro vlády a zdravotnické organizace

1. **Přijměte národní profil,** který staví na IPS, místo samostatného formátu, aby byl národní souhrn ve výchozím stavu mezinárodní [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
2. **Vyřešte správu:** kdo smí souhrn vytvářet, aktualizovat a ověřovat a kdo odpovídá za jeho správnost.
3. **Vyřešte licencování terminologie:** členství v SNOMED CT nebo použití bezplatné podmnožiny IPS.
4. **Vyřešte totožnost, souhlas a důvěru:** jak se identifikují pacienti, jak se zaznamenává souhlas a jaký rámec důvěry, například MyHealth@EU nebo Global Digital Health Certification Network WHO, se používá k ověřování dokumentů [[1]](#ref-1) [[14]](#ref-14).
5. **Zveřejněte, co jste vytvořili,** v IPS Implementation Registry, aby se z toho mohli učit ostatní [[15]](#ref-15).


## Integrace IPS se zdravotnickými systémy

IPS je zřídka samostatný systém. Je to pohled na data, která už existují v EZD, výměnách zdravotních informací, národních záznamech a osobních zdravotních aplikacích.

| Integrační vzor | Jak funguje | Příklady |
|---|---|---|
| **Generovaný EZD** | EZD sestaví IPS z vlastních dat na požádání, často prostřednictvím operace FHIR `$summary`. | Dodavatelé EZD a servery FHIR, například HAPI FHIR, který má modul generátoru IPS |
| **Národní nebo regionální záznam** | Národní služba souhrnů pacientů ukládá profil IPS a zpřístupňuje jej oprávněným poskytovatelům. | PS-CA v Kanadě, AU Patient Summary v Austrálii, švýcarský elektronický pacientský záznam s CH IPS [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6) |
| **Přeshraniční brána** | Každá země provozuje národní kontaktní místo. To převede souhrn domovské země do dohodnutého výměnného formátu, odešle jej přes hranici a přijímající země jej zobrazí v místním jazyce. | MyHealth@EU National Contact Points for eHealth [[1]](#ref-1) [[2]](#ref-2) |
| **Regionální výměnná síť** | Ministerstva zdravotnictví vyměňují dokumenty IPS prostřednictvím národních serverů FHIR podle společné regionální příručky. | IPS-LAC od RACSEL a Pan American Highway for Digital Health (PH4H) v Latinské Americe a Karibiku [[16]](#ref-16) |
| **Zprostředkované pacientem** | Pacient drží IPS v aplikaci nebo peněžence a sdílí jej pomocí QR kódu nebo SMART Health Link. | CommonHealth; práce sítě důvěry WHO na IPS pro pouť [[10]](#ref-10) [[14]](#ref-14) |
| **Přístup přes API** | Aplikace získávají IPS oprávněného pacienta přes rozhraní FHIR API. | International Patient Access (IPA); americké sítě jako Flexpa, která přidala podporu IPS v rámci CMS Interoperability Framework [[17]](#ref-17) [[18]](#ref-18) |

Integrační body, s nimiž je třeba počítat:

- **Sdílení dokumentů:** profily IHE jako MHD (FHIR) a XDS (registry dokumentů) ukládají a vyhledávají dokumenty IPS. Obsahové profily IHE IPS přidávají pravidla shody a testování [[11]](#ref-11).
- **Totožnost pacienta:** IHE PIXm a PDQm nebo národní identifikátor přiřazují pacienta napříč systémy.
- **Stávající dokumenty:** mnoho systémů už vytváří CDA, C-CDA nebo národní souhrny. Namapovat je na IPS je obvykle snazší než začínat znovu, ale zkontrolujte rozdíly v kardinalitě, hodnotových sadách a kódových systémech.
- **Národní profily:** národní jádro, například US Core, AU Core, CH Core nebo JP Core, se může od IPS lišit. Národní profily souhrnu pacienta obojí sladí [[5]](#ref-5) [[6]](#ref-6) [[19]](#ref-19).
- **Překlad a zobrazení:** příjemci by měli zobrazovat vyprávěcí text a překládat zakódované položky pomocí zobrazovaných názvů kódů v jazyce příjemce.
- **Zabezpečení:** používejte TLS, podepsané dokumenty tam, kde se vyžadují, auditní protokolování (například IHE ATNA nebo BALP) a řízení přístupu vázané na souhlas.


## Současné zavedení

IPS se posunul od pilotů k národním a regionálním programům. Stav se rychle mění, proto aktuální situaci hledejte v odkazovaných zdrojích.

- **IPS Implementation Registry.** Komunita IPS udržuje veřejný registr implementací. V polovině roku 2026 obsahoval 34 záznamů, od argentinského projektu IPS-LAC zprostředkovaného poskytovateli po vietnamský Better Health Program [[15]](#ref-15).
- **Ekosystém FHIR.** V průzkumu State of FHIR 2025 od HL7 International a Firely uvedlo 42 respondentů, že IPS je základem jejich národních specifikací FHIR, více než kterákoli jiná mezinárodní příručka [[20]](#ref-20).
- **Výzkum.** Studie o přijetí IPS z roku 2025 vedla rozhovory se zainteresovanými stranami, které jako hlavní přínosy uvedly lepší kvalitu péče a bezpečnost pacientů [[21]](#ref-21).

| Země nebo region | Stav |
|---|---|
| **Evropská unie a EHP** | MyHealth@EU vyměňuje souhrny pacientů a e-recepty mezi zeměmi. Prezentace Evropské komise z roku 2026 uvedla, že v provozu je 17 členských států a Norsko a většina ostatních se připojit plánuje [[2]](#ref-2) [[22]](#ref-22). Nařízení EHDS činí výměnu souhrnů pacientů povinnou do roku 2029 [[23]](#ref-23). |
| **Kanada** | Celokanadský souhrn pacienta (PS-CA), schválený organizací Canada Health Infoway v říjnu 2022, je postaven na IPS s kanadskými úpravami [[4]](#ref-4). |
| **Austrálie** | AU Patient Summary, postavený na IPS a AU Core, vyvíjí HL7 Australia v rámci programu Sparked [[5]](#ref-5) [[24]](#ref-24). |
| **Švýcarsko** | CH IPS 2.0.0 (zkušební použití) od HL7 Switzerland staví na IPS a CH Core. Samostatný profil doplňuje to, co potřebuje švýcarský elektronický pacientský záznam [[6]](#ref-6). |
| **Spojené státy** | Žádný federální mandát pro IPS. USA používají US Core a USCDI. Federální agentury se podílejí na mezinárodní práci na IPS a některé sítě IPS podporují dobrovolně [[18]](#ref-18). |
| **Latinská Amerika a Karibik** | Ministerstva zdravotnictví v RACSEL používají regionální příručku IPS-LAC. V roce 2023 si 16 zemí vyměnilo dokumenty IPS-LAC na connectathonu v São Paulu [[16]](#ref-16). |
| **Japonsko** | Výzkumníci vytvořili a ověřili aplikaci souhrnu pacienta založenou na IPS pro běžné japonské případy použití s využitím JP Core [[19]](#ref-19). |
| **Tchaj-wan a Filipíny** | Zpráva o implementaci z roku 2025 popisuje přeshraniční osobní zdravotní záznam využívající FHIR a sladěný s IPS [[25]](#ref-25). |
| **G7** | V roce 2021 se ministři zdravotnictví G7 zavázali pracovat na IPS a zveřejnili plán IPS [[26]](#ref-26). |
| **WHO** | Global Digital Health Certification Network WHO zahrnuje domény důvěry založené na IPS, například ověřitelný IPS pro pouť [[14]](#ref-14). |


## Zákony, předpisy a politiky podle zemí a regionů

IPS je standard, nikoli zákon. Zákony určují, zda země musí vyměňovat souhrny pacientů, v jakém formátu a podle jakých pravidel ochrany soukromí. Toto je shrnutí, nikoli právní poradenství. Vždy zkontrolujte aktuální znění zákona.

| Jurisdikce | Zákon nebo politika | Co to znamená pro IPS |
|---|---|---|
| **Evropská unie** | **Nařízení o evropském prostoru pro zdravotnická data (EHDS), (EU) 2025/327.** Zveřejněno 5. března 2025; v platnosti od 26. března 2025 [[23]](#ref-23) [[27]](#ref-27). | Souhrny pacientů jsou „prioritní kategorií“. Výměna v evropském výměnném formátu elektronických zdravotních záznamů musí fungovat ve všech členských státech do roku 2029. Lékařské snímky, výsledky vyšetření a propouštěcí zprávy následují do roku 2031 [[28]](#ref-28). Formát souhrnů pacientů vychází z HL7 IPS. |
| **Evropská unie** | **Směrnice 2011/24/EU** o uplatňování práv pacientů v přeshraniční zdravotní péči [[29]](#ref-29). | Zřídila síť pro elektronické zdravotnictví (eHealth Network), která schválila pokyny pro souhrn pacienta stojící za MyHealth@EU. |
| **Evropská unie** | **Obecné nařízení o ochraně osobních údajů (GDPR), (EU) 2016/679** [[30]](#ref-30). | Zdravotní údaje jsou zvláštní kategorií. Každá výměna IPS potřebuje právní základ a vhodné záruky. |
| **Spojené státy** | **21st Century Cures Act a pravidla proti blokování informací** [[31]](#ref-31); dobrovolný **CMS Interoperability Framework** (2025) [[17]](#ref-17). | Žádný zákon IPS nevyžaduje. Zákony vyžadují přístup k elektronickým zdravotním informacím a jejich výměnu s použitím US Core a USCDI. Podpora IPS je dobrovolná. |
| **Kanada** | Zákony provincií a teritorií o zdravotních informacích. Federální **Connected Care for Canadians Act** (návrh zákona C-72) byl předložen v roce 2024, ale nebyl přijat před prorogací parlamentu v roce 2025. | PS-CA je celokanadská specifikace, nikoli zákonný požadavek. Zavádění vedou provincie a teritoria s Canada Health Infoway [[4]](#ref-4). |
| **Spojené království** | **Data (Use and Access) Act 2025** [[32]](#ref-32). | Zahrnuje pravomoci stanovit informační standardy pro IT ve zdravotní a sociální péči o dospělé. Spojené království hostilo závazek G7 k IPS v roce 2021 [[26]](#ref-26). |
| **Austrálie** | **My Health Records Act 2012** a novely z roku 2025 o „sdílení ve výchozím stavu“. | AU Patient Summary je národní specifikace vyvíjená v rámci Sparked [[5]](#ref-5) [[24]](#ref-24). |
| **Švýcarsko** | **Spolkový zákon z 19. června 2015 o elektronickém pacientském záznamu (EPRA, SR 816.1)**, v účinnosti od 15. dubna 2017 [[33]](#ref-33). | CH IPS zahrnuje profil pro dokumenty ve švýcarském elektronickém pacientském záznamu [[6]](#ref-6). |
| **Latinská Amerika a Karibik** | Regionální dohody prostřednictvím RACSEL a PH4H, s podporou Inter-American Development Bank pro regionální právní rámec [[16]](#ref-16). | IPS-LAC je dohodnutý regionální formát pro přeshraniční výměnu. |
| **G7** | **Komuniké ministrů zdravotnictví**, Oxford, červen 2021, a **G7 IPS Roadmap**, prosinec 2021 [[26]](#ref-26) [[34]](#ref-34). | Politický závazek pracovat na IPS a přístupu pacientů, nikoli závazné právo. |


## Výhody a nevýhody

| Výhody | Nevýhody |
|---|---|
| **Bezpečnější neplánovaná péče.** Lékaři vidí alergie, léky a problémy během několika sekund. | **Je jen tak dobrý jako zdroj.** Zastaralá nebo chybná zdrojová data dají zastaralý nebo chybný souhrn. |
| **Jeden formát po celém světě.** Jedna implementace slouží národním i přeshraničním potřebám. | **Národní odchylky.** Národní profily přidávají pravidla, takže „platný IPS“ v jedné zemi může vyžadovat úpravy, aby byl přijat v jiné. |
| **Postaven na otevřených, zralých standardech:** ISO, CEN, HL7 FHIR a CDA, SNOMED CT a LOINC. | **Zátěž terminologie.** Mapování místních kódů na SNOMED CT a LOINC je náročná práce a plný SNOMED CT vyžaduje licenci nad rámec bezplatné podmnožiny IPS. |
| **Čitelný a vyčíslitelný.** Vyprávěcí text pro lidi, zakódovaná data pro software a překlad. | **Vyprávěcí text a zakódovaná data se mohou rozcházet,** pokud je generátor nedbalý, a příjemci mohou důvěřovat nesprávnému z nich. |
| **Posílení postavení pacienta.** Pacienti mohou mít a sdílet vlastní souhrn. | **Riziko pro soukromí a souhlas.** Přenosný souhrn je citlivý a zákony a modely souhlasu se v jednotlivých zemích liší. |
| **Bezplatné specifikace** a bezplatná terminologie IPS snižují náklady [[12]](#ref-12). | **Časté změny verzí.** STU 1, STU 1.1 a STU 2 existují vedle sebe a formát EHDS odkazuje na dřívější verzi [[28]](#ref-28). |
| **Opakovaně použitelný** pro potvrzení o očkování, výzkum a registry [[7]](#ref-7) [[8]](#ref-8). | **Záměrně minimální.** Nenahrazuje úplné záznamy ani specializované dokumenty a mezery pro sekundární využití vyžadují rozšíření [[7]](#ref-7). |
| **Silná podpora** vlád, EU, G7, WHO a normalizačních orgánů. | **Nerovnoměrné zavádění.** Mnoho zemí a dodavatelů stále pilotuje a povědomí pacientů je nízké. |


## Plány a budoucí směřování

- **EU, 2029:** výměna souhrnů pacientů a e-receptů funguje ve všech členských státech EU podle EHDS [[23]](#ref-23) [[28]](#ref-28).
- **EU, 2031:** lékařské snímky, laboratorní výsledky a propouštěcí zprávy se připojí k evropskému výměnnému formátu elektronických zdravotních záznamů [[28]](#ref-28).
- **Rozšíření MyHealth@EU:** další země se připojují a vznikají nové služby pro laboratorní výsledky, propouštěcí zprávy a lékařské snímky [[2]](#ref-2) [[22]](#ref-22).
- **Zavádění FHIR IPS STU 2:** implementátoři přecházejí na sekce Alerts a Patient Story, výslovné prázdné sekce a terminologii SNOMED CT IPS [[9]](#ref-9).
- **Austrálie:** vydání AU Patient Summary Release 1, plánované na rok 2026 [[24]](#ref-24).
- **IPS Best Practices Project:** společné úsilí o zdokumentování získaných poznatků, práce začíná v roce 2026.
- **Síť důvěry WHO:** další domény důvěry založené na IPS pro ověřitelné, přenosné zdravotní dokumenty [[14]](#ref-14).
- **SMART Health Links:** standardizované prostřednictvím HL7, pro sdílení řízené pacientem [[10]](#ref-10).
- **Latinská Amerika a Karibik:** širší výměna IPS-LAC prostřednictvím PH4H [[16]](#ref-16).
- **Výzkum a sekundární využití:** práce na rozšíření souhrnů pacientů pro klinický výzkum a umělou inteligenci při zachování minimálního jádra [[7]](#ref-7).


## Slovník

| Pojem | Význam |
|---|---|
| **IPS** | International Patient Summary |
| **FHIR** | Fast Healthcare Interoperability Resources, moderní standard HL7 založený na API |
| **CDA** | Clinical Document Architecture, standard dokumentů XML od HL7 |
| **IG** | Implementation Guide, soubor profilů a pravidel pro uplatnění standardu |
| **Profil** | Omezená verze zdroje FHIR pro konkrétní použití |
| **SNOMED CT** | Systematized Nomenclature of Medicine – Clinical Terms |
| **LOINC** | Logical Observation Identifiers Names and Codes |
| **SMART Health Links** | Standard pro sdílení zdravotních dat pomocí odkazu nebo QR kódu |
| **JIC** | Joint Initiative Council for Global Health Informatics Standardization |


## Zjistěte více

- HL7 FHIR IPS Implementation Guide: <https://hl7.org/fhir/uv/ips/>
- IPS continuous build: <https://build.fhir.org/ig/HL7/fhir-ips/>
- International Patient Summary project site: <https://international-patient-summary.net/>
- ISO 27269 (Health informatics — International patient summary): <https://www.iso.org/standard/79491.html>
- SNOMED CT IPS Terminology: <https://www.snomed.org/international-patient-summary-terminology>
- SMART Health Links: <https://docs.smarthealthit.org/smart-health-links/>


## Zdroje

Tyto odkazy pokrývají zdroje, specifikace, software, projekty, videa, knihy a výzkum o IPS. Většina z nich byla zkontrolována při psaní této stránky. Některé weby vydavatelů blokují automatické kontroly a jsou označeny *(nezkontrolováno)*.

### Oficiální specifikace a standardy

- [HL7 FHIR IPS Implementation Guide, current published version](https://hl7.org/fhir/uv/ips/) je autoritativní specifikace FHIR.
- [HL7 FHIR IPS Implementation Guide, STU 2](https://hl7.org/fhir/uv/ips/STU2/)
- [HL7 FHIR IPS Implementation Guide, STU 1.1](https://hl7.org/fhir/uv/ips/STU1.1/)
- [HL7 FHIR IPS publication history](https://www.hl7.org/fhir/uv/ips/history.html) uvádí všechny vydané verze.
- [HL7 FHIR IPS continuous build](https://build.fhir.org/ig/HL7/fhir-ips/) je nejnovější rozpracovaná verze, která dosud neprošla hlasováním.
- [Structure of the International Patient Summary](https://hl7.org/fhir/uv/ips/en/Structure-of-the-International-Patient-Summary.html) vysvětluje sekce a profily.
- [IPS design conventions](https://build.fhir.org/ig/HL7/fhir-ips/en/Design-Conventions.html) pokrývá must-support, chybějící data a vyprávěcí text.
- [IPS generation and data inclusion](https://build.fhir.org/ig/HL7/fhir-ips/en/Generation-and-Data-Inclusion.html) pokrývá `$summary` a způsob výběru obsahu.
- [HL7 CDA IPS Implementation Guide, continuous build](https://build.fhir.org/ig/HL7/CDA-IPS/)
- [HL7 CDA IPS product brief](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=483)
- [ISO 27269, Health informatics — International patient summary](https://www.iso.org/standard/79491.html) *(nezkontrolováno)*
- [ISO/TC 215 Health informatics committee](https://www.iso.org/committee/54960.html) *(nezkontrolováno)*
- [IHE FHIR International Patient Summary profile (FIIO)](https://profiles.ihe.net/PCC/FIIO/volume-1.html)
- [IHE PCC International Patient Summary supplement, 2020 (PDF)](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS_Rev1-0_PC_2020-03-17.pdf)
- [HL7 SMART Health Cards and Links Implementation Guide](https://hl7.org/fhir/uv/smart-health-cards-and-links/)
- [SMART Health Links documentation](https://docs.smarthealthit.org/smart-health-links/)
- [HL7 FHIR International Patient Access (IPA)](https://hl7.org/fhir/uv/ipa/) je sesterská specifikace pro přístup pacientů přes API.
- [HL7 FHIR R4 base specification](https://hl7.org/fhir/R4/), na níž IPS staví.

### Zdrojové repozitáře

- [HL7/fhir-ips](https://github.com/HL7/fhir-ips) obsahuje zdroj FHIR IPS IG ve FHIR Shorthand.
- [HL7/cda-ips](https://github.com/HL7/cda-ips) obsahuje zdroj CDA IPS IG.
- [hl7-eu/eps](https://github.com/hl7-eu/eps) obsahuje zdroj HL7 Europe Patient Summary.
- [hl7ch/ch-ips](https://github.com/hl7ch/ch-ips) obsahuje švýcarský IPS s prohlížečem a generátorem ve vývoji.
- [GitHub topic: international-patient-summary](https://github.com/topics/international-patient-summary) uvádí repozitáře komunity.

### Národní a regionální úpravy

- [HL7 Europe Patient Summary (EPS), continuous build](https://build.fhir.org/ig/hl7-eu/eps/)
- [AU Patient Summary (Australia), continuous build](https://build.fhir.org/ig/hl7au/au-fhir-ps/)
- [Trillium II IPS structure (HL7 Europe)](https://hl7.eu/fhir/build/trillium2/site/ipsStructure.html) pochází z projektu EU a USA, který pomohl IPS odstartovat.
- [eHealth Suisse](https://www.ehealthsuisse.ch/) je švýcarské kompetenční centrum pro digitální zdravotnictví a zavádění IPS.
- [MyHealth@EU, cross-border digital health services](https://health.ec.europa.eu/ehealth-digital-health-and-care/electronic-cross-border-health-services_en)
- [Xt-EHR Joint Action](https://www.xt-ehr.eu/) připravuje formáty evropského prostoru pro zdravotnická data, včetně souhrnu pacienta.

### Software a nástroje

- [IPS Viewer](https://www.ipsviewer.com) ([source: jddamore/IPSviewer](https://github.com/jddamore/IPSviewer)) je open-source prohlížeč IPS běžící v prohlížeči.
- [uwcirg/shl-ips-viewer](https://github.com/uwcirg/shl-ips-viewer) zobrazuje IPS sdílený prostřednictvím SMART Health Link.
- [smart-on-fhir/smart-health-links](https://github.com/smart-on-fhir/smart-health-links) je referenční implementace SMART Health Links.
- [HAPI FHIR IPS generator](https://hapifhir.io/hapi-fhir/docs/server_ips/introduction.html) ([source: hapifhir/hapi-fhir](https://github.com/hapifhir/hapi-fhir)) je open-source serverový modul v Javě, který implementuje `$summary`.
- [HAPI FHIR JPA server IPS documentation](https://hapifhir.io/hapi-fhir/docs/server_jpa/ips.html)
- [Inferno IPS Test Kit](https://inferno.healthit.gov/test-kits/ips) ([source: inferno-framework/ips-test-kit](https://github.com/inferno-framework/ips-test-kit)) je open-source sada pro testování shody.
- [FHIR Validator](https://validator.fhir.org/) ověřuje balíčky IPS podle profilů IG.
- [Simplifier: hl7.fhir.uv.ips package](https://simplifier.net/packages/hl7.fhir.uv.ips) obsahuje balíček, profily a příklady.
- [FHIR package registry](https://registry.fhir.org/)
- [FHIR Shorthand (FSH) School](https://fshschool.org/) učí jazyk, ve kterém je IPS IG napsán.
- [CommonHealth](https://www.commonhealth.org/) je pacientská aplikace, která generuje IPS a sdílí jej prostřednictvím SMART Health Links.
- [WHO SMART Trust](https://github.com/WorldHealthOrganization/smart-trust) je rámec důvěry pro Global Digital Health Certification Network WHO.

### Organizace a projekty

- [International Patient Summary project site](https://international-patient-summary.net/) má novinky, zprávy o zavádění a vzdělávací materiály.
- [IPS for health IT developers](https://international-patient-summary.net/health-it-developer/)
- [HL7 International](https://www.hl7.org/)
- [IHE International](https://www.ihe.net/)
- [SNOMED International](https://www.snomed.org/)
- [SNOMED CT IPS Terminology](https://www.snomed.org/international-patient-summary-terminology) je bezplatná podmnožina pro použití s IPS.
- [LOINC](https://loinc.org/) *(nezkontrolováno)*
- [Joint Initiative Council for Global Health Informatics Standardization (JIC)](http://www.jointinitiativecouncil.org/)
- [Global Digital Health Partnership (GDHP)](https://gdhp.health/)
- [WHO SMART Guidelines](https://smart.who.int/)
- [WHO Global Digital Health Certification Network](https://www.who.int/initiatives/global-digital-health-certification-network)

### Komunita a události

- [chat.fhir.org](https://chat.fhir.org/) je chat komunity FHIR, který má aktivní vlákno o IPS.
- [HL7 FHIR Connectathons](https://www.hl7.org/events/fhir-connectathon/)
- [IHE Connectathons](https://www.ihe.net/participate/connectathon/)

### Videa

- [HIMSS20: IPS for computable care guidelines in 200 seconds or less (IHE International, YouTube)](https://www.youtube.com/watch?v=xjEzGM8kBPw)
- [IHE International YouTube channel](https://www.youtube.com/@IHEIntl) má panely z Connectathonů a sezení o IPS.
- [IPS project site news](https://international-patient-summary.net/) odkazuje na mnoho nahraných webinářů, včetně:
  - panelu o IPS na IHE North America Connectathon, 2024
  - sezení o IPS na FHIR DevDays 2023
  - Grahame Grieve o IPS a IPA, IHE Connectathon Montreux 2022
  - hlavního vystoupení na SNOMED CT Expo 2022
  - Matthew Rahn o IPS v GDHP
  - webináře HL7 „Global Passport“ o přeshraničním použití
- [YouTube search: International Patient Summary](https://www.youtube.com/results?search_query=international+patient+summary)

### Knihy

- Tim Benson a Grahame Grieve, [*Principles of Health Interoperability: FHIR, HL7 and SNOMED CT*](https://link.springer.com/book/10.1007/978-3-030-56883-2), 4. vydání, Springer, 2020. Pokrývá FHIR, zdroje klinických souhrnů a terminologii.

### Výzkumné práce a články

- Laleci Erturkmen G. B., Sinaci A. A., Namli T., Boonstra M., et al., "[An assessment of the European Patient Summary for clinical research: a case study in cardiology](https://doi.org/10.3389/fmed.2024.1481551)", *Frontiers in Medicine*, 2024.
- Lee H., Huang J., Huang S., Chen W., et al., "[Implementing a Cross-Border Next-Generation Personal Health Record in the Philippines and Taiwan: An Implementation Case Report Using Health Level 7 International Fast Healthcare Interoperability Resources](https://doi.org/10.2196/56272)", *JMIR Formative Research*, 2025.
- Song C., Nakayama M., "[Implementation of a Patient Summary Web Application According to the International Patient Summary and Validation in Common Use Cases in Japan](https://doi.org/10.1007/s10916-023-01993-6)", *Journal of Medical Systems*, 2023.
- Schippers D., Spil T., Stegwee R., Folmer E., Donnelly S., "[The adoption and diffusion of the International Patient Summary](https://doi.org/10.24251/hicss.2025.425)", *Proceedings of the 58th Hawaii International Conference on System Sciences (HICSS)*, 2025.
- da Silva Carvalho N., Papadimitriou A., Stegwee R., Gille H., et al., "[Accelerating European electronic health record exchange format (EEHRxF) implementation across Europe: a policy perspective](https://doi.org/10.3389/fmed.2025.1648170)", *Frontiers in Medicine*, 2025.
- Kay S., Cangioli G., Nusbaum M., "[The International Patient Summary and the extensibility requirement](https://international-patient-summary.net/the-international-patient-summary-and-the-extensibility-requirement/)", *Studies in Health Technology and Informatics* (pHealth), 2020.
- D'Amore J., Cangioli G., Hausam R., "[Advancing the International Patient Summary](https://international-patient-summary.net/advancing-the-international-patient-summary/)"
- "[Towards the Austrian Patient Summary](https://international-patient-summary.net/towards-the-austrian-patient-summary/)", *Studies in Health Technology and Informatics* (dHealth).
- "[Revival of the International Patient Summary (IPS)](https://smiledigitalhealth.com/our-blog/revival-of-the-international-patient-summary-ips)", Smile Digital Health blog.
- [PubMed search: "international patient summary"](https://pubmed.ncbi.nlm.nih.gov/?term=%22international+patient+summary%22) pro recenzovanou literaturu.


## References

Číslované odkazy v textu, například [1], vedou na odpovídající položku níže. Odkazy byly zkontrolovány v listopadu 2026. Zákony, údaje o zavádění a verze se mění, proto aktuální stav ověřte ve zdroji.

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

Tyto zdroje nejsou výše citovány, ale jsou základními odkazy pro samotný standard.

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
