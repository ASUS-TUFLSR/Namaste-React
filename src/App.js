import React, {lazy, Suspense} from "react";
import './bootstrap.min.css'
import ReactDOM from "react-dom/client";
import Footer from './components/Footer';
import Header from './components/Header';
import Body from "./components/Body";
import Contact from './components/Contact';
import Error from './components/Error';
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Loader from "./components/Loader";


const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

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
                element: <Suspense fallback={<Loader/>} ><About/></Suspense>
            },
            {
                path:"/Contact",
                element: <Contact/>
            },
            {
                path:"/Cart",
                element: <Cart/>
            },
            {
                path:"/Grocery",
                element: <Suspense fallback={<Loader/>} ><Grocery/></Suspense>
            },
            {
                path:'/restaurants/:resId',
                element:<RestaurantMenu/>
            }
        ]
    },
   
])

const root = ReactDOM.createRoot(document.getElementById("root"))

 

root.render(<RouterProvider router={Router} />)