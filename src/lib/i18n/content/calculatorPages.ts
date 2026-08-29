import type { Locale } from '../config';

export interface CalculatorPageData {
  title: string;
  description: string;
  h1: string;
  subheadline: string;
  overviewTitle: string;
  overviewParagraphs: string[];
  tableTitle: string;
  tableHeaders: [string, string, string, string];
  faqsTitle: string;
  faqs: { question: string; answer: string }[];
}

export function getSizeCalculatorPageData(locale: Locale): CalculatorPageData {
  switch (locale) {
    case 'es':
      return {
        title: 'Calculadora de Tamaño de Código QR — Distancia y Medidas',
        description: 'Calcula el tamaño físico y resolución en píxeles recomendada para códigos QR según la distancia de escaneo y densidad de datos.',
        h1: 'Calculadora de Tamaño de Código QR',
        subheadline: 'Calcula las dimensiones físicas óptimas, el tamaño de módulo y la resolución en píxeles para imprimir o exhibir códigos QR nítidos y fáciles de escanear.',
        overviewTitle: 'La Regla Óptica 10:1 para el Tamaño de Códigos QR',
        overviewParagraphs: [
          'La regla general estándar para códigos QR establece una proporción de distancia de escaneo de 10:1. Esto significa que el ancho del código QR debe ser aproximadamente un décimo de la distancia entre la cámara del smartphone y el código impreso.',
          'Sin embargo, para datos complejos como tarjetas vCard, claves de WiFi con caracteres especiales o textos largos, la cuadrícula de módulos aumenta de tamaño (por ejemplo, de Versión 2 a Versión 10). En estos casos, se recomienda aumentar el tamaño físico en un 20% a 30% adicional para que los módulos individuales sigan siendo detectables por los sensores de las cámaras móviles.',
          'Nunca imprimas un código QR por debajo de 2,0 × 2,0 cm (0,8 × 0,8 pulgadas). Por debajo de este umbral, el autofoco de las cámaras de smartphones compactos tiene dificultades para enfocar los módulos individuales.'
        ],
        tableTitle: 'Tabla de Referencia de Distancia y Tamaño Físico Recomendado',
        tableHeaders: ['Distancia de Escaneo', 'Tamaño Mínimo', 'Tamaño Recomendado', 'Ejemplo de Aplicación'],
        faqsTitle: 'Preguntas Frecuentes sobre el Tamaño de Códigos QR',
        faqs: [
          { question: '¿Cuál es la fórmula para calcular el tamaño de un código QR?', answer: 'La fórmula estándar es: Tamaño Físico = Distancia de Escaneo / 10. Para datos con alta densidad (como vCard o URLs largas) o niveles altos de corrección de errores (H), multiplica el resultado por 1,2 para asegurar un escaneo inmediato.' },
          { question: '¿Cuál es el tamaño físico mínimo absoluto para imprimir un código QR?', answer: 'El tamaño mínimo de seguridad es de 2,0 × 2,0 cm (0,8 × 0,8 pulgadas). Para tarjetas de visita y folletos de mano, se recomiendan de 2,5 × 2,5 cm a 3,5 × 3,5 cm.' },
          { question: '¿La cantidad de datos afecta el tamaño que necesita el código QR?', answer: 'Sí. A mayor cantidad de caracteres o nivel de corrección de errores (H), mayor es la versión del QR (más filas y columnas de puntos). Para mantener la legibilidad con muchos datos, el código QR físico debe imprimirse más grande.' },
          { question: '¿Qué es la zona silenciosa (margen) y cuánto debe medir?', answer: 'La zona silenciosa es el margen blanco continuo alrededor del código QR. Debe tener un grosor de al menos 4 módulos en los cuatro costados para que el escáner separe el código del fondo gráfico.' },
          { question: '¿Qué tamaño debe tener un código QR en una valla publicitaria o cartel grande?', answer: 'Para un cartel visto a 2 metros de distancia, el código debe medir al menos 20 × 20 cm. Para una valla publicitaria vista a 10 metros, el tamaño mínimo es de 100 × 100 cm (1 metro).' },
          { question: '¿Cómo afecta la resolución DPI a la impresión de un código QR?', answer: 'El DPI determina la nitidez de los píxeles. En imprenta comercial se debe imprimir a 300 DPI. Para imprenta profesional, utiliza siempre el formato vectorial SVG para evitar cualquier pérdida de calidad.' },
          { question: '¿El color o el contraste afectan la distancia de lectura?', answer: 'Sí. Los módulos negros sobre fondo blanco puro ofrecen el máximo alcance de lectura. Los fondos oscuros o colores con bajo contraste reducen drásticamente la distancia efectiva de lectura.' }
        ]
      };
    case 'de':
      return {
        title: 'QR-Code-Größenrechner — Maße & Scan-Distanz',
        description: 'Berechnen Sie die empfohlene physische QR-Code-Größe und Pixelauflösung basierend auf Scan-Distanz, Fehlerkorrektur und Datenkomplexität.',
        h1: 'QR-Code-Größenrechner',
        subheadline: 'Ermitteln Sie die optimalen Maße und Auflösungen für gestochen scharfe und scanbare QR-Codes basierend auf Leseabstand und Datenmenge.',
        overviewTitle: 'Die optische 10:1-Regel für QR-Code-Abmessungen',
        overviewParagraphs: [
          'Als Faustformel für QR-Code-Größen gilt das 10:1-Verhältnis: Die physische Breite des QR-Codes sollte mindestens ein Zehntel des Leseabstands betragen (z. B. 10 cm Breite bei 1 Meter Abstand).',
          'Bei komplexeren Inhalten wie umfangreichen vCards oder langen URLs steigt die Modulanzahl (höhere QR-Version). In solchen Fällen sollte der Code um 20% bis 30% vergrößert werden, damit die Kamera jeden einzelnen Punkt scharf erfassen kann.',
          'Drucken Sie QR-Codes niemals kleiner als 2,0 × 2,0 cm (0,8 × 0,8 Zoll), da Smartphone-Kameras unterhalb dieses Maßes an ihre optischen Autofokus-Grenzen stoßen.'
        ],
        tableTitle: 'Referenztabelle für Leseabstand und Codegröße',
        tableHeaders: ['Leseabstand', 'Mindestgröße', 'Empfohlene Größe', 'Typisches Anwendungsbeispiel'],
        faqsTitle: 'Häufig gestellte Fragen zur QR-Code-Größe',
        faqs: [
          { question: 'Wie berechnet man die ideale Größe eines QR-Codes?', answer: 'Die Grundformel lautet: Codegröße = Leseabstand / 10. Bei dichteren Codes (z. B. vCards) oder hoher Fehlerkorrekturstufe (H) multiplizieren Sie das Ergebnis mit 1,2.' },
          { question: 'Was ist die absolute Mindestgröße beim Drucken?', answer: 'Das Sicherheitsminimum liegt bei 2,0 × 2,0 cm. Für Visitenkarten und Speisekarten empfehlen wir 2,5 × 2,5 cm bis 3,5 × 3,5 cm.' },
          { question: 'Beeinflusst die Datenmenge die erforderliche Größe?', answer: 'Ja. Je mehr Zeichen kodiert sind, desto mehr Punkte (Module) besitzt der Code. Dichte Codes müssen größer gedruckt werden, um schnell gescannt zu werden.' },
          { question: 'Was ist die Ruhezone und wie groß muss sie sein?', answer: 'Die Ruhezone ist der weiße Rand um den Code. Sie muss mindestens 4 Module breit sein, damit der Kamerasensor das Muster vom Hintergrund isolieren kann.' },
          { question: 'Wie groß muss ein QR-Code auf Plakaten oder Bannern sein?', answer: 'Bei einem Wandplakat im Abstand von 1,5 Metern mindestens 15 × 15 cm; bei Außenplakaten aus 10 Metern Entfernung mindestens 100 × 100 cm (1 Meter).' },
          { question: 'Welche DPI-Auflösung wird für den Druck empfohlen?', answer: 'Für Handzettel und Verpackungen sind 300 DPI Standard. Für optimale Druckschärfe empfiehlt sich stets der Download im Vektor-SVG-Format.' },
          { question: 'Verringert geringer Kontrast die Scan-Reichweite?', answer: 'Ja. Dunkle Module auf weißem Hintergrund bieten die höchste Reichweite. Bei farbigen Mustern sinkt die Scan-Distanz deutlich.' }
        ]
      };
    case 'fr':
      return {
        title: 'Calculateur de Taille de QR Code — Distance et Dimensions',
        description: 'Calculez la taille physique idéale et la résolution en pixels de vos QR codes en fonction de la distance de numérisation.',
        h1: 'Calculateur de Taille de QR Code',
        subheadline: 'Déterminez les dimensions optimales pour vos QR codes imprimés et affichages grand format en fonction de la distance de visionnage.',
        overviewTitle: 'La Règle Optique 10:1 pour les Dimensions de QR Code',
        overviewParagraphs: [
          'La règle universelle en matière d\'impression de QR codes est le ratio 10:1 : la largeur physique du code doit être égale à au moins un dixième de la distance de numérisation (ex. 10 cm pour une distance de 1 mètre).',
          'Pour les données volumineuses comme les fiches vCard complètes ou les clés WiFi complexes, le nombre de modules augmente. Il convient alors d\'augmenter les dimensions physiques de 20% à 30% pour garantir un scan instantané.',
          'Ne descendez jamais sous le seuil de sécurité de 2,0 × 2,0 cm (0,8 × 0,8 pouce), limite sous laquelle l\'autofocus des téléphones peine à faire la mise au point.'
        ],
        tableTitle: 'Tableau de Référence Distance vs Taille Recommandée',
        tableHeaders: ['Distance de Lecture', 'Taille Minimale', 'Taille Recommandée', 'Exemple d\'Utilisation'],
        faqsTitle: 'Foire Aux Questions sur la Taille des QR Codes',
        faqs: [
          { question: 'Quelle est la formule pour calculer la taille d\'un QR code ?', answer: 'La formule de base est : Taille = Distance de lecture / 10. Pour les contenus denses ou avec logo (Niveau H), multipliez par 1,2.' },
          { question: 'Quelle est la taille minimale pour imprimer un QR code ?', answer: 'La dimension minimale de sécurité est de 2,0 × 2,0 cm. Pour les cartes de visite et menus, visez entre 2,5 × 2,5 cm et 3,5 × 3,5 cm.' },
          { question: 'La quantité de texte influence-t-elle la taille requise ?', answer: 'Oui. Plus le volume de données est important, plus la matrice compte de petits modules. Le code doit alors être agrandi sur le support papier.' },
          { question: 'Qu\'est-ce que la zone de silence (marge de sécurité) ?', answer: 'C\'est la bordure blanche entourant le code. Elle doit mesurer au minimum 4 modules de large sur chaque bord pour isoler le symbole.' },
          { question: 'Quelle taille prévoir pour une affiche ou un panneau extérieur ?', answer: 'Pour une affiche lue à 1,5 mètre, comptez au moins 15 × 15 cm. Pour un panneau lu à 10 mètres, prévoyez au minimum 100 × 100 cm (1 mètre).' },
          { question: 'Quelle résolution DPI choisir pour l\'impression ?', answer: 'La norme d\'imprimerie est de 300 DPI pour les formats tenus en main. Préférez toujours le format vectoriel SVG pour une netteté absolue.' },
          { question: 'Le manque de contraste réduit-il la distance de lecture ?', answer: 'Oui. Les modules noirs sur fond blanc pur assurent la distance maximale. Les contrastes faibles réduisent fortement la portée du capteur.' }
        ]
      };
    case 'pt':
      return {
        title: 'Calculadora de Tamanho de QR Code — Medidas e Distância',
        description: 'Calcule as dimensões físicas recomendadas e a resolução em pixels para códigos QR com base na distância de leitura.',
        h1: 'Calculadora de Tamanho de QR Code',
        subheadline: 'Descubra o tamanho ideal para impressão de códigos QR com base na distância de leitura e resolução DPI.',
        overviewTitle: 'A Regra Óptica 10:1 para Tamanho de QR Codes',
        overviewParagraphs: [
          'A diretriz clássica para impressão de QR codes baseia-se na relação de proporção 10:1: o tamanho físico do código deve ser de pelo menos um décimo da distância de leitura (por exemplo, 10 cm de largura para 1 metro de distância).',
          'Para conteúdos volumosos como cartões vCard completos ou textos longos, a quantidade de módulos aumenta (versão superior). Nesses casos, aumente o tamanho impresso em 20% a 30% adicionais para assegurar leitura instantânea.',
          'Nunca imprima um QR code abaixo de 2,0 × 2,0 cm (0,8 × 0,8 polegadas) para evitar problemas com a lente de foco dos celulares.'
        ],
        tableTitle: 'Tabela de Referência de Distância e Dimensões Recomendadas',
        tableHeaders: ['Distância de Leitura', 'Tamanho Mínimo', 'Tamanho Recomendado', 'Exemplo de Aplicação'],
        faqsTitle: 'Perguntas Frequentes sobre Tamanho de QR Code',
        faqs: [
          { question: 'Qual a fórmula para calcular o tamanho ideal de um QR code?', answer: 'A fórmula básica é: Tamanho = Distância de Leitura / 10. Para dados densos (como vCard) ou nível H de correção, multiplique por 1,2.' },
          { question: 'Qual o tamanho mínimo absoluto para impressão?', answer: 'O limite mínimo seguro é de 2,0 × 2,0 cm. Para cartões de visita e panfletos, use entre 2,5 × 2,5 cm e 3,5 × 3,5 cm.' },
          { question: 'O volume de dados altera o tamanho necessário do código?', answer: 'Sim. Quanto maior a quantidade de dados, mais pontos compõem a grade. Códigos densos precisam ser impressos em tamanho maior.' },
          { question: 'O que é a zona de silêncio (margem)?', answer: 'É a margem branca contínua ao redor do QR code. Deve possuir espessura mínima de 4 módulos nos quatro lados para que a câmera isole o símbolo.' },
          { question: 'Que tamanho usar em cartazes, banners e outdoors?', answer: 'Para cartazes vistos a 1,5 metro, use pelo menos 15 × 15 cm. Para outdoors vistos a 10 metros de distância, use no mínimo 100 × 100 cm (1 metro).' },
          { question: 'Qual a resolução DPI recomendada para gráficas?', answer: 'O padrão gráfico comercial é de 300 DPI. Para evitar qualquer perda de nitidez, baixe sempre no formato vetorial SVG.' },
          { question: 'Cores e contraste afetam a distância de leitura?', answer: 'Sim. Módulos pretos sobre fundo branco garantem o maior alcance. Cores claras com pouco contraste reduzem drasticamente a distância de leitura.' }
        ]
      };
    case 'it':
      return {
        title: 'Calcolatore Dimensioni QR Code — Misure e Distanza',
        description: 'Calcola la dimensione fisica e la risoluzione in pixel consigliata per i tuoi codici QR in base alla distanza di scansione.',
        h1: 'Calcolatore Dimensioni QR Code',
        subheadline: 'Ottimizza le dimensioni di stampa e la densità dei moduli per una scansione immediata da smartphone.',
        overviewTitle: 'La Regola Ottica 10:1 per le Dimensioni dei QR Code',
        overviewParagraphs: [
          'La regola fondamentale per la leggibilità dei QR code è la proporzione 10:1: la larghezza del codice deve corrispondere ad almeno un decimo della distanza di scansione (es. 10 cm per 1 metro di distanza).',
          'Per contenuti ad alta densità (come biglietti da visita vCard completi o link molto lunghi), il reticolo dei moduli diventa più fitto. In questi casi, aumenta le dimensioni del 20%-30% per agevolare l\'inquadratura.',
          'Non stampare mai un codice QR con dimensioni inferiori a 2,0 × 2,0 cm (0,8 × 0,8 pollici), soglia al di sotto della quale le fotocamere faticano a mettere a fuoco i singoli moduli.'
        ],
        tableTitle: 'Tabella di Riferimento Distanza vs Dimensione Consigliata',
        tableHeaders: ['Distanza di Scansione', 'Dimensione Minima', 'Dimensione Consigliata', 'Esempio di Utilizzo'],
        faqsTitle: 'Domande Frequenti sulle Dimensioni del QR Code',
        faqs: [
          { question: 'Qual è la formula per calcolare le dimensioni del QR code?', answer: 'La formula standard è: Dimensione = Distanza di lettura / 10. Per codici densi (vCard) o con correzione errori alta (H), moltiplica per 1,2.' },
          { question: 'Qual è la dimensione minima assoluta per la stampa?', answer: 'Il limite minimo di sicurezza è 2,0 × 2,0 cm. Per biglietti da visita e menu consigliamo tra 2,5 × 2,5 cm e 3,5 × 3,5 cm.' },
          { question: 'La quantità di dati incide sulle dimensioni necessarie?', answer: 'Sì. Più dati sono codificati, più punti compongono la matrice. I codici densi richiedono una dimensione di stampa maggiore.' },
          { question: 'Che cos\'è la zona di rispetto (margine di sicurezza)?', answer: 'È il bordo bianco che circonda il codice. Deve avere uno spessore di almeno 4 moduli su tutti i 4 lati per separare il codice dallo sfondo.' },
          { question: 'Quale dimensione usare per poster, vetrine e cartelloni?', answer: 'Per poster a 1,5 metri di distanza usa almeno 15 × 15 cm. Per cartelloni stradali a 10 metri usa almeno 100 × 100 cm (1 metro).' },
          { question: 'Quale risoluzione DPI è necessaria per la tipografia?', answer: 'La risoluzione standard per la stampa è 300 DPI. Per stampe professionali usa sempre il formato vettoriale SVG.' },
          { question: 'Il contrasto dei colori influisce sulla distanza di lettura?', answer: 'Sì. Moduli neri su sfondo bianco offrono la portata massima. Contrasti ridotti diminuiscono la distanza di lettura.' }
        ]
      };
    case 'hi':
      return {
        title: 'क्यूआर कोड आकार कैलकुलेटर — दूरी और सही साइज़',
        description: 'स्कैनिंग दूरी और डेटा घनत्व के आधार पर अपने क्यूआर कोड का सही भौतिक आकार और रिज़ॉल्यूशन मापें।',
        h1: 'क्यूआर कोड आकार कैलकुलेटर',
        subheadline: 'स्मार्टफोन से आसान और तेज़ स्कैनिंग के लिए अपने क्यूआर कोड का सही प्रिंट आकार निर्धारित करें।',
        overviewTitle: 'क्यूआर कोड आकार का 10:1 ऑप्टिकल अनुपात नियम',
        overviewParagraphs: [
          'क्यूआर कोड के लिए मानक 10:1 अनुपात नियम का पालन किया जाता है: कोड की चौड़ाई स्कैनिंग दूरी का कम से कम 10वां हिस्सा होनी चाहिए (जैसे 1 मीटर दूरी के लिए 10 सेमी चौड़ाई)।',
          'अधिक डेटा वाले कोड्स (जैसे विस्तृत vCard कार्ड या लंबी URLs) में डॉट्स की संख्या अधिक होती है। ऐसे मामलों में कोड का भौतिक आकार 20% से 30% बड़ा रखना चाहिए ताकि कैमरा तुरंत स्कैन कर सके।',
          'क्यूआर कोड को कभी भी 2.0 × 2.0 सेमी (0.8 × 0.8 इंच) से छोटा प्रिंट न करें, क्योंकि इससे छोटे आकार में फोन कैमरा फोकस नहीं कर पाता।'
        ],
        tableTitle: 'स्कैनिंग दूरी और अनुशंसित आकार संदर्भ तालिका',
        tableHeaders: ['स्कैन दूरी', 'न्यूनतम साइज़', 'अनुशंसित साइज़', 'उपयोग का उदाहरण'],
        faqsTitle: 'क्यूआर कोड साइज़ के बारे में अक्सर पूछे जाने वाले प्रश्न',
        faqs: [
          { question: 'क्यूआर कोड के आकार की गणना का सूत्र क्या है?', answer: 'मूल सूत्र है: कोड साइज़ = स्कैन दूरी / 10। अधिक डेटा या हाई एरर करेक्शन (H) के लिए परिणाम को 1.2 से गुणा करें।' },
          { question: 'प्रिंटिंग के लिए न्यूनतम सुरक्षित साइज़ क्या है?', answer: 'न्यूनतम सुरक्षा सीमा 2.0 × 2.0 सेमी है। विज़िटिंग कार्ड और पर्चों के लिए 2.5 × 2.5 सेमी से 3.5 × 3.5 सेमी साइज़ सही है।' },
          { question: 'क्या अधिक डेटा होने पर कोड का आकार बढ़ाना पड़ता है?', answer: 'हाँ, अधिक डेटा होने पर मैट्रिक्स में डॉट्स की संख्या बढ़ जाती है। स्पष्ट स्कैनिंग के लिए कोड को बड़ा प्रिंट करना चाहिए।' },
          { question: 'क्वाइट ज़ोन (सफ़ेद किनारा) क्या है और कितना होना चाहिए?', answer: 'यह कोड के चारों तरफ का सफ़ेद खाली किनारा है। यह चारों तरफ कम से कम 4 मॉड्यूल (डॉट्स) चौड़ा होना आवश्यक है।' },
          { question: 'पोस्टर या होर्डिंग बोर्ड पर कोड कितना बड़ा होना चाहिए?', answer: '1.5 मीटर दूरी से देखने वाले पोस्टर पर कम से कम 15 × 15 सेमी और 10 मीटर दूरी वाले होर्डिंग पर 100 × 100 सेमी (1 मीटर) होना चाहिए।' },
          { question: 'प्रिंटिंग के लिए कौन सा DPI और फॉर्मेट सही है?', answer: 'हाथ में पकड़ने वाले पर्चों के लिए 300 DPI मानक है। बेहतरीन प्रिंटिंग के लिए हमेशा वेक्टर SVG फॉर्मेट का उपयोग करें।' },
          { question: 'क्या रंग और कंट्रास्ट से स्कैनिंग दूरी प्रभावित होती है?', answer: 'हाँ, सफ़ेद बैकग्राउंड पर काले डॉट्स सबसे दूर से स्कैन होते हैं। कम कंट्रास्ट वाले रंगों से स्कैनिंग दूरी घट जाती है।' }
        ]
      };
    default: // 'en'
      return {
        title: 'QR Code Size Calculator — Scan Distance & Dimensions',
        description: 'Calculate the exact recommended physical QR code size and pixel resolution based on scan distance, error correction, and content density.',
        h1: 'QR Code Size Calculator',
        subheadline: 'Determine the optimal physical dimensions, module size, and raster pixel resolution for your QR codes based on real-world scanning distance and content complexity.',
        overviewTitle: 'The 10:1 Optical Rule for QR Code Sizing',
        overviewParagraphs: [
          'The established benchmark for optical QR scannability is the 10:1 distance-to-size ratio. This means the width and height of the printed QR code should be approximately one-tenth of the distance between the mobile camera lens and the printed surface.',
          'However, real-world conditions require nuance. For high-density payloads (such as multi-field vCards or complex URLs) and high error correction levels (Level H), the module matrix increases from 21×21 (Version 1) up to 73×73 modules (Version 14). To preserve individual module scannability, sizing should be expanded by 20% to 30%.',
          'Never print below the 2.0 × 2.0 cm (0.8 × 0.8 in) safety floor. Below this threshold, compact mobile camera lenses struggle to resolve individual modules.'
        ],
        tableTitle: 'Distance to Physical Size Reference Table',
        tableHeaders: ['Viewing Distance', 'Minimum Size', 'Recommended Size', 'Common Media / Use Case'],
        faqsTitle: 'Frequently Asked Questions About QR Code Sizing',
        faqs: [
          { question: 'What is the formula to calculate QR code size?', answer: 'The standard formula is: Size = Distance / 10. For high-density data or Level H error correction, multiply by 1.2 to 1.3 to guarantee rapid camera focus.' },
          { question: 'What is the absolute minimum physical size to print a QR code?', answer: 'The minimum safety baseline is 2.0 × 2.0 cm (0.8 × 0.8 inches). For business cards and flyers, size between 2.5 × 2.5 cm and 3.5 × 3.5 cm.' },
          { question: 'Does content density affect required QR code size?', answer: 'Yes. Higher payload characters increase the QR version and dot density. Denser codes require larger physical print sizes to maintain optical scannability.' },
          { question: 'What is the quiet zone margin and why is it needed?', answer: 'The quiet zone is the clear white border surrounding the QR symbol. It must be at least 4 modules wide on all 4 sides so decoders can isolate the matrix.' },
          { question: 'How big should a QR code be on a poster or billboard?', answer: 'For indoor posters viewed from 1.5 meters away, print at least 15 × 15 cm. For roadside billboards viewed from 10 meters, print at least 100 × 100 cm.' },
          { question: 'How does DPI resolution relate to physical QR code size?', answer: 'DPI determines raster pixel density. Handheld print requires 300 DPI. For commercial presses, always export vector SVG to eliminate resolution loss.' },
          { question: 'Does color contrast affect scanning distance?', answer: 'Yes. High-contrast dark modules on pure white backgrounds maximize scan distance. Inverted or pastel color palettes reduce scan range significantly.' }
        ]
      };
  }
}

