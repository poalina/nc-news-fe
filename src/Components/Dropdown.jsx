import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const DropdownUsers = ({ users, username, changeUser }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const handleChange = event => {
    const username = event.target.value;
    if (username) changeUser(username);
  };

  return (
    <Dropdown
      isOpen={dropdownOpen}
      toggle={toggle}
      size="sm"
      direction="right"
      onClick={handleChange}
    >
      <DropdownToggle caret>{username || "choose user"}</DropdownToggle>
      <DropdownMenu>
        {users.map(user => {
          return (
            <DropdownItem value={user.username} key={user.username}>
              {user.username}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownUsers;
