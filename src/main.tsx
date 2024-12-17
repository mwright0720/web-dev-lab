import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import './index.css'
import HomePage from './pages/HomePage.tsx'
import Proj1Home from './pages/Proj1Home.tsx';
import Proj2Home from './pages/Proj2Home.tsx';

const root = document.getElementById('root');
ReactDOM.createRoot(root!).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route index element={<HomePage />} />
    <Route path="Proj1Home" element={<Proj1Home />} />
    <Route path="Proj2Home" element={<Proj2Home/> } />

  </Routes>
</BrowserRouter>
)
