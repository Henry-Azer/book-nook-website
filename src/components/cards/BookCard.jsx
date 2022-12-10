import React from "react";
import { useHistory } from "react-router-dom";

const BookCard = (props) => {
     const book = props.book;
     const history = useHistory();

     return (
          <div
               key={props.key}
               className="col col-list d-flex justify-content-start align-items-center text-white cursor-pointer"
          >
               <div
                    onClick={() =>
                         history.push("/book-profile", {
                              bookId: book.id,
                         })
                    }
                    className="d-flex justify-content-between align-items-center flex-column w-100 h-75 overflow-hidden"
               >
                    <div className="h-75 d-flex justify-content-center align-content-center rounded-5">
                         <img
                              src={book.imageUrl}
                              alt={book.name}
                              className="h-100 rounded-5"
                         />
                    </div>

                    <h1 className="fs-5 text-center mt-2 fw-bold">{book.name}</h1>
                    <h1 className="fs-6">Price : {book.price} $</h1>
               </div>
          </div>
     );
};
export default BookCard;
