import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Component1 from './pages/usecontext.js';
import Hook1 from './pages/Hook1.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Component1 />}>
        <Route path="" element={<Hook1 />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
