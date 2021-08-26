import React from "react";
import "./css/subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotalPrice } from "./reducer";
import { useHistory } from "react-router-dom";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items);
              <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" id="ch" />
              <label htmlFor="ch">This order contains a gift</label>
            </small>
            <button
              onClick={() => {
                history.push("/payment");
              }}
              className="subtotal__btn"
              disabled={basket.length < 1}
            >
              Proceed to Checkout
            </button>
          </>
        )}
        decimalScale={2}
        value={getBasketTotalPrice(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Subtotal;
