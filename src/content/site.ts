/**
 * Every editable fact on the site lives here.
 * Values wrapped in [SQUARE_BRACKETS] are placeholders: the site shows them as "TBC".
 * Replace the whole string (brackets included) with the real value, commit, push.
 */

export const site = {
  brand: "Breaking Brisbane", // working name, change when the business name is registered
  instructor: "Jamie",
  url: "https://jamieparknz.github.io/breaking-brisbane",
  area: "Brisbane north side",
  suburbsServed: ["Zillmere", "Aspley", "Geebung", "Taigum", "Boondall", "Everton Park", "Stafford", "McDowall"],

  // Instructor facts (not yet confirmed)
  years: "[YEARS]",
  crew: "[CREW]",
  bio: "[BIO]",

  // Where and when
  venue: "[VENUE]", // candidates: Zillmere Hall or Everton Park SHS sports hall
  venueAddress: "[VENUE_ADDRESS]",
  dayTime: "[DAY_TIME]", // e.g. "Saturday mornings"
  termDates: "[TERM_DATES]",

  // Contact
  formEndpoint: "[FORM_ENDPOINT]", // Formspree URL, e.g. https://formspree.io/f/abcdwxyz
  instagram: "[INSTAGRAM]", // handle without @, e.g. breakingbrisbane

  // Compliance: set to true only once actually held
  blueCardHeld: false,
  insuranceInPlace: false,
  firstAidCurrent: false,

  practiceApp: {
    name: "Shadow Cypher",
    url: "https://jamieparknz.github.io/shadow-cypher-app/",
  },
} as const;

export type Group = {
  id: string;
  name: string;
  ages: string;
  time: string;
  cap: string;
  focus: string;
  kids: boolean;
};

export const groups: Group[] = [
  {
    id: "kids-6-10",
    name: "Kids 6 to 10",
    ages: "6 to 10",
    time: "[TIME_KIDS_6_10]",
    cap: "[CAP]",
    focus: "Fun first. Coordination, rhythm and first moves.",
    kids: true,
  },
  {
    id: "kids-11-15",
    name: "Kids 11 to 15",
    ages: "11 to 15",
    time: "[TIME_KIDS_11_15]",
    cap: "[CAP]",
    focus: "Real foundations, combos and finding your own style.",
    kids: true,
  },
  {
    id: "adults",
    name: "Teens 16+ and adults",
    ages: "16 and up",
    time: "[TIME_ADULTS]",
    cap: "[CAP]",
    focus: "Start from zero. Build strength, control and confidence.",
    kids: false,
  },
];

export const pricing = [
  { id: "trial", name: "First class", price: "Free", unit: "", note: "Try a class before you commit." },
  { id: "casual", name: "Casual", price: "[PRICE_CASUAL]", unit: "per class", note: "Drop in when it suits you." },
  { id: "term", name: "Term pack", price: "[PRICE_TERM]", unit: "per term", note: "Best for steady progress. Term length and sibling discount to be confirmed." },
] as const;

/**
 * VIDEO. See VIDEOS.md. Leave heroVideo null and videos empty and the site shows
 * the type-led hero and hides the "Watch Jamie" reel. Add clips and they appear.
 * Paths are relative to /public, e.g. "/video/hero.mp4".
 */
export type Video =
  | { kind: "file"; src: string; poster: string; title: string }
  | { kind: "youtube"; id: string; title: string; poster?: string }
  | { kind: "instagram"; url: string; title: string; poster?: string };

export const heroVideo: { src: string; poster: string } | null = null;
// e.g. { src: "/video/hero.mp4", poster: "/video/hero.jpg" }

export const videos: Video[] = [
  // { kind: "file", src: "/video/reel-1.mp4", poster: "/video/reel-1.jpg", title: "Toprock in the cypher" },
  // { kind: "youtube", id: "dQw4w9WgXcQ", title: "Battle round" },
  // { kind: "instagram", url: "https://www.instagram.com/reel/XXXXXXXX/", title: "Footwork drill", poster: "/video/ig-1.jpg" },
];

/** Photo of Jamie for the "Meet Jamie" section, e.g. "/photos/jamie.jpg". null shows a drawn figure instead. */
export const jamiePhoto: string | null = null;

/** Prefix a /public path with the GitHub Pages base path. */
export const asset = (path: string) => (path.startsWith("http") ? path : `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`);

export const isPlaceholder = (v: string) => /^\[.*\]$/.test(v.trim()) || v.includes("[");
