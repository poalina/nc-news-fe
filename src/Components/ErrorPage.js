import React from "react";
import err404ufo from "../Pictures/robot-error.webp";
import { Link } from "@reach/router";

export default function ErrorPage(props) {
  if (!props.err)
    return (
      <Link to="/">
        <img src={err404ufo} alt="error logo" />
      </Link>
    );
  return <div>{props.err}</div>;
}
