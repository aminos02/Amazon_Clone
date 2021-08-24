import React from "react";
import StarRateIcon from "@material-ui/icons/StarRate";
import "./css/product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

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
      <button className="product__btn" onClick={addToBasket}>
        Add to basket
      </button>
    </div>
  );
}

export default Product;
