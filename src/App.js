import React from "react";

// Router Imports
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Component Imports
import { Navbar } from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";

// Redux Imports

const App = props => {
  const { projects } = props;
  return (
    <BrowserRouter>
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

export default App;
