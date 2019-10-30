import React, { Component } from "react";

export default class PostComment extends Component {
  state = { username: "grumpy19", body: "" };

  handleChange(event) {
    console.log(event.target.value, "terget");
    this.setState({ body: event.target.value });
  }
  render() {
    return (
      <form>
        <input
          type="text"
          value={this.body}
          placeholder="write here..."
          onChange={this.handleChange}
        />
        <button type="submit">Add comment</button>
      </form>
    );
  }
}
