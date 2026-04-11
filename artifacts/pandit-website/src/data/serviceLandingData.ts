export type ServiceFaq = { q: string; a: string };
export type ServiceBlock = { title: string; desc: string };
export type ServiceStep = { title: string; desc: string };

export type ServiceLandingConfig = {
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
  procedureSteps: ServiceStep[];
  faqItems: ServiceFaq[];
  ctaHeading: string;
  ctaBody: string;
  waPrefill: string;
};

export const SERVICE_LANDING_ORDER: string[] = [
  "/satyanarayan-puja-nagpur",
  "/griha-pravesh-puja-nagpur",
  "/vastu-shanti-nagpur",
  "/astrology-consultation-nagpur",
  "/ganesh-chaturthi-puja-nagpur",
  "/rudrabhishek-puja-nagpur",
  "/namkaran-rituals-nagpur",
];

/** Short labels for footer / internal “Learn more” lists (order matches publishing priority). */
export const SERVICE_FOOTER_LINKS: { path: string; label: string }[] = [
  { path: "/griha-pravesh-puja-nagpur", label: "Griha Pravesh Puja" },
  { path: "/vastu-shanti-nagpur", label: "Vastu Shanti & consultant" },
  { path: "/astrology-consultation-nagpur", label: "Astrology consultation" },
  { path: "/ganesh-chaturthi-puja-nagpur", label: "Ganesh Chaturthi Puja" },
  { path: "/rudrabhishek-puja-nagpur", label: "Rudrabhishek Puja" },
  { path: "/namkaran-rituals-nagpur", label: "Namkaran & family rituals" },
  { path: "/satyanarayan-puja-nagpur", label: "Satyanarayan Puja" },
];

