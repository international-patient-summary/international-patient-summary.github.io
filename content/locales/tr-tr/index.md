# Uluslararası Hasta Özeti (IPS)

**Uluslararası Hasta Özeti (International Patient Summary, IPS)**, elektronik sağlık kaydından alınan kısa bir özet için dünya çapında bir standarttır. Bir klinisyenin hastayı güvenle tedavi edebilmesi için ihtiyaç duyduğu temel klinik bilgileri içerir. Şu özelliklere sahip olacak şekilde tasarlanmıştır:

- **Asgari ve kapsamlı olmayan.** Sağlık kaydının küçük, özenle seçilmiş bir alt kümesidir, kaydın tamamı değildir.
- **Uzmanlık alanından bağımsız.** Herhangi bir klinisyen, herhangi bir disiplinde kullanabilir.
- **Hastalıktan bağımsız.** Belirli bir hastalığa veya bakım yoluna bağlı değildir.
- **Uygulanabilir ve uluslararası.** Küresel standartlar ve terminolojiler üzerine kurulduğundan ülkeler, diller ve BT sistemleri arasında kullanılabilir.

Kısacası IPS, hastayla hiç tanışmamış bir klinisyen için tek bir soruyu yanıtlar: *"Bu kişiye güvenle bakım verebilmem için şu anda ne bilmem gerekiyor?"*


## IPS neden var

Sağlık bilgileri genellikle yerel bir elektronik sağlık kaydının (EHR), ulusal bir sistemin veya bir satıcının ürününün içinde kilitli kalır. Bir hasta başka bir yerde, örneğin başka bir hastanede, bölgede veya ülkede bakım aradığında, tedaviyi yapan klinisyenin bu geçmişe erişimi çoğu zaman olmaz. IPS, herkese ortak ve taşınabilir bir özet biçimi sunar.

### Temel kullanım senaryoları

| Kullanım senaryosu | Açıklama |
|---|---|
| **Planlanmamış ve acil bakım** | Bir hasta evinden uzakta hastalanır veya yaralanır ve yerel klinisyenler hastanın kendi ülkesindeki EHR'ye ulaşamaz. Bu, özgün ve birincil kullanım senaryosudur. |
| **Sınır ötesi bakım** | Gezginler, göçmenler, sınır ötesi çalışanlar ve mülteciler, yurt dışındaki klinisyenlerin okuyabileceği bir özet taşır. |
| **Planlı bakım ve geçişler** | Sevkler, uzman konsültasyonları, yatışlar, taburculuklar ve hizmet sağlayıcılar arasındaki devirler. |
| **Sağlık turizmi ve hareketlilik** | Başka bir yargı bölgesinde bakım almayı seçen hastalar. |
| **Hastanın güçlendirilmesi** | Hastalar kendi özetlerini telefon uygulamasından, bir portaldan veya basılı bir kopyadan saklar, görüntüler ve paylaşır. |


## IPS ne zaman kullanılır

Hastayı tanımayan biri güvenilir bir anlık görüntüye hızla ihtiyaç duyduğunda ve gönderen ile alıcı aynı BT sistemini paylaşmadığında IPS'i kullanın.

### Uygun kullanımlar

