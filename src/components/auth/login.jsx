import React from "react";
import { Link } from "react-router-dom";

import FormCard from "../base/forms/form-card";
import Circle from "../base/animation/circle";
import BookmarkButton from "../base/buttons/bookmark-button";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Login = () => {
     const { t, i18n } = useTranslation();

     axios.post(
          "https://henry-book-nook-backend.herokuapp.com/book-service/api/auth/log-in",
          { email: "henryazer@outlook.com", password: "12345678" }
     ).then((res) => console.log(res));

     return (
          <div className="login-route vh-100 w-100 position-relative overflow-hidden">
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
               <FormCard title={t("Login:login")}>
                    <input
                         type="text"
                         className={`w-75 rounded-5 form-control light-purple-border text-white ${
                              i18n.resolvedLanguage === "ar" && "text-end"
                         }`}
                         placeholder={t("Login:email")}
                    />
                    <input
                         type="password"
                         className={`w-75 rounded-5 form-control light-purple-border text-white ${
                              i18n.resolvedLanguage === "ar" && "text-end"
                         }`}
                         placeholder={t("Login:password")}
                    />
                    <BookmarkButton>{t("Login:login")}</BookmarkButton>
                    <Link to="/register" className="link-hover text-white">
                         {t("Login:new_acc")}
                    </Link>
               </FormCard>
          </div>
     );
};
export default Login;
