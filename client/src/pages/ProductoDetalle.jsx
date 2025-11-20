import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductoPorId } from "../api";
import "./ProductoDetalle.css";

export default function ProductoDetalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function cargar() {
      try {
        const data = await getProductoPorId(id);
        if (!data) setError(true);
        else setProducto(data);
      } catch {
        setError(true);
      }
    }
    cargar();
  }, [id]);

  if (error) return <p>Error cargando el producto.</p>;
  if (!producto) return <p>Cargando...</p>;

  return (
    <div className="hj-detalle-page">

      <div className="hj-detalle-card">

        <div className="hj-img-wrapper">
          <img
            src={`http://localhost:4000${producto.imagenUrl}`}
            alt={producto.nombre}
            className="hj-detalle-img"
          />
        </div>

        <div className="hj-info">
          <h1 className="hj-title">{producto.nombre}</h1>

          <p className="hj-description">
            {producto.descripcion}
          </p>

          <div className="hj-price-box">
            <span className="hj-price">
              ${producto.precio}
            </span>

            <span className="hj-stock">
              Stock disponible: {producto.stock}
            </span>
          </div>

          <button className="hj-btn-comprar">AGREGAR AL CARRITO</button>

          <Link to="/productos" className="hj-volver">
            ← Volver al catálogo
          </Link>
        </div>

      </div>

    </div>
  );
}
