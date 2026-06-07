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
    name: "BOSS",
    alias: "John — The Executive",
    origin: "Downtown Core",
    power: 92,
    powerClass: "OMEGA",
    abilities: ["Strategic Command", "Enhanced Strength", "Tactical Genius"],
    bio: "By day, John moves through boardrooms and power corridors. By night, he's Boss — the executive who traded suits for the streets. His allies know him by his real name. His enemies only know the mask.",
    color: "oklch(0.88 0.28 142)",
    image: "/images/boss/boss%20in%20gear.png",
    issue: "#001",
  },
  {
    id: 2,
    name: "BRIO",
    alias: "Lonnie — The Engineer",
    origin: "Tech District",
    power: 85,
    powerClass: "ALPHA+",
    abilities: ["Tech Mastery", "System Hacking", "Gadget Combat"],
    bio: "Lonnie built his powers the same way he builds everything — with his hands and his mind. An engineer by trade, Brio by night. His gear doesn't have bugs. It has features.",
    color: "oklch(0.62 0.22 42)",
    image: "/images/brio/Gemini_Generated_Image_lbs322lbs322lbs3.png",
    issue: "#007",
  },
  {
    id: 3,
    name: "FORCE",
    alias: "Adonis — The Heavy",
    origin: "Industrial Zone",
    power: 88,
    powerClass: "OMEGA",
    abilities: ["Superhuman Strength", "Force Field", "Unstoppable Momentum"],
    bio: "Adonis doesn't walk into a room — he arrives. Force is the team's anchor, the one they call when everything else fails. Built different, fights different, hits different.",
    color: "oklch(0.75 0.15 220)",
    image: "/images/force/force%20gng%20copy.png",
    issue: "#012",
  },
  {
    id: 4,
    name: "LAVIQUE",
    alias: "Alani — The Phantom",
    origin: "Harbor District",
    power: 86,
    powerClass: "ALPHA+",
    abilities: ["Stealth", "Telepathy", "Shadow Combat"],
    bio: "Her friends call her Alani. Her enemies never get close enough to ask. Lavique moves through conflict like water — silent, precise, and unavoidable. The team's conscience and its edge.",
    color: "oklch(0.88 0.18 320)",
    image: "/images/lavi/lavique%20poses.png",
    issue: "#015",
  },
  {
    id: 5,
    name: "BOSS",
    alias: "John — Government Op",
    origin: "The Streets",
    power: 90,
    powerClass: "OMEGA",
    abilities: ["Leadership", "Close Combat", "Crisis Command"],
    bio: "When the city calls, John answers. Coordinating with government contacts to protect the neighborhoods that matter most.",
    color: "oklch(0.88 0.28 142)",
    image: "/images/boss/boss%20meeting%20w%20govt.png",
    issue: "#003",
  },
  {
    id: 6,
    name: "BRIO & LAVIQUE",
    alias: "Lonnie & Alani",
    origin: "City-Wide",
    power: 95,
    powerClass: "SQUAD",
    abilities: ["Combined Tactics", "Dual Strike", "Unbreakable Bond"],
    bio: "Lonnie and Alani together are something else entirely. Where one falls short, the other fills the gap. Built-in trust. Zero hesitation.",
    color: "oklch(0.62 0.22 42)",
    image: "/images/brio%20and%20lavique.png",
    issue: "#020",
  },
  {
    id: 7,
    name: "VIGIL",
    alias: "John, Lonnie, Adonis & Alani",
    origin: "The City",
    power: 99,
    powerClass: "ELITE",
    abilities: ["Team Synergy", "City Defense", "Unified Force"],
    bio: "Four people who found each other through the struggle and chose to fight back together. This is what Vigil looks like.",
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
