import { CourseCard } from "@/components/cards/CourseCard";
import { HappyStudentsCard } from "@/components/cards/StatCards";
import { DecorShape } from "@/components/ui/DecorShape";
import { ScaledStage } from "@/components/ui/ScaledStage";
import { courses } from "@/data/courses";

const [, digitalAsset, bigData] = courses;

/** Decorative course collage shown beside the auth forms on large screens. */
export function AuthShowcase() {
  return (
    <div aria-hidden className="pointer-events-none absolute top-[185px] -left-[25px] hidden lg:block">
      <ScaledStage width={548} height={585} scaleClassName="[--stage-scale:0.62] xl:[--stage-scale:1]">
        <div className="absolute top-[89px] left-[25px] w-[373px]">
          <CourseCard course={digitalAsset} highlight />
        </div>
        <div className="absolute top-0 left-[136px] w-[373px]">
          <CourseCard course={bigData} highlight />
        </div>
        <HappyStudentsCard tone="lime" compact className="top-[435px] left-[251px]" />
        <DecorShape name="spring-b-white" flip className="top-[321px] left-[373px] w-[175px]" />
        <DecorShape name="torus-lime" className="top-[15px] left-[54px] w-[146px]" />
        <DecorShape name="pyramid-lime" className="top-[397px] left-0 w-[188px]" />
      </ScaledStage>
    </div>
  );
}
