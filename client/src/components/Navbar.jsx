import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">Hermanos Jota</Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/admin/crear-producto" className="nav-admin">Crear Producto</Link></li>
      </ul>
    </nav>
  );
}
