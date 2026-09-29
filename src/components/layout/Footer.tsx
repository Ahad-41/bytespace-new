import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { footerNav, legalNav } from "@/data/navigation";

const linkStyles = "text-body-sm text-shuttle-950 transition hover:text-brand";

export function Footer() {
  return (
    <footer className="border-t border-shuttle-200 bg-white">
      <div className="mx-auto flex max-w-page flex-col gap-16 px-4 pt-[71px] pb-12 sm:px-6 lg:gap-[130px] xl:px-0">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-[92px]">
          <div className="flex max-w-[528px] flex-col gap-[45px]">
            <div className="flex flex-col gap-4">
              <Logo tone="dark" />
              <p className="text-body-sm">Stay Up to date with our latest features and releases by joining our newsletter.</p>
            </div>
            <NewsletterForm />
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:w-[580px]">
            {footerNav.map((group) => (
              <div key={group.title}>
                <h2 className="sr-only">{group.title}</h2>
                <ul className="flex flex-col gap-4 lg:pt-12">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={linkStyles}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-shuttle-200 pt-5 text-body-xs sm:flex-row sm:justify-between">
          <p>© 2023 ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-6">
            {legalNav.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition hover:text-brand">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
