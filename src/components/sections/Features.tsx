import Image from "next/image";
import { CourseCard } from "@/components/cards/CourseCard";
import { HappyStudentsCard, LearningProgressCard, RevenueCard } from "@/components/cards/StatCards";
import { Container } from "@/components/ui/Container";
import { DecorShape } from "@/components/ui/DecorShape";
import { ScaledStage } from "@/components/ui/ScaledStage";
import { courses } from "@/data/courses";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const creatorPerks = ["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"];

const stageScale =
  "[--stage-scale:0.5] min-[400px]:[--stage-scale:0.55] sm:[--stage-scale:0.9] md:[--stage-scale:1] lg:[--stage-scale:0.75] xl:[--stage-scale:1]";

const headingStyles =
  "font-heading text-[2rem] leading-[1.2] font-semibold tracking-[-0.01em] text-shuttle-950 md:text-h1";

export function Features() {
  return (
    <section aria-label="Why ByteSpace" className="relative overflow-hidden bg-surface py-20 lg:py-[120px]">
      <Image
        src="/decor/glow-features.svg"
        alt=""
        aria-hidden
        width={2536}
        height={2471}
        className="pointer-events-none absolute -top-[506px] left-1/2 ml-[-1269px] max-w-none"
      />
      <Image
        src="/decor/glow-lime-sm.svg"
        alt=""
        aria-hidden
        width={752}
        height={752}
        className="pointer-events-none absolute top-[906px] left-1/2 ml-[-1047px] max-w-none"
      />

      <Container className="relative flex flex-col gap-20 lg:gap-[72px]">
        {/* Learners */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-10 xl:w-[1258px] xl:gap-[63px]">
          <div className="flex w-full flex-col gap-8 lg:w-auto lg:flex-1 lg:gap-10 xl:w-[574px] xl:flex-none">
            <h2 className={headingStyles}>Your Path to Professional Growth Starts Here!</h2>
            <p className="max-w-[477px] text-body-md text-shuttle-700 md:text-body-lg">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career
              journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new
              career path entirely, we have the resources you need.
            </p>
            <dl className="flex gap-10 md:gap-14">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse">
                  <dt className="text-body-md text-shuttle-700 md:text-body-lg">{stat.label}</dt>
                  <dd className="font-heading text-[1.75rem] leading-[1.3] font-medium tracking-[-0.01em] text-brand md:text-stat">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <ScaledStage width={621} height={552} scaleClassName={stageScale}>
            <div className="absolute top-0 left-0 w-[373px]">
              <CourseCard course={courses[0]} highlight />
            </div>
            <Image
              src="/images/hero-student.png"
              alt="Student on a call while holding a laptop"
              width={577}
              height={540}
              sizes="577px"
              className="absolute top-3 left-0 h-[540px] w-[577px] object-cover drop-shadow-float"
            />
            <LearningProgressCard className="top-[213px] left-[345px]" />
            <DecorShape name="spring-a-lime" className="top-[67px] left-[406px] w-[215px]" />
          </ScaledStage>
        </div>

        {/* Creators */}
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:gap-10 xl:gap-[79px]">
          <ScaledStage width={541} height={596} scaleClassName={stageScale}>
            <RevenueCard className="top-[44px] left-0" title="Total Revenue" period="July 1-28" amount="$120.29" delta="+12$" progress={56} />
            <RevenueCard className="top-[194px] left-0 w-[134px]" title="Year to Date" period="2023" amount="$1,200.38" delta="+12$" />
            <div className="absolute top-0 left-[28px] h-[596px] w-[435px] overflow-hidden drop-shadow-float">
              <Image
                src="/images/creator.png"
                alt="Smiling creator with a headset holding a tablet"
                width={683}
                height={683}
                sizes="683px"
                className="absolute top-0 -left-[124px] size-[683px] max-w-none"
              />
            </div>
            <HappyStudentsCard compact className="top-[413px] left-[283px]" />
            <DecorShape name="spring-b-lime" className="top-[114px] left-[305px] w-[215px]" />
          </ScaledStage>

          <div className="flex w-full flex-col gap-8 lg:w-auto lg:flex-1 lg:gap-10 xl:w-[580px] xl:flex-none">
            <h2 className={`${headingStyles} max-w-[391px]`}>Create &amp; Manage Courses Easily.</h2>
            <p className="max-w-[574px] text-body-md text-shuttle-700 md:text-body-lg">
              <strong className="font-bold text-shuttle-950">ByteSpace</strong> supports individuals or entities in the
              creation, publication, and administration of educational courses.
            </p>
            <ul className="flex flex-col gap-4">
              {creatorPerks.map((perk) => (
                <li key={perk} className="flex items-end gap-2 text-label-md font-medium md:text-label-lg">
                  <Image src="/icons/check-circle.svg" alt="" width={24} height={24} />
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
