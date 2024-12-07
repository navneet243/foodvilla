import { EMPTY_CART_URL } from "../Config"
import { Link } from "react-router-dom"

const CartEmpty = () => {
  return (
    <div className="container m-auto p-4 flex flex-col items-center justify-center">
        <img src={EMPTY_CART_URL} alt="empty-cart" className="w-72 h-64"/>
        <h2 className="font-semibold font-[ProximaNova, arial, Helvetica Neue, sans-serif] text-xl text-[#535665] mt-3">Your cart is empty</h2>
        <p className="text-sm text-[#7e808c]">You can go to the home page to view more restaurants</p>
        <Link to='/'>
            <button className="bg-orange-600 text-white font-semibold mt-7 px-5 py-3"> SEE RESTAURANTS NEAR YOU</button>
        </Link>
    </div>
  )
}

export default CartEmpty