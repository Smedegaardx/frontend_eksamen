"use client";

import Button from "@/components/Button";
import { useState } from "react";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(30, "Name must be less than 30 characters"),

  email: z.email("Invalid email address"),

  content: z
    .string()
    .min(10, "Comment must be at least 10 characters")
    .max(500, "Comment must be less than 500 characters"),
});

const ContactForm = () => {
  const [success, setSuccess] = useState(false);

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
  });

  const validateField = (field, value) => {
    const fieldSchema = contactSchema.shape[field];

    const result = fieldSchema.safeParse(value);

    setErrors((prev) => ({
      ...prev,
      [field]: result.success
        ? undefined
        : result.error.issues.map((issue) => issue.message),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors);
      return;
    }

    const payload = {
      ...result.data,
      date: new Date().toISOString(),
    };

    const response = await fetch("http://localhost:4000/contact_messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      setSuccess(true);

      setErrors({});

      setFormData({
        name: "",
        email: "",
        content: "",
      });

      setTimeout(() => setSuccess(false), 5000);
    }
  };

  return (
    <section className="flex flex-col items-center py-16 bg-[url(/assets/bg/pattern_bg.jpg)] bg-cover bg-center mx-4">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col items-center gap-4 w-full max-w-lg"
      >
        {/* NAME */}
        <div className="w-full">
          <input
            className="w-full border border-white text-white placeholder:text-white/80 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand p-3"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
            onBlur={(e) => validateField("name", e.target.value)}
          />

          <div className="self-start min-h-5">
            {errors.name?.[0] && (
              <p className="text-red-400 text-sm">{errors.name[0]}</p>
            )}
          </div>
        </div>

        {/* EMAIL */}
        <div className="w-full">
          <input
            className="w-full border border-white text-white placeholder:text-white/80 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand p-3"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            onBlur={(e) => validateField("email", e.target.value)}
          />

          <div className="self-start min-h-5">
            {errors.email?.[0] && (
              <p className="text-red-400 text-sm">{errors.email[0]}</p>
            )}
          </div>
        </div>

        {/* CONTENT */}
        <div className="w-full">
          <textarea
            className="w-full border border-white text-white placeholder:text-white/80 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand p-3 min-h-48 resize-y"
            placeholder="Your Comment"
            value={formData.content}
            onChange={(e) =>
              setFormData({
                ...formData,
                content: e.target.value,
              })
            }
            onBlur={(e) => validateField("content", e.target.value)}
          />

          <div className="self-start min-h-5">
            {errors.content?.[0] && (
              <p className="text-red-400 text-sm">{errors.content[0]}</p>
            )}

            {success && (
              <p className="text-green-400 text-sm self-start">
                Your message has been sent.
              </p>
            )}
          </div>
        </div>

        <button className="flex justify-center md:justify-end max-w-lg w-full mt-1">
          <Button buttonText="Send" />
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
