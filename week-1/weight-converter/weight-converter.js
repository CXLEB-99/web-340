/**
 * Author: Caleb Goforth
 * Date: 10/29/2024
 * File Name: weight-converter  
 * Description:
*/

"use strict";


// Function to convert pounds to kilograms
function poundsToKilograms(pounds) {
    return pounds * 0.453592;
}

// Get the command line argument for pounds
const args = process.argv.slice(2);

// Check if there is no argument
if (args.length === 0) {
    console.error('Usage: node weight-converter.js <pounds>');
    process.exit(1);
}

// Parse the argument to a number
const pounds = parseFloat(args[0]);

// Check if the argument is not a valid number
if (isNaN(pounds)) {
    console.error('Input must be a number.');
    process.exit(1);
}

// Calculate and print the weight in kilograms, rounded to two decimal places
const kilograms = poundsToKilograms(pounds);
console.log(kilograms.toFixed(2));