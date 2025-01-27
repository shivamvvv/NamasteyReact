import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import HeroComponent from "./components/HeroComponent.jsx";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <HeroComponent />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout></AppLayout>);
