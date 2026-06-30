import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    document.body.style.overflow = "";
  }, [location]);

  const toggleMobile = () => {
    setMobileOpen((v) => {
      document.body.style.overflow = !v ? "hidden" : "";
      return !v;
    });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-navy/95 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-10 bg-amber rounded-xl flex items-center justify-center shadow-md group-hover:shadow-amber/40 group-hover:scale-105 transition-all duration-300">
              <Sun className="w-5 h-5 text-navy" strokeWidth={2.5} />
            </div>
            <div className="leading-none">
              <span className="block text-white font-black text-base tracking-[0.15em]">RAYS</span>
              <span className="block text-amber font-light text-[10px] tracking-[0.4em]">ELECTRIC</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active =
                link.to === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative text-xs font-semibold tracking-[0.18em] uppercase transition-colors duration-200 group py-1 ${
                    active ? "text-amber" : "text-white/65 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-amber transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-5">
            <Link
              to="/contact"
              className="text-xs font-semibold text-white/55 hover:text-white tracking-wider uppercase transition-colors duration-200"
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-amber hover:bg-amber-light text-navy text-xs font-black px-6 py-2.5 rounded-full tracking-[0.1em] uppercase transition-all duration-300 hover:shadow-lg hover:shadow-amber/30 hover:-translate-y-0.5"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMobile}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl text-white hover:bg-white/10 transition-colors duration-200"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-navy/98 backdrop-blur-2xl flex flex-col"
          >
            <div className="pt-24 px-8 flex flex-col flex-1">
              <nav className="flex flex-col">
                {navLinks.map((link, i) => {
                  const active =
                    link.to === "/"
                      ? location.pathname === "/"
                      : location.pathname.startsWith(link.to);
                  return (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.07, duration: 0.3 }}
                    >
                      <Link
                        to={link.to}
                        className={`flex items-center gap-4 py-5 border-b border-white/5 text-2xl font-bold transition-colors ${
                          active ? "text-amber" : "text-white/75 hover:text-white"
                        }`}
                      >
                        {active && (
                          <span className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0" />
                        )}
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-10"
              >
                <Link
                  to="/contact"
                  className="block w-full bg-amber text-navy text-center font-black text-base py-4 rounded-2xl hover:bg-amber-light transition-colors tracking-wider uppercase"
                >
                  Get a Free Quote
                </Link>
              </motion.div>

              <div className="mt-auto pb-10 pt-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-amber rounded-lg flex items-center justify-center">
                  <Sun className="w-4 h-4 text-navy" />
                </div>
                <span className="text-white/25 text-sm tracking-widest">RAYS ELECTRIC</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
