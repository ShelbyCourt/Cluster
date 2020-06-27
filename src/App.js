import React from 'react';
// import logo from './logo.svg';
import './App.css';
import routes from './routes';
import Header from './Components/Header/Header';
import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      {/* <Header user={user} updateUser={this.updateUser} />
      <Container user={user} /> */}
      <Header/>
        <div className="heartback">
        </div>
        {routes}        
    </div>
  )
}

export default App;
