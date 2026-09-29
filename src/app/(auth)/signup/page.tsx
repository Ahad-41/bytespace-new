import type { Metadata } from "next";
import { AuthForm } from "@/components/auth/AuthForm";
import { AuthShell } from "@/components/auth/AuthShell";

export const metadata: Metadata = {
  title: "Create an Account",
};

export default function SignupPage() {
  return (
    <AuthShell
      title="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <AuthForm
        eyebrow="Create an Account"
        heading="Welcome to ByteSpace"
        fields={[
          { name: "fullName", label: "Full Name", type: "text", placeholder: "Jamie Davis", autoComplete: "name" },
          { name: "email", label: "Email", type: "email", placeholder: "designer@example.com", autoComplete: "email" },
          { name: "password", label: "Password", type: "password", placeholder: "********", autoComplete: "new-password" },
        ]}
        submitLabel="Continue"
        successMessage="Account created (demo) — registration isn't connected yet."
        switchPrompt="Already have an account?"
        switchLabel="Login"
        switchHref="/login"
      />
    </AuthShell>
  );
}
