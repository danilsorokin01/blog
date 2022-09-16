import React from "react";
import './style.css'

export default function Header(){
    return(
        <header>
            <a href="/" className="header__logo"><img width="30px" src="https://cdn1.iconfinder.com/data/icons/logos-and-brands-3/512/84_Dev_logo_logos-512.png" alt="" /></a>
            <nav className="header__menu"> <a href="/" className="header__btn">Create post</a></nav>                 
        </header>
    )
}