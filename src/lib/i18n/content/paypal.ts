import type { Locale } from '../config';
import type { LocalizedPageContent } from './types';

export function getPayPalContent(locale: Locale): LocalizedPageContent {
  switch (locale) {
    case 'es':
      return {
        slug: 'paypal-qr-code-generator',
        qrTypeId: 'paypal',
        title: 'Generador de Código QR de PayPal — Enlace de Pago PayPal.Me',
        description: 'Crea códigos QR personalizados para tu enlace de pago PayPal.Me o URL de PayPal. Moneda e importe opcional. Descarga en vector SVG y PNG.',
        h1: 'Generador de Código QR de PayPal',
        subheadline: 'Genera códigos QR que dirigen a tus clientes y compradores directamente a tu enlace de pago o perfil de PayPal.',
        heading: 'Código QR de PayPal',
        subheading: 'Acepta pagos internacionales y locales de forma segura con el estándar PayPal.Me.',
        overviewTitle: '¿Qué es un Código QR de PayPal?',
        overviewParagraphs: [
          'Un generador de códigos QR de PayPal codifica tu enlace personalizado PayPal.Me o URL de pago seguro en un código de barras 2D. Al enfocar el código con cualquier cámara móvil, el comprador es dirigido a la pasarela de PayPal con el importe y la divisa preconfigurados para pagar con cuenta PayPal, tarjeta o saldo.',
          'Esta herramienta genera el código QR para el destino que indiques. Los pagos son procesados directamente por la plataforma de PayPal sin intermediarios.',
          'Personaliza colores, añade el logotipo de tu marca y descarga en formato vectorial SVG para imprenta o PNG para medios digitales.'
        ],
        sectors: [
          { name: 'Tiendas Físicas y Comercios', description: 'En el mostrador junto a la caja para cobros sin contacto.', benefit: 'Acepta pagos con saldo PayPal y tarjetas internacionales.' },
          { name: 'Venta Online y Redes Sociales', description: 'En catálogos impresos y transmisiones en vivo.', benefit: 'Convierte espectadores en compradores directos.' },
          { name: 'Diseñadores y Consultores Freelance', description: 'En presupuestos y facturas para cobro de proyectos.', benefit: 'Cobros seguros en múltiples divisas.' },
          { name: 'ONGs y Proyectos Benéficos', description: 'En folletos de recaudación de fondos y eventos solidarios.', benefit: 'Recibe donaciones internacionales con facilidad.' },
          { name: 'Hostelería y Terrazas', description: 'En mesas y cartas para pago directo de consumiciones.', benefit: 'Agiliza la rotación de mesas.' },
          { name: 'Ferias y Mercados de Arte', description: 'En expositores para compra de obras y artesanía.', benefit: 'Acepta pagos sin datáfono físico.' }
        ],
        howItWorks: [
          { title: '1. Introduce tu Enlace PayPal.Me o URL', description: 'Escribe tu usuario de PayPal.Me (ej. tunombre) o enlace completo.' },
          { title: '2. Selecciona Importe y Divisa', description: 'Opcionalmente fija una cantidad y divisa (USD, EUR, GBP, etc.).' },
          { title: '3. Descarga e Imprime', description: 'Exporta en SVG vectorial para imprenta o PNG de alta resolución.' }
        ],
        useCases: [
          { title: 'Expositores de Mostrador', description: 'Soportes de metacrilato en punto de venta con "Paga con PayPal".', example: 'Boutique de ropa aceptando PayPal.' },
          { title: 'Facturas Impresas y Albaranes', description: 'Al pie del documento para facilitar transferencias.', example: 'Agencia de marketing freelance.' },
          { title: 'Catálogos de Productos', description: 'Junto a cada producto con importe preconfigurado.', example: 'Catálogo de venta por correo.' },
          { title: 'Carteles para Recaudación de Fondos', description: 'En eventos benéficos para aportaciones voluntarias.', example: 'Refugio de animales recibiendo donaciones.' }
        ],
        tips: [
          'Enlace PayPal.Me Activo: Comprueba que tu enlace PayPal.Me esté habilitado en tu cuenta.',
          'Selecciona la Divisa Adecuada: Elige la moneda principal de tus clientes (EUR, USD, GBP, etc.).',
          'Alto Contraste: Mantén módulos oscuros sobre fondo blanco para facilitar la lectura.',
          'Formato SVG para Imprenta: Utiliza SVG vectorial para cartelería y packaging.',
          'Prueba Previa: Escanea el código impreso con tu móvil antes de colocarlo al público.'
        ],
        technicalNotes: 'Aviso: Esta herramienta genera códigos QR para el destino que proporcionas. Los pagos son procesados por el servicio correspondiente (PayPal).',
        faqs: [
          { question: '¿Cómo funciona el código QR de PayPal al escanearlo?', answer: 'Al escanear el código, el navegador o la app de PayPal se abre directamente en tu enlace de pago con la cantidad indicada lista para pagar.' },
          { question: '¿Esta página procesa o retiene pagos?', answer: 'No. Esta aplicación únicamente genera el código QR visual. Todas las transacciones son gestionadas de forma segura por PayPal.' },
          { question: '¿Puedo fijar un importe y divisa exactos?', answer: 'Sí, puedes configurar un importe exacto con divisa (como EUR o USD) o dejar el campo vacío para importe libre.' },
          { question: '¿Pueden pagar clientes sin cuenta de PayPal?', answer: 'Sí, a través de la pasarela web de PayPal los clientes pueden elegir pagar con tarjeta de crédito o débito.' },
          { question: '¿Tienen caducidad estos códigos QR?', answer: 'No, los códigos QR estáticos son permanentes y funcionarán mientras tu enlace de PayPal siga activo.' },
          { question: '¿Puedo añadir mi logotipo al código?', answer: 'Sí, sube tu logo y el sistema ajustará la corrección de errores al nivel Alto (30%).' }
        ],
        relatedTools: [
          { name: 'QR de Venmo', slug: 'venmo-qr-code-generator', description: 'Crea códigos para pagos en Venmo.' },
          { name: 'QR de Cash App', slug: 'cash-app-qr-code-generator', description: 'Genera códigos con tu $Cashtag.' },
          { name: 'QR de Zelle', slug: 'zelle-qr-code-generator', description: 'Comparte datos de destinatario Zelle.' },
          { name: 'QR de Enlace Web', slug: 'url-to-qr-code', description: 'Convierte enlaces web en códigos QR.' }
        ]
      };
    case 'de':
      return {
        slug: 'paypal-qr-code-generator',
        qrTypeId: 'paypal',
        title: 'PayPal QR Code Generator — PayPal.Me Zahlungslink QR Code',
        description: 'Erstellen Sie QR-Codes für Ihren PayPal.Me-Link oder Zahlungsseite. Optional mit Betrag und Währung. Kostenloser Vektor-SVG & PNG Download.',
        h1: 'PayPal QR Code Generator',
        subheadline: 'Generieren Sie QR-Codes, die Kunden direkt zu Ihrem PayPal.Me-Link oder Zahlungsziel leiten.',
        heading: 'PayPal Zahlungs-QR-Code',
        subheading: 'Akzeptieren Sie weltweite und lokale Zahlungen sicher mit dem PayPal.Me Standard.',
        overviewTitle: 'Was ist ein PayPal QR Code Generator?',
        overviewParagraphs: [
          'Ein PayPal QR Code Generator wandelt Ihren PayPal.Me-Benutzernamen oder Zahlungslink in einen 2D-Barcode um. Beim Scannen mit der Smartphone-Kamera öffnet sich die gesicherte PayPal-Bezahlseite mit hinterlegtem Betrag und Währung.',
          'Dieses Tool erzeugt den grafischen QR-Code für das von Ihnen angegebene Ziel. Alle Zahlungen werden von PayPal verarbeitet.',
          'Farben anpassen, Firmenlogo einbetten und als druckfertige Vektor-SVG- oder hochauflösende PNG-Datei herunterladen.'
        ],
        sectors: [
          { name: 'Ladengeschäfte & Einzelhandel', description: 'Am Kassenbereich für kontaktlose Bezahlung.', benefit: 'Zahlungen per PayPal-Guthaben und Kreditkarte.' },
          { name: 'Online-Shops & Social Selling', description: 'In Katalogen und Livestreams für direkte Verkäufe.', benefit: 'Verwandelt Interessenten in Käufer.' },
          { name: 'Freiberufler & Agenturen', description: 'Auf Angeboten und Rechnungen für Projektarbeiten.', benefit: 'Sichere internationale Zahlungsabwicklung.' },
          { name: 'Spenden & Gemeinnützige Vereine', description: 'Auf Spendenflyern und Infotafeln.', benefit: 'Ermöglicht unkomplizierte Spenden.' },
          { name: 'Gastronomie & Biergärten', description: 'Auf Tischen und Speisekarten zur Abrechnung.', benefit: 'Schnellere Bezahlung ohne Wartezeit.' },
          { name: 'Kunsthandwerk & Märkte', description: 'An Ausstellungsständen für Kunst- und Handwerksverkäufe.', benefit: 'Bargeldlose Bezahlung ohne teures Terminal.' }
        ],
        howItWorks: [
          { title: '1. PayPal.Me-Link Eingeben', description: 'Geben Sie Ihren Nutzernamen (z. B. nutzer) oder Link ein.' },
          { title: '2. Betrag & Währung Wählen', description: 'Optional einen Festbetrag und die Währung (EUR, USD etc.) festlegen.' },
          { title: '3. Herunterladen & Drucken', description: 'Als Vektor-SVG für Drucksachen oder PNG exportieren.' }
        ],
        useCases: [
          { title: 'Thekenaufsteller an der Kasse', description: 'Acrylaufsteller mit "Mit PayPal bezahlen".', example: 'Boutique mit PayPal-Akzeptanz.' },
          { title: 'Gedruckte Rechnungen', description: 'Im Fußbereich für schnelle Begleichung.', example: 'Grafikdesigner für Kundenzahlungen.' },
          { title: 'Produktkataloge', description: 'Neben Produkten mit vorausgefülltem Betrag.', example: 'Versandhandelskatalog.' },
          { title: 'Spendenplakate', description: 'Auf Benefizveranstaltungen für Fördermittel.', example: 'Tierschutzverein.' }
        ],
        tips: [
          'PayPal.Me Aktivierung: Sicherstellen, dass der PayPal.Me-Link aktiv ist.',
          'Währung Festlegen: Richtige Hauptwährung (EUR, USD etc.) wählen.',
          'Hoher Kontrast: Schwarze Punkte auf weißem Grund.',
          'Vektor-SVG für Drucksachen: Garantiert randscharfen Druck auf jedem Material.',
          'Testüberweisung: Vorab mit dem Smartphone testen.'
        ],
        technicalNotes: 'Hinweis: Dieses Tool generiert QR-Codes für das von Ihnen angegebene Ziel. Die Zahlungsabwicklung erfolgt durch den jeweiligen Zahlungsdienstleister (PayPal).',
        faqs: [
          { question: 'Wie funktioniert der PayPal QR-Code beim Scannen?', answer: 'Beim Scannen öffnet sich die offizielle PayPal-Zahlungsseite mit dem vorausgewählten Empfänger und Betrag.' },
          { question: 'Verarbeitet diese Seite Zahlungen?', answer: 'Nein, wir erstellen ausschließlich den QR-Code. Die Zahlungstransaktion wird vollständig von PayPal abgewickelt.' },
          { question: 'Kann ich einen festen Betrag und Währung vorgeben?', answer: 'Ja, Sie können einen Betrag und eine Währung wie EUR oder USD hinterlegen oder das Feld für freie Eingabe leer lassen.' },
          { question: 'Können Kunden ohne PayPal-Konto bezahlen?', answer: 'Ja, auf der PayPal-Website können Kunden oft auch direkt mit Debit- oder Kreditkarte bezahlen.' },
          { question: 'Laufen diese QR-Codes ab?', answer: 'Nein, die statischen Codes sind dauerhaft gültig, solange Ihr PayPal-Link existiert.' },
          { question: 'Kann ich mein Firmenlogo einfügen?', answer: 'Ja, laden Sie Ihr Logo hoch und die Fehlerkorrektur wird automatisch auf Stufe H (30%) gesetzt.' }
        ],
        relatedTools: [
          { name: 'Venmo QR Generator', slug: 'venmo-qr-code-generator', description: 'QR-Codes für Venmo erstellen.' },
          { name: 'Cash App QR Code', slug: 'cash-app-qr-code-generator', description: 'Codes für $Cashtag erstellen.' },
          { name: 'Zelle QR Code', slug: 'zelle-qr-code-generator', description: 'Zelle Empfänger-Codes generieren.' },
          { name: 'Weblink QR Generator', slug: 'url-to-qr-code', description: 'Webseiten in QR-Codes umwandeln.' }
        ]
      };
    case 'fr':
      return {
        slug: 'paypal-qr-code-generator',
        qrTypeId: 'paypal',
        title: 'Générateur de QR Code PayPal — Lien de Paiement PayPal.Me',
        description: 'Créez des QR codes pour votre lien PayPal.Me ou URL PayPal. Montant et devise optionnels. Téléchargement gratuit en SVG et PNG.',
        h1: 'Générateur de QR Code PayPal',
        subheadline: 'Générez des QR codes qui dirigent directement vos clients vers votre lien de paiement ou profil PayPal.',
        heading: 'QR Code de Paiement PayPal',
        subheading: 'Acceptez des paiements sécurisés locaux et internationaux avec PayPal.Me.',
        overviewTitle: 'Qu\'est-ce qu\'un QR Code PayPal ?',
        overviewParagraphs: [
          'Un générateur de QR code PayPal encode votre lien de paiement PayPal.Me ou URL sécurisée dans un code 2D. Au scan avec l\'appareil photo d\'un smartphone, l\'acheteur accède à la page de paiement sécurisée de PayPal avec montant et devise préconfigurés.',
          'Cet outil génère le QR code correspondant à la destination indiquée. Les paiements sont traités par le service PayPal sous ses propres conditions.',
          'Personnalisez les couleurs, intégrez votre logo et téléchargez en format vectoriel SVG pour l\'imprimerie ou PNG haute définition.'
        ],
        sectors: [
          { name: 'Boutiques & Commerces', description: 'Au comptoir pour des encaissements sans contact.', benefit: 'Paiements par solde PayPal et carte bancaire.' },
          { name: 'E-commerce & Vente en Ligne', description: 'Dans catalogues et présentations en direct.', benefit: 'Transforme les visiteurs en acheteurs.' },
          { name: 'Indépendants & Consultants', description: 'Sur factures et devis pour honoraires.', benefit: 'Encaissement simple en plusieurs devises.' },
          { name: 'Associations & Dons', description: 'Sur affiches d\'appels aux dons et événements.', benefit: 'Facilite les contributions solidaires.' },
          { name: 'Restauration & Terrasses', description: 'Sur les tables pour le règlement de l\'addition.', benefit: 'Accélère le service et la rotation des tables.' },
          { name: 'Marchés d\'Art & Créateurs', description: 'Sur stands d\'exposition pour vente d\'œuvres.', benefit: 'Paiements directs sans terminal TPE.' }
        ],
        howItWorks: [
          { title: '1. Saisissez votre Lien PayPal.Me', description: 'Indiquez votre identifiant (ex. nom) ou URL complète.' },
          { title: '2. Montant et Devise Optionnels', description: 'Précisez une somme et une devise (EUR, USD, etc.).' },
          { title: '3. Téléchargez et Imprimez', description: 'Exportez en SVG vectoriel pour impression ou PNG.' }
        ],
        useCases: [
          { title: 'Chevalets de Caisse', description: 'Support en plexiglas avec "Payez avec PayPal".', example: 'Boutique acceptant PayPal.' },
          { title: 'Factures Imprimées', description: 'En pied de page pour un règlement rapide.', example: 'Graphiste freelance.' },
          { title: 'Catalogues Produits', description: 'À côté de chaque produit avec montant pré-rempli.', example: 'Catalogue de vente par correspondance.' },
          { title: 'Affiches d\'Appel aux Dons', description: 'Pour collecter des fonds en direct.', example: 'Refuge animalier.' }
        ],
        tips: [
          'Lien PayPal.Me Actif : Vérifiez que votre compte PayPal.Me est bien activé.',
          'Devise Adaptée : Choisissez la devise principale de vos clients (EUR, USD, etc.).',
          'Contraste Net : Points noirs sur fond blanc pour un scan rapide.',
          'SVG pour l\'Impression : Idéal pour affiches et packaging.',
          'Test Préalable : Effectuez un scan avec smartphone avant utilisation.'
        ],
        technicalNotes: 'Avertissement : Cet outil génère des QR codes pour la destination fournie. Les paiements sont traités par le service de paiement concerné (PayPal).',
        faqs: [
          { question: 'Comment fonctionne le QR code PayPal au scan ?', answer: 'Au scan, l\'appareil ouvre la page officielle de paiement PayPal avec le montant et le destinataire pré-remplis.' },
          { question: 'Ce site traite-t-il les paiements ?', answer: 'Non, cet outil génère uniquement le QR code visuel. Toutes les transactions financières sont gérées par PayPal.' },
          { question: 'Puis-je définir un montant et une devise fixes ?', answer: 'Oui, vous pouvez renseigner un montant précis en EUR ou USD, ou laisser le champ libre.' },
          { question: 'Les clients sans compte PayPal peuvent-ils payer ?', answer: 'Oui, sur l\'interface PayPal, les clients peuvent régler directement par carte bancaire.' },
          { question: 'Ces QR codes expirent-ils ?', answer: 'Non, les codes statiques restent valables à vie tant que votre compte PayPal existe.' },
          { question: 'Puis-je ajouter mon logo d\'entreprise ?', answer: 'Oui, importez votre logo et la correction d\'erreur passera automatiquement au niveau H (30%).' }
        ],
        relatedTools: [
          { name: 'QR Code Venmo', slug: 'venmo-qr-code-generator', description: 'Codes pour paiements Venmo.' },
          { name: 'QR Code Cash App', slug: 'cash-app-qr-code-generator', description: 'Codes pour $Cashtag.' },
          { name: 'QR Code Zelle', slug: 'zelle-qr-code-generator', description: 'Codes destinataire Zelle.' },
          { name: 'QR Code Lien Web', slug: 'url-to-qr-code', description: 'Convertissez des URL en QR codes.' }
        ]
      };
    case 'pt':
      return {
        slug: 'paypal-qr-code-generator',
        qrTypeId: 'paypal',
        title: 'Gerador de QR Code do PayPal — Link de Pagamento PayPal.Me',
        description: 'Crie QR Codes para seu link PayPal.Me ou URL do PayPal. Valor e moeda opcionais. Download gratuito em vetor SVG e PNG.',
        h1: 'Gerador de QR Code do PayPal',
        subheadline: 'Gere QR Codes que direcionam clientes diretamente para seu link de pagamento ou perfil do PayPal.',
        heading: 'QR Code de Pagamento PayPal',
        subheading: 'Receba pagamentos locais e internacionais de forma segura com o padrão PayPal.Me.',
        overviewTitle: 'O que é um QR Code do PayPal?',
        overviewParagraphs: [
          'Um gerador de QR Code do PayPal codifica seu link personalizado PayPal.Me ou página de pagamento em um código 2D. Ao escanear, o cliente é direcionado para a página de pagamento seguro do PayPal com valor e moeda pré-configurados.',
          'Esta ferramenta gera o código gráfico para o destino informado. Os pagamentos são processados exclusivamente pelo PayPal.',
          'Personalize cores, adicione o logotipo da sua marca e baixe em SVG vetorial para gráficas ou PNG em alta definição.'
        ],
        sectors: [
          { name: 'Lojas & Varejo Físico', description: 'No balcão para cobranças sem contato.', benefit: 'Pagamentos com saldo PayPal e cartões internacionais.' },
          { name: 'E-commerce & Vendas Online', description: 'Em catálogos e transmissões ao vivo.', benefit: 'Converte visitantes em compradores imediatos.' },
          { name: 'Autônomos & Consultores', description: 'Em orçamentos e faturas para honorários.', benefit: 'Cobrança segura em várias moedas.' },
          { name: 'ONGs & Arrecadações', description: 'Em materiais de captação de doações.', benefit: 'Facilita contribuições internacionais.' },
          { name: 'Restaurantes & Bares', description: 'Nas mesas para pagamento de comandas.', benefit: 'Agiliza o atendimento e giro de mesas.' },
          { name: 'Feiras & Artesanato', description: 'Em estandes para venda de produtos.', benefit: 'Vendas sem necessidade de maquininha física.' }
        ],
        howItWorks: [
          { title: '1. Digite seu Link PayPal.Me', description: 'Insira seu usuário do PayPal.Me (ex.: seunome) ou URL.' },
          { title: '2. Escolha Valor e Moeda', description: 'Defina um valor fixo e a moeda (BRL, USD, EUR) se desejar.' },
          { title: '3. Baixe e Divulgue', description: 'Exporte em SVG vetorial para placas ou PNG.' }
        ],
        useCases: [
          { title: 'Displays de Balcão', description: 'Suporte em acrílico com "Pague com PayPal".', example: 'Loja de roupas recebendo PayPal.' },
          { title: 'Faturas Impressas', description: 'No rodapé para pagamentos pontuais.', example: 'Designer gráfico freelancer.' },
          { title: 'Catálogos de Produtos', description: 'Ao lado dos itens com valor pré-definido.', example: 'Catálogo de venda direta.' },
          { title: 'Cartazes de Doação', description: 'Para arrecadação de fundos em eventos.', example: 'Abrigo de animais.' }
        ],
        tips: [
          'Link PayPal.Me Ativo: Verifique se seu link PayPal.Me está ativado.',
          'Moeda Correta: Escolha a moeda principal dos seus clientes.',
          'Alto Contraste: Fundo branco facilita a leitura sob qualquer luz.',
          'SVG para Impressão: Garante máxima nitidez em placas e banners.',
          'Faça um Teste: Escaneie o código com seu celular antes de imprimir.'
        ],
        technicalNotes: 'Aviso: Esta ferramenta gera códigos QR para o destino informado. Os pagamentos são processados pelo respectivo serviço (PayPal).',
        faqs: [
          { question: 'Como o QR Code do PayPal funciona ao escanear?', answer: 'Ao escanear, o celular abre a página oficial de pagamento do PayPal com o destinatário e valor prontos para confirmação.' },
          { question: 'Esta ferramenta processa pagamentos?', answer: 'Não, nosso site gera apenas o código QR visual. Todas as transações financeiras são processadas pelo PayPal.' },
          { question: 'Posso definir um valor e moeda fixos?', answer: 'Sim, você pode pré-definir o valor e a moeda ou deixar o campo aberto para o cliente digitar.' },
          { question: 'Clientes sem conta no PayPal podem pagar?', answer: 'Sim, na página do PayPal os clientes podem escolher pagar diretamente com cartão de crédito ou débito.' },
          { question: 'Os códigos expiram?', answer: 'Não, os códigos estáticos funcionam permanentemente enquanto sua conta no PayPal estiver ativa.' },
          { question: 'Posso colocar o logotipo da minha empresa?', answer: 'Sim, envie seu logo e o sistema ajustará a correção de erros para Alto (30%).' }
        ],
        relatedTools: [
          { name: 'QR Code Venmo', slug: 'venmo-qr-code-generator', description: 'Códigos para pagamentos Venmo.' },
          { name: 'QR Code Cash App', slug: 'cash-app-qr-code-generator', description: 'Códigos para $Cashtag.' },
          { name: 'QR Code Zelle', slug: 'zelle-qr-code-generator', description: 'Códigos de destinatário Zelle.' },
          { name: 'QR Code Link URL', slug: 'url-to-qr-code', description: 'Converta links em QR codes.' }
        ]
      };
    case 'it':
      return {
        slug: 'paypal-qr-code-generator',
        qrTypeId: 'paypal',
        title: 'Generatore QR Code PayPal — Link di Pagamento PayPal.Me',
        description: 'Crea codici QR per il tuo link PayPal.Me o URL PayPal. Importo e valuta opzionali. Download gratuito in vettoriale SVG e PNG.',
        h1: 'Generatore QR Code PayPal',
        subheadline: 'Genera codici QR che indirizzano direttamente i clienti al tuo link di pagamento o profilo PayPal.',
        heading: 'QR Code di Pagamento PayPal',
        subheading: 'Accetta pagamenti sicuri locali e internazionali con lo standard PayPal.Me.',
        overviewTitle: 'Cos\'è un QR Code PayPal?',
        overviewParagraphs: [
          'Un generatore di codici QR PayPal codifica il tuo link personalizzato PayPal.Me o pagina di pagamento sicura in un codice 2D. Inquadrando il codice con la fotocamera, l\'acquirente accede alla pagina di pagamento PayPal con importo e valuta preimpostati.',
          'Questo strumento genera il codice grafico per la destinazione indicata. I pagamenti sono elaborati direttamente dalla piattaforma PayPal.',
          'Personalizza i colori, inserisci il tuo logo aziendale e scarica in formato vettoriale SVG per la tipografia o PNG ad alta risoluzione.'
        ],
        sectors: [
          { name: 'Negozi & Commercio', description: 'Sul bancone cassa per pagamenti senza contatto.', benefit: 'Incassi con saldo PayPal e carte di credito.' },
          { name: 'E-commerce & Vendite Online', description: 'Su cataloghi cartacei e dirette social.', benefit: 'Trasforma i visitatori in acquirenti immediati.' },
          { name: 'Liberi Professionisti', description: 'Su preventivi e fatture per onorari.', benefit: 'Incassi sicuri in più valute.' },
          { name: 'Onlus & Raccolte Fondi', description: 'Su volantini per donazioni solidali.', benefit: 'Facilita i contributi internazionali.' },
          { name: 'Ristoranti & Tavole Calde', description: 'Sui tavoli per il saldo veloce del conto.', benefit: 'Velocizza il ricambio dei tavoli.' },
          { name: 'Mercatini d\'Arte & Artigianato', description: 'Negli stand per la vendita di manufatti.', benefit: 'Incassi veloci senza pos fisico.' }
        ],
        howItWorks: [
          { title: '1. Inserisci il Link PayPal.Me', description: 'Digita il tuo username PayPal.Me (es. nome) o URL completo.' },
          { title: '2. Scegli Importo e Valuta', description: 'Imposta facoltativamente una cifra e la valuta (EUR, USD, ecc.).' },
          { title: '3. Scarica e Stampa', description: 'Esporta in SVG vettoriale per la stampa o PNG.' }
        ],
        useCases: [
          { title: 'Espositori da Banco', description: 'Supporto in plexiglas con "Paga con PayPal".', example: 'Negozio con pagamenti PayPal.' },
          { title: 'Fatture e Ricevute', description: 'Nel piè di pagina per pagamenti puntuali.', example: 'Consulente aziendale freelance.' },
          { title: 'Cataloghi Prodotti', description: 'Accanto agli articoli con importo predefinito.', example: 'Vendita per corrispondenza.' },
          { title: 'Cartelli per Donazioni', description: 'Per la raccolta fondi in eventi.', example: 'Associazione di volontariato.' }
        ],
        tips: [
          'Link PayPal.Me Attivo: Assicurati che il tuo link PayPal.Me sia abilitato.',
          'Valuta Corretta: Seleziona la valuta principale dei tuoi clienti (EUR, USD, ecc.).',
          'Contrasto Elevato: Sfondo bianco per una lettura immediata.',
          'SVG per la Stampa: Massima nitidezza su espositori e cartelloni.',
          'Test da Smartphone: Inquadra il cartello prima dell\'esposizione.'
        ],
        technicalNotes: 'Avviso: Questo strumento genera codici QR per la destinazione fornita. I pagamenti sono elaborati dal rispettivo servizio di pagamento (PayPal).',
        faqs: [
          { question: 'Come funziona il codice QR PayPal alla scansione?', answer: 'Inquadrando il codice, lo smartphone apre la pagina ufficiale di pagamento PayPal con il destinatario e l\'importo già impostati.' },
          { question: 'Questo sito elabora i pagamenti?', answer: 'No, questo generatore crea solo il codice grafico. Tutte le transazioni sono gestite in modo sicuro da PayPal.' },
          { question: 'Posso impostare un importo e valuta fissi?', answer: 'Sì, puoi preimpostare una cifra con valuta (come EUR o USD) o lasciare il campo libero.' },
          { question: 'Possono pagare anche clienti senza conto PayPal?', answer: 'Sì, sulla pagina di pagamento di PayPal gli utenti possono pagare direttamente con carta di credito o debito.' },
          { question: 'Questi codici QR scadono?', answer: 'No, i codici statici restano validi per sempre finché il tuo link PayPal è attivo.' },
          { question: 'Posso inserire il mio logo aziendale?', answer: 'Sì, carica il tuo logo e la correzione errori verrà impostata automaticamente su Alto (30%).' }
        ],
        relatedTools: [
          { name: 'QR Code Venmo', slug: 'venmo-qr-code-generator', description: 'Codici per pagamenti Venmo.' },
          { name: 'QR Code Cash App', slug: 'cash-app-qr-code-generator', description: 'Codici per $Cashtag.' },
          { name: 'QR Code Zelle', slug: 'zelle-qr-code-generator', description: 'Codici destinatario Zelle.' },
          { name: 'QR Code Link Web', slug: 'url-to-qr-code', description: 'Converti indirizzi web in QR code.' }
        ]
      };
    case 'hi':
      return {
        slug: 'paypal-qr-code-generator',
        qrTypeId: 'paypal',
        title: 'PayPal QR कोड जेनरेटर — PayPal.Me भुगतान लिंक QR कोड',
        description: 'PayPal.Me लिंक और भुगतान पेज के लिए कस्टम QR कोड बनाएं। मुद्रा और राशि के साथ। वेक्टर SVG और PNG मुफ़्त डाउनलोड।',
        h1: 'PayPal QR कोड जेनरेटर',
        subheadline: 'ग्राहकों को सीधे आपके PayPal.Me भुगतान लिंक या प्रोफ़ाइल पर भेजने के लिए QR कोड बनाएं।',
        heading: 'PayPal भुगतान QR कोड',
        subheading: 'PayPal.Me मानक के साथ अंतरराष्ट्रीय और स्थानीय भुगतान सुरक्षित रूप से स्वीकार करें।',
        overviewTitle: 'PayPal QR कोड क्या है?',
        overviewParagraphs: [
          'PayPal QR कोड आपके PayPal.Me उपयोगकर्ता नाम या सुरक्षित भुगतान लिंक को 2D बारकोड में बदल देता है। जब कोई इसे फोन कैमरे से स्कैन करता है, तो मोबाइल में आधिकारिक PayPal भुगतान पेज खुल जाता है जिसमें तय राशि और मुद्रा पहले से भरी होती है।',
          'यह टूल आपके द्वारा दर्ज किए गए गंतव्य के लिए QR कोड तैयार करता है। भुगतान प्रक्रिया सीधे PayPal द्वारा सुरक्षित रूप से पूरी की जाती है।',
          'काउंटर स्टैंडी और बोर्ड के लिए वेक्टर SVG और PNG मुफ़्त डाउनलोड करें।'
        ],
        sectors: [
          { name: 'रिटेल दुकानें व स्टोर', description: 'कैश काउंटर पर बिना संपर्क के त्वरित भुगतान के लिए।', benefit: 'PayPal बैलेंस और क्रेडिट कार्ड से भुगतान स्वीकार करें।' },
          { name: 'ई-कॉमर्स व सोशल मीडिया बिक्री', description: 'कैटलॉग और लाइव वीडियो में बिक्री बढ़ाने हेतु।', benefit: 'दर्शकों को तुरंत खरीदार बनाता है।' },
          { name: 'फ्रीलांसर्स व एक्सपोर्टर्स', description: 'विदेशी क्लाइंट्स से फीस और इनवॉइस भुगतान मंगाने के लिए।', benefit: 'विदेशी मुद्राओं में सुरक्षित लेन-देन।' },
          { name: 'एनजीओ व चैरिटी संस्थान', description: 'दान पेटी और बैनरों पर अंतरराष्ट्रीय दान प्राप्त करने हेतु।', benefit: 'आसान डिजिटल दान संग्रह।' },
          { name: 'रेस्तरां व कैफ़े', description: 'टेबलों पर बिल भुगतान के लिए।', benefit: 'भीड़ के समय बिलिंग में तेज़ी।' },
          { name: 'हस्तशिल्प प्रदर्शनी', description: 'विदेशी पर्यटकों से हस्तशिल्प बिक्री के भुगतान हेतु।', benefit: 'बिना विदेशी स्वाइप मशीन के भुगतान।' }
        ],
        howItWorks: [
          { title: '1. अपना PayPal.Me लिंक दर्ज करें', description: 'अपना यूजरनेम (जैसे yourname) या लिंक लिखें।' },
          { title: '2. राशि व मुद्रा चुनें', description: 'निश्चित रकम और मुद्रा (USD, EUR आदि) चुनें या खाली छोड़ें।' },
          { title: '3. डाउनलोड व प्रिंट करें', description: 'वेक्टर SVG या हाई-रिज़ॉल्यूशन PNG डाउनलोड करें।' }
        ],
        useCases: [
          { title: 'काउंटर डिस्प्ले स्टैंड', description: '"PayPal से भुगतान करें" लिखा हुआ स्टैंड।', example: 'कपड़ों की दुकान पर काउंटर स्टैंड।' },
          { title: 'प्रिंटेड इनवॉइस व बिल', description: 'बिल के नीचे भुगतान लिंक वाला कोड।', example: 'फ्रीलांस डिज़ाइनर इनवॉइस।' },
          { title: 'प्रोडक्ट कैटलॉग', description: 'उत्पादों के सामने तय कीमत वाला QR कोड।', example: 'एक्सपोर्ट कैटलॉग।' },
          { title: 'दान संग्रह बैनर', description: 'चैरिटी इवेंट्स में ऑनलाइन दान हेतु।', example: 'एनजीओ सहायता अभियान।' }
        ],
        tips: [
          'PayPal.Me लिंक चालू रखें: सुनिश्चित करें कि आपका PayPal.Me लिंक सक्रिय हो।',
          'सही मुद्रा चुनें: अपने ग्राहकों के अनुसार मुख्य मुद्रा चुनें।',
          'हाई कंट्रास्ट: सफ़ेद बैकग्राउंड पर गहरे डॉट्स रखें।',
          'प्रिंटिंग के लिए SVG: बड़े आकार में साफ़ प्रिंट के लिए SVG का उपयोग करें।',
          'प्रिंट से पहले जांच: फोन कैमरे से स्कैन करके चेक करें।'
        ],
        technicalNotes: 'सूचना: यह टूल आपके द्वारा दिए गए गंतव्य के लिए QR कोड बनाता है। भुगतान का निपटारा संबंधित भुगतान सेवा (PayPal) द्वारा किया जाता है।',
        faqs: [
          { question: 'स्कैन करने पर PayPal QR कोड कैसे काम करता है?', answer: 'कैमरे से स्कैन करते ही मोबाइल में PayPal का आधिकारिक भुगतान पेज खुल जाता है जिसमें तय राशि तैयार मिलती है।' },
          { question: 'क्या यह वेबसाइट भुगतान प्रोसेस करती है?', answer: 'नहीं, यह टूल केवल विज़ुअल QR कोड बनाता है। सभी भुगतान सीधे PayPal द्वारा सुरक्षित रूप से प्रोसेस किए जाते हैं।' },
          { question: 'क्या मैं निश्चित राशि और मुद्रा तय कर सकता हूँ?', answer: 'हाँ, आप निश्चित राशि और मुद्रा (जैसे USD या EUR) डाल सकते हैं या इसे खाली छोड़ सकते हैं।' },
          { question: 'क्या बिना PayPal अकाउंट वाले ग्राहक भुगतान कर सकते हैं?', answer: 'हाँ, PayPal पेज पर ग्राहक सीधे अपने डेबिट या क्रेडिट कार्ड से भी भुगतान कर सकते हैं।' },
          { question: 'क्या यह QR कोड कभी एक्सपायर होता है?', answer: 'नहीं, जब तक आपका PayPal अकाउंट चालू है, यह कोड हमेशा काम करेगा।' },
          { question: 'क्या मैं बीच में अपना लोगो लगा सकता हूँ?', answer: 'हाँ, लोगो लगाने पर सिस्टम एरर करेक्शन को हाई (H) पर सेट कर देगा।' }
        ],
        relatedTools: [
          { name: 'Venmo QR जेनरेटर', slug: 'venmo-qr-code-generator', description: 'Venmo भुगतान QR कोड बनाएं।' },
          { name: 'Cash App QR जेनरेटर', slug: 'cash-app-qr-code-generator', description: '$Cashtag QR कोड बनाएं।' },
          { name: 'Zelle QR कोड', slug: 'zelle-qr-code-generator', description: 'Zelle प्राप्तकर्ता विवरण कोड।' },
          { name: 'वेबसाइट URL QR जेनरेटर', slug: 'url-to-qr-code', description: 'वेबसाइट लिंक को QR कोड में बदलें।' }
        ]
      };
    default: // 'en'
      return {
        slug: 'paypal-qr-code-generator',
        qrTypeId: 'paypal',
        title: 'PayPal QR Code Generator — Create Custom PayPal.Me Payment QR Codes',
        description: 'Generate custom QR codes for your PayPal.Me link or merchant payment page. Support for preset amounts and currencies. Free vector SVG & PNG export.',
        h1: 'PayPal QR Code Generator',
        subheadline: 'Create custom QR codes that direct customers, buyers, and clients straight to your verified PayPal.Me link or payment destination.',
        heading: 'PayPal Payment & Profile QR Code',
        subheading: 'Accept touch-free domestic and international payments safely with standard PayPal.Me links.',
        overviewTitle: 'What is a PayPal QR Code Generator?',
        overviewParagraphs: [
          'A PayPal QR code generator encodes your verified PayPal.Me personal username, business handle, or custom payment URL into a scannable 2D barcode. When scanned using any smartphone camera or mobile app, the scanner launches the official PayPal checkout screen with the payee details, optional transaction amount, and designated currency pre-populated.',
          'Eliminating manual URL typing and email entry reduces checkout friction and prevents expensive typo errors at retail storefronts, craft fairs, and in invoice footers.',
          'Our generator operates completely client-side in your browser for total privacy. Customize your QR code with corporate colors, insert your central store logo, and export print-ready vector SVG files for tabletop acrylic standees or crisp PNGs for digital invoices.'
        ],
        sectors: [
          { name: 'Retail Storefronts & Boutiques', description: 'Mounted on countertop standees for touchless card and PayPal balance checkout.', benefit: 'Accepts domestic and international buyer payments without card swipe fees.' },
          { name: 'Online Commerce & Social Selling', description: 'Printed on unboxing packaging and displayed on livestreams.', benefit: 'Converts viewers into instant repeat customers.' },
          { name: 'Freelance Designers & Consultants', description: 'Printed on commercial invoices and project estimates.', benefit: 'Ensures fast, multi-currency client fee settlement.' },
          { name: 'Non-Profits & Charitable Foundations', description: 'Printed on fundraising banners and donation direct mailers.', benefit: 'Enables seamless international donor contributions.' },
          { name: 'Bistros, Cafes & Outdoor Dining', description: 'Placed on tabletop tents for fast dining bill payment.', benefit: 'Speeds up dining table turnover.' },
          { name: 'Art Galleries & Craft Exhibitions', description: 'Displayed beside exhibition pieces for immediate artwork sales.', benefit: 'Captures spontaneous high-value purchases.' }
        ],
        howItWorks: [
          { title: '1. Enter PayPal.Me Username or URL', description: 'Input your handle (e.g. yourname or paypal.me/yourname) or payment URL.' },
          { title: '2. Select Amount & Currency (Optional)', description: 'Input a suggested payment amount and choose your currency (USD, EUR, GBP, etc.).' },
          { title: '3. Download & Print Everywhere', description: 'Export print-ready Vector SVG for physical signage or high-DPI PNG.' }
        ],
        useCases: [
          { title: 'Countertop Point-of-Sale Standees', description: 'Tabletop acrylic stands with "Pay with PayPal" messaging.', example: 'Retail boutique counter display.' },
          { title: 'Commercial PDF Invoices', description: 'Placed in invoice footers with the exact project fee pre-encoded.', example: 'Freelance agency receiving client payments.' },
          { title: 'Physical Product Catalogs', description: 'Placed alongside product listings with pre-filled item prices.', example: 'Mail-order merchandise catalog.' },
          { title: 'Fundraising Event Placards', description: 'Placed on event registration tables for donor contributions.', example: 'Animal shelter charity benefit.' }
        ],
        tips: [
          'Verify PayPal.Me Link Activation: Ensure your PayPal.Me profile is active and configured to receive payments.',
          'Specify the Correct Currency: Match the currency code (USD, EUR, GBP, etc.) to your primary customer base.',
          'High Optical Contrast: Maintain dark modules against a clean white background for rapid scanning.',
          'Vector SVG for Commercial Signage: Use Vector SVG to guarantee razor-sharp rendering on print signage.',
          'Pre-Event Field Test: Scan the printed physical proof with a smartphone camera before public deployment.'
        ],
        technicalNotes: 'Disclaimer: This tool generates QR codes for the destination you provide. Payments are processed by the respective payment service (PayPal).',
        faqs: [
          { question: 'How does a PayPal QR code work when scanned?', answer: 'When scanned with any smartphone camera, the browser or PayPal app opens directly to your PayPal.Me payment screen with your payee account pre-selected.' },
          { question: 'Does this website process or touch my payments?', answer: 'No. This application is solely an optical QR generator. All money transfers and card transactions are processed directly and securely by PayPal.' },
          { question: 'Can I specify an exact amount and currency?', answer: 'Yes! You can specify an exact amount and currency code (such as USD, EUR, or GBP), or leave it blank so buyers can enter their total.' },
          { question: 'Can buyers pay if they do not have a PayPal account?', answer: 'Yes! On the PayPal web payment interface, buyers can easily check out using standard credit or debit cards.' },
          { question: 'Do PayPal QR codes ever expire?', answer: 'No. Static PayPal QR codes encode your payment destination permanently and will work indefinitely as long as your PayPal account remains open.' },
          { question: 'Can I add my company logo to the center of the QR code?', answer: 'Yes! Upload your logo in PNG or SVG format, and our generator automatically boosts error correction to Level H (30%) for seamless scanning.' }
        ],
        relatedTools: [
          { name: 'Venmo QR Generator', slug: 'venmo-qr-code-generator', description: 'Generate custom QR codes for Venmo.' },
          { name: 'Cash App QR Generator', slug: 'cash-app-qr-code-generator', description: 'Create scannable QR codes for your $Cashtag.' },
          { name: 'Zelle QR Generator', slug: 'zelle-qr-code-generator', description: 'Encode verified Zelle recipient details.' },
          { name: 'URL QR Generator', slug: 'url-to-qr-code', description: 'Convert website links into scannable QR codes.' }
        ]
      };
  }
}
