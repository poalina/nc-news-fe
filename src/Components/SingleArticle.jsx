import React, { Component } from "react";
import * as api from "../utils/api";
import { Button, Spinner } from "reactstrap";
import ErrorPage from "./ErrorPage";
import imgFootie from "../Pictures/football.jpeg";
import imgCoding from "../Pictures/coding.jpeg";
import imgCooking from "../Pictures/cooking.jpeg";
import CommentsList from "./CommentsList";
import Voting from "./Voting";

export default class SingleArticle extends Component {
  state = { article: {}, isLoading: true, isVisible: false, err: null };

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
  handleClickShowHide = () => {
    this.setState(currentState => {
      return { isVisible: !currentState.isVisible };
    });
  };

  render() {
    const { article, isLoading, err, isVisible } = this.state;
    const { username } = this.props;
    if (isLoading)
      return (
        <>
          <Spinner color="info" /> <p>Loading...</p>
        </>
      );
    if (err) return <ErrorPage err={err} />;
    return (
      <main>
        <h1>{article.title}</h1>
        {article.topic === "cooking" && (
          <img src={imgCooking} alt="topic:logo" />
        )}
        {article.topic === "football" && (
          <img src={imgFootie} alt="topic:logo" />
        )}
        {article.topic === "coding" && <img src={imgCoding} alt="topic:logo" />}
        <p>
          Author: <i>{article.author}</i>
        </p>
        <p>
          Created at: <i>{new Date(article.created_at).toDateString()}</i>
        </p>
        <p> {article.body}</p>
        <Voting id={article.article_id} votes={article.votes} type="articles" />
        <br />
        <p>Comments: {article.comment_count}</p>

        <Button color="primary" onClick={this.handleClickShowHide}>
          {isVisible ? "Hide comments" : "Show comments"}
        </Button>
        <br />
        <hr />
        {isVisible && (
          <CommentsList article_id={article.article_id} username={username} />
        )}
      </main>
    );
  }
}
