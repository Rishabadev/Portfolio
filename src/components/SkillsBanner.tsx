import styles from "../app/page.module.css";

export default function SkillsBanner() {
  const skills = [
    "Python", "C/C++", "Machine Learning", "Computer Vision", 
    "Robotics", "Embedded Systems", "Sensor Fusion", 
    "Verilog", "FPGA Design", "Digital Design", 
    "Django", "REST APIs", "Linux", "Git"
  ];

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerTrack}>
        {/* We duplicate the array to allow for seamless infinite scrolling */}
        {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
          <span key={index} className={styles.bannerItem}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
