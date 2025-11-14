import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Hermanos Jota</h1>

      <div className="links">
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/crear">Crear Producto</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
    </nav>
  );
}
