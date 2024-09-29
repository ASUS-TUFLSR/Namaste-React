import React, { useContext } from 'react'
import {CDN_URL} from '../utils/constant'
import UserContext from '../utils/UserContext';

const RestaurantCard = (props) => {
    const { resData } = props

    const {LoggedInUser} = useContext(UserContext);

    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.info
     

    return (

   <div data-testid="resCard"
    className='m-4 p-4 w-[250px] bg-slate-100 rounded-2xl' >
    <img className='rounded-2xl' src={CDN_URL + cloudinaryImageId} />
    <h3 className='font-bold py-4 text-lg' >{name}</h3>
    <h4  className='p-1'  >{cuisines.join(", ")}</h4>
    <h4 className='p-1' >{avgRating + " starts"}</h4>
    <h4  className='p-1' >{costForTwo}</h4>
    {/* <h4  className='p-1' >{LoggedInUser}</h4> */}
   </div>

  )
}

export default RestaurantCard
