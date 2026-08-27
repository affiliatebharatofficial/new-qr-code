import type { Locale } from '../config';
import type { LocalizedPageContent } from './types';

export function getCashAppContent(locale: Locale): LocalizedPageContent {
  switch (locale) {
    case 'es':
      return {
        slug: 'cash-app-qr-code-generator',
        qrTypeId: 'cash_app',
        title: 'Generador de Código QR de Cash App — Cobros y Pagos con $Cashtag',
        description: 'Crea códigos QR personalizados para tu $Cashtag o perfil de Cash App. Importe y nota opcionales. Descarga en vector SVG y PNG.',
        h1: 'Generador de Código QR de Cash App',
        subheadline: 'Genera códigos QR que dirigen a tus clientes y seguidores directamente a tu perfil o destino de pago de Cash App.',
        heading: 'Código QR de Cash App',
        subheading: 'Acepta transferencias y propinas instantáneas con tu $Cashtag en eventos, puestos y tiendas.',
        overviewTitle: '¿Qué es un Código QR de Cash App?',
        overviewParagraphs: [
          'Un generador de códigos QR de Cash App codifica tu identificador único $Cashtag o enlace de perfil en un código de barras 2D. Al escanearlo con la cámara del smartphone, el dispositivo abre directamente la aplicación de Cash App o su pasarela web con tu perfil listo para enviar dinero.',
          'Este generador codifica el destino que indiques de forma precisa y segura. Los pagos son procesados directamente por la plataforma de Cash App, sin intermediarios ni comisiones añadidas por nuestra parte.',
          'Personaliza el código con el color verde característico o tus tonos de marca, añade tu logotipo y descarga en gráficos vectoriales SVG para imprenta o PNG para pantallas.'
        ],
        sectors: [
          { name: 'Creadores y Cuentas de Redes Sociales', description: 'En emisiones en vivo y vídeos para recibir propinas y donaciones.', benefit: 'Monetización instantánea del contenido.' },
          { name: 'Puestos de Comida y Food Trucks', description: 'En la ventanilla de recogida para pagos exprés.', benefit: 'Acelera las colas en horas punta.' },
          { name: 'Eventos, Fiestas y DJs', description: 'En la cabina de sonido para propinas y peticiones de canciones.', benefit: 'Facilita propinas sin necesidad de billetes.' },
          { name: 'Comercio Minorista y Pop-Up', description: 'En el mostrador junto a la caja para compras rápidas.', benefit: 'Cobros ágiles sin comisiones de datáfono.' },
          { name: 'Artesanos y Mercadillos', description: 'En carteles de mesa y etiquetas de productos.', benefit: 'Permite compras espontáneas sin efectivo.' },
          { name: 'Servicios Personales y Reparaciones', description: 'En furgonetas y tarjetas para cobro directo.', benefit: 'Cobro transparente al finalizar el trabajo.' }
        ],
        howItWorks: [
          { title: '1. Introduce tu $Cashtag', description: 'Escribe tu identificador (ej. $tuetiqueta o tuetiqueta) o enlace completo.' },
          { title: '2. Define Importe y Nota Opcional', description: 'Puedes fijar una cantidad sugerida o dejarla libre para el comprador.' },
          { title: '3. Descarga e Imprime', description: 'Exporta en SVG vectorial para imprenta o PNG de alta resolución.' }
        ],
        useCases: [
          { title: 'Expositores de Mostrador', description: 'Soportes de metacrilato con "Paga con Cash App".', example: 'Puesto de limonada o cafetería.' },
          { title: 'Pegatinas Plastificadas', description: 'Adhesivos duraderos para puestos al aire libre.', example: 'Puesto de artesanía.' },
          { title: 'Transmisiones en Vivo (Streaming)', description: 'Superposición en pantalla durante directos.', example: 'Creador de contenido en YouTube/Twitch.' },
          { title: 'Tarjetas de Visita', description: 'Con código en el reverso para honorarios directos.', example: 'Fotógrafo o diseñador freelance.' }
        ],
        tips: [
          'Verifica tu $Cashtag: Asegúrate de que el identificador esté bien escrito.',
          'Importe Libre: Deja el importe en blanco para que el cliente ingrese el total exacto.',
          'Alto Contraste: Utiliza módulos oscuros sobre fondo claro para facilitar el escaneo.',
          'SVG para Imprenta: Utiliza SVG vectorial para impresión física de cualquier tamaño.',
          'Prueba con tu Móvil: Escanea el código impreso antes de colocarlo al público.'
        ],
        technicalNotes: 'Aviso: Esta herramienta genera códigos QR para el destino que proporcionas. Los pagos son procesados por el servicio correspondiente (Cash App).',
        faqs: [
          { question: '¿Cómo funciona el código QR de Cash App al escanearlo?', answer: 'Al escanear el código con la cámara, el teléfono abre la aplicación de Cash App o la página web con tu $Cashtag listo para transferir dinero.' },
          { question: '¿Esta página procesa o retiene pagos?', answer: 'No. Nuestra herramienta solo genera el código QR visual. Todas las transacciones son gestionadas de forma segura por Cash App.' },
          { question: '¿Puedo fijar un importe específico en el código?', answer: 'Sí, puedes configurar una cantidad predefinida o dejar el campo vacío para que el pagador escriba el importe.' },
          { question: '¿Puedo añadir un concepto o nota?', answer: 'Sí, puedes incluir una nota opcional como "Propina" o "Pago de compra".' },
          { question: '¿Caducan estos códigos QR?', answer: 'No, los códigos QR estáticos son permanentes y funcionarán mientras tu cuenta de Cash App esté activa.' },
          { question: '¿Puedo poner mi propio logo en el centro?', answer: 'Sí, sube tu logo y el sistema ajustará la corrección de errores al nivel Alto (30%).' }
        ],
        relatedTools: [
          { name: 'QR de Venmo', slug: 'venmo-qr-code-generator', description: 'Crea códigos para pagos en Venmo.' },
          { name: 'QR de PayPal', slug: 'paypal-qr-code-generator', description: 'Genera códigos con tu enlace PayPal.Me.' },
          { name: 'QR de Zelle', slug: 'zelle-qr-code-generator', description: 'Comparte datos de destinatario Zelle.' },
          { name: 'QR de Enlace Web', slug: 'url-to-qr-code', description: 'Convierte enlaces web en códigos QR.' }
        ]
      };
    case 'de':
      return {
        slug: 'cash-app-qr-code-generator',
        qrTypeId: 'cash_app',
        title: 'Cash App QR Code Generator — Zahlungen & Trinkgeld mit $Cashtag',
        description: 'Erstellen Sie QR-Codes für Ihren Cash App $Cashtag oder Profillink. Betrag und Notiz optional. Kostenloser Vektor-SVG & PNG Download.',
        h1: 'Cash App QR Code Generator',
        subheadline: 'Generieren Sie QR-Codes, die Kunden und Unterstützer direkt zu Ihrem Cash App $Cashtag oder Zahlungsziel leiten.',
        heading: 'Cash App Zahlungs-QR-Code',
        subheading: 'Akzeptieren Sie schnelle Zahlungen und Trinkgelder mit Ihrem $Cashtag auf Events, Märkten und im Stream.',
        overviewTitle: 'Was ist ein Cash App QR Code Generator?',
        overviewParagraphs: [
          'Ein Cash App QR Code Generator wandelt Ihren $Cashtag oder Profillink in einen 2D-Barcode um. Beim Scannen mit der Handykamera öffnet sich direkt die Cash App oder die Web-Ansicht mit Ihrem hinterlegten Profil.',
          'Dieses Tool erzeugt den grafischen QR-Code für das von Ihnen angegebene Ziel. Die Zahlungsabwicklung erfolgt durch den jeweiligen Zahlungsdienstleister Cash App.',
          'Passen Sie Farben an, laden Sie Ihr Firmenlogo hoch und laden Sie druckfertige Vektor-SVG- oder hochauflösende PNG-Dateien herunter.'
        ],
        sectors: [
          { name: 'Content Creator & Streamer', description: 'In Livestreams und Videos für Trinkgelder und Spenden.', benefit: 'Direkte Unterstützung durch die Community.' },
          { name: 'Food Trucks & Imbisswagen', description: 'Am Ausgabefenster für schnelle Bestellabwicklung.', benefit: 'Kürzere Wartezeiten für Kunden.' },
          { name: 'DJs & Event-Veranstalter', description: 'Am Mischpult für Songwünsche und Trinkgeld.', benefit: 'Trinkgelder ohne Bargeldbedarf.' },
          { name: 'Einzelhandel & Pop-Up Stores', description: 'Am Kassenbereich für schnelle Abrechnung.', benefit: 'Keine Terminal-Mieten oder Kartengebühren.' },
          { name: 'Kunsthandwerk & Märkte', description: 'Auf Verkaufstischen und Preisschildern.', benefit: 'Fördert spontane Einkäufe vor Ort.' },
          { name: 'Handwerk & Vor-Ort-Service', description: 'Auf Firmenwagen für direkte Bezahlung.', benefit: 'Unkomplizierte Abrechnung nach getaner Arbeit.' }
        ],
        howItWorks: [
          { title: '1. $Cashtag Eingeben', description: 'Tragen Sie Ihren $Cashtag (z. B. $tag) oder Link ein.' },
          { title: '2. Betrag & Notiz Festlegen', description: 'Optional einen Festbetrag oder eine Notiz hinterlegen.' },
          { title: '3. Herunterladen & Drucken', description: 'Als Vektor-SVG für Schilder oder PNG exportieren.' }
        ],
        useCases: [
          { title: 'Thekenaufsteller an der Kasse', description: 'Acrylaufsteller mit "Mit Cash App zahlen".', example: 'Café-Theke.' },
          { title: 'Wetterfeste Aufkleber', description: 'Plastifizierte Sticker für Marktstände.', example: 'Marktstand im Freien.' },
          { title: 'Livestream-Einblendungen', description: 'Als Overlay im Video-Stream.', example: 'Gaming-Streamer.' },
          { title: 'Visitenkarten', description: 'Mit Code auf der Rückseite.', example: 'Fotograf.' }
        ],
        tips: [
          '$Cashtag Prüfen: Achten Sie genau auf Tippfehler im $Cashtag.',
          'Betrag Flexibel Halten: Betragsfeld leer lassen, damit Kunden frei wählen können.',
          'Hoher Kontrast: Dunkles Muster auf weißem Grund für schnelles Scannen.',
          'Vektor-SVG für Drucksachen: Garantiert randscharfe Kanten bei Schildern.',
          'Vorab Scantest: Vor dem Aushang mit der Handykamera testen.'
        ],
        technicalNotes: 'Hinweis: Dieses Tool generiert QR-Codes für das von Ihnen angegebene Ziel. Die Zahlungsabwicklung erfolgt durch den jeweiligen Zahlungsdienstleister (Cash App).',
        faqs: [
          { question: 'Wie funktioniert der Cash App QR-Code beim Scannen?', answer: 'Beim Scannen öffnet sich die Cash App oder Website mit Ihrem $Cashtag vorausgewählt zur Zahlung.' },
          { question: 'Verarbeitet diese Seite Zahlungen?', answer: 'Nein, wir erzeugen ausschließlich den QR-Code. Alle Zahlungen werden von Cash App abgewickelt.' },
          { question: 'Kann ich einen festen Betrag vorgeben?', answer: 'Ja, Sie können einen Betrag vorgeben oder das Feld für freie Eingabe leer lassen.' },
          { question: 'Kann ich eine Notiz hinzufügen?', answer: 'Ja, Sie können einen Verwendungszweck wie "Trinkgeld" oder "Einkauf" hinterlegen.' },
          { question: 'Laufen diese QR-Codes ab?', answer: 'Nein, die statischen Codes sind dauerhaft gültig, solange Ihr Cash App Konto aktiv ist.' },
          { question: 'Kann ich mein eigenes Logo einfügen?', answer: 'Ja, laden Sie Ihr Logo hoch und die Fehlerkorrektur wird automatisch auf Stufe H (30%) gesetzt.' }
        ],
        relatedTools: [
          { name: 'Venmo QR Generator', slug: 'venmo-qr-code-generator', description: 'QR-Codes für Venmo erstellen.' },
          { name: 'PayPal QR Generator', slug: 'paypal-qr-code-generator', description: 'QR-Codes für PayPal.Me erstellen.' },
          { name: 'Zelle QR Code', slug: 'zelle-qr-code-generator', description: 'Zelle Empfänger-Codes generieren.' },
          { name: 'Weblink QR Generator', slug: 'url-to-qr-code', description: 'Webseiten in QR-Codes umwandeln.' }
        ]
      };
    case 'fr':
      return {
        slug: 'cash-app-qr-code-generator',
        qrTypeId: 'cash_app',
        title: 'Générateur de QR Code Cash App — Paiements et Pourboires avec $Cashtag',
        description: 'Créez des QR codes pour votre $Cashtag ou profil Cash App. Montant et note optionnels. Téléchargement gratuit en SVG et PNG.',
        h1: 'Générateur de QR Code Cash App',
        subheadline: 'Générez des QR codes redirigeant directement vos clients vers votre $Cashtag ou destination de paiement Cash App.',
        heading: 'QR Code de Paiement Cash App',
        subheading: 'Acceptez des paiements instantanés et des pourboires avec votre $Cashtag lors d\'événements et prestations.',
        overviewTitle: 'Qu\'est-ce qu\'un QR Code Cash App ?',
        overviewParagraphs: [
          'Un générateur de QR code Cash App encode votre identifiant $Cashtag ou lien de profil dans un code 2D. Au scan avec l\'appareil photo d\'un smartphone, l\'utilisateur ouvre directement l\'application Cash App ou le profil web pour effectuer son paiement.',
          'Cet outil génère le QR code correspondant à la destination indiquée. Les paiements sont traités par le service Cash App sous ses propres conditions.',
          'Personnalisez les couleurs, intégrez votre logo et téléchargez en format vectoriel SVG pour l\'imprimerie ou PNG haute définition.'
        ],
        sectors: [
          { name: 'Créateurs de Contenu & Streamers', description: 'En direct et sur les vidéos pour recevoir des dons.', benefit: 'Monétisation directe par la communauté.' },
          { name: 'Food Trucks & Restauration Rapide', description: 'Au guichet de retrait pour accélérer le service.', benefit: 'Réduit les files d\'attente.' },
          { name: 'DJs & Soirées Événementielles', description: 'Près de la régie pour dédicaces et pourboires.', benefit: 'Pourboires sans pièces de monnaie.' },
          { name: 'Commerces & Boutiques Pop-Up', description: 'Au comptoir pour des encaissements sans contact.', benefit: 'Zéro frais de terminal bancaire.' },
          { name: 'Artisans & Marchés', description: 'Sur les tables d\'exposition et étiquettes.', benefit: 'Encourage les achats spontanés.' },
          { name: 'Dépannage & Artisans à Domicile', description: 'Sur véhicules pour règlement direct.', benefit: 'Paiement transparent en fin de prestation.' }
        ],
        howItWorks: [
          { title: '1. Saisissez votre $Cashtag', description: 'Indiquez votre identifiant (ex. $nom ou nom) ou lien.' },
          { title: '2. Montant et Note Optionnels', description: 'Précisez une somme suggérée ou laissez le champ libre.' },
          { title: '3. Téléchargez et Imprimez', description: 'Exportez en SVG vectoriel pour impression ou PNG.' }
        ],
        useCases: [
          { title: 'Chevalets de Comptoir', description: 'Support en plexiglas avec "Payez avec Cash App".', example: 'Stand de café.' },
          { title: 'Stickers Résistants', description: 'Adhésifs plastifiés pour extérieur.', example: 'Marché de plein air.' },
          { title: 'Incrustation Live Stream', description: 'Affiché à l\'écran pendant les directs.', example: 'Streamer Twitch.' },
          { title: 'Cartes de Visite', description: 'Avec le code au verso.', example: 'Photographe indépendant.' }
        ],
        tips: [
          'Vérifiez le $Cashtag : Assurez-vous de l\'orthographe exacte.',
          'Montant Libre : Laissez le champ vide pour laisser le client indiquer la somme.',
          'Contraste Net : Points sombres sur fond clair pour un scan rapide.',
          'SVG pour l\'Impression : Idéal pour affiches et panneaux.',
          'Test Préalable : Scannez le code avec un smartphone avant diffusion.'
        ],
        technicalNotes: 'Avertissement : Cet outil génère des QR codes pour la destination fournie. Les paiements sont traités par le service de paiement concerné (Cash App).',
        faqs: [
          { question: 'Comment fonctionne le QR code Cash App au scan ?', answer: 'Au scan avec l\'appareil photo, le smartphone ouvre l\'application Cash App ou la page web avec votre $Cashtag sélectionné prêt à payer.' },
          { question: 'Ce site traite-t-il les paiements ?', answer: 'Non, cet outil génère uniquement le QR code visuel. Toutes les transactions financières sont gérées par Cash App.' },
          { question: 'Puis-je définir un montant fixe ?', answer: 'Oui, vous pouvez renseigner un montant précis ou laisser le champ libre.' },
          { question: 'Puis-je ajouter une note de paiement ?', answer: 'Oui, vous pouvez insérer un mémo comme "Pourboire" ou "Prestation".' },
          { question: 'Ces QR codes expirent-ils ?', answer: 'Non, les codes statiques sont permanents tant que votre compte Cash App existe.' },
          { question: 'Puis-je intégrer mon logo au centre ?', answer: 'Oui, importez votre logo et la correction d\'erreur passera automatiquement au niveau H (30%).' }
        ],
        relatedTools: [
          { name: 'QR Code Venmo', slug: 'venmo-qr-code-generator', description: 'Codes pour paiements Venmo.' },
          { name: 'QR Code PayPal', slug: 'paypal-qr-code-generator', description: 'Codes pour paiements PayPal.Me.' },
          { name: 'QR Code Zelle', slug: 'zelle-qr-code-generator', description: 'Codes destinataire Zelle.' },
          { name: 'QR Code Lien Web', slug: 'url-to-qr-code', description: 'Convertissez des URL en QR codes.' }
        ]
      };
    case 'pt':
      return {
        slug: 'cash-app-qr-code-generator',
        qrTypeId: 'cash_app',
        title: 'Gerador de QR Code do Cash App — Pagamentos e Gorjetas com $Cashtag',
        description: 'Crie QR Codes para seu $Cashtag ou perfil do Cash App. Valor e nota opcionais. Download gratuito em vetor SVG e PNG.',
        h1: 'Gerador de QR Code do Cash App',
        subheadline: 'Gere QR Codes que direcionam clientes e seguidores diretamente para seu $Cashtag ou pagamento no Cash App.',
        heading: 'QR Code de Pagamento Cash App',
        subheading: 'Receba transferências instantâneas e gorjetas com seu $Cashtag em eventos, lojas e transmissões ao vivo.',
        overviewTitle: 'O que é um QR Code do Cash App?',
        overviewParagraphs: [
          'Um gerador de QR Code do Cash App codifica sua chave $Cashtag ou link de perfil em um código 2D. Ao escanear, o celular abre o aplicativo do Cash App ou página web com o destinatário pronto para transferência.',
          'Esta ferramenta gera o código gráfico para o destino informado. O processamento dos pagamentos é realizado exclusivamente pelo Cash App.',
          'Personalize cores, insira seu logotipo e baixe em SVG vetorial para gráficas ou PNG em alta definição.'
        ],
        sectors: [
          { name: 'Criadores de Conteúdo & Streamers', description: 'Em lives e vídeos para recebimento de doações.', benefit: 'Apoio direto dos espectadores.' },
          { name: 'Food Trucks & Lanches', description: 'No balcão de retirada para cobrança rápida.', benefit: 'Diminui filas no horário de pico.' },
          { name: 'DJs & Produtores de Eventos', description: 'Na cabine de som para pedidos de música e gorjetas.', benefit: 'Gorjetas sem uso de dinheiro físico.' },
          { name: 'Lojas & Varejo Físico', description: 'No balcão para cobranças sem contato.', benefit: 'Economia com aluguel de maquininhas.' },
          { name: 'Artesãos & Feirantes', description: 'Em bancadas e etiquetas de produtos.', benefit: 'Facilita compras por impulso.' },
          { name: 'Serviços & Reparos', description: 'Em frotas para acerto direto de serviços.', benefit: 'Pagamento rápido após o serviço.' }
        ],
        howItWorks: [
          { title: '1. Digite seu $Cashtag', description: 'Insira sua tag (ex.: $tag ou tag) ou link.' },
          { title: '2. Defina Valor e Mensagem Opcional', description: 'Especifique um valor sugerido ou deixe em branco.' },
          { title: '3. Baixe e Divulgue', description: 'Exporte em SVG vetorial para placas ou PNG.' }
        ],
        useCases: [
          { title: 'Displays de Balcão', description: 'Acrílico com "Pague com Cash App".', example: 'Cafeteria.' },
          { title: 'Adesivos Resistentes', description: 'Adesivos plastificados para balcões externos.', example: 'Feira de rua.' },
          { title: 'Transmissões ao Vivo', description: 'Exibido na tela durante lives.', example: 'Streamer.' },
          { title: 'Cartões de Visita', description: 'Com código no verso.', example: 'Fotógrafo.' }
        ],
        tips: [
          'Confira o $Cashtag: Verifique se a tag foi digitada corretamente.',
          'Valor Livre: Deixe o campo de valor vazio para o cliente digitar.',
          'Alto Contraste: Fundo branco facilita a leitura.',
          'SVG para Gráficas: Garante nitidez máxima na impressão.',
          'Teste no Celular: Escaneie o código antes do uso.'
        ],
        technicalNotes: 'Aviso: Esta ferramenta gera códigos QR para o destino informado. Os pagamentos são processados pelo respectivo serviço (Cash App).',
        faqs: [
          { question: 'Como o QR Code do Cash App funciona ao escanear?', answer: 'Ao escanear com a câmera, o celular abre o aplicativo ou página do Cash App com o seu $Cashtag pronto para o pagamento.' },
          { question: 'Esta ferramenta processa pagamentos?', answer: 'Não, nosso site gera apenas o código visual. Todas as transações ocorrem dentro do Cash App.' },
          { question: 'Posso definir um valor fixo?', answer: 'Sim, você pode predefinir um valor ou deixar o campo aberto.' },
          { question: 'Posso colocar uma mensagem de cobrança?', answer: 'Sim, você pode incluir um recado como "Gorjeta" ou "Compra".' },
          { question: 'Os códigos expiram?', answer: 'Não, os códigos estáticos funcionam permanentemente enquanto sua conta estiver ativa.' },
          { question: 'Posso colocar o logotipo da minha empresa?', answer: 'Sim, envie seu logo e o sistema ajustará a correção de erros para Alto (30%).' }
        ],
        relatedTools: [
          { name: 'QR Code Venmo', slug: 'venmo-qr-code-generator', description: 'Códigos para pagamentos Venmo.' },
          { name: 'QR Code PayPal', slug: 'paypal-qr-code-generator', description: 'Códigos para links PayPal.Me.' },
          { name: 'QR Code Zelle', slug: 'zelle-qr-code-generator', description: 'Códigos de destinatário Zelle.' },
          { name: 'QR Code Link URL', slug: 'url-to-qr-code', description: 'Converta links em QR codes.' }
        ]
      };
    case 'it':
      return {
        slug: 'cash-app-qr-code-generator',
        qrTypeId: 'cash_app',
        title: 'Generatore QR Code Cash App — Pagamenti e Mance con $Cashtag',
        description: 'Crea codici QR per il tuo $Cashtag o profilo Cash App. Importo e causale opzionali. Download gratuito in vettoriale SVG e PNG.',
        h1: 'Generatore QR Code Cash App',
        subheadline: 'Genera codici QR per indirizzare clienti e follower direttamente al tuo $Cashtag o pagamento su Cash App.',
        heading: 'QR Code di Pagamento Cash App',
        subheading: 'Accetta pagamenti istantanei e mance con il tuo $Cashtag in eventi, negozi e dirette streaming.',
        overviewTitle: 'Cos\'è un QR Code Cash App?',
        overviewParagraphs: [
          'Un generatore di codici QR Cash App codifica il tuo identificativo $Cashtag o link del profilo in un codice 2D. Inquadrando il codice con la fotocamera, lo smartphone apre l\'app Cash App o la pagina web con il destinatario già impostato per il trasferimento.',
          'Questo strumento genera il codice grafico per la destinazione indicata. I pagamenti sono elaborati direttamente dalla piattaforma Cash App.',
          'Personalizza i colori, inserisci il tuo logo e scarica in formato vettoriale SVG per la tipografia o PNG ad alta risoluzione.'
        ],
        sectors: [
          { name: 'Content Creator & Streamer', description: 'Durante le dirette per ricevere donazioni dai fan.', benefit: 'Sostegno diretto dalla community.' },
          { name: 'Food Truck & Street Food', description: 'Alla cassa per pagamenti rapidi.', benefit: 'Riduce i tempi di attesa.' },
          { name: 'DJ & Musicisti', description: 'Alla console per richieste musicali e mance.', benefit: 'Mance senza bisogno di contanti.' },
          { name: 'Negozi & Attività Commerciali', description: 'Sul bancone cassa per pagamenti veloci.', benefit: 'Nessun canone pos.' },
          { name: 'Artigiani & Mercatini', description: 'Sui banchi di vendita e cartellini prezzo.', benefit: 'Incentiva gli acquisti d\'impulso.' },
          { name: 'Riparatori & Servizi a Domicilio', description: 'Sui mezzi per il saldo al termine del lavoro.', benefit: 'Incassi trasparenti e puntuali.' }
        ],
        howItWorks: [
          { title: '1. Inserisci il Tuo $Cashtag', description: 'Digita il tuo tag (es. $tag o tag) o link completo.' },
          { title: '2. Imposta Importo e Nota Opzionale', description: 'Indica un importo suggerito o lascia il campo vuoto.' },
          { title: '3. Scarica e Stampa', description: 'Esporta in SVG vettoriale per espositori o PNG.' }
        ],
        useCases: [
          { title: 'Espositori da Bancone', description: 'Supporto in plexiglas con "Paga con Cash App".', example: 'Chiosco o bar.' },
          { title: 'Adesivi Resistenti', description: 'Adesivi plastificati per banchi all\'aperto.', example: 'Bancarella di artigianato.' },
          { title: 'Incrustazioni in Live Streaming', description: 'Visualizzato a schermo durante le dirette.', example: 'Streamer su Twitch.' },
          { title: 'Biglietti da Visita', description: 'Con codice sul retro.', example: 'Fotografo freelance.' }
        ],
        tips: [
          'Verifica il $Cashtag: Controlla che il tag sia digitato correttamente.',
          'Importo Libero: Lascia vuoto il campo per far inserire l\'importo al cliente.',
          'Contrasto Elevato: Sfondo bianco per una lettura immediata.',
          'SVG per la Stampa: Massima nitidezza tipografica.',
          'Test da Smartphone: Inquadra il cartello prima dell\'uso.'
        ],
        technicalNotes: 'Avviso: Questo strumento genera codici QR per la destinazione fornita. I pagamenti sono elaborati dal rispettivo servizio di pagamento (Cash App).',
        faqs: [
          { question: 'Come funziona il codice QR Cash App alla scansione?', answer: 'Inquadrando il codice con la fotocamera, lo smartphone apre l\'app Cash App o il profilo web con il tuo $Cashtag pronto per il pagamento.' },
          { question: 'Questo sito elabora i pagamenti?', answer: 'No, questo generatore crea solo il codice grafico. Tutte le transazioni sono gestite in modo sicuro da Cash App.' },
          { question: 'Posso impostare un importo fisso?', answer: 'Sì, puoi preimpostare una cifra o lasciare il campo aperto.' },
          { question: 'Posso aggiungere una causale di pagamento?', answer: 'Sì, puoi specificare una nota come "Mancia" o "Acquisto".' },
          { question: 'Questi codici QR scadono?', answer: 'No, i codici statici restano validi per sempre finché il tuo account è attivo.' },
          { question: 'Posso inserire il mio logo al centro?', answer: 'Sì, carica il tuo logo e la correzione errori verrà impostata automaticamente su Alto (30%).' }
        ],
        relatedTools: [
          { name: 'QR Code Venmo', slug: 'venmo-qr-code-generator', description: 'Codici per pagamenti Venmo.' },
          { name: 'QR Code PayPal', slug: 'paypal-qr-code-generator', description: 'Codici per pagamenti PayPal.Me.' },
          { name: 'QR Code Zelle', slug: 'zelle-qr-code-generator', description: 'Codici destinatario Zelle.' },
          { name: 'QR Code Link Web', slug: 'url-to-qr-code', description: 'Converti indirizzi web in QR code.' }
        ]
      };
    case 'hi':
      return {
        slug: 'cash-app-qr-code-generator',
        qrTypeId: 'cash_app',
        title: 'Cash App QR कोड जेनरेटर — $Cashtag भुगतान और टिप QR कोड',
        description: 'अपने $Cashtag और Cash App प्रोफ़ाइल के लिए कस्टम QR कोड बनाएं। राशि और नोट के साथ। वेक्टर SVG और PNG मुफ़्त डाउनलोड।',
        h1: 'Cash App QR कोड जेनरेटर',
        subheadline: 'ग्राहकों और फॉलोअर्स को सीधे आपके $Cashtag या Cash App भुगतान गंतव्य पर भेजने के लिए QR कोड बनाएं।',
        heading: 'Cash App भुगतान QR कोड',
        subheading: 'इवेंट्स, दुकानों और लाइव स्ट्रीम में अपने $Cashtag से तुरंत भुगतान और टिप प्राप्त करें।',
        overviewTitle: 'Cash App QR कोड क्या है?',
        overviewParagraphs: [
          'Cash App QR कोड आपके $Cashtag या प्रोफाइल लिंक को 2D बारकोड में बदल देता है। जब कोई इसे फोन कैमरे से स्कैन करता है, तो मोबाइल में Cash App खुल जाती है और प्राप्तकर्ता का नाम पहले से भरा हुआ मिलता है।',
          'यह टूल आपके द्वारा दर्ज किए गए गंतव्य के लिए QR कोड तैयार करता है। भुगतान प्रक्रिया सीधे संबंधित भुगतान सेवा (Cash App) द्वारा पूरी की जाती है।',
          'काउंटर स्टैंडी और बोर्ड के लिए वेक्टर SVG और PNG मुफ़्त डाउनलोड करें।'
        ],
        sectors: [
          { name: 'कंटेंट क्रिएटर्स व स्ट्रीमर्स', description: 'लाइव वीडियो में दर्शकों से टिप व सुपरचैट प्राप्त करने हेतु।', benefit: 'कम्युनिटी से सीधा डिजिटल सहयोग।' },
          { name: 'फूड ट्रक्स व स्ट्रीट कैफ़े', description: 'ऑर्डर काउंटर पर त्वरित भुगतान के लिए।', benefit: 'भीड़ के समय बिलिंग में तेज़ी।' },
          { name: 'डीजे व संगीत कलाकार', description: 'सॉन्ग रिक्वेस्ट और टिप मंगाने हेतु।', benefit: 'बिना कैश के आसान डिजिटल टिप।' },
          { name: 'रिटेल दुकानें व स्टोर', description: 'कैश काउंटर पर बिना संपर्क के त्वरित भुगतान के लिए।', benefit: 'कार्ड मशीन के किराए से बचत।' },
          { name: 'हस्तशिल्प व कारीगर', description: 'प्रदर्शनी और मेलों में बिक्री बढ़ाने हेतु।', benefit: 'खरीदारी को आसान बनाता है।' },
          { name: 'सर्विस व रिपेयरिंग', description: 'गाड़ियों पर लगा संपर्क कोड तुरंत फीस लेने हेतु।', benefit: 'काम पूरा होने पर तुरंत भुगतान।' }
        ],
        howItWorks: [
          { title: '1. अपना $Cashtag दर्ज करें', description: 'अपना टैग (जैसे $yourtag या yourtag) या लिंक लिखें।' },
          { title: '2. राशि व नोट सेट करें (वैकल्पिक)', description: 'यदि निश्चित रकम लेनी हो तो राशि दर्ज करें या खाली छोड़ें।' },
          { title: '3. डाउनलोड व प्रिंट करें', description: 'वेक्टर SVG या हाई-रिज़ॉल्यूशन PNG डाउनलोड करें।' }
        ],
        useCases: [
          { title: 'काउंटर स्टैंडी', description: '"Cash App से भुगतान करें" लिखा हुआ स्टैंड।', example: 'कैफ़े काउंटर स्टैंड।' },
          { title: 'वॉटरप्रूफ स्टिकर्स', description: 'दुकानों के लिए लेमिनेटेड स्टिकर।', example: 'आउटडोर स्टॉल।' },
          { title: 'लाइव स्ट्रीम स्क्रीन', description: 'वीडियो पर दिखने वाला QR कोड।', example: 'गेमिंग स्ट्रीमर स्क्रीन।' },
          { title: 'विज़िटिंग कार्ड्स', description: 'कार्ड के पीछे डिजिटल भुगतान कोड।', example: 'फोटोग्राफर कार्ड।' }
        ],
        tips: [
          '$Cashtag जांचें: स्पेलिंग में कोई गलती न हो।',
          'राशि खाली छोड़ें: ग्राहकों को अपनी इच्छानुसार रकम भरने की छूट दें।',
          'हाई कंट्रास्ट: सफ़ेद बैकग्राउंड पर गहरे डॉट्स रखें।',
          'प्रिंटिंग के लिए SVG: बड़े प्रिंट के लिए SVG का उपयोग करें।',
          'प्रिंट से पहले जांच: फोन कैमरे से स्कैन करके चेक करें।'
        ],
        technicalNotes: 'सूचना: यह टूल आपके द्वारा दिए गए गंतव्य के लिए QR कोड बनाता है। भुगतान का निपटारा संबंधित भुगतान सेवा (Cash App) द्वारा किया जाता है।',
        faqs: [
          { question: 'स्कैन करने पर Cash App QR कोड कैसे काम करता है?', answer: 'कैमरे से स्कैन करते ही मोबाइल में Cash App खुल जाती है जिसमें आपका $Cashtag पहले से भरा मिलता है।' },
          { question: 'क्या यह वेबसाइट भुगतान प्रोसेस करती है?', answer: 'नहीं, यह टूल केवल विज़ुअल QR कोड बनाता है। सभी भुगतान सीधे Cash App द्वारा सुरक्षित रूप से प्रोसेस किए जाते हैं।' },
          { question: 'क्या मैं निश्चित राशि तय कर सकता हूँ?', answer: 'हाँ, आप निश्चित राशि डाल सकते हैं या इसे खाली छोड़ सकते हैं।' },
          { question: 'क्या मैं नोट जोड़ सकता हूँ?', answer: 'हाँ, आप "टिप" या "खरीदारी" जैसा नोट जोड़ सकते हैं।' },
          { question: 'क्या यह QR कोड कभी एक्सपायर होता है?', answer: 'नहीं, जब तक आपका Cash App अकाउंट चालू है, यह कोड हमेशा काम करेगा।' },
          { question: 'क्या मैं बीच में अपना लोगो लगा सकता हूँ?', answer: 'हाँ, लोगो लगाने पर सिस्टम एरर करेक्शन को हाई (H) पर सेट कर देगा।' }
        ],
        relatedTools: [
          { name: 'Venmo QR जेनरेटर', slug: 'venmo-qr-code-generator', description: 'Venmo भुगतान QR कोड बनाएं।' },
          { name: 'PayPal QR जेनरेटर', slug: 'paypal-qr-code-generator', description: 'PayPal.Me भुगतान QR कोड बनाएं।' },
          { name: 'Zelle QR कोड', slug: 'zelle-qr-code-generator', description: 'Zelle प्राप्तकर्ता विवरण कोड।' },
          { name: 'वेबसाइट URL QR जेनरेटर', slug: 'url-to-qr-code', description: 'वेबसाइट लिंक को QR कोड में बदलें।' }
        ]
      };
    default: // 'en'
      return {
        slug: 'cash-app-qr-code-generator',
        qrTypeId: 'cash_app',
        title: 'Cash App QR Code Generator — Create Custom $Cashtag Payment QR Codes',
        description: 'Generate custom QR codes for your Cash App $Cashtag or profile page. Support for preset amounts and payment notes. Free vector SVG & PNG export.',
        h1: 'Cash App QR Code Generator',
        subheadline: 'Create custom QR codes that direct customers, clients, and supporters straight to your verified $Cashtag or Cash App payment destination.',
        heading: 'Cash App $Cashtag Payment QR Code',
        subheading: 'Accept instant peer-to-peer transfers, tips, and service fees at retail stalls, pop-ups, events, and livestreams.',
        overviewTitle: 'What is a Cash App QR Code Generator?',
        overviewParagraphs: [
          'A Cash App QR code generator encodes your verified $Cashtag handle or destination profile URL into an optical 2D barcode. When scanned using any smartphone camera or within mobile apps, the scanner immediately launches the Cash App interface with your recipient profile populated and ready for money transfer.',
          'Instead of asking patrons to manually search for your name—which often leads to misspellings and accidental transfers—a display-ready Cash App QR code provides a frictionless 2-second payment gateway at physical points of sale.',
          'Our generator operates completely client-side in your browser for total privacy. Customize your QR code with corporate colors, insert your central store logo, and export print-ready vector SVG files for tabletop acrylic standees or crisp PNGs for digital streams.'
        ],
        sectors: [
          { name: 'Content Creators & Live Streamers', description: 'Displayed on livestream video overlays for fan tips and superchat support.', benefit: 'Direct audience monetization without platform cuts.' },
          { name: 'Food Trucks & Fast Dining', description: 'Mounted beside the pickup counter for rapid customer payment settlement.', benefit: 'Speeds up ordering queues during peak lunch rush.' },
          { name: 'DJs, Bands & Entertainers', description: 'Placed at DJ booths and stage fronts for song requests and tips.', benefit: 'Captures spontaneous tips from cash-free audiences.' },
          { name: 'Retail Pop-Up Boutiques', description: 'Displayed at countertop checkout points for frictionless payments.', benefit: 'Eliminates monthly POS hardware rental fees.' },
          { name: 'Artisan Crafters & Flea Markets', description: 'Printed on craft fair price placards and merchandise tags.', benefit: 'Enables instant impulse purchases without transaction friction.' },
          { name: 'Mobile Service Trades & Mechanics', description: 'Printed on service vehicles and invoices for instant field payment.', benefit: 'Delivers clear, instant peer-to-peer remuneration.' }
        ],
        howItWorks: [
          { title: '1. Enter Your $Cashtag', description: 'Input your handle (e.g. $yourtag or yourtag) or full profile URL.' },
          { title: '2. Set Optional Amount & Note', description: 'Input a suggested payment amount or custom memo for specific merchandise.' },
          { title: '3. Download & Print Everywhere', description: 'Export print-ready Vector SVG for physical signage or high-DPI PNG.' }
        ],
        useCases: [
          { title: 'Countertop Acrylic Displays', description: 'Tabletop stands with clear "Pay with Cash App" call-to-actions.', example: 'Pop-up boutique checkout stand.' },
          { title: 'Waterproof Decals & Stickers', description: 'Laminated vinyl stickers applied to market stall counters.', example: 'Outdoor food truck service window.' },
          { title: 'Live Broadcast Video Overlays', description: 'Displayed on screen during Twitch, YouTube, and TikTok livestreams.', example: 'Independent gaming streamer.' },
          { title: 'Personal Business Cards', description: 'Printed on card backs for immediate client fee settlement.', example: 'Freelance photographer or videographer.' }
        ],
        tips: [
          'Verify $Cashtag Spelling: Double-check your handle carefully to ensure payments land in your verified account.',
          'Keep Amount Flexible: Leave the amount field empty if transactions vary by customer purchase.',
          'High Optical Contrast: Maintain dark modules against a clean white background for rapid scanning.',
          'Weatherproof Materials: Enclose printed outdoor signage in sealed acrylic or laminated vinyl.',
          'Pre-Event Field Test: Scan the printed physical proof with a smartphone camera before public deployment.'
        ],
        technicalNotes: 'Disclaimer: This tool generates QR codes for the destination you provide. Payments are processed by the respective payment service (Cash App).',
        faqs: [
          { question: 'How does a Cash App QR code work when scanned?', answer: 'When scanned with any smartphone camera, the native Cash App or mobile web profile opens with your $Cashtag pre-selected and ready to transfer funds.' },
          { question: 'Does this website process or touch my payments?', answer: 'No. This application is solely an optical QR generator. All money transfers and transactions are processed directly and securely by Cash App.' },
          { question: 'Can I specify a fixed payment amount inside the QR code?', answer: 'Yes! You can specify an exact dollar amount for fixed-price items, or leave it blank so payers can enter their total amount.' },
          { question: 'Can I pre-fill a note or memo for the transaction?', answer: 'Yes! You can encode a default memo like "Tip" or "Invoice #104" into the destination parameters.' },
          { question: 'Do these Cash App QR codes ever expire?', answer: 'No. Static Cash App QR codes encode your profile destination permanently and will work indefinitely as long as your Cash App account is active.' },
          { question: 'What file format should I download for professional printing?', answer: 'For physical acrylic signs, stickers, and banners, we recommend downloading the Vector SVG format for crisp lines at any scale.' }
        ],
        relatedTools: [
          { name: 'Venmo QR Generator', slug: 'venmo-qr-code-generator', description: 'Generate custom QR codes for Venmo.' },
          { name: 'PayPal QR Generator', slug: 'paypal-qr-code-generator', description: 'Generate custom QR codes for PayPal.Me links.' },
          { name: 'Zelle QR Generator', slug: 'zelle-qr-code-generator', description: 'Encode verified Zelle recipient details.' },
          { name: 'URL QR Generator', slug: 'url-to-qr-code', description: 'Convert website links into scannable QR codes.' }
        ]
      };
  }
}
