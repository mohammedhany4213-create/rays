import { Link } from "react-router-dom"
import { Search, Menu } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6">
      {/* Logo - استبدل ده بصورة اللوجو بعدين */}
      <Link to="/" className="flex items-center gap-2 text-white">
        <div className="w-9 h-9 bg-amber rounded-md flex items-center justify-center font-bold text-navy">
          R
        </div>
        <span className="text-lg font-bold tracking-wide">RAYS ELECTRIC</span>
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
        <Link to="/" className="hover:text-amber transition-colors">HOME</Link>
        <Link to="/about" className="hover:text-amber transition-colors">ABOUT</Link>
        <Link to="/projects" className="hover:text-amber transition-colors">PROJECTS</Link>
        <Link to="/contact" className="hover:text-amber transition-colors">CONTACT</Link>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <Link
          to="/contact"
          className="hidden md:inline-block border border-white/40 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-white/10 transition-colors"
        >
          CONTACT US
        </Link>
        <Link
          to="/contact"
          className="bg-amber hover:bg-amber-light text-navy text-sm font-bold px-5 py-2.5 rounded-full transition-colors"
        >
          GET A QUOTE
        </Link>
        <Search className="w-5 h-5 text-white hidden md:block cursor-pointer hover:text-amber transition-colors" />
        <Menu className="w-6 h-6 text-white cursor-pointer md:hidden" />
      </div>
    </nav>
  )
}