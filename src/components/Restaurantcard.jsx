const Restaurantcard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, cuisines, name, costForTwo, avgRating } =
    resData?.info;

  return (
    <div
      className="flex-1 max-w-[200px] min-w-[200px] m-[10px] p-[10px] rounded-[1rem] border border-white 
    transition-all ease-in duration-100 hover:border-[#c4c8cc] hover:shadow-[0px_2px_8px_0px_rgba(173,168,168,0.437)] hover:cursor-pointer hover:-translate-y-[10px] group-hover"
    >
      <img
        className="w-[100%] h-[200px] object-cover rounded-[1rem]"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <div className="flex flex-col justify-between flex-1 gap-[6px] mt-2">
        <p className="font-semibold text-black text-lg ">{name}</p>
        <p>{avgRating}</p>
        <p className="text-s text-gray-500">{cuisines.join(", ")}</p>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};

export const withVegLabel = (Restaurantcard) => {
  return (props) => {
    return (
      <div className="relative transition-all ease-in duration-100 group hover:-translate-y-[10px]">
        <label className=" absolute top-2 left-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded z-10 group-hover">
          Veg Only
        </label>
        <Restaurantcard {...props} />
      </div>
    );
  };
};

export default Restaurantcard;
