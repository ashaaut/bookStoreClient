import React from "react";
import PropTypes  from "prop-types";
import Header from "./Header";
import './../../assets/css/Layout.css'
const propTypes={
    children:PropTypes.node.isRequired
}

const Layout=()=>{
    return(
        <div className="layout-container">
            <div className="header-container">
                <Header/>
            </div>
            <div className="book-container">
                hii
            </div>
        </div>
    )
}
Layout.propTypes=propTypes;
export default Layout;
