import type { Locale } from '../config';
import type { LocalizedPageContent } from './types';

export function getMenuContent(locale: Locale): LocalizedPageContent {
  switch (locale) {
    case 'es':
      return {
        slug: 'restaurant-menu-qr-code',
        qrTypeId: 'url',
        title: 'Generador de Código QR para Menús de Restaurante — Cartas Digitales',
        description: 'Genera códigos QR de menús para restaurantes, bares y cafeterías. Enlaza a cartas digitales o PDF con descarga en SVG y PNG.',
        h1: 'Generador de Código QR para Menús de Restaurante',
        subheadline: 'Crea códigos QR de menús digitales sin contacto para mesas y barras. Visualización inmediata en el móvil con un escaneo.',
        heading: 'Código QR de Menú para Restaurantes',
        subheading: 'Moderniza el servicio de sala con cartas digitales ecológicas y sin contacto.',
        overviewTitle: '¿Qué es un Código QR para Menús de Restaurante?',
        overviewParagraphs: [
          'Un generador de código QR para menús crea un código de barras 2D de sobremesa que abre una carta de platos y bebidas optimizada para móviles directamente en el smartphone del comensal. Al sentarse en la mesa, los clientes solo tienen que apuntar su cámara para ver entrantes, platos principales, alérgenos y carta de vinos.',
          'Las cartas de papel tradicionales se deterioran con facilidad, exigen costosas reimpresiones cuando cambian los precios de temporada y ralentizan el servicio. Las cartas digitales eliminan gastos de papel y permiten actualizar platos al instante.',
          'Nuestro generador admite enlaces directos a menús en PDF, páginas web y portales gastronómicos. Descarga archivos vectoriales SVG para soportes de madera o metacrilato.'
        ],
        sectors: [
          { name: 'Restaurantes y Bistrós', description: 'Soportes elegantes de madera o metacrilato para consultar la carta sin contacto.', benefit: 'Ahorra costes de reimpresión de cartas de papel.' },
          { name: 'Bares de Copas y Cervecerías', description: 'Posavasos y adhesivos de barra con grifos de cerveza artesana rotativos.', benefit: 'Actualiza cartas de cócteles al momento.' },
          { name: 'Cafeterías y Pastelerías', description: 'Carteles en mostrador con opciones de bollería recién horneada del día.', benefit: 'Reduce colas permitiendo elegir mientras esperan.' },
          { name: 'Food Trucks y Puestos Callejeros', description: 'Carteles exteriores de alto contraste junto a la ventanilla de pedidos.', benefit: 'Agiliza la toma de comandas.' },
          { name: 'Hoteles y Servicio de Habitaciones', description: 'En mesitas de noche y cabañas de piscina para pedidos de room service.', benefit: 'Incrementa los ingresos de restauración del hotel.' },
          { name: 'Catering y Buffets de Eventos', description: 'Junto a las estaciones de comida con etiquetas de alérgenos y platos sin gluten.', benefit: 'Tranquilidad para comensales con intolerancias.' }
        ],
        howItWorks: [
          { title: '1. Pega la URL o PDF del Menú', description: 'Introduce el enlace a tu carta digital o documento PDF en la nube.' },
          { title: '2. Personaliza el Diseño de Mesa', description: 'Elige colores a juego con la decoración de tu local y añade tu logotipo.' },
          { title: '3. Descarga e Imprime', description: 'Exporta en SVG vectorial para grabado en madera o PNG para metacrilatos.' }
        ],
        useCases: [
          { title: 'Expositores de Mesa en Metacrilato', description: 'Soportes de 10x15 cm colocados en el centro de cada mesa.', example: 'Restaurante italiano con 30 mesas equipadas.' },
          { title: 'Posavasos de Barra', description: 'Posavasos absorbentes con código QR para cartas de bebidas.', example: 'Cervecería con 24 grifos rotativos.' },
          { title: 'Escaparates y Puertas', description: 'Vinilos exteriores para que los viandantes consulten precios tras el cierre.', example: 'Restaurante atrayendo reservas para el día siguiente.' },
          { title: 'Mesitas de Noche en Hoteles', description: 'Tarjetas de habitación para pedidos de cena tardíos.', example: 'Resort vacacional aumentando pedidos de habitaciones.' }
        ],
        tips: [
          'Páginas Web Rápidas: Asegúrate de que tu menú cargue rápido en conexiones móviles 4G/5G.',
          'Materiales Resistentes: Imprime en papel sintético impermeable o introduce el código en metacrilatos sellados.',
          'Alto Contraste: Utiliza fondo blanco para que la cámara enfoque fácilmente con luz tenue de velas.',
          'Llamada Clara: Añade el texto "Escanea con la cámara de tu móvil para ver la carta".',
          'QR Dinámicos para Actualizaciones: Usa QR dinámicos si vas a cambiar la dirección web del menú en el futuro sin reimprimir soportes.'
        ],
        technicalNotes: 'Estándar ISO/IEC 18004 compatible con todas las cámaras de smartphones iOS y Android.',
        faqs: [
          { question: '¿Cómo consultan los clientes el menú con el código QR?', answer: 'Abren la cámara de su móvil, apuntan al código de la mesa y tocan el aviso para abrir la carta digital en su navegador.' },
          { question: '¿Puedo enlazar directamente a un archivo PDF?', answer: 'Sí, puedes enlazar a cualquier archivo PDF alojado en tu web, Google Drive o servicio en la nube.' },
          { question: '¿Cuál es la forma más duradera de poner códigos QR en las mesas?', answer: 'Los soportes de metacrilato de 10x15 cm, tacos de madera grabados o pegatinas plastificadas son los más resistentes a líquidos y limpieza continua.' },
          { question: '¿Puedo cambiar los precios o platos sin reimprimir los códigos?', answer: 'Si el código QR apunta a tu web o utilizas un QR dinámico, puedes cambiar los precios online cuando quieras sin tocar las mesas.' },
          { question: '¿Tienen caducidad los códigos QR de menús?', answer: 'Los códigos estáticos nunca caducan y seguirán funcionando mientras tu página web siga activa.' },
          { question: '¿Puedo colocar el logo de mi restaurante en el centro?', answer: 'Sí, sube tu logotipo en PNG o SVG y el sistema aplicará automáticamente corrección de errores nivel H (30%).' }
        ],
        relatedTools: [
          { name: 'QR de WiFi', slug: 'wifi-qr-code-generator', description: 'Ofrece conexión WiFi a tus comensales en mesa.' },
          { name: 'QR de Reseñas de Google', slug: 'google-reviews-qr-code', description: 'Consigue más valoraciones de 5 estrellas en los tickets.' },
          { name: 'QR de Enlace Web', slug: 'url-to-qr-code', description: 'Dirige visitas a tu web o formulario de reservas.' },
          { name: 'QR de Contacto vCard', slug: 'vcard-qr-code-generator', description: 'Comparte datos de contacto de tu restaurante.' }
        ]
      };
    case 'de':
      return {
        slug: 'restaurant-menu-qr-code',
        qrTypeId: 'url',
        title: 'Restaurant Speisekarte QR Code Generator — Kontaktlose Menüs',
        description: 'Erstellen Sie digitale Speisekarten-QR-Codes für Tische, Bars und Bistros. Verlinkung auf PDF oder Menü-Webseite. Vektor-SVG & PNG Download.',
        h1: 'Restaurant Speisekarte QR Code Generator',
        subheadline: 'Erstellen Sie kontaktlose Speisekarten-QR-Codes für Tische und Theken. Sofortige mobile Menüansicht mit einem einzigen Scan.',
        heading: 'Digitale Restaurant-Speisekarte',
        subheading: 'Moderne, umweltfreundliche Speisekarten für Tische in Gastronomie und Hotellerie.',
        overviewTitle: 'Was ist ein Speisekarten QR Code Generator?',
        overviewParagraphs: [
          'Ein Speisekarten QR Code Generator erstellt einen 2D-Barcode für Gastronomie-Tische, der Gästen beim Scannen sofort die digitale Menükarte auf dem Smartphone anzeigt.',
          'Papierspeisekarten nutzen sich schnell ab und müssen bei jeder Preis- oder Saisonänderung kostspielig nachgedruckt werden. Digitale Menüs sparen Druckkosten und bieten Gästen übersichtliche Allergen- und Tagesangebote.',
          'Unterstützt direkte PDF-Verlinkungen und eigene Speisekarten-Seiten. Download in Vektor-SVG für Holzgravuren oder Acrylaufsteller.'
        ],
        sectors: [
          { name: 'Restaurants & Bistros', description: 'Edle Aufsteller auf Tischen für hygienische Karteneinsicht.', benefit: 'Keine Druckkosten für Papierkarten.' },
          { name: 'Bars & Brauhäuser', description: 'Bierdeckel und Thekenaufkleber mit wechselnden Biersorten.', benefit: 'Getränkekarte minutenschnell anpassen.' },
          { name: 'Cafés & Bäckereien', description: 'Aufsteller an der Theke mit täglichem Kuchenangebot.', benefit: 'Kürzt Wartezeiten an der Kasse.' },
          { name: 'Food Trucks & Imbiss', description: 'Witterungsbeständige Außenschilder an der Bestelltheke.', benefit: 'Schnelle Bestellabwicklung vor Ort.' },
          { name: 'Hotels & Zimmerservice', description: 'Auf Nachttischen für einfache Room-Service-Bestellungen.', benefit: 'Steigert den Umsatz im Gastbereich.' },
          { name: 'Catering & Event-Buffets', description: 'An Buffetstationen mit klaren Allergen-Kennzeichnungen.', benefit: 'Sicherheit für Gäste mit Unverträglichkeiten.' }
        ],
        howItWorks: [
          { title: '1. Menü-URL oder PDF Eingeben', description: 'Link zu Ihrer Online-Speisekarte oder Cloud-PDF eintragen.' },
          { title: '2. Tischdesign Gestalten', description: 'Farben an Ihr Restaurantambiente anpassen und Logo einfügen.' },
          { title: '3. Drucken & Aufstellen', description: 'Als Vektor-SVG für Gravuren oder PNG für Aufsteller exportieren.' }
        ],
        useCases: [
          { title: 'Acryl-Tischaufsteller', description: 'Kompakte Aufsteller in der Tischmitte.', example: 'Trattoria mit 30 Tischen.' },
          { title: 'Bierdeckel an der Bar', description: 'Saugfähige Untersetzer mit QR-Code zur Getränkekarte.', example: 'Craft-Beer-Bar mit 20 Sorten.' },
          { title: 'Schaufenster & Eingang', description: 'Aufkleber für Passanten nach Küchenschluss.', example: 'Restaurant gewinnt Vorbestellungen für morgen.' },
          { title: 'Zimmerkarten im Hotel', description: 'Aufsteller auf dem Nachttisch für Spätbestellungen.', example: 'Hotel steigert Zimmerservice-Umsatz.' }
        ],
        tips: [
          'Schnelle Ladezeiten: Speisekarte sollte für mobile 4G/5G-Netze optimiert sein.',
          'Robuste Materialien: Wasserfeste Acryl- oder Holztischaufsteller nutzen.',
          'Hoher Kontrast: Weißer Hintergrund für schwaches Kerzenlicht am Tisch.',
          'Klarer Text: "Mit der Handykamera scannen für die Speisekarte" ergänzen.',
          'Dynamische QR-Codes: Ermöglichen spätere Link-Änderungen ohne Neudruck.'
        ],
        technicalNotes: 'ISO/IEC 18004 Standard für alle mobilen iOS- und Android-Browser.',
        faqs: [
          { question: 'Wie öffnen Gäste die Speisekarte?', answer: 'Gäste richten ihre Smartphone-Kamera auf den Tisch-Code und tippen auf den Link, um die Speisekarte im Browser zu sehen.' },
          { question: 'Kann ich direkt auf eine PDF-Datei verlinken?', answer: 'Ja, Sie können direkt auf eine PDF auf Ihrer Website oder in der Cloud verlinken.' },
          { question: 'Welches Material eignet sich am besten für Tische?', answer: 'Acrylaufsteller (10x15 cm) oder lasergravierte Holzblöcke sind besonders langlebig und abwischbar.' },
          { question: 'Kann ich Preise ändern, ohne neu zu drucken?', answer: 'Wenn der Code auf Ihre Website verlinkt oder Sie dynamische QR-Codes nutzen, ändern Sie Preise online ohne Neudruck.' },
          { question: 'Laufen Speisekarten-QR-Codes ab?', answer: 'Nein, die statischen Codes sind dauerhaft gültig, solange die Zielseite online ist.' },
          { question: 'Kann ich mein Restaurantlogo einbinden?', answer: 'Ja, laden Sie Ihr Logo hoch und die Fehlerkorrektur wird automatisch auf Stufe H (30%) erhöht.' }
        ],
        relatedTools: [
          { name: 'WLAN QR Generator', slug: 'wifi-qr-code-generator', description: 'Gäste-WLAN ohne Passworteingabe am Tisch.' },
          { name: 'Google Bewertungen QR', slug: 'google-reviews-qr-code', description: 'Mehr 5-Sterne-Bewertungen auf Kassenbons.' },
          { name: 'Weblink QR Generator', slug: 'url-to-qr-code', description: 'Besucher auf Tischreservierung weiterleiten.' },
          { name: 'vCard Visitenkarte', slug: 'vcard-qr-code-generator', description: 'Kontaktdaten des Restaurants teilen.' }
        ]
      };
    case 'fr':
      return {
        slug: 'restaurant-menu-qr-code',
        qrTypeId: 'url',
        title: 'Générateur de QR Code Menu Restaurant — Menus Digitaux Sans Contact',
        description: 'Créez des QR codes de menu pour restaurants, bars et bistrots. Lien vers menu PDF ou en ligne. Téléchargement gratuit en SVG et PNG.',
        h1: 'Générateur de QR Code Menu Restaurant',
        subheadline: 'Générez des menus digitaux sans contact pour vos tables et comptoirs. Consultation fluide sur smartphone en un seul scan.',
        heading: 'QR Code de Menu pour Restaurants',
        subheading: 'Modernisez votre service de salle avec des cartes digitales écologiques et économiques.',
        overviewTitle: 'Qu\'est-ce qu\'un QR Code de Menu Restaurant ?',
        overviewParagraphs: [
          'Un générateur de QR code de menu crée un code 2D de table qui ouvre la carte des plats et boissons directement sur le smartphone des convives dès leur installation.',
          'Les cartes en papier se détériorent vite et coûtent cher à réimprimer lors des changements de tarifs. Les menus digitaux éliminent les frais d\'impression et permettent des mises à jour instantanées.',
          'Prend en charge les fichiers PDF et les pages web de restaurant. Téléchargez en SVG vectoriel pour gravure sur bois ou supports plexiglas.'
        ],
        sectors: [
          { name: 'Restaurants & Brasseries', description: 'Chevalets de table pour consulter la carte sans contact.', benefit: 'Économie totale sur les impressions papier.' },
          { name: 'Bars & Pubs', description: 'Sous-bocks et stickers de comptoir pour la carte des bières.', benefit: 'Mise à jour rapide des cocktails du jour.' },
          { name: 'Salons de Thé & Pâtisseries', description: 'Affichage au comptoir pour les douceurs du jour.', benefit: 'Réduit les files d\'attente en caisse.' },
          { name: 'Food Trucks & Street Food', description: 'Panneaux extérieurs résistants aux intempéries.', benefit: 'Prise de commande fluide et rapide.' },
          { name: 'Hôtels & Room Service', description: 'Sur les tables de chevet pour les commandes en chambre.', benefit: 'Développe les ventes de restauration de l\'hôtel.' },
          { name: 'Buffets & Traiteurs', description: 'Devant les plats avec indications des allergènes.', benefit: 'Rassure les convives ayant des intolérances.' }
        ],
        howItWorks: [
          { title: '1. Indiquez le Lien du Menu', description: 'Collez l\'URL de votre carte en ligne ou fichier PDF.' },
          { title: '2. Personnalisez le Design', description: 'Harmonisez les couleurs avec votre salle et insérez votre logo.' },
          { title: '3. Téléchargez et Installez', description: 'Exportez en SVG vectoriel ou PNG pour vos supports de table.' }
        ],
        useCases: [
          { title: 'Chevalets en Plexiglas', description: 'Supports transparents 10x15 cm posés sur chaque table.', example: 'Bistrot avec 30 tables équipées.' },
          { title: 'Sous-bocks au Bar', description: 'Sous-verres absorbants avec QR code pour la carte des boissons.', example: 'Bar à bières artisanales avec 24 références.' },
          { title: 'Vitrines et Portes d\'Entrée', description: 'Adhésifs extérieurs pour consulter les tarifs à toute heure.', example: 'Restaurant attirant des réservations du lendemain.' },
          { title: 'Cartes de Chambre d\'Hôtel', description: 'Sur les bureaux de chambre pour les repas tardifs.', example: 'Hôtel augmentant ses commandes de room service.' }
        ],
        tips: [
          'Chargement Rapide : Votre menu web doit être léger et fluide sur mobile.',
          'Supports Durables : Utilisez du plexiglas ou du bois verni facile à nettoyer.',
          'Contraste Optimal : Fond blanc pour un scan rapide à la lueur des bougies.',
          'Consigne Claire : Ajoutez "Scannez avec votre appareil photo pour voir le menu".',
          'QR Dynamiques : Permettent de changer le lien du menu sans réimprimer vos supports.'
        ],
        technicalNotes: 'Norme ISO/IEC 18004 compatible avec tous les smartphones iOS et Android.',
        faqs: [
          { question: 'Comment les clients ouvrent-ils le menu ?', answer: 'Les clients pointent l\'appareil photo de leur smartphone sur le code de la table et touchent le lien pour afficher la carte.' },
          { question: 'Puis-je lier un fichier PDF ?', answer: 'Oui, vous pouvez insérer le lien direct vers votre fichier PDF hébergé en ligne.' },
          { question: 'Quel est le support de table le plus résistant ?', answer: 'Les chevalets en plexiglas 10x15 cm ou les blocs en bois gravés au laser sont les plus durables et résistants aux liquides.' },
          { question: 'Puis-je modifier mes prix sans réimprimer ?', answer: 'Oui, si vous utilisez un lien web ou un QR code dynamique, les modifications en ligne s\'appliquent immédiatement sans changer les tables.' },
          { question: 'Les QR codes de menu expirent-ils ?', answer: 'Non, les codes statiques sont permanents tant que votre lien internet reste actif.' },
          { question: 'Puis-je mettre le logo de mon restaurant au centre ?', answer: 'Oui, chargez votre logo et la correction d\'erreur passera automatiquement au niveau H (30%).' }
        ],
        relatedTools: [
          { name: 'QR Code WiFi', slug: 'wifi-qr-code-generator', description: 'Offrez le WiFi aux clients à table.' },
          { name: 'QR Code Avis Google', slug: 'google-reviews-qr-code', description: 'Collectez des avis 5 étoiles sur l\'addition.' },
          { name: 'QR Code Lien Web', slug: 'url-to-qr-code', description: 'Lien vers vos réservations en ligne.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Partagez les coordonnées du restaurant.' }
        ]
      };
    case 'pt':
      return {
        slug: 'restaurant-menu-qr-code',
        qrTypeId: 'url',
        title: 'Gerador de QR Code Cardápio de Restaurante — Cardápios Digitais',
        description: 'Crie QR codes de cardápio para restaurantes, bares e lanchonetes. Link para cardápio digital ou PDF. Download grátis em SVG e PNG.',
        h1: 'Gerador de QR Code Cardápio de Restaurante',
        subheadline: 'Gere cardápios digitais contactless para mesas e balcões. Visualização imediata no celular em um único scan.',
        heading: 'Cardápio Digital para Restaurantes',
        subheading: 'Modernize o atendimento no salão com cardápios digitais ecológicos e econômicos.',
        overviewTitle: 'O que é um QR Code de Cardápio para Restaurantes?',
        overviewParagraphs: [
          'Um gerador de QR Code de cardápio cria um código 2D de mesa que abre o menu completo de pratos e bebidas direto no smartphone do cliente.',
          'Cardápios de papel estragam com facilidade e geram altos custos de reimpressão a cada alteração de preço. Os cardápios digitais reduzem despesas e agilizam o atendimento.',
          'Suporta links para PDF e páginas web de restaurantes. Baixe em vetor SVG para gravação em madeira ou displays de acrílico.'
        ],
        sectors: [
          { name: 'Restaurantes & Bistrôs', description: 'Displays elegantes em acrílico para consulta higiênica.', benefit: 'Economia com impressão de cardápios de papel.' },
          { name: 'Bares & Choperias', description: 'Porta-copos e adesivos no balcão com carta de cervejas.', benefit: 'Atualização rápida de drinks da casa.' },
          { name: 'Cafeterias & Confeitarias', description: 'No balcão com os doces e cafés do dia.', benefit: 'Diminui filas no caixa.' },
          { name: 'Food Trucks & Lanches', description: 'Placas externas resistentes a chuva e sol.', benefit: 'Agilidade na fila de pedidos.' },
          { name: 'Hotéis & Room Service', description: 'Na cabeceira da cama para pedidos no quarto.', benefit: 'Aumenta as vendas de room service.' },
          { name: 'Buffets & Eventos', description: 'Nas ilhas gastronômicas com identificação de alérgenos.', benefit: 'Segurança para pessoas com restrições alimentares.' }
        ],
        howItWorks: [
          { title: '1. Insira o Link do Cardápio', description: 'Cole a URL do seu cardápio online ou PDF.' },
          { title: '2. Personalize o Estilo', description: 'Combine com as cores do salão e adicione o logo do restaurante.' },
          { title: '3. Imprima e Posicione', description: 'Baixe em SVG vetorial para placas ou PNG nítido.' }
        ],
        useCases: [
          { title: 'Displays de Mesa em Acrílico', description: 'Suportes transparentes 10x15 cm no centro das mesas.', example: 'Restaurante com 30 mesas equipadas.' },
          { title: 'Porta-Copos no Balcão', description: 'Bolachas de chopp com código para a carta de bebidas.', example: 'Bar de cervejas artesanais.' },
          { title: 'Adesivo na Fachada', description: 'Para pedestres consultarem preços após o expediente.', example: 'Restaurante atraindo clientes para o almoço.' },
          { title: 'Cartão de Quarto em Hotel', description: 'Na mesinha de cabeceira para jantares tardios.', example: 'Pousada aumentando pedidos no quarto.' }
        ],
        tips: [
          'Carregamento Ágil: Garanta que a página do cardápio abra rápido no 4G/5G.',
          'Material Resistente: Use acrílico ou madeira envernizada de fácil limpeza.',
          'Alto Contraste: Fundo branco facilita a leitura sob meia-luz.',
          'Instrução Visível: Inclua "Aponte a câmera do celular para ver o cardápio".',
          'QR Dinâmico: Permite alterar o link do cardápio sem reimprimir os suportes.'
        ],
        technicalNotes: 'Padrão ISO/IEC 18004 compatível com todos os navegadores móveis.',
        faqs: [
          { question: 'Como os clientes visualizam o cardápio?', answer: 'Eles apontam a câmera do celular para o código na mesa e tocam na notificação para abrir a página do menu.' },
          { question: 'Posso usar um arquivo PDF?', answer: 'Sim, você pode colocar o link direto de qualquer PDF hospedado na web.' },
          { question: 'Qual o suporte mais indicado para mesas?', answer: 'Displays de acrílico 10x15 cm ou suportes de madeira gravada são os mais duráveis e fáceis de higienizar.' },
          { question: 'Consigo mudar preços sem reimprimir os códigos?', answer: 'Sim, se o código aponta para o seu site ou for um QR dinâmico, você edita online sem trocar as mesas.' },
          { question: 'Os códigos de cardápio expiram?', answer: 'Não, são códigos permanentes que continuam funcionando enquanto seu site estiver ativo.' },
          { question: 'Posso colocar o logotipo do meu restaurante?', answer: 'Sim, basta carregar seu logo e o sistema ajustará a correção de erros para Alto (30%).' }
        ],
        relatedTools: [
          { name: 'QR Code Wi-Fi', slug: 'wifi-qr-code-generator', description: 'Ofereça Wi-Fi na mesa para clientes.' },
          { name: 'QR Code Avaliações Google', slug: 'google-reviews-qr-code', description: 'Ganhe avaliações 5 estrelas na conta.' },
          { name: 'QR Code Link URL', slug: 'url-to-qr-code', description: 'Link para reservas online de mesas.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Compartilhe contatos do restaurante.' }
        ]
      };
    case 'it':
      return {
        slug: 'restaurant-menu-qr-code',
        qrTypeId: 'url',
        title: 'Generatore QR Code Menu Ristorante — Menu Digitali Contactless',
        description: 'Crea codici QR di menu per ristoranti, pub e pizzerie. Link a menu online o PDF. Download gratuito in vettoriale SVG e PNG.',
        h1: 'Generatore QR Code Menu Ristorante',
        subheadline: 'Crea menu digitali contactless per tavoli e banconi. Consultazione immediata su smartphone con una sola scansione.',
        heading: 'Menu Digitale per Ristoranti',
        subheading: 'Modernizza il servizio in sala con menu digitali ecologici, igienici ed economici.',
        overviewTitle: 'Cos\'è un Generatore di QR Code per Menu Ristorante?',
        overviewParagraphs: [
          'Un generatore di codici QR per menu crea un codice 2D da tavolo che apre la carta completa delle portate e dei vini direttamente sullo smartphone del cliente.',
          'I menu cartacei si rovinano facilmente e comportano continui costi di ristampa. I menu digitali azzerano le spese di stampa e permettono aggiornamenti istantanei dei piatti del giorno.',
          'Supporta collegamenti a file PDF e pagine web dedicate. Download in SVG vettoriale per incisioni su legno o espositori in plexiglas.'
        ],
        sectors: [
          { name: 'Ristoranti & Pizzerie', description: 'Eleganti espositori al tavolo per consultare il menu.', benefit: 'Risparmio totale sulle stampe cartacee.' },
          { name: 'Pub & Birrerie', description: 'Sottobicchieri e adesivi al bancone con birre alla spina.', benefit: 'Aggiornamento istantaneo delle birre disponibili.' },
          { name: 'Caffetterie & Pasticcerie', description: 'Sul banco per scegliere colazioni e dolci del giorno.', benefit: 'Riduce le code alla cassa.' },
          { name: 'Street Food & Food Truck', description: 'Pannelli esterni resistenti alla pioggia.', benefit: 'Ordinazioni veloci e senza code.' },
          { name: 'Hotel & Servizio in Camera', description: 'Sul comodino per ordinazioni di room service.', benefit: 'Incrementa il fatturato della ristorazione in camera.' },
          { name: 'Buffet & Banchetti', description: 'Davanti ai piatti con indicazione chiara degli allergeni.', benefit: 'Massima sicurezza per gli ospiti con intolleranze.' }
        ],
        howItWorks: [
          { title: '1. Inserisci il Link del Menu', description: 'Incolla l\'URL del tuo menu online o documento PDF.' },
          { title: '2. Personalizza lo Stile', description: 'Abbina i colori al locale e inserisci il tuo logo.' },
          { title: '3. Stampa ed Esponi', description: 'Esporta in formato vettoriale SVG per targhette o PNG.' }
        ],
        useCases: [
          { title: 'Espositori in Plexiglas al Tavolo', description: 'Supporti 10x15 cm al centro di ciascun tavolo.', example: 'Pizzeria con 35 tavoli attrezzati.' },
          { title: 'Sottobicchieri al Bancone', description: 'Sottobicchieri con codice per la carta dei cocktail.', example: 'Cocktail bar con 30 creazioni.' },
          { title: 'Adesivo in Vetrina', description: 'Per consentire ai passanti di consultare i prezzi a locale chiuso.', example: 'Ristorante che riceve prenotazioni per il giorno dopo.' },
          { title: 'Cartellino da Camera in Hotel', description: 'Sul comodino per cene tardive in camera.', example: 'Hotel che incrementa gli ordini serali.' }
        ],
        tips: [
          'Caricamento Veloce: Assicurati che la pagina del menu sia fluida su rete mobile.',
          'Materiali Igienizzabili: Usa supporti in plexiglas o legno trattato lavabili.',
          'Contrasto Elevato: Sfondo bianco per una lettura rapida a lume di candela.',
          'Invito Chiaro: Aggiungi "Inquadra con la fotocamera per visualizzare il menu".',
          'QR Dinamici: Consentono di cambiare il link web senza ristampare gli espositori.'
        ],
        technicalNotes: 'Standard ISO/IEC 18004 compatibile con tutti i browser per smartphone.',
        faqs: [
          { question: 'Come visualizzano i clienti il menu?', answer: 'Inquadrano il codice sul tavolo con la fotocamera e toccano il link per aprire la carta digitale sul browser.' },
          { question: 'Posso collegare un file PDF?', answer: 'Sì, puoi inserire il link diretto a qualsiasi PDF caricato online.' },
          { question: 'Qual è il supporto più resistente per i tavoli?', answer: 'I cavalletti in plexiglas 10x15 cm o i cubi in legno inciso al laser sono i più duraturi e facili da pulire.' },
          { question: 'Posso aggiornare i prezzi senza ristampare i codici?', answer: 'Sì, se il codice punta al tuo sito o è un QR dinamico, aggiorni i prezzi online senza toccare i tavoli.' },
          { question: 'I codici QR del menu hanno una scadenza?', answer: 'No, sono permanenti e rimangono attivi finché il tuo sito è online.' },
          { question: 'Posso inserire il logo del mio ristorante?', answer: 'Sì, carica il tuo logo e la correzione errori verrà impostata automaticamente su Alto (30%).' }
        ],
        relatedTools: [
          { name: 'QR Code WiFi', slug: 'wifi-qr-code-generator', description: 'Offri il WiFi ai clienti al tavolo.' },
          { name: 'QR Code Recensioni Google', slug: 'google-reviews-qr-code', description: 'Ottieni recensioni a 5 stelle sullo scontrino.' },
          { name: 'QR Code Link Web', slug: 'url-to-qr-code', description: 'Indirizza alla prenotazione tavoli online.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Condividi i recapiti del locale.' }
        ]
      };
    case 'hi':
      return {
        slug: 'restaurant-menu-qr-code',
        qrTypeId: 'url',
        title: 'रेस्टोरेंट मेन्यू QR कोड जेनरेटर — डिजिटल कॉन्टैक्टलेस मेन्यू',
        description: 'रेस्तरां, कैफ़े और ढाबों के लिए डिजिटल मेन्यू QR कोड बनाएं। ऑनलाइन मेन्यू या PDF लिंक जोड़ें। वेक्टर SVG और PNG डाउनलोड।',
        h1: 'रेस्टोरेंट मेन्यू QR कोड जेनरेटर',
        subheadline: 'टेबलों और काउंटरों के लिए कॉन्टैक्टलेस डिजिटल मेन्यू बनाएं। ग्राहक कैमरे से एक स्कैन में पूरा मेन्यू देख सकते हैं।',
        heading: 'डिजिटल रेस्टोरेंट मेन्यू QR कोड',
        subheading: 'कागज़ के मेन्यू कार्ड्स का खर्च खत्म करें और आधुनिक डिजिटल मेन्यू से ग्राहकों को सुविधा दें।',
        overviewTitle: 'रेस्टोरेंट मेन्यू QR कोड क्या है?',
        overviewParagraphs: [
          'रेस्टोरेंट मेन्यू QR कोड डाइनिंग टेबलों पर रखा जाने वाला 2D बारकोड है। जब ग्राहक टेबल पर बैठते हैं, तो वे अपने फोन के कैमरे से कोड स्कैन करके सीधे अपने मोबाइल पर भोजन, पेय पदार्थ और दैनिक विशेष थाली की सूची देख सकते हैं।',
          'कागज़ के मेन्यू कार्ड पर खाना या पानी गिरने से वे जल्दी गंदे और खराब हो जाते हैं, और नए दाम बदलने पर उन्हें बार-बार प्रिंट कराना महंगा पड़ता है। डिजिटल मेन्यू से पैसे की बचत होती है और आप कभी भी नए व्यंजन जोड़ सकते हैं।',
          'यह PDF मेन्यू और ऑनलाइन वेब मेन्यू दोनों का समर्थन करता है। टेबल स्टैंड के लिए आप हाई-क्वालिटी वेक्टर SVG या PNG डाउनलोड कर सकते हैं।'
        ],
        sectors: [
          { name: 'रेस्तरां व डाइनिंग हॉल', description: 'टेबलों पर एक्रिलिक स्टैंड लगाएं ताकि ग्राहक आसानी से मेन्यू देख सकें।', benefit: 'कागज़ के मेन्यू प्रिंट कराने का खर्च शून्य।' },
          { name: 'कैफ़े व कॉफ़ी शॉप्स', description: 'टेबल और काउंटर पर पेय और स्नैक्स सूची के साथ।', benefit: 'काउंटर पर लगने वाली भीड़ को कम करता है।' },
          { name: 'बार व लाउंज', description: 'टेबल कोस्टर और ड्रिंक मेन्यू के लिए।', benefit: 'कॉकटेल और बेवरेज सूची को कभी भी अपडेट करें।' },
          { name: 'फ़ूड ट्रक व फास्ट फ़ूड', description: 'काउंटर के बाहर लगा वॉटरप्रूफ मेन्यू बोर्ड।', benefit: 'ऑर्डर लेने की प्रक्रिया को तेज़ बनाता है।' },
          { name: 'होटल रूम सर्विस', description: 'कमरे में बेडसाइड टेबल पर खाना ऑर्डर करने हेतु।', benefit: 'होटल रूम सर्विस की बिक्री बढ़ाता है।' },
          { name: 'कैटरिंग व बैंक्वेट हॉल', description: 'भोजन काउंटरों पर सामग्री और एलर्जेन सूची प्रदर्शित करने हेतु।', benefit: 'ग्राहकों को पूरी पारदर्शिता देता है।' }
        ],
        howItWorks: [
          { title: '1. मेन्यू लिंक या PDF दर्ज करें', description: 'अपने ऑनलाइन मेन्यू का वेब एड्रेस या PDF लिंक पेस्ट करें।' },
          { title: '2. टेबल स्टैंड डिज़ाइन करें', description: 'रेस्तरां के इंटीरियर के अनुसार रंग चुनें और अपना लोगो लगाएं।' },
          { title: '3. डाउनलोड व प्रिंट करें', description: 'एक्रिलिक स्टैंड के लिए SVG या PNG फ़ाइल डाउनलोड करें।' }
        ],
        useCases: [
          { title: 'टेबलटॉप एक्रिलिक स्टैंड', description: 'प्रत्येक डाइनिंग टेबल के बीच में रखा गया 10x15 सेमी स्टैंड।', example: '30 टेबलों पर लगा डिजिटल मेन्यू स्टैंड।' },
          { title: 'बार टेबल कोस्टर', description: 'ड्रिंक्स मेन्यू के लिए टेबल कोस्टर पर प्रिंटेड कोड।', example: 'कैफ़े बेवरेज मेन्यू कार्ड।' },
          { title: 'रेस्तरां के शीशे पर स्टीकर', description: 'दुकान बंद होने पर भी बाहर से मेन्यू देखने के लिए।', example: 'अगले दिन के लिए ग्राहकों को आकर्षित करता है।' },
          { title: 'होटल रूम सर्विस कार्ड', description: 'होटल रूम में बेड के पास रखा हुआ मेन्यू कार्ड।', example: 'रूम सर्विस ऑर्डर बढ़ाने के लिए।' }
        ],
        tips: [
          'फ़ास्ट लोडिंग: सुनिश्चित करें कि मेन्यू मोबाइल इंटरनेट पर 2 सेकंड में खुल जाए।',
          'वॉटरप्रूफ स्टैंड: टेबल के लिए प्लास्टिक या एक्रिलिक स्टैंड का उपयोग करें।',
          'हाई कंट्रास्ट: डिम लाइट में भी स्कैनिंग के लिए सफ़ेद बैकग्राउंड रखें।',
          'स्पष्ट संदेश: स्टैंड पर "मेन्यू देखने के लिए फोन कैमरे से स्कैन करें" लिखें।',
          'डायनेमिक QR: भविष्य में मेन्यू बदलने पर बिना नया स्टैंड प्रिंट किए लिंक बदलें।'
        ],
        technicalNotes: 'ISO/IEC 18004 मानक सभी स्मार्टफोन ब्राउज़रों पर पूरी तरह समर्थित।',
        faqs: [
          { question: 'ग्राहक QR कोड से मेन्यू कैसे देखते हैं?', answer: 'वे अपने फोन का कैमरा कोड पर ले जाते हैं और स्क्रीन पर आने वाले लिंक पर क्लिक करते ही पूरा मेन्यू ब्राउज़र में खुल जाता है।' },
          { question: 'क्या मैं सीधे PDF फ़ाइल जोड़ सकता हूँ?', answer: 'हाँ, आप अपनी वेबसाइट या गूगल ड्राइव में रखी किसी भी PDF का लिंक इसमें डाल सकते हैं।' },
          { question: 'टेबल पर लगाने के लिए सबसे टिकाऊ स्टैंड कौन सा है?', answer: '10x15 सेमी का एक्रिलिक स्टैंड या लकड़ी का ब्लॉक सबसे टिकाऊ और साफ़ करने में आसान होता है।' },
          { question: 'क्या मैं बिना दोबारा प्रिंट किए दाम बदल सकता हूँ?', answer: 'हाँ, अगर कोड आपकी वेबसाइट या डायनेमिक QR पर है, तो आप ऑनलाइन दाम बदलेंगे और टेबलों पर वही नया मेन्यू दिखेगा।' },
          { question: 'क्या मेन्यू QR कोड कभी एक्सपायर होता है?', answer: 'नहीं, यह कोड हमेशा काम करता रहेगा जब तक आपका मेन्यू लिंक चालू है।' },
          { question: 'क्या मैं बीच में अपने रेस्तरां का लोगो लगा सकता हूँ?', answer: 'हाँ, आप अपना लोगो अपलोड कर सकते हैं और सिस्टम एरर करेक्शन को हाई (H) पर सेट कर देगा।' }
        ],
        relatedTools: [
          { name: 'Wi-Fi QR जेनरेटर', slug: 'wifi-qr-code-generator', description: 'ग्राहकों को टेबल पर वाई-फ़ाई कनेक्टिविटी दें।' },
          { name: 'गूगल रिव्यू QR कोड', slug: 'google-reviews-qr-code', description: 'बिल पर 5-स्टार गूगल रेटिंग प्राप्त करें।' },
          { name: 'वेबसाइट URL QR जेनरेटर', slug: 'url-to-qr-code', description: 'ऑनलाइन टेबल बुकिंग लिंक दें।' },
          { name: 'vCard विज़िटिंग कार्ड QR', slug: 'vcard-qr-code-generator', description: 'रेस्तरां का संपर्क कार्ड साझा करें।' }
        ]
      };
    default: // 'en'
      return {
        slug: 'restaurant-menu-qr-code',
        qrTypeId: 'url',
        title: 'Restaurant Menu QR Code Generator — Digital Contactless Menus',
        description: 'Generate free Restaurant Menu QR codes for dining tables, bars, and cafes. Link to digital menus or PDFs with instant vector SVG & PNG download.',
        h1: 'Restaurant Menu QR Code Generator',
        subheadline: 'Create contactless digital menu QR codes for dining tables, bar tops, and takeout windows. Instant mobile menu browsing in one scan.',
        heading: 'Restaurant Menu QR Code',
        subheading: 'Modernize tabletop dining with contactless, eco-friendly digital menus.',
        overviewTitle: 'What is a Restaurant Menu QR Code Generator?',
        overviewParagraphs: [
          'A Restaurant Menu QR code generator creates a scannable tabletop 2D barcode that opens a clean, mobile-optimized digital food and drink menu on the diner’s smartphone. When guests sit down at a table or bar stool, they simply point their phone camera at the tabletop standee to browse appetizers, entrees, daily specials, dietary allergen tags, and wine lists immediately.',
          'Traditional printed paper menus degrade quickly from food spills, require costly reprints whenever seasonal ingredients or prices fluctuate, and create operational bottlenecks when waitstaff must distribute and collect menus during peak dining hours. Digital menu QR codes eliminate printing expenses, allow instantaneous online menu updates, and provide guests with clear visual item photos and allergen filters.',
          'Our generator supports direct PDF menu links, digital food menu landing pages, and hosted restaurant portals. You can customize colors, add your restaurant logo, and export print-ready vector SVG files for tabletop acrylic stands, wood blocks, and window decals.'
        ],
        sectors: [
          { name: 'Restaurants & Bistros', description: 'Elegant tabletop acrylic stands or engraved wood blocks for contactless dining.', benefit: 'Eliminates paper printing costs and speeds up table turnover.' },
          { name: 'Bars & Craft Breweries', description: 'Coasters and bar-top decals showcasing rotating craft beer taps and cocktails.', benefit: 'Allows real-time drink menu adjustments.' },
          { name: 'Cafes & Bakeries', description: 'Countertop QR displays featuring fresh daily pastries and seasonal coffees.', benefit: 'Reduces morning checkout lines by letting patrons browse while in queue.' },
          { name: 'Food Trucks & Pop-Ups', description: 'High-contrast exterior window signboards next to order windows.', benefit: 'Streamlines ordering during busy festival rush hours.' },
          { name: 'Hotels & Room Service', description: 'Bedside nightstand cards and poolside cabana displays for in-room dining.', benefit: 'Increases hotel in-room dining food and beverage revenue.' },
          { name: 'Catering & Event Buffets', description: 'Buffet station placards displaying complete ingredients and allergen information.', benefit: 'Ensures peace of mind for guests with dietary restrictions.' }
        ],
        howItWorks: [
          { title: '1. Input Menu URL or PDF Link', description: 'Enter the web link to your hosted digital menu or cloud PDF document.' },
          { title: '2. Customize Tabletop Styling', description: 'Match colors to your interior dining decor and embed your restaurant logo.' },
          { title: '3. Download & Print Table Tents', description: 'Export vector SVG for laser engraving on wood or high-DPI PNG for acrylic stands.' }
        ],
        useCases: [
          { title: 'Tabletop Acrylic Standees', description: 'Compact 4x6 inch framed displays positioned in the center of dining tables.', example: 'Italian bistro equipping 30 indoor and patio tables.' },
          { title: 'Bar Top Drink Coasters', description: 'Absorbent coasters with QR codes linking directly to spirits and wine lists.', example: 'Cocktail lounge featuring 24 craft cocktail recipes.' },
          { title: 'Storefront Window Decals', description: 'Exterior window vinyls allowing pedestrians to browse menus after kitchen hours.', example: 'Downtown restaurant driving next-day reservations.' },
          { title: 'Hotel Bedside Placards', description: 'In-room laminated cards for late-night food and beverage room service.', example: 'Resort hotel boosting room service guest orders.' }
        ],
        tips: [
          'Fast Mobile Loading: Ensure your online menu page or PDF loads in under 2 seconds on 4G/5G mobile connections.',
          'Durable Waterproof Materials: Print on synthetic waterproof paper or enclose codes in sealed acrylic stands.',
          'High Optical Contrast: Maintain dark modules on a white background for easy scanning under dim candlelit dining ambiance.',
          'Clear Call-to-Action: Always include clear instructions like "Scan with your phone camera to view our food & drink menu".',
          'Dynamic QR for Future Updates: Use Dynamic QR codes if you plan to update menu web URLs without reprinting physical table standees.'
        ],
        technicalNotes: 'Standards Compliance: Full ISO/IEC 18004 compliance supporting all mobile web browsers on iOS and Android.',
        faqs: [
          { question: 'How do customers view our menu using the QR code?', answer: 'Guests simply open their native smartphone camera app, point it at the QR code on the table, and tap the link that appears on screen to view the digital menu.' },
          { question: 'Can I link directly to a PDF menu document?', answer: 'Yes! You can link directly to any PDF menu hosted on your website, Google Drive, Dropbox, or online restaurant ordering platform.' },
          { question: 'What is the most durable way to display QR codes on dining tables?', answer: '4x6 inch acrylic tabletop standees, laser-engraved wood blocks, and laminated vinyl stickers are the most durable and easy to sanitize between guests.' },
          { question: 'Can I change menu prices without reprinting the QR codes?', answer: 'Yes! If your QR code links to a web page or you use a Dynamic QR code, you can update your prices and menu items online anytime with zero reprinting needed.' },
          { question: 'Do restaurant menu QR codes ever expire?', answer: 'No. Static menu QR codes never expire and will remain active permanently as long as your destination menu web page remains live.' },
          { question: 'Can I add my restaurant logo to the center of the QR code?', answer: 'Yes. Upload your logo in PNG or SVG format. Our generator automatically applies Level H error correction (30%) so the code scans flawlessly with the logo embedded.' }
        ],
        relatedTools: [
          { name: 'Wi-Fi QR Generator', slug: 'wifi-qr-code-generator', description: 'Let dining guests join guest Wi-Fi without typing passwords.' },
          { name: 'Google Reviews QR', slug: 'google-reviews-qr-code', description: 'Collect 5-star customer reviews right on dining receipts.' },
          { name: 'URL QR Generator', slug: 'url-to-qr-code', description: 'Direct patrons to online table reservation forms.' },
          { name: 'vCard QR Generator', slug: 'vcard-qr-code-generator', description: 'Share restaurant catering and concierge contact cards.' }
        ]
      };
  }
}
