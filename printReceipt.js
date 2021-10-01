const taxes = require("./taxesRules.js");
fs = require("fs");

module.exports = {
  printTaxedProducts: (input) => {
    /* Check if taxes applies*/
    const productTaxes = input.map((item) => {
      if (
        taxes.checkIfSalesTaxExemptionApplies(item.category) &&
        taxes.checkIfImportTaxApplies(item.countryOfOrigin)
      ) {
        return (
          taxes.roundUpPrice(taxes.calculateSalesTax(item.price)) +
          taxes.roundUpPrice(taxes.calculateImportTax(item.price))
        );
      } else if (taxes.checkIfSalesTaxExemptionApplies(item.category)) {
        return taxes.roundUpPrice(taxes.calculateSalesTax(item.price));
      } else if (taxes.checkIfImportTaxApplies(item.countryOfOrigin)) {
        return taxes.roundUpPrice(taxes.calculateImportTax(item.price));
      }
      return 0;
    });

    /* Calculates the total taxes */
    const totalTaxes = productTaxes.reduce((acc, item) => acc + item);

    /* Prints the shopping list */
    for (i = 0; i < input.length; i++)
      console.log(
        `${input[i].quantity} ${input[i].type} at ${(
          input[i].price + taxes.roundUpPrice(productTaxes[i])
        ).toFixed(2)}`
      );

    // Calculates the shopping list total price
    const totalBeforeTaxes = input
      .map((item) => item.price)
      .reduce((acc, item) => acc + item);

    /* Prints the total costs plus taxes */
    console.log(`Sales Taxes: ${totalTaxes.toFixed(2)}`);
    console.log(`Total: ${(totalBeforeTaxes + totalTaxes).toFixed(2)}\n`);
  },
};
