import { useParams } from "react-router-dom"
import { projects } from "@/data/projects"

export default function ProjectDetails() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) return <div className="min-h-screen flex items-center justify-center">Project not found</div>

  return (
    <div className="min-h-screen flex items-center justify-center">
      {project.title}
    </div>
  )
}