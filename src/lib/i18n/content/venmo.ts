import type { Locale } from '../config';
import type { LocalizedPageContent } from './types';

export function getVenmoContent(locale: Locale): LocalizedPageContent {
  switch (locale) {
    case 'es':
      return {
        slug: 'venmo-qr-code-generator',
        qrTypeId: 'venmo',
        title: 'Generador de Código QR de Venmo — Pagos y Cobros con Perfil Venmo',
        description: 'Crea códigos QR personalizados para tu perfil o pagos de Venmo. Comparte tu usuario con importe opcional. Descarga en vector SVG y PNG.',
        h1: 'Generador de Código QR de Venmo',
        subheadline: 'Genera códigos QR que dirigen a tus clientes y amigos directamente a tu perfil o destino de pago de Venmo.',
        heading: 'Código QR de Venmo',
        subheading: 'Acepta pagos y propinas sin contacto físico en puestos, eventos, ferias y servicios.',
        overviewTitle: '¿Qué es un Código QR de Venmo?',
        overviewParagraphs: [
          'Un generador de códigos QR de Venmo codifica tu nombre de usuario o enlace de perfil verificado en un código de barras 2D. Al escanearlo con la cámara del smartphone, el dispositivo abre directamente la aplicación de Venmo o su portal web seguro con el destinatario listo para pagar o transferir fondos.',
          'Este generador codifica el destino que indiques de forma precisa y segura. Los pagos son procesados directamente por la plataforma de Venmo, sin intermediarios ni comisiones añadidas por nuestra parte.',
          'Personaliza el código con tus colores corporativos, añade tu logotipo o icono de Venmo y descarga en gráficos vectoriales SVG para carteles impresos o PNG para pantallas.'
        ],
        sectors: [
          { name: 'Puestos en Mercadillos y Pop-Ups', description: 'En el mostrador para cobrar compras rápidas.', benefit: 'Cobro ágil sin necesidad de efectivo ni datáfono.' },
          { name: 'Músicos y Artistas Callejeros', description: 'En estuches de instrumentos y carteles para recibir propinas.', benefit: 'Facilita propinas de quienes no llevan monedas.' },
          { name: 'Camiones de Comida (Food Trucks)', description: 'Junto a la ventanilla de pedidos para acelerar la fila.', benefit: 'Reduce el tiempo de espera de los comensales.' },
          { name: 'Artesanos y Creadores', description: 'En expositores de artesanía y ferias de diseño.', benefit: 'Permite compras impulsivas sin fricción.' },
          { name: 'Profesionales Autónomos y Servicios', description: 'En presupuestos y tarjetas de visita.', benefit: 'Cobro directo y transparente de servicios.' },
          { name: 'Clubes y Actividades Universitarias', description: 'Para cuotas de socios y venta de entradas.', benefit: 'Gestión sencilla de pagos entre jóvenes.' }
        ],
        howItWorks: [
          { title: '1. Introduce tu Usuario de Venmo', description: 'Escribe tu nombre de usuario (ej. @tuusuario) o enlace de perfil.' },
          { title: '2. Define Importe y Nota Opcional', description: 'Puedes fijar una cantidad sugerida o dejarla libre para el pagador.' },
          { title: '3. Descarga e Imprime', description: 'Exporta en SVG vectorial o PNG de alta resolución.' }
        ],
        useCases: [
          { title: 'Expositores de Mostrador', description: 'Soportes de metacrilato con "Paga o da propina con Venmo".', example: 'Puesto de café artesanal.' },
          { title: 'Pegatinas para Puestos', description: 'Adhesivos plastificados resistentes al agua.', example: 'Puesto de flores en mercadillo.' },
          { title: 'Carteles de Conciertos y Eventos', description: 'En el escenario o mesa de merchandising.', example: 'Banda independiente vendiendo camisetas.' },
          { title: 'Tarjetas de Visita', description: 'Con código en el reverso para honorarios directos.', example: 'Profesor particular o diseñador.' }
        ],
        tips: [
          'Verifica el Nombre de Usuario: Asegúrate de que el usuario no tenga errores tipográficos.',
          'Importe Libre: Deja el importe en blanco para que el cliente ingrese el total exacto.',
          'Alto Contraste: Utiliza módulos oscuros sobre fondo claro para facilitar el escaneo.',
          'Soporte Plastificado: Protege los códigos impresos en exteriores de la lluvia y el sol.',
          'Prueba con la Cámara: Escanea el código impreso con tu móvil antes de colocarlo en el mostrador.'
        ],
        technicalNotes: 'Aviso: Esta herramienta genera códigos QR para el destino que proporcionas. Los pagos son procesados por el servicio correspondiente (Venmo).',
        faqs: [
          { question: '¿Cómo funciona el código QR de Venmo al escanearlo?', answer: 'Al escanearlo con la cámara del móvil, el teléfono abre la aplicación de Venmo o el perfil web con el usuario ya seleccionado listo para transferir el dinero.' },
          { question: '¿Esta herramienta procesa los pagos o cobra comisiones?', answer: 'No. Nuestra herramienta solo genera el código QR gráfico. Los pagos son procesados exclusivamente por Venmo bajo sus propios términos y condiciones.' },
          { question: '¿Puedo predefinir un importe específico?', answer: 'Sí, puedes indicar una cantidad fija o dejar el campo vacío para que el cliente introduzca el importe que desee.' },
          { question: '¿Puedo añadir una nota o concepto?', answer: 'Sí, puedes incluir una nota predeterminada como "Propina" o "Pago de compra".' },
          { question: '¿Caducan estos códigos QR?', answer: 'No, los códigos QR estáticos generados son permanentes y funcionarán mientras tu usuario de Venmo siga activo.' },
          { question: '¿Qué formato debo descargar para imprimir en carteles?', answer: 'Te recomendamos descargar el formato vectorial SVG para obtener máxima nitidez a cualquier tamaño de impresión.' }
        ],
        relatedTools: [
          { name: 'QR de PayPal', slug: 'paypal-qr-code-generator', description: 'Crea códigos para pagos por PayPal.Me.' },
          { name: 'QR de Cash App', slug: 'cash-app-qr-code-generator', description: 'Genera códigos con tu $Cashtag.' },
          { name: 'QR de Zelle', slug: 'zelle-qr-code-generator', description: 'Comparte datos de destinatario Zelle.' },
          { name: 'QR de Enlace Web', slug: 'url-to-qr-code', description: 'Convierte enlaces web en códigos QR.' }
        ]
      };
    case 'de':
      return {
        slug: 'venmo-qr-code-generator',
        qrTypeId: 'venmo',
        title: 'Venmo QR Code Generator — Zahlungen & Trinkgeld per Venmo Profil',
        description: 'Erstellen Sie QR-Codes für Ihr Venmo-Profil oder Zahlungsziel. Optional mit Betrag und Verwendungszweck. Kostenloser Vektor-SVG & PNG Download.',
        h1: 'Venmo QR Code Generator',
        subheadline: 'Generieren Sie QR-Codes, die Kunden und Freunde direkt zu Ihrem Venmo-Profil oder Zahlungsziel leiten.',
        heading: 'Venmo Zahlungs-QR-Code',
        subheading: 'Akzeptieren Sie kontaktlose Zahlungen und Trinkgelder auf Märkten, Events und bei Dienstleistungen.',
        overviewTitle: 'Was ist ein Venmo QR Code Generator?',
        overviewParagraphs: [
          'Ein Venmo QR Code Generator wandelt Ihren Benutzernamen oder Profillink in einen scanbaren 2D-Barcode um. Beim Scannen mit der Handykamera öffnet das Smartphone direkt die Venmo-App oder die entsprechende Web-Ansicht mit vorausgewähltem Empfänger.',
          'Dieses Tool erzeugt den grafischen QR-Code für das von Ihnen angegebene Ziel. Die Zahlungsabwicklung erfolgt ausschließlich über den Zahlungsdienstleister Venmo.',
          'Passen Sie Farben an, laden Sie ein Logo hoch und laden Sie druckfertige Vektor-SVG- oder hochauflösende PNG-Dateien herunter.'
        ],
        sectors: [
          { name: 'Marktstände & Pop-up-Stores', description: 'Am Kassenbereich für schnelle bargeldlose Abrechnung.', benefit: 'Zahlung ohne Bargeld oder Kartenterminal.' },
          { name: 'Musiker & Straßenkünstler', description: 'Auf Instrumentenkoffern für digitales Trinkgeld.', benefit: 'Ermöglicht Trinkgeld von bargeldlosen Zuschauern.' },
          { name: 'Food Trucks & Imbisswagen', description: 'An der Bestelltheke zur Beschleunigung der Warteschlange.', benefit: 'Verkürzt Wartezeiten der Kunden.' },
          { name: 'Handwerk & Kreative', description: 'Auf Kunsthandwerker-Märkten und Ausstellungen.', benefit: 'Spontankäufe ohne Zahlungsbarrieren.' },
          { name: 'Freiberufler & Trainer', description: 'Auf Visitenkarten für direkte Honorarabrechnung.', benefit: 'Transparente und schnelle Bezahlung.' },
          { name: 'Studenten & Vereine', description: 'Für Mitgliedsbeiträge und Event-Tickets.', benefit: 'Unkomplizierte Gruppenabrechnung.' }
        ],
        howItWorks: [
          { title: '1. Venmo-Benutzernamen Eingeben', description: 'Tragen Sie Ihren Nutzernamen (z. B. @name) oder Profillink ein.' },
          { title: '2. Betrag & Verwendungszweck Festlegen', description: 'Optional einen festen Betrag oder eine Notiz hinterlegen.' },
          { title: '3. Herunterladen & Drucken', description: 'Als Vektor-SVG für Aufsteller oder PNG exportieren.' }
        ],
        useCases: [
          { title: 'Thekenaufsteller', description: 'Acrylaufsteller mit "Hier mit Venmo zahlen".', example: 'Kaffeestand auf dem Wochenmarkt.' },
          { title: 'Wetterfeste Aufkleber', description: 'Plastifizierte Sticker für Marktstände.', example: 'Blumenstand im Freien.' },
          { title: 'Konzertplakate', description: 'Am Merchandise-Tisch für Album- und T-Shirt-Verkäufe.', example: 'Band auf Konzerttour.' },
          { title: 'Visitenkarten', description: 'Mit Code auf der Rückseite für Dienstleistungen.', example: 'Privatlehrer oder Berater.' }
        ],
        tips: [
          'Benutzernamen Prüfen: Achten Sie genau auf Tippfehler im Nutzernamen.',
          'Betrag Flexibel Halten: Betragsfeld leer lassen, damit Kunden frei wählen können.',
          'Hoher Kontrast: Dunkles Muster auf weißem Grund für optimales Scannen.',
          'Wetterfester Druck: Aufkleber für Außenbereiche laminieren.',
          'Testscan: Vor dem Drucken mit der Smartphone-Kamera testen.'
        ],
        technicalNotes: 'Hinweis: Dieses Tool generiert QR-Codes für das von Ihnen angegebene Ziel. Die Zahlungsabwicklung erfolgt durch den jeweiligen Zahlungsdienstleister (Venmo).',
        faqs: [
          { question: 'Wie funktioniert der Venmo QR-Code beim Scannen?', answer: 'Beim Scannen mit der Handykamera öffnet sich die Venmo-App oder Website mit Ihrem Profil vorausgewählt zur Zahlung.' },
          { question: 'Verarbeitet diese Seite Zahlungen?', answer: 'Nein, diese Anwendung erzeugt lediglich den QR-Code. Alle Zahlungen werden von Venmo verarbeitet.' },
          { question: 'Kann ich einen festen Betrag vorgeben?', answer: 'Ja, Sie können einen Betrag vorgeben oder das Feld leer lassen.' },
          { question: 'Kann ich einen Verwendungszweck hinzufügen?', answer: 'Ja, Sie können eine optionale Notiz wie "Trinkgeld" oder "Einkauf" hinterlegen.' },
          { question: 'Laufen diese QR-Codes ab?', answer: 'Nein, die statischen Codes sind dauerhaft gültig, solange Ihr Venmo-Konto aktiv ist.' },
          { question: 'Welches Dateiformat eignet sich für den Druck?', answer: 'Für den Druck auf Schildern und Aufstellern empfehlen wir Vektor-SVG.' }
        ],
        relatedTools: [
          { name: 'PayPal QR Generator', slug: 'paypal-qr-code-generator', description: 'QR-Codes für PayPal.Me erstellen.' },
          { name: 'Cash App QR Code', slug: 'cash-app-qr-code-generator', description: 'Codes für $Cashtag erstellen.' },
          { name: 'Zelle QR Code', slug: 'zelle-qr-code-generator', description: 'Zelle Empfänger-Codes generieren.' },
          { name: 'Weblink QR Generator', slug: 'url-to-qr-code', description: 'Webseiten in QR-Codes umwandeln.' }
        ]
      };
    case 'fr':
      return {
        slug: 'venmo-qr-code-generator',
        qrTypeId: 'venmo',
        title: 'Générateur de QR Code Venmo — Paiements et Profil Venmo',
        description: 'Créez des QR codes pour votre profil ou paiement Venmo. Partagez votre identifiant avec montant optionnel. Téléchargement SVG et PNG.',
        h1: 'Générateur de QR Code Venmo',
        subheadline: 'Générez des QR codes redirigeant vos clients vers votre profil ou destination de paiement Venmo.',
        heading: 'QR Code de Paiement Venmo',
        subheading: 'Acceptez les paiements sans contact et les pourboires lors de marchés, événements et prestations.',
        overviewTitle: 'Qu\'est-ce qu\'un QR Code Venmo ?',
        overviewParagraphs: [
          'Un générateur de QR code Venmo encode votre nom d\'utilisateur ou lien de profil dans un code 2D. En scannant le code avec l\'appareil photo d\'un smartphone, l\'utilisateur ouvre directement l\'application Venmo ou le profil web pour effectuer son paiement.',
          'Cet outil génère le QR code correspondant à la destination indiquée. Les paiements sont traités par le service Venmo sous ses propres conditions.',
          'Personnalisez les couleurs, intégrez votre logo et téléchargez en format vectoriel SVG pour l\'imprimerie ou PNG haute définition.'
        ],
        sectors: [
          { name: 'Marchés & Boutiques Éphémères', description: 'Au comptoir pour des encaissements rapides.', benefit: 'Paiement simple sans terminal bancaire.' },
          { name: 'Musiciens & Artistes de Rue', description: 'Sur les étuis d\'instruments pour recevoir des pourboires.', benefit: 'Facilite les dons des spectateurs sans monnaie.' },
          { name: 'Food Trucks & Restauration Rapide', description: 'Près du guichet de commande.', benefit: 'Fluidifie les files d\'attente.' },
          { name: 'Artisans & Créateurs', description: 'Sur les stands de créateurs et salons.', benefit: 'Encourage les achats spontanés.' },
          { name: 'Indépendants & Formateurs', description: 'Sur cartes de visite pour règlement d\'honoraires.', benefit: 'Encaissement direct et transparent.' },
          { name: 'Associations & Étudiants', description: 'Pour les cotisations et entrées d\'événements.', benefit: 'Gestion facile des paiements de groupe.' }
        ],
        howItWorks: [
          { title: '1. Saisissez votre Identifiant Venmo', description: 'Indiquez votre nom d\'utilisateur (ex. @nom) ou lien de profil.' },
          { title: '2. Montant et Note Optionnels', description: 'Précisez un montant suggéré ou laissez le champ libre.' },
          { title: '3. Téléchargez et Imprimez', description: 'Exportez en SVG vectoriel ou PNG.' }
        ],
        useCases: [
          { title: 'Chevalets de Comptoir', description: 'Support en plexiglas avec "Payez avec Venmo".', example: 'Stand de café artisanal.' },
          { title: 'Stickers Résistants', description: 'Adhésifs plastifiés pour extérieur.', example: 'Étal de marché.' },
          { title: 'Affiches de Concerts', description: 'Sur la table de merchandising de tournée.', example: 'Groupe de musique indépendant.' },
          { title: 'Cartes de Visite', description: 'Avec le code au verso pour prestations de service.', example: 'Professeur particulier.' }
        ],
        tips: [
          'Vérifiez l\'Identifiant : Assurez-vous de l\'orthographe exacte du nom d\'utilisateur.',
          'Montant Libre : Laissez le champ vide pour laisser le client indiquer la somme.',
          'Contraste Net : Points sombres sur fond clair pour un scan fluide.',
          'Protection Extérieure : Plastifiez vos impressions pour stands extérieurs.',
          'Test Préalable : Scannez le code avec un smartphone avant diffusion.'
        ],
        technicalNotes: 'Avertissement : Cet outil génère des QR codes pour la destination fournie. Les paiements sont traités par le service de paiement concerné (Venmo).',
        faqs: [
          { question: 'Comment fonctionne le QR code Venmo au scan ?', answer: 'Au scan avec l\'appareil photo, le smartphone ouvre l\'application Venmo ou la page web avec votre profil sélectionné prêt à payer.' },
          { question: 'Ce site traite-t-il les paiements ?', answer: 'Non, cet outil génère uniquement le QR code visuel. Les transactions sont gérées par Venmo.' },
          { question: 'Puis-je définir un montant prédéfini ?', answer: 'Oui, vous pouvez renseigner un montant fixe ou laisser le champ libre.' },
          { question: 'Puis-je ajouter une note ou un motif ?', answer: 'Oui, vous pouvez insérer un mémo comme "Pourboire" ou "Achat".' },
          { question: 'Ces QR codes expirent-ils ?', answer: 'Non, les codes statiques sont permanents tant que votre compte Venmo existe.' },
          { question: 'Quel format choisir pour l\'impression ?', answer: 'Le format vectoriel SVG est recommandé pour une netteté optimale sur tout support imprimé.' }
        ],
        relatedTools: [
          { name: 'QR Code PayPal', slug: 'paypal-qr-code-generator', description: 'Codes pour paiements PayPal.Me.' },
          { name: 'QR Code Cash App', slug: 'cash-app-qr-code-generator', description: 'Codes pour $Cashtag.' },
          { name: 'QR Code Zelle', slug: 'zelle-qr-code-generator', description: 'Codes destinataire Zelle.' },
          { name: 'QR Code Lien Web', slug: 'url-to-qr-code', description: 'Convertissez des URL en QR codes.' }
        ]
      };
    case 'pt':
      return {
        slug: 'venmo-qr-code-generator',
        qrTypeId: 'venmo',
        title: 'Gerador de QR Code do Venmo — Pagamentos e Perfil Venmo',
        description: 'Crie QR Codes para seu perfil ou destino de pagamento do Venmo. Compartilhe com valor opcional. Download em SVG e PNG.',
        h1: 'Gerador de QR Code do Venmo',
        subheadline: 'Gere QR Codes que direcionam clientes e amigos diretamente para seu perfil ou pagamento no Venmo.',
        heading: 'QR Code de Pagamento Venmo',
        subheading: 'Receba pagamentos sem contato e gorjetas em feiras, eventos e serviços.',
        overviewTitle: 'O que é um QR Code do Venmo?',
        overviewParagraphs: [
          'Um gerador de QR Code do Venmo codifica seu nome de usuário ou link de perfil em um código 2D. Ao escanear, o celular abre o aplicativo do Venmo ou página web com o destinatário pronto para transferência.',
          'Esta ferramenta gera o código gráfico para o destino informado. O processamento dos pagamentos é realizado exclusivamente pelo serviço do Venmo.',
          'Personalize cores, insira seu logotipo e baixe em SVG vetorial para impressão ou PNG em alta definição.'
        ],
        sectors: [
          { name: 'Feiras & Lojas Pop-Up', description: 'No balcão para cobranças rápidas.', benefit: 'Vendas ágeis sem maquininha de cartão.' },
          { name: 'Músicos & Artistas de Rua', description: 'No estojo de instrumentos para receber gorjetas.', benefit: 'Facilita doações de quem não usa dinheiro físico.' },
          { name: 'Food Trucks & Lanches', description: 'Próximo ao caixa para agilizar o atendimento.', benefit: 'Reduz filas no horário de pico.' },
          { name: 'Artesãos & Feirantes', description: 'Em estandes de produtos artesanais.', benefit: 'Estimula compras por impulso.' },
          { name: 'Autônomos & Prestadores', description: 'Em orçamentos e cartões para honorários.', benefit: 'Recebimento direto e transparente.' },
          { name: 'Estudantes & Grupos', description: 'Para rateio de despesas e eventos.', benefit: 'Organização simples de pagamentos.' }
        ],
        howItWorks: [
          { title: '1. Digite seu Usuário do Venmo', description: 'Insira seu nome de usuário (ex.: @usuario) ou link.' },
          { title: '2. Defina Valor e Mensagem Opcional', description: 'Especifique um valor sugerido ou deixe em branco.' },
          { title: '3. Baixe e Divulgue', description: 'Exporte em SVG vetorial para placas ou PNG.' }
        ],
        useCases: [
          { title: 'Displays de Balcão', description: 'Acrílico com "Pague ou dê gorjeta via Venmo".', example: 'Café artesanal em feira.' },
          { title: 'Adesivos Resistentes', description: 'Adesivos plastificados para balcões.', example: 'Banca de flores.' },
          { title: 'Cartazes de Shows', description: 'Na mesa de venda de camisetas da banda.', example: 'Show independente.' },
          { title: 'Cartões de Visita', description: 'Com código no verso para pagamentos rápidos.', example: 'Instrutor particular.' }
        ],
        tips: [
          'Confira o Usuário: Verifique se não há erros de digitação no nome.',
          'Valor Livre: Deixe o campo de valor vazio para o cliente digitar.',
          'Alto Contraste: Fundo branco facilita a leitura sob qualquer luz.',
          'Material Durável: Plastifique impressos para uso externo.',
          'Teste no Celular: Escaneie o impresso com seu celular antes do evento.'
        ],
        technicalNotes: 'Aviso: Esta ferramenta gera códigos QR para o destino informado. Os pagamentos são processados pelo respectivo serviço (Venmo).',
        faqs: [
          { question: 'Como o QR Code do Venmo funciona ao escanear?', answer: 'Ao escanear com a câmera, o celular abre o aplicativo ou perfil do Venmo com o destinatário pronto para efetuar o pagamento.' },
          { question: 'Esta ferramenta processa pagamentos?', answer: 'Não, nossa ferramenta gera apenas o código visual. Todas as transações ocorrem dentro do Venmo.' },
          { question: 'Posso definir um valor fixo?', answer: 'Sim, você pode predefinir um valor ou deixar o campo aberto.' },
          { question: 'Posso colocar uma mensagem de cobrança?', answer: 'Sim, você pode incluir um recado como "Gorjeta" ou "Compra".' },
          { question: 'Os códigos expiram?', answer: 'Não, os códigos estáticos funcionam permanentemente enquanto sua conta estiver ativa.' },
          { question: 'Qual formato baixar para impressão?', answer: 'O formato SVG vetorial é ideal para impressões nítidas em qualquer tamanho.' }
        ],
        relatedTools: [
          { name: 'QR Code PayPal', slug: 'paypal-qr-code-generator', description: 'Códigos para links PayPal.Me.' },
          { name: 'QR Code Cash App', slug: 'cash-app-qr-code-generator', description: 'Códigos para $Cashtag.' },
          { name: 'QR Code Zelle', slug: 'zelle-qr-code-generator', description: 'Códigos de destinatário Zelle.' },
          { name: 'QR Code Link URL', slug: 'url-to-qr-code', description: 'Converta links em QR codes.' }
        ]
      };
    case 'it':
      return {
        slug: 'venmo-qr-code-generator',
        qrTypeId: 'venmo',
        title: 'Generatore QR Code Venmo — Pagamenti e Profilo Venmo',
        description: 'Crea codici QR per il tuo profilo o destinazione di pagamento Venmo. Condividi con importo opzionale. Download gratuito in SVG e PNG.',
        h1: 'Generatore QR Code Venmo',
        subheadline: 'Genera codici QR per indirizzare clienti e amici direttamente al tuo profilo o pagamento su Venmo.',
        heading: 'QR Code di Pagamento Venmo',
        subheading: 'Accetta pagamenti contactless e mance in mercati, eventi e servizi.',
        overviewTitle: 'Cos\'è un QR Code Venmo?',
        overviewParagraphs: [
          'Un generatore di codici QR Venmo codifica il tuo nome utente o link del profilo in un codice 2D. Inquadrando il codice con la fotocamera, lo smartphone apre l\'app Venmo o la pagina web con il destinatario già selezionato per il pagamento.',
          'Questo strumento genera il codice grafico per la destinazione indicata. I pagamenti sono elaborati esclusivamente dalla piattaforma Venmo.',
          'Personalizza i colori, inserisci il tuo logo e scarica in formato vettoriale SVG per la stampa o PNG ad alta risoluzione.'
        ],
        sectors: [
          { name: 'Mercatini & Negozi Temporanei', description: 'Sul bancone per incassi rapidi.', benefit: 'Vendite veloci senza pos né contanti.' },
          { name: 'Musicisti & Artisti di Strada', description: 'Sulle custodie di strumenti per ricevere mance.', benefit: 'Facilita le offerte da parte del pubblico.' },
          { name: 'Food Truck & Ristorazione Mobile', description: 'Accanto alla cassa per velocizzare gli ordini.', benefit: 'Riduce i tempi di attesa in fila.' },
          { name: 'Artigiani & Designer', description: 'Negli stand fieristici e mostre mercato.', benefit: 'Incentiva gli acquisti d\'impulso.' },
          { name: 'Liberi Professionisti', description: 'Sui preventivi e biglietti da visita per onorari.', benefit: 'Incassi diretti e trasparenti.' },
          { name: 'Studenti & Associazioni', description: 'Per quote associative e biglietti di feste.', benefit: 'Gestione ordinata dei pagamenti di gruppo.' }
        ],
        howItWorks: [
          { title: '1. Inserisci il Tuo Username Venmo', description: 'Digita il tuo nome utente (es. @username) o link del profilo.' },
          { title: '2. Imposta Importo e Nota Opzionale', description: 'Indica un importo suggerito o lascia il campo vuoto.' },
          { title: '3. Scarica e Stampa', description: 'Esporta in SVG vettoriale per espositori o PNG.' }
        ],
        useCases: [
          { title: 'Espositori da Bancone', description: 'Supporto in plexiglas con "Paga con Venmo".', example: 'Chiosco di caffè artigianale.' },
          { title: 'Adesivi Plastificati', description: 'Adesivi resistenti all\'acqua per banchi esterni.', example: 'Banco di fiori al mercato.' },
          { title: 'Cartelli per Concerti', description: 'Al tavolo del merchandising della band.', example: 'Gruppo musicale in tour.' },
          { title: 'Biglietti da Visita', description: 'Con codice sul retro per consulenze.', example: 'Insegnante privato.' }
        ],
        tips: [
          'Verifica lo Username: Controlla che il nome utente non contenga errori.',
          'Importo Libero: Lascia vuoto il campo per far inserire l\'importo all\'utente.',
          'Contrasto Elevato: Sfondo bianco per una scansione immediata.',
          'Supporti Protetti: Plastifica i cartelli destinati all\'aperto.',
          'Test da Smartphone: Scansiona il cartello prima dell\'evento.'
        ],
        technicalNotes: 'Avviso: Questo strumento genera codici QR per la destinazione fornita. I pagamenti sono elaborati dal rispettivo servizio di pagamento (Venmo).',
        faqs: [
          { question: 'Come funziona il codice QR Venmo alla scansione?', answer: 'Inquadrando il codice con la fotocamera, lo smartphone apre l\'app Venmo o il profilo web con il destinatario già impostato per il trasferimento.' },
          { question: 'Questo strumento elabora i pagamenti?', answer: 'No, questo sito genera solo il codice grafico. Tutte le transazioni avvengono all\'interno di Venmo.' },
          { question: 'Posso impostare un importo fisso?', answer: 'Sì, puoi preimpostare una cifra o lasciare il campo aperto.' },
          { question: 'Posso aggiungere una causale di pagamento?', answer: 'Sì, puoi specificare una nota come "Mancia" o "Acquisto".' },
          { question: 'Questi codici QR scadono?', answer: 'No, i codici statici restano validi per sempre finché il tuo account è attivo.' },
          { question: 'Quale formato scegliere per la stampa?', answer: 'Consigliamo il formato vettoriale SVG per la massima nitidezza tipografica.' }
        ],
        relatedTools: [
          { name: 'QR Code PayPal', slug: 'paypal-qr-code-generator', description: 'Codici per pagamenti PayPal.Me.' },
          { name: 'QR Code Cash App', slug: 'cash-app-qr-code-generator', description: 'Codici per $Cashtag.' },
          { name: 'QR Code Zelle', slug: 'zelle-qr-code-generator', description: 'Codici destinatario Zelle.' },
          { name: 'QR Code Link Web', slug: 'url-to-qr-code', description: 'Converti indirizzi web in QR code.' }
        ]
      };
    case 'hi':
      return {
        slug: 'venmo-qr-code-generator',
        qrTypeId: 'venmo',
        title: 'Venmo QR कोड जेनरेटर — Venmo प्रोफ़ाइल और भुगतान QR कोड',
        description: 'अपने Venmo प्रोफ़ाइल और भुगतान लिंक के लिए कस्टम QR कोड बनाएं। राशि और नोट के साथ। वेक्टर SVG और PNG मुफ़्त डाउनलोड।',
        h1: 'Venmo QR कोड जेनरेटर',
        subheadline: 'ग्राहकों और दोस्तों को सीधे आपके Venmo प्रोफ़ाइल या भुगतान गंतव्य पर भेजने के लिए QR कोड बनाएं।',
        heading: 'Venmo भुगतान QR कोड',
        subheading: 'दुकानों, कार्यक्रमों और सेवाओं में संपर्क रहित भुगतान व टिप प्राप्त करें।',
        overviewTitle: 'Venmo QR कोड क्या है?',
        overviewParagraphs: [
          'Venmo QR कोड आपके Venmo यूजरनेम या प्रोफाइल लिंक को 2D बारकोड में बदल देता है। जब कोई इसे फोन कैमरे से स्कैन करता है, तो मोबाइल में Venmo ऐप या वेब पेज खुल जाता है और प्राप्तकर्ता का नाम पहले से भरा हुआ मिलता है।',
          'यह टूल आपके द्वारा दर्ज किए गए गंतव्य के लिए QR कोड तैयार करता है। भुगतान प्रक्रिया सीधे संबंधित भुगतान सेवा (Venmo) द्वारा पूरी की जाती है।',
          'काउंटर स्टैंड और बोर्ड के लिए वेक्टर SVG और PNG मुफ़्त डाउनलोड करें।'
        ],
        sectors: [
          { name: 'मार्केट स्टॉल व पॉप-अप दुकानें', description: 'कैश काउंटर पर बिना छुट्टे पैसों के तुरंत भुगतान के लिए।', benefit: 'बिना कार्ड मशीन के आसान डिजिटल पेमेंट।' },
          { name: 'संगीतकार व सड़क कलाकार', description: 'डिजिटल टिप प्राप्त करने हेतु इंस्ट्रूमेंट बॉक्स पर।', benefit: 'खुले पैसे न होने पर भी टिप की सुविधा।' },
          { name: 'फूड ट्रक्स व स्ट्रीट वेंडर', description: 'ऑर्डर खिड़की पर भीड़ को नियंत्रित करने हेतु।', benefit: 'ग्राहकों का प्रतीक्षा समय घटाता है।' },
          { name: 'हस्तशिल्प व कारीगर', description: 'प्रदर्शनी और मेलों में बिक्री बढ़ाने हेतु।', benefit: 'खरीदारी को आसान बनाता है।' },
          { name: 'फ्रीलांसर्स व कंसल्टेंट्स', description: 'विज़िटिंग कार्ड पर फीस मंगाने के लिए।', benefit: 'सीधा और पारदर्शी भुगतान।' },
          { name: 'छात्र व सामाजिक समूह', description: 'इवेंट टिकट और ग्रुप खर्च बांटने हेतु।', benefit: 'ग्रुप पेमेंट का सरल समाधान।' }
        ],
        howItWorks: [
          { title: '1. अपना Venmo यूजरनेम दर्ज करें', description: 'अपना यूजरनेम (जैसे @username) या प्रोफाइल लिंक लिखें।' },
          { title: '2. राशि व नोट सेट करें (वैकल्पिक)', description: 'यदि निश्चित रकम लेनी हो तो राशि दर्ज करें या खाली छोड़ें।' },
          { title: '3. डाउनलोड व प्रिंट करें', description: 'वेक्टर SVG या हाई-रिज़ॉल्यूशन PNG डाउनलोड करें।' }
        ],
        useCases: [
          { title: 'काउंटर स्टैंडी', description: '"Venmo से भुगतान करें" लिखा हुआ स्टैंड।', example: 'कॉफी स्टॉल काउंटर स्टैंड।' },
          { title: 'वॉटरप्रूफ स्टिकर्स', description: 'बाहरी दुकानों के लिए लेमिनेटेड स्टिकर।', example: 'फूलों की दुकान।' },
          { title: 'संगीत शो बैनर्स', description: 'मर्चेंडाइज काउंटर पर लगा पोस्टर।', example: 'बैंड टूर कॉन्सर्ट।' },
          { title: 'विज़िटिंग कार्ड्स', description: 'कार्ड के पीछे डिजिटल भुगतान कोड।', example: 'प्राइवेट ट्यूटर कार्ड।' }
        ],
        tips: [
          'यूजरनेम जांचें: स्पेलिंग में कोई गलती न हो।',
          'राशि खाली छोड़ें: ग्राहकों को अपनी इच्छानुसार रकम भरने की छूट दें।',
          'हाई कंट्रास्ट: सफ़ेद बैकग्राउंड पर गहरे डॉट्स रखें।',
          'वॉटरप्रूफ प्रिंट: बाहर लगाने के लिए स्टिकर लेमिनेट कराएं।',
          'प्रिंट से पहले जांच: फोन कैमरे से स्कैन करके चेक करें।'
        ],
        technicalNotes: 'सूचना: यह टूल आपके द्वारा दिए गए गंतव्य के लिए QR कोड बनाता है। भुगतान का निपटारा संबंधित भुगतान सेवा (Venmo) द्वारा किया जाता है।',
        faqs: [
          { question: 'स्कैन करने पर Venmo QR कोड कैसे काम करता है?', answer: 'कैमरे से स्कैन करते ही मोबाइल में Venmo ऐप या वेब प्रोफाइल खुल जाती है जिसमें प्राप्तकर्ता तैयार मिलता है।' },
          { question: 'क्या यह वेबसाइट भुगतान प्रोसेस करती है?', answer: 'नहीं, यह टूल केवल विज़ुअल QR कोड बनाता है। सभी भुगतान सीधे Venmo द्वारा सुरक्षित रूप से प्रोसेस किए जाते हैं।' },
          { question: 'क्या मैं निश्चित राशि तय कर सकता हूँ?', answer: 'हाँ, आप निश्चित राशि डाल सकते हैं या इसे खाली छोड़ सकते हैं।' },
          { question: 'क्या मैं नोट या संदेश जोड़ सकता हूँ?', answer: 'हाँ, आप "टिप" या "खरीदारी" जैसा नोट जोड़ सकते हैं।' },
          { question: 'क्या यह QR कोड कभी एक्सपायर होता है?', answer: 'नहीं, जब तक आपका Venmo अकाउंट चालू है, यह कोड हमेशा काम करेगा।' },
          { question: 'प्रिंटिंग के लिए कौन सा फ़ाइल फॉर्मेट बेहतर है?', answer: 'साफ़ और बड़े प्रिंट के लिए वेक्टर SVG सबसे अच्छा है।' }
        ],
        relatedTools: [
          { name: 'PayPal QR जेनरेटर', slug: 'paypal-qr-code-generator', description: 'PayPal.Me भुगतान QR कोड बनाएं।' },
          { name: 'Cash App QR जेनरेटर', slug: 'cash-app-qr-code-generator', description: '$Cashtag QR कोड बनाएं।' },
          { name: 'Zelle QR कोड', slug: 'zelle-qr-code-generator', description: 'Zelle प्राप्तकर्ता विवरण कोड।' },
          { name: 'वेबसाइट URL QR जेनरेटर', slug: 'url-to-qr-code', description: 'वेबसाइट लिंक को QR कोड में बदलें।' }
        ]
      };
    default: // 'en'
      return {
        slug: 'venmo-qr-code-generator',
        qrTypeId: 'venmo',
        title: 'Venmo QR Code Generator — Create Custom Venmo Payment QR Codes',
        description: 'Generate custom QR codes for your Venmo profile or payment destination. Support for usernames, preset amounts, and notes. Free vector SVG & PNG export.',
        h1: 'Venmo QR Code Generator',
        subheadline: 'Create custom QR codes that direct customers, clients, and supporters straight to your verified Venmo profile or payment destination.',
        heading: 'Venmo Payment & Profile QR Code',
        subheading: 'Accept touch-free peer-to-peer payments, tips, and service fees at retail stalls, pop-ups, events, and studios.',
        overviewTitle: 'What is a Venmo QR Code Generator?',
        overviewParagraphs: [
          'A Venmo QR code generator encodes your verified Venmo username or profile destination URL into an optical 2D barcode. When scanned using any smartphone camera or within the native mobile app, the scanner immediately launches the Venmo interface with your payee handle populated and ready for money transfer.',
          'Instead of asking patrons to manually search for your name—which often leads to misspellings and sent-to-the-wrong-person errors—a display-ready Venmo QR code provides a frictionless 2-second payment gateway at physical points of sale.',
          'Our generator operates completely client-side in your browser for total privacy. Customize your QR code with corporate colors, insert your central store logo, and export print-ready vector SVG files for tabletop acrylic standees or crisp PNGs for digital menus.'
        ],
        sectors: [
          { name: 'Farmers Markets & Pop-Up Shops', description: 'Mounted on tabletop displays for rapid checkout without card readers.', benefit: 'Eliminates bulky hardware and transaction equipment fees.' },
          { name: 'Street Performers & Touring Musicians', description: 'Printed on tip jars and guitar cases for cash-free tipping.', benefit: 'Captures tips from audiences who no longer carry paper bills.' },
          { name: 'Food Trucks & Mobile Vendors', description: 'Placed beside the order pickup window to keep order lines moving.', benefit: 'Speeds up customer checkout during lunch rushes.' },
          { name: 'Artisan Crafters & Makers', description: 'Printed on product hangtags and craft fair table tents.', benefit: 'Enables instant impulse purchases without transaction friction.' },
          { name: 'Freelancers & Private Instructors', description: 'Printed on invoice footers and client intake sheets for direct fee settlement.', benefit: 'Delivers clear, instant peer-to-peer remuneration.' },
          { name: 'Clubs, Fraternities & Campus Events', description: 'Used on posters for group dues collection and fundraising drives.', benefit: 'Streamlines student group financial management.' }
        ],
        howItWorks: [
          { title: '1. Enter Venmo Username', description: 'Input your Venmo handle (e.g. @yourname or yourname) or full profile URL.' },
          { title: '2. Set Optional Amount & Note', description: 'Input a suggested payment amount or custom memo for specific merchandise.' },
          { title: '3. Download & Print Everywhere', description: 'Export print-ready Vector SVG for physical signage or high-DPI PNG.' }
        ],
        useCases: [
          { title: 'Countertop Acrylic Displays', description: 'Tabletop stands with clear "Pay or Tip with Venmo" call-to-actions.', example: 'Artisanal coffee cart checkout stand.' },
          { title: 'Waterproof Decals & Stickers', description: 'Laminated vinyl stickers applied to market stall counters.', example: 'Outdoor floral arrangement stand.' },
          { title: 'Concert & Tour Posters', description: 'Placed on merchandise tables for album and shirt purchases.', example: 'Indie rock band on regional tour.' },
          { title: 'Personal Business Cards', description: 'Printed on card backs for immediate client fee settlement.', example: 'Private math tutor or music teacher.' }
        ],
        tips: [
          'Verify Username Spelling: Double-check your handle carefully to ensure payments land in your verified account.',
          'Keep Amount Flexible: Leave the amount field empty if transactions vary by customer purchase.',
          'High Optical Contrast: Maintain dark modules against a clean white background for rapid scanning.',
          'Weatherproof Materials: Enclose printed outdoor signage in sealed acrylic or laminated vinyl.',
          'Pre-Event Field Test: Scan the printed physical proof with a smartphone camera before public deployment.'
        ],
        technicalNotes: 'Disclaimer: This tool generates QR codes for the destination you provide. Payments are processed by the respective payment service (Venmo).',
        faqs: [
          { question: 'How does a Venmo QR code work when scanned?', answer: 'When scanned with any smartphone camera, the native Venmo app or mobile web profile opens with your recipient account pre-selected and ready to transfer funds.' },
          { question: 'Does this website process or touch my payments?', answer: 'No. This application is solely an optical QR generator. All money transfers and transactions are processed directly and securely by Venmo.' },
          { question: 'Can I specify a fixed payment amount inside the QR code?', answer: 'Yes! You can specify an exact dollar amount for fixed-price items, or leave it blank so payers can enter their total amount.' },
          { question: 'Can I pre-fill a note or memo for the transaction?', answer: 'Yes! You can encode a default memo like "Tip" or "Invoice #104" into the destination parameters.' },
          { question: 'Do these Venmo QR codes ever expire?', answer: 'No. Static Venmo QR codes encode your profile destination permanently and will work indefinitely as long as your Venmo account is active.' },
          { question: 'What file format should I download for professional printing?', answer: 'For physical acrylic signs, stickers, and banners, we recommend downloading the Vector SVG format for crisp lines at any scale.' }
        ],
        relatedTools: [
          { name: 'PayPal QR Generator', slug: 'paypal-qr-code-generator', description: 'Generate custom QR codes for PayPal.Me links.' },
          { name: 'Cash App QR Generator', slug: 'cash-app-qr-code-generator', description: 'Create scannable QR codes for your $Cashtag.' },
          { name: 'Zelle QR Generator', slug: 'zelle-qr-code-generator', description: 'Encode verified Zelle recipient details.' },
          { name: 'URL QR Generator', slug: 'url-to-qr-code', description: 'Convert website links into scannable QR codes.' }
        ]
      };
  }
}
