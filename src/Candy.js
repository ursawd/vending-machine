import React from "react";
import { Link } from "react-router-dom";

const Candy = () => {
  return (
    <div className="Candy">
      {" "}
      <h1>This a bag of candy</h1>
      <Link to="/">Home</Link>
    </div>
  );
};
export default Candy;
