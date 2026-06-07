/**
 * Vigil Studios — Comics Section
 * Design: Neo-Brutalist Street Art / Graphic Novel
 * - Dark panel background with emblem texture
 * - Comic book cover cards with issue numbers
 * - Diagonal top cut to continue from heroes section
 */
import { useScrollReveal } from "@/hooks/useScrollReveal";

const EMBLEM_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663714891856/9eqp4adEMH963JomsoYtbu/vigil-emblem-bg-9LboakqBbspEZAze3oMarx.webp";

const issues = [
  {
    id: 1,
    series: "BOSS",
    issue: "#001",
    title: "The Executive",
    description: "John built an empire in the boardroom. Now he's building something else entirely — in the streets.",
    image: "/images/boss/boss%20in%20gear.png",
    rating: "T+",
    pages: 48,
    accent: "oklch(0.88 0.28 142)",
    featured: true,
  },
  {
    id: 2,
    series: "BOSS",
    issue: "#002",
    title: "Meeting With the Government",
    description: "John takes the fight to the top. When power brokers won't listen, Boss makes them.",
    image: "/images/story%20books/boss%20meeting%20the%20govt.png",
    rating: "T+",
    pages: 44,
    accent: "oklch(0.88 0.28 142)",
    featured: false,
  },
  {
    id: 3,
    series: "BOSS",
    issue: "#003",
    title: "The Weight of the Mission",
    description: "Every decision has a cost. John weighs them all — and steps forward anyway.",
    image: "/images/story%20books/boss%20thinking%20about%20mission.png",
    rating: "T+",
    pages: 52,
    accent: "oklch(0.88 0.28 142)",
    featured: false,
  },
  {
    id: 4,
    series: "VIGIL UNIVERSE",
    issue: "#001",
    title: "Heroes in Action",
    description: "John. Lonnie. Adonis. Alani. One city. One night that changes the universe forever.",
    image: "/images/story%20books/heros%20in%20action.png",
    rating: "T+",
    pages: 80,
    accent: "oklch(0.62 0.22 42)",
    featured: false,
  },
  {
    id: 5,
    series: "BRIO & LAVIQUE",
    issue: "#001",
    title: "Built Different",
    description: "Lonnie and Alani. The engineer and the phantom. The city's most unlikely partnership.",
    image: "/images/story%20books/brio%20and%20lavique3.png",
    rating: "T+",
    pages: 56,
    accent: "oklch(0.62 0.22 42)",
    featured: false,
  },
  {
    id: 6,
    series: "FORCE",
    issue: "#001",
    title: "Adonis Rising",
    description: "When Adonis hits, the ground remembers. Force's origin — raw, unfiltered, unstoppable.",
    image: "/images/force/Gemini_Generated_Image_gbncb7gbncb7gbnc.png",
    rating: "T+",
    pages: 52,
    accent: "oklch(0.75 0.15 220)",
    featured: false,
  },
];