- **Acil ve planlanmamış bakım**, özellikle evden uzakta veya sınır ötesinde. IPS'in tasarlanma amacı budur.
- **Ulusal sistemler arasında sınır ötesi veri alışverişi**, örneğin AB'nin MyHealth@EU hizmeti [[1]](#ref-1) [[2]](#ref-2).
- **Hastanın elinde tuttuğu özetler**; gezginler, göçmenler, mülteciler, hacılar veya karmaşık rahatsızlıkları olan kişiler bunları telefonda ya da kağıtta taşır [[3]](#ref-3).
- **Ulusal veya bölgesel bir hasta özeti.** Birçok ülke kendi özetini IPS'in bir profili olarak oluşturur; böylece özet uluslararası alanda da paylaşılabilir [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
- **Bakım geçişleri için ortak bir temel,** örneğin sevkler, yatışlar ve taburculuklar; daha zengin bir uzmanlık belgesi bulunmadığında.
- **Aynı temel bilgilere ihtiyaç duyan diğer veri setleri için bir başlangıç noktası,** örneğin aşı sertifikaları, araştırma verileri veya kayıt sistemleri [[7]](#ref-7) [[8]](#ref-8).

### Uygun olmayan kullanımlar

- **Tam tıbbi kayıt.** IPS bilinçli olarak asgaridir. Ayrıntı önemli olduğunda tam kayıt dışa aktarımını veya uzmanlığa özgü bir belgeyi kullanın.
- **Uzmanlığa özgü belgeler,** örneğin onkoloji tedavi özeti, gebelik kaydı veya ayrıntılı bir taburculuk özeti. Bunların kendi standartları vardır; bu standartlar IPS içeriğini kapsayabilir veya ona atıfta bulunabilir.
- **Tek bir kuruluş içindeki gerçek zamanlı klinik iş akışları.** Tek bir EHR içinde, özet anlık görüntüsü yerine canlı veriyi sorgulayın.
- **Hukuki, faturalandırma veya sigorta kayıtları.** IPS klinik bir özettir; idari veya talep kaydı değildir.
- **Garantili bütünlük gerektiren kararlar.** Bir IPS, kaynağı ve yazarı kadar eksiksiz ve günceldir. Mümkün olduğunda kritik bilgileri her zaman hastayla doğrulayın.


## Bir IPS neler içerir

Bir IPS belgesinin iki katmanı vardır:

1. **Kim, ne ve ne zaman bilgisini kaydeden bir başlık:**
   - **Hasta (Patient):** kimlik, demografik bilgiler ve iletişim bilgileri.
   - **Yazar (Author):** özeti üreten kişi, kuruluş veya sistem.
   - **Saklayıcı (Custodian):** özetin bakımından sorumlu kuruluş.
   - **Onaylayıcı (Attester):** varsa, özeti doğrulayan kişi.
   - **Tarih ve saat:** oluşturulduğu zaman.

2. **Bölümlere ayrılmış bir klinik gövde.** Bölümler zorunlu, önerilen veya isteğe bağlıdır.

| Bölüm | Durum | Tipik içerik |
|---|---|---|
| **Medication Summary** (İlaç Özeti) | Zorunlu | Güncel ve ilgili geçmiş ilaçlar, reçeteler, dozaj |
| **Allergies and Intolerances** (Alerjiler ve İntoleranslar) | Zorunlu | İlaç, gıda ve çevresel alerjiler; reaksiyonlar ve şiddet |
| **Problem List** (Sorun Listesi) | Zorunlu | Aktif tanılar, durumlar ve klinik sorunlar |
| Immunizations (Bağışıklamalar) | Önerilen | Yapılan aşılar, örneğin tetanoz, hepatit B, grip, COVID-19 |
| History of Procedures (Girişim Öyküsü) | Önerilen | Büyük ameliyatlar ve invaziv girişimler |
| Medical Devices (Tıbbi Cihazlar) | Önerilen | İmplantlar ve cihazlar, örneğin kalp pilleri, stentler, protezler |
| Diagnostic Results (Tanısal Sonuçlar) | Önerilen | Önemli laboratuvar sonuçları, görüntüleme raporları, patoloji |
| Vital Signs (Yaşamsal Bulgular) | İsteğe bağlı | Kan basıncı, kalp hızı, kilo, boy, VKİ |
| History of Past Illness (Geçmiş Hastalık Öyküsü) | İsteğe bağlı | Çözülmüş durumlar ve geçmişteki önemli sorunlar |
| Functional Status (Fonksiyonel Durum) | İsteğe bağlı | Engelliliği ve günlük etkinlikleri yerine getirme yeteneği |
| Plan of Care (Bakım Planı) | İsteğe bağlı | Bakım planları ve tedavi önerileri |
| Social History (Sosyal Öykü) | İsteğe bağlı | Tütün, alkol ve diğer ilgili yaşam tarzı etkenleri |
| History of Pregnancy (Gebelik Öyküsü) | İsteğe bağlı | Güncel gebelik durumu ve gebelik öyküsü |
| Advance Directives (Önceden Belirlenmiş Talimatlar) | İsteğe bağlı | Yaşam vasiyetleri, resüsitasyon tercihleri, rıza beyanları |
| Alerts (Uyarılar) | İsteğe bağlı | Başka yere uymayan, güvenlik açısından kritik uyarılar (FHIR IPS STU 2'de eklendi) |
| Patient Story (Hasta Hikâyesi) | İsteğe bağlı | Hasta için neyin önemli olduğu: ihtiyaçlar, güçlü yönler, değerler, kaygılar ve tercihler, hastanın kendi ifadeleriyle (FHIR IPS STU 2'de eklendi) |

**Açıkça "hiçbir şey yok" demek önemlidir.** Boş bir bölüm, klinisyene hastanın alerjisinin olmadığını mı yoksa kimsenin kaydetmediğini mi söylemez. Bu nedenle IPS, *"bilinen alerji yok"*, *"güncel ilaç yok"* veya *"bilgi mevcut değil"* gibi açık ifadeler bekler.


## IPS'in arkasındaki standartlar

IPS, birbiriyle eşgüdümlü bir standartlar ailesidir. ISO ve CEN standartları bir hasta özetinin *neleri* içermesi gerektiğini tanımlar. HL7 uygulama kılavuzları ise bunun *nasıl* kodlanacağını tanımlar.

| Standart | Kuruluş | Rolü |
|---|---|---|
| **EN 17269** | CEN (Avrupa Standardizasyon Komitesi) | Soyut IPS veri seti, 2019'da yayımlandı |
| **ISO 27269** | ISO (Uluslararası Standardizasyon Örgütü) | Soyut IPS veri setinin uluslararası sürümü, 2021'de yayımlandı |
| **CEN/TS 17288** | CEN | IPS'in sınır ötesi kullanım için uygulanmasına ilişkin kılavuz |
| **HL7 FHIR IPS Implementation Guide** | HL7 International | Modern, API dostu kodlama ve birincil uygulama biçimi. STU 2 (2.0.x) Alerts ve Patient Story bölümlerini ekledi, boş bölümlere izin verdi, `$summary`'yi netleştirdi ve SNOMED CT IPS terminolojisine geçti [[9]](#ref-9). |
| **HL7 CDA IPS Implementation Guide** | HL7 International | Mevcut ulusal ve Avrupa altyapılarında yaygın olan XML belge tabanlı kodlama |

Çalışma, **Joint Initiative Council for Global Health Informatics Standardization (JIC)** aracılığıyla eşgüdümlenir. JIC; ISO, CEN, HL7, SNOMED International, IHE ve diğerlerini bir araya getirir. IPS, sınır ötesi sağlık verileri konusunda 2016'daki bir AB–ABD iş birliğinden doğmuştur ve bugün dünya genelinde hükümetler ve dijital sağlık programları tarafından desteklenmektedir.


## IPS, HL7 FHIR ile nasıl kodlanır

FHIR'de bir IPS, `document` türünde tek bir **`Bundle`**'dır:

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

Temel teknik noktalar:

- **Her bölümün insan tarafından okunabilir bir anlatısı (narrative) vardır.** Bir klinisyen, FHIR yazılımı olmasa bile IPS'i sıradan bir tarayıcıda okuyabilir.
- **Her bölümün ayrıca kodlanmış girdileri de vardır**; bunlar yazılımın işleyebileceği, çevirebileceği ve uzlaştırabileceği yapılandırılmış FHIR kaynaklarıdır.
- **Profiller, temel FHIR kaynaklarını kısıtlar.** Örneğin *Patient (IPS)* ve *AllergyIntolerance (IPS)* asgari verileri ve "must support" öğelerini tanımlar.
- **`$summary` işlemi** (`GET [base]/Patient/[id]/$summary`), bir FHIR sunucusundan bir hasta için istek üzerine IPS üretmesini ister.
- **IPS imzalanabilir ve kendi kendine yeterlidir.** Tam bir belge, tek bir birim olarak saklanabilir, gönderilebilir, imzalanabilir ve doğrulanabilir.


## Terminolojiler

Ortak kod sistemleri bir IPS'in diller ve ülkeler arasında okunabilmesini sağlar:

| Terminoloji | Kullanım alanı |
|---|---|
| **SNOMED CT** | Sorunlar, alerjiler, girişimler, cihazlar, klinik bulgular. Üye olmayan ülkelerde bile IPS kullanımı için ücretsiz bir alt küme olan **SNOMED CT IPS Terminology** mevcuttur. |
| **LOINC** | Belge ve bölüm türleri, laboratuvar testleri, yaşamsal bulgular |
| **ATC** ve diğer ilaç kod sistemleri | Tıbbi ürünler ve etkin maddeler |
| **UCUM** | Ölçü birimleri |
| **ISO ve HL7 değer kümeleri** | Ülkeler, diller, idari cinsiyetler, yokluk ve bilinmeme nedenleri |

Girdiler kodlandığı için alıcı bir sistem, Portekizce yazılmış bir IPS'i İngilizce etiketlerle gösterebilir. Kodlanmış anlam aynı kalır.


## Hastalar ve klinisyenler IPS'i nasıl kullanır

Bir IPS; bir EHR, ulusal bir sağlık kaydı hizmeti, bir hasta portalı veya kişisel bir sağlık uygulaması tarafından üretilebilir. Ardından birkaç yolla iletilebilir:

- **Sistemden sisteme:** FHIR REST API'leri, ulusal altyapılar veya AB'nin MyHealth@EU ağı gibi sınır ötesi ağ geçitleri aracılığıyla.
- **Hasta aracılı paylaşım:** hasta özeti bir cüzdanda veya sağlık uygulamasında tutar ve istek üzerine paylaşır.
- **SMART Health Links:** klinisyene şifrelenmiş bir IPS'e zaman sınırlı, isteğe bağlı olarak parola korumalı erişim sağlayan bir QR kodu veya URL. Klinisyen bunu sıradan bir web tarayıcısında açabilir.
- **Kağıt veya PDF:** başka hiçbir şey işe yaramadığında yedek olarak basılı bir anlatı sunumu.

**CommonHealth** gibi uygulamalar hastaların kayıtlarını toplamasına ve SMART Health Links aracılığıyla bir IPS paylaşmasına olanak tanır.

Tipik bir acil durum senaryosu:

1. Bir gezgin yurt dışında yere yığılır.
2. Gezgin veya bir refakatçisi telefondan bir QR kodu gösterir.
3. Acil servis doktoru bunu tarar ve saniyeler içinde gezginin ilaçlarını, alerjilerini ve aktif sorunlarını görür.
4. Doktor tehlikeli bir ilaç etkileşiminden kaçınır ve hastayı güvenle tedavi eder.


## İlkeler ve tasarım tercihleri

- **Önce güvenlik.** İçerik, bütünlük için değil klinik ilgi için seçilir.
- **Varsayılan olarak küresel, uzantıyla yerel.** Ülkeler, uluslararası çekirdeği bozmadan gereksinimler ekleyen AB, Avustralya veya Kanada sürümleri gibi ulusal profiller oluşturur.
- **İnsan tarafından okunabilir ve makine tarafından işlenebilir.** Anlatı ve kodlanmış veri bir arada bulunur.
- **Ücretsiz ve açık.** HL7 IPS belirtimleri ve IPS SNOMED CT alt kümesi, benimsemenin önündeki engelleri azaltmak için serbestçe kullanılabilir.
- **Gizlilik ve rıza.** Erişim yerel hukuk ve hastanın rızasıyla düzenlenir. SMART Health Links gibi mekanizmalar kontrolü hastanın elinde tutar.


## IPS nasıl kullanılır

### Hastalar için

1. **Bir tane isteyin.** Kliniğinize, hastanenize, ulusal sağlık portalınıza veya sağlık uygulamanıza bir IPS ya da ona dayalı ulusal bir hasta özeti üretip üretemeyeceğini sorun.
2. **Kontrol edin.** İyiyken okuyun. Yanlış veya eksik olan her şeyi, özellikle alerjileri ve ilaçları bildirin.
3. **Yanınızda taşıyın.** Bir sağlık uygulamasında veya cüzdanda, SMART Health Link QR kodu olarak ya da seyahat belgelerinizle birlikte bir çıktı olarak saklayın.
4. **Güncel tutun.** Yeni bir tanı, yeni bir uzun süreli ilaç, ameliyat veya implant sonrasında yenisini alın.
5. **Bilerek paylaşın.** Sizi tedavi eden klinisyene gösterin. Bir SMART Health Link'in süresi dolabilir ve parola gerektirebilir; böylece kimin ve ne kadar süreyle göreceğini siz belirlersiniz [[10]](#ref-10).

### Klinisyenler için

1. **Önce başlığı kontrol edin.** Kimin yazdığı, ne zaman yazıldığı ve birinin doğrulayıp doğrulamadığı. Eski veya doğrulanmamış bir özet daha fazla dikkat gerektirir.
2. **Önce zorunlu bölümleri okuyun:** alerjiler, ilaçlar ve sorunlar.
3. **"Bilinen yok" ile "kaydedilmedi"yi farklı ele alın.** "Bilinen alerji yok" klinik bir ifadedir. Boş veya "bilinmiyor" bölümü değildir.
4. **Kritik bilgileri** mümkün olduğunda hasta veya refakatçisiyle **doğrulayın**.
5. **Kodlanmış veriyi kullanın.** Sisteminiz destekliyorsa, kodlanmış girdiler özetin sizin dilinizde gösterilmesini ve ilaç etkileşimi ile alerji kurallarına karşı denetlenmesini sağlar.
6. **Bütünlüğü varsaymayın.** IPS bir güvenlik ağıdır, tam bir öykü değildir.

### Uygulayıcılar için

1. **Belirtimi seçin.** Güncel HL7 FHIR IPS Implementation Guide'ı (STU 2) veya ülkenizin ona dayalı ulusal profilini kullanın. CDA tabanlı altyapılar için CDA IPS kılavuzunu kullanın [[9]](#ref-9) [[11]](#ref-11).
2. **Verilerinizi eşleyin.** Yerel verileri IPS profillerine eşleyin: `Patient`, `AllergyIntolerance`, `MedicationStatement`, `Condition` ve benzerleri. İşin büyük kısmı bu eşlemededir.
3. **Terminolojinizi eşleyin.** Yerel kodları SNOMED CT, LOINC ve ilaç kod sistemlerine eşleyin. SNOMED CT IPS Terminology bu amaçla ücretsiz kullanılabilir [[12]](#ref-12).
4. **Belgeyi üretin.** `$summary` işlemini destekleyin veya `Bundle` ile `Composition`'ı kendiniz oluşturun. Her bölüm için okunabilir bir anlatıya ve açık "bilinen yok" ya da "mevcut değil" ifadelerine yer verin.
5. **Doğrulayın.** Üretilen her belgeyi FHIR Validator ve Inferno IPS Test Kit gibi bir uygunluk test seti ile denetleyin [[13]](#ref-13).
6. **İmzalayın ve paylaşın.** Belgelerin nasıl imzalanacağına, saklanacağına ve gönderileceğine karar verin: bir API, bir belge kayıt sistemi, bir sınır ötesi ağ geçidi veya bir SMART Health Link.
7. **Güvenle tüketin.** Alıcı olarak, her kodlanmış girdiyi işleyemeseniz bile anlatıyı gösterin, kaynağı ve yazarı görünür tutun ve alınan veriyi asla sessizce yerel kayda birleştirmeyin.
8. **Başkalarıyla test edin.** Canlıya geçmeden önce IHE ve HL7 Connectathon etkinliklerinde diğer satıcılar ve ülkelerle birlikte çalışabilirliği sınayın.

### Hükümetler ve sağlık kuruluşları için

1. **IPS üzerine kurulu bir ulusal profil benimseyin;** ayrı bir biçim yerine, böylece ulusal özet varsayılan olarak uluslararası olur [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
2. **Yönetişimi belirleyin:** bir özeti kimin oluşturabileceğini, güncelleyebileceğini ve onaylayabileceğini, doğruluğundan kimin sorumlu olduğunu.
3. **Terminoloji lisanslamasını belirleyin:** SNOMED CT üyeliği veya ücretsiz IPS alt kümesinin kullanımı.
4. **Kimlik, rıza ve güveni belirleyin:** hastaların nasıl tanımlandığını, rızanın nasıl kaydedildiğini ve belgeleri doğrulamak için MyHealth@EU veya DSÖ'nün Global Digital Health Certification Network'ü gibi hangi güven çerçevesinin kullanıldığını [[1]](#ref-1) [[14]](#ref-14).
5. **Oluşturduklarınızı yayımlayın;** başkalarının öğrenebilmesi için IPS Implementation Registry'de [[15]](#ref-15).


## IPS'in sağlık sistemleriyle entegrasyonu

Bir IPS nadiren ayrı bir sistemdir. EHR'lerde, sağlık bilgisi değişim ağlarında, ulusal kayıtlarda ve kişisel sağlık uygulamalarında zaten bulunan verilerin bir görünümüdür.

| Entegrasyon deseni | Nasıl çalışır | Örnekler |
|---|---|---|
| **EHR tarafından üretilen** | EHR, kendi verilerinden istek üzerine, çoğunlukla FHIR `$summary` işlemiyle bir IPS oluşturur. | EHR satıcıları ve IPS üretici modülü bulunan HAPI FHIR gibi FHIR sunucuları |
| **Ulusal veya bölgesel kayıt** | Ulusal bir hasta özeti hizmeti IPS'in bir profilini saklar ve yetkili sağlayıcıların erişimine sunar. | Kanada'nın PS-CA'sı, Avustralya'nın AU Patient Summary'si, İsviçre'nin CH IPS'li elektronik hasta dosyası [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6) |
| **Sınır ötesi ağ geçidi** | Her ülke bir ulusal iletişim noktası işletir. Bu nokta, ülkenin özetini üzerinde uzlaşılan değişim biçimine dönüştürür, sınırın ötesine gönderir ve alıcı ülke bunu yerel dilde gösterir. | MyHealth@EU e-Sağlık Ulusal İletişim Noktaları [[1]](#ref-1) [[2]](#ref-2) |
| **Bölgesel değişim ağı** | Sağlık bakanlıkları, ortak bir bölgesel kılavuz altında ulusal FHIR sunucuları aracılığıyla IPS belgelerini değiş tokuş eder. | RACSEL'in IPS-LAC'ı ve Latin Amerika ile Karayipler'deki Pan American Highway for Digital Health (PH4H) [[16]](#ref-16) |
| **Hasta aracılı** | Hasta IPS'i bir uygulamada veya cüzdanda tutar ve bir QR kodu veya SMART Health Link ile paylaşır. | CommonHealth; DSÖ güven ağının hac için IPS çalışması [[10]](#ref-10) [[14]](#ref-14) |
| **API tabanlı erişim** | Uygulamalar, yetkili bir hasta için bir FHIR API üzerinden IPS alır. | International Patient Access (IPA); CMS Interoperability Framework kapsamında IPS desteği ekleyen Flexpa gibi ABD ağları [[17]](#ref-17) [[18]](#ref-18) |

Planlanması gereken entegrasyon noktaları:

- **Belge paylaşımı:** MHD (FHIR) ve XDS (belge kayıt sistemleri) gibi IHE profilleri IPS belgelerini saklar ve bulur. IHE IPS içerik profilleri uygunluk ve test kuralları ekler [[11]](#ref-11).
- **Hasta kimliği:** IHE PIXm ve PDQm veya bir ulusal tanımlayıcı, hastayı sistemler arasında eşleştirir.
- **Mevcut belgeler:** birçok sistem zaten CDA, C-CDA veya ulusal özetler üretir. Bunları IPS'e eşlemek genellikle baştan başlamaktan kolaydır, ancak kardinalite, değer kümeleri ve kod sistemlerindeki farklılıkları kontrol edin.
- **Ulusal profiller:** US Core, AU Core, CH Core veya JP Core gibi ulusal bir çekirdek IPS'ten farklı olabilir. Ulusal hasta özeti profilleri ikisini uzlaştırır [[5]](#ref-5) [[6]](#ref-6) [[19]](#ref-19).
- **Çeviri ve görüntüleme:** alıcılar anlatıyı göstermeli ve kodlanmış girdileri, kodların alıcının dilindeki görüntü adlarını kullanarak çevirmelidir.
- **Güvenlik:** TLS, gerektiğinde imzalı belgeler, denetim günlüğü (örneğin IHE ATNA veya BALP) ve rızaya bağlı erişim denetimi kullanın.


## Güncel benimseme

IPS pilot uygulamalardan ulusal ve bölgesel programlara geçmiştir. Durum hızla değişir; en güncel konum için bağlantılı kaynaklara bakın.

- **IPS Implementation Registry.** IPS topluluğu, uygulamaların herkese açık bir kaydını tutar. 2026 ortasında, Arjantin'in sağlayıcı aracılı IPS-LAC projesinden Vietnam'ın Better Health Program'ına kadar 34 kayıt listeliyordu [[15]](#ref-15).
- **FHIR ekosistemi.** HL7 International ve Firely'nin 2025 State of FHIR anketinde 42 katılımcı, IPS'in ulusal FHIR belirtimlerinin temelini oluşturduğunu söyledi; bu, diğer tüm uluslararası kılavuzlardan fazlaydı [[20]](#ref-20).
- **Araştırma.** IPS'in benimsenmesine ilişkin 2025 tarihli bir çalışma, paydaşlarla görüştü; paydaşlar başlıca yararlar olarak daha iyi bakım kalitesini ve hasta güvenliğini gösterdi [[21]](#ref-21).

| Ülke veya bölge | Durum |
|---|---|
| **Avrupa Birliği ve AEA** | MyHealth@EU ülkeler arasında hasta özetlerini ve e-reçeteleri değiş tokuş eder. 2026 tarihli bir Avrupa Komisyonu sunumu, 17 üye devlet ve Norveç'in canlı olduğunu, geri kalanların çoğunun katılmayı planladığını bildirdi [[2]](#ref-2) [[22]](#ref-22). EHDS Tüzüğü, hasta özeti değişimini 2029'a kadar zorunlu kılar [[23]](#ref-23). |
| **Kanada** | Canada Health Infoway tarafından Ekim 2022'de onaylanan pan-Kanada Hasta Özeti (PS-CA), Kanada'ya özgü uyarlamalarla IPS üzerine kuruludur [[4]](#ref-4). |
| **Avustralya** | IPS ve AU Core üzerine kurulu AU Patient Summary, HL7 Australia tarafından Sparked programı aracılığıyla geliştirilmektedir [[5]](#ref-5) [[24]](#ref-24). |
| **İsviçre** | HL7 Switzerland'ın CH IPS 2.0.0 (deneme kullanımı) sürümü IPS ve CH Core üzerine kuruludur. Ayrı bir profil, İsviçre elektronik hasta dosyasının ihtiyaç duyduklarını ekler [[6]](#ref-6). |
| **Amerika Birleşik Devletleri** | IPS için federal bir zorunluluk yoktur. ABD, US Core ve USCDI'yı kullanır. Federal kurumlar uluslararası alanda IPS çalışmalarına katılır ve bazı ağlar IPS'i gönüllü olarak destekler [[18]](#ref-18). |
| **Latin Amerika ve Karayipler** | RACSEL sağlık bakanlıkları bölgesel IPS-LAC kılavuzunu kullanır. 2023'te 16 ülke, São Paulo'daki bir connectathon'da IPS-LAC belgelerini değiş tokuş etti [[16]](#ref-16). |
| **Japonya** | Araştırmacılar, yaygın Japon kullanım senaryoları için JP Core'u kullanarak IPS tabanlı bir hasta özeti uygulaması geliştirdi ve doğruladı [[19]](#ref-19). |
| **Tayvan ve Filipinler** | 2025 tarihli bir uygulama raporu, FHIR kullanan ve IPS ile uyumlu bir sınır ötesi kişisel sağlık kaydını anlatır [[25]](#ref-25). |
| **G7** | 2021'de G7 sağlık bakanları IPS yönünde çalışmayı taahhüt etti ve bir IPS yol haritası yayımladı [[26]](#ref-26). |
| **DSÖ** | DSÖ'nün Global Digital Health Certification Network'ü, hac için doğrulanabilir IPS gibi IPS tabanlı güven alanlarını içerir [[14]](#ref-14). |


## Ülke ve bölgeye göre yasalar, düzenlemeler ve politika

IPS bir standarttır, yasa değildir. Yasalar, bir ülkenin hasta özetlerini değiş tokuş etmesinin gerekip gerekmediğine, hangi biçimde ve hangi gizlilik kuralları altında yapılacağına karar verir. Bu bir özettir, hukuki tavsiye değildir. Yasanın güncel metnini her zaman kontrol edin.

| Yargı bölgesi | Yasa veya politika | IPS için anlamı |
|---|---|---|
| **Avrupa Birliği** | **Avrupa Sağlık Veri Alanı (EHDS) Tüzüğü, (AB) 2025/327.** 5 Mart 2025'te yayımlandı; 26 Mart 2025'te yürürlüğe girdi [[23]](#ref-23) [[27]](#ref-27). | Hasta özetleri bir "öncelikli kategoridir". Avrupa EHR değişim biçiminde değişim, 2029'a kadar her üye devlette çalışmalıdır. Tıbbi görüntüler, test sonuçları ve taburculuk raporları 2031'e kadar izler [[28]](#ref-28). Hasta özetleri için biçim HL7 IPS'e dayanır. |
| **Avrupa Birliği** | Sınır ötesi sağlık hizmetlerinde hasta haklarına ilişkin **2011/24/AB sayılı Direktif** [[29]](#ref-29). | MyHealth@EU'nun arkasındaki hasta özeti kılavuzlarını kararlaştıran e-Sağlık Ağı'nı oluşturdu. |
| **Avrupa Birliği** | **Genel Veri Koruma Tüzüğü (GDPR), (AB) 2016/679** [[30]](#ref-30). | Sağlık verileri özel bir kategoridir. Her IPS değişimi hukuki bir dayanak ve uygun güvenceler gerektirir. |
| **Amerika Birleşik Devletleri** | **21st Century Cures Act ve bilgi engelleme kuralları** [[31]](#ref-31); gönüllü **CMS Interoperability Framework** (2025) [[17]](#ref-17). | Hiçbir yasa IPS'i zorunlu kılmaz. Yasalar, US Core ve USCDI kullanılarak elektronik sağlık bilgilerine erişimi ve değişimi gerektirir. IPS desteği gönüllüdür. |
| **Kanada** | İl ve bölge düzeyinde sağlık bilgisi yasaları. Federal **Connected Care for Canadians Act** (Bill C-72) 2024'te sunuldu ancak Parlamento 2025'te tatile girmeden önce geçmedi. | PS-CA pan-Kanada bir belirtimdir, yasal zorunluluk değildir. Benimseme, Canada Health Infoway ile birlikte iller ve bölgeler tarafından yürütülür [[4]](#ref-4). |
| **Birleşik Krallık** | **Data (Use and Access) Act 2025** [[32]](#ref-32). | Sağlık ve yetişkin sosyal bakım BT'si için bilgi standartları belirleme yetkilerini içerir. Birleşik Krallık, 2021 G7 IPS taahhüdüne ev sahipliği yaptı [[26]](#ref-26). |
| **Avustralya** | **My Health Records Act 2012** ve 2025 "varsayılan olarak paylaşım" değişiklikleri. | AU Patient Summary, Sparked aracılığıyla geliştirilen ulusal bir belirtimdir [[5]](#ref-5) [[24]](#ref-24). |
| **İsviçre** | **Elektronik Hasta Dosyası Hakkında 19 Haziran 2015 Tarihli Federal Yasa (EPRA, SR 816.1)**, 15 Nisan 2017'den beri yürürlükte [[33]](#ref-33). | CH IPS, İsviçre elektronik hasta dosyasındaki belgeler için bir profil içerir [[6]](#ref-6). |
| **Latin Amerika ve Karayipler** | RACSEL ve PH4H aracılığıyla bölgesel anlaşmalar; Amerikalararası Kalkınma Bankası'nın bölgesel bir hukuki çerçeveye desteğiyle [[16]](#ref-16). | IPS-LAC, sınır ötesi değişim için üzerinde uzlaşılan bölgesel biçimdir. |
| **G7** | **Sağlık Bakanları Bildirisi**, Oxford, Haziran 2021 ve **G7 IPS Roadmap**, Aralık 2021 [[26]](#ref-26) [[34]](#ref-34). | IPS ve hasta erişimi yönünde çalışmaya dair siyasi bir taahhüt; bağlayıcı bir yasa değil. |


## Artılar ve eksiler

| Artılar | Eksiler |
|---|---|
| **Daha güvenli planlanmamış bakım.** Klinisyenler alerjileri, ilaçları ve sorunları saniyeler içinde görür. | **Kaynağı kadar iyi.** Güncelliğini yitirmiş veya yanlış kaynak veri, güncelliğini yitirmiş veya yanlış bir özet verir. |
| **Dünya çapında tek biçim.** Tek bir uygulama ulusal ve sınır ötesi ihtiyaçlara hizmet eder. | **Ulusal farklılık.** Ulusal profiller kural ekler; bu nedenle bir ülkede "geçerli bir IPS"in başka bir ülkede kabul edilmesi için çalışma gerekebilir. |
| **Açık ve olgun standartlar üzerine kurulu:** ISO, CEN, HL7 FHIR ve CDA, SNOMED CT ve LOINC. | **Terminoloji yükü.** Yerel kodları SNOMED CT ve LOINC'a eşlemek zahmetli bir iştir ve tam SNOMED CT, ücretsiz IPS alt kümesinin ötesinde lisans gerektirir. |
| **Okunabilir ve hesaplanabilir.** İnsanlar için anlatı, yazılım ve çeviri için kodlanmış veri. | **Üretici özensizse anlatı ve kodlanmış veri çelişebilir** ve alıcılar yanlış olana güvenebilir. |
| **Hastanın güçlendirilmesi.** Hastalar kendi özetlerini saklayabilir ve paylaşabilir. | **Gizlilik ve rıza riski.** Taşınabilir bir özet hassastır ve yasalar ile rıza modelleri ülkeye göre farklılık gösterir. |
| **Ücretsiz belirtimler** ve ücretsiz IPS terminolojisi maliyetleri düşürür [[12]](#ref-12). | **Sürüm karmaşası.** STU 1, STU 1.1 ve STU 2 bir arada bulunur ve EHDS biçimi önceki bir sürüme atıfta bulunur [[28]](#ref-28). |
| Aşı sertifikaları, araştırma ve kayıt sistemleri için **yeniden kullanılabilir** [[7]](#ref-7) [[8]](#ref-8). | **Bilinçli olarak asgari.** Tam kayıtların veya uzmanlık belgelerinin yerini tutmaz; ikincil kullanım için eksikler uzantılar gerektirir [[7]](#ref-7). |
| Hükümetlerin, AB'nin, G7'nin, DSÖ'nün ve standart kuruluşlarının **güçlü desteği.** | **Eşitsiz benimseme.** Birçok ülke ve satıcı hâlâ pilot aşamasındadır ve hasta farkındalığı düşüktür. |


## Planlar ve gelecek yönelimler

- **AB, 2029:** EHDS kapsamında tüm AB üye devletlerinde hasta özeti ve e-reçete değişiminin işler hale gelmesi [[23]](#ref-23) [[28]](#ref-28).
- **AB, 2031:** tıbbi görüntülerin, laboratuvar sonuçlarının ve taburculuk raporlarının Avrupa EHR değişim biçimine katılması [[28]](#ref-28).
- **MyHealth@EU genişlemesi:** daha fazla ülkenin katılması ve laboratuvar sonuçları, taburculuk raporları ve tıbbi görüntüler için yeni hizmetler [[2]](#ref-2) [[22]](#ref-22).
- **FHIR IPS STU 2'nin benimsenmesi:** uygulayıcıların Alerts ve Patient Story bölümlerine, açık boş bölümlere ve SNOMED CT IPS terminolojisine geçmesi [[9]](#ref-9).
- **Avustralya:** AU Patient Summary Release 1'in yayımlanması, 2026 için planlandı [[24]](#ref-24).
- **IPS Best Practices Project:** edinilen derslerin belgelenmesi için bir topluluk çabası; çalışmalar 2026'da başlıyor.
- **DSÖ güven ağı:** doğrulanabilir, taşınabilir sağlık belgeleri için daha fazla IPS tabanlı güven alanı [[14]](#ref-14).
- **SMART Health Links:** hasta kontrollü paylaşım için HL7 aracılığıyla standartlaştırıldı [[10]](#ref-10).
- **Latin Amerika ve Karayipler:** PH4H aracılığıyla daha geniş IPS-LAC değişimi [[16]](#ref-16).
- **Araştırma ve ikincil kullanım:** çekirdeği asgari tutarken hasta özetlerini klinik araştırma ve yapay zekâ için genişletme çalışmaları [[7]](#ref-7).


## Sözlük

| Terim | Anlamı |
|---|---|
| **IPS** | International Patient Summary |
| **FHIR** | Fast Healthcare Interoperability Resources, HL7'nin modern API tabanlı standardı |
| **CDA** | Clinical Document Architecture, HL7'nin XML belge standardı |
| **IG** | Implementation Guide (Uygulama Kılavuzu), bir standardı uygulamak için bir dizi profil ve kural |
| **Profile** | Belirli bir kullanım için bir FHIR kaynağının kısıtlanmış sürümü |
| **SNOMED CT** | Systematized Nomenclature of Medicine – Clinical Terms |
| **LOINC** | Logical Observation Identifiers Names and Codes |
| **SMART Health Links** | Sağlık verilerini bir bağlantı veya QR kodu ile paylaşmaya yönelik bir standart |
| **JIC** | Joint Initiative Council for Global Health Informatics Standardization |


## Daha fazla bilgi

- HL7 FHIR IPS Implementation Guide: <https://hl7.org/fhir/uv/ips/>
- IPS continuous build: <https://build.fhir.org/ig/HL7/fhir-ips/>
- International Patient Summary project site: <https://international-patient-summary.net/>
- ISO 27269 (Health informatics — International patient summary): <https://www.iso.org/standard/79491.html>
- SNOMED CT IPS Terminology: <https://www.snomed.org/international-patient-summary-terminology>
- SMART Health Links: <https://docs.smarthealthit.org/smart-health-links/>


## Kaynaklar

Bu bağlantılar IPS ile ilgili kaynakları, belirtimleri, yazılımları, projeleri, videoları, kitapları ve araştırmaları kapsar. Çoğu, bu sayfa yazıldığında kontrol edildi. Bazı yayıncı siteleri otomatik kontrolleri engeller ve bunlar *(kontrol edilmedi)* olarak işaretlenmiştir.

### Resmî belirtimler ve standartlar

- [HL7 FHIR IPS Implementation Guide, current published version](https://hl7.org/fhir/uv/ips/) yetkili FHIR belirtimidir.
- [HL7 FHIR IPS Implementation Guide, STU 2](https://hl7.org/fhir/uv/ips/STU2/)
- [HL7 FHIR IPS Implementation Guide, STU 1.1](https://hl7.org/fhir/uv/ips/STU1.1/)
- [HL7 FHIR IPS publication history](https://www.hl7.org/fhir/uv/ips/history.html) yayımlanan her sürümü listeler.
- [HL7 FHIR IPS continuous build](https://build.fhir.org/ig/HL7/fhir-ips/) oylanmamış en son devam eden çalışmadır.
- [Structure of the International Patient Summary](https://hl7.org/fhir/uv/ips/en/Structure-of-the-International-Patient-Summary.html) bölümleri ve profilleri açıklar.
- [IPS design conventions](https://build.fhir.org/ig/HL7/fhir-ips/en/Design-Conventions.html) must-support, eksik veri ve anlatıyı ele alır.
- [IPS generation and data inclusion](https://build.fhir.org/ig/HL7/fhir-ips/en/Generation-and-Data-Inclusion.html) `$summary` ve içeriğin nasıl seçileceğini ele alır.
- [HL7 CDA IPS Implementation Guide, continuous build](https://build.fhir.org/ig/HL7/CDA-IPS/)
- [HL7 CDA IPS product brief](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=483)
- [ISO 27269, Health informatics — International patient summary](https://www.iso.org/standard/79491.html) *(kontrol edilmedi)*
- [ISO/TC 215 Health informatics committee](https://www.iso.org/committee/54960.html) *(kontrol edilmedi)*
- [IHE FHIR International Patient Summary profile (FIIO)](https://profiles.ihe.net/PCC/FIIO/volume-1.html)
- [IHE PCC International Patient Summary supplement, 2020 (PDF)](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS_Rev1-0_PC_2020-03-17.pdf)
- [HL7 SMART Health Cards and Links Implementation Guide](https://hl7.org/fhir/uv/smart-health-cards-and-links/)
- [SMART Health Links documentation](https://docs.smarthealthit.org/smart-health-links/)
- [HL7 FHIR International Patient Access (IPA)](https://hl7.org/fhir/uv/ipa/) hasta API erişimi için kardeş bir belirtimdir.
- [HL7 FHIR R4 base specification](https://hl7.org/fhir/R4/), IPS'in üzerine kurulduğu temel belirtimdir.

### Kaynak depoları

- [HL7/fhir-ips](https://github.com/HL7/fhir-ips) FHIR IPS IG kaynağını FHIR Shorthand ile barındırır.
- [HL7/cda-ips](https://github.com/HL7/cda-ips) CDA IPS IG kaynağını barındırır.
- [hl7-eu/eps](https://github.com/hl7-eu/eps) HL7 Europe Patient Summary kaynağını barındırır.
- [hl7ch/ch-ips](https://github.com/hl7ch/ch-ips) İsviçre IPS'ini barındırır; bir görüntüleyici ve üretici geliştirilmektedir.
- [GitHub topic: international-patient-summary](https://github.com/topics/international-patient-summary) topluluk depolarını listeler.

### Ulusal ve bölgesel uyarlamalar

- [HL7 Europe Patient Summary (EPS), continuous build](https://build.fhir.org/ig/hl7-eu/eps/)
- [AU Patient Summary (Australia), continuous build](https://build.fhir.org/ig/hl7au/au-fhir-ps/)
- [Trillium II IPS structure (HL7 Europe)](https://hl7.eu/fhir/build/trillium2/site/ipsStructure.html) IPS'in başlamasına yardımcı olan AB–ABD projesinden gelir.
- [eHealth Suisse](https://www.ehealthsuisse.ch/) İsviçre'nin dijital sağlık ve IPS benimsemesi için yetkinlik merkezidir.
- [MyHealth@EU, cross-border digital health services](https://health.ec.europa.eu/ehealth-digital-health-and-care/electronic-cross-border-health-services_en)
- [Xt-EHR Joint Action](https://www.xt-ehr.eu/) hasta özeti dahil Avrupa Sağlık Veri Alanı biçimlerini hazırlar.

### Yazılımlar ve araçlar

- [IPS Viewer](https://www.ipsviewer.com) ([source: jddamore/IPSviewer](https://github.com/jddamore/IPSviewer)) açık kaynaklı, tarayıcı tabanlı bir IPS görüntüleyicisidir.
- [uwcirg/shl-ips-viewer](https://github.com/uwcirg/shl-ips-viewer) bir SMART Health Link ile paylaşılan IPS'i görüntüler.
- [smart-on-fhir/smart-health-links](https://github.com/smart-on-fhir/smart-health-links) SMART Health Links'in referans uygulamasıdır.
- [HAPI FHIR IPS generator](https://hapifhir.io/hapi-fhir/docs/server_ips/introduction.html) ([source: hapifhir/hapi-fhir](https://github.com/hapifhir/hapi-fhir)) `$summary`'yi uygulayan açık kaynaklı bir Java sunucu modülüdür.
- [HAPI FHIR JPA server IPS documentation](https://hapifhir.io/hapi-fhir/docs/server_jpa/ips.html)
- [Inferno IPS Test Kit](https://inferno.healthit.gov/test-kits/ips) ([source: inferno-framework/ips-test-kit](https://github.com/inferno-framework/ips-test-kit)) açık kaynaklı bir uygunluk test setidir.
- [FHIR Validator](https://validator.fhir.org/) IPS bundle'larını IG profillerine karşı doğrular.
- [Simplifier: hl7.fhir.uv.ips package](https://simplifier.net/packages/hl7.fhir.uv.ips) paketi, profilleri ve örnekleri içerir.
- [FHIR package registry](https://registry.fhir.org/)
- [FHIR Shorthand (FSH) School](https://fshschool.org/) IPS IG'nin yazıldığı dili öğretir.
- [CommonHealth](https://www.commonhealth.org/) bir IPS üreten ve SMART Health Links ile paylaşan bir hasta uygulamasıdır.
- [WHO SMART Trust](https://github.com/WorldHealthOrganization/smart-trust) DSÖ Global Digital Health Certification Network'ünün güven çerçevesidir.

### Kuruluşlar ve projeler

- [International Patient Summary project site](https://international-patient-summary.net/) haberler, benimseme raporları ve eğitim içerir.
- [IPS for health IT developers](https://international-patient-summary.net/health-it-developer/)
- [HL7 International](https://www.hl7.org/)
- [IHE International](https://www.ihe.net/)
- [SNOMED International](https://www.snomed.org/)
- [SNOMED CT IPS Terminology](https://www.snomed.org/international-patient-summary-terminology) IPS kullanımı için ücretsiz bir alt kümedir.
- [LOINC](https://loinc.org/) *(kontrol edilmedi)*
- [Joint Initiative Council for Global Health Informatics Standardization (JIC)](http://www.jointinitiativecouncil.org/)
- [Global Digital Health Partnership (GDHP)](https://gdhp.health/)
- [WHO SMART Guidelines](https://smart.who.int/)
- [WHO Global Digital Health Certification Network](https://www.who.int/initiatives/global-digital-health-certification-network)

### Topluluk ve etkinlikler

- [chat.fhir.org](https://chat.fhir.org/) FHIR topluluğunun sohbet platformudur ve etkin bir IPS akışı vardır.
- [HL7 FHIR Connectathons](https://www.hl7.org/events/fhir-connectathon/)
- [IHE Connectathons](https://www.ihe.net/participate/connectathon/)

### Videolar

- [HIMSS20: IPS for computable care guidelines in 200 seconds or less (IHE International, YouTube)](https://www.youtube.com/watch?v=xjEzGM8kBPw)
- [IHE International YouTube channel](https://www.youtube.com/@IHEIntl) Connectathon panelleri ve IPS oturumları içerir.
- [IPS project site news](https://international-patient-summary.net/) kayıtlı birçok web seminerine bağlantı verir; bunlar arasında:
  - IHE North America Connectathon'daki IPS paneli, 2024
  - FHIR DevDays 2023'teki IPS oturumu
  - Grahame Grieve'in IPS ve IPA üzerine konuşması, IHE Connectathon Montreux 2022
  - SNOMED CT Expo 2022 açılış konuşması
  - Matthew Rahn'ın GDHP'de IPS üzerine konuşması
  - HL7'nin sınır ötesi "Global Passport" web semineri
- [YouTube search: International Patient Summary](https://www.youtube.com/results?search_query=international+patient+summary)

### Kitaplar

- Tim Benson ve Grahame Grieve, [*Principles of Health Interoperability: FHIR, HL7 and SNOMED CT*](https://link.springer.com/book/10.1007/978-3-030-56883-2), 4. baskı, Springer, 2020. FHIR'i, klinik özet kaynaklarını ve terminolojiyi kapsar.

### Araştırma makaleleri ve yazılar

- Laleci Erturkmen G. B., Sinaci A. A., Namli T., Boonstra M., et al., "[An assessment of the European Patient Summary for clinical research: a case study in cardiology](https://doi.org/10.3389/fmed.2024.1481551)", *Frontiers in Medicine*, 2024.
- Lee H., Huang J., Huang S., Chen W., et al., "[Implementing a Cross-Border Next-Generation Personal Health Record in the Philippines and Taiwan: An Implementation Case Report Using Health Level 7 International Fast Healthcare Interoperability Resources](https://doi.org/10.2196/56272)", *JMIR Formative Research*, 2025.
- Song C., Nakayama M., "[Implementation of a Patient Summary Web Application According to the International Patient Summary and Validation in Common Use Cases in Japan](https://doi.org/10.1007/s10916-023-01993-6)", *Journal of Medical Systems*, 2023.
- Schippers D., Spil T., Stegwee R., Folmer E., Donnelly S., "[The adoption and diffusion of the International Patient Summary](https://doi.org/10.24251/hicss.2025.425)", *Proceedings of the 58th Hawaii International Conference on System Sciences (HICSS)*, 2025.
- da Silva Carvalho N., Papadimitriou A., Stegwee R., Gille H., et al., "[Accelerating European electronic health record exchange format (EEHRxF) implementation across Europe: a policy perspective](https://doi.org/10.3389/fmed.2025.1648170)", *Frontiers in Medicine*, 2025.
- Kay S., Cangioli G., Nusbaum M., "[The International Patient Summary and the extensibility requirement](https://international-patient-summary.net/the-international-patient-summary-and-the-extensibility-requirement/)", *Studies in Health Technology and Informatics* (pHealth), 2020.
- D'Amore J., Cangioli G., Hausam R., "[Advancing the International Patient Summary](https://international-patient-summary.net/advancing-the-international-patient-summary/)"
- "[Towards the Austrian Patient Summary](https://international-patient-summary.net/towards-the-austrian-patient-summary/)", *Studies in Health Technology and Informatics* (dHealth).
- "[Revival of the International Patient Summary (IPS)](https://smiledigitalhealth.com/our-blog/revival-of-the-international-patient-summary-ips)", Smile Digital Health blog.
- [PubMed search: "international patient summary"](https://pubmed.ncbi.nlm.nih.gov/?term=%22international+patient+summary%22) hakemli literatür için.


## References

Metindeki [1] gibi numaralı atıflar, aşağıdaki ilgili girdiye bağlanır. Bağlantılar Kasım 2026'da kontrol edildi. Yasalar, benimseme rakamları ve sürümler değişir; güncel durum için kaynağa bakın.

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

Bu kaynaklara yukarıda atıf yapılmamıştır, ancak standardın kendisi için birincil başvuru kaynaklarıdır.

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
