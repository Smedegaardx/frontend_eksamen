"use client";

import { useState } from "react";
import AddComment from "./AddComment";
import Comments from "./Comments";

const CommentSection = ({ eventId, initialComments }) => {
  const [comments, setComments] = useState(initialComments);

  const handleCommentAdded = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };

  return (
    <div>
      <Comments comments={comments}></Comments>
      <AddComment
        eventId={eventId}
        onCommentAdded={handleCommentAdded}
      ></AddComment>
    </div>
  );
};

export default CommentSection;
