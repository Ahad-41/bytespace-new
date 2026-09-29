export type NavLink = { label: string; href: string };

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/#courses" },
  { label: "Creators", href: "/#creators" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Browse",
    links: [
      { label: "Featured Courses", href: "/#courses" },
      { label: "Featured Categories", href: "/#categories" },
      { label: "Business", href: "/#categories" },
      { label: "IT", href: "/#categories" },
      { label: "Design", href: "/#categories" },
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "Development", href: "/#categories" },
      { label: "Marketing", href: "/#categories" },
      { label: "Photography", href: "/#categories" },
      { label: "Finance", href: "/#categories" },
      { label: "Sport", href: "/#categories" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Become a Creator", href: "/signup" },
      { label: "Affiliate Program", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Help", href: "#" },
      { label: "About", href: "#" },
    ],
  },
];

export const legalNav: NavLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookies Settings", href: "#" },
];
