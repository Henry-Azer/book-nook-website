import axios from "axios";
import { APIs_URL } from "../../../constants/app_constants";
import {
     AUTHORS_REQUEST,
     AUTHOR_DATA,
     CLEAR_AUTHORS_DETAILS,
} from "../../types";

const URL = APIs_URL.STAGING + "/author";

export const getAuthorById = (authorId) => (dispatch) => {
     dispatch({ type: AUTHORS_REQUEST });

     axios.get(`${URL}/find-by-id/${authorId}`).then((res) => {
          if (res.data.success)
               dispatch({ type: AUTHOR_DATA, payload: res.data.body });
     });
     // dispatch({ type: BOOK_BY_ID, payload: res.data.body });
};

export function clearAuthorsDetails() {
     return {
          type: CLEAR_AUTHORS_DETAILS,
          payload: null,
     };
}
