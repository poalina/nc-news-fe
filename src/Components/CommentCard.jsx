import React from "react";
import PostComment from "./PostComment";
import DeleteComment from "./DeleteComment";

import Voting from "./Voting";

export default function CommentCard(props) {
  return (
    <main>
      <PostComment
        username={props.username}
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
            <br />
            {props.username === comment.author && (
              <>
                <DeleteComment
                  comment_id={comment.comment_id}
                  deleteComment={props.deleteComment}
                />
                <br />
              </>
            )}
            <Voting
              type="comments"
              id={comment.comment_id}
              votes={comment.votes}
            />
            <hr />
          </div>
        );
      })}
    </main>
  );
}
