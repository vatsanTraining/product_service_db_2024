import "./App.css";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const product ={
    productName:'Sony Tv',
    ratePerUnit:45000
  }
  const offers =["Independence Day Offer 15%","New User 10%"]

  return (
    <div className="App">
      <Header></Header>
      <Content element={product} offers={offers}></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
