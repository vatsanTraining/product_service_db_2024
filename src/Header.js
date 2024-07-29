import React from "react";
import NavBar from "./NavBar";
// function Header({majheading,minheading}){}
import Image from "./Image";
function Header(props) {
  const { majheading, minheading ,renderImage} = props;
  return (
    <div>
      {/* <h1>{props.majheading}</h1> */}
      <Image url={"logo.jpeg"} altText={"Company Logo"} renderImage={renderImage}></Image>
    </div>
  );
}

export default Header;
