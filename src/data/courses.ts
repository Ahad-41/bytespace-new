export type Course = {
  id: string;
  title: string;
  author: string;
  image: string;
  imageAlt: string;
  lessons: number;
  duration: string;
  comments: number;
  rating: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  learnersLabel: string;
};

const defaults = {
  author: "purepearl studio",
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  rating: 4.5,
  level: "Beginner",
  price: 25,
  learnersLabel: "26+",
} as const;

export const courses: Course[] = [
  {
    ...defaults,
    id: "figma-basics",
    title: "Learn Figma from Basic",
    image: "/images/courses/figma-basics.jpg",
    imageAlt: "Designers sketching wireframes next to a laptop",
  },
  {
    ...defaults,
    id: "digital-asset",
    title: "Build Digital Asset",
    image: "/images/courses/digital-asset.jpg",
    imageAlt: "Grid of app icons printed on paper",
  },
  {
    ...defaults,
    id: "big-data",
    title: "the Power of Big Data",
    image: "/images/courses/big-data.jpg",
    imageAlt: "Analytics dashboard with charts on a monitor",
  },
  {
    ...defaults,
    id: "productivity",
    title: "Balancing Productivity and Wellbeing",
    image: "/images/courses/productivity.jpg",
    imageAlt: "Desk setup with a monitor showing the words Do More",
  },
  {
    ...defaults,
    id: "money-management",
    title: "Mastering Money Management",
    image: "/images/courses/money-management.jpg",
    imageAlt: "Close-up of a rising stock chart on a screen",
  },
  {
    ...defaults,
    id: "startup",
    title: "From Idea to Startup Success",
    image: "/images/courses/startup.jpg",
    imageAlt: "Team brainstorming with sticky notes on a glass wall",
  },
];

export const learnerAvatars = [
  "/images/avatars/learner-1.png",
  "/images/avatars/learner-2.png",
  "/images/avatars/learner-3.png",
  "/images/avatars/learner-4.png",
];

export const studentAvatars = Array.from({ length: 7 }, (_, i) => `/images/avatars/student-${i + 1}.png`);
