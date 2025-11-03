import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductoById, deleteProducto } from '../api';
export default function ProductoDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(()=> {
    let mounted = true;
    fetchProductoById(id)
      .then(data => { if (mounted) setProducto(data); })
      .catch(err => setError(err.message || 'Error'))
      .finally(()=> setLoading(false));
    return ()=> mounted=false;
  }, [id]);
  async function handleEliminar() {
    const ok = window.confirm('¿Seguro que querés eliminar este producto?');
    if (!ok) return;
    try {
      await deleteProducto(id);
      alert('Producto eliminado');
      navigate('/productos');
    } catch (err) {
      alert('Error al eliminar: ' + (err.message || err));
    }
  }
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!producto) return <p>Producto no encontrado</p>;
  return (
    <div>
      <h2>{producto.nombre}</h2>
      <img src={producto.imagenUrl || 'https:
      <p>{producto.descripcion}</p>
      <p><strong>Precio:</strong> ${producto.precio}</p>
      <p><strong>Stock:</strong> {producto.stock}</p>
      <button onClick={handleEliminar}>Eliminar</button>
    </div>
  );
}
