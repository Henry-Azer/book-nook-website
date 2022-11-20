import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../components/home";
import SignIn from "../components/auth/sign_in";
import SignUp from "../components/auth/sign_up";
import Users2 from "../components/user/users-hooks";

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
