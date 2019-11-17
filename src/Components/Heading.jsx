import React from "react";
import { Alert } from "reactstrap";

const Heading = props => {
  return (
    <div>
      {" "}
      {props.sort === "comment_count" && (
        <Alert color="success">Check out the most commented articles!!!</Alert>
      )}
      {props.sort === "votes" && (
        <Alert color="success">Check out the most popular articles!!!</Alert>
      )}
      {props.sort === "created_at" && (
        <Alert color="success">Check out the latest articles!!!</Alert>
      )}
      {/* <Alert color="secondary">Check out the latest articles!!!</Alert> */}
      {/* <Alert color="success">Check out the latest articles!!!</Alert> */}
      {/* <Alert color="info">Check out the latest articles!!!</Alert> */}
      {/* <Alert color="dark">Check out the latest articles!!!</Alert> */}
    </div>
  );
};

export default Heading;
