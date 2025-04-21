
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-glass border-b border-neon-purple/60 shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2 md:py-3">
        {/* Logo / Title */}
        <NavLink
          to="/"
          className="font-orbitron text-xl md:text-2xl gradient-text font-extrabold tracking-wider hover-scale"
        >
          📺 YT Downloader
        </NavLink>

        {/* Main navigation */}
        <div className="flex gap-2 md:gap-4 font-roboto">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md neon-border transition-colors text-[0.99rem] font-medium ${
                isActive
                  ? "bg-neon-purple/30 text-neon-purple"
                  : "text-muted-foreground hover:text-neon-purple/80 hover:bg-neon-purple/20"
              }`
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/privacy-policy"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md neon-border transition-colors text-[0.99rem] font-medium ${
                isActive
                  ? "bg-neon-blue/20 text-neon-blue"
                  : "text-muted-foreground hover:text-neon-blue/80 hover:bg-neon-blue/20"
              }`
            }
          >
            Privacy Policy
          </NavLink>
          <NavLink
            to="/terms-of-use"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md neon-border transition-colors text-[0.99rem] font-medium ${
                isActive
                  ? "bg-neon-pink/20 text-pink-400"
                  : "text-muted-foreground hover:text-pink-400 hover:bg-neon-pink/20"
              }`
            }
          >
            Terms of Use
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
