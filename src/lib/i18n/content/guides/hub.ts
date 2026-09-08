import type { Locale } from '../../config';
import type { GuideHubData } from './types';

export function getGuideHubData(locale: Locale): GuideHubData {
  switch (locale) {
    case 'es':
      return {
        title: 'Guías y Tutoriales de Códigos QR | Mejores Prácticas',
        description: 'Domina las mejores prácticas para crear códigos QR: estáticos vs dinámicos, WiFi, tarjetas vCard, menús de restaurantes y reglas de escaneo.',
        badge: 'Centro de Conocimiento',
        h1: 'Guías y Tutoriales de Códigos QR',
        subheadline: 'Guías prácticas, explicaciones técnicas y consejos de diseño para aprovechar al máximo tus códigos QR en cualquier soporte físico o digital.',
        guides: [
          {
            slug: 'what-is-a-qr-code',
            title: '¿Qué es un Código QR? Guía Completa y Anatomía Técnica',
            desc: 'Aprende cómo funciona la matriz bidimensional, niveles de corrección Reed-Solomon y cómo leen los sensores de smartphones.',
            readTime: '7 min de lectura',
            icon: '💡',
          },
          {
            slug: 'static-vs-dynamic-qr',
            title: 'Códigos QR Estáticos vs Dinámicos: ¿Cuál Deberías Elegir?',
            desc: 'Compara cargas permanentes sin conexión con redirecciones editables en tiempo real, estadísticas de escaneo y costes.',
            readTime: '8 min de lectura',
            icon: '⚡',
          },
          {
            slug: 'how-to-create-a-wifi-qr-code',
            title: 'Cómo Crear un Código QR para Wi-Fi: Conexión Instantánea',
            desc: 'Guía paso a paso para compartir redes WPA2/WPA3 en hoteles, cafeterías y oficinas sin revelar contraseñas por escrito.',
            readTime: '6 min de lectura',
            icon: '📶',
          },
          {
            slug: 'how-to-create-a-vcard-qr-code',
            title: 'Cómo Crear un Código QR vCard para Tarjetas de Visita',
            desc: 'Codifica datos de contacto compatibles con RFC para guardar en la agenda del teléfono en 1 toque y optimiza la densidad.',
            readTime: '7 min de lectura',
            icon: '👤',
          },
          {
            slug: 'how-to-use-qr-codes-for-restaurants',
            title: 'Cómo Usar Códigos QR para Menús en Restaurantes',
            desc: 'Aumenta la rotación de mesas, elimina costes de reimpresión de cartas y captura reseñas de Google 5 estrellas en mesa.',
            readTime: '8 min de lectura',
            icon: '🍽️',
          },
        ],
      };

    case 'de':
      return {
        title: 'QR-Code-Ratgeber & Tutorials | Best Practices',
        description: 'Meistern Sie Best Practices für QR-Codes: Statisch vs. Dynamisch, WLAN-Gastzugang, digitale vCard-Visitenkarten und Restaurant-Karten.',
        badge: 'Wissens-Center',
        h1: 'QR-Code-Anleitungen & Tutorials',
        subheadline: 'Praxisnahe Leitfäden, technische Hintergründe und Gestaltungstipps für maximale Scan-Raten und erfolgreiche Kampagnen.',
        guides: [
          {
            slug: 'what-is-a-qr-code',
            title: 'Was ist ein QR-Code? Vollständige Anleitung & Anatomie',
            desc: 'Verstehen Sie die 2D-Matrix, Reed-Solomon-Fehlerkorrektur und wie Smartphone-Kameras Codes blitzschnell erfassen.',
            readTime: '7 Min. Lesezeit',
            icon: '💡',
          },
          {
            slug: 'static-vs-dynamic-qr',
            title: 'Statische vs. dynamische QR-Codes: Der große Vergleich',
            desc: 'Dauerhafte Offline-Inhalte vs. editierbare Weiterleitungen mit Scan-Statistiken und lebenslanger Gültigkeit.',
            readTime: '8 Min. Lesezeit',
            icon: '⚡',
          },
          {
            slug: 'how-to-create-a-wifi-qr-code',
            title: 'WLAN-QR-Code erstellen: Passwortloses Gäste-WLAN',
            desc: 'Schritt-für-Schritt-Anleitung für Hotels, Restaurants und Büros: WPA3/WPA2 ohne lästiges Eintippen.',
            readTime: '6 Min. Lesezeit',
            icon: '📶',
          },
          {
            slug: 'how-to-create-a-vcard-qr-code',
            title: 'vCard-QR-Code für digitale Visitenkarten erstellen',
            desc: 'RFC-konforme Kontaktdaten mit einem Klick ins Smartphone-Adressbuch speichern und Mikromodule vermeiden.',
            readTime: '7 Min. Lesezeit',
            icon: '👤',
          },
          {
            slug: 'how-to-use-qr-codes-for-restaurants',
            title: 'QR-Codes für digitale Speisekarten in der Gastronomie',
            desc: 'Druckkosten senken, Tischtaktung um 12 Minuten beschleunigen und 5-Sterne-Google-Bewertungen sammeln.',
            readTime: '8 Min. Lesezeit',
            icon: '🍽️',
          },
        ],
      };

    case 'fr':
      return {
        title: 'Guides et Tutoriels QR Code | Bonnes Pratiques',
        description: 'Maîtrisez les codes QR : statiques vs dynamiques, Wi-Fi invité, cartes de visite vCard, menus de restaurant et scannabilité.',
        badge: 'Centre de Connaissances',
        h1: 'Guides et Tutoriels QR Code',
        subheadline: 'Guides pratiques, décryptages techniques et conseils de design pour maximiser l’efficacité de vos QR codes.',
        guides: [
          {
            slug: 'what-is-a-qr-code',
            title: 'Qu’est-ce qu’un QR Code ? Guide Complet et Anatomie',
            desc: 'Comprendre la matrice 2D, les niveaux de correction d’erreurs Reed-Solomon et le fonctionnement des caméras mobiles.',
            readTime: '7 min de lecture',
            icon: '💡',
          },
          {
            slug: 'static-vs-dynamic-qr',
            title: 'QR Code Statique vs Dynamique : Lequel Choisir ?',
            desc: 'Données brutes permanentes vs liens courts modifiables avec statistiques de scan et sans réimpression.',
            readTime: '8 min de lecture',
            icon: '⚡',
          },
          {
            slug: 'how-to-create-a-wifi-qr-code',
            title: 'Créer un QR Code Wi-Fi : Connexion Invité Instantanée',
            desc: 'Connectez instantanément vos clients en hôtel, bar ou bureau sans dicter de mot de passe compliqué.',
            readTime: '6 min de lecture',
            icon: '📶',
          },
          {
            slug: 'how-to-create-a-vcard-qr-code',
            title: 'Créer un QR Code vCard pour Carte de Visite Digitale',
            desc: 'Enregistrez vos coordonnées complètes en 1 clic dans le répertoire du smartphone selon les normes RFC.',
            readTime: '7 min de lecture',
            icon: '👤',
          },
          {
            slug: 'how-to-use-qr-codes-for-restaurants',
            title: 'Utiliser les QR Codes pour Menus de Restaurant',
            desc: 'Réduisez vos coûts d’impression, accélérez la rotation des tables et récoltez des avis Google 5 étoiles.',
            readTime: '8 min de lecture',
            icon: '🍽️',
          },
        ],
      };

    case 'pt':
      return {
        title: 'Guias e Tutoriais de QR Code | Melhores Práticas',
        description: 'Aprenda tudo sobre QR codes: estático vs dinâmico, Wi-Fi para hóspedes, cartão de visita vCard e cardápios de restaurantes.',
        badge: 'Central de Conhecimento',
        h1: 'Guias e Tutoriais de QR Code',
        subheadline: 'Orientações práticas, detalhes técnicos e dicas de design para garantir alta legibilidade e sucesso nas suas campanhas.',
        guides: [
          {
            slug: 'what-is-a-qr-code',
            title: 'O que é um QR Code? Guia Completo e Anatomia Técnica',
            desc: 'Entenda como funciona a matriz 2D, a correção de erros Reed-Solomon e como as câmeras de celular decodificam dados.',
            readTime: '7 min de leitura',
            icon: '💡',
          },
          {
            slug: 'static-vs-dynamic-qr',
            title: 'QR Code Estático vs Dinâmico: Qual Você Deve Usar?',
            desc: 'Compare dados gravados permanentemente com links encurtados editáveis e relatórios de varreduras em tempo real.',
            readTime: '8 min de leitura',
            icon: '⚡',
          },
          {
            slug: 'how-to-create-a-wifi-qr-code',
            title: 'Como Criar um QR Code de Wi-Fi para Conexão Imediata',
            desc: 'Compartilhe credenciais de Wi-Fi em hotéis, cafeterias e residências sem precisar ditar senhas complicadas.',
            readTime: '6 min de leitura',
            icon: '📶',
          },
          {
            slug: 'how-to-create-a-vcard-qr-code',
            title: 'Como Criar um QR Code vCard para Cartão de Visita',
            desc: 'Codifique contatos no padrão RFC para salvamento em 1 toque na agenda do celular com máxima nitidez.',
            readTime: '7 min de leitura',
            icon: '👤',
          },
          {
            slug: 'how-to-use-qr-codes-for-restaurants',
            title: 'Como Usar QR Codes em Cardápios de Restaurantes',
            desc: 'Elimine custos com reimpressões, aumente o giro de mesas e colete avaliações 5 estrelas no Google.',
            readTime: '8 min de leitura',
            icon: '🍽️',
          },
        ],
      };

    case 'it':
      return {
        title: 'Guide e Tutorial sui Codici QR | Best Practice',
        description: 'Tutto sui codici QR: statici vs dinamici, accesso Wi-Fi per ospiti, biglietti da visita vCard e menu digitali per ristoranti.',
        badge: 'Centro Risorse',
        h1: 'Guide e Tutorial sui Codici QR',
        subheadline: 'Guide pratiche, approfondimenti tecnici e regole di stampa per sfruttare al massimo i codici QR nei tuoi progetti.',
        guides: [
          {
            slug: 'what-is-a-qr-code',
            title: 'Cos’è un Codice QR? Guida Completa e Struttura Tecnica',
            desc: 'Scopri come funziona la matrice bidimensionale, i livelli di correzione Reed-Solomon e la scansione su smartphone.',
            readTime: '7 min di lettura',
            icon: '💡',
          },
          {
            slug: 'static-vs-dynamic-qr',
            title: 'QR Code Statico vs Dinamico: Quale Scegliere?',
            desc: 'Confronta dati permanenti non modificabili con reindirizzamenti dinamici tracciabili e aggiornabili senza ristampa.',
            readTime: '8 min di lettura',
            icon: '⚡',
          },
          {
            slug: 'how-to-create-a-wifi-qr-code',
            title: 'Come Creare un QR Code Wi-Fi per Connessione Ospiti',
            desc: 'Condividi la rete WPA2/WPA3 in ristoranti, hotel e uffici senza dover dettare password chilometriche.',
            readTime: '6 min di lettura',
            icon: '📶',
          },
          {
            slug: 'how-to-create-a-vcard-qr-code',
            title: 'Come Creare un QR Code vCard per Biglietti da Visita',
            desc: 'Salvataggio rapido in rubrica con 1 tocco, rispetto degli standard RFC e suggerimenti per evitare moduli troppo fitti.',
            readTime: '7 min di lettura',
            icon: '👤',
          },
          {
            slug: 'how-to-use-qr-codes-for-restaurants',
            title: 'Come Usare i Codici QR per i Menu dei Ristoranti',
            desc: 'Azzera i costi di ristampa, velocizza la rotazione dei tavoli e raccogli recensioni a 5 stelle su Google.',
            readTime: '8 min di lettura',
            icon: '🍽️',
          },
        ],
      };

    case 'hi':
      return {
        title: 'क्यूआर कोड गाइड्स और ट्यूटोरियल्स | संपूर्ण जानकारी',
        description: 'क्यूआर कोड की विस्तृत मार्गदर्शिका: स्टेटिक बनाम डायनामिक कोड, वाई-फाई नेटवर्क, वी-कार्ड विजिटिंग कार्ड और रेस्टोरेंट मेनू।',
        badge: 'ज्ञान केंद्र',
        h1: 'क्यूआर कोड गाइड्स और ट्यूटोरियल्स',
        subheadline: 'व्यावहारिक गाइड्स, तकनीकी विवरण और डिज़ाइन सुझाव ताकि आपके क्यूआर कोड हर डिवाइस पर तुरंत स्कैन हो सकें।',
        guides: [
          {
            slug: 'what-is-a-qr-code',
            title: 'क्यूआर कोड क्या है? शुरुआती मार्गदर्शिका व तकनीकी संरचना',
            desc: '2D मैट्रिक्स, रीड-सोलोमन एरर करेक्शन और स्मार्टफोन कैमरा द्वारा स्कैनिंग की पूरी कार्यप्रणाली समझें।',
            readTime: '7 मिनट पठन',
            icon: '💡',
          },
          {
            slug: 'static-vs-dynamic-qr',
            title: 'स्टेटिक बनाम डायनामिक क्यूआर कोड: कौन सा चुनें?',
            desc: 'स्थायी ऑफलाइन डेटा बनाम एडिटेबल शॉर्ट यूआरएल, स्कैन ट्रैकिंग और लागत का विस्तृत तुलनात्मक विश्लेषण।',
            readTime: '8 मिनट पठन',
            icon: '⚡',
          },
          {
            slug: 'how-to-create-a-wifi-qr-code',
            title: 'वाई-फाई क्यूआर कोड कैसे बनाएं: बिना पासवर्ड सीधा कनेक्ट',
            desc: 'होटल, कैफे और ऑफिस में मेहमानों के लिए WPA2/WPA3 पासवर्डलेस सुरक्षित वायरलेस कनेक्शन सेटअप करें।',
            readTime: '6 मिनट पठन',
            icon: '📶',
          },
          {
            slug: 'how-to-create-a-vcard-qr-code',
            title: 'वी-कार्ड डिजिटल बिजनेस कार्ड क्यूआर कोड कैसे बनाएं',
            desc: '1-टैप में मोबाइल कॉन्टैक्ट्स में नंबर सेव कराएं और बिजनेस कार्ड पर हाई-डेंसिटी स्कैन समस्याओं से बचें।',
            readTime: '7 मिनट पठन',
            icon: '👤',
          },
          {
            slug: 'how-to-use-qr-codes-for-restaurants',
            title: 'रेस्टोरेंट मेनू के लिए क्यूआर कोड का सही उपयोग कैसे करें',
            desc: 'प्रिंटिंग खर्च बचाएं, टेबल रोटेशन तेज करें और गूगल पर 5-स्टार कस्टमर रिव्यू हासिल करें।',
            readTime: '8 मिनट पठन',
            icon: '🍽️',
          },
        ],
      };

    case 'en':
    default:
      return {
        title: 'QR Code Guides & Best Practice Tutorials',
        description: 'Master QR code best practices with step-by-step guides on static vs dynamic codes, Wi-Fi networks, digital menus, vCards, and scannability.',
        badge: 'Knowledge Hub',
        h1: 'QR Code Guides & Tutorials',
        subheadline: 'Practical guides, technical breakdowns, and design tips to help you get the most out of your QR code campaigns.',
        guides: [
          {
            slug: 'what-is-a-qr-code',
            title: 'What is a QR Code? Complete Beginner Guide & Anatomy',
            desc: 'Understand how Quick Response codes store binary matrix data, error correction levels, and how smartphone cameras scan them.',
            readTime: '7 min read',
            icon: '💡',
          },
          {
            slug: 'static-vs-dynamic-qr',
            title: 'Static vs Dynamic QR Codes: Which Should You Use?',
            desc: 'Compare permanent direct payloads with editable short URL redirects, scan analytics tracking, and lifetime validity.',
            readTime: '8 min read',
            icon: '⚡',
          },
          {
            slug: 'how-to-create-a-wifi-qr-code',
            title: 'How to Create a Wi-Fi QR Code for Instant Guest Connection',
            desc: 'Step-by-step guide to generating scannable Wi-Fi credentials for restaurants, hotels, offices, and home guest networks.',
            readTime: '6 min read',
            icon: '📶',
          },
          {
            slug: 'how-to-create-a-vcard-qr-code',
            title: 'How to Create a vCard Digital Business Card QR Code',
            desc: 'Learn how to encode RFC-compliant vCard contact files for instant 1-tap phone address book saving.',
            readTime: '7 min read',
            icon: '👤',
          },
          {
            slug: 'how-to-use-qr-codes-for-restaurants',
            title: 'How to Use QR Codes for Contactless Restaurant Menus',
            desc: 'Best practices for tabletop display, dynamic price updates, menu photography, and boosting Google reviews.',
            readTime: '8 min read',
            icon: '🍽️',
          },
        ],
      };
  }
}
