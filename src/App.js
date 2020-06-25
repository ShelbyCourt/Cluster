import React from 'react';
// import logo from './logo.svg';
import './App.css';
import routes from './routes';
import Header from './Components/Header/Header';


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
