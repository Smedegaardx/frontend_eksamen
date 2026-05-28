"use client";

import { useState } from "react";
import { z } from "zod";
import Button from "../Button";

const emailSchema = z.email();

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const validatedEmail =
      emailSchema.safeParse(email);

    if (!validatedEmail.success) {
      setError("Please enter a valid email");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:4000/newsletters",
      );

      const newsletters = await response.json();

      const emailExists = newsletters.some(
        (item) =>
          item.email.toLowerCase() ===
          email.toLowerCase(),
      );

      if (emailExists) {
        setError(
          "This email is already subscribed",
        );
        setLoading(false);
        return;
      }

      const postResponse = await fetch(
        "http://localhost:4000/newsletters",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        },
      );

      if (!postResponse.ok) {
        throw new Error("Failed to subscribe");
      }

      setSuccess("Successfully subscribed!");
      setEmail("");
    } catch (err) {
      setError("Something went wrong");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mt-8 mb-8 mx-4">
      <div>
        <h2 className="text-2xl font-bold text-center uppercase">
          want the latest night club news
        </h2>

        <p className="text-center mt-2 mb-10 text-lg">
          Subscribe to our newsletter and never
          miss an
          <span className="text-brand">
            {" "}
            Event
          </span>
        </p>
      </div>

      <form
        noValidate
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row md:items-end items-center justify-center gap-9"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="border-b-3 border-white px-4 py-4 w-full max-w-sm text-white bg-transparent focus:outline-none focus:border-brand placeholder:capitalize placeholder:text-white"
        />

        <Button
          type="submit"
          className="ml-4"
          buttonText={
            loading ? "Loading..." : "Subscribe"
          }
        />
      </form>

      <div className="h-8 mt-4 text-center">
        {error && (
          <p className="text-red-500">{error}</p>
        )}

        {!error && success && (
          <p className="text-green-500">
            {success}
          </p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
