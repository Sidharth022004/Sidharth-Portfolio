import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'es' | 'fr' | 'de' | 'hi' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem('portfolio-language') as Language;
    if (savedLanguage && ['en', 'es', 'fr', 'de', 'hi', 'zh'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    } else {
      // Detect browser language
      const browserLang = navigator.language.split('-')[0] as Language;
      if (['en', 'es', 'fr', 'de', 'hi', 'zh'].includes(browserLang)) {
        setLanguage(browserLang);
      }
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('portfolio-language', lang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Translations object
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.cv': 'CV',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Hi, I\'m',
    'hero.name': 'Sidharth',
    'hero.tagline1': 'Aspiring Software Developer',
    'hero.tagline2': 'BCA Student & Tech Enthusiast',
    'hero.tagline3': 'Learning Full-Stack Development',
    'hero.tagline4': 'Quality Assurance Specialist',
    'hero.description': 'Currently pursuing BCA while gaining hands-on experience in web development, testing, and modern technologies. Passionate about learning and building practical solutions.',
    'hero.viewWork': 'View My Work',
    'hero.getInTouch': 'Get In Touch',
    'hero.scrollExplore': 'Scroll to explore',
    'hero.stats.years': 'Years Learning',
    'hero.stats.projects': 'Learning Projects',
    'hero.stats.dedicated': 'Committed to Growth',
    
    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'A dedicated student on a journey to become a skilled software developer',
    'about.description1': 'I\'m currently pursuing my Bachelor\'s in Computer Applications from DPG Degree College, Haryana. Through internships and self-directed learning, I\'m building practical experience in web development and quality assurance.',
    'about.description2': 'My journey includes hands-on experience in manual testing at SingleInterface and Loqal.ai, along with serving as an Internshala Student Partner. I\'m actively learning modern web technologies and development practices.',
    'about.description3': 'I believe in continuous learning and practical application. Every project and internship teaches me something new, and I\'m committed to growing into a skilled developer who can contribute meaningfully to tech teams.',
    'about.downloadResume': 'Download Resume',
    'about.viewProjects': 'View Projects',
    'about.highlights.education': 'Education',
    'about.highlights.education.desc': 'Pursuing BCA (Current)',
    'about.highlights.experience': 'Experience',
    'about.highlights.experience.desc': 'QA Testing & Learning Development',
    'about.highlights.leadership': 'Leadership',
    'about.highlights.leadership.desc': 'Internshala Student Partner',
    'about.highlights.expertise': 'Expertise',
    'about.highlights.expertise.desc': 'Manual Testing & Web Basics',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Here are some of my recent projects that showcase my skills in modern web development.',
    'projects.liveDemo': 'Live Demo',
    'projects.code': 'Code',
    'projects.viewLiveDemo': 'View Live Demo',
    'projects.viewSourceCode': 'View Source Code',
    'projects.techUsed': 'Technologies Used',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'I\'m always interested in new opportunities and exciting projects. Let\'s build something amazing together!',
    'contact.letsConnect': 'Let\'s Connect',
    'contact.description': 'Whether you have a project in mind, want to collaborate, or just want to say hello, I\'d love to hear from you. I typically respond within 24 hours.',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.responseTime': 'Response Time',
    'contact.responseDesc': 'I typically respond to all inquiries within 24-48 hours. For urgent matters, feel free to call me directly.',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!',
    'contact.form.error': 'Sorry, there was an error sending your message. Please try again or email me directly.',
    'contact.form.required': 'required',
    'contact.form.agreement': 'By sending this message, you agree that I may contact you regarding your inquiry.',
    
    // Footer
    'footer.brand': 'Sidharth.dev',
    'footer.description': 'Learning to build the future, one line of code at a time. A dedicated student passionate about technology and continuous growth.',
    'footer.quickLinks': 'Quick Links',
    'footer.connect': 'Connect',
    'footer.madeWith': 'Made with',
    'footer.using': 'using React & Tailwind CSS',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    
    // Language names
    'lang.en': 'English',
    'lang.es': 'Español',
    'lang.fr': 'Français',
    'lang.de': 'Deutsch',
    'lang.hi': 'हिन्दी',
    'lang.zh': '中文',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.projects': 'Proyectos',
    'nav.cv': 'CV',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.greeting': 'Hola, soy',
    'hero.name': 'Sidharth',
    'hero.tagline1': 'Ingeniero de Software con Integración de IA',
    'hero.tagline2': 'Solucionador de Problemas',
    'hero.tagline3': 'Entusiasta de la Tecnología',
    'hero.tagline4': 'Creador de Innovación',
    'hero.description': 'Construyendo experiencias web innovadoras con tecnologías modernas y soluciones creativas.',
    'hero.viewWork': 'Ver Mi Trabajo',
    'hero.getInTouch': 'Contactar',
    'hero.scrollExplore': 'Desplázate para explorar',
    'hero.stats.years': 'Años Aprendiendo',
    'hero.stats.projects': 'Proyectos',
    'hero.stats.dedicated': 'Dedicado',
    
    // About Section
    'about.title': 'Acerca de Mí',
    'about.subtitle': 'Apasionado por crear soluciones innovadoras a través de la tecnología',
    'about.description1': 'Soy un ingeniero de software apasionado que actualmente está cursando mi Licenciatura en Aplicaciones Informáticas en DPG Degree College, Haryana. Con experiencia práctica en desarrollo web y un gran interés en tecnologías emergentes.',
    'about.description2': 'Mi experiencia abarca Desarrollo Web, IoT e Inteligencia Artificial. He completado prácticas en SingleInterface y actualmente sirvo como Socio Estudiantil de Internshala, ayudando a otros estudiantes a navegar sus trayectorias profesionales.',
    'about.description3': 'Cuando no estoy programando, me encontrarás explorando nuevas tecnologías, participando en comunidades tecnológicas o trabajando en proyectos personales que resuelven problemas del mundo real.',
    'about.downloadResume': 'Descargar CV',
    'about.viewProjects': 'Ver Proyectos',
    'about.highlights.education': 'Educación',
    'about.highlights.education.desc': 'Licenciatura en Aplicaciones Informáticas',
    'about.highlights.experience': 'Experiencia',
    'about.highlights.experience.desc': 'Desarrollo Web e IoT',
    'about.highlights.leadership': 'Liderazgo',
    'about.highlights.leadership.desc': 'Socio Estudiantil de Internshala',
    'about.highlights.expertise': 'Experiencia',
    'about.highlights.expertise.desc': 'Desarrollo Full-Stack',
    
    // Projects Section
    'projects.title': 'Proyectos Destacados',
    'projects.subtitle': 'Aquí están algunos de mis proyectos recientes que muestran mis habilidades en desarrollo web moderno.',
    'projects.liveDemo': 'Demo en Vivo',
    'projects.code': 'Código',
    'projects.viewLiveDemo': 'Ver Demo en Vivo',
    'projects.viewSourceCode': 'Ver Código Fuente',
    'projects.techUsed': 'Tecnologías Utilizadas',
    
    // Contact Section
    'contact.title': 'Ponte en Contacto',
    'contact.subtitle': '¡Siempre estoy interesado en nuevas oportunidades y proyectos emocionantes. Construyamos algo increíble juntos!',
    'contact.letsConnect': 'Conectemos',
    'contact.description': 'Ya sea que tengas un proyecto en mente, quieras colaborar o simplemente quieras saludar, me encantaría saber de ti. Normalmente respondo dentro de 24 horas.',
    'contact.email': 'Correo',
    'contact.phone': 'Teléfono',
    'contact.location': 'Ubicación',
    'contact.responseTime': 'Tiempo de Respuesta',
    'contact.responseDesc': 'Normalmente respondo a todas las consultas dentro de 24-48 horas. Para asuntos urgentes, no dudes en llamarme directamente.',
    'contact.form.name': 'Nombre Completo',
    'contact.form.email': 'Dirección de Correo',
    'contact.form.subject': 'Asunto',
    'contact.form.message': 'Mensaje',
    'contact.form.send': 'Enviar Mensaje',
    'contact.form.sending': 'Enviando...',
    'contact.form.success': '¡Gracias! Tu mensaje ha sido enviado exitosamente. ¡Te responderé pronto!',
    'contact.form.error': 'Lo siento, hubo un error al enviar tu mensaje. Por favor intenta de nuevo o envíame un correo directamente.',
    'contact.form.required': 'requerido',
    'contact.form.agreement': 'Al enviar este mensaje, aceptas que puedo contactarte con respecto a tu consulta.',
    
    // Footer
    'footer.brand': 'Sidharth.dev',
    'footer.description': 'Construyendo el futuro, una línea de código a la vez. Apasionado por crear soluciones web innovadoras que marcan la diferencia.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.connect': 'Conectar',
    'footer.madeWith': 'Hecho con',
    'footer.using': 'usando React y Tailwind CSS',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    
    // Language names
    'lang.en': 'English',
    'lang.es': 'Español',
    'lang.fr': 'Français',
    'lang.de': 'Deutsch',
    'lang.hi': 'हिन्दी',
    'lang.zh': '中文',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.projects': 'Projets',
    'nav.cv': 'CV',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Salut, je suis',
    'hero.name': 'Sidharth',
    'hero.tagline1': 'Ingénieur Logiciel avec Intégration IA',
    'hero.tagline2': 'Résolveur de Problèmes',
    'hero.tagline3': 'Passionné de Technologie',
    'hero.tagline4': 'Créateur d\'Innovation',
    'hero.description': 'Créer des expériences web innovantes avec des technologies modernes et des solutions créatives.',
    'hero.viewWork': 'Voir Mon Travail',
    'hero.getInTouch': 'Me Contacter',
    'hero.scrollExplore': 'Faites défiler pour explorer',
    'hero.stats.years': 'Années d\'Apprentissage',
    'hero.stats.projects': 'Projets',
    'hero.stats.dedicated': 'Dévoué',
    
    // About Section
    'about.title': 'À Propos de Moi',
    'about.subtitle': 'Passionné par la création de solutions innovantes grâce à la technologie',
    'about.description1': 'Je suis un ingénieur logiciel passionné qui poursuit actuellement mon baccalauréat en applications informatiques au DPG Degree College, Haryana. Avec une expérience pratique en développement web et un vif intérêt pour les technologies émergentes.',
    'about.description2': 'Mon expertise s\'étend au développement web, à l\'IoT et à l\'intelligence artificielle. J\'ai terminé des stages chez SingleInterface et je sers actuellement en tant que partenaire étudiant Internshala, aidant d\'autres étudiants à naviguer dans leurs parcours de carrière.',
    'about.description3': 'Quand je ne code pas, vous me trouverez en train d\'explorer de nouvelles technologies, de participer à des communautés technologiques ou de travailler sur des projets personnels qui résolvent des problèmes du monde réel.',
    'about.downloadResume': 'Télécharger CV',
    'about.viewProjects': 'Voir Projets',
    'about.highlights.education': 'Éducation',
    'about.highlights.education.desc': 'Baccalauréat en Applications Informatiques',
    'about.highlights.experience': 'Expérience',
    'about.highlights.experience.desc': 'Développement Web et IoT',
    'about.highlights.leadership': 'Leadership',
    'about.highlights.leadership.desc': 'Partenaire Étudiant Internshala',
    'about.highlights.expertise': 'Expertise',
    'about.highlights.expertise.desc': 'Développement Full-Stack',
    
    // Projects Section
    'projects.title': 'Projets en Vedette',
    'projects.subtitle': 'Voici quelques-uns de mes projets récents qui montrent mes compétences en développement web moderne.',
    'projects.liveDemo': 'Démo en Direct',
    'projects.code': 'Code',
    'projects.viewLiveDemo': 'Voir Démo en Direct',
    'projects.viewSourceCode': 'Voir Code Source',
    'projects.techUsed': 'Technologies Utilisées',
    
    // Contact Section
    'contact.title': 'Entrer en Contact',
    'contact.subtitle': 'Je suis toujours intéressé par de nouvelles opportunités et des projets passionnants. Construisons quelque chose d\'incroyable ensemble !',
    'contact.letsConnect': 'Connectons-nous',
    'contact.description': 'Que vous ayez un projet en tête, que vous souhaitiez collaborer ou simplement dire bonjour, j\'aimerais avoir de vos nouvelles. Je réponds généralement dans les 24 heures.',
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.location': 'Localisation',
    'contact.responseTime': 'Temps de Réponse',
    'contact.responseDesc': 'Je réponds généralement à toutes les demandes dans les 24 à 48 heures. Pour les questions urgentes, n\'hésitez pas à m\'appeler directement.',
    'contact.form.name': 'Nom Complet',
    'contact.form.email': 'Adresse Email',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer Message',
    'contact.form.sending': 'Envoi...',
    'contact.form.success': 'Merci ! Votre message a été envoyé avec succès. Je vous répondrai bientôt !',
    'contact.form.error': 'Désolé, il y a eu une erreur lors de l\'envoi de votre message. Veuillez réessayer ou m\'envoyer un email directement.',
    'contact.form.required': 'requis',
    'contact.form.agreement': 'En envoyant ce message, vous acceptez que je puisse vous contacter concernant votre demande.',
    
    // Footer
    'footer.brand': 'Sidharth.dev',
    'footer.description': 'Construire l\'avenir, une ligne de code à la fois. Passionné par la création de solutions web innovantes qui font la différence.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.connect': 'Se Connecter',
    'footer.madeWith': 'Fait avec',
    'footer.using': 'en utilisant React et Tailwind CSS',
    'footer.rights': 'Tous droits réservés.',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions de Service',
    
    // Language names
    'lang.en': 'English',
    'lang.es': 'Español',
    'lang.fr': 'Français',
    'lang.de': 'Deutsch',
    'lang.hi': 'हिन्दी',
    'lang.zh': '中文',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.about': 'Über mich',
    'nav.projects': 'Projekte',
    'nav.cv': 'Lebenslauf',
    'nav.faq': 'FAQ',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.greeting': 'Hallo, ich bin',
    'hero.name': 'Sidharth',
    'hero.tagline1': 'Software-Ingenieur mit KI-Integration',
    'hero.tagline2': 'Problemlöser',
    'hero.tagline3': 'Technologie-Enthusiast',
    'hero.tagline4': 'Innovations-Schöpfer',
    'hero.description': 'Innovative Web-Erfahrungen mit modernen Technologien und kreativen Lösungen schaffen.',
    'hero.viewWork': 'Meine Arbeit Ansehen',
    'hero.getInTouch': 'Kontakt Aufnehmen',
    'hero.scrollExplore': 'Scrollen zum Erkunden',
    'hero.stats.years': 'Jahre Lernen',
    'hero.stats.projects': 'Projekte',
    'hero.stats.dedicated': 'Engagiert',
    
    // About Section
    'about.title': 'Über Mich',
    'about.subtitle': 'Leidenschaftlich daran interessiert, innovative Lösungen durch Technologie zu schaffen',
    'about.description1': 'Ich bin ein leidenschaftlicher Software-Ingenieur, der derzeit seinen Bachelor in Computeranwendungen am DPG Degree College, Haryana, absolviert. Mit praktischer Erfahrung in der Webentwicklung und einem großen Interesse an aufkommenden Technologien.',
    'about.description2': 'Meine Expertise erstreckt sich über Webentwicklung, IoT und Künstliche Intelligenz. Ich habe Praktika bei SingleInterface abgeschlossen und diene derzeit als Internshala Student Partner, um anderen Studenten bei der Navigation ihrer Karrierewege zu helfen.',
    'about.description3': 'Wenn ich nicht programmiere, finden Sie mich beim Erkunden neuer Technologien, bei der Teilnahme an Tech-Communities oder bei der Arbeit an persönlichen Projekten, die reale Probleme lösen.',
    'about.downloadResume': 'Lebenslauf Herunterladen',
    'about.viewProjects': 'Projekte Ansehen',
    'about.highlights.education': 'Bildung',
    'about.highlights.education.desc': 'Bachelor in Computeranwendungen',
    'about.highlights.experience': 'Erfahrung',
    'about.highlights.experience.desc': 'Webentwicklung & IoT',
    'about.highlights.leadership': 'Führung',
    'about.highlights.leadership.desc': 'Internshala Student Partner',
    'about.highlights.expertise': 'Expertise',
    'about.highlights.expertise.desc': 'Full-Stack-Entwicklung',
    
    // Projects Section
    'projects.title': 'Ausgewählte Projekte',
    'projects.subtitle': 'Hier sind einige meiner neuesten Projekte, die meine Fähigkeiten in der modernen Webentwicklung zeigen.',
    'projects.liveDemo': 'Live-Demo',
    'projects.code': 'Code',
    'projects.viewLiveDemo': 'Live-Demo Ansehen',
    'projects.viewSourceCode': 'Quellcode Ansehen',
    'projects.techUsed': 'Verwendete Technologien',
    
    // Contact Section
    'contact.title': 'Kontakt Aufnehmen',
    'contact.subtitle': 'Ich bin immer an neuen Möglichkeiten und spannenden Projekten interessiert. Lassen Sie uns gemeinsam etwas Erstaunliches schaffen!',
    'contact.letsConnect': 'Lassen Sie uns Verbinden',
    'contact.description': 'Ob Sie ein Projekt im Kopf haben, zusammenarbeiten möchten oder einfach nur Hallo sagen wollen, ich würde gerne von Ihnen hören. Ich antworte normalerweise innerhalb von 24 Stunden.',
    'contact.email': 'E-Mail',
    'contact.phone': 'Telefon',
    'contact.location': 'Standort',
    'contact.responseTime': 'Antwortzeit',
    'contact.responseDesc': 'Ich antworte normalerweise auf alle Anfragen innerhalb von 24-48 Stunden. Für dringende Angelegenheiten können Sie mich gerne direkt anrufen.',
    'contact.form.name': 'Vollständiger Name',
    'contact.form.email': 'E-Mail-Adresse',
    'contact.form.subject': 'Betreff',
    'contact.form.message': 'Nachricht',
    'contact.form.send': 'Nachricht Senden',
    'contact.form.sending': 'Senden...',
    'contact.form.success': 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Ich werde mich bald bei Ihnen melden!',
    'contact.form.error': 'Entschuldigung, beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder senden Sie mir direkt eine E-Mail.',
    'contact.form.required': 'erforderlich',
    'contact.form.agreement': 'Durch das Senden dieser Nachricht stimmen Sie zu, dass ich Sie bezüglich Ihrer Anfrage kontaktieren darf.',
    
    // Footer
    'footer.brand': 'Sidharth.dev',
    'footer.description': 'Die Zukunft bauen, eine Codezeile nach der anderen. Leidenschaftlich daran interessiert, innovative Web-Lösungen zu schaffen, die einen Unterschied machen.',
    'footer.quickLinks': 'Schnelle Links',
    'footer.connect': 'Verbinden',
    'footer.madeWith': 'Gemacht mit',
    'footer.using': 'mit React & Tailwind CSS',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.privacy': 'Datenschutzrichtlinie',
    'footer.terms': 'Nutzungsbedingungen',
    
    // Language names
    'lang.en': 'English',
    'lang.es': 'Español',
    'lang.fr': 'Français',
    'lang.de': 'Deutsch',
    'lang.hi': 'हिन्दी',
    'lang.zh': '中文',
  },
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.about': 'के बारे में',
    'nav.projects': 'प्रोजेक्ट्स',
    'nav.cv': 'सीवी',
    'nav.faq': 'FAQ',
    'nav.contact': 'संपर्क',
    
    // Hero Section
    'hero.greeting': 'नमस्ते, मैं हूँ',
    'hero.name': 'सिद्धार्थ',
    'hero.tagline1': 'AI इंटीग्रेशन के साथ सॉफ्टवेयर इंजीनियर',
    'hero.tagline2': 'समस्या समाधानकर्ता',
    'hero.tagline3': 'तकनीक उत्साही',
    'hero.tagline4': 'नवाचार निर्माता',
    'hero.description': 'आधुनिक तकनीकों और रचनात्मक समाधानों के साथ नवाचार वेब अनुभव बनाना।',
    'hero.viewWork': 'मेरा काम देखें',
    'hero.getInTouch': 'संपर्क करें',
    'hero.scrollExplore': 'खोजने के लिए स्क्रॉल करें',
    'hero.stats.years': 'साल सीखना',
    'hero.stats.projects': 'प्रोजेक्ट्स',
    'hero.stats.dedicated': 'समर्पित',
    
    // About Section
    'about.title': 'मेरे बारे में',
    'about.subtitle': 'तकनीक के माध्यम से नवाचार समाधान बनाने के लिए उत्साहित',
    'about.description1': 'मैं एक उत्साही सॉफ्टवेयर इंजीनियर हूँ जो वर्तमान में DPG डिग्री कॉलेज, हरियाणा से कंप्यूटर एप्लीकेशन में अपनी स्नातक की पढ़ाई कर रहा हूँ। वेब डेवलपमेंट में व्यावहारिक अनुभव और उभरती तकनीकों में गहरी रुचि के साथ।',
    'about.description2': 'मेरी विशेषज्ञता वेब डेवलपमेंट, IoT, और आर्टिफिशियल इंटेलिजेंस में फैली हुई है। मैंने SingleInterface में इंटर्नशिप पूरी की है और वर्तमान में Internshala Student Partner के रूप में सेवा कर रहा हूँ, साथी छात्रों को उनके करियर पथ में नेविगेट करने में मदद कर रहा हूँ।',
    'about.description3': 'जब मैं कोडिंग नहीं कर रहा होता, तो आप मुझे नई तकनीकों की खोज करते, तकनीकी समुदायों में भाग लेते, या व्यक्तिगत प्रोजेक्ट्स पर काम करते हुए पाएंगे जो वास्तविक दुनिया की समस्याओं को हल करते हैं।',
    'about.downloadResume': 'रिज्यूमे डाउनलोड करें',
    'about.viewProjects': 'प्रोजेक्ट्स देखें',
    'about.highlights.education': 'शिक्षा',
    'about.highlights.education.desc': 'कंप्यूटर एप्लीकेशन में स्नातक',
    'about.highlights.experience': 'अनुभव',
    'about.highlights.experience.desc': 'वेब डेवलपमेंट और IoT',
    'about.highlights.leadership': 'नेतृत्व',
    'about.highlights.leadership.desc': 'Internshala Student Partner',
    'about.highlights.expertise': 'विशेषज्ञता',
    'about.highlights.expertise.desc': 'फुल-स्टैक डेवलपमेंट',
    
    // Projects Section
    'projects.title': 'चुनिंदा प्रोजेक्ट्स',
    'projects.subtitle': 'यहाँ मेरे कुछ हाल के प्रोजेक्ट्स हैं जो आधुनिक वेब डेवलपमेंट में मेरे कौशल को प्रदर्शित करते हैं।',
    'projects.liveDemo': 'लाइव डेमो',
    'projects.code': 'कोड',
    'projects.viewLiveDemo': 'लाइव डेमो देखें',
    'projects.viewSourceCode': 'सोर्स कोड देखें',
    'projects.techUsed': 'उपयोग की गई तकनीकें',
    
    // Contact Section
    'contact.title': 'संपर्क में रहें',
    'contact.subtitle': 'मैं हमेशा नए अवसरों और रोमांचक प्रोजेक्ट्स में रुचि रखता हूँ। आइए मिलकर कुछ अद्भुत बनाते हैं!',
    'contact.letsConnect': 'आइए जुड़ें',
    'contact.description': 'चाहे आपके मन में कोई प्रोजेक्ट हो, सहयोग करना चाहते हों, या बस हैलो कहना चाहते हों, मुझे आपसे सुनना अच्छा लगेगा। मैं आमतौर पर 24 घंटों के भीतर जवाब देता हूँ।',
    'contact.email': 'ईमेल',
    'contact.phone': 'फोन',
    'contact.location': 'स्थान',
    'contact.responseTime': 'प्रतिक्रिया समय',
    'contact.responseDesc': 'मैं आमतौर पर सभी पूछताछ का 24-48 घंटों के भीतर जवाब देता हूँ। तत्काल मामलों के लिए, कृपया मुझे सीधे कॉल करने में संकोच न करें।',
    'contact.form.name': 'पूरा नाम',
    'contact.form.email': 'ईमेल पता',
    'contact.form.subject': 'विषय',
    'contact.form.message': 'संदेश',
    'contact.form.send': 'संदेश भेजें',
    'contact.form.sending': 'भेजा जा रहा है...',
    'contact.form.success': 'धन्यवाद! आपका संदेश सफलतापूर्वक भेजा गया है। मैं जल्द ही आपसे संपर्क करूंगा!',
    'contact.form.error': 'खुशी, आपका संदेश भेजने में त्रुटि हुई। कृपया फिर से कोशिश करें या मुझे सीधे ईमेल करें।',
    'contact.form.required': 'आवश्यक',
    'contact.form.agreement': 'इस संदेश को भेजकर, आप सहमत हैं कि मैं आपकी पूछताछ के संबंध में आपसे संपर्क कर सकता हूँ।',
    
    // Footer
    'footer.brand': 'Sidharth.dev',
    'footer.description': 'भविष्य का निर्माण, एक समय में एक कोड लाइन। नवाचार वेब समाधान बनाने के लिए उत्साहित जो अंतर बनाते हैं।',
    'footer.quickLinks': 'त्वरित लिंक',
    'footer.connect': 'जुड़ें',
    'footer.madeWith': 'के साथ बनाया गया',
    'footer.using': 'React और Tailwind CSS का उपयोग करके',
    'footer.rights': 'सभी अधिकार सुरक्षित।',
    'footer.privacy': 'गोपनीयता नीति',
    'footer.terms': 'सेवा की शर्तें',
    
    // Language names
    'lang.en': 'English',
    'lang.es': 'Español',
    'lang.fr': 'Français',
    'lang.de': 'Deutsch',
    'lang.hi': 'हिन्दी',
    'lang.zh': '中文',
  },
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.about': '关于',
    'nav.projects': '项目',
    'nav.cv': '简历',
    'nav.faq': '常见问题',
    'nav.contact': '联系',
    
    // Hero Section
    'hero.greeting': '你好，我是',
    'hero.name': 'Sidharth',
    'hero.tagline1': '具有AI集成的软件工程师',
    'hero.tagline2': '问题解决者',
    'hero.tagline3': '技术爱好者',
    'hero.tagline4': '创新创造者',
    'hero.description': '使用现代技术和创意解决方案构建创新的网络体验。',
    'hero.viewWork': '查看我的作品',
    'hero.getInTouch': '联系我',
    'hero.scrollExplore': '滚动探索',
    'hero.stats.years': '年学习',
    'hero.stats.projects': '项目',
    'hero.stats.dedicated': '专注',
    
    // About Section
    'about.title': '关于我',
    'about.subtitle': '热衷于通过技术创造创新解决方案',
    'about.description1': '我是一名充满激情的软件工程师，目前在哈里亚纳邦DPG学位学院攻读计算机应用学士学位。在网络开发方面有实践经验，对新兴技术有浓厚兴趣。',
    'about.description2': '我的专业知识涵盖网络开发、物联网和人工智能。我在SingleInterface完成了实习，目前担任Internshala学生合作伙伴，帮助同学们规划职业道路。',
    'about.description3': '当我不编程时，你会发现我在探索新技术、参与技术社区或从事解决现实世界问题的个人项目。',
    'about.downloadResume': '下载简历',
    'about.viewProjects': '查看项目',
    'about.highlights.education': '教育',
    'about.highlights.education.desc': '计算机应用学士',
    'about.highlights.experience': '经验',
    'about.highlights.experience.desc': '网络开发和物联网',
    'about.highlights.leadership': '领导力',
    'about.highlights.leadership.desc': 'Internshala学生合作伙伴',
    'about.highlights.expertise': '专业知识',
    'about.highlights.expertise.desc': '全栈开发',
    
    // Projects Section
    'projects.title': '精选项目',
    'projects.subtitle': '这里是我最近的一些项目，展示了我在现代网络开发方面的技能。',
    'projects.liveDemo': '在线演示',
    'projects.code': '代码',
    'projects.viewLiveDemo': '查看在线演示',
    'projects.viewSourceCode': '查看源代码',
    'projects.techUsed': '使用的技术',
    
    // Contact Section
    'contact.title': '联系我',
    'contact.subtitle': '我总是对新机会和令人兴奋的项目感兴趣。让我们一起创造一些令人惊叹的东西！',
    'contact.letsConnect': '让我们联系',
    'contact.description': '无论您有项目想法、想要合作，还是只是想打个招呼，我都很乐意听到您的声音。我通常在24小时内回复。',
    'contact.email': '邮箱',
    'contact.phone': '电话',
    'contact.location': '位置',
    'contact.responseTime': '响应时间',
    'contact.responseDesc': '我通常在24-48小时内回复所有询问。对于紧急事务，请随时直接给我打电话。',
    'contact.form.name': '全名',
    'contact.form.email': '邮箱地址',
    'contact.form.subject': '主题',
    'contact.form.message': '消息',
    'contact.form.send': '发送消息',
    'contact.form.sending': '发送中...',
    'contact.form.success': '谢谢！您的消息已成功发送。我会尽快回复您！',
    'contact.form.error': '抱歉，发送您的消息时出现错误。请重试或直接给我发邮件。',
    'contact.form.required': '必填',
    'contact.form.agreement': '通过发送此消息，您同意我可以就您的询问与您联系。',
    
    // Footer
    'footer.brand': 'Sidharth.dev',
    'footer.description': '构建未来，一次一行代码。热衷于创造有影响力的创新网络解决方案。',
    'footer.quickLinks': '快速链接',
    'footer.connect': '连接',
    'footer.madeWith': '制作于',
    'footer.using': '使用React和Tailwind CSS',
    'footer.rights': '版权所有。',
    'footer.privacy': '隐私政策',
    'footer.terms': '服务条款',
    
    // Language names
    'lang.en': 'English',
    'lang.es': 'Español',
    'lang.fr': 'Français',
    'lang.de': 'Deutsch',
    'lang.hi': 'हिन्दी',
    'lang.zh': '中文',
  }
};