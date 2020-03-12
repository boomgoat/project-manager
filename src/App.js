import React, { useState, useEffect } from "react";

// Router Imports
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Component Imports
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";
import { connect } from "react-redux";

// Custom Function Imports

// Test Imports
import IdleOverlay from "./components/layout/IdleOverlay";

const App = props => {
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let initialTimer;
    let finalTimer;

    const setup = () => {
      document.addEventListener("mousemove", resetTimer, false);
      document.addEventListener("mousedown", resetTimer, false);
      document.addEventListener("keypress", resetTimer, false);
      document.addEventListener("DOMMouseScroll", resetTimer, false);
      document.addEventListener("mousewheel", resetTimer, false);
      document.addEventListener("touchmove", resetTimer, false);
      document.addEventListener("MSPointerMove", resetTimer, false);

      startTimer();
    };

    const startTimer = () => {
      // wait 2 seconds before calling goInactive
      initialTimer = window.setTimeout(goInactive, 5000);
    };

    const resetTimer = e => {
      window.clearTimeout(initialTimer);
      window.clearTimeout(finalTimer);

      goActive();
    };

    const goInactive = () => {
      // do something
      finalTimer = window.setTimeout(goInactiveFinal, 2000);
      console.log("First Timeout: Second Timer Fired", finalTimer);
    };

    const goInactiveFinal = () => {
      console.log("Second Timeout");
      renderOverlay();
    };

    const goActive = () => {
      // do something
      console.log("Timer Reset");
      startTimer();
    };

    setup();
  });

  const renderOverlay = () => {
    setIsIdle(true);
    console.log("isIdle: ", isIdle);
  };

  const { auth } = props;

  if (!auth.isLoaded) return <span></span>;
  return (
    <BrowserRouter>
      {isIdle ? <IdleOverlay /> : null}
      <div className="App grey darken-4 white-text">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/createproject" component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(App);
