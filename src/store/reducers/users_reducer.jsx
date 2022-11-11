import { USERS_LIST, CLEAR_USER_LIST } from "../types";

export default function users_reducer(state = {}, action) {
    switch (action.type) {
        case USERS_LIST:
            return { ...state, users: action.payload };
        case CLEAR_USER_LIST:
            return { ...state, users: action.payload };
        default:
            return state;
    }
}
