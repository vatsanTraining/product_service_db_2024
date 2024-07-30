import React from 'react'
import Content from './Content';

const Home = () => {
    const product = {
        productName: "Sony Tv",
        ratePerUnit: 45000,
      };
      const offers = ["Independence Day Offer 15%", "New User 10%"];
    
  return (
    <div>
        <Content element={product} offers={offers}></Content>
    </div>
  )
}

export default Home