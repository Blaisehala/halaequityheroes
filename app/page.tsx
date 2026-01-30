'use client'

import Image from "next/image";
import { motion } from "framer-motion";
// import { HeroCarousel } from "./components/HeroCarousel";
import CurvedCarousel from "./components/CurvedCarousel";

const stats = [
  { label: "Local chapters", value: "24+" },
  { label: "Volunteer hours", value: "18K+" },
  { label: "Funds directed", value: "$1.2M" },
];

const pillars = [
  {
    title: "Equity first",
    body: "We center communities who are closest to the challenge and furthest from resources.",
  },
  {
    title: "Radical transparency",
    body: "From intake to impact, every decision and dollar is traceable.",
  },
  {
    title: "Everyday heroes",
    body: "You do not need a foundation to change the world. You just need to start.",
  },
];

const initiatives = [
  {
    icon: "/globe.svg",
    title: "Community Equity Funds",
    body: "Micro‑grants to grassroots groups led by women, youth, and marginalized communities.",
  },
  {
    icon: "/window.svg",
    title: "Skills for Justice",
    body: "Designers, engineers, and operators volunteering their craft to power local campaigns.",
  },
  {
    icon: "/file.svg",
    title: "Stories that Shift Power",
    body: "Storytelling labs that amplify lived experience and challenge the status quo.",
  },
];

