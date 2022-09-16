import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

function Nav() {
  return (
    <nav>
        <ul>
            <li> <Link to="/" >Blogs</Link> </li>
            <li> <Link to="/addBlog" >Write Blogs</Link> </li>
            {/* <li> <Link to="/updateBlog" >Update Blogs</Link> </li> */}
            <li> <Link to="/updateBlog">Update Blog</Link>   </li>
        </ul>
    </nav>
  )
}

export default Nav