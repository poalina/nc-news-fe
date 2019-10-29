import React, { Component } from "react";
import * as api from "../utils/api";
import imgFootie from "../Pictures/football.jpeg";
import imgCoding from "../Pictures/coding.jpeg";
import imgCooking from "../Pictures/cooking.jpeg";
import ErrorPage from "./ErrorPage";
import { Link } from "@reach/router";

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
    if (isLoading) return <p>Loading...</p>;
    if (err) return <ErrorPage err={err} />;
    return (
      <main>
        <div className="topic-card">
          <div className="overflow">
            {topics.map(topic => {
              return (
                <li key={topic.slug}>
                  <Link to={`/topics/${topic.slug}`}>
                    <i>{topic.slug}</i> - <b>{topic.description}</b>
                  </Link>
                  <br />
                  {topic.slug === "cooking" && <img src={imgCooking} alt="" />}
                  {topic.slug === "football" && <img src={imgFootie} alt="" />}
                  {topic.slug === "coding" && <img src={imgCoding} alt="" />}
                </li>
              );
            })}
          </div>
        </div>
      </main>
    );
  }
}
