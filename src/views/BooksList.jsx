import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
     // booksCategoriesList,
     clearBooksDetails,
     findAllBooks,
} from "../store/actions/books/books-action";

import bookMark from "../assets/images/Asset-1.png";

const BooksList = () => {
     const [showsDispatched, setShowsDispatched] = useState(false);
     const [pageNumberState, setPageNumberState] = useState(1);
     const dispatch = useDispatch();

     useEffect(() => {
          document.title = "Books List | BookNook Library";
     });

     useEffect(() => {
          if (!showsDispatched) {
               dispatch(findAllBooks({ pageNumber: pageNumberState }));
               setShowsDispatched(true);
          }

          return () => {
               dispatch(clearBooksDetails());
          };
     }, [dispatch, showsDispatched, pageNumberState]);

     const booksList = useSelector((state) => state.books.booksList);
     const totalNumberOfPages = useSelector(
          (state) => state.books.totalNumberOfPages
     );

     const pagesTotalNumber = (number) => {
          console.log(number);
          const pagesArray = [];
          for (let i = 1; i <= number; i++) {
               pagesArray.push(i);
          }

          console.log(pagesArray);
          return pagesArray;
     };

     console.log(booksList);
     console.log(totalNumberOfPages);

     // console.log(pagesTotalNumber(totalNumberOfPages));

     return (
          <div className="d-flex justify-content-center flex-column w-100 vh-100">
               <div className="page-numbers w-100 d-flex justify-content-center align-items-center">
                    {pagesTotalNumber(totalNumberOfPages) &&
                         pagesTotalNumber(totalNumberOfPages).map(
                              (pageNumber) => (
                                   <button
                                        onClick={() => {
                                             dispatch(
                                                  findAllBooks({
                                                       pageNumber: pageNumber,
                                                  })
                                             );

                                             setPageNumberState(pageNumber);
                                        }}
                                        className={`btn position-relative ${
                                             pageNumber === pageNumberState
                                                  ? " dark-purple-text"
                                                  : " text-white"
                                        }`}
                                   >
                                        {pageNumber === pageNumberState && (
                                             <img
                                                  src={bookMark}
                                                  className="position-absolute page-number-bookmark"
                                             />
                                        )}
                                        {pageNumber}
                                   </button>
                              )
                         )}
               </div>
          </div>
     );
};
export default BooksList;
