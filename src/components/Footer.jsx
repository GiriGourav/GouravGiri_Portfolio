import { motion as Motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <Motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <nav className="footer-nav">
            <ul>
              {navLinks.map((link, index) => (
                <Motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a href={link.href}>{link.name}</a>
                </Motion.li>
              ))}
            </ul>
          </nav>

          <div className="footer-divider"></div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              Copyright © {currentYear} Gourav Giri. All Rights Reserved.
            </p>
            <p className="footer-made-with">
              Made with <FaHeart className="heart-icon" /> using React & Framer Motion
            </p>
          </div>
        </Motion.div>
      </div>
    </footer>
  );
};

export default Footer;
