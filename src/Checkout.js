import React from "react";
import BasketItem from "./BasketItem";
import "./css/checkout.css";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="ad"
        />
        {basket?.length > 0 ? (
          <div>
            <h2 className="checkout_title">Your Shopping Basket</h2>
            <hr className="checkout__line" />
            {basket.map((item, index) => (
              <BasketItem
                {...item}
                index={index}
                key={item.title + item.price + index}
              />
            ))}
          </div>
        ) : (
          <h2>No item Added To Cart</h2>
        )}
      </div>
      <div className="checkout__right">
        <Subtotal> </Subtotal>
      </div>
    </div>
  );
}
export default Checkout;
