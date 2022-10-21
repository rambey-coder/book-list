import React from 'react'
import '../App'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
        <div>
            <h1>Book List</h1>
        </div>

        <div>
        <Link to='/favorites'>Your Fav</Link>
            <p></p>
        </div>
    </div>
  )
}

export default Navbar