import React from "react";
import { IMG_CDN_URL } from "../Config"

//4th way
const RestaurantCard = ({cloudinaryImageId, name, cuisines, areaName, avgRating}) => {
    return (
        <div className='card'>
            <img src={IMG_CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{areaName}</h4>
            <h5>{avgRating} stars</h5>
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

