import React from 'react'
import { Link } from 'react-router-dom'

const RouteLinks = ({ links }) => {
    const createElement = (element, idx) => {
        return (
          <Link key={idx} to={element.link} className="link">
            {element.linkText}
          </Link>
        );
      };
    
      return links.map(createElement)
  
}

export default RouteLinks