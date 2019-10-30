import React, { Component } from "react";
import * as api from "../utils/api";
import PostComment from "./PostComment";

export default class CommentsList extends Component {
  state = { comments: [], isLoading: true };

  componentDidMount() {
    const { article_id } = this.props;
    api.getCommentsByArticleId(article_id).then(({ comments }) => {
      this.setState({ comments, isLoading: false });
    });
  }

  addNewComment = comment => {
    console.log(comment, "=== comments list ");
    this.setState(currState => {
      //s console.log(currState.comments, "=== comments list ");
      return { comments: [comment, ...currState.comments] };
    });
  };

  render() {
    const { comments, isLoading } = this.state;
    const { article_id } = this.props;
    if (isLoading) return <p>Loading...</p>;

    return (
      <main>
        <br />
        <hr />
        <PostComment
          addNewComment={this.addNewComment}
          article_id={article_id}
        />
        {comments.map(comment => {
          return (
            <div key={comment.comment_id}>
              <i>{comment.author}: </i> "{comment.body}"
              <br />
              Created at: <i>{new Date(comment.created_at).toDateString()}</i>
              <p>Votes: {comment.votes}</p>
              <hr />
            </div>
          );
        })}
      </main>
    );
  }
}
