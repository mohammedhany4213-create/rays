import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Users,
  Award,
  ArrowRight,
  Sun,
  Target,
  Globe,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "500+", label: "Projects Completed" },
  { value: "200+", label: "Satisfied Clients" },
  { value: "50 MW+", label: "Capacity Installed" },
];

const values = [
  {
    Icon: ShieldCheck,
    title: "Safety First",
    desc: "Every installation meets the highest international safety standards. We never cut corners where it matters most.",
  },
  {
    Icon: Zap,
    title: "Peak Efficiency",
    desc: "Our systems are engineered to extract maximum energy from Egypt's abundant sunshine — year after year.",
  },
  {
    Icon: Users,
    title: "Expert Team",
    desc: "Certified engineers and technicians with decades of combined experience in solar and electrical systems.",
  },
  {
    Icon: Award,
    title: "Certified Quality",
    desc: "We use only tier-1 panels and components from internationally certified manufacturers.",
  },
];

const milestones = [
  { year: "2010", event: "RAYS Electric founded in Cairo with a 5-person engineering team." },
  { year: "2014", event: "Expanded into commercial solar — first 100 kW installation completed." },
  { year: "2018", event: "Launched agricultural solar division. Reached 100 MW total installed capacity." },
  { year: "2022", event: "Achieved ISO 9001 certification. Opened North Coast regional office." },
  { year: "2025", event: "500+ installations milestone. Largest industrial project at 500 kW completed." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function About() {
  return (
    <div className="bg-navy">
      {/* ─── HERO ─── */}
      <section className="relative pt-40 pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=2000&q=75"
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-navy" />
          <div className="absolute inset-0 dot-grid opacity-15" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-amber text-[11px] font-bold tracking-[0.3em] uppercase mb-6"
          >
            <span className="w-8 h-px bg-amber" />
            Our Story
            <span className="w-8 h-px bg-amber" />
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
          >
            Built on Purpose,
            <br />
            <span className="text-gradient">Driven by Impact</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Since 2010, RAYS Electric has been on a mission to make premium solar
            energy accessible to every Egyptian home and business. Here's how we got here.
          </motion.p>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="bg-navy-light border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="flex flex-col items-center text-center md:border-r border-white/5 last:border-0"
              >
                <span className="text-4xl md:text-5xl font-black text-gradient mb-2">
                  {stat.value}
                </span>
                <span className="text-white/35 text-[11px] tracking-[0.2em] uppercase">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STORY ─── */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/40">
              <img
                src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1200&q=85"
                alt="RAYS Electric engineers"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/60 to-transparent" />
            </div>

            <div className="absolute -bottom-5 -right-3 md:-right-6 bg-navy-light border border-white/10 rounded-2xl px-6 py-5 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber/15 rounded-xl flex items-center justify-center">
                  <Globe className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <span className="block text-white font-bold text-sm">International</span>
                  <span className="block text-white/40 text-xs">Standards Applied</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <SectionHeader
              label="Our Story"
              title="Pioneering Solar"
              highlight="in Egypt"
              align="left"
            />
            <div className="mt-6 space-y-5 text-white/50 text-base leading-relaxed">
              <p>
                RAYS Electric was founded in Cairo in 2010 by a team of electrical engineers
                who saw what was coming: soaring energy costs, a sun-drenched country, and
                zero accessible solar infrastructure.
              </p>
              <p>
                We started small — residential installations in New Cairo and Sheikh Zayed.
                But our reputation for quality and transparency spread quickly. By 2014,
                commercial clients were calling. By 2018, we were operating across all
                sectors: residential, commercial, industrial, and agricultural.
              </p>
              <p>
                Today, RAYS Electric is one of Egypt's most trusted solar brands — with over
                500 completed installations, a 50 MW+ installed base, and a team of 80+
                certified engineers and technicians.
              </p>
            </div>

            <Link
              to="/contact"
              className="group mt-10 inline-flex items-center gap-2 bg-amber hover:bg-amber-light text-navy font-black text-sm px-8 py-4 rounded-full tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-amber/30 hover:-translate-y-0.5"
            >
              Start a Project With Us
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="py-28 px-6 bg-navy-light border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <SectionHeader
              label="Our Values"
              title="The Principles We"
              highlight="Build On"
              description="Every decision we make — from component selection to installation technique — is guided by four core commitments."
            />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="group p-7 rounded-2xl border border-white/5 hover:border-amber/20 bg-navy transition-all duration-400"
              >
                <div className="w-12 h-12 rounded-xl bg-amber/10 border border-amber/15 flex items-center justify-center mb-5 group-hover:bg-amber/20 group-hover:border-amber/30 transition-all duration-300">
                  <Icon className="w-5 h-5 text-amber" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-amber transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <SectionHeader
              label="Our Journey"
              title="15 Years of"
              highlight="Milestones"
            />
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2" />

            <div className="flex flex-col gap-12">
              {milestones.map(({ year, event }, i) => (
                <motion.div
                  key={year}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className={`relative flex items-start gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber border-4 border-navy z-10 flex-shrink-0" />

                  {/* Content */}
                  <div className={`ml-14 md:ml-0 md:w-5/12 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <span className="text-amber font-black text-2xl block mb-1">{year}</span>
                    <p className="text-white/55 text-sm leading-relaxed">{event}</p>
                  </div>

                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISSION ─── */}
      <section className="py-28 px-6 bg-navy-light border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {[
            {
              Icon: Target,
              label: "Our Mission",
              text: "To accelerate Egypt's transition to clean, affordable solar energy by delivering world-class systems with unmatched reliability and service.",
            },
            {
              Icon: Sun,
              label: "Our Vision",
              text: "A future where every Egyptian home and business runs on clean, sustainable solar energy — and RAYS Electric helped make it possible.",
            },
          ].map(({ Icon, label, text }, i) => (
            <motion.div
              key={label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="p-8 rounded-2xl border border-white/5 bg-navy"
            >
              <div className="w-12 h-12 rounded-xl bg-amber/10 border border-amber/15 flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-amber" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{label}</h3>
              <p className="text-white/45 text-base leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 px-6 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Ready to Make the <span className="text-gradient">Switch?</span>
          </h2>
          <p className="text-white/45 text-base mb-10 leading-relaxed">
            Join 200+ satisfied clients across Egypt who trusted RAYS Electric with their solar journey.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-amber hover:bg-amber-light text-navy font-black text-sm px-10 py-4 rounded-full tracking-wide transition-all duration-300 hover:shadow-2xl hover:shadow-amber/35 hover:-translate-y-0.5"
          >
            Get a Free Assessment
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
