import React from 'react'
import Link from './Link'

const NavBar = ({linkList}) => {
  return (
    <div>
        <Link links={linkList}></Link>
    </div>
  )
}

export default NavBar