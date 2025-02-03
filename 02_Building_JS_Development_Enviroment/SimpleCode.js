console.log("Hello World!"); // Hello World!

const yargs = require("yargs");
const { add, subtract } = require("./Calculator");

const options = yargs(process.argv);
options.boolean();

console.log(add(1, 2)); // 3
console.log(subtract(2, 1)); // 1