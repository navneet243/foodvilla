import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer';

function filterData(searchInput, restaurants){
    const filterData = restaurants.filter((restaurant)=>
        restaurant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
    );
    return filterData;
}

const Body = () => {
  // useState Hook
  const [searchInput, setSearchInput]= useState(""); 
  const [filterRestaurants, setFilterRestaurants]= useState([]);
  const [allRestaurants, setAllRestaurants]= useState([]);

  useEffect(()=> {
    //Api Call
    getRestaurants();
  },[])

  async function getRestaurants() {
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    const json= await data.json();
    // console.log(json);
    setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    
  }
  console.log("render");

  // not render component (early return)
  if(!allRestaurants) return null;
  
  //conditional rendering
  return (allRestaurants?.length===0) ? <Shimmer/> : 
  (
    <>
    <div className='search-container'>
        <input 
            type='text' 
            className='search-input'
            placeholder='Search food' 
            value={searchInput}
            onChange={(e)=>{setSearchInput(e.target.value)}}
        />
        <button 
            className='search-btn' 
            onClick={()=>{
               // filter restaurants
               const data= filterData(searchInput, allRestaurants);
               // update restaurants 
               setFilterRestaurants(data);
            }}
        >
            Search
        </button> 
    </div>
    <div className='restaurant-list'>
        {
            filterRestaurants.map((restaurant)=> {
                return <Link to={'/restaurant/' + restaurant.info.id} key={restaurant.info.id}>
                        <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>; 
                       </Link>
            })
        }
    </div>
    </>
  )
}

export default Body

// used before map to understand props

{/* <RestrauntCard restraunt={restrauntList[0]} />
<RestrauntCard restraunt={restrauntList[1]} />
<RestrauntCard restraunt={restrauntList[2]} />
<RestrauntCard restraunt={restrauntList[3]} /> 

<RestrauntCard {...restrauntList[4].data} /> 
<RestrauntCard {...restrauntList[7].data} /> 
<RestrauntCard {...restrauntList[5].data} /> */}