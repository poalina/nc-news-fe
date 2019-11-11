import React, { Component } from "react";
import * as api from "../utils/api";

import ErrorPage from "./ErrorPage";

import { Spinner } from "reactstrap";
import CardTopics from "./CardTopics";

import { CardGroup } from "reactstrap";

export default class TopicsList extends Component {
  state = { topics: [], isLoading: true, err: null };

  componentDidMount() {
    api
      .getAllTopics()
      .then(({ topics }) => {
        this.setState({ topics, isLoading: false });
      })
      .catch(err => {
        this.setState({ err: err.response.data.msg, isLoading: false });
      });
  }

  render() {
    const { topics, isLoading, err } = this.state;
    if (isLoading)
      return (
        <>
          <Spinner color="info" />
          <p>Loading...</p>
        </>
      );
    if (err) return <ErrorPage err={err} />;
    return (
      <CardGroup>
        {topics.map(topic => {
          return <CardTopics topic={topic} key={topic.slug} />;
        })}
      </CardGroup>
    );
  }
}
