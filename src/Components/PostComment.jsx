import React, { Component } from "react";
import * as api from "../utils/api";

export default class PostComment extends Component {
  state = { username: "", body: "" };

  handleChange = event => {
    console.log(this.props.username, "username");
    this.setState({ username: this.props.username, body: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state, "state");
    const { article_id, addNewComment } = this.props;
    api.postCommentByArticleId(article_id, this.state).then(({ comment }) => {
      addNewComment(comment);
      this.setState({ body: "" });
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          required
          type="text"
          value={this.state.body}
          placeholder="write here..."
          onChange={this.handleChange}
        />
        <button type="submit">Add comment</button>
      </form>
    );
  }
}
