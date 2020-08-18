import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../components/App";
import Loader from "../pages/Loader";
import Documentation from "../pages/Documentation";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/loader/:id" component={Loader} />
      <Route path="/docs" component={Documentation} />
    </Switch>
  </BrowserRouter>
);

export default Router;
