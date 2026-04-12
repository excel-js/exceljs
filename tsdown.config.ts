import { defineConfig } from "tsdown";
import nodePolyfills from "@rolldown/plugin-node-polyfills";

export default defineConfig([
  {
    entry: { exceljs: "./lib/exceljs.browser.js" },
    format: ["cjs"],
    platform: "browser",
    plugins: [nodePolyfills()],
    exports: true,
  },

  {
    entry: { "exceljs.bare": "./lib/exceljs.bare.js" },
    format: ["cjs"],
    exports: true,
  },

  {
    entry: { index: "./lib/exceljs.nodejs.js" },
    format: ["cjs"],
    platform: "node",
    exports: true,
  },
]);
