import { motion as Motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'gouravgiri.dev@gmail.com',
      link: 'mailto:gouravgiri.dev@gmail.com',
      color: '#EA4335'
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/gourav-giri/',
      color: '#0A66C2'
    },
    {
      icon: SiLeetcode,
      title: 'LeetCode',
      value: 'View my profile',
      link: 'https://leetcode.com/u/Coding_Gourav/',
      color: '#FFA116'
    },
    {
      icon: FaGithub,
      title: 'GitHub',
      value: 'Check my repos',
      link: 'https://github.com/GiriGourav',
      color: '#fff'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-container">
        <Motion.div
          className="section-header"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Get In Touch</p>
          <h2 className="section-title">Contact Me</h2>
          <p className="contact-intro">
            Feel free to reach out! I'm open to backend engineering roles,
            Java/Spring Boot opportunities, and collaborative product builds.
          </p>
        </Motion.div>

        <Motion.div
          className="contact-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {contactInfo.map((info, index) => (
            <Motion.a
              key={index}
              href={info.link}
              target={info.link.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="contact-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="contact-icon" style={{ color: info.color }}>
                <info.icon />
              </div>
              <h3 className="contact-title">{info.title}</h3>
              <p className="contact-value">{info.value}</p>
              <div className="contact-arrow">→</div>
            </Motion.a>
          ))}
        </Motion.div>

        <Motion.div
          className="cta-section"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3>Let's work together!</h3>
          <p>I'm currently seeking full-time backend engineering opportunities.</p>
          <a href="mailto:gouravgiri.dev@gmail.com" className="cta-button">
            Send me an email
          </a>
        </Motion.div>
      </div>
    </section>
  );
};

export default Contact;
