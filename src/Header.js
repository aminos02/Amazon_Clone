import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Amazon logo"
      />
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__option1">Hello Guest</span>
          <span className="header__option2">Sign in</span>
        </div>
        <div className="header__option">
          <span className="header__option1">Returns</span>
          <span className="header__option2">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__option1">Your</span>
          <span className="header__option2">Prime</span>
        </div>
        <div className="header__optionBasket">
          <ShoppingCartOutlinedIcon className="header__basketIcon" />
          <span className="header__option2 header__basketCount">10</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
