import react from 'react'
import { LOGO_URL } from '../utils/constant'
import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import Grocery from './Grocery';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
import useInternetStatus from '../utils/useInternetStatus';



const Header = () => {

  const {LoggedInUser} = useContext(UserContext);


  const [btnNameReact, setbtnNameReact] = useState("Login");
  const [btnName, setNameReact] = useState("Ordero");
  
  useEffect(() => {
    
  },[])

  //Subscribing to the store via/using Selector
 const cartItems = useSelector((store) => store.cart.items);
 console.log(cartItems)

   const onlineStatus = useInternetStatus();

   const nameChange = () => {
         btnNameReact === "Login" ? setbtnNameReact("SignUp") : setbtnNameReact("Login") ;
                  btnName === "Ordero" ?  setNameReact("Tabemono") :  setNameReact("Ordero");
   };
  

    return (
        <div className=" flex justify-between bg-gray-50 shadow-2xl mb-14">
             <div className="flex  items-center p-2" >
                <Link to='/'><img className="w-36 rounded-full"
                 src={LOGO_URL}/> </Link>
                <div className='p-1' > {btnName}</div>
                 </div>

           <div className="flex items-center">
               <ul className='flex p-1 items-center' >
                <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                <li>
                  <Link className='p-2 m-2 text-lg' to='/Grocery' >GroceryMart</Link>
                  </li>
                 <li>
                  <Link className='p-2 m-2 text-lg' to='/' >Home</Link>
                  </li>
                 <li>
                  <Link className='p-2 m-2 text-lg' to='/About' >About Us</Link>
                  </li>
                 <li>
                  <Link className='p-2 m-2 text-lg' to='/Contact' >Contact Us</Link>
                   </li>
                 <li className='p-2 m-2 text-lg' >
                  <Link  to='/Cart' >Cart({cartItems.length}items)</Link> 
                  </li>
                 <li className='btn btn-light my-2 m-1 p-2'
                 onClick={nameChange}
                 >{btnNameReact}</li>
                 <li className='text-black font-black' >{LoggedInUser}</li>
               </ul>
             </div>
        
        </div>
    )
}

export default Header
