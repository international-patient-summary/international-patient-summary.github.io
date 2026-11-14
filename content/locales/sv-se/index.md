# Internationell patientsammanfattning (IPS)

**Internationell patientsammanfattning (International Patient Summary, IPS)** är en världsomspännande standard för ett kort utdrag ur en elektronisk hälsojournal. Den innehåller de grundläggande kliniska fakta som en kliniker behöver för att behandla en patient säkert. Den är utformad för att vara:

- **Minimal och inte uttömmande.** Den är en liten, noga utvald delmängd av en hälsojournal, inte hela journalen.
- **Specialitetsoberoende.** Alla kliniker kan använda den, inom vilken disciplin som helst.
- **Tillståndsoberoende.** Den är inte knuten till en viss sjukdom eller vårdkedja.
- **Genomförbar och internationell.** Den bygger på globala standarder och terminologier och kan därför användas över länder, språk och it-system.

Kort sagt besvarar IPS en enda fråga för en kliniker som aldrig har träffat patienten: *"Vad behöver jag veta just nu för att ta hand om den här personen på ett säkert sätt?"*


## Varför IPS finns

Hälsoinformation är oftast inlåst i en lokal elektronisk hälsojournal (EHR), ett nationellt system eller en leverantörs produkt. När en patient söker vård någon annanstans, till exempel på ett annat sjukhus, i en annan region eller i ett annat land, har den behandlande klinikern ofta ingen tillgång till den historiken. IPS ger alla ett gemensamt, bärbart sammanfattningsformat.

### Viktiga användningsfall

| Användningsfall | Beskrivning |
|---|---|
| **Oplanerad vård och akutvård** | En patient blir sjuk eller skadad långt hemifrån, och lokala kliniker kan inte nå patientens hem-EHR. Detta är det ursprungliga, primära användningsfallet. |
| **Gränsöverskridande vård** | Resenärer, migranter, gränsarbetare och flyktingar bär med sig en sammanfattning som kliniker utomlands kan läsa. |
| **Planerad vård och övergångar** | Remisser, specialistkonsultationer, inskrivningar, utskrivningar och överlämningar mellan vårdgivare. |
| **Medicinsk turism och rörlighet** | Patienter som väljer att få vård i en annan jurisdiktion. |
| **Egenmakt för patienter** | Patienter har, ser och delar sin egen sammanfattning från en mobilapp, en portal eller en utskriven kopia. |


## När man ska använda IPS

Använd IPS när någon som inte känner patienten snabbt behöver en pålitlig ögonblicksbild, och när avsändare och mottagare inte delar ett it-system.

### Bra användningsområden

