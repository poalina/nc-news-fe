import React, { Component } from "react";
import * as api from "../utils/api";

export default class CommentsList extends Component {
  state = { comments: [], isLoading: true };

  componentDidMount() {
    const { article_id } = this.props;
    api.getCommentsByArticleId(article_id).then(({ comments }) => {
      this.setState({ comments, isLoading: false });
    });
  }

  render() {
    const { comments, isLoading } = this.state;
    if (isLoading) return <p>Loading...</p>;

    return (
      <main>
        {comments.map(comment => {
          return (
            <div key={comment.comment_id}>
              <i>{comment.author}: </i> "{comment.body}"
              <br />
              Created at: <i>{comment.created_at}</i>
              <p>Votes: {comment.votes}</p>
              <hr />
            </div>
          );
        })}
      </main>
    );
  }
}
