import React from "react";
import { useDispatch } from "react-redux";
import { getRecommendedBooks } from "../store/actions/books/books-action";

const BooksRecommendations = () => {
     const dispatch = useDispatch();

     dispatch(getRecommendedBooks());

     return <div></div>;
};
export default BooksRecommendations;
