import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProductos } from '../api';
export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(()=> {
    let mounted = true;
    fetchProductos()
      .then(data => { if (mounted) setProductos(data); })
      .catch(err => { if (mounted) setError(err.message || 'Error'); })
      .finally(()=> { if (mounted) setLoading(false); });
    return ()=> mounted = false;
  }, []);
  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;
  if (productos.length === 0) return <p>No hay productos aún.</p>;
  return (
    <div>
      <h2>Catálogo</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {productos.map(p => (
          <li key={p._id} style={{ marginBottom: '1rem', border: '1px solid #eee', padding: '0.8rem' }}>
            <h3><Link to={`/productos/${p._id}`}>{p.nombre}</Link></h3>
            <p>{p.descripcion}</p>
            <p><strong>${p.precio}</strong> — Stock: {p.stock}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
