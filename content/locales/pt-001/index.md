# Resumo Internacional do Paciente (IPS)

O **Resumo Internacional do Paciente (International Patient Summary, IPS)** é um padrão mundial para um breve extrato eletrónico do registo de saúde. Contém os factos clínicos básicos de que um profissional de saúde precisa para tratar um paciente em segurança. Foi concebido para ser:

- **Mínimo e não exaustivo.** É um subconjunto pequeno e criteriosamente selecionado de um registo de saúde, não o registo completo.
- **Agnóstico quanto à especialidade.** Qualquer profissional de saúde o pode usar, em qualquer disciplina.
- **Independente da doença.** Não está associado a uma doença ou a um percurso de cuidados em particular.
- **Implementável e internacional.** Assenta em padrões e terminologias globais, pelo que pode ser usado entre países, idiomas e sistemas informáticos.

Em suma, o IPS responde a uma pergunta de um profissional de saúde que nunca conheceu o paciente: *"O que preciso de saber agora para cuidar desta pessoa em segurança?"*


## Porque existe o IPS

A informação de saúde está normalmente fechada num registo de saúde eletrónico (EHR) local, num sistema nacional ou no produto de um fornecedor. Quando um paciente procura cuidados noutro lugar, como outro hospital, região ou país, o profissional que o trata muitas vezes não tem acesso a esse historial. O IPS dá a todos um formato de resumo único, partilhado e portátil.

### Principais casos de uso

| Caso de uso | Descrição |
|---|---|
| **Cuidados não programados e de emergência** | Um paciente adoece ou sofre uma lesão longe de casa, e os profissionais locais não conseguem aceder ao EHR do seu país de origem. Este é o caso de uso original e principal. |
| **Cuidados transfronteiriços** | Viajantes, migrantes, trabalhadores transfronteiriços e refugiados levam consigo um resumo que os profissionais no estrangeiro conseguem ler. |
| **Cuidados programados e transições** | Encaminhamentos, consultas de especialidade, internamentos, altas e passagens de turno entre prestadores. |
| **Turismo médico e mobilidade** | Pacientes que optam por receber cuidados noutra jurisdição. |
| **Capacitação do paciente** | Os pacientes guardam, consultam e partilham o seu próprio resumo a partir de uma aplicação no telemóvel, de um portal ou de uma cópia impressa. |


## Quando usar o IPS

Use o IPS quando alguém que não conhece o paciente precisa rapidamente de um retrato fiável, e quando quem envia e quem recebe não partilham um sistema informático.

### Boas aplicações

