import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {CDN_URL} from '../utils/constant'

const RestaurantCard = (props) => {
    const { resData } = props

    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.info
     

    return (

   <div className='m-4 p-4 w-[250px] bg-slate-50 rounded-2xl' >
    <img className='rounded-2xl' src={CDN_URL + cloudinaryImageId} />
    <h3 className='font-bold py-4 text-lg' >{name}</h3>
    <h4>{cuisines.join(", ")}</h4>
    <h4>{avgRating + " starts"}</h4>
    <h4>{costForTwo}</h4>
    
   </div>

    //     <Card className='res-card' >
    //   <Card.Img className='res-logo' src={  CDN_URL + cloudinaryImageId}     />
    //   <Card.Body className='el-card' >
    //     <Card.Title><span>{name}</span></Card.Title>
    //     <>
    //          <p>{cuisines.join(", ")}</p>
    //         <p>{avgRating + " stars"}</p>
    //         <p>{costForTwo}</p>
    //     </>
       
    //   </Card.Body>
    // </Card>
     )
}


export default RestaurantCard
