import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
        <Link className="btn-link" to={'/'}>Home</Link> |
        <Link className="btn-link" to={'/projects'}>Projects</Link> |
    </div>
  )
}

export default Nav
