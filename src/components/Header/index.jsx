import React, {useState, useContext} from "react";
import Modal from "../Modal";
import "./style.css";
import {Ctx} from "../../App";

export default () => {
    const [modalView, setModal] = useState(false);
    const [modalAuth, setModalAuth] = useState(true);
    const {userName} = useContext(Ctx);
    return <header>
        <a href="/" className="header__logo">DevsBlog</a>
        <nav className="header__menu">
            <a href="/" className="header__btn">Create post</a>
            {!userName && <a href="/" 
                className="header__btn" 
                onClick={(e) => {
                    e.preventDefault();
                    setModal(!modalView);
                    setModalAuth(true);
                }}
            >Sign in</a>}
            {!userName && <a href="/" 
                className="header__btn" 
                onClick={(e) => {
                    e.preventDefault();
                    setModal(!modalView);
                    setModalAuth(false);
                }}
            >Sign up</a>}
            {userName && <a href="/">{userName}</a>}
            {userName && <a href="/">Log Out</a>}
        </nav>
        {<Modal state={modalView} auth={modalAuth} updState={setModal}/>}
    </header>
}







// import React, { useState,useContext } from "react";
// import { Ctx } from "../../App";
// import './style.css'
// import Modal from "../Modal";
// export default function Header(){
//     const [modaleView, setModal] = useState(false);
//     const [modaleAuth, setModalAuth] = useState(true);
//     const {userName} = useContext(Ctx)
//     return(
//         <header>
//             <a href="/" className="header__logo"><img width="30px" src="https://cdn1.iconfinder.com/data/icons/logos-and-brands-3/512/84_Dev_logo_logos-512.png" alt="" /></a>
//             <nav className="header__menu">
//                 <a href="/" className="header__btn">Create post</a>
//                 {!userName && <a href="/" className="header__btn" onClick={(e)=>{
//                     e.preventDefault()
//                     setModal(!modaleView)
//                     setModalAuth(true)
//                     }}>Sing in</a>}
//                 {!userName&&<a href="/" className="header__btn" onClick={(e)=>{
//                     e.preventDefault()
//                     setModal(!modaleView)
//                     setModalAuth(false)}}>Sign up</a>}
//                     {userName &&<a>{userName}</a>}
//                     {userName &&<a>Log out</a>}
//             </nav>
//             {<Modal state={modaleView ? 'active': ""} auth={modaleAuth} updateState={setModal} /> }         
//         </header>
//     )
// }