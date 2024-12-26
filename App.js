import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 className="title">Namastey React using something</h1>;

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Namastey React using functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
