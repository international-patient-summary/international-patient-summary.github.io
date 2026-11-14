# International Patient Summary (IPS)

L'**International Patient Summary (IPS)**, o Sintesi Internazionale del Paziente, è uno standard mondiale per un breve estratto elettronico della cartella clinica. Contiene i fatti clinici di base di cui un clinico ha bisogno per curare un paziente in sicurezza. È progettato per essere:

- **Minimo e non esaustivo.** È un piccolo sottoinsieme selezionato di una cartella clinica, non la cartella completa.
- **Indipendente dalla specialità.** Qualsiasi clinico può usarlo, in qualsiasi disciplina.
- **Indipendente dalla patologia.** Non è legato a una malattia o a un percorso di cura particolare.
- **Implementabile e internazionale.** Si basa su standard e terminologie globali, quindi può essere usato tra paesi, lingue e sistemi informatici diversi.

In breve, l'IPS risponde a una domanda per un clinico che non ha mai incontrato il paziente: *"Che cosa devo sapere adesso per prendermi cura di questa persona in sicurezza?"*


## Perché esiste l'IPS

Le informazioni sanitarie sono solitamente bloccate all'interno di una cartella clinica elettronica (EHR) locale, di un sistema nazionale o del prodotto di un fornitore. Quando un paziente cerca cure altrove, ad esempio in un altro ospedale, regione o paese, il clinico curante spesso non ha accesso a quella storia. L'IPS offre a tutti un formato di sintesi condiviso e portabile.

### Casi d'uso principali

| Caso d'uso | Descrizione |
|---|---|
| **Cure non programmate e di emergenza** | Un paziente si ammala o si ferisce lontano da casa, e i clinici locali non riescono ad accedere all'EHR del suo paese d'origine. È il caso d'uso originario e principale. |
| **Cure transfrontaliere** | Viaggiatori, migranti, lavoratori transfrontalieri e rifugiati portano con sé una sintesi che i clinici all'estero possono leggere. |
| **Cure programmate e transizioni** | Invii, consulenze specialistiche, ricoveri, dimissioni e passaggi di consegne tra erogatori. |
| **Turismo sanitario e mobilità** | Pazienti che scelgono di ricevere cure in un'altra giurisdizione. |
| **Empowerment del paziente** | I pazienti conservano, consultano e condividono la propria sintesi da un'app per smartphone, un portale o una copia stampata. |


## Quando usare l'IPS

Usa l'IPS quando qualcuno che non conosce il paziente ha bisogno rapidamente di un'istantanea affidabile, e quando mittente e destinatario non condividono un sistema informatico.

### Buoni utilizzi

