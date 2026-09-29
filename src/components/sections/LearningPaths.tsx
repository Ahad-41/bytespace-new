import { CategoryCard } from "@/components/cards/CategoryCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categories } from "@/data/categories";

export function LearningPaths() {
  return (
    <section id="categories" aria-labelledby="categories-title" className="scroll-mt-8 pt-16 pb-20 md:pt-[72px] md:pb-[120px]">
      <Container>
        <SectionHeading
          id="categories-title"
          size="md"
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mt-[68px] md:gap-6 lg:grid-cols-6 lg:gap-10">
          {categories.map((category) => (
            <li key={category.name}>
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
