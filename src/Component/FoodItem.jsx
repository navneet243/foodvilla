import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../Config";
import { MdDelete } from "react-icons/md";
import { removeItem } from "../Utils/cartSlice";

const FoodItem = (props) => {
  const {name, imageId, price} = props;

  const dispatch = useDispatch();

  const removeFoodItem = (item) => {
    dispatch(removeItem(item))
  }

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <img
          src={IMG_CDN_URL + imageId}
          alt="Food"
          className="w-12 h-12 object-cover rounded"
        />
        <div className="ml-4">
          <span className="flex justify-between">
            <h2 className="text-lg font-semibold">{name}</h2>
            
          </span>
          <p className="text-gray-500">
            Price: {price / 100}
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <button onClick={()=> removeFoodItem(props)}><MdDelete className="size-5"/></button>
      </div>
    </div>
  );
};

export default FoodItem;