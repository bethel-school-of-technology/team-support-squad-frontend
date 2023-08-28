import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useItemContext } from "../context/ItemContext";
import { useUserContext } from "../context/UserContext";
import Delete from "./Delete"; // Import the Delete component

function Read() {
  const { user } = useUserContext();
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

  const isOwner = user && item.user_id === user.id;

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <p>Image: {item.image}</p>
      <p>Address: {item.address}</p>
      
      {/* Conditionally render the Edit button */}
      {isOwner && 
      ( 
        <Link to={`/update/${id}`}>
          <button>Edit</button>
        </Link>
      )}

      {/* Conditionally render the Delete component */}
      {isOwner && <Delete id={id} />}
    </div>
  );
}

export default Read;
