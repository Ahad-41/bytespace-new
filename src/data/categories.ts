export const topicTabRows: string[][] = [
  ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing"],
  ["Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography"],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

export type Category = {
  name: string;
  icon: string;
};

export const categories: Category[] = [
  { name: "Design", icon: "/icons/category-design.svg" },
  { name: "Development", icon: "/icons/category-development.svg" },
  { name: "IT & Software", icon: "/icons/category-it.svg" },
  { name: "Business", icon: "/icons/category-business.svg" },
  { name: "Marketing", icon: "/icons/category-marketing.svg" },
  { name: "Photography", icon: "/icons/category-photography.svg" },
];
