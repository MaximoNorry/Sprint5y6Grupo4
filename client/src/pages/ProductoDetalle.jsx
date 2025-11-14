import { useEffect, useState } from "react";
import { getProductos } from "../api";
import { useParams } from "react-router-dom";

export default function ProductoDetalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    async function cargar() {
      const productos = await getProductos();
      const p = productos.find(item => item._id === id);
      setProducto(p);
    }
    cargar();
  }, [id]);

  if (!producto) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <img
        src={producto.imagenUrl || "/placeholder.jpg"}
        alt={producto.nombre}
      />
      <p>{producto.descripcion}</p>
      <p><strong>Precio:</strong> ${producto.precio}</p>
      <p><strong>Stock:</strong> {producto.stock}</p>
    </div>
  );
}
