import React from "react";
import Product from "./Product";
import "./home.css";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/41F4syCw54L._SX1500_.jpg"
          alt="products"
        />
        <div className="home__row">
          <Product
            id="15545451"
            title="the Learn Startup"
            price={20}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
          />
          <Product
            id="15545452"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beaterm Dough Hook and Whisk, 5 Litre Glass Bow"
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="15545453"
            title="Samsung LC49RG90SSUXEB 49' Curved LED GAMING Monitor"
            price={139.0}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
          />
          <Product
            id="15545454"
            title="Amazon Echo (3dr generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={99.0}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="15545455"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={599.0}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="15545456"
            title="Samsung LC49RG90SSUXEB 49' Curved LED GAMING Monitor - SUper Ultra Wide Dual WQHD 5120 x 1440"
            price={1599.0}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
