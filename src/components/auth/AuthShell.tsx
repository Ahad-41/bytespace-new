import type { ReactNode } from "react";
import { AuthShowcase } from "@/components/auth/AuthShowcase";
import { Logo } from "@/components/ui/Logo";

type AuthShellProps = {
  title: string;
  description: string;
  children: ReactNode;
};

/** Blue grid page frame shared by the login and sign-up screens. */
export function AuthShell({ title, description, children }: AuthShellProps) {
  return (
    <div className="min-h-screen bg-brand bg-grid">
      <header className="mx-auto flex h-20 max-w-page items-center px-4 sm:px-6 lg:h-[120px] lg:items-start lg:pt-[35px] xl:px-0">
        <Logo markOnly />
      </header>

      <main className="mx-auto grid max-w-page gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[1fr_minmax(0,579px)] lg:pb-[120px] xl:px-0">
        <div className="relative text-shuttle-50">
          <div className="flex max-w-[475px] flex-col gap-4">
            <p className="font-heading text-h4 leading-[1.2] font-semibold">{title}</p>
            <p className="text-body-md md:text-body-lg">{description}</p>
          </div>
          <AuthShowcase />
        </div>

        <section className="rounded-card bg-white px-6 py-10 sm:px-[63px] sm:py-[61px] lg:min-h-[784px]">{children}</section>
      </main>
    </div>
  );
}
