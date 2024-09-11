import React, { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import ItemList from "./ItemList";

const RestaurantCatergory = ({data, showItems, setShowIndex}) => {
   
   
   const [isOpen, setIsOpen] = useState(false);

   const handleClick = () => {
     // setShowItems(!showItems)
     setShowIndex();
   }
    
   return( <div>
     {/* Header */}
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-3 rounded-lg">
      <div className="flex justify-between cursor-pointer " onClick={handleClick} >
         <span className="font-bold text-lg" >
             {data.title} ({data.itemCards.length})
               </span>
                 <span onClick={() => {isOpen === true ? setIsOpen(false) : setIsOpen(true)}}>{!isOpen ? (<AiOutlineCaretDown className="h-8"/>):(<AiOutlineCaretUp className="h-8"/>)}</span>
               </div>              
             {showItems && <ItemList items={data.itemCards}  />}       
         </div>
    </div>
    
   )
}

  // console.log(data)

   
  
     // const [isOpen, setIsOpen] = useState(false);
    // <span onClick={() => {isOpen === true ? setIsOpen(false) : setIsOpen(true)}} className="m-2 
    //         font-bold text-lg">
    //         {data.title} ({data.itemCards.length})
    //         {!isOpen ? (<AiOutlineCaretDown className="h-8"/>):(<AiOutlineCaretUp className="h-8"/>)}
    //             </span>

export default RestaurantCatergory;