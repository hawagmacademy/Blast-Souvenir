import { describe, it, expect } from 'vitest';
import {
  getStaticPaths,
  getLabels,
  getRelativePath,
  defaultLocale,
  locales,
  ogLocales,
  prefixDefaultLocale,
} from '@i18n/utils';

const base = import.meta.env.BASE_URL;

describe('i18n utils', () => {
  it('exports correct constants', () => {
    expect(defaultLocale).toBe('en');
    expect(locales).toEqual(['en', 'id']);
    expect(ogLocales).toEqual({ en: 'en_US', id: 'id_ID' });
    expect(prefixDefaultLocale).toBe(false);
  });

  describe('getStaticPaths', () => {
    it('returns the correct paths for locales', () => {
      const paths = getStaticPaths();
      expect(paths).toHaveLength(2);
      expect(paths).toEqual([{ params: { lang: undefined } }, { params: { lang: 'id' } }]);
    });
  });

  describe('getLabels', () => {
    it('returns translations for a given locale and key', () => {
      const homeEn = getLabels('en', 'home');
      const homeId = getLabels('id', 'home');

      expect(homeEn).toBeDefined();
      expect(homeId).toBeDefined();
      expect(homeEn).not.toEqual(homeId);
    });

    it('falls back to defaultLocale when currentLocale is undefined', () => {
      const homeUndefined = getLabels(undefined, 'home');
      const homeDefault = getLabels(defaultLocale, 'home');

      expect(homeUndefined).toEqual(homeDefault);
    });

    it('falls back to defaultLocale for unknown locale', () => {
      const homeUnknown = getLabels('es', 'home');
      const homeDefault = getLabels(defaultLocale, 'home');

      expect(homeUnknown).toEqual(homeDefault);
    });

    it('every locale defines all top-level translation keys', async () => {
      const { en } = await import('@i18n/translations/en');
      const { id } = await import('@i18n/translations/id');

      const allLocaleTranslations: Record<string, typeof en> = { en, id };
      const expectedKeys = Object.keys(en) as Array<keyof typeof en>;

      for (const locale of locales) {
        const translation = allLocaleTranslations[locale];
        for (const key of expectedKeys) {
          expect(translation, `Locale "${locale}" is missing key "${key}"`).toHaveProperty(key);
        }
      }
    });

    it('every locale returns a defined value for every top-level key', async () => {
      const { en } = await import('@i18n/translations/en');
      const expectedKeys = Object.keys(en) as Array<keyof typeof en>;

      for (const locale of locales) {
        for (const key of expectedKeys) {
          expect(getLabels(locale, key), `getLabels("${locale}", "${key}") returned undefined`).toBeDefined();
        }
      }
    });

    it('array fields in translations have consistent length across locales', async () => {
      const { en } = await import('@i18n/translations/en');
      const { id } = await import('@i18n/translations/id');

      const arrayKeys = (Object.keys(en) as Array<keyof typeof en>).filter((key) => Array.isArray((en as any)[key]));

      for (const key of arrayKeys) {
        const enLen = ((en as any)[key] as unknown[]).length;
        const idLen = ((id as any)[key] as unknown[]).length;
        expect(idLen, `Array key "${key}": id has ${idLen} items but en has ${enLen}`).toBe(enLen);
      }
    });
  });

  describe('getRelativePath', () => {
    it('removes the locale prefix correctly from pathnames', () => {
      expect(getRelativePath(`${base}/en/about`, 'en')).toBe('/about');
      expect(getRelativePath(`${base}/id/contact`, 'id')).toBe('/contact');
      expect(getRelativePath(`${base}/en/`, 'en')).toBe('/');
      expect(getRelativePath(`${base}/en`, 'en')).toBe('/');
      expect(getRelativePath(`${base}/id`, 'id')).toBe('/');
      expect(getRelativePath(`${base}/`, 'en')).toBe('/');
      expect(getRelativePath('', 'en')).toBe('');
    });

    it('does not remove the locale if it is part of a larger path segment', () => {
      expect(getRelativePath(`${base}/enrollment`, 'en')).toBe('/enrollment');
      expect(getRelativePath(`${base}/french-fries`, 'id')).toBe('/french-fries');
      expect(getRelativePath(`${base}/fr-ch`, 'id')).toBe('/fr-ch');
    });

    it('returns the path unmodified if the locale is not at the start', () => {
      expect(getRelativePath(`${base}/about/en`, 'en')).toBe('/about/en');
    });
  });
});
