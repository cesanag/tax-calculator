const input1 = require("./data/input1.json");
const input2 = require("./data/input2.json");
const input3 = require("./data/input3.json");

const printReceipt = require("./printReceipt.js");

function demoPrint(number, input) {
  console.log(`Output ${number}:`);
  printReceipt.printTaxedProducts(input);
}

demoPrint(1, input1);
demoPrint(2, input2);
demoPrint(3, input3);
