import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../views/Home";
import SignIn from "../views/auth/SignIn";
import SignUp from "../views/auth/SignUp";
import Users2 from "../views/user/users-hooks";

export default function routes() {
     return (
          <Switch>
               <Route path="/users" component={Users2} />
               <Route path="/sign-in" component={SignIn} />
               <Route path="/sign-up" component={SignUp} />
               <Route exact path="/" component={Home} />
          </Switch>
     );
}
