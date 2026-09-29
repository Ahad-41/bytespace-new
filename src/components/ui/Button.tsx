import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

const baseStyles =
  "inline-flex shrink-0 items-center justify-center rounded-3xl bg-accent px-6 py-3 text-label-lg font-medium whitespace-nowrap text-shuttle-950 transition hover:bg-accent-strong hover:shadow-[0_8px_24px_rgb(212_251_32/0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98]";

type ButtonProps = ComponentPropsWithoutRef<"button">;
type LinkButtonProps = ComponentPropsWithoutRef<typeof Link>;

/** Primary lime pill button. */
export function Button({ className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={cn(baseStyles, className)} {...props} />;
}

/** Same look as Button, rendered as a Next.js link. */
export function LinkButton({ className, ...props }: LinkButtonProps) {
  return <Link className={cn(baseStyles, className)} {...props} />;
}
