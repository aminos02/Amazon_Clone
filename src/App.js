import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { Router, Switch, Link } from "react";
function App() {
  return (
    <div>
      {/*header*/}
      <Header />
      <Router>
        <Switch>
          <Link for="/cart">
            <Home />
          </Link>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
