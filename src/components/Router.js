import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../components/App";
import About from "../pages/About";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
    </Switch>
  </BrowserRouter>
);

export default Router;
