import React, { useState } from "react";

import "./ProfileSass.css";

function Profile () {
  // constructor() {
  //   super();
  //   this.state = {
  //     username: "",
  //     email: "",
  //     languages: "",
  //     profile_pic: "",
  //   };
  // }


const [username, setUsername] = useState ('')
// const [email, setEmail] = useState ('')
// const [languages, setLanguages] = useState ('')
// const [profile_pic, setProfile_pic] = useState ('')


  const changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

    return (
      <div className="ProfileDiv">
        <div className="containerP">
          <h1>Profile</h1>          
          {/* <input
            type="file"
            accept="image/*"
            multiple="false"
            placeholder="Upload image..."
          ></input> */}
          {/* <div className="updateProfBtn"> */}

          {/* </div> */}
        </div>
        <div className="ProfInfo">
          <p>Username</p>
          <input onChange {(e) => setUsername(e.target.value)} type="text" placeholder="Username..."></input>
          {/* <p>Languages</p>
          <input type="text" placeholder="Languages..."></input> */}
          <br/>
          <button onClick={this.addResource}>UPDATE</button>
        </div>
      </div>
    );
}

export default Profile;
