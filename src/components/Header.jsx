import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

export default function Header() {

    const [isDark, toggleDarkMode] = useDarkMode();

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
        <div className="container">
        <a
  className="navbar-brand fw-bold fs-4"
  href="#home"
  data-aos="fade-right"
  data-aos-duration="1000"
>
  Andrija Tomic
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

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">À propos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projets</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#timeline">Parcours</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              <li className="nav-item d-flex align-items-center ms-3">
              <button onClick={toggleDarkMode} className="btn btn-sm btn-outline-light">
              <i className={`bi ${isDark ? 'bi-sun' : 'bi-moon'}`}></i>
              </button>
            </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
