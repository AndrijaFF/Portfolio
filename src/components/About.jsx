import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-5 bg-light text-dark">
      <div className="container">
        <h2 className="mb-4 text-center fw-bold">À propos</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <p className="lead text-center">
              Je suis un développeur passionné, actuellement en 3ᵉ année de Bachelor à l’Efrei Paris. 
              Fort de plusieurs expériences en alternance, je me spécialise dans le back-end, les bases de données, et les projets full-stack concrets. 
              Mon objectif : intégrer un Mastère en Data & IA en alternance dès septembre 2025.
                <br />
                <br />
              Je suis actuellement à la recherche d'une alternance en Data / Back-End pour septembre 2025, en environnement stimulant, curieux et humain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
