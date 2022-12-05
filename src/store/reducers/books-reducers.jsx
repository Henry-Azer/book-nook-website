import { BOOKS_CATEGORIES, BOOKS_REQUEST } from "../types";

export default function books(state = {}, action) {
     switch (action.type) {
          // LOGIN
          case BOOKS_REQUEST:
               return { ...state, gettingBooks: true };
          case BOOKS_CATEGORIES:
               
               return {
                    ...state,
                    gettingBooks: false,
                    booksList: action.payload,
               };

               default:
                    return state;
     }
}
