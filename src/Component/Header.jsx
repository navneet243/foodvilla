import React, { useContext, useState } from 'react' 
import { Link } from 'react-router-dom';
import UserContext from '../Utils/UserContext';
import { useSelector } from 'react-redux';
import logo from '../Assets/logo.png'

const Title = () => {
    return (
        <img className='w-20 m-2' src={logo}/>
    )
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const {user} = useContext(UserContext);

  const cartItems = useSelector(store => store.cart.items); 
//   console.log(cartItems);

  return (
    <div className='flex justify-between bg-orange-300 shadow-md m-1'>
        <Title />
        <div className='place-content-center'>
            <ul className='flex text-lg space-x-3'>
                <Link to='/' className='py-8'><li>Home</li></Link>
                <Link to='/about' className='py-8'><li>About</li></Link>
                <Link to='/contact' className='py-8'><li>Contact</li></Link>
                <Link to='/instamart' className='py-8'><li>Instamart</li></Link>
                <Link to='/cart' className='py-8'><li>Cart- {cartItems.length} </li></Link>
            </ul>
        </div>
        <div className='place-content-end'>
            <span className='text-blue-800 font-bold' >{user.name}</span>
            { isLoggedIn ? 
                <button className='text-white font-medium hover:bg-slate-800 bg-black m-6 p-2 rounded-md' onClick={()=> setIsLoggedIn(false)}>Logout</button> : 
                <button className='text-white font-medium hover:bg-slate-800 bg-black m-6 p-2 rounded-md' onClick={()=> setIsLoggedIn(true)}>Login</button>
            }
        </div>
    </div>
  )
}

export default Header