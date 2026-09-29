import Image from "next/image";
import { HappyStudentsCard, LearningProgressCard, TopicStatCard } from "@/components/cards/StatCards";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { DecorShape } from "@/components/ui/DecorShape";
import { ScaledStage } from "@/components/ui/ScaledStage";
import { HeroSearch } from "@/components/sections/HeroSearch";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-brand bg-grid">
      <DecorShape name="spring-b-lime" className="hidden md:block md:top-[200px] md:-left-[90px] md:w-[240px] lg:top-[221px] lg:-left-[118px] lg:w-[385px]" />
      <DecorShape name="spring-b-white" flip className="top-[477px] left-[183px] hidden w-[175px] xl:block" />
      <DecorShape name="cylinder-lime" className="hidden md:block md:top-[200px] md:-right-[120px] md:w-[240px] lg:top-[221px] lg:-right-[161px] lg:w-[370px]" />
      <DecorShape name="pyramid-white" className="top-[464px] right-[146px] hidden w-[188px] xl:block" />
      <DecorShape name="torus-white" className="bottom-0 left-0 hidden w-[220px] md:block lg:left-[18px] lg:w-[342px]" />
      <DecorShape name="spring-a-white" className="-right-4 bottom-6 hidden w-[220px] md:block lg:-right-[17px] lg:bottom-[22px] lg:w-[330px]" />

      <Navbar />

      <Container className="relative z-10 flex flex-col items-center pt-8 text-center md:pt-[49px]">
        <h1
          id="hero-title"
          className="max-w-[935px] font-heading text-[2.5rem] leading-[1.2] font-semibold tracking-[-0.01em] text-white sm:text-[3.5rem] lg:text-display"
        >
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mt-6 max-w-[820px] text-body-md text-shuttle-100 md:mt-8 md:text-body-lg">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>
        <div className="mt-10 flex w-full justify-center md:mt-[60px]">
          <HeroSearch />
        </div>
      </Container>

      <div className="relative z-10 flex justify-center">
        <ScaledStage
          width={784}
          height={512}
          scaleClassName="[--stage-scale:0.41] min-[400px]:[--stage-scale:0.46] sm:[--stage-scale:0.75] md:[--stage-scale:0.85] lg:[--stage-scale:1]"
        >
          <div aria-hidden className="absolute top-[70px] -left-[183px] size-[1149px] rounded-full bg-accent-strong" />
          <Image
            src="/images/hero-student.png"
            alt="Smiling student wearing headphones and holding a laptop"
            width={578}
            height={541}
            priority
            sizes="578px"
            className="absolute top-0 left-[103px] h-[541px] w-[578px] object-cover drop-shadow-float"
          />
          <TopicStatCard className="top-[127px] left-[76px]" />
          <LearningProgressCard className="top-[139px] left-[514px]" />
          <HappyStudentsCard className="top-[325px] left-0" />
        </ScaledStage>
      </div>
    </section>
  );
}
