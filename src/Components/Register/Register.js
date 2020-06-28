import React, { Component } from "react";
import axios from "axios";
import { updateUser } from "../../Redux/userReducer";
import { connect } from "react-redux";

// import "./Register.css";
import "./RegisterSass.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  register = (e) => {
    e.preventDefault();
    const { username, email, password } = this.state;
    axios
      .post("/auth/register", { username, email, password })
      .then((res) => {
        console.log(
          "Axios returned from register res.data: " + JSON.stringify(res.data)
        );
        this.props.updateUser(
          res.data.userId,
          res.data.username,
          res.data.email
        );
        this.props.history.push("/dashboard");
      })
      .catch((err) => {
        alert("Could not register");
      });
  };

  render() {
    const { username, email, password } = this.state;
    return (
      <div className="containerReg">
        <div className="Register">
          <h1>Register</h1>
          <div className="RegInfo">
            <p>Username: </p>
            <input
              type="text"
              placeholder="username..."
              name="username"
              value={username}
              onChange={(e) => this.changeHandler(e)}
            />
            <br />
            <p>Email: </p>
            <input
              type="email"
              placeholder="email..."
              name="email"
              value={email}
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

            <button onClick={this.register}>Register</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = { updateUser: updateUser };

export default connect(null, mapDispatchToProps)(Register);
