import React from "react";
import './bootstrap.min.css'
import ReactDOM from "react-dom/client";
import Footer from './components/Footer';
import Header from './components/Header';
import Body from "./components/Body";
import About from "./components/About";
import Contact from './components/Contact';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";


const AppLayout = () => {
    return (
        <div className="app" >
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}


const Router = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path:'/',
                element: <Body/>
            },
            {
                path:"/About",
                element: <About/>
            },
            {
                path:"/Contact",
                element: <Contact/>
            },
        ]
    },
   
])

const root = ReactDOM.createRoot(document.getElementById("root"))

 

root.render(<RouterProvider router={Router} />)