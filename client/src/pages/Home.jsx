export default function Home() {
return (
    <div style={{ padding: "40px" }}>
    <h1>Muebles que cuentan historias</h1>

    <p style={{ maxWidth: "600px", marginTop: "20px" }}>
        Cada pieza de Hermanos Jota nace de manos expertas y materiales nobles,
        combinando herencia y sustentabilidad en diseños que perduran generaciones.
    </p>

    <img 
        src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4"
        alt="Taller"
        style={{ 
        width: "100%", 
        maxWidth: "800px", 
        marginTop: "40px", 
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
        }}
    />
    </div>
);
}
