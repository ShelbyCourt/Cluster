import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { updateResource } from "../../Redux/resourceReducer";
// import { getOneResource } from "../../Redux/resourceReducer";
// import { connect } from "react-redux";

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
    this.getOneResource.bind(this);
  }

  componentDidMount() {
    this.getOneResource();
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  getOneResource = function () {
    // e.preventDefault();
    const resourceId = this.props.match.params.id;
    // const {title, resource_url, description, notes, category, language, resourceId} = this.state;
    console.log("for axios, resourceId = " + resourceId);
    axios
      .get(`/api/oneresource?resourceId=${resourceId}`)
      .then((res) => {
        console.log("res= " + JSON.stringify(res));
        console.log("we think title = " + res.data.title);
        console.log("we think title corrected = " + res.data[0].title);
        const fetchedResource = res.data[0];

        this.setState({
          title: fetchedResource.title,
          resource_url: fetchedResource.resource_url,
          description: fetchedResource.description,
          notes: fetchedResource.notes,
          category: fetchedResource.category,
          language: fetchedResource.language,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  updateResource = (e) => {
    const resourceId = this.props.match.params.id;
    e.preventDefault();
    const {
      title,
      resource_url,
      description,
      notes,
      category,
      language,
    } = this.state;
    // axios pulls out of request:
    // title, resource_url, description, notes, category
    axios
      .put(`/api/resources?resourceId=${resourceId}`, {
        title,
        resource_url,
        description,
        notes,
        category,
        // language,
      })
      .then((res) => {
        console.log("update resource successful");
        alert("update successful");
        // this.props.updateResource(
        //   res.data.title,
        //   res.data.resource_url,
        //   res.data.description,
        //   res.data.notes,
        //   res.data.category,
        //   // res.data.language,
        //   res.data.resourceId
        // );
        this.setState({
          title: "",
          resource_url: "",
          description: "",
          category: "",
          notes: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteResource = (e) => {
    e.preventDefault();
    const resourceId = this.props.match.params.id;
    axios
      .delete(`/api/resources?resourceId=${resourceId}`)
      .then((res) => {
        alert("Resource DELETED");
      })
      .catch((err) => {
        console.log(err);
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
        <Link to="/resourcelist">
          <p>RETURN TO ALL RESOURCES</p>
        </Link>
        <form className="ResInfo">
          <h2>Type in the fields to update/edit your Resource Information</h2>
          <p>Title: {this.props.title} </p>
          <textarea
            rows="1"
            cols="55"
            type="text"
            placeholder="Title..."
            name="title"
            value={title}
            onChange={(e) => this.changeHandler(e)}
          />
          <br />
          <p>URL: </p>
          <textarea
            rows="3"
            cols="55"
            type="text"
            placeholder="Resource url..."
            name="resource_url"
            value={resource_url}
            onChange={(e) => this.changeHandler(e)}
          />
          <br />
          <p>Description: </p>
          <textarea
            rows="5"
            cols="55"
            type="text"
            placeholder="Description..."
            name="description"
            value={description}
            onChange={(e) => this.changeHandler(e)}
          />
          <br />
          <p>Notes: </p>
          <textarea
            rows="5"
            cols="55"
            type="text"
            placeholder="Anything you want to remember!"
            name="notes"
            value={notes}
            onChange={(e) => this.changeHandler(e)}
          />
          <br />
          <p>Category: </p>
          <textarea
            rows="1"
            cols="55"
            type="text"
            placeholder="Category..."
            name="category"
            value={category}
            onChange={(e) => this.changeHandler(e)}
          />
          <br />
          {/* <p>Language: </p>
          <input
            type="text"
            placeholder="Language..."
            name="language"
            value={language}
            onChange={(e) => this.changeHandler(e)}
          />
          <br /> */}
          <div className="bottomBtns">
            <button onClick={this.deleteResource}>DELETE</button>
            <div className="divider"/>
            <button onClick={this.updateResource}>SAVE/UPDATE</button>
          </div>
        </form>
      </div>
    );
  }
}

// const mapDispatchToProps = {
//   // updateResource: updateResource
//   // getOneResource: getOneResource,
// };

// export default connect(null, mapDispatchToProps)(ResourceInfo);

export default ResourceInfo;
