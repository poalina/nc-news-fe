import React, { Component } from "react";
//import "../";
import { Router } from "@reach/router";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import ArticlesList from "./Components/ArticlesList";

// import NavBar2 from "./Components/NavBar2";
import UsersList from "./Components/UsersList";
import TopicsList from "./Components/TopicsList";
import SingleArticle from "./Components/SingleArticle";
import ErrorPage from "./Components/ErrorPage";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        {/* <NavBar2 /> */}
        <Router>
          <ErrorPage default />
          <ArticlesList path="/" />
          <ArticlesList path="/articles" />
          <ArticlesList path="/topics/:topic" />
          <SingleArticle path="/articles/:article_id" />
          <TopicsList path="/topics" />
          <UsersList path="/users" />
        </Router>
      </div>
    );
  }
}
