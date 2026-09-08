import type { Locale } from '../../config';
import type { GuideArticleData } from './types';

export function getRestaurantQRCodeData(locale: Locale): GuideArticleData {
  switch (locale) {
    case 'es':
      return {
        title: 'Códigos QR para Menús de Restaurantes: Guia',
        description: 'Aprende a usar códigos QR para cartas digitales, soportes de mesa, evitar reflejos de luz y captar reseñas de Google en tu restaurante.',
        badge: 'Guía de Hostelería',
        h1: 'Cómo Usar Códigos QR para Menús en Restaurantes y Facturar Más',
        subheadline: 'Acelera la rotación de mesas, elimina los costes de reimpresión de cartas de papel, actualiza precios en tiempo real y consigue cientos de reseñas positivas en Google.',
        readingTime: '8 min de lectura',
        updatedDate: 'Septiembre 2026',
        quickTakeawaysTitle: 'Puntos Clave',
        quickTakeaways: [
          { label: 'Ahorro Inmediato', text: 'Ahorra entre 1.500 € y 3.000 € al año en impresión y reposición de cartas manchadas o deterioradas.' },
          { label: 'Rotación 12 Min Más Rápida', text: 'Los comensales ven las bebidas y platos al sentarse antes de que el camarero traiga el agua.' },
          { label: 'Evita PDFs Pesados', text: 'Usa páginas web adaptadas al móvil en lugar de PDFs de 40 MB que exigen pellizcar la pantalla.' },
          { label: 'Estrategia 3 en 1', text: 'Menú en mesa + Código QR de Reseñas de Google en el portacuentas + Descuento en bolsas de reparto.' },
        ],
        tocTitle: 'Tabla de Contenidos',
        sections: [
          {
            id: 'why-restaurants',
            heading: '1. Beneficios Económicos y Operativos para Hostelería',
            paragraphs: [
              'Las cartas físicas de papel sufren manchas continuas de aceite, vino y agua, exigiendo costosas reimpresiones constantes.',
              'Con menús digitales mediante código QR dinámico, los restaurantes pueden cambiar precios según la inflación o desactivar un plato agotado un sábado por la noche en 10 segundos.',
            ],
          },
          {
            id: 'materials',
            heading: '2. Materiales y Soportes de Mesa Recomendados',
            paragraphs: [
              'Soportes acrílicos verticales de 10 × 15 cm: Ideales para bistrós y cafeterías.',
              'Bloques de madera grabados a láser: Perfectos para cervecerías artesanales y restaurantes rústicos.',
              'Placas de metal cepillado: Para restaurantes de alta gastronomía.',
              'Adhesivos de vinilo mate impermeables: Resistentes a productos de limpieza y derrames en mesas de terraza.',
            ],
          },
        ],
        faqsTitle: 'Preguntas Frecuentes: QR en Restaurantes',
        faqs: [
          { question: '¿Por qué evitar enlazar a un archivo PDF?', answer: 'Los PDFs tardan en cargar en conexiones móviles débiles y resultan incómodos de leer en pantallas de smartphone.' },
          { question: '¿Qué tamaño debe tener el código en la mesa?', answer: 'Imprime el código con un tamaño de al menos 4,0 × 4,0 cm (1,6 × 1,6 pulgadas).' },
        ],
        ctaTitle: 'Crea el Menú QR para tu Restaurante',
        ctaDesc: 'Diseña códigos de alta resolución con los colores de tu marca y listos para soportes de mesa.',
        ctaButtonText: 'Crear Menú QR',
        ctaButtonLink: '/es/restaurant-menu-qr-code',
        ctaSecondaryText: 'QR para Reseñas de Google',
        ctaSecondaryLink: '/es/google-reviews-qr-code',
      };

    case 'de':
      return {
        title: 'QR-Codes für Restaurant-Speisekarten: Leitfaden',
        description: 'Digitale Speisekarten für Gastronomie: Druckkosten senken, Tischtaktung optimieren, Reflexionen vermeiden und Google-Bewertungen steigern.',
        badge: 'Gastronomie-Leitfaden',
        h1: 'QR-Codes für Restaurant-Speisekarten: Mehr Umsatz & weniger Kosten',
        subheadline: 'Steigern Sie die Effizienz Ihres Restaurantbetriebs: Blitzschnelle Menü-Updates, kürzere Wartezeiten am Tisch und automatische 5-Sterne-Google-Bewertungen.',
        readingTime: '8 Min. Lesezeit',
        updatedDate: 'September 2026',
        quickTakeawaysTitle: 'Vorteile auf einen Blick',
        quickTakeaways: [
          { label: '0 € Druckkosten', text: 'Kein teures Nachdrucken und Laminieren verschmutzter Speisekarten mehr.' },
          { label: 'Schnellere Tischtaktung', text: 'Gäste wählen Getränke und Vorspeisen sofort bei Ankunft aus.' },
        ],
        tocTitle: 'Inhalt',
        sections: [
          {
            id: 'why-restaurants',
            heading: '1. Warum Gastronomen auf QR-Menüs setzen',
            paragraphs: [
              'Tageskarten und Preisänderungen lassen sich in Sekunden digital anpassen, ohne dass auch nur ein Blatt Papier gedruckt werden muss.',
            ],
          },
          {
            id: 'tabletop-materials',
            heading: '2. Tischaufsteller und Materialien',
            paragraphs: [
              'Acryl-Aufsteller (10 × 15 cm) oder lasergraviertes Holz für die Terrasse. Wichtig: Matte Oberflächen wählen, um störende Lichtreflexe von Kerzen zu vermeiden.',
            ],
          },
        ],
        faqsTitle: 'Häufige Fragen zu Gastro-QR-Codes',
        faqs: [
          { question: 'Warum sollte man keine PDF-Dateien verlinken?', answer: 'Große PDFs laden auf Smartphones langsam und erfordern mühsames Zoomen.' },
        ],
        ctaTitle: 'Speisekarten-QR-Code kostenlos erstellen',
        ctaDesc: 'Erstellen Sie druckfertige Menü-Codes für Ihre Tische in wenigen Augenblicken.',
        ctaButtonText: 'Speisekarten-Code erstellen',
        ctaButtonLink: '/de/restaurant-menu-qr-code',
      };

    case 'fr':
      return {
        title: 'QR Codes pour Menus de Restaurant : Guide Complet',
        description: 'Révolutionnez le service en salle : menus sans contact, mise à jour des prix en direct, supports de table et avis Google 5 étoiles.',
        badge: 'Guide Restauration',
        h1: 'Comment Utiliser les QR Codes pour vos Menus de Restaurant',
        subheadline: 'Accélérez la rotation de vos tables, éliminez les frais d’impression de cartes et collectez des avis Google valorisants auprès de vos clients.',
        readingTime: '8 min de lecture',
        updatedDate: 'Septembre 2026',
        quickTakeawaysTitle: 'Points Essentiels',
        quickTakeaways: [
          { label: 'Économies Réelles', text: 'Économisez des milliers d’euros en évitant les réimpressions de cartes tachées.' },
          { label: 'Rotation Rapide', text: 'Les clients consultent la carte dès leur installation à table.' },
        ],
        tocTitle: 'Sommaire',
        sections: [
          {
            id: 'why-restaurants',
            heading: '1. Pourquoi Choisir le Menu QR Code',
            paragraphs: [
              'Modifiez un plat du jour ou ajustez un tarif en quelques clics sans toucher aux supports imprimés posés sur les tables.',
            ],
          },
          {
            id: 'tabletop-materials',
            heading: '2. Choix des Chevalets et Supports de Table',
            paragraphs: [
              'Chevalets en acrylique transparent ou socles en bois naturel. Privilégiez un vernis mat pour limiter les reflets d’ambiance tamisée.',
            ],
          },
        ],
        faqsTitle: 'Questions Fréquentes',
        faqs: [
          { question: 'Quelle est la taille recommandée sur table ?', answer: 'Nous recommandons au moins 4,0 × 4,0 cm pour une lecture aisée sous un éclairage tamisé.' },
        ],
        ctaTitle: 'Créez votre Menu QR dès Maintenant',
        ctaDesc: 'Téléchargez vos codes en haute résolution prêts pour vos chevalets de table.',
        ctaButtonText: 'Créer le Menu QR',
        ctaButtonLink: '/fr/restaurant-menu-qr-code',
      };

    case 'pt':
      return {
        title: 'QR Codes para Cardápios de Restaurantes: Guia',
        description: 'Modernize seu atendimento: cardápios digitais, atualização ágil de preços, materiais para mesas e captação de avaliações no Google.',
        badge: 'Guia de Gastronomia',
        h1: 'Como Usar QR Codes em Cardápios e Alavancar seu Restaurante',
        subheadline: 'Elimine os custos de impressão de cardápios de papel, agilize o atendimento nas mesas e conquiste centenas de avaliações 5 estrelas no Google.',
        readingTime: '8 min de leitura',
        updatedDate: 'Setembro 2026',
        quickTakeawaysTitle: 'Resumo de Benefícios',
        quickTakeaways: [
          { label: 'Economia Total', text: 'Zere gastos com laminação e reimpressão de cardápios desgastados.' },
          { label: 'Giro Rápido', text: 'Pedidos adiantados em até 10 minutos por mesa.' },
        ],
        tocTitle: 'Índice',
        sections: [
          {
            id: 'why-restaurants',
            heading: '1. O Fim do Cardápio de Papel',
            paragraphs: [
              'Troque pratos esgotados ou atualize a carta de vinhos no sistema sem precisar reimprimir nada nas mesas.',
            ],
          },
          {
            id: 'tabletop-materials',
            heading: '2. Materiais para Expositores de Mesa',
            paragraphs: [
              'Displays de acrílico ou bases de madeira gravadas. Evite plásticos muito brilhantes para não refletir a luz de velas ou luminárias.',
            ],
          },
        ],
        faqsTitle: 'Perguntas Frequentes',
        faqs: [
          { question: 'Qual tamanho ideal para a mesa?', answer: 'Recomendamos imprimir com no mínimo 4,0 × 4,0 cm.' },
        ],
        ctaTitle: 'Crie o QR Code do seu Cardápio',
        ctaDesc: 'Gere códigos personalizados com a identidade visual do seu restaurante.',
        ctaButtonText: 'Gerar Cardápio QR',
        ctaButtonLink: '/pt/restaurant-menu-qr-code',
      };

    case 'it':
      return {
        title: 'Codici QR per Menu di Ristoranti: Guida Completa',
        description: 'Menu digitali per bar e ristoranti: azzera le spese di ristampa, velocizza il servizio al tavolo e ottieni recensioni a 5 stelle su Google.',
        badge: 'Guia Ristorazione',
        h1: 'Come Usare i Codici QR per i Menu dei Ristoranti',
        subheadline: 'Migliora l’efficienza della tua sala: aggiorna i prezzi in tempo reale, abbatti le spese di tipografia e fidelizza i clienti con recensioni Google.',
        readingTime: '8 min de lettura',
        updatedDate: 'Settembre 2026',
        quickTakeawaysTitle: 'Punti Chiave',
        quickTakeaways: [
          { label: 'Zero Spese di Stampa', text: 'Niente più menu plastificati unti o rovinati da sostituire continuamente.' },
          { label: 'Tavoli Più Veloci', text: 'I clienti scelgono bevande e portate non appena si accomodano.' },
        ],
        tocTitle: 'Indice',
        sections: [
          {
            id: 'why-restaurants',
            heading: '1. I Vantaggi del Menu Digitale per la Ristorazione',
            paragraphs: [
              'Con i menu QR dinamici puoi variare i piatti speciali del giorno o rimuovere un piatto esaurito in cucina in dieci secondi.',
            ],
          },
          {
            id: 'tabletop-materials',
            heading: '2. Supporti da Tavolo e Illuminazione',
            paragraphs: [
              'Espositori in plexiglass opaco o blocchetti in legno intagliati. Una finitura antiriflesso garantisce scansioni veloci anche a lume di candela.',
            ],
          },
        ],
        faqsTitle: 'Domande Frequenti sui Menu QR',
        faqs: [
          { question: 'Che dimensioni deve avere il QR code sul tavolo?', answer: 'Consigliamo una misura di almeno 4,0 × 4,0 cm.' },
        ],
        ctaTitle: 'Crea Subito il Menu QR per il Tuo Locale',
        ctaDesc: 'Scarica file vettoriali pronti per i tuoi segnatavolo ed espositori.',
        ctaButtonText: 'Crea Menu QR Gratis',
        ctaButtonLink: '/it/restaurant-menu-qr-code',
      };

    case 'hi':
      return {
        title: 'रेस्टोरेंट मेनू के लिए क्यूआर कोड: संपूर्ण गाइड',
        description: 'डिजिटल मेनू कार्ड से रेस्टोरेंट का खर्च घटाएं, टेबल पर सर्विस तेज करें और गूगल पर 5-स्टार कस्टमर रेटिंग हासिल करें।',
        badge: 'रेस्टोरेंट गाइड',
        h1: 'रेस्टोरेंट मेनू के लिए क्यूआर कोड का उपयोग और बिक्री बढ़ाना',
        subheadline: 'कागजी मेनू के बार-बार छपने का खर्च खत्म करें: ग्राहकों को मोबाइल पर सुंदर डिजिटल मेनू दिखाएं और टेबल रोटेशन तेज करें।',
        readingTime: '8 मिनट पठन',
        updatedDate: 'सितंबर 2026',
        quickTakeawaysTitle: 'मुख्य लाभ',
        quickTakeaways: [
          { label: 'जीरो प्रिंटिंग खर्च', text: 'हर बार कीमतें बदलने पर नए मेनू कार्ड छपवाने का हजारों रुपयों का खर्च बचता है।' },
          { label: '10 मिनट तेज सर्विस', text: 'टेबल पर बैठते ही ग्राहक तुरंत क्यूआर स्कैन करके मेनू देखना शुरू कर देते हैं।' },
        ],
        tocTitle: 'विषय सूची',
        sections: [
          {
            id: 'why-restaurants',
            heading: '1. रेस्टोरेंट में क्यूआर मेनू के फायदे',
            paragraphs: [
              'कागजी मेनू पानी या खाने से गंदे हो जाते हैं। टेबल पर रखा एक्रिलिक क्यूआर स्टैंड सालों साल साफ रहता है और मोबाइल पर हमेशा अपडेटेड रेट दिखाता है।',
            ],
          },
          {
            id: 'tabletop-materials',
            heading: '2. टेबल पर रखने के लिए सही सामग्री',
            paragraphs: [
              '10 × 15 सेमी के एक्रिलिक टेबल स्टैंड या लकड़ी के ब्लॉक सबसे टिकाऊ होते हैं। ध्यान रहे कि बहुत ज्यादा चमकीली शीट न लगाएं ताकि लाइट रिफ्लेक्ट न हो।',
            ],
          },
        ],
        faqsTitle: 'सामान्य प्रश्न',
        faqs: [
          { question: 'टेबल पर क्यूआर कोड का सही साइज क्या होना चाहिए?', answer: 'टेबल पर कम से कम 4.0 × 4.0 सेमी साइज में प्रिंट करवाएं ताकि मंद रोशनी में भी आसानी से स्कैन हो सके।' },
        ],
        ctaTitle: 'अपने रेस्टोरेंट का मेनू क्यूआर अभी बनाएं',
        ctaDesc: 'अपनी दुकान या रेस्टोरेंट के लिए हाई-क्वालिटी क्यूआर कोड मुफ्त में तैयार करें।',
        ctaButtonText: 'मेनू क्यूआर बनाएं',
        ctaButtonLink: '/hi/restaurant-menu-qr-code',
      };

    case 'en':
    default:
      return {
        title: 'QR Codes for Restaurant Menus',
        description: 'A complete hospitality guide on creating contactless QR menus, tabletop display recommendations, dynamic price updates, and Google review collection.',
        badge: 'Hospitality Playbook',
        h1: 'How to Use QR Codes for Restaurant Menus & Boost Revenue',
        subheadline: 'Transform dining operations with contactless digital menus, accelerate table turnover times, update seasonal pricing effortlessly, and capture hundreds of 5-star Google reviews.',
        readingTime: '8 min read',
        updatedDate: 'September 2026',
        quickTakeawaysTitle: 'Quick Takeaways',
        quickTakeaways: [
          { label: 'Zero Reprint Costs', text: 'Save $1,500 to $3,500 annually replacing stained, torn paper menus with instantly updatable digital links.' },
          { label: '12-Minute Faster Table Turns', text: 'Diners browse appetizers and drinks the moment they are seated, ordering significantly sooner.' },
          { label: 'Avoid 50MB Clunky PDFs', text: 'Always route to a lightweight responsive mobile menu page instead of frustrating pinch-and-zoom PDFs.' },
          { label: '3-in-1 Revenue Strategy', text: 'Tabletop menu + Google Reviews code on the bill folder + Takeaway bag re-order loyalty discount stickers.' },
        ],
        tocTitle: 'Table of Contents',
        sections: [
          {
            id: 'why-restaurants',
            heading: '1. The Financial and Operational Benefits',
            paragraphs: [
              'While QR code menus surged as a sanitary measure during the pandemic, smart restaurateurs quickly recognized that they eliminate the biggest operational profit leaks in food and beverage.',
              'A 50-seat bistro spends thousands of dollars annually replacing damaged paper menus. With dynamic QR menus, chefs can adjust prices for inflation or 86 a sold-out seafood special on Saturday night in ten seconds flat.',
            ],
          },
          {
            id: 'materials',
            heading: '2. Tabletop Display Engineering & Materials',
            paragraphs: [
              'Upright Acrylic Table Tents (10 x 15 cm): Double-sided display for menus and seasonal drink specials.',
              'Laser-Engraved Wooden Blocks: Sturdy, rustic, windproof bases for craft breweries and patio dining.',
              'Brushed Metal Tent Cards: Luxury etched brass or steel for fine dining table aesthetics.',
              'Waterproof Matte Vinyl Decals: Durable table corner stickers resistant to sanitizers and spills.',
            ],
          },
        ],
        faqsTitle: 'Frequently Asked Questions',
        faqs: [
          { question: 'Why should restaurants use QR code menus instead of paper?', answer: 'They eliminate printing costs, allow real-time menu updates, speed up ordering, and increase check sizes.' },
          { question: 'What size should a QR code be on a dining table?', answer: 'Print at least 4.0 x 4.0 cm (1.6 x 1.6 inches) to ensure rapid scanning in ambient evening lighting.' },
        ],
        ctaTitle: 'Launch Your Restaurant QR Code Menu Today',
        ctaDesc: 'Create print-ready digital menu barcodes in seconds. Export in high-res PNG or Vector SVG for table standees.',
        ctaButtonText: 'Create Restaurant Menu QR',
        ctaButtonLink: '/restaurant-menu-qr-code',
        ctaSecondaryText: 'Google Review QR',
        ctaSecondaryLink: '/google-reviews-qr-code',
      };
  }
}
