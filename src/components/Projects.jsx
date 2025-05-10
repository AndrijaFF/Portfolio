import React from 'react';

const projectList = [
  {
    title: "Eventude",
    description: "Plateforme de gestion d’événements avec rôles, QR codes et statistiques.",
    tech: "React, Node.js, MariaDB",
    link: "https://github.com/AndrijaFF/ChallengeWebs"
  },
  {
    title: "Banque App",
    description: "Application bancaire avec Firebase, gestion des transactions et dashboard.",
    tech: "Next.js, Firebase",
    link: "https://github.com/MathieuAudibert/Reactjs-B3"
  },
  {
    title: "Flammeo",
    description: "Site e-commerce de vente de clés de jeux vidéo développé avec Symfony.",
    tech: "Symfony, Twig, MySQL",
    link: "https://github.com/RomeoAg13/Flammeo"
  }
];

export default function Projects() {
        return (
            <section id="projects" className="py-5 bg-light text-dark">
            <div className="container">
                <h2 className="text-center fw-bold mb-4">Projets</h2>
                <div className="row">
                {projectList.map((project, index) => (
            <div
            className="col-md-4 mb-4"
            key={index}
            data-aos="zoom-in-up"
            data-aos-delay={index * 150}
            data-aos-duration="700"
            >
            <div className="card h-100 shadow-sm">
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text flex-grow-1">{project.description}</p>
                <p className="text-muted mb-2">
                <i className="bi bi-code-slash me-1"></i>{project.tech}
                </p>
                <a
                href={project.link}
                className="btn btn-outline-dark mt-auto"
                target="_blank"
                rel="noreferrer"
                >
                Voir sur GitHub
                </a>
            </div>
            </div>
        </div>
        ))}

        </div>
      </div>
    </section>
  );
}
