import "./App.css";
import { Link } from "react-scroll";

function App() {
  const openGoogleMaps = () => {
    const destination = "11.0400684,-74.9122979"; // Coordenadas de destino (latitud, longitud)
    const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
    window.open(url, "_blank");
  };
  return (
    <>
      <div className="hero">
        <nav className="nav">
          <Link
            activeClass="active"
            to="route"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <span className="span-button">
              como llegar <i className="bi bi-geo-alt-fill"></i>
            </span>
          </Link>
          <Link
            activeClass="active"
            to="route"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            {" "}
            <span className="span-button">
              confirmar asistencia
              <i className="bi bi-check-circle-fill"></i>
            </span>
          </Link>
        </nav>
        <div className="hero-content">
          <div className="tittles-hero">
            <span className="sub-tittle"> La boda de ...</span>
            <h1 className="tittle-hero">
              Ruben & <br />
              Keren
            </h1>
          </div>
          <div className="two-section">
            <h3 className="date"> 16 Nov 2024</h3>
          </div>
        </div>
      </div>
      {/* informacion parejas */}
      <div className="container-fluid ">
        <div className="row row-biblical-quotation">
          <div className="col biblical-quotation">
            <h3 className="biblical-text">
              El amor es sufrido, es benigno; el amor no tiene envidia, el amor{" "}
              <br />
              no es jactancioso, no se envanece; no hace nada indebido, no busca
              <br />
              lo suyo, no se irrita, no guarda rencor; no se goza de la
              <br />
              injusticia, mas se goza de la verdad. Todo lo sufre, todo lo cree,
              <br />
              todo lo espera, todo lo soporta.
            </h3>
            <h1>Corintios 13:4-8</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-4">Column</div>
          <div className="col-8">Column</div>
        </div>
        <div className="row">
          <div className="col-8">Column</div>
          <div className="col-4">Column</div>
        </div>
      </div>

      {/* Sección del Mapa debajo del Hero */}
      <div id="route" className="map-section">
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
