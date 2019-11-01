import React from "react";
import err404ufo from "../Pictures/robot-error.webp";

export default function ErrorPage(props) {
  if (!props.err) return <img src={err404ufo} alt="error logo" />;
  return <div>{props.err}</div>;
}
