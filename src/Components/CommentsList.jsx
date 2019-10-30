import React, { Component } from "react";
import * as api from "../utils/api";
// import PostComment from "./PostComment";
// import DeleteComment from "./DeleteComment";
import CommentCard from "./CommentCard";

export default class CommentsList extends Component {
  state = { comments: [], isLoading: true };

  componentDidMount() {
    const { article_id } = this.props;
    api.getCommentsByArticleId(article_id).then(({ comments }) => {
      this.setState({ comments, isLoading: false });
    });
  }

  addNewComment = comment => {
    this.setState(currState => {
      return { comments: [comment, ...currState.comments] };
    });
  };
  deleteComment = comment_id => {
    api.deleteCommentById(comment_id);
    const newState = this.state.comments.filter(comment => {
      return comment.comment_id !== comment_id;
    });
    this.setState({ comments: newState });
  };
  render() {
    const { comments, isLoading } = this.state;
    const { article_id } = this.props;
    if (isLoading) return <p>Loading...</p>;

    return (
      <main>
        <CommentCard
          addNewComment={this.addNewComment}
          article_id={article_id}
          comments={comments}
          deleteComment={this.deleteComment}
        />
      </main>
    );
  }
}
