import React from 'react'
import RouteLinks from './RouteLinks'

const NavBar = ({linkList}) => {
  return (
    <div>
        <RouteLinks links={linkList}></RouteLinks>
    </div>
  )
}

export default NavBar