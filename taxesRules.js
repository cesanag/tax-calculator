module.exports = {
  /* Basic Sales Tax at 10% */
  calculateSalesTax: (priceBeforeTaxes) => {
    const taxPercentage = 10;
    if (typeof priceBeforeTaxes === "number" && priceBeforeTaxes > 0) {
      const result = (priceBeforeTaxes * taxPercentage) / 100;
      return result;
    } else {
      return null;
    }
  },

  /* Import Duty Tax at 5% */
  calculateImportTax: (priceBeforeTaxes) => {
    const taxPercentage = 5;
    const result = (priceBeforeTaxes * taxPercentage) / 100;
    return result;
  },

  /* Rounding up to 0.05 */
  roundUpPrice: (priceBeforeTaxes) => {
    const roundingFactor = 0.05;
    const result =
      Math.round(priceBeforeTaxes / roundingFactor) * roundingFactor;
    return result;
  },
};
