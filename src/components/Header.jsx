import AssetPath from "../Assets/assets";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [btnname, setBtnname] = useState("Sign In");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

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
    <div className="flex justify-between items-center border-1 border-[#c4c8cc] rounded-3xl px-6 mx-auto w-[80%] shadow-[0px_2px_8px_0px_rgba(173,168,168,0.437)] text-[#888684] font-medium">
      <div className="logo-container">
        <img className="w-50" src={AssetPath.logo} alt="Logo" />
      </div>

      <ul className="flex gap-3 items-center hover-pointer">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/grocery">Grocery</Link>
        </li>
      </ul>

      <ul className="flex items-center gap-3 ">
        <li>Online Status : {onlineStatus ? "✅" : "🔴"} </li>
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
        <li className="text-black p-4">{loggedInUser}</li>
      </ul>
    </div>
  );
};

export default Header;
