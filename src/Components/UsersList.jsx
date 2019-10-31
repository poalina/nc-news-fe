import React, { Component } from "react";
import * as api from "../utils/api";
import ErrorPage from "./ErrorPage";
import { Link } from "@reach/router";
import { Spinner } from "reactstrap";

export default class UsersList extends Component {
  state = { users: [], isLoading: true, err: null };

  componentDidMount() {
    api
      .getAllUsers()
      .then(({ users }) => {
        this.setState({ users, isLoading: false });
      })
      .catch(err => {
        this.setState({ err: err.response.data.msg, isLoading: false });
      });
  }

  render() {
    const { users, isLoading, err } = this.state;
    if (isLoading)
      return (
        <>
          <Spinner color="info" />
          <p>Loading...</p>
        </>
      );
    if (err) return <ErrorPage err={err} />;
    return (
      <div>
        {users.map(user => {
          return (
            <main key={user.username}>
              <Link to={`/users/${user.username}`}>
                <h3>
                  {user.name} - <i>{user.username}</i>
                </h3>
              </Link>
              <img src={user.avatar_url} alt={`${user.username} pict`} />
            </main>
          );
        })}
      </div>
    );
  }
}
