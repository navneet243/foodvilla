import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa"
import { IMG_CDN_URL } from "../Config"
import {addItem} from '../Utils/cartSlice'

const Menu = (props) => {
  const {name, description, ratings, price, defaultPrice, imageId} = props;

  const dispatch = useDispatch();

  const addFoodItems = (item) => {
    dispatch(addItem(item))
  }
  
  return (
    <div className="flex border-orange-200 border-b-2 justify-between items-center relative">
      <div className="py-4 px-2 my-4 w-9/12">
        <div>
          <h1 className="font-semibold text-base">{name}
            <span className="ml-2">
              <button className="font-semibold border border-x-gray-300 rounded-md hover:bg-gray-400 text-green-700"
                onClick={()=>addFoodItems(props)}
              >
                ADD
              </button>
            </span>
          </h1>
          <p className="font-bold text-sm">Rs {price/100 || defaultPrice/100}</p>
          <div className="flex">
            <i className="text-green-500 mt-1 size-min"><FaStar/></i>
            <p className="font-semibold text-sm px-1"> {ratings.aggregatedRating.rating} ({ratings.aggregatedRating.ratingCountV2})</p>
          </div>
          <span className="font-light text-base">{description}</span>
        </div>
      </div>
        {imageId && (<img className="border-2 border-gray-300 w-2/12 h-32 object-cover rounded-md" src={IMG_CDN_URL+imageId}/>)}
    </div>
  )
}

export default Menu