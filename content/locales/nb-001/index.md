# International Patient Summary (IPS)

**International Patient Summary (IPS)** er en verdensomspennende standard for et kort elektronisk utdrag av en pasientjournal. Den inneholder de grunnleggende kliniske opplysningene en kliniker trenger for å behandle en pasient trygt. Den er utformet for å være:

- **Minimal og ikke uttømmende.** Den er et lite, kuratert utvalg av en journal, ikke hele journalen.
- **Uavhengig av fagfelt.** Alle klinikere kan bruke den, i alle disipliner.
- **Uavhengig av tilstand.** Den er ikke knyttet til én bestemt sykdom eller pasientforløp.
- **Mulig å implementere og internasjonal.** Den bygger på globale standarder og terminologier, slik at den kan brukes på tvers av land, språk og IT-systemer.

Kort sagt svarer IPS på ett spørsmål for en kliniker som aldri har møtt pasienten: *«Hva må jeg vite akkurat nå for å ta trygg hånd om denne personen?»*


## Hvorfor IPS finnes

Helseinformasjon er vanligvis låst inne i en lokal elektronisk pasientjournal (EPJ), et nasjonalt system eller en leverandørs produkt. Når en pasient søker helsehjelp et annet sted, for eksempel på et annet sykehus, i en annen region eller i et annet land, har den behandlende klinikeren ofte ingen tilgang til denne historikken. IPS gir alle ett felles, portabelt sammendragsformat.

### Viktigste bruksområder

| Bruksområde | Beskrivelse |
|---|---|
| **Uplanlagt og akutt helsehjelp** | En pasient blir syk eller skadet langt hjemmefra, og lokale klinikere får ikke tilgang til pasientens EPJ hjemme. Dette er det opprinnelige hovedbruksområdet. |
| **Grenseoverskridende helsehjelp** | Reisende, migranter, grensearbeidere og flyktninger har med seg et sammendrag som klinikere i utlandet kan lese. |
| **Planlagt helsehjelp og overganger** | Henvisninger, spesialistkonsultasjoner, innleggelser, utskrivninger og overføringer mellom tjenesteytere. |
| **Medisinsk turisme og mobilitet** | Pasienter som velger å motta helsehjelp i en annen jurisdiksjon. |
| **Myndiggjøring av pasienten** | Pasienter har, viser og deler sitt eget sammendrag fra en mobilapp, en portal eller en utskrift. |


## Når bør IPS brukes

Bruk IPS når noen som ikke kjenner pasienten raskt trenger et pålitelig øyeblikksbilde, og når avsender og mottaker ikke deler et IT-system.

### Gode bruksområder

