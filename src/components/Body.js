import React from 'react'
import RestaurantCard from './RestaurantCard'
import { resList } from '../utils/mockData'
import {Row, Col} from 'react-bootstrap'


  
const Body = () => {

    let listOfRestaurants = [
        {
            "info": {
              "id": "323526",
              "name": "Chinese Wok",
              "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
              "locality": "Chinchwad",
              "areaName": "Chinchwad",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "Chinese",
                "Asian",
                "Tibetan",
                "Desserts"
              ],
              "avgRating": 3.9,
              "parentId": "61955",
              "avgRatingString": "3.9",
              "totalRatingsString": "5K+",
              
            "cta": {
              "link": "https://www.swiggy.com/restaurants/chinese-wok-chinchwad-pune-323526",
              "type": "WEBLINK"
            }
        }
          },
          {
            "info": {
              "id": "611808",
              "name": "UBQ by Barbeque Nation",
              "cloudinaryImageId": "noc7ieivirqxtpujhsgl",
              "locality": "1st Phase",
              "areaName": "Hinjawadi",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "North Indian",
                "Barbecue",
                "Biryani",
                "Kebabs",
                "Mughlai",
                "Desserts"
              ],
              "avgRating": 3.9,
              "parentId": "10804",
              "avgRatingString": "3.9",
              "totalRatingsString": "100+",
              
            "cta": {
              "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-1st-phase-hinjawadi-pune-611808",
              "type": "WEBLINK"
            }
        }
          },
          {
            "info": {
              "id": "611807",
              "name": "Barbeque Nation",
              "cloudinaryImageId": "iydxtay1mnne2ktw7txe",
              "locality": "Global Highstreet Mall",
              "areaName": "Hinjawadi",
              "costForTwo": "₹600 for two",
              "cuisines": [
                "North Indian",
                "Barbecue",
                "Biryani",
                "Kebabs",
                "Mughlai",
                "Desserts"
              ],
              "avgRating": 3.6,
              "parentId": "2438",
              "avgRatingString": "3.6",
              "totalRatingsString": "100+",
              
            "cta": {
              "link": "https://www.swiggy.com/restaurants/barbeque-nation-global-highstreet-mall-hinjawadi-pune-611807",
              "type": "WEBLINK"
            }
          }
        }
    ];

    return (
        <>
        <Col><button className='btn btn-dark' onClick={() => {
            listOfRestaurants = listOfRestaurants.filter((res) => res.info.avgRating > 3.7 );
            console.log(listOfRestaurants)
        }} >
            Search <i class="fas fa-search"></i></button>
             
           </Col>
         <Row>
            
    {listOfRestaurants.map((restaurant) => (
         <Col key={restaurant.info._id} sm={12} md={6} lg={4} xl={3} > 
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
