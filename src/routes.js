import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/courses/search/:q" component={SearchResults}/>
      </Switch>
    </BrowserRouter>
  )
}