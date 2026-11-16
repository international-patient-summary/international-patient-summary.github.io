# International Patient Summary (IPS)

**International Patient Summary (IPS)** yaiku standar sedonya kanggo ekstrak cendhak saka rekam medis elektronik. Isine fakta-fakta klinis dhasar sing dibutuhake dokter utawa tenaga kesehatan kanggo ngrawat pasien kanthi aman. IPS dirancang supaya:

- **Minimal lan ora lengkap sakabèhé.** Isine mung bagéan cilik sing wis dipilih kanthi premati saka rekam medis, dudu rekam medis kabèh.
- **Ora gumantung spesialisasi.** Tenaga kesehatan apa waé bisa nggunakake, ing disiplin apa waé.
- **Ora gumantung kondisi.** IPS ora kaiket karo penyakit utawa alur perawatan tartamtu.
- **Bisa diimplementasekake lan internasional.** IPS dibangun ing standar lan terminologi global, saéngga bisa dipigunakake ing sawetara negara, basa, lan sistem TI.

Cekakipun, IPS njawab siji pitakon kanggo tenaga kesehatan sing durung tau kepethuk pasien: *"Apa sing kudu dakweruhi saiki supaya bisa ngrawat wong iki kanthi aman?"*


## Kenapa IPS ana

Informasi kesehatan biasané dikunci ing rekam medis elektronik (EHR) lokal, sistem nasional, utawa produk saka vendor. Nalika pasien golèk perawatan ing papan liya, kayata rumah sakit liya, wilayah liya, utawa negara liya, tenaga kesehatan sing ngrawat asring ora bisa ngakses riwayat kasebut. IPS maringi format ringkesan sing padha lan gampang digawa kanggo kabèh wong.

### Kasus panggunaan utama

| Kasus panggunaan | Katrangan |
|---|---|
| **Perawatan ora kajadwal lan darurat** | Pasien lara utawa tatu nalika adoh saka omah, lan tenaga kesehatan setempat ora bisa nggayuh EHR pasien ing omah. Iki kasus panggunaan asli lan utama. |
| **Perawatan lintas wates** | Wong lelungan, migran, buruh lintas wates, lan pengungsi nggawa ringkesan sing bisa diwaca tenaga kesehatan ing luar negeri. |
| **Perawatan kajadwal lan transisi** | Rujukan, konsultasi spesialis, rawat inap, pulang, lan serah-terima antarpenyedia layanan. |
| **Wisata medis lan mobilitas** | Pasien sing milih nampa perawatan ing yurisdiksi liya. |
| **Pemberdayaan pasien** | Pasien nyimpen, ndeleng, lan nuduhake ringkesane dhewe saka aplikasi ponsel, portal, utawa salinan cetak. |


## Kapan nggunakake IPS

Gunakna IPS nalika wong sing ora kenal pasien butuh gambaran sing bisa dipercaya kanthi cepet, lan nalika pangirim lan panampa ora nggunakake sistem TI sing padha.

### Cocog digunakake

