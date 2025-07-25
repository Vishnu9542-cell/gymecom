import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LimitlessCollectionPage from './components/LimitlessCollectionPage';
import YogaCollectionPage from './components/YogaCollectionPage';
import { CartProvider } from './context/CartContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/collections/limitless" element={<LimitlessCollectionPage />} />
          <Route path="/collections/yoga-collection" element={<YogaCollectionPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
