import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
     useSelector((state) => console.log(state));  

     return <div></div>;
};

export default Home;
