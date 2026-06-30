import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Sun,
  Home as HomeIcon,
  Building2,
  Factory,
  Leaf,
  ChevronDown,
  CheckCircle2,
  Zap,
  Shield,
  Award,
  TrendingUp,
} from "lucide-react";
import { projects } from "@/data/projects";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "500+", label: "Installations Completed" },
  { value: "50 MW+", label: "Total Capacity Installed" },
  { value: "200+", label: "Satisfied Clients" },
];

const services = [
  {
    Icon: HomeIcon,
    title: "Residential Solar",
    desc: "Premium rooftop systems for homes and villas, designed for maximum savings and minimal visual impact.",
  },
  {
    Icon: Building2,
    title: "Commercial Solar",
    desc: "High-capacity solutions that significantly cut operational energy costs for businesses of all sizes.",
  },
  {
    Icon: Factory,
    title: "Industrial Solar",
    desc: "Robust industrial-scale installations engineered for heavy power demands and 24/7 reliability.",
  },
  {
    Icon: Leaf,
    title: "Agricultural Solar",
    desc: "Off-grid pumping and irrigation systems that eliminate diesel dependency for farms across Egypt.",
  },
];

const whyPoints = [
  "ISO-certified installation teams with 15+ years of field experience",
  "End-to-end project management from design to commissioning",
  "Premium tier-1 solar panels with 25-year performance warranties",
  "Real-time monitoring dashboards for every installed system",
  "Fastest project turnaround times in the Egyptian market",
  "Post-installation maintenance and 24/7 technical support",
];

const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="bg-navy">
      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden"
      >
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2400&q=85"
            alt="Solar panels at sunrise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/70 to-navy" />
          <div className="absolute inset-0 dot-grid opacity-20" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 text-amber text-[11px] font-bold tracking-[0.3em] uppercase mb-7"
          >
            <span className="w-8 h-px bg-amber" />
            Egypt's Premier Solar Company
            <span className="w-8 h-px bg-amber" />
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-black text-white leading-[1.04] tracking-tight mb-7"
          >
            Powering Egypt's{" "}
            <br className="hidden sm:block" />
            <span className="text-gradient">Future</span> With Solar
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-white/55 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            From residential rooftops to industrial complexes — we deliver
            world-class solar solutions engineered for Egypt's climate and built
            to last a lifetime.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 bg-amber hover:bg-amber-light text-navy font-black text-sm px-9 py-4 rounded-full tracking-wide transition-all duration-300 hover:shadow-2xl hover:shadow-amber/35 hover:-translate-y-0.5"
            >
              Explore Our Projects
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold text-sm px-9 py-4 rounded-full transition-all duration-300 hover:bg-white/5"
            >
              Learn About Us
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/25"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </section>

      {/* ─── STATS RIBBON ─── */}
      <section className="bg-navy-light border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8">
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

      {/* ─── SERVICES ─── */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <SectionHeader
              label="What We Do"
              title="Comprehensive Solar"
              highlight="Solutions"
              description="We design, supply, install, and maintain solar energy systems tailored to every sector — with engineering precision and zero compromise on quality."
            />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="group relative p-7 rounded-2xl border border-white/5 hover:border-amber/20 bg-navy-light transition-all duration-400 cursor-default"
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

      {/* ─── ABOUT PREVIEW ─── */}
      <section className="py-28 px-6 bg-navy-light border-y border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/50">
              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85"
                alt="RAYS Electric team at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/50 to-transparent" />
            </div>
            {/* Floating stat badge */}
            <div className="absolute -bottom-5 -right-3 md:-right-6 bg-amber rounded-2xl px-6 py-4 shadow-xl shadow-amber/20">
              <span className="block text-navy font-black text-3xl leading-none">15+</span>
              <span className="block text-navy/70 text-xs font-semibold tracking-wide mt-0.5">
                Years Experience
              </span>
            </div>
            {/* Decorative */}
            <div className="absolute -top-3 -left-3 w-20 h-20 dot-grid rounded-xl opacity-50 pointer-events-none" />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <SectionHeader
              label="Who We Are"
              title="Engineering Excellence,"
              highlight="Sustainably Delivered"
              align="left"
            />
            <p className="text-white/45 text-base leading-relaxed mt-6 mb-8">
              RAYS Electric was founded with one mission: to accelerate Egypt's
              transition to clean, affordable solar energy. We combine
              international engineering standards with deep local expertise to
              deliver systems that perform beautifully for decades.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { Icon: Zap, label: "High Performance" },
                { Icon: Shield, label: "25-Year Warranty" },
                { Icon: Award, label: "ISO Certified" },
                { Icon: TrendingUp, label: "Proven ROI" },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber/10 border border-amber/15 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-amber" />
                  </div>
                  <span className="text-white/65 text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="group inline-flex items-center gap-2 border border-white/15 hover:border-amber/40 text-white hover:text-amber font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-amber/5"
            >
              Our Full Story
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ─── */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SectionHeader
                label="Our Work"
                title="Selected"
                highlight="Projects"
                align="left"
              />
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 text-amber hover:text-amber-light font-semibold text-sm transition-colors duration-200"
              >
                View All Projects
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY RAYS ─── */}
      <section className="py-28 px-6 bg-navy-light border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SectionHeader
                label="Why Choose Us"
                title="What Sets RAYS"
                highlight="Apart"
                description="We don't just install panels — we engineer long-term energy partnerships backed by the best technology and the most experienced teams in Egypt."
                align="left"
              />
              <Link
                to="/contact"
                className="group mt-10 inline-flex items-center gap-2 bg-amber hover:bg-amber-light text-navy font-black text-sm px-9 py-4 rounded-full tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-amber/30 hover:-translate-y-0.5"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <div className="flex flex-col gap-3">
              {whyPoints.map((point, i) => (
                <motion.div
                  key={point}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.4}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-navy/70 border border-white/5 hover:border-amber/15 transition-colors duration-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" />
                  <span className="text-white/60 text-sm leading-relaxed">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=2000&q=60"
            alt=""
            className="w-full h-full object-cover opacity-8"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy" />
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 text-amber text-[11px] font-bold tracking-[0.3em] uppercase mb-6">
            <span className="w-8 h-px bg-amber" />
            Ready to Go Solar?
            <span className="w-8 h-px bg-amber" />
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Get Your Free Solar
            <br />
            Assessment Today
          </h2>
          <p className="text-white/45 text-lg leading-relaxed mb-10">
            Our engineers will analyze your energy consumption and design a
            custom system with a guaranteed ROI projection — completely free of
            charge.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-amber hover:bg-amber-light text-navy font-black text-sm px-10 py-4 rounded-full tracking-wide transition-all duration-300 hover:shadow-2xl hover:shadow-amber/40 hover:-translate-y-0.5"
            >
              Request a Free Quote
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 border border-white/12 hover:border-white/25 text-white/60 hover:text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300"
            >
              View Our Projects
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-14">
            {["ISO 9001 Certified", "25-Year Warranty", "500+ Installations", "Tier-1 Panels"].map(
              (badge) => (
                <div key={badge} className="flex items-center gap-2 text-white/25">
                  <Sun className="w-3 h-3 text-amber/50" />
                  <span className="text-xs tracking-wide">{badge}</span>
                </div>
              )
            )}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
