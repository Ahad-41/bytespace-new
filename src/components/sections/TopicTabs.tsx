"use client";

import Link from "next/link";
import { useState } from "react";
import { topicTabRows } from "@/data/categories";
import { cn } from "@/lib/cn";

/** Topic filter chips. Rows mirror the design on desktop and wrap naturally on small screens. */
export function TopicTabs() {
  const [active, setActive] = useState(topicTabRows[0][0]);
  const lastRow = topicTabRows.length - 1;

  return (
    <div role="group" aria-label="Filter courses by topic" className="flex flex-col items-center gap-3 md:gap-[21px]">
      {topicTabRows.map((row, rowIndex) => (
        <div key={row[0]} className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {row.map((topic) => {
            const selected = topic === active;
            return (
              <button
                key={topic}
                type="button"
                aria-pressed={selected}
                onClick={() => setActive(topic)}
                className={cn(
                  "rounded-3xl px-4 py-3 text-label-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:text-label-md",
                  selected ? "bg-accent text-shuttle-950" : "bg-shuttle-50 text-shuttle-700 hover:bg-shuttle-100",
                )}
              >
                {topic}
              </button>
            );
          })}
          {rowIndex === lastRow && (
            <Link href="/#courses" className="text-label-sm font-medium text-brand hover:underline md:text-label-md">
              + More
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
