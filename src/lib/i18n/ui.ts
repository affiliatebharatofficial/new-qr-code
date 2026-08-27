import type { Locale } from './config';

export interface UIDictionary {
  brand: {
    title: string;
    subtitle: string;
    badge: string;
  };
  nav: {
    generators: string;
    businessCards: string;
    menus: string;
    calculators: string;
    sizeCalc: string;
    printCalc: string;
    guides: string;
    pricing: string;
    dashboard: string;
    admin: string;
    login: string;
    signup: string;
  };
  generator: {
    selectType: string;
    enterDetails: string;
    styleCustomization: string;
    livePreview: string;
    downloadPng: string;
    downloadSvg: string;
    downloadJpg: string;
    saveQr: string;
    copyImage: string;
    reset: string;
    resolution: string;
    emptyPrompt: string;
    staticMode: string;
    dynamicMode: string;
    staticNotice: string;
    dynamicNotice: string;
  };
  tabs: {
    presets: string;
    colors: string;
    shapes: string;
    logo: string;
    size: string;
  };
  customization: {
    foreground: string;
    background: string;
    transparent: string;
    dotPattern: string;
    cornerFrame: string;
    cornerDot: string;
    uploadLogo: string;
    hideBackgroundDots: string;
    logoSize: string;
    exportResolution: string;
    errorCorrection: string;
    margin: string;
  };
  warnings: {
    lowContrast: string;
    complexPattern: string;
    largeLogo: string;
  };
  footer: {
    description: string;
    clientEngine: string;
    edgeRedirects: string;
    generatorsHeader: string;
    useCasesHeader: string;
    guidesHeader: string;
    platformHeader: string;
    allRightsReserved: string;
    noAppNeeded: string;
    runsLocally: string;
  };
  common: {
    home: string;
    privacy: string;
    terms: string;
    disclaimer: string;
    contact: string;
    back: string;
    cancel: string;
    confirm: string;
    loading: string;
    success: string;
    error: string;
  };
}

