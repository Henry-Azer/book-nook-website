import React from "react";
import { Link } from "react-router-dom";

import logo_white from "../../../assets/images/logo-white.png";


const FormCard = (props) => {
     return (
          <div className="form-card h-100 w-75 mx-auto d-flex justify-content-center align-items-center">
               <div className="d-flex align-items-center justify-content-center form-card w-50 border border-1 rounded-3 light-purple-border text-white flex-column p-3 position-relative">
                    {/* on refresh the logo show up late after all form */}
                    {/* home route will be "/" not "/home" */}
                    <Link to="/home">
                         <img
                              src={logo_white}
                              alt="logo"
                              className="logo"
                         />
                    </Link>
                    <h1 className="mt-4">{props.title}</h1>
                    <div className="d-flex flex-column justify-content-around align-items-center w-100 h-75">
                         {/* Great one <3 I love it */}
                         {props.children}
                    </div>
               </div>
          </div>
     );
};
export default FormCard;
