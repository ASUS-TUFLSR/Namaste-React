import React, { useState } from 'react';
import Loader from './Loader';
import { useParams } from "react-router-dom"
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCatergory from './RestaurantCatergory';

const RestaurantMenu = () => {

    const {resId}  = useParams();
    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

   


    if (resInfo === null) return <Loader/>;

     const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info
   

     //const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
   // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === 
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" )
     //console.log(categories);

    return  (
    <div className="text-center p-3 " >
           <h2 className='font-extrabold text-lg' >{name}</h2>
           <p>{cuisines.join(", ")} : {costForTwoMessage}</p>
           
            {categories.map((category, index) =>
                 (<RestaurantCatergory  
                     key={category?.card?.card?.title} 
                     data={category?.card?.card} 
                     showItems={index === showIndex ? true : false}
                     setShowIndex={() => setShowIndex(index)}
                     />))}
           
    </div>
    );
   
}

export default RestaurantMenu;