/**
 * Vigil Studios — Heroes Section
 * Design: Neo-Brutalist Street Art / Graphic Novel
 * - Character cards with power stats revealed on hover
 * - Asymmetric grid layout
 * - Panel border accents, halftone overlays
 */
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const heroes = [
  {
    id: 1,
    name: "BRIO",
    alias: "Lonnie Walker — The Engineer",
    origin: "The Neighborhood",
    power: 95,
    powerClass: "OMEGA",
    abilities: ["Super Speed", "Super Strength", "Tech Mastery", "Flight"],
    bio: "First in his family to graduate college. First engineer hired by Crestview from the neighborhood. He believed in the company completely — until the day he walked into the sub-level and saw what was really inside.",
    color: "oklch(0.62 0.22 42)",
    image: "/images/brio/Gemini_Generated_Image_lbs322lbs322lbs3.png",
    issue: "#001",
  },
  {
    id: 2,
    name: "FORCE",
    alias: "Adonis — The Teacher",
    origin: "The Neighborhood",
    power: 98,
    powerClass: "OMEGA",
    abilities: ["Super Strength", "Phase Shift", "Dimensional Travel"],
    bio: "Middle school teacher. Was three blocks away on a field trip when the explosion happened. Moved fifty feet without deciding to. Saved a student. Crushed a coffee mug that night without meaning to. He wasn't excited. He was scared.",
    color: "oklch(0.75 0.15 220)",
    image: "/images/force/force%20gng%20copy.png",
    issue: "#001",
  },
  {
    id: 3,
    name: "LAVIQUE",
    alias: "Alani Patel — The Resident",
    origin: "County General",
    power: 88,
    powerClass: "ALPHA+",
    abilities: ["Biological Healing", "Mechanical Healing", "Wings", "Flight"],
    bio: "Third-year medical resident. Always right. Never credited. She was in the ICU the night Lonnie was brought in — his body discharging green and white energy flashes while unconscious. She documented everything. She sat on it. She needed to know it was real.",
    color: "oklch(0.88 0.18 320)",
    image: "/images/lavi/lavique%20poses.png",
    issue: "#001",
  },
  {
    id: 4,
    name: "SENTINEL",
    alias: "John — The Architect",
    origin: "Inside Crestview",
    power: 85,
    powerClass: "TACTICAL",
    abilities: ["Strategic Command", "Investigation", "Close Combat"],
    bio: "Veteran. Works inside Crestview — not for the paycheck, for the access. Has been tracking missing persons connected to the company for two years. Applied for his position deliberately to get close enough for answers. No powers. That's intentional.",
    color: "oklch(0.88 0.28 142)",
    image: "/images/boss/boss%20in%20gear.png",
    issue: "#001",
  },
  {
    id: 5,
    name: "SENTINEL",
    alias: "John — Inside Crestview",
    origin: "The Investigation",
    power: 85,
    powerClass: "TACTICAL",
    abilities: ["Leadership", "Crisis Command", "Pattern Recognition"],
    bio: "Eleven names in a folder. Four the first year. Seven the next. All connected to Crestview. All dismissed. John stopped telling himself it was coincidence after year two.",
    color: "oklch(0.88 0.28 142)",
    image: "/images/boss/boss%20meeting%20w%20govt.png",
    issue: "#001",
  },
  {
    id: 6,
    name: "BRIO & LAVIQUE",
    alias: "Lonnie & Alani",
    origin: "The Neighborhood",
    power: 95,
    powerClass: "SQUAD",
    abilities: ["Combined Tech", "Healing + Speed", "Unbreakable Bond"],
    bio: "Lonnie was the conduit. Alani was in the room. His energy found her. Where one falls short, the other fills the gap. They didn't choose each other. The accident did.",
    color: "oklch(0.62 0.22 42)",
    image: "/images/brio%20and%20lavique.png",
    issue: "#001",
  },
  {
    id: 7,
    name: "THE FOUR",
    alias: "Lonnie. Adonis. Alani. John.",
    origin: "The City",
    power: 99,
    powerClass: "ELITE",
    abilities: ["Unified Force", "City Defense", "The Accident Connected Them"],
    bio: "An engineer. A teacher. A doctor. A soldier. None of them asked for this. An ancient AI was buried beneath their neighborhood and a corporation was built to hide it. The accident interrupted something. It isn't finished yet.",
    color: "oklch(0.88 0.28 142)",
    image: "/images/story%20books/heros%20in%20action.png",
    issue: "#025",
  },
];

