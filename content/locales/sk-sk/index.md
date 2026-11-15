# International Patient Summary (IPS)

**International Patient Summary (IPS)** je celosvetový štandard pre krátky elektronický výpis zo zdravotnej dokumentácie. Obsahuje základné klinické údaje, ktoré lekár potrebuje na bezpečné liečenie pacienta. Je navrhnutý tak, aby bol:

- **Minimálny a zámerne neúplný.** Je to malá, vybraná podmnožina zdravotnej dokumentácie, nie celá dokumentácia.
- **Nezávislý od odboru.** Môže ho používať každý lekár v ktoromkoľvek odbore.
- **Nezávislý od ochorenia.** Nie je viazaný na konkrétnu chorobu ani liečebný postup.
- **Realizovateľný a medzinárodný.** Je postavený na globálnych štandardoch a terminológiách, takže sa dá používať naprieč krajinami, jazykmi a IT systémami.

Stručne povedané, IPS odpovedá na jedinú otázku lekára, ktorý pacienta nikdy nestretol: *„Čo musím vedieť práve teraz, aby som sa o tohto človeka bezpečne postaral?“*


## Prečo IPS existuje

Zdravotné informácie sú zvyčajne uzamknuté v miestnej elektronickej zdravotnej dokumentácii (EZD), národnom systéme alebo produkte jedného dodávateľa. Keď pacient vyhľadá starostlivosť inde, napríklad v inej nemocnici, regióne alebo krajine, ošetrujúci lekár často nemá k tejto histórii prístup. IPS dáva všetkým jeden spoločný, prenosný formát súhrnu.

### Hlavné prípady použitia

| Prípad použitia | Opis |
|---|---|
| **Neplánovaná a pohotovostná starostlivosť** | Pacient ochorie alebo sa zraní ďaleko od domova a miestni lekári sa nemôžu dostať k jeho domácej EZD. Toto je pôvodný, hlavný prípad použitia. |
| **Cezhraničná starostlivosť** | Cestovatelia, migranti, cezhraniční pracovníci a utečenci nosia so sebou súhrn, ktorý môžu čítať lekári v zahraničí. |
| **Plánovaná starostlivosť a prechody** | Odporúčania, konzultácie u špecialistov, prijatia, prepustenia a odovzdania medzi poskytovateľmi. |
| **Zdravotný turizmus a mobilita** | Pacienti, ktorí sa rozhodnú pre starostlivosť v inej jurisdikcii. |
| **Posilnenie postavenia pacienta** | Pacienti majú vlastný súhrn, prezerajú si ho a zdieľajú ho z aplikácie v telefóne, z portálu alebo z vytlačenej kópie. |


## Kedy IPS použiť

Použite IPS, keď niekto, kto pacienta nepozná, rýchlo potrebuje spoľahlivý okamžitý obraz, a keď odosielateľ a príjemca nezdieľajú IT systém.

### Vhodné prípady

