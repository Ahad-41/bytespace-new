import type { Metadata } from "next";
import { AuthForm } from "@/components/auth/AuthForm";
import { AuthShell } from "@/components/auth/AuthShell";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function LoginPage() {
  return (
    <AuthShell
      title="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <AuthForm
        eyebrow="Sign In"
        heading="Welcome Back"
        fields={[
          { name: "email", label: "Email", type: "email", placeholder: "designer@example.com", autoComplete: "email" },
          { name: "password", label: "Password", type: "password", placeholder: "********", autoComplete: "current-password" },
        ]}
        submitLabel="Sign In"
        successMessage="Signed in (demo) — authentication isn't connected yet."
        showSocial
        switchPrompt="New user?"
        switchLabel="Create an account"
        switchHref="/signup"
      />
    </AuthShell>
  );
}
