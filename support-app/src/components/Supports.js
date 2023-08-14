import React, { useState } from "react";
import "../stylesheet/Supports.css";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { ProductsData } from "../Data/Product1";

const Supports = () => {
  const [parent] = useAutoAnimate();
  const [MenuSupports, setMenuSupports] = useState(ProductsData);

  const filter = (type) => {
    setMenuSupports(ProductsData.filter((product) => product.type === type));
  };

  return (
    <div className="supContainer">
      {/* title */}
      <h1>Our Featured Supports</h1>
      {/* cards */}
      <div className="items">
        <ul className="menu">
          <li onClick={() => setMenuSupports(ProductsData)}>All</li>
          <li onClick={() => filter("auto")}>Auto</li>
          <li onClick={() => filter("electronics")}>Electronics</li>
          <li onClick={() => filter("fashion")}>Fashion</li>
          <li onClick={() => filter("home")}>Home</li>
          <li onClick={() => filter("tools")}>Tools</li>
        </ul>
        <div className="list" ref={parent}>
          {MenuSupports.map((product, i) => (
            <div className="supports">
              <div className="left-s">
                <div className="name">
                  <span>{product.name}</span>
                  <span>{product.detail}</span>
                </div>
                <span>${product.price}</span>
                <div>Support Now!</div>
              </div>
              <img src={product.img} alt="img" className="sImg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Supports;
