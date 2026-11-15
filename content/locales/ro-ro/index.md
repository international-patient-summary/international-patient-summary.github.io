# International Patient Summary (IPS)

**International Patient Summary (IPS)** este un standard mondial pentru un extras electronic scurt dintr-un dosar medical. Conține informațiile clinice de bază de care un clinician are nevoie pentru a trata un pacient în siguranță. Este conceput să fie:

- **Minimal și neexhaustiv.** Este un subset mic, selectat, al unui dosar medical, nu dosarul complet.
- **Independent de specialitate.** Orice clinician îl poate folosi, în orice disciplină.
- **Independent de afecțiune.** Nu este legat de o boală sau de un traseu de îngrijire anume.
- **Implementabil și internațional.** Se bazează pe standarde și terminologii globale, astfel încât poate fi folosit în mai multe țări, limbi și sisteme informatice.

Pe scurt, IPS răspunde la o singură întrebare a unui clinician care nu a întâlnit niciodată pacientul: *„Ce trebuie să știu chiar acum pentru a îngriji această persoană în siguranță?”*


## De ce există IPS

Informațiile medicale sunt de obicei blocate într-un dosar electronic de sănătate (DES) local, într-un sistem național sau în produsul unui furnizor. Când un pacient caută îngrijiri în altă parte, de exemplu într-un alt spital, într-o altă regiune sau într-o altă țară, clinicianul curant nu are adesea acces la acest istoric. IPS oferă tuturor un format de rezumat comun și portabil.

### Cazuri de utilizare principale

| Caz de utilizare | Descriere |
|---|---|
| **Îngrijiri neplanificate și de urgență** | Un pacient se îmbolnăvește sau este rănit departe de casă, iar clinicienii locali nu pot accesa DES-ul pacientului din țara de origine. Acesta este cazul de utilizare inițial, principal. |
| **Îngrijiri transfrontaliere** | Călători, migranți, lucrători transfrontalieri și refugiați poartă cu ei un rezumat pe care clinicienii din străinătate îl pot citi. |
| **Îngrijiri planificate și tranziții** | Trimiteri, consultații de specialitate, internări, externări și predări între furnizori. |
| **Turism medical și mobilitate** | Pacienți care aleg să primească îngrijiri într-o altă jurisdicție. |
| **Abilitarea pacientului** | Pacienții își dețin, își vizualizează și își partajează propriul rezumat dintr-o aplicație de telefon, dintr-un portal sau dintr-o copie tipărită. |


## Când se folosește IPS

Folosiți IPS atunci când cineva care nu cunoaște pacientul are nevoie rapid de o imagine de moment fiabilă și când expeditorul și destinatarul nu folosesc același sistem informatic.

### Utilizări potrivite

