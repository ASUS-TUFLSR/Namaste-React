import React from 'react';
import { useState, useEffect } from 'react';
import Loader from './Loader';
import { useParams } from "react-router-dom"
import { ITEM_IMG_ID, MENU_API } from '../utils/constant';

const RestaurantMenu = () => {


  const [resInfo, setResInfo] = useState(null);

  const { resId}  = useParams();

    useEffect(() => {
          fetchMenu();    
        }, []);

        const fetchMenu = async () =>{
            const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=" + resId);
            
            const json = await data.json();

            console.log(json);
            setResInfo(json.data);
        }

        if (resInfo === null) return <Loader/>;

        //  const { text } = resInfo?.cards[0]?.card?.card?.text;
        //  console.log(text)

         const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
       
         console.log(itemCards);

    

    return  (
    <div className="menu" style={{padding:"12px"}} >
           <h2>{resInfo?.cards[0]?.card?.card?.text}</h2>
           <h5>{resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</h5>
           <ul>
            <h3>Menu :</h3>
            {itemCards.map(item => <li key={item.card.info.id} >{item.card.info.name} - ₹{item.card.info.price/100} </li>)}
           </ul>
           <ul>
            <li><h5>Cost for Two: ${resInfo?.cards[2]?.card?.card?.info?.costForTwo/100}</h5></li>
            <li>Delivery Time<h5>{resInfo?.cards[2]?.card?.card?.info?.sla?.deliveryTime}mins</h5></li>
        
           </ul>
           
    </div>
    );
}

export default RestaurantMenu;