import React, { useState } from "react";
import { useItemContext } from "../context/ItemContext";
import { useNavigate } from "react-router-dom";

function Create() {
  const { createItem } = useItemContext(); // Using the createItem function from the context
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newItem = {
      name,
      description,
      price,
      image,
      address,
    };

    try {
      await createItem(newItem);
      navigate("/all"); // Navigate to "/all" page after creating the item
      window.location.reload(); // Refresh the page to see the updated list
    } catch (error) {
      console.error("Error creating item:", error);
    }
  };

  const handleCancel = () => {
    navigate("/all"); // Redirect to "/all" if cancel button is clicked
  };


  return (
    <div>
    <h2>Create Item</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Description:{" "}
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Price:{" "}
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Image:{" "}
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Address:{" "}
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Create</button>
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  </div>
  
  );
}

export default Create;
