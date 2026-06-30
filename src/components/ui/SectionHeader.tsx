interface SectionHeaderProps {
  label?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeader({
  label,
  title,
  highlight,
  description,
  align = 'center',
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-start items-start';

  return (
    <div className={`flex flex-col gap-4 ${alignClass}`}>
      {label && (
        <span className="inline-flex items-center gap-2 text-amber text-xs font-bold">
          <span className="w-6 h-px bg-amber" />
          {label}
          <span className="w-6 h-px bg-amber" />
        </span>
      )}
      <h2 className={`font-bold leading-tight ${light ? 'text-navy' : 'text-white'} text-2xl md:text-3xl lg:text-4xl`}>
        {title}
        {highlight && (
          <>
            {' '}
            <span className="text-gradient">{highlight}</span>
          </>
        )}
      </h2>
      {description && (
        <p className={`text-base max-w-2xl leading-relaxed ${light ? 'text-navy/60' : 'text-white/55'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
