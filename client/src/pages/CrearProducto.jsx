import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./crearproducto.css";


export default function CrearProducto() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    categoria: "",
    imagen: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch("/api/productos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        console.error("Error al crear producto");
        return;
      }

      // Opcional: obtener el producto creado
      const nuevo = await res.json();

      // Redirige al catálogo o a un detalle
      navigate("/productos"); // o `/productos/${nuevo.id}`
    } catch (error) {
      console.error("Error en la petición", error);
    }
  }

  return (
    <div className="crear-producto">
      <h2>Crear Producto</h2>

      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />

        <label>Descripción:</label>
        <input
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
        />

        <label>Precio:</label>
        <input
          name="precio"
          type="number"
          value={formData.precio}
          onChange={handleChange}
        />

        <label>Categoría:</label>
        <input
          name="categoria"
          value={formData.categoria}
          onChange={handleChange}
        />

        <label>Imagen (URL):</label>
        <input
          name="imagen"
          value={formData.imagen}
          onChange={handleChange}
        />

        <button type="submit">Crear</button>
      </form>
    </div>
  );
}
