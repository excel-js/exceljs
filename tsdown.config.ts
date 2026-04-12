import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    exceljs: "./lib/exceljs.browser.js",
    "exceljs.bare": "./lib/exceljs.bare.js",
    index: "./lib/exceljs.nodejs.js",
  },
  format: ["cjs"],
  // dts: true, // Generate declaration files if you're moving to TS
});
