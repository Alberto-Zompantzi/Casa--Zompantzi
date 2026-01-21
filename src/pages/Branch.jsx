import Seo from "../components/Seo/Seo";
import "../styles/pages/branch.css";

export default function Branch() {
  return (
    <>
      <Seo
        title="Sucursal | Casa Zompantzi"
        description="Ubicación y contacto de nuestra sucursal."
        url="https://casazompantzi.pages.dev/sucursal"
        image="https://casazompantzi.pages.dev/fabicon.svg"
      />

      <section id="contacto" className="ubicacion">
        <h2>Ubicación</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.5182020765615!2d-97.36389122531675!3d19.818015028260678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85daeb6f67d2aa63%3A0x7b45b2cda32398dd!2sCasa%20TZOMPANTZI!5e0!3m2!1sen!2smx!4v1761349093632!5m2!1sen!2smx"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Ubicación Casa Zompantzi"
          ></iframe>
          <div className="direccion">
            <p>
              <strong>Dirección:</strong> Local #24, Anexo Mercado Victoria
              Centro, Teziutlán, Puebla, México.
              <br />
              (El local se encuentra entrando por la entrada principal del
              Mercado Victoria, en el primer pasillo a mano derecha, siendo el
              segundo local del pasillo)
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
