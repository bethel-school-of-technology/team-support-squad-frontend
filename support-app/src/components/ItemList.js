import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useItemContext } from "../context/ItemContext";
import "../stylesheet/ItemList.css";

const ItemList = () => {
  const { items, getAllItems } = useItemContext();

  useEffect(() => {
    if (items.length === 0) {
      getAllItems(); // Fetch items only if they haven't been fetched yet
    }
  }, [getAllItems, items.length]);

  // const filter = (type) => {
  //   getAllItems(useItemContext.filter((items) => items.type === type));
  // };

  return (
    <div className="items-container">
      {/* <ul className="menu">
        <li onClick={() => getAllItems(useItemContext)}>All</li>
        <li onClick={() => filter("auto")}>Auto</li>
        <li onClick={() => filter("electronics")}>Electronics</li>
        <li onClick={() => filter("fashion")}>Fashion</li>
        <li onClick={() => filter("home")}>Home</li>
        <li onClick={() => filter("tools")}>Tools</li>
      </ul> */}
      <div className="items-list">
        {items.map((item) => (
          <div key={item.id}>
            <Link to={`/items/${item.id}`}>
              <div className="items-data"></div>
              <span>{item.name}</span>
              <span>{item.description}</span>
              <span>{item.price}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
