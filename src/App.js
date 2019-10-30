import React, { Component } from "react";
//import "./App.css";
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
  state = { username: "grumpy19" };
  render() {
    const { username } = this.state;
    return (
      <div className="App">
        <Header />
        <NavBar username={username} />
        {/* <NavBar2 /> */}
        <Router>
          <ErrorPage default />
          <ArticlesList path="/" username={username} />
          <ArticlesList path="/articles" />
          <ArticlesList path="/topics/:topic" />
          <ArticlesList path="/users/:username" />
          <SingleArticle path="/articles/:article_id" />
          <TopicsList path="/topics" username={username} />
          <UsersList path="/users" username={username} />
        </Router>
      </div>
    );
  }
}
