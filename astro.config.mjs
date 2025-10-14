// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    // @ts-ignore - Conflicto de tipos conocido entre Vite y @tailwindcss/vite
    plugins: [tailwindcss()],
  },

  integrations: [react()],
  i18n: { 
    locales: ["es", "en"], 
    defaultLocale: "es" 
  },
});