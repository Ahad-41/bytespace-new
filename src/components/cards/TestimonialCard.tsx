import Image from "next/image";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex flex-col gap-6 rounded-card bg-white p-6">
      <Image src={testimonial.avatar} alt={testimonial.name} width={80} height={80} className="rounded-full" />
      <figcaption>
        <p className="font-heading text-h4 leading-[1.4] font-semibold text-black">{testimonial.name}</p>
        <p className="text-body-md text-brand md:text-body-lg">{testimonial.role}</p>
      </figcaption>
      <blockquote className="text-body-md text-graphite md:text-body-lg">&ldquo;{testimonial.quote}&rdquo;</blockquote>
    </figure>
  );
}
