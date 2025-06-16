import Swal from "sweetalert2";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Enviado!",
      text: "Pronto estaremos en contacto",
      icon: "success",
    });
  };

  return (
    <div className="contact">
      <h1 className="title"># Contact</h1>
      <div className="contactContainer">
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Tu nombre"
            required
          />
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="tuemail@ejemplo.com"
            required
          />
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Escribí tu mensaje aquí..."
            required
          ></textarea>

          <button type="submit" className="btn-submit">
            Enviar
          </button>
        </form>

        <div className="contact-info">
          <p>
            <i className="bi bi-link-45deg"></i> Email:{" "}
            <a href="mailto:lulipalazzini4@gmail.com">
              lulipalazzini4@gmail.com
            </a>
          </p>
          <p>
            <i className="bi bi-link-45deg"></i> Linkedin:{" "}
            <a
              href="https://www.linkedin.com/in/lucia-palazzini"
              target="_blank"
              rel="noreferrer"
            >
              Lucia Palazzini
            </a>
          </p>
          <p>
            <i className="bi bi-link-45deg"></i> GitHub:{" "}
            <a
              href="https://github.com/luciapalazzini"
              target="_blank"
              rel="noreferrer"
            >
              Lucia Palazzini
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
