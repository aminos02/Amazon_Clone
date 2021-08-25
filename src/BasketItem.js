import React from "react";
import StarRateIcon from "@material-ui/icons/StarRate";
import "./css/basketItem.css";
import { useStateValue } from "./StateProvider";
function BasketItem({ index, id, title, image, rating, price }) {
  const [state, dispatch] = useStateValue();
  console.log(title + " : " + index);
  return (
    <div className="basket__item">
      <img src={image} alt={title} className="basket__item__image" />
      <div className="basket__item__info">
        <h4>{title}</h4>
        <span>$</span>
        <strong>{price}</strong>
        <div className="stars">
          {Array(rating)
            .fill()
            .map((item) => (
              <StarRateIcon />
            ))}
        </div>
        <button
          className="product__btn"
          onClick={() =>
            dispatch({
              type: "REMOVE__ITEM",
              id: index,
            })
          }
        >
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default BasketItem;
