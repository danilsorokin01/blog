import React, {useState} from "react";

export default function Modal({state}){

        return(
           <div className="modal_conteiner" style={{display: state==="active"? "flex":"none"}}>
                <div className="modal">
                    <h2>модальное окно</h2>
                </div>
           </div>
        )
    }