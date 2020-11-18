import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StyleGuide from "./pages/StyleGuide";
import Sections from "./pages/Sections";
import Builder from "./pages/Builder";
import IframeView from "./pages/IframeView";
import Nav from "./Nav";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
const App = () => {

  return (
    <Router>
      <div className="flex">
        <Nav />
        <div className="w-full ">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/styleguide" component={StyleGuide} />
            <Route exact path="/builder" component={Builder} />
            <Route exact path="/sections" component={Sections} />
            <Route exact path="/sections/:id" component={Sections} />
            {/* <Route exact path="/full" component={FullPageBuilder} /> */}
            <Route
              path="/full"
              render={() => (
                <Builder fullPage={true} />
              )}/>
          
            <Route exact path="/edit" component={Edit} />
            <Route exact path="/iframe" component={IframeView} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
