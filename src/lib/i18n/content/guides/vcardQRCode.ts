import type { Locale } from '../../config';
import type { GuideArticleData } from './types';

export function getVCardQRCodeData(locale: Locale): GuideArticleData {
  switch (locale) {
    case 'es':
      return {
        title: 'Cómo Crear un Código QR vCard para Tarjetas de Visita',
        description: 'Aprende a crear un código QR vCard para que guarden tus datos de contacto con 1 toque en su teléfono. Consejos de tamaño y acabado.',
        badge: 'Tutorial de Networking',
        h1: 'Cómo Crear un Código QR vCard para Tarjetas de Visita Digitales',
        subheadline: 'Convierte tus tarjetas impresas en contactos guardados al instante. Descubre el estándar RFC para vCards, resuelve problemas de alta densidad y crea tarjetas profesionales.',
        readingTime: '7 min de lectura',
        updatedDate: 'Septiembre 2026',
        quickTakeawaysTitle: 'Puntos Clave',
        quickTakeaways: [
          { label: 'Guardado en 1 Toque', text: 'Al escanear, el móvil abre automáticamente una ficha de contacto lista para guardar con nombre, teléfono y correo.' },
          { label: 'Densidad de Puntos', text: 'Una vCard con muchos datos genera miles de cuadritos diminutos; nunca la imprimas a menos de 3,0 × 3,0 cm.' },
          { label: 'Evita Brillos Metálicos', text: 'El estampado metalizado o foil refleja el flash y las luces, dificultando la lectura de la cámara.' },
        ],
        tocTitle: 'Tabla de Contenidos',
        sections: [
          {
            id: 'why-vcard',
            heading: '1. Por qué Usar un Código vCard en tus Tarjetas',
            paragraphs: [
              'Más del 88% de las tarjetas de visita de papel tradicionales terminan en la papelera en menos de una semana porque a nadie le gusta teclear números a mano.',
              'Un código QR vCard soluciona esto por completo: el cliente apunta la cámara y todos tus datos (nombre, cargo, empresa, teléfono, email y web) se añaden directamente a su agenda de contactos.',
            ],
          },
          {
            id: 'density',
            heading: '2. El Desafío de la Alta Densidad en Tarjetas',
            paragraphs: [
              'A diferencia de una URL corta, un archivo de contacto vCard completo suele tener más de 400 caracteres, lo que genera un código QR de Versión 10 a 14.',
              'Para asegurar que cualquier móvil pueda enfocarlo, mantén los datos esenciales e imprime el código con un tamaño mínimo de 3,0 × 3,0 cm en el reverso de la tarjeta.',
            ],
          },
        ],
        faqsTitle: 'Preguntas Frecuentes sobre vCard QR',
        faqs: [
          { question: '¿Qué ocurre cuando alguien escanea mi código vCard?', answer: 'Se abre directamente la aplicación de Contactos del teléfono con todos tus datos listos para guardar en un solo toque.' },
          { question: '¿Cuál es el tamaño mínimo para imprimirlo?', answer: 'Recomendamos un tamaño mínimo de 3,0 × 3,0 cm (1,2 × 1,2 pulgadas).' },
        ],
        ctaTitle: 'Genera tu Código vCard Gratis',
        ctaDesc: 'Crea tu tarjeta de contacto digital en segundos y descárgala en formato vectorial SVG para imprenta.',
        ctaButtonText: 'Crear Código vCard',
        ctaButtonLink: '/es/vcard-qr-code-generator',
      };

    case 'de':
      return {
        title: 'vCard-QR-Code für Visitenkarten erstellen',
        description: 'Kontaktdaten mit 1 Klick ins Smartphone-Adressbuch speichern. Leitfaden für RFC-konforme vCards, Mindestgrößen und Druckqualität.',
        badge: 'Networking-Leitfaden',
        h1: 'vCard-QR-Code erstellen: Digitale Visitenkarten per Scan',
        subheadline: 'Keine verlorenen Papierkarten mehr: So binden Sie Ihre Kontaktdaten in einen scanbaren vCard-Code für Visitenkarten, Lebensläufe und Messen ein.',
        readingTime: '7 Min. Lesezeit',
        updatedDate: 'September 2026',
        quickTakeawaysTitle: 'Das Wichtigste',
        quickTakeaways: [
          { label: '1-Klick-Speicherung', text: 'Scannen öffnet sofort die Kontakt-App mit Name, Telefon, E-Mail und Website.' },
          { label: 'Mindestdruckgröße', text: 'Aufgrund der hohen Datenmenge mindestens 3,0 × 3,0 cm groß drucken.' },
        ],
        tocTitle: 'Inhaltsübersicht',
        sections: [
          {
            id: 'why-vcard',
            heading: '1. Warum digitale vCard-Codes unverzichtbar sind',
            paragraphs: [
              'Herkömmliche Visitenkarten landen oft im Papierkorb. Mit einem vCard-Code speichert Ihr Gegenüber Ihre Daten sofort dauerhaft im Smartphone.',
            ],
          },
          {
            id: 'density',
            heading: '2. Datendichte und Scanbarkeit',
            paragraphs: [
              'Da vCards viele Zeilen Text umfassen, entsteht eine dichte Punktmatrix. Beschränken Sie sich auf die wichtigsten Kontaktdaten.',
            ],
          },
        ],
        faqsTitle: 'Häufige Fragen zu vCard-Codes',
        faqs: [
          { question: 'Braucht der Empfänger eine spezielle App?', answer: 'Nein, moderne Smartphones erkennen vCards direkt in der Kamera-App.' },
        ],
        ctaTitle: 'vCard-QR-Code jetzt kostenlos erstellen',
        ctaDesc: 'Generieren Sie gestochen scharfe Vektordateien für Ihre Druckerei.',
        ctaButtonText: 'vCard-Generator starten',
        ctaButtonLink: '/de/vcard-qr-code-generator',
      };

    case 'fr':
      return {
        title: 'Comment Créer un QR Code vCard pour Carte de Visite',
        description: 'Enregistrez vos coordonnées complètes dans le téléphone de vos contacts en 1 clic. Norme RFC, densité et conseils de finition d’impression.',
        badge: 'Tutoriel Networking',
        h1: 'Créer un QR Code vCard pour Carte de Visite Digitale',
        subheadline: 'Modernisez votre réseau professionnel : permettez à vos clients d’ajouter votre numéro, email et société à leurs contacts en un instant.',
        readingTime: '7 min de lecture',
        updatedDate: 'Septembre 2026',
        quickTakeawaysTitle: 'Points Clés',
        quickTakeaways: [
          { label: 'Sauvegarde 1 Clic', text: 'Le scan ouvre directement la fiche contact du smartphone.' },
          { label: 'Taille Recommandée', text: 'Imprimez à au moins 3,0 × 3,0 cm pour éviter les soucis de mise au point.' },
        ],
        tocTitle: 'Sommaire',
        sections: [
          {
            id: 'why-vcard',
            heading: '1. L’avantage de la vCard sur papier',
            paragraphs: [
              'Plus de 85% des cartes de visite sont jetées. Le QR vCard permet une sauvegarde pérenne dans le carnet d’adresses.',
            ],
          },
          {
            id: 'density',
            heading: '2. Gestion de la Densité Graphique',
            paragraphs: [
              'Limitez le contenu aux informations essentielles (Nom, Téléphone, Mail, Entreprise) et imprimez au dos en grand format.',
            ],
          },
        ],
        faqsTitle: 'Questions Fréquentes',
        faqs: [
          { question: 'Comment ça marche sur smartphone ?', answer: 'Le téléphone lit les balises vCard et propose d’enregistrer le contact immédiatement.' },
        ],
        ctaTitle: 'Générez votre vCard QR Gratuite',
        ctaDesc: 'Exportez au format SVG vectoriel idéal pour vos impressions professionnelles.',
        ctaButtonText: 'Créer ma vCard QR',
        ctaButtonLink: '/fr/vcard-qr-code-generator',
      };

    case 'pt':
      return {
        title: 'Como Criar um QR Code vCard para Cartão de Visita',
        description: 'Salve seus contatos direto na agenda do celular em 1 toque. Padrão RFC vCard, recomendações de tamanho e acabamento.',
        badge: 'Tutorial de Networking',
        h1: 'Como Criar um QR Code vCard para Cartões de Visita',
        subheadline: 'Transforme cartões de papel em contatos salvos no celular. Aprenda as melhores práticas para que seu código seja escaneado sem erros.',
        readingTime: '7 min de leitura',
        updatedDate: 'Setembro 2026',
        quickTakeawaysTitle: 'Destaques',
        quickTakeaways: [
          { label: 'Salvar em 1 Toque', text: 'O cliente salva nome, cargo, telefone e email direto nos contatos.' },
          { label: 'Tamanho Mínimo', text: 'Recomendado imprimir com no mínimo 3,0 × 3,0 cm.' },
        ],
        tocTitle: 'Índice',
        sections: [
          {
            id: 'why-vcard',
            heading: '1. Por que Usar vCard no Cartão',
            paragraphs: [
              'Evite que seu cartão seja perdido ou descartado. Facilite o contato salvando seus dados na hora.',
            ],
          },
          {
            id: 'density',
            heading: '2. Densidade dos Pontos',
            paragraphs: [
              'Mantenha apenas os dados de contato principais para evitar que a grade de pontos fique excessivamente compacta.',
            ],
          },
        ],
        faqsTitle: 'Perguntas Frequentes',
        faqs: [
          { question: 'Precisa de aplicativo extra?', answer: 'Não, o celular reconhece e abre a agenda nativamente.' },
        ],
        ctaTitle: 'Crie seu Código vCard Grátis',
        ctaDesc: 'Baixe em vetor SVG para envio direto à sua gráfica.',
        ctaButtonText: 'Gerar vCard',
        ctaButtonLink: '/pt/vcard-qr-code-generator',
      };

    case 'it':
      return {
        title: 'Come Creare un QR Code vCard per Biglietti da Visita',
        description: 'Fai salvare il tuo contatto nella rubrica dello smartphone con 1 tocco. Standard RFC, dimensioni minime e finiture ideali per la stampa.',
        badge: 'Tutorial Networking',
        h1: 'Come Creare un QR Code vCard per Biglietti da Visita Digitali',
        subheadline: 'Digitalizza i tuoi biglietti da visita cartacei: trasforma ogni incontro di lavoro in un contatto salvato in rubrica all’istante.',
        readingTime: '7 min di lettura',
        updatedDate: 'Settembre 2026',
        quickTakeawaysTitle: 'In Sintesi',
        quickTakeaways: [
          { label: 'Salvataggio Immediato', text: 'La scansione compila automaticamente nome, telefono, email e azienda.' },
          { label: 'Dimensioni di Stampa', text: 'Non scendere mai sotto i 3,0 × 3,0 cm per evitare difficoltà di messa a fuoco.' },
        ],
        tocTitle: 'Indice',
        sections: [
          {
            id: 'why-vcard',
            heading: '1. I Vantaggi della vCard Digitale',
            paragraphs: [
              'Niente più errori di trascrizione manuale: il cliente inquadra il retro del biglietto e ti memorizza in rubrica in un secondo.',
            ],
          },
          {
            id: 'density',
            heading: '2. Gestione della Densità della Matrice',
            paragraphs: [
              'Le vCard contengono molti caratteri: prediligi stampe opache ad alto contrasto per favorire la messa a fuoco ottica.',
            ],
          },
        ],
        faqsTitle: 'Domande Frequenti',
        faqs: [
          { question: 'Funziona su tutti gli smartphone?', answer: 'Sì, è uno standard riconosciuto da iOS e Android.' },
        ],
        ctaTitle: 'Crea il Tuo Codice vCard Gratuito',
        ctaDesc: 'Scarica file vettoriali SVG ad altissima definizione per la tipografia.',
        ctaButtonText: 'Apri Generatore vCard',
        ctaButtonLink: '/it/vcard-qr-code-generator',
      };

    case 'hi':
      return {
        title: 'वी-कार्ड क्यूआर कोड कैसे बनाएं: डिजिटल विजिटिंग कार्ड',
        description: '1-टैप में मोबाइल कॉन्टैक्ट्स में नंबर सेव कराएं। विजिटिंग कार्ड के लिए सही साइज, डेंसिटी और प्रिंटिंग टिप्स।',
        badge: 'नेटवर्किंग गाइड',
        h1: 'वी-कार्ड डिजिटल बिजनेस कार्ड क्यूआर कोड कैसे बनाएं',
        subheadline: 'कागजी बिजनेस कार्ड को डिजिटल बनाएं: ग्राहक को नंबर टाइप करने की जरूरत नहीं, बस कैमरा दिखाएं और फोन में सेव हो जाएगा।',
        readingTime: '7 मिनट पठन',
        updatedDate: 'सितंबर 2026',
        quickTakeawaysTitle: 'मुख्य लाभ',
        quickTakeaways: [
          { label: '1-टैप सेव', text: 'स्कैन करते ही नाम, फोन, ईमेल और कंपनी का नाम सीधे मोबाइल फोनबुक में सेव हो जाता है।' },
          { label: 'प्रिंट साइज', text: 'ज्यादा जानकारी होने के कारण कोड को कम से कम 3.0 × 3.0 सेमी आकार में प्रिंट करें।' },
        ],
        tocTitle: 'विषय सूची',
        sections: [
          {
            id: 'why-vcard',
            heading: '1. विजिटिंग कार्ड पर vCard क्यूआर क्यों जरूरी है',
            paragraphs: [
              'अधिकांश पारंपरिक विजिटिंग कार्ड खो जाते हैं क्योंकि लोग नंबर टाइप करने में आलस करते हैं। vCard कोड से तुरंत फोन में नंबर सुरक्षित हो जाता है।',
            ],
          },
          {
            id: 'density',
            heading: '2. डेंसिटी और सही प्रिंटिंग आकार',
            paragraphs: [
              'केवल जरूरी संपर्क जानकारी (नाम, मोबाइल, ईमेल, कंपनी) दर्ज करें ताकि बिंदु बहुत छोटे न हों और आसानी से स्कैन हो सकें।',
            ],
          },
        ],
        faqsTitle: 'सामान्य प्रश्न',
        faqs: [
          { question: 'क्या इसके लिए कोई ऐप चाहिए?', answer: 'नहीं, फोन का साधारण कैमरा इसे सीधे पढ़ लेता है।' },
        ],
        ctaTitle: 'अपना फ्री vCard कोड बनाएं',
        ctaDesc: 'प्रिंटिंग के लिए हाई-क्वालिटी SVG फाइल तुरंत डाउनलोड करें।',
        ctaButtonText: 'vCard जनरेटर खोलें',
        ctaButtonLink: '/hi/vcard-qr-code-generator',
      };

    case 'en':
    default:
      return {
        title: 'How to Create a vCard QR Code',
        description: 'Learn how to create a vCard QR code for digital business cards. Step-by-step setup, scannability guidelines, and size recommendations.',
        badge: 'Networking Tutorial',
        h1: 'How to Create a vCard Digital Business Card QR Code',
        subheadline: 'Transform standard paper business cards into 1-tap phonebook saves. Learn the technical formatting of RFC vCard standards, solve high-density scannability challenges, and design print-ready luxury cards.',
        readingTime: '7 min read',
        updatedDate: 'September 2026',
        quickTakeawaysTitle: 'Quick Takeaways',
        quickTakeaways: [
          { label: '1-Tap Contact Saving', text: 'Scanning natively opens an iOS or Android contact card prefilled with name, phone, email, and company.' },
          { label: 'High-Density Challenge', text: 'Because vCards contain 400+ characters, never print smaller than 3.0 x 3.0 cm to avoid unreadable micro-modules.' },
          { label: 'Matte Finish vs Metallic Foil', text: 'Avoid reflective foil stamping over modules; choose matte lamination to eliminate optical camera glare.' },
        ],
        tocTitle: 'Table of Contents',
        sections: [
          {
            id: 'why-vcard',
            heading: '1. The Death of Paper Business Cards',
            paragraphs: [
              'Over 88% of paper business cards are discarded within one week because recipients dread manually typing in phone numbers and email addresses.',
              'A vCard QR code bridges this gap: a prospective client points their smartphone camera at your card and taps Save Contact in less than two seconds.',
            ],
          },
          {
            id: 'density-challenge',
            heading: '2. The High-Density Scannability Challenge',
            paragraphs: [
              'Unlike a short 25-character website link, a full vCard payload easily contains 400 to 700 characters, requiring a dense Version 10-14 QR matrix.',
              'Keep contact fields focused (Name, Mobile, Work Email, Company, and Website) and always print at least 3.0 x 3.0 cm (1.2 x 1.2 in) on the back of the card.',
            ],
          },
        ],
        faqsTitle: 'Frequently Asked Questions',
        faqs: [
          { question: 'What happens when someone scans a vCard QR code?', answer: 'A native contact preview opens allowing 1-tap saving directly to phone address books.' },
          { question: 'What is the minimum physical print size?', answer: 'We recommend at least 3.0 x 3.0 cm (1.2 x 1.2 inches).' },
        ],
        ctaTitle: 'Create Your vCard QR Code in Seconds',
        ctaDesc: 'Generate an RFC-compliant digital business card QR code for business cards, resumes, and conferences. Export in crisp Vector SVG.',
        ctaButtonText: 'Create vCard QR Code',
        ctaButtonLink: '/vcard-qr-code-generator',
        ctaSecondaryText: 'Digital Business Card',
        ctaSecondaryLink: '/digital-business-card',
      };
  }
}