- **Îngrijiri de urgență și neplanificate**, mai ales departe de casă sau peste graniță. Aceasta este utilizarea pentru care a fost conceput IPS.
- **Schimb transfrontalier între sisteme naționale**, cum este serviciul MyHealth@EU al UE [[1]](#ref-1) [[2]](#ref-2).
- **Rezumate deținute de pacient**, pe care călătorii, migranții, refugiații, pelerinii sau persoanele cu afecțiuni complexe le poartă pe telefon sau pe hârtie [[3]](#ref-3).
- **Un rezumat național sau regional al pacientului.** Multe țări își creează propriul rezumat ca profil al IPS, astfel încât să poată fi schimbat și la nivel internațional [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
- **O bază comună pentru tranzițiile în îngrijire,** cum ar fi trimiterile, internările și externările, când nu este disponibil un document specializat mai bogat.
- **Un punct de plecare pentru alte seturi de date,** cum ar fi certificatele de vaccinare, datele de cercetare sau registrele care au nevoie de aceleași informații de bază [[7]](#ref-7) [[8]](#ref-8).

### Utilizări nepotrivite

- **Dosarul medical complet.** IPS este minimal în mod deliberat. Folosiți un export complet al dosarului sau un document specializat atunci când detaliile contează.
- **Documente specifice unei specialități,** cum ar fi un rezumat al tratamentului oncologic, o fișă de sarcină sau o scrisoare medicală de externare detaliată. Acestea au propriile standarde, care pot include conținut IPS sau pot face trimitere la el.
- **Fluxuri de lucru clinice în timp real în interiorul unei singure organizații.** În interiorul unui singur DES, interogați datele în direct, nu un rezumat instantaneu.
- **Evidențe juridice, de facturare sau de asigurări.** IPS este un rezumat clinic, nu o evidență administrativă sau de decontare.
- **Decizii care necesită completitudine garantată.** Un IPS este complet și actual doar în măsura în care sunt sursa și autorul său. Confirmați întotdeauna faptele critice cu pacientul, când este posibil.


## Ce conține un IPS

Un document IPS are două straturi:

1. **Un antet care înregistrează cine, ce și când:**
   - **Pacient:** identitate, date demografice și contacte.
   - **Autor:** persoana, organizația sau sistemul care a produs rezumatul.
   - **Custode (custodian):** organizația responsabilă de menținerea lui.
   - **Atestator (attester):** cine l-a verificat, dacă l-a verificat cineva.
   - **Data și ora:** când a fost creat.

2. **Un corp clinic organizat în secțiuni.** Secțiunile sunt obligatorii, recomandate sau opționale.

| Secțiune | Stare | Conținut tipic |
|---|---|---|
| **Medication Summary** (rezumatul medicației) | Obligatorie | Medicamente curente și anterioare relevante, prescripții, doze |
| **Allergies and Intolerances** (alergii și intoleranțe) | Obligatorie | Alergii la medicamente, alimente și factori de mediu; reacții și severitate |
| **Problem List** (lista de probleme) | Obligatorie | Diagnostice active, afecțiuni și probleme clinice |
| Immunizations (imunizări) | Recomandată | Vaccinuri administrate, cum ar fi tetanos, hepatită B, gripă, COVID-19 |
| History of Procedures (istoricul procedurilor) | Recomandată | Intervenții chirurgicale majore și intervenții invazive |
| Medical Devices (dispozitive medicale) | Recomandată | Implanturi și dispozitive, cum ar fi stimulatoare cardiace, stenturi, proteze |
| Diagnostic Results (rezultate diagnostice) | Recomandată | Rezultate de laborator cheie, rapoarte imagistice, anatomie patologică |
| Vital Signs (semne vitale) | Opțională | Tensiune arterială, frecvență cardiacă, greutate, înălțime, IMC |
| History of Past Illness (istoricul bolilor trecute) | Opțională | Afecțiuni vindecate și probleme semnificative din trecut |
| Functional Status (starea funcțională) | Opțională | Dizabilități și capacitatea de a desfășura activitățile zilnice |
| Plan of Care (planul de îngrijire) | Opțională | Planuri de îngrijire și recomandări de tratament |
| Social History (istoricul social) | Opțională | Tutun, alcool și alți factori relevanți de stil de viață |
| History of Pregnancy (istoricul sarcinilor) | Opțională | Starea actuală a sarcinii și istoricul sarcinilor |
| Advance Directives (directive anticipate) | Opțională | Testament de viață, preferințe privind resuscitarea, declarații de consimțământ |
| Alerts (alerte) | Opțională | Avertismente critice pentru siguranță care nu se încadrează în altă parte (adăugat în FHIR IPS STU 2) |
| Patient Story (povestea pacientului) | Opțională | Ce contează pentru pacient: nevoi, puncte forte, valori, preocupări și preferințe, în cuvintele pacientului (adăugat în FHIR IPS STU 2) |

**A spune explicit „nimic” contează.** O secțiune goală nu îi spune clinicianului dacă pacientul nu are alergii sau dacă nimeni nu le-a înregistrat. De aceea, IPS se așteaptă la afirmații explicite, precum *„nicio alergie cunoscută”*, *„nicio medicație curentă”* sau *„informație indisponibilă”*.


## Standardele din spatele IPS

IPS este o familie de standarde coordonate. Standardele ISO și CEN definesc *ce* trebuie să conțină un rezumat al pacientului. Ghidurile de implementare HL7 definesc *cum* se codifică.

| Standard | Organism | Rol |
|---|---|---|
| **EN 17269** | CEN (Comitetul European de Standardizare) | Setul de date abstract IPS, publicat în 2019 |
| **ISO 27269** | ISO (Organizația Internațională de Standardizare) | Versiunea internațională a setului de date abstract IPS, publicată în 2021 |
| **CEN/TS 17288** | CEN | Îndrumări pentru implementarea IPS în utilizarea transfrontalieră |
| **HL7 FHIR IPS Implementation Guide** | HL7 International | Codificarea modernă, prietenoasă cu API-urile, și formatul principal de implementare. STU 2 (2.0.x) a adăugat secțiunile Alerts și Patient Story, a permis secțiuni goale, a clarificat `$summary` și a trecut la terminologia SNOMED CT IPS [[9]](#ref-9). |
| **HL7 CDA IPS Implementation Guide** | HL7 International | Codificarea documentelor în XML, frecventă în infrastructurile naționale și europene existente |

Activitatea este coordonată prin **Joint Initiative Council for Global Health Informatics Standardization (JIC)**. JIC reunește ISO, CEN, HL7, SNOMED International, IHE și alții. IPS a pornit dintr-o colaborare UE–SUA din 2016 privind datele de sănătate transfrontaliere și este acum susținut de guverne și de programe de sănătate digitală din întreaga lume.


## Cum este codificat IPS cu HL7 FHIR

În FHIR, un IPS este un singur **`Bundle`** de tip `document`:

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

Puncte tehnice esențiale:

- **Fiecare secțiune are o narațiune lizibilă de către om.** Un clinician poate citi IPS într-un browser obișnuit, chiar fără software FHIR.
- **Fiecare secțiune are și intrări codificate**, adică resurse FHIR structurate pe care software-ul le poate procesa, traduce și reconcilia.
- **Profilurile restrâng resursele FHIR de bază.** De exemplu, *Patient (IPS)* și *AllergyIntolerance (IPS)* definesc datele minime și elementele „must support”.
- **Operația `$summary`** (`GET [base]/Patient/[id]/$summary`) cere unui server FHIR să genereze la cerere un IPS pentru un pacient.
- **IPS poate fi semnat și este autonom.** Un document complet poate fi stocat, trimis, semnat și verificat ca o singură unitate.


## Terminologii

Sistemele de coduri comune fac un IPS lizibil între limbi și țări:

| Terminologie | Utilizare |
|---|---|
| **SNOMED CT** | Probleme, alergii, proceduri, dispozitive, constatări clinice. Un subset gratuit, **SNOMED CT IPS Terminology**, este disponibil pentru utilizarea cu IPS, chiar și în țările care nu sunt membre. |
| **LOINC** | Tipuri de documente și secțiuni, teste de laborator, semne vitale |
| **ATC** și alte sisteme de coduri pentru medicamente | Produse medicamentoase și substanțe active |
| **UCUM** | Unități de măsură |
| **Seturi de valori ISO și HL7** | Țări, limbi, genuri administrative, motive pentru date absente și necunoscute |

Deoarece intrările sunt codificate, un sistem receptor poate afișa un IPS scris în portugheză cu etichete în engleză. Sensul codificat rămâne același.


## Cum folosesc IPS pacienții și clinicienii

Un IPS poate fi produs de un DES, de un serviciu național de dosare de sănătate, de un portal al pacientului sau de o aplicație personală de sănătate. Poate fi apoi livrat în mai multe moduri:

- **De la sistem la sistem:** prin API-uri FHIR REST, infrastructuri naționale sau gateway-uri transfrontaliere, cum ar fi rețeaua MyHealth@EU a UE.
- **Partajare mediată de pacient:** pacientul păstrează rezumatul într-un portofel sau într-o aplicație de sănătate și îl partajează la cerere.
- **SMART Health Links:** un cod QR sau un URL care oferă clinicianului acces limitat în timp, opțional protejat cu parolă, la un IPS criptat. Clinicianul îl poate deschide într-un browser web obișnuit.
- **Hârtie sau PDF:** o redare narativă tipărită, ca soluție de rezervă când nimic altceva nu funcționează.

Aplicații precum **CommonHealth** permit pacienților să-și adune înregistrările și să partajeze un IPS prin SMART Health Links.

Un scenariu tipic de urgență:

1. Un călător se prăbușește în străinătate.
2. Călătorul sau un însoțitor arată un cod QR de pe telefon.
3. Medicul de urgență îl scanează și vede în câteva secunde medicamentele, alergiile și problemele active ale călătorului.
4. Medicul evită o interacțiune medicamentoasă periculoasă și tratează pacientul în siguranță.


## Principii și alegeri de proiectare

- **Siguranța înainte de toate.** Conținutul este ales pentru relevanța clinică, nu pentru exhaustivitate.
- **Global în mod implicit, local prin extensii.** Țările creează profiluri naționale, cum ar fi variantele UE, australiană sau canadiană, care adaugă cerințe fără a rupe nucleul internațional.
- **Lizibil de om și procesabil de mașină.** Narațiunea și datele codificate coexistă.
- **Gratuit și deschis.** Specificațiile HL7 IPS și subsetul SNOMED CT pentru IPS sunt disponibile liber, pentru a reduce barierele de adoptare.
- **Confidențialitate și consimțământ.** Accesul este guvernat de legea locală și de consimțământul pacientului. Mecanisme precum SMART Health Links țin pacientul în control.


## Cum se folosește IPS

### Pentru pacienți

1. **Cereți unul.** Întrebați clinica, spitalul, portalul național de sănătate sau aplicația de sănătate dacă pot produce un IPS sau un rezumat național al pacientului bazat pe acesta.
2. **Verificați-l.** Citiți-l cât timp sunteți sănătos. Raportați orice este greșit sau lipsește, mai ales alergiile și medicamentele.
3. **Țineți-l la dumneavoastră.** Păstrați-l într-o aplicație de sănătate sau într-un portofel, ca cod QR SMART Health Link sau ca listă tipărită printre documentele de călătorie.
4. **Păstrați-l actual.** Obțineți unul nou după un diagnostic nou, un medicament nou pe termen lung, o operație sau un implant.
5. **Partajați-l intenționat.** Arătați-l clinicianului care vă tratează. Un SMART Health Link poate expira și poate cere o parolă, așa că dumneavoastră controlați cine îl vede și pentru cât timp [[10]](#ref-10).

### Pentru clinicieni

1. **Verificați mai întâi antetul.** Cine l-a scris, când și dacă l-a verificat cineva. Un rezumat vechi sau neverificat cere mai multă precauție.
2. **Citiți mai întâi secțiunile obligatorii:** alergii, medicamente și probleme.
3. **Tratați diferit „nimic cunoscut” față de „neînregistrat”.** „Nicio alergie cunoscută” este o afirmație clinică. O secțiune goală sau „necunoscut” nu este.
4. **Confirmați faptele critice** cu pacientul sau cu însoțitorul său ori de câte ori puteți.
5. **Folosiți datele codificate.** Acolo unde sistemul dumneavoastră o permite, intrările codificate permit afișarea rezumatului în limba dumneavoastră și verificarea lui după regulile privind interacțiunile medicamentoase și alergiile.
6. **Nu presupuneți că este complet.** IPS este o plasă de siguranță, nu un istoric complet.

### Pentru implementatori

1. **Alegeți specificația.** Folosiți HL7 FHIR IPS Implementation Guide curent (STU 2) sau profilul național al țării dumneavoastră. Pentru infrastructurile bazate pe CDA, folosiți ghidul CDA IPS [[9]](#ref-9) [[11]](#ref-11).
2. **Mapați datele.** Mapați datele locale pe profilurile IPS: `Patient`, `AllergyIntolerance`, `MedicationStatement`, `Condition` și așa mai departe. Cea mai mare parte a muncii este în această mapare.
3. **Mapați terminologia.** Mapați codurile locale pe SNOMED CT, LOINC și sistemele de coduri pentru medicamente. SNOMED CT IPS Terminology poate fi folosită gratuit în acest scop [[12]](#ref-12).
4. **Generați documentul.** Susțineți operația `$summary` sau construiți singuri `Bundle` și `Composition`. Includeți o narațiune lizibilă pentru fiecare secțiune și afirmații explicite „nimic cunoscut” sau „indisponibil”.
5. **Validați-l.** Verificați fiecare document generat cu FHIR Validator și cu un set de teste de conformitate, cum ar fi Inferno IPS Test Kit [[13]](#ref-13).
6. **Semnați-l și partajați-l.** Decideți cum sunt semnate, stocate și trimise documentele: un API, un registru de documente, un gateway transfrontalier sau un SMART Health Link.
7. **Consumați-l în siguranță.** Ca receptor, afișați narațiunea chiar și când nu puteți procesa toate intrările codificate, păstrați vizibile sursa și autorul și nu îmbinați niciodată în tăcere datele primite în dosarul local.
8. **Testați cu alții.** Verificați interoperabilitatea cu alți furnizori și cu alte țări la Connectathon-urile IHE și HL7 înainte de punerea în funcțiune.

### Pentru guverne și organizații de sănătate

1. **Adoptați un profil național** care se construiește pe IPS, în loc de un format separat, astfel încât rezumatul național să fie internațional în mod implicit [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
2. **Stabiliți guvernanța:** cine poate crea, actualiza și atesta un rezumat și cine răspunde de corectitudinea lui.
3. **Stabiliți licențierea terminologiei:** calitatea de membru SNOMED CT sau folosirea subsetului gratuit IPS.
4. **Stabiliți identitatea, consimțământul și încrederea:** cum sunt identificați pacienții, cum se înregistrează consimțământul și ce cadru de încredere, cum ar fi MyHealth@EU sau Global Digital Health Certification Network al OMS, se folosește pentru verificarea documentelor [[1]](#ref-1) [[14]](#ref-14).
5. **Publicați ce ați construit** în IPS Implementation Registry, pentru ca alții să poată învăța din asta [[15]](#ref-15).


## Integrarea IPS cu sistemele de sănătate

Un IPS este rareori un sistem separat. Este o vizualizare a datelor care există deja în DES-uri, schimburi de informații de sănătate, dosare naționale și aplicații personale de sănătate.

| Model de integrare | Cum funcționează | Exemple |
|---|---|---|
| **Generat de DES** | DES-ul construiește un IPS din propriile date la cerere, adesea prin operația FHIR `$summary`. | Furnizori de DES și servere FHIR precum HAPI FHIR, care are un modul generator de IPS |
| **Dosar național sau regional** | Un serviciu național de rezumate ale pacienților stochează un profil al IPS și îl pune la dispoziția furnizorilor autorizați. | PS-CA din Canada, AU Patient Summary din Australia, dosarul electronic al pacientului din Elveția cu CH IPS [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6) |
| **Gateway transfrontalier** | Fiecare țară operează un punct național de contact. Acesta transformă rezumatul țării de origine în formatul de schimb convenit, îl trimite peste graniță, iar țara receptoare îl afișează în limba locală. | MyHealth@EU National Contact Points for eHealth [[1]](#ref-1) [[2]](#ref-2) |
| **Rețea regională de schimb** | Ministerele sănătății schimbă documente IPS prin servere FHIR naționale, sub un ghid regional comun. | IPS-LAC al RACSEL și Pan American Highway for Digital Health (PH4H) în America Latină și Caraibe [[16]](#ref-16) |
| **Mediat de pacient** | Pacientul păstrează IPS într-o aplicație sau un portofel și îl partajează cu un cod QR sau un SMART Health Link. | CommonHealth; activitatea rețelei de încredere a OMS privind IPS pentru pelerinaj [[10]](#ref-10) [[14]](#ref-14) |
| **Acces prin API** | Aplicațiile preiau un IPS pentru un pacient autorizat printr-un API FHIR. | International Patient Access (IPA); rețele din SUA precum Flexpa, care a adăugat suport IPS în cadrul CMS Interoperability Framework [[17]](#ref-17) [[18]](#ref-18) |

Puncte de integrare de planificat:

- **Partajarea documentelor:** profilurile IHE precum MHD (FHIR) și XDS (registre de documente) stochează și găsesc documente IPS. Profilurile de conținut IHE IPS adaugă reguli de conformitate și testare [[11]](#ref-11).
- **Identitatea pacientului:** IHE PIXm și PDQm sau un identificator național potrivesc pacientul între sisteme.
- **Documente existente:** multe sisteme produc deja CDA, C-CDA sau rezumate naționale. Maparea lor pe IPS este de obicei mai ușoară decât a o lua de la capăt, dar verificați diferențele de cardinalitate, seturi de valori și sisteme de coduri.
- **Profiluri naționale:** un nucleu național, cum ar fi US Core, AU Core, CH Core sau JP Core, poate diferi de IPS. Profilurile naționale ale rezumatului pacientului le reconciliază [[5]](#ref-5) [[6]](#ref-6) [[19]](#ref-19).
- **Traducere și afișare:** receptorii ar trebui să redea narațiunea și să traducă intrările codificate folosind denumirile afișate ale codurilor în limba receptorului.
- **Securitate:** folosiți TLS, documente semnate acolo unde se cere, jurnalizare de audit (de exemplu IHE ATNA sau BALP) și control al accesului legat de consimțământ.


## Adoptarea actuală

IPS a trecut de la proiecte-pilot la programe naționale și regionale. Situația se schimbă rapid, așa că verificați sursele legate pentru poziția cea mai recentă.

- **IPS Implementation Registry.** Comunitatea IPS întreține un registru public al implementărilor. La mijlocul anului 2026 conținea 34 de intrări, de la proiectul argentinian IPS-LAC mediat de furnizori până la Better Health Program din Vietnam [[15]](#ref-15).
- **Ecosistemul FHIR.** În sondajul State of FHIR 2025 realizat de HL7 International și Firely, 42 de respondenți au spus că IPS stă la baza specificațiilor lor naționale FHIR, mai mult decât orice alt ghid internațional [[20]](#ref-20).
- **Cercetare.** Un studiu din 2025 privind adoptarea IPS a intervievat părțile interesate, care au indicat calitatea mai bună a îngrijirii și siguranța pacienților drept principalele beneficii [[21]](#ref-21).

| Țară sau regiune | Stare |
|---|---|
| **Uniunea Europeană și SEE** | MyHealth@EU schimbă rezumate ale pacienților și e-prescripții între țări. O prezentare a Comisiei Europene din 2026 a raportat 17 state membre plus Norvegia în funcțiune, majoritatea celorlalte planificând să se alăture [[2]](#ref-2) [[22]](#ref-22). Regulamentul EHDS face obligatoriu schimbul de rezumate ale pacienților până în 2029 [[23]](#ref-23). |
| **Canada** | Rezumatul pan-canadian al pacientului (PS-CA), aprobat de Canada Health Infoway în octombrie 2022, se bazează pe IPS, cu adaptări canadiene [[4]](#ref-4). |
| **Australia** | AU Patient Summary, construit pe IPS și AU Core, este dezvoltat de HL7 Australia prin programul Sparked [[5]](#ref-5) [[24]](#ref-24). |
| **Elveția** | CH IPS 2.0.0 (utilizare de probă) de la HL7 Switzerland se bazează pe IPS și CH Core. Un profil separat adaugă ceea ce are nevoie dosarul electronic elvețian al pacientului [[6]](#ref-6). |
| **Statele Unite** | Niciun mandat federal pentru IPS. SUA folosesc US Core și USCDI. Agențiile federale participă la lucrările internaționale privind IPS, iar unele rețele susțin IPS în mod voluntar [[18]](#ref-18). |
| **America Latină și Caraibe** | Ministerele sănătății din RACSEL folosesc ghidul regional IPS-LAC. În 2023, 16 țări au schimbat documente IPS-LAC la un connectathon la São Paulo [[16]](#ref-16). |
| **Japonia** | Cercetătorii au construit și validat o aplicație de rezumat al pacientului bazată pe IPS pentru cazuri de utilizare japoneze obișnuite, folosind JP Core [[19]](#ref-19). |
| **Taiwan și Filipine** | Un raport de implementare din 2025 descrie un dosar personal de sănătate transfrontalier care folosește FHIR și este aliniat cu IPS [[25]](#ref-25). |
| **G7** | În 2021, miniștrii sănătății din G7 s-au angajat să lucreze pentru IPS și au publicat o foaie de parcurs IPS [[26]](#ref-26). |
| **OMS** | Global Digital Health Certification Network al OMS include domenii de încredere bazate pe IPS, cum ar fi IPS verificabil pentru pelerinaj [[14]](#ref-14). |


## Legi, reglementări și politici pe țări și regiuni

IPS este un standard, nu o lege. Legile hotărăsc dacă o țară trebuie să schimbe rezumate ale pacienților, în ce format și în ce reguli de confidențialitate. Acesta este un rezumat, nu consiliere juridică. Verificați întotdeauna textul actual al legii.

| Jurisdicție | Lege sau politică | Ce înseamnă pentru IPS |
|---|---|---|
| **Uniunea Europeană** | **Regulamentul privind spațiul european al datelor privind sănătatea (EHDS), (UE) 2025/327.** Publicat la 5 martie 2025; în vigoare din 26 martie 2025 [[23]](#ref-23) [[27]](#ref-27). | Rezumatele pacienților sunt o „categorie prioritară”. Schimbul în formatul european de schimb al dosarelor electronice de sănătate trebuie să funcționeze în fiecare stat membru până în 2029. Imaginile medicale, rezultatele analizelor și scrisorile medicale de externare urmează până în 2031 [[28]](#ref-28). Formatul rezumatelor pacienților se bazează pe HL7 IPS. |
| **Uniunea Europeană** | **Directiva 2011/24/UE** privind aplicarea drepturilor pacienților în cadrul asistenței medicale transfrontaliere [[29]](#ref-29). | A creat rețeaua eHealth (eHealth Network), care a convenit ghidurile privind rezumatul pacientului din spatele MyHealth@EU. |
| **Uniunea Europeană** | **Regulamentul general privind protecția datelor (GDPR), (UE) 2016/679** [[30]](#ref-30). | Datele privind sănătatea sunt o categorie specială. Fiecare schimb de IPS necesită un temei legal și garanții adecvate. |
| **Statele Unite** | **21st Century Cures Act și regulile privind blocarea informațiilor** [[31]](#ref-31); **CMS Interoperability Framework** voluntar (2025) [[17]](#ref-17). | Nicio lege nu cere IPS. Legile cer acces la informațiile electronice de sănătate și schimbul lor, folosind US Core și USCDI. Susținerea IPS este voluntară. |
| **Canada** | Legile provinciale și teritoriale privind informațiile de sănătate. **Connected Care for Canadians Act** (proiectul de lege C-72) federal a fost introdus în 2024, dar nu a fost adoptat înainte ca Parlamentul să fie prorogat în 2025. | PS-CA este o specificație pan-canadiană, nu o cerință legală. Adoptarea este condusă de provincii și teritorii împreună cu Canada Health Infoway [[4]](#ref-4). |
| **Regatul Unit** | **Data (Use and Access) Act 2025** [[32]](#ref-32). | Include competențe de a stabili standarde de informare pentru IT-ul din sănătate și din îngrijirea socială a adulților. Regatul Unit a găzduit angajamentul G7 privind IPS din 2021 [[26]](#ref-26). |
| **Australia** | **My Health Records Act 2012** și amendamentele din 2025 privind „partajarea implicită”. | AU Patient Summary este o specificație națională dezvoltată prin Sparked [[5]](#ref-5) [[24]](#ref-24). |
| **Elveția** | **Legea federală din 19 iunie 2015 privind dosarul electronic al pacientului (EPRA, SR 816.1)**, în vigoare din 15 aprilie 2017 [[33]](#ref-33). | CH IPS include un profil pentru documentele din dosarul electronic elvețian al pacientului [[6]](#ref-6). |
| **America Latină și Caraibe** | Acorduri regionale prin RACSEL și PH4H, cu sprijinul Inter-American Development Bank pentru un cadru juridic regional [[16]](#ref-16). | IPS-LAC este formatul regional convenit pentru schimbul transfrontalier. |
| **G7** | **Comunicatul miniștrilor sănătății**, Oxford, iunie 2021, și **G7 IPS Roadmap**, decembrie 2021 [[26]](#ref-26) [[34]](#ref-34). | Un angajament politic de a lucra pentru IPS și accesul pacienților, nu o lege obligatorie. |


## Avantaje și dezavantaje

| Avantaje | Dezavantaje |
|---|---|
| **Îngrijiri neplanificate mai sigure.** Clinicienii văd alergiile, medicamentele și problemele în câteva secunde. | **Valorează cât sursa sa.** Datele sursă depășite sau greșite dau un rezumat depășit sau greșit. |
| **Un singur format, în toată lumea.** O singură implementare servește nevoile naționale și transfrontaliere. | **Variații naționale.** Profilurile naționale adaugă reguli, așa că un „IPS valid” într-o țară poate necesita lucru pentru a fi acceptat în alta. |
| **Construit pe standarde deschise și mature:** ISO, CEN, HL7 FHIR și CDA, SNOMED CT și LOINC. | **Povara terminologiei.** Maparea codurilor locale pe SNOMED CT și LOINC este muncă grea, iar SNOMED CT complet necesită o licență dincolo de subsetul gratuit IPS. |
| **Lizibil și calculabil.** Narațiune pentru oameni, date codificate pentru software și traducere. | **Narațiunea și datele codificate pot diferi** dacă generatorul este neglijent, iar receptorii pot avea încredere în cea greșită. |
| **Abilitarea pacientului.** Pacienții își pot deține și partaja propriul rezumat. | **Risc pentru confidențialitate și consimțământ.** Un rezumat portabil este sensibil, iar legile și modelele de consimțământ diferă de la o țară la alta. |
| **Specificații gratuite** și terminologie IPS gratuită reduc costurile [[12]](#ref-12). | **Schimbări dese de versiune.** STU 1, STU 1.1 și STU 2 coexistă, iar formatul EHDS face trimitere la o versiune anterioară [[28]](#ref-28). |
| **Reutilizabil** pentru certificate de vaccinare, cercetare și registre [[7]](#ref-7) [[8]](#ref-8). | **Minimal în mod deliberat.** Nu înlocuiește dosarele complete sau documentele de specialitate, iar lacunele pentru utilizarea secundară necesită extensii [[7]](#ref-7). |
| **Sprijin puternic** din partea guvernelor, UE, G7, OMS și organismelor de standardizare. | **Adoptare inegală.** Multe țări și furnizori sunt încă în faza de pilot, iar conștientizarea pacienților este scăzută. |


## Planuri și direcții viitoare

- **UE, 2029:** schimbul de rezumate ale pacienților și de e-prescripții funcționează în toate statele membre ale UE, conform EHDS [[23]](#ref-23) [[28]](#ref-28).
- **UE, 2031:** imaginile medicale, rezultatele de laborator și scrisorile medicale de externare se alătură formatului european de schimb al dosarelor electronice de sănătate [[28]](#ref-28).
- **Extinderea MyHealth@EU:** mai multe țări se alătură și apar servicii noi pentru rezultate de laborator, scrisori medicale de externare și imagini medicale [[2]](#ref-2) [[22]](#ref-22).
- **Adoptarea FHIR IPS STU 2:** implementatorii trec la secțiunile Alerts și Patient Story, la secțiuni goale explicite și la terminologia SNOMED CT IPS [[9]](#ref-9).
- **Australia:** publicarea AU Patient Summary Release 1, planificată pentru 2026 [[24]](#ref-24).
- **IPS Best Practices Project:** un efort comun de documentare a lecțiilor învățate, cu lucrări care încep în 2026.
- **Rețeaua de încredere a OMS:** mai multe domenii de încredere bazate pe IPS pentru documente medicale verificabile și portabile [[14]](#ref-14).
- **SMART Health Links:** standardizate prin HL7, pentru partajare controlată de pacient [[10]](#ref-10).
- **America Latină și Caraibe:** schimb IPS-LAC mai larg prin PH4H [[16]](#ref-16).
- **Cercetare și utilizare secundară:** lucrări pentru extinderea rezumatelor pacienților pentru cercetare clinică și IA, păstrând nucleul minimal [[7]](#ref-7).


## Glosar

| Termen | Semnificație |
|---|---|
| **IPS** | International Patient Summary |
| **FHIR** | Fast Healthcare Interoperability Resources, standardul modern HL7 bazat pe API |
| **CDA** | Clinical Document Architecture, standardul HL7 pentru documente XML |
| **IG** | Implementation Guide, un set de profiluri și reguli pentru aplicarea unui standard |
| **Profil** | O versiune restrânsă a unei resurse FHIR pentru o utilizare specifică |
| **SNOMED CT** | Systematized Nomenclature of Medicine – Clinical Terms |
| **LOINC** | Logical Observation Identifiers Names and Codes |
| **SMART Health Links** | Un standard pentru partajarea datelor de sănătate printr-un link sau un cod QR |
| **JIC** | Joint Initiative Council for Global Health Informatics Standardization |


## Aflați mai multe

- HL7 FHIR IPS Implementation Guide: <https://hl7.org/fhir/uv/ips/>
- IPS continuous build: <https://build.fhir.org/ig/HL7/fhir-ips/>
- International Patient Summary project site: <https://international-patient-summary.net/>
- ISO 27269 (Health informatics — International patient summary): <https://www.iso.org/standard/79491.html>
- SNOMED CT IPS Terminology: <https://www.snomed.org/international-patient-summary-terminology>
- SMART Health Links: <https://docs.smarthealthit.org/smart-health-links/>


## Resurse

Aceste linkuri acoperă surse, specificații, software, proiecte, videoclipuri, cărți și cercetări despre IPS. Cele mai multe au fost verificate la scrierea acestei pagini. Câteva site-uri ale editorilor blochează verificările automate și sunt marcate *(neverificat)*.

### Specificații și standarde oficiale

- [HL7 FHIR IPS Implementation Guide, current published version](https://hl7.org/fhir/uv/ips/) este specificația FHIR autoritară.
- [HL7 FHIR IPS Implementation Guide, STU 2](https://hl7.org/fhir/uv/ips/STU2/)
- [HL7 FHIR IPS Implementation Guide, STU 1.1](https://hl7.org/fhir/uv/ips/STU1.1/)
- [HL7 FHIR IPS publication history](https://www.hl7.org/fhir/uv/ips/history.html) enumeră fiecare versiune publicată.
- [HL7 FHIR IPS continuous build](https://build.fhir.org/ig/HL7/fhir-ips/) este cea mai recentă lucrare în curs, încă nevotată.
- [Structure of the International Patient Summary](https://hl7.org/fhir/uv/ips/en/Structure-of-the-International-Patient-Summary.html) explică secțiunile și profilurile.
- [IPS design conventions](https://build.fhir.org/ig/HL7/fhir-ips/en/Design-Conventions.html) tratează must-support, datele absente și narațiunea.
- [IPS generation and data inclusion](https://build.fhir.org/ig/HL7/fhir-ips/en/Generation-and-Data-Inclusion.html) tratează `$summary` și modul de selectare a conținutului.
- [HL7 CDA IPS Implementation Guide, continuous build](https://build.fhir.org/ig/HL7/CDA-IPS/)
- [HL7 CDA IPS product brief](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=483)
- [ISO 27269, Health informatics — International patient summary](https://www.iso.org/standard/79491.html) *(neverificat)*
- [ISO/TC 215 Health informatics committee](https://www.iso.org/committee/54960.html) *(neverificat)*
- [IHE FHIR International Patient Summary profile (FIIO)](https://profiles.ihe.net/PCC/FIIO/volume-1.html)
- [IHE PCC International Patient Summary supplement, 2020 (PDF)](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS_Rev1-0_PC_2020-03-17.pdf)
- [HL7 SMART Health Cards and Links Implementation Guide](https://hl7.org/fhir/uv/smart-health-cards-and-links/)
- [SMART Health Links documentation](https://docs.smarthealthit.org/smart-health-links/)
- [HL7 FHIR International Patient Access (IPA)](https://hl7.org/fhir/uv/ipa/) este o specificație soră pentru accesul pacientului prin API.
- [HL7 FHIR R4 base specification](https://hl7.org/fhir/R4/), pe care se construiește IPS.

### Depozite de cod sursă

- [HL7/fhir-ips](https://github.com/HL7/fhir-ips) conține sursa FHIR IPS IG în FHIR Shorthand.
- [HL7/cda-ips](https://github.com/HL7/cda-ips) conține sursa CDA IPS IG.
- [hl7-eu/eps](https://github.com/hl7-eu/eps) conține sursa HL7 Europe Patient Summary.
- [hl7ch/ch-ips](https://github.com/hl7ch/ch-ips) conține IPS elvețian, cu un vizualizator și un generator în curs de dezvoltare.
- [GitHub topic: international-patient-summary](https://github.com/topics/international-patient-summary) enumeră depozitele comunității.

### Adaptări naționale și regionale

- [HL7 Europe Patient Summary (EPS), continuous build](https://build.fhir.org/ig/hl7-eu/eps/)
- [AU Patient Summary (Australia), continuous build](https://build.fhir.org/ig/hl7au/au-fhir-ps/)
- [Trillium II IPS structure (HL7 Europe)](https://hl7.eu/fhir/build/trillium2/site/ipsStructure.html) provine din proiectul UE–SUA care a ajutat la lansarea IPS.
- [eHealth Suisse](https://www.ehealthsuisse.ch/) este centrul de competență al Elveției pentru sănătatea digitală și adoptarea IPS.
- [MyHealth@EU, cross-border digital health services](https://health.ec.europa.eu/ehealth-digital-health-and-care/electronic-cross-border-health-services_en)
- [Xt-EHR Joint Action](https://www.xt-ehr.eu/) pregătește formatele spațiului european al datelor privind sănătatea, inclusiv rezumatul pacientului.

### Software și instrumente

- [IPS Viewer](https://www.ipsviewer.com) ([source: jddamore/IPSviewer](https://github.com/jddamore/IPSviewer)) este un vizualizator IPS open-source, care rulează în browser.
- [uwcirg/shl-ips-viewer](https://github.com/uwcirg/shl-ips-viewer) vizualizează un IPS partajat printr-un SMART Health Link.
- [smart-on-fhir/smart-health-links](https://github.com/smart-on-fhir/smart-health-links) este implementarea de referință a SMART Health Links.
- [HAPI FHIR IPS generator](https://hapifhir.io/hapi-fhir/docs/server_ips/introduction.html) ([source: hapifhir/hapi-fhir](https://github.com/hapifhir/hapi-fhir)) este un modul de server Java open-source care implementează `$summary`.
- [HAPI FHIR JPA server IPS documentation](https://hapifhir.io/hapi-fhir/docs/server_jpa/ips.html)
- [Inferno IPS Test Kit](https://inferno.healthit.gov/test-kits/ips) ([source: inferno-framework/ips-test-kit](https://github.com/inferno-framework/ips-test-kit)) este un set de teste de conformitate open-source.
- [FHIR Validator](https://validator.fhir.org/) validează pachetele IPS în raport cu profilurile IG.
- [Simplifier: hl7.fhir.uv.ips package](https://simplifier.net/packages/hl7.fhir.uv.ips) are pachetul, profilurile și exemplele.
- [FHIR package registry](https://registry.fhir.org/)
- [FHIR Shorthand (FSH) School](https://fshschool.org/) predă limbajul în care este scris IPS IG.
- [CommonHealth](https://www.commonhealth.org/) este o aplicație pentru pacienți care generează un IPS și îl partajează prin SMART Health Links.
- [WHO SMART Trust](https://github.com/WorldHealthOrganization/smart-trust) este cadrul de încredere pentru Global Digital Health Certification Network al OMS.

### Organizații și proiecte

- [International Patient Summary project site](https://international-patient-summary.net/) are știri, rapoarte de adoptare și materiale educaționale.
- [IPS for health IT developers](https://international-patient-summary.net/health-it-developer/)
- [HL7 International](https://www.hl7.org/)
- [IHE International](https://www.ihe.net/)
- [SNOMED International](https://www.snomed.org/)
- [SNOMED CT IPS Terminology](https://www.snomed.org/international-patient-summary-terminology) este un subset gratuit pentru utilizarea cu IPS.
- [LOINC](https://loinc.org/) *(neverificat)*
- [Joint Initiative Council for Global Health Informatics Standardization (JIC)](http://www.jointinitiativecouncil.org/)
- [Global Digital Health Partnership (GDHP)](https://gdhp.health/)
- [WHO SMART Guidelines](https://smart.who.int/)
- [WHO Global Digital Health Certification Network](https://www.who.int/initiatives/global-digital-health-certification-network)

### Comunitate și evenimente

- [chat.fhir.org](https://chat.fhir.org/) este chatul comunității FHIR, care are un flux activ dedicat IPS.
- [HL7 FHIR Connectathons](https://www.hl7.org/events/fhir-connectathon/)
- [IHE Connectathons](https://www.ihe.net/participate/connectathon/)

### Videoclipuri

- [HIMSS20: IPS for computable care guidelines in 200 seconds or less (IHE International, YouTube)](https://www.youtube.com/watch?v=xjEzGM8kBPw)
- [IHE International YouTube channel](https://www.youtube.com/@IHEIntl) are panouri de la Connectathon și sesiuni despre IPS.
- [IPS project site news](https://international-patient-summary.net/) trimite la multe webinare înregistrate, printre care:
  - panelul despre IPS de la IHE North America Connectathon, 2024
  - sesiunea despre IPS de la FHIR DevDays 2023
  - Grahame Grieve despre IPS și IPA, IHE Connectathon Montreux 2022
  - discursul principal de la SNOMED CT Expo 2022
  - Matthew Rahn despre IPS în GDHP
  - webinarul HL7 „Global Passport” privind utilizarea transfrontalieră
- [YouTube search: International Patient Summary](https://www.youtube.com/results?search_query=international+patient+summary)

### Cărți

- Tim Benson și Grahame Grieve, [*Principles of Health Interoperability: FHIR, HL7 and SNOMED CT*](https://link.springer.com/book/10.1007/978-3-030-56883-2), ediția a 4-a, Springer, 2020. Acoperă FHIR, resursele de rezumat clinic și terminologia.

### Lucrări de cercetare și articole

- Laleci Erturkmen G. B., Sinaci A. A., Namli T., Boonstra M., et al., "[An assessment of the European Patient Summary for clinical research: a case study in cardiology](https://doi.org/10.3389/fmed.2024.1481551)", *Frontiers in Medicine*, 2024.
- Lee H., Huang J., Huang S., Chen W., et al., "[Implementing a Cross-Border Next-Generation Personal Health Record in the Philippines and Taiwan: An Implementation Case Report Using Health Level 7 International Fast Healthcare Interoperability Resources](https://doi.org/10.2196/56272)", *JMIR Formative Research*, 2025.
- Song C., Nakayama M., "[Implementation of a Patient Summary Web Application According to the International Patient Summary and Validation in Common Use Cases in Japan](https://doi.org/10.1007/s10916-023-01993-6)", *Journal of Medical Systems*, 2023.
- Schippers D., Spil T., Stegwee R., Folmer E., Donnelly S., "[The adoption and diffusion of the International Patient Summary](https://doi.org/10.24251/hicss.2025.425)", *Proceedings of the 58th Hawaii International Conference on System Sciences (HICSS)*, 2025.
- da Silva Carvalho N., Papadimitriou A., Stegwee R., Gille H., et al., "[Accelerating European electronic health record exchange format (EEHRxF) implementation across Europe: a policy perspective](https://doi.org/10.3389/fmed.2025.1648170)", *Frontiers in Medicine*, 2025.
- Kay S., Cangioli G., Nusbaum M., "[The International Patient Summary and the extensibility requirement](https://international-patient-summary.net/the-international-patient-summary-and-the-extensibility-requirement/)", *Studies in Health Technology and Informatics* (pHealth), 2020.
- D'Amore J., Cangioli G., Hausam R., "[Advancing the International Patient Summary](https://international-patient-summary.net/advancing-the-international-patient-summary/)"
- "[Towards the Austrian Patient Summary](https://international-patient-summary.net/towards-the-austrian-patient-summary/)", *Studies in Health Technology and Informatics* (dHealth).
- "[Revival of the International Patient Summary (IPS)](https://smiledigitalhealth.com/our-blog/revival-of-the-international-patient-summary-ips)", Smile Digital Health blog.
- [PubMed search: "international patient summary"](https://pubmed.ncbi.nlm.nih.gov/?term=%22international+patient+summary%22) pentru literatură evaluată de specialiști.


## References

Citările numerotate din text, precum [1], trimit la intrarea corespunzătoare de mai jos. Linkurile au fost verificate în noiembrie 2026. Legile, cifrele privind adoptarea și versiunile se schimbă, așa că verificați sursa pentru situația actuală.

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

Aceste surse nu sunt citate mai sus, dar sunt referințele principale pentru standardul în sine.

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
