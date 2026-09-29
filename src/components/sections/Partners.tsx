import Image from "next/image";

const partners = [
  { src: "/logos/partner-1.svg", width: 167, height: 41 },
  { src: "/logos/partner-2.svg", width: 168, height: 41 },
  { src: "/logos/partner-3.svg", width: 170, height: 41 },
  { src: "/logos/partner-4.svg", width: 170, height: 41 },
  { src: "/logos/partner-5.svg", width: 169, height: 42 },
];

export function Partners() {
  return (
    <section aria-label="Trusted by" className="bg-shuttle-50 py-12 md:py-20">
      <ul className="mx-auto flex max-w-page flex-wrap items-end justify-center gap-x-10 gap-y-8 px-4 md:gap-x-[72px]">
        {partners.map((logo, index) => (
          <li key={logo.src}>
            <Image
              src={logo.src}
              alt={`Partner company ${index + 1} logo`}
              width={logo.width}
              height={logo.height}
              className="h-8 w-auto md:h-auto"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
