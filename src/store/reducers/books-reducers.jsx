import {
     BOOKS_CATEGORIES,
     BOOKS_REQUEST,
     BOOKS_LIST,
     BOOK_BY_ID,
} from "../types";

export default function books(state = {}, action) {
     switch (action.type) {
          // LOGIN
          case BOOKS_REQUEST:
               return { ...state, gettingBooks: true };
          case BOOKS_LIST:
               return {
                    ...state,
                    gettingBooks: false,
                    booksList: action.payload,
               };

          case BOOK_BY_ID:
               return {
                    ...state,
                    gettingBooks: false,
                    currentBook: action.payload,
               };
          case BOOKS_CATEGORIES:
               return {
                    ...state,
                    gettingBooks: false,
                    booksCategories: action.payload,
               };

          default:
               return state;
     }
}
