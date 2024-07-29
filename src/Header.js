import React from "react";
import NavBar from "./NavBar";
// function Header({majheading,minheading}){}
import Image from "./Image";
function Header(props) {
  const linkList = [
    {link:"/home",linkText:"Home" },
    {link:"/product",linkText:"Product" },
    {link:"/offices",linkText:"Offices" },
    
  ]
  const { majheading, minheading } = props;
  return (
    <div>
      <h1>{majheading}</h1>
      <h4>{minheading}</h4>
      {/* <h1>{props.majheading}</h1> */}
      <Image url={"logo.jpeg"} altText={"Company Logo"}></Image>
      <NavBar></NavBar>
    </div>
  );
}

export default Header;
