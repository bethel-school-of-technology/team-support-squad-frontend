import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useItemContext } from "../context/ItemContext";
import "../stylesheet/ItemList.css";
import Supports from "./Supports";

const ItemList = () => {
  const { items, getAllItems } = useItemContext();

  useEffect(() => {
    if (items.length === 0) {
      getAllItems(); // Fetch items only if they haven't been fetched yet
    }
  }, [getAllItems, items.length]);

  return (
    <div className="items-container">
      <Supports />
      {/* <div className="items-list">
        {items.map((item) => (
          <div key={item.id}>
            <Link to={`/items/${item.id}`}>
              <div className="items-data"></div>
              <span>
                <img src={item.icon} alt=""></img>{" "}
              </span>
              <span>{item.name}test</span>
              <span>{item.description}</span>
              <span>{item.price}</span>
            </Link>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default ItemList;
