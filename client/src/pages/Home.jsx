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
          <a href="/productos" className="hero-btn">Explorar Colección</a>
        </div>
      </section>

      <section className="destacada">
        <h2>Colección 2025</h2>
        <p>
          Inspirada en la calidez del optimismo de los años 60 y en la elegancia natural 
          de los materiales sustentables.
        </p>

        <div className="destacada-grid">
          <div className="destacada-card">
            <img src="/images/mesa pampa.png" alt="Mesa Pampa" />
            <h3>Mesa Comedor Pampa</h3>
          </div>

          <div className="destacada-card">
            <img src="/images/sillon copacabana.png" alt="Sillón Copacabana" />
            <h3>Sillón Copacabana</h3>
          </div>

          <div className="destacada-card">
            <img src="/images/sofa patagonia.png" alt="Sofá Patagonia" />
            <h3>Sofá Patagonia</h3>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;