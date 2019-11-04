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
import * as api from "./utils/api";

export default class App extends Component {
  state = {
    username: "",
    users: [],
    isLoading: true,
    err: null
  };

  componentDidMount() {
    api
      .getAllUsers()
      .then(({ users }) => {
        this.setState({ users, isLoading: false });
      })
      .catch(err => {
        this.setState({ err: err.response.data.msg, isLoading: false });
      });
  }
  changeUser = username => {
    this.setState({ username }, () => {});
  };
  render() {
    const { username, users, isLoading, err } = this.state;
    return (
      <React.Fragment>
        <Header
          username={username}
          users={users}
          changeUser={this.changeUser}
        />
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
            <UsersList
              path="/users"
              username={username}
              users={users}
              isLoading={isLoading}
              err={err}
            />
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}
