# Resumen Internacional del Paciente (IPS)

El **Resumen Internacional del Paciente (International Patient Summary, IPS)** es un estándar mundial para un extracto breve de la historia clínica electrónica. Contiene los datos clínicos básicos que un profesional necesita para tratar a un paciente de forma segura. Está diseñado para ser:

- **Mínimo y no exhaustivo.** Es un subconjunto pequeño y seleccionado de una historia clínica, no la historia completa.
- **Independiente de la especialidad.** Cualquier profesional clínico puede usarlo, en cualquier disciplina.
- **Independiente de la enfermedad.** No está vinculado a una enfermedad ni a una vía asistencial concretas.
- **Implementable e internacional.** Se basa en estándares y terminologías globales, por lo que puede usarse entre países, idiomas y sistemas informáticos.

En resumen, el IPS responde a una sola pregunta para un profesional que nunca ha conocido al paciente: *«¿Qué necesito saber ahora mismo para atender a esta persona con seguridad?»*


## Por qué existe el IPS

La información de salud suele estar encerrada en una historia clínica electrónica (HCE) local, en un sistema nacional o en el producto de un proveedor. Cuando un paciente busca atención en otro lugar, como otro hospital, región o país, el profesional que lo atiende a menudo no tiene acceso a ese historial. El IPS ofrece a todos un formato de resumen compartido y portátil.

### Casos de uso principales

| Caso de uso | Descripción |
|---|---|
| **Atención no programada y de urgencias** | Un paciente enferma o sufre una lesión lejos de su hogar y los profesionales locales no pueden acceder a su historia clínica electrónica de origen. Este es el caso de uso original y principal. |
| **Atención transfronteriza** | Viajeros, migrantes, trabajadores transfronterizos y refugiados llevan consigo un resumen que los profesionales en el extranjero pueden leer. |
| **Atención programada y transiciones** | Derivaciones, consultas con especialistas, ingresos, altas y traspasos entre proveedores. |
| **Turismo médico y movilidad** | Pacientes que eligen recibir atención en otra jurisdicción. |
| **Empoderamiento del paciente** | Los pacientes conservan, consultan y comparten su propio resumen desde una aplicación móvil, un portal o una copia impresa. |


## Cuándo usar el IPS

Use el IPS cuando alguien que no conoce al paciente necesite rápidamente una instantánea fiable, y cuando el emisor y el receptor no compartan un sistema informático.

### Buenos usos

