import {useState, useEffect} from 'react'
import { FETCH_MENU_URL } from '../Config';

// custom Hook
const useRestaurant = (id) => {
    // state variable
    const [restaurant, setRestaurant] =useState(null); 
    const [restaurantMenu, setRestaurantMenu] =useState({});
    
    //get data from API
    useEffect(()=> {
        getRestaurantInfo();
    },[])

    async function getRestaurantInfo(){
        const data= await fetch(FETCH_MENU_URL + id)
        const json= await data.json();
        setRestaurant(json?.data?.cards[2]?.card?.card?.info);
        setRestaurantMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards)
        // console.log(json);
        // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards);
    }

    //return data
    return {restaurant, restaurantMenu};
}

export default useRestaurant