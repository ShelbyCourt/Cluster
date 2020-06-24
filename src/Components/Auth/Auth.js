import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Auth.css';

class Auth extends Component {
  render() {
    return (
      <div className='Auth'>
        <div className='Login'>
          <h1>Login</h1>
          <br/>
            <Link to="/register">
              <h1>Register</h1>
            </Link>
        </div>
      </div>
    )
  }
}

  export default Auth;