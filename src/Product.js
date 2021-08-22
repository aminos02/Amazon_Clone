import React from "react";
import StarRateIcon from "@material-ui/icons/StarRate";
import "./product.css";
function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <div className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="stars">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <StarRateIcon key={i} />;
            })}
        </div>
      </div>

      <img className="product__image" src={image} alt="desktop" />
      <button className="product__btn">Add to basket</button>
    </div>
  );
}

export default Product;
