const Workbook = require("./doc/workbook");
const ModelContainer = require("./doc/modelcontainer");

const WorkbookWriter = require("./stream/xlsx/workbook-writer");
const WorkbookReader = require("./stream/xlsx/workbook-reader");

const Enums = require("./doc/enums");

const ExcelJS = {
  Workbook,
  ModelContainer,
  stream: { xlsx: { WorkbookWriter, WorkbookReader } },
};

Object.assign(ExcelJS, Enums);

export default ExcelJS;
