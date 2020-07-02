import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser } from "../../Redux/userReducer";
// import './Auth.css';
import "./AuthSass.css";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
    };
    this.login = this.login.bind(this);
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  login = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    axios
      .post("/auth/login", { username, password })
      .then((res) => {
        this.props.updateUser(res.data.userId, res.data.username);
        this.props.history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        alert("Could not login");
      });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="AllAuth">
        <div className="Auth">
          <div className="Login">
            <h1>Login</h1>
            <p>Username: </p>
            <input
              type="text"
              placeholder="username..."
              name="username"
              value={username}
              onChange={(e) => this.changeHandler(e)}
            />
            <br />
            <p>Password: </p>
            <input
              type="password"
              placeholder="password..."
              name="password"
              value={password}
              onChange={(e) => this.changeHandler(e)}
            />
            <br />
            <button onClick={this.login}>Login</button>
            <br />
            <p>Haven't signed up yet?</p>
            <Link to="/register">
              <h1 className="Register">Register</h1>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = { updateUser: updateUser };

export default connect(null, mapDispatchToProps)(Auth);
