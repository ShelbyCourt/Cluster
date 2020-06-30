import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import "./Dashboard.css";
import "./DashboardSass.css";
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      userresources: true,
      resources: [
        {
          title: "",
          description: "",
          url: "",
          category: "",
          user_id: "",
        },
      ],
    };
  }

  getResourceCategory = (e) => {
    const { title, description, url, category } = this.state;
    axios
      .get("/api/resourcesbycat", { title, description, url, category })
      .then((res) => {
        this.props.getResourceCategory(
          res.data.title,
          res.data.description,
          res.data.url,
          res.data.user_id
        );
        this.props.history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { title, description, url, category } = this.state;
    return (
      <div className="Dash">
        <div className="TopDash">
          <div className="Welcome">
            <h1>Bienvenue, {this.props.username}!</h1>
            <Link to="/profile">
              <p>VIEW PROFILE</p>
            </Link>
            <input
              type="text"
              placeholder="Search..."
              name="search"
              // value={search}
              onChange={(e) => this.changeHandler(e)}/>
          </div>
          <div className="addResource">
            <Link to="/AddResource">
              <button>Add New Resource</button>
            </Link>
          </div>
        </div>
        <br />
        <div className="ResourceList">
          <div className="Vocabulary">
            <h2>Vocabulary</h2>
            <div className="VocRes">
              {this.props.category}
              {this.getResourceCategory([title, description, url, 'Vocabulary'])}
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
