import React from 'react'
import { LOGO_URL } from '../utils/constant'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Grocery from './Grocery';



const Header = () => {

  const [btnNameReact, setbtnNameReact] = useState("SignIn");
  const [btnName, setNameReact] = useState("Ordero");
  
  useEffect(() => {
    
  },[])

  // const onlineStatus = useInternetStatus();


  
    return (
        <div className=" flex justify-between bg-gray-50 shadow-2xl mb-14">
             <div className="flex  items-center p-2" >
                <img className="w-36 rounded-full"
                 src={LOGO_URL}/> 
                <div className='p-1' > {btnName}</div>
                 </div>

           <div className="flex items-center">
               <ul className='flex p-8' >
                {/* <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li> */}
                <li><Link className='p-8 text-xl' to='/Grocery' >GroceryMart</Link></li>
                 <li><Link className='p-8 text-xl' to='/' >Home</Link></li>
                 <li><Link className='p-8 text-xl' to='/About' >About Us</Link></li>
                 <li><i className="fa-solid fa-envelope"></i><Link className='p-8 text-xl' to='/Contact' >Contact Us</Link> </li>
                 <li><i className='fas fa-shopping-cart' ></i><Link className='p-8 text-xl' to='/Cart' >Cart</Link> </li>
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
