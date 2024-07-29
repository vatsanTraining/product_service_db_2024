import React from "react";

const Link = ({ links }) => {
  const createElement = (element, idx) => {
    return (
      <a key={idx} href={element.link}>
        {element.linkText}
      </a>
    );
  };

  return links.map(createElement);
};

export default Link;
