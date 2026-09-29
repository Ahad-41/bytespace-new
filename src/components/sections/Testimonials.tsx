import Image from "next/image";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Container } from "@/components/ui/Container";
import { testimonials } from "@/data/testimonials";

const glows = [
  { src: "/decor/glow-lime-lg.svg", size: 1217, className: "-top-[281px] left-1/2 ml-[82px]" },
  { src: "/decor/glow-lime-sm.svg", size: 752, className: "-top-[178px] left-1/2 ml-[-365px]" },
  { src: "/decor/glow-blue-lg.svg", size: 1217, className: "top-[109px] left-1/2 ml-[-1202px]" },
];

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="relative overflow-hidden bg-surface py-16 md:pt-[74px] md:pb-[57px]">
      {glows.map((glow) => (
        <Image
          key={glow.src}
          src={glow.src}
          alt=""
          aria-hidden
          width={glow.size}
          height={glow.size}
          className={`pointer-events-none absolute max-w-none ${glow.className}`}
        />
      ))}

      <Container className="relative flex flex-col gap-12 md:gap-[72px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-[43px]">
          <h2
            id="testimonials-title"
            className="font-heading text-[2rem] leading-[1.2] font-semibold tracking-[-0.01em] text-black md:text-h1 lg:w-[577px] lg:shrink-0"
          >
            Discover What Our Community Is Saying
          </h2>
          <p className="text-body-md text-graphite md:text-body-lg lg:w-[580px]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly
            from those who have experienced the transformative journey of learning and creating on our platform.
            Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished
            creators.
          </p>
        </div>

        <ul className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-[41px]">
          {testimonials.map((testimonial) => (
            <li key={testimonial.name}>
              <TestimonialCard testimonial={testimonial} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
