import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import MenuItem from "./MenuItem";

const RestaurantMenu = (props) => {
    const {title, itemCards} = props?.card?.card;
    const [showItems, setShowItems]= useState(true);
    
    return (
        <div className="p-4 m-4 shadow-xl cursor-pointer">
            <div onClick={()=>setShowItems(!showItems)}>
                <div className="flex justify-between">
                    <span className="font-bold">{title} ({itemCards.length})</span>
                    <span>{showItems? <IoIosArrowUp className="size-6"/> :  <IoIosArrowDown className="size-6"/>}</span>
                </div>
            </div>
            <div>
            {showItems && (
                <div>
                    {itemCards.map((item) => {
                            return <MenuItem {...item?.card?.info} key={item?.card?.info.id}/>
                    })}
                </div>
            )}
            </div>
        </div>
    )
}

export default RestaurantMenu