function HeroCard({ hero, index }: { hero: typeof heroes[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const { ref, visible } = useScrollReveal();

  const isMain = index === 0;

  return (
    <div
      ref={ref}
      className={`comic-card relative overflow-hidden cursor-pointer ${visible ? "reveal-visible" : "reveal-hidden"}`}
      style={{
        transitionDelay: `${index * 120}ms`,
        gridRow: isMain ? "span 2" : "span 1",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Issue badge */}
      <div
        className="absolute top-3 left-3 z-20 px-2 py-1"
        style={{
          background: "oklch(0.09 0.005 280 / 0.9)",
          border: `1px solid ${hero.color}`,
        }}
      >
        <span className="issue-badge">{hero.issue}</span>
      </div>

      {/* Image */}
      <div
        className="relative overflow-hidden"
        style={{ height: isMain ? "420px" : "200px" }}
      >
        <img
          src={hero.image}
          alt={hero.name}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{
            transform: hovered ? "scale(1.06)" : "scale(1)",
            filter: isMain
              ? `drop-shadow(0 0 20px ${hero.color} / 0.3)`
              : "none",
            objectPosition: isMain ? "center top" : "center",
          }}
        />
        {/* Halftone overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, oklch(0.96 0.003 280 / 0.05) 1px, transparent 1px)",
            backgroundSize: "6px 6px",
          }}
        />
        {/* Bottom gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/2"
          style={{
            background: "linear-gradient(to top, oklch(0.12 0.008 280), transparent)",
          }}
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <div className="stat-label mb-1">{hero.alias}</div>
            <h3
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: isMain ? "2.2rem" : "1.6rem",
                color: hero.color,
                lineHeight: 1,
                letterSpacing: "0.06em",
              }}
            >
              {hero.name}
            </h3>
          </div>
          <div className="text-right">
            <div className="stat-label">Class</div>
            <div
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "0.85rem",
                color: hero.color,
                fontWeight: 700,
                letterSpacing: "0.1em",
              }}
            >
              {hero.powerClass}
            </div>
          </div>
        </div>

        {/* Power bar */}
        <div className="mb-3">
          <div className="flex justify-between items-center mb-1">
            <span className="stat-label">Power</span>
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.7rem",
                color: hero.color,
              }}
            >
              {hero.power}%
            </span>
          </div>
          <div
            className="h-1 rounded-full overflow-hidden"
            style={{ background: "oklch(1 0 0 / 0.08)" }}
          >
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: hovered ? `${hero.power}%` : "0%",
                background: hero.color,
                boxShadow: `0 0 8px ${hero.color}`,
              }}
            />
          </div>
        </div>

        {/* Bio — shown on hover for main, always for others */}
        <div
          className="overflow-hidden transition-all duration-300"
          style={{ maxHeight: hovered || isMain ? "120px" : "0" }}
        >
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.75rem",
              color: "oklch(0.65 0.01 280)",
              lineHeight: 1.6,
            }}
          >
            {hero.bio}
          </p>

          {/* Abilities */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {hero.abilities.map((ability) => (
              <span
                key={ability}
                className="px-2 py-0.5"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.1em",
                  color: hero.color,
                  border: `1px solid ${hero.color}`,
                  background: `${hero.color.replace(")", " / 0.08)")}`,
                }}
              >
                {ability}
              </span>
            ))}
          </div>
        </div>

        {/* Origin */}
        <div className="flex items-center gap-2 mt-3 pt-3" style={{ borderTop: "1px solid oklch(1 0 0 / 0.08)" }}>
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: hero.color }}
          />
          <span className="stat-label">Origin: {hero.origin}</span>
        </div>
      </div>

      {/* Hover border glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-200"
        style={{
          border: `2px solid ${hero.color}`,
          opacity: hovered ? 1 : 0,
          boxShadow: `inset 0 0 20px ${hero.color.replace(")", " / 0.1)")}`,
        }}
      />
    </div>
  );
}

export default function HeroesSection() {
  const { ref: titleRef, visible: titleVisible } = useScrollReveal();

  return (
    <section
      id="heroes"
      className="relative py-24"
      style={{ background: "oklch(0.09 0.005 280)" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle, oklch(0.96 0.003 280 / 0.04) 1px, transparent 1px)",
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
            <span className="issue-badge">The Roster</span>
          </div>
          <h2
            className="panel-border-left pl-6"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3rem, 6vw, 5rem)",
              lineHeight: 0.95,
              letterSpacing: "0.04em",
              color: "oklch(0.96 0.003 280)",
            }}
          >
            MEET THE
            <br />
            <span style={{ color: "oklch(0.88 0.28 142)" }} className="text-glow-green">
              HEROES
            </span>
          </h2>
          <p
            className="mt-4 max-w-lg"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.9rem",
              color: "oklch(0.65 0.01 280)",
              lineHeight: 1.7,
            }}
          >
            Each hero carries the weight of their neighborhood. Hover a card to
            reveal their full power profile.
          </p>
        </div>

        {/* Heroes grid */}
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gridAutoRows: "auto",
          }}
        >
          {heroes.map((hero, i) => (
            <HeroCard key={hero.id} hero={hero} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
