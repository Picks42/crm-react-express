import React from "react";
/* Rounter */
import { Switch, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login-page/Login";

import Test from './pages/test/test';

class App extends React.Component {
  render() {
    return (
      <div className="main-wrap">
        <Switch>
          {/*
            Not secure
          */}
          <Route exact path="/" component={Login} />
          {/* 
            Secure data 
          */}
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/test" component={Test} />
        </Switch>
      </div>
    );
  }
}
export default App;
