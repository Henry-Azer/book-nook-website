import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import axios from "axios";

import { BsArrowLeftCircle, BsArrowRightShort } from "react-icons/bs";

import FormCard from "../base/forms/form-card";
import Circle from "../base/animation/circle";
import BookmarkButton from "../base/buttons/bookmark-button";

const SignUp = () => {
     const { t, i18n } = useTranslation();

     const [formNumber, setFormNumber] = useState(1);

     const form_inputs = [
          "fname",
          "lname",
          "phone_num",
          "day",
          "month",
          "year",
          "email",
          "password",
          "confirm_password",
     ];

     axios.post(
          "https://henry-book-nook-backend.herokuapp.com/book-service/api/auth/log-in",
          { email: "henryazer@outlook.com", password: "12345678" }
     ).then((res) => console.log(res));

     return (
          <div className="sign_up-route vh-100 w-100 position-relative overflow-hidden">
               <Circle
                    size="200"
                    backgroundColor="light-purple"
                    duration="25"
                    top="15"
                    right="-150"
               />
               <Circle
                    size="300"
                    backgroundColor="beige"
                    duration="40"
                    bottom="-100"
                    right="-120"
               />
               <Circle
                    size="400"
                    backgroundColor="light-purple"
                    duration="30"
                    bottom="-30"
                    left="-350"
               />
               <Circle
                    size="120"
                    backgroundColor="beige"
                    duration="50"
                    bottom="300"
                    left="-70"
               />
               <FormCard title={t("sign_up:sign_up")}>
                    {formNumber === 1 ? (
                         <>
                              {form_inputs.slice(0, 3).map((input, index) => (
                                   <input
                                        key={index}
                                        type="text"
                                        className={`w-75 rounded-5 form-control light-purple-border text-white ${
                                             i18n.resolvedLanguage === "ar" &&
                                             "text-end"
                                        }`}
                                        placeholder={t(`sign_up:${input}`)}
                                   />
                              ))}
                              <div className="w-75 d-flex align-items-center">
                                   <h1 className="fs-6 w-75">
                                        {t("sign_up:birth_date")}
                                   </h1>
                                   <div className="d-flex justify-content-center">
                                        {form_inputs
                                             .slice(3, 6)
                                             .map((input, index) => (
                                                  <input
                                                       key={index}
                                                       type="number"
                                                       className={`rounded-5 form-control light-purple-border text-white text-center ${
                                                            input === "month" &&
                                                            "mx-4"
                                                       }`}
                                                       placeholder={t(
                                                            `sign_up:${input}`
                                                       )}
                                                  />
                                             ))}
                                   </div>
                              </div>

                              <BookmarkButton
                                   onClick={() => setFormNumber(formNumber + 1)}
                              >
                                   {t("sign_up:next")}
                                   <BsArrowRightShort className="fs-4" />
                              </BookmarkButton>

                              <Link
                                   to="/sign-up"
                                   className="link-hover text-white"
                              >
                                   {t("sign_up:have_acc")}
                              </Link>
                         </>
                    ) : (
                         <>
                              <button
                                   className="back-button text-white position-absolute rounded-circle bg-transparent border-0 d-flex justify-content-center align-items-center"
                                   onClick={() => setFormNumber(formNumber - 1)}
                              >
                                   <BsArrowLeftCircle className="w-100 h-100" />
                              </button>
                              {form_inputs.slice(6, 9).map((input, index) => (
                                   <input
                                        key={index}
                                        type="text"
                                        className={`w-75 rounded-5 form-control light-purple-border text-white ${
                                             i18n.resolvedLanguage === "ar" &&
                                             "text-end"
                                        }`}
                                        placeholder={t(`sign_up:${input}`)}
                                   />
                              ))}
                              <BookmarkButton>
                                   {t("sign_up:sign_up")}
                              </BookmarkButton>
                         </>
                    )}
               </FormCard>
          </div>
     );
};
export default SignUp;
