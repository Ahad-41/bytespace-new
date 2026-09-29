import { Footer } from "@/components/layout/Footer";
import { FeaturedCourses } from "@/components/sections/FeaturedCourses";
import { CreatorCta } from "@/components/sections/CreatorCta";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { LearningPaths } from "@/components/sections/LearningPaths";
import { Partners } from "@/components/sections/Partners";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <main id="main">
        <Partners />
        <FeaturedCourses />
        <LearningPaths />
        <Features />
        <CreatorCta />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
