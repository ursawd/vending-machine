import React from "react";
import { Link } from "react-router-dom";

const Soda = () => {
  return (
    <div className="Soda">
      {" "}
      <h1>This a can of soda</h1>
      <Link to="/">Home</Link>
    </div>
  );
};
export default Soda;
