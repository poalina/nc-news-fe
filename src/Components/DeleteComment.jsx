import React from "react";

export default function DeleteComment({ comment_id, deleteComment }) {
  return (
    <button
      value={comment_id}
      onClick={() => {
        deleteComment(comment_id);
      }}
    >
      Delete
    </button>
  );
}
