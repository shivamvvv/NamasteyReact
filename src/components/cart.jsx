import { useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-[80%] m-auto">
        <ItemsList items={cartItems}></ItemsList>
      </div>
      <button
        className="p-2 m-2 rounded-lg text-white bg-black"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
