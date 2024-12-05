import React, { useContext, useState } from 'react' 
import { Link } from 'react-router-dom';
import UserContext from '../Utils/UserContext';

const Title = () => {
    return (
        <h1 className='text-3xl m-5'>Food Villa</h1>
    )
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const {user} = useContext(UserContext);
  return (
    <div className='flex justify-between bg-orange-300 shadow-md m-1'>
        <Title />
        <div className='place-content-center'>
            <ul className='flex text-lg space-x-3'>
                <Link to='/' className='py-8'><li>Home</li></Link>
                <Link to='/about' className='py-8'><li>About</li></Link>
                <Link to='/contact' className='py-8'><li>Contact</li></Link>
                <Link to='/instamart' className='py-8'><li>Instamart</li></Link>
                <Link to='/cart' className='py-8'><li>Cart</li></Link>
            </ul>
        </div>
        <div className='place-content-end'>
            <span className='text-blue-800 font-bold' >{user.name}</span>
            { isLoggedIn ? 
                <button className='text-white font-medium bg-slate-800 hover:bg-black m-6 p-2 rounded-md' onClick={()=> setIsLoggedIn(false)}>Logout</button> : 
                <button className='text-white font-medium bg-slate-800 hover:bg-black m-6 p-2 rounded-md' onClick={()=> setIsLoggedIn(true)}>Login</button>
            }
        </div>
    </div>
  )
}

export default Header