import Seo from "../components/Seo/Seo";
import "../styles/pages/history.css";

export default function History() {
  return (
    <>
      <Seo
        title="Historia | Casa Zompantzi"
        description="Conoce la historia y trayectoria de Casa Zompantzi."
        url="https://casazompantzi.pages.dev/historia"
        image="https://casazompantzi.pages.dev/fabicon.png"
      />

      <section id="historia" className="historia">
        <h2>Nuestra Historia</h2>
        <div className="timeline">
          <div className="timeline-item left">
            <div className="timeline-content">
              <img
                src="/Experiencia 3.jpg"
                alt="Más de 50 años de experiencia"
              />
              <div className="text">
                <h3>Más De 50 Años De Experiencia</h3>
                <p>
                  Vendiendo la mejor calidad en plásticos. Pioneros en el ramo
                  en el Pueblo Mágico de Teziutlán, Puebla.
                </p>
              </div>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-content">
              <img
                src="/Experiencia 2.png"
                alt="Atención de generación en generación"
              />
              <div className="text">
                <h3>Atención De Generación En Generación</h3>
                <p>
                  Nos distingue la excelente atención con nuestros clientes,
                  brindando confianza y tradición familiar.
                </p>
              </div>
            </div>
          </div>

          <div className="timeline-item left">
            <div className="timeline-content">
              <img src="/Experiencia.png" alt="Precios y variedad" />
              <div className="text">
                <h3>Precios y Variedad</h3>
                <p>
                  Contamos con los mejores precios y variedad en plásticos y
                  adornos para todas las temporadas.
                </p>
              </div>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-content">
              <img src="/Experiencia 4.png" alt="Seguimos creciendo" />
              <div className="text">
                <h3>Seguimos Creciendo</h3>
                <p>
                  Visítanos y comprueba por qué somos la mejor opción en
                  plásticos en Teziutlán Puebla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
