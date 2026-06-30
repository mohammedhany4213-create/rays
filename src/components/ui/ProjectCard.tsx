import { Link } from "react-router-dom";
import { MapPin, Zap, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const categoryColors: Record<string, string> = {
  Residential: "bg-sky-500/20 text-sky-300 border-sky-500/30",
  Commercial: "bg-amber/15 text-amber border-amber/30",
  Industrial: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  Agricultural: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-navy-light border border-white/5 hover:border-amber/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
          style={{ '--tw-scale-x': '1.08', '--tw-scale-y': '1.08' } as React.CSSProperties}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />

        {/* Category badge */}
        <span className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full border backdrop-blur-sm ${categoryColors[project.category] ?? 'bg-white/10 text-white border-white/20'}`}>
          {project.category}
        </span>

        {/* Arrow button */}
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-amber flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          <ArrowUpRight className="w-4 h-4 text-navy" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div>
          <h3 className="text-white font-bold text-lg leading-snug group-hover:text-amber transition-colors duration-300 mb-1">
            {project.title}
          </h3>
          <p className="text-white/45 text-sm line-clamp-2">{project.subtitle}</p>
        </div>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/5">
          <span className="flex items-center gap-1.5 text-white/50 text-xs">
            <MapPin className="w-3.5 h-3.5 text-amber flex-shrink-0" />
            {project.location}
          </span>
          <span className="flex items-center gap-1.5 text-white/50 text-xs">
            <Zap className="w-3.5 h-3.5 text-amber flex-shrink-0" />
            {project.capacity}
          </span>
        </div>
      </div>
    </Link>
  );
}
