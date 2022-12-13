import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Cookies from "universal-cookie";
import Logo from "../../assets/images/logo-white.png";
import { BiUserCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
     clearLoginDetails,
     getCurrentUser,
     signOut,
} from "../../store/actions/auth/auth-actions";

const Header = (props) => {
     const cookies = new Cookies();

     const isUserAuthenticatedCookie = () => {
          return cookies.get("bn_aut");
     };

     const dispatch = useDispatch();
     const history = useHistory();

     const [showsDispatched, setShowsDispatched] = useState(false);
     const [showSignOut, setShowSignOut] = useState(false);

     useEffect(() => {
          if (isUserAuthenticatedCookie() && !showsDispatched) {
               dispatch(getCurrentUser());
               setShowsDispatched(true);
          }

          return () => {
               dispatch(clearLoginDetails());
          };
     }, [dispatch, showsDispatched]);

     const user = useSelector((state) => state.auth.currentUser);

     console.log(user);

     //      console.log(state);

     //      const userFirstName = user.firstName;

     //      const user = (state) => {
     //           if (state) return state.auth.currentUser.firstName;
     //      };

     return (
          <div
               className={`w-100 header d-flex justify-content-center align-items-center header position-sticky top-0 ${
                    props.background && "dark-purple-background"
               }`}
          >
               <div className="row h-100 w-75 d-flex justify-content-between align-items-center">
                    <div className="col-7 logo h-100">
                         <Link to="/">
                              <img src={Logo} alt="Logo" className="h-100" />
                         </Link>
                    </div>
                    <div className="col-5 items d-flex justify-content-between align-items-center h-100">
                         <Link
                              to="/"
                              className=" text-decoration-none text-white"
                         >
                              Home
                         </Link>
                         <Link
                              to="/books-list"
                              className=" text-decoration-none text-white"
                         >
                              Search
                         </Link>
                         {!isUserAuthenticatedCookie() ? (
                              <Link
                                   to="/sign-in"
                                   className=" light-purple-background rounded-5 h-50 w-25 text-decoration-none text-white d-flex justify-content-center align-items-center"
                              >
                                   Sign in
                              </Link>
                         ) : (
                              user && (
                                   <div
                                        className=" d-flex justify-content-center align-items-center h-50 w-25 text-white cursor-pointer position-relative"
                                        onClick={() =>
                                             setShowSignOut(!showSignOut)
                                        }
                                   >
                                        <BiUserCircle className="fs-4 me-2" />
                                        Hi, {user.firstName}
                                        <div className="position-absolute sign-out-card">
                                             <div
                                                  onClick={() => {
                                                       signOut();
                                                       history.push("/");
                                                  }}
                                                  className={`light-purple-background w-75 h-100 text-center d-flex justify-content-center align-items-center rounded-bottom ${
                                                       !showSignOut && "d-none"
                                                  }`}
                                             >
                                                  Sign Out
                                             </div>
                                        </div>
                                   </div>
                              )
                         )}
                    </div>
               </div>
          </div>
     );
};

export default Header;
