import React from 'react'
import {Route, Switch, useLocation} from 'react-router-dom';
import Home from "../webpages/Home";
import Profile from "../webpages/Profile";
import Resume from "../webpages/Resume";
import Information from "../webpages/Information";
import {AnimatePresence } from "framer-motion";
function AnimatedRoutes() {
    const location = useLocation();
  return (
    <div className="content">
    <AnimatePresence exitBeforeEnter>
    <Switch location={location} key={location.pathname}>
      <Route exact path="/">
          <Home />
      </Route>
      <Route path="/profile">
          <Profile />
      </Route>
      <Route path="/resume">
          <Resume />
      </Route>
      <Route path="/info">
          <Information />
      </Route>
    </Switch>
    </AnimatePresence>
  </div>
  )
}

export default AnimatedRoutes