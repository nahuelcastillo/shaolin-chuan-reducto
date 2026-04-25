// src/App.tsx

import { useState } from "react";
import "./App.css";

function App() {
	const [activeSection, setActiveSection] = useState("inicio");
	const [nombre, setNombre] = useState("");
	const [mensaje, setMensaje] = useState("");

	const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const numero = "091883633"; 
		const mensajeCompleto = `Hola, mi nombre es ${nombre}. ${mensaje}`;
		const urlWhatsApp = `https://wa.me/${numero}?text=${encodeURIComponent(mensajeCompleto)}`;
		window.open(urlWhatsApp, "_blank");
		// Limpiar el formulario
		setNombre("");
		setMensaje("");
	};

	return (
		<div className="app">
			{/* Header/Navigation */}
			<header className="header">
				<div className="navbar">
					<div className="logo-section">
						<img src="/LogoEscuela.png" alt="Logo Shaolin Chuan" className="school-logo" />
						<div className="school-info">
							<h1 className="school-name">Shaolin Chuan</h1>
							<p className="school-location">Sede Reducto</p>
						</div>
					</div>
					<nav className="navigation">
						<button
							className={activeSection === "inicio" ? "nav-btn active" : "nav-btn"}
							onClick={() => setActiveSection("inicio")}
						>
							Inicio
						</button>
						<button
							className={activeSection === "sobre" ? "nav-btn active" : "nav-btn"}
							onClick={() => setActiveSection("sobre")}
						>
							Sobre Nosotros
						</button>
						<button
							className={activeSection === "clases" ? "nav-btn active" : "nav-btn"}
							onClick={() => setActiveSection("clases")}
						>
							Clases
						</button>
						<button
							className={activeSection === "horarios" ? "nav-btn active" : "nav-btn"}
							onClick={() => setActiveSection("horarios")}
						>
							Horarios
						</button>
						<button
							className={activeSection === "contacto" ? "nav-btn active" : "nav-btn"}
							onClick={() => setActiveSection("contacto")}
						>
							Contacto
						</button>
					</nav>
				</div>
			</header>

			<main className="main-content">
				{/* Hero Section */}
				{activeSection === "inicio" && (
					<section className="hero">
						<div className="hero-content">
							<h2>Shaolin Kung Fu</h2>
							<img src="/LogoEscuela.png" alt="Logo Shaolin Chuan" style={{ width: "150px", height: "auto" }} />
							<img src="/LogoChina.png" alt="Logo Shaolin Chuan" style={{ width: "150px", height: "auto" }} />
							<p className="hero-subtitle">
								No solo un deporte, Un estilo de vida
							</p>
							<p className="hero-description">
								Shaolin Chuan Reducto, donde la tradición del Kung Fu forja disciplina, impulsa la superación y construye equilibrio
							</p>
							<button className="cta-button" onClick={() => setActiveSection("clases")}>
								Conoce Nuestras Clases
							</button>
						</div>

						<div className="instagram-gallery">
							<h3>Nuestras Últimas Publicaciones</h3>
							<div className="instagram-grid">
								<div className="instagram-item">
									<iframe
										src="https://www.instagram.com/p/DS26l-AkcpL/embed"
										width="100%"
										height="480"
										frameBorder="0"
										allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									></iframe>
								</div>
								<div className="instagram-item">
									<iframe
										src="https://www.instagram.com/p/DVOuk6okcRF/embed"
										width="100%"
										height="480"
										frameBorder="0"
										allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									></iframe>
								</div>
								<div className="instagram-item">
									<iframe
										src="https://www.instagram.com/p/DVyeermDiW3/embed"
										width="100%"
										height="480"
										frameBorder="0"
										allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									></iframe>
								</div>
							</div>
						</div>
					</section>
				)}

				{/* Sobre Nosotros */}
				{activeSection === "sobre" && (
					<section className="section">
						<h2>Sobre Nosotros</h2>
						<div className="content-grid">
							<div className="content-card">
								<h3>Nuestro Objetivo</h3>
								<p>
									Formar practicantes íntegros, desarrollando tanto habilidades marciales como valores humanos: 
									respeto, disciplina, perseverancia y humildad.
									</p>
								<p>	
									Buscamos también fomentar hábitos que trasciendan el arte marcial y acompañen a cada persona en su vida diaria.
								</p>
								<img src="/FotoTipo2.jpg"  style={{ width: "100%", height: "auto", marginTop: "10px" }} />
							</div>
							<div className="content-card">
								<h3>Tradición Auténtica</h3>
								<p>
									Preservamos y enseñamos Shaolin Kung fu en su forma tradicional, respetando los principios ancestrales del arte marcial chino.
									Nuestro linaje proviene directamente de China, de la escuela del Dashi Shi Yong Kan, ubicada en Henan, y continúa a través del 
									Shifu Shi Yan Yuan (Daniel Bogado).
								</p>
								<img src="/FotoTipo1.jpg" alt="Kung Fu Tradicional" style={{ width: "100%", height: "auto", marginTop: "10px" }} />
							</div>
							<div className="content-card">
								<h3>Comunidad Marcial</h3>
								<p>
									Somos una escuela de Kung Fu con presencia en distintas partes de Uruguay, dedicada a la enseñanza y difusión de la tradición Shaolin.
									Compartimos y celebramos nuestra cultura a través de eventos como el Año Nuevo Chino y otras actividades que fortalecen la comunidad marcial.
								</p>
								<img src="/FotoAñoNuevoChino.jpg" alt="Kung Fu Tradicional" style={{ width: "100%", height: "auto", marginTop: "10px" }} />
							</div>
						</div>
					</section>
				)}

				{/* Clases */}
				{activeSection === "clases" && (
					<section className="section">
						<h2>Nuestras Clases</h2>
						<div className="classes-grid">
							<div className="class-card">
								<h3>Niños</h3>
								<p className="level">Desde 5 años a 15</p>
								<ul>
									<li>Técnicas de Kung Fu</li>
									<li>Motricidad y movilidad</li>
									<li>Acrobacias</li>
									<li>Defensa personal</li>
									<li>Aprende jugando, Crece entrenando</li>
								</ul>
							</div>
							<div className="class-card">
								<h3>Adultos y adolescentes</h3>
								<p className="level">Desde 15 años en mas</p>
								<ul>
									<li>Técnicas de Kung Fu</li>
									<li>Motricidad y movilidad</li>
									<li>Defensa personal</li>
									<li>Acrobacias</li>
									<li>Nunca es tarde para empezar</li>
								</ul>
							</div>
							
						</div>

						<div className="video-container">
							<video 
								width="100%" 
								controls 
								loop 
								autoPlay 
								muted
								className="classes-video"
							>
								<source src="/VideoDelasClases.mp4" type="video/mp4" />
								Tu navegador no soporta el elemento de video.
							</video>
						</div>
					</section>
				)}

				{/* Horarios */}
				{activeSection === "horarios" && (
					<section className="section">
						<h2>Horarios</h2>
						<div className="schedule-container">
							<div className="schedule-table">
								<div className="schedule-row header">
									<div className="schedule-cell">Día</div>
									<div className="schedule-cell">Niños</div>
									<div className="schedule-cell">Adultos</div>

								</div>
								<div className="schedule-row">
									<div className="schedule-cell">Martes</div>
									<div className="schedule-cell">18:30 - 20:00</div>
									<div className="schedule-cell">20:00 - 21:30</div>

								</div>
								<div className="schedule-row">
									<div className="schedule-cell">Jueves</div>
									<div className="schedule-cell">18:30 - 20:00</div>
									<div className="schedule-cell">20:00 - 21:30</div>

								</div>
								<div className="schedule-row">
									<div className="schedule-cell">Viernes</div>
									<div className="schedule-cell">19:00 - 20:00</div>
									<div className="schedule-cell">20:00 - 21:00</div>

								</div>
								{/* Lo dejamos por las dudas si se suman 
								<div className="schedule-row">
									<div className="schedule-cell">Sábado</div>
									<div className="schedule-cell">10:00 - 11:00</div>
									<div className="schedule-cell">11:30 - 12:45</div>
									<div className="schedule-cell">14:00 - 15:30</div>
								</div>
								<div className="schedule-row">
									<div className="schedule-cell">Domingo</div>
									<div className="schedule-cell">10:00 - 11:00</div>
									<div className="schedule-cell">-</div>
									<div className="schedule-cell">-</div>
								</div>
								*/} 	
		
							</div>
							<p className="schedule-note">
								*Los horarios pueden variar. Consulta con nosotros para más
								información.
							</p>
						</div>
					</section>
				)}

				{/* Contacto */}
				{activeSection === "contacto" && (
					<section className="section">
						<h2>Contacto</h2>
						<div className="contact-container">
							<div className="contact-info">
								<div className="contact-item">
									<h3>📍 Ubicación</h3>
									<a href="https://maps.app.goo.gl/5cysbnGRNDgZ7c38A" target="_blank" rel="noopener noreferrer">
										<p>Barrio Reducto, Montevideo</p>
									</a>
									<p>Uruguay</p>
								</div>
								<div className="contact-item">
									<h3>📞 Teléfono</h3>
									<p>+598 091 883 633</p>
								</div>
								<div className="contact-item">
									<a href="https://www.instagram.com/shaolinchuan_reducto/" target="_blank" rel="noopener noreferrer">
										<div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
											<img src="/LogoIg.png" alt="Instagram Logo" style={{ width: "30px", height: "30px" }} />
											<h3>Instagram</h3>
										</div>
										<p>¡Siguenos! Para enterarte de todo</p>
									</a>
								</div>
								<div className="contact-item">
									<h3>🕐 Atención</h3>
									<p>Lunes a Viernes: 9:00 - 21:30</p>
									<p>Sábado y Domingo: -</p>
								</div>
							</div>
							<div className="contact-form"> 
								<p>¿Interesado en unirte a nuestra escuela?</p>
								<p>Completa el siguiente formulario y nos pondremos en contacto:</p>
							<form onSubmit={handleWhatsAppSubmit}>
								<input 
									type="text" 
									placeholder="Tu nombre" 
									value={nombre}
									onChange={(e) => setNombre(e.target.value)}
									required
								/>
								<textarea
									placeholder="Cuéntanos sobre ti y tu interés en el Kung Fu"
									rows={4}
									value={mensaje}
									onChange={(e) => setMensaje(e.target.value)}
									required
									></textarea>
									<button type="submit" className="submit-btn">
										Enviar
									</button>
								</form>
							</div>
						</div>
					</section>
				)}
			</main>

			{/* Footer */}
			<footer className="footer">
				<p>&copy; 2026 Shaolin Chuan Sede Reducto. Todos los derechos reservados.</p>
			</footer>
		</div>
	);
}

export default App;
