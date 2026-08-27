import type { Locale } from '../config';
import type { LocalizedPageContent } from './types';

export function getVcardContent(locale: Locale): LocalizedPageContent {
  switch (locale) {
    case 'es':
      return {
        slug: 'vcard-qr-code-generator',
        qrTypeId: 'vcard',
        title: 'Generador de Código QR vCard — Tarjeta de Visita Digital Contactless',
        description: 'Crea códigos QR vCard con datos de contacto completos, teléfono, email y empresa. Compatible con iPhone y Android. Descarga gratis en vector SVG y PNG.',
        h1: 'Generador de Código QR vCard',
        subheadline: 'Crea tarjetas de contacto escaneables que permiten a clientes y colegas guardar tu teléfono y datos en la agenda con un solo toque.',
        heading: 'Código QR de Contacto vCard',
        subheading: 'Transfiere credenciales profesionales directamente a la agenda de cualquier smartphone sin escribir.',
        overviewTitle: '¿Qué es un Generador de Código QR vCard?',
        overviewParagraphs: [
          'Un generador de código QR vCard codifica los datos de una tarjeta de visita electrónica (estándar VCF / vCard 3.0) directamente en un código de barras 2D. Al ser escaneado por cualquier smartphone iPhone o Android, el sistema operativo reconoce los campos (nombre, empresa, cargo, teléfono móvil, correo electrónico, web y dirección física) y muestra un botón para guardar el contacto.',
          'Las tarjetas de papel tradicionales se pierden con facilidad y obligan a transcribir números a mano. Un código QR vCard elimina esa fricción y permite guardar la ficha completa en los contactos de Apple, Google o Microsoft Outlook.',
          'Nuestro generador opera 100% en tu navegador de forma segura y privada. Puedes descargar archivos vectoriales SVG para imprenta o imágenes PNG de alta resolución para firmas de correo electrónico y fondos de pantalla.'
        ],
        sectors: [
          { name: 'Agentes Inmobiliarios', description: 'Imprime en folletos y carteles de venta para que los compradores guarden tu móvil al instante.', benefit: 'Atención inmediata a compradores interesados.' },
          { name: 'Directores Comerciales y Ventas', description: 'Añade a carpetas de propuestas para que los ejecutivos tengan tu línea directa.', benefit: 'Acelera el cierre de negociaciones.' },
          { name: 'Consultores y Autónomos', description: 'Incluye en presupuestos y dossieres para proyectar una imagen moderna.', benefit: 'Cero fricción en la comunicación con clientes.' },
          { name: 'Médicos y Clínicas', description: 'Proporciona tarjetas con números directos para citas y urgencias.', benefit: 'Contacto rápido para los pacientes.' },
          { name: 'Abogados y Asesores', description: 'Equipa tus tarjetas de visita con datos completos verificados.', benefit: 'Acceso directo a tu despacho.' },
          { name: 'Ponentes en Congresos', description: 'Muestra en la diapositiva final de tu presentación para conectar con los asistentes.', benefit: 'Decenas de contactos en segundos.' }
        ],
        howItWorks: [
          { title: '1. Rellena los Datos de Contacto', description: 'Escribe tu nombre, cargo, empresa, teléfono móvil, email, web y dirección.' },
          { title: '2. Personaliza la Identidad Visual', description: 'Elige tu paleta corporativa y sube tu foto de perfil o logotipo central.' },
          { title: '3. Descarga e Imprime', description: 'Exporta en SVG vectorial para imprenta o PNG para medios digitales.' }
        ],
        useCases: [
          { title: 'Reverso de Tarjetas de Papel', description: 'Impreso en tarjetas físicas de calidad para dar soporte digital.', example: 'Tarjeta ejecutiva con código vCard en el reverso.' },
          { title: 'Acreditaciones de Congresos', description: 'Impreso en los pases de lanyards para networking en ferias.', example: 'Acreditación en feria tecnológica.' },
          { title: 'Fondo de Bloqueo del Móvil', description: 'Guardado como imagen de bloqueo para mostrar y escanear en eventos.', example: 'Profesional en eventos de networking.' },
          { title: 'Firmas de Correo Electrónico', description: 'Adjunto en el pie de página de correos electrónicos profesionales.', example: 'Firma de correo con llamada a guardar contacto.' }
        ],
        tips: [
          'Formato Internacional: Incluye el prefijo internacional (+34, +1, etc.) en los números de teléfono.',
          'Campos Relevantes: Completa solo la información esencial para mantener un código limpio y fácil de leer.',
          'Corrección de Errores: Si añades logotipo, mantén el nivel Alto (H) de corrección de errores.',
          'Tamaño Físico Mínimo: Imprime a un tamaño no menor de 25 x 25 mm en tarjetas.',
          'SVG para Imprenta: Utiliza SVG vectorial para evitar pixelado en papeles con relieve o estampación.'
        ],
        technicalNotes: 'Formato estándar vCard 3.0 compatible con iOS, Android, macOS y Windows.',
        faqs: [
          { question: '¿Qué ocurre al escanear un código QR vCard con el móvil?', answer: 'La cámara detecta el contacto y muestra un aviso para añadirlo a la agenda del teléfono con todos los campos ya rellenados.' },
          { question: '¿Se guardan mis datos personales en vuestros servidores?', answer: 'No. El código se genera 100% en tu navegador y los datos quedan grabados en los puntos del código, no en la nube.' },
          { question: '¿Requiere una app especial para escanear?', answer: 'No, la aplicación de cámara estándar de cualquier móvil actual lee vCards de forma nativa.' },
          { question: '¿Puedo incluir redes sociales o enlaces a portfolios?', answer: 'Sí, puedes incluir tu web o utilizar nuestra herramienta de Tarjeta de Visita Digital para crear perfiles interactivos.' },
          { question: '¿Cómo escribir números de teléfono internacionales?', answer: 'Usa siempre el signo más seguido del código de país (por ejemplo, +34 600 000 000).' },
          { question: '¿Puedo modificar mis datos después de imprimir?', answer: 'En un código vCard estático no es posible; si necesitas actualizar datos futuros, usa la Tarjeta de Visita Digital Dinámica.' }
        ],
        relatedTools: [
          { name: 'Tarjeta de Visita Digital', slug: 'digital-business-card', description: 'Crea una página de contacto móvil interactiva.' },
          { name: 'QR de Correo Email', slug: 'email-qr-code-generator', description: 'Borradores de email pre-redactados para consultas.' },
          { name: 'QR de Llamada Telefónica', slug: 'phone-qr-code-generator', description: 'Llamadas automáticas con un solo escaneo.' },
          { name: 'QR de WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Inicia chats de negocios directamente en WhatsApp.' }
        ]
      };
    case 'de':
      return {
        slug: 'vcard-qr-code-generator',
        qrTypeId: 'vcard',
        title: 'vCard QR Code Generator — Digitale Visitenkarte zum Scannen',
        description: 'Erstellen Sie vCard QR-Codes mit allen Kontaktdaten, Telefon, E-Mail und Firma. Kompatibel mit iOS & Android. Kostenloser Vektor-SVG & PNG Download.',
        h1: 'vCard QR Code Generator',
        subheadline: 'Erstellen Sie scanbare Visitenkarten, mit denen Geschäftspartner Ihre Kontaktdaten mit nur einem Tippen im Telefonbuch speichern.',
        heading: 'vCard Kontakt-QR-Code',
        subheading: 'Übertragen Sie Geschäftsdaten direkt und fehlerfrei in Smartphone-Adressbücher.',
        overviewTitle: 'Was ist ein vCard QR Code Generator?',
        overviewParagraphs: [
          'Ein vCard QR Code Generator wandelt elektronische Visitenkartendaten (Standard VCF / vCard 3.0) in einen 2D-Barcode um. Beim Scannen mit einem iPhone oder Android-Gerät erkennt das System alle Felder (Vorname, Nachname, Unternehmen, Position, Mobiltelefon, E-Mail, Website und Adresse) und bietet an, den Kontakt sofort im Adressbuch zu speichern.',
          'Klassische Papier-Visitenkarten gehen oft verloren oder erfordern mühsames Abtippen von Telefonnummern. Ein vCard-QR-Code überträgt alle Daten in Sekundenschnelle direkt in Apple Kontakte, Google Kontakte oder Outlook.',
          'Unser Generator arbeitet 100% lokal im Browser. Ihre persönlichen Daten werden nicht auf fremden Servern gespeichert. Sie können Vektor-SVG-Dateien für Druckereien oder PNGs für E-Mail-Signaturen herunterladen.'
        ],
        sectors: [
          { name: 'Immobilienmakler', description: 'Auf Verkaufsschildern und Exposés für direkte Erreichbarkeit.', benefit: 'Interessenten speichern die Maklernummer sofort ab.' },
          { name: 'Vertriebs- & Sales-Teams', description: 'Auf Angebotsunterlagen und Präsentationen.', benefit: 'Beschleunigt den Abschluss durch direkte Kommunikationswege.' },
          { name: 'Berater & Freiberufler', description: 'Auf Rechnungen und Profilen für ein modernes Auftreten.', benefit: 'Keine Hürden beim Erstkontakt mit Neukunden.' },
          { name: 'Ärzte & Praxisteams', description: 'Auf Terminzetteln für die direkte Notfall- und Termin-Nummer.', benefit: 'Schnelle Erreichbarkeit für Patienten.' },
          { name: 'Rechtsanwälte & Notare', description: 'Auf Kanzlei-Visitenkarten für Mandanten.', benefit: 'Sicherer und vollständiger Kontaktdatenaustausch.' },
          { name: 'Referenten auf Konferenzen', description: 'Auf der Schlussfolie für schnelles Networking mit Teilnehmern.', benefit: 'Dutzende neue Kontakte in wenigen Sekunden.' }
        ],
        howItWorks: [
          { title: '1. Kontaktdaten Ausfüllen', description: 'Name, Firma, Position, Mobilnummer, E-Mail, Website und Adresse eingeben.' },
          { title: '2. Visuelle Identität Gestalten', description: 'Farben anpassen und persönliches Portraitfoto oder Firmenlogo einfügen.' },
          { title: '3. Herunterladen & Drucken', description: 'Als Vektor-SVG für Drucksachen oder PNG für Displays exportieren.' }
        ],
        useCases: [
          { title: 'Rückseite von Visitenkarten', description: 'Gedruckt auf hochwertigem Papier für schnellen digitalen Import.', example: 'Visitenkarte mit dezentem vCard-Code auf der Rückseite.' },
          { title: 'Messe-Namensschilder', description: 'Direkt auf Lanyards für den schnellen Kontaktaustausch.', example: 'Kongress-Ausweis für B2B-Messen.' },
          { title: 'Sperrbildschirm-Hintergrund', description: 'Als Hintergrundbild auf dem Smartphone für spontane Scans.', example: 'Networking auf Abendveranstaltungen.' },
          { title: 'E-Mail-Signaturen', description: 'Eingebunden im Fußbereich geschäftlicher E-Mails.', example: 'Signatur mit Direkt-Speichern-Hinweis.' }
        ],
        tips: [
          'Internationales Format: Telefonnummern immer mit Ländervorwahl (z. B. +49 für Deutschland) angeben.',
          'Wesentliche Felder nutzen: Unnötige Felder weglassen, um den Code einfach und gut lesbar zu halten.',
          'Fehlerkorrektur bei Logos: Beim Einfügen eines Logos auf Stufe H (30%) achten.',
          'Mindestgröße: Auf gedruckten Visitenkarten mindestens 25 x 25 mm einhalten.',
          'Vektor-SVG für Druckereien: SVG sorgt für randscharfe Kanten bei Prägung und Foliendruck.'
        ],
        technicalNotes: 'Standardmäßiges vCard 3.0 Format, nativ unterstützt von iOS, Android und Windows.',
        faqs: [
          { question: 'Was passiert beim Scannen eines vCard QR-Codes?', answer: 'Das Smartphone erkennt den Kontakt und öffnet das Adressbuch mit allen vorausgefüllten Daten zum sofortigen Speichern mit 1 Klick.' },
          { question: 'Werden meine Kontaktdaten auf Ihren Servern gespeichert?', answer: 'Nein. Der Code wird zu 100% lokal im Browser berechnet und speichert Daten nur im Bild selbst.' },
          { question: 'Wird eine spezielle App zum Scannen benötigt?', answer: 'Nein, die integrierte Standard-Kamera aller aktuellen Smartphones liest vCards direkt.' },
          { question: 'Kann ich auch Social-Media-Links einbinden?', answer: 'Standard-vCards unterstützen Webseiten. Für umfangreiche Profile empfehlen wir unsere Digitale Visitenkarte.' },
          { question: 'Wie gebe ich Telefonnummern am besten ein?', answer: 'Immer mit Pluszeichen und internationaler Landesvorwahl (z. B. +49 170 1234567).' },
          { question: 'Kann ich Daten nach dem Drucken noch ändern?', answer: 'Bei statischen vCard-Codes nicht. Verwenden Sie für spätere Änderungen unsere Digitale Visitenkarte.' }
        ],
        relatedTools: [
          { name: 'Digitale Visitenkarte', slug: 'digital-business-card', description: 'Erstellen Sie eine interaktive mobile Profilseite.' },
          { name: 'E-Mail QR Generator', slug: 'email-qr-code-generator', description: 'Vorausgefüllte E-Mail-Entwürfe per Scan.' },
          { name: 'Telefon QR Generator', slug: 'phone-qr-code-generator', description: 'Direkte Sprachanrufe mit einem Klick.' },
          { name: 'WhatsApp QR Code', slug: 'whatsapp-qr-code-generator', description: 'Kundenchats direkt auf WhatsApp starten.' }
        ]
      };
    case 'fr':
      return {
        slug: 'vcard-qr-code-generator',
        qrTypeId: 'vcard',
        title: 'Générateur de QR Code vCard — Carte de Visite Sans Contact',
        description: 'Créez des QR codes vCard avec coordonnées complètes, téléphone et e-mail. Compatible iOS & Android. Téléchargement gratuit en SVG et PNG.',
        h1: 'Générateur de QR Code vCard',
        subheadline: 'Générez des cartes de visite scannables qui permettent d\'enregistrer votre fiche contact dans le répertoire en un seul clic.',
        heading: 'QR Code de Contact vCard',
        subheading: 'Transférez vos coordonnées professionnelles directement dans les smartphones sans saisie manuelle.',
        overviewTitle: 'Qu\'est-ce qu\'un Générateur de QR Code vCard ?',
        overviewParagraphs: [
          'Un générateur de QR code vCard encode les données d\'une carte de visite électronique (format standard VCF / vCard 3.0) dans un code 2D. Lorsque vos interlocuteurs scannent le code avec leur iPhone ou appareil Android, le carnet d\'adresses s\'ouvre avec tous les champs pré-remplis (nom, entreprise, fonction, téléphone, email, site web et adresse postale).',
          'Les cartes de visite papier sont souvent égarées ou jetées rapidement. Un QR code vCard digitalise vos coordonnées et garantit que votre numéro soit enregistré sans aucune faute de frappe dans Apple Contacts, Google Contacts ou Outlook.',
          'Notre outil fonctionne à 100% dans votre navigateur de manière totalement confidentielle. Téléchargez vos fichiers en SVG vectoriel pour vos cartes imprimées ou en PNG pour vos signatures d\'e-mail.'
        ],
        sectors: [
          { name: 'Agents Immobiliers', description: 'Sur les fiches de biens et panneaux pour que les acquéreurs enregistrent votre numéro.', benefit: 'Réactivité immédiate pour les visites.' },
          { name: 'Commerciaux et Équipes de Vente', description: 'Sur les devis et présentations pour laisser une ligne directe aux décideurs.', benefit: 'Accélère les relances commerciales.' },
          { name: 'Consultants & Indépendants', description: 'Sur vos propositions pour refléter une image moderne et connectée.', benefit: 'Zéro friction lors de la prise de contact.' },
          { name: 'Médecins & Cabinets de Soins', description: 'Sur ordonnances et cartes de rendez-vous pour les urgences.', benefit: 'Accès rapide pour les patients.' },
          { name: 'Avocats & Notaires', description: 'Sur vos cartes de visite pour transmettre des coordonnées certifiées.', benefit: 'Échange confidentiel et fiable.' },
          { name: 'Conférenciers & Intervenants', description: 'Sur la diapositive de conclusion pour partager vos coordonnées avec la salle.', benefit: 'Des dizaines de contacts qualifiés en quelques secondes.' }
        ],
        howItWorks: [
          { title: '1. Remplissez vos Coordonnées', description: 'Saisissez votre nom, entreprise, poste, numéro de mobile, email, site et adresse.' },
          { title: '2. Personnalisez l\'Apparence', description: 'Harmonisez les couleurs de votre charte et ajoutez votre photo ou logo.' },
          { title: '3. Téléchargez et Imprimez', description: 'Exportez en SVG vectoriel pour l\'imprimeur ou en PNG haute définition.' }
        ],
        useCases: [
          { title: 'Verso des Cartes de Visite Papier', description: 'Imprimé au dos de cartes papier texturées pour une sauvegarde instantanée.', example: 'Carte haut de gamme avec QR vCard au verso.' },
          { title: 'Badges de Congrès et Salons', description: 'Sur les tours de cou des participants pour réseauter rapidement.', example: 'Badge lors d\'un salon professionnel.' },
          { title: 'Fond d\'Écran de Verrouillage', description: 'Enregistré sur votre smartphone pour le faire scanner en réunion.', example: 'Réseautage rapide lors d\'un cocktail d\'affaires.' },
          { title: 'Signatures d\'E-mail', description: 'Intégré au bas de vos e-mails professionnels.', example: 'Signature avec appel à enregistrer le contact.' }
        ],
        tips: [
          'Format International : Indiquez l\'indicatif pays (ex. +33 pour la France) devant chaque numéro.',
          'Champs Essentiels : Ne conservez que les informations clés pour garder un code aéré et rapide à lire.',
          'Correction d\'Erreur : Si vous insérez un logo, conservez le niveau Élevé (H / 30%).',
          'Taille Minimale : Au moins 25 x 25 mm lors de l\'impression sur cartes de visite.',
          'SVG pour l\'Impression : Le SVG évite tout effet de flou lors des gaufrages ou dorures.'
        ],
        technicalNotes: 'Format standardisé vCard 3.0 compatible avec iOS, Android, macOS et Windows.',
        faqs: [
          { question: 'Que se passe-t-il lors du scan d\'un QR code vCard ?', answer: 'Le smartphone ouvre directement le carnet d\'adresses avec toutes vos coordonnées pré-remplies pour un enregistrement en 1 clic.' },
          { question: 'Mes données personnelles sont-elles enregistrées chez vous ?', answer: 'Non. Tout le traitement se fait localement dans votre navigateur sans aucun stockage sur serveur distant.' },
          { question: 'Faut-il une application spéciale pour le scanner ?', answer: 'Non, l\'application appareil photo standard d\'iOS et d\'Android lit les vCards nativement.' },
          { question: 'Puis-je inclure mes réseaux sociaux ?', answer: 'Le format vCard standard supporte les sites web. Pour un profil multi-liens complet, utilisez notre Carte de Visite Digitale.' },
          { question: 'Comment formater mon numéro de téléphone ?', answer: 'Utilisez le format international complet avec le signe + (ex. +33 6 12 34 56 78).' },
          { question: 'Puis-je modifier mes coordonnées après impression ?', answer: 'Non pour un vCard statique. Pour pouvoir modifier les informations à distance, utilisez notre Carte Digitale Dynamique.' }
        ],
        relatedTools: [
          { name: 'Carte de Visite Digitale', slug: 'digital-business-card', description: 'Créez une page de profil mobile interactive.' },
          { name: 'QR Code E-mail', slug: 'email-qr-code-generator', description: 'Générez des courriels pré-rédigés d\'un simple scan.' },
          { name: 'QR Code Appel Téléphonique', slug: 'phone-qr-code-generator', description: 'Déclenchez des appels vocaux instantanés.' },
          { name: 'QR Code WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Lancez des conversations directes sur WhatsApp.' }
        ]
      };
    case 'pt':
      return {
        slug: 'vcard-qr-code-generator',
        qrTypeId: 'vcard',
        title: 'Gerador de QR Code vCard — Cartão de Visita Digital Contactless',
        description: 'Crie QR Codes vCard com dados de contato, telefone, e-mail e empresa. Compatível com iPhone e Android. Download grátis em vetor SVG e PNG.',
        h1: 'Gerador de QR Code vCard',
        subheadline: 'Crie cartões de contato escaneáveis para que clientes e parceiros salvem seus dados na agenda com apenas um toque.',
        heading: 'QR Code de Contato vCard',
        subheading: 'Transfira credenciais profissionais diretamente para a agenda do celular sem digitação manual.',
        overviewTitle: 'O que é um Gerador de QR Code vCard?',
        overviewParagraphs: [
          'Um gerador de QR Code vCard codifica as informações de um cartão eletrônico (padrão VCF / vCard 3.0) em um código 2D. Quando lido por qualquer smartphone com câmera, o sistema reconhece os dados (nome, cargo, empresa, celular, e-mail, site e endereço) e exibe o botão para salvar o contato na hora.',
          'Cartões de papel se perdem facilmente e exigem digitação demorada. O QR Code vCard moderniza sua apresentação e adiciona seus dados diretamente no Apple Contatos, Google Contatos ou Outlook sem risco de erros.',
          'Nossa ferramenta funciona 100% no navegador de forma privativa e segura. Você pode baixar em vetor SVG para gráficas ou PNG para assinaturas de e-mail.'
        ],
        sectors: [
          { name: 'Corretores de Imóveis', description: 'Em placas de venda e panfletos para salvar o contato do corretor na hora.', benefit: 'Atendimento ágil para interessados em imóveis.' },
          { name: 'Equipes Comerciais e Vendas', description: 'Em propostas e apresentações para facilitar o contato direto.', benefit: 'Acelera o fechamento de negociações.' },
          { name: 'Consultores e Autônomos', description: 'Em orçamentos e propostas para transmitir modernidade.', benefit: 'Facilidade total de contato com novos clientes.' },
          { name: 'Médicos e Clínicas', description: 'Em cartões de consulta para números diretos e agendamentos.', benefit: 'Acesso rápido para pacientes.' },
          { name: 'Advogados e Contadores', description: 'Em cartões de apresentação com dados completos.', benefit: 'Comunicação direta e profissional.' },
          { name: 'Palestrantes em Eventos', description: 'No último slide da apresentação para networking com o público.', benefit: 'Dezenas de contatos gerados em segundos.' }
        ],
        howItWorks: [
          { title: '1. Preencha os Dados de Contato', description: 'Insira nome, empresa, cargo, celular, e-mail, site e endereço.' },
          { title: '2. Personalize o Design', description: 'Ajuste as cores da sua marca e carregue sua foto ou logotipo.' },
          { title: '3. Baixe e Imprima', description: 'Exporte em SVG vetorial para gráficas ou PNG para telas.' }
        ],
        useCases: [
          { title: 'Verso de Cartões de Visita', description: 'Impresso no verso do cartão tradicional para importação rápida.', example: 'Cartão executivo com QR Code no verso.' },
          { title: 'Crachás de Congressos', description: 'Nos cordões de eventos para networking ágil entre participantes.', example: 'Crachá de evento de tecnologia.' },
          { title: 'Papel de Parede do Celular', description: 'Salvo na tela de bloqueio para mostrar e escanear em encontros.', example: 'Profissional em evento de networking.' },
          { title: 'Assinaturas de E-mail', description: 'Como imagem de rodapé nos seus e-mails de trabalho.', example: 'Assinatura com chamada para salvar contato.' }
        ],
        tips: [
          'Formato Internacional: Sempre utilize o código do país (ex.: +55 para o Brasil) nos telefones.',
          'Campos Principais: Preencha somente os dados necessários para manter o código fácil de escanear.',
          'Correção de Erros: Ao adicionar logotipo central, mantenha o nível Alto (H / 30%).',
          'Tamanho Mínimo: Imprima com pelo menos 25 x 25 mm em cartões físicos.',
          'Vetor SVG para Gráficas: Garante linhas perfeitamente nítidas em relevo ou verniz localizado.'
        ],
        technicalNotes: 'Formato padrão vCard 3.0 com suporte nativo no iOS, Android, macOS e Windows.',
        faqs: [
          { question: 'O que acontece ao escanear o QR Code vCard?', answer: 'O celular abre a agenda de contatos com todos os campos preenchidos para salvar o contato com 1 toque.' },
          { question: 'Meus dados ficam salvos nos servidores de vocês?', answer: 'Não. O código é gerado localmente no seu navegador e não é armazenado em banco de dados externo.' },
          { question: 'Precisa de aplicativo especial para ler?', answer: 'Não, o app de câmera nativo do iPhone e Android lê vCards diretamente.' },
          { question: 'Posso incluir redes sociais?', answer: 'O formato padrão vCard suporta site. Para perfis com links múltiplos, use nosso Cartão de Visita Digital.' },
          { question: 'Como devo escrever os telefones?', answer: 'Use o formato internacional com sinal + (ex.: +55 11 98765-4321).' },
          { question: 'Posso mudar os dados depois de imprimir?', answer: 'Em códigos estáticos não é possível. Para atualizar informações no futuro, utilize nosso Cartão Digital Dinâmico.' }
        ],
        relatedTools: [
          { name: 'Cartão de Visita Digital', slug: 'digital-business-card', description: 'Crie uma página de perfil móvel interativa.' },
          { name: 'QR Code de E-mail', slug: 'email-qr-code-generator', description: 'Rascunhos de e-mail prontos para envio.' },
          { name: 'QR Code de Chamada', slug: 'phone-qr-code-generator', description: 'Disque números diretamente com 1 scan.' },
          { name: 'QR Code de WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Inicie conversas diretas no WhatsApp.' }
        ]
      };
    case 'it':
      return {
        slug: 'vcard-qr-code-generator',
        qrTypeId: 'vcard',
        title: 'Generatore QR Code vCard — Biglietto da Visita Digitale Contactless',
        description: 'Crea codici QR vCard con contatti completi, telefono, email e azienda. Compatibile con iOS e Android. Download gratis in SVG e PNG.',
        h1: 'Generatore QR Code vCard',
        subheadline: 'Crea biglietti di contatto scansionabili che permettono a clienti e colleghi di salvare il tuo numero in rubrica con un solo tocco.',
        heading: 'QR Code di Contatto vCard',
        subheading: 'Trasferisci le credenziali professionali direttamente nella rubrica dello smartphone senza digitare.',
        overviewTitle: 'Cos\'è un Generatore di QR Code vCard?',
        overviewParagraphs: [
          'Un generatore di codici QR vCard codifica i dati di un biglietto da visita elettronico (standard VCF / vCard 3.0) in un codice a barre 2D. Quando viene inquadrato dalla fotocamera di un iPhone o smartphone Android, il sistema riconosce tutti i campi (nome, cognome, azienda, qualifica, cellulare, email, sito web e indirizzo) e mostra il pulsante per salvare il contatto in rubrica.',
          'I tradizionali biglietti cartacei vengono spesso smarriti e richiedono la digitazione manuale dei numeri. Un codice QR vCard elimina qualsiasi errore e trasferisce la scheda completa direttamente su Apple Contatti, Google Contatti o Outlook.',
          'Il nostro generatore funziona al 100% in locale nel tuo browser in modo sicuro e riservato. Puoi esportare file vettoriali SVG per la tipografia o PNG ad alta risoluzione per firme email e sfondi.'
        ],
        sectors: [
          { name: 'Agenti Immobiliari', description: 'Su cartelli e brochure per salvare subito il contatto del venditore.', benefit: 'Massima reattività per gli acquirenti interessati.' },
          { name: 'Direttori Vendite & Commerciali', description: 'Su preventivi e presentazioni per lasciare una linea diretta.', benefit: 'Velocizza la chiusura delle trattative.' },
          { name: 'Consulenti & Liberi Professionisti', description: 'Su proposte e relazioni per un\'immagine moderna e affidabile.', benefit: 'Nessuna barriera nel contatto con nuovi clienti.' },
          { name: 'Medici & Studi Clinici', description: 'Su promemoria appuntamenti e ricette per i recapiti dello studio.', benefit: 'Accesso immediato per i pazienti.' },
          { name: 'Avvocati & Notai', description: 'Sui biglietti da visita con dati professionali completi.', benefit: 'Scambio dati riservato e verificato.' },
          { name: 'Relatori a Conferenze', description: 'Nell\'ultima slide per scambiare contatti con i partecipanti.', benefit: 'Decine di contatti in pochi secondi.' }
        ],
        howItWorks: [
          { title: '1. Inserisci i Dati di Contatto', description: 'Digita nome, azienda, ruolo, cellulare, email, sito e indirizzo.' },
          { title: '2. Personalizza lo Stile Grafico', description: 'Scegli i colori e carica la tua foto profilo o il logo aziendale.' },
          { title: '3. Scarica e Stampa', description: 'Esporta in SVG vettoriale per la stampa o PNG per il digitale.' }
        ],
        useCases: [
          { title: 'Retro dei Biglietti Cartacei', description: 'Stampato sul retro per consentire il salvataggio immediato.', example: 'Biglietto di alta gamma con codice sul retro.' },
          { title: 'Badge per Fiere e Congressi', description: 'Sui cordini porta-badge per fare networking rapido.', example: 'Badge per fiera di settore.' },
          { title: 'Sfondo Schermata di Blocco', description: 'Salvato sullo smartphone per farlo inquadrare durante incontri.', example: 'Networking in riunioni aziendali.' },
          { title: 'Firme di Posta Elettronica', description: 'Inserito nel piè di pagina delle email di lavoro.', example: 'Firma email con invito al salvataggio rapido.' }
        ],
        tips: [
          'Prefisso Internazionale: Includi sempre il prefisso del paese (es. +39 per l\'Italia) nei numeri di telefono.',
          'Campi Essenziali: Compila solo le informazioni principali per mantenere un codice chiaro e leggibile.',
          'Correzione Errori: Quando inserisci un logo centrale, mantieni il livello Alto (H / 30%).',
          'Dimensioni Minime: Almeno 25 x 25 mm sui biglietti da visita stampati.',
          'Vettoriale SVG per la Tipografia: Garantisce massima nitidezza per stampe a rilievo o serigrafiche.'
        ],
        technicalNotes: 'Formato standard vCard 3.0 supportato nativamente da iOS, Android, macOS e Windows.',
        faqs: [
          { question: 'Cosa accade quando si scansiona un QR code vCard?', answer: 'Lo smartphone apre direttamente la rubrica con tutti i dati precompilati pronti per essere salvati con un tocco.' },
          { question: 'I miei dati personali vengono salvati sui vostri server?', answer: 'No. Il codice viene generato interamente nel tuo browser e i dati sono memorizzati solo nell\'immagine.' },
          { question: 'Serve un\'app speciale per scansionarlo?', answer: 'No, la normale fotocamera di iPhone e Android legge i vCard in modo nativo.' },
          { question: 'Posso inserire i miei profili social?', answer: 'Il formato vCard standard supporta i siti web. Per collegamenti social multipli usa il nostro Biglietto Digitale.' },
          { question: 'Come inserire i numeri di telefono internazionali?', answer: 'Utilizza sempre il formato con segno + (ad esempio: +39 333 1234567).' },
          { question: 'Posso modificare i dati dopo aver stampato il codice?', answer: 'Nei codici statici non è possibile. Per aggiornare i dati in futuro usa il Biglietto da Visita Digitale Dinamico.' }
        ],
        relatedTools: [
          { name: 'Biglietto da Visita Digitale', slug: 'digital-business-card', description: 'Crea una pagina profilo mobile interattiva.' },
          { name: 'QR Code Email', slug: 'email-qr-code-generator', description: 'Bozze di email precompilate per contatti rapidi.' },
          { name: 'QR Code Chiamata', slug: 'phone-qr-code-generator', description: 'Avvia chiamate telefoniche vocali istantanee.' },
          { name: 'QR Code WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Avvia chat dirette su WhatsApp con i clienti.' }
        ]
      };
    case 'hi':
      return {
        slug: 'vcard-qr-code-generator',
        qrTypeId: 'vcard',
        title: 'vCard QR कोड जेनरेटर — डिजिटल विज़िटिंग कार्ड (कॉन्टैक्टलेस vCard)',
        description: 'फ़ोन नंबर, ईमेल और कंपनी विवरण के साथ vCard QR कोड बनाएं। iPhone और Android के साथ पूर्णतः संगत। वेक्टर SVG और PNG मुफ़्त डाउनलोड।',
        h1: 'vCard विज़िटिंग कार्ड QR कोड जेनरेटर',
        subheadline: 'स्कैन करने योग्य कॉन्टैक्ट कार्ड बनाएं जिससे ग्राहक और सहकर्मी केवल एक टैप में आपका नंबर फोनबुक में सेव कर सकें।',
        heading: 'vCard कॉन्टैक्ट QR कोड',
        subheading: 'व्यावसायिक संपर्क विवरण सीधे किसी भी स्मार्टफोन की फोनबुक में बिना टाइप किए सुरक्षित करें।',
        overviewTitle: 'vCard QR कोड जेनरेटर क्या है?',
        overviewParagraphs: [
          'vCard QR कोड जेनरेटर आपके इलेक्ट्रॉनिक बिजनेस कार्ड (VCF / vCard 3.0 मानक) के सभी विवरणों को एक 2D बारकोड में बदल देता है। जब कोई भी व्यक्ति अपने iPhone या Android फोन के कैमरे से इसे स्कैन करता है, तो उनका फोन अपने आप नाम, कंपनी, पद, मोबाइल नंबर, ईमेल और पता पहचान कर "Save Contact" का विकल्प दिखाता है।',
          'पारंपरिक कागज़ के विज़िटिंग कार्ड अक्सर खो जाते हैं या फोन में नंबर टाइप करने में गलती हो जाती है। vCard QR कोड से केवल एक सेकंड में पूरी कॉन्टैक्ट प्रोफाइल Apple Contacts, Google Contacts या Outlook में बिना किसी त्रुटि के सेव हो जाती है।',
          'हमारा टूल 100% आपके ब्राउज़र में सुरक्षित रूप से चलता है और आपकी व्यक्तिगत जानकारी किसी सर्वर पर स्टोर नहीं होती। आप प्रिंटिंग के लिए हाई-क्वालिटी SVG या स्क्रीन के लिए PNG डाउनलोड कर सकते हैं।'
        ],
        sectors: [
          { name: 'रियल एस्टेट एजेंट्स व ब्रोकर्स', description: 'प्रॉपर्टी ब्रोशर और विज़िटिंग कार्ड पर लगाएं ताकि ग्राहक सीधे नंबर सेव करें।', benefit: 'घर खरीदने वालों से तुरंत बातचीत शुरू होती है।' },
          { name: 'सेल्स व मार्केटिंग मैनेजर्स', description: 'प्रस्तावों और कैटलॉग में लगाएं ताकि अधिकारी सीधे कॉल कर सकें।', benefit: 'डील्स क्लोज़ करने की गति को बढ़ाता है।' },
          { name: 'कंसल्टेंट्स व फ्रीलांसर्स', description: 'इनवॉइस और प्रेजेंटेशन में डिजिटल पहचान के लिए उपयोग करें।', benefit: 'आधुनिक और पेशेवर पहचान प्रदर्शित करता है।' },
          { name: 'डॉक्टर्स व क्लीनिक्स', description: 'अपॉइंटमेंट कार्ड्स पर क्लीनिक का आधिकारिक नंबर साझा करें।', benefit: 'मरीजों को तुरंत फोन नंबर मिल जाता है।' },
          { name: 'वकील व वित्तीय सलाहकार', description: 'क्लाइंट्स को पूर्ण और सत्यापित संपर्क विवरण प्रदान करें।', benefit: 'सुरक्षित और सीधा संपर्क माध्यम।' },
          { name: 'इवेंट स्पीकर्स व ट्रेनर्स', description: 'अपनी अंतिम स्लाइड पर लगाएं ताकि हॉल में बैठे लोग जुड़ सकें।', benefit: 'कुछ ही सेकंड में दर्जनों व्यावसायिक लीड्स।' }
        ],
        howItWorks: [
          { title: '1. संपर्क विवरण भरें', description: 'अपना नाम, कंपनी, पद, मोबाइल नंबर, ईमेल, वेबसाइट और पता लिखें।' },
          { title: '2. डिज़ाइन कस्टमाइज़ करें', description: 'रंग चुनें और सेंटर में अपनी फोटो या कंपनी का लोगो लगाएं।' },
          { title: '3. डाउनलोड व प्रिंट करें', description: 'विज़िटिंग कार्ड पर प्रिंट करने के लिए वेक्टर SVG डाउनलोड करें।' }
        ],
        useCases: [
          { title: 'विज़िटिंग कार्ड का पिछला हिस्सा', description: 'कागज़ के कार्ड के पीछे प्रिंट करें ताकि लोग डिजिटल रूप से सेव कर सकें।', example: 'प्रीमियम कार्ड जिसके पीछे vCard कोड लगा हो।' },
          { title: 'कॉन्फ़्रेंस आई-कार्ड बैज', description: 'इवेंट में त्वरित नेटवर्किंग के लिए गले के फीते वाले बैज पर।', example: 'व्यापार मेले में नेटवर्किंग कार्ड।' },
          { title: 'फ़ोन लॉक-स्क्रीन वॉलपेपर', description: 'फोन के वॉलपेपर पर लगाएं ताकि मीटिंग में तुरंत स्कैन कराया जा सके।', example: 'बिना कागज़ी कार्ड के नेटवर्किंग।' },
          { title: 'ईमेल सिग्नेचर ग्राफ़िक', description: 'ऑफिशियल ईमेल के नीचे "Save My Contact" का कोड लगाएं।', example: 'ईमेल फुटर कॉन्टैक्ट कार्ड।' }
        ],
        tips: [
          'कंट्री कोड अवश्य लगाएं: फोन नंबर में हमेशा अंतरराष्ट्रीय कोड (जैसे भारत के लिए +91) जोड़ें।',
          'ज़रूरी जानकारी ही भरें: कोड को सरल और तेज़ स्कैनिंग योग्य रखने के लिए मुख्य फ़ील्ड्स ही भरें।',
          'लोगो के लिए हाई एरर करेक्शन: लोगो लगाते समय एरर करेक्शन को हाई (H) पर रखें।',
          'न्यूनतम प्रिंट साइज़: विज़िटिंग कार्ड पर कम से कम 25 x 25 मिमी आकार रखें।',
          'वेक्टर SVG फ़ाइल: प्रिंटिंग प्रेस को हमेशा SVG फ़ाइल दें ताकि प्रिंट बिल्कुल साफ़ और स्पष्ट आए।'
        ],
        technicalNotes: 'मानक vCard 3.0 फॉर्मेट, iOS 11+, Android 9+ और Windows द्वारा समर्थित।',
        faqs: [
          { question: 'vCard QR कोड स्कैन करने पर क्या होता है?', answer: 'स्मार्टफोन का कैमरा कोड को पहचानता है और सभी विवरणों के साथ फोनबुक खोल देता है, जिससे एक टैप में नंबर सेव हो जाता है।' },
          { question: 'क्या मेरी व्यक्तिगत जानकारी आपके सर्वर पर सेव होती है?', answer: 'नहीं। कोड पूरी तरह से आपके ब्राउज़र में बनता है और सारा डेटा केवल इमेज के डॉट्स में सुरक्षित रहता है।' },
          { question: 'क्या इसे स्कैन करने के लिए कोई अलग ऐप चाहिए?', answer: 'नहीं, आधुनिक iPhone और Android फोन के कैमरे से यह सीधे स्कैन होता है।' },
          { question: 'क्या मैं इसमें सोशल मीडिया प्रोफाइल लिंक जोड़ सकता हूँ?', answer: 'मानक vCard में वेबसाइट लिंक जुड़ता है। संपूर्ण मल्टी-लिंक प्रोफाइल के लिए हमारी डिजिटल विज़िटिंग कार्ड टूल का उपयोग करें।' },
          { question: 'अंतरराष्ट्रीय फोन नंबर कैसे लिखें?', answer: 'हमेशा + चिन्ह और देश कोड के साथ लिखें (जैसे: +91 98765 43210)।' },
          { question: 'क्या प्रिंट करने के बाद मैं अपना नंबर बदल सकता हूँ?', answer: 'स्टैटिक vCard कोड में जानकारी नहीं बदली जा सकती। भविष्य में नंबर बदलने के लिए डायनेमिक डिजिटल बिजनेस कार्ड का उपयोग करें।' }
        ],
        relatedTools: [
          { name: 'डिजिटल बिजनेस कार्ड', slug: 'digital-business-card', description: 'इंटरैक्टिव मोबाइल प्रोफाइल पेज बनाएं।' },
          { name: 'ईमेल QR जेनरेटर', slug: 'email-qr-code-generator', description: 'स्कैन करते ही तैयार ईमेल ड्राफ्ट खोलें।' },
          { name: 'फ़ोन कॉल QR जेनरेटर', slug: 'phone-qr-code-generator', description: 'एक स्कैन में सीधे कॉल मिलाएं।' },
          { name: 'WhatsApp QR जेनरेटर', slug: 'whatsapp-qr-code-generator', description: 'ग्राहकों से सीधे व्हाट्सएप चैट शुरू करें।' }
        ]
      };
    default: // 'en'
      return {
        slug: 'vcard-qr-code-generator',
        qrTypeId: 'vcard',
        title: 'vCard QR Code Generator — Digital Contact Business Card',
        description: 'Create digital business card QR codes with full contact details, phone, email, and company info. Compatible with iOS & Android. Free vector SVG & PNG.',
        h1: 'vCard QR Code Generator',
        subheadline: 'Create scannable contact cards that let leads, clients, and colleagues save your complete phone details in a single tap.',
        heading: 'vCard Contact QR Code',
        subheading: 'Seamlessly transfer business credentials directly into smartphone address books.',
        overviewTitle: 'What is a vCard QR Code Generator?',
        overviewParagraphs: [
          'A vCard QR code generator encodes standard electronic business card data (VCF / vCard 3.0 specification) directly into an optical 2D barcode. When scanned by any modern iOS or Android smartphone camera, the operating system parses the embedded fields—including first and last name, organization, job title, direct mobile number, email address, website, and physical office address—and immediately displays an "Add to Contacts" prompt.',
          'Physical paper business cards suffer from an estimated 88% discard rate within one week of receipt, primarily because manually transcribing alphanumeric phone numbers and email addresses into phone books is tedious and prone to typos. A vCard QR code eliminates manual entry entirely, transferring complete, error-free contact records directly into Apple Contacts, Google Contacts, Samsung Address Book, and Microsoft Outlook with a single camera tap.',
          'Because all contact information is serialized directly within the static QR code matrix on your local device, generation is 100% private and offline-capable without storing personal data on external databases. You can download crisp vector SVG files for physical printing or high-DPI PNGs for digital email signatures, resumes, and lock-screen backgrounds.'
        ],
        sectors: [
          { name: 'Real Estate Agents & Brokers', description: 'Print vCard QR codes on open house yard signs, property listing flyers, and luxury presentation folders.', benefit: 'Enables interested home buyers to save agent mobile numbers in one second flat.' },
          { name: 'Sales Executives & Account Managers', description: 'Include vCard codes on printed meeting leave-behinds, proposals, and client presentation slide decks.', benefit: 'Accelerates deal follow-ups by putting direct lines directly into decision-makers’ phones.' },
          { name: 'Consultants & Freelancers', description: 'Add digital vCard codes to resumes, invoices, and pitch decks to streamline client communication.', benefit: 'Projects a modern, tech-forward professional image with zero friction.' },
          { name: 'Healthcare Providers & Clinics', description: 'Display doctor and clinic contact QR codes on appointment reminder cards and prescription packets.', benefit: 'Ensures patients have immediate access to emergency phone numbers and office emails.' },
          { name: 'Legal & Financial Advisors', description: 'Equip partner business cards and corporate literature with secure, complete contact records.', benefit: 'Provides high-net-worth clients with direct concierge phone access.' },
          { name: 'Trade Show Exhibitors & Speakers', description: 'Display your vCard code on presentation closing slides and booth staff name badges.', benefit: 'Captures hundreds of attendee leads without handing out stacks of paper cards.' }
        ],
        howItWorks: [
          { title: '1. Fill in Contact Fields', description: 'Input your name, job title, company, direct phone number, email address, website, and office location.' },
          { title: '2. Customize Visual Identity', description: 'Apply your personal or corporate color palette, pick rounded or dot modules, and upload a central portrait photo or logo.' },
          { title: '3. Print on Cards or Badges', description: 'Download resolution-independent Vector SVG for letterpress/foil printing, or high-definition PNG for digital cards.' }
        ],
        useCases: [
          { title: 'Back of Physical Business Cards', description: 'Printed cleanly on the reverse side of paper cards for tactile traditionalists who want instant digital storage.', example: 'Executive business card with an elegant monochrome vCard QR on the back.' },
          { title: 'Summit & Conference Badges', description: 'Printed directly onto attendee lanyard passes to facilitate rapid peer-to-peer contact exchange in expo halls.', example: 'Tech expo badge enabling quick networking scans between sessions.' },
          { title: 'Smartphone Lock-Screen Wallpaper', description: 'Saved as phone background image during networking events so peers can scan your screen directly.', example: 'Sales rep presenting lock-screen QR at an industry mixer.' },
          { title: 'Email Signature Attachments', description: 'Embedded as a compact digital graphic at the bottom of outgoing business emails for mobile recipients.', example: 'Consultant email signature with a "Scan to save my mobile" tag.' }
        ],
        tips: [
          'International Phone Formatting: Always use international E.164 notation (e.g. +1 555 123 4567) with country codes so global contacts can dial seamlessly.',
          'Omit Unnecessary Fields: QR density increases with every character. Omit empty or non-essential fields to keep the code simpler and easier to scan from a distance.',
          'High Error Correction for Logos: If adding your company logo or profile icon in the center, ensure Level H (30%) error correction is enabled.',
          'Minimum Physical Print Size: For physical business cards, ensure the printed QR code is at least 25 x 25 mm (1 x 1 inch) to guarantee fast smartphone autofocus.',
          'Vector SVG for Offset Printing: Provide vector SVG format to your print shop to avoid raster pixelation or blurry module edges.'
        ],
        technicalNotes: 'Standards Compliance: Generates standard vCard 3.0 payloads natively parsed by iOS Contacts, Google Contacts, Android OS, and desktop email clients.',
        faqs: [
          { question: 'What happens when someone scans a vCard QR code with their phone?', answer: 'The native smartphone camera detects the vCard payload and presents an "Add to Contacts" banner. Tapping the banner opens the phone address book with all details pre-filled for 1-tap saving.' },
          { question: 'Is my personal contact information uploaded or saved on your server?', answer: 'No. Our vCard generator operates 100% client-side in your browser. All contact fields are embedded directly into the static QR code pattern in your device memory without remote database logging.' },
          { question: 'Does the scanner need a special app to read a vCard QR code?', answer: 'No special app is required. All modern iPhones running iOS 11+ and Android smartphones running Android 9+ have built-in vCard decoding inside their native camera apps.' },
          { question: 'Can I include social media profiles or multiple phone numbers in the vCard?', answer: 'Standard vCard 3.0 supports primary phone, email, website, and address fields. To share rich multi-link profiles and social media handles on a hosted page, use our Digital Business Card tool.' },
          { question: 'What is the best way to format phone numbers for international clients?', answer: 'Always include the plus sign and international country code (for example, +1 for US/Canada, +44 for UK, +91 for India). This guarantees seamless one-tap dialing.' },
          { question: 'Can I edit my contact details after printing a static vCard QR code?', answer: 'Because static vCard codes store data directly in the pixel modules, details cannot be changed once printed. To update details in the future, use our Dynamic QR code or Digital Business Card.' }
        ],
        relatedTools: [
          { name: 'Digital Business Card', slug: 'digital-business-card', description: 'Create hosted mobile business cards with links, bio, and vCard download.' },
          { name: 'Email QR Generator', slug: 'email-qr-code-generator', description: 'Pre-fill recipient email addresses and subject lines for business inquiries.' },
          { name: 'Phone QR Generator', slug: 'phone-qr-code-generator', description: 'Enable one-tap phone calls directly from printed advertisements.' },
          { name: 'WhatsApp QR Generator', slug: 'whatsapp-qr-code-generator', description: 'Launch instant WhatsApp business conversations with prospective leads.' }
        ]
      };
  }
}
