import axios from "axios";
import { APIs_URL } from "../../../constants/app_constants";
import {
     BOOKS_CATEGORIES,
     BOOKS_REQUEST,
     CLEAR_BOOKS_DETAILS,
} from "../../types";

const URL = APIs_URL.STAGING;

export const booksList = (bookId) => (dispatch) => {
     dispatch({ type: BOOKS_REQUEST });

     axios.get(`${URL}/book/find-all-categories`).then((res) =>
          // console.log(res.data.body )
          dispatch({ type: BOOKS_CATEGORIES, payload: res.data.body })
     );
};

export function clearBooksDetails() {
     return {
          type: CLEAR_BOOKS_DETAILS,
          payload: null,
     };
}
