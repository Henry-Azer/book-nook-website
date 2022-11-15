import React from "react";
import { Link } from "react-router-dom";

import logo_white from "../../../assets/images/logo-white.png";


const FormCard = (props) => {
     return (
          <div className="form-card h-100 w-75 mx-auto d-flex justify-content-center align-items-center">
               <div className="d-flex align-items-center justify-content-center login-form w-50 border border-1 rounded-3 light-purple-border text-white flex-column p-3">
                    <Link to="/home">
                         <img
                              src={logo_white}
                              alt="logo"
                              style={{ width: "150px" }}
                         />
                    </Link>
                    <h1 className="mt-4">{props.title}</h1>
                    <div className="d-flex flex-column justify-content-around align-items-center w-100 h-50">
                         {props.children}
                    </div>
               </div>
          </div>
     );
};
export default FormCard;
