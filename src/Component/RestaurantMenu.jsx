import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../Config';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
  // used to read dynamic URL
  const {id} = useParams();

  const [restaurant, setRestaurant] =useState(null); 
  const [restaurantMenu, setRestaurantMenu] =useState({});

  useEffect(()=> {
    getRestaurantInfo();
  },[])

  async function getRestaurantInfo(){
    const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=" + id)
    const json= await data.json();
    setRestaurant(json?.data?.cards[2]?.card?.card?.info);
    setRestaurantMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards)
    // console.log(json);
    // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards);

  }
  
  return (!restaurant) ? (
      <Shimmer/>
  ) :(
    <div className='menu'>
        <div className='card'>
          <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId}/>  
          <h2>{restaurant?.name}</h2>
          <h3>Restaurant id: {id}</h3>
          {/* <h3>{restaurant?.cuisines.join(' , ')}</h3> */}
          <h3>{restaurant?.locality + ", " + restaurant?.city}</h3>
        </div>
        <div >
          <h1>Menu</h1>
          <ul>
              {Object.values(restaurantMenu).map((item) => (
                  <li key={item?.card?.info?.id}>{item?.card?.info?.name} </li>
              ))}
          </ul>
        </div>
    </div>
  )
}

export default RestaurantMenu