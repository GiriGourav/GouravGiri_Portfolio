import { motion as Motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import { 
  FaHtml5, FaCss3Alt, FaJava, FaDocker, FaGitAlt, FaNetworkWired 
} from 'react-icons/fa';

import { 
  SiSpringboot, SiHibernate, SiMysql, SiApachekafka,
  SiRabbitmq, SiKubernetes, SiApachemaven, SiPostman,
  SiSwagger, SiThymeleaf
} from 'react-icons/si';

import { TbBinaryTree } from 'react-icons/tb';

import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const technicalSkills = [
    { name: 'Java', level: 'Advanced', icon: FaJava, color: '#007396' },
    { name: 'Spring Boot', level: 'Advanced', icon: SiSpringboot, color: '#6DB33F' },
    { name: 'Spring MVC', level: 'Intermediate', icon: SiSpringboot, color: '#6DB33F' },
    { name: 'Spring Security', level: 'Intermediate', icon: SiSpringboot, color: '#6DB33F' },
    { name: 'Hibernate', level: 'Intermediate', icon: SiHibernate, color: '#59666C' },
    { name: 'JPA', level: 'Intermediate', icon: SiHibernate, color: '#59666C' },
    { name: 'REST APIs', level: 'Advanced', icon: FaNetworkWired, color: '#FF6B6B' },
    { name: 'JWT Auth', level: 'Intermediate', icon: SiSwagger, color: '#85EA2D' },
    { name: 'MySQL', level: 'Advanced', icon: SiMysql, color: '#4479A1' },
    { name: 'Kafka', level: 'Intermediate', icon: SiApachekafka, color: '#8B5CF6' },
    { name: 'RabbitMQ', level: 'Intermediate', icon: SiRabbitmq, color: '#FF6600' },
    { name: 'Microservices', level: 'Intermediate', icon: FaNetworkWired, color: '#0EA5E9' },
    { name: 'Docker', level: 'Intermediate', icon: FaDocker, color: '#2496ED' },
    { name: 'Kubernetes', level: 'Basic', icon: SiKubernetes, color: '#326CE5' },
    { name: 'Git & GitHub', level: 'Advanced', icon: FaGitAlt, color: '#F05032' },
    { name: 'Maven', level: 'Intermediate', icon: SiApachemaven, color: '#C71A36' },
    { name: 'Postman', level: 'Advanced', icon: SiPostman, color: '#FF6C37' },
    { name: 'DSA', level: 'Advanced', icon: TbBinaryTree, color: '#FF6B6B' },
    { name: 'HTML5', level: 'Experienced', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', level: 'Experienced', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'Thymeleaf', level: 'Intermediate', icon: SiThymeleaf, color: '#005F0F' },
  ];

  const professionalSkills = [
    { name: 'Problem Solving', level: 'Advanced', percentage: 90 },
    { name: 'Teamwork', level: 'Excellent', percentage: 85 },
    { name: 'Leadership', level: 'Good', percentage: 80 },
    { name: 'Time Management', level: 'Excellent', percentage: 88 },
    { name: 'Communication', level: 'Good', percentage: 82 },
    { name: 'Active Listening', level: 'Excellent', percentage: 87 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="skills" ref={ref}>
      <div className="skills-container">
        <Motion.div
          className="section-header"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Explore My</p>
          <h2 className="section-title">Skills</h2>
        </Motion.div>

        <Motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Motion.div variants={itemVariants} className="skills-category">
            <h3 className="category-title">Technical Skills</h3>
            <div className="technical-skills-grid">
              {technicalSkills.map((skill) => (
                <Motion.div
                  key={skill.name}
                  className="skill-card"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="skill-icon" style={{ color: skill.color }}>
                    <skill.icon />
                  </div>
                  <h4>{skill.name}</h4>
                  <span className="skill-level">{skill.level}</span>
                </Motion.div>
              ))}
            </div>
          </Motion.div>

          <Motion.div variants={itemVariants} className="skills-category">
            <h3 className="category-title">Professional Skills</h3>
            <div className="professional-skills-list">
              {professionalSkills.map((skill, index) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}</span>
                  </div>
                  <div className="skill-bar">
                    <Motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.percentage}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Skills;
