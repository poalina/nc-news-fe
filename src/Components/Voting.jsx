import React, { Component } from "react";
import { Button } from "reactstrap";
import * as api from "../utils/api";

export default class Voting extends Component {
  state = { voteChange: 0 };

  handleClick = num => {
    const id = this.props.id;
    const { type } = this.props;

    api.patchVotesById(id, num, type).catch(console.log);
    this.setState(currentState => {
      return { voteChange: currentState.voteChange + num };
    });
  };
  render() {
    const { voteChange } = this.state;
    return (
      <div>
        <p>Votes: {this.props.votes + voteChange}</p>

        <Button
          disabled={voteChange === 1}
          size="sm"
          color="success"
          onClick={() => {
            this.handleClick(1);
          }}
        >
          Vote Up
        </Button>
        <Button
          disabled={voteChange === -1}
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
