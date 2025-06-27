import Shimmer from "./shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

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
