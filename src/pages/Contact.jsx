import '../styles/Pages/Projects.css';
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';

function Contact() {
  const contactList = [
    {
      method: 'Email',
      icon: <FaEnvelope />,
      detail: 'gregoryjabido@outlook.com',
      link: 'mailto:gregoryjabido@outlook.com',
    },
    {
      method: 'Phone',
      icon: <FaPhoneAlt />,
      detail: '509-701-2862',
      link: 'tel:5097012862',
    },
    {
      method: 'LinkedIn',
      icon: <FaLinkedin />,
      detail: 'Gregory Jabido',
      link: 'https://www.linkedin.com/in/gregory-jabido/',
    },
  ];

  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="projects-container contact-container">
        {contactList.map((contact, index) => (
          <div className="project-card contact-card" key={index}>
            <div className="contact-header">
              <span className="contact-icon">{contact.icon}</span>
              <h3>{contact.method}</h3>
            </div>
            <p>
              <a href={contact.link} target="_blank" rel="noopener noreferrer">
                {contact.detail}
              </a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contact;
