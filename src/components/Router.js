import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../components/App";
import About from "../pages/About";
import Loader from "../pages/Loader";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/loader/:id" component={Loader} />
      <Route path="/about" component={About} />
    </Switch>
  </BrowserRouter>
);

export default Router;
