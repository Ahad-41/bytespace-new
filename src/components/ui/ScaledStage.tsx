import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ScaledStageProps = {
  /** Design width in px. */
  width: number;
  /** Design height in px. */
  height: number;
  /**
   * Tailwind classes that set the `--stage-scale` variable per breakpoint,
   * e.g. "[--stage-scale:0.5] md:[--stage-scale:1]".
   */
  scaleClassName: string;
  className?: string;
  children: ReactNode;
};

/**
 * Renders an absolutely-positioned composition at its exact Figma size and
 * scales it down uniformly on small screens, reserving the scaled footprint
 * in the layout so nothing overlaps.
 */
export function ScaledStage({ width, height, scaleClassName, className, children }: ScaledStageProps) {
  const style = { "--stage-w": `${width}px`, "--stage-h": `${height}px` } as CSSProperties;

  return (
    <div
      style={style}
      className={cn(
        "relative h-[calc(var(--stage-h)*var(--stage-scale))] w-[calc(var(--stage-w)*var(--stage-scale))] shrink-0",
        scaleClassName,
        className,
      )}
    >
      <div className="absolute top-0 left-0 h-(--stage-h) w-(--stage-w) origin-top-left scale-(--stage-scale)">
        {children}
      </div>
    </div>
  );
}
