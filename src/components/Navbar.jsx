import { useState } from "react";

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
        DS
      </div>
      <span className="text-lg font-bold text-slate-900">
        Dev<span className="text-pink-500">Stack</span>
      </span>
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Mobile: hamburger */}
        <button
          className="md:hidden text-slate-700"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Desktop: logo left */}
        <div className="hidden md:block">
          <Logo />
        </div>
        {/* Mobile: logo center */}
        <div className="md:hidden">
          <Logo />
        </div>

        {/* Desktop: nav links center */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                onClick={() => setActive(link)}
                className={`text-sm font-medium transition-colors ${
                  active === link ? "text-pink-500 font-semibold" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Right: auth buttons (always visible) */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline text-sm font-medium text-slate-700 hover:text-slate-900">
            Sign In
          </button>
          <button className="text-sm font-semibold text-white px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:opacity-90 transition-opacity">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-1 px-4 pb-4 border-t border-slate-100">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                onClick={() => {
                  setActive(link);
                  setMenuOpen(false);
                }}
                className={`w-full text-left py-2 text-sm font-medium ${
                  active === link ? "text-pink-500 font-semibold" : "text-slate-600"
                }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
