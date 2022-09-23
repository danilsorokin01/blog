import React, { useState } from "react";
import './style.css'
import Modal from "../Modal";
export default function Header(){
    const [modaleView, setModal] = useState(false);
    const [modaleAuth, setModalAuth] = useState(true);
    return(
        <header>
            <a href="/" className="header__logo"><img width="30px" src="https://cdn1.iconfinder.com/data/icons/logos-and-brands-3/512/84_Dev_logo_logos-512.png" alt="" /></a>
            <nav className="header__menu">
                <a href="/" className="header__btn">Create post</a>
                <a href="/" className="header__btn" onClick={(e)=>{
                    e.preventDefault()
                    setModal(!modaleView)
                    setModalAuth(true)
                    }}>Sing in</a>
                <a href="/" className="header__btn" onClick={(e)=>{
                    e.preventDefault()
                    setModal(!modaleView)
                    setModalAuth(false)}}>Sign up</a>
                
            </nav>
            {<Modal state={modaleView ? 'active': ""} auth={modaleAuth}/> }         
        </header>
    )
}