import React from "react";
import { Link } from "react-router-dom";
import BasketItem from "./BasketItem";
import "./css/payment.css";
import { useStateValue } from "./StateProvider";

function Payment() {
  const [{ basket }, {}] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__title">
        <h2>
          Checkout<Link to="/checkout"> ({basket?.length} items</Link>)
        </h2>
      </div>
      <div className="payment__container">
        <div className="payment__section">
          <div className="payment__section__title">
            <h4>Delivery Address</h4>
          </div>
          <div className="payment__section__address">
            <p>Chettia Chlef Algeria Zone A1 number 24</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__section__title">
            <h4>Review items and delivery</h4>
          </div>
          <div className="payment__section__items">
            {basket.map((item) => (
              <BasketItem {...item} />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__section__title">
            <h4>Payment Method</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
