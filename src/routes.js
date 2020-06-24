
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import App from './App';
import Auth from './Components/Auth/Auth';
import Register from './Components/Register/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import ResourceInfo from './Components/ResourceInfo/ResourceInfo';
import Profile from './Components/Profile/Profile';
import About from './Components/About/About';

export default (
    <Switch>
        <Route exact path='/' component={Auth}/>
        <Route path='/register' component={Register}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/resourceinfo' component={ResourceInfo}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/about' component={About}/>
    </Switch>
)
