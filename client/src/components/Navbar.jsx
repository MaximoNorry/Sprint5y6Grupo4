import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
      <Link to="/">Inicio</Link> | {' '}
      <Link to="/productos">Catálogo</Link> | {' '}
      <Link to="/admin/crear-producto">Crear Producto</Link> | {' '}
      <Link to="/contacto">Contacto</Link>
    </nav>
  );
}
