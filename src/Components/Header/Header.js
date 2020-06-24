import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Header.css';


class Header extends Component {
  render() {
    return (

      <div className='header'>
          <div className='topnavleft'>
            <Link to="/">
              <h1 className="Home">Home</h1>
            </Link> 
            <Link to="/about">
              <h1 className="About">About</h1>
            </Link>
          </div>
          <div className='Name'>
            <h1>clusteringly</h1>
          </div>  
      </div>
    )
  }
}

  export default Header;