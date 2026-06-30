import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, projectCategories } from "@/data/projects";
import type { ProjectCategory } from "@/data/projects";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Projects() {
  const [active, setActive] = useState<ProjectCategory | "All">("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="bg-navy min-h-screen">
      {/* ─── HERO ─── */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-amber text-[11px] font-bold tracking-[0.3em] uppercase mb-6"
          >
            <span className="w-8 h-px bg-amber" />
            Our Portfolio
            <span className="w-8 h-px bg-amber" />
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
          >
            Projects That
            <br />
            <span className="text-gradient">Speak for Themselves</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed"
          >
            From compact residential rooftops to massive industrial installations —
            every project is a story of precision engineering and lasting impact.
          </motion.p>
        </div>
      </section>

      {/* ─── FILTER TABS ─── */}
      <div className="sticky top-20 z-30 bg-navy/90 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            {(["All", ...projectCategories] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-250 ${
                  active === cat
                    ? "bg-amber text-navy shadow-lg shadow-amber/20"
                    : "border border-white/10 text-white/50 hover:border-white/25 hover:text-white/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ─── PROJECT GRID ─── */}
      <section className="py-16 px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          {/* Result count */}
          <motion.p
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white/30 text-sm mb-8 tracking-wide"
          >
            Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            {active !== "All" ? ` in ${active}` : ""}
          </motion.p>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-white/25 text-base">
              No projects found in this category yet.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
