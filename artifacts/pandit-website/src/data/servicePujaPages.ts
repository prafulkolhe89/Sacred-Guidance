export type ServiceBlock = { title: string; desc: string };
export type ServiceFaq = { q: string; a: string };

export type ServicePujaConfig = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  breadcrumbLabel: string;
  h1: string;
  introLead: string;
  introStrong: string;
  introRest: string;
  benefitsHeading: string;
  benefits: ServiceBlock[];
  procedureHeading: string;
  procedureLead: string;
  procedureStrong: string;
  procedureTail: string;
  procedureSteps: ServiceBlock[];
  prepareHeading: string;
  prepareIntro: string;
  prepareItems: ServiceBlock[];
  faqItems: ServiceFaq[];
  ctaHeading: string;
  ctaBody: string;
  waPrefill: string;
};

/** Order used for “Related services” and postbuild slugs. */
export const SERVICE_PUJA_PATHS: string[] = [
  "/satyanarayan-puja-nagpur",
  "/griha-pravesh-puja-nagpur",
  "/vastu-shanti-puja-nagpur",
  "/ganpati-puja-nagpur",
  "/vivah-marriage-puja-nagpur",
  "/astrology-consultation-nagpur",
];

export const SERVICE_PUJA_PAGES: Record<string, ServicePujaConfig> = {
  "/satyanarayan-puja-nagpur": {
    path: "/satyanarayan-puja-nagpur",
    metaTitle: "Satyanarayan Puja in Nagpur | Book at Home | Darbhe Guruji",
    metaDescription:
      "Book Satyanarayan Puja in Nagpur with an experienced Pandit. Home visits, full Katha & aarti, auspicious muhurat guidance. Griha / office Satyanarayan Puja across Nagpur — call or WhatsApp.",
    breadcrumbLabel: "Satyanarayan Puja in Nagpur",
    h1: "Satyanarayan Puja in Nagpur",
    introLead: "Book an authentic ",
    introStrong: "Satyanarayan Puja in Nagpur",
    introRest:
      " with Pandit Devesh Darbhe — performed at your home with full Katha, traditional offerings, and clear guidance for your family.",
    benefitsHeading: "Benefits of Satyanarayan Puja",
    benefits: [
      {
        title: "Auspicious beginnings",
        desc: "Ideal for new ventures, milestones, and seeking Lord Vishnu’s blessings through the sacred Satyanarayan Katha.",
      },
      {
        title: "Family harmony",
        desc: "Performed with collective participation — strengthens positivity and togetherness in the household.",
      },
      {
        title: "Authentic vidhi",
        desc: "Mantras and steps followed as per Vedic tradition, with clear explanation of each part of the puja.",
      },
      {
        title: "Flexible at your location",
        desc: "Conducted at your home or chosen venue in Nagpur, with practical guidance on arrangement and prasad.",
      },
    ],
    procedureHeading: "Procedure: how we conduct Satyanarayan Puja",
    procedureLead: "Below is a typical flow for ",
    procedureStrong: "Satyanarayan Puja in Nagpur",
    procedureTail:
      " at your residence. Steps may be adapted slightly based on family tradition and occasion.",
    procedureSteps: [
      {
        title: "Consultation & date",
        desc: "Share your occasion (vow, festival, new home, etc.). We help shortlist auspicious days and a suitable time window.",
      },
      {
        title: "Preparation list",
        desc: "You receive a simple list of samagri (flowers, fruits, panchamrit, lamps, etc.) so everything is ready before we arrive.",
      },
      {
        title: "Setup of the sacred space",
        desc: "Kalash placement, deity arrangement, and sankalpa according to family tradition — performed with care and cleanliness.",
      },
      {
        title: "Satyanarayan Katha & puja",
        desc: "Recitation of the Katha, offerings, aarti, and prasad distribution — conducted with devotion and clarity.",
      },
      {
        title: "Completion & guidance",
        desc: "Brief guidance on follow-up observances if any, and blessings for your family’s well-being.",
      },
    ],
    prepareHeading: "What to prepare",
    prepareIntro:
      "We send a checklist before the day. Typical items families arrange in Nagpur include:",
    prepareItems: [
      {
        title: "Puja samagri",
        desc: "Fruits, flowers, betel leaves, incense, ghee, lamps, panchamrit, and sweets for prasad — quantities scale with family size.",
      },
      {
        title: "Sacred space",
        desc: "A clean east-facing or designated area with a small table or chaurang for the photo or idol, and seating for family.",
      },
      {
        title: "Optional extras",
        desc: "Kalash, rangoli, and prasad bowls if you already use them — we advise what is essential versus optional.",
      },
    ],
    faqItems: [
      {
        q: "How long does Satyanarayan Puja take in Nagpur?",
        a: "Typically 2–3 hours, depending on family size, prasad preparation, and whether it is combined with other rituals. We schedule a comfortable window so nothing is rushed.",
      },
      {
        q: "Can Satyanarayan Puja be done at home in Nagpur?",
        a: "Yes. It is commonly performed at home. We arrange the sacred space, kalash, and offerings as per tradition, and guide your family through each step.",
      },
      {
        q: "What items do we need to arrange?",
        a: "We share a clear checklist (fruits, flowers, panchamrit, ghee, lamps, etc.) based on your setup. If you prefer, we can advise simplified arrangements for smaller gatherings.",
      },
      {
        q: "Is Satyanarayan Puja suitable before Griha Pravesh or business opening?",
        a: "Yes. Many families in Nagpur perform Satyanarayan Puja before auspicious events for blessings and harmony. Share your occasion and we suggest timing.",
      },
      {
        q: "Do you travel within Nagpur and nearby areas?",
        a: "We serve Nagpur city and nearby localities. Mention your area when booking so we can confirm travel and arrival time.",
      },
    ],
    ctaHeading: "Book Satyanarayan Puja in Nagpur",
    ctaBody:
      "Share your preferred date and area in Nagpur. We will confirm availability and send a simple samagri list.",
    waPrefill:
      "Hari Om. I would like to book Satyanarayan Puja in Nagpur. Please share available dates and details.",
  },

  "/griha-pravesh-puja-nagpur": {
    path: "/griha-pravesh-puja-nagpur",
    metaTitle: "Griha Pravesh Puja in Nagpur | New Home Rituals | Darbhe Guruji",
    metaDescription:
      "Book Griha Pravesh Puja in Nagpur — Vedic house-entry rituals, auspicious muhurat, samagri guidance, and home visits across Nagpur with Pandit Devesh Darbhe.",
    breadcrumbLabel: "Griha Pravesh Puja in Nagpur",
    h1: "Griha Pravesh Puja in Nagpur",
    introLead: "Celebrate your new home with an authentic ",
    introStrong: "Griha Pravesh Puja in Nagpur",
    introRest:
      " — traditional entry rites, auspicious timing, and step-by-step guidance so your family can begin life in the new space with blessings and peace.",
    benefitsHeading: "Why families book Griha Pravesh",
    benefits: [
      {
        title: "Auspicious start",
        desc: "Sanctify the space before you move in — aligned with muhurat and your family’s sankalpa.",
      },
      {
        title: "Harmony & prosperity",
        desc: "Classical mantras and homam elements (when included) to invite stability and positivity.",
      },
      {
        title: "Clear planning",
        desc: "Practical samagri lists for flats or bungalows — nothing confusing on the day.",
      },
      {
        title: "Local service",
        desc: "Performed at your address in Nagpur or nearby areas; we coordinate timing and flow with you.",
      },
    ],
    procedureHeading: "How we conduct Griha Pravesh Puja",
    procedureLead: "A typical ",
    procedureStrong: "Griha Pravesh Puja in Nagpur",
    procedureTail:
      " follows Vedic steps; details vary slightly by tradition and whether the home is new or renovated.",
    procedureSteps: [
      {
        title: "Muhurat & plan",
        desc: "We confirm your move-in plan and suggest auspicious dates and time windows for entry and main rituals.",
      },
      {
        title: "Entry & purification",
        desc: "Traditional entry prayers, gomutra / Ganga jal usage as per practice, and sankalpa for the household.",
      },
      {
        title: "Main rituals",
        desc: "Kalash sthapana, deity worship as applicable, homam if included, and aarti with family participation.",
      },
      {
        title: "Completion",
        desc: "Blessings for the home and brief guidance on simple observances if relevant.",
      },
    ],
    prepareHeading: "What to prepare",
    prepareIntro:
      "Before Griha Pravesh, families in Nagpur usually arrange the following (we tailor the final list):",
    prepareItems: [
      {
        title: "House readiness",
        desc: "Basic cleaning; main door decoration; milk/boiling ritual if you follow it — we confirm sequence.",
      },
      {
        title: "Samagri",
        desc: "Coconut, rice, kumkum, turmeric, flowers, ghee, lamps, sweets, and grains for offerings.",
      },
      {
        title: "Family presence",
        desc: "Key members available for sankalpa and aarti; children can join with comfortable seating.",
      },
    ],
    faqItems: [
      {
        q: "Is Griha Pravesh only for owned homes?",
        a: "No — many families perform Griha Pravesh or a simplified entry puja when moving into a new rental in Nagpur. We adapt the vidhi.",
      },
      {
        q: "How long does the puja take?",
        a: "Often 1.5–3 hours depending on homam and add-on rituals.",
      },
      {
        q: "Can we combine Griha Pravesh with Satyanarayan Puja?",
        a: "Yes, when timing and family preference allow — mention this when booking so we plan the flow.",
      },
    ],
    ctaHeading: "Book Griha Pravesh Puja in Nagpur",
    ctaBody:
      "Share your new address area and preferred dates. We will suggest muhurat options and a samagri list.",
    waPrefill:
      "Hari Om. I would like to book Griha Pravesh Puja in Nagpur. Please share available dates and details.",
  },

  "/vastu-shanti-puja-nagpur": {
    path: "/vastu-shanti-puja-nagpur",
    metaTitle: "Vastu Shanti Puja in Nagpur | Vastu Remedies | Darbhe Guruji",
    metaDescription:
      "Vastu Shanti Puja in Nagpur — balance your home or office energy with traditional rituals and clear guidance. Book Pandit Devesh Darbhe for on-site puja in Nagpur.",
    breadcrumbLabel: "Vastu Shanti Puja in Nagpur",
    h1: "Vastu Shanti Puja in Nagpur",
    introLead: "Restore balance and peace to your space with ",
    introStrong: "Vastu Shanti Puja in Nagpur",
    introRest:
      " — a traditional remedy for directional imbalances, new construction, renovation, or when you seek harmony after stressful changes.",
    benefitsHeading: "Benefits of Vastu Shanti",
    benefits: [
      {
        title: "Energy correction",
        desc: "Mantra-led rituals to soften harsh influences and support a calmer environment.",
      },
      {
        title: "New & existing buildings",
        desc: "Useful after purchase, renovation, or when rooms are repurposed.",
      },
      {
        title: "Clarity on next steps",
        desc: "We explain what the puja addresses and simple lifestyle alignment tips where helpful.",
      },
      {
        title: "Conducted on-site",
        desc: "Puja at your Nagpur location — we align setup with your actual layout.",
      },
    ],
    procedureHeading: "Procedure: Vastu Shanti Puja",
    procedureLead: "Each ",
    procedureStrong: "Vastu Shanti Puja in Nagpur",
    procedureTail:
      " is planned after a short discussion of your concern; a common outline is below.",
    procedureSteps: [
      {
        title: "Sankalpa",
        desc: "Clear intention stated for peace, stability, or removal of obstacles linked to the space.",
      },
      {
        title: "Navagraha & directional prayers",
        desc: "Offerings and mantras to harmonize energies as per the agreed plan.",
      },
      {
        title: "Homam elements",
        desc: "When included, a structured homam with specified samagri and safe ventilation planning.",
      },
      {
        title: "Aarti & completion",
        desc: "Aarti and blessings; summary of what was performed.",
      },
    ],
    prepareHeading: "What to prepare",
    prepareIntro:
      "Depending on scale, you may arrange:",
    prepareItems: [
      {
        title: "Samagri",
        desc: "Ghee, grains, flowers, incense, lamps, and cloth — we send a written list matched to your booking.",
      },
      {
        title: "Space & ventilation",
        desc: "An area for homam with airflow and safety; floor protection if needed.",
      },
      {
        title: "Household participation",
        desc: "One or two family members for sankalpa and aarti is usually sufficient.",
      },
    ],
    faqItems: [
      {
        q: "Is Vastu Shanti only for new homes?",
        a: "No — it is also done after major renovation, repeated health or stress issues tied to the space, or business premises in Nagpur.",
      },
      {
        q: "Do you visit for consultation before puja?",
        a: "On-site visits in Nagpur can be arranged when helpful so the ritual matches your layout.",
      },
      {
        q: "How long does it take?",
        a: "Often 2–4 hours depending on homam depth and property size.",
      },
    ],
    ctaHeading: "Book Vastu Shanti Puja in Nagpur",
    ctaBody:
      "Describe your property type and concern. We will confirm whether Vastu Shanti Puja fits and propose timing.",
    waPrefill:
      "Hari Om. I would like to book Vastu Shanti Puja in Nagpur. Please share available dates and details.",
  },

  "/ganpati-puja-nagpur": {
    path: "/ganpati-puja-nagpur",
    metaTitle: "Ganpati Puja in Nagpur | Ganesh Puja at Home | Darbhe Guruji",
    metaDescription:
      "Book Ganpati Puja in Nagpur — sthapana, daily aarti guidance, and visarjan support for Ganesh Chaturthi or special vows. Home visits across Nagpur.",
    breadcrumbLabel: "Ganpati Puja in Nagpur",
    h1: "Ganpati Puja in Nagpur",
    introLead: "Welcome Lord Ganesha with a heartfelt ",
    introStrong: "Ganpati Puja in Nagpur",
    introRest:
      " — from pranapratishtha to aarti and visarjan planning — ideal for Ganesh Chaturthi, new beginnings, or obstacle-removal prayers at home.",
    benefitsHeading: "Why book Ganpati Puja",
    benefits: [
      {
        title: "Blessings for new work",
        desc: "Traditionally sought before exams, travel, marriage preparations, or business changes.",
      },
      {
        title: "Family-friendly",
        desc: "Children and elders can join — we pace steps clearly.",
      },
      {
        title: "Festival or single-day",
        desc: "Multi-day Ganesh Utsav or one-day sthapana — we align to your tradition.",
      },
      {
        title: "Prasad & joy",
        desc: "Modak, durva, flowers — we help you keep arrangements practical.",
      },
    ],
    procedureHeading: "Procedure: Ganpati Puja",
    procedureLead: "Your ",
    procedureStrong: "Ganpati Puja in Nagpur",
    procedureTail:
      " may be a single day or several days; a typical flow:",
    procedureSteps: [
      {
        title: "Idol & timing",
        desc: "Auspicious timing for sthapana; guidance on clay vs eco-friendly idols if you are choosing.",
      },
      {
        title: "Pranapratishtha & puja",
        desc: "Installation, shodashopachara-style worship as agreed, and aarti.",
      },
      {
        title: "Daily worship (if multi-day)",
        desc: "Short daily routine your family can follow, with optional follow-up visits by arrangement.",
      },
      {
        title: "Visarjan",
        desc: "Mantras and respectful visarjan steps suited to Nagpur norms and eco options.",
      },
    ],
    prepareHeading: "What to prepare",
    prepareIntro:
      "Common items for Ganpati Puja in Nagpur:",
    prepareItems: [
      {
        title: "Idol & cloth",
        desc: "Ganesha idol or photo, red cloth, garlands, and a stable platform.",
      },
      {
        title: "Offerings",
        desc: "Modak or sweets, durva grass, flowers, incense, lamps, and panchamrit as advised.",
      },
      {
        title: "Visarjan",
        desc: "Bucket or arrangements for home visarjan or local immersion — we guide based on your plan.",
      },
    ],
    faqItems: [
      {
        q: "Can you perform only sthapana?",
        a: "Yes — we can do installation and main puja, and leave you with a simple daily aarti outline.",
      },
      {
        q: "Is this the same as office Ganpati?",
        a: "Vidhi can be adapted for office mandaps — share headcount and space when booking.",
      },
    ],
    ctaHeading: "Book Ganpati Puja in Nagpur",
    ctaBody:
      "Tell us if you need single-day or multi-day support and your area in Nagpur.",
    waPrefill:
      "Hari Om. I would like to book Ganpati Puja in Nagpur. Please share available dates and details.",
  },

  "/vivah-marriage-puja-nagpur": {
    path: "/vivah-marriage-puja-nagpur",
    metaTitle: "Vivah Puja & Hindu Marriage Rituals in Nagpur | Darbhe Guruji",
    metaDescription:
      "Vivah Puja and Hindu marriage rituals in Nagpur — engagement, haldi, wedding day vidhi, and pre-wedding pujas. Book Pandit Devesh Darbhe for your ceremony.",
    breadcrumbLabel: "Vivah Puja in Nagpur",
    h1: "Vivah Puja (Hindu Marriage) in Nagpur",
    introLead: "Begin married life with sacred ",
    introStrong: "Vivah Puja and Hindu marriage rituals in Nagpur",
    introRest:
      " — engagement ceremonies, wedding-day mantras, kanyadaan flow, saptapadi, and regional customs your family honours.",
    benefitsHeading: "Why book Vivah Puja with us",
    benefits: [
      {
        title: "Tradition-first",
        desc: "We respect Marathi, Hindi, and common North/South variations — share your family line.",
      },
      {
        title: "Clear rehearsal",
        desc: "Bridal party and parents know what happens at each step — less stress on the day.",
      },
      {
        title: "Scalable",
        desc: "From intimate home weddings to larger mandap setups in Nagpur.",
      },
      {
        title: "Add-on rituals",
        desc: "Haldi, mehndi puja, graha shanti, or satyanarayan before wedding — plan as a package.",
      },
    ],
    procedureHeading: "Procedure: Vivah Puja (overview)",
    procedureLead: "Each ",
    procedureStrong: "Vivah Puja in Nagpur",
    procedureTail:
      " is customised; a full wedding day often includes:",
    procedureSteps: [
      {
        title: "Pre-wedding alignment",
        desc: "Engagement / lagna or muhurat confirmation and family preferences documented.",
      },
      {
        title: "Wedding day sankalpa",
        desc: "Vara puja, kanyadaan, mangalpheras / saptapadi per your sampradaya, and mangalashtak.",
      },
      {
        title: "Aashirvada",
        desc: "Blessings and optional annaprashana hints for later milestones — as per your schedule.",
      },
    ],
    prepareHeading: "What to prepare",
    prepareIntro:
      "For Vivah Puja in Nagpur, families typically coordinate:",
    prepareItems: [
      {
        title: "Mandap items",
        desc: "Kalash, mangal sutra plates, kumkum, rice, ghee lamps, and seating per venue layout.",
      },
      {
        title: "Family roles",
        desc: "Who performs kanyadaan, who holds items — we align in advance.",
      },
      {
        title: "Documents & timing",
        desc: "Marriage certificate timing if civil registration same day — we keep ritual timing realistic.",
      },
    ],
    faqItems: [
      {
        q: "Do you travel outside Nagpur for weddings?",
        a: "Destination weddings can be discussed — share date, city, and scale.",
      },
      {
        q: "Can you coordinate with the venue purohit team?",
        a: "Yes — we can align script and sequence with decorators and event managers.",
      },
    ],
    ctaHeading: "Book Vivah Puja in Nagpur",
    ctaBody:
      "Share wedding date, venue area in Nagpur, and regional tradition. We will propose a clear plan.",
    waPrefill:
      "Hari Om. I would like to discuss Vivah / marriage puja in Nagpur. Please advise.",
  },

  "/astrology-consultation-nagpur": {
    path: "/astrology-consultation-nagpur",
    metaTitle: "Astrology Consultation in Nagpur | Vedic Jyotish | Darbhe Guruji",
    metaDescription:
      "Vedic astrology consultation in Nagpur — birth chart analysis, dasha, muhurat, marriage matching, and life guidance with Pandit Devesh Darbhe.",
    breadcrumbLabel: "Astrology consultation in Nagpur",
    h1: "Astrology Consultation in Nagpur",
    introLead: "Gain perspective through ",
    introStrong: "authentic Vedic astrology in Nagpur",
    introRest:
      " — chart study, planetary periods, and practical guidance for career, relationships, health emphasis, and auspicious timing.",
    benefitsHeading: "What you can explore",
    benefits: [
      {
        title: "Life direction",
        desc: "Career moves, education, relocation, and major decisions with timing notes.",
      },
      {
        title: "Relationships",
        desc: "Compatibility (kundali matching) explained with sensitivity.",
      },
      {
        title: "Muhurat",
        desc: "Wedding dates, Griha Pravesh, travel, or new ventures — aligned to your chart.",
      },
      {
        title: "Remedies",
        desc: "Simple mantra or vrata suggestions where relevant — measured and respectful.",
      },
    ],
    procedureHeading: "How consultations work",
    procedureLead: "A typical ",
    procedureStrong: "astrology consultation in Nagpur",
    procedureTail:
      " includes:",
    procedureSteps: [
      {
        title: "Birth details",
        desc: "Date, time, and place of birth — we confirm accuracy and your main questions.",
      },
      {
        title: "Chart review",
        desc: "Lagna, key grahas, and relevant dasha periods for your situation.",
      },
      {
        title: "Guidance",
        desc: "Plain-language explanation and space for questions within the session.",
      },
    ],
    prepareHeading: "What to prepare",
    prepareIntro:
      "Before your astrology consultation in Nagpur, please keep ready:",
    prepareItems: [
      {
        title: "Accurate birth data",
        desc: "Hospital record or janam patri if available; approximate time if exact time is unknown (we discuss impact).",
      },
      {
        title: "Priority questions",
        desc: "Top 2–3 topics so we use session time well.",
      },
      {
        title: "Prior readings",
        desc: "Optional — share if you have an older chart file or matching details for marriage queries.",
      },
    ],
    faqItems: [
      {
        q: "Is the session only in person?",
        a: "We offer structured phone or video sessions if you prefer remote consultation from Nagpur or nearby.",
      },
      {
        q: "How long is one session?",
        a: "Usually 45–60 minutes for a focused reading; deeper topics may need a follow-up.",
      },
    ],
    ctaHeading: "Book an astrology consultation in Nagpur",
    ctaBody:
      "Share birth details and questions. We will confirm slot availability.",
    waPrefill:
      "Hari Om. I would like to book an astrology consultation in Nagpur. Please share your process and availability.",
  },
};

export function relatedServiceLinks(currentPath: string): { path: string; label: string }[] {
  return SERVICE_PUJA_PATHS.filter((p) => p !== currentPath).map((path) => {
    const cfg = SERVICE_PUJA_PAGES[path];
    return {
      path,
      label: cfg?.breadcrumbLabel ?? path,
    };
  });
}
