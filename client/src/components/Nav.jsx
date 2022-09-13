import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
        <span><Link className="btn-link" to={'/'}>Home</Link> </span>
        <span><Link className="btn-link" to={'/projects'}>Projects</Link></span> 
    </div>
  )
}

export default Nav
