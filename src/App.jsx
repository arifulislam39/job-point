import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';

const App = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default App;