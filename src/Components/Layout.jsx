import React from "react";
import { Container } from "reactstrap";

export default function Layout(props) {
  return <Container style={{ marginTop: "35px" }}>{props.children}</Container>;
}
