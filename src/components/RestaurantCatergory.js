import React, { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import ItemList from "./ItemList";

const RestaurantCatergory = ({data}) => {
   
   // console.log(data)

   // const [isOpen, setIsOpen] = useState(false);
    // <span onClick={() => {isOpen === true ? setIsOpen(false) : setIsOpen(true)}} className="m-2 
    //         font-bold text-lg">
    //         {data.title} ({data.itemCards.length})
    //         {!isOpen ? (<AiOutlineCaretDown className="h-8"/>):(<AiOutlineCaretUp className="h-8"/>)}
    //             </span>
   
    
   return( <div>
     {/* Header */}
         <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-3 rounded-lg">
              <div className="flex justify-between" >
                <span className="font-bold text-lg">
                  {data.title} ({data.itemCards.length})
                </span>
                <span><AiOutlineCaretDown/></span>
                </div>              
            
                   <ItemList items={data.itemCards} />       
         </div>
    </div>
    
   )
}

export default RestaurantCatergory;