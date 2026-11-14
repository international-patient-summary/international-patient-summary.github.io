# International Patient Summary (IPS)

**International Patient Summary (IPS)** eli kansainvälinen potilasyhteenveto on maailmanlaajuinen standardi lyhyelle sähköiselle otteen potilastiedoista. Se sisältää perustiedot, joita kliinikko tarvitsee potilaan turvalliseen hoitoon. Se on suunniteltu olemaan:

- **Minimaalinen ja ei-tyhjentävä.** Se on potilastietojen pieni, valikoitu osajoukko, ei koko potilaskertomus.
- **Erikoisalasta riippumaton.** Kuka tahansa kliinikko voi käyttää sitä missä tahansa erikoisalassa.
- **Sairaudesta riippumaton.** Se ei ole sidottu tiettyyn sairauteen tai hoitopolkuun.
- **Toteutettavissa oleva ja kansainvälinen.** Se perustuu maailmanlaajuisiin standardeihin ja terminologioihin, joten sitä voidaan käyttää maiden, kielten ja tietojärjestelmien välillä.

Lyhyesti sanottuna IPS vastaa yhteen kysymykseen kliinikolle, joka ei ole koskaan tavannut potilasta: *"Mitä minun on tiedettävä juuri nyt, jotta voin hoitaa tätä ihmistä turvallisesti?"*


## Miksi IPS on olemassa

Terveystiedot ovat yleensä lukittuina paikalliseen sähköiseen potilastietojärjestelmään (EHR), kansalliseen järjestelmään tai toimittajan tuotteeseen. Kun potilas hakeutuu hoitoon muualla, esimerkiksi toiseen sairaalaan, alueelle tai maahan, hoitava kliinikko ei useinkaan pääse käsiksi näihin tietoihin. IPS antaa kaikille yhden yhteisen, siirrettävän yhteenvetomuodon.

### Keskeiset käyttötapaukset

| Käyttötapaus | Kuvaus |
|---|---|
| **Äkillinen hoidon tarve ja ensihoito** | Potilas sairastuu tai loukkaantuu kaukana kotoa, eivätkä paikalliset kliinikot pääse hänen kotimaansa EHR:ään. Tämä on alkuperäinen, ensisijainen käyttötapaus. |
| **Rajat ylittävä hoito** | Matkailijat, siirtolaiset, rajatyöntekijät ja pakolaiset kantavat mukanaan yhteenvetoa, jonka ulkomaiset kliinikot voivat lukea. |
| **Suunniteltu hoito ja siirtymät** | Lähetteet, erikoislääkärin konsultaatiot, sairaalaan otot, kotiutukset ja luovutukset palveluntuottajien välillä. |
| **Lääkintämatkailu ja liikkuvuus** | Potilaat, jotka valitsevat hoidon saamisen toisessa lainkäyttöalueella. |
| **Potilaan vaikutusmahdollisuuksien vahvistaminen** | Potilaat säilyttävät, katsovat ja jakavat oman yhteenvetonsa puhelinsovelluksesta, portaalista tai tulosteesta. |


## Milloin IPS:ää käytetään

Käytä IPS:ää, kun joku, joka ei tunne potilasta, tarvitsee nopeasti luotettavan tilannekuvan, ja kun lähettäjä ja vastaanottaja eivät jaa tietojärjestelmää.

### Hyvät käyttökohteet

