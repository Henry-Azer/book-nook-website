import axios from "axios";
import { APIs_URL } from "../../../constants/app_constants";

import {
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCEEDED,
    REGISTRATION_ERROR,
    CLEAR_REGISTRATION_DETAILS,
} from "../../types";

const URL = APIs_URL.STAGING;

export const userRegistration = (user) => (dispatch) => {
    dispatch({ type: REGISTRATION_REQUEST });

    axios
        .post(`${URL}/user`, user)
        .then((response) => {
            console.log(response);
            if (response.data.status === 200) {
                dispatch({
                    type: REGISTRATION_SUCCEEDED,
                    payload: response.data.body,
                });
            } else {
                dispatch({
                    type: REGISTRATION_ERROR,
                    payload: response.data.message,
                });
            }
        })
        .catch((error) => {
            console.log(error);
        });
};

export function clearRegistrationDetails() {
    return {
        type: CLEAR_REGISTRATION_DETAILS,
        payload: null,
    };
}