- **Cuidados de emergência e não programados**, sobretudo longe de casa ou além-fronteiras. É para esta utilização que o IPS foi concebido.
- **Troca transfronteiriça entre sistemas nacionais**, como o serviço MyHealth@EU da UE [[1]](#ref-1) [[2]](#ref-2).
- **Resumos mantidos pelo paciente**, que viajantes, migrantes, refugiados, peregrinos ou pessoas com doenças complexas levam no telemóvel ou em papel [[3]](#ref-3).
- **Um resumo de paciente nacional ou regional.** Muitos países constroem o seu próprio resumo como um perfil do IPS, para que também possa ser trocado internacionalmente [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
- **Uma base comum para transições de cuidados,** como encaminhamentos, internamentos e altas, quando não existe um documento especializado mais rico.
- **Um ponto de partida para outros conjuntos de dados,** como certificados de vacinação, dados de investigação ou registos que precisam dos mesmos factos essenciais [[7]](#ref-7) [[8]](#ref-8).

### Más aplicações

- **O registo médico completo.** O IPS é deliberadamente mínimo. Use uma exportação do registo completo ou um documento especializado quando o detalhe for importante.
- **Documentos específicos de uma especialidade,** como um resumo de tratamento oncológico, um registo de maternidade ou uma carta de alta detalhada. Estes têm os seus próprios padrões, que podem incluir ou referenciar conteúdo do IPS.
- **Fluxos de trabalho clínicos em tempo real dentro de uma organização.** Dentro de um único EHR, consulte os dados em direto em vez de um resumo instantâneo.
- **Registos legais, de faturação ou de seguros.** O IPS é um resumo clínico, não um registo administrativo nem de pedidos de reembolso.
- **Decisões que exigem completude garantida.** Um IPS é tão completo e atual quanto a sua fonte e o seu autor. Confirme sempre os factos críticos com o paciente, sempre que possível.


## O que contém um IPS

Um documento IPS tem duas camadas:

1. **Um cabeçalho que regista quem, o quê e quando:**
   - **Paciente:** identidade, dados demográficos e contactos.
   - **Autor:** a pessoa, organização ou sistema que produziu o resumo.
   - **Custodiante:** a organização responsável pela sua manutenção.
   - **Atestador:** quem o verificou, se alguém o fez.
   - **Data e hora:** quando foi criado.

2. **Um corpo clínico organizado em secções.** As secções são obrigatórias, recomendadas ou opcionais.

| Secção | Estado | Conteúdo típico |
|---|---|---|
| **Medication Summary** (Resumo da medicação) | Obrigatória | Medicamentos atuais e passados relevantes, prescrições, posologia |
| **Allergies and Intolerances** (Alergias e intolerâncias) | Obrigatória | Alergias a fármacos, alimentos e ao ambiente; reações e gravidade |
| **Problem List** (Lista de problemas) | Obrigatória | Diagnósticos ativos, doenças e problemas clínicos |
| Immunizations (Imunizações) | Recomendada | Vacinas administradas, como tétano, hepatite B, gripe, COVID-19 |
| History of Procedures (Historial de procedimentos) | Recomendada | Cirurgias importantes e intervenções invasivas |
| Medical Devices (Dispositivos médicos) | Recomendada | Implantes e dispositivos, como pacemakers, stents, próteses |
| Diagnostic Results (Resultados de diagnóstico) | Recomendada | Principais resultados laboratoriais, relatórios de imagiologia, patologia |
| Vital Signs (Sinais vitais) | Opcional | Tensão arterial, frequência cardíaca, peso, altura, IMC |
| History of Past Illness (Historial de doenças passadas) | Opcional | Doenças resolvidas e problemas passados significativos |
| Functional Status (Estado funcional) | Opcional | Incapacidades e capacidade de realizar atividades diárias |
| Plan of Care (Plano de cuidados) | Opcional | Planos de cuidados e recomendações de tratamento |
| Social History (Historial social) | Opcional | Tabaco, álcool e outros fatores de estilo de vida relevantes |
| History of Pregnancy (Historial de gravidez) | Opcional | Estado atual de gravidez e historial de gravidezes |
| Advance Directives (Diretivas antecipadas de vontade) | Opcional | Testamentos vitais, preferências de reanimação, declarações de consentimento |
| Alerts (Alertas) | Opcional | Avisos críticos para a segurança que não cabem noutro lugar (acrescentado no FHIR IPS STU 2) |
| Patient Story (História do paciente) | Opcional | O que importa ao paciente: necessidades, pontos fortes, valores, preocupações e preferências, nos termos do próprio paciente (acrescentado no FHIR IPS STU 2) |

**Dizer explicitamente "nada" é importante.** Uma secção vazia não diz ao profissional de saúde se o paciente não tem alergias ou se simplesmente ninguém as registou. O IPS espera, por isso, declarações explícitas como *"sem alergias conhecidas"*, *"sem medicação atual"* ou *"informação não disponível"*.


## Os padrões por trás do IPS

O IPS é uma família de padrões coordenados. Os padrões ISO e CEN definem *o que* um resumo de paciente deve conter. Os guias de implementação HL7 definem *como* o codificar.

| Padrão | Organismo | Função |
|---|---|---|
| **EN 17269** | CEN (Comité Europeu de Normalização) | O conjunto de dados abstrato do IPS, publicado em 2019 |
| **ISO 27269** | ISO (Organização Internacional de Normalização) | A versão internacional do conjunto de dados abstrato do IPS, publicada em 2021 |
| **CEN/TS 17288** | CEN | Orientações para implementar o IPS em uso transfronteiriço |
| **HL7 FHIR IPS Implementation Guide** | HL7 International | A codificação moderna, adequada a APIs, e o principal formato de implementação. O STU 2 (2.0.x) acrescentou as secções Alerts e Patient Story, permitiu secções vazias, esclareceu o `$summary` e passou para a terminologia SNOMED CT IPS [[9]](#ref-9). |
| **HL7 CDA IPS Implementation Guide** | HL7 International | A codificação em documentos XML, comum nas infraestruturas nacionais e europeias existentes |

O trabalho é coordenado pelo **Joint Initiative Council for Global Health Informatics Standardization (JIC)**. O JIC reúne a ISO, o CEN, a HL7, a SNOMED International, a IHE e outros. O IPS nasceu de uma colaboração UE–EUA de 2016 sobre dados de saúde transfronteiriços e é hoje apoiado por governos e programas de saúde digital em todo o mundo.


## Como o IPS é codificado com HL7 FHIR

No FHIR, um IPS é um único **`Bundle`** do tipo `document`:

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

Pontos técnicos principais:

- **Cada secção tem uma narrativa legível por pessoas.** Um profissional de saúde consegue ler o IPS num navegador comum, mesmo sem software FHIR.
- **Cada secção tem também entradas codificadas**, que são recursos FHIR estruturados que o software pode processar, traduzir e reconciliar.
- **Os perfis restringem os recursos FHIR de base.** Por exemplo, *Patient (IPS)* e *AllergyIntolerance (IPS)* definem os dados mínimos e os elementos "must support".
- **A operação `$summary`** (`GET [base]/Patient/[id]/$summary`) pede a um servidor FHIR que gere um IPS para um paciente a pedido.
- **O IPS é assinável e autocontido.** Um documento completo pode ser armazenado, enviado, assinado e verificado como uma só unidade.


## Terminologias

Sistemas de códigos partilhados tornam um IPS legível entre idiomas e países:

| Terminologia | Usada para |
|---|---|
| **SNOMED CT** | Problemas, alergias, procedimentos, dispositivos, achados clínicos. Um subconjunto gratuito, a **SNOMED CT IPS Terminology**, está disponível para uso no IPS, mesmo em países não membros. |
| **LOINC** | Tipos de documentos e secções, análises laboratoriais, sinais vitais |
| **ATC** e outros sistemas de códigos de medicamentos | Medicamentos e substâncias ativas |
| **UCUM** | Unidades de medida |
| **Conjuntos de valores ISO e HL7** | Países, idiomas, géneros administrativos, motivos de ausência e de desconhecimento |

Como as entradas são codificadas, um sistema recetor pode mostrar um IPS escrito em português com rótulos em inglês. O significado codificado mantém-se o mesmo.


## Como pacientes e profissionais de saúde usam um IPS

Um IPS pode ser produzido por um EHR, por um serviço nacional de registo de saúde, por um portal do paciente ou por uma aplicação de saúde pessoal. Pode depois ser entregue de várias formas:

- **De sistema para sistema:** através de APIs REST FHIR, infraestruturas nacionais ou gateways transfronteiriços, como a rede MyHealth@EU da UE.
- **Partilha mediada pelo paciente:** o paciente guarda o resumo numa carteira ou aplicação de saúde e partilha-o quando necessário.
- **SMART Health Links:** um código QR ou URL que dá ao profissional de saúde acesso limitado no tempo, opcionalmente protegido por código, a um IPS encriptado. O profissional pode abri-lo num navegador web comum.
- **Papel ou PDF:** uma versão narrativa impressa como alternativa quando mais nada funciona.

Aplicações como o **CommonHealth** permitem aos pacientes reunir os seus registos e partilhar um IPS através de SMART Health Links.

Um cenário de emergência típico:

1. Um viajante desmaia no estrangeiro.
2. O viajante, ou um acompanhante, mostra um código QR no telemóvel.
3. O médico de emergência digitaliza-o e vê, em segundos, a medicação, as alergias e os problemas ativos do viajante.
4. O médico evita uma interação medicamentosa perigosa e trata o paciente em segurança.


## Princípios e escolhas de conceção

- **A segurança em primeiro lugar.** O conteúdo é escolhido pela relevância clínica, não pela completude.
- **Global por defeito, local por extensão.** Os países criam perfis nacionais, como variantes da UE, da Austrália ou do Canadá, que acrescentam requisitos sem quebrar o núcleo internacional.
- **Legível por pessoas e processável por máquinas.** Narrativa e dados codificados coexistem.
- **Livre e aberto.** As especificações HL7 IPS e o subconjunto SNOMED CT do IPS estão disponíveis gratuitamente para reduzir as barreiras à adoção.
- **Privacidade e consentimento.** O acesso é regido pela lei local e pelo consentimento do paciente. Mecanismos como os SMART Health Links mantêm o paciente no controlo.


## Como usar o IPS

### Para pacientes

1. **Peça um.** Pergunte à sua clínica, hospital, portal nacional de saúde ou aplicação de saúde se consegue produzir um IPS ou um resumo de paciente nacional baseado nele.
2. **Verifique-o.** Leia-o enquanto está bem. Comunique tudo o que estiver errado ou em falta, sobretudo alergias e medicação.
3. **Leve-o consigo.** Guarde-o numa aplicação de saúde ou carteira, como código QR de SMART Health Link, ou como impressão junto dos seus documentos de viagem.
4. **Mantenha-o atualizado.** Obtenha um novo após um novo diagnóstico, uma nova medicação de longa duração, uma cirurgia ou um implante.
5. **Partilhe-o de propósito.** Mostre-o ao profissional de saúde que o trata. Um SMART Health Link pode expirar e exigir um código, pelo que controla quem o vê e por quanto tempo [[10]](#ref-10).

### Para profissionais de saúde

1. **Verifique primeiro o cabeçalho.** Quem o escreveu, quando, e se alguém o verificou. Um resumo antigo ou não verificado exige mais cautela.
2. **Leia primeiro as secções obrigatórias:** alergias, medicação e problemas.
3. **Trate "não se conhece" de forma diferente de "não registado".** "Sem alergias conhecidas" é uma declaração clínica. Uma secção vazia ou "desconhecido" não é.
4. **Confirme os factos críticos** com o paciente ou com o seu acompanhante sempre que puder.
5. **Use os dados codificados.** Quando o seu sistema o permitir, as entradas codificadas permitem mostrar o resumo na sua língua e verificá-lo face a regras de interações medicamentosas e de alergias.
6. **Não presuma completude.** O IPS é uma rede de segurança, não um historial completo.

### Para implementadores

1. **Escolha a especificação.** Use o HL7 FHIR IPS Implementation Guide atual (STU 2), ou o perfil nacional do seu país baseado nele. Para infraestruturas baseadas em CDA, use o guia CDA IPS [[9]](#ref-9) [[11]](#ref-11).
2. **Mapeie os seus dados.** Mapeie os dados locais para os perfis IPS: `Patient`, `AllergyIntolerance`, `MedicationStatement`, `Condition` e assim por diante. A maior parte do trabalho está neste mapeamento.
3. **Mapeie a sua terminologia.** Mapeie os códigos locais para SNOMED CT, LOINC e sistemas de códigos de medicamentos. A SNOMED CT IPS Terminology é de uso gratuito para este fim [[12]](#ref-12).
4. **Gere o documento.** Suporte a operação `$summary`, ou construa você mesmo o `Bundle` e a `Composition`. Inclua uma narrativa legível para cada secção e declarações explícitas de "não se conhece" ou "não disponível".
5. **Valide-o.** Verifique cada documento gerado com o FHIR Validator e um kit de testes de conformidade, como o Inferno IPS Test Kit [[13]](#ref-13).
6. **Assine-o e partilhe-o.** Decida como os documentos são assinados, armazenados e enviados: uma API, um registo de documentos, um gateway transfronteiriço ou um SMART Health Link.
7. **Consuma-o com segurança.** Como recetor, mostre a narrativa mesmo quando não consegue processar todas as entradas codificadas, mantenha visíveis a fonte e o autor, e nunca funda silenciosamente os dados recebidos no registo local.
8. **Teste com outros.** Garanta a interoperabilidade com outros fornecedores e países em Connectathons da IHE e da HL7 antes de entrar em produção.

### Para governos e organizações de saúde

1. **Adote um perfil nacional** que se construa sobre o IPS em vez de um formato separado, para que o resumo nacional seja internacional por defeito [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
2. **Defina a governação:** quem pode criar, atualizar e atestar um resumo, e quem responde pela sua exatidão.
3. **Defina o licenciamento da terminologia:** adesão à SNOMED CT ou uso do subconjunto gratuito do IPS.
4. **Defina identidade, consentimento e confiança:** como os pacientes são identificados, como o consentimento é registado e que quadro de confiança, como o MyHealth@EU ou a Global Digital Health Certification Network da OMS, é usado para verificar documentos [[1]](#ref-1) [[14]](#ref-14).
5. **Publique o que construiu** no IPS Implementation Registry, para que outros possam aprender com isso [[15]](#ref-15).


## Integrar o IPS com sistemas de saúde

Um IPS raramente é um sistema separado. É uma vista de dados que já existem em EHRs, em trocas de informação de saúde, em registos nacionais e em aplicações de saúde pessoais.

| Padrão de integração | Como funciona | Exemplos |
|---|---|---|
| **Gerado pelo EHR** | O EHR constrói um IPS a partir dos seus próprios dados a pedido, muitas vezes através da operação FHIR `$summary`. | Fornecedores de EHR e servidores FHIR como o HAPI FHIR, que tem um módulo gerador de IPS |
| **Registo nacional ou regional** | Um serviço nacional de resumo do paciente armazena um perfil do IPS e disponibiliza-o a prestadores autorizados. | O PS-CA do Canadá, o AU Patient Summary da Austrália, o registo eletrónico do paciente da Suíça com o CH IPS [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6) |
| **Gateway transfronteiriço** | Cada país opera um ponto de contacto nacional. Este converte o resumo do país de origem para o formato de troca acordado, envia-o através da fronteira, e o país recetor mostra-o na língua local. | Pontos de Contacto Nacionais para a Saúde em Linha do MyHealth@EU [[1]](#ref-1) [[2]](#ref-2) |
| **Rede regional de troca** | Os ministérios da saúde trocam documentos IPS através de servidores FHIR nacionais, sob um guia regional partilhado. | O IPS-LAC da RACSEL e a Pan American Highway for Digital Health (PH4H) na América Latina e Caraíbas [[16]](#ref-16) |
| **Mediado pelo paciente** | O paciente guarda o IPS numa aplicação ou carteira e partilha-o com um código QR ou um SMART Health Link. | CommonHealth; o trabalho de IPS da rede de confiança da OMS para peregrinações [[10]](#ref-10) [[14]](#ref-14) |
| **Acesso baseado em API** | As aplicações obtêm um IPS de um paciente autorizado através de uma API FHIR. | International Patient Access (IPA); redes dos EUA como a Flexpa, que acrescentou suporte a IPS no âmbito do CMS Interoperability Framework [[17]](#ref-17) [[18]](#ref-18) |

Pontos de integração a planear:

- **Partilha de documentos:** perfis IHE como o MHD (FHIR) e o XDS (registos de documentos) armazenam e encontram documentos IPS. Os perfis de conteúdo IPS da IHE acrescentam regras de conformidade e de teste [[11]](#ref-11).
- **Identidade do paciente:** IHE PIXm e PDQm, ou um identificador nacional, fazem corresponder o paciente entre sistemas.
- **Documentos existentes:** muitos sistemas já produzem CDA, C-CDA ou resumos nacionais. Mapeá-los para o IPS é normalmente mais fácil do que recomeçar, mas verifique diferenças de cardinalidade, conjuntos de valores e sistemas de códigos.
- **Perfis nacionais:** um núcleo nacional, como US Core, AU Core, CH Core ou JP Core, pode diferir do IPS. Os perfis nacionais de resumo do paciente reconciliam os dois [[5]](#ref-5) [[6]](#ref-6) [[19]](#ref-19).
- **Tradução e apresentação:** os recetores devem apresentar a narrativa e traduzir as entradas codificadas usando os nomes de apresentação dos códigos na língua do recetor.
- **Segurança:** use TLS, documentos assinados quando exigido, registo de auditoria (por exemplo IHE ATNA ou BALP) e controlo de acesso associado ao consentimento.


## Adoção atual

O IPS passou de projetos-piloto a programas nacionais e regionais. O estado muda depressa, por isso consulte as fontes ligadas para a situação mais recente.

- **IPS Implementation Registry.** A comunidade IPS mantém um registo público de implementações. A meados de 2026 listava 34 entradas, desde o projeto IPS-LAC mediado por prestadores da Argentina ao Better Health Program do Vietname [[15]](#ref-15).
- **Ecossistema FHIR.** No inquérito State of FHIR de 2025 da HL7 International e da Firely, 42 respondentes disseram que o IPS sustenta as suas especificações FHIR nacionais, mais do que qualquer outro guia internacional [[20]](#ref-20).
- **Investigação.** Um estudo de 2025 sobre a adoção do IPS entrevistou partes interessadas, que apontaram a melhor qualidade dos cuidados e a segurança do paciente como os principais benefícios [[21]](#ref-21).

| País ou região | Estado |
|---|---|
| **União Europeia e EEE** | O MyHealth@EU troca resumos de pacientes e receitas eletrónicas entre países. Uma apresentação da Comissão Europeia de 2026 indicou 17 Estados-Membros mais a Noruega em funcionamento, com a maioria dos restantes a planear aderir [[2]](#ref-2) [[22]](#ref-22). O Regulamento EHDS torna obrigatória a troca de resumos de pacientes até 2029 [[23]](#ref-23). |
| **Canadá** | O Resumo Pan-Canadiano do Paciente (PS-CA), aprovado pela Canada Health Infoway em outubro de 2022, assenta no IPS com adaptações canadianas [[4]](#ref-4). |
| **Austrália** | O AU Patient Summary, assente no IPS e no AU Core, é desenvolvido pela HL7 Australia através do programa Sparked [[5]](#ref-5) [[24]](#ref-24). |
| **Suíça** | O CH IPS 2.0.0 (uso experimental) da HL7 Switzerland assenta no IPS e no CH Core. Um perfil separado acrescenta o que o registo eletrónico do paciente suíço necessita [[6]](#ref-6). |
| **Estados Unidos** | Não existe mandato federal para o IPS. Os EUA usam o US Core e o USCDI. Agências federais participam no trabalho internacional do IPS, e algumas redes suportam o IPS voluntariamente [[18]](#ref-18). |
| **América Latina e Caraíbas** | Os ministérios da saúde da RACSEL usam o guia regional IPS-LAC. Em 2023, 16 países trocaram documentos IPS-LAC num connectathon em São Paulo [[16]](#ref-16). |
| **Japão** | Investigadores construíram e validaram uma aplicação de resumo do paciente baseada no IPS para casos de uso japoneses comuns, usando o JP Core [[19]](#ref-19). |
| **Taiwan e Filipinas** | Um relatório de implementação de 2025 descreve um registo de saúde pessoal transfronteiriço que usa FHIR e está alinhado com o IPS [[25]](#ref-25). |
| **G7** | Em 2021, os ministros da saúde do G7 comprometeram-se a trabalhar rumo ao IPS e publicaram um roteiro do IPS [[26]](#ref-26). |
| **OMS** | A Global Digital Health Certification Network da OMS inclui domínios de confiança baseados no IPS, como o IPS verificável para peregrinações [[14]](#ref-14). |


## Leis, regulamentos e políticas por país e região

O IPS é um padrão, não uma lei. As leis decidem se um país tem de trocar resumos de pacientes, em que formato e sob que regras de privacidade. Isto é um resumo, não aconselhamento jurídico. Verifique sempre o texto atual da lei.

| Jurisdição | Lei ou política | O que significa para o IPS |
|---|---|---|
| **União Europeia** | **Regulamento do Espaço Europeu de Dados de Saúde (EHDS), (UE) 2025/327.** Publicado a 5 de março de 2025; em vigor desde 26 de março de 2025 [[23]](#ref-23) [[27]](#ref-27). | Os resumos de pacientes são uma "categoria prioritária". A troca no formato europeu de intercâmbio de registos de saúde eletrónicos tem de funcionar em todos os Estados-Membros até 2029. Imagens médicas, resultados de exames e relatórios de alta seguem-se até 2031 [[28]](#ref-28). O formato para resumos de pacientes baseia-se no HL7 IPS. |
| **União Europeia** | **Diretiva 2011/24/UE** relativa ao exercício dos direitos dos doentes em matéria de cuidados de saúde transfronteiriços [[29]](#ref-29). | Criou a rede de saúde em linha, que acordou as orientações sobre o resumo do paciente subjacentes ao MyHealth@EU. |
| **União Europeia** | **Regulamento Geral sobre a Proteção de Dados (RGPD), (UE) 2016/679** [[30]](#ref-30). | Os dados de saúde são uma categoria especial. Cada troca de IPS precisa de um fundamento jurídico e de salvaguardas adequadas. |
| **Estados Unidos** | **21st Century Cures Act e as regras contra o bloqueio de informação** [[31]](#ref-31); o **CMS Interoperability Framework** (2025), voluntário [[17]](#ref-17). | Nenhuma lei exige o IPS. As leis exigem acesso e troca de informação de saúde eletrónica, usando o US Core e o USCDI. O suporte ao IPS é voluntário. |
| **Canadá** | Leis provinciais e territoriais sobre informação de saúde. A **Connected Care for Canadians Act** (Bill C-72) federal foi apresentada em 2024, mas não foi aprovada antes de o Parlamento ser prorrogado em 2025. | O PS-CA é uma especificação pan-canadiana, não um requisito legal. A adoção é liderada pelas províncias e territórios com a Canada Health Infoway [[4]](#ref-4). |
| **Reino Unido** | **Data (Use and Access) Act 2025** [[32]](#ref-32). | Inclui poderes para estabelecer normas de informação para as TI da saúde e da assistência social a adultos. O Reino Unido foi anfitrião do compromisso do G7 de 2021 sobre o IPS [[26]](#ref-26). |
| **Austrália** | **My Health Records Act 2012** e as alterações de 2025 sobre "partilha por defeito". | O AU Patient Summary é uma especificação nacional desenvolvida através do Sparked [[5]](#ref-5) [[24]](#ref-24). |
| **Suíça** | **Lei Federal de 19 de junho de 2015 sobre o Registo Eletrónico do Paciente (LDEP, SR 816.1)**, em vigor desde 15 de abril de 2017 [[33]](#ref-33). | O CH IPS inclui um perfil para documentos no registo eletrónico do paciente suíço [[6]](#ref-6). |
| **América Latina e Caraíbas** | Acordos regionais através da RACSEL e da PH4H, com apoio do Banco Interamericano de Desenvolvimento a um quadro jurídico regional [[16]](#ref-16). | O IPS-LAC é o formato regional acordado para a troca transfronteiriça. |
| **G7** | **Comunicado dos Ministros da Saúde**, Oxford, junho de 2021, e o **G7 IPS Roadmap**, dezembro de 2021 [[26]](#ref-26) [[34]](#ref-34). | Um compromisso político de trabalhar rumo ao IPS e ao acesso dos pacientes, não uma lei vinculativa. |


## Prós e contras

| Prós | Contras |
|---|---|
| **Cuidados não programados mais seguros.** Os profissionais veem alergias, medicação e problemas em segundos. | **Só é tão bom quanto a sua fonte.** Dados de origem desatualizados ou errados dão um resumo desatualizado ou errado. |
| **Um formato, em todo o mundo.** Uma implementação serve necessidades nacionais e transfronteiriças. | **Variação nacional.** Os perfis nacionais acrescentam regras, pelo que um "IPS válido" num país pode exigir trabalho para ser aceite noutro. |
| **Assente em padrões abertos e maduros:** ISO, CEN, HL7 FHIR e CDA, SNOMED CT e LOINC. | **Encargo da terminologia.** Mapear códigos locais para SNOMED CT e LOINC dá muito trabalho, e a SNOMED CT completa exige uma licença para além do subconjunto gratuito do IPS. |
| **Legível e computável.** Narrativa para pessoas, dados codificados para software e tradução. | **A narrativa e os dados codificados podem discordar** se o gerador for descuidado, e os recetores podem confiar no errado. |
| **Capacitação do paciente.** Os pacientes podem guardar e partilhar o seu próprio resumo. | **Risco de privacidade e consentimento.** Um resumo portátil é sensível, e as leis e os modelos de consentimento diferem de país para país. |
| **Especificações gratuitas** e terminologia IPS gratuita reduzem custos [[12]](#ref-12). | **Rotatividade de versões.** O STU 1, o STU 1.1 e o STU 2 coexistem, e o formato EHDS refere uma versão anterior [[28]](#ref-28). |
| **Reutilizável** para certificados de vacinação, investigação e registos [[7]](#ref-7) [[8]](#ref-8). | **Deliberadamente mínimo.** Não substitui registos completos nem documentos de especialidade, e as lacunas para uso secundário exigem extensões [[7]](#ref-7). |
| **Forte apoio** de governos, da UE, do G7, da OMS e de organismos de normalização. | **Adoção desigual.** Muitos países e fornecedores ainda estão em fase-piloto, e a sensibilização dos pacientes é baixa. |


## Planos e direções futuras

- **UE, 2029:** troca de resumos de pacientes e de receitas eletrónicas operacional em todos os Estados-Membros da UE ao abrigo do EHDS [[23]](#ref-23) [[28]](#ref-28).
- **UE, 2031:** imagens médicas, resultados laboratoriais e relatórios de alta juntam-se ao formato europeu de intercâmbio de registos de saúde eletrónicos [[28]](#ref-28).
- **Expansão do MyHealth@EU:** mais países a aderir e novos serviços para resultados laboratoriais, relatórios de alta e imagens médicas [[2]](#ref-2) [[22]](#ref-22).
- **Adoção do FHIR IPS STU 2:** os implementadores passam para as secções Alerts e Patient Story, secções vazias explícitas e terminologia SNOMED CT IPS [[9]](#ref-9).
- **Austrália:** publicação da AU Patient Summary Release 1, prevista para 2026 [[24]](#ref-24).
- **IPS Best Practices Project:** um esforço comunitário para documentar as lições aprendidas, com trabalho a começar em 2026.
- **Rede de confiança da OMS:** mais domínios de confiança baseados no IPS para documentos de saúde verificáveis e portáteis [[14]](#ref-14).
- **SMART Health Links:** normalizados através da HL7, para partilha controlada pelo paciente [[10]](#ref-10).
- **América Latina e Caraíbas:** troca IPS-LAC mais ampla através da PH4H [[16]](#ref-16).
- **Investigação e uso secundário:** trabalho para alargar os resumos de pacientes à investigação clínica e à IA, mantendo o núcleo mínimo [[7]](#ref-7).


## Glossário

| Termo | Significado |
|---|---|
| **IPS** | International Patient Summary |
| **FHIR** | Fast Healthcare Interoperability Resources, o padrão moderno da HL7 baseado em APIs |
| **CDA** | Clinical Document Architecture, o padrão de documentos XML da HL7 |
| **IG** | Implementation Guide (Guia de Implementação), um conjunto de perfis e regras para aplicar um padrão |
| **Profile** | Uma versão restringida de um recurso FHIR para um uso específico |
| **SNOMED CT** | Systematized Nomenclature of Medicine – Clinical Terms |
| **LOINC** | Logical Observation Identifiers Names and Codes |
| **SMART Health Links** | Um padrão para partilhar dados de saúde através de uma ligação ou código QR |
| **JIC** | Joint Initiative Council for Global Health Informatics Standardization |


## Saber mais

- HL7 FHIR IPS Implementation Guide: <https://hl7.org/fhir/uv/ips/>
- IPS continuous build: <https://build.fhir.org/ig/HL7/fhir-ips/>
- International Patient Summary project site: <https://international-patient-summary.net/>
- ISO 27269 (Health informatics — International patient summary): <https://www.iso.org/standard/79491.html>
- SNOMED CT IPS Terminology: <https://www.snomed.org/international-patient-summary-terminology>
- SMART Health Links: <https://docs.smarthealthit.org/smart-health-links/>


## Recursos

Estas ligações cobrem fontes, especificações, software, projetos, vídeos, livros e investigação sobre o IPS. A maioria foi verificada quando esta página foi escrita. Alguns sítios de editoras bloqueiam verificações automáticas e estão assinalados com *(não verificado)*.

### Especificações e padrões oficiais

- [HL7 FHIR IPS Implementation Guide, current published version](https://hl7.org/fhir/uv/ips/) é a especificação FHIR de referência.
- [HL7 FHIR IPS Implementation Guide, STU 2](https://hl7.org/fhir/uv/ips/STU2/)
- [HL7 FHIR IPS Implementation Guide, STU 1.1](https://hl7.org/fhir/uv/ips/STU1.1/)
- [HL7 FHIR IPS publication history](https://www.hl7.org/fhir/uv/ips/history.html) lista todas as versões publicadas.
- [HL7 FHIR IPS continuous build](https://build.fhir.org/ig/HL7/fhir-ips/) é o trabalho mais recente em curso, ainda não votado.
- [Structure of the International Patient Summary](https://hl7.org/fhir/uv/ips/en/Structure-of-the-International-Patient-Summary.html) explica as secções e os perfis.
- [IPS design conventions](https://build.fhir.org/ig/HL7/fhir-ips/en/Design-Conventions.html) trata de must-support, dados ausentes e narrativa.
- [IPS generation and data inclusion](https://build.fhir.org/ig/HL7/fhir-ips/en/Generation-and-Data-Inclusion.html) trata do `$summary` e de como selecionar o conteúdo.
- [HL7 CDA IPS Implementation Guide, continuous build](https://build.fhir.org/ig/HL7/CDA-IPS/)
- [HL7 CDA IPS product brief](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=483)
- [ISO 27269, Health informatics — International patient summary](https://www.iso.org/standard/79491.html) *(não verificado)*
- [ISO/TC 215 Health informatics committee](https://www.iso.org/committee/54960.html) *(não verificado)*
- [IHE FHIR International Patient Summary profile (FIIO)](https://profiles.ihe.net/PCC/FIIO/volume-1.html)
- [IHE PCC International Patient Summary supplement, 2020 (PDF)](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS_Rev1-0_PC_2020-03-17.pdf)
- [HL7 SMART Health Cards and Links Implementation Guide](https://hl7.org/fhir/uv/smart-health-cards-and-links/)
- [SMART Health Links documentation](https://docs.smarthealthit.org/smart-health-links/)
- [HL7 FHIR International Patient Access (IPA)](https://hl7.org/fhir/uv/ipa/) é uma especificação irmã para o acesso do paciente por API.
- [HL7 FHIR R4 base specification](https://hl7.org/fhir/R4/), sobre a qual o IPS se constrói.

### Repositórios de código-fonte

- [HL7/fhir-ips](https://github.com/HL7/fhir-ips) contém a fonte do IG FHIR IPS em FHIR Shorthand.
- [HL7/cda-ips](https://github.com/HL7/cda-ips) contém a fonte do IG CDA IPS.
- [hl7-eu/eps](https://github.com/hl7-eu/eps) contém a fonte do HL7 Europe Patient Summary.
- [hl7ch/ch-ips](https://github.com/hl7ch/ch-ips) contém o IPS suíço, com um visualizador e gerador em desenvolvimento.
- [GitHub topic: international-patient-summary](https://github.com/topics/international-patient-summary) lista repositórios da comunidade.

### Adaptações nacionais e regionais

- [HL7 Europe Patient Summary (EPS), continuous build](https://build.fhir.org/ig/hl7-eu/eps/)
- [AU Patient Summary (Australia), continuous build](https://build.fhir.org/ig/hl7au/au-fhir-ps/)
- [Trillium II IPS structure (HL7 Europe)](https://hl7.eu/fhir/build/trillium2/site/ipsStructure.html) vem do projeto UE–EUA que ajudou a iniciar o IPS.
- [eHealth Suisse](https://www.ehealthsuisse.ch/) é o centro de competência da Suíça para a saúde digital e para a adoção do seu IPS.
- [MyHealth@EU, cross-border digital health services](https://health.ec.europa.eu/ehealth-digital-health-and-care/electronic-cross-border-health-services_en)
- [Xt-EHR Joint Action](https://www.xt-ehr.eu/) prepara os formatos do Espaço Europeu de Dados de Saúde, incluindo o resumo do paciente.

### Software e ferramentas

- [IPS Viewer](https://www.ipsviewer.com) ([source: jddamore/IPSviewer](https://github.com/jddamore/IPSviewer)) é um visualizador de IPS de código aberto, no navegador.
- [uwcirg/shl-ips-viewer](https://github.com/uwcirg/shl-ips-viewer) mostra um IPS partilhado através de um SMART Health Link.
- [smart-on-fhir/smart-health-links](https://github.com/smart-on-fhir/smart-health-links) é a implementação de referência dos SMART Health Links.
- [HAPI FHIR IPS generator](https://hapifhir.io/hapi-fhir/docs/server_ips/introduction.html) ([source: hapifhir/hapi-fhir](https://github.com/hapifhir/hapi-fhir)) é um módulo de servidor Java de código aberto que implementa o `$summary`.
- [HAPI FHIR JPA server IPS documentation](https://hapifhir.io/hapi-fhir/docs/server_jpa/ips.html)
- [Inferno IPS Test Kit](https://inferno.healthit.gov/test-kits/ips) ([source: inferno-framework/ips-test-kit](https://github.com/inferno-framework/ips-test-kit)) é um kit de testes de conformidade de código aberto.
- [FHIR Validator](https://validator.fhir.org/) valida bundles IPS face aos perfis do IG.
- [Simplifier: hl7.fhir.uv.ips package](https://simplifier.net/packages/hl7.fhir.uv.ips) tem o pacote, os perfis e exemplos.
- [FHIR package registry](https://registry.fhir.org/)
- [FHIR Shorthand (FSH) School](https://fshschool.org/) ensina a linguagem em que o IG do IPS é escrito.
- [CommonHealth](https://www.commonhealth.org/) é uma aplicação para pacientes que gera um IPS e o partilha através de SMART Health Links.
- [WHO SMART Trust](https://github.com/WorldHealthOrganization/smart-trust) é o quadro de confiança da Global Digital Health Certification Network da OMS.

### Organizações e projetos

- [International Patient Summary project site](https://international-patient-summary.net/) tem notícias, relatórios de adoção e formação.
- [IPS for health IT developers](https://international-patient-summary.net/health-it-developer/)
- [HL7 International](https://www.hl7.org/)
- [IHE International](https://www.ihe.net/)
- [SNOMED International](https://www.snomed.org/)
- [SNOMED CT IPS Terminology](https://www.snomed.org/international-patient-summary-terminology) é um subconjunto gratuito para uso no IPS.
- [LOINC](https://loinc.org/) *(não verificado)*
- [Joint Initiative Council for Global Health Informatics Standardization (JIC)](http://www.jointinitiativecouncil.org/)
- [Global Digital Health Partnership (GDHP)](https://gdhp.health/)
- [WHO SMART Guidelines](https://smart.who.int/)
- [WHO Global Digital Health Certification Network](https://www.who.int/initiatives/global-digital-health-certification-network)

### Comunidade e eventos

- [chat.fhir.org](https://chat.fhir.org/) é o chat da comunidade FHIR, que tem um canal IPS ativo.
- [HL7 FHIR Connectathons](https://www.hl7.org/events/fhir-connectathon/)
- [IHE Connectathons](https://www.ihe.net/participate/connectathon/)

### Vídeos

- [HIMSS20: IPS for computable care guidelines in 200 seconds or less (IHE International, YouTube)](https://www.youtube.com/watch?v=xjEzGM8kBPw)
- [IHE International YouTube channel](https://www.youtube.com/@IHEIntl) tem painéis de Connectathon e sessões sobre o IPS.
- [IPS project site news](https://international-patient-summary.net/) liga a muitos webinars gravados, incluindo:
  - o painel do IPS no IHE North America Connectathon, 2024
  - a sessão do IPS nos FHIR DevDays 2023
  - Grahame Grieve sobre IPS e IPA, IHE Connectathon Montreux 2022
  - a palestra principal da SNOMED CT Expo 2022
  - Matthew Rahn sobre o IPS na GDHP
  - o webinar transfronteiriço "Global Passport" da HL7
- [YouTube search: International Patient Summary](https://www.youtube.com/results?search_query=international+patient+summary)

### Livros

- Tim Benson e Grahame Grieve, [*Principles of Health Interoperability: FHIR, HL7 and SNOMED CT*](https://link.springer.com/book/10.1007/978-3-030-56883-2), 4.ª edição, Springer, 2020. Abrange FHIR, recursos de resumo clínico e terminologia.

### Artigos de investigação e outros artigos

- Laleci Erturkmen G. B., Sinaci A. A., Namli T., Boonstra M., et al., "[An assessment of the European Patient Summary for clinical research: a case study in cardiology](https://doi.org/10.3389/fmed.2024.1481551)", *Frontiers in Medicine*, 2024.
- Lee H., Huang J., Huang S., Chen W., et al., "[Implementing a Cross-Border Next-Generation Personal Health Record in the Philippines and Taiwan: An Implementation Case Report Using Health Level 7 International Fast Healthcare Interoperability Resources](https://doi.org/10.2196/56272)", *JMIR Formative Research*, 2025.
- Song C., Nakayama M., "[Implementation of a Patient Summary Web Application According to the International Patient Summary and Validation in Common Use Cases in Japan](https://doi.org/10.1007/s10916-023-01993-6)", *Journal of Medical Systems*, 2023.
- Schippers D., Spil T., Stegwee R., Folmer E., Donnelly S., "[The adoption and diffusion of the International Patient Summary](https://doi.org/10.24251/hicss.2025.425)", *Proceedings of the 58th Hawaii International Conference on System Sciences (HICSS)*, 2025.
- da Silva Carvalho N., Papadimitriou A., Stegwee R., Gille H., et al., "[Accelerating European electronic health record exchange format (EEHRxF) implementation across Europe: a policy perspective](https://doi.org/10.3389/fmed.2025.1648170)", *Frontiers in Medicine*, 2025.
- Kay S., Cangioli G., Nusbaum M., "[The International Patient Summary and the extensibility requirement](https://international-patient-summary.net/the-international-patient-summary-and-the-extensibility-requirement/)", *Studies in Health Technology and Informatics* (pHealth), 2020.
- D'Amore J., Cangioli G., Hausam R., "[Advancing the International Patient Summary](https://international-patient-summary.net/advancing-the-international-patient-summary/)"
- "[Towards the Austrian Patient Summary](https://international-patient-summary.net/towards-the-austrian-patient-summary/)", *Studies in Health Technology and Informatics* (dHealth).
- "[Revival of the International Patient Summary (IPS)](https://smiledigitalhealth.com/our-blog/revival-of-the-international-patient-summary-ips)", Smile Digital Health blog.
- [PubMed search: "international patient summary"](https://pubmed.ncbi.nlm.nih.gov/?term=%22international+patient+summary%22) para literatura revista por pares.


## References

As citações numeradas no texto, como [1], ligam à entrada correspondente abaixo. As ligações foram verificadas em novembro de 2026. As leis, os números de adoção e as versões mudam, por isso consulte a fonte para a situação atual.

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

Estas fontes não são citadas acima, mas são as referências primárias para o próprio padrão.

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
