import React, { Component } from "react";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import axios from "axios";

function ResourceList(props) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // constructor() {
  //   super();
  //   this.state = {
  //     posts: [userResources
  //       {
  //         title: "",
  //         resource_url: "",
  //         description: "username",
  //       },
  //     ],
  //   };
  // }

  const getUserResources = (e) => {
    const { userId } = this.state;
    console.log(userId);
    axios
      .get(`/api/resources?userId=${userId}`)
      .then((res) => {
        // console.log('Axios returned from login res.data: ' + JSON.stringify(res.data));
        props.getUserResources(res.data);
        props.history.push("/resourcelist");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // React.useEffect(() => {
  //   const results = userResources.filter((userResources) =>
  //     userResources.toLowerCase().includes(searchTerm)
  //   );
  //   setSearchResults(results);
  // }, [searchTerm]);

  return (
    <div>
      <div className="rlcontainer">
        <h2>Resource List & Search</h2>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
        <div className="resourcelist">
          <ul>
            {searchResults.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (reduxState) => {
  return {
    username: reduxState.username,
    title: reduxState.title,
  };
};

export default connect(mapStateToProps)(ResourceList);
