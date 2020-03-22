import React, { useState } from "react";
import "./App.css";
import BlogList from "./Components/BlogList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./Components/Registration/SignIn";
import SignUp from "./Components/Registration/SignUp";
import AppPaths from "./AppPaths";
import AppConstants from "./AppConstants";

function App() {

  return (
    <Router>
      <div>
        <Switch>
          <Route path={AppPaths.HOME} component={BlogList} exact={true} />
          <Route path={AppPaths.SIGN_IN} component={SignIn} exact={true} />
          <Route path={AppPaths.SIGN_UP} component={SignUp} exact={true} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;