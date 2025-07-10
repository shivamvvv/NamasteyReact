import Restaurantcard, { withVegLabel } from "./Restaurantcard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofrestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const onlineStatus = useOnlineStatus();
  const RestaurantCardVeg = withVegLabel(Restaurantcard);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.296468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING%22);"
      );
      const json = await data.json();
      setListOfRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
      setFilteredRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  if (loading) {
    return <Shimmer />;
  }

  if (onlineStatus === false) {
    return <h1>Looks like you are Offline!!!!!</h1>;
  }
  return (
    <div className="w-[80%] mx-[auto]">
      <div className="flex justify-between border-1 border-[#c4c8cc] shadow-[0px_2px_8px_0px_rgba(173,168,168,0.437)] p-2 mx-auto mt-[20px] mb-[50px] rounded-3xl max-w-3xl">
        <input
          className="outline-none border-none p-0.5 w-[100%]"
          placeholder="Order Something !"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="cursor-pointer mr-2 text-black hover:text-[#e55427]"
          onClick={() => {
            const filteredRestaurant = listofrestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
      </div>
      <button
        className="m-[1rem] mb-[1.5rem] p-2 outline-none border border-[#e55427] rounded-[10px] bg-[#e55427] cursor-pointer text-white"
        onClick={() => {
          const filtertheRestaurants = listofrestaurants.filter(
            (res) => res.info.avgRating > 4.0
          );
          setFilteredRestaurant(filtertheRestaurants);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((data) =>
          data?.info?.veg ? (
            <RestaurantCardVeg resData={data} key={data.info.id} />
          ) : (
            <Restaurantcard resData={data} key={data.info.id} />
          )
        )}
      </div>
    </div>
  );
};

export default Body;
