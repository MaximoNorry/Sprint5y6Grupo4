const API_URL = "http://localhost:4000/api";

export async function getProductos() {
  const r = await fetch(`${API_URL}/productos`);
  return r.json();
}

export async function crearProducto(data) {
  const r = await fetch(`${API_URL}/productos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return r.json();
}
