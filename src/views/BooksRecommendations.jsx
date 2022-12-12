import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
     getRecommendedBooks,
     clearBooksDetails,
} from "../store/actions/books/books-action";

import Cookies from "universal-cookie";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BookCard from "../components/cards/BookCard";
import { Link } from "react-router-dom";
import BookmarkButton from "../components/buttons/bookmark-button";
import Circle from "../components/animation/circle";
import Header from "../components/header/header";

const BooksRecommendations = () => {
     const dispatch = useDispatch();
     const cookies = new Cookies();

     const [showsDispatched, setShowsDispatched] = useState(false);

     const isUserAuthenticatedCookie = () => {
          return cookies.get("bn_aut");
     };

     useEffect(() => {
          if (!showsDispatched && isUserAuthenticatedCookie()) {
               dispatch(getRecommendedBooks());
               setShowsDispatched(true);
          }

          return () => {
               dispatch(clearBooksDetails());
          };
     }, [dispatch, showsDispatched]);

     const recommendedBooks = useSelector(
          (state) => state.books.recommendedBooks
     );

     // const selectedBooksRecommendations = (list) => {
     //      if (list.length > 5) return list.slice(0, 5);
     //      else return list;
     // };

     console.log(recommendedBooks);

     const responsive = {
          desktop: {
               breakpoint: { max: 3000, min: 1024 },
               items: 3,
               slidesToSlide: 3, // optional, default to 1.
          },
          tablet: {
               breakpoint: { max: 1024, min: 464 },
               items: 2,
               slidesToSlide: 2, // optional, default to 1.
          },
          mobile: {
               breakpoint: { max: 464, min: 0 },
               items: 1,
               slidesToSlide: 1, // optional, default to 1.
          },
     };

     return (
          <div className="w-100 vh-100 position-relative overflow-hidden">
               <Header />
               <Circle
                    size="10"
                    backgroundColor="beige"
                    duration="25"
                    top="15"
                    left="-150"
               />
               <Circle
                    size="15"
                    backgroundColor="light-purple"
                    duration="40"
                    bottom="-100"
                    left="-120"
               />
               <Circle
                    size="12"
                    backgroundColor="light-purple"
                    duration="20"
                    top="200"
                    right="-200"
               />
               <div className=" container py-5 h-100 d-flex justify-content-center align-items-center flex-column text-white text-center">
                    <h1 className="fs-2">Our Books Recommendations</h1>
                    {isUserAuthenticatedCookie() ? (
                         <>
                              {recommendedBooks && (
                                   <Carousel
                                        className="w-100"
                                        swipeable={true}
                                        responsive={responsive}
                                        draggable={false}
                                        showDots={true}
                                        ssr={true} // means to render carousel on server-side.
                                        infinite={true}
                                        autoPlay={true}
                                        autoPlaySpeed={1000}
                                        keyBoardControl={true}
                                        customTransition="all .5"
                                        transitionDuration={5000}
                                        containerClass="carousel-container"
                                        removeArrowOnDeviceType={[
                                             "tablet",
                                             "mobile",
                                        ]}
                                        // deviceType={this.props.deviceType}
                                        dotListClass="custom-dot-list-style"
                                        itemClass="carousel-item-padding-40-px"
                                   >
                                        <BookCard book={recommendedBooks[0]} />
                                        <BookCard book={recommendedBooks[1]} />
                                        <BookCard book={recommendedBooks[2]} />
                                        <BookCard book={recommendedBooks[3]} />
                                        <BookCard book={recommendedBooks[4]} />
                                        <BookCard book={recommendedBooks[5]} />
                                        <BookCard book={recommendedBooks[6]} />
                                        <BookCard book={recommendedBooks[7]} />
                                        <BookCard book={recommendedBooks[8]} />
                                   </Carousel>
                              )}
                         </>
                    ) : (
                         <>
                              <h1 className="fs-5 w-50 my-5">
                                   Why you miss that chance ! <br /> SIGN UP now
                                   to get our Recommendations
                              </h1>

                              <Link
                                   className=" text-decoration-none w-100"
                                   to={"/sign-up"}
                              >
                                   <BookmarkButton>Sign up</BookmarkButton>
                              </Link>

                              <p className="mt-5">Already have account ?</p>

                              <Link
                                   className=" text-white link-hover"
                                   to={"/sign-in"}
                              >
                                   Sign in NOW
                              </Link>
                         </>
                    )}
                    <div></div>
               </div>
          </div>
     );
};
export default BooksRecommendations;
