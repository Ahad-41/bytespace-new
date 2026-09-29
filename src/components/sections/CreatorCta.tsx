import { LinkButton } from "@/components/ui/Button";
import { DecorShape } from "@/components/ui/DecorShape";

export function CreatorCta() {
  return (
    <section id="creators" aria-labelledby="creators-title" className="relative scroll-mt-8 overflow-hidden bg-brand bg-grid">
      <DecorShape name="spring-b-lime" className="-top-[60px] -left-[50px] w-[150px] md:-top-[162px] md:-left-[118px] md:w-[385px]" />
      <DecorShape name="spring-b-white" flip className="top-[5px] left-[178px] hidden w-[175px] xl:block" />
      <DecorShape name="cone-white" className="top-[225px] -left-[48px] hidden w-[188px] lg:block" />
      <DecorShape name="torus-lime" className="-bottom-[60px] -left-[30px] w-[140px] md:-bottom-[155px] md:left-[20px] md:w-[342px]" />
      <DecorShape name="pyramid-lime" className="top-0 right-[172px] hidden w-[188px] xl:block" />
      <DecorShape name="cylinder-white" className="top-[6px] -right-[156px] hidden w-[370px] lg:block" />
      <DecorShape name="spring-a-lime" className="-right-[30px] -bottom-[40px] w-[130px] md:-bottom-[131px] md:right-0 md:w-[330px]" />

      <div className="relative mx-auto flex max-w-[964px] flex-col items-center justify-center gap-8 px-4 py-24 text-center text-shuttle-50 md:min-h-[488px] md:gap-10 md:py-[85px]">
        <h2
          id="creators-title"
          className="max-w-[710px] font-heading text-[2rem] leading-[1.2] font-semibold tracking-[-0.01em] md:text-h1"
        >
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="text-body-md md:text-body-lg">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and
          become a part of a community comprising over 10,000 local and international creators. Utilize our Course
          Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <LinkButton href="/signup">Join as Creator</LinkButton>
      </div>
    </section>
  );
}
