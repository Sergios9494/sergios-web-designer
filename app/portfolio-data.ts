export type ProjectDirection = "crash-left" | "crash-right" | "crash-up";

export interface PortfolioProject {
  number: string;
  title: string;
  field: string;
  year: string;
  image?: string;
  alt: string;
  statement: string;
  roles: string[];
  summary: string;
  detail: string;
  accent: string;
  direction: ProjectDirection;
  url?: string;
  titleColor?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    number: "01",
    title: "Nulform",
    field: "Streetwear e-commerce",
    year: "2026",
    alt: "Live preview of the Nulform online store",
    statement: "Minimal form. Maximum signal.",
    roles: ["E-commerce", "Web design", "Development"],
    summary: "A sharp streetwear store built around strong product presentation, fast browsing and a focused shopping journey.",
    detail: "A complete fashion e-commerce experience balancing bold art direction with responsive product discovery, cart interactions and a clear route to purchase.",
    accent: "#4b6fff",
    direction: "crash-left",
    url: "https://nulform-store.vercel.app/",
  },
  {
    number: "02",
    title: "Nevermind",
    field: "Fashion e-commerce",
    year: "2026",
    alt: "Live preview of the Nevermind online store",
    statement: "Designed to disrupt.",
    roles: ["E-commerce", "Product UX", "Development"],
    summary: "A high-energy fashion store pairing campaign-led visuals with a practical, mobile-first shopping experience.",
    detail: "A distinctive storefront with product collections, interactive shopping flows and responsive development designed to feel consistent from the landing page through checkout.",
    accent: "#f3eee4",
    direction: "crash-right",
    url: "https://nevermind-store-rho.vercel.app/",
    titleColor: "#6f7680",
  },
  {
    number: "03",
    title: "Luxora",
    field: "Luxury real estate",
    year: "2026",
    alt: "Live preview of the Luxora real estate website",
    statement: "Property, presented with presence.",
    roles: ["Web design", "Development", "Lead generation"],
    summary: "An editorial property platform designed to make premium listings feel cinematic, clear and easy to enquire about.",
    detail: "A luxury real-estate experience pairing confident art direction with responsive development, focused property discovery and direct lead-generation paths.",
    accent: "#aeb4bd",
    direction: "crash-up",
    url: "https://luxora-real-estate-plum.vercel.app/",
  },
  {
    number: "04",
    title: "Aurum",
    field: "Luxury real estate",
    year: "2026",
    alt: "Live preview of the Aurum real estate website",
    statement: "Real estate, refined.",
    roles: ["Web design", "Property discovery", "Development"],
    summary: "A premium real-estate website designed to present exceptional properties through an elegant and conversion-focused experience.",
    detail: "A modern property platform combining sophisticated visual direction, clear listing discovery and responsive enquiry journeys for high-value real-estate clients.",
    accent: "#d4d0c8",
    direction: "crash-left",
    url: "https://aurum-real-estate-xi.vercel.app/",
  },
  {
    number: "05",
    title: "Osteria del Sole",
    field: "Italian restaurant",
    year: "2026",
    alt: "Live preview of the Osteria del Sole restaurant website",
    statement: "Tradition, served beautifully.",
    roles: ["Restaurant design", "Menu UX", "Booking flow"],
    summary: "An atmospheric restaurant website connecting Italian heritage, the menu and reservations in one elegant experience.",
    detail: "A hospitality website designed to communicate character and appetite while keeping the practical journey to menu discovery, location details and reservations effortless.",
    accent: "#7f8792",
    direction: "crash-right",
    url: "https://osteria-del-sole-red.vercel.app/",
  },
  {
    number: "06",
    title: "Neon",
    field: "Fashion e-commerce",
    year: "2026",
    alt: "Live preview of the Neon fashion store",
    statement: "Fashion after dark.",
    roles: ["E-commerce", "Fashion design", "Development"],
    summary: "A striking fashion storefront built to turn bold campaign imagery into a focused, easy-to-use shopping experience.",
    detail: "A responsive e-commerce website combining expressive art direction, product discovery and a clear path from first impression to purchase.",
    accent: "#ff4fd8",
    direction: "crash-up",
    url: "https://neon-fashion-store.vercel.app/",
  },
  {
    number: "07",
    title: "Bloom",
    field: "Flower shop",
    year: "2026",
    alt: "Live preview of the Bloom flower shop",
    statement: "Made to bloom.",
    roles: ["E-commerce", "Art direction", "Development"],
    summary: "A warm floral shop experience that makes arrangements, gifting and product discovery feel natural and inviting.",
    detail: "A polished online shop designed around expressive product presentation, responsive browsing and an effortless customer journey across every device.",
    accent: "#d9a6b8",
    direction: "crash-left",
    url: "https://bloom-flower-shop-three.vercel.app/",
  },
  {
    number: "08",
    title: "Luthier Elite",
    field: "Luxury instruments",
    year: "2026",
    alt: "Live preview of the Luthier Elite website",
    statement: "Crafted to resonate.",
    roles: ["Luxury web design", "Product storytelling", "Development"],
    summary: "A refined digital showcase presenting handcrafted instruments with the same precision and character as the objects themselves.",
    detail: "An editorial brand experience built around craftsmanship, premium visual language and responsive storytelling that lets every instrument command attention.",
    accent: "#b69a68",
    direction: "crash-right",
    url: "https://luthier-elite.vercel.app/",
  },
  {
    number: "09",
    title: "Red Bite",
    field: "Premium burger restaurant",
    year: "2026",
    alt: "Live preview of the Red Bite Burgers website",
    statement: "Bold flavor. Real food.",
    roles: ["Restaurant design", "Menu UX", "Development"],
    summary: "A high-impact burger website turning appetite, attitude and a direct menu journey into a memorable digital experience.",
    detail: "A responsive restaurant website balancing premium visual direction with clear menu discovery, location information and conversion-focused calls to action.",
    accent: "#ef3038",
    direction: "crash-up",
    url: "https://red-bite-burgers.vercel.app/",
  },
];

export const featuredProjects = portfolioProjects.slice(0, 5);