export const SERVICE_LANDING_PAGES: Record<string, ServiceLandingConfig> = {
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
    metaTitle: "Griha Pravesh Puja in Nagpur | New Home Vastu | Darbhe Guruji",
    metaDescription:
      "Book Griha Pravesh Puja in Nagpur for your new home. Vedic entry rituals, auspicious muhurat, and full guidance on samagri — home visits across Nagpur.",
    breadcrumbLabel: "Griha Pravesh Puja in Nagpur",
    h1: "Griha Pravesh Puja in Nagpur",
    introLead: "Welcome prosperity into your new home with an authentic ",
    introStrong: "Griha Pravesh Puja in Nagpur",
    introRest:
      " led by Pandit Devesh Darbhe — complete vidhi, Vastu-friendly timing, and calm step-by-step guidance for your family.",
    benefitsHeading: "Why perform Griha Pravesh",
    benefits: [
      {
        title: "Auspicious entry",
        desc: "Traditional rites to harmonize the space before you begin living — aligned with muhurat and family sankalpa.",
      },
      {
        title: "Vastu-aligned flow",
        desc: "Rituals that support balance and positivity in the home as you settle in.",
      },
      {
        title: "Clear samagri list",
        desc: "You receive a practical checklist so preparation is simple, whether a compact flat or a larger home.",
      },
      {
        title: "At your doorstep",
        desc: "Performed at your new address in Nagpur or nearby areas — we coordinate timing and setup with you.",
      },
    ],
    procedureHeading: "How we conduct Griha Pravesh Puja",
    procedureLead: "A typical ",
    procedureStrong: "Griha Pravesh Puja in Nagpur",
    procedureTail:
      " follows Vedic steps; details may vary slightly by family tradition and property type.",
    procedureSteps: [
      {
        title: "Muhurat & plan",
        desc: "We confirm your move-in plan and suggest auspicious windows for entry and main rituals.",
      },
      {
        title: "Purification & sankalpa",
        desc: "Entry prayers, gomutra / Ganga jal usage as per practice, and sankalpa for the household.",
      },
      {
        title: "Main Griha Pravesh rituals",
        desc: "Kalash, deity sthapana as applicable, havan or homam elements if included in your package, and aarti.",
      },
      {
        title: "Blessings & guidance",
        desc: "Short guidance on daily practice if desired, and blessings for peace in the new home.",
      },
    ],
    faqItems: [
      {
        q: "When should Griha Pravesh be done?",
        a: "Ideally on an auspicious date and time suited to your nakshatra and the nature of the property. We help shortlist options.",
      },
      {
        q: "Can Griha Pravesh be done for a rented flat?",
        a: "Yes. Many families perform a simplified Griha Pravesh or entry puja when moving into a new rental — we adapt the vidhi.",
      },
      {
        q: "How long does the puja take?",
        a: "Often 1.5–3 hours depending on homam, family size, and add-on rituals.",
      },
      {
        q: "Do you serve all areas of Nagpur?",
        a: "We cover Nagpur city and nearby localities. Share your pin code when booking.",
      },
    ],
    ctaHeading: "Book Griha Pravesh Puja in Nagpur",
    ctaBody:
      "Tell us your new address area and preferred dates. We will suggest muhurat options and a samagri list.",
    waPrefill:
      "Hari Om. I would like to book Griha Pravesh Puja in Nagpur. Please share available dates and details.",
  },

  "/vastu-shanti-nagpur": {
    path: "/vastu-shanti-nagpur",
    metaTitle: "Vastu Shanti & Vastu Consultant in Nagpur | Darbhe Guruji",
    metaDescription:
      "Vastu Shanti puja and Vastu guidance in Nagpur — harmonize your home or workplace. On-site consultation, remedies, and traditional rituals with Pandit Devesh Darbhe.",
    breadcrumbLabel: "Vastu Shanti in Nagpur",
    h1: "Vastu Shanti & Vastu Consultant in Nagpur",
    introLead: "Balance energy and peace in your space with ",
    introStrong: "Vastu Shanti and Vastu consultation in Nagpur",
    introRest:
      " — practical guidance, traditional remedies, and puja performed with clarity for homes and offices.",
    benefitsHeading: "Benefits of Vastu Shanti & consultation",
    benefits: [
      {
        title: "Holistic assessment",
        desc: "Review of layout, directions, and key zones with actionable suggestions.",
      },
      {
        title: "Traditional Shanti rituals",
        desc: "Puja and mantra-led remedies to reduce dosha effects and invite stability.",
      },
      {
        title: "Residential & commercial",
        desc: "Support for new construction, renovations, and workplace setups in Nagpur.",
      },
      {
        title: "Follow-up clarity",
        desc: "Clear explanation of what was performed and simple observances where relevant.",
      },
    ],
    procedureHeading: "How we approach Vastu Shanti",
    procedureLead: "Each ",
    procedureStrong: "Vastu Shanti in Nagpur",
    procedureTail:
      " is tailored — below is a common outline after initial consultation.",
    procedureSteps: [
      {
        title: "Site discussion",
        desc: "We understand your concern — new home, renovation, or recurring obstacles — and review the space.",
      },
      {
        title: "Remedy plan",
        desc: "Simple structural or placement suggestions combined with agreed ritual steps.",
      },
      {
        title: "Vastu Shanti puja",
        desc: "Conducted at your location with mantras, offerings, and homam elements as planned.",
      },
      {
        title: "Completion",
        desc: "Summary of blessings and any light ongoing practices for harmony.",
      },
    ],
    faqItems: [
      {
        q: "Is Vastu Shanti only for new buildings?",
        a: "No. It can be done after renovation, change of use, or when you feel imbalance — we advise based on your situation.",
      },
      {
        q: "Do you visit for consultation before puja?",
        a: "Yes, on-site visits in Nagpur can be arranged so recommendations match your actual layout.",
      },
      {
        q: "How is this different from Griha Pravesh?",
        a: "Griha Pravesh focuses on auspicious entry to a new home; Vastu Shanti targets dosha reduction and energy correction — sometimes both are combined.",
      },
    ],
    ctaHeading: "Book Vastu Shanti in Nagpur",
    ctaBody:
      "Share your property type and concern. We will suggest whether consultation, puja, or both fit best.",
    waPrefill:
      "Hari Om. I would like Vastu Shanti / Vastu consultation in Nagpur. Please advise next steps.",
  },

  "/astrology-consultation-nagpur": {
    path: "/astrology-consultation-nagpur",
    metaTitle: "Vedic Astrology Consultation in Nagpur | Darbhe Guruji",
    metaDescription:
      "Vedic astrology readings in Nagpur — career, marriage compatibility, muhurat, and life guidance with Pandit Devesh Darbhe. In-person or structured phone sessions.",
    breadcrumbLabel: "Astrology Consultation in Nagpur",
    h1: "Vedic Astrology Consultation in Nagpur",
    introLead: "Gain clarity through ",
    introStrong: "authentic Vedic astrology in Nagpur",
    introRest:
      " — chart analysis, dasha insights, and practical guidance rooted in classical principles.",
    benefitsHeading: "What you can explore",
    benefits: [
      {
        title: "Life themes",
        desc: "Career direction, relationships, health emphasis, and timing of key decisions.",
      },
      {
        title: "Muhurat support",
        desc: "Auspicious windows for marriage, Griha Pravesh, travel, or new ventures.",
      },
      {
        title: "Compatibility",
        desc: "Kundali matching explained with sensitivity and cultural context.",
      },
      {
        title: "Remedial perspective",
        desc: "Where appropriate, simple mantra or vrata suggestions — never alarmist.",
      },
    ],
    procedureHeading: "How consultations work",
    procedureLead: "A typical ",
    procedureStrong: "astrology consultation",
    procedureTail:
      " is structured so you leave with notes and clarity — format may vary by question depth.",
    procedureSteps: [
      {
        title: "Birth data & focus",
        desc: "Accurate date, time, and place of birth; we confirm your main questions.",
      },
      {
        title: "Chart analysis",
        desc: "Review of lagna, key grahas, and relevant dasha periods for your situation.",
      },
      {
        title: "Guidance & Q&A",
        desc: "Plain-language explanation and space for follow-up questions within the session.",
      },
    ],
    faqItems: [
      {
        q: "What if birth time is approximate?",
        a: "We discuss how uncertainty affects predictions and may suggest rectification approaches if needed.",
      },
      {
        q: "Is the consultation only in person?",
        a: "We offer structured phone or video sessions for clients who prefer remote sessions from Nagpur or nearby.",
      },
      {
        q: "How long is one session?",
        a: "Usually 45–60 minutes for a focused reading; deeper topics may need a follow-up.",
      },
    ],
    ctaHeading: "Book an astrology consultation",
    ctaBody:
      "Share your birth details and main questions. We will confirm slot availability.",
    waPrefill:
      "Hari Om. I would like to book a Vedic astrology consultation. Please share your process and availability.",
  },

  "/ganesh-chaturthi-puja-nagpur": {
    path: "/ganesh-chaturthi-puja-nagpur",
    metaTitle: "Ganesh Chaturthi Puja in Nagpur | Home & Family | Darbhe Guruji",
    metaDescription:
      "Ganesh Chaturthi Puja in Nagpur at your home — sthapana, aarti, visarjan guidance, and samagri support. Book Pandit Devesh Darbhe for Ganesh Utsav.",
    breadcrumbLabel: "Ganesh Chaturthi Puja in Nagpur",
    h1: "Ganesh Chaturthi Puja in Nagpur",
    introLead: "Celebrate Ganesh Utsav with a heartfelt ",
    introStrong: "Ganesh Chaturthi Puja in Nagpur",
    introRest:
      " — from sthapana to aarti, with clear instructions for family participation.",
    benefitsHeading: "Why book Ganesh Chaturthi Puja with us",
    benefits: [
      {
        title: "Complete festive flow",
        desc: "Pranapratishtha, daily aarti guidance as needed, and structured visarjan planning.",
      },
      {
        title: "Family-friendly",
        desc: "Children and elders can join comfortably — we pace the rituals clearly.",
      },
      {
        title: "Samagri clarity",
        desc: "Modak, flowers, durva grass — lists adapted to your budget and scale.",
      },
      {
        title: "Local experience",
        desc: "Serving households across Nagpur for years of festive pujas.",
      },
    ],
    procedureHeading: "How we conduct Ganesh Chaturthi Puja",
    procedureLead: "Your ",
    procedureStrong: "Ganesh Chaturthi Puja in Nagpur",
    procedureTail:
      " can span a single day or multiple days — we align to your family tradition.",
    procedureSteps: [
      {
        title: "Idol & timing",
        desc: "Advice on auspicious timing for sthapana and daily worship windows.",
      },
      {
        title: "Sthapana & puja",
        desc: "Pranapratishtha, shodashopachara-style worship as agreed, and aarti.",
      },
      {
        title: "Visarjan",
        desc: "Guidance for respectful visarjan — including mantras and simple processions if applicable.",
      },
    ],
    faqItems: [
      {
        q: "Can you help only for sthapana?",
        a: "Yes. We can perform installation and initial puja, and share a short daily routine for family-led worship.",
      },
      {
        q: "Do you provide eco-friendly visarjan options?",
        a: "We can suggest clay idols and local visarjan practices that suit Nagpur norms.",
      },
    ],
    ctaHeading: "Book Ganesh Chaturthi Puja in Nagpur",
    ctaBody: "Share your area in Nagpur and whether you need single-day or multi-day support.",
    waPrefill:
      "Hari Om. I would like to book Ganesh Chaturthi Puja in Nagpur. Please share availability.",
  },

  "/rudrabhishek-puja-nagpur": {
    path: "/rudrabhishek-puja-nagpur",
    metaTitle: "Rudrabhishek Puja in Nagpur | Lord Shiva | Darbhe Guruji",
    metaDescription:
      "Rudrabhishek Puja in Nagpur — sacred abhishekam to Lord Shiva with authentic mantras. Home or mandir-style setup, milk/water offerings, and guidance.",
    breadcrumbLabel: "Rudrabhishek Puja in Nagpur",
    h1: "Rudrabhishek Puja in Nagpur",
    introLead: "Experience deep devotion through ",
    introStrong: "Rudrabhishek Puja in Nagpur",
    introRest:
      " — powerful Rudram chanting, abhishek with sanctified offerings, and calm pacing for seekers.",
    benefitsHeading: "Benefits of Rudrabhishek",
    benefits: [
      {
        title: "Spiritual depth",
        desc: "Connect with Lord Shiva through classical Rudram and abhishek sequences.",
      },
      {
        title: "Peace & clarity",
        desc: "Many families seek Rudrabhishek for inner calm, health prayers, and removal of obstacles.",
      },
      {
        title: "Flexible scale",
        desc: "From intimate home altars to larger gatherings — we adapt materials and duration.",
      },
      {
        title: "Guided preparation",
        desc: "Clear list of liquids, bilva, and flowers so the day runs smoothly.",
      },
    ],
    procedureHeading: "How Rudrabhishek is performed",
    procedureLead: "A full ",
    procedureStrong: "Rudrabhishek in Nagpur",
    procedureTail:
      " includes sankalpa, lingam or idol preparation, and layered abhishek — outline below.",
    procedureSteps: [
      {
        title: "Sankalpa",
        desc: "Purpose of the puja stated — health, peace, shraddha, or specific family intention.",
      },
      {
        title: "Abhishek sequence",
        desc: "Milk, curd, ghee, honey, sugar, water — as per tradition and your arrangement.",
      },
      {
        title: "Rudram & aarti",
        desc: "Chanting with devotion, followed by aarti and prasad distribution.",
      },
    ],
    faqItems: [
      {
        q: "How long does Rudrabhishek take?",
        a: "Typically 2–4 hours depending on chanting depth and number of offerings.",
      },
      {
        q: "Can it be done on a Monday or Maha Shivaratri?",
        a: "Yes — we align with auspicious days and your availability.",
      },
    ],
    ctaHeading: "Book Rudrabhishek Puja in Nagpur",
    ctaBody: "Mention your preferred date and whether you already have a Shiva idol or need setup advice.",
    waPrefill:
      "Hari Om. I would like to book Rudrabhishek Puja in Nagpur. Please share availability.",
  },

  "/namkaran-rituals-nagpur": {
    path: "/namkaran-rituals-nagpur",
    metaTitle: "Namkaran & Hindu Rituals in Nagpur | Darbhe Guruji",
    metaDescription:
      "Namkaran, Annaprashan, Mundan, and other Hindu samskaras in Nagpur — performed with Vedic care at your home. Ask Pandit Devesh Darbhe for marriage and family ceremonies.",
    breadcrumbLabel: "Namkaran & rituals in Nagpur",
    h1: "Namkaran & Sacred Family Rituals in Nagpur",
    introLead: "Celebrate life’s milestones with ",
    introStrong: "Namkaran and traditional Hindu rituals in Nagpur",
    introRest:
      " — naming ceremonies, first rice, mundan, and more, tailored to your family lineage.",
    benefitsHeading: "Rituals we support",
    benefits: [
      {
        title: "Namkaran",
        desc: "Auspicious naming with mantra and family blessings.",
      },
      {
        title: "Annaprashan & Mundan",
        desc: "First grain and tonsure ceremonies conducted with warmth and clarity.",
      },
      {
        title: "Marriage & engagement",
        desc: "Vedic wedding rituals and pre-wedding pujas — discuss scale and tradition.",
      },
      {
        title: "Custom requests",
        desc: "Other samskaras — share your need and we advise feasibility and muhurat.",
      },
    ],
    procedureHeading: "How we plan family rituals",
    procedureLead: "Every ",
    procedureStrong: "family ritual in Nagpur",
    procedureTail:
      " begins with understanding your lineage preferences and the auspicious calendar.",
    procedureSteps: [
      {
        title: "Occasion & tradition",
        desc: "We note regional or family-specific customs you want honoured.",
      },
      {
        title: "Muhurat",
        desc: "Selection of date and time aligned to jyotish principles where applicable.",
      },
      {
        title: "Puja day",
        desc: "Full ritual flow with explanation for guests and family participation.",
      },
    ],
    faqItems: [
      {
        q: "Can you suggest a baby name astrologically?",
        a: "Yes — we can combine sound syllables with nakshatra guidance as part of Namkaran planning.",
      },
      {
        q: "Do you travel for weddings outside Nagpur?",
        a: "Discuss destination and dates — travel can often be arranged for larger ceremonies.",
      },
    ],
    ctaHeading: "Enquire about Namkaran & rituals",
    ctaBody:
      "Describe your ceremony and timeline. We will confirm feasibility and next steps.",
    waPrefill:
      "Hari Om. I would like to enquire about Namkaran / family rituals in Nagpur. Please advise.",
  },
};