function IssueCard({ issue, index }: { issue: typeof issues[0]; index: number }) {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`comic-card group relative overflow-hidden ${visible ? "reveal-visible" : "reveal-hidden"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Cover image */}
      <div className="relative overflow-hidden" style={{ height: "280px" }}>
        <img
          src={issue.image}
          alt={issue.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ objectPosition: issue.featured ? "center top" : "center" }}
        />
        {/* Halftone */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, oklch(0.96 0.003 280 / 0.06) 1px, transparent 1px)",
            backgroundSize: "5px 5px",
          }}
        />
        {/* Gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 h-2/3"
          style={{ background: "linear-gradient(to top, oklch(0.12 0.008 280), transparent)" }}
        />

        {/* Issue badge */}
        <div
          className="absolute top-3 left-3 px-2 py-1"
          style={{
            background: issue.accent,
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.65rem",
            fontWeight: 600,
            color: "oklch(0.09 0.005 280)",
            letterSpacing: "0.1em",
          }}
        >
          {issue.issue}
        </div>

        {/* Rating */}
        <div
          className="absolute top-3 right-3 px-1.5 py-0.5"
          style={{
            border: "1px solid oklch(1 0 0 / 0.3)",
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.6rem",
            color: "oklch(0.75 0.01 280)",
          }}
        >
          {issue.rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="stat-label mb-1">{issue.series}</div>
        <h3
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "1.05rem",
            fontWeight: 600,
            color: "oklch(0.96 0.003 280)",
            lineHeight: 1.3,
            letterSpacing: "0.03em",
          }}
        >
          {issue.title}
        </h3>
        <p
          className="mt-2"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.72rem",
            color: "oklch(0.6 0.01 280)",
            lineHeight: 1.6,
          }}
        >
          {issue.description}
        </p>

        <div
          className="flex items-center justify-between mt-4 pt-3"
          style={{ borderTop: "1px solid oklch(1 0 0 / 0.08)" }}
        >
          <span className="stat-label">{issue.pages} pages</span>
          <button
            className="flex items-center gap-1.5 transition-colors duration-200"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "0.9rem",
              letterSpacing: "0.1em",
              color: issue.accent,
            }}
            onClick={() => {}}
          >
            READ
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ComicsSection() {
  const { ref: titleRef, visible: titleVisible } = useScrollReveal();

  return (
    <section
      id="comics"
      className="relative py-24 diagonal-cut-reverse"
      style={{
        background: "oklch(0.07 0.004 280)",
        marginTop: "-4rem",
        paddingTop: "8rem",
      }}
    >
      {/* Background emblem texture */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${EMBLEM_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <div
          ref={titleRef}
          className={`mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 ${titleVisible ? "reveal-visible" : "reveal-hidden"}`}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5" style={{ background: "oklch(0.88 0.28 142)" }} />
              <span className="issue-badge">The Collection</span>
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
              LATEST
              <br />
              <span style={{ color: "oklch(0.62 0.22 42)" }} className="text-glow-orange">
                ISSUES
              </span>
            </h2>
          </div>

          <div className="flex gap-4">
            <button className="btn-vigil-secondary" style={{ fontSize: "0.9rem", padding: "0.6rem 1.5rem" }}>
              All Issues
            </button>
            <button className="btn-vigil-primary" style={{ fontSize: "0.9rem", padding: "0.6rem 1.5rem" }}>
              Subscribe
            </button>
          </div>
        </div>

        {/* Featured + grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured large issue */}
          <div className="lg:col-span-1 lg:row-span-2">
            <div
              className="comic-card group relative overflow-hidden h-full"
              style={{ minHeight: "500px" }}
            >
              <div className="relative h-full overflow-hidden" style={{ minHeight: "500px" }}>
                <img
                  src="/images/story%20books/heros%20in%20action.png"
                  alt="Featured Issue"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "radial-gradient(circle, oklch(0.96 0.003 280 / 0.05) 1px, transparent 1px)",
                    backgroundSize: "6px 6px",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, oklch(0.09 0.005 280 / 0.95) 30%, oklch(0.09 0.005 280 / 0.3) 70%, transparent 100%)",
                  }}
                />

                {/* Featured badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1.5"
                  style={{
                    background: "oklch(0.62 0.22 42)",
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "0.85rem",
                    letterSpacing: "0.15em",
                    color: "oklch(0.09 0.005 280)",
                  }}
                >
                  FEATURED
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="stat-label mb-2">Vigil Universe • Crossover Event</div>
                  <h3
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "2.2rem",
                      color: "oklch(0.96 0.003 280)",
                      lineHeight: 1,
                      letterSpacing: "0.04em",
                    }}
                  >
                    CONVERGENCE
                  </h3>
                  <p
                    className="mt-2 mb-4"
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.8rem",
                      color: "oklch(0.7 0.01 280)",
                      lineHeight: 1.6,
                    }}
                  >
                    The crossover event of the year. Every hero. Every threat.
                    One city on the brink.
                  </p>
                  <button className="btn-vigil-primary w-full">
                    Read Issue
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Issue cards grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {issues.slice(0, 4).map((issue, i) => (
              <IssueCard key={issue.id} issue={issue} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
