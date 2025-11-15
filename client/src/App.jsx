import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Productos from "./pages/Productos.jsx";
import ProductoDetalle from "./pages/ProductoDetalle.jsx";
import CrearProducto from "./pages/CrearProducto.jsx";
import Contacto from "./pages/Contacto.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<ProductoDetalle />} />
        <Route path="/crear-producto" element={<CrearProducto />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
}

export default App;
