"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

export function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubscribed(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="Enter your email"
          className="h-[52px] w-full rounded-full border border-shuttle-200 bg-white px-6 text-body-md text-shuttle-950 placeholder:text-shuttle-950 focus:border-brand focus:outline-none sm:w-[376px]"
        />
        <Button type="submit">Subscribe</Button>
      </div>
      <p className="text-body-xs" aria-live="polite">
        {subscribed
          ? "Thanks for subscribing! Check your inbox for a confirmation."
          : "By subscribing, you agree to our Privacy Policy and consent to receive updates from our company."}
      </p>
    </form>
  );
}
