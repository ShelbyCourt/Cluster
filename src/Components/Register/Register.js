import React, { useState } from "react";
import axios from "axios";
import { updateUser } from "../../Redux/userReducer";
import { connect } from "react-redux";

// import "./Register.css";
import "./RegisterSass.css";

function Register (props) {
  // constructor() {
  //   super();
  //   this.state = {
  //     username: "",
  //     email: "",
  //     password: "",
  //   };
  // }

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  // const changeHandler = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const register = (e) => {
    e.preventDefault();
    // const { username, email, password } = this.state;
    axios
      .post("/auth/register", { username, email, password })
      .then((res) => {
        console.log(
          "Axios returned from register res.data: " + JSON.stringify(res.data)
        );
        props.updateUser(
          res.data.userId,
          res.data.username,
          res.data.email
        );
        props.history.push("/dashboard");
      })
      .catch((err) => {
        alert("Could not register");
      });
  };

  // render() {
  //   const { username, email, password } = this.state;
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
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <p>Email: </p>
            <input
              type="email"
              placeholder="email..."
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <p>Password: </p>
            <input
              type="password"
              placeholder="password..."
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            <button onClick={register}>Register</button>
          </div>
        </div>
      </div>
    );
 
}

const mapDispatchToProps = { updateUser: updateUser };

export default connect(null, mapDispatchToProps)(Register);
