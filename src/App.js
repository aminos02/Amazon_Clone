import "./css/App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51JSsZRJyUYxiaz3Wwz2Y6Ki1GKhix7HVOKHBjay6fBfZzdiONbaNuDW4vfM8bnNt91jxkAPcHWdYAmW9cBZQ9nXG0064jTnjxB"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log("THE USER IS >>>", authUser);
        console.log("THE USER ID >>>", authUser.uid);
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />

            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/checkout">
            <Header />

            <Checkout />
          </Route>
          <Route path="/">
            <Header />

            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
