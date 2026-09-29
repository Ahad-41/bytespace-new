import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  id?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  size?: "lg" | "md";
  className?: string;
  titleClassName?: string;
};

/** Section title + supporting paragraph, used across the landing page. */
export function SectionHeading({
  id,
  title,
  description,
  align = "center",
  size = "lg",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <h2
        id={id}
        className={cn(
          "font-heading font-semibold text-ink",
          size === "lg" ? "text-[2rem] leading-[1.2] tracking-[-0.01em] md:text-h1" : "text-[1.75rem] leading-[1.2] tracking-[-0.01em] md:text-h2",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="max-w-[917px] text-body-md text-shuttle-400 md:text-body-lg">{description}</p>
      )}
    </div>
  );
}
