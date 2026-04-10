
import { Project, Post, Localized, Service } from './types.ts';

export const BRAND_NAME = "Vittorio Gentile";
export const TAGLINE: Localized<string> = {
  it: "STRATEGIA • FORMAZIONE • ESPERIENZE",
  en: "STRATEGY • EDUCATION • EXPERIENCES"
};

export const CONTACT_INFO = {
  email: "vittorio@vittoriogentile.com",
  location: { it: "Roma • Porto Cervo • Capri • Cortina • Londra", en: "Rome • Porto Cervo • Capri • Cortina • London" },
  piva: "IT12345678901" 
};

export const SERVICES: Service[] = [
  // --- BUSINESS (B2B) ---
  {
    id: 'b2b-1',
    slug: 'wine-consulting-restaurants',
    category: 'B2B',
    tier: 'Core',
    entities: ['Wine ROI', 'Beverage Program Management', 'Luxury Hospitality', 'Profit Margin Optimization', 'Inventory Turnover'],
    title: { it: 'Consulenza Wine Business & ROI', en: 'Wine Business Consulting & ROI' },
    shortDesc: { it: 'Strategia e gestione operativa per programmi vino ad alta redditività.', en: 'Strategy and operational management for high-profit beverage programs.' },
    longDesc: {
      it: 'Trasformiamo la cantina da costo operativo a motore di profitto primario. Attraverso un audit rigoroso dello stock e l\'analisi dei flussi di cassa, ottimizziamo il portfolio etichette per massimizzare il margine di contribuzione senza compromettere l\'identità del brand.',
      en: 'We transform the cellar from an operating cost into a primary profit engine. Through rigorous stock auditing and cash flow analysis, we optimize the label portfolio to maximize contribution margins without compromising brand identity.'
    },
    closingChapter: {
      it: 'Non si tratta solo di vendere vino, ma di ingegnerizzare il successo finanziario del vostro locale. Il margine è una scelta, non un caso.',
      en: 'It is not just about selling wine; it is about engineering your venue\'s financial success. Margin is a choice, not a coincidence.'
    },
    features: [
      { title: { it: 'Audit & Ottimizzazione Stock', en: 'Audit & Stock Optimization' }, description: { it: 'Analisi chirurgica dell\'inventario per eliminare sprechi e accelerare la rotazione dei capitali.', en: 'Surgical inventory analysis to eliminate waste and accelerate capital turnover.' } },
      { title: { it: 'Revenue Management', en: 'Revenue Management' }, description: { it: 'Strategie di pricing dinamico basate sulla psicologia del consumo e sull\'ingegneria dei margini.', en: 'Dynamic pricing strategies based on consumer psychology and margin engineering.' } },
      { title: { it: 'Fine Wine Investment', en: 'Fine Wine Investment' }, description: { it: 'Consulenza sugli acquisti a lungo termine per creare asset che si rivalutano nel tempo.', en: 'Consultancy on long-term purchases to create assets that appreciate over time.' } }
    ],
    faqs: [
      { question: { it: 'Qual è l\'impatto tipico sul profitto?', en: 'What is the typical profit impact?' }, answer: { it: 'Mediamente, un intervento strutturale porta a un incremento del margine operativo lordo tra il 15% e il 25%.', en: 'On average, a structural intervention leads to a 15% to 25% increase in gross operating margin.' } },
      { question: { it: 'Quanto dura il processo di auditing?', en: 'How long does the auditing process take?' }, answer: { it: 'Un audit completo richiede solitamente dalle 2 alle 4 settimane, a seconda della complessità della cantina.', en: 'A complete audit usually takes 2 to 4 weeks, depending on the complexity of the cellar.' } }
    ],
    keywords: { it: 'consulenza vino ristoranti, wine business strategy, gestione cantina profitto, beverage cost control', en: 'restaurant wine consulting, wine business strategy, profitable cellar management, beverage cost control' },
    metaTitle: { it: 'Consulenza Wine Business per Ristorazione ROI-Driven | Vittorio Gentile', en: 'ROI-Driven Restaurant Wine Business Consulting | Vittorio Gentile' },
    metaDesc: { it: 'Ottimizza il profitto della tua cantina. Consulenza strategica B2B per hotel e ristoranti. Gestione portfolio e controllo costi.', en: 'Optimize your cellar profit. B2B strategic consulting for hotels and restaurants. Portfolio management and cost control.' },
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200',
    cta: { it: 'Richiedi Business Audit', en: 'Request Business Audit' },
    relatedSlugs: ['hospitality-wine-training', 'wine-list-development']
  },
  {
    id: 'b2b-2',
    slug: 'hospitality-wine-training',
    category: 'B2B',
    tier: 'Core',
    entities: ['Staff Performance', 'Upselling Psychology', 'Service Protocol', 'Michelin Standard'],
    title: { it: 'Formazione Staff & Excellence', en: 'Staff Training & Excellence' },
    shortDesc: { it: 'Training d\'élite per team di sala su servizio tecnico e psicologia della vendita.', en: 'Elite training for floor teams on technical service and sales psychology.' },
    longDesc: {
      it: 'Il servizio è la performance che giustifica il premium price. Formiamo il personale di sala sui protocolli internazionali di sommellerie, focalizzandoci sullo storytelling emozionale che trasforma una bottiglia in un ricordo.',
      en: 'Service is the performance that justifies premium pricing. We train floor staff on international sommelier protocols, focusing on emotional storytelling that transforms a bottle into a memory.'
    },
    closingChapter: {
      it: 'Un team formato non solo serve meglio, ma vende di più con meno sforzo. Trasformiamo i vostri camerieri in consulenti di lusso.',
      en: 'A trained team not only serves better but sells more with less effort. We transform your waiters into luxury consultants.'
    },
    features: [
      { title: { it: 'Upselling Strategico', en: 'Strategic Upselling' }, description: { it: 'Tecniche di persuasione non invasiva per guidare l\'ospite verso scelte di valore superiore.', en: 'Non-invasive persuasion techniques to guide the guest toward higher-value choices.' } },
      { title: { it: 'Luxury Service Protocols', en: 'Luxury Service Protocols' }, description: { it: 'Standard Michelin per la gestione formale e l\'anticipazione dei bisogni del cliente d\'élite.', en: 'Michelin standards for formal management and anticipating elite client needs.' } },
      { title: { it: 'Blind Tasting Skills', en: 'Blind Tasting Skills' }, description: { it: 'Sviluppo della competenza tecnica per descrivere il vino con autorità e precisione assoluta.', en: 'Developing technical competence to describe wine with authority and absolute precision.' } }
    ],
    faqs: [
      { question: { it: 'La formazione può essere fatta on-site?', en: 'Can the training be done on-site?' }, answer: { it: 'Sì, preferiamo lavorare direttamente nell\'ambiente operativo del team per massimizzare l\'apprendimento pratico.', en: 'Yes, we prefer to work directly in the team\'s operational environment to maximize practical learning.' } }
    ],
    keywords: { it: 'formazione personale sala vino, corsi sommelier staff, hospitality excellence training', en: 'hospitality wine training, staff wine education, service excellence protocol' },
    metaTitle: { it: 'Formazione Staff Sommellerie e Hospitality Excellence | Vittorio Gentile', en: 'Sommellerie Staff Training & Hospitality Excellence | Vittorio Gentile' },
    metaDesc: { it: 'Eleva il livello del tuo servizio. Training professionale per staff di sala. Storytelling e tecniche di vendita lusso.', en: 'Elevate your service level. Professional training for floor staff. Storytelling and luxury sales techniques.' },
    imageUrl: 'https://images.unsplash.com/photo-1543412849-fd47250680ca?q=80&w=1200',
    cta: { it: 'Eleva il tuo Team', en: 'Elevate Your Team' },
    relatedSlugs: ['wine-list-development', 'wine-consulting-restaurants']
  },
  {
    id: 'b2b-3',
    slug: 'wine-list-development',
    category: 'B2B',
    tier: 'Premium',
    entities: ['Menu Engineering', 'Wine Sourcing', 'Brand Identity', 'Exclusivity'],
    title: { it: 'Ingegneria Carta dei Vini', en: 'Wine List Engineering' },
    shortDesc: { it: 'Design di carte dei vini sartoriali con focus su identità e posizionamento.', en: 'Bespoke wine list design focused on identity and market positioning.' },
    longDesc: {
      it: 'Una carta dei vini non è un elenco, è uno strumento di marketing silenzioso. Progettiamo carte basate sulla "Menu Engineering", bilanciando icone e scoperte di nicchia.',
      en: 'A wine list is not a list; it is a silent marketing tool. We design lists based on "Menu Engineering," balancing icons and niche discoveries.'
    },
    closingChapter: {
      it: 'La vostra carta deve parlare la lingua dello Chef. Creiamo sinergie che i vostri ospiti non potranno dimenticare.',
      en: 'Your list must speak the language of the Chef. We create synergies your guests will never forget.'
    },
    features: [
      { title: { it: 'Design Narrativo', en: 'Narrative Design' }, description: { it: 'Layout studiato per guidare l\'occhio e la mente dell\'ospite verso le etichette strategiche.', en: 'Layout designed to guide the guest\'s eye and mind toward strategic labels.' } },
      { title: { it: 'Sourcing Esclusivo', en: 'Exclusive Sourcing' }, description: { it: 'Accesso ad allocazioni rari e produttori emergenti non reperibili nei canali trasformazionali.', en: 'Access to rare allocations and emerging producers not found in traditional channels.' } },
      { title: { it: 'Wine Pairing Concepts', en: 'Wine Pairing Concepts' }, description: { it: 'Creazione di percorsi degustazione che esaltano l\'identità culinaria del vostro Chef.', en: 'Creating tasting paths that enhance your Chef\'s culinary identity.' } }
    ],
    faqs: [
      { question: { it: 'Come selezionate i fornitori?', en: 'How do you select suppliers?' }, answer: { it: 'Lavoriamo con una rete globale di distributori e piccoli produttori per garantire esclusività e prezzi competitive.', en: 'We work with a global network of distributors and small producers to ensure exclusivity and competitive pricing.' } }
    ],
    keywords: { it: 'creazione carta vini professionale, menu engineering vino, sourcing vini rari', en: 'professional wine list development, wine menu engineering, rare wine sourcing' },
    metaTitle: { it: 'Ingegneria e Sviluppo Carta Vini Professionale | Vittorio Gentile', en: 'Professional Wine List Engineering & Development | Vittorio Gentile' },
    metaDesc: { it: 'Design strategico della carta dei vini. Identità, sourcing e posizionamento per ristoranti di lusso.', en: 'Strategic wine list design. Identity, sourcing, and positioning for luxury restaurants.' },
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200',
    cta: { it: 'Inizia il Design', en: 'Start the Design' },
    relatedSlugs: ['wine-consulting-restaurants']
  },

  // --- EDUCATION ---
  {
    id: 'edu-1',
    slug: 'certification-prep',
    category: 'Education',
    tier: 'Core',
    entities: ['WSET Diploma', 'Court of Master Sommeliers', 'SAT Technique', 'Blind Tasting'],
    title: { it: 'Preparazione Esami Elite', en: 'Elite Exam Preparation' },
    shortDesc: { it: 'Coaching tecnico per esami WSET (Level 3/4) e Court of Master Sommeliers.', en: 'Technical coaching for WSET (Level 3/4) and Court of Master Sommeliers exams.' },
    longDesc: {
      it: 'La certificazione internazionale richiede un metodo analitico, non solo studio. Il mio coaching si focalizza sulla tecnica SAT e sulla decodifica dei criteri di valutazione.',
      en: 'International certification requires an analytical method, not just study. My coaching focuses on the SAT technique and decoding evaluation criteria.'
    },
    closingChapter: {
      it: 'Non lasciate il vostro successo al caso. Affrontate l\'esame con la certezza di chi domina la tecnica, non di chi ha solo studiato.',
      en: 'Don\'t leave your success to chance. Approach the exam with the certainty of one who masters the technique, not just one who has studied.'
    },
    features: [
      { title: { it: 'SAT Mastery', en: 'SAT Mastery' }, description: { it: 'Perfezionamento della scheda di degustazione per non perdere mai un punto per imprecisione.', en: 'Perfecting the tasting note so you never lose a point for inaccuracy.' } },
      { title: { it: 'Theory Analysis', en: 'Theory Analysis' }, description: { it: 'Deep-dive su viticoltura e vinificazione avanzata per rispondere con precisione a ogni domanda.', en: 'Deep-dive into advanced viticulture and winemaking to answer every question with precision.' } },
      { title: { it: 'Exam Strategy', en: 'Exam Strategy' }, description: { it: 'Time management e tecniche di risposta per massimizzare il punteggio sotto pressione.', en: 'Time management and answering techniques to maximize your score under pressure.' } }
    ],
    faqs: [
      { question: { it: 'Qual è la percentuale di successo?', en: 'What is the success rate?' }, answer: { it: 'I candidati che seguono il programma completo registrano una percentuale di superamento superiore al 90%.', en: 'Candidates who follow the full program report a pass rate higher than 90%.' } }
    ],
    keywords: { it: 'preparazione esame wset, coaching sommelier professionisti, SAT tasting tutor', en: 'wset certification prep, professional sommelier coaching, SAT tasting tutor' },
    metaTitle: { it: 'Coaching Esami WSET e CMS Sommelier | Vittorio Gentile', en: 'WSET & CMS Sommelier Exam Coaching | Vittorio Gentile' },
    metaDesc: { it: 'Supera i massimi esami internazionali. Coaching individuale per WSET Level 3, 4 e CMS.', en: 'Pass the highest international exams. Individual coaching for WSET Level 3, 4 and CMS.' },
    imageUrl: 'https://images.unsplash.com/photo-1553122912-3da9832af78a?q=80&w=1200',
    cta: { it: 'Accedi al Metodo', en: 'Access the Method' },
    relatedSlugs: ['online-wine-courses', 'masterclass-wine']
  },
  {
    id: 'edu-2',
    slug: 'online-wine-courses',
    category: 'Education',
    tier: 'Entry',
    entities: ['Wine Foundations', 'E-Learning', 'Technical Handouts'],
    title: { it: 'Corsi Sommelier Online', en: 'Online Sommelier Courses' },
    shortDesc: { it: 'Accademia digitale per padroneggiare le basi e la tecnica della sommellerie.', en: 'Digital academy to master the foundations and technique of sommellerie.' },
    longDesc: {
      it: 'Percorsi on-demand che distillano anni di esperienza internazionale in moduli tecnici chiari. Dalla chimica della vinificazione alla geografia vinicola mondiale.',
      en: 'On-demand paths distilling years of international experience into clear technical modules. From winemaking chemistry to global wine geography.'
    },
    closingChapter: {
      it: 'Il sapere è il primo passo verso l\'autorità. Iniziate oggi a costruire la vostra competenza con un metodo professionale.',
      en: 'Knowledge is the first step toward authority. Start building your competence today with a professional method.'
    },
    features: [
      { title: { it: 'Moduli Progressivi', en: 'Progressive Modules' }, description: { it: 'Un percorso logico che porta l\'appassionato al livello di un professionista consapevole.', en: 'A logical path that takes the enthusiast to the level of a conscious professional.' } },
      { title: { it: 'Materiale Tecnico', en: 'Technical Material' }, description: { it: 'Handout professionali, mappe e schede di studio pronte per l\'uso quotidiano.', en: 'Professional handouts, maps, and study sheets ready for daily use.' } },
      { title: { it: 'Video Tutorials', en: 'Video Tutorials' }, description: { it: 'Dimostrazioni pratiche sulla tecnica di assaggio e il servizio corretto.', en: 'Practical demonstrations on tasting technique and correct service.' } }
    ],
    faqs: [
      { question: { it: 'Per quanto tempo ho accesso?', en: 'How long do I have access?' }, answer: { it: 'Una volta acquistati, i corsi rimangono a tua disposizione illimitatamente.', en: 'Once purchased, the courses remain available to you indefinitely.' } }
    ],
    keywords: { it: 'corsi vino online, accademia sommelier digitale, imparare il vino tecnica', en: 'online wine courses, digital sommelier academy, technical wine learning' },
    metaTitle: { it: 'Corsi di Vino Online e Accademia Sommelier | Vittorio Gentile', en: 'Online Wine Courses & Sommelier Academy | Vittorio Gentile' },
    metaDesc: { it: 'La tua accademia vinicola digitale. Corsi strutturati per ogni livello. Impara con un metodo internazionale.', en: 'Your digital wine academy. Structured courses for every level. Learn with an international method.' },
    imageUrl: 'https://images.unsplash.com/photo-1543412849-fd47250680ca?q=80&w=1200',
    cta: { it: 'Scopri i Corsi', en: 'Discover Courses' },
    relatedSlugs: ['certification-prep', 'masterclass-wine']
  },
  {
    id: 'edu-3',
    slug: 'masterclass-wine',
    category: 'Education',
    tier: 'Entry',
    entities: ['Terroir Analysis', 'Vintage Focus', 'Vertical Tasting'],
    title: { it: 'Masterclass Live & Verticali', en: 'Live & Vertical Masterclasses' },
    shortDesc: { it: 'Sessioni di approfondimento live su territori iconici e vitigni rari.', en: 'Live deep-dive sessions on iconic territories and rare grape varieties.' },
    longDesc: {
      it: 'Webinar tecnici focalizzati sull\'analisi estrema del terroir e delle annate. Un confronto diretto con un professionista internazionale.',
      en: 'Technical webinars focused on extreme terroir and vintage analysis. A direct engagement with an international professional.'
    },
    closingChapter: {
      it: 'Ogni masterclass è un tassello fondamentale per la vostra biblioteca sensoriale. Unitevi alla discussione tecnica.',
      en: 'Each masterclass is a fundamental piece for your sensory library. Join the technical discussion.'
    },
    features: [
      { title: { it: 'Cru Analysis', en: 'Cru Analysis' }, description: { it: 'Studio geologico e microclimatico delle parcelle più prestigiose del mondo.', en: 'Geological and microclimatic study of the world\'s most prestigious plots.' } },
      { title: { it: 'Vintage Comparison', en: 'Vintage Comparison' }, description: { it: 'Analisi comparativa delle annate per capire l\'evoluzione del vino nel tempo.', en: 'Comparative vintage analysis to understand wine evolution over time.' } },
      { title: { it: 'Live Q&A', en: 'Live Q&A' }, description: { it: 'Interazione diretta per risolvere dubbi tecnici in tempo reale.', en: 'Direct interaction to resolve technical doubts in real-time.' } }
    ],
    faqs: [
      { question: { it: 'Vengono registrate?', en: 'Are they recorded?' }, answer: { it: 'Sì, i partecipanti ricevono la registrazione nelle 24 ore successive.', en: 'Yes, participants receive the recording within 24 hours.' } }
    ],
    keywords: { it: 'masterclass vino live, webinar enologia tecnica, approfondimento vitigni', en: 'live wine masterclass, technical enology webinar, grape variety deep-dive' },
    metaTitle: { it: 'Masterclass Vino Live e Approfondimenti Tecnici | Vittorio Gentile', en: 'Live Wine Masterclasses & Technical Deep-dives | Vittorio Gentile' },
    metaDesc: { it: 'Seminari digitali in diretta. Approfondisci terroir, annate e tecniche di assaggio con Vittorio Gentile.', en: 'Live digital seminars. Deepen your knowledge of terroir, vintages, and tasting techniques with Vittorio Gentile.' },
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200',
    cta: { it: 'Prenota Posto', en: 'Book Your Spot' },
    relatedSlugs: ['wine-team-building', 'online-wine-courses']
  },

  // --- INDIVIDUALS (B2C) ---
  {
    id: 'b2c-1',
    slug: 'private-sommelier',
    category: 'B2C',
    tier: 'Core',
    entities: ['Wine Concierge', 'Personal Cellar Management', 'Exclusive Experiences'],
    title: { it: 'Wine Concierge & Sommelier Privato', en: 'Wine Concierge & Private Sommelier' },
    shortDesc: { it: 'Servizi esclusivi di gestione cantina e degustazioni private di lusso.', en: 'Exclusive cellar management and luxury private tasting services.' },
    longDesc: {
      it: 'Gestiamo la vostra collezione privata con standard professionali. Dalla consulenza sugli acquisti di pregio all\'organizzazione di serate esclusive.',
      en: 'We manage your private collection with professional standards. From premium purchase consulting to organizing exclusive evenings.'
    },
    closingChapter: {
      it: 'La vostra cantina è un riflesso del vostro gusto. Rendiamola un capolavoro di equilibrio e valore.',
      en: 'Your cellar is a reflection of your taste. Let\'s make it a masterpiece of balance and value.'
    },
    features: [
      { title: { it: 'Cellar Management', en: 'Cellar Management' }, description: { it: 'Catalogazione professionale e monitoraggio delle finestre di bevibilità delle vostre bottiglie.', en: 'Professional cataloging and monitoring of your bottles\' drinkability windows.' } },
      { title: { it: 'Fine Wine Sourcing', en: 'Fine Wine Sourcing' }, description: { it: 'Ricerca attiva di etichette rare e annate storiche attraverso una rete globale di fiducia.', en: 'Active search for rare labels and historic vintages through a trusted global network.' } },
      { title: { it: 'Bespoke Events', en: 'Bespoke Events' }, description: { it: 'Progettazione di eventi privati a casa vostra, dove il vino è il protagonista assoluto.', en: 'Designing private events at your home, where wine is the absolute protagonist.' } }
    ],
    faqs: [
      { question: { it: 'In quali città operate?', en: 'In which cities do you operate?' }, answer: { it: 'Roma e Londra regolarmente, trasferte su richiesta.', en: 'Rome and London regularly, travel upon request.' } }
    ],
    keywords: { it: 'sommelier privato lusso, wine concierge italia, gestione cantina privata', en: 'luxury private sommelier, wine concierge italy, private cellar management' },
    metaTitle: { it: 'Sommelier Privato e Wine Concierge di Lusso | Vittorio Gentile', en: 'Luxury Private Sommelier & Wine Concierge | Vittorio Gentile' },
    metaDesc: { it: 'Esperienze esclusive per collezionisti. Gestione cantina, acquisti vini pregiati e degustazioni a domicilio.', en: 'Exclusive experiences for collectors. Cellar management, fine wine purchases, and home tastings.' },
    imageUrl: 'https://images.unsplash.com/photo-1553122912-3da9832af78a?q=80&w=1200',
    cta: { it: 'Inizia l\'Esperienza', en: 'Start the Experience' },
    relatedSlugs: ['masterclass-wine']
  },
  {
    id: 'b2c-2',
    slug: 'wine-team-building',
    category: 'B2C',
    tier: 'Entry',
    entities: ['Corporate Wellness', 'Team Bonding', 'Gamified Tasting', 'Luxury Events'],
    title: { it: 'Wine Team Building & Corporate Events', en: 'Wine Team Building & Corporate Events' },
    shortDesc: { it: 'Esperienze sensoriali esclusive progettate per rafforzare la coesione dei team aziendali.', en: 'Exclusive sensory experiences designed to strengthen corporate team cohesion.' },
    longDesc: {
      it: 'Il vino come strumento di coesione. Eleviamo l\'asset umano della vostra azienda attraverso format dove il tasting si fonde con la psicologia del team bonding.',
      en: 'Wine as a tool for cohesion. We elevate your company\'s human assets through formats where tasting merges with team-bonding psychology.'
    },
    closingChapter: {
      it: 'Un team che degusta insieme è un team che comunica meglio. Investite nel capitale umano attraverso i sensi.',
      en: 'A team that tastes together is a team that communicates better. Invest in human capital through the senses.'
    },
    features: [
      { title: { it: 'Competitive Blind Tasting', en: 'Competitive Blind Tasting' }, description: { it: 'Format a squadre dove l\'intuizione e il confronto portano alla scoperta del vino misterioso.', en: 'Team format where intuition and discussion lead to the discovery of the mystery wine.' } },
      { title: { it: 'The Art of Blending', en: 'The Art of Blending' }, description: { it: 'Workshop pratico dove ogni partecipante crea il proprio blend, imparando il valore della collaborazione.', en: 'Practical workshop where each participant creates their own blend, learning the value of collaboration.' } },
      { title: { it: 'Workshop Sensoriali', en: 'Sensory Workshops' }, description: { it: 'Laboratori sulla chimica del gusto per affinare la percezione e la comunicazione di gruppo.', en: 'Labs on the chemistry of taste to refine perception and group communication.' }, cta: { it: 'Scarica Programma Workshop', en: 'Download Workshop Program' } }
    ],
    faqs: [
      { question: { it: 'Quanti partecipanti?', en: 'How many participants?' }, answer: { it: 'Da 10 a oltre 100 persone.', en: 'From 10 to over 100 people.' } }
    ],
    keywords: { it: 'team building vino aziendale, eventi corporate lusso, degustazione guidata team bonding', en: 'corporate wine team building, luxury corporate events, guided team bonding tasting' },
    metaTitle: { it: 'Wine Team Building ed Eventi Aziendali di Lusso | Vittorio Gentile', en: 'Luxury Wine Team Building & Corporate Events | Vittorio Gentile' },
    metaDesc: { it: 'Trasforma il tuo team con il vino. Esperienze di team building esclusive, masterclass aziendali e networking di alto profilo.', en: 'Transform your team with wine. Exclusive team building experiences, corporate masterclasses, and high-profile networking.' },
    imageUrl: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200',
    cta: { it: 'Prenota Evento Team', en: 'Book Team Event' },
    relatedSlugs: ['masterclass-wine', 'online-wine-courses']
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: { it: 'ZUMA Restaurants - Head of Wine ITALY', en: 'ZUMA Restaurants - Head of Wine ITALY' },
    description: { it: 'Leadership regionale per Roma, Porto Cervo, Capri e Cortina. Strategia ROI, sourcing globale e standard di eccellenza.', en: 'Regional leadership for Rome, Porto Cervo, Capri, and Cortina. ROI strategy, global sourcing, and excellence standards.' },
    tags: ['Regional Leadership', 'Luxury Portfolio', 'ROI Analysis'],
    imageUrl: 'https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?q=80&w=800'
  },
  {
    id: '2',
    title: { it: 'Oblix Restaurant at The Shard', en: 'Oblix Restaurant at The Shard' },
    description: { it: 'Gestione pluriennale come Head Sommelier. Sviluppo di programmi enologici premiati e gestione team d\'élite.', en: 'Multi-year tenure as Head Sommelier. Development of award-winning wine programs and elite team management.' },
    tags: ['Head Sommelier', 'London Fine Dining', 'Award Winning'],
    imageUrl: 'https://images.unsplash.com/photo-1543412849-fd47250680ca?q=80&w=800'
  }
];

