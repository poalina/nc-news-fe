import React, { Component } from "react";
import * as api from "../utils/api";
import { Button } from "reactstrap";
import ErrorPage from "./ErrorPage";
import imgFootie from "../Pictures/football.jpeg";
import imgCoding from "../Pictures/coding.jpeg";
import imgCooking from "../Pictures/cooking.jpeg";

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
        {article.topic === "cooking" && <img src={imgCooking} alt="" />}
        {article.topic === "football" && <img src={imgFootie} alt="" />}
        {article.topic === "coding" && <img src={imgCoding} alt="" />}
        <p>
          Author: <i>{article.author}</i>
        </p>
        <p>
          Created at: <i>{article.created_at}</i>{" "}
        </p>
        <p> {article.body}</p>
        <p>Comments: {article.comment_count}</p>
        <p>Votes: {article.votes} </p>
      </main>
    );
  }
}
