import AssetPath from "../Assests/assets";


const Header = () => {
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
          <li>Profile</li>
        </ul>
      </div>
    );
  };
  export default Header