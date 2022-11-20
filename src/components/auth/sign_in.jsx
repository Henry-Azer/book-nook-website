import React from "react";
import { Link } from "react-router-dom";

import FormCard from "../base/forms/form-card";
import Circle from "../base/animation/circle";
import BookmarkButton from "../base/buttons/bookmark-button";
import { useTranslation } from "react-i18next";
import axios from "axios";

// file name of Route Component must be like it's class name
// example: Home - SignIn - SignUp
// to know it represents a route for me
// the other used components its used for the route or major components
// it's just a components not a major route for me
// example: bookmark-button - translate-button
const SignIn = () => {
     const { t, i18n } = useTranslation();

     axios.post(
          "https://henry-book-nook-backend.herokuapp.com/book-service/api/auth/log-in",
          { email: "henryazer@outlook.com", password: "12345678" }
     ).then((res) => console.log(res));

     return (
          <div className="sign-in-route vh-100 w-100 position-relative overflow-hidden">
               <Circle
                    size="200"
                    backgroundColor="beige"
                    duration="25"
                    top="15"
                    left="-150"
               />
               <Circle
                    size="300"
                    backgroundColor="light-purple"
                    duration="40"
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
               <FormCard title={t("sign_in:sign_in")}>
                    <input
                         type="text"
                         className={`w-75 rounded-5 form-control light-purple-border text-white ${
                              i18n.resolvedLanguage === "ar" && "text-end"
                         }`}
                         placeholder={t("sign_in:email")}
                    />
                    <input
                         type="password"
                         className={`w-75 rounded-5 form-control light-purple-border text-white ${
                              i18n.resolvedLanguage === "ar" && "text-end"
                         }`}
                         placeholder={t("sign_in:password")}
                    />
                    <BookmarkButton>{t("sign_in:sign_in")}</BookmarkButton>
                    <Link to="/sign-up" className="link-hover text-white">
                         {t("sign_in:new_acc")}
                    </Link>
               </FormCard>
          </div>
     );
};
export default SignIn;
