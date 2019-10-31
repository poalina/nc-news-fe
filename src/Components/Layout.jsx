import React from "react";
import { Container } from "reactstrap";

export default function Layout(props) {
  return <Container>{props.children}</Container>;
}
