import AssetPath from "../Assets/assets";
const HeroComponent = () => {
  return (
    <div className="hero">
      <div className="hero_text">
        <h1>Find your favourite food delivered!</h1>
        <p>
          Satisfy your hunger with delicious meals from your favorite
          restaurants, delivered straight to your doorstep in minutes
        </p>
      </div>
      <div className="hero_image">
        <img src={AssetPath.pizzaimage}></img>
      </div>
    </div>
  );
};
export default HeroComponent;
