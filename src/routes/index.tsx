import { createFileRoute, Link } from "@tanstack/react-router";
import heroOil from "@/assets/hero-oil.jpg";
import seedsImg from "@/assets/seeds.jpg";
import gearsImg from "@/assets/gears.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NovaSeed Bio — Seed-derived industrial lubricants" },
      { name: "description", content: "High-performance biodegradable lubricants engineered from novel seed oils. Outperform petroleum, without the environmental burden." },
      { property: "og:title", content: "NovaSeed Bio — A cleaner industrial future" },
      { property: "og:description", content: "Breakthrough seed-oil chemistry for industrial, hydraulic and specialty lubricants." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Problem />
      <Solution />
      <Performance />
      <Applications />
      <Why />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/75 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <Logo />
          <span className="font-display text-xl font-semibold tracking-tight">NovaSeed Bio</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#problem" className="hover:text-foreground transition">Problem</a>
          <a href="#solution" className="hover:text-foreground transition">Solution</a>
          <a href="#applications" className="hover:text-foreground transition">Applications</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <a href="#contact" className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition">
          Request a sample
        </a>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-gradient shadow-glow">
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary" fill="currentColor">
        <path d="M12 2C8 8 6 12 6 15a6 6 0 0 0 12 0c0-3-2-7-6-13z"/>
      </svg>
    </span>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero text-primary-foreground">
      <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: `radial-gradient(circle at 80% 20%, oklch(0.78 0.17 65 / 0.6), transparent 50%)` }} />
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-28 lg:pt-28 lg:pb-40 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-amber/40 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-amber">
            <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse" />
            Seed-derived industrial lubricants
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] text-balance">
            A cleaner industrial future,{" "}
            <span className="italic text-amber">grown from seed.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/80 text-balance">
            NovaSeed Bio commercializes breakthrough seed-oil technologies to deliver
            high-performance, biodegradable lubricants for industry — without the
            petroleum and without the compromise.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#solution" className="rounded-full bg-amber-gradient text-amber-foreground px-6 py-3 font-medium shadow-glow hover:translate-y-[-1px] transition">
              See the technology
            </a>
            <a href="#contact" className="rounded-full border border-white/20 px-6 py-3 font-medium hover:bg-white/5 transition">
              Partner with us →
            </a>
          </div>
          <dl className="mt-14 grid grid-cols-3 gap-6 max-w-md">
            {[
              ["100%", "Bio-based"],
              ["High", "Performance"],
              ["0", "Petroleum"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-display text-3xl font-semibold text-amber">{k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-primary-foreground/60">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-amber/20 blur-3xl" />
          <img
            src={heroOil}
            alt="A golden drop of seed-derived lubricant falling into a pool, surrounded by sunflower seeds and leaves"
            width={1600}
            height={1100}
            className="relative rounded-3xl shadow-soft animate-float object-cover aspect-[16/11] w-full"
          />
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Industrial lubricants", "Hydraulic fluids", "Specialty formulations", "Biodegradable solutions", "Metalworking", "Gear oils"];
  return (
    <div className="border-y border-border bg-secondary/50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-5 flex flex-wrap gap-x-10 gap-y-2 justify-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {items.map((i) => <span key={i}>● {i}</span>)}
      </div>
    </div>
  );
}

function Problem() {
  const items = [
    { n: "01", t: "Petroleum dependency", d: "Industrial lubricants remain overwhelmingly derived from fossil oil — a finite, carbon-heavy supply chain." },
    { n: "02", t: "Regulatory pressure", d: "Environmental concerns, tightening regulations, and rising disposal costs are squeezing legacy formulations." },
    { n: "03", t: "Performance compromise", d: "Today's bio-based alternatives too often sacrifice viscosity, oxidative stability, or lifespan." },
  ];
  return (
    <section id="problem" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-leaf">The problem</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-balance">
            Industry runs on lubricants that the planet can't afford.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i.n} className="rounded-2xl border border-border bg-card p-8 hover:shadow-soft transition">
              <div className="font-display text-5xl font-semibold text-amber">{i.n}</div>
              <h3 className="mt-6 text-xl font-semibold">{i.t}</h3>
              <p className="mt-3 text-muted-foreground">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section id="solution" className="relative py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <img
            src={seedsImg}
            alt="Mixed oilseeds spilled on a dark slate surface"
            width={1200}
            height={900}
            loading="lazy"
            className="rounded-3xl shadow-soft object-cover aspect-[4/3] w-full"
          />
          <div className="absolute -bottom-6 -right-6 hidden md:block rounded-2xl bg-amber-gradient text-amber-foreground px-6 py-5 shadow-glow max-w-[14rem]">
            <p className="font-display text-2xl font-semibold leading-tight">Engineered by nature.</p>
            <p className="mt-1 text-xs opacity-80">Refined by science.</p>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-sm uppercase tracking-[0.2em] text-amber">Our solution</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-balance">
            High-performance lubricants from novel seed oils.
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80">
            NovaSeed develops environmentally friendly lubricants from seeds with
            unique oil compositions — bio-designed to deliver superior performance
            and sustainability in a single drop.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "Differentiated oil chemistry built into the seed",
              "Enhanced functional performance across temperature & load",
              "Biodegradable end-of-life with reduced disposal burden",
              "Scalable agricultural feedstock platform",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-amber-gradient flex items-center justify-center text-primary text-xs font-bold">✓</span>
                <span className="text-primary-foreground/90">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Performance() {
  const stats = [
    { v: "Superior", l: "Oxidative stability vs. legacy bio-oils" },
    { v: "Wide", l: "Operating temperature window" },
    { v: "Lower", l: "Carbon & disposal footprint" },
    { v: "Engineered", l: "From seed genetics up" },
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-leaf">Performance without compromise</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-balance">
              Built for the machinery that builds everything else.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Other bio-lubricants ask you to trade performance for sustainability.
              NovaSeed's seed-oil platform is engineered from the molecule up — so
              you don't have to choose.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.l} className="border-t-2 border-amber pt-4">
                  <div className="font-display text-3xl font-semibold">{s.v}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={gearsImg}
              alt="Industrial gears coated in golden NovaSeed lubricant"
              width={1200}
              height={900}
              loading="lazy"
              className="rounded-3xl shadow-soft object-cover aspect-[4/3] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Applications() {
  const apps = [
    { t: "Industrial lubricants", d: "Drop-in replacements for general machinery, bearings, and gear systems." },
    { t: "Hydraulic fluids", d: "High-stability fluids for mobile and stationary hydraulic systems." },
    { t: "Specialty formulations", d: "Tailored chemistries for demanding niche applications." },
    { t: "Biodegradable solutions", d: "For environmentally sensitive sites — marine, forestry, agriculture." },
  ];
  return (
    <section id="applications" className="py-24 lg:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.2em] text-leaf">Applications</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-balance">
              Wherever industry needs a cleaner drop.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Targeting the largest, fastest-evolving segments of the global lubricants market.
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {apps.map((a, i) => (
            <div key={a.t} className="group rounded-2xl bg-card border border-border p-7 hover:border-amber transition">
              <div className="font-display text-sm text-amber-foreground/60">0{i+1}</div>
              <h3 className="mt-4 font-display text-xl font-semibold">{a.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a.d}</p>
              <div className="mt-6 h-px w-12 bg-amber group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  const items = [
    ["Differentiated oil chemistry", "Plant-engineered molecules unavailable in conventional feedstocks."],
    ["Enhanced functional performance", "Designed to match — or beat — petroleum benchmarks."],
    ["Founder-inventors", "The scientists behind the IP are the ones building the company."],
    ["Deep technical expertise", "Oilseed biochemistry, crop breeding, and materials science under one roof."],
    ["University-licensed IP", "Exclusive commercialization pathway from the University of North Texas."],
    ["Scalable agricultural platform", "A feedstock model that grows with demand."],
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-leaf">Why NovaSeed</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-balance">
            Six reasons we win — at the molecule, the field, and the market.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {items.map(([t, d], i) => (
            <div key={t} className="flex gap-5">
              <div className="font-display text-3xl text-amber w-10 shrink-0">0{i+1}</div>
              <div>
                <h3 className="font-display text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Technology() {
  return (
    <section id="technology" className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-amber">Technology platform</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-balance">
            IP licensed from UNT. Built by the inventors.
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80">
            NovaSeed Bio commercializes an exclusive technology platform licensed from
            the University of North Texas. Our founders are co-inventors of the core
            seed-oil innovations — combining oilseed biochemistry, crop breeding, and
            materials science end-to-end.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[["Phase I", "Technical validation"], ["Phase II", "Pilot partnerships"], ["Phase III", "Commercial deployment"]].map(([k,v]) => (
              <div key={k} className="rounded-xl bg-white/5 border border-white/10 p-4">
                <div className="text-xs uppercase tracking-wider text-amber">{k}</div>
                <div className="mt-2 text-sm">{v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:pl-10">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="font-display text-xl font-semibold">Competitive landscape</h3>
            <div className="mt-6 divide-y divide-white/10">
              {[
                ["NovaSeed Bio", "Plant oils with engineered performance.", true],
                ["Traditional bio-lubricants", "Limited molecular optimization.", false],
                ["Petroleum lubricants", "Environmental & regulatory burden.", false],
              ].map(([n, d, hi]) => (
                <div key={n as string} className="py-5 flex gap-4 items-start">
                  <span className={`mt-1 h-2.5 w-2.5 rounded-full shrink-0 ${hi ? "bg-amber" : "bg-white/30"}`} />
                  <div>
                    <div className={`font-semibold ${hi ? "text-amber" : "text-primary-foreground"}`}>{n}</div>
                    <div className="text-sm text-primary-foreground/70 mt-0.5">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Team() {
  const team = [
    { n: "Kent Chapman", r: "President & CEO" },
    { n: "Diana Berman", r: "Chief Scientific Officer" },
    { n: "John Park", r: "Secretary" },
    { n: "Edgar Cahoon", r: "Chair, Scientific Advisory Board" },
  ];
  return (
    <section id="team" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-leaf">Founding team</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-balance">
            Inventors. Operators. Plant scientists.
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m) => (
            <div key={m.n} className="rounded-2xl border border-border bg-card p-6">
              <div className="h-16 w-16 rounded-full bg-amber-gradient flex items-center justify-center font-display text-xl font-semibold text-primary">
                {m.n.split(" ").map(s => s[0]).join("")}
              </div>
              <div className="mt-5 font-display text-lg font-semibold">{m.n}</div>
              <div className="text-sm text-muted-foreground">{m.r}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-hero text-primary-foreground p-10 md:p-16 shadow-soft">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-amber/30 blur-3xl" />
          <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-balance">
                Replace petroleum. Keep performance. <span className="italic text-amber">Start with a sample.</span>
              </h2>
              <p className="mt-5 text-primary-foreground/80 max-w-lg">
                Talk to our team about pilots, formulation partnerships, or licensing —
                we're actively engaging industrial OEMs and specialty formulators.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@novaseedbio.com" className="rounded-full bg-amber-gradient text-amber-foreground px-6 py-3 font-medium text-center shadow-glow hover:translate-y-[-1px] transition">
                hello@novaseedbio.com
              </a>
              <Link to="/" className="rounded-full border border-white/20 px-6 py-3 font-medium text-center hover:bg-white/5 transition">
                Download one-pager
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo />
          <div>
            <div className="font-display font-semibold">NovaSeed Bio</div>
            <div className="text-xs text-muted-foreground">Sustainable seed-derived lubricants.</div>
          </div>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} NovaSeed Bio. Commercializing UNT-licensed seed-oil technology.
        </div>
      </div>
    </footer>
  );
}
