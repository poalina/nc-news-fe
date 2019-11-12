import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <nav
        className="navbar sticky-top navbar-dark bg-dark navbar-expand-lg"
        style={{ zIndex: 1 }}
      >
        {/* <Navbar color="info" light expand="md"> */}
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} className="mr-2" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto position-sticky" navbar>
            <NavItem>
              <NavLink href="/articles">Articles</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/users">Users</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Topics
              </DropdownToggle>
              <DropdownMenu style={{ backgroundColor: "grey" }} right>
                <DropdownItem>
                  <NavLink href="/topics/cooking">Cooking</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/topics/coding">Coding</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/topics/football">Football</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink href="/topics">All topics</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
        {/* </Navbar> */}
      </nav>
    </div>
  );
};

export default NavBar;
