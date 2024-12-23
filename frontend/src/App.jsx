import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './Landing/Landing';
import Repository from './Repository/Repository';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/repository" element={<Repository />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
