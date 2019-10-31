import React from "react";
import { Link } from "@reach/router";

export default function NavBar(props) {
  return (
    <nav className="navbar bg-dark navbar-expand-md navbar-dark sticky-top">
      <ul className="navbar-nav">
        <li className="navbar-item">
          <Link to="/"> Home | </Link>
        </li>
        <li className="navbar-item">
          <Link to="/articles"> Articles | </Link>
        </li>
        <li className="navbar-item">
          <Link to="/users"> Users | </Link>
        </li>
        <li className="navbar-item">
          <Link to="/topics"> Topics</Link>
        </li>
        <li> Signed in as: {props.username}</li>
      </ul>
    </nav>

    // <div className="container">
    //   <Link to="/">Home </Link>
    //   <Link to="/articles">Articles </Link>
    //   <Link to="/users">Users </Link>
    //   <Link to="/topics">Topics</Link>
    // </div>
  );
}
