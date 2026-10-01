export interface JourneyOffer {
  id: string;
  title: string;
  duration: string;
  originalPrice: string;
  discountedPrice: string;
  badgePrice: string;
  image: string;
  href: string;
  featured?: boolean;
}

export const exclusiveOffers: JourneyOffer[] = [
  {
    id: "gokyo-renjo-la",
    title: "Gokyo Lake with Renjo-La Trek",
    duration: "15 DAYS",
    originalPrice: "$1,650 /-",
    discountedPrice: "$1,403 /-",
    badgePrice: "$1,403 /- USD",
    image: "/assets/packages/gokyo-renjo.jpg",
    href: "/trekking/gokyo-lakes",
  },
  {
    id: "annapurna-base-camp-offer",
    title: "Annapurna base camp Poonhill Trek",
    duration: "15 DAYS",
    originalPrice: "$1,050 /-",
    discountedPrice: "$945 /-",
    badgePrice: "$945 /- USD",
    image: "/assets/packages/1.jpg",
    href: "/trekking/annapurna-region",
    featured: true,
  },
  {
    id: "everest-base-camp-offer",
    title: "Everest Base Camp",
    duration: "15 DAYS",
    originalPrice: "$1,650 /-",
    discountedPrice: "$1,485 /-",
    badgePrice: "$1,485 /- USD",
    image: "/assets/packages/2.jpg",
    href: "/trekking/everest-base-camp",
  },
];
