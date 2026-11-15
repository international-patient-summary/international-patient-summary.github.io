# International Patient Summary (IPS)

**International Patient Summary (IPS)** er en verdensomspændende standard for et kort elektronisk udtræk af en sundhedsjournal. Det rummer de grundlæggende kliniske oplysninger, som en kliniker har brug for for at kunne behandle en patient sikkert. Det er udformet til at være:

- **Minimalt og ikke udtømmende.** Det er en lille, udvalgt delmængde af en sundhedsjournal, ikke hele journalen.
- **Specialeuafhængigt.** Enhver kliniker kan bruge det, uanset fagområde.
- **Sygdomsuafhængigt.** Det er ikke knyttet til en bestemt sygdom eller et bestemt behandlingsforløb.
- **Implementerbart og internationalt.** Det bygger på globale standarder og terminologier og kan derfor bruges på tværs af lande, sprog og it-systemer.

Kort sagt besvarer IPS ét spørgsmål for en kliniker, der aldrig har mødt patienten: *"Hvad har jeg brug for at vide lige nu for at kunne tage mig sikkert af denne person?"*


## Hvorfor IPS findes

Sundhedsoplysninger er som regel låst inde i en lokal elektronisk patientjournal (EHR), et nationalt system eller en leverandørs produkt. Når en patient søger behandling et andet sted, for eksempel på et andet hospital, i en anden region eller i et andet land, har den behandlende kliniker ofte ingen adgang til den historik. IPS giver alle ét fælles, bærbart oversigtsformat.

### Centrale anvendelsestilfælde

| Anvendelsestilfælde | Beskrivelse |
|---|---|
| **Uplanlagt behandling og akut behandling** | En patient bliver syg eller kommer til skade væk hjemmefra, og de lokale klinikere kan ikke få adgang til patientens hjemlige EHR. Dette er det oprindelige, primære anvendelsestilfælde. |
| **Grænseoverskridende behandling** | Rejsende, migranter, grænsearbejdere og flygtninge har en oversigt med sig, som klinikere i udlandet kan læse. |
| **Planlagt behandling og overgange** | Henvisninger, specialistkonsultationer, indlæggelser, udskrivelser og overdragelser mellem behandlere. |
| **Medicinsk turisme og mobilitet** | Patienter, der vælger at modtage behandling i en anden jurisdiktion. |
| **Styrkelse af patienten** | Patienter har, ser og deler deres egen oversigt fra en telefon-app, en portal eller en udskrift. |


## Hvornår IPS skal bruges

Brug IPS, når en person, der ikke kender patienten, hurtigt har brug for et pålideligt øjebliksbillede, og når afsender og modtager ikke deler et it-system.

### Gode anvendelser

