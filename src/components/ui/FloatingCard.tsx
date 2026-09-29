import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

const tones = {
  white: "bg-white text-shuttle-950",
  lime: "bg-accent text-shuttle-950",
  brand: "bg-brand text-shuttle-50",
};

type FloatingCardProps = ComponentPropsWithoutRef<"div"> & {
  tone?: keyof typeof tones;
};

/** Small rounded glass panel that floats over imagery (stats, progress, etc). */
export function FloatingCard({ tone = "white", className, ...props }: FloatingCardProps) {
  return <div className={cn("absolute flex flex-col rounded-panel p-4 backdrop-blur-[10px]", tones[tone], className)} {...props} />;
}
