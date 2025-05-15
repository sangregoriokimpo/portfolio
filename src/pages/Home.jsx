import { useState } from 'react';
import '../styles/Pages/Home.css';
import ThreeText from '../components/ThreeText';

function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <section id="home">
      <h2>Gregory Jabido</h2>
      <p>Roboticist • Aerospace Engineer • MechE + EE @WSU</p>

      <div className="link-image-container">
        <a href="https://github.com/sangregoriokimpo" target="_blank" rel="noopener noreferrer">
          <img src="/assets/githubpfp.png" alt="GitHub Profile" />
        </a>
        <a href="https://www.linkedin.com/in/gregory-jabido/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/linkedinlogo.png" alt="LinkedIn Profile" />
        </a>
      </div>

      <button className="resume-button" onClick={() => setModalOpen(!isModalOpen)}>
        {isModalOpen ? "Close Resume" : "View Resume"}
      </button>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="resume-container">
              <iframe
                src="/assets/GregoryJabido.pdf"
                title="Gregory Jabido Resume"
                frameBorder="0"
              ></iframe>
            </div>
            <a
              href="/assets/GregoryJabido.pdf"
              download
              className="resume-button"
            >
              Download PDF
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;
