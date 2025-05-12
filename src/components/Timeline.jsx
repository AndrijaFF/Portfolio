import React from 'react';

const steps = [
  {
    date: "2022 - 2025",
    title: "Bachelor Développement & Data",
    location: "Efrei Paris",
    description: "Formation en alternance orientée développement web, bases de données et cloud.",
  },
  {
    date: "2023",
    title: "Stage - Mairie d’Aulnay-sous-Bois",
    location: "Développeur front-end",
    description: "Amélioration du portail famille en HTML, CSS et intégration responsive.",
  },
  {
    date: "2024",
    title: "Stage - Edmond de Rothschild",
    location: "Développeur back-end",
    description: "Développement d’API financières en C# et automatisation de traitements de données.",
  },
  {
    date: "2024 - 2025",
    title: "Alternance - Free - Protelco",
    location: "Développeur full-stack",
    description: "Refonte et développement d’outils internes pour les équipes techniques (PHP, JavaScript, MariaDB)."
  },
  {
    date: "2025 - 2027",
    title: "Mastère Data Engineering & IA",
    location: "Efrei Paris",
    description: "Spécialisation en traitement de données massives, cloud et intelligence artificielle.",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-5 bg-white text-dark dark-section">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Parcours</h2>
        <div className="timeline">
          {steps.map((step, index) => (
            <div
              className="mb-4 timeline-item"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="600"
            >
              <h6 className="fw-bold">{step.title}</h6>
              <p className="mb-1 text-muted">{step.date} – {step.location}</p>
              <p>{step.description}</p>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
