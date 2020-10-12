import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Landing, OrphanagesMap } from "./pages";

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/happy" component={OrphanagesMap}/>
      </Switch>
    </BrowserRouter>
  );
}
