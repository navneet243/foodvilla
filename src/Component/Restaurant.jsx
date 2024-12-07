import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../Config';
import { FaStar } from 'react-icons/fa';
import Shimmer from './Shimmer';
import useRestaurant from '../Utils/useRestaurant';
import RestaurantMenu from './RestaurantMenu';


const Restaurant = () => {
  // used to read dynamic URL
  const {id} = useParams(); 

  // custom Hook
  const {restaurant, restaurantMenu} =useRestaurant(id);
  // console.log(restaurantMenu);

  const finalRestaurantMenu = Object.values(restaurantMenu).filter((restaurant)=> 
       restaurant?.card?.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  // console.log(finalRestaurantMenu)
   
  return (!restaurant) ? (
      <Shimmer/>
  ) :(
    <div>
      <div className='p-2 w-2/4 mx-auto'>
        <div>
          <div className='flex m-1 rounded-lg drop-shadow-lg text-center'>
            <img className='w-24 h-24 p-2 mx-2'  src={IMG_CDN_URL + restaurant?.cloudinaryImageId}/>  
            <h1 className='font-bold text-3xl mt-4'>{restaurant?.name}</h1>
          </div>
          <div className="bg-orange-300 rounded-2xl p-4 ">
            <div className='border-2 bg-orange-100 p-4 rounded-2xl'>
              <div className='flex font-semibold space-x-2'>
                <i className="text-green-500 mt-1"><FaStar/></i>
                <span> {restaurant?.avgRating} ({restaurant?.totalRatingsString})</span>
                <span> . {restaurant?.costForTwoMessage} </span>
              </div>
              <p className="text-orange-600 font-semibold mb-2 text-sm">{restaurant?.cuisines.join(',')}</p>
              <div className='font-bold space-x-2 text-sm'>
                <span>Outlet</span>
                <span className='font-normal'>{restaurant?.locality + ", " + restaurant?.city}</span>
              </div>
              <p className=' font-semibold text-sm'>{restaurant.sla.minDeliveryTime}-{restaurant.sla.maxDeliveryTime}</p>
            </div>
          </div>
          <div>
            {
              finalRestaurantMenu.map((item,index) => {
                return (<RestaurantMenu {...item} key={index}/>)
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Restaurant