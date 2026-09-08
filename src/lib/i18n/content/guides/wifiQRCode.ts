import type { Locale } from '../../config';
import type { GuideArticleData } from './types';

export function getWiFiQRCodeData(locale: Locale): GuideArticleData {
  switch (locale) {
    case 'es':
      return {
        title: 'Cómo Crear un Código QR para Wi-Fi: Guía Completa',
        description: 'Aprende a crear un código QR seguro para conectar a clientes a tu red Wi-Fi sin escribir contraseñas. Soporte WPA3, iPhone, Android y privacidad total.',
        badge: 'Tutorial de Conectividad',
        h1: 'Cómo Crear un Código QR para Wi-Fi y Conexión Inmediata',
        subheadline: 'Olvídate de deletrear contraseñas de 20 caracteres. Descubre cómo codificar credenciales WPA2/WPA3 en un código escaneable para cafeterías, hoteles, oficinas y el hogar.',
        readingTime: '6 min de lectura',
        updatedDate: 'Septiembre 2026',
        quickTakeawaysTitle: 'Puntos Clave',
        quickTakeaways: [
          { label: 'Escaneo Nativo', text: 'Tanto iPhone (iOS 11+) como Android reconocen automáticamente el formato WIFI: desde la app de cámara nativa.' },
          { label: '100% Privado en Navegador', text: 'Nuestra herramienta procesa el código en la memoria local de tu navegador sin enviar la clave a ningún servidor.' },
          { label: 'Soporte de Redes Ocultas', text: 'Compatible con la etiqueta H:true para redes con SSID oculto.' },
          { label: 'Tamaño Seguro de Mesa', text: 'Imprime al menos 3,0 × 3,0 cm para soportes de mesa en restaurantes o recepciones.' },
        ],
        tocTitle: 'Tabla de Contenidos',
        sections: [
          {
            id: 'why-wifi-qr',
            heading: '1. Ventajas del Código QR para Redes Wi-Fi',
            paragraphs: [
              'Escribir contraseñas largas en pizarras genera constantes errores de lectura entre la "O" mayúscula y el número "0", o entre la "l" minúscula y la "I" mayúscula.',
              'Con un código QR impreso en un soporte acrílico de mesa, el cliente simplemente apunta la cámara de su móvil, toca la notificación emergente "Conectarse a la red" y accede al instante sin teclear nada.',
            ],
          },
          {
            id: 'syntax',
            heading: '2. Sintaxis Oficial del Protocolo WIFI:',
            paragraphs: [
              'El código QR utiliza el estándar internacional: WIFI:S:<SSID>;T:<Tipo>;P:<Clave>;H:<Oculto>;;',
              'Donde S es el nombre exacto de la red (distingue mayúsculas y minúsculas), T es el tipo de seguridad (WPA para WPA2/WPA3), P es la contraseña y H indica si la red es oculta.',
            ],
          },
          {
            id: 'step-by-step',
            heading: '3. Instrucciones Paso a Paso',
            paragraphs: ['Sigue estos pasos sencillos:'],
            bullets: [
              'Paso 1: Accede a nuestro Generador de Códigos QR para Wi-Fi.',
              'Paso 2: Escribe el nombre exacto de tu red (SSID).',
              'Paso 3: Selecciona la seguridad WPA/WPA2/WPA3 e introduce tu contraseña.',
              'Paso 4: Personaliza colores y añade un icono de Wi-Fi o logo de tu local.',
              'Paso 5: Descarga en formato vectorial SVG o PNG de alta resolución.',
            ],
          },
        ],
        faqsTitle: 'Preguntas Frecuentes sobre QR de Wi-Fi',
        faqs: [
          { question: '¿Funciona tanto en iPhone como en Android?', answer: 'Sí, ambos sistemas operativos lo soportan directamente en la cámara sin instalar aplicaciones.' },
          { question: '¿Mi contraseña se guarda en sus servidores?', answer: 'No. El código se calcula 100% de forma local en tu navegador con HTML5 Canvas; nunca viaja por internet.' },
          { question: '¿Qué hago si el teléfono no se conecta?', answer: 'Revisa que el nombre de la red (SSID) coincida exactamente en mayúsculas y minúsculas y que el tamaño impreso no sea inferior a 3 × 3 cm.' },
        ],
        ctaTitle: 'Genera tu Código QR de Wi-Fi Gratis',
        ctaDesc: 'Crea tu cartel de Wi-Fi para clientes en segundos y descárgalo listo para imprimir.',
        ctaButtonText: 'Crear QR de Wi-Fi',
        ctaButtonLink: '/es/wifi-qr-code-generator',
      };

    case 'de':
      return {
        title: 'WLAN-QR-Code erstellen: Schritt-für-Schritt-Anleitung',
        description: 'Erfahren Sie, wie Sie einen sicheren WLAN-QR-Code für Gäste und Kunden erstellen. Funktioniert auf iOS & Android ohne Passwort-Eingabe.',
        badge: 'Konnektivitäts-Tutorial',
        h1: 'WLAN-QR-Code erstellen: Schneller Gastzugang ohne Passworttippen',
        subheadline: 'Keine komplizierten Passwörter mehr buchstabieren. So binden Sie WPA2/WPA3-Netzwerkdaten in einen scanbaren QR-Code für Hotels, Cafés und Büros ein.',
        readingTime: '6 Min. Lesezeit',
        updatedDate: 'September 2026',
        quickTakeawaysTitle: 'Das Wichtigste in Kürze',
        quickTakeaways: [
          { label: 'Kamera-Direktverbindung', text: 'iOS und Android erkennen das WIFI:-Format sofort und verbinden sich per Fingertipp.' },
          { label: 'Datenschutz vor Ort', text: 'Ihre WLAN-Passwörter werden rein lokal im Browser berechnet und niemals auf Server übertragen.' },
          { label: 'Versteckte Netzwerke', text: 'Unterstützt das H:true-Attribut für Netzwerke ohne sichtbare SSID-Ausstrahlung.' },
        ],
        tocTitle: 'Inhalt',
        sections: [
          {
            id: 'why-wifi-qr',
            heading: '1. Warum ein WLAN-QR-Code sinnvoll ist',
            paragraphs: [
              'Lange WLAN-Schlüssel auf Kreidetafeln führen zu ständigen Nachfragen der Gäste nach Groß- und Kleinschreibung.',
              'Ein sauber gedruckter QR-Code auf den Tischen ermöglicht eine sekundenschnelle Verbindung per Smartphone-Kamera.',
            ],
          },
          {
            id: 'syntax',
            heading: '2. Die offizielle WIFI:-Syntax',
            paragraphs: [
              'Die standardisierte Schreibweise lautet: WIFI:S:<SSID>;T:<WPA|WEP|nopass>;P:<Passwort>;H:<true|false>;;',
              'Smartphones erkennen dieses Protokoll direkt in der Firmware und leiten die Verbindung ohne manuelle Einstellungen ein.',
            ],
          },
          {
            id: 'step-by-step',
            heading: '3. Anleitung und Drucktipps',
            paragraphs: ['So erstellen Sie Ihr Schild in 3 Schritten:'],
            bullets: [
              'Netzwerknamen (SSID) und Verschlüsselung (WPA/WPA2/WPA3) eingeben.',
              'Design anpassen und Firmenlogo oder WLAN-Symbol mittig einfügen.',
              'Als SVG oder hochauflösendes PNG herunterladen und mindestens 3,0 × 3,0 cm groß drucken.',
            ],
          },
        ],
        faqsTitle: 'Häufige Fragen zu WLAN-QR-Codes',
        faqs: [
          { question: 'Funktioniert der Code auf allen Smartphones?', answer: 'Ja, moderne iPhones und Android-Geräte scannen den Code direkt mit der vorinstallierten Kamera-App.' },
          { question: 'Wird mein Passwort im Internet gespeichert?', answer: 'Nein, die Generierung erfolgt zu 100% lokal in Ihrem Browser.' },
        ],
        ctaTitle: 'WLAN-QR-Code jetzt kostenlos erstellen',
        ctaDesc: 'Erstellen Sie Ihr passwortloses Schild für Gäste in wenigen Sekunden.',
        ctaButtonText: 'WLAN-Generator starten',
        ctaButtonLink: '/de/wifi-qr-code-generator',
      };

    case 'fr':
      return {
        title: 'Comment Créer un QR Code Wi-Fi : Guide Pratique',
        description: 'Connectez instantanément vos invités sans révéler votre mot de passe. Guide complet pour iOS, Android et affichage en salle.',
        badge: 'Tutoriel Réseau',
        h1: 'Créer un QR Code Wi-Fi pour une Connexion Invité Instantanée',
        subheadline: 'Simplifiez l’accès internet dans votre établissement : encodez vos clés WPA2/WPA3 en un QR code scannable d’un simple geste.',
        readingTime: '6 min de lecture',
        updatedDate: 'Septembre 2026',
        quickTakeawaysTitle: 'Points Forts',
        quickTakeaways: [
          { label: 'Scan Intégré', text: 'Pris en charge nativement par l’appareil photo iOS et Android sans application supplémentaire.' },
          { label: 'Sécurité Maximale', text: 'Génération locale dans votre navigateur : aucun mot de passe n’est envoyé sur nos serveurs.' },
        ],
        tocTitle: 'Sommaire',
        sections: [
          {
            id: 'why-wifi-qr',
            heading: '1. Les Avantages du QR Code Wi-Fi',
            paragraphs: [
              'Fini les erreurs de saisie entre le chiffre 0 et la lettre O. Vos clients scannent et sont connectés immédiatement.',
            ],
          },
          {
            id: 'syntax',
            heading: '2. Protocole et Syntaxe Standard',
            paragraphs: [
              'Le code utilise la syntaxe standardisée WIFI:S:<SSID>;T:<Type>;P:<MotDePasse>;H:<true|false>;; reconnue par tous les smartphones.',
            ],
          },
          {
            id: 'step-by-step',
            heading: '3. Étapes de Création et Recommandations',
            paragraphs: ['Pour un affichage réussi dans votre café ou hôtel :'],
            bullets: [
              'Saisissez l’identifiant exact de votre borne Wi-Fi.',
              'Exportez au format SVG vectoriel haute définition.',
              'Imprimez sur un support mat d’au moins 3,0 × 3,0 cm.',
            ],
          },
        ],
        faqsTitle: 'Questions Fréquentes',
        faqs: [
          { question: 'Ce QR code marche-t-il sur iPhone et Android ?', answer: 'Oui, la reconnaissance est native sur les deux systèmes d’exploitation.' },
        ],
        ctaTitle: 'Créez votre QR Code Wi-Fi Gratuit',
        ctaDesc: 'Générez un code élégant pour vos tables et téléchargez-le en haute définition.',
        ctaButtonText: 'Générer le QR Wi-Fi',
        ctaButtonLink: '/fr/wifi-qr-code-generator',
      };

    case 'pt':
      return {
        title: 'Como Criar um QR Code de Wi-Fi: Guia Rápido',
        description: 'Aprenda a compartilhar sua rede Wi-Fi de forma segura sem digitar senhas longas. Compatível com WPA2/WPA3, Android e iPhone.',
        badge: 'Tutorial de Conectividade',
        h1: 'Como Criar um QR Code de Wi-Fi para Conexão Imediata',
        subheadline: 'Elimine o incômodo de ditar senhas compridas. Permita que clientes em cafeterias, hotéis e consultórios se conectem com apenas um toque.',
        readingTime: '6 min de leitura',
        updatedDate: 'Setembro 2026',
        quickTakeawaysTitle: 'Destaques',
        quickTakeaways: [
          { label: 'Leitura Nativa', text: 'Funciona diretamente na câmera do iPhone e Android sem precisar baixar apps.' },
          { label: 'Privacidade Total', text: 'A geração ocorre 100% no seu navegador sem armazenar senhas em servidores.' },
        ],
        tocTitle: 'Índice',
        sections: [
          {
            id: 'why-wifi-qr',
            heading: '1. Por que Usar QR Code no Wi-Fi',
            paragraphs: [
              'Economize o tempo dos seus atendentes e evite erros na digitação de senhas complexas com um display de mesa elegante.',
            ],
          },
          {
            id: 'syntax',
            heading: '2. Sintaxe Padrão de Conexão',
            paragraphs: [
              'O código segue a diretriz internacional WIFI:S:<Nome>;T:<WPA>;P:<Senha>;H:<Oculto>;; que aciona a conexão sem fio instantânea.',
            ],
          },
          {
            id: 'step-by-step',
            heading: '3. Passo a Passo para Gerar e Imprimir',
            paragraphs: ['Como colocar no seu estabelecimento:'],
            bullets: [
              'Insira o nome da rede respeitando maiúsculas e minúsculas.',
              'Escolha a proteção WPA/WPA2/WPA3 e digite a senha.',
              'Baixe em vetor SVG e imprima com no mínimo 3,0 × 3,0 cm.',
            ],
          },
        ],
        faqsTitle: 'Perguntas Frequentes',
        faqs: [
          { question: 'A senha da minha rede fica segura?', answer: 'Sim, a ferramenta roda apenas na memória do seu navegador e não envia dados para a nuvem.' },
        ],
        ctaTitle: 'Crie seu QR Code de Wi-Fi Grátis',
        ctaDesc: 'Gere um código moderno para seus clientes em segundos.',
        ctaButtonText: 'Abrir Gerador de Wi-Fi',
        ctaButtonLink: '/pt/wifi-qr-code-generator',
      };

    case 'it':
      return {
        title: 'Come Creare un QR Code Wi-Fi: Guida Passo Passo',
        description: 'Scopri come collegare i clienti al Wi-Fi del tuo locale senza far digitare la password. Supporto WPA2/WPA3 e massima privacy.',
        badge: 'Tutorial Connettività',
        h1: 'Come Creare un QR Code Wi-Fi per Connessione Istantanea',
        subheadline: 'Dimentica le lunghe spiegazioni al bancone: codifica le tue credenziali in un QR code pronto da stampare per tavoli e reception.',
        readingTime: '6 min di lettura',
        updatedDate: 'Settembre 2026',
        quickTakeawaysTitle: 'Punti Chiave',
        quickTakeaways: [
          { label: 'Scansione Automatica', text: 'Supportato nativamente da fotocamere iOS e Android.' },
          { label: 'Nessun Salvataggio Server', text: 'Le credenziali rimangono nel browser e non vengono mai caricate sui nostri server.' },
        ],
        tocTitle: 'Indice',
        sections: [
          {
            id: 'why-wifi-qr',
            heading: '1. I Vantaggi per Ristoranti e Hotel',
            paragraphs: [
              'Con un semplice supporto da tavolo, i clienti inquadrano il codice e premono "Connetti", riducendo il carico di lavoro del personale.',
            ],
          },
          {
            id: 'syntax',
            heading: '2. Sintassi Ufficiale del Protocollo',
            paragraphs: [
              'Il formato standard WIFI:S:<NomeRete>;T:<Tipo>;P:<Password>;H:<Nascosta>;; viene interpretato direttamente dal sistema operativo del telefono.',
            ],
          },
          {
            id: 'step-by-step',
            heading: '3. Istruzioni di Stampa',
            paragraphs: ['Consigli utili per una leggibilità perfetta:'],
            bullets: [
              'Digita il nome esatto della rete Wi-Fi.',
              'Esporta in formato vettoriale SVG per stampe su espositori da tavolo.',
              'Mantieni una dimensione minima di 3,0 × 3,0 cm.',
            ],
          },
        ],
        faqsTitle: 'Domande Frequenti sul Wi-Fi QR',
        faqs: [
          { question: 'La password è al sicuro?', answer: 'Sì, la generazione avviene al 100% in locale sul tuo browser.' },
        ],
        ctaTitle: 'Genera il Tuo QR Code Wi-Fi Gratuito',
        ctaDesc: 'Scarica subito il file pronto per la stampa in formato SVG o PNG.',
        ctaButtonText: 'Crea QR Code Wi-Fi',
        ctaButtonLink: '/it/wifi-qr-code-generator',
      };

    case 'hi':
      return {
        title: 'वाई-फाई क्यूआर कोड कैसे बनाएं: आसान तरीका',
        description: 'बिना पासवर्ड टाइप किए मेहमानों को तुरंत अपने वाई-फाई से कनेक्ट करें। WPA2/WPA3 सपोर्ट और 100% सुरक्षित ब्राउज़र जनरेशन।',
        badge: 'कनेक्टिविटी गाइड',
        h1: 'वाई-फाई क्यूआर कोड कैसे बनाएं: पासवर्डलेस इंस्टेंट कनेक्ट',
        subheadline: '20 अक्षरों के लंबे पासवर्ड बोलकर बताने का झंझट खत्म। होटल, कैफे और ऑफिस के लिए तुरंत स्कैन होने वाला वाई-फाई कोड तैयार करें।',
        readingTime: '6 मिनट पठन',
        updatedDate: 'सितंबर 2026',
        quickTakeawaysTitle: 'मुख्य लाभ',
        quickTakeaways: [
          { label: 'सीधा कैमरा स्कैन', text: 'iPhone और Android कैमरे से स्कैन करते ही स्क्रीन पर "Join Network" बटन आ जाता है।' },
          { label: 'सुरक्षा की गारंटी', text: 'आपका पासवर्ड किसी सर्वर पर नहीं जाता; यह आपके ब्राउज़र में ही सुरक्षित रहता है।' },
        ],
        tocTitle: 'विषय सूची',
        sections: [
          {
            id: 'why-wifi-qr',
            heading: '1. वाई-फाई क्यूआर कोड के फायदे',
            paragraphs: [
              'कैफे और रेस्टोरेंट में अक्सर ग्राहक पासवर्ड पूछते हैं। टेबल पर रखा एक खूबसूरत क्यूआर कोड उन्हें बिना टाइप किए सीधे जोड़ देता है।',
            ],
          },
          {
            id: 'syntax',
            heading: '2. वाई-फाई क्यूआर का मानक प्रोटोकॉल',
            paragraphs: [
              'यह कोड अंतरराष्ट्रीय WIFI:S:<नेटवर्क-नाम>;T:<WPA>;P:<पासवर्ड>;H:<हिडन>;; प्रोटोकॉल का पालन करता है जो फोन में सीधे नेटवर्क सेटिंग्स को सक्रिय करता है।',
            ],
          },
          {
            id: 'step-by-step',
            heading: '3. कैसे बनाएं और प्रिंट करें',
            paragraphs: ['सरल 3-चरणीय प्रक्रिया:'],
            bullets: [
              'अपने वाई-फाई का सही नाम (SSID) और पासवर्ड दर्ज करें।',
              'रंग और बीच में वाई-फाई का लोगो कस्टमाइज़ करें।',
              'कम से कम 3.0 × 3.0 सेमी साइज में प्रिंट के लिए SVG फाइल डाउनलोड करें।',
            ],
          },
        ],
        faqsTitle: 'सामान्य प्रश्न',
        faqs: [
          { question: 'क्या यह सभी फोन पर काम करता है?', answer: 'हाँ, लगभग सभी आधुनिक स्मार्टफोन्स में यह बिना किसी अलग ऐप के काम करता है।' },
        ],
        ctaTitle: 'अपना फ्री वाई-फाई क्यूआर कोड बनाएं',
        ctaDesc: 'प्रिंट करने के लिए हाई-क्वालिटी SVG या PNG फाइल तुरंत डाउनलोड करें।',
        ctaButtonText: 'वाई-फाई जनरेटर खोलें',
        ctaButtonLink: '/hi/wifi-qr-code-generator',
      };

    case 'en':
    default:
      return {
        title: 'How to Create a Wi-Fi QR Code',
        description: 'Learn how to generate a secure Wi-Fi QR code for restaurants, cafes, hotels, and home guest networks without revealing passwords.',
        badge: 'Connectivity Tutorial',
        h1: 'How to Create a Wi-Fi QR Code for Instant Guest Connection',
        subheadline: 'Stop spelling out 20-character passwords across noisy rooms. Discover how to encode WPA2/WPA3 credentials into an instant scannable barcode for cafes, Airbnb rentals, corporate offices, and your living room.',
        readingTime: '6 min read',
        updatedDate: 'September 2026',
        quickTakeawaysTitle: 'Quick Takeaways',
        quickTakeaways: [
          { label: 'Native Camera Scanning', text: 'Both iOS (11+) and Android automatically recognize the WIFI: protocol in native cameras without extra apps.' },
          { label: '100% Client-Side Privacy', text: 'Our tool processes credentials locally in your browser memory via Canvas; passwords never hit a remote database.' },
          { label: 'Hidden Network Support', text: 'Fully compatible with the H:true flag for routers with hidden SSIDs.' },
          { label: 'Minimum Display Dimensions', text: 'Print at least 3.0 x 3.0 cm for tabletop displays to ensure fast camera autofocus.' },
        ],
        tocTitle: 'Table of Contents',
        sections: [
          {
            id: 'why-wifi-qr',
            heading: '1. The Problem with Verbal Wi-Fi Passwords',
            paragraphs: [
              'Spelling out long, complex passwords across crowded venues causes endless confusion between uppercase O and 0, lowercase l and I, or special characters.',
              'A Wi-Fi QR code printed on a tabletop stand lets diners or guests point their phone camera, tap "Join", and connect in less than one second.',
            ],
          },
          {
            id: 'syntax',
            heading: '2. The Official WIFI: URI Protocol Syntax',
            paragraphs: [
              'Behind the scenes, Wi-Fi QR codes use an established standard: WIFI:S:<SSID>;T:<Type>;P:<Password>;H:<Hidden>;;',
              'S represents the case-sensitive network name, T defines the encryption protocol (WPA for WPA2/WPA3), P stores the passkey, and H indicates whether the network is hidden.',
            ],
          },
          {
            id: 'step-by-step',
            heading: '3. Step-by-Step Instructions',
            paragraphs: ['Follow these simple steps:'],
            bullets: [
              'Step 1: Open our dedicated Wi-Fi QR Code Generator.',
              'Step 2: Enter your exact router Network Name (SSID).',
              'Step 3: Select WPA/WPA2/WPA3 security and type your password.',
              'Step 4: Customize brand colors and add a Wi-Fi icon or company logo.',
              'Step 5: Export in crisp Vector SVG or high-resolution PNG.',
            ],
          },
        ],
        faqsTitle: 'Frequently Asked Questions',
        faqs: [
          { question: 'Does a Wi-Fi QR code work on both iPhone and Android?', answer: 'Yes! Native cameras on iOS and Android recognize the protocol out of the box.' },
          { question: 'Is my Wi-Fi password stored on your server?', answer: 'No. Everything is rendered locally in your browser memory and never uploaded.' },
          { question: 'Can it connect to hidden networks?', answer: 'Yes, just check the Hidden Network option before exporting.' },
        ],
        ctaTitle: 'Create Your Free Wi-Fi QR Code Now',
        ctaDesc: 'Generate an elegant, passwordless Wi-Fi sign in seconds. Download print-ready vector SVG or PNG files.',
        ctaButtonText: 'Open Wi-Fi Generator',
        ctaButtonLink: '/wifi-qr-code-generator',
      };
  }
}
