import React from 'react';
import { useUserContext } from '../context/UserContext';

const UserProfile = () => {
  const { user } = useUserContext();

  return (
    <div className="user-profile-container">
      <h2>User Profile</h2>
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.fullName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
        </div>
      ) : (
        <p>Please sign in to view your profile.</p>
      )}
    </div>
  );
};

export default UserProfile;