- **Pohotovostná a neplánovaná starostlivosť**, najmä mimo domova alebo cez hranice. Na toto bol IPS navrhnutý.
- **Cezhraničná výmena medzi národnými systémami**, napríklad služba EÚ MyHealth@EU [[1]](#ref-1) [[2]](#ref-2).
- **Súhrny držané pacientom**, ktoré cestovatelia, migranti, utečenci, pútnici alebo ľudia so zložitými ochoreniami nosia v telefóne alebo na papieri [[3]](#ref-3).
- **Národný alebo regionálny súhrn pacienta.** Mnohé krajiny vytvárajú vlastný súhrn ako profil IPS, takže sa dá vymieňať aj medzinárodne [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
- **Spoločný základ pre prechody v starostlivosti,** napríklad odporúčania, prijatia a prepustenia, keď nie je k dispozícii bohatší špecializovaný dokument.
- **Východiskový bod pre ďalšie súbory údajov,** napríklad potvrdenia o očkovaní, výskumné údaje alebo registre, ktoré potrebujú rovnaké základné údaje [[7]](#ref-7) [[8]](#ref-8).

### Nevhodné prípady

- **Úplná zdravotná dokumentácia.** IPS je zámerne minimálny. Keď záleží na podrobnostiach, použite úplný export dokumentácie alebo špecializovaný dokument.
- **Dokumenty špecifické pre odbor,** napríklad súhrn onkologickej liečby, tehotenská knižka alebo podrobná prepúšťacia správa. Tie majú vlastné štandardy, ktoré môžu obsahovať obsah IPS alebo naň odkazovať.
- **Klinické pracovné postupy v reálnom čase v rámci jednej organizácie.** V rámci jednej EZD sa dopytujte na živé údaje, nie na súhrn vo forme snímky.
- **Právne, účtovné alebo poisťovacie záznamy.** IPS je klinický súhrn, nie administratívny záznam ani záznam na vyúčtovanie.
- **Rozhodnutia vyžadujúce zaručenú úplnosť.** IPS je taký úplný a aktuálny, aký je jeho zdroj a autor. Kritické údaje vždy, keď je to možné, overte u pacienta.


## Čo IPS obsahuje

Dokument IPS má dve vrstvy:

1. **Hlavičku, ktorá zaznamenáva kto, čo a kedy:**
   - **Pacient:** totožnosť, demografické údaje a kontakty.
   - **Autor:** osoba, organizácia alebo systém, ktorý súhrn vytvoril.
   - **Správca (custodian):** organizácia zodpovedná za jeho udržiavanie.
   - **Overovateľ (attester):** kto ho overil, ak niekto.
   - **Dátum a čas:** kedy bol vytvorený.

2. **Klinickú časť usporiadanú do sekcií.** Sekcie sú povinné, odporúčané alebo voliteľné.

| Sekcia | Stav | Typický obsah |
|---|---|---|
| **Medication Summary** (súhrn liekov) | Povinná | Súčasné a relevantné predchádzajúce lieky, recepty, dávkovanie |
| **Allergies and Intolerances** (alergie a intolerancie) | Povinná | Alergie na lieky, potraviny a prostredie; reakcie a závažnosť |
| **Problem List** (zoznam problémov) | Povinná | Aktívne diagnózy, stavy a klinické problémy |
| Immunizations (očkovania) | Odporúčaná | Podané vakcíny, napríklad proti tetanu, hepatitíde B, chrípke, covidu-19 |
| History of Procedures (história výkonov) | Odporúčaná | Väčšie operácie a invazívne zákroky |
| Medical Devices (zdravotnícke pomôcky) | Odporúčaná | Implantáty a prístroje, napríklad kardiostimulátory, stenty, protézy |
| Diagnostic Results (diagnostické výsledky) | Odporúčaná | Kľúčové laboratórne výsledky, zobrazovacie nálezy, patológia |
| Vital Signs (vitálne funkcie) | Voliteľná | Krvný tlak, srdcová frekvencia, hmotnosť, výška, BMI |
| History of Past Illness (história predchádzajúcich ochorení) | Voliteľná | Vyliečené stavy a významné minulé problémy |
| Functional Status (funkčný stav) | Voliteľná | Postihnutia a schopnosť vykonávať každodenné činnosti |
| Plan of Care (plán starostlivosti) | Voliteľná | Plány starostlivosti a odporúčania na liečbu |
| Social History (sociálna anamnéza) | Voliteľná | Tabak, alkohol a ďalšie relevantné faktory životného štýlu |
| History of Pregnancy (história tehotenstiev) | Voliteľná | Súčasný stav tehotenstva a história tehotenstiev |
| Advance Directives (vopred vyslovené želania) | Voliteľná | Vopred vyslovené želania o liečbe, preferencie ohľadom resuscitácie, vyhlásenia o súhlase |
| Alerts (upozornenia) | Voliteľná | Bezpečnostne kritické upozornenia, ktoré nepatria inam (pridané vo FHIR IPS STU 2) |
| Patient Story (príbeh pacienta) | Voliteľná | Čo je pre pacienta dôležité: potreby, silné stránky, hodnoty, obavy a preferencie, vlastnými slovami pacienta (pridané vo FHIR IPS STU 2) |

**Je dôležité výslovne povedať „nič“.** Prázdna sekcia lekárovi nepovie, či pacient nemá žiadne alergie, alebo či ich nikto nezaznamenal. IPS preto očakáva výslovné vyhlásenia ako *„žiadne známe alergie“*, *„žiadne súčasné lieky“* alebo *„informácia nie je k dispozícii“*.


## Štandardy za IPS

IPS je rodina koordinovaných štandardov. Normy ISO a CEN určujú, *čo* musí súhrn pacienta obsahovať. Implementačné príručky HL7 určujú, *ako* ho zakódovať.

| Štandard | Orgán | Úloha |
|---|---|---|
| **EN 17269** | CEN (Európsky výbor pre normalizáciu) | Abstraktná dátová sada IPS, vydaná v roku 2019 |
| **ISO 27269** | ISO (Medzinárodná organizácia pre normalizáciu) | Medzinárodná verzia abstraktnej dátovej sady IPS, vydaná v roku 2021 |
| **CEN/TS 17288** | CEN | Pokyny na implementáciu IPS na cezhraničné použitie |
| **HL7 FHIR IPS Implementation Guide** | HL7 International | Moderné kódovanie priateľské k API a hlavný implementačný formát. STU 2 (2.0.x) pridalo sekcie Alerts a Patient Story, povolilo prázdne sekcie, spresnilo `$summary` a prešlo na terminológiu SNOMED CT IPS [[9]](#ref-9). |
| **HL7 CDA IPS Implementation Guide** | HL7 International | Kódovanie dokumentov v XML, bežné v existujúcich národných a európskych infraštruktúrach |

Prácu koordinuje **Joint Initiative Council for Global Health Informatics Standardization (JIC)**. JIC združuje ISO, CEN, HL7, SNOMED International, IHE a ďalších. IPS vyrástol zo spolupráce EÚ a USA z roku 2016 na cezhraničných zdravotných údajoch a dnes ho podporujú vlády a programy digitálneho zdravotníctva na celom svete.


## Ako sa IPS kóduje pomocou HL7 FHIR

Vo FHIR je IPS jediný **`Bundle`** typu `document`:

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

Kľúčové technické body:

- **Každá sekcia má čitateľný opisný text.** Lekár môže IPS prečítať v bežnom prehliadači, aj bez softvéru FHIR.
- **Každá sekcia má aj zakódované položky**, teda štruktúrované zdroje FHIR, ktoré softvér dokáže spracovať, preložiť a zosúladiť.
- **Profily obmedzujú základné zdroje FHIR.** Napríklad *Patient (IPS)* a *AllergyIntolerance (IPS)* definujú minimálne údaje a prvky „must support“.
- **Operácia `$summary`** (`GET [base]/Patient/[id]/$summary`) požiada server FHIR, aby na požiadanie vygeneroval IPS pre pacienta.
- **IPS sa dá podpísať a je samostatný.** Úplný dokument možno uložiť, odoslať, podpísať a overiť ako jeden celok.


## Terminológie

Zdieľané kódové systémy robia IPS čitateľným naprieč jazykmi a krajinami:

| Terminológia | Na čo sa používa |
|---|---|
| **SNOMED CT** | Problémy, alergie, výkony, pomôcky, klinické nálezy. Bezplatná podmnožina **SNOMED CT IPS Terminology** je dostupná na použitie s IPS, aj v krajinách, ktoré nie sú členmi. |
| **LOINC** | Typy dokumentov a sekcií, laboratórne testy, vitálne funkcie |
| **ATC** a ďalšie kódové systémy liekov | Liečivé prípravky a liečivé látky |
| **UCUM** | Merné jednotky |
| **Množiny hodnôt ISO a HL7** | Krajiny, jazyky, administratívne pohlavie, dôvody chýbajúcich a neznámych údajov |

Keďže položky sú zakódované, prijímajúci systém môže zobraziť IPS napísaný po portugalsky s anglickými popismi. Zakódovaný význam zostáva rovnaký.


## Ako IPS používajú pacienti a lekári

IPS môže vytvoriť EZD, národná služba zdravotných záznamov, pacientsky portál alebo osobná zdravotná aplikácia. Potom sa môže doručiť niekoľkými spôsobmi:

- **Systém so systémom:** prostredníctvom rozhraní FHIR REST, národných infraštruktúr alebo cezhraničných brán, ako je sieť EÚ MyHealth@EU.
- **Zdieľanie sprostredkované pacientom:** pacient má súhrn v peňaženke alebo zdravotnej aplikácii a zdieľa ho na požiadanie.
- **SMART Health Links:** QR kód alebo URL, ktoré lekárovi poskytujú časovo obmedzený, voliteľne heslom chránený prístup k zašifrovanému IPS. Lekár ho môže otvoriť v bežnom webovom prehliadači.
- **Papier alebo PDF:** vytlačené textové zobrazenie ako záloha, keď nič iné nefunguje.

Aplikácie ako **CommonHealth** umožňujú pacientom zhromažďovať svoje záznamy a zdieľať IPS prostredníctvom SMART Health Links.

Typický pohotovostný scenár:

1. Cestovateľ sa v zahraničí zrúti.
2. Cestovateľ alebo jeho spoločník ukáže QR kód z telefónu.
3. Lekár pohotovosti ho naskenuje a za pár sekúnd vidí cestovateľove lieky, alergie a aktívne problémy.
4. Lekár sa vyhne nebezpečnej liekovej interakcii a pacienta bezpečne lieči.


## Zásady a návrhové rozhodnutia

- **Bezpečnosť na prvom mieste.** Obsah sa vyberá podľa klinickej relevantnosti, nie úplnosti.
- **Globálne predvolene, lokálne prostredníctvom rozšírení.** Krajiny vytvárajú národné profily, napríklad varianty EÚ, Austrálie alebo Kanady, ktoré pridávajú požiadavky bez narušenia medzinárodného jadra.
- **Čitateľný pre ľudí a spracovateľný strojmi.** Opisný text a zakódované údaje existujú vedľa seba.
- **Bezplatný a otvorený.** Špecifikácie HL7 IPS a podmnožina SNOMED CT pre IPS sú voľne dostupné, aby znížili prekážky prijatia.
- **Súkromie a súhlas.** Prístup sa riadi miestnym právom a súhlasom pacienta. Mechanizmy ako SMART Health Links ponechávajú kontrolu pacientovi.


## Ako používať IPS

### Pre pacientov

1. **Požiadajte oň.** Opýtajte sa svojej ambulancie, nemocnice, národného zdravotného portálu alebo zdravotnej aplikácie, či dokážu vytvoriť IPS alebo na ňom založený národný súhrn pacienta.
2. **Skontrolujte ho.** Prečítajte si ho, kým ste zdraví. Nahláste všetko, čo je nesprávne alebo chýba, najmä alergie a lieky.
3. **Majte ho pri sebe.** Uložte ho do zdravotnej aplikácie alebo peňaženky, ako QR kód SMART Health Link alebo ako výtlačok medzi cestovnými dokladmi.
4. **Udržiavajte ho aktuálny.** Získajte nový po novej diagnóze, novom dlhodobom lieku, operácii alebo implantáte.
5. **Zdieľajte ho úmyselne.** Ukážte ho lekárovi, ktorý vás lieči. SMART Health Link môže vypršať a môže vyžadovať heslo, takže sami riadite, kto ho uvidí a ako dlho [[10]](#ref-10).

### Pre lekárov

1. **Najprv skontrolujte hlavičku.** Kto ho napísal, kedy a či ho niekto overil. Starý alebo neoverený súhrn si vyžaduje väčšiu opatrnosť.
2. **Najprv si prečítajte povinné sekcie:** alergie, lieky a problémy.
3. **Rozlišujte „nič známe“ od „nezaznamenané“.** „Žiadne známe alergie“ je klinické vyhlásenie. Prázdna alebo „neznáma“ sekcia ním nie je.
4. **Kritické údaje overte** u pacienta alebo jeho spoločníka, kedykoľvek môžete.
5. **Využite zakódované údaje.** Ak to váš systém podporuje, zakódované položky umožňujú zobraziť súhrn vo vašom jazyku a skontrolovať ho podľa pravidiel liekových interakcií a alergií.
6. **Nepredpokladajte úplnosť.** IPS je záchranná sieť, nie úplná anamnéza.

### Pre implementátorov

1. **Vyberte špecifikáciu.** Použite aktuálny HL7 FHIR IPS Implementation Guide (STU 2) alebo národný profil svojej krajiny. Pre infraštruktúry založené na CDA použite príručku CDA IPS [[9]](#ref-9) [[11]](#ref-11).
2. **Namapujte svoje údaje.** Namapujte miestne údaje na profily IPS: `Patient`, `AllergyIntolerance`, `MedicationStatement`, `Condition` a tak ďalej. Väčšina práce je v tomto mapovaní.
3. **Namapujte svoju terminológiu.** Namapujte miestne kódy na SNOMED CT, LOINC a kódové systémy liekov. SNOMED CT IPS Terminology je na tento účel bezplatná [[12]](#ref-12).
4. **Vygenerujte dokument.** Podporte operáciu `$summary` alebo si `Bundle` a `Composition` zostavte sami. Zahrňte čitateľný opisný text pre každú sekciu a výslovné vyhlásenia „nič známe“ alebo „nie je k dispozícii“.
5. **Overte ho.** Skontrolujte každý vygenerovaný dokument pomocou FHIR Validator a súpravy na testovanie zhody, napríklad Inferno IPS Test Kit [[13]](#ref-13).
6. **Podpíšte ho a zdieľajte.** Rozhodnite, ako sa dokumenty podpisujú, ukladajú a odosielajú: API, register dokumentov, cezhraničná brána alebo SMART Health Link.
7. **Prijímajte ho bezpečne.** Ako príjemca zobrazujte opisný text, aj keď nemôžete spracovať všetky zakódované položky, ponechajte viditeľný zdroj a autora a nikdy potichu nezlučujte prijaté údaje s miestnym záznamom.
8. **Testujte s ostatnými.** Pred spustením do ostrej prevádzky overte súčinnosť s ďalšími dodávateľmi a krajinami na Connectathonoch IHE a HL7.

### Pre vlády a zdravotnícke organizácie

1. **Prijmite národný profil,** ktorý stavia na IPS, namiesto samostatného formátu, aby bol národný súhrn predvolene medzinárodný [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
2. **Vyriešte správu:** kto smie súhrn vytvárať, aktualizovať a overovať a kto zodpovedá za jeho správnosť.
3. **Vyriešte licencovanie terminológie:** členstvo v SNOMED CT alebo použitie bezplatnej podmnožiny IPS.
4. **Vyriešte totožnosť, súhlas a dôveru:** ako sa identifikujú pacienti, ako sa zaznamenáva súhlas a aký rámec dôvery, napríklad MyHealth@EU alebo Global Digital Health Certification Network WHO, sa používa na overovanie dokumentov [[1]](#ref-1) [[14]](#ref-14).
5. **Zverejnite, čo ste vytvorili,** v IPS Implementation Registry, aby sa z toho mohli učiť ostatní [[15]](#ref-15).


## Integrácia IPS so zdravotníckymi systémami

IPS je zriedka samostatný systém. Je to pohľad na údaje, ktoré už existujú v EZD, výmenách zdravotných informácií, národných záznamoch a osobných zdravotných aplikáciách.

| Integračný vzor | Ako funguje | Príklady |
|---|---|---|
| **Generovaný EZD** | EZD zostaví IPS z vlastných údajov na požiadanie, často prostredníctvom operácie FHIR `$summary`. | Dodávatelia EZD a servery FHIR, napríklad HAPI FHIR, ktorý má modul generátora IPS |
| **Národný alebo regionálny záznam** | Národná služba súhrnov pacientov ukladá profil IPS a sprístupňuje ho oprávneným poskytovateľom. | PS-CA v Kanade, AU Patient Summary v Austrálii, švajčiarsky elektronický záznam pacienta s CH IPS [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6) |
| **Cezhraničná brána** | Každá krajina prevádzkuje národné kontaktné miesto. To premení súhrn domovskej krajiny na dohodnutý výmenný formát, odošle ho cez hranicu a prijímajúca krajina ho zobrazí v miestnom jazyku. | MyHealth@EU National Contact Points for eHealth [[1]](#ref-1) [[2]](#ref-2) |
| **Regionálna výmenná sieť** | Ministerstvá zdravotníctva vymieňajú dokumenty IPS prostredníctvom národných serverov FHIR podľa spoločnej regionálnej príručky. | IPS-LAC od RACSEL a Pan American Highway for Digital Health (PH4H) v Latinskej Amerike a Karibiku [[16]](#ref-16) |
| **Sprostredkované pacientom** | Pacient drží IPS v aplikácii alebo peňaženke a zdieľa ho pomocou QR kódu alebo SMART Health Link. | CommonHealth; práca siete dôvery WHO na IPS pre púť [[10]](#ref-10) [[14]](#ref-14) |
| **Prístup cez API** | Aplikácie získavajú IPS oprávneného pacienta cez rozhranie FHIR API. | International Patient Access (IPA); americké siete ako Flexpa, ktorá pridala podporu IPS v rámci CMS Interoperability Framework [[17]](#ref-17) [[18]](#ref-18) |

Integračné body, s ktorými treba počítať:

- **Zdieľanie dokumentov:** profily IHE ako MHD (FHIR) a XDS (registre dokumentov) ukladajú a vyhľadávajú dokumenty IPS. Obsahové profily IHE IPS pridávajú pravidlá zhody a testovania [[11]](#ref-11).
- **Totožnosť pacienta:** IHE PIXm a PDQm alebo národný identifikátor priraďujú pacienta naprieč systémami.
- **Existujúce dokumenty:** mnohé systémy už vytvárajú CDA, C-CDA alebo národné súhrny. Namapovať ich na IPS je zvyčajne jednoduchšie než začínať odznova, ale skontrolujte rozdiely v kardinalite, množinách hodnôt a kódových systémoch.
- **Národné profily:** národné jadro, napríklad US Core, AU Core, CH Core alebo JP Core, sa môže od IPS líšiť. Národné profily súhrnu pacienta oboje zosúlaďujú [[5]](#ref-5) [[6]](#ref-6) [[19]](#ref-19).
- **Preklad a zobrazenie:** príjemcovia by mali zobrazovať opisný text a prekladať zakódované položky pomocou zobrazovaných názvov kódov v jazyku príjemcu.
- **Zabezpečenie:** používajte TLS, podpísané dokumenty tam, kde sa vyžadujú, auditné protokolovanie (napríklad IHE ATNA alebo BALP) a riadenie prístupu viazané na súhlas.


## Súčasné zavedenie

IPS sa posunul od pilotov k národným a regionálnym programom. Stav sa rýchlo mení, preto aktuálnu situáciu hľadajte v odkazovaných zdrojoch.

- **IPS Implementation Registry.** Komunita IPS udržiava verejný register implementácií. V polovici roka 2026 obsahoval 34 záznamov, od argentínskeho projektu IPS-LAC sprostredkovaného poskytovateľmi po vietnamský Better Health Program [[15]](#ref-15).
- **Ekosystém FHIR.** V prieskume State of FHIR 2025 od HL7 International a Firely uviedlo 42 respondentov, že IPS je základom ich národných špecifikácií FHIR, viac než ktorákoľvek iná medzinárodná príručka [[20]](#ref-20).
- **Výskum.** Štúdia o prijatí IPS z roku 2025 viedla rozhovory so zainteresovanými stranami, ktoré ako hlavné prínosy uviedli lepšiu kvalitu starostlivosti a bezpečnosť pacientov [[21]](#ref-21).

| Krajina alebo región | Stav |
|---|---|
| **Európska únia a EHP** | MyHealth@EU vymieňa súhrny pacientov a e-recepty medzi krajinami. Prezentácia Európskej komisie z roku 2026 uviedla, že v prevádzke je 17 členských štátov a Nórsko a väčšina ostatných sa plánuje pripojiť [[2]](#ref-2) [[22]](#ref-22). Nariadenie EHDS robí výmenu súhrnov pacientov povinnou do roku 2029 [[23]](#ref-23). |
| **Kanada** | Celokanadský súhrn pacienta (PS-CA), schválený organizáciou Canada Health Infoway v októbri 2022, je postavený na IPS s kanadskými úpravami [[4]](#ref-4). |
| **Austrália** | AU Patient Summary, postavený na IPS a AU Core, vyvíja HL7 Australia v rámci programu Sparked [[5]](#ref-5) [[24]](#ref-24). |
| **Švajčiarsko** | CH IPS 2.0.0 (skúšobné použitie) od HL7 Switzerland stavia na IPS a CH Core. Samostatný profil dopĺňa to, čo potrebuje švajčiarsky elektronický záznam pacienta [[6]](#ref-6). |
| **Spojené štáty** | Žiadny federálny mandát pre IPS. USA používajú US Core a USCDI. Federálne agentúry sa podieľajú na medzinárodnej práci na IPS a niektoré siete IPS podporujú dobrovoľne [[18]](#ref-18). |
| **Latinská Amerika a Karibik** | Ministerstvá zdravotníctva v RACSEL používajú regionálnu príručku IPS-LAC. V roku 2023 si 16 krajín vymenilo dokumenty IPS-LAC na connectathone v São Paule [[16]](#ref-16). |
| **Japonsko** | Výskumníci vytvorili a overili aplikáciu súhrnu pacienta založenú na IPS pre bežné japonské prípady použitia s využitím JP Core [[19]](#ref-19). |
| **Taiwan a Filipíny** | Správa o implementácii z roku 2025 popisuje cezhraničný osobný zdravotný záznam využívajúci FHIR a zosúladený s IPS [[25]](#ref-25). |
| **G7** | V roku 2021 sa ministri zdravotníctva G7 zaviazali pracovať na IPS a zverejnili plán IPS [[26]](#ref-26). |
| **WHO** | Global Digital Health Certification Network WHO zahŕňa domény dôvery založené na IPS, napríklad overiteľný IPS pre púť [[14]](#ref-14). |


## Zákony, predpisy a politiky podľa krajín a regiónov

IPS je štandard, nie zákon. Zákony určujú, či krajina musí vymieňať súhrny pacientov, v akom formáte a podľa akých pravidiel ochrany súkromia. Toto je zhrnutie, nie právne poradenstvo. Vždy skontrolujte aktuálne znenie zákona.

| Jurisdikcia | Zákon alebo politika | Čo to znamená pre IPS |
|---|---|---|
| **Európska únia** | **Nariadenie o európskom priestore pre zdravotné údaje (EHDS), (EÚ) 2025/327.** Uverejnené 5. marca 2025; účinné od 26. marca 2025 [[23]](#ref-23) [[27]](#ref-27). | Súhrny pacientov sú „prioritnou kategóriou“. Výmena v európskom výmennom formáte elektronických zdravotných záznamov musí fungovať v každom členskom štáte do roku 2029. Lekárske snímky, výsledky vyšetrení a prepúšťacie správy nasledujú do roku 2031 [[28]](#ref-28). Formát súhrnov pacientov vychádza z HL7 IPS. |
| **Európska únia** | **Smernica 2011/24/EÚ** o uplatňovaní práv pacientov pri cezhraničnej zdravotnej starostlivosti [[29]](#ref-29). | Zriadila sieť elektronického zdravotníctva (eHealth Network), ktorá schválila usmernenia o súhrne pacienta stojace za MyHealth@EU. |
| **Európska únia** | **Všeobecné nariadenie o ochrane údajov (GDPR), (EÚ) 2016/679** [[30]](#ref-30). | Zdravotné údaje sú osobitnou kategóriou. Každá výmena IPS potrebuje právny základ a vhodné záruky. |
| **Spojené štáty** | **21st Century Cures Act a pravidlá proti blokovaniu informácií** [[31]](#ref-31); dobrovoľný **CMS Interoperability Framework** (2025) [[17]](#ref-17). | Žiadny zákon IPS nevyžaduje. Zákony vyžadujú prístup k elektronickým zdravotným informáciám a ich výmenu s použitím US Core a USCDI. Podpora IPS je dobrovoľná. |
| **Kanada** | Zákony provincií a území o zdravotných informáciách. Federálny **Connected Care for Canadians Act** (návrh zákona C-72) bol predložený v roku 2024, ale nebol prijatý pred prerušením zasadania parlamentu v roku 2025. | PS-CA je celokanadská špecifikácia, nie zákonná požiadavka. Zavádzanie vedú provincie a územia s Canada Health Infoway [[4]](#ref-4). |
| **Spojené kráľovstvo** | **Data (Use and Access) Act 2025** [[32]](#ref-32). | Zahŕňa právomoci stanoviť informačné štandardy pre IT v zdravotnej a sociálnej starostlivosti o dospelých. Spojené kráľovstvo hostilo záväzok G7 k IPS v roku 2021 [[26]](#ref-26). |
| **Austrália** | **My Health Records Act 2012** a novely z roku 2025 o „zdieľaní predvolene“. | AU Patient Summary je národná špecifikácia vyvíjaná v rámci Sparked [[5]](#ref-5) [[24]](#ref-24). |
| **Švajčiarsko** | **Spolkový zákon z 19. júna 2015 o elektronickom zázname pacienta (EPRA, SR 816.1)**, účinný od 15. apríla 2017 [[33]](#ref-33). | CH IPS zahŕňa profil pre dokumenty vo švajčiarskom elektronickom zázname pacienta [[6]](#ref-6). |
| **Latinská Amerika a Karibik** | Regionálne dohody prostredníctvom RACSEL a PH4H, s podporou Inter-American Development Bank pre regionálny právny rámec [[16]](#ref-16). | IPS-LAC je dohodnutý regionálny formát pre cezhraničnú výmenu. |
| **G7** | **Komuniké ministrov zdravotníctva**, Oxford, jún 2021, a **G7 IPS Roadmap**, december 2021 [[26]](#ref-26) [[34]](#ref-34). | Politický záväzok pracovať na IPS a prístupe pacientov, nie záväzné právo. |


## Výhody a nevýhody

| Výhody | Nevýhody |
|---|---|
| **Bezpečnejšia neplánovaná starostlivosť.** Lekári vidia alergie, lieky a problémy za pár sekúnd. | **Je len taký dobrý ako zdroj.** Zastarané alebo chybné zdrojové údaje dajú zastaraný alebo chybný súhrn. |
| **Jeden formát po celom svete.** Jedna implementácia slúži národným aj cezhraničným potrebám. | **Národné odchýlky.** Národné profily pridávajú pravidlá, takže „platný IPS“ v jednej krajine môže vyžadovať úpravy, aby ho prijali v inej. |
| **Postavený na otvorených, zrelých štandardoch:** ISO, CEN, HL7 FHIR a CDA, SNOMED CT a LOINC. | **Záťaž terminológie.** Mapovanie miestnych kódov na SNOMED CT a LOINC je náročná práca a plný SNOMED CT vyžaduje licenciu nad rámec bezplatnej podmnožiny IPS. |
| **Čitateľný a vyčísliteľný.** Opisný text pre ľudí, zakódované údaje pre softvér a preklad. | **Opisný text a zakódované údaje sa môžu rozchádzať,** ak je generátor nedbalý, a príjemcovia môžu dôverovať nesprávnemu z nich. |
| **Posilnenie postavenia pacienta.** Pacienti môžu mať a zdieľať vlastný súhrn. | **Riziko pre súkromie a súhlas.** Prenosný súhrn je citlivý a zákony a modely súhlasu sa v jednotlivých krajinách líšia. |
| **Bezplatné špecifikácie** a bezplatná terminológia IPS znižujú náklady [[12]](#ref-12). | **Časté zmeny verzií.** STU 1, STU 1.1 a STU 2 existujú popri sebe a formát EHDS odkazuje na skoršiu verziu [[28]](#ref-28). |
| **Opakovane použiteľný** pre potvrdenia o očkovaní, výskum a registre [[7]](#ref-7) [[8]](#ref-8). | **Zámerne minimálny.** Nenahrádza úplné záznamy ani špecializované dokumenty a medzery pre sekundárne využitie vyžadujú rozšírenia [[7]](#ref-7). |
| **Silná podpora** vlád, EÚ, G7, WHO a normalizačných orgánov. | **Nerovnomerné zavádzanie.** Mnohé krajiny a dodávatelia stále pilotujú a povedomie pacientov je nízke. |


## Plány a budúce smerovanie

- **EÚ, 2029:** výmena súhrnov pacientov a e-receptov funguje vo všetkých členských štátoch EÚ podľa EHDS [[23]](#ref-23) [[28]](#ref-28).
- **EÚ, 2031:** lekárske snímky, laboratórne výsledky a prepúšťacie správy sa pripoja k európskemu výmennému formátu elektronických zdravotných záznamov [[28]](#ref-28).
- **Rozšírenie MyHealth@EU:** ďalšie krajiny sa pripájajú a vznikajú nové služby pre laboratórne výsledky, prepúšťacie správy a lekárske snímky [[2]](#ref-2) [[22]](#ref-22).
- **Zavádzanie FHIR IPS STU 2:** implementátori prechádzajú na sekcie Alerts a Patient Story, výslovné prázdne sekcie a terminológiu SNOMED CT IPS [[9]](#ref-9).
- **Austrália:** vydanie AU Patient Summary Release 1, plánované na rok 2026 [[24]](#ref-24).
- **IPS Best Practices Project:** spoločné úsilie o zdokumentovanie získaných poznatkov, práce začínajú v roku 2026.
- **Sieť dôvery WHO:** ďalšie domény dôvery založené na IPS pre overiteľné, prenosné zdravotné dokumenty [[14]](#ref-14).
- **SMART Health Links:** štandardizované prostredníctvom HL7 pre zdieľanie riadené pacientom [[10]](#ref-10).
- **Latinská Amerika a Karibik:** širšia výmena IPS-LAC prostredníctvom PH4H [[16]](#ref-16).
- **Výskum a sekundárne využitie:** práca na rozšírení súhrnov pacientov pre klinický výskum a umelú inteligenciu pri zachovaní minimálneho jadra [[7]](#ref-7).


## Slovník

| Pojem | Význam |
|---|---|
| **IPS** | International Patient Summary |
| **FHIR** | Fast Healthcare Interoperability Resources, moderný štandard HL7 založený na API |
| **CDA** | Clinical Document Architecture, štandard dokumentov XML od HL7 |
| **IG** | Implementation Guide, súbor profilov a pravidiel na uplatnenie štandardu |
| **Profil** | Obmedzená verzia zdroja FHIR pre konkrétne použitie |
| **SNOMED CT** | Systematized Nomenclature of Medicine – Clinical Terms |
| **LOINC** | Logical Observation Identifiers Names and Codes |
| **SMART Health Links** | Štandard na zdieľanie zdravotných údajov prostredníctvom odkazu alebo QR kódu |
| **JIC** | Joint Initiative Council for Global Health Informatics Standardization |


## Zistite viac

- HL7 FHIR IPS Implementation Guide: <https://hl7.org/fhir/uv/ips/>
- IPS continuous build: <https://build.fhir.org/ig/HL7/fhir-ips/>
- International Patient Summary project site: <https://international-patient-summary.net/>
- ISO 27269 (Health informatics — International patient summary): <https://www.iso.org/standard/79491.html>
- SNOMED CT IPS Terminology: <https://www.snomed.org/international-patient-summary-terminology>
- SMART Health Links: <https://docs.smarthealthit.org/smart-health-links/>


## Zdroje

Tieto odkazy pokrývajú zdroje, špecifikácie, softvér, projekty, videá, knihy a výskum o IPS. Väčšina z nich bola skontrolovaná pri písaní tejto stránky. Niektoré weby vydavateľov blokujú automatické kontroly a sú označené *(neskontrolované)*.

### Oficiálne špecifikácie a štandardy

- [HL7 FHIR IPS Implementation Guide, current published version](https://hl7.org/fhir/uv/ips/) je autoritatívna špecifikácia FHIR.
- [HL7 FHIR IPS Implementation Guide, STU 2](https://hl7.org/fhir/uv/ips/STU2/)
- [HL7 FHIR IPS Implementation Guide, STU 1.1](https://hl7.org/fhir/uv/ips/STU1.1/)
- [HL7 FHIR IPS publication history](https://www.hl7.org/fhir/uv/ips/history.html) uvádza všetky vydané verzie.
- [HL7 FHIR IPS continuous build](https://build.fhir.org/ig/HL7/fhir-ips/) je najnovšia rozpracovaná verzia, ktorá ešte neprešla hlasovaním.
- [Structure of the International Patient Summary](https://hl7.org/fhir/uv/ips/en/Structure-of-the-International-Patient-Summary.html) vysvetľuje sekcie a profily.
- [IPS design conventions](https://build.fhir.org/ig/HL7/fhir-ips/en/Design-Conventions.html) pokrýva must-support, chýbajúce údaje a opisný text.
- [IPS generation and data inclusion](https://build.fhir.org/ig/HL7/fhir-ips/en/Generation-and-Data-Inclusion.html) pokrýva `$summary` a spôsob výberu obsahu.
- [HL7 CDA IPS Implementation Guide, continuous build](https://build.fhir.org/ig/HL7/CDA-IPS/)
- [HL7 CDA IPS product brief](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=483)
- [ISO 27269, Health informatics — International patient summary](https://www.iso.org/standard/79491.html) *(neskontrolované)*
- [ISO/TC 215 Health informatics committee](https://www.iso.org/committee/54960.html) *(neskontrolované)*
- [IHE FHIR International Patient Summary profile (FIIO)](https://profiles.ihe.net/PCC/FIIO/volume-1.html)
- [IHE PCC International Patient Summary supplement, 2020 (PDF)](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS_Rev1-0_PC_2020-03-17.pdf)
- [HL7 SMART Health Cards and Links Implementation Guide](https://hl7.org/fhir/uv/smart-health-cards-and-links/)
- [SMART Health Links documentation](https://docs.smarthealthit.org/smart-health-links/)
- [HL7 FHIR International Patient Access (IPA)](https://hl7.org/fhir/uv/ipa/) je súrodenecká špecifikácia pre prístup pacientov cez API.
- [HL7 FHIR R4 base specification](https://hl7.org/fhir/R4/), na ktorej IPS stavia.

### Zdrojové repozitáre

- [HL7/fhir-ips](https://github.com/HL7/fhir-ips) obsahuje zdroj FHIR IPS IG vo FHIR Shorthand.
- [HL7/cda-ips](https://github.com/HL7/cda-ips) obsahuje zdroj CDA IPS IG.
- [hl7-eu/eps](https://github.com/hl7-eu/eps) obsahuje zdroj HL7 Europe Patient Summary.
- [hl7ch/ch-ips](https://github.com/hl7ch/ch-ips) obsahuje švajčiarsky IPS s prehliadačom a generátorom vo vývoji.
- [GitHub topic: international-patient-summary](https://github.com/topics/international-patient-summary) uvádza repozitáre komunity.

### Národné a regionálne úpravy

- [HL7 Europe Patient Summary (EPS), continuous build](https://build.fhir.org/ig/hl7-eu/eps/)
- [AU Patient Summary (Australia), continuous build](https://build.fhir.org/ig/hl7au/au-fhir-ps/)
- [Trillium II IPS structure (HL7 Europe)](https://hl7.eu/fhir/build/trillium2/site/ipsStructure.html) pochádza z projektu EÚ a USA, ktorý pomohol IPS odštartovať.
- [eHealth Suisse](https://www.ehealthsuisse.ch/) je švajčiarske kompetenčné centrum pre digitálne zdravotníctvo a zavádzanie IPS.
- [MyHealth@EU, cross-border digital health services](https://health.ec.europa.eu/ehealth-digital-health-and-care/electronic-cross-border-health-services_en)
- [Xt-EHR Joint Action](https://www.xt-ehr.eu/) pripravuje formáty európskeho priestoru pre zdravotné údaje vrátane súhrnu pacienta.

### Softvér a nástroje

- [IPS Viewer](https://www.ipsviewer.com) ([source: jddamore/IPSviewer](https://github.com/jddamore/IPSviewer)) je open-source prehliadač IPS bežiaci v prehliadači.
- [uwcirg/shl-ips-viewer](https://github.com/uwcirg/shl-ips-viewer) zobrazuje IPS zdieľaný prostredníctvom SMART Health Link.
- [smart-on-fhir/smart-health-links](https://github.com/smart-on-fhir/smart-health-links) je referenčná implementácia SMART Health Links.
- [HAPI FHIR IPS generator](https://hapifhir.io/hapi-fhir/docs/server_ips/introduction.html) ([source: hapifhir/hapi-fhir](https://github.com/hapifhir/hapi-fhir)) je open-source serverový modul v Jave, ktorý implementuje `$summary`.
- [HAPI FHIR JPA server IPS documentation](https://hapifhir.io/hapi-fhir/docs/server_jpa/ips.html)
- [Inferno IPS Test Kit](https://inferno.healthit.gov/test-kits/ips) ([source: inferno-framework/ips-test-kit](https://github.com/inferno-framework/ips-test-kit)) je open-source súprava na testovanie zhody.
- [FHIR Validator](https://validator.fhir.org/) overuje balíky IPS podľa profilov IG.
- [Simplifier: hl7.fhir.uv.ips package](https://simplifier.net/packages/hl7.fhir.uv.ips) obsahuje balík, profily a príklady.
- [FHIR package registry](https://registry.fhir.org/)
- [FHIR Shorthand (FSH) School](https://fshschool.org/) učí jazyk, v ktorom je IPS IG napísaný.
- [CommonHealth](https://www.commonhealth.org/) je pacientska aplikácia, ktorá generuje IPS a zdieľa ho prostredníctvom SMART Health Links.
- [WHO SMART Trust](https://github.com/WorldHealthOrganization/smart-trust) je rámec dôvery pre Global Digital Health Certification Network WHO.

### Organizácie a projekty

- [International Patient Summary project site](https://international-patient-summary.net/) má novinky, správy o zavádzaní a vzdelávacie materiály.
- [IPS for health IT developers](https://international-patient-summary.net/health-it-developer/)
- [HL7 International](https://www.hl7.org/)
- [IHE International](https://www.ihe.net/)
- [SNOMED International](https://www.snomed.org/)
- [SNOMED CT IPS Terminology](https://www.snomed.org/international-patient-summary-terminology) je bezplatná podmnožina na použitie s IPS.
- [LOINC](https://loinc.org/) *(neskontrolované)*
- [Joint Initiative Council for Global Health Informatics Standardization (JIC)](http://www.jointinitiativecouncil.org/)
- [Global Digital Health Partnership (GDHP)](https://gdhp.health/)
- [WHO SMART Guidelines](https://smart.who.int/)
- [WHO Global Digital Health Certification Network](https://www.who.int/initiatives/global-digital-health-certification-network)

### Komunita a podujatia

- [chat.fhir.org](https://chat.fhir.org/) je chat komunity FHIR, ktorý má aktívne vlákno o IPS.
- [HL7 FHIR Connectathons](https://www.hl7.org/events/fhir-connectathon/)
- [IHE Connectathons](https://www.ihe.net/participate/connectathon/)

### Videá

- [HIMSS20: IPS for computable care guidelines in 200 seconds or less (IHE International, YouTube)](https://www.youtube.com/watch?v=xjEzGM8kBPw)
- [IHE International YouTube channel](https://www.youtube.com/@IHEIntl) má panely z Connectathonov a relácie o IPS.
- [IPS project site news](https://international-patient-summary.net/) odkazuje na mnohé nahrané webináre, vrátane:
  - panelu o IPS na IHE North America Connectathon, 2024
  - relácie o IPS na FHIR DevDays 2023
  - Grahame Grieve o IPS a IPA, IHE Connectathon Montreux 2022
  - hlavného vystúpenia na SNOMED CT Expo 2022
  - Matthew Rahn o IPS v GDHP
  - webinára HL7 „Global Passport“ o cezhraničnom použití
- [YouTube search: International Patient Summary](https://www.youtube.com/results?search_query=international+patient+summary)

### Knihy

- Tim Benson a Grahame Grieve, [*Principles of Health Interoperability: FHIR, HL7 and SNOMED CT*](https://link.springer.com/book/10.1007/978-3-030-56883-2), 4. vydanie, Springer, 2020. Pokrýva FHIR, zdroje klinických súhrnov a terminológiu.

### Výskumné práce a články

- Laleci Erturkmen G. B., Sinaci A. A., Namli T., Boonstra M., et al., "[An assessment of the European Patient Summary for clinical research: a case study in cardiology](https://doi.org/10.3389/fmed.2024.1481551)", *Frontiers in Medicine*, 2024.
- Lee H., Huang J., Huang S., Chen W., et al., "[Implementing a Cross-Border Next-Generation Personal Health Record in the Philippines and Taiwan: An Implementation Case Report Using Health Level 7 International Fast Healthcare Interoperability Resources](https://doi.org/10.2196/56272)", *JMIR Formative Research*, 2025.
- Song C., Nakayama M., "[Implementation of a Patient Summary Web Application According to the International Patient Summary and Validation in Common Use Cases in Japan](https://doi.org/10.1007/s10916-023-01993-6)", *Journal of Medical Systems*, 2023.
- Schippers D., Spil T., Stegwee R., Folmer E., Donnelly S., "[The adoption and diffusion of the International Patient Summary](https://doi.org/10.24251/hicss.2025.425)", *Proceedings of the 58th Hawaii International Conference on System Sciences (HICSS)*, 2025.
- da Silva Carvalho N., Papadimitriou A., Stegwee R., Gille H., et al., "[Accelerating European electronic health record exchange format (EEHRxF) implementation across Europe: a policy perspective](https://doi.org/10.3389/fmed.2025.1648170)", *Frontiers in Medicine*, 2025.
- Kay S., Cangioli G., Nusbaum M., "[The International Patient Summary and the extensibility requirement](https://international-patient-summary.net/the-international-patient-summary-and-the-extensibility-requirement/)", *Studies in Health Technology and Informatics* (pHealth), 2020.
- D'Amore J., Cangioli G., Hausam R., "[Advancing the International Patient Summary](https://international-patient-summary.net/advancing-the-international-patient-summary/)"
- "[Towards the Austrian Patient Summary](https://international-patient-summary.net/towards-the-austrian-patient-summary/)", *Studies in Health Technology and Informatics* (dHealth).
- "[Revival of the International Patient Summary (IPS)](https://smiledigitalhealth.com/our-blog/revival-of-the-international-patient-summary-ips)", Smile Digital Health blog.
- [PubMed search: "international patient summary"](https://pubmed.ncbi.nlm.nih.gov/?term=%22international+patient+summary%22) pre recenzovanú literatúru.


## References

Číslované odkazy v texte, napríklad [1], vedú na zodpovedajúcu položku nižšie. Odkazy boli skontrolované v novembri 2026. Zákony, údaje o zavádzaní a verzie sa menia, preto aktuálny stav skontrolujte v zdroji.

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

Tieto zdroje nie sú vyššie citované, ale sú základnými odkazmi pre samotný štandard.

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
