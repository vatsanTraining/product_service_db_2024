import React from "react";
import NavBar from "./NavBar";
// function Header({majheading,minheading}){}

function Header(props) {
  const { majheading, minheading } = props;
  return (
    <div>
      <h1>{majheading}</h1>
      <h4>{minheading}</h4>
      {/* <h1>{props.majheading}</h1> */}
      <NavBar></NavBar>
    </div>
  );
}

export default Header;
