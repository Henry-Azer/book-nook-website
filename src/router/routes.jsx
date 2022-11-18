import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../components/home";
import Login from "../components/base/auth/login";
import Users2 from "../components/user/users-hooks";

export default function routes() {
     return (
          <Switch>
               <Route path="/users" component={Users2} />
               <Route path="/login" component={Login} />
               <Route exact path="/" component={Home} />
          </Switch>
     );
}
