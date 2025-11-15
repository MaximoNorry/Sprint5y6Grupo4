import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductos } from "../api";
import "./productos.css";


export default function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function cargar() {
      const data = await getProductos();
      setProductos(data);
    }
    cargar();
  }, []);

  return (
    <div className="catalogo-container">
      <h2 className="titulo-seccion">Catálogo</h2>

      <div className="grid-productos">
        {productos.map((p) => (
          <Link to={`/productos/${p._id}`} key={p._id} className="card-producto">
            <img 
              src={`http://localhost:4000${p.imagenUrl}`} 
              alt={p.nombre} 
            />
            <h3>{p.nombre}</h3>
            <p className="precio">${p.precio}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
