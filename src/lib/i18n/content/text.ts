import type { Locale } from '../config';
import type { LocalizedPageContent } from './types';

export function getTextContent(locale: Locale): LocalizedPageContent {
  switch (locale) {
    case 'es':
      return {
        slug: 'text-to-qr-code',
        qrTypeId: 'text',
        title: 'Generador de Código QR de Texto — Convertir Texto Plano en QR',
        description: 'Convierte notas, números de serie, claves y mensajes de texto plano en códigos QR escaneables sin conexión. Descarga en vector SVG y PNG.',
        h1: 'Generador de Código QR de Texto',
        subheadline: 'Codifica cualquier mensaje de texto, instrucciones, claves o números de serie en un código QR legible sin necesidad de internet.',
        heading: 'Código QR de Texto Plano',
        subheading: 'Almacena información textual completa directamente en el código QR para lectura offline instantánea.',
        overviewTitle: '¿Qué es un Código QR de Texto?',
        overviewParagraphs: [
          'Un generador de código QR de texto almacena cadenas de caracteres alfanuméricos (notas, instrucciones, números de serie o claves de acceso) directamente en los módulos del código. Al ser escaneado por cualquier smartphone, el texto se muestra en pantalla al instante sin abrir ninguna página web ni requerir conexión de datos.',
          'Es la solución idónea para inventario, etiquetado técnico de piezas, notas confidenciales o instrucciones de emergencia en entornos sin cobertura.',
          'Personaliza colores, formas de puntos y descarga en formato vectorial SVG para imprenta o PNG de alta definición.'
        ],
        sectors: [
          { name: 'Almacenes y Logística', description: 'En cajas y palets con referencias de inventario y números de serie.', benefit: 'Lectura offline rápida con lectores de código de barras.' },
          { name: 'Fabricación y Maquinaria', description: 'En placas técnicas con especificaciones de voltaje y mantenimiento.', benefit: 'Acceso a datos técnicos sin conexión.' },
          { name: 'Educación y Museos', description: 'En vitrinas con pistas para gincanas y descripciones históricas.', benefit: 'Actividades interactivas sin saturar la red Wi-Fi.' },
          { name: 'Seguridad y Claves', description: 'Para almacenar contraseñas maestras o códigos criptográficos en papel.', benefit: 'Almacenamiento seguro offline.' },
          { name: 'Eventos y Búsquedas del Tesoro', description: 'Pistas y acertijos impresos en tarjetas para juegos.', benefit: 'Experiencia inmersiva para los participantes.' },
          { name: 'Comercio y Etiquetas de Precio', description: 'En etiquetas de ropa con composición de tejidos e instrucciones de lavado.', benefit: 'Información completa para el comprador.' }
        ],
        howItWorks: [
          { title: '1. Escribe o Pega tu Texto', description: 'Introduce el mensaje, notas o datos técnicos en el campo superior.' },
          { title: '2. Personaliza el Diseño', description: 'Elige colores corporativos y ajusta el estilo de los módulos.' },
          { title: '3. Descarga e Imprime', description: 'Exporta en SVG vectorial o PNG de alta resolución.' }
        ],
        useCases: [
          { title: 'Etiquetas de Inventario', description: 'En estanterías y piezas mecánicas para control de stock.', example: 'Taller industrial organizando 1.000 piezas.' },
          { title: 'Placas de Equipos', description: 'Con fechas de revisión y números de modelo.', example: 'Empresa de ascensores.' },
          { title: 'Pistas en Juegos', description: 'Para escape rooms y dinámicas de grupo.', example: 'Juego de pistas en campamento.' },
          { title: 'Tarjetas de Garantía', description: 'Con códigos de serie únicos grabados en el plástico.', example: 'Fabricante de relojes.' }
        ],
        tips: [
          'Texto Conciso: Mensajes más breves producen códigos con puntos más grandes y fáciles de leer.',
          'Alto Contraste: Módulos oscuros sobre fondo blanco para lectura inmediata.',
          'Tamaño Físico: Al menos 20 x 20 mm para textos cortos.',
          'SVG para Grabado: Utiliza SVG para corte láser en metal o plástico.',
          'Prueba Offline: Pon el móvil en modo avión y escanea para comprobar la lectura.'
        ],
        technicalNotes: 'Estándar ISO/IEC 18004 compatible con lectura de texto plano UTF-8.',
        faqs: [
          { question: '¿Requiere internet para leer el texto?', answer: 'No, el texto se almacena dentro del propio dibujo del código y se lee de forma 100% offline sin datos móviles.' },
          { question: '¿Cuántos caracteres puedo escribir?', answer: 'Puedes almacenar hasta varios cientos de caracteres, aunque para una lectura rápida se recomienda no superar las 300 palabras.' },
          { question: '¿Puedo incluir saltos de línea y emojis?', answer: 'Sí, admite texto con saltos de línea, caracteres especiales y emojis estándar UTF-8.' },
          { question: '¿Tienen caducidad estos códigos?', answer: 'No, son códigos estáticos permanentes que nunca caducan.' },
          { question: '¿Se guarda mi texto en vuestros servidores?', answer: 'No, la codificación ocurre 100% en la memoria de tu navegador de forma confidencial.' },
          { question: '¿Es gratuito?', answer: 'Sí, la generación y descarga en SVG o PNG es totalmente gratuita.' }
        ],
        relatedTools: [
          { name: 'QR de Enlace Web', slug: 'url-to-qr-code', description: 'Convierte enlaces web en códigos QR.' },
          { name: 'QR de Contacto vCard', slug: 'vcard-qr-code-generator', description: 'Guarda tarjetas de contacto completas.' },
          { name: 'QR de WiFi', slug: 'wifi-qr-code-generator', description: 'Conéctate a redes WiFi sin contraseña.' },
          { name: 'QR de SMS', slug: 'sms-qr-code-generator', description: 'Envía mensajes de texto con plantilla previa.' }
        ]
      };
    case 'de':
      return {
        slug: 'text-to-qr-code',
        qrTypeId: 'text',
        title: 'Text zu QR Code Generator — Textnachrichten in QR-Code umwandeln',
        description: 'Verwandeln Sie Textnotizen, Seriennummern und Codes in scanbare QR-Codes. Komplett offline lesbar. Kostenloser Vektor-SVG & PNG Download.',
        h1: 'Text zu QR Code Generator',
        subheadline: 'Kodieren Sie Textnachrichten, Seriennummern, Notizen und Passwörter in einen 2D-Barcode – offline lesbar ohne Internet.',
        heading: 'Klartext-QR-Code',
        subheading: 'Speichern Sie Textinformationen direkt im QR-Code für den sofortigen Offline-Abruf.',
        overviewTitle: 'Was ist ein Text zu QR Code Generator?',
        overviewParagraphs: [
          'Ein Text zu QR Code Generator speichert Zeichenfolgen (Notizen, Anweisungen, Seriennummern oder Schlüssel) direkt in der Pixelmatrix. Beim Scannen mit dem Smartphone wird der Text sofort auf dem Display angezeigt – ohne Browser und ohne Internetverbindung.',
          'Ideal für Inventarisierung, Typenschilder an Maschinen oder vertrauliche Offline-Notizen.',
          'Kostenloser Download in druckfertigem Vektor-SVG oder hochauflösendem PNG.'
        ],
        sectors: [
          { name: 'Lager & Logistik', description: 'Auf Kisten und Paletten mit Seriennummern und Stücklisten.', benefit: 'Schnelle Offline-Erfassung mit Barcode-Scannern.' },
          { name: 'Produktion & Maschinenbau', description: 'Auf Typenschildern mit technischen Spezifikationen.', benefit: 'Zugriff auf Daten ohne Mobilfunkempfang.' },
          { name: 'Bildung & Museen', description: 'An Exponaten für Quizfragen und Zusatztexte.', benefit: 'Interaktive Führungen ohne WLAN-Überlastung.' },
          { name: 'Sicherheit & Schlüssel', description: 'Zur sicheren Papier-Sicherung von Notfallpasswörtern.', benefit: 'Sichere Offline-Verwahrung.' },
          { name: 'Schnitzeljagden & Events', description: 'Gedruckte Hinweise und Rätselkarten.', benefit: 'Spannende Spielerlebnisse ohne Netzempfang.' },
          { name: 'Handel & Preisschilder', description: 'Auf Textiletiketten mit Pflegehinweisen und Materialangaben.', benefit: 'Detaillierte Kundeninformation.' }
        ],
        howItWorks: [
          { title: '1. Text Eingeben', description: 'Nachricht, Notiz oder Seriennummer in das Textfeld eintragen.' },
          { title: '2. Design Anpassen', description: 'Farben anpassen und Modulmuster wählen.' },
          { title: '3. Herunterladen & Drucken', description: 'Als Vektor-SVG für Schilder oder PNG exportieren.' }
        ],
        useCases: [
          { title: 'Inventaretiketten', description: 'Auf Regalen und Bauteilen zur Lagerverwaltung.', example: 'Industriebetrieb mit 1.000 Artikeln.' },
          { title: 'Maschinen-Typenschilder', description: 'Mit Wartungsdaten und Modellnummern.', example: 'Aufzugsservice.' },
          { title: 'Rätselhinweise', description: 'Für Escape Rooms und Schnitzeljagden.', example: 'Teamevent im Wald.' },
          { title: 'Garantiekärtchen', description: 'Mit eingeprägten Seriennummern.', example: 'Uhrenmanufaktur.' }
        ],
        tips: [
          'Kompakter Text: Kürzere Texte erzeugen gröbere, schnell lesbare Muster.',
          'Hoher Kontrast: Schwarze Punkte auf weißem Grund.',
          'Mindestgröße: Mindestens 20 x 20 mm bei kurzen Texten.',
          'SVG für Lasergravur: Ideal für Gravuren auf Metall oder Kunststoff.',
          'Offline-Test: Flugmodus aktivieren und zur Probe scannen.'
        ],
        technicalNotes: 'ISO/IEC 18004 Standard für universelle UTF-8 Textkodierung.',
        faqs: [
          { question: 'Wird eine Internetverbindung zum Lesen benötigt?', answer: 'Nein, der Text ist direkt im Code gespeichert und wird komplett offline ohne Mobilfunkdaten angezeigt.' },
          { question: 'Wie viele Zeichen kann ich speichern?', answer: 'Sie können mehrere hundert Zeichen speichern; für schnelles Scannen empfehlen sich bis zu 300 Wörter.' },
          { question: 'Werden Zeilenumbrüche und Emojis unterstützt?', answer: 'Ja, Standard-UTF-8-Zeilenumbrüche, Sonderzeichen und Emojis werden unterstützt.' },
          { question: 'Laufen Text-QR-Codes ab?', answer: 'Nein, die statischen Codes sind dauerhaft gültig.' },
          { question: 'Werden meine Daten gespeichert?', answer: 'Nein, die Erstellung erfolgt lokal im Browser ohne externe Speicherung.' },
          { question: 'Ist die Erstellung kostenlos?', answer: 'Ja, die Nutzung und der Download in SVG und PNG sind 100% kostenlos.' }
        ],
        relatedTools: [
          { name: 'Weblink QR Generator', slug: 'url-to-qr-code', description: 'Webseiten in QR-Codes umwandeln.' },
          { name: 'vCard Visitenkarte', slug: 'vcard-qr-code-generator', description: 'Kontaktdaten im Telefonbuch speichern.' },
          { name: 'WLAN QR Generator', slug: 'wifi-qr-code-generator', description: 'Gäste-WLAN ohne Passworteingabe.' },
          { name: 'SMS QR Code Generator', slug: 'sms-qr-code-generator', description: 'Vordefinierte SMS versenden.' }
        ]
      };
    case 'fr':
      return {
        slug: 'text-to-qr-code',
        qrTypeId: 'text',
        title: 'Générateur de QR Code Texte — Convertir du Texte Brut en QR',
        description: 'Transformez vos notes, numéros de série et textes en QR codes lisibles hors-ligne. Téléchargement gratuit en SVG vectoriel et PNG.',
        h1: 'Générateur de QR Code Texte Brut',
        subheadline: 'Encodez vos textes, instructions, mots de passe et numéros de série dans un QR code lisible sans connexion internet.',
        heading: 'QR Code de Texte Brut',
        subheading: 'Stockez des informations textuelles complètes pour une consultation hors-ligne immédiate.',
        overviewTitle: 'Qu\'est-ce qu\'un QR Code de Texte Brut ?',
        overviewParagraphs: [
          'Un générateur de QR code texte stocke directement des chaînes de caractères (notes, instructions techniques, numéros de série) dans la matrice 2D. Au scan, le texte s\'affiche immédiatement sur l\'écran sans ouvrir de navigateur web.',
          'C\'est la solution idéale pour l\'inventaire, l\'étiquetage industriel ou les fiches d\'intervention en zone sans réseau.',
          'Téléchargement gratuit en format vectoriel SVG pour l\'imprimerie ou PNG haute définition.'
        ],
        sectors: [
          { name: 'Entrepôts & Logistique', description: 'Sur cartons et palettes avec références de stock.', benefit: 'Lecture hors-ligne instantanée par douchette.' },
          { name: 'Industrie & Usinage', description: 'Sur plaques de machines avec spécifications techniques.', benefit: 'Données accessibles en atelier sans réseau.' },
          { name: 'Musées & Éducation', description: 'Sur vitrines pour énigmes et explications historiques.', benefit: 'Visites interactives sans saturer le WiFi.' },
          { name: 'Sécurité & Sauvegardes', description: 'Pour conserver des clés de sécurité sur papier.', benefit: 'Stockage sécurisé hors-ligne.' },
          { name: 'Jeux de Piste & Événements', description: 'Indices et énigmes imprimés sur cartes.', benefit: 'Animation immersive en pleine nature.' },
          { name: 'Commerce & Étiquetage', description: 'Sur étiquettes de vêtements avec conseils d\'entretien.', benefit: 'Informations complètes pour l\'acheteur.' }
        ],
        howItWorks: [
          { title: '1. Saisissez votre Texte', description: 'Indiquez le message ou les références techniques dans le champ.' },
          { title: '2. Personnalisez l\'Apparence', description: 'Harmonisez les couleurs et le style des modules.' },
          { title: '3. Téléchargez et Imprimez', description: 'Exportez en SVG vectoriel pour impression ou PNG.' }
        ],
        useCases: [
          { title: 'Étiquettes d\'Inventaire', description: 'Sur rayonnages pour le suivi des stocks.', example: 'Atelier industriel gérant 1 000 pièces.' },
          { title: 'Plaques Techniques', description: 'Avec dates de révision et références.', example: 'Société d\'ascenseurs.' },
          { title: 'Indices d\'Escape Game', description: 'Pour énigmes et chasses au trésor.', example: 'Activité en plein air.' },
          { title: 'Cartes de Garantie', description: 'Avec numéros de série gravés.', example: 'Horlogerie de précision.' }
        ],
        tips: [
          'Texte Concis : Un texte court génère des points plus larges et faciles à lire.',
          'Contraste Net : Points noirs sur fond blanc.',
          'Taille Minimale : Au moins 20 x 20 mm pour les textes courts.',
          'SVG pour Gravure : Idéal pour gravure laser sur métal ou plastique.',
          'Test Hors-Ligne : Activez le mode avion sur mobile pour vérifier la lecture.'
        ],
        technicalNotes: 'Conforme à la norme ISO/IEC 18004 avec encodage UTF-8 universel.',
        faqs: [
          { question: 'Faut-il internet pour lire le texte ?', answer: 'Non, le texte est stocké directement dans le dessin du code et s\'affiche 100% hors-ligne sans données mobiles.' },
          { question: 'Combien de caractères puis-je inscrire ?', answer: 'Vous pouvez enregistrer plusieurs centaines de caractères ; pour un scan rapide, restez sous les 300 mots.' },
          { question: 'Les retours à la ligne et emojis sont-ils gérés ?', answer: 'Oui, le texte supporte les sauts de ligne, les caractères accentués et les emojis UTF-8.' },
          { question: 'Ces QR codes expirent-ils ?', answer: 'Non, les codes statiques sont permanents sans date d\'expiration.' },
          { question: 'Mes données sont-elles conservées ?', answer: 'Non, la création se fait localement dans votre navigateur en toute confidentialité.' },
          { question: 'Est-ce gratuit ?', answer: 'Oui, la génération et le téléchargement en SVG ou PNG sont 100% gratuits.' }
        ],
        relatedTools: [
          { name: 'QR Code Lien Web', slug: 'url-to-qr-code', description: 'Convertissez des liens web en QR codes.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Partagez vos coordonnées complètes.' },
          { name: 'QR Code WiFi', slug: 'wifi-qr-code-generator', description: 'Partagez votre WiFi sans mot de passe.' },
          { name: 'QR Code SMS', slug: 'sms-qr-code-generator', description: 'Envoyez des SMS pré-rédigés.' }
        ]
      };
    case 'pt':
      return {
        slug: 'text-to-qr-code',
        qrTypeId: 'text',
        title: 'Gerador de QR Code de Texto — Converter Texto em QR Code',
        description: 'Converta notas, números de série e textos em QR codes legíveis offline. Download grátis em vetor SVG e PNG.',
        h1: 'Gerador de QR Code de Texto',
        subheadline: 'Codifique textos, instruções, senhas e números de série em um código 2D legível sem conexão com a internet.',
        heading: 'QR Code de Texto Simples',
        subheading: 'Armazene informações de texto diretamente no código para leitura offline instantânea.',
        overviewTitle: 'O que é um QR Code de Texto Simples?',
        overviewParagraphs: [
          'Um gerador de QR Code de texto armazena caracteres alfanuméricos (notas, instruções, códigos de série) diretamente na matriz de pontos. Ao escanear, o texto aparece na tela na hora, sem precisar abrir navegador nem de internet.',
          'É ideal para controle de estoque, identificação de máquinas e notas confidenciais em locais sem sinal de celular.',
          'Download gratuito em SVG vetorial para gráficas ou PNG em alta definição.'
        ],
        sectors: [
          { name: 'Estoque & Logística', description: 'Em caixas e paletes com números de lote e série.', benefit: 'Leitura offline rápida com leitores ópticos.' },
          { name: 'Indústria & Manutenção', description: 'Em placas de equipamentos com dados de voltagem.', benefit: 'Dados acessíveis sem sinal de internet.' },
          { name: 'Educação & Museus', description: 'Em peças de museu com explicações e charadas.', benefit: 'Atividades interativas sem sobrecarregar o Wi-Fi.' },
          { name: 'Segurança & Códigos', description: 'Para guardar senhas de recuperação no papel.', benefit: 'Armazenamento seguro e offline.' },
          { name: 'Gincanas & Caça ao Tesouro', description: 'Pistas e enigmas impressos em cartões.', benefit: 'Experiência divertida sem precisar de dados móveis.' },
          { name: 'Varejo & Etiquetas', description: 'Em etiquetas de roupas com instruções de lavagem.', benefit: 'Informação completa para o consumidor.' }
        ],
        howItWorks: [
          { title: '1. Digite seu Texto', description: 'Insira a mensagem, notas ou dados técnicos no campo.' },
          { title: '2. Personalize o Estilo', description: 'Escolha cores e ajuste o formato dos módulos.' },
          { title: '3. Baixe e Imprima', description: 'Exporte em SVG vetorial para placas ou PNG.' }
        ],
        useCases: [
          { title: 'Etiquetas de Estoque', description: 'Em prateleiras e peças para controle de inventário.', example: 'Fábrica organizando 1.000 itens.' },
          { title: 'Plaquetas de Máquinas', description: 'Com dados de revisão e números de modelo.', example: 'Empresa de manutenção predial.' },
          { title: 'Pistas de Escape Room', description: 'Para enigmas e dinâmicas de grupo.', example: 'Jogos ao ar livre.' },
          { title: 'Certificados de Autenticidade', description: 'Com números de série gravados.', example: 'Fabricante de joias.' }
        ],
        tips: [
          'Texto Conciso: Textos curtos geram pontos maiores e leitura mais rápida.',
          'Alto Contraste: Módulos pretos sobre fundo branco.',
          'Tamanho Mínimo: Pelo menos 20 x 20 mm para textos curtos.',
          'SVG para Gravação: Ideal para gravação a laser em metal ou acrílico.',
          'Teste Offline: Coloque o celular no modo avião e teste a leitura.'
        ],
        technicalNotes: 'Padrão ISO/IEC 18004 com suporte completo a texto UTF-8.',
        faqs: [
          { question: 'Precisa de internet para ler o texto?', answer: 'Não, o texto fica gravado na própria imagem e é lido 100% offline sem dados móveis.' },
          { question: 'Quantos caracteres posso colocar?', answer: 'Você pode armazenar várias centenas de caracteres; para leitura rápida, recomendamos até 300 palavras.' },
          { question: 'Aceita quebras de linha e emojis?', answer: 'Sim, suporta quebras de linha, acentos e emojis UTF-8.' },
          { question: 'Os códigos de texto expiram?', answer: 'Não, são códigos estáticos permanentes que nunca expiram.' },
          { question: 'Meus dados ficam salvos?', answer: 'Não, a geração é feita localmente no seu navegador de forma 100% confidencial.' },
          { question: 'A criação é gratuita?', answer: 'Sim, a criação e o download em SVG e PNG são 100% grátis.' }
        ],
        relatedTools: [
          { name: 'QR Code Link URL', slug: 'url-to-qr-code', description: 'Converta links em QR codes.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Salve contatos completos na agenda.' },
          { name: 'QR Code Wi-Fi', slug: 'wifi-qr-code-generator', description: 'Ofereça Wi-Fi sem senha.' },
          { name: 'QR Code SMS', slug: 'sms-qr-code-generator', description: 'Envie mensagens SMS pré-formatadas.' }
        ]
      };
    case 'it':
      return {
        slug: 'text-to-qr-code',
        qrTypeId: 'text',
        title: 'Generatore QR Code Testo — Convertire Testo in QR Code',
        description: 'Converti note, numeri di serie e testi in codici QR scansionabili offline. Download gratuito in vettoriale SVG e PNG.',
        h1: 'Generatore QR Code Testo',
        subheadline: 'Codifica messaggi di testo, istruzioni, password e numeri di serie in un codice 2D leggibile senza connessione a internet.',
        heading: 'QR Code per Testo Semplice',
        subheading: 'Memorizza informazioni testuali direttamente nel codice per una lettura offline immediata.',
        overviewTitle: 'Cos\'è un QR Code per Testo?',
        overviewParagraphs: [
          'Un generatore di codici QR per testo memorizza stringhe di caratteri (note, istruzioni, numeri di serie) direttamente nella matrice dei punti. Inquadrando il codice con lo smartphone, il testo appare all\'istante sullo schermo senza aprire browser né consumare dati.',
          'È la soluzione ideale per inventari di magazzino, targhette di macchinari o appunti riservati in ambienti senza copertura.',
          'Download gratuito in formato vettoriale SVG per la tipografia o PNG ad alta risoluzione.'
        ],
        sectors: [
          { name: 'Magazzino & Logistica', description: 'Su scatole e bancali con codici articolo e matricole.', benefit: 'Lettura offline rapida con lettori barcode.' },
          { name: 'Industria & Manutenzione', description: 'Su targhette tecniche di macchinari.', benefit: 'Dati accessibili in officina senza rete.' },
          { name: 'Musei & Istruzione', description: 'Accanto a opere per indovinelli e schede storiche.', benefit: 'Percorsi interattivi senza intasare il WiFi.' },
          { name: 'Sicurezza & Password', description: 'Per conservare codici di recupero su supporto cartaceo.', benefit: 'Archiviazione sicura offline.' },
          { name: 'Cacce al Tesoro & Giochi', description: 'Indizi ed enigmi stampati su cartoncini.', benefit: 'Esperienza coinvolgente all\'aperto.' },
          { name: 'Commercio & Cartellini', description: 'Sui cartellini dei capi con composizione e lavaggio.', benefit: 'Informazioni complete per il cliente.' }
        ],
        howItWorks: [
          { title: '1. Inserisci il Testo', description: 'Digita il messaggio, la nota o la matricola nel campo.' },
          { title: '2. Personalizza lo Stile', description: 'Scegli i colori e imposta il disegno dei moduli.' },
          { title: '3. Scarica e Stampa', description: 'Esporta in SVG vettoriale per cartelli o PNG.' }
        ],
        useCases: [
          { title: 'Etichette di Magazzino', description: 'Su scaffali e componenti per il controllo scorte.', example: 'Officina con 1.000 articoli a catalogo.' },
          { title: 'Targhette di Macchinari', description: 'Con date di manutenzione e modello.', example: 'Assistenza ascensori.' },
          { title: 'Indizi per Escape Room', description: 'Per enigmi e giochi di squadra.', example: 'Attività all\'aperto.' },
          { title: 'Certificati di Garanzia', description: 'Con numeri di serie incisi.', example: 'Produzione di orologi.' }
        ],
        tips: [
          'Testo Breve: Messaggi concisi generano punti più grandi e facili da leggere.',
          'Contrasto Elevato: Moduli neri su sfondo bianco.',
          'Dimensioni Minime: Almeno 20 x 20 mm per testi brevi.',
          'SVG per Incisione: Ideale per incisione laser su metallo o plexiglas.',
          'Test Offline: Attiva la modalità aereo sullo smartphone e fai una scansione.'
        ],
        technicalNotes: 'Standard ISO/IEC 18004 con pieno supporto alla codifica UTF-8.',
        faqs: [
          { question: 'Serve internet per leggere il testo?', answer: 'No, il testo è salvato all\'interno dell\'immagine del codice e viene letto al 100% offline senza connessione dati.' },
          { question: 'Quanti caratteri posso inserire?', answer: 'Puoi memorizzare diverse centinaia di caratteri; per una lettura rapida consigliamo di restare entro 300 parole.' },
          { question: 'Supporta ritorni a capo ed emoji?', answer: 'Sì, supporta a capo, caratteri accentati ed emoji UTF-8.' },
          { question: 'Questi codici QR scadono?', answer: 'No, i codici statici restano validi per sempre.' },
          { question: 'I miei dati vengono salvati sui vostri server?', answer: 'No, la generazione avviene localmente nel tuo browser in totale riservatezza.' },
          { question: 'La creazione è gratuita?', answer: 'Sì, la creazione e il download in formato SVG e PNG sono al 100% gratuiti.' }
        ],
        relatedTools: [
          { name: 'QR Code Link Web', slug: 'url-to-qr-code', description: 'Converti indirizzi web in QR code.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Salva i contatti completi in rubrica.' },
          { name: 'QR Code WiFi', slug: 'wifi-qr-code-generator', description: 'Condividi il WiFi senza password.' },
          { name: 'QR Code SMS', slug: 'sms-qr-code-generator', description: 'Invia SMS precompilati con un tocco.' }
        ]
      };
    case 'hi':
      return {
        slug: 'text-to-qr-code',
        qrTypeId: 'text',
        title: 'टेक्स्ट QR कोड जेनरेटर — साधारण टेक्स्ट को QR कोड में बदलें',
        description: 'नोट्स, सीरियल नंबर और टेक्स्ट संदेशों को ऑफलाइन स्कैन करने योग्य QR कोड में बदलें। वेक्टर SVG और PNG मुफ़्त डाउनलोड।',
        h1: 'टेक्स्ट QR कोड जेनरेटर',
        subheadline: 'किसी भी टेक्स्ट संदेश, नोट्स, पासवर्ड या सीरियल नंबर को 2D बारकोड में बदलें — बिना इंटरनेट के ऑफलाइन पढ़ने योग्य।',
        heading: 'साधारण टेक्स्ट QR कोड',
        subheading: 'तुरंत ऑफलाइन पढ़ने के लिए पूरी टेक्स्ट जानकारी को सीधे QR कोड में सुरक्षित करें।',
        overviewTitle: 'टेक्स्ट QR कोड क्या है?',
        overviewParagraphs: [
          'टेक्स्ट QR कोड अक्षरों, अंकों, नोट्स या सीरियल नंबरों को सीधे 2D बारकोड के डॉट्स में स्टोर करता है। जब कोई इसे फोन कैमरे से स्कैन करता है, तो स्क्रीन पर पूरा टेक्स्ट तुरंत दिख जाता है — बिना ब्राउज़र खोले और बिना किसी इंटरनेट कनेक्शन के।',
          'यह गोदामों में इन्वेंट्री प्रबंधन, मशीनों पर तकनीकी जानकारी देने या बिना मोबाइल नेटवर्क वाली जगहों पर संदेश साझा करने का सबसे अच्छा माध्यम है।',
          'प्रिंटिंग के लिए वेक्टर SVG और स्क्रीन के लिए PNG मुफ़्त डाउनलोड करें।'
        ],
        sectors: [
          { name: 'गोदाम व लॉजिस्टिक्स', description: 'पार्सल और बक्सों पर सीरियल नंबर और पार्ट नंबर लिखने हेतु।', benefit: 'बारकोड स्कैनर से त्वरित ऑफलाइन स्कैनिंग।' },
          { name: 'फैक्ट्री व मशीनरी', description: 'मशीनों की प्लेट पर तकनीकी विनिर्देश और वोल्टेज दर्ज करने हेतु।', benefit: 'बिना इंटरनेट के तकनीकी डेटा उपलब्ध।' },
          { name: 'शिक्षा व म्यूजियम', description: 'प्रदर्शनी में क्विज और ऐतिहासिक विवरण प्रदर्शित करने हेतु।', benefit: 'बिना वाई-फ़ाई पर दबाव डाले इंटरैक्टिव टूर।' },
          { name: 'सुरक्षा व बैकअप कोड्स', description: 'कागज़ पर मास्टर पासवर्ड या रिकवरी कोड्स सुरक्षित रखने हेतु।', benefit: 'सुरक्षित ऑफलाइन स्टोरेज।' },
          { name: 'गेम्स व ट्रेजर हंट', description: 'कार्ड्स पर पहेलियाँ और सुराग प्रिंट करने हेतु।', benefit: 'रोमांचक ऑफलाइन गेमिंग अनुभव।' },
          { name: 'कपड़े व रिटेल टैग्स', description: 'कपड़ों के टैग पर धुलाई निर्देश और फैब्रिक विवरण।', benefit: 'ग्राहक के लिए पूरी जानकारी।' }
        ],
        howItWorks: [
          { title: '1. टेक्स्ट लिखें या पेस्ट करें', description: 'अपना संदेश, नोट्स या सीरियल नंबर दर्ज करें।' },
          { title: '2. डिज़ाइन कस्टमाइज़ करें', description: 'रंग चुनें और डॉट्स का स्टाइल सेट करें।' },
          { title: '3. डाउनलोड व प्रिंट करें', description: 'वेक्टर SVG या हाई-रिज़ॉल्यूशन PNG डाउनलोड करें।' }
        ],
        useCases: [
          { title: 'इन्वेंट्री लेबल्स', description: 'अलमारियों और स्पेयर पार्ट्स पर स्टॉक प्रबंधन हेतु।', example: '1,000 पार्ट्स का फैक्ट्री स्टॉक।' },
          { title: 'मशीन स्पेसिफिकेशन प्लेट्स', description: 'मॉडल नंबर और मेंटेनेंस तारीख के साथ।', example: 'लिफ्ट सर्विस कोड।' },
          { title: 'पहेली सुराग कार्ड्स', description: 'ग्रुप एक्टिविटी और गेम्स के लिए।', example: 'आउटडोर इवेंट गेम।' },
          { title: 'वारंटी कार्ड्स', description: 'सीरियल नंबर के साथ।', example: 'घड़ी निर्माता सीरियल कोड।' }
        ],
        tips: [
          'छोटा टेक्स्ट रखें: कम शब्दों से बड़े डॉट्स बनते हैं जो तेज़ी से स्कैन होते हैं।',
          'हाई कंट्रास्ट: सफ़ेद बैकग्राउंड पर गहरे काले डॉट्स रखें।',
          'न्यूनतम साइज़: कागज़ पर कम से कम 20 x 20 मिमी आकार रखें।',
          'लेजर कटिंग के लिए SVG: मेटल या प्लास्टिक पर नक्काशी के लिए हमेशा SVG का उपयोग करें।',
          'ऑफलाइन टेस्ट: फोन को एयरप्लेन मोड में डालकर स्कैन करके जांचें।'
        ],
        technicalNotes: 'ISO/IEC 18004 अंतरराष्ट्रीय मानक पूर्ण UTF-8 टेक्स्ट सपोर्ट के साथ।',
        faqs: [
          { question: 'क्या टेक्स्ट पढ़ने के लिए इंटरनेट चाहिए?', answer: 'नहीं, टेक्स्ट सीधे कोड की इमेज में स्टोर रहता है और बिना इंटरनेट के 100% ऑफलाइन दिखता है।' },
          { question: 'मैं कितने अक्षर लिख सकता हूँ?', answer: 'आप कई सौ अक्षर लिख सकते हैं; तेज़ स्कैनिंग के लिए 300 शब्दों तक रखना सबसे अच्छा है।' },
          { question: 'क्या लाइन ब्रेक और इमोजी काम करते हैं?', answer: 'हाँ, यह लाइन ब्रेक, हिंदी फॉन्ट और मानक UTF-8 इमोजी का पूर्ण समर्थन करता है।' },
          { question: 'क्या यह टेक्स्ट कोड एक्सपायर होता है?', answer: 'नहीं, यह स्टैटिक कोड हमेशा सक्रिय रहता है।' },
          { question: 'क्या मेरा डेटा आपके सर्वर पर सेव होता है?', answer: 'नहीं, कोड 100% आपके ब्राउज़र में बनता है और पूरी तरह गोपनीय रहता है।' },
          { question: 'क्या यह मुफ़्त है?', answer: 'हाँ, इसे बनाना और SVG/PNG में डाउनलोड करना 100% मुफ़्त है।' }
        ],
        relatedTools: [
          { name: 'वेबसाइट URL QR जेनरेटर', slug: 'url-to-qr-code', description: 'वेबसाइट लिंक को QR कोड में बदलें।' },
          { name: 'vCard विज़िटिंग कार्ड QR', slug: 'vcard-qr-code-generator', description: 'संपर्क विवरण सीधे फोनबुक में सेव कराएं।' },
          { name: 'Wi-Fi QR जेनरेटर', slug: 'wifi-qr-code-generator', description: 'बिना पासवर्ड के वाई-फ़ाई से कनेक्ट करें।' },
          { name: 'SMS QR कोड जेनरेटर', slug: 'sms-qr-code-generator', description: 'पहले से लिखा संदेश SMS से भेजें।' }
        ]
      };
    default: // 'en'
      return {
        slug: 'text-to-qr-code',
        qrTypeId: 'text',
        title: 'Text to QR Code Generator — Convert Plain Text into Scannable QR',
        description: 'Encode plain text, notes, serial numbers, and keys into 100% offline scannable QR codes. Instant client-side vector SVG & PNG export.',
        h1: 'Text to QR Code Generator',
        subheadline: 'Encode plain text messages, serial numbers, instructions, and credentials into an optical 2D barcode readable completely offline.',
        heading: 'Plain Text QR Code',
        subheading: 'Store complete alphanumeric text records directly in the QR symbol for instant offline reading.',
        overviewTitle: 'What is a Plain Text QR Code Generator?',
        overviewParagraphs: [
          'A Plain Text QR code generator encodes raw alphanumeric character strings—such as inventory serial numbers, equipment maintenance specs, setup passwords, Wi-Fi keys, or secret scavenger hunt clues—directly into the optical 2D barcode matrix. When scanned using any modern smartphone camera, the decoded text displays immediately on the screen without opening a web browser or requiring a cellular data connection.',
          'Because plain text QR codes store their payload entirely offline inside the module matrix, they function reliably in remote areas, underground basements, maritime vessels, and airplane cabins with zero Wi-Fi or mobile reception.',
          'Our generator operates 100% client-side in your browser for complete privacy. Export print-ready vector SVG files for laser engraving on metal plaques or high-DPI PNG images for digital displays.'
        ],
        sectors: [
          { name: 'Warehousing & Logistics', description: 'Printed on storage bin racking, inventory pallets, and carton labels.', benefit: 'Enables rapid offline optical barcode scanning.' },
          { name: 'Manufacturing & Industrial Machinery', description: 'Laser-etched on equipment rating plates with voltage and model specs.', benefit: 'Access technical specifications without internet access.' },
          { name: 'Museums, Galleries & Education', description: 'Mounted on exhibition cases with historical descriptions and quiz clues.', benefit: 'Delivers interactive tours without overloading guest Wi-Fi.' },
          { name: 'Security & Paper Key Backups', description: 'Used to store cryptocurrency seed phrases and master password backups.', benefit: 'Provides secure, un-hackable paper cold storage.' },
          { name: 'Events & Scavenger Hunts', description: 'Printed on cards providing clues and riddles for outdoor teambuilding games.', benefit: 'Creates immersive games in outdoor parks without signal.' },
          { name: 'Retail Apparel & Care Labels', description: 'Printed on garment hangtags with fabric composition and washing rules.', benefit: 'Offers complete product transparency to buyers.' }
        ],
        howItWorks: [
          { title: '1. Type or Paste Plain Text', description: 'Enter your message, technical specs, or serial numbers in the input box.' },
          { title: '2. Customize Styling & Colors', description: 'Match corporate colors and select modern rounded or square module shapes.' },
          { title: '3. Download & Print Everywhere', description: 'Export print-ready Vector SVG for physical etching or high-DPI PNG.' }
        ],
        useCases: [
          { title: 'Industrial Inventory Labels', description: 'Placed on spare parts bins for stock counting.', example: 'Machinery workshop managing 1,000 SKUs.' },
          { title: 'Equipment Nameplates', description: 'Listing manufacture date, voltage, and serial IDs.', example: 'Elevator maintenance company.' },
          { title: 'Escape Room Riddles', description: 'Providing text clues when players solve physical puzzles.', example: 'Interactive team building game.' },
          { title: 'Certificate of Authenticity Cards', description: 'Enclosing engraved serial numbers on luxury goods.', example: 'High-end watch manufacturer.' }
        ],
        tips: [
          'Keep Text Concise: Shorter character counts produce simpler QR matrices with larger dots that scan significantly faster.',
          'High Optical Contrast: Maintain dark modules against a clean white background for rapid scanning.',
          'Minimum Physical Print Size: Print at a minimum of 20 x 20 mm on physical paper.',
          'Vector SVG for Laser Engraving: Supply vector SVG format for laser marking on metal or plastic.',
          'Test in Airplane Mode: Switch your mobile phone to airplane mode to test offline scanning before printing.'
        ],
        technicalNotes: 'Standards Compliance: Generates standard ISO/IEC 18004 QR symbols with full UTF-8 text support.',
        faqs: [
          { question: 'Is an active internet connection required to scan the text?', answer: 'No! The plain text payload is encoded directly into the pixel modules of the QR symbol and displays 100% offline on the scanner\'s screen.' },
          { question: 'How much text can I store inside a single QR code?', answer: 'You can store up to several hundred characters. However, for maximum scannability and larger dot sizes, keeping text under 300 words is recommended.' },
          { question: 'Does this support line breaks, foreign characters, and emojis?', answer: 'Yes! Our generator fully supports standard UTF-8 encoding including multi-line formatting, accented characters, and emojis.' },
          { question: 'Do plain text QR codes ever expire?', answer: 'No. Static plain text QR codes encode the data permanently and will work indefinitely with zero fees.' },
          { question: 'Is my text stored on your servers?', answer: 'No. Generation occurs 100% locally in your browser memory without remote logging or database storage.' },
          { question: 'Is it free to generate and download?', answer: 'Yes! Creating and exporting plain text QR codes in SVG and PNG format is 100% free with unlimited scans.' }
        ],
        relatedTools: [
          { name: 'URL QR Generator', slug: 'url-to-qr-code', description: 'Convert website links into scannable QR codes.' },
          { name: 'vCard QR Generator', slug: 'vcard-qr-code-generator', description: 'Share full contact credentials directly to address books.' },
          { name: 'Wi-Fi QR Generator', slug: 'wifi-qr-code-generator', description: 'Let visitors connect to Wi-Fi without typing passwords.' },
          { name: 'SMS QR Code Generator', slug: 'sms-qr-code-generator', description: 'Launch pre-filled SMS text messages.' }
        ]
      };
  }
}
