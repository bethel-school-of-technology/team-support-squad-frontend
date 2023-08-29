import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const Map = ({ location }) => {
  const center = { lat: location.lat, lng: location.lng };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBU0ZdYhzfCYD0SJGYK72kDdw8xXFI2RK8">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
