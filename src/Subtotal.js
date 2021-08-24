import React from "react";
import "./css/subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { SportsMmaOutlined } from "@material-ui/icons";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  /*for calcul somme:*/
  const somme_reducer = (somme, currentValue) => somme + currentValue.price;
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
            <button className="subtotal__btn">Proceed to Checkout</button>
          </>
        )}
        decimalScale={2}
        value={basket.reduce(somme_reducer, 0)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Subtotal;
