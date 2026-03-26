export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      padding: '1.5rem 0',
      zIndex: 50,
      background: 'rgba(5, 5, 5, 0.7)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--glass-border)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          Rishabadev<span style={{ color: 'var(--accent)' }}>.</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#about" style={{ fontSize: '0.9rem', fontWeight: 500 }}>About</a>
          <a href="#projects" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Projects</a>
          <a href="#contact" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Contact</a>
        </div>
      </div>
    </nav>
  );
}
