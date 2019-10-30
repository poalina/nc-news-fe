import React from "react";
import { Button } from "reactstrap";

export default function DeleteComment({ comment_id, deleteComment }) {
  return (
    <Button
      size="sm"
      color="secondary"
      value={comment_id}
      onClick={() => {
        deleteComment(comment_id);
      }}
    >
      Delete
    </Button>
  );
}
