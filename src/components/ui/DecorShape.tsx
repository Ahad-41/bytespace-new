import Image from "next/image";
import { cn } from "@/lib/cn";

export type ShapeName =
  | "spring-a-lime"
  | "spring-a-white"
  | "spring-b-lime"
  | "spring-b-white"
  | "torus-lime"
  | "torus-white"
  | "cylinder-lime"
  | "cylinder-white"
  | "pyramid-lime"
  | "pyramid-white"
  | "cone-white";

type DecorShapeProps = {
  name: ShapeName;
  className?: string;
  flip?: boolean;
};

/** Decorative 3D shape (pre-tinted render exported from Figma). Hidden from assistive tech. */
export function DecorShape({ name, className, flip = false }: DecorShapeProps) {
  return (
    <Image
      src={`/images/shapes/${name}.png`}
      alt=""
      aria-hidden
      width={800}
      height={800}
      sizes="(min-width: 1024px) 400px, 160px"
      className={cn("pointer-events-none absolute aspect-square select-none", flip && "-scale-x-100", className)}
    />
  );
}
