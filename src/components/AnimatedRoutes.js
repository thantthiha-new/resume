import React from 'react'
import {Route, Switch, useLocation} from 'react-router-dom';
import Home from "../webpages/Home";
import Profile from "../webpages/Profile";
import Information from "../webpages/Information";
import {AnimatePresence } from "framer-motion";
function AnimatedRoutes() {
    const location = useLocation();
    const observer = new IntersectionObserver((entries)=> {
      entries.forEach((entry)=> {
        console.log(entry)
        if (entry.isIntersecting){
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });
    
    const hiddenElements = document.querySelectorAll('hidden');
    hiddenElements.forEach((el)=>observer.observe(el));
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
      <Route path="/info">
          <Information />
      </Route>
    </Switch>
    </AnimatePresence>
  </div>
  )
}

export default AnimatedRoutes