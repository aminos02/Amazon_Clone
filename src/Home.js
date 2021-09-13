import React from "react";
import { useState, useEffect } from "react";
import Product from "./Product";
import "./css/home.css";
const { products } = require("./products.json");
function Home() {
  //const [products, setProducts] = useState([]);
  /*useEffect(() => {
    async function fetchApi() {
      const url = "https://fakestoreapi.com/products/";
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    }
    fetchApi();
  }, []);*/
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://challenge-6431c.web.app/static/media/homepage-hero.37e38a1c.jpg"
          alt="products"
        />
        <div className="home__grid">
          {products.map((p) => (
            <Product
              key={p.id + p.title}
              id={p.id}
              title={p.title}
              price={p.price}
              rating={4}
              image={p.image}
            />
          ))}
          <Product
            id="89893333"
            title="Fitbit Charge 4 With Built-in GPS"
            price={15000}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
