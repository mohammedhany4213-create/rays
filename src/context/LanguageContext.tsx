import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { loadTranslations, type Lang } from '@/lib/translations';

interface LanguageContextType {
  lang: Lang;
  toggle: () => void;
  t: any;
  isRTL: boolean;
  loading: boolean;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ar');
  const [t, setT] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const toggle = () => setLang((l) => (l === 'en' ? 'ar' : 'en'));
  const isRTL = lang === 'ar';

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    loadTranslations(lang)
      .then((tr) => {
        if (!mounted) return;
        setT(tr);
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, [lang]);

  const fallback = {
    nav: { home: '...', about: '...', projects: '...', contact: '...' },
    categories: { All: 'All' },
  };

  return (
    <LanguageContext.Provider value={{ lang, toggle, t: t ?? fallback, isRTL, loading }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
