import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchmenu();
  }, []);
  const fetchmenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
        resId
    );
    const json = await data.json();
    setResInfo(json.data);
  };
  if (resInfo === null) return <Shimmer></Shimmer>;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1 className="restaurantName">{name}</h1>
      <div className="menuCard">
        <div className="cuisine-cost">
          <h3>
            {cuisines?.join(", ")} - {costForTwoMessage}
          </h3>
        </div>
        <h3>Menu</h3>
        {itemCards.map((item) => (
          <p key={item?.card?.info?.id}>
            {item?.card?.info?.name} - {" Rs. "} {item?.card?.info?.price / 100}
          </p>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
