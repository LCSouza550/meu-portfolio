import React from "react";
import "../App.css";

const Projects: React.FC = () => {
    return (
        <section className="fade-in">
            <h2>Projetos</h2>
            <ul className="project-list">
                <li>
                    <strong>Sistema de Acesso com Token</strong>
                    <br />
                    React + TypeScript, Axios, autenticação via URL, layout modular e permissões.
                    <br />
                    <a href="https://github.com/LCSouza550/projeto-token" target="_blank" rel="noreferrer">
                        Ver repositório
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Projects;
