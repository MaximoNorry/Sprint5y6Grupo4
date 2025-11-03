const API_BASE = import.meta.env.VITE_API_BASE || 'http:
export async function fetchProductos() {
  const res = await fetch(`${API_BASE}/productos`);
  if (!res.ok) throw new Error('Error al obtener productos');
  return res.json();
}
export async function fetchProductoById(id) {
  const res = await fetch(`${API_BASE}/productos/${id}`);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || 'Error al obtener producto');
  }
  return res.json();
}
export async function createProducto(data) {
  const res = await fetch(`${API_BASE}/productos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!res.ok) {
    const err = await res.json().catch(()=>({message:'Error'}));
    throw new Error(err.message || 'Error al crear');
  }
  return res.json();
}
export async function deleteProducto(id) {
  const res = await fetch(`${API_BASE}/productos/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Error al eliminar');
  return res.json();
}