- **Akut og uplanlagt behandling**, især væk hjemmefra eller på tværs af en grænse. Det er den anvendelse, IPS er designet til.
- **Grænseoverskridende udveksling mellem nationale systemer**, såsom EU's tjeneste MyHealth@EU [[1]](#ref-1) [[2]](#ref-2).
- **Patientholdte oversigter**, som rejsende, migranter, flygtninge, pilgrimme eller personer med komplekse sygdomme har med på en telefon eller på papir [[3]](#ref-3).
- **En national eller regional patientoversigt.** Mange lande bygger deres egen oversigt som en profil af IPS, så den også kan udveksles internationalt [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
- **Et fælles grundlag for behandlingsovergange,** såsom henvisninger, indlæggelser og udskrivelser, når et rigere specialiseret dokument ikke er tilgængeligt.
- **Et udgangspunkt for andre datasæt,** såsom vaccinationscertifikater, forskningsdata eller registre, der har brug for de samme kerneoplysninger [[7]](#ref-7) [[8]](#ref-8).

### Dårlige anvendelser

- **Den fulde patientjournal.** IPS er bevidst minimal. Brug en fuld journaleksport eller et specialiseret dokument, når detaljer er vigtige.
- **Specialespecifikke dokumenter,** såsom et behandlingsresumé inden for onkologi, en graviditetsjournal eller en detaljeret udskrivningsepikrise. Disse har deres egne standarder, som kan indeholde eller henvise til IPS-indhold.
- **Kliniske arbejdsgange i realtid inden for én organisation.** Inden for en enkelt EHR bør man forespørge på de levende data frem for et oversigtsøjebliksbillede.
- **Juridiske, faktureringsmæssige eller forsikringsmæssige registreringer.** IPS er en klinisk oversigt, ikke en administrativ post eller en refusionspost.
- **Beslutninger, der kræver garanteret fuldstændighed.** En IPS er kun så fuldstændig og aktuel som sin kilde og sin forfatter. Bekræft altid kritiske oplysninger med patienten, når det er muligt.


## Hvad en IPS indeholder

Et IPS-dokument har to lag:

1. **En header, der registrerer hvem, hvad og hvornår:**
   - **Patient:** identitet, demografiske oplysninger og kontakter.
   - **Author (forfatter):** den person, organisation eller det system, der har produceret oversigten.
   - **Custodian (ansvarlig):** den organisation, der er ansvarlig for at vedligeholde den.
   - **Attester (bekræfter):** hvem der har verificeret den, hvis nogen.
   - **Dato og tidspunkt:** hvornår den blev oprettet.

2. **En klinisk del organiseret i sektioner.** Sektioner er påkrævede, anbefalede eller valgfrie.

| Sektion | Status | Typisk indhold |
|---|---|---|
| **Medication Summary** (Medicinoversigt) | Påkrævet | Nuværende og relevant tidligere medicin, recepter, dosering |
| **Allergies and Intolerances** (Allergier og intolerancer) | Påkrævet | Allergier over for lægemidler, fødevarer og miljø; reaktioner og sværhedsgrad |
| **Problem List** (Problemliste) | Påkrævet | Aktive diagnoser, tilstande og kliniske problemer |
| Immunizations (Vaccinationer) | Anbefalet | Givne vacciner, såsom stivkrampe, hepatitis B, influenza, COVID-19 |
| History of Procedures (Procedurehistorik) | Anbefalet | Større operationer og invasive indgreb |
| Medical Devices (Medicinsk udstyr) | Anbefalet | Implantater og udstyr, såsom pacemakere, stents, proteser |
| Diagnostic Results (Diagnostiske resultater) | Anbefalet | Vigtige laboratoriesvar, billeddiagnostiske rapporter, patologi |
| Vital Signs (Vitale tegn) | Valgfrit | Blodtryk, puls, vægt, højde, BMI |
| History of Past Illness (Tidligere sygdomme) | Valgfrit | Overståede tilstande og væsentlige tidligere problemer |
| Functional Status (Funktionsstatus) | Valgfrit | Handicap og evnen til at udføre dagligdags aktiviteter |
| Plan of Care (Behandlingsplan) | Valgfrit | Behandlingsplaner og behandlingsanbefalinger |
| Social History (Social anamnese) | Valgfrit | Tobak, alkohol og andre relevante livsstilsfaktorer |
| History of Pregnancy (Graviditetshistorik) | Valgfrit | Aktuel graviditetsstatus og graviditetshistorik |
| Advance Directives (Livstestamenter) | Valgfrit | Livstestamenter, præferencer for genoplivning, samtykkeerklæringer |
| Alerts (Advarsler) | Valgfrit | Sikkerhedskritiske advarsler, der ikke passer andre steder (tilføjet i FHIR IPS STU 2) |
| Patient Story (Patientens fortælling) | Valgfrit | Hvad der er vigtigt for patienten: behov, styrker, værdier, bekymringer og præferencer, med patientens egne ord (tilføjet i FHIR IPS STU 2) |

**Det er vigtigt udtrykkeligt at sige "intet".** En tom sektion fortæller ikke en kliniker, om patienten ingen allergier har, eller om ingen har registreret dem. IPS forventer derfor udtrykkelige angivelser som *"ingen kendte allergier"*, *"ingen nuværende medicin"* eller *"oplysninger ikke tilgængelige"*.


## Standarderne bag IPS

IPS er en familie af koordinerede standarder. ISO- og CEN-standarderne definerer, *hvad* en patientoversigt skal indeholde. HL7's implementeringsvejledninger definerer, *hvordan* den kodes.

| Standard | Organ | Rolle |
|---|---|---|
| **EN 17269** | CEN (Den Europæiske Standardiseringsorganisation) | Det abstrakte IPS-datasæt, udgivet i 2019 |
| **ISO 27269** | ISO (Den Internationale Standardiseringsorganisation) | Den internationale version af det abstrakte IPS-datasæt, udgivet i 2021 |
| **CEN/TS 17288** | CEN | Vejledning i at implementere IPS til grænseoverskridende brug |
| **HL7 FHIR IPS Implementation Guide** | HL7 International | Den moderne, API-venlige kodning og det primære implementeringsformat. STU 2 (2.0.x) tilføjede sektionerne Alerts og Patient Story, tillod tomme sektioner, præciserede `$summary` og gik over til SNOMED CT IPS-terminologien [[9]](#ref-9). |
| **HL7 CDA IPS Implementation Guide** | HL7 International | Den XML-dokumentbaserede kodning, udbredt i eksisterende nationale og europæiske infrastrukturer |

Arbejdet koordineres gennem **Joint Initiative Council for Global Health Informatics Standardization (JIC)**. JIC samler ISO, CEN, HL7, SNOMED International, IHE og andre. IPS voksede ud af et EU-USA-samarbejde i 2016 om grænseoverskridende sundhedsdata og støttes nu af regeringer og digitale sundhedsprogrammer verden over.


## Hvordan IPS kodes med HL7 FHIR

I FHIR er en IPS ét enkelt **`Bundle`** af typen `document`:

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

Vigtige tekniske punkter:

- **Hver sektion har en menneskelæsbar fortælling (narrative).** En kliniker kan læse IPS i en almindelig browser, selv uden FHIR-software.
- **Hver sektion har også kodede poster**, som er strukturerede FHIR-ressourcer, som software kan behandle, oversætte og afstemme.
- **Profiler begrænser de grundlæggende FHIR-ressourcer.** For eksempel definerer *Patient (IPS)* og *AllergyIntolerance (IPS)* de mindste data og "must support"-elementerne.
- **Operationen `$summary`** (`GET [base]/Patient/[id]/$summary`) beder en FHIR-server om at generere en IPS for en patient efter behov.
- **IPS kan signeres og er selvstændig.** Et komplet dokument kan gemmes, sendes, signeres og verificeres som én enhed.


## Terminologier

Fælles kodesystemer gør en IPS læsbar på tværs af sprog og lande:

| Terminologi | Bruges til |
|---|---|
| **SNOMED CT** | Problemer, allergier, procedurer, udstyr, kliniske fund. En gratis delmængde, **SNOMED CT IPS Terminology**, er tilgængelig til IPS-brug, selv i ikke-medlemslande. |
| **LOINC** | Dokument- og sektionstyper, laboratorieprøver, vitale tegn |
| **ATC** og andre lægemiddelkodesystemer | Lægemidler og aktive stoffer |
| **UCUM** | Måleenheder |
| **ISO- og HL7-værdisæt** | Lande, sprog, administrative køn, årsager til manglende og ukendte oplysninger |

Fordi posterne er kodede, kan et modtagende system vise en IPS skrevet på portugisisk med engelske etiketter. Den kodede betydning forbliver den samme.


## Hvordan patienter og klinikere bruger en IPS

En IPS kan produceres af en EHR, en national sundhedsjournaltjeneste, en patientportal eller en personlig sundhedsapp. Den kan derefter leveres på flere måder:

- **System til system:** gennem FHIR REST API'er, nationale infrastrukturer eller grænseoverskridende gateways såsom EU's netværk MyHealth@EU.
- **Patientformidlet deling:** patienten har oversigten i en wallet eller sundhedsapp og deler den efter behov.
- **SMART Health Links:** en QR-kode eller URL, der giver en kliniker tidsbegrænset, valgfrit kodeordsbeskyttet adgang til en krypteret IPS. Klinikeren kan åbne den i en almindelig webbrowser.
- **Papir eller PDF:** en udskrevet narrativ gengivelse som reserveløsning, når intet andet virker.

Apps som **CommonHealth** lader patienter samle deres journaler og dele en IPS gennem SMART Health Links.

Et typisk akut scenarie:

1. En rejsende kollapser i udlandet.
2. Den rejsende, eller en ledsager, viser en QR-kode på en telefon.
3. Den akutlæge scanner den og ser den rejsendes medicin, allergier og aktive problemer på få sekunder.
4. Lægen undgår en farlig lægemiddelinteraktion og behandler patienten sikkert.


## Principper og designvalg

- **Sikkerhed først.** Indholdet vælges efter klinisk relevans, ikke fuldstændighed.
- **Globalt som udgangspunkt, lokalt gennem udvidelse.** Lande opretter nationale profiler, såsom EU-, australske eller canadiske varianter, der tilføjer krav uden at bryde den internationale kerne.
- **Menneskelæsbart og maskinbehandlingsbart.** Fortælling og kodede data eksisterer side om side.
- **Frit og åbent.** HL7 IPS-specifikationerne og IPS SNOMED CT-delmængden er frit tilgængelige for at sænke barriererne for indførelse.
- **Privatliv og samtykke.** Adgang styres af lokal lovgivning og patientens samtykke. Mekanismer som SMART Health Links lader patienten bevare kontrollen.


## Sådan bruges IPS

### For patienter

1. **Bed om en.** Spørg din klinik, dit hospital, dit nationale sundhedsportal eller din sundhedsapp, om den kan producere en IPS eller en national patientoversigt baseret på den.
2. **Tjek den.** Læs den, mens du er rask. Meld alt, der er forkert eller mangler, især allergier og medicin.
3. **Hav den med dig.** Gem den i en sundhedsapp eller wallet, som en SMART Health Link-QR-kode, eller som en udskrift blandt dine rejsedokumenter.
4. **Hold den ajour.** Få en ny efter en ny diagnose, ny langtidsmedicin, operation eller et implantat.
5. **Del den med vilje.** Vis den til den kliniker, der behandler dig. Et SMART Health Link kan udløbe og kan kræve et kodeord, så du styrer, hvem der ser den, og hvor længe [[10]](#ref-10).

### For klinikere

1. **Tjek headeren først.** Hvem der har skrevet den, hvornår, og om nogen har verificeret den. En gammel eller uverificeret oversigt kræver mere forsigtighed.
2. **Læs de påkrævede sektioner først:** allergier, medicin og problemer.
3. **Behandl "ingen kendte" anderledes end "ikke registreret".** "Ingen kendte allergier" er en klinisk udtalelse. En tom eller "ukendt" sektion er ikke.
4. **Bekræft kritiske oplysninger** med patienten eller dennes ledsager, når du kan.
5. **Brug de kodede data.** Hvor dit system understøtter det, lader kodede poster oversigten blive vist på dit sprog og kontrolleret mod regler for lægemiddelinteraktioner og allergier.
6. **Antag ikke fuldstændighed.** IPS er et sikkerhedsnet, ikke en fuld sygehistorie.

### For implementere

1. **Vælg specifikationen.** Brug den aktuelle HL7 FHIR IPS Implementation Guide (STU 2) eller dit lands nationale profil af den. For CDA-baserede infrastrukturer brug CDA IPS-vejledningen [[9]](#ref-9) [[11]](#ref-11).
2. **Kortlæg dine data.** Kortlæg lokale data til IPS-profilerne: `Patient`, `AllergyIntolerance`, `MedicationStatement`, `Condition` og så videre. Det meste af arbejdet ligger i denne kortlægning.
3. **Kortlæg din terminologi.** Kortlæg lokale koder til SNOMED CT, LOINC og lægemiddelkodesystemer. SNOMED CT IPS Terminology er gratis at bruge til dette formål [[12]](#ref-12).
4. **Generér dokumentet.** Understøt operationen `$summary`, eller byg `Bundle` og `Composition` selv. Medtag en læsbar fortælling for hver sektion og udtrykkelige angivelser som "ingen kendte" eller "ikke tilgængelig".
5. **Valider det.** Kontrollér hvert genereret dokument med FHIR Validator og et konformitetstestkit, såsom Inferno IPS Test Kit [[13]](#ref-13).
6. **Signér og del det.** Beslut, hvordan dokumenter signeres, gemmes og sendes: en API, et dokumentregister, en grænseoverskridende gateway eller et SMART Health Link.
7. **Brug det sikkert.** Som modtager skal du vise fortællingen, selv når du ikke kan behandle alle kodede poster, holde kilde og forfatter synlige og aldrig stiltiende flette modtagne data ind i den lokale journal.
8. **Test med andre.** Opnå interoperabilitet med andre leverandører og lande ved IHE- og HL7-Connectathons, før du går i drift.

### For regeringer og sundhedsorganisationer

1. **Vedtag en national profil,** der bygger på IPS frem for et separat format, så den nationale oversigt er international som udgangspunkt [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
2. **Fastlæg governance:** hvem der må oprette, opdatere og bekræfte en oversigt, og hvem der står til ansvar for dens rigtighed.
3. **Fastlæg licensering af terminologi:** SNOMED CT-medlemskab eller brug af den gratis IPS-delmængde.
4. **Fastlæg identitet, samtykke og tillid:** hvordan patienter identificeres, hvordan samtykke registreres, og hvilken tillidsramme, såsom MyHealth@EU eller WHO's Global Digital Health Certification Network, der bruges til at verificere dokumenter [[1]](#ref-1) [[14]](#ref-14).
5. **Udgiv det, I har bygget,** i IPS Implementation Registry, så andre kan lære af det [[15]](#ref-15).


## Integration af IPS med sundhedssystemer

En IPS er sjældent et separat system. Den er en visning af data, der allerede findes i EHR'er, sundhedsinformationsudvekslinger, nationale journaler og personlige sundhedsapps.

| Integrationsmønster | Sådan fungerer det | Eksempler |
|---|---|---|
| **Genereret af EHR'en** | EHR'en bygger en IPS ud fra sine egne data efter forespørgsel, ofte gennem FHIR-operationen `$summary`. | EHR-leverandører og FHIR-servere såsom HAPI FHIR, som har et IPS-generatormodul |
| **National eller regional journal** | En national patientoversigtstjeneste gemmer en profil af IPS og gør den tilgængelig for autoriserede behandlere. | Canadas PS-CA, Australiens AU Patient Summary, Schweiz' elektroniske patientjournal med CH IPS [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6) |
| **Grænseoverskridende gateway** | Hvert land driver et nationalt kontaktpunkt. Det omdanner hjemlandets oversigt til det aftalte udvekslingsformat, sender den over grænsen, og modtagerlandet viser den på det lokale sprog. | MyHealth@EU's nationale kontaktpunkter for e-sundhed [[1]](#ref-1) [[2]](#ref-2) |
| **Regionalt udvekslingsnetværk** | Sundhedsministerier udveksler IPS-dokumenter gennem nationale FHIR-servere under en fælles regional vejledning. | RACSEL's IPS-LAC og Pan American Highway for Digital Health (PH4H) i Latinamerika og Caribien [[16]](#ref-16) |
| **Patientformidlet** | Patienten har IPS'en i en app eller wallet og deler den med en QR-kode eller et SMART Health Link. | CommonHealth; WHO's tillidsnetværks IPS-arbejde for pilgrimsrejser [[10]](#ref-10) [[14]](#ref-14) |
| **API-baseret adgang** | Apps henter en IPS for en autoriseret patient via en FHIR-API. | International Patient Access (IPA); amerikanske netværk som Flexpa, der tilføjede IPS-understøttelse under CMS Interoperability Framework [[17]](#ref-17) [[18]](#ref-18) |

Integrationspunkter at planlægge for:

- **Dokumentdeling:** IHE-profiler såsom MHD (FHIR) og XDS (dokumentregistre) gemmer og finder IPS-dokumenter. IHE's IPS-indholdsprofiler tilføjer konformitets- og testregler [[11]](#ref-11).
- **Patientidentitet:** IHE PIXm og PDQm, eller en national identifikator, matcher patienten på tværs af systemer.
- **Eksisterende dokumenter:** mange systemer producerer allerede CDA, C-CDA eller nationale oversigter. At kortlægge disse til IPS er normalt lettere end at starte forfra, men tjek for forskelle i kardinalitet, værdisæt og kodesystemer.
- **Nationale profiler:** en national kerne, såsom US Core, AU Core, CH Core eller JP Core, kan afvige fra IPS. Nationale patientoversigtsprofiler afstemmer de to [[5]](#ref-5) [[6]](#ref-6) [[19]](#ref-19).
- **Oversættelse og visning:** modtagere bør gengive fortællingen og oversætte kodede poster ved hjælp af kodernes visningsnavne på modtagerens sprog.
- **Sikkerhed:** brug TLS, signerede dokumenter hvor det kræves, auditlogning (for eksempel IHE ATNA eller BALP) og adgangskontrol knyttet til samtykke.


## Nuværende udbredelse

IPS er gået fra pilotprojekter til nationale og regionale programmer. Status ændrer sig hurtigt, så tjek de linkede kilder for den seneste situation.

- **IPS Implementation Registry.** IPS-fællesskabet vedligeholder et offentligt register over implementeringer. I midten af 2026 listede det 34 poster, fra Argentinas behandlerformidlede IPS-LAC-projekt til Vietnams Better Health Program [[15]](#ref-15).
- **FHIR-økosystemet.** I State of FHIR-undersøgelsen 2025 fra HL7 International og Firely sagde 42 respondenter, at IPS ligger til grund for deres nationale FHIR-specifikationer, flere end for nogen anden international vejledning [[20]](#ref-20).
- **Forskning.** En undersøgelse fra 2025 af indførelsen af IPS interviewede interessenter, der pegede på bedre behandlingskvalitet og patientsikkerhed som de vigtigste fordele [[21]](#ref-21).

| Land eller region | Status |
|---|---|
| **Den Europæiske Union og EØS** | MyHealth@EU udveksler patientoversigter og e-recepter mellem lande. En præsentation fra Europa-Kommissionen i 2026 rapporterede, at 17 medlemsstater plus Norge er i drift, og at de fleste af de øvrige planlægger at tilslutte sig [[2]](#ref-2) [[22]](#ref-22). EHDS-forordningen gør udveksling af patientoversigter obligatorisk senest i 2029 [[23]](#ref-23). |
| **Canada** | Den pan-canadiske patientoversigt (PS-CA), godkendt af Canada Health Infoway i oktober 2022, bygger på IPS med canadiske tilpasninger [[4]](#ref-4). |
| **Australien** | AU Patient Summary, bygget på IPS og AU Core, udvikles af HL7 Australia gennem Sparked-programmet [[5]](#ref-5) [[24]](#ref-24). |
| **Schweiz** | CH IPS 2.0.0 (forsøgsbrug) fra HL7 Switzerland bygger på IPS og CH Core. En separat profil tilføjer det, den schweiziske elektroniske patientjournal har brug for [[6]](#ref-6). |
| **USA** | Intet føderalt krav om IPS. USA bruger US Core og USCDI. Føderale myndigheder deltager i IPS-arbejdet internationalt, og nogle netværk understøtter IPS frivilligt [[18]](#ref-18). |
| **Latinamerika og Caribien** | RACSEL's sundhedsministerier bruger den regionale IPS-LAC-vejledning. I 2023 udvekslede 16 lande IPS-LAC-dokumenter ved en connectathon i São Paulo [[16]](#ref-16). |
| **Japan** | Forskere har bygget og valideret en IPS-baseret patientoversigtsapplikation til almindelige japanske anvendelsestilfælde ved hjælp af JP Core [[19]](#ref-19). |
| **Taiwan og Filippinerne** | En implementeringsrapport fra 2025 beskriver en grænseoverskridende personlig sundhedsjournal, der bruger FHIR og er afstemt med IPS [[25]](#ref-25). |
| **G7** | I 2021 forpligtede G7-sundhedsministrene sig til at arbejde hen imod IPS og offentliggjorde en IPS-køreplan [[26]](#ref-26). |
| **WHO** | WHO's Global Digital Health Certification Network omfatter IPS-baserede tillidsdomæner, såsom verificerbar IPS til pilgrimsrejser [[14]](#ref-14). |


## Love, regler og politik efter land og region

IPS er en standard, ikke en lov. Love afgør, om et land skal udveksle patientoversigter, i hvilket format og under hvilke regler for privatlivets fred. Dette er en sammenfatning, ikke juridisk rådgivning. Tjek altid lovens aktuelle ordlyd.

| Jurisdiktion | Lov eller politik | Hvad det betyder for IPS |
|---|---|---|
| **Den Europæiske Union** | **Forordningen om det europæiske sundhedsdataområde (EHDS), (EU) 2025/327.** Offentliggjort 5. marts 2025; trådt i kraft 26. marts 2025 [[23]](#ref-23) [[27]](#ref-27). | Patientoversigter er en "prioriteret kategori". Udveksling i det europæiske udvekslingsformat for elektroniske patientjournaler skal fungere i alle medlemsstater senest i 2029. Medicinske billeder, prøveresultater og udskrivningsrapporter følger senest i 2031 [[28]](#ref-28). Formatet for patientoversigter bygger på HL7 IPS. |
| **Den Europæiske Union** | **Direktiv 2011/24/EU** om patientrettigheder ved grænseoverskridende sundhedsydelser [[29]](#ref-29). | Oprettede e-sundhedsnetværket, som aftalte retningslinjerne for patientoversigter bag MyHealth@EU. |
| **Den Europæiske Union** | **Generel forordning om databeskyttelse (GDPR), (EU) 2016/679** [[30]](#ref-30). | Sundhedsdata er en særlig kategori. Enhver IPS-udveksling kræver et lovligt grundlag og passende garantier. |
| **USA** | **21st Century Cures Act og reglerne mod informationsblokering** [[31]](#ref-31); den frivillige **CMS Interoperability Framework** (2025) [[17]](#ref-17). | Ingen lov kræver IPS. Love kræver adgang til og udveksling af elektroniske sundhedsoplysninger ved brug af US Core og USCDI. Understøttelse af IPS er frivillig. |
| **Canada** | Provinsielle og territoriale love om sundhedsoplysninger. Den føderale **Connected Care for Canadians Act** (Bill C-72) blev fremsat i 2024, men blev ikke vedtaget, før parlamentet blev udsat i 2025. | PS-CA er en pan-canadisk specifikation, ikke et lovkrav. Indførelsen ledes af provinserne og territorierne sammen med Canada Health Infoway [[4]](#ref-4). |
| **Storbritannien** | **Data (Use and Access) Act 2025** [[32]](#ref-32). | Indeholder beføjelser til at fastsætte informationsstandarder for it inden for sundhed og voksensocialområdet. Storbritannien var vært for G7's IPS-tilsagn i 2021 [[26]](#ref-26). |
| **Australien** | **My Health Records Act 2012** og ændringerne om "deling som standard" fra 2025. | AU Patient Summary er en national specifikation udviklet gennem Sparked [[5]](#ref-5) [[24]](#ref-24). |
| **Schweiz** | **Forbundslov af 19. juni 2015 om den elektroniske patientjournal (EPRA, SR 816.1)**, i kraft siden 15. april 2017 [[33]](#ref-33). | CH IPS omfatter en profil for dokumenter i den schweiziske elektroniske patientjournal [[6]](#ref-6). |
| **Latinamerika og Caribien** | Regionale aftaler gennem RACSEL og PH4H, med støtte fra Den Interamerikanske Udviklingsbank til en regional retlig ramme [[16]](#ref-16). | IPS-LAC er det aftalte regionale format til grænseoverskridende udveksling. |
| **G7** | **Sundhedsministrenes kommuniké**, Oxford, juni 2021, og **G7 IPS Roadmap**, december 2021 [[26]](#ref-26) [[34]](#ref-34). | En politisk forpligtelse til at arbejde hen imod IPS og patientadgang, ikke bindende lov. |


## Fordele og ulemper

| Fordele | Ulemper |
|---|---|
| **Sikrere uplanlagt behandling.** Klinikere ser allergier, medicin og problemer på få sekunder. | **Kun så god som sin kilde.** Forældede eller forkerte kildedata giver en forældet eller forkert oversigt. |
| **Ét format, verden over.** Én implementering dækker nationale og grænseoverskridende behov. | **National variation.** Nationale profiler tilføjer regler, så en "gyldig IPS" i ét land kan kræve arbejde for at blive accepteret i et andet. |
| **Bygget på åbne, modne standarder:** ISO, CEN, HL7 FHIR og CDA, SNOMED CT og LOINC. | **Terminologibyrde.** Kortlægning af lokale koder til SNOMED CT og LOINC er hårdt arbejde, og fuld SNOMED CT kræver en licens ud over den gratis IPS-delmængde. |
| **Læsbar og beregnelig.** Fortælling til mennesker, kodede data til software og oversættelse. | **Fortælling og kodede data kan være uenige,** hvis generatoren er skødesløs, og modtagere kan stole på den forkerte. |
| **Styrkelse af patienten.** Patienter kan have og dele deres egen oversigt. | **Risiko for privatliv og samtykke.** En bærbar oversigt er følsom, og love og samtykkemodeller varierer fra land til land. |
| **Gratis specifikationer** og gratis IPS-terminologi sænker omkostningerne [[12]](#ref-12). | **Versionsomskiftning.** STU 1, STU 1.1 og STU 2 eksisterer side om side, og EHDS-formatet henviser til en tidligere version [[28]](#ref-28). |
| **Genanvendelig** til vaccinationscertifikater, forskning og registre [[7]](#ref-7) [[8]](#ref-8). | **Bevidst minimal.** Ikke en erstatning for fulde journaler eller specialedokumenter, og huller i sekundær brug kræver udvidelser [[7]](#ref-7). |
| **Stærk opbakning** fra regeringer, EU, G7, WHO og standardiseringsorganer. | **Ujævn udbredelse.** Mange lande og leverandører er stadig i pilotfasen, og patienternes kendskab er lavt. |


## Planer og fremtidige retninger

- **EU, 2029:** udveksling af patientoversigter og e-recepter er i drift i alle EU's medlemsstater under EHDS [[23]](#ref-23) [[28]](#ref-28).
- **EU, 2031:** medicinske billeder, laboratoriesvar og udskrivningsrapporter tilføjes det europæiske udvekslingsformat for elektroniske patientjournaler [[28]](#ref-28).
- **Udvidelse af MyHealth@EU:** flere lande tilslutter sig, og nye tjenester til laboratoriesvar, udskrivningsrapporter og medicinske billeder [[2]](#ref-2) [[22]](#ref-22).
- **Indførelse af FHIR IPS STU 2:** implementere går over til sektionerne Alerts og Patient Story, udtrykkeligt tomme sektioner og SNOMED CT IPS-terminologi [[9]](#ref-9).
- **Australien:** udgivelse af AU Patient Summary Release 1, planlagt til 2026 [[24]](#ref-24).
- **IPS Best Practices Project:** en fælles indsats for at dokumentere erfaringer, med arbejdet startende i 2026.
- **WHO's tillidsnetværk:** flere IPS-baserede tillidsdomæner til verificerbare, bærbare sundhedsdokumenter [[14]](#ref-14).
- **SMART Health Links:** standardiseret gennem HL7, til patientkontrolleret deling [[10]](#ref-10).
- **Latinamerika og Caribien:** bredere IPS-LAC-udveksling gennem PH4H [[16]](#ref-16).
- **Forskning og sekundær brug:** arbejde på at udvide patientoversigter til klinisk forskning og AI, mens kernen holdes minimal [[7]](#ref-7).


## Ordliste

| Begreb | Betydning |
|---|---|
| **IPS** | International Patient Summary |
| **FHIR** | Fast Healthcare Interoperability Resources, HL7's moderne API-baserede standard |
| **CDA** | Clinical Document Architecture, HL7's XML-dokumentstandard |
| **IG** | Implementation Guide (implementeringsvejledning), et sæt profiler og regler til at anvende en standard |
| **Profile** | En begrænset version af en FHIR-ressource til en bestemt brug |
| **SNOMED CT** | Systematized Nomenclature of Medicine – Clinical Terms |
| **LOINC** | Logical Observation Identifiers Names and Codes |
| **SMART Health Links** | En standard til deling af sundhedsdata via et link eller en QR-kode |
| **JIC** | Joint Initiative Council for Global Health Informatics Standardization |


## Læs mere

- HL7 FHIR IPS Implementation Guide: <https://hl7.org/fhir/uv/ips/>
- IPS continuous build: <https://build.fhir.org/ig/HL7/fhir-ips/>
- International Patient Summary project site: <https://international-patient-summary.net/>
- ISO 27269 (Health informatics — International patient summary): <https://www.iso.org/standard/79491.html>
- SNOMED CT IPS Terminology: <https://www.snomed.org/international-patient-summary-terminology>
- SMART Health Links: <https://docs.smarthealthit.org/smart-health-links/>


## Ressourcer

Disse links dækker kilder, specifikationer, software, projekter, videoer, bøger og forskning om IPS. De fleste blev kontrolleret, da denne side blev skrevet. Nogle udgiveres websteder blokerer automatiske kontroller, og de er markeret med *(ikke kontrolleret)*.

### Officielle specifikationer og standarder

- [HL7 FHIR IPS Implementation Guide, current published version](https://hl7.org/fhir/uv/ips/) er den autoritative FHIR-specifikation.
- [HL7 FHIR IPS Implementation Guide, STU 2](https://hl7.org/fhir/uv/ips/STU2/)
- [HL7 FHIR IPS Implementation Guide, STU 1.1](https://hl7.org/fhir/uv/ips/STU1.1/)
- [HL7 FHIR IPS publication history](https://www.hl7.org/fhir/uv/ips/history.html) viser alle udgivne versioner.
- [HL7 FHIR IPS continuous build](https://build.fhir.org/ig/HL7/fhir-ips/) er det seneste, endnu ikke afstemte arbejde i gang.
- [Structure of the International Patient Summary](https://hl7.org/fhir/uv/ips/en/Structure-of-the-International-Patient-Summary.html) forklarer sektionerne og profilerne.
- [IPS design conventions](https://build.fhir.org/ig/HL7/fhir-ips/en/Design-Conventions.html) dækker must-support, manglende data og fortælling.
- [IPS generation and data inclusion](https://build.fhir.org/ig/HL7/fhir-ips/en/Generation-and-Data-Inclusion.html) dækker `$summary` og hvordan indhold udvælges.
- [HL7 CDA IPS Implementation Guide, continuous build](https://build.fhir.org/ig/HL7/CDA-IPS/)
- [HL7 CDA IPS product brief](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=483)
- [ISO 27269, Health informatics — International patient summary](https://www.iso.org/standard/79491.html) *(ikke kontrolleret)*
- [ISO/TC 215 Health informatics committee](https://www.iso.org/committee/54960.html) *(ikke kontrolleret)*
- [IHE FHIR International Patient Summary profile (FIIO)](https://profiles.ihe.net/PCC/FIIO/volume-1.html)
- [IHE PCC International Patient Summary supplement, 2020 (PDF)](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS_Rev1-0_PC_2020-03-17.pdf)
- [HL7 SMART Health Cards and Links Implementation Guide](https://hl7.org/fhir/uv/smart-health-cards-and-links/)
- [SMART Health Links documentation](https://docs.smarthealthit.org/smart-health-links/)
- [HL7 FHIR International Patient Access (IPA)](https://hl7.org/fhir/uv/ipa/) er en søsterspecifikation til patienters API-adgang.
- [HL7 FHIR R4 base specification](https://hl7.org/fhir/R4/), som IPS bygger på.

### Kildekodelagre

- [HL7/fhir-ips](https://github.com/HL7/fhir-ips) rummer kilden til FHIR IPS IG i FHIR Shorthand.
- [HL7/cda-ips](https://github.com/HL7/cda-ips) rummer kilden til CDA IPS IG.
- [hl7-eu/eps](https://github.com/hl7-eu/eps) rummer kilden til HL7 Europe Patient Summary.
- [hl7ch/ch-ips](https://github.com/hl7ch/ch-ips) rummer den schweiziske IPS, med en viewer og generator under udvikling.
- [GitHub topic: international-patient-summary](https://github.com/topics/international-patient-summary) viser fællesskabets lagre.

### Nationale og regionale tilpasninger

- [HL7 Europe Patient Summary (EPS), continuous build](https://build.fhir.org/ig/hl7-eu/eps/)
- [AU Patient Summary (Australia), continuous build](https://build.fhir.org/ig/hl7au/au-fhir-ps/)
- [Trillium II IPS structure (HL7 Europe)](https://hl7.eu/fhir/build/trillium2/site/ipsStructure.html) stammer fra EU-USA-projektet, der var med til at starte IPS.
- [eHealth Suisse](https://www.ehealthsuisse.ch/) er Schweiz' kompetencecenter for digital sundhed og dets indførelse af IPS.
- [MyHealth@EU, cross-border digital health services](https://health.ec.europa.eu/ehealth-digital-health-and-care/electronic-cross-border-health-services_en)
- [Xt-EHR Joint Action](https://www.xt-ehr.eu/) forbereder formaterne til det europæiske sundhedsdataområde, herunder patientoversigten.

### Software og værktøjer

- [IPS Viewer](https://www.ipsviewer.com) ([source: jddamore/IPSviewer](https://github.com/jddamore/IPSviewer)) er en open source, browserbaseret IPS-viewer.
- [uwcirg/shl-ips-viewer](https://github.com/uwcirg/shl-ips-viewer) viser en IPS delt gennem et SMART Health Link.
- [smart-on-fhir/smart-health-links](https://github.com/smart-on-fhir/smart-health-links) er referenceimplementeringen af SMART Health Links.
- [HAPI FHIR IPS generator](https://hapifhir.io/hapi-fhir/docs/server_ips/introduction.html) ([source: hapifhir/hapi-fhir](https://github.com/hapifhir/hapi-fhir)) er et open source Java-servermodul, der implementerer `$summary`.
- [HAPI FHIR JPA server IPS documentation](https://hapifhir.io/hapi-fhir/docs/server_jpa/ips.html)
- [Inferno IPS Test Kit](https://inferno.healthit.gov/test-kits/ips) ([source: inferno-framework/ips-test-kit](https://github.com/inferno-framework/ips-test-kit)) er et open source konformitetstestkit.
- [FHIR Validator](https://validator.fhir.org/) validerer IPS-bundles mod IG-profilerne.
- [Simplifier: hl7.fhir.uv.ips package](https://simplifier.net/packages/hl7.fhir.uv.ips) har pakken, profilerne og eksempler.
- [FHIR package registry](https://registry.fhir.org/)
- [FHIR Shorthand (FSH) School](https://fshschool.org/) underviser i det sprog, IPS IG er skrevet i.
- [CommonHealth](https://www.commonhealth.org/) er en patientapp, der genererer en IPS og deler den gennem SMART Health Links.
- [WHO SMART Trust](https://github.com/WorldHealthOrganization/smart-trust) er tillidsrammen for WHO's Global Digital Health Certification Network.

### Organisationer og projekter

- [International Patient Summary project site](https://international-patient-summary.net/) har nyheder, rapporter om indførelse og undervisning.
- [IPS for health IT developers](https://international-patient-summary.net/health-it-developer/)
- [HL7 International](https://www.hl7.org/)
- [IHE International](https://www.ihe.net/)
- [SNOMED International](https://www.snomed.org/)
- [SNOMED CT IPS Terminology](https://www.snomed.org/international-patient-summary-terminology) er en gratis delmængde til IPS-brug.
- [LOINC](https://loinc.org/) *(ikke kontrolleret)*
- [Joint Initiative Council for Global Health Informatics Standardization (JIC)](http://www.jointinitiativecouncil.org/)
- [Global Digital Health Partnership (GDHP)](https://gdhp.health/)
- [WHO SMART Guidelines](https://smart.who.int/)
- [WHO Global Digital Health Certification Network](https://www.who.int/initiatives/global-digital-health-certification-network)

### Fællesskab og begivenheder

- [chat.fhir.org](https://chat.fhir.org/) er FHIR-fællesskabets chat, som har en aktiv IPS-strøm.
- [HL7 FHIR Connectathons](https://www.hl7.org/events/fhir-connectathon/)
- [IHE Connectathons](https://www.ihe.net/participate/connectathon/)

### Videoer

- [HIMSS20: IPS for computable care guidelines in 200 seconds or less (IHE International, YouTube)](https://www.youtube.com/watch?v=xjEzGM8kBPw)
- [IHE International YouTube channel](https://www.youtube.com/@IHEIntl) har Connectathon-paneler og IPS-sessioner.
- [IPS project site news](https://international-patient-summary.net/) linker til mange optagede webinarer, blandt andet:
  - IPS-panelet ved IHE North America Connectathon, 2024
  - IPS-sessionen ved FHIR DevDays 2023
  - Grahame Grieve om IPS og IPA, IHE Connectathon Montreux 2022
  - hovedtalen ved SNOMED CT Expo 2022
  - Matthew Rahn om IPS i GDHP
  - HL7-webinaret "Global Passport" om grænseoverskridende brug
- [YouTube search: International Patient Summary](https://www.youtube.com/results?search_query=international+patient+summary)

### Bøger

- Tim Benson og Grahame Grieve, [*Principles of Health Interoperability: FHIR, HL7 and SNOMED CT*](https://link.springer.com/book/10.1007/978-3-030-56883-2), 4. udgave, Springer, 2020. Den dækker FHIR, kliniske oversigtsressourcer og terminologi.

### Forskningsartikler og artikler

- Laleci Erturkmen G. B., Sinaci A. A., Namli T., Boonstra M., et al., "[An assessment of the European Patient Summary for clinical research: a case study in cardiology](https://doi.org/10.3389/fmed.2024.1481551)", *Frontiers in Medicine*, 2024.
- Lee H., Huang J., Huang S., Chen W., et al., "[Implementing a Cross-Border Next-Generation Personal Health Record in the Philippines and Taiwan: An Implementation Case Report Using Health Level 7 International Fast Healthcare Interoperability Resources](https://doi.org/10.2196/56272)", *JMIR Formative Research*, 2025.
- Song C., Nakayama M., "[Implementation of a Patient Summary Web Application According to the International Patient Summary and Validation in Common Use Cases in Japan](https://doi.org/10.1007/s10916-023-01993-6)", *Journal of Medical Systems*, 2023.
- Schippers D., Spil T., Stegwee R., Folmer E., Donnelly S., "[The adoption and diffusion of the International Patient Summary](https://doi.org/10.24251/hicss.2025.425)", *Proceedings of the 58th Hawaii International Conference on System Sciences (HICSS)*, 2025.
- da Silva Carvalho N., Papadimitriou A., Stegwee R., Gille H., et al., "[Accelerating European electronic health record exchange format (EEHRxF) implementation across Europe: a policy perspective](https://doi.org/10.3389/fmed.2025.1648170)", *Frontiers in Medicine*, 2025.
- Kay S., Cangioli G., Nusbaum M., "[The International Patient Summary and the extensibility requirement](https://international-patient-summary.net/the-international-patient-summary-and-the-extensibility-requirement/)", *Studies in Health Technology and Informatics* (pHealth), 2020.
- D'Amore J., Cangioli G., Hausam R., "[Advancing the International Patient Summary](https://international-patient-summary.net/advancing-the-international-patient-summary/)"
- "[Towards the Austrian Patient Summary](https://international-patient-summary.net/towards-the-austrian-patient-summary/)", *Studies in Health Technology and Informatics* (dHealth).
- "[Revival of the International Patient Summary (IPS)](https://smiledigitalhealth.com/our-blog/revival-of-the-international-patient-summary-ips)", Smile Digital Health blog.
- [PubMed search: "international patient summary"](https://pubmed.ncbi.nlm.nih.gov/?term=%22international+patient+summary%22) til peer-reviewet litteratur.


## References

Nummererede henvisninger i teksten, såsom [1], linker til den tilsvarende post nedenfor. Linkene blev kontrolleret i november 2026. Love, udbredelsestal og versioner ændrer sig, så tjek kilden for den aktuelle situation.

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

Disse kilder er ikke citeret ovenfor, men er de primære referencer for selve standarden.

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
