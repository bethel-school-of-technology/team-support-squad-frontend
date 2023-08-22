import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import '../stylesheet/Signup.css'; 

const Signup = () => {
  const navigate = useNavigate(); 
  const { registerUser } = useUserContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = { email, password, fullName, phoneNumber };
      const registeredUser = await registerUser(userData);
      console.log('User registered successfully:', registeredUser);

      // Redirect to the sign-in page after successful registration
      navigate('/sign-in');
    } catch (error) {
      console.error('Registration error:', error);
    }
  };


  return (
    <div className="signup-container">
     <p className='required-field'>*Required</p>
      <h2>Create your account</h2>
      <p>Already in Support? <a href="/sign-in">Sign in</a></p>
      <form onSubmit={handleSubmit}>
        <label>
          Email {" "}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password {" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
        Full Name {" "}
        <input
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
        </label>
        <br />
        <label>
        Phone Number {" "}
        <input
        type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
        </label>
        <br />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Signup;
