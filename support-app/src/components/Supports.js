import React, { useEffect } from "react";
import "../stylesheet/Supports.css";
import { useItemContext } from "../context/ItemContext";
import { Link } from "react-router-dom";

const Supports = () => {
  const { items, getAllItems } = useItemContext();

  useEffect(() => {
    if (items.length === 0) {
      getAllItems(); // Fetch items only if they haven't been fetched yet
    }
  }, [getAllItems, items.length]);

  return (
    <div className="supContainer">
      <div className="items">
        <div className="list">
          {items.map((item) => (
            <div key={item.id}>
              <Link to={`/items/${item.id}`}>
                <div className="supports">
                  <div className="left-s">
                    <div className="name">
                      <span>{item.name}</span>
                    </div>
                    <span>${item.price}</span>
                    <div>
                      {" "}
                      <Link to={`/items/${item.id}`} />
                    </div>
                  </div>
                  <img src={item.icon} alt="img" className="sImg" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Supports;
