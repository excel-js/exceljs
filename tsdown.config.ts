import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    index: "./lib/exceljs.nodejs.js",
    workbook: "./lib/doc/workbook.js",
    modelcontainer: "./lib/doc/modelcontainer.js",
  },
  exports: true,
});
