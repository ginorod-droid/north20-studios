/**
 * Vigil Studios — Hero Section
 * Design: Neo-Brutalist Street Art / Graphic Novel
 * - Full-viewport dark cityscape background
 * - Asymmetric layout: text left, floating hero character right
 * - Halftone overlay, speed lines, diagonal bottom cut
 * - Bebas Neue massive display type
 */
import { useEffect, useRef } from "react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663714891856/9eqp4adEMH963JomsoYtbu/vigil-hero-bg-ajfm2axtmTzn4DtPkAST48.webp";
const TEAM_ACTION = "/images/story%20books/heros%20in%20action.png";

export default function HeroSection() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Staggered letter reveal for the title
    const letters = titleRef.current?.querySelectorAll(".hero-letter");
    letters?.forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${i * 40}ms`;
      (el as HTMLElement).style.animationFillMode = "forwards";
    });
  }, []);

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const titleLine1 = "BORN FROM".split("");
  const titleLine2 = "THE STREETS".split("");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden diagonal-cut"
      style={{ paddingBottom: "8rem" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(105deg, oklch(0.06 0.003 280 / 0.92) 40%, oklch(0.06 0.003 280 / 0.5) 70%, transparent 100%)",
        }}
      />

      {/* Halftone dot overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(circle, oklch(0.96 0.003 280 / 0.06) 1px, transparent 1px)",
          backgroundSize: "8px 8px",
        }}
      />

      {/* Speed lines */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "repeating-conic-gradient(from 0deg at 80% 50%, oklch(0.88 0.28 142 / 0.15) 0deg, transparent 0.8deg, transparent 3deg, oklch(0.88 0.28 142 / 0.08) 3.5deg)",
        }}
      />

      {/* Content */}
      <div className="container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end min-h-screen pt-24 pb-16">
          {/* Left: Text content */}
          <div className="flex flex-col gap-6">
            {/* Issue label */}
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-0.5"
                style={{ background: "oklch(0.62 0.22 42)" }}
              />
              <span className="issue-badge">Vigil Studios Presents</span>
            </div>

            {/* Main title */}
            <div ref={titleRef}>
              <div className="overflow-hidden">
                <h1
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(4rem, 10vw, 7.5rem)",
                    lineHeight: 0.9,
                    letterSpacing: "0.04em",
                    color: "oklch(0.96 0.003 280)",
                  }}
                >
                  {titleLine1.map((char, i) => (
                    <span
                      key={i}
                      className="hero-letter inline-block animate-fade-up"
                      style={{ animationDelay: `${i * 40}ms`, opacity: 0 }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(4rem, 10vw, 7.5rem)",
                    lineHeight: 0.9,
                    letterSpacing: "0.04em",
                    color: "oklch(0.88 0.28 142)",
                  }}
                  className="text-glow-green"
                >
                  {titleLine2.map((char, i) => (
                    <span
                      key={i}
                      className="hero-letter inline-block animate-fade-up"
                      style={{
                        animationDelay: `${(titleLine1.length + i) * 40 + 100}ms`,
                        opacity: 0,
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </h1>
              </div>
            </div>

            {/* Subtitle */}
            <p
              className="animate-fade-up"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
                color: "oklch(0.72 0.01 280)",
                maxWidth: "480px",
                lineHeight: 1.7,
                animationDelay: "600ms",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              Vigil Studios brings you original urban superheroes — characters
              forged in the concrete, the struggle, and the spirit of the city.
              Real stories. Real power.
            </p>

            {/* CTA buttons */}
            <div
              className="flex flex-wrap gap-4 animate-fade-up"
              style={{
                animationDelay: "750ms",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              <button
                className="btn-vigil-primary"
                onClick={() => scrollToSection("#comics")}
              >
                Explore Comics
              </button>
              <button
                className="btn-vigil-secondary"
                onClick={() => scrollToSection("#heroes")}
              >
                Meet The Heroes
              </button>
            </div>

            {/* Stats bar */}
            <div
              className="flex gap-8 mt-4 animate-fade-up"
              style={{
                animationDelay: "900ms",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              {[
                { value: "12+", label: "Heroes" },
                { value: "40+", label: "Issues" },
                { value: "1M+", label: "Readers" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "2rem",
                      color: "oklch(0.88 0.28 142)",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Hero character */}
          <div className="relative flex justify-center lg:justify-end items-end" style={{ minHeight: "520px" }}>
            {/* Glow circle behind character */}
            <div
              className="absolute bottom-0 right-0 w-80 h-80 lg:w-[520px] lg:h-[520px] rounded-full green-pulse"
              style={{
                background: "radial-gradient(circle, oklch(0.88 0.28 142 / 0.15) 0%, transparent 70%)",
                transform: "translate(5%, 5%)",
              }}
            />

            {/* Team action artwork */}
            <div
              className="hero-float relative z-10"
              style={{ maxWidth: "520px", width: "100%" }}
            >
              {/* Comic panel frame for team artwork */}
              <div
                style={{
                  position: "relative",
                  border: "4px solid oklch(0.88 0.28 142 / 0.7)",
                  boxShadow: "0 0 50px oklch(0.88 0.28 142 / 0.4), inset 0 0 80px oklch(0.06 0.003 280 / 0.6)",
                  overflow: "hidden",
                  background: "oklch(0.85 0.003 280)",
                }}
              >
                {/* Halftone overlay on panel */}
                <div
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(circle, oklch(0.06 0.003 280 / 0.15) 1px, transparent 1px)",
                    backgroundSize: "4px 4px",
                  }}
                />
                {/* Green glow overlay */}
                <div
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at center, oklch(0.88 0.28 142 / 0.08) 0%, transparent 70%)",
                  }}
                />
                <img
                  src={TEAM_ACTION}
                  alt="Vigil Studios Team"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
                {/* Panel corner accents - larger for team artwork */}
                <div className="absolute top-0 left-0 w-6 h-6 z-20" style={{ borderTop: "4px solid oklch(0.62 0.22 42)", borderLeft: "4px solid oklch(0.62 0.22 42)" }} />
                <div className="absolute top-0 right-0 w-6 h-6 z-20" style={{ borderTop: "4px solid oklch(0.62 0.22 42)", borderRight: "4px solid oklch(0.62 0.22 42)" }} />
                <div className="absolute bottom-0 left-0 w-6 h-6 z-20" style={{ borderBottom: "4px solid oklch(0.62 0.22 42)", borderLeft: "4px solid oklch(0.62 0.22 42)" }} />
                <div className="absolute bottom-0 right-0 w-6 h-6 z-20" style={{ borderBottom: "4px solid oklch(0.62 0.22 42)", borderRight: "4px solid oklch(0.62 0.22 42)" }} />
              </div>
            </div>

            {/* Power stat panel floating */}
            <div
              className="absolute top-96 left-0 lg:left-4 comic-card p-4 animate-slide-left"
              style={{
                animationDelay: "1000ms",
                opacity: 0,
                animationFillMode: "forwards",
                minWidth: "140px",
              }}
            >
              <div className="stat-label mb-1">Power Level</div>
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.8rem",
                  color: "oklch(0.88 0.28 142)",
                  lineHeight: 1,
                }}
              >
                OMEGA
              </div>
              <div
                className="mt-2 h-1.5 rounded-full overflow-hidden"
                style={{ background: "oklch(1 0 0 / 0.1)" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: "92%",
                    background: "oklch(0.88 0.28 142)",
                    boxShadow: "0 0 8px oklch(0.88 0.28 142)",
                  }}
                />
              </div>
            </div>

            {/* Origin tag */}
            <div
              className="absolute top-96 right-0 lg:right-4 comic-card p-3 animate-slide-right"
              style={{
                animationDelay: "1100ms",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              <div className="stat-label mb-1">Origin</div>
              <div
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "0.9rem",
                  color: "oklch(0.62 0.22 42)",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                }}
              >
                THE CITY
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="stat-label">Scroll</span>
        <div
          className="w-0.5 h-8"
          style={{
            background: "linear-gradient(to bottom, oklch(0.88 0.28 142), transparent)",
          }}
        />
      </div>
    </section>
  );
}
