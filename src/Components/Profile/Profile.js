import React, { Component } from "react";

import "./ProfileSass.css";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      languages: "",
      profile_pic: "",
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    
    return (
      <div className="ProfileDiv">
        <div className="containerP">
          <h1>X</h1>
          <p>doiejf</p>
          <p>Profile Picture</p>
          <input
            type="file"
            accept="image/*"
            multiple="false"
            placeholder="Upload image..."
          ></input>
          {/* <div className="updateProfBtn"> */}

          {/* </div> */}
        </div>
        <div className="ProfInfo">
          <p>Email</p>
          <input type="text" placeholder="Email..."></input>
          <p>Languages</p>
          <input type="text" placeholder="Languages..."></input>
          <br/>
          <button onClick={this.addResource}>UPDATE</button>
        </div>
      </div>
    );
  }
}

export default Profile;
