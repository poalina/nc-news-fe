import React from "react";

export default function Header(props) {
  return (
    <>
      <h1 className="App-header">NC News</h1>
      <p>
        Logged in as: <i>{props.username}</i>
      </p>
    </>
  );
}
