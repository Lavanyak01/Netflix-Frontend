import React from "react";
import "./FooterLink.css";

function FooterLink({ children, ...restprops}) {
    return (
        <a href='#' className='footer-link' {...restprops}>
            {children}
        </a>
    )
}

export default FooterLink;