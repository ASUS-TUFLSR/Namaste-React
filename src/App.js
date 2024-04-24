import React from "react";
import './bootstrap.min.css'
import ReactDOM from "react-dom/client";
import Footer from './components/Footer';
import Header from './components/Header';
import Body from "./components/Body";


const AppLayout = () => {
    return (
        <div className="app" >
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

 

root.render(<AppLayout/>)