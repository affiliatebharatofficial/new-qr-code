import type { Locale } from '../config';
import type { LocalizedPageContent } from './types';

export function getWhatsappContent(locale: Locale): LocalizedPageContent {
  switch (locale) {
    case 'es':
      return {
        slug: 'whatsapp-qr-code-generator',
        qrTypeId: 'whatsapp',
        title: 'Generador de Código QR WhatsApp — Iniciar Chats Directos',
        description: 'Genera códigos QR de WhatsApp gratis con mensaje predefinido. Conecta clientes sin guardar números de teléfono. Descarga en SVG y PNG.',
        h1: 'Generador de Código QR WhatsApp',
        subheadline: 'Permite a tus clientes iniciar una conversación de WhatsApp con tu empresa con un solo escaneo, sin tener que guardar tu número.',
        heading: 'Código QR de Chat de WhatsApp',
        subheading: 'Elimina la fricción de guardar contactos e interactúa directamente en WhatsApp.',
        overviewTitle: '¿Qué es un Generador de Código QR WhatsApp?',
        overviewParagraphs: [
          'Un generador de código QR de WhatsApp crea un código 2D escaneable que abre directamente una conversación en WhatsApp o WhatsApp Business sin necesidad de que el cliente guarde previamente el número en su agenda telefónica. También permite predefinir un mensaje inicial de bienvenida o consulta.',
          'El proceso tradicional de guardar un número nuevo genera pérdida de clientes potenciales. Un código QR de WhatsApp utiliza el formato oficial "https://wa.me/[número]?text=[mensaje]", abriendo la ventana de chat inmediatamente en móviles y WhatsApp Web.',
          'Al colocar estos códigos en mostradores, cartas de restaurantes, embalajes y furgonetas de servicio, las empresas aumentan sus contactos de forma inmediata. Nuestra herramienta es 100% gratuita y privada.'
        ],
        sectors: [
          { name: 'Comercio Local y Boutiques', description: 'Códigos en caja para unirse a grupos VIP o consultar disponibilidad de stock.', benefit: 'Convierte visitas físicas en clientes recurrentes.' },
          { name: 'Restaurantes y Comida para Llevar', description: 'En cajas de reparto para pedidos directos y reservas.', benefit: 'Ahorra comisiones de plataformas intermediarias.' },
          { name: 'Inmobiliarias', description: 'En carteles con mensajes como "Quiero concertar una visita para este inmueble".', benefit: 'Atención inmediata a interesados.' },
          { name: 'Servicios del Hogar (Fontanería, Clima)', description: 'En furgonetas y presupuestos para que envíen fotos de la avería.', benefit: 'Presupuestos rápidos en 5 minutos.' },
          { name: 'Atención al Cliente y Soporte', description: 'En manuales de producto para soporte técnico inmediato.', benefit: 'Resuelve dudas reduciendo llamadas telefónicas.' },
          { name: 'Marcas E-Commerce', description: 'En tarjetas de agradecimiento para gestionar cambios o reposiciones.', benefit: 'Fideliza compradores online.' }
        ],
        howItWorks: [
          { title: '1. Introduce el Número de Teléfono', description: 'Escribe tu número con el prefijo internacional sin espacios ni signos.' },
          { title: '2. Escribe un Mensaje Opcional', description: 'Redacta un texto predefinido que aparecerá en el campo de escritura del usuario.' },
          { title: '3. Descarga e Imprime', description: 'Exporta en SVG vectorial para imprenta o PNG de alta resolución.' }
        ],
        useCases: [
          { title: 'Carteles en Mostradores', description: 'Soportes de metacrilato junto a la caja para atención al cliente.', example: 'Tienda de informática con soporte técnico vía WhatsApp.' },
          { title: 'Tarjetas en Paquetes de Envío', description: 'Insertos en paquetes para contacto directo tras la entrega.', example: 'Pastelería artesanal facilitando repetición de pedidos.' },
          { title: 'Vinilos en Vehículos de Empresa', description: 'Códigos en la luna trasera para peatones y conductores detenidos.', example: 'Taller móvil de mecánica rápida.' },
          { title: 'Banners en Ferias y Congresos', description: 'Banners que capturan contactos directos al WhatsApp comercial.', example: 'Empresa B2B captando leads en evento.' }
        ],
        tips: [
          'Incluye el Prefijo Internacional: Escribe solo números (ej. 34600000000 para España, 15551234567 para EE. UU.).',
          'Mensaje Predefinido Claro: Utiliza textos amables y directos como "Hola, me gustaría información sobre...".',
          'Alto Contraste: Mantén módulos oscuros sobre fondo claro para escanear a distancia en tiendas.',
          'Integra con WhatsApp Business: Configura respuestas automáticas y catálogo de productos en tu app.',
          'Prueba en Móvil y Escritorio: Comprueba que el enlace deep link abra correctamente WhatsApp Web y la app móvil.'
        ],
        technicalNotes: 'Formato estándar "https://wa.me/[número]?text=[mensaje]" compatible con iOS, Android y WhatsApp Web.',
        faqs: [
          { question: '¿Cómo inician los clientes el chat de WhatsApp con el código QR?', answer: 'Al escanear el código con la cámara de su smartphone, se abre WhatsApp directamente en una conversación con tu número y el mensaje predefinido listo para enviar.' },
          { question: '¿Tiene que guardar el cliente mi número antes de escribir?', answer: 'No, el código QR omite por completo ese paso, permitiendo a cualquier persona enviarte un mensaje en un segundo.' },
          { question: '¿Cómo debo escribir el número de teléfono?', answer: 'Introduce el número completo con su código de país, únicamente con dígitos (sin signos +, guiones ni espacios).' },
          { question: '¿Funciona con cuentas de WhatsApp Business?', answer: 'Sí, es 100% compatible tanto con WhatsApp personal como con WhatsApp Business y WhatsApp Cloud API.' },
          { question: '¿Puedo personalizar el mensaje pre-escrito?', answer: 'Sí, puedes escribir cualquier consulta o saludo inicial que desees.' },
          { question: '¿Tienen caducidad estos códigos QR?', answer: 'No, son códigos estáticos que funcionan indefinidamente mientras mantengas esa línea activa.' }
        ],
        relatedTools: [
          { name: 'QR de Llamada Telefónica', slug: 'phone-qr-code-generator', description: 'Llamadas automáticas de voz con un escaneo.' },
          { name: 'QR de Mensajes SMS', slug: 'sms-qr-code-generator', description: 'Envía mensajes de texto SMS con plantilla previa.' },
          { name: 'QR de Contacto vCard', slug: 'vcard-qr-code-generator', description: 'Guarda tarjetas de contacto en la agenda del móvil.' },
          { name: 'QR de Enlace Web', slug: 'url-to-qr-code', description: 'Dirige tráfico a tu sitio web o tienda online.' }
        ]
      };
    case 'de':
      return {
        slug: 'whatsapp-qr-code-generator',
        qrTypeId: 'whatsapp',
        title: 'WhatsApp QR Code Generator — Direkte Kundenchats starten',
        description: 'Kostenlose WhatsApp QR-Codes mit vordefiniertem Text erstellen. Kunden ohne Nummernspeicherung direkt ansprechen. Vektor-SVG & PNG Download.',
        h1: 'WhatsApp QR Code Generator',
        subheadline: 'Kunden und Interessenten mit einem einzigen Scan direkt in einen WhatsApp-Chat mit Ihrem Unternehmen leiten – ohne Nummern-Speichern.',
        heading: 'WhatsApp-Chat-QR-Code',
        subheading: 'Keine Hürden beim Erstkontakt: Sofortiger Chat-Start auf WhatsApp.',
        overviewTitle: 'Was ist ein WhatsApp QR Code Generator?',
        overviewParagraphs: [
          'Ein WhatsApp QR Code Generator erstellt einen 2D-Barcode, der beim Scannen direkt einen Chatverlauf in WhatsApp oder WhatsApp Business öffnet – ohne dass der Kunde Ihre Telefonnummer im Adressbuch speichern muss.',
          'Herkömmliche WhatsApp-Kontaktaufnahmen scheitern oft am mühsamen Abtippen von Nummern. Der QR-Code nutzt den standardisierten Link "https://wa.me/[Nummer]?text=[Nachricht]", sodass sich das Chatfenster sofort öffnet.',
          'Ideal für Thekenaufsteller, Verpackungen und Lieferfahrzeuge. Unser Tool ist 100% kostenlos und datenschutzkonform im Browser.'
        ],
        sectors: [
          { name: 'Einzelhandel & Boutiquen', description: 'Aufsteller an der Kasse für Produktberatung per WhatsApp.', benefit: 'Verwandelt Ladenbesucher in treue Stammkunden.' },
          { name: 'Gastronomie & Lieferservice', description: 'Auf Pizzakartons für direkte Nachbestellungen.', benefit: 'Spart Vermittlungsprovisionen externer Portale.' },
          { name: 'Immobilienmakler', description: 'Auf Verkaufsschildern mit Text wie "Ich interessiere mich für Objekt #123".', benefit: 'Schnelle Erreichbarkeit für Kaufinteressenten.' },
          { name: 'Handwerker & Notdienste', description: 'Auf Transportern für Fotos von Rohrbruch oder Schaden.', benefit: 'Kostenvoranschlag in wenigen Minuten per Chat.' },
          { name: 'Kundenservice & Support', description: 'In Produktanleitungen für schnellen Live-Support.', benefit: 'Entlastet die Telefon-Hotline.' },
          { name: 'E-Commerce Marken', description: 'Auf Paketbeilegern für einfache Retourenabwicklung.', benefit: 'Stärkt die Kundenbindung nach dem Kauf.' }
        ],
        howItWorks: [
          { title: '1. Rufnummer Eingeben', description: 'Geben Sie Ihre Nummer mit internationaler Vorwahl ein (z. B. 491701234567).' },
          { title: '2. Text Vorformulieren', description: 'Optionalen Begrüßungstext für das Eingabefeld des Kunden verfassen.' },
          { title: '3. Herunterladen & Drucken', description: 'Als Vektor-SVG für Schilder oder PNG für Drucksachen exportieren.' }
        ],
        useCases: [
          { title: 'Thekenaufsteller im Geschäft', description: 'Acrylaufsteller an der Kasse für direkten WhatsApp-Support.', example: 'Fachgeschäft mit WhatsApp-Beratung.' },
          { title: 'Paketbeileger im Versand', description: 'Kärtchen im Paket für schnelle Rückfragen.', example: 'Online-Shop für reibungslosen Kundendienst.' },
          { title: 'Fahrzeugbeschriftung', description: 'Aufkleber auf der Heckscheibe für interessierte Passanten.', example: 'Mobiler Reparaturservice.' },
          { title: 'Messebanner', description: 'Roll-ups auf Messen für unkomplizierte Kontaktaufnahme.', example: 'B2B-Unternehmen sammelt Leads.' }
        ],
        tips: [
          'Nur Ziffern verwenden: Landesvorwahl ohne Plus, Leerzeichen oder Bindestriche eingeben (z. B. 49170...).',
          'Höflicher Begrüßungstext: Klare Vorlagen wie "Guten Tag, ich benötige Hilfe zu..." nutzen.',
          'Hoher Kontrast: Dunkles Muster auf weißem Grund für schnelles Scannen.',
          'WhatsApp Business nutzen: Automatische Öffnungszeiten und Schnellantworten einrichten.',
          'Funktionstest: Prüfen Sie, ob der Chat auf iOS und Android sofort aufspringt.'
        ],
        technicalNotes: 'Offizieller WhatsApp Deep-Link-Standard "https://wa.me/..." für Mobilgeräte und WhatsApp Web.',
        faqs: [
          { question: 'Wie funktioniert der WhatsApp QR-Code?', answer: 'Beim Scannen mit der Handykamera öffnet sich WhatsApp direkt mit einem neuen Chat an Ihre Nummer und dem voreingestellten Text.' },
          { question: 'Muss der Kunde meine Nummer vorher speichern?', answer: 'Nein, der QR-Code überspringt diesen Schritt komplett, sodass der Chat sofort startet.' },
          { question: 'Wie muss die Telefonnummer eingegeben werden?', answer: 'Vollständig mit Landesvorwahl und ohne Sonderzeichen (z. B. 491701234567 für Deutschland).' },
          { question: 'Funktioniert das auch mit WhatsApp Business?', answer: 'Ja, der Code ist zu 100% kompatibel mit WhatsApp Business und persönlichen Konten.' },
          { question: 'Kann ich den Text vorformulieren?', answer: 'Ja, Sie können einen individuellen Starttext hinterlegen, den der Kunde nur noch absenden muss.' },
          { question: 'Laufen WhatsApp QR-Codes ab?', answer: 'Nein, die statischen Codes sind zeitlich unbegrenzt gültig, solange die Rufnummer aktiv ist.' }
        ],
        relatedTools: [
          { name: 'Telefon QR Generator', slug: 'phone-qr-code-generator', description: 'Direkte Sprachanrufe per Klick auslösen.' },
          { name: 'SMS QR Code Generator', slug: 'sms-qr-code-generator', description: 'Vordefinierte SMS-Nachrichten versenden.' },
          { name: 'vCard Visitenkarte', slug: 'vcard-qr-code-generator', description: 'Kontaktdaten im Telefonbuch speichern.' },
          { name: 'Weblink QR Generator', slug: 'url-to-qr-code', description: 'Besucher auf Ihre Website weiterleiten.' }
        ]
      };
    case 'fr':
      return {
        slug: 'whatsapp-qr-code-generator',
        qrTypeId: 'whatsapp',
        title: 'Générateur de QR Code WhatsApp — Démarrer des Conversations Directes',
        description: 'Générez des QR codes WhatsApp gratuits avec message pré-rempli. Connectez vos clients sans enregistrer de contact. Téléchargement SVG et PNG.',
        h1: 'Générateur de QR Code WhatsApp',
        subheadline: 'Permettez à vos clients de démarrer un échange WhatsApp en un seul scan, sans avoir à enregistrer votre numéro.',
        heading: 'QR Code de Chat WhatsApp',
        subheading: 'Supprimez la contrainte d\'enregistrement de contact et échangez directement sur WhatsApp.',
        overviewTitle: 'Qu\'est-ce qu\'un Générateur de QR Code WhatsApp ?',
        overviewParagraphs: [
          'Un générateur de QR code WhatsApp crée un code 2D qui ouvre directement une discussion dans WhatsApp ou WhatsApp Business sans que le client ait besoin d\'enregistrer votre numéro au préalable dans son carnet d\'adresses.',
          'Le format standard "https://wa.me/[numéro]?text=[message]" supprime les frictions et permet d\'inclure un texte pré-rempli dans le champ de saisie du client.',
          'Idéal pour les commerces, restaurants et techniciens de service. Notre outil est 100% gratuit et privé, avec export en SVG et PNG.'
        ],
        sectors: [
          { name: 'Boutiques et Commerces', description: 'Sur le comptoir pour vérifier la disponibilité d\'un article.', benefit: 'Fidélise les clients du magasin.' },
          { name: 'Restauration à Emporter', description: 'Sur les boîtes de livraison pour commandes directes.', benefit: 'Évite les commissions des plateformes tierces.' },
          { name: 'Agences Immobilières', description: 'Sur panneaux avec référence du bien pré-remplie.', benefit: 'Prise de contact immédiate pour les visites.' },
          { name: 'Dépannage & Artisans', description: 'Sur véhicules pour recevoir des photos des pannes.', benefit: 'Devis express en quelques minutes.' },
          { name: 'Service Client & SAV', description: 'Dans les notices pour une assistance technique en direct.', benefit: 'Désengorge les lignes téléphoniques.' },
          { name: 'Marques E-Commerce', description: 'Sur cartes de remerciement pour les retours et échanges.', benefit: 'Service après-vente réactif.' }
        ],
        howItWorks: [
          { title: '1. Saisissez le Numéro', description: 'Indiquez votre numéro complet avec indicatif pays sans espaces.' },
          { title: '2. Rédigez le Message', description: 'Préparez un texte d\'accueil que le client pourra envoyer d\'un clic.' },
          { title: '3. Téléchargez et Imprimez', description: 'Exportez en SVG vectoriel pour affiches ou PNG haute définition.' }
        ],
        useCases: [
          { title: 'Chevalets de Comptoir', description: 'Supports de caisse pour le support client par messagerie.', example: 'Magasin avec support WhatsApp dédié.' },
          { title: 'Cartons d\'Expédition', description: 'Inserts dans les colis pour contacter le SAV facilement.', example: 'Boutique artisanale en ligne.' },
          { title: 'Flocage de Véhicules', description: 'Autocollants sur lunette arrière pour passants.', example: 'Plombier avec contact rapide.' },
          { title: 'Stands d\'Exposition', description: 'Bannières de salon pour capturer des leads qualifiés.', example: 'Entreprise B2B en congrès.' }
        ],
        tips: [
          'Chiffres Uniquement : Indicatif pays sans le signe + ni espaces (ex. 33612345678).',
          'Texte Pré-rédigé Clair : Formulez un message direct comme "Bonjour, je souhaite un devis...".',
          'Contraste Net : Modules foncés sur fond blanc pour un scan fluide.',
          'Utilisez WhatsApp Business : Configurez des messages automatiques et un catalogue de produits.',
          'Testez sur Mobile : Vérifiez l\'ouverture fluide sur iOS et Android.'
        ],
        technicalNotes: 'Conforme au protocole officiel WhatsApp wa.me supporté sur tous les smartphones.',
        faqs: [
          { question: 'Comment les clients scannent-ils pour ouvrir WhatsApp ?', answer: 'En visant le code avec l\'appareil photo, WhatsApp s\'ouvre directement sur une nouvelle discussion avec votre numéro et le message prêt à partir.' },
          { question: 'Le client doit-il enregistrer mon numéro ?', answer: 'Non, le QR code évite cette étape fastidieuse et lance le chat immédiatement.' },
          { question: 'Comment saisir le numéro de téléphone ?', answer: 'Indiquez le numéro avec l\'indicatif international sans espaces ni tirets (ex. 33600000000 pour la France).' },
          { question: 'Est-ce compatible avec WhatsApp Business ?', answer: 'Oui, parfaitement compatible avec WhatsApp classique, Business et API.' },
          { question: 'Puis-je personnaliser le message initial ?', answer: 'Oui, vous pouvez rédiger le texte exact qui apparaîtra dans le champ de saisie.' },
          { question: 'Les QR codes WhatsApp expirent-ils ?', answer: 'Non, ce sont des codes statiques valables indéfiniment tant que votre ligne téléphonique existe.' }
        ],
        relatedTools: [
          { name: 'QR Code Appel', slug: 'phone-qr-code-generator', description: 'Appel vocal direct d\'un simple scan.' },
          { name: 'QR Code SMS', slug: 'sms-qr-code-generator', description: 'Envoi de SMS avec texte pré-rempli.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Enregistrez vos coordonnées complètes.' },
          { name: 'QR Code Lien Web', slug: 'url-to-qr-code', description: 'Redirigez vers votre site internet.' }
        ]
      };
    case 'pt':
      return {
        slug: 'whatsapp-qr-code-generator',
        qrTypeId: 'whatsapp',
        title: 'Gerador de QR Code WhatsApp — Iniciar Conversas Diretas',
        description: 'Gere QR Codes de WhatsApp grátis com mensagem pré-definida. Conecte clientes sem precisar salvar o contato. Download em SVG e PNG.',
        h1: 'Gerador de QR Code WhatsApp',
        subheadline: 'Permita que clientes iniciem conversas no WhatsApp com sua empresa em um único scan, sem precisar salvar o número.',
        heading: 'QR Code de Chat do WhatsApp',
        subheading: 'Elimine a barreira de salvar contatos e converse direto pelo WhatsApp.',
        overviewTitle: 'O que é um Gerador de QR Code WhatsApp?',
        overviewParagraphs: [
          'Um gerador de QR Code WhatsApp cria um código 2D que abre uma conversa direta no WhatsApp ou WhatsApp Business sem que a pessoa precise salvar seu telefone na agenda.',
          'O formato oficial "https://wa.me/[número]?text=[mensagem]" remove etapas burocráticas e permite incluir uma mensagem pré-digitada no campo de texto do cliente.',
          'Ideal para balcões, caixas de entrega, veículos e anúncios. Nossa ferramenta é 100% gratuita e roda direto no seu navegador.'
        ],
        sectors: [
          { name: 'Lojas e Boutiques', description: 'No caixa para atendimento e catálogo de produtos.', benefit: 'Aproxima clientes físicos do canal digital.' },
          { name: 'Restaurantes e Delivery', description: 'Nas embalagens para pedidos diretos sem intermediários.', benefit: 'Economia com taxas de marketplaces.' },
          { name: 'Imobiliárias e Corretores', description: 'Em placas com o código do imóvel já digitado.', benefit: 'Contato imediato de interessados.' },
          { name: 'Serviços e Manutenção', description: 'Em carros e orçamentos para envio de fotos do reparo.', benefit: 'Orçamentos rápidos em poucos minutos.' },
          { name: 'Suporte e Pós-Venda', description: 'Em manuais de produtos para atendimento imediato.', benefit: 'Reduz chamadas telefônicas de suporte.' },
          { name: 'E-commerce', description: 'Em cartões dentro dos pacotes para dúvidas e trocas.', benefit: 'Atendimento humanizado após a entrega.' }
        ],
        howItWorks: [
          { title: '1. Digite seu Número', description: 'Insira o número completo com código do país (ex.: 5511999998888).' },
          { title: '2. Escreva a Mensagem', description: 'Redija um texto inicial pronto para o cliente enviar com 1 clique.' },
          { title: '3. Baixe e Divulgue', description: 'Exporte em SVG vetorial para impressão ou PNG para redes.' }
        ],
        useCases: [
          { title: 'Displays de Balcão', description: 'Suportes de acrílico ao lado da maquininha de cartão.', example: 'Loja com atendimento ágil por WhatsApp.' },
          { title: 'Embalagens de Delivery', description: 'Adesivos em caixas de pizza e sacolas.', example: 'Pizzaria facilitando pedidos futuros.' },
          { title: 'Adesivos em Veículos', description: 'Na traseira de furgões e motos de serviço.', example: 'Chaveiro móvel 24h.' },
          { title: 'Banners de Eventos', description: 'Banners para captação de contatos comerciais.', example: 'Estande em feira de negócios.' }
        ],
        tips: [
          'Somente Números: Digite o DDI + DDD + número sem espaços nem traços (ex.: 5511987654321).',
          'Mensagem Amigável: Use frases diretas como "Olá, gostaria de saber mais sobre...".',
          'Alto Contraste: Módulos pretos em fundo branco garantem leitura rápida.',
          'Use WhatsApp Business: Configure catálogo e mensagens de ausência na sua conta.',
          'Teste no Celular: Verifique se o chat abre instantaneamente no iPhone e Android.'
        ],
        technicalNotes: 'Padrão oficial wa.me compatível com smartphones iOS, Android e WhatsApp Web.',
        faqs: [
          { question: 'Como o cliente abre o WhatsApp pelo QR Code?', answer: 'Ao apontar a câmera do celular para o código, o WhatsApp abre automaticamente em uma conversa com o seu número e o texto preenchido.' },
          { question: 'O cliente precisa salvar meu contato antes?', answer: 'Não, o QR Code dispensa o salvamento na agenda e abre o chat diretamente.' },
          { question: 'Como digitar o número de telefone?', answer: 'Digite o código do país seguido do DDD e do número (ex.: 5511999998888 para São Paulo, Brasil).' },
          { question: 'Funciona com WhatsApp Business?', answer: 'Sim, é totalmente compatível com WhatsApp comum, WhatsApp Business e API oficial.' },
          { question: 'Posso personalizar a mensagem que o cliente vai mandar?', answer: 'Sim, você pode definir o texto que já aparece pronto para envio na tela dele.' },
          { question: 'Os códigos QR de WhatsApp expiram?', answer: 'Não, são códigos permanentes que continuam funcionando enquanto a linha estiver ativa.' }
        ],
        relatedTools: [
          { name: 'QR Code de Chamada', slug: 'phone-qr-code-generator', description: 'Disque números diretamente com 1 scan.' },
          { name: 'QR Code SMS', slug: 'sms-qr-code-generator', description: 'Envie mensagens SMS pré-formatadas.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Compartilhe cartões de contato na agenda.' },
          { name: 'QR Code Link URL', slug: 'url-to-qr-code', description: 'Direcione visitantes para seu site ou loja.' }
        ]
      };
    case 'it':
      return {
        slug: 'whatsapp-qr-code-generator',
        qrTypeId: 'whatsapp',
        title: 'Generatore QR Code WhatsApp — Avviare Chat Dirette con i Clienti',
        description: 'Genera codici QR WhatsApp gratuiti con messaggio precompilato. Connetti i clienti senza salvare il numero in rubrica. Download SVG e PNG.',
        h1: 'Generatore QR Code WhatsApp',
        subheadline: 'Permetti ai clienti di avviare una chat WhatsApp con la tua attività con una sola scansione, senza dover salvare il numero.',
        heading: 'QR Code per Chat WhatsApp',
        subheading: 'Elimina ogni barriera di contatto e comunica direttamente su WhatsApp.',
        overviewTitle: 'Cos\'è un Generatore di QR Code WhatsApp?',
        overviewParagraphs: [
          'Un generatore di codici QR WhatsApp crea un codice 2D che apre direttamente una conversazione su WhatsApp o WhatsApp Business senza che il cliente debba prima salvare il numero in rubrica.',
          'Il formato standard "https://wa.me/[numero]?text=[messaggio]" elimina ogni passaggio manuale e consente di includere un messaggio iniziale già pronto nel campo di scrittura.',
          'Ideale per banconi, furgoni aziendali, menu e confezioni di prodotti. Il nostro strumento è gratuito, privato e funziona al 100% nel browser.'
        ],
        sectors: [
          { name: 'Negozi e Boutique', description: 'Sul banco cassa per richiedere disponibilità e cataloghi.', benefit: 'Fidelizza i clienti del negozio fisico.' },
          { name: 'Ristorazione e Asporto', description: 'Sulle scatole da asporto per ordini diretti.', benefit: 'Risparmia sulle commissioni dei portali terzi.' },
          { name: 'Agenzie Immobiliari', description: 'Sui cartelli con codice immobile già inserito nel testo.', benefit: 'Contatto immediato con potenziali acquirenti.' },
          { name: 'Artigiani e Assistenza', description: 'Sui veicoli per ricevere foto del guasto e richiedere preventivi.', benefit: 'Preventivi rapidi in pochi minuti.' },
          { name: 'Assistenza Clienti e Supporto', description: 'Sulle istruzioni per un supporto tecnico immediato.', benefit: 'Riduce il carico sul centralino telefonico.' },
          { name: 'E-commerce', description: 'Nei pacchi per gestire resi e consigli di acquisto.', benefit: 'Assistenza rapida post-vendita.' }
        ],
        howItWorks: [
          { title: '1. Inserisci il Numero', description: 'Digita il numero completo di prefisso internazionale senza spazi.' },
          { title: '2. Scrivi il Messaggio', description: 'Imposta un testo di benvenuto pronto per essere inviato.' },
          { title: '3. Scarica e Stampa', description: 'Esporta in formato vettoriale SVG per cartelli o PNG ad alta risoluzione.' }
        ],
        useCases: [
          { title: 'Espositori sul Bancone', description: 'Supporti in plexiglas vicino alla cassa per assistenza WhatsApp.', example: 'Negozio con supporto clienti via chat.' },
          { title: 'Scatole di Spedizione', description: 'Cartoncini nel pacco per contattare l\'assistenza.', example: 'Laboratorio artigianale online.' },
          { title: 'Adesivi su Veicoli', description: 'Sul lunotto posteriore di furgoni da lavoro.', example: 'Fabbro con pronto intervento.' },
          { title: 'Stand Fieristici', description: 'Banner per raccogliere contatti commerciali qualificati.', example: 'Azienda B2B in fiera.' }
        ],
        tips: [
          'Solo Cifre: Prefisso internazionale senza il segno + né spazi (es. 393331234567).',
          'Messaggio Diretto: Usa formule chiare come "Buongiorno, vorrei informazioni su...".',
          'Contrasto Elevato: Moduli scuri su sfondo bianco per una scansione fulminea.',
          'WhatsApp Business: Configura messaggi automatici e catalogo prodotti.',
          'Test su Smartphone: Verifica l\'apertura immediata su iPhone e Android.'
        ],
        technicalNotes: 'Standard deep-link wa.me pienamente supportato su iOS, Android e WhatsApp Web.',
        faqs: [
          { question: 'Come avviano i clienti la chat con il QR code?', answer: 'Inquadrando il codice con la fotocamera, WhatsApp si apre direttamente in una nuova conversazione con il tuo numero e il messaggio pronto.' },
          { question: 'Il cliente deve salvare il numero prima di scrivere?', answer: 'No, il codice QR evita questo passaggio e apre la chat immediatamente.' },
          { question: 'Come inserire il numero di telefono?', answer: 'Inserisci il numero con il prefisso internazionale senza spazi né trattini (es. 393331234567 per l\'Italia).' },
          { question: 'Funziona con account WhatsApp Business?', answer: 'Sì, è perfettamente compatibile sia con WhatsApp personale che con WhatsApp Business e API.' },
          { question: 'Posso personalizzare il messaggio iniziale?', answer: 'Sì, puoi scrivere qualsiasi testo che apparirà già pronto nel campo di digitazione.' },
          { question: 'I codici QR per WhatsApp hanno una scadenza?', answer: 'No, sono codici statici permanenti che funzionano finché il numero telefonico resta attivo.' }
        ],
        relatedTools: [
          { name: 'QR Code Chiamata', slug: 'phone-qr-code-generator', description: 'Avvia chiamate telefoniche vocali istantanee.' },
          { name: 'QR Code SMS', slug: 'sms-qr-code-generator', description: 'Invia messaggi SMS precompilati.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Salva i contatti completi in rubrica.' },
          { name: 'QR Code Link Web', slug: 'url-to-qr-code', description: 'Indirizza i visitatori al tuo sito web.' }
        ]
      };
    case 'hi':
      return {
        slug: 'whatsapp-qr-code-generator',
        qrTypeId: 'whatsapp',
        title: 'WhatsApp QR कोड जेनरेटर — सीधे व्हाट्सएप चैट शुरू करें',
        description: 'मुफ़्त व्हाट्सएप QR कोड बनाएं। बिना नंबर सेव किए ग्राहकों से सीधा संवाद शुरू करें। वेक्टर SVG व PNG डाउनलोड।',
        h1: 'WhatsApp QR कोड जेनरेटर',
        subheadline: 'ग्राहकों को बिना नंबर सेव किए एक स्कैन में आपकी व्यावसायिक व्हाट्सएप चैट शुरू करने की सुविधा दें।',
        heading: 'व्हाट्सएप चैट QR कोड',
        subheading: 'नंबर सेव करने का झंझट खत्म करें और सीधे व्हाट्सएप पर ग्राहकों से जुड़ें।',
        overviewTitle: 'WhatsApp QR कोड जेनरेटर क्या है?',
        overviewParagraphs: [
          'व्हाट्सएप QR कोड जेनरेटर एक ऐसा स्कैन करने योग्य 2D बारकोड बनाता है जो किसी भी ग्राहक को आपकी फोनबुक में नंबर सेव किए बिना सीधे आपकी व्हाट्सएप चैट पर ले जाता है। इसमें आप पहले से लिखा हुआ ग्रीटिंग मैसेज भी जोड़ सकते हैं।',
          'सामान्य तौर पर ग्राहकों को किसी दुकान या सेवा प्रदाता से बात करने के लिए पहले फोन नंबर सेव करना पड़ता है। आधिकारिक "https://wa.me/[नंबर]?text=[मैसेज]" लिंक से यह काम एक सेकंड में कैमरे के स्कैन से हो जाता है।',
          'दुकानों के काउंटर, डिलीवरी पार्सल, रेस्टोरेंट मेन्यू और वाहनों पर यह कोड लगाने से ग्राहक आसानी से पूछताछ कर सकते हैं। हमारा टूल 100% मुफ़्त और सुरक्षित है।'
        ],
        sectors: [
          { name: 'लोकल दुकानें व बुटीक', description: 'काउंटर पर स्टॉक पूछताछ और ऑर्डर के लिए कोड लगाएं।', benefit: 'दुकान में आए ग्राहकों से डिजिटल संपर्क बनाए रखता है।' },
          { name: 'रेस्तरां व फ़ूड डिलीवरी', description: 'पार्सल बॉक्स पर दोबारा खाना ऑर्डर करने के लिए।', benefit: 'तीसरे पक्ष के डिलीवरी ऐप्स के कमीशन से बचत।' },
          { name: 'रियल एस्टेट व प्रॉपर्टी ब्रोकर्स', description: 'बिक्री बोर्ड पर प्रॉपर्टी पूछताछ मैसेज के साथ लगाएं।', benefit: 'घर खरीदारों से तुरंत व्हाट्सएप पर बातचीत।' },
          { name: 'होम सर्विसेज व मैकेनिक', description: 'सर्विस वैन पर खराबी की फोटो मंगाने के लिए।', benefit: 'व्हाट्सएप पर फोटो देखकर 5 मिनट में कोटेशन।' },
          { name: 'कस्टमर सपोर्ट व हेल्पलाइन', description: 'प्रोडक्ट बॉक्स में तकनीकी सहायता के लिए कोड दें।', benefit: 'फ़ोन कॉल की भीड़ कम करता है।' },
          { name: 'ई-कॉमर्स सेलर्स', description: 'थैंक्यू कार्ड्स पर रिटर्न या एक्सचेंज सहायता हेतु।', benefit: 'ग्राहकों का भरोसा और बेहतर अनुभव।' }
        ],
        howItWorks: [
          { title: '1. फोन नंबर दर्ज करें', description: 'कंट्री कोड के साथ अपना व्हाट्सएप नंबर लिखें (जैसे भारत के लिए 919876543210)।' },
          { title: '2. प्रारंभिक संदेश लिखें', description: 'ग्राहक के लिए पहले से लिखा संदेश (जैसे "नमस्ते, मुझे जानकारी चाहिए") सेट करें।' },
          { title: '3. डाउनलोड व प्रिंट करें', description: 'दुकान या पार्सल के लिए वेक्टर SVG या हाई-रिज़ॉल्यूशन PNG डाउनलोड करें।' }
        ],
        useCases: [
          { title: 'बिलिंग काउंटर स्टैंड', description: 'कैश रजिस्टर के पास लगा हुआ एक्रिलिक स्टैंड।', example: 'दुकान पर व्हाट्सएप पूछताछ काउंटर।' },
          { title: 'पार्सल डिलीवरी बॉक्स', description: 'पैकेज के अंदर लगा हुआ संपर्क कार्ड।', example: 'ऑनलाइन स्टोर डिलीवरी बॉक्स।' },
          { title: 'सर्विस वाहनों पर स्टीकर', description: 'गाड़ी की पिछली खिड़की पर लगा संपर्क कोड।', example: 'प्लंबर व इलेक्ट्रीशियन सर्विस वैन।' },
          { title: 'व्यापार मेला स्टैंडी', description: 'स्टॉल पर नए ग्राहकों से व्हाट्सएप लीड्स इकट्ठा करने हेतु।', example: 'प्रदर्शनी स्टॉल पर लगा बैनर।' }
        ],
        tips: [
          'केवल अंकों का उपयोग करें: कंट्री कोड के साथ बिना +, स्पेस या डैश के नंबर लिखें (जैसे 919876543210)।',
          'स्पष्ट संदेश लिखें: ग्राहक के लिए तैयार संदेश जैसे "नमस्ते, मुझे आपके प्रोडक्ट्स की जानकारी चाहिए" लिखें।',
          'हाई कंट्रास्ट: सफ़ेद बैकग्राउंड पर गहरे रंग के डॉट्स रखें।',
          'व्हाट्सएप बिजनेस का उपयोग करें: ऑटो-रिप्लाई और कैटलॉग सेट करें।',
          'मोबाइल से जांच: प्रिंट करने से पहले स्कैन करके चेक करें।'
        ],
        technicalNotes: 'आधिकारिक WhatsApp wa.me प्रोटोकॉल, iOS और Android दोनों पर पूरी तरह समर्थित।',
        faqs: [
          { question: 'ग्राहक QR कोड से व्हाट्सएप चैट कैसे शुरू करते हैं?', answer: 'वे अपने फोन का कैमरा खोलकर QR कोड पर ले जाते हैं, जिससे व्हाट्सएप अपने आप खुलता है और आपका नंबर व मैसेज तैयार मिलता है।' },
          { question: 'क्या ग्राहक को पहले मेरा नंबर सेव करना होगा?', answer: 'नहीं, यह कोड बिना नंबर सेव किए सीधे चैट विंडो खोल देता है।' },
          { question: 'फ़ोन नंबर कैसे दर्ज करें?', answer: 'कंट्री कोड के साथ पूरा नंबर लिखें (जैसे भारत के लिए 919876543210)।' },
          { question: 'क्या यह WhatsApp Business के साथ काम करता है?', answer: 'हाँ, यह सामान्य व्हाट्सएप, व्हाट्सएप बिजनेस और व्हाट्सएप एपीआई तीनों के साथ काम करता है।' },
          { question: 'क्या मैं पहले से लिखा हुआ मैसेज तय कर सकता हूँ?', answer: 'हाँ, आप कोई भी संदेश लिख सकते हैं जो ग्राहक के चैट बॉक्स में अपने आप टाइप हो जाएगा।' },
          { question: 'क्या यह WhatsApp QR कोड कभी एक्सपायर होता है?', answer: 'नहीं, यह स्थायी है और जब तक आपका व्हाट्सएप नंबर चालू रहेगा, हमेशा काम करेगा।' }
        ],
        relatedTools: [
          { name: 'फ़ोन कॉल QR जेनरेटर', slug: 'phone-qr-code-generator', description: 'एक स्कैन में सीधे कॉल मिलाएं।' },
          { name: 'SMS QR कोड जेनरेटर', slug: 'sms-qr-code-generator', description: 'पहले से लिखा संदेश SMS से भेजें।' },
          { name: 'vCard विज़िटिंग कार्ड QR', slug: 'vcard-qr-code-generator', description: 'संपर्क विवरण सीधे फोनबुक में सेव कराएं।' },
          { name: 'वेबसाइट URL QR जेनरेटर', slug: 'url-to-qr-code', description: 'ग्राहकों को अपनी वेबसाइट पर भेजें।' }
        ]
      };
    default: // 'en'
      return {
        slug: 'whatsapp-qr-code-generator',
        qrTypeId: 'whatsapp',
        title: 'WhatsApp QR Code Generator — Start Direct WhatsApp Chats',
        description: 'Generate free WhatsApp QR codes with pre-filled text messages. Connect customers instantly without saving phone numbers. Free vector SVG & PNG.',
        h1: 'WhatsApp QR Code Generator',
        subheadline: 'Let customers and leads start a direct WhatsApp conversation with your business in a single scan—no contact saving required.',
        heading: 'WhatsApp Chat QR Code',
        subheading: 'Eliminate contact-saving friction and engage customers directly on WhatsApp.',
        overviewTitle: 'What is a WhatsApp QR Code Generator?',
        overviewParagraphs: [
          'A WhatsApp QR code generator creates a scannable 2D barcode that opens a direct chat conversation on WhatsApp or WhatsApp Business without requiring the user to save the phone number into their mobile address book first. You can also embed an optional pre-filled greeting or inquiry message that appears automatically in the user’s text input field when scanned.',
          'Normally, starting a conversation with a new business on WhatsApp requires a tedious multi-step friction barrier: typing the international phone number, creating a new contact entry, naming the contact, syncing WhatsApp, and finally searching for the chat thread. A WhatsApp QR code encodes the official "https://wa.me/[number]?text=[message]" deep link format, launching the chat window immediately on mobile and WhatsApp Web.',
          'By deploying WhatsApp QR codes on packaging, retail store counters, promotional flyers, invoices, and customer service kiosks, businesses dramatically increase lead conversion rates and provide instant support. Our generator is 100% free, private, client-side, and offers high-resolution PNG raster graphics and vector SVG exports for professional printing.'
        ],
        sectors: [
          { name: 'Local Retail & Boutiques', description: 'Point-of-sale counter standees for instant stock inquiries and VIP customer club chats.', benefit: 'Turns physical foot traffic into recurring digital customer relationships.' },
          { name: 'Restaurants & Takeout Dining', description: 'Printed on food delivery packaging and takeout flyers for direct repeat ordering.', benefit: 'Bypasses high third-party delivery marketplace commissions.' },
          { name: 'Real Estate Brokers', description: 'Yard sign riders with pre-filled inquiries like "I want to tour property #104".', benefit: 'Enables immediate agent follow-ups with high-intent buyers.' },
          { name: 'Home Trade Services & Repair', description: 'Vehicle wrap graphics allowing homeowners to text photos of leaky pipes or broken locks.', benefit: 'Provides instant 5-minute photo quotes without site visits.' },
          { name: 'Customer Support & Warranty Helpdesks', description: 'Product user manuals enabling direct 1-on-1 technician troubleshooting chats.', benefit: 'Diverts repetitive support volume away from expensive phone lines.' },
          { name: 'E-Commerce Direct-to-Consumer Brands', description: 'Order unboxing cards for easy size exchanges and post-purchase customer service.', benefit: 'Builds post-purchase brand loyalty with personal chat support.' }
        ],
        howItWorks: [
          { title: '1. Enter Business Phone Number', description: 'Type your phone number with the country code, omitting plus signs, dashes, and leading zeroes.' },
          { title: '2. Set Pre-Filled Message', description: 'Draft an optional greeting message that automatically appears in the user’s text input field.' },
          { title: '3. Download & Print', description: 'Export as high-definition PNG images or scalable Vector SVG files for physical marketing.' }
        ],
        useCases: [
          { title: 'Point-of-Sale Counter Acrylics', description: 'Tabletop stands positioned next to payment terminals inviting customers to chat with customer service.', example: 'Computer shop providing WhatsApp technical support.' },
          { title: 'Takeout Box Stickers', description: 'Stickers on delivery packaging promoting special discounts for direct WhatsApp orders.', example: 'Artisan bakery increasing repeat orders.' },
          { title: 'Service Van Rear Windows', description: 'Oversized vinyl decals for pedestrians and stopped drivers to request emergency service.', example: 'Mobile locksmith van offering 24/7 chat dispatch.' },
          { title: 'Trade Show Pull Banners', description: 'Retractable exhibition banners inviting attendees to text for instant product spec sheets.', example: 'B2B equipment manufacturer capturing trade leads.' }
        ],
        tips: [
          'Numbers Only Format: Enter the international country code followed by the number without spaces or special characters (e.g., 15551234567 for US, 447123456789 for UK).',
          'Conversational Starter Text: Use friendly, specific inquiry templates like "Hi! I would like to request a quote for...".',
          'High Optical Contrast: Dark module patterns on a clean white background guarantee the fastest optical scanning at distance.',
          'Integrate with WhatsApp Business: Take advantage of automated greeting messages, quick replies, and product catalogs on WhatsApp Business.',
          'Cross-Device Compatibility Test: Verify that the generated deep link opens properly on iOS, Android, and desktop WhatsApp Web.'
        ],
        technicalNotes: 'Standards Compliance: Encodes official WhatsApp URI deep links formatted as "https://wa.me/[Phone]?text=[Message]".',
        faqs: [
          { question: 'How do customers start a WhatsApp chat by scanning a QR code?', answer: 'Customers point their native smartphone camera at the printed QR code. A banner pops up prompting them to open WhatsApp. Tapping it opens a direct conversation with your number and pre-fills your custom message.' },
          { question: 'Does the customer need to save my phone number before messaging?', answer: 'No. The WhatsApp QR code deep link bypasses the need to add a contact to the phone address book, allowing instant communication in a single tap.' },
          { question: 'How should I format my phone number in the generator?', answer: 'Enter your full international phone number including country code with digits only. Do not include "+" signs, brackets, hyphens, or leading zeroes.' },
          { question: 'Does this work with WhatsApp Business and WhatsApp API accounts?', answer: 'Yes! The generated WhatsApp QR code works seamlessly with personal WhatsApp accounts, WhatsApp Business app accounts, and enterprise WhatsApp Cloud API numbers.' },
          { question: 'Can I customize the pre-filled text message?', answer: 'Yes. You can compose any default greeting or inquiry text you like. The customer can review or edit this text before hitting send.' },
          { question: 'Do WhatsApp QR codes expire or stop working?', answer: 'No. Static WhatsApp QR codes encode the deep link directly and will continue to work indefinitely as long as your phone number remains active.' }
        ],
        relatedTools: [
          { name: 'Phone Call QR Generator', slug: 'phone-qr-code-generator', description: 'Enable one-tap phone calls directly from printed signage.' },
          { name: 'SMS QR Code Generator', slug: 'sms-qr-code-generator', description: 'Launch pre-filled SMS text messages with specified keywords.' },
          { name: 'vCard QR Generator', slug: 'vcard-qr-code-generator', description: 'Share full contact credentials directly to address books.' },
          { name: 'URL QR Generator', slug: 'url-to-qr-code', description: 'Direct visitors to your website or online booking portal.' }
        ]
      };
  }
}
