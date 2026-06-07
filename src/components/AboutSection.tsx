/**
 * Vigil Studios — About Section
 * Design: Neo-Brutalist Street Art / Graphic Novel
 * - Studio mission and team showcase
 * - City neighborhood background
 * - Asymmetric split layout
 */
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CITY_PANEL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663714891856/9eqp4adEMH963JomsoYtbu/vigil-city-panel-aviY4vZnKRhXbB4NFtRg2j.webp";

const teamMembers = [
  {
    name: "Marcus Webb",
    role: "Founder & Lead Writer",
    bio: "Born and raised in the city. Marcus started Vigil Studios to tell the stories he never saw growing up.",
    initials: "MW",
    color: "oklch(0.88 0.28 142)",
  },
  {
    name: "Deja Okafor",
    role: "Art Director",
    bio: "Deja's ink-heavy style defines the visual language of the Vigil Universe.",
    initials: "DO",
    color: "oklch(0.62 0.22 42)",
  },
  {
    name: "Tyrese Kim",
    role: "Universe Architect",
    bio: "The lore master. Tyrese ensures every storyline connects and every character has depth.",
    initials: "TK",
    color: "oklch(0.75 0.15 220)",
  },
];

export default function AboutSection() {
  const { ref: titleRef, visible: titleVisible } = useScrollReveal();

  return (
    <section
      id="about"
      className="relative py-24"
      style={{ background: "oklch(0.07 0.004 280)" }}
    >
      {/* Halftone texture */}
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
            <div className="w-12 h-0.5" style={{ background: "oklch(0.62 0.22 42)" }} />
            <span className="issue-badge">The Studio</span>
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
            WHO WE
            <br />
            <span style={{ color: "oklch(0.62 0.22 42)" }} className="text-glow-orange">
              ARE
            </span>
          </h2>
        </div>

        {/* Two column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Mission */}
          <div>
            <div
              className="relative overflow-hidden mb-8"
              style={{ height: "320px" }}
            >
              <img
                src={CITY_PANEL}
                alt="The City"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "radial-gradient(circle, oklch(0.96 0.003 280 / 0.06) 1px, transparent 1px)",
                  backgroundSize: "6px 6px",
                }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{
                  background: "linear-gradient(to top, oklch(0.07 0.004 280), transparent)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.4rem",
                    color: "oklch(0.88 0.28 142)",
                    letterSpacing: "0.08em",
                  }}
                >
                  EST. 2021 — THE CITY
                </div>
              </div>
            </div>

            <div className="panel-border-left pl-6">
              <p
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.9rem",
                  color: "oklch(0.75 0.01 280)",
                  lineHeight: 1.8,
                  marginBottom: "1rem",
                }}
              >
                Vigil Studios was founded on a simple belief: the city deserves
                its own heroes. Not gods from the sky. Not billionaires in
                armor. Heroes from the block.
              </p>
              <p
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.9rem",
                  color: "oklch(0.75 0.01 280)",
                  lineHeight: 1.8,
                }}
              >
                We create original superhero comics rooted in urban culture,
                authentic representation, and stories that resonate with
                communities that have long been overlooked by mainstream comics.
              </p>
            </div>

            {/* Mission statement */}
            <div
              className="mt-8 p-6"
              style={{
                background: "oklch(0.12 0.008 280)",
                borderLeft: "4px solid oklch(0.88 0.28 142)",
              }}
            >
              <div className="stat-label mb-2">Our Mission</div>
              <blockquote
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  color: "oklch(0.96 0.003 280)",
                  lineHeight: 1.4,
                  letterSpacing: "0.02em",
                }}
              >
                "To give the streets a mythology they can call their own."
              </blockquote>
            </div>
          </div>

          {/* Right: Team */}
          <div>
            <h3
              className="mb-6"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "1.1rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                color: "oklch(0.62 0.22 42)",
                textTransform: "uppercase",
              }}
            >
              The Team
            </h3>

            <div className="flex flex-col gap-4">
              {teamMembers.map((member, i) => {
                const { ref, visible } = useScrollReveal();
                return (
                  <div
                    key={i}
                    ref={ref}
                    className={`comic-card p-5 flex gap-4 items-start ${visible ? "reveal-visible" : "reveal-hidden"}`}
                    style={{ transitionDelay: `${i * 120}ms` }}
                  >
                    {/* Avatar */}
                    <div
                      className="flex-shrink-0 w-12 h-12 flex items-center justify-center font-bold"
                      style={{
                        background: `${member.color.replace(")", " / 0.15)")}`,
                        border: `2px solid ${member.color}`,
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "1rem",
                        color: member.color,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {member.initials}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div
                        style={{
                          fontFamily: "'Oswald', sans-serif",
                          fontSize: "1rem",
                          fontWeight: 600,
                          color: "oklch(0.96 0.003 280)",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {member.name}
                      </div>
                      <div
                        className="mb-2"
                        style={{
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: "0.65rem",
                          color: member.color,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                        }}
                      >
                        {member.role}
                      </div>
                      <p
                        style={{
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: "0.75rem",
                          color: "oklch(0.6 0.01 280)",
                          lineHeight: 1.6,
                        }}
                      >
                        {member.bio}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Join CTA */}
            <div
              className="mt-8 p-6 text-center"
              style={{
                background: "oklch(0.12 0.008 280)",
                border: "1px solid oklch(1 0 0 / 0.1)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.6rem",
                  color: "oklch(0.96 0.003 280)",
                  letterSpacing: "0.06em",
                  marginBottom: "0.5rem",
                }}
              >
                JOIN THE VIGIL
              </div>
              <p
                className="mb-4"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.78rem",
                  color: "oklch(0.6 0.01 280)",
                  lineHeight: 1.6,
                }}
              >
                Get early access to new issues, behind-the-scenes content, and
                exclusive character reveals.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 min-w-0 px-4 py-2.5 text-sm"
                  style={{
                    background: "oklch(0.09 0.005 280)",
                    border: "1px solid oklch(1 0 0 / 0.15)",
                    color: "oklch(0.96 0.003 280)",
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.8rem",
                    outline: "none",
                    maxWidth: "240px",
                  }}
                />
                <button className="btn-vigil-primary" style={{ fontSize: "0.9rem", padding: "0.6rem 1.5rem" }}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
