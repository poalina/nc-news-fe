import React from "react";
import { Jumbotron, Container } from "reactstrap";

const Jumbo = props => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-1">NC news</h1>
          <p className="lead"></p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
