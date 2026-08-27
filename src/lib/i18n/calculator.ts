import type { Locale } from './config';

export interface CalculatorTranslations {
  size: {
    badge: string;
    title: string;
    description: string;
    inputsTitle: string;
    inputsDesc: string;
    distanceLabel: string;
    distancePlaceholder: string;
    contentTypeLabel: string;
    ecLabel: string;
    dpiLabel: string;
    presetsLabel: string;
    resultsTitle: string;
    resultsDesc: string;
    recommendedSize: string;
    minSize: string;
    maxSize: string;
    idealDistance: string;
    moduleDimensions: string;
    quietZone: string;
    rasterPixels: string;
    dpiTableTitle: string;
    dpiCol: string;
    pixelsCol: string;
    useCaseCol: string;
    guidelinesTitle: string;
    disclaimer: string;
    presets: {
      businessCard: string;
      tableMenu: string;
      flyer: string;
      poster: string;
      windowSign: string;
      billboard: string;
    };
    contentTypes: {
      shortUrl: string;
      url: string;
      wifi: string;
      vcard: string;
      text: string;
      app: string;
    };
    units: {
      m: string;
      cm: string;
      ft: string;
      in: string;
    };
    warnings: {
      tooSmall: string;
      denseMatrix: string;
      highEC: string;
    };
  };
  print: {
    badge: string;
    title: string;
    description: string;
    inputsTitle: string;
    inputsDesc: string;
    widthLabel: string;
    heightLabel: string;
    unitLabel: string;
    dpiLabel: string;
    presetsLabel: string;
    resultsTitle: string;
    resultsDesc: string;
    pixelDimensions: string;
    recommendedDpi: string;
    maxScanDistance: string;
    vectorRecommendation: string;
    svgBenefit: string;
    prepressChecklistTitle: string;
    readinessCardTitle: string;
    statusReady: string;
    statusWarning: string;
    checklist: {
      contrast: string;
      quietZone: string;
      finish: string;
      vector: string;
      testScan: string;
    };
    presets: {
      businessCard: string;
      flyer: string;
      menu: string;
      packaging: string;
      poster: string;
      windowSign: string;
      banner: string;
      billboard: string;
    };
  };
}

