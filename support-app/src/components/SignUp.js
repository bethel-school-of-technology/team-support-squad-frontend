import React, { useState } from 'react';
import '../stylesheet/Signup.css'; 


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
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
          Confirm Password {" "}
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
