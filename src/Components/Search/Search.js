import React, { Component } from "react";

  state = {
    inputValue: ''
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  
class Search extends Component {
  render() {
    return (
      <div>
        <h1>Search Results will he displayed here</h1>;
        <>
          <label htmlFor="search">Search by keyword</label>
          <input
            type="text"
            value={this.props.inputValue}
            placeholder="Search by Title"
            name="Search"
            // value={username}
            onChange={props.petFilterOnChange}
          />

          {/* // e => this.changeHandler(e)}/> */}
        </>
      </div>
    );
  }
}

export default Search;
