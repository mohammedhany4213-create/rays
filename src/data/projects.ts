export interface Project {
  id: string
  title: string
  category: string
  coverImage: string
  images: string[]
  location: string
  capacity: string
  date: string
  description: string
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "تركيب ألواح شمسية - فيلا التجمع الخامس",
    category: "سكني",
    coverImage: "/images/projects/project-1-cover.jpg",
    images: [
      "/images/projects/project-1-1.jpg",
      "/images/projects/project-1-2.jpg",
    ],
    location: "القاهرة الجديدة",
    capacity: "10 kW",
    date: "2025",
    description: "وصف تفصيلي للمشروع هيتحط هنا.",
  },
]