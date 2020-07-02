import React, { Component } from "react";
import axios from "axios";
import { updateResource } from "../../Redux/resourceReducer";
import { getOneResource } from "../../Redux/resourceReducer";
import { connect } from "react-redux";

import "./ResourceInfo.css";

class ResourceInfo extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      resource_url: "",
      description: "",
      notes: "",
      category: "",
      language: "",
      resourceId: "",
    };
  }

  componentDidMount() {
    this.getOneResource();
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  getOneResource = (e) => {
    // e.preventDefault();
    const {
      title,
      resource_url,
      description,
      notes,
      category,
      language,
      resourceId,
    } = this.state;
    axios
      .get("/api/oneresource", {
        title,
        resource_url,
        description,
        notes,
        category,
        language,
        resourceId,
      })
      .then((res) => {
        this.props.getOneResource(
          res.data.title,
          res.data.resource_url,
          res.data.description,
          res.data.notes,
          res.data.category,
          res.data.language,
          res.data.resourceId
        );
      });
  };

  updateResource = (e) => {
    e.preventDefault();
    const {
      title,
      resource_url,
      description,
      notes,
      category,
      language,
    } = this.state;
    axios
      .put("/api/resources", {
        title,
        resource_url,
        description,
        notes,
        category,
        language,
      })
      .then((res) => {
        this.props.updateResource(
          res.data.title,
          res.data.resource_url,
          res.data.description,
          res.data.notes,
          res.data.category,
          res.data.language,
          res.data.resourceId
        );
      });
  };

  render() {
    const {
      title,
      resource_url,
      description,
      notes,
      category,
      language,
    } = this.state;
    return (
      <div className="container">
        <h1>Resource Information</h1>
        <form className="ResInfo">
          <p>Title: </p>
          {/* <p> current title of resource</p> */}
          <input
            type="text"
            placeholder="Title..."
            name="title"
            value={title}
            onChange={(e) => this.changeHandler(e)}
          />
          <br />
          <p>URL: </p>
          <input
            type="text"
            placeholder="Resource url..."
            name="resource_url"
            value={resource_url}
            onChange={(e) => this.changeHandler(e)}
          />
          <br />
          <p>Description: </p>
          <input
            type="text"
            placeholder="Description..."
            name="description"
            value={description}
            onChange={(e) => this.changeHandler(e)}
          />
          <br />
          <p>Notes: </p>
          <input
            type="text"
            placeholder="Anything you want to remember!"
            name="notes"
            value={notes}
            onChange={(e) => this.changeHandler(e)}
          />
          <br />
          <p>Category: </p>
          <input
            type="text"
            placeholder="Category..."
            name="category"
            value={category}
            onChange={(e) => this.changeHandler(e)}
          />
          <br />
          <p>Language: </p>
          <input
            type="text"
            placeholder="Language..."
            name="language"
            value={language}
            onChange={(e) => this.changeHandler(e)}
          />
          <br />
          <div className="bottomBtns">
            <button onClick={this.deleteResource}>DELETE</button>
            <button onClick={this.addResource}>SAVE</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  updateResource: updateResource,
  getOneResource: getOneResource,
};

export default connect(null, mapDispatchToProps)(ResourceInfo);
