import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-5 bg-dark text-white">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Contact</h2>
        <p>Vous pouvez me contacter par mail ou via mes réseaux :</p>

        <p>
          <i className="bi bi-envelope-fill me-2"></i>
          <a href="mailto:tomicpro04@gmail.com" className="text-white text-decoration-underline">
            tomicpro04@gmail.com
          </a>
        </p>

        <p>
          <i className="bi bi-linkedin me-2"></i>
          <a
            href="https://linkedin.com/in/andrija"
            className="text-white text-decoration-underline"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>

        <p>
          <i className="bi bi-github me-2"></i>
          <a
            href="https://github.com/andrija"
            className="text-white text-decoration-underline"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>

        <hr className="bg-light my-4" />

        <p className="mb-0 small">
          &copy; {new Date().getFullYear()} Andrija Tomic. Tous droits réservés.
        </p>
      </div>
    </section>
  );
}
