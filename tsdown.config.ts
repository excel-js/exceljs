import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    index: "./lib/exceljs.nodejs.js",
    workbook: "./lib/doc/workbook.js",
    modelcontainer: "./lib/doc/modelcontainer.js",
  },
  exports: {
    customExports(exports) {
      // Declarations are hand-written at the package root, so tsdown can't infer them.
      exports["."] = { types: "./index.d.ts", default: exports["."] };
      return exports;
    },
  },
});
