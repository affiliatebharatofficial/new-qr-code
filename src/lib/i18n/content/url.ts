import type { Locale } from '../config';
import type { LocalizedPageContent } from './types';

export function getUrlContent(locale: Locale): LocalizedPageContent {
  switch (locale) {
    case 'es':
      return {
        slug: 'url-to-qr-code',
        qrTypeId: 'url',
        title: 'Generador de Código QR para URL — Convertir Enlace Web a QR',
        description: 'Convierte enlaces web, tiendas online y páginas de destino en códigos QR de alta resolución. Descarga gratis en vector SVG y PNG.',
        h1: 'Generador de Código QR para URL',
        subheadline: 'Crea códigos QR nítidos que dirigen a tus clientes directamente a tu sitio web, tienda online o página de aterrizaje.',
        heading: 'Código QR de Enlace Web',
        subheading: 'Convierte enlaces digitales en puntos de contacto físicos escaneables para publicidad y embalajes.',
        overviewTitle: '¿Qué es un Generador de Código QR para URL?',
        overviewParagraphs: [
          'Un generador de código QR para URL convierte cualquier dirección web, tienda online, publicación de blog o catálogo digital en un código de barras bidimensional. Al escanearlo con la cámara del móvil, el navegador abre el enlace de inmediato sin necesidad de teclear direcciones largas.',
          'Los códigos QR de URL estáticos almacenan el enlace directamente en su matriz de módulos, funcionando de manera permanente y sin cuotas periódicas. Son la solución ideal para folletos, etiquetas de producto, vallas publicitarias y tarjetas de visita.',
          'Nuestra herramienta te permite personalizar colores corporativos, formas de puntos y añadir el logotipo de tu marca con corrección de errores de nivel Alto (H) y descarga vectorial en SVG.'
        ],
        sectors: [
          { name: 'Comercio y Tiendas Online', description: 'Imprime en paquetes de envío y etiquetas para compras recurrentes.', benefit: 'Convierte compradores físicos en clientes web recurrentes.' },
          { name: 'Hostelería y Restaurantes', description: 'Enlaza menús digitales, reservas online y cartas de vinos.', benefit: 'Ahorro en costes de impresión de cartas de papel.' },
          { name: 'Inmobiliarias', description: 'Coloca códigos en carteles de venta con enlaces a visitas virtuales 3D.', benefit: 'Capta el interés de compradores que pasan por la calle.' },
          { name: 'Eventos y Congresos', description: 'Añade enlaces en acreditaciones para descargar ponencias.', benefit: 'Alta interacción sin repartir pesados folletos.' },
          { name: 'Consultores y Servicios', description: 'Incluye enlaces a dosieres y casos de éxito en presentaciones.', benefit: 'Muestra testimonios y portfolio en un segundo.' },
          { name: 'Editorial y Educación', description: 'Inserta enlaces en libros impresos hacia vídeos explicativos.', benefit: 'Conecta papel físico con contenido multimedia.' }
        ],
        howItWorks: [
          { title: '1. Pega tu Enlace Web', description: 'Introduce la URL completa con https:// o http:// (ej. https://tuempresa.com).' },
          { title: '2. Personaliza Colores y Logo', description: 'Ajusta tu paleta corporativa y añade el logo de tu empresa.' },
          { title: '3. Descarga en SVG o PNG', description: 'Exporta en SVG vectorial para imprenta o PNG para medios digitales.' }
        ],
        useCases: [
          { title: 'Embalajes de Producto', description: 'Impreso en cajas de productos para guías de uso.', example: 'Marca de cosméticos con tutorial de uso.' },
          { title: 'Publicidad en Buzoneo', description: 'Folletos con cupones de descuento aplicados automáticamente.', example: 'Empresa local de reformas.' },
          { title: 'Stands de Feria', description: 'Lonas enrollables para solicitar demostraciones de producto.', example: 'Software B2B en congreso tecnológico.' },
          { title: 'Rotulación de Vehículos', description: 'Códigos en furgonetas de reparto para peatones en semáforos.', example: 'Empresa de catering con enlace a pedidos.' }
        ],
        tips: [
          'Incluye el Protocolo: Asegúrate de que comience por https:// o http://.',
          'URLs Cortas: Enlaces más cortos producen códigos con puntos más grandes y fáciles de leer.',
          'Alto Contraste: Módulos oscuros sobre fondo blanco garantizan enfoque instantáneo.',
          'Tamaño de Impresión: Mínimo 20 x 20 mm para tarjetas y flyers de mano.',
          'Prueba en Varios Móviles: Comprueba el escaneo antes de imprimir grandes tiradas.'
        ],
        technicalNotes: 'Estándar ISO/IEC 18004 con corrección de errores Reed-Solomon.',
        faqs: [
          { question: '¿Cómo convertir un enlace web en código QR?', answer: 'Introduce tu URL en el campo superior, personaliza el diseño y haz clic en Descargar SVG o PNG.' },
          { question: '¿Caducan los códigos QR de URL estáticos?', answer: 'No, no caducan nunca y funcionarán mientras tu página web esté activa.' },
          { question: '¿Puedo cambiar la URL después de imprimir?', answer: 'En códigos estáticos no es posible; para cambiar enlaces impresos utiliza nuestra opción de QR Dinámico.' },
          { question: '¿Cuál es el mejor formato para imprimir?', answer: 'El formato vectorial SVG es el estándar profesional porque no pierde calidad a ningún tamaño.' },
          { question: '¿Puedo poner mi logotipo en el centro?', answer: 'Sí, sube tu imagen y el generador aplicará corrección de errores nivel H automáticamente.' },
          { question: '¿Por qué mi código QR tiene puntos muy pequeños?', answer: 'Las direcciones web muy largas generan códigos más densos. Utilizar un enlace más corto lo simplifica.' }
        ],
        relatedTools: [
          { name: 'QR de WiFi', slug: 'wifi-qr-code-generator', description: 'Conecta a clientes a tu red sin teclear contraseñas.' },
          { name: 'QR de Contacto vCard', slug: 'vcard-qr-code-generator', description: 'Comparte teléfonos y correos en un toque.' },
          { name: 'QR de Reseñas de Google', slug: 'google-reviews-qr-code', description: 'Consigue más valoraciones de 5 estrellas.' },
          { name: 'QR de WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Inicia chats directos con clientes.' }
        ]
      };
    case 'de':
      return {
        slug: 'url-to-qr-code',
        qrTypeId: 'url',
        title: 'URL zu QR Code Generator — Webseiten-Link in QR-Code umwandeln',
        description: 'Webseiten-Links, Onlineshops und Landingpages kostenlos in hochauflösende QR-Codes umwandeln. Vektor-SVG & PNG Download.',
        h1: 'URL zu QR Code Generator',
        subheadline: 'Erstellen Sie gestochen scharfe QR-Codes, die Kunden direkt auf Ihre Website, Ihren Shop oder Ihre Landingpage führen.',
        heading: 'Webseiten-URL-QR-Code',
        subheading: 'Verbinden Sie Printmedien und Verpackungen nahtlos mit Ihren digitalen Webangeboten.',
        overviewTitle: 'Was ist ein URL zu QR Code Generator?',
        overviewParagraphs: [
          'Ein URL zu QR Code Generator wandelt Webadressen, Onlineshops, Blogbeiträge und Online-Kataloge in optische 2D-Barcodes um. Beim Scannen mit der Smartphone-Kamera öffnet sich die Zielseite sofort im mobilen Browser, ohne dass lange Links eingetippt werden müssen.',
          'Statische URL-QR-Codes speichern die Webadresse direkt in der Pixelmatrix und bleiben dauerhaft ohne laufende Kosten gültig. Sie eignen sich ideal für Produktverpackungen, Visitenkarten, Plakate und Broschüren.',
          'Unser Browser-Tool bietet individuelle Farbanpassungen, Punktmuster und die Integration Ihres Firmenlogos bei hoher Fehlerkorrektur (Stufe H) sowie Vektor-SVG-Export für professionelle Druckereien.'
        ],
        sectors: [
          { name: 'E-Commerce & Einzelhandel', description: 'Druck auf Verpackungen für einfache Nachbestellungen.', benefit: 'Verwandelt Offline-Käufer in wiederkehrende Online-Kunden.' },
          { name: 'Gastronomie & Restaurants', description: 'Verlinkung zu digitalen Speisekarten und Tischreservierungen.', benefit: 'Spart Druckkosten für physische Speisekarten.' },
          { name: 'Immobilienmakler', description: 'QR-Codes auf Verkaufsschildern für 3D-Rundgänge.', benefit: 'Erreicht Interessenten direkt vor dem Objekt.' },
          { name: 'Messen & Kongresse', description: 'Direkte Download-Links für Vortragsfolien auf Namensschildern.', benefit: 'Hohe Interaktionsrate ohne schwere Druckunterlagen.' },
          { name: 'Dienstleister & Berater', description: 'Links zu Portfolio und Kundenreferenzen auf Angeboten.', benefit: 'Überzeugt Neukunden mit sofortigen Arbeitsbeispielen.' },
          { name: 'Verlage & Bildung', description: 'Verweise in Fachbüchern auf interaktive Übungen.', benefit: 'Verbindet Printwerke mit Online-Inhalten.' }
        ],
        howItWorks: [
          { title: '1. Webadresse Eingeben', description: 'Geben Sie die vollständige URL mit https:// ein (z. B. https://ihrefirma.de).' },
          { title: '2. Design Anpassen', description: 'Wählen Sie Unternehmensfarben und laden Sie Ihr Firmenlogo hoch.' },
          { title: '3. SVG oder PNG Exportieren', description: 'Laden Sie die Datei für Drucksachen als Vektor-SVG herunter.' }
        ],
        useCases: [
          { title: 'Produktverpackungen', description: 'Gedruckt auf Produktkartons für Videoanleitungen.', example: 'Elektronikhersteller mit Setup-Video.' },
          { title: 'Direktwerbung & Flyer', description: 'Postwurfsendungen mit automatischen Rabattcodes.', example: 'Handwerksbetrieb mit Online-Terminbuchung.' },
          { title: 'Messe-Roll-ups', description: 'Großbanner zur Erfassung von Messekontakten.', example: 'Softwareanbieter mit Live-Demo-Link.' },
          { title: 'Fahrzeugbeschriftung', description: 'Aufdruck auf Transportern für interessierte Passanten.', example: 'Catering-Unternehmen mit Menü-Link.' }
        ],
        tips: [
          'Protokoll angeben: Immer https:// oder http:// voranstellen.',
          'Kurze URLs bevorzugen: Kürzere Adressen ergeben ein gröberes, noch schneller lesbares Punktmuster.',
          'Starker Kontrast: Dunkle Muster auf weißem Hintergrund scannen am zuverlässigsten.',
          'Mindestgröße: Mindestens 20 x 20 mm für Handzettel und Visitenkarten.',
          'Kameratest vor Druck: Vor größeren Druckauflagen immer auf mehreren Smartphones testen.'
        ],
        technicalNotes: 'ISO/IEC 18004 Standard mit einstellbarer Reed-Solomon-Fehlerkorrektur.',
        faqs: [
          { question: 'Wie erstelle ich einen QR-Code für eine Website?', answer: 'URL oben eingeben, Design anpassen und als SVG oder PNG herunterladen.' },
          { question: 'Laufen statische Weblink-QR-Codes ab?', answer: 'Nein, statische Codes sind dauerhaft gültig, solange die Zielseite online ist.' },
          { question: 'Kann ich die Ziel-URL nach dem Drucken ändern?', answer: 'Bei statischen Codes nicht. Verwenden Sie für spätere Änderungen dynamische QR-Codes.' },
          { question: 'Welches Dateiformat eignet sich für den Druck?', answer: 'Vektor-SVG ist der Industriestandard für gestochen scharfen Druck ohne Qualitätsverlust.' },
          { question: 'Kann ich mein Logo im QR-Code einfügen?', answer: 'Ja, unser Tool zentriert das Logo und schaltet die Fehlerkorrektur automatisch auf Stufe H.' },
          { question: 'Warum sind die Punkte in meinem Code so klein?', answer: 'Sehr lange Links erzeugen eine dichte Matrix. Kürzere URLs machen die Punkte größer.' }
        ],
        relatedTools: [
          { name: 'WLAN QR Generator', slug: 'wifi-qr-code-generator', description: 'Gäste ohne Passworteingabe ins WLAN bringen.' },
          { name: 'vCard Visitenkarte', slug: 'vcard-qr-code-generator', description: 'Vollständige Kontaktdaten direkt teilen.' },
          { name: 'Google Bewertungen QR', slug: 'google-reviews-qr-code', description: 'Mehr 5-Sterne-Bewertungen auf Google erzielen.' },
          { name: 'WhatsApp QR Code', slug: 'whatsapp-qr-code-generator', description: 'Direkte Kundenchats auf WhatsApp starten.' }
        ]
      };
    case 'fr':
      return {
        slug: 'url-to-qr-code',
        qrTypeId: 'url',
        title: 'Générateur de QR Code URL — Convertir un Lien Web en QR Code',
        description: 'Convertissez vos liens de sites, boutiques et pages d\'atterrissage en QR codes haute résolution. Téléchargement gratuit en SVG et PNG.',
        h1: 'Générateur de QR Code URL',
        subheadline: 'Créez des QR codes nets qui redirigent vos clients directement vers votre site web ou boutique en ligne.',
        heading: 'QR Code de Lien Web',
        subheading: 'Connectez vos supports imprimés et emballages directement à vos plateformes en ligne.',
        overviewTitle: 'Qu\'est-ce qu\'un Générateur de QR Code URL ?',
        overviewParagraphs: [
          'Un générateur de QR code URL convertit n\'importe quelle adresse web, boutique en ligne, article de blog ou catalogue digital en un code-barres 2D haute densité. En scannant le code avec l\'appareil photo de son smartphone, l\'utilisateur ouvre directement la page sans devoir saisir de liens fastidieux.',
          'Les QR codes d\'URL statiques encodent directement l\'adresse dans leur matrice de points, restant valables à vie sans aucun abonnement ni frais récurrents. C\'est la solution de référence pour les emballages, dépliants, affiches et cartes de visite.',
          'Notre plateforme vous permet de personnaliser les couleurs, les formes de modules et d\'intégrer votre logo d\'entreprise avec une correction d\'erreur maximale (Niveau H) et un export vectoriel SVG pour l\'imprimerie.'
        ],
        sectors: [
          { name: 'E-commerce & Vente en Magasin', description: 'Impression sur colis et étiquettes pour encourager les réapprovisionnements.', benefit: 'Transforme les acheteurs physiques en clients récurrents.' },
          { name: 'Restauration & Cafés', description: 'Liens vers menus digitaux, réservations et cartes des vins.', benefit: 'Élimine les coûts de réimpression des menus papier.' },
          { name: 'Agences Immobilières', description: 'Sur panneaux de vente pour proposer des visites virtuelles 3D.', benefit: 'Capte l\'attention des passants directement devant le bien.' },
          { name: 'Événements & Salons', description: 'Sur badges et programmes pour télécharger les présentations.', benefit: 'Engagement maximal sans distribuer de lourds dossiers papier.' },
          { name: 'Services & Consultants', description: 'Sur devis et plaquettes pour présenter les réalisations.', benefit: 'Apporte des preuves concrètes en un instant.' },
          { name: 'Édition & Enseignement', description: 'Dans les manuels pour accéder à des tutoriels vidéo.', benefit: 'Relie le support papier aux contenus multimédias.' }
        ],
        howItWorks: [
          { title: '1. Collez l\'Adresse Web', description: 'Indiquez l\'URL complète avec https:// ou http:// (ex. https://votresite.fr).' },
          { title: '2. Personnalisez Graphisme & Logo', description: 'Harmonisez les couleurs et intégrez le logo de votre marque.' },
          { title: '3. Téléchargez en SVG ou PNG', description: 'Exportez en SVG vectoriel pour imprimeur ou PNG pour écrans.' }
        ],
        useCases: [
          { title: 'Emballages et Colis', description: 'Imprimé sur les boîtes pour consulter les guides d\'installation.', example: 'Marque de cosmétiques proposant un tutoriel.' },
          { title: 'Flyers et Boîtes aux Lettres', description: 'Prospectus avec code promo appliqué automatiquement au panier.', example: 'Entreprise de rénovation locale.' },
          { title: 'Kakémonos de Salons', description: 'Bannières pour demander des démonstrations en direct.', example: 'Éditeur de logiciels B2B en congrès.' },
          { title: 'Flocage de Véhicules', description: 'Sur camionnettes pour les piétons et automobilistes à l\'arrêt.', example: 'Service traiteur facilitant les commandes.' }
        ],
        tips: [
          'Protocole Obligatoire : Vérifiez que l\'adresse commence bien par https:// ou http://.',
          'Liens Courts Privilégiés : Une URL plus courte génère des points plus larges et plus faciles à scanner.',
          'Contraste Élevé : Modules foncés sur fond clair pour une mise au point immédiate.',
          'Taille Minimale : Au moins 20 x 20 mm pour les cartes de visite et prospectus.',
          'Test Multi-Appareils : Testez l\'impression sur plusieurs téléphones avant le tirage final.'
        ],
        technicalNotes: 'Conforme à la norme ISO/IEC 18004 avec correction d\'erreur Reed-Solomon.',
        faqs: [
          { question: 'Comment convertir un lien de site en QR code ?', answer: 'Saisissez votre URL dans le champ ci-dessus, personnalisez l\'apparence et cliquez sur Télécharger SVG ou PNG.' },
          { question: 'Les QR codes d\'URL statiques ont-ils une date d\'expiration ?', answer: 'Non, ils n\'expirent jamais et fonctionneront tant que votre site web restera accessible.' },
          { question: 'Puis-je modifier l\'URL après l\'impression ?', answer: 'Pour un code statique ce n\'est pas possible. Pour modifier le lien plus tard, utilisez un QR code Dynamique.' },
          { question: 'Quel format est recommandé pour l\'impression ?', answer: 'Le format vectoriel SVG est la référence pour une impression d\'une netteté parfaite à n\'importe quelle échelle.' },
          { question: 'Puis-je intégrer mon logo au centre ?', answer: 'Oui, importez votre fichier image et la correction d\'erreur passera automatiquement au niveau H (30%).' },
          { question: 'Pourquoi les points de mon QR code sont-ils si denses ?', answer: 'Les liens très longs créent une matrice plus dense. Utiliser une URL plus courte simplifie le code.' }
        ],
        relatedTools: [
          { name: 'QR Code WiFi', slug: 'wifi-qr-code-generator', description: 'Connectez vos visiteurs au WiFi sans mot de passe.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Partagez vos coordonnées professionnelles en 1 clic.' },
          { name: 'QR Code Avis Google', slug: 'google-reviews-qr-code', description: 'Collectez des avis 5 étoiles sur Google Maps.' },
          { name: 'QR Code WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Lancez des conversations directes sur WhatsApp.' }
        ]
      };
    case 'pt':
      return {
        slug: 'url-to-qr-code',
        qrTypeId: 'url',
        title: 'Gerador de QR Code para Link URL — Converter Link de Site em QR Code',
        description: 'Converta links de sites, lojas virtuais e landing pages em QR codes de alta resolução. Download grátis em vetor SVG e PNG.',
        h1: 'Gerador de QR Code para Link URL',
        subheadline: 'Crie QR codes nítidos que direcionam clientes diretamente para seu site, loja online ou página de captura.',
        heading: 'QR Code de Link URL',
        subheading: 'Conecte seus materiais impressos e embalagens diretamente aos seus canais digitais.',
        overviewTitle: 'O que é um Gerador de QR Code para Link URL?',
        overviewParagraphs: [
          'Um gerador de QR Code para link URL transforma qualquer endereço de site, loja online, artigo de blog ou catálogo virtual em um código óptico 2D. Ao apontar a câmera do smartphone, o navegador abre a página instantaneamente, sem precisar digitar links compridos.',
          'Os QR codes estáticos de URL armazenam o link diretamente na matriz de pontos, funcionando permanentemente e sem custos recorrentes. São ideais para embalagens, folhetos, cartões e banners.',
          'Nossa ferramenta permite personalizar cores, escolher formatos de módulos e incluir seu logotipo com correção de erros máxima (Nível H) e exportação em vetor SVG.'
        ],
        sectors: [
          { name: 'E-commerce & Lojas Físicas', description: 'Em caixas de envio para incentivar compras recorrentes.', benefit: 'Fideliza compradores físicos no canal digital.' },
          { name: 'Restaurantes & Bares', description: 'Links para cardápios online e reservas.', benefit: 'Economia em impressões de cardápios de papel.' },
          { name: 'Imobiliárias', description: 'Em placas de venda para exibir tours virtuais em vídeo.', benefit: 'Chama a atenção de quem passa na rua.' },
          { name: 'Eventos & Feiras', description: 'Em crachás e apostilas para download de palestras.', benefit: 'Engajamento sem distribuir papéis pesados.' },
          { name: 'Prestadores de Serviços', description: 'Em propostas comerciais para mostrar portfólio.', benefit: 'Apresenta depoimentos e trabalhos na hora.' },
          { name: 'Editoras & Cursos', description: 'Em livros e apostilas para acessar aulas complementares.', benefit: 'Integra o material físico com vídeos online.' }
        ],
        howItWorks: [
          { title: '1. Cole seu Link de Destino', description: 'Digite o endereço com https:// ou http:// (ex.: https://seusite.com.br).' },
          { title: '2. Personalize Cores e Logotipo', description: 'Ajuste com a identidade da sua marca e adicione seu logo.' },
          { title: '3. Baixe em SVG ou PNG', description: 'Exporte em SVG vetorial para gráficas ou PNG para telas.' }
        ],
        useCases: [
          { title: 'Embalagens de Produtos', description: 'Impresso em caixas para manuais e tutoriais de montagem.', example: 'Fabricante de eletrônicos com vídeo de instalação.' },
          { title: 'Panfletos e Encartes', description: 'Materiais com cupom de desconto aplicado automaticamente.', example: 'Empresa de reformas e pintura residencial.' },
          { title: 'Banners em Estandes', description: 'Banners retráteis para solicitar demonstrações de produto.', example: 'Empresa de software em feira de tecnologia.' },
          { title: 'Adesivagem de Veículos', description: 'Em furgões e motos para pedestres e motoristas parados.', example: 'Serviço de buffet com link de pedidos.' }
        ],
        tips: [
          'Inclua o Protocolo: Sempre inicie com https:// ou http://.',
          'Links Curtos: URLs mais curtas geram pontos maiores e leitura mais rápida.',
          'Alto Contraste: Módulos escuros sobre fundo claro facilitam o foco da câmera.',
          'Tamanho Mínimo: Pelo menos 20 x 20 mm para cartões e panfletos.',
          'Teste Prévio: Escaneie o impresso em vários celulares antes da tiragem final.'
        ],
        technicalNotes: 'Conformidade com a norma ISO/IEC 18004 e correção de erros Reed-Solomon.',
        faqs: [
          { question: 'Como converter um link em código QR?', answer: 'Insira sua URL no campo acima, personalize o visual e clique em Baixar SVG ou PNG.' },
          { question: 'Os QR codes estáticos de URL expiram?', answer: 'Não, eles nunca expiram e continuam funcionando enquanto seu site estiver online.' },
          { question: 'Posso alterar a URL depois de imprimir?', answer: 'Em códigos estáticos não é possível. Para poder trocar o link futuramente, use o QR Dinâmico.' },
          { question: 'Qual o melhor formato para impressão profissional?', answer: 'O formato vetorial SVG é o padrão gráfico ideal, pois não perde qualidade em nenhum tamanho.' },
          { question: 'Posso colocar meu logotipo no centro do código?', answer: 'Sim, basta carregar sua imagem e o sistema ajustará a correção de erros para Alto (30%).' },
          { question: 'Por que meu QR code ficou com pontos muito pequenos?', answer: 'Endereços muito longos criam códigos mais densos. Utilizar um link mais curto resolve isso.' }
        ],
        relatedTools: [
          { name: 'QR Code Wi-Fi', slug: 'wifi-qr-code-generator', description: 'Conecte clientes ao Wi-Fi sem digitar senhas.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Compartilhe cartões de contato com um toque.' },
          { name: 'QR Code Avaliações Google', slug: 'google-reviews-qr-code', description: 'Receba mais avaliações 5 estrelas no Google Maps.' },
          { name: 'QR Code WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Inicie conversas diretas no WhatsApp.' }
        ]
      };
    case 'it':
      return {
        slug: 'url-to-qr-code',
        qrTypeId: 'url',
        title: 'Generatore QR Code da URL — Convertire Link Web in QR Code',
        description: 'Converti link di siti web, e-commerce e landing page in codici QR ad alta risoluzione. Download gratuito in vettoriale SVG e PNG.',
        h1: 'Generatore QR Code da URL',
        subheadline: 'Crea codici QR nitidi che indirizzano i tuoi clienti direttamente al tuo sito web o catalogo digitale.',
        heading: 'QR Code per Link Web',
        subheading: 'Collega i tuoi materiali stampati e packaging direttamente alle tue risorse online.',
        overviewTitle: 'Cos\'è un Generatore di QR Code da URL?',
        overviewParagraphs: [
          'Un generatore di codici QR da URL converte qualsiasi indirizzo web, negozio online, articolo di blog o catalogo digitale in un codice a barre 2D. Inquadrando il codice con la fotocamera dello smartphone, il browser apre immediatamente il link senza dover digitare indirizzi complessi.',
          'I codici QR statici memorizzano il link direttamente nella matrice dei punti, rimanendo validi per sempre senza alcun canone né scadenza. Sono ideali per packaging, volantini, cartelloni e biglietti da visita.',
          'Il nostro strumento permette di personalizzare colori aziendali, forme dei moduli e inserire il logo aziendale con correzione degli errori di livello Alto (H) ed esportazione vettoriale SVG.'
        ],
        sectors: [
          { name: 'E-commerce & Negozi', description: 'Su pacchi e confezioni per favorire riordini veloci.', benefit: 'Trasforma gli acquirenti offline in clienti digitali abituali.' },
          { name: 'Ristorazione & Bar', description: 'Menu digitali, prenotazioni tavoli e carta dei vini.', benefit: 'Risparmio sui costi di stampa dei menu cartacei.' },
          { name: 'Agenzie Immobiliari', description: 'Su cartelli di vendita per mostrare tour virtuali 3D.', benefit: 'Cattura l\'interesse dei passanti davanti all\'immobile.' },
          { name: 'Fiere & Congressi', description: 'Su badge e materiale promozionale per scaricare atti e slide.', benefit: 'Massimo coinvolgimento senza stampare pesanti fascicoli.' },
          { name: 'Consulenti & Professionisti', description: 'Su preventivi e brochure per mostrare casi di successo.', benefit: 'Fornisce prove e recensioni in un secondo.' },
          { name: 'Editoria & Istruzione', description: 'Nei libri di testo per accedere a video esplicativi.', benefit: 'Collega la carta stampata a contenuti multimediali.' }
        ],
        howItWorks: [
          { title: '1. Incolla il Link Web', description: 'Inserisci l\'URL completo con https:// o http:// (es. https://tuosito.it).' },
          { title: '2. Personalizza Stile e Logo', description: 'Scegli i colori della tua attività e inserisci il tuo logo.' },
          { title: '3. Scarica in SVG o PNG', description: 'Esporta in SVG vettoriale per la tipografia o PNG per schermi.' }
        ],
        useCases: [
          { title: 'Packaging di Prodotti', description: 'Stampato sulle scatole per consultare le istruzioni d\'uso.', example: 'Marchio di cosmetici con video tutorial.' },
          { title: 'Volantini Promozionali', description: 'Pieghevoli con codice sconto applicato automaticamente.', example: 'Impresa di ristrutturazioni edili.' },
          { title: 'Roll-up per Stand Fieristici', description: 'Banner per richiedere demo live del prodotto.', example: 'Azienda software B2B in fiera.' },
          { title: 'Grafica su Furgoni Aziendali', description: 'Sulle fiancate dei veicoli per i pedoni e automobilisti fermi al semaforo.', example: 'Servizio catering con link agli ordini.' }
        ],
        tips: [
          'Prefisso Obbligatorio: Assicurati che l\'indirizzo inizi con https:// o http://.',
          'URL Brevi: Indirizzi più corti generano punti più grandi e facili da leggere.',
          'Contrasto Elevato: Moduli scuri su sfondo bianco per una messa a fuoco immediata.',
          'Dimensioni Minime: Almeno 20 x 20 mm per biglietti da visita e volantini.',
          'Test su Più Dispositivi: Verifica la scansione con vari smartphone prima della stampa in grande serie.'
        ],
        technicalNotes: 'Conforme allo standard ISO/IEC 18004 con correzione degli errori Reed-Solomon.',
        faqs: [
          { question: 'Come convertire un link in codice QR?', answer: 'Inserisci l\'URL nel campo in alto, personalizza la grafica e fai clic su Scarica SVG o PNG.' },
          { question: 'I codici QR statici hanno una data di scadenza?', answer: 'No, non scadono mai e funzionano finché il tuo sito web rimane online.' },
          { question: 'Posso modificare l\'URL dopo la stampa?', answer: 'Nei codici statici non è possibile. Per poter modificare la destinazione in futuro usa un QR Dinamico.' },
          { question: 'Qual è il formato migliore per la stampa?', answer: 'Il formato vettoriale SVG è lo standard ideale perché non perde nitidezza a qualsiasi dimensione.' },
          { question: 'Posso inserire il mio logo al centro?', answer: 'Sì, carica la tua immagine e la correzione errori verrà impostata automaticamente su Alto (30%).' },
          { question: 'Perché il mio codice QR ha punti molto densi?', answer: 'Gli indirizzi molto lunghi generano una matrice densa. L\'utilizzo di un URL più breve rende i punti più grandi.' }
        ],
        relatedTools: [
          { name: 'QR Code WiFi', slug: 'wifi-qr-code-generator', description: 'Connetti gli ospiti al WiFi senza inserire password.' },
          { name: 'QR Code vCard', slug: 'vcard-qr-code-generator', description: 'Condividi contatti professionali in rubrica con un tocco.' },
          { name: 'QR Code Recensioni Google', slug: 'google-reviews-qr-code', description: 'Ottieni più recensioni a 5 stelle su Google Maps.' },
          { name: 'QR Code WhatsApp', slug: 'whatsapp-qr-code-generator', description: 'Avvia chat dirette su WhatsApp con i clienti.' }
        ]
      };
    case 'hi':
      return {
        slug: 'url-to-qr-code',
        qrTypeId: 'url',
        title: 'URL to QR कोड जेनरेटर — वेबसाइट लिंक को QR कोड में बदलें',
        description: 'वेबसाइट लिंक, ऑनलाइन स्टोर और लैंडिंग पेज को हाई-रिज़ॉल्यूशन QR कोड में बदलें। वेक्टर SVG और PNG मुफ़्त डाउनलोड।',
        h1: 'URL to QR कोड जेनरेटर',
        subheadline: 'स्पष्ट, उच्च-रिज़ॉल्यूशन QR कोड बनाएं जो ग्राहकों को सीधे आपकी वेबसाइट या ऑनलाइन स्टोर पर ले जाएं।',
        heading: 'वेबसाइट URL QR कोड',
        subheading: 'प्रिंट विज्ञापनों और पैकेजिंग को सीधे अपने डिजिटल वेब पेजों से जोड़ें।',
        overviewTitle: 'URL to QR कोड जेनरेटर क्या है?',
        overviewParagraphs: [
          'URL to QR कोड जेनरेटर किसी भी वेबसाइट लिंक, ऑनलाइन स्टोर, ब्लॉग पोस्ट या सोशल मीडिया पेज को 2D बारकोड में बदल देता है। जब ग्राहक अपने स्मार्टफोन कैमरे से इसे स्कैन करते हैं, तो बिना लंबा लिंक टाइप किए वेबसाइट सीधे उनके फोन में खुल जाती है।',
          'स्टैटिक URL QR कोड वेब एड्रेस को सीधे डॉट्स में सुरक्षित करते हैं, जिससे वे बिना किसी मासिक शुल्क के हमेशा के लिए काम करते रहते हैं। यह प्रोडक्ट पैकेजिंग, विज़िटिंग कार्ड, बैनर और विज्ञापनों के लिए सर्वश्रेष्ठ विकल्प है।',
          'हमारा टूल आपको कस्टम रंग, डॉट शेप्स चुनने और सेंटर में अपना ब्रांड लोगो लगाने की सुविधा देता है। हाई-क्वालिटी वेक्टर SVG और PNG डाउनलोड बिल्कुल मुफ़्त है।'
        ],
        sectors: [
          { name: 'ई-कॉमर्स व रिटेल स्टोर', description: 'पार्सल बॉक्स और बिल पर दोबारा ऑर्डर करने के लिए लिंक दें।', benefit: 'ऑफलाइन खरीदारों को नियमित ऑनलाइन ग्राहक बनाता है।' },
          { name: 'होटल व रेस्तरां', description: 'टेबल स्टैंड पर डिजिटल मेन्यू और ऑनलाइन बुकिंग लिंक दें।', benefit: 'कागज़ के मेन्यू प्रिंट करने के खर्च से पूरी बचत।' },
          { name: 'रियल एस्टेट व प्रॉपर्टी डीलर', description: 'बिक्री बोर्ड पर प्रॉपर्टी के 3D वर्चुअल टूर का लिंक दें।', benefit: 'सड़क से गुजरते खरीदारों को तुरंत आकर्षित करता है।' },
          { name: 'इवेंट्स व एग्जीबिशन', description: 'बैनर पर शेड्यूल और रजिस्ट्रेशन फॉर्म का लिंक लगाएं।', benefit: 'कागज़ के पर्चे बांटे बिना डिजिटल सहभागिता।' },
          { name: 'कंसल्टेंट व प्रोफेशनल्स', description: 'प्रस्तावों और इनवॉइस में पोर्टफोलियो और केस स्टडी का लिंक जोड़ें।', benefit: 'ग्राहकों को सीधे कार्य अनुभव और समीक्षाएं दिखाता है।' },
          { name: 'पुस्तकें व शिक्षा', description: 'किताबों में वीडियो ट्यूटोरियल और ऑनलाइन अभ्यास का लिंक दें।', benefit: 'प्रिंट सामग्री को डिजिटल वीडियो से जोड़ता है।' }
        ],
        howItWorks: [
          { title: '1. वेबसाइट लिंक दर्ज करें', description: 'पूरा वेब एड्रेस https:// के साथ लिखें (जैसे https://yourwebsite.com)।' },
          { title: '2. रंग व लोगो कस्टमाइज़ करें', description: 'अपनी कंपनी का रंग चुनें और सेंटर में अपना लोगो अपलोड करें।' },
          { title: '3. SVG या PNG डाउनलोड करें', description: 'प्रिंटिंग के लिए वेक्टर SVG या स्क्रीन के लिए PNG डाउनलोड करें।' }
        ],
        useCases: [
          { title: 'प्रोडक्ट बॉक्स पैकेजिंग', description: 'बॉक्स पर यूजर मैन्युअल और वीडियो गाइड देखने हेतु।', example: 'इलेक्ट्रॉनिक्स ब्रांड इंस्टॉलेशन गाइड हेतु।' },
          { title: 'न्यूज़पेपर व पैम्फलेट विज्ञापन', description: 'छूट कूपन कोड सीधे लागू करने वाले पर्चे।', example: 'होम सर्विस कंपनी बुकिंग लिंक के साथ।' },
          { title: 'प्रदर्शनी स्टॉल बैनर', description: 'लाइव डेमो और संपर्क फॉर्म भरने के लिए बड़ा बैनर।', example: 'सॉफ्टवेयर कंपनी इवेंट लीड्स हेतु।' },
          { title: 'डिलीवरी वाहन ब्रांडिंग', description: 'गाड़ियों के पीछे ऑर्डर लिंक वाला हाई-कंट्रास्ट कोड।', example: 'कैटरिंग वैन ऑर्डर लिंक के साथ।' }
        ],
        tips: [
          'प्रोटोकॉल अनिवार्य है: हमेशा सुनिश्चित करें कि लिंक https:// या http:// से शुरू हो।',
          'छोटे लिंक बेहतर: छोटे URL से बड़े डॉट्स बनते हैं जो दूर से भी तुरंत स्कैन होते हैं।',
          'हाई कंट्रास्ट: सफ़ेद बैकग्राउंड पर गहरे रंग के डॉट्स रखें।',
          'न्यूनतम साइज़: विज़िटिंग कार्ड पर कम से कम 20 x 20 मिमी साइज़ रखें।',
          'प्रिंट से पहले जांच: बड़े प्रिंट से पहले अलग-अलग फोन से टेस्ट करें।'
        ],
        technicalNotes: 'ISO/IEC 18004 अंतरराष्ट्रीय मानक के अनुरूप Reed-Solomon एरर करेक्शन।',
        faqs: [
          { question: 'वेबसाइट लिंक को QR कोड में कैसे बदलें?', answer: 'ऊपर दिए गए बॉक्स में अपना वेबसाइट लिंक पेस्ट करें, डिज़ाइन कस्टमाइज़ करें और डाउनलोड बटन पर क्लिक करें।' },
          { question: 'क्या यह वेबसाइट QR कोड कभी एक्सपायर होता है?', answer: 'नहीं, यह स्टैटिक कोड स्थायी है और जब तक आपकी वेबसाइट चालू रहेगी तब तक काम करेगा।' },
          { question: 'क्या प्रिंट करने के बाद मैं लिंक बदल सकता हूँ?', answer: 'स्टैटिक कोड में लिंक नहीं बदला जा सकता। भविष्य में लिंक बदलने के लिए डायनेमिक QR का उपयोग करें।' },
          { question: 'प्रिंटिंग के लिए सबसे अच्छी फ़ाइल कौन सी है?', answer: 'वेक्टर SVG सबसे अच्छा फॉर्मेट है क्योंकि यह बिना पिक्सल फटे किसी भी साइज़ में प्रिंट होता है।' },
          { question: 'क्या मैं बीच में अपनी दुकान का लोगो लगा सकता हूँ?', answer: 'हाँ, लोगो अपलोड करते ही सिस्टम एरर करेक्शन को स्वचालित रूप से हाई (H) पर सेट कर देता है।' },
          { question: 'मेरे QR कोड में बहुत छोटे-छोटे डॉट्स क्यों दिख रहे हैं?', answer: 'बहुत लंबे वेब एड्रेस से कोड घना हो जाता है। छोटे लिंक का उपयोग करने से डॉट्स बड़े और स्पष्ट बनते हैं।' }
        ],
        relatedTools: [
          { name: 'Wi-Fi QR जेनरेटर', slug: 'wifi-qr-code-generator', description: 'बिना पासवर्ड टाइप किए वाई-फ़ाई से कनेक्ट करें।' },
          { name: 'vCard विज़िटिंग कार्ड QR', slug: 'vcard-qr-code-generator', description: 'संपर्क विवरण सीधे फोनबुक में सेव कराएं।' },
          { name: 'गूगल रिव्यू QR कोड', slug: 'google-reviews-qr-code', description: 'ग्राहकों से 5-स्टार गूगल रेटिंग प्राप्त करें।' },
          { name: 'WhatsApp QR जेनरेटर', slug: 'whatsapp-qr-code-generator', description: 'ग्राहकों से सीधे व्हाट्सएप चैट शुरू करें।' }
        ]
      };
    default: // 'en'
      return {
        slug: 'url-to-qr-code',
        qrTypeId: 'url',
        title: 'URL to QR Code Generator — Convert Website Link to QR Code',
        description: 'Convert website links, landing pages, and online stores into high-resolution QR codes. Instant client-side generation with vector SVG & PNG export.',
        h1: 'URL to QR Code Generator',
        subheadline: 'Create crisp, high-resolution QR codes that direct customers straight to your website, store, or landing page.',
        heading: 'Website URL QR Code',
        subheading: 'Convert digital web links into instant scannable touchpoints for print media and packaging.',
        overviewTitle: 'What is a URL to QR Code Generator?',
        overviewParagraphs: [
          'A URL to QR code generator converts any web address, landing page, blog post, or e-commerce store link into a high-density 2D optical barcode. When prospective customers, readers, or event attendees scan the code using a smartphone camera, their browser opens the destination URL immediately without requiring them to type long website addresses or complex query parameters.',
          'By replacing manual typing with a single scan, URL QR codes bridge offline physical collateral—such as printed product packaging, direct mail postcards, billboards, vehicle wraps, and trade show banners—directly into digital engagement. Static URL QR codes encode the destination web address directly into the pixel matrix, allowing them to function permanently without ongoing server subscription costs.',
          'Our browser-based generator enables full visual customization including brand color matching, custom corner eye geometries, round or square module dots, and central logo embedding with automated Reed-Solomon error correction (Level H). Outputs are available as high-resolution PNG raster graphics for screen media or precision Vector SVG paths ready for professional commercial printing.'
        ],
        sectors: [
          { name: 'Retail & E-Commerce', description: 'Print URL QR codes on product packaging, unboxing cards, and store receipts to guide buyers to reorder portals or customer review forms.', benefit: 'Turns one-time in-store customers into recurring digital buyers.' },
          { name: 'Restaurants & Hospitality', description: 'Direct diners to mobile food menus, wine pairings, reservation forms, and online feedback pages directly from table tents.', benefit: 'Eliminates paper printing costs and allows real-time seasonal menu updates.' },
          { name: 'Real Estate Agencies', description: 'Place URL QR codes on "For Sale" yard signs, window displays, and property brochures linking directly to 3D virtual tours.', benefit: 'Captures drive-by prospect interest with immediate high-definition media.' },
          { name: 'Event Organizers & Expos', description: 'Add scannable links on badges, attendee lanyards, stage backdrops, and printed agendas for instant schedule and slide deck access.', benefit: 'Drives high attendee engagement without distributing bulky printed binders.' },
          { name: 'Professional Services & Consultants', description: 'Incorporate portfolio QR links on presentation handouts, case study one-pagers, and business correspondence.', benefit: 'Provides instant proof of work and client testimonials.' },
          { name: 'Authors & Publishers', description: 'Embed URL QR codes at the end of book chapters, journal articles, and academic papers to reference live digital citations and video tutorials.', benefit: 'Connects offline printed literature with rich interactive media.' }
        ],
        howItWorks: [
          { title: '1. Paste Destination Link', description: 'Enter your full web address including https:// or http:// (e.g., https://yourbrand.com/special-offer).' },
          { title: '2. Customize Colors & Logo', description: 'Match your corporate color scheme, pick modern rounded or dot modules, and upload your high-resolution brand logo.' },
          { title: '3. Export Vector SVG or PNG', description: 'Download print-ready vector SVG files for physical signage or high-DPI PNGs for digital assets.' }
        ],
        useCases: [
          { title: 'Product Packaging & Hang Tags', description: 'Printed on retail boxes and garment tags to showcase instructions, user manuals, and brand story videos.', example: 'Cosmetics brand adding a tutorial video QR code to product cartons.' },
          { title: 'Direct Mail & Postcards', description: 'Mailed to local households offering a targeted discount code applied automatically at checkout.', example: 'HVAC repair company sending seasonal inspection mailers with a booking QR.' },
          { title: 'Trade Show Exhibition Booths', description: 'Displayed on large roll-up pull banners to collect booth visitor contact details and demo requests.', example: 'Software vendor driving booth visitors to an interactive product simulator.' },
          { title: 'Vehicle Wraps & Delivery Fleets', description: 'Oversized high-contrast QR codes on transit vans and delivery trucks for pedestrians at stoplights.', example: 'Local catering van displaying a quick-order link on rear doors.' }
        ],
        tips: [
          'Protocol Prefix Required: Always ensure your URL begins with https:// or http:// so mobile operating systems recognize it as a web link.',
          'URL Shortening for Cleaner Patterns: Shorter URLs produce simpler QR matrices with larger pixel blocks that scan significantly faster from greater distances.',
          'High Foreground-to-Background Contrast: Maintain a dark module color against a clean white or light background for rapid camera autofocus.',
          'Minimum Physical Print Size: For handheld print materials like business cards, print at a minimum of 20 x 20 mm (0.8 x 0.8 inches).',
          'Multi-Device Field Testing: Always test the printed proof across both iOS and Android camera apps before beginning large-scale print runs.'
        ],
        technicalNotes: 'Standards Compliance: Generates ISO/IEC 18004 compliant standard QR symbols with configurable Reed-Solomon error correction from Level L (7%) up to Level H (30%).',
        faqs: [
          { question: 'How do I convert a website link into a QR code?', answer: 'Enter or paste your destination website URL into the input field above. The generator immediately creates the QR code in real-time inside your browser. You can then customize colors, add a logo, and download the PNG or SVG file.' },
          { question: 'Do static website URL QR codes ever expire?', answer: 'No. Static URL QR codes encode the destination address directly into the pixel matrix. They never expire and will work permanently as long as your destination web page remains online.' },
          { question: 'Can I change the destination URL after printing the QR code?', answer: 'For static QR codes, the URL is permanently encoded and cannot be changed once printed. To update destination links in the future without reprinting physical materials, choose the Dynamic QR option in your dashboard.' },
          { question: 'What is the best file format for printing URL QR codes?', answer: 'Vector SVG is the industry standard for professional printing because it scales to any physical size (from business cards to giant billboards) with zero loss of sharpness. PNG is best for digital screens and email templates.' },
          { question: 'Can I put my company logo in the center of the URL QR code?', answer: 'Yes. Upload your logo file (PNG, JPG, or SVG) in the Customization panel. Our system automatically configures Level H error correction so the camera can scan the code even with the center area covered.' },
          { question: 'Why does my QR code look dense with tiny dots?', answer: 'QR code density depends on the character count of your URL. Long URLs with tracking parameters produce denser codes. Using a shorter URL creates a cleaner, more readable matrix with larger dots.' }
        ],
        relatedTools: [
          { name: 'Wi-Fi QR Generator', slug: 'wifi-qr-code-generator', description: 'Let visitors join your wireless network without typing passwords.' },
          { name: 'vCard QR Generator', slug: 'vcard-qr-code-generator', description: 'Share full contact details directly to address books.' },
          { name: 'Google Reviews QR', slug: 'google-reviews-qr-code', description: 'Send satisfied customers directly to your Google review form.' },
          { name: 'WhatsApp QR Generator', slug: 'whatsapp-qr-code-generator', description: 'Launch instant WhatsApp chats with pre-filled inquiries.' }
        ]
      };
  }
}