export function getPrintCalculatorPageData(locale: Locale): CalculatorPageData {
  switch (locale) {
    case 'es':
      return {
        title: 'Calculadora de Impresión de Código QR — DPI y Píxeles',
        description: 'Calcula dimensiones exactas para imprenta, píxeles requeridos a 300 DPI y checklist de preimpresión para tarjetas, folletos y carteles.',
        h1: 'Calculadora de Tamaño de Impresión de Código QR',
        subheadline: 'Garantiza una nitidez perfecta en imprenta comercial. Calcula píxeles exactos a 300 DPI, grosor de módulo y checklist de preimpresión.',
        overviewTitle: 'Cómo Funciona la Impresión Profesional de Códigos QR',
        overviewParagraphs: [
          'Preparar un código QR para imprenta offset, digital o packaging requiere sincronizar las medidas en milímetros con la resolución de salida en puntos por pulgada (DPI).',
          'En artes gráficas, el estándar para materiales que se sostienen con la mano es de 300 DPI. Para carteles a distancia se utilizan de 100 a 150 DPI.',
          'Para imprenta comercial, prefiere siempre el formato vectorial SVG, que elimina por completo los problemas de resolución y pixelado.'
        ],
        tableTitle: 'Tabla de Píxeles Requeridos a 300 DPI según Tamaño Físico',
        tableHeaders: ['Formato Impreso', 'Medida en cm', 'Píxeles a 300 DPI', 'Distancia Óptima'],
        faqsTitle: 'Preguntas Frecuentes sobre Impresión de Códigos QR',
        faqs: [
          { question: '¿Cuál es el mejor tamaño y DPI para imprimir un código QR?', answer: 'Para materiales de mano (tarjetas de visita, folletos, menús), el estándar es 300 DPI con un tamaño físico de 2,5 × 2,5 cm a 5,0 × 5,0 cm. A 300 DPI, un código de 5 × 5 cm requiere 591 × 591 píxeles.' },
          { question: '¿Qué DPI debo utilizar para imprimir un código QR?', answer: 'Usa 300 DPI para tarjetas y folletos en mano. Usa 150 DPI para carteles a 1-2 metros y 100-150 DPI para vallas exteriores.' },
          { question: '¿Cómo calcular los píxeles de un código QR para imprimir?', answer: 'Fórmula: Píxeles = (Centímetros / 2,54) × DPI. Por ejemplo, 10 × 10 cm a 300 DPI = (10 / 2,54) × 300 = 1181 × 1181 píxeles.' },
          { question: '¿Debo usar SVG o PNG para imprenta comercial?', answer: 'Utiliza siempre SVG (vectorial) para imprenta profesional, InDesign e Illustrator. Los vectores nunca pierden nitidez.' },
          { question: '¿Qué tamaño debe tener un código QR en una tarjeta de visita?', answer: 'Entre 2,5 × 2,5 cm y 3,0 × 3,0 cm con un enlace dinámico corto para que los puntos sean grandes y claros.' },
          { question: '¿Qué tamaño debe tener un código QR en un cartel o escaparate?', answer: 'En carteles interiores de 10 × 10 cm a 15 × 15 cm. En escaparates vistos desde la acera de 18 × 18 cm a 25 × 25 cm.' },
          { question: '¿Afecta el DPI al tamaño físico en papel?', answer: 'No. El DPI define la densidad de píxeles, no el tamaño en centímetros. Un archivo a 300 DPI tendrá bordes nítidos, mientras que a 72 DPI se verá borroso.' }
        ]
      };
    case 'de':
      return {
        title: 'QR-Code-Druckgrößenrechner — DPI, Pixel & Prepress',
        description: 'Berechnen Sie exakte Druckmaße, Pixel bei 300 DPI und Vektor-SVG-Empfehlungen für Visitenkarten, Flyer und Plakate.',
        h1: 'QR-Code-Druckgrößenrechner',
        subheadline: 'Garantiert gestochen scharfen Druck. Berechnen Sie Pixel bei 300 DPI, Modulstärken und Druckqualitäts-Kriterien.',
        overviewTitle: 'Druckvorstufen-Anforderungen für QR-Codes',
        overviewParagraphs: [
          'Für den professionellen Offset-, Digital- oder Verpackungsdruck müssen Millimetermaße und Druckauflösung (DPI) exakt abgestimmt werden.',
          'Für Drucksachen in Leseabstand (Visitenkarten, Flyer) gilt der Industriestandard von 300 DPI. Für Großplakate reichen 100 bis 150 DPI.',
          'Nutzen Sie für professionelle Drucksachen stets das Vektor-SVG-Format, um Skalierungsverluste vollständig auszuschließen.'
        ],
        tableTitle: 'Erforderliche Pixel bei 300 DPI nach Codegröße',
        tableHeaders: ['Druckmedium', 'Maße in cm', 'Pixel bei 300 DPI', 'Optimaler Leseabstand'],
        faqsTitle: 'Häufig gestellte Fragen zum Drucken von QR-Codes',
        faqs: [
          { question: 'Welche Größe und DPI sind optimal für den Druck?', answer: 'Für Handzettel und Speisekarten sind 300 DPI und 2,5 × 2,5 cm bis 5,0 × 5,0 cm ideal. Bei 5 × 5 cm entsprechen 300 DPI genau 591 × 591 Pixeln.' },
          { question: 'Welche DPI-Auflösung sollte ich wählen?', answer: '300 DPI für Drucksachen in der Hand, 150 DPI für Schilder aus 1–2 Metern und 100–150 DPI für große Außenplakate.' },
          { question: 'Wie berechnet man die Pixel für den Druck?', answer: 'Formel: Pixel = (Zentimeter / 2,54) × DPI. Beispiel: 10 × 10 cm bei 300 DPI = (10 / 2,54) × 300 = 1181 × 1181 Pixel.' },
          { question: 'Sollte ich SVG oder PNG für den Druck verwenden?', answer: 'Immer Vektor-SVG für InDesign, Illustrator und professionelle Druckereien, da Vektoren stufenlos scharf skalierbar sind.' },
          { question: 'Wie groß sollte der QR-Code auf einer Visitenkarte sein?', answer: 'Mindestens 2,5 × 2,5 cm bis 3,0 × 3,0 cm mit kurzen dynamischen URLs für große Punkte.' },
          { question: 'Wie groß sollte ein QR-Code auf Plakaten oder Schaufenstern sein?', answer: 'Auf Plakaten 10 × 10 cm bis 15 × 15 cm; auf Schaufenstern 18 × 18 cm bis 25 × 25 cm.' },
          { question: 'Verändert DPI die physische Druckgröße?', answer: 'Nein. DPI bestimmt die Punktdichte. Eine 10 × 10 cm Grafik bei 300 DPI ist randscharf, bei 72 DPI stark verpixelt.' }
        ]
      };
    case 'fr':
      return {
        title: 'Calculateur d\'Impression QR Code — DPI et Pixels',
        description: 'Calculez les dimensions d\'impression exactes, les pixels à 300 DPI et les recommandations vectorielles SVG pour cartes et affiches.',
        h1: 'Calculateur de Taille d\'Impression QR Code',
        subheadline: 'Assurez une netteté parfaite à l\'impression. Calculez les pixels exacts à 300 DPI, l\'épaisseur des modules et le checklist prépresse.',
        overviewTitle: 'Comment Fonctionne l\'Impression de QR Codes',
        overviewParagraphs: [
          'La préparation d\'un QR code pour l\'impression offset ou numérique nécessite de convertir les millimètres en pixels selon la résolution DPI.',
          'Pour les documents tenus en main (cartes de visite, menus), la norme est de 300 DPI. Pour l\'affichage grand format, 100 à 150 DPI suffisent.',
          'Pour l\'impression professionnelle, privilégiez toujours le format vectoriel SVG sans aucune pixellisation.'
        ],
        tableTitle: 'Pixels Requis à 300 DPI selon les Dimensions',
        tableHeaders: ['Support d\'Impression', 'Taille en cm', 'Pixels à 300 DPI', 'Distance Optimale'],
        faqsTitle: 'Foire Aux Questions sur l\'Impression de QR Codes',
        faqs: [
          { question: 'Quelle est la taille et la résolution DPI idéale pour imprimer ?', answer: 'Pour les cartes et dépliants, 300 DPI et 2,5 × 2,5 cm à 5,0 × 5,0 cm. À 300 DPI, 5 × 5 cm équivaut à 591 × 591 pixels.' },
          { question: 'Quel DPI utiliser pour imprimer un QR code ?', answer: '300 DPI pour les cartes et menus en main ; 150 DPI pour les affiches à 1-2 mètres ; 100-150 DPI pour les panneaux d\'affichage.' },
          { question: 'Comment calculer les pixels d\'un QR code pour l\'impression ?', answer: 'Formule : Pixels = (Centimètres / 2,54) × DPI. Exemple : 10 × 10 cm à 300 DPI = (10 / 2,54) × 300 = 1181 × 1181 pixels.' },
          { question: 'Dois-je utiliser SVG ou PNG pour l\'imprimerie ?', answer: 'Toujours le format vectoriel SVG pour les logiciels de PAO (InDesign, Illustrator) et les presses d\'imprimerie.' },
          { question: 'Quelle taille pour un QR code sur carte de visite ?', answer: 'Entre 2,5 × 2,5 cm et 3,0 × 3,0 cm avec une URL courte dynamique pour préserver de gros modules nets.' },
          { question: 'Quelle taille pour une affiche ou une vitrine ?', answer: 'Sur affiche 10 × 10 cm à 15 × 15 cm ; sur vitrine 18 × 18 cm à 25 × 25 cm.' },
          { question: 'Le DPI modifie-t-il la taille physique sur le papier ?', answer: 'Non. Le DPI détermine la netteté des pixels. À 300 DPI les bords sont nets, à 72 DPI ils sont flous et pixelisés.' }
        ]
      };
    case 'pt':
      return {
        title: 'Calculadora de Impressão de QR Code — DPI e Pixels',
        description: 'Calcule as medidas exatas para gráfica, pixels necessários a 300 DPI e checklist de pré-impressão para cartões e cartazes.',
        h1: 'Calculadora de Tamanho de Impressão de QR Code',
        subheadline: 'Garanta máxima nitidez para gráficas. Calcule pixels exatos a 300 DPI, espessura dos módulos e checklist pré-impressão.',
        overviewTitle: 'Como Funciona a Impressão Gráfica de QR Codes',
        overviewParagraphs: [
          'Preparar um QR code para impressão offset ou digital exige converter as medidas em centímetros na resolução de pontos por polegada (DPI).',
          'Para materiais de mão (cartões, panfletos), o padrão gráfico é 300 DPI. Para painéis externos, 100 a 150 DPI são adequados.',
          'Para produção profissional, utilize sempre o formato vetorial SVG, livre de perda de resolução em qualquer tamanho.'
        ],
        tableTitle: 'Tabela de Pixels a 300 DPI por Tamanho Físico',
        tableHeaders: ['Formato Impresso', 'Medida em cm', 'Pixels a 300 DPI', 'Distância Ótima'],
        faqsTitle: 'Perguntas Frequentes sobre Impressão de QR Code',
        faqs: [
          { question: 'Qual o melhor tamanho e DPI para impressão gráfica?', answer: 'Para materiais de mão, 300 DPI com dimensões de 2,5 × 2,5 cm a 5,0 × 5,0 cm. A 300 DPI, 5 × 5 cm exige 591 × 591 pixels.' },
          { question: 'Qual DPI devo utilizar no arquivo impresso?', answer: '300 DPI para cartões e cardápios; 150 DPI para cartazes a 1-2 metros; 100-150 DPI para outdoors.' },
          { question: 'Como calcular os pixels para impressão?', answer: 'Fórmula: Pixels = (Centímetros / 2,54) × DPI. Exemplo: 10 × 10 cm a 300 DPI = (10 / 2,54) × 300 = 1181 × 1181 pixels.' },
          { question: 'Devo usar SVG ou PNG para gráficas comerciais?', answer: 'Sempre SVG vetorial para programas gráficos (InDesign, Illustrator) e impressoras profissionais.' },
          { question: 'Qual o tamanho recomendado em cartões de visita?', answer: 'Entre 2,5 × 2,5 cm e 3,0 × 3,0 cm com links curtos para manter os módulos grandes.' },
          { question: 'Qual o tamanho para cartazes e vitrines?', answer: 'Em cartazes de 10 × 10 cm a 15 × 15 cm; em vitrines de 18 × 18 cm a 25 × 25 cm.' },
          { question: 'O DPI altera a medida física no papel?', answer: 'Não. O DPI define a nitidez da imagem. Em 300 DPI os contornos são nítidos, enquanto em 72 DPI ficam borrados.' }
        ]
      };
    case 'it':
      return {
        title: 'Calcolatore Stampa QR Code — DPI e Pixel per Tipografia',
        description: 'Calcola le dimensioni di stampa esatte, i pixel a 300 DPI e le linee guida vettoriali SVG per tipografie e packaging.',
        h1: 'Calcolatore Dimensioni Stampa QR Code',
        subheadline: 'Assicura massima nitidezza in tipografia. Calcola i pixel esatti a 300 DPI, lo spessore dei moduli e la checklist di pre-stampa.',
        overviewTitle: 'Come Funziona la Stampa Tipografica dei QR Code',
        overviewParagraphs: [
          'La preparazione di un codice QR per la stampa tipografica richiede di convertire le misure in millimetri nei pixel corrispondenti ai DPI del processo di stampa.',
          'Lo standard per materiali tenuti in mano (biglietti, volantini) è 300 DPI. Per affissioni a distanza sono sufficienti 100-150 DPI.',
          'Per la stampa commerciale usa sempre il formato vettoriale SVG che garantisce bordi perfetti a qualsiasi scala.'
        ],
        tableTitle: 'Pixel Richiesti a 300 DPI per Dimensione Fisica',
        tableHeaders: ['Supporto di Stampa', 'Misura in cm', 'Pixel a 300 DPI', 'Distanza Ottimale'],
        faqsTitle: 'Domande Frequenti sulla Stampa dei QR Code',
        faqs: [
          { question: 'Qual è la dimensione e il DPI ideale per la stampa?', answer: 'Per materiali in mano, 300 DPI e dimensioni da 2,5 × 2,5 cm a 5,0 × 5,0 cm. A 300 DPI, 5 × 5 cm corrispondono a 591 × 591 pixel.' },
          { question: 'Quale DPI impostare per la stampa tipografica?', answer: '300 DPI per biglietti da visita e menu; 150 DPI per poster a 1-2 metri; 100-150 DPI per cartelloni esterni.' },
          { question: 'Come calcolare i pixel per la stampa?', answer: 'Formula: Pixel = (Centimetri / 2,54) × DPI. Esempio: 10 × 10 cm a 300 DPI = (10 / 2,54) × 300 = 1181 × 1181 pixel.' },
          { question: 'Devo usare SVG o PNG per la tipografia?', answer: 'Sempre SVG vettoriale per software di grafica (InDesign, Illustrator) e stampanti commerciali.' },
          { question: 'Che dimensione usare sui biglietti da visita?', answer: 'Tra 2,5 × 2,5 cm e 3,0 × 3,0 cm con link brevi per moduli grandi e chiari.' },
          { question: 'Che dimensione usare su poster e vetrine?', answer: 'Su poster da 10 × 10 cm a 15 × 15 cm; su vetrine da 18 × 18 cm a 25 × 25 cm.' },
          { question: 'Il valore DPI modifica le dimensioni sulla carta?', answer: 'No. I DPI determinano la nitidezza. A 300 DPI i bordi sono nitidissimi, a 72 DPI sgranati e sfocati.' }
        ]
      };
    case 'hi':
      return {
        title: 'क्यूआर कोड प्रिंट आकार कैलकुलेटर — DPI और पिक्सेल',
        description: 'प्रिंटिंग के लिए सटीक भौतिक साइज़, 300 DPI पर आवश्यक पिक्सेल और विज़िटिंग कार्ड व पोस्टर हेतु प्रीप्रेस गाइड मापें।',
        h1: 'क्यूआर कोड प्रिंट आकार कैलकुलेटर',
        subheadline: 'प्रिंटिंग में साफ और स्पष्ट क्वालिटी सुनिश्चित करें। 300 DPI पर पिक्सेल, मॉड्यूल की मोटाई और प्रीप्रेस गाइड मापें।',
        overviewTitle: 'क्यूआर कोड प्रिंटिंग कैसे काम करती है',
        overviewParagraphs: [
          'ऑफसेट या डिजिटल प्रिंटिंग में साफ प्रिंट के लिए सेंटीमीटर के माप को DPI (डॉट्स प्रति इंच) के साथ सिंक्रनाइज़ करना पड़ता है।',
          'हाथ में पकड़ने वाले विज़िटिंग कार्ड और पर्चों के लिए 300 DPI का मानक है। बड़े होर्डिंग्स के लिए 100 से 150 DPI पर्याप्त है।',
          'कमर्शियल प्रिंटिंग के लिए हमेशा वेक्टर SVG फॉर्मेट का उपयोग करें, जो किसी भी साइज़ में कभी नहीं फटता।'
        ],
        tableTitle: 'भौतिक साइज़ के आधार पर 300 DPI पर आवश्यक पिक्सेल तालिका',
        tableHeaders: ['प्रिंट सामग्री', 'माप (सेमी)', '300 DPI पर पिक्सेल', 'अनुकूल दूरी'],
        faqsTitle: 'प्रिंटिंग के बारे में अक्सर पूछे जाने वाले प्रश्न',
        faqs: [
          { question: 'प्रिंटिंग के लिए सबसे अच्छा साइज़ और DPI क्या है?', answer: 'हाथ में पकड़ने वाले पर्चों के लिए 300 DPI और 2.5 × 2.5 सेमी से 5.0 × 5.0 सेमी साइज़ आदर्श है। 300 DPI पर 5 × 5 सेमी के लिए 591 × 591 पिक्सेल चाहिए।' },
          { question: 'प्रिंटिंग के लिए कौन सा DPI चुनना चाहिए?', answer: 'विज़िटिंग कार्ड और मेन्यू के लिए 300 DPI, 1-2 मीटर दूरी वाले पोस्टर के लिए 150 DPI और होर्डिंग्स के लिए 100-150 DPI रखें।' },
          { question: 'प्रिंट के लिए आवश्यक पिक्सेल कैसे निकालें?', answer: 'सूत्र: पिक्सेल = (सेंटीमीटर / 2.54) × DPI। उदाहरण: 300 DPI पर 10 × 10 सेमी = (10 / 2.54) × 300 = 1181 × 1181 पिक्सेल।' },
          { question: 'प्रिंटिंग के लिए SVG बेहतर है या PNG?', answer: 'प्रोफेशनल प्रिंटिंग के लिए हमेशा वेक्टर SVG चुनें क्योंकि यह किसी भी आकार में साफ और शार्प रहता है।' },
          { question: 'विज़िटिंग कार्ड पर कोड कितना बड़ा होना चाहिए?', answer: '2.5 × 2.5 सेमी से 3.0 × 3.0 सेमी और शॉर्ट डायनेमिक URL का उपयोग करें ताकि डॉट्स बड़े और स्पष्ट रहें।' },
          { question: 'पोस्टर या दुकान के बोर्ड पर साइज़ क्या होना चाहिए?', answer: 'पोस्टर पर 10 × 10 सेमी से 15 × 15 सेमी और दुकान के बोर्ड पर 18 × 18 सेमी से 25 × 25 सेमी रखें।' },
          { question: 'क्या DPI से कागज़ पर कोड का भौतिक साइज़ बदलता है?', answer: 'नहीं, DPI इमेज की शार्पनेस तय करता है, साइज़ नहीं। 300 DPI पर किनारे एकदम साफ दिखते हैं, जबकि 72 DPI पर धुंधले दिखते हैं।' }
        ]
      };
    default: // 'en'
      return {
        title: 'QR Code Print Size Calculator — DPI, Pixels & Prepress',
        description: 'Calculate exact print dimensions, required raster pixels at 300 DPI, vector SVG prepress recommendations, and optical scan ranges.',
        h1: 'QR Code Print Size Calculator',
        subheadline: 'Ensure razor-sharp commercial print output. Calculate exact pixel dimensions at 300 DPI, module thickness, and prepress quality metrics for any print medium.',
        overviewTitle: 'How QR Code Printing Size Works',
        overviewParagraphs: [
          'Preparing a QR code for commercial offset, digital, flexographic, or screen printing requires synchronizing physical millimeter dimensions with digital raster resolution.',
          'While screen interfaces render at 72 or 96 DPI, commercial printing presses operate at 300 DPI for handheld items and 100 to 150 DPI for outdoor signage.',
          'Always supply vector SVG files to commercial print shops to completely eliminate pixelation at any physical scale.'
        ],
        tableTitle: 'Required Pixels at 300 DPI by Physical Dimension',
        tableHeaders: ['Print Format', 'Size in cm', 'Pixels at 300 DPI', 'Optimal Distance'],
        faqsTitle: 'Frequently Asked Questions About Printing QR Codes',
        faqs: [
          { question: 'What is the best QR code size and DPI for printing?', answer: 'For handheld printed materials (business cards, flyers, menus), the standard is 300 DPI with physical size 2.5 × 2.5 cm to 5.0 × 5.0 cm. At 300 DPI, a 5 × 5 cm code requires 591 × 591 pixels.' },
          { question: 'What DPI should I use for a printed QR code?', answer: 'Use 300 DPI for handheld cards and menus; 150 DPI for posters viewed from 1-2 meters; 100-150 DPI for outdoor billboards.' },
          { question: 'How many pixels does a QR code need for printing?', answer: 'Formula: Pixels = (Centimeters / 2.54) × DPI. For example, 10 × 10 cm at 300 DPI = (10 / 2.54) × 300 = 1,181 × 1,181 pixels.' },
          { question: 'Should I use SVG or PNG for professional commercial printing?', answer: 'Always use SVG (vector) for graphic design (InDesign, Illustrator) and commercial printing. Vectors never lose sharpness.' },
          { question: 'How big should a QR code be on a business card?', answer: 'Between 2.5 × 2.5 cm (1.0 × 1.0 in) and 3.0 × 3.0 cm (1.2 × 1.2 in) using short dynamic links to keep modules large and crisp.' },
          { question: 'How big should a QR code be on a poster or window sign?', answer: 'On wall posters size between 10 × 10 cm and 15 × 15 cm. On storefront windows size between 18 × 18 cm and 25 × 25 cm.' },
          { question: 'Does DPI affect the physical size of a QR code?', answer: 'No. DPI defines pixel density and sharpness, not physical size. A 300 DPI file is razor sharp, whereas 72 DPI is blurry.' }
        ]
      };
  }
}
