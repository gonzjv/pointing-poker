import React from 'react'
import './App.css';
import Header from './components/header/Header';
import Welcome from './pages/welcome/Welcome';

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <Welcome />
    </div>
  );
}

export default App;
