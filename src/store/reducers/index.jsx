import { combineReducers } from "redux";
import user from "./user-reducer";
import auth from "./auth-reducer";
import books from "./books-reducer";
import authors from "./authors-reducer";

const reducers = combineReducers({
    auth,
    user,
    books,
    authors,
});

export default reducers;
