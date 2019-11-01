// import ArticlesList from "./ArticlesList";
// import { Spinner } from "reactstrap";
import ErrorPage from "./ErrorPage";
import Card2 from "./Card2";

import React, { Component } from "react";

export default class Home extends Component {
  state = { err: null, isLoading: true };
  render() {
    const { err } = this.state;
    // if (isLoading)
    //   return (
    //     <>
    //       <Spinner color="info" /> <p>Loading...</p>
    //     </>
    //   );
    if (err) return <ErrorPage err={err} />;
    return (
      <div>
        <Card2 />
        <Card2 />
        {/* <ArticlesList limit="4" /> */}
      </div>
    );
  }
}
