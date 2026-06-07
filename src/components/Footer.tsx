/**
 * Vigil Studios — Footer
 * Design: Neo-Brutalist Street Art / Graphic Novel
 * - Dark footer with emblem, links, and social icons
 * - Green accent divider line
 */

const footerLinks = {
  Comics: ["Issue #1 — Free", "Volume 1", "Coming Soon", "Read Online"],
  Heroes: ["Brio", "Force", "Lavique", "Sentinel"],
  Studio: ["About", "North20 Studios", "Press Kit", "Contact"],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "oklch(0.05 0.002 280)",
        borderTop: "1px solid oklch(1 0 0 / 0.08)",
      }}
    >
      {/* Top accent line */}
      <div
        className="h-1"
        style={{
          background: "linear-gradient(to right, oklch(0.88 0.28 142), oklch(0.62 0.22 42), oklch(0.88 0.28 142))",
        }}
      />

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 flex items-center justify-center"
                style={{
                  background: "oklch(0.62 0.22 42)",
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L15 8H21L16.5 12.5L18.5 19L12 15.5L5.5 19L7.5 12.5L3 8H9L12 2Z"
                    fill="oklch(0.09 0.005 280)"
                  />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.6rem",
                    letterSpacing: "0.12em",
                    color: "oklch(0.96 0.003 280)",
                    lineHeight: 1,
                  }}
                >
                  VIGIL STUDIOS
                </div>
                <div
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.3em",
                    color: "oklch(0.88 0.28 142)",
                    lineHeight: 1,
                    marginTop: "2px",
                  }}
                >
                  A NORTH20 STUDIOS IMPRINT
                </div>
              </div>
            </div>

            <p
              className="mb-6"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.78rem",
                color: "oklch(0.55 0.01 280)",
                lineHeight: 1.8,
                maxWidth: "320px",
              }}
            >
              Original superhero comics. Free first issue. Owned platform. Characters built from the community up.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {["IG", "YT"].map((social) => (
                <button
                  key={social}
                  className="w-9 h-9 flex items-center justify-center transition-all duration-200"
                  style={{
                    border: "1px solid oklch(1 0 0 / 0.12)",
                    background: "transparent",
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.05em",
                    color: "oklch(0.55 0.01 280)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.88 0.28 142)";
                    (e.currentTarget as HTMLElement).style.color = "oklch(0.88 0.28 142)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "oklch(1 0 0 / 0.12)";
                    (e.currentTarget as HTMLElement).style.color = "oklch(0.55 0.01 280)";
                  }}
                >
                  {social}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <div
                className="mb-4"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  color: "oklch(0.62 0.22 42)",
                  textTransform: "uppercase",
                }}
              >
                {category}
              </div>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      className="transition-colors duration-200 text-left"
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "0.78rem",
                        color: "oklch(0.52 0.01 280)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "oklch(0.88 0.28 142)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "oklch(0.52 0.01 280)";
                      }}
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid oklch(1 0 0 / 0.06)" }}
        >
          <div
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.7rem",
              color: "oklch(0.4 0.008 280)",
              letterSpacing: "0.05em",
            }}
          >
            © 2022–2026 North20 Studios / Gino Rodrigues. All rights reserved. All characters are fictional.
          </div>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Press"].map((item) => (
              <button
                key={item}
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.7rem",
                  color: "oklch(0.4 0.008 280)",
                  letterSpacing: "0.05em",
                  transition: "color 200ms",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "oklch(0.88 0.28 142)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "oklch(0.4 0.008 280)";
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