export const POSTS: Post[] = [
  {
    id: '1',
    title: { it: 'Psicologia della Carta dei Vini', en: 'Psychology of the Wine List' },
    excerpt: { it: 'Come il design influenza le scelte d\'acquisto degli ospiti e aumenta il margine medio.', en: 'How design influences guest purchasing choices and increases average margin.' },
    date: '2024-11-20',
    category: { it: 'Consulting', en: 'Consulting' },
    readTime: '6 min'
  },
  {
    id: '2',
    title: { it: 'Investire nel Fine Wine: Guida 2025', en: 'Investing in Fine Wine: 2025 Guide' },
    excerpt: { it: 'Analisi delle regioni emergenti e delle annate chiave per il collezionista moderno.', en: 'Analysis of emerging regions and key vintages for the modern collector.' },
    date: '2025-01-10',
    category: { it: 'Private', en: 'Private' },
    readTime: '8 min'
  },
  {
    id: '3',
    title: { it: 'Staff Training & ROI: La Connessione Invisibile', en: 'Staff Training & ROI: The Invisible Connection' },
    excerpt: { it: 'Analisi di come la formazione tecnica del personale impatti direttamente sulla redditività operativa.', en: 'Analysis of how technical staff training directly impacts operational profitability.' },
    date: '2025-02-15',
    category: { it: 'Business', en: 'Business' },
    readTime: '7 min'
  },
  {
    id: '4',
    title: { it: 'Il Futuro del Sake nel Fine Dining', en: 'The Future of Sake in Fine Dining' },
    excerpt: { it: 'Esplorazione delle opportunità di pairing non convenzionali per menu degustazione d\'élite.', en: 'Exploring unconventional pairing opportunities for elite tasting menus.' },
    date: '2025-03-01',
    category: { it: 'Trends', en: 'Trends' },
    readTime: '5 min'
  }
];
