import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useItemContext } from "../context/ItemContext";
import { useUserContext } from "../context/UserContext";
import Delete from "./Delete"; // Import the Delete component
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"; // Import GoogleMap, LoadScript, and Marker
import fetchCoordinates from "../components/ItemCoords";

function Read() {
  const { user } = useUserContext();
  const { getItem } = useItemContext();
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    getItem(id)
      .then((itemData) => {
        setItem(itemData);
        fetchCoordinates(itemData.address)
          .then((coords) => {
            setCoordinates(coords);
          })
          .catch((error) => {
            console.error("Error fetching coordinates:", error);
          });
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
      
      {/* Render the Google Map */}
        <LoadScript googleMapsApiKey="AIzaSyBU0ZdYhzfCYD0SJGYK72kDdw8xXFI2RK8">
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "300px" }}
          center={coordinates || { lat: 0, lng: 0 }}
          zoom={15}
        >
          {coordinates && <Marker position={coordinates} />}
        </GoogleMap>
      </LoadScript>

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
