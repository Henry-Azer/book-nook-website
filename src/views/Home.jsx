import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Cookies from "universal-cookie";

import Circle from "../components/animation/circle";
import Header from "../components/header/header";

const Home = () => {
     const cookies = new Cookies();
     const history = useHistory();

     useEffect(() => {
          document.title = "Sign In | BookNook Library";

          if (isUserAuthenticatedCookie()) {
               history.push("/books-recommendations");
          }
     });

     const isUserAuthenticatedCookie = () => {
          return cookies.get("bn_aut");
     };

     const [timeNow, setTimeNow] = useState("");

     useEffect(() => {
          document.title = "Home | BookNook Library";

          setInterval(() => {
               setTimeNow(
                    `${
                         new Date().getHours() > 12
                              ? new Date().getHours() % 12
                              : new Date().getHours()
                    } : ${new Date().getMinutes()} : ${new Date().getSeconds()} ${
                         new Date().getHours() > 12 ? "PM" : "AM"
                    }`
               );
          }, 1000);

          // console.log(timeNow);
     });

     return (
          <div className="home-route position-relative w-100 vh-100 overflow-hidden">
               <Header />
               <Circle
                    size="7"
                    backgroundColor="beige"
                    duration="25"
                    top="150"
                    right="400"
               />
               <Link to="/books-recommendations">
                    <Circle
                         size="20"
                         backgroundColor="light-purple"
                         duration="30"
                         top="300"
                         right="400"
                         hover
                    >
                         Book Recommendation
                    </Circle>
               </Link>
               <Circle
                    size="10"
                    backgroundColor="beige"
                    duration="15"
                    bottom="90"
                    left="400"
               />

               <Circle
                    size="8"
                    backgroundColor="beige"
                    duration="23"
                    bottom="60"
                    right="600"
               />

               <Link to="/sign-up">
                    <Circle
                         size="12"
                         backgroundColor="light-purple"
                         duration="31"
                         bottom="300"
                         left="50"
                         hover
                    >
                         Sign up
                    </Circle>
               </Link>

               <Circle
                    size="6"
                    backgroundColor="beige"
                    duration="27"
                    bottom="300"
                    right="100"
               />

               <Link to="/sign-in">
                    <Circle
                         size="15"
                         backgroundColor="light-purple"
                         duration="20"
                         bottom="150"
                         left="400"
                         hover
                    >
                         Sign in
                    </Circle>
               </Link>
               <Link to="/">
                    <Circle
                         size="10"
                         backgroundColor="light-purple"
                         duration="21"
                         bottom="100"
                         right="150"
                         hover
                    >
                         Why us ?
                    </Circle>
               </Link>

               <div className="time-now position-absolute bottom-50 end-0">
                    <p className="text-white fs-4 m-0">{timeNow}</p>
               </div>
          </div>
     );
};

export default Home;
