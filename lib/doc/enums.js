"use strict";

const ValueType = {
  Null: 0,
  Merge: 1,
  Number: 2,
  String: 3,
  Date: 4,
  Hyperlink: 5,
  Formula: 6,
  SharedString: 7,
  RichText: 8,
  Boolean: 9,
  Error: 10,
};

const FormulaType = {
  None: 0,
  Master: 1,
  Shared: 2,
};

const RelationshipType = {
  None: 0,
  OfficeDocument: 1,
  Worksheet: 2,
  CalcChain: 3,
  SharedStrings: 4,
  Styles: 5,
  Theme: 6,
  Hyperlink: 7,
};

const DocumentType = {
  Xlsx: 1,
};

const ReadingOrder = {
  LeftToRight: 1,
  RightToLeft: 2,
};

const ErrorValue = {
  NotApplicable: "#N/A",
  Ref: "#REF!",
  Name: "#NAME?",
  DivZero: "#DIV/0!",
  Null: "#NULL!",
  Value: "#VALUE!",
  Num: "#NUM!",
};

module.exports = {
  ValueType,
  FormulaType,
  RelationshipType,
  DocumentType,
  ReadingOrder,
  ErrorValue,
};
