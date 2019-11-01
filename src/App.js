import React, { Component } from "react";
import { Router } from "@reach/router";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import ArticlesList from "./Components/ArticlesList";
import UsersList from "./Components/UsersList";
import TopicsList from "./Components/TopicsList";
import SingleArticle from "./Components/SingleArticle";
import ErrorPage from "./Components/ErrorPage";
import Layout from "./Components/Layout";
import Home from "./Components/Home";

export default class App extends Component {
  state = { username: "grumpy19" };
  render() {
    const { username } = this.state;
    return (
      <React.Fragment>
        <Header username={username} />
        <NavBar username={username} />
        <Layout>
          <Router>
            <ErrorPage default />
            <Home path="/" />
            {/* <ArticlesList path="/" username={username} /> */}
            <ArticlesList path="/articles" />
            <ArticlesList path="/topics/:topic" />
            <ArticlesList path="/users/:username" />
            <SingleArticle path="/articles/:article_id" username={username} />
            <TopicsList path="/topics" username={username} />
            <UsersList path="/users" username={username} />
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}
