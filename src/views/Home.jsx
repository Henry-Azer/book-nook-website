import React from "react";
import { useSelector } from "react-redux";

import Circle from "../components/animation/circle";

const Home = () => {
     useSelector((state) => console.log(state));

     return (
          <div>
               <Circle
                    size="20"
                    backgroundColor="light-purple"
                    duration="30"
                    top="150"
                    right="200"
               >
                    Book Recommendation
               </Circle>
          </div>
     );
};

export default Home;
