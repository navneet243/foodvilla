import React, { useState } from 'react' 
import { Link } from 'react-router-dom';

const Title = () => {
    return (
        <h1>Food Villa</h1>
    )
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className='header'>
        <Title />
        <div className='nav-items'>
            <ul>
                <Link to='/' className='link'><li>Home</li></Link>
                <Link to='/about' className='link'><li>About</li></Link>
                <Link to='/contact' className='link'><li>Contact</li></Link>
                <Link to='/cart' className='link'><li>Cart</li></Link>
            </ul>
        </div>
        { isLoggedIn ? 
            <button onClick={()=> setIsLoggedIn(false)}>Logout</button> : 
            <button onClick={()=> setIsLoggedIn(true)}>Login</button>
        }
    </div>
  )
}

export default Header