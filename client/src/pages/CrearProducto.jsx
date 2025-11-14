import { useState } from "react";
import { crearProducto } from "../api";

export default function CrearProducto() {
  const [form, setForm] = useState({ nombre: "", precio: "", stock: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await crearProducto(form);
    alert("Producto creado!");
  }

  return (
    <div style={{ padding: "40px", maxWidth: "600px" }}>
      <h1>Crear nuevo producto</h1>

      <form className="card" style={{ marginTop: "20px" }} onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input name="nombre" className="input" onChange={handleChange} />

        <label>Precio</label>
        <input name="precio" className="input" type="number" onChange={handleChange} />

        <label>Stock</label>
        <input name="stock" className="input" type="number" onChange={handleChange} />

        <button className="btn" style={{ marginTop: "20px" }}>Crear</button>
      </form>
    </div>
  );
}
