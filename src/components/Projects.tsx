import styles from "../app/page.module.css";

export default function Projects() {
  const projects = [
    {
      title: "Smart Digit Recognizer",
      description: "A deep learning project using a Convolutional Neural Network (CNN) to recognize handwritten digits (0–9). Trained on image datasets, achieving 97%+ accuracy for character recognition.",
      tech: ["Python", "TensorFlow/Keras", "NumPy", "Matplotlib", "Scikit-learn"],
      github: "https://github.com/Rishabadev/Smart-Digit-Recognizer",
      live: "",
      icon: "🧠"
    },
    {
      title: "Mobile Air Pollution Mapping System",
      description: "A low-cost mobile air quality monitoring system that measures PM2.5, temperature, and humidity while capturing geographic coordinates. Features real-time Wi-Fi transmission, web map visualization, and microSD redundancy.",
      tech: ["ESP32", "PM2.5 Sensor", "GNSS", "Wi-Fi", "Web Map"],
      github: "https://github.com/Rishabadev/pollution-mapper",
      live: "https://pollution-mapper.onrender.com",
      icon: "🌍"
    },
    {
      title: "Blitz Band – Boxing Analytics Wearable",
      description: "A wearable wrist-mounted system designed to detect punches and analyze boxing performance in real-time. Processes motion data to identify punch events and displays metrics on a web dashboard.",
      tech: ["ESP32", "Motion Sensors", "Web Dashboard"],
      github: "https://github.com/Rishabadev/BlitzBand",
      live: "https://blitz-band.vercel.app/",
      icon: "🥊"
    },
    {
      title: "ROADAR - Road Monitoring System",
      description: "A mobile road monitoring system that detects potholes using IMU sensor data and maps their locations using GPS. Anomalies are visualized on an interactive map built with Leaflet.js.",
      tech: ["ESP32", "MPU6050","HC-SR04","GPS", "Leaflet.js"],
      github: "https://github.com/Rishabadev/ROADAR",
      live: "https://roadar-two.vercel.app/",
      icon: "🛣️"
    },
    {
      title: "Binary Floating Point Adder",
      description: "Designed a binary floating-point adder (4-bit coefficient, 3-bit exponent) using digital logic circuits. Performs exponent comparison, mantissa alignment, addition, and normalization. Tested in Proteus.",
      tech: ["Digital Logic", "Proteus", "Verilog"],
      github: "https://github.com/Rishabadev/Floating-point-Binary-adder",
      live: "",
      icon: "🧮"
    },
    {
      title: "Django E-Review Web App",
      description: "A full-stack eCommerce web application featuring user authentication, product management, and shopping cart functionality. Demonstrates backend logic, database integration, and dynamic interfaces.",
      tech: ["Python", "Django", "HTML", "CSS","SQLite","JavaScript"],
      github: "https://github.com/Rishabadev/talks/tree/main/ereview",
      live: "",
      icon: "🛒"
    }
  ];

  return (
    <section id="projects" className={`${styles.section} container`}>
      <h2>Featured <span className="text-gradient">Projects</span></h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={`${styles.card} glass`} style={{ display: 'flex', flexDirection: 'column' }}>
            <div className={styles.cardIcon}>{project.icon}</div>
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.cardDescription} style={{ flex: 1 }}>{project.description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {project.tech.map((t, i) => (
                <span key={i} style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', color: 'var(--accent)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  {t}
                </span>
              ))}
            </div>
            <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {project.github && project.github !== "#" ? (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.cardLink} style={{ fontSize: '0.85rem' }}>
                  GitHub <span style={{ transition: "transform 0.3s" }}>→</span>
                </a>
              ) : null}
              {project.live && project.live !== "#" ? (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.cardLink} style={{ fontSize: '0.85rem' }}>
                  Live Site <span style={{ transition: "transform 0.3s" }}>→</span>
                </a>
              ) : null}
              {(!project.github || project.github === "#") && (!project.live || project.live === "#") && (
                <span className={styles.cardLink} style={{ fontSize: '0.85rem', opacity: 0.5 }}>
                  Coming Soon
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
