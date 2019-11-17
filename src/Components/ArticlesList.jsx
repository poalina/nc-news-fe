import React, { Component } from "react";
import * as api from "../utils/api";
import ErrorPage from "./ErrorPage";
import Sort from "./Sort";
import { Spinner, CardDeck, Button } from "reactstrap";
import ArticleCard1 from "./ArticleCard1";
import ArticleCard2 from "./ArticleCard2";
import AscDesc from "./AscDesc";
import Heading from "./Heading";

export default class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: "created_at",
    order: "desc",
    err: null,
    page: 1,
    maxPage: Infinity,
    limit: 10
  };

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = () => {
    console.log(this.props, "props z articlesList 27");
    const { topic, username, limit, sort } = this.props;
    let { page, sort_by, order } = this.state;
    if (sort) {
      sort_by = sort;
    }
    api
      .getAllArticles(topic, username, sort_by, page, order, limit)
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

  changeOrder = order => {
    this.setState({ order });
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, sort_by, order } = this.state;

    if (
      prevState.page !== page ||
      prevState.sort_by !== sort_by ||
      prevState.order !== order
    ) {
      this.fetchArticles();
    }
  }

  render() {
    const { articles, isLoading, err, page, order } = this.state;
    const { path, sort } = this.props;
    if (path === "/")
      return (
        <div>
          <Heading sort={sort} />
          <CardDeck>
            {articles.map(article => {
              return (
                <ArticleCard2 key={article.article_id} article={article} />
              );
            })}
          </CardDeck>
        </div>
      );
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
        <AscDesc order={order} changeOrder={this.changeOrder} />
        <ul>
          {articles.map(article => {
            return <ArticleCard1 key={article.article_id} article={article} />;
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
