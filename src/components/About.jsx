import { motion as Motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaFileDownload } from 'react-icons/fa';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section id="about" className="about" ref={ref}>
      <div className="about-container">
        <Motion.div
          className="section-header"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Get To Know More</p>
          <h2 className="section-title">About Me</h2>
        </Motion.div>

        <Motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Motion.div variants={itemVariants} className="about-image">
            <div className="image-container">
              <img src={assetPath('assets/About me.jpeg')} alt="About me" />
              <div className="image-overlay"></div>
            </div>
          </Motion.div>

          <div className="about-details">
            <Motion.div variants={itemVariants} className="about-cards">
              <div className="about-card">
                <div className="card-icon">
                  <FaGraduationCap />
                </div>
                <h3>Education</h3>
                <p className="card-label">ABES Engineering College</p>
                <p className="card-text">B.Tech CSE, 2023 - 2027</p>
              </div>

              <div className="about-card">
                <div className="card-icon">
                  <FaFileDownload />
                </div>
                <h3>Resume</h3>
                <p className="card-label">Download My CV</p>
                <a href={assetPath('assets/Resume%20Gourav%20Giri.pdf')} download>
                  <button className="download-btn">Download</button>
                </a>
              </div>
            </Motion.div>

            <Motion.div variants={itemVariants} className="about-text">
              <p>
                I'm a final year Computer Science student at ABES Engineering College, seeking
                full-time backend engineering roles where I can work with Java, Spring Boot,
                distributed systems, and production-ready APIs.
              </p>
              <p>
                My work focuses on scalable backend architecture: microservices, JWT
                authentication, API gateways, event-driven communication with Kafka and
                RabbitMQ, MySQL-backed services, and Docker-based deployment workflows.
              </p>
              <p>
                I have solved 350+ DSA problems across LeetCode, CodeChef, and
                GeeksforGeeks, reached a 1600+ LeetCode rating, and contributed to
                open-source Java/Spring Boot repositories through GirlScript Summer of Code.
              </p>
            </Motion.div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default About;
