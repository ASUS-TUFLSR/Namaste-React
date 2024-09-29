import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import Header from "../Header"
import appStore from '../../utils/appStore'
import '@testing-library/jest-dom'

it("Should render header component with login button", () => {
    
    render(
   <BrowserRouter>
   <Provider store={appStore} >
        <Header/>
     </Provider>  
     </BrowserRouter>);  

     const Loginbutton = screen.getByRole("button");

     expect(Loginbutton).toBeInTheDocument();
})

it("Should render header component with Cart Items 0 ", () => {
    
    render(
   <BrowserRouter>
   <Provider store={appStore} >
        <Header/>
     </Provider>  
     </BrowserRouter>);  

     const cartItems = screen.getByText("Cart(0-items)")

     expect(cartItems).toBeInTheDocument();
})

it("Should render header component with Cart", () => {
    
    render(
   <BrowserRouter>
   <Provider store={appStore} >
        <Header/>
     </Provider>  
     </BrowserRouter>);  

     const Cart = screen.getByText(/Cart/)

     expect(Cart).toBeInTheDocument();
})

it("Should Change Login Button to LogOut on Click", () => {
    
    render(
   <BrowserRouter>
   <Provider store={appStore} >
        <Header/>
     </Provider>  
     </BrowserRouter>);  

     const Loginbutton = screen.getByRole("button", {name: "Login"});

     fireEvent.click(Loginbutton);

     const LogOutbutton = screen.getByRole("button", {name: "Logout"});

     expect(LogOutbutton).toBeInTheDocument();
})