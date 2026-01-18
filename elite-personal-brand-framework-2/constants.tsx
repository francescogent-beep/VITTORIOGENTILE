
import { Project, Post, Localized, Service } from './types.ts';

export const BRAND_NAME = "Vittorio Gentile";
export const TAGLINE: Localized<string> = {
  it: "Sommelier Internazionale & Wine Educator",
  en: "International Sommelier & Wine Educator"
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
      it: 'Trasformiamo la cantina da costo operativo a motore di profitto primario. Attraverso un audit rigoroso dello stock e l\'analisi dei flussi di cassa, ottimizziamo il portfolio etichette per massimizzare il margine di contribuzione senza compromettere l\'identità del brand. Specializzazione in fine-dining e hotellerie di lusso.',
      en: 'We transform the cellar from an operating cost into a primary profit engine. Through rigorous stock auditing and cash flow analysis, we optimize the label portfolio to maximize contribution margins without compromising brand identity. Specialized in fine-dining and luxury hospitality operations.'
    },
    features: [
      { title: { it: 'Audit & Ottimizzazione Stock', en: 'Audit & Stock Optimization' }, description: { it: 'Analisi dell\'inventario, riduzione degli sprechi e miglioramento della rotazione.', en: 'Inventory analysis, waste reduction, and turnover rate improvement.' } },
      { title: { it: 'Revenue Management', en: 'Revenue Management' }, description: { it: 'Strategie di pricing dinamico e ingegneria dei margini.', en: 'Dynamic pricing strategies and margin engineering.' } }
    ],
    faqs: [
      { question: { it: 'Qual è l\'impatto tipico sul profitto?', en: 'What is the typical profit impact?' }, answer: { it: 'Mediamente, un intervento strutturale porta a un incremento del margine operativo lordo tra il 15% e il 25%.', en: 'On average, a structural intervention leads to a 15% to 25% increase in gross operating margin.' } },
      { question: { it: 'Quanto dura il processo di auditing?', en: 'How long does the auditing process take?' }, answer: { it: 'Un audit completo richiede solitamente dalle 2 alle 4 settimane, a seconda della complessità della cantina.', en: 'A complete audit usually takes 2 to 4 weeks, depending on the complexity of the cellar.' } },
      { question: { it: 'Fornite supporto post-consulenza?', en: 'Do you provide post-consultancy support?' }, answer: { it: 'Sì, offriamo pacchetti di monitoraggio trimestrale per garantire la sostenibilità dei risultati ottenuti.', en: 'Yes, we offer quarterly monitoring packages to ensure the sustainability of the results achieved.' } }
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
      it: 'Il servizio è la performance che giustifica il premium price. Formiamo il personale di sala sui protocolli internazionali di sommellerie, focalizzandoci sulla psicologia dell\'upselling non invasivo e sullo storytelling emozionale che trasforma una bottiglia in un\'esperienza memorabile.',
      en: 'Service is the performance that justifies premium pricing. We train floor staff on international sommelier protocols, focusing on non-invasive upselling psychology and emotional storytelling that transforms a bottle into a memorable experience.'
    },
    features: [
      { title: { it: 'Upselling Strategico', en: 'Strategic Upselling' }, description: { it: 'Tecniche avanzate di persuasione e suggerimento cross-selling.', en: 'Advanced persuasion techniques and cross-selling suggestion.' } },
      { title: { it: 'Protocolli di Servizio Lusso', en: 'Luxury Service Protocols' }, description: { it: 'Standard Michelin e gestione formale del cliente di alto profilo.', en: 'Michelin standards and formal management of high-profile clients.' } }
    ],
    faqs: [
      { question: { it: 'La formazione può essere fatta on-site?', en: 'Can the training be done on-site?' }, answer: { it: 'Sì, preferiamo lavorare direttamente nell\'ambiente operativo del team per massimizzare l\'apprendimento pratico.', en: 'Yes, we prefer to work directly in the team\'s operational environment to maximize practical learning.' } },
      { question: { it: 'Qual è il numero massimo di partecipanti?', en: 'What is the maximum number of participants?' }, answer: { it: 'Per garantire la qualità, suggeriamo sessioni da massimo 10-12 persone per volta.', en: 'To ensure quality, we suggest sessions of maximum 10-12 people at a time.' } },
      { question: { it: 'Rilasciate certificati di partecipazione?', en: 'Do you issue certificates of attendance?' }, answer: { it: 'Sì, rilasciamo un attestato di eccellenza professionale Vittorio Gentile ai partecipanti che superano i test finali.', en: 'Yes, we issue a Vittorio Gentile professional excellence certificate to participants who pass the final tests.' } }
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
      it: 'Una carta dei vini non è un elenco, è uno strumento di marketing. Progettiamo carte dei vini basate sulla "Menu Engineering", bilanciando etichette iconiche e scoperte di nicchia per creare una proposta coerente con l\'identità culinaria del locale e il target di clientela.',
      en: 'A wine list is not a list; it is a marketing tool. We design wine lists based on "Menu Engineering," balancing iconic labels with niche discoveries to create a proposal consistent with the venue\'s culinary identity and target clientele.'
    },
    features: [
      { title: { it: 'Design Strategico', en: 'Strategic Design' }, description: { it: 'Layout e narrativa per guidare le scelte d\'acquisto.', en: 'Layout and narrative to guide purchasing choices.' } },
      { title: { it: 'Sourcing Esclusivo', en: 'Exclusive Sourcing' }, description: { it: 'Accesso ad allocazioni rare e produttori emergenti.', en: 'Access to rare allocations and emerging producers.' } }
    ],
    faqs: [
      { question: { it: 'Come selezionate i fornitori?', en: 'How do you select suppliers?' }, answer: { it: 'Lavoriamo con una rete globale di distributori e piccoli produttori per garantire esclusività e prezzi competitive.', en: 'We work with a global network of distributors and small producers to ensure exclusivity and competitive pricing.' } },
      { question: { it: 'La carta include abbinamenti cibo-vino?', en: 'Does the list include food-wine pairings?' }, answer: { it: 'Assolutamente, progettiamo la carta in stretta collaborazione con lo Chef per creare sinergie perfette.', en: 'Absolutely, we design the list in close collaboration with the Chef to create perfect synergies.' } },
      { question: { it: 'Ogni quanto va aggiornata la carta?', en: 'How often should the list be updated?' }, answer: { it: 'Consigliamo un aggiornamento stagionale per riflettere le disponibilità del mercato e il cambio del menu.', en: 'We recommend a seasonal update to reflect market availability and menu changes.' } }
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
      it: 'La certificazione internazionale richiede un metodo analitico, non solo studio. Il mio coaching si focalizza sulla tecnica SAT (Systematic Approach to Tasting) e sulla decodifica dei criteri di valutazione per garantire performance eccellenti sotto pressione d\'esame.',
      en: 'International certification requires an analytical method, not just study. My coaching focuses on the SAT (Systematic Approach to Tasting) technique and decoding evaluation criteria to ensure excellent performance under exam pressure.'
    },
    features: [
      { title: { it: 'SAT Mastery', en: 'SAT Mastery' }, description: { it: 'Perfezionamento della scheda di degustazione sistematica.', en: 'Refining the systematic tasting approach.' } },
      { title: { it: 'Analisi Teorica', en: 'Theory Analysis' }, description: { it: 'Deep-dive su viticoltura e vinificazione avanzata.', en: 'Deep-dive into viticulture and advanced winemaking.' } }
    ],
    faqs: [
      { question: { it: 'Qual è la percentuale di successo?', en: 'What is the success rate?' }, answer: { it: 'I candidati che seguono il programma completo registrano una percentuale di superamento superiore al 90%.', en: 'Candidates who follow the full program report a pass rate higher than 90%.' } },
      { question: { it: 'Il coaching include simulazioni di esame?', en: 'Does the coaching include mock exams?' }, answer: { it: 'Sì, eseguiamo simulazioni cronometrate sia per la parte teorica che per la degustazione cieca.', en: 'Yes, we perform timed simulations for both theory and blind tasting.' } },
      { question: { it: 'Posso richiedere sessioni singole?', en: 'Can I request single sessions?' }, answer: { it: 'Sì, offriamo sia percorsi completi che focus specifici su singoli moduli (es. viticoltura o tecnica di assaggio).', en: 'Yes, we offer both full paths and specific focuses on single modules (e.g., viticulture or tasting technique).' } }
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
      it: 'Percorsi strutturati on-demand che distillano anni di esperienza internazionale in moduli chiari e tecnici. Dalla geografia vinicola alla chimica elementare della vinificazione, un percorso completo per l\'appassionato evoluto e l\'aspirante professionista.',
      en: 'Structured on-demand paths that distill years of international experience into clear, technical modules. From wine geography to the elementary chemistry of winemaking, a complete journey for the evolved enthusiast and the aspiring professional.'
    },
    features: [
      { title: { it: 'Didattica Tecnica', en: 'Technical Pedagogy' }, description: { it: 'Materiali esclusivi e checklist di studio professionali.', en: 'Exclusive materials and professional study checklists.' } }
    ],
    faqs: [
      { question: { it: 'Per quanto tempo ho accesso ai corsi?', en: 'How long do I have access to the courses?' }, answer: { it: 'Una volta acquistati, i corsi rimangono a tua disposizione illimitatamente.', en: 'Once purchased, the courses remain available to you indefinitely.' } },
      { question: { it: 'È previsto un supporto tutor?', en: 'Is tutor support provided?' }, answer: { it: 'Sì, ogni corso include l\'accesso a una community privata dove Vittorio risponde periodicamente alle domande.', en: 'Yes, each course includes access to a private community where Vittorio periodically answers questions.' } },
      { question: { it: 'Ricevo del materiale cartaceo?', en: 'Do I receive any paper material?' }, answer: { it: 'Tutti i materiali sono forniti in formato PDF ad alta risoluzione pronti per la stampa.', en: 'All materials are provided in high-resolution PDF format ready for printing.' } }
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
      it: 'Webinar tecnici interattivi focalizzati sull\'analisi del terroir e delle annate. Un\'opportunità per confrontarsi con un professionista internazionale su temi specifici e complessi del mondo del vino.',
      en: 'Interactive technical webinars focused on terroir and vintage analysis. An opportunity to engage with an international professional on specific and complex wine world topics.'
    },
    features: [
      { title: { it: 'Focus Territoriale', en: 'Territorial Focus' }, description: { it: 'Analisi geologica e climatica dei cru più famosi.', en: 'Geological and climatic analysis of the most famous crus.' } }
    ],
    faqs: [
      { question: { it: 'Le masterclass vengono registrate?', en: 'Are the masterclasses recorded?' }, answer: { it: 'Sì, i partecipanti ricevono la registrazione nelle 24 ore successive all\'evento live.', en: 'Yes, participants receive the recording within 24 hours after the live event.' } },
      { question: { it: 'Devo acquistare i vini in anticipo?', en: 'Do I need to buy the wines in advance?' }, answer: { it: 'Forniamo la lista dei vini consigliati una settimana prima per permettere a tutti di partecipare attivamente.', en: 'We provide the list of recommended wines one week before to allow everyone to participate actively.' } },
      { question: { it: 'È possibile fare domande in diretta?', en: 'Is it possible to ask questions live?' }, answer: { it: 'Assolutamente, ogni masterclass prevede una sessione di Q&A finale dedicata.', en: 'Absolutely, each masterclass includes a final dedicated Q&A session.' } }
    ],
    keywords: { it: 'masterclass vino live, webinar enologia tecnica, approfondimento vitigni', en: 'live wine masterclass, technical enology webinar, grape variety deep-dive' },
    metaTitle: { it: 'Masterclass Vino Live e Approfondimenti Tecnici | Vittorio Gentile', en: 'Live Wine Masterclasses & Technical Deep-dives | Vittorio Gentile' },
    metaDesc: { it: 'Seminari digitali in diretta. Approfondisci terroir, annate e tecniche di assaggio con Vittorio Gentile.', en: 'Live digital seminars. Deepen your knowledge of terroir, vintages, and tasting techniques with Vittorio Gentile.' },
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200',
    cta: { it: 'Prenota Posto', en: 'Book Your Spot' },
    relatedSlugs: ['wine-tasting-online', 'online-wine-courses']
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
      it: 'Gestiamo la vostra collezione privata con standard professionali. Dalla consulenza sugli acquisti (fine wine investment) all\'organizzazione di serate esclusive a domicilio, garantendo un servizio discreto e di altissimo profilo.',
      en: 'We manage your private collection with professional standards. From purchase consulting (fine wine investment) to organizing exclusive at-home evenings, ensuring a discrete and high-profile service.'
    },
    features: [
      { title: { it: 'Investment Advisory', en: 'Investment Advisory' }, description: { it: 'Selezione etichette per potenziale di rivalutazione.', en: 'Label selection for appreciation potential.' } },
      { title: { it: 'Degustazioni Private', en: 'Private Tastings' }, description: { it: 'Esperienze sensoriali taylor-made per ospiti d\'élite.', en: 'Tailor-made sensory experiences for elite guests.' } }
    ],
    faqs: [
      { question: { it: 'In quali città è disponibile il servizio?', en: 'In which cities is the service available?' }, answer: { it: 'Operiamo regolarmente a Roma e Londra, ma siamo disponibili per trasferte internazionali su richiesta.', en: 'We regularly operate in Rome and London, but we are available for international travel upon request.' } },
      { question: { it: 'Aiutate anche nel sourcing di vini rari?', en: 'Do you also help in sourcing rare wines?' }, answer: { it: 'Sì, utilizziamo la nostra rete internazionale per trovare bottiglie specifiche per collezionisti.', en: 'Yes, we use our international network to find specific bottles for collectors.' } },
      { question: { it: 'Potete gestire cantine digitalizzate?', en: 'Can you manage digitized cellars?' }, answer: { it: 'Assolutamente, utilizziamo i migliori software di gestione cantina per monitorare stock e finestre di bevibilità.', en: 'Absolutely, we use the best cellar management software to monitor stock and drinkability windows.' } }
    ],
    keywords: { it: 'sommelier privato lusso, wine concierge italia, gestione cantina privata', en: 'luxury private sommelier, wine concierge italy, private cellar management' },
    metaTitle: { it: 'Sommelier Privato e Wine Concierge di Lusso | Vittorio Gentile', en: 'Luxury Private Sommelier & Wine Concierge | Vittorio Gentile' },
    metaDesc: { it: 'Esperienze esclusive per collezionisti. Gestione cantina, acquisti vini pregiati e degustazioni a domicilio.', en: 'Exclusive experiences for collectors. Cellar management, fine wine purchases, and home tastings.' },
    imageUrl: 'https://images.unsplash.com/photo-1553122912-3da9832af78a?q=80&w=1200',
    cta: { it: 'Inizia l\'Esperienza', en: 'Start the Experience' },
    relatedSlugs: ['wine-club-subscription']
  },
  {
    id: 'b2c-2',
    slug: 'wine-tasting-online',
    category: 'B2C',
    tier: 'Entry',
    entities: ['Virtual Tasting', 'Sensory Kits', 'Digital Hospitality'],
    title: { it: 'Digital Wine Tasting', en: 'Digital Wine Tasting' },
    shortDesc: { it: 'Degustazioni guidate interattive con kit professionali a domicilio.', en: 'Interactive guided tastings with professional home kits.' },
    longDesc: {
      it: 'Riduciamo la distanza fisica attraverso il gusto. Ricevi a casa una selezione tecnica di vini e segui la degustazione live, esplorando vitigni e territori con un approccio professionale ma accessibile.',
      en: 'We reduce physical distance through taste. Receive a technical selection of wines at home and follow the live tasting, exploring varieties and territories with a professional yet accessible approach.'
    },
    features: [
      { title: { it: 'Tasting Kits', en: 'Tasting Kits' }, description: { it: 'Vini selezionati e materiali didattici spediti in tutta Europa.', en: 'Selected wines and educational materials shipped throughout Europe.' } }
    ],
    faqs: [
      { question: { it: 'Come vengono conservati i vini durante la spedizione?', en: 'How are wines stored during shipping?' }, answer: { it: 'Utilizziamo imballaggi tecnici certificati per mantenere la temperatura stabile e proteggere l\'integrità del vino.', en: 'We use certified technical packaging to keep the temperature stable and protect the integrity of the wine.' } },
      { question: { it: 'Le degustazioni sono di gruppo o private?', en: 'Are the tastings group or private?' }, answer: { it: 'Offriamo entrambi i formati: sessioni calendarizzate per gruppi e degustazioni personalizzate per gruppi privati.', en: 'We offer both formats: scheduled sessions for groups and customized tastings for private groups.' } },
      { question: { it: 'Quale piattaforma utilizzate?', en: 'Which platform do you use?' }, answer: { it: 'Solitamente Zoom o Google Meet, per garantire la massima stabilità e interazione.', en: 'Usually Zoom or Google Meet, to ensure maximum stability and interaction.' } }
    ],
    keywords: { it: 'degustazione vino online kit, wine tasting virtuale lusso, corsi vino digitali', en: 'online wine tasting kit, luxury virtual wine tasting, digital wine courses' },
    metaTitle: { it: 'Degustazioni Vino Online con Kit a Domicilio | Vittorio Gentile', en: 'Online Wine Tastings with Home Kits | Vittorio Gentile' },
    metaDesc: { it: 'Partecipa a degustazioni professionali dal tuo salotto. Ricevi i vini a casa e connettiti live.', en: 'Join professional tastings from your living room. Receive the wines at home and connect live.' },
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200',
    cta: { it: 'Vedi Prossime Date', en: 'See Next Dates' },
    relatedSlugs: ['masterclass-wine', 'online-wine-courses']
  },
  {
    id: 'b2c-3',
    slug: 'wine-club-subscription',
    category: 'B2C',
    tier: 'Entry',
    entities: ['Curation', 'Rare Finds', 'Sommelier Selection'],
    title: { it: 'Gentile Wine Club', en: 'Gentile Wine Club' },
    shortDesc: { it: 'Selezione mensile di vini d\'autore con focus su artigianalità e terroir.', en: 'Monthly selection of signature wines focused on craftsmanship and terroir.' },
    longDesc: {
      it: 'Entra nel mio radar. Ogni mese seleziono personalmente bottiglie che rappresentano l\'eccellenza e l\'anima di un territorio, accompagnate da schede tecniche dettagliate e consigli di abbinamento esclusivi.',
      en: 'Join my radar. Every month I personally select bottles that represent the excellence and soul of a territory, accompanied by detailed technical sheets and exclusive pairing tips.'
    },
    features: [
      { title: { it: 'Accesso Prioritario', en: 'Priority Access' }, description: { it: 'Allocazioni limitate riservate esclusivamente ai membri.', en: 'Limited allocations reserved exclusively for members.' } }
    ],
    faqs: [
      { question: { it: 'Posso annullare l\'abbonamento in qualsiasi momento?', en: 'Can I cancel my subscription at any time?' }, answer: { it: 'Sì, non c\'è alcun vincolo di permanenza. Puoi sospendere o annullare quando vuoi.', en: 'Yes, there is no commitment. You can suspend or cancel whenever you want.' } },
      { question: { it: 'I vini sono diversi ogni mese?', en: 'Are the wines different every month?' }, answer: { it: 'Assolutamente sì, ogni box è un nuovo viaggio alla scoperta di territori e produttori diversi.', en: 'Absolutely yes, each box is a new journey to discover different territories and producers.' } },
      { question: { it: 'Sono incluse le spese di spedizione?', en: 'Is shipping included?' }, answer: { it: 'Sì, per l\'Italia le spese di spedizione sono incluse nel costo dell\'abbonamento.', en: 'Yes, for Italy shipping costs are included in the subscription fee.' } }
    ],
    keywords: { it: 'abbonamento vino sommelier, wine club italia lusso, selezione vini mensile', en: 'sommelier wine subscription, luxury italy wine club, monthly wine selection' },
    metaTitle: { it: 'Wine Club Esclusivo e Abbonamenti Personalizzati | Vittorio Gentile', en: 'Exclusive Wine Club & Personalized Subscriptions | Vittorio Gentile' },
    metaDesc: { it: 'La mia selezione personale a casa tua. Scopri vini rari e produttori artigianali ogni mese.', en: 'My personal selection at your home. Discover rare wines and artisanal producers every month.' },
    imageUrl: 'https://images.unsplash.com/photo-1543412849-fd47250680ca?q=80&w=1200',
    cta: { it: 'Iscriviti al Club', en: 'Join the Club' },
    relatedSlugs: ['private-sommelier']
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
  }
];
