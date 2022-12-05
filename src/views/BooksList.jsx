import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
     booksCategoriesList,
     clearBooksDetails,
     findAllPaginatedFiltered,
} from "../store/actions/books/books-action";

const BooksList = () => {
     const [showsDispatched, setShowsDispatched] = useState(false);
     const dispatch = useDispatch();

     useEffect(() => {
          document.title = "Books List | BookNook Library";
     });

     useEffect(() => {
          if (!showsDispatched) {
               dispatch(booksCategoriesList());
               setShowsDispatched(true);
          }

          return () => {
               dispatch(clearBooksDetails());
          };
     }, [dispatch, showsDispatched]);

     const booksCategories = useSelector((state) => state.books.booksCategories);

     const filter = {pageNumber:5,pageSize:19}
     dispatch( findAllPaginatedFiltered(filter))
     
     // console.log(booksCategories);

     return (
          <div className="d-flex justify-content-center flex-column w-100 vh-100">
               {booksCategories && booksCategories.map((bookCategory) => (
                    <p className="text-white text-center">
                         {bookCategory.name}
                    </p>
               ))}
          </div>
     );
};
export default BooksList;
