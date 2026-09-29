import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  id: string;
  title: ReactNode;
  description: ReactNode;
  size?: "lg" | "md";
};

/** Centered section title + supporting paragraph. */
export function SectionHeading({ id, title, description, size = "lg" }: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h2
        id={id}
        className={cn(
          "font-heading leading-[1.2] font-semibold tracking-[-0.01em] text-ink",
          size === "lg" ? "text-[2rem] md:text-h1" : "text-[1.75rem] md:text-h2",
        )}
      >
        {title}
      </h2>
      <p className="max-w-[917px] text-body-md text-shuttle-400 md:text-body-lg">{description}</p>
    </div>
  );
}
