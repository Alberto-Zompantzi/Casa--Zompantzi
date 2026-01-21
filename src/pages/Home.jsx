import React, { useState, useEffect } from "react";
import Seo from "../components/Seo/Seo";
import "../styles/pages/home.css";
import { categories } from "../features/catalog/catalog.data";

export default function Home() {
  const [activeCatIndex, setActiveCatIndex] = useState(0);

  // Lógica de Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      nextCat();
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
  }, [activeCatIndex]);

  const nextCat = () => {
    setActiveCatIndex((prev) =>
      prev === categories.length - 1 ? 0 : prev + 1,
    );
  };

  const prevCat = () => {
    setActiveCatIndex((prev) =>
      prev === 0 ? categories.length - 1 : prev - 1,
    );
  };

  return (
    <>
      <Seo
        title="Casa Zompantzi | Plásticos y desechables de calidad"
        description="Empresa mexicana con más de 50 años ofreciendo productos plásticos y desechables."
      />

      <div className="home-wrapper">
        {/* SECCIÓN 1: HERO */}
        <section className="main-hero">
          <div className="hero-overlay-dark">
            <div className="hero-main-content">
              <h1>
                Bienvenido a <span>Casa Zompantzi</span>
              </h1>
              <p>
                Calidad, variedad y compromiso en plásticos y desechables - más
                de 50 años nos respaldan
              </p>
              <a href="/productos" className="hero-main-btn">
                Conoce nuestros productos
              </a>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: TRIBUTO */}
        <section className="history-section">
          <div className="history-header">
            <div className="history-titles">
              <h2>
                Un Legado de Esfuerzo: Sr. Gregorio Zompantzi{" "}
                <span className="tribute-years">(1952 — 2024)</span>
              </h2>
              <div className="history-tribute-body">
                <p>
                  Casa Zompantzi nació del sueño y la dedicación incansable de
                  nuestro fundador, el Sr. Gregorio Zompantzi, quien dedicó su
                  vida entera a servir a esta región. Su vida fue un testimonio
                  de servicio hacia Teziutlán, atendiendo de corazón a cada
                  cliente durante décadas. Junto con su padre,Camilo Zompantzi,
                  fueron pioneros en el ramo en Teziutlán, Puebla y la región.
                  Su trato humano trascendió generaciones, convirtiendo a cada
                  cliente en parte de nuestra familia. Hoy, honramos su memoria
                  manteniendo viva su esencia. Su ejemplo es la fuerza que nos
                  impulsa a seguir adelante.
                </p>
                {/* ... resto del texto ... */}
              </div>
            </div>
          </div>
          <div className="history-images-grid">
            <img src="src/assets/images/Experiencia 3.jpg" alt="Historia 1" />
            <img src="src/assets/images/Experiencia.png" alt="Historia 2" />
            <img src="src/assets/images/Experiencia 2.png" alt="Historia 3" />
            <img src="src/assets/images/Experiencia 4.png" alt="Historia 4" />
          </div>
        </section>

        {/* SECCIÓN 3: SLIDER DE PRODUCTOS (Corregido) */}
        <section className="category-slider-section">
          <div className="slider-wrapper">
            <button className="nav-arrow left" onClick={prevCat}>
              〈
            </button>

            <div className="slider-container-full">
              <img
                key={categories[activeCatIndex].id} // La key ayuda a React a reiniciar la animación
                src={categories[activeCatIndex].image}
                alt={categories[activeCatIndex].title}
                className="slider-img-full"
              />
              <div className="slider-info-overlay">
                <p className="slider-description">
                  Contamos con Gran Variedad de{" "}
                  {categories[activeCatIndex].title}, Conócelos
                </p>
                <div className="slider-dots">
                  {categories.map((_, idx) => (
                    <span
                      key={idx}
                      className={`s-dot ${idx === activeCatIndex ? "active" : ""}`}
                      onClick={() => setActiveCatIndex(idx)}
                    ></span>
                  ))}
                </div>
              </div>
            </div>

            <button className="nav-arrow right" onClick={nextCat}>
              〉
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
