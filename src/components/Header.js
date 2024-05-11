import React from 'react'
import { LOGO_URL } from '../utils/constant'
import { useState, useEffect } from 'react'

const Header = () => {

  const [btnNameReact, setbtnNameReact] = useState("SignIn");
  const [btnName, setNameReact] = useState("Ordero");
  console.log("Header rendered");
  
  useEffect(() => {
    console.log('useEffect Called');
  },[])

    return (
        <div className="header">
             <div className="logo-container" >
                <img className="logo"
                 src={LOGO_URL}
                 />{btnName}
                 </div>

           <div className="nav-items">
               <ul>
                 <li>Home</li>
                 <li>About Us</li>
                 <li><i className="fa-solid fa-envelope"></i> Contact Us</li>
                 <li><i className='fas fa-shopping-cart' ></i> Cart</li>
                 <button className='btn btn-light my-3'
                 onClick={()=>{
                  btnNameReact === "SignIn" ? setbtnNameReact("SignUp") : setbtnNameReact("SignIn") ;
                  btnName === "Ordero" ?  setNameReact("Tabemono") :  setNameReact("Ordero");
                 }}
                 >{btnNameReact}</button>
               </ul>
              
             </div>
        
        </div>
    )
}

export default Header
