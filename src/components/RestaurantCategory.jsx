import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className=" w-[50%] bg-gray-50 shadow-lg p-4 mx-auto my-4 ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-semibold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>{showItems ? "⬆️" : "⬇️"}</span>
      </div>
      <div>{showItems && <ItemsList items={data.itemCards} />}</div>
    </div>
  );
};

export default RestaurantCategory;
