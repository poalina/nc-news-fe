import React, { Component } from "react";
import * as api from "../utils/api";
import ArticleCard from "./ArticleCard";
import ErrorPage from "./ErrorPage";
import Sort from "./Sort";

export default class ArticlesList extends Component {
  state = { articles: [], isLoading: true, sort_by: "created_at", err: null };

  componentDidMount() {
    const { topic } = this.props;
    api
      .getAllArticles(topic)
      .then(({ articles }) => {
        this.setState({ articles, isLoading: false });
      })
      .catch(err => {
        this.setState({ err: err.response.data.msg, isLoading: false });
      });
  }

  fetchArticles = sort_by => {
    api.getAllArticles(sort_by).then(({ articles }) => {
      this.setState({ articles, isLoading: false });
    });
  };

  render() {
    const { articles, isLoading, err } = this.state;
    if (isLoading) return <p>Loading...</p>;
    if (err) return <ErrorPage err={err} />;
    return (
      <div>
        <Sort articles={articles} fetchArticles={this.fetchArticles} />
        <ul>
          {articles.map(article => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      </div>
    );
  }
}
