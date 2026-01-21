import { Link } from "react-router-dom";
import "../../styles/layout.css";

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar__logo">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Logo de Casa Zompantzi"
              className="logo"
            />
          </Link>
        </div>

        <div className="navbar__right">
          <input type="checkbox" id="menu-toggle" className="menu-toggle" />
          <label htmlFor="menu-toggle" className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </label>

          <ul className="navbar__menu">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/productos">Productos</Link>
            </li>
            <li>
              <Link to="/historia">Historia</Link>
            </li>
            <li>
              <Link to="/sucursal">Sucursal</Link>
            </li>
          </ul>

          <div className="navbar__cta">
            <a
              href="https://wa.me/5212311337700"
              className="btn"
              target="_blank"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100063606190096"
              className="facebook-icon"
              target="_blank"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
