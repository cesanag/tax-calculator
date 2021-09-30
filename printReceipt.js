const taxes = require("./taxesRules.js");

module.exports = {
  printTaxedProducts: (inputNumber, input) => {
    // Calculates the shopping list total price
    const totalBeforeTaxes = input
      .map((item) => item.price)
      .reduce((acc, item) => acc + item);

    /* Calculates the product tax conditionally by 'imported' && 'taxExemption' values*/
    const productTaxes = input.map((item) => {
      if (!item.taxExemption && item.imported) {
        return (
          taxes.calculateSalesTax(item.price) +
          taxes.calculateImportTax(item.price)
        );
      } else if (!item.taxExemption) {
        return taxes.calculateSalesTax(item.price);
      } else if (item.imported) {
        return taxes.calculateImportTax(item.price);
      } else {
        return 0;
      }
    });

    /* Calculates the total taxes */
    const totalTaxes = productTaxes.reduce((acc, item) => acc + item);

    /* Prints the shopping list */
    process.stdout.write(`Output ${inputNumber}: \n`);
    for (i = 0; i < input.length; i++)
      process.stdout.write(
        `${input[i].quantity} ${input[i].name} at ${(
          input[i].price + productTaxes[i]
        ).toFixed(2)}\n`
      );

    /* Prints total costs plus taxes */
    const totalAfterTaxes = totalBeforeTaxes + totalTaxes;
    process.stdout.write(`Sales Taxes: ${totalTaxes.toFixed(2)}\n`);
    process.stdout.write(`Total: ${totalAfterTaxes.toFixed(2)}\n\n`);
  },
};