- **Atención de urgencias y no planificada**, especialmente lejos del hogar o al otro lado de una frontera. Este es el uso para el que se diseñó el IPS.
- **Intercambio transfronterizo entre sistemas nacionales**, como el servicio MyHealth@EU de la UE [[1]](#ref-1) [[2]](#ref-2).
- **Resúmenes en poder del paciente** que viajeros, migrantes, refugiados, peregrinos o personas con afecciones complejas llevan en el teléfono o en papel [[3]](#ref-3).
- **Un resumen del paciente nacional o regional.** Muchos países construyen su propio resumen como un perfil del IPS, de modo que también pueda intercambiarse internacionalmente [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
- **Una base común para las transiciones asistenciales**, como derivaciones, ingresos y altas, cuando no se dispone de un documento especializado más completo.
- **Un punto de partida para otros conjuntos de datos**, como certificados de vacunación, datos de investigación o registros que necesitan los mismos datos esenciales [[7]](#ref-7) [[8]](#ref-8).

### Malos usos

- **La historia clínica completa.** El IPS es deliberadamente mínimo. Use una exportación completa de la historia o un documento especializado cuando el detalle importe.
- **Documentos específicos de una especialidad**, como un resumen de tratamiento oncológico, una cartilla de maternidad o un informe de alta detallado. Estos tienen sus propios estándares, que pueden incluir o referenciar contenido del IPS.
- **Flujos de trabajo clínicos en tiempo real dentro de una sola organización.** Dentro de una única HCE, consulte los datos en vivo en lugar de una instantánea resumida.
- **Registros legales, de facturación o de seguros.** El IPS es un resumen clínico, no un registro administrativo ni de reclamaciones.
- **Decisiones que exigen una exhaustividad garantizada.** Un IPS solo es tan completo y actual como su fuente y su autor. Confirme siempre con el paciente los datos críticos cuando sea posible.


## Qué contiene un IPS

Un documento IPS tiene dos capas:

1. **Una cabecera que registra quién, qué y cuándo:**
   - **Paciente:** identidad, datos demográficos y contactos.
   - **Autor:** la persona, organización o sistema que elaboró el resumen.
   - **Custodio:** la organización responsable de mantenerlo.
   - **Certificador (attester):** quién lo ha verificado, si alguien lo ha hecho.
   - **Fecha y hora:** cuándo se creó.

2. **Un cuerpo clínico organizado en secciones.** Las secciones son obligatorias, recomendadas u opcionales.

| Sección | Estado | Contenido típico |
|---|---|---|
| **Resumen de medicación** | Obligatoria | Medicamentos actuales y pasados relevantes, recetas, posología |
| **Alergias e intolerancias** | Obligatoria | Alergias a medicamentos, alimentos y ambientales; reacciones y gravedad |
| **Lista de problemas** | Obligatoria | Diagnósticos activos, afecciones y problemas clínicos |
| Vacunaciones | Recomendada | Vacunas administradas, como tétanos, hepatitis B, gripe, COVID-19 |
| Historial de procedimientos | Recomendada | Cirugías mayores e intervenciones invasivas |
| Productos sanitarios | Recomendada | Implantes y dispositivos, como marcapasos, stents, prótesis |
| Resultados diagnósticos | Recomendada | Resultados clave de laboratorio, informes de imagen, patología |
| Constantes vitales | Opcional | Presión arterial, frecuencia cardíaca, peso, talla, IMC |
| Historial de enfermedades pasadas | Opcional | Afecciones resueltas y problemas pasados significativos |
| Estado funcional | Opcional | Discapacidades y capacidad para realizar actividades cotidianas |
| Plan de cuidados | Opcional | Planes de cuidados y recomendaciones de tratamiento |
| Historia social | Opcional | Tabaco, alcohol y otros factores de estilo de vida relevantes |
| Historial de embarazo | Opcional | Estado actual de embarazo e historial de embarazos |
| Voluntades anticipadas | Opcional | Testamentos vitales, preferencias de reanimación, declaraciones de consentimiento |
| Alertas | Opcional | Advertencias críticas para la seguridad que no encajan en otro lugar (añadida en FHIR IPS STU 2) |
| Historia del paciente | Opcional | Lo que importa al paciente: necesidades, fortalezas, valores, preocupaciones y preferencias, en sus propios términos (añadida en FHIR IPS STU 2) |

**Decir explícitamente «nada» importa.** Una sección vacía no le dice al profesional si el paciente no tiene alergias o si nadie las registró. Por eso el IPS espera declaraciones explícitas como *«sin alergias conocidas»*, *«sin medicación actual»* o *«información no disponible»*.


## Los estándares detrás del IPS

El IPS es una familia de estándares coordinados. Los estándares ISO y CEN definen *qué* debe contener un resumen del paciente. Las guías de implementación de HL7 definen *cómo* codificarlo.

| Estándar | Organismo | Función |
|---|---|---|
| **EN 17269** | CEN (Comité Europeo de Normalización) | El conjunto de datos abstracto del IPS, publicado en 2019 |
| **ISO 27269** | ISO (Organización Internacional de Normalización) | La versión internacional del conjunto de datos abstracto del IPS, publicada en 2021 |
| **CEN/TS 17288** | CEN | Orientaciones para implementar el IPS en uso transfronterizo |
| **Guía de implementación HL7 FHIR IPS** | HL7 International | La codificación moderna, apta para API y principal formato de implementación. STU 2 (2.0.x) añadió las secciones Alertas e Historia del paciente, permitió secciones vacías, aclaró `$summary` y pasó a la terminología SNOMED CT IPS [[9]](#ref-9). |
| **Guía de implementación HL7 CDA IPS** | HL7 International | La codificación basada en documentos XML, habitual en las infraestructuras nacionales y europeas existentes |

El trabajo se coordina a través del **Consejo de la Iniciativa Conjunta para la Normalización de la Informática de la Salud Global (Joint Initiative Council for Global Health Informatics Standardization, JIC)**. El JIC reúne a ISO, CEN, HL7, SNOMED International, IHE y otros. El IPS surgió de una colaboración entre la UE y EE. UU. en 2016 sobre datos de salud transfronterizos y hoy cuenta con el respaldo de gobiernos y programas de salud digital de todo el mundo.


## Cómo se codifica el IPS con HL7 FHIR

En FHIR, un IPS es un único **`Bundle`** de tipo `document`:

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

Puntos técnicos clave:

- **Cada sección tiene una narrativa legible por personas.** Un profesional puede leer el IPS en un navegador corriente, incluso sin software FHIR.
- **Cada sección tiene también entradas codificadas**, que son recursos FHIR estructurados que el software puede procesar, traducir y conciliar.
- **Los perfiles restringen los recursos FHIR base.** Por ejemplo, *Patient (IPS)* y *AllergyIntolerance (IPS)* definen los datos mínimos y los elementos «must support».
- **La operación `$summary`** (`GET [base]/Patient/[id]/$summary`) pide a un servidor FHIR que genere un IPS de un paciente bajo demanda.
- **El IPS es firmable y autocontenido.** Un documento completo puede almacenarse, enviarse, firmarse y verificarse como una sola unidad.


## Terminologías

Los sistemas de códigos compartidos hacen que un IPS sea legible entre idiomas y países:

| Terminología | Se usa para |
|---|---|
| **SNOMED CT** | Problemas, alergias, procedimientos, dispositivos, hallazgos clínicos. Hay disponible un subconjunto gratuito, la **Terminología SNOMED CT IPS**, para su uso con el IPS, incluso en países no miembros. |
| **LOINC** | Tipos de documento y de sección, pruebas de laboratorio, constantes vitales |
| **ATC** y otros sistemas de códigos de medicamentos | Productos medicinales y principios activos |
| **UCUM** | Unidades de medida |
| **Conjuntos de valores ISO y HL7** | Países, idiomas, géneros administrativos, motivos de ausencia y de desconocimiento |

Como las entradas están codificadas, un sistema receptor puede mostrar un IPS escrito en portugués con etiquetas en inglés. El significado codificado permanece igual.


## Cómo usan el IPS pacientes y profesionales

Un IPS puede ser generado por una HCE, un servicio nacional de historia clínica, un portal del paciente o una aplicación de salud personal. Luego puede entregarse de varias maneras:

- **De sistema a sistema:** mediante API REST de FHIR, infraestructuras nacionales o pasarelas transfronterizas como la red MyHealth@EU de la UE.
- **Compartición mediada por el paciente:** el paciente guarda el resumen en una cartera o aplicación de salud y lo comparte cuando se lo piden.
- **SMART Health Links:** un código QR o URL que da al profesional acceso limitado en el tiempo, opcionalmente protegido con contraseña, a un IPS cifrado. El profesional puede abrirlo en un navegador web corriente.
- **Papel o PDF:** una versión narrativa impresa como recurso de último recurso cuando nada más funciona.

Aplicaciones como **CommonHealth** permiten a los pacientes reunir sus registros y compartir un IPS mediante SMART Health Links.

Un escenario típico de urgencias:

1. Un viajero se desploma en el extranjero.
2. El viajero, o un acompañante, muestra un código QR desde el teléfono.
3. El médico de urgencias lo escanea y ve en segundos los medicamentos, alergias y problemas activos del viajero.
4. El médico evita una interacción farmacológica peligrosa y trata al paciente con seguridad.


## Principios y decisiones de diseño

- **La seguridad primero.** El contenido se elige por su relevancia clínica, no por su exhaustividad.
- **Global por defecto, local por extensión.** Los países crean perfiles nacionales, como variantes de la UE, Australia o Canadá, que añaden requisitos sin romper el núcleo internacional.
- **Legible por personas y procesable por máquinas.** La narrativa y los datos codificados conviven.
- **Libre y abierto.** Las especificaciones HL7 IPS y el subconjunto IPS de SNOMED CT están disponibles gratuitamente para reducir las barreras de adopción.
- **Privacidad y consentimiento.** El acceso se rige por la legislación local y el consentimiento del paciente. Mecanismos como SMART Health Links mantienen al paciente en control.


## Cómo usar el IPS

### Para pacientes

1. **Pídalo.** Pregunte a su clínica, hospital, portal nacional de salud o aplicación de salud si puede generar un IPS o un resumen nacional del paciente basado en él.
2. **Revíselo.** Léalo mientras esté sano. Informe de cualquier error u omisión, especialmente en alergias y medicamentos.
3. **Llévelo consigo.** Guárdelo en una aplicación de salud o cartera, como un código QR de SMART Health Link, o impreso entre sus documentos de viaje.
4. **Manténgalo actualizado.** Obtenga uno nuevo tras un nuevo diagnóstico, un nuevo medicamento de largo plazo, una cirugía o un implante.
5. **Compártalo a propósito.** Muéstreselo al profesional que lo atiende. Un SMART Health Link puede caducar y puede exigir una contraseña, de modo que usted controla quién lo ve y durante cuánto tiempo [[10]](#ref-10).

### Para profesionales clínicos

1. **Revise primero la cabecera.** Quién lo escribió, cuándo y si alguien lo ha verificado. Un resumen antiguo o no verificado exige más cautela.
2. **Lea primero las secciones obligatorias:** alergias, medicamentos y problemas.
3. **Distinga «nada conocido» de «no registrado».** «Sin alergias conocidas» es una declaración clínica. Una sección vacía o «desconocido» no lo es.
4. **Confirme los datos críticos** con el paciente o su acompañante siempre que pueda.
5. **Use los datos codificados.** Cuando su sistema lo admita, las entradas codificadas permiten mostrar el resumen en su idioma y contrastarlo con reglas de interacciones farmacológicas y alergias.
6. **No dé por supuesta la exhaustividad.** El IPS es una red de seguridad, no un historial completo.

### Para implementadores

1. **Elija la especificación.** Use la guía de implementación HL7 FHIR IPS vigente (STU 2), o el perfil nacional de su país basado en ella. Para infraestructuras basadas en CDA, use la guía CDA IPS [[9]](#ref-9) [[11]](#ref-11).
2. **Mapee sus datos.** Mapee los datos locales a los perfiles del IPS: `Patient`, `AllergyIntolerance`, `MedicationStatement`, `Condition`, etc. La mayor parte del trabajo está en este mapeo.
3. **Mapee su terminología.** Mapee los códigos locales a SNOMED CT, LOINC y los sistemas de códigos de medicamentos. La Terminología SNOMED CT IPS es de uso gratuito para este fin [[12]](#ref-12).
4. **Genere el documento.** Admita la operación `$summary`, o construya usted mismo el `Bundle` y el `Composition`. Incluya una narrativa legible para cada sección y declaraciones explícitas de «nada conocido» o «no disponible».
5. **Valídelo.** Compruebe cada documento generado con el validador FHIR y un kit de pruebas de conformidad, como el Inferno IPS Test Kit [[13]](#ref-13).
6. **Fírmelo y compártalo.** Decida cómo se firman, almacenan y envían los documentos: una API, un registro de documentos, una pasarela transfronteriza o un SMART Health Link.
7. **Consúmalo con seguridad.** Como receptor, muestre la narrativa aunque no pueda procesar todas las entradas codificadas, mantenga visibles la fuente y el autor, y nunca fusione en silencio los datos recibidos con el registro local.
8. **Pruebe con otros.** Logre la interoperabilidad con otros proveedores y países en los Connectathons de IHE y HL7 antes de entrar en producción.

### Para gobiernos y organizaciones sanitarias

1. **Adopte un perfil nacional** que se base en el IPS en lugar de un formato aparte, de modo que el resumen nacional sea internacional por defecto [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6).
2. **Resuelva la gobernanza:** quién puede crear, actualizar y certificar un resumen, y quién responde de su exactitud.
3. **Resuelva el licenciamiento de la terminología:** afiliación a SNOMED CT o uso del subconjunto IPS gratuito.
4. **Resuelva identidad, consentimiento y confianza:** cómo se identifica a los pacientes, cómo se registra el consentimiento y qué marco de confianza, como MyHealth@EU o la Red Mundial de Certificación de Salud Digital de la OMS, se usa para verificar documentos [[1]](#ref-1) [[14]](#ref-14).
5. **Publique lo que ha construido** en el Registro de Implementaciones del IPS, para que otros puedan aprender de ello [[15]](#ref-15).


## Integración del IPS con los sistemas sanitarios

Un IPS rara vez es un sistema aparte. Es una vista de datos que ya residen en las HCE, los intercambios de información sanitaria, los registros nacionales y las aplicaciones de salud personales.

| Patrón de integración | Cómo funciona | Ejemplos |
|---|---|---|
| **Generado por la HCE** | La HCE construye un IPS a partir de sus propios datos bajo demanda, a menudo mediante la operación FHIR `$summary`. | Proveedores de HCE y servidores FHIR como HAPI FHIR, que tiene un módulo generador de IPS |
| **Registro nacional o regional** | Un servicio nacional de resumen del paciente almacena un perfil del IPS y lo pone a disposición de los proveedores autorizados. | PS-CA de Canadá, AU Patient Summary de Australia, la historia clínica electrónica del paciente de Suiza con CH IPS [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6) |
| **Pasarela transfronteriza** | Cada país opera un punto de contacto nacional. Convierte el resumen del país de origen al formato de intercambio acordado, lo envía a través de la frontera y el país receptor lo muestra en el idioma local. | Puntos de Contacto Nacionales de Salud Electrónica de MyHealth@EU [[1]](#ref-1) [[2]](#ref-2) |
| **Red de intercambio regional** | Los ministerios de salud intercambian documentos IPS mediante servidores FHIR nacionales bajo una guía regional compartida. | IPS-LAC de RACSEL y la Autopista Panamericana de Salud Digital (PH4H) en América Latina y el Caribe [[16]](#ref-16) |
| **Mediado por el paciente** | El paciente guarda el IPS en una aplicación o cartera y lo comparte con un código QR o un SMART Health Link. | CommonHealth; el trabajo de IPS de la red de confianza de la OMS para la peregrinación [[10]](#ref-10) [[14]](#ref-14) |
| **Acceso basado en API** | Las aplicaciones obtienen un IPS de un paciente autorizado mediante una API FHIR. | Acceso Internacional del Paciente (IPA); redes estadounidenses como Flexpa, que añadió compatibilidad con el IPS dentro del Marco de Interoperabilidad de CMS [[17]](#ref-17) [[18]](#ref-18) |

Puntos de integración que conviene planificar:

- **Compartición de documentos:** los perfiles IHE como MHD (FHIR) y XDS (registros de documentos) almacenan y localizan documentos IPS. Los perfiles de contenido IHE IPS añaden reglas de conformidad y de pruebas [[11]](#ref-11).
- **Identidad del paciente:** IHE PIXm y PDQm, o un identificador nacional, permiten emparejar al paciente entre sistemas.
- **Documentos existentes:** muchos sistemas ya producen CDA, C-CDA o resúmenes nacionales. Mapearlos al IPS suele ser más fácil que empezar de nuevo, pero hay que revisar las diferencias de cardinalidad, conjuntos de valores y sistemas de códigos.
- **Perfiles nacionales:** un núcleo nacional, como US Core, AU Core, CH Core o JP Core, puede diferir del IPS. Los perfiles nacionales de resumen del paciente concilian ambos [[5]](#ref-5) [[6]](#ref-6) [[19]](#ref-19).
- **Traducción y visualización:** los receptores deben mostrar la narrativa y traducir las entradas codificadas usando los nombres de visualización de los códigos en el idioma del receptor.
- **Seguridad:** use TLS, documentos firmados cuando se exija, registro de auditoría (por ejemplo IHE ATNA o BALP) y control de acceso vinculado al consentimiento.


## Adopción actual

El IPS ha pasado de los pilotos a programas nacionales y regionales. La situación cambia rápido, así que consulte las fuentes enlazadas para conocer la posición más reciente.

- **Registro de Implementaciones del IPS.** La comunidad del IPS mantiene un registro público de implementaciones. A mediados de 2026 incluía 34 entradas, desde el proyecto IPS-LAC mediado por proveedores de Argentina hasta el Better Health Program de Vietnam [[15]](#ref-15).
- **Ecosistema FHIR.** En la encuesta State of FHIR 2025 de HL7 International y Firely, 42 encuestados dijeron que el IPS sustenta sus especificaciones FHIR nacionales, más que cualquier otra guía internacional [[20]](#ref-20).
- **Investigación.** Un estudio de 2025 sobre la adopción del IPS entrevistó a partes interesadas, que señalaron como principales beneficios la mejor calidad asistencial y la seguridad del paciente [[21]](#ref-21).

| País o región | Situación |
|---|---|
| **Unión Europea y EEE** | MyHealth@EU intercambia resúmenes de pacientes y recetas electrónicas entre países. Una presentación de la Comisión Europea de 2026 informó de 17 Estados miembros más Noruega en funcionamiento, con la mayoría del resto planeando incorporarse [[2]](#ref-2) [[22]](#ref-22). El Reglamento EHDS hace obligatorio el intercambio de resúmenes de pacientes para 2029 [[23]](#ref-23). |
| **Canadá** | El Resumen Panacanadiense del Paciente (PS-CA), aprobado por Canada Health Infoway en octubre de 2022, se basa en el IPS con adaptaciones canadienses [[4]](#ref-4). |
| **Australia** | El AU Patient Summary, basado en el IPS y AU Core, es desarrollado por HL7 Australia mediante el programa Sparked [[5]](#ref-5) [[24]](#ref-24). |
| **Suiza** | CH IPS 2.0.0 (uso de prueba) de HL7 Switzerland se basa en el IPS y CH Core. Un perfil aparte añade lo que necesita la historia clínica electrónica del paciente suiza [[6]](#ref-6). |
| **Estados Unidos** | No hay mandato federal para el IPS. EE. UU. usa US Core y USCDI. Las agencias federales participan en el trabajo internacional del IPS y algunas redes lo respaldan voluntariamente [[18]](#ref-18). |
| **América Latina y el Caribe** | Los ministerios de salud de RACSEL usan la guía regional IPS-LAC. En 2023, 16 países intercambiaron documentos IPS-LAC en un connectathon en São Paulo [[16]](#ref-16). |
| **Japón** | Investigadores han construido y validado una aplicación de resumen del paciente basada en el IPS para casos de uso comunes en Japón, usando JP Core [[19]](#ref-19). |
| **Taiwán y Filipinas** | Un informe de implementación de 2025 describe un registro personal de salud transfronterizo que usa FHIR y está alineado con el IPS [[25]](#ref-25). |
| **G7** | En 2021 los ministros de salud del G7 se comprometieron a trabajar hacia el IPS y publicaron una hoja de ruta del IPS [[26]](#ref-26). |
| **OMS** | La Red Mundial de Certificación de Salud Digital de la OMS incluye dominios de confianza basados en el IPS, como un IPS verificable para la peregrinación [[14]](#ref-14). |


## Leyes, reglamentos y políticas por país y región

El IPS es un estándar, no una ley. Las leyes deciden si un país debe intercambiar resúmenes de pacientes, en qué formato y bajo qué normas de privacidad. Esto es un resumen, no asesoramiento jurídico. Consulte siempre el texto vigente de la ley.

| Jurisdicción | Ley o política | Qué significa para el IPS |
|---|---|---|
| **Unión Europea** | **Reglamento sobre el Espacio Europeo de Datos Sanitarios (EHDS), (UE) 2025/327.** Publicado el 5 de marzo de 2025; en vigor desde el 26 de marzo de 2025 [[23]](#ref-23) [[27]](#ref-27). | Los resúmenes de pacientes son una «categoría prioritaria». El intercambio en el formato europeo de intercambio de historias clínicas electrónicas debe funcionar en todos los Estados miembros para 2029. Las imágenes médicas, los resultados de pruebas y los informes de alta siguen en 2031 [[28]](#ref-28). El formato de los resúmenes de pacientes se basa en el HL7 IPS. |
| **Unión Europea** | **Directiva 2011/24/UE** relativa a la aplicación de los derechos de los pacientes en la asistencia sanitaria transfronteriza [[29]](#ref-29). | Creó la Red de Sanidad Electrónica (eHealth Network), que acordó las directrices del resumen del paciente en las que se basa MyHealth@EU. |
| **Unión Europea** | **Reglamento General de Protección de Datos (RGPD), (UE) 2016/679** [[30]](#ref-30). | Los datos de salud son una categoría especial. Cada intercambio de IPS necesita una base jurídica y garantías adecuadas. |
| **Estados Unidos** | **Ley 21st Century Cures y las normas sobre bloqueo de información** [[31]](#ref-31); el **Marco de Interoperabilidad de CMS** voluntario (2025) [[17]](#ref-17). | Ninguna ley exige el IPS. Las leyes exigen el acceso a la información de salud electrónica y su intercambio, usando US Core y USCDI. El respaldo al IPS es voluntario. |
| **Canadá** | Leyes provinciales y territoriales de información sanitaria. La **Ley de Atención Conectada para los Canadienses** (Connected Care for Canadians Act, proyecto de ley C-72) federal se presentó en 2024 pero no se aprobó antes de que el Parlamento fuera prorrogado en 2025. | PS-CA es una especificación panacanadiense, no un requisito legal. La adopción la lideran las provincias y territorios con Canada Health Infoway [[4]](#ref-4). |
| **Reino Unido** | **Ley de Datos (Uso y Acceso) de 2025** (Data (Use and Access) Act 2025) [[32]](#ref-32). | Incluye facultades para fijar estándares de información para las TI de salud y de atención social para adultos. El Reino Unido acogió el compromiso del G7 sobre el IPS en 2021 [[26]](#ref-26). |
| **Australia** | **Ley de Registros de Mi Salud de 2012** (My Health Records Act 2012) y las enmiendas de «compartir por defecto» de 2025. | El AU Patient Summary es una especificación nacional desarrollada mediante Sparked [[5]](#ref-5) [[24]](#ref-24). |
| **Suiza** | **Ley federal de 19 de junio de 2015 sobre el Expediente Electrónico del Paciente (EPRA, SR 816.1)**, en vigor desde el 15 de abril de 2017 [[33]](#ref-33). | CH IPS incluye un perfil para documentos del expediente electrónico del paciente suizo [[6]](#ref-6). |
| **América Latina y el Caribe** | Acuerdos regionales mediante RACSEL y PH4H, con apoyo del Banco Interamericano de Desarrollo a un marco jurídico regional [[16]](#ref-16). | IPS-LAC es el formato regional acordado para el intercambio transfronterizo. |
| **G7** | **Comunicado de los Ministros de Salud**, Oxford, junio de 2021, y la **Hoja de ruta del IPS del G7**, diciembre de 2021 [[26]](#ref-26) [[34]](#ref-34). | Un compromiso político de trabajar hacia el IPS y el acceso del paciente, no una ley vinculante. |


## Ventajas e inconvenientes

| Ventajas | Inconvenientes |
|---|---|
| **Atención no programada más segura.** Los profesionales ven alergias, medicamentos y problemas en segundos. | **Solo es tan bueno como su fuente.** Unos datos de origen obsoletos o erróneos dan un resumen obsoleto o erróneo. |
| **Un formato, en todo el mundo.** Una sola implementación atiende necesidades nacionales y transfronterizas. | **Variación nacional.** Los perfiles nacionales añaden reglas, así que un «IPS válido» en un país puede requerir trabajo para ser aceptado en otro. |
| **Construido sobre estándares abiertos y maduros:** ISO, CEN, HL7 FHIR y CDA, SNOMED CT y LOINC. | **Carga terminológica.** Mapear códigos locales a SNOMED CT y LOINC es un trabajo duro, y el SNOMED CT completo requiere una licencia más allá del subconjunto IPS gratuito. |
| **Legible y computable.** Narrativa para las personas, datos codificados para el software y la traducción. | **La narrativa y los datos codificados pueden discrepar** si el generador es descuidado, y los receptores pueden confiar en el equivocado. |
| **Empoderamiento del paciente.** Los pacientes pueden conservar y compartir su propio resumen. | **Riesgo de privacidad y consentimiento.** Un resumen portátil es sensible, y las leyes y los modelos de consentimiento difieren según el país. |
| **Especificaciones gratuitas** y terminología IPS gratuita reducen costes [[12]](#ref-12). | **Cambios de versión.** STU 1, STU 1.1 y STU 2 coexisten, y el formato EHDS hace referencia a una versión anterior [[28]](#ref-28). |
| **Reutilizable** para certificados de vacunación, investigación y registros [[7]](#ref-7) [[8]](#ref-8). | **Deliberadamente mínimo.** No sustituye a las historias clínicas completas ni a los documentos de especialidad, y las lagunas para usos secundarios requieren extensiones [[7]](#ref-7). |
| **Fuerte respaldo** de gobiernos, la UE, el G7, la OMS y los organismos de normalización. | **Adopción desigual.** Muchos países y proveedores siguen en fase piloto, y la concienciación de los pacientes es baja. |


## Planes y direcciones futuras

- **UE, 2029:** intercambio de resumen del paciente y receta electrónica operativo en todos los Estados miembros de la UE bajo el EHDS [[23]](#ref-23) [[28]](#ref-28).
- **UE, 2031:** las imágenes médicas, los resultados de laboratorio y los informes de alta se suman al formato europeo de intercambio de historias clínicas electrónicas [[28]](#ref-28).
- **Ampliación de MyHealth@EU:** más países se incorporan y surgen nuevos servicios para resultados de laboratorio, informes de alta e imágenes médicas [[2]](#ref-2) [[22]](#ref-22).
- **Adopción de FHIR IPS STU 2:** los implementadores pasan a las secciones Alertas e Historia del paciente, las secciones vacías explícitas y la terminología SNOMED CT IPS [[9]](#ref-9).
- **Australia:** publicación de la Versión 1 del AU Patient Summary, prevista para 2026 [[24]](#ref-24).
- **Proyecto de Buenas Prácticas del IPS:** un esfuerzo comunitario para documentar las lecciones aprendidas, con trabajos que comienzan en 2026.
- **Red de confianza de la OMS:** más dominios de confianza basados en el IPS para documentos de salud verificables y portátiles [[14]](#ref-14).
- **SMART Health Links:** estandarizados a través de HL7, para compartir bajo control del paciente [[10]](#ref-10).
- **América Latina y el Caribe:** mayor intercambio de IPS-LAC mediante PH4H [[16]](#ref-16).
- **Investigación y uso secundario:** trabajo para ampliar los resúmenes de pacientes para la investigación clínica y la IA, manteniendo mínimo el núcleo [[7]](#ref-7).


## Glosario

| Término | Significado |
|---|---|
| **IPS** | Resumen Internacional del Paciente (International Patient Summary) |
| **FHIR** | Fast Healthcare Interoperability Resources, el estándar moderno de HL7 basado en API |
| **CDA** | Clinical Document Architecture, el estándar de documentos XML de HL7 |
| **IG** | Guía de implementación (Implementation Guide), un conjunto de perfiles y reglas para aplicar un estándar |
| **Perfil** | Una versión restringida de un recurso FHIR para un uso específico |
| **SNOMED CT** | Systematized Nomenclature of Medicine – Clinical Terms |
| **LOINC** | Logical Observation Identifiers Names and Codes |
| **SMART Health Links** | Un estándar para compartir datos de salud mediante un enlace o un código QR |
| **JIC** | Joint Initiative Council for Global Health Informatics Standardization (Consejo de la Iniciativa Conjunta para la Normalización de la Informática de la Salud Global) |


## Más información

- Guía de implementación HL7 FHIR IPS: <https://hl7.org/fhir/uv/ips/>
- Compilación continua del IPS: <https://build.fhir.org/ig/HL7/fhir-ips/>
- Sitio del proyecto Resumen Internacional del Paciente: <https://international-patient-summary.net/>
- ISO 27269 (Informática sanitaria — Resumen internacional del paciente): <https://www.iso.org/standard/79491.html>
- Terminología SNOMED CT IPS: <https://www.snomed.org/international-patient-summary-terminology>
- SMART Health Links: <https://docs.smarthealthit.org/smart-health-links/>


## Recursos

Estos enlaces abarcan fuentes, especificaciones, software, proyectos, vídeos, libros e investigaciones sobre el IPS. La mayoría se comprobaron al escribir esta página. Algunos sitios de editoriales bloquean las comprobaciones automáticas y se marcan como *(no comprobado)*.

### Especificaciones y estándares oficiales

- [Guía de implementación HL7 FHIR IPS, versión publicada vigente](https://hl7.org/fhir/uv/ips/) es la especificación FHIR de referencia.
- [Guía de implementación HL7 FHIR IPS, STU 2](https://hl7.org/fhir/uv/ips/STU2/)
- [Guía de implementación HL7 FHIR IPS, STU 1.1](https://hl7.org/fhir/uv/ips/STU1.1/)
- [Historial de publicación de HL7 FHIR IPS](https://www.hl7.org/fhir/uv/ips/history.html) enumera todas las versiones publicadas.
- [Compilación continua de HL7 FHIR IPS](https://build.fhir.org/ig/HL7/fhir-ips/) es el trabajo más reciente en curso, aún sin votar.
- [Estructura del Resumen Internacional del Paciente](https://hl7.org/fhir/uv/ips/en/Structure-of-the-International-Patient-Summary.html) explica las secciones y los perfiles.
- [Convenciones de diseño del IPS](https://build.fhir.org/ig/HL7/fhir-ips/en/Design-Conventions.html) trata de must-support, datos ausentes y narrativa.
- [Generación del IPS e inclusión de datos](https://build.fhir.org/ig/HL7/fhir-ips/en/Generation-and-Data-Inclusion.html) trata de `$summary` y de cómo seleccionar el contenido.
- [Guía de implementación HL7 CDA IPS, compilación continua](https://build.fhir.org/ig/HL7/CDA-IPS/)
- [Ficha de producto HL7 CDA IPS](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=483)
- [ISO 27269, Informática sanitaria — Resumen internacional del paciente](https://www.iso.org/standard/79491.html) *(no comprobado)*
- [Comité ISO/TC 215 de Informática sanitaria](https://www.iso.org/committee/54960.html) *(no comprobado)*
- [Perfil IHE FHIR Resumen Internacional del Paciente (FIIO)](https://profiles.ihe.net/PCC/FIIO/volume-1.html)
- [Suplemento IHE PCC Resumen Internacional del Paciente, 2020 (PDF)](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS_Rev1-0_PC_2020-03-17.pdf)
- [Guía de implementación HL7 SMART Health Cards and Links](https://hl7.org/fhir/uv/smart-health-cards-and-links/)
- [Documentación de SMART Health Links](https://docs.smarthealthit.org/smart-health-links/)
- [HL7 FHIR Acceso Internacional del Paciente (IPA)](https://hl7.org/fhir/uv/ipa/) es una especificación hermana para el acceso del paciente mediante API.
- [Especificación base HL7 FHIR R4](https://hl7.org/fhir/R4/), sobre la que se construye el IPS.

### Repositorios de código fuente

- [HL7/fhir-ips](https://github.com/HL7/fhir-ips) contiene el código fuente de la IG FHIR IPS en FHIR Shorthand.
- [HL7/cda-ips](https://github.com/HL7/cda-ips) contiene el código fuente de la IG CDA IPS.
- [hl7-eu/eps](https://github.com/hl7-eu/eps) contiene el código fuente del Resumen del Paciente de HL7 Europe.
- [hl7ch/ch-ips](https://github.com/hl7ch/ch-ips) contiene el IPS suizo, con un visor y un generador en desarrollo.
- [Tema de GitHub: international-patient-summary](https://github.com/topics/international-patient-summary) enumera repositorios de la comunidad.

### Adaptaciones nacionales y regionales

- [Resumen del Paciente de HL7 Europe (EPS), compilación continua](https://build.fhir.org/ig/hl7-eu/eps/)
- [AU Patient Summary (Australia), compilación continua](https://build.fhir.org/ig/hl7au/au-fhir-ps/)
- [Estructura IPS de Trillium II (HL7 Europe)](https://hl7.eu/fhir/build/trillium2/site/ipsStructure.html) procede del proyecto UE–EE. UU. que ayudó a iniciar el IPS.
- [eHealth Suisse](https://www.ehealthsuisse.ch/) es el centro de competencia de Suiza para la salud digital y su adopción del IPS.
- [MyHealth@EU, servicios de salud digital transfronterizos](https://health.ec.europa.eu/ehealth-digital-health-and-care/electronic-cross-border-health-services_en)
- [Acción Conjunta Xt-EHR](https://www.xt-ehr.eu/) prepara los formatos del Espacio Europeo de Datos Sanitarios, incluido el resumen del paciente.

### Software y herramientas

- [IPS Viewer](https://www.ipsviewer.com) ([código fuente: jddamore/IPSviewer](https://github.com/jddamore/IPSviewer)) es un visor de IPS de código abierto basado en navegador.
- [uwcirg/shl-ips-viewer](https://github.com/uwcirg/shl-ips-viewer) muestra un IPS compartido mediante un SMART Health Link.
- [smart-on-fhir/smart-health-links](https://github.com/smart-on-fhir/smart-health-links) es la implementación de referencia de SMART Health Links.
- [Generador de IPS de HAPI FHIR](https://hapifhir.io/hapi-fhir/docs/server_ips/introduction.html) ([código fuente: hapifhir/hapi-fhir](https://github.com/hapifhir/hapi-fhir)) es un módulo de servidor Java de código abierto que implementa `$summary`.
- [Documentación del IPS del servidor HAPI FHIR JPA](https://hapifhir.io/hapi-fhir/docs/server_jpa/ips.html)
- [Inferno IPS Test Kit](https://inferno.healthit.gov/test-kits/ips) ([código fuente: inferno-framework/ips-test-kit](https://github.com/inferno-framework/ips-test-kit)) es un kit de pruebas de conformidad de código abierto.
- [FHIR Validator](https://validator.fhir.org/) valida paquetes IPS frente a los perfiles de la IG.
- [Simplifier: paquete hl7.fhir.uv.ips](https://simplifier.net/packages/hl7.fhir.uv.ips) incluye el paquete, los perfiles y ejemplos.
- [Registro de paquetes FHIR](https://registry.fhir.org/)
- [FHIR Shorthand (FSH) School](https://fshschool.org/) enseña el lenguaje en el que está escrita la IG del IPS.
- [CommonHealth](https://www.commonhealth.org/) es una aplicación para pacientes que genera un IPS y lo comparte mediante SMART Health Links.
- [WHO SMART Trust](https://github.com/WorldHealthOrganization/smart-trust) es el marco de confianza de la Red Mundial de Certificación de Salud Digital de la OMS.

### Organizaciones y proyectos

- [Sitio del proyecto Resumen Internacional del Paciente](https://international-patient-summary.net/) tiene noticias, informes de adopción y materiales educativos.
- [IPS para desarrolladores de TI sanitarias](https://international-patient-summary.net/health-it-developer/)
- [HL7 International](https://www.hl7.org/)
- [IHE International](https://www.ihe.net/)
- [SNOMED International](https://www.snomed.org/)
- [Terminología SNOMED CT IPS](https://www.snomed.org/international-patient-summary-terminology) es un subconjunto gratuito para el uso del IPS.
- [LOINC](https://loinc.org/) *(no comprobado)*
- [Consejo de la Iniciativa Conjunta para la Normalización de la Informática de la Salud Global (JIC)](http://www.jointinitiativecouncil.org/)
- [Alianza Mundial para la Salud Digital (GDHP)](https://gdhp.health/)
- [Directrices WHO SMART](https://smart.who.int/)
- [Red Mundial de Certificación de Salud Digital de la OMS](https://www.who.int/initiatives/global-digital-health-certification-network)

### Comunidad y eventos

- [chat.fhir.org](https://chat.fhir.org/) es el chat de la comunidad FHIR, que tiene un canal IPS activo.
- [Connectathons de HL7 FHIR](https://www.hl7.org/events/fhir-connectathon/)
- [Connectathons de IHE](https://www.ihe.net/participate/connectathon/)

### Vídeos

- [HIMSS20: IPS para guías de atención computables en 200 segundos o menos (IHE International, YouTube)](https://www.youtube.com/watch?v=xjEzGM8kBPw)
- [Canal de YouTube de IHE International](https://www.youtube.com/@IHEIntl) tiene paneles de Connectathon y sesiones sobre el IPS.
- [Noticias del sitio del proyecto IPS](https://international-patient-summary.net/) enlaza con muchos seminarios web grabados, entre ellos:
  - el panel del IPS en el IHE North America Connectathon, 2024
  - la sesión del IPS en FHIR DevDays 2023
  - Grahame Grieve sobre IPS e IPA, IHE Connectathon Montreux 2022
  - la conferencia magistral de SNOMED CT Expo 2022
  - Matthew Rahn sobre el IPS en el GDHP
  - el seminario web transfronterizo «Global Passport» de HL7
- [Búsqueda en YouTube: International Patient Summary](https://www.youtube.com/results?search_query=international+patient+summary)

### Libros

- Tim Benson y Grahame Grieve, [*Principles of Health Interoperability: FHIR, HL7 and SNOMED CT*](https://link.springer.com/book/10.1007/978-3-030-56883-2), 4.ª edición, Springer, 2020. Trata de FHIR, los recursos de resumen clínico y la terminología.

### Artículos de investigación y otros artículos

- Laleci Erturkmen G. B., Sinaci A. A., Namli T., Boonstra M., et al., "[An assessment of the European Patient Summary for clinical research: a case study in cardiology](https://doi.org/10.3389/fmed.2024.1481551)", *Frontiers in Medicine*, 2024.
- Lee H., Huang J., Huang S., Chen W., et al., "[Implementing a Cross-Border Next-Generation Personal Health Record in the Philippines and Taiwan: An Implementation Case Report Using Health Level 7 International Fast Healthcare Interoperability Resources](https://doi.org/10.2196/56272)", *JMIR Formative Research*, 2025.
- Song C., Nakayama M., "[Implementation of a Patient Summary Web Application According to the International Patient Summary and Validation in Common Use Cases in Japan](https://doi.org/10.1007/s10916-023-01993-6)", *Journal of Medical Systems*, 2023.
- Schippers D., Spil T., Stegwee R., Folmer E., Donnelly S., "[The adoption and diffusion of the International Patient Summary](https://doi.org/10.24251/hicss.2025.425)", *Proceedings of the 58th Hawaii International Conference on System Sciences (HICSS)*, 2025.
- da Silva Carvalho N., Papadimitriou A., Stegwee R., Gille H., et al., "[Accelerating European electronic health record exchange format (EEHRxF) implementation across Europe: a policy perspective](https://doi.org/10.3389/fmed.2025.1648170)", *Frontiers in Medicine*, 2025.
- Kay S., Cangioli G., Nusbaum M., "[The International Patient Summary and the extensibility requirement](https://international-patient-summary.net/the-international-patient-summary-and-the-extensibility-requirement/)", *Studies in Health Technology and Informatics* (pHealth), 2020.
- D'Amore J., Cangioli G., Hausam R., "[Advancing the International Patient Summary](https://international-patient-summary.net/advancing-the-international-patient-summary/)"
- "[Towards the Austrian Patient Summary](https://international-patient-summary.net/towards-the-austrian-patient-summary/)", *Studies in Health Technology and Informatics* (dHealth).
- "[Revival of the International Patient Summary (IPS)](https://smiledigitalhealth.com/our-blog/revival-of-the-international-patient-summary-ips)", blog de Smile Digital Health.
- [Búsqueda en PubMed: "international patient summary"](https://pubmed.ncbi.nlm.nih.gov/?term=%22international+patient+summary%22) para bibliografía revisada por pares.


## Referencias

Las citas numeradas del texto, como [1], enlazan con la entrada correspondiente a continuación. Los enlaces se comprobaron en noviembre de 2026. Las leyes, las cifras de adopción y las versiones cambian, así que consulte la fuente para conocer la situación actual.

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

### Lecturas adicionales

Estas fuentes no se citan arriba, pero son las referencias principales del propio estándar.

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
