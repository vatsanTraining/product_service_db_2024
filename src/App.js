import "./App.css";
import "./style.css";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";
import TableContent from "./TableContent";
import ShowProduct from "./ShowProduct";
import AddProduct from "./AddProduct";
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
      <Content element={product} offers={offers}></Content>
      <TableContent></TableContent>
      <ShowProduct></ShowProduct>
      <AddProduct></AddProduct>
      <Footer></Footer>
    </div>
  );
}

export default App;
