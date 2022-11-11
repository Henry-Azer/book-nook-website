import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/home";
import Users1 from "./components/users-class";
import Users2 from "./components/users-hooks";

export default function routes() {
    return (
        <Switch>  
            <Route path="/users1" component={Users1} />
            <Route path="/users2" component={Users2} />
            <Route exact path="/" component={Home} />
        </Switch>
    );
}
