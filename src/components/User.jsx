import { useState } from "react";
import { useEffect } from "react";

const User = ({ name, location, contact }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Namastey");
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  setCount;
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          const countInc = count + 1;
          setCount(countInc);
        }}
      >
        Count Increases
      </button>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: {contact}</h4>
    </div>
  );
};

export default User;
