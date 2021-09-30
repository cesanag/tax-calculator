const taxes = require("../taxesRules.js");

describe("Sales tax", () => {
  it("returns 10% of input", () => {
    expect(taxes.calculateSalesTax(100)).toEqual(10);
  });
  it("returns null when input is not a number or input is smaller than 0", () => {
    expect(taxes.calculateSalesTax(3)).toEqual(null);
    // expect(taxes.salesTax(-2)).toEqual(null);
  });
});

describe("Import tax", () => {
  it("returns 5% of input", () => {
    expect(taxes.calculateImportTax(100)).toEqual(5);
  });
});