const waysToJoin = [
  {
    title: "Donate monthly",
    body: "Give what you can, when you can. 100% of community gifts go to equity initiatives.",
    action: "Start a monthly gift",
  },
  {
    title: "Volunteer your skills",
    body: "Join a project team in product, data, operations, or storytelling.",
    action: "Offer your skills",
  },
  {
    title: "Start a local circle",
    body: "Bring Hala Equity Heroes to your campus, company, or neighborhood.",
    action: "Launch a circle",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c2340] via-[#E6F3FF] to-[#15162b] text-slate-900">
      <main>
        {/* Hero with Curved Carousel */}

       {/* Hero with Curved Carousel */}
{/* Hero with Curved Carousel */}
<section className="relative min-h-[85vh] sm:min-h-[90vh] overflow-hidden bg-[#0c2340] text-white pb-8">
  {/* Mobile: Dark overlay for text readability (only on mobile) */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#0c2340]/95 via-[#0c2340]/70 to-[#0c2340]/95 z-20 pointer-events-none md:hidden" />
  
  {/* Mobile: Text box at top */}
  <div className="relative z-30 mx-auto max-w-6xl px-4 pt-12 sm:pt-16 md:hidden">
    <div className="bg-[#0c2340]/80 backdrop-blur-sm rounded-2xl p-6">
      <p className="mt-4 text-sm leading-relaxed text-white/95 sm:text-base">
        In regions where resources are scarce, our community-powered
        initiatives are among the most effective ways to deliver care and
        equity to those who need it most.
      </p>
    </div>
  </div>

  {/* Carousel Container */}
  <div className="absolute inset-0 pt-[240px] sm:pt-[200px] md:pt-8 lg:pt-4">
    <CurvedCarousel />
  </div>

  {/* Desktop: Content below carousel */}
  <div className="relative z-30 mx-auto max-w-6xl px-4 pt-[400px] sm:pt-[380px] md:pt-[380px] lg:pt-[360px] hidden md:block">
    <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-center mb-6">
      Changing Lives
    </h1>
    <p className="text-base md:text-lg leading-relaxed text-white/95 max-w-3xl mx-auto text-center">
      In regions where resources are scarce, our community-powered
      initiatives are among the most effective ways to deliver care and
      equity to those who need it most.
    </p>
  </div>

  {/* Stats - Bottom */}
  <div className="relative z-30 mx-auto max-w-6xl px-4 sm:px-6 mt-8 md:mt-12">
    <div className="flex flex-wrap gap-4 sm:gap-6 text-xs justify-center md:justify-start">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-[#0c2340]/80 backdrop-blur-sm rounded-lg px-4 py-2 md:bg-white/10">
          <p className="text-base sm:text-lg font-semibold text-white">
            {stat.value}
          </p>
          <p className="text-white/80">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* _______________________________________________________________ */}

        {/* Mission */}
      

<section id="mission" className="relative mt-10 bg-gradient-to-b from-[#E6F3FF] to-[#DBEAFE] py-20 sm:py-24 overflow-hidden">
  {/* Animated background orbs */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl"
      animate={{
        x: [0, 100, 0],
        y: [0, 50, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
      animate={{
        x: [0, -80, 0],
        y: [0, -60, 0],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </div>

  <div className="relative mx-auto max-w-6xl px-6">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl space-y-4"
    >
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "4rem" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-1 bg-emerald-400 rounded-full"
      />
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
        A community-led charity for real equity work.
      </h2>
      <p className="text-base md:text-lg leading-relaxed text-slate-700">
        Traditional philanthropy often leaves the most impacted people
        out of the room. Hala Equity Heroes flips the script by moving
        decisions, resources, and storytelling power into the hands of
        community organizers, educators, caregivers, and youth leaders.
      </p>
    </motion.div>

    <div className="mt-12 grid gap-6 sm:grid-cols-3">
      {pillars.map((pillar, index) => (
        <motion.div
          key={pillar.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ 
            y: -8,
            transition: { duration: 0.3 }
          }}
          className="group relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative h-full rounded-2xl border border-sky-100 bg-white/90 backdrop-blur-sm p-6 shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center shadow-lg">
                <span className="text-2xl">
                  {index === 0 ? "⚖️" : index === 1 ? "🔍" : "🦸"}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold tracking-tight text-slate-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-700">
                  {pillar.body}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

        {/* How it works */}
      {/* How it works */}
<section
  id="how-it-works"
  className="relative mt-10 bg-gradient-to-b from-[#DBEAFE] via-[#C7D2FE] to-[#A5B4FC] py-20 sm:py-24"
>
  <div className="mx-auto max-w-5xl px-6">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl space-y-4"
    >
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "4rem" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-1 bg-emerald-400 rounded-full"
      />
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
        How Hala Equity Heroes works.
      </h2>
      <p className="text-base md:text-lg leading-relaxed text-slate-700">
        We keep the model simple, transparent, and accountable, so you
        always know how your contribution is moving the needle.
      </p>
    </motion.div>

    <div className="mt-12 space-y-8">
      {[
        {
          num: "1",
          title: "Listen to local priorities.",
          desc: "Community partners share what equity work looks like where they live – from mutual aid to legal clinics to storytelling collectives.",
          icon: "👂"
        },
        {
          num: "2",
          title: "Match heroes to initiatives.",
          desc: "Volunteers, donors, and circles choose projects that align with their values, capacity, and skills.",
          icon: "🤝"
        },
        {
          num: "3",
          title: "Fund, build, and report back.",
          desc: "Resources flow directly to partners, with regular updates, impact notes, and space for reflection shared back to the community.",
          icon: "📊"
        }
      ].map((step, index) => (
        <motion.div
          key={step.num}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          className="group"
        >
          <div className="flex gap-6 items-start">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0 relative"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center text-2xl font-bold text-white shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                {step.num}
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                className="absolute -top-2 -right-2 text-3xl"
              >
                {step.icon}
              </motion.div>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
              className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-indigo-100"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>




        {/* Initiatives */}
        {/* Initiatives */}
<section
  id="initiatives"
  className="relative mt-10 bg-gradient-to-b from-[#6366F1] via-[#4F46E5] to-[#4338CA] py-20 sm:py-24 text-slate-50 overflow-hidden"
>
  {/* Animated grid background */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0" style={{
      backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                       linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
      backgroundSize: '50px 50px'
    }} />
  </div>

  <div className="relative mx-auto max-w-6xl px-6">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-4 text-center mb-12"
    >
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "4rem" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-1 bg-emerald-400 rounded-full mx-auto"
      />
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        Current community initiatives.
      </h2>
      <p className="text-base md:text-lg leading-relaxed text-indigo-100 max-w-2xl mx-auto">
        These are a few of the live areas where Heroes are currently
        showing up — with funding, mentorship, and hands-on builds.
      </p>
    </motion.div>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {initiatives.map((item, index) => (
        <motion.article
          key={item.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ 
            y: -12,
            rotateY: 5,
            rotateX: 5,
          }}
          style={{ transformStyle: 'preserve-3d' }}
          className="group relative cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 to-blue-400/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative h-full flex flex-col gap-4 rounded-3xl border border-indigo-300/30 bg-indigo-900/60 backdrop-blur-sm p-6 shadow-xl hover:shadow-2xl transition-all duration-500">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-500 shadow-lg"
            >
              <Image
                src={item.icon}
                alt=""
                width={32}
                height={32}
                className="opacity-95 brightness-0 invert"
              />
            </motion.div>
            
            <div className="flex-1">
              <h3 className="text-xl font-bold tracking-tight text-slate-50 mb-3">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-indigo-100">
                {item.body}
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 w-full rounded-full bg-emerald-400/20 border border-emerald-400/50 px-4 py-2 text-sm font-semibold text-emerald-300 hover:bg-emerald-400/30 transition-colors duration-300"
            >
              Learn more →
            </motion.button>
          </div>
        </motion.article>
      ))}
    </div>
  </div>
</section>

        {/* Join */}
        <section
          id="join"
          className="mt-10 bg-gradient-to-b from-[#1E1B4B] via-[#020617] to-[#020617] py-14 text-slate-50 shadow-[0_25px_80px_rgba(15,23,42,0.85)] sm:py-16"
        >
          <div className="mx-auto max-w-5xl px-6">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div className="max-w-2xl space-y-3">
                <h2 className="text-2xl font-semibold tracking-tight">
                  There is a role for every kind of Hero.
                </h2>
                <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
                  Whether you can give 10 minutes a month or launch a full
                  chapter, your contribution matters. Choose the on‑ramp that
                  matches your current capacity.
                </p>
              </div>
              <p className="text-xs text-slate-400">
                You can change or pause your involvement at any time.
              </p>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
              {waysToJoin.map((way) => (
                <div
                  key={way.title}
                  className="flex flex-col justify-between rounded-2xl border border-indigo-500/40 bg-indigo-900/40 p-3 backdrop-blur-sm"
                >
                  <div className="space-y-2">
                    <h3 className="text-[13px] font-semibold tracking-tight text-slate-50">
                      {way.title}
                    </h3>
                    <p className="text-[11px] leading-relaxed text-indigo-100">
                      {way.body}
                    </p>
                  </div>
                  <button className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-emerald-400/95 px-3 py-1.5 text-[11px] font-semibold text-slate-950 shadow-sm shadow-emerald-500/60 transition hover:bg-emerald-300">
                    {way.action}
                  </button>
                </div>
              ))}
            </div>
            <form className="mt-8 max-w-md space-y-3 rounded-2xl border border-indigo-500/40 bg-slate-950/70 p-4 backdrop-blur">
              <p className="text-sm font-medium text-zinc-50">
                Stay close to the work.
              </p>
              <p className="text-xs text-slate-300">
                Monthly community notes with new initiatives, impact snapshots,
                and ways to plug in.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  required
                  placeholder="you@example.org"
                  className="h-10 flex-1 rounded-full border border-indigo-500/50 bg-slate-900 px-3 text-xs text-slate-100 outline-none placeholder:text-slate-500 focus:border-emerald-400"
                />
                <button
                  type="submit"
                  className="h-10 rounded-full bg-emerald-400 px-4 text-xs font-semibold text-slate-950 shadow-sm shadow-emerald-500/60 transition hover:bg-emerald-300"
                >
                  Get community notes
                </button>
              </div>
              <p className="text-[10px] text-slate-500">
                No spam. Just stories and ways to support equity work around the
                world.
              </p>
            </form>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="mt-10 bg-slate-950/80 py-14 text-slate-50 shadow-[0_25px_80px_rgba(15,23,42,0.9)] sm:py-16"
        >
          <div className="mx-auto max-w-5xl px-6">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight">
                Frequently asked questions.
              </h2>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                A quick overview of how we operate as a community-based charity.
              </p>
            </div>
            <div className="mt-6 space-y-4 text-sm">
              <details className="group rounded-2xl border border-slate-700 bg-slate-900/60 p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-zinc-50">
                  How is Hala Equity Heroes structured?
                  <span className="ml-4 text-xs text-zinc-400 group-open:hidden">
                    +
                  </span>
                  <span className="ml-4 hidden text-xs text-zinc-400 group-open:inline">
                    −
                  </span>
                </summary>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  We operate as a community-based charity with a small core team
                  and a wide network of volunteer circles. Local partners lead
                  on priorities and design, while Heroes provide resources,
                  skills, and amplification.
                </p>
              </details>
              <details className="group rounded-2xl border border-slate-700 bg-slate-900/60 p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-zinc-50">
                  Where does my contribution go?
                  <span className="ml-4 text-xs text-zinc-400 group-open:hidden">
                    +
                  </span>
                  <span className="ml-4 hidden text-xs text-zinc-400 group-open:inline">
                    −
                  </span>
                </summary>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Community contributions primarily fund grants to grassroots
                  partners, tools to support their work, and the minimal
                  infrastructure needed to keep the network safe and
                  accountable. We publish transparent breakdowns for each
                  initiative.
                </p>
              </details>
              <details className="group rounded-2xl border border-slate-700 bg-slate-900/60 p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-zinc-50">
                  Do I need prior experience in social impact work?
                  <span className="ml-4 text-xs text-zinc-400 group-open:hidden">
                    +
                  </span>
                  <span className="ml-4 hidden text-xs text-zinc-400 group-open:inline">
                    −
                  </span>
                </summary>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Not at all. We welcome people at every stage of their journey.
                  The only requirements are a commitment to equity, a
                  willingness to learn, and respect for community leadership.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950 py-6">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-3 px-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Hala Equity Heroes. Community-based,
            transparency-led charity.
          </p>
          <p className="text-[11px]">
            Built with care for organizers, dreamers, and everyday heroes
            everywhere.
          </p>
        </div>
      </footer>
    </div>
  );
}
