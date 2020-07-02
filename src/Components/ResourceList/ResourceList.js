import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import './ResourceListSass.css';

import axios from "axios";

function ResourceList(props) {
  // constructor() {
  //   super();
  //   this.state = {
  //     userResources: [],
  //     search: "",
  //   };
  // }
  const [userResources, setUserResources] = useState([]);
  const [search, setSearch] = useState("");

  const changeHandler = (e) => {
    // this.setState({
    //   [e.target.name]: e.target.value,
    // });
    // guess
    // console.log('changeHandler event = ' + JSON.stringify(e.target.value));
    setSearch(e.target.value);
  };

  const getUserResources = (e) => {
    console.log('hit gUR search = ' + search)
    axios
      // .get(`/api/resources?search=${this.state.search}`)
      .get(`/api/resources?search=${search}`)
      .then((resources) => {
        // this.setState({
        //   userResources: resources.data,
        // });
        console.log('what is resources.data = ' + resources.data)
        setUserResources(resources.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // similar to componentDidMount
  // run this when component first loads
  useEffect(() => {
    console.log('ResourceList component loaded')
    getUserResources();
    //console.log('Resources just loaded: ' + userResources.length)
  }, []);

  // run this when search button clicked
  useEffect(() => {
    //console.log('search was updated to: ' + search)
    //getUserResources();
  }, [search]);

    //const resources = this.state.userResources;
    return (
      <div>
        <div className="rlcontainer">
          <h1>Resource List & Search</h1>
          <input
            type="text"
            placeholder="Search"
            onChange={changeHandler}
          />
          <button onClick={getUserResources}>Search</button>
          <br/>
          <div className="resourcelist">
            <>
            {userResources.map((element, index) => {
                if (index < 15) {
                  return (
                    <div className="listitems">
                      <h3>{element.title}</h3>
                      <p>{element.category}</p>
                      <a href={element.resource_url} target="_blank">Allez-y!</a> 
                    </div>
                  );
                }
              })}
            </>
          </div>
        </div>
      </div>
    );

}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps)(ResourceList);
