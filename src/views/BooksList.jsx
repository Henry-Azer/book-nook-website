import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
     // booksCategoriesList,
     clearBooksDetails,
     findAllBooks,
} from "../store/actions/books/books-action";

import bookMark from "../assets/images/Asset-1.png";
import BookCard from "../components/cards/BookCard";
import Circle from "../components/animation/circle";
import Header from "../components/header/header";

import Pagination from "react-js-pagination";

import { RiArrowDropLeftFill, RiArrowDropRightFill } from "react-icons/ri";
import { TfiAngleDoubleLeft, TfiAngleDoubleRight } from "react-icons/tfi";

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
     const totalNumberOfElements = useSelector(
          (state) => state.books.totalNumberOfElements
     );

     // const pagesTotalNumber = (number) => {
     //      console.log(number);
     //      const pagesArray = [];
     //      for (let i = 1; i <= number; i++) {
     //           pagesArray.push(i);
     //      }

     //      console.log(pagesArray);
     //      return pagesArray;
     // };

     console.log(booksList);
     console.log(totalNumberOfElements);

     // console.log(pagesTotalNumber(totalNumberOfPages));

     return (
          <div className="d-flex justify-content-center align-items-center flex-column w-100 min-vh-100 position-relative overflow-hidden">
               <Header />
               <Circle
                    size="10"
                    backgroundColor="beige"
                    duration="25"
                    top="15"
                    left="-150"
               />
               <Circle
                    size="25"
                    backgroundColor="light-purple"
                    duration="40"
                    top="500"
                    left="-300"
               />
               <Circle
                    size="15"
                    backgroundColor="beige"
                    duration="10"
                    bottom="0"
                    left="-120"
               />
               <Circle
                    size="16"
                    backgroundColor="beige"
                    duration="15"
                    top="900"
                    right="-250"
               />
               <Circle
                    size="10"
                    backgroundColor="light-purple"
                    duration="20"
                    top="200"
                    right="-100"
               />
               <div className="container d-flex justify-content-center align-items-center flex-column py-5">
                    <input
                         type="text"
                         className="w-100 rounded-5 form-control light-purple-border text-white"
                         placeholder="What you want to read ... ?"
                         onChange={(e) => {
                              dispatch(
                                   findAllBooks({
                                        pageNumber: pageNumberState,
                                        name: e.target.value,
                                   })
                              );
                         }}
                    />
                    <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-5 align-items-center align-self-center w-100">
                         {booksList &&
                              booksList.map((book, index) => (
                                   <BookCard key={index} book={book} />
                              ))}
                    </div>
                    <div className="page-numbers w-100 d-flex justify-content-center align-items-center">
                         {
                              /* {pagesTotalNumber(totalNumberOfPages) &&
                              pagesTotalNumber(totalNumberOfPages).map(
                                   (pageNumber) => (
                                        <button
                                             onClick={() => {
                                                  dispatch(
                                                       findAllBooks({
                                                            pageNumber:
                                                                 pageNumber,
                                                       })
                                                  );

                                                  setPageNumberState(
                                                       pageNumber
                                                  );
                                             }}
                                             className={`btn position-relative ${
                                                  pageNumber === pageNumberState
                                                       ? " dark-purple-text"
                                                       : " text-white"
                                             }`}
                                        >
                                             {pageNumber ===
                                                  pageNumberState && (
                                                  <img
                                                       src={bookMark}
                                                       className="position-absolute page-number-bookmark"
                                                  />
                                             )}
                                             {pageNumber}
                                        </button>
                                   )
                              )} */

                              totalNumberOfPages && (
                                   <Pagination
                                        pageRangeDisplayed={5}
                                        itemsCountPerPage={9}
                                        totalItemsCount={totalNumberOfElements}
                                        onChange={(pageNumber) => {
                                             dispatch(
                                                  findAllBooks({
                                                       pageNumber: pageNumber,
                                                  })
                                             );
                                             setPageNumberState(pageNumber);
                                        }}
                                        activePage={pageNumberState}
                                        prevPageText={<RiArrowDropLeftFill />}
                                        nextPageText={<RiArrowDropRightFill />}
                                        firstPageText={<TfiAngleDoubleLeft />}
                                        lastPageText={<TfiAngleDoubleRight />}
                                        itemClass="mx-2"
                                        linkClass="text-white text-decoration-none link-hover"
                                        activeClass="position-relative no-hover"
                                        activeLinkClass="no-hover bookmark-link"
                                        itemClassLast="border rounded light-purple-border px-1 mx-0"
                                        itemClassFirst="border rounded light-purple-border px-1 mx-0"
                                        itemClassPrev="border rounded light-purple-border px-1 mx-0"
                                        itemClassNext="border rounded light-purple-border px-1 mx-0"
                                        disabledClass="opacity-50 cursor-default no-hover"
                                   />
                              )
                         }
                    </div>
               </div>
          </div>
     );
};
export default BooksList;
