import type { Locale } from '../config';
import type { LocalizedPageContent } from './types';

export function getAppContent(locale: Locale): LocalizedPageContent {
  switch (locale) {
    case 'es':
      return {
        slug: 'app-store-qr-code-generator',
        qrTypeId: 'app',
        title: 'Generador de Código QR para Descargar Apps — App Store y Google Play',
        description: 'Crea códigos QR universales para descargar aplicaciones móviles en App Store y Google Play. Detección automática de dispositivo. Descarga en SVG y PNG.',
        h1: 'Generador de Código QR para Descargar Apps',
        subheadline: 'Un solo código QR para todas las tiendas de aplicaciones. Detecta si el usuario usa iPhone o Android y lo envía a la tienda correcta.',
        heading: 'Código QR de Descarga de Apps',
        subheading: 'Maximiza las instalaciones de tu app móvil con un único punto de descarga para iOS y Android.',
        overviewTitle: '¿Qué es un Código QR de Descarga de Apps?',
        overviewParagraphs: [
          'Un código QR para descarga de apps unifica los enlaces de Apple App Store y Google Play Store en un único código inteligente. Cuando un usuario de iPhone lo escanea, se abre directamente la App Store de iOS; si lo escanea un usuario de Android, se abre Google Play Store.',
          'Poner dos códigos QR diferentes en un cartel publicitario o caja de producto confunde a los usuarios y reduce las descargas. Un código único e inteligente resuelve este problema y maximiza la tasa de conversión.',
          'Personaliza colores, añade el logo de tu aplicación y descarga en formato vectorial SVG para imprenta o PNG para medios digitales.'
        ],
        sectors: [
          { name: 'Startups y Empresas de Software', description: 'En carteles publicitarios y presentaciones para captar nuevos usuarios móviles.', benefit: 'Aumenta las descargas orgánicas de la app.' },
          { name: 'Banca y Fintech', description: 'En extractos bancarios impresos y sucursales para fomentar la banca digital.', benefit: 'Migra clientes tradicionales al canal móvil.' },
          { name: 'Gimnasios y Centros de Fitness', description: 'En mostradores para descargar la app de reserva de clases y entrenamientos.', benefit: 'Fideliza y organiza las reservas del centro.' },
          { name: 'Restaurantes y Cadenas de Comida', description: 'En manteles y cajas de reparto para unirse al programa de fidelización y pedidos.', benefit: 'Incrementa los pedidos recurrentes sin comisiones.' },
          { name: 'Comercio Electrónico y Marcas de Moda', description: 'En etiquetas y cajas de envío para acceder a ofertas exclusivas en la app.', benefit: 'Mayor ticket medio de compra en app.' },
          { name: 'Transporte y Movilidad Urbana', description: 'En patinetes, bicicletas de alquiler y paradas de autobús para desbloqueo.', benefit: 'Registro inmediato para empezar a viajar.' }
        ],
        howItWorks: [
          { title: '1. Introduce los Enlaces de las Tiendas', description: 'Pega el enlace de tu app en Apple App Store y en Google Play Store.' },
          { title: '2. Personaliza el Diseño', description: 'Elige los colores de tu marca y sube el icono oficial de tu aplicación.' },
          { title: '3. Descarga e Imprime', description: 'Exporta en SVG vectorial para packaging o PNG de alta resolución.' }
        ],
        useCases: [
          { title: 'Embalajes de Producto', description: 'Impreso en la caja del producto para descargar la app de configuración.', example: 'Marca de domótica conectada.' },
          { title: 'Carteles en Tiendas Físicas', description: 'Soportes de mesa invitando a descargar la app para obtener 5€ de bienvenida.', example: 'Cadena de moda aumentando descargas.' },
          { title: 'Vallas Publicitarias en Metro', description: 'Anuncios en estaciones de transporte público.', example: 'App de delivery captando usuarios en hora punta.' },
          { title: 'Folletos Promocionales', description: 'Insertos en revistas y folletos comerciales.', example: 'Neobanco captando cuentas jóvenes.' }
        ],
        tips: [
          'Enlaces Verificados: Comprueba que los enlaces lleven a las fichas publicadas de tu app.',
          'Llamada a la Acción Atractiva: Añade texto como "Escanea para descargar la app en iOS o Android".',
          'Alto Contraste: Utiliza fondo blanco para lectura rápida en cualquier entorno.',
          'SVG para Impresión Profesional: Emplea SVG vectorial para garantizar nitidez a gran escala.',
          'Prueba en Ambos Sistemas: Escanea con un iPhone y con un móvil Android para verificar el enrutamiento.'
        ],
        technicalNotes: 'Detección automática de User-Agent compatible con iOS, iPadOS y Android.',
        faqs: [
          { question: '¿Cómo sabe el código si el usuario usa iPhone o Android?', answer: 'El enlace inteligente detecta el sistema operativo del navegador del móvil y redirige al instante a la App Store o a Google Play.' },
          { question: '¿Qué ocurre si se escanea desde un ordenador?', answer: 'Se muestra una página de aterrizaje con botones directos para descargar desde ambas tiendas.' },
          { question: '¿Puedo usar solo el enlace de una de las tiendas?', answer: 'Sí, si tu app solo está disponible en una plataforma, puedes introducir solo ese enlace.' },
          { question: '¿Caducan estos códigos QR?', answer: 'Los códigos dinámicos permanecen activos mientras tu cuenta esté activa y permiten cambiar los enlaces de las tiendas cuando quieras.' },
          { question: '¿Puedo colocar el icono de mi app en el centro?', answer: 'Sí, sube el icono en PNG o SVG y el sistema aplicará corrección de errores nivel H (30%).' },
          { question: '¿Tiene algún coste por descarga?', answer: 'No, las descargas y escaneos son ilimitados.' }
        ],
        relatedTools: [
          { name: 'QR de Enlace Web', slug: 'url-to-qr-code', description: 'Dirige tráfico a tu sitio web o tienda online.' },
          { name: 'QR de Redes Sociales', slug: 'social-media-qr-code', description: 'Agrupa todos tus perfiles sociales en un solo enlace.' },
          { name: 'QR de Reseñas de Google', slug: 'google-reviews-qr-code', description: 'Consigue más valoraciones de 5 estrellas.' },
          { name: 'Tarjeta de Visita Digital', slug: 'digital-business-card', description: 'Crea tarjetas de contacto profesionales.' }
        ]
      };
    case 'de':
      return {
        slug: 'app-store-qr-code-generator',
        qrTypeId: 'app',
        title: 'App Store QR Code Generator — App Store & Google Play Download',
        description: 'Erstellen Sie universelle App-Download QR-Codes für iOS und Android. Automatische Geräteerkennung. Kostenloser Vektor-SVG & PNG Download.',
        h1: 'App Store QR Code Generator',
        subheadline: 'Ein einziger QR-Code für alle App-Stores. Erkennt automatisch iOS oder Android und leitet zum passenden Store weiter.',
        heading: 'App-Download-QR-Code',
        subheading: 'Maximieren Sie Ihre mobilen App-Installationen mit einem einheitlichen Download-Code für iOS und Android.',
        overviewTitle: 'Was ist ein App Store QR Code Generator?',
        overviewParagraphs: [
          'Ein App Store QR Code Generator bündelt Apple App Store und Google Play Store Links in einem einzigen intelligenten 2D-Barcode. Scannt ein iPhone-Nutzer den Code, öffnet sich sofort der iOS App Store; scannt ein Android-Nutzer, öffnet sich der Google Play Store.',
          'Zwei getrennte QR-Codes auf Plakaten oder Verpackungen verwirren Kunden und senken die Download-Raten. Ein einziger intelligenter Code sorgt für maximale Konversion.',
          'Passen Sie Farben an, binden Sie Ihr App-Icon ein und laden Sie die Datei als Vektor-SVG für Drucksachen oder hochauflösendes PNG herunter.'
        ],
        sectors: [
          { name: 'Startups & Software-Unternehmen', description: 'Auf Werbeplakaten und Roll-ups zur Nutzergewinnung.', benefit: 'Steigert organische App-Downloads.' },
          { name: 'Banken & Fintech', description: 'Auf Kontoauszügen zur Förderung der Banking-App.', benefit: 'Verlagert Kundenkontakt in die mobile App.' },
          { name: 'Fitnessstudios & Sportclubs', description: 'Am Empfang zur Buchung von Trainingszeiten und Kursen.', benefit: 'Vereinfacht die Kursorganisation.' },
          { name: 'Gastronomie & Lieferservice', description: 'Auf Verpackungen für das eigene Bestell- und Treueprogramm.', benefit: 'Spart Provisionen externer Plattformen.' },
          { name: 'E-Commerce & Modehandel', description: 'In Paketen für exklusive In-App-Rabatte.', benefit: 'Höherer Kundenwert über die mobile App.' },
          { name: 'Mobilität & E-Scooter', description: 'Direkt auf Leihfahrzeugen zur sofortigen Freischaltung.', benefit: 'Schnelle Registrierung vor Ort.' }
        ],
        howItWorks: [
          { title: '1. Store-Links Eingeben', description: 'Apple App Store Link und Google Play Store Link eintragen.' },
          { title: '2. Design Anpassen', description: 'Farben wählen und offizielles App-Icon im Zentrum platzieren.' },
          { title: '3. Herunterladen & Drucken', description: 'Als Vektor-SVG für Verpackungen oder PNG exportieren.' }
        ],
        useCases: [
          { title: 'Produktverpackungen', description: 'Auf Kartons zur schnellen App-Einrichtung gedruckt.', example: 'Smart-Home-Hersteller mit Setup-App.' },
          { title: 'Plakate im Ladengeschäft', description: 'Tischaufsteller mit Willkommensrabatt bei App-Download.', example: 'Modekette steigert App-Nutzer.' },
          { title: 'U-Bahn-Werbung', description: 'Großflächenplakate im öffentlichen Nahverkehr.', example: 'Liefer-App wirbt Pendler an.' },
          { title: 'Werbeflyer & Beileger', description: 'In Zeitschriften und Paketbeilegern.', example: 'Neobank gewinnt Neukunden.' }
        ],
        tips: [
          'Gültige Store-Links: Prüfen Sie, ob beide Links direkt zu den veröffentlichten Apps führen.',
          'Klarer Handlungsaufruf: "Scannen zum Download für iOS & Android" ergänzen.',
          'Hoher Kontrast: Weißer Hintergrund für schnelle optische Erkennung.',
          'SVG für den Druck: Garantiert randscharfe Kanten auf allen Werbeträgern.',
          'Gerätetest: Vorab mit einem iPhone und einem Android-Smartphone testen.'
        ],
        technicalNotes: 'Automatische User-Agent-Erkennung für iOS, iPadOS und Android.',
        faqs: [
          { question: 'Wie erkennt der Code das Smartphone-Betriebssystem?', answer: 'Der Link prüft den Browser-User-Agent und leitet automatisch zum passenden Store (Apple App Store oder Google Play) weiter.' },
          { question: 'Was passiert beim Scannen am Computer?', answer: 'Es öffnet sich eine Übersichtsseite mit Download-Buttons für beide App-Stores.' },
          { question: 'Kann ich nur einen Store verlinken?', answer: 'Ja, falls Ihre App nur für eine Plattform verfügbar ist, können Sie auch nur einen Link eintragen.' },
          { question: 'Laufen diese App-Codes ab?', answer: 'Dynamische Codes bleiben dauerhaft aktiv und erlauben jederzeit spätere Link-Änderungen.' },
          { question: 'Kann ich mein App-Icon einfügen?', answer: 'Ja, laden Sie Ihr Icon hoch und die Fehlerkorrektur wird automatisch auf Stufe H (30%) erhöht.' },
          { question: 'Gibt es ein Download-Limit?', answer: 'Nein, Scans und Downloads sind unbegrenzt und kostenlos.' }
        ],
        relatedTools: [
          { name: 'Weblink QR Generator', slug: 'url-to-qr-code', description: 'Besucher auf Ihre Website weiterleiten.' },
          { name: 'Social Media QR Code', slug: 'social-media-qr-code', description: 'Alle Social-Profile in einem Link.' },
          { name: 'Google Bewertungen QR', slug: 'google-reviews-qr-code', description: 'Mehr 5-Sterne-Bewertungen sammeln.' },
          { name: 'Digitale Visitenkarte', slug: 'digital-business-card', description: 'Professionelles Profil erstellen.' }
        ]
      };
    case 'fr':
      return {
        slug: 'app-store-qr-code-generator',
        qrTypeId: 'app',
        title: 'Générateur de QR Code App Store — Téléchargement iOS & Google Play',
        description: 'Créez des QR codes universels pour télécharger vos applications sur App Store et Google Play. Détection automatique du smartphone. Téléchargement SVG et PNG.',
        h1: 'Générateur de QR Code App Store',
        subheadline: 'Un seul QR code pour tous les magasins d\'applications. Détecte automatiquement si l\'utilisateur est sur iPhone ou Android et le redirige vers le bon store.',
        heading: 'QR Code de Téléchargement d\'Applications',
        subheading: 'Maximisez vos installations d\'applications mobiles avec un code universel pour iOS et Android.',
        overviewTitle: 'Qu\'est-ce qu\'un QR Code App Store ?',
        overviewParagraphs: [
          'Un générateur de QR code App Store réunit les liens de l\'Apple App Store et du Google Play Store dans un seul code 2D intelligent. Si un utilisateur d\'iPhone le scanne, l\'App Store s\'ouvre directement ; s\'il est sur Android, c\'est Google Play qui s\'affiche.',
          'Mettre deux codes distincts sur vos affiches ou emballages encombre le graphisme et réduit les téléchargements. Un code unique intelligent optimise vos conversions.',
          'Téléchargement gratuit en SVG vectoriel pour vos emballages ou PNG haute définition.'
        ],
        sectors: [
          { name: 'Startups & Éditeurs de Logiciels', description: 'Sur kakémonos et bannières pour acquérir des utilisateurs.', benefit: 'Multiplie les installations organiques.' },
          { name: 'Banques & Fintech', description: 'Sur relevés de compte pour encourager l\'usage de l\'application.', benefit: 'Digitalise la relation client.' },
          { name: 'Salles de Sport & Clubs', description: 'Au comptoir pour réserver cours et entraînements.', benefit: 'Fluidifie les plannings d\'activités.' },
          { name: 'Restauration & Livraison', description: 'Sur emballages pour commander en direct avec fidélité.', benefit: 'Évite les commissions des agrégateurs.' },
          { name: 'E-Commerce & Boutiques', description: 'Dans les colis pour des réductions exclusives in-app.', benefit: 'Augmente le panier moyen sur mobile.' },
          { name: 'Mobilité & Vélos en Libre-Service', description: 'Sur les véhicules pour un déverrouillage immédiat.', benefit: 'Inscription rapide pour rouler sans attendre.' }
        ],
        howItWorks: [
          { title: '1. Indiquez les Liens des Stores', description: 'Collez le lien Apple App Store et le lien Google Play Store.' },
          { title: '2. Personnalisez l\'Apparence', description: 'Choisissez vos couleurs et placez l\'icône officielle de votre app.' },
          { title: '3. Téléchargez et Imprimez', description: 'Exportez en SVG vectoriel pour impression ou PNG.' }
        ],
        useCases: [
          { title: 'Boîtes et Emballages Produits', description: 'Pour télécharger l\'application de configuration.', example: 'Objet connecté avec application d\'installation.' },
          { title: 'Affiches en Magasin', description: 'Offrant un bon d\'achat pour le premier téléchargement.', example: 'Chaîne de prêt-à-porter développant ses utilisateurs.' },
          { title: 'Publicité dans les Transports', description: 'Affiches sur les quais de métro et gares.', example: 'Application de livraison de repas.' },
          { title: 'Prospectus & Encarts Presse', description: 'Dans les magazines spécialisés.', example: 'Banque en ligne acquérant de nouveaux clients.' }
        ],
        tips: [
          'Liens Valides : Vérifiez que vos deux liens mènent bien aux fiches officielles en ligne.',
          'Appel à l\'Action Clair : Ajoutez "Scannez pour télécharger sur iOS et Android".',
          'Contraste Net : Fond blanc pour un scan fluide.',
          'SVG pour l\'Impression : Le SVG garantit une netteté parfaite à toute échelle.',
          'Testez sur les Deux Systèmes : Vérifiez le scan avec un iPhone et un appareil Android.'
        ],
        technicalNotes: 'Détection automatique de l\'agent utilisateur pour iOS, iPadOS et Android.',
        faqs: [
          { question: 'Comment le code détecte-t-il le smartphone ?', answer: 'Le lien vérifie le système d\'exploitation du mobile et redirige instantanément vers l\'App Store ou Google Play.' },
          { question: 'Que se passe-t-il si on le scanne depuis un ordinateur ?', answer: 'Une page s\'affiche avec les boutons de téléchargement pour les deux magasins d\'applications.' },
          { question: 'Puis-je indiquer un seul store ?', answer: 'Oui, si votre application n\'est disponible que sur un seul système, vous pouvez renseigner un seul lien.' },
          { question: 'Ces QR codes expirent-ils ?', answer: 'Les codes dynamiques restent valables indéfiniment et vous permettent de mettre à jour vos liens à tout moment.' },
          { question: 'Puis-je mettre l\'icône de mon application au centre ?', answer: 'Oui, importez votre icône et la correction d\'erreur passera automatiquement au niveau H (30%).' },
          { question: 'Y a-t-il une limite de téléchargements ?', answer: 'Non, les scans et téléchargements sont illimités et 100% gratuits.' }
        ],
        relatedTools: [
          { name: 'QR Code Lien Web', slug: 'url-to-qr-code', description: 'Redirigez vers votre site web.' },
          { name: 'QR Code Réseaux Sociaux', slug: 'social-media-qr-code', description: 'Tous vos profils sociaux en un lien.' },
          { name: 'QR Code Avis Google', slug: 'google-reviews-qr-code', description: 'Collectez des avis 5 étoiles.' },
          { name: 'Carte de Visite Digitale', slug: 'digital-business-card', description: 'Créez votre profil de contact complet.' }
        ]
      };
    case 'pt':
      return {
        slug: 'app-store-qr-code-generator',
        qrTypeId: 'app',
        title: 'Gerador de QR Code App Store — Download para iOS e Google Play',
        description: 'Crie QR Codes universais de download de aplicativos para iPhone e Android. Detecção automática de sistema. Download grátis em SVG e PNG.',
        h1: 'Gerador de QR Code App Store',
        subheadline: 'Um único QR Code para todas as lojas de aplicativos. Detecta automaticamente se o usuário usa iOS ou Android e redireciona para a loja certa.',
        heading: 'QR Code para Download de Aplicativos',
        subheading: 'Aumente os downloads do seu app móvel com um código inteligente único para iOS e Android.',
        overviewTitle: 'O que é um QR Code de App Store?',
        overviewParagraphs: [
          'Um gerador de QR Code de App Store reúne os links da Apple App Store e da Google Play Store em um código inteligente 2D. Se o usuário escanear com um iPhone, abre a App Store; se for com um Android, abre a Google Play.',
          'Colocar dois códigos separados em cartazes polui o anúncio e diminui as taxas de download. Um código inteligente único simplifica a experiência e maximiza as instalações.',
          'Personalize cores, insira o ícone do seu app e baixe em SVG vetorial para gráficas ou PNG em alta definição.'
        ],
        sectors: [
          { name: 'Startups & Aplicativos', description: 'Em banners e anúncios para aquisição de novos usuários.', benefit: 'Acelera os downloads orgânicos.' },
          { name: 'Bancos & Fintechs', description: 'Em extratos bancários para estimular o uso do app.', benefit: 'Migra clientes para o canal digital.' },
          { name: 'Academias & Treinos', description: 'No balcão para agendamento de aulas e fichas de exercícios.', benefit: 'Facilita a rotina dos alunos.' },
          { name: 'Restaurantes & Delivery', description: 'Em embalagens com descontos para pedidos no próprio app.', benefit: 'Economia com comissões de marketplaces.' },
          { name: 'E-Commerce & Varejo', description: 'Dentro das caixas para cupons exclusivos no app.', benefit: 'Aumenta as vendas recorrentes.' },
          { name: 'Transporte & Patinetes', description: 'Nos próprios veículos para liberação e cadastro rápido.', benefit: 'Cadastro imediato para começar a usar.' }
        ],
        howItWorks: [
          { title: '1. Cole os Links das Lojas', description: 'Insira o link da Apple App Store e da Google Play Store.' },
          { title: '2. Personalize o Design', description: 'Escolha cores e coloque o ícone oficial do seu aplicativo.' },
          { title: '3. Baixe e Divulgue', description: 'Exporte em SVG vetorial para embalagens ou PNG.' }
        ],
        useCases: [
          { title: 'Caixas de Produtos', description: 'Impresso para download do aplicativo de configuração.', example: 'Aparelho inteligente com app de controle.' },
          { title: 'Cartazes em Lojas Físicas', description: 'Oferecendo cupom de desconto no primeiro pedido pelo app.', example: 'Loja de roupas aumentando downloads.' },
          { title: 'Anúncios no Transporte Público', description: 'Painéis em estações de metrô e ônibus.', example: 'App de delivery captando usuários.' },
          { title: 'Panfletos Promocionais', description: 'Em encartes e revistas.', example: 'Banco digital conquistando novos correntistas.' }
        ],
        tips: [
          'Links Válidos: Certifique-se de que os links levem direto para a página publicada do app.',
          'Chamada Clara: Use frases como "Aponte a câmera para baixar no iPhone ou Android".',
          'Alto Contraste: Fundo branco facilita a leitura.',
          'SVG para Impressão: Garante linhas nítidas em qualquer tamanho de impressão.',
          'Teste nos Dois Aparelhos: Escaneie com iPhone e Android antes de rodar o material.'
        ],
        technicalNotes: 'Detecção automática de User-Agent compatível com iOS, iPadOS e Android.',
        faqs: [
          { question: 'Como o código sabe qual é o celular do usuário?', answer: 'O link inteligente identifica o sistema operacional do smartphone e redireciona instantaneamente para a App Store ou Google Play.' },
          { question: 'O que acontece ao escanear pelo computador?', answer: 'Abre uma página com botões de download para ambas as lojas.' },
          { question: 'Posso colocar o link de apenas uma loja?', answer: 'Sim, se seu app estiver disponível em apenas uma plataforma, você pode preencher só esse link.' },
          { question: 'Os códigos de download expiram?', answer: 'Os códigos dinâmicos continuam ativos permanentemente e permitem atualizar os links a qualquer momento.' },
          { question: 'Posso colocar o ícone do meu app no centro?', answer: 'Sim, basta carregar a imagem e o sistema ajustará a correção de erros para Alto (30%).' },
          { question: 'Há limites de downloads?', answer: 'Não, os scans e downloads são ilimitados e totalmente grátis.' }
        ],
        relatedTools: [
          { name: 'QR Code Link URL', slug: 'url-to-qr-code', description: 'Direcione para seu site ou loja online.' },
          { name: 'QR Code Redes Sociais', slug: 'social-media-qr-code', description: 'Todos os seus perfis em um só link.' },
          { name: 'QR Code Avaliações Google', slug: 'google-reviews-qr-code', description: 'Ganhe avaliações 5 estrelas.' },
          { name: 'Cartão de Visita Digital', slug: 'digital-business-card', description: 'Crie seu perfil profissional completo.' }
        ]
      };
    case 'it':
      return {
        slug: 'app-store-qr-code-generator',
        qrTypeId: 'app',
        title: 'Generatore QR Code App Store — Download per iOS e Google Play',
        description: 'Crea codici QR universali per il download di app su iPhone e Android. Riconoscimento automatico del dispositivo. Download SVG e PNG.',
        h1: 'Generatore QR Code App Store',
        subheadline: 'Un solo codice QR per tutti gli store di app. Riconosce automaticamente iOS o Android e reindirizza allo store corretto.',
        heading: 'QR Code per Download di App',
        subheading: 'Massimizza i download della tua applicazione mobile con un unico codice intelligente per iOS e Android.',
        overviewTitle: 'Cos\'è un QR Code per App Store?',
        overviewParagraphs: [
          'Un generatore di codici QR per App Store unifica i link di Apple App Store e Google Play Store in un unico codice 2D intelligente. Se un utente iPhone inquadra il codice, si apre subito l\'App Store; se è su Android, si apre Google Play.',
          'Mostrare due codici diversi su manifesti o packaging confonde gli utenti e riduce i download. Un solo codice intelligente semplifica l\'esperienza e massimizza le conversioni.',
          'Download gratuito in formato vettoriale SVG per la tipografia o PNG ad alta risoluzione.'
        ],
        sectors: [
          { name: 'Startup & Software House', description: 'Su cartelloni e roll-up per acquisire nuovi utenti.', benefit: 'Aumenta i download organici dell\'app.' },
          { name: 'Banche & Fintech', description: 'Sugli estratti conto per incentivare l\'home banking da mobile.', benefit: 'Digitalizza la gestione dei conti correnti.' },
          { name: 'Palestre & Centri Sportivi', description: 'Alla reception per prenotare lezioni e corsi.', benefit: 'Semplifica la gestione degli accessi.' },
          { name: 'Ristorazione & Delivery', description: 'Sulle scatole da asporto per ordinare dall\'app proprietaria.', benefit: 'Elimina le commissioni dei portali terzi.' },
          { name: 'E-Commerce & Moda', description: 'Nei pacchi con sconti riservati agli acquisti in-app.', benefit: 'Fidelizza i clienti sul canale mobile.' },
          { name: 'Mobilità Urbana & Monopattini', description: 'Sui veicoli stessi per sblocco e noleggio immediato.', benefit: 'Registrazione rapida per iniziare a muoversi.' }
        ],
        howItWorks: [
          { title: '1. Inserisci i Link degli Store', description: 'Incolla il link Apple App Store e Google Play Store.' },
          { title: '2. Personalizza lo Stile', description: 'Scegli i colori e inserisci l\'icona ufficiale della tua app.' },
          { title: '3. Scarica e Stampa', description: 'Esporta in SVG vettoriale per packaging o PNG.' }
        ],
        useCases: [
          { title: 'Packaging di Prodotti', description: 'Stampato sulle scatole per scaricare l\'app di configurazione.', example: 'Dispositivo smart home con app di gestione.' },
          { title: 'Cartelli nei Negozi', description: 'Con buono sconto sul primo acquisto da app.', example: 'Catena di abbigliamento che incrementa i download.' },
          { title: 'Pubblicità nella Metropolitana', description: 'Affissioni nelle stazioni dei mezzi pubblici.', example: 'App di food delivery che cattura pendolari.' },
          { title: 'Volantini Promozionali', description: 'In allegato a riviste di settore.', example: 'Banca digitale che acquisisce nuovi clienti.' }
        ],
        tips: [
          'Link Verificati: Assicurati che entrambi i link portino alle schede ufficiali pubblicate.',
          'Invito Chiaro: Aggiungi "Inquadra per scaricare l\'app su iOS e Android".',
          'Contrasto Elevato: Sfondo bianco per una lettura rapida.',
          'SVG per la Stampa: Garantisce massima nitidezza a qualsiasi scala.',
          'Test su Entrambi i Sistemi: Verifica la scansione con iPhone e smartphone Android.'
        ],
        technicalNotes: 'Riconoscimento automatico dello User-Agent compatibile con iOS, iPadOS e Android.',
        faqs: [
          { question: 'Come riconosce il codice lo smartphone dell\'utente?', answer: 'Il link intelligente analizza il sistema operativo del dispositivo e reindirizza immediatamente ad App Store o Google Play.' },
          { question: 'Cosa succede se si scansiona da computer?', answer: 'Si apre una pagina con i pulsanti diretti per scaricare l\'app da entrambi gli store.' },
          { question: 'Posso inserire il link di un solo store?', answer: 'Sì, se la tua applicazione è disponibile solo per una piattaforma, puoi inserire solo quel link.' },
          { question: 'Questi codici QR scadono?', answer: 'I codici dinamici restano sempre attivi e ti permettono di modificare i link in qualsiasi momento.' },
          { question: 'Posso inserire l\'icona della mia app al centro?', answer: 'Sì, carica l\'icona e la correzione errori verrà impostata automaticamente su Alto (30%).' },
          { question: 'C\'è un limite ai download?', answer: 'No, le scansioni e i download sono illimitati e gratuiti.' }
        ],
        relatedTools: [
          { name: 'QR Code Link Web', slug: 'url-to-qr-code', description: 'Indirizza al tuo sito web.' },
          { name: 'QR Code Social Media', slug: 'social-media-qr-code', description: 'Tutti i tuoi profili social in un solo link.' },
          { name: 'QR Code Recensioni Google', slug: 'google-reviews-qr-code', description: 'Ottieni recensioni a 5 stelle.' },
          { name: 'Biglietto da Visita Digitale', slug: 'digital-business-card', description: 'Crea il tuo profilo di contatto completo.' }
        ]
      };
    case 'hi':
      return {
        slug: 'app-store-qr-code-generator',
        qrTypeId: 'app',
        title: 'ऐप स्टोर QR कोड जेनरेटर — iOS App Store और Google Play डाउनलोड',
        description: 'iPhone और Android दोनों के लिए यूनिवर्सल ऐप डाउनलोड QR कोड बनाएं। ऑटो डिवाइस डिटेक्शन। वेक्टर SVG और PNG मुफ़्त डाउनलोड।',
        h1: 'ऐप स्टोर QR कोड जेनरेटर',
        subheadline: 'सभी ऐप स्टोर्स के लिए एक अकेला QR कोड। पहचानता है कि यूजर iPhone पर है या Android पर और सही स्टोर पर भेजता है।',
        heading: 'ऐप डाउनलोड QR कोड',
        subheading: 'iOS और Android के लिए एक स्मार्ट QR कोड से अपने मोबाइल ऐप के डाउनलोड्स बढ़ाएं।',
        overviewTitle: 'ऐप स्टोर QR कोड क्या है?',
        overviewParagraphs: [
          'ऐप स्टोर QR कोड Apple App Store और Google Play Store दोनों के लिंक्स को एक अकेले स्मार्ट 2D बारकोड में समेट देता है। जब कोई iPhone यूजर इसे स्कैन करता है, तो iOS App Store खुलता है; और जब कोई Android यूजर स्कैन करता है, तो Google Play Store खुलता है।',
          'विज्ञापनों या बॉक्स पर दो अलग-अलग QR कोड लगाने से ग्राहक भ्रमित होते हैं। एक अकेला स्मार्ट कोड सभी फोन पर सही काम करता है और डाउनलोड्स को बढ़ाता है।',
          'रंग कस्टमाइज़ करें, अपना ऐप आइकन लगाएं और हाई-क्वालिटी SVG या PNG डाउनलोड करें।'
        ],
        sectors: [
          { name: 'स्टार्टअप्स व सॉफ्टवेयर कंपनियाँ', description: 'पोस्टरों और बैनरों पर नए मोबाइल ऐप यूजर्स प्राप्त करने हेतु।', benefit: 'ऐप के ऑर्गेनिक डाउनलोड्स में भारी वृद्धि।' },
          { name: 'बैंकिंग व फिनटेक', description: 'बैंक शाखाओं और पासबुक पर मोबाइल बैंकिंग ऐप डाउनलोड कराने हेतु।', benefit: 'ग्राहकों को मोबाइल बैंकिंग पर लाता है।' },
          { name: 'जिम व फिटनेस क्लब्स', description: 'काउंटर पर क्लास बुकिंग और वर्कआउट शेड्यूल ऐप के लिए।', benefit: 'बुकिंग प्रक्रिया को डिजिटल बनाता है।' },
          { name: 'रेस्टोरेंट व फ़ूड डिलीवरी', description: 'पार्सल बॉक्स पर अपने ऐप से ऑर्डर करने हेतु डिस्काउंट कोड के साथ।', benefit: 'तीसरे पक्ष के ऐप कमीशन से बचत।' },
          { name: 'ई-कॉमर्स व फैशन ब्रांड्स', description: 'डिलीवरी बॉक्स में ऐप-एक्सक्लूसिव छूट देने हेतु।', benefit: 'नियमित मोबाइल खरीदारों की संख्या बढ़ाता है।' },
          { name: 'किराये के वाहन व बाइक रेंटल', description: 'गाड़ी को अनलॉक करने और तुरंत रजिस्टर कराने हेतु।', benefit: 'त्वरित ऑन-बोर्डिंग।' }
        ],
        howItWorks: [
          { title: '1. स्टोर लिंक्स दर्ज करें', description: 'Apple App Store और Google Play Store का लिंक पेस्ट करें।' },
          { title: '2. ऐप डिज़ाइन कस्टमाइज़ करें', description: 'रंग चुनें और सेंटर में अपना आधिकारिक ऐप आइकन लगाएं।' },
          { title: '3. डाउनलोड व प्रिंट करें', description: 'पैकेजिंग या पोस्टरों के लिए वेक्टर SVG या PNG डाउनलोड करें।' }
        ],
        useCases: [
          { title: 'प्रोडक्ट बॉक्स पैकेजिंग', description: 'सेटअप और कंट्रोल ऐप डाउनलोड करने के लिए।', example: 'स्मार्ट होम डिवाइस पैकेजिंग।' },
          { title: 'दुकानों में लगे स्टैंडी', description: 'ऐप डाउनलोड करने पर 100 रुपये की छूट का ऑफर।', example: 'फैशन स्टोर ऐप डाउनलोड।' },
          { title: 'मेट्रो व बस स्टॉप विज्ञापन', description: 'पब्लिक ट्रांसपोर्ट स्टेशनों पर लगे होर्डिंग्स।', example: 'फ़ूड डिलीवरी ऐप प्रचार।' },
          { title: 'प्रमोशनल पैम्फलेट्स', description: 'अखबारों में दिए जाने वाले पर्चे।', example: 'डिजिटल पेमेंट ऐप प्रमोशन।' }
        ],
        tips: [
          'सत्यापित लिंक्स: सुनिश्चित करें कि दोनों लिंक्स सीधे आपके लाइव ऐप पर ले जाते हों।',
          'स्पष्ट निर्देश लिखें: "iPhone या Android पर ऐप डाउनलोड करने के लिए स्कैन करें" लिखें।',
          'हाई कंट्रास्ट: सफ़ेद बैकग्राउंड पर गहरे रंग के डॉट्स रखें।',
          'प्रिंटिंग के लिए SVG: बड़े होर्डिंग और पैकेजिंग के लिए हमेशा SVG का उपयोग करें।',
          'दोनों फोन पर टेस्ट: प्रिंट से पहले iPhone और Android दोनों से स्कैन करके जांच लें।'
        ],
        technicalNotes: 'स्वचालित User-Agent डिटेक्शन iOS, iPadOS और Android का पूर्ण समर्थन करता है।',
        faqs: [
          { question: 'कोड को कैसे पता चलता है कि यूजर के पास iPhone है या Android?', answer: 'स्मार्ट लिंक यूजर के मोबाइल ऑपरेटिंग सिस्टम को पहचानता है और सेकंड में सही स्टोर (App Store या Google Play) पर भेज देता है।' },
          { question: 'कंप्यूटर से स्कैन करने पर क्या होता है?', answer: 'कंप्यूटर पर दोनों स्टोर्स के डाउनलोड बटनों वाला एक वेबपेज खुल जाता है।' },
          { question: 'क्या मैं केवल एक स्टोर का लिंक डाल सकता हूँ?', answer: 'हाँ, यदि आपका ऐप केवल Android या केवल iOS पर है, तो आप एक ही लिंक डाल सकते हैं।' },
          { question: 'क्या ये कोड कभी एक्सपायर होते हैं?', answer: 'डायनेमिक कोड हमेशा सक्रिय रहते हैं और आप कभी भी ऐप स्टोर लिंक बदल सकते हैं।' },
          { question: 'क्या मैं बीच में अपना ऐप आइकन लगा सकता हूँ?', answer: 'हाँ, आइकन अपलोड करने पर सिस्टम एरर करेक्शन को हाई (H) पर सेट कर देगा।' },
          { question: 'क्या डाउनलोड की कोई सीमा है?', answer: 'नहीं, स्कैन और डाउनलोड पूरी तरह असीमित और 100% मुफ़्त हैं।' }
        ],
        relatedTools: [
          { name: 'वेबसाइट URL QR जेनरेटर', slug: 'url-to-qr-code', description: 'ग्राहकों को अपनी वेबसाइट पर भेजें।' },
          { name: 'सोशल मीडिया QR कोड', slug: 'social-media-qr-code', description: 'सभी सोशल प्रोफाइल एक ही लिंक में।' },
          { name: 'गूगल रिव्यू QR कोड', slug: 'google-reviews-qr-code', description: 'Google Maps पर 5-स्टार रेटिंग पाएं।' },
          { name: 'डिजिटल बिजनेस कार्ड', slug: 'digital-business-card', description: 'संपूर्ण संपर्क प्रोफाइल पेज बनाएं।' }
        ]
      };
    default: // 'en'
      return {
        slug: 'app-store-qr-code-generator',
        qrTypeId: 'app',
        title: 'App Store QR Code Generator — Universal iOS & Google Play Download',
        description: 'Create universal App Store QR codes for iOS and Android. Auto device detection directs users to the right app store. Free vector SVG & PNG.',
        h1: 'App Store QR Code Generator',
        subheadline: 'One smart QR code for all app stores. Automatically detects iOS or Android and routes users to Apple App Store or Google Play.',
        heading: 'App Store Download QR Code',
        subheading: 'Maximize mobile app installations with a single universal download touchpoint for iOS and Android.',
        overviewTitle: 'What is an App Store QR Code Generator?',
        overviewParagraphs: [
          'An App Store QR code generator consolidates Apple App Store and Google Play Store URLs into a single intelligent 2D barcode. When scanned using an iPhone, the device immediately launches the iOS App Store; when scanned using an Android smartphone, it launches the Google Play Store directly.',
          'Placing two separate QR codes (one for iOS and one for Android) on print advertisements, transit posters, and product packaging clutters marketing layouts and confuses consumers. A single universal smart QR code eliminates visual friction, dynamically routing each scanner to their matching native application marketplace.',
          'Our generator allows you to customize colors, embed your application logo, and download print-ready vector SVG files for physical signage or high-DPI PNG images for digital displays.'
        ],
        sectors: [
          { name: 'Startups & Mobile Software', description: 'Printed on billboards, subway advertisements, and pitch decks to acquire mobile users.', benefit: 'Drives frictionless organic mobile app installs.' },
          { name: 'Banking & Fintech Institutions', description: 'Printed on account statements and branch teller windows promoting digital mobile banking.', benefit: 'Migrates legacy branch customers to mobile self-service.' },
          { name: 'Gyms, Fitness & Wellness Centers', description: 'Displayed on front desks to download class reservation and personal workout apps.', benefit: 'Streamlines member check-ins and class bookings.' },
          { name: 'Restaurants & Food Delivery', description: 'Printed on takeout boxes offering exclusive loyalty discounts for in-app ordering.', benefit: 'Bypasses expensive third-party delivery marketplace commissions.' },
          { name: 'E-Commerce & Fashion Brands', description: 'Included in shipping boxes promoting early access to sales inside the mobile app.', benefit: 'Increases customer lifetime value through mobile push notifications.' },
          { name: 'Micro-Mobility & Scooter Rentals', description: 'Mounted directly on rental scooters and bikes for instant app unlock and onboarding.', benefit: 'Facilitates fast on-the-spot customer registration.' }
        ],
        howItWorks: [
          { title: '1. Input App Store URLs', description: 'Enter your Apple App Store URL and Google Play Store URL.' },
          { title: '2. Customize Branding & Icon', description: 'Match your brand color theme and embed your official app icon in the center.' },
          { title: '3. Download & Print Everywhere', description: 'Export print-ready Vector SVG for physical packaging or high-DPI PNG.' }
        ],
        useCases: [
          { title: 'Retail Product Packaging', description: 'Printed on hardware boxes for downloading smart setup companions.', example: 'IoT smart home device with quick-start app QR.' },
          { title: 'In-Store Tabletop Displays', description: 'Promoting a $5 welcome credit upon first app download.', example: 'Retail boutique growing mobile app user base.' },
          { title: 'Transit Billboard Advertising', description: 'Subway station posters capturing daily commuters.', example: 'Food delivery app scaling metropolitan users.' },
          { title: 'Direct Mail Catalog Inserts', description: 'Printed in magazine flyers and quarterly print catalogs.', example: 'Digital banking app acquiring new account holders.' }
        ],
        tips: [
          'Verify Published URLs: Ensure both App Store and Google Play links point to live, published listings.',
          'Clear Call-to-Action: Always pair with copy like "Scan to download on iOS or Android".',
          'High Optical Contrast: Maintain dark modules against a clean white background for rapid scanning.',
          'Vector SVG for Packaging: Use Vector SVG to guarantee razor-sharp rendering on printed cardboard packaging.',
          'Cross-Device Field Test: Test scanning on both an iPhone and an Android phone before running print batches.'
        ],
        technicalNotes: 'Standards Compliance: Automatic client User-Agent parsing fully compatible with iOS, iPadOS, and Android.',
        faqs: [
          { question: 'How does the QR code know whether the user has an iPhone or Android?', answer: 'The smart redirect script checks the scanner\'s mobile browser User-Agent header and immediately routes iOS users to the Apple App Store and Android users to Google Play.' },
          { question: 'What happens if someone scans the code on a desktop computer?', answer: 'Desktop visitors are directed to a fallback landing page displaying direct download buttons for both the App Store and Google Play.' },
          { question: 'Can I link only one app store if my app is platform-exclusive?', answer: 'Yes! If your application is currently only available on iOS or Android, you can input a single marketplace link.' },
          { question: 'Do App Store QR codes ever expire?', answer: 'Dynamic App Store QR codes remain permanently active and allow you to update or change destination URLs anytime in your dashboard.' },
          { question: 'Can I put my mobile app icon in the center of the QR code?', answer: 'Yes! Upload your app icon in PNG or SVG format, and our generator automatically boosts error correction to Level H (30%) for seamless scanning.' },
          { question: 'Is there a limit on how many app downloads I can receive?', answer: 'No! There are zero scan or download limits. You can drive unlimited mobile app installs for free.' }
        ],
        relatedTools: [
          { name: 'URL QR Generator', slug: 'url-to-qr-code', description: 'Direct visitors to your website or online store.' },
          { name: 'Social Media QR', slug: 'social-media-qr-code', description: 'Consolidate all social profiles in one link.' },
          { name: 'Google Reviews QR', slug: 'google-reviews-qr-code', description: 'Collect 5-star customer ratings on Google Maps.' },
          { name: 'Digital Business Card', slug: 'digital-business-card', description: 'Create a complete professional contact profile.' }
        ]
      };
  }
}
