import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

/** Small rounded glass panel that floats over imagery (stats, progress, etc). */
export function FloatingCard({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("absolute flex flex-col gap-2 rounded-panel bg-white p-4 backdrop-blur-[10px]", className)} {...props} />;
}
