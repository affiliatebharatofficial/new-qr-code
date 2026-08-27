import type { Locale } from '../config';
import type { LocalizedPageContent } from './types';

export function getEmailContent(locale: Locale): LocalizedPageContent {
  switch (locale) {
    case 'es':
      return {
        slug: 'email-qr-code-generator',
        qrTypeId: 'email',
        title: 'Generador de Código QR de Correo Electrónico — Enviar Emails con un Escaneo',
        description: 'Crea códigos QR de email con destinatario, asunto y mensaje predefinidos. Compatible con Gmail, Apple Mail y Outlook. Descarga en SVG y PNG.',
        h1: 'Generador de Código QR de Correo Electrónico',
        subheadline: 'Permite a tus clientes abrir un borrador de correo electrónico pre-redactado con un solo escaneo, sin errores de escritura.',
        heading: 'Código QR de Correo Electrónico',
        subheading: 'Automatiza consultas y solicitudes comerciales con borradores de email listos para enviar.',
        overviewTitle: '¿Qué es un Código QR de Correo Electrónico?',
        overviewParagraphs: [
          'Un código QR de correo electrónico codifica el protocolo estándar "mailto:destinatario?subject=asunto&body=cuerpo" en una matriz 2D. Al escanearlo con la cámara del móvil, el dispositivo abre inmediatamente la aplicación de correo predeterminada (Gmail, Apple Mail, Outlook) con la dirección de destino, el asunto y la plantilla del mensaje ya completados.',
          'Escribir a mano direcciones de email largas suele generar fallos de entrega por erratas. Un código QR elimina cualquier error tipográfico y guía al usuario con una estructura de consulta clara.',
          'Descarga gratis en formato vectorial SVG para imprenta o PNG de alta definición.'
        ],
        sectors: [
          { name: 'Soporte y Garantías', description: 'En manuales de producto para reportar incidencias técnicas.', benefit: 'Estandariza los datos recibidos del cliente.' },
          { name: 'Inmobiliarias y Promotoras', description: 'En carteles de venta con asunto del tipo "Información sobre vivienda Ref #102".', benefit: 'Identifica de inmediato el interés del cliente.' },
          { name: 'Departamentos de Selección y RRHH', description: 'En ofertas de empleo para recibir candidaturas y currículums.', benefit: 'Organiza las solicitudes entrantes.' },
          { name: 'Eventos y Congresos', description: 'En folletos para solicitar certificados de asistencia.', benefit: 'Ahorra tiempo de gestión administrativa.' },
          { name: 'Proveedores B2B y Mayoristas', description: 'En catálogos impresos para solicitar presupuestos de producto.', benefit: 'Acelera el proceso de cotización.' },
          { name: 'Facturación y Administración', description: 'En albaranes para enviar facturas electrónicas.', benefit: 'Agiliza la gestión de cobros.' }
        ],
        howItWorks: [
          { title: '1. Introduce la Dirección de Email', description: 'Escribe tu correo de destino (ej. info@tuempresa.es).' },
          { title: '2. Define Asunto y Mensaje', description: 'Añade una plantilla con los datos que necesitas que el usuario complete.' },
          { title: '3. Descarga e Imprime', description: 'Exporta en SVG vectorial o PNG de alta resolución.' }
        ],
        useCases: [
          { title: 'Manuales de Usuario', description: 'Impreso en la sección de servicio técnico para consultas de garantía.', example: 'Fabricante de electrodomésticos.' },
          { title: 'Carteles de Ofertas de Empleo', description: 'En tablones universitarios para recepción de CVs.', example: 'Agencia de talento recibiendo candidatos.' },
          { title: 'Catálogos de Productos', description: 'Junto a cada referencia para pedir tarifa de precios.', example: 'Distribuidor industrial.' },
          { title: 'Tarjetas de Presupuesto', description: 'Para confirmación formal de presupuestos aceptados.', example: 'Empresa de reformas.' }
        ],
        tips: [
          'Email Válido: Asegúrate de que la dirección no contenga espacios.',
          'Asuntos Claros: Utiliza asuntos concisos que faciliten el filtrado en tu bandeja de entrada.',
          'Alto Contraste: Módulos negros sobre fondo blanco para escaneo instantáneo.',
          'Tamaño Físico: Mínimo 20 x 20 mm en documentos impresos.',
          'Prueba en Diversas Apps: Comprueba la compatibilidad con Gmail y Apple Mail.'
        ],
        technicalNotes: 'Formato estándar mailto compatible con todos los clientes de correo.',
        faqs: [
          { question: '¿Cómo funciona el código QR de email al escanearlo?', answer: 'La cámara del móvil detecta el protocolo mailto y abre la app de correo con destinatario, asunto y mensaje listos para enviar.' },
          { question: '¿Puede el usuario editar el mensaje antes de enviarlo?', answer: 'Sí, el usuario puede revisar, completar o modificar cualquier parte del texto en su app de correo.' },
          { question: '¿Funciona con Gmail y Outlook?', answer: 'Sí, funciona con cualquier aplicación de correo configurada en el smartphone.' },
          { question: '¿Puedo incluir múltiples destinatarios?', answer: 'Sí, puedes añadir direcciones adicionales separadas por coma en el campo de destinatario.' },
          { question: '¿Tienen fecha de caducidad?', answer: 'No, son códigos estáticos que funcionan permanentemente sin suscripción.' },
          { question: '¿Se almacenan mis correos en vuestros servidores?', answer: 'No, todo se procesa en tu navegador de manera 100% privada.' }
        ],
        relatedTools: [
          { name: 'QR de Contacto vCard', slug: 'vcard-qr-code-generator', description: 'Guarda tarjetas de visita completas en la agenda.' },
          { name: 'QR de Llamada Telefónica', slug: 'phone-qr-code-generator', description: 'Llamadas automáticas con un toque.' },
          { name: 'QR de WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Inicia chats directos en WhatsApp.' },
          { name: 'QR de Enlace Web', slug: 'url-to-qr-code', description: 'Dirige tráfico a tu sitio web.' }
        ]
      };
    case 'de':
      return {
        slug: 'email-qr-code-generator',
        qrTypeId: 'email',
        title: 'E-Mail QR Code Generator — E-Mails per Scan versenden',
        description: 'Erstellen Sie E-Mail QR-Codes mit Empfänger, Betreff und Vorlagentext. Kompatibel mit Apple Mail, Gmail & Outlook. Vektor-SVG & PNG Download.',
        h1: 'E-Mail QR Code Generator',
        subheadline: 'Lassen Sie Kunden mit einem einzigen Scan vorbereitete E-Mail-Entwürfe öffnen – fehlerfrei und ohne Tippaufwand.',
        heading: 'E-Mail-QR-Code',
        subheading: 'Automatisieren Sie Kundenanfragen mit vorformulierten E-Mail-Vorlagen.',
        overviewTitle: 'Was ist ein E-Mail QR Code Generator?',
        overviewParagraphs: [
          'Ein E-Mail QR Code Generator kodiert den offiziellen Standard "mailto:Empfänger?subject=Betreff&body=Text" in einen optischen 2D-Barcode. Beim Scannen mit der Handykamera öffnet das Smartphone sofort die Standard-Mail-App (Gmail, Apple Mail, Outlook) mit vorausgefüllter Adresse, Betreffzeile und Text.',
          'Lange E-Mail-Adressen führen beim manuellen Abtippen oft zu Fehlern. Ein QR-Code schließt Tippfehler aus und liefert Ihnen strukturierte Anfragen.',
          'Kostenloser Download in Vektor-SVG für Druckereien oder hochauflösendem PNG.'
        ],
        sectors: [
          { name: 'Kundendienst & Support', description: 'In Handbüchern für schnelle Garantieanfragen.', benefit: 'Standardisiert eingehende Kundenanfragen.' },
          { name: 'Immobilienmakler', description: 'Auf Schildern mit Betreff "Anfrage zu Immobilie #12".', benefit: 'Schnelle Zuordnung der Objektanfragen.' },
          { name: 'Personal & Recruiting', description: 'Auf Stellenanzeigen für Bewerbungseingänge.', benefit: 'Erleichtert Interessenten die Bewerbung.' },
          { name: 'Events & Messen', description: 'Auf Flyern zum Anfordern von Teilnahmebestätigungen.', benefit: 'Spart administrative Bearbeitungszeit.' },
          { name: 'B2B-Großhandel', description: 'In Katalogen für schnelle Preisangebote.', benefit: 'Beschleunigt den Angebotsprozess.' },
          { name: 'Buchhaltung & Rechnungen', description: 'Auf Lieferscheinen für den Rechnungsempfang.', benefit: 'Schnellere Zahlungsabwicklung.' }
        ],
        howItWorks: [
          { title: '1. E-Mail-Adresse Eingeben', description: 'Zieladresse (z. B. kontakt@ihrefirma.de) eintragen.' },
          { title: '2. Betreff & Nachricht Definieren', description: 'Betreffzeile und optionale Vorlage für den Kunden formulieren.' },
          { title: '3. Herunterladen & Drucken', description: 'Als Vektor-SVG für Drucksachen oder PNG exportieren.' }
        ],
        useCases: [
          { title: 'Bedienungsanleitungen', description: 'Aufgedruckt für schnellen Supportkontakt.', example: 'Elektronikhersteller mit Service-Code.' },
          { title: 'Stellenausschreibungen', description: 'Auf Plakaten an Universitäten.', example: 'Agentur sucht Bewerber.' },
          { title: 'Produktkataloge', description: 'Neben Artikeln zur Anfrage von Händlerpreisen.', example: 'Industrieausrüster.' },
          { title: 'Angebotsunterlagen', description: 'Zur formalen Bestätigung von Angeboten.', example: 'Handwerksbetrieb.' }
        ],
        tips: [
          'Gültige Adresse: Sicherstellen, dass keine Leerzeichen enthalten sind.',
          'Präziser Betreff: Hilft beim automatischen Filtern im Posteingang.',
          'Hoher Kontrast: Schwarze Punkte auf weißem Grund für schnelles Scannen.',
          'Mindestgröße: Mindestens 20 x 20 mm auf Drucksachen einhalten.',
          'App-Test: Vor dem Seriendruck mit Apple Mail und Gmail testen.'
        ],
        technicalNotes: 'Standardmäßiges mailto-Format für alle mobilen Mail-Clients.',
        faqs: [
          { question: 'Wie funktioniert der E-Mail QR-Code beim Scannen?', answer: 'Die Handykamera erkennt das mailto-Protokoll und öffnet die E-Mail-App mit vorausgefülltem Empfänger, Betreff und Text.' },
          { question: 'Kann der Absender den Text noch bearbeiten?', answer: 'Ja, der Nutzer kann vor dem Absenden alle Felder in seiner Mail-App anpassen.' },
          { question: 'Funktioniert das mit Gmail und Outlook?', answer: 'Ja, es funktioniert mit allen auf dem Smartphone eingerichteten Mail-Programmen.' },
          { question: 'Kann ich mehrere Empfänger angeben?', answer: 'Ja, Sie können mehrere E-Mail-Adressen durch Kommas getrennt eintragen.' },
          { question: 'Laufen diese QR-Codes ab?', answer: 'Nein, die statischen Codes sind dauerhaft und ohne Zusatzkosten gültig.' },
          { question: 'Werden meine Daten gespeichert?', answer: 'Nein, die Erstellung erfolgt lokal im Browser ohne Speicherung auf fremden Servern.' }
        ],
        relatedTools: [
          { name: 'vCard Visitenkarte', slug: 'vcard-qr-code-generator', description: 'Vollständige Kontaktdaten im Adressbuch speichern.' },
          { name: 'Telefon QR Generator', slug: 'phone-qr-code-generator', description: 'Direkte Sprachanrufe per Klick.' },
          { name: 'WhatsApp QR Code', slug: 'whatsapp-qr-code-generator', description: 'Kundenchats direkt auf WhatsApp starten.' },
          { name: 'Weblink QR Generator', slug: 'url-to-qr-code', description: 'Besucher auf Ihre Website weiterleiten.' }
        ]
      };
    case 'fr':
      return {
        slug: 'email-qr-code-generator',
        qrTypeId: 'email',
        title: 'Générateur de QR Code E-mail — Envoyer des Courriels en 1 Scan',
        description: 'Créez des QR codes email avec destinataire, objet et message pré-rédigés. Compatible Gmail, Apple Mail et Outlook. Téléchargement SVG et PNG.',
        h1: 'Générateur de QR Code E-mail',
        subheadline: 'Permettez à vos clients d\'ouvrir un e-mail pré-rempli d\'un simple scan, sans aucune faute de frappe.',
        heading: 'QR Code E-mail',
        subheading: 'Automatisez vos demandes de renseignements grâce à des modèles de courriels prêts à l\'envoi.',
        overviewTitle: 'Qu\'est-ce qu\'un QR Code E-mail ?',
        overviewParagraphs: [
          'Un générateur de QR code e-mail encode le protocole officiel "mailto:destinataire?subject=objet&body=message" dans un code 2D. En scannant le code, le smartphone ouvre immédiatement l\'application de messagerie par défaut (Gmail, Apple Mail, Outlook) avec tous les champs pré-remplis.',
          'La saisie manuelle d\'adresses longues provoque souvent des erreurs d\'envoi. Un QR code garantit une transmission sans faute et structure les demandes reçues.',
          'Téléchargement gratuit en format vectoriel SVG pour l\'imprimerie ou PNG haute définition.'
        ],
        sectors: [
          { name: 'Support & SAV', description: 'Dans les notices pour déclarer un problème sous garantie.', benefit: 'Standardise les données transmises par le client.' },
          { name: 'Agences Immobilières', description: 'Sur les panneaux de vente avec référence du bien en objet.', benefit: 'Identification immédiate du bien recherché.' },
          { name: 'Recrutement & RH', description: 'Sur les offres d\'emploi pour postuler en direct.', benefit: 'Facilite la réception des candidatures.' },
          { name: 'Événements & Salons', description: 'Sur les dépliants pour demander une attestation de présence.', benefit: 'Gain de temps administratif.' },
          { name: 'Grossistes & B2B', description: 'Dans les catalogues pour demander un devis de produit.', benefit: 'Accélère l\'envoi des propositions commerciales.' },
          { name: 'Comptabilité & Facturation', description: 'Sur les bons de livraison pour l\'envoi des factures.', benefit: 'Traitement fluide des règlements.' }
        ],
        howItWorks: [
          { title: '1. Saisissez l\'Adresse Email', description: 'Indiquez l\'adresse de destination (ex. contact@votreentreprise.fr).' },
          { title: '2. Définissez Objet et Message', description: 'Préparez l\'objet et le texte pré-rempli pour le client.' },
          { title: '3. Téléchargez et Imprimez', description: 'Exportez en SVG vectoriel pour impression ou PNG.' }
        ],
        useCases: [
          { title: 'Manuels d\'Utilisation', description: 'Section support pour contacter le service technique.', example: 'Fabricant d\'appareils électroniques.' },
          { title: 'Affiches de Recrutement', description: 'Dans les universités pour recevoir des CV.', example: 'Cabinet de conseil en recrutement.' },
          { title: 'Catalogues Produits', description: 'À côté des références pour demander les tarifs.', example: 'Fournisseur industriel.' },
          { title: 'Bons de Commande', description: 'Pour confirmation rapide de devis signés.', example: 'Artisan du bâtiment.' }
        ],
        tips: [
          'Adresse Valide : Vérifiez l\'absence d\'espaces dans l\'adresse.',
          'Objet Précis : Facilite le tri automatique dans votre boîte de réception.',
          'Contraste Net : Points noirs sur fond blanc pour un scan rapide.',
          'Taille Minimale : Au moins 20 x 20 mm sur documents imprimés.',
          'Testez sur Mobile : Vérification sur Apple Mail et Gmail.'
        ],
        technicalNotes: 'Protocole mailto standard supporté par tous les clients de messagerie.',
        faqs: [
          { question: 'Que se passe-t-il lors du scan du QR code e-mail ?', answer: 'Le smartphone ouvre l\'application de messagerie avec l\'adresse, l\'objet et le texte pré-remplis prêts à être envoyés.' },
          { question: 'L\'expéditeur peut-il modifier le texte avant envoi ?', answer: 'Oui, l\'utilisateur peut compléter ou modifier le texte directement dans son application.' },
          { question: 'Est-ce compatible avec Gmail et Outlook ?', answer: 'Oui, parfaitement compatible avec toutes les applications de courriel installées sur mobile.' },
          { question: 'Puis-je indiquer plusieurs destinataires ?', answer: 'Oui, séparez les adresses par des virgules dans le champ destinataire.' },
          { question: 'Ces QR codes expirent-ils ?', answer: 'Non, les codes statiques sont permanents sans aucun frais.' },
          { question: 'Mes données sont-elles enregistrées ?', answer: 'Non, tout le traitement se fait localement dans votre navigateur.' }
        ],
        relatedTools: [
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Enregistrez vos coordonnées complètes.' },
          { name: 'QR Code Appel', slug: 'phone-qr-code-generator', description: 'Appels vocaux directs d\'un scan.' },
          { name: 'QR Code WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Démarrez des conversations WhatsApp.' },
          { name: 'QR Code Lien Web', slug: 'url-to-qr-code', description: 'Redirigez vers votre site web.' }
        ]
      };
    case 'pt':
      return {
        slug: 'email-qr-code-generator',
        qrTypeId: 'email',
        title: 'Gerador de QR Code de E-mail — Enviar E-mails com 1 Scan',
        description: 'Crie QR Codes de e-mail com destinatário, assunto e mensagem pré-definidos. Compatível com Gmail, Apple Mail e Outlook. Download em SVG e PNG.',
        h1: 'Gerador de QR Code de E-mail',
        subheadline: 'Permita que clientes abram um e-mail pré-preenchido com um único scan, sem erros de digitação.',
        heading: 'QR Code de E-mail',
        subheading: 'Automatize solicitações e orçamentos com modelos de e-mail prontos para envio.',
        overviewTitle: 'O que é um QR Code de E-mail?',
        overviewParagraphs: [
          'Um gerador de QR Code de e-mail codifica o padrão "mailto:destinatário?subject=assunto&body=mensagem" em um código 2D. Ao escanear, o celular abre o aplicativo de e-mail padrão (Gmail, Apple Mail, Outlook) com o endereço de destino, assunto e mensagem preenchidos.',
          'Digitar e-mails compridos manualmente gera erros frequentes. O QR Code elimina erros de digitação e padroniza as mensagens recebidas.',
          'Download gratuito em SVG vetorial para gráficas ou PNG em alta definição.'
        ],
        sectors: [
          { name: 'Suporte & Assistência', description: 'Em manuais para solicitar acionamento de garantia.', benefit: 'Padroniza as informações recebidas dos clientes.' },
          { name: 'Imobiliárias', description: 'Em placas de venda com o código do imóvel no assunto.', benefit: 'Identificação imediata do interesse do cliente.' },
          { name: 'RH & Vagas de Emprego', description: 'Em anúncios para recebimento direto de currículos.', benefit: 'Facilita o envio de candidaturas.' },
          { name: 'Eventos & Feiras', description: 'Em folhetos para solicitação de certificados.', benefit: 'Agilidade no atendimento administrativo.' },
          { name: 'Atacado & Distribuidores', description: 'Em catálogos para solicitação de tabelas de preços.', benefit: 'Acelera orçamentos comerciais.' },
          { name: 'Financeiro & Faturamento', description: 'Em notas de entrega para envio de comprovantes.', benefit: 'Agilidade na gestão financeira.' }
        ],
        howItWorks: [
          { title: '1. Digite o E-mail', description: 'Insira o endereço de destino (ex.: contato@suaempresa.com.br).' },
          { title: '2. Defina Assunto e Mensagem', description: 'Crie uma estrutura pronta para o cliente preencher.' },
          { title: '3. Baixe e Divulgue', description: 'Exporte em SVG vetorial para impressão ou PNG.' }
        ],
        useCases: [
          { title: 'Manuais de Produtos', description: 'Para solicitação de assistência técnica autorizada.', example: 'Fabricante de eletrodomésticos.' },
          { title: 'Cartazes de Vagas', description: 'Em murais universitários para envio de CV.', example: 'Agência de estágios.' },
          { title: 'Catálogos de Produtos', description: 'Ao lado de cada código para cotação rápida.', example: 'Distribuidora industrial.' },
          { title: 'Propostas Comerciais', description: 'Para formalização de aceite de contratos.', example: 'Prestador de serviços.' }
        ],
        tips: [
          'E-mail Válido: Certifique-se de que não haja espaços no endereço.',
          'Assunto Claro: Facilita a filtragem automática na sua caixa de entrada.',
          'Alto Contraste: Módulos pretos sobre fundo branco para leitura rápida.',
          'Tamanho Mínimo: Pelo menos 20 x 20 mm em materiais impressos.',
          'Teste no Celular: Verifique o funcionamento no Gmail e Apple Mail.'
        ],
        technicalNotes: 'Protocolo padrão mailto compatível com todos os apps de e-mail.',
        faqs: [
          { question: 'Como o QR Code de e-mail funciona ao ser lido?', answer: 'A câmera reconhece o código e abre o app de e-mail do celular com destinatário, assunto e texto prontos para envio.' },
          { question: 'O cliente pode alterar o texto antes de enviar?', answer: 'Sim, ele pode revisar e preencher dados adicionais diretamente no aplicativo de e-mail.' },
          { question: 'Funciona com Gmail e Outlook?', answer: 'Sim, funciona com qualquer aplicativo de e-mail configurado no celular.' },
          { question: 'Posso colocar mais de um e-mail?', answer: 'Sim, você pode separar múltiplos endereços por vírgula no campo destinatário.' },
          { question: 'Os códigos de e-mail expiram?', answer: 'Não, são códigos estáticos que continuam funcionando permanentemente.' },
          { question: 'Meus dados ficam salvos?', answer: 'Não, todo o processo ocorre localmente no seu navegador de forma 100% privada.' }
        ],
        relatedTools: [
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Salve contatos completos na agenda.' },
          { name: 'QR Code de Chamada', slug: 'phone-qr-code-generator', description: 'Disque números diretamente.' },
          { name: 'QR Code WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Inicie conversas no WhatsApp.' },
          { name: 'QR Code Link URL', slug: 'url-to-qr-code', description: 'Direcione visitantes para seu site.' }
        ]
      };
    case 'it':
      return {
        slug: 'email-qr-code-generator',
        qrTypeId: 'email',
        title: 'Generatore QR Code Email — Inviare Email con una Scansione',
        description: 'Crea codici QR per email con destinatario, oggetto e testo preimpostati. Compatibile con Apple Mail, Gmail e Outlook. Download in SVG e PNG.',
        h1: 'Generatore QR Code Email',
        subheadline: 'Permetti ai clienti di aprire una bozza di email precompilata con una sola scansione, senza errori di battitura.',
        heading: 'QR Code per Email',
        subheading: 'Automatizza le richieste commerciali con modelli di email pronti per l\'invio.',
        overviewTitle: 'Cos\'è un QR Code per Email?',
        overviewParagraphs: [
          'Un generatore di codici QR per email codifica il protocollo standard "mailto:destinatario?subject=oggetto&body=testo" in un codice 2D. Inquadrando il codice, lo smartphone apre immediatamente l\'app di posta predefinita (Gmail, Apple Mail, Outlook) con l\'indirizzo, l\'oggetto e il corpo del messaggio già inseriti.',
          'Digitare indirizzi email complessi a mano porta spesso a errori di recapito. Un codice QR garantisce la massima precisione e struttura le richieste in arrivo.',
          'Download gratuito in formato vettoriale SVG per la tipografia o PNG ad alta risoluzione.'
        ],
        sectors: [
          { name: 'Assistenza & Garanzie', description: 'Nei manuali di prodotto per segnalare guasti.', benefit: 'Standardizza i dati inviati dal cliente.' },
          { name: 'Agenzie Immobiliari', description: 'Sui cartelli di vendita con codice immobile nell\'oggetto.', benefit: 'Identificazione immediata dell\'immobile richiesto.' },
          { name: 'Risorse Umane & Lavoro', description: 'Sugli annunci di lavoro per inviare la candidatura.', benefit: 'Facilita la raccolta dei CV.' },
          { name: 'Eventi & Fiere', description: 'Sui volantini per richiedere attestati di partecipazione.', benefit: 'Risparmio di tempo per la segreteria.' },
          { name: 'Commercio B2B & Grossisti', description: 'Nei cataloghi per richiedere listini dedicati.', benefit: 'Velocizza la stesura dei preventivi.' },
          { name: 'Amministrazione & Fatturazione', description: 'Sulle bolle di consegna per inviare le fatture.', benefit: 'Gestione contabile più rapida.' }
        ],
        howItWorks: [
          { title: '1. Inserisci l\'Indirizzo Email', description: 'Digita l\'email di destinazione (es. info@tuosito.it).' },
          { title: '2. Definisci Oggetto e Testo', description: 'Imposta l\'oggetto e il testo precompilato per il cliente.' },
          { title: '3. Scarica e Stampa', description: 'Esporta in SVG vettoriale per la stampa o PNG.' }
        ],
        useCases: [
          { title: 'Manuali di Istruzioni', description: 'Nella sezione assistenza per richieste in garanzia.', example: 'Produttore di elettronica.' },
          { title: 'Bacheche Offerte di Lavoro', description: 'Nelle università per la ricezione di CV.', example: 'Agenzia di selezione del personale.' },
          { title: 'Cataloghi di Prodotti', description: 'Accanto a ciascun articolo per richiedere un\'offerta.', example: 'Fornitore industriale.' },
          { title: 'Conferme di Preventivo', description: 'Per l\'accettazione formale dei contratti.', example: 'Impresa artigiana.' }
        ],
        tips: [
          'Email Valida: Controlla che non ci siano spazi nell\'indirizzo.',
          'Oggetto Chiaro: Facilita il filtraggio automatico nella posta in arrivo.',
          'Contrasto Elevato: Moduli neri su sfondo bianco per una scansione fulminea.',
          'Dimensioni Minime: Almeno 20 x 20 mm sui documenti stampati.',
          'Test da Smartphone: Verifica con Apple Mail e Gmail prima della stampa.'
        ],
        technicalNotes: 'Protocollo mailto pienamente supportato da tutti i client di posta.',
        faqs: [
          { question: 'Cosa accade quando si scansiona il codice QR email?', answer: 'Lo smartphone apre l\'applicazione di posta con destinatario, oggetto e testo precompilati pronti per essere inviati.' },
          { question: 'Il cliente può modificare il testo prima dell\'invio?', answer: 'Sì, l\'utente può completare o modificare qualsiasi parte del messaggio nella propria app.' },
          { question: 'Funziona con Gmail e Outlook?', answer: 'Sì, è compatibile con tutte le applicazioni di posta installate sul dispositivo mobile.' },
          { question: 'Posso inserire più destinatari?', answer: 'Sì, puoi separare più indirizzi con una virgola nel campo destinatario.' },
          { question: 'I codici QR email hanno una scadenza?', answer: 'No, sono codici statici validi per sempre senza alcun canone.' },
          { question: 'I miei dati vengono registrati sui server?', answer: 'No, la generazione avviene in locale nel tuo browser in totale riservatezza.' }
        ],
        relatedTools: [
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Salva i contatti completi in rubrica.' },
          { name: 'QR Code Chiamata', slug: 'phone-qr-code-generator', description: 'Avvia chiamate vocali istantanee.' },
          { name: 'QR Code WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Avvia chat dirette su WhatsApp.' },
          { name: 'QR Code Link Web', slug: 'url-to-qr-code', description: 'Indirizza al tuo sito web.' }
        ]
      };
    case 'hi':
      return {
        slug: 'email-qr-code-generator',
        qrTypeId: 'email',
        title: 'ईमेल QR कोड जेनरेटर — एक स्कैन में ईमेल ड्राफ्ट भेजें',
        description: 'ईमेल पता, विषय और संदेश के साथ ईमेल QR कोड बनाएं। Gmail, Apple Mail और Outlook के साथ संगत। मुफ़्त डाउनलोड।',
        h1: 'ईमेल QR कोड जेनरेटर',
        subheadline: 'ग्राहकों को बिना स्पेलिंग गलती के एक स्कैन में तैयार ईमेल ड्राफ्ट खोलने की सुविधा दें।',
        heading: 'ईमेल QR कोड',
        subheading: 'तैयार ईमेल टेम्पलेट्स से व्यावसायिक पूछताछ और कोटेशन प्रक्रिया को स्वचालित करें।',
        overviewTitle: 'ईमेल QR कोड क्या है?',
        overviewParagraphs: [
          'ईमेल QR कोड आधिकारिक "mailto:ईमेल?subject=विषय&body=संदेश" प्रोटोकॉल को 2D बारकोड में बदल देता है। जब कोई इसे फोन के कैमरे से स्कैन करता है, तो मोबाइल की डिफ़ॉल्ट ईमेल ऐप (Gmail, Apple Mail, Outlook) अपने आप खुल जाती है जिसमें ईमेल पता, विषय और संदेश पहले से टाइप मिलते हैं।',
          'लंबे ईमेल पते को हाथ से टाइप करने में स्पेलिंग की गलतियाँ हो जाती हैं जिससे ईमेल बाउंस हो जाते हैं। QR कोड से टाइपिंग की कोई झंझट नहीं रहती।',
          'प्रिंटिंग के लिए वेक्टर SVG और स्क्रीन के लिए PNG मुफ़्त डाउनलोड करें।'
        ],
        sectors: [
          { name: 'कस्टमर सपोर्ट व वारंटी', description: 'वारंटी क्लेम और तकनीकी सहायता के लिए प्रोडक्ट मैन्युअल पर लगाएं।', benefit: 'ग्राहकों से प्राप्त डेटा को व्यवस्थित रखता है।' },
          { name: 'रियल एस्टेट ब्रोकर्स', description: 'बिक्री बोर्ड पर प्रॉपर्टी आईडी विषय के साथ लगाएं।', benefit: 'पूछताछ की तुरंत पहचान होती है।' },
          { name: 'एचआर व नौकरी भर्ती', description: 'जॉब पोस्टर्स पर रिज्यूमे मंगाने के लिए।', benefit: 'उम्मीदवारों के आवेदन प्राप्त करना आसान।' },
          { name: 'कॉन्फ़्रेंस व इवेंट्स', description: 'पार्टिसिपेशन सर्टिफिकेट मांगने के लिए।', benefit: 'प्रशासनिक समय की बचत।' },
          { name: 'बी2बी होलसेलर्स', description: 'कैटलॉग में उत्पाद कोटेशन मंगाने हेतु।', benefit: 'कोटेशन देने की प्रक्रिया को तेज़ बनाता है।' },
          { name: 'बिलिंग व अकाउंट्स', description: 'डिलीवरी चालान पर इनवॉइस मंगाने हेतु।', benefit: 'भुगतान और बिलिंग में तेजी।' }
        ],
        howItWorks: [
          { title: '1. ईमेल पता दर्ज करें', description: 'अपना ईमेल पता (जैसे info@yourcompany.com) लिखें।' },
          { title: '2. विषय व संदेश सेट करें', description: 'ईमेल का विषय और तैयार संदेश लिखें।' },
          { title: '3. डाउनलोड व प्रिंट करें', description: 'वेक्टर SVG या हाई-रिज़ॉल्यूशन PNG डाउनलोड करें।' }
        ],
        useCases: [
          { title: 'प्रोडक्ट यूजर मैन्युअल', description: 'वारंटी सहायता अनुभाग में प्रिंट करने हेतु।', example: 'इलेक्ट्रॉनिक्स कंपनी सर्विस कोड।' },
          { title: 'जॉब वेकेंसी पोस्टर्स', description: 'कॉलेजों में सीवी मंगाने वाले नोटिस बोर्ड पर।', example: 'रिक्रूटमेंट एजेंसी जॉब कोड।' },
          { title: 'इंडस्ट्रियल कैटलॉग्स', description: 'प्रोडक्ट के सामने रेट लिस्ट मंगाने का कोड।', example: 'थोक सप्लायर कैटलॉग।' },
          { title: 'सर्विस कोटेशन फॉर्म', description: 'काम की पुष्टि के लिए औपचारिक ईमेल ड्राफ्ट।', example: 'कॉन्ट्रैक्टर सर्विस फॉर्म।' }
        ],
        tips: [
          'सही ईमेल दर्ज करें: सुनिश्चित करें कि ईमेल पते में कोई स्पेस न हो।',
          'स्पष्ट विषय लिखें: इनबॉक्स में ईमेल छांटने में आसानी होती है।',
          'हाई कंट्रास्ट: सफ़ेद बैकग्राउंड पर गहरे काले डॉट्स रखें।',
          'न्यूनतम साइज़: कागज़ पर कम से कम 20 x 20 मिमी आकार रखें।',
          'मोबाइल से जांच: प्रिंट से पहले Gmail और Apple Mail में चेक करें।'
        ],
        technicalNotes: 'मानक mailto प्रोटोकॉल सभी मोबाइल ईमेल ऐप्स द्वारा समर्थित।',
        faqs: [
          { question: 'स्कैन करने पर ईमेल QR कोड कैसे काम करता है?', answer: 'कैमरे से स्कैन करते ही फोन की ईमेल ऐप अपने आप खुल जाती है जिसमें ईमेल पता, विषय और मैसेज पहले से तैयार मिलते हैं।' },
          { question: 'क्या भेजने वाला भेजने से पहले मैसेज बदल सकता है?', answer: 'हाँ, यूजर अपनी ईमेल ऐप में कोई भी जानकारी जोड़ या बदल सकता है।' },
          { question: 'क्या यह Gmail और Outlook पर काम करता है?', answer: 'हाँ, यह मोबाइल में इंस्टॉल किसी भी ईमेल ऐप पर काम करता है।' },
          { question: 'क्या मैं कई ईमेल पते जोड़ सकता हूँ?', answer: 'हाँ, आप कॉमा (,) लगाकर एक से अधिक ईमेल पते लिख सकते हैं।' },
          { question: 'क्या यह QR कोड एक्सपायर होता है?', answer: 'नहीं, यह स्टैटिक कोड हमेशा सक्रिय रहता है।' },
          { question: 'क्या मेरा डेटा सुरक्षित है?', answer: 'हाँ, कोड पूरी तरह आपके ब्राउज़र में बनता है और किसी सर्वर पर स्टोर नहीं होता।' }
        ],
        relatedTools: [
          { name: 'vCard विज़िटिंग कार्ड QR', slug: 'vcard-qr-code-generator', description: 'संपर्क विवरण सीधे फोनबुक में सेव कराएं।' },
          { name: 'फ़ोन कॉल QR जेनरेटर', slug: 'phone-qr-code-generator', description: 'एक स्कैन में सीधे कॉल मिलाएं।' },
          { name: 'WhatsApp QR जेनरेटर', slug: 'whatsapp-qr-code-generator', description: 'ग्राहकों से सीधे व्हाट्सएप चैट शुरू करें।' },
          { name: 'वेबसाइट URL QR जेनरेटर', slug: 'url-to-qr-code', description: 'ग्राहकों को अपनी वेबसाइट पर भेजें।' }
        ]
      };
    default: // 'en'
      return {
        slug: 'email-qr-code-generator',
        qrTypeId: 'email',
        title: 'Email QR Code Generator — Send Pre-Composed Emails with One Scan',
        description: 'Generate Email QR codes with pre-filled recipient, subject line, and body template. Compatible with Gmail, Apple Mail, and Outlook. Free SVG & PNG.',
        h1: 'Email QR Code Generator',
        subheadline: 'Let customers open a pre-composed email draft with a single camera scan—eliminating typos and manual entry.',
        heading: 'Email QR Code',
        subheading: 'Automate business inquiries, support tickets, and RSVPs with ready-to-send email drafts.',
        overviewTitle: 'What is an Email QR Code Generator?',
        overviewParagraphs: [
          'An Email QR code generator encodes standard "mailto:recipient?subject=subject&body=body" URI protocols into an optical 2D barcode. When scanned using any smartphone camera, the operating system launches the user’s default mobile email client (such as Apple Mail, Gmail, Samsung Email, or Microsoft Outlook) with the destination address, subject line, and body template pre-filled.',
          'Manually typing long alphanumeric email addresses on a mobile touchscreen is error-prone, resulting in failed deliveries and lost customer leads. An Email QR code completely eliminates transcription typos, standardizes the incoming email subject line for easy inbox filtering, and guides customers with a structured inquiry template.',
          'Our generator operates 100% client-side in your browser for complete privacy. You can customize colors, embed your brand logo, and download print-ready vector SVG files for physical signage or high-DPI PNG images for digital assets.'
        ],
        sectors: [
          { name: 'Customer Support & Helpdesks', description: 'Printed in warranty booklets and user manuals to report technical issues.', benefit: 'Standardizes incoming customer support ticket details.' },
          { name: 'Real Estate Brokers & Listings', description: 'Yard signs and flyers with subject lines like "Inquiry on Property Ref #104".', benefit: 'Enables instant identification of prospective buyers.' },
          { name: 'Recruiting & HR Talent Teams', description: 'Job fair banners allowing candidates to submit resumes directly.', benefit: 'Simplifies candidate application workflows.' },
          { name: 'Conference & Event Organizers', description: 'Printed on event agendas for requesting certificates of attendance.', benefit: 'Reduces post-event administrative overhead.' },
          { name: 'Wholesale B2B Suppliers', description: 'Printed on product catalogs to request wholesale pricing tier sheets.', benefit: 'Accelerates the commercial sales quote cycle.' },
          { name: 'Accounting & Billing Teams', description: 'Printed on packing slips for submitting electronic invoices.', benefit: 'Streamlines vendor accounts receivable communication.' }
        ],
        howItWorks: [
          { title: '1. Enter Destination Email', description: 'Input your target email address (e.g., support@yourcompany.com).' },
          { title: '2. Set Subject & Message Body', description: 'Draft a clear subject line and structured template message for the sender.' },
          { title: '3. Download & Print', description: 'Export resolution-independent vector SVG for print or high-DPI PNG.' }
        ],
        useCases: [
          { title: 'Product User Manuals', description: 'Printed on warranty pages for direct customer support requests.', example: 'Home appliance manufacturer warranty QR code.' },
          { title: 'Job Fair Hiring Posters', description: 'Displayed on university recruitment boards for candidate CVs.', example: 'Talent agency collecting graduate applications.' },
          { title: 'Industrial Wholesale Catalogs', description: 'Placed alongside product SKUs for instant volume pricing quotes.', example: 'Hardware supplier quote request QR.' },
          { title: 'Service Contract Leave-Behinds', description: 'Handed to homeowners for submitting signed work confirmations.', example: 'Home remodeling contractor quote approval.' }
        ],
        tips: [
          'Verify Email Syntax: Ensure there are no accidental spaces or illegal characters in the address.',
          'Descriptive Subject Lines: Include department or product reference IDs to enable automated inbox routing.',
          'High Optical Contrast: Maintain dark modules against a clean white background for rapid scanning.',
          'Physical Print Dimensions: Ensure printed codes are at least 20 x 20 mm on physical documents.',
          'Cross-Client Compatibility: Test scanning across both Apple Mail on iOS and Gmail on Android.'
        ],
        technicalNotes: 'Standards Compliance: Generates standard RFC 6068 mailto URIs compatible with all mobile email apps.',
        faqs: [
          { question: 'How does an Email QR code work when scanned?', answer: 'When scanned with a phone camera, the mobile operating system detects the mailto protocol and launches the user’s default email app with the recipient, subject, and body text pre-populated.' },
          { question: 'Can the sender edit the email before sending?', answer: 'Yes! The Email QR code only opens a draft in the user\'s email app. The user can review, add attachments, or modify any text before hitting send.' },
          { question: 'Does this work with Gmail, Apple Mail, and Outlook?', answer: 'Yes! It works seamlessly with whatever email application is set as the default client on the user\'s iPhone or Android smartphone.' },
          { question: 'Can I include multiple recipient email addresses?', answer: 'Yes. You can input multiple recipient addresses separated by commas in the email address field.' },
          { question: 'Do Email QR codes ever expire?', answer: 'No. Static Email QR codes encode the mailto URI permanently and will work indefinitely with zero fees.' },
          { question: 'Is my email address logged on your server?', answer: 'No. Generation occurs 100% locally in your browser memory without remote logging.' }
        ],
        relatedTools: [
          { name: 'vCard QR Generator', slug: 'vcard-qr-code-generator', description: 'Share full contact credentials directly to address books.' },
          { name: 'Phone QR Generator', slug: 'phone-qr-code-generator', description: 'Enable one-tap phone calls directly from printed signage.' },
          { name: 'WhatsApp QR Generator', slug: 'whatsapp-qr-code-generator', description: 'Launch instant WhatsApp business conversations.' },
          { name: 'URL QR Generator', slug: 'url-to-qr-code', description: 'Direct visitors to your website or booking form.' }
        ]
      };
  }
}
