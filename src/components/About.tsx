import styles from "../app/page.module.css";

export default function About() {
  const skills = [
    "Python", "C/C++", "Machine Learning", "Computer Vision", 
    "Robotics", "Embedded Systems", "Sensor Fusion", 
    "Verilog", "FPGA Design", "Digital Design", 
    "Django", "REST APIs", "Linux", "Git"
  ];

  return (
    <section id="about" className={`${styles.section} container`}>
      <h2>About <span style={{ color: "var(--accent)" }}>Me</span></h2>
      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <p>
            Hello! I&apos;m Rishabadev P, a developer exploring the intersection of AI, robotics, embedded systems, and modern web technologies.
          </p>
          <p>
            I enjoy designing intelligent solutions, building scalable applications, and turning complex ideas into practical, real-world systems.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <a href="portfolio/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.primaryBtn} style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              Download Resume
            </a>
          </div>
        </div>
        <div>
          <h3 style={{ marginBottom: "1rem", fontSize: "1.2rem" }}>My Skills</h3>
          <div className={styles.skills}>
            {skills.map((skill, index) => (
              <span key={index} className={styles.skillPill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
