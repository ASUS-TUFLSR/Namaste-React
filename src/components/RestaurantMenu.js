import React from 'react';
import Loader from './Loader';
import { useParams } from "react-router-dom"
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {

  const {resId}  = useParams();

    const resInfo = useRestaurantMenu(resId);

    

        if (resInfo === null) return <Loader/>;


         const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;



    return  (
    <div className="menu" style={{padding:"12px"}} >
           <h2>{resInfo?.cards[0]?.card?.card?.text}</h2>
           <h5>{resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</h5>
           <ul>
            <h3>Menu :</h3>
            {itemCards.map(item => <li key={item.card.info.id} >{item.card.info.name} - ₹{item.card.info.defaultPrice/100 || item.card.info.price/100} </li>)}
           </ul>
           <ul>
            <li><h5>Cost for Two: ${resInfo?.cards[2]?.card?.card?.info?.costForTwo/100}</h5></li>
            <li>Delivery Time<h5>{resInfo?.cards[2]?.card?.card?.info?.sla?.deliveryTime}mins</h5></li>
        
           </ul>
           
    </div>
    );
}

export default RestaurantMenu;