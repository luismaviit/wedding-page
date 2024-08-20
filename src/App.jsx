import "./App.css";

function App() {
  const openGoogleMaps = () => {
    const destination = "11.0400684,-74.9122979"; // Coordenadas de destino (latitud, longitud)
    const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
    window.open(url, "_blank");
  };
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <div className="tittles-hero">
            <span className="sub-tittle"> La boda de ...</span>
            <h1 className="tittle-hero">
              Keren & <br />
              Ruben
            </h1>
          </div>
          <div className="two-section">
            <h3 className="date"> Noviembre</h3>
            <h1 className="day-wedding">16</h1>
            <h3 className="date"> 2024</h3>
          </div>
        </div>
      </div>

      {/* Sección del Mapa debajo del Hero */}
      <div className="map-section">
        <iframe
          className="map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.980770841985!2d-74.9122979!3d11.040068399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42bd1ca7a3b29%3A0xa39b67f814f3e3eb!2sCasa%20Campestre%20El%20LOTE!5e0!3m2!1ses!2sco!4v1724185873456!5m2!1ses!2sco"
          width="100%"
          style={{ border: 3 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="button-section">
          <button onClick={openGoogleMaps} className="route-button">
            Iniciar Ruta
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
