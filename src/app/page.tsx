import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SkillsBanner from "@/components/SkillsBanner";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className="glow-bg"></div>
      <Navbar />
      <main>
        <Hero />
        <SkillsBanner />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
