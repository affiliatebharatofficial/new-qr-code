import type { Locale } from '../config';
import type { LocalizedPageContent } from './types';

export function getWifiContent(locale: Locale): LocalizedPageContent {
  switch (locale) {
    case 'es':
      return {
        slug: 'wifi-qr-code-generator',
        qrTypeId: 'wifi',
        title: 'Generador de Código QR WiFi — Conéctate sin Contraseñas',
        description: 'Crea códigos QR WiFi gratis para redes de invitados, cafeterías, hoteles y oficinas. Conexión instantánea con cámara y descarga en SVG y PNG.',
        h1: 'Generador de Código QR WiFi',
        subheadline: 'Crea tarjetas de acceso WiFi escaneables. Permite que clientes y visitas se conecten al instante sin escribir contraseñas complejas.',
        heading: 'Código QR de Conexión WiFi',
        subheading: 'Acceso a redes inalámbricas rápido, seguro y sin teclear contraseñas para locales y hogares.',
        overviewTitle: '¿Qué es un Generador de Código QR WiFi?',
        overviewParagraphs: [
          'Un generador de código QR WiFi te permite crear un código de barras bidimensional que almacena las credenciales de tu red inalámbrica, incluyendo el nombre de red (SSID), la clave de seguridad y el tipo de encriptación (WPA, WPA2, WPA3 o WEP). Al escanear el código con la cámara de un smartphone, el dispositivo muestra un aviso para unirse a la red sin necesidad de escribir nada.',
          'Compartir redes WiFi tradicionales suele causar errores de escritura, retrasos en la atención al cliente y riesgos de seguridad al anotar claves en pizarras. Un código QR WiFi utiliza el estándar oficial reconocido por iOS, Android, macOS y Windows.',
          'Nuestro generador funciona 100% en tu navegador mediante HTML5 Canvas, por lo que tu contraseña nunca se envía a servidores externos ni queda almacenada en bases de datos. Descarga tus archivos en formato PNG de alta resolución o gráficos vectoriales SVG listos para imprimir.'
        ],
        sectors: [
          { name: 'Cafeterías y Bares', description: 'Coloca carteles en cada mesa para que los clientes se conecten sin interrumpir al personal.', benefit: 'Reduce colas y consultas repetitivas.' },
          { name: 'Hoteles y Alojamientos', description: 'Imprime códigos en habitaciones y tarjetas de bienvenida para una llegada cómoda.', benefit: 'Mejora la satisfacción del huésped.' },
          { name: 'Oficinas y Coworkings', description: 'Muestra códigos exclusivos para visitas en salas de reuniones y zonas comunes.', benefit: 'Separa la red corporativa de los dispositivos de invitados.' },
          { name: 'Clínicas y Salones', description: 'Ofrece entretenimiento a los pacientes en la sala de espera sin esfuerzo adicional.', benefit: 'Agradable experiencia de espera.' },
          { name: 'Eventos y Congresos', description: 'Ubica lonas con códigos QR en auditorios para conectar a cientos de asistentes a la vez.', benefit: 'Conexión rápida para grandes audiencias.' },
          { name: 'Hogares Particulares', description: 'Enmarca un código elegante en la entrada para compartir el WiFi con amigos y familiares.', benefit: 'Evita dictar contraseñas largas.' }
        ],
        howItWorks: [
          { title: '1. Introduce las Credenciales', description: 'Escribe el nombre exacto de la red (SSID), selecciona la encriptación (WPA/WPA2/WPA3) e introduce la contraseña.' },
          { title: '2. Personaliza el Diseño', description: 'Elige colores de marca, formas de puntos redondeadas y sube el logotipo de tu establecimiento.' },
          { title: '3. Descarga e Imprime', description: 'Exporta en PNG de alta definición o SVG vectorial para marcos de sobremesa o adhesivos.' }
        ],
        useCases: [
          { title: 'Soportes de Metacrilato en Mesas', description: 'Expositores 10x15 cm en mesas de comedor para conexión instantánea.', example: 'Cafetería céntrica con 20 soportes de mesa.' },
          { title: 'Guías de Bienvenida para Huéspedes', description: 'Tarjetas en apartamentos turísticos junto a las normas de la casa.', example: 'Anfitrión de Airbnb con tarjeta en el salón.' },
          { title: 'Salas de Reuniones', description: 'Placas montadas junto a las pantallas de proyección para clientes externos.', example: 'Sala de juntas corporativa con red de invitados.' },
          { title: 'Mostradores de Recepción', description: 'Carteles visibles en clínicas dentales y despachos profesionales.', example: 'Recepción con código QR de alto contraste.' }
        ],
        tips: [
          'Sensibilidad a Mayúsculas: Comprueba que el SSID coincida exactamente con la configuración de tu router.',
          'Seguridad Local: Todo se procesa en la memoria de tu navegador, sin enviar datos a la nube.',
          'Alto Contraste: Utiliza módulos oscuros sobre fondo blanco para garantizar una lectura rápida.',
          'Margen de Seguridad: Deja al menos 10 px de borde blanco alrededor del código.',
          'Compatibilidad Total: Funciona directamente con la app de cámara nativa en iOS, Android y Windows.'
        ],
        technicalNotes: 'Estándar MECARD oficial: Formato "WIFI:S:SSID;T:WPA;P:Password;;" compatible con todos los smartphones modernos.',
        faqs: [
          { question: '¿Cómo se conectan los usuarios escaneando el código QR WiFi?', answer: 'Solo tienen que abrir la app de cámara de su móvil, apuntar al código y pulsar el botón "Unirse a la red" que aparece en pantalla.' },
          { question: '¿Se envía mi contraseña a vuestros servidores?', answer: 'No. Nuestro generador funciona 100% en tu navegador. Tus credenciales nunca salen de tu dispositivo.' },
          { question: '¿Funciona en iPhone y Android?', answer: 'Sí, todos los dispositivos con iOS 11+ y Android 9+ disponen de lector QR nativo en su cámara.' },
          { question: '¿Qué hago si mi red no tiene contraseña?', answer: 'Selecciona la opción "Sin contraseña (Red abierta)" en el desplegable de seguridad.' },
          { question: '¿Puedo poner el logotipo de mi negocio en el centro?', answer: 'Sí, puedes subir tu logo y el sistema ajustará automáticamente la corrección de errores al nivel Alto (30%).' },
          { question: '¿Tienen fecha de caducidad estos códigos QR?', answer: 'No, son códigos estáticos permanentes que funcionarán mientras no cambies el nombre o la clave de tu router.' }
        ],
        relatedTools: [
          { name: 'QR de Enlace Web', slug: 'url-to-qr-code', description: 'Dirige a los usuarios a tu página web o menú digital.' },
          { name: 'QR de Menú para Restaurantes', slug: 'restaurant-menu-qr-code', description: 'Menús digitales sin contacto para mesas.' },
          { name: 'QR de Tarjeta vCard', slug: 'vcard-qr-code-generator', description: 'Comparte datos de contacto profesionales al instante.' },
          { name: 'QR de Reseñas de Google', slug: 'google-reviews-qr-code', description: 'Consigue más valoraciones de 5 estrellas en Google.' }
        ]
      };
    case 'de':
      return {
        slug: 'wifi-qr-code-generator',
        qrTypeId: 'wifi',
        title: 'WLAN QR Code Generator — Ohne Passwort mit WLAN verbinden',
        description: 'Kostenlose WLAN QR-Codes für Gastnetzwerke, Cafés, Hotels und Büros erstellen. Sofortige Kamera-Verbindung für iOS & Android. Vektor-SVG & PNG Download.',
        h1: 'WLAN QR Code Generator',
        subheadline: 'Erstellen Sie scanbare WLAN-Zugangskarten. Lassen Sie Gäste und Kunden sich sofort verbinden – ganz ohne mühsames Eintippen langer Passwörter.',
        heading: 'WLAN-Verbindungs-QR-Code',
        subheading: 'Schneller, sicherer und passwortfreier Netzwerkzugang für Gastronomie, Unternehmen und Zuhause.',
        overviewTitle: 'Was ist ein WLAN QR Code Generator?',
        overviewParagraphs: [
          'Ein WLAN QR Code Generator wandelt Ihre Netzwerkdaten (SSID, Verschlüsselungstyp wie WPA/WPA2/WPA3 und Passwort) in einen 2D-Barcode um. Wenn Gäste den Code mit ihrer Smartphone-Kamera scannen, verbindet sich das Gerät automatisch mit dem WLAN, ohne dass Zeichen manuell eingegeben werden müssen.',
          'Klassische WLAN-Zugänge führen oft zu Tippfehlern bei Sonderzeichen und unnötigen Nachfragen beim Personal. Ein WLAN QR-Code nutzt den standardisierten Syntax-Befehl "WIFI:S:SSID;T:WPA;P:Passwort;;", der von Apple iOS, Google Android und Windows nativ erkannt wird.',
          'Unser Generator arbeitet zu 100% lokal im Browser. Ihre Passwörter werden niemals über das Internet übertragen oder in Datenbanken gespeichert. Laden Sie gestochen scharfe Vektor-SVG-Dateien für den Druck oder hochauflösende PNGs herunter.'
        ],
        sectors: [
          { name: 'Cafés & Restaurants', description: 'Tischaufsteller für schnellen Internetzugang ohne Serviceunterbrechung.', benefit: 'Entlastet das Servicepersonal im Tagesgeschäft.' },
          { name: 'Hotels & Ferienwohnungen', description: 'Elegante Aufsteller im Zimmer für reibungslosen Check-in.', benefit: 'Steigert die Gästezufriedenheit ab der ersten Minute.' },
          { name: 'Büros & Coworking Spaces', description: 'Sicherer Gastzugang in Konferenzräumen für Geschäftspartner.', benefit: 'Trennt Gastgeräte strikt vom Firmennetzwerk.' },
          { name: 'Arztpraxen & Salons', description: 'Angenehmer Wartezimmer-Service für Patienten und Kunden.', benefit: 'Verbessert das Kundenerlebnis im Wartebereich.' },
          { name: 'Messen & Events', description: 'Großflächige Banner in Messehallen für rasche Teilnehmer-Konnektivität.', benefit: 'Schnelle Verbindung für hunderte Besucher gleichzeitig.' },
          { name: 'Privathaushalte', description: 'Stilvoll gerahmter QR-Code im Flur für Freunde und Familie.', benefit: 'Kein Vorlesen komplizierter Router-Passwörter mehr.' }
        ],
        howItWorks: [
          { title: '1. Zugangsdaten Eingeben', description: 'Netzwerknamen (SSID) und Passwort exakt eintragen sowie Verschlüsselung wählen.' },
          { title: '2. Design Anpassen', description: 'Farben auswählen, Punktmuster bestimmen und Firmenlogo im Zentrum platzieren.' },
          { title: '3. Herunterladen & Drucken', description: 'Als Vektor-SVG oder hochauflösendes PNG exportieren und aufstellen.' }
        ],
        useCases: [
          { title: 'Acryl-Tischaufsteller', description: 'Kompakte Aufsteller auf Bistrotischen für sofortiges Scannen.', example: 'Innenstadt-Café mit 25 Tischen.' },
          { title: 'Gäste-Infomappen', description: 'Beileger in Airbnb-Willkommensmappen.', example: 'Ferienhausvermieter mit Willkommenskarte.' },
          { title: 'Konferenzraum-Schilder', description: 'Wandaufsteller unter Präsentationsmonitoren.', example: 'Meetingraum für Kundenpräsentationen.' },
          { title: 'Empfangsbereiche', description: 'Schild am Empfangstresen von Kanzleien und Praxen.', example: 'Empfangsbereich mit klarem QR-Aufsteller.' }
        ],
        tips: [
          'Groß-/Kleinschreibung beachten: Der Name (SSID) muss exakt mit den Router-Einstellungen übereinstimmen.',
          'Lokale Sicherheit: Die Erstellung erfolgt zu 100% im Browser-Speicher ohne Serverübertragung.',
          'Hoher Kontrast: Dunkle Muster auf weißem Grund scannen bei allen Lichtverhältnissen am schnellsten.',
          'Ruhezone einhalten: Mindestens 10 px weißer Rand um den Code herum freilassen.',
          'Universal einsetzbar: Funktioniert direkt mit Standard-Kamera-Apps ohne Zusatzsoftware.'
        ],
        technicalNotes: 'Offizieller WiFi-Syntax-Standard kompatibel mit iOS 11+, Android 9+ und Windows 10/11.',
        faqs: [
          { question: 'Wie verbinden sich Gäste über den WLAN QR-Code?', answer: 'Smartphone-Kamera auf den Code richten und auf die angezeigte Benachrichtigung "Netzwerk beitreten" tippen.' },
          { question: 'Werden meine Zugangsdaten auf Ihren Servern gespeichert?', answer: 'Nein. Die Erstellung erfolgt vollständig lokal in Ihrem Browser.' },
          { question: 'Funktioniert das sowohl auf iPhone als auch auf Android?', answer: 'Ja, alle modernen Smartphones unterstützen diesen Standard nativ.' },
          { question: 'Was mache ich bei einem offenen Netzwerk ohne Passwort?', answer: 'Wählen Sie im Menü einfach "Keine (Offenes Netzwerk)" aus.' },
          { question: 'Kann ich mein Firmenlogo einbinden?', answer: 'Ja, das Logo wird zentriert und die Fehlerkorrektur automatisch auf Stufe H (30%) erhöht.' },
          { question: 'Laufen WLAN QR-Codes irgendwann ab?', answer: 'Nein, statische QR-Codes sind zeitlich unbegrenzt gültig, solange Ihre Router-Zugangsdaten unverändert bleiben.' }
        ],
        relatedTools: [
          { name: 'Weblink QR Generator', slug: 'url-to-qr-code', description: 'Leiten Sie Besucher auf Ihre Website oder Speisekarte.' },
          { name: 'Digitale Speisekarte', slug: 'restaurant-menu-qr-code', description: 'Kontaktlose Speisekarten für Restauranttische.' },
          { name: 'vCard Visitenkarte', slug: 'vcard-qr-code-generator', description: 'Kontaktdaten mit einem Scan im Adressbuch speichern.' },
          { name: 'Google Bewertungen QR', slug: 'google-reviews-qr-code', description: 'Mehr 5-Sterne-Bewertungen auf Google sammeln.' }
        ]
      };
    case 'fr':
      return {
        slug: 'wifi-qr-code-generator',
        qrTypeId: 'wifi',
        title: 'Générateur de QR Code WiFi — Se Connecter au WiFi Sans Mot de Passe',
        description: 'Créez un QR code WiFi gratuit pour invités, restaurants, hôtels et bureaux. Connexion instantanée par appareil photo. Téléchargement SVG & PNG.',
        h1: 'Générateur de QR Code WiFi',
        subheadline: 'Générez des cartes d\'accès Wi-Fi scannables. Permettez à vos clients et invités de se connecter en un clic sans saisir de mot de passe.',
        heading: 'QR Code de Connexion Wi-Fi',
        subheading: 'Accès réseau rapide, sécurisé et sans saisie manuelle pour les espaces publics et privés.',
        overviewTitle: 'Qu\'est-ce qu\'un Générateur de QR Code WiFi ?',
        overviewParagraphs: [
          'Un générateur de QR code Wi-Fi encode les identifiants de votre réseau sans fil (nom SSID, mot de passe et protocole de sécurité WPA/WPA2/WPA3 ou WEP) dans un code-barres 2D. Lorsque vos visiteurs scannent le code avec l\'appareil photo de leur téléphone, une notification apparaît pour se connecter directement.',
          'La saisie manuelle de mots de passe complexes génère souvent des erreurs et fait perdre du temps à vos équipes. Le format standard "WIFI:S:SSID;T:WPA;P:MotDePasse;;" est reconnu nativement par iOS, Android, macOS et Windows.',
          'Notre outil fonctionne à 100% dans votre navigateur Web. Votre mot de passe n\'est jamais envoyé sur un serveur distant. Vous pouvez exporter vos créations en PNG haute résolution ou en format vectoriel SVG prêt pour l\'impression professionnelle.'
        ],
        sectors: [
          { name: 'Cafés et Restaurants', description: 'Chevalets de table pour une connexion autonome sans solliciter les serveurs.', benefit: 'Gain de temps considérable pour le personnel.' },
          { name: 'Hôtels et Gîtes', description: 'Affichage dans les chambres et livrets d\'accueil pour un séjour fluide.', benefit: 'Améliore immédiatement la satisfaction client.' },
          { name: 'Bureaux et Coworking', description: 'Réseau invité dédié affiché en salle de réunion pour les partenaires.', benefit: 'Isole le réseau d\'entreprise des appareils externes.' },
          { name: 'Cabinets Médicaux et Salons', description: 'Accès Wi-Fi agréable pour faire patienter les visiteurs en salle d\'attente.', benefit: 'Expérience d\'accueil moderne et professionnelle.' },
          { name: 'Salons et Congrès', description: 'Bannières grand format dans les halls pour connecter des centaines de personnes.', benefit: 'Gestion fluide des flux de visiteurs.' },
          { name: 'Domicile Privé', description: 'Cadre élégant dans l\'entrée pour vos amis et invités.', benefit: 'Plus besoin d\'épeler la clé de votre box.' }
        ],
        howItWorks: [
          { title: '1. Saisir les Identifiants', description: 'Indiquez le nom exact du réseau (SSID), le type de sécurité et le mot de passe.' },
          { title: '2. Personnaliser le Graphisme', description: 'Choisissez vos couleurs, le style des points et intégrez le logo de votre établissement.' },
          { title: '3. Télécharger et Imprimer', description: 'Exportez en SVG vectoriel ou PNG haute résolution pour vos supports physiques.' }
        ],
        useCases: [
          { title: 'Chevalets en Plexiglas sur Table', description: 'Supports de table 10x15 cm pour bars et brasseries.', example: 'Restaurant avec 30 tables équipées.' },
          { title: 'Livret d\'Accueil Airbnb', description: 'Fiche insérée dans le guide des voyageurs.', example: 'Propriétaire de location saisonnière.' },
          { title: 'Salles de Conférence', description: 'Plaque murale sous les écrans de projection.', example: 'Salle de réunion d\'entreprise.' },
          { title: 'Comptoirs d\'Accueil', description: 'Affichage au niveau de la caisse ou de la réception.', example: 'Cabinet de consultation avec code clair.' }
        ],
        tips: [
          'Respectez la Casse : Le nom du réseau (SSID) doit être strictement identique à celui de votre routeur.',
          'Confidentialité Totale : Traitement 100% local dans la mémoire de votre navigateur.',
          'Contraste Élevé : Privilégiez des modules sombres sur fond blanc pour un scan instantané.',
          'Marge de Sécurité : Laissez au minimum 10 px de blanc autour du code.',
          'Scan Universel : Fonctionne avec l\'application appareil photo standard sans installer d\'application tierce.'
        ],
        technicalNotes: 'Conforme au protocole standard MECARD supporté par iOS 11+, Android 9+ et Windows 10/11.',
        faqs: [
          { question: 'Comment les invités se connectent-ils en scannant le QR code ?', answer: 'Il suffit d\'ouvrir l\'appareil photo du smartphone, de pointer vers le QR code et d\'appuyer sur le bouton "Rejoindre le réseau".' },
          { question: 'Mon mot de passe est-il envoyé sur vos serveurs ?', answer: 'Non. Tout le traitement s\'effectue localement dans votre navigateur Web.' },
          { question: 'Est-ce compatible avec les iPhone et les téléphones Android ?', answer: 'Oui, tous les smartphones récents intègrent un lecteur de QR code Wi-Fi natif.' },
          { question: 'Comment faire si mon réseau Wi-Fi est ouvert sans mot de passe ?', answer: 'Sélectionnez l\'option "Aucune (Réseau ouvert)" dans la liste déroulante.' },
          { question: 'Puis-je intégrer le logo de mon entreprise au centre ?', answer: 'Oui, vous pouvez importer votre logo et le niveau de correction d\'erreur passera automatiquement à Élevé (30%).' },
          { question: 'Les QR codes Wi-Fi ont-ils une date d\'expiration ?', answer: 'Non, ce sont des codes statiques valables indéfiniment tant que les identifiants de votre box ne changent pas.' }
        ],
        relatedTools: [
          { name: 'QR Code Lien Web', slug: 'url-to-qr-code', description: 'Redirigez vos clients vers votre site ou menu en ligne.' },
          { name: 'QR Code Menu Restaurant', slug: 'restaurant-menu-qr-code', description: 'Menus digitaux sans contact pour les tables.' },
          { name: 'QR Code Carte vCard', slug: 'vcard-qr-code-generator', description: 'Partagez vos coordonnées professionnelles complètes.' },
          { name: 'QR Code Avis Google', slug: 'google-reviews-qr-code', description: 'Collectez des avis 5 étoiles sur Google Maps.' }
        ]
      };
    case 'pt':
      return {
        slug: 'wifi-qr-code-generator',
        qrTypeId: 'wifi',
        title: 'Gerador de QR Code Wi-Fi — Conectar ao Wi-Fi Sem Senha',
        description: 'Crie QR Codes Wi-Fi gratuitos para visitantes, cafés, hotéis e escritórios. Conexão instantânea pela câmera. Download em vetor SVG e PNG.',
        h1: 'Gerador de QR Code Wi-Fi',
        subheadline: 'Gere cartões de acesso Wi-Fi escaneáveis. Conecte clientes e visitantes instantaneamente sem necessidade de digitar senhas.',
        heading: 'QR Code de Conexão Wi-Fi',
        subheading: 'Acesso rápido e seguro à rede sem fio para comércios e residências.',
        overviewTitle: 'O que é um Gerador de QR Code Wi-Fi?',
        overviewParagraphs: [
          'Um gerador de QR Code Wi-Fi permite criar um código bidimensional contendo as credenciais da sua rede sem fio (nome SSID, senha e tipo de segurança WPA/WPA2/WPA3 ou WEP). Ao apontar a câmera do celular para o código impresso, o aparelho exibe uma notificação para se conectar na hora.',
          'Digitar senhas longas com caracteres especiais gera erros e filas no atendimento. O QR Code Wi-Fi segue o padrão oficial reconhecido pelo iOS, Android, macOS e Windows.',
          'Nossa ferramenta funciona 100% no seu navegador sem enviar senhas para servidores externos. Exporte em PNG de alta definição ou vetor SVG pronto para impressão gráfica.'
        ],
        sectors: [
          { name: 'Cafés e Restaurantes', description: 'Displays nas mesas para que os clientes acessem a internet com facilidade.', benefit: 'Elimina interrupções constantes aos atendentes.' },
          { name: 'Hotéis e Pousadas', description: 'Placas nos quartos e guias de boas-vindas para check-in ágil.', benefit: 'Aumenta a satisfação dos hóspedes desde a chegada.' },
          { name: 'Escritórios e Coworkings', description: 'Rede de visitantes sinalizada em salas de reunião.', benefit: 'Mantém a rede corporativa segura e isolada.' },
          { name: 'Clínicas e Consultórios', description: 'Internet rápida para pacientes na sala de espera.', benefit: 'Melhora a experiência de espera do cliente.' },
          { name: 'Feiras e Eventos', description: 'Banners nos pavilhões para conexão rápida de congressistas.', benefit: 'Conexão prática para grandes públicos.' },
          { name: 'Residências', description: 'Quadro decorativo na sala para visitas e familiares.', benefit: 'Dispensa o compartilhamento verbal da senha.' }
        ],
        howItWorks: [
          { title: '1. Digite as Credenciais', description: 'Insira o nome exato da rede (SSID), a segurança e a senha de acesso.' },
          { title: '2. Personalize o Visual', description: 'Escolha cores da sua marca, formato dos módulos e adicione seu logotipo.' },
          { title: '3. Baixe e Imprima', description: 'Faça o download em SVG vetorial ou PNG nítido e posicione no balcão.' }
        ],
        useCases: [
          { title: 'Displays de Acrílico para Mesas', description: 'Suportes de 10x15 cm em mesas de bistrô.', example: 'Cafeteria com 20 mesas sinalizadas.' },
          { title: 'Guias de Boas-Vindas Airbnb', description: 'Cartão junto ao manual de instruções da casa.', example: 'Anfitrião de aluguel por temporada.' },
          { title: 'Salas de Reunião', description: 'Placas abaixo dos monitores de apresentação.', example: 'Espaço corporativo para clientes.' },
          { title: 'Balcão de Recepção', description: 'Cartaz na entrada de clínicas e escritórios.', example: 'Recepção com código de fácil leitura.' }
        ],
        tips: [
          'Atenção a Maiúsculas e Minúsculas: O SSID deve corresponder exatamente ao cadastrado no roteador.',
          'Segurança Local: Seus dados não são enviados nem salvos em servidores na nuvem.',
          'Alto Contraste: Use módulos escuros sobre fundo claro para leitura rápida.',
          'Margem Livre: Deixe pelo menos 10 px de margem em volta do código.',
          'Compatibilidade Nativa: Funciona direto no aplicativo de câmera padrão do smartphone.'
        ],
        technicalNotes: 'Formato padrão MECARD compatível com iOS 11+, Android 9+ e computadores Windows.',
        faqs: [
          { question: 'Como os clientes se conectam usando o QR Code Wi-Fi?', answer: 'Basta abrir a câmera do smartphone, apontar para o código e tocar no aviso "Conectar à Rede".' },
          { question: 'Minha senha fica salva nos servidores de vocês?', answer: 'Não. A geração do código acontece 100% dentro do seu próprio navegador.' },
          { question: 'Funciona tanto no iPhone quanto no Android?', answer: 'Sim, todos os smartphones modernos possuem leitor de QR Code nativo na câmera.' },
          { question: 'E se a minha rede não tiver senha?', answer: 'Basta selecionar a opção "Nenhuma (Rede Aberta)" no campo de criptografia.' },
          { question: 'Posso colocar o logotipo da minha empresa?', answer: 'Sim, você pode carregar sua imagem e o sistema ajustará a correção de erros para Alto (30%).' },
          { question: 'Os códigos QR de Wi-Fi expiram?', answer: 'Não, são códigos estáticos permanentes que funcionam enquanto os dados do seu roteador não mudarem.' }
        ],
        relatedTools: [
          { name: 'QR Code de Link URL', slug: 'url-to-qr-code', description: 'Direcione visitantes para seu site ou cardápio online.' },
          { name: 'Cardápio Digital QR', slug: 'restaurant-menu-qr-code', description: 'Cardápios sem contato para mesas de restaurante.' },
          { name: 'Cartão de Visita vCard', slug: 'vcard-qr-code-generator', description: 'Compartilhe contatos profissionais instantaneamente.' },
          { name: 'QR Code Avaliações Google', slug: 'google-reviews-qr-code', description: 'Receba mais avaliações 5 estrelas no Google Maps.' }
        ]
      };
    case 'it':
      return {
        slug: 'wifi-qr-code-generator',
        qrTypeId: 'wifi',
        title: 'Generatore QR Code WiFi — Connettersi al WiFi Senza Password',
        description: 'Crea codici QR WiFi gratuiti per ospiti, bar, hotel e uffici. Connessione immediata tramite fotocamera. Download in vettoriale SVG e PNG.',
        h1: 'Generatore QR Code WiFi',
        subheadline: 'Crea schede di accesso Wi-Fi scansionabili. Consenti a clienti e ospiti di connettersi istantaneamente senza digitare password complesse.',
        heading: 'QR Code per Connessione Wi-Fi',
        subheading: 'Accesso wireless veloce, sicuro e senza digitazione per locali commerciali e abitazioni.',
        overviewTitle: 'Cos\'è un Generatore di QR Code WiFi?',
        overviewParagraphs: [
          'Un generatore di codici QR Wi-Fi codifica le credenziali della tua rete senza fili (nome SSID, password e protocollo di sicurezza WPA/WPA2/WPA3 o WEP) in un codice a barre 2D. Quando i visitatori inquadrano il codice con la fotocamera dello smartphone, il dispositivo propone di collegarsi alla rete con un semplice tocco.',
          'Dover dettare o digitare password complesse con simboli speciali crea errori e rallenta il servizio. Il codice QR Wi-Fi utilizza lo standard MECARD riconosciuto nativamente da Apple iOS, Android e Windows.',
          'Il nostro generatore funziona al 100% in locale nel tuo browser Web: la tua password non viene mai inviata a server esterni né archiviata in database remoti. Puoi esportare in PNG ad alta risoluzione o in vettoriale SVG pronto per la stampa.'
        ],
        sectors: [
          { name: 'Bar e Ristoranti', description: 'Cavalletti su ogni tavolo per una connessione rapida senza disturbare lo staff.', benefit: 'Elimina le continue richieste della password al personale.' },
          { name: 'Hotel e B&B', description: 'Cartelli nelle camere e opuscoli di benvenuto per un check-in confortevole.', benefit: 'Aumenta il gradimento degli ospiti fin dal primo momento.' },
          { name: 'Uffici e Spazi Coworking', description: 'Accesso ospiti dedicato nelle sale riunioni per clienti e consulenti.', benefit: 'Separa la rete aziendale dai dispositivi esterni.' },
          { name: 'Studi Medici e Saloni', description: 'Connessione confortevole per i clienti nelle sale d\'attesa.', benefit: 'Migliora l\'esperienza durante l\'attesa.' },
          { name: 'Fiere e Congressi', description: 'Grandi banner nei padiglioni per collegare centinaia di visitatori contemporaneamente.', benefit: 'Connettività immediata per grandi eventi.' },
          { name: 'Abitazioni Private', description: 'Elegante cornice all\'ingresso per amici e parenti in visita.', benefit: 'Evita di dover dettare lunghe chiavi del router.' }
        ],
        howItWorks: [
          { title: '1. Inserisci le Credenziali', description: 'Digita il nome esatto della rete (SSID), la sicurezza e la password.' },
          { title: '2. Personalizza lo Stile', description: 'Scegli i colori, i moduli grafici e carica il logo della tua attività.' },
          { title: '3. Scarica e Stampa', description: 'Esporta in formato vettoriale SVG o PNG ad alta definizione per i tuoi espositori.' }
        ],
        useCases: [
          { title: 'Espositori in Plexiglas per Tavoli', description: 'Supporti 10x15 cm posizionati sui tavoli da pranzo.', example: 'Bar centrale con 25 tavoli attrezzati.' },
          { title: 'Libretti di Benvenuto Airbnb', description: 'Scheda inserita nella guida della casa vacanze.', example: 'Host di casa vacanze con scheda nel soggiorno.' },
          { title: 'Sale Riunioni', description: 'Targhetta posizionata sotto gli schermi di proiezione.', example: 'Sala riunioni aziendale per clienti.' },
          { title: 'Bancone della Reception', description: 'Cartello sul banco cassa di cliniche e uffici.', example: 'Reception con codice ad alto contrasto.' }
        ],
        tips: [
          'Rispetta Maiuscole e Minuscole: Il nome SSID deve corrispondere perfettamente a quello del modem.',
          'Sicurezza al 100% Locale: I dati rimangono nel browser e non transitano su server remoti.',
          'Contrasto Elevato: Usa moduli scuri su sfondo bianco per una scansione fulminea.',
          'Margine di Rispetto: Mantieni almeno 10 px di bordo bianco attorno al codice.',
          'Compatibilità Nativa: Funziona con l\'app fotocamera standard senza installare app aggiuntive.'
        ],
        technicalNotes: 'Formato standard compatibile con tutti gli smartphone iOS 11+, Android 9+ e tablet Windows.',
        faqs: [
          { question: 'Come si connettono gli ospiti scansionando il QR code WiFi?', answer: 'Basta aprire l\'app fotocamera del telefono, inquadrare il codice e toccare la notifica "Accedi alla rete".' },
          { question: 'La mia password viene salvata sui vostri server?', answer: 'No. La generazione avviene interamente nel tuo browser in modo privato e sicuro.' },
          { question: 'Funziona sia su iPhone che su Android?', answer: 'Sì, tutti gli smartphone moderni dispongono di lettore QR integrato nell\'app fotocamera.' },
          { question: 'Cosa fare se la rete Wi-Fi non ha password?', answer: 'Seleziona semplicemente la voce "Nessuna (Rete Aperta)" nel menu a tendina.' },
          { question: 'Posso inserire il logo della mia azienda al centro?', answer: 'Sì, puoi caricare il tuo logo e il livello di correzione errori verrà impostato su Alto (30%).' },
          { question: 'I codici QR per il Wi-Fi hanno una data di scadenza?', answer: 'No, sono codici statici permanenti che funzionano fino a quando non cambi le credenziali del modem.' }
        ],
        relatedTools: [
          { name: 'QR Code per Link Web', slug: 'url-to-qr-code', description: 'Indirizza i visitatori al tuo sito o al menu digitale.' },
          { name: 'Menu Digitale per Ristoranti', slug: 'restaurant-menu-qr-code', description: 'Menu contactless per i tavoli del tuo locale.' },
          { name: 'Biglietto da Visita vCard', slug: 'vcard-qr-code-generator', description: 'Salva i tuoi contatti nella rubrica dello smartphone.' },
          { name: 'QR Code Recensioni Google', slug: 'google-reviews-qr-code', description: 'Ottieni più recensioni a 5 stelle su Google Maps.' }
        ]
      };
    case 'hi':
      return {
        slug: 'wifi-qr-code-generator',
        qrTypeId: 'wifi',
        title: 'Wi-Fi QR कोड जेनरेटर — बिना पासवर्ड टाइप किए वाई-फ़ाई कनेक्ट करें',
        description: 'कैफ़े, होटल, ऑफ़िस और घरों के लिए मुफ़्त वाई-फ़ाई QR कोड बनाएं। कैमरे से एक स्कैन में तुरंत कनेक्ट करें। हाई-रिज़ॉल्यूशन SVG और PNG डाउनलोड।',
        h1: 'Wi-Fi QR कोड जेनरेटर',
        subheadline: 'स्कैन करने योग्य वाई-फ़ाई कार्ड बनाएं। अपने ग्राहकों और मेहमानों को बिना जटिल पासवर्ड टाइप किए तुरंत कनेक्ट करने की सुविधा दें।',
        heading: 'वाई-फ़ाई कनेक्शन QR कोड',
        subheading: 'होटलों, रेस्तरां, दुकानों और घरों के लिए तेज़, सुरक्षित और पासवर्ड-मुक्त वायरलेस कनेक्टिविटी।',
        overviewTitle: 'Wi-Fi QR कोड जेनरेटर क्या है?',
        overviewParagraphs: [
          'Wi-Fi QR कोड जेनरेटर आपके वायरलेस नेटवर्क का नाम (SSID), सुरक्षा पासवर्ड और एन्क्रिप्शन प्रकार (WPA/WPA2/WPA3 या WEP) को एक 2D बारकोड में सुरक्षित रूप से बदल देता है। जब कोई ग्राहक या आगंतुक अपने स्मार्टफोन के कैमरे से इस कोड को स्कैन करता है, तो उनका फोन बिना पासवर्ड टाइप किए सीधे वाई-फ़ाई से कनेक्ट हो जाता है।',
          'पारंपरिक रूप से लंबा और कठिन पासवर्ड बार-बार बताना या कागज़ पर लिखकर देना असुविधाजनक और असुरक्षित होता है। Wi-Fi QR कोड मानक "WIFI:S:SSID;T:WPA;P:Password;;" प्रोटोकॉल का उपयोग करता है जिसे iPhone (iOS), Android और Windows डिवाइस बिना किसी अतिरिक्त ऐप के तुरंत पहचान लेते हैं।',
          'हमारा जेनरेटर 100% आपके ब्राउज़र में काम करता है, इसलिए आपका वाई-फ़ाई पासवर्ड किसी सर्वर पर नहीं भेजा जाता। आप प्रिंटिंग के लिए हाई-क्वालिटी वेक्टर SVG या PNG फ़ाइल मुफ़्त में डाउनलोड कर सकते हैं।'
        ],
        sectors: [
          { name: 'कैफ़े व कॉफ़ी शॉप्स', description: 'टेबलों पर एक्रिलिक स्टैंड लगाएं ताकि ग्राहक कर्मचारियों को परेशान किए बिना इंटरनेट का उपयोग कर सकें।', benefit: 'कर्मचारियों का समय बचाता है और काउंटर पर भीड़ कम करता है।' },
          { name: 'होटल व रिज़ॉर्ट्स', description: 'कमरों और वेलकम कार्ड्स पर वाई-फ़ाई QR कोड प्रिंट करें ताकि मेहमानों का चेक-इन आसान हो।', benefit: 'मेहमानों के अनुभव और रेटिंग को बेहतर बनाता है।' },
          { name: 'कार्यालय व को-वर्किंग स्पेस', description: 'मीटिंग रूम में आने वाले क्लाइंट्स और वेंडर्स के लिए अलग गेस्ट वाई-फ़ाई QR कोड लगाएं।', benefit: 'कार्यालय के मुख्य नेटवर्क को सुरक्षित और अलग रखता है।' },
          { name: 'क्लीनिक व सैलून', description: 'वेटिंग एरिया में प्रतीक्षा कर रहे मरीजों और ग्राहकों को मुफ़्त वाई-फ़ाई प्रदान करें।', benefit: 'प्रतीक्षा समय को आरामदायक बनाता है।' },
          { name: 'आयोजन व प्रदर्शनियाँ', description: 'सम्मेलन कक्षों में बड़े बैनर लगाएं ताकि सैकड़ों प्रतिनिधि एक साथ जुड़ सकें।', benefit: 'बड़ी संख्या में उपस्थित लोगों को तुरंत इंटरनेट मिलता है।' },
          { name: 'व्यक्तिगत घर', description: 'लिविंग रूम में एक फ्रेम किया हुआ QR कोड लगाएं ताकि दोस्तों को पासवर्ड न बोलना पड़े।', benefit: 'कठिन राउटर पासवर्ड को बार-बार बोलने से छुटकारा।' }
        ],
        howItWorks: [
          { title: '1. वाई-फ़ाई विवरण दर्ज करें', description: 'अपने नेटवर्क का सटीक नाम (SSID) दर्ज करें, सुरक्षा प्रकार चुनें और पासवर्ड लिखें।' },
          { title: '2. डिज़ाइन कस्टमाइज़ करें', description: 'अपनी पसंद का रंग चुनें, डॉट्स का आकार बदलें और अपना लोगो जोड़ें।' },
          { title: '3. डाउनलोड व प्रिंट करें', description: 'वेक्टर SVG या हाई-रिज़ॉल्यूशन PNG में डाउनलोड करें और टेबल स्टैंड पर प्रिंट करें।' }
        ],
        useCases: [
          { title: 'टेबलटॉप एक्रिलिक स्टैंड्स', description: 'डाइनिंग टेबलों पर रखे गए छोटे 4x6 इंच के स्टैंड।', example: '20 टेबलों पर ब्रांडेड वाई-फ़ाई स्टैंड।' },
          { title: 'होटल वेलकम बुकलेट', description: 'अतिथियों के स्वागत पत्र में लगा हुआ QR कोड।', example: 'अतिथि कमरे में रखा कार्ड।' },
          { title: 'कॉन्फ़्रेंस रूम डिस्प्ले', description: 'प्रोजेक्टर स्क्रीन के पास लगी हुई गेस्ट वाई-फ़ाई पट्टिका।', example: 'मीटिंग रूम में लगा स्टैंड।' },
          { title: 'रिसेप्शन काउंटर', description: 'डेंटल क्लीनिक या सैलून काउंटर पर लगा हाई-कंट्रास्ट कोड।', example: 'रिसेप्शन डेस्क पर रखा स्टैंड।' }
        ],
        tips: [
          'सटीक अक्षरों का ध्यान रखें: नेटवर्क नाम (SSID) में बड़े और छोटे अक्षरों का वही क्रम रखें जो राउटर में है।',
          'ब्राउज़र सुरक्षा: आपका पासवर्ड 100% आपके डिवाइस में प्रोसेस होता है और किसी सर्वर पर नहीं जाता।',
          'हाई कंट्रास्ट: सफ़ेद बैकग्राउंड पर गहरे रंग के डॉट्स रखें ताकि कैमरा तुरंत स्कैन कर सके।',
          'मार्जिन का ध्यान रखें: कोड के चारों ओर कम से कम 10px का खाली सफ़ेद बॉर्डर छोड़ें।',
          'कैमरा अनुकूलता: यह सभी आधुनिक iPhone और Android फोन के कैमरे से सीधे स्कैन होता है।'
        ],
        technicalNotes: 'मानक MECARD प्रोटोकॉल के साथ पूर्णतः संगत, iOS 11+, Android 9+ और Windows 10/11 द्वारा समर्थित।',
        faqs: [
          { question: 'लोग QR कोड से वाई-फ़ाई कैसे कनेक्ट करते हैं?', answer: 'वे अपने फोन का कैमरा खोलकर QR कोड पर ले जाते हैं और स्क्रीन पर आने वाले "Join Network" बटन को दबाते ही सीधे कनेक्ट हो जाते हैं।' },
          { question: 'क्या मेरा वाई-फ़ाई पासवर्ड आपके सर्वर पर सुरक्षित है?', answer: 'हाँ, बिल्कुल! हमारा टूल पूरी तरह से आपके ब्राउज़र में काम करता है। आपका पासवर्ड हमारे सर्वर पर कभी नहीं भेजा जाता।' },
          { question: 'क्या यह iPhone और Android दोनों पर काम करता है?', answer: 'हाँ, सभी आधुनिक iPhone और Android फोन के कैमरे में वाई-फ़ाई QR कोड स्कैन करने की सुविधा पहले से मौजूद होती है।' },
          { question: 'यदि मेरे वाई-फ़ाई में कोई पासवर्ड नहीं है तो क्या करें?', answer: 'सुरक्षा ड्रॉपडाउन में "None (Open Network)" का विकल्प चुनें।' },
          { question: 'क्या मैं कोड के बीच में अपना लोगो लगा सकता हूँ?', answer: 'हाँ! आप अपनी दुकान या ब्रांड का लोगो अपलोड कर सकते हैं और सिस्टम एरर करेक्शन को स्वचालित रूप से हाई (H) पर सेट कर देगा।' },
          { question: 'क्या यह Wi-Fi QR कोड कभी एक्सपायर होता है?', answer: 'नहीं, यह एक स्थायी स्टैटिक QR कोड है। जब तक आप अपने राउटर का पासवर्ड नहीं बदलते, यह हमेशा काम करता रहेगा।' }
        ],
        relatedTools: [
          { name: 'वेबसाइट URL QR जेनरेटर', slug: 'url-to-qr-code', description: 'ग्राहकों को अपनी वेबसाइट या डिजिटल मेन्यू पर भेजें।' },
          { name: 'रेस्टोरेंट मेन्यू QR कोड', slug: 'restaurant-menu-qr-code', description: 'टेबलों के लिए कॉन्टैक्टलेस डिजिटल मेन्यू।' },
          { name: 'vCard विज़िटिंग कार्ड QR', slug: 'vcard-qr-code-generator', description: 'संपर्क विवरण सीधे फोन की फोनबुक में सेव कराएं।' },
          { name: 'गूगल रिव्यू QR कोड', slug: 'google-reviews-qr-code', description: 'ग्राहकों से 5-स्टार गूगल रेटिंग प्राप्त करें।' }
        ]
      };
    default: // 'en'
      return {
        slug: 'wifi-qr-code-generator',
        qrTypeId: 'wifi',
        title: 'Wi-Fi QR Code Generator — Connect to Wi-Fi Without Passwords',
        description: 'Create free Wi-Fi QR codes for guest networks, cafes, hotels, and offices. Instant camera connection for iOS, Android, and Windows with vector SVG export.',
        h1: 'Wi-Fi QR Code Generator',
        subheadline: 'Create secure, scannable Wi-Fi access cards. Let guests and customers connect instantly without typing complex passwords.',
        heading: 'Wi-Fi QR Code',
        subheading: 'Fast, secure, and password-free network connectivity for physical venues and residential guests.',
        overviewTitle: 'What is a Wi-Fi QR Code Generator?',
        overviewParagraphs: [
          'A Wi-Fi QR code generator allows you to create a scannable 2D barcode containing your wireless network credentials, including the Network Name (SSID), password, and security encryption protocol (WPA, WPA2, WPA3, or WEP). When visitors point their smartphone camera or native device scanner at the printed code, the device automatically prompts them to join the network without requiring any manual typing.',
          'Traditional Wi-Fi sharing requires guests to search through nearby networks, locate the correct SSID, and carefully type long passwords containing special characters. This process frequently results in typos, repeated questions to staff, and security risks from writing passwords on open whiteboards. A Wi-Fi QR code encodes the standard "WIFI:S:SSID;T:WPA;P:Password;;" protocol recognized natively by iOS, Android, macOS, and Windows operating systems.',
          'Because our generator operates 100% client-side in your web browser using HTML5 Canvas, your network password is never transmitted across the internet, saved in cloud databases, or logged on remote servers. You can export high-resolution PNGs for on-screen display or scalable vector SVGs for crisp professional print framing.'
        ],
        sectors: [
          { name: 'Cafes & Coffee Shops', description: 'Place tabletop Wi-Fi QR acrylic stands on every dining table to streamline customer onboarding during morning rushes.', benefit: 'Eliminates counter bottlenecks and repeated staff interruptions.' },
          { name: 'Hotels & Vacation Rentals', description: 'Print framed Wi-Fi codes inside guest rooms, on welcome cards, and near check-in counters for smooth arrival experiences.', benefit: 'Reduces front-desk inquiries and improves guest satisfaction ratings.' },
          { name: 'Coworking Spaces & Offices', description: 'Display dedicated guest Wi-Fi QR codes in conference rooms, reception lobbies, and hot-desk zones for visiting clients.', benefit: 'Maintains strict separation between corporate networks and visitor devices.' },
          { name: 'Medical Clinics & Salons', description: 'Keep waiting room patients and clients comfortably entertained with fast guest network access while they wait.', benefit: 'Enhances the customer waiting experience with zero staff assistance.' },
          { name: 'Conferences & Trade Shows', description: 'Deploy large banner Wi-Fi codes throughout exhibition halls, registration kiosks, and presentation auditoriums.', benefit: 'Enables rapid, frictionless connectivity for hundreds of simultaneous attendees.' },
          { name: 'Residential Homes', description: 'Frame a clean, stylish Wi-Fi card in your entryway or living room for visiting family, dinner guests, and friends.', benefit: 'Avoids sharing complicated router passkeys verbally.' }
        ],
        howItWorks: [
          { title: '1. Enter Network Credentials', description: 'Type your exact Network Name (SSID), choose your encryption type (WPA/WPA2/WPA3 is standard for most routers), and input the network password.' },
          { title: '2. Customize Display Styling', description: 'Optionally adjust foreground colors, choose dot shapes, select rounded eye corners, or embed your venue logo in the center.' },
          { title: '3. Download & Print', description: 'Export as a high-definition PNG image or resolution-independent Vector SVG. Print on cards, table tents, or window decals.' }
        ],
        useCases: [
          { title: 'Tabletop Acrylic Stands', description: 'Compact 4x6 inch framed QR stands placed on dining tables, bar tops, or bedside nightstands for immediate access.', example: 'Downtown Cafe placing branded Wi-Fi QR stands on 20 indoor tables.' },
          { title: 'Welcome Booklet Inserts', description: 'Printed welcome packages for Airbnb, Vrbo, and boutique guesthouse travelers detailing house rules and network access.', example: 'Rental host including a scannable card inside the living room guidebook.' },
          { title: 'Conference Room Walls', description: 'Laminated cards mounted beneath display monitors in meeting spaces so visiting partners can share presentation screens.', example: 'Corporate boardroom with a discrete guest network placard.' },
          { title: 'Reception & Waiting Areas', description: 'Front-desk counters in dental clinics, veterinary practices, and law offices where guests spend extended waiting periods.', example: 'Medical center lobby counter with high-contrast acrylic signs.' }
        ],
        tips: [
          'Exact SSID Case Sensitivity: Ensure your Network Name matches the exact uppercase and lowercase letters configured on your Wi-Fi router.',
          'Client-Side Security: Wi-Fi passwords are processed locally in your browser memory and are never uploaded to any remote server.',
          'Optical Print Contrast: Maintain strong visual contrast—dark modules on a clean white background guarantee the fastest optical scanning.',
          'Quiet Zone Margin: Keep at least a 10px white margin around the QR code so smartphone cameras can identify finder patterns reliably.',
          'Windows & Android Camera Scanning: On Android and Windows devices, users can connect natively via the camera app or the Wi-Fi settings QR scanner.'
        ],
        technicalNotes: 'Standards Compliance: Generates standard MECARD-based "WIFI:S:SSID;T:WPA;P:PASSWORD;;" formatting compatible with iOS 11+, Android 9+, Windows 10/11, and modern barcode readers.',
        faqs: [
          { question: 'How do guests scan and connect to Wi-Fi using a QR code?', answer: 'Guests simply open their native smartphone camera app (iOS or Android) and point it at the QR code. A banner will instantly appear saying "Join [Network Name] Network". Tapping the banner connects the device immediately without typing the password.' },
          { question: 'Does generating a Wi-Fi QR code expose my password to your servers?', answer: 'No. Our Wi-Fi QR code generator runs 100% locally inside your web browser. All SVG/Canvas calculations happen in your device memory, meaning your private network credentials never travel across the internet.' },
          { question: 'How do I connect to Wi-Fi using a QR code on Windows laptops?', answer: 'On Windows 11 laptops and tablets with a built-in camera, open the native Camera app, point it at the Wi-Fi QR code, and click the network notification link that appears to connect automatically.' },
          { question: 'What if my wireless network is open and does not require a password?', answer: 'Select "None (Open Network)" in the encryption dropdown. The generator will produce an open Wi-Fi QR code that connects visitors directly without requesting authentication.' },
          { question: 'Can I add my cafe or business logo to the center of the Wi-Fi QR code?', answer: 'Yes! You can upload your brand logo in PNG, JPG, or SVG format. Our generator automatically adjusts the Reed-Solomon error correction to Level H (30%) to ensure complete optical scannability with the logo embedded.' },
          { question: 'Do Wi-Fi QR codes ever expire or stop working?', answer: 'No. Wi-Fi QR codes are static codes. They contain hardcoded network instructions that remain valid indefinitely as long as your router SSID and password do not change.' }
        ],
        relatedTools: [
          { name: 'URL QR Generator', slug: 'url-to-qr-code', description: 'Direct visitors to your website, guest portal, or online menu.' },
          { name: 'Digital Menu QR', slug: 'restaurant-menu-qr-code', description: 'Create mobile-friendly contactless menus for dining tables.' },
          { name: 'vCard QR Generator', slug: 'vcard-qr-code-generator', description: 'Share full contact details for concierge and reception staff.' },
          { name: 'Google Reviews QR', slug: 'google-reviews-qr-code', description: 'Collect 5-star customer reviews at checkout counters.' }
        ]
      };
  }
}
