import React from "react";
import { Link } from "react-router-dom";

const VendingMachine = () => {
  return (
    <div className="VendingMachine">
      <h1>Vending Machine</h1>
      <h3>
        <Link to="/soda">soda</Link>
      </h3>
      <h3>
        <Link to="/chips">chips</Link>
      </h3>
      <h3>
        <Link to="/candy">fresh sardines</Link>
      </h3>{" "}
    </div>
  );
};
export default VendingMachine;
