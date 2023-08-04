import React from 'react';
import Home from './components/Home';
import Navbar from './components/NavBar';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Home />
      </div>
    </div>
  );
};

export default App;