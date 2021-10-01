module.exports = {
  /* Basic Sales Tax at 10% */
  calculateSalesTax: (priceBeforeTaxes) => {
    const taxPercentage = 10;
    if (typeof priceBeforeTaxes === "number" && priceBeforeTaxes > 0) {
      const result = (priceBeforeTaxes * taxPercentage) / 100;
      return result;
    }
    return null;
  },

  /* Import Duty Tax at 5% */
  calculateImportTax: (priceBeforeTaxes) => {
    const taxPercentage = 5;
    if (typeof priceBeforeTaxes === "number" && priceBeforeTaxes > 0) {
      const result = (priceBeforeTaxes * taxPercentage) / 100;
      return result;
    }
    return null;
  },

  /* Rounding up to 0.05 */
  roundUpPrice: (priceBeforeRounding) => {
    if (typeof priceBeforeRounding === "number" && priceBeforeRounding > 0) {
      const result = Math.ceil(priceBeforeRounding * 20) / 20;
      return result;
    }
    return null;
  },

  /* Check if product category has sales tax exemption  */
  checkIfSalesTaxExemptionApplies: (productCategory) => {
    const taxExemptedCategories = ["food", "book", "medical"];
    if (!taxExemptedCategories.includes(productCategory)) {
      return true;
    }
    return false;
  },

  /* Check if product is imported */
  checkIfImportTaxApplies: (countryOfOrigin) => {
    if (countryOfOrigin !== "italy") {
      return true;
    }
    return false;
  },
};
