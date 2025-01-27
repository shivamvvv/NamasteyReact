import resList from "../utils/mockdata";
import { search_icon } from "../Assests/assets";
import Restaurantcard from "./Restaurantcard";
import { useState } from "react";

const Body = () => {
  //let restaurants = [...resList];
  const [listofrestaurants, setListOfRestaurants] = useState([...resList]);
  return (
    <div className="body">
      <div className="search">
        <input placeholder="Order Something !"></input>
        <img src={search_icon}></img>
      </div>
      <button
        className="filter-btn"
        onClick={() => {
          const filtertheRestaurants = listofrestaurants.filter(
            (res) => res.info.avgRating > 4.3
          );
          setListOfRestaurants(filtertheRestaurants);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="res-container">
        {listofrestaurants.map((data) => (
          <Restaurantcard key={data.info.id} resData={data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
