import React from "react";
import DropdownUsers from "./Dropdown";

export default function Header(props) {
  return (
    <main>
      <h1 className="App-header">NC News</h1>
      <div>
        Logged in as:
        <DropdownUsers
          users={props.users}
          username={props.username}
          changeUser={props.changeUser}
        />
        {/* <i>{props.username}</i> */}
      </div>
    </main>
  );
}
