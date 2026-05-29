"use client";

import { useState, useEffect } from "react";
import Button from "../Button";
import { z } from "zod";

const commentSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(30, "Name must be at most 30 characters long"),
  email: z.email("Invalid email address"),
  content: z
    .string()
    .min(10, "Comment must be at least 10 characters long")
    .max(500, "Comment must be at most 500 characters long"),
});

const AddComment = ({ eventId, onCommentAdded }) => {
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
  });

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleBlur = (field) => {
    const result = commentSchema.shape[field].safeParse(formData[field]);
    if (!result.success) {
      setErrors((prev) => ({
        ...prev,
        [field]: z.flattenError(result.error).formErrors,
      }));
    } else {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = commentSchema.safeParse(formData);
    if (!result.success) {
      setErrors(z.flattenError(result.error).fieldErrors);
      return;
    }

    const now = new Date();
    const offset = -now.getTimezoneOffset();
    const sign = offset >= 0 ? "+" : "-";
    const pad = (n) => String(Math.floor(Math.abs(n))).padStart(2, "0");
    const formattedDate = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}${sign}${pad(offset / 60)}:${pad(offset % 60)}`;

    const payload = {
      eventId: eventId,
      name: formData.name,
      content: formData.content,
      date: formattedDate,
    };

    try {
      const res = await fetch(
        "https://night-club-api-2026-u759.onrender.com/comments",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );
      const newComment = await res.json();
      onCommentAdded(newComment);
      setErrors({});
      setSuccess(true);
      setFormData({ name: "", email: "", content: "" });
    } catch (err) {
      console.error("Failed to submit comment:", err);
    }
  };

  return (
    <div className="bg-[url(/assets/bg/pattern_bg.jpg)]">
      <div className="mx-auto max-w-400 py-10 px-5 3xl:px-0">
        <h1 className="uppercase text-4xl text-center md:text-left md:text-5xl font-extrabold">
          Leave a comment
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col mt-15 gap-10">
          <div className="grid grid-cols-2 gap-8">
            <div className="w-full">
              <input
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                onBlur={() => handleBlur("name")}
                className="w-full border border-white p-6 placeholder:text-white placeholder:text-lg"
                placeholder="Your Name"
              />
              <div className="self-start min-h-5">
                {errors.name?.[0] && (
                  <p className="text-red-500 text-sm mt-1">{errors.name[0]}</p>
                )}
              </div>
            </div>

            <div className="w-full">
              <input
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                onBlur={() => handleBlur("email")}
                className="w-full border border-white p-6 placeholder:text-white placeholder:text-lg"
                placeholder="Your Email"
              />
              <div className="self-start min-h-5">
                {errors.email?.[0] && (
                  <p className="text-red-500 text-sm mt-1">{errors.email[0]}</p>
                )}
              </div>
            </div>
          </div>

          <div className="w-full">
            <textarea
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              onBlur={() => handleBlur("content")}
              className="w-full border border-white p-6 min-h-40 h-80 max-h-200 placeholder:text-white placeholder:text-lg"
              placeholder="Your Comment"
            />
            <div className="self-start min-h-5">
              {errors.content?.[0] && (
                <p className="text-red-500 text-sm mt-1">{errors.content[0]}</p>
              )}
              {success && (
                <p className="text-green-500 text-sm mt-1">
                  Comment submitted successfully!
                </p>
              )}
            </div>
          </div>

          <button className="self-end">
            <Button buttonText="submit" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddComment;
