import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductos } from "../api";
import "./Productos.css";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function cargar() {
      try {
        const data = await getProductos();
        setProductos(data);
      } catch (err) {
        console.error("Error cargando productos:", err);
      } finally {
        setCargando(false);
      }
    }
    cargar();
  }, []);

  if (cargando) return <p className="cargando">Cargando productos...</p>;

  return (
    <div className="catalogo-container">
      <h1 className="titulo-seccion">Catálogo</h1>

      <div className="grid-productos">
        {productos.map((p) => (
          <Link key={p._id} to={`/productos/${p._id}`} className="card-producto">
            <img
              src={`http://localhost:4000/images/${p.imagen}`}
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
