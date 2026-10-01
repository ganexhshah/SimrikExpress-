export interface TrekSummary {
  id: string;
  title: string;
  region: string;
  durationDays: number;
  maxAltitude: string;
  grade: "Moderate" | "Demanding" | "Strenuous" | "Challenging";
  bestSeason: string;
  href: string;
  highlight: string;
  featured?: boolean;
}

export interface RegionSummary {
  id: string;
  name: string;
  description: string;
  href: string;
  peakCount: string;
  popularTrek: string;
  badge: string;
}

export const featuredRegions: RegionSummary[] = [
  {
    id: "everest",
    name: "Everest Region",
    description: "Towering 8,000m giants, vibrant Sherpa monasteries, and the iconic Khumbu glacier.",
    href: "/trekking/everest-region",
    peakCount: "4 x 8,000m Peaks",
    popularTrek: "Everest Base Camp",
    badge: "Iconic",
  },
  {
    id: "annapurna",
    name: "Annapurna Region",
    description: "Diverse microclimates from subtropical valleys to the high desert of Mustang and Thorong La.",
    href: "/trekking/annapurna-region",
    peakCount: "Annapurna I (8,091m)",
    popularTrek: "Annapurna Circuit",
    badge: "Diverse",
  },
  {
    id: "langtang",
    name: "Langtang Region",
    description: "Valley of glaciers close to Kathmandu, rich Tamang heritage, and serene alpine pastures.",
    href: "/trekking/langtang-region",
    peakCount: "Langtang Lirung (7,227m)",
    popularTrek: "Langtang Valley Trek",
    badge: "Heritage",
  },
  {
    id: "manaslu",
    name: "Manaslu Region",
    description: "Pristine restricted wilderness circumventing the eighth highest peak on Earth.",
    href: "/trekking/manaslu-region",
    peakCount: "Mt. Manaslu (8,163m)",
    popularTrek: "Manaslu Circuit Trek",
    badge: "Wilderness",
  },
  {
    id: "mustang",
    name: "Mustang Region",
    description: "The mystical former Tibetan kingdom featuring ancient cave dwellings and red-walled canyons.",
    href: "/trekking/mustang-region",
    peakCount: "Nilgiri & Dhaulagiri",
    popularTrek: "Upper Mustang Trek",
    badge: "Kingdom",
  },
  {
    id: "dolpa",
    name: "Dolpa Region",
    description: "Trans-Himalayan rain shadow, crystal turquoise Shey Phoksundo lake, and ancient Bon tradition.",
    href: "/trekking/dolpa-region",
    peakCount: "Kanjiroba Massif",
    popularTrek: "Upper Dolpo Circuit",
    badge: "Remote",
  },
];

