import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import BookmarkButton from "../components/buttons/bookmark-button";
import {
     clearBooksDetails,
     getBookById,
} from "../store/actions/books/books-action";

const BookDetails = () => {
     const [showsDispatched, setShowsDispatched] = useState(false);

     const dispatch = useDispatch();
     const currentBook = useSelector((state) => state.books.currentBook);
     console.log(currentBook);

     useEffect(() => {
          if (!showsDispatched) {
               dispatch(getBookById(12));
               setShowsDispatched(true);
          }

          return () => {
               dispatch(clearBooksDetails());
          };
     }, [dispatch, showsDispatched]);

     const history = useHistory();

     return (
          <div className="book-profile-route w-100 vh-100">
               {currentBook && (
                    <div className="row row-cols-lg-2 row-cols-md-1 row-cols-sm-1 w-100 h-100 text-white overflow-hidden">
                         <div className="col h-100 d-flex justify-content-center align-items-center flex-column position-relative ">
                              <div className="d-flex justify-content-center align-items-center flex-column">
                                   <div className="book-image-frame">
                                        <img
                                             className="rounded-4 w-100 shadow"
                                             src={currentBook.imageUrl}
                                             alt={currentBook.name}
                                        />
                                   </div>
                                   <h1 className=" mt-2 fs-1">
                                        {currentBook.name}
                                   </h1>
                                   <p className="fs-5 p-2">
                                        Category : {currentBook.category.name}
                                   </p>
                              </div>
                              <div className="blur-book-image w-100 h-100 position-absolute bottom-50 start-0">
                                   <img
                                        className="w-100"
                                        src={currentBook.imageUrl}
                                   />
                              </div>
                         </div>
                         <div className="col d-flex justify-content-center align-items-center flex-column">
                              <div className="row row-cols-lg-2 row-cols-md-1 row-cols-sm-1 w-100 h-25 g-5 mt-4 px-4">
                                   <div className="col d-flex justify-content-center align-items-center">
                                        <div onClick={()=> history.push("/author-profile",{authorId:currentBook.author.id}) } className="light-purple-background rounded-5 d-flex justify-content-center align-items-center w-100 h-100 cursor-pointer">
                                             <h1 className="fs-5 m-3">
                                                  {currentBook.author.name}
                                             </h1>
                                        </div>
                                   </div>
                                   <div className="col d-flex justify-content-center align-items-center">
                                        <div className="light-purple-background rounded-5 d-flex justify-content-center align-items-center w-100 h-100">
                                             <h1 className="fs-5 m-3">
                                                  Rating : {currentBook.rate}
                                             </h1>
                                        </div>
                                   </div>
                                   <div className="col d-flex justify-content-center align-items-center">
                                        <div className="light-purple-background rounded-5 d-flex justify-content-center align-items-center w-100 h-100">
                                             <h1 className="fs-5 m-3">
                                                  Price : {currentBook.price} $
                                             </h1>
                                        </div>
                                   </div>
                                   <div className="col d-flex justify-content-center align-items-center">
                                        <div className="light-purple-background rounded-5 d-flex justify-content-center align-items-center w-100 h-100">
                                             <h1 className="fs-5 m-3">
                                                  Length :{" "}
                                                  {currentBook.pagesNumber}
                                             </h1>
                                        </div>
                                   </div>
                              </div>
                              <div className="row row-cols-1 w-100 h-50 d-flex justify-content-center align-items-center">
                                   <div className="col w-75 d-flex justify-content-center align-items-center">
                                        <p className="fs-5">
                                             {" "}
                                             Book Description :{" "}
                                             {currentBook.description}
                                        </p>
                                   </div>
                                   <div className="col d-flex justify-content-center align-items-center">
                                        <BookmarkButton type="button">
                                             Rate Book
                                        </BookmarkButton>
                                   </div>
                              </div>
                         </div>
                    </div>
               )}
          </div>
     );
};
export default BookDetails;
