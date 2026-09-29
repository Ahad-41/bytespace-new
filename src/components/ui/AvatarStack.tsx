import Image from "next/image";
import { cn } from "@/lib/cn";

type AvatarStackProps = {
  avatars: string[];
  /** Text shown in the trailing count bubble, e.g. "26+". */
  countLabel: string;
  size?: "sm" | "md";
  badgeTone?: "lime" | "dark";
};

const sizes = {
  sm: { px: 32, avatar: "size-8 -mr-2", badge: "size-8 text-label-xs" },
  md: { px: 43, avatar: "size-[43px] -mr-4", badge: "size-[43px] text-body-xs font-bold" },
};

/** Overlapping avatar row with a count bubble at the end. */
export function AvatarStack({ avatars, countLabel, size = "sm", badgeTone = "lime" }: AvatarStackProps) {
  const s = sizes[size];

  return (
    <div className="flex items-center">
      {avatars.map((src) => (
        <Image key={src} src={src} alt="" width={s.px} height={s.px} className={cn("rounded-full", s.avatar)} />
      ))}
      <span
        className={cn(
          "relative inline-flex items-center justify-center rounded-full font-medium",
          s.badge,
          badgeTone === "lime" && "bg-accent text-shuttle-950",
          badgeTone === "dark" && (size === "sm" ? "bg-black text-white" : "bg-shuttle-950 text-shuttle-50"),
        )}
      >
        {countLabel}
      </span>
    </div>
  );
}
