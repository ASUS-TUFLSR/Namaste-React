import React from 'react'
import { LOGO_URL } from '../utils/constant'
import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import Grocery from './Grocery';
import UserContext from '../utils/UserContext';



const Header = () => {

  const {LoggedInUser} = useContext(UserContext);


  const [btnNameReact, setbtnNameReact] = useState("Login");
  const [btnName, setNameReact] = useState("Ordero");
  
  useEffect(() => {
    
  },[])

  // const onlineStatus = useInternetStatus();

  
  
    return (
        <div className=" flex justify-between bg-gray-50 shadow-2xl mb-14">
             <div className="flex  items-center p-2" >
                <Link to='/'><img className="w-36 rounded-full"
                 src={LOGO_URL}/> </Link>
                <div className='p-1' > {btnName}</div>
                 </div>

           <div className="flex items-center">
               <ul className='flex p-8 items-center' >
                {/* <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li> */}
                <li><Link className='p-8 text-xl' to='/Grocery' >GroceryMart</Link></li>
                 <li><Link className='p-8 text-xl' to='/' >Home</Link></li>
                 <li><Link className='p-8 text-xl' to='/About' >About Us</Link></li>
                 <li><Link className='p-8 text-xl' to='/Contact' >Contact Us</Link> </li>
                 <li><Link className='p-8 text-xl' to='/Cart' >Cart</Link> </li>
                 <li className='btn btn-light my-2 m-1 p-2'
                 onClick={()=>{
                  btnNameReact === "Login" ? setbtnNameReact("SignUp") : setbtnNameReact("Login") ;
                  btnName === "Ordero" ?  setNameReact("Tabemono") :  setNameReact("Ordero");
                 }}
                 >{btnNameReact}</li>
                 <li className='text-black font-black' >{LoggedInUser}</li>
               </ul>
             </div>
        
        </div>
    )
}

export default Header
