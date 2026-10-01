export interface NavSubItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
  elevation?: string;
  duration?: string;
}

export interface NavGroup {
  heading: string;
  viewAllHref?: string;
  items: NavSubItem[];
}

export interface NavItem {
  title: string;
  href: string;
  type: "link" | "dropdown" | "mega";
  groups?: NavGroup[];
  items?: NavSubItem[];
}

export const navigationData: NavItem[] = [
  {
    title: "Company",
    href: "/company",
    type: "dropdown",
    items: [
      {
        title: "Our Team",
        href: "/company/our-team",
        description: "Veteran Sherpa climbers, licensed guides, and expedition planners.",
      },
      {
        title: "Certificates & Documents",
        href: "/company/certificates-and-documents",
        description: "Government licenses, NTB accreditation, and safety credentials.",
      },
      {
        title: "Careers",
        href: "/company/careers",
        description: "Join our Himalayan mountain guiding and operations team.",
      },
    ],
  },
  {
    title: "Trekking",
    href: "/trekking",
    type: "mega",
    groups: [
      {
        heading: "Trekking Regions",
        viewAllHref: "/trekking/regions",
        items: [
          {
            title: "Everest Region",
            href: "/trekking/everest-region",
            description: "Khumbu valley, legendary Sherpa villages, and Nuptse-Lhotse peaks.",
          },
          {
            title: "Annapurna Region",
            href: "/trekking/annapurna-region",
            description: "Massif vistas, Thorong La pass, and scenic rhododendron forests.",
          },
          {
            title: "Langtang Region",
            href: "/trekking/langtang-region",
            description: "Valley of glaciers, Tamang culture, and pristine alpine meadows.",
          },
          {
            title: "Manaslu Region",
            href: "/trekking/manaslu-region",
            description: "Unspoiled trails, Larkya La pass, and Tibetan Buddhist monasteries.",
          },
          {
            title: "Dolpa Region",
            href: "/trekking/dolpa-region",
            description: "Remote western wilderness, Shey Phoksundo lake, and Bon culture.",
          },
          {
            title: "Mustang Region",
            href: "/trekking/mustang-region",
            description: "The ancient walled kingdom of Lo Manthang and arid gorges.",
          },
          {
            title: "View All Regions",
            href: "/trekking/regions",
            badge: "All",
          },
        ],
      },
      {
        heading: "Popular Treks",
        viewAllHref: "/trekking",
        items: [
          {
            title: "Everest Base Camp",
            href: "/trekking/everest-base-camp",
            elevation: "5,364m",
            duration: "14 Days",
            badge: "Classic",
          },
          {
            title: "Pikey Dudhkunda",
            href: "/trekking/pikey-dudhkunda",
            elevation: "4,065m",
            duration: "10 Days",
            badge: "Scenic",
          },
          {
            title: "Gokyo Lakes",
            href: "/trekking/gokyo-lakes",
            elevation: "5,357m",
            duration: "12 Days",
            badge: "Glacial",
          },
          {
            title: "Mani Rimdu Festival",
            href: "/trekking/mani-rimdu-festival",
            elevation: "3,867m",
            duration: "15 Days",
            badge: "Cultural",
          },
          {
            title: "View All Treks",
            href: "/trekking",
            badge: "Explore",
          },
        ],
      },
    ],
  },
  {
    title: "Expeditions",
    href: "/expeditions",
    type: "mega",
    groups: [
      {
        heading: "Categories",
        viewAllHref: "/expeditions",
        items: [
          {
            title: "8000m",
            href: "/expeditions/8000m",
            description: "The supreme peaks of the planet, full high-altitude logistical support.",
          },
          {
            title: "7000m",
            href: "/expeditions/7000m",
            description: "Technical Himalayan ascents for experienced mountaineers.",
          },
          {
            title: "6000m",
            href: "/expeditions/6000m",
            description: "Accessible trekking peaks including Island Peak & Mera Peak.",
          },
          {
            title: "Motorbike Adventure",
            href: "/expeditions/motorbike-adventure",
            description: "High-altitude dual-sport overland tours across Upper Mustang & Himalayas.",
          },
        ],
      },
      {
        heading: "Featured Expeditions",
        viewAllHref: "/expeditions",
        items: [
          {
            title: "Everest Expedition — 8,848m",
            href: "/expeditions/everest",
            elevation: "8,848m",
            badge: "South Col",
            description: "The pinnacle of mountaineering via the classic Khumbu Icefall route.",
          },
          {
            title: "Kangchenjunga — 8,586m",
            href: "/expeditions/kangchenjunga",
            elevation: "8,586m",
            badge: "Remote",
            description: "The world's third highest summit in eastern Nepal's pristine wilderness.",
          },
          {
            title: "View All Expeditions",
            href: "/expeditions",
            badge: "Full List",
          },
        ],
      },
    ],
  },
  {
    title: "Travel Guide",
    href: "/travel-guide",
    type: "dropdown",
    items: [
      {
        title: "Travel Guide",
        href: "/travel-guide",
        description: "Essential visa, seasonal weather, and Nepal travel advice.",
      },
      {
        title: "Trekking Packing List",
        href: "/travel-guide/packing-list",
        description: "Layering systems, footwear, and recommended gear checklist.",
      },
      {
        title: "Terms and Conditions",
        href: "/travel-guide/terms-and-conditions",
        description: "Booking policies, deposit schedules, and trip guarantees.",
      },
      {
        title: "FAQs",
        href: "/travel-guide/faqs",
        description: "Answers to common altitude, food, and teahouse questions.",
      },
      {
        title: "Travel Insurance",
        href: "/travel-guide/travel-insurance",
        description: "Mandatory emergency evacuation and high-altitude medical coverage.",
      },
      {
        title: "Inquiry / Booking",
        href: "/travel-guide/inquiry-booking",
        description: "Custom itinerary design and private departure reservations.",
      },
    ],
  },
  {
    title: "Contact Us",
    href: "/contact",
    type: "link",
  },
];

export const WHATSAPP_URL = "https://wa.me/9779841784192";
export const WHATSAPP_LABEL = "Chat on WhatsApp";
export const PHONE_NUMBER = "+977 9841784192";
export const EMAIL_ADDRESS = "info@simrikexpress.com";
export const LOCATION_ADDRESS = "Thamel, Kathmandu, Nepal";

export interface LanguageItem {
  code: string;
  name: string;
  flag: string;
}

export const LANGUAGES: LanguageItem[] = [
  {
    code: "EN",
    name: "English",
    flag: "/assets/flags/us.webp",
  },
  {
    code: "NE",
    name: "Nepali",
    flag: "/assets/flags/np.webp",
  },
];
