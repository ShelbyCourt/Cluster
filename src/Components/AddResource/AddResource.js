import React, { Component } from "react";
import axios from "axios";
import { addResource } from "../../Redux/resourceReducer";
import { connect } from "react-redux";
// import Dropdown from 'react-dropdown';


// import "./ResourceInfo.css";
import "./AddResourceSass.css";

class AddResource extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      resource_url: "",
      category: "",
      language: "",
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addResource = (e) => {
    e.preventDefault();
    const { title, resource_url, category, language } = this.state;
    axios
      .post("/api/resources", {
        title,
        resource_url,
        category,
        language,
      })
      .then((res) => {
        this.props.addResource(
          res.data.title,
          res.data.resource_url,
          res.data.category,
          res.data.language,
          res.data.user_id
        );
        this.setState({title: '', resource_url: '', category: '', language: ''});
      });
  };

  render() {
    const { title, resource_url, category, language } = this.state;
    // const catOptions = [
    //   'Vocabulary',
    //   'Verbs',
    //   'Adjectives',
    //   'Adverbs',
    //   'Podcasts and Videos',
    //   'Miscellaneous'
    // ];
    // const defaultOption = catOptions[0];

    return (
      <div className="containerR">
        <div className="Resource">
          <h1>Add Resource</h1>
          <div className="AddResourceInput">
            <div className="Field">
            <p>Title: </p>
            <input
              type="text"
              placeholder="Title..."
              name="title"
              value={title}
              onChange={(e) => this.changeHandler(e)}
            />
            </div>
            <br />
            <div className="Field">
            <p>URL: </p>
            <input
              type="text"
              placeholder="Resource url..."
              name="resource_url"
              value={resource_url}
              onChange={(e) => this.changeHandler(e)}
            />
            </div>
            <br />
            <div className="Field">
            <p>Category: </p>
            <p className="choices">Choose from: Vocabulary, Verbs, Adjectives, Adverbs, Pronunciation, Podcasts and Videos, & Miscellaneous</p>
            {/* <Dropdown className="dropDown"
            options={catOptions} 
            onChange={this._onSelect} 
            value={defaultOption} 
            placeholder="Select an option" /> */}

            <input
              type="text"
              placeholder="Category..."
              name="category"
              value={category}
              onChange={(e) => this.changeHandler(e)}
            />
            </div>
            <br />
            <div className="Field">
            <p>Language: </p>
            <input
              type="text"
              placeholder="Language..."
              name="language"
              value={language}
              onChange={(e) => this.changeHandler(e)}
            />
            </div>
          </div>
          <br />
          <div className="bottomBtns">
            {/* <button onClick={this.deleteResource}>DELETE</button> */}
            <button onClick={this.addResource}>SAVE</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = { addResource: addResource };

export default connect(null, mapDispatchToProps)(AddResource);
