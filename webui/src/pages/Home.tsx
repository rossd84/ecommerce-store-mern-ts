import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='text-3xl font-bold'>Home</div>
      <Link to={'/cart'}>Cart</Link>
    </>

  )
}

export default Home