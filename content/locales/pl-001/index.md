# International Patient Summary (IPS)

**International Patient Summary (IPS)** to światowy standard krótkiego elektronicznego wyciągu z dokumentacji medycznej. Zawiera podstawowe informacje kliniczne, których lekarz potrzebuje, aby bezpiecznie leczyć pacjenta. Został zaprojektowany tak, aby był:

- **Minimalny i niewyczerpujący.** To niewielki, starannie dobrany podzbiór dokumentacji medycznej, a nie cała dokumentacja.
- **Niezależny od specjalności.** Mogą z niego korzystać wszyscy lekarze, w każdej dziedzinie.
- **Niezależny od choroby.** Nie jest związany z konkretną chorobą ani ścieżką postępowania.
- **Możliwy do wdrożenia i międzynarodowy.** Opiera się na globalnych standardach i terminologiach, więc można go stosować w różnych krajach, językach i systemach informatycznych.

Krótko mówiąc, IPS odpowiada na jedno pytanie lekarza, który nigdy nie spotkał pacjenta: *„Co muszę wiedzieć teraz, aby bezpiecznie zająć się tą osobą?”*


## Dlaczego istnieje IPS

Informacje o zdrowiu są zwykle zamknięte w lokalnej elektronicznej dokumentacji medycznej (EDM), krajowym systemie lub produkcie jednego dostawcy. Gdy pacjent szuka pomocy gdzie indziej, na przykład w innym szpitalu, regionie lub kraju, lekarz prowadzący często nie ma dostępu do tej historii. IPS daje wszystkim jeden wspólny, przenośny format podsumowania.

### Główne przypadki użycia

| Przypadek użycia | Opis |
|---|---|
| **Opieka nieplanowa i ratunkowa** | Pacjent zachorował lub uległ wypadkowi z dala od domu, a miejscowi lekarze nie mają dostępu do jego EDM w kraju zamieszkania. To pierwotny, główny przypadek użycia. |
| **Opieka transgraniczna** | Podróżni, migranci, pracownicy transgraniczni i uchodźcy mają przy sobie podsumowanie, które mogą przeczytać lekarze za granicą. |
| **Opieka planowa i przejścia między placówkami** | Skierowania, konsultacje specjalistyczne, przyjęcia, wypisy i przekazania między świadczeniodawcami. |
| **Turystyka medyczna i mobilność** | Pacjenci, którzy wybierają leczenie w innej jurysdykcji. |
| **Wzmocnienie pozycji pacjenta** | Pacjenci przechowują, przeglądają i udostępniają własne podsumowanie z aplikacji w telefonie, z portalu lub z wydruku. |


## Kiedy używać IPS

Używaj IPS, gdy ktoś, kto nie zna pacjenta, szybko potrzebuje wiarygodnego obrazu sytuacji, a nadawca i odbiorca nie korzystają z tego samego systemu informatycznego.

### Dobre zastosowania

