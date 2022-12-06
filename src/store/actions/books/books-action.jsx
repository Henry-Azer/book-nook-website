import axios from "axios";
import { APIs_URL } from "../../../constants/app_constants";
import {
     BOOKS_CATEGORIES,
     BOOKS_REQUEST,
     BOOK_BY_ID,
     // BOOKS_LIST,
     CLEAR_BOOKS_DETAILS,
} from "../../types";

const URL = APIs_URL.STAGING + "/book";

export const booksCategoriesList = () => (dispatch) => {
     dispatch({ type: BOOKS_REQUEST });

     axios.get(`${URL}/find-all-categories`).then((res) => {
          if (res.data.success)
               // console.log(res.data.body )
               dispatch({ type: BOOKS_CATEGORIES, payload: res.data.body });
     });
};

export const getBookById = (bookId) => (dispatch) => {
     axios.get(`${URL}/find-by-id/${bookId}`).then((res) => {
          if (res.data.success)
               dispatch({ type: BOOK_BY_ID, payload: res.data.body });
     });
     // dispatch({ type: BOOK_BY_ID, payload: res.data.body });
};

export const findAllPaginatedFiltered = (filter) => (dispatch) => {
     const booksListFilters = {
          pageNumber: filter.pageNumber,
          pageSize: filter.pageSize,
          // sortingByList: [
          //      {
          //           fieldName: "",
          //           direction: "",
          //           isNumber: true,
          //      },
          // ],
          // criteria: {
          //      name: "",
          //      categories: [""],
          //      fromPrice: 0,
          //      toPrice: 0,
          //      fromPagesNumber: 0,
          //      toPagesNumber: 0,
          //      fromReadingDuration: 0,
          //      toReadingDuration: 0,
          // },
          deletedRecords: true,
     };

     axios.post(`${URL}/find-all-paginated-filtered`, booksListFilters)
          .then
          // (res) => console.log(res)
          ();
     // dispatch({ type: BOOKS_LIST, payload:});
};

export function clearBooksDetails() {
     return {
          type: CLEAR_BOOKS_DETAILS,
          payload: null,
     };
}
