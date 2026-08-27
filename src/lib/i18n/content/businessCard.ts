import type { Locale } from '../config';
import type { LocalizedPageContent } from './types';

export function getDigitalBusinessCardContent(locale: Locale): LocalizedPageContent {
  switch (locale) {
    case 'es':
      return {
        slug: 'digital-business-card',
        qrTypeId: 'vcard',
        title: 'Generador de Tarjetas de Visita Digitales — Contactless vCard QR',
        description: 'Crea tarjetas de visita digitales con datos de contacto, teléfono, email y redes sociales. Compatible con iOS y Android. Descarga en SVG y PNG.',
        h1: 'Generador de Tarjetas de Visita Digitales',
        subheadline: 'Crea modernas tarjetas de visita sin contacto. Permite a clientes y contactos profesionales guardar tus credenciales con un solo toque.',
        heading: 'Tarjeta de Visita Digital',
        subheading: 'Moderniza tu networking profesional con intercambio de contactos ecológico e instantáneo.',
        overviewTitle: '¿Qué es una Tarjeta de Visita Digital?',
        overviewParagraphs: [
          'Un código QR de tarjeta de visita digital enlaza directamente a un perfil de contacto interactivo y optimizado para móviles que incluye tu foto profesional, nombre, cargo, biografía corporativa, números de teléfono, email directo, enlaces web, perfiles sociales y un botón para descargar el archivo de contacto (.vcf).',
          'A diferencia de las tarjetas de papel tradicionales que suelen perderse o quedar desactualizadas, una tarjeta digital permite actualizar tus datos sin tener que desechar material impreso.',
          'Nuestra plataforma te permite crear códigos vCard estáticos o páginas interactivas dinámicas listas para descargar en SVG y PNG.'
        ],
        sectors: [
          { name: 'Agentes Inmobiliarios', description: 'En tarjetas de visita con enlaces a carteras de inmuebles activas.', benefit: 'Atención inmediata a compradores de viviendas.' },
          { name: 'Directores y Equipos de Ventas', description: 'Estandarización de imagen corporativa y enlaces a calendarios.', benefit: 'Aumenta el número de reuniones concertadas.' },
          { name: 'Fundadores Tecnológicos y Creadores', description: 'En fondos de pantalla del móvil y acreditaciones de eventos.', benefit: 'Elimina el papel con una imagen moderna.' },
          { name: 'Médicos y Especialistas de Salud', description: 'En tarjetas de cita con enlaces al portal del paciente.', benefit: 'Acceso directo a consultas y urgencias.' },
          { name: 'Abogados y Consultores Financieros', description: 'Tarjetas de presentación para clientes de alto patrimonio.', benefit: 'Acceso rápido y verificado al despacho.' },
          { name: 'Conferenciantes y Ponentes', description: 'En la última diapositiva para conectar con el público.', benefit: 'Networking masivo en congresos.' }
        ],
        howItWorks: [
          { title: '1. Rellena los Datos Profesionales', description: 'Escribe tu nombre, empresa, cargo, teléfono, email y redes sociales.' },
          { title: '2. Personaliza el Diseño de la Tarjeta', description: 'Elige tu combinación de colores corporativos y añade tu foto o logotipo.' },
          { title: '3. Exporta para Imprenta y Pantallas', description: 'Descarga en SVG vectorial o PNG para fondo de pantalla del móvil.' }
        ],
        useCases: [
          { title: 'Reverso de Tarjetas Físicas', description: 'Impreso en el reverso de tarjetas de visita de papel para sincronización digital.', example: 'Tarjeta ejecutiva con QR en el reverso.' },
          { title: 'Fondo de Bloqueo del Teléfono', description: 'Guardado como imagen de bloqueo para escanear de móvil a móvil en eventos.', example: 'Networking en ferias sin llevar tarjetas de papel.' },
          { title: 'Acreditaciones de Ferias', description: 'Impreso en lanyards de congresos para intercambio rápido de contactos.', example: 'Asistente de congreso conectando con decenas de colegas.' },
          { title: 'Banners en Firmas de Correo', description: 'Pie de página en correos electrónicos corporativos.', example: 'Firma de email profesional con llamada de escaneo.' }
        ],
        tips: [
          'Formato Internacional: Incluye siempre el prefijo de país (+34, +1, etc.) en tus teléfonos.',
          'Alto Contraste: Módulos oscuros sobre fondo blanco para escanear de pantalla a pantalla.',
          'Tamaño Mínimo: Mantén al menos 25 x 25 mm al imprimir en tarjetas físicas.',
          'SVG para Acabados Especiales: Utiliza SVG vectorial para barniz UVI o estampación en oro/plata.',
          'Prueba en iPhone y Android: Comprueba que el contacto se guarde de forma limpia en ambos sistemas.'
        ],
        technicalNotes: 'Soporta estándares vCard 3.0 y páginas de aterrizaje responsive con microdatos HTML5.',
        faqs: [
          { question: '¿Cómo funciona una tarjeta de visita digital al escanearla?', answer: 'Al escanear el código QR con la cámara del móvil, se abre tu perfil interactivo con un botón para guardar todos tus datos en los contactos del teléfono con un toque.' },
          { question: '¿Necesita la otra persona una aplicación especial?', answer: 'No, cualquier smartphone actual lee el código directamente con su cámara nativa.' },
          { question: '¿Puedo incluir mi foto y el logo de la empresa?', answer: 'Sí, puedes subir tu avatar o logotipo y el sistema ajustará automáticamente la corrección de errores al nivel Alto (30%).' },
          { question: '¿Puedo ponerlo de fondo de pantalla en mi móvil?', answer: 'Sí, descarga la imagen en PNG y establécela como fondo de pantalla de bloqueo para mostrarla en eventos.' },
          { question: '¿Caducan estas tarjetas de visita digitales?', answer: 'Los códigos estáticos son permanentes y funcionarán siempre sin cuotas ni caducidad.' },
          { question: '¿Son privados mis datos de contacto?', answer: 'Sí, la generación estática ocurre 100% en la memoria de tu navegador y nunca se almacena en servidores externos.' }
        ],
        relatedTools: [
          { name: 'QR de Contacto vCard', slug: 'vcard-qr-code-generator', description: 'Crea códigos vCard 3.0 ligeros y offline.' },
          { name: 'QR de Redes Sociales', slug: 'social-media-qr-code', description: 'Agrupa todos tus perfiles sociales en un solo enlace.' },
          { name: 'QR de Correo Email', slug: 'email-qr-code-generator', description: 'Borradores de email pre-redactados para negocios.' },
          { name: 'QR de WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Inicia chats de WhatsApp con clientes potenciales.' }
        ]
      };
    case 'de':
      return {
        slug: 'digital-business-card',
        qrTypeId: 'vcard',
        title: 'Digitale Visitenkarte QR Code Generator — Kontaktloser vCard QR',
        description: 'Erstellen Sie digitale Visitenkarten mit Foto, Kontaktdaten, E-Mail und Social Media. Kompatibel mit iOS und Android. Vektor-SVG & PNG Download.',
        h1: 'Digitale Visitenkarte QR Code Generator',
        subheadline: 'Erstellen Sie moderne kontaktlose Visitenkarten. Ermöglichen Sie Geschäftspartnern das Speichern Ihrer Daten mit einem Klick.',
        heading: 'Digitale Visitenkarte',
        subheading: 'Bringen Sie Ihr berufliches Networking auf das nächste Level mit sofortigem Kontaktaustausch.',
        overviewTitle: 'Was ist eine Digitale Visitenkarte?',
        overviewParagraphs: [
          'Ein QR-Code für digitale Visitenkarten verlinkt direkt auf ein interaktives, mobiloptimiertes Profil mit Ihrem Portraitfoto, Name, Position, Kurzbiografie, Telefonnummern, Direkt-E-Mail, Webseiten, Social-Media-Profilen und einem Button zum Herunterladen der vCard (.vcf).',
          'Herkömmliche Papierkarten veralten schnell bei Job- oder Rufnummernwechseln. Ein digitales Profil lässt sich jederzeit aktualisieren, ohne neue Karten drucken zu müssen.',
          'Erstellen Sie statische vCard-Codes oder interaktive Online-Profile mit SVG- und PNG-Download.'
        ],
        sectors: [
          { name: 'Immobilienmakler', description: 'Auf Visitenkarten mit direktem Link zum aktuellen Immobilienangebot.', benefit: 'Kaufinteressenten haben alle Objektdaten griffbereit.' },
          { name: 'Vertriebsteams & Sales', description: 'Einheitliche digitale Visitenkarten mit Kalender-Buchungslink.', benefit: 'Steigert die Anzahl vereinbarter Kundentermine.' },
          { name: 'Tech-Gründer & Creator', description: 'Als Bildschirmschoner und auf Messe-Ausweisen.', benefit: 'Papiersparender, innovativer Auftritt.' },
          { name: 'Ärzte & Spezialisten', description: 'Auf Terminzetteln mit Verlinkung zum Patientenportal.', benefit: 'Direkter Draht für Patienten.' },
          { name: 'Anwälte & Finanzberater', description: 'Für vermögende Mandanten mit geprüften Daten.', benefit: 'Schneller und vertraulicher Kontakt.' },
          { name: 'Referenten auf Konferenzen', description: 'Auf der Schlussfolie zum direkten Vernetzen mit dem Publikum.', benefit: 'Dutzende neue B2B-Kontakte in Sekunden.' }
        ],
        howItWorks: [
          { title: '1. Daten Eingeben', description: 'Name, Firma, Funktion, Telefon, E-Mail und Profile eintragen.' },
          { title: '2. Visitenkarte Gestalten', description: 'Farben anpassen und Foto oder Firmenlogo hochladen.' },
          { title: '3. Herunterladen & Teilen', description: 'Als Vektor-SVG für Druckereien oder PNG als Handy-Hintergrund exportieren.' }
        ],
        useCases: [
          { title: 'Rückseite von Visitenkarten', description: 'Gedruckt auf Papier für schnellen digitalen Import.', example: 'Visitenkarte mit dezentem vCard-Code.' },
          { title: 'Sperrbildschirm-Hintergrund', description: 'Auf dem Smartphone gespeichert für spontanes Networking.', example: 'Messeteilnehmer ohne Papierkarten.' },
          { title: 'Kongress-Ausweise', description: 'Auf Namensschildern für raschen Austausch.', example: 'B2B-Konferenz.' },
          { title: 'E-Mail-Signaturen', description: 'Im Fußbereich geschäftlicher E-Mails eingebunden.', example: 'Signatur mit Direkt-Speichern-Hinweis.' }
        ],
        tips: [
          'Internationales Format: Ländervorwahl (z. B. +49) immer voranstellen.',
          'Hoher Kontrast: Dunkles Muster auf weißem Grund für Bildschirm-Scans.',
          'Mindestgröße: Mindestens 25 x 25 mm auf gedruckten Karten.',
          'SVG für Prägungen: SVG sorgt für scharfe Kanten bei Druckveredelungen.',
          'Kameratest auf iOS & Android: Funktionsprüfung vor dem Druck.'
        ],
        technicalNotes: 'Unterstützt vCard 3.0 und responsive HTML5-Mikrodaten.',
        faqs: [
          { question: 'Wie funktioniert die digitale Visitenkarte?', answer: 'Beim Scannen öffnet sich Ihr interaktives Profil mit einem Button, der alle Daten sofort in den Smartphone-Kontakten speichert.' },
          { question: 'Wird eine spezielle App benötigt?', answer: 'Nein, jedes moderne Smartphone liest den QR-Code direkt mit der Standard-Kamera.' },
          { question: 'Kann ich mein Foto und Firmenlogo einbinden?', answer: 'Ja, laden Sie Ihr Bild hoch und die Fehlerkorrektur wird automatisch auf Stufe H (30%) gesetzt.' },
          { question: 'Kann ich den Code als Handy-Hintergrund nutzen?', answer: 'Ja, laden Sie das PNG herunter und stellen Sie es als Sperrbildschirm ein.' },
          { question: 'Laufen digitale Visitenkarten ab?', answer: 'Nein, die statischen Codes sind dauerhaft und ohne laufende Kosten gültig.' },
          { question: 'Sind meine Daten geschützt?', answer: 'Ja, die Erstellung erfolgt lokal im Browser ohne Speicherung auf externen Servern.' }
        ],
        relatedTools: [
          { name: 'vCard Visitenkarte', slug: 'vcard-qr-code-generator', description: 'Schlanke Offline-vCard-Codes.' },
          { name: 'Social Media QR Code', slug: 'social-media-qr-code', description: 'Alle Social-Profile in einem Link.' },
          { name: 'E-Mail QR Generator', slug: 'email-qr-code-generator', description: 'Vorausgefüllte E-Mails per Scan.' },
          { name: 'WhatsApp QR Code', slug: 'whatsapp-qr-code-generator', description: 'Kundenchats direkt auf WhatsApp starten.' }
        ]
      };
    case 'fr':
      return {
        slug: 'digital-business-card',
        qrTypeId: 'vcard',
        title: 'Générateur de Carte de Visite Digitale — vCard Sans Contact',
        description: 'Créez votre carte de visite digitale avec photo, téléphone, email et réseaux sociaux. Compatible iOS et Android. Téléchargement SVG et PNG.',
        h1: 'Générateur de Carte de Visite Digitale',
        subheadline: 'Créez des cartes de visite sans contact modernes. Permettez à vos interlocuteurs d\'enregistrer votre profil complet en un instant.',
        heading: 'Carte de Visite Digitale',
        subheading: 'Modernisez votre réseau professionnel grâce à un partage de contact immédiat et écologique.',
        overviewTitle: 'Qu\'est-ce qu\'une Carte de Visite Digitale ?',
        overviewParagraphs: [
          'Un QR code de carte de visite digitale redirige vers un profil mobile interactif comprenant votre photo professionnelle, nom, titre, biographie, téléphones, email, liens web, réseaux sociaux et un bouton d\'enregistrement direct vCard (.vcf).',
          'Contrairement aux cartes papier qui finissent souvent à la poubelle, votre profil digital peut être mis à jour sans gaspillage de papier.',
          'Générez des vCards statiques ou des pages profil interactives prêtes à télécharger en SVG et PNG.'
        ],
        sectors: [
          { name: 'Agents Immobiliers', description: 'Sur cartes avec lien direct vers les annonces en ligne.', benefit: 'Disponibilité immédiate pour les acquéreurs.' },
          { name: 'Équipes Commerciales', description: 'Cartes standardisées avec lien de prise de rendez-vous en ligne.', benefit: 'Augmente le taux de conversion des réunions.' },
          { name: 'Fondateurs Tech & Créateurs', description: 'En fond d\'écran de smartphone et badges de salon.', benefit: 'Image innovante et zéro déchet.' },
          { name: 'Médecins & Professionnels de Santé', description: 'Sur fiches de rendez-vous pour les coordonnées du cabinet.', benefit: 'Accès rapide pour les patients.' },
          { name: 'Avocats & Notaires', description: 'Pour les rendez-vous d\'affaires avec des coordonnées complètes.', benefit: 'Échange sécurisé et professionnel.' },
          { name: 'Conférenciers & Formateurs', description: 'Sur la diapositive finale pour échanger avec la salle.', benefit: 'Des dizaines de contacts en direct.' }
        ],
        howItWorks: [
          { title: '1. Remplissez votre Profil', description: 'Indiquez nom, entreprise, fonction, téléphone, email et réseaux sociaux.' },
          { title: '2. Personnalisez la Carte', description: 'Choisissez vos couleurs et ajoutez votre photo ou logo.' },
          { title: '3. Téléchargez et Partagez', description: 'Exportez en SVG vectoriel pour imprimer ou PNG pour écran.' }
        ],
        useCases: [
          { title: 'Verso de Cartes Papier', description: 'Imprimé au dos de cartes pour synchronisation numérique.', example: 'Carte d\'affaires avec QR au dos.' },
          { title: 'Fond d\'Écran de Smartphone', description: 'Enregistré sur écran de verrouillage pour les salons.', example: 'Réseautage lors d\'événements professionnels.' },
          { title: 'Badges de Congrès', description: 'Sur tours de cou pour échange express.', example: 'Participant à une conférence B2B.' },
          { title: 'Signatures d\'E-mail', description: 'En bas de vos courriels avec appel au scan.', example: 'Signature professionnelle.' }
        ],
        tips: [
          'Format International : Indicatif pays (+33 pour la France) sur tous les numéros.',
          'Contraste Net : Modules foncés sur fond blanc pour scan d\'écran à écran.',
          'Taille Minimale : Au moins 25 x 25 mm sur papier imprimé.',
          'SVG pour Finitions : Idéal pour dorures et vernis sélectifs.',
          'Testez sur Mobile : Vérification sur iPhone et Android.'
        ],
        technicalNotes: 'Compatible avec vCard 3.0 et balisage microdonnées HTML5.',
        faqs: [
          { question: 'Comment fonctionne la carte de visite digitale ?', answer: 'Lors du scan, votre profil s\'ouvre avec un bouton permettant d\'enregistrer tous vos contacts dans le répertoire en 1 clic.' },
          { question: 'Faut-il une application spéciale ?', answer: 'Non, la caméra intégrée de tout smartphone lit le code directement.' },
          { question: 'Puis-je inclure ma photo et mon logo ?', answer: 'Oui, téléchargez votre image et la correction d\'erreur passera automatiquement au niveau H (30%).' },
          { question: 'Puis-je la mettre en fond d\'écran ?', answer: 'Oui, téléchargez le PNG et définissez-le comme écran de verrouillage sur votre téléphone.' },
          { question: 'Ces cartes expirent-elles ?', answer: 'Non, les codes statiques sont permanents sans aucun frais.' },
          { question: 'Mes coordonnées restent-elles privées ?', answer: 'Oui, le code est généré localement dans votre navigateur sans stockage externe.' }
        ],
        relatedTools: [
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Codes vCard 3.0 légers et hors-ligne.' },
          { name: 'QR Code Réseaux Sociaux', slug: 'social-media-qr-code', description: 'Tous vos profils sociaux en un lien.' },
          { name: 'QR Code E-mail', slug: 'email-qr-code-generator', description: 'Courriels pré-rédigés d\'un simple scan.' },
          { name: 'QR Code WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Lancez des conversations sur WhatsApp.' }
        ]
      };
    case 'pt':
      return {
        slug: 'digital-business-card',
        qrTypeId: 'vcard',
        title: 'Gerador de Cartão de Visita Digital — vCard QR Contactless',
        description: 'Crie cartões de visita digitais com foto, contatos, e-mail e redes sociais. Compatível com iOS e Android. Download em SVG e PNG.',
        h1: 'Gerador de Cartão de Visita Digital',
        subheadline: 'Crie cartões de visita modernos e sem contato. Permita que contatos e clientes salvem seus dados com apenas um toque.',
        heading: 'Cartão de Visita Digital',
        subheading: 'Modernize seu networking com compartilhamento de contatos sustentável e instantâneo.',
        overviewTitle: 'O que é um Cartão de Visita Digital?',
        overviewParagraphs: [
          'Um QR Code de cartão de visita digital direciona para um perfil móvel interativo com foto profissional, nome, cargo, biografia, telefones, e-mail, sites, redes sociais e botão para salvar o contato direto na agenda (.vcf).',
          'Ao contrário dos cartões de papel que são descartados rapidamente, o cartão digital pode ser atualizado sem desperdício de impressões.',
          'Gere vCards estáticos ou páginas de perfil completas com download em SVG vetorial e PNG.'
        ],
        sectors: [
          { name: 'Corretores de Imóveis', description: 'Em cartões com link direto para o catálogo de imóveis.', benefit: 'Acesso imediato para clientes interessados.' },
          { name: 'Executivos de Vendas', description: 'Padronização comercial com link de agendamento online.', benefit: 'Aumenta as reuniões agendadas.' },
          { name: 'Empreendedores e Criadores', description: 'Na tela de bloqueio do celular e crachás.', benefit: 'Apresentação moderna sem papel.' },
          { name: 'Médicos e Saúde', description: 'Em cartões de consulta com link para agendamentos.', benefit: 'Facilidade de contato para pacientes.' },
          { name: 'Advogados e Consultores', description: 'Para reuniões de negócios com dados completos.', benefit: 'Comunicação profissional e segura.' },
          { name: 'Palestrantes', description: 'No slide final para conexão imediata com a plateia.', benefit: 'Dezenas de contatos gerados na hora.' }
        ],
        howItWorks: [
          { title: '1. Preencha seus Dados', description: 'Insira nome, empresa, cargo, telefones, e-mail e redes.' },
          { title: '2. Personalize o Cartão', description: 'Escolha cores e adicione sua foto de perfil ou logotipo.' },
          { title: '3. Baixe e Compartilhe', description: 'Baixe em SVG para gráficas ou PNG para a tela do celular.' }
        ],
        useCases: [
          { title: 'Verso de Cartões Físicos', description: 'Impresso no verso para salvamento digital imediato.', example: 'Cartão executivo com QR no verso.' },
          { title: 'Tela de Bloqueio do Celular', description: 'Salvo como papel de parede para escanear em eventos.', example: 'Networking sem cartões de papel.' },
          { title: 'Crachás de Congressos', description: 'Nos cordões de eventos para troca rápida de contatos.', example: 'Participante de feira de negócios.' },
          { title: 'Assinaturas de E-mail', description: 'No rodapé de e-mails profissionais.', example: 'Assinatura com chamada para salvar contato.' }
        ],
        tips: [
          'Formato Internacional: DDI (+55 para o Brasil) em todos os números.',
          'Alto Contraste: Módulos pretos sobre fundo branco para leitura em telas.',
          'Tamanho Mínimo: Pelo menos 25 x 25 mm em cartões físicos.',
          'SVG para Verniz Localizado: Garante nitidez máxima na gráfica.',
          'Teste no iPhone e Android: Verifique a leitura antes de imprimir.'
        ],
        technicalNotes: 'Compatível com vCard 3.0 e dados estruturados HTML5.',
        faqs: [
          { question: 'Como funciona o cartão digital ao ser escaneado?', answer: 'O smartphone abre seu perfil com um botão para salvar todos os dados na agenda com 1 toque.' },
          { question: 'A outra pessoa precisa de aplicativo?', answer: 'Não, a câmera comum de qualquer smartphone lê o código diretamente.' },
          { question: 'Posso colocar minha foto e o logo da empresa?', answer: 'Sim, envie sua foto e o sistema ajustará a correção de erros para Alto (30%).' },
          { question: 'Posso usar como papel de parede no celular?', answer: 'Sim, baixe em PNG e defina como tela de bloqueio para mostrar em reuniões.' },
          { question: 'Os cartões digitais expiram?', answer: 'Não, os códigos estáticos funcionam permanentemente sem custos.' },
          { question: 'Meus dados ficam seguros?', answer: 'Sim, a geração é 100% local no seu navegador sem envio para servidores externos.' }
        ],
        relatedTools: [
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Códigos vCard 3.0 compactos e offline.' },
          { name: 'QR Code Redes Sociais', slug: 'social-media-qr-code', description: 'Todos os seus perfis em um só link.' },
          { name: 'QR Code de E-mail', slug: 'email-qr-code-generator', description: 'Rascunhos de e-mail prontos.' },
          { name: 'QR Code WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Inicie conversas no WhatsApp.' }
        ]
      };
    case 'it':
      return {
        slug: 'digital-business-card',
        qrTypeId: 'vcard',
        title: 'Generatore Biglietto da Visita Digitale — vCard QR Contactless',
        description: 'Crea biglietti da visita digitali con foto, contatti, email e social media. Compatibile con iOS e Android. Download in SVG e PNG.',
        h1: 'Generatore Biglietto da Visita Digitale',
        subheadline: 'Crea moderni biglietti da visita contactless. Permetti ai tuoi contatti di salvare tutti i recapiti con un solo tocco.',
        heading: 'Biglietto da Visita Digitale',
        subheading: 'Porta il tuo networking professionale al livello successivo con lo scambio di contatti immediato ed ecologico.',
        overviewTitle: 'Cos\'è un Biglietto da Visita Digitale?',
        overviewParagraphs: [
          'Un codice QR per biglietti da visita digitali indirizza a un profilo mobile interattivo con foto, nome, qualifica, biografia, numeri di telefono, email, siti web, profili social e un pulsante per scaricare la vCard (.vcf).',
          'A differenza dei biglietti cartacei che vengono facilmente smarriti, un profilo digitale può essere aggiornato in qualsiasi momento senza sprecare stampe.',
          'Crea codici vCard statici o pagine profilo complete pronte per il download in formato vettoriale SVG e PNG.'
        ],
        sectors: [
          { name: 'Agenti Immobiliari', description: 'Su biglietti da visita con link diretto al portafoglio immobili.', benefit: 'Disponibilità immediata per i potenziali acquirenti.' },
          { name: 'Team di Vendita & Commerciali', description: 'Biglietti standardizzati con link di prenotazione appuntamento.', benefit: 'Aumenta il numero di incontri fissati.' },
          { name: 'Founder & Creator', description: 'Sullo sfondo dello smartphone e sui badge per fiere.', benefit: 'Immagine innovativa senza spreco di carta.' },
          { name: 'Medici & Specialisti', description: 'Su promemoria visite con link al portale pazienti.', benefit: 'Accesso comodo per i pazienti.' },
          { name: 'Avvocati & Notai', description: 'Per incontri di lavoro con recapiti completi e verificati.', benefit: 'Scambio dati riservato e professionale.' },
          { name: 'Relatori & Docenti', description: 'Sull\'ultima slide per collegarsi istantaneamente con l\'aula.', benefit: 'Decine di contatti in pochi secondi.' }
        ],
        howItWorks: [
          { title: '1. Inserisci i Tuoi Dati', description: 'Compila nome, azienda, ruolo, telefono, email e profili social.' },
          { title: '2. Personalizza il Biglietto', description: 'Scegli i colori e carica la tua foto profilo o il logo aziendale.' },
          { title: '3. Scarica e Condividi', description: 'Esporta in SVG vettoriale per la stampa o PNG per il display.' }
        ],
        useCases: [
          { title: 'Retro dei Biglietti Cartacei', description: 'Stampato sul retro per il salvataggio immediato in rubrica.', example: 'Biglietto aziendale con QR sul retro.' },
          { title: 'Sfondo Schermata di Blocco', description: 'Salvato sullo smartphone per farlo inquadrare durante eventi.', example: 'Networking a convegni senza carta.' },
          { title: 'Badge per Fiere', description: 'Sui cordini porta-badge per scambiare contatti al volo.', example: 'Partecipante a una fiera di settore.' },
          { title: 'Firme di Posta Elettronica', description: 'Nel piè di pagina delle email aziendali.', example: 'Firma email con invito al salvataggio rapido.' }
        ],
        tips: [
          'Prefisso Internazionale: Inserisci sempre il prefisso (+39 per l\'Italia) sui telefoni.',
          'Contrasto Elevato: Moduli scuri su sfondo bianco per una scansione nitida da schermo.',
          'Dimensioni Minime: Almeno 25 x 25 mm sui biglietti stampati.',
          'SVG per Finiture di Pregio: Ideale per verniciatura lucida a rilievo e lamine oro.',
          'Test su iPhone e Android: Verifica il salvataggio prima della tiratura finale.'
        ],
        technicalNotes: 'Supporta lo standard vCard 3.0 e microdati HTML5 responsive.',
        faqs: [
          { question: 'Come funziona il biglietto da visita digitale?', answer: 'Inquadrando il codice con la fotocamera, si apre il profilo interattivo con il pulsante per salvare tutti i contatti in rubrica con 1 tocco.' },
          { question: 'Serve un\'app speciale per aprirlo?', answer: 'No, la normale fotocamera di qualsiasi smartphone legge il codice direttamente.' },
          { question: 'Posso inserire la mia foto e il logo aziendale?', answer: 'Sì, carica la tua foto e la correzione errori verrà impostata automaticamente su Alto (30%).' },
          { question: 'Posso usarlo come sfondo del telefono?', answer: 'Sì, scarica il file PNG e impostalo come schermata di blocco del cellulare per farlo inquadrare in riunione.' },
          { question: 'I biglietti da visita digitali hanno una scadenza?', answer: 'No, i codici statici restano validi per sempre senza canoni né scadenze.' },
          { question: 'I miei dati personali sono protetti?', answer: 'Sì, la generazione avviene al 100% nel tuo browser senza salvataggio su server esterni.' }
        ],
        relatedTools: [
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Codici vCard 3.0 compatti e offline.' },
          { name: 'QR Code Social Media', slug: 'social-media-qr-code', description: 'Tutti i tuoi profili social in un solo link.' },
          { name: 'QR Code Email', slug: 'email-qr-code-generator', description: 'Bozze di email precompilate con un tocco.' },
          { name: 'QR Code WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Avvia chat dirette su WhatsApp.' }
        ]
      };
    case 'hi':
      return {
        slug: 'digital-business-card',
        qrTypeId: 'vcard',
        title: 'डिजिटल विज़िटिंग कार्ड QR कोड जेनरेटर — कॉन्टैक्टलेस vCard QR',
        description: 'फोटो, संपर्क विवरण, ईमेल और सोशल मीडिया के साथ डिजिटल विज़िटिंग कार्ड बनाएं। iPhone और Android के साथ संगत। मुफ़्त डाउनलोड।',
        h1: 'डिजिटल विज़िटिंग कार्ड QR कोड जेनरेटर',
        subheadline: 'आधुनिक कॉन्टैक्टलेस विज़िटिंग कार्ड बनाएं। ग्राहकों को एक टैप में अपना पूरा संपर्क विवरण सेव करने की सुविधा दें।',
        heading: 'डिजिटल विज़िटिंग कार्ड',
        subheading: 'कागज़ के कार्ड्स का झंझट खत्म करें और आधुनिक डिजिटल नेटवर्किंग अपनाएं।',
        overviewTitle: 'डिजिटल विज़िटिंग कार्ड क्या है?',
        overviewParagraphs: [
          'डिजिटल विज़िटिंग कार्ड QR कोड एक इंटरैक्टिव मोबाइल प्रोफाइल से जुड़ता है जिसमें आपकी फोटो, नाम, पद, कंपनी का परिचय, फोन नंबर, ईमेल, वेबसाइट, सोशल मीडिया लिंक्स और एक टैप में कॉन्टैक्ट फाइल (.vcf) डाउनलोड करने का बटन होता है।',
          'पारंपरिक कागज़ के कार्ड अक्सर खो जाते हैं या नंबर बदलने पर बेकार हो जाते हैं। डिजिटल प्रोफाइल को आप बिना दोबारा प्रिंट कराए कभी भी अपडेट कर सकते हैं।',
          'हमारा टूल स्टैटिक vCard कोड और डायनेमिक प्रोफाइल दोनों बनाने की सुविधा देता है। SVG और PNG डाउनलोड बिल्कुल मुफ़्त है।'
        ],
        sectors: [
          { name: 'रियल एस्टेट ब्रोकर्स', description: 'विज़िटिंग कार्ड पर एक्टिव प्रॉपर्टी लिस्टिंग लिंक के साथ।', benefit: 'घर खरीदारों को सीधे प्रॉपर्टी देखने की सुविधा।' },
          { name: 'सेल्स व मार्केटिंग टीम्स', description: 'ऑनलाइन मीटिंग बुक करने के कैलेंडर लिंक के साथ।', benefit: 'क्लाइंट्स के साथ मीटिंग बुकिंग की दर बढ़ाता है।' },
          { name: 'स्टार्टअप फाउंडर्स व क्रिएटर्स', description: 'मोबाइल लॉक-स्क्रीन वॉलपेपर और इवेंट बैज पर।', benefit: 'कागज़-मुक्त और आधुनिक डिजिटल पहचान।' },
          { name: 'डॉक्टर्स व क्लीनिक्स', description: 'अपॉइंटमेंट पर्ची पर ऑनलाइन बुकिंग लिंक के साथ।', benefit: 'मरीजों के लिए आसान और त्वरित संपर्क।' },
          { name: 'वकील व वित्तीय सलाहकार', description: 'क्लाइंट्स को पूर्ण और सत्यापित व्यावसायिक पहचान दें।', benefit: 'पारदर्शी और सुरक्षित संपर्क माध्यम।' },
          { name: 'इवेंट स्पीकर्स', description: 'अंतिम प्रेजेंटेशन स्लाइड पर श्रोताओं से जुड़ने हेतु।', benefit: 'कुछ ही सेकंड में दर्जनों नए कॉन्टैक्ट्स।' }
        ],
        howItWorks: [
          { title: '1. अपनी जानकारी भरें', description: 'नाम, कंपनी, पद, मोबाइल, ईमेल और सोशल लिंक्स दर्ज करें।' },
          { title: '2. कार्ड कस्टमाइज़ करें', description: 'रंग चुनें और अपनी फोटो या कंपनी का लोगो अपलोड करें।' },
          { title: '3. डाउनलोड व शेयर करें', description: 'प्रिंटिंग के लिए SVG या मोबाइल वॉलपेपर के लिए PNG डाउनलोड करें।' }
        ],
        useCases: [
          { title: 'विज़िटिंग कार्ड का पिछला भाग', description: 'कागज़ के कार्ड के पीछे डिजिटल स्कैनिंग हेतु।', example: 'प्रीमियम एग्जीक्यूटिव कार्ड।' },
          { title: 'फ़ोन लॉक-स्क्रीन वॉलपेपर', description: 'मीटिंग में सीधे फोन से फोन स्कैन कराने हेतु।', example: 'बिना कागज़ी कार्ड के स्मार्ट नेटवर्किंग।' },
          { title: 'व्यापार मेला आई-कार्ड', description: 'गले के फीते वाले बैज पर त्वरित संपर्क आदान-प्रदान हेतु।', example: 'कॉन्फ़्रेंस अटेंडी बैज।' },
          { title: 'ईमेल सिग्नेचर फुटर', description: 'ईमेल के नीचे डिजिटल कार्ड का लिंक लगाएं।', example: 'प्रोफेशनल ईमेल सिग्नेचर।' }
        ],
        tips: [
          'कंट्री कोड अवश्य लगाएं: फोन नंबर में +91 जैसा अंतरराष्ट्रीय कोड जोड़ें।',
          'हाई कंट्रास्ट: स्क्रीन-टू-स्क्रीन स्कैनिंग के लिए सफ़ेद बैकग्राउंड रखें।',
          'न्यूनतम साइज़: कार्ड पर कम से कम 25 x 25 मिमी प्रिंट करें।',
          'वेक्टर SVG फ़ाइल: प्रीमियम प्रिंटिंग के लिए हमेशा SVG का उपयोग करें।',
          'iPhone व Android पर टेस्ट: प्रिंट से पहले स्कैन करके जांच लें।'
        ],
        technicalNotes: 'मानक vCard 3.0 और रिस्पॉन्सिव HTML5 का पूर्ण समर्थन।',
        faqs: [
          { question: 'स्कैन करने पर डिजिटल विज़िटिंग कार्ड कैसे काम करता है?', answer: 'कैमरे से स्कैन करते ही आपकी मोबाइल प्रोफाइल खुलती है और एक क्लिक में सभी विवरण फोनबुक में सेव हो जाते हैं।' },
          { question: 'क्या सामने वाले को कोई ऐप डाउनलोड करना पड़ेगा?', answer: 'नहीं, किसी भी स्मार्टफोन का कैमरा इसे सीधे स्कैन कर सकता है।' },
          { question: 'क्या मैं अपनी फोटो और कंपनी का लोगो लगा सकता हूँ?', answer: 'हाँ, फोटो या लोगो अपलोड करने पर सिस्टम एरर करेक्शन को हाई (H) पर सेट कर देगा।' },
          { question: 'क्या मैं इसे अपने फोन का वॉलपेपर बना सकता हूँ?', answer: 'हाँ, PNG डाउनलोड करें और अपने फोन की लॉक-स्क्रीन पर लगा लें।' },
          { question: 'क्या डिजिटल विज़िटिंग कार्ड कभी एक्सपायर होता है?', answer: 'नहीं, स्टैटिक कार्ड हमेशा के लिए मुफ़्त और सक्रिय रहते हैं।' },
          { question: 'क्या मेरी व्यक्तिगत जानकारी सुरक्षित है?', answer: 'हाँ, कोड 100% आपके ब्राउज़र में बनता है और किसी सर्वर पर स्टोर नहीं होता।' }
        ],
        relatedTools: [
          { name: 'vCard विज़िटिंग कार्ड QR', slug: 'vcard-qr-code-generator', description: 'हल्के और ऑफलाइन vCard 3.0 कोड।' },
          { name: 'सोशल मीडिया QR कोड', slug: 'social-media-qr-code', description: 'सभी सोशल प्रोफाइल एक ही लिंक में।' },
          { name: 'ईमेल QR जेनरेटर', slug: 'email-qr-code-generator', description: 'स्कैन करते ही तैयार ईमेल ड्राफ्ट खोलें।' },
          { name: 'WhatsApp QR जेनरेटर', slug: 'whatsapp-qr-code-generator', description: 'ग्राहकों से सीधे व्हाट्सएप चैट शुरू करें।' }
        ]
      };
    default: // 'en'
      return {
        slug: 'digital-business-card',
        qrTypeId: 'vcard',
        title: 'Digital Business Card QR Code Generator — Contactless vCard QR',
        description: 'Create digital business card QR codes with full contact details, phone, email, and social links. Compatible with iOS & Android. Free vector SVG & PNG.',
        h1: 'Digital Business Card QR Code Generator',
        subheadline: 'Create modern contactless business cards. Let clients and networking contacts save your credentials with a single camera tap.',
        heading: 'Digital Business Card QR Code',
        subheading: 'Upgrade your professional networking with instant, eco-friendly digital contact sharing.',
        overviewTitle: 'What is a Digital Business Card QR Code?',
        overviewParagraphs: [
          'A Digital Business Card QR code links directly to a personalized, mobile-responsive contact profile hosting your professional headshot, name, executive title, company bio, phone numbers, direct email, website links, social media handles, and an instant "Save Contact" (.vcf) download button. When scanned at networking events or client meetings, the recipient accesses a rich interactive profile that never gets lost or thrown away.',
          'While traditional paper business cards provide limited space and quickly become obsolete whenever your phone number or title changes, a Digital Business Card landing page provides an interactive, multimedia hub. Contacts can save your details straight into their phone book, connect on LinkedIn, schedule appointments on Calendly, and view your portfolio in one seamless mobile view.',
          'Our platform allows you to create both standalone static vCard codes and dynamic hosted digital business card profiles. Customize colors, embed corporate branding, and download print-ready vector SVG or PNG files for physical cards, badge lanyards, and digital phone wallpaper.'
        ],
        sectors: [
          { name: 'Real Estate Agents & Brokers', description: 'Print on physical cards with links to live property portfolio listings.', benefit: 'Immediate engagement with prospective home buyers.' },
          { name: 'Corporate Sales Executives', description: 'Standardized digital business cards with calendar meeting booking links.', benefit: 'Increases demo meeting booking conversion rates.' },
          { name: 'Tech Founders & Creators', description: 'Displayed on lock-screen phone backgrounds and expo badge lanyards.', benefit: 'Paperless, modern tech-forward presentation.' },
          { name: 'Medical Specialists & Clinics', description: 'Printed on appointment cards linking to patient booking portals.', benefit: 'Provides immediate contact access for patients.' },
          { name: 'Attorneys & Financial Advisors', description: 'Supplied to high-net-worth clients with complete verified credentials.', benefit: 'Ensures secure, direct communications.' },
          { name: 'Keynote Speakers & Authors', description: 'Projected on presentation closing slides for instant audience networking.', benefit: 'Captures dozens of qualified professional leads.' }
        ],
        howItWorks: [
          { title: '1. Fill in Professional Credentials', description: 'Input your name, organization, job title, phone numbers, email, and social profiles.' },
          { title: '2. Customize Card Styling', description: 'Choose your color theme and upload your headshot portrait or company logo.' },
          { title: '3. Download & Share', description: 'Export as vector SVG for print shops or PNG for lock-screen wallpapers.' }
        ],
        useCases: [
          { title: 'Reverse Side of Paper Cards', description: 'Printed on the back of luxury cards for instant digital saving.', example: 'Executive card with monochrome vCard QR.' },
          { title: 'Smartphone Lock-Screen Wallpaper', description: 'Saved as phone background image for instant in-person networking.', example: 'Networking at mixers without paper cards.' },
          { title: 'Summit & Conference Badges', description: 'Printed directly on attendee lanyards for rapid lead exchange.', example: 'B2B expo conference badge.' },
          { title: 'Corporate Email Signatures', description: 'Placed at the bottom of business correspondence.', example: 'Professional email signature with scan prompt.' }
        ],
        tips: [
          'International Phone Formatting: Always include country codes (e.g. +1 for US) on all phone numbers.',
          'High Screen Contrast: Dark module patterns on a clean white background guarantee fast screen-to-screen scanning.',
          'Minimum Physical Size: Ensure at least 25 x 25 mm on physical printed business cards.',
          'Vector SVG for Spot UV: Supply vector SVG format to printers for foil stamping or embossed finishes.',
          'Multi-Device Camera Test: Test scanning on both iOS and Android before finalizing print orders.'
        ],
        technicalNotes: 'Standards Compliance: Supports standard vCard 3.0 and responsive HTML5 microdata schema.',
        faqs: [
          { question: 'How does a digital business card work when scanned?', answer: 'When scanned with any smartphone camera, your mobile contact page opens with an "Add to Contacts" button that saves all details to the address book in one tap.' },
          { question: 'Does the other person need to install an app?', answer: 'No! The recipient needs zero apps—any native iPhone or Android camera reads the code directly.' },
          { question: 'Can I include my profile photo and company logo?', answer: 'Yes! Upload your photo or logo, and our generator automatically boosts error correction to Level H (30%).' },
          { question: 'Can I use this as my phone lock-screen wallpaper?', answer: 'Yes! Download the PNG image and set it as your lock-screen wallpaper to share your contact details anywhere.' },
          { question: 'Do digital business cards expire?', answer: 'No. Static codes never expire and remain active permanently with zero subscription fees.' },
          { question: 'Is my personal contact data secure and private?', answer: 'Yes. Our static generator runs 100% in your browser memory and never stores your personal details on external servers.' }
        ],
        relatedTools: [
          { name: 'vCard QR Generator', slug: 'vcard-qr-code-generator', description: 'Create lightweight offline vCard 3.0 codes.' },
          { name: 'Social Media QR', slug: 'social-media-qr-code', description: 'Consolidate all social profiles in one link.' },
          { name: 'Email QR Generator', slug: 'email-qr-code-generator', description: 'Pre-compose email drafts in a single scan.' },
          { name: 'WhatsApp QR Generator', slug: 'whatsapp-qr-code-generator', description: 'Launch direct WhatsApp customer conversations.' }
        ]
      };
  }
}
