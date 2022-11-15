import React from "react";
import { Link } from "react-router-dom";

import FormCard from "../forms/form-card";
import Circle from "../animation/circle";
import BookmarkButton from "../buttons/bookmark-button";

const Login = () => {
     return (
          <div className="login-route vh-100 w-100 position-relative overflow-hidden">
               <Circle
                    size="200"
                    backgroundColor="beige"
                    duration="25"
                    top="15"
                    left="-150"
               />
               <Circle
                    size="300"
                    backgroundColor="light-purple"
                    duration="40"
                    bottom="-100"
                    left="-120"
               />
               <Circle
                    size="300"
                    backgroundColor="light-purple"
                    duration="20"
                    top="200"
                    right="-200"
               />
               <FormCard title="Login">
                    <input
                         type="text"
                         className="w-75 rounded-5 form-control light-purple-border text-white"
                         placeholder="Email"
                    />
                    <input
                         type="password"
                         className="w-75 rounded-5 form-control light-purple-border text-white"
                         placeholder="Password"
                    />
                    <BookmarkButton>Login</BookmarkButton>
                    <Link to="/register" className="link-hover text-white">
                         Create a new account ?
                    </Link>
               </FormCard>
          </div>
     );
};
export default Login;
