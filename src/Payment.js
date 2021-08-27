/* eslint-disable no-unused-vars */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "./axios";
import React, { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import BasketItem from "./BasketItem";
import "./css/payment.css";
import { getBasketTotalPrice } from "./reducer";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        console.log("user ID***: ", user.id);
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type: "EMPTY_BASKET",
        });
        history.replace("/orders");
      });
  };
  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payment/create?total=${getBasketTotalPrice(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

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
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotalPrice(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
