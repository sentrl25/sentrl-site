import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Platform } from './pages/Platform';
import { Solutions } from './pages/Solutions';
import { Approach } from './pages/Approach';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="platform" element={<Platform />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="approach" element={<Approach />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;