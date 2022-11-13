import React from "react";
import Circle from "./circle";

import logo_white from "../assets/images/logo-white.png"

export default function login() {
     return (
          <div className="vh-100 w-100 position-relative overflow-hidden">
               <Circle
                    size="200"
                    backgroundColor="beige"
                    duration="25"
                    top="10"
                    left="-150"
               />
               <Circle
                    size="300"
                    backgroundColor="light-purple"
                    duration="40"
                    top="200"
                    right="-200"
               />

               <div className="h-100 w-100 d-flex justify-content-center align-items-center">
                    <div className="d-flex align-items-center login-form w-50 border border-1 rounded-3 light-purple-border text-white flex-column p-3">
                         <img src={logo_white} alt="logo" style={{width:'150px'}}/>
                         <h1 className="mt-4">Sign in</h1>
                         <p className="mt-4 fs-4 text-center">
                              What are you waiting for ...? a lot of books is
                              waiting for you don't miss the chance sign in now
                         </p>
                         <div className="d-flex flex-column justify-content-around align-items-center w-100 h-100">
                              <input
                                   type="text"
                                   className="w-75 rounded-5 form-control light-purple-border text-white"
                                   placeholder="Email"
                              />
                              <input
                                   type="text"
                                   className="w-75 rounded-5 form-control light-purple-border text-white"
                                   placeholder="Password"
                              />
                              <button className="btn text-white rounded-5 w-75 light-purple-background">
                                   Sign in
                              </button>
                              <p className="text-decoration-underline">
                                   Create a new account ?
                              </p>
                         </div>
                    </div>
               </div>
          </div>
     );
}
