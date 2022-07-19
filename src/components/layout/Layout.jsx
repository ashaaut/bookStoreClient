import React from "react";
import Header from "./Header";
import './../../assets/css/Layout.css'
import BookContainer from "../book/BookContainer";

const Layout=()=>{
    return(
        <div className="layout-container">
            <div className="header-container">
                <Header/>
            </div>
            <div className="book-container">
                <BookContainer/>
            </div>
        </div>
    )
}

export default Layout;
