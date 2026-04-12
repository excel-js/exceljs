import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    index: "./lib/exceljs.nodejs.js",
    "exceljs.bare": "./lib/exceljs.bare.js",
  },
  exports: true,
});
