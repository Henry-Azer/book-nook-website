import { combineReducers } from "redux";
import user from "./user-reducer";
import auth from "./auth-reducer";
import books from "./books-reducers";

const reducers = combineReducers({
    auth,
    user,
    books,
});

export default reducers;
