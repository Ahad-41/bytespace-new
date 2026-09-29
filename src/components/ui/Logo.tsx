import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  tone?: "light" | "dark";
  /** Show only the mark (auth pages). */
  markOnly?: boolean;
  className?: string;
};

export function Logo({ tone = "light", markOnly = false, className }: LogoProps) {
  return (
    <Link href="/" aria-label="ByteSpace home" className={cn("inline-flex items-start gap-2", className)}>
      <Image src="/icons/logo-mark.svg" alt="" width={29} height={32} priority />
      {!markOnly && (
        <span
          className={cn(
            "mt-[7px] font-brand text-2xl leading-none font-bold",
            tone === "light" ? "text-shuttle-50" : "text-shuttle-950",
          )}
        >
          ByteSpace
        </span>
      )}
    </Link>
  );
}
