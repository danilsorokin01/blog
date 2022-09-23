import React, {useState} from "react";

export default function Modal({state,auth}){
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [psw,setPsw] = useState("")
    const [psw2,setPsw2] = useState("")
    const [modalState,setModalState] = useState(state)
        return(
           <div className="modal_conteiner" style={{display: state==="active"? "flex":"none"}}>
                <div className="modal">
                    <h2>{auth? 'Войти':'Зарегистрироваться'}</h2>
                    <form action="">
                        <input type="text" placeholder="Введите свой Email" name="email" value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }} />
                        {!auth&&<input type="text" placeholder="Введите имя пользоватетя" name="user" value={name}
                        onChange={(e)=>{
                            setName(e.target.value)
                        }} />}
                        <input type="password" value={psw} placeholder="Введите свой пароль" name="password" 
                        onChange={(e)=>{
                            setPsw(e.target.value)
                        }} />
                        {!auth &&<input type="password" value={psw2} placeholder="Повторите свой пароль" 
                        onChange={(e)=>{
                            setPsw2(e.target.value)
                        }} />}
                        <button type="submit">
                        {auth ? 'Войти':'Зарегистрироваться'}
                        </button>
                        <button
                        disabled ={!auth && psw !==psw2}
                        type="button" onClick={()=>{

                        }}>Close</button>
                    </form>
                </div>
           </div>
        )
    }