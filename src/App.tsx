import { useEffect, useState } from "react";
import { ArrowUpRight, Award, Crown, X } from "lucide-react";

const NAV_LINKS = ["Projects", "Studio", "Offerings", "Inquire"] as const;

const STATS = [
  { value: "250+", label: "Brands Transformed" },
  { value: "95%", label: "Client Retention" },
  { value: "10+", label: "Years in the Game" },
] as const;

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4";

function menuItemStyle(open: boolean, index: number) {
  return {
    transitionDelay: `${index * 80 + 100}ms`,
    opacity: open ? 1 : 0,
    transform: open ? "translateY(0)" : "translateY(20px)",
  };
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <div className="relative h-dvh overflow-hidden bg-black text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src={VIDEO_SRC}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col">
        <header className="px-6 py-5 sm:px-10 lg:px-16 lg:py-7">
          <nav
            className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-2 lg:gap-x-8"
            aria-label="Primary"
          >
            <a
              href="#top"
              className="font-podium text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl"
            >
              Vanguard
            </a>

            <ul className="col-start-2 hidden items-center justify-center gap-2 whitespace-nowrap md:flex lg:gap-10">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-inter text-sm tracking-widest text-white/80 uppercase transition-colors duration-300 hover:text-white focus-visible:text-white focus-visible:outline-none"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#inquire"
              className="col-start-3 hidden items-center gap-2 border border-white/30 px-6 py-3 font-inter text-xs tracking-widest uppercase transition-colors duration-300 hover:border-white/60 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:inline-flex"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <button
              type="button"
              className="col-start-3 inline-flex flex-col space-y-1.5 justify-self-end md:hidden"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(true)}
            >
              <div className="h-0.5 w-6 bg-white" />
              <div className="h-0.5 w-6 bg-white" />
              <div className="h-0.5 w-4 bg-white" />
            </button>
          </nav>
        </header>

        <main className="flex flex-1 items-center overflow-y-auto px-6 sm:px-10 lg:px-16">
          <div className="w-full py-6 lg:py-8">
            <p className="animate-fade-up mb-6 flex items-center gap-2 font-inter text-xs tracking-[0.3em] text-white/70 uppercase lg:mb-8 sm:text-sm">
              <Crown className="h-4 w-4 text-white/70" aria-hidden="true" />
              World-Class Digital Collective
            </p>

            <h1 className="animate-fade-up-delay-1 font-podium text-[clamp(2.8rem,8vw,7rem)] leading-[0.92] tracking-tight text-white uppercase">
              <span className="block">Design.</span>
              <span className="block">Disrupt.</span>
              <span className="block">Conquer.</span>
            </h1>

            <p className="animate-fade-up-delay-2 mt-6 max-w-md font-inter text-sm leading-relaxed text-white/70 sm:text-base lg:mt-8">
              We build fierce brand identities
              <br />
              that don&apos;t just turn heads —{" "}
              <span className="font-bold text-white">they lead.</span>
            </p>

            <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap items-center gap-4 sm:gap-6 lg:mt-10">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 bg-black px-5 py-3 font-inter text-[11px] tracking-widest text-white uppercase transition-colors duration-300 hover:bg-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-7 sm:py-4 sm:text-xs"
              >
                See our work
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>

              <div className="hidden items-center gap-3 sm:flex">
                <Award className="h-8 w-8 text-white/50" aria-hidden="true" />
                <p className="font-inter text-xs tracking-wider text-white/60 uppercase">
                  <span className="block">Top-Rated</span>
                  <span className="block">Brand Studio</span>
                </p>
              </div>
            </div>

            <dl className="animate-fade-up-delay-4 mt-8 flex flex-wrap gap-6 sm:mt-10 sm:gap-12 lg:mt-14 lg:gap-16">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-inter text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 font-inter text-[9px] tracking-widest text-white/50 uppercase sm:text-xs">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </main>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-sm transition-all duration-500 md:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex h-full flex-col px-6 py-5 sm:px-10">
          <div className="flex items-center justify-between">
            <span className="font-podium text-2xl font-bold tracking-wider text-white uppercase sm:text-3xl">
              Vanguard
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="text-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col items-center justify-center gap-5" aria-label="Mobile">
            {NAV_LINKS.map((link, index) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="font-podium text-4xl text-white uppercase transition-all duration-500 sm:text-5xl"
                style={menuItemStyle(menuOpen, index)}
              >
                {link}
              </a>
            ))}

            <a
              href="#inquire"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex items-center gap-2 border border-white/30 px-6 py-3 font-inter text-xs tracking-widest uppercase transition-all duration-500 hover:border-white/60 hover:bg-white/10"
              style={menuItemStyle(menuOpen, NAV_LINKS.length)}
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
