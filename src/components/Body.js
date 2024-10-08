import React from 'react'
import RestaurantCard from './RestaurantCard'
import {Row, Col} from 'react-bootstrap'
import { useState, useEffect, useContext } from 'react'
import Loader from './Loader'
import { Link } from 'react-router-dom'
import useInternetStatus from '../utils/useInternetStatus'
import UserContext from '../utils/UserContext'


  
const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    const {LoggedInUser, setUserName} = useContext(UserContext); 
 

    useEffect(()=>{
     fetchData();
    }, []);

    const fetchData = async () => { 
      const data = await fetch('https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
      const json = await data.json();
      
      setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

   

    const onlineStatus = useInternetStatus();

    if(onlineStatus === false) return <h1>Looks like you are offline, please check your internet Connection</h1>
 

   if(listOfRestaurants.length === 0){
      return <Loader/>
    }
 
    return (
        <>
      <Col>        
        <div className='filter py-2' style={{display:"flex"}} >
          <button data-testid="topRestaurants" className='btn btn-dark' onClick={() => {
            const filteredList = filteredRestaurant.filter((res) => res.info.avgRating > 3.9 );
             setFilteredRestaurant(filteredList);
           }} >
          Top Rated Restaurants <i className="fas fa-search"></i></button>
          </div>

          <div className='search ' >
            <input data-testid="searchInput" type='text' className='border border-solid  border-8 border-slate-950 p-1' value={searchText} 
            onChange={(e) => {
                  setSearchText(e.target.value);
              
            }} />
            <button className='btn btn-dark my-3' style={{margin:"10px", lineHeight:"0.2rem"}}
              onClick={() => {
                
                const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredRestaurant(filteredRestaurant);
              
              }} 
            > Search</button>
            <label>UserName: </label>
            <input type='text' className='border border-black border-solid p-1' 
            value={LoggedInUser}
            onChange={(e) => setUserName(e.target.value)}/>
            
          </div>
          </Col>
       
         <Row>
            
    {filteredRestaurant.map((restaurant) => (
         <Col key={restaurant.info.id} sm={12} md={6} lg={4} xl={3} > 
       <Link to={"/restaurants/" + restaurant.info.id} ><RestaurantCard resData={restaurant}/></Link> 
        
         </Col>
    ))}
      
    </Row> 
         </>
    )
}

export default Body
