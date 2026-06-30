import { createContext, useContext, useState, type ReactNode } from 'react';
import { translations } from '@/lib/translations';

export type Lang = 'en' | 'ar';

interface LanguageContextType {
  lang: Lang;
  toggle: () => void;
  t: typeof translations.en;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ar');
  const toggle = () => setLang((l) => (l === 'en' ? 'ar' : 'en'));
  const isRTL = lang === 'ar';
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggle, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
