export interface TravelPackage {
  id: string;
  title: string;
  duration: string;
  price: string;
  image: string;
  href: string;
  featured?: boolean;
  hasBakedContent?: boolean;
  highlight?: string;
  maxAltitude?: string;
}

export const affordablePackages: TravelPackage[] = [
  {
    id: "manaslu-circuit",
    title: "Manaslu Circuit Trek",
    duration: "16 DAYS",
    price: "$1,488 /- USD",
    image: "/assets/packages/4.webp",
    href: "/trekking/manaslu-circuit",
    featured: true,
    hasBakedContent: false,
    highlight: "Cross Larkya La Pass (5,106m) into pristine Himalayan wilderness",
    maxAltitude: "5,106 m",
  },
  {
    id: "langtang-trek",
    title: "Langtang trek",
    duration: "10 DAYS",
    price: "$800 /- USD",
    image: "/assets/packages/3.jpg",
    href: "/trekking/langtang-region",
    hasBakedContent: false,
    highlight: "Kyanjin Gompa & serene Tamang heritage valley",
    maxAltitude: "3,870 m",
  },
  {
    id: "annapurna-base-camp",
    title: "Annapurna base camp Poonhill Trek",
    duration: "15 DAYS",
    price: "$1,050 /- USD",
    image: "/assets/packages/1.jpg",
    href: "/trekking/annapurna-region",
    hasBakedContent: false,
    highlight: "Annapurna Sanctuary amphitheater & golden sunrise",
    maxAltitude: "4,130 m",
  },
  {
    id: "everest-gokyo",
    title: "Everest Base Camp via Gokyo Lakes",
    duration: "18 DAYS",
    price: "$2,100 /- USD",
    image: "/assets/packages/5.webp",
    href: "/trekking/gokyo-lakes",
    hasBakedContent: false,
    highlight: "Emerald glacial lakes reflecting Cho Oyu & Everest",
    maxAltitude: "5,357 m",
  },
  {
    id: "everest-base-camp",
    title: "Everest Base Camp",
    duration: "15 DAYS",
    price: "$1,650 /- USD",
    image: "/assets/packages/2.jpg",
    href: "/trekking/everest-base-camp",
    hasBakedContent: false,
    highlight: "Stand at 5,364m beneath the world's highest peak",
    maxAltitude: "5,364 m",
  },
];
