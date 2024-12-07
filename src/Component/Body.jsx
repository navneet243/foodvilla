import React, {useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer';
import { filterData } from '../Utils/helper';
import useOnline from '../Utils/useOnline';
import useAllRestaurant from '../Utils/useAllRestaurant';
import UserContext from '../Utils/UserContext';

const Body = () => {
  // useState Hook
  const [searchInput, setSearchInput]= useState(""); 
  const {user, setUser} = useContext(UserContext); // Context
  
  // custom hook
  const {filterRestaurants, allRestaurants, setFilterRestaurants} = useAllRestaurant();
  const online= useOnline();
  if(!online){
      return <h1> 🔴Please Check Your Internet Connection, you are currently Offline!</h1>;
  }

  // not render component (early return)
  if(!allRestaurants) return null;
  
  //conditional rendering
  return (allRestaurants?.length===0) ? <Shimmer/> : 
  (
    <>
    <div className='p-2 bg-orange-300 m-1'>
        <input 
            type='text' 
            className='rounded-md justify-center text-center px-2'
            placeholder='Search food' 
            value={searchInput}
            onChange={(e)=>{setSearchInput(e.target.value)}}
        />
        <button 
            className='text-white bg-slate-800 hover:bg-black mx-3 px-2 rounded-md' 
            onClick={()=>{
               // filter restaurants
               const data= filterData(searchInput, allRestaurants);
               // update restaurants 
               setFilterRestaurants(data);
            }}
        >
            Search
        </button> 
        <input 
          value={user.name} 
          className='rounded-md text-left px-2'
          onChange={(e)=>setUser({
            name: e.target.value,
            email: "nav@gmail.com",
          })}
        />
    </div>
    <div className='flex flex-wrap bg-orange-300'>
        {
            filterRestaurants.map((restaurant)=> {
                return <Link to={'/restaurant/' + restaurant.info.id} key={restaurant.info.id}>
                        <RestaurantCard {...restaurant.info}/>
                       </Link>
            })
        }
    </div>
    </>
  )
}

export default Body