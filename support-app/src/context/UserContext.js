import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginUser = async (userData) => {
    try {
      const response = await axios.post('http://localhost:3001/login', userData);
      setUser(response.data.user);
    } catch (error) {
      console.error('Login error:', error);
      throw new Error('Login failed');
    }
  };

  const registerUser = async (userData) => {
    try {
      const response = await axios.post('http://localhost:3001/users/register', userData);
      setUser(response.data.user);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    } catch (error) {
      console.error('Login error:', error);
      throw new Error('Login failed');
    }
  };

  const logoutUser = async () => {
    try {
      await axios.post('http://localhost:3001/auth/logout');
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
      throw new Error('Logout failed');
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loginUser,
        registerUser,
        logoutUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
