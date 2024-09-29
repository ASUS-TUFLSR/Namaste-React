import React from "react";
import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import {addItem} from '../utils/cartSlice'

const ItemList = ({items}) => {
   
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
     dispatch(addItem(item))
  }; 

   
    return <div>
       {items.map((item) => (
        <div 
          data-testid="foodItems"
           key={item.card.info.id} className="p-2 m-2 border-b-2 text-left flex justify-between " >
          <div className="w-9/12" >
            <div className="py-2 text-black-900 font-black" >
                <span>• {item.card.info.name}</span>
                <span>- ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
             </div>
             <p className="text-xs" >{item.card.info.description}</p>
             </div>
             <div className="w-3/12 p-4  text-center">
             <div >
            <img className="rounded-lg w-full" src={CDN_URL + item.card.info.imageId}/>
            <button className="w-20 font-black text-base text-green-400 bg-white p-1" 
            onClick={() => handleAddItem(item)}
              >Add +  </button>
              
              </div>
            </div>

        </div>
       ))}
    </div>
    
    
}

export default ItemList;