import React from "react";
import BookFilter from "./BookFilter";
import BookList from './BookList'
import './../../assets/css/BookContainer.css'
import styles from './BookStyles'

const BookContainer=()=>{
    const classes=styles();

    return(
        <div className={classes.bookContainerComponent}>
           <div className="bookFiletr">
           <BookFilter/>
           </div>
           <div className="bookList">
            <BookList/>
           </div>
        </div>
    )
}

export default BookContainer;