import React, { Component } from 'react';

import './AboutSass.css';

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="Part1">
        <h1>What do we do?</h1>        
        <p>Clusteringly seeks to help you stay organized as you pursue the joy of learning languages by storing your collections of valuable resources in...</p>
        <h1 className="Clusters">Clusters</h1>
        </div>        
        <div className="Part2">
          <h1>Why do we do it?</h1>
          <br/>
          <p>We believe that for collector's of knowledge nothing should hamper your learning enjoyment!</p>
        </div>
      </div>
    )
  }
}

  export default About;