import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useDispatch } from "react-redux";
import { authenticateUser } from "../../store/actions/auth/auth-actions";

import FormCard from "../../components/forms/form-card";
import Circle from "../../components/animation/circle";
import BookmarkButton from "../../components/buttons/bookmark-button";
// import axios from "axios";

// file name of Route Component must be like it's class name
// example: Home - SignIn - SignUp
// to know it represents a route for me
// the other used components its used for the route or major components
// it's just a components not a major route for me
// example: bookmark-button - translate-button
const SignIn = () => {
     const { t, i18n } = useTranslation();
     const dispatch = useDispatch();

     const user = {
          email: "henryazer@outlook.com",
          password: "12345678",
     };

     return (
          <div className="sign-in-route vh-100 w-100 position-relative overflow-hidden">
               <Circle
                    size="10"
                    backgroundColor="beige"
                    duration="25"
                    top="15"
                    left="-150"
               />
               <Circle
                    size="15"
                    backgroundColor="light-purple"
                    duration="40"
                    bottom="-100"
                    left="-120"
               />
               <Circle
                    size="12"
                    backgroundColor="light-purple"
                    duration="20"
                    top="200"
                    right="-200"
               />
               <FormCard title={t("signIn:signIn")}>
                    <input
                         type="text"
                         className={`w-75 rounded-5 form-control light-purple-border text-white ${
                              i18n.resolvedLanguage === "ar" && "text-end"
                         }`}
                         placeholder={t("signIn:email")}
                    />
                    <input
                         type="password"
                         className={`w-75 rounded-5 form-control light-purple-border text-white ${
                              i18n.resolvedLanguage === "ar" && "text-end"
                         }`}
                         placeholder={t("signIn:password")}
                    />
                    <BookmarkButton
                         onClick={(e) => {
                              e.preventDefault();
                              dispatch(authenticateUser(user));
                         }}
                    >
                         {t("signIn:signIn")}
                    </BookmarkButton>
                    <Link to="/sign-up" className="link-hover text-white">
                         {t("signIn:newAcc")}
                    </Link>
               </FormCard>
          </div>
     );
};
export default SignIn;
