import React, { Component } from "react";

import "./DownloadsSass.css";

class Downloads extends Component {
  render() {
    return (
      <div className="DLBody">
        <div className="containerDL">
          <h1>Learn On the Go!</h1>
          <p>Take a few notes with you:</p>
          <ul>
            <li>
              <a
                href="https://clusteringly-downloads.s3-us-west-1.amazonaws.com/Beginner-Classroom-Phrases.PNG"
                target="_blank"
              >
                Beginner Classroom/Virtual Event Phrases
              </a>
            </li>
            <li>
              <a
                href="https://clusteringly-downloads.s3-us-west-1.amazonaws.com/Beginner-Introduction-Phrases.png"
                target="_blank"
              >
                Beginner Self-Introduction Phrases
              </a>{" "}
            </li>
            <li>
              <a
                href="https://clusteringly-downloads.s3-us-west-1.amazonaws.com/Places-to-go1.png"
                target="_blank"
              >
                Places to go
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Downloads;
