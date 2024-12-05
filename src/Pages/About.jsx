import React, { useContext } from 'react'
import UserContext from '../Utils/UserContext'

const About = () => {
  const {user} = useContext(UserContext)
  return (
    <>
      <div>
        <h1>About Us</h1>
        <p>This is the Food Villa web application to order tasty and healthy food!</p>
        <p>Developed by {user.name} - {user.email}</p>
      </div>
    </>
  )
}

export default About
