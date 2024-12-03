import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const error= useRouteError();
  return (
    <>
    <div>Oops... Something went Wrong...</div>
    <h2>{error.status + " : " + error.statusText}</h2>
    </>
  )
}

export default Error