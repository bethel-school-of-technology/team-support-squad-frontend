import React, { useEffect, useState } from 'react';
import { useUserContext } from '../context/UserContext';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const { user } = useUserContext();
  const [userItems, setUserItems] = useState([]);

  useEffect(() => {
    if (user) {
      axios.get(`http://localhost:3001/items?user_id=${user.id}`)
        .then(response => {
          setUserItems(response.data);
        })
        .catch(error => {
          console.error("Error fetching user's items:", error);
        });
    }
  }, [user]);

  return (
    <div className="user-profile-container">
      <h2>User Profile</h2>
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.fullName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone Number:</strong> {user.phoneNumber}</p>

          <h3>Your Created Items:</h3>
          {userItems && userItems.length > 0 ? (
            <ul>
              {userItems.map(item => (
                <li key={item.id}>
                  <Link to={`/items/${item.id}`}>{item.name}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>You haven't created any items yet.</p>
          )}
        </div>
      ) : (
        <p>Please sign in to view your profile.</p>
      )}
    </div>
  );
};

export default UserProfile;
