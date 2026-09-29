import { cn } from "@/lib/cn";

type ProgressBarProps = {
  value: number;
  label: string;
  trackClassName?: string;
};

export function ProgressBar({ value, label, trackClassName = "bg-[#f6f6f6]" }: ProgressBarProps) {
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn("h-2 w-[200px] overflow-hidden rounded-3xl", trackClassName)}
    >
      <div className="h-full rounded-3xl bg-accent" style={{ width: `${value}%` }} />
    </div>
  );
}
