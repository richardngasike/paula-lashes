export const site = {
  name: "Paula Lashes",
  tagline: "Lashes & Nails, Beautifully Done",
  category: "Eyelash Salon & Nail Salon",
  description:
    "Paula Lashes offers professional lash extensions (individual & clusters) and nail services (gel, acrylics & pedicure). We offer both incall and outcall services in Ruaka and surrounding areas.",
  phone: "+254 714 616451",
  phoneRaw: "254714616451",
  email: "paulalasheskenya@gmail.com",
  location: "Ruaka, Kenya",
  serviceMode: "Incall & Outcall available",
  hours: "Monday - Sunday, 8:00 AM - 7:00 PM",
  hoursShort: "Mon - Sun: 8AM - 7PM",
  url: "https://paulalashes.co.ke",
  mapEmbed:
    "https://www.google.com/maps?q=Ruaka,+Kenya&output=embed",
  socials: {
    instagram: "https://instagram.com/",
    tiktok: "https://tiktok.com/",
    facebook: "https://facebook.com/",
  },
  areas: [
    "Ruaka",
    "Banana",
    "Ndenderu",
    "Two Rivers",
    "Runda",
    "Gigiri",
    "Kiambu Road",
    "Thindigua",
    "Muchatha",
    "Rosslyn",
  ],
};

