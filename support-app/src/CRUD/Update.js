import React, { useState, useEffect } from "react";
import { useItemContext } from "../context/ItemContext";
import { useParams } from "react-router-dom";

function Update({ onCancel, onEdit }) {
  const { getItem, updateItem } = useItemContext(); // Custom hook to access context functions
  const { id } = useParams();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    console.log(id);

    // Fetching item data based on id
    getItem(id)
      .then((itemData) => {
        const { name, description, price, image, address } = itemData;
        setName(name);
        setDescription(description);
        setPrice(price);
        setImage(image);
        setAddress(address);
      })
      .catch((error) => {
        console.error("Error fetching item data:", error);
      });
  }, [getItem, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedItem = {
      name,
      description,
      price,
      image,
      address,
    };

    try {
      await updateItem(id, updatedItem);
      onEdit();
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  return (
    <div>
      <h2>Edit Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Description: <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Price: <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <label>
          Image: <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
        <label>
          Address: <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );  
}

export default Update;
