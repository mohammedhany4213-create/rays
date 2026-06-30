import { Link } from "react-router-dom";
import { Sun, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, to: "/" },
    { label: t.nav.about, to: "/about" },
    { label: t.nav.projects, to: "/projects" },
    { label: t.nav.contact, to: "/contact" },
  ];

  const contactRows = [
    { Icon: MapPin, text: t.contact.addressValue },
    { Icon: Phone, text: t.contact.phoneValue },
    { Icon: Mail, text: t.contact.emailValue },
    { Icon: Clock, text: t.contact.hoursValue },
  ];

  return (
    <footer className="bg-navy-light border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-amber rounded-lg flex items-center justify-center">
                <Sun className="w-4 h-4 text-navy" strokeWidth={2.5} />
              </div>
              <div className="leading-none">
                <span className="block text-white font-black text-sm tracking-[0.15em]">RAYS</span>
                <span className="block text-amber font-light text-[9px] tracking-[0.4em]">ELECTRIC</span>
              </div>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-2">
              {["in", "f", "ig"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-white/8 hover:border-amber/40 hover:text-amber flex items-center justify-center text-white/35 text-xs font-bold transition-all duration-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-xs mb-6">{t.footer.companyTitle}</h4>
            <ul className="space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/40 hover:text-amber text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-xs mb-6">{t.footer.servicesTitle}</h4>
            <ul className="space-y-3.5">
              {t.footer.services.map((s) => (
                <li key={s}>
                  <Link
                    to="/projects"
                    className="text-white/40 hover:text-amber text-sm transition-colors duration-200"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-xs mb-6">{t.footer.contactTitle}</h4>
            <ul className="space-y-4">
              {contactRows.map(({ Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon className="w-3.5 h-3.5 text-amber shrink-0 mt-0.5" />
                  <span className="text-white/40 text-sm leading-relaxed whitespace-pre-line">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            {t.footer.copyright(new Date().getFullYear())}
          </p>
          <div className="flex items-center gap-6">
            {[t.footer.privacy, t.footer.terms].map((label) => (
              <a
                key={label}
                href="#"
                className="text-white/25 hover:text-white/50 text-xs transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
