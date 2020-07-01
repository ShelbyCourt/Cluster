import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import axios from "axios";

class ResourceList extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          title: "",
          resource_url: "",
          description: "username",
        },
      ],
    };
  }

  getUserResources = (e) => {
    const { userId } = this.state;
    axios
      .get(`/api/resources`, {userId})
      .then((res) => {
        // console.log('Axios returned from login res.data: ' + JSON.stringify(res.data));
        this.props.getUserResources(res.data.title);
        this.props.history.push("/resourcelist");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //    const postMap = props.posts.map((posts) => (
  //        console.log('posts' + posts),
  //     <Post
  //         postTitle={props.postTitle}
  //         authorUsername={props.username}
  //         profilePicture={props.profile_pic} />
  //    ))

  render() {
    return (
      <div>
        <div className="PostContainer">
          <h2>Posts</h2>
          <div className="Posts">{this.getUserResources}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    username: reduxState.username,
  };
};

export default connect(mapStateToProps)(ResourceList);
