import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../Config';
import Shimmer from './Shimmer';
import useRestaurant from '../Utils/useRestaurant';

const RestaurantMenu = () => {
  // used to read dynamic URL
  const {id} = useParams();

  // custom Hook
  const {restaurant, restaurantMenu} =useRestaurant(id);
  console.log(restaurantMenu);
  
  return (!restaurant) ? (
      <Shimmer/>
  ) :(
    <div className='bg-orange-300 m-1 flex'>
        <div className='w-56 h-[380px] m-2 p-2 shadow-md bg-orange-200'>
          <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId}/>  
          <h2>{restaurant?.name}</h2>
          <h3>Restaurant id: {id}</h3>
          {/* <h3>{restaurant?.cuisines.join(' , ')}</h3> */}
          <h3>{restaurant?.locality + ", " + restaurant?.city}</h3>
        </div>
        <div >
          <h1 className='font-bold text-3xl p-2'>Menu</h1>
          <ul>
              {Object.values(restaurantMenu).map((item) => (
                  <li className='px-2 text-md' key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs {item?.card?.info?.price/100}</li>
              ))}
          </ul>
        </div>
    </div>
  )
}

export default RestaurantMenu