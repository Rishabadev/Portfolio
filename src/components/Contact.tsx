import styles from "../app/page.module.css";
import NeuralNetwork3D from "./NeuralNetwork3D";

export default function Contact() {
  return (
    <section id="contact" className={`${styles.section} container`} style={{ paddingBottom: "10rem", position: "relative" }}>
      {/* Neural Network 3D visually sits deep within the container background */}
      <NeuralNetwork3D />
      
      {/* Relative wrapper ensures HTML text and forms mathematically layer perfectly above the Canvas */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2>Get In <span style={{ color: "var(--accent)" }}>Touch</span></h2>
          <p style={{ color: "var(--text-secondary)" }}>
            Interested in working together or just want to say hi? Drop me a message or email me directly at <a href="mailto:rishabadevp@gmail.com" style={{ color: "var(--accent)", textDecoration: "underline" }}>rishabadevp@gmail.com</a>!
          </p>
        </div>
        
        <form className={styles.contactForm}>
          <input 
            type="text" 
            placeholder="Your Name" 
            className={styles.inputField} 
            required 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className={styles.inputField} 
            required 
          />
          <textarea 
            placeholder="Your Message..." 
            className={styles.inputField} 
            required 
          ></textarea>
          <button type="submit" className={`${styles.primaryBtn} ${styles.submitBtn}`}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
