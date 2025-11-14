import React from "react";
import { useEffect, useState } from "react";
import { getProductos } from "../api";

export default function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos().then(setProductos);
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Nuestras Piezas</h1>

      <div 
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "30px"
        }}
      >
        {productos.map((p) => (
          <div className="card" key={p.id}>
            <h3>{p.nombre}</h3>
            <p>Precio: ${p.precio}</p>
            <p>Stock: {p.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
}