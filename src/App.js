import React from "react";
import {  Route, Switch } from "react-router-dom";
import About from "./About";
import Login from "./Login";
import Messages from "./Messages";
import NavBar from "./NavBar";
import Home from "./Home";

function App() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/messages">
            <Messages />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }

  export default App