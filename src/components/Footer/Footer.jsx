import { Link } from "react-router-dom";
import "../../styles/layout.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <Link to="/">
          <img
            src="/src/assets/images/logo.png"
            alt="Logo de Casa Zompantzi"
            className="logo"
          />
        </Link>
      </div>

      <div className="footer-socials">
        <a
          href="https://www.facebook.com/profile.php?id=100063606190096"
          target="_blank"
          className="facebook-icon"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>

        <a href="https://wa.me/5212311337700" target="_blank" className="btn">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>

      <p className="footer-copyright">
        &copy; 2026. Todos Los derechos reservados.
      </p>
    </footer>
  );
}
