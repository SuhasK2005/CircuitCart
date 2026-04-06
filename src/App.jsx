import { useState } from "react";
import heroImage from "./assets/parts/realistic/hero-realistic.jpg";
import resistorCard from "./assets/parts/realistic/resistor-realistic.jpg";
import capacitorCard from "./assets/parts/realistic/capacitor-realistic.jpg";
import sensorCard from "./assets/parts/realistic/sensor-realistic.jpg";

const navItems = [
  "Resistors",
  "Capacitors",
  "ICs",
  "Sensors",
  "Modules",
  "Tools",
];

const highlightParts = [
  {
    title: "ESP32 Dev Board",
    desc: "Wi-Fi + BLE microcontroller for rapid IoT prototyping",
    image: resistorCard,
  },
  {
    title: "LM2596 Regulator",
    desc: "High-efficiency buck converter module for clean power",
    image: capacitorCard,
  },
  {
    title: "BME280 Sensor",
    desc: "Temperature, humidity, and pressure in one tiny package",
    image: sensorCard,
  },
];

function App() {
  const [activeItem, setActiveItem] = useState("ICs");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--surface)] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
        <div className="bg-[var(--accent)] px-4 py-2 text-center text-xs font-semibold tracking-wide text-white">
          Free shipping above Rs 1299 on electronic components
        </div>

        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-slate-900 text-white shadow-lg shadow-slate-900/20">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  d="M4 9h16M4 15h16M8 4v5M16 4v5M8 15v5M16 15v5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div>
              <p className="text-lg font-black leading-none tracking-tight">
                CircuitCart
              </p>
              <p className="text-xs font-medium text-slate-500">
                Electronic Parts Marketplace
              </p>
            </div>
          </div>

          <div className="hidden min-w-0 flex-1 items-center gap-3 md:flex lg:max-w-xl">
            <input
              type="text"
              placeholder="Search part number, component, brand..."
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none ring-0 transition focus:border-[var(--accent)]"
            />
            <button className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">
              Search
            </button>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <button className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              Account
            </button>
            <button className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              Wishlist
            </button>
            <button className="rounded-lg bg-[var(--accent)] px-3 py-2 text-sm font-semibold text-white hover:brightness-95">
              Cart (0)
            </button>
          </div>

          <button
            className="rounded-lg border border-slate-200 p-2 md:hidden"
            onClick={() => setIsMobileOpen((open) => !open)}
            aria-label="Toggle navigation menu"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {isMobileOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        <nav className="hidden border-t border-slate-200/70 px-4 py-3 md:block sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveItem(item)}
                className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                  activeItem === item
                    ? "bg-slate-900 text-white"
                    : "bg-white text-slate-700 hover:bg-slate-100"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </nav>

        {isMobileOpen && (
          <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
            <div className="mb-3 flex items-center gap-2">
              <input
                type="text"
                placeholder="Search components..."
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[var(--accent)]"
              />
              <button className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white">
                Go
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <button
                  key={`mobile-${item}`}
                  className="rounded-lg bg-slate-100 px-3 py-2 text-left text-sm font-semibold text-slate-700"
                  onClick={() => {
                    setActiveItem(item);
                    setIsMobileOpen(false);
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-10">
          <div className="hero-orb hero-orb-left" aria-hidden="true" />
          <div className="hero-orb hero-orb-right" aria-hidden="true" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-orange-700">
                Engineering Ready Components
              </p>

              <h1 className="mt-5 max-w-xl text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
                Build your next circuit faster with trusted electronic parts.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Discover modules, sensors, ICs, and tools curated for students,
                makers, and professionals. Real specs, faster delivery, and
                quality you can rely on.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button className="rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:brightness-95">
                  Shop Components
                </button>
                <button className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:bg-slate-50">
                  View Latest Deals
                </button>
              </div>

              <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-slate-100 px-4 py-3">
                  <p className="text-2xl font-black text-slate-900">12K+</p>
                  <p className="text-xs font-semibold text-slate-500">
                    Parts in Catalog
                  </p>
                </div>
                <div className="rounded-xl bg-slate-100 px-4 py-3">
                  <p className="text-2xl font-black text-slate-900">48h</p>
                  <p className="text-xs font-semibold text-slate-500">
                    Dispatch Promise
                  </p>
                </div>
                <div className="rounded-xl bg-slate-100 px-4 py-3 col-span-2 sm:col-span-1">
                  <p className="text-2xl font-black text-slate-900">4.9/5</p>
                  <p className="text-xs font-semibold text-slate-500">
                    Buyer Rating
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="hero-float rounded-3xl border border-slate-200 bg-slate-50 p-3 shadow-2xl shadow-slate-300/20">
                <img
                  src={heroImage}
                  alt="Electronic parts layout with boards, sensors, and components"
                  className="h-[360px] w-full rounded-2xl object-cover sm:h-[430px]"
                />
              </div>

              <div className="absolute -left-2 top-4 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-md sm:-left-6 sm:top-8">
                <p className="text-xs font-semibold text-slate-500">Trending</p>
                <p className="text-sm font-black text-slate-900">
                  {activeItem}
                </p>
              </div>

              <div className="absolute -right-2 bottom-4 rounded-xl bg-slate-900 px-3 py-2 text-white shadow-lg sm:-right-6 sm:bottom-10">
                <p className="text-xs font-semibold text-slate-300">
                  Today Deal
                </p>
                <p className="text-sm font-black">Up to 25% off</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          {highlightParts.map((part) => (
            <article
              key={part.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <img
                src={part.image}
                alt={part.title}
                className="mb-4 h-36 w-full rounded-xl border border-slate-200 bg-slate-50 object-cover"
              />
              <p className="text-sm font-black text-slate-900">{part.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {part.desc}
              </p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
