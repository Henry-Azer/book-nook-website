import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../views/Home";
import SignIn from "../views/auth/SignIn";
import SignUp from "../views/auth/SignUp";
import BooksList from "../views/BooksList";
import BookDetails from "../views/BookProfile";
import AuthorProfile from "../views/AuthorProfile";
import BooksRecommendations from "../views/BooksRecommendations";

export default function routes() {
     return (
          <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/home" redirect>
                    <Redirect to="/" />
               </Route>
               <Route exact path="/books-list" component={BooksList} />
               <Route
                    exact
                    path="/books-recommendations"
                    component={BooksRecommendations}
               />
               <Route exact path="/book-profile" component={BookDetails} />
               <Route exact path="/author-profile" component={AuthorProfile} />
               <Route path="/sign-up" component={SignUp} />
               <Route path="/sign-in" component={SignIn} />
          </Switch>
     );
}
