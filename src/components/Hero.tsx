import styles from "../app/page.module.css";
import RobotArm3D from "./RobotArm3D";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <RobotArm3D />
      <div className={`${styles.heroContent} animate-fade-in-up`}>
        <h1 className={styles.heroTitle}>
          Design. Develop. <br />
          <span className="text-gradient">Deploy.</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Passionate about embedded systems, robotics, and creating innovative solutions that bridge hardware and software.
        </p>
        <div className={styles.ctaButtons}>
          <a href="#projects" className={styles.primaryBtn}>View My Work</a>
          <a href="#contact" className={styles.secondaryBtn}>Get In Touch</a>
        </div>
      </div>
    </section>
  );
}
