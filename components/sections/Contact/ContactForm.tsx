"use client";

import { useState } from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setIsSubmitting(true);

    // Backend integration will be added later.
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        md:p-10
      "
    >

      <div className="grid gap-6">

        {/* Name */}

        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-zinc-300"
          >
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            required
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-black/20
              px-4
              py-3
              text-sm
              text-white
              outline-none
              placeholder:text-zinc-600
              transition
              focus:border-cyan-400/50
              focus:ring-2
              focus:ring-cyan-400/10
            "
          />
        </div>

        {/* Email */}

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-zinc-300"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-black/20
              px-4
              py-3
              text-sm
              text-white
              outline-none
              placeholder:text-zinc-600
              transition
              focus:border-cyan-400/50
              focus:ring-2
              focus:ring-cyan-400/10
            "
          />
        </div>

        {/* Subject */}

        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-medium text-zinc-300"
          >
            Subject
          </label>

          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="What would you like to discuss?"
            required
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-black/20
              px-4
              py-3
              text-sm
              text-white
              outline-none
              placeholder:text-zinc-600
              transition
              focus:border-cyan-400/50
              focus:ring-2
              focus:ring-cyan-400/10
            "
          />
        </div>

        {/* Message */}

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-zinc-300"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Write your message..."
            required
            className="
              w-full
              resize-none
              rounded-xl
              border
              border-white/10
              bg-black/20
              px-4
              py-3
              text-sm
              text-white
              outline-none
              placeholder:text-zinc-600
              transition
              focus:border-cyan-400/50
              focus:ring-2
              focus:ring-cyan-400/10
            "
          />
        </div>

        {/* Submit */}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-12 w-full"
        >
          <Send className="mr-2 h-4 w-4" />

          {isSubmitting
            ? "Sending..."
            : "Send Message"}
        </Button>

      </div>

    </form>
  );
}