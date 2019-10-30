import React from "react";
import PostComment from "./PostComment";
import DeleteComment from "./DeleteComment";

export default function CommentCard(props) {
  return (
    <main>
      <PostComment
        addNewComment={props.addNewComment}
        article_id={props.article_id}
      />

      <hr />
      {props.comments.map(comment => {
        return (
          <div key={comment.comment_id}>
            <i>{comment.author}: </i> "{comment.body}"
            <br />
            Created at: <i>{new Date(comment.created_at).toDateString()}</i>
            <p>Votes: {comment.votes}</p>
            <DeleteComment
              comment_id={comment.comment_id}
              deleteComment={props.deleteComment}
            />
            <hr />
          </div>
        );
      })}
    </main>
  );
}
