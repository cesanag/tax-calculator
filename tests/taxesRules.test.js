const taxes = require("../taxesRules.js");

describe("Sales tax", () => {
  it("returns 10% of input", () => {
    expect(taxes.calculateSalesTax(100)).toEqual(10);
  });
  it("returns null when input is not a number or input is smaller than 0", () => {
    expect(taxes.calculateSalesTax("Test string")).toEqual(null);
    expect(taxes.calculateSalesTax(-2)).toEqual(null);
  });
});

describe("Import tax", () => {
  it("returns 5% of input", () => {
    expect(taxes.calculateImportTax(100)).toEqual(5);
    expect(taxes.calculateImportTax(100)).toEqual(5);
  });
});

describe("Round up the product price", () => {
  it("rounds up the product price by 0.05", () => {
    expect(taxes.roundUpPrice(26.58)).toEqual(26.6);
    expect(taxes.roundUpPrice(467.7423)).toEqual(467.75);
    expect(taxes.roundUpPrice(0.042834923477234)).toEqual(0.05);
  });
});

describe("Check if sales tax applies", () => {
  it("returns true if category is not a book, food or medical", () => {
    expect(taxes.checkIfSalesTaxExemptionApplies("music")).toEqual(true);
    expect(taxes.checkIfSalesTaxExemptionApplies("test category")).toEqual(
      true
    );
  });
  it("returns false if category is book, food or medical", () => {
    expect(taxes.checkIfSalesTaxExemptionApplies("book")).toEqual(false);
    expect(taxes.checkIfSalesTaxExemptionApplies("food")).toEqual(false);
  });
});

describe("Check if import tax applies", () => {
  it("returns true if country of origin is not Italy", () => {
    expect(taxes.checkIfImportTaxApplies("italy")).toEqual(false);
    expect(taxes.checkIfImportTaxApplies("not italy")).toEqual(true);
  });
});