export const popularTreks: TrekSummary[] = [
  {
    id: "ebc",
    title: "Everest Base Camp & Kala Patthar",
    region: "Everest Region",
    durationDays: 14,
    maxAltitude: "5,545 m",
    grade: "Demanding",
    bestSeason: "Mar - May / Oct - Dec",
    href: "/trekking/everest-base-camp",
    highlight: "Stand at the foot of the highest mountain on earth with close-up Nuptse and Khumbu icefall views.",
    featured: true,
  },
  {
    id: "gokyo",
    title: "Gokyo Lakes & Gokyo Ri Trek",
    region: "Everest Region",
    durationDays: 12,
    maxAltitude: "5,357 m",
    grade: "Demanding",
    bestSeason: "Mar - May / Oct - Nov",
    href: "/trekking/gokyo-lakes",
    highlight: "Six emerald glacial lakes reflecting Cho Oyu, Everest, Lhotse, and Makalu.",
    featured: true,
  },
  {
    id: "pikey",
    title: "Pikey Peak & Dudhkunda Cultural Trek",
    region: "Lower Khumbu",
    durationDays: 10,
    maxAltitude: "4,065 m",
    grade: "Moderate",
    bestSeason: "Year-Round / Sep - May",
    href: "/trekking/pikey-dudhkunda",
    highlight: "Sir Edmund Hillary's favorite panoramic vantage point over the entire Himalayan range.",
    featured: false,
  },
  {
    id: "mani-rimdu",
    title: "Mani Rimdu Festival Trek",
    region: "Everest Region",
    durationDays: 15,
    maxAltitude: "3,867 m",
    grade: "Moderate",
    bestSeason: "October / November",
    href: "/trekking/mani-rimdu-festival",
    highlight: "Sacred masked lama dance rituals at the historic Tengboche Monastery beneath Ama Dablam.",
    featured: false,
  },
  {
    id: "manaslu-circuit",
    title: "Manaslu Circuit with Larkya La Pass",
    region: "Manaslu Region",
    durationDays: 16,
    maxAltitude: "5,106 m",
    grade: "Strenuous",
    bestSeason: "Mar - May / Oct - Nov",
    href: "/trekking/manaslu-circuit",
    highlight: "An authentic teahouse adventure along ancient salt-trading paths with remote Himalayan pass crossing.",
    featured: true,
  },
  {
    id: "annapurna-circuit",
    title: "Annapurna Circuit & Tilicho Lake",
    region: "Annapurna Region",
    durationDays: 15,
    maxAltitude: "5,416 m",
    grade: "Strenuous",
    bestSeason: "Mar - May / Oct - Nov",
    href: "/trekking/annapurna-circuit",
    highlight: "Epic crossing of Thorong La Pass with side detour to one of the world's highest glacial lakes.",
    featured: false,
  },
];

export const mountaineeringPeaks = [
  {
    name: "Mt. Everest Expedition",
    altitude: "8,848.86 m",
    category: "8000m Peak",
    duration: "60 Days",
    grade: "Extreme",
    href: "/expeditions/everest",
    description: "The ultimate mountaineering objective via the historic South Col and Hillary Step.",
  },
  {
    name: "Mt. Kangchenjunga",
    altitude: "8,586 m",
    category: "8000m Peak",
    duration: "52 Days",
    grade: "Extreme",
    href: "/expeditions/kangchenjunga",
    description: "The remote 'Five Treasures of the Snow' towering over Nepal's eastern border.",
  },
  {
    name: "Ama Dablam Climbing",
    altitude: "6,812 m",
    category: "Technical 6000m",
    duration: "28 Days",
    grade: "Technical",
    href: "/expeditions/ama-dablam",
    description: "The 'Matterhorn of the Himalayas' offering world-class granite and ice climbing.",
  },
  {
    name: "Mera Peak & Island Peak",
    altitude: "6,476 m / 6,189 m",
    category: "Trekking Peak",
    duration: "18-22 Days",
    grade: "Challenging",
    href: "/expeditions/6000m",
    description: "The ideal progression for climbers seeking their first Himalayan high-altitude summit.",
  },
];

export const trustPillars = [
  {
    title: "Veteran Local Sherpa Leadership",
    description: "Every expedition is led by licensed UIAGM/NNMGA certified climbing guides with multiple Himalayan 8,000m summits.",
    icon: "ShieldCheck",
  },
  {
    title: "Uncompromising Mountain Safety",
    description: "Garmin inReach satellite SOS tracking, daily medical pulse-oximetry logs, hyperbaric chambers, and immediate helicopter evacuation protocols.",
    icon: "HeartPulse",
  },
  {
    title: "Responsible Himalayan Stewardship",
    description: "Strict Leave-No-Trace ethos, fair wages and insurance for porters, and support for high-altitude community education.",
    icon: "Compass",
  },
  {
    title: "100% Customized Bespoke Itineraries",
    description: "Handcrafted acclimatization schedules, flexible pace adjustments, and private group departures tailored to your aspirations.",
    icon: "MapPin",
  },
];
