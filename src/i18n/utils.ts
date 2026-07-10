import { type Translation } from './translation';
import { en } from './translations/en';
import { id } from './translations/id';

export const defaultLocale = 'en';
export const locales = ['en', 'id'];
export const ogLocales: Record<string, string> = {
  en: 'en_US',
  id: 'id_ID',
};
export const prefixDefaultLocale = true;

const base = import.meta.env.BASE_URL;
const translations: Record<string, Translation> = { en, id };

export function getStaticPaths() {
  return locales.map((lang) => ({
    params: { lang: lang === defaultLocale && !prefixDefaultLocale ? undefined : lang },
  }));
}

export function getLabels<K extends keyof Translation>(currentLocale: string | undefined, key: K): Translation[K] {
  const lang = currentLocale || defaultLocale;
  return translations[lang]?.[key] || translations[defaultLocale][key];
}

export function getRelativePath(pathname: string, locale: string): string {
  return pathname.replace(base, '').replace(new RegExp(`^/${locale}(/|$)`), '/');
}
