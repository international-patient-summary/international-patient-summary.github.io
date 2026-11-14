# Résumé patient international (IPS)

Le **Résumé patient international (International Patient Summary, IPS)** est une norme mondiale pour un court extrait du dossier de santé électronique. Il contient les faits cliniques de base dont un clinicien a besoin pour soigner un patient en toute sécurité. Il est conçu pour être :

- **Minimal et non exhaustif.** C'est un petit sous-ensemble sélectionné d'un dossier de santé, et non le dossier complet.
- **Indépendant de la spécialité.** Tout clinicien peut l'utiliser, dans n'importe quelle discipline.
- **Indépendant de la pathologie.** Il n'est lié ni à une maladie particulière ni à un parcours de soins précis.
- **Mettable en œuvre et international.** Il repose sur des normes et des terminologies mondiales, et peut donc être utilisé entre pays, langues et systèmes informatiques.

En bref, l'IPS répond à une seule question pour un clinicien qui n'a jamais rencontré le patient : *« Que dois-je savoir maintenant pour prendre soin de cette personne en toute sécurité ? »*


## Pourquoi l'IPS existe

Les informations de santé sont généralement enfermées dans un dossier de santé électronique (DSE) local, un système national ou le produit d'un éditeur. Lorsqu'un patient se fait soigner ailleurs, par exemple dans un autre hôpital, une autre région ou un autre pays, le clinicien qui le prend en charge n'a souvent aucun accès à cet historique. L'IPS offre à tous un format de résumé unique, partagé et portable.

### Principaux cas d'usage

| Cas d'usage | Description |
|---|---|
| **Soins non programmés et urgences** | Un patient tombe malade ou se blesse loin de chez lui, et les cliniciens locaux ne peuvent pas accéder à son DSE d'origine. C'est le cas d'usage d'origine et principal. |
| **Soins transfrontaliers** | Voyageurs, migrants, travailleurs transfrontaliers et réfugiés portent un résumé que les cliniciens à l'étranger peuvent lire. |
| **Soins programmés et transitions** | Orientations, consultations de spécialistes, admissions, sorties et transmissions entre prestataires. |
| **Tourisme médical et mobilité** | Patients qui choisissent de se faire soigner dans une autre juridiction. |
| **Autonomisation du patient** | Les patients conservent, consultent et partagent leur propre résumé depuis une application mobile, un portail ou une copie imprimée. |


## Quand utiliser l'IPS

Utilisez l'IPS lorsqu'une personne qui ne connaît pas le patient a besoin rapidement d'un instantané fiable, et lorsque l'émetteur et le destinataire ne partagent pas de système informatique.

### Bons cas d'usage

- **Soins d'urgence et non planifiés**, en particulier loin de chez soi ou au-delà d'une frontière. C'est l'usage pour lequel l'IPS a été conçu.
- **Échange transfrontalier entre systèmes nationaux**, tel que le service MyHealth@EU de l'UE [[1]](#ref-1) [[2]](#ref-2).
- **Résumés détenus par le patient**, que voyageurs, migrants, réfugiés, pèlerins ou personnes atteintes d'affections complexes portent sur un téléphone ou sur papier [[3]](#ref-3).
- **Un résumé patient national ou régional.** De nombreux pays construisent leur propre résumé comme un profil de l'IPS, afin qu'il puisse aussi être échangé à l'international [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
- **Une base commune pour les transitions de soins**, comme les orientations, admissions et sorties, lorsqu'aucun document spécialisé plus riche n'est disponible.
- **Un point de départ pour d'autres jeux de données**, comme les certificats de vaccination, les données de recherche ou les registres qui ont besoin des mêmes faits essentiels [[7]](#ref-7) [[8]](#ref-8).

### Mauvais cas d'usage

- **Le dossier médical complet.** L'IPS est délibérément minimal. Utilisez une exportation complète du dossier ou un document spécialisé lorsque le détail compte.
- **Documents propres à une spécialité**, comme un résumé de traitement en oncologie, un carnet de maternité ou un compte rendu d'hospitalisation détaillé. Ceux-ci ont leurs propres normes, qui peuvent inclure ou référencer le contenu de l'IPS.
- **Flux de travail cliniques en temps réel au sein d'une seule organisation.** Au sein d'un seul DSE, interrogez les données en direct plutôt qu'un instantané de résumé.
- **Dossiers juridiques, de facturation ou d'assurance.** L'IPS est un résumé clinique, et non un dossier administratif ou de remboursement.
- **Décisions exigeant une exhaustivité garantie.** Un IPS n'est complet et à jour que dans la mesure où le sont sa source et son auteur. Confirmez toujours les faits critiques avec le patient lorsque c'est possible.


## Ce que contient un IPS

Un document IPS comporte deux couches :

1. **Un en-tête qui consigne qui, quoi et quand :**
   - **Patient :** identité, données démographiques et contacts.
   - **Auteur :** la personne, l'organisation ou le système qui a produit le résumé.
   - **Dépositaire (custodian) :** l'organisation chargée de le maintenir.
   - **Attestant (attester) :** la personne qui l'a vérifié, le cas échéant.
   - **Date et heure :** moment de sa création.

2. **Un corps clinique organisé en sections.** Les sections sont obligatoires, recommandées ou facultatives.

