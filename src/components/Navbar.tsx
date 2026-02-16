import { Gamepad2 } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-brand">
        <div className="nav-icon">
          <Gamepad2 size={20} />
        </div>
        <span className="nav-title">OMELET</span>
      </div>
      <div className="nav-links">
        <a href="#ranks">Ranks</a>
        <a href="#features">Fitur</a>
        <a href="#team">Tim</a>
      </div>
    </nav>
  );
}
