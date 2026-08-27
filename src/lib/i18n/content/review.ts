import type { Locale } from '../config';
import type { LocalizedPageContent } from './types';

export function getReviewContent(locale: Locale): LocalizedPageContent {
  switch (locale) {
    case 'es':
      return {
        slug: 'google-reviews-qr-code',
        qrTypeId: 'review',
        title: 'Generador de Código QR para Reseñas de Google — Consigue más Valoraciones',
        description: 'Genera códigos QR para reseñas de Google. Dirige a tus clientes directamente a la ventana de valoración con un escaneo. Descarga en SVG y PNG.',
        h1: 'Generador de Código QR para Reseñas de Google',
        subheadline: 'Consigue más opiniones de 5 estrellas en Google Maps. Envía a tus clientes satisfechos directamente a tu caja de valoración con un solo escaneo.',
        heading: 'Código QR de Reseñas de Google',
        subheading: 'Aumenta tus valoraciones de clientes y mejora tu posicionamiento local en Google Maps.',
        overviewTitle: '¿Qué es un Código QR de Reseñas de Google?',
        overviewParagraphs: [
          'Un código QR de reseñas de Google dirige a tus clientes directamente al formulario oficial de valoración de tu perfil de Google Business con un solo escaneo. En lugar de pedirles que busquen tu negocio manualmente en Google Maps, el código abre la ventana de 5 estrellas al instante.',
          'Las valoraciones online son un factor decisivo en el posicionamiento SEO local de Google Maps. Facilitar el proceso en el mostrador o en el ticket de compra aumenta la tasa de reseñas de clientes satisfechos.',
          'Nuestro generador te permite personalizar el diseño, incluir tu logotipo y descargar archivos vectoriales SVG listos para soportes de metacrilato y pegatinas.'
        ],
        sectors: [
          { name: 'Restaurantes y Cafeterías', description: 'En el pie de los tickets de comida y en cartas de sobremesa.', benefit: 'Captura reseñas de clientes mientras terminan de comer.' },
          { name: 'Clínicas Dentales y Médicas', description: 'En el mostrador de recepción al finalizar la consulta.', benefit: 'Aumenta la confianza y reputación médica local.' },
          { name: 'Talleres Mecánicos y Automoción', description: 'En llaveros de entrega de vehículos y facturas.', benefit: 'Atrae clientes locales de alto valor en Google Maps.' },
          { name: 'Peluquerías y Centros de Estética', description: 'En espejos y tocadores donde el cliente admira el resultado.', benefit: 'Convierte satisfacción en recomendaciones públicas.' },
          { name: 'Servicios del Hogar (Reformas, Clima)', description: 'En tarjetas que los técnicos entregan en mano al terminar la obra.', benefit: 'Destaca sobre competidores del barrio.' },
          { name: 'Hoteles y Alojamientos Rurales', description: 'En portallaves y pantallas de habitaciones.', benefit: 'Mejora el posicionamiento en búsquedas turísticas.' }
        ],
        howItWorks: [
          { title: '1. Pega tu Enlace de Reseña', description: 'Pega tu enlace oficial de Google Business (ej. https://g.page/r/.../review).' },
          { title: '2. Personaliza el Expositor', description: 'Elige colores corporativos y sube tu logo o el icono de Google.' },
          { title: '3. Imprime para el Mostrador', description: 'Descarga en SVG vectorial o PNG de alta definición.' }
        ],
        useCases: [
          { title: 'Expositores de Mostrador', description: 'Soportes de metacrilato junto al datáfono con la llamada "Valóranos en Google".', example: 'Cafetería sumando 50+ reseñas mensuales.' },
          { title: 'Tickets de Caja', description: 'Impreso al pie de los recibos de compra.', example: 'Restaurante mejorando su nota de 4.2 a 4.8 estrellas.' },
          { title: 'Tarjetas de Entrega de Servicio', description: 'Entregadas por instaladores al terminar un trabajo.', example: 'Instalador reuniendo 200+ valoraciones locales.' },
          { title: 'Adhesivos en Espejos', description: 'Vinilos discretos en tocadores de peluquería.', example: 'Salón de belleza fidelizando clientela.' }
        ],
        tips: [
          'Enlace Directo: Obtén el enlace de "Solicitar opiniones" en tu panel de Google Business para abrir la ventana directamente.',
          'Llamada a la Acción Clara: Escribe siempre "Escanea con tu móvil y valóranos en Google".',
          'Alto Contraste: Utiliza fondo blanco para que lea bien con poca luz.',
          'Formación del Personal: Enseña a tu equipo a invitar al cliente a escanear el expositor.',
          'Responde a Cada Reseña: Contesta todas las opiniones para mejorar tu posicionamiento SEO local.'
        ],
        technicalNotes: 'Totalmente compatible con enlaces https://g.page/ y perfiles de Google Maps en iOS y Android.',
        faqs: [
          { question: '¿Cómo obtengo mi enlace directo de reseñas de Google?', answer: 'Entra en tu perfil de Google Business, pulsa el botón "Solicitar opiniones" y copia el enlace corto (ej. https://g.page/r/[TuID]/review).' },
          { question: '¿Necesita el cliente una cuenta de Google para opinar?', answer: 'Sí, Google requiere inicio de sesión en una cuenta de Google para verificar que las opiniones sean de personas reales.' },
          { question: '¿Abre el código la ventana de puntuación de 5 estrellas directamente?', answer: 'Sí, al usar tu enlace oficial de reseñas, se abre directamente la ventana con las 5 estrellas listas para marcar.' },
          { question: '¿Puedo imprimir este código QR en mis tickets de caja?', answer: 'Sí, descarga el PNG o SVG e intégralo en la plantilla de tu impresora térmica de recibos.' },
          { question: '¿Tienen caducidad estos códigos QR?', answer: 'No, son permanentes y funcionarán mientras tu ficha de Google Business esté activa.' },
          { question: '¿Cuántas reseñas puedo recopilar?', answer: 'No hay ningún límite, puedes recibir escaneos y reseñas ilimitadas de forma gratuita.' }
        ],
        relatedTools: [
          { name: 'QR de Enlace Web', slug: 'url-to-qr-code', description: 'Dirige tráfico a tu sitio web o formulario de reservas.' },
          { name: 'QR de WiFi', slug: 'wifi-qr-code-generator', description: 'Conecta clientes a la red de tu local sin contraseñas.' },
          { name: 'QR de Menú para Restaurantes', slug: 'restaurant-menu-qr-code', description: 'Menús digitales sin contacto para mesas.' },
          { name: 'QR de Contacto vCard', slug: 'vcard-qr-code-generator', description: 'Comparte datos de contacto profesionales al instante.' }
        ]
      };
    case 'de':
      return {
        slug: 'google-reviews-qr-code',
        qrTypeId: 'review',
        title: 'Google Bewertungen QR Code Generator — Mehr 5-Sterne-Bewertungen',
        description: 'Erstellen Sie Google Bewertungs-QR-Codes. Leiten Sie Kunden mit einem Scan direkt zum 5-Sterne-Bewertungsfenster. Vektor-SVG & PNG Download.',
        h1: 'Google Bewertungen QR Code Generator',
        subheadline: 'Sammeln Sie mehr 5-Sterne-Kundenbewertungen auf Google Maps. Schneller Zugriff auf das Bewertungsfenster mit einem einzigen Klick.',
        heading: 'Google-Bewertungs-QR-Code',
        subheading: 'Steigern Sie Ihr lokales Ranking in Google Maps durch mehr Kundenfeedback am Point of Sale.',
        overviewTitle: 'Was ist ein Google Bewertungen QR Code?',
        overviewParagraphs: [
          'Ein Google Bewertungen QR-Code leitet zufriedene Kunden mit einem Scan direkt zum offiziellen Bewertungsformular Ihres Google Unternehmensprofils. Anstatt das Unternehmen umständlich in Google Maps suchen zu müssen, öffnet sich das 5-Sterne-Fenster sofort.',
          'Online-Bewertungen sind einer der wichtigsten Faktoren für das lokale SEO-Ranking im Google Local Pack. Ein Aufsteller an der Kasse oder auf Tischen animiert Kunden genau im Moment der höchsten Zufriedenheit.',
          'Unser Tool ist 100% kostenlos und bietet den Export hochauflösender Vektor-SVG-Dateien für Acrylaufsteller und Aufkleber.'
        ],
        sectors: [
          { name: 'Restaurants & Cafés', description: 'Auf Kassenbons und Tischaufstellern beim Bezahlen.', benefit: 'Sammelt Bewertungen direkt nach dem Essen.' },
          { name: 'Zahnärzte & Praxen', description: 'Am Empfang nach erfolgreicher Behandlung.', benefit: 'Stärkt das Vertrauen neuer Patienten im Ort.' },
          { name: 'Autowerkstätten & Service', description: 'Auf Schlüsselanhängern bei Fahrzeugübergabe.', benefit: 'Zieht lokale Autofahrer über Google Maps an.' },
          { name: 'Friseure & Kosmetikstudios', description: 'Dezent am Spiegel angebracht.', benefit: 'Verwandelt Begeisterung in öffentliche Empfehlungen.' },
          { name: 'Handwerker & Notdienste', description: 'Auf Kärtchen nach getaner Arbeit vor Ort.', benefit: 'Hebt Sie von Mitbewerbern in der Region ab.' },
          { name: 'Hotels & Ferienwohnungen', description: 'Auf Schlüsselkarten und im Gästezimmer.', benefit: 'Verbessert die Platzierung bei touristischen Suchen.' }
        ],
        howItWorks: [
          { title: '1. Bewertungslink Eingeben', description: 'Fügen Sie Ihren offiziellen Google Bewertungslink (z. B. https://g.page/r/.../review) ein.' },
          { title: '2. Aufsteller Gestalten', description: 'Farben anpassen und Google-Stern-Icon oder Firmenlogo einfügen.' },
          { title: '3. Drucken & Aufstellen', description: 'Als Vektor-SVG oder hochauflösendes PNG herunterladen.' }
        ],
        useCases: [
          { title: 'Thekenaufsteller an der Kasse', description: 'Acrylaufsteller mit dem Hinweis "Bewerten Sie uns auf Google".', example: 'Café steigert Bewertungen um 40 pro Monat.' },
          { title: 'Kassenbons & Quittungen', description: 'Aufgedruckt im Fußbereich thermischer Rechnungsbelege.', example: 'Restaurant verbessert Schnitt von 4,1 auf 4,8 Sterne.' },
          { title: 'Handwerker-Übergabekarten', description: 'Vom Monteur nach Abschluss der Arbeiten überreicht.', example: 'Elektriker mit über 150 5-Sterne-Bewertungen.' },
          { title: 'Spiegelaufkleber im Salon', description: 'Unaufdringlicher Aufkleber im Blickfeld des Kunden.', example: 'Friseursalon generiert wöchentlich neue Google-Rezensionen.' }
        ],
        tips: [
          'Direkter Kurzlink: Nutzen Sie den Button "Um Rezensionen bitten" im Google Profil.',
          'Klarer Handlungsaufruf: Immer "Jetzt mit dem Smartphone scannen und bewerten" dazuschreiben.',
          'Hoher Kontrast: Weißer Hintergrund für schnellen Autofokus bei schwachem Licht.',
          'Mitarbeiter schulen: Das Team sollte Kunden freundlich auf den QR-Aufsteller hinweisen.',
          'Auf Rezensionen antworten: Beantworten Sie jede Bewertung für besseres Ranking.'
        ],
        technicalNotes: 'Kompatibel mit allen offiziellen g.page Google Maps Bewertungs-Links auf iOS und Android.',
        faqs: [
          { question: 'Wie erhalte ich meinen direkten Google Bewertungs-Link?', answer: 'Öffnen Sie Ihr Google Unternehmensprofil, klicken Sie auf "Um Rezensionen bitten" und kopieren Sie den Kurzlink (z. B. https://g.page/r/[ID]/review).' },
          { question: 'Benötigt der Kunde ein Google-Konto?', answer: 'Ja, Google verlangt ein kostenloses Google-Konto, um echte Bewertungen sicherzustellen.' },
          { question: 'Öffnet der QR-Code direkt die 5 Sterne?', answer: 'Ja, über den offiziellen Kurzlink öffnet sich sofort das Fenster mit den vorausgewählten Sternen.' },
          { question: 'Kann ich den QR-Code auf Quittungen drucken?', answer: 'Ja, laden Sie das PNG oder SVG herunter und binden Sie es in Ihr Kassensystem ein.' },
          { question: 'Laufen diese Bewertungs-Codes ab?', answer: 'Nein, sie sind dauerhaft gültig, solange Ihr Google Profil existiert.' },
          { question: 'Gibt es ein Limit für Bewertungen?', answer: 'Nein, Sie können unbegrenzt viele Bewertungen kostenlos sammeln.' }
        ],
        relatedTools: [
          { name: 'Weblink QR Generator', slug: 'url-to-qr-code', description: 'Besucher auf Ihre Website leiten.' },
          { name: 'WLAN QR Generator', slug: 'wifi-qr-code-generator', description: 'Gäste-WLAN ohne Passworteingabe.' },
          { name: 'Digitale Speisekarte', slug: 'restaurant-menu-qr-code', description: 'Kontaktlose Speisekarten für Tische.' },
          { name: 'vCard Visitenkarte', slug: 'vcard-qr-code-generator', description: 'Kontaktdaten im Telefonbuch speichern.' }
        ]
      };
    case 'fr':
      return {
        slug: 'google-reviews-qr-code',
        qrTypeId: 'review',
        title: 'Générateur de QR Code Avis Google — Collectez des Avis 5 Étoiles',
        description: 'Générez des QR codes pour avis Google Maps. Redirigez vos clients directement vers le formulaire d\'évaluation. Téléchargement SVG et PNG.',
        h1: 'Générateur de QR Code Avis Google',
        subheadline: 'Multipliez vos avis 5 étoiles sur Google Maps. Envoyez vos clients directement sur votre boîte d\'évaluation d\'un simple scan.',
        heading: 'QR Code pour Avis Google',
        subheading: 'Améliorez votre réputation en ligne et votre référencement local sur Google Maps.',
        overviewTitle: 'Qu\'est-ce qu\'un QR Code pour Avis Google ?',
        overviewParagraphs: [
          'Un QR code d\'avis Google dirige vos clients directement vers la fenêtre d\'évaluation de votre fiche Google Business. Au lieu de chercher manuellement votre établissement sur Google Maps, vos clients ouvrent instantanément le formulaire 5 étoiles.',
          'Les avis clients sont un pilier fondamental du référencement local. Faciliter la démarche au comptoir ou sur l\'addition multiplie le nombre d\'avis positifs reçus.',
          'Notre générateur est 100% gratuit et vous permet d\'exporter en SVG vectoriel pour vos supports en plexiglas et autocollants.'
        ],
        sectors: [
          { name: 'Restaurants & Brasseries', description: 'Sur les additions et porte-menus de table.', benefit: 'Recueille l\'avis du client dès la fin du repas.' },
          { name: 'Cabinets Médicaux & Dentaires', description: 'Au comptoir d\'accueil lors du départ du patient.', benefit: 'Renforce la confiance locale envers votre cabinet.' },
          { name: 'Garages & Réparation Auto', description: 'Sur les porte-clés lors de la restitution du véhicule.', benefit: 'Attire des automobilistes locaux via Google Maps.' },
          { name: 'Salons de Coiffure & Beauté', description: 'Collé discrètement sur les miroirs de coiffure.', benefit: 'Transforme la satisfaction en recommandations publiques.' },
          { name: 'Artisans & Travaux du Bâtiment', description: 'Sur cartes remises en main propre en fin de chantier.', benefit: 'Vous démarque des artisans concurrents du quartier.' },
          { name: 'Hôtels & Chambres d\'Hôtes', description: 'Sur les livrets d\'accueil et cartes de chambre.', benefit: 'Améliore votre classement touristique local.' }
        ],
        howItWorks: [
          { title: '1. Collez le Lien d\'Avis', description: 'Indiquez votre lien court Google Business (ex. https://g.page/r/.../review).' },
          { title: '2. Personnalisez l\'Affichage', description: 'Harmonisez les couleurs et intégrez le logo Google ou le vôtre.' },
          { title: '3. Imprimez pour le Comptoir', description: 'Exportez en SVG vectoriel ou PNG haute définition.' }
        ],
        useCases: [
          { title: 'Chevalets de Comptoir', description: 'Supports avec l\'appel "Donnez-nous votre avis sur Google".', example: 'Restaurant gagnant 50 avis par mois.' },
          { title: 'Tickets de Caisse', description: 'Imprimé au bas des reçus de paiement.', example: 'Boutique améliorant sa note moyenne à 4,8 étoiles.' },
          { title: 'Cartes de Fin de Prestation', description: 'Remises par les techniciens après intervention.', example: 'Plombier cumulant plus de 200 avis 5 étoiles.' },
          { title: 'Stickers sur Miroirs', description: 'Autocollants élégants dans les salons d\'esthétique.', example: 'Salon de beauté générant des avis réguliers.' }
        ],
        tips: [
          'Lien Court Officiel : Cliquez sur "Demander des avis" dans votre fiche Google Business pour l\'obtenir.',
          'Appel à l\'Action Clair : Mentionnez "Scannez avec votre appareil photo pour nous noter".',
          'Contraste Optimal : Fond blanc pour un scan rapide dans toutes les ambiances lumineuses.',
          'Sensibilisation d\'Équipe : Invitez vos serveurs ou caissiers à encourager le scan.',
          'Répondez aux Avis : Répondez à chaque avis pour dynamiser votre référencement local.'
        ],
        technicalNotes: 'Compatible avec les liens officiels g.page sur iOS et Android.',
        faqs: [
          { question: 'Comment obtenir mon lien d\'avis Google ?', answer: 'Ouvrez votre profil Google Business, cliquez sur le bouton "Demander des avis" et copiez le lien court (ex. https://g.page/r/[ID]/review).' },
          { question: 'Le client doit-il avoir un compte Google ?', answer: 'Oui, Google requiert une connexion à un compte Google pour authentifier les avis réels.' },
          { question: 'La fenêtre 5 étoiles s\'ouvre-t-elle directement ?', answer: 'Oui, le lien officiel ouvre immédiatement la fenêtre avec les 5 étoiles prêtes à être sélectionnées.' },
          { question: 'Puis-je l\'imprimer sur mes reçus ?', answer: 'Oui, téléchargez le PNG ou SVG et intégrez-le dans le logiciel de votre imprimante thermique de caisse.' },
          { question: 'Ces QR codes ont-ils une durée de validité limitée ?', answer: 'Non, ils sont valables à vie tant que votre fiche d\'établissement Google existe.' },
          { question: 'Y a-t-il une limite au nombre d\'avis ?', answer: 'Non, vous pouvez recevoir un nombre illimité d\'avis gratuitement.' }
        ],
        relatedTools: [
          { name: 'QR Code Lien Web', slug: 'url-to-qr-code', description: 'Redirigez vers votre site web.' },
          { name: 'QR Code WiFi', slug: 'wifi-qr-code-generator', description: 'Offrez le WiFi sans mot de passe.' },
          { name: 'QR Code Menu Restaurant', slug: 'restaurant-menu-qr-code', description: 'Menus digitaux sans contact.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Partagez vos coordonnées complètes.' }
        ]
      };
    case 'pt':
      return {
        slug: 'google-reviews-qr-code',
        qrTypeId: 'review',
        title: 'Gerador de QR Code Avaliações Google — Ganhe Mais Avaliações 5 Estrelas',
        description: 'Gere QR codes de avaliação do Google. Direcione seus clientes diretamente para a caixa de nota 5 estrelas. Download em SVG e PNG.',
        h1: 'Gerador de QR Code Avaliações Google',
        subheadline: 'Conquiste mais avaliações 5 estrelas no Google Maps. Direcione clientes satisfeitos para avaliar sua empresa com 1 scan.',
        heading: 'QR Code de Avaliações Google',
        subheading: 'Aumente sua reputação e melhore seu posicionamento nas buscas do Google Maps.',
        overviewTitle: 'O que é um QR Code de Avaliações Google?',
        overviewParagraphs: [
          'Um QR Code de avaliações do Google direciona seus clientes diretamente para a caixa de avaliação da sua ficha do Google Meu Negócio em um único scan, sem necessidade de procurar sua empresa no mapa.',
          'As avaliações de clientes são fundamentais para o ranqueamento local no Google Maps. Colocar o código no balcão ou nas notas de entrega facilita o feedback no momento de maior satisfação.',
          'Nossa ferramenta permite personalizar cores, adicionar seu logo e baixar em SVG vetorial para displays de acrílico e adesivos.'
        ],
        sectors: [
          { name: 'Restaurantes e Bares', description: 'Na conta ou no suporte de mesa na hora do pagamento.', benefit: 'Capta avaliações no encerramento da refeição.' },
          { name: 'Clínicas e Consultórios', description: 'Na recepção ao término da consulta médica.', benefit: 'Aumenta a autoridade e confiança de novos pacientes.' },
          { name: 'Oficinas e Mecânicas', description: 'No chaveiro na entrega do veículo revisado.', benefit: 'Atrai motoristas da região pelo Google Maps.' },
          { name: 'Salões de Beleza e Estética', description: 'Adesivado no espelho em frente à cliente.', benefit: 'Transforma elogios em avaliações públicas.' },
          { name: 'Prestadores de Serviços', description: 'Em cartões entregues após a conclusão da obra.', benefit: 'Destaque contra concorrentes locais.' },
          { name: 'Pousadas e Hotéis', description: 'No balcão de check-out e quartos.', benefit: 'Melhora o ranqueamento em buscas turísticas.' }
        ],
        howItWorks: [
          { title: '1. Cole seu Link de Avaliação', description: 'Insira seu link oficial do Google (ex.: https://g.page/r/.../review).' },
          { title: '2. Personalize o Display', description: 'Ajuste as cores e inclua o logo do Google ou da sua marca.' },
          { title: '3. Imprima para o Balcão', description: 'Baixe em SVG vetorial para gráficas ou PNG nítido.' }
        ],
        useCases: [
          { title: 'Displays de Balcão em Acrílico', description: 'Suportes ao lado da maquininha com "Avalie-nos no Google".', example: 'Restaurante ganhando 40 avaliações por mês.' },
          { title: 'Cupons Fiscais e Recibos', description: 'Impresso no rodapé do cupom da impressora térmica.', example: 'Loja melhorando sua nota de 4.2 para 4.8 estrelas.' },
          { title: 'Cartões de Entrega de Serviço', description: 'Entregues pelo técnico ao finalizar o atendimento.', example: 'Eletricista com mais de 150 avaliações 5 estrelas.' },
          { title: 'Adesivos em Espelhos', description: 'Adesivo discreto em salões de beleza e barbearias.', example: 'Barbearia recebendo avaliações semanais.' }
        ],
        tips: [
          'Link Curto Oficial: Use o botão "Pedir avaliações" no seu painel do Google Meu Negócio.',
          'Chamada Clara: Sempre inclua "Aponte a câmera do celular para avaliar no Google".',
          'Alto Contraste: Fundo branco garante leitura rápida com qualquer iluminação.',
          'Engaje a Equipe: Oriente seus atendentes a convidar os clientes a escanear.',
          'Responda a Todos os Comentários: Fortalece o algoritmo de busca local do Google.'
        ],
        technicalNotes: 'Totalmente compatível com links g.page no iOS e Android.',
        faqs: [
          { question: 'Como descubro meu link de avaliações do Google?', answer: 'Acesse seu perfil do Google Meu Negócio, clique em "Pedir avaliações" e copie o link curto (ex.: https://g.page/r/[SeuID]/review).' },
          { question: 'O cliente precisa ter conta no Google?', answer: 'Sim, o Google exige login em uma conta Google para validar que a avaliação é real.' },
          { question: 'Abre a caixa de 5 estrelas direto?', answer: 'Sim, o link oficial abre diretamente a janela com as 5 estrelas prontas para serem marcadas.' },
          { question: 'Posso imprimir na bobina térmica de recibo?', answer: 'Sim, baixe a imagem e insira no modelo do seu software de emissão de cupons.' },
          { question: 'Os códigos de avaliação expiram?', answer: 'Não, eles continuam funcionando permanentemente enquanto sua empresa estiver cadastrada no Google.' },
          { question: 'Há limite de avaliações recebidas?', answer: 'Não, você pode receber avaliações ilimitadas sem nenhum custo.' }
        ],
        relatedTools: [
          { name: 'QR Code Link URL', slug: 'url-to-qr-code', description: 'Direcione visitantes para seu site.' },
          { name: 'QR Code Wi-Fi', slug: 'wifi-qr-code-generator', description: 'Ofereça Wi-Fi sem senha para clientes.' },
          { name: 'Cardápio Digital QR', slug: 'restaurant-menu-qr-code', description: 'Cardápios sem contato para mesas.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Compartilhe contatos profissionais.' }
        ]
      };
    case 'it':
      return {
        slug: 'google-reviews-qr-code',
        qrTypeId: 'review',
        title: 'Generatore QR Code Recensioni Google — Ottieni più Recensioni a 5 Stelle',
        description: 'Genera codici QR per recensioni Google. Indirizza i clienti direttamente alla scheda di valutazione a 5 stelle. Download in SVG e PNG.',
        h1: 'Generatore QR Code Recensioni Google',
        subheadline: 'Ottieni più recensioni a 5 stelle su Google Maps. Invia i clienti soddisfatti direttamente alla schermata di voto con una sola scansione.',
        heading: 'QR Code per Recensioni Google',
        subheading: 'Migliora la tua reputazione online e scala le classifiche locali di Google Maps.',
        overviewTitle: 'Cos\'è un QR Code per Recensioni Google?',
        overviewParagraphs: [
          'Un codice QR per recensioni Google indirizza i clienti direttamente al modulo ufficiale di valutazione della tua scheda Google Business con un solo tocco, senza dover cercare manualmente il nome del locale su Google Maps.',
          'Le recensioni dei clienti sono decisive per il posizionamento nei risultati locali di Google. Facilitare il rilascio del feedback alla cassa o al tavolo moltiplica le recensioni a 5 stelle.',
          'Il nostro strumento è gratuito e consente di esportare in SVG vettoriale per espositori in plexiglas e adesivi.'
        ],
        sectors: [
          { name: 'Ristoranti & Pizzerie', description: 'Sul conto e sui portamenu al tavolo.', benefit: 'Raccoglie recensioni a fine pasto.' },
          { name: 'Studi Medici & Dentistici', description: 'Sul bancone della reception al momento del saluto.', benefit: 'Aumenta la fiducia di nuovi pazienti in zona.' },
          { name: 'Officine & Carrozzerie', description: 'Sul portachiavi alla riconsegna dell\'auto.', benefit: 'Attira automobilisti locali su Google Maps.' },
          { name: 'Saloni di Bellezza & Parrucchieri', description: 'Incollato discretamente sugli specchi.', benefit: 'Trasforma la soddisfazione in passaparola online.' },
          { name: 'Artigiani & Pronto Intervento', description: 'Su cartoline consegnate dopo l\'intervento.', benefit: 'Distingue l\'attività dalla concorrenza locale.' },
          { name: 'Hotel & Agriturismi', description: 'Al banco check-out e nelle camere.', benefit: 'Migliora la visibilità nelle ricerche turistiche.' }
        ],
        howItWorks: [
          { title: '1. Incolla il Link di Recensione', description: 'Inserisci il tuo link breve Google Business (es. https://g.page/r/.../review).' },
          { title: '2. Personalizza la Grafica', description: 'Scegli i colori e aggiungi il logo Google o della tua attività.' },
          { title: '3. Stampa per il Bancone', description: 'Esporta in SVG vettoriale per tipografia o PNG ad alta risoluzione.' }
        ],
        useCases: [
          { title: 'Espositori sul Bancone Cassa', description: 'Supporti in plexiglas con "Lascia una recensione su Google".', example: 'Ristorante che ottiene 45 recensioni al mese.' },
          { title: 'Scontrini Fiscali', description: 'Stampato nel piè di pagina della ricevuta di cassa.', example: 'Negozio che passa da 4.1 a 4.8 stelle.' },
          { title: 'Cartoline di Consegna Lavori', description: 'Consegnate dal tecnico a lavoro ultimato.', example: 'Idraulico con oltre 180 recensioni a 5 stelle.' },
          { title: 'Adesivi su Specchi', description: 'Adesivo elegante nel campo visivo del cliente.', example: 'Salone con recensioni costanti ogni settimana.' }
        ],
        tips: [
          'Link Breve Diretto: Usa il pulsante "Chiedi recensioni" nel pannello Google Business.',
          'Invito Chiaro: Inserisci sempre "Inquadra con la fotocamera per votare su Google".',
          'Contrasto Elevato: Sfondo bianco per una lettura rapida con qualsiasi luce.',
          'Formazione del Personale: Invita i collaboratori a ricordare l\'espositore al cliente.',
          'Rispondi a Tutte le Recensioni: Favorisce l\'algoritmo di posizionamento locale.'
        ],
        technicalNotes: 'Compatibile con tutti i link ufficiali g.page su iOS e Android.',
        faqs: [
          { question: 'Come trovo il mio link diretto per le recensioni Google?', answer: 'Accedi al profilo Google Business, clicca sul pulsante "Chiedi recensioni" e copia il link breve (es. https://g.page/r/[ID]/review).' },
          { question: 'Il cliente deve avere un account Google?', answer: 'Sì, Google richiede l\'accesso a un account Google per garantire recensioni autentiche.' },
          { question: 'Si apre direttamente la schermata con le 5 stelle?', answer: 'Sì, il link ufficiale apre subito il modulo con le 5 stelle pronte da cliccare.' },
          { question: 'Posso stamparlo sugli scontrini di cassa?', answer: 'Sì, scarica il formato PNG o SVG e inseriscilo nel layout della tua stampante termica.' },
          { question: 'I codici QR per recensioni hanno una scadenza?', answer: 'No, restano validi per sempre finché la scheda Google della tua attività è attiva.' },
          { question: 'C\'è un limite alle recensioni che posso raccogliere?', answer: 'No, puoi ricevere recensioni illimitate senza alcun costo.' }
        ],
        relatedTools: [
          { name: 'QR Code Link Web', slug: 'url-to-qr-code', description: 'Indirizza al tuo sito web.' },
          { name: 'QR Code WiFi', slug: 'wifi-qr-code-generator', description: 'Offri il WiFi senza password.' },
          { name: 'Menu Digitale Ristorante', slug: 'restaurant-menu-qr-code', description: 'Menu contactless per tavoli.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Condividi contatti professionali.' }
        ]
      };
    case 'hi':
      return {
        slug: 'google-reviews-qr-code',
        qrTypeId: 'review',
        title: 'गूगल रिव्यू QR कोड जेनरेटर — ग्राहकों से 5-स्टार गूगल रेटिंग पाएं',
        description: 'गूगल बिजनेस रिव्यू QR कोड बनाएं। ग्राहकों को एक स्कैन में सीधे 5-स्टार रेटिंग विंडो पर भेजें। वेक्टर SVG और PNG मुफ़्त डाउनलोड।',
        h1: 'गूगल रिव्यू QR कोड जेनरेटर',
        subheadline: 'Google Maps पर अधिक 5-स्टार रेटिंग और समीक्षाएं प्राप्त करें। ग्राहकों को एक स्कैन में सीधे रिव्यू बॉक्स पर भेजें।',
        heading: 'गूगल रिव्यू QR कोड',
        subheading: 'ग्राहकों का फ़ीडबैक बढ़ाएं और Google Maps पर अपनी लोकल रैंकिंग को शीर्ष पर ले जाएं।',
        overviewTitle: 'गूगल रिव्यू QR कोड क्या है?',
        overviewParagraphs: [
          'गूगल रिव्यू QR कोड संतुष्ट ग्राहकों को सीधे आपकी गूगल बिजनेस प्रोफाइल (Google My Business) के आधिकारिक रिव्यू फॉर्म पर ले जाता है। ग्राहकों को गूगल मैप्स पर आपकी दुकान या क्लिनिक का नाम खोजने की आवश्यकता नहीं होती; कोड स्कैन करते ही 5-स्टार रेटिंग विंडो सीधे खुल जाती है।',
          'Google Maps और लोकल सर्च में शीर्ष पर आने के लिए 5-स्टार कस्टमर रेटिंग सबसे महत्वपूर्ण कारक है। बिलिंग काउंटर या टेबल स्टैंड पर यह कोड लगाने से ग्राहक सेवा समाप्त होते ही आसानी से रेटिंग दे देते हैं।',
          'हमारा जेनरेटर पूरी तरह मुफ़्त है। आप काउंटर स्टैंडी के लिए हाई-क्वालिटी SVG या PNG फ़ाइल डाउनलोड कर सकते हैं।'
        ],
        sectors: [
          { name: 'रेस्तरां व कैफ़े', description: 'खाने के बिल और टेबल स्टैंड पर लगाएं ताकि ग्राहक भोजन के तुरंत बाद रिव्यू दें।', benefit: 'हर महीने दर्जनों नई 5-स्टार रेटिंग प्राप्त होती हैं।' },
          { name: 'डेंटल क्लीनिक व अस्पताल', description: 'रिसेप्शन काउंटर पर इलाज पूरा होने के बाद स्कैन कराने हेतु।', benefit: 'इलाके के नए मरीजों में भरोसा बढ़ाता है।' },
          { name: 'कार व बाइक गैरेज', description: 'गाड़ी डिलीवरी के समय बिल रसीद पर जोड़ें।', benefit: 'Google Maps पर स्थानीय ग्राहकों को आकर्षित करता है।' },
          { name: 'सैलून, स्पा व पार्लर', description: 'ड्रेसिंग शीशे पर छोटा सा स्टीकर लगाएं।', benefit: 'ग्राहकों की खुशी को पब्लिक रेटिंग में बदलता है।' },
          { name: 'इलेक्ट्रीशियन व प्लंबर', description: 'काम पूरा होने के बाद ग्राहक को दिए जाने वाले विज़िटिंग कार्ड पर।', benefit: 'आस-पास के प्रतिस्पर्धियों से आगे निकलने में मदद।' },
          { name: 'होटल व रिसॉर्ट्स', description: 'चेक-आउट काउंटर और कमरों में रखें।', benefit: 'सैलानियों की खोज में होटल की रैंकिंग सुधारता है।' }
        ],
        howItWorks: [
          { title: '1. गूगल रिव्यू लिंक दर्ज करें', description: 'अपनी गूगल बिजनेस प्रोफाइल से रिव्यू लिंक (जैसे https://g.page/r/.../review) पेस्ट करें।' },
          { title: '2. डिज़ाइन कस्टमाइज़ करें', description: 'रंग चुनें और गूगल का लोगो या अपनी दुकान का लोगो लगाएं।' },
          { title: '3. डाउनलोड व प्रिंट करें', description: 'काउंटर पर लगाने के लिए वेक्टर SVG या हाई-रिज़ॉल्यूशन PNG डाउनलोड करें।' }
        ],
        useCases: [
          { title: 'बिलिंग काउंटर स्टैंडी', description: '"हमें गूगल पर 5-स्टार दें" लिखा हुआ एक्रिलिक स्टैंड।', example: 'दुकान पर हर महीने 50+ नए रिव्यू।' },
          { title: 'बिल व पेमेंट रसीद', description: 'कैश रसीद के नीचे प्रिंट किया गया रिव्यू कोड।', example: 'रेस्तरां की रेटिंग 4.1 से बढ़कर 4.8 हुई।' },
          { title: 'सर्विस हैंडओवर कार्ड', description: 'कारीगर द्वारा काम ख़त्म होने पर दिया गया कार्ड।', example: 'टेक्नीशियन द्वारा 150 से अधिक 5-स्टार रेटिंग।' },
          { title: 'सैलून मिरर स्टीकर', description: 'शीशे के कोने पर लगा सुंदर विनाइल स्टीकर।', example: 'सैलून में नियमित साप्ताहिक रिव्यू।' }
        ],
        tips: [
          'डायरेक्ट शॉर्ट लिंक: गूगल बिजनेस प्रोफाइल में "Ask for reviews" बटन से लिंक प्राप्त करें।',
          'स्पष्ट निर्देश लिखें: स्टैंड पर "अपने फोन के कैमरे से स्कैन करके हमें गूगल पर रेट करें" लिखें।',
          'हाई कंट्रास्ट: सफ़ेद बैकग्राउंड पर गहरे रंग के डॉट्स रखें।',
          'कर्मचारियों को प्रेरित करें: स्टाफ को ग्राहकों से स्कैन करने का आग्रह करने को कहें।',
          'हर रिव्यू का उत्तर दें: गूगल पर सभी समीक्षाओं का जवाब देने से रैंकिंग बेहतर होती है।'
        ],
        technicalNotes: 'आधिकारिक g.page Google Maps रिव्यू लिंक प्रोटोकॉल के साथ पूरी तरह संगत।',
        faqs: [
          { question: 'गूगल रिव्यू का सीधा लिंक कैसे निकालें?', answer: 'अपनी Google Business Profile खोलें, "Ask for reviews" पर क्लिक करें और शॉर्ट लिंक (जैसे https://g.page/r/[ID]/review) कॉपी करें।' },
          { question: 'क्या ग्राहक के पास गूगल अकाउंट होना ज़रूरी है?', answer: 'हाँ, असली रिव्यू की पुष्टि के लिए गूगल में लॉग-इन होना आवश्यक होता है।' },
          { question: 'क्या स्कैन करते ही सीधे 5-स्टार विंडो खुलती है?', answer: 'हाँ, आधिकारिक लिंक से सीधे 5 स्टार चुनने वाली विंडो खुल जाती है।' },
          { question: 'क्या मैं इसे अपने बिलिंग प्रिंटर से निकाल सकता हूँ?', answer: 'हाँ, PNG फ़ाइल को अपने बिलिंग सॉफ़्टवेयर में जोड़कर रसीद पर प्रिंट कर सकते हैं।' },
          { question: 'क्या यह रिव्यू QR कोड कभी एक्सपायर होता है?', answer: 'नहीं, जब तक आपकी गूगल बिजनेस लिस्टिंग सक्रिय है, यह हमेशा काम करेगा।' },
          { question: 'क्या रिव्यू की कोई सीमा है?', answer: 'नहीं, आप बिना किसी शुल्क के असीमित संख्या में रिव्यू प्राप्त कर सकते हैं।' }
        ],
        relatedTools: [
          { name: 'वेबसाइट URL QR जेनरेटर', slug: 'url-to-qr-code', description: 'ग्राहकों को अपनी वेबसाइट पर भेजें।' },
          { name: 'Wi-Fi QR जेनरेटर', slug: 'wifi-qr-code-generator', description: 'बिना पासवर्ड के वाई-फ़ाई कनेक्टिविटी दें।' },
          { name: 'रेस्टोरेंट मेन्यू QR कोड', slug: 'restaurant-menu-qr-code', description: 'टेबलों के लिए डिजिटल मेन्यू।' },
          { name: 'vCard विज़िटिंग कार्ड QR', slug: 'vcard-qr-code-generator', description: 'संपर्क विवरण सीधे फोन में सेव कराएं।' }
        ]
      };
    default: // 'en'
      return {
        slug: 'google-reviews-qr-code',
        qrTypeId: 'review',
        title: 'Google Reviews QR Code Generator — Get More 5-Star Customer Reviews',
        description: 'Generate custom Google Reviews QR codes. Direct customers straight to your Google Business review box with one camera scan. Free vector SVG & PNG.',
        h1: 'Google Reviews QR Code Generator',
        subheadline: 'Get more 5-star customer reviews on Google Maps. Send happy customers directly to your review rating box in a single scan.',
        heading: 'Google Reviews QR Code',
        subheading: 'Streamline customer feedback and boost your Google Maps local SEO ranking.',
        overviewTitle: 'What is a Google Reviews QR Code?',
        overviewParagraphs: [
          'A Google Reviews QR code directs satisfied customers straight to your Google Business Profile\'s official review form with a single smartphone camera scan. Instead of asking customers to manually open Google Maps, search for your business name, navigate through profile tabs, and locate the "Write a review" button, a dedicated review QR code launches the 5-star rating window immediately.',
          'Online customer reviews are among the most influential local SEO ranking factors for Google Local Pack and Google Maps search results. Increasing your review volume, average star rating, and review frequency builds immediate trust with nearby consumers searching for local services. Physical point-of-sale review QR codes eliminate review friction when customer satisfaction is highest—immediately following a meal, service, checkout, or appointment.',
          'Our free generator creates crisp, high-resolution Google Reviews QR codes with custom styling, brand colors, and central logo placement. Export print-ready Vector SVG files for counter standees, table tents, mirror decals, and packaging slips.'
        ],
        sectors: [
          { name: 'Restaurants, Bars & Cafes', description: 'Printed on dining check presentation folders and table tents.', benefit: 'Captures authentic reviews immediately following the meal.' },
          { name: 'Dental & Medical Practices', description: 'Displayed on front-desk checkout counters upon appointment completion.', benefit: 'Builds local trust and reputation for prospective patients.' },
          { name: 'Auto Repair & Mechanics', description: 'Attached to keychains and invoice clipboards when returning vehicle keys.', benefit: 'Drives high-intent local vehicle owners on Google Maps.' },
          { name: 'Hair Salons & Spas', description: 'Placed discreetly on styling mirror stations where clients admire results.', benefit: 'Converts client satisfaction into public recommendations.' },
          { name: 'Home Trade Services (HVAC, Plumbing)', description: 'Handed to homeowners on leave-behind completion cards.', benefit: 'Outranks local competitors in neighborhood search.' },
          { name: 'Boutique Hotels & B&Bs', description: 'Displayed on room key cards and bedside nightstand menus.', benefit: 'Improves placement in local travel and lodging searches.' }
        ],
        howItWorks: [
          { title: '1. Paste Google Review Link', description: 'Input your official Google Business short review URL (e.g., https://g.page/r/.../review).' },
          { title: '2. Customize Display Standee', description: 'Match corporate colors and embed your logo or the official Google Star badge.' },
          { title: '3. Print for Front Counter', description: 'Export print-ready Vector SVG or high-DPI PNG for acrylic tabletop signs.' }
        ],
        useCases: [
          { title: 'Checkout Counter Acrylics', description: 'Tabletop stands positioned next to payment terminals inviting customers to rate.', example: 'Cafe generating 50+ monthly 5-star reviews.' },
          { title: 'POS Thermal Receipts', description: 'Printed at the bottom of register receipts for customer feedback.', example: 'Restaurant improving average rating from 4.2 to 4.8 stars.' },
          { title: 'Job Completion Cards', description: 'Handed directly to homeowners by field service technicians.', example: 'HVAC repair company collecting 200+ local reviews.' },
          { title: 'Mirror Decals in Salons', description: 'Subtle high-contrast decals placed at eye level on stylist stations.', example: 'Hair salon establishing regular review momentum.' }
        ],
        tips: [
          'Direct Review Deep Link: Always use the official "Ask for reviews" link from your Google Business Profile dashboard.',
          'Clear Call-to-Action: Always include clear wording like "Scan with your phone camera to review us on Google".',
          'High Optical Contrast: Maintain clean dark modules on a white background for fast scanning in dim lighting.',
          'Staff Training: Train front-of-house staff to politely invite happy customers to scan the counter stand.',
          'Reply to Every Review: Actively replying to all customer feedback further enhances your local SEO rankings.'
        ],
        technicalNotes: 'Standards Compliance: Fully compatible with official g.page short URLs and Google Maps profiles on iOS and Android.',
        faqs: [
          { question: 'How do I find my direct Google Business review link?', answer: 'Go to your Google Business Profile manager dashboard, click the "Ask for reviews" button, and copy your unique short URL (for example, https://g.page/r/[YourBusinessID]/review).' },
          { question: 'Does the customer need a Google account to leave a review?', answer: 'Yes. Google requires users to be logged into a Google account to verify review authenticity and prevent fraudulent spam.' },
          { question: 'Does the QR code open the 5-star rating window directly?', answer: 'Yes! Using your official Google review short link launches the review popup immediately with the 5-star selector pre-opened on screen.' },
          { question: 'Can I print this review QR code on POS receipt paper?', answer: 'Yes. Download the high-resolution PNG or SVG and integrate the graphic into your thermal receipt printer template.' },
          { question: 'Do Google Review QR codes ever expire?', answer: 'No. Static QR codes encode the destination URL permanently and will remain active as long as your Google Business listing is live.' },
          { question: 'Is there a limit on how many reviews I can collect?', answer: 'No! There are zero limits on scans or reviews. You can collect unlimited customer feedback for free.' }
        ],
        relatedTools: [
          { name: 'URL QR Generator', slug: 'url-to-qr-code', description: 'Direct traffic to your website, blog, or booking form.' },
          { name: 'Wi-Fi QR Generator', slug: 'wifi-qr-code-generator', description: 'Offer frictionless guest Wi-Fi in your cafe or waiting room.' },
          { name: 'Digital Menu QR', slug: 'restaurant-menu-qr-code', description: 'Create contactless mobile dining menus for restaurant tables.' },
          { name: 'vCard QR Generator', slug: 'vcard-qr-code-generator', description: 'Share merchant and concierge contact cards with visitors.' }
        ]
      };
  }
}
