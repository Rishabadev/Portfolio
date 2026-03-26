import styles from "../app/page.module.css";
import HeroParticleSphere from "./HeroParticleSphere";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero} style={{ position: "relative" }}>
      <HeroParticleSphere />
      <div className={`${styles.heroContent} animate-fade-in-up`} style={{ position: "relative", zIndex: 1 }}>
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
          <a href={process.env.NODE_ENV === 'production' ? "/portfolio/resume.pdf" : "/resume.pdf"} target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
