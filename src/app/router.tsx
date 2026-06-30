import { createBrowserRouter } from "react-router-dom"
import RootLayout from "@/components/layout/RootLayout"
import Home from "@/pages/Home"
import About from "@/pages/About"
import Projects from "@/pages/Projects"
import ProjectDetails from "@/pages/ProjectDetails"
import Contact from "@/pages/Contact"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
      { path: "projects/:id", element: <ProjectDetails /> },
      { path: "contact", element: <Contact /> },
    ],
  },
])