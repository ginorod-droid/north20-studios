/**
 * Vigil Studios — Navbar
 * Design: Neo-Brutalist Street Art / Graphic Novel
 * - Transparent on load, transitions to dark frosted glass on scroll
 * - Bebas Neue nav links with green underline draw animation
 * - Orange emblem logo mark
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Heroes", href: "#heroes" },
  { label: "Comics", href: "#comics" },
  { label: "Universe", href: "#universe" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "oklch(0.06 0.003 280 / 0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid oklch(1 0 0 / 0.08)" : "none",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-3 group"
          >
            {/* Emblem icon */}
            <div
              className="relative w-9 h-9 flex items-center justify-center"
              style={{
                background: "oklch(0.62 0.22 42)",
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L15 8H21L16.5 12.5L18.5 19L12 15.5L5.5 19L7.5 12.5L3 8H9L12 2Z"
                  fill="oklch(0.09 0.005 280)"
                  stroke="oklch(0.09 0.005 280)"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.4rem",
                  letterSpacing: "0.12em",
                  color: "oklch(0.96 0.003 280)",
                  lineHeight: 1,
                }}
              >
                VIGIL
              </span>
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.3em",
                  color: "oklch(0.88 0.28 142)",
                  lineHeight: 1,
                  marginTop: "2px",
                }}
              >
                STUDIOS
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="nav-link"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <button
              className="hidden md:block btn-vigil-primary text-sm"
              style={{ padding: "0.5rem 1.5rem" }}
              onClick={() => handleNavClick("#comics")}
            >
              Read Now
            </button>
            <button
              className="md:hidden text-white p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? "400px" : "0",
          background: "oklch(0.06 0.003 280 / 0.98)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="container py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-left nav-link text-lg"
            >
              {link.label}
            </button>
          ))}
          <button
            className="btn-vigil-primary mt-2 w-full"
            onClick={() => handleNavClick("#comics")}
          >
            Read Now
          </button>
        </div>
      </div>
    </header>
  );
}
