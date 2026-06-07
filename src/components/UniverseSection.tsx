/**
 * Vigil Studios — Universe Section
 * Design: Neo-Brutalist Street Art / Graphic Novel
 * - City background with dark overlay
 * - Lore/timeline entries with panel border accents
 * - Asymmetric layout
 */
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ABOUT_BG = "/images/bg/about-bg.webp";

const loreEntries = [
  {
    year: "VOLUME 1 — Issues 1–6",
    title: "The Accident",
    description:
      "An explosion at a Crestview Development site changes four people who had nothing to do with each other. The AI that caused it is still running. Nobody knows what it was building.",
    accent: "oklch(0.88 0.28 142)",
  },
  {
    year: "VOLUME 2 — Issues 7–12",
    title: "The Reckoning",
    description:
      "The government moves in. The team fractures. Marcus Hill gets his full story. Someone almost doesn't come back.",
    accent: "oklch(0.62 0.22 42)",
  },
  {
    year: "VOLUME 3 — Issues 13–18",
    title: "The Convergence",
    description:
      "Everything collides. The henchmen are picked apart. John faces Marcus. The AI makes its biggest move. Someone almost crosses a line they can't come back from.",
    accent: "oklch(0.88 0.28 142)",
  },
];

const pillars = [
  {
    icon: "🏙️",
    title: "Rooted in the Neighborhood",
    description:
      "The story starts on the block. Ms. Ruth's corner market. Mr. Ramirez's barbershop. Real life that never appears in Crestview's advertisements.",
  },
  {
    icon: "⚡",
    title: "The AI",
    description:
      "Not built. Found. An ancient AI discovered beneath a city neighborhood, with a corporation constructed around it to keep it alive and keep it secret.",
  },
  {
    icon: "✊",
    title: "Black Professionals",
    description:
      "An engineer. A teacher. A doctor. A soldier. The Prime-Man Initiative isn't about what they can do. It's about who they already were.",
  },
  {
    icon: "📖",
    title: "18 Issues. One Story.",
    description:
      "Three volumes. A fully mapped universe. Nobody dies. Everybody has unfinished business. The party keeps going.",
  },
];

export default function UniverseSection() {
  const { ref: titleRef, visible: titleVisible } = useScrollReveal();

  return (
    <section
      id="universe"
      className="relative py-24"
      style={{ background: "oklch(0.09 0.005 280)" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${ABOUT_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "oklch(0.06 0.003 280 / 0.88)",
        }}
      />
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, oklch(0.96 0.003 280 / 0.05) 1px, transparent 1px)",
          backgroundSize: "8px 8px",
        }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <div
          ref={titleRef}
          className={`mb-16 ${titleVisible ? "reveal-visible" : "reveal-hidden"}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-0.5" style={{ background: "oklch(0.88 0.28 142)" }} />
            <span className="issue-badge">Crestview Universe</span>
          </div>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3rem, 6vw, 5rem)",
              lineHeight: 0.95,
              letterSpacing: "0.04em",
              color: "oklch(0.96 0.003 280)",
            }}
          >
            THE CRESTVIEW
            <br />
            <span style={{ color: "oklch(0.88 0.28 142)" }} className="text-glow-green">
              UNIVERSE
            </span>
          </h2>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Timeline */}
          <div>
            <h3
              className="mb-8"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "1.1rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                color: "oklch(0.62 0.22 42)",
                textTransform: "uppercase",
              }}
            >
              Timeline
            </h3>
            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5"
                style={{ background: "oklch(1 0 0 / 0.1)" }}
              />

              <div className="flex flex-col gap-0">
                {loreEntries.map((entry, i) => {
                  const { ref, visible } = useScrollReveal();
                  return (
                    <div
                      key={i}
                      ref={ref}
                      className={`relative pl-8 pb-10 ${visible ? "reveal-visible" : "reveal-hidden"}`}
                      style={{ transitionDelay: `${i * 120}ms` }}
                    >
                      {/* Dot */}
                      <div
                        className="absolute left-0 top-1 w-3 h-3 rounded-full -translate-x-1/2"
                        style={{
                          background: entry.accent,
                          boxShadow: `0 0 10px ${entry.accent}`,
                        }}
                      />

                      <div className="stat-label mb-1">{entry.year}</div>
                      <h4
                        style={{
                          fontFamily: "'Oswald', sans-serif",
                          fontSize: "1.2rem",
                          fontWeight: 600,
                          color: entry.accent,
                          letterSpacing: "0.05em",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {entry.title}
                      </h4>
                      <p
                        style={{
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: "0.8rem",
                          color: "oklch(0.65 0.01 280)",
                          lineHeight: 1.7,
                        }}
                      >
                        {entry.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Pillars */}
          <div>
            <h3
              className="mb-8"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "1.1rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                color: "oklch(0.62 0.22 42)",
                textTransform: "uppercase",
              }}
            >
              Our Foundation
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, i) => {
                const { ref, visible } = useScrollReveal();
                return (
                  <div
                    key={i}
                    ref={ref}
                    className={`comic-card p-5 ${visible ? "reveal-visible" : "reveal-hidden"}`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="text-2xl mb-3">{pillar.icon}</div>
                    <h4
                      style={{
                        fontFamily: "'Oswald', sans-serif",
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "oklch(0.88 0.28 142)",
                        letterSpacing: "0.05em",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {pillar.title}
                    </h4>
                    <p
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "0.75rem",
                        color: "oklch(0.62 0.01 280)",
                        lineHeight: 1.7,
                      }}
                    >
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
