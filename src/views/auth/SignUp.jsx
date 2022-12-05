import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useTranslation } from "react-i18next";

// import { useDispatch, useSelector } from "react-redux";

import { useFormik } from "formik";
import * as Yup from "yup";

import { BsArrowLeftCircle, BsArrowRightShort } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

import FormCard from "../../components/forms/form-card";
import Circle from "../../components/animation/circle";
import BookmarkButton from "../../components/buttons/bookmark-button";
import { userRegistration } from "../../store/actions/users/users-actions";
import { useDispatch } from "react-redux";
// import { userRegistration } from "../../store/actions/users/users-actions";

const SignUp = () => {
     useEffect(() => {
          document.title = "Sign Up | BookNook Library";
     });

     const history = useHistory();
     const dispatch = useDispatch();

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
          validationSchema: Yup.object({
               firstName: Yup.string()
                    .max(15, "Must be 15 characters or less")
                    .min(3, "Must be 3 characters or more")
                    .matches(/^[a-zA-Z]+$/, "Name can only contain letters")
                    .required("Required"),
               lastName: Yup.string()
                    .max(15, "Must be 15 characters or less")
                    .min(3, "Must be 3 characters or more")
                    .matches(/^[a-zA-Z]+$/, "Name can only contain letters")
                    .required("Required"),

               day: Yup.number().max(31).min(1).required(),
               month: Yup.number().max(12).min(1).required(),
               year: Yup.number()
                    .max(new Date().getFullYear())
                    .min(new Date().getFullYear() - 200)
                    .required(),
               gender: Yup.string().required("Required"),
               email: Yup.string()
                    .email("Please, Enter a valid email")
                    .required("Required"),
               phoneNumber: Yup.string()
                    .max(11, "Please, Enter a valid phone number")
                    .min(11, "Please, Enter a valid phone number")
                    .required("Required")
                    .matches(/^[0-9]+$/, "Please, Enter a valid phone number"),
               password: Yup.string().required("Required"),
               confirmPassword: Yup.string().required("Required"),
          }),
          onSubmit: (values) => {
               if (values.password === values.confirmPassword) {
                    const calculate_age = (dateOfBirth) => {
                         var today = new Date();
                         var birthDate = new Date(dateOfBirth); // create a date object directly from `dob1` argument
                         var ageNow =
                              today.getFullYear() - birthDate.getFullYear();
                         var m = today.getMonth() - birthDate.getMonth();
                         if (
                              m < 0 ||
                              (m === 0 && today.getDate() < birthDate.getDate())
                         ) {
                              ageNow--;
                         }
                         return ageNow;
                    };

                    const user = {
                         firstName: values.firstName,
                         lastName: values.lastName,
                         email: values.email,
                         password: values.password,
                         phoneNumber: values.phoneNumber,
                         birthdate: `${values.year}-${values.month}-${values.day}T00:00:00.000Z`,
                         age: calculate_age(
                              `${values.year}-${values.month}-${values.day}`
                         ),
                         gender: values.gender,
                    };

                    dispatch(userRegistration(user));
                    
                    history.push("/sign-in", {
                         email: values.email,
                         password: values.password,
                    });
               } else
                    formik.errors.confirmPassword =
                         "Please, Enter the same password";
          },
     });

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

     //  const dispatch = useDispatch();
     //  const registeredUser = useSelector((state) => state.auth.userRegistration);

     console.log(formik.values);
     console.log(formik.errors);
     console.log(formik.touched);

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
               <FormCard
                    onSubmit={formik.handleSubmit}
                    title={t("signUp:signUp")}
               >
                    {currentFormPage === 1 ? (
                         <>
                              <div className="w-100 d-flex flex-column align-items-center ">
                                   <input
                                        type="text"
                                        className={`w-75 rounded-5 form-control light-purple-border text-white ${
                                             i18n.resolvedLanguage === "ar" &&
                                             "text-end"
                                        }`}
                                        name="firstName"
                                        placeholder={t("signUp:firstName")}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.firstName}
                                   />
                                   {formik.touched.firstName &&
                                        formik.errors.firstName && (
                                             <p className="beige-text mt-2">
                                                  {formik.errors.firstName}
                                             </p>
                                        )}
                              </div>

                              <div className="w-100 d-flex flex-column align-items-center ">
                                   <input
                                        type="text"
                                        className={`w-75 rounded-5 form-control light-purple-border text-white ${
                                             i18n.resolvedLanguage === "ar" &&
                                             "text-end"
                                        }`}
                                        name="lastName"
                                        placeholder={t("signUp:lastName")}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.lastName}
                                   />
                                   {formik.touched.lastName &&
                                        formik.errors.lastName && (
                                             <p className="beige-text mt-2">
                                                  {formik.errors.lastName}
                                             </p>
                                        )}
                              </div>

                              <div className="select w-75 position-relative d-inline-block">
                                   <select
                                        name="gender"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        defaultValue={formik.values.gender}
                                        className={`d-inline-block w-100 px-3 py-2 border-1 light-purple-border rounded-5 dark-purple-background text-white ${
                                             i18n.resolvedLanguage === "ar" &&
                                             "text-end"
                                        }`}
                                   >
                                        <option value="" disabled>
                                             {t("signUp:gender")}
                                        </option>
                                        <option value="MALE">
                                             {t("signUp:male")}
                                        </option>
                                        <option value="FEMALE">
                                             {t("signUp:female")}
                                        </option>
                                   </select>
                                   {formik.touched.gender &&
                                        formik.errors.gender && (
                                             <p className="beige-text mt-2 text-center">
                                                  {formik.errors.gender}
                                             </p>
                                        )}

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
                                        <input
                                             onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             type="number"
                                             className="rounded-5 form-control light-purple-border text-white text-center"
                                             name="day"
                                             placeholder={t("signUp:day")}
                                             value={formik.values.day}
                                        />

                                        <input
                                             onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             type="number"
                                             className="rounded-5 form-control light-purple-border text-white text-center mx-3"
                                             name="month"
                                             placeholder={t("signUp:month")}
                                             value={formik.values.month}
                                        />

                                        <input
                                             onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             type="number"
                                             className="rounded-5 form-control light-purple-border text-white text-center"
                                             name="year"
                                             placeholder={t("signUp:year")}
                                             value={formik.values.year}
                                        />
                                   </div>
                              </div>
                              {(formik.touched.day && formik.errors.day) ||
                              (formik.touched.month && formik.errors.month) ||
                              (formik.touched.year && formik.errors.year) ? (
                                   <p className="beige-text mt-2">
                                        Please, Enter a valid date
                                   </p>
                              ) : null}

                              <BookmarkButton
                                   type="button"
                                   onClick={() => {
                                        setCurrentFormPage(currentFormPage + 1);
                                   }}
                              >
                                   {t("signUp:next")}
                                   <BsArrowRightShort className="fs-4" />
                              </BookmarkButton>

                              <Link
                                   to="/sign-in"
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

                              <div className="w-100 d-flex flex-column align-items-center ">
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
                                   {formik.touched.phoneNumber &&
                                        formik.errors.phoneNumber && (
                                             <p className="beige-text mt-2 text-center">
                                                  {formik.errors.phoneNumber}
                                             </p>
                                        )}
                              </div>

                              <div className="w-100 d-flex flex-column align-items-center ">
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
                                   {formik.touched.email &&
                                        formik.errors.email && (
                                             <p className="beige-text mt-2 text-center">
                                                  {formik.errors.email}
                                             </p>
                                        )}
                              </div>

                              <div className="w-100 d-flex flex-column align-items-center ">
                                   <input
                                        onChange={formik.handleChange}
                                        type="password"
                                        className={`w-75 rounded-5 form-control light-purple-border text-white ${
                                             i18n.resolvedLanguage === "ar" &&
                                             "text-end"
                                        }`}
                                        name="password"
                                        placeholder={t(`signUp:password`)}
                                        value={formik.values.password}
                                   />
                                   {formik.touched.password &&
                                        formik.errors.password && (
                                             <p className="beige-text mt-2 text-center">
                                                  {formik.errors.password}
                                             </p>
                                        )}
                              </div>

                              <div className="w-100 d-flex flex-column align-items-center ">
                                   <input
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        type="password"
                                        className={`w-75 rounded-5 form-control light-purple-border text-white ${
                                             i18n.resolvedLanguage === "ar" &&
                                             "text-end"
                                        }`}
                                        name="confirmPassword"
                                        placeholder={t(
                                             `signUp:confirmPassword`
                                        )}
                                        value={formik.values.confirmPassword}
                                   />
                                   {(formik.touched.confirmPassword &&
                                        formik.errors.confirmPassword) ||
                                        (formik.values.password !==
                                             formik.values.confirmPassword && (
                                             <p className="beige-text mt-2 text-center">
                                                  {
                                                       formik.errors
                                                            .confirmPassword
                                                  }
                                             </p>
                                        ))}
                              </div>

                              <BookmarkButton type="submit">
                                   {t("signUp:signUp")}
                              </BookmarkButton>
                         </>
                    )}
               </FormCard>
          </div>
     );
};
export default SignUp;
