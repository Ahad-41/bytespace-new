import Image from "next/image";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { learnerAvatars, type Course } from "@/data/courses";
import { cn } from "@/lib/cn";

type CourseCardProps = {
  course: Course;
  /** Lime rating star and dark learner badge, used where the card floats over imagery. */
  highlight?: boolean;
  className?: string;
};

export function CourseCard({ course, highlight = false, className }: CourseCardProps) {
  const meta = [`${course.lessons} Lessons`, course.duration, `${course.comments} Comments`];

  return (
    <article
      className={cn(
        "flex w-full flex-col overflow-hidden rounded-card border border-shuttle-200 bg-white p-[15px] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgb(0_0_0/0.08)]",
        className,
      )}
    >
      <div className="relative aspect-[341/195] overflow-hidden rounded-xl bg-[#443131]">
        <Image
          src={course.image}
          alt={course.imageAlt}
          fill
          sizes="(min-width: 1280px) 341px, (min-width: 640px) 45vw, 90vw"
          className="object-cover"
        />
        <ul className="absolute right-3 bottom-3 left-3 flex gap-3 overflow-hidden" aria-label="Course details">
          {meta.map((item) => (
            <li
              key={item}
              className="rounded-3xl bg-[rgb(246_246_246/0.6)] px-3 py-1.5 text-label-xs leading-5 font-medium whitespace-nowrap text-graphite backdrop-blur-[4px]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-[21px] flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate font-heading text-h4 leading-[1.2] font-semibold text-black">{course.title}</h3>
            <p className="text-body-xs text-graphite">
              by <span className="text-brand">{course.author}</span>
            </p>
          </div>
          <p className="flex shrink-0 items-center text-body-lg text-graphite">
            <span className="sr-only">Rated </span>
            {course.rating}
            <Image
              src={highlight ? "/icons/star-outlined-lime.svg" : "/icons/star-outlined-gray.svg"}
              alt=""
              width={24}
              height={24}
              className="ml-1"
            />
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1 rounded-3xl bg-shuttle-50 px-3 py-1.5 text-label-xs leading-5 font-medium text-shuttle-700">
            <Image src="/icons/signal.svg" alt="" width={20} height={20} />
            {course.level}
          </span>
          <AvatarStack avatars={learnerAvatars} countLabel={course.learnersLabel} badgeTone={highlight ? "dark" : "lime"} />
        </div>

        <p className="flex items-end">
          <span className="font-heading text-h4 leading-6 font-semibold text-brand">${course.price}</span>
          <span className="text-body-xs text-graphite">/lifetime</span>
        </p>
      </div>
    </article>
  );
}
