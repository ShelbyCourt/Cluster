import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import "./Dashboard.css";
import "./DashboardSass.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="Dash">
        <div className="TopDash">
          <h1 className="Welcome">Bienvenue, {this.props.username}!</h1>
          <div className="addResource">
            <Link to="/ResourceInfo"><button>Add New Resource</button></Link> 
          </div>
        </div>
        <br />
        <div className="ResourceList">
          <div className="Vocabulary">
            <h2>Vocabulary</h2>
          </div>
          <div className="Verbs">
            <h2>Verbs</h2>
          </div>
          <div className="Adjectives">
            <h2>Adjectives</h2>
          </div>
          <div className="Adverbs">
            <h2>Adverbs</h2>
          </div>
          <div className="Podcasts and Videos">
            <h2>Podcasts and Videos</h2>
          </div>
          <div className="Misc.">
            <h2>Miscellaneous</h2>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    username: reduxState.username,
    profile_pic: reduxState.profile_pic,
  };
};

export default connect(mapStateToProps)(Dashboard);
