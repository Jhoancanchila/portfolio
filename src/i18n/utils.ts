// src/i18n/utils.ts
import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = new URL(url).pathname;
  const parts = pathname?.split('/');
  const path = parts.pop() || parts.pop();

  if (path === undefined) {
    return undefined;
  }

  const currentLang = getLangFromUrl(url);

  if (defaultLang === currentLang) {
    return path;
  }

  return path.replace(`${currentLang}/`, '');
}

// Utilidad para traducir rutas
export function translatePath(path: string, targetLang: string) {
  if (targetLang === defaultLang) {
    return path;
  }
  return `/${targetLang}${path}`;
}

/**
 * Función para traducir texto basado en claves de traducción
 * Si el texto es una clave de traducción (ej: 'nav.experience'), lo traduce
 * Si no, devuelve el texto original (útil para retrocompatibilidad)
 * 
 * @param text - El texto o clave de traducción a procesar
 * @param lang - El idioma al que traducir
 * @returns El texto traducido o el texto original
 * 
 * @example
 * getTranslatedText('nav.experience', 'es') // Returns: 'Experiencia'
 * getTranslatedText('Texto normal', 'es') // Returns: 'Texto normal'
 */
export function getTranslatedText(text: string, lang: keyof typeof ui): string {
  // Verificar si el texto es una clave de traducción válida
  const isTranslationKey = text.includes('.') && text.split('.').length === 2;
  
  if (isTranslationKey) {
    // Verificar si la clave existe en el objeto de traducciones
    const key = text as keyof typeof ui[typeof defaultLang];
    if (key in ui[defaultLang]) {
      const t = useTranslations(lang);
      return t(key);
    }
  }
  
  return text;
}
