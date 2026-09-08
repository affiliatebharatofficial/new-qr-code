import type { Locale } from '../../config';
import type { GuideArticleData } from './types';

export function getWhatIsAQRCodeData(locale: Locale): GuideArticleData {
  switch (locale) {
    case 'es':
      return {
        title: '¿Qué es un Código QR? Guía y Anatomía Técnica',
        description: 'Aprende qué es un código QR, cómo funciona la matriz 2D, niveles de corrección Reed-Solomon, modos de datos y reglas para escanear sin errores.',
        badge: 'Guía Completa',
        h1: '¿Qué es un Código QR? Anatomía, Historia y Funcionamiento',
        subheadline: 'Descubre la ingeniería detrás de los códigos Quick Response: cómo codifican datos en dos dimensiones, cómo los leen los sensores en milisegundos y cómo la corrección de errores permite insertar logos sin romper la lectura.',
        readingTime: '7 min de lectura',
        updatedDate: 'Septiembre 2026',
        quickTakeawaysTitle: 'Puntos Clave Rápidos',
        quickTakeaways: [
          { label: 'Matriz Bidimensional', text: 'Almacena información tanto en el eje horizontal como en el vertical, con capacidad de hasta 7.089 caracteres numéricos.' },
          { label: 'Lectura Omnidireccional 360°', text: 'Los patrones de búsqueda en las tres esquinas permiten al sensor reconocer el código desde cualquier ángulo.' },
          { label: 'Resiliencia Reed-Solomon', text: 'Recupera hasta un 30% de datos dañados o tapados, lo que permite incrustar logotipos corporativos en el centro.' },
          { label: 'Permanente y Privado', text: 'Los códigos QR estáticos estándar no caducan nunca y funcionan sin servidores externos ni bases de datos.' },
        ],
        tocTitle: 'Tabla de Contenidos',
        sections: [
          {
            id: 'history',
            heading: '1. Origen e Historia del Código QR',
            paragraphs: [
              'El código QR fue inventado en 1994 por Masahiro Hara y su equipo en Denso Wave, una filial del grupo automotriz Toyota en Japón. En las fábricas, los operarios rastreaban cientos de piezas con códigos de barras 1D lineales tradicionales. Al poder almacenar únicamente unos 20 caracteres alfanuméricos, los trabajadores debían escanear hasta diez códigos distintos en una sola caja de componentes.',
              'Inspirado por el tablero del juego Go con sus piedras blancas y negras, Hara concibió una cuadrícula bidimensional de módulos que pudiera codificar datos tanto en el eje X como en el Y de manera simultánea.',
              'Denso Wave liberó la patente al dominio público sin exigir cánones ni royalties, permitiendo su estandarización internacional bajo la norma ISO/IEC 18004. Hoy en día, los códigos QR son la tecnología puente por excelencia entre el mundo físico y el digital.',
            ],
          },
          {
            id: 'how-it-works',
            heading: '2. Cómo Funciona la Codificación en Matriz 2D',
            paragraphs: [
              'Un código QR es en esencia un lenguaje binario óptico. Los ordenadores procesan bits (0s y 1s). El código QR traduce estos bits directamente a pequeños cuadrados geométricos llamados módulos:',
              'Un módulo oscuro suele representar un bit 1, mientras que un módulo claro representa un bit 0. Al capturar la imagen, el software del teléfono binariza la escena, detecta las esquinas, corrige la inclinación y reconstruye el flujo de bits decodificándolo según la codificación establecida (como UTF-8).',
            ],
          },
          {
            id: 'anatomy',
            heading: '3. Anatomía Completa de un Código QR',
            paragraphs: [
              'Cada parte de un código QR tiene una función matemática estricta y definida:',
            ],
            subsections: [
              {
                subheading: 'Patrones de Búsqueda (Ojos de las Esquinas)',
                text: 'Los tres grandes cuadrados en las esquinas superior izquierda, superior derecha e inferior izquierda. Tienen una proporción de módulos única de 1:1:3:1:1 que nunca ocurre de forma natural en documentos impresos, permitiendo a la cámara identificar el código al instante en 360 grados.',
              },
              {
                subheading: 'Patrones de Alineación',
                text: 'Cuadrados concéntricos más pequeños distribuidos en códigos de mayor densidad. Corrigen la curvatura y distorsión óptica cuando el código se imprime sobre botellas, envases flexibles o superficies rugosas.',
              },
              {
                subheading: 'Líneas de Sincronización (Timing)',
                text: 'Filas de módulos alternos blancos y negros que unen los patrones de búsqueda. Actúan como regla milimétrica para que el decodificador conozca las coordenadas exactas de cada fila y columna.',
              },
              {
                subheading: 'Zona Silenciosa (Margen de Seguridad)',
                text: 'Un borde blanco continuo de al menos 4 módulos de grosor en todo el perímetro. Si este margen se rompe con textos o fondos gráficos, la cámara no podrá aislar el código QR.',
              },
            ],
          },
          {
            id: 'error-correction',
            heading: '4. Corrección de Errores Reed-Solomon',
            paragraphs: [
              'El algoritmo matemático Reed-Solomon añade bloques de redundancia polinómica. Esto permite que el lector reconstruya la información completa aunque una parte del código sufra arañazos, manchas de café o se tape con un logotipo publicitario:',
            ],
            bullets: [
              'Nivel L (Bajo): Recupera hasta un 7% de datos dañados. Ideal para pantallas limpias y diapositivas digitales.',
              'Nivel M (Medio - Predeterminado): Recupera hasta un 15%. Estándar para folletos, etiquetas de producto y embalajes.',
              'Nivel Q (Cuartil): Recupera hasta un 25%. Recomendado para cartelería exterior expuesta a la intemperie.',
              'Nivel H (Alto): Recupera hasta un 30%. Obligatorio si vas a colocar tu logo o imagen en el centro del código.',
            ],
          },
          {
            id: 'best-practices',
            heading: '5. Reglas de Tamaño Físico y Contraste Óptico',
            paragraphs: [
              'Para asegurar que cualquier persona pueda escanear tu código con su móvil sin problemas:',
            ],
            bullets: [
              'Regla 10:1: El ancho físico del código debe ser al menos una décima parte de la distancia de escaneo (ej. 10 cm para leer a 1 metro).',
              'Tamaño Mínimo: Nunca imprimas por debajo de 2,0 × 2,0 cm (0,8 × 0,8 pulgadas) en tarjetas o cartas.',
              'Máximo Contraste: Utiliza siempre módulos oscuros sobre fondo claro (óptimo: negro sobre blanco puro). Evita combinaciones de poco contraste como amarillo sobre blanco.',
              'Imprime en Vector SVG: Para imprenta comercial profesional, exporta siempre en SVG para evitar pixelación.',
            ],
          },
        ],
        faqsTitle: 'Preguntas Frecuentes sobre Códigos QR',
        faqs: [
          { question: '¿Qué significa la sigla QR?', answer: 'QR significa "Quick Response" (Respuesta Rápida), nombrado así por su capacidad de decodificación casi instantánea.' },
          { question: '¿Los códigos QR estáticos tienen fecha de caducidad?', answer: 'No. Los códigos QR estáticos codifican los datos directamente en los módulos físicos y son válidos para siempre.' },
          { question: '¿Cuánta información puede almacenar un código QR?', answer: 'Un código QR estándar puede almacenar hasta 7.089 dígitos numéricos o 4.296 caracteres alfanuméricos.' },
          { question: '¿Por qué mi teléfono no lee el código QR?', answer: 'Las causas más habituales son falta de contraste, no respetar la zona silenciosa blanca de 4 módulos, o imprimirlo a un tamaño demasiado pequeño.' },
        ],
        ctaTitle: 'Crea tu Código QR Gratis y Personalizado',
        ctaDesc: 'Genera códigos QR de alta resolución con logotipo corporativo, colores a medida y descarga inmediata en SVG y PNG.',
        ctaButtonText: 'Abrir Generador Gratis',
        ctaButtonLink: '/es',
        ctaSecondaryText: 'Calculadora de Tamaño',
        ctaSecondaryLink: '/es/qr-code-size-calculator',
      };

    case 'de':
      return {
        title: 'Was ist ein QR-Code? Erklärung & Anatomie',
        description: 'Erfahren Sie, was ein QR-Code ist, wie die 2D-Matrix funktioniert, Reed-Solomon-Fehlerkorrekturstufen, Datenmodi und Druckregeln.',
        badge: 'Vollständiger Leitfaden',
        h1: 'Was ist ein QR-Code? Anatomie, Geschichte & Funktion',
        subheadline: 'Entdecken Sie die Technik hinter Quick-Response-Codes: 2D-Matrix-Speicherung, optische Sensorerfassung in Millisekunden und fehlerkorrigierende Algorithmen für Logos.',
        readingTime: '7 Min. Lesezeit',
        updatedDate: 'September 2026',
        quickTakeawaysTitle: 'Wichtigste Erkenntnisse',
        quickTakeaways: [
          { label: 'Zweidimensionale Speicherung', text: 'Speichert Daten horizontal und vertikal mit bis zu 7.089 numerischen Zeichen.' },
          { label: '360° Omnidirektionales Scannen', text: 'Drei Positionserkennungsmuster in den Ecken ermöglichen das Lesen aus jedem Winkel.' },
          { label: 'Reed-Solomon-Selbstheilung', text: 'Stellt bis zu 30% beschädigter Daten wieder her und ermöglicht zentrale Firmenlogos.' },
          { label: 'Dauerhaft & Datenschutzkonform', text: 'Standardmäßige statische QR-Codes laufen niemals ab und funktionieren ohne Clouddienste.' },
        ],
        tocTitle: 'Inhaltsverzeichnis',
        sections: [
          {
            id: 'history',
            heading: '1. Ursprung und Geschichte des QR-Codes',
            paragraphs: [
              'Der QR-Code wurde 1994 von Masahiro Hara und seinem Ingenieursteam bei Denso Wave (einer Tochtergesellschaft der Toyota-Gruppe) in Japan entwickelt. In den Automobilfabriken stießen herkömmliche lineare 1D-Strichcodes an ihre Kapazitätsgrenzen, da sie nur rund 20 Zeichen fassten.',
              'Inspiriert durch das Go-Brettspiel mit schwarzen und weißen Steinen entwickelte Hara eine 2D-Matrix, die Informationen gleichzeitig auf der X- und Y-Achse codieren konnte.',
              'Denso Wave gab das Patent gebührenfrei für die weltweite Nutzung frei (ISO/IEC 18004 Standard), wodurch der QR-Code zum globalen Standard für mobile Vernetzung wurde.',
            ],
          },
          {
            id: 'how-it-works',
            heading: '2. Wie die 2D-Matrixcodierung funktioniert',
            paragraphs: [
              'Ein QR-Code ist eine optische Binärsprache. Computer arbeiten mit Nullen und Einsen. Der QR-Code übersetzt diese Bits in dunkle und helle Quadrate (Module):',
              'Ein schwarzes Modul steht in der Regel für eine 1, ein weißes für eine 0. Smartphone-Kameras binarisieren das Bild, richten es geometrisch aus und decodieren die Bitfolge blitzschnell.',
            ],
          },
          {
            id: 'anatomy',
            heading: '3. Die Anatomie eines QR-Codes',
            paragraphs: [
              'Jeder Bereich eines QR-Codes erfüllt eine präzise mathematische Aufgabe:',
            ],
            subsections: [
              {
                subheading: 'Finder Patterns (Positionsmuster)',
                text: 'Die drei markanten Quadrate in den Ecken mit dem festen Modulverhältnis 1:1:3:1:1. Sie signalisieren der Kamera sofort die Lage und Ausrichtung des Codes.',
              },
              {
                subheading: 'Ausrichtungsmuster (Alignment Patterns)',
                text: 'Kleinere Quadrate bei größeren Codes, die Verzerrungen auf gewölbten Flächen (z. B. Flaschen) digital ausgleichen.',
              },
              {
                subheading: 'Timing-Muster',
                text: 'Abwechselnd weiße und schwarze Linien, die das Koordinatenraster der Module definieren.',
              },
              {
                subheading: 'Ruhezone (Quiet Zone)',
                text: 'Ein unbedruckter Rand von mindestens 4 Modulen Breite, der den Code von Umgebungsgrafiken trennt.',
              },
            ],
          },
          {
            id: 'error-correction',
            heading: '4. Reed-Solomon-Fehlerkorrektur',
            paragraphs: [
              'Dank mathematischer Polynome können QR-Codes selbst bei Verschmutzung oder Beschädigung gelesen werden:',
            ],
            bullets: [
              'Level L (Niedrig): Bis zu 7% Korrektur. Ideal für saubere Bildschirme.',
              'Level M (Mittel - Standard): Bis zu 15% Korrektur. Ideal für Flyer und Etiketten.',
              'Level Q (Quartil): Bis zu 25% Korrektur. Für Außenwerbung und Plakate.',
              'Level H (Hoch): Bis zu 30% Korrektur. Unerlässlich für Codes mit zentriertem Logo.',
            ],
          },
          {
            id: 'best-practices',
            heading: '5. Richtlinien für Größe und Kontrast',
            paragraphs: [
              'Für reibungsloses Scannen beachten Sie:',
            ],
            bullets: [
              '10:1-Abstandsregel: Der Code sollte mindestens ein Zehntel des Leseabstands messen.',
              'Mindestgröße: Drucken Sie niemals unter 2,0 × 2,0 cm.',
              'Hoher Kontrast: Dunkle Module auf hellem Grund; niemals Gelb auf Weiß.',
              'Vektorgrafik SVG: Verwenden Sie für den Druck immer Vektordateien.',
            ],
          },
        ],
        faqsTitle: 'Häufig gestellte Fragen zu QR-Codes',
        faqs: [
          { question: 'Wofür steht die Abkürzung QR?', answer: 'QR steht für "Quick Response" (Schnelle Antwort).' },
          { question: 'Laufen statische QR-Codes jemals ab?', answer: 'Nein, statische QR-Codes haben kein Ablaufdatum und bleiben unbegrenzt gültig.' },
          { question: 'Wie viele Zeichen passen in einen QR-Code?', answer: 'Maximal bis zu 7.089 Ziffern oder 4.296 alphanumerische Zeichen.' },
          { question: 'Warum scannt mein Smartphone den Code nicht?', answer: 'Häufigste Gründe: zu geringer Kontrast, fehlende Ruhezone oder zu kleiner Ausdruck.' },
        ],
        ctaTitle: 'Erstellen Sie jetzt Ihren kostenlosen QR-Code',
        ctaDesc: 'Generieren Sie gestochen scharfe QR-Codes mit Logo, Wunschfarben und direktem Download als SVG oder PNG.',
        ctaButtonText: 'Kostenlosen Generator öffnen',
        ctaButtonLink: '/de',
        ctaSecondaryText: 'Größenrechner',
        ctaSecondaryLink: '/de/qr-code-size-calculator',
      };

    case 'fr':
      return {
        title: 'Qu’est-ce qu’un QR Code ? Guide et Anatomie',
        description: 'Tout savoir sur le code QR : fonctionnement de la matrice 2D, correction d’erreur Reed-Solomon, modes d’encodage et règles de numérisation.',
        badge: 'Guide Complet',
        h1: 'Qu’est-ce qu’un QR Code ? Histoire, Anatomie & Fonctionnement',
        subheadline: 'Découvrez les secrets des codes Quick Response : comment ils enregistrent des données en deux dimensions et comment la correction d’erreur permet d’y intégrer des logos.',
        readingTime: '7 min de lecture',
        updatedDate: 'Septembre 2026',
        quickTakeawaysTitle: 'Points Clés à Retenir',
        quickTakeaways: [
          { label: 'Stockage Matrice 2D', text: 'Stocke les données horizontalement et verticalement jusqu’à 7 089 caractères numériques.' },
          { label: 'Scan 360° Omnidirectionnel', text: 'Les trois mires d’angles permettent une détection instantanée sous n’importe quel angle.' },
          { label: 'Résilience Reed-Solomon', text: 'Répare jusqu’à 30% de données masquées ou endommagées, idéal pour insérer un logo.' },
          { label: 'Permanent et Privé', text: 'Les codes statiques n’expirent jamais et s’exécutent hors ligne sans base de données tierce.' },
        ],
        tocTitle: 'Sommaire',
        sections: [
          {
            id: 'history',
            heading: '1. Origine et Histoire du QR Code',
            paragraphs: [
              'Le QR Code a été créé en 1994 par Masahiro Hara et son équipe au sein de Denso Wave (groupe Toyota) au Japon. Pour suivre les pièces automobiles, les codes-barres 1D classiques étaient devenus insuffisants avec leur limite de 20 caractères.',
              'Inspiré par le jeu de Go, Hara a conçu une matrice en deux dimensions stockant l’information à la fois sur les axes X et Y.',
              'Denso Wave a renoncé à ses droits de brevet pour offrir le standard au monde entier (norme ISO/IEC 18004), démocratisant son usage universel.',
            ],
          },
          {
            id: 'how-it-works',
            heading: '2. Fonctionnement de la Matrice 2D',
            paragraphs: [
              'Un QR code est un langage binaire optique. Les ordinateurs fonctionnent avec des 0 et des 1. Le QR code convertit ces bits en modules noirs (1) et blancs (0).',
              'L’appareil photo capture la grille, redresse les déformations et décrypte la chaîne binaire en texte ou URL en quelques millisecondes.',
            ],
          },
          {
            id: 'anatomy',
            heading: '3. Anatomie Détaillée d’un QR Code',
            paragraphs: ['Chaque zone remplit un rôle mathématique précis :'],
            subsections: [
              { subheading: 'Mires de Positionnement (Yeux)', text: 'Les trois carrés d’angles au ratio 1:1:3:1:1 pour guider le capteur optique.' },
              { subheading: 'Motifs d’Alignement', text: 'Petits repères stabilisant la lecture sur des supports courbés comme des bouteilles.' },
              { subheading: 'Lignes de Synchronisation', text: 'Lignes alternées reliant les mires pour déterminer la grille exacte.' },
              { subheading: 'Zone Calme (Marge)', text: 'Bordure blanche d’au moins 4 modules obligatoire sur tout le pourtour.' },
            ],
          },
          {
            id: 'error-correction',
            heading: '4. Correction d’Erreurs Reed-Solomon',
            paragraphs: ['Grâce aux équations polynomiales Reed-Solomon, le code reste lisible même détérioré :'],
            bullets: [
              'Niveau L (Low) : ~7% de récupération (écrans numériques).',
              'Niveau M (Medium) : ~15% (standard pour flyers et emballages).',
              'Niveau Q (Quartile) : ~25% (panneaux extérieurs).',
              'Niveau H (High) : ~30% (indispensable si vous intégrez un logo au centre).',
            ],
          },
          {
            id: 'best-practices',
            heading: '5. Règles de Dimension et de Contraste',
            paragraphs: ['Pour garantir un scan fluide :'],
            bullets: [
              'Règle du 10:1 : La largeur doit être égale à un dixième de la distance de scan.',
              'Taille minimale : Jamais en dessous de 2,0 × 2,0 cm.',
              'Contraste élevé : Modules sombres sur fond clair.',
              'Format Vectoriel SVG : Indispensable pour l’impression haute définition.',
            ],
          },
        ],
        faqsTitle: 'Questions Fréquentes sur les QR Codes',
        faqs: [
          { question: 'Que signifie QR ?', answer: 'QR signifie "Quick Response" (Réponse Rapide).' },
          { question: 'Un QR code statique peut-il expirer ?', answer: 'Non, les codes statiques n’expirent jamais et sont valables à vie.' },
          { question: 'Combien de données peut contenir un QR code ?', answer: 'Jusqu’à 7 089 chiffres ou 4 296 caractères alphanumériques.' },
        ],
        ctaTitle: 'Créez votre QR Code Gratuitement',
        ctaDesc: 'Générez des QR codes haute définition avec votre logo d’entreprise et téléchargez-les instantanément en SVG ou PNG.',
        ctaButtonText: 'Ouvrir le Générateur Gratuit',
        ctaButtonLink: '/fr',
        ctaSecondaryText: 'Calculateur de Taille',
        ctaSecondaryLink: '/fr/qr-code-size-calculator',
      };

    case 'pt':
      return {
        title: 'O que é um QR Code? Guia e Estrutura Técnica',
        description: 'Entenda como funciona o código QR, matriz bidimensional, correção de erros Reed-Solomon, capacidade de dados e boas práticas de impressão.',
        badge: 'Guia Completo',
        h1: 'O que é um QR Code? Anatomia, História e Como Funciona',
        subheadline: 'Descubra a tecnologia dos códigos Quick Response: como eles armazenam dados em duas dimensões e como a autocorreção de erros viabiliza logotipos personalizados.',
        readingTime: '7 min de leitura',
        updatedDate: 'Setembro 2026',
        quickTakeawaysTitle: 'Destaques Rápidos',
        quickTakeaways: [
          { label: 'Matriz 2D Espacial', text: 'Grava dados horizontal e verticalmente, suportando até 7.089 caracteres numéricos.' },
          { label: 'Leitura 360° Omnidirecional', text: 'Marcadores de posição nos cantos permitem escaneamento instantâneo em qualquer ângulo.' },
          { label: 'Recuperação Reed-Solomon', text: 'Recupera até 30% de danos físicos e viabiliza a inclusão de logotipos no centro.' },
          { label: 'Permanente e Seguro', text: 'Códigos QR estáticos nunca expiram e operam 100% offline no navegador.' },
        ],
        tocTitle: 'Índice de Conteúdo',
        sections: [
          {
            id: 'history',
            heading: '1. Origem e História do QR Code',
            paragraphs: [
              'O QR Code foi criado em 1994 por Masahiro Hara na empresa japonesa Denso Wave, braço do grupo Toyota. Na indústria automobilística, o código de barras tradicional de 1D comportava apenas 20 caracteres, exigindo que os funcionários bipassem múltiplos códigos para cada caixa de peças.',
              'Inspirado no jogo de tabuleiro Go, Hara idealizou uma matriz bidimensional capaz de armazenar dados simultaneamente nos eixos horizontal e vertical.',
              'A Denso Wave liberou a patente para uso público gratuito (padrão ISO/IEC 18004), tornando o código QR uma tecnologia global onipresente.',
            ],
          },
          {
            id: 'how-it-works',
            heading: '2. Como Funciona a Matriz 2D',
            paragraphs: [
              'Um código QR funciona como uma linguagem binária visual. Os computadores leem 0s e 1s. No código QR, módulos pretos representam bits 1 e módulos brancos representam bits 0.',
              'A câmera do smartphone identifica o enquadramento, normaliza o contraste e decodifica a sequência de bits em milissegundos.',
            ],
          },
          {
            id: 'anatomy',
            heading: '3. Anatomia Completa de um QR Code',
            paragraphs: ['Cada zona possui uma especificação geométrica precisa:'],
            subsections: [
              { subheading: 'Padrões de Localização (Olhos)', text: 'Os 3 quadrados nos cantos com proporção 1:1:3:1:1 que garantem reconhecimento 360 graus.' },
              { subheading: 'Padrões de Alinhamento', text: 'Pequenos quadrados internos que corrigem distorções em embalagens curvas ou onduladas.' },
              { subheading: 'Linhas de Sincronização', text: 'Linhas pontilhadas alternadas que definem a grade de coordenadas.' },
              { subheading: 'Zona Silenciosa', text: 'Margem em branco de 4 módulos ao redor para isolar o código de elementos externos.' },
            ],
          },
          {
            id: 'error-correction',
            heading: '4. Níveis de Correção de Erros Reed-Solomon',
            paragraphs: ['O algoritmo Reed-Solomon possibilita a leitura mesmo em códigos danificados:'],
            bullets: [
              'Nível L (Baixo): Até 7% de tolerância (telas digitais).',
              'Nível M (Médio): Até 15% (padrão para panfletos e embalagens).',
              'Nível Q (Quartil): Até 25% (placas e outdoors).',
              'Nível H (Alto): Até 30% (obrigatório para códigos com logotipo central).',
            ],
          },
          {
            id: 'best-practices',
            heading: '5. Regras de Tamanho e Contraste',
            paragraphs: ['Para assegurar leitura sem falhas:'],
            bullets: [
              'Proporção 10:1: A largura do QR code deve ser 1/10 da distância esperada de leitura.',
              'Tamanho Mínimo: Nunca imprima menor que 2,0 × 2,0 cm.',
              'Contraste Óptico: Módulos escuros sobre fundo claro.',
              'Vetor SVG: Garante nitidez máxima sem perda de resolução na gráfica.',
            ],
          },
        ],
        faqsTitle: 'Perguntas Frequentes sobre QR Codes',
        faqs: [
          { question: 'O que significa a sigla QR?', answer: 'QR significa "Quick Response" (Resposta Rápida).' },
          { question: 'Códigos QR estáticos perdem a validade?', answer: 'Não, códigos estáticos não têm validade e funcionam para sempre.' },
          { question: 'Quantos dados cabem em um QR code?', answer: 'Até 7.089 dígitos numéricos ou 4.296 caracteres alfanuméricos.' },
        ],
        ctaTitle: 'Crie seu QR Code Grátis Agora',
        ctaDesc: 'Gere códigos personalizados com seu logotipo, cores da marca e baixe em alta resolução SVG ou PNG.',
        ctaButtonText: 'Abrir Gerador Gratuito',
        ctaButtonLink: '/pt',
        ctaSecondaryText: 'Calculadora de Tamanho',
        ctaSecondaryLink: '/pt/qr-code-size-calculator',
      };

    case 'it':
      return {
        title: 'Cos’è un Codice QR? Guida e Struttura Tecnica',
        description: 'Scopri cos’è un codice QR, come funziona la matrice 2D, i livelli di correzione Reed-Solomon, i tipi di dati e le regole di stampa perfette.',
        badge: 'Guida Completa',
        h1: 'Cos’è un Codice QR? Anatomia, Storia e Funzionamento',
        subheadline: 'Esplora la tecnologia dei codici Quick Response: codifica in due dimensioni, scansione rapida su smartphone e correzione errori per inserire loghi.',
        readingTime: '7 min di lettura',
        updatedDate: 'Settembre 2026',
        quickTakeawaysTitle: 'Punti Chiave',
        quickTakeaways: [
          { label: 'Matrice Bidimensionale', text: 'Codifica dati sia in orizzontale che in verticale, ospitando fino a 7.089 caratteri.' },
          { label: 'Scansione Omnidirezionale a 360°', text: 'I tre mirini angolari consentono la lettura istantanea da qualsiasi angolazione.' },
          { label: 'Algoritmo Reed-Solomon', text: 'Ripristina fino al 30% di dati rovinati o coperti dal logo aziendale.' },
          { label: 'Durevole e Privato', text: 'I codici QR statici non scadono mai e risiedono nel browser senza memorizzazione esterna.' },
        ],
        tocTitle: 'Indice dei Contenuti',
        sections: [
          {
            id: 'history',
            heading: '1. Origine e Storia del Codice QR',
            paragraphs: [
              'Il codice QR è stato inventato nel 1994 da Masahiro Hara e dal suo gruppo di ingegneri presso Denso Wave (gruppo Toyota) in Giappone. I vecchi codici a barre 1D potevano contenere solo una ventina di caratteri, costringendo gli operai delle linee di montaggio a scansionare decine di etichette per ogni scatola.',
              'Ispirato dalle pedine bianche e nere del gioco da tavolo Go, Hara ideò una matrice bidimensionale capace di contenere dati su due assi contemporaneamente.',
              'Denso Wave ha rilasciato il brevetto gratuitamente alla comunità internazionale (standard ISO/IEC 18004), aprendo la strada alla rivoluzione mobile.',
            ],
          },
          {
            id: 'how-it-works',
            heading: '2. Come Funziona la Codifica 2D',
            paragraphs: [
              'Un codice QR è un linguaggio binario visivo. I bit 0 e 1 vengono trasformati in moduli chiari e scuri.',
              'L’obiettivo dello smartphone rileva i mirini, raddrizza la prospettiva ed elabora i dati in una frazione di secondo.',
            ],
          },
          {
            id: 'anatomy',
            heading: '3. Anatomia di un Codice QR',
            paragraphs: ['Ogni componente svolge un ruolo preciso:'],
            subsections: [
              { subheading: 'Mirini di Posizionamento (Occhi)', text: 'I tre quadrati agli angoli con rapporto 1:1:3:1:1 per l’orientamento 360°.' },
              { subheading: 'Pattern di Allineamento', text: 'Piccoli riquadri che compensano le curvature fisiche dei supporti.' },
              { subheading: 'Linee di Sincronizzazione', text: 'Righe alternate che determinano la griglia dei moduli.' },
              { subheading: 'Zona Silenziosa (Margine)', text: 'Bordo bianco di 4 moduli necessario per separare il codice dallo sfondo.' },
            ],
          },
          {
            id: 'error-correction',
            heading: '4. Livelli di Correzione Errori Reed-Solomon',
            paragraphs: ['La ridondanza matematica consente la lettura anche con codici rovinati:'],
            bullets: [
              'Livello L (Low): Recupero fino al 7% (ottimo per schermi).',
              'Livello M (Medium): Fino al 15% (standard per volantini e confezioni).',
              'Livello Q (Quartile): Fino al 25% (cartellonistica esterna).',
              'Livello H (High): Fino al 30% (obbligatorio se si inserisce un logo al centro).',
            ],
          },
          {
            id: 'best-practices',
            heading: '5. Regole per Dimensioni e Contrasto',
            paragraphs: ['Per una leggibilità immediata:'],
            bullets: [
              'Rapporto 10:1: La larghezza del QR code deve corrispondere a un decimo della distanza di scansione.',
              'Dimensione Minima: Mai stampare sotto i 2,0 × 2,0 cm.',
              'Contrasto Massimo: Moduli scuri su sfondo chiaro.',
              'Grafica Vettoriale SVG: Indispensabile per stampe tipografiche nitide.',
            ],
          },
        ],
        faqsTitle: 'Domande Frequenti sui Codici QR',
        faqs: [
          { question: 'Cosa significa la sigla QR?', answer: 'QR sta per "Quick Response" (Risposta Rapida).' },
          { question: 'I codici QR statici scadono?', answer: 'No, i codici statici rimangono validi per sempre.' },
          { question: 'Quanti dati può contenere un codice QR?', answer: 'Fino a 7.089 cifre numeriche o 4.296 caratteri alfanumerici.' },
        ],
        ctaTitle: 'Crea il tuo Codice QR Gratis',
        ctaDesc: 'Genera codici ad alta definizione con il tuo logo aziendale e scarica subito i file vettoriali SVG o PNG.',
        ctaButtonText: 'Apri Generatore Gratuito',
        ctaButtonLink: '/it',
        ctaSecondaryText: 'Calcolatore Dimensioni',
        ctaSecondaryLink: '/it/qr-code-size-calculator',
      };

    case 'hi':
      return {
        title: 'क्यूआर कोड क्या है? पूरी जानकारी व तकनीकी संरचना',
        description: 'जानिए क्यूआर कोड क्या है, 2D मैट्रिक्स कैसे काम करता है, रीड-सोलोमन एरर करेक्शन लेवल्स और सही प्रिंटिंग नियम।',
        badge: 'संपूर्ण गाइड',
        h1: 'क्यूआर कोड क्या है? इतिहास, संरचना और कार्यप्रणाली',
        subheadline: 'क्विक रिस्पॉन्स (QR) कोड की संपूर्ण तकनीकी जानकारी: 2D मैट्रिक्स में डेटा कैसे स्टोर होता है, स्मार्टफोन कैमरा कैसे पढ़ता है और एरर करेक्शन से लोगो कैसे लगाया जाता है।',
        readingTime: '7 मिनट पठन',
        updatedDate: 'सितंबर 2026',
        quickTakeawaysTitle: 'मुख्य बिंदु',
        quickTakeaways: [
          { label: '2D मैट्रिक्स डेटा', text: 'डेटा को क्षैतिज (horizontal) और ऊर्ध्वाधर (vertical) दोनों दिशाओं में 7,089 अंकों तक स्टोर करता है।' },
          { label: '360° किसी भी कोण से स्कैनिंग', text: 'तीनों कोनों पर बने पोजिशन डिटेक्शन पैटर्न्स कैमरे को किसी भी दिशा से तुरंत कोड पढ़ने में मदद करते हैं।' },
          { label: 'रीड-सोलोमन एरर करेक्शन', text: '30% तक फटे या खराब कोड को भी सुधारकर पढ़ लेता है, जिससे बीच में लोगो लगाना संभव होता है।' },
          { label: 'स्थायी और सुरक्षित', text: 'स्टेटिक क्यूआर कोड कभी एक्सपायर नहीं होते और बिना किसी बाहरी सर्वर के काम करते हैं।' },
        ],
        tocTitle: 'विषय सूची',
        sections: [
          {
            id: 'history',
            heading: '1. क्यूआर कोड की उत्पत्ति और इतिहास',
            paragraphs: [
              'क्यूआर कोड का आविष्कार 1994 में जापान की डेंसो वेव (टोयोटा ग्रुप) के इंजीनियर मासाहिरो हारा और उनकी टीम ने किया था। ऑटोमोबाइल कारखानों में पुराने 1D बारकोड केवल 20 अक्षर ही स्टोर कर सकते थे, जिससे कर्मचारियों को एक ही बॉक्स पर कई बारकोड स्कैन करने पड़ते थे।',
              'मासाहिरो हारा ने जापानी बोर्ड गेम "गो" (Go) की काली और सफेद गोटियों से प्रेरणा लेकर एक ऐसी 2D मैट्रिक्स बनाई जो दोनों दिशाओं में सैकड़ों गुना अधिक जानकारी तेजी से स्टोर कर सकती थी।',
              'डेंसो वेव ने इस तकनीक के पेटेंट को बिना किसी रॉयल्टी के सार्वजनिक उपयोग के लिए मुफ्त कर दिया (ISO/IEC 18004 मानक), जिससे यह आज दुनिया भर में डिजिटल कनेक्टिविटी का मुख्य आधार बन गया।',
            ],
          },
          {
            id: 'how-it-works',
            heading: '2. 2D मैट्रिक्स एनकोडिंग कैसे काम करती है',
            paragraphs: [
              'क्यूआर कोड एक विजुअल बाइनरी भाषा है। कंप्यूटर 0 और 1 पर काम करते हैं। क्यूआर कोड में काले वर्ग (मॉड्यूल) सामान्यतः बाइनरी 1 और सफेद वर्ग बाइनरी 0 को दर्शाते हैं।',
              'मोबाइल कैमरा इस पैटर्न को कैप्चर करता है, कोनों से सीधा करता है और मिलीसेकंड में यूआरएल या डेटा को स्क्रीन पर खोल देता है।',
            ],
          },
          {
            id: 'anatomy',
            heading: '3. क्यूआर कोड की संपूर्ण आंतरिक संरचना',
            paragraphs: ['क्यूआर कोड के प्रत्येक हिस्से का गणितीय महत्व होता है:'],
            subsections: [
              { subheading: 'फाइंडर पैटर्न्स (कोनों की आंखें)', text: 'तीनों कोनों पर 1:1:3:1:1 अनुपात में बने तीन बड़े वर्ग जो कैमरे को तुरंत कोड की स्थिति समझाते हैं।' },
              { subheading: 'अलाइनमेंट पैटर्न्स', text: 'छोटे वर्ग जो मुड़ी हुई बोतलों या सतहों पर विकृति को डिजिटल रूप से ठीक करते हैं।' },
              { subheading: 'टाइमिंग पैटर्न्स', text: 'काली और सफेद धारियां जो कोड के ग्रिड साइज को नापती हैं।' },
              { subheading: 'क्वाइट ज़ोन (सफेद किनारा)', text: 'चारों ओर कम से कम 4 मॉड्यूल का सफेद खाली बॉर्डर जो कोड को बाहरी बैकग्राउंड से अलग करता है।' },
            ],
          },
          {
            id: 'error-correction',
            heading: '4. रीड-सोलोमन एरर करेक्शन लेवल्स',
            paragraphs: ['रीड-सोलोमन गणितीय फॉर्मूलों की मदद से कोड खराब होने पर भी पढ़ा जा सकता है:'],
            bullets: [
              'लेवल L (Low): ~7% खराबी सुधार सकता है (साफ स्क्रीन के लिए)।',
              'लेवल M (Medium): ~15% सुधार (पर्चे और पैकेजिंग का डिफॉल्ट मानक)।',
              'लेवल Q (Quartile): ~25% सुधार (आउटडोर पोस्टरों के लिए)।',
              'लेवल H (High): ~30% सुधार (बीच में कंपनी का लोगो लगाने के लिए अनिवार्य)।',
            ],
          },
          {
            id: 'best-practices',
            heading: '5. प्रिंट साइज और कंट्रास्ट के जरूरी नियम',
            paragraphs: ['आसानी से स्कैन होने के लिए इन नियमों का पालन करें:'],
            bullets: [
              '10:1 दूरी का नियम: क्यूआर कोड की चौड़ाई स्कैनिंग दूरी का कम से कम 1/10वां हिस्सा होनी चाहिए (1 मीटर दूरी के लिए 10 सेमी चौड़ाई)।',
              'न्यूनतम साइज: बिजनेस कार्ड पर 2.0 × 2.0 सेमी (0.8 × 0.8 इंच) से छोटा कभी प्रिंट न करें।',
              'हाई कंट्रास्ट: सफेद बैकग्राउंड पर काले रंग के डॉट्स सबसे अच्छे स्कैन होते हैं।',
              'वेक्टर SVG फाइल: प्रिंटिंग प्रेस के लिए हमेशा SVG फाइल डाउनलोड करें ताकि पिक्सल्स न फटें।',
            ],
          },
        ],
        faqsTitle: 'क्यूआर कोड से जुड़े सामान्य प्रश्न',
        faqs: [
          { question: 'QR का फुल फॉर्म क्या होता है?', answer: 'QR का फुल फॉर्म "Quick Response" (त्वरित प्रतिक्रिया) होता है।' },
          { question: 'क्या स्टेटिक क्यूआर कोड कभी एक्सपायर होते हैं?', answer: 'नहीं, स्टेटिक क्यूआर कोड कभी एक्सपायर नहीं होते और जीवन भर काम करते हैं।' },
          { question: 'एक क्यूआर कोड में कितना डेटा आ सकता है?', answer: '7,089 अंक या 4,296 अक्षरों तक का डेटा समा सकता है।' },
        ],
        ctaTitle: 'अपना फ्री क्यूआर कोड अभी बनाएं',
        ctaDesc: 'अपनी कंपनी के लोगो और मनपसंद रंगों के साथ हाई-रेज़ोल्यूशन SVG और PNG क्यूआर कोड मुफ्त डाउनलोड करें।',
        ctaButtonText: 'फ्री जनरेटर खोलें',
        ctaButtonLink: '/hi',
        ctaSecondaryText: 'साइज कैलकुलेटर',
        ctaSecondaryLink: '/hi/qr-code-size-calculator',
      };

    case 'en':
    default:
      return {
        title: 'What is a QR Code? Complete Beginner Guide',
        description: 'Learn what a QR code is, how 2D matrix symbology works, anatomical structure, error correction levels, data capacity, and scanning best practices.',
        badge: 'Comprehensive Guide',
        h1: 'What is a QR Code? Anatomy, History & How It Works',
        subheadline: 'Discover the engineering behind Quick Response codes: how 2D matrix patterns encode data, how optical sensors decode them in milliseconds, and how error correction enables branded logos and damaged code recovery.',
        readingTime: '7 min read',
        updatedDate: 'September 2026',
        quickTakeawaysTitle: 'Quick Takeaways',
        quickTakeaways: [
          { label: '2D Matrix Storage', text: 'Stores data both horizontally and vertically, holding up to 7,089 characters.' },
          { label: '360° Omnidirectional Scanning', text: 'Corner finder patterns let cameras decode from any angle.' },
          { label: 'Reed-Solomon Resilience', text: 'Recovers up to 30% corrupted data or allows central logo embedding.' },
          { label: 'Client-Side & Permanent', text: 'Standard static QR codes never expire and require zero server hosting.' },
        ],
        tocTitle: 'Table of Contents',
        sections: [
          {
            id: 'history',
            heading: '1. The Origin and History of the QR Code',
            paragraphs: [
              'The QR code was created in 1994 by Masahiro Hara and his engineering team at Denso Wave, a subsidiary of the Toyota automotive group in Japan. In manufacturing plants, auto workers were tracking hundreds of vehicle parts using traditional linear (1D) barcodes. Because linear barcodes could only encode around 20 alphanumeric characters, workers were frequently forced to scan up to ten different barcodes on a single shipping box to log parts.',
              'Tasked with creating a barcode capable of storing exponentially more information that could be read at blinding speeds, Hara found inspiration while playing the strategic board game Go. Observing black and white stones placed on a grid, he realized that a two-dimensional grid of binary squares (modules) could encode information in both the X and Y axes simultaneously.',
              'Denso Wave chose to release the patent for the QR code technology into the public domain without charging royalties, enabling it to become an international standard (ISO/IEC 18004 in 2000). Today, over three decades later, QR codes are ubiquitous across payments, menus, boarding passes, healthcare, and physical-to-digital marketing worldwide.',
            ],
          },
          {
            id: 'how-it-works',
            heading: '2. How 2D Matrix Encoding Works',
            paragraphs: [
              'To understand a QR code, think of it as an optical binary language. Traditional computers store data as binary bits: 0s and 1s. A QR code translates these binary bits directly into physical geometric squares known as modules:',
              'Black Module: Typically represents a binary 1. White Module: Represents a binary 0. When a camera sensor captures an image of a QR code, the software performs binarization (converting colors to high-contrast monochrome pixels), locates the boundaries, detects the orientation, and reads the sequence of dark and light squares across coordinates into a raw binary bitstream.',
            ],
          },
          {
            id: 'anatomy',
            heading: '3. Complete Anatomy of a QR Code',
            paragraphs: ['A QR code is not merely a random scattering of dots. Every section has a rigorous, mathematically defined function:'],
            subsections: [
              { subheading: 'Finder Patterns (Eyes)', text: 'The three large square targets located at the top-left, top-right, and bottom-left corners with a precise 1:1:3:1:1 module ratio.' },
              { subheading: 'Alignment Patterns', text: 'Smaller concentric squares placed inside higher-version codes to digitally straighten out warped grids on curved packaging.' },
              { subheading: 'Timing Patterns', text: 'Lines of alternating black and white squares connecting the finder patterns to define individual module coordinates.' },
              { subheading: 'Quiet Zone (Border Margin)', text: 'A solid, unprinted blank perimeter at least 4 modules wide surrounding the code to isolate it from external graphics.' },
            ],
          },
          {
            id: 'error-correction',
            heading: '4. Reed-Solomon Error Correction Explained',
            paragraphs: ['Reed-Solomon Error Correction algorithms add redundant polynomial equations into the binary matrix, enabling reconstruction of damaged codes:'],
            bullets: [
              'Level L (Low): ~7% recovery. Ideal for clean indoor screens and presentation slides.',
              'Level M (Medium): ~15% recovery. Default for marketing flyers, receipts, and packaging.',
              'Level Q (Quartile): ~25% recovery. Recommended for outdoor posters and warehouse labels.',
              'Level H (High): ~30% recovery. Mandatory for codes with central brand logos or custom artwork.',
            ],
          },
          {
            id: 'best-practices',
            heading: '5. Critical Sizing, Optical Contrast & Print Rules',
            paragraphs: ['Follow these core optical rules for reliable scanning:'],
            bullets: [
              'Rule 1: The 10:1 Distance-to-Size Ratio. Physical width should be at least 1/10 of the scanning distance.',
              'Rule 2: Never Violate the Quiet Zone. Keep at least 4 modules of white space around all edges.',
              'Rule 3: Maintain High Luminosity Contrast. Dark foreground on light background.',
              'Rule 4: Always Print at 300 DPI or in Vector SVG to avoid pixelation on press.',
            ],
          },
        ],
        faqsTitle: 'Frequently Asked Questions',
        faqs: [
          { question: 'What does QR stand for?', answer: 'QR stands for "Quick Response", named for its high-speed optical readability.' },
          { question: 'Do static QR codes expire?', answer: 'No, static QR codes encode data directly and never expire.' },
          { question: 'How much data can a QR code hold?', answer: 'Up to 7,089 numeric characters or 4,296 alphanumeric characters.' },
          { question: 'What is the minimum physical size to print a QR code?', answer: 'The safe handheld minimum is 2.0 x 2.0 cm (0.8 x 0.8 inches).' },
        ],
        ctaTitle: 'Ready to Create Your Free QR Code?',
        ctaDesc: 'Generate custom branded QR codes with your company logo, custom colors, and instant vector SVG and high-resolution PNG downloads.',
        ctaButtonText: 'Create QR Code Free',
        ctaButtonLink: '/',
        ctaSecondaryText: 'Size Calculator',
        ctaSecondaryLink: '/qr-code-size-calculator',
      };
  }
}
