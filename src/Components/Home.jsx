import ArticlesList from "./ArticlesList";
// import { Spinner } from "reactstrap";
import ErrorPage from "./ErrorPage";
// import ArticleCard2 from "./ArticleCard2";

import React, { Component } from "react";

export default class Home extends Component {
  state = { err: null, isLoading: true };
  render() {
    const { err, isLoading } = this.state;
    // if (isLoading)
    //   return (
    //     <>
    //       <Spinner color="info" /> <p>Loading...</p>
    //     </>
    //   );
    if (err) return <ErrorPage err={err} />;
    return (
      <div>
        <ArticlesList sort="votes" limit="3" path="/" />
        <br />
        <ArticlesList sort="comment_count" limit="3" path="/" /> <br />
        <ArticlesList sort="created_at" limit="3" path="/" />
      </div>
    );
  }
}
