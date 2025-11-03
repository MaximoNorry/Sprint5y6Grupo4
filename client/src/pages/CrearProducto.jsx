import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProducto } from '../api';
export default function CrearProducto() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    stock: '',
    imagenUrl: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    if (!form.nombre || form.precio === '') {
      setError('El nombre y precio son obligatorios');
      return;
    }
    const payload = {
      nombre: form.nombre,
      descripcion: form.descripcion,
      precio: parseFloat(form.precio),
      stock: parseInt(form.stock || '0', 10),
      imagenUrl: form.imagenUrl
    };
    try {
      setLoading(true);
      const created = await createProducto(payload);
      navigate(`/productos/${created._id}`);
    } catch (err) {
      setError(err.message || 'Error al crear producto');
    } finally {
      setLoading(false);
    }
  }
  return (
    <div>
      <h2>Crear Producto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label><br />
          <input name="nombre" value={form.nombre} onChange={handleChange} required />
        </div>
        <div>
          <label>Descripción</label><br />
          <textarea name="descripcion" value={form.descripcion} onChange={handleChange} />
        </div>
        <div>
          <label>Precio</label><br />
          <input name="precio" type="number" step="0.01" value={form.precio} onChange={handleChange} required />
        </div>
        <div>
          <label>Stock</label><br />
          <input name="stock" type="number" value={form.stock} onChange={handleChange} />
        </div>
        <div>
          <label>Imagen URL</label><br />
          <input name="imagenUrl" value={form.imagenUrl} onChange={handleChange} />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" disabled={loading}>{loading ? 'Enviando...' : 'Crear'}</button>
      </form>
    </div>
  );
}
