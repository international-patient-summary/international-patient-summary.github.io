# Ringkasan Pasien Internasional (IPS)

**Ringkasan Pasien Internasional (International Patient Summary, IPS)** adalah standar dunia untuk kutipan singkat dari rekam kesehatan elektronik. Isinya adalah fakta klinis dasar yang dibutuhkan seorang klinisi untuk merawat pasien dengan aman. IPS dirancang agar:

- **Minimal dan tidak menyeluruh.** Ini adalah himpunan bagian kecil yang dipilih dengan cermat dari rekam kesehatan, bukan rekam lengkap.
- **Tidak terikat spesialisasi.** Klinisi mana pun dapat menggunakannya, di bidang apa pun.
- **Tidak bergantung pada kondisi.** IPS tidak terikat pada penyakit atau jalur perawatan tertentu.
- **Dapat diimplementasikan dan internasional.** IPS dibangun di atas standar dan terminologi global sehingga dapat dipakai lintas negara, bahasa, dan sistem TI.

Singkatnya, IPS menjawab satu pertanyaan bagi klinisi yang belum pernah bertemu pasien: *"Apa yang perlu saya ketahui sekarang untuk merawat orang ini dengan aman?"*


## Mengapa IPS ada

Informasi kesehatan biasanya terkunci di dalam rekam kesehatan elektronik (RKE) lokal, sistem nasional, atau produk vendor. Ketika pasien mencari perawatan di tempat lain, seperti rumah sakit, wilayah, atau negara lain, klinisi yang merawatnya sering tidak punya akses ke riwayat itu. IPS memberi semua pihak satu format ringkasan yang dibagikan bersama dan dapat dibawa ke mana-mana.

### Kasus penggunaan utama

| Kasus penggunaan | Deskripsi |
|---|---|
| **Perawatan tak terjadwal dan gawat darurat** | Pasien jatuh sakit atau terluka jauh dari rumah, dan klinisi setempat tidak dapat mengakses RKE asal pasien. Ini adalah kasus penggunaan asli dan utama. |
| **Perawatan lintas batas** | Pelancong, migran, pekerja lintas batas, dan pengungsi membawa ringkasan yang dapat dibaca klinisi di luar negeri. |
| **Perawatan terencana dan transisi** | Rujukan, konsultasi spesialis, rawat inap, pemulangan, dan serah terima antarpenyedia layanan. |
| **Wisata medis dan mobilitas** | Pasien yang memilih menerima perawatan di yurisdiksi lain. |
| **Pemberdayaan pasien** | Pasien menyimpan, melihat, dan membagikan ringkasan mereka sendiri dari aplikasi ponsel, portal, atau salinan cetak. |


## Kapan menggunakan IPS

Gunakan IPS ketika seseorang yang tidak mengenal pasien membutuhkan gambaran yang tepercaya dengan cepat, dan ketika pengirim serta penerima tidak berbagi sistem TI.

### Kecocokan yang baik

