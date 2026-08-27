import type { Locale } from '../config';
import type { LocalizedPageContent } from './types';

export function getSmsContent(locale: Locale): LocalizedPageContent {
  switch (locale) {
    case 'es':
      return {
        slug: 'sms-qr-code-generator',
        qrTypeId: 'sms',
        title: 'Generador de Código QR para SMS — Enviar Mensajes de Texto al Instante',
        description: 'Crea códigos QR de SMS con número de teléfono y mensaje predefinido. Compatible con iPhone y Android. Descarga gratis en SVG y PNG.',
        h1: 'Generador de Código QR para SMS',
        subheadline: 'Permite a tus clientes enviar un mensaje de texto SMS con plantilla predefinida con un solo escaneo de cámara.',
        heading: 'Código QR de Mensajes SMS',
        subheading: 'Facilita la participación en sorteos, confirmación de citas y solicitudes de información mediante SMS.',
        overviewTitle: '¿Qué es un Código QR para SMS?',
        overviewParagraphs: [
          'Un generador de código QR para SMS codifica el protocolo estándar "SMSTO:número:mensaje" en una matriz bidimensional. Al enfocar el código con cualquier móvil iOS o Android, se abre inmediatamente la app de Mensajes con el destinatario y el texto ya redactados.',
          'Es ideal para campañas de marketing por mensaje corto, suscripción a alertas informativas o confirmación de asistencia sin necesidad de conexión a internet.',
          'Genera códigos en segundos y descarga en formato vectorial SVG para imprenta o PNG de alta resolución.'
        ],
        sectors: [
          { name: 'Campañas de Marketing y Sorteos', description: 'En carteles publicitarios con palabras clave tipo "PARTICIPAR".', benefit: 'Capta números de teléfono de clientes interesados.' },
          { name: 'Clínicas y Citas Médicas', description: 'En recordatorios de papel para confirmar o anular citas.', benefit: 'Reduce el absentismo en consultas.' },
          { name: 'Transporte y Aparcamientos', description: 'En parquímetros para abonar el estacionamiento por SMS.', benefit: 'Cobro rápido sin necesidad de descargar apps.' },
          { name: 'Atención al Ciudadano', description: 'En paradas de autobús para consultar horarios en tiempo real.', benefit: 'Servicio accesible sin smartphone avanzado.' },
          { name: 'Seguridad y Mantenimiento', description: 'Para reportar incidencias técnicas en edificios públicos.', benefit: 'Avisos directos al equipo de guardia.' },
          { name: 'Comercio Local y Ofertas', description: 'Para recibir cupones de descuento exclusivos en el móvil.', benefit: 'Incentiva las compras en tienda.' }
        ],
        howItWorks: [
          { title: '1. Introduce el Número de Teléfono', description: 'Escribe el número con prefijo internacional.' },
          { title: '2. Escribe el Texto del SMS', description: 'Redacta la palabra clave o mensaje que el usuario enviará.' },
          { title: '3. Descarga e Imprime', description: 'Exporta en SVG vectorial o PNG de alta calidad.' }
        ],
        useCases: [
          { title: 'Carteles en Tiendas', description: 'Para registrarse en el club de fidelización mediante SMS.', example: 'Cadena de moda captando clientes VIP.' },
          { title: 'Tarjetas de Citas Médicas', description: 'Para confirmar asistencia con la palabra "CONFIRMAR".', example: 'Clínica dental optimizando su agenda.' },
          { title: 'Parquímetros Urbanos', description: 'Para pago exprés del ticket de aparcamiento.', example: 'Gestión de estacionamiento municipal.' },
          { title: 'Vallas Publicitarias', description: 'Para solicitar llamada comercial inmediata.', example: 'Empresa de alarmas y seguridad.' }
        ],
        tips: [
          'Prefijo Internacional: Utiliza el formato internacional completo (ej. +34 600 000 000).',
          'Mensajes Breves: Cuanto más corto sea el texto, más grandes y legibles serán los puntos del código.',
          'Alto Contraste: Módulos negros sobre fondo blanco para lectura instantánea.',
          'Tamaño Físico: Al menos 20 x 20 mm en soportes impresos.',
          'Prueba Previa: Escanea el código con iPhone y Android antes de imprimir.'
        ],
        technicalNotes: 'Estándar SMSTO compatible con todos los sistemas operativos móviles.',
        faqs: [
          { question: '¿Cómo funciona el código QR de SMS al escanearlo?', answer: 'Al enfocar con la cámara, el móvil abre la aplicación de Mensajes con el número y el texto preparados para pulsar "Enviar".' },
          { question: '¿Se envía el mensaje automáticamente sin permiso?', answer: 'No, por seguridad el usuario siempre debe pulsar el botón de envío en su pantalla.' },
          { question: '¿Funciona en teléfonos sin conexión a internet?', answer: 'Sí, los mensajes SMS utilizan la red de telefonía móvil estándar sin requerir datos móviles.' },
          { question: '¿Puedo personalizar el texto del mensaje?', answer: 'Sí, puedes predefinir cualquier palabra clave o texto que desees.' },
          { question: '¿Tienen fecha de caducidad estos códigos?', answer: 'No, los códigos QR estáticos no caducan nunca y son totalmente gratuitos.' },
          { question: '¿Tiene algún coste por escaneo?', answer: 'No, los escaneos son ilimitados y gratuitos.' }
        ],
        relatedTools: [
          { name: 'QR de WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Inicia chats en WhatsApp con un escaneo.' },
          { name: 'QR de Llamada Telefónica', slug: 'phone-qr-code-generator', description: 'Llamadas de voz directas.' },
          { name: 'QR de Correo Email', slug: 'email-qr-code-generator', description: 'Borradores de email pre-redactados.' },
          { name: 'QR de Contacto vCard', slug: 'vcard-qr-code-generator', description: 'Guarda tarjetas en la agenda telefónica.' }
        ]
      };
    case 'de':
      return {
        slug: 'sms-qr-code-generator',
        qrTypeId: 'sms',
        title: 'SMS QR Code Generator — SMS-Nachrichten per Scan versenden',
        description: 'Erstellen Sie SMS QR-Codes mit Rufnummer und vordefiniertem Nachrichtentext. Kompatibel mit iOS und Android. Kostenloser Vektor-SVG & PNG Download.',
        h1: 'SMS QR Code Generator',
        subheadline: 'Ermöglichen Sie Kunden das Versenden vorbereiteter SMS-Nachrichten mit nur einem Kamera-Scan.',
        heading: 'SMS-Nachrichten-QR-Code',
        subheading: 'Vereinfachen Sie Gewinnspiele, Terminbestätigungen und SMS-Anfragen.',
        overviewTitle: 'Was ist ein SMS QR Code Generator?',
        overviewParagraphs: [
          'Ein SMS QR Code Generator kodiert den Standard "SMSTO:Nummer:Nachricht" in einen 2D-Barcode. Beim Scannen mit dem Smartphone öffnet sich sofort die Nachrichten-App mit vorausgefüllter Empfängernummer und Text.',
          'Perfekt für SMS-Marketingaktionen, Rückruf-Bitten oder Terminerinnerungen ganz ohne Internetverbindung.',
          'Erstellen Sie Codes in Sekunden und laden Sie diese als Vektor-SVG oder hochauflösendes PNG herunter.'
        ],
        sectors: [
          { name: 'Marketing & Gewinnspiele', description: 'Auf Plakaten mit Stichworten wie "GEWINN".', benefit: 'Erfasst Telefonnummern interessierter Kunden.' },
          { name: 'Arztpraxen & Kliniken', description: 'Auf Terminzetteln zur Bestätigung per SMS.', benefit: 'Reduziert Terminausfälle.' },
          { name: 'Öffentlicher Nahverkehr', description: 'An Haltestellen für Fahrplan-SMS in Echtzeit.', benefit: 'Funktioniert ohne mobile Daten.' },
          { name: 'Parkraumbewirtschaftung', description: 'An Parkscheinautomaten zum Bezahlen per SMS.', benefit: 'Bargeldlose Bezahlung ohne App-Download.' },
          { name: 'Hausverwaltung & Notdienste', description: 'Zur Meldung von Schäden per Schnelltext.', benefit: 'Direkte Benachrichtigung des Bereitschaftsdienstes.' },
          { name: 'Einzelhandel & Coupons', description: 'Zum Erhalt von Rabattcodes auf das Handy.', benefit: 'Steigert den Umsatz im Geschäft.' }
        ],
        howItWorks: [
          { title: '1. Rufnummer Eingeben', description: 'Geben Sie die Zielnummer mit internationaler Vorwahl ein.' },
          { title: '2. SMS-Text Festlegen', description: 'Verfassen Sie das Stichwort oder den Standardtext.' },
          { title: '3. Herunterladen & Drucken', description: 'Als Vektor-SVG für Druckereien oder PNG exportieren.' }
        ],
        useCases: [
          { title: 'Laden-Aufsteller', description: 'Zur Anmeldung für den SMS-Kundenclub.', example: 'Modegeschäft sammelt Kundennummern.' },
          { title: 'Terminzettel in Praxen', description: 'Mit "BESTAETIGEN" zur Terminsicherung.', example: 'Zahnarztpraxis optimiert Terminplanung.' },
          { title: 'Parkscheinautomaten', description: 'Für bargeldlose Parkzeitverlängerung.', example: 'Städtische Parkverwaltung.' },
          { title: 'Großplakate', description: 'Für sofortige Rückruf-Anfragen.', example: 'Versicherungsagentur.' }
        ],
        tips: [
          'Internationale Vorwahl: Immer mit Landesvorwahl angeben (z. B. +49 170...).',
          'Kurze Texte: Kürzere Texte erzeugen größere, leichter lesbare Punkte.',
          'Hoher Kontrast: Schwarze Punkte auf weißem Grund.',
          'Mindestgröße: Mindestens 20 x 20 mm im Druck.',
          'Kameratest: Vorab auf iOS und Android testen.'
        ],
        technicalNotes: 'Standard-SMSTO-Format für alle Mobiltelefone.',
        faqs: [
          { question: 'Wie funktioniert der SMS QR-Code beim Scannen?', answer: 'Beim Scannen öffnet sich die Nachrichten-App mit vorausgefüllter Nummer und vorbereitetem Text.' },
          { question: 'Wird die SMS automatisch versendet?', answer: 'Nein, aus Sicherheitsgründen muss der Nutzer immer manuell auf Senden tippen.' },
          { question: 'Funktioniert das ohne Internetverbindung?', answer: 'Ja, SMS laufen über das reguläre Mobilfunknetz und benötigen keine mobilen Daten.' },
          { question: 'Kann ich den Text vorformulieren?', answer: 'Ja, Sie können jedes gewünschte Stichwort oder einen Fragetext hinterlegen.' },
          { question: 'Laufen SMS QR-Codes ab?', answer: 'Nein, die statischen Codes sind dauerhaft gültig.' },
          { question: 'Gibt es ein Scan-Limit?', answer: 'Nein, die Scans sind unbegrenzt und kostenlos.' }
        ],
        relatedTools: [
          { name: 'WhatsApp QR Code', slug: 'whatsapp-qr-code-generator', description: 'Kundenchats auf WhatsApp starten.' },
          { name: 'Telefon QR Generator', slug: 'phone-qr-code-generator', description: 'Direkte Sprachanrufe per Scan.' },
          { name: 'E-Mail QR Generator', slug: 'email-qr-code-generator', description: 'Vorausgefüllte E-Mails per Scan.' },
          { name: 'vCard Visitenkarte', slug: 'vcard-qr-code-generator', description: 'Kontaktdaten im Telefonbuch speichern.' }
        ]
      };
    case 'fr':
      return {
        slug: 'sms-qr-code-generator',
        qrTypeId: 'sms',
        title: 'Générateur de QR Code SMS — Envoyer des SMS en 1 Scan',
        description: 'Créez des QR codes SMS avec numéro et message pré-rempli. Compatible iPhone et Android. Téléchargement gratuit en SVG et PNG.',
        h1: 'Générateur de QR Code SMS',
        subheadline: 'Permettez à vos clients d\'envoyer un SMS pré-rédigé d\'un simple scan de caméra.',
        heading: 'QR Code SMS',
        subheading: 'Facilitez vos jeux-concours, confirmations de rendez-vous et demandes de rappel par SMS.',
        overviewTitle: 'Qu\'est-ce qu\'un QR Code SMS ?',
        overviewParagraphs: [
          'Un générateur de QR code SMS encode le protocole "SMSTO:numéro:message" dans un code 2D. Au scan avec un smartphone, l\'application Messages s\'ouvre avec le destinataire et le texte déjà inscrits.',
          'Parfait pour les opérations de marketing SMS, les confirmations de présence ou les tickets de stationnement sans nécessiter de connexion internet.',
          'Téléchargement gratuit en SVG vectoriel pour imprimerie ou PNG haute définition.'
        ],
        sectors: [
          { name: 'Marketing & Concours', description: 'Sur affiches avec mot-clé type "JOUER".', benefit: 'Collecte les numéros de prospects qualifiés.' },
          { name: 'Santé & Cabinets Médicaux', description: 'Sur cartons de rendez-vous pour confirmer.', benefit: 'Réduit les rendez-vous non honorés.' },
          { name: 'Transports & Mobilité', description: 'Aux arrêts de bus pour les horaires en direct.', benefit: 'Accessible même sans forfait data 4G.' },
          { name: 'Stationnement & Horodateurs', description: 'Sur horodateurs pour payer son ticket par SMS.', benefit: 'Paiement sans installer d\'application.' },
          { name: 'Maintenance & Dépannage', description: 'Pour signaler une panne dans un bâtiment.', benefit: 'Alerte immédiate des équipes techniques.' },
          { name: 'Commerces & Réductions', description: 'Pour recevoir un code promo sur son mobile.', benefit: 'Encourage les achats en magasin.' }
        ],
        howItWorks: [
          { title: '1. Saisissez le Numéro', description: 'Indiquez le numéro avec l\'indicatif pays.' },
          { title: '2. Rédigez le SMS', description: 'Préparez le texte que l\'utilisateur enverra.' },
          { title: '3. Téléchargez et Imprimez', description: 'Exportez en SVG vectoriel ou PNG.' }
        ],
        useCases: [
          { title: 'Chevalets en Boutique', description: 'Pour rejoindre le club SMS de la marque.', example: 'Magasin de vêtements fidélisant sa clientèle.' },
          { title: 'Cartons de Rendez-Vous', description: 'Avec mention "CONFIRMER" par SMS.', example: 'Cabinet dentaire.' },
          { title: 'Horodateurs Municipaux', description: 'Pour paiement express du stationnement.', example: 'Gestion urbaine.' },
          { title: 'Panneaux Publicitaires', description: 'Pour demander à être rappelé.', example: 'Assurance de proximité.' }
        ],
        tips: [
          'Format International : Toujours inclure l\'indicatif (ex. +33 pour la France).',
          'Messages Courts : Un texte court génère des points plus larges et faciles à lire.',
          'Contraste Net : Points noirs sur fond blanc.',
          'Taille Minimale : Au moins 20 x 20 mm sur support imprimé.',
          'Testez sur Mobile : Vérification sur iPhone et Android.'
        ],
        technicalNotes: 'Protocole SMSTO standard supporté par tous les smartphones.',
        faqs: [
          { question: 'Que se passe-t-il lors du scan du QR code SMS ?', answer: 'L\'application Messages du téléphone s\'ouvre avec le numéro et le texte pré-remplis prêts à être envoyés.' },
          { question: 'Le SMS part-il tout seul ?', answer: 'Non, par sécurité l\'utilisateur doit toujours appuyer sur le bouton d\'envoi.' },
          { question: 'Fonctionne-t-il sans connexion internet ?', answer: 'Oui, les SMS passent par le réseau mobile cellulaire classique sans besoin de données mobiles.' },
          { question: 'Puis-je personnaliser le message ?', answer: 'Oui, vous pouvez écrire n\'importe quel mot-clé ou texte de votre choix.' },
          { question: 'Ces QR codes expirent-ils ?', answer: 'Non, les codes statiques sont valables à vie sans aucun frais.' },
          { question: 'Y a-t-il une limite de scans ?', answer: 'Non, les scans sont illimités et 100% gratuits.' }
        ],
        relatedTools: [
          { name: 'QR Code WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Démarrez des conversations WhatsApp.' },
          { name: 'QR Code Appel', slug: 'phone-qr-code-generator', description: 'Appels vocaux directs d\'un scan.' },
          { name: 'QR Code E-mail', slug: 'email-qr-code-generator', description: 'Courriels pré-rédigés d\'un scan.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Enregistrez vos coordonnées complètes.' }
        ]
      };
    case 'pt':
      return {
        slug: 'sms-qr-code-generator',
        qrTypeId: 'sms',
        title: 'Gerador de QR Code SMS — Enviar Mensagens de Texto com 1 Scan',
        description: 'Crie QR Codes de SMS com número e mensagem pré-preenchida. Compatível com iPhone e Android. Download grátis em SVG e PNG.',
        h1: 'Gerador de QR Code SMS',
        subheadline: 'Permita que clientes enviem um SMS pré-formatado com apenas um scan da câmera do celular.',
        heading: 'QR Code de Mensagem SMS',
        subheading: 'Facilite sorteios, confirmação de agendamentos e solicitações de contato via SMS.',
        overviewTitle: 'O que é um QR Code de SMS?',
        overviewParagraphs: [
          'Um gerador de QR Code de SMS codifica o protocolo "SMSTO:número:mensagem" em um código 2D. Ao apontar a câmera do smartphone, o app de Mensagens abre com o número e o texto já preenchidos.',
          'Ideal para promoções, confirmação de consultas ou serviços públicos que funcionam mesmo sem conexão com a internet.',
          'Gere em segundos e baixe em SVG vetorial para gráficas ou PNG em alta definição.'
        ],
        sectors: [
          { name: 'Marketing & Sorteios', description: 'Em cartazes com palavras como "PARTICIPAR".', benefit: 'Captura contatos de interessados.' },
          { name: 'Clínicas & Consultórios', description: 'Em cartões para confirmação de consultas.', benefit: 'Reduz faltas de pacientes.' },
          { name: 'Transporte Público', description: 'Em pontos de ônibus para consultar horários por SMS.', benefit: 'Funciona sem plano de dados 4G.' },
          { name: 'Estacionamento Rotativo', description: 'Para pagamento rápido de vagas de estacionamento.', benefit: 'Sem necessidade de baixar novos aplicativos.' },
          { name: 'Manutenção Predial', description: 'Para avisar sobre reparos em condomínios.', benefit: 'Aviso imediato para a equipe técnica.' },
          { name: 'Varejo & Promoções', description: 'Para receber cupons exclusivos no celular.', benefit: 'Incentiva vendas presenciais.' }
        ],
        howItWorks: [
          { title: '1. Digite o Número', description: 'Insira o telefone com o código do país.' },
          { title: '2. Escreva o SMS', description: 'Defina a palavra-chave ou texto da mensagem.' },
          { title: '3. Baixe e Imprima', description: 'Exporte em SVG vetorial para impressão ou PNG.' }
        ],
        useCases: [
          { title: 'Displays no Balcão', description: 'Para cadastro em clube de vantagens por SMS.', example: 'Loja de calçados cadastrando clientes.' },
          { title: 'Cartões de Consulta', description: 'Com o texto "CONFIRMAR" para a secretária.', example: 'Clínica odontológica.' },
          { title: 'Parquímetros', description: 'Para pagamento rápido de tíquetes.', example: 'Estacionamento municipal.' },
          { title: 'Outdoors e Cartazes', description: 'Para solicitar contato telefônico.', example: 'Corretora de seguros.' }
        ],
        tips: [
          'Formato Internacional: Sempre use o código do país (ex.: +55 para o Brasil).',
          'Mensagens Curtas: Textos curtos geram pontos maiores e leitura mais rápida.',
          'Alto Contraste: Módulos pretos sobre fundo branco.',
          'Tamanho Mínimo: Pelo menos 20 x 20 mm na impressão.',
          'Teste no Celular: Verifique no iPhone e Android antes de rodar a impressão.'
        ],
        technicalNotes: 'Padrão SMSTO compatível com todos os sistemas operacionais móveis.',
        faqs: [
          { question: 'Como funciona o QR Code de SMS?', answer: 'Ao escanear, o aplicativo de mensagens do celular abre com o número e o texto já preenchidos prontos para envio.' },
          { question: 'A mensagem é enviada sozinha?', answer: 'Não, por questões de segurança o usuário precisa tocar no botão de enviar.' },
          { question: 'Funciona sem internet no celular?', answer: 'Sim, o SMS trafega pela rede de telefonia convencional sem precisar de dados móveis.' },
          { question: 'Posso personalizar o texto?', answer: 'Sim, você pode definir qualquer palavra-chave ou frase de sua escolha.' },
          { question: 'Os códigos expiram?', answer: 'Não, são códigos estáticos que funcionam permanentemente.' },
          { question: 'Há limite de leituras?', answer: 'Não, os scans são ilimitados e totalmente grátis.' }
        ],
        relatedTools: [
          { name: 'QR Code WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Inicie conversas no WhatsApp.' },
          { name: 'QR Code de Chamada', slug: 'phone-qr-code-generator', description: 'Disque números diretamente.' },
          { name: 'QR Code de E-mail', slug: 'email-qr-code-generator', description: 'Envie e-mails pré-preenchidos.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Salve contatos na agenda do celular.' }
        ]
      };
    case 'it':
      return {
        slug: 'sms-qr-code-generator',
        qrTypeId: 'sms',
        title: 'Generatore QR Code SMS — Inviare Messaggi SMS con una Scansione',
        description: 'Crea codici QR per SMS con numero di telefono e testo preimpostato. Compatibile con iOS e Android. Download gratuito in SVG e PNG.',
        h1: 'Generatore QR Code SMS',
        subheadline: 'Permetti ai clienti di inviare un SMS precompilato con una sola scansione della fotocamera.',
        heading: 'QR Code per Messaggi SMS',
        subheading: 'Semplifica concorsi, conferme di appuntamenti e richieste di informazioni via SMS.',
        overviewTitle: 'Cos\'è un QR Code per SMS?',
        overviewParagraphs: [
          'Un generatore di codici QR per SMS codifica il protocollo standard "SMSTO:numero:testo" in un codice 2D. Inquadrando il codice con lo smartphone, l\'app Messaggi si apre immediatamente con destinatario e testo già inseriti.',
          'Ideale per promozioni, promemoria di visite o servizi di pubblica utilità che non richiedono connessione internet.',
          'Download gratuito in formato vettoriale SVG per la tipografia o PNG ad alta risoluzione.'
        ],
        sectors: [
          { name: 'Marketing & Concorsi', description: 'Su manifesti con parole chiave come "PARTECIPA".', benefit: 'Raccoglie contatti di potenziali clienti.' },
          { name: 'Studi Medici & Cliniche', description: 'Su promemoria per confermare l\'appuntamento.', benefit: 'Riduce le assenze dei pazienti.' },
          { name: 'Trasporto Pubblico', description: 'Alle fermate per consultare gli orari dei bus via SMS.', benefit: 'Funziona senza connessione dati 4G.' },
          { name: 'Parcheggi & Parchimetri', description: 'Per pagare la sosta rapidamente tramite SMS.', benefit: 'Pagamento immediato senza scaricare app.' },
          { name: 'Manutenzione & Guasti', description: 'Per segnalare problemi tecnici in edifici pubblici.', benefit: 'Avviso istantaneo ai tecnici.' },
          { name: 'Negozi & Sconti', description: 'Per ricevere codici promozionali sul cellulare.', benefit: 'Incentiva gli acquisti in negozio.' }
        ],
        howItWorks: [
          { title: '1. Inserisci il Numero', description: 'Digita il numero con prefisso internazionale.' },
          { title: '2. Scrivi il Testo dell\'SMS', description: 'Imposta la parola chiave o il messaggio che l\'utente invierà.' },
          { title: '3. Scarica e Stampa', description: 'Esporta in SVG vettoriale per la stampa o PNG.' }
        ],
        useCases: [
          { title: 'Espositori sul Bancone', description: 'Per iscriversi al club fedeltà via SMS.', example: 'Negozio di abbigliamento.' },
          { title: 'Cartoncini Appuntamenti', description: 'Con la parola "CONFERMA" per lo studio.', example: 'Studio dentistico.' },
          { title: 'Parchimetri Cittadini', description: 'Per il rinnovo rapido del ticket di sosta.', example: 'Gestione parcheggi urbani.' },
          { title: 'Cartelloni Pubblicitari', description: 'Per richiedere di essere richiamati.', example: 'Agenzia di assicurazioni.' }
        ],
        tips: [
          'Prefisso Internazionale: Inserisci sempre il prefisso (es. +39 per l\'Italia).',
          'Messaggi Concisi: Testi brevi generano punti più grandi e facili da leggere.',
          'Contrasto Elevato: Moduli neri su sfondo bianco.',
          'Dimensioni Minime: Almeno 20 x 20 mm sui documenti stampati.',
          'Test da Smartphone: Controlla con iPhone e Android prima della stampa.'
        ],
        technicalNotes: 'Protocollo standard SMSTO pienamente supportato da tutti gli smartphone.',
        faqs: [
          { question: 'Cosa accade quando si scansiona il codice QR SMS?', answer: 'L\'app Messaggi del telefono si apre con il numero e il testo precompilati pronti per essere inviati.' },
          { question: 'Il messaggio parte in automatico?', answer: 'No, per motivi di sicurezza l\'utente deve sempre premere il tasto di invio.' },
          { question: 'Funziona senza connessione internet?', answer: 'Sì, gli SMS utilizzano la normale rete telefonica cellulare senza necessitare di connessione dati.' },
          { question: 'Posso personalizzare il testo del messaggio?', answer: 'Sì, puoi inserire qualsiasi parola chiave o frase desiderata.' },
          { question: 'Questi codici QR scadono?', answer: 'No, i codici statici restano validi per sempre senza alcun costo.' },
          { question: 'C\'è un limite alle scansioni?', answer: 'No, le scansioni sono illimitate e totalmente gratuite.' }
        ],
        relatedTools: [
          { name: 'QR Code WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Avvia chat dirette su WhatsApp.' },
          { name: 'QR Code Chiamata', slug: 'phone-qr-code-generator', description: 'Avvia chiamate vocali istantanee.' },
          { name: 'QR Code Email', slug: 'email-qr-code-generator', description: 'Invia email precompilate con un tocco.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Salva i contatti completi in rubrica.' }
        ]
      };
    case 'hi':
      return {
        slug: 'sms-qr-code-generator',
        qrTypeId: 'sms',
        title: 'SMS QR कोड जेनरेटर — एक स्कैन में टेक्स्ट मैसेज भेजें',
        description: 'फ़ोन नंबर और तैयार संदेश के साथ SMS QR कोड बनाएं। iPhone और Android के साथ संगत। मुफ़्त डाउनलोड।',
        h1: 'SMS QR कोड जेनरेटर',
        subheadline: 'ग्राहकों को एक स्कैन में पहले से लिखा हुआ SMS टेक्स्ट मैसेज भेजने की सुविधा दें।',
        heading: 'SMS मैसेज QR कोड',
        subheading: 'लकी ड्रा, अपॉइंटमेंट पुष्टिकरण और एसएमएस पूछताछ प्रक्रिया को आसान बनाएं।',
        overviewTitle: 'SMS QR कोड क्या है?',
        overviewParagraphs: [
          'SMS QR कोड आधिकारिक "SMSTO:नंबर:संदेश" प्रोटोकॉल को 2D बारकोड में बदल देता है। जब कोई इसे फोन कैमरे से स्कैन करता है, तो मोबाइल की मैसेज ऐप खुल जाती है जिसमें नंबर और संदेश पहले से लिखा मिलता है।',
          'यह SMS मार्केटिंग, लकी ड्रा एंट्री या बिना इंटरनेट के संपर्क करने का सबसे तेज़ तरीका है।',
          'प्रिंटिंग के लिए वेक्टर SVG और स्क्रीन के लिए PNG मुफ़्त डाउनलोड करें।'
        ],
        sectors: [
          { name: 'मार्केटिंग व लकी ड्रा', description: 'पोस्टरों पर "PARTICIPATE" कीवर्ड के साथ लगाएं।', benefit: 'संभावित ग्राहकों के नंबर इकट्ठा करता है।' },
          { name: 'क्लीनिक व डॉक्टर अपॉइंटमेंट', description: 'अपॉइंटमेंट पर्ची पर "CONFIRM" लिखकर भेजने हेतु।', benefit: 'मरीजों की गैर-हाजिरी को रोकता है।' },
          { name: 'पब्लिक ट्रांसपोर्ट', description: 'बस स्टॉप पर लाइव शेड्यूल मंगाने के लिए।', benefit: 'बिना इंटरनेट डेटा के भी काम करता है।' },
          { name: 'पार्किंग पेमेंट', description: 'पार्किंग मीटर पर एसएमएस द्वारा भुगतान हेतु।', benefit: 'बिना ऐप डाउनलोड किए भुगतान।' },
          { name: 'मेंटेनेंस व हेल्पडेस्क', description: 'खराबी की सूचना एसएमएस द्वारा देने हेतु।', benefit: 'ड्यूटी स्टाफ को त्वरित सूचना।' },
          { name: 'लोकल स्टोर्स व डिस्काउंट', description: 'मोबाइल पर डिस्काउंट कूपन प्राप्त करने हेतु।', benefit: 'दुकान की बिक्री बढ़ाता है।' }
        ],
        howItWorks: [
          { title: '1. फोन नंबर दर्ज करें', description: 'कंट्री कोड के साथ अपना नंबर लिखें।' },
          { title: '2. संदेश लिखें', description: 'ग्राहक द्वारा भेजा जाने वाला टेक्स्ट सेट करें।' },
          { title: '3. डाउनलोड व प्रिंट करें', description: 'वेक्टर SVG या हाई-रिज़ॉल्यूशन PNG डाउनलोड करें।' }
        ],
        useCases: [
          { title: 'दुकान पर लगा स्टैंड', description: 'कस्टमर क्लब में जुड़ने के लिए एसएमएस कोड।', example: 'कपड़ों की दुकान पर डिस्काउंट कोड।' },
          { title: 'अपॉइंटमेंट पर्ची', description: 'डॉक्टर की पर्ची पर कन्फर्मेशन कोड।', example: 'डेंटल क्लीनिक अपॉइंटमेंट।' },
          { title: 'पार्किंग मीटर', description: 'पार्किंग पर्ची रिन्यू करने हेतु।', example: 'नगर पालिका पार्किंग सिस्टम।' },
          { title: 'होर्डिंग व विज्ञापन बोर्ड', description: 'कॉलबैक मंगाने के लिए एसएमएस कोड।', example: 'इंश्योरेंस कंपनी लीड कोड।' }
        ],
        tips: [
          'कंट्री कोड अवश्य लगाएं: फोन नंबर में +91 जैसा अंतरराष्ट्रीय कोड जोड़ें।',
          'छोटा संदेश लिखें: छोटे संदेश से बड़े डॉट्स बनते हैं जो आसानी से स्कैन होते हैं।',
          'हाई कंट्रास्ट: सफ़ेद बैकग्राउंड पर गहरे काले डॉट्स रखें।',
          'न्यूनतम साइज़: कागज़ पर कम से कम 20 x 20 मिमी आकार रखें।',
          'मोबाइल से जांच: प्रिंट से पहले स्कैन करके चेक करें।'
        ],
        technicalNotes: 'मानक SMSTO प्रोटोकॉल सभी मोबाइल फोन पर पूरी तरह समर्थित।',
        faqs: [
          { question: 'स्कैन करने पर SMS QR कोड कैसे काम करता है?', answer: 'कैमरे से स्कैन करते ही मैसेज ऐप अपने आप खुल जाती है जिसमें नंबर और मैसेज तैयार मिलते हैं।' },
          { question: 'क्या मैसेज अपने आप चला जाता है?', answer: 'नहीं, सुरक्षा कारणों से यूजर को हमेशा अपने फोन पर सेंड बटन दबाना होता है।' },
          { question: 'क्या यह बिना इंटरनेट के काम करता है?', answer: 'हाँ, SMS सामान्य मोबाइल नेटवर्क पर काम करता है और इसके लिए इंटरनेट डेटा की आवश्यकता नहीं होती।' },
          { question: 'क्या मैं मैसेज में बदलाव कर सकता हूँ?', answer: 'हाँ, आप कोई भी कीवर्ड या संदेश पहले से तय कर सकते हैं।' },
          { question: 'क्या यह QR कोड कभी एक्सपायर होता है?', answer: 'नहीं, यह कोड हमेशा के लिए सक्रिय और मुफ़्त रहता है।' },
          { question: 'क्या स्कैन करने की कोई सीमा है?', answer: 'नहीं, आप असीमित बार स्कैन कर सकते हैं।' }
        ],
        relatedTools: [
          { name: 'WhatsApp QR जेनरेटर', slug: 'whatsapp-qr-code-generator', description: 'ग्राहकों से सीधे व्हाट्सएप चैट शुरू करें।' },
          { name: 'फ़ोन कॉल QR जेनरेटर', slug: 'phone-qr-code-generator', description: 'एक स्कैन में सीधे कॉल मिलाएं।' },
          { name: 'ईमेल QR जेनरेटर', slug: 'email-qr-code-generator', description: 'स्कैन करते ही तैयार ईमेल ड्राफ्ट खोलें।' },
          { name: 'vCard विज़िटिंग कार्ड QR', slug: 'vcard-qr-code-generator', description: 'संपर्क विवरण सीधे फोनबुक में सेव कराएं।' }
        ]
      };
    default: // 'en'
      return {
        slug: 'sms-qr-code-generator',
        qrTypeId: 'sms',
        title: 'SMS QR Code Generator — Send Pre-Filled Text Messages',
        description: 'Create SMS QR codes with destination phone number and pre-filled text message. Compatible with iOS and Android. Free vector SVG & PNG download.',
        h1: 'SMS QR Code Generator',
        subheadline: 'Let customers and leads send a pre-composed SMS text message in a single camera scan.',
        heading: 'SMS Text Message QR Code',
        subheading: 'Facilitate text-to-join marketing, appointment confirmations, and SMS customer support.',
        overviewTitle: 'What is an SMS QR Code Generator?',
        overviewParagraphs: [
          'An SMS QR code generator encodes standard "SMSTO:number:message" URI protocols into an optical 2D barcode. When scanned using any smartphone camera, the device launches the native text messaging app (Apple Messages or Google Messages) with the recipient phone number and body message already populated.',
          'SMS marketing and text-to-win sweepstakes often fail when customers misspell shortcodes or keywords. An SMS QR code completely eliminates transcription errors, ensuring 100% accurate keyword submissions without requiring mobile data.',
          'Generate codes in seconds and export print-ready vector SVG files for physical signage or high-DPI PNG images for digital displays.'
        ],
        sectors: [
          { name: 'Marketing Sweepstakes & Contests', description: 'Printed on posters with keywords like "ENTER" to join giveaway promotions.', benefit: 'Captures verified mobile phone leads.' },
          { name: 'Medical & Dental Clinics', description: 'Printed on appointment reminder slips to confirm visits via SMS.', benefit: 'Significantly reduces clinic no-show rates.' },
          { name: 'Public Transit & Commuting', description: 'Displayed at bus stops for instant next-arrival schedule alerts.', benefit: 'Accessible even without a 4G/5G data connection.' },
          { name: 'Municipal Parking Meters', description: 'Allows drivers to pay for parking spaces via text message.', benefit: 'Frictionless payment without installing third-party apps.' },
          { name: 'Facility Management & Maintenance', description: 'Enables tenants to text maintenance alerts directly to on-call staff.', benefit: 'Provides immediate notifications to service teams.' },
          { name: 'Retailers & Loyalty Clubs', description: 'Promotes text-to-join VIP discounts on checkout counter signage.', benefit: 'Drives repeat in-store sales.' }
        ],
        howItWorks: [
          { title: '1. Enter Destination Phone Number', description: 'Input your phone number with the international country code.' },
          { title: '2. Draft Pre-Filled SMS Message', description: 'Specify the campaign keyword or default inquiry text.' },
          { title: '3. Download & Print', description: 'Export resolution-independent vector SVG for print or high-DPI PNG.' }
        ],
        useCases: [
          { title: 'Point-of-Sale Counter Signs', description: 'Tabletop stands inviting shoppers to text for 15% off their next purchase.', example: 'Retail boutique building an SMS VIP subscriber list.' },
          { title: 'Appointment Reminder Cards', description: 'Leave-behind cards with pre-filled "CONFIRM" text.', example: 'Dental practice optimizing daily patient schedules.' },
          { title: 'Curbside Parking Meters', description: 'Stickers enabling motorists to pay or extend parking by text.', example: 'Municipal parking authority.' },
          { title: 'Billboard Advertising', description: 'Highway billboards inviting drivers to text for insurance quotes.', example: 'Insurance agency capturing high-intent inquiries.' }
        ],
        tips: [
          'International Country Code: Always format phone numbers with country codes (e.g. +1 for US).',
          'Keep Text Short: Shorter character counts produce simpler QR matrices with larger dots that scan faster.',
          'High Optical Contrast: Maintain dark modules on a clean white background.',
          'Minimum Physical Print Size: Print at a minimum of 20 x 20 mm on physical paper.',
          'Multi-Device Field Test: Test scanning across both Apple Messages on iOS and Google Messages on Android.'
        ],
        technicalNotes: 'Standards Compliance: Generates standard RFC-compliant SMSTO payloads natively supported on all mobile devices.',
        faqs: [
          { question: 'How does an SMS QR code work when scanned?', answer: 'When scanned with any smartphone camera, the native text messaging app opens with the recipient phone number and custom message pre-typed and ready to send.' },
          { question: 'Does the SMS send automatically without permission?', answer: 'No. For security and privacy reasons, the mobile operating system always requires the user to manually press the send button.' },
          { question: 'Does this work without an active mobile data plan?', answer: 'Yes! Standard SMS messages travel over cellular telephone carrier networks and do not require active Wi-Fi or cellular mobile data.' },
          { question: 'Can I customize the pre-filled text message?', answer: 'Yes. You can compose any campaign keyword, inquiry question, or greeting template you desire.' },
          { question: 'Do SMS QR codes ever expire?', answer: 'No. Static SMS QR codes encode the data directly and will continue to work indefinitely with zero ongoing fees.' },
          { question: 'Is there a limit on how many scans I can receive?', answer: 'No! Scans are 100% unlimited and free forever.' }
        ],
        relatedTools: [
          { name: 'WhatsApp QR Generator', slug: 'whatsapp-qr-code-generator', description: 'Launch instant WhatsApp business conversations.' },
          { name: 'Phone QR Generator', slug: 'phone-qr-code-generator', description: 'Enable one-tap phone calls directly from printed signage.' },
          { name: 'Email QR Generator', slug: 'email-qr-code-generator', description: 'Pre-compose email drafts in a single scan.' },
          { name: 'vCard QR Generator', slug: 'vcard-qr-code-generator', description: 'Share full contact credentials directly to address books.' }
        ]
      };
  }
}
