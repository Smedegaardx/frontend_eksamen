"use client";

import { useState } from "react";
import Button from "../Button";

const AddComment = ({ eventId, onCommentAdded }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("form submitted");
    const payload = {
      eventId: eventId,
      name: name,
      content: content,
      date: new Date().toISOString(),
    };

    const res = await fetch("http://localhost:4000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const newComment = await res.json();

    onCommentAdded(newComment);

    setName("");
    setEmail("");
    setContent("");
  };

  return (
    <div className="bg-[url(/assets/bg/pattern_bg.jpg)]">
      <div className="mx-auto max-w-400 py-10 px-5 3xl:px-0">
        <h1 className="uppercase text-4xl text-center md:text-left md:text-5xl font-extrabold">
          Leave a comment
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col mt-15 gap-10">
          <div className="grid grid-cols-2 gap-8">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-white p-6 placeholder:text-white placeholder:text-lg"
              placeholder="Your Name"
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-white p-6 placeholder:text-white placeholder:text-lg"
              placeholder="Your Email"
            />
          </div>

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border border-white p-6 min-h-40 h-80 max-h-200 placeholder:text-white placeholder:text-lg"
            placeholder="Your Comment"
          />

          <div className="self-end">
            <Button buttonText="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddComment;
