import axios from "axios";
import { USERS_LIST, CLEAR_USER_LIST } from "../types";

const URL = "https://jsonplaceholder.typicode.com";

export function userList() {
    const request = axios.get(URL + "/users").then((response) => response.data);

    return {
        type: USERS_LIST,
        payload: request,
    };
}

export function clearUserList() {
    return {
        type: CLEAR_USER_LIST,
        payload: null,
    };
}
