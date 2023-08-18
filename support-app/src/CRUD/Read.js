import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useItemContext } from "../context/ItemContext";
import Delete from "./Delete"; // Import the Delete component

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
      
      {/* Edit button linking to Update.js */}
      <Link to={`/update/${id}`}>
        <button>Edit</button>
      </Link>
      
      {/* Render the Delete component */}
      <Delete id={id} />
    </div>
  );
}

export default Read;
