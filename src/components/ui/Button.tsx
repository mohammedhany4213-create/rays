import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  arrow?: boolean;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  arrow = false,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const base = "inline-flex items-center gap-2 font-semibold rounded-full transition-all duration-300 cursor-pointer select-none";

  const variants = {
    primary: "bg-amber hover:bg-amber-light text-navy hover:shadow-lg hover:shadow-amber/30 hover:-translate-y-0.5",
    outline: "border border-white/25 hover:border-amber/60 text-white hover:text-amber hover:bg-amber/5",
    ghost: "text-white/70 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "text-sm px-5 py-2",
    md: "text-sm px-7 py-3",
    lg: "text-base px-9 py-4",
  };

  const cls = `${base} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 pointer-events-none' : ''} ${className}`;

  const content = (
    <>
      {children}
      {arrow && <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />}
    </>
  );

  if (to) return <Link to={to} className={`group ${cls}`}>{content}</Link>;
  if (href) return <a href={href} className={`group ${cls}`} target="_blank" rel="noopener noreferrer">{content}</a>;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`group ${cls}`}>
      {content}
    </button>
  );
}
