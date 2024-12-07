import { useDispatch, useSelector } from 'react-redux'
import FoodItem from '../Component/FoodItem'
import { clearCart } from '../Utils/cartSlice';
import CartEmpty from './CartEmpty';
import { MdDelete } from 'react-icons/md';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items)
  const price = useSelector(store => store.cart.totalPrice)
  // console.log(cartItems);

  const dispatch = useDispatch();

  const emptyCart = () =>{
    dispatch(clearCart());
  };
  
  return (cartItems.length===0) ? <CartEmpty/> : (
    <div className='m-2 p-2 w-8/12 mx-auto flex'>
      <div className='container mx-auto p-4'>
        <span className='flex mb-2'>
          <h1 className='text-3xl font-semibold mx-2 mb-4'>Your Cart- {cartItems.length}</h1>
          <button>
            <MdDelete className='mx-8 size-7 -mt-3' onClick={()=>emptyCart()}/>
          </button>
        </span>
        <div className="shadow-xl rounded-lg overflow-hidden">
          <div className='p-4'>
            {
              cartItems.map((item) => {
                return <FoodItem key={item.id} {...item}/>
              })
            }
          </div>
        </div>
      </div>
      <div className='w-56 h-40 m-2 shadow-xl rounded-lg'>
            <h1 className='text-3xl mx-2 font-semibold mt-3'>Bill</h1>
            <p className='mx-2 mt-1'>Total Amount- Rs {price}</p>
            <button className='text-white font-medium hover:bg-slate-800 bg-black m-2 p-2 rounded-md'>Checkout</button>
      </div>
    </div>
  )
}

export default Cart