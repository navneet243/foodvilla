import {useState, useEffect} from 'react'

const useAllRestaurant = () => {

  const [filterRestaurants, setFilterRestaurants]= useState([]);
  const [allRestaurants, setAllRestaurants]= useState([]);

  useEffect(()=> {
    //Api Call
    getRestaurants();
  },[])

  async function getRestaurants() {
    try{
      const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
      const json= await data.json();
      // console.log(json);
      setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilterRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    } catch(error){
      console.log(error);
      
    }
  }
  return {filterRestaurants, allRestaurants, setFilterRestaurants}
}

export default useAllRestaurant