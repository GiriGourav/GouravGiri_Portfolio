import { motion as Motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaDownload } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

  const projects = [
    {
      title: 'Smart AI-Based Quiz Generator',
      description: 'Scalable microservices quiz platform with JWT authentication, API Gateway, Spring AI quiz generation, Kafka and RabbitMQ messaging, Docker, and Kubernetes deployment basics.',
      image: assetPath('assets/docs.png'),
      github: 'https://github.com/GiriGourav/Smart-AI-Based-Quiz-Generator',
      tags: ['Java', 'Spring Boot', 'Microservices', 'Spring AI', 'Kafka', 'RabbitMQ', 'Docker', 'Kubernetes']
    },
    {
      title: 'IRCTC Backend System',
      description: 'IRCTC-like backend supporting booking, cancellation, payment, and admin workflows with 20+ REST APIs, JWT authentication, optimized MySQL queries, and transaction management.',
      image: assetPath('assets/project-4.png'),
      github: 'https://github.com/GiriGourav',
      tags: ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'JWT', 'Transactions']
    },
    {
      title: 'Smart Result Management System',
      description: 'Role-based result management system for 2000+ student records, automated result generation, responsive Thymeleaf UI, and MySQL-backed data retrieval.',
      image: assetPath('assets/project-3.png'),
      github: 'https://github.com/GiriGourav',
      tags: ['Java', 'Spring Boot', 'Thymeleaf', 'MySQL', 'RBAC']
    },
    {
      title: 'Amazon Selenium Automation Project',
      description: 'End-to-end Selenium automation project for Amazon workflows, built with Java, Maven, and TestNG to validate core browser interactions and regression scenarios.',
      image: assetPath('assets/project-2.png'),
      github: 'https://github.com/GiriGourav/Amazon-Selenium-Automation-Project',
      tags: ['Java', 'Selenium', 'TestNG', 'Maven', 'Automation Testing']
    },
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
    <section id="projects" className="projects" ref={ref}>
      <div className="projects-container">
        <Motion.div
          className="section-header"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Browse My Recent</p>
          <h2 className="section-title">Projects</h2>
        </Motion.div>

        <Motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <Motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub />
                      <span>Code</span>
                    </a>
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaExternalLinkAlt />
                        <span>Live</span>
                      </a>
                    )}
                    {project.downloadApk && (
                      <a 
                        href={project.downloadApk} 
                        download
                        className="project-link"
                      >
                        <FaDownload />
                        <span>APK</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default Projects;

