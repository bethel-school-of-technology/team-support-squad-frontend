import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useItemContext } from "../context/ItemContext";

const ItemList = () => {
  const { items, getAllItems } = useItemContext();

  useEffect(() => {
    if (items.length === 0) {
      getAllItems(); // Fetch items only if they haven't been fetched yet
    }
  }, [getAllItems, items.length]);

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <Link to={`/items/${item.id}`}>
            <h3>{item.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
