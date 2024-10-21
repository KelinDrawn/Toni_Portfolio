import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://kelindrawn.github.io",
  base: "Toni_Portfolio",

  vite: {
    plugins: [
      {
        name: "svg-loader",
        enforce: "pre",
        load(id) {
          if (id.endsWith(".svg")) {
            return `export default ${JSON.stringify(id)}`;
          }
        },
      },
    ],
  },
});
