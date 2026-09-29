import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/data/categories";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href="/#courses"
      className="group flex aspect-square w-full flex-col items-center justify-center gap-3 rounded-card border border-shuttle-200 bg-white transition hover:-translate-y-1 hover:border-brand hover:shadow-[0_12px_32px_rgb(0_59_226/0.12)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      <span className="flex items-center justify-center rounded-[40px] bg-accent p-3 transition group-hover:scale-110">
        <Image src={category.icon} alt="" width={36} height={36} />
      </span>
      <span className="text-center text-label-lg font-medium text-shuttle-950 md:text-label-xl">{category.name}</span>
    </Link>
  );
}
