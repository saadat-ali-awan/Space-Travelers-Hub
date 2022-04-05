import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dragons from './components/Dragons';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<h1>hi</h1>} />
      <Route path="/rockets" element={<h1>rockets</h1>} />
      <Route path="/dragons" element={<Dragons />} />
      <Route path="/missions" element={<h1>missions</h1>} />
      <Route path="/profile" element={<h1>profile</h1>} />
    </Routes>
  </Router>
);

export default App;
