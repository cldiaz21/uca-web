import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles.css';
import logo from '../assets/img/logo.png';

const Navbar = () => {
  const [navbarShrink, setNavbarShrink] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setNavbarShrink(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevenir scroll cuando el menú móvil está abierto
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    // Scroll to top cuando cambia la ruta
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          const navbarHeight = document.getElementById('mainNav')?.offsetHeight || 80;
          const targetPosition = section.offsetTop - navbarHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }, 300);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        const navbarHeight = document.getElementById('mainNav')?.offsetHeight || 80;
        const targetPosition = section.offsetTop - navbarHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav id="mainNav" className={`navbar navbar-expand-lg fixed-top ${navbarShrink ? 'navbar-shrink' : ''}`}>
      <div className="container">
        <Link 
          className="navbar-brand" 
          to="/" 
          aria-label="Inicio"
        >
          <img src={logo} alt="UCA logo" />
        </Link>
        <button 
          className={`navbar-toggler ${isMenuOpen ? 'open' : ''}`} 
          type="button" 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
                to="/"
                onClick={toggleMenu}
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/quienes-somos' ? 'active' : ''}`} 
                to="/quienes-somos"
                onClick={toggleMenu}
              >
                Quiénes Somos
              </Link>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link"
                href="#rubros"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('rubros');
                }}
              >
                Sectores
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link"
                href="#clientes"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('clientes');
                }}
              >
                Clientes
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                Contáctanos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
