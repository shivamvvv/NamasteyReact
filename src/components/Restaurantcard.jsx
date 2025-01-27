const Restaurantcard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, cuisines, name, costForTwo,avgRating } = resData?.info;
  
    return (
      <div className="res-card">
        <img
          className="pizza-image"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        ></img>
        <div>
          <p>{name}</p>
          <p>{cuisines.join(", ")}</p>
          <p>{costForTwo}</p>
          <p>{avgRating}</p>
        </div>
      </div>
    );
  };

  export default Restaurantcard