| Section | Statut | Contenu type |
|---|---|---|
| **Résumé des médicaments** | Obligatoire | Médicaments actuels et passés pertinents, ordonnances, posologie |
| **Allergies et intolérances** | Obligatoire | Allergies médicamenteuses, alimentaires et environnementales ; réactions et gravité |
| **Liste des problèmes** | Obligatoire | Diagnostics actifs, affections et problèmes cliniques |
| Vaccinations | Recommandée | Vaccins administrés, tels que tétanos, hépatite B, grippe, COVID-19 |
| Antécédents d'actes | Recommandée | Chirurgies majeures et interventions invasives |
| Dispositifs médicaux | Recommandée | Implants et dispositifs, tels que stimulateurs cardiaques, endoprothèses (stents), prothèses |
| Résultats diagnostiques | Recommandée | Principaux résultats de laboratoire, comptes rendus d'imagerie, anatomopathologie |
| Signes vitaux | Facultative | Pression artérielle, fréquence cardiaque, poids, taille, IMC |
| Antécédents de maladies passées | Facultative | Affections résolues et problèmes passés importants |
| Statut fonctionnel | Facultative | Handicaps et capacité à accomplir les activités quotidiennes |
| Plan de soins | Facultative | Plans de soins et recommandations de traitement |
| Antécédents sociaux | Facultative | Tabac, alcool et autres facteurs de mode de vie pertinents |
| Antécédents de grossesse | Facultative | Statut de grossesse actuel et antécédents de grossesse |
| Directives anticipées | Facultative | Testaments de vie, préférences de réanimation, déclarations de consentement |
| Alertes | Facultative | Avertissements critiques pour la sécurité qui ne s'insèrent nulle part ailleurs (ajoutée dans FHIR IPS STU 2) |
| Histoire du patient | Facultative | Ce qui compte pour le patient : besoins, forces, valeurs, préoccupations et préférences, dans ses propres termes (ajoutée dans FHIR IPS STU 2) |

**Dire explicitement « rien » est important.** Une section vide ne dit pas à un clinicien si le patient n'a pas d'allergies ou si personne ne les a consignées. L'IPS attend donc des déclarations explicites telles que *« aucune allergie connue »*, *« aucun médicament actuel »* ou *« information non disponible »*.


## Les normes derrière l'IPS

L'IPS est une famille de normes coordonnées. Les normes ISO et CEN définissent *ce que* doit contenir un résumé patient. Les guides d'implémentation HL7 définissent *comment* l'encoder.

| Norme | Organisme | Rôle |
|---|---|---|
| **EN 17269** | CEN (Comité européen de normalisation) | Le jeu de données IPS abstrait, publié en 2019 |
| **ISO 27269** | ISO (Organisation internationale de normalisation) | La version internationale du jeu de données IPS abstrait, publiée en 2021 |
| **CEN/TS 17288** | CEN | Orientations pour la mise en œuvre de l'IPS en usage transfrontalier |
| **Guide d'implémentation HL7 FHIR IPS** | HL7 International | L'encodage moderne, adapté aux API, et le principal format d'implémentation. STU 2 (2.0.x) a ajouté les sections Alertes et Histoire du patient, autorisé les sections vides, clarifié `$summary` et adopté la terminologie SNOMED CT IPS [[9]](#ref-9). |
| **Guide d'implémentation HL7 CDA IPS** | HL7 International | L'encodage XML fondé sur les documents, courant dans les infrastructures nationales et européennes existantes |

Le travail est coordonné par le **Joint Initiative Council for Global Health Informatics Standardization (JIC)**. Le JIC réunit ISO, CEN, HL7, SNOMED International, IHE et d'autres. L'IPS est né d'une collaboration UE–États-Unis en 2016 sur les données de santé transfrontalières et est désormais soutenu par des gouvernements et des programmes de santé numérique dans le monde entier.


## Comment l'IPS est encodé avec HL7 FHIR

Dans FHIR, un IPS est un unique **`Bundle`** de type `document` :

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

Points techniques clés :

- **Chaque section comporte un récit lisible par l'humain.** Un clinicien peut lire l'IPS dans un navigateur ordinaire, même sans logiciel FHIR.
- **Chaque section comporte aussi des entrées codées**, c'est-à-dire des ressources FHIR structurées que les logiciels peuvent traiter, traduire et rapprocher.
- **Les profils contraignent les ressources FHIR de base.** Par exemple, *Patient (IPS)* et *AllergyIntolerance (IPS)* définissent les données minimales et les éléments « must support ».
- **L'opération `$summary`** (`GET [base]/Patient/[id]/$summary`) demande à un serveur FHIR de générer un IPS pour un patient à la demande.
- **L'IPS est signable et autonome.** Un document complet peut être stocké, envoyé, signé et vérifié comme une seule unité.


## Terminologies

Des systèmes de codes partagés rendent un IPS lisible entre les langues et les pays :

| Terminologie | Utilisée pour |
|---|---|
| **SNOMED CT** | Problèmes, allergies, actes, dispositifs, constatations cliniques. Un sous-ensemble gratuit, la **terminologie SNOMED CT IPS**, est disponible pour l'IPS, même dans les pays non membres. |
| **LOINC** | Types de documents et de sections, examens de laboratoire, signes vitaux |
| **ATC** et autres systèmes de codes de médicaments | Produits médicinaux et substances actives |
| **UCUM** | Unités de mesure |
| **Jeux de valeurs ISO et HL7** | Pays, langues, genres administratifs, raisons d'absence et d'inconnu |

Comme les entrées sont codées, un système récepteur peut afficher un IPS rédigé en portugais avec des libellés anglais. Le sens codé reste le même.


## Comment patients et cliniciens utilisent un IPS

Un IPS peut être produit par un DSE, un service national de dossier de santé, un portail patient ou une application de santé personnelle. Il peut ensuite être transmis de plusieurs façons :

- **De système à système :** via des API REST FHIR, des infrastructures nationales ou des passerelles transfrontalières comme le réseau MyHealth@EU de l'UE.
- **Partage médié par le patient :** le patient conserve le résumé dans un portefeuille ou une application de santé et le partage à la demande.
- **SMART Health Links :** un code QR ou une URL qui donne à un clinicien un accès limité dans le temps, éventuellement protégé par un code, à un IPS chiffré. Le clinicien peut l'ouvrir dans un navigateur web ordinaire.
- **Papier ou PDF :** un rendu narratif imprimé comme solution de repli lorsque rien d'autre ne fonctionne.

