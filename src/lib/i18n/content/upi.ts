import type { Locale } from '../config';
import type { LocalizedPageContent } from './types';

export function getUpiContent(locale: Locale): LocalizedPageContent {
  switch (locale) {
    case 'es':
      return {
        slug: 'upi-qr-code-generator',
        qrTypeId: 'upi',
        title: 'Generador de Código QR UPI — Pagos Instantáneos para Comercios',
        description: 'Crea códigos QR de pago UPI sin comisiones. Compatible con Google Pay, PhonePe y Paytm. Descarga en formato vectorial SVG y PNG.',
        h1: 'Generador de Código QR de Pago UPI',
        subheadline: 'Genera códigos QR de pago instantáneo compatibles con todas las aplicaciones UPI como Google Pay, PhonePe, Paytm y BHIM.',
        heading: 'Código QR de Pago UPI',
        subheading: 'Acepta pagos directos a tu cuenta bancaria sin comisiones intermediarias ni terminales costosos.',
        overviewTitle: '¿Qué es un Código QR de Pago UPI?',
        overviewParagraphs: [
          'Un código QR UPI codifica el protocolo estándar de pagos inmediatos "upi://pay?pa=VPA&pn=Nombre&am=Monto" en una matriz 2D. Al escanearlo con cualquier app bancaria o billetera digital, el usuario ve el nombre del beneficiario y puede transferir el dinero de forma segura al instante.',
          'Es el estándar de pago digital líder en comercios, restaurantes, puestos callejeros y profesionales independientes por su rapidez, coste cero y liquidación bancaria en tiempo real.',
          'Personaliza con colores corporativos, añade el logo de tu negocio y descarga en SVG vectorial para expositores de metacrilato y pegatinas.'
        ],
        sectors: [
          { name: 'Comercio Minorista y Tiendas', description: 'En el mostrador junto a la caja para cobros rápidos.', benefit: 'Ahorra en comisiones de datáfonos bancarios.' },
          { name: 'Restaurantes y Puestos de Comida', description: 'En las mesas y tickets de comida para pagar sin esperas.', benefit: 'Rotación de mesas más rápida.' },
          { name: 'Profesionales Autónomos y Servicios', description: 'En facturas y presupuestos para cobro de honorarios.', benefit: 'Cobro directo en cuenta bancaria.' },
          { name: 'Taxis y Transporte Urbano', description: 'En el salpicadero del vehículo para cobro de trayectos.', benefit: 'Sin problemas de cambio o efectivo.' },
          { name: 'Clínicas y Farmacias', description: 'Para abonar consultas y medicamentos al instante.', benefit: 'Cobro contactless higiénico.' },
          { name: 'Donaciones y Eventos Benéficos', description: 'En carteles de recaudación para aportaciones directas.', benefit: 'Aumenta las donaciones espontáneas.' }
        ],
        howItWorks: [
          { title: '1. Introduce tu ID de UPI (VPA)', description: 'Escribe tu identificador (ej. tunegocio@okicici o movil@upi).' },
          { title: '2. Define Nombre y Monto Opcional', description: 'Indica el nombre del comercio y, si lo deseas, un importe fijo.' },
          { title: '3. Descarga e Imprime', description: 'Exporta en SVG vectorial o PNG de alta calidad.' }
        ],
        useCases: [
          { title: 'Soportes de Mostrador en Metacrilato', description: 'Expositor junto a la caja con la llamada "Paga con cualquier app UPI".', example: 'Tienda de barrio cobrando al instante.' },
          { title: 'Pegatinas en Mesas de Restaurante', description: 'Adhesivos plastificados para cobro directo en mesa.', example: 'Cafetería con cobro en mesa.' },
          { title: 'Facturas Impresas y Albaranes', description: 'Al pie de la factura con el importe exacto preconfigurado.', example: 'Distribuidor mayorista.' },
          { title: 'Salpicadero de Vehículos de Transporte', description: 'Vinilo en el reposacabezas para pago de pasajeros.', example: 'Taxi urbano con cobro digital.' }
        ],
        tips: [
          'Verifica tu ID de UPI: Comprueba que el VPA esté escrito sin errores tipográficos.',
          'Importe Fijo o Libre: Deja el campo de importe en blanco para que el cliente ingrese el total de su compra.',
          'Alto Contraste: Mantén módulos oscuros sobre fondo blanco para escanear con poca luz.',
          'Soportes Impermeables: Utiliza soportes sellados o pegatinas plastificadas para el mostrador.',
          'Prueba Real: Haz una transferencia de prueba de 1€/1₹ antes de imprimir grandes cantidades.'
        ],
        technicalNotes: 'Estándar NPCI UPI Deep Link compatible con Google Pay, PhonePe, Paytm, BHIM y apps bancarias.',
        faqs: [
          { question: '¿Cómo pagan los clientes con el código QR UPI?', answer: 'El cliente abre su app de pagos favorita (Google Pay, PhonePe, Paytm, etc.), escanea el código, introduce su PIN y el dinero se transfiere directamente a tu cuenta bancaria.' },
          { question: '¿Tiene alguna comisión bancaria por transacción?', answer: 'No, los pagos estándar UPI entre particulares y pequeños comercios son gratuitos y sin comisiones de pasarela.' },
          { question: '¿Puedo fijar un importe específico en el código?', answer: 'Sí, puedes predefinir un importe exacto para un producto o dejarlo vacío para que el cliente escriba el total.' },
          { question: '¿Funciona con todas las aplicaciones de pago UPI?', answer: 'Sí, cumple el estándar unificado interoperable de NPCI y funciona con cualquier app UPI.' },
          { question: '¿Caducan estos códigos QR de pago?', answer: 'No, son códigos permanentes que funcionarán siempre mientras tu ID de UPI siga activo.' },
          { question: '¿Puedo poner el logo de mi tienda en el centro?', answer: 'Sí, sube tu logo y el sistema ajustará automáticamente la corrección de errores al nivel Alto (30%).' }
        ],
        relatedTools: [
          { name: 'QR de Enlace Web', slug: 'url-to-qr-code', description: 'Dirige tráfico a tu web o tienda online.' },
          { name: 'QR de Contacto vCard', slug: 'vcard-qr-code-generator', description: 'Comparte tarjetas de visita completas.' },
          { name: 'QR de Reseñas de Google', slug: 'google-reviews-qr-code', description: 'Consigue más valoraciones de 5 estrellas.' },
          { name: 'QR de WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Inicia chats de negocios en WhatsApp.' }
        ]
      };
    case 'de':
      return {
        slug: 'upi-qr-code-generator',
        qrTypeId: 'upi',
        title: 'UPI QR Code Generator — Sofortige Händler-Zahlungen',
        description: 'Erstellen Sie gebührenfreie UPI-Zahlungs-QR-Codes. Kompatibel mit Google Pay, PhonePe und Paytm. Vektor-SVG & PNG Download.',
        h1: 'UPI Zahlungs-QR-Code Generator',
        subheadline: 'Generieren Sie universelle Zahlungs-QR-Codes für alle UPI-Apps wie Google Pay, PhonePe, Paytm und BHIM.',
        heading: 'UPI Zahlungs-QR-Code',
        subheading: 'Akzeptieren Sie direkte Bankzahlungen ohne Zwischenhändler und ohne teure Kartenterminals.',
        overviewTitle: 'Was ist ein UPI QR Code Generator?',
        overviewParagraphs: [
          'Ein UPI QR Code Generator kodiert das standardisierte Echtzeit-Zahlungsprotokoll "upi://pay?pa=VPA&pn=Name&am=Betrag" in einen 2D-Barcode. Beim Scannen mit einer beliebigen Zahlungs-App sieht der Kunde den Empfängernamen und kann den Betrag in Echtzeit direkt vom Bankkonto überweisen.',
          'Es ist der führende Standard für bargeldlose Sofortzahlungen im Einzelhandel, in der Gastronomie und bei Dienstleistern.',
          'Farben anpassen, Firmenlogo einbetten und als Vektor-SVG für Thekenaufsteller oder PNG herunterladen.'
        ],
        sectors: [
          { name: 'Einzelhandel & Kioske', description: 'Am Kassenbereich für schnelle bargeldlose Bezahlung.', benefit: 'Keine Terminal-Gebühren oder Kartengebühren.' },
          { name: 'Restaurants & Imbissstände', description: 'Auf Tischen und Kassenbelegen zur schnellen Abrechnung.', benefit: 'Schnellere Tischabrechnung.' },
          { name: 'Freiberufler & Handwerker', description: 'Auf Rechnungen für direkte Honorarüberweisungen.', benefit: 'Sofortige Gutschrift auf dem Geschäftskonto.' },
          { name: 'Taxis & Fahrdienste', description: 'Am Armaturenbrett für unkomplizierte Fahrpreisbezahlung.', benefit: 'Kein Wechselgeld nötig.' },
          { name: 'Apotheken & Praxen', description: 'Für hygienische, kontaktlose Bezahlung vor Ort.', benefit: 'Schneller Kassiervorgang.' },
          { name: 'Spenden & Vereine', description: 'Auf Infotafeln für direkte Förderbeiträge.', benefit: 'Erhöht spontane Spendeneingänge.' }
        ],
        howItWorks: [
          { title: '1. UPI-ID (VPA) Eingeben', description: 'Geben Sie Ihre Zahlungsadresse (z. B. händler@okaxis) ein.' },
          { title: '2. Name & Optionalen Betrag Festlegen', description: 'Geschäftsnamen und bei Bedarf festen Zahlbetrag eintragen.' },
          { title: '3. Herunterladen & Drucken', description: 'Als Vektor-SVG für Aufsteller oder PNG exportieren.' }
        ],
        useCases: [
          { title: 'Acryl-Aufsteller an der Kasse', description: 'Tischaufsteller mit "Mit allen UPI-Apps zahlen".', example: 'Geschäft mit schneller Kassenabwicklung.' },
          { title: 'Tischaufkleber im Restaurant', description: 'Wasserfeste Aufkleber für direkte Tischzahlung.', example: 'Café mit Selbstbedienung.' },
          { title: 'Gedruckte Rechnungen', description: 'Im Fußbereich mit vorausgefülltem Rechnungsbetrag.', example: 'Großhändler für prompte Zahlung.' },
          { title: 'Fahrzeug-Innenraum', description: 'Aufkleber an der Kopfstütze im Taxi.', example: 'Fahrservice mit QR-Bezahlung.' }
        ],
        tips: [
          'UPI-ID prüfen: Genau auf Tippfehler in der VPA achten.',
          'Betrag flexibel lassen: Betragsfeld leer lassen, damit Kunden die Summe selbst eingeben können.',
          'Hoher Kontrast: Dunkles Muster auf weißem Grund.',
          'Wasserfeste Aufsteller: Langlebige Acrylaufsteller für den Kassenbereich nutzen.',
          'Testüberweisung: Vor dem großen Seriendruck eine Kleinbetrags-Testzahlung durchführen.'
        ],
        technicalNotes: 'Offizieller NPCI UPI Standard, interoperabel mit Google Pay, PhonePe, Paytm und allen UPI-Bank-Apps.',
        faqs: [
          { question: 'Wie bezahlen Kunden mit dem UPI QR-Code?', answer: 'Der Kunde öffnet seine Zahlungs-App (Google Pay, PhonePe etc.), scannt den Code, bestätigt die PIN und der Betrag landet in Echtzeit auf Ihrem Konto.' },
          { question: 'Fallen Transaktionsgebühren an?', answer: 'Standard-UPI-Zahlungen sind gebührenfrei und erfordern keine monatlichen Terminal-Mieten.' },
          { question: 'Kann ich feste Beträge vorgeben?', answer: 'Ja, Sie können einen festen Betrag hinterlegen oder das Feld für flexible Beträge leer lassen.' },
          { question: 'Funktioniert das mit allen UPI-Apps?', answer: 'Ja, der Code entspricht dem universellen NPCI-Standard und ist mit allen UPI-Apps kompatibel.' },
          { question: 'Laufen diese Zahlungs-Codes ab?', answer: 'Nein, die statischen Codes sind dauerhaft gültig, solange Ihre UPI-ID aktiv ist.' },
          { question: 'Kann ich mein Firmenlogo einfügen?', answer: 'Ja, laden Sie Ihr Logo hoch und die Fehlerkorrektur wird automatisch auf Stufe H (30%) gesetzt.' }
        ],
        relatedTools: [
          { name: 'Weblink QR Generator', slug: 'url-to-qr-code', description: 'Besucher auf Ihre Website weiterleiten.' },
          { name: 'vCard Visitenkarte', slug: 'vcard-qr-code-generator', description: 'Kontaktdaten im Telefonbuch speichern.' },
          { name: 'Google Bewertungen QR', slug: 'google-reviews-qr-code', description: 'Mehr 5-Sterne-Bewertungen auf Google sammeln.' },
          { name: 'WhatsApp QR Code', slug: 'whatsapp-qr-code-generator', description: 'Kundenchats direkt auf WhatsApp starten.' }
        ]
      };
    case 'fr':
      return {
        slug: 'upi-qr-code-generator',
        qrTypeId: 'upi',
        title: 'Générateur de QR Code UPI — Paiements Commerçants Instantanés',
        description: 'Créez des QR codes de paiement UPI sans frais. Compatible Google Pay, PhonePe et Paytm. Téléchargement SVG vectoriel et PNG.',
        h1: 'Générateur de QR Code de Paiement UPI',
        subheadline: 'Générez des QR codes de paiement instantané compatibles avec toutes les applications UPI telles que Google Pay, PhonePe, Paytm et BHIM.',
        heading: 'QR Code de Paiement UPI',
        subheading: 'Acceptez les paiements directs sur votre compte bancaire sans frais d\'intermédiaire ni terminaux coûteux.',
        overviewTitle: 'Qu\'est-ce qu\'un QR Code de Paiement UPI ?',
        overviewParagraphs: [
          'Un générateur de QR code UPI encode le protocole de paiement instantané "upi://pay?pa=VPA&pn=Nom&am=Montant" dans un code 2D. En scannant le code, le client ouvre son application de paiement (Google Pay, PhonePe, Paytm, etc.) et valide le transfert bancaire en temps réel.',
          'C\'est la solution de paiement sans contact de référence pour les commerces, restaurants et indépendants, sans commission bancaire.',
          'Téléchargement gratuit en SVG vectoriel pour vos chevalets de caisse ou PNG haute définition.'
        ],
        sectors: [
          { name: 'Commerces & Boutiques', description: 'Sur le comptoir pour des encaissements rapides.', benefit: 'Zéro commission de terminal bancaire.' },
          { name: 'Restauration & Cafés', description: 'Sur les tables et additions pour payer sans attendre.', benefit: 'Rotation accélérée des tables.' },
          { name: 'Indépendants & Prestataires', description: 'Sur factures pour un règlement direct d\'honoraires.', benefit: 'Paiement immédiat sur compte bancaire.' },
          { name: 'Taxis & Transport', description: 'Sur le tableau de bord pour payer la course.', benefit: 'Évite les problèmes de monnaie.' },
          { name: 'Pharmacies & Soins', description: 'Pour un paiement hygiénique et sans contact.', benefit: 'Encaissement rapide au comptoir.' },
          { name: 'Dons & Associations', description: 'Sur affiches pour collecter des fonds en direct.', benefit: 'Facilite les contributions spontanées.' }
        ],
        howItWorks: [
          { title: '1. Saisissez votre ID UPI (VPA)', description: 'Indiquez votre identifiant (ex. commerce@okicici).' },
          { title: '2. Nom et Montant Optionnel', description: 'Précisez le nom du bénéficiaire et un montant fixe si souhaité.' },
          { title: '3. Téléchargez et Imprimez', description: 'Exportez en SVG vectoriel pour chevalets ou PNG.' }
        ],
        useCases: [
          { title: 'Chevalets de Caisse en Plexiglas', description: 'Support invitant à payer avec n\'importe quelle application UPI.', example: 'Boutique encaissant en direct.' },
          { title: 'Stickers de Table au Restaurant', description: 'Adhésifs plastifiés pour le paiement à table.', example: 'Brasserie en libre-service.' },
          { title: 'Factures Imprimées', description: 'Au bas du document avec montant pré-rempli.', example: 'Grossiste pour règlement rapide.' },
          { title: 'Tableau de Bord de Véhicule', description: 'Adhésif dans les véhicules de transport.', example: 'Taxi avec paiement digital.' }
        ],
        tips: [
          'Vérifiez votre VPA : Assurez-vous de l\'exactitude de votre identifiant UPI.',
          'Montant Libre : Laissez le champ montant vide pour que le client saisisse le total.',
          'Contraste Net : Points noirs sur fond blanc pour un scan rapide.',
          'Supports Durables : Utilisez du plexiglas robuste pour vos comptoirs.',
          'Test Préalable : Effectuez un micro-paiement test avant tirage final.'
        ],
        technicalNotes: 'Conforme au standard officiel NPCI UPI, interopérable avec toutes les applications bancaires.',
        faqs: [
          { question: 'Comment les clients paient-ils avec le code UPI ?', answer: 'Le client ouvre son application de paiement habituelle (Google Pay, PhonePe, etc.), scanne le code, saisit son code PIN et le montant est transféré directement sur votre compte bancaire.' },
          { question: 'Y a-t-il des frais bancaires ?', answer: 'Non, les paiements UPI standard sont entièrement sans frais de commission.' },
          { question: 'Puis-je définir un montant fixe ?', answer: 'Oui, vous pouvez renseigner un montant précis ou laisser le champ libre pour que le client indique la somme.' },
          { question: 'Est-ce compatible avec toutes les applications UPI ?', answer: 'Oui, le protocole est universel et fonctionne avec toutes les banques et applications compatibles UPI.' },
          { question: 'Ces QR codes expirent-ils ?', answer: 'Non, les codes statiques restent valables à vie tant que votre identifiant UPI est actif.' },
          { question: 'Puis-je ajouter le logo de mon magasin ?', answer: 'Oui, importez votre logo et la correction d\'erreur passera automatiquement au niveau H (30%).' }
        ],
        relatedTools: [
          { name: 'QR Code Lien Web', slug: 'url-to-qr-code', description: 'Redirigez vers votre site web.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Partagez vos coordonnées complètes.' },
          { name: 'QR Code Avis Google', slug: 'google-reviews-qr-code', description: 'Collectez des avis 5 étoiles.' },
          { name: 'QR Code WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Démarrez des conversations WhatsApp.' }
        ]
      };
    case 'pt':
      return {
        slug: 'upi-qr-code-generator',
        qrTypeId: 'upi',
        title: 'Gerador de QR Code UPI — Pagamentos Comerciais Instantâneos',
        description: 'Crie QR Codes de pagamento UPI sem taxas. Compatível com Google Pay, PhonePe e Paytm. Download em SVG vetorial e PNG.',
        h1: 'Gerador de QR Code de Pagamento UPI',
        subheadline: 'Gere QR Codes de pagamento instantâneo compatíveis com todos os aplicativos UPI como Google Pay, PhonePe, Paytm e BHIM.',
        heading: 'QR Code de Pagamento UPI',
        subheading: 'Receba pagamentos direto na sua conta bancária sem taxas de intermediários nem maquininhas.',
        overviewTitle: 'O que é um QR Code de Pagamento UPI?',
        overviewParagraphs: [
          'Um gerador de QR Code UPI codifica o protocolo de transferência em tempo real "upi://pay?pa=VPA&pn=Nome&am=Valor" em um código 2D. Ao escanear, o cliente abre o app de pagamento (Google Pay, PhonePe, Paytm) e confirma a transferência bancária instantânea.',
          'É o padrão de pagamento sem contato líder em estabelecimentos comerciais e autônomos por ser ágil e sem taxas.',
          'Baixe em SVG vetorial para displays de acrílico e adesivos de balcão ou PNG em alta definição.'
        ],
        sectors: [
          { name: 'Lojas & Varejo', description: 'No balcão para pagamentos rápidos sem filas.', benefit: 'Economia com taxas de maquininhas de cartão.' },
          { name: 'Restaurantes & Lanchonetes', description: 'Nas mesas e comandas para fechamento de conta ágil.', benefit: 'Giro de mesas mais rápido.' },
          { name: 'Autônomos & Serviços', description: 'Em orçamentos para recebimento direto de honorários.', benefit: 'Crédito imediato na conta bancária.' },
          { name: 'Táxis & Transporte', description: 'No painel para pagamento da corrida.', benefit: 'Sem necessidade de troco.' },
          { name: 'Farmácias & Clínicas', description: 'Para cobrança higiênica e sem contato.', benefit: 'Rapidez no atendimento.' },
          { name: 'Doações & Eventos', description: 'Em cartazes para arrecadações diretas.', benefit: 'Facilita doações espontâneas.' }
        ],
        howItWorks: [
          { title: '1. Digite seu ID UPI (VPA)', description: 'Insira sua chave de recebimento (ex.: loja@okaxis).' },
          { title: '2. Nome e Valor Opcional', description: 'Defina o nome comercial e o valor da cobrança se desejar.' },
          { title: '3. Baixe e Divulgue', description: 'Exporte em SVG vetorial para placas ou PNG.' }
        ],
        useCases: [
          { title: 'Displays de Balcão em Acrílico', description: 'Suporte com "Pague com qualquer app UPI".', example: 'Comércio recebendo na hora.' },
          { title: 'Adesivos de Mesa em Restaurantes', description: 'Adesivos plastificados para pagamento na mesa.', example: 'Lanchonete com autoatendimento.' },
          { title: 'Faturas e Recibos', description: 'No rodapé com valor pré-preenchido.', example: 'Distribuidora para pagamento pontual.' },
          { title: 'Interior de Veículos', description: 'Adesivo no encosto de cabeça do táxi.', example: 'Motorista com recebimento digital.' }
        ],
        tips: [
          'Confira a VPA: Verifique se o endereço UPI foi digitado sem erros.',
          'Valor Flexível: Deixe o campo de valor vazio para o cliente digitar o total.',
          'Alto Contraste: Fundo branco facilita a leitura sob qualquer luz.',
          'Suporte Resistente: Utilize acrílico de fácil limpeza para o balcão.',
          'Faça um Teste: Realize uma transferência de teste antes de imprimir em grande escala.'
        ],
        technicalNotes: 'Padrão oficial NPCI UPI, interoperável com todos os bancos e apps de pagamento.',
        faqs: [
          { question: 'Como os clientes pagam pelo QR Code UPI?', answer: 'O cliente abre seu app de pagamento preferido (Google Pay, PhonePe, etc.), escaneia o código, insere o PIN e o dinheiro cai na sua conta na mesma hora.' },
          { question: 'Existem taxas de transação?', answer: 'Não, os pagamentos padrão UPI são totalmente livres de tarifas e mensalidades.' },
          { question: 'Posso definir um valor fixo?', answer: 'Sim, você pode definir um valor pré-determinado ou deixar o campo aberto para o cliente digitar.' },
          { question: 'Funciona com todos os apps UPI?', answer: 'Sim, o formato é universal e compatível com todos os aplicativos habilitados para UPI.' },
          { question: 'Os códigos de pagamento expiram?', answer: 'Não, são códigos estáticos que funcionam permanentemente enquanto sua chave UPI estiver ativa.' },
          { question: 'Posso colocar o logotipo da minha loja?', answer: 'Sim, envie seu logo e o sistema ajustará a correção de erros para Alto (30%).' }
        ],
        relatedTools: [
          { name: 'QR Code Link URL', slug: 'url-to-qr-code', description: 'Direcione visitantes para seu site.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Compartilhe contatos profissionais.' },
          { name: 'QR Code Avaliações Google', slug: 'google-reviews-qr-code', description: 'Ganhe avaliações 5 estrelas.' },
          { name: 'QR Code WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Inicie conversas no WhatsApp.' }
        ]
      };
    case 'it':
      return {
        slug: 'upi-qr-code-generator',
        qrTypeId: 'upi',
        title: 'Generatore QR Code UPI — Pagamenti Elettronici Istantanei',
        description: 'Crea codici QR di pagamento UPI a zero commissioni. Compatibile con Google Pay, PhonePe e Paytm. Download SVG e PNG.',
        h1: 'Generatore QR Code di Pagamento UPI',
        subheadline: 'Genera codici QR di pagamento istantaneo compatibili con tutte le app UPI come Google Pay, PhonePe, Paytm e BHIM.',
        heading: 'QR Code di Pagamento UPI',
        subheading: 'Accetta pagamenti diretti sul tuo conto bancario senza commissioni di transazione né canoni pos.',
        overviewTitle: 'Cos\'è un QR Code di Pagamento UPI?',
        overviewParagraphs: [
          'Un generatore di codici QR UPI codifica il protocollo standard di pagamento in tempo reale "upi://pay?pa=VPA&pn=Nome&am=Importo" in un codice 2D. Inquadrando il codice, il cliente apre la propria app di pagamento (Google Pay, PhonePe, Paytm) ed esegue il bonifico istantaneo.',
          'È il metodo di pagamento senza contatto più rapido ed economico per negozi, ristoranti e liberi professionisti.',
          'Download gratuito in formato vettoriale SVG per espositori da banco o PNG ad alta risoluzione.'
        ],
        sectors: [
          { name: 'Negozi & Commercio', description: 'Sul bancone cassa per pagamenti rapidi.', benefit: 'Zero commissioni e zero canoni pos.' },
          { name: 'Ristoranti & Bar', description: 'Sui tavoli e sulle ricevute per il saldo immediato.', benefit: 'Velocizza il ricambio dei tavoli.' },
          { name: 'Professionisti & Artigiani', description: 'Sulle fatture per l\'incasso diretto degli onorari.', benefit: 'Accredito istantaneo sul conto corrente.' },
          { name: 'Taxi & Trasporti', description: 'Sul cruscotto per il pagamento della corsa.', benefit: 'Nessun problema di resto in contanti.' },
          { name: 'Farmacie & Sanità', description: 'Per pagamenti igienici e senza contatto.', benefit: 'Incassi rapidi al banco.' },
          { name: 'Donazioni & Onlus', description: 'Sui cartelli informativi per contributi diretti.', benefit: 'Incentiva le donazioni spontanee.' }
        ],
        howItWorks: [
          { title: '1. Inserisci il Tuo ID UPI (VPA)', description: 'Digita il tuo indirizzo di pagamento (es. negozio@okaxis).' },
          { title: '2. Nome e Importo Opzionale', description: 'Specifica la ragione sociale e l\'eventuale importo fisso.' },
          { title: '3. Scarica e Stampa', description: 'Esporta in SVG vettoriale per espositori o PNG.' }
        ],
        useCases: [
          { title: 'Espositori da Banco in Plexiglas', description: 'Supporto con "Paga con qualsiasi app UPI".', example: 'Negozio con incassi istantanei.' },
          { title: 'Adesivi per Tavoli al Ristorante', description: 'Adesivi plastificati per pagare al tavolo.', example: 'Tavola calda self-service.' },
          { title: 'Fatture e Ricevute', description: 'Nel piè di pagina con importo preimpostato.', example: 'Fornitore per pagamenti puntuali.' },
          { title: 'Interno Veicoli Taxi', description: 'Adesivo sul poggiatesta per i passeggeri.', example: 'Taxi con pagamento digitale.' }
        ],
        tips: [
          'Verifica la VPA: Controlla che non ci siano errori nell\'indirizzo UPI.',
          'Importo Libero: Lascia vuoto il campo importo per far digitare la cifra al cliente.',
          'Contrasto Elevato: Sfondo bianco per una lettura rapida.',
          'Supporti Igienizzabili: Usa espositori in plexiglas facili da pulire.',
          'Test Preliminare: Fai un micro-pagamento di prova prima della tiratura finale.'
        ],
        technicalNotes: 'Standard ufficiale NPCI UPI, interoperabile con tutte le banche e app di pagamento.',
        faqs: [
          { question: 'Come pagano i clienti con il codice UPI?', answer: 'Il cliente apre la propria app di pagamento (Google Pay, PhonePe, ecc.), inquadra il codice, inserisce il PIN e l\'importo viene accreditato subito sul tuo conto.' },
          { question: 'Ci sono commissioni bancarie?', answer: 'No, i pagamenti UPI standard sono completamente gratuiti senza commissioni di transazione.' },
          { question: 'Posso impostare un importo fisso?', answer: 'Sì, puoi inserire un importo predefinito o lasciare il campo aperto per la digitazione libera.' },
          { question: 'Funziona con tutte le app UPI?', answer: 'Sì, lo standard è universale e compatibile con tutte le banche abilitate a UPI.' },
          { question: 'I codici QR per pagamenti scadono?', answer: 'No, i codici statici restano validi per sempre finché il tuo ID UPI è attivo.' },
          { question: 'Posso inserire il mio logo aziendale?', answer: 'Sì, carica il tuo logo e la correzione errori verrà impostata automaticamente su Alto (30%).' }
        ],
        relatedTools: [
          { name: 'QR Code Link Web', slug: 'url-to-qr-code', description: 'Indirizza al tuo sito web.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Salva i contatti completi in rubrica.' },
          { name: 'QR Code Recensioni Google', slug: 'google-reviews-qr-code', description: 'Ottieni recensioni a 5 stelle.' },
          { name: 'QR Code WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Avvia chat dirette su WhatsApp.' }
        ]
      };
    case 'hi':
      return {
        slug: 'upi-qr-code-generator',
        qrTypeId: 'upi',
        title: 'UPI पेमेंट QR कोड जेनरेटर — मुफ़्त व्यावसायिक भुगतान QR कोड',
        description: 'Google Pay, PhonePe, Paytm और BHIM के लिए शून्य-शुल्क UPI QR कोड बनाएं। वेक्टर SVG और PNG मुफ़्त डाउनलोड।',
        h1: 'UPI पेमेंट QR कोड जेनरेटर',
        subheadline: 'दुकानों और व्यवसायों के लिए शून्य-कमीशन UPI पेमेंट QR कोड बनाएं। Google Pay, PhonePe, Paytm और BHIM से सीधे बैंक खाते में भुगतान पाएं।',
        heading: 'UPI मर्चेंट पेमेंट QR कोड',
        subheading: 'बिना किसी बैंक कमीशन या महंगी स्वाइप मशीन के सीधे अपने बैंक खाते में पैसे प्राप्त करें।',
        overviewTitle: 'UPI पेमेंट QR कोड क्या है?',
        overviewParagraphs: [
          'UPI पेमेंट QR कोड आधिकारिक "upi://pay?pa=VPA&pn=नाम&am=राशि" प्रोटोकॉल को 2D बारकोड में बदल देता है। जब कोई ग्राहक अपने मोबाइल में किसी भी UPI ऐप (Google Pay, PhonePe, Paytm, BHIM या बैंक ऐप) से इसे स्कैन करता है, तो दुकानदार का नाम दिख जाता है और पिन डालते ही पैसे सीधे बैंक खाते में आ जाते हैं।',
          'यह भारत का सबसे लोकप्रिय और सुरक्षित डिजिटल पेमेंट माध्यम है। इसमें क्रेडिट/डेबिट कार्ड मशीनों की तरह कोई मासिक किराया या ट्रांजैक्शन चार्ज (MDR) नहीं कटता।',
          'काउंटर स्टैंडी और स्टिकर के लिए हाई-क्वालिटी SVG और PNG डाउनलोड बिल्कुल मुफ़्त है।'
        ],
        sectors: [
          { name: 'किराना व रिटेल दुकानें', description: 'कैश काउंटर पर बिना छुट्टे पैसों के तुरंत भुगतान के लिए।', benefit: 'कार्ड मशीन के किराए और कमीशन से मुक्ति।' },
          { name: 'रेस्तरां, ढाबा व चाय की दुकान', description: 'टेबलों और बिल काउंटर पर तुरंत पेमेंट लेने हेतु।', benefit: 'भीड़ के समय तेज़ी से बिलिंग।' },
          { name: 'डॉक्टर, क्लीनिक व मेडिकल स्टोर', description: 'फीस और दवाओं का हाइजीनिक डिजिटल भुगतान।', benefit: 'कैशलेस और सुरक्षित लेन-देन।' },
          { name: 'ऑटो, टैक्सी व परिवहन', description: 'गाड़ी में छुट्टे पैसों के झंझट के बिना किराया लेने हेतु।', benefit: 'सवारी से तुरंत बैंक में किराया।' },
          { name: 'फ्रीलांसर्स व कंसल्टेंट्स', description: 'इनवॉइस पर प्रोफेशनल फीस तुरंत मंगाने के लिए।', benefit: 'सीधे बैंक खाते में रीयल-टाइम सेटलमेंट।' },
          { name: 'मंदिर व दान समितियां', description: 'दान पेटी पर सीधे बैंक खाते में दान प्राप्त करने हेतु।', benefit: 'पारदर्शी और सुरक्षित दान संग्रह।' }
        ],
        howItWorks: [
          { title: '1. अपनी UPI ID (VPA) दर्ज करें', description: 'अपनी सही UPI ID (जैसे yourbusiness@okhdfcbank या 9876543210@upi) लिखें।' },
          { title: '2. नाम व राशि सेट करें', description: 'दुकान का नाम और यदि निश्चित रकम लेनी हो तो राशि दर्ज करें।' },
          { title: '3. डाउनलोड व प्रिंट करें', description: 'काउंटर पर लगाने के लिए वेक्टर SVG या हाई-रिज़ॉल्यूशन PNG डाउनलोड करें।' }
        ],
        useCases: [
          { title: 'दुकान का एक्रिलिक काउंटर स्टैंड', description: '"सभी UPI ऐप्स से पेमेंट स्वीकार्य है" लिखा हुआ स्टैंड।', example: 'दुकान पर तुरंत भुगतान।' },
          { title: 'रेस्टोरेंट टेबल स्टिकर', description: 'टेबल पर बैठकर सीधे पेमेंट करने हेतु।', example: 'कैफ़े टेबल QR कोड।' },
          { title: 'प्रिंटेड इनवॉइस व बिल', description: 'बिल के नीचे निश्चित राशि वाला QR कोड।', example: 'थोक व्यापारी बिलिंग कोड।' },
          { title: 'ऑटो व टैक्सी डैशबोर्ड स्टिकर', description: 'गाड़ी में सवारी के बैठने वाली सीट के सामने।', example: 'टैक्सी पेमेंट स्टीकर।' }
        ],
        tips: [
          'UPI ID की जांच करें: सुनिश्चित करें कि VPA में स्पेलिंग की कोई गलती न हो।',
          'राशि खाली छोड़ें: ग्राहकों को अपनी इच्छानुसार बिल की रकम डालने के लिए राशि फ़ील्ड खाली रखें।',
          'हाई कंट्रास्ट: डिम लाइट में भी आसानी से स्कैन होने के लिए सफ़ेद बैकग्राउंड रखें।',
          'वॉटरप्रूफ स्टैंड: काउंटर के लिए प्लास्टिक या एक्रिलिक स्टैंड का उपयोग करें।',
          'टेस्ट पेमेंट: बड़ा बोर्ड प्रिंट कराने से पहले ₹1 का टेस्ट पेमेंट करके चेक करें।'
        ],
        technicalNotes: 'NPCI UPI आधिकारिक मानक Google Pay, PhonePe, Paytm, BHIM और सभी बैंक ऐप्स के साथ पूरी तरह संगत।',
        faqs: [
          { question: 'ग्राहक UPI QR कोड से पैसे कैसे भेजते हैं?', answer: 'ग्राहक अपनी पसंदीदा UPI ऐप खोलता है, कोड को स्कैन करता है, अपना 4 या 6 अंकों का UPI पिन डालता है और पैसे तुरंत आपके बैंक में आ जाते हैं।' },
          { question: 'क्या इस पर कोई चार्ज या कमीशन कटता है?', answer: 'नहीं, सामान्य UPI पेमेंट पूरी तरह मुफ़्त है और इस पर कोई चार्ज नहीं कटता।' },
          { question: 'क्या मैं पहले से निश्चित राशि तय कर सकता हूँ?', answer: 'हाँ, आप निश्चित राशि डाल सकते हैं या इसे खाली छोड़ सकते हैं ताकि ग्राहक खुद रकम भर सके।' },
          { question: 'क्या यह Google Pay, PhonePe और Paytm सभी पर काम करता है?', answer: 'हाँ, यह नेशनल पेमेंट्स कॉर्पोरेशन ऑफ इंडिया (NPCI) के मानक पर बना है और सभी UPI ऐप्स पर काम करता है।' },
          { question: 'क्या यह पेमेंट कोड कभी एक्सपायर होता है?', answer: 'नहीं, जब तक आपकी UPI ID बैंक में चालू है, यह कोड हमेशा काम करेगा।' },
          { question: 'क्या मैं बीच में अपनी दुकान का लोगो लगा सकता हूँ?', answer: 'हाँ, लोगो लगाने पर सिस्टम एरर करेक्शन को हाई (H) पर सेट कर देगा।' }
        ],
        relatedTools: [
          { name: 'वेबसाइट URL QR जेनरेटर', slug: 'url-to-qr-code', description: 'ग्राहकों को अपनी वेबसाइट पर भेजें।' },
          { name: 'vCard विज़िटिंग कार्ड QR', slug: 'vcard-qr-code-generator', description: 'संपर्क विवरण सीधे फोनबुक में सेव कराएं।' },
          { name: 'गूगल रिव्यू QR कोड', slug: 'google-reviews-qr-code', description: 'Google Maps पर 5-स्टार रेटिंग पाएं।' },
          { name: 'WhatsApp QR जेनरेटर', slug: 'whatsapp-qr-code-generator', description: 'ग्राहकों से सीधे व्हाट्सएप चैट शुरू करें।' }
        ]
      };
    default: // 'en'
      return {
        slug: 'upi-qr-code-generator',
        qrTypeId: 'upi',
        title: 'UPI Payment QR Code Generator — Instant Zero-Fee Merchant QR',
        description: 'Generate free custom UPI payment QR codes for Google Pay, PhonePe, Paytm, and BHIM. Instant bank transfers with vector SVG & PNG export.',
        h1: 'UPI Payment QR Code Generator',
        subheadline: 'Create zero-fee instant payment QR codes compatible with all UPI apps including Google Pay, PhonePe, Paytm, and BHIM.',
        heading: 'UPI Merchant Payment QR Code',
        subheading: 'Accept direct bank-to-bank customer payments without card terminal transaction fees.',
        overviewTitle: 'What is a UPI Payment QR Code Generator?',
        overviewParagraphs: [
          'A UPI Payment QR code generator encodes the official National Payments Corporation of India (NPCI) unified payment interface URI specification ("upi://pay?pa=VPA&pn=PayeeName&am=Amount") into a scannable 2D barcode. When scanned with any mobile payment app (such as Google Pay, PhonePe, Paytm, BHIM, Cred, Amazon Pay, or mobile banking apps), the customer sees the verified merchant name and can transfer funds immediately via UPI PIN.',
          'Unlike traditional credit card POS swipe terminals that charge monthly machine rental fees and 1.5% to 3.0% merchant discount rates (MDR), standard UPI QR code transactions deposit 100% of revenue directly into your linked current or savings bank account in real-time with zero merchant deduction fees.',
          'Our generator allows you to create custom-branded UPI standees with your company name, preset transaction amounts, brand colors, and central logo placement. Export resolution-independent vector SVG files for tabletop acrylic stands, counter decals, and invoice receipts.'
        ],
        sectors: [
          { name: 'Kirana Stores & Retail Merchants', description: 'Displayed on point-of-sale checkout counters for fast, contactless payment.', benefit: 'Eliminates card swipe fees and daily cash reconciliation errors.' },
          { name: 'Restaurants, Cafes & Food Stalls', description: 'Mounted on tabletop tents and printed on dining bills for instant bill settlement.', benefit: 'Accelerates table turnaround time during peak dining rush.' },
          { name: 'Freelancers & Professional Consultants', description: 'Printed on invoice PDF footers for instant professional fee payments.', benefit: 'Provides immediate bank-to-bank settlement without payment gateway holds.' },
          { name: 'Taxis, Auto-Rickshaws & Fleet Transport', description: 'Mounted on vehicle headrests for frictionless digital fare collection.', benefit: 'Eliminates the hassle of carrying loose cash and coins.' },
          { name: 'Medical Clinics & Pharmacies', description: 'Displayed at reception checkout desks for hygienic contactless billing.', benefit: 'Ensures fast, paperless payment handling.' },
          { name: 'Charities, NGOs & Temples', description: 'Placed on donation boxes and fundraising banners for transparent donor contributions.', benefit: 'Drives spontaneous direct digital contributions.' }
        ],
        howItWorks: [
          { title: '1. Enter UPI ID (VPA)', description: 'Type your Virtual Payment Address (e.g. merchant@okhdfcbank or 9876543210@upi).' },
          { title: '2. Set Business Name & Optional Amount', description: 'Input your verified merchant name and an optional pre-filled transaction amount.' },
          { title: '3. Download & Print Counter Standee', description: 'Export print-ready Vector SVG for physical acrylic displays or high-DPI PNG.' }
        ],
        useCases: [
          { title: 'Point-of-Sale Acrylic Standees', description: 'Framed counter displays with "Pay with any UPI App" messaging.', example: 'Retail grocery shop receiving instant customer payments.' },
          { title: 'Restaurant Dining Table Decals', description: 'Laminated waterproof table stickers for table-side payment.', example: 'Cafe enabling contactless diner bill settlement.' },
          { title: 'Printed Commercial Invoices', description: 'Placed in invoice footers with the exact invoice amount pre-encoded.', example: 'Wholesale supplier streamlining client receivables.' },
          { title: 'Transit Vehicle Headrest Placards', description: 'Laminated cards placed behind driver seats for passenger fares.', example: 'City taxi driver accepting digital fares.' }
        ],
        tips: [
          'Verify UPI ID Accuracy: Double-check your VPA carefully before printing to ensure funds land in your account.',
          'Leave Amount Blank for Dynamic Totals: Omit the amount parameter so buyers can enter their exact shopping cart total.',
          'High Optical Contrast: Maintain clean dark modules on a white background for fast scanning in dim lighting.',
          'Durable Waterproof Materials: Enclose codes in sealed acrylic counter standees or laminated vinyl.',
          'Test Transaction Before Bulk Printing: Perform a test ₹1 transfer with your smartphone before ordering large-scale printing.'
        ],
        technicalNotes: 'Standards Compliance: Generates standard NPCI UPI Deep Links fully interoperable across all Indian banking apps.',
        faqs: [
          { question: 'How do customers pay using this UPI QR code?', answer: 'Customers open any UPI-enabled mobile app (Google Pay, PhonePe, Paytm, BHIM, etc.), scan your counter QR code with their camera, enter their secure UPI PIN, and the funds transfer instantly into your bank account.' },
          { question: 'Are there any transaction fees or merchant commissions?', answer: 'No. Standard peer-to-merchant UPI payments are completely free and settle in real time with zero merchant discount rates.' },
          { question: 'Can I set a fixed transaction amount inside the QR code?', answer: 'Yes! You can specify an exact payment amount (e.g. ₹500) for fixed-price products, or leave the amount blank so customers can enter the total themselves.' },
          { question: 'Does this work with all UPI apps (Google Pay, PhonePe, Paytm)?', answer: 'Yes! Because it adheres to the official NPCI interoperable URI standard, the generated QR code works across all 150+ UPI-enabled banking and payment apps in India.' },
          { question: 'Do UPI QR codes ever expire?', answer: 'No. Static UPI QR codes encode your payment address directly and will remain active permanently as long as your linked bank account and UPI ID remain open.' },
          { question: 'Can I add my business logo to the center of the QR code?', answer: 'Yes! Upload your store logo, and our generator automatically boosts error correction to Level H (30%) so the code scans flawlessly with the logo embedded.' }
        ],
        relatedTools: [
          { name: 'URL QR Generator', slug: 'url-to-qr-code', description: 'Direct visitors to your website or online store.' },
          { name: 'vCard QR Generator', slug: 'vcard-qr-code-generator', description: 'Share full contact credentials directly to address books.' },
          { name: 'Google Reviews QR', slug: 'google-reviews-qr-code', description: 'Collect 5-star customer ratings on Google Maps.' },
          { name: 'WhatsApp QR Generator', slug: 'whatsapp-qr-code-generator', description: 'Launch instant WhatsApp business conversations.' }
        ]
      };
  }
}
