import React, { Component } from "react";

export default class Sort extends Component {
  handleChange = event => {
    const sort_by = event.target.value;

    this.props.fetchArticles(sort_by);
  };
  render() {
    return (
      <form>
        <select onChange={this.handleChange}>
          <option value="created_at">Recently added</option>
          <option value="votes">Most popular</option>
          <option value="comment_count">Most commented</option>
        </select>
      </form>
    );
  }
}
