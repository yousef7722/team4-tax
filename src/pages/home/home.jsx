import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/contact">Contact</Link>
      <br />
      <Link to="/singleblog">single blog</Link>
      <br />
      <Link to="/userdashboard">user dashboard services</Link>
      <br />
      <Link to="/userdashboard/papers">user dashboard papers</Link>
    </div>
  )
}

export default Home