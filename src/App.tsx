import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";

const App: React.FC = () => {
    return (
        <Router>
            <div className="app">
                <header className="header">
                    <h1>Meu Portfólio</h1>
                    <nav>
                        <Link to="/">Início</Link>
                        <Link to="/projects">Projetos</Link>
                        <Link to="/contact">Contato</Link>
                    </nav>
                </header>
                <main className="main">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <footer className="footer">© 2025 Seu Nome</footer>
            </div>
        </Router>
    );
};

export default App;
