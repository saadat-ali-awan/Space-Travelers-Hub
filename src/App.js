import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Rockets from './components/rockets/rockets';
import { getRocketsData } from './redux/rockets/rockets';
import Dragons from './components/dragons/Dragons';
import { fetchDragonsData } from './redux/dragons/dragon';
import Missions from './components/missions/missions';
import { getMissionData } from './redux/missions/missions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRocketsData());
    dispatch(fetchDragonsData());
    dispatch(getMissionData());
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<h1>profile</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
