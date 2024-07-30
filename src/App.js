import "./App.css";
import "./style.css";
import Header from "./Header";
import NavBar from "./NavBar";
import TableContent from "./TableContent";
import OfficeContext from "./OfficeContext";
function App() {
  const linkList = [
    { link: "/home", linkText: "Home" },
    { link: "/products", linkText: "Product" },
    { link: "/offices", linkText: "Offices" },
    { link: "/orders", linkText: "Order" },
    { link: "/context", linkText: "Context API" },
    { link: "/redux", linkText: "Redux Example" }
  ];

  return (
    <div className="App">
      <Header
        majheading={"Siva Stores"}
        minheading={"Nashik"}
        renderImage={true}
      ></Header>
      <NavBar linkList={linkList}></NavBar>
    </div>
  );
}

export default App;
