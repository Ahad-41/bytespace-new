import Image from "next/image";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { studentAvatars } from "@/data/courses";
import { cn } from "@/lib/cn";

type PositionedProps = { className?: string };

export function LearningProgressCard({ className }: PositionedProps) {
  return (
    <FloatingCard className={cn("gap-2", className)}>
      <p className="text-label-sm font-medium">Learning Progress</p>
      <p className="font-heading text-metric font-semibold">55%</p>
      <ProgressBar value={56} label="Learning progress" />
    </FloatingCard>
  );
}

type HappyStudentsCardProps = PositionedProps & {
  tone?: "white" | "lime";
  /** Smaller, bold rating line used on secondary placements. */
  compact?: boolean;
};

export function HappyStudentsCard({ className, tone = "white", compact = false }: HappyStudentsCardProps) {
  return (
    <FloatingCard tone={tone} className={cn("w-[258px] justify-center gap-2", className)}>
      <div>
        <p className={cn("text-label-md font-medium", compact && "leading-6")}>Happy Students</p>
        <p className="flex items-center gap-0.5">
          <span className={cn(compact ? "text-caption" : "text-body-xs", tone === "lime" ? "text-shuttle-800" : "text-shuttle-400")}>
            <span className={cn("text-shuttle-950", compact && "font-bold")}>4.5 </span>(240)
          </span>
          <Image src={tone === "lime" ? "/icons/star-blue.svg" : "/icons/star-lime.svg"} alt="" width={13} height={13} />
          <span className="sr-only">out of 5 stars</span>
        </p>
      </div>
      <AvatarStack avatars={studentAvatars} countLabel="2K+" size="md" badgeTone={tone === "lime" ? "dark" : "lime"} />
    </FloatingCard>
  );
}

export function TopicStatCard({ className }: PositionedProps) {
  return (
    <FloatingCard className={className}>
      <p className="text-label-md font-medium">UI/UX Design</p>
      <p className="flex items-center gap-2 text-body-xs text-shuttle-400">
        200 Courses <span aria-hidden className="text-caption">•</span> 1000+ Students
      </p>
    </FloatingCard>
  );
}

type RevenueCardProps = PositionedProps & {
  title: string;
  period: string;
  amount: string;
  delta?: string;
  progress?: number;
};

export function RevenueCard({ className, title, period, amount, delta, progress }: RevenueCardProps) {
  const hasProgress = progress !== undefined;
  const badge = delta && (
    <span className="rounded-3xl bg-accent-strong px-2 py-0.5 text-caption leading-5 font-medium text-shuttle-950">{delta}</span>
  );

  return (
    <FloatingCard tone="brand" className={cn("gap-2", className)}>
      <div>
        <p className="text-label-md font-medium">{title}</p>
        <p className="text-caption leading-[1.2]">{period}</p>
      </div>
      <div className={cn("flex items-center justify-between", hasProgress && "w-[200px]")}>
        <p className="font-heading text-h3 font-semibold">{amount}</p>
        {hasProgress && badge}
      </div>
      {hasProgress ? (
        <ProgressBar value={progress} label={`${title} progress`} trackClassName="bg-white" />
      ) : (
        badge && <div>{badge}</div>
      )}
    </FloatingCard>
  );
}
