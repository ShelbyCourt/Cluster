import React from 'react';
// import logo from './logo.svg';
import './App.css';
import routes from './routes';
import Header from './Components/Header/Header';
import Auth from './Components/Auth/Auth';


function App() {
  return (
    <div className="App">
      <Header/>
        <div className="heartback">
        </div>
        {routes}        
    </div>
  )
}

export default App;
