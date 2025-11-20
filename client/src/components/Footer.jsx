import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section">
          <h3>Contacto Digital</h3>
          <ul>
            <li><strong>Sitio web:</strong> www.hermanosjota.com.ar</li>
            <li><strong>Email:</strong> info@hermanosjota.com.ar</li>
            <li><strong>Ventas:</strong> ventas@hermanosjota.com.ar</li>
            <li><strong>Instagram:</strong> @hermanosjota_ba</li>
            <li><strong>WhatsApp:</strong> +54 11 4567-8900</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Hermanos Jota — Artesanía que honra el pasado.
      </div>
    </footer>
  );
}
