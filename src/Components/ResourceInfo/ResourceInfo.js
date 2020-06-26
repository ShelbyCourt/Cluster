import React, { Component } from "react";
import axios from "axios";
import { updateResource } from "../../Redux/resourceReducer";
import { connect } from "react-redux";

class ResourceInfo extends Component {
  constructor () {
    super ();
    this.state = {
      title: '',
      resourceUrl: '',
      description: '',
      notes: '',
      category: ''
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addResource = (e) => {
    e.preventDefault();
    const { title, resourceUrl, description, notes, category } = this.state;
    axios.post('/api/resources', {title, resourceUrl, description, notes, category})
    .then((res => {
      this.props.updateResource(
        res.data.title,
        res.data.resourceUrl,
        res.data.description,
        res.data.notes,
        res.data.category,
        res.data.resourceId
      )
    }))
  }

  render() {
    const { title, resourceUrl, description, notes, category } = this.state;
    return (
      <div>
        <h1>Resource Info - You Can Input & Edit From Here</h1>
        <div className="RegInfo">
          <p>Title: </p>
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
            name="resourceUrl"
            value={resourceUrl}
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
          <button onClick={this.deleteResource}>DELETE</button>
          <button onClick={this.addResource}>SAVE</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = { updateResource: updateResource }

export default connect(null, mapDispatchToProps)(ResourceInfo)