- **Ensihoito ja äkillinen hoidon tarve**, erityisesti kaukana kotoa tai rajan yli. Tähän käyttöön IPS suunniteltiin.
- **Rajat ylittävä vaihto kansallisten järjestelmien välillä**, kuten EU:n MyHealth@EU-palvelu [[1]](#ref-1) [[2]](#ref-2).
- **Potilaan hallussa olevat yhteenvedot**, joita matkailijat, siirtolaiset, pakolaiset, pyhiinvaeltajat tai monimutkaisia sairauksia sairastavat kantavat mukanaan puhelimessa tai paperilla [[3]](#ref-3).
- **Kansallinen tai alueellinen potilasyhteenveto.** Monet maat rakentavat oman yhteenvetonsa IPS:n profiilina, jotta sitä voidaan vaihtaa myös kansainvälisesti [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
- **Yhteinen perusta hoidon siirtymille,** kuten lähetteille, sairaalaan otoille ja kotiutuksille, kun rikkaampaa erikoisasiakirjaa ei ole saatavilla.
- **Lähtökohta muille tietoaineistoille,** kuten rokotustodistuksille, tutkimusaineistoille tai rekistereille, jotka tarvitsevat samat ydintiedot [[7]](#ref-7) [[8]](#ref-8).

### Huonot käyttökohteet

- **Täydellinen potilaskertomus.** IPS on tarkoituksella minimaalinen. Käytä täyttä potilaskertomuksen vientiä tai erikoisasiakirjaa, kun yksityiskohdilla on merkitystä.
- **Erikoisalakohtaiset asiakirjat,** kuten onkologisen hoidon yhteenveto, äitiyskortti tai yksityiskohtainen epikriisi. Niillä on omat standardinsa, jotka voivat sisältää IPS:n sisältöä tai viitata siihen.
- **Reaaliaikaiset kliiniset työnkulut yhden organisaation sisällä.** Yhden EHR:n sisällä kannattaa kyselyttää reaaliaikaista dataa yhteenvetovedoksen sijaan.
- **Oikeudelliset, laskutus- tai vakuutustiedot.** IPS on kliininen yhteenveto, ei hallinnollinen tai korvausvaatimuksia koskeva tietue.
- **Päätökset, jotka vaativat taattua täydellisyyttä.** IPS on vain niin täydellinen ja ajantasainen kuin sen lähde ja tekijä. Vahvista kriittiset tiedot aina potilaan kanssa, kun se on mahdollista.


## Mitä IPS sisältää

IPS-asiakirjassa on kaksi kerrosta:

1. **Otsikko, joka kirjaa kuka, mitä ja milloin:**
   - **Potilas (Patient):** henkilöllisyys, väestötiedot ja yhteystiedot.
   - **Tekijä (Author):** henkilö, organisaatio tai järjestelmä, joka tuotti yhteenvedon.
   - **Haltija (Custodian):** organisaatio, joka vastaa sen ylläpidosta.
   - **Vahvistaja (Attester):** kuka on tarkistanut sen, jos kukaan.
   - **Päivämäärä ja kellonaika:** milloin se luotiin.

2. **Kliininen runko, joka on jäsennelty osioihin.** Osiot ovat pakollisia, suositeltuja tai valinnaisia.

| Osio | Tila | Tyypillinen sisältö |
|---|---|---|
| **Medication Summary** (Lääkitysyhteenveto) | Pakollinen | Nykyiset ja olennaiset aiemmat lääkkeet, reseptit, annostus |
| **Allergies and Intolerances** (Allergiat ja intoleranssit) | Pakollinen | Lääke-, ruoka- ja ympäristöallergiat; reaktiot ja vakavuus |
| **Problem List** (Ongelmaluettelo) | Pakollinen | Aktiiviset diagnoosit, sairaudet ja kliiniset ongelmat |
| Immunizations (Rokotukset) | Suositeltu | Annetut rokotteet, kuten jäykkäkouristus, hepatiitti B, influenssa, COVID-19 |
| History of Procedures (Toimenpidehistoria) | Suositeltu | Suuret leikkaukset ja kajoavat toimenpiteet |
| Medical Devices (Lääkinnälliset laitteet) | Suositeltu | Implantit ja laitteet, kuten sydämentahdistimet, stentit, proteesit |
| Diagnostic Results (Diagnostiset tulokset) | Suositeltu | Keskeiset laboratoriotulokset, kuvantamislausunnot, patologia |
| Vital Signs (Elintoiminnot) | Valinnainen | Verenpaine, syke, paino, pituus, BMI |
| History of Past Illness (Aiemmat sairaudet) | Valinnainen | Parantuneet sairaudet ja merkittävät aiemmat ongelmat |
| Functional Status (Toimintakyky) | Valinnainen | Vammat ja kyky suoriutua päivittäisistä toiminnoista |
| Plan of Care (Hoitosuunnitelma) | Valinnainen | Hoitosuunnitelmat ja hoitosuositukset |
| Social History (Sosiaalinen tausta) | Valinnainen | Tupakka, alkoholi ja muut olennaiset elämäntapatekijät |
| History of Pregnancy (Raskaushistoria) | Valinnainen | Nykyinen raskauden tila ja raskaushistoria |
| Advance Directives (Hoitotahto) | Valinnainen | Hoitotahdot, elvytystoiveet, suostumuslausunnot |
| Alerts (Varoitukset) | Valinnainen | Turvallisuuskriittiset varoitukset, jotka eivät sovi muualle (lisätty FHIR IPS STU 2:ssa) |
| Patient Story (Potilaan tarina) | Valinnainen | Mikä on potilaalle tärkeää: tarpeet, vahvuudet, arvot, huolet ja toiveet potilaan omin sanoin (lisätty FHIR IPS STU 2:ssa) |

**Sen selvästi sanominen, ettei jotain ole, on tärkeää.** Tyhjä osio ei kerro kliinikolle, onko potilaalla lainkaan allergioita vai eikö kukaan ole vain kirjannut niitä. IPS odottaa siksi nimenomaisia ilmaisuja, kuten *"ei tunnettuja allergioita"*, *"ei nykyisiä lääkkeitä"* tai *"tieto ei ole saatavilla"*.


## IPS:n taustalla olevat standardit

IPS on joukko yhteensovitettuja standardeja. ISO- ja CEN-standardit määrittelevät, *mitä* potilasyhteenvedon on sisällettävä. HL7:n toteutusoppaat määrittelevät, *miten* se koodataan.

| Standardi | Elin | Rooli |
|---|---|---|
| **EN 17269** | CEN (Euroopan standardointikomitea) | Abstrakti IPS-tietojoukko, julkaistu 2019 |
| **ISO 27269** | ISO (Kansainvälinen standardoimisjärjestö) | Abstraktin IPS-tietojoukon kansainvälinen versio, julkaistu 2021 |
| **CEN/TS 17288** | CEN | Ohjeet IPS:n toteuttamiseen rajat ylittävää käyttöä varten |
| **HL7 FHIR IPS Implementation Guide** | HL7 International | Nykyaikainen, rajapintaystävällinen koodaus ja ensisijainen toteutusmuoto. STU 2 (2.0.x) lisäsi Alerts- ja Patient Story -osiot, salli tyhjät osiot, täsmensi `$summary`-toimintoa ja siirtyi SNOMED CT IPS -terminologiaan [[9]](#ref-9). |
| **HL7 CDA IPS Implementation Guide** | HL7 International | XML-asiakirjapohjainen koodaus, yleinen nykyisissä kansallisissa ja eurooppalaisissa infrastruktuureissa |

Työtä koordinoidaan **Joint Initiative Council for Global Health Informatics Standardization (JIC)** -yhteistyöelimen kautta. JIC kokoaa yhteen ISO:n, CEN:n, HL7:n, SNOMED Internationalin, IHE:n ja muita. IPS sai alkunsa EU:n ja Yhdysvaltojen vuoden 2016 yhteistyöstä rajat ylittävien terveystietojen alalla, ja sitä tukevat nyt hallitukset ja digitaalisen terveyden ohjelmat kaikkialla maailmassa.


## Miten IPS koodataan HL7 FHIR:llä

FHIR:ssä IPS on yksi **`Bundle`**, jonka tyyppi on `document`:

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

Keskeiset tekniset seikat:

- **Jokaisella osiolla on ihmisen luettavissa oleva kertomus (narrative).** Kliinikko voi lukea IPS:n tavallisella selaimella, vaikka FHIR-ohjelmistoa ei olisi.
- **Jokaisella osiolla on myös koodattuja merkintöjä**, jotka ovat jäsenneltyjä FHIR-resursseja, joita ohjelmisto voi käsitellä, kääntää ja täsmäyttää.
- **Profiilit rajoittavat FHIR:n perusresursseja.** Esimerkiksi *Patient (IPS)* ja *AllergyIntolerance (IPS)* määrittelevät vähimmäistiedot ja "must support" -elementit.
- **`$summary`-operaatio** (`GET [base]/Patient/[id]/$summary`) pyytää FHIR-palvelinta tuottamaan potilaalle IPS:n tarvittaessa.
- **IPS on allekirjoitettavissa ja itsenäinen.** Täydellinen asiakirja voidaan tallentaa, lähettää, allekirjoittaa ja varmentaa yhtenä kokonaisuutena.


## Terminologiat

Yhteiset koodistot tekevät IPS:stä luettavan eri kielillä ja maissa:

| Terminologia | Käyttötarkoitus |
|---|---|
| **SNOMED CT** | Ongelmat, allergiat, toimenpiteet, laitteet, kliiniset löydökset. Ilmainen **SNOMED CT IPS Terminology** -osajoukko on käytettävissä IPS-käyttöön, myös ei-jäsenmaissa. |
| **LOINC** | Asiakirja- ja osiotyypit, laboratoriotutkimukset, elintoiminnot |
| **ATC** ja muut lääkekoodistot | Lääkevalmisteet ja vaikuttavat aineet |
| **UCUM** | Mittayksiköt |
| **ISO- ja HL7-arvojoukot** | Maat, kielet, hallinnolliset sukupuolet, puuttumisen ja tuntemattomuuden syyt |

Koska merkinnät on koodattu, vastaanottava järjestelmä voi näyttää portugaliksi kirjoitetun IPS:n englanninkielisin otsikoin. Koodattu merkitys pysyy samana.


## Miten potilaat ja kliinikot käyttävät IPS:ää

IPS voidaan tuottaa EHR:ssä, kansallisessa potilastietopalvelussa, potilasportaalissa tai henkilökohtaisessa terveyssovelluksessa. Se voidaan sitten toimittaa useilla tavoilla:

- **Järjestelmästä järjestelmään:** FHIR REST -rajapintojen, kansallisten infrastruktuurien tai rajat ylittävien yhdyskäytävien kautta, kuten EU:n MyHealth@EU-verkko.
- **Potilaan välittämä jakaminen:** potilas säilyttää yhteenvedon lompakossa tai terveyssovelluksessa ja jakaa sen tarvittaessa.
- **SMART Health Links:** QR-koodi tai URL, joka antaa kliinikolle aikarajoitetun, valinnaisesti salasanasuojatun pääsyn salattuun IPS:ään. Kliinikko voi avata sen tavallisessa verkkoselaimessa.
- **Paperi tai PDF:** tulostettu kertomusmuotoinen esitys varavaihtoehtona, kun mikään muu ei toimi.

Sovellukset, kuten **CommonHealth**, antavat potilaiden kerätä tietonsa ja jakaa IPS:n SMART Health Linksien kautta.

Tyypillinen hätätilanne:

1. Matkailija romahtaa ulkomailla.
2. Matkailija tai hänen seuralaisensa näyttää QR-koodin puhelimesta.
3. Päivystävä lääkäri skannaa sen ja näkee sekunneissa matkailijan lääkkeet, allergiat ja aktiiviset ongelmat.
4. Lääkäri välttää vaarallisen lääkeyhteisvaikutuksen ja hoitaa potilasta turvallisesti.


## Periaatteet ja suunnitteluvalinnat

- **Turvallisuus ensin.** Sisältö valitaan kliinisen merkityksen, ei täydellisyyden perusteella.
- **Oletuksena globaali, laajennuksilla paikallinen.** Maat luovat kansallisia profiileja, kuten EU:n, Australian tai Kanadan muunnelmia, jotka lisäävät vaatimuksia rikkomatta kansainvälistä ydintä.
- **Ihmisen luettavissa ja koneen käsiteltävissä.** Kertomus ja koodattu data ovat rinnakkain.
- **Vapaa ja avoin.** HL7:n IPS-määritykset ja IPS:n SNOMED CT -osajoukko ovat vapaasti saatavilla käyttöönoton esteiden madaltamiseksi.
- **Yksityisyys ja suostumus.** Pääsyä ohjaavat paikallinen laki ja potilaan suostumus. SMART Health Links -tyyppiset mekanismit pitävät potilaan hallinnassa.


## Miten IPS:ää käytetään

### Potilaille

1. **Pyydä sellainen.** Kysy klinikaltasi, sairaalaltasi, kansalliselta terveysportaalilta tai terveyssovelluksestasi, voiko se tuottaa IPS:n tai siihen perustuvan kansallisen potilasyhteenvedon.
2. **Tarkista se.** Lue se, kun olet terve. Ilmoita kaikesta virheellisestä tai puuttuvasta, erityisesti allergioista ja lääkkeistä.
3. **Pidä se mukanasi.** Tallenna se terveyssovellukseen tai lompakkoon, SMART Health Link -QR-koodina tai tulosteena matkustusasiakirjojesi joukkoon.
4. **Pidä se ajan tasalla.** Hanki uusi uuden diagnoosin, uuden pitkäaikaisen lääkkeen, leikkauksen tai implantin jälkeen.
5. **Jaa se tarkoituksella.** Näytä se sinua hoitavalle kliinikolle. SMART Health Link voi vanhentua ja vaatia salasanan, joten päätät itse, kuka sen näkee ja kuinka pitkään [[10]](#ref-10).

### Kliinikoille

1. **Tarkista otsikko ensin.** Kuka sen kirjoitti, milloin ja onko kukaan varmentanut sitä. Vanha tai varmentamaton yhteenveto vaatii enemmän varovaisuutta.
2. **Lue pakolliset osiot ensin:** allergiat, lääkkeet ja ongelmat.
3. **Käsittele "ei tunnettua" eri tavalla kuin "ei kirjattu".** "Ei tunnettuja allergioita" on kliininen toteamus. Tyhjä tai "tuntematon" osio ei ole.
4. **Vahvista kriittiset tiedot** potilaan tai hänen seuralaisensa kanssa aina kun mahdollista.
5. **Käytä koodattua dataa.** Kun järjestelmäsi tukee sitä, koodatut merkinnät mahdollistavat yhteenvedon näyttämisen kielelläsi ja tarkistamisen lääkeyhteisvaikutus- ja allergiasääntöjä vasten.
6. **Älä oleta täydellisyyttä.** IPS on turvaverkko, ei täydellinen sairauskertomus.

### Toteuttajille

1. **Valitse määritys.** Käytä voimassa olevaa HL7 FHIR IPS Implementation Guide -opasta (STU 2) tai maasi kansallista profiilia siitä. CDA-pohjaisissa infrastruktuureissa käytä CDA IPS -opasta [[9]](#ref-9) [[11]](#ref-11).
2. **Kuvaa tietosi.** Kuvaa paikalliset tiedot IPS-profiileihin: `Patient`, `AllergyIntolerance`, `MedicationStatement`, `Condition` ja niin edelleen. Suurin osa työstä on tässä kuvauksessa.
3. **Kuvaa terminologiasi.** Kuvaa paikalliset koodit SNOMED CT:hen, LOINC:iin ja lääkekoodistoihin. SNOMED CT IPS Terminology on ilmainen tähän tarkoitukseen [[12]](#ref-12).
4. **Tuota asiakirja.** Tue `$summary`-operaatiota tai rakenna `Bundle` ja `Composition` itse. Sisällytä jokaiselle osiolle luettava kertomus sekä nimenomaiset "ei tunnettua"- tai "ei saatavilla" -ilmaisut.
5. **Validoi se.** Tarkista jokainen tuotettu asiakirja FHIR Validatorilla ja yhdenmukaisuustestipaketilla, kuten Inferno IPS Test Kitillä [[13]](#ref-13).
6. **Allekirjoita ja jaa se.** Päätä, miten asiakirjat allekirjoitetaan, tallennetaan ja lähetetään: rajapinnan, asiakirjarekisterin, rajat ylittävän yhdyskäytävän tai SMART Health Linkin kautta.
7. **Käytä sitä turvallisesti.** Vastaanottajana näytä kertomus, vaikka et pystyisi käsittelemään jokaista koodattua merkintää, pidä lähde ja tekijä näkyvissä äläkä koskaan yhdistä vastaanotettua dataa hiljaa paikalliseen potilaskertomukseen.
8. **Testaa muiden kanssa.** Varmista yhteentoimivuus muiden toimittajien ja maiden kanssa IHE:n ja HL7:n Connectathoneissa ennen tuotantoon siirtymistä.

### Hallituksille ja terveysorganisaatioille

1. **Ota käyttöön kansallinen profiili,** joka rakentuu IPS:n päälle erillisen muodon sijaan, jotta kansallinen yhteenveto on oletuksena kansainvälinen [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
2. **Ratkaise hallinto:** kuka saa luoda, päivittää ja vahvistaa yhteenvedon ja kuka vastaa sen oikeellisuudesta.
3. **Ratkaise terminologian lisensointi:** SNOMED CT -jäsenyys tai ilmaisen IPS-osajoukon käyttö.
4. **Ratkaise henkilöllisyys, suostumus ja luottamus:** miten potilaat tunnistetaan, miten suostumus kirjataan ja mitä luottamuskehystä, kuten MyHealth@EU:ta tai WHO:n Global Digital Health Certification Networkia, käytetään asiakirjojen varmentamiseen [[1]](#ref-1) [[14]](#ref-14).
5. **Julkaise rakentamasi** IPS Implementation Registryssä, jotta muut voivat oppia siitä [[15]](#ref-15).


## IPS:n integrointi terveydenhuollon järjestelmiin

IPS on harvoin erillinen järjestelmä. Se on näkymä tietoihin, jotka jo sijaitsevat EHR-järjestelmissä, terveystietojen vaihtoalustoilla, kansallisissa tietovarannoissa ja henkilökohtaisissa terveyssovelluksissa.

| Integraatiomalli | Miten se toimii | Esimerkkejä |
|---|---|---|
| **EHR:n tuottama** | EHR rakentaa IPS:n omasta datastaan pyynnöstä, usein FHIR:n `$summary`-operaation kautta. | EHR-toimittajat ja FHIR-palvelimet, kuten HAPI FHIR, jossa on IPS-generaattorimoduuli |
| **Kansallinen tai alueellinen tietovaranto** | Kansallinen potilasyhteenvetopalvelu tallentaa IPS:n profiilin ja tekee sen saataville valtuutetuille palveluntuottajille. | Kanadan PS-CA, Australian AU Patient Summary, Sveitsin sähköinen potilaskertomus CH IPS:n kanssa [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6) |
| **Rajat ylittävä yhdyskäytävä** | Jokainen maa ylläpitää kansallista yhteyspistettä. Se muuntaa kotimaan yhteenvedon sovittuun vaihtomuotoon, lähettää sen rajan yli, ja vastaanottava maa näyttää sen paikallisella kielellä. | MyHealth@EU:n sähköisen terveyden kansalliset yhteyspisteet [[1]](#ref-1) [[2]](#ref-2) |
| **Alueellinen vaihtoverkko** | Terveysministeriöt vaihtavat IPS-asiakirjoja kansallisten FHIR-palvelinten kautta yhteisen alueellisen oppaan mukaisesti. | RACSELin IPS-LAC ja Pan American Highway for Digital Health (PH4H) Latinalaisessa Amerikassa ja Karibialla [[16]](#ref-16) |
| **Potilaan välittämä** | Potilas säilyttää IPS:n sovelluksessa tai lompakossa ja jakaa sen QR-koodilla tai SMART Health Linkillä. | CommonHealth; WHO:n luottamusverkoston IPS-työ pyhiinvaellusta varten [[10]](#ref-10) [[14]](#ref-14) |
| **Rajapintapohjainen pääsy** | Sovellukset hakevat valtuutetun potilaan IPS:n FHIR-rajapinnan kautta. | International Patient Access (IPA); yhdysvaltalaiset verkot kuten Flexpa, joka lisäsi IPS-tuen CMS Interoperability Frameworkin puitteissa [[17]](#ref-17) [[18]](#ref-18) |

Integraatiokohdat, joihin on varauduttava:

- **Asiakirjojen jakaminen:** IHE-profiilit, kuten MHD (FHIR) ja XDS (asiakirjarekisterit), tallentavat ja löytävät IPS-asiakirjoja. IHE:n IPS-sisältöprofiilit lisäävät yhdenmukaisuus- ja testaussääntöjä [[11]](#ref-11).
- **Potilaan tunnistaminen:** IHE PIXm ja PDQm tai kansallinen tunniste yhdistävät potilaan järjestelmien välillä.
- **Olemassa olevat asiakirjat:** monet järjestelmät tuottavat jo CDA:ta, C-CDA:ta tai kansallisia yhteenvetoja. Niiden kuvaaminen IPS:ään on yleensä helpompaa kuin aloittaminen alusta, mutta tarkista erot kardinaliteetissa, arvojoukoissa ja koodistoissa.
- **Kansalliset profiilit:** kansallinen ydin, kuten US Core, AU Core, CH Core tai JP Core, voi poiketa IPS:stä. Kansalliset potilasyhteenvetoprofiilit sovittavat nämä yhteen [[5]](#ref-5) [[6]](#ref-6) [[19]](#ref-19).
- **Käännös ja esitys:** vastaanottajien tulisi esittää kertomus ja kääntää koodatut merkinnät käyttämällä koodien näyttönimiä vastaanottajan kielellä.
- **Tietoturva:** käytä TLS:ää, tarvittaessa allekirjoitettuja asiakirjoja, auditointilokitusta (esimerkiksi IHE ATNA tai BALP) ja suostumukseen sidottua pääsynhallintaa.


## Nykyinen käyttöönotto

IPS on siirtynyt pilottihankkeista kansallisiin ja alueellisiin ohjelmiin. Tilanne muuttuu nopeasti, joten tarkista uusin tilanne linkitetyistä lähteistä.

- **IPS Implementation Registry.** IPS-yhteisö ylläpitää julkista toteutusrekisteriä. Vuoden 2026 puolivälissä siinä oli 34 merkintää, Argentiinan palveluntuottajavälitteisestä IPS-LAC-hankkeesta Vietnamin Better Health Programiin [[15]](#ref-15).
- **FHIR-ekosysteemi.** HL7 Internationalin ja Firelyn vuoden 2025 State of FHIR -kyselyssä 42 vastaajaa sanoi IPS:n olevan heidän kansallisten FHIR-määritystensä perusta, enemmän kuin minkään muun kansainvälisen oppaan [[20]](#ref-20).
- **Tutkimus.** Vuoden 2025 tutkimuksessa IPS:n käyttöönotosta haastateltiin sidosryhmiä, jotka nostivat parhaiksi hyödyiksi paremman hoidon laadun ja potilasturvallisuuden [[21]](#ref-21).

| Maa tai alue | Tila |
|---|---|
| **Euroopan unioni ja ETA** | MyHealth@EU vaihtaa potilasyhteenvetoja ja sähköisiä reseptejä maiden välillä. Euroopan komission vuoden 2026 esityksen mukaan 17 jäsenvaltiota ja Norja ovat tuotannossa ja useimmat muut aikovat liittyä [[2]](#ref-2) [[22]](#ref-22). EHDS-asetus tekee potilasyhteenvetojen vaihdosta pakollista vuoteen 2029 mennessä [[23]](#ref-23). |
| **Kanada** | Koko Kanadan kattava potilasyhteenveto (PS-CA), jonka Canada Health Infoway hyväksyi lokakuussa 2022, perustuu IPS:ään kanadalaisin mukautuksin [[4]](#ref-4). |
| **Australia** | AU Patient Summary, joka perustuu IPS:ään ja AU Coreen, on HL7 Australian kehittämä Sparked-ohjelman kautta [[5]](#ref-5) [[24]](#ref-24). |
| **Sveitsi** | HL7 Switzerlandin CH IPS 2.0.0 (kokeilukäyttö) perustuu IPS:ään ja CH Coreen. Erillinen profiili lisää sen, mitä Sveitsin sähköinen potilaskertomus tarvitsee [[6]](#ref-6). |
| **Yhdysvallat** | IPS:lle ei ole liittovaltion vaatimusta. Yhdysvallat käyttää US Corea ja USCDI:tä. Liittovaltion virastot osallistuvat IPS-työhön kansainvälisesti, ja jotkin verkot tukevat IPS:ää vapaaehtoisesti [[18]](#ref-18). |
| **Latinalainen Amerikka ja Karibia** | RACSELin terveysministeriöt käyttävät alueellista IPS-LAC-opasta. Vuonna 2023 16 maata vaihtoi IPS-LAC-asiakirjoja connectathonissa São Paulossa [[16]](#ref-16). |
| **Japani** | Tutkijat ovat rakentaneet ja validoineet IPS-pohjaisen potilasyhteenvetosovelluksen yleisiin japanilaisiin käyttötapauksiin JP Corea käyttäen [[19]](#ref-19). |
| **Taiwan ja Filippiinit** | Vuoden 2025 toteutusraportti kuvaa rajat ylittävän henkilökohtaisen terveystietueen, joka käyttää FHIR:ää ja on linjassa IPS:n kanssa [[25]](#ref-25). |
| **G7** | Vuonna 2021 G7-maiden terveysministerit sitoutuivat työskentelemään IPS:n suuntaan ja julkaisivat IPS-etenemissuunnitelman [[26]](#ref-26). |
| **WHO** | WHO:n Global Digital Health Certification Network sisältää IPS-pohjaisia luottamusdomeeneja, kuten varmennettavan IPS:n pyhiinvaellusta varten [[14]](#ref-14). |


## Lait, asetukset ja politiikka maittain ja alueittain

IPS on standardi, ei laki. Lait ratkaisevat, onko maan vaihdettava potilasyhteenvetoja, missä muodossa ja millä yksityisyyssäännöillä. Tämä on yhteenveto, ei oikeudellista neuvontaa. Tarkista aina lain voimassa oleva teksti.

| Lainkäyttöalue | Laki tai politiikka | Mitä se tarkoittaa IPS:lle |
|---|---|---|
| **Euroopan unioni** | **Euroopan terveystietoalue (EHDS) -asetus, (EU) 2025/327.** Julkaistu 5. maaliskuuta 2025; voimassa 26. maaliskuuta 2025 alkaen [[23]](#ref-23) [[27]](#ref-27). | Potilasyhteenvedot ovat "ensisijainen luokka". Vaihdon eurooppalaisessa sähköisten potilastietojen vaihtomuodossa on toimittava kaikissa jäsenvaltioissa vuoteen 2029 mennessä. Lääketieteelliset kuvat, tutkimustulokset ja kotiutuskertomukset seuraavat vuoteen 2031 mennessä [[28]](#ref-28). Potilasyhteenvetojen muoto perustuu HL7 IPS:ään. |
| **Euroopan unioni** | **Direktiivi 2011/24/EU** potilaiden oikeuksista rajat ylittävässä terveydenhuollossa [[29]](#ref-29). | Perusti eHealth-verkoston, joka sopi MyHealth@EU:n taustalla olevat potilasyhteenvetosuositukset. |
| **Euroopan unioni** | **Yleinen tietosuoja-asetus (GDPR), (EU) 2016/679** [[30]](#ref-30). | Terveystiedot ovat erityinen tietoryhmä. Jokainen IPS-vaihto tarvitsee lainmukaisen perusteen ja asianmukaiset suojatoimet. |
| **Yhdysvallat** | **21st Century Cures Act ja tiedon estämistä koskevat säännöt** [[31]](#ref-31); vapaaehtoinen **CMS Interoperability Framework** (2025) [[17]](#ref-17). | Mikään laki ei vaadi IPS:ää. Lait vaativat sähköisten terveystietojen saatavuutta ja vaihtoa US Corea ja USCDI:tä käyttäen. IPS-tuki on vapaaehtoista. |
| **Kanada** | Provinssien ja territorioiden terveystietolait. Liittovaltion **Connected Care for Canadians Act** (Bill C-72) esiteltiin 2024, mutta sitä ei hyväksytty ennen kuin parlamentti keskeytettiin 2025. | PS-CA on koko Kanadan kattava määritys, ei oikeudellinen vaatimus. Käyttöönottoa johtavat provinssit ja territoriot yhdessä Canada Health Infowayn kanssa [[4]](#ref-4). |
| **Yhdistynyt kuningaskunta** | **Data (Use and Access) Act 2025** [[32]](#ref-32). | Sisältää valtuudet asettaa tietostandardeja terveydenhuollon ja aikuisten sosiaalihuollon tietotekniikalle. Yhdistynyt kuningaskunta isännöi G7:n vuoden 2021 IPS-sitoumusta [[26]](#ref-26). |
| **Australia** | **My Health Records Act 2012** ja vuoden 2025 "oletuksena jakaminen" -muutokset. | AU Patient Summary on kansallinen määritys, jota kehitetään Sparkedin kautta [[5]](#ref-5) [[24]](#ref-24). |
| **Sveitsi** | **Sähköistä potilaskertomusta koskeva liittovaltion laki 19. kesäkuuta 2015 (EPRA, SR 816.1)**, voimassa 15. huhtikuuta 2017 alkaen [[33]](#ref-33). | CH IPS sisältää profiilin Sveitsin sähköisen potilaskertomuksen asiakirjoille [[6]](#ref-6). |
| **Latinalainen Amerikka ja Karibia** | Alueelliset sopimukset RACSELin ja PH4H:n kautta, Amerikan kehityspankin tukemana alueelliselle oikeudelliselle kehykselle [[16]](#ref-16). | IPS-LAC on sovittu alueellinen muoto rajat ylittävään vaihtoon. |
| **G7** | **Terveysministerien julkilausuma**, Oxford, kesäkuu 2021, ja **G7 IPS Roadmap**, joulukuu 2021 [[26]](#ref-26) [[34]](#ref-34). | Poliittinen sitoumus työskennellä IPS:n ja potilaan pääsyn suuntaan, ei sitova laki. |


## Hyödyt ja haitat

| Hyödyt | Haitat |
|---|---|
| **Turvallisempi äkillinen hoito.** Kliinikot näkevät allergiat, lääkkeet ja ongelmat sekunneissa. | **Vain yhtä hyvä kuin lähteensä.** Vanhentunut tai virheellinen lähtödata tuottaa vanhentuneen tai virheellisen yhteenvedon. |
| **Yksi muoto, maailmanlaajuisesti.** Yksi toteutus palvelee kansallisia ja rajat ylittäviä tarpeita. | **Kansalliset erot.** Kansalliset profiilit lisäävät sääntöjä, joten yhdessä maassa "kelvollinen IPS" voi vaatia työtä hyväksyttäväksi toisessa. |
| **Rakennettu avoimille, kypsille standardeille:** ISO, CEN, HL7 FHIR ja CDA, SNOMED CT ja LOINC. | **Terminologian taakka.** Paikallisten koodien kuvaaminen SNOMED CT:hen ja LOINC:iin on raskasta työtä, ja täysi SNOMED CT vaatii lisenssin ilmaisen IPS-osajoukon lisäksi. |
| **Luettava ja laskettava.** Kertomus ihmisille, koodattu data ohjelmistoille ja kääntämiseen. | **Kertomus ja koodattu data voivat olla ristiriidassa,** jos generaattori on huolimaton, ja vastaanottajat voivat luottaa väärään. |
| **Potilaan vaikutusmahdollisuuksien vahvistaminen.** Potilaat voivat säilyttää ja jakaa oman yhteenvetonsa. | **Yksityisyys- ja suostumusriski.** Siirrettävä yhteenveto on arkaluonteinen, ja lait ja suostumusmallit vaihtelevat maittain. |
| **Ilmaiset määritykset** ja ilmainen IPS-terminologia alentavat kustannuksia [[12]](#ref-12). | **Versioiden vaihtuvuus.** STU 1, STU 1.1 ja STU 2 ovat rinnakkain, ja EHDS-muoto viittaa aiempaan versioon [[28]](#ref-28). |
| **Uudelleenkäytettävä** rokotustodistuksiin, tutkimukseen ja rekistereihin [[7]](#ref-7) [[8]](#ref-8). | **Tarkoituksella minimaalinen.** Ei korvaa täydellisiä potilaskertomuksia tai erikoisasiakirjoja, ja toissijaisen käytön aukot vaativat laajennuksia [[7]](#ref-7). |
| **Vahva tuki** hallituksilta, EU:lta, G7:ltä, WHO:lta ja standardointielimiltä. | **Epätasainen käyttöönotto.** Monet maat ja toimittajat ovat vielä pilottivaiheessa, ja potilaiden tietoisuus on vähäistä. |


## Suunnitelmat ja tulevaisuuden suunnat

- **EU, 2029:** potilasyhteenvetojen ja sähköisten reseptien vaihto toiminnassa kaikissa EU:n jäsenvaltioissa EHDS:n nojalla [[23]](#ref-23) [[28]](#ref-28).
- **EU, 2031:** lääketieteelliset kuvat, laboratoriotulokset ja kotiutuskertomukset liittyvät eurooppalaiseen sähköisten potilastietojen vaihtomuotoon [[28]](#ref-28).
- **MyHealth@EU:n laajentaminen:** lisää liittyviä maita ja uusia palveluja laboratoriotuloksille, kotiutuskertomuksille ja lääketieteellisille kuville [[2]](#ref-2) [[22]](#ref-22).
- **FHIR IPS STU 2:n käyttöönotto:** toteuttajat siirtyvät Alerts- ja Patient Story -osioihin, nimenomaisesti tyhjiin osioihin ja SNOMED CT IPS -terminologiaan [[9]](#ref-9).
- **Australia:** AU Patient Summary Release 1:n julkaisu, suunniteltu vuodelle 2026 [[24]](#ref-24).
- **IPS Best Practices Project:** yhteisön hanke opittujen asioiden dokumentoimiseksi, työ alkaa 2026.
- **WHO:n luottamusverkosto:** lisää IPS-pohjaisia luottamusdomeeneja varmennettaville, siirrettäville terveysasiakirjoille [[14]](#ref-14).
- **SMART Health Links:** standardoitu HL7:n kautta potilaan hallitsemaa jakamista varten [[10]](#ref-10).
- **Latinalainen Amerikka ja Karibia:** laajempi IPS-LAC-vaihto PH4H:n kautta [[16]](#ref-16).
- **Tutkimus ja toissijainen käyttö:** työ potilasyhteenvetojen laajentamiseksi kliiniseen tutkimukseen ja tekoälyyn ytimen pysyessä minimaalisena [[7]](#ref-7).


## Sanasto

| Termi | Merkitys |
|---|---|
| **IPS** | International Patient Summary |
| **FHIR** | Fast Healthcare Interoperability Resources, HL7:n moderni rajapintapohjainen standardi |
| **CDA** | Clinical Document Architecture, HL7:n XML-asiakirjastandardi |
| **IG** | Implementation Guide (toteutusopas), joukko profiileja ja sääntöjä standardin soveltamiseen |
| **Profile** | FHIR-resurssin rajoitettu versio tiettyyn käyttöön |
| **SNOMED CT** | Systematized Nomenclature of Medicine – Clinical Terms |
| **LOINC** | Logical Observation Identifiers Names and Codes |
| **SMART Health Links** | Standardi terveystietojen jakamiseen linkin tai QR-koodin kautta |
| **JIC** | Joint Initiative Council for Global Health Informatics Standardization |


## Lisätietoja

- HL7 FHIR IPS Implementation Guide: <https://hl7.org/fhir/uv/ips/>
- IPS continuous build: <https://build.fhir.org/ig/HL7/fhir-ips/>
- International Patient Summary project site: <https://international-patient-summary.net/>
- ISO 27269 (Health informatics — International patient summary): <https://www.iso.org/standard/79491.html>
- SNOMED CT IPS Terminology: <https://www.snomed.org/international-patient-summary-terminology>
- SMART Health Links: <https://docs.smarthealthit.org/smart-health-links/>


## Resurssit

Nämä linkit kattavat IPS:ää koskevat lähteet, määritykset, ohjelmistot, hankkeet, videot, kirjat ja tutkimuksen. Suurin osa tarkistettiin tätä sivua kirjoitettaessa. Jotkin julkaisijoiden sivustot estävät automaattiset tarkistukset, ja ne on merkitty *(ei tarkistettu)*.

### Viralliset määritykset ja standardit

- [HL7 FHIR IPS Implementation Guide, current published version](https://hl7.org/fhir/uv/ips/) on ensisijainen FHIR-määritys.
- [HL7 FHIR IPS Implementation Guide, STU 2](https://hl7.org/fhir/uv/ips/STU2/)
- [HL7 FHIR IPS Implementation Guide, STU 1.1](https://hl7.org/fhir/uv/ips/STU1.1/)
- [HL7 FHIR IPS publication history](https://www.hl7.org/fhir/uv/ips/history.html) listaa jokaisen julkaistun version.
- [HL7 FHIR IPS continuous build](https://build.fhir.org/ig/HL7/fhir-ips/) on viimeisin äänestämätön keskeneräinen työ.
- [Structure of the International Patient Summary](https://hl7.org/fhir/uv/ips/en/Structure-of-the-International-Patient-Summary.html) selittää osiot ja profiilit.
- [IPS design conventions](https://build.fhir.org/ig/HL7/fhir-ips/en/Design-Conventions.html) käsittelee must-supportin, puuttuvat tiedot ja kertomuksen.
- [IPS generation and data inclusion](https://build.fhir.org/ig/HL7/fhir-ips/en/Generation-and-Data-Inclusion.html) käsittelee `$summary`-operaation ja sisällön valinnan.
- [HL7 CDA IPS Implementation Guide, continuous build](https://build.fhir.org/ig/HL7/CDA-IPS/)
- [HL7 CDA IPS product brief](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=483)
- [ISO 27269, Health informatics — International patient summary](https://www.iso.org/standard/79491.html) *(ei tarkistettu)*
- [ISO/TC 215 Health informatics committee](https://www.iso.org/committee/54960.html) *(ei tarkistettu)*
- [IHE FHIR International Patient Summary profile (FIIO)](https://profiles.ihe.net/PCC/FIIO/volume-1.html)
- [IHE PCC International Patient Summary supplement, 2020 (PDF)](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS_Rev1-0_PC_2020-03-17.pdf)
- [HL7 SMART Health Cards and Links Implementation Guide](https://hl7.org/fhir/uv/smart-health-cards-and-links/)
- [SMART Health Links documentation](https://docs.smarthealthit.org/smart-health-links/)
- [HL7 FHIR International Patient Access (IPA)](https://hl7.org/fhir/uv/ipa/) on sisarmääritys potilaan rajapintapääsyä varten.
- [HL7 FHIR R4 base specification](https://hl7.org/fhir/R4/), jonka päälle IPS rakentuu.

### Lähdekoodivarastot

- [HL7/fhir-ips](https://github.com/HL7/fhir-ips) sisältää FHIR IPS IG:n lähdekoodin FHIR Shorthandilla.
- [HL7/cda-ips](https://github.com/HL7/cda-ips) sisältää CDA IPS IG:n lähdekoodin.
- [hl7-eu/eps](https://github.com/hl7-eu/eps) sisältää HL7 Europe Patient Summaryn lähdekoodin.
- [hl7ch/ch-ips](https://github.com/hl7ch/ch-ips) sisältää Sveitsin IPS:n, jonka katselin ja generaattori ovat kehitteillä.
- [GitHub topic: international-patient-summary](https://github.com/topics/international-patient-summary) listaa yhteisön varastoja.

### Kansalliset ja alueelliset mukautukset

- [HL7 Europe Patient Summary (EPS), continuous build](https://build.fhir.org/ig/hl7-eu/eps/)
- [AU Patient Summary (Australia), continuous build](https://build.fhir.org/ig/hl7au/au-fhir-ps/)
- [Trillium II IPS structure (HL7 Europe)](https://hl7.eu/fhir/build/trillium2/site/ipsStructure.html) on peräisin EU:n ja Yhdysvaltojen hankkeesta, joka auttoi IPS:n käynnistämisessä.
- [eHealth Suisse](https://www.ehealthsuisse.ch/) on Sveitsin digitaalisen terveyden osaamiskeskus ja sen IPS-käyttöönoton vetäjä.
- [MyHealth@EU, cross-border digital health services](https://health.ec.europa.eu/ehealth-digital-health-and-care/electronic-cross-border-health-services_en)
- [Xt-EHR Joint Action](https://www.xt-ehr.eu/) valmistelee Euroopan terveystietoalueen muotoja, mukaan lukien potilasyhteenvedon.

### Ohjelmistot ja työkalut

- [IPS Viewer](https://www.ipsviewer.com) ([source: jddamore/IPSviewer](https://github.com/jddamore/IPSviewer)) on avoimen lähdekoodin selainpohjainen IPS-katselin.
- [uwcirg/shl-ips-viewer](https://github.com/uwcirg/shl-ips-viewer) näyttää SMART Health Linkin kautta jaetun IPS:n.
- [smart-on-fhir/smart-health-links](https://github.com/smart-on-fhir/smart-health-links) on SMART Health Linksin viitetoteutus.
- [HAPI FHIR IPS generator](https://hapifhir.io/hapi-fhir/docs/server_ips/introduction.html) ([source: hapifhir/hapi-fhir](https://github.com/hapifhir/hapi-fhir)) on avoimen lähdekoodin Java-palvelinmoduuli, joka toteuttaa `$summary`-operaation.
- [HAPI FHIR JPA server IPS documentation](https://hapifhir.io/hapi-fhir/docs/server_jpa/ips.html)
- [Inferno IPS Test Kit](https://inferno.healthit.gov/test-kits/ips) ([source: inferno-framework/ips-test-kit](https://github.com/inferno-framework/ips-test-kit)) on avoimen lähdekoodin yhdenmukaisuustestipaketti.
- [FHIR Validator](https://validator.fhir.org/) validoi IPS-bundlet IG-profiileja vasten.
- [Simplifier: hl7.fhir.uv.ips package](https://simplifier.net/packages/hl7.fhir.uv.ips) sisältää paketin, profiilit ja esimerkit.
- [FHIR package registry](https://registry.fhir.org/)
- [FHIR Shorthand (FSH) School](https://fshschool.org/) opettaa kieltä, jolla IPS IG on kirjoitettu.
- [CommonHealth](https://www.commonhealth.org/) on potilassovellus, joka tuottaa IPS:n ja jakaa sen SMART Health Linksien kautta.
- [WHO SMART Trust](https://github.com/WorldHealthOrganization/smart-trust) on WHO:n Global Digital Health Certification Networkin luottamuskehys.

### Organisaatiot ja hankkeet

- [International Patient Summary project site](https://international-patient-summary.net/) tarjoaa uutisia, käyttöönottoraportteja ja koulutusta.
- [IPS for health IT developers](https://international-patient-summary.net/health-it-developer/)
- [HL7 International](https://www.hl7.org/)
- [IHE International](https://www.ihe.net/)
- [SNOMED International](https://www.snomed.org/)
- [SNOMED CT IPS Terminology](https://www.snomed.org/international-patient-summary-terminology) on ilmainen osajoukko IPS-käyttöön.
- [LOINC](https://loinc.org/) *(ei tarkistettu)*
- [Joint Initiative Council for Global Health Informatics Standardization (JIC)](http://www.jointinitiativecouncil.org/)
- [Global Digital Health Partnership (GDHP)](https://gdhp.health/)
- [WHO SMART Guidelines](https://smart.who.int/)
- [WHO Global Digital Health Certification Network](https://www.who.int/initiatives/global-digital-health-certification-network)

### Yhteisö ja tapahtumat

- [chat.fhir.org](https://chat.fhir.org/) on FHIR-yhteisön keskustelu, jossa on aktiivinen IPS-kanava.
- [HL7 FHIR Connectathons](https://www.hl7.org/events/fhir-connectathon/)
- [IHE Connectathons](https://www.ihe.net/participate/connectathon/)

### Videot

- [HIMSS20: IPS for computable care guidelines in 200 seconds or less (IHE International, YouTube)](https://www.youtube.com/watch?v=xjEzGM8kBPw)
- [IHE International YouTube channel](https://www.youtube.com/@IHEIntl) sisältää Connectathon-paneeleja ja IPS-istuntoja.
- [IPS project site news](https://international-patient-summary.net/) linkittää moniin tallennettuihin webinaareihin, mukaan lukien:
  - IPS-paneeli IHE North America Connectathonissa, 2024
  - IPS-istunto FHIR DevDays 2023 -tapahtumassa
  - Grahame Grieve IPS:stä ja IPA:sta, IHE Connectathon Montreux 2022
  - SNOMED CT Expo 2022 -pääpuhe
  - Matthew Rahn IPS:stä GDHP:ssä
  - HL7:n rajat ylittävä "Global Passport" -webinaari
- [YouTube search: International Patient Summary](https://www.youtube.com/results?search_query=international+patient+summary)

### Kirjat

- Tim Benson ja Grahame Grieve, [*Principles of Health Interoperability: FHIR, HL7 and SNOMED CT*](https://link.springer.com/book/10.1007/978-3-030-56883-2), 4. painos, Springer, 2020. Se käsittelee FHIR:ää, kliinisiä yhteenvetoresursseja ja terminologiaa.

### Tutkimusartikkelit ja artikkelit

- Laleci Erturkmen G. B., Sinaci A. A., Namli T., Boonstra M., et al., "[An assessment of the European Patient Summary for clinical research: a case study in cardiology](https://doi.org/10.3389/fmed.2024.1481551)", *Frontiers in Medicine*, 2024.
- Lee H., Huang J., Huang S., Chen W., et al., "[Implementing a Cross-Border Next-Generation Personal Health Record in the Philippines and Taiwan: An Implementation Case Report Using Health Level 7 International Fast Healthcare Interoperability Resources](https://doi.org/10.2196/56272)", *JMIR Formative Research*, 2025.
- Song C., Nakayama M., "[Implementation of a Patient Summary Web Application According to the International Patient Summary and Validation in Common Use Cases in Japan](https://doi.org/10.1007/s10916-023-01993-6)", *Journal of Medical Systems*, 2023.
- Schippers D., Spil T., Stegwee R., Folmer E., Donnelly S., "[The adoption and diffusion of the International Patient Summary](https://doi.org/10.24251/hicss.2025.425)", *Proceedings of the 58th Hawaii International Conference on System Sciences (HICSS)*, 2025.
- da Silva Carvalho N., Papadimitriou A., Stegwee R., Gille H., et al., "[Accelerating European electronic health record exchange format (EEHRxF) implementation across Europe: a policy perspective](https://doi.org/10.3389/fmed.2025.1648170)", *Frontiers in Medicine*, 2025.
- Kay S., Cangioli G., Nusbaum M., "[The International Patient Summary and the extensibility requirement](https://international-patient-summary.net/the-international-patient-summary-and-the-extensibility-requirement/)", *Studies in Health Technology and Informatics* (pHealth), 2020.
- D'Amore J., Cangioli G., Hausam R., "[Advancing the International Patient Summary](https://international-patient-summary.net/advancing-the-international-patient-summary/)"
- "[Towards the Austrian Patient Summary](https://international-patient-summary.net/towards-the-austrian-patient-summary/)", *Studies in Health Technology and Informatics* (dHealth).
- "[Revival of the International Patient Summary (IPS)](https://smiledigitalhealth.com/our-blog/revival-of-the-international-patient-summary-ips)", Smile Digital Health blog.
- [PubMed search: "international patient summary"](https://pubmed.ncbi.nlm.nih.gov/?term=%22international+patient+summary%22) vertaisarvioitua kirjallisuutta varten.


## References

Tekstin numeroidut viitteet, kuten [1], linkittävät alla olevaan vastaavaan merkintään. Linkit tarkistettiin marraskuussa 2026. Lait, käyttöönottoluvut ja versiot muuttuvat, joten tarkista voimassa oleva tilanne lähteestä.

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

Näihin lähteisiin ei viitata edellä, mutta ne ovat itse standardin ensisijaisia viitteitä.

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
