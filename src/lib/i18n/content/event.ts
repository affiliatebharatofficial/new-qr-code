import type { Locale } from '../config';
import type { LocalizedPageContent } from './types';

export function getEventContent(locale: Locale): LocalizedPageContent {
  switch (locale) {
    case 'es':
      return {
        slug: 'event-qr-code-generator',
        qrTypeId: 'event',
        title: 'Generador de Código QR para Eventos — Añadir al Calendario en 1 Toque',
        description: 'Crea códigos QR de eventos y añade citas al calendario en Google Calendar, Apple Calendar y Outlook. Descarga en vector SVG y PNG.',
        h1: 'Generador de Código QR para Eventos',
        subheadline: 'Permite a tus invitados guardar la fecha, hora, ubicación y detalles del evento en su calendario móvil con un solo escaneo.',
        heading: 'Código QR de Calendario y Eventos',
        subheading: 'Elimina olvidos y asegura la asistencia a tus conferencias, bodas, conciertos y webinars.',
        overviewTitle: '¿Qué es un Código QR para Eventos?',
        overviewParagraphs: [
          'Un generador de código QR para eventos codifica el formato estándar iCalendar (.ics / VEVENT) en una matriz 2D. Al escanearlo con la cámara del móvil, el smartphone abre directamente el calendario (Google Calendar, Apple Calendar o Microsoft Outlook) con el título, fecha de inicio y fin, dirección y recordatorio ya programados.',
          'Las invitaciones en papel se olvidan con facilidad en un cajón. Un código QR de evento añade la cita al calendario del móvil con alarmas automáticas previas al inicio.',
          'Personaliza colores, añade tu logotipo y descarga gratis en formato vectorial SVG para imprenta o PNG de alta resolución.'
        ],
        sectors: [
          { name: 'Bodas y Celebraciones Privadas', description: 'En invitaciones de boda para que nadie confunda la fecha ni el lugar.', benefit: 'Máxima puntualidad de los invitados.' },
          { name: 'Conciertos y Festivales', description: 'En entradas y carteles para programar la apertura de puertas.', benefit: 'Aumenta la asistencia efectiva al show.' },
          { name: 'Conferencias y Ferias B2B', description: 'En programas impresos para guardar ponencias y talleres clave.', benefit: 'Organización fluida de los asistentes.' },
          { name: 'Cursos y Talleres de Formación', description: 'En folletos académicos para agendar el inicio de clases.', benefit: 'Recordatorios automáticos para alumnos.' },
          { name: 'Deportes y Maratones', description: 'En dorsales y carteles para la entrega de dorsales y salida.', benefit: 'Evita retrasos en la línea de salida.' },
          { name: 'Webinars y Lanzamientos Online', description: 'En diapositivas previas para agendar la transmisión en directo.', benefit: 'Mayor tasa de conexión en vivo.' }
        ],
        howItWorks: [
          { title: '1. Rellena los Datos del Evento', description: 'Escribe el título, fecha/hora de inicio y fin, ubicación y descripción.' },
          { title: '2. Personaliza el Diseño', description: 'Elige tu paleta corporativa y añade el icono de calendario o logo.' },
          { title: '3. Descarga e Imprime', description: 'Exporta en SVG vectorial para imprenta o PNG de alta resolución.' }
        ],
        useCases: [
          { title: 'Tarjetas de Invitación', description: 'Impreso en el reverso con la llamada "Añade la fecha a tu móvil".', example: 'Invitación a gala benéfica anual.' },
          { title: 'Cartelería de Festivales', description: 'En marquesinas y paradas con el horario del festival.', example: 'Festival de música con 5.000 asistentes.' },
          { title: 'Acreditaciones de Congresos', description: 'Con la hora de la sesión plenaria de apertura.', example: 'Congreso médico internacional.' },
          { title: 'Folletos de Cursos', description: 'En la ficha de inscripción del curso profesional.', example: 'Escuela de negocios agendando masterclasses.' }
        ],
        tips: [
          'Zona Horaria Exacta: Asegúrate de definir correctamente la zona horaria del evento.',
          'Ubicación Completa: Añade la dirección física o el enlace de la sala virtual.',
          'Alto Contraste: Módulos negros sobre fondo blanco para escaneo instantáneo.',
          'Tamaño Físico: Al menos 25 x 25 mm en invitaciones impresas.',
          'Prueba en iPhone y Android: Comprueba que el evento se guarde con la hora correcta en ambos sistemas.'
        ],
        technicalNotes: 'Formato estándar VEVENT compatible con Apple Calendar, Google Calendar y Outlook.',
        faqs: [
          { question: '¿Cómo se guarda el evento en el móvil al escanear?', answer: 'La cámara reconoce el evento y abre la app de calendario con todos los datos listos para pulsar "Guardar".' },
          { question: '¿Funciona con Google Calendar y Apple Calendar?', answer: 'Sí, es compatible de forma nativa con todos los calendarios móviles en iOS y Android.' },
          { question: '¿Incluye alarmas y recordatorios automáticos?', answer: 'Sí, el calendario del móvil aplicará las alertas predeterminadas del usuario antes del inicio.' },
          { question: '¿Caducan estos códigos QR de evento?', answer: 'No, son códigos estáticos que no caducan y funcionan permanentemente.' },
          { question: '¿Puedo colocar el logo de mi evento en el centro?', answer: 'Sí, sube tu logo y el sistema ajustará la corrección de errores al nivel Alto (30%).' },
          { question: '¿Tiene algún coste?', answer: 'No, la creación y descarga en SVG o PNG es 100% gratuita.' }
        ],
        relatedTools: [
          { name: 'QR de Ubicación', slug: 'location-qr-code-generator', description: 'Abre la ruta en Google Maps con un toque.' },
          { name: 'QR de Contacto vCard', slug: 'vcard-qr-code-generator', description: 'Comparte datos de contacto del organizador.' },
          { name: 'QR de Enlace Web', slug: 'url-to-qr-code', description: 'Dirige visitas a la página de venta de entradas.' },
          { name: 'QR de WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Inicia chats de atención a asistentes.' }
        ]
      };
    case 'de':
      return {
        slug: 'event-qr-code-generator',
        qrTypeId: 'event',
        title: 'Event QR Code Generator — Termine im Kalender speichern',
        description: 'Erstellen Sie Event-QR-Codes zum Speichern von Terminen in Apple Calendar, Google Calendar und Outlook. Vektor-SVG & PNG Download.',
        h1: 'Event QR Code Generator',
        subheadline: 'Lassen Sie Gäste Datum, Uhrzeit, Ort und Details mit einem einzigen Scan direkt in ihren Smartphone-Kalender eintragen.',
        heading: 'Event- & Kalender-QR-Code',
        subheading: 'Verhindern Sie Terminversäumnisse bei Hochzeiten, Konzerten, Konferenzen und Webinaren.',
        overviewTitle: 'Was ist ein Event QR Code Generator?',
        overviewParagraphs: [
          'Ein Event QR Code Generator kodiert das standardisierte iCalendar-Format (.ics / VEVENT) in einen 2D-Barcode. Beim Scannen mit der Handykamera öffnet das Smartphone sofort die Kalender-App (Google Kalender, Apple Kalender, Outlook) mit vorbereitetem Termin.',
          'Papier-Einladungen gehen oft unter. Ein Event-QR-Code speichert den Termin mit automatischen Vorab-Erinnerungen direkt im Kalender.',
          'Kostenloser Download in druckfertigem Vektor-SVG oder hochauflösendem PNG.'
        ],
        sectors: [
          { name: 'Hochzeiten & Familienfeiern', description: 'Auf Einladungskarten zur Absicherung des Datums.', benefit: 'Keine vergessenen Feiertermine.' },
          { name: 'Konzerte & Festivals', description: 'Auf Plakaten und Tickets mit Einlass- und Showbeginn.', benefit: 'Pünktlicher Einlass der Besucher.' },
          { name: 'Konferenzen & B2B-Messen', description: 'Auf Kongressprogrammen zur Terminsicherung wichtiger Vorträge.', benefit: 'Reibungslose Teilnehmerorganisation.' },
          { name: 'Schulungen & Workshops', description: 'Auf Flyern zum Speichern der Seminarzeiten.', benefit: 'Automatische Erinnerungen für Teilnehmer.' },
          { name: 'Sport-Events & Läufe', description: 'Auf Startnummern für Startzeiten und Siegerehrung.', benefit: 'Pünktliche Starts ohne Verzögerung.' },
          { name: 'Webinare & Online-Launches', description: 'Auf Vorab-Folien zum Eintragen des Live-Streams.', benefit: 'Höhere Live-Zuschauerquoten.' }
        ],
        howItWorks: [
          { title: '1. Eventdaten Eingeben', description: 'Titel, Datum/Uhrzeit von Beginn und Ende, Ort und Beschreibung eintragen.' },
          { title: '2. Design Anpassen', description: 'Farben wählen und Kalender-Icon oder Logo einfügen.' },
          { title: '3. Herunterladen & Drucken', description: 'Als Vektor-SVG für Drucksachen oder PNG exportieren.' }
        ],
        useCases: [
          { title: 'Einladungskarten', description: 'Auf der Rückseite mit "Termin im Smartphone speichern".', example: 'Gala-Einladung mit Termin-Code.' },
          { title: 'Festivalplakate', description: 'An Haltestellen mit den Festivalzeiten.', example: 'Musikfestival mit 5.000 Besuchern.' },
          { title: 'Messe-Badges', description: 'Mit der Uhrzeit der Eröffnungskeynote.', example: 'Medizinischer Fachkongress.' },
          { title: 'Seminarbroschüren', description: 'Auf Anmeldebögen zur Terminsicherung.', example: 'Management-Akademie.' }
        ],
        tips: [
          'Zeitzone beachten: Richtige Zeitzone für internationale Gäste einstellen.',
          'Vollständiger Ort: Genaue Adresse oder virtuellen Meeting-Link angeben.',
          'Hoher Kontrast: Schwarze Punkte auf weißem Grund.',
          'Mindestgröße: Mindestens 25 x 25 mm auf gedruckten Einladungen.',
          'Kameratest: Vorab auf iPhone und Android auf korrekte Uhrzeit prüfen.'
        ],
        technicalNotes: 'Standardmäßiges VEVENT-Format für iOS, Android und Outlook.',
        faqs: [
          { question: 'Wie speichert das Smartphone den Termin beim Scannen?', answer: 'Die Handykamera erkennt die Kalenderdaten und öffnet die Kalender-App mit vorausgefülltem Termin zum Speichern mit 1 Klick.' },
          { question: 'Funktioniert das mit Apple Calendar und Google Kalender?', answer: 'Ja, es wird von allen Standard-Kalender-Apps auf iOS und Android nativ unterstützt.' },
          { question: 'Werden automatische Erinnerungen gesetzt?', answer: 'Ja, der Kalender wendet die vordefinierten Erinnerungsalarme des Smartphones an.' },
          { question: 'Laufen Event-QR-Codes ab?', answer: 'Nein, die statischen Codes sind dauerhaft und ohne Zusatzkosten gültig.' },
          { question: 'Kann ich mein Logo einfügen?', answer: 'Ja, laden Sie Ihr Logo hoch und die Fehlerkorrektur wird automatisch auf Stufe H (30%) gesetzt.' },
          { question: 'Ist die Erstellung kostenlos?', answer: 'Ja, die Erstellung und der Download in SVG und PNG sind 100% kostenlos.' }
        ],
        relatedTools: [
          { name: 'Standort QR Generator', slug: 'location-qr-code-generator', description: 'Google Maps Route per Klick öffnen.' },
          { name: 'vCard Visitenkarte', slug: 'vcard-qr-code-generator', description: 'Kontaktdaten des Veranstalters teilen.' },
          { name: 'Weblink QR Generator', slug: 'url-to-qr-code', description: 'Besucher zum Ticketverkauf weiterleiten.' },
          { name: 'WhatsApp QR Code', slug: 'whatsapp-qr-code-generator', description: 'Gäste-Support auf WhatsApp starten.' }
        ]
      };
    case 'fr':
      return {
        slug: 'event-qr-code-generator',
        qrTypeId: 'event',
        title: 'Générateur de QR Code Événement — Ajouter au Calendrier en 1 Scan',
        description: 'Créez des QR codes d\'événements pour enregistrer des dates dans Google Agenda, Apple Calendar et Outlook. Téléchargement SVG et PNG.',
        h1: 'Générateur de QR Code Événement',
        subheadline: 'Permettez à vos invités d\'enregistrer la date, l\'heure et le lieu de votre événement dans leur calendrier mobile en un seul scan.',
        heading: 'QR Code Calendrier & Événements',
        subheading: 'Évitez les oublis et garantissez la présence à vos conférences, mariages, concerts et webinaires.',
        overviewTitle: 'Qu\'est-ce qu\'un QR Code Événement ?',
        overviewParagraphs: [
          'Un générateur de QR code événement encode le format iCalendar standard (.ics / VEVENT) dans un code 2D. En scannant le code, le smartphone ouvre directement l\'agenda (Google Agenda, Apple Calendar, Outlook) avec le titre, les horaires, l\'adresse et les rappels pré-programmés.',
          'Les cartons d\'invitation papier sont souvent égarés. Un QR code d\'événement inscrit le rendez-vous dans le smartphone avec des notifications automatiques.',
          'Téléchargement gratuit en SVG vectoriel pour imprimerie ou PNG haute définition.'
        ],
        sectors: [
          { name: 'Mariages & Fêtes Privées', description: 'Sur les faire-part pour que les invités n\'oublient pas la date.', benefit: 'Ponctualité garantie des invités.' },
          { name: 'Concerts & Festivals', description: 'Sur affiches et billets pour enregistrer l\'ouverture des portes.', benefit: 'Maximise la présence effective au spectacle.' },
          { name: 'Conférences & Congrès B2B', description: 'Sur programmes imprimés pour mémoriser les ateliers clés.', benefit: 'Organisation fluide des participants.' },
          { name: 'Formations & Ateliers', description: 'Sur plaquettes pour planifier le début des cours.', benefit: 'Rappels automatiques pour les apprenants.' },
          { name: 'Événements Sportifs & Marathons', description: 'Sur dossards pour le départ et la remise des prix.', benefit: 'Départs ponctuels sans retard.' },
          { name: 'Webinaires & Live Streams', description: 'Sur diapositives pour réserver le créneau en direct.', benefit: 'Meilleur taux de connexion en direct.' }
        ],
        howItWorks: [
          { title: '1. Renseignez les Infos de l\'Événement', description: 'Indiquez titre, dates/heures de début et fin, lieu et description.' },
          { title: '2. Personnalisez l\'Apparence', description: 'Choisissez vos couleurs et ajoutez l\'icône agenda ou votre logo.' },
          { title: '3. Téléchargez et Imprimez', description: 'Exportez en SVG vectoriel pour impression ou PNG.' }
        ],
        useCases: [
          { title: 'Cartons d\'Invitation', description: 'Au verso avec la mention "Enregistrez la date sur votre mobile".', example: 'Gala de bienfaisance annuel.' },
          { title: 'Affiches de Festivals', description: 'Aux abords des gares avec les horaires des concerts.', example: 'Festival avec 5 000 participants.' },
          { title: 'Badges de Congrès', description: 'Avec l\'heure de la plénière d\'ouverture.', example: 'Congrès médical.' },
          { title: 'Brochures de Formation', description: 'Sur bulletins d\'inscription.', example: 'École de commerce planifiant des masterclasses.' }
        ],
        tips: [
          'Fuseau Horaire : Vérifiez le bon fuseau pour les participants internationaux.',
          'Lieu Précis : Indiquez l\'adresse physique exacte ou le lien de visioconférence.',
          'Contraste Net : Points noirs sur fond blanc pour un scan rapide.',
          'Taille Minimale : Au moins 25 x 25 mm sur invitations imprimées.',
          'Testez sur Mobile : Vérifiez les horaires sur iPhone et Android.'
        ],
        technicalNotes: 'Format VEVENT standard supporté par iOS, Android et Outlook.',
        faqs: [
          { question: 'Comment l\'événement s\'enregistre-t-il sur le téléphone ?', answer: 'La caméra détecte l\'événement et ouvre l\'application d\'agenda avec tous les détails prêts à être enregistrés en 1 clic.' },
          { question: 'Est-ce compatible avec Google Agenda et Apple Calendar ?', answer: 'Oui, supporté nativement par toutes les applications d\'agenda sur iOS et Android.' },
          { question: 'Des rappels automatiques sont-ils créés ?', answer: 'Oui, l\'agenda applique les alertes de rappel prévues par le smartphone avant le début.' },
          { question: 'Ces QR codes expirent-ils ?', answer: 'Non, les codes statiques sont permanents sans aucun frais.' },
          { question: 'Puis-je intégrer mon logo au centre ?', answer: 'Oui, importez votre logo et la correction d\'erreur passera automatiquement au niveau H (30%).' },
          { question: 'Est-ce gratuit ?', answer: 'Oui, la génération et le téléchargement en SVG ou PNG sont 100% gratuits.' }
        ],
        relatedTools: [
          { name: 'QR Code Localisation', slug: 'location-qr-code-generator', description: 'Ouvrez l\'itinéraire Google Maps en un clic.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Partagez les coordonnées de l\'organisateur.' },
          { name: 'QR Code Lien Web', slug: 'url-to-qr-code', description: 'Lien direct vers la billetterie en ligne.' },
          { name: 'QR Code WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Assistance aux participants sur WhatsApp.' }
        ]
      };
    case 'pt':
      return {
        slug: 'event-qr-code-generator',
        qrTypeId: 'event',
        title: 'Gerador de QR Code de Evento — Salvar na Agenda com 1 Scan',
        description: 'Crie QR Codes de eventos para salvar compromissos no Google Agenda, Apple Calendar e Outlook. Download em SVG e PNG.',
        h1: 'Gerador de QR Code de Evento',
        subheadline: 'Permita que convidados salvem a data, hora, local e detalhes do seu evento na agenda do celular com apenas um scan.',
        heading: 'QR Code de Eventos e Calendário',
        subheading: 'Evite esquecimentos e garanta presença em casamentos, shows, palestras e conferências.',
        overviewTitle: 'O que é um QR Code de Evento?',
        overviewParagraphs: [
          'Um gerador de QR Code de evento codifica o formato padrão iCalendar (.ics / VEVENT) em um código 2D. Ao escanear, o celular abre o calendário (Google Agenda, Apple Calendar, Outlook) com título, horários e endereço preenchidos.',
          'Convites em papel são guardados e esquecidos. Um QR Code de evento grava o compromisso no smartphone com lembretes automáticos.',
          'Download gratuito em SVG vetorial para gráficas ou PNG em alta definição.'
        ],
        sectors: [
          { name: 'Casamentos & Festas', description: 'Em convites para que ninguém confunda a data do evento.', benefit: 'Pontualidade máxima dos convidados.' },
          { name: 'Shows & Festivais', description: 'Em cartazes e ingressos para agendar a abertura dos portões.', benefit: 'Aumenta a presença no espetáculo.' },
          { name: 'Congressos & Feiras', description: 'Em programações para salvar palestras principais.', benefit: 'Organização fácil dos participantes.' },
          { name: 'Cursos & Workshops', description: 'Em folhetos para agendar o início das aulas.', benefit: 'Lembretes automáticos para alunos.' },
          { name: 'Corridas & Maratonas', description: 'Em números de peito com os horários de largada.', benefit: 'Largadas pontuais sem atrasos.' },
          { name: 'Webinários & Lives', description: 'Em banners prévios para agendar a transmissão online.', benefit: 'Maior audiência ao vivo.' }
        ],
        howItWorks: [
          { title: '1. Preencha os Dados do Evento', description: 'Insira título, data/hora de início e fim, local e descrição.' },
          { title: '2. Personalize o Design', description: 'Escolha cores e adicione o ícone de calendário ou logo.' },
          { title: '3. Baixe e Divulgue', description: 'Exporte em SVG vetorial para impressão ou PNG.' }
        ],
        useCases: [
          { title: 'Convites de Casamento', description: 'No verso com a chamada "Salve a data no seu celular".', example: 'Gala beneficente anual.' },
          { title: 'Cartazes de Shows', description: 'Em pontos de ônibus com os horários das apresentações.', example: 'Festival com 5.000 pessoas.' },
          { title: 'Crachás de Congressos', description: 'Com a hora da palestra magna de abertura.', example: 'Congresso médico.' },
          { title: 'Folhetos de Cursos', description: 'Na ficha de matrícula para agendamento de aulas.', example: 'Escola de negócios.' }
        ],
        tips: [
          'Fuso Horário Correto: Defina o fuso correto para participantes de outras cidades.',
          'Local Completo: Insira o endereço físico completo ou link da sala virtual.',
          'Alto Contraste: Módulos pretos sobre fundo branco.',
          'Tamanho Mínimo: Pelo menos 25 x 25 mm em convites impressos.',
          'Teste no Celular: Verifique no iPhone e Android se o horário salva certinho.'
        ],
        technicalNotes: 'Formato padrão VEVENT compatível com iOS, Android e Outlook.',
        faqs: [
          { question: 'Como o evento é salvo no celular ao escanear?', answer: 'A câmera reconhece os dados e abre o aplicativo de calendário com todos os campos prontos para salvar com 1 toque.' },
          { question: 'Funciona com Google Agenda e Apple Calendar?', answer: 'Sim, é suportado nativamente por todos os aplicativos de calendário no iPhone e Android.' },
          { question: 'Cria notificações automáticas?', answer: 'Sim, o calendário do celular cria os alertas programados antes do evento começar.' },
          { question: 'Os códigos de evento expiram?', answer: 'Não, são códigos estáticos que continuam funcionando permanentemente.' },
          { question: 'Posso colocar o logotipo do evento no centro?', answer: 'Sim, envie seu logo e o sistema ajustará a correção de erros para Alto (30%).' },
          { question: 'A criação é gratuita?', answer: 'Sim, a criação e o download em SVG e PNG são 100% grátis.' }
        ],
        relatedTools: [
          { name: 'QR Code Localização', slug: 'location-qr-code-generator', description: 'Abra a rota no Google Maps com 1 toque.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Compartilhe contatos do organizador.' },
          { name: 'QR Code Link URL', slug: 'url-to-qr-code', description: 'Link para compra de ingressos online.' },
          { name: 'QR Code WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Atendimento a participantes no WhatsApp.' }
        ]
      };
    case 'it':
      return {
        slug: 'event-qr-code-generator',
        qrTypeId: 'event',
        title: 'Generatore QR Code Eventi — Salvare Appuntamenti nel Calendario',
        description: 'Crea codici QR per eventi per salvare date su Apple Calendar, Google Calendar e Outlook. Download in SVG e PNG.',
        h1: 'Generatore QR Code Eventi',
        subheadline: 'Permetti ai partecipanti di salvare data, ora, luogo e dettagli del tuo evento nel calendario dello smartphone con una sola scansione.',
        heading: 'QR Code per Eventi e Calendario',
        subheading: 'Evita dimenticanze e assicura la massima presenza a conferenze, matrimoni, concerti e webinar.',
        overviewTitle: 'Cos\'è un QR Code per Eventi?',
        overviewParagraphs: [
          'Un generatore di codici QR per eventi codifica il formato standard iCalendar (.ics / VEVENT) in un codice 2D. Inquadrando il codice con la fotocamera, lo smartphone apre direttamente l\'app calendario (Google Calendar, Apple Calendar, Outlook) con il promemoria già programmato.',
          'Gli inviti cartacei finiscono spesso dimenticati in un cassetto. Un codice QR per eventi registra l\'appuntamento nello smartphone con allarmi automatici prima dell\'inizio.',
          'Download gratuito in formato vettoriale SVG per la tipografia o PNG ad alta risoluzione.'
        ],
        sectors: [
          { name: 'Matrimoni & Feste Private', description: 'Sulle partecipazioni per non confondere orari e location.', benefit: 'Massima puntualità degli invitati.' },
          { name: 'Concerti & Festival', description: 'Su manifesti e biglietti per memorizzare l\'apertura dei cancelli.', benefit: 'Aumenta la presenza effettiva al concerto.' },
          { name: 'Conferenze & Fiere B2B', description: 'Sui programmi cartacei per salvare i workshop principali.', benefit: 'Gestione ordinata dei partecipanti.' },
          { name: 'Corsi & Workshop', description: 'Sulle brochure per salvare la data di inizio lezioni.', benefit: 'Promemoria automatici per gli studenti.' },
          { name: 'Gare & Manifestazioni Sportive', description: 'Sui pettorali di gara con gli orari di partenza.', benefit: 'Partenze puntuali senza ritardi.' },
          { name: 'Webinar & Live Streaming', description: 'Sulle slide introduttive per fissare la diretta.', benefit: 'Maggiore tasso di connessione live.' }
        ],
        howItWorks: [
          { title: '1. Inserisci i Dati dell\'Evento', description: 'Digita titolo, data/ora di inizio e fine, luogo e descrizione.' },
          { title: '2. Personalizza la Grafica', description: 'Scegli i colori e aggiungi l\'icona calendario o il tuo logo.' },
          { title: '3. Scarica e Stampa', description: 'Esporta in SVG vettoriale per la stampa o PNG.' }
        ],
        useCases: [
          { title: 'Partecipazioni di Nozze', description: 'Sul retro con l\'invito "Salva la data sul tuo smartphone".', example: 'Gala di beneficenza.' },
          { title: 'Manifesti per Festival', description: 'Nelle stazioni con gli orari dei live.', example: 'Festival musicale con 5.000 partecipanti.' },
          { title: 'Badge per Congressi', description: 'Con l\'orario della sessione plenaria.', example: 'Congresso medico internazionale.' },
          { title: 'Brochure di Corsi', description: 'Sul modulo di iscrizione ai corsi.', example: 'Business school per masterclass.' }
        ],
        tips: [
          'Fuso Orario Esatto: Imposta il fuso corretto per partecipanti internazionali.',
          'Indirizzo Preciso: Specifica l\'indirizzo completo o il link della stanza virtuale.',
          'Contrasto Elevato: Moduli neri su sfondo bianco.',
          'Dimensioni Minime: Almeno 25 x 25 mm sugli inviti stampati.',
          'Test da Smartphone: Controlla gli orari su iPhone e Android prima della stampa.'
        ],
        technicalNotes: 'Formato standard VEVENT supportato da iOS, Android e Outlook.',
        faqs: [
          { question: 'Come si salva l\'evento nello smartphone?', answer: 'La fotocamera riconosce i dati e apre l\'app calendario con tutti i campi compilati pronti per essere salvati con un tocco.' },
          { question: 'Funziona con Google Calendar e Apple Calendar?', answer: 'Sì, è supportato nativamente da tutte le applicazioni di calendario su iOS e Android.' },
          { question: 'Imposta promemoria automatici?', answer: 'Sì, il calendario applica gli allarmi di notifica predefiniti prima dell\'inizio.' },
          { question: 'Questi codici QR scadono?', answer: 'No, i codici statici restano validi per sempre senza alcun canone.' },
          { question: 'Posso inserire il logo dell\'evento al centro?', answer: 'Sì, carica il tuo logo e la correzione errori verrà impostata automaticamente su Alto (30%).' },
          { question: 'La creazione è gratuita?', answer: 'Sì, la creazione e il download in formato SVG e PNG sono al 100% gratuiti.' }
        ],
        relatedTools: [
          { name: 'QR Code Posizione', slug: 'location-qr-code-generator', description: 'Apri il percorso Google Maps con un tocco.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Condividi i recapiti dell\'organizzatore.' },
          { name: 'QR Code Link Web', slug: 'url-to-qr-code', description: 'Indirizza alla vendita biglietti online.' },
          { name: 'QR Code WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Assistenza ai partecipanti su WhatsApp.' }
        ]
      };
    case 'hi':
      return {
        slug: 'event-qr-code-generator',
        qrTypeId: 'event',
        title: 'इवेंट QR कोड जेनरेटर — एक स्कैन में मोबाइल कैलेंडर में तारीख सेव करें',
        description: 'Google Calendar, Apple Calendar और Outlook के लिए इवेंट QR कोड बनाएं। तारीख, समय और स्थान सीधे सेव कराएं। मुफ़्त डाउनलोड।',
        h1: 'इवेंट QR कोड जेनरेटर',
        subheadline: 'अतिथियों को एक स्कैन में शादी, संगीत समारोह, कॉन्फ्रेंस या वेबिनार की तारीख और समय सीधे मोबाइल कैलेंडर में सेव करने की सुविधा दें।',
        heading: 'इवेंट व कैलेंडर QR कोड',
        subheading: 'तारीख भूलने की समस्या खत्म करें और अपने कार्यक्रमों में अधिकतम उपस्थिति सुनिश्चित करें।',
        overviewTitle: 'इवेंट QR कोड क्या है?',
        overviewParagraphs: [
          'इवेंट QR कोड मानक iCalendar (.ics / VEVENT) प्रोटोकॉल को 2D बारकोड में बदल देता है। जब कोई इसे फोन कैमरे से स्कैन करता है, तो मोबाइल की कैलेंडर ऐप (Google Calendar, Apple Calendar, Outlook) खुल जाती है और शीर्षक, तारीख, समय, स्थान और रिमाइंडर अपने आप भर जाते हैं।',
          'कागज़ के निमंत्रण पत्र अक्सर दराजों में रखकर लोग भूल जाते हैं। इवेंट QR कोड से फोन में तारीख सेव हो जाती है और कार्यक्रम शुरू होने से पहले अलार्म बज जाता है।',
          'प्रिंटिंग के लिए वेक्टर SVG और स्क्रीन के लिए PNG मुफ़्त डाउनलोड करें।'
        ],
        sectors: [
          { name: 'शादी व पारिवारिक समारोह', description: 'निमंत्रण पत्रों पर ताकि कोई भी तारीख और मुहूर्त न भूले।', benefit: 'मेहमानों की समय पर उपस्थिति।' },
          { name: 'संगीत शो व उत्सव', description: 'पोस्टरों और टिकटों पर गेट खुलने का समय सेव कराने हेतु।', benefit: 'दर्शकों की समय पर एंट्री।' },
          { name: 'कॉन्फ़्रेंस व व्यापार मेले', description: 'कार्यक्रम सूची पर मुख्य सेशंस का समय सेव कराने हेतु।', benefit: 'प्रतिभागियों का सुव्यवस्थित प्रबंधन।' },
          { name: 'ट्रेनिंग व वर्कशॉप्स', description: 'ब्रोशर पर क्लास शुरू होने की तारीख दर्ज कराने हेतु।', benefit: 'छात्रों के लिए स्वचालित रिमाइंडर।' },
          { name: 'खेल प्रतियोगिताएं व मैराथन', description: 'चेस्ट नंबर पर दौड़ शुरू होने का समय देने हेतु।', benefit: 'बिना देरी के सही समय पर शुरुआत।' },
          { name: 'वेबिनार व ऑनलाइन लाइव', description: 'बैनरों पर लाइव स्ट्रीमिंग का समय बुक कराने हेतु।', benefit: 'लाइव दर्शकों की संख्या में वृद्धि।' }
        ],
        howItWorks: [
          { title: '1. कार्यक्रम की जानकारी भरें', description: 'शीर्षक, शुरू और समाप्त होने की तारीख/समय, पता और विवरण दर्ज करें।' },
          { title: '2. डिज़ाइन कस्टमाइज़ करें', description: 'रंग चुनें और कैलेंडर आइकन या अपना लोगो लगाएं।' },
          { title: '3. डाउनलोड व प्रिंट करें', description: 'वेक्टर SVG या हाई-रिज़ॉल्यूशन PNG डाउनलोड करें।' }
        ],
        useCases: [
          { title: 'शादी के निमंत्रण कार्ड', description: 'कार्ड के पीछे "फोन कैलेंडर में सेव करें" लिखा हुआ कोड।', example: 'शादी समारोह कैलेंडर कोड।' },
          { title: 'म्यूजिक फेस्टिवल पोस्टर्स', description: 'बस स्टॉप और चौराहों पर लगे पोस्टरों पर।', example: '5,000 दर्शकों का संगीत उत्सव।' },
          { title: 'कॉन्फ़्रेंस आई-कार्ड', description: 'उद्घाटन सत्र के समय के साथ।', example: 'अंतरराष्ट्रीय डॉक्टर सम्मेलन।' },
          { title: 'ट्रेनिंग ब्रोशर', description: 'रजिस्ट्रेशन फॉर्म पर वर्कशॉप तारीख के साथ।', example: 'बिजनेस स्कूल मास्टरक्लास।' }
        ],
        tips: [
          'सही टाइमज़ोन चुनें: अंतरराष्ट्रीय मेहमानों के लिए सही समय क्षेत्र सेट करें।',
          'पूरा पता लिखें: कार्यक्रम स्थल का सटीक पता या ऑनलाइन मीटिंग लिंक लिखें।',
          'हाई कंट्रास्ट: सफ़ेद बैकग्राउंड पर गहरे काले डॉट्स रखें।',
          'न्यूनतम साइज़: कार्ड पर कम से कम 25 x 25 मिमी आकार रखें।',
          'प्रिंट से पहले टेस्ट: iPhone और Android दोनों में समय की जांच करें।'
        ],
        technicalNotes: 'मानक VEVENT प्रोटोकॉल iOS, Android और Outlook द्वारा पूरी तरह समर्थित।',
        faqs: [
          { question: 'स्कैन करने पर फोन में इवेंट कैसे सेव होता है?', answer: 'कैमरे से स्कैन करते ही फोन की कैलेंडर ऐप खुल जाती है जिसमें सभी विवरण तैयार मिलते हैं और 1 टैप में सेव हो जाते हैं।' },
          { question: 'क्या यह Google Calendar और Apple Calendar दोनों पर काम करता है?', answer: 'हाँ, यह iPhone और Android के सभी डिफॉल्ट कैलेंडर ऐप्स के साथ पूरी तरह संगत है।' },
          { question: 'क्या फोन में रिमाइंडर अलार्म बजता है?', answer: 'हाँ, मोबाइल कैलेंडर कार्यक्रम शुरू होने से पहले स्वचालित नोटिफिकेशन देता है।' },
          { question: 'क्या यह इवेंट QR कोड कभी एक्सपायर होता है?', answer: 'नहीं, यह कोड हमेशा के लिए सक्रिय और मुफ़्त रहता है।' },
          { question: 'क्या मैं बीच में इवेंट का लोगो लगा सकता हूँ?', answer: 'हाँ, लोगो अपलोड करने पर सिस्टम एरर करेक्शन को हाई (H) पर सेट कर देगा।' },
          { question: 'क्या यह मुफ़्त है?', answer: 'हाँ, इसे बनाना और SVG/PNG में डाउनलोड करना 100% मुफ़्त है।' }
        ],
        relatedTools: [
          { name: 'लोकेशन QR कोड', slug: 'location-qr-code-generator', description: 'Google Maps पर सीधा रास्ता खोलें।' },
          { name: 'vCard विज़िटिंग कार्ड QR', slug: 'vcard-qr-code-generator', description: 'आयोजक का संपर्क विवरण साझा करें।' },
          { name: 'वेबसाइट URL QR जेनरेटर', slug: 'url-to-qr-code', description: 'ऑनलाइन टिकट बुकिंग लिंक दें।' },
          { name: 'WhatsApp QR जेनरेटर', slug: 'whatsapp-qr-code-generator', description: 'अतिथियों से सीधे व्हाट्सएप चैट शुरू करें।' }
        ]
      };
    default: // 'en'
      return {
        slug: 'event-qr-code-generator',
        qrTypeId: 'event',
        title: 'Event QR Code Generator — Add Events to Calendar in 1 Tap',
        description: 'Generate custom Event QR codes to save dates directly to Apple Calendar, Google Calendar, and Outlook. Free vector SVG & PNG download.',
        h1: 'Event QR Code Generator',
        subheadline: 'Let guests and attendees save event dates, times, locations, and reminders straight into their phone calendar in a single camera scan.',
        heading: 'Event & Calendar QR Code',
        subheading: 'Eliminate scheduling confusion and maximize attendance at conferences, weddings, concerts, and webinars.',
        overviewTitle: 'What is an Event QR Code Generator?',
        overviewParagraphs: [
          'An Event QR code generator encodes standard iCalendar (.ics / VEVENT) specification data into an optical 2D barcode. When scanned using any smartphone camera, the device immediately launches the native calendar app (such as Apple Calendar, Google Calendar, or Microsoft Outlook) with the event title, start and end timestamps, venue address, description, and reminder alarms pre-populated.',
          'Printed paper invitations, summit programs, and wedding stationery frequently get misplaced or forgotten. An Event QR code adds scheduled dates straight into the attendee’s mobile calendar with built-in notification alerts.',
          'Our generator operates 100% client-side in your browser for complete privacy. Export print-ready vector SVG files for luxury invitation stationery or high-DPI PNG images for digital flyers.'
        ],
        sectors: [
          { name: 'Weddings & Private Receptions', description: 'Printed on formal wedding invitations ensuring guests lock in the date and venue.', benefit: 'Maximizes on-time guest arrival.' },
          { name: 'Concerts, Shows & Music Festivals', description: 'Printed on posters, transit ads, and tickets to schedule door opening times.', benefit: 'Drives prompt audience arrivals.' },
          { name: 'B2B Conferences & Trade Expos', description: 'Printed on printed agendas for keynotes, workshops, and panel sessions.', benefit: 'Delivers frictionless attendee time management.' },
          { name: 'Corporate Training & Seminars', description: 'Printed on course flyers allowing employees to schedule training modules.', benefit: 'Sets automatic study reminders.' },
          { name: 'Marathons & Athletic Races', description: 'Printed on athlete bib numbers for race start waves and awards ceremonies.', benefit: 'Keeps race wave departures on schedule.' },
          { name: 'Webinars & Online Product Launches', description: 'Displayed on promotional slides to schedule live video broadcasts.', benefit: 'Boosts live video stream attendance.' }
        ],
        howItWorks: [
          { title: '1. Enter Event Information', description: 'Input your event title, start/end dates and times, venue address, and description.' },
          { title: '2. Customize Styling & Colors', description: 'Match corporate themes and embed a central calendar icon or event logo.' },
          { title: '3. Download & Print Everywhere', description: 'Export print-ready Vector SVG for physical invitations or high-DPI PNG.' }
        ],
        useCases: [
          { title: 'Formal Wedding Invitations', description: 'Printed on the reverse side with "Scan to add to your calendar".', example: 'Charity gala invitation cards.' },
          { title: 'Festival Transit Posters', description: 'Displayed in subway stations with weekend show lineups.', example: 'Music festival with 5,000 attendees.' },
          { title: 'Summit Conference Badges', description: 'Listing keynote session timings.', example: 'Medical congress attendee badge.' },
          { title: 'Executive Workshop Flyers', description: 'Printed on training enrollment cards.', example: 'Business school masterclass flyer.' }
        ],
        tips: [
          'Accurate Timezone Specification: Ensure your start and end times reflect the correct local timezone.',
          'Complete Venue Location: Provide the full physical street address or virtual meeting URL.',
          'High Optical Contrast: Maintain dark modules against a clean white background for rapid scanning.',
          'Minimum Physical Print Size: Print at a minimum of 25 x 25 mm on physical paper invitations.',
          'Cross-Device Field Test: Test scanning on both an iPhone and Android phone to verify timezone handling.'
        ],
        technicalNotes: 'Standards Compliance: Generates standard RFC 5545 VEVENT payloads natively supported by iOS Calendar, Google Calendar, and Outlook.',
        faqs: [
          { question: 'How does an Event QR code work when scanned?', answer: 'When scanned with any smartphone camera, the native calendar app opens with the event title, date, time, location, and description pre-filled and ready to save in 1 tap.' },
          { question: 'Does this work with Apple Calendar, Google Calendar, and Outlook?', answer: 'Yes! It works seamlessly with all native and third-party calendar applications on iOS, iPadOS, Android, and Windows.' },
          { question: 'Are notification alarms set automatically?', answer: 'Yes! When the event is saved, the user\'s mobile calendar applies their default reminder notification settings before the event starts.' },
          { question: 'Do Event QR codes ever expire?', answer: 'No. Static Event QR codes encode the data permanently and will work indefinitely with zero ongoing fees.' },
          { question: 'Can I add my event logo to the center of the QR code?', answer: 'Yes! Upload your logo in PNG or SVG format, and our generator automatically boosts error correction to Level H (30%) for seamless scanning.' },
          { question: 'Is it free to generate and download?', answer: 'Yes! Creating and exporting Event QR codes in SVG and PNG format is 100% free with unlimited scans.' }
        ],
        relatedTools: [
          { name: 'Location QR Generator', slug: 'location-qr-code-generator', description: 'Open Google Maps turn-by-turn navigation in one tap.' },
          { name: 'vCard QR Generator', slug: 'vcard-qr-code-generator', description: 'Share organizer contact credentials directly to address books.' },
          { name: 'URL QR Generator', slug: 'url-to-qr-code', description: 'Direct visitors to your online ticket checkout page.' },
          { name: 'WhatsApp QR Generator', slug: 'whatsapp-qr-code-generator', description: 'Launch attendee support chats on WhatsApp.' }
        ]
      };
  }
}
