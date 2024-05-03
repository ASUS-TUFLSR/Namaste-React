import React from 'react'
import RestaurantCard from './RestaurantCard'
import { resList } from '../utils/mockData'
import {Row, Col} from 'react-bootstrap'
import { useState, useEffect } from 'react'


  
const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    useEffect(()=>{
     fetchData();
    }, []);

    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();

      console.log(json);
      // setListOfRestaurants(json.data.cards);
    }

    return (
        <>
        <Col><button className='btn btn-dark' onClick={() => {
          const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 3.9 );
           setListOfRestaurants(filteredList);
           console.log(filteredList)
        }} >
          Filter <i className="fas fa-search"></i></button>
             
           </Col>
         <Row>
            
    {listOfRestaurants.map((restaurant) => (
         <Col key={restaurant.info.id} sm={12} md={6} lg={4} xl={3} > 
        <RestaurantCard resData={restaurant}/>
         </Col>
    ))}
       
    </Row> 
         </>
        // <div className="body" >
        //     <div className="search">Search</div>
        //      <div className="res-container">
        //         {
        //           resList.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
        //         }
        //      </div>
        // </div>
    )
}

export default Body
