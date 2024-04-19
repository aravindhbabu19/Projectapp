import React from 'react'
import { Link } from 'react-router-dom'

const Postlayout = () => {
  return (
    <div>
        <Link to='/New/1'>Post1</Link>
        <Link to='/New/2'>Post2</Link>
        <Link to='/New/3'>Post3</Link>
        <outlet />
    </div>
  )
}

export default Postlayout