Des applications comme **CommonHealth** permettent aux patients de rassembler leurs dossiers et de partager un IPS via des SMART Health Links.

Un scénario d'urgence typique :

1. Un voyageur s'effondre à l'étranger.
2. Le voyageur, ou un accompagnant, montre un code QR depuis un téléphone.
3. Le médecin urgentiste le scanne et voit en quelques secondes les médicaments, les allergies et les problèmes actifs du voyageur.
4. Le médecin évite une interaction médicamenteuse dangereuse et soigne le patient en toute sécurité.


## Principes et choix de conception

- **La sécurité d'abord.** Le contenu est choisi pour sa pertinence clinique, non pour son exhaustivité.
- **Mondial par défaut, local par extension.** Les pays créent des profils nationaux, tels que des variantes européenne, australienne ou canadienne, qui ajoutent des exigences sans casser le noyau international.
- **Lisible par l'humain et traitable par la machine.** Le récit et les données codées coexistent.
- **Gratuit et ouvert.** Les spécifications HL7 IPS et le sous-ensemble IPS de SNOMED CT sont disponibles gratuitement afin d'abaisser les obstacles à l'adoption.
- **Vie privée et consentement.** L'accès est régi par la loi locale et le consentement du patient. Des mécanismes tels que les SMART Health Links laissent le contrôle au patient.


## Comment utiliser l'IPS

### Pour les patients

