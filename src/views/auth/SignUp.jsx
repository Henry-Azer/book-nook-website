import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";


import { BsArrowLeftCircle, BsArrowRightShort } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

import FormCard from "../../components/forms/form-card";
import Circle from "../../components/animation/circle";
import BookmarkButton from "../../components/buttons/bookmark-button";
import { userRegistration } from "../../store/actions/users/users-actions";
import { useFormik } from "formik";

const SignUp = () => {
     const { t, i18n } = useTranslation();

     const [currentFormPage, setCurrentFormPage] = useState(1);

     const formik = useFormik({
          initialValues: {
               firstName: "",
               lastName: "",
               day: "",
               month: "",
               year: "",
               gender: "",
               email: "",
               phoneNumber: "",
               password: "",
               confirmPassword: "",
          },
     });

     const user = {
          firstName: "Bavly",
          lastName: "Ashraf",
          email: "bavly@gmail.com",
          password: "123456789",
          phoneNumber: "01234567891",
          birthdate: "2004-11-29",
          age: 18,
          gender: "MALE",
     };

     // const formInputs = Object.keys(formik.values);

     // console.log(formik.values);

     // const formInputs = [
     //      "firstName",
     //      "lastName",
     //      "day",
     //      "month",
     //      "year",
     //      "email",
     //      "phoneNumber",
     //      "password",
     //      "confirmPassword",
     // ];

     const dispatch = useDispatch();
     const registeredUser = useSelector((state) => state.auth.userRegistration);

     // useEffect(() => {
     //      console.log(registeredUser);
     // });

     //this calls the backend to sign in each time the class render -_-
     // our app free we don't have to fuck it like that
     // axios.post(
     //      "https://henry-book-nook-backend.herokuapp.com/book-service/api/auth/log-in",
     //      { email: "henryazer@outlook.com", password: "12345678" }
     // ).then((res) => console.log(res));

     return (
          <div className="sign-up-route vh-100 w-100 position-relative overflow-hidden">
               {/* {Object.keys(formik.values).map((value) => console.log(typeof(value)))} */}
               <Circle
                    size="10"
                    backgroundColor="light-purple"
                    duration="25"
                    top="15"
                    right="-150"
               />
               <Circle
                    size="12"
                    backgroundColor="beige"
                    duration="40"
                    bottom="-100"
                    right="-120"
               />
               <Circle
                    size="22"
                    backgroundColor="light-purple"
                    duration="30"
                    bottom="-30"
                    left="-350"
               />
               <Circle
                    size="6"
                    backgroundColor="beige"
                    duration="50"
                    bottom="300"
                    left="-70"
               />
               <FormCard title={t("signUp:signUp")}>
                    {currentFormPage === 1 ? (
                         <>
                              {/* {formInputs.slice(0, 2).map((input, index) => (
                                   <input
                                        key={index}
                                        type="text"
                                        className={`w-75 rounded-5 form-control light-purple-border text-white ${
                                             i18n.resolvedLanguage === "ar" &&
                                             "text-end"
                                        }`}
                                        placeholder={t(`signUp:${input}`)}
                                        onChange={formik.handleChange}
                                        value={formik.values}
                                   />
                              ))} */}

                              <input
                                   type="text"
                                   className={`w-75 rounded-5 form-control light-purple-border text-white ${
                                        i18n.resolvedLanguage === "ar" &&
                                        "text-end"
                                   }`}
                                   name="firstName"
                                   placeholder={t("signUp:firstName")}
                                   onChange={formik.handleChange}
                                   value={formik.values.firstName}
                              />

                              <input
                                   type="text"
                                   className={`w-75 rounded-5 form-control light-purple-border text-white ${
                                        i18n.resolvedLanguage === "ar" &&
                                        "text-end"
                                   }`}
                                   name="lastName"
                                   placeholder={t("signUp:lastName")}
                                   onChange={formik.handleChange}
                                   value={formik.values.lastName}
                              />

                              <div className="select w-75 position-relative d-inline-block">
                                   <select
                                        name="gender"
                                        onChange={formik.handleChange}
                                        defaultValue={formik.values.gender}
                                        className={`d-inline-block w-100 px-3 py-2 border-1 light-purple-border rounded-5 dark-purple-background text-white ${
                                             i18n.resolvedLanguage === "ar" &&
                                             "text-end"
                                        }`}
                                   >
                                        <option value="" disabled>
                                             {t("signUp:gender")}
                                        </option>
                                        <option value="male">
                                             {t("signUp:male")}
                                        </option>
                                        <option value="female">
                                             {t("signUp:female")}
                                        </option>
                                   </select>
                                   <IoIosArrowDown
                                        className={`select-arrow d-inline-block light-purple-text position-absolute fs-4 ${
                                             i18n.resolvedLanguage === "ar" &&
                                             "ar"
                                        }`}
                                   />
                              </div>

                              <div
                                   className={`w-75 d-flex align-items-center ${
                                        i18n.resolvedLanguage === "ar" &&
                                        "flex-row-reverse"
                                   }`}
                              >
                                   <h1
                                        className={`fs-6 w-75 ${
                                             i18n.resolvedLanguage === "ar" &&
                                             "text-end"
                                        }`}
                                   >
                                        {t("signUp:birthDate")}
                                   </h1>
                                   <div
                                        className={`d-flex align-items-center ${
                                             i18n.resolvedLanguage === "ar" &&
                                             "flex-row-reverse"
                                        }`}
                                   >
                                        {/* {formInputs
                                             .slice(2, 5)
                                             .map((input, index) => (
                                                  <input
                                                       key={index}
                                                       type="number"
                                                       className={`rounded-5 form-control light-purple-border text-white text-center ${
                                                            input === "month" &&
                                                            "mx-4"
                                                       }`}
                                                       placeholder={t(
                                                            `signUp:${input}`
                                                       )}
                                                  />
                                             ))} */}

                                        <input
                                             onChange={formik.handleChange}
                                             type="number"
                                             className="rounded-5 form-control light-purple-border text-white text-center mx-2"
                                             name="day"
                                             placeholder={t("signUp:day")}
                                             value={formik.values.day}
                                        />

                                        <input
                                             onChange={formik.handleChange}
                                             type="number"
                                             className="rounded-5 form-control light-purple-border text-white text-center mx-2"
                                             name="month"
                                             placeholder={t("signUp:month")}
                                             value={formik.values.month}
                                        />

                                        <input
                                             onChange={formik.handleChange}
                                             type="number"
                                             className="rounded-5 form-control light-purple-border text-white text-center mx-2"
                                             name="year"
                                             placeholder={t("signUp:year")}
                                             value={formik.values.year}
                                        />
                                   </div>
                              </div>

                              <BookmarkButton
                                   onClick={() =>
                                        setCurrentFormPage(currentFormPage + 1)
                                   }
                              >
                                   {t("signUp:next")}
                                   <BsArrowRightShort className="fs-4" />
                              </BookmarkButton>

                              <Link
                                   to="/sign-up"
                                   className="link-hover text-white"
                              >
                                   {t("signUp:haveAcc")}
                              </Link>
                         </>
                    ) : (
                         <>
                              <button
                                   className="back-button text-white position-absolute rounded-circle bg-transparent border-0 d-flex justify-content-center align-items-center"
                                   onClick={() =>
                                        setCurrentFormPage(currentFormPage - 1)
                                   }
                              >
                                   <BsArrowLeftCircle className="w-100 h-100" />
                              </button>
                              {/* {formInputs.slice(5, 9).map((input, index) => (
                                   <input
                                   key={index}
                                   type="text"
                                   className={`w-75 rounded-5 form-control light-purple-border text-white ${
                                        i18n.resolvedLanguage === "ar" &&
                                        "text-end"
                                   }`}
                                   placeholder={t(`signUp:${input}`)}
                                   />
                              ))} */}

                              <input
                                   onChange={formik.handleChange}
                                   type="text"
                                   className={`w-75 rounded-5 form-control light-purple-border text-white ${
                                        i18n.resolvedLanguage === "ar" &&
                                        "text-end"
                                   }`}
                                   name="phoneNumber"
                                   placeholder={t(`signUp:phoneNumber`)}
                                   value={formik.values.phoneNumber}
                              />

                              <input
                                   onChange={formik.handleChange}
                                   type="text"
                                   className={`w-75 rounded-5 form-control light-purple-border text-white ${
                                        i18n.resolvedLanguage === "ar" &&
                                        "text-end"
                                   }`}
                                   name="email"
                                   placeholder={t(`signUp:email`)}
                                   value={formik.values.email}
                              />
                              <input
                                   onChange={formik.handleChange}
                                   type="text"
                                   className={`w-75 rounded-5 form-control light-purple-border text-white ${
                                        i18n.resolvedLanguage === "ar" &&
                                        "text-end"
                                   }`}
                                   name="password"
                                   placeholder={t(`signUp:password`)}
                                   value={formik.values.password}
                              />
                              <input
                                   onChange={formik.handleChange}
                                   type="text"
                                   className={`w-75 rounded-5 form-control light-purple-border text-white ${
                                        i18n.resolvedLanguage === "ar" &&
                                        "text-end"
                                   }`}
                                   name="confirmPassword"
                                   placeholder={t(`signUp:confirmPassword`)}
                                   value={formik.values.confirmPassword}
                              />

                              <BookmarkButton
                                   // onClick={() => dispatch(userRegistration())}
                                   onClick={(e) => {
                                        e.preventDefault();
                                        dispatch(userRegistration(user));
                                   }}
                              >
                                   {t("signUp:signUp")}
                              </BookmarkButton>
                         </>
                    )}
               </FormCard>
          </div>
     );
};
export default SignUp;