- **Perawatan darurat dan tak terencana**, terutama jauh dari rumah atau melintasi perbatasan. Inilah penggunaan yang menjadi tujuan perancangan IPS.
- **Pertukaran lintas batas antarsistem nasional**, seperti layanan MyHealth@EU milik Uni Eropa [[1]](#ref-1) [[2]](#ref-2).
- **Ringkasan yang dipegang pasien**, yang dibawa pelancong, migran, pengungsi, peziarah, atau orang dengan kondisi kompleks di ponsel atau di atas kertas [[3]](#ref-3).
- **Ringkasan pasien nasional atau regional.** Banyak negara membangun ringkasan mereka sendiri sebagai profil IPS, sehingga ringkasan itu juga dapat dipertukarkan secara internasional [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
- **Dasar bersama untuk transisi perawatan**, seperti rujukan, rawat inap, dan pemulangan, ketika dokumen khusus yang lebih kaya tidak tersedia.
- **Titik awal untuk set data lain**, seperti sertifikat vaksinasi, data penelitian, atau registri yang membutuhkan fakta inti yang sama [[7]](#ref-7) [[8]](#ref-8).

### Kecocokan yang buruk

- **Rekam medis lengkap.** IPS sengaja dibuat minimal. Gunakan ekspor rekam lengkap atau dokumen khusus ketika detail penting.
- **Dokumen khusus spesialisasi**, seperti ringkasan perawatan onkologi, rekam kehamilan, atau ringkasan pemulangan yang rinci. Dokumen ini punya standar sendiri yang dapat memuat atau merujuk isi IPS.
- **Alur kerja klinis waktu nyata di dalam satu organisasi.** Di dalam satu RKE, kueri data langsung, bukan gambaran ringkasan.
- **Catatan hukum, penagihan, atau asuransi.** IPS adalah ringkasan klinis, bukan catatan administratif atau klaim.
- **Keputusan yang membutuhkan kelengkapan terjamin.** IPS hanya selengkap dan semutakhir sumber dan penulisnya. Selalu konfirmasi fakta penting dengan pasien bila memungkinkan.


## Isi sebuah IPS

Dokumen IPS memiliki dua lapisan:

1. **Header yang mencatat siapa, apa, dan kapan:**
   - **Pasien:** identitas, demografi, dan kontak.
   - **Penulis:** orang, organisasi, atau sistem yang menghasilkan ringkasan.
   - **Kustodian (custodian):** organisasi yang bertanggung jawab memeliharanya.
   - **Pengesah (attester):** siapa yang telah memverifikasinya, jika ada.
   - **Tanggal dan waktu:** kapan dibuat.

2. **Badan klinis yang disusun dalam bagian-bagian.** Bagian bersifat wajib, direkomendasikan, atau opsional.

| Bagian | Status | Isi umum |
|---|---|---|
| **Ringkasan Obat** | Wajib | Obat saat ini dan obat masa lalu yang relevan, resep, dosis |
| **Alergi dan Intoleransi** | Wajib | Alergi obat, makanan, dan lingkungan; reaksi dan tingkat keparahan |
| **Daftar Masalah** | Wajib | Diagnosis aktif, kondisi, dan masalah klinis |
| Imunisasi | Direkomendasikan | Vaksin yang diberikan, seperti tetanus, hepatitis B, influenza, COVID-19 |
| Riwayat Prosedur | Direkomendasikan | Operasi besar dan intervensi invasif |
| Alat Medis | Direkomendasikan | Implan dan alat, seperti alat pacu jantung, stent, prostesis |
| Hasil Diagnostik | Direkomendasikan | Hasil laboratorium utama, laporan pencitraan, patologi |
| Tanda Vital | Opsional | Tekanan darah, denyut jantung, berat badan, tinggi badan, IMT |
| Riwayat Penyakit Terdahulu | Opsional | Kondisi yang telah sembuh dan masalah penting di masa lalu |
| Status Fungsional | Opsional | Disabilitas dan kemampuan melakukan aktivitas sehari-hari |
| Rencana Perawatan | Opsional | Rencana perawatan dan rekomendasi pengobatan |
| Riwayat Sosial | Opsional | Tembakau, alkohol, dan faktor gaya hidup relevan lainnya |
| Riwayat Kehamilan | Opsional | Status kehamilan saat ini dan riwayat kehamilan |
| Arahan Lanjutan | Opsional | Wasiat hidup, preferensi resusitasi, pernyataan persetujuan |
| Peringatan | Opsional | Peringatan penting bagi keselamatan yang tidak cocok di tempat lain (ditambahkan di FHIR IPS STU 2) |
| Kisah Pasien | Opsional | Apa yang penting bagi pasien: kebutuhan, kekuatan, nilai, kekhawatiran, dan preferensi, dalam istilah pasien sendiri (ditambahkan di FHIR IPS STU 2) |

**Menyatakan "tidak ada" secara eksplisit itu penting.** Bagian yang kosong tidak memberi tahu klinisi apakah pasien tidak punya alergi atau apakah tidak ada yang mencatatnya. Karena itu IPS mengharapkan pernyataan eksplisit seperti *"tidak ada alergi yang diketahui"*, *"tidak ada obat saat ini"*, atau *"informasi tidak tersedia"*.


## Standar di balik IPS

IPS adalah keluarga standar yang terkoordinasi. Standar ISO dan CEN menentukan *apa* yang harus dimuat dalam ringkasan pasien. Panduan implementasi HL7 menentukan *bagaimana* mengodekannya.

| Standar | Badan | Peran |
|---|---|---|
| **EN 17269** | CEN (Komite Standardisasi Eropa) | Set data IPS abstrak, terbit tahun 2019 |
| **ISO 27269** | ISO (Organisasi Internasional untuk Standardisasi) | Versi internasional set data IPS abstrak, terbit tahun 2021 |
| **CEN/TS 17288** | CEN | Panduan penerapan IPS untuk penggunaan lintas batas |
| **Panduan Implementasi HL7 FHIR IPS** | HL7 International | Pengodean modern yang ramah API dan format implementasi utama. STU 2 (2.0.x) menambahkan bagian Peringatan dan Kisah Pasien, mengizinkan bagian kosong, memperjelas `$summary`, dan beralih ke terminologi SNOMED CT IPS [[9]](#ref-9). |
| **Panduan Implementasi HL7 CDA IPS** | HL7 International | Pengodean berbasis dokumen XML, umum pada infrastruktur nasional dan Eropa yang sudah ada |

Pekerjaan ini dikoordinasikan melalui **Joint Initiative Council for Global Health Informatics Standardization (JIC)**. JIC menghimpun ISO, CEN, HL7, SNOMED International, IHE, dan lainnya. IPS tumbuh dari kolaborasi UE–AS tahun 2016 tentang data kesehatan lintas batas dan kini didukung oleh pemerintah serta program kesehatan digital di seluruh dunia.


## Cara IPS dikodekan dengan HL7 FHIR

Dalam FHIR, sebuah IPS adalah satu **`Bundle`** bertipe `document`:

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

Poin teknis utama:

- **Setiap bagian memiliki narasi yang dapat dibaca manusia.** Klinisi dapat membaca IPS di peramban biasa, bahkan tanpa perangkat lunak FHIR.
- **Setiap bagian juga memiliki entri berkode**, yaitu sumber daya FHIR terstruktur yang dapat diproses, diterjemahkan, dan direkonsiliasi oleh perangkat lunak.
- **Profil membatasi sumber daya FHIR dasar.** Misalnya, *Patient (IPS)* dan *AllergyIntolerance (IPS)* menetapkan data minimum dan elemen "must support".
- **Operasi `$summary`** (`GET [base]/Patient/[id]/$summary`) meminta server FHIR membuat IPS untuk seorang pasien sesuai permintaan.
- **IPS dapat ditandatangani dan berdiri sendiri.** Dokumen lengkap dapat disimpan, dikirim, ditandatangani, dan diverifikasi sebagai satu kesatuan.


## Terminologi

Sistem kode bersama membuat IPS dapat dibaca lintas bahasa dan negara:

| Terminologi | Digunakan untuk |
|---|---|
| **SNOMED CT** | Masalah, alergi, prosedur, alat, temuan klinis. Himpunan bagian gratis, **Terminologi SNOMED CT IPS**, tersedia untuk penggunaan IPS, bahkan di negara non-anggota. |
| **LOINC** | Jenis dokumen dan bagian, pemeriksaan laboratorium, tanda vital |
| **ATC** dan sistem kode obat lainnya | Produk obat dan zat aktif |
| **UCUM** | Satuan ukur |
| **Himpunan nilai ISO dan HL7** | Negara, bahasa, jenis kelamin administratif, alasan ketiadaan dan ketidaktahuan |

Karena entri berkode, sistem penerima dapat menampilkan IPS yang ditulis dalam bahasa Portugis dengan label berbahasa Inggris. Makna yang dikodekan tetap sama.


## Cara pasien dan klinisi menggunakan IPS

IPS dapat dihasilkan oleh RKE, layanan rekam kesehatan nasional, portal pasien, atau aplikasi kesehatan pribadi. Setelah itu IPS dapat disampaikan dengan beberapa cara:

- **Sistem ke sistem:** melalui REST API FHIR, infrastruktur nasional, atau gerbang lintas batas seperti jaringan MyHealth@EU milik Uni Eropa.
- **Pembagian yang dimediasi pasien:** pasien menyimpan ringkasan di dompet atau aplikasi kesehatan dan membagikannya sesuai permintaan.
- **SMART Health Links:** kode QR atau URL yang memberi klinisi akses terbatas waktu, dengan opsi perlindungan kode sandi, ke IPS terenkripsi. Klinisi dapat membukanya di peramban web biasa.
- **Kertas atau PDF:** tampilan naratif tercetak sebagai cadangan ketika yang lain tidak berfungsi.

Aplikasi seperti **CommonHealth** memungkinkan pasien mengumpulkan rekam mereka dan membagikan IPS melalui SMART Health Links.

Skenario gawat darurat yang khas:

1. Seorang pelancong pingsan di luar negeri.
2. Pelancong itu, atau pendampingnya, menunjukkan kode QR dari ponsel.
3. Dokter gawat darurat memindainya dan dalam hitungan detik melihat obat, alergi, dan masalah aktif pelancong tersebut.
4. Dokter menghindari interaksi obat yang berbahaya dan merawat pasien dengan aman.


## Prinsip dan pilihan desain

- **Keselamatan lebih dulu.** Isi dipilih berdasarkan relevansi klinis, bukan kelengkapan.
- **Global secara bawaan, lokal melalui ekstensi.** Negara membuat profil nasional, seperti varian UE, Australia, atau Kanada, yang menambah persyaratan tanpa merusak inti internasional.
- **Dapat dibaca manusia dan dapat diproses mesin.** Narasi dan data berkode hidup berdampingan.
- **Gratis dan terbuka.** Spesifikasi HL7 IPS dan himpunan bagian IPS SNOMED CT tersedia gratis untuk menurunkan hambatan adopsi.
- **Privasi dan persetujuan.** Akses diatur oleh hukum setempat dan persetujuan pasien. Mekanisme seperti SMART Health Links menjaga pasien tetap memegang kendali.


## Cara menggunakan IPS

### Untuk pasien

1. **Mintalah satu.** Tanyakan kepada klinik, rumah sakit, portal kesehatan nasional, atau aplikasi kesehatan Anda apakah mereka dapat membuat IPS atau ringkasan pasien nasional yang didasarkan padanya.
2. **Periksa.** Bacalah saat Anda sehat. Laporkan apa pun yang salah atau hilang, terutama alergi dan obat.
3. **Bawa bersama Anda.** Simpan di aplikasi kesehatan atau dompet, sebagai kode QR SMART Health Link, atau sebagai cetakan di antara dokumen perjalanan Anda.
4. **Jaga tetap mutakhir.** Dapatkan yang baru setelah diagnosis baru, obat jangka panjang baru, operasi, atau implan.
5. **Bagikan dengan sengaja.** Tunjukkan kepada klinisi yang merawat Anda. SMART Health Link dapat kedaluwarsa dan dapat meminta kode sandi, sehingga Anda mengendalikan siapa yang melihatnya dan untuk berapa lama [[10]](#ref-10).

### Untuk klinisi

1. **Periksa header lebih dulu.** Siapa yang menulis, kapan, dan apakah ada yang telah memverifikasinya. Ringkasan lama atau belum diverifikasi memerlukan kehati-hatian lebih.
2. **Baca bagian wajib lebih dulu:** alergi, obat, dan masalah.
3. **Bedakan "tidak ada yang diketahui" dari "tidak dicatat".** "Tidak ada alergi yang diketahui" adalah pernyataan klinis. Bagian kosong atau "tidak diketahui" bukan.
4. **Konfirmasi fakta penting** dengan pasien atau pendampingnya kapan pun Anda bisa.
5. **Gunakan data berkode.** Jika sistem Anda mendukungnya, entri berkode memungkinkan ringkasan ditampilkan dalam bahasa Anda dan diperiksa terhadap aturan interaksi obat dan alergi.
6. **Jangan berasumsi lengkap.** IPS adalah jaring pengaman, bukan riwayat lengkap.

### Untuk pelaksana implementasi

1. **Pilih spesifikasi.** Gunakan Panduan Implementasi HL7 FHIR IPS terkini (STU 2), atau profil nasional negara Anda yang didasarkan padanya. Untuk infrastruktur berbasis CDA, gunakan panduan CDA IPS [[9]](#ref-9) [[11]](#ref-11).
2. **Petakan data Anda.** Petakan data lokal ke profil IPS: `Patient`, `AllergyIntolerance`, `MedicationStatement`, `Condition`, dan seterusnya. Sebagian besar pekerjaan ada pada pemetaan ini.
3. **Petakan terminologi Anda.** Petakan kode lokal ke SNOMED CT, LOINC, dan sistem kode obat. Terminologi SNOMED CT IPS gratis digunakan untuk tujuan ini [[12]](#ref-12).
4. **Hasilkan dokumen.** Dukung operasi `$summary`, atau bangun sendiri `Bundle` dan `Composition`. Sertakan narasi yang dapat dibaca untuk setiap bagian, dan pernyataan eksplisit "tidak ada yang diketahui" atau "tidak tersedia".
5. **Validasi.** Periksa setiap dokumen yang dihasilkan dengan FHIR Validator dan perangkat uji kesesuaian, seperti Inferno IPS Test Kit [[13]](#ref-13).
6. **Tandatangani dan bagikan.** Tentukan bagaimana dokumen ditandatangani, disimpan, dan dikirim: API, registri dokumen, gerbang lintas batas, atau SMART Health Link.
7. **Konsumsi dengan aman.** Sebagai penerima, tampilkan narasi meskipun Anda tidak dapat memproses setiap entri berkode, jaga agar sumber dan penulis tetap terlihat, dan jangan pernah menggabungkan data yang diterima ke rekam lokal secara diam-diam.
8. **Uji bersama pihak lain.** Lakukan interoperasi dengan vendor dan negara lain di Connectathon IHE dan HL7 sebelum beroperasi.

### Untuk pemerintah dan organisasi kesehatan

1. **Adopsi profil nasional** yang dibangun di atas IPS, bukan format terpisah, sehingga ringkasan nasional bersifat internasional secara bawaan [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
2. **Tetapkan tata kelola:** siapa yang boleh membuat, memperbarui, dan mengesahkan ringkasan, dan siapa yang bertanggung jawab atas keakuratannya.
3. **Tetapkan pelisensian terminologi:** keanggotaan SNOMED CT, atau penggunaan himpunan bagian IPS gratis.
4. **Tetapkan identitas, persetujuan, dan kepercayaan:** bagaimana pasien diidentifikasi, bagaimana persetujuan dicatat, dan kerangka kepercayaan mana, seperti MyHealth@EU atau Jaringan Sertifikasi Kesehatan Digital Global WHO, yang digunakan untuk memverifikasi dokumen [[1]](#ref-1) [[14]](#ref-14).
5. **Terbitkan apa yang telah Anda bangun** di Registri Implementasi IPS, agar orang lain dapat belajar darinya [[15]](#ref-15).


## Mengintegrasikan IPS dengan sistem layanan kesehatan

IPS jarang berupa sistem tersendiri. IPS adalah tampilan atas data yang sudah berada di RKE, pertukaran informasi kesehatan, rekam nasional, dan aplikasi kesehatan pribadi.

| Pola integrasi | Cara kerja | Contoh |
|---|---|---|
| **Dihasilkan oleh RKE** | RKE membangun IPS dari data miliknya sesuai permintaan, sering melalui operasi FHIR `$summary`. | Vendor RKE dan server FHIR seperti HAPI FHIR, yang memiliki modul pembangkit IPS |
| **Rekam nasional atau regional** | Layanan ringkasan pasien nasional menyimpan profil IPS dan menyediakannya bagi penyedia layanan yang berwenang. | PS-CA Kanada, AU Patient Summary Australia, rekam pasien elektronik Swiss dengan CH IPS [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6) |
| **Gerbang lintas batas** | Setiap negara menjalankan titik kontak nasional. Titik ini mengubah ringkasan negara asal ke format pertukaran yang disepakati, mengirimkannya melintasi perbatasan, dan negara penerima menampilkannya dalam bahasa setempat. | Titik Kontak Nasional eHealth MyHealth@EU [[1]](#ref-1) [[2]](#ref-2) |
| **Jaringan pertukaran regional** | Kementerian kesehatan bertukar dokumen IPS melalui server FHIR nasional di bawah panduan regional bersama. | IPS-LAC milik RACSEL dan Jalan Raya Pan-Amerika untuk Kesehatan Digital (PH4H) di Amerika Latin dan Karibia [[16]](#ref-16) |
| **Dimediasi pasien** | Pasien menyimpan IPS di aplikasi atau dompet dan membagikannya dengan kode QR atau SMART Health Link. | CommonHealth; pekerjaan IPS jaringan kepercayaan WHO untuk ziarah [[10]](#ref-10) [[14]](#ref-14) |
| **Akses berbasis API** | Aplikasi mengambil IPS untuk pasien yang berwenang melalui API FHIR. | International Patient Access (IPA); jaringan AS seperti Flexpa, yang menambahkan dukungan IPS di bawah Kerangka Interoperabilitas CMS [[17]](#ref-17) [[18]](#ref-18) |

Titik integrasi yang perlu direncanakan:

- **Berbagi dokumen:** profil IHE seperti MHD (FHIR) dan XDS (registri dokumen) menyimpan dan menemukan dokumen IPS. Profil konten IHE IPS menambahkan aturan kesesuaian dan pengujian [[11]](#ref-11).
- **Identitas pasien:** IHE PIXm dan PDQm, atau pengenal nasional, mencocokkan pasien lintas sistem.
- **Dokumen yang ada:** banyak sistem sudah menghasilkan CDA, C-CDA, atau ringkasan nasional. Memetakannya ke IPS biasanya lebih mudah daripada memulai dari awal, tetapi periksa perbedaan kardinalitas, himpunan nilai, dan sistem kode.
- **Profil nasional:** inti nasional, seperti US Core, AU Core, CH Core, atau JP Core, dapat berbeda dari IPS. Profil ringkasan pasien nasional mendamaikan keduanya [[5]](#ref-5) [[6]](#ref-6) [[19]](#ref-19).
- **Terjemahan dan tampilan:** penerima sebaiknya menampilkan narasi dan menerjemahkan entri berkode menggunakan nama tampilan kode dalam bahasa penerima.
- **Keamanan:** gunakan TLS, dokumen bertanda tangan jika diperlukan, pencatatan audit (misalnya IHE ATNA atau BALP), dan kontrol akses yang terkait dengan persetujuan.


## Adopsi saat ini

IPS telah bergerak dari uji coba menuju program nasional dan regional. Statusnya cepat berubah, jadi periksa sumber yang ditautkan untuk posisi terbaru.

- **Registri Implementasi IPS.** Komunitas IPS memelihara registri implementasi yang terbuka untuk umum. Pada pertengahan 2026 registri itu memuat 34 entri, dari proyek IPS-LAC Argentina yang dimediasi penyedia layanan hingga Better Health Program Vietnam [[15]](#ref-15).
- **Ekosistem FHIR.** Dalam survei State of FHIR 2025 oleh HL7 International dan Firely, 42 responden menyatakan bahwa IPS menjadi landasan spesifikasi FHIR nasional mereka, lebih banyak daripada panduan internasional lainnya [[20]](#ref-20).
- **Penelitian.** Studi tahun 2025 tentang adopsi IPS mewawancarai para pemangku kepentingan, yang menyebut peningkatan kualitas perawatan dan keselamatan pasien sebagai manfaat utama [[21]](#ref-21).

| Negara atau kawasan | Status |
|---|---|
| **Uni Eropa dan EEA** | MyHealth@EU mempertukarkan ringkasan pasien dan resep elektronik antarnegara. Presentasi Komisi Eropa tahun 2026 melaporkan 17 Negara Anggota ditambah Norwegia telah beroperasi, dengan sebagian besar sisanya berencana bergabung [[2]](#ref-2) [[22]](#ref-22). Regulasi EHDS mewajibkan pertukaran ringkasan pasien pada 2029 [[23]](#ref-23). |
| **Kanada** | Ringkasan Pasien Pan-Kanada (PS-CA), yang disetujui Canada Health Infoway pada Oktober 2022, dibangun di atas IPS dengan penyesuaian Kanada [[4]](#ref-4). |
| **Australia** | AU Patient Summary, yang dibangun di atas IPS dan AU Core, dikembangkan oleh HL7 Australia melalui program Sparked [[5]](#ref-5) [[24]](#ref-24). |
| **Swiss** | CH IPS 2.0.0 (uji coba penggunaan) dari HL7 Switzerland dibangun di atas IPS dan CH Core. Profil terpisah menambahkan apa yang dibutuhkan rekam pasien elektronik Swiss [[6]](#ref-6). |
| **Amerika Serikat** | Tidak ada mandat federal untuk IPS. AS menggunakan US Core dan USCDI. Lembaga federal ikut dalam pekerjaan IPS secara internasional, dan beberapa jaringan mendukung IPS secara sukarela [[18]](#ref-18). |
| **Amerika Latin dan Karibia** | Kementerian kesehatan RACSEL menggunakan panduan regional IPS-LAC. Pada 2023, 16 negara mempertukarkan dokumen IPS-LAC dalam sebuah connectathon di São Paulo [[16]](#ref-16). |
| **Jepang** | Para peneliti telah membangun dan memvalidasi aplikasi ringkasan pasien berbasis IPS untuk kasus penggunaan umum di Jepang, menggunakan JP Core [[19]](#ref-19). |
| **Taiwan dan Filipina** | Laporan implementasi 2025 menggambarkan rekam kesehatan pribadi lintas batas yang menggunakan FHIR dan selaras dengan IPS [[25]](#ref-25). |
| **G7** | Pada 2021 para menteri kesehatan G7 berkomitmen bekerja menuju IPS dan menerbitkan peta jalan IPS [[26]](#ref-26). |
| **WHO** | Jaringan Sertifikasi Kesehatan Digital Global WHO mencakup domain kepercayaan berbasis IPS, seperti IPS yang dapat diverifikasi untuk ziarah [[14]](#ref-14). |


## Hukum, regulasi, dan kebijakan menurut negara dan kawasan

IPS adalah standar, bukan undang-undang. Hukum menentukan apakah suatu negara wajib mempertukarkan ringkasan pasien, dalam format apa, dan di bawah aturan privasi apa. Ini adalah ringkasan, bukan nasihat hukum. Selalu periksa teks hukum terkini.

| Yurisdiksi | Hukum atau kebijakan | Artinya bagi IPS |
|---|---|---|
| **Uni Eropa** | **Regulasi European Health Data Space (EHDS), (EU) 2025/327.** Diterbitkan 5 Maret 2025; berlaku 26 Maret 2025 [[23]](#ref-23) [[27]](#ref-27). | Ringkasan pasien adalah "kategori prioritas". Pertukaran dalam format pertukaran RKE Eropa harus berfungsi di setiap Negara Anggota pada 2029. Citra medis, hasil pemeriksaan, dan laporan pemulangan menyusul pada 2031 [[28]](#ref-28). Format ringkasan pasien didasarkan pada HL7 IPS. |
| **Uni Eropa** | **Direktif 2011/24/EU** tentang hak pasien dalam layanan kesehatan lintas batas [[29]](#ref-29). | Membentuk eHealth Network, yang menyepakati pedoman ringkasan pasien di balik MyHealth@EU. |
| **Uni Eropa** | **Regulasi Perlindungan Data Umum (GDPR), (EU) 2016/679** [[30]](#ref-30). | Data kesehatan adalah kategori khusus. Setiap pertukaran IPS memerlukan dasar hukum dan pengamanan yang memadai. |
| **Amerika Serikat** | **21st Century Cures Act dan aturan pemblokiran informasi** [[31]](#ref-31); **Kerangka Interoperabilitas CMS** sukarela (2025) [[17]](#ref-17). | Tidak ada hukum yang mewajibkan IPS. Hukum mewajibkan akses dan pertukaran informasi kesehatan elektronik, dengan US Core dan USCDI. Dukungan IPS bersifat sukarela. |
| **Kanada** | Undang-undang informasi kesehatan provinsi dan teritori. **Connected Care for Canadians Act** (RUU C-72) federal diajukan pada 2024 tetapi tidak disahkan sebelum Parlemen ditangguhkan pada 2025. | PS-CA adalah spesifikasi pan-Kanada, bukan persyaratan hukum. Adopsi dipimpin provinsi dan teritori bersama Canada Health Infoway [[4]](#ref-4). |
| **Inggris Raya** | **Data (Use and Access) Act 2025** [[32]](#ref-32). | Mencakup kewenangan menetapkan standar informasi untuk TI kesehatan dan perawatan sosial dewasa. Inggris menjadi tuan rumah komitmen IPS G7 tahun 2021 [[26]](#ref-26). |
| **Australia** | **My Health Records Act 2012** dan amendemen "berbagi secara bawaan" 2025. | AU Patient Summary adalah spesifikasi nasional yang dikembangkan melalui Sparked [[5]](#ref-5) [[24]](#ref-24). |
| **Swiss** | **Undang-Undang Federal 19 Juni 2015 tentang Rekam Pasien Elektronik (EPRA, SR 816.1)**, berlaku sejak 15 April 2017 [[33]](#ref-33). | CH IPS mencakup profil untuk dokumen dalam rekam pasien elektronik Swiss [[6]](#ref-6). |
| **Amerika Latin dan Karibia** | Kesepakatan regional melalui RACSEL dan PH4H, dengan dukungan Bank Pembangunan Antar-Amerika untuk kerangka hukum regional [[16]](#ref-16). | IPS-LAC adalah format regional yang disepakati untuk pertukaran lintas batas. |
| **G7** | **Komunike Menteri Kesehatan**, Oxford, Juni 2021, dan **Peta Jalan IPS G7**, Desember 2021 [[26]](#ref-26) [[34]](#ref-34). | Komitmen politik untuk bekerja menuju IPS dan akses pasien, bukan hukum yang mengikat. |


## Kelebihan dan kekurangan

| Kelebihan | Kekurangan |
|---|---|
| **Perawatan tak terjadwal yang lebih aman.** Klinisi melihat alergi, obat, dan masalah dalam hitungan detik. | **Hanya sebaik sumbernya.** Data sumber yang usang atau salah menghasilkan ringkasan yang usang atau salah. |
| **Satu format, di seluruh dunia.** Satu implementasi melayani kebutuhan nasional dan lintas batas. | **Variasi nasional.** Profil nasional menambah aturan, sehingga "IPS yang valid" di satu negara mungkin memerlukan pekerjaan agar diterima di negara lain. |
| **Dibangun di atas standar terbuka yang matang:** ISO, CEN, HL7 FHIR dan CDA, SNOMED CT, dan LOINC. | **Beban terminologi.** Memetakan kode lokal ke SNOMED CT dan LOINC itu berat, dan SNOMED CT penuh memerlukan lisensi di luar himpunan bagian IPS gratis. |
| **Dapat dibaca dan dapat dikomputasi.** Narasi untuk manusia, data berkode untuk perangkat lunak dan penerjemahan. | **Narasi dan data berkode bisa tidak cocok** jika pembangkitnya ceroboh, dan penerima mungkin memercayai yang salah. |
| **Pemberdayaan pasien.** Pasien dapat menyimpan dan membagikan ringkasan mereka sendiri. | **Risiko privasi dan persetujuan.** Ringkasan yang dapat dibawa bersifat sensitif, dan hukum serta model persetujuan berbeda di tiap negara. |
| **Spesifikasi gratis** dan terminologi IPS gratis menurunkan biaya [[12]](#ref-12). | **Perubahan versi.** STU 1, STU 1.1, dan STU 2 hidup berdampingan, dan format EHDS merujuk versi yang lebih awal [[28]](#ref-28). |
| **Dapat dipakai ulang** untuk sertifikat vaksinasi, penelitian, dan registri [[7]](#ref-7) [[8]](#ref-8). | **Sengaja minimal.** Bukan pengganti rekam lengkap atau dokumen spesialisasi, dan celah untuk penggunaan sekunder memerlukan ekstensi [[7]](#ref-7). |
| **Dukungan kuat** dari pemerintah, UE, G7, WHO, dan badan standar. | **Adopsi tidak merata.** Banyak negara dan vendor masih dalam tahap uji coba, dan kesadaran pasien rendah. |


## Rencana dan arah ke depan

- **UE, 2029:** pertukaran ringkasan pasien dan resep elektronik beroperasi di semua Negara Anggota UE di bawah EHDS [[23]](#ref-23) [[28]](#ref-28).
- **UE, 2031:** citra medis, hasil laboratorium, dan laporan pemulangan bergabung dengan format pertukaran RKE Eropa [[28]](#ref-28).
- **Perluasan MyHealth@EU:** semakin banyak negara bergabung, dan layanan baru untuk hasil laboratorium, laporan pemulangan, dan citra medis [[2]](#ref-2) [[22]](#ref-22).
- **Adopsi FHIR IPS STU 2:** pelaksana beralih ke bagian Peringatan dan Kisah Pasien, bagian kosong yang eksplisit, dan terminologi SNOMED CT IPS [[9]](#ref-9).
- **Australia:** penerbitan AU Patient Summary Release 1, direncanakan untuk 2026 [[24]](#ref-24).
- **Proyek Praktik Terbaik IPS:** upaya komunitas untuk mendokumentasikan pelajaran yang dipetik, dengan pekerjaan dimulai pada 2026.
- **Jaringan kepercayaan WHO:** lebih banyak domain kepercayaan berbasis IPS untuk dokumen kesehatan yang dapat diverifikasi dan dibawa [[14]](#ref-14).
- **SMART Health Links:** distandardisasi melalui HL7, untuk berbagi yang dikendalikan pasien [[10]](#ref-10).
- **Amerika Latin dan Karibia:** pertukaran IPS-LAC yang lebih luas melalui PH4H [[16]](#ref-16).
- **Penelitian dan penggunaan sekunder:** pekerjaan memperluas ringkasan pasien untuk penelitian klinis dan AI, sambil menjaga inti tetap minimal [[7]](#ref-7).


## Glosarium

| Istilah | Arti |
|---|---|
| **IPS** | Ringkasan Pasien Internasional (International Patient Summary) |
| **FHIR** | Fast Healthcare Interoperability Resources, standar modern HL7 berbasis API |
| **CDA** | Clinical Document Architecture, standar dokumen XML HL7 |
| **IG** | Panduan Implementasi (Implementation Guide), seperangkat profil dan aturan untuk menerapkan suatu standar |
| **Profil** | Versi terbatas dari sumber daya FHIR untuk penggunaan tertentu |
| **SNOMED CT** | Systematized Nomenclature of Medicine – Clinical Terms |
| **LOINC** | Logical Observation Identifiers Names and Codes |
| **SMART Health Links** | Standar untuk membagikan data kesehatan melalui tautan atau kode QR |
| **JIC** | Joint Initiative Council for Global Health Informatics Standardization |


## Pelajari lebih lanjut

- Panduan Implementasi HL7 FHIR IPS: <https://hl7.org/fhir/uv/ips/>
- Build berkelanjutan IPS: <https://build.fhir.org/ig/HL7/fhir-ips/>
- Situs proyek Ringkasan Pasien Internasional: <https://international-patient-summary.net/>
- ISO 27269 (Informatika kesehatan — Ringkasan pasien internasional): <https://www.iso.org/standard/79491.html>
- Terminologi SNOMED CT IPS: <https://www.snomed.org/international-patient-summary-terminology>
- SMART Health Links: <https://docs.smarthealthit.org/smart-health-links/>


## Sumber daya

Tautan ini mencakup sumber, spesifikasi, perangkat lunak, proyek, video, buku, dan penelitian tentang IPS. Sebagian besar telah diperiksa saat halaman ini ditulis. Beberapa situs penerbit memblokir pemeriksaan otomatis, dan ditandai *(tidak diperiksa)*.

### Spesifikasi dan standar resmi

- [Panduan Implementasi HL7 FHIR IPS, versi terbitan terkini](https://hl7.org/fhir/uv/ips/) adalah spesifikasi FHIR yang otoritatif.
- [Panduan Implementasi HL7 FHIR IPS, STU 2](https://hl7.org/fhir/uv/ips/STU2/)
- [Panduan Implementasi HL7 FHIR IPS, STU 1.1](https://hl7.org/fhir/uv/ips/STU1.1/)
- [Riwayat penerbitan HL7 FHIR IPS](https://www.hl7.org/fhir/uv/ips/history.html) mencantumkan setiap versi yang diterbitkan.
- [Build berkelanjutan HL7 FHIR IPS](https://build.fhir.org/ig/HL7/fhir-ips/) adalah pekerjaan terbaru yang sedang berjalan dan belum dipungut suara.
- [Struktur Ringkasan Pasien Internasional](https://hl7.org/fhir/uv/ips/en/Structure-of-the-International-Patient-Summary.html) menjelaskan bagian dan profil.
- [Konvensi desain IPS](https://build.fhir.org/ig/HL7/fhir-ips/en/Design-Conventions.html) mencakup must-support, data yang tidak ada, dan narasi.
- [Pembangkitan IPS dan penyertaan data](https://build.fhir.org/ig/HL7/fhir-ips/en/Generation-and-Data-Inclusion.html) mencakup `$summary` dan cara memilih konten.
- [Panduan Implementasi HL7 CDA IPS, build berkelanjutan](https://build.fhir.org/ig/HL7/CDA-IPS/)
- [Ringkasan produk HL7 CDA IPS](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=483)
- [ISO 27269, Informatika kesehatan — Ringkasan pasien internasional](https://www.iso.org/standard/79491.html) *(tidak diperiksa)*
- [Komite Informatika Kesehatan ISO/TC 215](https://www.iso.org/committee/54960.html) *(tidak diperiksa)*
- [Profil IHE FHIR Ringkasan Pasien Internasional (FIIO)](https://profiles.ihe.net/PCC/FIIO/volume-1.html)
- [Suplemen IHE PCC Ringkasan Pasien Internasional, 2020 (PDF)](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS_Rev1-0_PC_2020-03-17.pdf)
- [Panduan Implementasi HL7 SMART Health Cards and Links](https://hl7.org/fhir/uv/smart-health-cards-and-links/)
- [Dokumentasi SMART Health Links](https://docs.smarthealthit.org/smart-health-links/)
- [HL7 FHIR International Patient Access (IPA)](https://hl7.org/fhir/uv/ipa/) adalah spesifikasi saudara untuk akses API pasien.
- [Spesifikasi dasar HL7 FHIR R4](https://hl7.org/fhir/R4/), yang menjadi landasan IPS.

### Repositori sumber

- [HL7/fhir-ips](https://github.com/HL7/fhir-ips) memuat sumber IG FHIR IPS dalam FHIR Shorthand.
- [HL7/cda-ips](https://github.com/HL7/cda-ips) memuat sumber IG CDA IPS.
- [hl7-eu/eps](https://github.com/hl7-eu/eps) memuat sumber Ringkasan Pasien HL7 Europe.
- [hl7ch/ch-ips](https://github.com/hl7ch/ch-ips) memuat IPS Swiss, dengan penampil dan pembangkit yang sedang dikembangkan.
- [Topik GitHub: international-patient-summary](https://github.com/topics/international-patient-summary) mencantumkan repositori komunitas.

### Adaptasi nasional dan regional

- [Ringkasan Pasien HL7 Europe (EPS), build berkelanjutan](https://build.fhir.org/ig/hl7-eu/eps/)
- [AU Patient Summary (Australia), build berkelanjutan](https://build.fhir.org/ig/hl7au/au-fhir-ps/)
- [Struktur IPS Trillium II (HL7 Europe)](https://hl7.eu/fhir/build/trillium2/site/ipsStructure.html) berasal dari proyek UE–AS yang membantu memulai IPS.
- [eHealth Suisse](https://www.ehealthsuisse.ch/) adalah pusat kompetensi Swiss untuk kesehatan digital dan adopsi IPS-nya.
- [MyHealth@EU, layanan kesehatan digital lintas batas](https://health.ec.europa.eu/ehealth-digital-health-and-care/electronic-cross-border-health-services_en)
- [Aksi Bersama Xt-EHR](https://www.xt-ehr.eu/) menyiapkan format European Health Data Space, termasuk ringkasan pasien.

### Perangkat lunak dan alat

- [IPS Viewer](https://www.ipsviewer.com) ([sumber: jddamore/IPSviewer](https://github.com/jddamore/IPSviewer)) adalah penampil IPS sumber terbuka berbasis peramban.
- [uwcirg/shl-ips-viewer](https://github.com/uwcirg/shl-ips-viewer) menampilkan IPS yang dibagikan melalui SMART Health Link.
- [smart-on-fhir/smart-health-links](https://github.com/smart-on-fhir/smart-health-links) adalah implementasi acuan SMART Health Links.
- [Pembangkit IPS HAPI FHIR](https://hapifhir.io/hapi-fhir/docs/server_ips/introduction.html) ([sumber: hapifhir/hapi-fhir](https://github.com/hapifhir/hapi-fhir)) adalah modul server Java sumber terbuka yang mengimplementasikan `$summary`.
- [Dokumentasi IPS server HAPI FHIR JPA](https://hapifhir.io/hapi-fhir/docs/server_jpa/ips.html)
- [Inferno IPS Test Kit](https://inferno.healthit.gov/test-kits/ips) ([sumber: inferno-framework/ips-test-kit](https://github.com/inferno-framework/ips-test-kit)) adalah perangkat uji kesesuaian sumber terbuka.
- [FHIR Validator](https://validator.fhir.org/) memvalidasi bundel IPS terhadap profil IG.
- [Simplifier: paket hl7.fhir.uv.ips](https://simplifier.net/packages/hl7.fhir.uv.ips) memuat paket, profil, dan contoh.
- [Registri paket FHIR](https://registry.fhir.org/)
- [FHIR Shorthand (FSH) School](https://fshschool.org/) mengajarkan bahasa tempat IG IPS ditulis.
- [CommonHealth](https://www.commonhealth.org/) adalah aplikasi pasien yang menghasilkan IPS dan membagikannya melalui SMART Health Links.
- [WHO SMART Trust](https://github.com/WorldHealthOrganization/smart-trust) adalah kerangka kepercayaan untuk Jaringan Sertifikasi Kesehatan Digital Global WHO.

### Organisasi dan proyek

- [Situs proyek Ringkasan Pasien Internasional](https://international-patient-summary.net/) memuat berita, laporan adopsi, dan materi edukasi.
- [IPS untuk pengembang TI kesehatan](https://international-patient-summary.net/health-it-developer/)
- [HL7 International](https://www.hl7.org/)
- [IHE International](https://www.ihe.net/)
- [SNOMED International](https://www.snomed.org/)
- [Terminologi SNOMED CT IPS](https://www.snomed.org/international-patient-summary-terminology) adalah himpunan bagian gratis untuk penggunaan IPS.
- [LOINC](https://loinc.org/) *(tidak diperiksa)*
- [Joint Initiative Council for Global Health Informatics Standardization (JIC)](http://www.jointinitiativecouncil.org/)
- [Global Digital Health Partnership (GDHP)](https://gdhp.health/)
- [Pedoman WHO SMART](https://smart.who.int/)
- [Jaringan Sertifikasi Kesehatan Digital Global WHO](https://www.who.int/initiatives/global-digital-health-certification-network)

### Komunitas dan acara

- [chat.fhir.org](https://chat.fhir.org/) adalah obrolan komunitas FHIR, yang memiliki aliran IPS yang aktif.
- [Connectathon HL7 FHIR](https://www.hl7.org/events/fhir-connectathon/)
- [Connectathon IHE](https://www.ihe.net/participate/connectathon/)

### Video

- [HIMSS20: IPS untuk pedoman perawatan yang dapat dikomputasi dalam 200 detik atau kurang (IHE International, YouTube)](https://www.youtube.com/watch?v=xjEzGM8kBPw)
- [Kanal YouTube IHE International](https://www.youtube.com/@IHEIntl) memuat panel Connectathon dan sesi IPS.
- [Berita situs proyek IPS](https://international-patient-summary.net/) menautkan ke banyak webinar rekaman, termasuk:
  - panel IPS di IHE North America Connectathon, 2024
  - sesi IPS di FHIR DevDays 2023
  - Grahame Grieve tentang IPS dan IPA, IHE Connectathon Montreux 2022
  - pidato utama SNOMED CT Expo 2022
  - Matthew Rahn tentang IPS di GDHP
  - webinar lintas batas HL7 "Global Passport"
- [Pencarian YouTube: International Patient Summary](https://www.youtube.com/results?search_query=international+patient+summary)

### Buku

- Tim Benson dan Grahame Grieve, [*Principles of Health Interoperability: FHIR, HL7 and SNOMED CT*](https://link.springer.com/book/10.1007/978-3-030-56883-2), edisi ke-4, Springer, 2020. Buku ini membahas FHIR, sumber daya ringkasan klinis, dan terminologi.

### Makalah penelitian dan artikel

- Laleci Erturkmen G. B., Sinaci A. A., Namli T., Boonstra M., et al., "[An assessment of the European Patient Summary for clinical research: a case study in cardiology](https://doi.org/10.3389/fmed.2024.1481551)", *Frontiers in Medicine*, 2024.
- Lee H., Huang J., Huang S., Chen W., et al., "[Implementing a Cross-Border Next-Generation Personal Health Record in the Philippines and Taiwan: An Implementation Case Report Using Health Level 7 International Fast Healthcare Interoperability Resources](https://doi.org/10.2196/56272)", *JMIR Formative Research*, 2025.
- Song C., Nakayama M., "[Implementation of a Patient Summary Web Application According to the International Patient Summary and Validation in Common Use Cases in Japan](https://doi.org/10.1007/s10916-023-01993-6)", *Journal of Medical Systems*, 2023.
- Schippers D., Spil T., Stegwee R., Folmer E., Donnelly S., "[The adoption and diffusion of the International Patient Summary](https://doi.org/10.24251/hicss.2025.425)", *Proceedings of the 58th Hawaii International Conference on System Sciences (HICSS)*, 2025.
- da Silva Carvalho N., Papadimitriou A., Stegwee R., Gille H., et al., "[Accelerating European electronic health record exchange format (EEHRxF) implementation across Europe: a policy perspective](https://doi.org/10.3389/fmed.2025.1648170)", *Frontiers in Medicine*, 2025.
- Kay S., Cangioli G., Nusbaum M., "[The International Patient Summary and the extensibility requirement](https://international-patient-summary.net/the-international-patient-summary-and-the-extensibility-requirement/)", *Studies in Health Technology and Informatics* (pHealth), 2020.
- D'Amore J., Cangioli G., Hausam R., "[Advancing the International Patient Summary](https://international-patient-summary.net/advancing-the-international-patient-summary/)"
- "[Towards the Austrian Patient Summary](https://international-patient-summary.net/towards-the-austrian-patient-summary/)", *Studies in Health Technology and Informatics* (dHealth).
- "[Revival of the International Patient Summary (IPS)](https://smiledigitalhealth.com/our-blog/revival-of-the-international-patient-summary-ips)", blog Smile Digital Health.
- [Pencarian PubMed: "international patient summary"](https://pubmed.ncbi.nlm.nih.gov/?term=%22international+patient+summary%22) untuk literatur yang telah ditinjau sejawat.


## Referensi

Kutipan bernomor di dalam teks, seperti [1], tertaut ke entri yang sesuai di bawah. Tautan diperiksa pada November 2026. Hukum, angka adopsi, dan versi berubah, jadi periksa sumbernya untuk posisi terkini.

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

### Bacaan lanjutan

Sumber-sumber ini tidak dikutip di atas, tetapi merupakan acuan utama untuk standar itu sendiri.

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
