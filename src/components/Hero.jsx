import { useEffect, useRef } from 'react';
import { motion as Motion } from 'framer-motion';
import Typed from 'typed.js';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Hero.css';

const Hero = () => {
  const typedRef = useRef(null);
  const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Backend Engineer',
        'Java Developer',
        'Spring Boot Developer',
        'Problem Solver'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const imageVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
        delay: 0.5
      }
    }
  };

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/GiriGourav', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/gourav-giri/', label: 'LinkedIn' },
    { icon: SiLeetcode, href: 'https://leetcode.com/u/Coding_Gourav/', label: 'LeetCode' },
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <Motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Motion.div variants={itemVariants} className="hero-greeting">
            <span className="wave">👋</span> Hi, I'm
          </Motion.div>

          <Motion.h1 variants={itemVariants} className="hero-name">
            Gourav <span className="gradient-text">Giri</span>
          </Motion.h1>

          <Motion.div variants={itemVariants} className="hero-title">
            <span>I'm a passionate </span>
            <span ref={typedRef} className="typed-text"></span>
          </Motion.div>

          <Motion.p variants={itemVariants} className="hero-description">
            Final year Computer Science student at ABES Engineering College, focused on
            Java, Spring Boot, microservices, Kafka, Docker, and building scalable backend systems.
          </Motion.p>

          <Motion.div variants={itemVariants} className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a href={assetPath('assets/Resume%20Gourav%20Giri.pdf')} download className="btn btn-secondary">
              Download CV
            </a>
          </Motion.div>

          <Motion.div variants={itemVariants} className="hero-socials">
            {socialLinks.map((social, index) => (
              <Motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon />
              </Motion.a>
            ))}
          </Motion.div>
        </Motion.div>

        <Motion.div 
          className="hero-image"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <Motion.div 
            className="image-wrapper"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src={assetPath('assets/bg.png')} alt="Gourav" />
            <div className="image-glow"></div>
          </Motion.div>
        </Motion.div>
      </div>

      <Motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <Motion.div
          className="mouse"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="wheel"></div>
        </Motion.div>
      </Motion.div>
    </section>
  );
};

export default Hero;
