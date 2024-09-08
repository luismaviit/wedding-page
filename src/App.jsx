import React from "react";
import "./App.css";
import { Link } from "react-scroll";
import { presentConfirm } from "./helper";

function App() {
  const [gift, setGift] = React.useState([]);
  const [selectedGift, setSelectedGift] = React.useState();
  const [code, setCode] = React.useState();
  const [confirm, setConfirm] = React.useState(null);
  const [requestMessage, setRequestMessage] = React.useState(null);

  async function getGift() {
    const response = await fetch("https://wedding-od29.onrender.com/presents");
    const data = await response.json();
    setGift(data);
  }
  React.useEffect(() => {
    if (gift.length == 0) {
      getGift();
    }
  }, []);

  function showDialog(confirm) {
    if (confirm == null) {
      return null;
    } else if (confirm == true) {
      return (
        <div className="alert alert-success form-alert" role="alert">
          Confirmación exitosa
        </div>
      );
    } else if (confirm == false) {
      return (
        <div className="alert alert-danger form-alert" role="alert">
          Error al confirmar, por favor vuelva a intentar
        </div>
      );
    }
  }

  const handleConfirmation = async () => {
    const dataPresent = {
      code: code,
      presentId: parseInt(selectedGift),
      confirm: true,
    };
    const response = presentConfirm(dataPresent).then((response) => {
      console.log("esto", response);
      if (response.message) {
        setConfirm(true);
        setRequestMessage(response.message);
      } else if (response.error) {
        setConfirm(false);
        setRequestMessage(response.error);
      }
    });

    /*  try {
      const response = await presentConfirm(dataPresent);
      console.log("todo salio bien", response);
      setConfirm(true);
      setRequestMessage(response.message);
    } catch (error) {
      setConfirm(false);
      setRequestMessage(error.Error);
    } */
  };

  const openGoogleMaps = () => {
    const destination = "11.0400684,-74.9122979"; // Coordenadas de destino (latitud, longitud)
    const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
    window.open(url, "_blank");
  };
  const openWhatsApp = (n) => {
    if (n === 1) {
      const phoneNumber = "+573128994670"; // Reemplaza con el número de teléfono deseado
      const message = "¡Hola! Ruben quiero felicitarte"; // Mensaje predeterminado (opcional)
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank");
    }
    if (n === 2) {
      const phoneNumber = "+573225369150"; // Reemplaza con el número de teléfono deseado
      const message = "¡Hola! Keren quiero felicitarte"; // Mensaje predeterminado (opcional)
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank");
    }
  };
  const addGoogleCalendarEvent = () => {
    const eventTitle = "Boda de Keren y Ruben";
    const eventLocation = "Casa Campestre El Lote, Barranquilla, Colombia";
    const eventDetails = "No te pierdas la boda de Keren y Ruben.";
    const startDate = "20241116T210000Z"; // 16 de noviembre de 2024, 4:00 PM hora Colombia (UTC-5)
    const endDate = "20241116T230000Z"; // 16 de noviembre de 2024, 6:00 PM hora Colombia (UTC-5)

    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      eventTitle
    )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
      eventDetails
    )}&location=${encodeURIComponent(eventLocation)}&sf=true&output=xml`;
    window.open(url, "_blank");
  };
  return (
    <>
      <div className="hero">
        {/*  <nav className="nav">
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
            to="confirm-assistance"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            {" "}
            <span className="span-button">
              confirmar asistencia
              <i className="bi bi-check-circle-fill"></i>
            </span>
          </Link>
        </nav> */}
        <nav className="nav navbar navbar-expand-lg fixed-top navbar-dark ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
        {/*       Navbar */}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="nav collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
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
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Link
                      activeClass="active"
                      to="confirm-assistance"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                    >
                      {" "}
                      <span className="span-button">
                        confirmar asistencia
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="hero-content">
          <div className="tittles-hero">
            <span className="sub-tittle">Nuestra boda</span>
            <h1 className="tittle-hero">
              Ruben & <br />
              Keren
            </h1>
          </div>
          <div className="two-section">
            <h3 className="date"> 16 Nov 2024 / 4:00 P.M </h3>
            <button
              className="button-calendar"
              onClick={addGoogleCalendarEvent}
            >
              Agregar al calendario
              <i className="bi bi-calendar-plus-fill icon-calendar"></i>
            </button>
          </div>
        </div>
      </div>
      {/* informacion parejas */}
      <div className="container-fluid ">
        <div className="row row-biblical-quotation">
          <div className="col biblical-quotation">
            <h3 className="biblical-text">
              Ponme como un sello sobre tu corazón, <br />
              como una marca sobre tu
              <br />
              brazo; Porque fuerte es como la muerte el amor.
              <br />
            </h3>
            <h1>Cantares 8:6</h1>
          </div>
        </div>
        <div className="row bride-groom-info ">
          <div className="col-xl-4  col-sm-12">
            <img
              className="image-bride-groom"
              src="https://res.cloudinary.com/rawwshak/image/upload/v1725638617/ruben-profile_oucaao.jpg"
              alt="The groom"
            />
          </div>
          <div className="col-xl-8 col-sm-12 groom-history">
            <span className="tittle-history">El novio</span>
            <p className="text-groom">
              Rubén quiere mucho a Keren. Son su mayor apoyo y su mejor amiga.
              Juntos
              <br />
              han compartido innumerables momentos que atesora en su corazón.
              Cada día a su lado es una
              <br />
              aventura llena de amor y risas. Rubén se siente afortunado de
              poder compartir su vida con una
              <br />
              persona tan especial como Keren, a quien ama profundamente y con
              quien sueña construir un
              <br />
              futuro lleno de felicidad.
            </p>
            <button className="button-whatsapp" onClick={() => openWhatsApp(1)}>
              Felicita el novio <i className="bi bi-whatsapp"></i>
            </button>
          </div>
        </div>
        <div className="row bride-groom-info">
          <div className="col-xl-8 col-sm-12 bride-history">
            <span className="tittle-history">La novia</span>
            <p className="text-groom">
              Keren siente un profundo amor por Rubén. A su lado ha encontrado a
              su mejor
              <br />
              amigo y confidente. Juntos han creado recuerdos inolvidables, y
              cada día que pasa, su amor solo
              <br />
              crece. Rubén es su compañero ideal, con quien sueña construir una
              vida llena de alegrías y
              <br />
              aventuras. Keren está agradecida por el amor y la felicidad que
              comparten, y no puede esperar a
              <br />
              vivir cada nuevo capítulo juntos.
            </p>
            <button className="button-whatsapp" onClick={() => openWhatsApp(2)}>
              Felicita la novia <i className="bi bi-whatsapp"></i>
            </button>
          </div>
          <div className="col-xl-4  col-sm-12">
            <img
              className="image-bride-groom"
              src="https://res.cloudinary.com/rawwshak/image/upload/v1725638665/keren_alz3s5.jpg"
              alt="The groom"
            />
          </div>
        </div>
      </div>

      {/* Sección del mapa */}
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
            <i className="bi bi-sign-turn-slight-right-fill"></i>
          </button>
        </div>
      </div>

      {/* Formulario de asistencia */}
      <div id="confirm-assistance" className="container-fluid ">
        <div className="row assistance">
          <div className="row">
            <div className="col-xl-12  col-sm-12">
              <h1 className="tittle-assistance">Confirmación de Asistencia</h1>
            </div>
          </div>

          <div className="col-xl-6  col-sm-12 form-options">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <i className="bi bi-upc-scan"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Código de invitación"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(event) => setCode(event.target.value)}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <i className="bi bi-gift-fill"></i>
              </span>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(event) => setSelectedGift(event.target.value)}
              >
                <option selected>Selecciona un regalo de la lista</option>
                {gift.map((item, key) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </select>
            </div>
            <button
              className="confirm-assistance"
              onClick={handleConfirmation}
              //onClick={() => console.log(code)}
            >
              confirmar asistencia
            </button>
          </div>
          <div className="col-xl-6 col-sm-12 instructions">
            {/*             <h3 className="tittle-instructions">Instrucciones</h3>
             */}{" "}
            <em>
              {/* <div className="wrapper-intructions">
                <span className="span-intructions">•</span>
                <p className="guide-instructions">
                  El codigo de invitación a digitar es la primera iniciar de tu
                  nombre + los 4 ultimos digitos de tu celular ejemplo: Z2345.
                </p>
              </div> */}
              {/*  <div className="wrapper-intructions">
                <span className="span-intructions">•</span>
                <p className="guide-instructions">
                  Debes escoger un regalo, en caso de no escoger uno,
                  seleccionar lluvia de sobre.
                </p>
              </div> */}
              {/* <div className="wrapper-intructions">
                <p className="guide-instructions">
                  <strong> Nota : </strong>si presentas algun problema con el
                  codigo de invitación, por favor comunicarte con algunos de los
                  novios.
                </p>
              </div> */}
            </em>
          </div>

          {confirm == null ? (
            <></>
          ) : confirm == true ? (
            <div className="alert alert-success form-alert" role="alert">
              {requestMessage}
            </div>
          ) : (
            <div className="alert alert-danger form-alert" role="alert">
              {requestMessage}
            </div>
          )}
        </div>
      </div>

      {/* footer */}
      <footer className="footer-container">
        Hecho por{" "}
        <a href="https://github.com/luismaviit" className="anchor">
          {" "}
          luismaviit
        </a>{" "}
        <i className="bi bi-github icon-github"></i>
      </footer>
    </>
  );
}

export default App;
