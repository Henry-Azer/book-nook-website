import { AUTHORS_REQUEST, AUTHOR_DATA, CLEAR_AUTHORS_DETAILS } from "../types";

export default function authors_reducer(state = {}, action) {
     switch (action.type) {
          // LOGIN
          case AUTHORS_REQUEST:
               return { ...state, gettingAuthors: true };

          case AUTHOR_DATA:
               return {
                    ...state,
                    gettingAuthors: false,
                    currentAuthor: action.payload,
               };

          case CLEAR_AUTHORS_DETAILS:
               return {
                    ...state,
                    // gettingAuthors: action.payload,
                    // currentAuthor: action.payload,
               };

          default:
               return state;
     }
}
