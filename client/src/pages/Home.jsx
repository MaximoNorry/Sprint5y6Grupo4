import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>Artesanía que honra el pasado,<br />diseño que abraza el futuro.</h1>
          <p>
            Cada pieza cuenta la historia de manos expertas y materiales nobles.  
            Diseñamos muebles que no solo acompañan tu hogar, sino tu vida.
          </p>
          <Link to="/productos" className="hero-btn">Explorar Colección</Link>
        </div>
      </section>

      <section className="destacada">
        <h2>Colección 2025</h2>
        <p>
          Inspirada en la calidez del optimismo de los años 60 y en la elegancia natural 
          de los materiales sustentables.
        </p>

        <div className="destacada-grid">

          <Link to="/productos/69168848462fe4d33b677f51">
            <div className="destacada-card">
              <img src="http://localhost:4000/images/mesacomedorpampa.png" alt="Mesa Pampa" />
              <h3>Mesa Comedor Pampa</h3>
            </div>
          </Link>

          <Link to="/productos/691687ef462fe4d33b677f47">
            <div className="destacada-card">
              <img src="http://localhost:4000/images/silloncopacabana.png" alt="Sillón Copacabana" />
              <h3>Sillón Copacabana</h3>
            </div>
          </Link>

          <Link to="/productos/69168840462fe4d33b677f4f">
            <div className="destacada-card">
              <img src="http://localhost:4000/images/sofapatagonia.png" alt="Sofá Patagonia" />
              <h3>Sofá Patagonia</h3>
            </div>
          </Link>

        </div>
      </section>

    </div>
  );
};

export default Home;
