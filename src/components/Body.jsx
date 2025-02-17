import { search_icon } from "../Assests/assets";
import Restaurantcard from "./Restaurantcard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
const Body = () => {
  const [listofrestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
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
  };
  if (listofrestaurants?.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="search">
        <input
          placeholder="Order Something !"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <img
          src={search_icon}
          onClick={() => {
            const filteredRestaurant = listofrestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant);
          }}
        ></img>
      </div>
      <button
        className="filter-btn"
        onClick={() => {
          const filtertheRestaurants = listofrestaurants.filter(
            (res) => res.info.avgRating > 4.0
          );
          setFilteredRestaurant(filtertheRestaurants);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="res-container">
        {filteredRestaurant.map((data) => (
          <Restaurantcard key={data.info.id} resData={data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
