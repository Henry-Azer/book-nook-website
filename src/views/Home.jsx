import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Circle from "../components/animation/circle";

const Home = () => {
     useSelector((state) => console.log(state));

     return (
          <div>
               <Circle
                    size="7"
                    backgroundColor="beige"
                    duration="25"
                    top="150"
                    right="400"
               />
               <Link>
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
               <Link>
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
          </div>
     );
};

export default Home;
