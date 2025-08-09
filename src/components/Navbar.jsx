import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ logo }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          {logo && (
            <Link to="/">
              <img src={logo} alt="Logo" className="logo-image" />
            </Link>
          )}
        </div>

        {/* Navigation Links */}
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/quem-somos" className="navbar-link">
              Quem Somos
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/onde-estamos" className="navbar-link">
              Onde Estamos
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/precarios" className="navbar-link">
              Preçários
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contactos" className="navbar-link">
              Contactos
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button (for future mobile implementation) */}
        <div className="navbar-toggle">
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
