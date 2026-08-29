import type { Locale } from '../config';
import type { LocalizedPageContent } from './types';

export function getHomeContent(locale: Locale): LocalizedPageContent {
  switch (locale) {
    case 'es':
      return {
        slug: '',
        qrTypeId: 'url',
        title: 'Generador de Códigos QR Gratis con Logo — Vector SVG y PNG',
        description: 'Crea códigos QR personalizados gratis con colores, marcos y logotipo. Enlaces web, WiFi, vCard, WhatsApp y menús. Descarga en vector SVG y PNG.',
        h1: 'Generador de Códigos QR Gratis con Logo',
        subheadline: 'Genera códigos QR de alta resolución, vectoriales y personalizados al instante. 100% gratis, privado y ejecutado en tu navegador.',
        heading: 'Generador de Códigos QR Profesional',
        subheading: 'Crea códigos QR personalizados para marketing, empresas, hostelería y uso personal.',
        overviewTitle: '¿Por qué elegir nuestro Generador de Códigos QR?',
        overviewParagraphs: [
          'Nuestro generador de códigos QR profesional te permite crear códigos de barras bidimensionales estáticos y dinámicos para cualquier tipo de necesidad: enlaces web, redes WiFi sin contraseña, tarjetas de contacto vCard, chats de WhatsApp, cobros UPI, menús de restaurante, descargas de aplicaciones y calendarios de eventos.',
          'A diferencia de otros servicios que caducan tus códigos o añaden publicidad no deseada, nuestra herramienta genera códigos estáticos permanentes que nunca caducan y funcionan de forma completamente local en tu navegador con privacidad total.',
          'Personaliza cada detalle: paleta de colores corporativos, degradados, formas de puntos redondeados, marcos de esquinas y subida de tu propio logotipo con corrección de errores de nivel Alto (H) y exportación en gráficos vectoriales SVG listos para imprenta.'
        ],
        sectors: [
          { name: 'Empresas y Marketing', description: 'En folletos, catálogos y vallas para conectar campañas offline con ventas online.', benefit: 'Multiplica la conversión de tus campañas impresas.' },
          { name: 'Hostelería y Restauración', description: 'Menús digitales en mesas, cartas de vinos y conexión WiFi sin contacto.', benefit: 'Ahorro total en costes de impresión en papel.' },
          { name: 'Comercio y Embalajes', description: 'En cajas de productos para manuales interactivos y registro de garantías.', benefit: 'Convierte compradores físicos en clientes recurrentes.' },
          { name: 'Inmobiliarias y Construcción', description: 'En carteles de venta enlazando a visitas virtuales 3D.', benefit: 'Capta compradores directamente a pie de calle.' },
          { name: 'Salud y Clínicas', description: 'Acceso a historiales, citas online y WiFi en salas de espera.', benefit: 'Atención al paciente moderna y sin esperas.' },
          { name: 'Eventos y Congresos', description: 'Acreditaciones, agendas interactivas y networking instantáneo.', benefit: 'Conexión rápida para cientos de asistentes.' }
        ],
        howItWorks: [
          { title: '1. Selecciona el Tipo de Contenido', description: 'Elige entre enlace web, WiFi, tarjeta vCard, WhatsApp, menú o evento.' },
          { title: '2. Personaliza Colores y Logotipo', description: 'Ajusta tu paleta corporativa, formas de módulos y sube tu logo central.' },
          { title: '3. Descarga en Alta Resolución', description: 'Exporta en SVG vectorial para imprenta o PNG nítido para pantallas.' }
        ],
        useCases: [
          { title: 'Publicidad Impresa y Folletos', description: 'Folletos y revistas con cupones de descuento aplicados al instante.', example: 'Campaña buzoneo con 25% más de interacción.' },
          { title: 'Expositores de Mesa en Locales', description: 'Soportes de metacrilato en mostradores y mesas de restaurante.', example: 'Restaurante con cartas digitales en 30 mesas.' },
          { title: 'Packaging y Cajas de Envío', description: 'Impreso en envases para tutoriales y soporte de producto.', example: 'Marca e-commerce fidelizando compradores.' },
          { title: 'Tarjetas de Visita Ejecutivas', description: 'Tarjetas de visita de alta calidad con datos vCard en el reverso.', example: 'Directivo compartiendo contacto en congresos.' }
        ],
        tips: [
          'Alto Contraste: Utiliza módulos oscuros sobre fondo claro para asegurar lectura instantánea con cualquier cámara.',
          'Zona de Seguridad (Margen): Mantén un margen blanco de al menos 10 px alrededor del código QR.',
          'Formato SVG para Imprenta: Utiliza siempre formato vectorial SVG para impresiones físicas de cualquier tamaño.',
          'Corrección de Errores: Al añadir logotipos en el centro, el sistema ajusta la corrección a nivel Alto (30%).',
          'Comprobación Previa: Escanea el código impreso de prueba con varios teléfonos antes de la tirada final.'
        ],
        technicalNotes: 'Estándar ISO/IEC 18004 compatible con todas las cámaras de smartphones iOS, Android y Windows.',
        faqs: [
          { question: '¿Son realmente gratuitos y permanentes estos códigos QR?', answer: 'Sí, los códigos QR estáticos generados son 100% gratuitos, no tienen límite de escaneos y nunca caducan.' },
          { question: '¿Puedo colocar el logotipo de mi empresa en el centro?', answer: 'Sí, sube tu imagen en formato PNG, JPG o SVG y el sistema aplicará automáticamente corrección de errores nivel H (30%).' },
          { question: '¿Cuál es la diferencia entre un código QR estático y uno dinámico?', answer: 'Un código estático codifica la información directamente en el dibujo y nunca cambia; un código dinámico utiliza un enlace corto editable que permite cambiar el destino y medir estadísticas de escaneo.' },
          { question: '¿Qué formato de archivo debo descargar para imprimir?', answer: 'Para imprenta profesional, packaging o cartelería utiliza el formato vectorial SVG. Para páginas web y redes sociales, el formato PNG es el ideal.' },
          { question: '¿Se guardan mis datos privados en vuestros servidores?', answer: 'No, el generador estático funciona 100% en la memoria de tu navegador sin almacenar tus contraseñas ni textos en servidores externos.' },
          { question: '¿Qué tamaño físico mínimo se recomienda al imprimir?', answer: 'Para lectura en mano (tarjetas o folletos) se recomienda al menos 20 x 20 mm. Para carteles a mayor distancia, mantén una proporción de 10:1 (10 cm de tamaño por cada metro de distancia).' }
        ],
        relatedTools: [
          { name: 'Calculadora de Tamaño QR', slug: 'qr-code-size-calculator', description: 'Calcula dimensiones según distancia de escaneo.' },
          { name: 'Calculadora de Impresión y DPI', slug: 'qr-code-print-size-calculator', description: 'Píxeles a 300 DPI y preparación para imprenta.' },
          { name: 'QR de WiFi', slug: 'wifi-qr-code-generator', description: 'Conéctate a redes WiFi sin teclear contraseñas.' },
          { name: 'QR de Contacto vCard', slug: 'vcard-qr-code-generator', description: 'Guarda contactos en la agenda en un solo toque.' },
          { name: 'QR de Reseñas de Google', slug: 'google-reviews-qr-code', description: 'Consigue más valoraciones de 5 estrellas en Google.' },
          { name: 'QR de WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Inicia chats de negocios directamente en WhatsApp.' }
        ]
      };
    case 'de':
      return {
        slug: '',
        qrTypeId: 'url',
        title: 'Kostenloser QR Code Generator mit Logo — Vektor SVG & PNG Download',
        description: 'Erstellen Sie individuelle QR-Codes mit eigenem Logo, Farben und Rahmen. Für Webseiten, WLAN, vCard, WhatsApp und Speisekarten. Vektor-SVG & PNG.',
        h1: 'Kostenloser QR Code Generator mit Logo',
        subheadline: 'Erstellen Sie hochauflösende, skalierbare und individuell gestaltete QR-Codes. 100% kostenlos, privat und lokal im Browser generiert.',
        heading: 'Professioneller QR Code Generator',
        subheading: 'Gestalten Sie individuelle QR-Codes für Marketing, Unternehmen, Gastronomie und den persönlichen Gebrauch.',
        overviewTitle: 'Warum unseren QR Code Generator wählen?',
        overviewParagraphs: [
          'Unser professioneller QR Code Generator ermöglicht die Erstellung statischer und dynamischer 2D-Barcodes für jeden Einsatzzweck: Webseiten-Links, passwortloses Gäste-WLAN, vCard-Visitenkarten, WhatsApp-Chats, UPI-Zahlungen, Restaurant-Speisekarten, App-Store-Downloads und Event-Kalender.',
          'Im Gegensatz zu vielen anderen Anbietern verfallen unsere statischen QR-Codes niemals, enthalten keine störende Werbung und werden zu 100% lokal im Browser mit vollständiger Datensicherheit berechnet.',
          'Passen Sie jedes Detail an: Firmenfarben, Farbverläufe, abgerundete Punktmuster, Eck-Augen-Stile und das eigene Firmenlogo mit höchster Fehlerkorrektur (Stufe H) sowie druckfertigem Vektor-SVG-Export.'
        ],
        sectors: [
          { name: 'Unternehmen & Marketing', description: 'Auf Broschüren und Plakaten zur Verknüpfung von Print- und Online-Vertrieb.', benefit: 'Steigert die Conversion-Rate klassischer Printwerbung.' },
          { name: 'Gastronomie & Hotellerie', description: 'Digitale Speisekarten am Tisch und passwortloses Gäste-WLAN.', benefit: 'Spart Druckkosten für Papierspeisekarten.' },
          { name: 'Einzelhandel & Verpackung', description: 'Auf Produktkartons für Videoanleitungen und Garantie-Registrierung.', benefit: 'Macht Offline-Käufer zu treuen Online-Kunden.' },
          { name: 'Immobilien & Makler', description: 'Auf Verkaufsschildern mit Link zu virtuellen 3D-Rundgängen.', benefit: 'Erreicht Interessenten direkt vor dem Objekt.' },
          { name: 'Gesundheit & Praxen', description: 'Online-Terminbuchung und Patienten-WLAN im Wartezimmer.', benefit: 'Moderne, kontaktlose Patientenbetreuung.' },
          { name: 'Events & Kongresse', description: 'Teilnehmerausweise, digitale Agenden und schnelles B2B-Networking.', benefit: 'Schneller Austausch für Hunderte Teilnehmer.' }
        ],
        howItWorks: [
          { title: '1. QR-Typ Auswählen', description: 'Wählen Sie zwischen Weblink, WLAN, vCard, WhatsApp, Speisekarte oder Event.' },
          { title: '2. Design & Logo Anpassen', description: 'Passen Sie Farben an und laden Sie Ihr Firmenlogo im Zentrum hoch.' },
          { title: '3. Hochauflösend Herunterladen', description: 'Als Vektor-SVG für Druckereien oder PNG für Bildschirme exportieren.' }
        ],
        useCases: [
          { title: 'Printwerbung & Flyer', description: 'Flyer und Beileger mit automatisch eingelösten Rabattcodes.', example: 'Postwurfsendung mit messbar höherer Resonanz.' },
          { title: 'Tischaufsteller im Lokal', description: 'Acrylaufsteller für Speisekarten und Gäste-WLAN.', example: 'Restaurant mit kontaktlosen Menüs auf 30 Tischen.' },
          { title: 'Produktverpackungen', description: 'Aufgedruckt für Video-Tutorials und Kundenservice.', example: 'E-Commerce-Marke steigert Kundenzufriedenheit.' },
          { title: 'Exklusive Visitenkarten', description: 'Hochwertige Visitenkarten mit vCard-Code auf der Rückseite.', example: 'Geschäftsführer vernetzt sich auf B2B-Messen.' }
        ],
        tips: [
          'Hoher Kontrast: Immer dunkle Punkte auf weißem oder sehr hellem Grund wählen.',
          'Ruhezone beachten: Mindestens 10 px Freiraum um den Code lassen.',
          'Vektor-SVG für Drucksachen: Garantiert randscharfe Kanten bei jeder Druckgröße.',
          'Fehlerkorrektur bei Logos: Das Tool wählt automatisch Stufe H (30%) bei Logoeinbettung.',
          'Vorab Scantest: Vor größeren Druckauflagen immer mit mehreren Handys testen.'
        ],
        technicalNotes: 'Standard ISO/IEC 18004 kompatibel mit iOS, Android und Windows Kameras.',
        faqs: [
          { question: 'Sind die erstellten QR-Codes wirklich kostenlos und dauerhaft gültig?', answer: 'Ja, alle statischen QR-Codes sind zu 100% kostenlos, unbegrenzt oft scannbar und verfallen niemals.' },
          { question: 'Kann ich mein eigenes Firmenlogo im Zentrum einfügen?', answer: 'Ja, laden Sie Ihr Logo in PNG, JPG oder SVG hoch. Die Fehlerkorrektur wird automatisch auf Stufe H (30%) erhöht.' },
          { question: 'Was ist der Unterschied zwischen statischen und dynamischen QR-Codes?', answer: 'Statische Codes speichern Daten direkt im Muster und sind unveränderlich. Dynamische Codes nutzen Kurzlinks, die nachträglich geändert werden können und Scan-Statistiken erfassen.' },
          { question: 'Welches Dateiformat eignet sich am besten für den Druck?', answer: 'Für den professionellen Druck auf Flyern, Verpackungen oder Plakaten ist Vektor-SVG die beste Wahl. Für Webseiten und E-Mails reicht PNG.' },
          { question: 'Werden meine eingegebenen Daten auf Ihren Servern gespeichert?', answer: 'Nein, die Erstellung statischer Codes erfolgt lokal im Browser ohne externe Speicherung.' },
          { question: 'Welche Mindestgröße wird beim Drucken empfohlen?', answer: 'Für Handzettel und Visitenkarten mindestens 20 x 20 mm. Bei Schildern gilt die Faustregel: 10 cm Codegröße pro 1 Meter Leseabstand.' }
        ],
        relatedTools: [
          { name: 'QR-Code-Größenrechner', slug: 'qr-code-size-calculator', description: 'Optimale Maße und Scan-Distanzen berechnen.' },
          { name: 'QR-Druckgrößen- & DPI-Rechner', slug: 'qr-code-print-size-calculator', description: 'Pixel bei 300 DPI und Druckvorstufe.' },
          { name: 'WLAN QR Generator', slug: 'wifi-qr-code-generator', description: 'Gäste-WLAN ohne Passworteingabe teilen.' },
          { name: 'vCard Visitenkarte', slug: 'vcard-qr-code-generator', description: 'Vollständige Kontaktdaten im Adressbuch speichern.' },
          { name: 'Google Bewertungen QR', slug: 'google-reviews-qr-code', description: 'Mehr 5-Sterne-Bewertungen auf Google sammeln.' },
          { name: 'WhatsApp QR Code', slug: 'whatsapp-qr-code-generator', description: 'Direkte Kundenchats auf WhatsApp starten.' }
        ]
      };
    case 'fr':
      return {
        slug: '',
        qrTypeId: 'url',
        title: 'Générateur de QR Code Gratuit avec Logo — Téléchargement SVG et PNG',
        description: 'Créez des QR codes personnalisés gratuits avec logo, couleurs et formes. Liens web, WiFi, vCard, WhatsApp et menus. Téléchargement SVG et PNG.',
        h1: 'Générateur de QR Code Gratuit avec Logo',
        subheadline: 'Générez instantanément des QR codes vectoriels haute définition personnalisés. 100% gratuit, confidentiel et généré dans votre navigateur.',
        heading: 'Générateur de QR Code Professionnel',
        subheading: 'Créez des QR codes personnalisés pour le marketing, les entreprises, la restauration et le quotidien.',
        overviewTitle: 'Pourquoi choisir notre Générateur de QR Code ?',
        overviewParagraphs: [
          'Notre générateur professionnel vous permet de créer des QR codes 2D statiques et dynamiques pour tous vos besoins : liens web, réseaux WiFi sans mot de passe, fiches contact vCard, discussions WhatsApp, paiements, menus de restaurant, téléchargement d\'applications et événements.',
          'Contrairement à d\'autres services qui imposent des abonnements ou désactivent vos codes, notre outil crée des QR codes statiques permanents qui n\'expirent jamais, sans publicité et dans le respect total de votre vie privée.',
          'Personnalisez chaque élément graphique : palette de couleurs, dégradés, modules arrondis et logo central avec correction d\'erreur maximale (Niveau H) et export vectoriel SVG pour l\'imprimerie.'
        ],
        sectors: [
          { name: 'Entreprises & Marketing', description: 'Sur dépliants et affiches pour relier le print aux ventes en ligne.', benefit: 'Multiplie l\'efficacité de vos campagnes publicitaires.' },
          { name: 'Restauration & Hôtellerie', description: 'Menus digitaux de table, cartes des vins et accès WiFi invités.', benefit: 'Supprime totalement les coûts d\'impression papier.' },
          { name: 'Commerce & Emballage', description: 'Sur cartons pour guides d\'utilisation et garanties en ligne.', benefit: 'Fidélise les acheteurs en magasin.' },
          { name: 'Immobilier & Promoteurs', description: 'Sur panneaux de vente pour proposer des visites virtuelles 3D.', benefit: 'Capte les acquéreurs directement dans la rue.' },
          { name: 'Santé & Cabinets Médicaux', description: 'Prise de rendez-vous en ligne et WiFi pour la salle d\'attente.', benefit: 'Accueil moderne sans file d\'attente.' },
          { name: 'Salons & Événements', description: 'Badges participants, plannings interactifs et networking express.', benefit: 'Échanges fluides pour des centaines de visiteurs.' }
        ],
        howItWorks: [
          { title: '1. Choisissez le Type de Contenu', description: 'Lien de site web, WiFi, carte vCard, WhatsApp, menu ou événement.' },
          { title: '2. Personnalisez Couleurs et Logo', description: 'Harmonisez les teintes et placez votre logo au centre du code.' },
          { title: '3. Téléchargez en Haute Résolution', description: 'Exportez en SVG vectoriel pour imprimer ou en PNG pour écrans.' }
        ],
        useCases: [
          { title: 'Affiches et Flyers Publicitaires', description: 'Prospectus avec code promo appliqué automatiquement.', example: 'Campagne de distribution avec fort engagement.' },
          { title: 'Chevalets de Table au Restaurant', description: 'Supports en plexiglas pour consulter le menu digital.', example: 'Restaurant avec 30 tables connectées.' },
          { title: 'Emballages et Colis E-commerce', description: 'Sur cartons pour tutoriels vidéo et service après-vente.', example: 'Boutique en ligne fidélisant sa clientèle.' },
          { title: 'Cartes de Visite Professionnelles', description: 'Cartes haut de gamme avec QR code vCard au verso.', example: 'Dirigeant partageant ses coordonnées en salon.' }
        ],
        tips: [
          'Contraste Élevé : Privilégiez des modules foncés sur un fond blanc pour un scan rapide.',
          'Marge de Sécurité : Laissez une zone blanche d\'au moins 10 px autour du code.',
          'SVG pour l\'Impression : Le format vectoriel SVG garantit une netteté parfaite à toute échelle.',
          'Correction d\'Erreur : L\'insertion d\'un logo active automatiquement le niveau H (30%).',
          'Test Multi-Appareils : Testez l\'impression sur plusieurs smartphones avant le tirage.'
        ],
        technicalNotes: 'Conforme à la norme ISO/IEC 18004 compatible avec tous les appareils iOS et Android.',
        faqs: [
          { question: 'Ces QR codes sont-ils vraiment gratuits et valables à vie ?', answer: 'Oui, tous les QR codes statiques générés sont 100% gratuits, sans limite de scans et n\'expirent jamais.' },
          { question: 'Puis-je insérer mon logo d\'entreprise au centre ?', answer: 'Oui, importez votre image (PNG, JPG ou SVG) et le système ajustera la correction d\'erreur au niveau Élevé (30%).' },
          { question: 'Quelle est la différence entre un code statique et dynamique ?', answer: 'Un code statique stocke les informations directement dans le dessin et ne change jamais ; un code dynamique utilise un lien court modifiable à distance et mesure les statistiques de scan.' },
          { question: 'Quel format de fichier télécharger pour l\'imprimerie ?', answer: 'Pour les flyers, emballages et affiches, utilisez le format vectoriel SVG. Pour les sites web et emails, le PNG convient parfaitement.' },
          { question: 'Mes données personnelles sont-elles enregistrées ?', answer: 'Non, la création statique s\'exécute localement dans votre navigateur sans enregistrement sur nos serveurs.' },
          { question: 'Quelle est la taille minimale recommandée à l\'impression ?', answer: 'Au moins 20 x 20 mm pour les cartes de visite et dépliants. Pour les affiches, comptez environ 10 cm de taille par mètre de distance de visionnage.' }
        ],
        relatedTools: [
          { name: 'Calculateur de Taille QR', slug: 'qr-code-size-calculator', description: 'Dimensions physiques et distance de numérisation.' },
          { name: 'Calculateur d\'Impression & DPI', slug: 'qr-code-print-size-calculator', description: 'Résolution en pixels à 300 DPI pour l\'imprimerie.' },
          { name: 'QR Code WiFi', slug: 'wifi-qr-code-generator', description: 'Partagez votre réseau WiFi sans mot de passe.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Enregistrez des coordonnées complètes d\'un clic.' },
          { name: 'QR Code Avis Google', slug: 'google-reviews-qr-code', description: 'Collectez des avis 5 étoiles sur Google Maps.' },
          { name: 'QR Code WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Démarrez des conversations directes sur WhatsApp.' }
        ]
      };
    case 'pt':
      return {
        slug: '',
        qrTypeId: 'url',
        title: 'Gerador de QR Code Grátis com Logo — Download em Vetor SVG e PNG',
        description: 'Crie QR Codes personalizados grátis com logo, cores e molduras. Para links, Wi-Fi, vCard, WhatsApp e cardápios. Download em SVG e PNG.',
        h1: 'Gerador de QR Code Grátis com Logo',
        subheadline: 'Gere QR Codes de alta resolução, vetoriais e personalizados instantaneamente. 100% grátis, seguro e gerado no seu próprio navegador.',
        heading: 'Gerador de QR Code Profissional',
        subheading: 'Crie códigos QR personalizados para marketing, empresas, gastronomia e uso pessoal.',
        overviewTitle: 'Por que escolher nosso Gerador de QR Code?',
        overviewParagraphs: [
          'Nosso gerador profissional permite criar códigos 2D estáticos e dinâmicos para todas as suas necessidades: links de sites, redes Wi-Fi sem senha, cartões de visita vCard, conversas de WhatsApp, pagamentos UPI, cardápios de restaurantes, download de apps e eventos.',
          'Ao contrário de plataformas que cobram assinaturas abusivas ou expiram seus links, nossa ferramenta gera códigos estáticos permanentes que nunca expiram, sem anúncios e com total privacidade.',
          'Personalize cores da marca, degradês, formas de módulos e adicione seu logotipo central com correção máxima de erros (Nível H) e exportação em vetor SVG para gráficas.'
        ],
        sectors: [
          { name: 'Empresas & Marketing', description: 'Em panfletos e catálogos para conectar o material impresso às vendas online.', benefit: 'Aumenta as conversões das suas campanhas.' },
          { name: 'Restaurantes & Bares', description: 'Cardápios digitais nas mesas e Wi-Fi sem senha para clientes.', benefit: 'Economia com impressões de cardápios físicos.' },
          { name: 'Comércio & Embalagens', description: 'Em caixas para tutoriais em vídeo e registro de garantia.', benefit: 'Fideliza compradores presenciais no canal online.' },
          { name: 'Imobiliárias & Construtoras', description: 'Em placas de venda com link para tour virtual 3D do imóvel.', benefit: 'Atrai clientes interessados que passam na rua.' },
          { name: 'Saúde & Clínicas', description: 'Agendamento de consultas e Wi-Fi na sala de espera.', benefit: 'Atendimento moderno e sem burocracia.' },
          { name: 'Eventos & Congressos', description: 'Crachás de participantes, programação e networking ágil.', benefit: 'Conexão instantânea entre participantes.' }
        ],
        howItWorks: [
          { title: '1. Escolha o Tipo de Conteúdo', description: 'Selecione link de site, Wi-Fi, cartão vCard, WhatsApp, cardápio ou evento.' },
          { title: '2. Personalize Cores e Logotipo', description: 'Ajuste a paleta de cores e adicione o logotipo da sua marca.' },
          { title: '3. Baixe em Alta Definição', description: 'Exporte em SVG vetorial para gráficas ou PNG nítido para telas.' }
        ],
        useCases: [
          { title: 'Panfletos e Encartes', description: 'Materiais com cupons de desconto aplicados automaticamente.', example: 'Campanha de panfletagem com alto retorno.' },
          { title: 'Displays de Mesa em Restaurantes', description: 'Suportes em acrílico para cardápio digital e Wi-Fi.', example: 'Restaurante com 30 mesas equipadas.' },
          { title: 'Caixas e Embalagens de Produtos', description: 'Impresso em embalagens para manuais de uso e pós-venda.', example: 'Loja virtual fidelizando compradores.' },
          { title: 'Cartões de Visita Executivos', description: 'Cartões impressos de luxo com código vCard no verso.', example: 'Executivo trocando contatos em feiras.' }
        ],
        tips: [
          'Alto Contraste: Módulos escuros sobre fundo claro garantem leitura rápida.',
          'Margem de Segurança: Mantenha pelo menos 10 px de borda branca ao redor do código.',
          'Vetor SVG para Gráficas: Garante linhas perfeitamente nítidas em qualquer tamanho de impressão.',
          'Correção de Erros: A inclusão de logotipo ajusta a correção automaticamente para Alto (30%).',
          'Teste Prévio: Escaneie o impresso com celulares diferentes antes da tiragem final.'
        ],
        technicalNotes: 'Em conformidade com a norma ISO/IEC 18004 para todos os smartphones iOS e Android.',
        faqs: [
          { question: 'Os códigos QR gerados são realmente gratuitos e permanentes?', answer: 'Sim, todos os QR Codes estáticos são 100% gratuitos, não possuem limite de leituras e nunca expiram.' },
          { question: 'Posso colocar o logotipo da minha empresa no centro?', answer: 'Sim, envie sua imagem em PNG, JPG ou SVG e o sistema aumentará a correção de erros para Alto (30%).' },
          { question: 'Qual a diferença entre QR Code estático e dinâmico?', answer: 'O código estático grava os dados diretamente no desenho e não pode ser alterado; o código dinâmico utiliza um link curto editável que permite trocar o destino e acompanhar estatísticas de acesso.' },
          { question: 'Qual formato devo baixar para impressão profissional?', answer: 'Para gráficas, embalagens e banners, baixe em SVG vetorial. Para uso em redes sociais e sites, o PNG é o ideal.' },
          { question: 'Meus dados ficam salvos nos servidores de vocês?', answer: 'Não, o processamento estático ocorre 100% localmente no seu navegador de forma privada.' },
          { question: 'Qual o tamanho mínimo recomendado para impressão?', answer: 'Pelo menos 20 x 20 mm para cartões e panfletos. Para placas e faixas, considere 10 cm de código para cada metro de distância de leitura.' }
        ],
        relatedTools: [
          { name: 'Calculadora de Tamanho QR', slug: 'qr-code-size-calculator', description: 'Dimensões recomendadas com base na distância.' },
          { name: 'Calculadora de Impressão e DPI', slug: 'qr-code-print-size-calculator', description: 'Cálculo de pixels a 300 DPI e pré-impressão.' },
          { name: 'QR Code Wi-Fi', slug: 'wifi-qr-code-generator', description: 'Conecte-se ao Wi-Fi sem digitar senhas.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Salve contatos na agenda com 1 toque.' },
          { name: 'QR Code Avaliações Google', slug: 'google-reviews-qr-code', description: 'Ganhe avaliações 5 estrelas no Google Maps.' },
          { name: 'QR Code WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Inicie conversas diretas no WhatsApp.' }
        ]
      };
    case 'it':
      return {
        slug: '',
        qrTypeId: 'url',
        title: 'Generatore QR Code Gratis con Logo — Download in Vettoriale SVG e PNG',
        description: 'Crea codici QR personalizzati gratis con logo, colori e cornici. Per link web, WiFi, vCard, WhatsApp e menu. Download in SVG e PNG.',
        h1: 'Generatore QR Code Gratis con Logo',
        subheadline: 'Genera codici QR ad alta risoluzione, vettoriali e personalizzati all\'istante. 100% gratuito, sicuro ed eseguito nel tuo browser.',
        heading: 'Generatore QR Code Professionale',
        subheading: 'Crea codici QR personalizzati per marketing, aziende, ristorazione e uso personale.',
        overviewTitle: 'Perché scegliere il nostro Generatore di QR Code?',
        overviewParagraphs: [
          'Il nostro generatore professionale permette di creare codici 2D statici e dinamici per qualsiasi esigenza: link a siti web, connessione WiFi senza password, biglietti da visita vCard, chat WhatsApp, pagamenti, menu digitali per ristoranti, download di app ed eventi.',
          'A differenza di altri siti che impongono abbonamenti o disattivano i codici dopo pochi giorni, il nostro strumento genera codici statici permanenti che non scadono mai, senza pubblicità e nel pieno rispetto della tua privacy.',
          'Personalizza ogni dettaglio: colori aziendali, sfumature, moduli con angoli arrotondati e inserimento del tuo logo aziendale con correzione errori di livello Alto (H) ed esportazione vettoriale SVG per la tipografia.'
        ],
        sectors: [
          { name: 'Aziende & Marketing', description: 'Su volantini e cartelloni per collegare il materiale cartaceo alle vendite online.', benefit: 'Aumenta il tasso di conversione delle campagne pubblicitarie.' },
          { name: 'Ristorazione & Hotel', description: 'Menu digitali al tavolo, carte dei vini e accesso WiFi per gli ospiti.', benefit: 'Risparmio totale sui costi di stampa dei menu cartacei.' },
          { name: 'Commercio & Packaging', description: 'Sulle scatole per istruzioni d\'uso e registrazione garanzie.', benefit: 'Fidelizza gli acquirenti del negozio fisico.' },
          { name: 'Immobiliare & Costruzioni', description: 'Sui cartelli di vendita per visualizzare virtual tour 3D.', benefit: 'Cattura l\'interesse dei passanti davanti all\'immobile.' },
          { name: 'Sanità & Studi Medici', description: 'Prenotazione visite online e WiFi in sala d\'attesa.', benefit: 'Servizio moderno e senza attese per i pazienti.' },
          { name: 'Eventi & Congressi', description: 'Badge di accesso, programmi interattivi e networking immediato.', benefit: 'Scambio contatti fulmineo tra centinaia di partecipanti.' }
        ],
        howItWorks: [
          { title: '1. Scegli il Tipo di Contenuto', description: 'Seleziona tra link web, WiFi, scheda vCard, WhatsApp, menu o evento.' },
          { title: '2. Personalizza Stile e Logo', description: 'Scegli i colori e carica il tuo logo aziendale al centro.' },
          { title: '3. Scarica in Alta Definizione', description: 'Esporta in formato vettoriale SVG per la stampa o PNG per il web.' }
        ],
        useCases: [
          { title: 'Volantini e Pieghevoli', description: 'Volantini con codici sconto applicati automaticamente.', example: 'Campagna promozionale con alto riscontro.' },
          { title: 'Espositori da Tavolo nei Locali', description: 'Supporti in plexiglas per menu digitale e WiFi.', example: 'Ristorante con 30 tavoli attrezzati.' },
          { title: 'Scatole e Packaging di Prodotti', description: 'Stampato sulle confezioni per video tutorial e assistenza.', example: 'E-commerce che aumenta la soddisfazione clienti.' },
          { title: 'Biglietti da Visita di Pregio', description: 'Biglietti di alta gamma con codice vCard sul retro.', example: 'Manager che scambia contatti in fiera.' }
        ],
        tips: [
          'Contrasto Elevato: Moduli scuri su sfondo chiaro per una lettura immediata.',
          'Zona di Rispetto: Mantieni un margine bianco di almeno 10 px intorno al codice.',
          'Vettoriale SVG per la Stampa: Garantisce massima nitidezza per qualsiasi dimensione.',
          'Correzione Errori con Logo: L\'inserimento del logo imposta automaticamente il livello Alto (30%).',
          'Test da Smartphone: Scansiona il codice stampato con vari telefoni prima della tiratura finale.'
        ],
        technicalNotes: 'Conforme allo standard ISO/IEC 18004 compatibile con tutti gli smartphone iOS e Android.',
        faqs: [
          { question: 'I codici QR generati sono davvero gratuiti e senza scadenza?', answer: 'Sì, tutti i codici QR statici generati sono gratuiti al 100%, non hanno limiti di scansione e non scadono mai.' },
          { question: 'Posso inserire il mio logo aziendale al centro?', answer: 'Sì, carica la tua immagine in PNG, JPG o SVG e il sistema imposterà automaticamente la correzione degli errori su Alto (30%).' },
          { question: 'Qual è la differenza tra un codice statico e uno dinamico?', answer: 'Un codice statico memorizza le informazioni direttamente nel disegno e non può essere modificato; un codice dinamico utilizza un link breve reindirizzabile e traccia le statistiche di scansione.' },
          { question: 'Quale formato di file devo scaricare per la tipografia?', answer: 'Per stampe professionali su volantini, packaging o cartelloni usa il formato vettoriale SVG. Per siti web ed email il PNG è perfetto.' },
          { question: 'I miei dati personali vengono salvati sui vostri server?', answer: 'No, la generazione statica avviene interamente nel tuo browser senza memorizzazione esterna.' },
          { question: 'Qual è la dimensione minima consigliata per la stampa?', answer: 'Almeno 20 x 20 mm per biglietti da visita e pieghevoli. Per cartelloni e affissioni calcola circa 10 cm di codice per ogni metro di distanza.' }
        ],
        relatedTools: [
          { name: 'Calcolatore Dimensioni QR', slug: 'qr-code-size-calculator', description: 'Dimensioni fisiche e distanza di scansione.' },
          { name: 'Calcolatore Stampa & DPI', slug: 'qr-code-print-size-calculator', description: 'Pixel a 300 DPI e preparazione alla stampa.' },
          { name: 'QR Code WiFi', slug: 'wifi-qr-code-generator', description: 'Condividi la rete WiFi senza password.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Salva i contatti completi in rubrica con un tocco.' },
          { name: 'QR Code Recensioni Google', slug: 'google-reviews-qr-code', description: 'Ottieni più recensioni a 5 stelle su Google Maps.' },
          { name: 'QR Code WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Avvia chat dirette su WhatsApp con i clienti.' }
        ]
      };
    case 'hi':
      return {
        slug: '',
        qrTypeId: 'url',
        title: 'मुफ़्त QR कोड जेनरेटर (लोगो के साथ) — वेक्टर SVG और PNG डाउनलोड',
        description: 'लोगो, रंग और बॉर्डर के साथ कस्टम QR कोड बनाएं। वेबसाइट लिंक, वाई-फ़ाई, vCard, WhatsApp और मेन्यू। वेक्टर SVG और PNG मुफ़्त डाउनलोड।',
        h1: 'मुफ़्त QR कोड जेनरेटर (लोगो के साथ)',
        subheadline: 'उच्च-रिज़ॉल्यूशन, वेक्टर और कस्टम-डिज़ाइन किए गए QR कोड तुरंत बनाएं। 100% मुफ़्त, सुरक्षित और सीधे आपके ब्राउज़र में निर्मित।',
        heading: 'प्रोफेशनल QR कोड जेनरेटर',
        subheading: 'मार्केटिंग, व्यापार, दुकानों और व्यक्तिगत उपयोग के लिए सुंदर कस्टम QR कोड बनाएं।',
        overviewTitle: 'हमारा QR कोड जेनरेटर क्यों चुनें?',
        overviewParagraphs: [
          'हमारा प्रोफेशनल QR कोड जेनरेटर आपकी सभी ज़रूरतों के लिए स्टैटिक और डायनेमिक 2D बारकोड बनाने की सुविधा देता है: वेबसाइट लिंक, बिना पासवर्ड के वाई-फ़ाई कनेक्टिविटी, vCard विज़िटिंग कार्ड, WhatsApp चैट, UPI पेमेंट, रेस्टोरेंट मेन्यू, ऐप स्टोर डाउनलोड और इवेंट कैलेंडर।',
          'अन्य कंपनियों की तरह यह आपके कोड को एक्सपायर नहीं करता और न ही कोई विज्ञापन दिखाता है। यह पूरी तरह मुफ़्त है और आपकी व्यक्तिगत जानकारी सीधे आपके ब्राउज़र में सुरक्षित रहती है।',
          'रंग, ग्रेडिएंट, डॉट शेप्स और सेंटर में अपना ब्रांड लोगो लगाएं। प्रिंटिंग प्रेस के लिए हाई-क्वालिटी वेक्टर SVG और स्क्रीन के लिए PNG डाउनलोड करें।'
        ],
        sectors: [
          { name: 'व्यापार व मार्केटिंग', description: 'पैम्फलेट, कैटलॉग और होर्डिंग पर प्रिंट विज्ञापनों को डिजिटल बिक्री से जोड़ने हेतु।', benefit: 'विज्ञापनों से ग्राहकों की संख्या बढ़ाता है।' },
          { name: 'होटल, रेस्टोरेंट व कैफ़े', description: 'टेबलों पर डिजिटल मेन्यू और ग्राहकों के लिए मुफ़्त वाई-फ़ाई।', benefit: 'कागज़ के मेन्यू छपवाने का खर्च शून्य।' },
          { name: 'रिटेल दुकानें व पैकेजिंग', description: 'प्रोडक्ट बॉक्स पर यूजर मैन्युअल और वीडियो गाइड देने हेतु।', benefit: 'दुकान के खरीदारों को नियमित ग्राहक बनाता है।' },
          { name: 'रियल एस्टेट व प्रॉपर्टी', description: 'बिक्री बोर्ड पर प्रॉपर्टी के 3D वर्चुअल टूर का लिंक देने हेतु।', benefit: 'सड़क से गुजरते खरीदारों को आकर्षित करता है।' },
          { name: 'अस्पताल व क्लीनिक्स', description: 'अपॉइंटमेंट बुकिंग और वेटिंग रूम में वाई-फ़ाई देने हेतु।', benefit: 'मरीजों के लिए आधुनिक और त्वरित सेवा।' },
          { name: 'कॉन्फ़्रेंस व व्यापार मेले', description: 'आई-कार्ड, इवेंट शेड्यूल और त्वरित नेटवर्किंग हेतु।', benefit: 'सैकड़ों मेहमानों को तुरंत जोड़ता है।' }
        ],
        howItWorks: [
          { title: '1. सामग्री का प्रकार चुनें', description: 'वेबसाइट लिंक, वाई-फ़ाई, vCard, WhatsApp, मेन्यू या इवेंट चुनें।' },
          { title: '2. रंग व लोगो कस्टमाइज़ करें', description: 'अपनी कंपनी का रंग चुनें और सेंटर में अपना लोगो लगाएं।' },
          { title: '3. हाई-रिज़ॉल्यूशन में डाउनलोड करें', description: 'प्रिंटिंग के लिए वेक्टर SVG या स्क्रीन के लिए PNG डाउनलोड करें।' }
        ],
        useCases: [
          { title: 'प्रिंट विज्ञापन व पैम्फलेट्स', description: 'छूट कूपन कोड सीधे लागू करने वाले पर्चे।', example: 'अखबार के पर्चों से ज्यादा ग्राहक।' },
          { title: 'काउंटर व टेबल स्टैंडी', description: 'दुकानों और टेबलों पर लगे एक्रिलिक स्टैंड।', example: 'रेस्टोरेंट की 30 टेबलों पर लगा मेन्यू कोड।' },
          { title: 'प्रोडक्ट डिलीवरी पैकेजिंग', description: 'बॉक्स पर यूजर मैन्युअल और सपोर्ट देखने हेतु।', example: 'ऑनलाइन स्टोर डिलीवरी बॉक्स।' },
          { title: 'प्रीमियम विज़िटिंग कार्ड्स', description: 'कार्ड के पीछे डिजिटल संपर्क सेव कराने हेतु vCard कोड।', example: 'व्यापार मेले में विज़िटिंग कार्ड नेटवर्किंग।' }
        ],
        tips: [
          'हाई कंट्रास्ट: सफ़ेद बैकग्राउंड पर गहरे रंग के डॉट्स रखें ताकि कैमरा तुरंत स्कैन करे।',
          'सुरक्षित किनारा (मार्जिन): QR कोड के चारों तरफ कम से कम 10 px की सफ़ेद जगह छोड़ें।',
          'प्रिंटिंग के लिए SVG: किसी भी साइज़ में साफ़ प्रिंट के लिए हमेशा SVG का उपयोग करें।',
          'लोगो एरर करेक्शन: लोगो अपलोड करने पर सिस्टम एरर करेक्शन को अपने आप हाई (H) पर सेट कर देता है।',
          'प्रिंट से पहले जांच: बड़ा प्रिंट कराने से पहले अलग-अलग फोन से टेस्ट करें।'
        ],
        technicalNotes: 'ISO/IEC 18004 अंतरराष्ट्रीय मानक सभी iOS, Android और Windows कैमरों पर समर्थित।',
        faqs: [
          { question: 'क्या ये QR कोड वाकई मुफ़्त और स्थायी हैं?', answer: 'हाँ, यहाँ बने सभी स्टैटिक QR कोड 100% मुफ़्त हैं, असीमित बार स्कैन किए जा सकते हैं और कभी एक्सपायर नहीं होते।' },
          { question: 'क्या मैं बीच में अपनी दुकान या कंपनी का लोगो लगा सकता हूँ?', answer: 'हाँ, अपना लोगो PNG, JPG या SVG में अपलोड करें, सिस्टम अपने आप एरर करेक्शन को हाई (30%) कर देगा।' },
          { question: 'स्टैटिक और डायनेमिक QR कोड में क्या अंतर है?', answer: 'स्टैटिक कोड में जानकारी सीधे इमेज में सुरक्षित होती है और बदली नहीं जा सकती; डायनेमिक कोड में आप लिंक को बाद में भी बदल सकते हैं और स्कैन आंकड़े देख सकते हैं।' },
          { question: 'प्रिंटिंग के लिए कौन सा फ़ाइल फॉर्मेट डाउनलोड करना चाहिए?', answer: 'प्रोफेशनल प्रिंटिंग, पैकेजिंग और होर्डिंग्स के लिए वेक्टर SVG सबसे अच्छा है। स्क्रीन और सोशल मीडिया के लिए PNG सही है।' },
          { question: 'क्या मेरी व्यक्तिगत जानकारी आपके सर्वर पर सेव होती है?', answer: 'नहीं, स्टैटिक कोड पूरी तरह आपके ब्राउज़र में बनता है और किसी सर्वर पर स्टोर नहीं होता।' },
          { question: 'कागज़ पर प्रिंट के लिए न्यूनतम साइज़ क्या होना चाहिए?', answer: 'विज़िटिंग कार्ड और पर्चों पर कम से कम 20 x 20 मिमी आकार रखें। दूर से देखने वाले बोर्ड्स के लिए 1 मीटर दूरी पर 10 सेमी साइज़ रखें।' }
        ],
        relatedTools: [
          { name: 'क्यूआर कोड आकार कैलकुलेटर', slug: 'qr-code-size-calculator', description: 'स्कैन दूरी के आधार पर सही भौतिक आकार निकालें।' },
          { name: 'क्यूआर प्रिंट आकार और DPI कैलकुलेटर', slug: 'qr-code-print-size-calculator', description: '300 DPI पर प्रिंट पिक्सेल और प्रीप्रेस गाइड।' },
          { name: 'Wi-Fi QR जेनरेटर', slug: 'wifi-qr-code-generator', description: 'बिना पासवर्ड के वाई-फ़ाई से कनेक्ट करें।' },
          { name: 'vCard विज़िटिंग कार्ड QR', slug: 'vcard-qr-code-generator', description: 'संपर्क विवरण सीधे फोनबुक में सेव कराएं।' },
          { name: 'गूगल रिव्यू QR कोड', slug: 'google-reviews-qr-code', description: 'Google Maps पर 5-स्टार रेटिंग प्राप्त करें।' },
          { name: 'WhatsApp QR जेनरेटर', slug: 'whatsapp-qr-code-generator', description: 'ग्राहकों से सीधे व्हाट्सएप चैट शुरू करें।' }
        ]
      };
    default: // 'en'
      return {
        slug: '',
        qrTypeId: 'url',
        title: 'Free QR Code Generator with Logo — Vector SVG & PNG',
        description: 'Create custom QR codes with custom colors, frames, and logos. Generate static and dynamic QR codes for URL, Wi-Fi, vCard, WhatsApp, and digital menus.',
        h1: 'Free QR Code Generator with Logo',
        subheadline: 'Generate high-resolution, vector-crisp, and custom-styled QR codes instantly. 100% free, private, and client-side in your browser.',
        heading: 'Professional QR Code Generator',
        subheading: 'Create custom branded QR codes for marketing campaigns, enterprise products, hospitality, and daily personal use.',
        overviewTitle: 'Why Choose Our Free QR Code Generator?',
        overviewParagraphs: [
          'Our enterprise-grade QR code generator empowers businesses, marketers, and creators to create static and dynamic 2D barcodes tailored for every use case: website URLs, passwordless Wi-Fi connections, digital vCard business cards, WhatsApp chats, UPI merchant payments, digital restaurant menus, mobile app downloads, and event calendars.',
          'Unlike generic subscription-trap QR services that expire your codes after a 14-day trial or inject unwanted third-party advertisements, our generator creates permanent static QR codes that never expire and operate completely client-side in your browser memory for 100% data privacy.',
          'Customize every visual detail: corporate color themes, gradient module fills, smooth rounded or dot geometries, unique corner eye styles, and central brand logo placement with automated Reed-Solomon Level H (30%) error correction and print-ready Vector SVG export.'
        ],
        sectors: [
          { name: 'Enterprise Marketing & Agencies', description: 'Printed on direct mail, catalogs, and billboards to seamlessly connect offline readers with online sales funnels.', benefit: 'Dramatically increases print campaign conversion rates.' },
          { name: 'Restaurants, Cafes & Hospitality', description: 'Contactless tabletop dining menus, craft beer lists, and frictionless guest Wi-Fi access.', benefit: 'Eliminates paper menu printing costs and speeds table turnover.' },
          { name: 'Retail Commerce & Packaging', description: 'Printed on retail product boxes and unboxing cards for setup videos and warranty registrations.', benefit: 'Turns one-time in-store buyers into recurring digital customers.' },
          { name: 'Real Estate Agencies & Brokerages', description: 'Displayed on "For Sale" yard signs and brochures linking to 3D virtual home walkthroughs.', benefit: 'Captures drive-by home buyer interest immediately.' },
          { name: 'Healthcare Providers & Clinics', description: 'Displayed at check-in desks for digital intake forms, portal access, and waiting room Wi-Fi.', benefit: 'Delivers a modern, paperless patient experience.' },
          { name: 'Conferences, Expos & Summits', description: 'Printed on attendee badge lanyards and stage screens for instant contact sharing.', benefit: 'Facilitates fast networking across hundreds of attendees.' }
        ],
        howItWorks: [
          { title: '1. Select Content Type', description: 'Choose from Website URL, Wi-Fi Network, vCard Contact, WhatsApp Chat, Restaurant Menu, or App Store.' },
          { title: '2. Customize Visual Styling', description: 'Match corporate color palettes, pick modern rounded or dot modules, and upload your central brand logo.' },
          { title: '3. Download & Print Everywhere', description: 'Export print-ready Vector SVG for physical commercial signage or high-DPI PNG for digital assets.' }
        ],
        useCases: [
          { title: 'Print Collateral & Direct Mail', description: 'Postcards and magazine advertisements with targeted discounts applied automatically at checkout.', example: 'Direct mail campaign generating 25% higher response rates.' },
          { title: 'Point-of-Sale Tabletop Standees', description: 'Tabletop acrylic displays placed on checkout counters and dining tables.', example: 'Bistro providing contactless dining across 30 tables.' },
          { title: 'Product Packaging & Hang Tags', description: 'Printed on hardware boxes for interactive setup guides and customer support.', example: 'Direct-to-consumer brand driving post-purchase loyalty.' },
          { title: 'Executive Business Cards', description: 'Luxury foil-stamped paper cards with a clean vCard QR code on the back.', example: 'Sales executive sharing contact credentials at trade expos.' }
        ],
        tips: [
          'High Optical Contrast: Always maintain dark foreground modules against a clean white or light background for rapid camera autofocus.',
          'Quiet Zone Margin: Maintain a clean white border of at least 10 px around the outer boundary of the QR symbol.',
          'Vector SVG for Commercial Print: Always supply vector SVG format to commercial print shops to avoid blurry raster pixelation.',
          'Error Correction for Logos: When uploading a central logo, ensure error correction is set to Level H (30%) so the code scans reliably.',
          'Multi-Device Field Testing: Always test the printed proof on multiple iPhone and Android devices before beginning mass print runs.'
        ],
        technicalNotes: 'Standards Compliance: ISO/IEC 18004 international barcode specification natively supported across all iOS, Android, and Windows camera applications.',
        faqs: [
          { question: 'Are these QR codes really 100% free and permanent?', answer: 'Yes! All static QR codes generated on our platform are 100% free, come with unlimited lifetime scans, and will never expire.' },
          { question: 'Can I add my company logo in the center of the QR code?', answer: 'Yes! Upload your logo in PNG, JPG, or SVG format. Our generator automatically boosts error correction to Level H (30%) so the code scans flawlessly with the logo embedded.' },
          { question: 'What is the difference between static and dynamic QR codes?', answer: 'A static QR code encodes data directly into the pixel matrix and cannot be altered once printed. A dynamic QR code routes through a short link that you can edit anytime without reprinting, while also tracking scan analytics.' },
          { question: 'What file format should I download for commercial printing?', answer: 'For professional printing on packaging, billboards, or business cards, always download the Vector SVG format. For websites and digital media, PNG is ideal.' },
          { question: 'Is my personal data stored or logged on your servers?', answer: 'No. Our static QR code generator runs 100% locally in your browser memory. Your Wi-Fi passwords, contact details, and messages are never stored on external databases.' },
          { question: 'What is the minimum recommended physical print size?', answer: 'For handheld print materials like business cards or flyers, print at least 20 x 20 mm (0.8 x 0.8 inches). For signs viewed at distance, maintain a 10:1 distance-to-size ratio (10 cm size per 1 meter of viewing distance).' }
        ],
        relatedTools: [
          { name: 'QR Code Size Calculator', slug: 'qr-code-size-calculator', description: 'Calculate physical dimensions based on scan distance and QR density.' },
          { name: 'QR Code Print Size & DPI Calculator', slug: 'qr-code-print-size-calculator', description: 'Prepress tool to calculate pixels at 300 DPI and print material presets.' },
          { name: 'Wi-Fi QR Generator', slug: 'wifi-qr-code-generator', description: 'Let visitors connect to wireless networks without typing passwords.' },
          { name: 'vCard QR Generator', slug: 'vcard-qr-code-generator', description: 'Share full contact credentials directly to address books.' },
          { name: 'Google Reviews QR', slug: 'google-reviews-qr-code', description: 'Collect 5-star customer ratings on Google Maps.' },
          { name: 'WhatsApp QR Generator', slug: 'whatsapp-qr-code-generator', description: 'Launch instant WhatsApp business conversations.' }
        ]
      };
  }
}
