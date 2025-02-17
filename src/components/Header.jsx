import AssetPath from "../Assests/assets";
import { useState } from "react";

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
        <img className="logo" src={AssetPath.Logo}></img>
      </div>

      <ul className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <ul className="nav-items">
        <li>
          <img src={AssetPath.shopping_cart}></img>
        </li>
        <button
          style={btnStyle}
          className="signInOut"
          onClick={() => {
            btnname === "Sign In"
              ? setBtnname("Sign Out")
              : setBtnname("Sign In");
          }}
        >
          {btnname}
        </button>
      </ul>
    </div>
  );
};
export default Header;
