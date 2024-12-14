import React, {useContext} from "react";
import { IMG_CDN_URL } from "../Config"
import UserContext from "../Utils/UserContext";

//4th way
const RestaurantCard = ({cloudinaryImageId, name, cuisines, areaName, avgRating}) => {
    const {user} = useContext(UserContext);
    return (
        <div className='w-72 h-80 mx-3 my-4 p-2 shadow-md bg-white rounded-md'>
            <img className="w-64 h-44 rounded-lg" src={IMG_CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold">{name}</h3>
            <h4 className="font-semibold">{cuisines.slice(0,3).join(" , ")}</h4>
            <h4 className="font-normal">{areaName}</h4>
            <h5 className="font-normal italic">{avgRating} stars</h5>
            <h6 className="flex place-content-end font-semibold">{user.name}</h6>
        </div>
    )
}

export default RestaurantCard;

//passing props 1st way
// const RestrauntCard = (props) => {
//     console.log(props);
//     return (
//         <div className='card'>
//             <img src={props.restraunt.data?.image} />
//             <h2>{props.restraunt.data?.name}</h2>
//             <h3>{props.restraunt.data?.cusines.join(" , ")}</h3>
//             <h3>{props.restraunt.data?.price}</h3>
//             <h4>{props.restraunt.data?.rating} stars</h4>
//         </div>
//     )
// }

// 2nd way 
// const RestrauntCard = ({restraunt}) => {
//     return (
//         <div className='card'>
//             <img src={restraunt.data?.image} />
//             <h2>{restraunt.data?.name}</h2>
//             <h3>{restraunt.data?.cusines.join(" , ")}</h3>
//             <h3>{restraunt.data?.price}</h3>
//             <h4>{restraunt.data?.rating} stars</h4>
//         </div>
//     )
// }

// 3rd way
// const RestrauntCard = ({restraunt}) => {
//     const { image, name, cusines, price, rating} = restraunt.data;
//     return (
//         <div className='card'>
//             <img src={image} />
//             <h2>{name}</h2>
//             <h3>{cusines.join(" , ")}</h3>
//             <h3>{price}</h3>
//             <h4>{rating} stars</h4>
//         </div>
//     )
// }

