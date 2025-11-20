const BASE_URL = import.meta.env.VITE_BACKEND_URL || "https://sprint5y6grupo4.onrender.com";

export async function getProductos() {
  const res = await fetch(`${BASE_URL}/api/productos`);
  return res.json();
}

export async function getProductoPorId(id) {
  const res = await fetch(`${BASE_URL}/api/productos/${id}`);
  return res.json();
}

export async function crearProducto(data) {
  const res = await fetch(`${BASE_URL}/api/productos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function actualizarProducto(id, data) {
  const res = await fetch(`${BASE_URL}/api/productos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function eliminarProducto(id) {
  const res = await fetch(`${BASE_URL}/api/productos/${id}`, {
    method: "DELETE",
  });
  return res.json();
}