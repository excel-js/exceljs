// this module allows the specs to switch between source code and
// transpiled code depending on the environment variable EXCEL_BUILD

/* eslint-disable import/no-dynamic-require */

const libs = {};
const basePath = (function () {
  libs.exceljs = require("../../lib/exceljs.nodejs");
  return "../../lib/";
})();

module.exports = function verquire(path) {
  if (!libs[path]) {
    libs[path] = require(basePath + path);
  }
  return libs[path];
};
