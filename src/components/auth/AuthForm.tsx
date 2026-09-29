"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";

type Field = {
  name: string;
  label: string;
  type: "text" | "email" | "password";
  placeholder: string;
  autoComplete: string;
};

type AuthFormProps = {
  eyebrow: string;
  heading: string;
  fields: Field[];
  submitLabel: string;
  successMessage: string;
  showSocial?: boolean;
  switchPrompt: string;
  switchLabel: string;
  switchHref: string;
};

const socialProviders = [
  { name: "Facebook", icon: "/icons/facebook.svg" },
  { name: "Google", icon: "/icons/google.svg" },
];

export function AuthForm({
  eyebrow,
  heading,
  fields,
  submitLabel,
  successMessage,
  showSocial = false,
  switchPrompt,
  switchLabel,
  switchHref,
}: AuthFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="flex h-full flex-col justify-between gap-12">
      <div className="flex flex-col gap-10">
        <div>
          <p className="text-body-md text-brand md:text-body-lg">{eyebrow}</p>
          <h1 className="font-heading text-[2rem] leading-[1.2] font-semibold tracking-[-0.01em] text-shuttle-950 md:text-h1">
            {heading}
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {fields.map((field) => (
            <TextField key={field.name} id={field.name} required {...field} />
          ))}
          <Button type="submit" className="self-end">
            {submitLabel}
          </Button>
          <p role="status" className="text-body-sm text-brand empty:hidden">
            {submitted ? successMessage : ""}
          </p>
        </form>
      </div>

      {showSocial && (
        <div className="flex flex-col items-center gap-10">
          <div className="flex w-full items-center gap-3 text-body-md text-muted md:text-body-lg">
            <span className="h-px flex-1 bg-line" />
            or
            <span className="h-px flex-1 bg-line" />
          </div>
          <div className="flex gap-4">
            {socialProviders.map((provider) => (
              <button
                key={provider.name}
                type="button"
                aria-label={`Continue with ${provider.name}`}
                className="flex size-[72px] items-center justify-center rounded-card border border-line transition hover:border-brand hover:bg-shuttle-50"
              >
                <Image src={provider.icon} alt="" width={40} height={40} />
              </button>
            ))}
          </div>
        </div>
      )}

      <p className="text-center text-body-md text-muted">
        {switchPrompt}{" "}
        <Link href={switchHref} className="text-brand hover:underline">
          {switchLabel}
        </Link>
      </p>
    </div>
  );
}
