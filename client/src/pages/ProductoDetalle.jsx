import { useEffect, useState } from "react";
import { getProductos } from "../api";
import { useParams } from "react-router-dom";

export default function ProductoDetalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    async function cargar() {
      const productos = await getProductos();
      const seleccionado = productos.find(item => item._id === id);
      setProducto(seleccionado);
    }
    cargar();
  }, [id]);

  if (!producto) return <p>Cargando...</p>;

  return (
    <div className="detalle-container">
      <h2>{producto.nombre}</h2>

<img
  src={`http://localhost:4000${producto.imagenUrl}`}
  alt={producto.nombre}
  style={{ width: "300px", borderRadius: "8px" }}
/>


      <p>{producto.descripcion}</p>
      <p><strong>Precio:</strong> ${producto.precio}</p>
      <p><strong>Stock:</strong> {producto.stock}</p>
    </div>
  );
}
