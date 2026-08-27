import type { Locale } from '../config';
import type { LocalizedPageContent } from './types';

export function getPhoneContent(locale: Locale): LocalizedPageContent {
  switch (locale) {
    case 'es':
      return {
        slug: 'phone-qr-code-generator',
        qrTypeId: 'phone',
        title: 'Generador de Código QR para Llamadas — Marcar Teléfono al Instante',
        description: 'Crea códigos QR de marcación telefónica. Permite a tus clientes llamar a tu empresa con un solo escaneo. Descarga en vector SVG y PNG.',
        h1: 'Generador de Código QR para Llamadas Telefónicas',
        subheadline: 'Permite a tus clientes marcar tu número de teléfono con un solo escaneo, sin tener que escribir dígitos manualmente.',
        heading: 'Código QR de Llamada Telefónica',
        subheading: 'Conecta clientes directamente con tus líneas de venta y atención al cliente desde cualquier soporte físico.',
        overviewTitle: '¿Qué es un Código QR de Llamada Telefónica?',
        overviewParagraphs: [
          'Un generador de código QR para llamadas telefónicas codifica el protocolo estándar "tel:número" en una matriz bidimensional. Al enfocar el código con la cámara del smartphone, el dispositivo muestra un aviso para iniciar la llamada de voz inmediatamente.',
          'En situaciones de urgencia o al consultar anuncios en vallas y furgonetas, teclear un número largo de 9 a 12 dígitos genera dudas y abandonos. Un código QR de marcación directa conecta al usuario con tu empresa en menos de 2 segundos.',
          'Descarga gratis en formato vectorial SVG para imprenta o PNG de alta definición.'
        ],
        sectors: [
          { name: 'Urgencias y Asistencia en Carretera', description: 'En adhesivos para coches y grúas de remolque.', benefit: 'Llamada inmediata en momentos de avería o siniestro.' },
          { name: 'Fontanería, Cerrajería y Clima', description: 'En imanes de nevera y furgonetas de servicio técnico.', benefit: 'Contacto directo ante emergencias domésticas.' },
          { name: 'Taxis y Transporte Privado', description: 'En paradas y hoteles para pedir vehículos.', benefit: 'Solicitud rápida de transporte.' },
          { name: 'Líneas de Atención al Cliente', description: 'En facturas y contratos para consultas y dudas.', benefit: 'Facilita la atención postventa.' },
          { name: 'Restaurantes y Reservas Telefónicas', description: 'En carteles de puerta para reservar mesa.', benefit: 'Captura reservas de paso.' },
          { name: 'Seguridad y Centrales de Alarmas', description: 'En placas disuasorias de fachadas.', benefit: 'Contacto directo con la central receptora.' }
        ],
        howItWorks: [
          { title: '1. Introduce el Número de Teléfono', description: 'Escribe tu número completo con el prefijo internacional.' },
          { title: '2. Personaliza el Diseño', description: 'Elige tus colores corporativos y añade el icono de teléfono.' },
          { title: '3. Descarga e Imprime', description: 'Exporta en SVG vectorial o PNG de alta resolución.' }
        ],
        useCases: [
          { title: 'Imanes de Nevera', description: 'Imanes publicitarios para servicios de cerrajería 24 horas.', example: 'Cerrajero local recibiendo llamadas de urgencia.' },
          { title: 'Vinilos en Furgonetas', description: 'En el lateral de vehículos comerciales para peatones.', example: 'Instalador de aire acondicionado.' },
          { title: 'Vallas Publicitarias', description: 'Grandes códigos legibles desde la acera.', example: 'Servicio de grúas.' },
          { title: 'Folletos Comerciales', description: 'Con la llamada "Llámanos gratis ahora".', example: 'Asesoría fiscal.' }
        ],
        tips: [
          'Formato Internacional: Incluye siempre el prefijo de país (+34, +1, etc.).',
          'Alto Contraste: Módulos negros sobre fondo blanco para escaneo instantáneo.',
          'Tamaño Físico: Al menos 20 x 20 mm en tarjetas y folletos.',
          'SVG para Rotulación: Utiliza SVG vectorial para corte en vinilo o grandes lonas.',
          'Comprueba la Línea: Asegúrate de que el número esté siempre atendido en horario laboral.'
        ],
        technicalNotes: 'Formato estándar tel: compatible con todos los smartphones iOS y Android.',
        faqs: [
          { question: '¿Cómo funciona el código QR de llamada?', answer: 'Al escanear el código con la cámara, el móvil abre la app de teléfono con el número marcado listo para llamar.' },
          { question: '¿Se realiza la llamada automáticamente?', answer: 'No, por seguridad el sistema siempre solicita que el usuario pulse el botón de llamar.' },
          { question: '¿Puedo usar números fijos y móviles?', answer: 'Sí, puedes configurar cualquier número fijo, móvil o de tarificación especial.' },
          { question: '¿Tienen fecha de caducidad?', answer: 'No, los códigos QR estáticos son permanentes y funcionarán mientras la línea esté activa.' },
          { question: '¿Puedo poner mi logo en el centro?', answer: 'Sí, sube tu logo y el sistema ajustará la corrección de errores al nivel Alto (30%).' },
          { question: '¿Tiene algún coste?', answer: 'No, es 100% gratuito y sin límites de escaneo.' }
        ],
        relatedTools: [
          { name: 'QR de WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Inicia chats directos en WhatsApp.' },
          { name: 'QR de SMS', slug: 'sms-qr-code-generator', description: 'Envía mensajes de texto con plantilla previa.' },
          { name: 'QR de Contacto vCard', slug: 'vcard-qr-code-generator', description: 'Guarda tarjetas de contacto en la agenda.' },
          { name: 'QR de Correo Email', slug: 'email-qr-code-generator', description: 'Borradores de email pre-redactados.' }
        ]
      };
    case 'de':
      return {
        slug: 'phone-qr-code-generator',
        qrTypeId: 'phone',
        title: 'Telefon QR Code Generator — Direkte Sprachanrufe per Scan',
        description: 'Erstellen Sie Telefon-QR-Codes zum sofortigen Anrufen. Kunden wählen Ihre Rufnummer mit nur einem Scan. Kostenloser Vektor-SVG & PNG Download.',
        h1: 'Telefon QR Code Generator',
        subheadline: 'Lassen Sie Kunden Ihre Telefonnummer mit einem einzigen Scan wählen – ganz ohne mühsames Abtippen von Ziffern.',
        heading: 'Telefon-Anruf-QR-Code',
        subheading: 'Verbinden Sie Kunden direkt mit Ihrem Kundendienst oder Vertrieb.',
        overviewTitle: 'Was ist ein Telefon QR Code Generator?',
        overviewParagraphs: [
          'Ein Telefon QR Code Generator kodiert den Standard "tel:Rufnummer" in einen 2D-Barcode. Beim Scannen mit der Smartphone-Kamera öffnet sich sofort das Tastenfeld mit der eingewählten Rufnummer.',
          'In Notfällen oder bei Werbeplakaten senkt ein direkter Anruf-Code die Hemmschwelle zur Kontaktaufnahme enorm.',
          'Kostenloser Download in druckfertigem Vektor-SVG oder hochauflösendem PNG.'
        ],
        sectors: [
          { name: 'Notdienste & Abschleppdienst', description: 'Auf Fahrzeugaufklebern für schnelle Hilfe bei Pannen.', benefit: 'Sofortige Hilfe im Notfall.' },
          { name: 'Schlüsseldienst & Sanitär', description: 'Auf Kühlschrankmagneten und Visitenkarten.', benefit: 'Direkter Draht bei Rohrbrüchen oder Aussperrung.' },
          { name: 'Taxi & Fahrdienste', description: 'An Haltestellen und in Hotel-Lobbys.', benefit: 'Schnelle Fahrzeugbestellung.' },
          { name: 'Kundenservice & Hotlines', description: 'Auf Rechnungen für direkte Rückfragen.', benefit: 'Schneller Support für Kunden.' },
          { name: 'Restaurants & Tischreservierung', description: 'Auf Aushängen für telefonische Reservierungen.', benefit: 'Erfasst spontane Gäste.' },
          { name: 'Sicherheitsdienste & Alarm', description: 'Auf Objektschildern für Wachdienste.', benefit: 'Schnelle Erreichbarkeit der Leitstelle.' }
        ],
        howItWorks: [
          { title: '1. Rufnummer Eingeben', description: 'Geben Sie Ihre Nummer mit internationaler Vorwahl ein.' },
          { title: '2. Design Anpassen', description: 'Farben wählen und Telefon-Icon oder Logo einfügen.' },
          { title: '3. Herunterladen & Drucken', description: 'Als Vektor-SVG oder PNG exportieren.' }
        ],
        useCases: [
          { title: 'Kühlschrankmagnete', description: 'Für 24h-Schlüsseldienste im Haushalt.', example: 'Schlüsseldienst für Notöffnungen.' },
          { title: 'Fahrzeugbeschriftung', description: 'Auf Transportern für interessierte Passanten.', example: 'Kälte- und Klimatechnik.' },
          { title: 'Großplakate', description: 'Mit der Aufforderung "Jetzt kostenlos anrufen".', example: 'Pannenhilfe.' },
          { title: 'Flyer & Prospekte', description: 'Für direkte Beratungstermine.', example: 'Versicherungsagentur.' }
        ],
        tips: [
          'Internationales Format: Immer mit Landesvorwahl angeben (z. B. +49 89...).',
          'Hoher Kontrast: Schwarze Punkte auf weißem Grund.',
          'Mindestgröße: Mindestens 20 x 20 mm im Druck.',
          'SVG für Foliendruck: Ideal für Plott- und Fahrzeugbeschriftungen.',
          'Erreichbarkeit prüfen: Sicherstellen, dass die Nummer besetzt ist.'
        ],
        technicalNotes: 'Standardmäßiges tel:-Protokoll für iOS und Android.',
        faqs: [
          { question: 'Wie funktioniert der Telefon-QR-Code?', answer: 'Beim Scannen öffnet sich die Telefon-App des Smartphones mit vorausgewählter Rufnummer.' },
          { question: 'Wird der Anruf sofort gestartet?', answer: 'Nein, der Nutzer muss aus Sicherheitsgründen noch einmal auf den grünen Hörer tippen.' },
          { question: 'Kann ich Festnetz- und Mobilnummern nutzen?', answer: 'Ja, Sie können jede beliebige Festnetz-, Mobil- oder Servicenummer hinterlegen.' },
          { question: 'Laufen diese QR-Codes ab?', answer: 'Nein, die statischen Codes sind dauerhaft gültig.' },
          { question: 'Kann ich mein Logo einfügen?', answer: 'Ja, laden Sie Ihr Logo hoch und die Fehlerkorrektur wird automatisch auf Stufe H (30%) gesetzt.' },
          { question: 'Ist die Erstellung kostenlos?', answer: 'Ja, die Nutzung und der Download in SVG und PNG sind 100% kostenlos.' }
        ],
        relatedTools: [
          { name: 'WhatsApp QR Code', slug: 'whatsapp-qr-code-generator', description: 'Kundenchats direkt auf WhatsApp starten.' },
          { name: 'SMS QR Code Generator', slug: 'sms-qr-code-generator', description: 'Vordefinierte SMS versenden.' },
          { name: 'vCard Visitenkarte', slug: 'vcard-qr-code-generator', description: 'Kontaktdaten im Telefonbuch speichern.' },
          { name: 'E-Mail QR Generator', slug: 'email-qr-code-generator', description: 'Vorausgefüllte E-Mails per Scan.' }
        ]
      };
    case 'fr':
      return {
        slug: 'phone-qr-code-generator',
        qrTypeId: 'phone',
        title: 'Générateur de QR Code Téléphone — Appel Vocal Direct en 1 Scan',
        description: 'Créez des QR codes d\'appel téléphonique. Vos clients composent votre numéro d\'un simple scan. Téléchargement gratuit en SVG et PNG.',
        h1: 'Générateur de QR Code Appel Téléphonique',
        subheadline: 'Permettez à vos clients de composer votre numéro de téléphone d\'un simple scan, sans aucune saisie manuelle.',
        heading: 'QR Code d\'Appel Téléphonique',
        subheading: 'Reliez directement vos supports imprimés à vos lignes d\'assistance et de vente.',
        overviewTitle: 'Qu\'est-ce qu\'un QR Code Téléphone ?',
        overviewParagraphs: [
          'Un générateur de QR code téléphonique encode le protocole "tel:numéro" dans un code 2D. Au scan avec l\'appareil photo d\'un smartphone, l\'écran d\'appel s\'ouvre avec le numéro déjà composé.',
          'Dans les situations d\'urgence ou sur les panneaux extérieurs, composer un numéro à 10 chiffres est fastidieux. Un QR code déclenche l\'appel en 2 secondes.',
          'Téléchargement gratuit en SVG vectoriel pour imprimerie ou PNG haute définition.'
        ],
        sectors: [
          { name: 'Dépannage & Remorquage', description: 'Sur autocollants de véhicules pour assistance en cas de panne.', benefit: 'Secours immédiat sur la route.' },
          { name: 'Serruriers & Plombiers', description: 'Sur magnets de réfrigérateur et camionnettes d\'intervention.', benefit: 'Contact direct pour les urgences à domicile.' },
          { name: 'Taxis & Chauffeurs', description: 'En gare et hôtels pour commander un véhicule.', benefit: 'Réservation rapide.' },
          { name: 'Services Clients & SAV', description: 'Sur factures pour un contact direct avec un conseiller.', benefit: 'Assistance rapide.' },
          { name: 'Restaurants & Réservations', description: 'Sur affichages de vitrine pour réserver une table.', benefit: 'Capte les clients de passage.' },
          { name: 'Gardiennage & Sécurité', description: 'Sur panneaux de surveillance pour joindre la permanence.', benefit: 'Alerte immédiate du PC sécurité.' }
        ],
        howItWorks: [
          { title: '1. Saisissez le Numéro', description: 'Indiquez le numéro avec l\'indicatif pays (+33 pour la France).' },
          { title: '2. Personnalisez l\'Apparence', description: 'Choisissez vos couleurs et ajoutez l\'icône téléphone.' },
          { title: '3. Téléchargez et Imprimez', description: 'Exportez en SVG vectoriel pour impression ou PNG.' }
        ],
        useCases: [
          { title: 'Magnets Publicitaires', description: 'Pour serruriers et artisans d\'urgence.', example: 'Serrurier 24h/24.' },
          { title: 'Flocage de Véhicules', description: 'Sur les côtés des utilitaires pour les passants.', example: 'Chauffagiste.' },
          { title: 'Affiches Publicitaires', description: 'Avec la mention "Appelez-nous directement".', example: 'Dépannage auto.' },
          { title: 'Dépliants Commerciaux', description: 'Pour un conseil téléphonique immédiat.', example: 'Courtier d\'assurance.' }
        ],
        tips: [
          'Format International : Toujours inclure l\'indicatif (ex. +33 1 23 45 67 89).',
          'Contraste Net : Points noirs sur fond blanc pour un scan fluide.',
          'Taille Minimale : Au moins 20 x 20 mm sur support imprimé.',
          'SVG pour Grands Formats : Idéal pour marquage de camionnettes.',
          'Disponibilité : Vérifiez que la ligne soit bien opérationnelle.'
        ],
        technicalNotes: 'Protocole standard tel: compatible avec tous les smartphones iOS et Android.',
        faqs: [
          { question: 'Comment fonctionne le QR code d\'appel téléphonique ?', answer: 'Au scan, le smartphone ouvre l\'application Téléphone avec le numéro prêt à être appelé.' },
          { question: 'L\'appel part-il automatiquement ?', answer: 'Non, par sécurité l\'utilisateur doit toujours appuyer sur le bouton vert d\'appel.' },
          { question: 'Puis-je utiliser un numéro fixe ou mobile ?', answer: 'Oui, vous pouvez renseigner n\'importe quel numéro fixe, mobile ou numéro vert.' },
          { question: 'Ces QR codes expirent-ils ?', answer: 'Non, les codes statiques sont permanents tant que la ligne existe.' },
          { question: 'Puis-je intégrer mon logo au centre ?', answer: 'Oui, téléchargez votre logo et la correction d\'erreur passera automatiquement au niveau H (30%).' },
          { question: 'Est-ce gratuit ?', answer: 'Oui, la création et le téléchargement en SVG ou PNG sont 100% gratuits.' }
        ],
        relatedTools: [
          { name: 'QR Code WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Démarrez des conversations WhatsApp.' },
          { name: 'QR Code SMS', slug: 'sms-qr-code-generator', description: 'Envoyez des SMS pré-rédigés.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Partagez vos coordonnées complètes.' },
          { name: 'QR Code E-mail', slug: 'email-qr-code-generator', description: 'Courriels pré-rédigés d\'un scan.' }
        ]
      };
    case 'pt':
      return {
        slug: 'phone-qr-code-generator',
        qrTypeId: 'phone',
        title: 'Gerador de QR Code de Chamada Telefônica — Ligar com 1 Scan',
        description: 'Crie QR Codes de chamada telefônica. Permita que clientes liguem para sua empresa com apenas um scan. Download em SVG e PNG.',
        h1: 'Gerador de QR Code de Chamada Telefônica',
        subheadline: 'Permita que clientes discam seu número de telefone com apenas um scan, sem precisar digitar os dígitos manualmente.',
        heading: 'QR Code de Chamada Telefônica',
        subheading: 'Conecte clientes diretamente com suas linhas de atendimento e vendas.',
        overviewTitle: 'O que é um QR Code de Chamada Telefônica?',
        overviewParagraphs: [
          'Um gerador de QR Code de chamada telefônica codifica o protocolo "tel:número" em um código 2D. Ao apontar a câmera do celular, o teclado de chamada abre com o número já digitado.',
          'Em situações de emergência ou em anúncios de rua, digitar números longos gera desistências. Um QR Code de chamada rápida inicia a discagem em 2 segundos.',
          'Download gratuito em SVG vetorial para gráficas ou PNG em alta definição.'
        ],
        sectors: [
          { name: 'Guinchos & Socorro Mecânico', description: 'Em adesivos de veículos para acionamento de emergência.', benefit: 'Socorro rápido na estrada.' },
          { name: 'Chaveiros & Desentupidoras', description: 'Em ímãs de geladeira e frotas de serviço.', benefit: 'Atendimento direto em emergências residenciais.' },
          { name: 'Táxis & Transporte', description: 'Em pontos e hotéis para solicitação de corridas.', benefit: 'Chamada ágil de veículos.' },
          { name: 'SAC & Atendimento', description: 'Em faturas e contratos para tirar dúvidas.', benefit: 'Facilita o suporte pós-venda.' },
          { name: 'Restaurantes & Reservas', description: 'Em cartazes de fachada para reservas de mesas.', benefit: 'Atrai clientes que passam na rua.' },
          { name: 'Segurança & Monitoramento', description: 'Em placas de alarme para contato com a central.', benefit: 'Aviso imediato para a central de segurança.' }
        ],
        howItWorks: [
          { title: '1. Digite o Número', description: 'Insira o número completo com código do país (ex.: +55 para o Brasil).' },
          { title: '2. Personalize o Estilo', description: 'Escolha cores e adicione o ícone de telefone.' },
          { title: '3. Baixe e Imprima', description: 'Exporte em SVG vetorial para impressão ou PNG.' }
        ],
        useCases: [
          { title: 'Ímãs de Geladeira', description: 'Para chaveiros 24h e entregas de gás.', example: 'Chaveiro residencial.' },
          { title: 'Adesivos em Veículos', description: 'Na lateral de furgões para pedestres.', example: 'Técnico de ar-condicionado.' },
          { title: 'Outdoors e Faixas', description: 'Com a chamada "Ligue agora gratuitamente".', example: 'Guincho 24 horas.' },
          { title: 'Folhetos Promocionais', description: 'Para consultas e orçamentos imediatos.', example: 'Corretora de seguros.' }
        ],
        tips: [
          'Formato Internacional: Sempre use o código do país (ex.: +55 11 98765-4321).',
          'Alto Contraste: Módulos pretos sobre fundo branco.',
          'Tamanho Mínimo: Pelo menos 20 x 20 mm na impressão.',
          'SVG para Adesivagem: Garante corte e resolução perfeitos em frotas.',
          'Verifique a Linha: Garanta que o telefone esteja sempre disponível.'
        ],
        technicalNotes: 'Protocolo padrão tel: compatível com iOS e Android.',
        faqs: [
          { question: 'Como funciona o QR Code de chamada telefônica?', answer: 'Ao escanear, o aplicativo de telefone do celular abre com o número pronto para discagem.' },
          { question: 'A ligação inicia sozinha?', answer: 'Não, por questões de segurança o usuário precisa tocar no botão verde de chamar.' },
          { question: 'Posso usar número fixo e celular?', answer: 'Sim, você pode cadastrar qualquer telefone fixo, celular ou 0800.' },
          { question: 'Os códigos expiram?', answer: 'Não, são códigos estáticos que funcionam permanentemente.' },
          { question: 'Posso colocar meu logotipo no centro?', answer: 'Sim, envie seu logo e o sistema ajustará a correção de erros para Alto (30%).' },
          { question: 'A criação é gratuita?', answer: 'Sim, a criação e o download em SVG e PNG são 100% grátis.' }
        ],
        relatedTools: [
          { name: 'QR Code WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Inicie conversas no WhatsApp.' },
          { name: 'QR Code SMS', slug: 'sms-qr-code-generator', description: 'Envie mensagens SMS pré-formatadas.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Salve contatos na agenda do celular.' },
          { name: 'QR Code de E-mail', slug: 'email-qr-code-generator', description: 'Envie e-mails pré-preenchidos.' }
        ]
      };
    case 'it':
      return {
        slug: 'phone-qr-code-generator',
        qrTypeId: 'phone',
        title: 'Generatore QR Code Chiamata Telefonica — Telefonare con una Scansione',
        description: 'Crea codici QR per chiamate telefoniche. Permetti ai clienti di chiamare la tua attività con un solo scan. Download gratuito in SVG e PNG.',
        h1: 'Generatore QR Code Chiamata Telefonica',
        subheadline: 'Permetti ai tuoi clienti di comporre il tuo numero di telefono con una sola scansione, senza digitare manualmente.',
        heading: 'QR Code per Chiamate Telefoniche',
        subheading: 'Collega i clienti direttamente alle tue linee di assistenza e vendita da qualsiasi supporto stampato.',
        overviewTitle: 'Cos\'è un QR Code per Chiamata Telefonica?',
        overviewParagraphs: [
          'Un generatore di codici QR per chiamate telefoniche codifica il protocollo "tel:numero" in un codice 2D. Inquadrando il codice con la fotocamera, lo smartphone apre il tastierino telefonico con il numero già composto.',
          'Nelle situazioni di urgenza o sui cartelloni stradali, digitare un numero a 10 cifre fa perdere tempo. Un codice QR per chiamata rapida connette l\'utente in 2 secondi.',
          'Download gratuito in formato vettoriale SVG per la tipografia o PNG ad alta risoluzione.'
        ],
        sectors: [
          { name: 'Soccorso Stradale & Carroattrezzi', description: 'Su adesivi per auto e mezzi di soccorso.', benefit: 'Chiamata immediata in caso di guasto o incidente.' },
          { name: 'Fabbri, Idraulici & Pronto Intervento', description: 'Su calamite da frigo e furgoni di lavoro.', benefit: 'Contatto diretto per emergenze domestiche.' },
          { name: 'Taxi & Noleggio con Conducente', description: 'Alle fermate e negli hotel per prenotare una corsa.', benefit: 'Chiamata veloce del veicolo.' },
          { name: 'Assistenza Clienti & Centralini', description: 'Sulle fatture per richieste di chiarimento.', benefit: 'Supporto rapido per i clienti.' },
          { name: 'Ristoranti & Prenotazione Tavoli', description: 'Sui cartelli esterni per prenotare un tavolo.', benefit: 'Acquisisce clienti di passaggio.' },
          { name: 'Istituti di Vigilanza & Allarmi', description: 'Sui cartelli di videosorveglianza.', benefit: 'Contatto istantaneo con la centrale operativa.' }
        ],
        howItWorks: [
          { title: '1. Inserisci il Numero di Telefono', description: 'Digita il numero completo di prefisso internazionale (+39 per l\'Italia).' },
          { title: '2. Personalizza la Grafica', description: 'Scegli i colori e aggiungi l\'icona del telefono.' },
          { title: '3. Scarica e Stampa', description: 'Esporta in SVG vettoriale per la stampa o PNG.' }
        ],
        useCases: [
          { title: 'Magneti Pubblicitari da Frigo', description: 'Per fabbri e pronto intervento 24 ore su 24.', example: 'Fabbro per aperture porte.' },
          { title: 'Adesivi su Furgoni Aziendali', description: 'Sulle fiancate dei mezzi commerciali per i passanti.', example: 'Installatore di climatizzatori.' },
          { title: 'Cartelloni Stradali', description: 'Con l\'invito "Chiama subito gratis".', example: 'Soccorso stradale.' },
          { title: 'Depliants e Volantini', description: 'Per richiedere consulenze telefoniche.', example: 'Agenzia assicurativa.' }
        ],
        tips: [
          'Prefisso Internazionale: Inserisci sempre il prefisso (es. +39 02 1234567).',
          'Contrasto Elevato: Moduli neri su sfondo bianco.',
          'Dimensioni Minime: Almeno 20 x 20 mm sui documenti stampati.',
          'SVG per Wrapping Veicoli: Ideale per decorazioni su furgoni e vetrine.',
          'Verifica della Linea: Assicurati che il numero sia sempre presidiato.'
        ],
        technicalNotes: 'Protocollo standard tel: pienamente supportato da iOS e Android.',
        faqs: [
          { question: 'Come funziona il codice QR per le chiamate?', answer: 'Inquadrando il codice con la fotocamera, lo smartphone apre l\'app Telefono con il numero pronto da chiamare.' },
          { question: 'La telefonata parte da sola?', answer: 'No, per sicurezza l\'utente deve sempre premere il pulsante verde di chiamata.' },
          { question: 'Posso inserire numeri fissi e cellulari?', answer: 'Sì, puoi registrare qualsiasi numero fisso, cellulare o numero verde.' },
          { question: 'Questi codici QR scadono?', answer: 'No, i codici statici restano validi per sempre finché la linea telefonica è attiva.' },
          { question: 'Posso inserire il mio logo al centro?', answer: 'Sì, carica il tuo logo e la correzione errori verrà impostata automaticamente su Alto (30%).' },
          { question: 'La creazione è gratuita?', answer: 'Sì, la creazione e il download in formato SVG e PNG sono al 100% gratuiti.' }
        ],
        relatedTools: [
          { name: 'QR Code WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Avvia chat dirette su WhatsApp.' },
          { name: 'QR Code SMS', slug: 'sms-qr-code-generator', description: 'Invia SMS precompilati con un tocco.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Salva i contatti completi in rubrica.' },
          { name: 'QR Code Email', slug: 'email-qr-code-generator', description: 'Invia email precompilate con un tocco.' }
        ]
      };
    case 'hi':
      return {
        slug: 'phone-qr-code-generator',
        qrTypeId: 'phone',
        title: 'फ़ोन कॉल QR कोड जेनरेटर — एक स्कैन में सीधे कॉल मिलाएं',
        description: 'फ़ोन नंबर के साथ कॉल QR कोड बनाएं। ग्राहक बिना नंबर डायल किए सीधे आपकी दुकान या सेवा को कॉल कर सकते हैं। मुफ़्त डाउनलोड।',
        h1: 'फ़ोन कॉल QR कोड जेनरेटर',
        subheadline: 'ग्राहकों को बिना नंबर डायल किए एक स्कैन में सीधे आपके नंबर पर कॉल मिलाने की सुविधा दें।',
        heading: 'फ़ोन कॉल QR कोड',
        subheading: 'प्रिंट विज्ञापनों और गाड़ियों से ग्राहकों को सीधे अपनी हेल्पलाइन से जोड़ें।',
        overviewTitle: 'फ़ोन कॉल QR कोड क्या है?',
        overviewParagraphs: [
          'फ़ोन कॉल QR कोड आधिकारिक "tel:नंबर" प्रोटोकॉल को 2D बारकोड में बदल देता है। जब कोई इसे फोन कैमरे से स्कैन करता है, तो मोबाइल का डायलर खुल जाता है और नंबर पहले से डायल मिलता है।',
          'आपातकालीन स्थिति में लंबा नंबर टाइप करने में होने वाली देरी और गलती को खत्म करता है। केवल 2 सेकंड में कॉल शुरू हो जाती है।',
          'प्रिंटिंग के लिए वेक्टर SVG और स्क्रीन के लिए PNG मुफ़्त डाउनलोड करें।'
        ],
        sectors: [
          { name: 'इमरजेंसी व एम्बुलेंस सेवा', description: 'वाहन स्टिकर और पर्चों पर आपातकालीन कॉल के लिए।', benefit: 'दुर्घटना के समय तुरंत सहायता।' },
          { name: 'इलेक्ट्रीशियन, प्लंबर व कार मैकेनिक', description: 'फ्रिज मैग्नेट और सर्विस वैन पर आपातकालीन नंबर।', benefit: 'घर की खराबी में तुरंत संपर्क।' },
          { name: 'टैक्सी व कैब सेवा', description: 'होटलों और बस स्टॉप पर गाड़ी बुक करने हेतु।', benefit: 'सवारी के लिए त्वरित बुकिंग।' },
          { name: 'कस्टमर केयर व हेल्पलाइन', description: 'बिल और इनवॉइस पर सहायता हेतु।', benefit: 'ग्राहकों के लिए आसान संपर्क।' },
          { name: 'रेस्टोरेंट व टेबल बुकिंग', description: 'दुकान के बाहर टेबल बुक कराने हेतु।', benefit: 'ग्राहकों को आकर्षित करता है।' },
          { name: 'सिक्योरिटी गार्ड व अलार्म सेवा', description: 'सुरक्षा बोर्ड पर कंट्रोल रूम नंबर के साथ।', benefit: 'कंट्रोल रूम से तुरंत संपर्क।' }
        ],
        howItWorks: [
          { title: '1. फोन नंबर दर्ज करें', description: 'कंट्री कोड के साथ अपना फोन नंबर लिखें।' },
          { title: '2. डिज़ाइन कस्टमाइज़ करें', description: 'रंग चुनें और फोन आइकन या अपना लोगो लगाएं।' },
          { title: '3. डाउनलोड व प्रिंट करें', description: 'वेक्टर SVG या हाई-रिज़ॉल्यूशन PNG डाउनलोड करें।' }
        ],
        useCases: [
          { title: 'फ्रिज मैग्नेट्स', description: '24 घंटे प्लंबर और इलेक्ट्रीशियन सेवा हेतु।', example: 'लोकल प्लंबर सर्विस कार्ड।' },
          { title: 'सर्विस वैन पर स्टीकर', description: 'गाड़ी की खिड़की पर लगा संपर्क कोड।', example: 'एसी रिपेयर सर्विस वैन।' },
          { title: 'हाईवे विज्ञापन होर्डिंग्स', description: '"अभी मुफ़्त कॉल करें" लिखा हुआ बोर्ड।', example: 'कार रिकवरी व टोइंग सेवा।' },
          { title: 'विज्ञापन पैम्फलेट्स', description: 'परामर्श और बुकिंग के लिए।', example: 'डॉक्टर क्लिनिक पर्चा।' }
        ],
        tips: [
          'कंट्री कोड अवश्य लगाएं: फोन नंबर में +91 जैसा अंतरराष्ट्रीय कोड जोड़ें।',
          'हाई कंट्रास्ट: सफ़ेद बैकग्राउंड पर गहरे काले डॉट्स रखें।',
          'न्यूनतम साइज़: कागज़ पर कम से कम 20 x 20 मिमी आकार रखें।',
          'गाड़ियों के लिए SVG: स्टीकर कटिंग के लिए हमेशा SVG का उपयोग करें।',
          'लाइन चालू रखें: सुनिश्चित करें कि दिया गया नंबर हमेशा चालू हो।'
        ],
        technicalNotes: 'मानक tel: प्रोटोकॉल सभी स्मार्टफोन डायलर ऐप्स पर समर्थित।',
        faqs: [
          { question: 'स्कैन करने पर कॉल QR कोड कैसे काम करता है?', answer: 'कैमरे से स्कैन करते ही फोन का डायलर खुल जाता है और नंबर पहले से टाइप मिलता है।' },
          { question: 'क्या कॉल अपने आप लग जाती है?', answer: 'नहीं, सुरक्षा कारणों से यूजर को हमेशा कॉल लगाने के लिए डायल बटन दबाना होता है।' },
          { question: 'क्या मैं लैंडलाइन और मोबाइल दोनों नंबर डाल सकता हूँ?', answer: 'हाँ, आप कोई भी मोबाइल, लैंडलाइन या टोल-फ्री नंबर डाल सकते हैं।' },
          { question: 'क्या यह QR कोड कभी एक्सपायर होता है?', answer: 'नहीं, यह कोड हमेशा के लिए सक्रिय और मुफ़्त रहता है।' },
          { question: 'क्या मैं बीच में अपना लोगो लगा सकता हूँ?', answer: 'हाँ, लोगो अपलोड करने पर सिस्टम एरर करेक्शन को हाई (H) पर सेट कर देगा।' },
          { question: 'क्या यह मुफ़्त है?', answer: 'हाँ, इसे बनाना और SVG/PNG में डाउनलोड करना 100% मुफ़्त है।' }
        ],
        relatedTools: [
          { name: 'WhatsApp QR जेनरेटर', slug: 'whatsapp-qr-code-generator', description: 'ग्राहकों से सीधे व्हाट्सएप चैट शुरू करें।' },
          { name: 'SMS QR कोड जेनरेटर', slug: 'sms-qr-code-generator', description: 'पहले से लिखा संदेश SMS से भेजें।' },
          { name: 'vCard विज़िटिंग कार्ड QR', slug: 'vcard-qr-code-generator', description: 'संपर्क विवरण सीधे फोनबुक में सेव कराएं।' },
          { name: 'ईमेल QR जेनरेटर', slug: 'email-qr-code-generator', description: 'स्कैन करते ही तैयार ईमेल ड्राफ्ट खोलें।' }
        ]
      };
    default: // 'en'
      return {
        slug: 'phone-qr-code-generator',
        qrTypeId: 'phone',
        title: 'Phone Call QR Code Generator — Enable Instant 1-Tap Voice Calls',
        description: 'Generate custom Phone Call QR codes. Let customers dial your business number with one camera scan. Free vector SVG & PNG download.',
        h1: 'Phone Call QR Code Generator',
        subheadline: 'Let customers dial your direct phone number in a single camera scan—no manual digit typing required.',
        heading: 'Phone Call QR Code',
        subheading: 'Connect offline customers directly to your sales and support hotlines in seconds.',
        overviewTitle: 'What is a Phone Call QR Code Generator?',
        overviewParagraphs: [
          'A Phone Call QR code generator encodes standard "tel:number" URI protocols into an optical 2D barcode. When scanned using any smartphone camera, the device immediately launches the native phone dialer app with your business number populated and ready to call.',
          'Manually typing long 10-to-12 digit phone numbers from billboards, service vans, or storefront windows leads to transcription errors and abandoned calls. A Phone Call QR code eliminates friction and connects leads to your phone staff in under two seconds.',
          'Our generator operates 100% client-side in your browser for complete privacy. Export print-ready vector SVG files for physical signage or high-DPI PNG images for digital displays.'
        ],
        sectors: [
          { name: 'Emergency Towing & Roadside Assistance', description: 'Printed on vehicle decals and highway billboards for rapid dispatch.', benefit: 'Provides immediate support during vehicle breakdowns.' },
          { name: 'Home Trades (Locksmith, HVAC, Plumbing)', description: 'Printed on refrigerator magnets and company service vans.', benefit: 'Captures urgent local home repair calls.' },
          { name: 'Taxis, Shuttles & Ride Booking', description: 'Displayed in hotel lobbies and transit stations for quick vehicle calls.', benefit: 'Facilitates fast passenger bookings.' },
          { name: 'Customer Service & Hotline Desks', description: 'Printed on invoices and warranty booklets for direct phone support.', benefit: 'Ensures fast, accessible customer service.' },
          { name: 'Restaurants & Phone Reservations', description: 'Displayed on window placards for calling the host desk.', benefit: 'Captures spontaneous dining reservations.' },
          { name: 'Security Services & Guard Desks', description: 'Mounted on building security signboards for 24/7 central dispatch.', benefit: 'Delivers immediate security response.' }
        ],
        howItWorks: [
          { title: '1. Enter Business Phone Number', description: 'Input your full phone number including the international country code.' },
          { title: '2. Customize Styling & Colors', description: 'Match corporate color themes and embed a central phone icon or logo.' },
          { title: '3. Download & Print Everywhere', description: 'Export print-ready Vector SVG for physical signage or high-DPI PNG.' }
        ],
        useCases: [
          { title: 'Refrigerator Magnets', description: 'Distributed by 24-hour locksmiths and emergency plumbers.', example: 'Local plumber capturing recurring neighborhood service calls.' },
          { title: 'Commercial Service Vans', description: 'Oversized decals on vehicle doors for pedestrians and drivers.', example: 'HVAC repair company vehicle branding.' },
          { title: 'Highway Billboards', description: 'Printed alongside clear "Call Us Now" messaging.', example: 'Roadside towing dispatch service.' },
          { title: 'Direct Mail Postcards', description: 'Mailed to local households offering free phone consultations.', example: 'Insurance agency generating inbound phone leads.' }
        ],
        tips: [
          'International Country Code: Always format phone numbers with country codes (e.g. +1 for US).',
          'High Optical Contrast: Maintain dark modules on a clean white background for rapid scanning.',
          'Minimum Physical Print Size: Print at a minimum of 20 x 20 mm on handheld cards and flyers.',
          'Vector SVG for Vehicle Wraps: Use Vector SVG to ensure razor-sharp rendering on vinyl cutters.',
          'Verify Line Availability: Ensure the destination phone number is staffed during business hours.'
        ],
        technicalNotes: 'Standards Compliance: Generates standard RFC 3966 tel: URIs natively supported across all iOS and Android camera apps.',
        faqs: [
          { question: 'How does a Phone Call QR code work when scanned?', answer: 'When scanned with any smartphone camera, the native dialer app opens with your phone number pre-filled and ready to initiate the call.' },
          { question: 'Does the phone call start automatically upon scanning?', answer: 'No. For security and user consent, the mobile operating system always requires the user to tap the green "Call" button.' },
          { question: 'Can I use mobile, landline, and toll-free numbers?', answer: 'Yes! You can encode any valid landline, mobile, international, or 1-800 toll-free phone number.' },
          { question: 'Do Phone Call QR codes ever expire?', answer: 'No. Static Phone Call QR codes encode the number directly and will work permanently with zero fees.' },
          { question: 'Can I add my company logo to the center of the QR code?', answer: 'Yes! Upload your logo in PNG or SVG format, and our generator automatically boosts error correction to Level H (30%) for seamless scanning.' },
          { question: 'Is it free to generate and download?', answer: 'Yes! Creating and downloading Phone Call QR codes in SVG and PNG format is 100% free with unlimited scans.' }
        ],
        relatedTools: [
          { name: 'WhatsApp QR Generator', slug: 'whatsapp-qr-code-generator', description: 'Launch instant WhatsApp business conversations.' },
          { name: 'SMS QR Code Generator', slug: 'sms-qr-code-generator', description: 'Launch pre-filled SMS text messages.' },
          { name: 'vCard QR Generator', slug: 'vcard-qr-code-generator', description: 'Share full contact credentials directly to address books.' },
          { name: 'Email QR Generator', slug: 'email-qr-code-generator', description: 'Pre-compose email drafts in a single scan.' }
        ]
      };
  }
}
