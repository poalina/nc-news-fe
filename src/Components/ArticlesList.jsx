import React, { Component } from "react";
import * as api from "../utils/api";
import ArticleCard from "./ArticleCard";
import ErrorPage from "./ErrorPage";
import Sort from "./Sort";
import { Spinner } from "reactstrap";

export default class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: "created_at",
    err: null,
    page: 1,
    maxPage: Infinity
  };

  componentDidMount() {
    const { sort_by } = this.state;
    this.fetchArticles(sort_by);
  }

  fetchArticles = sort_by => {
    const { topic, username } = this.props;
    api
      .getAllArticles(topic, username, sort_by)
      .then(({ articles }) => {
        this.setState({ articles, isLoading: false });
      })
      .catch(err => {
        this.setState({ err: err.response.data.msg, isLoading: false });
      });
  };

  render() {
    const { articles, isLoading, err } = this.state;
    if (isLoading)
      return (
        <>
          <Spinner color="info" /> <p>Loading...</p>
        </>
      );
    if (err) return <ErrorPage err={err} />;
    return (
      <div>
        <Sort articles={articles} fetchArticles={this.fetchArticles} />
        <ul>
          {articles.map(article => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
        <button> Prev page</button>
        <button> Next page</button>
      </div>
    );
  }
}
