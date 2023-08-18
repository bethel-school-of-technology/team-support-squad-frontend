import React, { useState } from 'react';
import '../stylesheet/Signin.css';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = () => {
  };

  return (
    <div className='signin-container'>
      <h2>Please Sign In</h2>
      <p>Don't have an account? <a href="/sign-up">Sign Up</a></p>
      <label> Email {" "}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </label>
      <br />
      <label>
      Password {" "}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </label>
      <br />
      <button onClick={handleSignin}>Login</button>
    </div>
  );
};

export default Signin;