- **Opieka ratunkowa i nieplanowa**, zwłaszcza z dala od domu lub za granicą. Do tego IPS został zaprojektowany.
- **Wymiana transgraniczna między systemami krajowymi**, taka jak unijna usługa MyHealth@EU [[1]](#ref-1) [[2]](#ref-2).
- **Podsumowania przechowywane przez pacjenta**, które podróżni, migranci, uchodźcy, pielgrzymi lub osoby ze złożonymi schorzeniami noszą w telefonie lub na papierze [[3]](#ref-3).
- **Krajowe lub regionalne podsumowanie pacjenta.** Wiele krajów tworzy własne podsumowanie jako profil IPS, dzięki czemu można je też wymieniać na poziomie międzynarodowym [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
- **Wspólna podstawa dla przejść w opiece,** takich jak skierowania, przyjęcia i wypisy, gdy nie ma bogatszego, wyspecjalizowanego dokumentu.
- **Punkt wyjścia dla innych zbiorów danych,** takich jak zaświadczenia o szczepieniach, dane badawcze lub rejestry, które potrzebują tych samych podstawowych informacji [[7]](#ref-7) [[8]](#ref-8).

### Słabo dopasowane zastosowania

- **Pełna dokumentacja medyczna.** IPS jest celowo minimalny. Gdy liczą się szczegóły, użyj pełnego eksportu dokumentacji lub wyspecjalizowanego dokumentu.
- **Dokumenty specyficzne dla specjalności,** takie jak podsumowanie leczenia onkologicznego, karta ciąży lub szczegółowa karta informacyjna z leczenia szpitalnego. Mają własne standardy, które mogą zawierać treści IPS lub się do nich odwoływać.
- **Kliniczne przepływy pracy w czasie rzeczywistym wewnątrz jednej organizacji.** W obrębie jednego systemu EDM należy odpytywać dane bieżące, a nie podsumowanie będące migawką.
- **Dokumentacja prawna, rozliczeniowa lub ubezpieczeniowa.** IPS jest podsumowaniem klinicznym, a nie dokumentem administracyjnym ani rozliczeniowym.
- **Decyzje wymagające gwarantowanej kompletności.** IPS jest tak kompletny i aktualny, jak jego źródło i autor. Zawsze, gdy to możliwe, potwierdzaj kluczowe fakty z pacjentem.


## Co zawiera IPS

Dokument IPS ma dwie warstwy:

1. **Nagłówek, który zapisuje, kto, co i kiedy:**
   - **Pacjent:** tożsamość, dane demograficzne i dane kontaktowe.
   - **Autor:** osoba, organizacja lub system, które sporządziły podsumowanie.
   - **Opiekun (custodian):** organizacja odpowiedzialna za jego utrzymanie.
   - **Poświadczający (attester):** kto je zweryfikował, jeśli ktokolwiek.
   - **Data i godzina:** kiedy zostało utworzone.

2. **Część kliniczna podzielona na sekcje.** Sekcje są wymagane, zalecane lub opcjonalne.

| Sekcja | Status | Typowa zawartość |
|---|---|---|
| **Medication Summary** (podsumowanie leków) | Wymagana | Aktualne i istotne wcześniejsze leki, recepty, dawkowanie |
| **Allergies and Intolerances** (alergie i nietolerancje) | Wymagana | Alergie na leki, pokarmy i czynniki środowiskowe; reakcje i ich nasilenie |
| **Problem List** (lista problemów) | Wymagana | Aktywne rozpoznania, choroby i problemy kliniczne |
| Immunizations (szczepienia) | Zalecana | Podane szczepionki, takie jak przeciw tężcowi, WZW typu B, grypie, COVID-19 |
| History of Procedures (historia zabiegów) | Zalecana | Duże operacje i inwazyjne interwencje |
| Medical Devices (wyroby medyczne) | Zalecana | Implanty i urządzenia, takie jak rozruszniki serca, stenty, protezy |
| Diagnostic Results (wyniki diagnostyczne) | Zalecana | Kluczowe wyniki badań laboratoryjnych, opisy badań obrazowych, patologia |
| Vital Signs (parametry życiowe) | Opcjonalna | Ciśnienie krwi, tętno, masa ciała, wzrost, BMI |
| History of Past Illness (przebyte choroby) | Opcjonalna | Wyleczone schorzenia i istotne dawne problemy |
| Functional Status (stan funkcjonalny) | Opcjonalna | Niepełnosprawności i zdolność wykonywania codziennych czynności |
| Plan of Care (plan opieki) | Opcjonalna | Plany opieki i zalecenia dotyczące leczenia |
| Social History (wywiad społeczny) | Opcjonalna | Tytoń, alkohol i inne istotne elementy stylu życia |
| History of Pregnancy (historia ciąż) | Opcjonalna | Aktualny stan ciąży i przebieg dotychczasowych ciąż |
| Advance Directives (dyspozycje na przyszłość) | Opcjonalna | Testament życia, preferencje dotyczące resuscytacji, oświadczenia o zgodzie |
| Alerts (alerty) | Opcjonalna | Ostrzeżenia krytyczne dla bezpieczeństwa, które nie pasują gdzie indziej (dodane w FHIR IPS STU 2) |
| Patient Story (historia pacjenta) | Opcjonalna | To, co jest ważne dla pacjenta: potrzeby, mocne strony, wartości, obawy i preferencje, wyrażone własnymi słowami pacjenta (dodane w FHIR IPS STU 2) |

**Wyraźne napisanie „nic” ma znaczenie.** Pusta sekcja nie mówi lekarzowi, czy pacjent nie ma alergii, czy też nikt ich nie zapisał. Dlatego IPS oczekuje jawnych stwierdzeń, takich jak *„brak znanych alergii”*, *„brak aktualnie stosowanych leków”* lub *„informacja niedostępna”*.


## Standardy stojące za IPS

IPS to rodzina skoordynowanych standardów. Normy ISO i CEN określają, *co* podsumowanie pacjenta musi zawierać. Przewodniki wdrożeniowe HL7 określają, *jak* je zakodować.

| Standard | Organizacja | Rola |
|---|---|---|
| **EN 17269** | CEN (Europejski Komitet Normalizacyjny) | Abstrakcyjny zbiór danych IPS, opublikowany w 2019 r. |
| **ISO 27269** | ISO (Międzynarodowa Organizacja Normalizacyjna) | Międzynarodowa wersja abstrakcyjnego zbioru danych IPS, opublikowana w 2021 r. |
| **CEN/TS 17288** | CEN | Wytyczne dotyczące wdrażania IPS do zastosowań transgranicznych |
| **HL7 FHIR IPS Implementation Guide** | HL7 International | Nowoczesne kodowanie przyjazne dla API i główny format wdrożeniowy. STU 2 (2.0.x) dodał sekcje Alerts i Patient Story, dopuścił puste sekcje, doprecyzował `$summary` i przeszedł na terminologię SNOMED CT IPS [[9]](#ref-9). |
| **HL7 CDA IPS Implementation Guide** | HL7 International | Kodowanie dokumentów w XML, powszechne w istniejących infrastrukturach krajowych i europejskich |

Prace są koordynowane przez **Joint Initiative Council for Global Health Informatics Standardization (JIC)**. JIC zrzesza ISO, CEN, HL7, SNOMED International, IHE i inne organizacje. IPS wyrósł z unijno-amerykańskiej współpracy z 2016 r. nad transgranicznymi danymi o zdrowiu i jest dziś wspierany przez rządy i programy cyfrowej ochrony zdrowia na całym świecie.


## Jak IPS jest kodowany w HL7 FHIR

W FHIR IPS jest pojedynczym **`Bundle`** typu `document`:

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

Kluczowe punkty techniczne:

- **Każda sekcja ma narrację czytelną dla człowieka.** Lekarz może przeczytać IPS w zwykłej przeglądarce, nawet bez oprogramowania FHIR.
- **Każda sekcja ma też wpisy zakodowane**, czyli ustrukturyzowane zasoby FHIR, które oprogramowanie może przetwarzać, tłumaczyć i uzgadniać.
- **Profile ograniczają bazowe zasoby FHIR.** Na przykład *Patient (IPS)* i *AllergyIntolerance (IPS)* określają minimalny zestaw danych oraz elementy „must support”.
- **Operacja `$summary`** (`GET [base]/Patient/[id]/$summary`) prosi serwer FHIR o wygenerowanie IPS pacjenta na żądanie.
- **IPS można podpisać i jest samodzielny.** Kompletny dokument można przechowywać, wysyłać, podpisywać i weryfikować jako jedną całość.


## Terminologie

Wspólne systemy kodowania sprawiają, że IPS jest czytelny ponad granicami języków i krajów:

| Terminologia | Zastosowanie |
|---|---|
| **SNOMED CT** | Problemy, alergie, zabiegi, wyroby medyczne, ustalenia kliniczne. Bezpłatny podzbiór **SNOMED CT IPS Terminology** jest dostępny do użytku z IPS, także w krajach niebędących członkami. |
| **LOINC** | Typy dokumentów i sekcji, badania laboratoryjne, parametry życiowe |
| **ATC** i inne systemy kodowania leków | Produkty lecznicze i substancje czynne |
| **UCUM** | Jednostki miar |
| **Zbiory wartości ISO i HL7** | Kraje, języki, płeć administracyjna, przyczyny braku i nieznania danych |

Ponieważ wpisy są zakodowane, system odbierający może wyświetlić IPS napisany po portugalsku z angielskimi etykietami. Zakodowane znaczenie pozostaje takie samo.


## Jak pacjenci i lekarze korzystają z IPS

IPS może wytworzyć system EDM, krajowa usługa dokumentacji zdrowotnej, portal pacjenta lub osobista aplikacja zdrowotna. Może zostać dostarczony na kilka sposobów:

- **System do systemu:** przez interfejsy FHIR REST, infrastruktury krajowe lub bramy transgraniczne, takie jak unijna sieć MyHealth@EU.
- **Udostępnianie za pośrednictwem pacjenta:** pacjent przechowuje podsumowanie w portfelu lub aplikacji zdrowotnej i udostępnia je na żądanie.
- **SMART Health Links:** kod QR lub adres URL, który daje lekarzowi ograniczony w czasie, opcjonalnie chroniony kodem dostęp do zaszyfrowanego IPS. Lekarz może go otworzyć w zwykłej przeglądarce internetowej.
- **Papier lub PDF:** wydrukowane przedstawienie narracyjne jako rozwiązanie awaryjne, gdy nic innego nie działa.

Aplikacje takie jak **CommonHealth** pozwalają pacjentom gromadzić swoją dokumentację i udostępniać IPS przez SMART Health Links.

Typowy scenariusz ratunkowy:

1. Podróżny zasłabł za granicą.
2. Podróżny lub jego towarzysz pokazuje kod QR z telefonu.
3. Lekarz pogotowia skanuje go i w ciągu kilku sekund widzi leki, alergie i aktywne problemy podróżnego.
4. Lekarz unika niebezpiecznej interakcji leków i bezpiecznie leczy pacjenta.


## Zasady i wybory projektowe

- **Bezpieczeństwo przede wszystkim.** Treść dobiera się ze względu na znaczenie kliniczne, a nie kompletność.
- **Globalnie domyślnie, lokalnie przez rozszerzenia.** Kraje tworzą profile krajowe, takie jak warianty unijne, australijskie czy kanadyjskie, które dodają wymagania bez naruszania rdzenia międzynarodowego.
- **Czytelny dla człowieka i przetwarzalny maszynowo.** Narracja i dane zakodowane współistnieją.
- **Bezpłatny i otwarty.** Specyfikacje HL7 IPS i podzbiór SNOMED CT dla IPS są swobodnie dostępne, aby obniżyć bariery przyjęcia.
- **Prywatność i zgoda.** Dostęp podlega prawu lokalnemu i zgodzie pacjenta. Mechanizmy takie jak SMART Health Links zapewniają pacjentowi kontrolę.


## Jak używać IPS

### Dla pacjentów

1. **Poproś o niego.** Zapytaj w swojej przychodni, szpitalu, krajowym portalu zdrowia lub aplikacji zdrowotnej, czy mogą wytworzyć IPS albo oparte na nim krajowe podsumowanie pacjenta.
2. **Sprawdź go.** Przeczytaj go, gdy jesteś zdrowy. Zgłoś wszystko, co jest błędne lub brakuje, zwłaszcza alergie i leki.
3. **Miej go przy sobie.** Przechowuj go w aplikacji zdrowotnej lub portfelu, jako kod QR SMART Health Link albo jako wydruk razem z dokumentami podróżnymi.
4. **Utrzymuj go aktualnym.** Uzyskaj nowy po nowym rozpoznaniu, nowym leku stosowanym długotrwale, operacji lub implancie.
5. **Udostępniaj go świadomie.** Pokaż go lekarzowi, który cię leczy. SMART Health Link może wygasnąć i może wymagać kodu, więc to ty decydujesz, kto go widzi i jak długo [[10]](#ref-10).

### Dla lekarzy

1. **Najpierw sprawdź nagłówek.** Kto go napisał, kiedy i czy ktokolwiek go zweryfikował. Stare lub niezweryfikowane podsumowanie wymaga większej ostrożności.
2. **Najpierw przeczytaj sekcje wymagane:** alergie, leki i problemy.
3. **Odróżniaj „brak znanych” od „nie zapisano”.** „Brak znanych alergii” jest stwierdzeniem klinicznym. Pusta sekcja lub „nieznane” nim nie jest.
4. **Potwierdzaj kluczowe fakty** z pacjentem lub jego towarzyszem, ilekroć możesz.
5. **Korzystaj z danych zakodowanych.** Jeśli twój system to obsługuje, wpisy zakodowane pozwalają wyświetlić podsumowanie w twoim języku i sprawdzić je pod kątem reguł interakcji leków i alergii.
6. **Nie zakładaj kompletności.** IPS jest siatką bezpieczeństwa, a nie pełnym wywiadem.

### Dla wdrożeniowców

1. **Wybierz specyfikację.** Użyj bieżącego HL7 FHIR IPS Implementation Guide (STU 2) lub krajowego profilu twojego kraju. W infrastrukturach opartych na CDA użyj przewodnika CDA IPS [[9]](#ref-9) [[11]](#ref-11).
2. **Zmapuj swoje dane.** Zmapuj dane lokalne na profile IPS: `Patient`, `AllergyIntolerance`, `MedicationStatement`, `Condition` i tak dalej. Większość pracy to właśnie to mapowanie.
3. **Zmapuj swoją terminologię.** Zmapuj kody lokalne na SNOMED CT, LOINC i systemy kodowania leków. SNOMED CT IPS Terminology można w tym celu używać bezpłatnie [[12]](#ref-12).
4. **Wygeneruj dokument.** Obsłuż operację `$summary` albo samodzielnie zbuduj `Bundle` i `Composition`. Dołącz czytelną narrację dla każdej sekcji oraz jawne stwierdzenia „brak znanych” lub „niedostępne”.
5. **Zweryfikuj go.** Sprawdź każdy wygenerowany dokument za pomocą FHIR Validator i zestawu do testów zgodności, takiego jak Inferno IPS Test Kit [[13]](#ref-13).
6. **Podpisz go i udostępnij.** Zdecyduj, jak dokumenty są podpisywane, przechowywane i wysyłane: przez API, rejestr dokumentów, bramę transgraniczną lub SMART Health Link.
7. **Odbieraj go bezpiecznie.** Jako odbiorca pokazuj narrację, nawet gdy nie możesz przetworzyć wszystkich wpisów zakodowanych, zachowuj widoczne źródło i autora i nigdy po cichu nie scalaj otrzymanych danych z lokalną dokumentacją.
8. **Testuj z innymi.** Przed uruchomieniem produkcyjnym sprawdź współdziałanie z innymi dostawcami i krajami na Connectathonach IHE i HL7.

### Dla rządów i organizacji zdrowotnych

1. **Przyjmij profil krajowy** oparty na IPS zamiast osobnego formatu, tak aby krajowe podsumowanie było domyślnie międzynarodowe [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
2. **Ustal zarządzanie:** kto może tworzyć, aktualizować i poświadczać podsumowanie oraz kto odpowiada za jego poprawność.
3. **Ustal licencjonowanie terminologii:** członkostwo w SNOMED CT lub korzystanie z bezpłatnego podzbioru IPS.
4. **Ustal tożsamość, zgodę i zaufanie:** jak identyfikuje się pacjentów, jak rejestruje się zgodę i jakie ramy zaufania, takie jak MyHealth@EU lub Global Digital Health Certification Network WHO, służą do weryfikacji dokumentów [[1]](#ref-1) [[14]](#ref-14).
5. **Opublikuj to, co zbudowałeś,** w IPS Implementation Registry, aby inni mogli się z tego uczyć [[15]](#ref-15).


## Integracja IPS z systemami ochrony zdrowia

IPS rzadko jest osobnym systemem. To widok danych, które już istnieją w systemach EDM, wymianach informacji zdrowotnych, rejestrach krajowych i osobistych aplikacjach zdrowotnych.

| Wzorzec integracji | Jak działa | Przykłady |
|---|---|---|
| **Generowany przez system EDM** | System EDM buduje IPS z własnych danych na żądanie, często przez operację FHIR `$summary`. | Dostawcy systemów EDM i serwery FHIR, takie jak HAPI FHIR, który ma moduł generatora IPS |
| **Rejestr krajowy lub regionalny** | Krajowa usługa podsumowań pacjenta przechowuje profil IPS i udostępnia go uprawnionym świadczeniodawcom. | PS-CA w Kanadzie, AU Patient Summary w Australii, elektroniczna dokumentacja pacjenta w Szwajcarii z CH IPS [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6) |
| **Brama transgraniczna** | Każdy kraj prowadzi krajowy punkt kontaktowy. Przekształca on podsumowanie kraju macierzystego w uzgodniony format wymiany, wysyła je przez granicę, a kraj odbierający wyświetla je w języku lokalnym. | MyHealth@EU National Contact Points for eHealth [[1]](#ref-1) [[2]](#ref-2) |
| **Regionalna sieć wymiany** | Ministerstwa zdrowia wymieniają dokumenty IPS przez krajowe serwery FHIR według wspólnego przewodnika regionalnego. | IPS-LAC z RACSEL i Pan American Highway for Digital Health (PH4H) w Ameryce Łacińskiej i na Karaibach [[16]](#ref-16) |
| **Za pośrednictwem pacjenta** | Pacjent przechowuje IPS w aplikacji lub portfelu i udostępnia go kodem QR lub SMART Health Link. | CommonHealth; prace nad IPS w sieci zaufania WHO dla pielgrzymek [[10]](#ref-10) [[14]](#ref-14) |
| **Dostęp przez API** | Aplikacje pobierają IPS uprawnionego pacjenta przez API FHIR. | International Patient Access (IPA); sieci amerykańskie, takie jak Flexpa, które dodały obsługę IPS w ramach CMS Interoperability Framework [[17]](#ref-17) [[18]](#ref-18) |

Punkty integracji, które warto zaplanować:

- **Udostępnianie dokumentów:** profile IHE, takie jak MHD (FHIR) i XDS (rejestry dokumentów), przechowują i wyszukują dokumenty IPS. Profile treści IHE IPS dodają reguły zgodności i testowania [[11]](#ref-11).
- **Tożsamość pacjenta:** IHE PIXm i PDQm lub identyfikator krajowy dopasowują pacjenta między systemami.
- **Istniejące dokumenty:** wiele systemów już tworzy CDA, C-CDA lub podsumowania krajowe. Zmapowanie ich na IPS jest zwykle łatwiejsze niż zaczynanie od nowa, ale należy sprawdzić różnice w liczności, zbiorach wartości i systemach kodowania.
- **Profile krajowe:** rdzeń krajowy, taki jak US Core, AU Core, CH Core lub JP Core, może różnić się od IPS. Krajowe profile podsumowania pacjenta godzą jedno z drugim [[5]](#ref-5) [[6]](#ref-6) [[19]](#ref-19).
- **Tłumaczenie i wyświetlanie:** odbiorcy powinni wyświetlać narrację i tłumaczyć wpisy zakodowane, używając nazw wyświetlanych kodów w języku odbiorcy.
- **Bezpieczeństwo:** stosuj TLS, podpisane dokumenty tam, gdzie są wymagane, rejestrowanie audytu (na przykład IHE ATNA lub BALP) oraz kontrolę dostępu powiązaną ze zgodą.


## Obecne wdrożenia

IPS przeszedł od pilotaży do programów krajowych i regionalnych. Sytuacja szybko się zmienia, więc aktualny stan sprawdzaj w podlinkowanych źródłach.

- **IPS Implementation Registry.** Społeczność IPS prowadzi publiczny rejestr wdrożeń. W połowie 2026 r. zawierał 34 wpisy, od argentyńskiego projektu IPS-LAC z udziałem świadczeniodawców po wietnamski Better Health Program [[15]](#ref-15).
- **Ekosystem FHIR.** W ankiecie State of FHIR 2025 przeprowadzonej przez HL7 International i Firely 42 respondentów stwierdziło, że IPS jest podstawą ich krajowych specyfikacji FHIR, częściej niż jakikolwiek inny przewodnik międzynarodowy [[20]](#ref-20).
- **Badania.** W badaniu z 2025 r. o przyjęciu IPS przeprowadzono wywiady z interesariuszami, którzy wskazali lepszą jakość opieki i bezpieczeństwo pacjentów jako główne korzyści [[21]](#ref-21).

| Kraj lub region | Stan |
|---|---|
| **Unia Europejska i EOG** | MyHealth@EU wymienia podsumowania pacjentów i e-recepty między krajami. Prezentacja Komisji Europejskiej z 2026 r. podała, że działa 17 państw członkowskich oraz Norwegia, a większość pozostałych planuje dołączyć [[2]](#ref-2) [[22]](#ref-22). Rozporządzenie EHDS czyni wymianę podsumowań pacjentów obowiązkową do 2029 r. [[23]](#ref-23). |
| **Kanada** | Ogólnokanadyjskie podsumowanie pacjenta (PS-CA), zatwierdzone przez Canada Health Infoway w październiku 2022 r., opiera się na IPS z kanadyjskimi adaptacjami [[4]](#ref-4). |
| **Australia** | AU Patient Summary, oparte na IPS i AU Core, jest rozwijane przez HL7 Australia w programie Sparked [[5]](#ref-5) [[24]](#ref-24). |
| **Szwajcaria** | CH IPS 2.0.0 (użycie próbne) od HL7 Switzerland opiera się na IPS i CH Core. Osobny profil dodaje to, czego potrzebuje szwajcarska elektroniczna dokumentacja pacjenta [[6]](#ref-6). |
| **Stany Zjednoczone** | Brak federalnego obowiązku stosowania IPS. USA używają US Core i USCDI. Agencje federalne uczestniczą w pracach nad IPS na poziomie międzynarodowym, a niektóre sieci wspierają IPS dobrowolnie [[18]](#ref-18). |
| **Ameryka Łacińska i Karaiby** | Ministerstwa zdrowia RACSEL używają regionalnego przewodnika IPS-LAC. W 2023 r. 16 krajów wymieniło dokumenty IPS-LAC na connectathonie w São Paulo [[16]](#ref-16). |
| **Japonia** | Badacze zbudowali i zwalidowali opartą na IPS aplikację podsumowania pacjenta dla typowych japońskich przypadków użycia, z użyciem JP Core [[19]](#ref-19). |
| **Tajwan i Filipiny** | Raport z wdrożenia z 2025 r. opisuje transgraniczną osobistą dokumentację zdrowotną opartą na FHIR i zgodną z IPS [[25]](#ref-25). |
| **G7** | W 2021 r. ministrowie zdrowia G7 zobowiązali się do pracy nad IPS i opublikowali mapę drogową IPS [[26]](#ref-26). |
| **WHO** | Global Digital Health Certification Network WHO obejmuje domeny zaufania oparte na IPS, takie jak weryfikowalny IPS dla pielgrzymek [[14]](#ref-14). |


## Prawo, przepisy i polityka według kraju i regionu

IPS jest standardem, a nie prawem. To prawo decyduje, czy kraj musi wymieniać podsumowania pacjentów, w jakim formacie i na jakich zasadach ochrony prywatności. To jest streszczenie, a nie porada prawna. Zawsze sprawdzaj aktualne brzmienie przepisów.

| Jurysdykcja | Prawo lub polityka | Co to oznacza dla IPS |
|---|---|---|
| **Unia Europejska** | **Rozporządzenie o europejskiej przestrzeni danych dotyczących zdrowia (EHDS), (UE) 2025/327.** Opublikowane 5 marca 2025 r.; weszło w życie 26 marca 2025 r. [[23]](#ref-23) [[27]](#ref-27). | Podsumowania pacjentów są „kategorią priorytetową”. Wymiana w europejskim formacie wymiany elektronicznej dokumentacji zdrowotnej musi działać w każdym państwie członkowskim do 2029 r. Obrazy medyczne, wyniki badań i karty wypisowe następują do 2031 r. [[28]](#ref-28). Format podsumowań pacjentów opiera się na HL7 IPS. |
| **Unia Europejska** | **Dyrektywa 2011/24/UE** w sprawie praw pacjentów w transgranicznej opiece zdrowotnej [[29]](#ref-29). | Powołała sieć e-zdrowia (eHealth Network), która uzgodniła wytyczne dotyczące podsumowania pacjenta stojące za MyHealth@EU. |
| **Unia Europejska** | **Ogólne rozporządzenie o ochronie danych (RODO), (UE) 2016/679** [[30]](#ref-30). | Dane dotyczące zdrowia są kategorią szczególną. Każda wymiana IPS wymaga podstawy prawnej i odpowiednich zabezpieczeń. |
| **Stany Zjednoczone** | **21st Century Cures Act i przepisy o blokowaniu informacji** [[31]](#ref-31); dobrowolny **CMS Interoperability Framework** (2025) [[17]](#ref-17). | Żaden przepis nie wymaga IPS. Prawo wymaga dostępu do elektronicznych informacji zdrowotnych i ich wymiany z użyciem US Core i USCDI. Obsługa IPS jest dobrowolna. |
| **Kanada** | Prowincjonalne i terytorialne przepisy o informacjach zdrowotnych. Federalna ustawa **Connected Care for Canadians Act** (projekt C-72) została wniesiona w 2024 r., ale nie została uchwalona przed prorogacją parlamentu w 2025 r. | PS-CA jest specyfikacją ogólnokanadyjską, a nie wymogiem prawnym. Wdrożenie prowadzą prowincje i terytoria wraz z Canada Health Infoway [[4]](#ref-4). |
| **Zjednoczone Królestwo** | **Data (Use and Access) Act 2025** [[32]](#ref-32). | Zawiera uprawnienia do ustanawiania standardów informacyjnych dla IT w ochronie zdrowia i opiece społecznej dla dorosłych. Zjednoczone Królestwo było gospodarzem zobowiązania G7 dotyczącego IPS w 2021 r. [[26]](#ref-26). |
| **Australia** | **My Health Records Act 2012** i zmiany z 2025 r. dotyczące „udostępniania domyślnie”. | AU Patient Summary jest specyfikacją krajową opracowywaną w programie Sparked [[5]](#ref-5) [[24]](#ref-24). |
| **Szwajcaria** | **Ustawa federalna z 19 czerwca 2015 r. o elektronicznej dokumentacji pacjenta (EPRA, SR 816.1)**, obowiązująca od 15 kwietnia 2017 r. [[33]](#ref-33). | CH IPS zawiera profil dla dokumentów w szwajcarskiej elektronicznej dokumentacji pacjenta [[6]](#ref-6). |
| **Ameryka Łacińska i Karaiby** | Porozumienia regionalne w ramach RACSEL i PH4H, przy wsparciu Inter-American Development Bank dla regionalnych ram prawnych [[16]](#ref-16). | IPS-LAC jest uzgodnionym formatem regionalnym dla wymiany transgranicznej. |
| **G7** | **Komunikat ministrów zdrowia**, Oksford, czerwiec 2021 r., oraz **G7 IPS Roadmap**, grudzień 2021 r. [[26]](#ref-26) [[34]](#ref-34). | Zobowiązanie polityczne do pracy nad IPS i dostępem pacjentów, a nie prawo wiążące. |


## Zalety i wady

| Zalety | Wady |
|---|---|
| **Bezpieczniejsza opieka nieplanowa.** Lekarze widzą alergie, leki i problemy w ciągu kilku sekund. | **Tak dobry, jak jego źródło.** Nieaktualne lub błędne dane źródłowe dają nieaktualne lub błędne podsumowanie. |
| **Jeden format na całym świecie.** Jedno wdrożenie obsługuje potrzeby krajowe i transgraniczne. | **Zróżnicowanie krajowe.** Profile krajowe dodają reguły, więc „poprawny IPS” w jednym kraju może wymagać pracy, by został zaakceptowany w innym. |
| **Zbudowany na otwartych, dojrzałych standardach:** ISO, CEN, HL7 FHIR i CDA, SNOMED CT i LOINC. | **Ciężar terminologii.** Mapowanie kodów lokalnych na SNOMED CT i LOINC to żmudna praca, a pełny SNOMED CT wymaga licencji wykraczającej poza bezpłatny podzbiór IPS. |
| **Czytelny i obliczalny.** Narracja dla ludzi, dane zakodowane dla oprogramowania i tłumaczenia. | **Narracja i dane zakodowane mogą się rozjeżdżać**, jeśli generator jest niedbały, a odbiorcy mogą zaufać niewłaściwemu z nich. |
| **Wzmocnienie pozycji pacjenta.** Pacjenci mogą przechowywać i udostępniać własne podsumowanie. | **Ryzyko dla prywatności i zgody.** Przenośne podsumowanie jest wrażliwe, a przepisy i modele zgody różnią się w poszczególnych krajach. |
| **Bezpłatne specyfikacje** i bezpłatna terminologia IPS obniżają koszty [[12]](#ref-12). | **Częste zmiany wersji.** STU 1, STU 1.1 i STU 2 współistnieją, a format EHDS odwołuje się do wcześniejszej wersji [[28]](#ref-28). |
| **Wielokrotnego użytku** w zaświadczeniach o szczepieniach, badaniach i rejestrach [[7]](#ref-7) [[8]](#ref-8). | **Celowo minimalny.** Nie zastępuje pełnej dokumentacji ani dokumentów specjalistycznych, a luki dla zastosowań wtórnych wymagają rozszerzeń [[7]](#ref-7). |
| **Silne poparcie** rządów, UE, G7, WHO i organizacji normalizacyjnych. | **Nierównomierne wdrażanie.** Wiele krajów i dostawców wciąż prowadzi pilotaże, a świadomość pacjentów jest niska. |


## Plany i kierunki rozwoju

- **UE, 2029:** wymiana podsumowań pacjentów i e-recept działa we wszystkich państwach członkowskich UE w ramach EHDS [[23]](#ref-23) [[28]](#ref-28).
- **UE, 2031:** obrazy medyczne, wyniki badań laboratoryjnych i karty wypisowe dołączają do europejskiego formatu wymiany elektronicznej dokumentacji zdrowotnej [[28]](#ref-28).
- **Rozszerzenie MyHealth@EU:** więcej krajów dołącza oraz pojawiają się nowe usługi dla wyników badań laboratoryjnych, kart wypisowych i obrazów medycznych [[2]](#ref-2) [[22]](#ref-22).
- **Przyjęcie FHIR IPS STU 2:** wdrożeniowcy przechodzą na sekcje Alerts i Patient Story, jawne puste sekcje oraz terminologię SNOMED CT IPS [[9]](#ref-9).
- **Australia:** publikacja AU Patient Summary Release 1, planowana na 2026 r. [[24]](#ref-24).
- **IPS Best Practices Project:** wspólny wysiłek dokumentowania wniosków, z pracami rozpoczynającymi się w 2026 r.
- **Sieć zaufania WHO:** więcej domen zaufania opartych na IPS dla weryfikowalnych, przenośnych dokumentów zdrowotnych [[14]](#ref-14).
- **SMART Health Links:** standaryzacja w HL7, dla udostępniania kontrolowanego przez pacjenta [[10]](#ref-10).
- **Ameryka Łacińska i Karaiby:** szersza wymiana IPS-LAC przez PH4H [[16]](#ref-16).
- **Badania i zastosowania wtórne:** prace nad rozszerzeniem podsumowań pacjentów o badania kliniczne i sztuczną inteligencję przy zachowaniu minimalnego rdzenia [[7]](#ref-7).


## Słowniczek

| Termin | Znaczenie |
|---|---|
| **IPS** | International Patient Summary |
| **FHIR** | Fast Healthcare Interoperability Resources, nowoczesny standard HL7 oparty na API |
| **CDA** | Clinical Document Architecture, standard dokumentów XML HL7 |
| **IG** | Implementation Guide, zestaw profili i reguł stosowania standardu |
| **Profil** | Ograniczona wersja zasobu FHIR do konkretnego zastosowania |
| **SNOMED CT** | Systematized Nomenclature of Medicine – Clinical Terms |
| **LOINC** | Logical Observation Identifiers Names and Codes |
| **SMART Health Links** | Standard udostępniania danych zdrowotnych przez link lub kod QR |
| **JIC** | Joint Initiative Council for Global Health Informatics Standardization |


## Dowiedz się więcej

- HL7 FHIR IPS Implementation Guide: <https://hl7.org/fhir/uv/ips/>
- IPS continuous build: <https://build.fhir.org/ig/HL7/fhir-ips/>
- International Patient Summary project site: <https://international-patient-summary.net/>
- ISO 27269 (Health informatics — International patient summary): <https://www.iso.org/standard/79491.html>
- SNOMED CT IPS Terminology: <https://www.snomed.org/international-patient-summary-terminology>
- SMART Health Links: <https://docs.smarthealthit.org/smart-health-links/>


## Zasoby

Te linki obejmują źródła, specyfikacje, oprogramowanie, projekty, filmy, książki i badania dotyczące IPS. Większość sprawdzono w czasie pisania tej strony. Niektóre witryny wydawców blokują automatyczne sprawdzanie i są oznaczone *(niesprawdzone)*.

### Oficjalne specyfikacje i standardy

- [HL7 FHIR IPS Implementation Guide, current published version](https://hl7.org/fhir/uv/ips/) to autorytatywna specyfikacja FHIR.
- [HL7 FHIR IPS Implementation Guide, STU 2](https://hl7.org/fhir/uv/ips/STU2/)
- [HL7 FHIR IPS Implementation Guide, STU 1.1](https://hl7.org/fhir/uv/ips/STU1.1/)
- [HL7 FHIR IPS publication history](https://www.hl7.org/fhir/uv/ips/history.html) wymienia wszystkie opublikowane wersje.
- [HL7 FHIR IPS continuous build](https://build.fhir.org/ig/HL7/fhir-ips/) to najnowsze prace w toku, jeszcze nieprzegłosowane.
- [Structure of the International Patient Summary](https://hl7.org/fhir/uv/ips/en/Structure-of-the-International-Patient-Summary.html) wyjaśnia sekcje i profile.
- [IPS design conventions](https://build.fhir.org/ig/HL7/fhir-ips/en/Design-Conventions.html) obejmuje must-support, brakujące dane i narrację.
- [IPS generation and data inclusion](https://build.fhir.org/ig/HL7/fhir-ips/en/Generation-and-Data-Inclusion.html) obejmuje `$summary` i sposób wyboru treści.
- [HL7 CDA IPS Implementation Guide, continuous build](https://build.fhir.org/ig/HL7/CDA-IPS/)
- [HL7 CDA IPS product brief](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=483)
- [ISO 27269, Health informatics — International patient summary](https://www.iso.org/standard/79491.html) *(niesprawdzone)*
- [ISO/TC 215 Health informatics committee](https://www.iso.org/committee/54960.html) *(niesprawdzone)*
- [IHE FHIR International Patient Summary profile (FIIO)](https://profiles.ihe.net/PCC/FIIO/volume-1.html)
- [IHE PCC International Patient Summary supplement, 2020 (PDF)](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS_Rev1-0_PC_2020-03-17.pdf)
- [HL7 SMART Health Cards and Links Implementation Guide](https://hl7.org/fhir/uv/smart-health-cards-and-links/)
- [SMART Health Links documentation](https://docs.smarthealthit.org/smart-health-links/)
- [HL7 FHIR International Patient Access (IPA)](https://hl7.org/fhir/uv/ipa/) to siostrzana specyfikacja dostępu pacjentów przez API.
- [HL7 FHIR R4 base specification](https://hl7.org/fhir/R4/), na której opiera się IPS.

### Repozytoria źródłowe

- [HL7/fhir-ips](https://github.com/HL7/fhir-ips) zawiera źródło FHIR IPS IG w FHIR Shorthand.
- [HL7/cda-ips](https://github.com/HL7/cda-ips) zawiera źródło CDA IPS IG.
- [hl7-eu/eps](https://github.com/hl7-eu/eps) zawiera źródło HL7 Europe Patient Summary.
- [hl7ch/ch-ips](https://github.com/hl7ch/ch-ips) zawiera szwajcarski IPS, z przeglądarką i generatorem w trakcie tworzenia.
- [GitHub topic: international-patient-summary](https://github.com/topics/international-patient-summary) wymienia repozytoria społeczności.

### Adaptacje krajowe i regionalne

- [HL7 Europe Patient Summary (EPS), continuous build](https://build.fhir.org/ig/hl7-eu/eps/)
- [AU Patient Summary (Australia), continuous build](https://build.fhir.org/ig/hl7au/au-fhir-ps/)
- [Trillium II IPS structure (HL7 Europe)](https://hl7.eu/fhir/build/trillium2/site/ipsStructure.html) pochodzi z unijno-amerykańskiego projektu, który pomógł zapoczątkować IPS.
- [eHealth Suisse](https://www.ehealthsuisse.ch/) to szwajcarskie centrum kompetencji w zakresie cyfrowej ochrony zdrowia i wdrażania IPS.
- [MyHealth@EU, cross-border digital health services](https://health.ec.europa.eu/ehealth-digital-health-and-care/electronic-cross-border-health-services_en)
- [Xt-EHR Joint Action](https://www.xt-ehr.eu/) przygotowuje formaty europejskiej przestrzeni danych dotyczących zdrowia, w tym podsumowanie pacjenta.

### Oprogramowanie i narzędzia

- [IPS Viewer](https://www.ipsviewer.com) ([source: jddamore/IPSviewer](https://github.com/jddamore/IPSviewer)) to otwartoźródłowa przeglądarka IPS działająca w przeglądarce internetowej.
- [uwcirg/shl-ips-viewer](https://github.com/uwcirg/shl-ips-viewer) wyświetla IPS udostępniony przez SMART Health Link.
- [smart-on-fhir/smart-health-links](https://github.com/smart-on-fhir/smart-health-links) to implementacja referencyjna SMART Health Links.
- [HAPI FHIR IPS generator](https://hapifhir.io/hapi-fhir/docs/server_ips/introduction.html) ([source: hapifhir/hapi-fhir](https://github.com/hapifhir/hapi-fhir)) to otwartoźródłowy moduł serwera w Javie, który implementuje `$summary`.
- [HAPI FHIR JPA server IPS documentation](https://hapifhir.io/hapi-fhir/docs/server_jpa/ips.html)
- [Inferno IPS Test Kit](https://inferno.healthit.gov/test-kits/ips) ([source: inferno-framework/ips-test-kit](https://github.com/inferno-framework/ips-test-kit)) to otwartoźródłowy zestaw testów zgodności.
- [FHIR Validator](https://validator.fhir.org/) waliduje pakiety IPS względem profili IG.
- [Simplifier: hl7.fhir.uv.ips package](https://simplifier.net/packages/hl7.fhir.uv.ips) zawiera pakiet, profile i przykłady.
- [FHIR package registry](https://registry.fhir.org/)
- [FHIR Shorthand (FSH) School](https://fshschool.org/) uczy języka, w którym napisano IPS IG.
- [CommonHealth](https://www.commonhealth.org/) to aplikacja dla pacjentów, która generuje IPS i udostępnia go przez SMART Health Links.
- [WHO SMART Trust](https://github.com/WorldHealthOrganization/smart-trust) to ramy zaufania dla Global Digital Health Certification Network WHO.

### Organizacje i projekty

- [International Patient Summary project site](https://international-patient-summary.net/) zawiera wiadomości, raporty o wdrożeniach i materiały edukacyjne.
- [IPS for health IT developers](https://international-patient-summary.net/health-it-developer/)
- [HL7 International](https://www.hl7.org/)
- [IHE International](https://www.ihe.net/)
- [SNOMED International](https://www.snomed.org/)
- [SNOMED CT IPS Terminology](https://www.snomed.org/international-patient-summary-terminology) to bezpłatny podzbiór do użytku z IPS.
- [LOINC](https://loinc.org/) *(niesprawdzone)*
- [Joint Initiative Council for Global Health Informatics Standardization (JIC)](http://www.jointinitiativecouncil.org/)
- [Global Digital Health Partnership (GDHP)](https://gdhp.health/)
- [WHO SMART Guidelines](https://smart.who.int/)
- [WHO Global Digital Health Certification Network](https://www.who.int/initiatives/global-digital-health-certification-network)

### Społeczność i wydarzenia

- [chat.fhir.org](https://chat.fhir.org/) to czat społeczności FHIR, który ma aktywny strumień poświęcony IPS.
- [HL7 FHIR Connectathons](https://www.hl7.org/events/fhir-connectathon/)
- [IHE Connectathons](https://www.ihe.net/participate/connectathon/)

### Filmy

- [HIMSS20: IPS for computable care guidelines in 200 seconds or less (IHE International, YouTube)](https://www.youtube.com/watch?v=xjEzGM8kBPw)
- [IHE International YouTube channel](https://www.youtube.com/@IHEIntl) zawiera panele z Connectathonów i sesje o IPS.
- [IPS project site news](https://international-patient-summary.net/) prowadzi do wielu nagranych webinariów, w tym:
  - panelu o IPS na IHE North America Connectathon, 2024
  - sesji o IPS na FHIR DevDays 2023
  - Grahame Grieve o IPS i IPA, IHE Connectathon Montreux 2022
  - wystąpienia programowego na SNOMED CT Expo 2022
  - Matthew Rahn o IPS w GDHP
  - webinarium HL7 „Global Passport” o zastosowaniach transgranicznych
- [YouTube search: International Patient Summary](https://www.youtube.com/results?search_query=international+patient+summary)

### Książki

- Tim Benson i Grahame Grieve, [*Principles of Health Interoperability: FHIR, HL7 and SNOMED CT*](https://link.springer.com/book/10.1007/978-3-030-56883-2), wyd. 4, Springer, 2020. Obejmuje FHIR, zasoby podsumowań klinicznych i terminologię.

### Prace badawcze i artykuły

- Laleci Erturkmen G. B., Sinaci A. A., Namli T., Boonstra M., et al., "[An assessment of the European Patient Summary for clinical research: a case study in cardiology](https://doi.org/10.3389/fmed.2024.1481551)", *Frontiers in Medicine*, 2024.
- Lee H., Huang J., Huang S., Chen W., et al., "[Implementing a Cross-Border Next-Generation Personal Health Record in the Philippines and Taiwan: An Implementation Case Report Using Health Level 7 International Fast Healthcare Interoperability Resources](https://doi.org/10.2196/56272)", *JMIR Formative Research*, 2025.
- Song C., Nakayama M., "[Implementation of a Patient Summary Web Application According to the International Patient Summary and Validation in Common Use Cases in Japan](https://doi.org/10.1007/s10916-023-01993-6)", *Journal of Medical Systems*, 2023.
- Schippers D., Spil T., Stegwee R., Folmer E., Donnelly S., "[The adoption and diffusion of the International Patient Summary](https://doi.org/10.24251/hicss.2025.425)", *Proceedings of the 58th Hawaii International Conference on System Sciences (HICSS)*, 2025.
- da Silva Carvalho N., Papadimitriou A., Stegwee R., Gille H., et al., "[Accelerating European electronic health record exchange format (EEHRxF) implementation across Europe: a policy perspective](https://doi.org/10.3389/fmed.2025.1648170)", *Frontiers in Medicine*, 2025.
- Kay S., Cangioli G., Nusbaum M., "[The International Patient Summary and the extensibility requirement](https://international-patient-summary.net/the-international-patient-summary-and-the-extensibility-requirement/)", *Studies in Health Technology and Informatics* (pHealth), 2020.
- D'Amore J., Cangioli G., Hausam R., "[Advancing the International Patient Summary](https://international-patient-summary.net/advancing-the-international-patient-summary/)"
- "[Towards the Austrian Patient Summary](https://international-patient-summary.net/towards-the-austrian-patient-summary/)", *Studies in Health Technology and Informatics* (dHealth).
- "[Revival of the International Patient Summary (IPS)](https://smiledigitalhealth.com/our-blog/revival-of-the-international-patient-summary-ips)", Smile Digital Health blog.
- [PubMed search: "international patient summary"](https://pubmed.ncbi.nlm.nih.gov/?term=%22international+patient+summary%22) do recenzowanej literatury.


## References

Ponumerowane przypisy w tekście, takie jak [1], prowadzą do odpowiedniego wpisu poniżej. Linki sprawdzono w listopadzie 2026 r. Przepisy, dane o wdrożeniach i wersje się zmieniają, więc aktualny stan sprawdzaj w źródle.

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

Te źródła nie są cytowane powyżej, ale są podstawowymi odniesieniami dla samego standardu.

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
