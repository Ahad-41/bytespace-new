import { Footer } from "@/components/layout/Footer";
import { FeaturedCourses } from "@/components/sections/FeaturedCourses";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { LearningPaths } from "@/components/sections/LearningPaths";
import { Partners } from "@/components/sections/Partners";

export default function HomePage() {
  return (
    <>
      <Hero />
      <main id="main">
        <Partners />
        <FeaturedCourses />
        <LearningPaths />
        <Features />
      </main>
      <Footer />
    </>
  );
}