1. **Demandez-en un.** Demandez à votre cabinet, hôpital, portail national de santé ou application de santé s'il peut produire un IPS ou un résumé patient national qui s'en inspire.
2. **Vérifiez-le.** Lisez-le tant que vous êtes en bonne santé. Signalez tout ce qui est erroné ou manquant, en particulier les allergies et les médicaments.
3. **Gardez-le avec vous.** Conservez-le dans une application de santé ou un portefeuille, sous forme de code QR de SMART Health Link, ou sous forme imprimée parmi vos documents de voyage.
4. **Tenez-le à jour.** Obtenez-en un nouveau après un nouveau diagnostic, un nouveau traitement de longue durée, une chirurgie ou un implant.
5. **Partagez-le à bon escient.** Montrez-le au clinicien qui vous soigne. Un SMART Health Link peut expirer et exiger un code, de sorte que vous contrôlez qui le voit et pendant combien de temps [[10]](#ref-10).

### Pour les cliniciens

1. **Vérifiez d'abord l'en-tête.** Qui l'a rédigé, quand, et si quelqu'un l'a vérifié. Un résumé ancien ou non vérifié exige plus de prudence.
2. **Lisez d'abord les sections obligatoires :** allergies, médicaments et problèmes.
3. **Distinguez « aucun connu » de « non consigné ».** « Aucune allergie connue » est une déclaration clinique. Une section vide ou « inconnu » n'en est pas une.
4. **Confirmez les faits critiques** avec le patient ou son accompagnant chaque fois que vous le pouvez.
5. **Utilisez les données codées.** Lorsque votre système le permet, les entrées codées permettent d'afficher le résumé dans votre langue et de le confronter aux règles d'interactions médicamenteuses et d'allergies.
6. **Ne présumez pas l'exhaustivité.** L'IPS est un filet de sécurité, non un historique complet.

### Pour les implémenteurs

1. **Choisissez la spécification.** Utilisez le guide d'implémentation HL7 FHIR IPS en vigueur (STU 2), ou le profil national de votre pays qui en découle. Pour les infrastructures fondées sur CDA, utilisez le guide CDA IPS [[9]](#ref-9) [[11]](#ref-11).
2. **Faites correspondre vos données.** Mappez les données locales aux profils IPS : `Patient`, `AllergyIntolerance`, `MedicationStatement`, `Condition`, etc. L'essentiel du travail se trouve dans ce mapping.
3. **Faites correspondre votre terminologie.** Mappez les codes locaux vers SNOMED CT, LOINC et les systèmes de codes de médicaments. La terminologie SNOMED CT IPS est gratuite pour cet usage [[12]](#ref-12).
4. **Générez le document.** Prenez en charge l'opération `$summary`, ou construisez vous-même le `Bundle` et la `Composition`. Incluez un récit lisible pour chaque section, ainsi que des déclarations explicites « aucun connu » ou « non disponible ».
5. **Validez-le.** Vérifiez chaque document généré avec le validateur FHIR et un kit de tests de conformité, tel que l'Inferno IPS Test Kit [[13]](#ref-13).
6. **Signez et partagez-le.** Décidez comment les documents sont signés, stockés et envoyés : une API, un registre de documents, une passerelle transfrontalière ou un SMART Health Link.
7. **Consommez-le en toute sécurité.** En tant que destinataire, affichez le récit même lorsque vous ne pouvez pas traiter toutes les entrées codées, gardez la source et l'auteur visibles, et ne fusionnez jamais silencieusement les données reçues dans le dossier local.
8. **Testez avec d'autres.** Assurez l'interopérabilité avec d'autres éditeurs et pays lors des Connectathons IHE et HL7 avant la mise en production.

### Pour les gouvernements et les organisations de santé

1. **Adoptez un profil national** qui s'appuie sur l'IPS plutôt qu'un format distinct, afin que le résumé national soit international par défaut [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
2. **Réglez la gouvernance :** qui peut créer, mettre à jour et attester un résumé, et qui répond de son exactitude.
3. **Réglez la licence de terminologie :** adhésion à SNOMED CT, ou utilisation du sous-ensemble IPS gratuit.
4. **Réglez l'identité, le consentement et la confiance :** comment les patients sont identifiés, comment le consentement est consigné, et quel cadre de confiance, tel que MyHealth@EU ou le Réseau mondial de certification de santé numérique de l'OMS, est utilisé pour vérifier les documents [[1]](#ref-1) [[14]](#ref-14).
5. **Publiez ce que vous avez construit** dans le registre d'implémentation de l'IPS, afin que d'autres puissent en tirer des enseignements [[15]](#ref-15).


## Intégrer l'IPS aux systèmes de santé

Un IPS est rarement un système distinct. C'est une vue de données qui résident déjà dans les DSE, les échanges d'informations de santé, les dossiers nationaux et les applications de santé personnelles.

| Schéma d'intégration | Fonctionnement | Exemples |
|---|---|---|
| **Généré par le DSE** | Le DSE construit un IPS à partir de ses propres données à la demande, souvent via l'opération FHIR `$summary`. | Éditeurs de DSE et serveurs FHIR tels que HAPI FHIR, qui dispose d'un module générateur d'IPS |
| **Dossier national ou régional** | Un service national de résumé patient stocke un profil de l'IPS et le met à la disposition des prestataires autorisés. | PS-CA du Canada, AU Patient Summary d'Australie, dossier électronique du patient de la Suisse avec CH IPS [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6) |
| **Passerelle transfrontalière** | Chaque pays exploite un point de contact national. Il convertit le résumé du pays d'origine dans le format d'échange convenu, l'envoie au-delà de la frontière, et le pays destinataire l'affiche dans la langue locale. | Points de contact nationaux pour la santé en ligne de MyHealth@EU [[1]](#ref-1) [[2]](#ref-2) |
| **Réseau d'échange régional** | Les ministères de la santé échangent des documents IPS via des serveurs FHIR nationaux selon un guide régional partagé. | IPS-LAC de RACSEL et Autoroute panaméricaine de la santé numérique (PH4H) en Amérique latine et aux Caraïbes [[16]](#ref-16) |
| **Médié par le patient** | Le patient conserve l'IPS dans une application ou un portefeuille et le partage avec un code QR ou un SMART Health Link. | CommonHealth ; le travail IPS du réseau de confiance de l'OMS pour le pèlerinage [[10]](#ref-10) [[14]](#ref-14) |
| **Accès par API** | Les applications récupèrent un IPS pour un patient autorisé via une API FHIR. | Accès international du patient (IPA) ; réseaux américains tels que Flexpa, qui a ajouté la prise en charge de l'IPS dans le cadre d'interopérabilité du CMS [[17]](#ref-17) [[18]](#ref-18) |

Points d'intégration à prévoir :

- **Partage de documents :** les profils IHE tels que MHD (FHIR) et XDS (registres de documents) stockent et retrouvent les documents IPS. Les profils de contenu IHE IPS ajoutent des règles de conformité et de test [[11]](#ref-11).
- **Identité du patient :** IHE PIXm et PDQm, ou un identifiant national, permettent d'apparier le patient entre systèmes.
- **Documents existants :** de nombreux systèmes produisent déjà du CDA, du C-CDA ou des résumés nationaux. Les mapper vers l'IPS est généralement plus facile que de repartir de zéro, mais vérifiez les différences de cardinalité, de jeux de valeurs et de systèmes de codes.
- **Profils nationaux :** un noyau national, tel que US Core, AU Core, CH Core ou JP Core, peut différer de l'IPS. Les profils nationaux de résumé patient concilient les deux [[5]](#ref-5) [[6]](#ref-6) [[19]](#ref-19).
- **Traduction et affichage :** les destinataires doivent afficher le récit et traduire les entrées codées à l'aide des libellés d'affichage des codes dans la langue du destinataire.
- **Sécurité :** utilisez TLS, des documents signés lorsque c'est exigé, la journalisation d'audit (par exemple IHE ATNA ou BALP) et un contrôle d'accès lié au consentement.


## Adoption actuelle

L'IPS est passé des projets pilotes à des programmes nationaux et régionaux. La situation évolue rapidement ; consultez donc les sources liées pour connaître l'état le plus récent.

- **Registre d'implémentation de l'IPS.** La communauté IPS tient un registre public des implémentations. À la mi-2026, il comptait 34 entrées, du projet IPS-LAC médié par les prestataires en Argentine au Better Health Program du Vietnam [[15]](#ref-15).
- **Écosystème FHIR.** Dans l'enquête State of FHIR 2025 de HL7 International et Firely, 42 répondants ont déclaré que l'IPS sous-tend leurs spécifications FHIR nationales, plus que tout autre guide international [[20]](#ref-20).
- **Recherche.** Une étude de 2025 sur l'adoption de l'IPS a interrogé des parties prenantes, qui ont cité l'amélioration de la qualité des soins et de la sécurité des patients comme principaux bénéfices [[21]](#ref-21).

| Pays ou région | Statut |
|---|---|
| **Union européenne et EEE** | MyHealth@EU échange des résumés patients et des ordonnances électroniques entre pays. Une présentation de la Commission européenne de 2026 faisait état de 17 États membres et de la Norvège en service, la plupart des autres prévoyant de les rejoindre [[2]](#ref-2) [[22]](#ref-22). Le règlement EHDS rend l'échange de résumés patients obligatoire d'ici 2029 [[23]](#ref-23). |
| **Canada** | Le Résumé patient pancanadien (PS-CA), approuvé par Inforoute Santé du Canada (Canada Health Infoway) en octobre 2022, repose sur l'IPS avec des adaptations canadiennes [[4]](#ref-4). |
| **Australie** | L'AU Patient Summary, fondé sur l'IPS et AU Core, est développé par HL7 Australia dans le cadre du programme Sparked [[5]](#ref-5) [[24]](#ref-24). |
| **Suisse** | CH IPS 2.0.0 (usage à titre d'essai) de HL7 Switzerland s'appuie sur l'IPS et CH Core. Un profil distinct ajoute ce dont a besoin le dossier électronique du patient suisse [[6]](#ref-6). |
| **États-Unis** | Pas de mandat fédéral pour l'IPS. Les États-Unis utilisent US Core et USCDI. Les agences fédérales participent aux travaux internationaux sur l'IPS, et certains réseaux le prennent en charge volontairement [[18]](#ref-18). |
| **Amérique latine et Caraïbes** | Les ministères de la santé de RACSEL utilisent le guide régional IPS-LAC. En 2023, 16 pays ont échangé des documents IPS-LAC lors d'un connectathon à São Paulo [[16]](#ref-16). |
| **Japon** | Des chercheurs ont construit et validé une application de résumé patient fondée sur l'IPS pour des cas d'usage japonais courants, en utilisant JP Core [[19]](#ref-19). |
| **Taïwan et Philippines** | Un rapport d'implémentation de 2025 décrit un dossier de santé personnel transfrontalier utilisant FHIR et aligné sur l'IPS [[25]](#ref-25). |
| **G7** | En 2021, les ministres de la santé du G7 se sont engagés à œuvrer en faveur de l'IPS et ont publié une feuille de route IPS [[26]](#ref-26). |
| **OMS** | Le Réseau mondial de certification de santé numérique de l'OMS comprend des domaines de confiance fondés sur l'IPS, tels qu'un IPS vérifiable pour le pèlerinage [[14]](#ref-14). |


## Lois, réglementations et politiques par pays et région

L'IPS est une norme, non une loi. Ce sont les lois qui décident si un pays doit échanger des résumés patients, dans quel format et sous quelles règles de confidentialité. Ceci est un résumé, non un avis juridique. Vérifiez toujours le texte actuel de la loi.

| Juridiction | Loi ou politique | Ce que cela signifie pour l'IPS |
|---|---|---|
| **Union européenne** | **Règlement sur l'espace européen des données de santé (EHDS), (UE) 2025/327.** Publié le 5 mars 2025 ; en vigueur le 26 mars 2025 [[23]](#ref-23) [[27]](#ref-27). | Les résumés patients sont une « catégorie prioritaire ». L'échange dans le format européen d'échange des dossiers de santé électroniques doit fonctionner dans chaque État membre d'ici 2029. Les images médicales, les résultats d'examens et les comptes rendus de sortie suivent d'ici 2031 [[28]](#ref-28). Le format des résumés patients est fondé sur HL7 IPS. |
| **Union européenne** | **Directive 2011/24/UE** relative à l'application des droits des patients en matière de soins de santé transfrontaliers [[29]](#ref-29). | A créé le réseau « santé en ligne » (eHealth Network), qui a convenu des lignes directrices sur le résumé patient à l'origine de MyHealth@EU. |
| **Union européenne** | **Règlement général sur la protection des données (RGPD), (UE) 2016/679** [[30]](#ref-30). | Les données de santé constituent une catégorie particulière. Chaque échange d'IPS nécessite une base juridique et des garanties appropriées. |
| **États-Unis** | **21st Century Cures Act et règles sur le blocage d'information** [[31]](#ref-31) ; **cadre d'interopérabilité du CMS** volontaire (2025) [[17]](#ref-17). | Aucune loi n'exige l'IPS. Les lois exigent l'accès aux informations de santé électroniques et leur échange, en utilisant US Core et USCDI. La prise en charge de l'IPS est volontaire. |
| **Canada** | Lois provinciales et territoriales sur l'information sur la santé. La **Loi sur les soins connectés pour les Canadiens** (Connected Care for Canadians Act, projet de loi C-72) fédérale a été déposée en 2024 mais n'a pas été adoptée avant la prorogation du Parlement en 2025. | PS-CA est une spécification pancanadienne, non une exigence légale. L'adoption est menée par les provinces et territoires avec Inforoute Santé du Canada [[4]](#ref-4). |
| **Royaume-Uni** | **Data (Use and Access) Act 2025** [[32]](#ref-32). | Comprend des pouvoirs pour fixer des normes d'information pour l'informatique de la santé et des soins sociaux aux adultes. Le Royaume-Uni a accueilli l'engagement du G7 sur l'IPS en 2021 [[26]](#ref-26). |
| **Australie** | **My Health Records Act 2012** et les modifications 2025 sur le « partage par défaut ». | L'AU Patient Summary est une spécification nationale développée via Sparked [[5]](#ref-5) [[24]](#ref-24). |
| **Suisse** | **Loi fédérale du 19 juin 2015 sur le dossier électronique du patient (LDEP, RS 816.1)**, en vigueur depuis le 15 avril 2017 [[33]](#ref-33). | CH IPS comprend un profil pour les documents du dossier électronique du patient suisse [[6]](#ref-6). |
| **Amérique latine et Caraïbes** | Accords régionaux via RACSEL et PH4H, avec le soutien de la Banque interaméricaine de développement à un cadre juridique régional [[16]](#ref-16). | IPS-LAC est le format régional convenu pour l'échange transfrontalier. |
| **G7** | **Communiqué des ministres de la santé**, Oxford, juin 2021, et **feuille de route IPS du G7**, décembre 2021 [[26]](#ref-26) [[34]](#ref-34). | Un engagement politique à œuvrer en faveur de l'IPS et de l'accès du patient, non une loi contraignante. |


## Avantages et inconvénients

| Avantages | Inconvénients |
|---|---|
| **Soins non programmés plus sûrs.** Les cliniciens voient allergies, médicaments et problèmes en quelques secondes. | **Aussi bon que sa source.** Des données sources périmées ou erronées donnent un résumé périmé ou erroné. |
| **Un seul format, dans le monde entier.** Une seule implémentation répond aux besoins nationaux et transfrontaliers. | **Variations nationales.** Les profils nationaux ajoutent des règles, de sorte qu'un « IPS valide » dans un pays peut nécessiter un travail pour être accepté dans un autre. |
| **Fondé sur des normes ouvertes et matures :** ISO, CEN, HL7 FHIR et CDA, SNOMED CT et LOINC. | **Charge terminologique.** Mapper les codes locaux vers SNOMED CT et LOINC est un travail ardu, et le SNOMED CT complet exige une licence au-delà du sous-ensemble IPS gratuit. |
| **Lisible et calculable.** Récit pour les humains, données codées pour les logiciels et la traduction. | **Le récit et les données codées peuvent diverger** si le générateur est négligent, et les destinataires peuvent se fier au mauvais. |
| **Autonomisation du patient.** Les patients peuvent détenir et partager leur propre résumé. | **Risque de confidentialité et de consentement.** Un résumé portable est sensible, et les lois et modèles de consentement diffèrent selon les pays. |
| **Spécifications gratuites** et terminologie IPS gratuite réduisent les coûts [[12]](#ref-12). | **Instabilité des versions.** STU 1, STU 1.1 et STU 2 coexistent, et le format EHDS renvoie à une version antérieure [[28]](#ref-28). |
| **Réutilisable** pour les certificats de vaccination, la recherche et les registres [[7]](#ref-7) [[8]](#ref-8). | **Délibérément minimal.** Ne remplace pas les dossiers complets ni les documents de spécialité, et les lacunes pour l'usage secondaire nécessitent des extensions [[7]](#ref-7). |
| **Fort soutien** des gouvernements, de l'UE, du G7, de l'OMS et des organismes de normalisation. | **Adoption inégale.** De nombreux pays et éditeurs en sont encore au stade pilote, et la sensibilisation des patients est faible. |


## Plans et orientations futures

- **UE, 2029 :** échange de résumés patients et d'ordonnances électroniques opérationnel dans tous les États membres de l'UE en vertu de l'EHDS [[23]](#ref-23) [[28]](#ref-28).
- **UE, 2031 :** les images médicales, les résultats de laboratoire et les comptes rendus de sortie rejoignent le format européen d'échange des dossiers de santé électroniques [[28]](#ref-28).
- **Extension de MyHealth@EU :** davantage de pays qui rejoignent le réseau, et de nouveaux services pour les résultats de laboratoire, les comptes rendus de sortie et les images médicales [[2]](#ref-2) [[22]](#ref-22).
- **Adoption de FHIR IPS STU 2 :** les implémenteurs passent aux sections Alertes et Histoire du patient, aux sections vides explicites et à la terminologie SNOMED CT IPS [[9]](#ref-9).
- **Australie :** publication de la version 1 de l'AU Patient Summary, prévue pour 2026 [[24]](#ref-24).
- **Projet de bonnes pratiques de l'IPS :** un effort communautaire pour documenter les enseignements tirés, dont les travaux débutent en 2026.
- **Réseau de confiance de l'OMS :** davantage de domaines de confiance fondés sur l'IPS pour des documents de santé vérifiables et portables [[14]](#ref-14).
- **SMART Health Links :** normalisés par HL7, pour un partage contrôlé par le patient [[10]](#ref-10).
- **Amérique latine et Caraïbes :** élargissement de l'échange IPS-LAC via PH4H [[16]](#ref-16).
- **Recherche et usage secondaire :** travaux visant à étendre les résumés patients à la recherche clinique et à l'IA, tout en gardant le noyau minimal [[7]](#ref-7).


## Glossaire

| Terme | Signification |
|---|---|
| **IPS** | Résumé patient international (International Patient Summary) |
| **FHIR** | Fast Healthcare Interoperability Resources, la norme moderne de HL7 fondée sur les API |
| **CDA** | Clinical Document Architecture, la norme de documents XML de HL7 |
| **IG** | Guide d'implémentation (Implementation Guide), un ensemble de profils et de règles pour appliquer une norme |
| **Profil** | Une version contrainte d'une ressource FHIR pour un usage précis |
| **SNOMED CT** | Systematized Nomenclature of Medicine – Clinical Terms |
| **LOINC** | Logical Observation Identifiers Names and Codes |
| **SMART Health Links** | Une norme pour partager des données de santé par un lien ou un code QR |
| **JIC** | Joint Initiative Council for Global Health Informatics Standardization |


## En savoir plus

- Guide d'implémentation HL7 FHIR IPS : <https://hl7.org/fhir/uv/ips/>
- Build continu de l'IPS : <https://build.fhir.org/ig/HL7/fhir-ips/>
- Site du projet Résumé patient international : <https://international-patient-summary.net/>
- ISO 27269 (Informatique de santé — Résumé patient international) : <https://www.iso.org/standard/79491.html>
- Terminologie SNOMED CT IPS : <https://www.snomed.org/international-patient-summary-terminology>
- SMART Health Links : <https://docs.smarthealthit.org/smart-health-links/>


## Ressources

Ces liens couvrent les sources, spécifications, logiciels, projets, vidéos, livres et travaux de recherche sur l'IPS. La plupart ont été vérifiés lors de la rédaction de cette page. Quelques sites d'éditeurs bloquent les vérifications automatiques ; ils sont signalés par *(non vérifié)*.

### Spécifications et normes officielles

- [Guide d'implémentation HL7 FHIR IPS, version publiée actuelle](https://hl7.org/fhir/uv/ips/) est la spécification FHIR de référence.
- [Guide d'implémentation HL7 FHIR IPS, STU 2](https://hl7.org/fhir/uv/ips/STU2/)
- [Guide d'implémentation HL7 FHIR IPS, STU 1.1](https://hl7.org/fhir/uv/ips/STU1.1/)
- [Historique des publications HL7 FHIR IPS](https://www.hl7.org/fhir/uv/ips/history.html) liste toutes les versions publiées.
- [Build continu HL7 FHIR IPS](https://build.fhir.org/ig/HL7/fhir-ips/) est le dernier travail en cours, non encore soumis au vote.
- [Structure du Résumé patient international](https://hl7.org/fhir/uv/ips/en/Structure-of-the-International-Patient-Summary.html) explique les sections et les profils.
- [Conventions de conception de l'IPS](https://build.fhir.org/ig/HL7/fhir-ips/en/Design-Conventions.html) couvre must-support, les données absentes et le récit.
- [Génération de l'IPS et inclusion des données](https://build.fhir.org/ig/HL7/fhir-ips/en/Generation-and-Data-Inclusion.html) couvre `$summary` et la façon de sélectionner le contenu.
- [Guide d'implémentation HL7 CDA IPS, build continu](https://build.fhir.org/ig/HL7/CDA-IPS/)
- [Fiche produit HL7 CDA IPS](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=483)
- [ISO 27269, Informatique de santé — Résumé patient international](https://www.iso.org/standard/79491.html) *(non vérifié)*
- [Comité ISO/TC 215 Informatique de santé](https://www.iso.org/committee/54960.html) *(non vérifié)*
- [Profil IHE FHIR Résumé patient international (FIIO)](https://profiles.ihe.net/PCC/FIIO/volume-1.html)
- [Supplément IHE PCC Résumé patient international, 2020 (PDF)](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS_Rev1-0_PC_2020-03-17.pdf)
- [Guide d'implémentation HL7 SMART Health Cards and Links](https://hl7.org/fhir/uv/smart-health-cards-and-links/)
- [Documentation SMART Health Links](https://docs.smarthealthit.org/smart-health-links/)
- [HL7 FHIR Accès international du patient (IPA)](https://hl7.org/fhir/uv/ipa/) est une spécification sœur pour l'accès du patient par API.
- [Spécification de base HL7 FHIR R4](https://hl7.org/fhir/R4/), sur laquelle repose l'IPS.

### Dépôts de sources

- [HL7/fhir-ips](https://github.com/HL7/fhir-ips) contient les sources du guide d'implémentation FHIR IPS en FHIR Shorthand.
- [HL7/cda-ips](https://github.com/HL7/cda-ips) contient les sources du guide d'implémentation CDA IPS.
- [hl7-eu/eps](https://github.com/hl7-eu/eps) contient les sources du Résumé patient de HL7 Europe.
- [hl7ch/ch-ips](https://github.com/hl7ch/ch-ips) contient l'IPS suisse, avec un visualiseur et un générateur en cours de développement.
- [Sujet GitHub : international-patient-summary](https://github.com/topics/international-patient-summary) liste les dépôts de la communauté.

### Adaptations nationales et régionales

- [Résumé patient de HL7 Europe (EPS), build continu](https://build.fhir.org/ig/hl7-eu/eps/)
- [AU Patient Summary (Australie), build continu](https://build.fhir.org/ig/hl7au/au-fhir-ps/)
- [Structure IPS de Trillium II (HL7 Europe)](https://hl7.eu/fhir/build/trillium2/site/ipsStructure.html) provient du projet UE–États-Unis qui a contribué à lancer l'IPS.
- [eHealth Suisse](https://www.ehealthsuisse.ch/) est le centre de compétence de la Suisse pour la santé numérique et l'adoption de son IPS.
- [MyHealth@EU, services de santé numérique transfrontaliers](https://health.ec.europa.eu/ehealth-digital-health-and-care/electronic-cross-border-health-services_en)
- [Action conjointe Xt-EHR](https://www.xt-ehr.eu/) prépare les formats de l'espace européen des données de santé, y compris le résumé patient.

### Logiciels et outils

- [IPS Viewer](https://www.ipsviewer.com) ([source : jddamore/IPSviewer](https://github.com/jddamore/IPSviewer)) est un visualiseur d'IPS open source fonctionnant dans le navigateur.
- [uwcirg/shl-ips-viewer](https://github.com/uwcirg/shl-ips-viewer) affiche un IPS partagé via un SMART Health Link.
- [smart-on-fhir/smart-health-links](https://github.com/smart-on-fhir/smart-health-links) est l'implémentation de référence des SMART Health Links.
- [Générateur d'IPS HAPI FHIR](https://hapifhir.io/hapi-fhir/docs/server_ips/introduction.html) ([source : hapifhir/hapi-fhir](https://github.com/hapifhir/hapi-fhir)) est un module serveur Java open source qui implémente `$summary`.
- [Documentation IPS du serveur HAPI FHIR JPA](https://hapifhir.io/hapi-fhir/docs/server_jpa/ips.html)
- [Inferno IPS Test Kit](https://inferno.healthit.gov/test-kits/ips) ([source : inferno-framework/ips-test-kit](https://github.com/inferno-framework/ips-test-kit)) est un kit de tests de conformité open source.
- [FHIR Validator](https://validator.fhir.org/) valide les bundles IPS par rapport aux profils du guide d'implémentation.
- [Simplifier : paquet hl7.fhir.uv.ips](https://simplifier.net/packages/hl7.fhir.uv.ips) contient le paquet, les profils et des exemples.
- [Registre de paquets FHIR](https://registry.fhir.org/)
- [FHIR Shorthand (FSH) School](https://fshschool.org/) enseigne le langage dans lequel le guide d'implémentation IPS est écrit.
- [CommonHealth](https://www.commonhealth.org/) est une application patient qui génère un IPS et le partage via des SMART Health Links.
- [WHO SMART Trust](https://github.com/WorldHealthOrganization/smart-trust) est le cadre de confiance du Réseau mondial de certification de santé numérique de l'OMS.

### Organisations et projets

- [Site du projet Résumé patient international](https://international-patient-summary.net/) propose actualités, rapports d'adoption et ressources pédagogiques.
- [IPS pour les développeurs de l'informatique de santé](https://international-patient-summary.net/health-it-developer/)
- [HL7 International](https://www.hl7.org/)
- [IHE International](https://www.ihe.net/)
- [SNOMED International](https://www.snomed.org/)
- [Terminologie SNOMED CT IPS](https://www.snomed.org/international-patient-summary-terminology) est un sous-ensemble gratuit destiné à l'usage de l'IPS.
- [LOINC](https://loinc.org/) *(non vérifié)*
- [Joint Initiative Council for Global Health Informatics Standardization (JIC)](http://www.jointinitiativecouncil.org/)
- [Partenariat mondial pour la santé numérique (GDHP)](https://gdhp.health/)
- [Lignes directrices WHO SMART](https://smart.who.int/)
- [Réseau mondial de certification de santé numérique de l'OMS](https://www.who.int/initiatives/global-digital-health-certification-network)

### Communauté et événements

- [chat.fhir.org](https://chat.fhir.org/) est le chat de la communauté FHIR, qui dispose d'un canal IPS actif.
- [Connectathons HL7 FHIR](https://www.hl7.org/events/fhir-connectathon/)
- [Connectathons IHE](https://www.ihe.net/participate/connectathon/)

### Vidéos

- [HIMSS20 : l'IPS pour des lignes directrices de soins calculables en 200 secondes ou moins (IHE International, YouTube)](https://www.youtube.com/watch?v=xjEzGM8kBPw)
- [Chaîne YouTube d'IHE International](https://www.youtube.com/@IHEIntl) propose des tables rondes de Connectathon et des sessions sur l'IPS.
- [Actualités du site du projet IPS](https://international-patient-summary.net/) renvoie vers de nombreux webinaires enregistrés, dont :
  - la table ronde IPS au IHE North America Connectathon, 2024
  - la session IPS à FHIR DevDays 2023
  - Grahame Grieve sur l'IPS et l'IPA, IHE Connectathon Montreux 2022
  - le discours principal de SNOMED CT Expo 2022
  - Matthew Rahn sur l'IPS au sein du GDHP
  - le webinaire transfrontalier HL7 « Global Passport »
- [Recherche YouTube : International Patient Summary](https://www.youtube.com/results?search_query=international+patient+summary)

### Livres

- Tim Benson et Grahame Grieve, [*Principles of Health Interoperability: FHIR, HL7 and SNOMED CT*](https://link.springer.com/book/10.1007/978-3-030-56883-2), 4e édition, Springer, 2020. Il traite de FHIR, des ressources de résumé clinique et de la terminologie.

### Articles de recherche et autres articles

- Laleci Erturkmen G. B., Sinaci A. A., Namli T., Boonstra M., et al., "[An assessment of the European Patient Summary for clinical research: a case study in cardiology](https://doi.org/10.3389/fmed.2024.1481551)", *Frontiers in Medicine*, 2024.
- Lee H., Huang J., Huang S., Chen W., et al., "[Implementing a Cross-Border Next-Generation Personal Health Record in the Philippines and Taiwan: An Implementation Case Report Using Health Level 7 International Fast Healthcare Interoperability Resources](https://doi.org/10.2196/56272)", *JMIR Formative Research*, 2025.
- Song C., Nakayama M., "[Implementation of a Patient Summary Web Application According to the International Patient Summary and Validation in Common Use Cases in Japan](https://doi.org/10.1007/s10916-023-01993-6)", *Journal of Medical Systems*, 2023.
- Schippers D., Spil T., Stegwee R., Folmer E., Donnelly S., "[The adoption and diffusion of the International Patient Summary](https://doi.org/10.24251/hicss.2025.425)", *Proceedings of the 58th Hawaii International Conference on System Sciences (HICSS)*, 2025.
- da Silva Carvalho N., Papadimitriou A., Stegwee R., Gille H., et al., "[Accelerating European electronic health record exchange format (EEHRxF) implementation across Europe: a policy perspective](https://doi.org/10.3389/fmed.2025.1648170)", *Frontiers in Medicine*, 2025.
- Kay S., Cangioli G., Nusbaum M., "[The International Patient Summary and the extensibility requirement](https://international-patient-summary.net/the-international-patient-summary-and-the-extensibility-requirement/)", *Studies in Health Technology and Informatics* (pHealth), 2020.
- D'Amore J., Cangioli G., Hausam R., "[Advancing the International Patient Summary](https://international-patient-summary.net/advancing-the-international-patient-summary/)"
- "[Towards the Austrian Patient Summary](https://international-patient-summary.net/towards-the-austrian-patient-summary/)", *Studies in Health Technology and Informatics* (dHealth).
- "[Revival of the International Patient Summary (IPS)](https://smiledigitalhealth.com/our-blog/revival-of-the-international-patient-summary-ips)", blog de Smile Digital Health.
- [Recherche PubMed : « international patient summary »](https://pubmed.ncbi.nlm.nih.gov/?term=%22international+patient+summary%22) pour la littérature évaluée par les pairs.


## Références

Les citations numérotées dans le texte, comme [1], renvoient à l'entrée correspondante ci-dessous. Les liens ont été vérifiés en novembre 2026. Les lois, les chiffres d'adoption et les versions évoluent ; consultez donc la source pour connaître la situation actuelle.

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

### Pour aller plus loin

Ces sources ne sont pas citées ci-dessus, mais constituent les références principales de la norme elle-même.

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
