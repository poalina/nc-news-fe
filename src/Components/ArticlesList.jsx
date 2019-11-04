import React, { Component } from "react";
import * as api from "../utils/api";
import ErrorPage from "./ErrorPage";
import Sort from "./Sort";
import { Spinner, Button } from "reactstrap";
import Card1 from "./Card1";

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
    //const { sort_by } = this.state;
    this.fetchArticles();
  }

  fetchArticles = () => {
    const { topic, username } = this.props;
    const { page, sort_by } = this.state;
    api
      .getAllArticles(topic, username, sort_by, page)
      .then(({ articles }) => {
        this.setState({ articles, isLoading: false });
      })
      .catch(err => {
        this.setState({ err: err.response.data.msg, isLoading: false });
      });
  };
  changePage = direction => {
    this.setState(currentState => {
      return { page: currentState.page + direction };
    });
  };

  changeSortBy = sort_by => {
    this.setState({ sort_by: sort_by });
  };

  componentDidUpdate(prevProps, prevState) {
    const pageChanged = prevState.page !== this.state.page;
    const sortByChanged = prevState.sort_by !== this.state.sort_by;
    if (pageChanged || sortByChanged) {
      this.fetchArticles();
    }
  }

  render() {
    const { articles, isLoading, err, page } = this.state;
    // const { path } = this.props;
    // if statement if '/' show Card1, if path="/articles" show card 2
    if (isLoading)
      return (
        <>
          <Spinner color="info" /> <p>Loading...</p>
        </>
      );
    if (err) return <ErrorPage err={err} />;
    return (
      <div>
        <Sort articles={articles} changeSortBy={this.changeSortBy} />
        <ul>
          {articles.map(article => {
            return <Card1 key={article.article_id} article={article} />;
          })}
        </ul>
        <Button disabled={page === 1} onClick={() => this.changePage(-1)}>
          Prev page
        </Button>{" "}
        <Button
          disabled={articles.length < 10}
          onClick={() => this.changePage(1)}
        >
          {" "}
          Next page
        </Button>
      </div>
    );
  }
}
