export const SALON = {
  name: "Passion Look",
  fullName: "Passion Look | Men's & Women's Salon Since 1999",
  tagline: "Luxury Grooming & Beauty Experience Since 1999",
  established: 1999,
  phone: "0321 4356844",
  phoneIntl: "+923214356844",
  whatsapp: "923214356844",
  email: "hello@passionlook.com",
  address: {
    line1: "421/A Block, Butt Chowk,",
    line2: "Tajpura Scheme Road,",
    line3: "Near Jawa Sweet, Ghaziabad,",
    line4: "Lahore 54000",
  },
  hours: "Open 24 Hours",
  rating: 4.9,
  reviewCount: 341,
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;

export type ServiceItem = {
  name: string;
  description: string;
  icon: string;
  category: "Hair" | "Beard" | "Beauty";
};

export const SERVICES: ServiceItem[] = [
  { name: "Hair Colouring", description: "Rich, dimensional colour crafted by colour specialists for a finish that lasts.", icon: "Palette", category: "Hair" },
  { name: "Beard Dyeing", description: "Seamless, natural-looking beard colour that matches your style and tone.", icon: "Droplet", category: "Beard" },
  { name: "Beard Trim", description: "Precision shaping and sculpting for a clean, defined, well-groomed beard.", icon: "Scissors", category: "Beard" },
  { name: "Buzz Cut", description: "A sharp, low-maintenance cut delivered with expert attention to detail.", icon: "Wind", category: "Hair" },
  { name: "Curly Hair Styling", description: "Enhance and define your natural curls with tailored styling techniques.", icon: "Sparkles", category: "Hair" },
  { name: "Fade Cut", description: "Crisp, seamless fades blended to perfection for a modern silhouette.", icon: "Layers", category: "Hair" },
  { name: "Groom Packages", description: "Complete head-to-toe grooming rituals designed for the modern gentleman.", icon: "Crown", category: "Beard" },
  { name: "Head Shave", description: "A smooth, clean head shave finished with soothing aftercare.", icon: "CircleDot", category: "Hair" },
  { name: "Hot Towel Shave", description: "A classic barbershop ritual with hot towels, oils, and a straight razor.", icon: "Flame", category: "Beard" },
  { name: "Children's Haircuts", description: "Gentle, patient cuts in a friendly space your little ones will love.", icon: "Smile", category: "Hair" },
  { name: "Long Haircuts", description: "Layered, flowing cuts tailored to frame your face and enhance texture.", icon: "Wand2", category: "Hair" },
  { name: "Men's Manicure", description: "Refined hand and nail care for a polished, well-groomed finish.", icon: "Hand", category: "Beauty" },
  { name: "Razor Cut", description: "Sharp definition and texture crafted with a traditional straight razor.", icon: "Slash", category: "Hair" },
  { name: "Scalp Treatment", description: "Restorative scalp therapy to nourish roots and promote healthy growth.", icon: "Leaf", category: "Hair" },
  { name: "Scissor Cut", description: "Classic scissor work for a soft, natural, and effortlessly elegant look.", icon: "Scissors", category: "Hair" },
  { name: "Shampoo & Conditioning", description: "A relaxing cleanse with premium products to refresh and revitalise hair.", icon: "Droplets", category: "Hair" },
  { name: "Hair Straightening", description: "Sleek, smooth, and glossy results with professional straightening care.", icon: "Zap", category: "Hair" },
  { name: "Waxing", description: "Gentle, hygienic waxing for smooth, confident, long-lasting results.", icon: "Sparkle", category: "Beauty" },
];

export type FeatureItem = {
  title: string;
  description: string;
  icon: string;
};

export const FEATURES: FeatureItem[] = [
  { title: "Serving Since 1999", description: "Over two decades of trusted grooming and beauty expertise.", icon: "Award" },
  { title: "Professional Stylists", description: "A team of seasoned artists devoted to their craft.", icon: "Scissors" },
  { title: "Friendly Staff", description: "Warm, welcoming professionals who make every visit a pleasure.", icon: "HeartHandshake" },
  { title: "Premium Experience", description: "Every detail designed for comfort, calm, and indulgence.", icon: "Crown" },
  { title: "Hygienic Environment", description: "Sanitised tools and spotless stations for your peace of mind.", icon: "ShieldCheck" },
  { title: "Modern Equipment", description: "State-of-the-art tools paired with time-honoured techniques.", icon: "Settings2" },
  { title: "Luxury Atmosphere", description: "An elegant setting that feels like a private retreat.", icon: "Sparkles" },
  { title: "High Satisfaction", description: "A 4.9-star reputation built on 341 delighted reviews.", icon: "Star" },
];

export type GalleryItem = {
  src: string;
  alt: string;
  category: "Haircuts" | "Bridal" | "Groom Styling" | "Salon Interior" | "Services";
};

export const GALLERY: GalleryItem[] = [
  { src: '/images/P7.jpg', alt: 'Bridal couple styled at Passion Look', category: 'Bridal' },
  { src: '/images/P_8.jpg', alt: 'Groom portrait — signature styling by Passion Look', category: 'Groom Styling' },
  { src: '/images/P_10.jpg', alt: 'Precision fade haircut at Passion Look', category: 'Haircuts' },
  { src: '/images/P_13.jpg', alt: 'Groom in golden sherwani — Passion Look groom package', category: 'Groom Styling' },
  { src: '/images/p_11.jpg', alt: 'Bridal beauty and makeup styling', category: 'Bridal' },
  { src: '/images/P14.jpg', alt: "Men's side-profile haircut at Passion Look", category: 'Haircuts' },
  { src: '/images/P_9.jpg', alt: 'Passion Look salon interior', category: 'Salon Interior' },
  { src: '/images/p_12.jpg', alt: 'Passion Look full services and pricing board', category: 'Services' },
];

export const GALLERY_CATEGORIES = [
  'All',
  'Haircuts',
  'Bridal',
  'Groom Styling',
  'Salon Interior',
  'Services',
] as const;

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  initials: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ahmed Raza",
    role: "Regular Client · 3 Years",
    quote: "The most refined grooming experience I've had in Lahore. Every visit feels like a ritual — the attention to detail from the stylists is simply unmatched.",
    rating: 5,
    initials: "AR",
  },
  {
    name: "Sana Malik",
    role: "Colour Specialist Client",
    quote: "I came in nervous about going lighter and left absolutely in love with my hair. The colour team understands tone and texture like true artists.",
    rating: 5,
    initials: "SM",
  },
  {
    name: "Bilal Khan",
    role: "Groom Package Member",
    quote: "Their groom package is worth every rupee. Hot towel shave, fade, and a manicure — I walked out feeling like a completely new person.",
    rating: 5,
    initials: "BK",
  },
  {
    name: "Fatima Sheikh",
    role: "Bridal Styling Client",
    quote: "From the moment you walk in, the atmosphere is serene and luxurious. The stylists listened to exactly what I wanted and delivered beyond it.",
    rating: 5,
    initials: "FS",
  },
  {
    name: "Usman Tariq",
    role: "Beard Styling Client",
    quote: "Best beard work in the city, hands down. The straight-razor shave with hot towels is an experience I now look forward to every single month.",
    rating: 5,
    initials: "UT",
  },
  {
    name: "Hira Javed",
    role: "Salon Member · 2 Years",
    quote: "Clean, professional, and genuinely welcoming. The hygiene standards here are visibly higher than anywhere else I've been. Highly recommend.",
    rating: 5,
    initials: "HJ",
  },
];

export const TIME_SLOTS = [
  "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM",
  "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",
] as const;

export const STATS = [
  { value: 25, suffix: "+", label: "Years of Excellence" },
  { value: 341, suffix: "", label: "5-Star Reviews" },
  { value: 18, suffix: "", label: "Signature Services" },
  { value: 10000, suffix: "+", label: "Happy Clients" },
] as const;
