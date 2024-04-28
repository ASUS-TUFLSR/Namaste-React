import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {CDN_URL} from '../utils/constant'

const RestaurantCard = (props) => {
    const { resData } = props

    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.info
     

    return (

        <Card className='res-card' >
      <Card.Img className='res-logo' src={  CDN_URL + cloudinaryImageId}     />
      <Card.Body className='el-card' >
        <Card.Title><p>{name}</p></Card.Title>
        <Card.Text>
             <>{cuisines.join(", ")}</>
            <>{avgRating + " stars"}</>
            <>{costForTwo}</>
        </Card.Text>
      
      </Card.Body>
    </Card>
        // <div className="res-card">
        //     <img className="res-logo" 
        //    alt="res-logo"
           
        //    src={  CDN_URL + cloudinaryImageId}
        //     />
        //     
            
        //   </div> 
     )
}


export default RestaurantCard
