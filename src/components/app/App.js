import React from "react";
import './index.css'
import Header from "../header/";
import Footer from "../footer/footer";

import search from '../../assets/img/search.png'

const App = () => {
    return (
        <div className="app">
            <Header/>

            <h1>
                <img src={search} alt="" />
                Test uchun
            </h1>
            <Footer/>
        </div>
    )
}

export default App