- **Akut och oplanerad vård**, särskilt långt hemifrån eller över en gräns. Det är för detta ändamål IPS utformades.
- **Gränsöverskridande utbyte mellan nationella system**, till exempel EU:s tjänst MyHealth@EU [[1]](#ref-1) [[2]](#ref-2).
- **Sammanfattningar som patienten själv har**, som resenärer, migranter, flyktingar, pilgrimer eller personer med komplexa tillstånd bär i telefonen eller på papper [[3]](#ref-3).
- **En nationell eller regional patientsammanfattning.** Många länder bygger sin egen sammanfattning som en profil av IPS, så att den också kan utbytas internationellt [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
- **En gemensam utgångspunkt för vårdövergångar**, till exempel remisser, inskrivningar och utskrivningar, när ett rikare specialiserat dokument saknas.
- **En startpunkt för andra datamängder**, till exempel vaccinationsintyg, forskningsdata eller register som behöver samma kärnfakta [[7]](#ref-7) [[8]](#ref-8).

### Dåliga användningsområden

- **Hela patientjournalen.** IPS är avsiktligt minimal. Använd en fullständig journalexport eller ett specialiserat dokument när detaljer är viktiga.
- **Specialitetsspecifika dokument**, till exempel en sammanfattning av cancerbehandling, en mödravårdsjournal eller en detaljerad utskrivningssammanfattning. Dessa har egna standarder som kan inkludera eller hänvisa till IPS-innehåll.
- **Kliniska arbetsflöden i realtid inom en och samma organisation.** Inom en enda EHR frågar man efter levande data i stället för en sammanfattande ögonblicksbild.
- **Juridiska, faktureringsmässiga eller försäkringsrelaterade uppgifter.** IPS är en klinisk sammanfattning, inte en administrativ post eller ett ersättningsunderlag.
- **Beslut som kräver garanterad fullständighet.** En IPS är bara så fullständig och aktuell som sin källa och sin författare. Bekräfta alltid kritiska fakta med patienten när det är möjligt.


## Vad en IPS innehåller

Ett IPS-dokument har två lager:

1. **Ett huvud som anger vem, vad och när:**
   - **Patient:** identitet, demografi och kontaktuppgifter.
   - **Författare:** den person, organisation eller det system som tog fram sammanfattningen.
   - **Förvaltare (custodian):** den organisation som ansvarar för att underhålla den.
   - **Intygare (attester):** den som har verifierat den, om någon.
   - **Datum och tid:** när den skapades.

2. **En klinisk kropp organiserad i avsnitt.** Avsnitten är obligatoriska, rekommenderade eller valfria.

| Avsnitt | Status | Typiskt innehåll |
|---|---|---|
| **Läkemedelssammanfattning** | Obligatoriskt | Aktuella och relevanta tidigare läkemedel, recept, dosering |
| **Allergier och överkänslighet** | Obligatoriskt | Allergier mot läkemedel, mat och miljö; reaktioner och svårighetsgrad |
| **Problemlista** | Obligatoriskt | Aktiva diagnoser, tillstånd och kliniska problem |
| Vaccinationer | Rekommenderat | Givna vacciner, till exempel stelkramp, hepatit B, influensa, covid-19 |
| Ingreppshistorik | Rekommenderat | Större operationer och invasiva ingrepp |
| Medicintekniska produkter | Rekommenderat | Implantat och produkter, till exempel pacemakers, stentar, proteser |
| Diagnostiska resultat | Rekommenderat | Viktiga laboratorieresultat, röntgensvar, patologi |
| Vitala tecken | Valfritt | Blodtryck, hjärtfrekvens, vikt, längd, BMI |
| Tidigare sjukdomshistorik | Valfritt | Avslutade tillstånd och betydande tidigare problem |
| Funktionsstatus | Valfritt | Funktionsnedsättningar och förmåga att utföra dagliga aktiviteter |
| Vårdplan | Valfritt | Vårdplaner och behandlingsrekommendationer |
| Social historik | Valfritt | Tobak, alkohol och andra relevanta livsstilsfaktorer |
| Graviditetshistorik | Valfritt | Aktuell graviditetsstatus och graviditetshistorik |
| Förhandsdirektiv | Valfritt | Livstestamenten, preferenser kring återupplivning, samtyckesförklaringar |
| Varningar | Valfritt | Säkerhetskritiska varningar som inte passar någon annanstans (tillagt i FHIR IPS STU 2) |
| Patientens berättelse | Valfritt | Det som är viktigt för patienten: behov, styrkor, värderingar, farhågor och preferenser, med patientens egna ord (tillagt i FHIR IPS STU 2) |

**Att uttryckligen säga "ingenting" är viktigt.** Ett tomt avsnitt talar inte om för en kliniker om patienten saknar allergier eller om ingen har dokumenterat dem. IPS förväntar sig därför uttryckliga uttalanden som *"inga kända allergier"*, *"inga aktuella läkemedel"* eller *"information saknas"*.


## Standarderna bakom IPS

IPS är en familj av samordnade standarder. ISO- och CEN-standarderna definierar *vad* en patientsammanfattning måste innehålla. HL7:s implementeringsguider definierar *hur* den ska kodas.

| Standard | Organ | Roll |
|---|---|---|
| **EN 17269** | CEN (Europeiska standardiseringskommittén) | Den abstrakta IPS-datamängden, publicerad 2019 |
| **ISO 27269** | ISO (Internationella standardiseringsorganisationen) | Den internationella versionen av den abstrakta IPS-datamängden, publicerad 2021 |
| **CEN/TS 17288** | CEN | Vägledning för att implementera IPS för gränsöverskridande användning |
| **HL7 FHIR IPS Implementation Guide** | HL7 International | Den moderna, API-vänliga kodningen och det primära implementeringsformatet. STU 2 (2.0.x) lade till avsnitten Varningar och Patientens berättelse, tillät tomma avsnitt, förtydligade `$summary` och gick över till terminologin SNOMED CT IPS [[9]](#ref-9). |
| **HL7 CDA IPS Implementation Guide** | HL7 International | Den XML-dokumentbaserade kodningen, vanlig i befintliga nationella och europeiska infrastrukturer |

Arbetet samordnas genom **Joint Initiative Council for Global Health Informatics Standardization (JIC)**. JIC samlar ISO, CEN, HL7, SNOMED International, IHE och andra. IPS växte fram ur ett samarbete mellan EU och USA 2016 om gränsöverskridande hälsodata och stöds nu av regeringar och program för digital hälsa världen över.


## Hur IPS kodas med HL7 FHIR

I FHIR är en IPS en enda **`Bundle`** av typen `document`:

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

Viktiga tekniska punkter:

- **Varje avsnitt har en mänskligt läsbar berättande text.** En kliniker kan läsa IPS i en vanlig webbläsare, även utan FHIR-programvara.
- **Varje avsnitt har också kodade poster**, som är strukturerade FHIR-resurser som programvara kan bearbeta, översätta och avstämma.
- **Profiler begränsar de grundläggande FHIR-resurserna.** Till exempel definierar *Patient (IPS)* och *AllergyIntolerance (IPS)* minimidata och "must support"-element.
- **Operationen `$summary`** (`GET [base]/Patient/[id]/$summary`) ber en FHIR-server att generera en IPS för en patient vid behov.
- **IPS kan signeras och är självständig.** Ett komplett dokument kan lagras, skickas, signeras och verifieras som en enhet.


## Terminologier

Gemensamma kodsystem gör en IPS läsbar över språk och länder:

| Terminologi | Används för |
|---|---|
| **SNOMED CT** | Problem, allergier, ingrepp, produkter, kliniska fynd. En kostnadsfri delmängd, **SNOMED CT IPS Terminology**, finns för IPS-användning, även i icke-medlemsländer. |
| **LOINC** | Dokument- och avsnittstyper, laboratorieprover, vitala tecken |
| **ATC** och andra läkemedelskodsystem | Läkemedelsprodukter och aktiva substanser |
| **UCUM** | Måttenheter |
| **ISO- och HL7-värdemängder** | Länder, språk, administrativa kön, skäl till frånvaro och okänt |

Eftersom posterna är kodade kan ett mottagande system visa en IPS skriven på portugisiska med engelska etiketter. Den kodade betydelsen förblir densamma.


## Hur patienter och kliniker använder en IPS

En IPS kan skapas av en EHR, en nationell hälsojournaltjänst, en patientportal eller en personlig hälsoapp. Den kan sedan levereras på flera sätt:

- **System till system:** via FHIR REST-API:er, nationella infrastrukturer eller gränsöverskridande gateways som EU:s MyHealth@EU-nätverk.
- **Patientförmedlad delning:** patienten har sammanfattningen i en plånbok eller hälsoapp och delar den vid behov.
- **SMART Health Links:** en QR-kod eller URL som ger en kliniker tidsbegränsad, valfritt lösenordsskyddad åtkomst till en krypterad IPS. Klinikern kan öppna den i en vanlig webbläsare.
- **Papper eller PDF:** en utskriven berättande återgivning som reservlösning när inget annat fungerar.

Appar som **CommonHealth** låter patienter samla sina journaler och dela en IPS via SMART Health Links.

Ett typiskt akutscenario:

1. En resenär kollapsar utomlands.
2. Resenären, eller en medresenär, visar en QR-kod från en telefon.
3. Akutläkaren skannar den och ser resenärens läkemedel, allergier och aktiva problem på några sekunder.
4. Läkaren undviker en farlig läkemedelsinteraktion och behandlar patienten säkert.


## Principer och designval

- **Säkerhet först.** Innehållet väljs för klinisk relevans, inte för fullständighet.
- **Globalt som standard, lokalt genom tillägg.** Länder skapar nationella profiler, till exempel EU-, australiska eller kanadensiska varianter, som lägger till krav utan att bryta den internationella kärnan.
- **Mänskligt läsbar och maskinbearbetningsbar.** Berättande text och kodade data samexisterar.
- **Fri och öppen.** HL7:s IPS-specifikationer och IPS-delmängden av SNOMED CT är fritt tillgängliga för att sänka hindren för att ta dem i bruk.
- **Integritet och samtycke.** Åtkomst styrs av lokal lag och patientens samtycke. Mekanismer som SMART Health Links låter patienten behålla kontrollen.


## Hur man använder IPS

### För patienter

1. **Be om en.** Fråga din klinik, ditt sjukhus, din nationella hälsoportal eller din hälsoapp om den kan skapa en IPS eller en nationell patientsammanfattning baserad på den.
2. **Kontrollera den.** Läs den medan du är frisk. Rapportera allt som är fel eller saknas, särskilt allergier och läkemedel.
3. **Ha den med dig.** Förvara den i en hälsoapp eller plånbok, som en QR-kod för en SMART Health Link, eller som utskrift bland dina resehandlingar.
4. **Håll den aktuell.** Skaffa en ny efter en ny diagnos, ett nytt långtidsläkemedel, en operation eller ett implantat.
5. **Dela den med avsikt.** Visa den för klinikern som behandlar dig. En SMART Health Link kan löpa ut och kan kräva ett lösenord, så du styr vem som ser den och hur länge [[10]](#ref-10).

### För kliniker

1. **Kontrollera huvudet först.** Vem som skrev den, när, och om någon har verifierat den. En gammal eller overifierad sammanfattning kräver större försiktighet.
2. **Läs de obligatoriska avsnitten först:** allergier, läkemedel och problem.
3. **Skilj "inget känt" från "inte dokumenterat".** "Inga kända allergier" är ett kliniskt uttalande. Ett tomt eller "okänt" avsnitt är det inte.
4. **Bekräfta kritiska fakta** med patienten eller dennes medföljare så fort du kan.
5. **Använd de kodade data.** Där ditt system stöder det gör kodade poster att sammanfattningen kan visas på ditt språk och kontrolleras mot regler för läkemedelsinteraktioner och allergier.
6. **Anta inte fullständighet.** IPS är ett skyddsnät, inte en fullständig historik.

### För implementerare

1. **Välj specifikation.** Använd den aktuella HL7 FHIR IPS Implementation Guide (STU 2), eller ditt lands nationella profil av den. För CDA-baserade infrastrukturer, använd CDA IPS-guiden [[9]](#ref-9) [[11]](#ref-11).
2. **Mappa dina data.** Mappa lokala data till IPS-profilerna: `Patient`, `AllergyIntolerance`, `MedicationStatement`, `Condition` och så vidare. Det mesta av arbetet ligger i denna mappning.
3. **Mappa din terminologi.** Mappa lokala koder till SNOMED CT, LOINC och läkemedelskodsystem. SNOMED CT IPS Terminology är gratis att använda för detta ändamål [[12]](#ref-12).
4. **Generera dokumentet.** Stöd operationen `$summary`, eller bygg `Bundle` och `Composition` själv. Ta med en läsbar berättande text för varje avsnitt samt uttryckliga uttalanden om "inget känt" eller "inte tillgängligt".
5. **Validera den.** Kontrollera varje genererat dokument med FHIR Validator och ett testkit för överensstämmelse, som Inferno IPS Test Kit [[13]](#ref-13).
6. **Signera och dela den.** Bestäm hur dokument signeras, lagras och skickas: ett API, ett dokumentregister, en gränsöverskridande gateway eller en SMART Health Link.
7. **Ta emot den säkert.** Som mottagare, visa berättande texten även när du inte kan bearbeta varje kodad post, håll källa och författare synliga, och slå aldrig tyst ihop mottagna data med den lokala journalen.
8. **Testa med andra.** Uppnå driftskompatibilitet med andra leverantörer och länder vid IHE- och HL7-Connectathons innan ni går i produktion.

### För regeringar och hälsoorganisationer

1. **Anta en nationell profil** som bygger på IPS i stället för ett separat format, så att den nationella sammanfattningen är internationell som standard [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
2. **Reda ut styrningen:** vem som får skapa, uppdatera och intyga en sammanfattning, och vem som ansvarar för dess riktighet.
3. **Reda ut terminologilicenser:** medlemskap i SNOMED CT, eller användning av den kostnadsfria IPS-delmängden.
4. **Reda ut identitet, samtycke och förtroende:** hur patienter identifieras, hur samtycke dokumenteras och vilket förtroenderamverk, till exempel MyHealth@EU eller WHO:s Global Digital Health Certification Network, som används för att verifiera dokument [[1]](#ref-1) [[14]](#ref-14).
5. **Publicera det ni har byggt** i IPS Implementation Registry, så att andra kan lära av det [[15]](#ref-15).


## Att integrera IPS med hälso- och sjukvårdssystem

En IPS är sällan ett separat system. Den är en vy över data som redan finns i EHR-system, hälsoinformationsutbyten, nationella journaler och personliga hälsoappar.

| Integrationsmönster | Hur det fungerar | Exempel |
|---|---|---|
| **Genererad av EHR** | EHR bygger en IPS av sina egna data på begäran, ofta via FHIR-operationen `$summary`. | EHR-leverantörer och FHIR-servrar som HAPI FHIR, som har en IPS-generatormodul |
| **Nationell eller regional journal** | En nationell patientsammanfattningstjänst lagrar en profil av IPS och gör den tillgänglig för behöriga vårdgivare. | Kanadas PS-CA, Australiens AU Patient Summary, Schweiz elektroniska patientjournal med CH IPS [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6) |
| **Gränsöverskridande gateway** | Varje land driver en nationell kontaktpunkt. Den omvandlar hemlandets sammanfattning till det överenskomna utbytesformatet, skickar den över gränsen, och mottagarlandet visar den på det lokala språket. | MyHealth@EU:s nationella kontaktpunkter för e-hälsa [[1]](#ref-1) [[2]](#ref-2) |
| **Regionalt utbytesnätverk** | Hälsoministerier utbyter IPS-dokument via nationella FHIR-servrar enligt en gemensam regional guide. | RACSEL:s IPS-LAC och Pan American Highway for Digital Health (PH4H) i Latinamerika och Karibien [[16]](#ref-16) |
| **Patientförmedlad** | Patienten har IPS i en app eller plånbok och delar den med en QR-kod eller en SMART Health Link. | CommonHealth; WHO:s förtroendenätverks IPS-arbete för pilgrimsfärder [[10]](#ref-10) [[14]](#ref-14) |
| **API-baserad åtkomst** | Appar hämtar en IPS för en behörig patient via ett FHIR-API. | International Patient Access (IPA); amerikanska nätverk som Flexpa, som lade till IPS-stöd under CMS Interoperability Framework [[17]](#ref-17) [[18]](#ref-18) |

Integrationspunkter att planera för:

- **Dokumentdelning:** IHE-profiler som MHD (FHIR) och XDS (dokumentregister) lagrar och hittar IPS-dokument. IHE:s IPS-innehållsprofiler lägger till regler för överensstämmelse och testning [[11]](#ref-11).
- **Patientidentitet:** IHE PIXm och PDQm, eller en nationell identifierare, matchar patienten mellan system.
- **Befintliga dokument:** många system producerar redan CDA, C-CDA eller nationella sammanfattningar. Att mappa dessa till IPS är oftast enklare än att börja om, men kontrollera skillnader i kardinalitet, värdemängder och kodsystem.
- **Nationella profiler:** en nationell kärna, som US Core, AU Core, CH Core eller JP Core, kan skilja sig från IPS. Nationella patientsammanfattningsprofiler förenar de två [[5]](#ref-5) [[6]](#ref-6) [[19]](#ref-19).
- **Översättning och visning:** mottagare bör visa den berättande texten och översätta kodade poster med hjälp av kodernas visningsnamn på mottagarens språk.
- **Säkerhet:** använd TLS, signerade dokument där det krävs, granskningsloggning (till exempel IHE ATNA eller BALP) och åtkomstkontroll kopplad till samtycke.


## Nuvarande användning

IPS har gått från pilotprojekt till nationella och regionala program. Läget förändras snabbt, så kontrollera de länkade källorna för den senaste situationen.

- **IPS Implementation Registry.** IPS-gemenskapen för ett offentligt register över implementeringar. Mitt under 2026 listade det 34 poster, från Argentinas vårdgivarförmedlade IPS-LAC-projekt till Vietnams Better Health Program [[15]](#ref-15).
- **FHIR-ekosystemet.** I enkäten State of FHIR 2025 från HL7 International och Firely sade 42 respondenter att IPS ligger till grund för deras nationella FHIR-specifikationer, mer än någon annan internationell guide [[20]](#ref-20).
- **Forskning.** En studie från 2025 om införandet av IPS intervjuade intressenter, som pekade på bättre vårdkvalitet och patientsäkerhet som de främsta fördelarna [[21]](#ref-21).

| Land eller region | Status |
|---|---|
| **Europeiska unionen och EES** | MyHealth@EU utbyter patientsammanfattningar och e-recept mellan länder. En presentation från Europeiska kommissionen 2026 rapporterade att 17 medlemsstater plus Norge är i drift, och att de flesta av resten planerar att ansluta sig [[2]](#ref-2) [[22]](#ref-22). EHDS-förordningen gör utbyte av patientsammanfattningar obligatoriskt senast 2029 [[23]](#ref-23). |
| **Kanada** | Den pankanadensiska patientsammanfattningen (PS-CA), godkänd av Canada Health Infoway i oktober 2022, bygger på IPS med kanadensiska anpassningar [[4]](#ref-4). |
| **Australien** | AU Patient Summary, byggd på IPS och AU Core, utvecklas av HL7 Australia genom programmet Sparked [[5]](#ref-5) [[24]](#ref-24). |
| **Schweiz** | CH IPS 2.0.0 (provanvändning) från HL7 Switzerland bygger på IPS och CH Core. En separat profil lägger till det som den schweiziska elektroniska patientjournalen behöver [[6]](#ref-6). |
| **USA** | Inget federalt krav på IPS. USA använder US Core och USCDI. Federala myndigheter deltar i det internationella IPS-arbetet, och vissa nätverk stöder IPS frivilligt [[18]](#ref-18). |
| **Latinamerika och Karibien** | RACSEL:s hälsoministerier använder den regionala IPS-LAC-guiden. År 2023 utbytte 16 länder IPS-LAC-dokument vid ett connectathon i São Paulo [[16]](#ref-16). |
| **Japan** | Forskare har byggt och validerat en IPS-baserad patientsammanfattningsapplikation för vanliga japanska användningsfall, med JP Core [[19]](#ref-19). |
| **Taiwan och Filippinerna** | En implementeringsrapport från 2025 beskriver en gränsöverskridande personlig hälsojournal som använder FHIR och är i linje med IPS [[25]](#ref-25). |
| **G7** | År 2021 åtog sig G7:s hälsoministrar att arbeta mot IPS och publicerade en IPS-färdplan [[26]](#ref-26). |
| **WHO** | WHO:s Global Digital Health Certification Network omfattar IPS-baserade förtroendedomäner, som verifierbar IPS för pilgrimsfärder [[14]](#ref-14). |


## Lagar, förordningar och policy per land och region

IPS är en standard, inte en lag. Lagar avgör om ett land måste utbyta patientsammanfattningar, i vilket format och under vilka integritetsregler. Detta är en sammanfattning, inte juridisk rådgivning. Kontrollera alltid den aktuella lagtexten.

| Jurisdiktion | Lag eller policy | Vad det betyder för IPS |
|---|---|---|
| **Europeiska unionen** | **Förordningen om det europeiska hälsodataområdet (EHDS), (EU) 2025/327.** Publicerad 5 mars 2025; i kraft 26 mars 2025 [[23]](#ref-23) [[27]](#ref-27). | Patientsammanfattningar är en "prioriterad kategori". Utbyte i det europeiska EHR-utbytesformatet måste fungera i varje medlemsstat senast 2029. Medicinska bilder, provresultat och utskrivningsrapporter följer senast 2031 [[28]](#ref-28). Formatet för patientsammanfattningar bygger på HL7 IPS. |
| **Europeiska unionen** | **Direktiv 2011/24/EU** om tillämpningen av patienters rättigheter vid gränsöverskridande hälso- och sjukvård [[29]](#ref-29). | Skapade eHealth Network, som kom överens om de riktlinjer för patientsammanfattningar som ligger bakom MyHealth@EU. |
| **Europeiska unionen** | **Allmänna dataskyddsförordningen (GDPR), (EU) 2016/679** [[30]](#ref-30). | Hälsodata är en särskild kategori. Varje IPS-utbyte kräver rättslig grund och lämpliga skyddsåtgärder. |
| **USA** | **21st Century Cures Act och reglerna mot informationsblockering** [[31]](#ref-31); det frivilliga **CMS Interoperability Framework** (2025) [[17]](#ref-17). | Ingen lag kräver IPS. Lagar kräver åtkomst till och utbyte av elektronisk hälsoinformation med US Core och USCDI. IPS-stöd är frivilligt. |
| **Kanada** | Provinsiella och territoriella hälsoinformationslagar. Den federala **Connected Care for Canadians Act** (lagförslag C-72) lades fram 2024 men antogs inte innan parlamentet avbröts 2025. | PS-CA är en pankanadensisk specifikation, inte ett lagkrav. Införandet leds av provinser och territorier med Canada Health Infoway [[4]](#ref-4). |
| **Storbritannien** | **Data (Use and Access) Act 2025** [[32]](#ref-32). | Innehåller befogenheter att fastställa informationsstandarder för it inom hälso- och sjukvård och vuxensocialtjänst. Storbritannien var värd för G7:s IPS-åtagande 2021 [[26]](#ref-26). |
| **Australien** | **My Health Records Act 2012** och ändringarna 2025 om "delning som standard". | AU Patient Summary är en nationell specifikation som utvecklas genom Sparked [[5]](#ref-5) [[24]](#ref-24). |
| **Schweiz** | **Federal lag av den 19 juni 2015 om den elektroniska patientjournalen (EPRA, SR 816.1)**, i kraft sedan 15 april 2017 [[33]](#ref-33). | CH IPS innehåller en profil för dokument i den schweiziska elektroniska patientjournalen [[6]](#ref-6). |
| **Latinamerika och Karibien** | Regionala överenskommelser via RACSEL och PH4H, med stöd från Interamerikanska utvecklingsbanken för ett regionalt rättsligt ramverk [[16]](#ref-16). | IPS-LAC är det överenskomna regionala formatet för gränsöverskridande utbyte. |
| **G7** | **Hälsoministrarnas kommuniké**, Oxford, juni 2021, och **G7:s IPS-färdplan**, december 2021 [[26]](#ref-26) [[34]](#ref-34). | Ett politiskt åtagande att arbeta mot IPS och patientåtkomst, inte bindande lag. |


## För- och nackdelar

| Fördelar | Nackdelar |
|---|---|
| **Säkrare oplanerad vård.** Kliniker ser allergier, läkemedel och problem på några sekunder. | **Bara så bra som sin källa.** Föråldrade eller felaktiga källdata ger en föråldrad eller felaktig sammanfattning. |
| **Ett format, världen över.** En implementering tillgodoser nationella och gränsöverskridande behov. | **Nationella variationer.** Nationella profiler lägger till regler, så en "giltig IPS" i ett land kan kräva arbete för att accepteras i ett annat. |
| **Byggd på öppna, mogna standarder:** ISO, CEN, HL7 FHIR och CDA, SNOMED CT och LOINC. | **Terminologibörda.** Att mappa lokala koder till SNOMED CT och LOINC är tungt arbete, och fullständig SNOMED CT kräver licens utöver den kostnadsfria IPS-delmängden. |
| **Läsbar och beräkningsbar.** Berättande text för människor, kodade data för programvara och översättning. | **Berättande text och kodade data kan avvika** om generatorn är slarvig, och mottagare kan lita på fel av dem. |
| **Egenmakt för patienter.** Patienter kan ha och dela sin egen sammanfattning. | **Risk för integritet och samtycke.** En bärbar sammanfattning är känslig, och lagar och samtyckesmodeller skiljer sig mellan länder. |
| **Kostnadsfria specifikationer** och kostnadsfri IPS-terminologi sänker kostnaderna [[12]](#ref-12). | **Versionsförändringar.** STU 1, STU 1.1 och STU 2 samexisterar, och EHDS-formatet hänvisar till en tidigare version [[28]](#ref-28). |
| **Återanvändbar** för vaccinationsintyg, forskning och register [[7]](#ref-7) [[8]](#ref-8). | **Avsiktligt minimal.** Ersätter inte fullständiga journaler eller specialitetsdokument, och luckor för sekundär användning kräver tillägg [[7]](#ref-7). |
| **Starkt stöd** från regeringar, EU, G7, WHO och standardiseringsorgan. | **Ojämnt införande.** Många länder och leverantörer pilottestar fortfarande, och patienternas medvetenhet är låg. |


## Planer och framtida riktningar

- **EU, 2029:** utbyte av patientsammanfattningar och e-recept i drift i alla EU:s medlemsstater under EHDS [[23]](#ref-23) [[28]](#ref-28).
- **EU, 2031:** medicinska bilder, laboratorieresultat och utskrivningsrapporter ansluts till det europeiska EHR-utbytesformatet [[28]](#ref-28).
- **Utbyggnad av MyHealth@EU:** fler länder ansluter sig, och nya tjänster för laboratorieresultat, utskrivningsrapporter och medicinska bilder [[2]](#ref-2) [[22]](#ref-22).
- **Införande av FHIR IPS STU 2:** implementerare går över till avsnitten Varningar och Patientens berättelse, uttryckliga tomma avsnitt och terminologin SNOMED CT IPS [[9]](#ref-9).
- **Australien:** publicering av AU Patient Summary Release 1, planerad till 2026 [[24]](#ref-24).
- **IPS Best Practices Project:** en insats från gemenskapen för att dokumentera lärdomar, med arbete som startar 2026.
- **WHO:s förtroendenätverk:** fler IPS-baserade förtroendedomäner för verifierbara, bärbara hälsodokument [[14]](#ref-14).
- **SMART Health Links:** standardiseras genom HL7, för patientstyrd delning [[10]](#ref-10).
- **Latinamerika och Karibien:** bredare IPS-LAC-utbyte genom PH4H [[16]](#ref-16).
- **Forskning och sekundär användning:** arbete för att utöka patientsammanfattningar för klinisk forskning och AI, samtidigt som kärnan hålls minimal [[7]](#ref-7).


## Ordlista

| Term | Betydelse |
|---|---|
| **IPS** | Internationell patientsammanfattning (International Patient Summary) |
| **FHIR** | Fast Healthcare Interoperability Resources, HL7:s moderna API-baserade standard |
| **CDA** | Clinical Document Architecture, HL7:s XML-dokumentstandard |
| **IG** | Implementeringsguide (Implementation Guide), en uppsättning profiler och regler för att tillämpa en standard |
| **Profil** | En begränsad version av en FHIR-resurs för ett särskilt användningsområde |
| **SNOMED CT** | Systematized Nomenclature of Medicine – Clinical Terms |
| **LOINC** | Logical Observation Identifiers Names and Codes |
| **SMART Health Links** | En standard för att dela hälsodata via en länk eller QR-kod |
| **JIC** | Joint Initiative Council for Global Health Informatics Standardization |


## Läs mer

- HL7 FHIR IPS Implementation Guide: <https://hl7.org/fhir/uv/ips/>
- IPS fortlöpande bygge: <https://build.fhir.org/ig/HL7/fhir-ips/>
- Projektwebbplats för International Patient Summary: <https://international-patient-summary.net/>
- ISO 27269 (Hälsoinformatik — Internationell patientsammanfattning): <https://www.iso.org/standard/79491.html>
- SNOMED CT IPS Terminology: <https://www.snomed.org/international-patient-summary-terminology>
- SMART Health Links: <https://docs.smarthealthit.org/smart-health-links/>


## Resurser

Dessa länkar omfattar källor, specifikationer, programvara, projekt, videor, böcker och forskning om IPS. De flesta kontrollerades när sidan skrevs. Några utgivares webbplatser blockerar automatiska kontroller, och dessa är markerade *(inte kontrollerad)*.

### Officiella specifikationer och standarder

- [HL7 FHIR IPS Implementation Guide, aktuell publicerad version](https://hl7.org/fhir/uv/ips/) är den auktoritativa FHIR-specifikationen.
- [HL7 FHIR IPS Implementation Guide, STU 2](https://hl7.org/fhir/uv/ips/STU2/)
- [HL7 FHIR IPS Implementation Guide, STU 1.1](https://hl7.org/fhir/uv/ips/STU1.1/)
- [HL7 FHIR IPS publiceringshistorik](https://www.hl7.org/fhir/uv/ips/history.html) listar varje publicerad version.
- [HL7 FHIR IPS fortlöpande bygge](https://build.fhir.org/ig/HL7/fhir-ips/) är det senaste pågående arbetet som ännu inte röstats om.
- [Struktur för den internationella patientsammanfattningen](https://hl7.org/fhir/uv/ips/en/Structure-of-the-International-Patient-Summary.html) förklarar avsnitten och profilerna.
- [IPS designkonventioner](https://build.fhir.org/ig/HL7/fhir-ips/en/Design-Conventions.html) behandlar must-support, saknade data och berättande text.
- [IPS-generering och datainkludering](https://build.fhir.org/ig/HL7/fhir-ips/en/Generation-and-Data-Inclusion.html) behandlar `$summary` och hur man väljer innehåll.
- [HL7 CDA IPS Implementation Guide, fortlöpande bygge](https://build.fhir.org/ig/HL7/CDA-IPS/)
- [HL7 CDA IPS produktblad](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=483)
- [ISO 27269, Hälsoinformatik — Internationell patientsammanfattning](https://www.iso.org/standard/79491.html) *(inte kontrollerad)*
- [ISO/TC 215 kommittén för hälsoinformatik](https://www.iso.org/committee/54960.html) *(inte kontrollerad)*
- [IHE FHIR International Patient Summary-profil (FIIO)](https://profiles.ihe.net/PCC/FIIO/volume-1.html)
- [IHE PCC International Patient Summary-tillägg, 2020 (PDF)](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS_Rev1-0_PC_2020-03-17.pdf)
- [HL7 SMART Health Cards and Links Implementation Guide](https://hl7.org/fhir/uv/smart-health-cards-and-links/)
- [Dokumentation för SMART Health Links](https://docs.smarthealthit.org/smart-health-links/)
- [HL7 FHIR International Patient Access (IPA)](https://hl7.org/fhir/uv/ipa/) är en systerspecifikation för patientens API-åtkomst.
- [HL7 FHIR R4 basspecifikation](https://hl7.org/fhir/R4/), som IPS bygger på.

### Källkodsförråd

- [HL7/fhir-ips](https://github.com/HL7/fhir-ips) innehåller källan till FHIR IPS IG i FHIR Shorthand.
- [HL7/cda-ips](https://github.com/HL7/cda-ips) innehåller källan till CDA IPS IG.
- [hl7-eu/eps](https://github.com/hl7-eu/eps) innehåller källan till HL7 Europes patientsammanfattning.
- [hl7ch/ch-ips](https://github.com/hl7ch/ch-ips) innehåller den schweiziska IPS, med en visare och generator under utveckling.
- [GitHub-ämne: international-patient-summary](https://github.com/topics/international-patient-summary) listar gemenskapens förråd.

### Nationella och regionala anpassningar

- [HL7 Europe Patient Summary (EPS), fortlöpande bygge](https://build.fhir.org/ig/hl7-eu/eps/)
- [AU Patient Summary (Australien), fortlöpande bygge](https://build.fhir.org/ig/hl7au/au-fhir-ps/)
- [Trillium II IPS-struktur (HL7 Europe)](https://hl7.eu/fhir/build/trillium2/site/ipsStructure.html) kommer från EU–USA-projektet som hjälpte till att starta IPS.
- [eHealth Suisse](https://www.ehealthsuisse.ch/) är Schweiz kompetenscentrum för digital hälsa och dess IPS-införande.
- [MyHealth@EU, gränsöverskridande digitala hälsotjänster](https://health.ec.europa.eu/ehealth-digital-health-and-care/electronic-cross-border-health-services_en)
- [Xt-EHR Joint Action](https://www.xt-ehr.eu/) förbereder formaten för det europeiska hälsodataområdet, inklusive patientsammanfattningen.

### Programvara och verktyg

- [IPS Viewer](https://www.ipsviewer.com) ([källa: jddamore/IPSviewer](https://github.com/jddamore/IPSviewer)) är en IPS-visare med öppen källkod som körs i webbläsaren.
- [uwcirg/shl-ips-viewer](https://github.com/uwcirg/shl-ips-viewer) visar en IPS som delats via en SMART Health Link.
- [smart-on-fhir/smart-health-links](https://github.com/smart-on-fhir/smart-health-links) är referensimplementeringen av SMART Health Links.
- [HAPI FHIR IPS-generator](https://hapifhir.io/hapi-fhir/docs/server_ips/introduction.html) ([källa: hapifhir/hapi-fhir](https://github.com/hapifhir/hapi-fhir)) är en Java-servermodul med öppen källkod som implementerar `$summary`.
- [Dokumentation för IPS i HAPI FHIR JPA-servern](https://hapifhir.io/hapi-fhir/docs/server_jpa/ips.html)
- [Inferno IPS Test Kit](https://inferno.healthit.gov/test-kits/ips) ([källa: inferno-framework/ips-test-kit](https://github.com/inferno-framework/ips-test-kit)) är ett testkit för överensstämmelse med öppen källkod.
- [FHIR Validator](https://validator.fhir.org/) validerar IPS-buntar mot IG-profilerna.
- [Simplifier: paketet hl7.fhir.uv.ips](https://simplifier.net/packages/hl7.fhir.uv.ips) har paketet, profilerna och exempel.
- [FHIR-paketregister](https://registry.fhir.org/)
- [FHIR Shorthand (FSH) School](https://fshschool.org/) lär ut det språk som IPS IG är skriven på.
- [CommonHealth](https://www.commonhealth.org/) är en patientapp som skapar en IPS och delar den via SMART Health Links.
- [WHO SMART Trust](https://github.com/WorldHealthOrganization/smart-trust) är förtroenderamverket för WHO:s Global Digital Health Certification Network.

### Organisationer och projekt

- [Projektwebbplatsen för International Patient Summary](https://international-patient-summary.net/) har nyheter, införanderapporter och utbildning.
- [IPS för it-utvecklare inom hälsa](https://international-patient-summary.net/health-it-developer/)
- [HL7 International](https://www.hl7.org/)
- [IHE International](https://www.ihe.net/)
- [SNOMED International](https://www.snomed.org/)
- [SNOMED CT IPS Terminology](https://www.snomed.org/international-patient-summary-terminology) är en kostnadsfri delmängd för IPS-användning.
- [LOINC](https://loinc.org/) *(inte kontrollerad)*
- [Joint Initiative Council for Global Health Informatics Standardization (JIC)](http://www.jointinitiativecouncil.org/)
- [Global Digital Health Partnership (GDHP)](https://gdhp.health/)
- [WHO SMART Guidelines](https://smart.who.int/)
- [WHO Global Digital Health Certification Network](https://www.who.int/initiatives/global-digital-health-certification-network)

### Gemenskap och evenemang

- [chat.fhir.org](https://chat.fhir.org/) är FHIR-gemenskapens chatt, som har en aktiv IPS-ström.
- [HL7 FHIR Connectathons](https://www.hl7.org/events/fhir-connectathon/)
- [IHE Connectathons](https://www.ihe.net/participate/connectathon/)

### Videor

- [HIMSS20: IPS för beräkningsbara vårdriktlinjer på 200 sekunder eller mindre (IHE International, YouTube)](https://www.youtube.com/watch?v=xjEzGM8kBPw)
- [IHE Internationals YouTube-kanal](https://www.youtube.com/@IHEIntl) har Connectathon-paneler och IPS-sessioner.
- [Nyheter från IPS-projektets webbplats](https://international-patient-summary.net/) länkar till många inspelade webbseminarier, däribland:
  - IPS-panelen vid IHE North America Connectathon, 2024
  - IPS-sessionen vid FHIR DevDays 2023
  - Grahame Grieve om IPS och IPA, IHE Connectathon Montreux 2022
  - huvudanförandet vid SNOMED CT Expo 2022
  - Matthew Rahn om IPS i GDHP
  - HL7:s gränsöverskridande webbseminarium "Global Passport"
- [YouTube-sökning: International Patient Summary](https://www.youtube.com/results?search_query=international+patient+summary)

### Böcker

- Tim Benson och Grahame Grieve, [*Principles of Health Interoperability: FHIR, HL7 and SNOMED CT*](https://link.springer.com/book/10.1007/978-3-030-56883-2), 4:e upplagan, Springer, 2020. Den behandlar FHIR, kliniska sammanfattningsresurser och terminologi.

### Forskningsartiklar och artiklar

- Laleci Erturkmen G. B., Sinaci A. A., Namli T., Boonstra M., et al., "[An assessment of the European Patient Summary for clinical research: a case study in cardiology](https://doi.org/10.3389/fmed.2024.1481551)", *Frontiers in Medicine*, 2024.
- Lee H., Huang J., Huang S., Chen W., et al., "[Implementing a Cross-Border Next-Generation Personal Health Record in the Philippines and Taiwan: An Implementation Case Report Using Health Level 7 International Fast Healthcare Interoperability Resources](https://doi.org/10.2196/56272)", *JMIR Formative Research*, 2025.
- Song C., Nakayama M., "[Implementation of a Patient Summary Web Application According to the International Patient Summary and Validation in Common Use Cases in Japan](https://doi.org/10.1007/s10916-023-01993-6)", *Journal of Medical Systems*, 2023.
- Schippers D., Spil T., Stegwee R., Folmer E., Donnelly S., "[The adoption and diffusion of the International Patient Summary](https://doi.org/10.24251/hicss.2025.425)", *Proceedings of the 58th Hawaii International Conference on System Sciences (HICSS)*, 2025.
- da Silva Carvalho N., Papadimitriou A., Stegwee R., Gille H., et al., "[Accelerating European electronic health record exchange format (EEHRxF) implementation across Europe: a policy perspective](https://doi.org/10.3389/fmed.2025.1648170)", *Frontiers in Medicine*, 2025.
- Kay S., Cangioli G., Nusbaum M., "[The International Patient Summary and the extensibility requirement](https://international-patient-summary.net/the-international-patient-summary-and-the-extensibility-requirement/)", *Studies in Health Technology and Informatics* (pHealth), 2020.
- D'Amore J., Cangioli G., Hausam R., "[Advancing the International Patient Summary](https://international-patient-summary.net/advancing-the-international-patient-summary/)"
- "[Towards the Austrian Patient Summary](https://international-patient-summary.net/towards-the-austrian-patient-summary/)", *Studies in Health Technology and Informatics* (dHealth).
- "[Revival of the International Patient Summary (IPS)](https://smiledigitalhealth.com/our-blog/revival-of-the-international-patient-summary-ips)", Smile Digital Healths blogg.
- [PubMed-sökning: "international patient summary"](https://pubmed.ncbi.nlm.nih.gov/?term=%22international+patient+summary%22) för referentgranskad litteratur.


## Referenser

Numrerade hänvisningar i texten, till exempel [1], länkar till motsvarande post nedan. Länkarna kontrollerades i november 2026. Lagar, införandesiffror och versioner förändras, så kontrollera källan för det aktuella läget.

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

### Vidare läsning

Dessa källor citeras inte ovan, men är de primära referenserna för själva standarden.

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
