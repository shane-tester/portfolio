import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Intouch from './Intouch';
import PillThought from './PillThought';
import Palkia from './Palkia';

/**
 * Main application component that sets up routing for the portfolio site.
 * Defines the main navigation structure and route mappings to page components.
 * 
 * @component
 * @example
 * return (
 *   <App />
 * )
 */
const App: React.FC = () => {
  // Main router configuration for portfolio site navigation
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/intouchcx" element={<Intouch />} />
        <Route path="/pillthought" element={<PillThought />} />
        <Route path="/palkia" element={<Palkia />} />
      </Routes>
    </Router>
  );
};

export default App;