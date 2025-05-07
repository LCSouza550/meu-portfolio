import React, { useState } from "react";
import "../App.css";

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Aqui você poderia integrar com EmailJS, Formspree, etc.
    };

    return (
        <section className="fade-in">
            <h2>Contato</h2>
            {submitted ? (
                <p>Obrigado pelo contato! Responderei em breve.</p>
            ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                    <input type="text" name="name" placeholder="Nome" value={formData.name} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    <textarea name="message" placeholder="Mensagem" rows={5} value={formData.message} onChange={handleChange} required></textarea>
                    <button type="submit">Enviar</button>
                </form>
            )}
        </section>
    );
};

export default Contact;
