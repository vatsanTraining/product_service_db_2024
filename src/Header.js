import React from "react";
import NavBar from "./NavBar";
// function Header({majheading,minheading}){}
import Image from "./Image";
function Header(props) {
  const { majheading, minheading ,renderImage} = props;
  return (
    <div className="container">
      <div className="child">
      <Image url={"logo.jpeg"} altText={"Company Logo"} renderImage={renderImage}></Image>

      </div>
      <div className="child">
      <h1 className="right">{props.majheading}</h1>

      </div>

    </div>
  );
}

export default Header;
