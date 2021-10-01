const input1 = require("./data/input1.json");
const input2 = require("./data/input2.json");
const input3 = require("./data/input3.json");

const printReceipt = require("./printReceipt.js");

const print = () => {
  printReceipt.printTaxedProducts(1, input1);
  printReceipt.printTaxedProducts(2, input2);
  printReceipt.printTaxedProducts(3, input3);
};

print();
