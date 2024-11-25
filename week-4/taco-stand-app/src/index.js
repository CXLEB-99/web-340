/**
 * Author: Caleb Goforth
 * Date: 11/25/2024
 * File Name: index.js
 * Description: CLI for the Taco Stand using the TacoStandEmitter class
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("./tacoStand");

const tacoStand = new TacoStandEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Set up event listeners for the tacoStand object
tacoStand.on("serve", (customer) => {
  console.log(`Serving customer: ${customer}`);
});

tacoStand.on("prepare", (taco) => {
  console.log(`Preparing taco: ${taco}`);
});

tacoStand.on("rush", (rush) => {
  console.log(`Rush order received: ${rush}`);
});

// Handle user commands
rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");
  const argument = args.join(" "); // Combine the remaining args for multi-word inputs

  switch (command.toLowerCase()) {
    case "serve":
      if (argument) {
        tacoStand.serveCustomer(argument);
      } else {
        console.log("Please specify a customer to serve.");
      }
      break;

    case "prepare":
      if (argument) {
        tacoStand.prepareTaco(argument);
      } else {
        console.log("Please specify a taco to prepare.");
      }
      break;

    case "rush":
      if (argument) {
        tacoStand.handleRush(argument);
      } else {
        console.log("Please specify a rush order.");
      }
      break;

    case "exit":
      console.log("Exiting Taco Stand CLI. Goodbye!");
      rl.close();
      break;

    default:
      console.log(`Unknown command: "${command}". Try "serve", "prepare", or "rush".`);
  }
});

console.log(`Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`);
console.log(`Type "exit" to quit the program.`);
