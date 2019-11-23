import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/home.component';
import Login from './components/login.component';
import ShowAll from './components/showall.component';
import CreateUser from './components/createuser.component';
import {NavBar} from './components/navbar.component';





function App() {

  return (
    <div>
      <NavBar/>
      <BrowserRouter>
      <Route exact path={"/"} component={Home}/>
      <Route exact path={"/login"} component={Login}/>
      <Route exact path={"/showall"} component={ShowAll}/>
      <Route exact path={"/createuser"} component={CreateUser}/>



      </BrowserRouter>
    </div> 
  );

}

export default App;
