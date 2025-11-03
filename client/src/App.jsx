import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Productos from './pages/Productos';
import ProductoDetalle from './pages/ProductoDetalle';
import CrearProducto from './pages/CrearProducto';
import Contacto from './pages/Contacto';
import Navbar from './components/Navbar';
export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:id" element={<ProductoDetalle />} />
          <Route path="/admin/crear-producto" element={<CrearProducto />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
    </>
  );
}
