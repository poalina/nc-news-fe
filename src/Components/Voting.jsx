import React, { Component } from "react";
import { Button } from "reactstrap";

export default class Voting extends Component {
  state = { isDisable: true };

  handleClick;
  render() {
    return (
      <div>
        <Button
          disabled={!this.state.isDisable}
          size="sm"
          color="success"
          onClick={() => {
            console.log("clicked up");
          }}
        >
          Vote Up
        </Button>
        <Button
          disabled={!this.state.isDisable}
          size="sm"
          color="danger"
          onClick={() => {
            console.log("clicked down");
          }}
        >
          Vote Down
        </Button>
      </div>
    );
  }
}
