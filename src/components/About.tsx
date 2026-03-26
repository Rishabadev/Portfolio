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
