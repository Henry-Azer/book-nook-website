import React from "react";
import Circle from "./circle";

import logo_white from "../assets/images/logo-white.png";
import book_mark from "../assets/images/Asset-1.png";
import { Link } from "react-router-dom";

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
                    duration="30"
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

               <div className="h-100 w-75 mx-auto d-flex justify-content-center align-items-center">
                    <div className="d-flex align-items-center justify-content-center login-form w-50 border border-1 rounded-3 light-purple-border text-white flex-column p-3">
                         <Link to="/home">
                              <img
                                   src={logo_white}
                                   alt="logo"
                                   style={{ width: "150px" }}
                              />
                         </Link>
                         <h1 className="mt-4">Login</h1>
                         <div className="d-flex flex-column justify-content-around align-items-center w-100 h-50">
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
                              <button className="btn btn-hover text-white position-relative rounded-5 w-50 light-purple-background d-block mx-auto">
                                   Login
                                   <img
                                        src={book_mark}
                                        alt="book_mark"
                                        className="book-mark position-absolute"
                                        style={{
                                             top: "-30px",
                                             right: "20px",
                                             width: "60px",
                                        }}
                                   />
                              </button>
                              <Link to='/register' className="link-hover text-white">
                                   Create a new account ?
                              </Link>
                         </div>
                    </div>
               </div>
          </div>
     );
}