export const whatsappLink = (text = "Hello Paula Lashes, I would like to book an appointment.") =>
  `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(text)}`;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/lashes", label: "Lashes" },
  { href: "/nails", label: "Nails" },
  { href: "/pricing", label: "Pricing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

/*
  Prices below are starting prices in KES.
  Update them to match your current price list.
*/
export const lashServices = [
  {
    slug: "classic",
    title: "Classic Individual Extensions",
    image: "/lash-classic.png",
    duration: "1.5 - 2 hrs",
    price: 2500,
    text: "One extension applied to each natural lash for a soft, defined, mascara-like finish that looks naturally yours.",
  },
  {
    slug: "hybrid",
    title: "Hybrid Lash Extensions",
    image: "/lash-hybrid.png",
    duration: "2 - 2.5 hrs",
    price: 3000,
    text: "A blend of classic and volume techniques that adds texture and fullness while keeping a natural feel.",
  },
  {
    slug: "volume",
    title: "Volume Lash Extensions",
    image: "/lash-volume.png",
    duration: "2 - 2.5 hrs",
    price: 3500,
    text: "Handmade lightweight fans placed on each natural lash for a fluffy, full and dramatic look.",
  },
  {
    slug: "mega-volume",
    title: "Mega Volume Lashes",
    image: "/lash-mega-volume.png",
    duration: "2.5 - 3 hrs",
    price: 4500,
    text: "Our boldest set. Dense, dark and glamorous for clients who love a statement lash every day.",
  },
  {
    slug: "wispy",
    title: "Wispy / Kim K Style",
    image: "/lash-wispy.png",
    duration: "2 - 2.5 hrs",
    price: 3800,
    text: "Spiky, textured lash map with varied lengths for that editorial, wet-look wispy effect.",
  },
  {
    slug: "clusters",
    title: "Lash Clusters",
    image: "/lash-clusters.png",
    duration: "45 min - 1 hr",
    price: 1500,
    text: "Pre-made cluster lashes for a quick, full and affordable lash look, ideal for events and weekends.",
  },
  {
    slug: "refill",
    title: "Lash Refills",
    image: "/lash-refill.png",
    duration: "1 - 1.5 hrs",
    price: 1500,
    text: "Keep your set looking full. We recommend refills every 2 to 3 weeks to maintain your lash line.",
  },
  {
    slug: "removal",
    title: "Removal & Lash Cleaning",
    image: "/lash-removal.png",
    duration: "30 min",
    price: 500,
    text: "Safe, gentle removal with a professional cream remover plus a deep lash bath to protect your natural lashes.",
  },
  {
    slug: "lift-tint",
    title: "Lash Lift & Tint",
    image: "/lash-lift.png",
    duration: "1 hr",
    price: 2500,
    text: "Curl and darken your natural lashes from root to tip. No extensions, results last 6 to 8 weeks.",
  },
  {
    slug: "brow-lamination",
    title: "Brow Lamination & Shaping",
    image: "/brow-lamination.png",
    duration: "45 min",
    price: 2000,
    text: "Brushed-up, fluffy, perfectly shaped brows that frame your face and complement your lashes.",
  },
  {
    slug: "bottom-lashes",
    title: "Bottom Lash Extensions",
    image: "/lash-bottom.png",
    duration: "30 min",
    price: 1000,
    text: "Add-on lower lash extensions to complete and balance your full lash look.",
  },
];

export const nailServices = [
  {
    slug: "gel-polish",
    title: "Gel Polish",
    image: "/nail-gel.png",
    duration: "45 min",
    price: 1000,
    text: "Glossy, chip-resistant colour on natural nails that lasts up to 3 weeks. Hundreds of shades to choose from.",
  },
  {
    slug: "manicure",
    title: "Classic Manicure",
    image: "/nail-manicure.png",
    duration: "45 min",
    price: 800,
    text: "Shaping, cuticle care, hand massage and polish for clean, healthy and elegant hands.",
  },
  {
    slug: "pedicure",
    title: "Classic Pedicure",
    image: "/nail-pedicure.png",
    duration: "1 hr",
    price: 1200,
    text: "Foot soak, scrub, nail shaping, cuticle care and polish for soft, fresh feet.",
  },
  {
    slug: "spa-pedicure",
    title: "Luxury Spa Pedicure",
    image: "/nail-spa-pedicure.png",
    duration: "1.5 hrs",
    price: 2000,
    text: "Our full foot ritual with callus treatment, exfoliating mask, hot towel wrap and extended massage.",
  },
  {
    slug: "acrylics",
    title: "Acrylic Extensions",
    image: "/nail-acrylic.png",
    duration: "1.5 - 2 hrs",
    price: 2500,
    text: "Strong, long-lasting nail extensions sculpted to your preferred length and shape.",
  },
  {
    slug: "builder-gel",
    title: "Builder Gel (BIAB)",
    image: "/nail-builder-gel.png",
    duration: "1 - 1.5 hrs",
    price: 2000,
    text: "Strengthening overlay on natural nails for growth, structure and a flawless, natural finish.",
  },
  {
    slug: "gel-extensions",
    title: "Gel-X / Soft Gel Extensions",
    image: "/nail-gelx.png",
    duration: "1.5 hrs",
    price: 2800,
    text: "Lightweight full-cover tips bonded with gel for a flexible, natural-feeling extension.",
  },
  {
    slug: "polygel",
    title: "Polygel Nails",
    image: "/nail-polygel.png",
    duration: "1.5 hrs",
    price: 2500,
    text: "The strength of acrylic with the comfort of gel. Odour-free, light and durable.",
  },
  {
    slug: "nail-art",
    title: "Nail Art & Design",
    image: "/nail-art.png",
    duration: "Varies",
    price: 300,
    text: "French tips, ombre, chrome, 3D charms, hand-painted art and custom designs priced per nail or set.",
  },
  {
    slug: "french",
    title: "French & Ombre Finish",
    image: "/nail-french.png",
    duration: "1 hr",
    price: 1500,
    text: "Timeless French tips or a soft baby-boomer ombre for a classy, clean look.",
  },
  {
    slug: "soak-off",
    title: "Soak-Off & Removal",
    image: "/nail-removal.png",
    duration: "30 min",
    price: 500,
    text: "Gentle removal of gel, acrylic or polygel without damaging your natural nails.",
  },
  {
    slug: "repair",
    title: "Nail Repair & Infills",
    image: "/nail-infill.png",
    duration: "1 hr",
    price: 1500,
    text: "Infill growth and repair broken nails to keep your extensions looking fresh.",
  },
];

export const packages = [
  {
    title: "Bridal Beauty Package",
    image: "/package-bridal.png",
    price: 8500,
    items: [
      "Volume or hybrid lash set",
      "Acrylic or gel-x nails with bridal art",
      "Luxury spa pedicure",
      "Outcall to your venue available",
    ],
  },
  {
    title: "Glow Up Combo",
    image: "/package-glow.png",
    price: 4500,
    featured: true,
    items: [
      "Classic or hybrid lash set",
      "Gel polish manicure",
      "Classic pedicure",
      "Free lash aftercare guide",
    ],
  },
  {
    title: "Squad & Events",
    image: "/package-squad.png",
    price: 6000,
    items: [
      "Lash clusters for 3 or more",
      "Gel polish for the group",
      "We come to your home or venue",
      "Ideal for birthdays and bridal showers",
    ],
  },
];

export const testimonials = [
  {
    name: "Client Name",
    service: "Volume Lashes",
    image: "/client-1.png",
    text: "Add your client review here. Short, honest feedback from a real client about their lash or nail experience.",
  },
  {
    name: "Client Name",
    service: "Acrylic Nails",
    image: "/client-2.png",
    text: "Add your client review here. Short, honest feedback from a real client about their lash or nail experience.",
  },
  {
    name: "Client Name",
    service: "Outcall Pedicure",
    image: "/client-3.png",
    text: "Add your client review here. Short, honest feedback from a real client about their lash or nail experience.",
  },
];

export const gallery = [
  { image: "/gallery-1.png", category: "lashes", label: "Volume Set" },
  { image: "/gallery-2.png", category: "nails", label: "Chrome Nails" },
  { image: "/gallery-3.png", category: "lashes", label: "Wispy Lashes" },
  { image: "/gallery-4.png", category: "nails", label: "French Tips" },
  { image: "/gallery-5.png", category: "lashes", label: "Classic Set" },
  { image: "/gallery-6.png", category: "nails", label: "Nail Art" },
  { image: "/gallery-7.png", category: "nails", label: "Pedicure" },
  { image: "/gallery-8.png", category: "lashes", label: "Clusters" },
  { image: "/gallery-9.png", category: "studio", label: "Our Studio" },
  { image: "/gallery-10.png", category: "nails", label: "Acrylics" },
  { image: "/gallery-11.png", category: "lashes", label: "Hybrid Set" },
  { image: "/gallery-12.png", category: "studio", label: "Outcall Kit" },
];

export const faqs = [
  {
    q: "How do I book an appointment?",
    a: "Book through our booking page, call or WhatsApp us on +254 714 616451. We will confirm your date, time and whether it is incall or outcall.",
  },
  {
    q: "What is the difference between incall and outcall?",
    a: "Incall means you visit us at our studio in Ruaka. Outcall means we come to your home, office or event venue in Ruaka and surrounding areas with a fully equipped kit.",
  },
  {
    q: "Is there an extra charge for outcall?",
    a: "A small transport fee applies depending on your location. Share your area when booking and we will give you the exact amount.",
  },
  {
    q: "How long do lash extensions last?",
    a: "Extensions follow your natural lash cycle and usually last 4 to 6 weeks. We recommend a refill every 2 to 3 weeks to keep them full.",
  },
  {
    q: "Will lash extensions damage my natural lashes?",
    a: "No, when applied and removed professionally. We isolate every lash, use lightweight extensions and always remove them safely in studio.",
  },
  {
    q: "How should I prepare for my appointment?",
    a: "Come with clean lashes, free of mascara and oil-based products. For nails, arrive with clean nails and let us know if you have existing gel or acrylics to remove.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept M-Pesa and cash. A booking deposit may be required for outcall and package appointments.",
  },
];

export const whyUs = [
  {
    title: "Certified Technicians",
    text: "Trained lash and nail artists who care about safety, hygiene and detail.",
  },
  {
    title: "Premium Products",
    text: "Quality lash fibres, medical-grade adhesive and long-lasting gel systems.",
  },
  {
    title: "Strict Hygiene",
    text: "Sterilised tools, fresh disposables and a clean, calm studio every time.",
  },
  {
    title: "We Come To You",
    text: "Outcall service across Ruaka and nearby areas for home, office and events.",
  },
];

export const steps = [
  { title: "Choose Your Service", text: "Browse lashes, nails or packages and pick your favourite look." },
  { title: "Book Your Slot", text: "Send a booking request or WhatsApp us with your preferred date and time." },
  { title: "Incall or Outcall", text: "Visit our Ruaka studio or relax while we come to your location." },
  { title: "Leave Glowing", text: "Walk away with flawless lashes and nails plus aftercare tips." },
];
