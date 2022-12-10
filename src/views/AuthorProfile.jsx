import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
     clearAuthorsDetails,
     getAuthorById,
} from "../store/actions/authors/authors-actions";

import Circle from "../components/animation/circle";
import bookMark from "../assets/images/Asset-1.png";
import {
     clearBooksDetails,
     getAuthorBooksByAuthorId,
} from "../store/actions/books/books-action";
import BookCard from "../components/cards/BookCard";

const AuthorProfile = (props) => {
     const [showsDispatched, setShowsDispatched] = useState(false);

     const dispatch = useDispatch();
     

     const currentAuthor = useSelector((state) => state.authors.currentAuthor);
     const currentAuthorBooks = useSelector(
          (state) => state.books.authorsBooks
     );

     console.log(currentAuthorBooks);

     const authorId = props.location.state.authorId;
     useEffect(() => {
          if (!showsDispatched) {
               dispatch(getAuthorById(authorId));
               dispatch(getAuthorBooksByAuthorId(authorId));
               setShowsDispatched(true);
          }

          return () => {
               dispatch(clearAuthorsDetails());
               dispatch(clearBooksDetails());
          };
     }, [dispatch, showsDispatched]);

     return (
          <div className="author-profile w-100 min-vh-100 vh-100 position-relative overflow-x-hidden">
               <Circle
                    size="7"
                    backgroundColor="beige"
                    duration="25"
                    top="150"
                    left="-80"
               />
               <Circle
                    size="15"
                    backgroundColor="light-purple"
                    duration="30"
                    bottom="-150"
                    left="-90"
               />
               <Circle
                    size="20"
                    backgroundColor="light-purple"
                    duration="20"
                    bottom="250"
                    right="-290"
               />
               <div className="container h-100">
                    {currentAuthor && (
                         <>
                              <div className="author-info d-flex justify-content-center align-items-center flex-column border-bottom border-1 light-purple-border pb-5 position-relative">
                                   <div className="row row-cols-lg-2 row-cols-md-1 row-cols-sm-1 py-5 w-100 h-25 text-white">
                                        <div className="col d-flex justify-content-center align-items-center flex-column">
                                             <div className="author-img-frame rounded-circle overflow-hidden d-flex justify-content-center align-items-center border border-3 light-purple-border shadow">
                                                  <img
                                                       className="w-100"
                                                       src={
                                                            currentAuthor.imageUrl
                                                       }
                                                       alt={currentAuthor.name}
                                                  />
                                             </div>
                                             <h1 className="fs-1 fw-bold mt-3">
                                                  {currentAuthor.name}
                                             </h1>
                                        </div>
                                        <div className="col d-flex justify-content-around align-items-center flex-column">
                                             <div className=" light-purple-background rounded-5 d-flex justify-content-center align-items-center w-50 h-25">
                                                  <h1 className="fs-5">
                                                       Age : {currentAuthor.age}
                                                  </h1>
                                             </div>
                                             <div className=" light-purple-background rounded-5 d-flex justify-content-center align-items-center w-50 h-25">
                                                  <h1 className="fs-5">
                                                       Gender :{" "}
                                                       {currentAuthor.gender}
                                                  </h1>
                                             </div>
                                             <div className=" light-purple-background rounded-5 d-flex justify-content-center align-items-center w-50 h-25">
                                                  <h1 className="fs-5">
                                                       Country :{" "}
                                                       {currentAuthor.country}
                                                  </h1>
                                             </div>
                                        </div>
                                   </div>

                                   <div className=" d-flex justify-content-center align-items-center">
                                        <h1 className="fs-4 text-white w-75 text-justify">
                                             {currentAuthor.description}
                                        </h1>
                                   </div>
                                   <img
                                        src={bookMark}
                                        className="position-absolute book-mark"
                                   />
                              </div>
                              <div className="w-100 mt-5 d-flex justify-content-center flex-column">
                                   {currentAuthorBooks && (
                                        <>
                                             <h1 className="fs-1 text-white w-75 text-justify">
                                                  Author's Book
                                                  {currentAuthorBooks.length >
                                                       1 && "s"}
                                             </h1>

                                             <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-5 align-items-center align-self-center w-75">
                                                  {currentAuthorBooks.map(
                                                       (book) => (
                                                            <BookCard
                                                                 book={book}
                                                            />
                                                       )
                                                  )}
                                             </div>
                                        </>
                                   )}
                              </div>
                         </>
                    )}
               </div>
          </div>
     );
};
export default AuthorProfile;
