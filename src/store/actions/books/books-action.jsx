import axios from "axios";
import { APIs_URL } from "../../../constants/app_constants";
import {
     BOOKS_CATEGORIES,
     BOOKS_REQUEST,
     BOOK_BY_ID,
     BOOKS_LIST,
     BOOKS_BY_AUTHOR,
     RECOMMENDED_BOOKS,
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
     dispatch({ type: BOOKS_REQUEST });

     axios.get(`${URL}/find-by-id/${bookId}`).then((res) => {
          if (res.data.success)
               dispatch({ type: BOOK_BY_ID, payload: res.data.body });
     });
};

export const findAllBooks = (filter) => (dispatch) => {
     const booksListFilters = {
          pageNumber: filter.pageNumber,
          pageSize: 15,
          sortingByList: [
               {
                    fieldName: "id",
                    direction: "ASC",
                    isNumber: true,
               },
          ],
          criteria: {
               name: filter.name ? filter.name : null,
               categories: filter.categories ? filter.categories : [],
               fromPrice: filter.fromPrice ? filter.fromPrice : null,
               toPrice: filter.toPrice ? filter.toPrice : null,
               fromPagesNumber: filter.fromPagesNumber
                    ? filter.fromPagesNumber
                    : null,
               toPagesNumber: filter.toPagesNumber
                    ? filter.toPagesNumber
                    : null,
               fromReadingDuration: filter.fromReadingDuration
                    ? filter.fromReadingDuration
                    : null,
               toReadingDuration: filter.toReadingDuration
                    ? filter.toReadingDuration
                    : null,
          },
          deletedRecords: false,
     };

     axios.post(`${URL}/find-all-paginated-filtered`, booksListFilters).then(
          (res) => {
               console.log(res);
               if (res.data.success) {
                    dispatch({
                         type: BOOKS_LIST,
                         payload: res.data.body,
                    });
               }
          }
     );
};

export const getAuthorBooksByAuthorId = (authorId) => (dispatch) => {
     axios.get(`${URL}/find-all-by-author-id/${authorId}`).then((res) => {
          if (res.data.success)
               dispatch({ type: BOOKS_BY_AUTHOR, payload: res.data.body });
     });
};

export const getRecommendedBooks = () => (dispatch) => {
     axios.get(`${URL}/find-all-recommended`).then((res) => {
          if (res.data.success) {
               dispatch({ type: RECOMMENDED_BOOKS, payload: res.data.body})
          }
     });
};
export function clearBooksDetails() {
     return {
          type: CLEAR_BOOKS_DETAILS,
          payload: null,
     };
}
