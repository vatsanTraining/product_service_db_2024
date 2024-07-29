import "./App.css";
import "./style.css";
import Header from "./Header";
import NavBar from "./NavBar";
function App() {
  const product = {
    productName: "Sony Tv",
    ratePerUnit: 45000,
  };
  const offers = ["Independence Day Offer 15%", "New User 10%"];
  const linkList = [
    { link: "/home", linkText: "Home" },
    { link: "/product", linkText: "Product" },
    { link: "/offices", linkText: "Offices" },
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
