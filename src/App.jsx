import React from "react";
import Header from './components/Header/index'
import Main from './components/Main'
import Footer from './components/Footer/index'
import posts from './data/posts.json'

export default () => {
    
    return <div className="page">
        <Header/>
        <Main data={posts}/>
        <Footer/>        
    </div>
}
