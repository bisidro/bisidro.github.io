import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export function ContactForm() {
    const [state, handleSubmit] = useForm("mrbkqyyr");
    if (state.succeeded) {
        return <p className="text-lg mt-4">Thanks for reaching out! I'll get back to you as soon as possible.</p>;
    }
    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md mx-auto">
        <div>
          <label htmlFor="email" className="block mb-1 font-medium text-foreground">Full Name</label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="w-full rounded border border-border px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
            className="text-destructive text-sm mt-1"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-medium text-foreground">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full rounded border border-border px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-destructive text-sm mt-1"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 font-medium text-foreground">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full rounded border border-border px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-destructive text-sm mt-1"
          />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="rounded-button bg-primary text-primary-foreground border border-transparent px-5 py-3 font-medium transition-colors hover:bg-primary/90 hover:text-primary-foreground hover:border-ring"
          >
          Submit
        </button>
      </form>
    );
  }