- **Akutt og uplanlagt helsehjelp**, særlig borte fra hjemmet eller over en grense. Dette er bruken IPS ble utformet for.
- **Grenseoverskridende utveksling mellom nasjonale systemer**, for eksempel EUs tjeneste MyHealth@EU [[1]](#ref-1) [[2]](#ref-2).
- **Sammendrag som pasienten selv har**, og som reisende, migranter, flyktninger, pilegrimer eller personer med sammensatte tilstander har med seg på mobil eller på papir [[3]](#ref-3).
- **Et nasjonalt eller regionalt pasientsammendrag.** Mange land lager sitt eget sammendrag som en profil av IPS, slik at det også kan utveksles internasjonalt [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
- **Et felles utgangspunkt for overganger i behandlingen,** som henvisninger, innleggelser og utskrivninger, når et rikere spesialisert dokument ikke er tilgjengelig.
- **Et utgangspunkt for andre datasett,** som vaksinasjonsbevis, forskningsdata eller registre som trenger de samme kjerneopplysningene [[7]](#ref-7) [[8]](#ref-8).

### Dårlige bruksområder

- **Hele pasientjournalen.** IPS er bevisst minimal. Bruk en fullstendig journaleksport eller et spesialisert dokument når detaljer er viktige.
- **Fagspesifikke dokumenter,** som et behandlingssammendrag i onkologi, en svangerskapsjournal eller en detaljert epikrise. Disse har egne standarder, som kan inkludere eller vise til IPS-innhold.
- **Kliniske arbeidsflyter i sanntid innenfor én organisasjon.** Inne i én enkelt EPJ bør du spørre mot de levende dataene i stedet for et sammendrag som øyeblikksbilde.
- **Juridiske, økonomiske eller forsikringsmessige journaler.** IPS er et klinisk sammendrag, ikke en administrativ journal eller et refusjonskrav.
- **Beslutninger som krever garantert fullstendighet.** Et IPS er bare så fullstendig og oppdatert som kilden og forfatteren. Bekreft alltid kritiske opplysninger med pasienten når det er mulig.


## Hva et IPS inneholder

Et IPS-dokument har to lag:

1. **En overskrift som viser hvem, hva og når:**
   - **Pasient:** identitet, demografi og kontaktopplysninger.
   - **Forfatter:** personen, organisasjonen eller systemet som utarbeidet sammendraget.
   - **Forvalter:** organisasjonen som har ansvaret for å vedlikeholde det.
   - **Bekrefter:** hvem som har verifisert det, om noen.
   - **Dato og klokkeslett:** når det ble opprettet.

2. **En klinisk del organisert i seksjoner.** Seksjoner er påkrevde, anbefalte eller valgfrie.

| Seksjon | Status | Typisk innhold |
|---|---|---|
| **Medication Summary** (legemiddelsammendrag) | Påkrevd | Nåværende og relevante tidligere legemidler, resepter, dosering |
| **Allergies and Intolerances** (allergier og intoleranser) | Påkrevd | Allergier mot legemidler, mat og omgivelser; reaksjoner og alvorlighetsgrad |
| **Problem List** (problemliste) | Påkrevd | Aktive diagnoser, tilstander og kliniske problemer |
| Immunizations (vaksinasjoner) | Anbefalt | Vaksiner som er gitt, for eksempel stivkrampe, hepatitt B, influensa, covid-19 |
| History of Procedures (tidligere inngrep) | Anbefalt | Større operasjoner og invasive inngrep |
| Medical Devices (medisinsk utstyr) | Anbefalt | Implantater og utstyr, for eksempel pacemakere, stenter, proteser |
| Diagnostic Results (diagnostiske resultater) | Anbefalt | Viktige laboratorieresultater, bildediagnostikk, patologi |
| Vital Signs (vitale tegn) | Valgfritt | Blodtrykk, hjertefrekvens, vekt, høyde, KMI |
| History of Past Illness (tidligere sykdommer) | Valgfritt | Tilstander som er over, og betydelige tidligere problemer |
| Functional Status (funksjonsnivå) | Valgfritt | Funksjonsnedsettelser og evnen til å utføre daglige aktiviteter |
| Plan of Care (behandlingsplan) | Valgfritt | Behandlingsplaner og anbefalinger om behandling |
| Social History (sosial anamnese) | Valgfritt | Tobakk, alkohol og andre relevante livsstilsfaktorer |
| History of Pregnancy (svangerskapshistorie) | Valgfritt | Nåværende svangerskapsstatus og svangerskapshistorie |
| Advance Directives (forhåndsdirektiver) | Valgfritt | Livstestament, preferanser om gjenoppliving, samtykkeerklæringer |
| Alerts (varsler) | Valgfritt | Sikkerhetskritiske advarsler som ikke passer andre steder (lagt til i FHIR IPS STU 2) |
| Patient Story (pasientens historie) | Valgfritt | Det som betyr noe for pasienten: behov, styrker, verdier, bekymringer og preferanser, med pasientens egne ord (lagt til i FHIR IPS STU 2) |

**Det er viktig å si «ingenting» eksplisitt.** En tom seksjon forteller ikke en kliniker om pasienten ikke har allergier, eller om ingen har registrert dem. IPS forventer derfor eksplisitte utsagn som *«ingen kjente allergier»*, *«ingen nåværende legemidler»* eller *«informasjon ikke tilgjengelig»*.


## Standardene bak IPS

IPS er en familie av samordnede standarder. ISO- og CEN-standardene definerer *hva* et pasientsammendrag må inneholde. HL7-implementeringsguidene definerer *hvordan* det skal kodes.

| Standard | Organ | Rolle |
|---|---|---|
| **EN 17269** | CEN (Den europeiske standardiseringskomiteen) | Det abstrakte IPS-datasettet, publisert i 2019 |
| **ISO 27269** | ISO (Den internasjonale standardiseringsorganisasjonen) | Den internasjonale versjonen av det abstrakte IPS-datasettet, publisert i 2021 |
| **CEN/TS 17288** | CEN | Veiledning om implementering av IPS for grenseoverskridende bruk |
| **HL7 FHIR IPS Implementation Guide** | HL7 International | Den moderne, API-vennlige kodingen og det primære implementeringsformatet. STU 2 (2.0.x) la til seksjonene Alerts og Patient Story, tillot tomme seksjoner, presiserte `$summary` og gikk over til SNOMED CT IPS-terminologien [[9]](#ref-9). |
| **HL7 CDA IPS Implementation Guide** | HL7 International | Den XML-baserte dokumentkodingen, vanlig i eksisterende nasjonale og europeiske infrastrukturer |

Arbeidet koordineres gjennom **Joint Initiative Council for Global Health Informatics Standardization (JIC)**. JIC samler ISO, CEN, HL7, SNOMED International, IHE og andre. IPS vokste ut av et EU–USA-samarbeid i 2016 om grenseoverskridende helsedata og støttes nå av myndigheter og digitale helseprogrammer over hele verden.


## Hvordan IPS kodes med HL7 FHIR

I FHIR er et IPS en enkelt **`Bundle`** av typen `document`:

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

Viktige tekniske punkter:

- **Hver seksjon har en lesbar fortelling.** En kliniker kan lese IPS i en vanlig nettleser, selv uten FHIR-programvare.
- **Hver seksjon har også kodede oppføringer**, som er strukturerte FHIR-ressurser som programvare kan behandle, oversette og avstemme.
- **Profiler begrenser de grunnleggende FHIR-ressursene.** For eksempel definerer *Patient (IPS)* og *AllergyIntolerance (IPS)* minimumsdataene og elementene som «må støttes».
- **Operasjonen `$summary`** (`GET [base]/Patient/[id]/$summary`) ber en FHIR-server om å generere et IPS for en pasient ved behov.
- **IPS kan signeres og er selvstendig.** Et fullstendig dokument kan lagres, sendes, signeres og verifiseres som én enhet.


## Terminologier

Felles kodesystemer gjør et IPS lesbart på tvers av språk og land:

| Terminologi | Brukes til |
|---|---|
| **SNOMED CT** | Problemer, allergier, inngrep, utstyr, kliniske funn. Et gratis delsett, **SNOMED CT IPS Terminology**, er tilgjengelig for IPS-bruk, også i land som ikke er medlemmer. |
| **LOINC** | Dokument- og seksjonstyper, laboratorieprøver, vitale tegn |
| **ATC** og andre kodesystemer for legemidler | Legemidler og virkestoffer |
| **UCUM** | Måleenheter |
| **ISO- og HL7-verdisett** | Land, språk, administrative kjønn, årsaker til manglende og ukjente opplysninger |

Fordi oppføringene er kodet, kan et mottakende system vise et IPS skrevet på portugisisk med engelske betegnelser. Den kodede betydningen forblir den samme.


## Hvordan pasienter og klinikere bruker et IPS

Et IPS kan produseres av en EPJ, en nasjonal helsejournaltjeneste, en pasientportal eller en personlig helseapp. Det kan deretter leveres på flere måter:

- **System til system:** gjennom FHIR REST-API-er, nasjonale infrastrukturer eller grenseoverskridende portaler som EUs MyHealth@EU-nettverk.
- **Deling formidlet av pasienten:** pasienten har sammendraget i en lommebok eller helseapp og deler det ved behov.
- **SMART Health Links:** en QR-kode eller URL som gir en kliniker tidsbegrenset, eventuelt passordbeskyttet tilgang til et kryptert IPS. Klinikeren kan åpne det i en vanlig nettleser.
- **Papir eller PDF:** en utskrevet fortellende gjengivelse som reserve når ingenting annet fungerer.

Apper som **CommonHealth** lar pasienter samle journalene sine og dele et IPS gjennom SMART Health Links.

Et typisk nødscenario:

1. En reisende kollapser i utlandet.
2. Den reisende, eller en reisefølge, viser en QR-kode fra en mobil.
3. Legen på akuttmottaket skanner den og ser den reisendes legemidler, allergier og aktive problemer i løpet av sekunder.
4. Legen unngår en farlig legemiddelinteraksjon og behandler pasienten trygt.


## Prinsipper og designvalg

- **Sikkerhet først.** Innholdet velges ut fra klinisk relevans, ikke fullstendighet.
- **Globalt som standard, lokalt gjennom utvidelser.** Land lager nasjonale profiler, som EU-, australske eller kanadiske varianter, som legger til krav uten å bryte den internasjonale kjernen.
- **Lesbart for mennesker og maskinbehandlebart.** Fortelling og kodede data sameksisterer.
- **Gratis og åpent.** HL7 IPS-spesifikasjonene og IPS-delsettet av SNOMED CT er fritt tilgjengelige for å senke terskelen for å ta dem i bruk.
- **Personvern og samtykke.** Tilgang styres av lokal lovgivning og pasientens samtykke. Mekanismer som SMART Health Links holder pasienten i kontroll.


## Slik bruker du IPS

### For pasienter

1. **Be om ett.** Spør klinikken din, sykehuset, den nasjonale helseportalen eller helseappen om den kan lage et IPS eller et nasjonalt pasientsammendrag basert på det.
2. **Kontroller det.** Les det mens du er frisk. Si fra om noe er feil eller mangler, særlig allergier og legemidler.
3. **Ha det med deg.** Lagre det i en helseapp eller lommebok, som en QR-kode for SMART Health Link, eller som utskrift sammen med reisedokumentene dine.
4. **Hold det oppdatert.** Få et nytt etter en ny diagnose, et nytt legemiddel til langvarig bruk, en operasjon eller et implantat.
5. **Del det med vilje.** Vis det til klinikeren som behandler deg. En SMART Health Link kan utløpe og kan kreve et passord, slik at du bestemmer hvem som ser det og hvor lenge [[10]](#ref-10).

### For klinikere

1. **Sjekk overskriften først.** Hvem som skrev det, når, og om noen har verifisert det. Et gammelt eller uverifisert sammendrag krever mer forsiktighet.
2. **Les de påkrevde seksjonene først:** allergier, legemidler og problemer.
3. **Skill mellom «ingen kjente» og «ikke registrert».** «Ingen kjente allergier» er et klinisk utsagn. En tom eller «ukjent» seksjon er det ikke.
4. **Bekreft kritiske opplysninger** med pasienten eller pasientens følge når du kan.
5. **Bruk de kodede dataene.** Der systemet ditt støtter det, gjør kodede oppføringer at sammendraget kan vises på ditt språk og kontrolleres mot regler for legemiddelinteraksjoner og allergier.
6. **Ikke anta at det er fullstendig.** IPS er et sikkerhetsnett, ikke en fullstendig sykehistorie.

### For implementatorer

1. **Velg spesifikasjon.** Bruk gjeldende HL7 FHIR IPS Implementation Guide (STU 2), eller landets nasjonale profil av den. For CDA-baserte infrastrukturer bruker du CDA IPS-guiden [[9]](#ref-9) [[11]](#ref-11).
2. **Kartlegg dataene dine.** Kartlegg lokale data til IPS-profilene: `Patient`, `AllergyIntolerance`, `MedicationStatement`, `Condition` og så videre. Det meste av arbeidet ligger i denne kartleggingen.
3. **Kartlegg terminologien din.** Kartlegg lokale koder til SNOMED CT, LOINC og kodesystemer for legemidler. SNOMED CT IPS Terminology er gratis å bruke til dette formålet [[12]](#ref-12).
4. **Generer dokumentet.** Støtt operasjonen `$summary`, eller bygg `Bundle` og `Composition` selv. Ta med en lesbar fortelling for hver seksjon, og eksplisitte utsagn om «ingen kjente» eller «ikke tilgjengelig».
5. **Valider det.** Kontroller hvert genererte dokument med FHIR Validator og et testsett for samsvar, for eksempel Inferno IPS Test Kit [[13]](#ref-13).
6. **Signer og del det.** Bestem hvordan dokumenter signeres, lagres og sendes: et API, et dokumentregister, en grenseoverskridende portal eller en SMART Health Link.
7. **Bruk det på en trygg måte.** Som mottaker bør du vise fortellingen selv når du ikke kan behandle alle kodede oppføringer, holde kilden og forfatteren synlige, og aldri i det stille flette mottatte data inn i den lokale journalen.
8. **Test sammen med andre.** Test samvirke med andre leverandører og land på IHE- og HL7-Connectathons før dere går i produksjon.

### For myndigheter og helseorganisasjoner

1. **Ta i bruk en nasjonal profil** som bygger på IPS i stedet for et eget format, slik at det nasjonale sammendraget er internasjonalt fra start [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
2. **Avklar styringen:** hvem som kan opprette, oppdatere og bekrefte et sammendrag, og hvem som svarer for at det er riktig.
3. **Avklar lisensiering av terminologi:** SNOMED CT-medlemskap, eller bruk av det gratis IPS-delsettet.
4. **Avklar identitet, samtykke og tillit:** hvordan pasienter identifiseres, hvordan samtykke registreres, og hvilket tillitsrammeverk, som MyHealth@EU eller WHOs Global Digital Health Certification Network, som brukes til å verifisere dokumenter [[1]](#ref-1) [[14]](#ref-14).
5. **Publiser det dere har bygget** i IPS Implementation Registry, slik at andre kan lære av det [[15]](#ref-15).


## Å integrere IPS med helsesystemer

Et IPS er sjelden et eget system. Det er en visning av data som allerede finnes i EPJ-er, helseinformasjonsutvekslinger, nasjonale journaler og personlige helseapper.

| Integrasjonsmønster | Slik fungerer det | Eksempler |
|---|---|---|
| **Generert av EPJ-en** | EPJ-en bygger et IPS av egne data på forespørsel, ofte gjennom FHIR-operasjonen `$summary`. | EPJ-leverandører og FHIR-servere som HAPI FHIR, som har en IPS-generatormodul |
| **Nasjonal eller regional journal** | En nasjonal tjeneste for pasientsammendrag lagrer en profil av IPS og gjør den tilgjengelig for autoriserte tjenesteytere. | Canadas PS-CA, Australias AU Patient Summary, Sveits' elektroniske pasientjournal med CH IPS [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6) |
| **Grenseoverskridende portal** | Hvert land driver et nasjonalt kontaktpunkt. Det gjør hjemlandets sammendrag om til det avtalte utvekslingsformatet og sender det over grensen, og mottakerlandet viser det på det lokale språket. | MyHealth@EU National Contact Points for eHealth [[1]](#ref-1) [[2]](#ref-2) |
| **Regionalt utvekslingsnettverk** | Helsedepartementer utveksler IPS-dokumenter gjennom nasjonale FHIR-servere under en felles regional guide. | RACSELs IPS-LAC og Pan American Highway for Digital Health (PH4H) i Latin-Amerika og Karibia [[16]](#ref-16) |
| **Formidlet av pasienten** | Pasienten har IPS i en app eller lommebok og deler det med en QR-kode eller en SMART Health Link. | CommonHealth; IPS-arbeidet i WHOs tillitsnettverk for pilegrimsreiser [[10]](#ref-10) [[14]](#ref-14) |
| **API-basert tilgang** | Apper henter et IPS for en autorisert pasient over et FHIR-API. | International Patient Access (IPA); amerikanske nettverk som Flexpa, som la til IPS-støtte under CMS Interoperability Framework [[17]](#ref-17) [[18]](#ref-18) |

Integrasjonspunkter å planlegge for:

- **Deling av dokumenter:** IHE-profiler som MHD (FHIR) og XDS (dokumentregistre) lagrer og finner IPS-dokumenter. IHEs innholdsprofiler for IPS legger til regler for samsvar og testing [[11]](#ref-11).
- **Pasientidentitet:** IHE PIXm og PDQm, eller en nasjonal identifikator, kobler pasienten på tvers av systemer.
- **Eksisterende dokumenter:** mange systemer lager allerede CDA, C-CDA eller nasjonale sammendrag. Å kartlegge disse til IPS er vanligvis enklere enn å begynne på nytt, men se etter forskjeller i kardinalitet, verdisett og kodesystemer.
- **Nasjonale profiler:** en nasjonal kjerne, som US Core, AU Core, CH Core eller JP Core, kan avvike fra IPS. Nasjonale profiler for pasientsammendrag forener de to [[5]](#ref-5) [[6]](#ref-6) [[19]](#ref-19).
- **Oversettelse og visning:** mottakere bør gjengi fortellingen og oversette kodede oppføringer ved hjelp av kodenes visningsnavn på mottakerens språk.
- **Sikkerhet:** bruk TLS, signerte dokumenter der det kreves, revisjonslogging (for eksempel IHE ATNA eller BALP) og tilgangskontroll knyttet til samtykke.


## Dagens utbredelse

IPS har gått fra pilotprosjekter til nasjonale og regionale programmer. Status endres raskt, så sjekk de lenkede kildene for siste stilling.

- **IPS Implementation Registry.** IPS-miljøet vedlikeholder et offentlig register over implementeringer. Midt i 2026 hadde det 34 oppføringer, fra Argentinas tjenesteyterformidlede IPS-LAC-prosjekt til Vietnams Better Health Program [[15]](#ref-15).
- **FHIR-økosystemet.** I undersøkelsen State of FHIR 2025 fra HL7 International og Firely sa 42 respondenter at IPS ligger til grunn for deres nasjonale FHIR-spesifikasjoner, flere enn for noen annen internasjonal guide [[20]](#ref-20).
- **Forskning.** En studie fra 2025 om bruk av IPS intervjuet interessenter, som pekte på bedre kvalitet på behandlingen og pasientsikkerhet som de viktigste fordelene [[21]](#ref-21).

| Land eller region | Status |
|---|---|
| **EU og EØS** | MyHealth@EU utveksler pasientsammendrag og e-resepter mellom land. En presentasjon fra Europakommisjonen i 2026 rapporterte 17 medlemsstater pluss Norge i drift, og at de fleste av de øvrige planlegger å bli med [[2]](#ref-2) [[22]](#ref-22). EHDS-forordningen gjør utveksling av pasientsammendrag obligatorisk innen 2029 [[23]](#ref-23). |
| **Canada** | Det pankanadiske pasientsammendraget (PS-CA), godkjent av Canada Health Infoway i oktober 2022, bygger på IPS med kanadiske tilpasninger [[4]](#ref-4). |
| **Australia** | AU Patient Summary, som bygger på IPS og AU Core, utvikles av HL7 Australia gjennom programmet Sparked [[5]](#ref-5) [[24]](#ref-24). |
| **Sveits** | CH IPS 2.0.0 (prøvebruk) fra HL7 Switzerland bygger på IPS og CH Core. En egen profil legger til det den sveitsiske elektroniske pasientjournalen trenger [[6]](#ref-6). |
| **USA** | Ingen føderal plikt til å bruke IPS. USA bruker US Core og USCDI. Føderale etater deltar i IPS-arbeid internasjonalt, og noen nettverk støtter IPS frivillig [[18]](#ref-18). |
| **Latin-Amerika og Karibia** | Helsedepartementene i RACSEL bruker den regionale IPS-LAC-guiden. I 2023 utvekslet 16 land IPS-LAC-dokumenter på en connectathon i São Paulo [[16]](#ref-16). |
| **Japan** | Forskere har bygget og validert en IPS-basert applikasjon for pasientsammendrag for vanlige japanske bruksområder, med JP Core [[19]](#ref-19). |
| **Taiwan og Filippinene** | En implementeringsrapport fra 2025 beskriver en grenseoverskridende personlig helsejournal som bruker FHIR og er tilpasset IPS [[25]](#ref-25). |
| **G7** | I 2021 forpliktet G7-landenes helseministre seg til å arbeide mot IPS og publiserte en veikart for IPS [[26]](#ref-26). |
| **WHO** | WHOs Global Digital Health Certification Network omfatter IPS-baserte tillitsdomener, som verifiserbart IPS for pilegrimsreiser [[14]](#ref-14). |


## Lover, forskrifter og politikk etter land og region

IPS er en standard, ikke en lov. Lover avgjør om et land må utveksle pasientsammendrag, i hvilket format og under hvilke personvernregler. Dette er en oppsummering, ikke juridisk rådgivning. Kontroller alltid den gjeldende lovteksten.

| Jurisdiksjon | Lov eller politikk | Hva det betyr for IPS |
|---|---|---|
| **Den europeiske union** | **Forordning om det europeiske helsedataområdet (EHDS), (EU) 2025/327.** Publisert 5. mars 2025; trådte i kraft 26. mars 2025 [[23]](#ref-23) [[27]](#ref-27). | Pasientsammendrag er en «prioritert kategori». Utveksling i det europeiske utvekslingsformatet for elektroniske pasientjournaler må fungere i alle medlemsstater innen 2029. Medisinske bilder, prøvesvar og utskrivningsrapporter følger innen 2031 [[28]](#ref-28). Formatet for pasientsammendrag bygger på HL7 IPS. |
| **Den europeiske union** | **Direktiv 2011/24/EU** om pasientrettigheter ved grenseoverskridende helsetjenester [[29]](#ref-29). | Opprettet eHealth Network, som ble enige om retningslinjene for pasientsammendrag bak MyHealth@EU. |
| **Den europeiske union** | **Personvernforordningen (GDPR), (EU) 2016/679** [[30]](#ref-30). | Helsedata er en særlig kategori. Hver IPS-utveksling krever et rettslig grunnlag og egnede sikkerhetstiltak. |
| **USA** | **21st Century Cures Act og reglene mot informasjonsblokkering** [[31]](#ref-31); det frivillige **CMS Interoperability Framework** (2025) [[17]](#ref-17). | Ingen lov krever IPS. Lover krever tilgang til og utveksling av elektronisk helseinformasjon, med bruk av US Core og USCDI. Støtte for IPS er frivillig. |
| **Canada** | Provinsielle og territorielle lover om helseopplysninger. Den føderale **Connected Care for Canadians Act** (lovforslag C-72) ble innført i 2024, men ble ikke vedtatt før parlamentet ble prorogert i 2025. | PS-CA er en pankanadisk spesifikasjon, ikke et lovkrav. Innføringen ledes av provinser og territorier sammen med Canada Health Infoway [[4]](#ref-4). |
| **Storbritannia** | **Data (Use and Access) Act 2025** [[32]](#ref-32). | Inneholder fullmakter til å fastsette informasjonsstandarder for IT i helse- og omsorgstjenesten. Storbritannia var vertskap for G7-forpliktelsen om IPS i 2021 [[26]](#ref-26). |
| **Australia** | **My Health Records Act 2012** og endringene fra 2025 om «deling som standard». | AU Patient Summary er en nasjonal spesifikasjon utviklet gjennom Sparked [[5]](#ref-5) [[24]](#ref-24). |
| **Sveits** | **Forbundsloven av 19. juni 2015 om den elektroniske pasientjournalen (EPRA, SR 816.1)**, i kraft siden 15. april 2017 [[33]](#ref-33). | CH IPS inneholder en profil for dokumenter i den sveitsiske elektroniske pasientjournalen [[6]](#ref-6). |
| **Latin-Amerika og Karibia** | Regionale avtaler gjennom RACSEL og PH4H, med støtte fra Inter-American Development Bank til et regionalt rettslig rammeverk [[16]](#ref-16). | IPS-LAC er det avtalte regionale formatet for grenseoverskridende utveksling. |
| **G7** | **Helseministrenes kommuniké**, Oxford, juni 2021, og **G7 IPS Roadmap**, desember 2021 [[26]](#ref-26) [[34]](#ref-34). | En politisk forpliktelse til å arbeide mot IPS og pasienters tilgang, ikke bindende lov. |


## Fordeler og ulemper

| Fordeler | Ulemper |
|---|---|
| **Tryggere uplanlagt helsehjelp.** Klinikere ser allergier, legemidler og problemer i løpet av sekunder. | **Bare så god som kilden.** Utdaterte eller feilaktige kildedata gir et utdatert eller feilaktig sammendrag. |
| **Ett format, over hele verden.** Én implementering dekker både nasjonale og grenseoverskridende behov. | **Nasjonale forskjeller.** Nasjonale profiler legger til regler, så et «gyldig IPS» i ett land kan kreve arbeid for å bli akseptert i et annet. |
| **Bygget på åpne, modne standarder:** ISO, CEN, HL7 FHIR og CDA, SNOMED CT og LOINC. | **Terminologibyrde.** Å kartlegge lokale koder til SNOMED CT og LOINC er hardt arbeid, og full SNOMED CT krever en lisens utover det gratis IPS-delsettet. |
| **Lesbart og beregnbart.** Fortelling for mennesker, kodede data for programvare og oversettelse. | **Fortelling og kodede data kan være uenige** hvis generatoren er uforsiktig, og mottakere kan stole på feil av dem. |
| **Myndiggjøring av pasienten.** Pasienter kan ha og dele sitt eget sammendrag. | **Risiko for personvern og samtykke.** Et bærbart sammendrag er sensitivt, og lover og samtykkemodeller varierer fra land til land. |
| **Gratis spesifikasjoner** og gratis IPS-terminologi senker kostnadene [[12]](#ref-12). | **Hyppige versjonsskifter.** STU 1, STU 1.1 og STU 2 eksisterer side om side, og EHDS-formatet viser til en tidligere versjon [[28]](#ref-28). |
| **Gjenbrukbart** til vaksinasjonsbevis, forskning og registre [[7]](#ref-7) [[8]](#ref-8). | **Bevisst minimalt.** Er ingen erstatning for fullstendige journaler eller fagspesifikke dokumenter, og hull for sekundær bruk krever utvidelser [[7]](#ref-7). |
| **Sterk støtte** fra myndigheter, EU, G7, WHO og standardiseringsorganer. | **Ujevn utbredelse.** Mange land og leverandører er fortsatt på pilotstadiet, og pasientenes kjennskap er lav. |


## Planer og fremtidige retninger

- **EU, 2029:** utveksling av pasientsammendrag og e-resepter i drift i alle EU-medlemsstater under EHDS [[23]](#ref-23) [[28]](#ref-28).
- **EU, 2031:** medisinske bilder, laboratorieresultater og utskrivningsrapporter kommer inn i det europeiske utvekslingsformatet for elektroniske pasientjournaler [[28]](#ref-28).
- **Utvidelse av MyHealth@EU:** flere land som blir med, og nye tjenester for laboratorieresultater, utskrivningsrapporter og medisinske bilder [[2]](#ref-2) [[22]](#ref-22).
- **Innføring av FHIR IPS STU 2:** implementatorer går over til seksjonene Alerts og Patient Story, eksplisitte tomme seksjoner og SNOMED CT IPS-terminologien [[9]](#ref-9).
- **Australia:** publisering av AU Patient Summary Release 1, planlagt for 2026 [[24]](#ref-24).
- **IPS Best Practices Project:** en felles innsats for å dokumentere erfaringer, med arbeid som starter i 2026.
- **WHOs tillitsnettverk:** flere IPS-baserte tillitsdomener for verifiserbare, portable helsedokumenter [[14]](#ref-14).
- **SMART Health Links:** standardiseres gjennom HL7, for pasientstyrt deling [[10]](#ref-10).
- **Latin-Amerika og Karibia:** bredere utveksling av IPS-LAC gjennom PH4H [[16]](#ref-16).
- **Forskning og sekundær bruk:** arbeid for å utvide pasientsammendrag til klinisk forskning og KI, samtidig som kjernen holdes minimal [[7]](#ref-7).


## Ordliste

| Begrep | Betydning |
|---|---|
| **IPS** | International Patient Summary |
| **FHIR** | Fast Healthcare Interoperability Resources, HL7s moderne API-baserte standard |
| **CDA** | Clinical Document Architecture, HL7s XML-dokumentstandard |
| **IG** | Implementation Guide, et sett med profiler og regler for å anvende en standard |
| **Profil** | En begrenset versjon av en FHIR-ressurs for en bestemt bruk |
| **SNOMED CT** | Systematized Nomenclature of Medicine – Clinical Terms |
| **LOINC** | Logical Observation Identifiers Names and Codes |
| **SMART Health Links** | En standard for deling av helsedata gjennom en lenke eller QR-kode |
| **JIC** | Joint Initiative Council for Global Health Informatics Standardization |


## Les mer

- HL7 FHIR IPS Implementation Guide: <https://hl7.org/fhir/uv/ips/>
- IPS continuous build: <https://build.fhir.org/ig/HL7/fhir-ips/>
- International Patient Summary project site: <https://international-patient-summary.net/>
- ISO 27269 (Health informatics — International patient summary): <https://www.iso.org/standard/79491.html>
- SNOMED CT IPS Terminology: <https://www.snomed.org/international-patient-summary-terminology>
- SMART Health Links: <https://docs.smarthealthit.org/smart-health-links/>


## Ressurser

Disse lenkene dekker kilder, spesifikasjoner, programvare, prosjekter, videoer, bøker og forskning om IPS. De fleste ble kontrollert da denne siden ble skrevet. Noen utgiveres nettsteder blokkerer automatiske kontroller, og de er merket med *(ikke kontrollert)*.

### Offisielle spesifikasjoner og standarder

- [HL7 FHIR IPS Implementation Guide, current published version](https://hl7.org/fhir/uv/ips/) er den autoritative FHIR-spesifikasjonen.
- [HL7 FHIR IPS Implementation Guide, STU 2](https://hl7.org/fhir/uv/ips/STU2/)
- [HL7 FHIR IPS Implementation Guide, STU 1.1](https://hl7.org/fhir/uv/ips/STU1.1/)
- [HL7 FHIR IPS publication history](https://www.hl7.org/fhir/uv/ips/history.html) viser alle publiserte versjoner.
- [HL7 FHIR IPS continuous build](https://build.fhir.org/ig/HL7/fhir-ips/) er det nyeste pågående arbeidet som ikke er balloted.
- [Structure of the International Patient Summary](https://hl7.org/fhir/uv/ips/en/Structure-of-the-International-Patient-Summary.html) forklarer seksjonene og profilene.
- [IPS design conventions](https://build.fhir.org/ig/HL7/fhir-ips/en/Design-Conventions.html) dekker must-support, manglende data og fortelling.
- [IPS generation and data inclusion](https://build.fhir.org/ig/HL7/fhir-ips/en/Generation-and-Data-Inclusion.html) dekker `$summary` og hvordan innhold velges ut.
- [HL7 CDA IPS Implementation Guide, continuous build](https://build.fhir.org/ig/HL7/CDA-IPS/)
- [HL7 CDA IPS product brief](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=483)
- [ISO 27269, Health informatics — International patient summary](https://www.iso.org/standard/79491.html) *(ikke kontrollert)*
- [ISO/TC 215 Health informatics committee](https://www.iso.org/committee/54960.html) *(ikke kontrollert)*
- [IHE FHIR International Patient Summary profile (FIIO)](https://profiles.ihe.net/PCC/FIIO/volume-1.html)
- [IHE PCC International Patient Summary supplement, 2020 (PDF)](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS_Rev1-0_PC_2020-03-17.pdf)
- [HL7 SMART Health Cards and Links Implementation Guide](https://hl7.org/fhir/uv/smart-health-cards-and-links/)
- [SMART Health Links documentation](https://docs.smarthealthit.org/smart-health-links/)
- [HL7 FHIR International Patient Access (IPA)](https://hl7.org/fhir/uv/ipa/) er en søsterspesifikasjon for pasienters API-tilgang.
- [HL7 FHIR R4 base specification](https://hl7.org/fhir/R4/), som IPS bygger på.

### Kildekodelagre

- [HL7/fhir-ips](https://github.com/HL7/fhir-ips) inneholder kilden til FHIR IPS IG i FHIR Shorthand.
- [HL7/cda-ips](https://github.com/HL7/cda-ips) inneholder kilden til CDA IPS IG.
- [hl7-eu/eps](https://github.com/hl7-eu/eps) inneholder kilden til HL7 Europe Patient Summary.
- [hl7ch/ch-ips](https://github.com/hl7ch/ch-ips) inneholder det sveitsiske IPS, med en viser og en generator under utvikling.
- [GitHub topic: international-patient-summary](https://github.com/topics/international-patient-summary) viser lagre fra miljøet.

### Nasjonale og regionale tilpasninger

- [HL7 Europe Patient Summary (EPS), continuous build](https://build.fhir.org/ig/hl7-eu/eps/)
- [AU Patient Summary (Australia), continuous build](https://build.fhir.org/ig/hl7au/au-fhir-ps/)
- [Trillium II IPS structure (HL7 Europe)](https://hl7.eu/fhir/build/trillium2/site/ipsStructure.html) stammer fra EU–USA-prosjektet som bidro til å starte IPS.
- [eHealth Suisse](https://www.ehealthsuisse.ch/) er Sveits' kompetansesenter for digital helse og for innføringen av IPS.
- [MyHealth@EU, cross-border digital health services](https://health.ec.europa.eu/ehealth-digital-health-and-care/electronic-cross-border-health-services_en)
- [Xt-EHR Joint Action](https://www.xt-ehr.eu/) forbereder formatene for det europeiske helsedataområdet, inkludert pasientsammendraget.

### Programvare og verktøy

- [IPS Viewer](https://www.ipsviewer.com) ([source: jddamore/IPSviewer](https://github.com/jddamore/IPSviewer)) er en åpen kildekode-viser for IPS som kjører i nettleseren.
- [uwcirg/shl-ips-viewer](https://github.com/uwcirg/shl-ips-viewer) viser et IPS som deles gjennom en SMART Health Link.
- [smart-on-fhir/smart-health-links](https://github.com/smart-on-fhir/smart-health-links) er referanseimplementeringen av SMART Health Links.
- [HAPI FHIR IPS generator](https://hapifhir.io/hapi-fhir/docs/server_ips/introduction.html) ([source: hapifhir/hapi-fhir](https://github.com/hapifhir/hapi-fhir)) er en Java-servermodul med åpen kildekode som implementerer `$summary`.
- [HAPI FHIR JPA server IPS documentation](https://hapifhir.io/hapi-fhir/docs/server_jpa/ips.html)
- [Inferno IPS Test Kit](https://inferno.healthit.gov/test-kits/ips) ([source: inferno-framework/ips-test-kit](https://github.com/inferno-framework/ips-test-kit)) er et testsett for samsvar med åpen kildekode.
- [FHIR Validator](https://validator.fhir.org/) validerer IPS-bunter mot profilene i IG-en.
- [Simplifier: hl7.fhir.uv.ips package](https://simplifier.net/packages/hl7.fhir.uv.ips) har pakken, profilene og eksemplene.
- [FHIR package registry](https://registry.fhir.org/)
- [FHIR Shorthand (FSH) School](https://fshschool.org/) lærer bort språket IPS IG er skrevet i.
- [CommonHealth](https://www.commonhealth.org/) er en pasientapp som genererer et IPS og deler det gjennom SMART Health Links.
- [WHO SMART Trust](https://github.com/WorldHealthOrganization/smart-trust) er tillitsrammeverket for WHOs Global Digital Health Certification Network.

### Organisasjoner og prosjekter

- [International Patient Summary project site](https://international-patient-summary.net/) har nyheter, rapporter om utbredelse og opplæring.
- [IPS for health IT developers](https://international-patient-summary.net/health-it-developer/)
- [HL7 International](https://www.hl7.org/)
- [IHE International](https://www.ihe.net/)
- [SNOMED International](https://www.snomed.org/)
- [SNOMED CT IPS Terminology](https://www.snomed.org/international-patient-summary-terminology) er et gratis delsett for IPS-bruk.
- [LOINC](https://loinc.org/) *(ikke kontrollert)*
- [Joint Initiative Council for Global Health Informatics Standardization (JIC)](http://www.jointinitiativecouncil.org/)
- [Global Digital Health Partnership (GDHP)](https://gdhp.health/)
- [WHO SMART Guidelines](https://smart.who.int/)
- [WHO Global Digital Health Certification Network](https://www.who.int/initiatives/global-digital-health-certification-network)

### Fellesskap og arrangementer

- [chat.fhir.org](https://chat.fhir.org/) er chatten til FHIR-miljøet, som har en aktiv IPS-strøm.
- [HL7 FHIR Connectathons](https://www.hl7.org/events/fhir-connectathon/)
- [IHE Connectathons](https://www.ihe.net/participate/connectathon/)

### Videoer

- [HIMSS20: IPS for computable care guidelines in 200 seconds or less (IHE International, YouTube)](https://www.youtube.com/watch?v=xjEzGM8kBPw)
- [IHE International YouTube channel](https://www.youtube.com/@IHEIntl) har paneler fra Connectathon og IPS-sesjoner.
- [IPS project site news](https://international-patient-summary.net/) lenker til mange innspilte webinarer, blant annet:
  - IPS-panelet på IHE North America Connectathon, 2024
  - IPS-sesjonen på FHIR DevDays 2023
  - Grahame Grieve om IPS og IPA, IHE Connectathon Montreux 2022
  - hovedinnlegget på SNOMED CT Expo 2022
  - Matthew Rahn om IPS i GDHP
  - HL7-webinaret «Global Passport» om grenseoverskridende bruk
- [YouTube search: International Patient Summary](https://www.youtube.com/results?search_query=international+patient+summary)

### Bøker

- Tim Benson og Grahame Grieve, [*Principles of Health Interoperability: FHIR, HL7 and SNOMED CT*](https://link.springer.com/book/10.1007/978-3-030-56883-2), 4. utgave, Springer, 2020. Den dekker FHIR, kliniske sammendragsressurser og terminologi.

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
- [PubMed search: "international patient summary"](https://pubmed.ncbi.nlm.nih.gov/?term=%22international+patient+summary%22) for fagfellevurdert litteratur.


## References

Nummererte henvisninger i teksten, som [1], lenker til den tilsvarende oppføringen nedenfor. Lenkene ble kontrollert i november 2026. Lover, tall for utbredelse og versjoner endres, så sjekk kilden for gjeldende stilling.

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

Disse kildene er ikke sitert ovenfor, men er de primære referansene for selve standarden.

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
