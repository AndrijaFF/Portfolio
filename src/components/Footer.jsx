import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-1">&copy; {new Date().getFullYear()} Andrija Tomic. Tous droits réservés.</p>
        <div>
          <a href="https://github.com/andrija" className="text-white me-3" target="_blank" rel="noreferrer">
            <i className="bi bi-github fs-5"></i>
          </a>
          <a href="https://linkedin.com/in/andrija" className="text-white me-3" target="_blank" rel="noreferrer">
            <i className="bi bi-linkedin fs-5"></i>
          </a>
          <a href="mailto:andrija@example.com" className="text-white">
            <i className="bi bi-envelope-fill fs-5"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
