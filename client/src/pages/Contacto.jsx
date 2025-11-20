import React from "react";
import "./Contacto.css";

export default function Contacto() {
  return (
    <div className="contacto-container">
      <h2 className="contacto-titulo">Contacto</h2>
      <p className="contacto-descripcion">
        Envíanos tu consulta y te responderemos a la brevedad.
      </p>

      <form className="contacto-form">
        <label>
          Nombre
          <input type="text" placeholder="Tu nombre" required />
        </label>

        <label>
          Email
          <input type="email" placeholder="tucorreo@ejemplo.com" required />
        </label>

        <label>
          Mensaje
          <textarea placeholder="Escribe tu mensaje..." rows="5" required />
        </label>

        <button type="submit" className="btn-enviar">
          Enviar mensaje
        </button>
      </form>
    </div>
  );
}
