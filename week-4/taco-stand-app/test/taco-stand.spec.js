/**
 * Author: Caleb Goforth
 * Date: 11/25/2024
 * File Name: taco-stand-spec.js
 * Description: Unit tests for TacoStandEmitter class methods
 */

"use strict";

const assert = require("assert");
const TacoStandEmitter = require("../src/taco-stand");
const tacoStand = new TacoStandEmitter();

// Test for the 'serveCustomer' method
function testServeCustomer() {
  return new Promise((resolve, reject) => {
    tacoStand.on("serve", (customer) => {
      try {
        assert.strictEqual(customer, "John Doe", "Customer should be John Doe");
        console.log("Passed testServeCustomer");
        resolve();
      } catch (err) {
        reject(`Failed testServeCustomer: ${err}`);
      }
    });

    tacoStand.serveCustomer("John Doe");
  });
}

// Test for the 'prepareTaco' method
function testPrepareTaco() {
  return new Promise((resolve, reject) => {
    tacoStand.on("prepare", (taco) => {
      try {
        assert.strictEqual(taco, "Beef Taco", "Taco should be Beef Taco");
        console.log("Passed testPrepareTaco");
        resolve();
      } catch (err) {
        reject(`Failed testPrepareTaco: ${err}`);
      }
    });

    tacoStand.prepareTaco("Beef Taco");
  });
}

// Test for the 'handleRush' method
function testHandleRush() {
  return new Promise((resolve, reject) => {
    tacoStand.on("rush", (rush) => {
      try {
        assert.strictEqual(rush, "Large Order", "Rush order should be Large Order");
        console.log("Passed testHandleRush");
        resolve();
      } catch (err) {
        reject(`Failed testHandleRush: ${err}`);
      }
    });

    tacoStand.handleRush("Large Order");
  });
}

// Running all the test functions
async function runTests() {
  try {
    await testServeCustomer();
    await testPrepareTaco();
    await testHandleRush();
    console.log("All tests passed!");
  } catch (err) {
    console.error(err);
  }
}

runTests();

