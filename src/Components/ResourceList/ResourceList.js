import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";

import axios from "axios";

class ResourceList extends Component {
  constructor() {
    super();
    this.state = {
      userResources: {},
      search: "",
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  getUserResources() {
    axios
      .get(`/api/resources?search=${this.state.search}`)
      .then((resources) => {
        this.setState({
          userResources: resources.data,
        });
      });
  }

  render() {
    const resources = this.state.userResources;
    return (
      <div>
        <div className="rlcontainer">
          <h2>Resource List & Search</h2>
          <input
            type="text"
            placeholder="Search"
            onChange={this.changeHandler}
          />
          <div className="resourcelist">
            {/* <ul>{this.state.userResources.map((element, index) => (
              <p>{element.title, element.description, element.category}</p>
            )

            )}</ul> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps)(ResourceList);
