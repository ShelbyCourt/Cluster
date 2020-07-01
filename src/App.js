import React from 'react';
// import logo from './logo.svg';
import './App.css';
import routes from './routes';
import { connect } from 'react-redux';
import Header from './Components/Header/Header';
// import Auth from './Components/Auth/Auth';


function App(props) {
    console.log('here are the ', props);
    return (
      <div className="App">
        <Header/>
        {routes}
      </div>
    );
    // <Header/>
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(App);
