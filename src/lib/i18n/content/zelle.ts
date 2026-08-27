import type { Locale } from '../config';
import type { LocalizedPageContent } from './types';

export function getZelleContent(locale: Locale): LocalizedPageContent {
  switch (locale) {
    case 'es':
      return {
        slug: 'zelle-qr-code-generator',
        qrTypeId: 'zelle',
        title: 'Generador de Código QR de Zelle — Datos de Destinatario para Pagos Bancarios',
        description: 'Crea códigos QR con tus datos de destinatario Zelle (correo electrónico, teléfono o enlace de destinatario). Descarga en vector SVG y PNG.',
        h1: 'Generador de Código QR de Zelle',
        subheadline: 'Genera códigos QR que muestran tus datos de destinatario registrados en Zelle para facilitar transferencias bancarias directas.',
        heading: 'Código QR de Destinatario Zelle',
        subheading: 'Comparte tu correo o teléfono registrado en Zelle sin errores tipográficos para cobros directos en cuenta bancaria.',
        overviewTitle: '¿Qué es un Código QR de Destinatario Zelle?',
        overviewParagraphs: [
          'Zelle es la red de transferencias interbancarias directas de Estados Unidos que funciona vinculada al correo electrónico o número de teléfono móvil del destinatario dentro de las aplicaciones móviles de los bancos participantes.',
          'Este generador codifica de forma segura tu identificador de destinatario registrado en Zelle (correo electrónico, teléfono o enlace proporcionado por tu entidad bancaria). Al escanear el código, el cliente obtiene de inmediato los datos de contacto verificados para realizar el envío directo desde su propia aplicación bancaria.',
          'Nuestra herramienta genera el código QR para el destino que indiques. Los pagos son procesados directamente por tu banco y la red Zelle, sin intermediarios ni comisiones de pasarela.'
        ],
        sectors: [
          { name: 'Profesionales Autónomos y Servicios', description: 'En facturas y presupuestos para cobro directo en cuenta.', benefit: 'Transferencias interbancarias rápidas sin comisiones.' },
          { name: 'Alquileres y Arrendadores', description: 'En recibos de alquiler para que los inquilinos abonen la mensualidad.', benefit: 'Cobro directo y puntual de rentas.' },
          { name: 'Peluquerías y Barberías', description: 'En espejos y mostradores para cobro de servicios y propinas.', benefit: 'Cobro ágil sin necesidad de efectivo.' },
          { name: 'Clínicas y Terapeutas', description: 'En recepción para abono de consultas médicas y sesiones.', benefit: 'Recepción directa de honorarios en la cuenta del negocio.' },
          { name: 'Pequeñas Empresas Locales', description: 'En el mostrador para clientes que prefieren transferencia bancaria.', benefit: 'Ahorro total en costes de datáfonos.' },
          { name: 'Grupos y Comunidades de Vecinos', description: 'Para cuotas de mantenimiento y gastos compartidos.', benefit: 'Gestión transparente de cobros.' }
        ],
        howItWorks: [
          { title: '1. Introduce tu Correo o Teléfono de Zelle', description: 'Escribe tu email o móvil registrado en Zelle, o enlace bancario.' },
          { title: '2. Añade Nombre del Beneficiario', description: 'Indica tu nombre o razón social para verificación del pagador.' },
          { title: '3. Descarga e Imprime', description: 'Exporta en SVG vectorial para imprenta o PNG de alta resolución.' }
        ],
        useCases: [
          { title: 'Expositores en Recepción', description: 'Soportes de mesa con "Paga con Zelle a este destinatario".', example: 'Clínica dental o fisioterapia.' },
          { title: 'Facturas Impresas y Recibos', description: 'Al pie de la factura con el email de Zelle destacado.', example: 'Arrendador cobrando alquiler.' },
          { title: 'Tarjetas de Visita Comerciales', description: 'En el reverso para cobro de servicios profesionales.', example: 'Consultor financiero.' },
          { title: 'Adhesivos en Espejos', description: 'En puestos de trabajo para cobro directo.', example: 'Estudio de peluquería.' }
        ],
        tips: [
          'Email o Teléfono Enrolado: Asegúrate de que el dato esté registrado y activo en Zelle.',
          'Indica tu Nombre Completo: Ayuda a que el cliente verifique al beneficiario en su app bancaria.',
          'Alto Contraste: Utiliza módulos oscuros sobre fondo blanco para facilitar el escaneo.',
          'SVG para Rotulación: Utiliza SVG vectorial para impresión en alta definición.',
          'Prueba con tu Móvil: Escanea el código antes de imprimir la tirada completa.'
        ],
        technicalNotes: 'Aviso: Esta herramienta genera códigos QR para el destino que proporcionas. Los pagos son procesados por el servicio correspondiente (Zelle y tu banco).',
        faqs: [
          { question: '¿Cómo funciona este código QR de Zelle?', answer: 'El código codifica tus datos de destinatario registrados en Zelle (email, teléfono o enlace). Al escanearlo, el cliente visualiza y copia los datos exactos para transferir desde su app bancaria.' },
          { question: '¿Esta web procesa las transferencias de Zelle?', answer: 'No. Esta aplicación únicamente genera el código visual. Las transferencias ocurren directamente entre los bancos a través de la red Zelle.' },
          { question: '¿Existe un enlace universal de pago de Zelle?', answer: 'Zelle opera a través de las aplicaciones móviles de cada banco individual. Por ello, el código QR comparte tus datos de destinatario verificados para que el cliente ordene la transferencia en su banco.' },
          { question: '¿Tiene algún coste o comisión?', answer: 'La generación y descarga del código QR es 100% gratuita. Las transferencias estándar de Zelle tampoco suelen tener comisiones bancarias.' },
          { question: '¿Puedo personalizar los colores y añadir mi logo?', answer: 'Sí, puedes personalizar la paleta de colores y subir el logo de tu empresa con corrección de errores nivel Alto (30%).' },
          { question: '¿Qué formato de archivo debo descargar para imprimir?', answer: 'Para impresiones físicas como expositores o tarjetas, te recomendamos el formato vectorial SVG.' }
        ],
        relatedTools: [
          { name: 'QR de Venmo', slug: 'venmo-qr-code-generator', description: 'Crea códigos para pagos en Venmo.' },
          { name: 'QR de PayPal', slug: 'paypal-qr-code-generator', description: 'Genera códigos con tu enlace PayPal.Me.' },
          { name: 'QR de Cash App', slug: 'cash-app-qr-code-generator', description: 'Genera códigos con tu $Cashtag.' },
          { name: 'QR de Contacto vCard', slug: 'vcard-qr-code-generator', description: 'Guarda tarjetas de visita completas.' }
        ]
      };
    case 'de':
      return {
        slug: 'zelle-qr-code-generator',
        qrTypeId: 'zelle',
        title: 'Zelle QR Code Generator — Empfängerdaten für Banküberweisungen',
        description: 'Erstellen Sie QR-Codes mit Ihren Zelle-Empfängerdaten (E-Mail, Telefonnummer oder Empfängerlink). Kostenloser Vektor-SVG & PNG Download.',
        h1: 'Zelle QR Code Generator',
        subheadline: 'Generieren Sie QR-Codes mit Ihren bei Zelle registrierten Empfängerdaten für direkte Banküberweisungen.',
        heading: 'Zelle Empfänger-QR-Code',
        subheading: 'Teilen Sie Ihre registrierte E-Mail-Adresse oder Telefonnummer für direkte Gutschriften auf Ihrem Bankkonto.',
        overviewTitle: 'Was ist ein Zelle QR Code Generator?',
        overviewParagraphs: [
          'Zelle ist das US-amerikanische Interbanken-Netzwerk für Sofortüberweisungen von Konto zu Konto, das über die verknüpfte E-Mail-Adresse oder Mobilfunknummer des Empfängers in den Banking-Apps der teilnehmenden Banken funktioniert.',
          'Dieser Generator kodiert Ihre bei Zelle registrierte Empfängeradresse (E-Mail, Telefonnummer oder bankspezifischer Link) in einen 2D-Barcode. Beim Scannen erhält der Zahler die exakten Empfängerdaten für die direkte Überweisung in seiner Banking-App.',
          'Die Zahlungsabwicklung erfolgt direkt zwischen den beteiligten Banken über das Zelle-Netzwerk. Wir erheben keinerlei Gebühren.',
          'Farben anpassen, Logo einbetten und als druckfertiges Vektor-SVG oder PNG herunterladen.'
        ],
        sectors: [
          { name: 'Dienstleister & Freiberufler', description: 'Auf Rechnungen für direkte Banküberweisungen.', benefit: 'Schnelle Gutschrift ohne Kreditkartengebühren.' },
          { name: 'Vermieter & Immobilienverwaltung', description: 'Auf Mietbelegen zur monatlichen Mietzahlung.', benefit: 'Pünktliche Mieteinnahmen direkt auf dem Konto.' },
          { name: 'Salons & Friseure', description: 'Am Arbeitsplatz für Trinkgeld und Dienstleistungen.', benefit: 'Bargeldlose Bezahlung ohne teures Terminal.' },
          { name: 'Praxen & Therapeuten', description: 'Am Empfang für Behandlungs- und Beratungskosten.', benefit: 'Direkte Honorarüberweisung auf das Praxiskonto.' },
          { name: 'Lokale Kleinbetriebe', description: 'Am Tresen für Kunden mit Banküberweisung.', benefit: 'Vollständige Ersparnis von Terminal-Mieten.' },
          { name: 'Vereine & Gemeinschaften', description: 'Für Mitgliedsbeiträge und Umlagen.', benefit: 'Transparente Verwaltung gemeinsamer Kassen.' }
        ],
        howItWorks: [
          { title: '1. Zelle E-Mail oder Rufnummer Eingeben', description: 'Tragen Sie Ihre bei Zelle registrierte E-Mail oder Mobilnummer ein.' },
          { title: '2. Empfängernamen Hinzufügen', description: 'Geben Sie Ihren Namen zur Bestätigung für den Zahler an.' },
          { title: '3. Herunterladen & Drucken', description: 'Als Vektor-SVG für Schilder oder PNG exportieren.' }
        ],
        useCases: [
          { title: 'Thekenaufsteller am Empfang', description: 'Acrylaufsteller mit "Zelle Zahlungen an diese Adresse".', example: 'Physiotherapie-Praxis.' },
          { title: 'Gedruckte Mietverträge & Rechnungen', description: 'Im Fußbereich für pünktliche Überweisungen.', example: 'Hausverwaltung.' },
          { title: 'Visitenkarten', description: 'Auf der Rückseite für direkte Honorare.', example: 'Finanzberater.' },
          { title: 'Spiegelaufkleber im Salon', description: 'Für direkte Bezahlung am Frisiertisch.', example: 'Barbershop.' }
        ],
        tips: [
          'Zelle Registrierung Prüfen: Sicherstellen, dass E-Mail oder Rufnummer bei Zelle aktiv sind.',
          'Vollständigen Namen Angeben: Erleichtert dem Zahler die Verifizierung in seiner Bank-App.',
          'Hoher Kontrast: Schwarze Punkte auf weißem Grund für optimales Scannen.',
          'Vektor-SVG für Drucksachen: Garantiert randscharfe Kanten bei Schildern.',
          'Vorab Scantest: Vor dem Aushang mit der Smartphone-Kamera testen.'
        ],
        technicalNotes: 'Hinweis: Dieses Tool generiert QR-Codes für das von Ihnen angegebene Ziel. Die Zahlungsabwicklung erfolgt durch den jeweiligen Zahlungsdienstleister (Zelle / Bank).',
        faqs: [
          { question: 'Wie funktioniert dieser Zelle QR-Code?', answer: 'Der Code enthält Ihre bei Zelle hinterlegten Empfängerdaten (E-Mail, Telefon oder Link). Beim Scannen sieht der Zahler die genauen Daten für die Überweisung in seiner Banking-App.' },
          { question: 'Verarbeitet diese Seite Überweisungen?', answer: 'Nein, wir erzeugen ausschließlich den QR-Code. Alle Überweisungen finden direkt im Zelle-Netzwerk Ihrer Bank statt.' },
          { question: 'Gibt es einen universellen Zelle Weblink?', answer: 'Zelle wird direkt in den Apps der jeweiligen Partnerbanken ausgeführt. Der Code stellt daher die verifizierten Empfängerdaten bereit.' },
          { question: 'Fallen für die Erstellung Gebühren an?', answer: 'Nein, die Erstellung und der Download in SVG und PNG sind zu 100% kostenlos.' },
          { question: 'Kann ich Farben und mein Logo anpassen?', answer: 'Ja, Sie können eigene Farben wählen und Ihr Logo mit Fehlerkorrektur Stufe H (30%) einbetten.' },
          { question: 'Welches Format eignet sich für den Druck?', answer: 'Für gedruckte Aufsteller und Schilder empfehlen wir Vektor-SVG.' }
        ],
        relatedTools: [
          { name: 'Venmo QR Generator', slug: 'venmo-qr-code-generator', description: 'QR-Codes für Venmo erstellen.' },
          { name: 'PayPal QR Generator', slug: 'paypal-qr-code-generator', description: 'QR-Codes für PayPal.Me erstellen.' },
          { name: 'Cash App QR Code', slug: 'cash-app-qr-code-generator', description: 'Codes für $Cashtag erstellen.' },
          { name: 'vCard Visitenkarte', slug: 'vcard-qr-code-generator', description: 'Kontaktdaten im Telefonbuch speichern.' }
        ]
      };
    case 'fr':
      return {
        slug: 'zelle-qr-code-generator',
        qrTypeId: 'zelle',
        title: 'Générateur de QR Code Zelle — Coordonnées de Destinataire pour Virements Bancaires',
        description: 'Créez des QR codes avec vos coordonnées de destinataire Zelle (e-mail, téléphone ou lien bancaire). Téléchargement gratuit en SVG et PNG.',
        h1: 'Générateur de QR Code Zelle',
        subheadline: 'Générez des QR codes affichant vos coordonnées de destinataire enregistrées sur Zelle pour des virements bancaires directs.',
        heading: 'QR Code de Destinataire Zelle',
        subheading: 'Partagez votre e-mail ou téléphone enregistré sur Zelle pour recevoir des virements directement sur votre compte bancaire.',
        overviewTitle: 'Qu\'est-ce qu\'un QR Code Zelle ?',
        overviewParagraphs: [
          'Zelle est le réseau de virement bancaire instantané aux États-Unis qui fonctionne directement via l\'adresse e-mail ou le numéro de mobile du bénéficiaire dans l\'application bancaire de sa banque.',
          'Ce générateur encode vos coordonnées de destinataire Zelle (e-mail, numéro de téléphone ou lien bancaire) dans un code 2D. Au scan, le payeur obtient les informations exactes pour effectuer son virement depuis son application bancaire.',
          'Le traitement financier est réalisé directement par votre établissement bancaire et le réseau Zelle, sans aucun frais d\'intermédiaire.',
          'Personnalisez les couleurs, intégrez votre logo et téléchargez en SVG vectoriel pour l\'impression ou PNG haute définition.'
        ],
        sectors: [
          { name: 'Indépendants & Prestataires', description: 'Sur devis et factures pour des virements directs.', benefit: 'Paiement sans frais de carte bancaire.' },
          { name: 'Bailleurs & Gestion Locative', description: 'Sur avis d\'échéance pour le paiement des loyers.', benefit: 'Encaissement ponctuel directement en compte.' },
          { name: 'Salons de Coiffure & Beauté', description: 'Sur les postes de travail pour prestations et pourboires.', benefit: 'Encaissement sans terminal TPE.' },
          { name: 'Cabinets Médicaux & Thérapeutes', description: 'À l\'accueil pour le règlement des consultations.', benefit: 'Virement direct sur le compte professionnel.' },
          { name: 'Petits Commerces Locaux', description: 'Au comptoir pour les clients privilégiant le virement.', benefit: 'Économie sur les frais bancaires.' },
          { name: 'Associations & Copropriétés', description: 'Pour le paiement des cotisations et charges.', benefit: 'Gestion transparente des encaissements.' }
        ],
        howItWorks: [
          { title: '1. Saisissez votre E-mail ou Téléphone Zelle', description: 'Indiquez votre identifiant enregistré sur Zelle.' },
          { title: '2. Ajoutez le Nom du Bénéficiaire', description: 'Précisez votre nom pour vérification par le payeur.' },
          { title: '3. Téléchargez et Imprimez', description: 'Exportez en SVG vectoriel pour impression ou PNG.' }
        ],
        useCases: [
          { title: 'Chevalets d\'Accueil', description: 'Support en plexiglas avec "Règlement Zelle à ce destinataire".', example: 'Cabinet de kinésithérapie.' },
          { title: 'Factures Imprimées', description: 'En pied de page pour un virement rapide.', example: 'Gestionnaire immobilier.' },
          { title: 'Cartes de Visite', description: 'Au verso pour règlement de prestations.', example: 'Consultant indépendant.' },
          { title: 'Stickers de Miroir en Salon', description: 'Pour paiement direct au fauteuil.', example: 'Salon de coiffure.' }
        ],
        tips: [
          'Vérifiez l\'Inscription : Assurez-vous que l\'e-mail ou le mobile soit actif sur Zelle.',
          'Nom Complet : Facilite la vérification par le payeur dans son application bancaire.',
          'Contraste Net : Points noirs sur fond blanc pour un scan rapide.',
          'SVG pour l\'Impression : Net organisez vos impressions professionnelles.',
          'Test Préalable : Scannez le code avant tirage.'
        ],
        technicalNotes: 'Avertissement : Cet outil génère des QR codes pour la destination fournie. Les paiements sont traités par le service de paiement concerné (Zelle / Banque).',
        faqs: [
          { question: 'Comment fonctionne ce QR code Zelle ?', answer: 'Le code contient vos coordonnées de destinataire Zelle (e-mail, téléphone ou lien). Au scan, le payeur visualise les informations exactes pour effectuer son virement depuis sa banque.' },
          { question: 'Ce site traite-t-il les virements ?', answer: 'Non, cet outil génère uniquement le QR code visuel. Toutes les transactions financières s\'effectuent directement dans le réseau Zelle de votre banque.' },
          { question: 'Existe-t-il un lien web universel Zelle ?', answer: 'Zelle fonctionne directement dans les applications mobiles de chaque banque participante. Le code transmet donc les données vérifiées du bénéficiaire.' },
          { question: 'La création est-elle gratuite ?', answer: 'Oui, la création et le téléchargement en SVG et PNG sont 100% gratuits.' },
          { question: 'Puis-je personnaliser les couleurs et ajouter mon logo ?', answer: 'Oui, vous pouvez choisir vos couleurs et insérer votre logo avec correction d\'erreur niveau Élevé (30%).' },
          { question: 'Quel format choisir pour l\'impression ?', answer: 'Pour les supports imprimés, nous vous recommandons le format vectoriel SVG.' }
        ],
        relatedTools: [
          { name: 'QR Code Venmo', slug: 'venmo-qr-code-generator', description: 'Codes pour paiements Venmo.' },
          { name: 'QR Code PayPal', slug: 'paypal-qr-code-generator', description: 'Codes pour paiements PayPal.Me.' },
          { name: 'QR Code Cash App', slug: 'cash-app-qr-code-generator', description: 'Codes pour $Cashtag.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Partagez vos coordonnées complètes.' }
        ]
      };
    case 'pt':
      return {
        slug: 'zelle-qr-code-generator',
        qrTypeId: 'zelle',
        title: 'Gerador de QR Code do Zelle — Dados de Destinatário para Transferências Bancárias',
        description: 'Crie QR Codes com seus dados de destinatário do Zelle (e-mail, telefone ou link bancário). Download gratuito em vetor SVG e PNG.',
        h1: 'Gerador de QR Code do Zelle',
        subheadline: 'Gere QR Codes com seus dados de destinatário cadastrados no Zelle para facilitar transferências bancárias diretas.',
        heading: 'QR Code de Destinatário Zelle',
        subheading: 'Compartilhe seu e-mail ou telefone cadastrado no Zelle para recebimentos diretos na sua conta bancária.',
        overviewTitle: 'O que é um QR Code do Zelle?',
        overviewParagraphs: [
          'O Zelle é a rede de transferências interbancárias diretas dos Estados Unidos que funciona vinculada ao e-mail ou telefone celular do beneficiário dentro do aplicativo do seu banco.',
          'Este gerador codifica seus dados de destinatário Zelle (e-mail, celular ou link bancário) em um código 2D. Ao escanear, o pagador visualiza as informações exatas para realizar a transferência no seu próprio banco.',
          'O processamento financeiro é realizado diretamente pelos bancos participantes através da rede Zelle, sem intermediários.',
          'Personalize cores, insira seu logotipo e baixe em SVG vetorial para gráficas ou PNG em alta definição.'
        ],
        sectors: [
          { name: 'Autônomos & Prestadores', description: 'Em orçamentos e faturas para transferências diretas.', benefit: 'Recebimento sem taxas de cartão.' },
          { name: 'Locadores & Imóveis', description: 'Em recibos de aluguel para pagamento pontual.', benefit: 'Crédito direto na conta bancária.' },
          { name: 'Salões de Beleza & Barbearias', description: 'Nas bancadas para pagamento de serviços e gorjetas.', benefit: 'Cobrança rápida sem maquininha.' },
          { name: 'Clínicas & Consultórios', description: 'Na recepção para acerto de consultas.', benefit: 'Transferência direta na conta profissional.' },
          { name: 'Pequenos Comércios', description: 'No balcão para clientes que preferem transferência.', benefit: 'Economia com aluguel de terminais.' },
          { name: 'Condomínios & Grupos', description: 'Para cobrança de taxas e despesas comuns.', benefit: 'Gestão transparente de recebimentos.' }
        ],
        howItWorks: [
          { title: '1. Digite seu E-mail ou Telefone Zelle', description: 'Insira o e-mail ou celular cadastrado no Zelle.' },
          { title: '2. Adicione o Nome do Titular', description: 'Informe o nome para conferência do pagador.' },
          { title: '3. Baixe e Divulgue', description: 'Exporte em SVG vetorial para placas ou PNG.' }
        ],
        useCases: [
          { title: 'Displays de Recepção', description: 'Suporte em acrílico com "Pague via Zelle neste contato".', example: 'Consultório de fisioterapia.' },
          { title: 'Faturas e Recibos', description: 'No rodapé para transferências rápidas.', example: 'Locador de imóveis.' },
          { title: 'Cartões de Visita', description: 'No verso para honorários profissionais.', example: 'Consultor independente.' },
          { title: 'Adesivos de Espelho', description: 'Na bancada para pagamento direto.', example: 'Barbearia.' }
        ],
        tips: [
          'Cadastro Ativo: Certifique-se de que o contato esteja ativo no Zelle.',
          'Nome Completo: Facilita a conferência no aplicativo bancário.',
          'Alto Contraste: Fundo branco facilita a leitura.',
          'SVG para Gráficas: Garante nitidez máxima na impressão.',
          'Teste com Celular: Escaneie o impresso antes de colocar em uso.'
        ],
        technicalNotes: 'Aviso: Esta ferramenta gera códigos QR para o destino informado. Os pagamentos são processados pelo respectivo serviço (Zelle / Banco).',
        faqs: [
          { question: 'Como funciona este QR Code do Zelle?', answer: 'O código contém seus dados de destinatário cadastrados no Zelle (e-mail, celular ou link). Ao escanear, o cliente visualiza as informações exatas para transferir pelo banco dele.' },
          { question: 'Este site processa transferências?', answer: 'Não, geramos apenas o código visual. Todas as transferências ocorrem diretamente dentro do sistema bancário via Zelle.' },
          { question: 'Existe um link web universal do Zelle?', answer: 'O Zelle opera diretamente nos aplicativos de cada banco participante. O código fornece os dados verificados do destinatário.' },
          { question: 'A criação é gratuita?', answer: 'Sim, a criação e o download em SVG e PNG são 100% grátis.' },
          { question: 'Posso personalizar cores e logotipo?', answer: 'Sim, você pode escolher cores e enviar seu logo com correção de erros em nível Alto (30%).' },
          { question: 'Qual formato escolher para impressão?', answer: 'Recomendamos o formato vetorial SVG para placas e materiais impressos.' }
        ],
        relatedTools: [
          { name: 'QR Code Venmo', slug: 'venmo-qr-code-generator', description: 'Códigos para pagamentos Venmo.' },
          { name: 'QR Code PayPal', slug: 'paypal-qr-code-generator', description: 'Códigos para links PayPal.Me.' },
          { name: 'QR Code Cash App', slug: 'cash-app-qr-code-generator', description: 'Códigos para $Cashtag.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Salve contatos completos na agenda.' }
        ]
      };
    case 'it':
      return {
        slug: 'zelle-qr-code-generator',
        qrTypeId: 'zelle',
        title: 'Generatore QR Code Zelle — Dati Destinatario per Bonifici Bancari Diretti',
        description: 'Crea codici QR con i tuoi dati di destinatario Zelle (email, numero di telefono o link bancario). Download gratuito in SVG e PNG.',
        h1: 'Generatore QR Code Zelle',
        subheadline: 'Genera codici QR con i tuoi dati di destinatario registrati su Zelle per facilitare bonifici bancari diretti.',
        heading: 'QR Code Destinatario Zelle',
        subheading: 'Condividi la tua email o numero di telefono registrato su Zelle per accrediti diretti sul conto bancario.',
        overviewTitle: 'Cos\'è un QR Code Zelle?',
        overviewParagraphs: [
          'Zelle è la rete statunitense di bonifici bancari istantanei conto-a-conto che funziona tramite l\'indirizzo email o il numero di cellulare del beneficiario all\'interno delle app bancarie aderenti.',
          'Questo generatore codifica i tuoi dati di destinatario Zelle (email, telefono o link bancario) in un codice 2D. Inquadrando il codice, il pagatore ottiene i recapiti esatti per effettuare il bonifico dalla propria applicazione bancaria.',
          'L\'elaborazione finanziaria avviene direttamente tra le banche partecipanti tramite la rete Zelle, a zero commissioni di transazione.',
          'Personalizza i colori, inserisci il tuo logo e scarica in formato vettoriale SVG per la tipografia o PNG ad alta risoluzione.'
        ],
        sectors: [
          { name: 'Liberi Professionisti', description: 'Su preventivi e fatture per incassi diretti.', benefit: 'Bonifici veloci senza commissioni pos.' },
          { name: 'Proprietari & Affitti', description: 'Sulle ricevute di locazione per il pagamento del canone.', benefit: 'Accredito puntuale sul conto corrente.' },
          { name: 'Saloni di Bellezza & Barbieri', description: 'Sulle postazioni per il saldo dei servizi e mance.', benefit: 'Incassi rapidi senza contanti.' },
          { name: 'Studi Medici & Fisioterapisti', description: 'Alla reception per il pagamento delle visite.', benefit: 'Incasso diretto sul conto dello studio.' },
          { name: 'Piccole Attività Commerciali', description: 'Al banco per clienti che usano bonifico.', benefit: 'Risparmio sui canoni pos.' },
          { name: 'Condomini & Comitati', description: 'Per quote condominiali e spese comuni.', benefit: 'Gestione trasparente dei versamenti.' }
        ],
        howItWorks: [
          { title: '1. Inserisci Email o Telefono Zelle', description: 'Digita il recapito registrato su Zelle o il link bancario.' },
          { title: '2. Aggiungi il Nome del Beneficiario', description: 'Specifica il tuo nome per la verifica del pagatore.' },
          { title: '3. Scarica e Stampa', description: 'Esporta in SVG vettoriale per la stampa o PNG.' }
        ],
        useCases: [
          { title: 'Espositori alla Reception', description: 'Supporto in plexiglas con "Paga con Zelle a questo contatto".', example: 'Studio medico o fisioterapico.' },
          { title: 'Fatture Stampate e Ricevute', description: 'Nel piè di pagina per bonifici puntuali.', example: 'Proprietario di immobili.' },
          { title: 'Biglietti da Visita', description: 'Sul retro per onorari professionali.', example: 'Consulente finanziario.' },
          { title: 'Adesivi su Specchi', description: 'Sulla postazione per pagamenti diretti.', example: 'Salone da parrucchiere.' }
        ],
        tips: [
          'Verifica la Registrazione: Assicurati che l\'email o il numero siano attivi su Zelle.',
          'Nome Completo: Aiuta il pagatore a verificare il destinatario nella propria app bancaria.',
          'Contrasto Elevato: Sfondo bianco per una lettura immediata.',
          'SVG per la Stampa: Massima nitidezza tipografica per espositori.',
          'Test da Smartphone: Scansiona il cartello prima dell\'esposizione.'
        ],
        technicalNotes: 'Avviso: Questo strumento genera codici QR per la destinazione fornita. I pagamenti sono elaborati dal rispettivo servizio di pagamento (Zelle / Banca).',
        faqs: [
          { question: 'Come funziona questo codice QR Zelle?', answer: 'Il codice contiene i tuoi dati di destinatario registrati su Zelle (email, telefono o link). Inquadrandolo, il cliente visualizza i dati esatti per disporre il bonifico nella sua app bancaria.' },
          { question: 'Questo sito elabora i bonifici?', answer: 'No, questo generatore crea solo il codice visivo. Tutte le transazioni avvengono direttamente nel circuito bancario tramite Zelle.' },
          { question: 'Esiste un link web universale di Zelle?', answer: 'Zelle opera direttamente all\'interno delle applicazioni di ciascuna banca. Il codice fornisce quindi i dati verificati del destinatario.' },
          { question: 'La creazione è gratuita?', answer: 'Sì, la creazione e il download in formato SVG e PNG sono al 100% gratuiti.' },
          { question: 'Posso personalizzare colori e logo?', answer: 'Sì, puoi scegliere la palette colori e caricare il tuo logo aziendale con correzione errori Alto (30%).' },
          { question: 'Quale formato scegliere per la stampa?', answer: 'Per espositori da banco e targhe consigliamo il formato vettoriale SVG.' }
        ],
        relatedTools: [
          { name: 'QR Code Venmo', slug: 'venmo-qr-code-generator', description: 'Codici per pagamenti Venmo.' },
          { name: 'QR Code PayPal', slug: 'paypal-qr-code-generator', description: 'Codici per pagamenti PayPal.Me.' },
          { name: 'QR Code Cash App', slug: 'cash-app-qr-code-generator', description: 'Codici per $Cashtag.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Salva i contatti completi in rubrica.' }
        ]
      };
    case 'hi':
      return {
        slug: 'zelle-qr-code-generator',
        qrTypeId: 'zelle',
        title: 'Zelle QR कोड जेनरेटर — बैंक ट्रांसफर के लिए प्राप्तकर्ता विवरण कोड',
        description: 'अपने Zelle प्राप्तकर्ता विवरण (ईमेल, फोन नंबर या बैंक लिंक) के लिए कस्टम QR कोड बनाएं। वेक्टर SVG और PNG मुफ़्त डाउनलोड।',
        h1: 'Zelle QR कोड जेनरेटर',
        subheadline: 'ग्राहकों को सीधे बैंक खाते में भुगतान करने के लिए Zelle में पंजीकृत अपना ईमेल या मोबाइल नंबर साझा करने वाला QR कोड बनाएं।',
        heading: 'Zelle प्राप्तकर्ता QR कोड',
        subheading: 'बिना किसी टाइपिंग गलती के सीधे अपने बैंक खाते में भुगतान प्राप्त करने हेतु पंजीकृत संपर्क विवरण साझा करें।',
        overviewTitle: 'Zelle प्राप्तकर्ता QR कोड क्या है?',
        overviewParagraphs: [
          'Zelle अमेरिका का प्रमुख इंटरबैंक नेटवर्क है जो प्राप्तकर्ता के पंजीकृत ईमेल या मोबाइल नंबर से सीधे बैंक खाते में पैसे ट्रांसफर करता है।',
          'यह जेनरेटर आपके Zelle में पंजीकृत ईमेल, फोन नंबर या बैंक लिंक को 2D बारकोड में बदल देता है। जब कोई इसे स्कैन करता है, तो उसे आपकी सटीक जानकारी मिल जाती है जिससे वह अपनी बैंक ऐप से सीधे पैसे भेज सकता है।',
          'भुगतान का निपटारा सीधे आपके बैंक और Zelle नेटवर्क द्वारा किया जाता है। हमारा टूल केवल विज़ुअल QR कोड तैयार करता है।',
          'काउंटर स्टैंडी और बोर्ड के लिए वेक्टर SVG और PNG मुफ़्त डाउनलोड करें।'
        ],
        sectors: [
          { name: 'फ्रीलांसर्स व कंसल्टेंट्स', description: 'इनवॉइस पर सीधे बैंक खाते में फीस मंगाने के लिए।', benefit: 'कार्ड फीस के बिना त्वरित बैंक सेटलमेंट।' },
          { name: 'मकान मालिक व रेंटल सर्विस', description: 'किरायेदारों से मासिक किराया समय पर लेने हेतु।', benefit: 'सीधे बैंक खाते में समय पर किराया।' },
          { name: 'सैलून व ब्यूटी पार्लर', description: 'सर्विस और टिप लेने हेतु काउंटर पर।', benefit: 'बिना कार्ड स्वाइप मशीन के भुगतान।' },
          { name: 'डॉक्टर व थेरेपिस्ट क्लीनिक', description: 'परामर्श फीस सीधे बैंक में प्राप्त करने हेतु।', benefit: 'प्रोफेशनल बैंक अकाउंट में सीधा ट्रांसफर।' },
          { name: 'लोकल दुकानें व सेवा प्रदाता', description: 'बैंक ट्रांसफर चाहने वाले ग्राहकों के लिए।', benefit: 'कार्ड मशीन के किराए से बचत।' },
          { name: 'सोसायटी व समिति फंड', description: 'रखरखाव और चंदे के सुरक्षित संग्रह हेतु।', benefit: 'पारदर्शी भुगतान प्रबंधन।' }
        ],
        howItWorks: [
          { title: '1. Zelle ईमेल या फोन नंबर दर्ज करें', description: 'अपना पंजीकृत Zelle ईमेल या मोबाइल नंबर लिखें।' },
          { title: '2. प्राप्तकर्ता का नाम जोड़ें', description: 'सत्यापन के लिए अपना नाम या दुकान का नाम दर्ज करें।' },
          { title: '3. डाउनलोड व प्रिंट करें', description: 'वेक्टर SVG या हाई-रिज़ॉल्यूशन PNG डाउनलोड करें।' }
        ],
        useCases: [
          { title: 'रिसेप्शन काउंटर स्टैंड', description: '"Zelle द्वारा इस खाते पर भेजें" लिखा हुआ स्टैंड।', example: 'फिज़ियोथेरेपी क्लीनिक रिसेप्शन।' },
          { title: 'प्रिंटेड इनवॉइस व रसीदें', description: 'बिल के नीचे Zelle संपर्क विवरण।', example: 'मकान का किराया बिल।' },
          { title: 'प्रोफेशनल विज़िटिंग कार्ड्स', description: 'कार्ड के पीछे डायरेक्ट ट्रांसफर कोड।', example: 'फाइनेंशियल कंसल्टेंट।' },
          { title: 'मिरर व वॉल स्टिकर्स', description: 'सैलून चेयर के सामने लगा स्टिकर।', example: 'हेयर सैलून काउंटर।' }
        ],
        tips: [
          'Zelle रजिस्ट्रेशन जांचें: सुनिश्चित करें कि ईमेल या नंबर Zelle में चालू हो।',
          'पूरा नाम लिखें: ग्राहक को बैंक ऐप में नाम सत्यापित करने में मदद मिलती है।',
          'हाई कंट्रास्ट: सफ़ेद बैकग्राउंड पर गहरे काले डॉट्स रखें।',
          'प्रिंटिंग के लिए SVG: बड़े स्टैंड पर साफ़ प्रिंट के लिए SVG का उपयोग करें।',
          'प्रिंट से पहले जांच: फोन कैमरे से स्कैन करके चेक करें।'
        ],
        technicalNotes: 'सूचना: यह टूल आपके द्वारा दिए गए गंतव्य के लिए QR कोड बनाता है। भुगतान का निपटारा संबंधित भुगतान सेवा (Zelle / बैंक) द्वारा किया जाता है।',
        faqs: [
          { question: 'यह Zelle QR कोड कैसे काम करता है?', answer: 'कोड में आपके Zelle पंजीकृत विवरण (ईमेल, फोन या लिंक) होते हैं। स्कैन करने पर ग्राहक को सही विवरण दिखता है जिससे वह अपनी बैंक ऐप से पैसे भेज सकता है।' },
          { question: 'क्या यह वेबसाइट Zelle ट्रांसफर प्रोसेस करती है?', answer: 'नहीं, यह टूल केवल विज़ुअल QR कोड बनाता है। सभी ट्रांसफर सीधे आपकी बैंक के Zelle नेटवर्क में होते हैं।' },
          { question: 'क्या Zelle का कोई यूनिवर्सल वेब लिंक होता है?', answer: 'Zelle सीधे प्रत्येक भागीदार बैंक की मोबाइल ऐप में काम करता है। इसलिए कोड प्रमाणित प्राप्तकर्ता विवरण साझा करता है।' },
          { question: 'क्या यह मुफ़्त है?', answer: 'हाँ, इसे बनाना और SVG/PNG में डाउनलोड करना 100% मुफ़्त है।' },
          { question: 'क्या मैं रंग और लोगो कस्टमाइज़ कर सकता हूँ?', answer: 'हाँ, आप रंग चुन सकते हैं और हाई एरर करेक्शन (30%) के साथ अपना लोगो लगा सकते हैं।' },
          { question: 'प्रिंटिंग के लिए कौन सा फ़ाइल फॉर्मेट बेहतर है?', answer: 'साफ़ और बड़े प्रिंट के लिए वेक्टर SVG सबसे अच्छा है।' }
        ],
        relatedTools: [
          { name: 'Venmo QR जेनरेटर', slug: 'venmo-qr-code-generator', description: 'Venmo भुगतान QR कोड बनाएं।' },
          { name: 'PayPal QR जेनरेटर', slug: 'paypal-qr-code-generator', description: 'PayPal.Me भुगतान QR कोड बनाएं।' },
          { name: 'Cash App QR जेनरेटर', slug: 'cash-app-qr-code-generator', description: '$Cashtag QR कोड बनाएं।' },
          { name: 'vCard विज़िटिंग कार्ड QR', slug: 'vcard-qr-code-generator', description: 'संपर्क विवरण सीधे फोनबुक में सेव कराएं।' }
        ]
      };
    default: // 'en'
      return {
        slug: 'zelle-qr-code-generator',
        qrTypeId: 'zelle',
        title: 'Zelle QR Code Generator — Create Scannable Zelle Recipient QR Codes',
        description: 'Generate custom QR codes encoding your verified Zelle recipient details (email, mobile number, or bank link). Free vector SVG & PNG export.',
        h1: 'Zelle QR Code Generator',
        subheadline: 'Create scannable QR codes displaying your registered Zelle email, phone number, or bank recipient link for instant direct bank transfers.',
        heading: 'Zelle Recipient & Payment QR Code',
        subheading: 'Share your enrolled Zelle contact details without transcription errors for direct-to-bank customer settlements.',
        overviewTitle: 'What is a Zelle Recipient QR Code Generator?',
        overviewParagraphs: [
          'Zelle is the premier United States interbank instant payment network operating across thousands of participating financial institutions. Money transfers are routed directly between bank accounts using the payee\'s enrolled email address or mobile phone number.',
          'This generator encodes your verified Zelle recipient credentials (enrolled email, mobile number, or bank-provided recipient link) into an optical 2D barcode. When scanned using any smartphone camera, the scanner displays your verified recipient information, allowing payers to initiate the transfer directly inside their own mobile banking app.',
          'Our generator operates completely client-side in your browser for total privacy. Customize your QR code with corporate colors, insert your central store logo, and export print-ready vector SVG files for tabletop acrylic standees or crisp PNGs for digital invoices.'
        ],
        sectors: [
          { name: 'Independent Contractors & Trades', description: 'Printed on commercial invoices and project estimates.', benefit: 'Direct bank-to-bank settlement with zero card swipe processing fees.' },
          { name: 'Property Landlords & Rentals', description: 'Printed on monthly rental notices for frictionless tenant rent payments.', benefit: 'Ensures prompt direct-to-bank rent collection.' },
          { name: 'Salons, Spas & Barbershops', description: 'Displayed on mirror stations for touchless service fee and tip payments.', benefit: 'Speeds checkout without physical credit card terminals.' },
          { name: 'Medical Clinics & Therapists', description: 'Displayed at reception checkouts for patient copay settlements.', benefit: 'Deposits funds straight into the clinic operating account.' },
          { name: 'Small Local Businesses', description: 'Mounted on countertop displays for bank transfer customers.', benefit: 'Saves thousands on annual credit card interchange fees.' },
          { name: 'Homeowners Associations (HOAs)', description: 'Printed on quarterly assessment mailers for dues collection.', benefit: 'Provides transparent resident payments.' }
        ],
        howItWorks: [
          { title: '1. Enter Zelle-Enrolled Email or Phone', description: 'Input your registered email address, mobile number, or bank recipient link.' },
          { title: '2. Add Payee Name (Optional)', description: 'Input your personal or business name for payer verification.' },
          { title: '3. Download & Print Everywhere', description: 'Export print-ready Vector SVG for physical signage or high-DPI PNG.' }
        ],
        useCases: [
          { title: 'Reception Counter Acrylic Standees', description: 'Tabletop stands displaying "Pay with Zelle to this verified recipient".', example: 'Physical therapy clinic front desk.' },
          { title: 'Commercial PDF Invoices', description: 'Placed in invoice footers with the recipient Zelle email clearly highlighted.', example: 'Property management rent notice.' },
          { title: 'Professional Business Cards', description: 'Printed on card backs for immediate client fee settlement.', example: 'Financial consultant business card.' },
          { title: 'Salon Workstation Mirror Decals', description: 'Placed beside mirrors for chair-side service payment.', example: 'Barbershop station decal.' }
        ],
        tips: [
          'Verify Active Enrollment: Ensure your email or phone number is actively linked to Zelle inside your bank app.',
          'Provide Full Verified Name: Helps buyers verify the payee identity inside their mobile banking app.',
          'High Optical Contrast: Maintain dark modules against a clean white background for rapid scanning.',
          'Vector SVG for Commercial Signage: Use Vector SVG to guarantee razor-sharp rendering on print signage.',
          'Pre-Event Field Test: Scan the printed physical proof with a smartphone camera before public deployment.'
        ],
        technicalNotes: 'Disclaimer: This tool generates QR codes for the destination you provide. Payments are processed by the respective payment service (Zelle and your bank).',
        faqs: [
          { question: 'How does this Zelle QR code work when scanned?', answer: 'The QR code encodes your verified Zelle recipient details (enrolled email, phone number, or bank link). When scanned, the customer receives the exact details to transfer money directly inside their mobile banking app.' },
          { question: 'Does this website process or touch Zelle transfers?', answer: 'No. This application is solely an optical QR generator. All money transfers occur directly between banking institutions through the official Zelle network.' },
          { question: 'Is there a generic universal web payment link for Zelle?', answer: 'Zelle operates natively inside the mobile applications of individual participating banks. Therefore, this QR code shares your verified recipient details for direct entry in the payer\'s banking app.' },
          { question: 'Are there any fees to generate or scan this QR code?', answer: 'No! Creating and exporting Zelle QR codes in SVG and PNG format is 100% free with unlimited scans.' },
          { question: 'Can I customize colors and add my business logo?', answer: 'Yes! You can choose custom colors and embed your central logo with automatic Reed-Solomon Level H (30%) error correction.' },
          { question: 'What file format should I download for professional printing?', answer: 'For physical acrylic signs, stickers, and banners, we recommend downloading the Vector SVG format for crisp lines at any scale.' }
        ],
        relatedTools: [
          { name: 'Venmo QR Generator', slug: 'venmo-qr-code-generator', description: 'Generate custom QR codes for Venmo.' },
          { name: 'PayPal QR Generator', slug: 'paypal-qr-code-generator', description: 'Generate custom QR codes for PayPal.Me links.' },
          { name: 'Cash App QR Generator', slug: 'cash-app-qr-code-generator', description: 'Create scannable QR codes for your $Cashtag.' },
          { name: 'vCard QR Generator', slug: 'vcard-qr-code-generator', description: 'Share full contact credentials directly to address books.' }
        ]
      };
  }
}
