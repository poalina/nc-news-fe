import React, { Component } from "react";
import { Button } from "reactstrap";
import * as api from "../utils/api";

export default class Voting extends Component {
  state = { voteChange: 0, isDisableUp: false, isDisableDown: false };

  handleClick = num => {
    const id = this.props.article_id;

    api.patchVotesById(id, num).catch(console.log);

    this.setState({ voteChange: 1, isDisable: true });
  };
  render() {
    const { isDisable, voteChange } = this.state;
    return (
      <div>
        <p>Votes: {this.props.votes + voteChange}</p>

        <Button
          disabled={isDisable}
          size="sm"
          color="success"
          onClick={() => {
            this.handleClick(1);
          }}
        >
          Vote Up
        </Button>
        <Button
          disabled={isDisable}
          size="sm"
          color="danger"
          onClick={() => {
            this.handleClick(-1);
          }}
        >
          Vote Down
        </Button>
      </div>
    );
  }
}
