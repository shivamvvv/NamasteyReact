const ItemsList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="py-3 m-2 border-gray-300 border-b-2 flex flex-row text-left gap-8"
        >
          <div className="flex-1 ">
            <div className=" py-2 font-semibold">
              <span>{item.card.info.name}</span>
              <span> - ₹{item.card.info.price / 100}</span>
            </div>
            <p className="text-s">
              {item?.card?.info?.description?.replaceAll(",", ", ")}
            </p>
          </div>
          <div className="w-24">
            <button className="absolute bg-white rounded-[5px] text-green-700 p-1 font-bold text-xs">
              ADD +
            </button>
            <img
              className="w-full max-h-[120px] object-cover"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                item.card.info.imageId
              }
              alt="Not Available"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
