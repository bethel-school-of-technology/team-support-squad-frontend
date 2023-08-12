import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const ItemContext = createContext();

export const ItemContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const getAllItems = async () => {
    try {
      const response = await axios.get("http://localhost:3001/items");
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const getItem = async (id) => {
    try {
      console.log("Fetching item data for id:", id); // Debugging line
      const response = await axios.get(`http://localhost:3001/items/${id}`);
      console.log("Response data:", response.data); // Debugging line
      return response.data;
    } catch (error) {
      console.error("Error fetching item data:", error);
    }
  };
  

  const updateItem = async (id, updatedItem) => {
    try {
      await axios.put(`http://localhost:3001/items/${id}`, updatedItem);
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  return (
    <ItemContext.Provider
      value={{
        items,
        getAllItems,
        getItem,
        updateItem,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export const useItemContext = () => {
  return useContext(ItemContext);
};
