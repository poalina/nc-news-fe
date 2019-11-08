import React, { Component } from "react";
import * as api from "../utils/api";
import imgFootie from "../Pictures/football.jpeg";
import imgCoding from "../Pictures/coding.jpeg";
import imgCooking from "../Pictures/cooking.jpeg";
import ErrorPage from "./ErrorPage";
// import { Link } from "@reach/router";
import { Spinner } from "reactstrap";
import CardTopics from "./CardTopics";
import { navigate } from "@reach/router";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardGroup
} from "reactstrap";

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
          return (
            <CardTopics topic={topic} key={topic.slug} />
            // <div key={topic.slug}>
            //   <Link to={`/topics/${topic.slug}`}>
            //     <b> # {topic.slug}</b> - {topic.description}
            //   </Link>
            //   <br />

            // </div>
          );
        })}
      </CardGroup>
    );
  }
}
