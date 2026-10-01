export interface TripAdvisorReview {
  id: string;
  author: string;
  location: string;
  avatarText: string;
  date: string;
  rating: number;
  trek: string;
  title: string;
  comment: string;
  badge?: string;
}

export const tripAdvisorOverall = {
  rating: 5.0,
  maxRating: 5,
  reviewCount: 486,
  status: "Excellent",
  award: "Travelers' Choice Best of the Best",
  tripAdvisorUrl: "https://www.tripadvisor.com",
};

export const clientReviews: TripAdvisorReview[] = [
  {
    id: "rev-1",
    author: "Dr. Alistair Campbell",
    location: "Edinburgh, United Kingdom",
    avatarText: "AC",
    date: "Reviewed October 2025",
    rating: 5,
    trek: "Everest Base Camp & Kala Patthar",
    title: "Exceptional Sherpa leadership from start to finish",
    comment:
      "Simrik Express exceeded all expectations. Our lead guide Pasang was attentive to our daily oxygen saturation levels and acclimatization pace. Reaching Kala Patthar at sunrise with zero altitude sickness was unforgettable.",
    badge: "Verified Traveler",
  },
  {
    id: "rev-2",
    author: "Elena Rostova & Marc Dubois",
    location: "Geneva, Switzerland",
    avatarText: "ED",
    date: "Reviewed November 2025",
    rating: 5,
    trek: "Manaslu Circuit & Larkya La Pass",
    title: "Raw Himalayan wilderness with five-star mountain logistics",
    comment:
      "We wanted an unspoiled trail away from crowds. The Manaslu circuit was mesmerizing. The teahouse bookings were impeccably arranged, food hygiene was rigorously prioritized, and the Larkya La pass crossing was handled with utmost safety.",
    badge: "Verified Traveler",
  },
  {
    id: "rev-3",
    author: "Sarah & David Jenkins",
    location: "Melbourne, Australia",
    avatarText: "SJ",
    date: "Reviewed September 2025",
    rating: 5,
    trek: "Gokyo Lakes & Cho La Pass",
    title: "Best trekking agency in Kathmandu without question",
    comment:
      "The turquoise glacial lakes of Gokyo took our breath away. Having our luggage and permits handled effortlessly by their Kathmandu office meant we could purely focus on the majesty of the mountains. Truly a life-changing expedition.",
    badge: "Verified Traveler",
  },
  {
    id: "rev-4",
    author: "Marcus Lindqvist",
    location: "Stockholm, Sweden",
    avatarText: "ML",
    date: "Reviewed December 2025",
    rating: 5,
    trek: "Mera Peak Expedition (6,476m)",
    title: "Summit success on Mera Peak with flawless safety protocols",
    comment:
      "As a first-time Himalayan climber, safety was my primary criterion. Our climbing Sherpas had summited Everest multiple times. Fixed ropes, high-altitude camps, and hot nutritious meals at 5,800m made all the difference.",
    badge: "Climber Review",
  },
  {
    id: "rev-5",
    author: "Claire & Thomas Beller",
    location: "Denver, Colorado, USA",
    avatarText: "TB",
    date: "Reviewed October 2025",
    rating: 5,
    trek: "Annapurna Circuit & Tilicho Lake",
    title: "Tailor-made private departure handled with genuine heart",
    comment:
      "We requested customized rest days and side-trips to Tilicho Lake. The planning team modified our itinerary in real time when unexpected weather moved in. You cannot put a price on trusted local Himalayan expertise.",
    badge: "Verified Traveler",
  },
  {
    id: "rev-6",
    author: "Kenji & Yuka Takahashi",
    location: "Tokyo, Japan",
    avatarText: "KT",
    date: "Reviewed November 2025",
    rating: 5,
    trek: "Pikey Peak & Dudhkunda Cultural Trek",
    title: "Unmatched sunrise panoramas over Mount Everest",
    comment:
      "Pikey Peak offered the most expansive 360-degree vista of the Himalayan chain I have ever witnessed. Warm hospitality, authentic homestays in remote Sherpa villages, and respectful cultural guidance throughout.",
    badge: "Verified Traveler",
  },
];
