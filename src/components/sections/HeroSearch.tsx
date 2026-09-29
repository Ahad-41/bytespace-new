import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function HeroSearch() {
  return (
    <form role="search" action="/" className="flex w-full max-w-[582px] gap-3 sm:gap-4">
      <label className="flex h-[52px] min-w-0 flex-1 items-center gap-2 rounded-3xl bg-white px-4 focus-within:ring-2 focus-within:ring-accent sm:px-6">
        <Image src="/icons/search.svg" alt="" width={24} height={24} />
        <span className="sr-only">Search courses</span>
        <input
          type="search"
          name="q"
          placeholder="Course, topic, creator"
          className="w-full min-w-0 bg-transparent text-body-md text-shuttle-950 placeholder:text-shuttle-400 focus:outline-none sm:text-body-lg"
        />
      </label>
      <Button type="submit" className="px-5 sm:px-6">
        Search
      </Button>
    </form>
  );
}
