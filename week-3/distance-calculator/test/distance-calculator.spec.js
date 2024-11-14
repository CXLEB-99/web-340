// test/distance-calculator.spec.js
"use strict";

// Import the function to test from the distance-calculator module
const calculateDistance = require('../src/distance-calculator');

// Test: Should calculate the correct distance between Earth and Mars
test('should calculate the correct distance between Earth and Mars', () => {
  const result = calculateDistance('Earth', 'Mars');
  // Assert that the result is equal to the expected value (0.52 AU)
  expect(result).toBe(0.52);  
  // Note: In a traditional setup, we might wrap this test in a try/catch block to handle errors:
  // try {
  //   expect(result).toBe(0.52);
  //   console.log("Passed testEarthToMars");
  // } catch (error) {
  //   console.error(`Failed testEarthToMars: ${error.message}`);
  // }
});

// Test: Should calculate the correct distance between Venus and Jupiter
test('should calculate the correct distance between Venus and Jupiter', () => {
  const result = calculateDistance('Venus', 'Jupiter');
  // Assert that the result is equal to the expected value (4.48 AU)
  expect(result).toBe(4.48);
  // Similar comment for try/catch
});

// Test: Should throw an error for invalid planet
test('should throw an error for invalid planet', () => {
  expect(() => {
    calculateDistance('Earth', 'Pluto');
  }).toThrow('Invalid planet');  // The error message expected
  // Note: In a traditional setup, we might wrap this test in a try/catch block as well:
  // try {
  //   expect(() => { calculateDistance('Earth', 'Pluto'); }).toThrow('Invalid planet');
  //   console.log("Passed testInvalidPlanet");
  // } catch (error) {
  //   console.error(`Failed testInvalidPlanet: ${error.message}`);
  // }
});


