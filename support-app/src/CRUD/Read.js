import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useItemContext } from "../context/ItemContext";

function Read() {
  const { getItem } = useItemContext();
  const { id } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    getItem(id)
      .then((itemData) => {
        setItem(itemData);
      })
      .catch((error) => {
        console.error("Error fetching item data:", error);
      });
  }, [getItem, id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <p>Image: {item.image}</p>
      <p>Address: {item.address}</p>
    </div>
  );
}

export default Read;
