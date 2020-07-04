
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import App from './App';
import Auth from './Components/Auth/Auth';
import Register from './Components/Register/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import ResourceInfo from './Components/ResourceInfo/ResourceInfo';
import Profile from './Components/Profile/Profile';
import About from './Components/About/About';
import FAQ from './Components/FAQ/FAQ';
import Contact from './Components/Contact/Contact';
import AddResource from './Components/AddResource/AddResource';
import ResourceList from './Components/ResourceList/ResourceList';

export default (
    <Switch>
        <Route exact path='/' component={Auth}/>
        <Route path='/register' component={Register}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route exact path='/resourceinfo/:id' component={ResourceInfo}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/about' component={About}/>
        <Route path='/FAQ' component={FAQ}/>
        <Route path='/Contact' component={Contact}/>
        <Route path='/AddResource' component={AddResource}/>
        <Route path='/resourcelist' component={ResourceList}/>
    </Switch>
)