export const UI_TRANSLATIONS: Record<Locale, UIDictionary> = {
  en: {
    brand: {
      title: 'QR Generator',
      subtitle: 'High-Resolution Vector SVG & PNG',
      badge: 'Free',
    },
    nav: {
      generators: 'Generators',
      businessCards: 'Business Cards',
      menus: 'Digital Menus',
      calculators: 'Calculators',
      sizeCalc: 'QR Size Calculator',
      printCalc: 'Print Size & DPI',
      guides: 'Guides',
      pricing: 'Pricing',
      dashboard: 'Dashboard',
      admin: 'Admin',
      login: 'Log in',
      signup: 'Sign up',
    },
    generator: {
      selectType: '1. SELECT PAYLOAD TYPE',
      enterDetails: '2. ENTER PAYLOAD DETAILS',
      styleCustomization: '3. VISUAL STYLE & CUSTOMIZATION',
      livePreview: 'Live Preview',
      downloadPng: 'Download PNG',
      downloadSvg: 'Vector SVG',
      downloadJpg: 'JPG',
      saveQr: 'Save',
      copyImage: 'Copy',
      reset: 'Reset',
      resolution: '512 × 512 px',
      emptyPrompt: 'Enter payload to generate preview.',
      staticMode: 'Static QR',
      dynamicMode: 'Dynamic QR',
      staticNotice: 'Direct data, never expires, no redirects.',
      dynamicNotice: 'Editable destination + real-time scan analytics.',
    },
    tabs: {
      presets: 'Presets',
      colors: 'Colors',
      shapes: 'Shapes & Eyes',
      logo: 'Logo',
      size: 'Size & Margin',
    },
    customization: {
      foreground: 'Foreground Color',
      background: 'Background Color',
      transparent: 'Transparent Background',
      dotPattern: 'Dot Pattern Shape',
      cornerFrame: 'Corner Eye Frame',
      cornerDot: 'Corner Eye Dot',
      uploadLogo: 'Upload Center Logo',
      hideBackgroundDots: 'Clear Background Dots Under Logo',
      logoSize: 'Logo Scale Ratio',
      exportResolution: 'Canvas Export Resolution',
      errorCorrection: 'Error Correction Level',
      margin: 'Quiet Zone Margin',
    },
    warnings: {
      lowContrast: 'Low contrast detected: QR codes may not scan reliably on dark backgrounds.',
      complexPattern: 'Dense QR matrix: Maintain at least 25mm physical print size.',
      largeLogo: 'Large logo ratio: Ensure Error Correction is set to High (H).',
    },
    footer: {
      description: 'High-resolution QR Code Generator with dynamic short links, hosted mobile landing pages, and real-time scan analytics.',
      clientEngine: '100% Client-Side Engine',
      edgeRedirects: 'Edge-Powered Redirects',
      generatorsHeader: 'QR Generators',
      useCasesHeader: 'Use Cases',
      guidesHeader: 'Guides & Resources',
      platformHeader: 'Platform & Legal',
      allRightsReserved: 'All rights reserved.',
      noAppNeeded: 'No app download needed',
      runsLocally: 'Runs 100% locally in browser',
    },
    common: {
      home: 'Home',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      disclaimer: 'Disclaimer',
      contact: 'Contact Us',
      back: 'Back',
      cancel: 'Cancel',
      confirm: 'Confirm',
      loading: 'Loading...',
      success: 'Success',
      error: 'An error occurred',
    },
  },
  es: {
    brand: {
      title: 'Generador QR',
      subtitle: 'Vector SVG y PNG de Alta Resolución',
      badge: 'Gratis',
    },
    nav: {
      generators: 'Generadores',
      businessCards: 'Tarjetas Digitales',
      menus: 'Menús Digitales',
      calculators: 'Calculadoras',
      sizeCalc: 'Calculadora de Tamaño',
      printCalc: 'Tamaño de Impresión y DPI',
      guides: 'Guías',
      pricing: 'Precios',
      dashboard: 'Panel',
      admin: 'Admin',
      login: 'Iniciar sesión',
      signup: 'Registrarse',
    },
    generator: {
      selectType: '1. SELECCIONAR TIPO DE QR',
      enterDetails: '2. INTRODUCIR INFORMACIÓN',
      styleCustomization: '3. ESTILO VISUAL Y PERSONALIZACIÓN',
      livePreview: 'Vista Previa',
      downloadPng: 'Descargar PNG',
      downloadSvg: 'Vector SVG',
      downloadJpg: 'JPG',
      saveQr: 'Guardar',
      copyImage: 'Copiar',
      reset: 'Restablecer',
      resolution: '512 × 512 px',
      emptyPrompt: 'Introduce datos para generar la vista previa.',
      staticMode: 'QR Estático',
      dynamicMode: 'QR Dinámico',
      staticNotice: 'Datos directos, nunca caduca, sin redirecciones.',
      dynamicNotice: 'Destino editable + estadísticas de escaneo en tiempo real.',
    },
    tabs: {
      presets: 'Plantillas',
      colors: 'Colores',
      shapes: 'Formas y Ojos',
      logo: 'Logotipo',
      size: 'Tamaño y Margen',
    },
    customization: {
      foreground: 'Color Principal',
      background: 'Color de Fondo',
      transparent: 'Fondo Transparente',
      dotPattern: 'Forma de Puntos',
      cornerFrame: 'Marco de Esquina',
      cornerDot: 'Punto de Esquina',
      uploadLogo: 'Subir Logotipo Central',
      hideBackgroundDots: 'Ocultar Puntos Detrás del Logo',
      logoSize: 'Escala del Logotipo',
      exportResolution: 'Resolución de Exportación',
      errorCorrection: 'Nivel de Corrección de Errores',
      margin: 'Margen de Zona Silenciosa',
    },
    warnings: {
      lowContrast: 'Bajo contraste: el código QR podría fallar al escanearse.',
      complexPattern: 'Matriz densa: mantén un tamaño de impresión de al menos 25 mm.',
      largeLogo: 'Logo grande: ajusta la corrección de errores a nivel Alto (H).',
    },
    footer: {
      description: 'Generador de códigos QR de alta resolución con enlaces dinámicos, páginas de aterrizaje móviles y analítica en tiempo real.',
      clientEngine: 'Motor 100% en el Navegador',
      edgeRedirects: 'Redirecciones en el Edge',
      generatorsHeader: 'Generadores QR',
      useCasesHeader: 'Casos de Uso',
      guidesHeader: 'Guías y Recursos',
      platformHeader: 'Plataforma y Legal',
      allRightsReserved: 'Todos los derechos reservados.',
      noAppNeeded: 'No requiere app externa',
      runsLocally: 'Funciona 100% local en tu navegador',
    },
    common: {
      home: 'Inicio',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      disclaimer: 'Aviso Legal',
      contact: 'Contacto',
      back: 'Volver',
      cancel: 'Cancelar',
      confirm: 'Confirmar',
      loading: 'Cargando...',
      success: 'Operación exitosa',
      error: 'Ha ocurrido un error',
    },
  },
  de: {
    brand: {
      title: 'QR Code Generator',
      subtitle: 'Hochauflösende Vektor-SVG & PNG',
      badge: 'Kostenlos',
    },
    nav: {
      generators: 'Generatoren',
      businessCards: 'Visitenkarten',
      menus: 'Digitale Speisekarten',
      calculators: 'Rechner',
      sizeCalc: 'QR-Größenrechner',
      printCalc: 'Druckgröße & DPI',
      guides: 'Anleitungen',
      pricing: 'Preise',
      dashboard: 'Dashboard',
      admin: 'Admin',
      login: 'Anmelden',
      signup: 'Registrieren',
    },
    generator: {
      selectType: '1. QR-TYP WÄHLEN',
      enterDetails: '2. DATEN EINGEBEN',
      styleCustomization: '3. DESIGN & ANPASSUNG',
      livePreview: 'Live-Vorschau',
      downloadPng: 'PNG Herunterladen',
      downloadSvg: 'Vektor SVG',
      downloadJpg: 'JPG',
      saveQr: 'Speichern',
      copyImage: 'Kopieren',
      reset: 'Zurücksetzen',
      resolution: '512 × 512 px',
      emptyPrompt: 'Daten eingeben, um Vorschau zu erstellen.',
      staticMode: 'Statischer QR',
      dynamicMode: 'Dynamischer QR',
      staticNotice: 'Direkte Daten, läuft nie ab, keine Weiterleitung.',
      dynamicNotice: 'Ziel-URL änderbar + Scan-Statistiken in Echtzeit.',
    },
    tabs: {
      presets: 'Vorlagen',
      colors: 'Farben',
      shapes: 'Formen & Augen',
      logo: 'Logo',
      size: 'Größe & Rand',
    },
    customization: {
      foreground: 'Vordergrundfarbe',
      background: 'Hintergrundfarbe',
      transparent: 'Transparenter Hintergrund',
      dotPattern: 'Punktmuster-Form',
      cornerFrame: 'Eckrahmen',
      cornerDot: 'Eckpunkt',
      uploadLogo: 'Zentrales Logo Hochladen',
      hideBackgroundDots: 'Punkte hinter Logo ausblenden',
      logoSize: 'Logo-Größenverhältnis',
      exportResolution: 'Export-Auflösung',
      errorCorrection: 'Fehlerkorrektur-Level',
      margin: 'Ruhezonen-Rand',
    },
    warnings: {
      lowContrast: 'Geringer Kontrast erkannt: Scan könnte beeinträchtigt sein.',
      complexPattern: 'Dichte Matrix: Mindestens 25 mm Druckgröße einhalten.',
      largeLogo: 'Großes Logo: Fehlerkorrektur auf Hoch (H) stellen.',
    },
    footer: {
      description: 'Hochauflösender QR Code Generator mit dynamischen Kurzlinks, mobilen Landingpages und Echtzeit-Scan-Analysen.',
      clientEngine: '100% Lokale Browser-Engine',
      edgeRedirects: 'Edge-Weiterleitungen',
      generatorsHeader: 'QR-Generatoren',
      useCasesHeader: 'Einsatzbereiche',
      guidesHeader: 'Anleitungen & Ratgeber',
      platformHeader: 'Plattform & Rechtliches',
      allRightsReserved: 'Alle Rechte vorbehalten.',
      noAppNeeded: 'Keine App-Installation nötig',
      runsLocally: 'Läuft zu 100% lokal im Browser',
    },
    common: {
      home: 'Startseite',
      privacy: 'Datenschutzerklärung',
      terms: 'Nutzungsbedingungen',
      disclaimer: 'Haftungsausschluss',
      contact: 'Kontakt',
      back: 'Zurück',
      cancel: 'Abbrechen',
      confirm: 'Bestätigen',
      loading: 'Laden...',
      success: 'Erfolgreich',
      error: 'Ein Fehler ist aufgetreten',
    },
  },
  fr: {
    brand: {
      title: 'Générateur QR',
      subtitle: 'Vectoriel SVG & PNG Haute Résolution',
      badge: 'Gratuit',
    },
    nav: {
      generators: 'Générateurs',
      businessCards: 'Cartes de Visite',
      menus: 'Menus Digitaux',
      calculators: 'Calculateurs',
      sizeCalc: 'Calculateur de Taille',
      printCalc: 'Taille d\'Impression & DPI',
      guides: 'Guides',
      pricing: 'Tarifs',
      dashboard: 'Tableau de bord',
      admin: 'Admin',
      login: 'Connexion',
      signup: 'Inscription',
    },
    generator: {
      selectType: '1. SÉLECTIONNER LE TYPE DE QR',
      enterDetails: '2. ENTRER LES INFORMATIONS',
      styleCustomization: '3. STYLE VISUEL & PERSONNALISATION',
      livePreview: 'Aperçu en Direct',
      downloadPng: 'Télécharger PNG',
      downloadSvg: 'Vectoriel SVG',
      downloadJpg: 'JPG',
      saveQr: 'Enregistrer',
      copyImage: 'Copier',
      reset: 'Réinitialiser',
      resolution: '512 × 512 px',
      emptyPrompt: 'Entrez des données pour générer l\'aperçu.',
      staticMode: 'QR Statique',
      dynamicMode: 'QR Dynamique',
      staticNotice: 'Données directes, n\'expire jamais, sans redirection.',
      dynamicNotice: 'Lien modifiable + statistiques de scan en direct.',
    },
    tabs: {
      presets: 'Modèles',
      colors: 'Couleurs',
      shapes: 'Formes & Yeux',
      logo: 'Logo',
      size: 'Taille & Marge',
    },
    customization: {
      foreground: 'Couleur Principale',
      background: 'Couleur de Fond',
      transparent: 'Fond Transparent',
      dotPattern: 'Forme des Points',
      cornerFrame: 'Cadre d\'Angle',
      cornerDot: 'Point d\'Angle',
      uploadLogo: 'Télécharger un Logo',
      hideBackgroundDots: 'Masquer les Points sous le Logo',
      logoSize: 'Échelle du Logo',
      exportResolution: 'Résolution d\'Exportation',
      errorCorrection: 'Niveau de Correction d\'Erreur',
      margin: 'Marge de Sécurité',
    },
    warnings: {
      lowContrast: 'Faible contraste détecté : le scan peut être ralenti.',
      complexPattern: 'Matrice dense : conservez au moins 25 mm à l\'impression.',
      largeLogo: 'Grand logo : réglez la correction d\'erreur sur Haute (H).',
    },
    footer: {
      description: 'Générateur de QR codes haute résolution avec liens courts dynamiques, pages d\'atterrissage mobiles et statistiques en temps réel.',
      clientEngine: 'Moteur 100% Côté Navigateur',
      edgeRedirects: 'Redirections Edge Ultra-Rapides',
      generatorsHeader: 'Générateurs QR',
      useCasesHeader: 'Cas d\'Usage',
      guidesHeader: 'Guides & Ressources',
      platformHeader: 'Plateforme & Légal',
      allRightsReserved: 'Tous droits réservés.',
      noAppNeeded: 'Aucune application requise',
      runsLocally: 'Fonctionne à 100% dans votre navigateur',
    },
    common: {
      home: 'Accueil',
      privacy: 'Politique de Confidentialité',
      terms: 'Conditions d\'Utilisation',
      disclaimer: 'Mentions Légales',
      contact: 'Contact',
      back: 'Retour',
      cancel: 'Annuler',
      confirm: 'Confirmer',
      loading: 'Chargement...',
      success: 'Succès',
      error: 'Une erreur est survenue',
    },
  },
  pt: {
    brand: {
      title: 'Gerador QR Code',
      subtitle: 'Vetor SVG e PNG em Alta Resolução',
      badge: 'Grátis',
    },
    nav: {
      generators: 'Geradores',
      businessCards: 'Cartões Digitais',
      menus: 'Cardápios Digitais',
      calculators: 'Calculadoras',
      sizeCalc: 'Calculadora de Tamanho',
      printCalc: 'Tamanho de Impressão e DPI',
      guides: 'Guias',
      pricing: 'Preços',
      dashboard: 'Painel',
      admin: 'Admin',
      login: 'Entrar',
      signup: 'Criar conta',
    },
    generator: {
      selectType: '1. ESCOLHA O TIPO DE QR',
      enterDetails: '2. INSIRA OS DADOS',
      styleCustomization: '3. ESTILO VISUAL & PERSONALIZAÇÃO',
      livePreview: 'Pré-visualização',
      downloadPng: 'Baixar PNG',
      downloadSvg: 'Vetor SVG',
      downloadJpg: 'JPG',
      saveQr: 'Salvar',
      copyImage: 'Copiar',
      reset: 'Redefinir',
      resolution: '512 × 512 px',
      emptyPrompt: 'Insira os dados para gerar a prévia.',
      staticMode: 'QR Estático',
      dynamicMode: 'QR Dinâmico',
      staticNotice: 'Dados diretos, nunca expira, sem redirecionamento.',
      dynamicNotice: 'Destino editável + estatísticas de leitura em tempo real.',
    },
    tabs: {
      presets: 'Modelos',
      colors: 'Cores',
      shapes: 'Formatos & Olhos',
      logo: 'Logotipo',
      size: 'Tamanho & Margem',
    },
    customization: {
      foreground: 'Cor dos Módulos',
      background: 'Cor de Fundo',
      transparent: 'Fundo Transparente',
      dotPattern: 'Formato dos Pontos',
      cornerFrame: 'Moldura do Olho',
      cornerDot: 'Ponto do Olho',
      uploadLogo: 'Carregar Logotipo Central',
      hideBackgroundDots: 'Ocultar Pontos Atrás do Logo',
      logoSize: 'Escala do Logotipo',
      exportResolution: 'Resolução de Exportação',
      errorCorrection: 'Nível de Correção de Erros',
      margin: 'Margem de Segurança',
    },
    warnings: {
      lowContrast: 'Baixo contraste detectado: pode dificultar a leitura da câmera.',
      complexPattern: 'Matriz densa: imprima em tamanho mínimo de 25 mm.',
      largeLogo: 'Logo grande: defina a correção de erros para Alto (H).',
    },
    footer: {
      description: 'Gerador de QR Code em alta resolução com links curtos dinâmicos, páginas móveis e estatísticas em tempo real.',
      clientEngine: 'Motor 100% no Navegador',
      edgeRedirects: 'Redirecionamento no Edge',
      generatorsHeader: 'Geradores QR',
      useCasesHeader: 'Casos de Uso',
      guidesHeader: 'Guias & Tutoriais',
      platformHeader: 'Plataforma & Legal',
      allRightsReserved: 'Todos os direitos reservados.',
      noAppNeeded: 'Sem necessidade de baixar app',
      runsLocally: 'Funciona 100% local no seu navegador',
    },
    common: {
      home: 'Início',
      privacy: 'Política de Privacidade',
      terms: 'Termos de Serviço',
      disclaimer: 'Isenção de Responsabilidade',
      contact: 'Fale Conosco',
      back: 'Voltar',
      cancel: 'Cancelar',
      confirm: 'Confirmar',
      loading: 'Carregando...',
      success: 'Sucesso',
      error: 'Ocorreu um erro',
    },
  },
  it: {
    brand: {
      title: 'Generatore QR',
      subtitle: 'Vettoriale SVG e PNG ad Alta Risoluzione',
      badge: 'Gratuito',
    },
    nav: {
      generators: 'Generatori',
      businessCards: 'Biglietti da Visita',
      menus: 'Menu Digitali',
      calculators: 'Calcolatori',
      sizeCalc: 'Calcolatore Dimensioni',
      printCalc: 'Dimensioni Stampa & DPI',
      guides: 'Guide',
      pricing: 'Prezzi',
      dashboard: 'Dashboard',
      admin: 'Admin',
      login: 'Accedi',
      signup: 'Registrati',
    },
    generator: {
      selectType: '1. SELEZIONA IL TIPO DI QR',
      enterDetails: '2. INSERISCI I DATI',
      styleCustomization: '3. STILE VISIVO & PERSONALIZZAZIONE',
      livePreview: 'Anteprima in Tempo Reale',
      downloadPng: 'Scarica PNG',
      downloadSvg: 'Vettoriale SVG',
      downloadJpg: 'JPG',
      saveQr: 'Salva',
      copyImage: 'Copia',
      reset: 'Reimposta',
      resolution: '512 × 512 px',
      emptyPrompt: 'Inserisci i dati per generare l\'anteprima.',
      staticMode: 'QR Statico',
      dynamicMode: 'QR Dinamico',
      staticNotice: 'Dati diretti, non scade mai, senza reindirizzamento.',
      dynamicNotice: 'Destinazione modificabile + statistiche di scansione in tempo reale.',
    },
    tabs: {
      presets: 'Modelli',
      colors: 'Colori',
      shapes: 'Forme & Occhi',
      logo: 'Logo',
      size: 'Dimensioni & Margine',
    },
    customization: {
      foreground: 'Colore Principale',
      background: 'Colore di Sfondo',
      transparent: 'Sfondo Trasparente',
      dotPattern: 'Forma dei Punti',
      cornerFrame: 'Cornice Occhio',
      cornerDot: 'Punto Occhio',
      uploadLogo: 'Carica Logo Centrale',
      hideBackgroundDots: 'Nascondi Punti Sotto il Logo',
      logoSize: 'Scala del Logo',
      exportResolution: 'Risoluzione di Esportazione',
      errorCorrection: 'Livello di Correzione Errori',
      margin: 'Margine di Sicurezza',
    },
    warnings: {
      lowContrast: 'Basso contrasto: la scansione con fotocamera potrebbe essere difficoltosa.',
      complexPattern: 'Matrice densa: mantieni una dimensione di stampa di almeno 25 mm.',
      largeLogo: 'Logo grande: imposta la correzione degli errori su Alto (H).',
    },
    footer: {
      description: 'Generatore di codici QR ad alta risoluzione con link dinamici, pagine di destinazione mobili e analisi delle scansioni in tempo reale.',
      clientEngine: 'Motore 100% Lato Browser',
      edgeRedirects: 'Reindirizzamenti Edge Ultra-Rapidi',
      generatorsHeader: 'Generatori QR',
      useCasesHeader: 'Casi d\'Uso',
      guidesHeader: 'Guide & Risorse',
      platformHeader: 'Piattaforma & Note Legali',
      allRightsReserved: 'Tutti i diritti riservati.',
      noAppNeeded: 'Nessuna app richiesta',
      runsLocally: 'Funziona al 100% nel tuo browser',
    },
    common: {
      home: 'Home',
      privacy: 'Informativa sulla Privacy',
      terms: 'Termini di Servizio',
      disclaimer: 'Disclaimer',
      contact: 'Contattaci',
      back: 'Indietro',
      cancel: 'Annulla',
      confirm: 'Conferma',
      loading: 'Caricamento...',
      success: 'Operazione completata',
      error: 'Si è verificato un errore',
    },
  },
  hi: {
    brand: {
      title: 'QR जेनरेटर',
      subtitle: 'हाई-रिज़ॉल्यूशन वेक्टर SVG और PNG',
      badge: 'मुफ़्त',
    },
    nav: {
      generators: 'जेनरेटर',
      businessCards: 'डिजिटल विज़िटिंग कार्ड',
      menus: 'डिजिटल मेन्यू',
      calculators: 'कैलकुलेटर',
      sizeCalc: 'क्यूआर आकार कैलकुलेटर',
      printCalc: 'प्रिंट आकार व DPI',
      guides: 'गाइड्स',
      pricing: 'प्लान व मूल्य',
      dashboard: 'डैशबोर्ड',
      admin: 'एडमिन',
      login: 'लॉग इन',
      signup: 'साइन अप',
    },
    generator: {
      selectType: '1. QR कोड का प्रकार चुनें',
      enterDetails: '2. आवश्यक जानकारी भरें',
      styleCustomization: '3. डिज़ाइन और कस्टमाइज़ेशन',
      livePreview: 'लाइव प्रिव्यू',
      downloadPng: 'PNG डाउनलोड करें',
      downloadSvg: 'वेक्टर SVG',
      downloadJpg: 'JPG',
      saveQr: 'सुरक्षित करें',
      copyImage: 'कॉपी करें',
      reset: 'रीसेट करें',
      resolution: '512 × 512 पिक्सल',
      emptyPrompt: 'प्रिव्यू देखने के लिए विवरण दर्ज करें।',
      staticMode: 'स्टैटिक QR',
      dynamicMode: 'डायनेमिक QR',
      staticNotice: 'सीधा डेटा, कभी एक्सपायर नहीं होता, कोई रीडायरेक्ट नहीं।',
      dynamicNotice: 'एडिटेबल लिंक + रियल-टाइम स्कैन एनालिटिक्स।',
    },
    tabs: {
      presets: 'थीम्स',
      colors: 'रंग',
      shapes: 'शेप्स व आँखें',
      logo: 'लोगो',
      size: 'साइज़ व मार्जिन',
    },
    customization: {
      foreground: 'QR कोड का रंग',
      background: 'बैकग्राउंड का रंग',
      transparent: 'पारदर्शी बैकग्राउंड',
      dotPattern: 'डॉट पैटर्न का आकार',
      cornerFrame: 'कॉर्नर आई फ्रेम',
      cornerDot: 'कॉर्नर आई डॉट',
      uploadLogo: 'सेंटर लोगो अपलोड करें',
      hideBackgroundDots: 'लोगो के पीछे डॉट्स हटाएं',
      logoSize: 'लोगो का साइज़ अनुपात',
      exportResolution: 'कैनवस एक्सपोर्ट रिज़ॉल्यूशन',
      errorCorrection: 'एरर करेक्शन लेवल',
      margin: 'क्वाइट ज़ोन मार्जिन',
    },
    warnings: {
      lowContrast: 'कम कंट्रास्ट: कैमरे से स्कैन करने में समस्या आ सकती है।',
      complexPattern: 'घना QR कोड: प्रिंट करते समय कम से कम 25 मिमी आकार रखें।',
      largeLogo: 'बड़ा लोगो: एरर करेक्शन को हाई (H) पर सेट करें।',
    },
    footer: {
      description: 'डायनेमिक शॉर्ट लिंक्स, मोबाइल लैंडिंग पेजों और रियल-टाइम स्कैन एनालिटिक्स के साथ हाई-रिज़ॉल्यूशन QR कोड जेनरेटर।',
      clientEngine: '100% क्लाइंट-साइड ब्राउज़र इंजन',
      edgeRedirects: 'एज-पावर्ड सुपरफ़ास्ट रीडायरेक्ट्स',
      generatorsHeader: 'QR टूल्स',
      useCasesHeader: 'उपयोग के तरीके',
      guidesHeader: 'गाइड्स व संसाधन',
      platformHeader: 'प्लेटफ़ॉर्म व नीतियाँ',
      allRightsReserved: 'सर्वाधिकार सुरक्षित।',
      noAppNeeded: 'किसी ऐप की आवश्यकता नहीं',
      runsLocally: 'ब्राउज़र में 100% सुरक्षित चलता है',
    },
    common: {
      home: 'होम',
      privacy: 'गोपनीयता नीति',
      terms: 'सेवा की शर्तें',
      disclaimer: 'अस्वीकरण',
      contact: 'संपर्क करें',
      back: 'वापस जाएं',
      cancel: 'रद्द करें',
      confirm: 'पुष्टि करें',
      loading: 'लोड हो रहा है...',
      success: 'सफलतापूर्वक पूरा हुआ',
      error: 'त्रुटि उत्पन्न हुई',
    },
  },
};

export function getUITranslations(locale: Locale): UIDictionary {
  return UI_TRANSLATIONS[locale] || UI_TRANSLATIONS.en;
}
