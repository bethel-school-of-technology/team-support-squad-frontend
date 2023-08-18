import React, { useState } from 'react';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = () => {
  };

  return (
    <div>
      <h2>Signin</h2>
      <label> Email: {" "}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </label>
      <br />
      <label>
      Password: {" "}
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