- **Perawatan darurat lan ora direncanakake**, utamané nalika adoh saka omah utawa lintas wates. Iki panggunaan sing dadi tujuan rancangan IPS.
- **Pertukaran lintas wates antarsistem nasional**, kayata layanan MyHealth@EU saka Uni Eropa [[1]](#ref-1) [[2]](#ref-2).
- **Ringkesan sing dicekel pasien**, sing digawa wong lelungan, migran, pengungsi, jamaah, utawa wong sing nandhang kondisi rumit ing ponsel utawa ing kertas [[3]](#ref-3).
- **Ringkesan pasien nasional utawa regional.** Akèh negara nggawe ringkesane dhewe minangka profil saka IPS, saéngga uga bisa ditukar sacara internasional [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
- **Dhasar bebarengan kanggo transisi perawatan,** kayata rujukan, rawat inap, lan pulang, nalika dokumen spesialis sing luwih sugih ora ana.
- **Titik wiwitan kanggo set data liyané,** kayata sertifikat vaksinasi, data riset, utawa registri sing mbutuhake fakta inti sing padha [[7]](#ref-7) [[8]](#ref-8).

### Ora cocog digunakake

- **Rekam medis lengkap.** IPS sengaja digawe minimal. Gunakna ekspor rekam lengkap utawa dokumen spesialis nalika detail penting.
- **Dokumen khusus spesialisasi,** kayata ringkesan perawatan onkologi, rekam kesehatan ibu, utawa ringkesan pulang sing rinci. Kuwi duwé standar dhewe-dhewe, sing bisa nyakup utawa ngrujuk isi IPS.
- **Alur kerja klinis wektu nyata ing sajroning siji organisasi.** Ing sajroning siji EHR, takokna data langsung tinimbang ringkesan snapshot.
- **Rekam hukum, tagihan, utawa asuransi.** IPS iku ringkesan klinis, dudu rekam administratif utawa klaim.
- **Keputusan sing mbutuhake kalengkapan sing dijamin.** IPS mung bisa lengkap lan anyar kaya sumber lan pangarangé. Yen bisa, tansah konfirmasi fakta penting karo pasien.


## Isine IPS

Dokumen IPS duwé rong lapisan:

1. **Header sing nyathet sapa, apa, lan kapan:**
   - **Pasien:** identitas, demografi, lan kontak.
   - **Penulis:** wong, organisasi, utawa sistem sing nggawe ringkesan.
   - **Pengampu:** organisasi sing tanggung jawab njaga ringkesan.
   - **Pengesah:** sapa sing wis verifikasi, yen ana.
   - **Tanggal lan wektu:** nalika digawe.

2. **Isi klinis sing disusun dadi bagéan-bagéan.** Bagéan bisa wajib, disaranake, utawa opsional.

| Bagéan | Status | Isi sing umum |
|---|---|---|
| **Medication Summary** | Wajib | Obat saiki lan obat kepungkur sing relevan, resep, dosis |
| **Allergies and Intolerances** | Wajib | Alergi obat, panganan, lan lingkungan; reaksi lan tingkat keparahan |
| **Problem List** | Wajib | Diagnosis aktif, kondisi, lan masalah klinis |
| Immunizations | Disaranake | Vaksin sing wis diwènèhaké, kayata tetanus, hepatitis B, influenza, COVID-19 |
| History of Procedures | Disaranake | Operasi gedhé lan intervensi invasif |
| Medical Devices | Disaranake | Implan lan piranti, kayata alat pacu jantung, stent, prostesis |
| Diagnostic Results | Disaranake | Asil laboratorium utama, laporan pencitraan, patologi |
| Vital Signs | Opsional | Tekanan getih, detak jantung, bobot, dhuwur, BMI |
| History of Past Illness | Opsional | Kondisi sing wis mari lan masalah kepungkur sing penting |
| Functional Status | Opsional | Disabilitas lan kemampuan nindakake kegiatan saben dina |
| Plan of Care | Opsional | Rencana perawatan lan rekomendasi terapi |
| Social History | Opsional | Rokok, alkohol, lan faktor gaya urip liyané sing relevan |
| History of Pregnancy | Opsional | Status meteng saiki lan riwayat meteng |
| Advance Directives | Opsional | Wasiat medis, pilihan resusitasi, pernyataan persetujuan |
| Alerts | Opsional | Peringatan kritis keamanan sing ora cocog ing papan liya (ditambahake ing FHIR IPS STU 2) |
| Patient Story | Opsional | Apa sing penting kanggo pasien: kabutuhan, kekuwatan, nilai, kuwatir, lan pilihan, nganggo tembung pasien dhewe (ditambahake ing FHIR IPS STU 2) |

**Nyebutake "ora ana" kanthi cetha iku penting.** Bagéan sing kosong ora ngandhani tenaga kesehatan apa pasien pancèn ora duwé alergi utawa ora ana sing nyathet. Mulane IPS ngarepake pernyataan sing cetha kayata *"ora ana alergi sing dikenal"*, *"ora ana obat saiki"*, utawa *"informasi ora kasedhiya"*.


## Standar ing mburiné IPS

IPS iku kulawarga standar sing dikoordinasi. Standar ISO lan CEN nemtokake *apa* sing kudu ana ing ringkesan pasien. Pandhuan implementasi HL7 nemtokake *kepriyé* ngenkode.

| Standar | Badan | Peran |
|---|---|---|
| **EN 17269** | CEN (European Committee for Standardization) | Set data IPS abstrak, diterbitake taun 2019 |
| **ISO 27269** | ISO (International Organization for Standardization) | Versi internasional saka set data IPS abstrak, diterbitake taun 2021 |
| **CEN/TS 17288** | CEN | Pandhuan implementasi IPS kanggo panggunaan lintas wates |
| **HL7 FHIR IPS Implementation Guide** | HL7 International | Enkoding modern sing ramah API lan format implementasi utama. STU 2 (2.0.x) nambahake bagéan Alerts lan Patient Story, ngidini bagéan kosong, njlentrehake `$summary`, lan pindhah menyang terminologi SNOMED CT IPS [[9]](#ref-9). |
| **HL7 CDA IPS Implementation Guide** | HL7 International | Enkoding adhedhasar dokumen XML, umum ing infrastruktur nasional lan Eropa sing wis ana |

Pagawéan iki dikoordinasi liwat **Joint Initiative Council for Global Health Informatics Standardization (JIC)**. JIC nglumpukake ISO, CEN, HL7, SNOMED International, IHE, lan liyané. IPS lair saka kolaborasi Uni Eropa–AS taun 2016 babagan data kesehatan lintas wates lan saiki didhukung pamaréntah lan program kesehatan digital ing sedonya.


## Kepriyé IPS dienkode nganggo HL7 FHIR

Ing FHIR, IPS iku siji **`Bundle`** jinis `document`:

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

Pokok-pokok teknis:

- **Saben bagéan duwé narasi sing bisa diwaca manungsa.** Tenaga kesehatan bisa maca IPS ing browser biasa, senajan ora ana piranti lunak FHIR.
- **Saben bagéan uga duwé entri sing dienkode**, yaiku sumber daya FHIR sing terstruktur sing bisa diproses, diterjemahake, lan dicocokake dening piranti lunak.
- **Profil mbatesi sumber daya FHIR dhasar.** Contoné, *Patient (IPS)* lan *AllergyIntolerance (IPS)* nemtokake data minimum lan unsur "must support".
- **Operasi `$summary`** (`GET [base]/Patient/[id]/$summary`) njaluk server FHIR gawé IPS kanggo pasien nalika dibutuhake.
- **IPS bisa ditandatangani lan lengkap ing sajroning dhirine.** Dokumen sing lengkap bisa disimpen, dikirim, ditandatangani, lan diverifikasi minangka siji unit.


## Terminologi

Sistem kode bebarengan ndadèkaké IPS bisa diwaca lintas basa lan negara:

| Terminologi | Digunakake kanggo |
|---|---|
| **SNOMED CT** | Masalah, alergi, prosedur, piranti, temuan klinis. Subset gratis **SNOMED CT IPS Terminology** kasedhiya kanggo panggunaan IPS, malah ing negara sing dudu anggota. |
| **LOINC** | Jinis dokumen lan bagéan, tes laboratorium, tanda vital |
| **ATC** lan sistem kode obat liyané | Produk obat lan zat aktif |
| **UCUM** | Satuan ukuran |
| **Set nilai ISO lan HL7** | Negara, basa, jenis kelamin administratif, alesan ora ana lan ora dikenal |

Amarga entri-entrié dienkode, sistem panampa bisa nampilake IPS sing ditulis nganggo basa Portugis kanthi label basa Inggris. Teges kode tetep padha.


## Kepriyé pasien lan tenaga kesehatan nggunakake IPS

IPS bisa digawé dening EHR, layanan rekam kesehatan nasional, portal pasien, utawa aplikasi kesehatan pribadi. Banjur bisa dikirim kanthi sawetara cara:

- **Sistem menyang sistem:** liwat API REST FHIR, infrastruktur nasional, utawa gerbang lintas wates kayata jaringan MyHealth@EU saka Uni Eropa.
- **Dituduhake dening pasien:** pasien nyimpen ringkesan ing dompet utawa aplikasi kesehatan lan nuduhake yen dibutuhake.
- **SMART Health Links:** kode QR utawa URL sing maringi tenaga kesehatan akses winates wektu, kanthi pilihan dilindhungi kode sandhi, menyang IPS sing dienkripsi. Tenaga kesehatan bisa mbukak nganggo browser web biasa.
- **Kertas utawa PDF:** rendering narasi sing dicetak minangka cadhangan nalika ora ana cara liya sing mlaku.

Aplikasi kayata **CommonHealth** ndadèkaké pasien bisa nglumpukake rekame lan nuduhake IPS liwat SMART Health Links.

Skenario darurat sing umum:

1. Wong lelungan ambruk ing luar negeri.
2. Wong lelungan kasebut, utawa kancané, nuduhake kode QR saka ponsel.
3. Dokter darurat mindai kode kuwi lan ing sawetara detik weruh obat, alergi, lan masalah aktif wong lelungan kasebut.
4. Dokter ngindhari interaksi obat sing mbebayani lan ngrawat pasien kanthi aman.


## Prinsip lan pilihan rancangan

- **Keamanan dhisik.** Isi dipilih adhedhasar relevansi klinis, dudu kalengkapan.
- **Global kanthi baku, lokal kanthi ekstensi.** Negara-negara nggawe profil nasional, kayata varian Uni Eropa, Australia, utawa Kanada, sing nambahi persyaratan tanpa ngrusak inti internasional.
- **Bisa diwaca manungsa lan bisa diproses mesin.** Narasi lan data sing dienkode ana bebarengan.
- **Gratis lan terbuka.** Spesifikasi HL7 IPS lan subset IPS SNOMED CT kasedhiya gratis kanggo nyuda alangan adopsi.
- **Privasi lan persetujuan.** Akses diatur dening hukum lokal lan persetujuan pasien. Mekanisme kayata SMART Health Links njaga pasien tetep ngontrol.


## Kepriyé nggunakake IPS

### Kanggo pasien

1. **Njaluk siji.** Takokna menyang klinik, rumah sakit, portal kesehatan nasional, utawa aplikasi kesehatan Panjenengan apa bisa nggawe IPS utawa ringkesan pasien nasional sing adhedhasar IPS.
2. **Priksanen.** Wacanen nalika Panjenengan sehat. Laporna apa waé sing salah utawa kurang, utamané alergi lan obat.
3. **Gawanen.** Simpenen ing aplikasi kesehatan utawa dompet, minangka kode QR SMART Health Link, utawa minangka cetakan ing dokumen lelungan Panjenengan.
4. **Tansah anyar.** Njaluk sing anyar sawisé diagnosis anyar, obat jangka dawa anyar, operasi, utawa implan.
5. **Tuduhna kanthi sengaja.** Tuduhna menyang tenaga kesehatan sing ngrawat Panjenengan. SMART Health Link bisa kedaluwarsa lan bisa mbutuhake kode sandhi, saéngga Panjenengan ngontrol sapa sing bisa ndeleng lan nganti pira suwéné [[10]](#ref-10).

### Kanggo tenaga kesehatan

1. **Priksa header dhisik.** Sapa sing nulis, kapan, lan apa ana sing wis verifikasi. Ringkesan sing lawas utawa durung diverifikasi mbutuhake kawigatosan luwih.
2. **Wacanen bagéan wajib dhisik:** alergi, obat, lan masalah.
3. **Bedakna "ora dikenal" saka "ora dicathet".** "Ora ana alergi sing dikenal" iku pernyataan klinis. Bagéan sing kosong utawa "ora kawruhan" dudu pernyataan klinis.
4. **Konfirmasi fakta penting** karo pasien utawa kancané saben bisa.
5. **Gunakna data sing dienkode.** Yen sistem Panjenengan ndhukung, entri sing dienkode ndadèkaké ringkesan bisa ditampilake nganggo basa Panjenengan lan dipriksa miturut aturan interaksi obat lan alergi.
6. **Aja nganggep wis lengkap.** IPS iku jaring pengaman, dudu riwayat lengkap.

### Kanggo pangembang implementasi

1. **Pilih spesifikasi.** Gunakna HL7 FHIR IPS Implementation Guide sing saiki (STU 2), utawa profil nasional saka negara Panjenengan. Kanggo infrastruktur adhedhasar CDA, gunakna pandhuan CDA IPS [[9]](#ref-9) [[11]](#ref-11).
2. **Petakna data Panjenengan.** Petakna data lokal menyang profil IPS: `Patient`, `AllergyIntolerance`, `MedicationStatement`, `Condition`, lan liya-liyané. Sebagéyan gedhé pagawéan ana ing pemetaan iki.
3. **Petakna terminologi Panjenengan.** Petakna kode lokal menyang SNOMED CT, LOINC, lan sistem kode obat. SNOMED CT IPS Terminology gratis kanggo tujuan iki [[12]](#ref-12).
4. **Gawé dokumen.** Dhukungen operasi `$summary`, utawa gawé `Bundle` lan `Composition` dhewe. Sertakna narasi sing bisa diwaca kanggo saben bagéan, lan pernyataan "ora dikenal" utawa "ora kasedhiya" sing cetha.
5. **Validasi.** Priksa saben dokumen sing digawé nganggo FHIR Validator lan piranti uji kesesuaian, kayata Inferno IPS Test Kit [[13]](#ref-13).
6. **Tandatangani lan tuduhna.** Putusna kepriyé dokumen ditandatangani, disimpen, lan dikirim: API, registri dokumen, gerbang lintas wates, utawa SMART Health Link.
7. **Gunakna kanthi aman.** Minangka panampa, tampilna narasi senajan Panjenengan ora bisa ngolah saben entri sing dienkode, tetepna sumber lan pangarang katon, lan aja nate nggabungake data sing katampa menyang rekam lokal kanthi meneng-meneng.
8. **Ujia bareng liyané.** Interoperasi karo vendor lan negara liya ing Connectathon IHE lan HL7 sadurungé live.

### Kanggo pamaréntah lan organisasi kesehatan

1. **Adopsi profil nasional** sing dibangun ing IPS tinimbang format sing kapisah, saéngga ringkesan nasional internasional kanthi baku [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
2. **Rampungna tata kelola:** sapa sing olèh nggawe, nganyari, lan ngesahake ringkesan, lan sapa sing tanggung jawab marang akurasiné.
3. **Rampungna lisensi terminologi:** keanggotaan SNOMED CT, utawa nggunakake subset IPS gratis.
4. **Rampungna identitas, persetujuan, lan kapercayan:** kepriyé pasien diidentifikasi, kepriyé persetujuan dicathet, lan kerangka kapercayan apa, kayata MyHealth@EU utawa WHO Global Digital Health Certification Network, sing digunakake kanggo verifikasi dokumen [[1]](#ref-1) [[14]](#ref-14).
5. **Terbitna apa sing wis dibangun** ing IPS Implementation Registry, supaya liyané bisa sinau saka kuwi [[15]](#ref-15).


## Nggabungake IPS karo sistem layanan kesehatan

IPS arang dadi sistem sing kapisah. Iku tampilan saka data sing wis ana ing EHR, pertukaran informasi kesehatan, rekam nasional, lan aplikasi kesehatan pribadi.

| Pola integrasi | Cara kerjané | Conto |
|---|---|---|
| **Digawé dening EHR** | EHR nggawé IPS saka datané dhewe yen dijaluk, asring liwat operasi FHIR `$summary`. | Vendor EHR lan server FHIR kayata HAPI FHIR, sing duwé modul generator IPS |
| **Rekam nasional utawa regional** | Layanan ringkesan pasien nasional nyimpen profil IPS lan nyedhiyakake kanggo penyedia layanan sing dikuasakake. | PS-CA Kanada, AU Patient Summary Australia, rekam pasien elektronik Swiss karo CH IPS [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6) |
| **Gerbang lintas wates** | Saben negara ngoperasikake titik kontak nasional. Iku ngowahi ringkesan negara asal dadi format pertukaran sing wis disepakati, ngirim lintas wates, lan negara panampa nampilake nganggo basa lokal. | MyHealth@EU National Contact Points for eHealth [[1]](#ref-1) [[2]](#ref-2) |
| **Jaringan pertukaran regional** | Kementerian kesehatan nukar dokumen IPS liwat server FHIR nasional miturut pandhuan regional bebarengan. | IPS-LAC saka RACSEL lan Pan American Highway for Digital Health (PH4H) ing Amerika Latin lan Karibia [[16]](#ref-16) |
| **Dituduhake dening pasien** | Pasien nyimpen IPS ing aplikasi utawa dompet lan nuduhake nganggo kode QR utawa SMART Health Link. | CommonHealth; karya IPS jaringan kapercayan WHO kanggo ibadah haji [[10]](#ref-10) [[14]](#ref-14) |
| **Akses adhedhasar API** | Aplikasi njupuk IPS kanggo pasien sing dikuasakake liwat API FHIR. | International Patient Access (IPA); jaringan AS kayata Flexpa, sing nambahake dhukungan IPS ing sangisoré CMS Interoperability Framework [[17]](#ref-17) [[18]](#ref-18) |

Titik integrasi sing kudu direncanakake:

- **Nuduhake dokumen:** profil IHE kayata MHD (FHIR) lan XDS (registri dokumen) nyimpen lan nemokake dokumen IPS. Profil isi IHE IPS nambahi aturan kesesuaian lan pengujian [[11]](#ref-11).
- **Identitas pasien:** IHE PIXm lan PDQm, utawa pengenal nasional, nyocokake pasien ing antarané sistem.
- **Dokumen sing wis ana:** akèh sistem wis ngasilake CDA, C-CDA, utawa ringkesan nasional. Mapping iki menyang IPS biasané luwih gampang tinimbang miwiti saka wiwitan, nanging priksa bedané ing kardinalitas, set nilai, lan sistem kode.
- **Profil nasional:** inti nasional, kayata US Core, AU Core, CH Core, utawa JP Core, bisa beda saka IPS. Profil ringkesan pasien nasional nyocokake kekarone [[5]](#ref-5) [[6]](#ref-6) [[19]](#ref-19).
- **Terjemahan lan tampilan:** panampa kudu nampilake narasi lan nerjemahake entri sing dienkode nganggo jeneng tampilan kode ing basa panampa.
- **Keamanan:** gunakna TLS, dokumen ditandatangani yen dibutuhake, log audit (contoné IHE ATNA utawa BALP), lan kontrol akses sing diikat karo persetujuan.


## Adopsi saiki

IPS wis pindhah saka uji coba menyang program nasional lan regional. Statusé gampang owah, mula priksa sumber sing disambungake kanggo kahanan paling anyar.

- **IPS Implementation Registry.** Komunitas IPS njaga registri implementasi sing umum. Ing pertengahan 2026 isiné 34 entri, saka proyek IPS-LAC Argentina sing dimediasi penyedia nganti Better Health Program Vietnam [[15]](#ref-15).
- **Ekosistem FHIR.** Ing survei State of FHIR 2025 dening HL7 International lan Firely, 42 responden kandha yèn IPS dadi dhasar spesifikasi FHIR nasional, luwih akèh tinimbang pandhuan internasional liyané [[20]](#ref-20).
- **Riset.** Panaliten taun 2025 babagan adopsi IPS ngwawancarai para pemangku kepentingan, sing nudingi kualitas perawatan sing luwih apik lan keamanan pasien minangka manfaat utama [[21]](#ref-21).

| Negara utawa wilayah | Status |
|---|---|
| **Uni Eropa lan EEA** | MyHealth@EU nukar ringkesan pasien lan e-resep antarnegara. Presentasi Komisi Eropa 2026 nglaporake 17 Negara Anggota ditambah Norwegia wis live, kanthi sebagéyan gedhé liyané ngrancang melu [[2]](#ref-2) [[22]](#ref-22). Regulasi EHDS ndadèkaké pertukaran ringkesan pasien wajib ing taun 2029 [[23]](#ref-23). |
| **Kanada** | Pan-Canadian Patient Summary (PS-CA), sing disetujoni Canada Health Infoway ing Oktober 2022, dibangun ing IPS kanthi adaptasi Kanada [[4]](#ref-4). |
| **Australia** | AU Patient Summary, sing dibangun ing IPS lan AU Core, dikembangake dening HL7 Australia liwat program Sparked [[5]](#ref-5) [[24]](#ref-24). |
| **Swiss** | CH IPS 2.0.0 (uji coba) saka HL7 Switzerland dibangun ing IPS lan CH Core. Profil kapisah nambahake apa sing dibutuhake rekam pasien elektronik Swiss [[6]](#ref-6). |
| **Amerika Serikat** | Ora ana mandat federal kanggo IPS. AS nggunakake US Core lan USCDI. Lembaga federal melu karya IPS sacara internasional, lan sawetara jaringan ndhukung IPS kanthi sukarela [[18]](#ref-18). |
| **Amerika Latin lan Karibia** | Kementerian kesehatan RACSEL nggunakake pandhuan IPS-LAC regional. Ing taun 2023, 16 negara nukar dokumen IPS-LAC ing connectathon ing São Paulo [[16]](#ref-16). |
| **Jepang** | Peneliti wis mbangun lan validasi aplikasi ringkesan pasien adhedhasar IPS kanggo kasus panggunaan umum ing Jepang, nganggo JP Core [[19]](#ref-19). |
| **Taiwan lan Filipina** | Laporan implementasi 2025 njlentrehake rekam kesehatan pribadi lintas wates nganggo FHIR lan selaras karo IPS [[25]](#ref-25). |
| **G7** | Ing taun 2021 para menteri kesehatan G7 janji makarya menyang IPS lan nerbitake peta dalan IPS [[26]](#ref-26). |
| **WHO** | WHO Global Digital Health Certification Network nyakup ranah kapercayan adhedhasar IPS, kayata IPS sing bisa diverifikasi kanggo ibadah haji [[14]](#ref-14). |


## Hukum, regulasi, lan kebijakan miturut negara lan wilayah

IPS iku standar, dudu hukum. Hukum sing nemtokake apa negara kudu nukar ringkesan pasien, ing format apa, lan miturut aturan privasi apa. Iki ringkesan, dudu nasihat hukum. Tansah priksa teks hukum sing paling anyar.

| Yurisdiksi | Hukum utawa kebijakan | Maknané kanggo IPS |
|---|---|---|
| **Uni Eropa** | **European Health Data Space (EHDS) Regulation, (EU) 2025/327.** Diterbitake 5 Maret 2025; berlaku 26 Maret 2025 [[23]](#ref-23) [[27]](#ref-27). | Ringkesan pasien iku "kategori prioritas". Pertukaran ing format pertukaran EHR Eropa kudu bisa mlaku ing saben Negara Anggota ing taun 2029. Gambar medis, asil tes, lan laporan pulang nututi ing taun 2031 [[28]](#ref-28). Format ringkesan pasien adhedhasar HL7 IPS. |
| **Uni Eropa** | **Directive 2011/24/EU** babagan hak pasien ing layanan kesehatan lintas wates [[29]](#ref-29). | Nggawé eHealth Network, sing nyepakati pedoman ringkesan pasien ing mburiné MyHealth@EU. |
| **Uni Eropa** | **General Data Protection Regulation (GDPR), (EU) 2016/679** [[30]](#ref-30). | Data kesehatan iku kategori khusus. Saben pertukaran IPS mbutuhake dhasar hukum lan pengamanan sing cocog. |
| **Amerika Serikat** | **21st Century Cures Act lan aturan pamblokiran informasi** [[31]](#ref-31); **CMS Interoperability Framework** (2025) sing sukarela [[17]](#ref-17). | Ora ana hukum sing mbutuhake IPS. Hukum mbutuhake akses lan pertukaran informasi kesehatan elektronik, nganggo US Core lan USCDI. Dhukungan IPS sukarela. |
| **Kanada** | Hukum informasi kesehatan provinsi lan teritori. **Connected Care for Canadians Act** federal (Bill C-72) dikenalake ing 2024 nanging ora lolos sadurungé Parlemen ditunda ing 2025. | PS-CA iku spesifikasi pan-Kanada, dudu persyaratan hukum. Adopsi dipimpin provinsi lan teritori bareng Canada Health Infoway [[4]](#ref-4). |
| **Inggris Raya** | **Data (Use and Access) Act 2025** [[32]](#ref-32). | Nyakup wewenang nemtokake standar informasi kanggo TI layanan kesehatan lan sosial wong diwasa. Inggris dadi tuan rumah komitmen IPS G7 2021 [[26]](#ref-26). |
| **Australia** | **My Health Records Act 2012** lan amandemen "sharing by default" 2025. | AU Patient Summary iku spesifikasi nasional sing dikembangake liwat Sparked [[5]](#ref-5) [[24]](#ref-24). |
| **Swiss** | **Undang-Undang Federal 19 Juni 2015 babagan Rekam Pasien Elektronik (EPRA, SR 816.1)**, berlaku wiwit 15 April 2017 [[33]](#ref-33). | CH IPS nyakup profil kanggo dokumen ing rekam pasien elektronik Swiss [[6]](#ref-6). |
| **Amerika Latin lan Karibia** | Persetujuan regional liwat RACSEL lan PH4H, kanthi dhukungan Inter-American Development Bank kanggo kerangka hukum regional [[16]](#ref-16). | IPS-LAC iku format regional sing disepakati kanggo pertukaran lintas wates. |
| **G7** | **Komunike Menteri Kesehatan**, Oxford, Juni 2021, lan **G7 IPS Roadmap**, Desember 2021 [[26]](#ref-26) [[34]](#ref-34). | Komitmen politik makarya menyang IPS lan akses pasien, dudu hukum sing ngiket. |


## Kaluwihan lan kekurangan

| Kaluwihan | Kekurangan |
|---|---|
| **Perawatan ora direncanakake sing luwih aman.** Tenaga kesehatan weruh alergi, obat, lan masalah ing sawetara detik. | **Mung sabaik sumberé.** Data sumber sing wis lawas utawa salah ngasilake ringkesan sing lawas utawa salah. |
| **Siji format, sedonya.** Siji implementasi nyukupi kabutuhan nasional lan lintas wates. | **Variasi nasional.** Profil nasional nambahake aturan, saéngga "IPS sing valid" ing sawijining negara bisa mbutuhake pagawéan supaya ditampa ing negara liya. |
| **Dibangun ing standar terbuka lan mateng:** ISO, CEN, HL7 FHIR lan CDA, SNOMED CT, lan LOINC. | **Beban terminologi.** Mapping kode lokal menyang SNOMED CT lan LOINC iku pagawéan abot, lan SNOMED CT lengkap mbutuhake lisensi ing njaban subset IPS gratis. |
| **Bisa diwaca lan bisa diitung.** Narasi kanggo manungsa, data sing dienkode kanggo piranti lunak lan terjemahan. | **Narasi lan data sing dienkode bisa ora cocog** yen generatoré ora premati, lan panampa bisa percaya sing salah. |
| **Pemberdayaan pasien.** Pasien bisa nyimpen lan nuduhake ringkesane dhewe. | **Risiko privasi lan persetujuan.** Ringkesan sing bisa digawa iku sensitif, lan hukum lan model persetujuan beda-beda ing saben negara. |
| **Spesifikasi gratis** lan terminologi IPS gratis nyuda biaya [[12]](#ref-12). | **Owah-owahan versi.** STU 1, STU 1.1, lan STU 2 ana bebarengan, lan format EHDS ngrujuk versi sing luwih awal [[28]](#ref-28). |
| **Bisa digunakake maneh** kanggo sertifikat vaksinasi, riset, lan registri [[7]](#ref-7) [[8]](#ref-8). | **Sengaja minimal.** Dudu panggantos rekam lengkap utawa dokumen spesialisasi, lan celah kanggo panggunaan sekunder mbutuhake ekstensi [[7]](#ref-7). |
| **Dhukungan kuwat** saka pamaréntah, Uni Eropa, G7, WHO, lan badan standar. | **Adopsi ora rata.** Akèh negara lan vendor isih nglakoni uji coba, lan kesadaran pasien kurang. |


## Rencana lan arah ing mangsa ngarep

- **Uni Eropa, 2029:** pertukaran ringkesan pasien lan e-resep operasional ing kabèh Negara Anggota Uni Eropa miturut EHDS [[23]](#ref-23) [[28]](#ref-28).
- **Uni Eropa, 2031:** gambar medis, asil laboratorium, lan laporan pulang nggabung menyang format pertukaran EHR Eropa [[28]](#ref-28).
- **Ekspansi MyHealth@EU:** luwih akèh negara sing melu, lan layanan anyar kanggo asil laboratorium, laporan pulang, lan gambar medis [[2]](#ref-2) [[22]](#ref-22).
- **Adopsi FHIR IPS STU 2:** para pangembang pindhah menyang bagéan Alerts lan Patient Story, bagéan kosong sing cetha, lan terminologi SNOMED CT IPS [[9]](#ref-9).
- **Australia:** penerbitan AU Patient Summary Release 1, dirancang kanggo 2026 [[24]](#ref-24).
- **IPS Best Practices Project:** upaya komunitas kanggo nyathet pelajaran sing dipikolèh, kanthi pagawéan diwiwiti ing 2026.
- **Jaringan kapercayan WHO:** luwih akèh ranah kapercayan adhedhasar IPS kanggo dokumen kesehatan sing bisa diverifikasi lan digawa [[14]](#ref-14).
- **SMART Health Links:** distandarisasi liwat HL7, kanggo nuduhake sing dikontrol pasien [[10]](#ref-10).
- **Amerika Latin lan Karibia:** pertukaran IPS-LAC sing luwih jembar liwat PH4H [[16]](#ref-16).
- **Riset lan panggunaan sekunder:** pagawéan ngembangake ringkesan pasien kanggo riset klinis lan AI, nalika njaga inti tetep minimal [[7]](#ref-7).


## Glosarium

| Istilah | Teges |
|---|---|
| **IPS** | International Patient Summary |
| **FHIR** | Fast Healthcare Interoperability Resources, standar modern HL7 adhedhasar API |
| **CDA** | Clinical Document Architecture, standar dokumen XML HL7 |
| **IG** | Implementation Guide, set profil lan aturan kanggo ngetrapake standar |
| **Profile** | Versi sumber daya FHIR sing diwatesi kanggo panggunaan tartamtu |
| **SNOMED CT** | Systematized Nomenclature of Medicine – Clinical Terms |
| **LOINC** | Logical Observation Identifiers Names and Codes |
| **SMART Health Links** | Standar kanggo nuduhake data kesehatan liwat tautan utawa kode QR |
| **JIC** | Joint Initiative Council for Global Health Informatics Standardization |


## Sinau luwih lengkap

- HL7 FHIR IPS Implementation Guide: <https://hl7.org/fhir/uv/ips/>
- IPS continuous build: <https://build.fhir.org/ig/HL7/fhir-ips/>
- International Patient Summary project site: <https://international-patient-summary.net/>
- ISO 27269 (Health informatics — International patient summary): <https://www.iso.org/standard/79491.html>
- SNOMED CT IPS Terminology: <https://www.snomed.org/international-patient-summary-terminology>
- SMART Health Links: <https://docs.smarthealthit.org/smart-health-links/>


## Sumber daya

Tautan-tautan iki nyakup sumber, spesifikasi, piranti lunak, proyek, video, buku, lan riset babagan IPS. Sebagéyan gedhé wis dipriksa nalika kaca iki ditulis. Sawetara situs penerbit mblokir pemeriksaan otomatis, lan kuwi ditandhani *(ora dipriksa)*.

### Spesifikasi lan standar resmi

- [HL7 FHIR IPS Implementation Guide, current published version](https://hl7.org/fhir/uv/ips/) iku spesifikasi FHIR sing resmi.
- [HL7 FHIR IPS Implementation Guide, STU 2](https://hl7.org/fhir/uv/ips/STU2/)
- [HL7 FHIR IPS Implementation Guide, STU 1.1](https://hl7.org/fhir/uv/ips/STU1.1/)
- [HL7 FHIR IPS publication history](https://www.hl7.org/fhir/uv/ips/history.html) nyathet saben versi sing wis diterbitake.
- [HL7 FHIR IPS continuous build](https://build.fhir.org/ig/HL7/fhir-ips/) iku pagawéan paling anyar sing durung diundi.
- [Structure of the International Patient Summary](https://hl7.org/fhir/uv/ips/en/Structure-of-the-International-Patient-Summary.html) njlentrehake bagéan lan profil.
- [IPS design conventions](https://build.fhir.org/ig/HL7/fhir-ips/en/Design-Conventions.html) nyakup must-support, data sing ora ana, lan narasi.
- [IPS generation and data inclusion](https://build.fhir.org/ig/HL7/fhir-ips/en/Generation-and-Data-Inclusion.html) nyakup `$summary` lan carané milih isi.
- [HL7 CDA IPS Implementation Guide, continuous build](https://build.fhir.org/ig/HL7/CDA-IPS/)
- [HL7 CDA IPS product brief](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=483)
- [ISO 27269, Health informatics — International patient summary](https://www.iso.org/standard/79491.html) *(ora dipriksa)*
- [ISO/TC 215 Health informatics committee](https://www.iso.org/committee/54960.html) *(ora dipriksa)*
- [IHE FHIR International Patient Summary profile (FIIO)](https://profiles.ihe.net/PCC/FIIO/volume-1.html)
- [IHE PCC International Patient Summary supplement, 2020 (PDF)](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS_Rev1-0_PC_2020-03-17.pdf)
- [HL7 SMART Health Cards and Links Implementation Guide](https://hl7.org/fhir/uv/smart-health-cards-and-links/)
- [SMART Health Links documentation](https://docs.smarthealthit.org/smart-health-links/)
- [HL7 FHIR International Patient Access (IPA)](https://hl7.org/fhir/uv/ipa/) iku spesifikasi sadulur kanggo akses API pasien.
- [HL7 FHIR R4 base specification](https://hl7.org/fhir/R4/), sing dadi dhasaré IPS.

### Repositori sumber

- [HL7/fhir-ips](https://github.com/HL7/fhir-ips) nyimpen sumber IG FHIR IPS ing FHIR Shorthand.
- [HL7/cda-ips](https://github.com/HL7/cda-ips) nyimpen sumber IG CDA IPS.
- [hl7-eu/eps](https://github.com/hl7-eu/eps) nyimpen sumber HL7 Europe Patient Summary.
- [hl7ch/ch-ips](https://github.com/hl7ch/ch-ips) nyimpen IPS Swiss, kanthi viewer lan generator sing isih dikembangake.
- [GitHub topic: international-patient-summary](https://github.com/topics/international-patient-summary) nyathet repositori komunitas.

### Adaptasi nasional lan regional

- [HL7 Europe Patient Summary (EPS), continuous build](https://build.fhir.org/ig/hl7-eu/eps/)
- [AU Patient Summary (Australia), continuous build](https://build.fhir.org/ig/hl7au/au-fhir-ps/)
- [Trillium II IPS structure (HL7 Europe)](https://hl7.eu/fhir/build/trillium2/site/ipsStructure.html) saka proyek Uni Eropa–AS sing mbiyantu miwiti IPS.
- [eHealth Suisse](https://www.ehealthsuisse.ch/) iku pusat kompetensi Swiss kanggo kesehatan digital lan adopsi IPS.
- [MyHealth@EU, cross-border digital health services](https://health.ec.europa.eu/ehealth-digital-health-and-care/electronic-cross-border-health-services_en)
- [Xt-EHR Joint Action](https://www.xt-ehr.eu/) nyiapake format European Health Data Space, kalebu ringkesan pasien.

### Piranti lunak lan piranti

- [IPS Viewer](https://www.ipsviewer.com) ([source: jddamore/IPSviewer](https://github.com/jddamore/IPSviewer)) iku viewer IPS sumber terbuka adhedhasar browser.
- [uwcirg/shl-ips-viewer](https://github.com/uwcirg/shl-ips-viewer) nampilake IPS sing dituduhake liwat SMART Health Link.
- [smart-on-fhir/smart-health-links](https://github.com/smart-on-fhir/smart-health-links) iku implementasi rujukan SMART Health Links.
- [HAPI FHIR IPS generator](https://hapifhir.io/hapi-fhir/docs/server_ips/introduction.html) ([source: hapifhir/hapi-fhir](https://github.com/hapifhir/hapi-fhir)) iku modul server Java sumber terbuka sing ngimplementasekake `$summary`.
- [HAPI FHIR JPA server IPS documentation](https://hapifhir.io/hapi-fhir/docs/server_jpa/ips.html)
- [Inferno IPS Test Kit](https://inferno.healthit.gov/test-kits/ips) ([source: inferno-framework/ips-test-kit](https://github.com/inferno-framework/ips-test-kit)) iku piranti uji kesesuaian sumber terbuka.
- [FHIR Validator](https://validator.fhir.org/) validasi bundel IPS marang profil IG.
- [Simplifier: hl7.fhir.uv.ips package](https://simplifier.net/packages/hl7.fhir.uv.ips) duwé paket, profil, lan conto.
- [FHIR package registry](https://registry.fhir.org/)
- [FHIR Shorthand (FSH) School](https://fshschool.org/) ngajari basa sing digunakake kanggo nulis IPS IG.
- [CommonHealth](https://www.commonhealth.org/) iku aplikasi pasien sing nggawé IPS lan nuduhake liwat SMART Health Links.
- [WHO SMART Trust](https://github.com/WorldHealthOrganization/smart-trust) iku kerangka kapercayan kanggo WHO Global Digital Health Certification Network.

### Organisasi lan proyek

- [International Patient Summary project site](https://international-patient-summary.net/) duwé warta, laporan adopsi, lan pendhidhikan.
- [IPS for health IT developers](https://international-patient-summary.net/health-it-developer/)
- [HL7 International](https://www.hl7.org/)
- [IHE International](https://www.ihe.net/)
- [SNOMED International](https://www.snomed.org/)
- [SNOMED CT IPS Terminology](https://www.snomed.org/international-patient-summary-terminology) iku subset gratis kanggo panggunaan IPS.
- [LOINC](https://loinc.org/) *(ora dipriksa)*
- [Joint Initiative Council for Global Health Informatics Standardization (JIC)](http://www.jointinitiativecouncil.org/)
- [Global Digital Health Partnership (GDHP)](https://gdhp.health/)
- [WHO SMART Guidelines](https://smart.who.int/)
- [WHO Global Digital Health Certification Network](https://www.who.int/initiatives/global-digital-health-certification-network)

### Komunitas lan acara

- [chat.fhir.org](https://chat.fhir.org/) iku obrolan komunitas FHIR, sing duwé aliran IPS sing aktif.
- [HL7 FHIR Connectathons](https://www.hl7.org/events/fhir-connectathon/)
- [IHE Connectathons](https://www.ihe.net/participate/connectathon/)

### Video

- [HIMSS20: IPS for computable care guidelines in 200 seconds or less (IHE International, YouTube)](https://www.youtube.com/watch?v=xjEzGM8kBPw)
- [IHE International YouTube channel](https://www.youtube.com/@IHEIntl) duwé panel Connectathon lan sesi IPS.
- [IPS project site news](https://international-patient-summary.net/) nyambungake menyang akèh webinar rekaman, kalebu:
  - the IPS panel at the IHE North America Connectathon, 2024
  - the IPS session at FHIR DevDays 2023
  - Grahame Grieve on IPS and IPA, IHE Connectathon Montreux 2022
  - the SNOMED CT Expo 2022 keynote
  - Matthew Rahn on IPS in the GDHP
  - the HL7 "Global Passport" cross-border webinar
- [YouTube search: International Patient Summary](https://www.youtube.com/results?search_query=international+patient+summary)

### Buku

- Tim Benson and Grahame Grieve, [*Principles of Health Interoperability: FHIR, HL7 and SNOMED CT*](https://link.springer.com/book/10.1007/978-3-030-56883-2), 4th edition, Springer, 2020. Nyakup FHIR, sumber daya ringkesan klinis, lan terminologi.

### Makalah riset lan artikel

- Laleci Erturkmen G. B., Sinaci A. A., Namli T., Boonstra M., et al., "[An assessment of the European Patient Summary for clinical research: a case study in cardiology](https://doi.org/10.3389/fmed.2024.1481551)", *Frontiers in Medicine*, 2024.
- Lee H., Huang J., Huang S., Chen W., et al., "[Implementing a Cross-Border Next-Generation Personal Health Record in the Philippines and Taiwan: An Implementation Case Report Using Health Level 7 International Fast Healthcare Interoperability Resources](https://doi.org/10.2196/56272)", *JMIR Formative Research*, 2025.
- Song C., Nakayama M., "[Implementation of a Patient Summary Web Application According to the International Patient Summary and Validation in Common Use Cases in Japan](https://doi.org/10.1007/s10916-023-01993-6)", *Journal of Medical Systems*, 2023.
- Schippers D., Spil T., Stegwee R., Folmer E., Donnelly S., "[The adoption and diffusion of the International Patient Summary](https://doi.org/10.24251/hicss.2025.425)", *Proceedings of the 58th Hawaii International Conference on System Sciences (HICSS)*, 2025.
- da Silva Carvalho N., Papadimitriou A., Stegwee R., Gille H., et al., "[Accelerating European electronic health record exchange format (EEHRxF) implementation across Europe: a policy perspective](https://doi.org/10.3389/fmed.2025.1648170)", *Frontiers in Medicine*, 2025.
- Kay S., Cangioli G., Nusbaum M., "[The International Patient Summary and the extensibility requirement](https://international-patient-summary.net/the-international-patient-summary-and-the-extensibility-requirement/)", *Studies in Health Technology and Informatics* (pHealth), 2020.
- D'Amore J., Cangioli G., Hausam R., "[Advancing the International Patient Summary](https://international-patient-summary.net/advancing-the-international-patient-summary/)"
- "[Towards the Austrian Patient Summary](https://international-patient-summary.net/towards-the-austrian-patient-summary/)", *Studies in Health Technology and Informatics* (dHealth).
- "[Revival of the International Patient Summary (IPS)](https://smiledigitalhealth.com/our-blog/revival-of-the-international-patient-summary-ips)", Smile Digital Health blog.
- [PubMed search: "international patient summary"](https://pubmed.ncbi.nlm.nih.gov/?term=%22international+patient+summary%22) kanggo literatur sing wis ditinjau sejawat.


## References

Nomer kutipan ing teks, kayata [1], nyambung menyang entri sing cocog ing ngisor iki. Tautan-tautan dipriksa ing wulan November 2026. Hukum, angka adopsi, lan versi bisa owah, mula priksa sumber kanggo kahanan paling anyar.

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

Sumber-sumber iki ora dikutip ing ndhuwur, nanging iku rujukan utama kanggo standar kasebut dhewe.

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
