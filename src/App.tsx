import React from 'react';
import './App.css';
import { CountriesList } from './components';

function App() {
  return (
    <div className="app">
      <h1>Countries list</h1>

      <CountriesList />
    </div>
  );
}

export default App;
