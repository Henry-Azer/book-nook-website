import axios from "axios";
import { APIs_URL } from "../../../constants/app_constants";

import {
     LOGIN_REQUEST,
     LOGIN_FAILURE,
     LOGIN_SUCCEEDED,
     CLEAR_LOGIN_DETAILS,
} from "../../types";

import Cookies from "universal-cookie";

const cookies = new Cookies();

const URL = APIs_URL.STAGING;

export const authenticateUser = (user) => (dispatch) => {
     dispatch({ type: LOGIN_REQUEST });

     axios.post(`${URL}/auth/log-in`, {
          email: user.email,
          password: user.password,
     })
          .then(function (response) {
               console.log(response);
               if (response.data.success) {
                    cookies.set("bn_aut", response.data.body.accessToken);
                    axios.get(`${URL}/auth/current`).then((res) => {
                         if (res.data.success) {
                              console.log(res);
                              dispatch({
                                   type: LOGIN_SUCCEEDED,
                                   payload: res.data.body,
                              });
                         }
                    });

                    // if (user.keepLogged) {
                    //      // cookies.set("iua_cin", "true");
                    //      // cookies.set("at_cin", `${response.data.body.token}`);
                    //      // cookies.set(
                    //      //     "aun_cin",
                    //      //     `${response.data.body.user.username}`
                    //      // );
                    //      // cookies.set("aui_cin", `${response.data.body.user.id}`);
                    // } else {
                    //      cookies.set("iua_cin", "true", {
                    //           maxAge: "14400",
                    //      });
                    //      cookies.set("at_cin", `${response.data.body.token}`, {
                    //           maxAge: "14400",
                    //      });

                    //      cookies.set(
                    //         //   "aun_cin",
                    //         //   `${response.data.body.user.username}`,
                    //         //   {
                    //         //        maxAge: "14400",
                    //         //   }
                    //      );
                    //      cookies.set(
                    //         //   "aui_cin",
                    //         //   `${response.data.body.user.id}`,
                    //         //   {
                    //         //        maxAge: "14400",
                    //         //   }
                    //      );
                    // }
               } else {
                    dispatch({
                         type: LOGIN_FAILURE,
                         payload: response.data.message,
                    });
               }
          })
          .catch(function (error) {
               console.log(error);
          });
};

export function clearLoginDetails() {
     return {
          type: CLEAR_LOGIN_DETAILS,
          payload: null,
     };
}
