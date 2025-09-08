import { Navigate, Route, Routes } from 'react-router';

import Home from './pages/Home';
import UnionDarkRP from './pages/UnionDarkRP';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projets/union-darkrp' element={<UnionDarkRP />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};

export default App;
