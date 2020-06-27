import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../Redux/userReducer";
import axios from 'axios';

import "./Header.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
    this.logout = this.logout.bind(this);
  }

  logout() {
    // axios GET to /auth/logout here
    axios.get('/auth/logout')
    .then ( () => {      
      this.props.logoutUser({});
    })
    .catch(err => console.log(err));
 }

  render() {
    return (
      <div className="header">
        <div className="topnavleft">
          {this.props.isLoggedIn ? (
            <Link to="/dashboard">
              <h1 className="Dashboard">Dashboard</h1>
            </Link>
          ) : (
            <Link to="/">
              <h1 className="Home">Home</h1>
            </Link>
          )}
          <Link to="/about">
            <h1 className="About">About</h1>
          </Link>
          <Link to="/FAQ">
            <h1 className="FAQ">FAQ</h1>
          </Link>
          <Link to="/Contact">
            <h1 className="Contact">Contact</h1>
          </Link>
          {this.props.isLoggedIn && <Link to="/"> <button className="Logout" type="submit" onClick={this.logout}>Logout</button></Link>}
        </div>
        <div className="Name">
          <h1>clusteringly</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    username: reduxState.username,
    profile_pic: reduxState.profile_pic,
    isLoggedIn: reduxState.isLoggedIn,
  };
};

const mapDispatchToProps = { logoutUser: logoutUser }

export default connect(mapStateToProps, mapDispatchToProps)(Header)