import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import Home from './pages/Home';
import UnionDarkRP from './pages/UnionDarkRP';

import './App.css';

function App() {
  return (
    <BrowserRouter basename='/portfolio'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projets/union-darkrp' element={<UnionDarkRP />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
