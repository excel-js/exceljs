import { describe, it, expect } from "bun:test";

import SharedStrings from "#utils/shared-strings";

describe("SharedStrings", () => {
  it("Stores and shares string values", () => {
    const ss = new SharedStrings();

    const iHello = ss.add("Hello");
    const iHelloV2 = ss.add("Hello");
    const iGoodbye = ss.add("Goodbye");

    expect(iHello).toEqual(iHelloV2);
    expect(iGoodbye).not.toEqual(iHelloV2);

    expect(ss.count).toEqual(2);
    expect(ss.totalRefs).toEqual(3);
  });

  it("Does not escape values", () => {
    // that's the job of the xml utils
    const ss = new SharedStrings();

    const iXml = ss.add("<tag>value</tag>");
    const iAmpersand = ss.add("&");

    expect(ss.getString(iXml)).toEqual("<tag>value</tag>");
    expect(ss.getString(iAmpersand)).toEqual("&");
  });
});
