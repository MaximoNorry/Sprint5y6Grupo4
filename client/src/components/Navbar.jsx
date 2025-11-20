import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <img 
          src="http://localhost:4000/images/Logo-HJ-removebg-preview.png" 
          alt="Hermanos Jota Logo"
          className="nav-logo-img"
        />
        <span>Hermanos Jota</span>
      </Link>

      {/* LINKS */}
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/admin/crear-producto" className="nav-admin">Crear Producto</Link></li>
      </ul>

    </nav>
  );
}
