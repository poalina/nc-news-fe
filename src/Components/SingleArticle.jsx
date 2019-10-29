import React, { Component } from "react";
import * as api from "../utils/api";
import { Button } from "reactstrap";
import ErrorPage from "./ErrorPage";

export default class SingleArticle extends Component {
  state = { article: {}, isLoading: true, err: null };

  componentDidMount() {
    const { article_id } = this.props;
    api
      .getArticleById(article_id)
      .then(({ article }) => {
        this.setState({ article, isLoading: false });
      })
      .catch(err => {
        this.setState({ err: err.response.data.msg, isLoading: false });
      });
  }

  render() {
    const { article, isLoading, err } = this.state;
    if (isLoading) return <p>Loading...</p>;
    if (err) return <ErrorPage err={err} />;
    return (
      <main>
        <Button color="danger">hey</Button>
        <h1>{article.title}</h1>
        <p>
          Author: <i>{article.author}</i>
        </p>
        <p>
          Created at: <i>{article.created_at}</i>{" "}
        </p>
        <p> {article.body}</p>
        <p>Comments: {article.comment_count}</p>
      </main>
    );
  }
}