export const CALCULATOR_TRANSLATIONS: Record<Locale, CalculatorTranslations> = {
  en: {
    size: {
      badge: '📏 Optical Sizing Tool',
      title: 'QR Code Size Calculator',
      description: 'Calculate the optimal physical dimensions, module size, and raster resolution based on real-world scanning distance and content complexity.',
      inputsTitle: 'QR Code Size Calculator Inputs',
      inputsDesc: 'Enter your viewing distance and content type to calculate recommended physical and raster dimensions.',
      distanceLabel: 'A. Expected Scan Distance',
      distancePlaceholder: 'e.g. 1',
      contentTypeLabel: 'B. QR Content Type / Density',
      ecLabel: 'C. Error Correction Level',
      dpiLabel: 'D. Print Resolution (DPI)',
      presetsLabel: 'Quick Distance Presets:',
      resultsTitle: 'Recommended Sizing Results',
      resultsDesc: 'Engineered using optical 10:1 ratio baseline with density and error correction scaling.',
      recommendedSize: 'Recommended Physical Size',
      minSize: 'Minimum Physical Limit',
      maxSize: 'Optimal Comfort Size',
      idealDistance: 'Tested Scan Range',
      moduleDimensions: 'QR Matrix Complexity',
      quietZone: 'Quiet Zone Margin (4 Modules)',
      rasterPixels: 'Raster Pixel Dimensions',
      dpiTableTitle: 'Resolution vs Required Pixels',
      dpiCol: 'Print Resolution',
      pixelsCol: 'Required Pixels',
      useCaseCol: 'Best Used For',
      guidelinesTitle: 'Optical Scanning Guidelines',
      disclaimer: 'Calculated using ISO/IEC 18004 optical scannability benchmarks.',
      presets: {
        businessCard: 'Business Card (0.3m)',
        tableMenu: 'Tabletop Menu (0.5m)',
        flyer: 'Flyer / Handout (0.6m)',
        poster: 'Wall Poster (1.5m)',
        windowSign: 'Storefront Window (2.5m)',
        billboard: 'Outdoor Billboard (10m)',
      },
      contentTypes: {
        shortUrl: 'Short URL (Dynamic QR - Low Density)',
        url: 'Standard Website URL (Medium Density)',
        wifi: 'Wi-Fi Network Credentials (Medium Density)',
        vcard: 'vCard Digital Business Card (High Density)',
        text: 'Plain Text Note (High Density)',
        app: 'App Store Download Link (Medium Density)',
      },
      units: {
        m: 'Meters (m)',
        cm: 'Centimeters (cm)',
        ft: 'Feet (ft)',
        in: 'Inches (in)',
      },
      warnings: {
        tooSmall: 'Warning: Physical size is below 2.0 cm safety baseline.',
        denseMatrix: 'Dense payload: Increase print size for reliable scanning.',
        highEC: 'Level H error correction adds extra module dots.',
      },
    },
    print: {
      badge: '🖨️ Prepress Print Calculator',
      title: 'QR Code Print Size Calculator',
      description: 'Ensure razor-sharp commercial print output. Calculate exact pixel dimensions at 300 DPI, module thickness, and prepress quality metrics for any print medium.',
      inputsTitle: 'Print Size & DPI Inputs',
      inputsDesc: 'Specify target physical dimensions and printer DPI to calculate exact raster pixels and vector requirements.',
      widthLabel: 'A. Physical Width',
      heightLabel: 'B. Physical Height',
      unitLabel: 'C. Measurement Unit',
      dpiLabel: 'D. Target Printer DPI',
      presetsLabel: 'Standard Commercial Presets:',
      resultsTitle: 'Print Prepress Specifications',
      resultsDesc: 'Accurate pixel dimensions and vector prepress analysis for commercial offset and digital presses.',
      pixelDimensions: 'Required Raster Pixels',
      recommendedDpi: 'Recommended Printer DPI',
      maxScanDistance: 'Estimated Max Scan Distance',
      vectorRecommendation: 'Recommended Prepress File Format',
      svgBenefit: 'Vector SVG eliminates pixelation at any print scale.',
      prepressChecklistTitle: 'Pre-Flight Print Checklist',
      readinessCardTitle: 'Commercial Print Readiness',
      statusReady: 'Print Ready (300+ DPI)',
      statusWarning: 'Low DPI Warning (< 150 DPI)',
      checklist: {
        contrast: 'High Optical Contrast (Dark dots on solid light background)',
        quietZone: '4-Module Quiet Zone unobstructed on all 4 sides',
        finish: 'Matte or soft-touch paper stock (avoid reflective metallic finish)',
        vector: 'Export in Vector SVG format for commercial RIP processors',
        testScan: 'Scan physical printed proof with iOS & Android camera before mass run',
      },
      presets: {
        businessCard: 'Business Card (3.0 × 3.0 cm)',
        flyer: 'Flyer / Brochure (5.0 × 5.0 cm)',
        menu: 'Tabletop Menu (6.0 × 6.0 cm)',
        packaging: 'Product Packaging (3.5 × 3.5 cm)',
        poster: 'Wall Poster (15.0 × 15.0 cm)',
        windowSign: 'Window Display (20.0 × 20.0 cm)',
        banner: 'Rollup Banner (30.0 × 30.0 cm)',
        billboard: 'Outdoor Billboard (100 × 100 cm)',
      },
    },
  },
  es: {
    size: {
      badge: '📏 Herramienta de Dimensiones Ópticas',
      title: 'Calculadora de Tamaño de Código QR',
      description: 'Calcula las dimensiones físicas óptimas, el tamaño de módulo y la resolución en píxeles según la distancia de lectura y complejidad de datos.',
      inputsTitle: 'Parámetros de Cálculo de Tamaño QR',
      inputsDesc: 'Introduce la distancia de visión y el tipo de contenido para calcular las medidas físicas y en píxeles recomendadas.',
      distanceLabel: 'A. Distancia Prevista de Escaneo',
      distancePlaceholder: 'ej. 1',
      contentTypeLabel: 'B. Tipo de Contenido / Densidad QR',
      ecLabel: 'C. Nivel de Corrección de Errores',
      dpiLabel: 'D. Resolución de Impresión (DPI)',
      presetsLabel: 'Ajustes Rápidos de Distancia:',
      resultsTitle: 'Resultados de Tamaño Recomendados',
      resultsDesc: 'Diseñado utilizando el modelo de relación 10:1 con ajuste por densidad y corrección de errores.',
      recommendedSize: 'Tamaño Físico Recomendado',
      minSize: 'Límite Físico Mínimo',
      maxSize: 'Tamaño de Confort Óptimo',
      idealDistance: 'Rango de Escaneo Probado',
      moduleDimensions: 'Complejidad de Matriz QR',
      quietZone: 'Margen de Seguridad (4 Módulos)',
      rasterPixels: 'Dimensiones en Píxeles',
      dpiTableTitle: 'Resolución vs Píxeles Requeridos',
      dpiCol: 'Resolución de Impresión',
      pixelsCol: 'Píxeles Necesarios',
      useCaseCol: 'Mejor Uso Para',
      guidelinesTitle: 'Directrices de Escaneo Óptico',
      disclaimer: 'Calculado según los estándares de lectura óptica ISO/IEC 18004.',
      presets: {
        businessCard: 'Tarjeta de Visita (0,3 m)',
        tableMenu: 'Menú de Mesa (0,5 m)',
        flyer: 'Folleto / Flyer (0,6 m)',
        poster: 'Cartel de Pared (1,5 m)',
        windowSign: 'Escaparate (2,5 m)',
        billboard: 'Valla Exterior (10 m)',
      },
      contentTypes: {
        shortUrl: 'URL Corta (QR Dinámico - Baja Densidad)',
        url: 'Enlace Web Estándar (Densidad Media)',
        wifi: 'Claves de Red Wi-Fi (Densidad Media)',
        vcard: 'Tarjeta vCard Completa (Alta Densidad)',
        text: 'Texto Plano (Alta Densidad)',
        app: 'Enlace a App Store (Densidad Media)',
      },
      units: {
        m: 'Metros (m)',
        cm: 'Centímetros (cm)',
        ft: 'Pies (ft)',
        in: 'Pulgadas (in)',
      },
      warnings: {
        tooSmall: 'Aviso: El tamaño físico es inferior al límite de seguridad de 2,0 cm.',
        denseMatrix: 'Datos densos: Aumenta el tamaño de impresión para un escaneo fluido.',
        highEC: 'La corrección de errores Nivel H añade módulos adicionales.',
      },
    },
    print: {
      badge: '🖨️ Calculadora de Impresión y Preimpresión',
      title: 'Calculadora de Tamaño de Impresión de Código QR',
      description: 'Garantiza una nitidez perfecta en imprenta comercial. Calcula píxeles exactos a 300 DPI, grosor de módulo y checklist de preimpresión.',
      inputsTitle: 'Parámetros de Medida y DPI',
      inputsDesc: 'Indica las dimensiones físicas finales y la resolución del impresor para obtener la cuadrícula de píxeles exacta.',
      widthLabel: 'A. Ancho Físico',
      heightLabel: 'B. Alto Físico',
      unitLabel: 'C. Unidad de Medida',
      dpiLabel: 'D. Resolución DPI del Impresor',
      presetsLabel: 'Plantillas Comerciales Estándar:',
      resultsTitle: 'Especificaciones de Imprenta Comercial',
      resultsDesc: 'Análisis de píxeles y vectorización para prensas offset y digitales profesionales.',
      pixelDimensions: 'Píxeles Ráster Requeridos',
      recommendedDpi: 'DPI Recomendado para Imprenta',
      maxScanDistance: 'Distancia Máxima de Lectura',
      vectorRecommendation: 'Formato de Archivo Recomendado',
      svgBenefit: 'El formato vectorial SVG evita pixelados a cualquier escala.',
      prepressChecklistTitle: 'Checklist de Preimpresión Profesional',
      readinessCardTitle: 'Evaluación de Calidad para Imprenta',
      statusReady: 'Listo para Imprenta (300+ DPI)',
      statusWarning: 'Aviso de Baja Resolución (< 150 DPI)',
      checklist: {
        contrast: 'Alto Contraste Óptico (Módulos oscuros sobre fondo claro sólido)',
        quietZone: 'Margen de 4 módulos libre de texto en los 4 costados',
        finish: 'Papel mate o satinado suave (evitar barniz reflectante sobre el QR)',
        vector: 'Exportar en formato vectorial SVG para RIP de imprenta',
        testScan: 'Escanear prueba impresa con iPhone y Android antes de la tirada masiva',
      },
      presets: {
        businessCard: 'Tarjeta de Visita (3,0 × 3,0 cm)',
        flyer: 'Folleto / Díptico (5,0 × 5,0 cm)',
        menu: 'Carta de Mesa (6,0 × 6,0 cm)',
        packaging: 'Packaging / Envase (3,5 × 3,5 cm)',
        poster: 'Cartel A2 / A1 (15,0 × 15,0 cm)',
        windowSign: 'Vinilo de Escaparate (20,0 × 20,0 cm)',
        banner: 'Rollup Publicitario (30,0 × 30,0 cm)',
        billboard: 'Valla Publicitaria (100 × 100 cm)',
      },
    },
  },
  de: {
    size: {
      badge: '📏 Optischer Größenrechner',
      title: 'QR-Code-Größenrechner',
      description: 'Berechnen Sie die optimale physische QR-Code-Größe und Pixelauflösung basierend auf Leseabstand, Fehlerkorrektur und Datenkomplexität.',
      inputsTitle: 'Parameter für QR-Code-Größe',
      inputsDesc: 'Geben Sie den Leseabstand und den Inhaltstyp ein, um die empfohlenen Maße zu berechnen.',
      distanceLabel: 'A. Erwarteter Scan-Abstand',
      distancePlaceholder: 'z.B. 1',
      contentTypeLabel: 'B. QR-Inhaltstyp / Datendichte',
      ecLabel: 'C. Fehlerkorrektur-Level',
      dpiLabel: 'D. Druckauflösung (DPI)',
      presetsLabel: 'Schnell-Presets für Abstand:',
      resultsTitle: 'Empfohlene Abmessungen',
      resultsDesc: 'Berechnet mit optischem 10:1-Verhältnis unter Berücksichtigung von Datendichte und Fehlerkorrektur.',
      recommendedSize: 'Empfohlene physische Größe',
      minSize: 'Minimales Sicherheitsmaß',
      maxSize: 'Optimale Komfortgröße',
      idealDistance: 'Getestete Scan-Reichweite',
      moduleDimensions: 'QR-Matrix-Komplexität',
      quietZone: 'Ruhezonen-Rand (4 Module)',
      rasterPixels: 'Erforderliche Pixelauflösung',
      dpiTableTitle: 'Auflösung vs. Benötigte Pixel',
      dpiCol: 'Druckauflösung',
      pixelsCol: 'Benötigte Pixel',
      useCaseCol: 'Empfohlen für',
      guidelinesTitle: 'Optische Scan-Richtlinien',
      disclaimer: 'Berechnet nach den offiziellen Standards ISO/IEC 18004.',
      presets: {
        businessCard: 'Visitenkarte (0,3 m)',
        tableMenu: 'Tischaufsteller (0,5 m)',
        flyer: 'Flyer / Handzettel (0,6 m)',
        poster: 'Wandplakat (1,5 m)',
        windowSign: 'Schaufenster (2,5 m)',
        billboard: 'Großflächenplakat (10 m)',
      },
      contentTypes: {
        shortUrl: 'Kurz-URL (Dynamischer QR - Geringe Dichte)',
        url: 'Standard-Weblink (Mittlere Dichte)',
        wifi: 'WLAN-Zugangsdaten (Mittlere Dichte)',
        vcard: 'vCard Visitenkarte (Hohe Dichte)',
        text: 'Reiner Text (Hohe Dichte)',
        app: 'App Store Download-Link (Mittlere Dichte)',
      },
      units: {
        m: 'Meter (m)',
        cm: 'Zentimeter (cm)',
        ft: 'Fuß (ft)',
        in: 'Zoll (in)',
      },
      warnings: {
        tooSmall: 'Warnung: Die Größe liegt unter dem Sicherheitsmaß von 2,0 cm.',
        denseMatrix: 'Hohe Datendichte: Druckgröße für schnelles Scannen erhöhen.',
        highEC: 'Level H fügt zusätzliche Schutzmodule hinzu.',
      },
    },
    print: {
      badge: '🖨️ Druckvorstufen-Rechner',
      title: 'QR-Code-Druckgrößenrechner',
      description: 'Garantiert gestochen scharfen Druck. Berechnen Sie Pixel bei 300 DPI, Modulstärken und Druckqualitäts-Kriterien.',
      inputsTitle: 'Druckmaße & DPI-Eingaben',
      inputsDesc: 'Zielmaße und Drucker-DPI angeben, um Pixelmaße und Vektor-Anforderungen zu ermitteln.',
      widthLabel: 'A. Physische Breite',
      heightLabel: 'B. Physische Höhe',
      unitLabel: 'C. Maßeinheit',
      dpiLabel: 'D. Drucker-DPI',
      presetsLabel: 'Standard-Druckformate:',
      resultsTitle: 'Druckvorstufen-Spezifikationen',
      resultsDesc: 'Exakte Pixelabmessungen und Vektoranalyse für Offset- und Digitaldruck.',
      pixelDimensions: 'Erforderliche Pixel (Raster)',
      recommendedDpi: 'Empfohlene Druckauflösung',
      maxScanDistance: 'Maximaler Scan-Abstand',
      vectorRecommendation: 'Empfohlenes Dateiformat',
      svgBenefit: 'Vektor-SVG verhindert Qualitätsverlust bei jeder Skalierung.',
      prepressChecklistTitle: 'Pre-Flight Druck-Checkliste',
      readinessCardTitle: 'Druckreife-Bewertung',
      statusReady: 'Druckfertig (300+ DPI)',
      statusWarning: 'Geringe Auflösung (< 150 DPI)',
      checklist: {
        contrast: 'Hoher optischer Kontrast (Dunkle Punkte auf hellem Grund)',
        quietZone: '4-Modul Ruhezone auf allen 4 Seiten frei halten',
        finish: 'Mattes Papier bevorzugen (reflektierende Glanzfolien vermeiden)',
        vector: 'Vektor-SVG für professionelle Druck-RIPs exportieren',
        testScan: 'Druckmuster vor Großauflage mit iOS & Android scannen',
      },
      presets: {
        businessCard: 'Visitenkarte (3,0 × 3,0 cm)',
        flyer: 'Flyer / Broschüre (5,0 × 5,0 cm)',
        menu: 'Tischaufsteller (6,0 × 6,0 cm)',
        packaging: 'Produktverpackung (3,5 × 3,5 cm)',
        poster: 'Plakat A2 / A1 (15,0 × 15,0 cm)',
        windowSign: 'Schaufenster-Aufkleber (20,0 × 20,0 cm)',
        banner: 'Rollup-Banner (30,0 × 30,0 cm)',
        billboard: 'Großflächenplakat (100 × 100 cm)',
      },
    },
  },
  fr: {
    size: {
      badge: '📏 Outil de Dimensionnement Optique',
      title: 'Calculateur de Taille de QR Code',
      description: 'Calculez la taille physique idéale, la taille des modules et la résolution en pixels en fonction de la distance de lecture et de la complexité.',
      inputsTitle: 'Paramètres de Dimensionnement QR Code',
      inputsDesc: 'Entrez la distance de lecture et le type de contenu pour calculer les dimensions idéales.',
      distanceLabel: 'A. Distance de Lecture Prévue',
      distancePlaceholder: 'ex. 1',
      contentTypeLabel: 'B. Type de Contenu / Densité',
      ecLabel: 'C. Niveau de Correction d\'Erreur',
      dpiLabel: 'D. Résolution d\'Impression (DPI)',
      presetsLabel: 'Préréglages de Distance :',
      resultsTitle: 'Dimensions Recommandées',
      resultsDesc: 'Calculé avec un ratio optique de base 10:1 ajusté selon la densité et la correction d\'erreur.',
      recommendedSize: 'Taille Physique Recommandée',
      minSize: 'Limite Physique Minimale',
      maxSize: 'Taille de Confort Optimale',
      idealDistance: 'Portée de Numérisation Testée',
      moduleDimensions: 'Complexité de la Matrice QR',
      quietZone: 'Marge de Sécurité (4 Modules)',
      rasterPixels: 'Dimensions en Pixels',
      dpiTableTitle: 'Résolution vs Pixels Requis',
      dpiCol: 'Résolution',
      pixelsCol: 'Pixels Requis',
      useCaseCol: 'Utilisation Recommandée',
      guidelinesTitle: 'Règles de Lecture Optique',
      disclaimer: 'Calcul conforme aux spécifications ISO/IEC 18004.',
      presets: {
        businessCard: 'Carte de Visite (0,3 m)',
        tableMenu: 'Chevalet de Table (0,5 m)',
        flyer: 'Prospectus / Flyer (0,6 m)',
        poster: 'Affiche Murale (1,5 m)',
        windowSign: 'Vitrine de Magasin (2,5 m)',
        billboard: 'Panneau d\'Affichage (10 m)',
      },
      contentTypes: {
        shortUrl: 'URL Courte (QR Dynamique - Faible Densité)',
        url: 'Lien Web Standard (Densité Moyenne)',
        wifi: 'Identifiants Wi-Fi (Densité Moyenne)',
        vcard: 'Carte de Visite vCard (Forte Densité)',
        text: 'Texte Brut (Forte Densité)',
        app: 'Téléchargement d\'App (Densité Moyenne)',
      },
      units: {
        m: 'Mètres (m)',
        cm: 'Centimètres (cm)',
        ft: 'Pieds (ft)',
        in: 'Pouces (in)',
      },
      warnings: {
        tooSmall: 'Attention : La dimension physique est sous le seuil de 2,0 cm.',
        denseMatrix: 'Données denses : Augmentez la taille pour une lecture fluide.',
        highEC: 'Le niveau H ajoute des modules de protection supplémentaires.',
      },
    },
    print: {
      badge: '🖨️ Calculateur Pré-Presse & Imprimerie',
      title: 'Calculateur de Taille d\'Impression QR Code',
      description: 'Assurez une netteté parfaite à l\'impression. Calculez les pixels exacts à 300 DPI, l\'épaisseur des modules et le checklist prépresse.',
      inputsTitle: 'Dimensions & Résolution DPI',
      inputsDesc: 'Spécifiez les dimensions physiques et les DPI de l\'imprimeur pour obtenir la grille exacte.',
      widthLabel: 'A. Largeur Physique',
      heightLabel: 'B. Hauteur Physique',
      unitLabel: 'C. Unité de Mesure',
      dpiLabel: 'D. DPI de l\'Imprimeur',
      presetsLabel: 'Formats Commerciaux Types :',
      resultsTitle: 'Spécifications Pré-Presse',
      resultsDesc: 'Analyse vectorielle et dimensions en pixels pour presses offset et numériques.',
      pixelDimensions: 'Pixels Requis (Image Raster)',
      recommendedDpi: 'DPI Recommandé',
      maxScanDistance: 'Distance de Numérisation Max',
      vectorRecommendation: 'Format de Fichier Recommandé',
      svgBenefit: 'Le format vectoriel SVG élimine toute pixellisation.',
      prepressChecklistTitle: 'Checklist de Contrôle Pré-Presse',
      readinessCardTitle: 'Évaluation Qualité Imprimerie',
      statusReady: 'Prêt pour l\'Impression (300+ DPI)',
      statusWarning: 'Résolution Faible (< 150 DPI)',
      checklist: {
        contrast: 'Contraste Optique Élevé (Modules foncés sur fond clair uniforme)',
        quietZone: 'Marge de 4 modules dégagée sur les 4 côtés',
        finish: 'Papier mat ou satiné (éviter les vernis brillants réflectifs)',
        vector: 'Export vectoriel SVG pour les processeurs RIP professionnels',
        testScan: 'Testez l\'épreuve imprimée avec iPhone & Android avant le tirage',
      },
      presets: {
        businessCard: 'Carte de Visite (3,0 × 3,0 cm)',
        flyer: 'Flyer / Dépliant (5,0 × 5,0 cm)',
        menu: 'Menu de Table (6,0 × 6,0 cm)',
        packaging: 'Emballage / Packaging (3,5 × 3,5 cm)',
        poster: 'Affiche A2 / A1 (15,0 × 15,0 cm)',
        windowSign: 'Vitrophanie (20,0 × 20,0 cm)',
        banner: 'Roll-Up Événementiel (30,0 × 30,0 cm)',
        billboard: 'Panneau 4×3 (100 × 100 cm)',
      },
    },
  },
  pt: {
    size: {
      badge: '📏 Ferramenta de Dimensionamento Óptico',
      title: 'Calculadora de Tamanho de QR Code',
      description: 'Calcule as dimensões físicas recomendadas, tamanho dos módulos e resolução em pixels com base na distância de leitura e densidade dos dados.',
      inputsTitle: 'Parâmetros de Cálculo de Tamanho',
      inputsDesc: 'Informe a distância de leitura e o tipo de conteúdo para calcular as medidas físicas e em pixels ideais.',
      distanceLabel: 'A. Distância Prevista de Leitura',
      distancePlaceholder: 'ex. 1',
      contentTypeLabel: 'B. Tipo de Conteúdo / Densidade',
      ecLabel: 'C. Nível de Correção de Erros',
      dpiLabel: 'D. Resolução de Impressão (DPI)',
      presetsLabel: 'Ajustes Rápidos de Distância:',
      resultsTitle: 'Dimensões Recomendadas',
      resultsDesc: 'Calculado com modelo de proporção 10:1 ajustado por densidade e nível de correção.',
      recommendedSize: 'Tamanho Físico Recomendado',
      minSize: 'Limite Físico Mínimo',
      maxSize: 'Tamanho de Conforto Ideal',
      idealDistance: 'Alcance de Leitura Testado',
      moduleDimensions: 'Complexidade da Matriz QR',
      quietZone: 'Margem de Segurança (4 Módulos)',
      rasterPixels: 'Dimensões em Pixels',
      dpiTableTitle: 'Resolução vs Pixels Necessários',
      dpiCol: 'Resolução de Impressão',
      pixelsCol: 'Pixels Necessários',
      useCaseCol: 'Melhor Utilizado Para',
      guidelinesTitle: 'Diretrizes de Leitura Óptica',
      disclaimer: 'Cálculo em conformidade com as normas ISO/IEC 18004.',
      presets: {
        businessCard: 'Cartão de Visita (0,3 m)',
        tableMenu: 'Cardápio de Mesa (0,5 m)',
        flyer: 'Panfleto / Flyer (0,6 m)',
        poster: 'Cartaz de Parede (1,5 m)',
        windowSign: 'Vitrine de Loja (2,5 m)',
        billboard: 'Outdoor Exterior (10 m)',
      },
      contentTypes: {
        shortUrl: 'URL Curta (QR Dinâmico - Baixa Densidade)',
        url: 'Link de Site Padrão (Média Densidade)',
        wifi: 'Dados de Rede Wi-Fi (Média Densidade)',
        vcard: 'Cartão de Visita vCard (Alta Densidade)',
        text: 'Texto Simples (Alta Densidade)',
        app: 'Link da App Store (Média Densidade)',
      },
      units: {
        m: 'Metros (m)',
        cm: 'Centímetros (cm)',
        ft: 'Pés (ft)',
        in: 'Polegadas (in)',
      },
      warnings: {
        tooSmall: 'Aviso: O tamanho físico está abaixo do limite seguro de 2,0 cm.',
        denseMatrix: 'Dados densos: Aumente o tamanho para leitura rápida.',
        highEC: 'O nível H adiciona módulos extras de segurança.',
      },
    },
    print: {
      badge: '🖨️ Calculadora de Pré-Impressão',
      title: 'Calculadora de Tamanho de Impressão de QR Code',
      description: 'Garanta máxima nitidez para gráficas. Calcule pixels exatos a 300 DPI, espessura dos módulos e checklist pré-impressão.',
      inputsTitle: 'Dimensões & Resolução DPI',
      inputsDesc: 'Informe o tamanho físico desejado e o DPI da gráfica para calcular a grade de pixels exata.',
      widthLabel: 'A. Largura Física',
      heightLabel: 'B. Altura Física',
      unitLabel: 'C. Unidade de Medida',
      dpiLabel: 'D. DPI da Impressora',
      presetsLabel: 'Formatos Comerciais Padrão:',
      resultsTitle: 'Especificações para Gráfica',
      resultsDesc: 'Análise de pixels e vetorização para impressão offset e digital profissional.',
      pixelDimensions: 'Pixels Necessários (Raster)',
      recommendedDpi: 'DPI Recomendado',
      maxScanDistance: 'Distância Máxima de Leitura',
      vectorRecommendation: 'Formato de Arquivo Recomendado',
      svgBenefit: 'O vetor SVG elimina qualquer perda de qualidade.',
      prepressChecklistTitle: 'Checklist de Pré-Impressão',
      readinessCardTitle: 'Avaliação para Impressão Gráfica',
      statusReady: 'Pronto para Gráfica (300+ DPI)',
      statusWarning: 'Resolução Baixa (< 150 DPI)',
      checklist: {
        contrast: 'Alto Contraste Óptico (Módulos escuros em fundo claro sólido)',
        quietZone: 'Margem de 4 módulos desobstruída nos 4 lados',
        finish: 'Papel fosco ou acetinado (evitar películas altamente reflexivas)',
        vector: 'Exportar em vetor SVG para sistemas RIP de gráfica',
        testScan: 'Testar prova impressa com iPhone e Android antes da tiragem final',
      },
      presets: {
        businessCard: 'Cartão de Visita (3,0 × 3,0 cm)',
        flyer: 'Panfleto / Folheto (5,0 × 5,0 cm)',
        menu: 'Display de Mesa (6,0 × 6,0 cm)',
        packaging: 'Embalagem de Produto (3,5 × 3,5 cm)',
        poster: 'Cartaz A2 / A1 (15,0 × 15,0 cm)',
        windowSign: 'Adesivo de Vitrine (20,0 × 20,0 cm)',
        banner: 'Banner Rollup (30,0 × 30,0 cm)',
        billboard: 'Outdoor Comercial (100 × 100 cm)',
      },
    },
  },
  it: {
    size: {
      badge: '📏 Calcolatore Dimensioni Ottiche',
      title: 'Calcolatore Dimensioni QR Code',
      description: 'Calcola le dimensioni fisiche ideali, la dimensione dei moduli e la risoluzione in pixel in base alla distanza di lettura e alla complessità dei dati.',
      inputsTitle: 'Parametri Calcolo Dimensioni QR',
      inputsDesc: 'Inserisci la distanza di lettura e il tipo di contenuto per calcolare le misure consigliate.',
      distanceLabel: 'A. Distanza Prevista di Scansione',
      distancePlaceholder: 'es. 1',
      contentTypeLabel: 'B. Tipo di Contenuto / Densità',
      ecLabel: 'C. Livello Correzione Errori',
      dpiLabel: 'D. Risoluzione di Stampa (DPI)',
      presetsLabel: 'Distanze Predefinite:',
      resultsTitle: 'Dimensioni Consigliate',
      resultsDesc: 'Calcolato con il modello di proporzione 10:1 calibrato su densità e correzione errori.',
      recommendedSize: 'Dimensione Fisica Consigliata',
      minSize: 'Limite Minimo di Sicurezza',
      maxSize: 'Dimensione Ottimale di Comfort',
      idealDistance: 'Raggio di Scansione Testato',
      moduleDimensions: 'Complessità Matrice QR',
      quietZone: 'Margine di Sicurezza (4 Moduli)',
      rasterPixels: 'Dimensioni in Pixel',
      dpiTableTitle: 'Risoluzione vs Pixel Richiesti',
      dpiCol: 'Risoluzione di Stampa',
      pixelsCol: 'Pixel Richiesti',
      useCaseCol: 'Ideale Per',
      guidelinesTitle: 'Linee Guida di Scansione',
      disclaimer: 'Calcolo conforme agli standard internazionali ISO/IEC 18004.',
      presets: {
        businessCard: 'Biglietto da Visita (0,3 m)',
        tableMenu: 'Cavaliere da Tavolo (0,5 m)',
        flyer: 'Volantino / Flyer (0,6 m)',
        poster: 'Poster da Parete (1,5 m)',
        windowSign: 'Vetrina Negozio (2,5 m)',
        billboard: 'Cartellone Stradale (10 m)',
      },
      contentTypes: {
        shortUrl: 'URL Breve (QR Dinamico - Bassa Densità)',
        url: 'Link Web Standard (Media Densità)',
        wifi: 'Credenziali Wi-Fi (Media Densità)',
        vcard: 'Biglietto vCard Completo (Alta Densità)',
        text: 'Testo Semplice (Alta Densità)',
        app: 'Download App Store (Media Densità)',
      },
      units: {
        m: 'Metri (m)',
        cm: 'Centimetri (cm)',
        ft: 'Piedi (ft)',
        in: 'Pollici (in)',
      },
      warnings: {
        tooSmall: 'Attenzione: La dimensione fisica è inferiore al limite di sicurezza di 2,0 cm.',
        denseMatrix: 'Dati densi: Aumenta la dimensione per una lettura rapida.',
        highEC: 'Il livello H inserisce moduli di protezione aggiuntivi.',
      },
    },
    print: {
      badge: '🖨️ Calcolatore Pre-Stampa & Tipografia',
      title: 'Calcolatore Dimensioni Stampa QR Code',
      description: 'Assicura massima nitidezza in tipografia. Calcola i pixel esatti a 300 DPI, lo spessore dei moduli e la checklist di pre-stampa.',
      inputsTitle: 'Misure Fisiche & Risoluzione DPI',
      inputsDesc: 'Specifica le misure finali e i DPI della stampante per ottenere la griglia in pixel esatta.',
      widthLabel: 'A. Larghezza Fisica',
      heightLabel: 'B. Altezza Fisica',
      unitLabel: 'C. Unità di Misura',
      dpiLabel: 'D. DPI di Stampa',
      presetsLabel: 'Formati Commerciali Standard:',
      resultsTitle: 'Specifiche per la Tipografia',
      resultsDesc: 'Analisi vettoriale e dimensioni in pixel per stampe offset e digitali professionali.',
      pixelDimensions: 'Pixel Richiesti (Immagine Raster)',
      recommendedDpi: 'DPI Consigliato',
      maxScanDistance: 'Distanza Massima di Scansione',
      vectorRecommendation: 'Formato File Consigliato',
      svgBenefit: 'Il formato vettoriale SVG elimina ogni tipo di sgranatura.',
      prepressChecklistTitle: 'Checklist di Controllo Pre-Stampa',
      readinessCardTitle: 'Valutazione Qualità di Stampa',
      statusReady: 'Pronto per la Stampa (300+ DPI)',
      statusWarning: 'Bassa Risoluzione (< 150 DPI)',
      checklist: {
        contrast: 'Alto Contrasto Ottico (Moduli scuri su sfondo chiaro uniforme)',
        quietZone: 'Margine di 4 moduli libero su tutti e 4 i lati',
        finish: 'Carta opaca o satinata (evitare verniciature riflettenti sul QR)',
        vector: 'Esportare in SVG vettoriale per i RIP di stampa professionali',
        testScan: 'Scansionare la prova stampata con iPhone e Android prima della tiratura finale',
      },
      presets: {
        businessCard: 'Biglietto da Visita (3,0 × 3,0 cm)',
        flyer: 'Volantino / Dépliant (5,0 × 5,0 cm)',
        menu: 'Menu da Tavolo (6,0 × 6,0 cm)',
        packaging: 'Packaging Prodotto (3,5 × 3,5 cm)',
        poster: 'Poster A2 / A1 (15,0 × 15,0 cm)',
        windowSign: 'Vetrofania (20,0 × 20,0 cm)',
        banner: 'Rollup Pubblicitario (30,0 × 30,0 cm)',
        billboard: 'Cartellone 6×3 (100 × 100 cm)',
      },
    },
  },
  hi: {
    size: {
      badge: '📏 ऑप्टिकल साइज़ कैलकुलेटर',
      title: 'क्यूआर कोड आकार कैलकुलेटर',
      description: 'स्कैनिंग दूरी और डेटा घनत्व के आधार पर अपने क्यूआर कोड का सही भौतिक आकार, मॉड्यूल साइज़ और पिक्सेल रिज़ॉल्यूशन मापें।',
      inputsTitle: 'क्यूआर आकार इनपुट मापदंड',
      inputsDesc: 'अनुशंसित आकार जानने के लिए दूरी और सामग्री का प्रकार दर्ज करें।',
      distanceLabel: 'A. अपेक्षित स्कैन दूरी',
      distancePlaceholder: 'जैसे 1',
      contentTypeLabel: 'B. क्यूआर सामग्री का प्रकार / डेटा घनत्व',
      ecLabel: 'C. एरर करेक्शन लेवल',
      dpiLabel: 'D. प्रिंट रिज़ॉल्यूशन (DPI)',
      presetsLabel: 'दूरी के तुरंत विकल्प:',
      resultsTitle: 'अनुशंसित आकार के परिणाम',
      resultsDesc: '10:1 अनुपात मॉडल और डेटा घनत्व के आधार पर सटीक गणना।',
      recommendedSize: 'अनुशंसित भौतिक आकार',
      minSize: 'न्यूनतम सुरक्षित साइज़',
      maxSize: 'आसान स्कैनिंग हेतु साइज़',
      idealDistance: 'परीक्षण की गई स्कैन दूरी',
      moduleDimensions: 'क्यूआर मैट्रिक्स जटिलता',
      quietZone: 'क्वाइट ज़ोन मार्जिन (4 मॉड्यूल)',
      rasterPixels: 'आवश्यक पिक्सेल माप',
      dpiTableTitle: 'रिज़ॉल्यूशन बनाम आवश्यक पिक्सेल',
      dpiCol: 'प्रिंट DPI',
      pixelsCol: 'आवश्यक पिक्सेल',
      useCaseCol: 'उपयुक्त उपयोग',
      guidelinesTitle: 'स्कैनिंग दिशानिर्देश',
      disclaimer: 'ISO/IEC 18004 अंतरराष्ट्रीय मानकों के अनुसार गणना।',
      presets: {
        businessCard: 'विज़िटिंग कार्ड (0.3 मी)',
        tableMenu: 'टेबल मेन्यू स्टैंड (0.5 मी)',
        flyer: 'पर्चे / पैम्फलेट (0.6 मी)',
        poster: 'दीवार का पोस्टर (1.5 मी)',
        windowSign: 'दुकान का बोर्ड (2.5 मी)',
        billboard: 'सड़क का होर्डिंग (10 मी)',
      },
      contentTypes: {
        shortUrl: 'शॉर्ट URL (डायनेमिक QR - कम घनत्व)',
        url: 'वेबसाइट लिंक (मध्यम घनत्व)',
        wifi: 'वाई-फ़ाई क्रेडेंशियल्स (मध्यम घनत्व)',
        vcard: 'vCard विज़िटिंग कार्ड (उच्च घनत्व)',
        text: 'साधारण टेक्स्ट (उच्च घनत्व)',
        app: 'ऐप डाउनलोड लिंक (मध्यम घनत्व)',
      },
      units: {
        m: 'मीटर (m)',
        cm: 'सेंटीमीटर (cm)',
        ft: 'फीट (ft)',
        in: 'इंच (in)',
      },
      warnings: {
        tooSmall: 'चेतावनी: भौतिक साइज़ 2.0 सेमी सुरक्षा सीमा से कम है।',
        denseMatrix: 'अधिक डेटा: तेज़ स्कैनिंग के लिए प्रिंट साइज़ बढ़ाएं।',
        highEC: 'Level H एरर करेक्शन अतिरिक्त डॉट्स जोड़ता है।',
      },
    },
    print: {
      badge: '🖨️ प्रिंट व प्रीप्रेस कैलकुलेटर',
      title: 'क्यूआर कोड प्रिंट आकार कैलकुलेटर',
      description: 'प्रिंटिंग में साफ और स्पष्ट क्वालिटी सुनिश्चित करें। 300 DPI पर पिक्सेल, मॉड्यूल की मोटाई और प्रीप्रेस गाइड मापें।',
      inputsTitle: 'प्रिंट साइज़ और DPI इनपुट',
      inputsDesc: 'सटीक पिक्सेल जानने के लिए भौतिक साइज़ और प्रिंटर DPI चुनें।',
      widthLabel: 'A. भौतिक चौड़ाई',
      heightLabel: 'B. भौतिक ऊंचाई',
      unitLabel: 'C. माप की इकाई',
      dpiLabel: 'D. प्रिंटर DPI',
      presetsLabel: 'मानक कमर्शियल प्रिंट साइज़:',
      resultsTitle: 'कमर्शियल प्रिंटिंग विवरण',
      resultsDesc: 'ऑफसेट और डिजिटल प्रिंटिंग प्रेस के लिए सटीक पिक्सेल और वेक्टर विश्लेषण।',
      pixelDimensions: 'आवश्यक पिक्सेल (Raster)',
      recommendedDpi: 'अनुशंसित प्रिंटर DPI',
      maxScanDistance: 'अधिकतम स्कैन दूरी',
      vectorRecommendation: 'अनुशंसित फ़ाइल फॉर्मेट',
      svgBenefit: 'वेक्टर SVG किसी भी साइज़ में कभी नहीं फटता।',
      prepressChecklistTitle: 'प्रिंट से पहले की चेकलिस्ट',
      readinessCardTitle: 'प्रिंटिंग क्वालिटी स्थिति',
      statusReady: 'प्रिंट के लिए तैयार (300+ DPI)',
      statusWarning: 'कम रिज़ॉल्यूशन चेतावनी (< 150 DPI)',
      checklist: {
        contrast: 'हाई कंट्रास्ट (सफ़ेद बैकग्राउंड पर गहरे रंग के डॉट्स)',
        quietZone: 'चारों तरफ 4 मॉड्यूल का साफ़ मार्जिन छोड़ें',
        finish: 'मैट या सॉफ्ट पेपर चुनें (चमकदार पन्नी से बचें)',
        vector: 'प्रिंट प्रेस के लिए हमेशा वेक्टर SVG एक्सपोर्ट करें',
        testScan: 'बड़ा प्रिंट कराने से पहले फोन कैमरे से प्रिंटेड प्रूफ टेस्ट करें',
      },
      presets: {
        businessCard: 'विज़िटिंग कार्ड (3.0 × 3.0 सेमी)',
        flyer: 'पर्चे / ब्रोशर (5.0 × 5.0 सेमी)',
        menu: 'टेबल मेन्यू (6.0 × 6.0 सेमी)',
        packaging: 'प्रोडक्ट बॉक्स (3.5 × 3.5 सेमी)',
        poster: 'दीवार का पोस्टर (15.0 × 15.0 सेमी)',
        windowSign: 'दुकान की खिड़की / विनाइल (20.0 × 20.0 सेमी)',
        banner: 'रोलअप स्टैंडी (30.0 × 30.0 सेमी)',
        billboard: 'होर्डिंग बोर्ड (100 × 100 सेमी)',
      },
    },
  },
};

export function getCalculatorTranslations(locale: Locale): CalculatorTranslations {
  return CALCULATOR_TRANSLATIONS[locale] || CALCULATOR_TRANSLATIONS.en;
}
