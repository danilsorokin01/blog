import React from "react";
import './style.css';

export default function Footer(){
    return(
        <footer>
        <span className="footer__copy">&copy;{new Date().getFullYear()}</span>
        <span>Made by&nbsp;<a target='_blank' href="/">Даня</a></span>
        </footer>
    )
}