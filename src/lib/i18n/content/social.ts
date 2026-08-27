import type { Locale } from '../config';
import type { LocalizedPageContent } from './types';

export function getSocialContent(locale: Locale): LocalizedPageContent {
  switch (locale) {
    case 'es':
      return {
        slug: 'social-media-qr-code',
        qrTypeId: 'social',
        title: 'Generador de Código QR para Redes Sociales — Todos tus Perfiles en un QR',
        description: 'Agrupa todos tus perfiles de redes sociales (Instagram, TikTok, YouTube, LinkedIn) en un solo código QR escaneable. Descarga gratis en SVG y PNG.',
        h1: 'Generador de Código QR para Redes Sociales',
        subheadline: 'Unifica todos tus perfiles en un único punto de acceso. Permite que tus seguidores conecten en su plataforma favorita con un solo escaneo.',
        heading: 'Código QR de Redes Sociales',
        subheading: 'Unifica todos tus canales sociales en una única página de aterrizaje móvil y elegante.',
        overviewTitle: '¿Qué es un Código QR de Redes Sociales?',
        overviewParagraphs: [
          'Un generador de código QR para redes sociales reúne todos tus perfiles (Instagram, TikTok, YouTube, LinkedIn, X, Facebook, Spotify) en un único código de barras 2D. Al escanearlo, el usuario abre una página adaptada a móviles con botones a todas tus cuentas.',
          'Poner múltiples nombres de usuario en carteles o envases sobrecarga el diseño gráfico y confunde al público. Un solo código multienlace ofrece una puerta de entrada ordenada que multiplica el crecimiento de tu audiencia.',
          'Personaliza colores corporativos, formas de módulos y descarga en formato vectorial SVG o PNG de alta definición.'
        ],
        sectors: [
          { name: 'Creadores de Contenido e Influencers', description: 'En tarjetas de merchandising y fondos de vídeo para sumar seguidores en varias redes.', benefit: 'Convierte espectadores de una red en seguidores multicanal.' },
          { name: 'Boutiques de Moda y Tiendas', description: 'En bolsas de compra y espejos de probadores para seguir novedades y colecciones.', benefit: 'Crea comunidad digital a partir de compradores físicos.' },
          { name: 'Restaurantes, Bares y Discotecas', description: 'En posavasos y mesas para fomentar fotos etiquetadas en historias.', benefit: 'Viralidad local en Instagram y TikTok.' },
          { name: 'Músicos, Bandas y Podcasts', description: 'En carteles de conciertos y portadas de discos hacia Spotify y YouTube.', benefit: 'Transforma público de conciertos en oyentes recurrentes.' },
          { name: 'Gimnasios y Entrenadores', description: 'En máquinas de entrenamiento con rutinas y vídeos motivacionales.', benefit: 'Fideliza a los clientes con contenido diario.' },
          { name: 'Artistas y Diseñadores Gráficos', description: 'En cartelas de galerías de arte y láminas hacia Behance e Instagram.', benefit: 'Conecta a los amantes del arte con el portfolio completo.' }
        ],
        howItWorks: [
          { title: '1. Añade tus Enlaces Sociales', description: 'Introduce los enlaces a tus perfiles de Instagram, YouTube, TikTok, LinkedIn, etc.' },
          { title: '2. Personaliza Colores y Logo', description: 'Elige tu estilo visual y añade tu icono central o logotipo.' },
          { title: '3. Descarga e Imprime', description: 'Exporta en SVG vectorial para imprenta o PNG para gráficos digitales.' }
        ],
        useCases: [
          { title: 'Bolsas de Compra en Tiendas', description: 'Impreso en bolsas con la llamada "Síguenos para no perderte nuestras novedades".', example: 'Boutique sumando 500 seguidores mensuales.' },
          { title: 'Etiquetas de Ropa y Merch', description: 'En etiquetas de prendas enlazando a la comunidad de la marca.', example: 'Marca de moda urbana enlazando a lanzamientos exclusivos.' },
          { title: 'Banners de Escenario en Conciertos', description: 'Grandes códigos proyectados antes y después de actuaciones en directo.', example: 'Banda ganando miles de oyentes en Spotify en su gira.' },
          { title: 'Posavasos en Terrazas', description: 'Posavasos animando a subir fotos de comida y etiquetar al local.', example: 'Cafetería de brunch generando decenas de historias diarias.' }
        ],
        tips: [
          'URLs Completas: Asegúrate de que los enlaces comiencen por https:// e incluyan tu nombre de usuario exacto.',
          'Llamada a la Acción: Acompaña el código con texto como "Escanea para seguir nuestra comunidad".',
          'Alto Contraste: Utiliza módulos oscuros sobre fondo claro para facilitar la lectura.',
          'SVG para Packaging: Emplea formato SVG vectorial para cajas de envío y bolsas de papel.',
          'Prueba en Móviles: Comprueba que la página multienlace abra bien en Safari y Chrome.'
        ],
        technicalNotes: 'Estándar ISO/IEC 18004 compatible con todas las aplicaciones de cámara de smartphone.',
        faqs: [
          { question: '¿Cómo funciona un código QR de redes sociales?', answer: 'Al escanear el código, se abre una página optimizada para móviles que muestra botones directos a todos tus perfiles sociales configurados.' },
          { question: '¿Puedo añadir múltiples cuentas a un solo código?', answer: 'Sí, esa es su principal ventaja: centralizar todas tus plataformas en un único código QR.' },
          { question: '¿Qué plataformas son compatibles?', answer: 'Admite Instagram, TikTok, YouTube, Facebook, LinkedIn, X, Spotify, Twitch, Discord, Pinterest y enlaces web personalizados.' },
          { question: '¿Puedo personalizarlo con mi foto de perfil o logo?', answer: 'Sí, puedes subir tu avatar o logo y el sistema ajustará automáticamente la corrección de errores al nivel Alto (30%).' },
          { question: '¿Tienen fecha de caducidad?', answer: 'No, son códigos estáticos y permanentes sin fecha de caducidad.' },
          { question: '¿Tiene algún coste generar este código?', answer: 'No, la creación y descarga es 100% gratuita y sin límites de escaneo.' }
        ],
        relatedTools: [
          { name: 'Tarjeta de Visita Digital', slug: 'digital-business-card', description: 'Crea tarjetas de contacto profesionales completas.' },
          { name: 'QR de Enlace Web', slug: 'url-to-qr-code', description: 'Dirige tráfico a tu sitio web o tienda online.' },
          { name: 'QR de Reseñas de Google', slug: 'google-reviews-qr-code', description: 'Consigue más valoraciones de 5 estrellas.' },
          { name: 'QR de Instagram', slug: 'instagram-qr-code', description: 'Crea códigos directos a tu perfil de Instagram.' }
        ]
      };
    case 'de':
      return {
        slug: 'social-media-qr-code',
        qrTypeId: 'social',
        title: 'Social Media QR Code Generator — Alle Profile in einem QR-Code',
        description: 'Verbinden Sie all Ihre Social-Media-Profile (Instagram, TikTok, YouTube, LinkedIn) in einem scanbaren QR-Code. Vektor-SVG & PNG Download.',
        h1: 'Social Media QR Code Generator',
        subheadline: 'Bündeln Sie Ihre Social-Media-Kanäle an einem Ort. Lassen Sie Follower und Kunden mit nur einem Scan auf ihrer Lieblingsplattform beitreten.',
        heading: 'Social-Media-QR-Code',
        subheading: 'Vereinen Sie Ihre sozialen Profile auf einer eleganten, mobiloptimierten Übersichtsseite.',
        overviewTitle: 'Was ist ein Social Media QR Code Generator?',
        overviewParagraphs: [
          'Ein Social Media QR Code Generator bündelt all Ihre Online-Profile (Instagram, TikTok, YouTube, LinkedIn, X, Facebook, Spotify) in einem einzigen 2D-Barcode. Beim Scannen öffnet sich eine mobile Übersichtsseite mit Direktlinks zu all Ihren Kanälen.',
          'Mehrere Benutzernamen auf Flyern oder Verpackungen wirken unruhig und überfordern Kunden. Ein einziger Sammel-Code schafft Ordnung und maximiert das Follower-Wachstum auf allen Plattformen.',
          'Farben individuell anpassen, Logo einbetten und als Vektor-SVG für Schilder oder PNG für Displays herunterladen.'
        ],
        sectors: [
          { name: 'Creator & Influencer', description: 'Auf Merchandise-Karten und Video-Hintergründen für plattformübergreifendes Wachstum.', benefit: 'Gewinnt Follower auf mehreren Kanälen gleichzeitig.' },
          { name: 'Modegeschäfte & Boutiquen', description: 'Auf Einkaufstaschen und Umkleide-Spiegeln für Kollektions-Updates.', benefit: 'Macht Ladenkunden zu Social-Followern.' },
          { name: 'Bars & Diskotheken', description: 'Auf Bierdeckeln und Tischen für getaggte Instagram-Storys.', benefit: 'Steigert die virale Sichtbarkeit vor Ort.' },
          { name: 'Musiker, Bands & Podcasts', description: 'Auf Konzertplakaten mit Direktlinks zu Spotify und YouTube.', benefit: 'Konzertbesucher werden zu dauerhaften Hörern.' },
          { name: 'Fitnessstudios & Trainer', description: 'An Trainingsgeräten mit Übungsvideos und Motivationstipps.', benefit: 'Stärkt die Mitgliederbindung durch täglichen Content.' },
          { name: 'Künstler & Fotografen', description: 'Auf Kunst-Ausstellungen mit Link zum Online-Portfolio.', benefit: 'Verbindet Kunstinteressierte mit dem Gesamtwerk.' }
        ],
        howItWorks: [
          { title: '1. Profile Hinzufügen', description: 'Links zu Instagram, TikTok, YouTube, LinkedIn etc. eingeben.' },
          { title: '2. Design Gestalten', description: 'Farben anpassen und Social-Media-Icon oder eigenes Logo wählen.' },
          { title: '3. Herunterladen & Drucken', description: 'Als Vektor-SVG für Drucksachen oder PNG für Webseiten exportieren.' }
        ],
        useCases: [
          { title: 'Papiertüten & Tragetaschen', description: 'Aufdruck auf Einkaufstüten mit "Folge uns für Trends & Rabatte".', example: 'Modeboutique gewinnt 500 neue Follower pro Monat.' },
          { title: 'Kleidungsetiketten & Hangtags', description: 'An Textilien angebracht für exklusive Community-Aktionen.', example: 'Streetwear-Label baut aktive Fanbase auf.' },
          { title: 'Bühnenbanner auf Konzerten', description: 'Großflächig vor und nach Live-Auftritten eingeblendet.', example: 'Band sammelt tausende neue Spotify-Hörer.' },
          { title: 'Bierdeckel im Restaurant', description: 'Untersetzer fordern zum Posten von Food-Fotos auf.', example: 'Brunch-Café mit täglichen Nutzerbeiträgen.' }
        ],
        tips: [
          'Vollständige URLs: Immer mit https:// und korrektem Benutzernamen eintragen.',
          'Aufforderung zum Handeln: Text wie "Jetzt scannen & Teil der Community werden" ergänzen.',
          'Hoher Kontrast: Dunkle Muster auf hellem Hintergrund scannen am schnellsten.',
          'SVG für Verpackungen: Vektorformat garantiert gestochen scharfen Druck auf Kartonagen.',
          'Mobiltest: Vor dem Druck auf Safari und Chrome prüfen.'
        ],
        technicalNotes: 'ISO/IEC 18004 Standard für alle mobilen Standard-Kamera-Apps.',
        faqs: [
          { question: 'Wie funktioniert der Social Media QR-Code?', answer: 'Beim Scannen öffnet sich eine übersichtliche Mobilseite mit anklickbaren Buttons zu all Ihren hinterlegten Social-Media-Profilen.' },
          { question: 'Kann ich mehrere Accounts verknüpfen?', answer: 'Ja, Sie können alle Ihre Profile (Instagram, TikTok, YouTube, LinkedIn u.v.m.) in einem einzigen Code bündeln.' },
          { question: 'Welche Plattformen werden unterstützt?', answer: 'Unterstützt werden Instagram, TikTok, YouTube, Facebook, LinkedIn, X, Spotify, Twitch, Discord, Pinterest und eigene Weblinks.' },
          { question: 'Kann ich mein Profilbild oder Logo einfügen?', answer: 'Ja, laden Sie Ihr Bild hoch und die Fehlerkorrektur wird automatisch auf Stufe H (30%) erhöht.' },
          { question: 'Laufen diese QR-Codes ab?', answer: 'Nein, die statischen Codes sind zeitlich unbegrenzt gültig.' },
          { question: 'Ist die Erstellung kostenlos?', answer: 'Ja, das Erstellen und Herunterladen in SVG und PNG ist 100% kostenlos.' }
        ],
        relatedTools: [
          { name: 'Digitale Visitenkarte', slug: 'digital-business-card', description: 'Erstellen Sie ein vollständiges digitales Profil.' },
          { name: 'Weblink QR Generator', slug: 'url-to-qr-code', description: 'Besucher auf Ihre Website oder Ihren Onlineshop leiten.' },
          { name: 'Google Bewertungen QR', slug: 'google-reviews-qr-code', description: 'Mehr 5-Sterne-Bewertungen auf Google sammeln.' },
          { name: 'Instagram QR Code', slug: 'instagram-qr-code', description: 'Direkter QR-Code zum Instagram-Profil.' }
        ]
      };
    case 'fr':
      return {
        slug: 'social-media-qr-code',
        qrTypeId: 'social',
        title: 'Générateur de QR Code Réseaux Sociaux — Tous Vos Profils Réunis',
        description: 'Connectez tous vos profils sociaux (Instagram, TikTok, YouTube, LinkedIn) dans un seul QR code scannable. Téléchargement SVG et PNG.',
        h1: 'Générateur de QR Code Réseaux Sociaux',
        subheadline: 'Rassemblez tous vos réseaux sociaux en un point d\'accès unique. Permettez à vos abonnés de vous rejoindre sur leur plateforme préférée.',
        heading: 'QR Code Réseaux Sociaux',
        subheading: 'Centralisez tous vos canaux dans une page d\'atterrissage mobile élégante et intuitive.',
        overviewTitle: 'Qu\'est-ce qu\'un QR Code Réseaux Sociaux ?',
        overviewParagraphs: [
          'Un générateur de QR code réseaux sociaux regroupe tous vos profils (Instagram, TikTok, YouTube, LinkedIn, X, Facebook, Spotify) dans un code-barres 2D unique. En scannant le code, vos visiteurs accèdent à une page mobile claire avec des boutons directs vers chaque plateforme.',
          'Afficher plusieurs identifiants sur vos affiches ou emballages surcharge la mise en page. Un seul code multi-liens offre une porte d\'entrée soignée qui développe votre communauté.',
          'Personnalisez les couleurs, le style graphique et téléchargez en SVG vectoriel ou PNG haute résolution.'
        ],
        sectors: [
          { name: 'Créateurs & Influenceurs', description: 'Sur cartes de merchandising et décors de vidéos pour booster les abonnés.', benefit: 'Convertit les spectateurs en abonnés multi-plateformes.' },
          { name: 'Boutiques & Prêt-à-Porter', description: 'Sur sacs d\'achat et miroirs de cabine pour partager les nouveautés.', benefit: 'Transforme les clients physiques en communauté digitale.' },
          { name: 'Bars, Clubs & Restaurants', description: 'Sur sous-bocks pour inciter aux partages en story.', benefit: 'Développe la visibilité virale locale.' },
          { name: 'Musiciens & Podcasteurs', description: 'Sur affiches de concerts avec liens vers Spotify et YouTube.', benefit: 'Les spectateurs deviennent des auditeurs fidèles.' },
          { name: 'Coachs & Salles de Sport', description: 'Sur machines avec conseils d\'entraînement et tutoriels.', benefit: 'Fidélise grâce à du contenu régulier.' },
          { name: 'Artistes & Graphistes', description: 'En galerie d\'art avec lien direct vers le portfolio.', benefit: 'Offre une vue complète sur vos créations.' }
        ],
        howItWorks: [
          { title: '1. Ajoutez vos Profils', description: 'Indiquez les liens d\'Instagram, TikTok, YouTube, LinkedIn etc.' },
          { title: '2. Personnalisez l\'Apparence', description: 'Harmonisez les couleurs et insérez votre logo central.' },
          { title: '3. Téléchargez et Imprimez', description: 'Exportez en SVG vectoriel pour impression ou PNG pour écran.' }
        ],
        useCases: [
          { title: 'Sacs de Boutique', description: 'Imprimé sur les sacs avec la mention "Rejoignez notre communauté".', example: 'Boutique gagnant 500 abonnés par mois.' },
          { title: 'Étiquettes de Vêtements', description: 'Sur étiquettes volantes pour des concours exclusifs.', example: 'Marque de mode développant son audience.' },
          { title: 'Bannières de Concerts', description: 'Projeté avant et après les spectacles en direct.', example: 'Groupe multipliant ses écoutes en streaming.' },
          { title: 'Sous-verres en Terrasse', description: 'Invitant à taguer l\'établissement sur les photos.', example: 'Café générant des dizaines de mentions quotidiennes.' }
        ],
        tips: [
          'URLs Complètes : Indiquez l\'adresse complète avec https:// et votre identifiant exact.',
          'Appel à l\'Action : Ajoutez "Scannez pour nous suivre sur les réseaux".',
          'Contraste Net : Privilégiez des modules sombres sur fond clair.',
          'SVG pour l\'Emballage : Le SVG assure un rendu net sur papier kraft et carton.',
          'Testez sur Mobile : Vérifiez l\'ouverture fluide sur iOS et Android.'
        ],
        technicalNotes: 'Conforme à la norme ISO/IEC 18004 pour tous les smartphones récents.',
        faqs: [
          { question: 'Comment fonctionne le QR code réseaux sociaux ?', answer: 'Au scan, une page mobile optimisée s\'ouvre avec des boutons vers tous vos profils configurés.' },
          { question: 'Puis-je regrouper plusieurs comptes ?', answer: 'Oui, vous pouvez connecter tous vos réseaux sur un seul et même code QR.' },
          { question: 'Quels réseaux sont compatibles ?', answer: 'Instagram, TikTok, YouTube, Facebook, LinkedIn, X, Spotify, Twitch, Discord, Pinterest et liens personnalisés.' },
          { question: 'Puis-je ajouter ma photo ou mon logo ?', answer: 'Oui, importez votre image et la correction d\'erreur passera automatiquement au niveau H (30%).' },
          { question: 'Ces QR codes expirent-ils ?', answer: 'Non, les codes statiques sont permanents et valables à vie.' },
          { question: 'La création est-elle gratuite ?', answer: 'Oui, la génération et le téléchargement en SVG ou PNG sont 100% gratuits.' }
        ],
        relatedTools: [
          { name: 'Carte de Visite Digitale', slug: 'digital-business-card', description: 'Créez votre profil de contact complet.' },
          { name: 'QR Code Lien Web', slug: 'url-to-qr-code', description: 'Redirigez vers votre site web.' },
          { name: 'QR Code Avis Google', slug: 'google-reviews-qr-code', description: 'Collectez des avis 5 étoiles sur Google Maps.' },
          { name: 'QR Code Instagram', slug: 'instagram-qr-code', description: 'Lien direct vers votre compte Instagram.' }
        ]
      };
    case 'pt':
      return {
        slug: 'social-media-qr-code',
        qrTypeId: 'social',
        title: 'Gerador de QR Code Redes Sociais — Todos os Perfis em Um QR',
        description: 'Reúna todos os seus perfis sociais (Instagram, TikTok, YouTube, LinkedIn) em um único QR Code escaneável. Download em SVG e PNG.',
        h1: 'Gerador de QR Code Redes Sociais',
        subheadline: 'Unifique todos os seus perfis sociais em um só lugar. Permita que seguidores e clientes conectem na rede favorita com apenas 1 scan.',
        heading: 'QR Code de Redes Sociais',
        subheading: 'Centralize seus canais em uma página de links moderna e adaptada para celulares.',
        overviewTitle: 'O que é um QR Code de Redes Sociais?',
        overviewParagraphs: [
          'Um gerador de QR Code para redes sociais reúne todos os seus perfis (Instagram, TikTok, YouTube, LinkedIn, X, Facebook, Spotify) em um código 2D exclusivo. Ao escanear, o usuário acessa uma página com botões diretos para seguir você.',
          'Colocar múltiplos @ de redes sociais em panfletos ou sacolas polui o visual e confunde os clientes. Um único código centralizador organiza a comunicação e acelera o crescimento de seguidores.',
          'Personalize cores da marca, formato dos módulos e baixe em vetor SVG para gráficas ou PNG em alta definição.'
        ],
        sectors: [
          { name: 'Criadores & Influenciadores', description: 'Em produtos e fundos de vídeo para ganhar seguidores multicanal.', benefit: 'Converte público de uma rede em inscritos nas outras.' },
          { name: 'Lojas & Boutiques', description: 'Em sacolas e espelhos para divulgar lançamentos e promoções.', benefit: 'Transforma clientes de loja física em audiência online.' },
          { name: 'Bares & Restaurantes', description: 'Em porta-copos para incentivar marcações nos stories.', benefit: 'Gera alcance orgânico e viralidade local.' },
          { name: 'Músicos & Bandas', description: 'Em cartazes de shows com links para o Spotify e YouTube.', benefit: 'O público do show vira ouvinte diário.' },
          { name: 'Academias & Personal Trainers', description: 'Em aparelhos com treinos e dicas de saúde.', benefit: 'Engajamento diário dos alunos.' },
          { name: 'Artistas & Designers', description: 'Em exposições com link para o portfólio completo.', benefit: 'Conecta admiradores ao seu trabalho completo.' }
        ],
        howItWorks: [
          { title: '1. Adicione seus Links', description: 'Insira os perfis de Instagram, TikTok, YouTube, LinkedIn etc.' },
          { title: '2. Personalize o Visual', description: 'Escolha cores e adicione sua foto de perfil ou logotipo.' },
          { title: '3. Baixe e Divulgue', description: 'Exporte em SVG vetorial para impressão ou PNG para telas.' }
        ],
        useCases: [
          { title: 'Sacolas de Compras', description: 'Impresso com a chamada "Siga nossas redes e fique por dentro".', example: 'Boutique conquistando 500 seguidores por mês.' },
          { title: 'Tags de Roupas', description: 'Em etiquetas com acesso a conteúdos exclusivos da marca.', example: 'Marca de roupas criando comunidade fiel.' },
          { title: 'Banners de Palco em Shows', description: 'Projetado antes e depois de apresentações ao vivo.', example: 'Banda aumentando reproduções no Spotify.' },
          { title: 'Porta-Copos em Mesas', description: 'Convidando os clientes a postar fotos e marcar o local.', example: 'Bar com dezenas de stories marcados todo fim de semana.' }
        ],
        tips: [
          'Links Completos: Certifique-se de digitar o link com https:// e o nome de usuário correto.',
          'Chamada para Ação: Inclua frases como "Aponte a câmera para nos seguir nas redes".',
          'Alto Contraste: Fundo branco garante leitura rápida pela câmera.',
          'SVG para Embalagens: O formato vetorial garante impressão perfeita em sacolas e caixas.',
          'Teste no Celular: Verifique se todos os botões abrem certinho.'
        ],
        technicalNotes: 'Padrão ISO/IEC 18004 compatível com todas as câmeras de smartphone.',
        faqs: [
          { question: 'Como funciona o QR Code de redes sociais?', answer: 'Ao escanear, o celular abre uma página leve com botões para todos os seus perfis configurados.' },
          { question: 'Posso colocar várias redes no mesmo código?', answer: 'Sim, a proposta principal é justamente unir todos os seus canais em um único link.' },
          { question: 'Quais plataformas são aceitas?', answer: 'Instagram, TikTok, YouTube, Facebook, LinkedIn, X, Spotify, Twitch, Discord, Pinterest e links personalizados.' },
          { question: 'Posso colocar minha foto ou logo?', answer: 'Sim, envie sua imagem e o sistema ajustará a correção de erros para Alto (30%).' },
          { question: 'Os códigos expiram?', answer: 'Não, os códigos estáticos continuam funcionando permanentemente.' },
          { question: 'A geração do código é gratuita?', answer: 'Sim, a criação e download em SVG e PNG são 100% grátis.' }
        ],
        relatedTools: [
          { name: 'Cartão de Visita Digital', slug: 'digital-business-card', description: 'Crie seu perfil profissional completo.' },
          { name: 'QR Code Link URL', slug: 'url-to-qr-code', description: 'Direcione para seu site ou loja online.' },
          { name: 'QR Code Avaliações Google', slug: 'google-reviews-qr-code', description: 'Ganhe avaliações 5 estrelas no Google.' },
          { name: 'QR Code Instagram', slug: 'instagram-qr-code', description: 'Link direto para seu Instagram.' }
        ]
      };
    case 'it':
      return {
        slug: 'social-media-qr-code',
        qrTypeId: 'social',
        title: 'Generatore QR Code Social Media — Tutti i Profili in un Solo QR',
        description: 'Collega tutti i tuoi profili social (Instagram, TikTok, YouTube, LinkedIn) in un unico codice QR scansionabile. Download SVG e PNG.',
        h1: 'Generatore QR Code Social Media',
        subheadline: 'Raggruppa tutti i tuoi canali social in un unico punto di accesso. Permetti ai follower di seguirti sulla loro piattaforma preferita.',
        heading: 'QR Code per Social Media',
        subheading: 'Unisci tutti i tuoi canali in un\'elegante pagina di atterraggio mobile e intuitiva.',
        overviewTitle: 'Cos\'è un Generatore di QR Code per Social Media?',
        overviewParagraphs: [
          'Un generatore di codici QR per social media raccoglie tutti i tuoi profili (Instagram, TikTok, YouTube, LinkedIn, X, Facebook, Spotify) in un unico codice a barre 2D. Inquadrando il codice, i visitatori aprono una schermata con pulsanti diretti a ciascun profilo.',
          'Indicare troppi nomi utente su volantini o packaging confonde il pubblico. Un solo codice multi-link crea ordine e moltiplica la crescita dei tuoi canali.',
          'Personalizza i colori aziendali, inserisci il tuo logo e scarica in SVG vettoriale per la stampa o PNG per il web.'
        ],
        sectors: [
          { name: 'Creator & Influencer', description: 'Su merchandising e sfondi video per aumentare i follower su tutte le piattaforme.', benefit: 'Trasforma gli spettatori in una community fidelizzata.' },
          { name: 'Boutique & Negozi di Moda', description: 'Su shopper e specchi dei camerini per mostrare le nuove collezioni.', benefit: 'Trasforma gli acquirenti in follower digitali.' },
          { name: 'Bar, Locali & Ristoranti', description: 'Su sottobicchieri per incentivare tag nelle storie di Instagram.', benefit: 'Aumenta la visibilità virale locale.' },
          { name: 'Musicisti & Podcaster', description: 'Su locandine di concerti con link diretti a Spotify e YouTube.', benefit: 'Il pubblico dei concerti diventa ascoltatore quotidiano.' },
          { name: 'Palestre & Personal Trainer', description: 'Sui macchinari con schede di allenamento e consigli video.', benefit: 'Fidelizza gli iscritti con contenuti costanti.' },
          { name: 'Artisti & Designer', description: 'In mostre ed eventi con link al portfolio completo.', benefit: 'Permette ai visitatori di scoprire tutte le opere.' }
        ],
        howItWorks: [
          { title: '1. Inserisci i Profili Social', description: 'Aggiungi i link a Instagram, TikTok, YouTube, LinkedIn ecc.' },
          { title: '2. Personalizza lo Stile', description: 'Scegli i colori e carica la tua foto profilo o il logo aziendale.' },
          { title: '3. Scarica e Condividi', description: 'Esporta in formato vettoriale SVG per la stampa o PNG per il web.' }
        ],
        useCases: [
          { title: 'Shopper e Sacchetti di Carta', description: 'Stampato sulle borse con l\'invito "Seguici per sconti e novità".', example: 'Boutique che ottiene 500 follower al mese.' },
          { title: 'Cartellini di Capi di Abbigliamento', description: 'Sui cartellini per accedere a lookbook e sfilate.', example: 'Marchio di moda con community attiva.' },
          { title: 'Banner per Concerti dal Vivo', description: 'Proiettato prima e dopo i live per farsi seguire sui social.', example: 'Band che moltiplica gli ascolti in streaming.' },
          { title: 'Sottobicchieri nei Locali', description: 'Invitano a pubblicare foto dei drink e taggare la pagina.', example: 'Cocktail bar con decine di menzioni settimanali.' }
        ],
        tips: [
          'URL Completi: Inserisci sempre https:// e il nome utente esatto.',
          'Invito Chiaro: Aggiungi "Inquadra per seguirci su tutti i social".',
          'Contrasto Elevato: Moduli scuri su sfondo bianco per una lettura rapida.',
          'SVG per Packaging: Il formato vettoriale garantisce nitidezza assoluta su carta e cartone.',
          'Test da Smartphone: Controlla che i link si aprano correttamente su iPhone e Android.'
        ],
        technicalNotes: 'Standard ISO/IEC 18004 pienamente supportato da tutte le fotocamere per smartphone.',
        faqs: [
          { question: 'Come funziona il codice QR per i social media?', answer: 'Inquadrando il codice con la fotocamera, si apre una pagina mobile con i pulsanti per tutti i tuoi profili social.' },
          { question: 'Posso collegare più piattaforme?', answer: 'Sì, puoi raggruppare tutti i tuoi canali (Instagram, TikTok, YouTube, LinkedIn ecc.) in un solo codice.' },
          { question: 'Quali piattaforme sono supportate?', answer: 'Instagram, TikTok, YouTube, Facebook, LinkedIn, X, Spotify, Twitch, Discord, Pinterest e link personalizzati.' },
          { question: 'Posso inserire il mio logo o la mia foto?', answer: 'Sì, carica la tua immagine e la correzione errori verrà impostata automaticamente su Alto (30%).' },
          { question: 'Questi codici QR scadono?', answer: 'No, i codici statici restano validi per sempre senza alcun canone.' },
          { question: 'La creazione è gratuita?', answer: 'Sì, la creazione e il download in formato vettoriale SVG o PNG sono al 100% gratuiti.' }
        ],
        relatedTools: [
          { name: 'Biglietto da Visita Digitale', slug: 'digital-business-card', description: 'Crea il tuo profilo di contatto completo.' },
          { name: 'QR Code Link Web', slug: 'url-to-qr-code', description: 'Indirizza al tuo sito web o shop.' },
          { name: 'QR Code Recensioni Google', slug: 'google-reviews-qr-code', description: 'Raccogli recensioni a 5 stelle su Google Maps.' },
          { name: 'QR Code Instagram', slug: 'instagram-qr-code', description: 'Link diretto al tuo profilo Instagram.' }
        ]
      };
    case 'hi':
      return {
        slug: 'social-media-qr-code',
        qrTypeId: 'social',
        title: 'सोशल मीडिया QR कोड जेनरेटर — सभी प्रोफ़ाइल एक ही QR कोड में',
        description: 'Instagram, TikTok, YouTube, LinkedIn आदि सभी सोशल मीडिया अकाउंट्स को एक ही QR कोड में जोड़ें। मुफ़्त डाउनलोड।',
        h1: 'सोशल मीडिया QR कोड जेनरेटर',
        subheadline: 'अपने सभी सोशल प्रोफाइल्स को एक जगह लाएं। फॉलोअर्स को एक स्कैन में अपनी पसंदीदा ऐप पर जुड़ने की सुविधा दें।',
        heading: 'सोशल मीडिया QR कोड',
        subheading: 'अपने सभी सोशल प्रोफाइल्स को एक सुंदर मोबाइल लैंडिंग पेज से जोड़ें।',
        overviewTitle: 'सोशल मीडिया QR कोड क्या है?',
        overviewParagraphs: [
          'सोशल मीडिया QR कोड आपके सभी ऑनलाइन प्लेटफॉर्म्स (Instagram, YouTube, Facebook, LinkedIn, X, Spotify आदि) को एक ही 2D बारकोड में समेट देता है। जब कोई इसे स्कैन करता है, तो एक मोबाइल-फ्रेंडली पेज खुलता है जहाँ आपके सभी हैंडल्स के बटन दिखते हैं।',
          'दुकान के पैम्फलेट या प्रोडक्ट बॉक्स पर अलग-अलग 5-6 यूजरनेम लिखने से डिज़ाइन अव्यवस्थित लगता है। एक अकेला QR कोड सभी प्लेटफॉर्म्स पर फॉलोअर्स बढ़ाने का सबसे साफ़ और आसान तरीका है।',
          'रंग कस्टमाइज़ करें, अपना लोगो जोड़ें और हाई-क्वालिटी SVG या PNG डाउनलोड करें।'
        ],
        sectors: [
          { name: 'कंटेंट क्रिएटर्स व इन्फ्लुएंसर्स', description: 'मर्चेंडाइज और वीडियो बैकग्राउंड पर मल्टी-प्लेटफॉर्म ग्रोथ के लिए।', benefit: 'दर्शकों को सभी सोशल नेटवर्क्स पर जोड़ता है।' },
          { name: 'फैशन स्टोर्स व बुटीक', description: 'शॉपिंग बैग और ड्रेसिंग रूम के शीशों पर नए कलेक्शन दिखाने हेतु।', benefit: 'दुकान के ग्राहकों को डिजिटल फॉलोअर्स में बदलता है।' },
          { name: 'रेस्टोरेंट, कैफ़े व क्लब्स', description: 'टेबल कोस्टर पर फूड स्टोरी पोस्ट कराने के लिए।', benefit: 'लोकल इलाके में ऑर्गेनिक सोशल रीच बढ़ाता है।' },
          { name: 'म्यूजिशियंस व पॉडकास्टर्स', description: 'कॉन्सर्ट पोस्टर्स पर Spotify और YouTube लिंक के साथ।', benefit: 'कॉन्सर्ट के दर्शकों को नियमित श्रोता बनाता है।' },
          { name: 'जिम व फिटनेस ट्रेनर्स', description: 'वर्कआउट मशीनों पर ट्रेनिंग वीडियो और डाइट टिप्स के साथ।', benefit: 'ग्राहकों को रोज़ाना प्रेरित रखता है।' },
          { name: 'आर्टिस्ट्स व फोटोग्राफर्स', description: 'गैलरी में संपूर्ण ऑनलाइन पोर्टफोलियो दिखाने हेतु।', benefit: 'कला प्रेमियों को आपके पूरे काम से जोड़ता है।' }
        ],
        howItWorks: [
          { title: '1. अपने सोशल लिंक्स जोड़ें', description: 'Instagram, YouTube, Facebook, LinkedIn आदि के प्रोफाइल लिंक पेस्ट करें।' },
          { title: '2. डिज़ाइन कस्टमाइज़ करें', description: 'रंग चुनें और अपनी फोटो या लोगो लगाएं।' },
          { title: '3. डाउनलोड व प्रिंट करें', description: 'पैकेजिंग या बैनर के लिए SVG या PNG फ़ाइल डाउनलोड करें।' }
        ],
        useCases: [
          { title: 'शॉपिंग बैग्स व कैरी बैग्स', description: '"हमें सोशल मीडिया पर फॉलो करें" लिखा हुआ प्रिंट।', example: 'बुटीक द्वारा हर महीने 500 नए फॉलोअर्स।' },
          { title: 'कपड़ों के हैंग-टैग्स', description: 'गारमेंट्स पर ब्रांड कम्युनिटी से जुड़ने का कोड।', example: 'फैशन ब्रांड कम्युनिटी ग्रोथ।' },
          { title: 'लाइव शो स्टेज बैनर', description: 'शो से पहले और बाद में स्क्रीन पर दिखाया जाने वाला कोड।', example: 'म्यूजिक बैंड स्ट्रीमिंग बढ़ाने हेतु।' },
          { title: 'रेस्टोरेंट टेबल कोस्टर', description: 'खाने की फोटो शेयर करने के लिए प्रेरित करने वाला कार्ड।', example: 'कैफ़े सोशल मीडिया एंगेजमेंट।' }
        ],
        tips: [
          'पूरा URL दर्ज करें: हमेशा https:// के साथ सही यूजरनेम लिखें।',
          'कॉल-टू-एक्शन लिखें: स्टैंड पर "हमारे सोशल मीडिया से जुड़ने के लिए स्कैन करें" लिखें।',
          'हाई कंट्रास्ट: सफ़ेद बैकग्राउंड पर गहरे रंग के डॉट्स रखें।',
          'पैकेजिंग के लिए SVG: बैग और बॉक्स पर प्रिंट के लिए हमेशा SVG का उपयोग करें।',
          'मोबाइल से जांच: प्रिंट से पहले सभी बटनों को दबाकर चेक करें।'
        ],
        technicalNotes: 'ISO/IEC 18004 अंतरराष्ट्रीय मानक सभी मोबाइल कैमरों पर समर्थित।',
        faqs: [
          { question: 'सोशल मीडिया QR कोड कैसे काम करता है?', answer: 'स्कैन करते ही एक मोबाइल पेज खुलता है जिसमें आपके सभी सोशल मीडिया अकाउंट्स के बटन होते हैं।' },
          { question: 'क्या मैं कई प्लेटफॉर्म्स एक साथ जोड़ सकता हूँ?', answer: 'हाँ, आप Instagram, YouTube, Facebook, LinkedIn, Spotify आदि सभी को एक ही कोड में जोड़ सकते हैं।' },
          { question: 'कौन से प्लेटफॉर्म्स समर्थित हैं?', answer: 'Instagram, YouTube, TikTok, Facebook, LinkedIn, X (Twitter), Spotify, Twitch, Discord और पर्सनल वेबसाइट लिंक्स।' },
          { question: 'क्या मैं अपनी फोटो या लोगो लगा सकता हूँ?', answer: 'हाँ, फोटो अपलोड करने पर सिस्टम एरर करेक्शन को हाई (H) पर सेट कर देगा।' },
          { question: 'क्या यह QR कोड कभी एक्सपायर होता है?', answer: 'नहीं, यह कोड स्थायी है और बिना किसी रुकावट के हमेशा काम करता रहेगा।' },
          { question: 'क्या यह मुफ़्त है?', answer: 'हाँ, इसे बनाना और SVG/PNG में डाउनलोड करना 100% मुफ़्त है।' }
        ],
        relatedTools: [
          { name: 'डिजिटल बिजनेस कार्ड', slug: 'digital-business-card', description: 'संपूर्ण संपर्क प्रोफाइल पेज बनाएं।' },
          { name: 'वेबसाइट URL QR जेनरेटर', slug: 'url-to-qr-code', description: 'ग्राहकों को अपनी वेबसाइट पर भेजें।' },
          { name: 'गूगल रिव्यू QR कोड', slug: 'google-reviews-qr-code', description: 'Google Maps पर 5-स्टार रेटिंग पाएं।' },
          { name: 'Instagram QR कोड', slug: 'instagram-qr-code', description: 'सीधे Instagram प्रोफाइल का QR कोड।' }
        ]
      };
    default: // 'en'
      return {
        slug: 'social-media-qr-code',
        qrTypeId: 'social',
        title: 'Social Media QR Code Generator — All-in-One Social Profile QR',
        description: 'Connect all your social profiles (Instagram, TikTok, YouTube, LinkedIn) in one scannable QR code. Free vector SVG & PNG download with custom logo.',
        h1: 'Social Media QR Code Generator',
        subheadline: 'Link all your social profiles in one scannable hub. Let fans, customers, and followers connect on their favorite platform in a single scan.',
        heading: 'Social Media QR Code',
        subheading: 'Unify your social channels into one elegant, mobile-friendly landing hub.',
        overviewTitle: 'What is a Social Media QR Code Generator?',
        overviewParagraphs: [
          'A Social Media QR code generator connects all your social profiles—including Instagram, TikTok, YouTube, LinkedIn, X (Twitter), Facebook, Spotify, and Twitch—into a single scannable 2D barcode. When scanned with a smartphone camera, users open a mobile-optimized landing page containing clickable links to all your channels, allowing them to follow you on their preferred platform in seconds.',
          'Promoting multiple social media handles across physical print collateral (such as retail packaging, business cards, stickers, trade show booths, and posters) quickly clutters design layouts and confuses audiences. A single consolidated Social Media QR code provides an organized, multi-link gateway that eliminates visual clutter while maximizing cross-platform audience growth.',
          'Our generator allows you to customize foreground colors, select custom dot patterns, embed your brand logo, and download print-ready vector SVG files for physical signage or high-DPI PNGs for digital graphics.'
        ],
        sectors: [
          { name: 'Content Creators & Influencers', description: 'Printed on merchandise hangtags and displayed in video studio backdrops to grow multi-platform followers.', benefit: 'Converts viewers from one channel into omni-channel subscribers.' },
          { name: 'Boutiques & Fashion Retailers', description: 'Printed on shopping bags and dressing room mirrors to showcase new seasonal collections.', benefit: 'Turns in-store shoppers into an active online community.' },
          { name: 'Restaurants, Bars & Nightclubs', description: 'Displayed on tabletop drink coasters encouraging patrons to tag the venue in food stories.', benefit: 'Drives viral organic local reach on Instagram and TikTok.' },
          { name: 'Musicians, Bands & Podcasters', description: 'Printed on concert flyers and album sleeves linking directly to Spotify and YouTube.', benefit: 'Transforms live show attendees into daily streaming listeners.' },
          { name: 'Gyms & Fitness Trainers', description: 'Mounted on workout machines with exercise tutorial videos and daily motivation.', benefit: 'Builds customer retention through daily digital content.' },
          { name: 'Artists & Visual Designers', description: 'Displayed on gallery exhibition placards linking directly to comprehensive Behance portfolios.', benefit: 'Connects art enthusiasts with your complete body of work.' }
        ],
        howItWorks: [
          { title: '1. Add Social Profiles', description: 'Input your profile URLs for Instagram, YouTube, TikTok, LinkedIn, and more.' },
          { title: '2. Customize Visual Styling', description: 'Match corporate colors and embed your central avatar or brand logo.' },
          { title: '3. Download & Print', description: 'Export print-ready Vector SVG for physical packaging or high-definition PNG.' }
        ],
        useCases: [
          { title: 'Retail Shopping Bags', description: 'Printed on paper retail bags with "Follow us for exclusive drops & discounts".', example: 'Boutique gaining 500 monthly social followers.' },
          { title: 'Apparel Hangtags & Merch', description: 'Attached to clothing tags inviting buyers to join the brand Discord.', example: 'Streetwear brand building a loyal fan community.' },
          { title: 'Concert Stage Backdrops', description: 'Projected on stage screens before and after live music performances.', example: 'Indie band multiplying Spotify stream listeners.' },
          { title: 'Dining Coasters on Patios', description: 'Encouraging diners to post food photos and tag the restaurant.', example: 'Brunch cafe generating dozens of daily user stories.' }
        ],
        tips: [
          'Full URLs Required: Ensure social links include the full https:// prefix and your exact username handle.',
          'Clear Call-to-Action: Pair with clear copy like "Scan with your phone camera to follow our community".',
          'High Optical Contrast: Dark module patterns on a clean white background guarantee the fastest optical scanning.',
          'Vector SVG for Packaging: Use Vector SVG to ensure crisp lines on cardboard boxes and kraft paper bags.',
          'Multi-Device Mobile Test: Test the landing hub across both iOS Safari and Android Chrome.'
        ],
        technicalNotes: 'Standards Compliance: Full ISO/IEC 18004 compliance supporting all modern smartphone camera apps.',
        faqs: [
          { question: 'How does a Social Media QR code work when scanned?', answer: 'When scanned with any smartphone camera, a mobile-optimized landing page opens displaying direct clickable buttons to all your configured social media profiles.' },
          { question: 'Can I link multiple social platforms to a single QR code?', answer: 'Yes! The core purpose is unifying all your social channels (Instagram, TikTok, YouTube, LinkedIn, Spotify, etc.) into one central scannable hub.' },
          { question: 'Which platforms are supported?', answer: 'Supports Instagram, TikTok, YouTube, Facebook, LinkedIn, X (Twitter), Spotify, Twitch, Discord, Pinterest, and custom website links.' },
          { question: 'Can I add my profile picture or brand logo to the center?', answer: 'Yes. Upload your logo or portrait avatar, and our generator automatically boosts error correction to Level H (30%) for flawless scanning.' },
          { question: 'Do Social Media QR codes ever expire?', answer: 'No. Static codes never expire and remain active permanently with zero subscription fees.' },
          { question: 'Is it free to generate and download?', answer: 'Yes! Creating and downloading Social Media QR codes in Vector SVG and PNG format is 100% free with unlimited scans.' }
        ],
        relatedTools: [
          { name: 'Digital Business Card', slug: 'digital-business-card', description: 'Create a complete professional contact profile.' },
          { name: 'URL QR Generator', slug: 'url-to-qr-code', description: 'Direct visitors to your website or online store.' },
          { name: 'Google Reviews QR', slug: 'google-reviews-qr-code', description: 'Collect 5-star customer ratings on Google Maps.' },
          { name: 'Instagram QR Code', slug: 'instagram-qr-code', description: 'Create a direct QR code to your Instagram profile.' }
        ]
      };
  }
}
