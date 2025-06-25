import AssetPath from "../Assets/assets";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnname, setBtnname] = useState("Sign In");

  const btnStyle = {
    cursor: "pointer",
    color: "white",
    backgroundColor: "#e55427",
    padding: "10px 16px",
    border: "none",
    fontWeight: "500",
    fontSize: "1rem",
    borderRadius: "1rem",
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={AssetPath.logo} alt="Logo" />
      </div>

      <ul className="nav-items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>

      <ul className="nav-items">
        <li>
          <img src={AssetPath.shopping_cart} alt="Cart" />
        </li>
        <button
          style={btnStyle}
          className="signInOut"
          onClick={() =>
            setBtnname(btnname === "Sign In" ? "Sign Out" : "Sign In")
          }
        >
          {btnname}
        </button>
      </ul>
    </div>
  );
};

export default Header;