- **Cure di emergenza e non programmate**, soprattutto lontano da casa o oltre un confine. È l'uso per cui l'IPS è stato progettato.
- **Scambio transfrontaliero tra sistemi nazionali**, come il servizio MyHealth@EU dell'UE [[1]](#ref-1) [[2]](#ref-2).
- **Sintesi tenute dal paziente**, che viaggiatori, migranti, rifugiati, pellegrini o persone con patologie complesse portano su uno smartphone o su carta [[3]](#ref-3).
- **Una sintesi paziente nazionale o regionale.** Molti paesi costruiscono la propria sintesi come profilo dell'IPS, in modo che possa essere scambiata anche a livello internazionale [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
- **Una base comune per le transizioni di cura,** come invii, ricoveri e dimissioni, quando non è disponibile un documento specialistico più ricco.
- **Un punto di partenza per altri insiemi di dati,** come certificati di vaccinazione, dati di ricerca o registri che richiedono gli stessi fatti essenziali [[7]](#ref-7) [[8]](#ref-8).

### Cattivi utilizzi

- **La cartella clinica completa.** L'IPS è deliberatamente minimo. Usa un'esportazione completa della cartella o un documento specialistico quando il dettaglio conta.
- **Documenti specifici di una specialità,** come un riepilogo del trattamento oncologico, una cartella di maternità o una lettera di dimissione dettagliata. Hanno propri standard, che possono includere o richiamare contenuti dell'IPS.
- **Flussi di lavoro clinici in tempo reale all'interno di un'organizzazione.** All'interno di una singola EHR, interroga i dati in tempo reale anziché un'istantanea di sintesi.
- **Documenti legali, di fatturazione o assicurativi.** L'IPS è una sintesi clinica, non un documento amministrativo o di rimborso.
- **Decisioni che richiedono completezza garantita.** Un IPS è completo e aggiornato solo quanto la sua fonte e il suo autore. Conferma sempre i fatti critici con il paziente, quando possibile.


## Che cosa contiene un IPS

Un documento IPS ha due livelli:

1. **Un'intestazione che registra chi, che cosa e quando:**
   - **Paziente (Patient):** identità, dati demografici e contatti.
   - **Autore (Author):** la persona, l'organizzazione o il sistema che ha prodotto la sintesi.
   - **Custode (Custodian):** l'organizzazione responsabile della sua manutenzione.
   - **Attestatore (Attester):** chi l'ha verificata, se qualcuno l'ha fatto.
   - **Data e ora:** quando è stata creata.

2. **Un corpo clinico organizzato in sezioni.** Le sezioni sono obbligatorie, raccomandate o facoltative.

| Sezione | Stato | Contenuto tipico |
|---|---|---|
| **Medication Summary** (Riepilogo dei farmaci) | Obbligatoria | Farmaci attuali e passati rilevanti, prescrizioni, dosaggio |
| **Allergies and Intolerances** (Allergie e intolleranze) | Obbligatoria | Allergie a farmaci, alimenti e ambiente; reazioni e gravità |
| **Problem List** (Elenco dei problemi) | Obbligatoria | Diagnosi attive, condizioni e problemi clinici |
| Immunizations (Immunizzazioni) | Raccomandata | Vaccini somministrati, come tetano, epatite B, influenza, COVID-19 |
| History of Procedures (Storia delle procedure) | Raccomandata | Interventi chirurgici maggiori e procedure invasive |
| Medical Devices (Dispositivi medici) | Raccomandata | Impianti e dispositivi, come pacemaker, stent, protesi |
| Diagnostic Results (Risultati diagnostici) | Raccomandata | Principali esiti di laboratorio, referti di diagnostica per immagini, anatomia patologica |
| Vital Signs (Segni vitali) | Facoltativa | Pressione arteriosa, frequenza cardiaca, peso, altezza, BMI |
| History of Past Illness (Storia delle malattie passate) | Facoltativa | Condizioni risolte e problemi passati significativi |
| Functional Status (Stato funzionale) | Facoltativa | Disabilità e capacità di svolgere le attività quotidiane |
| Plan of Care (Piano di cura) | Facoltativa | Piani di cura e raccomandazioni terapeutiche |
| Social History (Anamnesi sociale) | Facoltativa | Tabacco, alcol e altri fattori di stile di vita rilevanti |
| History of Pregnancy (Storia delle gravidanze) | Facoltativa | Stato attuale di gravidanza e storia delle gravidanze |
| Advance Directives (Disposizioni anticipate) | Facoltativa | Testamento biologico, preferenze di rianimazione, dichiarazioni di consenso |
| Alerts (Avvisi) | Facoltativa | Avvertenze critiche per la sicurezza che non trovano posto altrove (aggiunta in FHIR IPS STU 2) |
| Patient Story (Storia del paziente) | Facoltativa | Ciò che conta per il paziente: bisogni, punti di forza, valori, preoccupazioni e preferenze, nei termini del paziente stesso (aggiunta in FHIR IPS STU 2) |

**Dire esplicitamente "niente" è importante.** Una sezione vuota non dice al clinico se il paziente non ha allergie o se nessuno le ha registrate. L'IPS prevede quindi dichiarazioni esplicite come *"nessuna allergia nota"*, *"nessun farmaco attuale"* o *"informazione non disponibile"*.


## Gli standard alla base dell'IPS

L'IPS è una famiglia di standard coordinati. Gli standard ISO e CEN definiscono *che cosa* deve contenere una sintesi del paziente. Le guide di implementazione HL7 definiscono *come* codificarla.

| Standard | Organismo | Ruolo |
|---|---|---|
| **EN 17269** | CEN (Comitato europeo di normazione) | L'insieme di dati astratto dell'IPS, pubblicato nel 2019 |
| **ISO 27269** | ISO (Organizzazione internazionale per la normazione) | La versione internazionale dell'insieme di dati astratto dell'IPS, pubblicata nel 2021 |
| **CEN/TS 17288** | CEN | Linee guida per implementare l'IPS in uso transfrontaliero |
| **HL7 FHIR IPS Implementation Guide** | HL7 International | La codifica moderna, adatta alle API, e il principale formato di implementazione. STU 2 (2.0.x) ha aggiunto le sezioni Alerts e Patient Story, ha consentito sezioni vuote, ha chiarito `$summary` ed è passato alla terminologia SNOMED CT IPS [[9]](#ref-9). |
| **HL7 CDA IPS Implementation Guide** | HL7 International | La codifica basata su documenti XML, diffusa nelle infrastrutture nazionali ed europee esistenti |

Il lavoro è coordinato dal **Joint Initiative Council for Global Health Informatics Standardization (JIC)**. Il JIC riunisce ISO, CEN, HL7, SNOMED International, IHE e altri. L'IPS è nato da una collaborazione UE–USA del 2016 sui dati sanitari transfrontalieri ed è oggi sostenuto da governi e programmi di sanità digitale in tutto il mondo.


## Come l'IPS è codificato con HL7 FHIR

In FHIR, un IPS è un singolo **`Bundle`** di tipo `document`:

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

Punti tecnici chiave:

- **Ogni sezione ha una narrativa leggibile da persone.** Un clinico può leggere l'IPS in un normale browser, anche senza software FHIR.
- **Ogni sezione ha anche voci codificate**, cioè risorse FHIR strutturate che il software può elaborare, tradurre e riconciliare.
- **I profili vincolano le risorse FHIR di base.** Ad esempio, *Patient (IPS)* e *AllergyIntolerance (IPS)* definiscono i dati minimi e gli elementi "must support".
- **L'operazione `$summary`** (`GET [base]/Patient/[id]/$summary`) chiede a un server FHIR di generare un IPS per un paziente su richiesta.
- **L'IPS è firmabile e autosufficiente.** Un documento completo può essere archiviato, inviato, firmato e verificato come un'unica unità.


## Terminologie

Sistemi di codifica condivisi rendono un IPS leggibile tra lingue e paesi:

| Terminologia | Usata per |
|---|---|
| **SNOMED CT** | Problemi, allergie, procedure, dispositivi, reperti clinici. Un sottoinsieme gratuito, la **SNOMED CT IPS Terminology**, è disponibile per l'uso nell'IPS, anche nei paesi non membri. |
| **LOINC** | Tipi di documento e di sezione, esami di laboratorio, segni vitali |
| **ATC** e altri sistemi di codifica dei farmaci | Prodotti medicinali e principi attivi |
| **UCUM** | Unità di misura |
| **Value set ISO e HL7** | Paesi, lingue, generi amministrativi, motivi di assenza e di sconosciuto |

Poiché le voci sono codificate, un sistema ricevente può mostrare un IPS scritto in portoghese con etichette in inglese. Il significato codificato resta lo stesso.


## Come pazienti e clinici usano un IPS

Un IPS può essere prodotto da una EHR, da un servizio nazionale di cartella clinica, da un portale del paziente o da un'app di salute personale. Può poi essere consegnato in diversi modi:

- **Da sistema a sistema:** tramite API REST FHIR, infrastrutture nazionali o gateway transfrontalieri come la rete MyHealth@EU dell'UE.
- **Condivisione mediata dal paziente:** il paziente conserva la sintesi in un wallet o in un'app di salute e la condivide su richiesta.
- **SMART Health Links:** un codice QR o un URL che dà al clinico un accesso a tempo, facoltativamente protetto da codice, a un IPS cifrato. Il clinico può aprirlo in un normale browser web.
- **Carta o PDF:** una resa narrativa stampata come soluzione di ripiego quando nient'altro funziona.

App come **CommonHealth** permettono ai pazienti di raccogliere i propri dati e condividere un IPS tramite SMART Health Links.

Un tipico scenario di emergenza:

1. Un viaggiatore ha un malore all'estero.
2. Il viaggiatore, o un accompagnatore, mostra un codice QR dal telefono.
3. Il medico di pronto soccorso lo scansiona e vede in pochi secondi i farmaci, le allergie e i problemi attivi del viaggiatore.
4. Il medico evita un'interazione farmacologica pericolosa e cura il paziente in sicurezza.


## Principi e scelte progettuali

- **La sicurezza prima di tutto.** Il contenuto è scelto per rilevanza clinica, non per completezza.
- **Globale per impostazione predefinita, locale per estensione.** I paesi creano profili nazionali, come varianti UE, australiane o canadesi, che aggiungono requisiti senza rompere il nucleo internazionale.
- **Leggibile da persone ed elaborabile da macchine.** Narrativa e dati codificati coesistono.
- **Libero e aperto.** Le specifiche HL7 IPS e il sottoinsieme SNOMED CT per l'IPS sono liberamente disponibili per abbassare le barriere all'adozione.
- **Privacy e consenso.** L'accesso è regolato dalla legge locale e dal consenso del paziente. Meccanismi come gli SMART Health Links mantengono il paziente al controllo.


## Come usare l'IPS

### Per i pazienti

1. **Chiedine uno.** Chiedi alla tua clinica, al tuo ospedale, al portale sanitario nazionale o all'app di salute se può produrre un IPS o una sintesi paziente nazionale basata su di esso.
2. **Controllalo.** Leggilo quando stai bene. Segnala tutto ciò che è sbagliato o mancante, soprattutto allergie e farmaci.
3. **Portalo con te.** Conservalo in un'app di salute o in un wallet, come codice QR di uno SMART Health Link, o come stampa insieme ai tuoi documenti di viaggio.
4. **Tienilo aggiornato.** Ottienine uno nuovo dopo una nuova diagnosi, un nuovo farmaco a lungo termine, un intervento chirurgico o un impianto.
5. **Condividilo con intenzione.** Mostralo al clinico che ti cura. Uno SMART Health Link può scadere e può richiedere un codice, così sei tu a controllare chi lo vede e per quanto tempo [[10]](#ref-10).

### Per i clinici

1. **Controlla prima l'intestazione.** Chi l'ha scritto, quando, e se qualcuno l'ha verificato. Una sintesi vecchia o non verificata richiede maggiore cautela.
2. **Leggi prima le sezioni obbligatorie:** allergie, farmaci e problemi.
3. **Tratta "nessuna nota" in modo diverso da "non registrata".** "Nessuna allergia nota" è un'affermazione clinica. Una sezione vuota o "sconosciuta" non lo è.
4. **Conferma i fatti critici** con il paziente o con chi lo accompagna ogni volta che puoi.
5. **Usa i dati codificati.** Dove il tuo sistema lo supporta, le voci codificate permettono di mostrare la sintesi nella tua lingua e di verificarla rispetto alle regole su interazioni farmacologiche e allergie.
6. **Non presumere la completezza.** L'IPS è una rete di sicurezza, non una storia clinica completa.

### Per gli implementatori

1. **Scegli la specifica.** Usa l'attuale HL7 FHIR IPS Implementation Guide (STU 2), o il profilo nazionale del tuo paese basato su di essa. Per le infrastrutture basate su CDA, usa la guida CDA IPS [[9]](#ref-9) [[11]](#ref-11).
2. **Mappa i tuoi dati.** Mappa i dati locali sui profili IPS: `Patient`, `AllergyIntolerance`, `MedicationStatement`, `Condition` e così via. La maggior parte del lavoro sta in questa mappatura.
3. **Mappa la tua terminologia.** Mappa i codici locali su SNOMED CT, LOINC e sistemi di codifica dei farmaci. La SNOMED CT IPS Terminology è gratuita per questo scopo [[12]](#ref-12).
4. **Genera il documento.** Supporta l'operazione `$summary`, oppure costruisci tu stesso il `Bundle` e la `Composition`. Includi una narrativa leggibile per ogni sezione e dichiarazioni esplicite "nessuna nota" o "non disponibile".
5. **Convalidalo.** Controlla ogni documento generato con il FHIR Validator e un kit di test di conformità, come l'Inferno IPS Test Kit [[13]](#ref-13).
6. **Firmalo e condividilo.** Decidi come i documenti vengono firmati, archiviati e inviati: un'API, un registro di documenti, un gateway transfrontaliero o uno SMART Health Link.
7. **Consumalo in sicurezza.** Come ricevente, mostra la narrativa anche quando non puoi elaborare ogni voce codificata, mantieni visibili fonte e autore, e non unire mai silenziosamente i dati ricevuti nella cartella locale.
8. **Prova con altri.** Verifica l'interoperabilità con altri fornitori e paesi nei Connectathon IHE e HL7 prima di andare in produzione.

### Per i governi e le organizzazioni sanitarie

1. **Adotta un profilo nazionale** che si basi sull'IPS anziché su un formato separato, così la sintesi nazionale è internazionale per impostazione predefinita [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
2. **Definisci la governance:** chi può creare, aggiornare e attestare una sintesi, e chi risponde della sua accuratezza.
3. **Definisci la licenza della terminologia:** adesione a SNOMED CT, oppure uso del sottoinsieme IPS gratuito.
4. **Definisci identità, consenso e fiducia:** come vengono identificati i pazienti, come viene registrato il consenso e quale quadro di fiducia, come MyHealth@EU o la Global Digital Health Certification Network dell'OMS, viene usato per verificare i documenti [[1]](#ref-1) [[14]](#ref-14).
5. **Pubblica ciò che hai costruito** nell'IPS Implementation Registry, così altri possono imparare da esso [[15]](#ref-15).


## Integrare l'IPS con i sistemi sanitari

Un IPS è raramente un sistema separato. È una vista di dati che già risiedono in EHR, scambi di informazioni sanitarie, registri nazionali e app di salute personali.

| Modello di integrazione | Come funziona | Esempi |
|---|---|---|
| **Generato dall'EHR** | L'EHR costruisce un IPS dai propri dati su richiesta, spesso tramite l'operazione FHIR `$summary`. | Fornitori di EHR e server FHIR come HAPI FHIR, che ha un modulo generatore di IPS |
| **Registro nazionale o regionale** | Un servizio nazionale di sintesi paziente archivia un profilo dell'IPS e lo mette a disposizione degli erogatori autorizzati. | Il PS-CA del Canada, l'AU Patient Summary dell'Australia, la cartella clinica elettronica della Svizzera con CH IPS [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6) |
| **Gateway transfrontaliero** | Ogni paese gestisce un punto di contatto nazionale. Esso converte la sintesi del paese d'origine nel formato di scambio concordato, la invia oltre confine, e il paese ricevente la mostra nella lingua locale. | Punti di contatto nazionali per la sanità elettronica di MyHealth@EU [[1]](#ref-1) [[2]](#ref-2) |
| **Rete di scambio regionale** | I ministeri della salute scambiano documenti IPS tramite server FHIR nazionali secondo una guida regionale condivisa. | L'IPS-LAC di RACSEL e la Pan American Highway for Digital Health (PH4H) in America Latina e Caraibi [[16]](#ref-16) |
| **Mediato dal paziente** | Il paziente conserva l'IPS in un'app o in un wallet e lo condivide con un codice QR o uno SMART Health Link. | CommonHealth; il lavoro IPS della rete di fiducia dell'OMS per i pellegrinaggi [[10]](#ref-10) [[14]](#ref-14) |
| **Accesso basato su API** | Le app recuperano un IPS per un paziente autorizzato tramite un'API FHIR. | International Patient Access (IPA); reti statunitensi come Flexpa, che ha aggiunto il supporto IPS nell'ambito del CMS Interoperability Framework [[17]](#ref-17) [[18]](#ref-18) |

Punti di integrazione da pianificare:

- **Condivisione di documenti:** profili IHE come MHD (FHIR) e XDS (registri di documenti) archiviano e trovano documenti IPS. I profili di contenuto IPS di IHE aggiungono regole di conformità e di test [[11]](#ref-11).
- **Identità del paziente:** IHE PIXm e PDQm, o un identificativo nazionale, abbinano il paziente tra i sistemi.
- **Documenti esistenti:** molti sistemi producono già CDA, C-CDA o sintesi nazionali. Mapparli sull'IPS è di solito più semplice che ricominciare da capo, ma verifica le differenze di cardinalità, value set e sistemi di codifica.
- **Profili nazionali:** un nucleo nazionale, come US Core, AU Core, CH Core o JP Core, può differire dall'IPS. I profili nazionali di sintesi paziente riconciliano i due [[5]](#ref-5) [[6]](#ref-6) [[19]](#ref-19).
- **Traduzione e visualizzazione:** i riceventi dovrebbero mostrare la narrativa e tradurre le voci codificate usando i nomi visualizzati dei codici nella lingua del ricevente.
- **Sicurezza:** usa TLS, documenti firmati dove richiesto, registrazione di audit (ad esempio IHE ATNA o BALP) e controllo degli accessi legato al consenso.


## Adozione attuale

L'IPS è passato dai progetti pilota ai programmi nazionali e regionali. Lo stato cambia in fretta, quindi controlla le fonti collegate per la situazione più recente.

- **IPS Implementation Registry.** La comunità IPS mantiene un registro pubblico delle implementazioni. A metà 2026 elencava 34 voci, dal progetto IPS-LAC mediato dagli erogatori dell'Argentina al Better Health Program del Vietnam [[15]](#ref-15).
- **Ecosistema FHIR.** Nell'indagine State of FHIR 2025 di HL7 International e Firely, 42 intervistati hanno dichiarato che l'IPS è alla base delle loro specifiche FHIR nazionali, più di qualsiasi altra guida internazionale [[20]](#ref-20).
- **Ricerca.** Uno studio del 2025 sull'adozione dell'IPS ha intervistato i portatori di interesse, che hanno indicato come principali benefici la migliore qualità delle cure e la sicurezza del paziente [[21]](#ref-21).

| Paese o regione | Stato |
|---|---|
| **Unione europea e SEE** | MyHealth@EU scambia sintesi dei pazienti e prescrizioni elettroniche tra i paesi. Una presentazione della Commissione europea del 2026 ha riportato 17 Stati membri più la Norvegia attivi, con la maggior parte dei restanti che pianifica di aderire [[2]](#ref-2) [[22]](#ref-22). Il regolamento EHDS rende obbligatorio lo scambio delle sintesi dei pazienti entro il 2029 [[23]](#ref-23). |
| **Canada** | La sintesi paziente pancanadese (PS-CA), approvata da Canada Health Infoway nell'ottobre 2022, si basa sull'IPS con adattamenti canadesi [[4]](#ref-4). |
| **Australia** | L'AU Patient Summary, basato sull'IPS e su AU Core, è sviluppato da HL7 Australia attraverso il programma Sparked [[5]](#ref-5) [[24]](#ref-24). |
| **Svizzera** | CH IPS 2.0.0 (uso sperimentale) di HL7 Switzerland si basa sull'IPS e su CH Core. Un profilo separato aggiunge ciò di cui ha bisogno la cartella clinica elettronica svizzera [[6]](#ref-6). |
| **Stati Uniti** | Nessun mandato federale per l'IPS. Gli USA usano US Core e USCDI. Le agenzie federali partecipano al lavoro sull'IPS a livello internazionale, e alcune reti supportano l'IPS volontariamente [[18]](#ref-18). |
| **America Latina e Caraibi** | I ministeri della salute di RACSEL usano la guida regionale IPS-LAC. Nel 2023, 16 paesi hanno scambiato documenti IPS-LAC a un connectathon a San Paolo [[16]](#ref-16). |
| **Giappone** | I ricercatori hanno costruito e convalidato un'applicazione di sintesi paziente basata sull'IPS per casi d'uso giapponesi comuni, usando JP Core [[19]](#ref-19). |
| **Taiwan e Filippine** | Un rapporto di implementazione del 2025 descrive una cartella di salute personale transfrontaliera che usa FHIR ed è allineata all'IPS [[25]](#ref-25). |
| **G7** | Nel 2021 i ministri della salute del G7 si sono impegnati a lavorare verso l'IPS e hanno pubblicato una tabella di marcia per l'IPS [[26]](#ref-26). |
| **OMS** | La Global Digital Health Certification Network dell'OMS include domini di fiducia basati sull'IPS, come l'IPS verificabile per i pellegrinaggi [[14]](#ref-14). |


## Leggi, regolamenti e politiche per paese e regione

L'IPS è uno standard, non una legge. Le leggi decidono se un paese deve scambiare sintesi dei pazienti, in quale formato e con quali regole sulla privacy. Questo è un riepilogo, non una consulenza legale. Controlla sempre il testo vigente della legge.

| Giurisdizione | Legge o politica | Che cosa significa per l'IPS |
|---|---|---|
| **Unione europea** | **Regolamento sullo spazio europeo dei dati sanitari (EHDS), (UE) 2025/327.** Pubblicato il 5 marzo 2025; in vigore dal 26 marzo 2025 [[23]](#ref-23) [[27]](#ref-27). | Le sintesi dei pazienti sono una "categoria prioritaria". Lo scambio nel formato europeo di scambio delle cartelle cliniche elettroniche deve funzionare in ogni Stato membro entro il 2029. Immagini mediche, risultati di esami e lettere di dimissione seguono entro il 2031 [[28]](#ref-28). Il formato per le sintesi dei pazienti si basa sull'HL7 IPS. |
| **Unione europea** | **Direttiva 2011/24/UE** concernente l'applicazione dei diritti dei pazienti relativi all'assistenza sanitaria transfrontaliera [[29]](#ref-29). | Ha istituito la rete di assistenza sanitaria online, che ha concordato le linee guida sulla sintesi paziente alla base di MyHealth@EU. |
| **Unione europea** | **Regolamento generale sulla protezione dei dati (GDPR), (UE) 2016/679** [[30]](#ref-30). | I dati sanitari sono una categoria particolare. Ogni scambio di IPS richiede una base giuridica e garanzie adeguate. |
| **Stati Uniti** | **21st Century Cures Act e le norme sul blocco delle informazioni** [[31]](#ref-31); il **CMS Interoperability Framework** (2025), volontario [[17]](#ref-17). | Nessuna legge richiede l'IPS. Le leggi richiedono accesso e scambio di informazioni sanitarie elettroniche, usando US Core e USCDI. Il supporto all'IPS è volontario. |
| **Canada** | Leggi provinciali e territoriali sulle informazioni sanitarie. Il **Connected Care for Canadians Act** federale (Bill C-72) è stato presentato nel 2024 ma non è stato approvato prima che il Parlamento fosse prorogato nel 2025. | PS-CA è una specifica pancanadese, non un obbligo di legge. L'adozione è guidata da province e territori con Canada Health Infoway [[4]](#ref-4). |
| **Regno Unito** | **Data (Use and Access) Act 2025** [[32]](#ref-32). | Include poteri per stabilire standard informativi per l'IT della sanità e dell'assistenza sociale agli adulti. Il Regno Unito ha ospitato l'impegno del G7 sull'IPS del 2021 [[26]](#ref-26). |
| **Australia** | **My Health Records Act 2012** e le modifiche del 2025 sulla "condivisione per impostazione predefinita". | L'AU Patient Summary è una specifica nazionale sviluppata attraverso Sparked [[5]](#ref-5) [[24]](#ref-24). |
| **Svizzera** | **Legge federale del 19 giugno 2015 sulla cartella informatizzata del paziente (LCIP, SR 816.1)**, in vigore dal 15 aprile 2017 [[33]](#ref-33). | CH IPS include un profilo per i documenti nella cartella informatizzata del paziente svizzera [[6]](#ref-6). |
| **America Latina e Caraibi** | Accordi regionali tramite RACSEL e PH4H, con il sostegno della Banca interamericana di sviluppo a un quadro giuridico regionale [[16]](#ref-16). | IPS-LAC è il formato regionale concordato per lo scambio transfrontaliero. |
| **G7** | **Comunicato dei ministri della salute**, Oxford, giugno 2021, e la **G7 IPS Roadmap**, dicembre 2021 [[26]](#ref-26) [[34]](#ref-34). | Un impegno politico a lavorare verso l'IPS e l'accesso del paziente, non una legge vincolante. |


## Pro e contro

| Pro | Contro |
|---|---|
| **Cure non programmate più sicure.** I clinici vedono allergie, farmaci e problemi in pochi secondi. | **Valido solo quanto la sua fonte.** Dati di origine obsoleti o errati producono una sintesi obsoleta o errata. |
| **Un formato, in tutto il mondo.** Una sola implementazione risponde alle esigenze nazionali e transfrontaliere. | **Variazione nazionale.** I profili nazionali aggiungono regole, quindi un "IPS valido" in un paese può richiedere lavoro per essere accettato in un altro. |
| **Basato su standard aperti e maturi:** ISO, CEN, HL7 FHIR e CDA, SNOMED CT e LOINC. | **Onere terminologico.** Mappare i codici locali su SNOMED CT e LOINC è un lavoro impegnativo, e SNOMED CT completo richiede una licenza oltre al sottoinsieme IPS gratuito. |
| **Leggibile e calcolabile.** Narrativa per le persone, dati codificati per software e traduzione. | **Narrativa e dati codificati possono non coincidere** se il generatore è trascurato, e i riceventi possono fidarsi di quello sbagliato. |
| **Empowerment del paziente.** I pazienti possono conservare e condividere la propria sintesi. | **Rischio per privacy e consenso.** Una sintesi portabile è sensibile, e leggi e modelli di consenso differiscono da paese a paese. |
| **Specifiche gratuite** e terminologia IPS gratuita abbassano i costi [[12]](#ref-12). | **Rotazione delle versioni.** STU 1, STU 1.1 e STU 2 coesistono, e il formato EHDS fa riferimento a una versione precedente [[28]](#ref-28). |
| **Riutilizzabile** per certificati di vaccinazione, ricerca e registri [[7]](#ref-7) [[8]](#ref-8). | **Deliberatamente minimo.** Non sostituisce le cartelle complete o i documenti specialistici, e le lacune per l'uso secondario richiedono estensioni [[7]](#ref-7). |
| **Forte sostegno** di governi, UE, G7, OMS e organismi di normazione. | **Adozione disomogenea.** Molti paesi e fornitori sono ancora in fase pilota, e la consapevolezza dei pazienti è bassa. |


## Piani e direzioni future

- **UE, 2029:** scambio di sintesi dei pazienti e prescrizioni elettroniche operativo in tutti gli Stati membri dell'UE nell'ambito dell'EHDS [[23]](#ref-23) [[28]](#ref-28).
- **UE, 2031:** immagini mediche, risultati di laboratorio e lettere di dimissione si aggiungono al formato europeo di scambio delle cartelle cliniche elettroniche [[28]](#ref-28).
- **Espansione di MyHealth@EU:** più paesi che aderiscono e nuovi servizi per risultati di laboratorio, lettere di dimissione e immagini mediche [[2]](#ref-2) [[22]](#ref-22).
- **Adozione di FHIR IPS STU 2:** gli implementatori passano alle sezioni Alerts e Patient Story, alle sezioni vuote esplicite e alla terminologia SNOMED CT IPS [[9]](#ref-9).
- **Australia:** pubblicazione di AU Patient Summary Release 1, prevista per il 2026 [[24]](#ref-24).
- **IPS Best Practices Project:** uno sforzo della comunità per documentare le lezioni apprese, con lavori in partenza nel 2026.
- **Rete di fiducia dell'OMS:** più domini di fiducia basati sull'IPS per documenti sanitari verificabili e portabili [[14]](#ref-14).
- **SMART Health Links:** standardizzati tramite HL7, per la condivisione controllata dal paziente [[10]](#ref-10).
- **America Latina e Caraibi:** scambio IPS-LAC più ampio tramite PH4H [[16]](#ref-16).
- **Ricerca e uso secondario:** lavoro per estendere le sintesi dei pazienti alla ricerca clinica e all'IA, mantenendo minimo il nucleo [[7]](#ref-7).


## Glossario

| Termine | Significato |
|---|---|
| **IPS** | International Patient Summary |
| **FHIR** | Fast Healthcare Interoperability Resources, lo standard moderno di HL7 basato su API |
| **CDA** | Clinical Document Architecture, lo standard di documenti XML di HL7 |
| **IG** | Implementation Guide (guida di implementazione), un insieme di profili e regole per applicare uno standard |
| **Profile** | Una versione vincolata di una risorsa FHIR per un uso specifico |
| **SNOMED CT** | Systematized Nomenclature of Medicine – Clinical Terms |
| **LOINC** | Logical Observation Identifiers Names and Codes |
| **SMART Health Links** | Uno standard per condividere dati sanitari tramite un link o un codice QR |
| **JIC** | Joint Initiative Council for Global Health Informatics Standardization |


## Per saperne di più

- HL7 FHIR IPS Implementation Guide: <https://hl7.org/fhir/uv/ips/>
- IPS continuous build: <https://build.fhir.org/ig/HL7/fhir-ips/>
- International Patient Summary project site: <https://international-patient-summary.net/>
- ISO 27269 (Health informatics — International patient summary): <https://www.iso.org/standard/79491.html>
- SNOMED CT IPS Terminology: <https://www.snomed.org/international-patient-summary-terminology>
- SMART Health Links: <https://docs.smarthealthit.org/smart-health-links/>


## Risorse

Questi link riguardano fonti, specifiche, software, progetti, video, libri e ricerche sull'IPS. La maggior parte è stata verificata quando questa pagina è stata scritta. Alcuni siti di editori bloccano i controlli automatici, e sono contrassegnati con *(non verificato)*.

### Specifiche e standard ufficiali

- [HL7 FHIR IPS Implementation Guide, current published version](https://hl7.org/fhir/uv/ips/) è la specifica FHIR di riferimento.
- [HL7 FHIR IPS Implementation Guide, STU 2](https://hl7.org/fhir/uv/ips/STU2/)
- [HL7 FHIR IPS Implementation Guide, STU 1.1](https://hl7.org/fhir/uv/ips/STU1.1/)
- [HL7 FHIR IPS publication history](https://www.hl7.org/fhir/uv/ips/history.html) elenca ogni versione pubblicata.
- [HL7 FHIR IPS continuous build](https://build.fhir.org/ig/HL7/fhir-ips/) è il lavoro in corso più recente, non ancora sottoposto a votazione.
- [Structure of the International Patient Summary](https://hl7.org/fhir/uv/ips/en/Structure-of-the-International-Patient-Summary.html) spiega le sezioni e i profili.
- [IPS design conventions](https://build.fhir.org/ig/HL7/fhir-ips/en/Design-Conventions.html) tratta must-support, dati assenti e narrativa.
- [IPS generation and data inclusion](https://build.fhir.org/ig/HL7/fhir-ips/en/Generation-and-Data-Inclusion.html) tratta `$summary` e come selezionare i contenuti.
- [HL7 CDA IPS Implementation Guide, continuous build](https://build.fhir.org/ig/HL7/CDA-IPS/)
- [HL7 CDA IPS product brief](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=483)
- [ISO 27269, Health informatics — International patient summary](https://www.iso.org/standard/79491.html) *(non verificato)*
- [ISO/TC 215 Health informatics committee](https://www.iso.org/committee/54960.html) *(non verificato)*
- [IHE FHIR International Patient Summary profile (FIIO)](https://profiles.ihe.net/PCC/FIIO/volume-1.html)
- [IHE PCC International Patient Summary supplement, 2020 (PDF)](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS_Rev1-0_PC_2020-03-17.pdf)
- [HL7 SMART Health Cards and Links Implementation Guide](https://hl7.org/fhir/uv/smart-health-cards-and-links/)
- [SMART Health Links documentation](https://docs.smarthealthit.org/smart-health-links/)
- [HL7 FHIR International Patient Access (IPA)](https://hl7.org/fhir/uv/ipa/) è una specifica sorella per l'accesso del paziente tramite API.
- [HL7 FHIR R4 base specification](https://hl7.org/fhir/R4/), su cui si basa l'IPS.

### Repository del codice sorgente

- [HL7/fhir-ips](https://github.com/HL7/fhir-ips) contiene il sorgente dell'IG FHIR IPS in FHIR Shorthand.
- [HL7/cda-ips](https://github.com/HL7/cda-ips) contiene il sorgente dell'IG CDA IPS.
- [hl7-eu/eps](https://github.com/hl7-eu/eps) contiene il sorgente dell'HL7 Europe Patient Summary.
- [hl7ch/ch-ips](https://github.com/hl7ch/ch-ips) contiene l'IPS svizzero, con un visualizzatore e un generatore in sviluppo.
- [GitHub topic: international-patient-summary](https://github.com/topics/international-patient-summary) elenca i repository della comunità.

### Adattamenti nazionali e regionali

- [HL7 Europe Patient Summary (EPS), continuous build](https://build.fhir.org/ig/hl7-eu/eps/)
- [AU Patient Summary (Australia), continuous build](https://build.fhir.org/ig/hl7au/au-fhir-ps/)
- [Trillium II IPS structure (HL7 Europe)](https://hl7.eu/fhir/build/trillium2/site/ipsStructure.html) proviene dal progetto UE–USA che ha contribuito ad avviare l'IPS.
- [eHealth Suisse](https://www.ehealthsuisse.ch/) è il centro di competenza della Svizzera per la sanità digitale e per l'adozione del suo IPS.
- [MyHealth@EU, cross-border digital health services](https://health.ec.europa.eu/ehealth-digital-health-and-care/electronic-cross-border-health-services_en)
- [Xt-EHR Joint Action](https://www.xt-ehr.eu/) prepara i formati dello spazio europeo dei dati sanitari, compresa la sintesi paziente.

### Software e strumenti

- [IPS Viewer](https://www.ipsviewer.com) ([source: jddamore/IPSviewer](https://github.com/jddamore/IPSviewer)) è un visualizzatore IPS open source basato su browser.
- [uwcirg/shl-ips-viewer](https://github.com/uwcirg/shl-ips-viewer) visualizza un IPS condiviso tramite uno SMART Health Link.
- [smart-on-fhir/smart-health-links](https://github.com/smart-on-fhir/smart-health-links) è l'implementazione di riferimento degli SMART Health Links.
- [HAPI FHIR IPS generator](https://hapifhir.io/hapi-fhir/docs/server_ips/introduction.html) ([source: hapifhir/hapi-fhir](https://github.com/hapifhir/hapi-fhir)) è un modulo server Java open source che implementa `$summary`.
- [HAPI FHIR JPA server IPS documentation](https://hapifhir.io/hapi-fhir/docs/server_jpa/ips.html)
- [Inferno IPS Test Kit](https://inferno.healthit.gov/test-kits/ips) ([source: inferno-framework/ips-test-kit](https://github.com/inferno-framework/ips-test-kit)) è un kit di test di conformità open source.
- [FHIR Validator](https://validator.fhir.org/) convalida i bundle IPS rispetto ai profili dell'IG.
- [Simplifier: hl7.fhir.uv.ips package](https://simplifier.net/packages/hl7.fhir.uv.ips) contiene il pacchetto, i profili e gli esempi.
- [FHIR package registry](https://registry.fhir.org/)
- [FHIR Shorthand (FSH) School](https://fshschool.org/) insegna il linguaggio in cui è scritto l'IG dell'IPS.
- [CommonHealth](https://www.commonhealth.org/) è un'app per pazienti che genera un IPS e lo condivide tramite SMART Health Links.
- [WHO SMART Trust](https://github.com/WorldHealthOrganization/smart-trust) è il quadro di fiducia della Global Digital Health Certification Network dell'OMS.

### Organizzazioni e progetti

- [International Patient Summary project site](https://international-patient-summary.net/) offre notizie, rapporti sull'adozione e formazione.
- [IPS for health IT developers](https://international-patient-summary.net/health-it-developer/)
- [HL7 International](https://www.hl7.org/)
- [IHE International](https://www.ihe.net/)
- [SNOMED International](https://www.snomed.org/)
- [SNOMED CT IPS Terminology](https://www.snomed.org/international-patient-summary-terminology) è un sottoinsieme gratuito per l'uso nell'IPS.
- [LOINC](https://loinc.org/) *(non verificato)*
- [Joint Initiative Council for Global Health Informatics Standardization (JIC)](http://www.jointinitiativecouncil.org/)
- [Global Digital Health Partnership (GDHP)](https://gdhp.health/)
- [WHO SMART Guidelines](https://smart.who.int/)
- [WHO Global Digital Health Certification Network](https://www.who.int/initiatives/global-digital-health-certification-network)

### Comunità ed eventi

- [chat.fhir.org](https://chat.fhir.org/) è la chat della comunità FHIR, che ha un canale IPS attivo.
- [HL7 FHIR Connectathons](https://www.hl7.org/events/fhir-connectathon/)
- [IHE Connectathons](https://www.ihe.net/participate/connectathon/)

### Video

- [HIMSS20: IPS for computable care guidelines in 200 seconds or less (IHE International, YouTube)](https://www.youtube.com/watch?v=xjEzGM8kBPw)
- [IHE International YouTube channel](https://www.youtube.com/@IHEIntl) offre panel dei Connectathon e sessioni sull'IPS.
- [IPS project site news](https://international-patient-summary.net/) rimanda a molti webinar registrati, tra cui:
  - il panel sull'IPS al IHE North America Connectathon, 2024
  - la sessione sull'IPS ai FHIR DevDays 2023
  - Grahame Grieve su IPS e IPA, IHE Connectathon Montreux 2022
  - il keynote di SNOMED CT Expo 2022
  - Matthew Rahn sull'IPS nel GDHP
  - il webinar transfrontaliero HL7 "Global Passport"
- [YouTube search: International Patient Summary](https://www.youtube.com/results?search_query=international+patient+summary)

### Libri

- Tim Benson e Grahame Grieve, [*Principles of Health Interoperability: FHIR, HL7 and SNOMED CT*](https://link.springer.com/book/10.1007/978-3-030-56883-2), 4ª edizione, Springer, 2020. Tratta FHIR, risorse di sintesi clinica e terminologia.

### Articoli di ricerca e altri articoli

- Laleci Erturkmen G. B., Sinaci A. A., Namli T., Boonstra M., et al., "[An assessment of the European Patient Summary for clinical research: a case study in cardiology](https://doi.org/10.3389/fmed.2024.1481551)", *Frontiers in Medicine*, 2024.
- Lee H., Huang J., Huang S., Chen W., et al., "[Implementing a Cross-Border Next-Generation Personal Health Record in the Philippines and Taiwan: An Implementation Case Report Using Health Level 7 International Fast Healthcare Interoperability Resources](https://doi.org/10.2196/56272)", *JMIR Formative Research*, 2025.
- Song C., Nakayama M., "[Implementation of a Patient Summary Web Application According to the International Patient Summary and Validation in Common Use Cases in Japan](https://doi.org/10.1007/s10916-023-01993-6)", *Journal of Medical Systems*, 2023.
- Schippers D., Spil T., Stegwee R., Folmer E., Donnelly S., "[The adoption and diffusion of the International Patient Summary](https://doi.org/10.24251/hicss.2025.425)", *Proceedings of the 58th Hawaii International Conference on System Sciences (HICSS)*, 2025.
- da Silva Carvalho N., Papadimitriou A., Stegwee R., Gille H., et al., "[Accelerating European electronic health record exchange format (EEHRxF) implementation across Europe: a policy perspective](https://doi.org/10.3389/fmed.2025.1648170)", *Frontiers in Medicine*, 2025.
- Kay S., Cangioli G., Nusbaum M., "[The International Patient Summary and the extensibility requirement](https://international-patient-summary.net/the-international-patient-summary-and-the-extensibility-requirement/)", *Studies in Health Technology and Informatics* (pHealth), 2020.
- D'Amore J., Cangioli G., Hausam R., "[Advancing the International Patient Summary](https://international-patient-summary.net/advancing-the-international-patient-summary/)"
- "[Towards the Austrian Patient Summary](https://international-patient-summary.net/towards-the-austrian-patient-summary/)", *Studies in Health Technology and Informatics* (dHealth).
- "[Revival of the International Patient Summary (IPS)](https://smiledigitalhealth.com/our-blog/revival-of-the-international-patient-summary-ips)", Smile Digital Health blog.
- [PubMed search: "international patient summary"](https://pubmed.ncbi.nlm.nih.gov/?term=%22international+patient+summary%22) per la letteratura sottoposta a revisione paritaria.


## References

Le citazioni numerate nel testo, come [1], rimandano alla voce corrispondente qui sotto. I link sono stati verificati a novembre 2026. Leggi, dati di adozione e versioni cambiano, quindi controlla la fonte per la situazione attuale.

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

Queste fonti non sono citate sopra, ma sono i riferimenti primari per lo standard stesso.

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
