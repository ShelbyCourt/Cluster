import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Bienvenue, {this.props.username}</h1>
          <br/>
        <div className='addResource'>
            <p>Add a new resource here</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  return {
      username: reduxState.username,
      profile_pic: reduxState.profile_pic
  };
}

export default connect(mapStateToProps)(Dashboard)
  