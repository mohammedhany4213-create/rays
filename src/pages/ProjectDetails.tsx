import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Zap,
  Calendar,
  Settings,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";

const categoryColors: Record<string, string> = {
  Residential: "bg-sky-500/15 text-sky-300 border-sky-500/25",
  Commercial: "bg-amber/15 text-amber border-amber/25",
  Industrial: "bg-violet-500/15 text-violet-300 border-violet-500/25",
  Agricultural: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ProjectDetails() {
  const { id } = useParams();
  const { t, isRTL } = useLanguage();
  const project = projects.find((p) => p.id === id);

  const related = projects
    .filter((p) => p.id !== id && p.category === project?.category)
    .slice(0, 2);

  if (!project) {
    return (
      <div className="min-h-screen bg-navy flex flex-col items-center justify-center gap-6 text-white/40">
        <span className="text-6xl font-black text-amber/30">404</span>
        <p className="text-lg">{t.details.notFound}</p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-amber hover:text-amber-light font-semibold text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
          {t.details.backToProjects}
        </Link>
      </div>
    );
  }

  const categoryLabel = t.categories[project.category as keyof typeof t.categories] ?? project.category;

  return (
    <div className="bg-navy min-h-screen">
      {/* ─── HERO ─── */}
      <section className="relative h-[75vh] min-h-[520px] flex items-end overflow-hidden">
        <img
          src={project.coverImage}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/20" />

        {/* Breadcrumb */}
        <div className="absolute top-28 start-6 md:start-12">
          <nav className="flex items-center gap-2 text-xs text-white/40">
            <Link to="/" className="hover:text-white/70 transition-colors">{t.details.home}</Link>
            <ChevronRight className={`w-3 h-3 ${isRTL ? 'rotate-180' : ''}`} />
            <Link to="/projects" className="hover:text-white/70 transition-colors">{t.details.projects}</Link>
            <ChevronRight className={`w-3 h-3 ${isRTL ? 'rotate-180' : ''}`} />
            <span className="text-white/60 truncate max-w-[200px]">{project.title}</span>
          </nav>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border backdrop-blur-sm mb-5 ${
                categoryColors[project.category] ?? "bg-white/10 text-white border-white/20"
              }`}
            >
              {categoryLabel}
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-3">
              {project.title}
            </h1>
            <p className="text-white/55 text-base max-w-xl">{project.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* ─── QUICK SPECS ─── */}
      <section className="bg-navy-light border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { Icon: MapPin, label: t.details.quickLocation, value: project.location },
              { Icon: Zap, label: t.details.quickCapacity, value: project.capacity },
              { Icon: Settings, label: t.details.quickType, value: project.systemType },
              { Icon: Calendar, label: t.details.quickCompleted, value: project.date },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber/10 border border-amber/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-amber" />
                </div>
                <div>
                  <span className="block text-white/35 text-[10px] mb-0.5">
                    {label}
                  </span>
                  <span className="block text-white font-semibold text-sm">{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─── */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
          {/* Left col - main content */}
          <div className="lg:col-span-2 space-y-14">
            {/* Description */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-black text-white mb-5">
                {t.details.overview}
              </h2>
              <p className="text-white/55 text-sm leading-relaxed">
                {project.description}
              </p>
            </motion.div>

            {/* Challenges */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-navy-light border border-white/5"
            >
              <h3 className="text-lg font-black text-white mb-4 flex items-center gap-3">
                <span className="w-6 h-px bg-amber" />
                {t.details.challenge}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{project.challenges}</p>
            </motion.div>

            {/* Solution */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-amber/5 border border-amber/15"
            >
              <h3 className="text-lg font-black text-white mb-4 flex items-center gap-3">
                <span className="w-6 h-px bg-amber" />
                {t.details.solution}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">{project.solution}</p>
            </motion.div>

            {/* Results */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-black text-white mb-6 flex items-center gap-3">
                <span className="w-6 h-px bg-amber" />
                {t.details.results}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.results.map((result) => (
                  <div
                    key={result}
                    className="flex items-start gap-3 p-5 rounded-2xl bg-navy-light border border-white/5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" />
                    <span className="text-white/65 text-sm leading-relaxed">{result}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Gallery */}
            {project.images.length > 1 && (
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-black text-white mb-6 flex items-center gap-3">
                  <span className="w-6 h-px bg-amber" />
                  {t.details.gallery}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {project.images.map((img, i) => (
                    <div
                      key={i}
                      className={`rounded-2xl overflow-hidden ${i === 0 ? "col-span-2 aspect-video" : "aspect-video"}`}
                    >
                      <img
                        src={img}
                        alt={`${project.title} — image ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right col - sticky sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              {/* CTA card */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-navy-light border border-white/8 mb-6"
              >
                <h3 className="text-white font-black text-lg mb-3">
                  {t.details.ctaTitle}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed mb-6">
                  {t.details.ctaCopy}
                </p>
                <Link
                  to="/contact"
                  className="group flex items-center justify-center gap-2 bg-amber hover:bg-amber-light text-navy font-black text-sm px-6 py-3.5 rounded-full w-full transition-all duration-300 hover:shadow-lg hover:shadow-amber/25"
                >
                  {t.details.ctaBtn}
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 rtl:rotate-180" />
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 text-white/60 hover:text-white font-semibold text-sm px-6 py-3.5 rounded-full w-full mt-3 transition-all duration-300"
                >
                  {t.details.talkBtn}
                </Link>
              </motion.div>

              {/* Specs card */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                className="p-6 rounded-2xl border border-white/5 bg-navy-light"
              >
                <h4 className="text-white/40 text-[10px] font-semibold mb-4">
                  {t.details.specsTitle}
                </h4>
                <dl className="space-y-4">
                  {[
                    { label: t.details.specCategory, value: categoryLabel },
                    { label: t.details.specLocation, value: project.location },
                    { label: t.details.specCapacity, value: project.capacity },
                    { label: t.details.specType, value: project.systemType },
                    { label: t.details.specDate, value: project.date },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-center py-2.5 border-b border-white/5 last:border-0">
                      <dt className="text-white/35 text-xs">{label}</dt>
                      <dd className="text-white/80 text-xs font-semibold text-end max-w-[55%]">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── RELATED PROJECTS ─── */}
      {related.length > 0 && (
        <section className="py-20 px-6 bg-navy-light border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-2xl font-black text-white">
                {t.details.moreProjects(
                  t.categories[project.category as keyof typeof t.categories] ?? project.category
                )}
              </h2>
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 text-amber hover:text-amber-light font-semibold text-sm transition-colors"
              >
                {t.details.allProjects}
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 rtl:rotate-180" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((p, i) => (
                <motion.div
                  key={p.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                >
                  <Link
                    to={`/projects/${p.id}`}
                    className="group relative flex flex-col overflow-hidden rounded-2xl bg-navy border border-white/5 hover:border-amber/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40"
                  >
                    <div className="overflow-hidden aspect-video">
                      <img
                        src={p.coverImage}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-white font-bold mb-1 group-hover:text-amber transition-colors">
                        {p.title}
                      </h3>
                      <span className="text-white/40 text-sm">{p.location} · {p.capacity}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── BOTTOM CTA ─── */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-5">
            {t.details.bottomTitle}{" "}
            <span className="text-gradient">{t.details.bottomHighlight}</span>
          </h2>
          <p className="text-white/45 text-sm mb-8 leading-relaxed">
            {t.details.bottomCopy}
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-amber hover:bg-amber-light text-navy font-black text-sm px-10 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-amber/35 hover:-translate-y-0.5"
          >
            {t.details.bottomBtn}
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 rtl:rotate-180" />
          </Link>
        </div>
      </section>
    </div>
  );
}
