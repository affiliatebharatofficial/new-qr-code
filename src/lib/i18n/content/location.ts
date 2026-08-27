import type { Locale } from '../config';
import type { LocalizedPageContent } from './types';

export function getLocationContent(locale: Locale): LocalizedPageContent {
  switch (locale) {
    case 'es':
      return {
        slug: 'location-qr-code-generator',
        qrTypeId: 'location',
        title: 'Generador de Código QR de Ubicación — Abrir Google Maps con un Escaneo',
        description: 'Crea códigos QR de ubicación geográfica y mapas. Dirige a tus clientes a tu tienda física con Google Maps y Apple Maps. Descarga en SVG y PNG.',
        h1: 'Generador de Código QR de Ubicación',
        subheadline: 'Ayuda a clientes e invitados a llegar a tu negocio o evento abriendo la ruta de navegación en Google Maps con un solo escaneo.',
        heading: 'Código QR de Ubicación y Mapas',
        subheading: 'Guía a tus visitantes directamente a la puerta de tu local con navegación GPS paso a paso.',
        overviewTitle: '¿Qué es un Código QR de Ubicación?',
        overviewParagraphs: [
          'Un generador de código QR de ubicación codifica coordenadas de latitud y longitud (o un enlace directo de Google Maps) en una matriz 2D. Al escanearlo con la cámara del móvil, el smartphone abre la app de mapas predeterminada (Google Maps, Apple Maps o Waze) mostrando la ubicación exacta y el botón de "Cómo llegar".',
          'Pedir a clientes o invitados que tecleen direcciones complicadas suele provocar que se pierdan o lleguen tarde. Un código QR de ubicación inicia la navegación GPS en el coche o a pie en un solo toque.',
          'Personaliza colores, añade tu logo o icono de chincheta y descarga gratis en formato vectorial SVG o PNG de alta resolución.'
        ],
        sectors: [
          { name: 'Comercio Local y Boutiques', description: 'En folletos y tarjetas para indicar cómo llegar al local.', benefit: 'Guía a compradores cercanos hasta tu puerta.' },
          { name: 'Bodas y Celebraciones', description: 'En invitaciones de boda para indicar la finca o iglesia.', benefit: 'Evita llamadas de invitados despistados.' },
          { name: 'Inmobiliarias y Promotoras', description: 'En vallas publicitarias de nuevas promociones de viviendas.', benefit: 'Permite visitar la parcela o piso piloto de inmediato.' },
          { name: 'Hoteles y Alojamientos', description: 'En confirmaciones de reserva para guiar desde el aeropuerto.', benefit: 'Llegada fluida sin estrés para los huéspedes.' },
          { name: 'Festivales y Ferias al Aire Libre', description: 'En carteles de acceso para indicar parkings y puertas.', benefit: 'Organiza los flujos de tráfico y peatones.' },
          { name: 'Servicios de Urgencias y Farmacias', description: 'En carteles exteriores para indicar la farmacia de guardia.', benefit: 'Localización rápida en situaciones urgentes.' }
        ],
        howItWorks: [
          { title: '1. Introduce Coordenadas o Dirección', description: 'Pega el enlace de Google Maps o introduce latitud y longitud.' },
          { title: '2. Personaliza el Diseño del Mapa', description: 'Elige tus colores corporativos y añade el icono de chincheta de mapa.' },
          { title: '3. Descarga e Imprime', description: 'Exporta en SVG vectorial para imprenta o PNG de alta definición.' }
        ],
        useCases: [
          { title: 'Invitaciones de Boda y Eventos', description: 'Impreso en el reverso de las invitaciones formales.', example: 'Pareja guiando a 150 invitados a la finca.' },
          { title: 'Folletos Publicitarios de Barrio', description: 'En buzoneo local con la indicación "Visítanos hoy mismo".', example: 'Gimnasio atrayendo vecinos de la zona.' },
          { title: 'Vallas en Carreteras', description: 'Indicando la salida exacta hacia el centro comercial.', example: 'Parque comercial en autovía.' },
          { title: 'Tarjetas de Visita de Tiendas', description: 'Junto a los datos de contacto con la ruta directa en coche.', example: 'Taller de reparación mecánica.' }
        ],
        tips: [
          'Coordenadas Precisas: Comprueba en Google Maps que el punto caiga exactamente en la entrada.',
          'Llamada a la Acción: Añade el texto "Escanea para abrir la ruta en Google Maps".',
          'Alto Contraste: Utiliza fondo blanco para lectura rápida.',
          'SVG para Gran Formato: Emplea SVG vectorial para carteles y vallas publicitarias.',
          'Prueba en Rutas Reales: Escanea con el móvil y pulsa "Iniciar ruta" para verificar.'
        ],
        technicalNotes: 'Compatible con URLs geo: y enlaces universales de Google Maps y Apple Maps.',
        faqs: [
          { question: '¿Cómo abre el código la ruta de navegación?', answer: 'Al escanear el código, el móvil reconoce la ubicación y ofrece abrir Google Maps o Apple Maps con el botón "Cómo llegar" activo.' },
          { question: '¿Funciona tanto en iPhone como en Android?', answer: 'Sí, en iPhone abre Apple Maps o Google Maps y en Android abre Google Maps nativamente.' },
          { question: '¿Puedo usar la dirección o necesito las coordenadas?', answer: 'Puedes introducir directamente las coordenadas (ej. 40.4168, -3.7038) o el enlace de Google Maps de tu negocio.' },
          { question: '¿Caducan estos códigos QR de ubicación?', answer: 'No, son códigos estáticos permanentes que funcionarán siempre sin cuotas.' },
          { question: '¿Puedo colocar el logo de mi empresa en el centro?', answer: 'Sí, sube tu logo y el generador ajustará la corrección de errores al nivel Alto (30%).' },
          { question: '¿Tiene algún coste generar el código?', answer: 'No, la creación y descarga en SVG o PNG es 100% gratuita.' }
        ],
        relatedTools: [
          { name: 'QR de Enlace Web', slug: 'url-to-qr-code', description: 'Dirige tráfico a tu web o tienda online.' },
          { name: 'QR de Contacto vCard', slug: 'vcard-qr-code-generator', description: 'Guarda tarjetas de contacto completas.' },
          { name: 'QR de Reseñas de Google', slug: 'google-reviews-qr-code', description: 'Consigue más valoraciones de 5 estrellas.' },
          { name: 'QR de WiFi', slug: 'wifi-qr-code-generator', description: 'Conecta a clientes a tu red sin contraseñas.' }
        ]
      };
    case 'de':
      return {
        slug: 'location-qr-code-generator',
        qrTypeId: 'location',
        title: 'Standort QR Code Generator — Google Maps Navigation per Scan',
        description: 'Erstellen Sie QR-Codes für Standorte und Google Maps. Führen Sie Kunden und Gäste direkt zu Ihrem Geschäft. Vektor-SVG & PNG Download.',
        h1: 'Standort QR Code Generator',
        subheadline: 'Helfen Sie Kunden und Gästen, Ihr Geschäft oder Event mühelos zu finden – mit direkter Google Maps Routenführung per Scan.',
        heading: 'Standort- & Karten-QR-Code',
        subheading: 'Leiten Sie Besucher mit automatischer GPS-Navigation zielsicher an ihren Bestimmungsort.',
        overviewTitle: 'Was ist ein Standort QR Code Generator?',
        overviewParagraphs: [
          'Ein Standort QR Code Generator kodiert geografische Koordinaten (Breitengrad und Längengrad) oder Google Maps Links in einen 2D-Barcode. Beim Scannen mit der Handykamera öffnet sich sofort die Karten-App (Google Maps, Apple Maps oder Waze) mit vorbereiteter Route.',
          'Mühsames Eintippen von Adressen führt oft zu Missverständnissen. Ein Standort-QR-Code startet die Navigation zu Fuß oder mit dem Auto mit einem einzigen Klick.',
          'Erstellen Sie Codes in Sekunden und exportieren Sie druckfertige Vektor-SVG- oder PNG-Dateien.'
        ],
        sectors: [
          { name: 'Einzelhandel & Boutiquen', description: 'Auf Flyern und Anzeigen, um Kunden direkt ins Geschäft zu führen.', benefit: 'Bringt Passanten direkt vor die Ladentür.' },
          { name: 'Hochzeiten & Feiern', description: 'Auf Einladungskarten zur Location oder Kirche.', benefit: 'Verhindert Anrufe von suchenden Gästen.' },
          { name: 'Immobilien & Bauträger', description: 'Auf Bauschildern von Neubauprojekten.', benefit: 'Interessenten finden das Baugrundstück sofort.' },
          { name: 'Hotels & Ferienhäuser', description: 'In Buchungsbestätigungen für eine entspannte Anreise.', benefit: 'Sorgt für stressfreie Gästeankunft.' },
          { name: 'Festivals & Open-Air', description: 'Auf Anfahrtsplänen für Parkplätze und Einlässe.', benefit: 'Optimiert Besucherströme vor Ort.' },
          { name: 'Notdienste & Apotheken', description: 'Auf Schaufenstern zur Notdienstapotheke.', benefit: 'Schnelle Orientierung in Notfällen.' }
        ],
        howItWorks: [
          { title: '1. Adresse oder Koordinaten Eingeben', description: 'Google Maps Link einfügen oder Koordinaten eingeben.' },
          { title: '2. Kartendesign Gestalten', description: 'Farben anpassen und Stecknadel-Icon oder Firmenlogo wählen.' },
          { title: '3. Herunterladen & Drucken', description: 'Als Vektor-SVG für Schilder oder PNG exportieren.' }
        ],
        useCases: [
          { title: 'Hochzeitseinladungen', description: 'Auf der Rückseite der Einladungskarte für die Feierlocation.', example: 'Brautpaar führt 150 Gäste zur Festscheune.' },
          { title: 'Lokale Werbeflyer', description: 'Postwurfsendung mit Aufforderung "Kommen Sie vorbei".', example: 'Fitnessstudio gewinnt Neukunden.' },
          { title: 'Autobahn-Werbetafeln', description: 'Wegweiser zum Einkaufszentrum an der Ausfahrt.', example: 'Gewerbepark an der Bundesstraße.' },
          { title: 'Visitenkarten von Geschäften', description: 'Mit direktem Routenlink zur Werkstatt.', example: 'Autowerkstatt für einfache Anfahrt.' }
        ],
        tips: [
          'Exakte Koordinaten: Prüfen Sie, ob der Pin genau auf dem Haupteingang sitzt.',
          'Handlungsaufruf: "Scannen für Google Maps Route" hinzufügen.',
          'Hoher Kontrast: Weißer Hintergrund für schnelles Erfassen.',
          'SVG für Großplakate: Garantiert randscharfe Kanten auf Werbetafeln.',
          'Routentest: Vor dem Druck einmal selbst auf dem Smartphone abfahren.'
        ],
        technicalNotes: 'Kompatibel mit geo-URIs und universellen Google Maps Links.',
        faqs: [
          { question: 'Wie startet der QR-Code die Navigation?', answer: 'Beim Scannen erkennt das Smartphone den Standort und bietet an, Google Maps oder Apple Maps mit aktivierter Routenführung zu öffnen.' },
          { question: 'Funktioniert das auf iPhone und Android?', answer: 'Ja, auf dem iPhone öffnet sich Apple Maps oder Google Maps, auf Android-Geräten Google Maps.' },
          { question: 'Kann ich die Adresse oder Koordinaten nutzen?', answer: 'Sie können entweder genaue Koordinaten (z. B. 52.5200, 13.4050) oder den Google Maps Link Ihres Geschäfts eintragen.' },
          { question: 'Laufen Standort-QR-Codes ab?', answer: 'Nein, die statischen Codes sind dauerhaft und ohne Zusatzkosten gültig.' },
          { question: 'Kann ich mein Firmenlogo einfügen?', answer: 'Ja, laden Sie Ihr Logo hoch und die Fehlerkorrektur wird automatisch auf Stufe H (30%) gesetzt.' },
          { question: 'Ist die Erstellung kostenlos?', answer: 'Ja, das Erstellen und Herunterladen in SVG und PNG ist 100% kostenlos.' }
        ],
        relatedTools: [
          { name: 'Weblink QR Generator', slug: 'url-to-qr-code', description: 'Besucher auf Ihre Website weiterleiten.' },
          { name: 'vCard Visitenkarte', slug: 'vcard-qr-code-generator', description: 'Vollständige Kontaktdaten im Adressbuch speichern.' },
          { name: 'Google Bewertungen QR', slug: 'google-reviews-qr-code', description: 'Mehr 5-Sterne-Bewertungen auf Google sammeln.' },
          { name: 'WLAN QR Generator', slug: 'wifi-qr-code-generator', description: 'Gäste-WLAN ohne Passworteingabe.' }
        ]
      };
    case 'fr':
      return {
        slug: 'location-qr-code-generator',
        qrTypeId: 'location',
        title: 'Générateur de QR Code de Localisation — Ouvrir Google Maps en 1 Scan',
        description: 'Créez des QR codes de localisation et plans d\'accès. Guidez vos clients vers votre établissement avec Google Maps. Téléchargement SVG et PNG.',
        h1: 'Générateur de QR Code de Localisation',
        subheadline: 'Guidez vos clients et invités directement vers votre établissement en ouvrant l\'itinéraire Google Maps en un seul scan.',
        heading: 'QR Code de Localisation et Plan d\'Accès',
        subheading: 'Orientez vos visiteurs avec une navigation GPS fluide jusqu\'à votre porte.',
        overviewTitle: 'Qu\'est-ce qu\'un QR Code de Localisation ?',
        overviewParagraphs: [
          'Un générateur de QR code de localisation encode des coordonnées géographiques (latitude et longitude) ou un lien Google Maps dans un code 2D. En scannant le code, le smartphone ouvre l\'application de cartographie (Google Maps, Apple Maps, Waze) avec l\'itinéraire déjà tracé.',
          'Finies les erreurs d\'adresse ou les invités égarés. Un QR code lance le guidage GPS en un instant, que ce soit en voiture ou à pied.',
          'Téléchargement gratuit en SVG vectoriel pour vos panneaux ou PNG haute définition.'
        ],
        sectors: [
          { name: 'Commerces & Boutiques', description: 'Sur prospectus pour guider les clients au magasin.', benefit: 'Amène les acheteurs du quartier jusqu\'au pas-de-porte.' },
          { name: 'Mariages & Réceptions', description: 'Sur faire-part pour indiquer le domaine ou l\'église.', benefit: 'Évite les appels d\'invités perdus sur la route.' },
          { name: 'Promoteurs Immobiliers', description: 'Sur panneaux de chantier de nouveaux programmes.', benefit: 'Permet de visiter le terrain immédiatement.' },
          { name: 'Hôtels & Chambres d\'Hôtes', description: 'Dans les emails de confirmation de séjour.', benefit: 'Arrivée sans stress pour les vacanciers.' },
          { name: 'Festivals & Événements', description: 'Sur plans d\'accès pour parkings et entrées.', benefit: 'Fluidifie la circulation aux abords de l\'événement.' },
          { name: 'Pharmacies & Urgences', description: 'Sur vitrines pour indiquer la garde de nuit.', benefit: 'Orientation immédiate en cas de besoin urgent.' }
        ],
        howItWorks: [
          { title: '1. Indiquez l\'Adresse ou Coordonnées', description: 'Collez le lien Google Maps ou saisissez latitude et longitude.' },
          { title: '2. Personnalisez l\'Apparence', description: 'Choisissez vos couleurs et insérez votre logo ou l\'icône de repère.' },
          { title: '3. Téléchargez et Affichez', description: 'Exportez en SVG vectoriel pour imprimer ou PNG.' }
        ],
        useCases: [
          { title: 'Faire-Part de Mariage', description: 'Au dos du carton d\'invitation pour le lieu de réception.', example: 'Mariés guidant 150 convives vers le château.' },
          { title: 'Prospectus de Quartier', description: 'Distribués en boîtes aux lettres avec plan d\'accès.', example: 'Salle de sport attirant les riverains.' },
          { title: 'Panneaux Routiers', description: 'Indiquant la sortie vers la zone commerciale.', example: 'Centre commercial en bordure d\'autoroute.' },
          { title: 'Cartes de Visite de Magasin', description: 'Avec lien direct de guidage vers l\'atelier.', example: 'Garage automobile.' }
        ],
        tips: [
          'Coordonnées Exactes : Vérifiez que le point tombe pile sur l\'entrée principale.',
          'Appel à l\'Action : Ajoutez "Scannez pour ouvrir l\'itinéraire sur Google Maps".',
          'Contraste Net : Fond blanc pour un scan fluide.',
          'SVG pour Grands Formats : Indispensable pour panneaux et affiches 4x3.',
          'Test d\'Itinéraire : Testez le trajet sur mobile avant impression.'
        ],
        technicalNotes: 'Compatible avec les URI geo: et liens universels Google Maps et Apple Maps.',
        faqs: [
          { question: 'Comment le QR code lance-t-il la navigation ?', answer: 'Au scan, le smartphone détecte le lieu et propose d\'ouvrir Google Maps ou Apple Maps avec le bouton "Itinéraire" activé.' },
          { question: 'Est-ce compatible avec iPhone et Android ?', answer: 'Oui, sur iPhone il ouvre Apple Maps ou Google Maps et sur Android il ouvre directement Google Maps.' },
          { question: 'Puis-je utiliser une adresse ou des coordonnées ?', answer: 'Vous pouvez entrer les coordonnées GPS exactes ou le lien Google Maps de votre établissement.' },
          { question: 'Ces QR codes expirent-ils ?', answer: 'Non, les codes statiques sont permanents et valables à vie sans abonnement.' },
          { question: 'Puis-je intégrer mon logo au centre ?', answer: 'Oui, importez votre logo et la correction d\'erreur passera automatiquement au niveau H (30%).' },
          { question: 'La création est-elle payante ?', answer: 'Non, la génération et le téléchargement en SVG ou PNG sont 100% gratuits.' }
        ],
        relatedTools: [
          { name: 'QR Code Lien Web', slug: 'url-to-qr-code', description: 'Redirigez vers votre site web.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Partagez vos coordonnées complètes.' },
          { name: 'QR Code Avis Google', slug: 'google-reviews-qr-code', description: 'Collectez des avis 5 étoiles.' },
          { name: 'QR Code WiFi', slug: 'wifi-qr-code-generator', description: 'Offrez le WiFi sans mot de passe.' }
        ]
      };
    case 'pt':
      return {
        slug: 'location-qr-code-generator',
        qrTypeId: 'location',
        title: 'Gerador de QR Code de Localização — Abrir Google Maps com 1 Scan',
        description: 'Crie QR Codes de localização e mapas. Direcione clientes e convidados para seu endereço no Google Maps e Apple Maps. Download em SVG e PNG.',
        h1: 'Gerador de QR Code de Localização',
        subheadline: 'Ajude clientes e convidados a chegarem ao seu estabelecimento abrindo a rota no Google Maps com um único scan.',
        heading: 'QR Code de Localização e Mapas',
        subheading: 'Guie seus visitantes com navegação GPS direta até a porta do seu estabelecimento.',
        overviewTitle: 'O que é um QR Code de Localização?',
        overviewParagraphs: [
          'Um gerador de QR Code de localização codifica coordenadas de latitude e longitude (ou um link do Google Maps) em um código 2D. Ao escanear, o celular abre o aplicativo de mapas (Google Maps, Apple Maps ou Waze) com a rota traçada.',
          'Evite que clientes se percam digitando endereços errados. O código abre a navegação por GPS em um toque, seja de carro ou a pé.',
          'Personalize cores, inclua seu logotipo e baixe em SVG vetorial para placas ou PNG em alta definição.'
        ],
        sectors: [
          { name: 'Lojas & Comércio Local', description: 'Em panfletos para guiar clientes até a loja física.', benefit: 'Traz moradores da região para o balcão.' },
          { name: 'Casamentos & Festas', description: 'Em convites para indicar o sítio ou igreja do evento.', benefit: 'Evita ligações de convidados perdidos.' },
          { name: 'Loteamentos & Imobiliárias', description: 'Em placas de novos empreendimentos.', benefit: 'Permite visitar o terreno na hora.' },
          { name: 'Pousadas & Hotéis', description: 'Em confirmações de reserva para guiar desde a rodovia.', benefit: 'Chegada tranquila para os hóspedes.' },
          { name: 'Festivais & Eventos ao Ar Livre', description: 'Em mapas de acesso para estacionamentos e portarias.', benefit: 'Organiza o fluxo de veículos.' },
          { name: 'Farmácias & Plantões', description: 'Em vitrines indicando a farmácia de plantão.', benefit: 'Orientação rápida em emergências.' }
        ],
        howItWorks: [
          { title: '1. Digite Endereço ou Coordenadas', description: 'Cole o link do Google Maps ou insira latitude e longitude.' },
          { title: '2. Personalize o Estilo', description: 'Escolha cores e adicione seu logo ou o pin de localização.' },
          { title: '3. Baixe e Divulgue', description: 'Exporte em SVG vetorial para placas ou PNG nítido.' }
        ],
        useCases: [
          { title: 'Convites de Casamento', description: 'No verso dos convites com a rota para a festa.', example: 'Noivos guiando 150 convidados.' },
          { title: 'Panfletos de Bairro', description: 'Com a chamada "Venha nos visitar hoje mesmo".', example: 'Academia atraindo moradores locais.' },
          { title: 'Outdoors de Rodovia', description: 'Indicando a saída exata para o shopping.', example: 'Centro comercial na rodovia.' },
          { title: 'Cartões de Visita', description: 'Com rota direta para a oficina mecânica.', example: 'Oficina mecânica facilitando o acesso.' }
        ],
        tips: [
          'Coordenadas Precisas: Verifique se o pin cai exatamente na porta de entrada.',
          'Chamada Clara: Inclua "Aponte a câmera para abrir no Google Maps".',
          'Alto Contraste: Fundo branco facilita a leitura.',
          'SVG para Grandes Formatos: Essencial para banners e placas de trânsito.',
          'Teste de Rota: Faça o teste no celular antes de mandar rodar a impressão.'
        ],
        technicalNotes: 'Compatível com geo: URIs e links universais do Google Maps e Apple Maps.',
        faqs: [
          { question: 'Como o QR Code abre a rota de navegação?', answer: 'Ao escanear, o celular reconhece o local e abre o Google Maps ou Apple Maps com o botão "Rotas" pronto para iniciar.' },
          { question: 'Funciona no iPhone e no Android?', answer: 'Sim, no iPhone abre no Apple Maps ou Google Maps e no Android abre nativamente no Google Maps.' },
          { question: 'Posso usar o link do Google Maps ou só coordenadas?', answer: 'Você pode usar tanto o link de compartilhamento do Google Maps quanto as coordenadas numéricas.' },
          { question: 'Os códigos de localização expiram?', answer: 'Não, são códigos permanentes que continuam funcionando para sempre sem taxas.' },
          { question: 'Posso colocar o logotipo da minha empresa?', answer: 'Sim, basta carregar seu logo e o sistema ajustará a correção de erros para Alto (30%).' },
          { question: 'A geração é gratuita?', answer: 'Sim, a criação e o download em SVG e PNG são 100% grátis.' }
        ],
        relatedTools: [
          { name: 'QR Code Link URL', slug: 'url-to-qr-code', description: 'Direcione visitantes para seu site.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Compartilhe contatos profissionais.' },
          { name: 'QR Code Avaliações Google', slug: 'google-reviews-qr-code', description: 'Ganhe avaliações 5 estrelas.' },
          { name: 'QR Code Wi-Fi', slug: 'wifi-qr-code-generator', description: 'Ofereça Wi-Fi sem senha.' }
        ]
      };
    case 'it':
      return {
        slug: 'location-qr-code-generator',
        qrTypeId: 'location',
        title: 'Generatore QR Code Posizione — Aprire Google Maps con una Scansione',
        description: 'Crea codici QR per posizioni geografiche e Google Maps. Guida clienti e ospiti al tuo locale con Google Maps e Apple Maps. Download SVG e PNG.',
        h1: 'Generatore QR Code Posizione',
        subheadline: 'Aiuta clienti e ospiti a raggiungere la tua attività o evento aprendo il navigatore di Google Maps con una sola scansione.',
        heading: 'QR Code per Posizione e Mappe',
        subheading: 'Guida i tuoi visitatori con indicazioni stradali GPS dirette fino alla tua porta.',
        overviewTitle: 'Cos\'è un QR Code per Posizione?',
        overviewParagraphs: [
          'Un generatore di codici QR per posizione codifica coordinate geografiche (latitudine e longitudine) o un link diretto di Google Maps in un codice 2D. Inquadrando il codice con la fotocamera, lo smartphone apre l\'app mappe (Google Maps, Apple Maps, Waze) con il calcolo del percorso già attivo.',
          'Digitare indirizzi complessi porta spesso a perdersi o ad arrivare in ritardo. Un codice QR per posizione avvia il navigatore in auto o a piedi in un solo tocco.',
          'Download gratuito in formato vettoriale SVG per la tipografia o PNG ad alta risoluzione.'
        ],
        sectors: [
          { name: 'Negozi & Attività Locali', description: 'Su volantini per indicare come raggiungere il negozio.', benefit: 'Guida i clienti di zona fino alla porta.' },
          { name: 'Matrimoni & Ricevimenti', description: 'Sulle partecipazioni per indicare la chiesa o la villa.', benefit: 'Evita telefonate di invitati che cercano la strada.' },
          { name: 'Agenzie Immobiliari', description: 'Sui cartelli di nuove costruzioni e cantieri.', benefit: 'Permette di visitare subito il terreno.' },
          { name: 'Hotel & Agriturismi', description: 'Nelle conferme di prenotazione per guidare dall\'uscita autostradale.', benefit: 'Arrivo sereno per i turisti.' },
          { name: 'Festival & Fiere all\'Aperto', description: 'Sui cartelli di accesso per indicare parcheggi e ingressi.', benefit: 'Fluidifica il traffico e gli accessi.' },
          { name: 'Farmacie di Turno', description: 'Sulle vetrine esterne per indicare la farmacia di guardia.', benefit: 'Orientamento rapido in caso di emergenza.' }
        ],
        howItWorks: [
          { title: '1. Inserisci Indirizzo o Coordinate', description: 'Incolla il link di Google Maps o inserisci latitudine e longitudine.' },
          { title: '2. Personalizza lo Stile', description: 'Scegli i colori e aggiungi il tuo logo o l\'icona del segnaposto.' },
          { title: '3. Scarica e Stampa', description: 'Esporta in SVG vettoriale per cartelli o PNG.' }
        ],
        useCases: [
          { title: 'Partecipazioni di Nozze', description: 'Sul retro dell\'invito per raggiungere la location.', example: 'Sposi che guidano 150 invitati.' },
          { title: 'Volantini di Quartiere', description: 'Con l\'invito "Vieni a trovarci oggi stesso".', example: 'Palestra che attrae residenti locali.' },
          { title: 'Cartelloni Stradali', description: 'Che indicano l\'uscita esatta per il centro commerciale.', example: 'Parco commerciale vicino all\'autostrada.' },
          { title: 'Biglietti da Visita', description: 'Con il link diretto per raggiungere l\'officina.', example: 'Officina meccanica.' }
        ],
        tips: [
          'Coordinate Precise: Verifica che il segnaposto sia posizionato esattamente sull\'ingresso.',
          'Invito Chiaro: Aggiungi "Inquadra per aprire il percorso su Google Maps".',
          'Contrasto Elevato: Sfondo bianco per una lettura rapida.',
          'SVG per Grandi Formati: Indispensabile per cartelloni pubblicitari e striscioni.',
          'Test del Percorso: Verifica il tragitto da smartphone prima di stampare.'
        ],
        technicalNotes: 'Compatibile con URI geo: e link universali Google Maps e Apple Maps.',
        faqs: [
          { question: 'Come avvia la navigazione il codice QR?', answer: 'Inquadrando il codice, lo smartphone riconosce la posizione e apre Google Maps o Apple Maps con il tasto "Indicazioni stradali" pronto.' },
          { question: 'Funziona su iPhone e Android?', answer: 'Sì, su iPhone apre Apple Maps o Google Maps e su Android apre direttamente Google Maps.' },
          { question: 'Posso usare il link o servono le coordinate?', answer: 'Puoi usare indifferentemente il link di condivisione di Google Maps o le coordinate numeriche.' },
          { question: 'Questi codici QR scadono?', answer: 'No, i codici statici restano validi per sempre senza alcun canone.' },
          { question: 'Posso inserire il mio logo al centro?', answer: 'Sì, carica il tuo logo e la correzione errori verrà impostata automaticamente su Alto (30%).' },
          { question: 'La generazione è gratuita?', answer: 'Sì, la creazione e il download in formato SVG e PNG sono al 100% gratuiti.' }
        ],
        relatedTools: [
          { name: 'QR Code Link Web', slug: 'url-to-qr-code', description: 'Indirizza al tuo sito web.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Salva i contatti completi in rubrica.' },
          { name: 'QR Code Recensioni Google', slug: 'google-reviews-qr-code', description: 'Ottieni recensioni a 5 stelle.' },
          { name: 'QR Code WiFi', slug: 'wifi-qr-code-generator', description: 'Offri il WiFi senza password.' }
        ]
      };
    case 'hi':
      return {
        slug: 'location-qr-code-generator',
        qrTypeId: 'location',
        title: 'लोकेशन QR कोड जेनरेटर — एक स्कैन में Google Maps नेविगेशन खोलें',
        description: 'Google Maps और लोकेशन QR कोड बनाएं। ग्राहकों को सीधे अपनी दुकान या इवेंट तक रास्ता दिखाएं। वेक्टर SVG और PNG मुफ़्त डाउनलोड।',
        h1: 'लोकेशन QR कोड जेनरेटर',
        subheadline: 'ग्राहकों और अतिथियों को एक स्कैन में Google Maps पर सीधा रास्ता दिखाकर अपनी दुकान या शादी के वेन्यू तक लाएं।',
        heading: 'लोकेशन व मैप QR कोड',
        subheading: 'अपने आगंतुकों को बिना भटके सीधे अपने पते तक जीपीएस नेविगेशन द्वारा पहुंचाएं।',
        overviewTitle: 'लोकेशन QR कोड क्या है?',
        overviewParagraphs: [
          'लोकेशन QR कोड भौगोलिक निर्देशांकों (अक्षांश और देशांतर) या Google Maps लिंक को 2D बारकोड में बदल देता है। जब कोई इसे फोन कैमरे से स्कैन करता है, तो मोबाइल की मैप ऐप (Google Maps या Apple Maps) खुल जाती है और "Directions" (दिशा-निर्देश) बटन सीधे दिख जाता है।',
          'ग्राहकों को पता ढूंढने में होने वाली परेशानी और देरी को खत्म करता है। केवल एक टैप में गाड़ी या पैदल चलने का रास्ता शुरू हो जाता है।',
          'प्रिंटिंग के लिए वेक्टर SVG और स्क्रीन के लिए PNG मुफ़्त डाउनलोड करें।'
        ],
        sectors: [
          { name: 'लोकल दुकानें व शोरूम', description: 'पैम्फलेट पर दुकान तक आने का रास्ता दिखाने हेतु।', benefit: 'आस-पास के ग्राहकों को सीधे दुकान तक लाता है।' },
          { name: 'शादी व पारिवारिक समारोह', description: 'शादी के कार्ड पर रिसॉर्ट या मैरिज हॉल का रास्ता देने हेतु।', benefit: 'मेहमानों के रास्ता भटकने के फोन कॉल्स से राहत।' },
          { name: 'रियल एस्टेट व साइट विजिट', description: 'प्रॉपर्टी होर्डिंग पर प्लॉट या फ्लैट की लोकेशन देने हेतु।', benefit: 'खरीदार सीधे मौके पर पहुंच सकते हैं।' },
          { name: 'होटल व रिसॉर्ट्स', description: 'बुकिंग मैसेज में एयरपोर्ट से होटल आने का रास्ता देने हेतु।', benefit: 'सैलानियों की तनावमुक्त यात्रा।' },
          { name: 'मेले व प्रदर्शनी स्थल', description: 'पार्किंग और प्रवेश द्वार का सही रास्ता दिखाने हेतु।', benefit: 'ट्रैफिक जाम को नियंत्रित करता है।' },
          { name: 'इमरजेंसी व मेडिकल स्टोर्स', description: 'दुकान के बाहर ड्यूटी वाली दुकान का रास्ता दिखाने हेतु।', benefit: 'आपात स्थिति में त्वरित दिशा-निर्देश।' }
        ],
        howItWorks: [
          { title: '1. गूगल मैप्स लिंक या पता दर्ज करें', description: 'अपनी दुकान का Google Maps लिंक या निर्देशांक पेस्ट करें।' },
          { title: '2. डिज़ाइन कस्टमाइज़ करें', description: 'रंग चुनें और मैप पिन आइकन या अपना लोगो लगाएं।' },
          { title: '3. डाउनलोड व प्रिंट करें', description: 'वेक्टर SVG या हाई-रिज़ॉल्यूशन PNG डाउनलोड करें।' }
        ],
        useCases: [
          { title: 'शादी के निमंत्रण पत्र', description: 'कार्ड के पीछे रिसेप्शन वेन्यू का रास्ता दिखाने वाला कोड।', example: '150 मेहमानों को शादी के लॉन तक पहुंचाना।' },
          { title: 'लोकल विज्ञापन पैम्फलेट', description: '"आज ही पधारें" लिखा हुआ दुकान का लोकेशन कोड।', example: 'जिम व फिटनेस सेंटर।' },
          { title: 'हाईवे विज्ञापन होर्डिंग', description: 'शॉपिंग मॉल के लिए एग्जिट का रास्ता दिखाने वाला बोर्ड।', example: 'हाईवे मॉल विज्ञापन।' },
          { title: 'विज़िटिंग कार्ड', description: 'दुकान के विज़िटिंग कार्ड पर कार नेविगेशन कोड।', example: 'कार गैरेज व सर्विस सेंटर।' }
        ],
        tips: [
          'सटीक लोकेशन जांचें: सुनिश्चित करें कि गूगल मैप्स पर पिन बिल्कुल मुख्य दरवाजे पर हो।',
          'स्पष्ट निर्देश लिखें: स्टैंड पर "Google Maps पर रास्ता देखने के लिए स्कैन करें" लिखें।',
          'हाई कंट्रास्ट: सफ़ेद बैकग्राउंड पर गहरे काले डॉट्स रखें।',
          'बड़े बोर्ड के लिए SVG: होर्डिंग पर प्रिंटिंग के लिए हमेशा SVG का उपयोग करें।',
          'प्रिंट से पहले टेस्ट: अपने फोन से स्कैन करके रास्ता जांच लें।'
        ],
        technicalNotes: 'geo: URI प्रोटोकॉल और Google Maps के साथ पूरी तरह संगत।',
        faqs: [
          { question: 'स्कैन करने पर लोकेशन QR कोड कैसे काम करता है?', answer: 'कैमरे से स्कैन करते ही फोन की मैप ऐप (Google Maps या Apple Maps) खुल जाती है और सीधे रास्ते का नेविगेशन शुरू हो जाता है।' },
          { question: 'क्या यह iPhone और Android दोनों पर काम करता है?', answer: 'हाँ, iPhone पर यह Apple Maps या Google Maps खोलता है और Android पर Google Maps खोलता है।' },
          { question: 'क्या मैं पता या गूगल मैप्स लिंक डाल सकता हूँ?', answer: 'हाँ, आप सीधे Google Maps का लिंक या अक्षांश-देशांतर निर्देशांक डाल सकते हैं।' },
          { question: 'क्या यह लोकेशन QR कोड एक्सपायर होता है?', answer: 'नहीं, यह स्टैटिक कोड हमेशा के लिए सक्रिय और मुफ़्त रहता है।' },
          { question: 'क्या मैं बीच में अपना लोगो लगा सकता हूँ?', answer: 'हाँ, लोगो अपलोड करने पर सिस्टम एरर करेक्शन को हाई (H) पर सेट कर देगा।' },
          { question: 'क्या यह मुफ़्त है?', answer: 'हाँ, इसे बनाना और SVG/PNG में डाउनलोड करना 100% मुफ़्त है।' }
        ],
        relatedTools: [
          { name: 'वेबसाइट URL QR जेनरेटर', slug: 'url-to-qr-code', description: 'ग्राहकों को अपनी वेबसाइट पर भेजें।' },
          { name: 'vCard विज़िटिंग कार्ड QR', slug: 'vcard-qr-code-generator', description: 'संपर्क विवरण सीधे फोनबुक में सेव कराएं।' },
          { name: 'गूगल रिव्यू QR कोड', slug: 'google-reviews-qr-code', description: 'Google Maps पर 5-स्टार रेटिंग पाएं।' },
          { name: 'Wi-Fi QR जेनरेटर', slug: 'wifi-qr-code-generator', description: 'ग्राहकों को वाई-फ़ाई कनेक्टिविटी दें।' }
        ]
      };
    default: // 'en'
      return {
        slug: 'location-qr-code-generator',
        qrTypeId: 'location',
        title: 'Location QR Code Generator — Open Google Maps Navigation in 1 Scan',
        description: 'Generate custom Location and Google Maps QR codes. Guide clients, visitors, and event guests directly to your physical address. Free SVG & PNG.',
        h1: 'Location QR Code Generator',
        subheadline: 'Help customers and guests find your storefront or event venue with instant turn-by-turn Google Maps navigation in a single scan.',
        heading: 'Location & Map QR Code',
        subheading: 'Guide visitors directly to your front door with seamless turn-by-turn GPS navigation.',
        overviewTitle: 'What is a Location QR Code Generator?',
        overviewParagraphs: [
          'A Location QR code generator encodes geographical coordinates (latitude and longitude) or direct Google Maps short URLs into a scannable 2D barcode. When scanned using any smartphone camera, the device immediately launches the native mapping application (Google Maps, Apple Maps, or Waze) with the exact pinpoint and turn-by-turn "Directions" route ready to navigate.',
          'Asking event guests, dining patrons, or retail shoppers to manually type complex street addresses or postal codes into map apps frequently results in misspelled street names and lost visitors. A Location QR code eliminates transcription errors and initiates driving, walking, or public transit directions in one tap.',
          'Our generator supports direct Google Maps URLs, custom color matching, central map pin logo placement, and print-ready Vector SVG and high-DPI PNG downloads for wedding invitations, flyers, billboards, and brochures.'
        ],
        sectors: [
          { name: 'Retailers & Local Storefronts', description: 'Printed on direct mail flyers and postcards to guide nearby shoppers.', benefit: 'Guides neighborhood foot traffic straight to your entrance.' },
          { name: 'Weddings & Private Celebrations', description: 'Printed on RSVP stationery and formal wedding invitations for banquet halls.', benefit: 'Eliminates frantic phone calls from lost guests on the event day.' },
          { name: 'Real Estate & Development Sites', description: 'Mounted on land development billboards and open house yard signs.', benefit: 'Enables drive-by buyers to visit model homes instantly.' },
          { name: 'Boutique Hotels & Lodging', description: 'Sent in booking confirmation emails for effortless airport-to-hotel transit.', benefit: 'Delivers a stress-free arrival experience for travelers.' },
          { name: 'Festivals & Outdoor Expos', description: 'Printed on transit signage indicating specific parking gates and shuttle pickup zones.', benefit: 'Smooths vehicular and pedestrian traffic flow.' },
          { name: 'Emergency Services & Urgent Care', description: 'Displayed on clinic windows directing patients to after-hours emergency facilities.', benefit: 'Provides immediate navigation in urgent situations.' }
        ],
        howItWorks: [
          { title: '1. Enter Coordinates or Map URL', description: 'Paste your Google Maps link or enter exact latitude and longitude coordinates.' },
          { title: '2. Customize Map Pin Styling', description: 'Match corporate colors and embed your logo or a custom map pin badge.' },
          { title: '3. Download & Print Directional Signs', description: 'Export print-ready Vector SVG for outdoor banners or PNG for invitations.' }
        ],
        useCases: [
          { title: 'Wedding & Event Stationery', description: 'Printed on the back of formal wedding invitation cards for venue navigation.', example: 'Couple guiding 150 guests to a countryside estate.' },
          { title: 'Direct Mail Postcards', description: 'Mailed to local zip codes with a "Visit our new showroom" call to action.', example: 'Fitness club attracting neighborhood residents.' },
          { title: 'Highway Billboard Signage', description: 'Displayed on highway exit billboards directing motorists to factory outlets.', example: 'Commercial retail park driving exit ramp traffic.' },
          { title: 'Store Business Cards', description: 'Printed alongside phone contacts with direct route mapping.', example: 'Auto body shop facilitating effortless vehicle drop-offs.' }
        ],
        tips: [
          'Verify Pin Accuracy: Always preview the coordinates in Google Maps to ensure the pin lands at the exact customer entrance.',
          'Clear Directional CTA: Pair with clear copy like "Scan with your phone camera to open turn-by-turn directions in Google Maps".',
          'High Optical Contrast: Maintain dark modules on a clean white background for rapid scanning.',
          'Vector SVG for Large Print: Use Vector SVG format for large outdoor billboards and directional road signs.',
          'Field Test Navigation: Test the code in person on your mobile device to verify that tapping "Start" opens the expected route.'
        ],
        technicalNotes: 'Standards Compliance: Compatible with standard geo: URI schemes and universal Google Maps / Apple Maps URLs.',
        faqs: [
          { question: 'How does a Location QR code launch GPS navigation?', answer: 'When scanned with a smartphone camera, the device recognizes the geographic coordinates and prompts the user to open Google Maps or Apple Maps with the route pre-calculated.' },
          { question: 'Does this work on both iPhone and Android devices?', answer: 'Yes! On iPhones it opens Apple Maps or Google Maps, and on Android smartphones it natively launches Google Maps.' },
          { question: 'Can I use a street address or do I need numerical coordinates?', answer: 'You can input either a direct Google Maps share link, a formatted address, or numerical latitude/longitude coordinates.' },
          { question: 'Do Location QR codes ever expire?', answer: 'No. Static Location QR codes encode geographic coordinates directly and will work permanently with zero fees.' },
          { question: 'Can I add my business logo or a map pin icon to the center?', answer: 'Yes! Upload your logo or choose an icon, and our generator automatically boosts error correction to Level H (30%).' },
          { question: 'Is it free to create and download?', answer: 'Yes! Generating and exporting Location QR codes in SVG and PNG format is 100% free with unlimited scans.' }
        ],
        relatedTools: [
          { name: 'URL QR Generator', slug: 'url-to-qr-code', description: 'Direct visitors to your website or booking form.' },
          { name: 'vCard QR Generator', slug: 'vcard-qr-code-generator', description: 'Share merchant and concierge contact cards with visitors.' },
          { name: 'Google Reviews QR', slug: 'google-reviews-qr-code', description: 'Collect 5-star customer ratings on Google Maps.' },
          { name: 'Wi-Fi QR Generator', slug: 'wifi-qr-code-generator', description: 'Offer frictionless guest Wi-Fi in your store or venue.' }
        ]
      };
  }
}
