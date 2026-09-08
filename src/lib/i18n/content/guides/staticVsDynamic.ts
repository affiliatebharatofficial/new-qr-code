import type { Locale } from '../../config';
import type { GuideArticleData } from './types';

export function getStaticVsDynamicData(locale: Locale): GuideArticleData {
  switch (locale) {
    case 'es':
      return {
        title: 'Códigos QR Estáticos vs Dinámicos: ¿Cuál Elegir?',
        description: 'Comparativa exhaustiva entre códigos QR estáticos y dinámicos: edición posterior a la impresión, estadísticas de escaneo, densidad y costes.',
        badge: 'Comparativa de Arquitectura',
        h1: 'Códigos QR Estáticos vs. Dinámicos: ¿Cuál Deberías Elegir?',
        subheadline: 'Análisis arquitectónico en profundidad: conoce cuándo utilizar códigos estáticos permanentes sin conexión y cuándo son indispensables los códigos dinámicos con analítica en tiempo real.',
        readingTime: '8 min de lectura',
        updatedDate: 'Septiembre 2026',
        quickTakeawaysTitle: 'Veredicto Rápido',
        quickTakeaways: [
          { label: 'QR Estático (Gratuito)', text: 'Datos fijos grabados en los módulos. Funciona sin internet, no caduca nunca y garantiza privacidad total.' },
          { label: 'QR Dinámico (Comercial)', text: 'Enlace corto con redirección en el servidor. Permite cambiar el enlace de destino tras imprimir y rastrear estadísticas.' },
          { label: 'Densidad Visual', text: 'Los códigos dinámicos mantienen una cuadrícula limpia con puntos grandes, escaneándose mucho más rápido a distancia.' },
          { label: 'Sin Trampas de Pago', text: 'Nuestra plataforma ofrece códigos estáticos 100% gratuitos sin suscripciones forzosas de 14 días.' },
        ],
        tocTitle: 'Tabla de Contenidos',
        sections: [
          {
            id: 'how-they-work',
            heading: '1. Diferencias Arquitectónicas: Cómo Funcionan',
            paragraphs: [
              'La diferencia principal entre un código estático y uno dinámico radica en dónde se alojan los datos.',
              'En un código QR estático, la URL o texto de destino se graba de forma fija e irreversible en la matriz de puntos. Si hay una errata o cambias de web, el código impreso queda inservible.',
              'En un código QR dinámico, el dibujo almacena una URL corta de redirección (ej. freeqrcode-generator.com/r/xyz). Cuando el usuario escanea, el servidor redirige en milisegundos hacia tu página de destino final. Esto te permite cambiar la página web en tu panel cuantas veces quieras sin volver a imprimir.',
            ],
          },
          {
            id: 'density',
            heading: '2. Densidad de la Matriz y Facilidad de Escaneo',
            paragraphs: [
              'Cuanta más información contiene un código estático (ej. una vCard con 400 caracteres), más alta es la versión requerida (Versión 10 con miles de puntos minúsculos).',
              'Los códigos dinámicos solo contienen un enlace corto de unos 20 caracteres, lo que produce una cuadrícula de Versión 2 o 3 con módulos grandes, limpios y fáciles de enfocar incluso con poca luz o a gran distancia.',
            ],
          },
          {
            id: 'use-cases',
            heading: '3. Cuándo Utilizar Cada Tipo',
            paragraphs: ['Guía práctica de decisión:'],
            bullets: [
              'Usa Estático para: Claves de Wi-Fi para clientes, direcciones de billeteras de criptomonedas, números de serie de maquinaria y textos fijos.',
              'Usa Dinámico para: Cartas de restaurantes, folletos publicitarios, envases de productos, entradas de eventos y campañas con medición de retorno de inversión (ROI).',
            ],
          },
        ],
        faqsTitle: 'Preguntas Frecuentes: Estático vs Dinámico',
        faqs: [
          { question: '¿Puedo editar la URL de un código QR estático después de imprimirlo?', answer: 'No. Los códigos estáticos tienen los datos grabados físicamente en los puntos y no se pueden modificar.' },
          { question: '¿Los códigos estáticos caducan?', answer: 'No, los códigos estáticos nunca caducan y son válidos de por vida.' },
          { question: '¿Puedo ver estadísticas de escaneo con códigos estáticos?', answer: 'No. Para rastrear número de visitas, país y dispositivo se requiere un código dinámico.' },
        ],
        ctaTitle: 'Genera Códigos Estáticos o Dinámicos Gratis',
        ctaDesc: 'Comienza ahora con códigos permanentes gratuitos o campañas dinámicas avanzadas con analítica.',
        ctaButtonText: 'Abrir Generador',
        ctaButtonLink: '/es',
        ctaSecondaryText: 'Ver Planes y Precios',
        ctaSecondaryLink: '/es/pricing',
      };

    case 'de':
      return {
        title: 'Statische vs. dynamische QR-Codes: Der Vergleich',
        description: 'Unterschiede zwischen statischen und dynamischen QR-Codes: Nachträgliche Bearbeitung, Scan-Statistiken, Punktdichte und Kosten.',
        badge: 'Architektur-Vergleich',
        h1: 'Statische vs. dynamische QR-Codes: Was ist besser?',
        subheadline: 'Der umfassende Leitfaden: Erfahren Sie, wann dauerhafte Offline-Codes ausreichen und wann editierbare dynamische Links unverzichtbar sind.',
        readingTime: '8 Min. Lesezeit',
        updatedDate: 'September 2026',
        quickTakeawaysTitle: 'Schnellübersicht',
        quickTakeaways: [
          { label: 'Statischer QR-Code', text: 'Feste Daten direkt im Code gespeichert. Funktioniert offline, läuft niemals ab und ist 100% datenschutzsicher.' },
          { label: 'Dynamischer QR-Code', text: 'Kurzlink mit Server-Weiterleitung. Ziel-URL jederzeit änderbar inklusive detaillierter Scan-Analysen.' },
          { label: 'Optimale Lesbarkeit', text: 'Dynamische Codes bleiben dank kurzer URLs stets grobmaschig und scannen viel schneller aus der Ferne.' },
        ],
        tocTitle: 'Inhaltsverzeichnis',
        sections: [
          {
            id: 'how-they-work',
            heading: '1. Technische Funktionsweise',
            paragraphs: [
              'Bei einem statischen QR-Code wird der gesamte Text oder Link fest in das Punktmuster codiert. Nach dem Drucken auf Papier oder Karton lässt sich der Inhalt nicht mehr verändern.',
              'Ein dynamischer QR-Code enthält lediglich eine kurze Weiterleitungsadresse. Beim Scannen leitet der Edge-Server in Millisekunden auf Ihre eigentliche Zielseite weiter. So können Sie Tippfehler korrigieren oder saisonale Angebote austauschen, ohne neu zu drucken.',
            ],
          },
          {
            id: 'use-cases',
            heading: '2. Der richtige Einsatzzweck',
            paragraphs: ['Entscheidungshilfe für Ihre Projekte:'],
            bullets: [
              'Statisch für: WLAN-Zugangsdaten, Krypto-Adressen, private Visitenkarten und Maschinenschilder.',
              'Dynamisch für: Restaurant-Speisekarten, Werbeflyer, Produktverpackungen und Plakatwerbung mit Erfolgskontrolle.',
            ],
          },
        ],
        faqsTitle: 'Häufig gestellte Fragen',
        faqs: [
          { question: 'Kann man das Ziel eines statischen QR-Codes nachträglich ändern?', answer: 'Nein, bei statischen Codes sind die Daten fest eingebrannt.' },
          { question: 'Laufen dynamische Codes ab?', answer: 'Solange Ihr Weiterleitungsdienst aktiv ist, funktionieren sie unbegrenzt.' },
        ],
        ctaTitle: 'Jetzt kostenlosen QR-Code erstellen',
        ctaDesc: 'Erstellen Sie dauerhafte statische Codes oder starten Sie dynamische Kampagnen mit detaillierter Statistik.',
        ctaButtonText: 'Generator öffnen',
        ctaButtonLink: '/de',
        ctaSecondaryText: 'Preise & Tarife',
        ctaSecondaryLink: '/de/pricing',
      };

    case 'fr':
      return {
        title: 'QR Code Statique vs Dynamique : Guide Comparatif',
        description: 'Comparaison complète : modification après impression, statistiques de scan, complexité de la matrice et tarification.',
        badge: 'Comparatif Technique',
        h1: 'QR Code Statique vs Dynamique : Quel Choix Faire ?',
        subheadline: 'Comprenez les différences architecturales clés : la permanence des codes statiques hors ligne face à la flexibilité des liens dynamiques modifiables.',
        readingTime: '8 min de lecture',
        updatedDate: 'Septembre 2026',
        quickTakeawaysTitle: 'Points Essentiels',
        quickTakeaways: [
          { label: 'Code Statique', text: 'Données gravées de façon définitive. Ne requiert aucun serveur, n’expire jamais et préserve la vie privée.' },
          { label: 'Code Dynamique', text: 'Lien court redirigé par le serveur. Modifiez l’URL à tout moment et suivez les statistiques de scans.' },
        ],
        tocTitle: 'Sommaire',
        sections: [
          {
            id: 'how-they-work',
            heading: '1. Différences de Fonctionnement',
            paragraphs: [
              'Le code statique enregistre directement l’information brute. Si votre lien change, le document imprimé devient obsolète.',
              'Le code dynamique utilise un lien court qui effectue une redirection instantanée. Vous pouvez ajuster la destination finale depuis votre tableau de bord sans réimprimer.',
            ],
          },
          {
            id: 'use-cases',
            heading: '2. Quand Choisir Chaque Format',
            paragraphs: [
              'Privilégiez le statique pour les accès Wi-Fi, les adresses de crypto-monnaies et les numéros de série industriels.',
              'Optez pour le dynamique pour les menus de restaurant, les campagnes d’affichage et le packaging produit.',
            ],
          },
        ],
        faqsTitle: 'Foire Aux Questions',
        faqs: [
          { question: 'Peut-on modifier un QR code statique après impression ?', answer: 'Non, c’est impossible car les données sont physiquement dessinées dans les modules.' },
          { question: 'Les codes statiques expirent-ils ?', answer: 'Non, ils fonctionnent indéfiniment sans date de péremption.' },
        ],
        ctaTitle: 'Générez vos QR Codes Facilement',
        ctaDesc: 'Créez des codes statiques à vie ou gérez des redirections dynamiques avec statistiques.',
        ctaButtonText: 'Accéder au Générateur',
        ctaButtonLink: '/fr',
      };

    case 'pt':
      return {
        title: 'QR Code Estático vs Dinâmico: Qual Escolher?',
        description: 'Comparativo definitivo: alteração após impressão, métricas de escaneamento, densidade dos pontos e segurança.',
        badge: 'Comparativo Técnico',
        h1: 'QR Code Estático vs. Dinâmico: Qual a Melhor Escolha?',
        subheadline: 'Entenda a arquitetura de cada modelo: a imutabilidade dos códigos estáticos offline versus a versatilidade de links dinâmicos rastreáveis.',
        readingTime: '8 min de leitura',
        updatedDate: 'Setembro 2026',
        quickTakeawaysTitle: 'Resumo Rápido',
        quickTakeaways: [
          { label: 'QR Code Estático', text: 'Dados fixos na grade. Não expira, não precisa de internet e oferece privacidade total.' },
          { label: 'QR Code Dinâmico', text: 'Link curto com redirecionamento. Edite o destino após imprimir e monitore cliques em tempo real.' },
        ],
        tocTitle: 'Índice',
        sections: [
          {
            id: 'how-they-work',
            heading: '1. Como Funciona a Arquitetura',
            paragraphs: [
              'No código estático, toda a informação é gravada nos próprios módulos. Se houver um erro de digitação, todo o lote impresso é perdido.',
              'No código dinâmico, o desenho contém apenas um link encurtador. O servidor encaminha o usuário para o destino desejado, permitindo trocar o link quando quiser sem custos de reimpressão.',
            ],
          },
          {
            id: 'use-cases',
            heading: '2. Aplicações Recomendadas',
            paragraphs: [
              'Estático: Senhas de Wi-Fi de hóspedes, endereços de carteiras de cripto e placas de maquinário.',
              'Dinâmico: Cardápios digitais, folhetos promocionais, rótulos de embalagens e outdoors.',
            ],
          },
        ],
        faqsTitle: 'Perguntas Frequentes',
        faqs: [
          { question: 'É possível alterar o link de um QR code estático?', answer: 'Não. Os dados são gravados permanentemente no código.' },
          { question: 'QR codes estáticos expiram?', answer: 'Não, eles funcionam para sempre sem prazo de expiração.' },
        ],
        ctaTitle: 'Crie seus Códigos Estáticos ou Dinâmicos',
        ctaDesc: 'Gere códigos gratuitos e permanentes com download imediato em alta definição.',
        ctaButtonText: 'Abrir Gerador',
        ctaButtonLink: '/pt',
      };

    case 'it':
      return {
        title: 'QR Code Statico vs Dinamico: Quale Scegliere?',
        description: 'Confronto dettagliato: modifica dopo la stampa, statistiche di scansione, densità dei punti e costi di gestione.',
        badge: 'Confronto Architetture',
        h1: 'QR Code Statico vs. Dinamico: Quale Fa al Caso Tuo?',
        subheadline: 'Analisi approfondita: scopri quando affidarti alla solidità dei codici statici permanenti e quando i link dinamici sono indispensabili.',
        readingTime: '8 min di lettura',
        updatedDate: 'Settembre 2026',
        quickTakeawaysTitle: 'In Sintesi',
        quickTakeaways: [
          { label: 'Codice Statico', text: 'Dati memorizzati direttamente nel disegno. Non scade mai, funziona offline e rispetta la privacy.' },
          { label: 'Codice Dinamico', text: 'Short URL con reindirizzamento da server. Modifica la destinazione post-stampa e monitora gli accessi.' },
        ],
        tocTitle: 'Indice',
        sections: [
          {
            id: 'how-they-work',
            heading: '1. Differenze di Funzionamento',
            paragraphs: [
              'I codici statici imprimono l’URL direttamente nella griglia. Una volta stampati su brochure o cartelloni, non possono più essere modificati.',
              'I codici dinamici indirizzano a un server proxy che rimanda al link finale. In questo modo puoi correggere errori o cambiare offerta promozionale a costo zero.',
            ],
          },
          {
            id: 'use-cases',
            heading: '2. Quando Usare Ciascun Tipo',
            paragraphs: [
              'Statico: Password Wi-Fi, chiavi di pagamento e dati fissi di prodotti.',
              'Dinamico: Menu di ristoranti, materiale fieristico e campagne di marketing con analisi degli accessi.',
            ],
          },
        ],
        faqsTitle: 'Domande Frequenti',
        faqs: [
          { question: 'Posso modificare un codice QR statico?', answer: 'No, i dati impressi nei moduli sono permanenti.' },
          { question: 'I codici statici hanno una scadenza?', answer: 'No, durano per sempre senza alcun canone mensile.' },
        ],
        ctaTitle: 'Inizia Ora a Creare i Tuoi Codici QR',
        ctaDesc: 'Scegli tra codici permanenti gratuiti o campagne dinamiche con statistiche avanzate.',
        ctaButtonText: 'Crea QR Code Gratis',
        ctaButtonLink: '/it',
      };

    case 'hi':
      return {
        title: 'स्टेटिक बनाम डायनामिक क्यूआर कोड: कौन सा चुनें?',
        description: 'स्टेटिक और डायनामिक क्यूआर कोड की तुलना: प्रिंटिंग के बाद बदलाव, स्कैन ट्रैकिंग, डॉट्स की डेंसिटी और सही चुनाव।',
        badge: 'तुलनात्मक समीक्षा',
        h1: 'स्टेटिक बनाम डायनामिक क्यूआर कोड: कौन सा आपके लिए सही है?',
        subheadline: 'विस्तृत तकनीकी विश्लेषण: जानिए कब स्थायी ऑफलाइन कोड बेहतर होते हैं और कब एडिटेबल डायनामिक कोड चुनना समझदारी है।',
        readingTime: '8 मिनट पठन',
        updatedDate: 'सितंबर 2026',
        quickTakeawaysTitle: 'त्वरित निष्कर्ष',
        quickTakeaways: [
          { label: 'स्टेटिक क्यूआर कोड', text: 'डेटा सीधे कोड में दर्ज होता है। बिना इंटरनेट काम करता है, कभी एक्सपायर नहीं होता और 100% फ्री है।' },
          { label: 'डायनामिक क्यूआर कोड', text: 'शॉर्ट यूआरएल रीडायरेक्ट। प्रिंट होने के बाद भी वेबसाइट लिंक बदल सकते हैं और स्कैन आंकड़े ट्रैक कर सकते हैं।' },
        ],
        tocTitle: 'विषय सूची',
        sections: [
          {
            id: 'how-they-work',
            heading: '1. दोनों के काम करने का तरीका',
            paragraphs: [
              'स्टेटिक क्यूआर कोड में सारा डेटा सीधे काले-सफेद बिंदुओं में दर्ज हो जाता है। यदि छपाई के बाद वेबसाइट लिंक बदलता है, तो पुराना कोड बेकार हो जाता है।',
              'डायनामिक क्यूआर कोड में एक छोटा लिंक होता है जो सर्वर के माध्यम से आपकी असली वेबसाइट पर भेजता है। इससे आप हजारों पर्चे छपने के बाद भी कभी भी डैशबोर्ड से लिंक बदल सकते हैं।',
            ],
          },
          {
            id: 'use-cases',
            heading: '2. सही कोड का चयन कैसे करें',
            paragraphs: [
              'स्टेटिक कोड चुनें: वाई-फाई पासवर्ड, क्रिप्टो वॉलेट पता और स्थायी सीरियल नंबर के लिए।',
              'डायनामिक कोड चुनें: रेस्टोरेंट मेनू, विज्ञापन पर्चे, उत्पाद पैकिंग और मार्केटिंग कैंपेन के लिए।',
            ],
          },
        ],
        faqsTitle: 'सामान्य प्रश्न',
        faqs: [
          { question: 'क्या प्रिंटिंग के बाद स्टेटिक क्यूआर का लिंक बदल सकते हैं?', answer: 'नहीं, स्टेटिक कोड का डेटा बदला नहीं जा सकता।' },
          { question: 'क्या स्टेटिक कोड कभी एक्सपायर होते हैं?', answer: 'नहीं, ये जीवन भर बिना रुकावट काम करते हैं।' },
        ],
        ctaTitle: 'फ्री स्टेटिक या डायनामिक कोड बनाएं',
        ctaDesc: 'अपनी जरूरत के अनुसार स्थायी या एडिटेबल क्यूआर कोड तुरंत मुफ्त जनरेट करें।',
        ctaButtonText: 'जनरेटर खोलें',
        ctaButtonLink: '/hi',
      };

    case 'en':
    default:
      return {
        title: 'Static vs Dynamic QR Codes: Key Differences',
        description: 'Compare static vs dynamic QR codes. Learn differences in editability, scan analytics, matrix complexity, lifetime validity, and printing costs.',
        badge: 'Architectural Comparison',
        h1: 'Static vs. Dynamic QR Codes: Which Should You Use?',
        subheadline: 'A deep architectural breakdown comparing permanent offline payload codes with editable edge-routed dynamic QR codes. Understand editability, scan analytics, matrix density, and cost implications before you print.',
        readingTime: '8 min read',
        updatedDate: 'September 2026',
        quickTakeawaysTitle: 'Quick Verdict',
        quickTakeaways: [
          { label: 'Static QR Codes', text: 'Direct payload encoding. 100% free, private, offline-capable, and permanent with zero expiration.' },
          { label: 'Dynamic QR Codes', text: 'Short URL redirect proxy. Allows post-print target URL updates and comprehensive real-time scan analytics.' },
          { label: 'Matrix Dot Density', text: 'Dynamic codes maintain clean Version 2-3 grids that scan significantly faster from greater distances.' },
          { label: 'No Subscription Traps', text: 'Our platform clearly differentiates static vs dynamic so your printed materials never stop working unexpectedly.' },
        ],
        tocTitle: 'Table of Contents',
        sections: [
          {
            id: 'how-they-work',
            heading: '1. Architectural Differences: How They Work',
            paragraphs: [
              'The fundamental difference between a static and a dynamic QR code lies in where the data lives and how the smartphone processes it.',
              'In a static QR code, the actual destination data is hardcoded directly into the binary module matrix. For example, if you encode a long URL, every single character of that link is translated into black and white squares. When scanned, the phone opens the link directly without interacting with any intermediate server.',
              'In a dynamic QR code, the barcode encodes a permanent, ultra-compact short redirect link (e.g. freeqrcode-generator.com/r/xyz). An edge worker intercepts the scan in milliseconds, logs analytics, and redirects the visitor to your final destination. You can update the destination URL at any time without reprinting.',
            ],
          },
          {
            id: 'density',
            heading: '2. Matrix Density & Optical Scannability',
            paragraphs: [
              'The more characters in a static code, the higher the QR Version required (from 21x21 squares up to 73x73 tiny dots).',
              'Dynamic codes always maintain an ultra-clean Version 2 or 3 matrix with large, bold squares that cameras recognize effortlessly in dim lighting or from far away.',
            ],
          },
          {
            id: 'use-cases',
            heading: '3. When to Use Each Type',
            paragraphs: ['Concrete decision rules:'],
            bullets: [
              'Use Static for: Guest Wi-Fi passwords, cryptocurrency wallet addresses, industrial serial numbers, and personal contact notes.',
              'Use Dynamic for: Restaurant menus, marketing brochures, product packaging, billboard campaigns, and event ticketing.',
            ],
          },
        ],
        faqsTitle: 'Frequently Asked Questions',
        faqs: [
          { question: 'Can I edit the destination URL of a static QR code after printing?', answer: 'No. Static QR codes encode data directly into the printed modules.' },
          { question: 'Do static QR codes ever expire?', answer: 'No, static QR codes never expire and remain valid forever.' },
          { question: 'Can I track scan statistics with static QR codes?', answer: 'No. To track scans, locations, and devices, a dynamic QR code is required.' },
        ],
        ctaTitle: 'Generate Free Static or Dynamic QR Codes',
        ctaDesc: 'Create permanent static codes with zero expiry, or launch dynamic campaigns with analytics and editable links.',
        ctaButtonText: 'Open Generator',
        ctaButtonLink: '/',
        ctaSecondaryText: 'View Pricing',
        ctaSecondaryLink: '/pricing',
      };
  }
}
