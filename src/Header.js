import React from "react";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./css/header.css";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

const categories = [
  "All Departments",
  "arts & Crafts",
  "Automotive",
  "Baby",
  "Beauty & Personal Care",
  "Computers",
  "Book",
];
export default function Header() {
  const [{ basket, user, username }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src={"https://pngimg.com/uploads/amazon/amazon_PNG11.png"}
          alt="Amazon Logo"
        />
      </Link>
      <div className="header__deliverCountry">
        <div className="location_icon">
          <LocationOnIcon />
        </div>
        <div className="location__name">
          <span>Deliver to</span>
          <strong>Algeria </strong>
        </div>
      </div>
      <div className="header__search">
        <select className="header__search__selection">
          <option>All</option>
          {categories.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">Hello {username}</span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>

      <Link to="/checkout">
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
}
/*import React from "react";
import "./css/header.css";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

// Translation Higher Order Component
const categories = [
  "All Departments",
  "arts & Crafts",
  "Automotive",
  "Baby",
  "Beauty & Personal Care",
  "Computers",
  "Book",
];
function Header() {
  const [{ basket, user }] = useStateValue();

  const toggleSignInSignOut = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon logo"
        />
      </Link>
      <div className="header__deliverCountry">
        <div className="location_icon">
          <LocationOnIcon />
        </div>
        <div className="location__name">
          <span>Deliver to</span>
          <strong>Algeria </strong>
        </div>
      </div>
      <div className="header__search">
        <select className="header__search__selection">
          <option>All</option>
          {categories.map((item) => (
            <option>{item}</option>
          ))}
        </select>
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user ? "/login" : "/"}>
          <div className="header__option">
            <span className="header__option1">
              Hello {user ? user.email.substr(0, 6) : "GUEST"}
            </span>
            <span onClick={toggleSignInSignOut} className="header__option2">
              {user ? "Sign Out" : "Sign in"}
            </span>
          </div>
        </Link>
        <Link to={user && "/orders"}>
          <div className="header__option">
            <span className="header__option1">Returns</span>
            <span className="header__option2">& Orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__option1">Your</span>
          <span className="header__option2">Prime</span>
        </div>
        <Link to="/checkout" className="cart__link">
          <div className="header__optionBasket">
            <ShoppingCartOutlinedIcon />
            <span className="header__option2 header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
*/
