import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../views/Home";
import SignIn from "../views/auth/SignIn";
import SignUp from "../views/auth/SignUp";
import BooksList from "../views/BooksList";

export default function routes() {
     return (
          <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/home" redirect ><Redirect to='/' /></Route>
               <Route exact path="/books-list" component={BooksList} />
               <Route path="/sign-up" component={SignUp} />
               <Route path="/sign-in" component={SignIn} /> 
          </Switch>
     );
}
