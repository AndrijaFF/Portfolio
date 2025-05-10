import React from 'react';

const skills = [
  { name: "PHP", icon: "bi bi-code-slash" },
  { name: "JavaScript", icon: "bi bi-file-code" },
  { name: "React / Next.js", icon: "bi bi-lightning-charge" },
  { name: "Node.js", icon: "bi bi-hdd-network" },
  { name: "MariaDB / MySQL", icon: "bi bi-database" },
  { name: "Firebase", icon: "bi bi-cloud" },
  { name: "Symfony", icon: "bi bi-box" },
  { name: "Bootstrap", icon: "bi bi-bootstrap" },       
  { name: "Git / GitHub", icon: "bi bi-git" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-5 bg-light text-dark">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Compétences</h2>
        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div className="col-6 col-md-3 mb-4" key={index}>
              <div className="p-3 border rounded shadow-sm h-100">
                <i className={`${skill.icon} fs-2 mb-2 text-primary`}></i>
                <h6 className="mb-0">{skill.name}</h6>
              </div>
            </div>
          ))}
          <div className="mt-4">
          <a
  href="/TOMICAndrija.pdf"
  className="btn btn-outline-dark"
  download
>
  <i className="bi bi-download me-2"></i>
  Télécharger mon CV
</a>
</div>
        </div>
      </div>
    </section>
  );
}
