import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getProductoPorId } from "../api";
import "./ProductoDetalle.css";

export default function ProductoDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();

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

  async function handleDelete() {
    const confirmar = window.confirm("¿Seguro que deseas eliminar este producto?");
    if (!confirmar) return;

    try {
      const res = await fetch(`/api/productos/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        console.error("Error eliminando el producto");
        return;
      }

      navigate("/productos");
    } catch (error) {
      console.error("Error en la petición DELETE", error);
    }
  }

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
          <button className="hj-btn-eliminar" onClick={handleDelete}>
            ELIMINAR PRODUCTO
          </button>

          <Link to="/productos" className="hj-volver">
            ← Volver al catálogo
          </Link>
        </div>

      </div>

    </div>
  );
}
