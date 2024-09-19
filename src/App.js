import React, {lazy, Suspense, useEffect, useState} from "react";
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
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {

 //Autentication code for user
  const [userName, setUserName] = useState();
// debugger;
    useEffect(() => {
    //Make an API Call to fetch/send user and password 
     
        const data = {
            name: 'Manmit Pal',
        };
        setUserName(data.name);
    }, [])

    
    return (
     <Provider store={appStore}> 
      <UserContext.Provider value={{LoggedInUser : userName, setUserName}} >
        <div className="app" >
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
      </UserContext.Provider> 
     </Provider>
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