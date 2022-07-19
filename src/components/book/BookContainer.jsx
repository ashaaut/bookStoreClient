import React from "react";
import BookFilter from "./BookFilter";
import BookList from './BookList'
const BookContainer=()=>{
    return(
        <div>
           <div>
           <BookFilter/>
           </div>
           <div>
            <BookList/>
           </div>
        </div>
    )
}

export default BookContainer;