export type Lang = 'en' | 'ar';

export const loadTranslations = async (lang: Lang) => {
  if (lang === 'en') {
    const m = await import('./en');
    return m.default;
  }
  const m = await import('./ar');
  return m.default;
};
