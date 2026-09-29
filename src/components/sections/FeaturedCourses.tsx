import { CourseCard } from "@/components/cards/CourseCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TopicTabs } from "@/components/sections/TopicTabs";
import { courses } from "@/data/courses";

export function FeaturedCourses() {
  return (
    <section id="courses" aria-labelledby="courses-title" className="scroll-mt-8 pt-16 md:pt-[72px]">
      <Container>
        <SectionHeading
          id="courses-title"
          title={
            <>
              Discover Your Passion,
              <br /> Build Your Skills
            </>
          }
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />
        <div className="mt-10 md:mt-[42px]">
          <TopicTabs />
        </div>
        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-[77px] lg:grid-cols-3 lg:gap-10">
          {courses.map((course) => (
            <li key={course.id}>
              <CourseCard course={course} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
